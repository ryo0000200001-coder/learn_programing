---
title: Go の Web API を読む ― net/http と JSON
level: 3
minutes: 20
concepts: [http_api, backend, data_formats, reading]
summary: 標準ライブラリだけで書いたタスク管理の API を 1 行ずつ読む。構造体のタグで JSON にする、ハンドラーの (w, r)、GET /tasks/{id} のルーティング、エラーで 400・404 を返す、Mutex で守る。実際に curl で叩いた結果つき。
---
## このレッスンのゴール

- `http.HandleFunc` とハンドラー `func(w http.ResponseWriter, r *http.Request)` を読める
- 構造体のタグ（`` `json:"id"` ``）と、JSON の読み書きが分かる
- このコースで学んだこと（エラー・ポインタ・Mutex）が、実際の API でどう使われているか説明できる

バックエンドコースで FastAPI（Python）で作ったような API を、Go の **標準ライブラリだけ** で書いたものです。

## 全体

```go
package main

import (
	"encoding/json"
	"log"
	"net/http"
	"strconv"
	"sync"
)

type Task struct {
	ID    int    `json:"id"`
	Title string `json:"title"`
	Done  bool   `json:"done"`
}

type store struct {
	mu     sync.Mutex
	tasks  []Task
	nextID int
}

func (s *store) list(w http.ResponseWriter, r *http.Request) {
	s.mu.Lock()
	defer s.mu.Unlock()
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(s.tasks)
}

func (s *store) create(w http.ResponseWriter, r *http.Request) {
	var in struct {
		Title string `json:"title"`
	}
	if err := json.NewDecoder(r.Body).Decode(&in); err != nil || in.Title == "" {
		http.Error(w, "title は必須です", http.StatusBadRequest)
		return
	}
	s.mu.Lock()
	defer s.mu.Unlock()
	s.nextID++
	t := Task{ID: s.nextID, Title: in.Title}
	s.tasks = append(s.tasks, t)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(t)
}

func (s *store) get(w http.ResponseWriter, r *http.Request) {
	id, err := strconv.Atoi(r.PathValue("id"))
	if err != nil {
		http.Error(w, "id は数字です", http.StatusBadRequest)
		return
	}
	s.mu.Lock()
	defer s.mu.Unlock()
	for _, t := range s.tasks {
		if t.ID == id {
			json.NewEncoder(w).Encode(t)
			return
		}
	}
	http.Error(w, "見つかりません", http.StatusNotFound)
}

func main() {
	s := &store{tasks: []Task{}}
	http.HandleFunc("GET /tasks", s.list)
	http.HandleFunc("POST /tasks", s.create)
	http.HandleFunc("GET /tasks/{id}", s.get)
	log.Println("http://localhost:8080 で待っています")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
```

## 実際に叩いてみる

```text
$ curl localhost:8080/tasks
[]
$ curl -X POST localhost:8080/tasks -d '{"title":"牛乳を買う"}'
{"id":1,"title":"牛乳を買う","done":false}               201
$ curl -X POST localhost:8080/tasks -d '{}'
title は必須です                                         400
$ curl localhost:8080/tasks/1
{"id":1,"title":"牛乳を買う","done":false}               200
$ curl localhost:8080/tasks/9
見つかりません                                           404
$ curl localhost:8080/tasks/abc
id は数字です                                            400
$ curl -X DELETE localhost:8080/tasks/1
Method Not Allowed                                       405
```

（右の数字はステータスコード。バックエンドコースの「HTTP」）

## 上から読む

### データの形：構造体とタグ

```go
type Task struct {
	ID    int    `json:"id"`
	Title string `json:"title"`
	Done  bool   `json:"done"`
}
```

`` `json:"id"` `` は **構造体のタグ** で、「JSON にするときは `id` という名前にして」という指定です。Go の項目名は外から使うため大文字（レッスン 1）ですが、JSON では小文字の `id` にしたい、という食い違いをこれで埋めています。

FastAPI の Pydantic のモデル（`class Task(BaseModel): id: int ...`）に当たります。

### 状態：store と Mutex

```go
type store struct {
	mu     sync.Mutex
	tasks  []Task
	nextID int
}
```

タスクの一覧をメモリに持っています（再起動すると消える。本物はデータベースへ）。`mu` があるのは、Go の HTTP サーバーが **リクエストごとに goroutine を起動して、同時に処理する** からです。2 つの POST が同時に来ても `nextID` や `tasks` が壊れないよう、レッスン 5 の Mutex で守っています。

### ハンドラー：(w, r)

```go
func (s *store) list(w http.ResponseWriter, r *http.Request) {
```

| 引数 | 意味 |
|---|---|
| `w http.ResponseWriter` | **返事を書き込む先**。ヘッダー・ステータスコード・本文を書く |
| `r *http.Request` | **届いたリクエスト**。メソッド・URL・ヘッダー・本文 |

Go の Web のコードは、ほぼすべてこの `(w, r)` の形です。FastAPI の「関数の引数で受け取り、`return` で返す」と違い、**返事は w に書き込んで** 返します。

