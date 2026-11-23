---
title: SELECT と WHERE ― 欲しい行と列を取り出す
level: 1
minutes: 18
concepts: [database, conditionals, operators]
summary: このコースで使う「お店のデータ」の紹介と、SELECT・WHERE の読み方。AND と OR の優先順位、IN・BETWEEN・LIKE、そして NULL が = で見つからない理由。
---
## このレッスンのゴール

- `SELECT 列 FROM テーブル WHERE 条件` を読み、どの行のどの列が返るか説明できる
- `AND` と `OR` を混ぜた条件を、正しく読める
- `NULL` を `IS NULL` で探す理由と、`<>` で NULL の行が消える落とし穴が分かる

バックエンドコースのレッスン 7 で、SQL の CRUD をざっと学びました。このコースでは、**AI が書いた SQL を 1 行ずつ読める** ようになることを目指して、くわしく見ていきます。

## このコースで使うデータ

小さなお店のデータベースです。テーブルの作り方は、データベース設計のコースで学んだ形です。

```text
customers（お客さん）          products（商品）
id | name | city | joined_at   id | name        | category | price
1  | Ryo  | 東京 | 2026-01-10  1  | りんご       | 果物     | 120
2  | Hana | 大阪 | 2026-02-03  2  | バナナ       | 果物     | 90
3  | Ken  | 東京 | 2026-03-15  3  | 牛乳         | 飲み物   | 200
4  | Mio  | NULL | 2026-05-20  4  | コーヒー豆   | 飲み物   | 1200
5  | Sora | 福岡 | 2026-09-01  5  | 食パン       | パン     | 250
                                6  | クロワッサン | パン     | 180

orders（注文）                          order_items（注文の中身）
id | customer_id | ordered_at | status    order_id | product_id | qty
1  | 1           | 2026-10-01 | paid      1        | 1          | 3
2  | 1           | 2026-10-15 | paid      1        | 3          | 1
3  | 2           | 2026-10-20 | cancelled 2        | 4          | 1
4  | 3           | 2026-11-02 | paid      3        | 5          | 2
5  | 2           | 2026-11-05 | paid      4        | 1          | 5
6  | 4           | 2026-11-10 | shipped   4        | 2          | 6
                                          4        | 6          | 2
                                          5        | 3          | 2
                                          5        | 5          | 1
                                          6        | 4          | 2
```

Mio さんの `city` は **NULL**（まだ登録されていない）、Sora さんは **まだ 1 回も注文していない** ところがポイントです。後のレッスンで効いてきます。

このコースの結果は、すべてこのデータを Python の `sqlite3` に入れて、実際に実行したものです。

## SELECT：どの列を

```sql
SELECT name, price FROM products WHERE price >= 200;
```

```text
name       | price
牛乳       | 200
コーヒー豆 | 1200
食パン     | 250
```

| 部分 | 意味 |
|---|---|
| `SELECT name, price` | 取り出す **列** |
| `FROM products` | どのテーブルから |
| `WHERE price >= 200` | どの **行** を（条件に合うものだけ） |

`SELECT *` は「全部の列」です。Python で言うと、こんな感じです。

```python
[(p["name"], p["price"]) for p in products if p["price"] >= 200]
```

⚠️ `ORDER BY`（次のレッスン）を書かないと、**行の順番は決まっていません**。たまたま id 順に見えても、データベースの都合で変わることがあります。

## 計算と別名

```sql
SELECT name, price, price * 1.1 AS with_tax FROM products WHERE category = '飲み物';
```

```text
name       | price | with_tax
牛乳       | 200   | 220.00000000000003
コーヒー豆 | 1200  | 1320.0
```

`AS with_tax` は、結果の列に付ける **別名** です。そして、`220.00000000000003` に注目してください。コンピュータの基礎コースの「0.1 + 0.2 問題」が、SQL でも起きています。お金は整数で計算しましょう。

## WHERE の書き方

| 書き方 | 意味 |
|---|---|
| `=` / `<>`（または `!=`） | 等しい／等しくない（Python の `==` ではなく `=` 1 つ） |
| `<` `<=` `>` `>=` | 大小 |
| `AND` / `OR` / `NOT` | かつ／または／ではない |
| `IN ('果物', 'パン')` | どれかと等しい |
| `BETWEEN 100 AND 200` | 100 以上 200 以下（両端を含む） |
| `LIKE '%パン%'` | 「パン」を含む（`%` は何文字でも、`_` は 1 文字） |
| `IS NULL` / `IS NOT NULL` | 値が無い／ある |

