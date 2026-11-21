---
title: Cloudflare Workers と D1 ― サーバーレスで API とデータベース
level: 4
minutes: 22
concepts: [database, deploy, backend, http_api]
summary: サーバーを持たずに API を公開する Cloudflare Workers と、SQLite がそのまま使えるデータベース D1。設定ファイル・バインディング・SQL の書き方を、実際に動かしたコードで読む。
---
## このレッスンのゴール

- Cloudflare Workers と D1 が何で、普通のサーバー＋データベースと何が違うかを説明できる
- `wrangler.jsonc` の「バインディング」と、コードの `env.DB` のつながりを読める
- D1 を使う JavaScript のコードを、Python の `sqlite3`（レッスン 7）と対応づけて読み、危ない書き方に気づける

レッスン 7（SQL と CRUD）とレッスン 15（デプロイ）の続きです。コードは JavaScript ですが、Python との対応を必ず並べます。

## Workers と D1 とは

| | 何か | Python の世界で言うと |
|---|---|---|
| **Cloudflare Workers** | Cloudflare のサーバーで動く **サーバーレス関数**（レッスン 15 の表）。リクエストが来るたびに関数が呼ばれる | FastAPI のアプリを、サーバーの用意なしで動かしてもらうイメージ |
| **D1**（ディーワン） | Cloudflare の **サーバーレスな SQL データベース**。中身は **SQLite** | `sqlite3.connect("app.db")` の app.db を、Cloudflare が預かって管理してくれる |
| **Wrangler**（ラングラー） | 開発・デプロイ用のコマンド（`npx wrangler ...`） | `uvicorn` と、デプロイ用のツールをまとめたもの |

**サーバーレス** とは「サーバーが無い」ではなく、**サーバーの用意・OS の更新・台数の調整を、自分でしなくてよい** という意味です。

レッスン 7 で学んだ SQL（`CREATE TABLE`・`SELECT`・`INSERT` …）と `?` の書き方が、D1 でも **ほぼそのまま** 使えます。

## 全体のファイル

```text
tasks-api/
  wrangler.jsonc   ← 設定（Worker の名前・どの D1 を使うか）
  schema.sql       ← テーブルを作る SQL
  src/index.js     ← Worker 本体（リクエストを受けて返す）
```

### 設定ファイルと「バインディング」

まずデータベースを作ります。

```bash
npx wrangler d1 create tasks-db
```

表示された `database_id` を設定ファイルに書きます（`.jsonc` は「コメントを書いてもよい JSON」）。

```jsonc
{
  "name": "tasks-api",
  "main": "src/index.js",
  "compatibility_date": "2026-11-01",
  "d1_databases": [
    {
      "binding": "DB",                 // ← コードの中で env.DB として使える名前
      "database_name": "tasks-db",
      "database_id": "（create のときに表示された ID）"
    }
  ]
}
```

**バインディング** は、「このデータベースを `DB` という名前で Worker に渡してね」という設定です。
Python で言うと、`DATABASE_URL` を環境変数で渡す（レッスン 15）のに近いですが、渡されるのは URL の文字列ではなく **すぐ使える接続そのもの** です。パスワードや接続文字列をコードに書かなくてよいのが利点です。

- `compatibility_date`：「この日付の時点の Workers の動き方に合わせて」という指定。日付を変えると細かい動作が変わることがある
- `database_id` は秘密ではありません（これだけでは他人はデータベースに触れません）。ただし API トークンなどの本物の秘密は、`npx wrangler secret put 名前` で登録し、設定ファイルやコードには書きません

### テーブルを作る

```sql
CREATE TABLE IF NOT EXISTS tasks (
  id     INTEGER PRIMARY KEY AUTOINCREMENT,
  title  TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'todo'
);
INSERT INTO tasks (title) VALUES ('会場を探す'), ('チラシを作る');
```

```bash
npx wrangler d1 execute tasks-db --local  --file=./schema.sql   # 手元の練習用データベースに
npx wrangler d1 execute tasks-db --remote --file=./schema.sql   # 本番（Cloudflare 上）に
```

⚠️ `--local` と `--remote` の違いが大事です。`--local` は自分のパソコンの中のコピー、`--remote` は **本物のデータ** です。AI が出したコマンドに `--remote` が付いていたら、本番のデータを変えてよいのか確認しましょう。

## Worker 本体を読む

