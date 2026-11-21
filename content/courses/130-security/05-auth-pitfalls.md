---
title: ログインとセッションの落とし穴
level: 3
minutes: 22
concepts: [security, auth, http_api]
summary: 署名を確かめない JWT、送られてきた is_admin をそのまま保存する、エラーメッセージで会員かどうかがばれる、総当たりし放題、CSRF。ログインの周りで AI が見落としやすい穴を、再現しながら。
---
## このレッスンのゴール

- JWT の署名を確かめないと、誰でも管理者になれてしまうことを説明できる
- 「送られてきた値をそのまま保存する」（マスアサインメント）の危険と直し方が分かる
- アカウントの列挙・総当たり・CSRF とその対策を知り、AI のコードで確認できる

バックエンドコースのレッスン 9（認証と認可）・11（定番 10）・18（OAuth）で学んだ基本の、**一歩先の落とし穴** です。

## ① 署名を確かめない JWT

バックエンドコースのレッスン 9 で、「JWT の中身は誰でも読める。署名で改ざんを防ぐ」と学びました。では、**署名を確かめなかったら** どうなるでしょうか。

```python
import jwt
token = jwt.encode({"sub": "2", "role": "user"}, SECRET, algorithm="HS256")
# 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyIiwicm9sZSI6InVzZXIifQ.plsq...'
#   └ ヘッダー                         └ 中身（Base64）                      └ 署名
```

攻撃者は、真ん中の部分を `{"sub":"1","role":"admin"}` に書き換えた偽のトークンを作れます（署名はそのまま）。

```python
jwt.decode(forged, options={"verify_signature": False})
# {'sub': '1', 'role': 'admin'}        ← ⚠️ そのまま信じてしまった

jwt.decode(forged, SECRET, algorithms=["HS256"])
# jwt.exceptions.InvalidSignatureError: Signature verification failed   ← ✅ 見破った
```

（PyJWT 2.15 で実際に試しました）

AI のコードで `verify_signature: False` を見かけるのは、「とりあえず中身を読みたい」ときに書かれたものが残っている場合が多いです。**ログインの判定に使うなら、必ず署名を確かめます**。

### `alg: none` の罠

JWT のヘッダーには、署名の方式（`alg`）が書かれています。昔のライブラリには、ヘッダーに `"alg": "none"`（署名なし）と書かれていると、**署名を確かめずに受け入れてしまう** ものがありました。

```python
jwt.decode(none_token, SECRET, algorithms=["HS256"])
# jwt.exceptions.InvalidAlgorithmError: The specified alg value is not allowed
```

今の PyJWT は、`algorithms=["HS256"]` で **受け入れる方式を自分で決める** ので、`none` は拒否されます。`algorithms` を必ず指定するのがポイントです。

## ② 送られてきた値をそのまま保存する（マスアサインメント）

プロフィールの更新 API で、送られてきた JSON をそのまま反映するコードです。

```python
user = {"id": 2, "name": "ryo", "is_admin": False}
body = {"name": "Ryo", "is_admin": True}          # ← 攻撃者が is_admin を勝手に足した

user.update(body)
# {'id': 2, 'name': 'Ryo', 'is_admin': True}     ← ⚠️ 管理者になってしまった
```

画面には「名前」の欄しかなくても、**リクエストは自由に作れる**（レッスン 1）ので、`is_admin`・`role`・`price`・`user_id` などを足して送られます。

### 直し方：変えてよい項目を決める

```python
ALLOWED = {"name", "bio"}
user.update({k: v for k, v in body.items() if k in ALLOWED})
# {'id': 2, 'name': 'Ryo', 'is_admin': False}    ← ✅ is_admin は無視された
```

FastAPI なら、**入力用のモデルを別に作る** のが定番です。

```python
class ProfileUpdate(BaseModel):     # 利用者が変えてよいものだけ
    name: str
    bio: str | None = None

class User(BaseModel):              # データベースの中身（is_admin を含む）
    id: int
    name: str
    bio: str | None
    is_admin: bool

@app.patch("/me")
def update_me(data: ProfileUpdate, user: User = Depends(current_user)):
    ...   # data には name と bio しか入らない（is_admin を送っても無視される）
```

ORM で `User(**request.json)`、JavaScript で `Object.assign(user, req.body)` や `{ ...user, ...req.body }` を見たら、同じ穴を疑います。

## ③ エラーメッセージで会員かどうかがばれる

```text
⚠️ 「そのメールアドレスは登録されていません」
⚠️ 「パスワードが違います」
```

この 2 つを出し分けると、攻撃者は **どのメールアドレスが会員か** を調べられます（アカウントの列挙）。会員だと分かったアドレスに、パスワードの総当たりやフィッシングメールを集中させます。

```text
✅ 「メールアドレスまたはパスワードが違います」
✅ （パスワードリセット）「登録されていれば、メールを送りました」
```

## ④ 総当たりし放題

