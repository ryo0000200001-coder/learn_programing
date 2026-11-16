---
title: ユーティリティ型
level: 3
minutes: 12
concepts: [generics, type_hints]
summary: Partial・Pick・Omit・keyof など、既存の型から新しい型を作る道具。
---
## このレッスンのゴール

- `Partial` / `Pick` / `Omit` / `Required` の意味が分かる
- `keyof` と `typeof` を読める

## 既存の型から作る

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}
```

この `User` をもとに、場面ごとの型を作れます。

| 書き方 | 意味 | 使われる場面 |
|---|---|---|
| `Partial<User>` | すべての項目を省略可能に | 一部だけ更新するとき |
| `Required<User>` | すべての項目を必須に | |
| `Pick<User, "id" \| "name">` | 指定した項目だけ | 一覧表示用 |
| `Omit<User, "password">` | 指定した項目を除く | 外に返すとき（秘密を除く） |
| `Readonly<User>` | すべて書き換え禁止 | |

```typescript
function updateUser(id: number, changes: Partial<User>) { ... }
updateUser(1, { name: "新しい名前" });   // 一部だけでも OK

type PublicUser = Omit<User, "password">;   // パスワードを外に出さない型
```

`Omit<User, "password">` のような型は、**セキュリティの意図が型に表れている** 例です。

## keyof：キーの一覧を型にする

```typescript
type UserKey = keyof User;   // "id" | "name" | "email" | "password"

function getField(user: User, key: keyof User) {
  return user[key];
}
getField(u, "name");   // OK
getField(u, "nmae");   // エラー（タイプミスを防げる）
```

## typeof：値から型を作る

```typescript
const defaultConfig = { theme: "dark", fontSize: 14 };
type Config = typeof defaultConfig;   // { theme: string; fontSize: number }
```

JavaScript の `typeof x === "string"`（実行時の判定）とは別物で、
**型の位置に書かれた `typeof` は「この値の型」** という意味です。

## as const

```typescript
const COLORS = ["red", "green", "blue"] as const;
type Color = (typeof COLORS)[number];   // "red" | "green" | "blue"
```

`as const` は「この値を変更しない。型もリテラルのまま扱って」という指定です。
選択肢の一覧から型を作るテクニックで、AI のコードでときどき見かけます。

```quiz
? `Omit<User, "password">` の型が持たない項目は？
- id
- name
+ password
> Omit は指定した項目を取り除きます。

? `Partial<Product>` の変数に `{}`（空オブジェクト）を入れられる？
+ 入れられる
- 入れられない
> Partial はすべての項目を省略可能にします。

? `keyof { a: number; b: string }` は？
+ "a" | "b"
- number | string
- { a: number; b: string }
> keyof はキー名のユニオン型を作ります。
```
