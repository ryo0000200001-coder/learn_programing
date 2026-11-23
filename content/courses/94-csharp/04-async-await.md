---
title: async/await ― 待ち時間を有効に使う
level: 2
minutes: 18
concepts: [async, performance, errors]
summary: async Task と await、順番に await すると遅く Task.WhenAll で同時にすると速いことを測って確かめる。await を書かずに呼ぶとすぐ次の行に進む、例外は await で受け止める、CancellationToken での取り消し、Task.Run と共有の変数のデータ競合。
---
## このレッスンのゴール

- `async Task<T>` と `await` の意味を説明できる
- 順番の `await` と `Task.WhenAll` の違いを、時間で説明できる
- 取り消し（`CancellationToken`）と、`.Result` やデータ競合の危険が分かる

## async と await

```csharp
static async Task<string> FetchAsync(int id)
{
    await Task.Delay(500);         // 0.5 秒かかる通信の代わり
    return $"結果{id}";
}
```

| 部分 | 意味 | Python で言うと |
|---|---|---|
| `async` | 中で await を使うメソッド | `async def` |
| `Task<string>` | 「**後で string が手に入る**」約束（Promise） | コルーチン |
| `Task` | 「後で終わる」約束（値は無し） | |
| `await x` | x が終わるまで待つ（その間、他の仕事ができる） | `await x` |
| `Async` で終わる名前 | 非同期のメソッドの習慣 | |

C# は **async/await を最初に広めた言語** で、JavaScript（JavaScript コースのレッスン 7）・Python（Python コースのレッスン 13）・Rust などが同じ書き方を取り入れました。だから、どの言語でもほぼ同じに読めます。

## 順番に待つと遅い、同時に待つと速い

```csharp
var sw = Stopwatch.StartNew();
for (int i = 1; i <= 3; i++) await FetchAsync(i);
Console.WriteLine($"順番に await: {sw.Elapsed.TotalSeconds:F1} 秒");
// 順番に await: 1.5 秒

sw.Restart();
var tasks = Enumerable.Range(1, 3).Select(FetchAsync).ToList();
string[] results = await Task.WhenAll(tasks);
Console.WriteLine($"WhenAll: {sw.Elapsed.TotalSeconds:F1} 秒 → {string.Join(", ", results)}");
// WhenAll: 0.5 秒 → 結果1, 結果2, 結果3
```

（実際に測った時間です）

| 書き方 | 動き | 時間 |
|---|---|---|
| `for (...) await FetchAsync(i);` | 1 つ終わるのを待ってから次を始める | 0.5 × 3 ＝ 1.5 秒 |
| 先に 3 つ始めて `await Task.WhenAll(tasks)` | 3 つ同時に待つ | 0.5 秒 |

| C# | JavaScript | Python | Go |
|---|---|---|---|
| `Task.WhenAll(...)` | `Promise.all(...)` | `asyncio.gather(...)` | WaitGroup（Go コースのレッスン 5） |

**お互いに関係ない待ち（別々の API の呼び出し）は、WhenAll でまとめる** と速くなります。AI のコードで、ループの中で 1 つずつ `await` しているところは、まとめられないか考える価値があります。

### await を書かずに呼ぶと

```csharp
sw.Restart();
var t = FetchAsync(9);
Console.WriteLine($"await する前: {sw.Elapsed.TotalSeconds:F1} 秒（もう次の行に来ている）");
Console.WriteLine(await t);
// await する前: 0.0 秒（もう次の行に来ている）
// 結果9
```

`FetchAsync(9)` を呼んだだけでは **待たずに、すぐ次の行へ** 進みます（Go の `go` に近い）。結果が必要になったところで `await t` します。⚠️ `await` を書き忘れると、**終わる前に先へ進んでしまう** バグになります（コンパイラが CS4014 という警告を出してくれます）。

## 例外は await で受け止める

```csharp
static async Task<int> FailAsync()
{
    await Task.Delay(100);
    throw new InvalidOperationException("通信に失敗しました");
}

try { await FailAsync(); }
catch (InvalidOperationException e) { Console.WriteLine($"catch できた: {e.Message}"); }
// catch できた: 通信に失敗しました
```

