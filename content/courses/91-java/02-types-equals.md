---
title: 静的型と変数 ― int と Integer、== と equals
level: 1
minutes: 18
concepts: [types, variables, operators]
summary: int・double・String・boolean の宣言と var、整数のあふれ、プリミティブ型とラッパー型（int と Integer）、そして Java 最大の落とし穴「文字列を == で比べてはいけない」と NullPointerException を実際の結果で。
---
## このレッスンのゴール

- `int price = 120;` や `var` での変数の宣言を読める
- 整数があふれる・整数の割り算が切り捨てになることが分かる
- 文字列を `==` ではなく `equals` で比べる理由を、実際の結果で説明できる

## 変数の宣言

```java
int price = 120;
double rate = 0.1;
String name = "Ryo";
boolean isOpen = true;
char c = 'あ';
var fruits = List.of("りんご", "バナナ");   // 型は右から推論される（Java 10 から）
final int TAX = 10;                          // final は変えられない（定数）
```

**型を先に書く** のが Java の形です（C 言語と同じ。Go や Rust は後ろ）。`var` を使うと、型を書かずに右の値から決めてもらえます。

| 型 | 中身 | Python で言うと |
|---|---|---|
| `int` | 整数（約 ±21 億まで） | `int` |
| `long` | 大きな整数 | `int` |
| `double` | 小数 | `float` |
| `boolean` | `true` / `false` | `bool` |
| `char` | 1 文字（シングルクォート `'あ'`） | — |
| `String` | 文字列（ダブルクォート `"..."`） | `str` |

## 計算の落とし穴

```java
System.out.println(7 / 2 + " " + 7 / 2.0 + " " + 7 % 2);   // 3 3.5 1
double withTax = 120 * (1 + 0.1);
System.out.println(withTax);                                // 132.0

int big = Integer.MAX_VALUE;
System.out.println(big + 1);                                // -2147483648
long l = 3_000_000_000L;
System.out.println(l);                                      // 3000000000
```

| 結果 | 理由 |
|---|---|
| `7 / 2` が 3 | 整数どうしの割り算は切り捨て（Go・C・SQLite と同じ） |
| `big + 1` が **マイナス** | int の上限（約 21 億）を超えると、**エラーにならずに反対側に回り込む**（オーバーフロー） |
| `3_000_000_000L` | 大きな数は `long` で、末尾に `L`。`_` は読みやすくするための区切り |

⚠️ オーバーフローはエラーにならないので気づきにくいバグです。売上の合計やミリ秒の時刻など、大きくなりうる数は `long` にします（Python の int には上限が無いので、起きません）。

## プリミティブ型とラッパー型

Java の型には 2 種類あります。

| | プリミティブ型 | 参照型（オブジェクト） |
|---|---|---|
| 例 | `int`・`double`・`boolean`・`char` | `String`・`Integer`・`List`・自分で作ったクラス |
| 名前 | **小文字** で始まる | **大文字** で始まる |
| 中身 | 値そのもの | **値が置いてある場所への参照**（Go のポインタに近い） |
| null | 入れられない | 入れられる（何も指していない） |

`int` には、オブジェクト版の **`Integer`** があります（ラッパー型）。`List<int>` とは書けず、`List<Integer>` と書く必要があるので、Java のコードでは両方が混ざって出てきます。

## ⚠️ == と equals

Java を書く人が必ず一度はハマる、いちばん有名な落とし穴です。

```java
String a = "りんご";
String b = "りんご";
String c = new String("りんご");
String d = new StringBuilder("りん").append("ご").toString();

System.out.println((a == b) + " " + (a == c) + " " + (a == d));   // true false false
System.out.println(a.equals(c) + " " + a.equals(d));              // true true
```

**中身はどれも「りんご」なのに、`==` では false になるものがあります**。

| 比べ方 | 何を比べるか |
|---|---|
| `==` | 参照型では **同じオブジェクト（同じ場所）か** |
| `.equals(...)` | **中身が同じか** |

`a` と `b` は、Java が同じ文字列を使い回したので、たまたま同じ場所でした。`c` と `d` は別に作られた文字列なので、場所が違います。**ユーザーの入力や、データベースから読んだ文字列は、たいてい別の場所** にあるので、`==` で比べると「同じパスワードなのに一致しない」のようなバグになります。

**文字列（と、すべてのオブジェクト）は `equals` で比べる**。これが Java の鉄則です。

Python の `==` は中身を比べ、`is` が場所を比べます。Java では **`==` が Python の `is`** に当たる、と覚えると分かりやすいです。

### Integer でも起きる

```java
Integer x = 127, y = 127, p = 128, q = 128;
System.out.println((x == y) + " " + (p == q) + " " + p.equals(q));   // true false true
```

127 までは Java が同じオブジェクトを使い回すので `==` が true、128 からは別のオブジェクトになって false でした。**テストで小さな数だけ試すと気づけない** ので、たちが悪いバグです。

## null と NullPointerException

```java
String n = null;
System.out.println("りんご".equals(n));   // false
System.out.println(n.equals("りんご"));
```

```text
Exception in thread "main" java.lang.NullPointerException: Cannot invoke "String.equals(Object)" because "n" is null
	at Eq.main(Eq.java:13)
```

参照型の変数には `null`（何も指していない）を入れられます。**null のままメソッドを呼ぶと、NullPointerException**（よく NPE と略される）で止まります。Java のプログラムでいちばんよく見る例外です。

エラーの文が「n が null だから `String.equals` を呼べない」と、**どの変数が null だったか** まで教えてくれています（Java 14 から）。`at Eq.main(Eq.java:13)` が場所です。

| 防ぎ方 | 例 |
|---|---|
| 定数の側から equals を呼ぶ | `"りんご".equals(n)`（n が null でも false で済む） |
| null かどうかを確かめる | `if (n != null && n.equals(...))` |
| `Objects.equals(a, b)` | どちらが null でも安全に比べる |
| `Optional` を使う | レッスン 4 |

## AI のコードではこう出てくる

| 見かけたら | チェック |
|---|---|
| `if (name == "admin")` / `if (status == otherStatus)`（文字列） | ⚠️ equals に |
| `Integer` どうしを `==` | ⚠️ 128 以上で false になる |
| `int total` で売上の合計 | 大きくなりうるなら `long`（オーバーフロー） |
| `input.equals("yes")` で input が null かも | ⚠️ `"yes".equals(input)` の順に |
| `var x = ...` | 型は右から決まる（型が無いわけではない） |
| `final` | 再代入できない（Rust の let、JavaScript の const） |

```quiz
? Java で、2 つの文字列の中身が同じか確かめる正しい書き方は？
- `a == b`
+ `a.equals(b)`
- `a = b`
> `==` は同じオブジェクト（同じ場所）かを比べます。中身を比べるのは equals です。実際に、中身が同じでも `==` が false になる例がありました。

? `int big = Integer.MAX_VALUE; big + 1` の結果は？
- エラーで止まる
- 2147483648
+ -2147483648（オーバーフローして反対側に回り込む）
> int の上限を超えると、エラーにならずにマイナスになります。大きくなりうる数は long を使います。

? `String s = null; s.length();` を実行すると？
+ NullPointerException で止まる
- 0 が返る
- null が返る
> null の変数のメソッドを呼ぶと NullPointerException です。エラーの文には、どの変数が null だったかも表示されます。
```
