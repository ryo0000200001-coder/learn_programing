# 📖 Code Reading Dojo

**AI が書いたコードを「人に説明できる」レベルまで理解するための、自分専用の学習サイト**です。

2 つの柱があります。

| | 中身 |
| --- | --- |
| 📚 **コース** | 初心者向けから少しずつ難しくなるレッスン。各レッスンに確認クイズ付き。<br>**言語コース**：Python・JavaScript・TypeScript（ほか HTML/CSS・SQL・PHP・Java・C など準備中）<br>**テーマ別コース**：AI と一緒に開発する（ほか Web の仕組み・セキュリティ・クラウドなど準備中） |
| 🧩 **コード解説** | AI が書いたコードを **Claude に貼り付ける** と、Claude が解説ページを作ってこのサイトに追加する。関連レッスンへのリンクとクイズ付き |

さらに **概念マップ** で、「繰り返し」「非同期処理」など言語をまたぐ考え方ごとに、学習済みのレッスン・解説を確認できます。

## 使い方

### サイトを見る

- いちばん簡単な方法：`site/index.html` をブラウザで開く（サーバー不要）
- スマホでも見たい場合：GitHub Pages で公開する（下記）

進み具合（完了したレッスンなど）はブラウザに保存されます。

### コード解説を増やす

Claude Code（このリポジトリを開いた状態）に、AI が書いたコードをそのまま貼り付けます。

> （コードを貼って）これ解説して

Claude は `CLAUDE.md` の指示に従って

1. `content/explanations/` に解説ページを書く
2. `python tools/build.py` でサイトのデータを更新する
3. コミットして GitHub に push する

ので、サイトを開き直せば新しい解説が並んでいます。

### コースを増やす

> TypeScript のコースを作って
> Python の Lv2 に「正規表現」のレッスンを追加して

のように頼むと、同じ仕組みでレッスンが追加されます。

## GitHub Pages で公開する（任意）

1. このリポジトリの変更を `main` ブランチにマージする
2. GitHub のリポジトリ → **Settings → Pages → Build and deployment → Source** を **GitHub Actions** にする
3. 以後 `main` に push されるたびに `.github/workflows/pages.yml` が自動でサイトを公開する

（非公開リポジトリで Pages を使うには、GitHub の有料プランが必要な場合があります）

## フォルダ構成

```
CLAUDE.md                 Claude への作業指示（解説・レッスンの書き方）
content/
  concepts.json           言語をまたぐ概念の一覧
  courses/NN-名前/        コース（course.json とレッスンの .md）
  explanations/           コード解説の .md
tools/build.py            content/ から site/data.js を作る（Python 標準ライブラリのみ）
site/                     サイト本体（index.html / app.js / style.css / data.js）
```

自分で Markdown を書き換えた場合は、次のコマンドでサイトに反映されます。

```bash
python tools/build.py
```