非同期のメソッドの中で起きた例外は、**`await` したところで** 投げ直されるので、普通の `try / catch` で受け止められます。

## 取り消しと時間切れ

```csharp
using var cts = new CancellationTokenSource(TimeSpan.FromMilliseconds(200));
try { await Task.Delay(1000, cts.Token); }
catch (TaskCanceledException) { Console.WriteLine("200 ミリ秒で取り消された"); }
// 200 ミリ秒で取り消された
```

`CancellationToken` は、「**もうやめて**」を伝える仕組みです。Web のリクエストを利用者が途中でやめたとき、関係する処理（データベース・別の API）も止められます。Go の `context.Context`（Go コースのレッスン 5）と同じ役目です。AI の ASP.NET Core のコードで、メソッドの最後の引数に `CancellationToken ct` があるのはこのためです。

`HttpClient` の `Timeout` も、同じく時間切れの設定です。

## ⚠️ 共有の変数とデータ競合

```csharp
int counter = 0;
await Task.WhenAll(Enumerable.Range(0, 1000).Select(_ => Task.Run(() => counter++)));
Console.WriteLine($"ロックなし: {counter}");      // ロックなし: 999

counter = 0;
await Task.WhenAll(Enumerable.Range(0, 1000).Select(_ => Task.Run(() => Interlocked.Increment(ref counter))));
Console.WriteLine($"Interlocked: {counter}");     // Interlocked: 1000
```

`Task.Run` は、処理を **別のスレッドで** 動かします。1000 個が同時に `counter++` したので、Go や Python のスレッドと同じ **データ競合** が起き、1000 にならないことがありました。`Interlocked.Increment`（足し算を割り込まれずに 1 回で行う）や `lock (obj) { ... }` で防ぎます。

| | `await FetchAsync()` | `Task.Run(() => ...)` |
|---|---|---|
| 使う場面 | **待ち時間** の多い仕事（通信・ファイル・データベース） | **計算が重い** 仕事を別のスレッドへ |
| スレッド | 待っている間はスレッドを占有しない | 別のスレッドで動く |

## AI のコードではこう出てくる

| 見かけたら | チェック |
|---|---|
| `public async Task<IActionResult> Get(int id, CancellationToken ct)` | ASP.NET Core の非同期の窓口。ct を下の処理に渡しているか |
| ループの中で `await` | まとめて `WhenAll` にできないか（順番が大事なら OK） |
| `.Result` / `.Wait()` | ⚠️ 非同期の結果を **止まって** 待つ。デッドロック（お互いを待って止まる）の原因になる。`await` に |
| `async void` | ⚠️ 例外を受け止められない。イベントハンドラー以外は `async Task` に |
| 呼び出しに `await` が無い（CS4014 の警告） | ⚠️ 終わる前に先へ進む |
| `Task.Run` の中で共有の変数を書き換える | ⚠️ データ競合。`lock` / `Interlocked` / `ConcurrentDictionary` |

```quiz
? 0.5 秒かかる `FetchAsync` を 3 回、`for` の中で 1 つずつ `await` すると、合計の時間は？
- 約 0.5 秒
+ 約 1.5 秒
- 約 0 秒
> 1 つ終わるのを待ってから次を始めるので、0.5 × 3 です。Task.WhenAll でまとめると約 0.5 秒でした。

? `var t = FetchAsync(9);`（await 無し）の直後の行は、いつ実行される？
+ FetchAsync の終わりを待たずに、すぐ
- FetchAsync が終わってから
- 実行されない
> await しなければ待ちません。結果が必要なところで `await t` します。

? 非同期の結果を `.Result` で待つ書き方が嫌われる理由は？
- 結果が null になるから
+ スレッドを止めて待つので、デッドロックやアプリの固まりの原因になるから
- 例外が起きないから
> 非同期の処理は await で待つのが基本です。.Result や .Wait() は、特に画面のあるアプリや古い ASP.NET で固まる原因になります。
```
