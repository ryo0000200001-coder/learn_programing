---
title: 静的サイトの公開 ― このサイトを GitHub Pages に出すまで
level: 1
minutes: 16
concepts: [deploy, http_api, tooling]
summary: サーバーで処理しない「静的サイト」と、処理する「動的サイト」の違い。このサイトの pages.yml を 1 行ずつ読み、GitHub Pages で公開する流れと、静的サイトでできないこと・してはいけないことを知る。
---
## このレッスンのゴール

- 静的サイトと動的サイトの違いを説明できる
- このリポジトリの `.github/workflows/pages.yml` を読んで、公開までの流れを説明できる
- 静的サイトに置いてはいけないもの（秘密情報）と、できないことが分かる

## 静的と動的

| | 静的サイト | 動的サイト |
|---|---|---|
| サーバーがすること | **置いてあるファイルを、そのまま返す** だけ | リクエストごとにプログラムを動かして、答えを作る |
| 中身 | HTML・CSS・JavaScript・画像 | ＋ Python・Node.js などのサーバーのプログラム、データベース |
| 例 | このサイト、会社の紹介ページ、ブログ、ドキュメント | ログインのあるサービス、掲示板、ネットショップ |
| 公開先の例 | GitHub Pages、Cloudflare Pages、Netlify、Vercel | Render、Cloud Run、Cloudflare Workers など（レッスン 5） |
| 費用・手間 | 無料のことが多い。ほぼ手間なし | 小さければ無料枠もあるが、管理が増える |

「静的」といっても、**JavaScript でブラウザの中で動くものは作れます**。このサイトも、クイズの採点や検索はブラウザの JavaScript（`site/app.js`）が行い、進み具合はブラウザの localStorage に保存しています。サーバーは何も計算していません。

## このサイトの作り

```text
content/（Markdown）──→ python tools/build.py ──→ site/data.js
                                                   site/index.html
                                                   site/app.js        ← これを置けば完成
                                                   site/style.css
```

`tools/build.py` が Markdown をまとめて `site/data.js` を作るので、`site/` フォルダの中身を置くだけで動きます。この「事前に作っておく」作業を **ビルド** と呼びます。React などのフレームワークでも `npm run build` で `dist/` などにファイルを作り、それを公開します。

## pages.yml を読む

このリポジトリには、GitHub Pages に公開するための設定が入っていて、実際に `https://ryo0000200001-coder.github.io/learn_programing/` で公開されています。

```yaml
name: Deploy site

on:                         # ① いつ動くか（きっかけ）
  push:
    branches: [main]        #    main に push されたとき
  workflow_run:             #    別のワークフロー（自動マージ）が終わったとき
    workflows: ["Auto merge Claude branches into main"]
    types: [completed]
  workflow_dispatch:        #    手動で「実行」ボタンを押したとき

permissions:                # ② この作業に与える権限（最小権限）
  contents: read            #    リポジトリは読むだけ
  pages: write              #    Pages への公開はしてよい
  id-token: write           #    GitHub に「本当にこのリポジトリの作業か」を証明する

concurrency:                # ③ 同時に 2 つ走ったら、古い方を止める
  group: pages
  cancel-in-progress: true

jobs:
  deploy:
    # 自動マージが失敗したときは公開しない
    if: github.event_name != 'workflow_run' || github.event.workflow_run.conclusion == 'success'
    runs-on: ubuntu-latest  # ④ GitHub が用意する Linux のパソコンで動かす
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4              # ⑤ リポジトリの中身（main）を取ってくる
        with:
          ref: main
      - uses: actions/setup-python@v5          # ⑥ Python 3.12 を用意
        with:
          python-version: "3.12"
      - run: python tools/build.py             # ⑦ site/data.js を作る（ビルド）
      - uses: actions/configure-pages@v5       # ⑧ Pages の設定を読む
      - uses: actions/upload-pages-artifact@v3 # ⑨ site フォルダを固めてアップロード
        with:
          path: site
      - id: deployment
        uses: actions/deploy-pages@v4          # ⑩ 公開する
```

