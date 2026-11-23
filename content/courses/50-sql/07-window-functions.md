---
title: ウィンドウ関数 ― 行を残したまま集計する
level: 3
minutes: 20
concepts: [database, higher_order, reading]
summary: GROUP BY と違って「行をまとめずに」順位・グループの平均・累計・前の行との比較を付ける OVER 句。ROW_NUMBER・RANK・DENSE_RANK の違い、カテゴリごとの 1 位を取り出す定番の形、WHERE で使えない理由。
---
## このレッスンのゴール

- `関数() OVER (PARTITION BY ... ORDER BY ...)` を読み、何を計算しているか説明できる
- `ROW_NUMBER`・`RANK`・`DENSE_RANK` の違いが分かる
- 「グループごとの上位 N 件」「累計」「前の行との差」の SQL を読める

## GROUP BY との違い

レッスン 3 の GROUP BY は、**グループを 1 行にまとめて** しまいました。ウィンドウ関数は、**行はそのまま残して、横に集計の結果を付け足します**。

```sql
SELECT name, price,
       AVG(price) OVER (PARTITION BY category) AS cat_avg,
       price - AVG(price) OVER (PARTITION BY category) AS diff
FROM products;
```

```text
name         | price | cat_avg | diff
食パン       | 250   | 215.0   | 35.0
クロワッサン | 180   | 215.0   | -35.0
りんご       | 120   | 105.0   | 15.0
バナナ       | 90    | 105.0   | -15.0
牛乳         | 200   | 700.0   | -500.0
コーヒー豆   | 1200  | 700.0   | 500.0
```

6 行のまま、それぞれの行に「同じカテゴリの平均」と「平均との差」が付きました。

| 部分 | 意味 |
|---|---|
| `AVG(price)` | 何を計算するか（集計関数がそのまま使える） |
| `OVER (...)` | 「ウィンドウ関数として使う」という印。かっこの中が **どの範囲（窓）で計算するか** |
| `PARTITION BY category` | category ごとに区切って計算する（GROUP BY の「まとめない版」） |

## 順位を付ける

```sql
SELECT name, category, price,
       RANK() OVER (PARTITION BY category ORDER BY price DESC) AS rank_in_cat
FROM products;
```

```text
食パン       | パン   | 250  | 1
クロワッサン | パン   | 180  | 2
りんご       | 果物   | 120  | 1
バナナ       | 果物   | 90   | 2
コーヒー豆   | 飲み物 | 1200 | 1
牛乳         | 飲み物 | 200  | 2
```

`ORDER BY price DESC` は、**窓の中で** 値段の高い順に並べる、という意味です（SQL 全体の並べ替えではありません）。

### ROW_NUMBER・RANK・DENSE_RANK

同じ値段の商品があると違いが出ます。120 円の「りんご（訳あり）」を足して比べました。

```sql
SELECT name, price,
       RANK()       OVER (ORDER BY price) AS r,
       DENSE_RANK() OVER (ORDER BY price) AS dr,
       ROW_NUMBER() OVER (ORDER BY price) AS rn
FROM ...;
```

```text
name             | price | r | dr | rn
バナナ           | 90    | 1 | 1  | 1
りんご           | 120   | 2 | 2  | 2
りんご（訳あり） | 120   | 2 | 2  | 3
クロワッサン     | 180   | 4 | 3  | 4
牛乳             | 200   | 5 | 4  | 5
食パン           | 250   | 6 | 5  | 6
コーヒー豆       | 1200  | 7 | 6  | 7
```

| 関数 | 同じ値のとき | 次の順位 | 例 |
|---|---|---|---|
| `RANK()` | 同じ順位 | **飛ぶ**（2, 2, 4） | スポーツの順位 |
| `DENSE_RANK()` | 同じ順位 | **飛ばない**（2, 2, 3） | 「何番目に高い値段か」 |
| `ROW_NUMBER()` | **必ず違う番号** | 1 ずつ | 1 件だけ選びたいとき |

⚠️ `ROW_NUMBER()` で同じ値のどちらが 2 番になるかは、**決まっていません**。決めたいなら `ORDER BY price, id` のように列を足します（レッスン 2 と同じ）。

## 定番：グループごとの 1 位（上位 N 件）

「カテゴリごとに、いちばん高い商品」。レッスン 3 で GROUP BY では書けなかったものです。

```sql
WITH ranked AS (
  SELECT name, category, price,
         ROW_NUMBER() OVER (PARTITION BY category ORDER BY price DESC) AS rn
  FROM products
)
SELECT category, name, price FROM ranked WHERE rn = 1;
```

```text
パン   | 食パン     | 250
果物   | りんご     | 120
飲み物 | コーヒー豆 | 1200
```

