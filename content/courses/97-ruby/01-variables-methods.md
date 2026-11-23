---
title: 変数とメソッド ― すべてがオブジェクト
level: 1
minutes: 16
concepts: [variables, functions, types, conditionals]
summary: Ruby の書き方（def・end・#{}・puts と p）、最後の式が戻り値、かっこを省略できる呼び出し、すべてがオブジェクト（120.class）、? と ! で終わるメソッド、nil と false 以外は全部真（0 も "" も真）、unless・case・&.。
---
## このレッスンのゴール

- `def ... end`・`"#{...}"`・`puts`・`p` を読める
- かっこの省略と「最後の式が戻り値」に慣れる
- 真偽の決まり（`nil` と `false` 以外は真）と、`?`・`!` で終わるメソッドの意味が分かる

## Ruby とは

**Ruby** は、まつもとゆきひろ（Matz）さんが作った **日本生まれの言語** です。「プログラマーが楽しく書けること」を大事にしていて、英語の文のように読めるコードが書けます。**Ruby on Rails**（レッスン 5）という Web アプリのフレームワークで有名で、GitHub・Shopify・クックパッドなどが Rails で作られてきました。

## 最初のプログラム

```ruby
def greet(name)
  "こんにちは、#{name} さん"
end

price = 120
count = 3
puts greet("Ryo")
puts "合計 #{price * count} 円"
puts 'シングル: #{price}'
```

```text
こんにちは、Ryo さん
合計 360 円
シングル: #{price}
```

（このコースの出力は、すべて Ruby 3.3 で実際に実行したものです）

| Ruby | 意味 | Python で言うと |
|---|---|---|
| `def greet(name) ... end` | メソッドの定義。`end` で終わる | `def greet(name):`（インデント） |
| `"...#{name}..."` | 埋め込み（ダブルクォートだけ） | `f"...{name}..."` |
| `'...#{price}...'` | そのまま（シングル） | `"...{price}..."` |
| `puts x` | 表示して改行 | `print(x)` |
| `# ...` | コメント | `# ...` |

### 最後の式が戻り値

`greet` に `return` がありません。Ruby では、**メソッドの最後に評価された式が、自動で戻り値** になります（Rust の「最後の行の `;` 無し」と同じ考え方）。`return` も書けますが、途中で抜けるとき以外はあまり書きません。

```ruby
def add(a, b = 1) = a + b     # 1 行で書く形（Ruby 3 から）
puts add(2), add(2, 3)         # 3 と 5
```

### かっこの省略

```ruby
puts greet("Ryo")     # かっこあり
puts greet "Ryo"      # かっこなし（同じ意味）
puts 7 / 2, 7 / 2.0   # puts(7 / 2, 7 / 2.0)
```

Ruby は、メソッドを呼ぶときの **かっこを省略できます**。`puts "..."` も、実は `puts("...")` というメソッドの呼び出しです。Rails のコード（レッスン 5）が英語の文のように見えるのは、このためです。

### puts と p

```ruby
p "p は型が分かる形で表示", 120, nil
```

```text
"p は型が分かる形で表示"
120
nil
```

| | 表示 | Python で言うと |
|---|---|---|
| `puts x` | 人が読む形（文字列の `"` は付かない、nil は空行） | `print(x)` |
| `p x` | **開発者が読む形**（`"` が付く、nil は `nil`） | `print(repr(x))` |

デバッグで値を確かめるときは `p` が便利です。（この教材の環境で最初に実行したとき、`p` の日本語が `は...` のように表示されました。Java コースのレッスン 1 と同じく、環境の文字コードの設定が UTF-8 になっていなかったためです）

## すべてがオブジェクト

```ruby
puts 120.class, "abc".class, nil.class, 3.14.class   # Integer String NilClass Float
puts 5.times.to_a.inspect                             # [0, 1, 2, 3, 4]
puts "ruby".upcase.reverse                            # YBUR
puts -5.abs                                           # 5
puts [3, 1, 2].sort.first                             # 1
```

Ruby では、**数も nil も、すべてがオブジェクト** で、メソッドを持っています。`120.class` で型が分かり、`5.times` のように **数にメソッドを呼べます**。Python の `len(x)` のような関数ではなく、**`x.length` のように、何でも `.` でメソッドを呼ぶ** のが Ruby の流儀です。

```ruby
puts 7 / 2, 7 / 2.0, 7 % 2, 2**100
# 3 / 3.5 / 1 / 1267650600228229401496703205376
```

整数どうしの割り算は切り捨て（Python の `//`）、整数はいくらでも大きくなる（Python と同じ）です。

