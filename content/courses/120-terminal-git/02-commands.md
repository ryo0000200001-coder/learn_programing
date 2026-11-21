---
title: よく使うコマンドと「危ないコマンド」
level: 1
minutes: 18
concepts: [tooling, security]
summary: ls・cd・mkdir・cp・mv・rm・cat・grep などの基本と、コマンドの読み方（オプション・引数）。PowerShell との違い、command not found と PATH、実行前に必ず止まるべきコマンド。
---
## このレッスンのゴール

- コマンドを「命令・オプション・引数」に分けて読める
- よく使うコマンドが何をするか分かり、PowerShell での書き方の違いを知っている
- `command not found` の原因（PATH）と、実行前に確認すべき危ないコマンドが分かる

## コマンドの形

```bash
ls   -la   src
│    │     └ 引数（何に対して）
│    └ オプション（どんなふうに）。- 1 つは 1 文字、-- 2 つは長い名前（--all）
└ 命令（何をする）
```

Python の関数で言うと、`ls(src, long=True, all=True)` のようなものです。

困ったら `コマンド --help`（PowerShell では `Get-Help コマンド`）で説明が出ます。

## 基本のコマンド

### 見る・移動する

| コマンド | 意味 | 例 |
|---|---|---|
| `pwd` | 今いる場所を表示 | |
| `ls` | 中身の一覧 | `ls -la`（隠しファイルも、詳しく） |
| `cd 場所` | 移動 | `cd src`、`cd ..`、`cd ~` |
| `cat ファイル` | 中身を表示 | `cat README.md` |
| `head` / `tail` | 先頭／末尾だけ表示 | `tail -n 20 app.log`（最後の 20 行） |

```text
$ ls -la
total 12
drwxr-xr-x 3 ryo ryo 4096 Nov 21 17:36 .
drwxr-xr-x 3 ryo ryo 4096 Nov 21 17:36 ..
-rw-r--r-- 1 ryo ryo    0 Nov 21 17:36 README.md
drwxr-xr-x 2 ryo ryo 4096 Nov 21 17:36 src
```

先頭の `d` はディレクトリ、`-` はファイル。`rwx` は読む・書く・実行するの権限（コンピュータの基礎コースのレッスン 2 の 8 進数 `755` の正体）です。

### 作る・コピー・移動・削除

| コマンド | 意味 | 例 |
|---|---|---|
| `mkdir` | ディレクトリを作る | `mkdir -p data/2026`（途中のディレクトリもまとめて） |
| `touch` | 空のファイルを作る | `touch .env` |
| `cp` | コピー | `cp .env.example .env`、`cp -r src backup`（ディレクトリごと） |
| `mv` | 移動・名前の変更 | `mv old.py new.py` |
| `rm` | 削除 | `rm memo.txt`、`rm -r build`（ディレクトリごと） |

⚠️ ターミナルの `rm` は **ゴミ箱に入りません**。消したら基本的に戻せません。

### 探す

| コマンド | 意味 | 例 |
|---|---|---|
| `grep` | ファイルの中から文字列を探す | `grep -rn "print" src`（-r：中のディレクトリも、-n：行番号も） |
| `find` | ファイルを名前などで探す | `find . -name "*.py"` |
| `which` | コマンドの本体の場所 | `which python` |

```text
$ grep -rn "print" project
project/src/main.py:1:print('hi')
```

「`project/src/main.py` の 1 行目にある」と読みます。

### つなぐ：パイプとリダイレクト

| 記号 | 意味 | 例 |
|---|---|---|
| `\|` | 左の出力を、右の入力に渡す | `cat app.log \| grep ERROR`（エラーの行だけ） |
| `>` | 出力をファイルに書く（**上書き**） | `pip freeze > requirements.txt` |
| `>>` | 出力をファイルの末尾に追加 | `echo ".env" >> .gitignore` |
| `&&` | 左が成功したら右を実行 | `cd site && ls` |

## PowerShell では

Windows の PowerShell にも `ls`・`cd`・`pwd`・`cat`・`cp`・`mv`・`rm` という名前は用意されていますが、**中身は別の命令** なので、オプションが違います。

