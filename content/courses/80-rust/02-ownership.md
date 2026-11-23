---
title: 所有権と借用 ― Rust だけの考え方
level: 1
minutes: 22
concepts: [memory, variables, functions]
summary: 値には持ち主が 1 人だけいる（所有権）。代入や関数に渡すと持ち主が移る（ムーブ）、& で借りる、&mut で書き換えのために借りる、clone で複製する。3 つの代表的なコンパイルエラーを実際に起こして読む。
---
## このレッスンのゴール

- 所有権・ムーブ・借用（`&`）・可変の借用（`&mut`）の意味を説明できる
- `borrow of moved value` などの代表的なエラーを読み、直し方が分かる
- AI の Rust のコードに `&`・`.clone()`・`&mut` が多い理由が分かる

## なぜ所有権があるのか

プログラムは、使い終わったメモリを片付けなければいけません（コンピュータの基礎コースの「メモリ」）。

| 言語 | 片付け方 |
|---|---|
| Python・Go・JavaScript | **ガベージコレクタ**（GC）が、使われなくなったものを自動で探して片付ける。便利だが、ときどき処理が一瞬止まる |
| C・C++ | **人が自分で片付ける**（C 言語コースの `free`）。速いが、片付け忘れや二重の片付けがバグや脆弱性になる |
| **Rust** | **持ち主（所有者）が使い終わったら、自動で片付ける**。誰が持ち主かは、コンパイラが確かめる |

Rust は「GC 無しで速い」と「人が間違えない」を、**所有権のルールをコンパイラが確かめる** ことで両立しています。

## ルール 1：持ち主は 1 人。代入すると移る（ムーブ）

```rust
fn main() {
    let a = String::from("りんご");
    let b = a;
    println!("{a}");
    println!("{b}");
}
```

```text
error[E0382]: borrow of moved value: `a`
 --> r2.rs:4:16
  |
2 |     let a = String::from("りんご");
  |         - move occurs because `a` has type `String`, which does not implement the `Copy` trait
3 |     let b = a;
  |             - value moved here
4 |     println!("{a}");
  |                ^ value borrowed here after move
  |
help: consider cloning the value if the performance cost is acceptable
  |
3 |     let b = a.clone();
  |              ++++++++
```

`let b = a;` で、「りんご」の **持ち主が a から b に移りました**（**ムーブ**）。もう a は空っぽなので、使うとエラーです。

Python では `b = a` で **2 つの名前が同じものを指す** だけでした。Rust では **持ち主が引っ越す** と考えます。

```text
Python：  a ──┐
          b ──┴→ "りんご"     （2 人で共有）

Rust：    a     （空っぽ）
          b ───→ "りんご"     （持ち主は b だけ）
```

### コピーされる型もある

```rust
let n = 5;
let m = n;
println!("数はコピー: {n} {m}");   // 数はコピー: 5 5
```

整数・小数・bool などの **小さくて単純な型** は、代入すると **コピー** されるので、両方使えます。エラーの文の `does not implement the Copy trait`（Copy できない型です）は、この違いのことです。String や Vec は大きくなりうるので、勝手にはコピーされません。

## 関数に渡しても移る

```rust
fn take(s: String) { println!("{s}"); }

fn main() {
    let a = String::from("りんご");
    take(a);
    println!("{a}");
}
```

```text
error[E0382]: borrow of moved value: `a`
...
4 |     take(a);
  |          - value moved here
5 |     println!("{a}");
  |                ^ value borrowed here after move
  |
note: consider changing this parameter type in function `take` to borrow instead if owning the value isn't necessary
```

関数に渡すと、**持ち主が関数の引数に移ります**。関数が終わると、そこで片付けられます。`note:` は「持ち主になる必要が無いなら、**借りる** 形にしたら？」と提案しています。

## ルール 2：借りる（&）

```rust
fn print_len(s: &String) {
    println!("{s} は {} バイト", s.len());
}

let a = String::from("りんご");
print_len(&a);
println!("まだ使える: {a}");
```

```text
りんご は 9 バイト
まだ使える: りんご
```

`&a` は「a を **貸す**」、引数の `&String` は「String を **借りる**」という意味です（**借用**）。借りただけなので、関数が終わっても持ち主は a のまま。その後も a を使えます。

（「りんご」が 9 バイトなのは、UTF-8 で日本語 1 文字が 3 バイトだからです。コンピュータの基礎コースの「文字コード」）

### &str と String

