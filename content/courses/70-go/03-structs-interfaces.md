---
title: 構造体・メソッド・インターフェース
level: 2
minutes: 18
concepts: [classes, types, generics]
summary: Go にはクラスが無く、データは構造体（struct）、処理はメソッドで書く。値で受け取るメソッドとポインタ（*）で受け取るメソッドの違いを実験で確かめ、「同じメソッドを持てばよい」インターフェースを読む。
---
## このレッスンのゴール

- `type Product struct { ... }` と、そのメソッドを読める
- `func (p Product)` と `func (p *Product)` の違い（コピーか本体か）を説明できる
- インターフェースが「必要なメソッドの一覧」であることが分かる

## 構造体：データのまとまり

```go
type Product struct {
	Name  string
	Price int
	stock int        // 小文字 → このパッケージの中だけ（レッスン 1）
}

apple := Product{Name: "りんご", Price: 120}
fmt.Println(apple.Name)     // りんご
```

Python の `@dataclass`（Python コースのレッスン 12）にそっくりです。

```python
@dataclass
class Product:
    name: str
    price: int
    _stock: int = 0
```

書かなかった項目（`stock`）は、ゼロ値（0）になります。

## メソッド：構造体に処理を付ける

```go
func (p Product) WithTax() int {
	return p.Price * 110 / 100
}

fmt.Println(apple.WithTax())   // 132
```

`func (p Product) WithTax()` の **`(p Product)` の部分** が「この関数は Product のメソッドで、本体を `p` という名前で使う」という意味です（**レシーバー** と呼びます）。Python の `def with_tax(self):` の `self` を、関数名の前に書いている形です。

Go には `class` がありません。**構造体（データ）と、メソッド（処理）を別々に書く** のが Go の流儀です。継承もありません。

## 値で受け取るか、ポインタで受け取るか

ここが Go のメソッドでいちばん大事なところです。値段を下げるメソッドを、2 通り書いて試しました。

```go
func (p *Product) Discount(yen int) {       // * が付いている
	p.Price -= yen
}

func (p Product) DiscountCopy(yen int) {    // * が無い
	p.Price -= yen
}

apple.DiscountCopy(20)
fmt.Println("コピーに値引き:", apple.Price)     // 120   ← 変わっていない！
apple.Discount(20)
fmt.Println("ポインタで値引き:", apple.Price)   // 100   ← 変わった
```

| 書き方 | p に入るもの | 中を変えると |
|---|---|---|
| `func (p Product)` | **コピー** | コピーが変わるだけ。元の apple は変わらない |
| `func (p *Product)` | **ポインタ**（元の apple の場所） | 元の apple が変わる |

`*Product` の `*` は **ポインタ**（データが置いてある場所を指すもの）を表します。C 言語コースでくわしく扱いますが、ここでは **「`*` 付きなら本体を直接さわる」** と覚えれば十分です。

Python では、メソッドの中で `self.price -= 20` とすれば必ず本体が変わりました。Go では **`*` を付け忘れると、変えたつもりが変わっていない** というバグになります。

| 迷ったら | |
|---|---|
| 中身を **変える** メソッド | `*` 付き |
| 構造体が大きい | `*` 付き（コピーが重いので） |
| 読むだけで小さい | どちらでもよい（そろえるのが一般的） |

## 表示を決める：String メソッド

```go
func (p Product) String() string {
	return fmt.Sprintf("%s（%d 円）", p.Name, p.Price)
}

fmt.Println(apple)   // りんご（100 円）
```

`String() string` というメソッドを持たせると、`fmt.Println` での表示がそれになります。Python の `__str__` です。これは次のインターフェースの仕組みで動いています。

## インターフェース：「このメソッドを持っていればよい」

