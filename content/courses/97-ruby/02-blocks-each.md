---
title: ブロックと each ― do |x| ... end を読む
level: 1
minutes: 16
concepts: [loops, higher_order, functions]
summary: Ruby の繰り返しは for ではなく each とブロック。{ |p| ... } と do ... end、map・select・find・sum・reduce、&:even? の省略形、yield でブロックを呼ぶメソッド、File.open のブロックで自動で閉じる、ラムダ。
---
## このレッスンのゴール

- `each { |p| ... }` と `do |p| ... end` のブロックを読める
- `map`・`select`・`find`・`reduce` などを、Python の内包表記と対応させて読める
- `yield` とブロックを受け取るメソッド（`File.open do ... end`）の仕組みが分かる

## each とブロック

```ruby
prices = [120, 90, 200, 1200, 250, 180]

prices.each { |p| print p, " " }
# 120 90 200 1200 250 180

prices.each_with_index do |p, i|
  puts "#{i}: #{p}" if i < 2
end
# 0: 120
# 1: 90
```

Ruby では、繰り返しに `for` をほとんど使いません。配列の **`each` メソッドに「1 つずつやること」を渡す** のが Ruby の書き方です。

| 部分 | 意味 |
|---|---|
| `{ \|p\| ... }` | **ブロック**：メソッドに渡す「ひとまとまりの処理」。`\|p\|` が受け取る引数 |
| `do \|p, i\| ... end` | 同じブロックの、複数行の書き方 |
| `each_with_index` | 要素と番号を渡す（Python の `enumerate`） |

`{ }` は 1 行、`do ... end` は複数行、と使い分けるのが習慣です。JavaScript の `prices.forEach(p => ...)` と同じ形で、`|p|` が `p =>` に当たります。

## 変換・絞り込み・集計

```ruby
p prices.map { |p| p * 110 / 100 }          # [132, 99, 220, 1320, 275, 198]
p prices.select { |p| p < 200 }             # [120, 90, 180]
p prices.sum, prices.max                    # 2040 / 1200
p prices.sort.reverse.first(3)              # [1200, 250, 200]
p prices.find { |p| p > 1000 }              # 1200
p prices.count { |p| p >= 200 }             # 3
p prices.reduce(0) { |sum, p| sum + p }     # 2040
```

| Ruby | Python | JavaScript |
|---|---|---|
| `map { \|p\| ... }` | `[... for p in prices]` | `.map(p => ...)` |
| `select { \|p\| ... }`（`filter` も同じ） | `[p for p in prices if ...]` | `.filter(...)` |
| `reject { \|p\| ... }` | `[p for p in prices if not ...]` | |
| `find { \|p\| ... }` | `next((p for p in prices if ...), None)` | `.find(...)` |
| `count { \|p\| ... }` | `sum(1 for p in prices if ...)` | |
| `sum` / `max` / `min` | `sum()` / `max()` / `min()` | |
| `reduce(0) { \|sum, p\| ... }` | `functools.reduce(...)` | `.reduce(...)` |
| `first(3)` / `last` | `[:3]` / `[-1]` | `.slice(0, 3)` |

`prices.sort.reverse.first(3)` のように、**メソッドを `.` でつなげて、左から順に読む** のは、Java の Stream（Java コースのレッスン 5）・Rust のイテレータと同じです。

### &:メソッド名 の省略形

```ruby
p %w[りんご バナナ 牛乳].map(&:length)    # [3, 3, 2]
```

`map(&:length)` は `map { |x| x.length }` の省略形です。「各要素の length メソッドを呼んで」。`%w[りんご バナナ 牛乳]` は、スペースで区切った文字列の配列（`["りんご", "バナナ", "牛乳"]`）の短い書き方です。Java の `Product::name`（メソッド参照）と同じ考え方です。

## 数で繰り返す

```ruby
3.times { |i| print i, " " }       # 0 1 2
1.upto(3) { |i| print i, " " }     # 1 2 3
```

`3.times` は、**数のメソッドにブロックを渡して** 3 回繰り返しています。Python の `for i in range(3):` です。「数もオブジェクト」（レッスン 1）だからこう書けます。

## yield：ブロックを受け取るメソッド

ブロックは、自分で作ったメソッドにも渡せます。

```ruby
def twice
  yield 1
  yield 2
end

twice { |n| puts "ブロックが呼ばれた: #{n}" }
# ブロックが呼ばれた: 1
# ブロックが呼ばれた: 2
```

`yield` は「**渡されたブロックを、ここで呼ぶ**」という意味です。`yield 1` で、ブロックの `|n|` に 1 が入ります。`each` も、中でこうやって要素を 1 つずつ yield しています。

### 前後に処理をはさむ

```ruby
def with_log(label)
  puts "開始: #{label}"
  result = yield
  puts "終わり: #{label}"
  result
end

r = with_log("計算") { 2 + 3 }
# 開始: 計算
# 終わり: 計算
p r   # 5
```

**「前の処理 → ブロックの中身 → 後の処理」** という形を、メソッドにまとめられます。Python のデコレーターや `with` 文に近い使い方です。

### File.open のブロック：自動で閉じる

```ruby
File.open("memo.txt") do |f|
  f.each_line { |line| print "行: ", line }
end
# 行: a
# 行: b
```

`File.open` にブロックを渡すと、**ブロックが終わったときに、ファイルを自動で閉じてくれます**（例外が起きても）。これがまさに上の「前後に処理をはさむ」形で、Python の `with open(...) as f:`、Go の `defer`、C++ の RAII、Java の try-with-resources と同じ役目です。

データベースのトランザクション（`ActiveRecord::Base.transaction do ... end`）など、Ruby では **「後片付けが必要なもの」はブロックで書く** のが定番です。

## ラムダ：ブロックを値として持つ

```ruby
square = ->(x) { x * x }
p square.call(4), square.(5), [1, 2, 3].map(&square)   # 16 / 25 / [1, 4, 9]
```

ブロックはそのままでは変数に入れられませんが、**ラムダ**（`->(x) { ... }`）にすると、値として持ち回せます。Python の `lambda x: x * x` です。

## AI のコードではこう出てくる

| 見かけたら | 読み方 |
|---|---|
| `users.each do \|user\| ... end` | users を 1 人ずつ |
| `users.map(&:email)` | 全員の email の配列 |
| `orders.select(&:paid?).sum(&:total)` | 支払い済みの注文の合計 |
| `items.each_slice(100) { \|batch\| ... }` | 100 個ずつに分けて処理 |
| `ActiveRecord::Base.transaction do ... end` | ブロックの中をトランザクションに（レッスン 5） |
| `for x in items` | 動くが、Ruby らしくない書き方。each が普通 |

```quiz
? `prices.select { |p| p < 200 }` を Python で書くと？
+ `[p for p in prices if p < 200]`
- `[p < 200 for p in prices]`
- `sum(p for p in prices if p < 200)`
> select はブロックが真を返す要素だけを集めます（filter と同じ）。

? `users.map(&:name)` は何の省略形？
- `users.map { |u| :name }`
+ `users.map { |u| u.name }`
- `users.name`
> `&:メソッド名` は「各要素のそのメソッドを呼ぶ」ブロックの省略形です。

? `File.open("a.txt") do |f| ... end` のようにブロックで開く利点は？
- ファイルを速く読める
+ ブロックが終わると（例外が起きても）、ファイルを自動で閉じてくれる
- ファイルが無ければ自動で作ってくれる
> ブロックの前後に処理をはさむ仕組みで、Python の with 文に当たります。
```
