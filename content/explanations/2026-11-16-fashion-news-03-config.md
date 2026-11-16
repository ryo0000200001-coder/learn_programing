---
title: sources.yaml と categories.yaml ― 集める先と仕分けルールの設定ファイル
language: YAML
date: 2026-11-16
level: 1
series: fashion_news
part: 3
concepts: [data_formats, collections]
lessons: [10-python/04-lists-and-dicts, 10-python/11-files-and-json]
summary: コードを書き換えずに情報源やジャンルの辞書を変えられる、2 つの YAML 設定ファイル。
---
## 📄 解説するコード

`config/sources.yaml`（抜粋）

```yaml
sources:
  - {name: WWDJAPAN, url: "https://www.wwdjapan.com/feed", kind: media}
  - {name: FASHIONSNAP, url: "https://www.fashionsnap.com/rss.xml", kind: media}
  - name: Googleニュース(SNSで話題)
    url: "https://news.google.com/rss/search?q=...+when:1d&hl=ja&gl=JP&ceid=JP:ja"
    kind: sns
  - {name: はてブ(ライフスタイル), url: "https://b.hatena.ne.jp/hotentry/life.rss", kind: sns, require_fashion: true}
```

`config/categories.yaml`（抜粋）

```yaml
max_per_category: 20
fashion_keywords: [ファッション, 服, コーデ, スニーカー, ブランド, ...]
niche_category: 公式発表・ニッチ
niche_kinds: [official, sns]
fallback_category: その他
categories:
  - name: ハイブランド/コレクション
    keywords: [コレクション, ランウェイ, パリ, ミラノ, シャネル, ...]
  - name: ストリート/スニーカー
    keywords: [スニーカー, ストリート, コラボ, ナイキ, Nike, ...]
  - name: 業界・ビジネス
    keywords: [決算, 売上, 買収, 就任, ...]
  - name: トレンド/スタイリング
    keywords: [トレンド, 着こなし, コーデ, ...]
```

## 🧭 ひとことで言うと

**YAML**（ヤムル）という形式で書かれた 2 つの設定ファイルです。`sources.yaml` は **ニュースを集める 8 つのサイトの一覧**、`categories.yaml` は **ジャンル分けのキーワード辞書と件数の上限** を決めています。

## 🗺️ 全体の流れ

1. `main.py` が起動時にこの 2 つを読み込み、Python の辞書・リストに変換する
2. `sources` の一覧は `fetch.py` に渡され、上から順に RSS を取りに行く
3. `categories.yaml` の内容は `classify.py` に渡され、記事のタイトルとキーワードを照らし合わせる

## 🔍 ブロックごとの解説

### YAML の読み方

YAML は「人が読み書きしやすい JSON」のような形式です。Python に読み込むと、そのまま辞書とリストになります。

| YAML | 意味 | Python では |
|---|---|---|
| `max_per_category: 20` | キー: 値 | `{"max_per_category": 20}` |
| `- name: ...`（行頭の `-`） | リストの 1 項目 | `[ {...}, {...} ]` |
| `[ファッション, 服]` | 1 行で書いたリスト | `["ファッション", "服"]` |
| `{name: WWDJAPAN, url: ...}` | 1 行で書いた辞書 | `{"name": "WWDJAPAN", "url": ...}` |
| `# ...` | コメント | `# ...` |
| インデント（字下げ） | 入れ子の関係 | Python と同じく字下げが意味を持つ |

`sources.yaml` では 1 行で書く書き方と、複数行で書く書き方が混ざっていますが、**どちらも同じ辞書** です。URL が長いものだけ複数行にして読みやすくしています。

### sources.yaml：情報源の一覧

| 項目 | 意味 |
|---|---|
| `name` | 表示用の名前（Notion に「— WWDJAPAN」のように出る） |
| `url` | RSS の URL |
| `kind` | `media`（メディア）/ `sns`（SNS の話題）など。`sns` は「公式発表・ニッチ」ジャンルに入る |
| `require_fashion: true` | ファッションと関係ない記事も混ざる情報源用。タイトルにファッション系のキーワードがある記事だけ残す |

