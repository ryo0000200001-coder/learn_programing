---
title: Result と ? 演算子 ― 失敗を型で返す
level: 2
minutes: 18
concepts: [errors, types, functions]
summary: 成功（Ok）か失敗（Err）かを表す Result、失敗したらその場で返す ? 演算子、map_err と自分のエラー型、main で ? を使う形。Go の if err != nil や Python の例外との比較。
---
## このレッスンのゴール

- `Result<T, E>`・`Ok`・`Err` の意味を説明できる
- `?` 演算子が何をしているかを、Go の `if err != nil` と比べて説明できる
- `map_err`・自分で作ったエラーの enum・`Box<dyn Error>` を読める

## Result：成功か失敗か

```rust
use std::num::ParseIntError;

fn parse_price(s: &str) -> Result<u32, ParseIntError> {
    let n = s.trim().parse::<u32>()?;
    Ok(n)
}

println!("{:?}", parse_price("120"));    // Ok(120)
println!("{:?}", parse_price("12a"));    // Err(ParseIntError { kind: InvalidDigit })
```

`Result` は、レッスン 3 の `Option` の仲間の enum です。

```rust
enum Result<T, E> {
    Ok(T),     // 成功。値は T 型
    Err(E),    // 失敗。エラーは E 型
}
```

`Result<u32, ParseIntError>` は「**成功なら u32、失敗なら ParseIntError**」という型です。

| 言語 | 失敗の伝え方 |
|---|---|
| Python | 例外を `raise`。`try / except` で受け止める |
| Go | 戻り値の最後に `error`。`if err != nil` で確かめる（Go コースのレッスン 4） |
| Rust | 戻り値を `Result` にする。`match` や `?` で扱う |

Go と同じく **失敗も戻り値** ですが、Rust では「成功の値」と「エラー」が **1 つの Result にまとまっている** ので、エラーを確かめずに成功の値だけ使う、ということが **型の上でできません**（Option と同じ）。

## 取り出し方

```rust
match parse_price("abc") {
    Ok(n) => println!("{n} 円"),
    Err(e) => println!("数ではありません: {e}"),
}
// 数ではありません: invalid digit found in string

let n = parse_price("80").unwrap_or(0);   // 80
let m = parse_price("??").unwrap_or(0);   // 0
```

`unwrap()`・`expect()`・`unwrap_or()` は、Option と同じように使えます（`unwrap()` は Err なら panic）。

## ? 演算子：失敗したら、すぐ返す

```rust
let n = s.trim().parse::<u32>()?;
```

この行の最後の **`?`** が、Rust のエラー処理の主役です。

| parse の結果 | `?` がすること |
|---|---|
| `Ok(120)` | 中の `120` を取り出して、n に入れる |
| `Err(e)` | **その場で関数を終わり、`Err(e)` を呼んだ人に返す** |

Go で書くと、こうです。

```go
n, err := strconv.Atoi(strings.TrimSpace(s))
if err != nil {
	return 0, err
}
```

**Go の `if err != nil { return ..., err }` の 3 行が、Rust では `?` の 1 文字** になります。

### ? を続けて使う

```rust
fn total(inputs: &[&str]) -> Result<u32, ParseIntError> {
    let mut sum = 0;
    for s in inputs {
        sum += parse_price(s)?;
    }
    Ok(sum)
}

println!("{:?}", total(&["120", "90", "200"]));   // Ok(410)
println!("{:?}", total(&["120", "x", "200"]));    // Err(ParseIntError { kind: InvalidDigit })
```

2 つ目は、`"x"` のところで `?` が Err を返したので、`"200"` は足されずに終わっています。Python の例外が「途中で飛び出して、呼んだ人に伝わる」のと同じ動きを、**戻り値で、しかも `?` という目印付きで** 書いています。どこで失敗しうるかが `?` を探せば分かります。

### ? は Result を返す関数の中だけ

```rust
fn main() {
    let n: u32 = "12a".parse()?;
    println!("{n}");
}
```

```text
error[E0277]: the `?` operator can only be used in a function that returns `Result` or `Option` (or another type that implements `FromResidual`)
...
help: consider adding return type
  |
1 ~ fn main() -> Result<(), Box<dyn std::error::Error>> {
2 |     let n: u32 = "12a".parse()?;
3 |     println!("{n}");
4 +     Ok(())
```

