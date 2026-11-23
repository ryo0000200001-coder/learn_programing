---
title: 実際のスクリプトを読む ― バックアップを自動で取る
level: 3
minutes: 18
concepts: [tooling, reading, errors, ai_coding]
summary: AI に頼んだら出てきそうな「SQLite のバックアップを取って、古いものを消す」スクリプトを 1 行ずつ読む。実際に動かした出力つき。読めるようになったうえで、潜んでいた 1 つの弱点を見つけて直す。
---
## このレッスンのゴール

- このコースの知識だけで、40 行ほどのシェルスクリプトを 1 行ずつ説明できる
- スクリプトを動かす前に、何が消えたり変わったりするかを予想できる
- よくある弱点を見つけ、直し方を提案できる

## 頼んだこと

> SQLite のデータベース（app.db）を毎日バックアップするシェルスクリプトを作って。バックアップは新しい 5 個だけ残して、古いものは消して。

出てきた（という想定の）スクリプトです。

```bash
#!/usr/bin/env bash
# SQLite のデータベースをバックアップし、新しいものを 5 個だけ残す
set -euo pipefail

DB_PATH="${DB_PATH:-./app.db}"
BACKUP_DIR="${BACKUP_DIR:-./backups}"
KEEP="${KEEP:-5}"

log() {
  echo "[$(date '+%H:%M:%S')] $*"
}

if [[ ! -f "$DB_PATH" ]]; then
  log "データベースが見つかりません: $DB_PATH" >&2
  exit 1
fi

mkdir -p "$BACKUP_DIR"
dest="$BACKUP_DIR/app-$(date +%Y-%m-%d).db"

python3 -c "import sqlite3, sys; sqlite3.connect(sys.argv[1]).backup(sqlite3.connect(sys.argv[2]))" "$DB_PATH" "$dest"
log "バックアップしました: $dest ($(du -h "$dest" | cut -f1))"

count=0
for f in $(ls -1t "$BACKUP_DIR"/app-*.db); do
  count=$((count + 1))
  if (( count > KEEP )); then
    log "古いバックアップを削除: $f"
    rm -- "$f"
  fi
done

log "完了（残り $(ls "$BACKUP_DIR"/app-*.db | wc -l) 個）"
```

✏️ 先を読む前に、**このスクリプトを実行すると何が起きるか**、上から順に自分の言葉で説明してみましょう。

## 1 行ずつ読む

### 準備（1〜7 行目）

```bash
#!/usr/bin/env bash
set -euo pipefail
```

bash で動かす（レッスン 1）。失敗・未定義の変数・パイプの途中の失敗で止まる（レッスン 6）。

```bash
DB_PATH="${DB_PATH:-./app.db}"
BACKUP_DIR="${BACKUP_DIR:-./backups}"
KEEP="${KEEP:-5}"
```

**環境変数があればそれを使い、無ければ初期値**（レッスン 2 の `${x:-値}`）。`KEEP=10 ./backup.sh` と実行すれば、10 個残すように変えられます。

### 関数（9〜11 行目）

```bash
log() {
  echo "[$(date '+%H:%M:%S')] $*"
}
```

時刻を付けて表示する関数（レッスン 4）。`$*` は渡された引数をまとめた 1 つの文字列で、表示するだけなのでここではこれで十分です。

### 確認（13〜16 行目）

```bash
if [[ ! -f "$DB_PATH" ]]; then
  log "データベースが見つかりません: $DB_PATH" >&2
  exit 1
fi
```

データベースのファイルが **無ければ**（`!`）、エラーの出力へメッセージを出して（`>&2`、レッスン 5）、終了コード 1 で終わる（レッスン 3）。

```text
$ DB_PATH=./none.db ./backup.sh
[15:21:42] データベースが見つかりません: ./none.db
（終了コード 1）
```

### バックアップ（18〜22 行目）

```bash
mkdir -p "$BACKUP_DIR"
dest="$BACKUP_DIR/app-$(date +%Y-%m-%d).db"
```

保存先のディレクトリを作り（`-p` はすでにあってもエラーにしない）、`./backups/app-2026-11-23.db` のような名前を作る。

```bash
python3 -c "import sqlite3, sys; ..." "$DB_PATH" "$dest"
```

**シェルから Python を 1 行だけ実行** しています。`sqlite3` の `backup()` は、データベースを使っている途中でも安全にコピーできる方法です（ただの `cp` だと、書き込みの途中を写して壊れたコピーになることがある）。シェルの変数は、Python の `sys.argv` として渡しています（レッスン 4 の引数と同じ仕組み）。
シェルが苦手なこと（データベースの扱い）だけを Python に任せる、という **よい分担** です。

### 古いものを消す（24〜31 行目）

```bash
count=0
for f in $(ls -1t "$BACKUP_DIR"/app-*.db); do
  count=$((count + 1))
  if (( count > KEEP )); then
    log "古いバックアップを削除: $f"
    rm -- "$f"
  fi
done
```

`ls -1t` は「1 行に 1 つ、**新しい順**（`-t`）」。上から数えて、`KEEP`（5）個目より後ろを消します。

## 実際に動かす

`backups/` に 11 月 10 日〜22 日の古いバックアップを 7 つ置いて、実行しました。

```text
[03:00:00] バックアップしました: ./backups/app-2026-11-23.db (8.0K)
[03:00:00] 古いバックアップを削除: ./backups/app-2026-11-14.db
[03:00:00] 古いバックアップを削除: ./backups/app-2026-11-12.db
[03:00:00] 古いバックアップを削除: ./backups/app-2026-11-10.db
[03:00:00] 完了（残り 5 個）
```

