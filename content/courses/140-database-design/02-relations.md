---
title: 1 対多・多対多 ― テーブルをつなぐ外部キー
level: 2
minutes: 20
concepts: [database, collections]
summary: 「ユーザーは投稿をたくさん持つ」「投稿とタグはお互いにたくさん」を表す外部キーと中間テーブル。JOIN で読み、ON DELETE で消し方を決める。SQLite の落とし穴も。
---
## このレッスンのゴール

- 1 対多・多対多の関係を見分け、外部キーと中間テーブルで表せる
- `JOIN` を使った SQL を読み、何と何をつないでいるか説明できる
- `ON DELETE CASCADE` と、SQLite で外部キーを有効にする方法が分かる

## 関係の 3 つの形

| 関係 | 例 | 表し方 |
|---|---|---|
| **1 対 1** | ユーザー と プロフィール | 片方に相手の ID を持たせる（1 つのテーブルにまとめることも多い） |
| **1 対多** | ユーザー 1 人 と 投稿たくさん | **「多」の側** に「1」の側の ID を持たせる |
| **多対多** | 投稿 と タグ（投稿にタグがたくさん、タグも投稿がたくさん） | **中間テーブル** を作る |

## 1 対多：外部キー

```sql
CREATE TABLE users (
  id    INTEGER PRIMARY KEY,
  name  TEXT NOT NULL
);

CREATE TABLE posts (
  id       INTEGER PRIMARY KEY,
  user_id  INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  title    TEXT NOT NULL
);
```

`posts.user_id` は「この投稿を書いたユーザーの id」です。`REFERENCES users(id)` は「この値は、必ず `users` テーブルの `id` のどれかでなければならない」という約束で、こういう列を **外部キー（FOREIGN KEY）** と呼びます。

```text
users                    posts
id | name                id | user_id | title
1  | Ryo      ←──────── 1  | 1       | はじめての投稿
            ←──────────  2  | 1       | 2 つ目
2  | Hana     ←──────── 3  | 2       | こんにちは
```

⚠️ よくある間違いは、`users` の側に `post_ids` のような列を作ることです。「1」の側に「多」を入れると、1 マスに複数の値（前のレッスン）になってしまいます。**ID を持つのは「多」の側** です。

### JOIN で読む

```python
conn.execute("""
    SELECT users.name, posts.title
    FROM posts
    JOIN users ON users.id = posts.user_id
    ORDER BY posts.id
""").fetchall()
# [('Ryo', 'はじめての投稿'), ('Ryo', '2 つ目'), ('Hana', 'こんにちは')]
```

`JOIN users ON users.id = posts.user_id` は「posts の各行に、`user_id` と同じ `id` を持つ users の行をくっつける」という意味です。

```python
conn.execute("""
    SELECT users.name, COUNT(posts.id)
    FROM users
    LEFT JOIN posts ON posts.user_id = users.id
    GROUP BY users.id
""").fetchall()
# [('Ryo', 2), ('Hana', 1)]
```

| JOIN の種類 | 結果 |
|---|---|
| `JOIN`（`INNER JOIN`） | 両方にある組み合わせだけ。投稿が 0 件のユーザーは出てこない |
| `LEFT JOIN` | 左（`FROM` の側）は全部出す。相手がいなければ `NULL`（投稿 0 件のユーザーも 0 として数えられる） |

## 消し方を決める：ON DELETE

ユーザーを消したら、その人の投稿はどうするか？を決めておきます。

| 書き方 | ユーザーを消すと |
|---|---|
| `ON DELETE CASCADE` | 投稿も一緒に消える |
| `ON DELETE SET NULL` | 投稿は残り、`user_id` が NULL になる（「退会したユーザー」） |
| `ON DELETE RESTRICT`（または指定なし） | 投稿が残っている間は、ユーザーを消せない（エラー） |

```python
conn.execute("DELETE FROM users WHERE id = 1")
conn.execute("SELECT * FROM posts").fetchall()
# [(3, 2, 'こんにちは')]      ← Ryo の投稿 2 件も消えた（CASCADE）
```

## ⚠️ SQLite の外部キーは、初期設定で「オフ」

ここが SQLite 最大の落とし穴です。**何もしないと、外部キーの約束は守られません**。

```python
conn = sqlite3.connect("app.db")
conn.execute("INSERT INTO posts (user_id, title) VALUES (99, '幽霊')")   # 存在しないユーザー 99 でも入ってしまう
```

接続するたびに、**最初に** 次の 1 行を実行します。

