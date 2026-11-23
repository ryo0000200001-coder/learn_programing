---
title: クラスとデストラクタ ― RAII という考え方
level: 2
minutes: 18
concepts: [classes, memory]
summary: C++ のクラス（public・private・コンストラクタの初期化リスト・const のメソッド）と、オブジェクトが消えるときに必ず呼ばれるデストラクタ ~Product()。片付けを「範囲を抜けたら自動」にする RAII を、実行の順番で確かめる。
---
## このレッスンのゴール

- C++ のクラスの書き方（`public:`・`private:`・コンストラクタ・`const` のメソッド）を読める
- デストラクタ（`~クラス名()`）がいつ呼ばれるか、実行の順番から説明できる
- RAII が、C 言語コースの「free 忘れ」をどう防ぐか説明できる

## クラス

```cpp
class Product {
public:
    Product(std::string name, int price) : name_(std::move(name)), price_(price) {
        std::cout << "  [作った] " << name_ << "\n";
    }
    ~Product() { std::cout << "  [片付けた] " << name_ << "\n"; }

    int withTax() const { return price_ * 110 / 100; }
    void discount(int yen) { price_ -= yen; }
    const std::string& name() const { return name_; }

private:
    std::string name_;
    int price_;
};
```

| 部分 | 意味 | 似ているもの |
|---|---|---|
| `public:` / `private:` | ここから下は公開／非公開（Java の書き方を、まとめて書く形） | Java の `public` / `private` |
| `Product(std::string name, int price)` | コンストラクタ（クラスと同じ名前） | Java・Python の `__init__` |
| `: name_(std::move(name)), price_(price)` | **初期化リスト**：フィールドに最初の値を入れる | `self.name = name` |
| `~Product()` | **デストラクタ**：オブジェクトが消えるときに呼ばれる | （次で説明） |
| `int withTax() const` | **const のメソッド**：オブジェクトの中身を変えない約束 | Rust の `&self` |
| `name_` | フィールドの名前の後ろに `_` を付ける習慣（引数の name と区別） | Python の `self._name` |
| `std::move(name)` | コピーせずに中身を移す（Rust のムーブに近い） | |

### const のメソッド

```cpp
int withTax() const { price_ = 1; return price_; }
```

```text
error: assignment of member 'P::price_' in read-only object
```

メソッドの後ろの `const` は「このメソッドは中身を変えません」という約束で、変えようとすると **コンパイルエラー** になります。Rust の `&self`（見るだけ）と `&mut self`（書き換える）の区別を、C++ では `const` の有無で表します（Rust コースのレッスン 3）。

## デストラクタはいつ呼ばれるか

```cpp
void useProduct() {
    std::cout << "useProduct 開始\n";
    Product milk("牛乳", 200);
    std::cout << "  " << milk.name() << " " << milk.withTax() << "\n";
    std::cout << "useProduct 終わり\n";
}

int main() {
    Product apple("りんご", 120);
    apple.discount(20);
    std::cout << apple.name() << " " << apple.withTax() << "\n";
    useProduct();
    {
        Product bread("食パン", 250);
        std::cout << "  { } の中\n";
    }
    std::cout << "main 終わり\n";
}
```

```text
  [作った] りんご
りんご 110
useProduct 開始
  [作った] 牛乳
  牛乳 220
useProduct 終わり
  [片付けた] 牛乳        ← useProduct を抜けた瞬間
  [作った] 食パン
  { } の中
  [片付けた] 食パン      ← { } を抜けた瞬間
main 終わり
  [片付けた] りんご      ← main を抜けた瞬間
```

| オブジェクト | 作られた場所 | 片付けられたとき |
|---|---|---|
| 牛乳 | useProduct の中 | **useProduct を抜けたとき** |
| 食パン | `{ }` の中 | **`}` を抜けたとき** |
| りんご | main の中 | **main を抜けたとき** |

