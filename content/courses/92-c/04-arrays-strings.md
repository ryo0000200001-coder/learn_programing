---
title: 配列と文字列 ― \0 とバッファオーバーフロー
level: 2
minutes: 22
concepts: [collections, strings, memory, security]
summary: 配列は大きさが決まっていて、範囲の外を読んでもエラーにならない。文字列は \0 で終わる char の配列、strlen はバイト数、== で比べてはいけない。そして、文字列を長く書き込みすぎて隣の is_admin を書き換えてしまうバッファオーバーフローを実際に起こし、AddressSanitizer で見つける。
---
## このレッスンのゴール

- C の配列の大きさが決まっていること、範囲外を読み書きしてもエラーにならないことが分かる
- C の文字列が `\0` で終わる char の配列であることと、`strlen`・`strcmp`・`snprintf` を読める
- バッファオーバーフローが何で、なぜセキュリティの問題になるのかを説明できる

## 配列

```c
int prices[5] = {120, 90, 200, 1200, 250};
printf("prices[0]=%d  要素数=%zu  sizeof=%zu\n",
       prices[0], sizeof(prices) / sizeof(prices[0]), sizeof(prices));
// prices[0]=120  要素数=5  sizeof=20
```

| C | 意味 | Python で言うと |
|---|---|---|
| `int prices[5]` | int を 5 つ並べた配列。**大きさは決まっていて変えられない** | （リストは伸び縮みする） |
| `prices[0]` | 0 番目 | `prices[0]` |
| `sizeof(prices) / sizeof(prices[0])` | 要素の数（全体のバイト数 ÷ 1 つのバイト数）。**C には `len()` が無い** | `len(prices)` |

配列は、メモリの上に **同じ型が隙間なく並んだもの** です（int 5 つ × 4 バイト ＝ 20 バイト）。

### 関数に渡すと、長さが分からなくなる

```c
int sum(int *items, int n) {
    int s = 0;
    for (int i = 0; i < n; i++) s += items[i];
    return s;
}

printf("sum=%d\n", sum(prices, 5));   // sum=1860
```

配列を関数に渡すと、**先頭の番地（ポインタ）だけ** が渡されます。関数の中では、何個あるのか分からないので、**長さも一緒に渡す** のが C の決まりです。Go のスライス、Rust の `&[T]`、Java の配列は、「番地」と「長さ」をセットで持つことで、この面倒と危険を無くしています。

### ⚠️ 範囲外を読んでもエラーにならない

```c
printf("prices[5] (範囲外) = %d\n", prices[5]);
// prices[5] (範囲外) = 207
```

5 つしかない配列の **6 つ目**（番号 5）を読みました。Python なら `IndexError`、Go なら panic、Java なら `ArrayIndexOutOfBoundsException` で止まりますが、**C は止まりません**。配列のすぐ後ろのメモリにあった、**関係ない値（207）を読んだ** だけです。書き込んだら、関係ない値を壊します。

## 文字列は \0 で終わる char の配列

```c
char name[] = "Ryo";
printf("name=%s  sizeof=%zu  strlen=%zu  最後の文字の番号=%d\n",
       name, sizeof(name), strlen(name), name[3]);
// name=Ryo  sizeof=4  strlen=3  最後の文字の番号=0
```

```text
name:  'R'  'y'  'o'  '\0'
番号:   0    1    2    3
```

C には「文字列の型」がありません。文字列は **char の配列** で、**最後に `\0`（番号 0 の文字）** を置いて「ここで終わり」の印にします。だから「Ryo」の 3 文字に、`sizeof` は 4 バイト必要です。

| 関数 | 意味 | Python で言うと |
|---|---|---|
| `strlen(s)` | `\0` までの **バイト数** | `len(s.encode())` |
| `strcpy(dst, src)` | コピー | `dst = src` |
| `strcat(dst, src)` | 後ろにつなげる | `dst += src` |
| `strcmp(a, b)` | 比べる（同じなら 0） | `a == b` |
| `snprintf(buf, size, ...)` | 書式付きで buf に書く（size を超えない） | `f"..."` |

```c
char jp[] = "りんご";
printf("jp: strlen=%zu\n", strlen(jp));   // jp: strlen=9
```

日本語は 1 文字 3 バイトなので、strlen は 9 です（PHP の `strlen` と同じ。コンピュータの基礎コースの「文字コード」）。

### 文字列を == で比べてはいけない

```c
char a[10] = "abc";
char b[10] = "abc";
printf("a == b: %d   strcmp: %d\n", a == b, strcmp(a, b));
// a == b: 0   strcmp: 0
```

```text
warning: comparison between two arrays [-Warray-compare]
```

`a == b` は **番地を比べる** ので、中身が同じでも 0（偽）です。中身を比べるのは `strcmp`（同じなら **0** を返す）。Java の `==` と `equals`（Java コースのレッスン 2）の話は、ここから来ています。

## バッファオーバーフロー

配列の範囲を超えて **書き込む** と何が起きるか、実際に試しました。名前の欄の後ろに、管理者かどうかの印があるデータです。

```c
#include <stdio.h>
#include <string.h>

struct User {
    char name[8];      // 名前は 8 バイトまで
    int is_admin;      // そのすぐ後ろ
};

int main(void) {
    struct User u = { "", 0 };
    printf("前: is_admin=%d\n", u.is_admin);
    strcpy(u.name, "AAAAAAAA\x01");               // 9 文字 ＋ \0 ＝ 10 バイトを、8 バイトの場所に
    printf("後: name=%s is_admin=%d\n", u.name, u.is_admin);
    if (u.is_admin) printf("管理者としてログインしました！\n");
    return 0;
}
```