```python
conn = sqlite3.connect("app.db")
conn.execute("PRAGMA foreign_keys = ON")     # 接続ごとに必要

conn.execute("INSERT INTO posts (user_id, title) VALUES (99, '幽霊')")
# sqlite3.IntegrityError: FOREIGN KEY constraint failed   ← 守られた
```

実際に試したところ、**トランザクションの途中（INSERT や DELETE の後、commit の前）で実行しても効きませんでした**。必ず接続した直後に書きます。
PostgreSQL・MySQL（InnoDB）では最初から有効です。

## 多対多：中間テーブル

投稿とタグのように、**どちらから見ても「たくさん」** の関係は、組み合わせを 1 行ずつ記録するテーブルを作ります。

```sql
CREATE TABLE tags (
  id    INTEGER PRIMARY KEY,
  name  TEXT NOT NULL UNIQUE
);

CREATE TABLE post_tags (
  post_id  INTEGER NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
  tag_id   INTEGER NOT NULL REFERENCES tags(id)  ON DELETE CASCADE,
  PRIMARY KEY (post_id, tag_id)
);
```

```text
posts                    post_tags              tags
id | title               post_id | tag_id       id | name
3  | こんにちは           3       | 1     ───→  1  | 日記
10 | 京都で Python        10      | 2     ───→  2  | Python
                         10      | 3     ───→  3  | 旅行
```

`PRIMARY KEY (post_id, tag_id)` は「**2 つの列の組み合わせ** が主キー」という意味で、同じ投稿に同じタグを 2 回付けられなくなります。

```python
conn.execute("INSERT INTO post_tags VALUES (10, 2)")    # もう付いている
# sqlite3.IntegrityError: UNIQUE constraint failed: post_tags.post_id, post_tags.tag_id
```

### 2 回 JOIN して読む

```python
conn.execute("""
    SELECT posts.title, tags.name
    FROM posts
    JOIN post_tags ON post_tags.post_id = posts.id
    JOIN tags      ON tags.id = post_tags.tag_id
    ORDER BY posts.id, tags.id
""").fetchall()
# [('こんにちは', '日記'), ('京都でPython', 'Python'), ('京都でPython', '旅行')]
```

posts → post_tags → tags と、**中間テーブルを通って 2 回つなぐ** のが多対多の読み方です。

中間テーブルには、組み合わせについての情報を足すこともできます（例：`enrollments`（受講）テーブルに、学生 ID・講座 ID に加えて「受講開始日」「成績」）。

## AI のコードではこう出てくる

| 見かけたら | 読み方・チェック |
|---|---|
| `user_id INTEGER REFERENCES users(id)` | 1 対多の「多」の側。ユーザーごとに何件もある |
| `PRIMARY KEY (a_id, b_id)` だけのテーブル | 多対多の中間テーブル |
| `sqlite3.connect(...)` の後に `PRAGMA foreign_keys = ON` が無い | ⚠️ SQLite なら外部キーが守られていない |
| `ON DELETE CASCADE` | ✅／⚠️ 便利だが、親を 1 件消すと関係するものが **全部消える**。本当にそれでよいか |
| `JOIN` と `LEFT JOIN` | 0 件のものを結果に含めたいかどうかで使い分けているか |
| ID の列に外部キーの指定が無い（`user_id INTEGER` だけ） | ⚠️ 存在しない ID が入っても気づけない |

```quiz
? 「ユーザー 1 人がたくさんの注文をする」関係で、外部キーを置くのはどこ？
- users テーブルに `order_ids` 列を作る
+ orders テーブルに `user_id` 列を作る
- 必ず中間テーブルを作る
> 1 対多では「多」の側（orders）に「1」の側（users）の ID を持たせます。中間テーブルは多対多のときに使います。

? SQLite で `user_id INTEGER REFERENCES users(id)` と書いたのに、存在しない user_id の行が入ってしまった。原因は？
- REFERENCES の書き方が間違っている
+ 接続ごとに `PRAGMA foreign_keys = ON` を実行していない
- SQLite は外部キーに対応していない
> SQLite は初期設定で外部キーのチェックがオフです。接続した直後に `PRAGMA foreign_keys = ON` を実行します。

? 学生と講座（1 人が何講座も取り、1 講座に何人もいる）を表す設計として正しいのは？
- students に `course_id` を持たせる
- courses に `student_id` を持たせる
+ `student_id` と `course_id` の組み合わせを入れる中間テーブルを作る
> どちらから見ても「たくさん」なので多対多です。片方に ID を持たせると、1 人 1 講座しか表せません。
```
