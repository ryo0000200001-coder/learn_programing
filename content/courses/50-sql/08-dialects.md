---
title: データベースごとの違い ― SQLite・PostgreSQL・MySQL
level: 3
minutes: 18
concepts: [database, deploy, strings]
summary: 同じ SQL を SQLite・PostgreSQL 17・MySQL 8.4 で実際に実行して比べた。割り算、文字列のつなぎ方、大文字小文字、文字数、GROUP BY、連番、RETURNING、NULL の並び順、日付の計算。手元の SQLite で動いた SQL が本番で動かない理由。
---
## このレッスンのゴール

- SQL には「方言」があり、同じ SQL でもデータベースによって結果やエラーが違うことを説明できる
- よく問題になる違い（割り算・文字列・大文字小文字・GROUP BY・連番）を知っている
- 「手元の SQLite では動いたのに、本番の PostgreSQL でエラー」のときに疑う場所が分かる

公開とクラウドのコースのレッスン 1 で、「開発は SQLite、本番は PostgreSQL」のように環境で違うことがある、と学びました。ここでは、実際に **SQLite・PostgreSQL 17・MySQL 8.4** の 3 つを用意して、同じ SQL を実行してみた結果を見ます。

## 割り算

```sql
SELECT 7 / 2;
```

| SQLite | PostgreSQL | MySQL |
|---|---|---|
| `3` | `3` | `3.5000` |

SQLite と PostgreSQL は、**整数どうしの割り算は整数**（小数点以下を切り捨て）になります。Python 2 の昔の `7 / 2` と同じで、今の Python の `7 // 2` に当たります。

```sql
SELECT 7 / 2.0;               -- 3.5（どちらかを小数にする）
SELECT CAST(7 AS REAL) / 2;   -- 3.5（SQLite。PostgreSQL は 7::numeric / 2 など）
```

⚠️ 「平均の評価」「割合（何 %）」を計算する SQL で、`SUM(good) / COUNT(*)` が **いつも 0** になるのはこのためです。

## 文字列をつなぐ

```sql
SELECT 'Ryo' || 'さん';
```

| SQLite | PostgreSQL | MySQL |
|---|---|---|
| `Ryoさん` | `Ryoさん` | `0` |

MySQL では、`||` は **「または」（OR）** の意味になるので、文字列が数として扱われて `0` になりました。

```sql
SELECT CONCAT('Ryo', 'さん');   -- 3 つとも Ryoさん
```

## 大文字と小文字

```sql
SELECT 'Ryo' = 'ryo';
```

| SQLite | PostgreSQL | MySQL |
|---|---|---|
| `0`（違う） | `f`（違う） | `1`（**同じ**） |

MySQL は、初期設定の照合順序（文字の比べ方のルール）で **大文字と小文字を区別しません**。逆に、`LIKE` は SQLite では英字の大文字小文字を区別せず（`'Ryo' LIKE 'ryo'` が真）、PostgreSQL では区別します（区別しないなら `ILIKE`）。

⚠️ ログインのメールアドレスやユーザー名の重複チェックで、データベースを変えたら挙動が変わる、ということが起きます。保存するときに小文字にそろえておくのが確実です。

## 文字数とバイト数

```sql
SELECT length('こんにちは'), char_length('こんにちは');
```

| SQLite | PostgreSQL | MySQL |
|---|---|---|
| `length` は `5`（`char_length` は無い） | `5` と `5` | `15` と `5` |

MySQL の `length` は **バイト数**（UTF-8 の日本語は 1 文字 3 バイト。コンピュータの基礎コースの「文字コード」）を返します。文字数なら `char_length` です。

（ちなみに、MySQL に接続するコマンドの文字コードの設定を UTF-8 にし忘れると、`char_length` まで 15 になりました。文字化けと同じで、接続の文字コードも大事です）

## GROUP BY に無い列

レッスン 3 で見たとおりです。

```sql
SELECT category, name, MAX(price) FROM products GROUP BY category;
```

| SQLite | PostgreSQL | MySQL |
|---|---|---|
| 動く（最大の行の name を出す） | **エラー** | **エラー**（`only_full_group_by`） |

**SQLite だけが特別に許している** 書き方です。SQLite で作ったアプリを PostgreSQL に移すと、よくここでエラーになります。

## 自動の連番

レッスンのテーブルは `id INTEGER PRIMARY KEY` で作りました。これに id を書かずに INSERT すると…

| SQLite | PostgreSQL | MySQL |
|---|---|---|
| 自動で連番が振られる | **エラー**：`null value in column "id" ... violates not-null constraint` | **エラー**：`Field 'id' doesn't have a default value` |

`INTEGER PRIMARY KEY` が自動の連番になるのは **SQLite のルール** です。

