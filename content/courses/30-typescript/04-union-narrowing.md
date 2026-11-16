---
title: ユニオン型と型の絞り込み
level: 2
minutes: 15
concepts: [type_hints, conditionals]
summary: 「A または B」を表す `|` と、if で型を確定させる書き方。
---
## このレッスンのゴール

- `string | number` や `"a" | "b"` を読める
- `typeof` や `in`、`if` で型が絞り込まれる仕組みを説明できる

## ユニオン型：A または B

```typescript
let id: string | number;
id = 101;      // OK
id = "A-101";  // OK
id = true;     // エラー
```

Python の `str | int` と同じです。

## リテラル型：決まった値だけ

```typescript
type Status = "loading" | "success" | "error";
let status: Status = "loading";
status = "done";   // エラー：その文字列は許されていない
```

**選択肢を型で決めてしまう** 書き方で、AI のコードで非常によく出てきます。
タイプミス（`"sucess"` など）を実行前に見つけられるのが利点です。

## 絞り込み（ナローイング）

ユニオン型の値は、そのままでは「どちらか分からない」ので使える操作が限られます。
`if` で調べると、その中では型が確定します。

```typescript
function format(id: string | number): string {
  if (typeof id === "number") {
    return id.toFixed(0);       // ここでは id は number
  }
  return id.toUpperCase();      // ここでは id は string
}
```

| 調べ方 | 例 |
|---|---|
| `typeof x === "string"` | 基本の型を調べる |
| `x === null` / `if (x)` | null・undefined を除く |
| `"email" in user` | そのキーを持っているか |
| `x instanceof Date` | どのクラスのインスタンスか |
| `Array.isArray(x)` | 配列か |

## 判別可能なユニオン（AI がよく書く形）

```typescript
type Result =
  | { ok: true; data: string[] }
  | { ok: false; error: string };

function show(r: Result) {
  if (r.ok) {
    console.log(r.data);    // ok が true の形 → data がある
  } else {
    console.log(r.error);   // ok が false の形 → error がある
  }
}
```

共通のキー（ここでは `ok`、よく `type` や `kind`）で形を見分けます。
`switch (action.type) { case "add": ... }` の形も同じ考え方で、React の状態管理などで頻出です。

## ! と as（要注意の書き方）

```typescript
const el = document.getElementById("app")!;   // 「絶対に null じゃない」と言い切る
const user = data as User;                     // 「これは User だ」と言い切る
```

どちらも **TypeScript のチェックを人間の判断で黙らせる** 書き方です。間違っていると実行時にエラーになります。
AI のコードで多用されていたら、「本当にそう言い切れる？」とチェックしたいポイントです。

```quiz
? `type Size = "S" | "M" | "L"` の変数に入れられないのは？
- "S"
- "L"
+ "XL"
> リテラル型で決めた 3 つ以外は入れられません。

? `if (typeof v === "string") { ... }` の { } の中で v の型は？
+ string
- string | number のまま
- unknown
> typeof のチェックで型が絞り込まれます。

? `value as User` の注意点は？
+ TypeScript のチェックを省略するので、実際に違う形ならバグになる
- 値が自動的に User に変換される
- 実行が遅くなる
> as は変換ではなく「そうだと信じて」という宣言です。
```
