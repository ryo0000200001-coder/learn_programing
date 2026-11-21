---
title: 認証と認可 ― ログインと権限
level: 2
minutes: 22
concepts: [auth, security, backend]
summary: 「あなたは誰？」（認証）と「それをしてよい？」（認可）。パスワードの保存方法、セッションとトークン（JWT）。
---
## このレッスンのゴール

- 認証と認可の違いを説明できる
- パスワードを「ハッシュ化」して保存する理由が分かる
- セッション（Cookie）とトークン（JWT）の違いを説明できる
- 「他人のデータを見られない」ためのチェックを読める

## 認証と認可

| | 認証（Authentication） | 認可（Authorization） |
|---|---|---|
| 問い | **あなたは誰？** | **それをしてよい？** |
| 例 | ユーザー名とパスワードでログイン | 自分のタスクは消せるが、他人のタスクは消せない |
| 失敗したら | `401 Unauthorized` | `403 Forbidden`（または、存在を隠すため `404`） |

popup2027 の「あなたは誰？」で名前を選ぶ仕組みは、**認証ではありません**（誰でもどの名前でも選べる）。本当の認証には、本人しか知らない・持っていないもので確かめる必要があります。

## パスワードは「そのまま」保存しない

データベースが盗まれても、パスワードがばれないようにする必要があります。そこで **ハッシュ化** します。

```python
import bcrypt

hashed = bcrypt.hashpw("hana-2027".encode(), bcrypt.gensalt())
# b'$2b$12$1BfUQb7JcWaT5...'（60 文字。毎回違う文字列になる）

bcrypt.checkpw("hana-2027".encode(), hashed)   # True
bcrypt.checkpw("wrong".encode(), hashed)       # False
```

- **ハッシュ**：元に戻せない変換。ログインのときは、入力を同じ方法で変換して **一致するか** だけを比べる
- **ソルト**（`gensalt()`）：ランダムな値を混ぜ、同じパスワードでも毎回違う結果にする（よくあるパスワードの一覧表で一気に解読されるのを防ぐ）
- **わざと遅い計算**（bcrypt・Argon2 など）を使う。`$12$` は計算の重さ。総当たりで試されても時間がかかるように

⚠️ AI のコードで、パスワードをそのまま保存している・`md5` や `sha256` だけで済ませている、のを見たら要注意です。

## ログイン状態を覚える 2 つの方法

HTTP は前のリクエストを覚えていない（レッスン 3）ので、ログインしたことを毎回伝える必要があります。

### ① セッション ＋ Cookie

```text
ログイン成功 → サーバーが「整理券」（セッション ID）を発行して保存
            → レスポンスの Set-Cookie: session_id=abc123 でブラウザに渡す
以後のリクエスト → ブラウザが自動で Cookie: session_id=abc123 を付ける
             → サーバーは保存してある整理券と照合して「Ryo さんだ」と分かる
```

- サーバーが「誰がログイン中か」を覚えておく
- ログアウトさせたいときは、サーバー側で整理券を消せばよい
- 普通の Web サイトの定番

Cookie には安全のための設定を付けます。

| 設定 | 意味 |
|---|---|
| `HttpOnly` | JavaScript から読めない（XSS で盗まれにくい） |
| `Secure` | https のときだけ送る |
| `SameSite=Lax` | 他のサイトからのリクエストには付けない（なりすましの攻撃を防ぐ） |

### ② トークン（JWT）

```python
import jwt
from datetime import datetime, timedelta, timezone

payload = {"sub": "1", "exp": datetime.now(timezone.utc) + timedelta(hours=1)}
token = jwt.encode(payload, SECRET_KEY, algorithm="HS256")
# 'eyJhbGciOi...' （ヘッダー.中身.署名 の 3 つを . でつないだ文字列）
```

- サーバーは何も覚えず、**署名付きの「通行証」** を渡す
- 以後のリクエストで `Authorization: Bearer <トークン>` を付けてもらう
- サーバーは **署名を確かめる** だけで、「改ざんされていない、Ryo さん（sub: 1）の、期限内の通行証だ」と分かる
- スマホアプリや、サーバー同士の API でよく使う

