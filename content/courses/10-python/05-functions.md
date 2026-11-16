---
title: 関数
level: 2
minutes: 15
concepts: [functions, scope]
summary: 処理に名前をつけてまとめ、何度も使えるようにする。
---
## このレッスンのゴール

- 引数・戻り値・呼び出しの関係を説明できる
- デフォルト引数とキーワード引数を読める
- 「関数の中の変数は外から見えない（スコープ）」と分かる

## 関数の形

```python
def add_tax(price, rate=0.1):
    """税込み価格を返す"""   # ← docstring（関数の説明書き）
    return price * (1 + rate)

total = add_tax(1000)          # 1100.0
total2 = add_tax(1000, 0.08)   # 1080.0
```

| 部分 | 意味 |
|---|---|
| `def` | 関数を定義する（この時点では **実行されない**） |
| `price, rate` | 引数（パラメータ）：受け取る値 |
| `rate=0.1` | デフォルト値：渡されなければ 0.1 |
| `return` | 戻り値：呼び出し元に返す値 |

`def` は「予約」です。**呼ばれたときに初めて中身が実行されます**。
コードを読むときは、`def` を見たら「こういう道具がある」とだけ覚えて、呼ばれている場所から追いかけましょう。

## return が無い関数

```python
def greet(name):
    print(f"こんにちは {name}")

result = greet("Ryo")   # 表示はされるが…
print(result)           # None
```

`return` が無いと `None` が返ります。「表示する」と「返す」は別物です。

## キーワード引数

```python
add_tax(price=1000, rate=0.08)
requests.get(url, timeout=10)
```

`名前=値` で渡すと、順番を気にせず意味もはっきりします。AI のコードやライブラリの呼び出しで多用されます。

## スコープ：変数が見える範囲

```python
def calc():
    temp = 5      # 関数の中だけで使える（ローカル変数）
    return temp * 2

calc()
print(temp)       # NameError！ 外からは見えない
```

関数の中の変数は、その関数が終わると消えます。これのおかげで、関数どうしが変数名でぶつかりません。

## *args と **kwargs

```python
def log(*args, **kwargs):
    print(args)     # 位置引数をタプルで受け取る
    print(kwargs)   # キーワード引数を辞書で受け取る

log(1, 2, level="info")   # (1, 2) / {'level': 'info'}
```

「いくつ渡されてもよい」という意味。ライブラリのコードでよく見ます。

## 他の言語では

```javascript
function addTax(price, rate = 0.1) { return price * (1 + rate); }  // JavaScript
```
```go
func addTax(price float64, rate float64) float64 { return price * (1 + rate) }  // Go（型を書く）
```

キーワードが `def` / `function` / `func` / `fn` と変わっても、**名前・引数・戻り値** という骨組みは共通です。

```quiz
? `def` で関数を定義した時点で、中身は実行される？
- はい
+ いいえ、呼び出されたときに実行される
> def は「予約」です。

? return の無い関数の戻り値は？
- 0
+ None
- エラーになる
> 何も返さないと None が返ります。

? `def f(a, b=2): return a + b` に対して `f(1)` は？
- 1
+ 3
- エラー
> b はデフォルト値の 2 が使われます。
```
