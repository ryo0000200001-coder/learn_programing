---
title: 並べ替え・件数・重複 ― ORDER BY・LIMIT・DISTINCT
level: 1
minutes: 12
concepts: [database, collections]
summary: 結果を並べ替える ORDER BY（複数の列・降順）、件数を絞る LIMIT と OFFSET（ページ分け）、重複を消す DISTINCT。順番が決まらない落とし穴も。
---
## このレッスンのゴール

- `ORDER BY` で、複数の列・昇順と降順の並べ替えを読める
- `LIMIT`・`OFFSET` でページ分けをする SQL を読める
- `DISTINCT` で何が起きるかと、並べ替えを書かないときの落とし穴が分かる

## ORDER BY：並べ替え

```sql
SELECT name, price FROM products ORDER BY price DESC;
```

```text
コーヒー豆   | 1200
食パン       | 250
牛乳         | 200
クロワッサン | 180
りんご       | 120
バナナ       | 90
```

| 書き方 | 意味 |
|---|---|
| `ORDER BY price` / `ORDER BY price ASC` | 小さい順（昇順。ASC は省略できる） |
| `ORDER BY price DESC` | 大きい順（降順） |

Python で言うと `sorted(products, key=lambda p: p["price"], reverse=True)` です。

### 複数の列で並べる

```sql
SELECT name, category, price FROM products ORDER BY category, price DESC;
```

```text
食パン       | パン   | 250
クロワッサン | パン   | 180
りんご       | 果物   | 120
バナナ       | 果物   | 90
コーヒー豆   | 飲み物 | 1200
牛乳         | 飲み物 | 200
```

**まず category で並べ、同じ category の中では price の大きい順**。`DESC` は、すぐ前の列（price）にだけ効きます。category は昇順のままです。

文字の並び順は、データベースと設定（照合順序）によって変わります。SQLite では、カタカナの「パン」が漢字の「果物」「飲み物」より前に来ました（Unicode の文字の番号の順。コンピュータの基礎コースの「文字コード」）。

## LIMIT：上から何件

```sql
SELECT name, price FROM products ORDER BY price DESC LIMIT 3;
-- コーヒー豆 1200 / 食パン 250 / 牛乳 200
```

「値段の高い順に 3 つ」。ランキングの定番です。

### OFFSET：ページ分け

```sql
SELECT name, price FROM products ORDER BY price DESC LIMIT 2 OFFSET 2;
-- 牛乳 200 / クロワッサン 180
```

`OFFSET 2` は「最初の 2 件を飛ばす」。1 ページ 2 件なら、2 ページ目です。

```python
page = 2
per_page = 2
sql = "SELECT name, price FROM products ORDER BY price DESC LIMIT ? OFFSET ?"
conn.execute(sql, (per_page, (page - 1) * per_page))
```

AI の API のコードでよく見る形です。Python のスライス `items[2:4]` と同じ考え方です。

⚠️ OFFSET が大きくなる（10 万件目から）と、データベースは **飛ばす分も全部数える** ので遅くなります。大きなデータでは「前のページの最後の値より後」（`WHERE price < ? ORDER BY price DESC LIMIT 20`）で次のページを取る方法（キーセット・ページネーション）が使われます。

## ⚠️ ORDER BY が無い LIMIT

```sql
SELECT name, price FROM products LIMIT 2;
-- りんご 120 / バナナ 90
```

これは「たまたま先頭にあった 2 件」です。**ORDER BY が無いと、順番は保証されません**。データが増えたり、データベースが変わったりすると、別の 2 件が返ることがあります。

ページ分けで並べ替えの列に同じ値があると、ページの境目で **同じ行が 2 回出たり、出なかったり** します。最後に主キーを足しておくと安全です。

```sql
ORDER BY price DESC, id
```

## DISTINCT：重複を消す

```sql
SELECT DISTINCT category FROM products;
-- 果物 / 飲み物 / パン

SELECT DISTINCT city FROM customers ORDER BY city;
-- NULL / 大阪 / 東京 / 福岡
```

東京の 2 人が 1 つにまとまりました。Python の `set(...)` に近いですが、`set` と違って NULL も 1 つの値として残ります。

`DISTINCT` は **選んだ列の組み合わせ全体** で重複を消します。`SELECT DISTINCT city, name` なら、city と name の両方が同じ行だけが消えます。

⚠️ JOIN（レッスン 4）の結果に重複が出たのを、`DISTINCT` で隠しているコードは要注意です。重複の原因（つなぎ方の間違い）がそのまま残っていることがあります。

### NULL の並び順

上の結果で、NULL が **いちばん前** に来ています。これはデータベースによって違い、PostgreSQL では昇順で **いちばん後ろ** になります（レッスン 8 で実際に比べます）。決めたいときは `ORDER BY city NULLS LAST` と書けます。

## AI のコードではこう出てくる

| 見かけたら | チェック |
|---|---|
| `LIMIT ? OFFSET ?` | ページ分け。`(page - 1) * per_page` を計算しているか |
| `LIMIT 1` に `ORDER BY` が無い | ⚠️ どの 1 件が返るか決まっていない |
| `ORDER BY created_at DESC` | 新しい順。同じ時刻があるなら `, id DESC` も |
| `SELECT DISTINCT ...` に JOIN | 重複を隠していないか |
| `ORDER BY 2` | 2 番目の列で並べる、という書き方。列を入れ替えると壊れる |

```quiz
? `ORDER BY category, price DESC` の意味は？
- category も price も大きい順
+ category の昇順で並べ、同じ category の中では price の大きい順
- price の大きい順で並べ、同じ price の中では category 順
> DESC はすぐ前の列（price）にだけ付きます。最初に書いた列が優先です。

? 1 ページ 20 件で 3 ページ目を取り出す SQL は？
- `LIMIT 20 OFFSET 3`
- `LIMIT 60`
+ `LIMIT 20 OFFSET 40`
> 1・2 ページ目の 40 件を飛ばし、そこから 20 件です。`(3 - 1) × 20 = 40`。

? `SELECT * FROM products LIMIT 1` で返る行は？
- いつも id が 1 の行
- いつも一番新しい行
+ どの行かは決まっていない（ORDER BY が無いため）
> 並べ替えを指定しないと順番は保証されません。決まった 1 件が欲しいなら ORDER BY を付けます。
```
