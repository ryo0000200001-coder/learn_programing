---
title: CI/CD と GitHub Actions ― push したら自動でテスト・公開
level: 3
minutes: 20
concepts: [deploy, testing, tooling, version_control]
summary: GitHub Actions のワークフローの読み方（on・jobs・steps・uses・run・secrets）。このリポジトリの自動マージの仕組みを読み、テストを自動で回すワークフローを組み立てる。
---
## このレッスンのゴール

- CI と CD の違い、自動化する理由を説明できる
- GitHub Actions のワークフロー（`.github/workflows/*.yml`）を読み、いつ・何をするのか説明できる
- `secrets`・`permissions` など、ワークフローの安全に関わる部分をチェックできる

## CI と CD

| | 正式な名前 | すること |
|---|---|---|
| **CI** | 継続的インテグレーション | push や PR のたびに、**自動でテスト** する。壊れた変更を main に入れない |
| **CD** | 継続的デリバリー／デプロイ | テストに通ったら、**自動で公開** する |

人の手でやると、テストを忘れる・手順を間違える・その人しかやり方を知らない、が起きます。**毎回同じ手順を、機械に確実にやらせる** のが CI/CD です。

## GitHub Actions の部品

```text
ワークフロー（.github/workflows/xxx.yml 1 つ）
 └─ on: いつ動くか（きっかけ）
 └─ jobs: 仕事のまとまり（並べて同時に動かせる）
     └─ runs-on: どんなパソコンで動かすか
     └─ steps: 上から順番に実行する手順
         ├─ uses: 他の人が作った部品（アクション）を使う
         └─ run:  コマンドを実行する
```

| きっかけ（`on:`） | いつ |
|---|---|
| `push:` | push されたとき（`branches:` で絞り込める） |
| `pull_request:` | PR が作られた・更新されたとき |
| `workflow_dispatch:` | Actions のタブから手動で実行したとき |
| `schedule:` | 決まった時間（`cron: "0 0 * * *"` は毎日 0 時（UTC）） |

## このリポジトリのワークフローを読む

### 自動マージ（auto-merge-claude.yml）

```yaml
name: Auto merge Claude branches into main

on:
  push:
    branches: ["claude/**"]          # ① claude/ で始まるブランチに push されたら

permissions:
  contents: write                    # ② リポジトリへの書き込みを許可（main に push するため）

concurrency:
  group: auto-merge-main             # ③ 同時に動くのは 1 つだけ（順番待ち）
  cancel-in-progress: false          #    途中のものは止めない

jobs:
  merge:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          ref: main                  # ④ main ブランチを取ってくる
          fetch-depth: 0             #    履歴を全部（マージに必要）
      - name: Merge into main
        run: |                       # ⑤ | の後ろは、複数行のコマンド
          git config user.name "github-actions[bot]"
          git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
          git fetch origin "${GITHUB_REF_NAME}"           # push されたブランチを取ってきて
          git merge --no-edit "origin/${GITHUB_REF_NAME}" # main にマージして
          git push origin main                             # main を push する
```

| 番号 | 読み方 |
|---|---|
| ① | `"claude/**"` の `**` は「その下なら何でも」。Claude が作業ブランチを push するたびに動く |
| ② | 普通は読むだけの権限。main に push するので書き込みが必要 |
| ③ | 2 つの push がほぼ同時に来ても、**順番に** マージする（同時にやると後のほうが失敗する） |
| ⑤ | `${GITHUB_REF_NAME}` は GitHub が用意してくれる環境変数で、push されたブランチの名前が入る |

ターミナルと Git のコースで学んだ `git fetch`・`git merge`・`git push` を、**GitHub のパソコンが代わりに実行している** だけだと分かります。マージでコンフリクトが起きると `git merge` が失敗し、このワークフローは ❌ になります。

### サイトの公開（pages.yml）

レッスン 2 で読んだとおり、main が更新されたとき（自動マージの後も `workflow_run` で拾う）に、ビルド → 公開をしています。これは **CD** の部分です。

つまり、このサイトでは **Claude のブランチに push → 自動マージ（このワークフロー）→ 自動で公開（pages.yml）** と、2 つのワークフローがリレーのようにつながっています。

## テストを自動で回すワークフロー

このリポジトリにはまだありませんが、Python のアプリなら、CI はこんな形になります。

```yaml
name: Test

on:
  push:
    branches: [main]
  pull_request:                      # PR のたびにも

jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        python-version: ["3.12", "3.13"]     # 2 つのバージョンで同時にテスト
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: ${{ matrix.python-version }}
          cache: pip                          # ライブラリのダウンロードを使い回して速く
      - run: pip install -r requirements.txt
      - run: pytest
        env:
          SECRET_KEY: test-only-not-secret    # テスト用のただの値
          API_KEY: ${{ secrets.API_KEY }}     # 本物の秘密は Secrets から
```