```text
前: is_admin=0
後: name=AAAAAAAA is_admin=1
管理者としてログインしました！
```

**名前を入れただけで、管理者になってしまいました**。

```text
メモリ:  [A][A][A][A][A][A][A][A] [01][00][00][00]
         └──── name（8 バイト）───┘ └── is_admin ──┘
                                     ↑ はみ出した \x01 と \0 がここに書き込まれた
```

`strcpy` は、**コピー先の大きさを確かめずに、`\0` が来るまで書き続けます**。8 バイトの name からはみ出した分が、すぐ後ろの is_admin を書き換えたのです。これが **バッファオーバーフロー** です。

利用者の入力を `strcpy` などでコピーするプログラムでは、攻撃者が **入力の長さと中身を工夫して、メモリの好きな場所を書き換えられます**。実際に、何十年にもわたって、OS やブラウザやサーバーの深刻な脆弱性の大きな原因になってきました。

### AddressSanitizer で見つける

`-fsanitize=address` を付けてコンパイルすると、はみ出した瞬間に止めて教えてくれます（別の、`char name[8]` に 21 バイト書き込む例です）。

```bash
gcc -g -fsanitize=address -o bof_asan bof.c && ./bof_asan
```

```text
==8312==ERROR: AddressSanitizer: stack-buffer-overflow on address 0x7f47eed00028 ...
WRITE of size 21 at 0x7f47eed00028 thread T0
    #0 ... in strcpy
    #1 ... in main bof.c:7
```

「**スタックのバッファから、はみ出しました**。21 バイト書き込みました。場所は bof.c の 7 行目の strcpy」。コンパイラ自身も、`warning: 'strcpy' writing 21 bytes into a region of size 8 overflows the destination` と警告していました。

### 安全な書き方

```c
char buf[16];
snprintf(buf, sizeof(buf), "合計 %d 円", 360);
printf("snprintf: %s\n", buf);                      // snprintf: 合計 360 円

snprintf(buf, sizeof(buf), "とても長いメッセージです");
printf("切り詰め: [%s] (%zu バイト)\n", buf, strlen(buf));   // 切り詰め: [とても長い] (15 バイト)
```

`snprintf` は、**書き込む先の大きさ（`sizeof(buf)`）を受け取って、それ以上は書きません**。入りきらない分は切り捨てて、最後に必ず `\0` を置きます（16 バイトの場所に、15 バイト ＋ `\0`）。

| ⚠️ 危ない | ✅ 代わり |
|---|---|
| `gets(buf)` | `fgets(buf, sizeof(buf), stdin)`（`gets` は危なすぎて C の規格から削除された） |
| `strcpy(dst, src)` | `snprintf(dst, sizeof(dst), "%s", src)` など、大きさを渡すもの |
| `strcat(dst, src)` | 残りの大きさを確かめる |
| `sprintf(buf, ...)` | `snprintf(buf, sizeof(buf), ...)` |
| `scanf("%s", buf)` | `scanf("%15s", buf)` のように最大の長さを書く |

⚠️ 日本語の文字列を途中で切ると、3 バイトの文字の途中で切れて **文字化け** することがあります（今回は「とても長い」の 5 文字 ＝ 15 バイトでちょうど切れました）。

## なぜ他の言語は安全なのか

| 言語 | 範囲外の読み書き |
|---|---|
| C | 止まらない（隣のメモリを読み書きしてしまう） |
| Python・Java・Go・JavaScript | 必ず確かめて、範囲外ならエラー |
| Rust | 必ず確かめて、範囲外なら panic（`get()` なら Option で返す） |

C 以外の言語は、配列を使うたびに「範囲の中か」を確かめる、わずかな手間を払う代わりに、バッファオーバーフローを根本から防いでいます。アメリカ政府なども、新しく作るソフトには Rust などの **メモリ安全な言語** を使うよう勧めています。

## AI のコードではこう出てくる

| 見かけたら | チェック |
|---|---|
| `char buf[256]; strcpy(buf, input);` | ⚠️ input が 256 バイト以上ならバッファオーバーフロー |
| `gets(...)` / `sprintf(...)` | ⚠️ 大きさを確かめない関数 |
| `for (i = 0; i <= n; i++) a[i] = ...` | ⚠️ `<=` だと 1 つはみ出す（よくある間違い） |
| `if (strcmp(a, b) == 0)` | ✅ 中身が同じ |
| `if (a == b)`（文字列） | ⚠️ 番地を比べている |
| `char s[3] = "abc";` | ⚠️ `\0` の場所が無い（4 バイト必要） |

```quiz
? C の `char s[] = "cat";` の sizeof(s) が 4 になる理由は？
- C は 1 文字に 4 バイト使うから
+ 文字列の終わりの印の `\0` が、最後に 1 バイト付くから
- 配列はいつも 4 バイトだから
> C の文字列は、最後に `\0` が付いた char の配列です。3 文字なら 4 バイト必要です。

? 8 バイトの name に、`strcpy` で 10 バイトの文字列をコピーしたら、すぐ後ろの is_admin が 0 から 1 に変わった。何が起きた？
+ 入りきらない分がはみ出して、隣のメモリを書き換えた（バッファオーバーフロー）
- strcpy が is_admin を自動で更新した
- コンパイラが is_admin を 1 に最適化した
> strcpy はコピー先の大きさを確かめないので、はみ出した分が隣の変数を壊しました。攻撃者はこれを使ってメモリを書き換えます。

? C で 2 つの文字列の中身が同じか確かめる正しい書き方は？
- `a == b`
+ `strcmp(a, b) == 0`
- `strlen(a) == strlen(b)`
> `==` は番地を比べます。strcmp は中身が同じなら 0 を返します。
```
