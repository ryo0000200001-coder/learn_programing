---
title: ジェネリクス
level: 3
minutes: 15
concepts: [generics, type_hints]
summary: `<T>` の読み方。型を「引数」のように受け取る仕組み。
---
## このレッスンのゴール

- `<T>` が「型の引数（あとで決まる型）」だと説明できる
- `Array<T>`、`Promise<T>`、`useState<T>` などの読み方が分かる

## なぜ必要？

「配列の最初の要素を返す関数」を考えます。

```typescript
function firstNumber(items: number[]): number { return items[0]; }
function firstString(items: string[]): string { return items[0]; }
```

中身は同じなのに、型ごとに関数を作るのは無駄です。`any` を使うと型の情報が消えてしまいます。

## <T> ＝ 型の引数

```typescript
function first<T>(items: T[]): T {
  return items[0];
}

const n = first([1, 2, 3]);        // T は number → n は number
const s = first(["a", "b"]);       // T は string → s は string
const u = first<User>(users);      // 明示的に指定することもできる
```

**`T` は「呼ばれたときに決まる型」の仮の名前** です。
`first<T>(items: T[]): T` は「何かの型 T の配列を受け取り、同じ T を返す」と読みます。
`T` 以外に `K`（キー）、`V`（値）、`TData` など意味のある名前が使われることもあります。

## もう出会っているジェネリクス

| 書き方 | 読み方 |
|---|---|
| `Array<string>` | string の配列 |
| `Promise<User>` | あとで User が届く約束 |
| `Record<string, number>` | キーが string・値が number の辞書 |
| `Map<string, User>` | string → User の Map |
| `useState<number>(0)` | number を持つ状態（React） |

`<...>` を見たら「**中に入る型を指定している**」と読めば OK です。

## 制約：extends

```typescript
function getLength<T extends { length: number }>(x: T): number {
  return x.length;
}
getLength("hello");   // OK（string は length を持つ）
getLength([1, 2]);    // OK
getLength(42);        // エラー（number は length を持たない）
```

`T extends ...` は「T は何でもいいわけではなく、**この条件を満たす型** に限る」という意味です。

## interface にも使える

```typescript
interface ApiResponse<T> {
  data: T;
  error: string | null;
}

const res: ApiResponse<User[]> = { data: [], error: null };
```

API の返り値の「外枠は共通、中身だけ違う」という形でよく使われます。

## Python では

```python
def first[T](items: list[T]) -> T:   # Python 3.12 以降の書き方
    return items[0]
```

```quiz
? `function wrap<T>(x: T): T[]` を `wrap("a")` で呼ぶと戻り値の型は？
+ string[]
- string
- T[]
> T が string に決まるので T[] は string[] です。

? `ApiResponse<Product>` の `data` の型は？
- ApiResponse
+ Product
- T
> T に Product が入ります。

? `<T extends { id: number }>` の意味は？
+ T は id: number を持つ型に限られる
- T は id という名前の型
- T を id に変換する
> extends はジェネリクスでは「制約」の意味です。
```
