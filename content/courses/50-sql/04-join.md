---
title: JOIN をくわしく ― つなぐと行が増える
level: 2
minutes: 22
concepts: [database, collections]
summary: INNER JOIN と LEFT JOIN、3 つ以上のテーブルをつなぐ読み方。LEFT JOIN で COUNT(*) が 0 にならない、つないだら件数が増えて合計がずれる、WHERE に書くと LEFT JOIN が消える、の 3 大落とし穴を実際の結果で。
---
## このレッスンのゴール

- `JOIN ... ON ...` を読み、どのテーブルのどの列でつないでいるか説明できる
- `INNER JOIN` と `LEFT JOIN` の結果の違いが分かる
- JOIN の 3 つの落とし穴（COUNT(*)・行の増加・WHERE の位置）に気づける

データベース設計のコースのレッスン 2 で、1 対多・多対多と JOIN の基本を学びました。ここでは、**JOIN を使った集計で、AI がよく間違えるところ** を中心に見ます。

## JOIN の読み方

```sql
SELECT o.id, c.name, o.ordered_at
FROM orders o
JOIN customers c ON c.id = o.customer_id
ORDER BY o.id;
```

```text
id | name | ordered_at
1  | Ryo  | 2026-10-01
2  | Ryo  | 2026-10-15
3  | Hana | 2026-10-20
4  | Ken  | 2026-11-02
5  | Hana | 2026-11-05
6  | Mio  | 2026-11-10
```

| 部分 | 意味 |
|---|---|
| `FROM orders o` | orders テーブルに `o` という **短い別名** を付ける |
| `JOIN customers c` | customers を `c` としてつなぐ |
| `ON c.id = o.customer_id` | **つなぐ条件**：注文の customer_id と、お客さんの id が同じもの同士 |
| `o.id`、`c.name` | どちらのテーブルの列か。両方に `id` があるので、付けないとエラー |

```sql
SELECT name, id FROM customers JOIN orders ON customers.id = orders.customer_id;
-- エラー：ambiguous column name: id   （どちらの id か分からない）
```

## INNER JOIN と LEFT JOIN

```sql
SELECT c.name, COUNT(o.id) AS orders
FROM customers c
LEFT JOIN orders o ON o.customer_id = c.id
GROUP BY c.id
ORDER BY c.id;
```

```text
Ryo  | 2
Hana | 2
Ken  | 1
Mio  | 1
Sora | 0      ← 注文の無い Sora さんも出る
```

| | `JOIN`（`INNER JOIN`） | `LEFT JOIN` |
|---|---|---|
| 結果に出るもの | **両方に相手がいる** 組み合わせだけ | 左（FROM の側）は **全部**。相手がいなければ右の列は NULL |
| Sora さん（注文 0 件） | 出ない | 出る（orders の列は NULL） |

「**注文していないお客さんも含めて** 一覧にしたい」なら LEFT JOIN、「注文があるものだけ」なら JOIN です。

### 相手がいないものを探す

```sql
SELECT c.name
FROM customers c
LEFT JOIN orders o ON o.customer_id = c.id
WHERE o.id IS NULL;
-- Sora
```

LEFT JOIN して、相手の列が NULL のものだけを残すと、「一度も注文していないお客さん」が分かります（レッスン 6 の `NOT EXISTS` でも書けます）。

## 3 つ以上つなぐ

```sql
SELECT o.id, p.name, oi.qty, p.price * oi.qty AS subtotal
FROM orders o
JOIN order_items oi ON oi.order_id = o.id
JOIN products p     ON p.id = oi.product_id
WHERE o.id IN (1, 4)
ORDER BY o.id;
```

```text
id | name         | qty | subtotal
1  | りんご       | 3   | 360
1  | 牛乳         | 1   | 200
4  | りんご       | 5   | 600
4  | バナナ       | 6   | 540
4  | クロワッサン | 2   | 360
```

**上から順に、1 つずつつないでいく** と読みます。orders → その注文の中身（order_items）→ その中身の商品（products）。注文 1 は 2 行、注文 4 は 3 行になりました。**注文の中身の数だけ、行が増えた** ことに注目してください。

これを合計すれば、注文ごとの金額が出ます。

```sql
SELECT o.id, SUM(p.price * oi.qty) AS total
FROM orders o
JOIN order_items oi ON oi.order_id = o.id
JOIN products p     ON p.id = oi.product_id
WHERE o.status <> 'cancelled'
GROUP BY o.id
ORDER BY total DESC;
```

```text
6 | 2400
4 | 1500
2 | 1200
5 | 650
1 | 560
```

## 落とし穴 ① LEFT JOIN と COUNT(*)

上の「お客さんごとの注文数」で、`COUNT(o.id)` を `COUNT(*)` にすると…

```text
Ryo  | 2
Hana | 2
Ken  | 1
Mio  | 1
Sora | 1      ← 0 のはずが 1 に！
```

LEFT JOIN では、Sora さんの行が **orders の列が NULL の 1 行** として残ります。`COUNT(*)` は行を数えるのでその 1 行も数え、`COUNT(o.id)` は NULL を数えない（レッスン 3）ので 0 になります。
**LEFT JOIN で相手の数を数えるときは、`COUNT(相手の列)`** にします。

## 落とし穴 ② つなぐと行が増えて、数がずれる

「お客さんごとの注文数と、買った商品の個数」を 1 回で出そうとしました。

```sql
SELECT c.name, COUNT(o.id) AS orders, SUM(oi.qty) AS items
FROM customers c
JOIN orders o       ON o.customer_id = c.id
JOIN order_items oi ON oi.order_id = o.id
GROUP BY c.id;
```