ログインの API に回数の制限が無いと、よくあるパスワードを 1 秒に何百回も試されます。

| 対策 | 内容 |
|---|---|
| **レート制限** | 同じ IP・同じアカウントから、1 分に 5 回までなど（`slowapi`、`express-rate-limit`、Cloudflare の設定） |
| 失敗が続いたら待たせる | 5 回失敗したら 15 分ロック、など。⚠️ 永久ロックは、他人にわざと失敗されて使えなくなる |
| 2 段階認証（MFA） | パスワードが当たっても、もう 1 つの確認が必要 |
| 漏れたパスワードの拒否 | 「password」「12345678」などを登録させない |

パスワードリセットや確認コードの入力も、同じように制限が必要です。6 桁のコードは 100 万通りしかないので、制限が無ければ総当たりで当たります。

## ⑤ CSRF：知らないうちに操作させられる

あなたが銀行のサイトにログインしたまま、攻撃者の罠サイトを開いたとします。罠サイトには、こんなフォームが隠されています。

```html
<form action="https://bank.example/transfer" method="POST" id="f">
  <input name="to" value="攻撃者の口座">
  <input name="amount" value="100000">
</form>
<script>document.getElementById("f").submit()</script>
```

ブラウザは、bank.example へのリクエストに **bank.example のログイン Cookie を自動で付けて** しまいます。銀行から見ると、本人からの正しい送金依頼に見えます。これが **CSRF**（クロスサイト・リクエスト・フォージェリ）です。

| 対策 | 仕組み |
|---|---|
| Cookie に `SameSite=Lax`（または `Strict`） | 他のサイトからの POST には Cookie を付けない。今のブラウザの多くは、指定が無いと Lax 扱い |
| CSRF トークン | フォームに、そのサイトだけが知っているランダムな値を入れ、サーバーで確かめる（Django・Rails などは標準装備） |
| 大事な操作は再確認 | 送金・パスワード変更の前に、パスワードの再入力 |
| 状態を変える操作に GET を使わない | `GET /delete?id=3` は、画像のタグ `<img src="...">` だけで実行されてしまう |

トークンを `Authorization` ヘッダーで送る API（ブラウザが自動で付けない）なら、CSRF は起きにくくなります。その代わり、トークンを JavaScript から読める場所に置くことになるので、XSS（レッスン 4）に注意が必要です。

## Cookie の設定（おさらい）

| 設定 | 守るもの |
|---|---|
| `HttpOnly` | JavaScript から読めない → XSS で盗まれにくい |
| `Secure` | https のときだけ送る → 通信の途中で盗まれにくい |
| `SameSite=Lax` | 他のサイトからのリクエストに付けない → CSRF |
| 短めの有効期限・ログアウトで無効化 | 盗まれたときの被害を小さく |

## AI のコードではこう出てくる

| 見かけたら | 判定 |
|---|---|
| `jwt.decode(..., options={"verify_signature": False})` | ⚠️ ログイン判定に使っているなら致命的 |
| `jwt.decode(token, key)`（`algorithms` が無い） | ⚠️ PyJWT 2 では必須。他のライブラリでも方式を固定する |
| `user.update(request.json)` / `User(**body)` / `Object.assign(user, req.body)` | ⚠️ マスアサインメント。入力用のモデルか許可リストに |
| ログインのエラーが「登録されていません」「パスワードが違います」で分かれている | ⚠️ アカウントの列挙 |
| `/login` にレート制限が無い | ⚠️ 総当たり |
| `@app.get("/delete/{id}")` | ⚠️ 状態を変える操作は POST / DELETE に |
| `set_cookie("session", ..., httponly=True, secure=True, samesite="lax")` | ✅ |

```quiz
? `jwt.decode(token, options={"verify_signature": False})` の結果でログイン中のユーザーを決めている。何が起きる？
- 処理が速くなるだけで、問題はない
+ 攻撃者が中身を書き換えた偽のトークンでも受け入れてしまい、誰にでもなりすませる
- トークンの期限が切れなくなるだけ
> 署名を確かめないと、`{"sub": "1", "role": "admin"}` のように書き換えた偽物を見破れません。実際に試すと、偽物の中身がそのまま返ってきました。

? プロフィール更新 API で `user.update(request.json)` としている。攻撃者がやりそうなことは？
- 名前を長くする
+ `is_admin: true` などをリクエストに足して、自分を管理者にする
- 何もできない（画面に is_admin の欄が無いので）
> リクエストは自由に作れるので、画面に無い項目も送れます。変えてよい項目だけを受け取るようにします。

? ログイン画面のエラーメッセージとして、もっとも適切なのは？
- 「このメールアドレスは登録されていません」
- 「パスワードが 1 文字違います」
+ 「メールアドレスまたはパスワードが違います」
> どちらが違うかを出し分けると、どのメールアドレスが会員かを調べられてしまいます。
```
