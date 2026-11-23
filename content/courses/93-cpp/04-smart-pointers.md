---
title: スマートポインタ ― new と delete を書かない
level: 3
minutes: 18
concepts: [memory, classes]
summary: new だけ書いて delete を忘れるとリークする（LeakSanitizer で確認）。持ち主が 1 人の unique_ptr（コピーできず、move で渡す）、持ち主を数える shared_ptr（use_count）、make_unique・make_shared。Rust の所有権との対応。
---
## このレッスンのゴール

- 生の `new` / `delete` の危険と、スマートポインタがそれをどう防ぐか説明できる
- `std::unique_ptr` と `std::move` を読み、コピーできない理由が分かる
- `std::shared_ptr` の `use_count` の意味と、使いどころが分かる

## 生の new と delete

C++ では、C の `malloc` / `free` の代わりに、`new` / `delete` でヒープにオブジェクトを作ります。

```cpp
Product* p = new Product("生ポインタ");
// ... delete p; を忘れて終わる
```

AddressSanitizer を付けて実行すると、こうなりました。

```text
==8583==ERROR: LeakSanitizer: detected memory leaks
Direct leak of 32 byte(s) in 1 object(s) allocated from:
    #0 0x... in operator new(unsigned long)
SUMMARY: AddressSanitizer: 32 byte(s) leaked in 1 allocation(s).
```

C 言語コースのレッスン 5 と同じ **メモリリーク** です。デストラクタ（レッスン 2）も呼ばれていません（「[片付けた]」が表示されない）。`new` で作ったものは、**範囲を抜けても自動では片付けられない** からです。

**今の C++ では、生の `new` と `delete` は（ほぼ）書きません**。代わりに、レッスン 2 の RAII を使った **スマートポインタ** を使います。

## unique_ptr：持ち主は 1 人

```cpp
#include <memory>

std::unique_ptr<Product> make(const std::string& name) {
    return std::make_unique<Product>(name);
}

{
    auto a = make("りんご");
    std::cout << "  " << a->name << "\n";
    auto b = std::move(a);
    std::cout << "  move 後: a は " << (a ? "あり" : "空") << "、b は " << b->name << "\n";
}
```

```text
  [作った] りんご
  りんご
  move 後: a は 空、b は りんご
  [片付けた] りんご       ← } を抜けたとき、自動で
```

| 部分 | 意味 |
|---|---|
| `std::unique_ptr<Product>` | Product を **1 人だけで持つ** スマートポインタ |
| `std::make_unique<Product>(name)` | ヒープに作って、unique_ptr に入れて返す（`new` を書かない） |
| `a->name` | 普通のポインタと同じように使える |
| `std::move(a)` | **持ち主を a から b に移す**。a は空になる |
| `}` を抜けると | 持ち主（b）が消えるので、デストラクタで **自動で delete** |

### コピーできない

```cpp
auto a = std::make_unique<std::string>("x");
auto b = a;
```

```text
error: use of deleted function 'std::unique_ptr<...>::unique_ptr(const std::unique_ptr<...>&)'
```

エラーの文は長いですが、「unique_ptr の **コピー** は消された（使えない）関数です」という意味です。持ち主が 1 人だけなので、コピーして 2 人にすることはできません。渡すときは `std::move` で **移します**。

**これは Rust の所有権とムーブ（Rust コースのレッスン 2）と同じ考え方です**。Rust では `let b = a;` だけで自動でムーブになり、その後 a を使うとコンパイルエラーでしたが、C++ では `std::move` と明示して、move した後の a は **空になる**（使うとまずいが、コンパイルは通る）という違いがあります。Rust は、C++ のこの仕組みを、コンパイラで確実に守らせるようにした言語とも言えます。

## shared_ptr：持ち主を数える

```cpp
{
    auto s1 = std::make_shared<Product>("牛乳");
    std::cout << "  持ち主の数: " << s1.use_count() << "\n";
    {
        auto s2 = s1;                                         // コピーできる
        std::cout << "  コピー後: " << s1.use_count() << "\n";
    }
    std::cout << "  s2 が消えた後: " << s1.use_count() << "\n";
}
```

```text
  [作った] 牛乳
  持ち主の数: 1
  コピー後: 2
  s2 が消えた後: 1
  [片付けた] 牛乳        ← 最後の持ち主（s1）が消えたとき
```

