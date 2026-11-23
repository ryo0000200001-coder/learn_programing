---
title: struct と class ― 値と参照の違い
level: 2
minutes: 18
concepts: [classes, memory, types]
summary: struct は代入するとコピー（値型）、class は同じものを指す（参照型）ことを実験で確かめる。struct のプロパティと計算プロパティ、mutating、Swift の配列も値型、データを持てる enum と switch。
---
## このレッスンのゴール

- struct（値型）と class（参照型）の違いを、実験の結果で説明できる
- struct のプロパティ・計算プロパティ・`mutating` を読める
- データを持てる enum と `switch` を読める

## struct と class

同じ形のものを、struct と class で作って比べました。

```swift
struct PointS { var x: Int; var y: Int }
final class PointC {
    var x: Int; var y: Int
    init(x: Int, y: Int) { self.x = x; self.y = y }
}

var s1 = PointS(x: 1, y: 2)
var s2 = s1
s2.x = 99
print("struct: s1.x=\(s1.x) s2.x=\(s2.x)")

let c1 = PointC(x: 1, y: 2)
let c2 = c1
c2.x = 99
print("class:  c1.x=\(c1.x) c2.x=\(c2.x)  同じもの? \(c1 === c2)")
```

```text
struct: s1.x=1 s2.x=99
class:  c1.x=99 c2.x=99  同じもの? true
```

| | struct（**値型**） | class（**参照型**） |
|---|---|---|
| `s2 = s1` | **コピー** される | **同じもの** を指す |
| s2 を変えると | s1 は変わらない | c1 も変わる（同じものだから） |
| `===`（同じものか） | 使えない | 使える |
| 継承 | できない | できる |

class の動きは、Python・Java のオブジェクトと同じです（Java コースの「参照型」）。struct は、Go の構造体（Go コースのレッスン 3 の「値のレシーバーはコピー」）や、C++ の普通のオブジェクトと同じく、**代入でコピー** されます。

**Swift では、ふつうは struct を使い、「同じものを共有したい」ときだけ class を使う** のが推奨です。コピーなので、「別の場所で知らないうちに変えられていた」というバグが起きません。

### 配列も値型

```swift
var arr = [1, 2]
var arr2 = arr
arr2.append(3)
print("配列も値: \(arr) \(arr2)")     // 配列も値: [1, 2] [1, 2, 3]
```

Swift の **配列・辞書・文字列も struct**（値型）です。Python で `arr2 = arr; arr2.append(3)` とすると、**arr も変わってしまいます**（同じリストを指すので）。Swift では、そうなりません。

（毎回コピーすると遅そうですが、Swift は **書き換えるときになって初めてコピーする**（コピーオンライト）ので、ふつうは速いままです）

## struct のプロパティとメソッド

```swift
struct Product: CustomStringConvertible, Equatable {
    let name: String
    private(set) var basePrice: Int
    var stock = 0

    var price: Int { basePrice * 110 / 100 }

    mutating func discount(_ yen: Int) { basePrice -= yen }

    var description: String { "\(name)（\(price) 円）" }
}

var apple = Product(name: "りんご", basePrice: 120)
apple.discount(20)
apple.stock += 1
print(apple, apple.stock, apple == Product(name: "りんご", basePrice: 100, stock: 1))
// りんご（110 円） 1 true
```

| 部分 | 意味 | 他の言語では |
|---|---|---|
| `Product(name: ..., basePrice: ...)` | struct は、**コンストラクタ（init）を自動で作ってくれる** | Kotlin の data class |
| `let name` / `var stock = 0` | 変えられない／変えられるプロパティ | |
| `private(set) var basePrice` | 外からは読めるが、書けるのは中だけ | C# の `{ get; private set; }` |
| `var price: Int { ... }` | 計算プロパティ | C# の `=>`、Python の `@property` |
| `mutating func` | **自分の中身を変えるメソッド**（struct のときだけ必要） | Rust の `&mut self` |
| `: CustomStringConvertible` ＋ `description` | 表示の仕方 | `__str__` |
| `: Equatable` | `==` で比べられるようにする（中身は自動で作られる） | Rust の `derive(PartialEq)` |

