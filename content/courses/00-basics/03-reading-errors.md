---
title: エラーメッセージは「ヒントの手紙」
level: 1
minutes: 12
concepts: [errors, reading]
summary: エラーメッセージのどこを見れば原因が分かるか。
---
## このレッスンのゴール

- エラーメッセージの **一番下の行** と **行番号** を読める
- よく出るエラーの意味がざっくり分かる

## エラーは怖くない

AI のコードを動かすと、エラーが出ることはよくあります。エラーメッセージは
「どこで・何が・なぜ」うまくいかなかったかを教えてくれる **ヒントの手紙** です。

```text
Traceback (most recent call last):
  File "app.py", line 12, in <module>
    total = add(price, "100")
  File "app.py", line 3, in add
    return a + b
TypeError: unsupported operand type(s) for +: 'int' and 'str'
```

## 読む順番：下から上へ

1. **一番下の行**：エラーの種類と理由
   `TypeError`（型のエラー）。「int（整数）と str（文字列）は + できない」
2. **そのすぐ上**：エラーが起きた場所（3 行目の `return a + b`）
3. **さらに上**：そこに至るまでの呼び出しの流れ（12 行目で `add` を呼んだ）

原因は 12 行目で `"100"`（文字列）を渡していることです。`100`（数値）にすれば直ります。

## よく出るエラー早見表（Python）

| エラー | ざっくりした意味 |
|---|---|
| `SyntaxError` | 文法の書き間違い（カッコの閉じ忘れなど） |
| `IndentationError` | 字下げ（インデント）がずれている |
| `NameError` | その名前の変数・関数が見つからない（タイプミスや定義前） |
| `TypeError` | 型が合わない（数値と文字列を足したなど） |
| `KeyError` | 辞書にそのキーが無い |
| `IndexError` | リストの範囲外を指定した |
| `ModuleNotFoundError` | ライブラリがインストールされていない |

JavaScript でも `TypeError` や `ReferenceError`（≒ NameError）など、似た名前のものが出てきます。

## AI にエラーを聞くときのコツ

エラーメッセージは **全文そのまま** 貼り付けるのが一番です。一番下の行だけだと、どこで起きたかが伝わりません。

```quiz
? Python のエラーメッセージ（Traceback）は、まずどこを見る？
- 一番上の行
+ 一番下の行
- 真ん中の行
> 一番下にエラーの種類と理由が書かれています。

? `ModuleNotFoundError: No module named 'requests'` の原因として最も考えられるのは？
- requests という変数のタイプミス
+ requests ライブラリがインストールされていない
- インデントがずれている
> pip install requests でインストールすると解決することが多いです。

? `NameError: name 'totl' is not defined` から分かることは？
+ totl という名前が定義されていない（total のタイプミスかも）
- totl の型が間違っている
- totl がリストの範囲外
> NameError は「その名前が見つからない」エラーです。
```