① 窓関数で、カテゴリの中の順番を付ける → ② WITH（レッスン 6）の外で `rn = 1` を選ぶ。`rn <= 3` にすれば「カテゴリごとの上位 3 件」です。**AI の SQL で最もよく見るウィンドウ関数の使い方** です。

### ⚠️ WHERE では直接使えない

```sql
SELECT name, ROW_NUMBER() OVER (ORDER BY price DESC) AS rn
FROM products
WHERE rn <= 2;
-- エラー：misuse of aliased window function rn
```

レッスン 3 の「実行される順番」を思い出してください。ウィンドウ関数は **SELECT（⑤）の段階** で計算されるので、それより前の WHERE（②）では使えません。だから、上のように **WITH やサブクエリで包んでから、外で絞ります**。

## 累計と、前の行との比較

日ごとの売上に、累計と前の日の売上を付けます。

```sql
WITH daily AS (
  SELECT o.ordered_at AS d, SUM(p.price * oi.qty) AS sales
  FROM orders o
  JOIN order_items oi ON oi.order_id = o.id
  JOIN products p     ON p.id = oi.product_id
  WHERE o.status <> 'cancelled'
  GROUP BY o.ordered_at
)
SELECT d, sales,
       SUM(sales) OVER (ORDER BY d) AS running_total,
       LAG(sales) OVER (ORDER BY d) AS prev
FROM daily;
```

```text
d          | sales | running_total | prev
2026-10-01 | 560   | 560           | NULL
2026-10-15 | 1200  | 1760          | 560
2026-11-02 | 1500  | 3260          | 1200
2026-11-05 | 650   | 3910          | 1500
2026-11-10 | 2400  | 6310          | 650
```

| 書き方 | 意味 |
|---|---|
| `SUM(sales) OVER (ORDER BY d)` | 日付の順に、**その行までの合計**（累計）。`ORDER BY` があると「最初からこの行まで」が窓になる |
| `LAG(sales) OVER (ORDER BY d)` | **1 つ前の行** の値。最初の行は前が無いので NULL |
| `LEAD(sales) OVER (...)` | 1 つ後の行の値 |

`sales - LAG(sales) OVER (ORDER BY d)` と書けば「前日比」です。Python で言うと、ループで前の値を覚えておきながら進むのと同じです。

```python
total, prev = 0, None
for row in daily:
    total += row["sales"]
    print(row["d"], row["sales"], total, prev)
    prev = row["sales"]
```

pandas なら `df["sales"].cumsum()`（累計）、`df["sales"].shift(1)`（前の行）、`df.groupby("category")["price"].rank()`（グループごとの順位）が対応します。

## AI のコードではこう出てくる

| 見かけたら | 読み方 |
|---|---|
| `ROW_NUMBER() OVER (PARTITION BY x ORDER BY y DESC)` ＋ 外で `rn = 1` | x ごとに、y が最大の 1 行（最新の 1 件など） |
| `SUM(...) OVER (ORDER BY 日付)` | 累計 |
| `LAG(...)` / `LEAD(...)` | 前・次の行との比較（前月比など） |
| `AVG(...) OVER (PARTITION BY ...)` | グループの平均を、行を残したまま付ける |
| `ROWS BETWEEN 6 PRECEDING AND CURRENT ROW` | 窓の範囲を「前の 6 行から今の行まで」に（7 日間の移動平均など） |
| `RANK()` で「上位 3 件」 | 同点があると 3 件より多く返ることがある。ちょうど 3 件なら `ROW_NUMBER()` |

```quiz
? GROUP BY とウィンドウ関数（OVER）の違いとして正しいのは？
- 同じもので、書き方が違うだけ
+ GROUP BY はグループを 1 行にまとめるが、ウィンドウ関数は行を残したまま集計の結果を付け足す
- ウィンドウ関数は集計関数を使えない
> 6 行の商品にカテゴリの平均を付けても、結果は 6 行のままです。

? 同じ値段の商品が 2 つ 2 位にいるとき、次の商品の順位が 4 になるのは？
+ RANK()
- DENSE_RANK()
- ROW_NUMBER()
> RANK は同点の数だけ順位を飛ばします（2, 2, 4）。DENSE_RANK は飛ばさず（2, 2, 3）、ROW_NUMBER は必ず違う番号です。

? `WHERE rn <= 3`（rn は ROW_NUMBER の別名）がエラーになった。直し方は？
- ROW_NUMBER を RANK に変える
+ WITH やサブクエリで包み、外側の SELECT の WHERE で rn を使う
- ORDER BY を消す
> ウィンドウ関数は SELECT の段階で計算されるので、先に動く WHERE では使えません。一度包んでから外で絞ります。
```
