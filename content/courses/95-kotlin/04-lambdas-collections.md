---
title: ラムダとコレクション操作 ― it と { }
level: 2
minutes: 18
concepts: [collections, higher_order, functions]
summary: filter・map・sumOf・groupBy・maxBy・sortedWith を it でつなぐ書き方。listOf は変えられず mutableListOf は変えられる、関数を受け取る関数 (Int) -> Int、最後の引数のラムダはかっこの外に出せる、let・also・with などのスコープ関数。
---
## このレッスンのゴール

- `products.filter { it.price < 200 }.map { it.name }` を読める
- `listOf` と `mutableListOf` の違いが分かる
- ラムダの `{ x -> ... }`・`it`・「かっこの外に出す」書き方と、`let`・`also`・`with` を読める

## コレクション操作

SQL コースと同じ 6 つの商品です。

```kotlin
data class Product(val name: String, val category: String, val price: Int)

val products = listOf(
    Product("りんご", "果物", 120), Product("バナナ", "果物", 90),
    Product("牛乳", "飲み物", 200), Product("コーヒー豆", "飲み物", 1200),
    Product("食パン", "パン", 250), Product("クロワッサン", "パン", 180),
)

println(products.filter { it.price < 200 }.map { it.name })   // [りんご, バナナ, クロワッサン]
println(products.sumOf { it.price })                          // 2040
println(products.groupBy { it.category }.mapValues { (_, v) -> v.size })
// {果物=2, 飲み物=2, パン=2}
println(products.groupBy { it.category }.mapValues { (_, v) -> v.map { it.price }.average() })
// {果物=105.0, 飲み物=700.0, パン=215.0}
println(products.maxBy { it.price }.name)                     // コーヒー豆
```

| Kotlin | Python | Java（Stream） |
|---|---|---|
| `filter { it.price < 200 }` | `[p for p in ... if p.price < 200]` | `.filter(p -> p.price() < 200)` |
| `map { it.name }` | `[p.name for p in ...]` | `.map(Product::name)` |
| `sumOf { it.price }` | `sum(p.price for p in ...)` | `.mapToInt(...).sum()` |
| `groupBy { it.category }` | `itertools.groupby` / defaultdict | `Collectors.groupingBy(...)` |
| `maxBy { it.price }` | `max(..., key=lambda p: p.price)` | `.max(Comparator...)` |
| `firstOrNull { ... }` | `next((... ), None)` | `.findFirst()` |
| `any { }` / `all { }` / `count { }` | `any()` / `all()` / `sum(1 for ...)` | `anyMatch` など |
| `take(3)` | `[:3]` | `.limit(3)` |
| `joinToString("、") { it.name }` | `"、".join(...)` | `Collectors.joining` |

Java の Stream では `.stream()` と `.collect(...)` が必要でしたが、Kotlin は **リストにそのまま `filter` や `map` を呼べます**。SQL コースの `GROUP BY` と同じ数になっているのも確かめられます。

```kotlin
println(products.sortedWith(compareBy<Product> { it.category }.thenByDescending { it.price }).map { it.name })
// [食パン, クロワッサン, りんご, バナナ, コーヒー豆, 牛乳]
println(products.firstOrNull { it.price > 5000 }?.name ?: "なし")      // なし
println(products.take(3).joinToString("、") { it.name })              // りんご、バナナ、牛乳
```

`firstOrNull { ... }?.name ?: "なし"` は、レッスン 2 の null 安全と組み合わせた、Kotlin でよく見る形です。

## ラムダの書き方

```kotlin
val withTax = { price: Int -> price * 110 / 100 }
println(withTax(120))     // 132
```

| 書き方 | 意味 |
|---|---|
| `{ price: Int -> price * 110 / 100 }` | 引数 price を受け取って、最後の式を返すラムダ |
| `{ it.price < 200 }` | 引数が **1 つ** なら、名前を書かずに **`it`** で使える |
| `{ (_, v) -> v.size }` | 分解して受け取る（`_` は使わない値） |

Python の `lambda price: price * 110 // 100`、JavaScript の `price => ...`、Rust の `|price| ...`、Ruby の `{ |price| ... }` です。

### 関数を受け取る関数

```kotlin
fun applyTwice(x: Int, f: (Int) -> Int) = f(f(x))
println(applyTwice(100, withTax))    // 121
```

`(Int) -> Int` は「Int を受け取って Int を返す関数」という **型** です。100 → 110 → 121 と 2 回適用されました。

### 最後のラムダはかっこの外へ

