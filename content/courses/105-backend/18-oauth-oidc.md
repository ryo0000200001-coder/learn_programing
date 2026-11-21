---
title: OAuth と OpenID Connect ― 「Microsoft でサインイン」の裏側
level: 3
minutes: 25
concepts: [auth, security, http_api]
summary: パスワードを預からずに「ログイン」と「権限」を借りる仕組み。認可コードフロー・PKCE・アクセストークンと ID トークンを、Microsoft ID プラットフォームを例に。
---
## このレッスンのゴール

- OAuth 2.0 と OpenID Connect（OIDC）が何のための仕組みかを説明できる
- 「認可コードフロー ＋ PKCE」の流れを、登場人物を使って順番に説明できる
- アクセストークンと ID トークンの違いが分かり、AI のコードで扱いを間違えていないか確認できる

レッスン 9 の「認証と認可」「`Authorization: Bearer <トークン>`」「JWT」を先に読んでおくと分かりやすいです。

## 「Microsoft でサインイン」は何をしているのか

レッスン 9 の最後で「ログインの仕組みは自分で作らない」という話をしました。そこで出てきた「Google でログイン」の正体が、このレッスンの **OAuth（オーオース）** です。

たとえ話は **ホテルのカードキー** です。

| | たとえ | 実際 |
|---|---|---|
| パスワード | マスターキー。渡すと何でもできてしまう | アプリには **絶対に渡さない** |
| アクセストークン | フロントが発行するカードキー | アプリが受け取るのはこれだけ |
| スコープ | 入れる部屋が決まっている | 「プロフィールを読む」「メールを読む」など、権限の範囲 |
| 有効期限 | 期限が来ると使えない | 多くは 1 時間ほど |
| 取り消し | フロントで無効にできる | ユーザーが後から連携を解除できる |

ポイントは、**アプリはユーザーのパスワードを一度も見ない** ことです。パスワードを入力するのは、Microsoft や Google のログイン画面だけです。

## OAuth と OpenID Connect の関係

| | OAuth 2.0 | OpenID Connect（OIDC） |
|---|---|---|
| 目的 | **認可**：「このアプリに〇〇を許可する」 | **認証**：「ログインした人は誰か」 |
| もらうもの | **アクセストークン**（API を呼ぶ鍵） | **ID トークン**（誰がログインしたかの証明書） |
| 関係 | 土台 | OAuth の上に乗った追加ルール |

OAuth だけでは「誰がログインしたか」をきちんと確かめられません。そこで、ログインに使うときは **OAuth ＋ OIDC をセットで使います**。
世の中で「OAuth 認証」と呼ばれているものは、ほとんどの場合この 2 つの組み合わせです。

## 登場人物

| 役割 | 正式な名前 | Microsoft の場合の例 |
|---|---|---|
| あなた | リソースオーナー（ユーザー） | Outlook や会社のアカウントを持っている人 |
| 自分が作るアプリ | クライアント | popup2027 や、FastAPI で作った Web アプリ |
| ログイン画面とトークンを出す係 | 認可サーバー | **Microsoft Entra ID**（旧 Azure AD）の `login.microsoftonline.com` |
| データを持っている API | リソースサーバー | **Microsoft Graph**（`graph.microsoft.com`。プロフィール・メール・予定表など） |

Microsoft のこの仕組み全体を **Microsoft ID プラットフォーム** と呼びます。使う前に、Azure ポータル（Microsoft のクラウドの管理画面）で **アプリの登録** をして、次の 2 つを決めます。

- **クライアント ID**：アプリの名札。`11111111-2222-...` のような長い ID が発行される（秘密ではない）
- **リダイレクト URI**：ログインが終わった後に戻ってくる URL（例 `http://localhost:8000/callback`）

## 認可コードフロー：いちばん大事な流れ

```text
① アプリ      → ユーザーを Microsoft のログイン画面へ移動させる（URL にクライアント ID・スコープなどを付けて）
② ユーザー    → Microsoft の画面でログインし、「このアプリに〇〇を許可しますか？」で同意する
③ Microsoft   → リダイレクト URI に戻す。URL に「認可コード」（使い捨ての引換券）が付いている
④ アプリ      → 裏側（サーバー同士）で、認可コードをトークンに引き換える
⑤ アプリ      → 受け取ったアクセストークンで API を呼ぶ／ID トークンで「誰か」を知る
```

