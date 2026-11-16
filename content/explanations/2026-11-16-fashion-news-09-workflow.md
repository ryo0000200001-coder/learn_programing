---
title: daily.yml ― 毎日 2 回、自動で動かす GitHub Actions の設定
language: YAML
date: 2026-11-16
level: 2
series: fashion_news
part: 9
concepts: [tooling, version_control, security, data_formats]
lessons: [100-ai-dev/04-git-basics, 100-ai-dev/06-secrets-env, 10-python/08-modules]
summary: 毎日 6:30 と 17:30（日本時間）に GitHub のサーバーでプログラムを動かし、掲載履歴をコミットする設定。
---
## 📄 解説するコード

`.github/workflows/daily.yml`

```yaml
name: daily-fashion-news

on:
  schedule:
    - cron: "30 21 * * *" # 毎日 6:30 JST（朝刊）。混雑時の遅れを見込んで 7:00 の30分前
    - cron: "30 8 * * *" # 毎日 17:30 JST（夕刊）。18:00 の30分前
  workflow_dispatch:
    inputs:
      force:
        description: "同じ日のページがあっても作成する"
        type: boolean
        default: false

permissions:
  contents: write # data/seen_urls.json をコミットするため

concurrency:
  group: daily-fashion-news
  cancel-in-progress: false

jobs:
  run:
    runs-on: ubuntu-latest
    timeout-minutes: 10
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: "3.12"
          cache: pip
      - run: pip install -r requirements.txt
      - name: Notion にページを作成
        env:
          NOTION_TOKEN: ${{ secrets.NOTION_TOKEN }}
          NOTION_PARENT_PAGE_ID: ${{ secrets.NOTION_PARENT_PAGE_ID }}
          PYTHONPATH: src
        run: python -m fashion_news ${{ inputs.force && '--force' || '' }}
      - name: 掲載済みURLの履歴をコミット
        run: |
          if [ -n "$(git status --porcelain data/seen_urls.json)" ]; then
            git config user.name "github-actions[bot]"
            git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
            git add data/seen_urls.json
            git commit -m "chore: 掲載済みURLの履歴を更新"
            git push
          fi
```

## 🧭 ひとことで言うと

**YAML** で書かれた **GitHub Actions の設定ファイル** です。「いつ」「どんなパソコンで」「どの順番で何を実行するか」を書いておくと、GitHub が自分のサーバーで代わりに動かしてくれます。このファイルのおかげで、あなたのパソコンが寝ていてもニュースが届きます。

## 🗺️ 全体の流れ

1. **きっかけ（on）**：毎日 6:30 と 17:30（日本時間）、または Actions の画面から手動で
2. **準備**：GitHub が Ubuntu（Linux）のパソコンを 1 台用意する
3. **手順（steps）**：
   1. リポジトリのコードを取ってくる
   2. Python 3.12 を入れる
   3. 必要なライブラリを入れる
   4. Secrets から Notion のトークンを受け取って、プログラムを実行する
   5. 掲載履歴（`seen_urls.json`）が変わっていればコミットして GitHub に保存する
4. 終わったらそのパソコンは捨てられる（だから履歴をファイルにして保存しておく必要がある）

## 🔍 ブロックごとの解説

### on：いつ動かすか

```yaml
schedule:
  - cron: "30 21 * * *"
```

`cron` は「分 時 日 月 曜日」の順に時刻を書く書き方です。`*` は「毎」。
**時刻は UTC（世界標準時）** なので、`30 21` は UTC の 21:30 ＝ 日本時間の翌朝 6:30 です（日本は 9 時間進んでいる）。
GitHub は混雑すると数分〜数十分遅れることがあるので、7:00 に間に合うよう 30 分早めにしています。

`workflow_dispatch` は「Actions の画面の Run workflow ボタンで手動実行できる」設定で、`force` というチェックボックスも付けています。

### permissions と concurrency

| 設定 | 意味 |
|---|---|
| `contents: write` | 履歴ファイルをコミットして push するために、書き込み権限をもらう |
| `concurrency` | 同じ処理が 2 つ同時に動かないようにする。前の実行が終わるまで次は待つ（`cancel-in-progress: false`） |
| `timeout-minutes: 10` | 10 分を超えたら打ち切る（固まったときの保険） |

### steps：手順

```yaml
- uses: actions/checkout@v4
- uses: actions/setup-python@v5
```

