---
title: SQL インジェクション ― 入力が命令に変わる
level: 2
minutes: 18
concepts: [security, database, strings]
summary: f 文字列で組み立てた SQL に細工した入力を入れると、ログインの突破やパスワードの盗み出しができてしまう。実際に再現し、プレースホルダで防ぐ。列名・並べ替えなど「? が使えない場所」の守り方も。
---
## このレッスンのゴール

- SQL インジェクションが起きる仕組みを、実際の SQL 文で説明できる
- プレースホルダ（`?`）でなぜ防げるのかが分かる
- テーブル名・列名・`ORDER BY` など、プレースホルダが使えない場所の守り方が分かる

## 何が起きるのか

```python
def find_user(name):
    sql = f"SELECT id, name FROM users WHERE name = '{name}'"   # ⚠️ 入力を文字列に埋め込む
    return conn.execute(sql).fetchall()
```

普通の入力なら、問題なく動きます。

```text
入力：ryo
SQL ：SELECT id, name FROM users WHERE name = 'ryo'
結果：[(2, 'ryo')]
```

では、名前の欄に `' OR '1'='1` と入れると？

```text
入力：' OR '1'='1
SQL ：SELECT id, name FROM users WHERE name = '' OR '1'='1'
結果：[(1, 'admin'), (2, 'ryo')]     ← 全員が出てきた
```

入力の最初の `'` が、SQL の文字列を **途中で閉じて** しまいました。その後ろの `OR '1'='1'` は、もう「名前」ではなく **SQL の命令の一部** です。`'1'='1'` はいつも正しいので、全員の行が条件に合います。
ログインの処理でこれが起きると、**パスワードを知らなくても、最初のユーザー（多くは管理者）としてログインできてしまいます**。

（このレッスンの例は、すべて SQLite の中で実際に再現したものです）

## 別のテーブルを盗み出す

商品の検索にも同じ穴があるとします。

```python
def search(q):
    sql = f"SELECT name, price FROM products WHERE name LIKE '%{q}%'"
    return conn.execute(sql).fetchall()
```

```text
入力：' UNION SELECT name, password_hash FROM users --
SQL ：SELECT name, price FROM products WHERE name LIKE '%' UNION SELECT name, password_hash FROM users --%'
結果：[('admin', '$2b$12$xxx'), ('ryo', '$2b$12$yyy'), ('りんご', 120), ('牛乳', 200)]
```

| 入力の部分 | 役割 |
|---|---|
| `'` | 文字列を閉じる |
| `UNION SELECT name, password_hash FROM users` | **別の SELECT の結果をくっつける**（列の数を 2 つにそろえている） |
| `--` | SQL のコメント。後ろに残った `%'` を無視させる |

**商品検索の画面に、ユーザーのパスワードのハッシュが表示されました**。前のレッスンで「データベースは盗まれるかもしれない」と考えたのは、こういうことが起きるからです。

`'; DROP TABLE products; --` のように、命令を 2 つにしてテーブルを消す攻撃も有名です。Python の `sqlite3` の `execute` は、1 回に 1 つの命令しか実行しないので、この形は `You can only execute one statement at a time.` で止まりました。ただし、**他のデータベースやライブラリでは通ることがある** ので、安心材料にはなりません。

## 防ぎ方：プレースホルダ

```python
conn.execute("SELECT id, name FROM users WHERE name = ?", (name,))
```

```text
入力：' OR '1'='1
結果：[]     ← 「' OR '1'='1 という名前の人」を探したので、0 件
```

```python
conn.execute("SELECT name, price FROM products WHERE name LIKE ?", (f"%{q}%",))
# UNION の入力でも：[]
```

プレースホルダ（`?`）を使うと、**SQL の形（命令）と、値（データ）が別々にデータベースへ渡されます**。データベースは先に SQL の形を決めてから値をはめ込むので、値の中に `'` や `UNION` があっても、**ただの文字として扱われ、命令にはなりません**。

| データベース／ライブラリ | プレースホルダの書き方 |
|---|---|
| Python の sqlite3 | `?` |
| psycopg（PostgreSQL） | `%s`（⚠️ 文字列の `%` 演算子とは別物） |
| Node.js の better-sqlite3・D1 | `?` ＋ `.bind()` / `.run(値)` |
| node-postgres | `$1`, `$2` |
| SQLAlchemy の `text()` | `:name` ＋ `{"name": 値}` |

⚠️ psycopg の `%s` は、`cur.execute("... WHERE name = %s", (name,))` のように **第 2 引数で** 渡します。`"... = %s" % name` と `%` 演算子でつなぐと、f 文字列と同じく危険です。

