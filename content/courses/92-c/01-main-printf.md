---
title: main 関数と printf ― C のプログラムの形
level: 1
minutes: 15
concepts: [basics, tooling, errors]
summary: #include と int main(void)、printf の書式（%d・%s・%f）、gcc でのコンパイルと -Wall の警告、return 0 と終了コード。書式を間違えるとプログラムが落ちることを実際に確かめる。
---
## このレッスンのゴール

- `#include`・`int main(void)`・`return 0` の意味を説明できる
- `printf` の書式指定（`%d`・`%s`・`%f`）を読める
- `gcc -Wall` の警告を読み、警告を無視してはいけない理由が分かる

## C 言語とは

**C 言語** は 1970 年代に作られた言語で、Python・Go・Java・JavaScript など **多くの言語の祖先** です。今も、OS（Linux・Windows の中心部分）、マイコン（家電・車）、データベース（SQLite）、Python 自身（いちばん使われている CPython は C で書かれている）などで使われています。

C は **コンピュータの仕組みに近い** 言語で、メモリを直接扱えます。そのぶん速く、そのぶん **間違えると危ない** 言語でもあります。このコースでは、C を読めるようになると同時に、**他の言語がなぜ今の形になっているのか**（Rust の所有権、Java の参照、Python のガベージコレクション）を理解することを目指します。

## 最初のプログラム

```c
#include <stdio.h>

int add(int a, int b) {
    return a + b;
}

int main(void) {
    int price = 120;
    int count = 3;
    printf("こんにちは、%s さん\n", "Ryo");
    printf("合計 %d 円\n", price * count);
    printf("%d %d %.2f\n", 7 / 2, 7 % 2, 7 / 2.0);
    printf("add: %d\n", add(2, 3));
    return 0;
}
```

```text
こんにちは、Ryo さん
合計 360 円
3 1 3.50
add: 5
```

（このコースの出力と警告は、すべて gcc 13 でコンパイルして実際に実行したものです）

| C | 意味 | Python で言うと |
|---|---|---|
| `#include <stdio.h>` | 標準入出力の **ヘッダーファイル**（関数の宣言の一覧）を読み込む | `import ...` |
| `int add(int a, int b)` | int を 2 つ受け取って int を返す関数。**型が先**（Java と同じ） | `def add(a: int, b: int) -> int:` |
| `int main(void)` | 入口。`void` は「引数無し」 | `if __name__ == "__main__":` |
| `printf("合計 %d 円\n", x)` | 書式付きで表示 | `print(f"合計 {x} 円")` |
| `return 0;` | main の戻り値が **終了コード**。0 は成功（シェルコースのレッスン 3） | `sys.exit(0)` |

Java の `System.out.printf`、Go の `fmt.Printf`、PHP の `printf` は、どれも **この C の printf を真似したもの** です。

### printf の書式

| 書式 | 型 | 例 |
|---|---|---|
| `%d` | 整数（int） | `printf("%d", 360)` → `360` |
| `%s` | 文字列 | `printf("%s", "Ryo")` → `Ryo` |
| `%f` / `%.2f` | 小数（double） | `printf("%.2f", 3.5)` → `3.50` |
| `%c` | 1 文字 | `printf("%c", 'A')` → `A` |
| `%zu` | 大きさ（size_t。レッスン 2） | |
| `%p` | ポインタ（メモリの番地。レッスン 3） | |
| `\n` | 改行 | |

## コンパイルして実行する

```bash
gcc -Wall -Wextra -o hello hello.c    # コンパイルして hello という実行ファイルを作る
./hello                               # 実行
echo $?                               # 0（main の return 0）
```

| 部分 | 意味 |
|---|---|
| `gcc` | C のコンパイラ（他に `clang`。Windows では Visual Studio の `cl` や MinGW の gcc） |
| `-Wall -Wextra` | **警告を（ほぼ）全部出す**。必ず付ける |
| `-o hello` | 作る実行ファイルの名前 |
| `-g` | デバッグ用の情報を入れる（エラーの場所が行番号で分かる） |
| `-O2` | 速くなるように最適化する |

