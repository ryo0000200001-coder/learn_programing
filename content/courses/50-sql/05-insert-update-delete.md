---
title: INSERT・UPDATE・DELETE ― データを変える SQL
level: 2
minutes: 16
concepts: [database, security, errors]
summary: 行を足す・変える・消す SQL の読み方。WHERE を忘れた UPDATE が全行を書き換える事故、変わった行数（rowcount）の確かめ方、RETURNING、あれば更新・無ければ追加の UPSERT。
---
## このレッスンのゴール

- `INSERT`・`UPDATE`・`DELETE` を読み、どの行がどう変わるか説明できる
- `WHERE` の無い UPDATE・DELETE の危険と、事故を防ぐ習慣が分かる
- `RETURNING` と `ON CONFLICT`（UPSERT）を読める

ここでは、データを変える SQL を見ます。**SELECT と違って、間違えると元に戻せない** ことがあるので、読むときの注意も合わせて学びます。

## INSERT：行を足す

```sql
INSERT INTO products (name, category, price) VALUES ('ヨーグルト', '飲み物', 150);
```

| 部分 | 意味 |
|---|---|
| `INSERT INTO products` | products に足す |
| `(name, category, price)` | 値を入れる列（書かない列は DEFAULT か NULL。id は自動の連番） |
| `VALUES (...)` | 入れる値（列と同じ順番） |

```sql
INSERT INTO products (name, category, price)
VALUES ('みかん', '果物', 80), ('ぶどう', '果物', 400)
RETURNING id, name;
```

```text
id | name
8  | みかん
9  | ぶどう
```

`VALUES` を `,` で並べると、まとめて何行も足せます。`RETURNING` は「**足した行の、この列を返して**」という指定で、自動で振られた id をすぐに知りたいときに便利です（SQLite 3.35 以降・PostgreSQL。MySQL には無い）。

⚠️ 列の指定を省略して `INSERT INTO products VALUES (...)` と書くと、**テーブルのすべての列を順番どおり** に書く必要があり、列が増えたときに壊れます。列名は書くのが安全です。

## UPDATE：行を変える

```sql
UPDATE products SET price = price + 10 WHERE category = '果物';
-- 4 行が変わった
```

```text
りんご 130 / バナナ 100 / みかん 90 / ぶどう 410
```

| 部分 | 意味 |
|---|---|
| `UPDATE products` | products の |
| `SET price = price + 10` | price を「今の price ＋ 10」に（複数なら `SET a = 1, b = 2`） |
| `WHERE category = '果物'` | **この条件に合う行だけ** |

`price = price + 10` は、Python の `price += 10` と同じで、今の値を使って計算しています。データベース設計のコースのレッスン 5 で、在庫を安全に減らすときに使った形です。

### ⚠️ WHERE を忘れると全部変わる

```sql
UPDATE products SET category = 'その他';
-- 8 行が変わった（全部）
```

```text
SELECT DISTINCT category FROM products;
-- その他
```

**WHERE を書かない UPDATE は、テーブルのすべての行を書き換えます**。エラーにも警告にもならず、一瞬で終わります。DELETE も同じで、`DELETE FROM products;` は全行を消します。

| 事故を防ぐ習慣 | |
|---|---|
| **先に同じ WHERE で SELECT する** | `SELECT * FROM products WHERE category = '果物'` で、変わる行を確かめてから UPDATE に書き換える |
| トランザクションの中で試す | `BEGIN;` → UPDATE → 確認 → 良ければ `COMMIT;`、だめなら `ROLLBACK;`（データベース設計のコースのレッスン 5） |
| 変わった行数を確かめる | 下の rowcount |
| 本番で手作業の SQL を打たない | 打つなら、バックアップを確かめてから（公開とクラウドのコースのレッスン 8） |

MySQL の公式のコマンドツールには、WHERE の無い UPDATE・DELETE を止める `--safe-updates` という設定もあります。

## 変わった行数：rowcount

```python
cur = conn.execute("UPDATE products SET price = 999 WHERE name = ?", ("ないもの",))
print(cur.rowcount)    # 0
```

条件に合う行が無いと、**エラーにはならず、0 行が変わる** だけです。「更新したつもりで、実は何も変わっていなかった」に気づけるよう、`rowcount` を確かめるコードもよく書かれます。

```python
if cur.rowcount == 0:
    raise HTTPException(404, "商品が見つかりません")
```

## DELETE：行を消す

