---
title: クラスとモジュール ― @ と attr_accessor
level: 2
minutes: 18
concepts: [classes, modules, errors]
summary: initialize と @インスタンス変数、attr_reader・attr_accessor、self.クラスメソッド、継承と super、モジュールの include（ミックスイン）と Comparable、raise・rescue・ensure、既存のクラスに後からメソッドを足すモンキーパッチ。
---
## このレッスンのゴール

- `class`・`initialize`・`@name`・`attr_reader` を読める
- 継承（`<`・`super`）と、モジュールの `include` の違いが分かる
- `raise`・`rescue`・`ensure` と、モンキーパッチの意味が分かる

## クラス

```ruby
class Product
  attr_reader :name
  attr_accessor :stock

  def initialize(name, base_price, stock: 0)
    @name = name
    @base_price = base_price
    @stock = stock
  end

  def price
    @base_price * 110 / 100
  end

  def discount!(yen)
    raise ArgumentError, "値引きが大きすぎます: #{yen}" if yen > @base_price
    @base_price -= yen
    self
  end

  def to_s
    "#{@name}（#{price} 円）"
  end

  def self.free(name)
    new(name, 0)
  end
end
```

```ruby
apple = Product.new("りんご", 120, stock: 5)
puts apple.name, apple.price       # りんご / 132
apple.stock += 1
puts apple.stock                   # 6
apple.discount!(20)
puts apple                         # りんご（110 円）
puts Product.free("試供品")         # 試供品（0 円）
```

| Ruby | 意味 | Python で言うと |
|---|---|---|
| `Product.new(...)` | 作る | `Product(...)` |
| `def initialize(...)` | コンストラクタ | `def __init__(self, ...)` |
| `@name` | **インスタンス変数**（オブジェクトが持つデータ） | `self.name` |
| `attr_reader :name` | `name` を **読む** メソッドを自動で作る | `@property` |
| `attr_accessor :stock` | `stock` を **読み書きする** メソッドを自動で作る | 普通の属性 |
| `def price` | メソッド（`self` を書かない） | `def price(self):` |
| `price`（メソッドの中で） | 自分のメソッドを呼ぶ（`self.price` の省略） | `self.price()` |
| `def self.free(name)` | **クラスメソッド**（`Product.free` で呼ぶ） | `@classmethod` |
| `def to_s` | 表示の仕方（`puts apple`） | `__str__` |

`attr_reader :name` の `:name` は、レッスン 3 の **シンボル** です。「name という名前の読むメソッドを作って」と、名前をシンボルで渡しています。

### @ の変数は外から見えない

```ruby
apple.name = "みかん"
# NoMethodError: undefined method `name=' for an instance of Product
```

`attr_reader` は読むメソッドしか作らないので、`name=`（書くメソッド）はありません。Ruby の `@` の変数は、**メソッドを通してしか外から触れません**。`apple.stock += 1` ができたのは、`attr_accessor` が `stock=` も作っていたからです（`apple.stock = apple.stock + 1` は、実は `stock=` というメソッドの呼び出し）。

## 継承

```ruby
class SetProduct < Product
  def price
    super - 50
  end
end

set = SetProduct.new("詰め合わせ", 1000)
puts set                        # 詰め合わせ（1050 円）
puts set.is_a?(Product)         # true
```

| Ruby | Python |
|---|---|
| `class SetProduct < Product` | `class SetProduct(Product):` |
| `super` | `super().price()`（同じ名前のメソッドを、引数もそのまま呼ぶ） |
| `is_a?(Product)` | `isinstance(set, Product)` |

## モジュール：機能を混ぜる

```ruby
module Priceable
  def label
    "#{price} 円"
  end
end

class Product
  include Priceable
  include Comparable

  def <=>(other)
    price <=> other.price
  end
  ...
end

puts apple.label                                   # 110 円
puts [Product.new("牛乳", 200), apple].min          # りんご（110 円）
puts apple < set                                   # true
p SetProduct.ancestors.take(4)                     # [SetProduct, Product, Comparable, Priceable]
```

**モジュール** は、メソッドの集まりです。`include` すると、そのクラスに **メソッドを混ぜ込めます**（**ミックスイン**）。

| | 継承（`<`） | モジュール（`include`） |
|---|---|---|
| 数 | 親は 1 つだけ | 何個でも |
| 意味 | 「〜の一種」（詰め合わせは商品の一種） | 「〜の機能を持つ」（値段の表示ができる） |
| 似ているもの | Java の `extends` | Java の interface の default メソッド、Rust の trait のデフォルト |

`Comparable` は Ruby の標準のモジュールで、**`<=>`（宇宙船演算子。PHP コースのレッスン 3）を 1 つ書くだけで、`<`・`>`・`==`・`min`・`max`・`sort` が全部使えるようになります**。`ancestors` を見ると、メソッドを探す順番（自分 → 親 → 混ぜたモジュール）が分かります。

## 例外

```ruby
begin
  apple.discount!(9999)
rescue ArgumentError => e
  puts "ArgumentError: #{e.message}"
ensure
  puts "ensure は必ず実行"
end
# ArgumentError: 値引きが大きすぎます: 9999
# ensure は必ず実行
```

| Ruby | Python |
|---|---|
| `begin ... end` | `try:` |
| `rescue ArgumentError => e` | `except ValueError as e:` |
| `ensure` | `finally:` |
| `raise ArgumentError, "..."` | `raise ValueError("...")` |
| `e.message` | `str(e)` |

メソッド全体を `begin` の代わりにできるので、`def foo ... rescue ... end` と書くこともあります。

## モンキーパッチ：既存のクラスにメソッドを足す

```ruby
class String
  def shout = upcase + "！"
end

puts "hello".shout       # HELLO！
```

Ruby では、**標準の String クラスにも、後からメソッドを足せます**（クラスは閉じていない、オープンクラス）。これを **モンキーパッチ** と呼びます。Rails の `3.days.ago`・`"".blank?` などは、この仕組みで標準のクラスにメソッドを足したものです。

⚠️ 便利ですが、**同じ名前のメソッドを別のライブラリも足していると、上書きし合って動きが変わる** という危険があります。自分のコードで標準のクラスを書き換えるのは、なるべく避けます。

## AI のコードではこう出てくる

| 見かけたら | 読み方・チェック |
|---|---|
| `attr_accessor :name, :email` | 読み書きできる属性を一度に作る |
| `def initialize(name:, email:)` | キーワード引数のコンストラクタ（レッスン 3） |
| `class User < ApplicationRecord` | Rails のモデル（レッスン 5） |
| `include Comparable` / `include Enumerable` | 比べる・each から map などを使えるようにする |
| `rescue => e`（種類を書かない） | StandardError を全部受け止める。広すぎないか |
| `rescue Exception` | ⚠️ Ctrl+C なども受け止めてしまう。普通は StandardError |
| `class String` / `class Integer` を開いている | モンキーパッチ。影響範囲に注意 |

```quiz
? `attr_reader :name` は何をする？
+ name を読むメソッド（`obj.name`）を自動で作る
- name を書くメソッドを作る
- name というシンボルを作るだけ
> attr_reader は読む、attr_writer は書く、attr_accessor は両方のメソッドを作ります。

? `class SetProduct < Product` の `<` の意味は？
- SetProduct のほうが小さい
+ SetProduct は Product を継承する
- Product を SetProduct に混ぜる
> Ruby の継承は `<` で書きます。モジュールを混ぜるのは include です。

? Ruby の `begin ... rescue ... ensure ... end` の ensure は、Python の何に当たる？
- except
- else
+ finally
> ensure は例外が起きても起きなくても必ず実行されます。
```
