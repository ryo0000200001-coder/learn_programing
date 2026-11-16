---
title: 関数とアロー関数
level: 2
minutes: 15
concepts: [functions, higher_order, scope]
summary: function、=>、コールバック。JavaScript で最も重要な書き方。
---
## このレッスンのゴール

- `function` とアロー関数 `=>` の両方を読める
- 「関数を引数として渡す（コールバック）」を説明できる

## 3 つの書き方

```javascript
function add(a, b) {          // ① 関数宣言
  return a + b;
}

const add2 = function (a, b) { // ② 関数式（変数に入れる）
  return a + b;
};

const add3 = (a, b) => a + b;  // ③ アロー関数（AI が最もよく書く）
```

すべて同じ働きです。

## アロー関数の省略ルール

```javascript
const double = (x) => { return x * 2; };  // 基本形
const double2 = (x) => x * 2;             // { } と return を省略（1 式だけのとき）
const double3 = x => x * 2;               // 引数が 1 つなら ( ) も省略可
const makeUser = (name) => ({ name });    // オブジェクトを返すときは ( ) で囲む
```

`=>` の右側に `{` が **無ければ、その式がそのまま戻り値** です。
Python の `lambda x: x * 2` と同じ感覚ですが、JavaScript では複数行も書けます。

## 関数は値（コールバック）

```javascript
button.addEventListener("click", () => {
  console.log("押された！");
});

setTimeout(() => console.log("1 秒後"), 1000);
```

「クリックされたら、この関数を呼んでね」と **関数そのものを渡しています**。
これを **コールバック** と呼び、JavaScript では至る所に出てきます。読むときは
「`=>` 以降は、**今ではなく、何かが起きたときに実行される**」と意識しましょう。

## デフォルト引数・残余引数

```javascript
function greet(name = "ゲスト", ...rest) {
  // rest は残りの引数の配列（Python の *args）
}
```

## スコープ

`let` / `const` は **`{ }` の中だけ** で有効です（ブロックスコープ）。Python は関数単位なので、ここは JavaScript の方が細かいです。

```javascript
if (true) {
  const msg = "中";
}
console.log(msg);   // ReferenceError
```

```quiz
? `const f = (a, b) => a * b;` で `f(2, 3)` は？
+ 6
- undefined
- 5
> { } が無いので a * b がそのまま返ります。

? `const f = (x) => { x * 2 };` で `f(3)` は？
- 6
+ undefined
> { } があるときは return が必要です。よくあるバグです。

? `addEventListener("click", handle)` の handle はいつ実行される？
- この行が実行された瞬間
+ クリックされたとき
> 関数を渡しておき、イベントが起きたときに呼ばれます（コールバック）。
```
