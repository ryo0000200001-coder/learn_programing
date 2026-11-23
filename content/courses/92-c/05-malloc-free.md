---
title: malloc と free ― メモリを自分で借りて返す
level: 3
minutes: 20
concepts: [memory, errors, security]
summary: 必要なときに malloc でメモリを借り、使い終わったら free で返す。返し忘れ（メモリリーク）、返した後に使う（解放後の使用）、2 回返す（二重解放）を実際に起こし、AddressSanitizer の報告を読む。ガベージコレクションと Rust の所有権が何を解決したのか。
---
## このレッスンのゴール

- `malloc`・`free`・`realloc` で、必要な大きさのメモリを借りて返すコードを読める
- メモリリーク・解放後の使用・二重解放が何か、AddressSanitizer の報告から読み取れる
- Python の GC や Rust の所有権が、この問題をどう解決しているか説明できる

## スタックとヒープ

これまでの変数（`int price = 120;`）は、**スタック** という場所に置かれ、関数が終わると **自動で片付けられます**。でも、「実行してみるまで、どれだけ必要か分からない」データ（ユーザーが入力した名前、読み込んだファイル）もあります。

| | スタック | ヒープ |
|---|---|---|
| 使い方 | 普通に変数を作る | `malloc` で借りる |
| 大きさ | コンパイルのときに決まる | 実行中に決められる |
| 片付け | 関数が終わると自動 | **自分で `free` する** |

Python のリストや文字列は、すべてヒープに置かれ、使われなくなったら **ガベージコレクタ**（GC）が片付けてくれていました（Rust コースのレッスン 2）。C では、それを **全部自分で** やります。

## malloc と free

```c
#include <stdlib.h>
#include <string.h>

typedef struct {
    char *name;
    int price;
} Product;

Product *product_new(const char *name, int price) {
    Product *p = malloc(sizeof(Product));          // ① Product 1 つ分を借りる
    if (p == NULL) return NULL;                     //    借りられなかったら NULL
    p->name = malloc(strlen(name) + 1);             // ② 名前の分も借りる（\0 の 1 バイトも）
    if (p->name == NULL) { free(p); return NULL; }
    strcpy(p->name, name);                          //    大きさを計算して借りたので、はみ出さない
    p->price = price;
    return p;
}

void product_free(Product *p) {
    if (p == NULL) return;
    free(p->name);                                  // 借りた順と逆に返す
    free(p);
}
```

```c
Product *apple = product_new("りんご", 120);
printf("%s %d\n", apple->name, apple->price);   // りんご 120
...
product_free(apple);
apple = NULL;
```

| 書き方 | 意味 |
|---|---|
| `malloc(バイト数)` | ヒープからその大きさを借りて、先頭の番地を返す。借りられないと NULL |
| `sizeof(Product)` | Product 1 つのバイト数（レッスン 2） |
| `strlen(name) + 1` | 文字列のバイト数 ＋ `\0`（レッスン 4） |
| `free(p)` | 返す |
| `typedef struct { ... } Product;` | 構造体に Product という名前を付ける |
| `p->name` | ポインタから中身（レッスン 3） |

**`malloc` した数だけ `free` する** のが C の約束です。`product_new` と `product_free` のように、**作る関数と片付ける関数を対にする** のが C のよくある書き方で、Python の「クラスとガベージコレクタ」の役目を、人の手でやっています。

### realloc：大きさを変える

```c
int n = 3;
int *prices = malloc(n * sizeof(int));          // int を 3 つ分
for (int i = 0; i < n; i++) prices[i] = (i + 1) * 100;
prices = realloc(prices, 5 * sizeof(int));      // 5 つ分に広げる
prices[3] = 400; prices[4] = 500;
printf("prices[4]=%d\n", prices[4]);            // prices[4]=500
free(prices);
```

`realloc` は、借りたメモリの大きさを変えます。足りなければ **別の広い場所に引っ越して**、新しい番地を返します。Python の `list.append` や Go の `append` も、中ではこれをやっています。Rust コースのレッスン 2 で「`v.push(4)` で中身が引っ越すので、借りている `first` が無効になる」と学んだのは、まさにこの動きです。

（⚠️ `prices = realloc(prices, ...)` は、失敗して NULL が返ると元の番地を失ってしまうので、本当は一度別の変数で受け取るのが正しい書き方です）

## 3 つの典型的な間違い

AddressSanitizer（`-fsanitize=address`）を付けてコンパイルし、わざと間違えてみました。

### ① 解放した後に使う（use-after-free）

```c
product_free(apple);
printf("解放後: %s\n", apple->name);    // もう返したメモリを読んでいる
```

```text
==8341==ERROR: AddressSanitizer: heap-use-after-free on address 0x... at pc 0x...
READ of size 8 at 0x... thread T0
    #0 0x... in main mem.c:38
freed by thread T0 here:
    #1 0x... in product_free mem.c:23
    #2 0x... in main mem.c:37
previously allocated by thread T0 here:
    #1 0x... in product_new mem.c:11
```

| 部分 | 意味 |
|---|---|
| `heap-use-after-free` | 解放した後のヒープのメモリを使った |
| `READ of size 8 ... in main mem.c:38` | 38 行目で 8 バイト読んだ（`apple->name` の番地） |
| `freed by ... product_free mem.c:23` | そのメモリは 23 行目で解放されていた |
| `previously allocated by ... product_new mem.c:11` | もともとは 11 行目で借りたもの |

