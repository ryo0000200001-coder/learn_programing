---
title: クロージャ・プロトコル・エラー
level: 2
minutes: 20
concepts: [higher_order, generics, errors, collections]
summary: { (x: Int) -> Int in ... } と $0、最後のクロージャを外に出す書き方、filter・map・reduce・sorted・\.price、外の変数を覚えるクロージャ。protocol と extension（既存の Int にも足せる）、throws・try・do-catch・try?・Result。[weak self] の意味。
---
## このレッスンのゴール

- クロージャの書き方（`in`・`$0`・`\.price`）と、コレクションの操作を読める
- `protocol` と `extension` の意味が分かる
- `throws`・`try`・`do / catch`・`try?` を読める

## クロージャ

```swift
let withTax = { (price: Int) -> Int in price * 110 / 100 }
print(withTax(120))    // 132
```

| 部分 | 意味 |
|---|---|
| `{ (price: Int) -> Int in 本体 }` | 引数と戻り値の型を書いて、`in` の後に本体 |
| `{ $0.price < 200 }` | 引数を名前の代わりに **`$0`・`$1`** で使う短い書き方 |

Kotlin の `it`、Python の `lambda`、Rust の `|x|` に当たります。Swift では、型が分かっていれば、ほとんど省略できます。

```swift
products.sorted(by: { (a: Product, b: Product) -> Bool in return a.price > b.price })
products.sorted(by: { a, b in a.price > b.price })
products.sorted { $0.price > $1.price }      // 最後のクロージャはかっこの外へ（Kotlin と同じ）
```

3 つとも同じ意味です。AI のコードでは、いちばん短い形がよく出てきます。

## コレクションの操作

SQL コースと同じ 6 つの商品です。

```swift
print(products.filter { $0.price < 200 }.map { $0.name })     // ["りんご", "バナナ", "クロワッサン"]
print(products.map(\.price).reduce(0, +))                     // 2040
print(products.sorted { $0.price > $1.price }.prefix(3).map(\.name))   // ["コーヒー豆", "食パン", "牛乳"]
let byCat = Dictionary(grouping: products, by: { $0.category })
// パン 2 / 果物 2 / 飲み物 2
print(products.first { $0.price > 5000 }?.name ?? "なし")      // なし
```

| Swift | Kotlin | Python |
|---|---|---|
| `filter { $0.price < 200 }` | `filter { it.price < 200 }` | `[p for p in ... if p.price < 200]` |
| `map { $0.name }` / `map(\.name)` | `map { it.name }` | `[p.name for p in ...]` |
| `reduce(0, +)` | `sumOf { }` / `reduce` | `sum(...)` |
| `sorted { $0.price > $1.price }` | `sortedByDescending { it.price }` | `sorted(..., key=..., reverse=True)` |
| `prefix(3)` | `take(3)` | `[:3]` |
| `Dictionary(grouping:by:)` | `groupBy { }` | defaultdict |
| `first { 条件 }` → オプショナル | `firstOrNull { }` | `next(..., None)` |

`\.price` は **キーパス**（「price というプロパティへの道」）で、`{ $0.price }` の短い書き方です（Java の `Product::price`、Ruby の `&:price`）。`reduce(0, +)` は、「0 から始めて `+` で足していく」。`+` という演算子も関数として渡せます。

### 外の変数を覚えるクロージャ

```swift
func makeCounter() -> () -> Int {
    var count = 0
    return { count += 1; return count }
}
let next = makeCounter()
print(next(), next(), next())    // 1 2 3
```

`makeCounter` が終わった後も、返したクロージャは **`count` を覚えていて**、呼ぶたびに増えます（**キャプチャ**。C++ のラムダの `[ ]`（C++ コースのレッスン 5）を、Swift は自動でやる）。

`() -> Int` は「引数無しで Int を返す関数」という型です。

### [weak self]

画面のコード（レッスン 5）では、こんな書き方をよく見ます。

```swift
api.fetch { [weak self] result in
    self?.items = result
}
```

class（レッスン 3）の中で、後で呼ばれるクロージャが **self をキャプチャすると、お互いを持ち合って、どちらも片付かない**（メモリリーク）ことがあります（C++ の shared_ptr の循環参照と同じ。C++ コースのレッスン 4）。`[weak self]` は「self を **弱く**（持ち主の数に入れずに）覚えて」という指定で、self はオプショナル（`self?.`）になります。

## プロトコルと extension

```swift
protocol HasPrice { var price: Int { get } }
extension HasPrice { var label: String { "\(price) 円" } }
extension Product: HasPrice {}

let items: [any HasPrice] = products
print(items.first!.label)    // 120 円

extension Int { var withTax: Int { self * 110 / 100 } }
print(120.withTax)           // 132
```

