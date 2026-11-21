---
title: 総合演習 ― AI が書いた API の穴を探す
level: 4
minutes: 25
concepts: [security, backend, reading, ai_coding]
summary: 「動くけれど穴だらけ」の FastAPI のコードを読み、このコースで学んだ穴を探す。実際に攻撃して成功することを確かめ、直した版で同じ攻撃が防がれることまで確認する。
---
## このレッスンのゴール

- このコースのチェックポイントを使って、短い API のコードから脆弱性を見つけられる
- 見つけた穴が「なぜ危ないか」「どう直すか」を、自分の言葉で説明できる
- 直した後に、同じ攻撃で確かめるという進め方が分かる

## 問題のコード

AI に「メールアドレスとパスワードで登録・ログインできて、メモを見られる API を FastAPI で作って」と頼んだら、こんなコードが出てきたとします。**普通に使う分には、ちゃんと動きます**。

```python
import hashlib, sqlite3
from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse

app = FastAPI()
SECRET_KEY = "dev-secret-123"
conn = sqlite3.connect(":memory:", check_same_thread=False)
conn.executescript("""
CREATE TABLE users (id INTEGER PRIMARY KEY, email TEXT, password TEXT, is_admin INTEGER DEFAULT 0);
CREATE TABLE notes (id INTEGER PRIMARY KEY, owner_id INTEGER, body TEXT);
""")

@app.post("/signup")
async def signup(request: Request):
    data = await request.json()
    pw = hashlib.md5(data["password"].encode()).hexdigest()
    cols = ", ".join(data.keys())
    conn.execute(f"INSERT INTO users ({cols}) VALUES ({', '.join('?' * len(data))})",
                 [pw if k == "password" else v for k, v in data.items()])
    conn.commit()
    return {"ok": True}

@app.post("/login")
async def login(request: Request):
    data = await request.json()
    pw = hashlib.md5(data["password"].encode()).hexdigest()
    row = conn.execute(
        f"SELECT id FROM users WHERE email = '{data['email']}' AND password = '{pw}'"
    ).fetchone()
    if row is None:
        return {"error": "ログインできません"}
    return {"user_id": row[0]}

@app.get("/notes/{note_id}", response_class=HTMLResponse)
def show_note(note_id: int):
    row = conn.execute("SELECT body FROM notes WHERE id = ?", (note_id,)).fetchone()
    return f"<h1>メモ</h1><div>{row[0]}</div>"
```

### ✏️ まず自分で探してみる

先を読む前に、レッスン 1 の「見る順番」で探してみましょう。**8 個以上** あります。

1. 外から来るデータはどこから入る？
2. それは SQL・HTML にそのまま使われていない？
3. パスワード・秘密の扱いは？
4. 「誰が」「何を」してよいかを確かめている？
5. 予想外の入力（無い ID など）で、どうなる？

## 答え合わせ

| # | 場所 | 穴 | レッスン |
|---|---|---|---|
| ① | `SECRET_KEY = "dev-secret-123"` | 秘密がコードに直接書かれている（Git に残る・短くて推測しやすい） | AI と開発するコース |
| ② | `hashlib.md5(...)` | パスワードを MD5 で保存。盗まれたら総当たりですぐ戻される。ソルトも無い | 2 |
| ③ | `signup` の `data.keys()` をそのまま列名に | **マスアサインメント**：`"is_admin": 1` を送れば管理者で登録できる | 5 |
| ④ | 同じく `cols` を f 文字列で SQL に | 列名の部分に **SQL インジェクション**（キーの名前に SQL を仕込める） | 3 |
| ⑤ | `login` の f 文字列の SQL | **SQL インジェクション**：パスワードを知らなくてもログインできる | 3 |
| ⑥ | `show_note` の `f"<div>{row[0]}</div>"` | **XSS**：メモの中身の HTML がそのまま表示される | 4 |
| ⑦ | `show_note` に、ログインや持ち主の確認が無い | **IDOR**：ID を変えるだけで、誰のメモでも読める | バックエンドコース 9 |
| ⑧ | `row` が `None` のとき | 無い ID で `TypeError` → 500 エラー。エラーの詳細が漏れることもある | バックエンドコース 10 |
| ⑨ | `email` が `UNIQUE` でない・型のチェックが無い | 同じメールアドレスで何人も登録できる。`password` が無いと `KeyError` | データベース設計コース |
| ⑩ | `/login` に回数の制限が無い | 総当たりし放題 | 5 |