`?` は「Err を **返す**」ので、Result を返す関数の中でしか使えません。`help:` は、**main も Result を返す形にすればよい** と教えてくれています。

```rust
fn main() -> Result<(), Box<dyn std::error::Error>> {
    let n: u32 = "12a".parse()?;
    println!("{n}");
    Ok(())
}
```

`()` は「値無し」（Python の None を返す関数）、`Box<dyn std::error::Error>` は「**どんな種類のエラーでもよい**」という型です。AI の Rust のコードの main は、よくこの形になっています。

## 自分のエラー型を作る

ファイルの読み込みの失敗と、「中身が空」という自分のエラーを、1 つの型にまとめます。

```rust
#[derive(Debug)]
enum ConfigError {
    Io(std::io::Error),
    Empty,
}

fn load(path: &str) -> Result<String, ConfigError> {
    let text = fs::read_to_string(path).map_err(ConfigError::Io)?;
    if text.trim().is_empty() {
        return Err(ConfigError::Empty);
    }
    Ok(text)
}

println!("{:?}", load("config.toml"));
// Err(Io(Os { code: 2, kind: NotFound, message: "No such file or directory" }))
println!("{:?}", load("empty.toml"));    // 空白だけのファイル
// Err(Empty)
```

| 部分 | 意味 |
|---|---|
| `enum ConfigError { Io(...), Empty }` | このモジュールで起きる失敗の種類の一覧（レッスン 3 の enum） |
| `.map_err(ConfigError::Io)` | 読み込みのエラー（`std::io::Error`）を、`ConfigError::Io` に包み直す |
| `?` | 包み直した Err なら、そこで返す |
| `return Err(ConfigError::Empty)` | 自分で失敗を返す |

Go の `fmt.Errorf("...: %w", err)`、Python の `raise ConfigError(...) from e` と同じことです。呼んだ側は `match` で `ConfigError::Io(e)` と `ConfigError::Empty` を分けて処理できます。

実際のプロジェクトでは、このエラー型を簡単に作るための **`thiserror`**、何でも包める **`anyhow`** というクレートがよく使われます。AI のコードで `anyhow::Result<T>` や `#[derive(thiserror::Error)]` を見たら、この話です。

## AI のコードではこう出てくる

| 見かけたら | 読み方・チェック |
|---|---|
| `let x = something()?;` | 失敗したら呼んだ人に返す。成功なら中身を x に |
| `.unwrap()` / `.expect(...)` | ⚠️ 失敗したら止まる。ライブラリの中や、Web サーバーのリクエストの処理では避ける |
| `fn main() -> anyhow::Result<()>` | main でも `?` を使える形 |
| `.map_err(|e| MyError::Db(e))?` | エラーを自分の種類に包んで返す |
| `.ok_or(MyError::NotFound)?` | Option を Result に変える（None なら NotFound で返す） |
| `let _ = do_something();` | ⚠️ Result を捨てている（Go の `_` と同じ危険）。Rust はふつう、使わない Result に警告を出す |

```quiz
? `let n = s.parse::<u32>()?;` で、parse が `Err(e)` を返したら？
- n に 0 が入って先に進む
+ その場で関数を終わり、`Err(e)` を呼んだ人に返す
- panic して止まる
> `?` は Ok なら中身を取り出し、Err ならすぐに返します。Go の `if err != nil { return ..., err }` に当たります。

? `fn main() { let x = f()?; }` がコンパイルエラーになる理由は？
- f が存在しないから
+ `?` は Err を返す書き方なので、Result（か Option）を返す関数の中でしか使えないから
- main では関数を呼べないから
> main を `fn main() -> Result<(), Box<dyn std::error::Error>>` にすれば `?` が使えます。エラーの help: もそう提案していました。

? Rust の Result と Python の例外の、大きな違いは？
+ Rust は失敗しうることが戻り値の型に書かれ、確かめずに成功の値を使えない
- Rust はエラーを無視して先に進む
- Python の例外のほうが、必ず速い
> Result<u32, E> は u32 として使えないので、Err の場合を何らかの形で扱う必要があります。どこで失敗しうるかが型と `?` で分かります。
```