C++ のオブジェクトは、**作った範囲（`{ }`）を抜けたとき、必ずデストラクタが呼ばれます**。途中で `return` しても、例外が起きても（レッスン 5 で少し触れます）呼ばれます。Python の GC のように「いつか片付ける」ではなく、**いつ片付けられるか、コードを見れば分かる** のが特徴です。

## RAII：片付けを自動にする

この仕組みを使って、**資源（メモリ・ファイル・ロック・接続）を、オブジェクトが持ち、デストラクタで必ず返す** ようにする考え方を **RAII**（Resource Acquisition Is Initialization：資源の確保は初期化のときに）と呼びます。名前は難しいですが、中身は単純です。

```text
作る（コンストラクタ）  → 資源を借りる（メモリを確保・ファイルを開く・ロックをかける）
範囲を抜ける（デストラクタ）→ 資源を返す（自動で。忘れられない）
```

C 言語コースのレッスン 5 では、`product_new` で借りたら、**どこかで必ず `product_free` を呼ぶ** 必要があり、忘れるとリーク、2 回呼ぶと二重解放でした。RAII なら、**返すのはデストラクタの仕事** なので、人が忘れることがありません。

| 言語 | 「範囲を抜けたら必ず片付け」 |
|---|---|
| C++ | デストラクタ（RAII） |
| Rust | 持ち主がいなくなったら `Drop`（C++ の RAII を、コンパイラのルールでさらに確実にしたもの） |
| Python | `with` 文（`__exit__`） |
| Go | `defer` |
| Java | try-with-resources |
| シェル | `trap ... EXIT` |

`std::string`・`std::vector`（レッスン 3）も、中で RAII を使っています。中では `malloc` のようにメモリを借りていますが、デストラクタで自動で返すので、**使う側は free のことを考えなくてよい** のです。

```cpp
std::lock_guard<std::mutex> lock(mu);   // ロックをかける
// ... 処理 ...
// } を抜けると自動でロックが外れる（Go の defer mu.Unlock() に当たる）
```

## AI のコードではこう出てくる

| 見かけたら | 読み方・チェック |
|---|---|
| `class Foo { public: ... private: ... };` | 最後の `;` を忘れるとエラー |
| `~Foo()` | デストラクタ。中で `delete` や `close` をしている |
| `Foo(int x) : x_(x) {}` | 初期化リスト |
| `int get() const` | 中身を変えないメソッド |
| `std::lock_guard` / `std::unique_lock` / `std::fstream` | RAII の部品（ロック・ファイル） |
| デストラクタで `delete` している自作のクラス | ⚠️ コピーされると二重解放になりうる（「3 つのルール」）。スマートポインタ（レッスン 4）にすれば不要 |
| `explicit Foo(std::string n)` | 勝手な型の変換で、このコンストラクタが呼ばれないようにする印 |

```quiz
? C++ で、関数の中で作ったオブジェクトのデストラクタが呼ばれるのはいつ？
- プログラムが終わるとき
- ガベージコレクタが動いたとき
+ その関数（作った範囲の { }）を抜けたとき
> C++ のオブジェクトは、作った範囲を抜けると必ずデストラクタが呼ばれます。実行の順番でも、useProduct を抜けた瞬間に牛乳が片付けられていました。

? `int withTax() const { ... }` の `const` の意味は？
+ このメソッドはオブジェクトの中身を変えない
- このメソッドの戻り値は変えられない定数
- このメソッドは一度しか呼べない
> メソッドの後ろの const は「中身を変えない」約束で、変えようとするとコンパイルエラーです。

? RAII の考え方として正しいのは？
- 資源は使い終わったら、必ず手で free する
+ 資源をオブジェクトに持たせ、デストラクタで自動で返すので、返し忘れが起きない
- 資源はプログラムの最後にまとめて返す
> 作ったときに借りて、範囲を抜けたら自動で返します。C の free 忘れを防ぐ仕組みで、Python の with、Go の defer に当たります。
```
