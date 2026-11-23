---
title: C との違い ― std::string・参照・auto
level: 1
minutes: 16
concepts: [basics, strings, variables, memory]
summary: C++ は C のほぼすべてを含み、その上に便利な道具を足した言語。std::cout と <<、std::string（== で比べられる・自動で伸びる）、名前空間 std::、参照 &（ポインタより安全な「別名」）、const &、auto。
---
## このレッスンのゴール

- C++ の `std::cout <<`・`std::string`・`std::` の意味が分かる
- 参照（`int&`・`const std::string&`）が何で、ポインタとどう違うか説明できる
- `auto` での型の推論を読める

C 言語コースを先に読んでおくと、「なぜこうなっているか」がよく分かります。

## C++ とは

**C++** は、C 言語に **クラス**（レッスン 2）や **便利な部品の集まり**（STL。レッスン 3）などを足した言語です。C の速さはそのままに、大きなプログラムを書きやすくしたもので、**ゲーム**（Unreal Engine、多くのゲーム機のソフト）、ブラウザ（Chrome の中身）、画像・動画の処理、金融の高速な取引などで使われています。

C++ は C の **ほぼすべてを含んでいる** ので、C の書き方（`printf`・`malloc`・ポインタ）もそのまま使えます。でも、今の C++ では、**C の危ない書き方をなるべく使わない** のが良い書き方とされています。

## 最初のプログラム

```cpp
#include <iostream>
#include <string>

void add_tax(int& price) { price = price * 110 / 100; }

int main() {
    std::string name = "Ryo";
    std::string greet = "こんにちは、" + name + " さん";
    std::cout << greet << std::endl;

    int price = 120;
    add_tax(price);
    std::cout << "参照で渡す: " << price << "\n";
}
```

```text
こんにちは、Ryo さん
参照で渡す: 132
```

（このコースの出力とエラーは、すべて g++ 13 で `-std=c++20` を付けてコンパイルし、実際に実行したものです）

| C++ | 意味 | C では |
|---|---|---|
| `#include <iostream>` | 入出力（拡張子の `.h` が無い） | `#include <stdio.h>` |
| `std::cout << x << "\n"` | 表示。`<<` で順に流し込む | `printf("%d\n", x)` |
| `std::endl` | 改行（＋すぐに書き出す） | `\n` |
| `std::string` | **文字列の型** | char の配列 |
| `std::` | **名前空間** std（標準ライブラリ）の中のもの | — |

`std::cout << greet` は、「greet を cout（画面）に流し込む」と読みます。`printf` と違って **書式（`%d`・`%s`）を書かない** ので、レッスン 1 の C で見た「書式と型が合わずに落ちる」問題が起きません。

### 名前空間 std::

`std::string` の `std::` は、「標準ライブラリ（standard）の string」という意味です。Python の `import datetime` して `datetime.date` と書くのに似ています。`using namespace std;` と書くと `std::` を省略できますが、名前がぶつかる原因になるので、大きなプログラムでは避けられます。

## std::string：安全な文字列

```cpp
std::string a = "りんご", b = "りんご";
std::cout << std::boolalpha << (a == b) << " " << a.length() << "\n";   // true 9

std::string s = "abc";
s += "def";
std::cout << s << " " << s.substr(1, 3) << " " << s.find("d") << "\n";  // abcdef bcd 3
```

| 操作 | C++ の std::string | C の char 配列 | Python |
|---|---|---|---|
| つなぐ | `a + b`、`s += "x"` | `strcat`（大きさに注意） | `a + b` |
| 比べる | **`a == b`**（中身で比べる） | `strcmp(a, b) == 0` | `a == b` |
| 長さ | `s.length()`（バイト数） | `strlen(s)` | `len(s.encode())` |
| 一部 | `s.substr(1, 3)` | 自分でコピー | `s[1:4]` |
| 伸びる | **自動で** 大きくなる | 決まった大きさ（はみ出すと危険） | 自動 |

**`==` で中身を比べられ、自動で伸びる** ので、C 言語コースのレッスン 4 の「`==` で比べてはいけない」「バッファオーバーフロー」が起きにくくなっています。`length()` が 9 なのは、C と同じくバイト数だからです（日本語は 3 バイト）。