| 書き方 | 意味 | 他の言語では |
|---|---|---|
| `protocol HasPrice { var price: Int { get } }` | 「price を持つ」という約束 | Java の interface、Rust の trait、Go の interface |
| `extension HasPrice { ... }` | プロトコルに **中身付きのメソッド** を足す | Java の default メソッド、Rust のトレイトのデフォルト |
| `extension Product: HasPrice {}` | Product が HasPrice を守ると、**後から** 宣言する | Rust の `impl HasPrice for Product` |
| `[any HasPrice]` | HasPrice を守るものなら何でも入る配列 | Rust の `Vec<Box<dyn HasPrice>>` |
| `extension Int { ... }` | **既存の型（Int）にも** プロパティやメソッドを足せる | Ruby のモンキーパッチ、Kotlin の拡張関数 |

Product はすでに `price` を持っていたので、`extension Product: HasPrice {}` と書くだけで、`label` まで使えるようになりました。Swift は「**プロトコル中心**」の言語と言われ、Apple の部品の多くがこの形でできています（`Codable`・`Identifiable`・`View` など）。

## エラー：throws・try・do / catch

```swift
enum ShopError: Error { case notFound(String), outOfStock }

func findPrice(_ name: String) throws -> Int {
    guard let p = products.first(where: { $0.name == name }) else { throw ShopError.notFound(name) }
    return p.price
}

do {
    print(try findPrice("りんご"))    // 120
    print(try findPrice("ぶどう"))
} catch ShopError.notFound(let n) {
    print("見つかりません: \(n)")      // 見つかりません: ぶどう
} catch {
    print("その他: \(error)")
}
```

| 書き方 | 意味 | Python で言うと |
|---|---|---|
| `func f() throws -> Int` | 失敗しうる関数（失敗は **戻り値の型の一部** として宣言） | （宣言しない） |
| `throw ShopError.notFound(name)` | 失敗を投げる | `raise NotFound(name)` |
| `try f()` | 「ここで失敗しうる」という **印**（必須） | （書かない） |
| `do { ... } catch パターン { ... }` | 受け止める | `try: ... except ...:` |
| `catch { ... }` | それ以外全部（`error` という名前で使える） | `except Exception as error:` |

```swift
let v = f()
// error: call can throw but is not marked with 'try'
```

`throws` の関数を呼ぶとき、**`try` を書かないとコンパイルエラー** です。Rust の `?` と同じく、**どこで失敗しうるかが、コードに `try` として見える** ようになっています。Java の検査例外（Java コースのレッスン 4）とも近い考え方です。

### try? と Result

```swift
print((try? findPrice("ぶどう")) as Any)          // nil

let r: Result<Int, Error> = Result { try findPrice("牛乳") }
switch r { case .success(let v): print("成功", v); case .failure(let e): print("失敗", e) }
// 成功 200
```

| 書き方 | 失敗したとき |
|---|---|
| `try f()`（do の中） | catch へ |
| `try? f()` | **nil**（オプショナルで返る。レッスン 2） |
| `try! f()` | ⚠️ 止まる（`!` の仲間） |
| `Result { try f() }` | `.failure(エラー)` という値になる（Rust の Result と同じ） |

## AI のコードではこう出てくる

| 見かけたら | 読み方・チェック |
|---|---|
| `users.map(\.name)` | 全員の名前 |
| `.sorted { $0.date > $1.date }` | 新しい順 |
| `{ [weak self] in self?.reload() }` | self を弱く覚えるクロージャ（循環参照を防ぐ） |
| `extension View { func card() -> some View { ... } }` | SwiftUI の部品に、自分のメソッドを足す（レッスン 5） |
| `try?` で結果を捨てている | 失敗を黙って無視していないか |
| `try!` | ⚠️ 失敗すると落ちる |
| `func load() async throws -> [Item]` | 非同期で、失敗しうる（`try await load()` で呼ぶ） |

```quiz
? `products.filter { $0.price < 200 }` の `$0` は？
+ クロージャに渡された最初の引数（ここでは各 Product）
- products の 0 番目の要素
- 0 円
> `$0`・`$1` は、クロージャの引数を名前の代わりに使う短い書き方です。Kotlin の it に当たります。

? `throws` が付いた関数 `findPrice` を、`try` を書かずに `let v = findPrice("x")` と呼ぶと？
- v に nil が入る
+ コンパイルエラー（失敗しうる呼び出しには try が必要）
- 失敗したら止まる
> Swift では、失敗しうる関数を呼ぶ場所に必ず try を書きます。どこで失敗しうるかがコードで分かります。

? `extension Int { var withTax: Int { self * 110 / 100 } }` の後、`120.withTax` は？
- エラー（Int は変えられない）
+ 132
- 120
> extension で、既存の型にも後からプロパティやメソッドを足せます。
```
