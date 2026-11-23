---
title: 例外処理 ― try・catch・throws と Optional
level: 2
minutes: 18
concepts: [errors, io]
summary: try・catch・finally、自分の例外クラス、Java だけの「検査例外」（throws を書かないとコンパイルできない）、try-with-resources での後片付け、スタックトレースの読み方、null の代わりの Optional と、Integer の null で起きる NPE。
---
## このレッスンのゴール

- `try / catch / finally` と `throw new ...` を読める
- 検査例外と非検査例外の違い、`throws` の意味が分かる
- `try (...)`（try-with-resources）と `Optional` を読める

## try・catch・finally

```java
try {
    int n = Integer.parseInt("12a");
} catch (NumberFormatException e) {
    System.out.println("数ではありません: " + e.getMessage());
}
// 数ではありません: For input string: "12a"
```

Python の `try / except` とほぼ同じです。

| Java | Python |
|---|---|
| `try { ... }` | `try:` |
| `catch (NumberFormatException e) { ... }` | `except ValueError as e:` |
| `finally { ... }` | `finally:` |
| `throw new IllegalArgumentException("...")` | `raise ValueError("...")` |
| `e.getMessage()` | `str(e)` |

Go や Rust はエラーを **戻り値** で返しましたが、Java は Python と同じく **例外** で伝えます。

## 自分の例外

```java
static class NotFoundException extends RuntimeException {
    NotFoundException(String msg) { super(msg); }
}

static int findPrice(String name) {
    Map<String, Integer> prices = Map.of("りんご", 120);
    Integer p = prices.get(name);
    if (p == null) throw new NotFoundException("商品が見つかりません: " + name);
    return p;
}

try {
    findPrice("ぶどう");
} catch (NotFoundException e) {
    System.out.println("→ 404: " + e.getMessage());
} finally {
    System.out.println("finally は必ず実行");
}
```

```text
→ 404: 商品が見つかりません: ぶどう
finally は必ず実行
```

`RuntimeException` を継承（レッスン 3）して、自分の種類の例外を作っています。Web のアプリでは、「NotFoundException なら 404」のように、種類で返事を変えるのに使います（レッスン 6）。

## 検査例外：Java だけの決まり

```java
static String f() {
    return new BufferedReader(new FileReader("x")).readLine();
}
```

```text
Chk.java:2: error: unreported exception FileNotFoundException; must be caught or declared to be thrown
Chk.java:2: error: unreported exception IOException; must be caught or declared to be thrown
```

ファイルを読む処理は、**try / catch で受け止めるか、「この関数は例外を投げます」と宣言するか** しないと、**コンパイルできません**。「ファイルが無い」「読めない」は、ちゃんと考えておくべき失敗だから、というのが Java の考え方です。

```java
static String readFirstLine(String path) throws IOException {    // ← 宣言する
    try (BufferedReader r = new BufferedReader(new FileReader(path))) {
        return r.readLine();
    }
}
```

`throws IOException` は「この関数は IOException を投げることがあるので、**呼ぶ人が対応してね**」という宣言です。

| | 検査例外（checked） | 非検査例外（unchecked） |
|---|---|---|
| 例 | `IOException`、`SQLException` | `RuntimeException` の仲間：`NullPointerException`、`IllegalArgumentException`、`NumberFormatException` |
| 対応しないと | **コンパイルエラー** | コンパイルは通る（実行時に止まる） |
| 意味 | 外の世界の事情で起きる、考えておくべき失敗 | プログラムのバグや、入力の間違い |

Python にも Go にも Rust にも、この区別はありません。Go の「エラーを必ず戻り値で返す」、Rust の「Result を必ず扱う」と、目的は似ています。

## try-with-resources：後片付けを自動で

```java
try (BufferedReader r = new BufferedReader(new FileReader(path))) {
    return r.readLine();
}   // ← ここで r.close() が自動で呼ばれる（例外が起きても）
```

`try (...)` のかっこの中で開いたものは、**ブロックを抜けるときに自動で閉じられます**。Python の `with open(...) as f:`、Go の `defer f.Close()`、シェルの `trap` と同じ役割です。データベースの接続やファイルは、この形で開くのが今の Java の定番です。

```java
try {
    readFirstLine("config.toml");
} catch (IOException e) {
    System.out.println(e.getClass().getSimpleName() + ": " + e.getMessage());
}
// FileNotFoundException: config.toml (No such file or directory)
```

