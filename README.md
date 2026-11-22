# 📖 Code Reading Dojo

**AI が書いたコードを「人に説明できる」レベルまで理解するための、自分専用の学習サイト**です。

2 つの柱があります。

| | 中身 |
| --- | --- |
| 📚 **コース** | 初心者向けから少しずつ難しくなるレッスン。各レッスンに確認クイズ付き。<br>**言語コース**：Python・JavaScript・TypeScript（ほか HTML/CSS・SQL・PHP・Java・C など準備中）<br>**テーマ別コース**：AI と一緒に開発する・バックエンドを基礎から・ターミナルと Git・セキュリティ・データベース設計・公開とクラウド・コンピュータの基礎 |
| 🧩 **コード解説** | AI が書いたコードを **Claude に貼り付ける** と、Claude が解説ページを作ってこのサイトに追加する。関連レッスンへのリンクとクイズ付き |

さらに **概念マップ** で、「繰り返し」「非同期処理」など言語をまたぐ考え方ごとに、学習済みのレッスン・解説を確認できます。

## 使い方

### サイトを見る

- いちばん簡単な方法：`site/index.html` をブラウザで開く（サーバー不要）
- Windows で Git をインストール済みなら：`open-site.vbs` をダブルクリックすると、GitHub から最新版を取ってきてからサイトを開く（黒い画面は出ない）。うまく更新されないときは `open-site.bat` を使うと、黒い画面にメッセージが出るので原因が分かる
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

## スマホ・ほかのパソコンから見る（GitHub Pages）

https://ryo0000200001-coder.github.io/learn_programing/

main が更新されるたびに `.github/workflows/pages.yml` が自動で公開し直します（Settings → Pages → Source は「GitHub Actions」）。
リポジトリが公開なので、この URL は誰でも見られます。進み具合はブラウザごとに別々に記録されます。

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
