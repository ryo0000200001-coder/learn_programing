---
title: test_pipeline.py ― 部品が正しく動くかを確かめるテスト
language: Python
date: 2026-11-16
level: 3
series: fashion_news
part: 10
concepts: [testing, functions, modules]
lessons: [100-ai-dev/08-testing, 10-python/05-functions, 10-python/08-modules]
summary: 11 個のテストで、RSS の読み取り・URL とタイトルの正規化・重複除去・ジャンル分けなどを確かめる。
---
## 📄 解説するコード

`tests/conftest.py`

```python
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "src"))
```

`tests/test_pipeline.py`（抜粋）

```python
from datetime import datetime, timedelta, timezone

import yaml

from fashion_news.classify import classify
from fashion_news.dedupe import dedupe, filter_recent, normalize_title, normalize_url
from fashion_news.fetch import parse_feed
from fashion_news.main import group_articles, prune_seen, render_text
from fashion_news.models import Article
from fashion_news.notion import build_blocks

RSS = """<?xml version="1.0"?><rss version="2.0"><channel><title>t</title>
<item><title>パリコレクション開幕</title><link>https://ex.com/a?utm_source=x</link>
<pubDate>Fri, 13 Nov 2026 20:00:00 +0000</pubDate></item>
<item><title></title><link>https://ex.com/empty</link></item>
</channel></rss>"""

CONFIG = yaml.safe_load(open("config/categories.yaml", encoding="utf-8"))
NOW = datetime(2026, 11, 13, 21, 0, tzinfo=timezone.utc)


def art(title, url="https://ex.com/1", kind="media", pub=None):
    return Article(title, url, "src", kind, pub)


def test_parse_feed_skips_empty_title_and_parses_date():
    items = parse_feed(RSS, "ex", "media")
    assert len(items) == 1
    assert items[0].published == datetime(2026, 11, 13, 20, 0, tzinfo=timezone.utc)


def test_normalize_url_strips_tracking_and_fragment():
    assert normalize_url("https://EX.com/a/?utm_source=x&id=1#top") == "https://ex.com/a?id=1"


def test_dedupe_by_url_title_and_seen():
    items = [
        art("新作スニーカーが発売", "https://ex.com/1"),
        art("新作スニーカーが発売 - 別媒体", "https://other.com/2"),
        art("別の話題", "https://ex.com/3"),
        art("掲載済み", "https://ex.com/4"),
    ]
    out = dedupe(items, {"https://ex.com/4"})
    assert [a.title for a in out] == ["新作スニーカーが発売", "別の話題"]


def test_classify_priority_and_fallback():
    assert classify(art("ミラノでコレクション発表"), CONFIG) == "ハイブランド/コレクション"
    assert classify(art("ナイキ新作スニーカー"), CONFIG) == "ストリート/スニーカー"
    assert classify(art("決算を発表"), CONFIG) == "業界・ビジネス"
    assert classify(art("何でもない記事"), CONFIG) == "その他"
    assert classify(art("ナイキ新作", kind="official"), CONFIG) == "公式発表・ニッチ"


def test_page_title_morning_and_evening():
    from fashion_news.main import page_title

    assert page_title(datetime(2026, 11, 13, 21, 45, tzinfo=timezone.utc)) == "2026-11-14 朝刊"
    assert page_title(datetime(2026, 11, 14, 8, 45, tzinfo=timezone.utc)) == "2026-11-14 夕刊"
```

（実際のファイルにはこのほか、タイトルの正規化・古い記事の除外・Notion ブロックの組み立て・履歴の整理・20 件の上限・ファッション記事への絞り込みのテストがあり、全部で 11 個です）

## 🧭 ひとことで言うと

**Python**（pytest）で書かれた **テストコード** です。「この入力を渡したら、この結果になるはず」を 11 個書いておき、部品が期待どおり動くかを自動で確かめます。インターネットや Notion には一切つながず、手元だけで確かめられるように作られています。

## 🗺️ 全体の流れ

1. `PYTHONPATH=src python -m pytest` を実行する
2. pytest が `tests/` の中の `test_` で始まる関数を全部見つけて、1 つずつ実行する
3. 各テストの中の `assert` がすべて成り立てば「passed（成功）」、1 つでも違えば「failed（失敗）」
4. `conftest.py` は、テストの前に自動で読まれる準備用のファイル

## 🔍 ブロックごとの解説

### conftest.py：import できるようにする準備

```python
sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "src"))
```

`sys.path` は「Python がモジュールを探しに行く場所のリスト」です。その先頭に `src` フォルダを足すことで、テストから `import fashion_news...` と書けるようにしています。

### 本物の代わりに「見本のデータ」を使う

```python
RSS = """<?xml version="1.0"?><rss ...>
<item><title>パリコレクション開幕</title>...</item>
<item><title></title><link>https://ex.com/empty</link></item>
</channel></rss>"""
```

