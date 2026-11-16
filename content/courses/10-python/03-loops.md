---
title: 繰り返し for と while
level: 1
minutes: 12
concepts: [loops, collections]
summary: 同じ処理を何度も実行する仕組み。
---
## このレッスンのゴール

- `for` が「中身を 1 つずつ取り出す」ループだと説明できる
- `range`、`enumerate`、`break`、`continue` を読める

## for：1 つずつ取り出す

```python
fruits = ["りんご", "バナナ", "みかん"]
for fruit in fruits:
    print(fruit)
```

`fruits` から 1 つずつ取り出して `fruit` に入れ、ブロックを実行 —— を最後まで繰り返します。

## range：回数で回す

```python
for i in range(3):
    print(i)    # 0, 1, 2
```

`range(3)` は 0, 1, 2（**3 は含まない**）。`range(1, 4)` なら 1, 2, 3 です。

## enumerate：番号もほしいとき

```python
for i, fruit in enumerate(fruits):
    print(i, fruit)   # 0 りんご / 1 バナナ / 2 みかん
```

AI のコードで非常によく見る形です。`i, fruit` のように 2 つ同時に受け取る書き方を **アンパック** と呼びます。

## while：条件が真のあいだ回す

```python
count = 0
while count < 3:
    print(count)
    count += 1     # count = count + 1 の短縮形
```

条件がずっと真のままだと **無限ループ** になります。`while True:` は「`break` で抜けるまで回り続ける」という意図的な書き方です。

## break と continue

```python
for n in [1, 2, 3, 4, 5]:
    if n == 2:
        continue   # 今回だけ飛ばして次へ
    if n == 4:
        break      # ループ自体を終了
    print(n)       # 1, 3
```

## 他の言語では

```javascript
for (const fruit of fruits) { console.log(fruit); }     // JS の for...of ≒ Python の for
for (let i = 0; i < 3; i++) { console.log(i); }         // C 言語風：初期化; 条件; 更新
```

C・Java・JavaScript で見る `for (let i = 0; i < 3; i++)` は、Python の `for i in range(3)` と同じ意味です。

```quiz
? `range(2, 5)` が作る数は？
- 2, 3, 4, 5
+ 2, 3, 4
- 3, 4, 5
> 終わりの数は含みません。

? ループの中で `continue` が実行されると？
- ループ全体が終わる
+ 今回の残りを飛ばして次の回へ進む
- プログラムが止まる
> ループ全体を終えるのは break です。

? `for (let i = 0; i < 3; i++)` を Python で書くと？
+ for i in range(3):
- for i in 3:
- while i < 3:
> どちらも 0, 1, 2 の 3 回まわります。
```