| データベース | 自動の連番の書き方 |
|---|---|
| SQLite | `id INTEGER PRIMARY KEY` |
| PostgreSQL | `id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY`（古い書き方は `SERIAL`） |
| MySQL | `id INT AUTO_INCREMENT PRIMARY KEY` |

PostgreSQL で `GENERATED ALWAYS AS IDENTITY` にして試すと、`RETURNING id` で `1` が返りました。

## RETURNING と UPSERT

| | SQLite | PostgreSQL | MySQL |
|---|---|---|---|
| `INSERT ... RETURNING id` | ✅ | ✅ | ❌ 文法エラー（`LAST_INSERT_ID()` を使う） |
| 重複したら更新 | `ON CONFLICT ... DO UPDATE` | `ON CONFLICT ... DO UPDATE` | `ON DUPLICATE KEY UPDATE` |

（レッスン 5。PostgreSQL の ON CONFLICT と、MySQL の ON DUPLICATE KEY UPDATE も実行して確かめました）

## NULL の並び順

```sql
SELECT city FROM customers ORDER BY city;
```

| SQLite | PostgreSQL | MySQL |
|---|---|---|
| NULL が **先頭** | NULL が **最後** | NULL が **先頭** |

決めたいときは `ORDER BY city NULLS FIRST` / `NULLS LAST`（SQLite・PostgreSQL）と書きます。

## 日付の計算

```sql
-- 2026-11-23 の 7 日後
SELECT date('2026-11-23', '+7 days');               -- SQLite
SELECT DATE '2026-11-23' + 7;                       -- PostgreSQL
SELECT DATE_ADD('2026-11-23', INTERVAL 7 DAY);      -- MySQL
```

3 つとも `2026-11-30` でした。日付の扱いは方言が特に多いところです。SQLite には日付の型が無く、文字列（`'2026-11-23'`）で持つのが普通です（データベース設計のコースのレッスン 1）。

## 名前の囲み方

| データベース | 列名・テーブル名を囲む記号 |
|---|---|
| SQLite・PostgreSQL | `"order"`（ダブルクォート） |
| MySQL | `` `order` ``（バッククォート） |

`order` や `user` のように **SQL の予約語と同じ名前** の列やテーブルを使うと、囲まないとエラーになります。名前は `orders`・`users` のように予約語を避けるのが楽です。

## 方言とどう付き合うか

| 方法 | |
|---|---|
| **開発と本番で同じデータベースを使う** | Docker（公開とクラウドのコースのレッスン 6）で手元にも PostgreSQL を立てる。いちばん確実 |
| ORM を使う | 多くの違いを吸収してくれる（データベース設計のコースのレッスン 6）。ただし生の SQL の部分は自分で気をつける |
| AI に頼むとき、データベースの名前とバージョンを伝える | 「PostgreSQL 17 で動く SQL にして」 |
| テストを本番と同じデータベースで回す | CI（公開とクラウドのコースのレッスン 7）で PostgreSQL のコンテナを使う |

## AI のコードではこう出てくる

| 見かけたら | チェック |
|---|---|
| `SUM(x) / COUNT(*)` で割合 | ⚠️ SQLite・PostgreSQL では整数の割り算で 0 になりうる。`* 1.0` や `CAST` |
| `'a' \|\| 'b'` を MySQL で | ⚠️ 0 になる。`CONCAT` |
| `id INTEGER PRIMARY KEY` を PostgreSQL のマイグレーションに | ⚠️ 自動で連番にならない |
| `SELECT a, b, MAX(c) ... GROUP BY a` | ⚠️ SQLite でしか動かない |
| `WHERE email = ?` で重複チェック（MySQL） | 大文字小文字を区別しない。意図どおりか |
| `SERIAL` / `AUTO_INCREMENT` / `AUTOINCREMENT` | それぞれ PostgreSQL / MySQL / SQLite の連番。どのデータベース向けか分かる |

```quiz
? SQLite で `SELECT 7 / 2` を実行した結果は？
+ 3
- 3.5
- 4
> SQLite と PostgreSQL では、整数どうしの割り算は小数点以下が切り捨てられます。小数が欲しければ `7 / 2.0` のように片方を小数にします（MySQL は 3.5000 でした）。

? 手元の SQLite で動いた `SELECT category, name, MAX(price) FROM products GROUP BY category` が、本番の PostgreSQL でエラーになった。理由は？
- PostgreSQL は MAX が使えないから
+ GROUP BY に無い列（name）を SELECT に書くのを、SQLite だけが特別に許しているから
- 本番のデータが空だから
> PostgreSQL と MySQL では、SELECT に書けるのは GROUP BY の列か集計関数だけです。グループごとの最大の行はウィンドウ関数（レッスン 7）で取ります。

? MySQL で `SELECT 'Ryo' || 'さん'` の結果は？
- `Ryoさん`
+ `0`
- エラー
> MySQL では `||` は「または（OR）」の意味です。文字列をつなぐには `CONCAT('Ryo', 'さん')` を使います。
```