```sql
DELETE FROM products WHERE id = 9 RETURNING name;
-- ぶどう
```

外部キーでつながっている行（注文に使われている商品など）は、`ON DELETE` の設定（データベース設計のコースのレッスン 2）によって、一緒に消えたり、消せなかったりします。

### 本当に消す？「論理削除」

```sql
ALTER TABLE products ADD COLUMN deleted_at TEXT;                   -- 消した日時の列を足しておき
UPDATE products SET deleted_at = '2026-11-23' WHERE id = 9;          -- 「消した」印を付けるだけ
SELECT * FROM products WHERE deleted_at IS NULL;                     -- 普段は印の無いものだけ見る
```

行を本当に消さずに **「消した」印を付ける** やり方を **論理削除** と呼びます。間違えて消しても戻せる、過去の注文から商品名を表示できる、などの利点があります。代わりに、**すべての SELECT に `WHERE deleted_at IS NULL` を付け忘れない** 必要があります。

## UPSERT：あれば更新、無ければ追加

```sql
INSERT INTO products (id, name, category, price) VALUES (1, 'りんご', '果物', 150);
-- エラー：UNIQUE constraint failed: products.id   （id 1 はもうある）

INSERT INTO products (id, name, category, price) VALUES (1, 'りんご', '果物', 150)
ON CONFLICT (id) DO UPDATE SET price = excluded.price;
-- 1 行が変わった → りんごの price が 150 に
```

| 部分 | 意味 |
|---|---|
| `ON CONFLICT (id)` | id が重複したら |
| `DO UPDATE SET price = excluded.price` | 追加しようとした値（`excluded`）で、既存の行を更新する |
| `DO NOTHING` | 重複したら何もしない |

INSERT（追加）と UPDATE（更新）を合わせて **UPSERT** と呼びます。「先に SELECT して、あれば UPDATE、無ければ INSERT」と書くと、同時に 2 人が実行したときにずれます（データベース設計のコースの「競合」）。1 つの SQL にしておくと安全です。

| データベース | UPSERT の書き方 |
|---|---|
| SQLite・PostgreSQL | `ON CONFLICT (...) DO UPDATE SET ... = excluded....` |
| MySQL | `ON DUPLICATE KEY UPDATE n = VALUES(n)` |

## Python から実行するとき

```python
with conn:     # トランザクション：最後に commit、例外なら rollback
    conn.execute("UPDATE products SET price = ? WHERE id = ?", (new_price, product_id))
```

- 値は必ず `?` で渡す（セキュリティのコースのレッスン 3）
- `commit` しないと保存されない（`with conn:` が自動で commit してくれる）

## AI のコードではこう出てくる

| 見かけたら | チェック |
|---|---|
| `UPDATE ... SET ...` / `DELETE FROM ...` に WHERE が無い | ⚠️ 全行が対象。本当に全部？ |
| `WHERE id = ?` の UPDATE の後に rowcount を見ていない | 見つからなくても成功扱いになる |
| SELECT → if → INSERT / UPDATE の 3 段階 | 同時に実行するとずれる。UPSERT か制約＋エラー処理に |
| `deleted_at IS NULL` が一部の SELECT にしか無い | ⚠️ 消したはずのものが表示される |
| `INSERT INTO t VALUES (...)`（列名なし） | 列の追加で壊れる。列名を書く |
| `TRUNCATE` / `DROP TABLE` | 全行削除／テーブルごと削除。マイグレーション以外で見たら要確認 |

```quiz
? `UPDATE products SET price = 0;` を実行すると？
- 何も変わらない（WHERE が無いので）
- エラーになる
+ すべての商品の値段が 0 になる
> WHERE の無い UPDATE は全行を書き換えます。エラーも警告も出ないので、実行前に同じ条件の SELECT で確かめる習慣をつけましょう。

? `UPDATE products SET price = 999 WHERE name = 'ないもの'` を実行した。結果は？
- 「見つかりません」というエラー
+ エラーにならず、変わった行が 0 になる
- 新しい行が追加される
> 条件に合う行が無ければ、0 行が変わるだけです。見つからないことを知りたいなら rowcount を確かめます。

? `ON CONFLICT (id) DO UPDATE SET price = excluded.price` の `excluded` は何を指す？
- 削除された行
- すでにテーブルにある行
+ 今 INSERT しようとして、重複で入らなかった値
> 重複したときに、追加しようとした値（excluded）を使って既存の行を更新します。
```