```go
type Shape interface {
	Area() float64
}

type Rect struct{ W, H float64 }
type Circle struct{ R float64 }

func (r Rect) Area() float64   { return r.W * r.H }
func (c Circle) Area() float64 { return 3.14 * c.R * c.R }

shapes := []Shape{Rect{W: 2, H: 3}, Circle{R: 1}}
for _, s := range shapes {
	fmt.Printf("%T %.2f\n", s, s.Area())
}
// main.Rect 6.00
// main.Circle 3.14
```

| 部分 | 意味 |
|---|---|
| `type Shape interface { Area() float64 }` | 「`Area() float64` というメソッドを持つものは、何でも Shape として扱える」 |
| `[]Shape{Rect{...}, Circle{...}}` | 違う型を、同じ Shape として 1 つのスライスに入れられる |
| `s.Area()` | 中身が Rect なら Rect の、Circle なら Circle の Area が呼ばれる |

⚠️ Rect にも Circle にも **「Shape を実装します」とはどこにも書いていません**。必要なメソッドを持っていれば、**自動で** そのインターフェースとして使えます。

Python で言うと、「`area()` を持っていれば何でもよい」という **ダックタイピング** を、型のチェック付きにしたものです（Python の `typing.Protocol` がほぼ同じ考え方）。TypeScript の interface（TypeScript コースのレッスン 3）にも近いです。

### よく出てくる標準のインターフェース

| インターフェース | 持つべきメソッド | 意味 |
|---|---|---|
| `fmt.Stringer` | `String() string` | 表示の仕方（上の例） |
| `error` | `Error() string` | エラー（次のレッスン） |
| `io.Reader` / `io.Writer` | `Read(...)` / `Write(...)` | 読める・書けるもの（ファイル・ネットワーク・文字列…） |
| `http.Handler` | `ServeHTTP(...)` | Web のリクエストを処理するもの（レッスン 6） |

## nil

```go
var nothing *Product
fmt.Println(nothing == nil)   // true
```

ポインタ・スライス・マップ・インターフェースは、何も指していないとき **`nil`**（Python の `None`）になります。⚠️ nil のポインタのフィールドを読む（`nothing.Name`）と、**panic**（プログラムが止まる）します。Go のプログラムでいちばんよく見る停止の原因の 1 つです。

## AI のコードではこう出てくる

| 見かけたら | 読み方・チェック |
|---|---|
| `func (s *Service) Create(...)` | Service のメソッド。中を変えるので `*` |
| 中身を変えるメソッドなのに `func (s Service)` | ⚠️ コピーを変えているだけで、元が変わらない |
| `type Repository interface { Find(id int) (*User, error) }` | 「Find を持っていれば何でもよい」。テストで偽物（モック）に差し替えるためによく使う |
| `return &Product{...}` | 作った構造体のポインタを返す（`&` は「場所を取る」） |
| `` `json:"name"` `` | 構造体のタグ。JSON にするときの名前（レッスン 6） |
| `if p == nil { return ... }` | nil チェック。panic を防ぐ |

```quiz
? `func (p Product) SetPrice(n int) { p.Price = n }` を呼んでも、元の値段が変わらない理由は？
- Price が小文字ではないから
+ レシーバーが `*` 無しなので、p はコピーで、元の Product は変わらないから
- メソッドは値を変えられないから
> 中身を変えるメソッドは `func (p *Product)` とポインタで受け取ります。

? Go の Rect 型を `Shape` インターフェースとして使えるようにするには？
- `type Rect struct implements Shape` と書く
- Shape を継承する
+ Shape が必要とするメソッド（`Area() float64`）を Rect に定義する
> Go のインターフェースは、必要なメソッドを持っていれば自動で当てはまります。「実装します」という宣言はいりません。

? `fmt.Println(apple)` で「りんご（100 円）」と表示されたのは、なぜ？
- fmt.Println がすべての構造体を日本語で表示するから
+ Product に `String() string` メソッドがあり、fmt.Stringer インターフェースとして表示に使われたから
- Name と Price が大文字だから
> String メソッドを持つ型は、表示のときにそれが使われます。Python の `__str__` に当たります。
```
