---
title: 制約とトランザクション ― データを壊さない仕組み
level: 3
minutes: 20
concepts: [database, errors, security]
summary: CHECK・UNIQUE・外部キーでデータベースにルールを持たせ、トランザクションで「全部成功か、全部なかったことに」する。在庫の取り合いを 1 行の UPDATE で防ぐ方法も。
---
## このレッスンのゴール

- 制約（CHECK・UNIQUE・NOT NULL・外部キー）をデータベースに持たせる理由を説明できる
- トランザクションの「全部か無しか」を、送金の例で説明できる
- 「読んでから書く」コードの競合に気づき、条件付きの UPDATE で直せる

## 制約：データベースが守るルール

アプリのコード（バックエンドコースのレッスン 6 のバリデーション）でチェックしていても、バグ・別のプログラム・手作業の SQL から、おかしなデータが入ることがあります。**最後の砦として、データベース自身にもルールを持たせます**。

| 制約 | 例 | 守ること |
|---|---|---|
| `NOT NULL` | `name TEXT NOT NULL` | 空を許さない |
| `UNIQUE` | `email TEXT UNIQUE` | 重複を許さない |
| `CHECK` | `stock INTEGER CHECK (stock >= 0)` | 条件を満たさない値を許さない |
| 外部キー | `user_id ... REFERENCES users(id)` | 存在しない相手を指さない |
| `DEFAULT` | `status TEXT DEFAULT 'todo'` | 省略時の値（ルールではないが、空を防ぐ） |

```python
conn.execute("CREATE TABLE items (id INTEGER PRIMARY KEY, stock INTEGER NOT NULL CHECK (stock >= 0))")
conn.execute("INSERT INTO items VALUES (1, 1)")
conn.execute("UPDATE items SET stock = stock - 2 WHERE id = 1")
# sqlite3.IntegrityError: CHECK constraint failed: stock >= 0
```

在庫が 1 個しかないのに 2 個減らそうとすると、データベースが止めてくれました。

### エラーを受け止める

```python
try:
    conn.execute("INSERT INTO users (name, email) VALUES (?, ?)", (name, email))
    conn.commit()
except sqlite3.IntegrityError:
    return {"error": "このメールアドレスはすでに登録されています"}, 409
```

「先に SELECT して、無ければ INSERT」と書くより、**INSERT してみて、UNIQUE のエラーを受け止める** ほうが確実です。SELECT と INSERT の間に、別の人が同じメールアドレスで登録するかもしれないからです（下の「競合」）。

## トランザクション：全部か、無しか

A さんから B さんに 300 円送金する処理は、2 つの UPDATE でできています。

```text
① B の残高を +300
② A の残高を -300
```

① の後で ② が失敗したら、**お金が 300 円増えてしまいます**。そこで、2 つを **トランザクション** にまとめます。トランザクションの中の処理は、**全部成功して確定（commit）するか、1 つでも失敗したら全部なかったこと（rollback）になる** かのどちらかです。

```python
conn.executescript("""
CREATE TABLE accounts (name TEXT PRIMARY KEY, balance INTEGER NOT NULL CHECK (balance >= 0));
INSERT INTO accounts VALUES ('A', 1000), ('B', 0);
""")

def transfer(amount):
    try:
        with conn:      # ← この中がトランザクション。抜けるときに commit、例外なら rollback
            conn.execute("UPDATE accounts SET balance = balance + ? WHERE name = 'B'", (amount,))
            conn.execute("UPDATE accounts SET balance = balance - ? WHERE name = 'A'", (amount,))
    except sqlite3.IntegrityError as e:
        print("失敗:", e)

transfer(300)
# [('A', 700), ('B', 300)]

transfer(5000)
# 失敗: CHECK constraint failed: balance >= 0
# [('A', 700), ('B', 300)]     ← ① の「B に +5000」も取り消されている
```

（実際に実行した結果です）5000 円の送金では、① の UPDATE は成功していましたが、② が CHECK で失敗したので、**① ごと取り消されました**。