`uses:` は「誰かが作った便利な部品（アクション）を使う」。`@v4` はそのバージョンです。
`run:` は「このコマンドを実行する」。

```yaml
env:
  NOTION_TOKEN: ${{ secrets.NOTION_TOKEN }}
  PYTHONPATH: src
run: python -m fashion_news ${{ inputs.force && '--force' || '' }}
```

- `${{ secrets.NOTION_TOKEN }}`：リポジトリの Settings → Secrets に登録した値を、**環境変数** としてプログラムに渡す。ログには `***` と伏せて表示される
- `${{ inputs.force && '--force' || '' }}`：手動実行で force にチェックしたときだけ `--force` を付ける（「条件 && A || B」で「条件なら A、でなければ B」）

### 最後の step：履歴を保存する

```bash
if [ -n "$(git status --porcelain data/seen_urls.json)" ]; then
  git add data/seen_urls.json
  git commit -m "chore: 掲載済みURLの履歴を更新"
  git push
fi
```

これは YAML の中に書かれた **シェル（Bash）のコマンド** です。

- `git status --porcelain ファイル`：そのファイルが変わっていれば何か表示される
- `[ -n "..." ]`：「文字が空でなければ」
- 変わっていたときだけ、コミットして push する

GitHub のコミット履歴に「chore: 掲載済みURLの履歴を更新」が毎日並んでいるのは、このステップのしわざです。

## 🐍 Python と比べると

| daily.yml | Python で言うと |
|---|---|
| `steps:` の並び | 上から順に実行される命令 |
| `env:` | `os.environ["NOTION_TOKEN"]` で読める値を用意しておく |
| `if [ -n "..." ]; then ... fi` | `if 変更あり: ...` |
| `${{ 条件 && 'A' \|\| 'B' }}` | `'A' if 条件 else 'B'` |

## 🔑 キーワード

- **GitHub Actions**：GitHub のサーバーでプログラムを自動実行する仕組み
- **ワークフロー**：Actions で実行する一連の手順（このファイル 1 つ分）
- **cron**：決まった時刻に実行するための時刻の書き方
- **Secrets**：GitHub に保存する秘密の値。コードやログに出ない
- **runner（ubuntu-latest）**：処理を実行するために GitHub が用意するパソコン
- **アクション（uses）**：他の人が作った、再利用できる手順の部品

## ⚠️ AI のコードとしてのチェックポイント

- ✅ トークンを Secrets で渡していて、コードやリポジトリに書いていない
- ✅ 同時実行の防止・タイムアウト・手動実行と、運用に必要なものがそろっている
- ✅ 履歴ファイルに変更があるときだけコミットする
- ⚠️ 実行中にあなたが同じブランチに別の変更を push していると、最後の `git push` が「先に進まれている」と失敗することがある（めったに起きない。次の回で取り戻せる）
- ⚠️ GitHub は、**60 日間リポジトリに動きが無いと、スケジュール実行を自動で止める** ことがある。ただしこのワークフローは毎回コミットしているので、止まりにくい
- ⚠️ 公開リポジトリなので、実行ログ（取得件数など）は誰でも見られる。Secrets の値は伏せられるので漏れない

## 🗣️ 30 秒で人に説明するなら

「daily.yml は GitHub Actions の設定です。cron で UTC の 21:30 と 8:30、つまり日本時間の 6:30 と 17:30 に、GitHub のサーバーで Python を準備してプログラムを動かします。
Notion のトークンは Secrets から環境変数で渡していて、実行後に掲載履歴の JSON が変わっていれば、自動でコミットして保存します。手動実行用のボタンも付いています。」

## ✅ 理解度チェック

```quiz
? `cron: "30 8 * * *"` は日本時間の何時？
- 8:30
+ 17:30
- 23:30
> cron の時刻は UTC です。日本時間は 9 時間足して 17:30 になります。

? `${{ secrets.NOTION_TOKEN }}` の値はどこに保存されている？
- daily.yml の中
- README.md の中
+ GitHub のリポジトリ設定（Secrets）
> コードには名前だけを書き、値は GitHub の Secrets に安全に保存します。

? 最後のステップで `seen_urls.json` をコミットする理由は？
+ 実行用のパソコンは毎回捨てられるので、履歴を GitHub に残しておく必要があるから
- Notion に履歴を送るため
- テストを実行するため
> 保存しておかないと、次の回は「何を載せたか」を覚えていられません。
```
