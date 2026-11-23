---
title: Vec・HashMap とイテレータ ― AI の Rust を読む
level: 3
minutes: 18
concepts: [collections, higher_order, reading]
summary: Vec と HashMap、entry().or_insert() で数える定番の形、iter().filter().map().collect() のイテレータの鎖、クロージャ |x|。Python の内包表記と並べて読む。
---
## このレッスンのゴール

- `Vec`・`HashMap` の基本の操作を読める
- `.iter().filter(...).map(...).collect()` の鎖を、左から順に説明できる
- クロージャ `|x| ...` と、`&&p` のような借用の記号に慣れる

## Vec と HashMap

| Rust | Python |
|---|---|
| `let mut v = Vec::new();` / `vec![1, 2, 3]` | `v = []` / `[1, 2, 3]` |
| `v.push(4)` | `v.append(4)` |
| `v.len()` / `v[0]` | `len(v)` / `v[0]` |
| `v.get(10)` → `Option` | （範囲外は `IndexError`） |
| `HashMap::new()` | `{}` |
| `m.insert(k, v)` | `m[k] = v` |
| `m.get(&k)` → `Option<&V>` | `m.get(k)` |

```rust
use std::collections::HashMap;

let mut stock: HashMap<&str, u32> = HashMap::new();
stock.insert("りんご", 10);
*stock.entry("りんご").or_insert(0) += 5;
*stock.entry("バナナ").or_insert(0) += 3;
println!("{:?} {:?}", stock.get("りんご"), stock.get("ぶどう"));
// Some(15) None
```

`m.get` は **Option** を返します（レッスン 3）。無いキーは `None` で、Go のように 0 になったり、Python のように例外になったりしません。

### entry().or_insert()：数える定番

```rust
*stock.entry("バナナ").or_insert(0) += 3;
```

| 部分 | 意味 |
|---|---|
| `.entry("バナナ")` | 「バナナ」の場所を用意して |
| `.or_insert(0)` | まだ無ければ 0 を入れる。その値への **書き換えのための借用**（`&mut u32`）を返す |
| `*... += 3` | 借りた先の値（`*` で中身）に 3 を足す |

Python の `stock["バナナ"] = stock.get("バナナ", 0) + 3`、`collections.defaultdict(int)` に当たります。単語を数えるときの形です。

```rust
let mut counts: HashMap<&str, usize> = HashMap::new();
for w in "a b a c b a".split_whitespace() {
    *counts.entry(w).or_insert(0) += 1;
}
let mut v: Vec<_> = counts.into_iter().collect();
v.sort_by(|a, b| b.1.cmp(&a.1));
println!("{v:?}");   // [("a", 3), ("b", 2), ("c", 1)]
```

シェルコースの `sort | uniq -c | sort -rn`、SQL の `GROUP BY ... ORDER BY COUNT(*) DESC` と同じことを Rust で書いた形です。`b.1.cmp(&a.1)` は「タプルの 2 つ目（数）を、b と a の順で比べる」＝ 大きい順です。

## イテレータの鎖

```rust
let prices = vec![120, 90, 200, 1200, 250, 180];

let cheap: Vec<u32> = prices.iter().filter(|&&p| p < 200).cloned().collect();
let with_tax: Vec<u32> = prices.iter().map(|p| p * 110 / 100).collect();
let total: u32 = prices.iter().sum();

println!("{cheap:?}");      // [120, 90, 180]
println!("{with_tax:?}");   // [132, 99, 220, 1320, 275, 198]
println!("{total}");        // 2040
```

Python の内包表記と並べると、こうです。

```python
cheap = [p for p in prices if p < 200]
with_tax = [p * 110 // 100 for p in prices]
total = sum(prices)
```

| 部分 | 意味 |
|---|---|
| `.iter()` | 1 つずつ取り出す **イテレータ** を作る（中身は借りる＝ `&u32`） |
| `.filter(条件)` | 条件に合うものだけ通す |
| `.map(変換)` | 1 つずつ変換する |
| `.cloned()` | 借りたもの（`&u32`）を、値（`u32`）に複製する |
| `.collect()` | 集めて Vec などにする。**何に集めるかは、左の型（`Vec<u32>`）で決まる** |
| `.sum()` / `.count()` / `.max()` | 合計・数・最大 |

