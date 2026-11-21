---
title: 設定と環境変数 ― 同じコードを、どこでも動かす
level: 2
minutes: 18
concepts: [deploy, security, type_hints]
summary: 設定を環境変数に出す理由と、読み込みの優先順位。pydantic-settings で「足りない・おかしい設定なら起動しない」ようにする。`bool("false")` の罠、本番でのシークレットの登録場所。
---
## このレッスンのゴール

- 設定をコードから環境変数に出す理由と、`.env` の役割を説明できる
- 環境変数と `.env` のどちらが優先されるかが分かる
- 設定を型付きで読み込み、足りない設定に起動時に気づけるようにする方法が分かる

AI と開発するコースの「秘密情報と環境変数」で、API キーを `.env` に置くことを学びました。ここでは、秘密だけでなく **設定全体** の扱い方を見ます。

## 何を設定にするか

| 設定にするもの | 例 |
|---|---|
| 環境ごとに違うもの | データベースの URL、API の URL、`DEBUG` のオン・オフ |
| 秘密 | API キー、パスワード、署名の鍵（`SECRET_KEY`） |
| あとで変えたくなる値 | メールの送信元、1 ページの件数、機能のオン・オフ |

| 設定にしないもの | 例 |
|---|---|
| 環境で変わらないもの | 税率の計算方法、画面の文言 |

## 読み込みの順番

```text
① コードに書いた初期値     （いちばん弱い）
② .env ファイル
③ 実際の環境変数           （いちばん強い）
```

多くのライブラリ（`python-dotenv`・`pydantic-settings`・Node.js の `dotenv`）は、**すでに環境変数があれば、`.env` の値で上書きしません**。手元では `.env`、本番ではクラウドの設定画面で登録した環境変数、と切り替えられるのはこのためです。

## pydantic-settings：型付きの設定

```python
from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env")
    app_env: str = "development"     # 初期値あり
    database_url: str                # 初期値なし → 必須
    debug: bool = False
    secret_key: str                  # 必須

settings = Settings()
```

```bash
# .env
APP_ENV=development
DATABASE_URL=sqlite:///dev.db
DEBUG=true
```

実際に、いろいろな状態で起動してみました。

```text
① .env だけ（SECRET_KEY が無い）
pydantic_core._pydantic_core.ValidationError: 1 validation error for Settings
secret_key
  Field required [type=missing, ...]                         ← 起動した瞬間に止まった

② SECRET_KEY=abcd1234 を環境変数で足す
development sqlite:///dev.db True abcd...                    ← .env の値と合わせて読めた

③ 環境変数で APP_ENV=production DEBUG=false DATABASE_URL=postgresql://u@db/app も足す
production postgresql://u@db/app False abcd...               ← 環境変数が .env より優先された

④ DEBUG=yes-please
debug
  Input should be a valid boolean, unable to interpret input  ← おかしな値も止まった
```

**足りない・おかしい設定は、起動したときにすぐ止まる** のが大事です。設定の漏れに、利用者がその機能を使ったときに初めて気づく（本番で 500 エラー）より、ずっと安全です。
環境変数の名前は大文字（`DATABASE_URL`）、Python の属性は小文字（`database_url`）ですが、pydantic-settings は大文字・小文字を区別せずに対応させてくれます。

### `os.environ` で読むときの罠

```python
import os
DEBUG = bool(os.environ.get("DEBUG"))    # ⚠️
bool("false")                            # True！
```

環境変数は **すべて文字列** です。空でない文字列は `bool()` すると全部 `True` になるので、`DEBUG=false` と書いても **デバッグがオンになります**（実行して確認）。

```python
DEBUG = os.environ.get("DEBUG", "").lower() in ("1", "true", "yes")   # ✅ 自分で判定する
```

数値も `int(os.environ["PORT"])` のように変換が必要です。型付きの設定ライブラリを使うと、こうした変換と確認をまとめて任せられます。

## .env を共有する方法：.env.example

`.env` は Git に入れませんが、**どんな設定が必要か** は共有したいものです。そこで、値を空にした見本を入れておきます。

```bash
# .env.example（Git に入れる）
APP_ENV=development
DATABASE_URL=sqlite:///dev.db
DEBUG=true
SECRET_KEY=                # python -c "import secrets; print(secrets.token_urlsafe(32))" で作る
OPENAI_API_KEY=
```

新しく始める人は `cp .env.example .env` をして、空のところを埋めます。

## 本番ではどこに置く？

| 置き場所 | 登録の仕方 |
|---|---|
| Render・Railway・Vercel・Fly.io | 管理画面の **Environment Variables** |
| Cloudflare Workers | `npx wrangler secret put SECRET_KEY`（バックエンドコースのレッスン 19） |
| GitHub Actions | リポジトリの **Settings → Secrets and variables → Actions**。`${{ secrets.NAME }}` で読む（レッスン 7） |
| Docker | `docker run -e APP_ENV=production` や `--env-file`（レッスン 6） |
| 大きなサービス | AWS Secrets Manager・Google Secret Manager など、秘密専用のサービス |

⚠️ 管理画面に登録した秘密は、**ログに出さない** ように注意します。`print(settings)` や、エラーのときに設定を全部出す処理があると、ログから漏れます（pydantic の `SecretStr` 型を使うと、表示が `**********` になります）。

## フロントエンドの「環境変数」は秘密ではない

```javascript
// Vite（React など）
const apiUrl = import.meta.env.VITE_API_URL;
// Next.js
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
```

`VITE_` や `NEXT_PUBLIC_` で始まる環境変数は、**ビルドのときにコードに埋め込まれて、ブラウザに送られます**。API の URL のような公開してよい値にだけ使い、秘密は入れません（レッスン 2）。

## AI のコードではこう出てくる

| 見かけたら | チェック |
|---|---|
| `SECRET_KEY = "change-me"` / `API_KEY = "sk-..."` がコードに直接 | ⚠️ 環境変数に |
| `os.environ.get("SECRET_KEY", "dev-secret")` | ⚠️ 本番で設定し忘れると、誰でも知っている値で動いてしまう。秘密には初期値を付けず、無ければ止める |
| `bool(os.environ.get("DEBUG"))` | ⚠️ `"false"` でも True |
| `class Settings(BaseSettings):` | ✅ 型付きの設定 |
| `.env.example` がある | ✅ 必要な設定が分かる |
| `VITE_OPENAI_API_KEY` / `NEXT_PUBLIC_..._SECRET` | ⚠️ ブラウザに送られる。秘密ならサーバー側に |

```quiz
? `.env` に `APP_ENV=development`、実際の環境変数に `APP_ENV=production` があるとき、pydantic-settings が読むのは？
- development（ファイルが優先）
+ production（実際の環境変数が優先）
- エラーになる
> 実際の環境変数が `.env` より優先されます。だから、本番では管理画面で登録した値が使われます。

? `DEBUG = bool(os.environ.get("DEBUG"))` で、`DEBUG=false` と設定したときの DEBUG の値は？
+ True
- False
- None
> 環境変数は文字列で、空でない文字列は `bool()` すると True です。文字列の中身を見て判定する必要があります。

? `SECRET_KEY` を必須（初期値なし）にしておく利点は？
- 起動が速くなる
+ 本番で設定し忘れたとき、起動した時点で止まって気づける
- 秘密が自動で作られる
> 初期値があると、設定し忘れても誰でも知っている値で動いてしまいます。必須にしておけば、起動時のエラーですぐ気づけます。
```
