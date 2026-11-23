---
title: クラスと main メソッド ― Java のプログラムの形
level: 1
minutes: 15
concepts: [basics, classes, tooling]
summary: public static void main(String[] args) の 1 語ずつの意味、ファイル名とクラス名の関係、javac でコンパイルして java で実行する流れ、System.out.println と printf、文字列の + の落とし穴、日本語が ??? になるとき。
---
## このレッスンのゴール

- `public class Hello` と `public static void main(String[] args)` を 1 語ずつ説明できる
- `javac` と `java` の役割の違いが分かる
- Java のコンパイルエラーの読み方が分かる

## Java とは

**Java** は、銀行・保険・役所などの **大きな業務システム** や、Android のアプリ（今は Kotlin が主流）で長く使われてきた言語です。**型をしっかり書く**、**すべてをクラスの中に書く** のが特徴で、コードは長めですが、大人数で長く保守するのに向いています。

## 最初のプログラム

```java
import java.util.List;

public class Hello {
    static String greet(String name) {
        return "こんにちは、" + name + " さん";
    }

    public static void main(String[] args) {
        System.out.println(greet("Ryo"));
        int price = 120;
        int count = 3;
        System.out.println("合計 " + price * count + " 円");
        System.out.printf("%s は %d 歳です%n", "Hana", 30);
        var fruits = List.of("りんご", "バナナ");
        System.out.println(fruits + " " + fruits.size());
    }
}
```

```text
こんにちは、Ryo さん
合計 360 円
Hana は 30 歳です
[りんご, バナナ] 2
```

（このコースの出力とエラーは、すべて Java 21 で実際にコンパイル・実行したものです）

### public static void main(String[] args)

Java の入口は、この呪文のような 1 行です。1 語ずつ見ます。

| 部分 | 意味 |
|---|---|
| `public` | どこからでも呼べる（Java の実行の仕組みが外から呼ぶので） |
| `static` | クラスのインスタンス（`new` で作るもの。レッスン 3）を作らずに呼べる |
| `void` | 何も返さない（Python の `-> None`） |
| `main` | 入口の名前。**必ず main** |
| `String[] args` | コマンドラインの引数（`java Hello a b` なら 2 つ）。Python の `sys.argv[1:]` |

Python の `if __name__ == "__main__":` に当たる部分を、Java では **クラスの中のメソッド** として書きます。Java では、関数も変数も、**すべてどこかのクラスの中** に書く決まりです。

| Java | Python で言うと |
|---|---|
| `public class Hello { ... }` | ファイル全体（モジュール） |
| `static String greet(String name)` | `def greet(name: str) -> str:` |
| `System.out.println(x)` | `print(x)` |
| `System.out.printf("%s %d%n", ...)` | `print("%s %d" % (...))`（`%n` は改行） |
| `{ }` と `;` | インデントと改行の代わり |
| `// ...` / `/* ... */` | コメント |

### ⚠️ ファイル名＝クラス名

`public class Hello` は、**`Hello.java` というファイル** に書かないとコンパイルできません。大文字・小文字も同じにします。Java のファイルの名前がいつも大文字で始まるのはこのためです。

## コンパイルして実行する

```bash
javac Hello.java      # コンパイル → Hello.class ができる
java Hello a b        # 実行（.class は付けない）
java Hello.java       # 1 ファイルだけなら、コンパイルと実行を一度に（Java 11 から）
```

| 道具 | 意味 |
|---|---|
| `javac` | Java のコンパイラ。`.java` を **バイトコード**（`.class`）に変換 |
| `java` | **JVM**（Java 仮想マシン）でバイトコードを実行 |
| Maven（`pom.xml`）・Gradle（`build.gradle`） | ライブラリの管理とビルド（Python の pip ＋ pyproject、JavaScript の npm に当たる） |

Java のプログラムは、Windows・Mac・Linux のどこでも **同じ `.class` が JVM の上で動く** のが特徴です（「一度書けばどこでも動く」）。Go や Rust のように OS ごとの実行ファイルを作るのとは違い、動かす側に Java（JVM）が必要です。

## コンパイルエラーの読み方

```java
int price = 120
```

```text
Bad.java:3: error: ';' expected
        int price = 120
                       ^
1 error
```

| 部分 | 意味 |
|---|---|
| `Bad.java:3:` | ファイル名と行 |
| `';' expected` | 「ここに `;` が必要」 |
| `^` | その場所 |

Java のエラーは、Rust ほど親切な提案はしませんが、**場所と理由** ははっきり書かれます。`cannot find symbol`（名前が見つからない＝打ち間違いか import 忘れ）、`incompatible types`（型が合わない）もよく見ます。

## 文字列の + の落とし穴

```java
System.out.println("合計 " + price * count + " 円");   // 合計 360 円
System.out.println("合計 " + price + count + " 円");   // 合計 1203 円
```

`+` は左から順に計算されます。2 つ目は `"合計 " + 120` で **文字列 "合計 120" になってから**、`+ 3` で "合計 1203" になりました。数どうしを先に計算したいときは、`*` のように先に計算される演算子にするか、かっこで囲みます（`"合計 " + (price + count)`）。JavaScript でも同じことが起きます。

## ⚠️ 日本語が ??? になる

この教材を作っている環境で最初に実行したとき、こう表示されました。

```text
??????Ryo ??
?? 360 ?
```

Java は、画面に書き出すときの文字コードを **OS の設定**（ロケール）に合わせます。その環境の設定が日本語に対応していなかったため、日本語が `?` に置き換えられていました（設定を UTF-8 にしたら直りました）。Windows の古いコマンドプロンプトでも同じことが起きます。コンピュータの基礎コースの「文字化け」の仲間で、`java -Dstdout.encoding=UTF-8 Hello` のように指定して直すこともできます。

## AI のコードではこう出てくる

| 見かけたら | 読み方 |
|---|---|
| `package com.example.shop;` | このクラスの住所。フォルダの `com/example/shop/` に対応 |
| `import java.util.*;` | java.util の中のクラスを全部使えるように |
| `src/main/java/...` と `src/test/java/...` | Maven・Gradle の決まったフォルダの形（本体とテスト） |
| `pom.xml` / `build.gradle` | 使うライブラリ（依存関係）の一覧 |
| `./mvnw spring-boot:run` / `./gradlew build` | プロジェクトに同梱されたビルドの道具を実行 |
| `@Override` などの `@` | アノテーション（レッスン 3・6） |

```quiz
? `public static void main(String[] args)` の `String[] args` は何？
- main が返す値
+ プログラムを実行するときに渡されたコマンドラインの引数
- クラスの名前の一覧
> `java Hello a b` なら args は `["a", "b"]` の 2 つです。Python の `sys.argv[1:]` に当たります。

? `public class Shop` を書くファイルの名前は？
+ `Shop.java`
- `shop.java`
- 何でもよい
> public なクラスの名前と、ファイル名は大文字・小文字まで同じにする必要があります。

? `int a = 1, b = 2;` のとき、`"答え " + a + b` の結果は？
- 答え 3
+ 答え 12
- エラー
> 左から順に計算され、"答え " + 1 で文字列 "答え 1" になってから 2 がつながります。足し算を先にするなら `"答え " + (a + b)` です。
```