`std::shared_ptr` は、**何人が持っているかを数えていて**（参照カウント）、**最後の 1 人がいなくなったら片付けます**。

| | unique_ptr | shared_ptr |
|---|---|---|
| 持ち主 | 1 人 | 何人でも |
| コピー | できない（move する） | できる（数が増える） |
| 片付け | 持ち主が消えたら | 最後の持ち主が消えたら |
| 速さ | 生のポインタとほぼ同じ | 数を数える分、少し遅い |
| 使う場面 | **ほとんどの場合** | 本当に複数の持ち主が必要なとき |
| Rust で言うと | `Box<T>` | `Rc<T>` / `Arc<T>` |

Python のオブジェクトも、実は参照カウントで管理されています（`sys.getrefcount(x)` で数が見られる）。shared_ptr は、それを C++ で必要なところにだけ使う道具です。

⚠️ shared_ptr どうしがお互いを持ち合う（循環参照）と、数が 0 にならずにリークします。片方を `std::weak_ptr`（数に入らない弱い参照）にして避けます。

## vector の中に入れる

```cpp
{
    std::vector<std::unique_ptr<Product>> items;
    items.push_back(make("食パン"));
    items.push_back(make("バナナ"));
    std::cout << "  " << items.size() << " 個\n";
}
```

```text
  [作った] 食パン
  [作った] バナナ
  2 個
  [片付けた] 食パン
  [片付けた] バナナ       ← vector が消えると、中の unique_ptr も全部片付く
```

vector（レッスン 3）が消えると中の unique_ptr が消え、unique_ptr が消えると Product が片付きます。**RAII が入れ子になって、全部自動で片付く** のが今の C++ の書き方です。この main には `delete` が 1 つもありません。

## まとめ：C++ のメモリの書き方

| 書き方 | 判定 |
|---|---|
| 普通の変数（`Product p(...)`）・`std::vector`・`std::string` | ✅ いちばん良い。範囲を抜けたら自動 |
| `std::make_unique<T>(...)` | ✅ ヒープが必要なとき |
| `std::make_shared<T>(...)` | ✅ 本当に共有が必要なとき |
| `new` / `delete` | ⚠️ 忘れ・二重・例外のときの漏れ。今は書かない |
| `malloc` / `free` | ⚠️ C の書き方。C++ では使わない（デストラクタが呼ばれない） |

## AI のコードではこう出てくる

| 見かけたら | チェック |
|---|---|
| `Foo* p = new Foo(...)` | ⚠️ どこで delete している？ 例外や途中の return で漏れない？ `make_unique` に |
| `std::unique_ptr<Foo>` を引数で受け取る | 持ち主ごと受け取る（呼ぶ側は `std::move` で渡す） |
| `const Foo&` / `Foo*` を引数で受け取る | 持ち主にはならず、借りるだけ |
| `std::move(x)` の後に x を使っている | ⚠️ x は空になっている |
| `shared_ptr` だらけ | 本当に共有が必要か。unique_ptr で足りることが多い |
| `delete[] arr;` | `new int[10]` で作った配列の片付け。`std::vector` にすれば不要 |

```quiz
? `Product* p = new Product("x");` の後、`delete p;` を書かずに関数を抜けると？
- 範囲を抜けたので自動で片付けられる
+ 片付けられずにメモリリークになる（デストラクタも呼ばれない）
- コンパイルエラーになる
> new で作ったものは、範囲を抜けても自動では片付きません。make_unique を使えば、範囲を抜けたときに自動で片付きます。

? `auto b = a;`（a は std::unique_ptr）がコンパイルエラーになる理由は？
+ unique_ptr は持ち主が 1 人だけなので、コピーできないから
- unique_ptr は代入できないから
- a が空だから
> 渡すときは `auto b = std::move(a);` で持ち主を移します。Rust の所有権のムーブと同じ考え方です。

? shared_ptr の `use_count()` が 2 から 1 になった。何が起きた？
- オブジェクトが片付けられた
+ 持ち主の 1 人が消えた（まだ 1 人残っているので、オブジェクトは生きている）
- メモリリークが起きた
> shared_ptr は持ち主の数を数え、最後の 1 人が消えたときに片付けます。
```