なぜ ③ でいきなりトークンを渡さず、「引換券」を挟むのでしょうか。
③ はブラウザのアドレスバーを通るので、履歴などに残って盗まれる可能性があります。そこで、盗まれても単独では役に立たない **使い捨ての引換券** だけをブラウザに通し、本物のトークンは ④ の裏側のやり取りで受け取ります。

### ① ログイン画面への URL

```python
import base64, hashlib, secrets
from urllib.parse import urlencode

verifier = secrets.token_urlsafe(48)        # PKCE の「合言葉」（後で説明）。自分だけが覚えておく
challenge = base64.urlsafe_b64encode(
    hashlib.sha256(verifier.encode()).digest()
).rstrip(b"=").decode()                     # 合言葉をハッシュ化したもの。こちらは渡してよい
state = secrets.token_urlsafe(16)           # なりすまし対策のランダムな値

params = {
    "client_id": "11111111-2222-3333-4444-555555555555",
    "response_type": "code",                       # 「認可コードをください」
    "redirect_uri": "http://localhost:8000/callback",
    "scope": "openid profile User.Read",           # ログイン＋プロフィールを読む権限
    "state": state,
    "code_challenge": challenge,
    "code_challenge_method": "S256",
}
url = "https://login.microsoftonline.com/common/oauth2/v2.0/authorize?" + urlencode(params)
```

実行すると、こんな URL ができます（実際に実行して確認しました）。

```text
https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=1111...&response_type=code
&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Fcallback&scope=openid+profile+User.Read&state=Vuk...&code_challenge=2pD...&code_challenge_method=S256
```

| パラメータ | 意味 |
|---|---|
| `common` | 個人アカウントも会社のアカウントも OK。会社の人だけにしたいなら、ここを会社のテナント（組織）ID にする |
| `scope` の `openid` | 「OIDC でログインもしたい」の合図。これで ID トークンがもらえる |
| `scope` の `User.Read` | Microsoft Graph でプロフィールを読む権限 |
| `state` | ③ で戻ってきたとき、自分が送った値と同じかを確かめる。違えば偽物のリクエスト |

### ③〜④ 引換券をトークンに換える

③ で `http://localhost:8000/callback?code=0.AXo...&state=Vuk...` に戻ってきたら、サーバーがトークンを取りに行きます。

```python
import requests

resp = requests.post(
    "https://login.microsoftonline.com/common/oauth2/v2.0/token",
    data={
        "client_id": CLIENT_ID,
        "grant_type": "authorization_code",
        "code": code,                         # ③ で受け取った引換券
        "redirect_uri": "http://localhost:8000/callback",
        "code_verifier": verifier,            # ① で作った合言葉そのもの
        "client_secret": CLIENT_SECRET,       # サーバーで動くアプリだけ（環境変数から）
    },
)
tokens = resp.json()
# {"token_type": "Bearer", "expires_in": 3599, "access_token": "eyJ0...",
#  "id_token": "eyJ0...", "refresh_token": "1.AXo..." , ...}
```

### ⑤ API を呼ぶ

```python
me = requests.get(
    "https://graph.microsoft.com/v1.0/me",
    headers={"Authorization": "Bearer " + tokens["access_token"]},
).json()
# {"displayName": "Ryo ...", "mail": "...", "id": "..."}
```

レッスン 9 の `Authorization: Bearer <トークン>` と同じ形です。違うのは、**トークンを発行したのが自分のサーバーではなく Microsoft** だという点だけです。

## PKCE（ピクシー）：引換券を盗まれても大丈夫にする

スマホアプリやブラウザだけで動くアプリ（React など）は、`client_secret` を安全に隠しておけません（配布したアプリの中身は誰でも覗けるため）。
すると、③ の引換券を盗まれたら、他人がトークンに換えられてしまいます。そこで使うのが **PKCE** です。

