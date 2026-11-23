---
title: サブクエリと WITH ― SQL を組み立てて読む
level: 3
minutes: 18
concepts: [database, functions, reading]
summary: SQL の中に SQL を入れるサブクエリ（WHERE の中・IN・EXISTS）と、名前を付けて段階的に書く WITH（CTE）。長い SQL を「部品」に分けて読む方法と、NOT IN に NULL が混ざると 0 件になる罠。
---
## このレッスンのゴール

- `WHERE` の中のサブクエリ・`IN`・`EXISTS` を読める
- `WITH` で書かれた長い SQL を、部品ごとに分けて読める
- `NOT IN` に NULL が混ざると結果が 0 件になる理由が分かり、`NOT EXISTS` を使える

## サブクエリ：SQL の中の SQL

「平均より高い商品」を出します。

```sql
SELECT name, price FROM products
WHERE price > (SELECT AVG(price) FROM products);
-- コーヒー豆 | 1200
```

かっこの中の `SELECT AVG(price) FROM products` が **先に計算されて**（340）、外の SQL は `WHERE price > 340` として動きます。Python で言うと、こうです。

```python
avg = sum(p["price"] for p in products) / len(products)
[p for p in products if p["price"] > avg]
```

### IN と組み合わせる

```sql
SELECT name FROM customers
WHERE id IN (SELECT customer_id FROM orders WHERE status = 'paid');
-- Ryo / Hana / Ken
```

かっこの中は「paid の注文をしたお客さんの id の一覧」です。外の SQL はその一覧に入っている人を選びます。

## EXISTS：「あるかどうか」だけを見る

```sql
SELECT name FROM customers c
WHERE NOT EXISTS (
  SELECT 1 FROM orders o WHERE o.customer_id = c.id
);
-- Sora
```

| 部分 | 意味 |
|---|---|
| `EXISTS (...)` | かっこの中の SQL が **1 行でも返せば真** |
| `NOT EXISTS (...)` | 1 行も返さなければ真 |
| `SELECT 1` | 返す中身は何でもよい（あるかどうかしか見ないので、`1` と書く習慣） |
| `o.customer_id = c.id` | **外の行（c）を使っている**。お客さん 1 人ずつについて、「その人の注文はある？」を調べる |

外の行を使うサブクエリを **相関サブクエリ** と呼びます。Python の `any()` に近い考え方です。

```python
[c for c in customers if not any(o["customer_id"] == c["id"] for o in orders)]
```

## ⚠️ NOT IN と NULL

同じことを `NOT IN` でも書けます。

```sql
SELECT name FROM customers WHERE id NOT IN (SELECT customer_id FROM orders);
-- Sora
```

ここまでは同じです。でも、かっこの中の一覧に **NULL が 1 つでも混ざる** と…

```sql
SELECT name FROM customers
WHERE id NOT IN (SELECT customer_id FROM orders UNION ALL SELECT NULL);
-- （0 件）
```

**誰も出てこなくなりました**。`5 NOT IN (1, 2, 3, 4, NULL)` は、「5 は NULL ではない？」が「わからない」（レッスン 1）になるので、全体も「わからない」になり、条件に合いません。

| 書き方 | 一覧に NULL が混ざると |
|---|---|
| `NOT IN (サブクエリ)` | ⚠️ **0 件** になる |
| `NOT EXISTS (サブクエリ)` | ✅ 正しく Sora さんが出る（実際に確かめました） |

外部キーの列が NULL を許す（注文に「ゲストのお客さん」がいる、など）と、ある日突然 0 件になります。**「〜が無いもの」を探すときは `NOT EXISTS`** にするのが安全です。

## WITH（CTE）：部品に名前を付ける

長い SQL は、**途中の結果に名前を付けて、段階的に書く** と読みやすくなります。`WITH 名前 AS (...)` を **CTE**（共通テーブル式）と呼びます。

「paid の注文について、お客さんごとの注文数・合計・1 回の平均」を出します。