## ? と ! で終わるメソッド

```ruby
name = "Ryo"
puts name.empty?, name.include?("y"), name.length   # false / true / 3

s = "abc"
s2 = s.upcase     # 新しい文字列を返す。s はそのまま
s.upcase!         # s そのものを書き換える
puts s2, s        # ABC / ABC
```

| 名前の終わり | 意味（習慣） | 例 |
|---|---|---|
| `?` | **真偽を返す**（質問） | `empty?`・`include?`・`nil?`・`even?` |
| `!` | **注意が必要**：多くは「そのものを書き換える」 | `upcase!`・`sort!`・`save!`（失敗したら例外。レッスン 5） |
| どちらも無し | 新しい値を返す（元は変えない） | `upcase`・`sort` |

Python の `sorted(x)`（新しいリスト）と `x.sort()`（そのものを並べ替え）の区別を、Ruby は **名前の `!`** で表します。

## 真偽：nil と false だけが偽

```ruby
def check(x)
  if x then "真" else "偽" end
end
puts [0, "", [], nil, false].map { |v| "#{v.inspect}=#{check(v)}" }.join(" ")
```

```text
0=真 ""=真 []=真 nil=偽 false=偽
```

**⚠️ Ruby では、`0` も空文字 `""` も空の配列 `[]` も「真」です**。偽になるのは `nil` と `false` だけです。Python では `0`・`""`・`[]` は偽なので、正反対です。

```python
if items:          # Python：空なら偽
```

```ruby
if items.any?      # Ruby：空かどうかは any? / empty? で
```

Python の癖で `if count` と書くと、count が 0 でも実行されてしまいます。

## 条件の書き方

```ruby
puts "大人" if 20 >= 18           # 後ろに if（1 行で書ける）
puts "子ども" unless 20 >= 18     # unless は「〜でなければ」

label = case age
        when 0..12 then "子ども"
        when 13..19 then "10 代"
        else "大人"
        end
```

| Ruby | Python |
|---|---|
| `x if 条件` | `if 条件: x` |
| `unless 条件` | `if not 条件:` |
| `case ... when 0..12` | `match` / `if 0 <= age <= 12` |
| `elsif` | `elif` |

`case` も **値を返す** ので、変数に入れられます。`0..12` は 0 以上 12 以下の範囲です。

## nil の扱い

```ruby
x = nil
puts x&.length.inspect     # nil（x が nil なら、エラーにせず nil）
puts (x || "default")      # default（nil なら右）

nil.upcase
# undefined method `upcase' for nil  （NoMethodError）
```

| 書き方 | 意味 | 他の言語では |
|---|---|---|
| `x&.length` | x が nil なら nil、そうでなければ `x.length` | JavaScript・PHP の `?.` |
| `x \|\| "default"` | x が nil（か false）なら右 | Python の `x or "default"` |
| `x ||= "default"` | x が nil なら入れる | |

nil のメソッドを呼ぶと `NoMethodError` です（Java の NullPointerException、Python の `AttributeError: 'NoneType'` に当たる）。Ruby のエラーでいちばんよく見るものです。

## AI のコードではこう出てくる

| 見かけたら | 読み方・チェック |
|---|---|
| `if user.present?` / `blank?` | Rails の便利なメソッド。`blank?` は nil・空文字・空の配列で真（Python の真偽に近い） |
| `if count` | ⚠️ 0 でも真。`count > 0` / `count.positive?` |
| `items.sort!` | items そのものを並べ替える |
| `return unless user` | user が nil なら抜ける（よくある書き出し） |
| `name&.strip` | nil なら nil |
| `puts` だけで `p` が無いデバッグ | nil や空文字が見分けにくい。`p` を使う |

```quiz
? Ruby で `if 0 then "真" else "偽" end` の結果は？
+ "真"（Ruby では nil と false 以外は全部真）
- "偽"（0 は偽）
- エラー
> Ruby で偽になるのは nil と false だけです。Python とは逆なので注意します。

? `s.upcase` と `s.upcase!` の違いは？
- 同じ
+ upcase は新しい文字列を返し、upcase! は s そのものを書き換える
- upcase! は大文字にした後に「！」を付ける
> `!` で終わるメソッドは、多くの場合そのものを書き換えます（注意が必要、という印）。

? Ruby のメソッドで `return` が無いとき、戻り値は？
- nil
+ 最後に評価された式の値
- エラー
> Ruby は最後の式の値を自動で返します。`def greet(name) "こんにちは、#{name}" end` は、その文字列を返します。
```