```text
① 合言葉（verifier）を作り、そのハッシュ（challenge）だけを Microsoft に渡す
④ 引き換えるときに、合言葉そのもの（verifier）を見せる
   → Microsoft は「ハッシュ化したら ① の challenge と一致するか」を確かめる
```

ハッシュは元に戻せない（レッスン 9）ので、① の URL を覗き見ても合言葉は分かりません。**引換券と合言葉の両方を持っている本人だけ** がトークンを受け取れます。
いまは、サーバーで動くアプリでも PKCE を付けるのが推奨です。上の Python の計算方法が正しいことは、PKCE の仕様書（RFC 7636）に載っている例の値と一致することで確かめました。

## 2 種類のトークン（＋1）

| | アクセストークン | ID トークン | リフレッシュトークン |
|---|---|---|---|
| 何のため | API を呼ぶ鍵 | 「誰がログインしたか」の証明書 | 期限が切れたトークンを取り直す |
| 誰が読む | **API（リソースサーバー）** | **自分のアプリ** | 認可サーバーに送るだけ |
| 形 | JWT のことが多い（中身は API 用。アプリは読まない約束） | 必ず JWT | ただの長い文字列 |
| 寿命 | 短い（1 時間ほど） | 短い | 長い（数日〜数十日） |

ID トークンの中身（JWT の真ん中の部分）は、たとえばこうなっています。

```json
{
  "iss": "https://login.microsoftonline.com/<テナントID>/v2.0",
  "aud": "11111111-2222-3333-4444-555555555555",
  "exp": 1795000000,
  "nonce": "…",
  "name": "Ryo …",
  "preferred_username": "ryo@example.com",
  "oid": "…", "tid": "…", "sub": "…"
}
```

| 項目 | 意味 | 確かめること |
|---|---|---|
| `iss` | 発行者 | 本当に Microsoft が発行したか |
| `aud` | 宛先 | **自分のアプリのクライアント ID** 宛てか（他のアプリ宛ての ID トークンを使い回されていないか） |
| `exp` | 有効期限 | 期限内か |
| `nonce` | ログインのたびに作るランダムな値 | 自分が ① で送った値と一致するか（使い回し対策） |
| `oid` ＋ `tid` | ユーザーの ID ＋ 組織の ID | **ユーザーを見分けるのはこれ**（または `sub`） |

⚠️ `preferred_username` やメールアドレスは変わることがあり、別の人が同じ値を使える場合もあります。**データベースでユーザーを特定する鍵にしない** のが Microsoft の推奨です。

## 実際はライブラリに任せる：MSAL

ここまでの手順（state・PKCE・nonce・署名の確認・トークンの更新）を自分で全部書くと、どこかで間違えます。Microsoft の場合は公式ライブラリ **MSAL**（Microsoft Authentication Library）を使います。

```python
import msal

app = msal.ConfidentialClientApplication(
    CLIENT_ID,
    authority="https://login.microsoftonline.com/common",
    client_credential=CLIENT_SECRET,           # 環境変数から読む
)

# ① ログイン画面の URL を作る（state・PKCE・nonce は自動で付く）
flow = app.initiate_auth_code_flow(["User.Read"], redirect_uri="http://localhost:8000/callback")
# flow はセッションに保存しておき、ユーザーを flow["auth_uri"] へ移動させる

# ③〜④ 戻ってきたら、URL のパラメータを渡すだけ
result = app.acquire_token_by_auth_code_flow(flow, request.query_params)
if "error" in result:
    ...                                        # result["error_description"] に理由
access_token = result["access_token"]
user = result["id_token_claims"]               # 確認済みの ID トークンの中身
```

実際に動かして確かめたこと：

- `initiate_auth_code_flow` が作る URL には、`state`・`code_challenge`（PKCE）・`nonce` が自動で入る。`scope` には `openid profile offline_access` も自動で足される
- 逆に、自分で `["openid", "User.Read"]` のように書くと `ValueError: You cannot use any scope value that is reserved.` というエラーになる（MSAL が自動で付けるものなので、書かない）