| やりたいこと | Bash（Mac・Linux・Git Bash） | PowerShell |
|---|---|---|
| ディレクトリごと削除 | `rm -rf build` | `Remove-Item -Recurse -Force build` |
| 文字列を探す | `grep -rn "print" src` | `Select-String -Path src\*.py -Pattern "print"` |
| 環境変数を設定 | `export API_KEY=xxx` | `$env:API_KEY = "xxx"` |
| 空のファイル | `touch .env` | `New-Item .env` |
| 続けて実行 | `cd site && ls` | PowerShell 7 なら同じ。Windows 標準の 5.1 では `cd site; ls` |

AI が出したコマンドが PowerShell でエラーになったら、**「Bash 向けのコマンドでは？」** と疑い、Git Bash で実行するか、「PowerShell 用に書き直して」と頼みましょう。
このリポジトリの `open-site.bat` は、さらに古い **コマンドプロンプト**（cmd）向けの書き方（`rem`・`%~dp0` など）です。

## `command not found` と PATH

```text
bash: nosuchcmd: command not found
'python' は、内部コマンドまたは外部コマンド、操作可能なプログラムまたはバッチ ファイルとして認識されていません。
```

コマンドを打つと、ターミナルは **環境変数 `PATH` に書かれたディレクトリを順番に探して**、同じ名前のプログラムを見つけて実行します。見つからないと `command not found` です。

```bash
which python3        # /usr/local/bin/python3   ← 見つかった本体の場所
echo $PATH           # 探す場所の一覧（: 区切り。Windows は ; 区切り）
```

| 原因 | 対処 |
|---|---|
| そもそもインストールしていない | インストールする |
| インストールしたが、ターミナルを開き直していない | ターミナルを閉じて開き直す（PATH は起動時に読まれる） |
| インストール時に「PATH に追加」をしなかった | Python なら、インストーラーの「Add python.exe to PATH」にチェックを入れて入れ直す |
| 名前が違う | Mac/Linux は `python3`、Windows は `python` や `py` のことが多い |

## ⚠️ 実行前に必ず止まるべきコマンド

AI が出したコマンドでも、次のものは **何が起きるかを理解してから** 実行します。

| コマンド | 何が危ないか |
|---|---|
| `rm -rf 場所` | 確認なしでディレクトリごと消す。`rm -rf /`、`rm -rf ~`、`rm -rf $DIR/`（変数が空だと `/` になる）は特に致命的 |
| `sudo ...` | 管理者の権限で実行する。システム全体を変えられる |
| `curl ... \| bash`／`irm ... \| iex`（PowerShell） | ネットから取ってきたプログラムを、中身を見ずに実行する |
| `chmod -R 777` | 誰でも読み書き・実行できるようにする |
| `> 大事なファイル` | 中身を空にして上書きする |
| `git reset --hard`・`git push --force` | 次のレッスン以降で説明（作業が消える・履歴を上書きする） |

迷ったら「このコマンドは何を消す・変える可能性がある？」と AI に聞き返しましょう。

## AI のコードではこう出てくる

```bash
python -m venv .venv && source .venv/bin/activate && pip install -r requirements.txt
```

`&&` で 3 つをつないでいます。① `.venv` という場所に Python の作業用の環境を作る → ② それを有効にする → ③ 必要なライブラリを入れる。
Windows の PowerShell では ② が `.venv\Scripts\Activate.ps1` になります。**同じことを OS ごとに書き分けている** だけなので、どの部分が何をしているかを分けて読めば怖くありません。

```quiz
? `cp -r src backup` の意味は？
- backup を src に移動する
+ src ディレクトリを中身ごと backup という名前でコピーする
- src を削除して backup を作る
> `cp` はコピー、`-r` はディレクトリの中身ごと（recursive）。引数は「コピー元 コピー先」の順です。

? Python をインストールしたのに `python: command not found` と出た。よくある原因は？
- Python のコードに間違いがある
+ ターミナルを開き直していない、または PATH に追加されていない
- パソコンのメモリが足りない
> ターミナルは PATH に書かれた場所からコマンドを探します。インストール後にターミナルを開き直すか、PATH の設定を確認します。

? AI が `curl -fsSL https://example.com/install.sh | bash` を出してきた。どう考える？
- 公式っぽい URL なら何も考えずに実行してよい
+ ネットのプログラムを中身を見ずに実行するので、配布元が信頼できるかを確認してから実行する
- `curl` はファイルを表示するだけなので安全
> `| bash` は、ダウンロードしたものをそのまま実行します。公式のインストール方法でもよく使われますが、URL が本当に公式のものかを確かめてから実行します。
```
