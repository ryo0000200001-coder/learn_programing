---
title: 静的型と := ・スライスとマップ
level: 1
minutes: 18
concepts: [variables, types, collections, loops]
summary: var と := での変数の作り方、ゼロ値、int と float64 を混ぜるとエラーになる静的型、複数の戻り値。Python のリストと辞書にあたるスライスとマップ、for range、「無いキーは 0 になる」ので ok で確かめる書き方。
---
## このレッスンのゴール

- `var x int = 3` と `x := 3` を読み分けられる
- 静的型・ゼロ値・型変換の意味が分かる
- スライス・マップ・`for range`・`v, ok := m[key]` を読める

## 変数の作り方

```go
var count int = 3      // 型を書いて作る
name := "Ryo"          // := は「作って入れる」。型は値から決まる（string）
price := 1980          // int
rate := 0.1            // float64（小数）
```

| 書き方 | 意味 |
|---|---|
| `var 名前 型 = 値` | 型を書いて作る |
| `名前 := 値` | **作って入れる**。型は自動で決まる（関数の中だけで使える） |
| `名前 = 値` | すでにある変数に入れ直す（`:` が無い） |
| `const tax = 0.1` | 定数（変えられない） |

`:=` と `=` の違いがポイントです。`:=` は **新しく作る**、`=` は **入れ直す**。Python には区別がありませんが、Go では間違えるとエラーになります。

### ゼロ値：入れなくても空ではない

```go
var zeroInt int
var zeroStr string
var zeroBool bool
fmt.Printf("[%d] [%q] [%t]\n", zeroInt, zeroStr, zeroBool)
// [0] [""] [false]
```

値を入れずに作った変数は、**型ごとの「ゼロ値」** になります（数は 0、文字列は空文字、真偽は false、ポインタやマップは `nil`）。Python の `None` のような「何も入っていない」状態は、普通の変数にはありません。

## 静的型：型は変わらない

```go
price := 1980
rate := 0.1
_ = price * rate
// invalid operation: price * rate (mismatched types int and float64)

var s string = 3
// cannot use 3 (untyped int constant) as string value in variable declaration
```

Go は **静的型** の言語で、変数の型は作ったときに決まり、変わりません。**int（整数）と float64（小数）を、そのまま混ぜて計算することもできません**。Python なら `1980 * 0.1` は普通に動きますが、Go は型を明示的に変換します。

```go
total := float64(price) * (1 + rate)   // int を float64 に変換してから
```

| 型 | 中身 | Python で言うと |
|---|---|---|
| `int` | 整数 | `int`（ただし大きさに上限がある） |
| `float64` | 小数 | `float` |
| `string` | 文字列 | `str` |
| `bool` | `true` / `false`（小文字） | `True` / `False` |
| `[]string` | 文字列のスライス | `list[str]` |
| `map[string]int` | 文字列 → 整数のマップ | `dict[str, int]` |

`fmt.Printf("%T", x)` で型を表示でき、上の変数は `int float64 []string map[string]int` と出ました。

## 複数の値を返す

```go
func divide(a, b int) (int, int) {
	return a / b, a % b
}

q, r := divide(7, 2)
fmt.Println(q, r)   // 3 1
```

Go の関数は **複数の値を返せます**。Python のタプルを返すのと似ています。そして、`7 / 2` が **3**（整数どうしの割り算は切り捨て。SQL コースのレッスン 8 と同じ）なのにも注意です。
この「複数の戻り値」は、レッスン 4 の **エラー処理** で必ず使います。

## スライス：伸び縮みする配列

```go
fruits := []string{"りんご", "バナナ"}
fruits = append(fruits, "みかん")
fmt.Println(fruits, len(fruits), fruits[0], fruits[1:])
// [りんご バナナ みかん] 3 りんご [バナナ みかん]
```

| Go | Python |
|---|---|
| `[]string{"a", "b"}` | `["a", "b"]` |
| `fruits = append(fruits, "c")` | `fruits.append("c")` |
| `len(fruits)` | `len(fruits)` |
| `fruits[1:]` | `fruits[1:]` |

