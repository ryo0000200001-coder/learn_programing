---
title: 関数の型と Promise の型
level: 2
minutes: 12
concepts: [type_hints, functions, async, higher_order]
summary: コールバックの型、`Promise<T>`、API 呼び出しの型付けを読む。
---
## このレッスンのゴール

- `(x: number) => string` という「関数の型」を読める
- `async` 関数の戻り値 `Promise<User[]>` の意味が分かる

## 関数そのものの型

```typescript
type Formatter = (value: number) => string;

const yen: Formatter = (v) => `${v.toLocaleString()} 円`;

function printAll(values: number[], format: Formatter): void {
  values.forEach((v) => console.log(format(v)));
}
```

`(value: number) => string` は「number を受け取って string を返す関数」という **型** です。
アロー関数と見た目が似ていますが、`=>` の右が **値ではなく型** になっている点に注意しましょう。
Python の `Callable[[int], str]` にあたります。

## オプション引数・デフォルト引数

```typescript
function greet(name: string, greeting?: string): string { ... }      // 省略可
function greet2(name: string, greeting = "こんにちは"): string { ... } // 既定値（型は推論）
```

## async 関数と Promise<T>

```typescript
interface User { id: number; name: string; }

async function fetchUsers(): Promise<User[]> {
  const res = await fetch("/api/users");
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return (await res.json()) as User[];
}
```

`Promise<User[]>` は「**あとで User の配列が届く約束**」という型です。
`async` 関数の戻り値は必ず `Promise<...>` になり、`await` すると中身（`User[]`）が取り出せます。

```typescript
const users = await fetchUsers();   // users の型は User[]
const p = fetchUsers();             // p の型は Promise<User[]>（await 忘れに気づける）
```

## ⚠️ res.json() の結果は信用できない

`res.json()` の戻り値は `any`（または `unknown`）です。上の `as User[]` は「そうだと信じる」だけで、
サーバーが違う形のデータを返しても TypeScript は気づけません。
しっかりしたコードでは **zod** などのライブラリで実際の中身を検証します。

```typescript
import { z } from "zod";
const UserSchema = z.object({ id: z.number(), name: z.string() });
const users = z.array(UserSchema).parse(await res.json());   // 形が違えばここでエラー
```

AI のコードで `zod` や `z.object` を見たら「外から来たデータを検証している」と読みましょう。
Python の pydantic と同じ役割です。

```quiz
? `type F = (s: string) => boolean` に合う関数は？
+ (s) => s.length > 0
- (n: number) => n > 0
- (s) => s.toUpperCase()
> string を受け取り boolean を返す関数です。

? `async function f(): Promise<number>` を `const x = await f()` で呼ぶと x の型は？
- Promise<number>
+ number
> await すると Promise の中身が取り出せます。

? `(await res.json()) as User[]` の弱点は？
+ 実際のデータが User[] の形か、実行時には確認していない
- 必ずエラーになる
- 型が any になる
> 実行時の検証には zod などを使います。
```
