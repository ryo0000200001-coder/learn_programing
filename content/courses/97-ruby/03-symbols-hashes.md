---
title: シンボルとハッシュ ― :name と "name" は別物
level: 2
minutes: 16
concepts: [collections, strings, data_formats]
summary: 名前に使う :symbol と文字列の違い、ハッシュ { name: "Ryo" } の 2 つの書き方。シンボルのキーと文字列のキーは別なので、JSON から読んだハッシュを user[:name] で読むと nil になる罠。fetch・Hash.new(0)・dig・キーワード引数。
---
## このレッスンのゴール

- シンボル（`:name`）が何で、文字列とどう違うか説明できる
- ハッシュの 2 つの書き方（`name: "Ryo"` と `"name" => "Hana"`）を読める
- シンボルのキーと文字列のキーの食い違いで `nil` になるバグに気づける

## シンボル

```ruby
p :name.class, "name".class                        # Symbol / String
p :name.object_id == :name.object_id               # true
p "name".object_id == "name".object_id             # false
```

`:name` のように `:` で始まるものを **シンボル** と呼びます。文字列に似ていますが、

| | シンボル `:name` | 文字列 `"name"` |
|---|---|---|
| 使い道 | **名前・ラベル**（ハッシュのキー、オプションの名前） | **データ**（利用者の名前、文章） |
| 同じものは | **いつも同じ 1 つのオブジェクト**（`object_id` が同じ） | 書くたびに別のオブジェクト |
| 変えられるか | 変えられない | 変えられる |

Python には直接当たるものはありませんが、**「名前として使う、変えない文字列」** だと思えば大丈夫です。Rails のコードは、シンボルだらけです（レッスン 5）。

## ハッシュ

```ruby
user = { name: "Ryo", age: 30 }
p user                  # {:name=>"Ryo", :age=>30}
p user[:name]           # "Ryo"
```

Ruby の辞書を **ハッシュ**（Hash）と呼びます。`{ name: "Ryo" }` は、**シンボル `:name` をキーにした** ハッシュの短い書き方です。表示すると `:name=>` となっていることから分かります。

```ruby
json_like = { "name" => "Hana" }
p json_like["name"]     # "Hana"
```

`=>`（ハッシュロケット）を使うと、**文字列など何でもキーにできます**。

| 書き方 | キー | Python で言うと |
|---|---|---|
| `{ name: "Ryo" }` | シンボル `:name` | — |
| `{ "name" => "Ryo" }` | 文字列 `"name"` | `{"name": "Ryo"}` |
| `{ :name => "Ryo" }` | シンボル `:name`（古い書き方） | — |

## ⚠️ シンボルのキーと文字列のキーは別

```ruby
user = { name: "Ryo", age: 30 }
p user[:name], user["name"]          # "Ryo" / nil

json_like = { "name" => "Hana" }
p json_like["name"], json_like[:name]   # "Hana" / nil
```

**`:name` と `"name"` は違うキー** なので、間違えると **エラーにならずに nil** が返ります。これが Ruby でいちばんよく見るバグの 1 つです。

特に気をつけるのが **JSON** です。

```ruby
require "json"
data = JSON.parse('{"name": "Ken", "tags": ["a"]}')
p data              # {"name"=>"Ken", "tags"=>["a"]}
p data["name"]      # "Ken"
p data[:name]       # nil    ← 文字列のキーになっている！
```

`JSON.parse` は、初期設定で **文字列のキー** のハッシュを返します。コードの他の部分がシンボルのキー（`data[:name]`）で書かれていると、nil になって、後で `NoMethodError: undefined method ... for nil`（レッスン 1）として現れます。

```ruby
data2 = JSON.parse('{"name": "Ken"}', symbolize_names: true)
p data2[:name]      # "Ken"
```

`symbolize_names: true` を付けると、シンボルのキーで返してくれます。Rails では、`params[:name]` と `params["name"]` のどちらでも読める特別なハッシュ（`HashWithIndifferentAccess`）が使われているので、この問題は起きにくくなっています。

## ハッシュの便利な操作

### 無いキーのとき

