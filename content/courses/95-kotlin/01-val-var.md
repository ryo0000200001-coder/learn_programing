---
title: val と var ― Kotlin の第一歩
level: 1
minutes: 15
concepts: [variables, types, conditionals, basics]
summary: fun main、val（変えられない）と var（変えられる）、型を後ろに書く、"$name" の文字列、値を返す if と when、1..3 の範囲。Java と同じ JVM で動くが、ずっと短く書ける。== は中身、=== は同じものか。
---
## このレッスンのゴール

- `val` と `var` の違いを説明できる
- `fun`・`"$name"`・`if` と `when` の式を読める
- Kotlin と Java の関係（同じ JVM の上で動く）が分かる

## Kotlin とは

**Kotlin**（コトリン）は JetBrains という会社が作った言語で、**Android のアプリの標準の言語** です（Google が推奨）。Java と同じ **JVM**（Java コースのレッスン 1）の上で動き、**Java のライブラリをそのまま使えます**。そのうえで、Java の長くて危ないところ（null・getter と setter・長い型名）を、短く安全に書けるようにしています。

## 最初のプログラム

```kotlin
fun greet(name: String): String = "こんにちは、$name さん"

fun main() {
    val price = 120
    var count = 1
    count += 2
    println(greet("Ryo"))
    println("合計 ${price * count} 円")
    println("${7 / 2} ${7 / 2.0} ${7 % 2}")
}
```

```text
こんにちは、Ryo さん
合計 360 円
3 3.5 1
```

（このコースの出力とエラーは、すべて Kotlin 2.1 でコンパイルし、Java 21 で実際に実行したものです）

| Kotlin | 意味 | Java で言うと | Python で言うと |
|---|---|---|---|
| `fun main()` | 入口（クラスに入れなくてよい） | `public static void main(...)` | `if __name__ == ...` |
| `fun greet(name: String): String` | 関数。**型は後ろ**（TypeScript・Rust・Go と同じ） | `static String greet(String name)` | `def greet(name: str) -> str:` |
| `= "..."` | 1 行で書く関数 | | `return ...` |
| `"...$name..."` / `"${式}"` | 埋め込み | `"..." + name` | `f"...{name}..."` |
| `println(x)` | 表示 | `System.out.println(x)` | `print(x)` |
| 文の終わりの `;` | **いらない** | 必要 | いらない |

Java コースで見た `public static void main(String[] args)` と見比べると、Kotlin がどれだけ短いかが分かります。

## val と var

```kotlin
val price = 120      // 変えられない
var count = 1        // 変えられる
count += 2
```

```kotlin
val price = 120
price = 200
```

```text
k1b.kt:3:5: error: 'val' cannot be reassigned.
```

| | `val`（value） | `var`（variable） |
|---|---|---|
| 入れ直し | **できない** | できる |
| 似ているもの | Rust の `let`、JavaScript の `const`、Java の `final` | Rust の `let mut`、JavaScript の `let` |

**基本は `val`、本当に変える必要があるときだけ `var`** が Kotlin の書き方です。Rust と同じく、「どこで値が変わるのか」をコードで分かるようにするためです。

## 型

```kotlin
val rate: Double = 0.1          // 型を書くなら 名前: 型
println(price * (1 + rate))     // 132.0

val r: Int = 0.5
// error: initializer type mismatch: expected 'kotlin.Int', actual 'kotlin.Double'.
```

| Kotlin | 中身 | Java で言うと |
|---|---|---|
| `Int` / `Long` | 整数 | `int` / `long` |
| `Double` | 小数 | `double` |
| `Boolean` | `true` / `false` | `boolean` |
| `String` | 文字列 | `String` |
| `List<String>` | 文字列のリスト | `List<String>` |

Kotlin の型は **全部大文字で始まります**。Java の `int` と `Integer` のような 2 種類の区別（Java コースのレッスン 2）が、書く側からは見えなくなっています（中ではうまく使い分けてくれる）。

## == と ===

```kotlin
val a = "りんご"
val b = String("りんご".toCharArray())
println("${a == b} ${a === b} ${a.length}")   // true false 3
```

| 演算子 | 意味 | Java で言うと |
|---|---|---|
| `==` | **中身** が同じか | `equals` |
| `===` | **同じオブジェクト** か | `==` |

Java の「文字列を `==` で比べてはいけない」問題を、Kotlin は **`==` を中身の比較にする** ことで解決しました（C# と同じ考え方）。

## if と when は値を返す

```kotlin
val label = if (price > 100) "高い" else "安い"

val size = when (count) {
    0 -> "ゼロ"
    in 1..9 -> "1 桁"
    else -> "それ以上"
}
println("$label $size")   // 高い 1 桁
```

| Kotlin | Python で言うと |
|---|---|
| `val x = if (条件) a else b` | `x = a if 条件 else b` |
| `when (x) { 0 -> ... else -> ... }` | `match x: case 0: ... case _: ...` |
| `in 1..9` | `1 <= x <= 9` |

Kotlin には、`? :` の三項演算子がありません。**`if` 自体が値を返す** からです（Rust と同じ）。`when` は Java の `switch` をもっと強くしたもので、よく使われます。

## 範囲と繰り返し

```kotlin
for (i in 1..3) print("$i ")         // 1 2 3
for (i in 0 until 3) print("$i ")    // 0 1 2

val fruits = listOf("りんご", "バナナ")
println("${fruits.size} ${fruits[0]} ${fruits}")   // 2 りんご [りんご, バナナ]
```

| Kotlin | Python |
|---|---|
| `1..3` | `range(1, 4)`（**3 を含む**） |
| `0 until 3` | `range(0, 3)`（3 を含まない） |
| `listOf(...)` | `[...]`（ただし変えられない。レッスン 4） |

## AI のコードではこう出てくる

| 見かけたら | 読み方 |
|---|---|
| `val` だらけで `var` が少ない | Kotlin らしい書き方 |
| `fun foo(): Int { ... }` / `fun foo() = ...` | 関数（2 つ目は 1 行の形） |
| `build.gradle.kts` | Android・Kotlin のプロジェクトの設定（Gradle を Kotlin で書いたもの） |
| `MainActivity.kt` | Android のアプリの画面の入口 |
| Java のファイル（`.java`）と Kotlin（`.kt`）が混ざっている | 同じプロジェクトで一緒に使える |
| `@JvmStatic` / `@JvmField` | Java から使いやすくするための印 |

```quiz
? Kotlin で `val price = 120` の後に `price = 200` と書くと？
- price が 200 になる
+ コンパイルエラー（val は入れ直せない）
- 警告が出るが 200 になる
> val は変えられない変数です。変えたいなら var を使います。

? Kotlin の `a == b`（a と b は String）は、Java で言うと？
+ `a.equals(b)`（中身の比較）
- `a == b`（同じオブジェクトか）
- `a.compareTo(b)`
> Kotlin の == は中身を比べます。同じオブジェクトかどうかは === です。

? `for (i in 1..3)` で i に入る値は？
- 1, 2
+ 1, 2, 3
- 0, 1, 2
> `..` は最後の数を含む範囲です。含めないなら `until` を使います。
```