| 番号 | 読み方 |
|---|---|
| ① | `on:` は「きっかけ」。3 つ書かれていて、どれか 1 つが起きれば動く。`workflow_run` があるのは、**GitHub Actions 自身が main に push したときは `push` のきっかけが起きない** という決まりがあるため。Claude のブランチを自動マージ（レッスン 7）した後は、こちらで拾っている |
| `if:` | 自動マージが失敗した（コンフリクトなど）ときは、公開しない |
| ② | `permissions:` で、この作業ができることを最小限にしている（セキュリティのコースのレッスン 1） |
| ④〜⑩ | 毎回、まっさらな Linux のパソコンを借りて、取ってくる → Python を入れる → ビルド → アップロード → 公開、を順番に行う |
| `uses:` | 他の人が作った部品（アクション）を使う。`@v4` はバージョン |
| `run:` | コマンドをそのまま実行 |

GitHub Actions の書き方は、レッスン 7 でくわしく読みます。

### 公開する手順

自分の別のリポジトリで同じことをするなら、次の手順です。

1. GitHub のリポジトリの **Settings → Pages → Build and deployment → Source** を **GitHub Actions** にする
2. 上のようなワークフローを `.github/workflows/` に置いて、main に push する（または **Actions** タブ → 「Deploy site」→ **Run workflow**）
3. 数分後に `https://ユーザー名.github.io/リポジトリ名/` で見られる

このサイトでは、Claude がレッスンを push する → 自動マージ → 自動で公開、までがつながっているので、スマホからも数分後には新しいレッスンが見られます。

⚠️ 公開すると、**URL を知っている人は誰でも見られます**。非公開のリポジトリで Pages を使うには有料プランが必要な場合があり、有料でも「サイト自体を非公開にする」機能は一部のプランだけです。見られて困るものは置かない、が原則です。

## 静的サイトに置いてはいけないもの

静的サイトのファイルは、**全部そのまま利用者のブラウザに送られます**。ブラウザの「ページのソースを表示」や開発者ツールで、誰でも中身を見られます。

| ⚠️ 置いてはいけない | 理由 |
|---|---|
| API キー・パスワード・トークン | JavaScript の中に書いても丸見え（AI と開発するコースの「ブラウザで動くコードに注意」） |
| 個人情報の入ったデータ | `data.js` や JSON も丸見え |
| 「隠しページ」 | URL を知られたら見られる（セキュリティのコースのレッスン 1） |

秘密が必要な処理（外部の API を呼ぶ、データベースに保存する）は、**サーバー側**（Cloudflare Workers などのサーバーレス関数）に置いて、静的サイトからはそこを呼ぶようにします。

## 静的サイトでできないこと

| やりたいこと | 静的サイトだけでは | 足すもの |
|---|---|---|
| 利用者どうしでデータを共有（掲示板・予約） | できない（localStorage はその人のブラウザだけ） | データベース＋API（Firebase・Supabase・Workers＋D1） |
| ログイン | できない | 認証サービス（バックエンドコースのレッスン 18 の OAuth など） |
| お問い合わせフォームのメール送信 | できない | フォーム送信サービス、またはサーバーレス関数 |
| 秘密の API キーを使う | できない | サーバーレス関数 |

**まず静的サイトで作れないか考える** のが、安く・安全に公開するコツです。

```quiz
? このサイト（Readable）が「静的サイト」と言える理由は？
- JavaScript を使っていないから
+ サーバーはファイルを返すだけで、クイズの採点なども利用者のブラウザで動いているから
- 内容が一度も変わらないから
> 静的サイトでも JavaScript は動きます。サーバーがリクエストごとにプログラムを動かさない、という意味です。

? `pages.yml` の `run: python tools/build.py` は何をしている？
- サイトを公開している
+ Markdown から `site/data.js` を作るビルドをしている
- Python をインストールしている
> 公開の前に、Markdown をまとめて site/data.js を作っています。Python の用意はその前の `setup-python`、公開は最後の `deploy-pages` です。

? 静的サイトの JavaScript に、外部サービスの API キーを書いた。何が問題？
- 問題ない。JavaScript はブラウザで実行されるだけで、中身は見えない
+ ファイルはそのまま利用者に送られるので、誰でもキーを見て使えてしまう
- サイトの表示が遅くなる
> ブラウザに届くものはすべて見られます。秘密が必要な処理は、サーバー側の関数に置きます。
```
