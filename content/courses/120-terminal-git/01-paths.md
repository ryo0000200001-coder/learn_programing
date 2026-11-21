---
title: ディレクトリとパス ― 今どこにいる？
level: 1
minutes: 14
concepts: [tooling, io]
summary: ターミナルの「現在地」と、ファイルの場所を表すパス。絶対パス・相対パス・`.` と `..`・`~`、Windows と Mac/Linux の書き方の違い。
---
## このレッスンのゴール

- 「カレントディレクトリ（現在地）」の意味を説明できる
- 絶対パスと相対パスを読み分けられ、`.`・`..`・`~` の意味が分かる
- Windows の `C:\Users\...` と、Git Bash の `/c/Users/...` が同じ場所だと分かる

## ターミナルとは

**ターミナル**（黒い画面）は、マウスの代わりに **文字でコンピュータに命令する** 画面です。AI が「これを実行して」と出してくるコマンドは、ここに打ち込みます。

| Windows でよく使うもの | 特徴 |
|---|---|
| **PowerShell** | Windows の標準。`C:\Users\ryo>` のように表示される |
| **Git Bash** | Git と一緒に入る。Mac・Linux と同じコマンド（Bash）が使える |
| VS Code のターミナル | 中で PowerShell か Git Bash などを選んで使う |

AI の説明や、ネットの記事のコマンドは **Mac・Linux 向け（Bash）が多い** です。Windows では Git Bash を使うと、そのまま動くことが多くなります。

## フォルダ ＝ ディレクトリ

ターミナルの世界では、フォルダのことを **ディレクトリ** と呼びます。ディレクトリの中にディレクトリが入り、**木（ツリー）** のような形になっています。

```text
C:\                           ← いちばん上（ルート）
└── Users
    └── ryo                   ← ホームディレクトリ（自分専用の場所）
        ├── Desktop
        ├── Documents
        └── learn_programing  ← このサイトのリポジトリ
            ├── content
            │   └── courses
            ├── site
            │   └── index.html
            └── tools
                └── build.py
```

## 現在地：カレントディレクトリ

ターミナルは、いつも **どこかのディレクトリの中にいます**。これを **カレントディレクトリ**（作業ディレクトリ）と呼びます。

```bash
pwd                    # 今どこにいるか（print working directory）
# /c/Users/ryo/learn_programing
```

PowerShell では `pwd`、または画面の左の `PS C:\Users\ryo\learn_programing>` を見れば分かります。

`python tools/build.py` のようなコマンドは、**現在地から見た場所** を探します。違うディレクトリにいると、こうなります。

```text
python: can't open file 'C:\\Users\\ryo\\tools\\build.py': [Errno 2] No such file or directory
```

「`C:\Users\ryo` の中に `tools\build.py` は無い」＝ **いる場所が違う** というエラーです。`cd learn_programing` で移動してから実行し直します。

## 絶対パスと相対パス

**パス** は、ファイルやディレクトリの場所を表す文字列です。

| 種類 | 例 | 意味 |
|---|---|---|
| **絶対パス** | `C:\Users\ryo\learn_programing\site\index.html` | ルートから全部たどった住所。どこにいても同じ場所を指す |
| **相対パス** | `site\index.html` | **現在地から** たどった道順。いる場所によって指す先が変わる |

### 相対パスの記号

| 記号 | 意味 | 例 |
|---|---|---|
| `.` | 今いるディレクトリ | `./build.py`（ここにある build.py） |
| `..` | 1 つ上のディレクトリ | `../site`（1 つ上に戻ってから site へ） |
| `~` | ホームディレクトリ | `~/Desktop`（= `C:\Users\ryo\Desktop`） |

```bash
cd ~/learn_programing/tools    # ここに移動して
ls ..                          # 1 つ上（learn_programing）の中身
# content  site  tools  ...
python build.py                # tools の中なので、そのまま書ける
python ../tools/build.py       # 上に戻ってから tools へ（同じファイル）
```

## Windows と Mac/Linux の書き方の違い

| | Windows（PowerShell） | Mac・Linux・Git Bash |
|---|---|---|
| 区切り文字 | `\`（バックスラッシュ。日本語キーボードでは `¥` に見える） | `/`（スラッシュ） |
| ルート | `C:\`（ドライブごと） | `/` |
| ホーム | `C:\Users\ryo` | Mac：`/Users/ryo`、Linux：`/home/ryo` |
| Git Bash での C ドライブ | — | `/c/Users/ryo` |
| 大文字・小文字 | 区別しない（`README.md` と `readme.md` は同じ） | 区別する（Mac は初期設定では区別しない） |

⚠️ 大文字・小文字の違いは、Windows で動いたのにサーバー（Linux）で `No such file` になる、という形でよく問題になります。`import` するファイル名は、大文字・小文字まで正確に書きましょう。

### Python のコードではどう書く？

```python
from pathlib import Path

base = Path(__file__).parent          # このファイルがあるディレクトリ
data = base / "data" / "items.json"   # / でつなげば、OS に合った区切りになる
print(data.resolve())                 # 絶対パスにする
```

`Path(__file__).parent` は「このプログラムのファイルがある場所」です。**どこから実行しても同じファイルを指せる** ので、AI のコードでよく見かけます。このサイトの `tools/build.py` も、この書き方で `content/` を探しています。

## スペースを含むパス

```bash
cd my folder        # bash: cd: too many arguments  ← 「my」と「folder」の 2 つと思われた
cd "my folder"      # ✅ 引用符でくくる
cd my\ folder       # ✅ Bash では \ でスペースを「ただの文字」にできる
```

ターミナルは **スペースで区切って** 命令を読むので、スペースを含むパスは `"..."` でくくります。`C:\Program Files` などでよく出会います。

## AI のコードではこう出てくる

| 見かけたら | 意味 |
|---|---|
| `cd your-project` | 「自分のプロジェクトのディレクトリに移動して」。名前は自分の環境に合わせて読み替える |
| `./venv/bin/activate`（Mac/Linux）／`.\venv\Scripts\activate`（Windows） | 同じことを OS ごとに書いたもの |
| `open("data.csv")` | 相対パス。**実行したときの現在地** から探す。現在地が違うと見つからない |
| `Path(__file__).parent / "data.csv"` | このファイルの隣を探す。どこから実行しても同じ |
| `C:\\Users\\...` | Python の文字列の中の `\` は 2 つ重ねる（または `r"C:\Users\..."`） |

```quiz
? `python tools/build.py` を実行したら `No such file or directory` と出た。まず疑うことは？
+ 今いるディレクトリ（カレントディレクトリ）が違う
- Python が壊れている
- build.py の中身が間違っている
> 相対パスは現在地から探します。`pwd` で現在地を確認し、リポジトリのディレクトリに `cd` してから実行します。

? 今 `learn_programing/tools` にいるとき、`../site/index.html` が指すのは？
- `learn_programing/tools/site/index.html`
+ `learn_programing/site/index.html`
- `site/index.html`（ルート直下）
> `..` で 1 つ上（learn_programing）に戻ってから、site/index.html へ進みます。

? Git Bash の `/c/Users/ryo/Desktop` と同じ場所は？
- `/Users/ryo/Desktop`
+ `C:\Users\ryo\Desktop`
- `~/c/Desktop`
> Git Bash では、C ドライブを `/c` と書きます。区切りの `/` と `\` が違うだけで、同じ場所です。
```