本物のサイトから RSS を取ってくると、ネットの状態や記事の中身でテスト結果が変わってしまいます。
そこで **小さな見本の RSS を文字列で用意** し、`parse_feed` に直接渡しています。2 件目はわざとタイトルを空にしていて、「空のタイトルは飛ばす」ことを確かめています。

```python
NOW = datetime(2026, 11, 13, 21, 0, tzinfo=timezone.utc)
```

「今」も固定しています。`datetime.now()` を使うと、実行する日によって結果が変わるからです。`main.py` の `run` が `now` を引数で受け取れるように作られていたのは、このためでもあります。

### art：テスト用の記事を手早く作る関数

```python
def art(title, url="https://ex.com/1", kind="media", pub=None):
    return Article(title, url, "src", kind, pub)
```

毎回 `Article(...)` に 5 つの値を書くのは大変なので、タイトルだけ渡せば作れる小さな関数を用意しています。

### テストを 1 つ読んでみる

```python
def test_dedupe_by_url_title_and_seen():
    items = [
        art("新作スニーカーが発売", "https://ex.com/1"),
        art("新作スニーカーが発売 - 別媒体", "https://other.com/2"),
        art("別の話題", "https://ex.com/3"),
        art("掲載済み", "https://ex.com/4"),
    ]
    out = dedupe(items, {"https://ex.com/4"})
    assert [a.title for a in out] == ["新作スニーカーが発売", "別の話題"]
```

| 記事 | 残る？ | 理由 |
|---|---|---|
| 新作スニーカーが発売 | ⭕ | 最初の記事 |
| 新作スニーカーが発売 - 別媒体 | ❌ | 末尾の媒体名を取ると 1 つ目と同じタイトル |
| 別の話題 | ⭕ | 新しい話題 |
| 掲載済み | ❌ | URL が掲載済みの一覧に入っている |

テストの名前（`by_url_title_and_seen`）と `assert` を読むだけで、**dedupe が何をするはずの関数か** が分かります。テストは「動く仕様書」でもあるのです。

## 🐍 Python の書き方で見落としやすい点

| 書き方 | ポイント |
|---|---|
| `assert 式 == 期待値` | 成り立たなければテスト失敗。pytest は違いを分かりやすく表示してくれる |
| `"""..."""` | 複数行の文字列。見本の RSS をそのまま書くのに便利 |
| 関数の中の `from ... import` | そのテストだけで使う import。動きは同じ |
| `dict(CONFIG, max_per_category=2)` | CONFIG をコピーして 1 か所だけ変えた辞書を作る（元の CONFIG は変えない） |

## 🔑 キーワード

- **pytest**：Python で最もよく使われるテストのためのツール
- **assert**：「この条件が成り立つはず」という確認
- **テストデータ（フィクスチャ）**：テストのために用意した見本のデータ
- **conftest.py**：pytest がテストの前に自動で読む準備用のファイル
- **sys.path**：Python がモジュールを探す場所の一覧
- **単体テスト**：部品（関数）ごとに動きを確かめるテスト

## ⚠️ AI のコードとしてのチェックポイント

- ✅ ネットや Notion につながずに確かめられるので、速く、何度でも同じ結果になる
- ✅ 日時を固定していて、実行日に左右されない
- ✅ 境界になる場合（空のタイトル、日付なし、上限ちょうど）を確かめている
- ⚠️ `notion.py` の通信部分（リトライなど）や `fetch_all`（失敗しても続ける）はテストされていない。通信を「偽物」に差し替える仕組み（モック）を使えばテストできる
- ⚠️ `open("config/categories.yaml")` はリポジトリの一番上から実行する前提。別の場所から pytest を実行するとファイルが見つからない
- ⚠️ GitHub Actions ではテストを実行していない（`daily.yml` は本番実行だけ）。push のたびにテストを自動で動かす設定を足すと安心

## 🗣️ 30 秒で人に説明するなら

「tests フォルダには pytest のテストが 11 個あります。見本の RSS や固定した日時を使って、ネットや Notion につながずに、RSS の読み取り、URL とタイトルの正規化、重複の除去、ジャンル分け、朝刊・夕刊の判定などが期待どおりかを assert で確かめています。
AI に修正を頼んだあとにこれを実行すれば、前の機能を壊していないかすぐに分かります。」

## ✅ 理解度チェック

```quiz
? テストで本物のサイトから RSS を取らず、見本の文字列を使う理由は？
- 本物の RSS は Python で読めないから
+ ネットの状態や記事の中身に左右されず、毎回同じ結果で確かめられるから
- テストを長くするため
> テストは何度実行しても同じ結果になることが大切です。

? `assert len(items) == 1` が失敗するのはどんなとき？
+ items の数が 1 以外のとき
- items の数が 1 のとき
- items が空のときだけ
> assert の条件が成り立たないと失敗になります。

? `NOW = datetime(2026, 11, 13, 21, 0, ...)` のように「今」を固定している理由は？
- 2026 年に実行するため
+ 実行する日によって結果が変わらないようにするため
- 時刻の計算を速くするため
> datetime.now() を使うと、日によってテストが通ったり通らなかったりしてしまいます。
```