## 参照：別名

```cpp
void add_tax(int& price) { price = price * 110 / 100; }

int price = 120;
add_tax(price);        // & を付けずに渡す
// price は 132 になった
```

`int& price` の `&` は、**参照**（reference）という意味です。関数の price は、呼んだ側の price の **別名** になり、書き換えると元が変わります。

C 言語コースのレッスン 3 では、同じことをポインタで書きました。

```c
void add_tax(int *price) { *price = *price * 110 / 100; }   // C：番地を受け取り、* で中身
add_tax(&price);                                             // & で番地を渡す
```

| | ポインタ（C） | 参照（C++） |
|---|---|---|
| 書き方 | `int *p` / `*p = ...` / `f(&x)` | `int& r` / `r = ...` / `f(x)` |
| NULL になれる | なれる（落ちる原因） | **なれない**（必ず何かを指す） |
| 指す先を変える | 変えられる | 変えられない（最初に決めたら一生その別名） |

```cpp
int& r = price;
r = 0;
// price は 0 になった（r は price の別名）
```

参照は **「NULL にならない、付け替えられないポインタ」** のようなもので、ポインタより安全です。今の C++ では、**関数の引数で「元を変えたい」ときは参照** を使うのが普通です。

### const & ：コピーせずに、見るだけで借りる

```cpp
void show(const std::string& s) {
    std::cout << s << "（" << s.size() << " バイト）\n";
}
show(a);   // りんご（9 バイト）
```

`const std::string&` は、「**コピーせずに借りるが、書き換えない**（const）」という意味です。std::string を普通に（`std::string s`）受け取ると、長い文字列も毎回 **コピー** されて遅くなります。

**Rust の `&str` や `&T`（借りて見るだけ）とほぼ同じ考え方** で、AI の C++ のコードの関数の引数は、たいていこの形になっています。

| 引数の書き方 | 意味 | Rust で言うと |
|---|---|---|
| `std::string s` | コピーを受け取る | `s: String`（ムーブ） |
| `const std::string& s` | 借りて見るだけ | `s: &str` |
| `std::string& s` | 借りて書き換える | `s: &mut String` |

## auto：型の推論

```cpp
auto total = price * 3;       // int だと推論される
auto it = stock.find("りんご");   // 長い型名を書かなくてよい（レッスン 3）
```

`auto` は、右の値から型を決めてもらう書き方です（Java の `var`、Go の `:=`、Rust の `let`）。C++ の型名はとても長くなることがあるので、よく使われます。

## AI のコードではこう出てくる

| 見かけたら | 読み方 |
|---|---|
| `#include <vector>` / `<map>` / `<memory>` | STL の部品（レッスン 3・4） |
| `void f(const Foo& x)` | x をコピーせずに借りて見るだけ |
| `void f(Foo& out)` | out を書き換える |
| `std::string_view` | 文字列を借りて見るだけの、さらに軽い型（Rust の `&str` に近い） |
| `char*` / `malloc` / `strcpy` が C++ のコードにある | C の書き方。C++ では `std::string` や `std::vector` を使うほうが安全 |
| `.cpp` と `.h`（`.hpp`） | 中身と、宣言の一覧（ヘッダー）。C と同じ分け方 |

```quiz
? C++ の `std::string a = "x", b = "x";` で `a == b` は？
+ true（std::string は中身で比べる）
- false（番地を比べる）
- コンパイルエラー
> C の char 配列と違い、std::string の == は中身を比べます。

? `void f(int& n) { n = 0; }` を `f(x)` で呼ぶと、x は？
- 変わらない（コピーなので）
+ 0 になる（n は x の別名なので）
- エラーになる
> `int&` は参照で、関数の n は呼んだ側の x の別名です。書き換えると元が変わります。

? 関数の引数を `const std::string& s` にする主な理由は？
- 文字列を書き換えたいから
+ コピーせずに借りて、しかも書き換えないことを保証したいから
- s を NULL にできるようにしたいから
> const の参照は「借りて見るだけ」です。長い文字列のコピーを避けられます。Rust の `&str` に当たります。
```