`(s *store)` と `*` 付きのメソッドなのは、`create` で中身（tasks）を変えるからです（レッスン 3）。

### JSON を返す・受け取る

```go
json.NewEncoder(w).Encode(s.tasks)              // s.tasks を JSON にして w に書く

var in struct { Title string `json:"title"` }
json.NewDecoder(r.Body).Decode(&in)             // リクエストの本文の JSON を in に読む
```

`&in` の `&` は「in の場所（ポインタ）」で、Decode が in の中身を書き換えられるように渡しています。

受け取る側を **Title だけの構造体** にしているのがポイントです。`{"title": "...", "id": 999, "done": true}` を送られても、`id` や `done` は無視されます。セキュリティのコースの **マスアサインメント** の対策になっています。

### エラーで止める

```go
if err := json.NewDecoder(r.Body).Decode(&in); err != nil || in.Title == "" {
	http.Error(w, "title は必須です", http.StatusBadRequest)
	return
}
```

レッスン 2 の「`if 準備の文; 条件`」と、レッスン 4 の `if err != nil` の組み合わせです。JSON が壊れているか、title が空なら、**400 を返して `return`**。この `return` を忘れると、エラーを返した後も処理が続いてしまうので要注意です。

### ルーティング

```go
http.HandleFunc("GET /tasks", s.list)
http.HandleFunc("POST /tasks", s.create)
http.HandleFunc("GET /tasks/{id}", s.get)
```

「GET で /tasks に来たら s.list」のように、**メソッドとパス** で振り分けています（Go 1.22 から標準ライブラリだけで書けるようになりました）。`{id}` の部分は `r.PathValue("id")` で取り出せます。登録していない DELETE には、Go が自動で **405 Method Not Allowed** を返しました。

FastAPI の `@app.get("/tasks/{id}")` と同じ考え方です。古い Go のコードや、Gin・Echo・chi などのライブラリでは `r.GET("/tasks/:id", ...)` のような書き方もよく見ます。

### 起動

```go
log.Fatal(http.ListenAndServe(":8080", nil))
```

8080 番のポートでリクエストを待ち続けます。起動に失敗したら（ポートが使用中など。コンピュータの基礎コースのレッスン 6）、`log.Fatal` でエラーを出して終了します。

## FastAPI と並べると

| | Go（net/http） | Python（FastAPI） |
|---|---|---|
| データの形 | 構造体 ＋ `json` タグ | Pydantic のモデル |
| ルーティング | `http.HandleFunc("GET /tasks/{id}", h)` | `@app.get("/tasks/{id}")` |
| パスの値 | `r.PathValue("id")` → 自分で `strconv.Atoi` | 引数 `id: int`（自動で変換・チェック） |
| 返事 | `w` に書き込む | `return` する |
| エラー | `http.Error(w, "...", 404); return` | `raise HTTPException(404)` |
| 同時のリクエスト | goroutine で並行に処理（Mutex が必要なことも） | async / スレッド |

Go は **自分で書く部分が多い** 代わりに、**何が起きているかが全部コードに書いてある** のが特徴です。

## AI のコードではこう出てくる

| 見かけたら | チェック |
|---|---|
| `http.Error(...)` の後に `return` が無い | ⚠️ エラーを返した後も処理が続く |
| ハンドラーの中で、構造体のマップやスライスを書き換えているのに Mutex が無い | ⚠️ 同時のリクエストでデータ競合（`go run -race` で確認） |
| `json.NewDecoder(r.Body).Decode(&user)` で、データベースのモデルに直接読み込んでいる | ⚠️ マスアサインメント。入力用の構造体を分ける |
| `` `json:"password"` `` | ⚠️ JSON で返すときにパスワードも出てしまう。`` `json:"-"` `` で出さない |
| `defer r.Body.Close()` | 本文を閉じる。サーバー側では Go が自動で閉じるが、HTTP クライアント側では必須 |

```quiz
? Go のハンドラー `func(w http.ResponseWriter, r *http.Request)` で、返事を返すには？
- `return` で値を返す
+ `w` にヘッダーや本文を書き込む
- `r` に書き込む
> Go の HTTP のハンドラーは、返事を w（ResponseWriter）に書き込みます。r は届いたリクエストです。

? 構造体の項目に付いた `` `json:"title"` `` の意味は？
+ JSON にしたり読んだりするとき、この項目の名前を `title` にする
- この項目を JSON に含めない
- title という型にする
> Go の項目名は大文字ですが、JSON では小文字にしたいので、タグで名前を指定します。`` `json:"-"` `` なら JSON に含めません。

? この API の store に `sync.Mutex` がある理由は？
- JSON に変換するため
+ Go の HTTP サーバーはリクエストを goroutine で同時に処理するので、共有のデータが同時に書き換えられないように守るため
- ポート番号を守るため
> 2 つのリクエストが同時に来ると、tasks や nextID のデータ競合が起きます（レッスン 5）。
```
