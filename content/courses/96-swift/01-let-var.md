---
title: let と var ― Swift の第一歩
level: 1
minutes: 15
concepts: [variables, types, functions, basics]
summary: let（変えられない）と var、"\(name)" の文字列、引数ラベル付きの関数 withTax(price:)、配列と辞書、... と ..< の範囲、switch。整数があふれるとプログラムが止まる（&+ でわざと回り込ませる）。
---
## このレッスンのゴール

- `let` と `var` の違いを説明できる
- `"\(name)"`・引数ラベル（`withTax(price: 120)`）・`_` を読める
- 配列・辞書・範囲（`1...3`・`0..<3`）・`switch` を読める

## Swift とは

**Swift** は Apple が作った言語で、**iPhone・iPad・Mac・Apple Watch のアプリ** を作るのに使われます（昔は Objective-C という言語だった）。安全さ（オプショナル。レッスン 2）と読みやすさを大事にしていて、Kotlin・Rust とよく似た考え方をしています。Mac だけでなく、Linux でも動きます（このコースの例は Linux で実行しました）。

## 最初のプログラム

```swift
func greet(_ name: String) -> String {
    return "こんにちは、\(name) さん"
}

let price = 120
var count = 1
count += 2
print(greet("Ryo"))
print("合計 \(price * count) 円")
print(7 / 2, 7.0 / 2, 7 % 2)
```

```text
こんにちは、Ryo さん
合計 360 円
3 3.5 1
```

（このコースの出力とエラーは、すべて Swift 6.0 で実際にコンパイル・実行したものです）

| Swift | 意味 | Python で言うと |
|---|---|---|
| `func greet(_ name: String) -> String` | 関数。型は後ろ、戻り値は `->` | `def greet(name: str) -> str:` |
| `"...\(name)..."` | 埋め込み（**`\( )`** を使う） | `f"...{name}..."` |
| `print(a, b, c)` | 表示（スペース区切り） | `print(a, b, c)` |
| 文の終わりの `;` | いらない | いらない |
| ファイルの一番上に書いた文 | そのまま実行される（main 関数が要らない） | Python と同じ |

`->` で戻り値の型を書くのは、Python の型ヒントや Rust と同じです。

## let と var

```swift
let price = 120
price = 200
```

```text
s1b.swift:2:1: error: cannot assign to value: 'price' is a 'let' constant
```

| Swift | 意味 | Kotlin | Rust | JavaScript |
|---|---|---|---|---|
| `let` | **変えられない** | `val` | `let` | `const` |
| `var` | 変えられる | `var` | `let mut` | `let` |

⚠️ JavaScript の `let` は「変えられる」なので、**Swift の `let` とは逆** です。Swift では、**基本は `let`、変える必要があるときだけ `var`**（Kotlin・Rust と同じ考え方）。

## 型

```swift
let r: Int = 120 * 0.1
// error: cannot convert value of type 'Double' to specified type 'Int'
```

| Swift | 中身 |
|---|---|
| `Int` | 整数（64 ビット） |
| `Double` | 小数 |
| `Bool` | `true` / `false` |
| `String` | 文字列 |
| `[String]` | 文字列の配列 |
| `[String: Int]` | 文字列 → 整数の辞書 |

Go・Rust・Kotlin と同じく、**Int と Double を混ぜて計算できません**。`Double(price) * 1.1` のように変換します。

### 整数があふれると止まる

```swift
var x = Int.max      // 9223372036854775807
x += 1
print(x)
```

```text
*** Program crashed: Illegal instruction at 0x... ***
```

Swift は、整数があふれると **プログラムを止めます**。Java のように黙ってマイナスになったり（Java コースのレッスン 2）、C のように「未定義」になったり（C 言語コースのレッスン 2）しません。**おかしな値のまま進むより、止まったほうが安全** という考え方です。

わざと回り込ませたいときは、`&+` を使います。

```swift
var x = Int.max
x = x &+ 1
print(x)    // -9223372036854775808
```

## 関数の引数ラベル

```swift
func withTax(price: Int, rate: Double = 0.1) -> Int {
    Int(Double(price) * (1 + rate))
}

print(withTax(price: 120), withTax(price: 120, rate: 0.08))   // 132 129
```

