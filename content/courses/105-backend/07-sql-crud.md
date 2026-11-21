---
title: データベースの基本 ― SQL で CRUD
level: 2
minutes: 20
concepts: [database, backend, security]
summary: テーブル・行・列の考え方と、SELECT・INSERT・UPDATE・DELETE。プレースホルダとトランザクション。
---
## このレッスンのゴール

- テーブル・行・列・主キーを説明できる
- SELECT / INSERT / UPDATE / DELETE の 4 つを読める
- `?`（プレースホルダ）を使う理由と、トランザクションの意味が分かる

## データベース＝鍵付きの巨大な表計算ソフト

これまでのレッスンでは、タスクを Python の辞書に入れていました。これだと **サーバーを再起動すると全部消えます**。
データを確実に残し、たくさんの人が同時に読み書きしても壊れないようにするのが **データベース** です。

最もよく使われるのは **リレーショナルデータベース**（RDB）で、データを表の形で持ちます。

`tasks` テーブル

| id（主キー） | title | status | due |
|---|---|---|---|
| 1 | 会場を探す | todo | 2027-01-10 |
| 2 | チラシを作る | done | NULL |

| 用語 | 意味 |
|---|---|
| テーブル | 1 種類のデータの表（tasks・users …） |
| 行（レコード） | 1 件のデータ |
| 列（カラム） | 項目。列ごとに型が決まっている |
| 主キー（PRIMARY KEY） | 行を 1 つに特定する番号。重複しない |
| NULL | 値が無いこと（Python の None） |

代表的な RDB：**PostgreSQL**（本番の定番）、**MySQL**、**SQLite**（1 ファイルで動く。Python に最初から入っている）。

## SQL：データベースへの命令文

Python の標準ライブラリ `sqlite3` で、実際に動かせます（このレッスンのコードはすべて実行して確認済み）。

### テーブルを作る

```python
import sqlite3
conn = sqlite3.connect("app.db")

conn.execute("""
CREATE TABLE tasks (
    id      INTEGER PRIMARY KEY AUTOINCREMENT,
    title   TEXT    NOT NULL,
    status  TEXT    NOT NULL DEFAULT 'todo',
    due     TEXT
)""")
```

`NOT NULL` は「空は許さない」、`DEFAULT 'todo'` は「省略したら todo」、`AUTOINCREMENT` は「id を自動で 1, 2, 3 … と振る」。
バリデーション（レッスン 6）とは別に、**データベース自身にもルールを持たせる** のが安全です。

### C：追加（INSERT）

```python
cur = conn.execute("INSERT INTO tasks (title, due) VALUES (?, ?)", ("会場を探す", "2027-01-10"))
print(cur.lastrowid)   # 1 ← 振られた id
conn.commit()
```

### R：取得（SELECT）

```python
rows = conn.execute(
    "SELECT id, title, status FROM tasks WHERE status = ? ORDER BY id",
    ("todo",),
).fetchall()
# [(1, '会場を探す', 'todo'), (2, 'チラシを作る', 'todo')]
```

SELECT は英語の文のように読めます。「tasks から、status が todo の行の、id・title・status を、id 順で選ぶ」。

| 句 | 意味 | Python で言うと |
|---|---|---|
| `SELECT 列` | どの列を | `[(t["id"], t["title"]) for t in ...]` |
| `FROM テーブル` | どの表から | `tasks` |
| `WHERE 条件` | どの行を | `if t["status"] == "todo"` |
| `ORDER BY 列` | 並び順 | `sorted(..., key=...)` |
| `LIMIT 20` | 何件まで | `[:20]` |

### U：更新（UPDATE）と D：削除（DELETE）

```python
conn.execute("UPDATE tasks SET status = ? WHERE id = ?", ("done", 1))
conn.execute("DELETE FROM tasks WHERE id = ?", (2,))
conn.commit()
```

⚠️ **`WHERE` を書き忘れると、全部の行が変更・削除されます**。AI のコードでも人間のコードでも、UPDATE と DELETE を見たら必ず WHERE を確かめましょう。

## `?`（プレースホルダ）を必ず使う

```python
name = "x' OR '1'='1"

# ❌ 危険：文字列に直接埋め込む
conn.execute(f"SELECT title FROM tasks WHERE title = '{name}'")
# → SELECT title FROM tasks WHERE title = 'x' OR '1'='1'
# → 「または 1=1（常に真）」になり、全件が返ってしまう

# ⭕ 安全：? で値を別に渡す
conn.execute("SELECT title FROM tasks WHERE title = ?", (name,))
# → 「x' OR '1'='1」という名前のタスクを探すだけ（0 件）
```

実際に試すと、危険な書き方では他人の「秘密のタスク」まで返ってきました。これが **SQL インジェクション** という、昔から最も多い攻撃の 1 つです（レッスン 11 で詳しく）。
**SQL に f-string や `+` で値を埋め込んでいたら、AI のコードでも必ず直してもらいましょう。**

## トランザクション：全部やるか、全部やらないか

銀行の振り込みは「A の口座から引く」と「B の口座に足す」の 2 つで 1 セットです。片方だけ成功すると、お金が消えたり増えたりします。

```python
try:
    with conn:                     # トランザクションの開始
        conn.execute("UPDATE accounts SET balance = balance - 1000 WHERE id = 1")
        conn.execute("UPDATE accounts SET balance = balance + 1000 WHERE id = 2")
    # ブロックを無事に抜けたら commit（確定）
except Exception:
    # 途中でエラーが起きたら rollback（全部なかったことに）
    ...
```

`commit` で確定、`rollback` で取り消し。**途中で失敗したら全部なかったことになる** のがトランザクションです（途中で例外を起こして、変更が取り消されることを確認済み）。

## SQL 以外のデータベース（NoSQL）

| 種類 | 例 | 特徴 |
|---|---|---|
| ドキュメント型 | **Firestore**（popup2027）、MongoDB | JSON のような形で保存。表の形に縛られない |
| キー・バリュー型 | Redis | 名前と値の組。とても速い。キャッシュによく使う（レッスン 14） |

迷ったら、まずは PostgreSQL や SQLite のような RDB から、が一般的です。

```quiz
? `DELETE FROM tasks` を実行すると？
- 何も起きない
+ tasks テーブルの全部の行が消える
- tasks テーブル自体が消える
> WHERE が無いので全行が対象です。テーブル自体を消すのは DROP TABLE です。

? SQL に値を入れるとき `?` を使う一番の理由は？
+ SQL インジェクションを防ぐため
- SQL が短くなるから
- 処理が速くなるから
> 値を命令文と分けて渡すので、値の中の記号が命令として解釈されません。

? トランザクションの途中でエラーが起きたら？
- 成功した部分だけ保存される
+ それまでの変更が全部取り消される（rollback）
- データベースが壊れる
> 全部やるか、全部やらないか、がトランザクションです。
```