JavaScript の `prices.filter(p => p < 200).map(...)`（JavaScript コースのレッスン 5）と、ほぼ同じ形です。違いは、Rust のイテレータは **`.collect()` や `.sum()` を呼ぶまで何もしない**（怠惰）ことで、途中で Vec を何個も作らないので速く動きます。

### クロージャ |x|

```rust
|p| p * 110 / 100          // p を受け取って p * 110 / 100 を返す
|a, b| b.1.cmp(&a.1)       // 2 つ受け取る
|x| { let y = x + 1; y * 2 }   // 複数行なら { } で
```

`|引数| 本体` は **クロージャ**（その場で作る小さな関数）です。Python の `lambda p: p * 110 // 100`、JavaScript の `p => p * 110 / 100` に当たります。

### &&p の読み方

```rust
prices.iter().filter(|&&p| p < 200)
```

`.iter()` は要素を **借りて**（`&u32`）渡し、`.filter` はさらにそれを **借りて**（`&&u32`）条件に渡します。`|&&p|` は「2 重に借りたものを、`&&` を外して p という値で受け取る」という書き方です。`|p| **p < 200` と書いても同じです。

読むときは、**`&` は「借りたもの」の印なので、意味を考えるときは無視してよい** と思って大丈夫です。AI のコードで `&` の数が合わずにコンパイルできないときは、エラーの `help:` が直し方を教えてくれます。

## よく出てくるイテレータの書き方

```rust
for (i, n) in names.iter().enumerate() {
    println!("{i}: {n}");          // 0: りんご / 1: バナナ / 2: 牛乳
}

let first_big = prices.iter().find(|&&p| p > 1000);
println!("{first_big:?}");         // Some(1200)

let s: String = names.iter().map(|n| n.to_string()).collect::<Vec<_>>().join("、");
println!("{s}");                   // りんご、バナナ、牛乳
```

| Rust | Python |
|---|---|
| `.iter().enumerate()` | `enumerate(...)` |
| `.find(条件)` → `Option` | `next((x for x in ... if 条件), None)` |
| `.any(条件)` / `.all(条件)` | `any(...)` / `all(...)` |
| `.zip(other)` | `zip(...)` |
| `.collect::<Vec<_>>()` | `list(...)`（`::<>` は「何に集めるか」をその場で書く。ターボフィッシュと呼ばれる） |
| `.join("、")` | `"、".join(...)` |
| `.into_iter()` | 借りずに、中身ごと取り出す（元の Vec は使えなくなる。レッスン 2 のムーブ） |

## AI の Rust を読むときのまとめ

このコースで学んだ記号を、1 行の中で読む練習です。

```rust
let users: Vec<User> = rows.iter().filter_map(|r| User::try_from(r).ok()).collect();
```

| 部分 | 読み方 |
|---|---|
| `rows.iter()` | rows を 1 つずつ借りて |
| `User::try_from(r)` | User に変換してみる（`Result` が返る。レッスン 4） |
| `.ok()` | Result を Option に（Err なら None） |
| `.filter_map(...)` | Some のものだけ中身を取り出して通す（変換に失敗した行は捨てる） |
| `.collect()` | `Vec<User>` に集める |

「変換できた行だけを User の一覧にする」と読めれば十分です。⚠️ ただし、**変換に失敗した行を黙って捨てている** ので、それでよいのかは確認ポイントです（失敗を知りたいなら `collect::<Result<Vec<_>, _>>()?` で、1 つでも失敗したらエラーにできる）。

```quiz
? `prices.iter().map(|p| p * 2).collect::<Vec<_>>()` を Python で書くと？
+ `[p * 2 for p in prices]`
- `sum(p * 2 for p in prices)`
- `prices * 2`
> map で 1 つずつ 2 倍にして、collect で Vec に集めています。

? `*counts.entry(w).or_insert(0) += 1;` は何をしている？
- counts を 0 で初期化している
+ w がまだ無ければ 0 を入れ、その値に 1 を足す（数を数える）
- w を counts から削除している
> entry().or_insert(0) で「無ければ 0」の場所を用意し、その値に 1 を足します。Python の `counts[w] = counts.get(w, 0) + 1` です。

? `rows.iter().filter_map(|r| parse(r).ok()).collect()` の確認ポイントは？
- filter_map は遅いので使ってはいけない
+ 変換に失敗した行を、エラーにせず黙って捨てているので、それで問題ないか
- ok() は panic するので危ない
> `.ok()` は Err を None にし、filter_map が None を捨てます。失敗を知る必要があるなら、Result のまま集めてエラーにします。
```