## 実際に攻撃してみる

FastAPI の `TestClient`（実際のサーバーを立てずにリクエストを送れる道具。バックエンドコースのレッスン 12）で、穴を突いてみました。

```python
c.post("/signup", json={"email": "ryo@example.com", "password": "hana-2027"})

# ③ マスアサインメント
c.post("/signup", json={"email": "evil@example.com", "password": "x", "is_admin": 1})
conn.execute("SELECT email, is_admin FROM users").fetchall()
# [('ryo@example.com', 0), ('evil@example.com', 1)]      ← 管理者として登録できた

# ⑤ SQL インジェクション
c.post("/login", json={"email": "ryo@example.com' --", "password": "wrong"}).json()
# {'user_id': 1}                                         ← パスワードが違うのにログインできた

# ⑥ XSS（メモに HTML が入っていた場合）
c.get("/notes/1").text
# '<h1>メモ</h1><div><img src=x onerror=alert(1)></div>'   ← そのまま出てくる

# ⑧ 無い ID
c.get("/notes/999").status_code
# 500
```

⑤ の入力 `ryo@example.com' --` は、`'` でメールアドレスの文字列を閉じ、`--` で **後ろのパスワードの条件をコメントにして消して** います。SQL は `... WHERE email = 'ryo@example.com' --' AND password = '...'` になり、メールアドレスだけで判定されました。

## 直した版

```python
import html, os, sqlite3
from argon2 import PasswordHasher
from argon2.exceptions import VerifyMismatchError
from fastapi import FastAPI, HTTPException, Header
from fastapi.responses import HTMLResponse
from pydantic import BaseModel, EmailStr

app = FastAPI()
SECRET_KEY = os.environ["SECRET_KEY"]                                   # ① 環境変数から
ph = PasswordHasher()
conn = sqlite3.connect(":memory:", check_same_thread=False)
conn.executescript("""
CREATE TABLE users (id INTEGER PRIMARY KEY, email TEXT NOT NULL UNIQUE,   -- ⑨ UNIQUE と NOT NULL
                    password_hash TEXT NOT NULL, is_admin INTEGER NOT NULL DEFAULT 0);
CREATE TABLE notes (id INTEGER PRIMARY KEY, owner_id INTEGER NOT NULL REFERENCES users(id), body TEXT NOT NULL);
""")

class Credentials(BaseModel):                                           # ③⑨ 受け取るのはこの 2 つだけ
    email: EmailStr
    password: str

@app.post("/signup")
def signup(data: Credentials):
    try:
        with conn:
            conn.execute("INSERT INTO users (email, password_hash) VALUES (?, ?)",   # ④ 列は固定
                         (data.email, ph.hash(data.password)))                        # ② Argon2
    except sqlite3.IntegrityError:
        raise HTTPException(409, "登録できませんでした")
    return {"ok": True}

@app.post("/login")
def login(data: Credentials):
    row = conn.execute("SELECT id, password_hash FROM users WHERE email = ?",        # ⑤ プレースホルダ
                       (data.email,)).fetchone()
    try:
        if row is None:
            raise VerifyMismatchError
        ph.verify(row[1], data.password)
    except VerifyMismatchError:
        raise HTTPException(401, "メールアドレスまたはパスワードが違います")   # どちらが違うか言わない
    return {"user_id": row[0]}           # 実際はここでセッションや JWT を発行する

@app.get("/notes/{note_id}", response_class=HTMLResponse)
def show_note(note_id: int, x_user_id: int = Header()):    # 説明を短くするためヘッダーで受け取っている
    row = conn.execute("SELECT body FROM notes WHERE id = ? AND owner_id = ?",       # ⑦ 持ち主の確認
                       (note_id, x_user_id)).fetchone()
    if row is None:
        raise HTTPException(404, "メモが見つかりません")                       # ⑧ 500 ではなく 404
    return f"<h1>メモ</h1><div>{html.escape(row[0])}</div>"                    # ⑥ エスケープ
```