文字列は **シングルクォート `'...'`** で囲みます。ダブルクォート `"..."` は、データベースによっては列の名前の意味になります。

```sql
SELECT name, price FROM products WHERE price BETWEEN 100 AND 200;
-- りんご 120 / 牛乳 200 / クロワッサン 180   ← 200 も入る
```

`--` から行末まではコメントです。

## ⚠️ AND と OR の優先順位

「果物かパンで、200 円より高いもの」を探したつもりの SQL です。

```sql
SELECT name, category, price FROM products
WHERE category = '果物' OR category = 'パン' AND price > 200;
```

```text
りんご | 果物 | 120
バナナ | 果物 | 90
食パン | パン | 250
```

120 円のりんごが出てきました。**`AND` は `OR` より先に計算される** ので、こう読まれています。

```text
category = '果物'  OR  (category = 'パン' AND price > 200)
```

掛け算が足し算より先なのと同じです。意図どおりにするには、かっこを付けます。

```sql
WHERE (category = '果物' OR category = 'パン') AND price > 200;
-- 食パン | パン | 250   ← これだけ
```

**AND と OR を混ぜるときは、必ずかっこを付ける** のが安全です（Python の `and`・`or` も同じ優先順位です）。

## NULL は「わからない」

```sql
SELECT name, city FROM customers WHERE city = NULL;
-- （0 件）

SELECT name, city FROM customers WHERE city IS NULL;
-- Mio | NULL
```

NULL は「値が無い・わからない」という特別な状態です。「わからないもの」と比べた結果も「わからない」になるので、`city = NULL` は **どの行でも正しくならず**、0 件になります。**NULL を探すときは必ず `IS NULL`** です。

```sql
SELECT 1 + NULL, NULL = NULL;
-- NULL | NULL   ← 計算しても、比べても NULL
```

### ⚠️ `<>` で NULL の行が消える

「東京以外のお客さん」を探します。

```sql
SELECT name, city FROM customers WHERE city <> '東京';
```

```text
Hana | 大阪
Sora | 福岡
```

**Mio さんがいません**。Mio さんの city は NULL なので、`NULL <> '東京'` も「わからない」になり、条件に合わなかったのです。NULL の人も含めたいなら、こう書きます。

```sql
WHERE city <> '東京' OR city IS NULL
```

### NULL の代わりの値を出す

```sql
SELECT name, COALESCE(city, '未登録') AS city FROM customers;
-- ...
-- Mio | 未登録
```

`COALESCE(a, b)` は「a が NULL なら b」。Python の `city if city is not None else "未登録"` です。

## 他の言語では

| | SQL | Python |
|---|---|---|
| 等しい | `=` | `==` |
| 等しくない | `<>` / `!=` | `!=` |
| 値が無い | `IS NULL` | `is None` |
| 含まれる | `IN (1, 2)` | `in (1, 2)` |
| かつ・または | `AND` / `OR` | `and` / `or` |

## AI のコードではこう出てくる

| 見かけたら | チェック |
|---|---|
| `WHERE a = 1 OR b = 2 AND c = 3` | ⚠️ かっこが無い。AND が先に計算される |
| `WHERE x = NULL` / `WHERE x != NULL` | ⚠️ いつも 0 件。`IS NULL` / `IS NOT NULL` |
| `WHERE status <> 'cancelled'` | NULL の行が含まれなくなる。status に NULL がありうるか確認 |
| `SELECT *` | 列が増えると遅く・重くなる。必要な列だけ書くと読みやすい |
| `WHERE name LIKE '%' \|\| ? \|\| '%'` | 部分一致の検索。値は `?` で渡している（セキュリティのコース） |

```quiz
? `WHERE category = '果物' OR category = 'パン' AND price > 200` は、どう読まれる？
- （果物 または パン）かつ 200 円より高い
+ 果物、または（パン かつ 200 円より高い）
- エラーになる
> AND は OR より先に計算されます。意図どおりにするには、`(category = '果物' OR category = 'パン') AND price > 200` とかっこを付けます。

? city が NULL のお客さんを探す正しい書き方は？
- `WHERE city = NULL`
- `WHERE city = ''`
+ `WHERE city IS NULL`
> NULL と `=` で比べた結果は NULL（わからない）になり、条件に合いません。`IS NULL` を使います。

? `WHERE city <> '東京'` で、city が NULL の Mio さんは結果に入る？
+ 入らない
- 入る
- エラーになる
> `NULL <> '東京'` は NULL になり、条件に合わないので消えます。含めたいなら `OR city IS NULL` を足します。
```