| 種類 | MSAL のクラス | 例 |
|---|---|---|
| サーバーで動く（秘密を隠せる） | `ConfidentialClientApplication` | FastAPI・Django の Web アプリ |
| 利用者の手元で動く（秘密を隠せない） | `PublicClientApplication` | スマホアプリ・デスクトップアプリ |
| ブラウザで動く | `@azure/msal-browser`（JavaScript） | React などの SPA |

Python で言うと、MSAL は「OAuth の手順をまとめた便利な関数の詰め合わせ」です。Google なら Google の公式ライブラリや Authlib、まとめて扱うなら Auth0・Clerk・Firebase Authentication などを使います。**中でやっていることは、このレッスンの流れと同じ** です。

## AI のコードではこう出てくる

### 読むときのチェックポイント

| 見る場所 | ✅ よい | ⚠️ 要注意 |
|---|---|---|
| `client_secret` | 環境変数から読み、サーバーだけで使う | React やスマホアプリのコードに書いてある |
| `state` | 戻ってきたときに比べている | 送るだけで比べていない／付けていない |
| PKCE | `code_challenge` がある（またはライブラリ任せ） | 公開クライアントなのに PKCE なし |
| `response_type` | `code` | `token`（古い「インプリシットフロー」。今は非推奨） |
| ID トークン | ライブラリが署名・`aud`・`exp` を確認している | `jwt.decode(..., options={"verify_signature": False})` で中身を読んで信じている |
| ユーザーの特定 | `oid`＋`tid`（または `sub`） | メールアドレスで特定している |
| トークンの保存 | サーバーのセッションや HttpOnly Cookie | ブラウザの `localStorage`（XSS で盗まれやすい） |
| スコープ | 必要な分だけ | とりあえず全部の権限を要求している |

### よく出るエラー

| エラー | よくある原因 |
|---|---|
| `AADSTS50011`（リダイレクト URI が一致しない） | アプリの登録の URI とコードの URI が 1 文字でも違う（`http`/`https`、末尾の `/`、ポート番号） |
| `AADSTS700016`（アプリが見つからない） | クライアント ID の間違い、または `common` とテナントの設定が合っていない |
| `invalid_grant` | 認可コードの使い回し・期限切れ（数分で切れる）、`code_verifier` が合わない |
| API から `401` | アクセストークンの期限切れ。リフレッシュトークンで取り直す |
| API から `403` | ログインは OK だが、スコープ（権限）が足りない |

最後の 2 つは、レッスン 9 の 401（誰か分からない）と 403（権限が無い）の区別そのままです。

```quiz
? OAuth の「認可コードフロー」で、ブラウザのアドレスバーを通って渡されるのはどれ？
- アクセストークン
+ 使い捨ての認可コード（引換券）
- ユーザーのパスワード
> ブラウザを通る部分は盗まれる可能性があるので、単独では役に立たない引換券だけを通します。トークンへの引き換えは裏側のやり取りで行います。

? 自分のアプリが「ログインしたのは誰か」を知るために使うのは？
- アクセストークンの中身を読む
- リフレッシュトークン
+ ID トークン（OpenID Connect）
> アクセストークンは API に見せる鍵で、アプリが中身を読む前提ではありません。「誰か」は OIDC の ID トークンで確かめます。

? React だけで動くアプリ（サーバー無し）のコードに、AI が `client_secret` を書いていた。どう判断する？
- 環境変数にしてあれば問題ない
+ ブラウザに配られるコードは誰でも読めるので、秘密は置けない。公開クライアントとして PKCE を使う形に直す
- `client_secret` を Base64 にしておけば安全
> ブラウザで動くコードは、ビルド時の環境変数も含めて利用者に丸見えです。秘密を持てないアプリは「公開クライアント」として登録し、PKCE で守ります。

? PKCE の `code_verifier`（合言葉）について正しいのは？
- 最初に Microsoft のログイン画面の URL にそのまま付ける
- 誰に見られても問題ない値である
+ 最初はハッシュだけを渡し、合言葉そのものはトークンに引き換えるときに初めて見せる
> 合言葉のハッシュ（`code_challenge`）を先に渡し、あとで合言葉そのものを見せて一致を確かめます。ハッシュは元に戻せないので、途中で覗かれても合言葉は分かりません。
```
