---
title: 集計 ― COUNT・SUM と GROUP BY・HAVING
level: 2
minutes: 18
concepts: [database, collections, higher_order]
summary: 件数・合計・平均を出す集計関数と、グループごとに集計する GROUP BY、集計した結果で絞る HAVING。COUNT(*) と COUNT(列) の違い、WHERE と HAVING の違い、SQL が実行される順番。
---
## このレッスンのゴール

- `COUNT`・`SUM`・`AVG`・`MIN`・`MAX` の結果を読める（NULL の扱いも含めて）
- `GROUP BY` で「グループごとに 1 行」になる仕組みを説明できる
- `WHERE` と `HAVING` の違いを、SQL が実行される順番から説明できる

## 集計関数：たくさんの行を 1 つの値に

```sql
SELECT SUM(price), AVG(price), MIN(price), MAX(price) FROM products;
-- 2040 | 340.0 | 90 | 1200
```

| 関数 | 意味 | Python で言うと |
|---|---|---|
| `COUNT(*)` | 行の数 | `len(rows)` |
| `SUM(x)` | 合計 | `sum(...)` |
| `AVG(x)` | 平均 | `sum(...) / len(...)` |
| `MIN(x)` / `MAX(x)` | 最小／最大 | `min(...)` / `max(...)` |

### COUNT(*) と COUNT(列)

```sql
SELECT COUNT(*), COUNT(city), COUNT(DISTINCT city) FROM customers;
-- 5 | 4 | 3
```

| 書き方 | 数えるもの | 結果 |
|---|---|---|
| `COUNT(*)` | 行の数 | 5 人 |
| `COUNT(city)` | city が **NULL でない** 行の数 | 4（Mio さんの NULL を数えない） |
| `COUNT(DISTINCT city)` | NULL でない、違う値の数 | 3（東京・大阪・福岡） |

集計関数は、**NULL を無視する** のが決まりです（`COUNT(*)` だけは行そのものを数えるので例外）。`AVG(x)` も NULL の行を分母に入れません。

## GROUP BY：グループごとに集計

```sql
SELECT category, COUNT(*) AS n, AVG(price) AS avg_price
FROM products
GROUP BY category;
```

```text
category | n | avg_price
パン     | 2 | 215.0
果物     | 2 | 105.0
飲み物   | 2 | 700.0
```

`GROUP BY category` は、**category が同じ行を 1 つのグループにまとめ、グループごとに 1 行** を返します。

```text
products（6 行）               グループに分ける            1 グループ 1 行に
りんご     果物   120   ┐
バナナ     果物    90   ┘→ 果物   [120, 90]     → 果物   2  105.0
牛乳       飲み物 200   ┐
コーヒー豆 飲み物 1200  ┘→ 飲み物 [200, 1200]   → 飲み物 2  700.0
食パン     パン   250   ┐
クロワッサン パン 180   ┘→ パン   [250, 180]    → パン   2  215.0
```

Python で言うと、辞書でグループを作ってから集計するのと同じです。

```python
from collections import defaultdict
groups = defaultdict(list)
for p in products:
    groups[p["category"]].append(p["price"])
result = {cat: (len(prices), sum(prices) / len(prices)) for cat, prices in groups.items()}
```

### 月ごとの集計

```sql
SELECT substr(ordered_at, 1, 7) AS month, COUNT(*) AS orders
FROM orders
GROUP BY month;
```

```text
2026-10 | 3
2026-11 | 3
```

日付の文字列の先頭 7 文字（`2026-10`）でまとめています。売上の月次レポートの定番の形です。

### ⚠️ SELECT に書けるのは「グループで 1 つに決まるもの」だけ

```sql
SELECT category, name, MAX(price) FROM products GROUP BY category;
```

グループ「果物」には、りんごとバナナの 2 つの name があります。どちらを出せばよいでしょう？

| データベース | 結果 |
|---|---|
| SQLite | 動く。`MAX(price)` の行の name（食パン・りんご・コーヒー豆）を出す（SQLite だけの特別なルール） |
| PostgreSQL | **エラー**：`column "products.name" must appear in the GROUP BY clause or be used in an aggregate function` |
| MySQL（初期設定） | **エラー**：`... is incompatible with sql_mode=only_full_group_by` |

