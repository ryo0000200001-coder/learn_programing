---
title: JavaScript の第一歩と変数
level: 1
minutes: 12
concepts: [variables, types, basics]
summary: JavaScript がどこで動くか、let / const と基本の型。
---
## このレッスンのゴール

- JavaScript が「ブラウザ」と「Node.js」で動くと説明できる
- `const` / `let` / `var` の違いが分かる
- Python との見た目の違い（`;`、`{}`、キャメルケース）に慣れる

## どこで動く？

| 場所 | 用途 |
|---|---|
| ブラウザ | Web ページを動かす（ボタン・画面の書き換え） |
| Node.js | サーバー・ツール（Python と同じように PC 上で動く） |

ブラウザで F12 →「コンソール」を開くと、その場で JavaScript を試せます。

## Python と並べてみる

```javascript
const name = "Ryo";            // 変えない変数
let count = 0;                 // 変える変数
count = count + 1;
console.log(`${name}: ${count}`);  // 表示（Python の print + f-string）
```

```python
name = "Ryo"
count = 0
count = count + 1
print(f"{name}: {count}")
```

| | Python | JavaScript |
|---|---|---|
| 表示 | `print()` | `console.log()` |
| 文の終わり | 改行 | `;`（省略可能だが付けることが多い） |
| コメント | `#` | `//`（複数行は `/* */`） |
| 名前の付け方 | `user_name`（スネークケース） | `userName`（キャメルケース） |

## const / let / var

- `const`：再代入できない。**基本はこれ**
- `let`：再代入したいときだけ
- `var`：古い書き方。AI の新しいコードではほぼ使われない（見たら古いコードのサイン）

```javascript
const items = [1, 2];
items.push(3);      // OK！ 中身の変更はできる
items = [];         // エラー：箱そのものの入れ替えはできない
```

`const` は「中身が変わらない」ではなく **「別の値を入れ直せない」** という意味です。

## 基本の型

| 型 | 例 | Python では |
|---|---|---|
| number | `42`, `3.14` | int と float が 1 つにまとまっている |
| string | `"a"`, `'a'`, `` `a` `` | str |
| boolean | `true`, `false`（小文字！） | `True`, `False` |
| null / undefined | 「値が無い」 | None |
| object / array | `{a: 1}`, `[1, 2]` | dict / list |

`undefined` は「まだ何も入っていない」、`null` は「意図的に空にした」。Python の `None` が 2 種類あるイメージです。

## ⚠️ == と ===

```javascript
1 == "1"    // true （型を勝手にそろえて比べる）
1 === "1"   // false（型も含めて比べる）
```

**JavaScript では常に `===` を使う** のが鉄則です。AI のコードで `==` があれば、レビューで確認するポイントです。

```quiz
? 再代入しない変数を宣言するとき、基本的に使うのは？
+ const
- let
- var
> 迷ったら const、再代入が必要なときだけ let です。

? Python の `True` は JavaScript では？
- True
+ true
- TRUE
> JavaScript の真偽値は小文字です。

? `0 === "0"` の結果は？
- true
+ false
> === は型も比べるので、数値と文字列は等しくありません。
```
