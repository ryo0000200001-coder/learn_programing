---
title: let と mut ― Rust の第一歩
level: 1
minutes: 15
concepts: [variables, types, basics, tooling]
summary: fn main と println!、変数は最初から変えられない（mut を付けると変えられる）、型と as による変換、シャドーイング。cargo の使い方と、Rust のコンパイラのエラーメッセージの読み方。
---
## このレッスンのゴール

- `fn main()`・`println!`・`format!` を読める
- `let` と `let mut` の違いを説明できる
- Rust のコンパイラのエラーメッセージ（`error[E....]` と `help:`）の読み方が分かる

## Rust とは

**Rust**（ラスト）は、**C や C++ と同じくらい速く、それでいてメモリの使い方の間違いをコンパイラが防いでくれる** 言語です。ブラウザの部品、OS の一部、コマンドラインのツール（`ripgrep`・Python の `uv` や `ruff` なども Rust 製）、Cloudflare Workers の内部などで使われています。

速さと安全さのために、**所有権**（レッスン 2）という独特の考え方があり、最初はコンパイラによく怒られます。でも、その **エラーメッセージがとても親切** なのも Rust の特徴です。

## 最初のプログラム

```rust
fn greet(name: &str) -> String {
    format!("こんにちは、{name} さん")
}

fn main() {
    let price = 120;
    let mut count = 1;
    count += 2;
    let total = price * count;
    println!("{}", greet("Ryo"));
    println!("合計 {total} 円（{count} 個）");
}
```

```text
こんにちは、Ryo さん
合計 360 円（3 個）
```

（このコースの出力とエラーは、すべて Rust 1.97 で実際にコンパイル・実行したものです）

| Rust | 意味 | Python で言うと |
|---|---|---|
| `fn main()` | プログラムの入口 | `if __name__ == "__main__":` |
| `fn greet(name: &str) -> String` | 関数。`&str` は文字列を借りる（レッスン 2）、`String` を返す | `def greet(name: str) -> str:` |
| `format!("...{name}...")` | 文字列を作る | `f"...{name}..."` |
| `println!("{}", x)` | 表示して改行 | `print(x)` |
| 最後の行に `;` が無い | **それが関数の戻り値** になる（`return` を省略できる） | `return ...` |

`println!` や `format!` の **`!`** は、関数ではなく **マクロ**（コンパイルするときに別のコードに展開されるもの）という印です。読むときは「特別な関数」と思って大丈夫です。

## let と mut：変数は最初は変えられない

```rust
fn main() {
    let count = 1;
    count += 2;
    println!("{count}");
}
```

```text
error[E0384]: cannot assign twice to immutable variable `count`
 --> r1b.rs:3:5
  |
2 |     let count = 1;
  |         ----- first assignment to `count`
3 |     count += 2;
  |     ^^^^^^^^^^ cannot assign twice to immutable variable
  |
help: consider making this binding mutable
  |
2 |     let mut count = 1;
  |         +++
```

Rust の変数は、**最初から変えられない（イミュータブル）** のが決まりです。変えたい変数には **`mut`**（mutable：変えられる）を付けます。

### エラーメッセージの読み方

| 部分 | 意味 |
|---|---|
| `error[E0384]` | エラーの番号。`rustc --explain E0384` でくわしい説明が出る |
| `cannot assign twice to immutable variable` | 変えられない変数に、2 回入れようとした |
| `--> r1b.rs:3:5` | ファイル名・行・列 |
| `-----` と `^^^^` | 関係する場所に線を引いて、それぞれ説明している |
| `help:` | **直し方の提案**。`+++` の部分を足せば直る |

**`help:` を読めば、多くの場合そのまま直せます**。AI が書いた Rust のコードがコンパイルできないときも、まずエラーメッセージの `help:` を見ましょう。

Python では変数は何度でも入れ直せましたが、Rust は「変わる変数」に印を付けることで、**どこで値が変わるのかを、コードを読む人にも分かるように** しています。

## 型

```rust
let price = 120;                    // i32（整数）と推論される
let rate: f64 = 0.1;                // 型を書くなら 名前: 型
let total = 360;
let with_tax = total as f64 * (1.0 + rate);
println!("{with_tax}");             // 396.00000000000006
```

