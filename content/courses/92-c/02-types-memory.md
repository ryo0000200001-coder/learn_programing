---
title: 型とメモリ ― sizeof とあふれる数
level: 1
minutes: 16
concepts: [types, memory, hardware, encoding]
summary: char・int・long・double がメモリで何バイトか（sizeof）、unsigned の数が 0 の下で一周する、int のあふれは「未定義の動作」、int32_t などの大きさが決まった型、文字は数であること。
---
## このレッスンのゴール

- 型ごとのメモリの大きさを `sizeof` で確かめられる
- unsigned の数の回り込みと、signed のオーバーフローが「未定義の動作」であることが分かる
- `char` が 1 バイトの数であることと、`int32_t` などの型の意味が分かる

## 型ごとの大きさ

C の型は、**メモリの何バイトを使うか** と結びついています（コンピュータの基礎コースの「2 進数とデータの量」）。

```c
printf("char=%zu short=%zu int=%zu long=%zu long long=%zu double=%zu pointer=%zu\n",
    sizeof(char), sizeof(short), sizeof(int), sizeof(long), sizeof(long long),
    sizeof(double), sizeof(int *));
```

```text
char=1 short=2 int=4 long=8 long long=8 double=8 pointer=8
```

| 型 | この環境での大きさ | 表せる範囲（だいたい） |
|---|---|---|
| `char` | 1 バイト | -128〜127（または 0〜255） |
| `short` | 2 バイト | ±3 万 |
| `int` | 4 バイト | ±21 億 |
| `long` | 8 バイト | ±922 京 |
| `double` | 8 バイト | 小数 |
| ポインタ（`int *`） | 8 バイト | メモリの番地（レッスン 3） |

`sizeof(型)` は、その型が **何バイトか** を返します。⚠️ 大きさは **パソコンや OS によって変わる** ことがあります（`long` は Linux・Mac の 64 ビットでは 8 バイト、Windows では 4 バイト）。C のプログラムを別の環境に持っていくと動きが変わる理由の 1 つです。

### 大きさが決まった型

```c
#include <stdint.h>
int32_t fixed = 100;   // 必ず 32 ビット（4 バイト）の符号付き整数
uint8_t byte = 200;    // 必ず 8 ビット（1 バイト）の 0 以上の整数
```

環境によらず大きさを決めたいときは、`<stdint.h>` の `int32_t`・`uint8_t`・`int64_t` などを使います。Rust の `i32`・`u8`、Go の `int32`・`uint8` は、この考え方を最初から言語に入れたものです。

## unsigned：0 以上の数

```c
unsigned char u = 255; u = u + 1;
printf("unsigned char 255+1 = %d\n", u);     // 0

unsigned int n = 0; n = n - 1;
printf("unsigned 0-1 = %u\n", n);            // 4294967295
```

`unsigned`（符号なし）の型は、0 以上の数だけを表します。1 バイトの `unsigned char` は 0〜255 なので、255 に 1 を足すと **0 に戻り**、0 から 1 を引くと **一番大きな数に回り込みます**。時計の針が 12 の次に 1 に戻るのと同じです。

⚠️ 「在庫の数を unsigned にして、0 から 1 を引いたら 42 億個になった」というバグが起きます。

## signed のオーバーフローは「未定義の動作」

```c
int big = INT_MAX;       // 2147483647
int next = big + 1;
printf("%d\n", next);    // -2147483648
```

Java（Java コースのレッスン 2）と同じく、マイナスになりました。ところが C では、**int（符号付き）があふれることは「未定義の動作」（undefined behavior）** と決められています。「何が起きても文句は言えない」という意味で、コンパイラは「あふれることは起きない」と考えて最適化してよいことになっています。そのため、最適化の設定によって **結果が変わる** ことさえあります。

検出する道具を付けてコンパイルすると、教えてくれます。

```bash
gcc -fsanitize=undefined -o ovu overflow.c && ./ovu
```

```text
overflow.c:5:9: runtime error: signed integer overflow: 2147483647 + 1 cannot be represented in type 'int'
```

「2147483647 + 1 は int で表せません」。`-fsanitize=undefined`（UBSan）は、未定義の動作を実行中に見つけてくれる道具です。

| 言語 | int があふれたら |
|---|---|
| Python | あふれない（いくらでも大きくなる） |
| Java | 回り込む（決まった動き） |
| Rust | デバッグでは panic で止まる、本番（release）では回り込む |
| C | **未定義の動作**（何が起きるか保証されない） |

## 文字は数

```c
char c = 'A';
printf("'A' = %d, 'A'+1 = %c\n", c, c + 1);   // 'A' = 65, 'A'+1 = B
```

C の `char` は、**1 バイトの数** です。`'A'` は 65（ASCII の番号。コンピュータの基礎コースの「文字コード」）で、1 足すと 66 ＝ `'B'` になります。

⚠️ 日本語の 1 文字は UTF-8 で 3 バイトなので、`char` 1 つには入りません（レッスン 4）。C の「文字」は、実は「バイト」のことです。

## 初期化しない変数

```c
int x;          // 値を入れていない
printf("%d\n", x);
```

C では、関数の中で作った変数に値を入れないと、**そのメモリに前から残っていた、でたらめな値** が入っています（レッスン 1 の `'rate' is used uninitialized` の警告）。Go のゼロ値、Java の「初期化しないとコンパイルエラー」、Rust の「初期化しないと使えない」は、どれもこの C の問題を防ぐための決まりです。

## AI のコードではこう出てくる

| 見かけたら | 読み方・チェック |
|---|---|
| `size_t len` | 大きさ・長さの型（unsigned）。`%zu` で表示 |
| `for (size_t i = n - 1; i >= 0; i--)` | ⚠️ size_t は 0 未満にならないので、`i >= 0` がいつも真で終わらない（無限ループ） |
| `uint8_t buf[256]` | 1 バイトずつのデータ（通信・ファイル・画像） |
| `int total` に大きな数を足し続ける | ⚠️ オーバーフロー |
| `int x;` の後、値を入れる前に使っている | ⚠️ でたらめな値 |
| `-fsanitize=address,undefined` | メモリの間違いと未定義の動作を見つける設定（テストのときに付ける） |

```quiz
? `unsigned int n = 0; n = n - 1;` の結果は？
- -1
+ 4294967295（一番大きな数に回り込む）
- エラーで止まる
> unsigned は 0 以上しか表せないので、0 から 1 を引くと一番大きな値に回り込みます。

? C で int の最大値に 1 を足すことについて正しいのは？
- いつも必ず -2147483648 になると決まっている
+ 「未定義の動作」で、何が起きるかは保証されない
- Python と同じく、大きな数になる
> この環境ではマイナスになりましたが、C の決まりでは未定義です。`-fsanitize=undefined` を付けると検出できます。

? `char c = 'A'; c + 1` を `%c` で表示すると？
+ B
- A1
- エラー
> char は 1 バイトの数で、'A' は 65 です。1 足すと 66 ＝ 'B' になります。
```
