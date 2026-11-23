---
title: 構造体・enum・match ― 型で状態を表す
level: 2
minutes: 20
concepts: [classes, types, conditionals]
summary: struct と impl（&self・&mut self）、データを持てる enum、すべての場合を書かないとコンパイルできない match、null の代わりの Option と unwrap の危険。
---
## このレッスンのゴール

- `struct` と `impl` のメソッド（`&self`・`&mut self`）を読める
- データを持てる `enum` と、`match` での分け方を読める
- `Option<T>`・`Some`・`None`・`unwrap` の意味と危険が分かる

## 構造体と impl

```rust
#[derive(Debug)]
struct Product {
    name: String,
    price: u32,
}

impl Product {
    fn new(name: &str, price: u32) -> Self {
        Product { name: name.to_string(), price }
    }
    fn with_tax(&self) -> u32 {
        self.price * 110 / 100
    }
    fn discount(&mut self, yen: u32) {
        self.price -= yen;
    }
}

let mut apple = Product::new("りんご", 120);
println!("{} {}", apple.name, apple.with_tax());   // りんご 132
apple.discount(20);
println!("{:?}", apple);                            // Product { name: "りんご", price: 100 }
```

| 部分 | 意味 | Python で言うと |
|---|---|---|
| `struct Product { ... }` | データの形 | `@dataclass class Product:` |
| `impl Product { ... }` | Product のメソッドをまとめて書く場所 | クラスの中の `def` |
| `fn new(...) -> Self` | 作るための関数（`Self` は Product のこと）。`new` という名前は習慣 | `__init__` |
| `Product::new(...)` | `::` で呼ぶ（self を取らない関数） | `Product(...)` |
| `&self` | 自分を **見るだけ** のメソッド | `def with_tax(self):` |
| `&mut self` | 自分を **書き換える** メソッド | `def discount(self, yen):` |
| `#[derive(Debug)]` | `{:?}` で表示できるようにする（自動で作る） | `__repr__` を自動で |

`&self` と `&mut self` は、レッスン 2 の借用そのものです。Go の「値のレシーバーか、ポインタのレシーバーか」（Go コースのレッスン 3）と似た区別を、**書き換えるかどうか** で書き分けます。`discount` を呼ぶには、`apple` に `mut` が必要です。

`Product { name: ..., price }` の `price` だけの書き方は、`price: price` の省略です。

## enum：どれか 1 つの状態

```rust
#[derive(Debug)]
enum Status {
    Paid,
    Shipped { tracking: String },
    Cancelled(String),
}
```

注文の状態は「支払い済み」「発送済み」「キャンセル」の **どれか 1 つ** です。Rust の enum は、**それぞれの状態がデータを持てる** のが強みです。

| 状態 | 持っているデータ |
|---|---|
| `Paid` | 無し |
| `Shipped { tracking }` | 追跡番号 |
| `Cancelled(String)` | 理由 |

Python で表すと、状態ごとにクラスを作る感じです。データベースなら `status` の列と、状態によって NULL だったりそうでなかったりする列が並ぶところを、**「発送済みなら必ず追跡番号がある」** と型で決められます。

## match：すべての場合を分ける

```rust
fn describe(s: &Status) -> String {
    match s {
        Status::Paid => "支払い済み".to_string(),
        Status::Shipped { tracking } => format!("発送済み（追跡番号 {tracking}）"),
        Status::Cancelled(reason) => format!("キャンセル：{reason}"),
    }
}
```

```text
支払い済み
発送済み（追跡番号 AB123）
キャンセル：在庫切れ
```

`match` は、値の形で分けて、**中のデータを取り出しながら** 処理します（`tracking`・`reason`）。Python 3.10 の `match` 文とほぼ同じ考え方です。

### 書き忘れるとコンパイルできない

```rust
enum Status { Paid, Shipped, Cancelled }
fn label(s: Status) -> &'static str {
    match s {
        Status::Paid => "支払い済み",
        Status::Shipped => "発送済み",
    }
}
```

```text
error[E0004]: non-exhaustive patterns: `Status::Cancelled` not covered
 --> r3b.rs:3:11
  |
3 |     match s {
  |           ^ pattern `Status::Cancelled` not covered
...
help: ensure that all possible cases are being handled by adding a match arm with a wildcard pattern or an explicit pattern as shown
  |
5 ~         Status::Shipped => "発送済み",
6 ~         Status::Cancelled => todo!(),
```