**どこで借りて、どこで返して、どこで使ってしまったか** の 3 か所が全部分かります。AddressSanitizer を付けないと、たまたま古い中身が残っていて **普通に動いてしまう** ことも多く、発見がとても難しいバグです。攻撃者は、返されたメモリに自分のデータを置かせて、プログラムを乗っ取ることがあります。

### ② 2 回解放する（double free）

```c
product_free(apple);
product_free(apple);
```

```text
==8345==ERROR: AddressSanitizer: heap-use-after-free on address 0x...
READ of size 8 at 0x... thread T0
    #0 0x... in product_free mem.c:22
    #1 0x... in main mem.c:43
freed by thread T0 here:
    #1 0x... in product_free mem.c:23
    #2 0x... in main mem.c:42
```

2 回目の `product_free` の中で、`free(p->name)` のために **解放済みの p から name を読んだ** ところで見つかりました（22 行目）。ここを通り抜けても、同じ番地を 2 回 `free` すると、メモリの管理が壊れます。

`free` した後に **`apple = NULL;`** と書いておけば、`product_free` の最初の `if (p == NULL) return;` で止まるので安全です（上の正しいコードの最後の行）。

### ③ 返し忘れる（メモリリーク）

```c
Product *apple = product_new("りんご", 120);
...
return 0;          // product_free を呼ばずに終わった
```

```text
==8349==ERROR: LeakSanitizer: detected memory leaks
Direct leak of 16 byte(s) in 1 object(s) allocated from:
    #1 0x... in product_new mem.c:11
    #2 0x... in main mem.c:27
...
SUMMARY: AddressSanitizer: 26 byte(s) leaked in 2 allocation(s).
```

「**26 バイトが返されずに漏れています**。Product の 16 バイト（11 行目）と、名前の 10 バイト（13 行目。りんご 9 バイト ＋ `\0`）」。
すぐ終わるプログラムならメモリは OS が回収しますが、**サーバーのように何日も動き続けるプログラム** で、リクエストごとに少しずつ漏れると、やがてメモリを使い果たして落ちます（コンピュータの基礎コースのレッスン 1）。

## 他の言語は、これをどう解決したか

| 言語 | 片付け方 | ① 解放後の使用 | ② 二重解放 | ③ リーク |
|---|---|---|---|---|
| C | 人が `free` | 起きる | 起きる | 起きる |
| C++ | スマートポインタ（C++ コース）で自動に近づける | 減らせる | 減らせる | 減らせる |
| Python・Java・Go・JavaScript | **GC** が、使われなくなったら自動で | 起きない | 起きない | ほぼ起きない（参照を残し続けると起きる） |
| Rust | **所有権**：持ち主がいなくなったら自動で。間違いはコンパイルエラー | 起きない | 起きない | ほぼ起きない |

Rust のコンパイラが「ムーブした後の値は使えない」「借りている間は書き換えられない」と怒っていたのは（Rust コースのレッスン 2）、**まさにこのレッスンの ① と ② を、コンパイルの時点で止めるため** です。C を知ると、Rust のルールの意味がよく分かります。

## AI のコードではこう出てくる

| 見かけたら | チェック |
|---|---|
| `malloc` の後に NULL チェックが無い | ⚠️ 借りられなかったときに落ちる |
| `malloc` に対応する `free` が見つからない | ⚠️ リーク。特に途中で `return` するところ |
| `free(p);` の後に `p` を使っている | ⚠️ 解放後の使用 |
| `free(p); p = NULL;` | ✅ 二重解放・解放後の使用を防ぐ習慣 |
| `malloc(strlen(s))` | ⚠️ `\0` の分の `+ 1` を忘れている |
| `malloc(n * sizeof(int))` で n がとても大きい | 掛け算があふれて、小さすぎる大きさを借りることがある（`calloc(n, sizeof(int))` は確かめてくれる） |
| `-fsanitize=address` / `valgrind` | メモリの間違いを見つける道具。テストで使う |

```quiz
? `char *s = malloc(strlen(name) + 1);` の `+ 1` は何のため？
+ 文字列の最後の `\0` の 1 バイト分
- 安全のための予備
- malloc は必ず 1 多く渡す決まりだから
> C の文字列は最後に `\0` が必要です。strlen はそれを数えないので、1 足します。

? `free(p);` の後に `p->name` を読んだら AddressSanitizer が `heap-use-after-free` と報告した。意味は？
- メモリが足りない
+ すでに返したメモリを使っている
- p が NULL だった
> 解放後の使用です。報告には、借りた場所・返した場所・使ってしまった場所の 3 つが示されます。

? サーバーのプログラムで、リクエストごとに malloc して free を忘れると、どうなる？
- 何も問題はない（プログラムが終われば OS が回収する）
+ 少しずつメモリが減り続け、やがて使い果たして落ちる（メモリリーク）
- コンパイルエラーになる
> 動き続けるプログラムでは、漏れたメモリがたまり続けます。LeakSanitizer は漏れた大きさと借りた場所を教えてくれます。
```
