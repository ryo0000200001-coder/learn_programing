---
title: デコレータと async/await
level: 4
minutes: 20
concepts: [higher_order, async, http_api]
summary: Web フレームワークや API のコードで必ず出てくる 2 つの書き方。
---
## このレッスンのゴール

- `@` で始まる行（デコレータ）の意味を説明できる
- `async` / `await` が「待ち時間を有効に使う」ための書き方だと分かる

## デコレータ：関数に機能をかぶせる

```python
@app.get("/hello")
def hello():
    return {"message": "こんにちは"}
```

FastAPI や Flask で必ず見る形です。`@app.get("/hello")` は
「この関数を、`/hello` にアクセスされたときに呼ぶよう **登録する**」という意味です。

仕組みは「関数を受け取って、加工した関数を返す関数」です。

```python
def log_call(func):
    def wrapper(*args, **kwargs):
        print(f"{func.__name__} を呼びます")
        return func(*args, **kwargs)
    return wrapper

@log_call          # say = log_call(say) と同じ
def say():
    print("やあ")
```

**読むときは「@ の付いた関数に、何か追加の役割が与えられている」と理解すれば十分** です。
よく見るもの：`@dataclass`、`@property`、`@staticmethod`、`@app.route`、`@pytest.fixture`。

## async / await：待っている間に別の仕事をする

ネットからデータを取る処理は、結果が返るまで「待ち」が発生します。
普通のコードは待っている間なにもできませんが、`async` を使うと **待ち時間に他の処理を進められます**。

```python
import asyncio

async def fetch(name, seconds):
    await asyncio.sleep(seconds)     # 待つ（その間、他の処理に譲る）
    return f"{name} 完了"

async def main():
    results = await asyncio.gather(  # 3 つを同時に進める
        fetch("A", 1), fetch("B", 1), fetch("C", 1),
    )
    print(results)                    # 約 1 秒で 3 つとも終わる

asyncio.run(main())
```

| キーワード | 意味 |
|---|---|
| `async def` | 「途中で待つかもしれない関数」の定義 |
| `await` | ここで結果を待つ（その間は他の処理に譲る） |
| `asyncio.gather` | 複数を同時に進めて、全部終わるのを待つ |
| `asyncio.run` | 非同期の世界の入口 |

**`await` は `async def` の中でしか使えません。** AI のコードで `await` を見たら、その関数の定義に `async` が付いているはずです。

## JavaScript では

```javascript
async function main() {
  const res = await fetch("https://example.com/api");
  const data = await res.json();
}
```

JavaScript の非同期は **Promise** という仕組みの上にあり、`async/await` の見た目は Python とほぼ同じです。JavaScript コースで詳しく学びます。

```quiz
? `@app.get("/users")` が付いた関数はいつ呼ばれる？
- ファイルを読み込んだとき
+ /users にアクセス（GET リクエスト）されたとき
- 1 秒ごと
> デコレータでフレームワークに登録されています。

? `await` を使える場所は？
+ async def で定義した関数の中
- どこでも
- class の中だけ
> 普通の def の中では使えません。

? asyncio.gather で 1 秒かかる処理を 3 つ同時に実行すると、全体はおよそ何秒？
+ 約 1 秒
- 約 3 秒
- 約 0 秒
> 待ち時間が重なるので、ほぼ 1 つ分の時間で終わります。
```