```javascript
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // GET /tasks → 一覧
    if (request.method === "GET" && url.pathname === "/tasks") {
      const { results } = await env.DB
        .prepare("SELECT id, title, status FROM tasks ORDER BY id")
        .all();
      return Response.json(results);
    }

    // GET /tasks/1 → 1 件
    const m = url.pathname.match(/^\/tasks\/(\d+)$/);
    if (request.method === "GET" && m) {
      const task = await env.DB
        .prepare("SELECT id, title, status FROM tasks WHERE id = ?")
        .bind(Number(m[1]))
        .first();
      if (task === null) {
        return Response.json({ error: "タスクが見つかりません" }, { status: 404 });
      }
      return Response.json(task);
    }

    // POST /tasks → 追加
    if (request.method === "POST" && url.pathname === "/tasks") {
      const body = await request.json();
      if (typeof body.title !== "string" || body.title.trim() === "") {
        return Response.json({ error: "title は必須です" }, { status: 400 });
      }
      const result = await env.DB
        .prepare("INSERT INTO tasks (title) VALUES (?)")
        .bind(body.title)
        .run();
      return Response.json({ id: result.meta.last_row_id }, { status: 201 });
    }

    return Response.json({ error: "Not Found" }, { status: 404 });
  },
};
```

### 入口：`fetch(request, env)`

- Worker は `fetch` という関数を 1 つ持ったオブジェクトを `export default` します（JavaScript コースのモジュールのレッスン）
- **リクエストが 1 つ来るたびに `fetch` が呼ばれ**、返した `Response` がそのままレスポンスになる
- `env` に、設定ファイルのバインディング（`env.DB`）や、登録した秘密（`env.API_KEY` など）が入っている
- `async` / `await`：データベースの返事を待つ間、他の仕事ができるようにする書き方（JavaScript コースの非同期処理）

FastAPI では `@app.get("/tasks")` で道案内（ルーティング、レッスン 5）をしましたが、ここでは `if` で `request.method` と `url.pathname` を見て、自分で振り分けています。大きくなると **Hono** などのフレームワークを使い、`app.get("/tasks", ...)` と FastAPI に似た書き方になります。

### D1 の 4 つの命令

| D1（JavaScript） | 意味 | Python の `sqlite3` で言うと |
|---|---|---|
| `env.DB.prepare(sql)` | SQL を準備する | `conn.execute(sql, ...)` の `sql` 部分 |
| `.bind(値1, 値2)` | `?` に値を入れる | `conn.execute(sql, (値1, 値2))` のタプル |
| `.all()` | 全部の行を取る → `{ results: [...] }` | `cur.fetchall()` |
| `.first()` | 最初の 1 行を取る。無ければ `null` | `cur.fetchone()`（無ければ `None`） |
| `.run()` | 実行だけ（INSERT・UPDATE・DELETE）。`meta.last_row_id` などが返る | `cur.lastrowid` |

- `const { results } = ...`：返ってきたオブジェクトから `results` だけを取り出す書き方（分割代入）。Python で言うと `results = resp["results"]`
- Python の `sqlite3` では `conn.commit()` が必要でしたが、D1 は **1 つの命令ごとに自動で確定** します。まとめて実行したいときは `env.DB.batch([...])` を使い、途中で失敗したら全部取り消されます

## 実際に動かして確かめた

`npx wrangler dev`（手元で Worker を動かすコマンド。Python で言うと `uvicorn main:app --reload`）で起動し、`curl` でリクエストを送りました。

```text
GET  /tasks                    → [{"id":1,"title":"会場を探す",...},{"id":2,"title":"チラシを作る",...}]
POST /tasks {"title":"受付を決める"} → {"id":3}               201
POST /tasks {"title":""}       → {"error":"title は必須です"} 400
GET  /tasks/3                  → {"id":3,"title":"受付を決める","status":"todo"}
GET  /tasks/99                 → {"error":"タスクが見つかりません"} 404
GET  /tasks/1%20OR%201=1       → {"error":"Not Found"}       404
```

最後の行は SQL インジェクション（レッスン 7・11）を試したものです。正規表現 `(\d+)` が数字しか通さないうえに、値は `.bind()` で渡しているので、SQL の一部として実行されることはありません。

## 普通のサーバー＋データベースとの違い