Swift の関数は、**呼ぶときに引数の名前（ラベル）を書く** のが普通です（Python のキーワード引数を、いつも使う感じ）。英語の文のように読めるのが Swift の流儀です。

| 定義 | 呼び方 |
|---|---|
| `func withTax(price: Int)` | `withTax(price: 120)` |
| `func greet(_ name: String)` | `greet("Ryo")`（**`_` でラベルを省略**） |
| `func move(to point: Point)` | `move(to: p)`（外の名前 `to`、中の名前 `point`） |

関数の最後の式が 1 つなら、`return` を省略できます（`withTax` の中身）。

## 文字列

```swift
let a = "りんご"
let b = String("りんご")
print(a == b, a.count, a.utf8.count)    // true 3 9
```

`==` は **中身** で比べます（C#・Kotlin と同じ）。`count` は **人が見た文字の数**（3）、`utf8.count` は UTF-8 のバイト数（9）です。Swift は、絵文字や「が」のような組み合わせの文字も、見た目どおりに 1 文字と数えるように作られています（JavaScript の `"😀".length` が 2 になる問題が起きにくい。コンピュータの基礎コースの「文字コード」）。

## 配列・辞書・範囲

```swift
var fruits = ["りんご", "バナナ"]
fruits.append("みかん")
print(fruits, fruits.count, fruits[0])    // ["りんご", "バナナ", "みかん"] 3 りんご

var stock: [String: Int] = ["りんご": 10]
stock["バナナ"] = 3
print(stock["りんご"] as Any, stock["ぶどう"] as Any, stock["ぶどう", default: 0])
// Optional(10) nil 0
```

辞書から読むと、`10` ではなく **`Optional(10)`** と表示されました。「無いキーかもしれない」ので、辞書の値は **オプショナル**（レッスン 2）で返ってくるのです。`default: 0` を付けると、無ければ 0 になります。

```swift
for i in 1...3 { print(i, terminator: " ") }     // 1 2 3
for i in 0..<3 { print(i, terminator: " ") }     // 0 1 2
```

| Swift | 意味 | Kotlin | Python |
|---|---|---|---|
| `1...3` | 1 から 3（**3 を含む**） | `1..3` | `range(1, 4)` |
| `0..<3` | 0 から 3 の手前まで | `0 until 3` | `range(3)` |

## switch

```swift
let label = price > 100 ? "高い" : "安い"
switch count {
case 0: print("ゼロ")
case 1...9: print("1 桁", label)
default: print("それ以上")
}
// 1 桁 高い
```

Swift の `switch` は、**`break` を書かなくても次の case に進みません**（C や Java の switch の「break 忘れ」が起きない）。そして、**すべての場合を書かないとコンパイルエラー** です（`default` か、全部の case が必要。Rust の match と同じ）。

## AI のコードではこう出てくる

| 見かけたら | 読み方 |
|---|---|
| `let` だらけで `var` が少ない | Swift らしい書き方 |
| `func fetch(from url: URL) async throws -> Data` | 外のラベル from・中の名前 url、非同期で、失敗しうる（レッスン 4） |
| `import SwiftUI` / `import Foundation` | Apple の画面の部品／基本のライブラリ |
| `.swift` と `Package.swift` | Swift のファイル／Swift のパッケージの設定（Swift Package Manager） |
| `Xcode` | Apple のアプリを作る道具（Mac だけ） |
| `&+` / `&*` | わざと回り込ませる計算（ハッシュの計算など） |

```quiz
? Swift の `let x = 1` の後に `x = 2` と書くと？
+ コンパイルエラー（let は変えられない）
- x が 2 になる
- 警告が出るが 2 になる
> Swift の let は変えられない値です。JavaScript の let とは逆なので注意します。

? `func withTax(price: Int) -> Int` を呼ぶ正しい書き方は？
- `withTax(120)`
+ `withTax(price: 120)`
- `withTax(Int: 120)`
> Swift では、呼ぶときに引数のラベルを書くのが基本です。ラベルを省略したいなら、定義で `_ price: Int` と書きます。

? Swift で `Int.max + 1` を計算すると？
- マイナスの数になる
+ プログラムが止まる
- そのまま大きな数になる
> Swift は整数のあふれを見つけると止めます。わざと回り込ませたいときは `&+` を使います。
```
