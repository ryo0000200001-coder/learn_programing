---
title: goroutine と channel ― 同時に動かす
level: 3
minutes: 20
concepts: [async, performance, hardware]
summary: go を付けるだけで同時に動く goroutine、終わるのを待つ WaitGroup、値を受け渡す channel、そしてロック（Mutex）を忘れると数がずれるデータ競合を実際に起こし、-race で見つける。
---
## このレッスンのゴール

- `go 関数()` で goroutine を起動し、`sync.WaitGroup` で待つコードを読める
- channel（`<-`）で値を受け渡すコードを読める
- データ競合（レースコンディション）を説明でき、`sync.Mutex` と `-race` の役割が分かる

コンピュータの基礎コースの「プロセスとスレッド」の続きです。Go は、**同時に動く処理（並行処理）を書きやすい** ことで人気になった言語です。

## goroutine：go を付けると同時に動く

1 回 0.5 秒かかる処理（通信の代わり）を 3 回します。

```go
func fetch(id int) string {
	time.Sleep(500 * time.Millisecond)
	return fmt.Sprintf("結果%d", id)
}

// 順番に
for i := 1; i <= 3; i++ {
	fetch(i)
}
// 順番に: 1.5 秒

// goroutine で
var wg sync.WaitGroup
for i := 1; i <= 3; i++ {
	wg.Add(1)
	go func(id int) {
		defer wg.Done()
		fetch(id)
	}(i)
}
wg.Wait()
// goroutine で: 0.5 秒
```

（実際に測った時間です）

| 部分 | 意味 |
|---|---|
| `go 関数(...)` | **goroutine**（ゴルーチン）として起動。終わるのを待たずに、すぐ次の行へ進む |
| `func(id int) { ... }(i)` | その場で作った名前の無い関数を、`i` を渡してすぐ呼ぶ |
| `var wg sync.WaitGroup` | 「いくつ終わるのを待つか」を数える道具 |
| `wg.Add(1)` | 待つ数を 1 増やす |
| `defer wg.Done()` | 終わったら 1 減らす（レッスン 4 の defer） |
| `wg.Wait()` | 0 になるまで待つ |

goroutine は、スレッドよりずっと **軽い**（何万個も作れる）のが特徴です。Python で言うと、`ThreadPoolExecutor` や `asyncio.gather` を使った並行処理（Python コースのレッスン 13）を、`go` の 2 文字で書ける感覚です。

⚠️ `wg.Wait()` を忘れると、main が先に終わって、**goroutine の仕事が途中で打ち切られます**。

## channel：goroutine どうしで値を受け渡す

```go
results := make(chan string)          // string を流す channel を作る

for i := 1; i <= 3; i++ {
	go func(id int) {
		results <- fetch(id)          // channel に送る
	}(i)
}

got := []string{}
for i := 0; i < 3; i++ {
	got = append(got, <-results)      // channel から受け取る（来るまで待つ）
}
fmt.Println(len(got), "件受け取った")   // 3 件受け取った
```

| 書き方 | 意味 |
|---|---|
| `make(chan string)` | string を流す **channel**（管）を作る |
| `ch <- 値` | channel に **送る** |
| `<-ch` | channel から **受け取る**。まだ来ていなければ、来るまで待つ |
| `close(ch)` | もう送らない、という合図。`for v := range ch` はそこで終わる |

channel は、**goroutine どうしの受け渡し口** です。受け取る側が「来るまで待つ」ので、WaitGroup が無くても、3 つ受け取った時点で全部終わったと分かります。Python の `queue.Queue` に近いものです。

Go には「**メモリを共有して通信するのではなく、通信してメモリを共有せよ**」という有名な言葉があります。結果は共有の変数に書き込むのではなく、channel で渡そう、という意味です。

## データ競合：同じ変数を同時に書き換える

1000 個の goroutine で、共有の変数に 1 ずつ足しました。

