---
title: クラス・data class・sealed class
level: 2
minutes: 18
concepts: [classes, types]
summary: 1 行で書けるコンストラクタ、プロパティのカスタム set と require、data class の copy と分解、クラスは初期設定で継承できない（open）、状態の一覧を表す sealed class と when、シングルトンの object。
---
## このレッスンのゴール

- Kotlin のクラス（コンストラクタの引数に `val` を書く形・プロパティ）を読める
- `data class` が何を自動で用意してくれるか分かる
- `open`・`sealed class`・`object` の意味が分かる

## クラス

```kotlin
class Product(val name: String, private var basePrice: Int) {
    var stock: Int = 0
        set(value) {
            require(value >= 0) { "在庫はマイナスにできません: $value" }
            field = value
        }

    val price: Int get() = basePrice * 110 / 100

    fun discount(yen: Int) {
        require(yen <= basePrice) { "値引きが大きすぎます: $yen" }
        basePrice -= yen
    }

    override fun toString() = "$name（$price 円）"
}
```

```kotlin
val apple = Product("りんご", 120)
apple.stock = 5
apple.discount(20)
println("$apple 在庫 ${apple.stock}")        // りんご（110 円） 在庫 5

apple.stock = -1
// IllegalArgumentException: 在庫はマイナスにできません: -1
```

| 部分 | 意味 | 他の言語では |
|---|---|---|
| `class Product(val name: String, ...)` | **コンストラクタの引数に `val`** を書くと、そのままプロパティになる | PHP 8 の `public function __construct(public string $name)` |
| `Product("りんご", 120)` | 作る（`new` が要らない） | Java・C# の `new Product(...)` |
| `var stock: Int = 0` | プロパティ（C# の `{ get; set; }` に当たる） | |
| `set(value) { ...; field = value }` | 入れるときの処理を決める。`field` が本当の値の入れ物 | C# の `set { ... }` |
| `val price: Int get() = ...` | 計算して返すプロパティ | C# の `=>`、Python の `@property` |
| `require(条件) { "メッセージ" }` | 条件が偽なら IllegalArgumentException | Python の `if not 条件: raise ValueError(...)` |
| `override fun toString()` | 表示の仕方 | `__str__` |

Java コースのレッスン 3 で 20 行近く書いたクラスが、ずっと短くなっています。

## data class

```kotlin
data class Item(val name: String, val price: Int)

val milk = Item("牛乳", 200)
val milk2 = milk.copy(price = 180)
println("$milk $milk2 ${milk == Item("牛乳", 200)}")
// Item(name=牛乳, price=200) Item(name=牛乳, price=180) true

val (n, p) = milk
println("分解: $n $p")      // 分解: 牛乳 200
```

`data` を付けると、**表示（toString）・中身での比較（equals）・hashCode・copy・分解** を自動で作ってくれます。

| 機能 | Kotlin | Java | C# | Python |
|---|---|---|---|---|
| データを入れる型 | `data class` | `record` | `record` | `@dataclass` |
| 一部を変えたコピー | `.copy(price = 180)` | （自分で書く） | `with { Price = 180 }` | `dataclasses.replace(...)` |
| 分解 | `val (n, p) = milk` | パターン | `var (n, p) = milk` | `n, p = astuple(milk)` |

Android のアプリでは、API から受け取ったデータや、画面の状態を data class で表すのが定番です。

## 継承：open を付けないとできない

```kotlin
class A(val x: Int)
class B(x: Int) : A(x)
```

```text
k3b.kt:2:19: error: this type is final, so it cannot be extended.
```

Kotlin のクラスは、**初期設定で継承できません**（final）。継承させたいクラスとメソッドには、**`open`** を付けます。

```kotlin
open class Animal(val name: String) { open fun sound() = "..." }
class Dog(name: String) : Animal(name) { override fun sound() = "ワン" }

println(Dog("ポチ").sound())   // ワン
```

| Kotlin | Java |
|---|---|
| `class Dog(...) : Animal(name)` | `class Dog extends Animal` |
| `: Runnable`（インターフェース） | `implements Runnable` |
| `open` を付けないと継承できない | 初期設定で継承できる（`final` を付けると禁止） |

「何でも継承できると、親を変えたときに子が壊れやすい」という Java の経験から、**わざと逆にした** 決まりです。

## sealed class：状態の一覧

```kotlin
sealed class Status {
    data object Paid : Status()
    data class Shipped(val tracking: String) : Status()
    data class Cancelled(val reason: String) : Status()
}

fun describe(s: Status): String = when (s) {
    is Status.Paid -> "支払い済み"
    is Status.Shipped -> "発送済み（${s.tracking}）"
    is Status.Cancelled -> "キャンセル：${s.reason}"
}
```

```text
支払い済み
発送済み（AB123）
キャンセル：在庫切れ
```

**sealed class** は「子どもの種類が、ここに書いたもので **全部**」という印です。Rust の enum（Rust コースのレッスン 3）と同じく、**状態ごとに違うデータを持てて**、`when` で書き忘れると **コンパイルエラー** になります。

```kotlin
sealed class S { object A : S(); object B : S() }
fun f(s: S): String = when (s) { is S.A -> "a" }
```

```text
error: 'when' expression must be exhaustive. Add the 'B' branch or an 'else' branch.
```

`is Status.Shipped ->` の中で `s.tracking` が使えるのは、レッスン 2 の **スマートキャスト** で、s が Shipped として扱われているからです。

Android の画面で「読み込み中 / 成功（データ付き）/ 失敗（エラー付き）」を表すのに、とてもよく使われます。

```kotlin
sealed interface UiState {
    data object Loading : UiState
    data class Success(val items: List<Item>) : UiState
    data class Error(val message: String) : UiState
}
```

## object：1 つだけのもの

```kotlin
object Config { const val TAX = 10 }
println(Config.TAX)    // 10
```

`object` は、**プログラムの中に 1 つだけ** あるもの（シングルトン）を作ります。`new` せずに、名前でそのまま使います。Java の `static` の代わりとしても使われます（`companion object { ... }` はクラスの中の static のようなもの）。

## AI のコードではこう出てくる

| 見かけたら | 読み方 |
|---|---|
| `data class User(val id: Long, val name: String)` | データを入れる型 |
| `state.copy(isLoading = false)` | 一部だけ変えた新しい状態を作る（画面の状態の更新の定番） |
| `sealed interface Result<out T>` | 成功・失敗などの一覧（Rust の Result に近い） |
| `companion object { fun newInstance() = ... }` | クラスに付いた static のような関数 |
| `class UserRepository @Inject constructor(private val api: Api)` | 依存性注入（Hilt）。部品を外から受け取る |
| `open` が無いクラスを継承しようとしている | コンパイルエラー |

```quiz
? Kotlin の `data class Item(val name: String, val price: Int)` が自動で用意しないものは？
- 中身で比べる equals
- 一部を変えた copy
+ price を後から変えるための setPrice
> data class の val の項目は変えられません。変えたいときは copy で新しいものを作ります。

? Kotlin で `class B : A()` が「this type is final」というエラーになった。直し方は？
+ A に `open` を付ける
- B に `final` を付ける
- A を data class にする
> Kotlin のクラスは初期設定で継承できません。継承させたいクラスには open を付けます。

? sealed class を `when` で分けるとき、場合を 1 つ書き忘れると？
- その場合は何もしない
+ コンパイルエラーになる（else が無ければ）
- 実行時に例外
> sealed class は子どもの種類が決まっているので、Kotlin は全部の場合を書いたか確かめます。Rust の match と同じです。
```