| 読みどころ | 意味 |
|---|---|
| `matrix` | 同じ手順を、条件を変えて何通りも同時に実行する。ここでは Python 3.12 と 3.13 |
| `${{ ... }}` | GitHub Actions の式。`matrix.python-version` や `secrets.API_KEY` の値に置き換わる |
| `env:` | そのステップだけの環境変数（レッスン 4） |
| `secrets.API_KEY` | リポジトリの Settings → Secrets and variables → Actions に登録した値。ログには `***` と表示される |

PR を作ると、画面の **Checks** にこのテストの結果が ✅ / ❌ で出ます（ターミナルと Git のコースのレッスン 6）。リポジトリの設定（Branch protection / Rulesets）で、**テストが ✅ でないとマージできない** ようにもできます。

### 失敗したら

Actions のタブで、失敗した実行 → 失敗した job → 赤くなったステップを開くと、**ターミナルと同じ出力** が見られます。エラーの読み方は、はじめてのコースの「エラーメッセージはヒントの手紙」と同じです。

| よくある失敗 | 原因 |
|---|---|
| `ModuleNotFoundError` | `requirements.txt` に書き忘れたライブラリ（手元にだけ入っている） |
| 手元では通るテストが落ちる | OS（Linux）・時刻（UTC）・ファイル名の大文字小文字の違い（レッスン 1） |
| `secrets.XXX` が空 | Secrets に登録していない。または、フォークからの PR には秘密が渡されない（安全のため） |
| YAML のエラー | インデント（字下げ）のずれ。スペースで書く（タブは使えない） |

## ワークフローの安全

ワークフローは、**リポジトリの権限と秘密を持って動くプログラム** です。ここが乗っ取られると被害が大きくなります。

| 見ること | ✅ | ⚠️ |
|---|---|---|
| `permissions:` | 必要なものだけ（`contents: read` から始める） | 書いていない（古いリポジトリでは強い権限になることがある）、`write-all` |
| `uses:` のバージョン | `@v4` など固定。より厳しくするなら、コミットの ID（`@a1b2c3...`）で固定 | `@main`（作者が変えると、知らないうちに中身が変わる） |
| 秘密の扱い | `secrets.` から読み、`echo` しない | 秘密をコマンドの出力やファイルに書き出す |
| PR のタイトルなどを `run:` に | 環境変数にしてから使う | `run: echo "${{ github.event.pull_request.title }}"`（タイトルにコマンドを仕込める。セキュリティのコースのレッスン 3 と同じ「インジェクション」） |
| `pull_request_target` | 使い方をよく理解しているときだけ | フォークからのコードを、秘密を持ったまま実行してしまう |

## AI のコードではこう出てくる

AI に「GitHub Actions でテストを自動化して」と頼むと、上のようなファイルを作ってくれます。読むときは次の順で見ます。

1. **`on:`**：いつ動く？（push だけ？PR でも？手動？）
2. **`permissions:`**：何ができる？（必要以上に強くない？）
3. **`steps:`**：何をする？（`run:` のコマンドを 1 行ずつ。ターミナルのコースで読めるはず）
4. **`secrets.`**：どの秘密を使う？（Settings に登録が必要）
5. **デプロイするなら**：どのブランチの、どのきっかけで本番に出る？

```quiz
? `on: pull_request:` と書いたワークフローが動くのはいつ？
- main に push したときだけ
+ プルリクエストが作られた・更新されたとき
- 毎日決まった時間
> PR のたびにテストを回すのが CI の基本の形です。結果は PR の Checks に表示されます。

? このリポジトリの自動マージで、`concurrency: group: auto-merge-main` がある理由は？
- ワークフローを速くするため
+ 2 つの push がほぼ同時に来ても、マージを 1 つずつ順番に行うため
- main ブランチを守るため、マージを禁止している
> 同時に 2 つが main に push しようとすると、後のほうが失敗します。同じグループのものは順番待ちになります。

? ワークフローで `uses: someone/deploy-action@main` と書くことの心配な点は？
- 動作が遅くなる
+ 作者が main を書き換えると、知らないうちに違う中身が、自分のリポジトリの権限と秘密を持って実行される
- main という名前のブランチが必要になる
> 部品のバージョンを固定しないと、中身が勝手に変わります。`@v4` などのバージョンや、コミットの ID で固定します（セキュリティのコースのレッスン 6 と同じ考え方）。
```
