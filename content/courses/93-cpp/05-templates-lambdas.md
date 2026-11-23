---
title: テンプレート・ラムダ・optional ― 今の C++ を読む
level: 3
minutes: 18
concepts: [generics, higher_order, types, reading]
summary: 型を後から決める関数とクラスのテンプレート、型に条件を付ける concepts（std::integral）、ラムダのキャプチャ [tax]・[&]、null の代わりの std::optional。長いテンプレートのエラーの読み方と、AI の C++ を読むときのまとめ。
---
## このレッスンのゴール

- `template <typename T>` の関数とクラスを読める
- concepts（`template <std::integral T>`）と、テンプレートのエラーの読み方が分かる
- ラムダのキャプチャ（`[tax]`・`[&]`）と `std::optional` を読める

## 関数のテンプレート

```cpp
template <typename T>
T largest(const std::vector<T>& items) {
    T max = items[0];
    for (const auto& x : items) if (x > max) max = x;
    return max;
}

std::cout << largest(std::vector<int>{3, 9, 2}) << " "
          << largest(std::vector<double>{1.5, 0.2}) << " "
          << largest(std::vector<std::string>{"b", "c", "a"}) << "\n";
// 9 1.5 c
```

`template <typename T>` は「**T という型を後から決める**」という意味で、Java・Rust・TypeScript のジェネリクスと同じ考え方です。同じ `largest` が、int・double・string のどれにも使えました。

| 言語 | 書き方 |
|---|---|
| C++ | `template <typename T> T largest(const std::vector<T>& items)` |
| Rust | `fn largest<T: PartialOrd + Copy>(items: &[T]) -> T` |
| Java | `static <T extends Comparable<T>> T largest(List<T> items)` |
| Python | `def largest[T](items: list[T]) -> T:` |

C++ のテンプレートは、**使われた型ごとに、コンパイラが別の関数を作ります**（int 用・double 用・string 用の 3 つ）。そのため速いのですが、コンパイルに時間がかかり、エラーが長くなりがちです。

### クラスのテンプレート

```cpp
template <typename T>
struct Box {
    T value;
    void show() const { std::cout << "Box(" << value << ")\n"; }
};

Box<int>{42}.show();               // Box(42)
Box<std::string>{"りんご"}.show();  // Box(りんご)
```

`std::vector<int>`・`std::map<std::string, int>`・`std::unique_ptr<Product>` は、どれも **STL の作ったクラスのテンプレート** でした。

## concepts：T に条件を付ける

Rust では、`T: PartialOrd` と書かないと `>` が使えませんでした（Rust コースのレッスン 5）。C++ のテンプレートは、昔は **条件を書かなくても、使ってみて駄目ならエラー** という仕組みでした。C++20 から、**concepts** で条件を書けるようになりました。

```cpp
#include <concepts>

template <std::integral T>          // T は整数の型に限る
T twice(T x) { return x * 2; }

twice(21);      // 42
twice(1.5);     // ← 小数を渡すと？
```

```text
a5b.cpp:3:19: error: no matching function for call to 'twice(double)'
/usr/include/c++/13/concepts:100:24: note: the expression 'is_integral_v<_Tp> [with _Tp = double]' evaluated to 'false'
```

「`twice(double)` に合う関数がありません。**T = double のとき、『整数か？』が false になりました**」。条件を書いておくと、エラーがこのように **短く、理由が分かる** ものになります。

### 長いエラーの読み方

C++ のテンプレートのエラーは、何十行・何百行になることがあります。レッスン 4 の unique_ptr のコピーのエラーも、`std::unique_ptr<_Tp, _Dp>::unique_ptr(const std::unique_ptr<_Tp, _Dp>&) [with _Tp = ...; _Dp = ...]` と長いものでした。

| コツ | |
|---|---|
| **最初の `error:` の行** を読む | 原因はたいていそこにある |
| 自分のファイル名（`a5b.cpp:3`）の行を探す | 標準ライブラリの中の行は、だいたい読み飛ばしてよい |
| `[with T = double]` を見る | どの型のときに駄目だったか |
| `deleted function` | 使えないように消された関数（コピーできないなど） |
| `no matching function` | 引数の型が合う関数が無い |

## ラムダのキャプチャ

```cpp
int tax = 10;
auto withTax = [tax](int price) { return price * (100 + tax) / 100; };
std::cout << withTax(120) << "\n";   // 132
```

