---
title: map・filter・reduce
level: 2
minutes: 15
concepts: [higher_order, collections]
summary: AI のコードで毎回のように出てくる配列メソッドを読み解く。
---
## このレッスンのゴール

- `map` / `filter` / `find` / `reduce` が何を返すか説明できる
- メソッドチェーンを 1 段ずつ読める

## 早見表

| メソッド | 何をする？ | 返すもの | Python では |
|---|---|---|---|
| `map(f)` | 全要素を変換 | 同じ長さの新しい配列 | `[f(x) for x in arr]` |
| `filter(f)` | 条件に合うものだけ残す | 短くなった新しい配列 | `[x for x in arr if f(x)]` |
| `find(f)` | 条件に合う最初の 1 つ | 要素 1 つ（無ければ undefined） | `next((x for x in arr if f(x)), None)` |
| `some(f)` / `every(f)` | 1 つでも / 全部 合うか | true / false | `any(...)` / `all(...)` |
| `reduce(f, 初期値)` | 1 つの値にまとめる | 何でも | `functools.reduce` / `sum` |
| `forEach(f)` | 各要素に処理（返さない） | undefined | 普通の for |

## 例

```javascript
const items = [
  { name: "ペン", price: 120, stock: 3 },
  { name: "ノート", price: 200, stock: 0 },
  { name: "消しゴム", price: 80, stock: 5 },
];

const names = items.map(item => item.name);           // ["ペン", "ノート", "消しゴム"]
const inStock = items.filter(item => item.stock > 0);  // ペンと消しゴム
const note = items.find(item => item.name === "ノート");
```

## reduce：たたみ込み

```javascript
const total = items.reduce((sum, item) => sum + item.price, 0);  // 400
```

`(累積値, 今の要素) => 次の累積値` を繰り返します。

| 回 | sum | item.price | 戻り値 |
|---|---|---|---|
| 1 | 0（初期値） | 120 | 120 |
| 2 | 120 | 200 | 320 |
| 3 | 320 | 80 | 400 |

reduce が読みにくいときは、**この表を書けば必ず読めます**。

## メソッドチェーン

```javascript
const label = items
  .filter(i => i.stock > 0)         // ① 在庫ありだけ
  .map(i => `${i.name}(${i.price}円)`) // ② 文字列に変換
  .join(", ");                       // ③ つなげる
// "ペン(120円), 消しゴム(80円)"
```

**上から 1 行ずつ「今どんな配列か」をメモしていく** のがコツです。

## 引数の 2 番目

```javascript
items.map((item, index) => `${index + 1}. ${item.name}`);
```

コールバックの 2 番目の引数は番号（Python の `enumerate`）。React でリストを表示するときに頻出です。

```quiz
? `[1, 2, 3].map(x => x * 10)` の結果は？
+ [10, 20, 30]
- 60
- [1, 2, 3]
> map は全要素を変換した新しい配列を返します。

? `[5, 8, 2].filter(x => x > 4)` の結果は？
- [8]
+ [5, 8]
- true
> 条件に合う要素をすべて残します。

? `[1, 2, 3].reduce((a, b) => a + b, 10)` の結果は？
- 6
+ 16
- 10
> 初期値 10 に 1, 2, 3 を順に足します。
```
