---
title: TypeScript とは？ 型注釈の読み方
level: 1
minutes: 12
concepts: [type_hints, types, tooling]
summary: JavaScript との関係と、`: string` のような型注釈の読み方。
---
## このレッスンのゴール

- TypeScript が「JavaScript ＋ 型」で、最終的に JavaScript に変換されると説明できる
- `変数: 型` / `(引数: 型): 戻り値の型` を読める

## TypeScript ＝ JavaScript ＋ 型

```typescript
let count: number = 0;
const name: string = "Ryo";
let isOpen: boolean = false;
```

`: number` などの部分が **型注釈** です。これを取り除くと、ただの JavaScript になります。
実際、TypeScript は実行前に `tsc`（TypeScript コンパイラ）などで **型を消して JavaScript に変換** され、ブラウザや Node.js ではその JavaScript が動きます。

| 拡張子 | 中身 |
|---|---|
| `.ts` | TypeScript |
| `.tsx` | TypeScript ＋ JSX（React の画面部品） |
| `.d.ts` | 型の情報だけを書いたファイル |

## Python の型ヒントとの違い

```python
def greet(name: str) -> str: ...        # Python
```
```typescript
function greet(name: string): string { ... }   // TypeScript
```

見た目はそっくりですが、大きな違いがあります。

| | Python の型ヒント | TypeScript |
|---|---|---|
| 型が合わないと | そのまま動く（注釈なだけ） | **実行前にエラー**（コンパイルエラー） |
| チェックする人 | mypy などの別ツール | TypeScript 自身 |

```typescript
let count: number = 0;
count = "たくさん";   // エラー: Type 'string' is not assignable to type 'number'.
```

このエラー文は「string 型を number 型に入れることはできません」という意味です。TypeScript のエラーは **「A は B に代入できない」** の形が多いと覚えておくと読めます。

## 型推論：書かなくても型は付く

```typescript
let count = 0;        // 自動で number 型になる
const items = [1, 2]; // number[]
```

AI のコードで型注釈が無い変数も、TypeScript は **最初に入れた値から型を推測** しています。
エディタで変数にマウスを乗せると、推測された型が見られます。

## 関数の型

```typescript
function add(a: number, b: number): number {
  return a + b;
}

const double = (x: number): number => x * 2;

function log(message: string): void {   // void ＝ 何も返さない
  console.log(message);
}
```

**`(...)` の後ろの `: 型` が戻り値の型** です。`void` は Python の `-> None` にあたります。

## 基本の型

| TypeScript | 意味 | Python では |
|---|---|---|
| `number` | 数値（整数も小数も） | `int` / `float` |
| `string` | 文字列 | `str` |
| `boolean` | 真偽値 | `bool` |
| `null` / `undefined` | 値が無い | `None` |
| `any` | 何でもあり（型チェックを諦める） | `Any` |
| `unknown` | 何か分からない（使う前に確認が必要） | `object` に近い |

⚠️ AI のコードで `any` がたくさん出てきたら、型の恩恵を捨てているサインです。レビューで確認したいポイントです。

```quiz
? TypeScript のコードは最終的にどうやって動く？
- ブラウザが TypeScript をそのまま実行する
+ 型を取り除いて JavaScript に変換してから実行される
- Python に変換されて実行される
> tsc やビルドツールが JavaScript に変換します。

? `function f(x: string): number` の戻り値の型は？
- string
+ number
- void
> ( ) の後ろの `: number` が戻り値の型です。

? `let n = 5; n = "five";` は TypeScript でどうなる？
- 問題なく動く
+ 型エラーになる
> `let n = 5` で n は number と推論されるため、文字列は代入できません。
```