```text
Ryo  | 3 | 5
Hana | 3 | 5
Ken  | 3 | 13     ← Ken さんの注文は 1 回だけなのに 3
Mio  | 1 | 2
```

order_items までつないだので、**注文 1 件が中身の数だけ増えて** います（Ken さんの注文 4 は中身が 3 つ → 3 行）。その行を `COUNT(o.id)` で数えたので、注文数が増えてしまいました。

| 直し方 | |
|---|---|
| `COUNT(DISTINCT o.id)` | 同じ注文は 1 回だけ数える（結果は Ryo 2・Hana 2・Ken 1・Mio 1 に直った） |
| 別々に集計してからつなぐ | 注文数と商品数を、それぞれサブクエリや WITH（レッスン 6）で出してからつなぐ。**SUM がずれるときはこちらが必要** |

⚠️ `SUM` は `DISTINCT` では直せません（同じ金額の違う商品まで 1 つにしてしまう）。1 対多のテーブルを 2 つ以上つないで SUM するときは、特に注意が必要です。

**JOIN した後は、1 行が「何を表しているか」を考える** のが大事です。orders だけなら「1 行 ＝ 1 注文」、order_items までつなぐと「1 行 ＝ 注文の中身 1 つ」に変わります。

## 落とし穴 ③ WHERE に書くと LEFT JOIN が消える

「全員を出して、paid の注文があれば一緒に出す」つもりの SQL です。

```sql
SELECT c.name, o.id
FROM customers c
LEFT JOIN orders o ON o.customer_id = c.id
WHERE o.status = 'paid';
```

```text
Ryo  | 1
Ryo  | 2
Hana | 5
Ken  | 4         ← Mio さんと Sora さんが消えた
```

LEFT JOIN で残った Sora さんの行は、`o.status` が NULL です。それを **WHERE**（つないだ後に 1 行ずつ絞る）で `= 'paid'` と比べたので、消えてしまいました。結果的に、普通の JOIN と同じです。

**相手の側の条件は、`ON` に書きます**。

```sql
SELECT c.name, o.id
FROM customers c
LEFT JOIN orders o ON o.customer_id = c.id AND o.status = 'paid';
```

```text
Ryo  | 1
Ryo  | 2
Hana | 5
Ken  | 4
Mio  | NULL      ← paid の注文は無いが、本人は残る
Sora | NULL
```

| 条件を書く場所 | 意味 |
|---|---|
| `ON ... AND o.status = 'paid'` | **つなぐ相手を選ぶ**条件。左は全員残る |
| `WHERE o.status = 'paid'` | つないだ **後の行を絞る** 条件。相手がいない行は消える |

## 他の書き方

```sql
SELECT COUNT(*) FROM customers, products;   -- 30
```

`FROM a, b` と並べて ON を書かないと、**すべての組み合わせ**（5 人 × 6 商品 ＝ 30 行）になります（クロス結合）。古い書き方で `WHERE a.id = b.a_id` とつなぐこともありますが、条件を書き忘れると大量の行になるので、`JOIN ... ON` を使うのが安全です。

pandas（Python の表計算のライブラリ）では、`pd.merge(orders, customers, left_on="customer_id", right_on="id", how="left")` が LEFT JOIN です。`how` が `"inner"`・`"left"` に対応します。

## AI のコードではこう出てくる

| 見かけたら | チェック |
|---|---|
| `LEFT JOIN` ＋ `COUNT(*)` | ⚠️ 相手がいなくても 1 になる。`COUNT(相手の列)` に |
| 1 対多を 2 つ以上 JOIN して `SUM` / `COUNT` | ⚠️ 行が増えて数がずれていないか。1 行が何を表すか確認 |
| `SELECT DISTINCT` で JOIN の重複を消している | ⚠️ 原因を隠していないか |
| `LEFT JOIN` の相手の列を `WHERE` で条件にしている | ⚠️ 実質 INNER JOIN になっている。意図どおりか |
| ORM の `joinedload` / `include` | 裏で JOIN が走っている（データベース設計のコースのレッスン 6） |

```quiz
? 注文が 0 件のお客さんも含めて「お客さんごとの注文数」を出したい。正しいのは？
- `JOIN` と `COUNT(*)`
- `LEFT JOIN` と `COUNT(*)`
+ `LEFT JOIN` と `COUNT(o.id)`
> LEFT JOIN で 0 件の人も残しますが、COUNT(*) だと NULL の 1 行を数えて 1 になります。相手の列を数えると 0 になります。

? orders と order_items をつないで `COUNT(o.id)` したら、注文数が実際より多くなった。理由は？
+ 注文 1 件が、中身（order_items）の数だけ行に増えたから
- COUNT は NULL を数えるから
- JOIN の書き方が間違っていて、エラーを無視しているから
> 1 対多をつなぐと「1 行 ＝ 注文の中身 1 つ」になります。注文を数えるなら `COUNT(DISTINCT o.id)` か、つなぐ前に集計します。

? `LEFT JOIN orders o ON ... WHERE o.status = 'paid'` で、注文の無いお客さんが消えた。直し方は？
- LEFT JOIN を RIGHT JOIN にする
+ `o.status = 'paid'` を WHERE ではなく ON の条件に移す
- DISTINCT を付ける
> WHERE はつないだ後に行を絞るので、相手が NULL の行が消えます。ON に書けば「つなぐ相手を選ぶ」条件になり、左は全員残ります。
```
