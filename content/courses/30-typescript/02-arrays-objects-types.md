---
title: 配列とオブジェクトの型
level: 1
minutes: 12
concepts: [type_hints, collections]
summary: `string[]`、`{ name: string }`、`?`（省略可能）を読む。
---
## このレッスンのゴール

- 配列の型 `string[]` と `Array<string>` を読める
- オブジェクトの型と、`?`（省略可能）・`readonly` を読める

## 配列の型

```typescript
const names: string[] = ["Ryo", "Ken"];
const scores: Array<number> = [80, 65];   // number[] と同じ意味
const pair: [string, number] = ["Ryo", 20]; // タプル：長さと順番が決まった配列
```

`string[]` は「文字列の配列」。Python の `list[str]` です。
`[string, number]` は Python の `tuple[str, int]` にあたります。

## オブジェクトの型

```typescript
const user: { name: string; age: number } = {
  name: "Ryo",
  age: 20,
};
```

`{ キー: 型; ... }` で、そのオブジェクトがどんな形をしているかを表します。
足りないキーや、余分なキーがあるとエラーになります。

## ? ＝ 省略してもよい

```typescript
const user: { name: string; email?: string } = { name: "Ryo" };  // OK

user.email.toUpperCase();   // エラー：email は undefined かもしれない
user.email?.toUpperCase();  // OK：?. で「あれば」呼ぶ
```

`email?: string` は「email は無くてもいい」という意味で、実際の型は `string | undefined` になります。
TypeScript は **「無いかもしれないもの」をそのまま使うと怒ってくれる** ので、バグを防げます。

## readonly ＝ 書き換え禁止

```typescript
const config: { readonly apiUrl: string } = { apiUrl: "https://..." };
config.apiUrl = "x";   // エラー
```

## インデックスシグネチャ（辞書の型）

```typescript
const prices: { [item: string]: number } = { apple: 120, banana: 80 };
const stock: Record<string, number> = { apple: 3 };   // 同じ意味の短い書き方
```

キーが自由な「辞書」のような使い方です。Python の `dict[str, int]` にあたります。
AI のコードでは `Record<string, number>` の形をよく見ます。

```quiz
? `number[]` と同じ意味の型は？
+ Array<number>
- [number]
- number
> `[number]` は「number が 1 つだけのタプル」という別の意味になります。

? `{ title: string; memo?: string }` に合うのは？
+ { title: "買い物" }
- { memo: "牛乳" }
- { title: 1 }
> memo は省略できますが、title は必須で string である必要があります。

? `Record<string, boolean>` に合うデータは？
- ["a", true]
+ { a: true, b: false }
- { a: "yes" }
> キーが文字列、値が boolean の辞書型オブジェクトです。
```
