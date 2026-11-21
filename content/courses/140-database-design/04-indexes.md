---
title: インデックス ― 本の索引で速く探す
level: 3
minutes: 20
concepts: [database, performance]
summary: インデックスの仕組みと、EXPLAIN QUERY PLAN で「全部読んでいるか、索引を使っているか」を確かめる方法。複合インデックスの列の順番、効かない書き方、書き込みが遅くなる代償。
---
## このレッスンのゴール

- インデックスが何で、なぜ検索が速くなるのかを説明できる
- `EXPLAIN QUERY PLAN` の結果（`SCAN` と `SEARCH`）を読める
- 複合インデックスの列の順番と、インデックスが使われない書き方が分かる

バックエンドコースのレッスン 14 で「インデックスを付けたら速くなった」ことを見ました。ここでは **どこに付けるか・本当に使われているか** を確かめる方法を学びます。

## インデックス ＝ 本の索引

1000 ページの本で「正規化」という言葉を探すとき、1 ページ目から全部読むのは大変です。巻末の **索引** を見れば、「正規化 …… 213 ページ」とすぐ分かります。

データベースの **インデックス** も同じで、**ある列の値を並べた、別の小さな表** です。値が並んでいるので、辞書を引くように素早く探せます（中身は B-tree という木の形）。

## 実際に測る

100 万件の注文テーブルで試しました。

```python
conn.execute("""CREATE TABLE orders (
    id INTEGER PRIMARY KEY, user_id INTEGER NOT NULL,
    status TEXT NOT NULL, created_at TEXT NOT NULL)""")
# … 100 万行を入れる …

sql = "SELECT * FROM orders WHERE user_id = 1234"
```

| | 1 回の検索にかかった時間 |
|---|---|
| インデックスなし | 約 50 ミリ秒 |
| `CREATE INDEX idx_orders_user_id ON orders(user_id)` の後 | 約 0.035 ミリ秒（**約 1400 倍速い**） |

（この環境での測定。数字は機械によって変わりますが、桁違いに速くなることは変わりません）

## EXPLAIN QUERY PLAN：どう探すつもりか聞く

SQL の前に `EXPLAIN QUERY PLAN` を付けると、データベースが **どうやって探すつもりか**（実行計画）を教えてくれます。

```python
for row in conn.execute("EXPLAIN QUERY PLAN " + sql):
    print(row[3])
```

| インデックス | 表示 | 意味 |
|---|---|---|
| なし | `SCAN orders` | テーブルを **全部** 1 行ずつ読む（本を 1 ページ目から全部読む） |
| あり | `SEARCH orders USING INDEX idx_orders_user_id (user_id=?)` | 索引を使って **探す** |

**`SCAN` が出たら、インデックスが使われていない** と読みます。PostgreSQL では `EXPLAIN`（`EXPLAIN ANALYZE` で実際の時間も）を使い、`Seq Scan` が全件、`Index Scan` が索引です。

## 複合インデックス：列の順番が大事

```sql
SELECT * FROM orders WHERE user_id = 1234 AND status = 'paid' ORDER BY created_at
```

`user_id` だけのインデックスだと、こうなりました。

```text
SEARCH orders USING INDEX idx_orders_user_id (user_id=?)
USE TEMP B-TREE FOR ORDER BY          ← 並べ替えのために、別に作業している
```

複数の列をまとめたインデックスを作ります。

```sql
CREATE INDEX idx_orders_user_status_created ON orders(user_id, status, created_at);
```

```text
SEARCH orders USING COVERING INDEX idx_orders_user_status_created (user_id=? AND status=?)
```

`user_id` と `status` で絞り込み、`created_at` の順番もインデックスの中で決まっているので、**並べ替えの作業が消えました**。`COVERING INDEX` は「必要な列が全部インデックスに入っていたので、テーブル本体を見に行かずに済んだ」という意味です。

### ⚠️ 左から順にしか使えない

複合インデックスは、**電話帳の「名字 → 名前」の順** のようなものです。名字が分からないと、名前だけでは引けません。

```sql
-- インデックスは (user_id, status, created_at)
SELECT * FROM orders WHERE status = 'paid' AND created_at >= '2026-12-01'
```

```text
SCAN orders          ← 先頭の user_id を使っていないので、索引が使えない
```