### mutating

```swift
struct P { var x = 0; func inc() { x += 1 } }
// error: left side of mutating operator isn't mutable: 'self' is immutable

struct P { var x = 0; mutating func inc() { x += 1 } }
let p = P()
p.inc()
// error: cannot use mutating member on immutable value: 'p' is a 'let' constant
```

struct のメソッドが中身を変えるには `mutating` が必要で、さらに **`let` の変数には mutating のメソッドを呼べません**。Rust の「`&mut self` のメソッドを呼ぶには `let mut` が必要」と、まったく同じ考え方です（Rust コースのレッスン 3）。

## enum：データを持てる状態

```swift
enum Status {
    case paid
    case shipped(tracking: String)
    case cancelled(reason: String)
}

func describe(_ s: Status) -> String {
    switch s {
    case .paid: return "支払い済み"
    case .shipped(let t): return "発送済み（\(t)）"
    case .cancelled(let r): return "キャンセル：\(r)"
    }
}
```

```text
支払い済み
発送済み（AB123）
キャンセル：在庫切れ
```

Rust の enum・Kotlin の sealed class と同じく、**状態ごとに違うデータを持てて**、`switch` で全部の場合を書かないとコンパイルエラーになります（レッスン 1）。`.paid` のように、**型が分かっている場所では型名を省略** して `.` から書けるのが Swift の特徴です。

実は、レッスン 2 の **オプショナルも enum** です（`case none` と `case some(値)`）。

## class を使うとき

```swift
final class Session {
    var token: String
    init(token: String) { self.token = token }
}
```

| class を使う場面 | 例 |
|---|---|
| 1 つのものを、いくつもの場所で共有したい | ログイン中のセッション、データの保存先 |
| 継承が必要 | Apple の古い画面の部品（UIKit の `UIViewController`） |
| 同じものかどうか（`===`）に意味がある | |

`final` は「継承させない」印です（Kotlin の初期設定と同じ）。class では、struct のように init を自動で作ってくれないので、自分で書きます。

## AI のコードではこう出てくる

| 見かけたら | 読み方・チェック |
|---|---|
| `struct User: Codable, Identifiable` | JSON に変換できて（Codable）、id を持つ（SwiftUI の一覧で使う）データ |
| `mutating func` | struct の中身を変えるメソッド |
| `class ViewModel: ObservableObject` | 画面と共有する状態（レッスン 5）。共有するので class |
| `[weak self]` | class を参照するときの「弱い参照」（レッスン 4） |
| struct を関数に渡して中で変えたのに、元が変わらない | 値型なのでコピー。変えたいなら `inout`（C++ の参照に近い）か、戻り値で返す |

```quiz
? `var a = PointS(x: 1, y: 2); var b = a; b.x = 99`（PointS は struct）の後、`a.x` は？
+ 1（struct は代入でコピーされる）
- 99（同じものを指している）
- エラー
> struct は値型で、代入するとコピーされます。class なら同じものを指すので、a.x も 99 になります。

? Swift の struct で、中身を変えるメソッドに必要なキーワードは？
- static
+ mutating
- override
> struct のメソッドは、中身を変えるなら mutating を付けます。let の変数には呼べません（Rust の &mut self と同じ考え方）。

? Python の `b = a; b.append(3)` と、Swift の配列の `var b = a; b.append(3)` の違いは？
- 同じ。どちらも a も変わる
+ Python は a も変わる（同じリスト）が、Swift は a が変わらない（配列は値型でコピーされる）
- Swift はエラーになる
> Swift の配列・辞書・文字列は struct なので、代入するとコピーされます。
```