```kotlin
products.filter({ it.price < 200 })   // かっこの中
products.filter() { it.price < 200 }  // 最後の引数のラムダは、かっこの外に出せる
products.filter { it.price < 200 }    // 引数がラムダだけなら、かっこごと省略できる
```

3 つとも同じ意味です。この決まりのおかげで、レッスン 5 の Jetpack Compose の `Column { ... }` のように、**ラムダを「ブロック」のように書ける** のが Kotlin の特徴です（Ruby のブロックに近い見た目）。

## listOf と mutableListOf

```kotlin
val list = listOf(1, 2)
list.add(2)
// error: unresolved reference 'add'.

val mlist = mutableListOf(1, 2)
mlist.add(3)
println("$list $mlist")    // [1, 2] [1, 2, 3]
```

| 変えられない | 変えられる | Python |
|---|---|---|
| `listOf(...)` | `mutableListOf(...)` | `tuple` / `list` |
| `mapOf("a" to 1)` | `mutableMapOf(...)` | — / `dict` |
| `setOf(...)` | `mutableSetOf(...)` | `frozenset` / `set` |

`listOf` で作ったリストには **`add` というメソッド自体がありません**（コンパイルエラー）。Java の `List.of` は、実行したときに `UnsupportedOperationException` で止まりました（Java コースのレッスン 5）が、Kotlin は **コンパイルの時点で** 分かります。

```kotlin
val stock = mutableMapOf("りんご" to 10)
stock["バナナ"] = 3
stock["りんご"] = stock.getOrDefault("りんご", 0) + 5
println("$stock ${stock["ぶどう"]} ${stock.getValue("りんご")}")
// {りんご=15, バナナ=3} null 15
```

`"りんご" to 10` は、キーと値の組（Pair）を作る書き方です。`map[key]` は無ければ **null**（レッスン 2 の表）。

## スコープ関数

Kotlin のコードには、`let`・`also`・`apply`・`with`・`run` という、似た関数がたくさん出てきます。

```kotlin
val p = Product("みかん", "果物", 80).also { println("作った: ${it.name}") }
println(p.let { "${it.name} は ${it.price} 円" })        // みかん は 80 円
with(StringBuilder()) { append("x"); append("y"); println(this) }   // xy
```

| 関数 | 中での呼び方 | 返すもの | よく使う場面 |
|---|---|---|---|
| `x.let { it ... }` | `it` | ブロックの最後の値 | `?.let { }`：null でなければ（レッスン 2） |
| `x.also { it ... }` | `it` | **x そのもの** | ついでにログを出す・確かめる |
| `x.apply { this ... }` | `this`（省略可） | **x そのもの** | 作ったものの設定をまとめて |
| `with(x) { this ... }` | `this` | ブロックの最後の値 | x のメソッドを続けて呼ぶ |

全部覚えなくても大丈夫です。**「`it` か `this` で x を使う、ひとまとまりの処理」** と読めれば十分です。

## AI のコードではこう出てくる

| 見かけたら | 読み方 |
|---|---|
| `items.filter { it.isActive }.map { it.toUiModel() }` | 有効なものだけ、画面用の形に変換 |
| `list.forEach { println(it) }` | 1 つずつ |
| `users.associateBy { it.id }` | id をキーにした Map にする |
| `button.setOnClickListener { viewModel.save() }` | クリックされたら（最後のラムダをかっこの外に） |
| `Intent(this, Detail::class.java).apply { putExtra("id", id) }` | 作って、設定をまとめて |
| `.asSequence()` | 遅延実行にする（C# の LINQ と同じ。大きなデータで途中のリストを作らない） |

```quiz
? `products.filter { it.price < 200 }` の `it` は何？
+ filter に渡されたラムダの、ただ 1 つの引数（ここでは各 Product）
- products 全体
- it という名前の変数を前もって作っておく必要がある
> 引数が 1 つのラムダは、名前を書かずに it で使えます。

? `val list = listOf(1, 2); list.add(3)` はどうなる？
- [1, 2, 3] になる
- 実行したときに例外
+ コンパイルエラー（listOf のリストには add が無い）
> 変えられるリストが必要なら mutableListOf を使います。

? `button.setOnClickListener { save() }` で、かっこ `( )` が無いのはなぜ？
- Kotlin では関数を呼ぶときかっこが要らないから
+ 最後の引数がラムダのときはかっこの外に出せ、引数がそれだけならかっこを省略できるから
- setOnClickListener は特別な関数だから
> Kotlin の決まりで、最後のラムダはかっこの外に書けます。Jetpack Compose の画面の書き方もこの決まりを使っています。
```