```sql
WITH order_totals AS (               -- ① 注文ごとの合計を作る
  SELECT o.id, o.customer_id, SUM(p.price * oi.qty) AS total
  FROM orders o
  JOIN order_items oi ON oi.order_id = o.id
  JOIN products p     ON p.id = oi.product_id
  WHERE o.status = 'paid'
  GROUP BY o.id
)
SELECT c.name,                       -- ② それをお客さんごとにまとめる
       COUNT(*)     AS orders,
       SUM(t.total) AS total,
       AVG(t.total) AS avg_order
FROM order_totals t
JOIN customers c ON c.id = t.customer_id
GROUP BY c.id
ORDER BY total DESC;
```

```text
name | orders | total | avg_order
Ryo  | 2      | 1760  | 880.0
Ken  | 1      | 1500  | 1500.0
Hana | 1      | 650   | 650.0
```

| 段階 | 1 行が表すもの |
|---|---|
| ① `order_totals` | **注文 1 件**（id・お客さん・合計） |
| ② 最後の SELECT | **お客さん 1 人** |

レッスン 4 の「落とし穴 ②」（つなぐと行が増えて数がずれる）を、**先に注文ごとに集計してからつなぐ** ことで避けています。`COUNT(*)` が正しく注文数になっているのはこのためです。

Python で言うと、途中の結果を変数に入れてから次の処理をするのと同じです。

```python
order_totals = [...]   # ①
result = [...]         # ② order_totals を使う
```

### WITH を読むコツ

1. `WITH` の部品を **上から 1 つずつ** 読み、それぞれ「1 行が何を表すか」を書き出す
2. 最後の SELECT で、部品がどうつながっているかを見る
3. 分からなければ、部品の SQL だけを取り出して実行してみる

`WITH a AS (...), b AS (...)` と `,` で部品をいくつも並べられ、後の部品は前の部品を使えます。

## サブクエリ・JOIN・WITH の使い分け

| やりたいこと | 書き方の例 |
|---|---|
| 1 つの値と比べる（平均より高い） | `WHERE x > (SELECT AVG(...) ...)` |
| 「〜があるもの／無いもの」 | `EXISTS` / `NOT EXISTS` |
| 相手の列も表示したい | `JOIN` |
| 集計してからつなぐ・段階が多い | `WITH` |

同じ結果になる書き方がいくつもあるのが SQL です。AI の SQL が自分の思いつく形と違っても、**結果が同じか** を考えればよいのです。

## AI のコードではこう出てくる

| 見かけたら | チェック |
|---|---|
| `WHERE id NOT IN (SELECT ...)` | ⚠️ サブクエリの列が NULL になりうるなら `NOT EXISTS` に |
| `WITH ... AS (...)` が 3 つ 4 つ | 部品ごとに「1 行が何か」を確かめながら読む |
| SELECT の列の中のサブクエリ（`(SELECT COUNT(*) FROM ... WHERE ... = c.id) AS n`） | 行ごとに実行される。件数が多いと遅いことがある（N+1 と似た形） |
| `WITH RECURSIVE` | 自分自身を使う CTE。カテゴリの親子・組織図などの木をたどる |

```quiz
? `WHERE price > (SELECT AVG(price) FROM products)` の動きとして正しいのは？
+ かっこの中で平均を先に計算し、その値より高い商品を選ぶ
- 商品ごとに、その商品の値段の平均を計算する
- エラーになる（WHERE に SELECT は書けない）
> かっこの中のサブクエリが 1 つの値（平均）を返し、外の WHERE がそれと比べます。

? 「注文したことの無いお客さん」を探すのに、`NOT IN` より `NOT EXISTS` が安全な理由は？
- NOT EXISTS のほうが短く書けるから
+ サブクエリの結果に NULL が 1 つでも混ざると、NOT IN は 0 件になってしまうから
- NOT IN は古くて使えないから
> `NOT IN (..., NULL)` は「わからない」になり、どの行も条件に合いません。NOT EXISTS は NULL の影響を受けません。

? 長い `WITH` の SQL を読むときのコツとして適切なのは？
- 最後の SELECT から読み、WITH の中は読まない
+ 部品を上から 1 つずつ読み、それぞれ「1 行が何を表すか」を確かめる
- 全体を一度に頭の中で実行する
> WITH は途中の結果に名前を付けたものです。部品ごとに分けて読めば、長い SQL も短い SQL の組み合わせとして読めます。
```