Google ニュースの URL の `q=%E3%83%95...` は、日本語の検索キーワード（「ファッション コレクション」など）を URL 用に変換したものです。`when:1d` は「直近 1 日」の意味です。

### categories.yaml：仕分けのルール

- **上から順に判定し、最初に当たったジャンルに入れる**。「パリでスニーカーのコラボ」は「パリ」が先に当たるので「ハイブランド/コレクション」になる
- `kind` が `sns` か `official` の記事は、キーワードに関係なく **先に「公式発表・ニッチ」** に入る
- どこにも当たらなければ「その他」
- `max_per_category: 20`：各ジャンル最大 20 件

## 🐍 Python と比べると

`main.py` ではこう読み込んでいます。

```python
import yaml
config = yaml.safe_load(open("config/categories.yaml", encoding="utf-8"))
config["max_per_category"]            # 20
config["categories"][0]["name"]       # "ハイブランド/コレクション"
```

`yaml.safe_load` は JSON の `json.loads` にあたります。`safe_` が付いているのは、YAML の危険な機能（プログラムを実行させる書き方）を無効にした **安全な読み込み方** だからです。

## 🔑 キーワード

- **YAML**：設定ファイルでよく使われる、字下げで構造を表すデータ形式（GitHub Actions の設定も YAML）
- **設定ファイル**：プログラムの動きを、コードを変えずに調整するためのファイル
- **キーワード辞書**：ジャンルごとに「この言葉があればこのジャンル」と決めた一覧
- **URL エンコード**：日本語などを `%E3%83...` の形にして URL に入れられるようにすること
- **safe_load**：YAML を安全に読み込む関数

## ⚠️ AI のコードとしてのチェックポイント

- ✅ 情報源とキーワードをコードから切り離していて、変更しやすい
- ✅ コメントで「上から順に判定」「URL は未確認なので初回のログを見ること」と注意点が書かれている
- ⚠️ 「上から順に最初の 1 つ」なので、**キーワードの並び順で結果が変わる**。「コラボ」を含むハイブランドの記事は、ハイブランドの方に入る
- ⚠️ 「人気」「秋冬」のような広い言葉は、ファッション以外の記事も拾いやすい（ただし情報源がファッション系なので実害は小さい）
- ⚠️ 英語キーワードは大文字・小文字を区別しない（`classify.py` で小文字にそろえている）が、全角・半角の違いはそろえていない

## 🗣️ 30 秒で人に説明するなら

「config フォルダには YAML の設定ファイルが 2 つあります。sources.yaml はニュースを集めるサイトの RSS 一覧で、種類やファッション記事だけに絞るかどうかも書けます。
categories.yaml はジャンル分けのキーワード辞書で、上から順にタイトルと照らし合わせて最初に当たったジャンルに入れます。
コードを触らずに、情報源やキーワードを増やせるのがポイントです。」

## ✅ 理解度チェック

```quiz
? YAML の `- {name: A, url: B}` を Python で読み込むと？
- 文字列 "name: A, url: B"
+ 辞書 {"name": "A", "url": "B"} を 1 つ含むリスト
- タプル ("A", "B")
> 行頭の - はリストの項目、{ } は辞書です。

? タイトル「ミラノで話題のスニーカーコラボ」はどのジャンルになる？（kind は media）
+ ハイブランド/コレクション
- ストリート/スニーカー
- その他
> 上から順に判定するので、先にある「ミラノ」に当たります。

? `require_fashion: true` が付いた情報源の記事はどうなる？
- すべて「公式発表・ニッチ」に入る
+ タイトルにファッション系のキーワードがある記事だけ残る
- 必ず 20 件まで載る
> はてブのように話題が幅広い情報源から、ファッション記事だけを残すための設定です。
```