⚠️ JWT の中身は **暗号化ではなく、誰でも読める**（Base64 という変換をしているだけ）。パスワードなどの秘密を入れてはいけません。
⚠️ `SECRET_KEY` が漏れると、誰でも通行証を偽造できます。環境変数に置き、十分に長いランダムな値にします（短すぎるとライブラリが警告を出すことも確認しました）。

```bash
python -c "import secrets; print(secrets.token_urlsafe(32))"
```

| | セッション | JWT |
|---|---|---|
| サーバーが覚えること | 誰がログイン中か | 何も覚えない（署名の鍵だけ） |
| すぐにログアウトさせる | 簡単（整理券を消す） | 難しい（期限が切れるまで有効。期限を短くするなどの工夫が要る） |
| 向いている場面 | ブラウザの Web サイト | スマホアプリ・API |

## FastAPI での形

```python
from fastapi import Depends, FastAPI, HTTPException
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer

bearer = HTTPBearer()

def get_current_user_id(cred: HTTPAuthorizationCredentials = Depends(bearer)) -> int:
    try:
        payload = jwt.decode(cred.credentials, SECRET_KEY, algorithms=["HS256"])
    except jwt.PyJWTError:
        raise HTTPException(status_code=401, detail="ログインし直してください")
    return int(payload["sub"])

@app.get("/tasks/{task_id}")
def get_task(task_id: int, user_id: int = Depends(get_current_user_id)):
    task = TASKS.get(task_id)
    if task is None or task["owner_id"] != user_id:          # ← 認可
        raise HTTPException(status_code=404, detail="タスクが見つかりません")
    return task
```

- `Depends(...)`：「この関数を呼ぶ前に、まず `get_current_user_id` を実行して、その結果を渡して」という **依存性注入**。ログインが必要な API すべてに 1 行足すだけで済む
- トークンが無い・偽物・期限切れなら 401（実際に試して確認済み）
- **`task["owner_id"] != user_id` のチェックが認可**。これが無いと、ログインさえすれば **URL の数字を変えるだけで他人のタスクが見えてしまう**

最後の点はとても多い脆弱性（IDOR と呼ばれます）で、AI のコードでも抜けがちです。**「ログインしているか」だけでなく「その人のデータか」を確かめているか** を必ず見ましょう。

## 自分で作らない、という選択

ログインの仕組みは、パスワード再設定・メール確認・2 段階認証・「Google でログイン」（OAuth）など、ちゃんと作ると大仕事で、間違えると被害が大きい部分です。
実際の開発では、**Firebase Authentication、Supabase Auth、Auth0、Clerk** などの既製品を使うことが多いです。popup2027 に本当のログインを付けるなら、Firebase Authentication が一番の近道です。

「Google でログイン」「Microsoft でサインイン」の裏側で何が起きているか（OAuth と OpenID Connect）は、レッスン 18 で詳しく見ます。

```quiz
? 「ログインはしているが、他人のタスクを消そうとした」ときに返すのに合うのは？
- 401
+ 403（または存在を隠す 404）
- 500
> 誰かは分かっているので 401 ではありません。権限が無いので 403、存在自体を隠したいなら 404 です。

? パスワードをデータベースに保存する正しい方法は？
- そのまま保存する
- 暗号化して、鍵を同じサーバーに置く
+ bcrypt などでハッシュ化して保存する
> ハッシュは元に戻せないので、データベースが盗まれてもパスワードがすぐには分かりません。

? JWT について正しいのは？
+ 中身は誰でも読めるので、秘密の情報を入れてはいけない
- 中身は暗号化されているので何を入れても安全
- サーバーにすべての JWT を保存しておく必要がある
> 署名で改ざんは防げますが、中身は Base64 で誰でも読めます。

? `GET /tasks/11` で、ログインはチェックしているが持ち主のチェックが無い。何が起きる？
+ ログインした人なら、数字を変えるだけで他人のタスクが見える
- 自動で自分のタスクだけになる
- 必ず 401 になる
> 認可（その人のデータかの確認）が抜けた、よくある脆弱性です。
```
