---
title: 正規化 ― 同じことを 2 回書かない
level: 2
minutes: 18
concepts: [database, reading]
summary: Excel の表のような 1 枚のテーブルで起きる「直し漏れ」「消えてしまう」問題と、テーブルを分けて解決する正規化。あえて分ける・分けないの判断も。
---
## このレッスンのゴール

- 1 枚の大きな表で起きる 3 つの問題（更新・削除・追加の異常）を説明できる
- 表を見て、「同じことが何度も書かれている」部分を見つけ、テーブルに分けられる
- あえて正規化しない（非正規化する）場面と、その注意点が分かる

## Excel のような 1 枚の表

注文を Excel で管理していたら、こんな表になりそうです。

| order_id | customer | customer_phone | product | price | qty |
|---|---|---|---|---|---|
| 1 | Ryo | 090-1111-1111 | りんご | 120 | 3 |
| 2 | Ryo | 090-1111-1111 | 牛乳 | 200 | 1 |
| 3 | Hana | 080-2222-2222 | りんご | 120 | 2 |

一見わかりやすいですが、**Ryo の電話番号が 2 回、りんごの値段が 2 回** 書かれています。これが問題の元です。

## 3 つの問題（異常）

このテーブルを実際に SQLite に作って試しました。

### ① 更新の異常：直し漏れ

```python
conn.execute("UPDATE orders SET customer_phone = '090-9999-9999' WHERE order_id = 1")
conn.execute("SELECT DISTINCT customer, customer_phone FROM orders WHERE customer = 'Ryo'").fetchall()
# [('Ryo', '090-9999-9999'), ('Ryo', '090-1111-1111')]   ← Ryo の電話番号が 2 つになった
```

1 行だけ直すと、**同じ人なのに電話番号が食い違います**。どちらが正しいのか、もう分かりません。

### ② 削除の異常：一緒に消えてしまう

```python
conn.execute("DELETE FROM orders WHERE customer = 'Hana'")   # Hana の注文を取り消した
conn.execute("SELECT customer_phone FROM orders WHERE customer = 'Hana'").fetchall()
# []   ← Hana の電話番号まで消えた
```

注文を消しただけなのに、**お客さんの情報そのものが無くなりました**。

### ③ 追加の異常：入れる場所がない

まだ何も注文していない新しいお客さんや、まだ売れていない新商品を登録しようとすると、`order_id` や `qty` が空の、おかしな行を作るしかありません。

## 分ける：正規化

原因は、**「お客さん」「商品」「注文」という別々のものを 1 枚に詰め込んでいる** ことです。それぞれをテーブルにします。

```sql
CREATE TABLE customers (
  id     INTEGER PRIMARY KEY,
  name   TEXT NOT NULL,
  phone  TEXT
);

CREATE TABLE products (
  id     INTEGER PRIMARY KEY,
  name   TEXT NOT NULL,
  price  INTEGER NOT NULL          -- 円の整数
);

CREATE TABLE orders (
  id           INTEGER PRIMARY KEY,
  customer_id  INTEGER NOT NULL REFERENCES customers(id),
  ordered_at   TEXT NOT NULL
);

CREATE TABLE order_items (          -- 1 つの注文に、商品がいくつも入る
  order_id    INTEGER NOT NULL REFERENCES orders(id),
  product_id  INTEGER NOT NULL REFERENCES products(id),
  qty         INTEGER NOT NULL,
  unit_price  INTEGER NOT NULL,      -- 注文した時点の値段（下で説明）
  PRIMARY KEY (order_id, product_id)
);
```

| 問題 | 分けた後 |
|---|---|
| ① 電話番号の直し漏れ | 電話番号は `customers` に 1 回だけ。1 か所直せば全部に反映 |
| ② 注文を消すとお客さんも消える | 注文を消しても `customers` は残る |
| ③ 注文前のお客さんを登録できない | `customers` に 1 行足すだけ |