| | Workers ＋ D1 | FastAPI ＋ PostgreSQL（レッスン 15 の PaaS など） |
|---|---|---|
| サーバーの管理 | 不要 | PaaS ならほぼ不要、VPS なら必要 |
| 動く場所 | 世界中の Cloudflare の拠点（利用者の近くで動く） | 選んだ 1 つの地域 |
| 待機中の料金 | リクエストが無ければほぼかからない | 起動している間かかることが多い |
| 言語 | JavaScript / TypeScript が中心（Python も一部対応） | 自由 |
| データベースの大きさ | 1 つのデータベースに容量の上限がある（上限は料金プランで違い、変わることもあるので公式の料金ページで確認） | 大きなデータも扱いやすい |
| 向いている場面 | 個人開発・小〜中規模・アクセスに波がある API | 大規模・複雑な処理・長時間の処理 |

Workers は **短い処理を素早く返す** のが得意です。ファイルの変換のような重い処理や、何分もかかる処理は、別の仕組み（レッスン 13 の非同期ジョブなど）と組み合わせます。

## AI のコードではこう出てくる

| 見る場所 | ✅ よい | ⚠️ 要注意 |
|---|---|---|
| SQL の値 | `.prepare("... WHERE id = ?").bind(id)` | `` .prepare(`... WHERE id = ${id}`) ``（テンプレート文字列で SQL を組み立てている → SQL インジェクション） |
| 見つからないとき | `.first()` の `null` を確かめて 404 | `null` のまま `task.title` を読んでエラー（500） |
| 入力のチェック | 型・空文字を確かめて 400（レッスン 6） | `request.json()` の中身をそのまま保存 |
| 秘密 | `env.API_KEY`（`wrangler secret put` で登録） | `wrangler.jsonc` やコードに直接書いてある |
| コマンド | 練習は `--local` | 確認なしに `--remote` でテーブルを消す・作り直す |
| 他人のデータ | ログイン中のユーザーの ID で `WHERE owner_id = ?` も付けている | ID だけで取り出している（IDOR、レッスン 9） |

⚠️ 一番大事なのは 1 行目です。JavaScript の `` `...${id}...` `` は、Python の f 文字列 `f"... {id} ..."` と同じで、**SQL を文字列の連結で作ってしまう** 書き方です。D1 でも、必ず `?` と `.bind()` を使います。

### レッスン 18 とつなげると

「Microsoft でサインイン」（レッスン 18）と組み合わせると、たとえばこんな形になります。

```text
ブラウザ → Microsoft でログイン → ID トークンの oid ＋ tid でユーザーを特定
       → Worker の API（ログイン済みか確認）→ D1 の tasks から WHERE owner = ? で自分の分だけ返す
```

```quiz
? `wrangler.jsonc` の `"binding": "DB"` の意味として正しいのは？
- データベースのパスワードを DB という名前で保存する
+ この D1 データベースを、Worker のコードの中で `env.DB` として使えるようにする
- DB という名前の新しいテーブルを作る
> バインディングは、Cloudflare のサービス（D1 など）を Worker に渡すための名前です。コードからは `env.DB.prepare(...)` のように使います。

? AI が次のコードを書いた。一番の問題は？ `` env.DB.prepare(`SELECT * FROM tasks WHERE title = '${title}'`).all() ``
- `.all()` ではなく `.first()` を使うべき
- `SELECT *` は遅いので必ずエラーになる
+ 入力を文字列に直接埋め込んでいるので、SQL インジェクションの危険がある
> Python の f 文字列で SQL を組み立てるのと同じ危険です。`.prepare("SELECT * FROM tasks WHERE title = ?").bind(title)` のように、`?` と `.bind()` で値を渡します。

? `.first()` で該当する行が無かったとき、返ってくるのは？
+ `null`
- 空の配列 `[]`
- 例外（エラー）が投げられる
> 行が無いと `null` が返ります（Python の `fetchone()` が `None` を返すのと同じ）。確かめずに `task.title` と書くとエラーになるので、上のコードのように 404 を返します。

? `npx wrangler d1 execute tasks-db --remote --command "DROP TABLE tasks"` を AI が提案してきた。どう考える？
- `--remote` は手元の練習用なので、気にせず実行してよい
+ `--remote` は本番のデータベースなので、本当に消してよいかを確かめてから実行する
- `DROP TABLE` は D1 では使えないので、何も起きない
> `--local` が手元のコピー、`--remote` が Cloudflare 上の本番です。`DROP TABLE` はテーブルごとデータを消すので、本番では特に慎重にします。
```
