---
title: fetch.py ― ニュースサイトの RSS を取ってくる「仕入れ担当」
language: Python
date: 2026-11-16
level: 2
series: fashion_news
part: 4
concepts: [http_api, data_formats, errors, functions, loops]
lessons: [10-python/05-functions, 10-python/07-exceptions, 10-python/03-loops, 10-python/08-modules]
summary: 8 つのサイトから RSS を取ってきて Article のリストにする。1 つ失敗しても他は続ける。
---
## 📄 解説するコード

`src/fashion_news/fetch.py`

```python
from __future__ import annotations

import calendar
import logging
from datetime import datetime, timezone

import feedparser
import requests

from .models import Article

log = logging.getLogger(__name__)
USER_AGENT = "fashion-news-bot/1.0 (personal RSS reader)"


def parse_feed(content: bytes | str, source: str, kind: str) -> list[Article]:
    parsed = feedparser.parse(content)
    articles: list[Article] = []
    for e in parsed.entries:
        title = (e.get("title") or "").strip()
        link = (e.get("link") or "").strip()
        if not title or not link:
            continue
        ts = e.get("published_parsed") or e.get("updated_parsed")
        published = (
            datetime.fromtimestamp(calendar.timegm(ts), tz=timezone.utc) if ts else None
        )
        articles.append(Article(title, link, source, kind, published))
    return articles


def fetch_source(src: dict, timeout: int = 20) -> list[Article]:
    resp = requests.get(src["url"], headers={"User-Agent": USER_AGENT}, timeout=timeout)
    resp.raise_for_status()
    return parse_feed(resp.content, src["name"], src.get("kind", "media"))


def fetch_all(sources: list[dict]) -> list[Article]:
    """1つの情報源が失敗しても他は続ける。"""
    result: list[Article] = []
    for src in sources:
        try:
            items = fetch_source(src)
            log.info("%s: %d件", src["name"], len(items))
            result.extend(items)
        except Exception as exc:  # noqa: BLE001
            log.warning("%s の取得に失敗: %s", src["name"], exc)
    return result
```

## 🧭 ひとことで言うと

**Python** で書かれた、**各ニュースサイトの RSS をインターネットから取ってきて、記事（Article）のリストに変換する** ファイルです。3 つの関数が「全部 → 1 サイト → 中身の読み取り」と役割を分けています。

## 🗺️ 全体の流れ

1. `main.py` が `fetch_all(sources)` に情報源の一覧（8 サイト分）を渡す
2. `fetch_all` が 1 サイトずつ `fetch_source` を呼ぶ
3. `fetch_source` が `requests` で RSS をダウンロードし、`parse_feed` に渡す
4. `parse_feed` が RSS の中身を 1 記事ずつ `Article` にする
5. 全サイト分をまとめたリストを返す（失敗したサイトは飛ばして警告を出す）

## 🔍 ブロックごとの解説

### parse_feed：RSS の中身を Article にする

```python
parsed = feedparser.parse(content)
for e in parsed.entries:
    title = (e.get("title") or "").strip()
```

- `feedparser` は RSS を読み解いてくれる外部ライブラリ。`parsed.entries` が記事の一覧
- `e.get("title") or ""`：タイトルが無い・`None` のときは空文字にする。`.strip()` で前後の空白を取る
- `if not title or not link: continue`：タイトルかリンクが空の記事は **飛ばす**（壊れたデータへの備え）

```python
ts = e.get("published_parsed") or e.get("updated_parsed")
published = (
    datetime.fromtimestamp(calendar.timegm(ts), tz=timezone.utc) if ts else None
)
```

- 公開日時が無ければ更新日時を使う（`or` で「左が無ければ右」）
- `feedparser` の日付は特殊な形なので、`calendar.timegm` で数値にしてから、**UTC（世界標準時）** の `datetime` に変換している
- 日付がどちらも無ければ `None`（1 行の if 式：`値 if 条件 else 別の値`）

### fetch_source：1 サイト分をダウンロード

```python
resp = requests.get(src["url"], headers={"User-Agent": USER_AGENT}, timeout=timeout)
resp.raise_for_status()
```