```ruby
p user.fetch(:age), user.fetch(:email, "なし")    # 30 / "なし"
user.fetch(:email)
# KeyError: key not found: :email
```

| 書き方 | 無いキーのとき | Python で言うと |
|---|---|---|
| `h[:email]` | **nil**（エラーにならない） | `h.get("email")` |
| `h.fetch(:email)` | **KeyError** | `h["email"]` |
| `h.fetch(:email, "なし")` | "なし" | `h.get("email", "なし")` |
| `h.dig(:address, :city)` | 途中が無くても nil | `h.get("address", {}).get("city")` |
| `h.key?(:name)` | true / false | `"name" in h` |

**必ずあるはずのキーは `fetch`** で読むと、打ち間違いや食い違いにすぐ気づけます。

### 数える

```ruby
stock = Hash.new(0)
%w[りんご バナナ りんご].each { |f| stock[f] += 1 }
p stock      # {"りんご"=>2, "バナナ"=>1}
```

`Hash.new(0)` は「無いキーを読んだら 0」のハッシュです。Python の `defaultdict(int)`、Go の「無ければゼロ値」と同じで、数を数える定番の形です。

### 回す・変換する

```ruby
user.each { |k, v| puts "#{k} => #{v}" }
# name => Ryo
# age => 30

p user.map { |k, v| [k, v.to_s] }.to_h          # {:name=>"Ryo", :age=>"30"}
p user.select { |k, v| v.is_a?(Integer) }       # {:age=>30}
p user.to_json                                  # "{\"name\":\"Ryo\",\"age\":30}"
```

ハッシュにも、レッスン 2 の `each`・`map`・`select` が使えます。`to_json` で JSON にすると、シンボルのキーは文字列（`"name"`）になります。

## キーワード引数

```ruby
def create_user(name:, age: 20, **opts)
  "#{name} #{age} #{opts}"
end

p create_user(name: "Mio", city: "東京")    # "Mio 20 {:city=>\"東京\"}"
```

| 書き方 | 意味 | Python で言うと |
|---|---|---|
| `name:` | 必須のキーワード引数 | `def f(*, name):` |
| `age: 20` | 省略できるキーワード引数 | `age=20` |
| `**opts` | 残りのキーワード引数を全部ハッシュで | `**kwargs` |
| `create_user(name: "Mio")` | 呼ぶとき | `create_user(name="Mio")` |

Rails のメソッド（`validates :title, presence: true` など。レッスン 5）は、このキーワード引数とシンボルでできています。

## AI のコードではこう出てくる

| 見かけたら | チェック |
|---|---|
| `JSON.parse(body)[:name]` | ⚠️ 文字列のキーなので nil。`["name"]` か `symbolize_names: true` |
| `h[:key]` で必ずあるはずのもの | 無いと nil のまま進む。`fetch` だと早く気づける |
| `params[:user][:email]` | Rails のパラメータ。user が無いと nil に `[:email]` で NoMethodError |
| `params.dig(:user, :email)` | 途中が無くても nil |
| `render json: { status: "ok" }` | Rails で JSON を返す（シンボルのキーは JSON では文字列になる） |
| `options = { force: true }` | シンボルをオプションの名前に使う定番 |

```quiz
? `user = { name: "Ryo" }` のとき、`user["name"]` の結果は？
- "Ryo"
+ nil（キーはシンボル :name で、文字列 "name" とは別だから）
- エラー
> `name: "Ryo"` はシンボルのキーです。文字列のキーで読むと見つからず、エラーにならずに nil が返ります。

? `data = JSON.parse('{"id": 1}')` の後、id を読む正しい書き方は？
+ `data["id"]`
- `data[:id]`
- `data.id`
> JSON.parse は初期設定で文字列のキーのハッシュを返します。シンボルで読みたいなら `symbolize_names: true` を付けます。

? 必ずあるはずのキーを読むとき、`h[:email]` より `h.fetch(:email)` がよい理由は？
- 速いから
+ 無いときに nil で進まず、KeyError で止まるので、間違いにすぐ気づけるから
- 自動でキーを作ってくれるから
> `[]` は無いキーで nil を返すので、問題が後で別の場所に現れます。fetch なら、その場で分かります。
```