C は、Go や Rust と同じく、ソースコードを **その OS・その CPU 用の機械語** に変換します。できた実行ファイルは、C を入れていないパソコンでも動きます（同じ OS なら）。

大きなプロジェクトでは、ファイルがたくさんあるので、**Makefile**（`make` というコマンドでビルドの手順を自動で実行する）や **CMake** が使われます。

## 警告を無視すると何が起きるか

わざと間違いを入れたプログラムです。

```c
#include <stdio.h>
int main(void) {
    int price = 120;
    double rate;
    printf("%d\n", "120");
    printf("%s\n", price);
    printf("%f\n", rate);
    if (price = 0) printf("zero\n");
    return 0;
}
```

```text
warn.c:5:14: warning: format '%d' expects argument of type 'int', but argument 2 has type 'char *' [-Wformat=]
warn.c:6:14: warning: format '%s' expects argument of type 'char *', but argument 2 has type 'int' [-Wformat=]
warn.c:8:9: warning: suggest parentheses around assignment used as truth value [-Wparentheses]
warn.c:7:5: warning: 'rate' is used uninitialized [-Wuninitialized]
```

| 行 | 間違い |
|---|---|
| 5・6 | 書式と値の型が合っていない（`%d` に文字列、`%s` に数） |
| 7 | `rate` に値を入れないまま使っている（中身は **何が入っているか分からない**。Go のゼロ値のような決まりは無い） |
| 8 | `==`（比べる）のつもりで `=`（代入）を書いている。price に 0 が入り、条件はいつも偽 |

**どれも警告で、エラーではありません**。コンパイルはでき、実行ファイルもできます。実行すると…

```text
$ ./warn
Segmentation fault
（終了コード 139）
```

**プログラムが落ちました**。`%s` は「文字列の場所」を受け取るはずのところに、`120` という数を渡されたので、**メモリの 120 番地** を読みに行き、OS に止められたのです（**セグメンテーション違反**。レッスン 3）。

Python なら型の間違いは `TypeError` で教えてくれますし、Go や Rust ならコンパイルエラーで止めてくれました。**C は「警告はしたけど、あとはあなたの責任で」** という言語です。だから、**C では警告を 0 にするのが鉄則** です。`-Werror` を付けると、警告をエラーとして扱ってくれます。

## AI のコードではこう出てくる

| 見かけたら | 読み方・チェック |
|---|---|
| `#include <stdlib.h>` / `<string.h>` | malloc など（レッスン 5）／文字列の関数（レッスン 4） |
| `#include "myheader.h"`（`""`） | 自分のプロジェクトのヘッダーファイル |
| `int main(int argc, char *argv[])` | コマンドラインの引数を受け取る main（argc が数、argv が中身） |
| `#define MAX_LEN 100` | 定数（コンパイル前に文字を置き換える **マクロ**） |
| `gcc ... -lm` | 数学のライブラリ（`math.h`）をつなげる |
| `if (x = 0)` | ⚠️ 代入になっている。`==` のつもりでは？ |
| コンパイルで警告が出ている | ⚠️ C では無視しない |

```quiz
? C の `int main(void) { ... return 0; }` の `return 0` は何を表す？
+ プログラムが成功して終わったことを表す終了コード
- main が 0 回実行されたこと
- 戻り値が無いこと
> main の戻り値は終了コードになります。0 が成功、0 以外が失敗です（シェルコースで学んだ $?）。

? `printf("%d 円\n", price);` の `%d` は何？
- 小数を表示する書式
+ 整数をその場所に入れて表示する書式
- 改行
> `%d` は整数、`%s` は文字列、`%f` は小数です。値の型と書式が合わないと、正しく表示されないか、プログラムが落ちることもあります。

? gcc で警告が出たが、実行ファイルはできた。どうするのがよい？
- 動くなら気にしない
+ 警告の原因を直す（C では警告が実行時の落ちるバグにつながりやすい）
- 警告を消すオプションを付ける
> 書式の間違いの警告を無視したプログラムは、実際にセグメンテーション違反で落ちました。C では警告を 0 にするのが鉄則です。
```