（3 つとも実際に実行した結果です。レッスン 8）

`SELECT` に書けるのは、**`GROUP BY` に書いた列** か **集計関数** だけ、と覚えましょう。「カテゴリごとに一番高い商品の名前」が欲しいときは、レッスン 7 のウィンドウ関数を使います。

## HAVING：集計した結果で絞る

```sql
SELECT category, COUNT(*) AS n
FROM products
GROUP BY category
HAVING COUNT(*) >= 2 AND AVG(price) < 500;
```

```text
パン | 2
果物 | 2
```

飲み物は平均 700 円なので消えました。

### WHERE と HAVING の違い

```sql
SELECT category, COUNT(*) AS n
FROM products
WHERE price < 1000
GROUP BY category;
```

```text
パン   | 2
果物   | 2
飲み物 | 1      ← コーヒー豆（1200 円）が、数える前に消えた
```

| | WHERE | HAVING |
|---|---|---|
| いつ絞る | **グループにまとめる前** の 1 行ずつ | **グループにまとめた後** |
| 使えるもの | 列の値 | 集計関数（`COUNT(*)`・`AVG(price)`） |
| 例 | 1000 円未満の商品だけを数える | 2 個以上あるカテゴリだけを出す |

## SQL が実行される順番

SQL は、**書く順番と実行される順番が違います**。これが分かると、WHERE と HAVING の違いも、エラーの理由も分かります。

```text
書く順番        実行される順番
SELECT          ① FROM / JOIN   どのテーブルから（レッスン 4）
FROM            ② WHERE          1 行ずつ絞る
WHERE           ③ GROUP BY       グループにまとめる
GROUP BY        ④ HAVING         グループを絞る
HAVING          ⑤ SELECT         列を選ぶ・計算する・別名を付ける
ORDER BY        ⑥ ORDER BY       並べ替える
LIMIT           ⑦ LIMIT          件数を絞る
```

- WHERE（②）は GROUP BY（③）より前なので、`WHERE COUNT(*) > 1` は書けない（まだ数えていない）
- SELECT（⑤）で付けた別名は、ORDER BY（⑥）では使えるが、PostgreSQL・MySQL では WHERE（②）では使えない（SQLite は特別に使えてしまうので、SQLite で動いた SQL が他でエラーになることがある）
- `LIMIT` は最後なので、「上位 3 件」は並べ替えた後に取られる

## AI のコードではこう出てくる

| 見かけたら | チェック |
|---|---|
| `COUNT(*)` と `COUNT(列)` | NULL を数えたいかどうかで使い分けているか |
| `AVG(rating)` | NULL（未評価）は分母に入らない。それでよいか |
| `GROUP BY` に無い列を SELECT している | ⚠️ SQLite では動いても、PostgreSQL・MySQL ではエラー |
| `HAVING` に、集計関数を使わない条件 | WHERE に書いたほうが、先に行が減って速い |
| `SUM(price)` が NULL になる | 1 行も無いと SUM は 0 ではなく NULL。`COALESCE(SUM(price), 0)` |

```quiz
? `SELECT COUNT(*), COUNT(city) FROM customers` の結果が `5 | 4` だった。理由は？
- 1 人が 2 回数えられている
+ `COUNT(city)` は city が NULL の行を数えないから
- `COUNT(*)` はテーブルの列の数を数えるから
> 集計関数は NULL を無視します。`COUNT(*)` だけは行そのものを数えるので 5 です。

? 「2 個以上の商品があるカテゴリだけ」を出したい。条件を書く場所は？
- WHERE
+ HAVING
- ORDER BY
> 「グループの中の数」はグループにまとめた後で分かるので、HAVING に `COUNT(*) >= 2` と書きます。

? SQL が実行される順番として正しいのは？
- SELECT → FROM → WHERE → GROUP BY
+ FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY
- WHERE → FROM → SELECT → GROUP BY
> 書く順番とは違い、FROM から始まります。だから WHERE ではまだ集計関数が使えません。
```
