---
title: API と REST ― エンドポイントの設計
level: 1
minutes: 15
concepts: [http_api, backend, data_formats]
summary: リソースと URL の決め方、JSON の返し方、API 設計のよくある約束ごと。
---
## このレッスンのゴール

- API と REST が何か説明できる
- 「名詞の URL ＋ 動詞のメソッド」で API を読める・設計できる
- 一覧・ページ分け・エラーの返し方の定番を知る

## API ＝ プログラム用の窓口

**API**（Application Programming Interface）は、プログラムが別のプログラムに頼みごとをするための **窓口の約束ごと** です。
Web の世界では「この URL にこのメソッドでリクエストすると、こういう JSON が返ってくる」という約束を指すことがほとんどです。

popup2027 の画面と Firebase、fashion_news と Notion の間でやりとりしていたのも API です。

## REST：URL は名詞、メソッドは動詞

REST は API の作り方の考え方（スタイル）です。一番大事なルールは、**URL で「何を（リソース）」、メソッドで「どうする」を表す** ことです。

| やりたいこと | REST らしい | REST らしくない |
|---|---|---|
| タスク一覧を見る | `GET /tasks` | `GET /getTasks` |
| タスクを 1 件見る | `GET /tasks/42` | `GET /task?id=42&action=show` |
| タスクを作る | `POST /tasks` | `POST /createTask` |
| タスクを変える | `PATCH /tasks/42` | `POST /tasks/42/update` |
| タスクを消す | `DELETE /tasks/42` | `GET /tasks/42/delete` |
| あるチームのタスク | `GET /teams/3/tasks` | `GET /tasks?team=3`（これも可） |

- リソースは **複数形の名詞**（`/tasks`、`/users`）
- 1 件は **ID** で指す（`/tasks/42`）
- 親子関係はパスで表す（`/teams/3/tasks`）
- 絞り込み・並べ替えはクエリで（`/tasks?status=done&sort=-due`）

## CRUD との対応

データ操作の基本 4 つ（**C**reate 作成・**R**ead 読み取り・**U**pdate 更新・**D**elete 削除）は、ほぼそのまま REST に対応します。

| CRUD | HTTP | SQL（レッスン 7） |
|---|---|---|
| Create | POST | INSERT |
| Read | GET | SELECT |
| Update | PUT / PATCH | UPDATE |
| Delete | DELETE | DELETE |

## 返す JSON の形

```json
{
  "id": 42,
  "title": "会場を探す",
  "status": "todo",
  "due": "2027-01-10",
  "assignee": {"id": 1, "name": "メンバーA"},
  "created_at": "2026-11-21T09:30:00Z"
}
```

よくある約束ごと：

- 日時は **ISO 8601**（`2026-11-21T09:30:00Z`）で、タイムゾーンを付ける（`Z` は UTC）
- キーの名前は `snake_case` か `camelCase` に **そろえる**
- お金は小数の誤差を避けるため、**円なら整数** で持つ

## 一覧は「ページ分け」する

1 万件のタスクを一度に返すと遅く、重くなります。一覧の API は一部ずつ返すのが普通です。

```http
GET /tasks?limit=20&offset=40      ← 41〜60 件目
GET /tasks?limit=20&cursor=abc123  ← 「続きの目印」方式（Notion API と同じ）
```

```json
{
  "items": [ ... 20 件 ... ],
  "next_cursor": "def456",
  "has_more": true
}
```

fashion_news の `find_child_page` が `has_more` と `next_cursor` を見てくり返し聞いていたのは、この **カーソル方式のページ分け** です。

## エラーも決まった形で返す

```http
HTTP/1.1 422 Unprocessable Entity

{
  "error": {
    "code": "validation_error",
    "message": "title は 1〜100 文字で入力してください",
    "field": "title"
  }
}
```

**ステータスコード ＋ 機械が読める code ＋ 人が読める message** の 3 点セットにしておくと、フロントエンドが「どの入力欄に赤字を出すか」を決めやすくなります。

## バージョン

```text
/v1/tasks   ← 今の版
/v2/tasks   ← 形を大きく変えた新しい版
```

API を使っている側がいるので、形を勝手に変えると相手のアプリが壊れます。大きく変えるときは新しい版を作るのが一般的です（Notion API の `Notion-Version` ヘッダーも同じ考え方）。

## REST 以外の API

| 種類 | 特徴 |
|---|---|
| **GraphQL** | 1 つの URL に「この項目がほしい」と問い合わせ文を送る。必要な分だけ取れる |
| **gRPC** | サーバー同士の高速な通信向け。JSON ではなくバイナリ |
| **WebSocket** | つなぎっぱなしで双方向にやりとり。チャットや popup2027 のようなリアルタイム更新向け |

```quiz
? 「id 7 のユーザーの注文一覧を取得する」REST らしい書き方は？
- POST /getOrders?user=7
+ GET /users/7/orders
- GET /orders/delete?user=7
> URL は名詞（リソース）、操作はメソッドで表します。

? タスクを削除する REST らしいリクエストは？
- GET /tasks/42/delete
+ DELETE /tasks/42
- POST /deleteTask
> GET でデータを変えるのは避けます（勝手にたどられて消されることがある）。

? 一覧 API が `{"items": [...], "has_more": true, "next_cursor": "x"}` を返した。続きを取るには？
+ cursor=x を付けてもう一度リクエストする
- 同じリクエストをもう一度送る
- items の最後の要素を削除する
> カーソル方式のページ分けです。has_more が false になるまで続けます。
```
