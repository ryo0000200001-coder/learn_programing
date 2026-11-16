---
title: classify.py ― タイトルのキーワードでジャンルに分ける「仕分け担当」
language: Python
date: 2026-11-16
level: 2
series: fashion_news
part: 5
concepts: [conditionals, loops, collections, strings, functions]
lessons: [10-python/02-conditionals, 10-python/03-loops, 10-python/09-comprehensions-lambda, 10-python/06-strings]
summary: 記事のタイトルに含まれるキーワードでジャンルを決め、ファッションと関係ない記事を取り除く。
---
## 📄 解説するコード

`src/fashion_news/classify.py`

```python
from __future__ import annotations

from .models import Article


def classify(article: Article, config: dict) -> str:
    if article.kind in config.get("niche_kinds", []):
        return config["niche_category"]
    text = article.title.lower()
    for cat in config["categories"]:
        if any(k.lower() in text for k in cat["keywords"]):
            return cat["name"]
    return config["fallback_category"]


def category_order(config: dict) -> list[str]:
    return (
        [c["name"] for c in config["categories"]]
        + [config["niche_category"], config["fallback_category"]]
    )


def is_fashion(article: Article, config: dict) -> bool:
    text = article.title.lower()
    return any(k.lower() in text for k in config.get("fashion_keywords", []))


def apply_source_filters(articles: list[Article], sources: list[dict], config: dict) -> list[Article]:
    strict = {s["name"] for s in sources if s.get("require_fashion")}
    return [a for a in articles if a.source not in strict or is_fashion(a, config)]
```

## 🧭 ひとことで言うと

**Python** で書かれた、**記事のタイトルに含まれるキーワードを見て、ジャンル（ハイブランド・スニーカーなど）を決める** ファイルです。AI は使わず、`categories.yaml` の辞書との単純な照らし合わせ（ルールベース）で分けています。

## 🗺️ 全体の流れ

1. `apply_source_filters`：`require_fashion` の情報源から来た記事のうち、ファッションと関係ないものを取り除く
2. `classify`：1 記事ごとにジャンル名を決める
3. `category_order`：Notion に並べるジャンルの順番を作る

## 🔍 ブロックごとの解説

### classify：ジャンルを 1 つ決める

```python
if article.kind in config.get("niche_kinds", []):
    return config["niche_category"]
```

まず情報源の種類を見ます。`sns` か `official` なら、キーワードに関係なく **「公式発表・ニッチ」で即決** です。`return` した時点で関数は終わります。

```python
text = article.title.lower()
for cat in config["categories"]:
    if any(k.lower() in text for k in cat["keywords"]):
        return cat["name"]
return config["fallback_category"]
```

- `.lower()`：英字を小文字にそろえる。「Nike」も「NIKE」も「nike」として比べられる
- `for cat in ...`：ジャンルを **上から順に** 調べる
- `any(k.lower() in text for k in cat["keywords"])`：「キーワードのうち **どれか 1 つでも** タイトルに含まれていれば True」
- 当たった時点で `return` するので、**最初に当たったジャンル 1 つ** に決まる
- 最後まで当たらなければ「その他」

### any(...) の読み方

```python
any(k.lower() in text for k in cat["keywords"])
```

これは次の for 文と同じ意味です。

```python
found = False
for k in cat["keywords"]:
    if k.lower() in text:
        found = True
        break
```

`any` は「1 つでも True があれば True」、`all` は「全部 True なら True」。AI のコードで頻出の短い書き方です。

### category_order：並べる順番

```python
[c["name"] for c in config["categories"]] + [config["niche_category"], config["fallback_category"]]
```

リスト内包表記で 4 つのジャンル名を取り出し、最後に「公式発表・ニッチ」「その他」を足しています。Notion のページはこの順に見出しが並びます。

### apply_source_filters：ファッションと関係ない記事を除く

```python
strict = {s["name"] for s in sources if s.get("require_fashion")}
return [a for a in articles if a.source not in strict or is_fashion(a, config)]
```

- `strict`：`require_fashion: true` が付いた情報源の名前の **セット**（`{ }` の内包表記はセットになる）
- 残す条件：「厳しくしない情報源から来た記事」**または**「ファッション系のキーワードを含む記事」
- はてなブックマークのように話題が幅広い情報源だけ、ファッション記事に絞り込むしくみ

## 🐍 Python の書き方で見落としやすい点

| 書き方 | ポイント |
|---|---|
| `"コレクション" in text` | 文字列の中に含まれるか（部分一致）。「コレクションズ」でも当たる |
| `config.get("niche_kinds", [])` | キーが無ければ空のリスト。設定の書き忘れでも止まらない |
| `{... for s in sources}` | `[ ]` ならリスト、`{ }` ならセット（重複なし・`in` の判定が速い） |
| `return` を途中に書く | 当たった時点で即終了。「早期リターン」と呼ばれる読みやすい書き方 |

## 🔑 キーワード

- **ルールベース**：決めたルール（キーワード辞書）で判断する方式。AI を使う方式との対比
- **any / all**：「どれか 1 つ」「全部」を判定する組み込み関数
- **部分一致**：文字列の一部に含まれているかで判定すること
- **セット（set）**：重複を持たない入れ物。`in` の判定が速い
- **早期リターン**：条件が決まった時点で関数を抜ける書き方

## ⚠️ AI のコードとしてのチェックポイント

- ✅ 関数が小さく、それぞれテストされている（10 ページ目）
- ✅ 大文字・小文字の違いを吸収している
- ⚠️ 部分一致なので、意図しない記事にも当たる。例：キーワード「パリ」は「パリッと焼けたパン」にも当たる
- ⚠️ 1 記事 1 ジャンルなので、要件定義書の「複数ジャンルを付けてよい」とは違う
- ⚠️ 全角・半角（「ＮＩＫＥ」と「NIKE」）は同じ扱いにならない。`dedupe.py` で使っている `unicodedata.normalize("NFKC", ...)` を使えばそろえられる

## 🗣️ 30 秒で人に説明するなら

「classify.py は記事の仕分け担当です。SNS や公式発表から来た記事はまず『公式発表・ニッチ』に入れて、それ以外はタイトルにキーワード辞書の言葉が含まれるかを上から順に調べ、最初に当たったジャンルに入れます。
どれにも当たらなければ『その他』です。はてブのような幅広い情報源は、ファッション系の言葉を含む記事だけ残すフィルターもかけています。」

## ✅ 理解度チェック

```quiz
? `any(k in "nikeの新作" for k in ["adidas", "nike"])` の結果は？
+ True
- False
- "nike"
> "nike" が含まれているので、1 つでも当たれば True です。

? kind が sns の記事「ナイキの新作スニーカー」のジャンルは？
- ストリート/スニーカー
+ 公式発表・ニッチ
- その他
> 種類（kind）の判定がキーワードより先に行われます。

? `{s["name"] for s in sources}` が作るのは？
- リスト
- 辞書
+ セット
> { } の内包表記で「キー: 値」の形でなければセットになります。
```
