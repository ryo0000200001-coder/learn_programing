# 📖 Code Reading Dojo

**AI が書いたコードを「自分で他人に説明できる」レベルまで理解するための、自分専用の学習サイト**です。

コードを一から書く練習ではなく、AI が出したコードを貼り付けて

1. **読む** — ブロックごとの解説・Python との比較・AI コードとしての注意点を見る
2. **聞く** — わからない所をチャットで質問する
3. **説明する** — 自分の言葉で説明を書き、AI に採点してもらう（ティーチバック）
4. **残す** — ノートに保存し、言語・概念ごとの学習マップに記録する

という流れで、いろいろな言語を少しずつ網羅していきます。

## できること

| 画面 | 内容 |
| --- | --- |
| 解説する | コードを貼るだけで言語を自動判定し、決まった構成で解説（ひとことで言うと／全体の流れ／ブロックごとの解説／Python と比べると／キーワード／AI コードのチェックポイント／30 秒で人に説明するなら／理解度チェック 3 問）。深さは「やさしく・ふつう・くわしく」から選べる |
| 質問チャット | 解説を読んだあと、そのコードについて何でも追加で質問できる |
| ティーチバック | 自分で書いた説明を 0〜100 点で採点。できている点・足りない点・誤解・お手本の説明が返ってくる |
| 学習ノート | 保存した解説の一覧。検索・言語での絞り込み。開くと質問やティーチバックの続きができる |
| 学習マップ | 言語ごとの本数と説明力の平均点、言語をまたいだ 27 の概念（変数・型・非同期・メモリ管理…）をどれだけ読んだかのヒートマップ |

## はじめかた

必要なもの：Python 3.10 以上と、Anthropic の API キー（[Claude Console](https://console.anthropic.com/) で発行）。

```bash
git clone https://github.com/ryo0000200001-coder/learn_programing.git
cd learn_programing
```

```bash
python -m venv .venv
source .venv/bin/activate   # Windows は .venv\Scripts\activate
pip install -r requirements.txt
```

API キーを環境変数に設定します（Windows PowerShell は `$env:ANTHROPIC_API_KEY="sk-ant-..."`）。

```bash
export ANTHROPIC_API_KEY=sk-ant-...
```

サーバーを起動して、ブラウザで <http://localhost:8000> を開きます。

```bash
uvicorn app.main:app --reload
```

> 💰 API は使った分だけ課金されます。解説 1 回あたりの目安は十数円〜数十円程度です（コードの長さと「深さ」によります）。

## フォルダ構成（このアプリ自体も教材です）

```
app/
  main.py      … Web サーバー（FastAPI）。URL ごとの処理
  llm.py       … Claude API への依頼文（プロンプト）と呼び出し
  db.py        … 学習ノートの保存（SQLite）
  concepts.py  … 対応言語と、言語をまたぐ概念の一覧
static/
  index.html / style.css / app.js … 画面
  vendor/      … Markdown 表示・コード色分け用ライブラリ（同梱済み）
data/notebook.db … 保存したノート（自動で作られる。git には含めない）
```

慣れてきたら、このアプリのコード自体を「解説する」に貼り付けて読んでみるのもおすすめです。
Python（`app/`）と JavaScript（`static/app.js`）の両方が入っています。

## カスタマイズのヒント

- **解説の構成を変えたい** → `app/llm.py` の `EXPLAIN_FORMAT` を書き換える
- **学びたい概念を増やしたい** → `app/concepts.py` の `CONCEPTS` に追加する
- **言語を増やしたい** → `app/concepts.py` の `LANGUAGES` に追加する
- **使うモデルを変えたい** → `app/llm.py` の `MODEL`
