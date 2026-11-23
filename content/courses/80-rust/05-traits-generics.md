---
title: トレイトとジェネリクス ― 共通の振る舞い
level: 3
minutes: 18
concepts: [generics, classes, types]
summary: 「このメソッドを持つ」という約束のトレイト、impl Trait for 型、デフォルトのメソッド、Display で表示を決める、&impl Trait と <T: Trait> で「その約束を守る型なら何でも」受け取る、dyn と Box、derive。
---
## このレッスンのゴール

- `trait` と `impl トレイト for 型` を読める
- `&impl Shape`・`<T: PartialOrd>`・`Box<dyn Shape>` が何を意味するか分かる
- `#[derive(...)]` で何が自動で用意されるか分かる

## トレイト：「このメソッドを持つ」という約束

```rust
trait Shape {
    fn area(&self) -> f64;
    fn describe(&self) -> String {
        format!("面積 {:.2}", self.area())
    }
}

struct Rect { w: f64, h: f64 }
struct Circle { r: f64 }

impl Shape for Rect {
    fn area(&self) -> f64 { self.w * self.h }
}
impl Shape for Circle {
    fn area(&self) -> f64 { 3.14 * self.r * self.r }
    fn describe(&self) -> String { format!("円（半径 {}）", self.r) }
}
```

| 部分 | 意味 |
|---|---|
| `trait Shape { fn area(&self) -> f64; }` | 「Shape なら `area` を持っている」という約束。中身は書かない（`;`） |
| `fn describe(&self) -> String { ... }` | 中身付きで書くと **デフォルト** の実装。書き直さなければこれが使われる |
| `impl Shape for Rect { ... }` | 「Rect は Shape の約束を守ります」と宣言して、中身を書く |

Go のインターフェース（Go コースのレッスン 3）と同じ考え方ですが、Rust では **`impl Shape for Rect` と明示的に書く** のが違いです。Python なら `abc.ABC` の抽象クラスや `typing.Protocol` に近いものです。

## トレイトを持つものなら何でも受け取る

```rust
fn print_area(s: &impl Shape) {
    println!("{}", s.describe());
}

print_area(&Rect { w: 2.0, h: 3.0 });   // 面積 6.00
print_area(&Circle { r: 1.0 });         // 円（半径 1）
```

`&impl Shape` は「**Shape の約束を守る型なら何でも**（を借りる）」という引数です。Rect は describe を書いていないのでデフォルトの「面積 6.00」、Circle は自分で書いた「円（半径 1）」になりました。

### 違う型をまとめて入れる：Box<dyn Shape>

```rust
let shapes: Vec<Box<dyn Shape>> = vec![
    Box::new(Rect { w: 1.0, h: 1.0 }),
    Box::new(Circle { r: 2.0 }),
];
let sum: f64 = shapes.iter().map(|s| s.area()).sum();
println!("合計 {sum:.2}");   // 合計 13.56
```

| 書き方 | 意味 |
|---|---|
| `dyn Shape` | 「中身の型は実行するまで分からないが、Shape ではある」 |
| `Box<...>` | データを別の場所（ヒープ）に置いて、その場所を持つ入れ物。大きさの違う Rect と Circle を、同じ大きさの「箱」として Vec に並べられる |

Python の `shapes = [Rect(...), Circle(...)]` は何も考えずに書けますが、Rust は **大きさが決まったもの** しか Vec に並べられないので、`Box<dyn ...>` で包みます。AI のコードの `Box<dyn std::error::Error>`（レッスン 4）も、「どんなエラーでもよい箱」という同じ書き方です。

## 標準のトレイト

```rust
use std::fmt;

struct Product { name: String, price: u32 }

impl fmt::Display for Product {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "{}（{} 円）", self.name, self.price)
    }
}

println!("{}", Product { name: "りんご".into(), price: 120 });   // りんご（120 円）
```

`Display` トレイトを実装すると、`{}` での表示を決められます（Python の `__str__`、Go の `String()`）。