ラムダの `[ ]` は、**外の変数のうち、何を中に持ち込むか**（キャプチャ）を書く場所です。

| 書き方 | 意味 |
|---|---|
| `[]` | 何も持ち込まない |
| `[tax]` | tax を **コピー** して持ち込む |
| `[&tax]` | tax を **参照** で持ち込む（外の tax が変わると、中でも変わる） |
| `[=]` | 使う変数を全部コピー |
| `[&]` | 使う変数を全部参照 |
| `[this]` | クラスのメソッドの中で、自分のメンバーを使う |

Python や JavaScript のラムダは、外の変数を **自動で** 使えましたが、C++ では書く必要があります。⚠️ `[&]` で参照を持ち込んだラムダを、**その変数が消えた後に呼ぶ** と、消えたメモリを読むことになります（C 言語コースの「解放後の使用」と同じ）。ラムダを後で使う（別のスレッドに渡す・保存する）なら、コピーで持ち込みます。

## optional：null の代わり

```cpp
#include <optional>

std::optional<int> findPrice(const std::string& name) {
    if (name == "りんご") return 120;
    return std::nullopt;
}

auto p = findPrice("ぶどう");
std::cout << p.value_or(0) << " " << findPrice("りんご").value() << " " << p.has_value() << "\n";
// 0 120 0
```

| C++ | Rust | Java | 意味 |
|---|---|---|---|
| `std::optional<int>` | `Option<i32>` | `Optional<Integer>` | あるかもしれない |
| `return 120;` / `std::nullopt` | `Some(120)` / `None` | `Optional.of` / `empty` | ある／無い |
| `.value_or(0)` | `.unwrap_or(0)` | `.orElse(0)` | 無ければ 0 |
| `.value()` | `.unwrap()` | `.orElseThrow()` | 無ければ例外 |
| `.has_value()` / `if (p)` | `.is_some()` | `.isPresent()` | あるか |

言語は違っても、**「無いかもしれない」を型で表す** という考え方は、今の言語の共通の流れです。

## AI の C++ を読むときのまとめ

```cpp
auto it = std::ranges::find_if(users, [&](const User& u) { return u.id == id; });
if (it == users.end()) return std::nullopt;
return std::make_unique<Session>(*it);
```

| 部分 | 読み方 | レッスン |
|---|---|---|
| `std::ranges::find_if(users, ...)` | users の中から条件に合う最初の 1 つを探す | 3 |
| `[&](const User& u) { ... }` | 外の id を参照で使うラムダ。u は借りて見るだけ | 1・5 |
| `it == users.end()` | 見つからなかった | 3 |
| `return std::nullopt;` | 「無い」を返す | 5 |
| `std::make_unique<Session>(*it)` | 見つかったユーザーから Session をヒープに作り、持ち主ごと返す | 4 |

「id が一致するユーザーを探して、いなければ無し、いれば新しいセッションを作って返す」と読めれば十分です。

| 見かけたら | チェック |
|---|---|
| `template <typename T>` に何の条件も無いのに、中で `<` や `.size()` を使っている | 合わない型で使うと、長いエラーになる（concepts を付けると分かりやすい） |
| `[&]` のラムダをスレッドに渡す・保存する | ⚠️ 変数が先に消えると、消えたメモリを読む |
| `optional` に `.value()` | ⚠️ 無ければ例外。`value_or` や `if` で確かめているか |
| `#include <bits/stdc++.h>` | 競技プログラミングでよく見る「全部読み込む」書き方。普通のプロジェクトでは使わない |

```quiz
? `template <typename T> T largest(const std::vector<T>& items)` の T は？
+ 使うときに決まる型（int の vector なら int）
- 必ず int
- テンプレートという名前の型
> template は型を後から決める仕組みで、Java・Rust のジェネリクスと同じ考え方です。int・double・string のどれにも使えました。

? ラムダ `[tax](int p) { return p * tax; }` の `[tax]` の意味は？
- 引数が tax
+ 外の変数 tax をコピーして、ラムダの中で使えるようにする
- tax を返す
> `[ ]` はキャプチャで、外の変数のうち何を持ち込むかを書きます。`[&tax]` なら参照で持ち込みます。

? `std::optional<int> p = std::nullopt;` のとき、`p.value_or(0)` は？
+ 0
- エラー
- nullopt
> 値が無いときは、value_or に渡した 0 が返ります。value() だと例外になります。
```
