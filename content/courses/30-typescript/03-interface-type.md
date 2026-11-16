---
title: interface と type
level: 2
minutes: 15
concepts: [type_hints, classes]
summary: 型に名前を付けて使い回す 2 つの書き方。
---
## このレッスンのゴール

- `interface` と `type` が「型に名前を付ける」ためのものだと説明できる
- `extends` と `&` による型の組み合わせを読める

## 型に名前を付ける

毎回 `{ name: string; age: number }` と書くのは大変なので、名前を付けます。

```typescript
interface User {
  id: number;
  name: string;
  email?: string;
}

type Product = {
  id: number;
  title: string;
  price: number;
};

function showUser(user: User): string {
  return `${user.id}: ${user.name}`;
}
```

AI のコードでは、ファイルの上の方や `types.ts` に `interface` / `type` がずらっと並んでいることがよくあります。
**ここを先に読むと、そのアプリが扱うデータの形が全部分かります**。コードを読むときの近道です。

## Python で言うと

```python
from dataclasses import dataclass

@dataclass
class User:
    id: int
    name: str
    email: str | None = None
```

ただし TypeScript の `interface` は **形の約束だけ** で、実行時には消えます（中身を作る機能はない）。

## 型を広げる：extends と &

```typescript
interface Admin extends User {   // User の項目 ＋ role
  role: "owner" | "editor";
}

type AdminUser = User & { role: string };   // & で合体（ほぼ同じ意味）
```

## interface と type の違いは？

| | `interface` | `type` |
|---|---|---|
| オブジェクトの形 | ◯ | ◯ |
| ユニオン型（次のレッスン）など | ✕ | ◯ |
| 広げ方 | `extends` | `&` |

読む側としては **「どちらも型に名前を付けている」と理解すれば十分** です。チームやライブラリの好みで使い分けられています。

## 構造的型付け

```typescript
const p = { id: 1, name: "Ryo", age: 20 };
showUser(p);   // OK！ User と「同じ形」を持っていれば通る
```

TypeScript は名前ではなく **形（構造）** で型を判断します。「User として作ったか」ではなく「User に必要な項目を持っているか」が大事です。

```quiz
? AI が書いた TypeScript のプロジェクトで、データの形を手っ取り早く知るには？
+ interface や type の定義（types.ts など）を読む
- 一番下の行から読む
- package.json を読む
> 型定義を読むと、アプリが扱うデータの全体像が分かります。

? `interface Admin extends User { role: string }` の Admin が持つ項目は？
- role だけ
+ User の項目すべてと role
- User の項目だけ
> extends は「引き継いで足す」です。

? interface は実行時（JavaScript になったあと）どうなる？
- クラスとして残る
+ 消える（型チェック専用）
> 型の情報はコンパイル時に取り除かれます。
```