**`Cancelled` の場合を書き忘れたので、コンパイルできません**。後から新しい状態（`Returned` など）を足したときも、**処理を書き忘れた場所を全部コンパイラが教えてくれます**。Python の `if / elif` では、書き忘れても気づけません。

`_ =>` と書けば「それ以外全部」になります（ただし、新しい状態の追加に気づけなくなる）。

```rust
let size = match n { 0 => "ゼロ", 1..=9 => "1 桁", _ => "それ以上" };   // n = 7 → 1 桁
```

`match` は **値を返せる** ので、このように変数に入れられます。`1..=9` は 1 以上 9 以下です。

## Option：null の代わり

Rust には **`null`（None）が普通の値として存在しません**。「無いかもしれない」値は、`Option` という enum で表します。

```rust
enum Option<T> {    // 標準ライブラリにある（書かなくてよい）
    Some(T),        // 値がある
    None,           // 無い
}

fn find(name: &str) -> Option<u32> {
    match name {
        "りんご" => Some(120),
        _ => None,
    }
}
```

`Option<u32>` は「u32 があるかもしれないし、無いかもしれない」という型です。

```rust
let p: u32 = find("りんご");
```

```text
error[E0308]: mismatched types
3 |     let p: u32 = find("りんご");
  |            ---   ^^^^^^^^^^^^^^ expected `u32`, found `Option<u32>`
```

**`Option<u32>` は `u32` ではない** ので、そのままでは数として使えません。「無いとき」の処理を書かないと、先に進めない仕組みです。Python で `None` のまま計算して `TypeError` になる、というバグがコンパイルの時点で防がれます。

### 取り出し方

```rust
match find("ぶどう") {
    Some(p) => println!("{p} 円"),
    None => println!("見つかりません"),       // 見つかりません
}

if let Some(p) = find("りんご") {
    println!("if let: {p} 円");               // if let: 120 円
}

println!("{}", find("ぶどう").unwrap_or(0));  // 0
```

| 書き方 | 意味 |
|---|---|
| `match` | Some と None を両方書く |
| `if let Some(p) = ...` | Some のときだけ処理する |
| `.unwrap_or(0)` | None なら 0（Python の `x if x is not None else 0`） |
| `.unwrap()` | 中身を取り出す。**None なら panic（停止）** |
| `.expect("理由")` | unwrap と同じだが、止まるときにメッセージを出す |

### ⚠️ unwrap

```rust
let p = find("ぶどう").unwrap();
```

```text
thread 'main' panicked at r3d.rs:3:28:
called `Option::unwrap()` on a `None` value
```

`unwrap()` は「**絶対にある** と分かっているから、無い場合は考えない」という書き方で、無ければプログラムが止まります。試し書きや、本当にありえないことが分かっている場所以外では、`match`・`if let`・`unwrap_or`・`?`（次のレッスン）を使います。

## AI のコードではこう出てくる

| 見かけたら | チェック |
|---|---|
| `.unwrap()` がたくさん | ⚠️ 失敗すると止まる。特に入力・ファイル・ネットワークの値に使っていないか |
| `.expect("config must exist")` | 止まる理由が書いてある unwrap。起動時の設定などには OK |
| `match ... { _ => {} }` | 「それ以外は何もしない」。新しい状態の追加に気づけなくなる |
| `#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]` | よく使う機能を自動で付ける（表示・複製・比較・JSON の読み書き） |
| `Option<&User>` | 「ユーザーへの借用があるかもしれない」 |
| `if let Some(x) = map.get(&key)` | マップにあれば（Go の `v, ok := m[key]`） |

```quiz
? `impl Product { fn discount(&mut self, yen: u32) { ... } }` の `&mut self` の意味は？
+ このメソッドは自分（Product）の中身を書き換える
- このメソッドは Product を新しく作る
- このメソッドは Product を見るだけ
> `&self` は見るだけ、`&mut self` は書き換える、です。呼ぶ側の変数にも mut が必要です。

? enum の `match` で、場合を 1 つ書き忘れたらどうなる？
- その場合は何もしない
- 実行したときにエラー
+ コンパイルエラーになり、書き忘れた場合を教えてくれる
> Rust の match はすべての場合を書く必要があります。状態を足したときも、処理を忘れた場所が全部見つかります。

? `find("ぶどう").unwrap()` で、find が None を返したら？
- 0 が返る
+ panic してプログラムが止まる
- None がそのまま返る
> unwrap は None に対して呼ぶと止まります。`unwrap_or(0)` や `match` で None の場合を処理します。
```