```go
counter := 0
var wg sync.WaitGroup
for i := 0; i < 1000; i++ {
	wg.Add(1)
	go func() {
		defer wg.Done()
		counter++
	}()
}
wg.Wait()
fmt.Println("ロックなし:", counter)
// ロックなし: 990   ← 1000 にならない（実行するたびに変わる。874 のときもあった）
```

コンピュータの基礎コースで、Python のスレッドで見たのと同じ **データ競合（レースコンディション）** です。`counter++` は「読む → 1 足す → 書く」の 3 段階なので、2 つの goroutine が同時に同じ値を読むと、1 回分が消えます。

### Mutex（ロック）で 1 つずつにする

```go
var mu sync.Mutex
go func() {
	defer wg.Done()
	mu.Lock()           // 鍵をかける（他の goroutine はここで待つ）
	counter++
	mu.Unlock()         // 鍵を外す
}()
// ロックあり: 1000
```

`mu.Lock()` から `mu.Unlock()` までは、**同時に 1 つの goroutine しか入れません**。Python の `with lock:` です。Unlock を忘れないように、`mu.Lock(); defer mu.Unlock()` と書くことも多いです（レッスン 6 の Web API がこの形）。

## -race：データ競合を見つける

```bash
go run -race .
```

```text
WARNING: DATA RACE
...
ロックなし: 874
ロックあり: 1000
Found 2 data race(s)
```

`-race` を付けて実行すると、Go が **データ競合が起きた場所を教えてくれます**（どの行とどの行が、同じ変数を同時にさわったか）。ロックありの方は何も言われませんでした。テストも `go test -race ./...` で実行するのが定番です。

データ競合は **たまにしか起きず、テストで見つけにくい** バグです。goroutine を使う AI のコードは、`-race` で一度実行してみましょう。

## AI のコードではこう出てくる

| 見かけたら | 読み方・チェック |
|---|---|
| `go func() { ... }()` | goroutine を起動。誰が終わりを待っている？（WaitGroup・channel） |
| goroutine の中で、外の変数・マップ・スライスに書き込んでいる | ⚠️ ロック（`sync.Mutex`）か channel が必要。`-race` で確認 |
| `for _, v := range items { go func() { use(v) }() }` | Go 1.22 以降は v が毎回別なので OK。古い Go では全部同じ v になるバグがあった（`go func(v T){...}(v)` と渡すのはその名残） |
| `ctx context.Context` が引数の先頭 | 処理の「取り消し」や「時間切れ」を伝える仕組み。Web のリクエストが切れたら、関係する処理も止める |
| `select { case v := <-ch: ... case <-time.After(3 * time.Second): ... }` | どれか先に来た channel を処理する。この例は 3 秒の時間切れ |
| `errgroup.Group` | 複数の goroutine を起動して、どれかが失敗したらまとめてエラーを返す便利な道具 |

```quiz
? `go fetch(1)` と書いた直後の行は、いつ実行される？
- fetch(1) が終わってから
+ fetch(1) の終わりを待たずに、すぐ
- プログラムが終わるとき
> go を付けると goroutine として起動し、すぐ次の行へ進みます。終わりを待つには WaitGroup や channel を使います。

? 1000 個の goroutine で `counter++` したら 990 になった。原因と直し方は？
- goroutine の数が多すぎる。100 個にする
+ 同じ変数を同時に「読む → 足す → 書く」して更新が消えた（データ競合）。Mutex でロックするか channel で集める
- counter の型が小さすぎる。int64 にする
> 複数の goroutine が共有の変数を書き換えるときは、ロックで 1 つずつにします。`go run -race` で見つけられます。

? `result := <-ch` の動きとして正しいのは？
+ channel から値を受け取る。まだ値が来ていなければ、来るまで待つ
- channel に値を送る
- channel を閉じる
> `<-ch` は受け取り、`ch <- v` は送りです。受け取りは値が来るまで待ちます。
```