| 型 | 意味 | よく使う場面 |
|---|---|---|
| `String` | 文字列を **持っている**（変えられる、伸ばせる） | 作った文字列を返す・構造体にしまう |
| `&str` | 文字列を **借りている**（見るだけ） | **関数の引数**（`fn greet(name: &str)`） |

`"りんご"` のように直接書いた文字列は `&str`、`String::from("りんご")` や `"りんご".to_string()` で `String` になります。**関数の引数は `&str` で受けるのが定番** です（`String` も `&str` も渡せるので）。

## ルール 3：書き換えのために借りる（&mut）

```rust
fn add_tax_label(s: &mut String) {
    s.push_str("（税込）");
}

let mut label = String::from("120 円");
add_tax_label(&mut label);
println!("{label}");   // 120 円（税込）
```

`&mut` は「**書き換えてよい**」という約束で貸すことです。貸す側の変数にも `mut` が必要です。

### 書き換え中は、他の人は見られない

```rust
let mut v = vec![1, 2, 3];
let first = &v[0];        // v を見るために借りている
v.push(4);                // v を書き換えるために借りようとした
println!("{first}");
```

```text
error[E0502]: cannot borrow `v` as mutable because it is also borrowed as immutable
3 |     let first = &v[0];
  |                  - immutable borrow occurs here
4 |     v.push(4);
  |     ^^^^^^^^^ mutable borrow occurs here
5 |     println!("{first}");
  |                ----- immutable borrow later used here
```

借用のルールは、**「見るだけの貸し出しは何人にでも」か「書き換えの貸し出しは 1 人だけ」のどちらか** です。同時にはできません。

これはただの意地悪ではありません。`v.push(4)` で Vec の中身が足りなくなると、Rust は **データを別の広い場所に引っ越す** ことがあります。そうすると、`first` が指していた古い場所はもう無効です。C や C++ では、この「消えた場所を指したまま使う」バグが実際によく起き、セキュリティの穴にもなってきました。**Rust はそれをコンパイルの時点で止めた** わけです。

## clone：複製する

```rust
let a = String::from("りんご");
let b = a.clone();
println!("{a} / {b}");   // りんご / りんご
```

`.clone()` は **中身ごと複製** します。持ち主が 2 人になるので、両方使えます。ただし、大きなデータだと時間とメモリを使います。

## まとめ

| 書き方 | 意味 | 元の変数は |
|---|---|---|
| `let b = a;` / `take(a)` | **ムーブ**：持ち主が移る | 使えなくなる（Copy な型を除く） |
| `&a` | **借用**：見るために貸す | 使える。何人にでも貸せる |
| `&mut a` | **可変の借用**：書き換えのために貸す | 貸している間は、他の人は使えない |
| `a.clone()` | **複製** | 使える（別物になる） |

## AI のコードではこう出てくる

| 見かけたら | 読み方・チェック |
|---|---|
| `.clone()` があちこちに | コンパイルエラーを消すために付けていることが多い。動くが、大きなデータなら無駄が多いかも |
| `fn f(s: &str)` / `fn f(items: &[T])` | 借りて見るだけの引数（定番の良い形） |
| `fn f(s: String)` | 持ち主ごと受け取る。呼んだ側はその後 s を使えない |
| `&mut self` | 自分の中身を変えるメソッド（レッスン 3） |
| `'a`（`fn f<'a>(x: &'a str) -> &'a str`） | **ライフタイム**：借りたものがいつまで有効か。返す値が「引数と同じだけ有効」という意味 |
| `Rc<T>` / `Arc<T>` | 持ち主を複数人にする特別な入れ物（Arc はスレッドの間で共有するとき） |

```quiz
? `let a = String::from("x"); let b = a; println!("{a}");` がエラーになる理由は？
- String は表示できないから
+ `let b = a;` で持ち主が b に移り（ムーブ）、a はもう使えないから
- a と b が同じ名前だから
> String は代入すると持ち主が移ります。両方使いたいなら `let b = a.clone();`、見るだけなら `let b = &a;` にします。

? 関数の引数を `fn show(s: String)` ではなく `fn show(s: &str)` にする利点は？
+ 借りるだけなので、呼んだ側がその後も文字列を使い続けられる
- 文字列を書き換えられる
- 処理が必ず 2 倍速くなる
> String で受けると持ち主が関数に移ります。見るだけなら借りる `&str` にするのが定番です。

? `let first = &v[0]; v.push(4); println!("{first}");` がエラーになるのはなぜ？
- v が空だから
- push は使えないから
+ v を見るために借りている間に、書き換えのために借りようとしたから
> 見るための借用と書き換えのための借用は同時にできません。push で中身が引っ越すと first が無効になりうるので、コンパイラが止めています。
```