```text
$ ls backups
app-2026-11-16.db
app-2026-11-18.db
app-2026-11-20.db
app-2026-11-22.db
app-2026-11-23.db
```

新しく 1 つ増えて 8 個になり、古い 3 つが消えて、5 個になりました。頼んだとおりに動いています。

## 弱点を探す

ちゃんと動きましたが、このコースの知識で見ると、**1 か所、気になるところ** があります。

```bash
for f in $(ls -1t "$BACKUP_DIR"/app-*.db); do
```

`$(ls ...)` の結果を、引用符なしで `for` に渡しています。レッスン 4 で見た「`for f in $(ls)` はスペースを含むファイル名で分かれる」形です。
実際に、スペースを含む `./My Backups` に同じ 7 つのファイルを置いて試しました。

```text
$ BACKUP_DIR="./My Backups" ./backup.sh
[...] バックアップしました: ./My Backups/app-2026-11-23.db (8.0K)
[...] 古いバックアップを削除: Backups/app-2026-11-20.db
rm: cannot remove 'Backups/app-2026-11-20.db': No such file or directory
（終了コード 1）
```

ファイル名が `./My` と `Backups/app-...db` に分かれたので、**数え方が狂い**（`./My` と `Backups/...` を別々に 1 個と数えた）、**本当は残すはずの 11 月 20 日の分を消そうとしました**。今回は分かれた名前のファイルが存在しなかったので `rm` が失敗し、`set -e`（レッスン 6）のおかげでそこで止まりましたが、たまたま助かっただけです。

### 直し方

新しい順に並べる必要があるので、グロブ（`for f in *`）をそのまま使うだけでは足りません。ファイル名がこの形（`app-YYYY-MM-DD.db`）に決まっているなら、**名前の順＝日付の順** なので、グロブが使えます。

```bash
backups=("$BACKUP_DIR"/app-*.db)           # 配列に入れる（スペースがあっても 1 つずつ）
total=${#backups[@]}                       # 個数
for ((i = 0; i < total - KEEP; i++)); do   # 古い方（名前の順で前）から、多い分だけ
  log "古いバックアップを削除: ${backups[i]}"
  rm -- "${backups[i]}"
done
```

| 書き方 | 意味 | Python で言うと |
|---|---|---|
| `arr=(a b c)` | 配列 | `arr = ["a", "b", "c"]` |
| `("$DIR"/app-*.db)` | グロブの結果を、そのまま配列に（分かれない） | `sorted(Path(dir).glob("app-*.db"))` |
| `${#arr[@]}` | 個数 | `len(arr)` |
| `${arr[i]}` | i 番目 | `arr[i]` |

同じ `./My Backups2` で直した版を動かすと、11 月 10・12・14 日の 3 つが正しく消えて、残り 5 個になりました。

もう 1 つの考え方は、**ここだけ Python にする** ことです。このスクリプトはすでにバックアップで Python を使っているので、全部を Python で書いても自然です。

```python
backups = sorted(Path(backup_dir).glob("app-*.db"))
for old in backups[:-keep]:
    old.unlink()
```

**シェルは「コマンドを順に実行する」のが得意で、データを扱うのは苦手**。ファイル名を数えて並べ替えるような処理が増えてきたら、Python に任せるのが読みやすく安全です。

## AI のスクリプトを動かす前のチェックリスト

| 確認 | このスクリプトでは |
|---|---|
| ① `set -euo pipefail` はあるか | ✅ |
| ② 何を **消す・上書きする** か | `rm` は `backups/` の中の `app-*.db` だけ。✅ |
| ③ 変数が空のときに危なくないか | `BACKUP_DIR` は初期値があり、`rm` は `"$f"` に `--` 付き。✅ |
| ④ 変数は引用符で囲まれているか | `$(ls ...)` の 1 か所だけ ⚠️ |
| ⑤ 入力（環境変数・引数）で動きが変わるところ | `DB_PATH`・`BACKUP_DIR`・`KEEP` |
| ⑥ まず安全な場所で試したか | 試し用のディレクトリで実行して確認した |

毎日動かすには、cron（Linux・Mac の「決まった時間に実行」の仕組み）や GitHub Actions の `schedule`（公開とクラウドのコースのレッスン 7）に登録します。

```text
0 3 * * * cd /home/ryo/app && ./backup.sh >> backup.log 2>&1
（毎日 3 時 0 分に実行し、出力もエラーも backup.log に追記）
```

```quiz
? このスクリプトを `KEEP=10 ./backup.sh` で実行すると？
+ 新しいバックアップを 10 個まで残す
- 10 回バックアップを取る
- エラーになる（KEEP はスクリプトの中で決めているので）
> `KEEP="${KEEP:-5}"` は「環境変数 KEEP があればそれを、無ければ 5」です。前に書いた KEEP=10 が使われます。

? バックアップに `cp` ではなく Python の `sqlite3` の `backup()` を使っている理由は？
- cp では日本語のファイル名が扱えないから
+ データベースを使っている途中でも、安全に正しいコピーが取れるから
- cp よりファイルが小さくなるから
> 書き込みの途中のファイルをそのままコピーすると、壊れたコピーになることがあります。backup() はそれを避けてコピーします。

? `for f in $(ls -1t "$BACKUP_DIR"/app-*.db)` の弱点は？
- 新しい順に並ばない
+ BACKUP_DIR にスペースが含まれると、ファイル名が分かれてしまう
- ファイルが 5 個未満だとエラーになる
> `$(ls ...)` の結果を引用符なしで使うと、スペースで分かれます（単語分割）。グロブを配列に入れるか、その部分を Python で書くと安全です。
```
