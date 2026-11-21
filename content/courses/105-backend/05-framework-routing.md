---
title: Web フレームワークとルーティング
level: 2
minutes: 18
concepts: [backend, http_api, functions]
summary: FastAPI で「この URL にこのメソッドが来たら、この関数」を書く。パスパラメータとクエリの受け取り方。
---
## このレッスンのゴール

- フレームワークが何を肩代わりしてくれるか説明できる
- `@app.get("/tasks/{task_id}")` のようなルーティングを読める
- パスパラメータ・クエリパラメータの違いが分かる

## フレームワーク＝バックエンドの骨組みキット

HTTP の手紙（レッスン 3）を自分で 1 文字ずつ読み解くのは大変です。**Web フレームワーク** は、
「リクエストを受け取る」「URL ごとに関数を呼び分ける」「JSON にして返す」といった定番の作業を引き受けてくれます。
私たちが書くのは **「この URL に来たら何をするか」** だけになります。

## 最小の API（FastAPI）

```python
from fastapi import FastAPI, HTTPException

app = FastAPI()

tasks = {
    1: {"id": 1, "title": "会場を探す", "status": "todo"},
    2: {"id": 2, "title": "チラシを作る", "status": "done"},
}

@app.get("/tasks")
def list_tasks(status: str | None = None):
    items = list(tasks.values())
    if status:
        items = [t for t in items if t["status"] == status]
    return {"items": items}

@app.get("/tasks/{task_id}")
def get_task(task_id: int):
    if task_id not in tasks:
        raise HTTPException(status_code=404, detail="タスクが見つかりません")
    return tasks[task_id]
```

起動はターミナルでこう打ちます（ファイル名が `main.py` の場合）。

```bash
uvicorn main:app --reload
```

`main:app` は「main.py の中の app」、`--reload` は「ファイルを保存したら自動で再起動」です。
`http://localhost:8000/tasks` を開くと JSON が表示され、`http://localhost:8000/docs` を開くと **API の説明書と試し打ちの画面が自動で** できています。

## ルーティング：URL と関数の対応表

```python
@app.get("/tasks/{task_id}")
def get_task(task_id: int):
```

`@app.get(...)` はデコレータ（Python コース Lv4）で、「GET で `/tasks/何か` が来たら、この関数を呼んで」と **登録** しています。

| デコレータ | 対応するリクエスト |
|---|---|
| `@app.get("/tasks")` | `GET /tasks` |
| `@app.post("/tasks")` | `POST /tasks` |
| `@app.patch("/tasks/{task_id}")` | `PATCH /tasks/42` |
| `@app.delete("/tasks/{task_id}")` | `DELETE /tasks/42` |

**AI が書いたバックエンドを読むときは、まずこのデコレータを全部探す** と、その API で何ができるかの一覧がすぐ分かります。

## パスパラメータとクエリパラメータ

```text
GET /tasks/2           → get_task(task_id=2)          パスの一部
GET /tasks?status=done → list_tasks(status="done")    ? のあと
```

| | パスパラメータ | クエリパラメータ |
|---|---|---|
| 書き方 | `/tasks/{task_id}` | `?status=done` |
| 使いどころ | **どれか 1 つを指す**（ID） | **絞り込み・並べ替え・ページ分け** |
| 省略 | できない | `= None` を付ければ省略できる |

FastAPI は **関数の引数の名前と型ヒント** を見て、自動で値を取り出して変換してくれます。

- `task_id: int` → `"2"` という文字を `2` という数値にしてから渡す
- `/tasks/abc` のように数値にできないと、関数を呼ぶ前に **422 エラー** を自動で返す（実際に試して確認済み）
- `status: str | None = None` → `?status=` が無ければ `None`

## 何を返すとどうなる？

| 関数の中で | レスポンス |
|---|---|
| `return {"items": [...]}`（辞書・リスト） | `200 OK` ＋ JSON |
| `raise HTTPException(status_code=404, detail="...")` | `404` ＋ `{"detail": "タスクが見つかりません"}` |
| 想定外の例外（バグ） | `500 Internal Server Error` |
| `@app.post("/tasks", status_code=201)` と書いておく | 成功時に `201 Created` |

`raise` で例外を投げると、そこで関数が止まり、フレームワークがエラーのレスポンスに変えてくれます（Python コース「例外処理」）。

## JavaScript（Express）では

```javascript
import express from "express";
const app = express();

app.get("/tasks/:taskId", (req, res) => {
  const task = tasks[Number(req.params.taskId)];
  if (!task) return res.status(404).json({ detail: "タスクが見つかりません" });
  res.json(task);
});

app.listen(8000);
```

| FastAPI（Python） | Express（JavaScript） |
|---|---|
| `@app.get("/tasks/{task_id}")` | `app.get("/tasks/:taskId", ...)` |
| 引数 `task_id: int` に自動で入る | `req.params.taskId`（文字列。自分で `Number()` に） |
| 引数 `status` に自動で入る | `req.query.status` |
| `return 辞書` | `res.json(オブジェクト)` |
| `raise HTTPException(404, ...)` | `res.status(404).json(...)` |

書き方は違っても、**「メソッド ＋ パス → 関数」の対応表を作る** という考え方は同じです。

## AI のコードではこう出てくる

```python
router = APIRouter(prefix="/tasks", tags=["tasks"])

@router.get("/{task_id}")
def get_task(task_id: int): ...

app.include_router(router)
```

大きなアプリでは、URL のグループ（`/tasks`・`/users` …）ごとにファイルを分け、`APIRouter` でまとめてから `app` に取り付けます。Express の `express.Router()` も同じ考え方です。

```quiz
? `@app.delete("/tasks/{task_id}")` が付いた関数が呼ばれるのは？
- GET /tasks/5
+ DELETE /tasks/5
- DELETE /tasks?task_id=5
> メソッドとパスの両方が一致したときに呼ばれます。

? `def get_task(task_id: int)` に `GET /tasks/abc` が来ると？
- task_id に "abc" が入る
+ 関数が呼ばれる前に 422 エラーが返る
- 500 エラーになる
> 型ヒントを見て変換できないと、FastAPI が自動で断ります。

? 「完了したタスクだけ」を絞り込む条件を渡すのに向いているのは？
- パスパラメータ /tasks/done
+ クエリパラメータ /tasks?status=done
> 絞り込みや並べ替えはクエリで渡すのが定番です。
```