| WHERE で使う列 | `(user_id, status, created_at)` のインデックスは |
|---|---|
| `user_id` | ✅ 使える |
| `user_id` と `status` | ✅ 使える |
| `user_id` と `status` と `created_at` | ✅ 使える |
| `status` だけ／`status` と `created_at` | ❌ 使えない（先頭が無い） |

**よく一緒に絞り込む列を、絞り込みに使う順（等しい `=` の列を先、範囲 `>=` や並べ替えの列を後）に並べる** のが基本です。

## インデックスが使われない書き方

実際に `EXPLAIN QUERY PLAN` で `SCAN` になったものです。

| 書き方 | なぜ使えない | 直し方 |
|---|---|---|
| `WHERE created_at LIKE '%-12-%'` | 先頭が `%`（何でもよい）だと、索引のどこから探せばよいか分からない | `created_at >= '2026-12-01' AND created_at < '2027-01-01'` |
| `WHERE user_id + 0 = 1234` | 列に計算をすると、索引の値とそのまま比べられない | `WHERE user_id = 1234` |
| `WHERE lower(email) = ?` | 関数を通すのも同じ | 保存するときに小文字にそろえる（または関数のインデックスを作る） |

## インデックスの代償

インデックスはタダではありません。行を追加・変更するたびに、**索引も書き直す** 必要があります。

| 30 万行の INSERT | かかった時間 |
|---|---|
| インデックスなし | 約 0.14 秒 |
| インデックス 3 つ | 約 1.28 秒（約 9 倍） |

| 付けるとよい列 | 付けなくてよい列 |
|---|---|
| `WHERE` でよく絞り込む列 | ほとんど検索に使わない列 |
| `JOIN` でつなぐ外部キー（`posts.user_id` など） | 行がとても少ないテーブル（全部読んでも一瞬） |
| `ORDER BY` でよく並べ替える列 | 値の種類が少ない列だけ（`status` だけ、など。複合の 2 番目以降なら有効） |

主キーと `UNIQUE` の列には、自動でインデックスが作られます。**外部キーには自動では作られない**（SQLite・PostgreSQL）ので、JOIN に使う `user_id` などには自分で付けるのが定番です。

## AI のコードではこう出てくる

| 見かけたら | チェック |
|---|---|
| `user_id INTEGER REFERENCES users(id)` はあるが、`CREATE INDEX ... (user_id)` が無い | ⚠️ JOIN や「この人の注文一覧」が、データが増えると遅くなる |
| 全部の列に `CREATE INDEX` | ⚠️ 書き込みが遅くなり、容量も増える。使う検索に合わせて付ける |
| `WHERE name LIKE '%' \|\| ? \|\| '%'`（部分一致の検索） | 普通のインデックスは効かない。件数が多いなら全文検索の仕組み（SQLite の FTS5 など）を検討 |
| マイグレーションに `CREATE INDEX` がある | ✅ どの検索を速くするためか、PR の説明で確認 |
| 「遅い」と言われてインデックスを足した | ✅ 足す前と後で `EXPLAIN` と時間を測っているか |

```quiz
? `EXPLAIN QUERY PLAN` の結果が `SCAN orders` だった。意味は？
+ テーブルの全部の行を順番に読んでいる（インデックスを使っていない）
- インデックスを使って素早く探している
- SQL に文法の間違いがある
> SCAN は全件を読むこと。`SEARCH ... USING INDEX` と出ていれば、索引を使っています。

? インデックス `(user_id, status, created_at)` があるとき、使われ**ない**検索は？
- `WHERE user_id = 1`
- `WHERE user_id = 1 AND status = 'paid'`
+ `WHERE status = 'paid'`
> 複合インデックスは左の列から順にしか使えません。先頭の user_id を使わない検索では索引を引けません。

? 「とりあえず全部の列にインデックスを付けよう」という案の問題点は？
- インデックスは 1 テーブルに 1 つしか作れない
+ INSERT や UPDATE のたびに全部の索引を書き直すので、書き込みが遅くなり容量も増える
- 検索がかえって遅くなる
> 実際に、インデックス 3 つで INSERT が約 9 倍遅くなりました。よく使う検索に合わせて、必要なものだけ付けます。
```