## スタックトレースの読み方

```java
apple.discount(9999);
```

```text
Exception in thread "main" java.lang.IllegalArgumentException: 値引きが大きすぎます: 9999
	at Product.discount(Shop.java:24)
	at Shop.main(Shop.java:56)
```

| 行 | 意味 |
|---|---|
| 1 行目 | **例外の種類とメッセージ**。まずここを読む |
| `at Product.discount(Shop.java:24)` | 例外が起きた場所（Shop.java の 24 行目、Product の discount） |
| `at Shop.main(Shop.java:56)` | それを呼んだ場所 |

**上ほど、例外が起きた場所に近い** 順に並んでいます。Python のトレースバック（下ほど近い）と **逆** なので注意です（はじめてのコースの「エラーメッセージ」）。本物のアプリでは、ライブラリの行が何十行も続くので、**自分のパッケージ名（`com.example...`）の行を探す** のがコツです。

## Optional：null の代わり

```java
static Optional<Integer> findPriceOpt(String name) {
    return Optional.ofNullable(Map.of("りんご", 120).get(name));
}

System.out.println(findPriceOpt("ぶどう").orElse(0) + " " +
                   findPriceOpt("りんご").map(p -> p * 2).orElse(0));
// 0 240
```

`Optional<Integer>` は「Integer があるかもしれないし、無いかもしれない」入れ物です。Rust の `Option`（Rust コースのレッスン 3）と同じ考え方を、Java 8 で取り入れたものです。

| Java | Rust | 意味 |
|---|---|---|
| `Optional.of(x)` / `Optional.empty()` | `Some(x)` / `None` | ある／無い |
| `.orElse(0)` | `.unwrap_or(0)` | 無ければ 0 |
| `.map(p -> p * 2)` | `.map(\|p\| p * 2)` | あれば変換 |
| `.orElseThrow()` | `.unwrap()` | 無ければ例外 |
| `.isPresent()` | `.is_some()` | あるか |

### ⚠️ Integer の null

```java
Integer missing = Map.of("りんご", 120).get("ぶどう");   // 無いので null
int total = missing + 10;
```

```text
Exception in thread "main" java.lang.NullPointerException: Cannot invoke "java.lang.Integer.intValue()" because "missing" is null
```

`Map.get` は、無いキーで **null** を返します。それを `int` として計算しようとして（Java が裏で `intValue()` を呼ぶ）、NPE になりました。コードの見た目には「メソッドを呼んでいる」部分が無いので、気づきにくい NPE です。`getOrDefault("ぶどう", 0)` や Optional を使うと防げます。

## AI のコードではこう出てくる

| 見かけたら | チェック |
|---|---|
| `catch (Exception e) { }`（中が空） | ⚠️ 例外を握りつぶしている。失敗に気づけない |
| `catch (Exception e) { e.printStackTrace(); }` | 表示だけして先に進む。続けて大丈夫か |
| `throws Exception` が main やあちこちに | 検査例外を考えずに全部上に投げている |
| `try (Connection c = ...; PreparedStatement s = ...)` | ✅ 2 つとも自動で閉じる |
| `optional.get()` | ⚠️ 空なら例外。`orElse` などに |
| `throw new RuntimeException(e)` | 検査例外を非検査例外に包み直している（よくある形） |

```quiz
? `static String read(String path) throws IOException` の `throws IOException` の意味は？
- この関数は IOException を絶対に投げない
+ この関数は IOException を投げることがあるので、呼ぶ側が対応する必要がある
- IOException を自動で受け止める
> 検査例外は、受け止めるか throws で宣言しないとコンパイルできません。throws を書くと、対応する責任が呼ぶ側に移ります。

? `try (BufferedReader r = new BufferedReader(...)) { ... }` の利点は？
+ ブロックを抜けるとき、例外が起きても r が自動で閉じられる
- ファイルを速く読める
- 例外が起きなくなる
> try-with-resources は、Python の `with` に当たります。閉じ忘れを防ぎます。

? Java のスタックトレースで、例外が実際に起きた場所に近いのは？
+ 上のほうの `at ...` の行
- 下のほうの `at ...` の行
- 最後の行
> Java は上ほど起きた場所に近い順です。Python のトレースバックとは逆なので注意します。
```