## プレースホルダが使えない場所

プレースホルダで渡せるのは **値** だけです。テーブル名・列名・`ASC`/`DESC` のような **SQL の言葉そのもの** は渡せません。

```python
conn.execute("SELECT * FROM ?", ("users",))
# sqlite3.OperationalError: near "?": syntax error

conn.execute("SELECT name FROM products ORDER BY ?", ("price DESC",)).fetchall()
# エラーにはならないが、「'price DESC' という固定の文字列」で並べたことになり、並べ替えが効かない
```

並べ替えの列を利用者に選ばせたいときは、**許可した値の一覧（許可リスト）** と照らし合わせます。

```python
SORTABLE = {"name": "name", "price": "price", "new": "created_at"}

def list_products(sort, desc):
    column = SORTABLE.get(sort, "name")          # 一覧に無ければ name
    direction = "DESC" if desc else "ASC"        # 2 択に固定
    sql = f"SELECT name, price FROM products ORDER BY {column} {direction}"
    return conn.execute(sql).fetchall()
```

f 文字列を使っていますが、入るのは **自分で書いた一覧の中の文字列だけ** なので安全です。**利用者の入力そのものを SQL に入れない** ことがポイントです。

## ORM を使っていても

```python
session.execute(text(f"SELECT * FROM users WHERE name = '{name}'"))    # ⚠️ ORM でも同じ穴
session.execute(text("SELECT * FROM users WHERE name = :name"), {"name": name})   # ✅
User.objects.raw(f"SELECT ... WHERE name = '{name}'")                   # ⚠️ Django でも
```

ORM の普通の書き方（`select(User).where(User.name == name)`）は自動でプレースホルダになりますが、**生の SQL を書く機能** では、自分で守る必要があります。

## 他の「インジェクション」

「外から来た文字列を、別の言語の命令に混ぜる」と、同じ種類の問題が起きます。

| 混ぜる先 | 危ない書き方 | 安全な書き方 |
|---|---|---|
| SQL | `f"... WHERE name = '{name}'"` | プレースホルダ |
| HTML | `el.innerHTML = name` | 次のレッスン（XSS） |
| シェルのコマンド | `os.system(f"convert {filename} out.png")` | `subprocess.run(["convert", filename, "out.png"])`（リストで渡す） |
| ファイルのパス | `open(f"uploads/{filename}")` | `../../.env` のような名前を拒否する（`Path(...).resolve()` が uploads の中か確かめる） |
| LLM へのプロンプト | 利用者の文章をそのまま指示に混ぜる | 指示とデータを分け、LLM の出力を信用しすぎない |

## AI のコードではこう出てくる

| 見かけたら | 判定 |
|---|---|
| `execute(f"...{x}...")` / `execute("..." + x)` / `execute("... %s" % x)` | ⚠️ SQL インジェクション |
| `execute("... = ?", (x,))` / `execute("... = %s", (x,))` | ✅ |
| `` db.prepare(`... ${x}`) ``（JavaScript のテンプレート文字列） | ⚠️ 同じ穴 |
| `ORDER BY {sort}` に `request.args["sort"]` をそのまま | ⚠️ 許可リストに |
| `os.system(f"...")` / `subprocess.run(..., shell=True)` に外からの値 | ⚠️ コマンドインジェクション |

```quiz
? `f"SELECT * FROM users WHERE name = '{name}'"` に `' OR '1'='1` を入れると、なぜ全員が出てくる？
- データベースのバグだから
+ 入力の `'` で文字列が閉じられ、`OR '1'='1'` が SQL の条件として実行されるから
- `OR` という名前のユーザーがいるから
> 入力が「値」ではなく「命令の一部」になってしまうのが SQL インジェクションです。`'1'='1'` はいつも正しいので、全行が条件に合います。

? プレースホルダ（`?`）を使うと防げる理由は？
- 入力から `'` を自動で削除するから
+ SQL の形と値を別々に渡すので、値の中身が命令として解釈されないから
- 入力の長さを制限するから
> データベースは SQL の形を先に決めてから値をはめ込みます。値に `'` や `UNION` が含まれていても、ただの文字として扱われます。

? 利用者が並べ替えの列（`name`・`price`）を選べるようにしたい。安全な方法は？
- `ORDER BY ?` にして、選んだ列名を渡す
- 入力から `'` を取り除いてから f 文字列で埋め込む
+ 許可した列名の一覧と照らし合わせ、一覧の中の文字列だけを SQL に入れる
> 列名はプレースホルダで渡せません（渡しても並べ替えが効きません）。利用者の入力そのものではなく、自分で用意した一覧の値を使います。
```