⚠️ `x_user_id` をヘッダーで受け取っているのは、**この演習を短くするため** です。本物のアプリでは、利用者が自由に書き換えられるヘッダーを信じてはいけません。ログインしたときに発行したセッションや、署名を確かめた JWT（レッスン 5）から取り出します。
⑩ のレート制限は、`slowapi` などのライブラリや、Cloudflare などの手前の仕組みで足します（ここでは省略）。

### 同じ攻撃で確かめる

```text
③ マスアサインメント   → [('ryo@example.com', 0), ('evil@example.com', 0)]   is_admin は無視された
   同じメールで再登録   → 409
⑤ SQL インジェクション → 422（メールアドレスの形ではないので、Pydantic が受け付けない）
   パスワード違い       → {'detail': 'メールアドレスまたはパスワードが違います'}
   存在しないユーザー   → {'detail': 'メールアドレスまたはパスワードが違います'}   ← 同じ文言
⑥ XSS                  → <div>&lt;img src=x onerror=alert(1)&gt;</div>           文字として表示
⑦ 他人のメモ           → 404
⑧ 無い ID              → 404
```

（直した版を実際に動かして、上の攻撃をもう一度送った結果です）

⑤ は Pydantic の形のチェックで先に止まりましたが、**本当の守りはプレースホルダ** です。メールアドレスの形をしていても、`?` で渡していれば命令にはなりません。**1 つの対策に頼らない**（多層防御）のがポイントです。

### さらに一歩先

存在しないユーザーのときは `ph.verify` を呼ばずにすぐ返しているので、**返事の速さ** で会員かどうかが分かってしまう可能性が残っています（Argon2 の確認は時間がかかるため）。気にする場合は、ユーザーがいないときもダミーのハッシュで `verify` を実行して、時間をそろえます。セキュリティは、このように **1 つ直すと次が見えてくる** ものです。

## AI に頼むときのコツ

このコードは、「登録・ログイン・メモを見る API」という頼み方に、**機能としては正しく** 答えています。セキュリティは、頼まないと後回しにされがちです。

```text
✅ 頼み方の例
FastAPI で登録・ログイン API を作ってください。
- パスワードは Argon2 でハッシュ化
- SQL は必ずプレースホルダ
- 入力は Pydantic のモデルで、受け取る項目を限定
- 他人のデータは見られないように、持ち主を確認
- エラーメッセージでアカウントの有無が分からないように
作った後、このコードの脆弱性を自分で 5 つ以上探して、直してください。
```

そして、出てきたコードは **このレッスンの表で、自分でも確認** します。AI の「直しました」も、実際に攻撃を送って確かめるのが確実です。

```quiz
? 問題のコードの `/login` に `{"email": "ryo@example.com' --", "password": "wrong"}` を送るとログインできた。`--` の役割は？
- メールアドレスの区切り
+ SQL のコメントの始まりで、後ろのパスワードの条件を無視させている
- パスワードを空にする命令
> `--` から後ろはコメントになるので、`AND password = '...'` が消え、メールアドレスだけで判定されてしまいました。

? 直した版で、`is_admin` を送っても管理者にならなくなったのは、どの変更のおかげ？
- パスワードを Argon2 にしたから
+ 入力を `Credentials`（email と password だけ）のモデルで受け取り、INSERT する列も固定したから
- `html.escape` を使ったから
> 受け取る項目を決めておけば、余計な項目は無視されます。マスアサインメントの対策です。

? 直した版の `/notes/{note_id}` で、`WHERE id = ? AND owner_id = ?` にした目的は？
- 検索を速くするため
- XSS を防ぐため
+ ログイン中の人のメモだけを返し、ID を変えて他人のメモを読まれないようにするため
> 「その人のデータか」を確かめる認可のチェックです。無いと、ID を 1 つずつ変えるだけで全員のメモが読めてしまいます（IDOR）。
```