- `User-Agent`：「私は fashion-news-bot です」と名乗る。サイトに対する **マナー**
- `timeout=20`：20 秒応答が無ければ諦める（無いと永遠に待つことがある）
- `raise_for_status()`：404 や 500 などのエラーなら例外を起こす
- `src.get("kind", "media")`：`kind` が書かれていなければ `media` 扱い

### fetch_all：全サイトを回す。失敗しても止まらない

```python
for src in sources:
    try:
        items = fetch_source(src)
        result.extend(items)
    except Exception as exc:
        log.warning("%s の取得に失敗: %s", src["name"], exc)
```

`try / except` を **ループの中** に置いているのがポイントです。1 つのサイトが落ちていても、警告を出して次のサイトへ進みます。
`result.extend(items)` は、リストに **リストの中身を全部** 足す（`append` だとリストごと 1 つの要素として入ってしまう）。

### logging：記録を残す

`print` の代わりに `log.info(...)` や `log.warning(...)` を使っています。GitHub Actions の実行ログに「WWDJAPAN: 30件」のように残るので、あとから「どのサイトが取れていないか」を確認できます。

## 🐍 Python の書き方で見落としやすい点

| 書き方 | ポイント |
|---|---|
| `x or ""` | x が None や空なら "" を使う。「デフォルト値」の定番 |
| `continue` | その記事だけ飛ばして次へ |
| `except Exception` | ほぼすべてのエラーを受け止める。普通は避けたいが、ここは **ログを残して** 次に進むので妥当 |
| `# noqa: BLE001` | 「広すぎる except だと警告するツールに、わざとだと伝える」ためのコメント |
| `extend` と `append` | `[1].extend([2,3])` → `[1,2,3]`、`[1].append([2,3])` → `[1,[2,3]]` |

## 🔑 キーワード

- **RSS**：サイトの新着記事の一覧を機械向けに配る形式
- **feedparser**：RSS を読み解く外部ライブラリ
- **requests**：Web からデータを取ってくる外部ライブラリ
- **User-Agent**：アクセスするときの「名札」
- **タイムアウト**：一定時間応答が無ければ諦める仕組み
- **UTC**：世界標準時。日本時間は UTC＋9 時間
- **logging**：プログラムの動きを記録する標準ライブラリ

## ⚠️ AI のコードとしてのチェックポイント

- ✅ タイムアウト、ステータスのチェック、User-Agent の明示と、通信まわりが丁寧
- ✅ 1 サイトの失敗で全体が止まらない
- ✅ タイトルやリンクが無い壊れた記事を飛ばしている
- ⚠️ サイトを 1 つずつ順番に取りに行くので、遅いサイトがあると全体も遅くなる（最大 20 秒 × 8 サイト）。今の規模なら問題なし
- ⚠️ 全サイトの取得に失敗したときは、`main.py` 側でエラー終了するようになっている（このファイル単体では空のリストを返すだけ）

## 🗣️ 30 秒で人に説明するなら

「fetch.py はニュースの仕入れ担当です。設定ファイルにある 8 つのサイトの RSS を requests で順番にダウンロードして、feedparser で読み解き、タイトル・URL・公開日時を Article にして返します。
タイムアウトや User-Agent も付けていて、どこか 1 サイトが失敗しても警告をログに出して他のサイトは続けます。」

## ✅ 理解度チェック

```quiz
? 3 つ目のサイトの取得でエラーが起きた。4 つ目以降はどうなる？
- プログラム全体が止まる
+ 警告をログに出して、4 つ目以降も取りに行く
- 1 つ目からやり直す
> try / except がループの中にあるので、失敗はそのサイトだけで済みます。

? `e.get("published_parsed") or e.get("updated_parsed")` の意味は？
+ 公開日時があればそれを、無ければ更新日時を使う
- 両方の日時を足す
- 両方そろっていないとエラー
> or は「左が無い（None など）なら右」という意味で使われています。

? `timeout=20` を付けない場合に起こりうる問題は？
- 記事が 20 件に制限される
+ 応答しないサイトがあると、いつまでも待ち続ける
- RSS が読めなくなる
> requests は既定ではタイムアウトしないので、明示するのが定番です。
```