このように、**1 つの事実を 1 か所にだけ書く** ようにテーブルを分けることを **正規化** と呼びます。

### 正規化のルール（ざっくり）

教科書では「第 1 正規形・第 2 正規形・第 3 正規形…」と段階で説明されますが、実際の設計では次の 3 つを確かめれば十分です。

| 確かめること | ダメな例 |
|---|---|
| 1 マスに 1 つの値か（第 1 正規形） | `tags` に「日記,Python」 |
| その列は、そのテーブルの「もの」の情報か | 注文のテーブルにお客さんの電話番号 |
| 他の列から決まる値を、二重に持っていないか | `price` と `qty` があるのに `total` 列も持つ |

## わざと「同じことを 2 回」書くとき

### 注文時の値段は別に持つ

上の `order_items.unit_price` は、`products.price` と同じ値が入るので、二重に書いているように見えます。
でも、商品の値段は後で **値上げされる** かもしれません。`products.price` だけを見ていると、**過去の注文の金額まで変わってしまいます**。

「注文した時点の値段」は、商品の今の値段とは **別の事実** なので、注文の側に持つのが正しい設計です。住所・税率なども同じです。

### 速さのための非正規化

正規化すると、読むときに JOIN が増えます。アクセスがとても多い画面では、あえて集計した値を持つことがあります。

```sql
ALTER TABLE posts ADD COLUMN comment_count INTEGER NOT NULL DEFAULT 0;
-- コメントが増えるたびに +1 する。一覧画面で毎回 COUNT しなくて済む
```

これを **非正規化** と呼びます。⚠️ 代わりに、**コメントを追加・削除するすべての場所で、数を更新し忘れない** 必要があります（更新の異常と同じ危険が戻ってくる）。
**最初は正規化して作り、測って遅かったところだけ非正規化する** のが基本の順番です（バックエンドコースの「速さの基本」：まず測る）。

## AI のコードではこう出てくる

| 見かけたら | チェック |
|---|---|
| 1 つのテーブルに `customer_name`・`customer_email`・`product_name`… と何でも入っている | ⚠️ 正規化されていない。直し漏れが起きる |
| `orders` に `total` 列がある | 合計を二重に持っている。`order_items` と食い違わないように、計算して入れているか |
| `order_items` に `unit_price` がある | ✅ 注文時点の値段を残している |
| `comment_count`・`likes_count` | 非正規化。増減のたびに更新しているか、ずれたときに数え直す仕組みがあるか |
| NoSQL（Firestore・MongoDB）で、同じ情報を何か所にもコピー | NoSQL は JOIN が苦手なので、コピーするのが普通。その代わり、更新のときに全部のコピーを直す必要がある |

```quiz
? 1 枚の注文表で、お客さんの電話番号を 1 行だけ直したら、同じ人の電話番号が 2 種類になった。この問題を何と呼ぶ？
+ 更新の異常
- 削除の異常
- 追加の異常
> 同じ事実が何か所にも書かれていると、直し漏れで食い違いが起きます。お客さんのテーブルに分ければ、1 か所直すだけで済みます。

? `order_items` に、`products.price` と同じ値の `unit_price` 列を持たせる理由は？
- JOIN を書くのが面倒だから
+ 商品の値段が後で変わっても、注文した時点の値段を残すため
- 正規化のルールでそう決まっているから
> 「今の値段」と「注文したときの値段」は別の事実です。注文の側に持たないと、値上げで過去の注文の金額まで変わってしまいます。

? 非正規化（集計値などをわざと持たせること）について正しいのは？
- いつも正規化より優れているので、最初から使う
+ 読むのは速くなるが、元のデータが変わるたびに更新し忘れない仕組みが必要
- データベースが自動で値をそろえてくれるので、注意はいらない
> 非正規化は速さと引き換えに、食い違いの危険を自分で管理するやり方です。測って必要なところにだけ使います。
```
