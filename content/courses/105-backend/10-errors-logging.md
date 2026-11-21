---
title: エラー処理とログ
level: 3
minutes: 18
concepts: [errors, backend, security]
summary: 失敗を正しいステータスで返し、利用者には必要なことだけ、開発者にはログで詳しく伝える。
---
## このレッスンのゴール

- 「利用者に見せるエラー」と「ログに残すエラー」を分ける理由を説明できる
- FastAPI の例外ハンドラを読める
- 良いログ・悪いログを見分けられる

## エラーは 2 人に向けて出す

| 相手 | 知りたいこと | 出す場所 |
|---|---|---|
| **利用者（フロントエンド）** | 何がダメで、どうすれば直るか | レスポンス（ステータス ＋ 短いメッセージ） |
| **開発者（あなた・AI）** | どこで、なぜ失敗したか（細かい情報） | **ログ** |

この 2 つを混ぜてはいけません。たとえば 500 エラーのときに、プログラムの中身（どのファイルの何行目か・SQL 文・設定値）をレスポンスに出すと、**攻撃者にヒントを与えてしまいます**。

FastAPI は、想定外のエラーが起きると、利用者には `500 Internal Server Error` という文字だけを返します（実際に `1 / 0` を起こして確認しました）。詳しい内容はサーバーのログにだけ出ます。

## 想定内のエラーは、決まった形で返す

```python
class TaskNotFound(Exception):
    def __init__(self, task_id: int):
        self.task_id = task_id

@app.exception_handler(TaskNotFound)
async def task_not_found_handler(request: Request, exc: TaskNotFound):
    return JSONResponse(
        status_code=404,
        content={"error": {"code": "task_not_found", "message": f"タスク {exc.task_id} はありません"}},
    )

@app.get("/tasks/{task_id}")
def get_task(task_id: int, db = Depends(get_db)):
    row = db.execute("SELECT id, title FROM tasks WHERE id = ?", (task_id,)).fetchone()
    if row is None:
        raise TaskNotFound(task_id)
    return {"id": row[0], "title": row[1]}
```

- 自分用の例外（`TaskNotFound`）を作り、`raise` するだけにする
- `@app.exception_handler(...)` で、その例外を **どんなレスポンスにするか** を 1 か所にまとめる
- どの API でも同じ形のエラー（レッスン 4 の `code` ＋ `message`）が返るので、フロントエンドが扱いやすい

## どのステータスを返すか

| 状況 | ステータス |
|---|---|
| 形がおかしい・検証で不合格 | 400 / 422 |
| ログインしていない | 401 |
| 権限が無い | 403（隠したいなら 404） |
| 見つからない | 404 |
| すでにある・同時に更新された（例：同じメールアドレスで登録） | 409 |
| 呼びすぎ | 429 |
| 想定外のバグ | 500（**利用者には詳細を見せない**） |
| 外部サービス（Notion・決済など）が落ちている | 502 / 503 |

**「何でも 500」「何でも 200 で `{"ok": false}`」は避けましょう**。ステータスで分かれていると、リトライしてよいか（5xx）、入力を直すべきか（4xx）が呼ぶ側で判断できます。

## ログ：開発者への手紙

```python
import logging
log = logging.getLogger("app")

log.info("task created id=%s user=%s", task_id, user_id)
log.warning("notion api slow elapsed_ms=%d", elapsed)
log.exception("failed to send email task_id=%s", task_id)   # except の中で使うと、エラーの詳細も残る
```

| レベル | 使いどころ |
|---|---|
| `DEBUG` | 開発中だけ見たい細かい情報 |
| `INFO` | 普通の出来事（作成した・ログインした） |
| `WARNING` | 気をつけたいが動いている（遅い・リトライした） |
| `ERROR` | 失敗した |
| `CRITICAL` | サービス全体が危ない |

fashion_news が `log.info("%s: %d件", ...)` や `log.warning(...)` を使っていたのは、GitHub Actions のログで後から確認するためでした。

### 良いログの条件

- **後から検索できる**：`task created id=42 user=1` のように、何が・どれが、が分かる。本番では JSON の形で出すことも多い
- **1 つのリクエストを追える**：リクエストごとの ID（リクエスト ID）を全部のログに付けておくと、「このエラーの直前に何があったか」をたどれる
- **時刻とレベルが付いている**

### 書いてはいけないもの

- ❌ パスワード・トークン・API キー（`log.info("login %s %s", user, password)`）
- ❌ クレジットカード番号など、必要以上の個人情報
- ❌ `print()` だけで済ませる（レベル分けや出力先の切り替えができない）

AI のコードで、デバッグ用の `print(request_body)` が残っていたら、秘密が混ざっていないか確認しましょう。

## エラーを握りつぶさない

```python
try:
    send_email(user)
except Exception:
    pass          # ❌ 失敗に誰も気づけない
```

```python
try:
    send_email(user)
except EmailError:
    log.exception("failed to send email user=%s", user.id)   # ⭕ 記録して、
    # 必要ならリトライ用に印を付ける、利用者に「メールは後で送ります」と伝える、など
```

Python コースの「例外処理」で学んだ `except Exception: pass` の危うさは、バックエンドでは特に重大です。誰も画面を見ていないので、**ログに残らない失敗は、無かったことになってしまいます**。

## 本番では「見張り」を付ける

ログは出しているだけでは誰も読みません。本番では次のような道具で、問題が起きたら知らせてもらいます。

- **エラー監視**（Sentry など）：500 が起きたら、エラーの詳細と一緒に通知
- **死活監視**：数分ごとにアクセスして、応答が無ければ通知
- **ログの集約**（クラウドのログ画面など）：複数のサーバーのログをまとめて検索

```quiz
? 500 エラーのレスポンスに、SQL 文やファイルの行番号を含めるべき？
- 含めるべき。利用者が原因を調べられるから
+ 含めない。詳細はログにだけ残す
> 中身の情報は攻撃者へのヒントになります。

? 同じメールアドレスでユーザー登録しようとした。合うステータスは？
- 500
+ 409
- 200
> すでにあるものとぶつかった（衝突）ので 409 Conflict が合います。

? ログに書いてはいけないものは？
- タスクの ID
- 処理にかかった時間
+ ログイン時に入力されたパスワード
> ログは多くの人や道具が読むので、秘密情報を書いてはいけません。
```