| 型 | 中身 | Python で言うと |
|---|---|---|
| `i32` / `i64` | 符号付き整数（32・64 ビット） | `int` |
| `u32` / `u64` / `usize` | **0 以上** の整数（`usize` は長さや番号に使う） | `int` |
| `f64` | 小数 | `float` |
| `bool` | `true` / `false` | `bool` |
| `char` | 1 文字 | — |
| `&str` / `String` | 文字列（借りたもの／持っているもの。レッスン 2） | `str` |
| `Vec<T>` | 伸び縮みする配列 | `list` |

Go と同じく、**整数と小数を混ぜて計算できない** ので、`as f64` で変換しています。そして、`396.00000000000006` はコンピュータの基礎コースの「小数の誤差」です。

### シャドーイング

```rust
let x = 5;
let x = x * 2;       // 新しい x を作り直す
println!("shadow {x}");   // shadow 10
```

`let` をもう一度書くと、**同じ名前の新しい変数** を作れます（シャドーイング）。`mut` とは違い、型を変えることもできます（`let input = input.trim();` のように）。

## 表示の書き方

```rust
let fruits = vec!["りんご", "バナナ"];
println!("{:?} {}", fruits, fruits.len());   // ["りんご", "バナナ"] 2
```

| 書き方 | 意味 |
|---|---|
| `{}` | 人向けの表示（Display） |
| `{:?}` | 開発者向けの表示（Debug）。リストや構造体の中身を見るとき |
| `{name}` | 変数をその場に |
| `{:.2}` | 小数点以下 2 桁 |

`{:?}` は Python の `repr()` に近いです。

## cargo：Rust の道具箱

```bash
cargo new myapp      # プロジェクトを作る（Cargo.toml と src/main.rs ができる）
cargo run            # コンパイルして実行
cargo build --release   # 速い実行ファイルを作る（--release で最適化）
cargo test           # テスト
cargo add serde      # ライブラリ（クレート）を追加
cargo clippy         # よくない書き方を指摘してくれる
```

| ファイル | 意味 | 似ているもの |
|---|---|---|
| `Cargo.toml` | プロジェクトの名前と使うライブラリ | `pyproject.toml` / `package.json` |
| `Cargo.lock` | 実際に使うバージョン（ロックファイル） | `uv.lock` / `package-lock.json` |
| `src/main.rs` | 実行するプログラムの入口 | |
| `src/lib.rs` | ライブラリの入口 | |

Rust のライブラリは **クレート**（crate）と呼ばれ、crates.io で公開されています。

## AI のコードではこう出てくる

| 見かけたら | 読み方 |
|---|---|
| `let mut v = Vec::new();` | 後で中身を変える空の Vec |
| `let x: u32 = s.parse().unwrap();` | 文字列を数に変換（unwrap はレッスン 3・4） |
| `fn main() -> Result<(), Box<dyn Error>>` | main もエラーを返せる形（レッスン 4） |
| `#[derive(Debug)]` | `{:?}` で表示できるようにする印（レッスン 3） |
| `n as f64` / `len as u32` | 型の変換。大きい型から小さい型への `as` は、はみ出した分が切られるので注意 |
| `cargo build --release` | 本番用の速い実行ファイル。`target/release/` にできる |

```quiz
? Rust で `let count = 1;` の後に `count += 2;` と書くと？
- count が 3 になる
+ コンパイルエラー（変えられない変数に入れ直そうとした）
- 警告が出るが count は 3 になる
> Rust の変数は最初は変えられません。変えたいなら `let mut count = 1;` と mut を付けます。エラーの help: もそう提案していました。

? `println!` の `!` は何を表す？
+ 関数ではなく、マクロであること
- 強調して表示すること
- エラーが起きたら止まること
> `!` が付くのはマクロです。println!・format!・vec! などがよく出てきます。

? Rust のコンパイルエラーが出たとき、まず見るとよいところは？
- エラーの番号だけ
+ どの行かを示す `-->` と、直し方を提案する `help:`
- 最後の行の `aborting due to ...`
> Rust のエラーは、場所と原因に線を引いて説明し、help: で直し方まで提案してくれます。
```