| 書き方 | 意味 |
|---|---|
| `with conn:`（Python の sqlite3） | ブロックを抜けたら commit、例外が起きたら rollback |
| `BEGIN; ... COMMIT;` | SQL で書くトランザクション。失敗したら `ROLLBACK;` |
| `with Session(engine) as s, s.begin():`（SQLAlchemy） | 同じことを ORM で |

⚠️ Python の `sqlite3` は、`commit()` を呼ぶまで変更が確定しません。AI のコードで、INSERT した後に `conn.commit()`（または `with conn:`）が無いと、**プログラムが終わったときに変更が消えます**。

## 競合：読んでから書くと、ずれる

「残り 1 個の商品を、2 人がほぼ同時に買う」場面を考えます。

```python
# ⚠️ 読んでから書く
stock = conn.execute("SELECT stock FROM items WHERE id = 1").fetchone()[0]   # 2 人とも 1 を読む
if stock >= 1:
    conn.execute("UPDATE items SET stock = ? WHERE id = 1", (stock - 1,))    # 2 人とも 0 を書く
    # → 2 人とも「買えた」ことになるが、在庫は 1 しか減っていない
```

コンピュータの基礎コースの「プロセスとスレッド」で見た **競合状態** と同じです。読んでから書くまでの間に、別の人が割り込みます。

### 直し方：条件付きの UPDATE を 1 回で

```python
cur = conn.execute("UPDATE items SET stock = stock - 1 WHERE id = 1 AND stock >= 1")
if cur.rowcount == 0:
    return {"error": "売り切れました"}, 409
```

```text
1 人目：rowcount 1   ← 在庫を 1 減らせた
2 人目：rowcount 0   ← 条件 stock >= 1 に合わなかったので、何も変わらなかった
```

「在庫があれば減らす」を **データベースへの 1 つの命令** にすると、データベースが順番に処理するので、割り込まれません。`rowcount`（変わった行の数）で、成功したかが分かります。
もっと複雑な処理では、PostgreSQL の `SELECT ... FOR UPDATE`（読んだ行に鍵をかける）などを使います。

## AI のコードではこう出てくる

| 見かけたら | チェック |
|---|---|
| 金額・在庫の列に `CHECK (... >= 0)` が無い | ⚠️ マイナスの残高・在庫が入りうる |
| 複数の INSERT/UPDATE が、`with conn:` やトランザクションの外にバラバラにある | ⚠️ 途中で失敗すると、半分だけ変わった状態が残る |
| `SELECT` で数を読み、Python で計算して `UPDATE ... SET stock = ?` | ⚠️ 競合でずれる。`SET stock = stock - 1 WHERE ... AND stock >= 1` に |
| `SELECT` で重複を確認してから `INSERT` | ⚠️ 同時の登録で重複しうる。UNIQUE 制約＋`IntegrityError` の処理に |
| `except Exception: pass` でデータベースのエラーを握りつぶす | ⚠️ 失敗に気づけない。rollback されたのかも分からない |
| `conn.commit()` が無い | ⚠️ 変更が保存されない |

```quiz
? 送金処理で「B に +300」は成功し、「A から -300」が失敗した。トランザクションにしていた場合、どうなる？
- B だけ 300 円増えた状態で確定する
+ 両方とも取り消され、送金前の状態に戻る
- A の残高がマイナスになる
> トランザクションは「全部成功するか、全部なかったことになるか」です。途中で失敗したら、成功していた部分も rollback されます。

? 在庫を減らす処理として、2 人が同時に買っても安全なのは？
- SELECT で在庫を読み、Python で 1 引いた値を UPDATE する
+ `UPDATE items SET stock = stock - 1 WHERE id = ? AND stock >= 1` を 1 回実行し、rowcount を確認する
- SELECT を 2 回して、同じ値なら UPDATE する
> 読んでから書くと、その間に割り込まれます。条件付きの UPDATE 1 回なら、データベースが順番に処理するので安全です。

? アプリでバリデーションしているのに、データベースにも CHECK や UNIQUE を付ける理由は？
- 付けないと SQL が動かないから
- アプリのバリデーションが不要になるから
+ バグ・別のプログラム・同時アクセスなど、アプリのチェックをすり抜ける場合でもデータを守れるから
> データベースの制約は最後の砦です。アプリのチェックと両方あると、より確実です。
```
