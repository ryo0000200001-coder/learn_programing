---
title: テーブルと主キー ― 何を 1 行にするか
level: 1
minutes: 15
concepts: [database, types]
summary: 「もの」ごとにテーブルを作り、1 行を 1 件にする。列の型、NOT NULL、主キーの選び方（連番・UUID・メールアドレスはなぜダメか）。
---
## このレッスンのゴール

- アプリの「もの」から、テーブルと列を考えられる
- 主キーの役割と、連番・UUID の違いを説明できる
- `CREATE TABLE` を読んで、どんなデータが入るのか・入らないのかが分かる

バックエンドコースのレッスン 7（SQL と CRUD）で、テーブル・行・列・主キーという言葉と、`SELECT`・`INSERT` を学びました。このコースでは、**どんなテーブルを作るか（設計）** を考えます。

## まず「もの」を見つける

ブログアプリを作るとしたら、登場する「もの」（**エンティティ** と呼びます）は何でしょうか。

| もの | 持っている情報 |
|---|---|
| ユーザー | 名前・メールアドレス・登録日 |
| 投稿 | タイトル・本文・書いた人・投稿日 |
| コメント | 本文・書いた人・どの投稿へのコメントか |
| タグ | 名前（「日記」「Python」） |

基本は **1 つの「もの」＝ 1 つのテーブル、1 件 ＝ 1 行** です。テーブル名は複数形（`users`・`posts`）にすることが多いです。

## 列を決める

```sql
CREATE TABLE users (
  id          INTEGER PRIMARY KEY,
  name        TEXT    NOT NULL,
  email       TEXT    NOT NULL UNIQUE,
  created_at  TEXT    NOT NULL DEFAULT CURRENT_TIMESTAMP
);
```

| 書き方 | 意味 |
|---|---|
| `INTEGER` / `TEXT` | 列の型（整数・文字列）。他に `REAL`（小数）など |
| `NOT NULL` | 空（NULL）を許さない |
| `UNIQUE` | 同じ値を 2 行に入れられない |
| `DEFAULT ...` | 省略したときの値。`CURRENT_TIMESTAMP` は今の日時 |
| `PRIMARY KEY` | 主キー（下で説明） |

```python
conn.execute("INSERT INTO users (name, email) VALUES (NULL, 'z@example.com')")
# sqlite3.IntegrityError: NOT NULL constraint failed: users.name

conn.execute("INSERT INTO users (name, email) VALUES ('X', 'hana@example.com')")   # すでにある
# sqlite3.IntegrityError: UNIQUE constraint failed: users.email
```

（実行して確認したエラーです）**データベース自身にルールを持たせておくと、プログラムのバグがあってもおかしなデータが入りません**。

### ⚠️ SQLite の型はゆるい

```python
conn.execute("CREATE TABLE t (n INTEGER)")
conn.execute("INSERT INTO t VALUES ('abc')")        # エラーにならない！
conn.execute("SELECT n, typeof(n) FROM t").fetchall()   # [('abc', 'text')]
```

SQLite は、`INTEGER` の列に文字列を入れても受け入れてしまいます（PostgreSQL や MySQL ではエラーになります）。
厳しくしたいときは、テーブルの最後に `STRICT` を付けます。

```python
conn.execute("CREATE TABLE s (n INTEGER) STRICT")
conn.execute("INSERT INTO s VALUES ('abc')")
# sqlite3.IntegrityError: cannot store TEXT value in INTEGER column s.n
```

## 主キー：1 行を 1 つに決める名札

**主キー（PRIMARY KEY）** は、行を 1 つに特定するための列です。**重複せず、空でもなく、変わらない** 値でなければいけません。

| 方式 | 例 | よいところ | 注意 |
|---|---|---|---|
| **連番** | `1, 2, 3, …` | 短い・速い・分かりやすい | URL に出すと「全部で何件あるか」「他の人の番号」が推測できる |
| **UUID** | `3f2b8c1e-...`（16 進数 32 文字） | 推測されにくい。データベースに聞かずに作れる | 長い。並び順に意味が無い（`UUIDv7` は作成順に並ぶ） |
| メールアドレスなど（**自然キー**） | `ryo@example.com` | 意味がある | ⚠️ **変わる** ことがある。変えると関係するすべての行を直す必要がある |

メールアドレスや電話番号は、**主キーにせず `UNIQUE` の列にする** のが定番です。主キーは、意味を持たない連番か UUID にします。

SQLite では `INTEGER PRIMARY KEY` と書くと、自動で連番が振られます（バックエンドコースで見た `AUTOINCREMENT` は「消した番号を二度と使わない」という追加の約束）。

## 1 つのマスに 1 つの値

```text
❌ よくない                              ✅ よい
id | name | tags                          posts                post_tags
1  | Ryo  | 日記,Python,旅行              id | title             post_id | tag
                                          1  | 京都で Python      1       | Python
                                                                 1       | 旅行
```

1 つのマスに `日記,Python,旅行` のように複数の値を入れると、「Python のタグが付いた投稿」を探すのも、タグの名前を変えるのも大変です。
複数あるものは **別のテーブルに分けます**（次のレッスンの「多対多」）。

## AI のコードではこう出てくる

| 見かけたら | チェック |
|---|---|
| `email TEXT PRIMARY KEY` | ⚠️ メールアドレスを主キーにしている。変更できるようにするなら連番か UUID に |
| `NOT NULL` がほとんど無い | ⚠️ 必須の項目まで空を許している |
| `tags TEXT` にカンマ区切りで保存 | ⚠️ 1 マスに複数の値。別テーブルに |
| `price REAL` | ⚠️ お金を小数で持っている（コンピュータの基礎コースの「数値の落とし穴」）。整数で持つ |
| `created_at TEXT` に `2026-11-21 17:36:18` | SQLite には日付の型が無いので、文字列で持つのが普通。並べ替えられる形（年-月-日）になっているか |

```quiz
? ユーザーのテーブルの主キーとして、いちばん適切なのは？
- メールアドレス
- 名前
+ 意味を持たない連番か UUID
> メールアドレスは変わることがあり、名前は重複します。主キーは変わらない値にし、メールアドレスは `UNIQUE` の列にします。

? `email TEXT NOT NULL UNIQUE` の列に、すでにあるメールアドレスを INSERT するとどうなる？
+ `UNIQUE constraint failed` のエラーになり、入らない
- 古い行が上書きされる
- 警告だけ出て、2 行目として入る
> UNIQUE は重複を許しません。データベースがエラーにして守ってくれます。

? 投稿にタグを複数付けたい。設計としてよいのは？
- `tags` 列に「日記,Python」とカンマ区切りで入れる
- `tag1`・`tag2`・`tag3` の列を作る
+ 投稿とタグの組み合わせを入れる別のテーブルを作る
> 1 マスに複数の値を入れたり、列を増やしたりすると、検索や変更が大変になります。組み合わせのテーブル（次のレッスン）で表します。
```
