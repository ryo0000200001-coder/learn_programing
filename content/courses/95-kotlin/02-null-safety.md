---
title: null 安全 ― String と String? は別の型
level: 1
minutes: 16
concepts: [types, errors, conditionals]
summary: Kotlin では null を入れられる型に ? を付ける。?. と ?: と !!、if で確かめると自動で null ではない型になるスマートキャスト、?.let { }、toIntOrNull。null を確かめずに使うとコンパイルエラーになる。
---
## このレッスンのゴール

- `String` と `String?` の違いを説明できる
- `?.`・`?:`・`!!`・`?.let { }` を読める
- スマートキャスト（`if (x != null)` の中では null ではない型になる）が分かる

## null を入れられる型には ? を付ける

```kotlin
val s: String = null
```

```text
k2b.kt:5:21: error: null cannot be a value of a non-null type 'kotlin.String'.
```

Kotlin の `String` には、**null を入れられません**（コンパイルエラー）。null かもしれないなら、型に **`?`** を付けて `String?` にします。

```kotlin
fun findName(id: Int): String? = if (id == 1) "Ryo" else null
```

### 確かめずに使うとコンパイルエラー

```kotlin
val name = findName(2)
println(name.length)
```

```text
k2b.kt:4:17: error: only safe (?.) or non-null asserted (!!.) calls are allowed on a nullable receiver of type 'kotlin.String?'.
```

「null かもしれない `String?` には、`?.` か `!!.` でしか呼べません」。**null を確かめずに使うと、コンパイルできません**。

| 言語 | null かもしれないものを、確かめずに使ったら |
|---|---|
| Java | 実行したときに NullPointerException |
| C# | **警告**（実行はできてしまう。C# コースのレッスン 2） |
| **Kotlin** | **コンパイルエラー** |
| Rust | そもそも null が無い（Option） |
| Python | 実行したときに AttributeError |

Java でいちばん多い NullPointerException を、**Kotlin はコンパイルの時点でほぼ無くした** のが、Android で Kotlin が選ばれた大きな理由です。

## 安全な使い方

```kotlin
val name: String? = findName(2)
println(name?.length)        // null
println(name ?: "なし")       // なし
println(name?.length ?: 0)   // 0
```

| 書き方 | 意味 | 他の言語では |
|---|---|---|
| `x?.length` | x が null なら null、そうでなければ length | C#・JavaScript の `?.` |
| `x ?: "なし"` | x が null なら右（**エルビス演算子**。横にすると髪型に見えるから） | C# の `??`、Python の `x or "なし"` |
| `x!!` | 「**絶対に null ではない**」と言い切る。null なら例外 | C# の `!`、Rust の `unwrap()` |

### !! は最後の手段

```kotlin
try {
    println(name!!.length)
} catch (e: NullPointerException) {
    println("NullPointerException: !! で null を無理に使った")
}
```

`!!` は、コンパイラのチェックを **自分の責任で外す** 書き方です。null なら、Java と同じ NullPointerException で止まります。AI のコードで `!!` がたくさんあったら、Kotlin の安全な仕組みを使わずに、Java のように書いているサインです。

## スマートキャスト

```kotlin
val n2 = findName(1)
if (n2 != null) {
    println("スマートキャスト: ${n2.length}")   // スマートキャスト: 3
}
```

`if (n2 != null)` の中では、Kotlin が **「ここでは null ではない」と分かって、自動で `String` として扱ってくれます**（スマートキャスト）。`?.` も `!!` もいりません。TypeScript の「型の絞り込み」（TypeScript コースのレッスン 4）と同じ考え方です。

## ?.let { }

```kotlin
findName(1)?.let { println("let: ${it.uppercase()}") }   // let: RYO
```

`?.let { ... }` は「**null でなければ、中の処理をする**」書き方で、Kotlin のコードでとてもよく見ます。`it` は、ブロックに渡された値（ここでは "Ryo"）の決まった名前です（レッスン 4）。Python で書くとこうです。

```python
name = find_name(1)
if name is not None:
    print(f"let: {name.upper()}")
```

## null を返す便利な関数

```kotlin
val n: Int? = "12a".toIntOrNull()
println("toIntOrNull: $n")              // toIntOrNull: null

val list: List<String?> = listOf("a", null, "c")
println(list.filterNotNull())           // [a, c]
```

| 関数 | 失敗したとき |
|---|---|
| `"12a".toInt()` | 例外（NumberFormatException） |
| `"12a".toIntOrNull()` | **null** |
| `list.first()` | 例外 |
| `list.firstOrNull()` | **null** |
| `map.getValue(k)` | 例外 |
| `map[k]` | **null** |

Kotlin の標準ライブラリには、**`〜OrNull` で null を返す版** がたくさんあります。例外を受け止める代わりに、`?:` で初期値を決める書き方が Kotlin らしい形です。

```kotlin
val age = input.toIntOrNull() ?: 0
```

## AI のコードではこう出てくる

| 見かけたら | チェック |
|---|---|
| `user!!.name` / `!!` がたくさん | ⚠️ null なら止まる。`?.`・`?:`・`?.let` にできないか |
| `lateinit var adapter: Adapter` | 後で必ず入れる、という約束の var。入れる前に使うと例外 |
| `val name = intent.getStringExtra("name") ?: return` | null なら関数を抜ける（よくある書き出し） |
| `user?.let { show(it) }` | null でなければ表示 |
| `String?` を返す Java のメソッドを使っている | Java から来た値は、null かどうか Kotlin に分からない（`String!` と表示される）。⚠️ 確かめる |

```quiz
? Kotlin で `val s: String = null` と書くと？
- s に null が入る
+ コンパイルエラー（String には null を入れられない）
- 実行したときにエラー
> null を入れたいなら `String?` にします。Kotlin は null を入れられる型を ? で区別します。

? `name ?: "ゲスト"` の意味は？
+ name が null なら "ゲスト"、そうでなければ name
- name が "ゲスト" かどうか
- name を必ず "ゲスト" にする
> `?:`（エルビス演算子）は「左が null なら右」です。

? `if (name != null) { println(name.length) }` で、`name?.length` と書かなくてよい理由は？
- length は null でも使えるから
+ if の中では null ではないと分かっているので、Kotlin が自動で String として扱ってくれるから（スマートキャスト）
- println が null を無視するから
> null を確かめた後の範囲では、型が自動で絞り込まれます。
```
