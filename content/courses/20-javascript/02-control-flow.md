---
title: 条件分岐と繰り返し
level: 1
minutes: 12
concepts: [conditionals, loops]
summary: if / for / while を Python と見比べる。
---
## このレッスンのゴール

- `{ }` ブロックの if・for を読める
- `for...of` と `for...in` の違いが分かる
- 三項演算子 `? :` を読める

## if

```javascript
if (score >= 80) {
  console.log("よくできました");
} else if (score >= 60) {
  console.log("合格");
} else {
  console.log("もう少し");
}
```

- 条件は `( )` で囲む
- ブロックは `{ }`。インデントは見やすさのためで、意味は持たない
- `elif` → `else if`、`and / or / not` → `&& / || / !`

## 三項演算子

```javascript
const label = age >= 18 ? "成人" : "未成年";
```

Python の `"成人" if age >= 18 else "未成年"` と同じ。**`条件 ? 真のとき : 偽のとき`** の順です。

## for の 3 種類

```javascript
const fruits = ["りんご", "バナナ"];

for (const fruit of fruits) { ... }          // ① 値を 1 つずつ（Python の for と同じ）
for (let i = 0; i < fruits.length; i++) { }  // ② 番号で回す（C 言語風）
for (const key in user) { ... }              // ③ オブジェクトのキーを回す
```

`of` は値、`in` はキー。**配列には `of` を使う** と覚えましょう（`in` だと番号の文字列が出てきます）。

② の読み方：`let i = 0`（最初に 1 回）→ `i < fruits.length`（毎回の条件）→ `i++`（毎回の最後に i を 1 増やす）。

## while・break・continue

```javascript
let n = 0;
while (n < 3) {
  n++;
  if (n === 2) continue;
  console.log(n);   // 1, 3
}
```

Python とまったく同じ意味です。

## switch

```javascript
switch (command) {
  case "start":
    run();
    break;          // ← 無いと次の case も実行されてしまう
  default:
    console.log("不明");
}
```

Python の `match` 文や if-elif の連続にあたります。**`break` 忘れ** は典型的なバグです。

## 「真」とみなされる値

`0`、`""`、`null`、`undefined`、`NaN`、`false` が偽。
Python と違い、**空の配列 `[]` や空のオブジェクト `{}` は真** なので注意！ 空かどうかは `arr.length === 0` で調べます。

```quiz
? `x > 0 ? "正" : "負か0"` で x = -1 のときの値は？
- "正"
+ "負か0"
> 条件が偽なので : の右側です。

? 配列の値を 1 つずつ取り出すのに適しているのは？
+ for (const v of arr)
- for (const v in arr)
> in はキー（配列なら番号）を取り出します。

? JavaScript で `if ([])` は？
+ 真（実行される）
- 偽（実行されない）
> Python と違い、空配列は真です。
```