| トレイト | できるようになること | Python で言うと |
|---|---|---|
| `Display` | `{}` で表示 | `__str__` |
| `Debug` | `{:?}` で表示 | `__repr__` |
| `Clone` | `.clone()` で複製 | `copy.deepcopy` |
| `PartialEq` | `==` で比べる | `__eq__` |
| `PartialOrd` | `<` `>` で比べる | `__lt__` など |
| `Iterator` | `for` で回せる・`.map()` などが使える（レッスン 6） | `__iter__` / `__next__` |
| `From` / `Into` | 型を変換する（`"x".into()` で String に） | — |

### derive：よくあるものは自動で

```rust
#[derive(Debug, Clone, PartialEq)]
struct Point { x: i32, y: i32 }

let p = Point { x: 1, y: 2 };
let q = p.clone();
println!("{:?} {}", q, p == q);   // Point { x: 1, y: 2 } true
```

`#[derive(...)]` に書いたトレイトは、**中身を自動で書いてくれます**。Python の `@dataclass` が `__init__`・`__repr__`・`__eq__` を自動で作るのと同じ感覚です。JSON を扱う `serde` クレートの `Serialize`・`Deserialize` も、ここに書いて使います。

## ジェネリクス：型を後から決める

```rust
fn largest<T: PartialOrd + Copy>(items: &[T]) -> T {
    let mut max = items[0];
    for &x in items {
        if x > max { max = x; }
    }
    max
}

println!("{} {}", largest(&[3, 9, 2]), largest(&[1.5, 0.2]));   // 9 1.5
```

| 部分 | 意味 |
|---|---|
| `<T>` | 型を **T という名前で後から決める**（ジェネリクス）。整数の配列なら T は整数、小数なら小数 |
| `T: PartialOrd + Copy` | ただし T は「`>` で比べられて（PartialOrd）、コピーできる（Copy）」型に限る（**トレイト境界**） |
| `&[T]` | T のスライス（配列の一部を借りたもの） |

TypeScript のジェネリクス（TypeScript コースのレッスン 6）、Python の `def largest[T](items: list[T]) -> T:` と同じ考え方です。Rust では **「T に何ができるか」をトレイトで書かないと、`>` すら使えない** のが特徴です。`T: PartialOrd` を消して試すと、`` error[E0369]: binary operation `>` cannot be applied to type `T` ``（T に `>` は使えない）というエラーになりました。

長くなるときは、`where` で後ろに書きます。

```rust
fn summarize<T>(items: &[T]) -> String
where
    T: Display + Clone,
{ ... }
```

## AI のコードではこう出てくる

| 見かけたら | 読み方 |
|---|---|
| `impl Display for MyError` | エラーの表示の仕方を決めている |
| `fn handle(req: impl Into<String>)` | String に変換できるものなら何でも（`&str` も `String` も渡せる） |
| `Box<dyn Fn(i32) -> i32>` | 「i32 を受け取って i32 を返す関数」を入れた箱（コールバック） |
| `#[derive(Serialize, Deserialize)]` | serde で JSON などに変換できるようにする |
| `impl<T: Display> Summary for Vec<T>` | 「Display できる T の Vec なら、Summary を持つ」 |
| `async fn` / `#[tokio::main]` | 非同期の関数。tokio という実行のしくみの上で動く（Python の asyncio に当たる） |

```quiz
? `impl Shape for Circle { ... }` の意味は？
+ Circle が Shape トレイトの約束（必要なメソッド）を守ることを宣言し、その中身を書いている
- Circle を Shape から継承している
- Shape という新しい型を作っている
> Rust ではトレイトの実装を `impl トレイト for 型` と明示的に書きます。Go と違い、自動では当てはまりません。

? `fn print_area(s: &impl Shape)` が受け取れるのは？
- Shape という名前の型だけ
+ Shape トレイトを実装した型なら何でも（を借りたもの）
- どんな型でも
> impl Shape は「Shape の約束を守る型なら何でも」です。Rect も Circle も渡せます。

? `fn largest<T: PartialOrd + Copy>(items: &[T]) -> T` の `T: PartialOrd` が必要な理由は？
- T を表示するため
+ 関数の中で `x > max` と比べるので、T が比べられる型だと保証する必要があるから
- T を JSON にするため
> Rust のジェネリクスは、T に何ができるかをトレイトで書かないと、その操作を使えません。
```