⚠️ `append` は **新しいスライスを返す** ので、`fruits = append(fruits, ...)` と **受け取り直す** のが決まりです。`append(fruits, "c")` だけ書くと、エラー（結果を使っていない）になります。

`[3]string` のように数を書くと、大きさが決まった **配列** になります。普段使うのはスライスです。

## マップ：辞書

```go
prices := map[string]int{"りんご": 120, "バナナ": 90}
prices["みかん"] = 80

p, ok := prices["ぶどう"]
fmt.Println(prices["りんご"], p, ok)
// 120 0 false
```

**無いキーを読むと、エラーにならずにゼロ値（0）が返ります**。Python の `prices["ぶどう"]` は `KeyError` でしたね。
「0 円の商品」なのか「無い商品」なのかを区別するには、**2 つ目の値 `ok`**（あれば true）で確かめます。

```go
if p, ok := prices[name]; ok {
	fmt.Println(name, "は", p, "円")
} else {
	fmt.Println(name, "はありません")
}
```

Python の `if name in prices:` や `prices.get(name)` に当たります。

## for range：繰り返し

```go
for i, f := range fruits {
	fmt.Println(i, f)          // 0 りんご / 1 バナナ / 2 みかん
}

for k, v := range prices {     // マップのキーと値
	fmt.Println(k, v)
}

for _, f := range fruits { }   // 番号を使わないなら _
for i := 0; i < 3; i++ { }     // 数で繰り返す
```

| Go | Python |
|---|---|
| `for i, f := range fruits` | `for i, f in enumerate(fruits):` |
| `for k, v := range m` | `for k, v in m.items():` |
| `for i := 0; i < 3; i++` | `for i in range(3):` |
| `for 条件 { }` | `while 条件:`（Go に while は無い） |

⚠️ マップを `range` で回す順番は **毎回変わります**（わざとランダムにしてある）。順番が大事なら、キーを取り出して並べ替えます。

## if：条件の前に 1 文書ける

```go
if n := len(fruits); n > 2 {
	fmt.Println("3 つ以上", n)
}
```

`if 準備の文; 条件 {` と書けて、`n` は if の中だけで使えます。Go のコードでとてもよく見る形です。条件にかっこは付けません。

## AI のコードではこう出てくる

| 見かけたら | 読み方・チェック |
|---|---|
| `x := ...` と `x = ...` | 作る／入れ直す。`:=` を 2 回書くと「新しい変数が無い」エラー |
| `float64(n)` / `int(f)` / `strconv.Itoa(n)` | 型の変換。`int(2.9)` は 2（切り捨て） |
| `v := m[key]` だけで使っている | ⚠️ 無いキーでもゼロ値が返る。`v, ok := m[key]` で確かめているか |
| `items = append(items, x)` | スライスに追加（受け取り直す） |
| `make([]int, 0, 10)` / `make(map[string]int)` | 空のスライス・マップを作る（10 は最初に用意する大きさ） |
| `var m map[string]int` のあと `m["a"] = 1` | ⚠️ nil のマップに書くと panic（停止）。`make` で作る |

```quiz
? Go で `x := 1` の後、同じ関数の中で `x := 2` と書くと？
- x が 2 になる
+ エラーになる（:= は新しく作る書き方で、x はもうあるから）
- 別の変数 x ができる
> 入れ直すときは `x = 2` と書きます。`:=` は「作って入れる」です。

? `prices := map[string]int{"りんご": 120}` のとき、`prices["ぶどう"]` の値は？
- エラー（KeyError のようなもの）
+ 0（int のゼロ値）
- nil
> 無いキーはゼロ値になります。あるかどうかは `p, ok := prices["ぶどう"]` の ok で確かめます。

? `price := 1980; rate := 0.1; total := price * rate` がエラーになる理由は？
+ int と float64 を、変換せずに混ぜて計算しているから
- 1980 が大きすぎるから
- := で計算はできないから
> Go は型を自動で変換しません。`float64(price) * rate` のように変換してから計算します。
```
