---
title: オプショナル ― ? と if let と guard
level: 1
minutes: 16
concepts: [types, errors, conditionals]
summary: nil かもしれない値の型 String?、?. と ??、取り出す if let と guard let、Int("12a") が nil を返す、compactMap、強制的に取り出す ! で止まる。オプショナルをそのまま使うとコンパイルエラー。
---
## このレッスンのゴール

- `String` と `String?` の違いを説明できる
- `?.`・`??`・`if let`・`guard let ... else` を読める
- `!` で強制的に取り出す危険が分かる

## オプショナル：無いかもしれない値

```swift
func findName(_ id: Int) -> String? { id == 1 ? "Ryo" : nil }
```

`String?` は「**String があるかもしれないし、無い（nil）かもしれない**」型で、**オプショナル** と呼びます。Kotlin の `String?`（Kotlin コースのレッスン 2）とほぼ同じ書き方で、Rust の `Option<String>` と同じ考え方です。

```swift
let name = findName(2)
print(name.count)
let s: String = nil
```

```text
s2b.swift:3:7: error: value of optional type 'String?' must be unwrapped to refer to member 'count' of wrapped base type 'String'
s2b.swift:4:17: error: 'nil' cannot initialize specified type 'String'
```

| エラー | 意味 |
|---|---|
| 1 つ目 | 「オプショナルの `String?` は、**取り出さないと**（unwrap）`count` を使えません」 |
| 2 つ目 | 「`String` には nil を入れられません」 |

Kotlin と同じく、**nil を確かめずに使うと、コンパイルできません**。

## 安全な使い方

```swift
let name: String? = findName(2)
print(name as Any)            // nil
print(name?.count as Any)     // nil
print(name ?? "なし")          // なし
```

| 書き方 | 意味 | Kotlin | C# |
|---|---|---|---|
| `name?.count` | nil なら nil、そうでなければ count（オプショナル連鎖） | `?.` | `?.` |
| `name ?? "なし"` | nil なら右 | `?:` | `??` |
| `name!` | **強制的に取り出す**。nil なら止まる | `!!` | `!` |

（`as Any` は、オプショナルをそのまま print したときの警告を消すための書き方です）

## if let：あれば取り出す

```swift
if let n = findName(1) {
    print("if let: \(n.count)")      // if let: 3
}
```

`if let n = オプショナル { ... }` は、「**中身があれば、それを n に取り出して、中の処理をする**」という意味です。中では n は普通の `String` として使えます（Kotlin のスマートキャストと同じ役割）。Swift でいちばんよく見る書き方です。

Python で書くとこうです。

```python
n = find_name(1)
if n is not None:
    print(f"if let: {len(n)}")
```

## guard let：無ければ先に抜ける

```swift
func show(_ id: Int) {
    guard let n = findName(id) else {
        print("guard: 見つからないので終わり")
        return
    }
    print("guard の後: \(n)")
}
show(1); show(2)
// guard の後: Ryo
// guard: 見つからないので終わり
```

`guard let n = ... else { return }` は、「**取り出せなければ、ここで抜ける。取り出せたら、この後ずっと n を使える**」という書き方です。

| | `if let` | `guard let` |
|---|---|---|
| 取り出した値が使える範囲 | `{ }` の中だけ | **guard の後、関数の最後まで** |
| よく使う場面 | あったら何かする | **関数の最初に「必要なものがそろっているか」を確かめる** |

`guard` の `else` の中では、**必ず `return` などで抜けないとコンパイルエラー** になります。Python の「早めの return」（`if n is None: return`）を、文法で強制したものです。

## nil を返す便利な関数

```swift
let num = Int("12a")
print(num as Any, Int("42") as Any)      // nil Optional(42)

let list: [String?] = ["a", nil, "c"]
print(list.compactMap { $0 })            // ["a", "c"]
```

| 書き方 | 意味 | 他の言語では |
|---|---|---|
| `Int("12a")` | 数にできなければ **nil**（例外ではない） | Kotlin の `toIntOrNull()` |
| `dict["key"]` | 無ければ nil（レッスン 1） | |
| `array.first` | 空なら nil | |
| `compactMap { $0 }` | nil を取り除く（`$0` はクロージャの最初の引数。レッスン 4） | Kotlin の `filterNotNull()` |

## ⚠️ ! で強制的に取り出す

```swift
let forced = findName(2)!
```

```text
Fatal error: Unexpectedly found nil while unwrapping an Optional value
```

`!` は「**絶対に nil ではない**」と言い切って取り出す書き方で、nil なら **その場でプログラムが止まります**（iPhone のアプリなら、アプリが落ちる）。Kotlin の `!!`、Rust の `unwrap()` と同じです。

| 書き方 | 判定 |
|---|---|
| `if let x = ...` / `guard let x = ... else { ... }` | ✅ |
| `x ?? 初期値` | ✅ |
| `x?.foo` | ✅ |
| `x!` | ⚠️ 本当に nil にならないと言い切れる場所だけ |
| `var x: String!`（型に `!`） | ⚠️ 「暗黙に取り出されるオプショナル」。古いコードや画面の部品の接続でよく見る |

## AI のコードではこう出てくる

| 見かけたら | チェック |
|---|---|
| `URL(string: s)!` / `try!` / `as!` | ⚠️ 失敗すると落ちる。外からの値（入力・API）に使っていないか |
| `guard let user = user else { return }` | ✅ 必要なものが無ければ抜ける |
| `guard let url = URL(string: s) else { throw ... }` | ✅ 無効な URL ならエラーにする |
| `if let name { ... }`（`= name` が無い） | Swift 5.7 からの短い書き方。`if let name = name` と同じ |
| `user?.profile?.name ?? "ゲスト"` | 途中のどれかが nil なら "ゲスト" |

```quiz
? Swift の `let n: Int? = Int("abc")` の n の値は？
- 0
+ nil
- エラーで止まる
> Int("...") は数にできない文字列なら nil を返します。だから戻り値の型が Int? です。

? `guard let user = findUser(id) else { return }` の後で、user はどう使える？
+ 関数の最後まで、普通の（オプショナルでない）値として使える
- else の中でだけ使える
- オプショナルのままなので、毎回 ?. が必要
> guard let は、取り出せなければ抜け、取り出せたらその後ずっと値として使えます。

? `findName(2)!` で findName が nil を返したら？
- 空文字が返る
- nil が返る
+ プログラムが止まる（Fatal error）
> `!` は強制的に取り出す書き方で、nil なら止まります。実際に `Unexpectedly found nil while unwrapping` で止まりました。
```
