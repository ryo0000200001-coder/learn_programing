---
title: dedupe.py ― 古い記事・同じ記事を取り除く「検品担当」
language: Python
date: 2026-11-16
level: 3
series: fashion_news
part: 6
concepts: [strings, collections, loops, functions]
lessons: [10-python/06-strings, 10-python/04-lists-and-dicts, 10-python/09-comprehensions-lambda, 10-python/05-functions]
summary: URL とタイトルを「比べやすい形」に整えてから、古い記事・掲載済みの記事・ほぼ同じ記事を除く。
---
## 📄 解説するコード

`src/fashion_news/dedupe.py`

```python
from __future__ import annotations

import re
import unicodedata
from datetime import datetime, timedelta
from difflib import SequenceMatcher
from urllib.parse import parse_qsl, urlencode, urlsplit, urlunsplit

from .models import Article

_TRACKING = re.compile(r"^(utm_|fbclid|gclid|ref$|ref_)")


def normalize_url(url: str) -> str:
    p = urlsplit(url.strip())
    query = [(k, v) for k, v in parse_qsl(p.query) if not _TRACKING.match(k)]
    path = p.path.rstrip("/") or "/"
    return urlunsplit((p.scheme.lower(), p.netloc.lower(), path, urlencode(query), ""))


def normalize_title(title: str) -> str:
    t = unicodedata.normalize("NFKC", title).lower()
    t = re.sub(r"\s+[-–|｜]\s+[^-–|｜]+$", "", t)  # 末尾の「 - 媒体名」を除く
    return re.sub(r"[\W_]+", "", t)


def filter_recent(articles: list[Article], now: datetime, hours: int = 36) -> list[Article]:
    """日付のない記事は残す（重複除去に任せる）。"""
    cutoff = now - timedelta(hours=hours)
    return [a for a in articles if a.published is None or a.published >= cutoff]


def dedupe(
    articles: list[Article], seen_urls: set[str], similarity: float = 0.9
) -> list[Article]:
    kept: list[Article] = []
    kept_titles: list[str] = []
    for a in articles:
        url = normalize_url(a.url)
        if url in seen_urls:
            continue
        nt = normalize_title(a.title)
        if not nt:
            continue
        if any(nt == t or SequenceMatcher(None, nt, t).ratio() >= similarity for t in kept_titles):
            continue
        kept.append(a)
        kept_titles.append(nt)
        seen_urls = seen_urls | {url}
    return kept
```

## 🧭 ひとことで言うと

**Python** で書かれた、**同じニュースが何度も載らないようにする** ファイルです。URL とタイトルを「比べやすい形」に整えてから、古い記事・掲載済みの記事・タイトルがほぼ同じ記事を取り除きます。このシリーズで一番むずかしいファイルなので、ゆっくり読みましょう。

## 🗺️ 全体の流れ

1. `filter_recent`：36 時間より前の記事を取り除く
2. `dedupe`：1 記事ずつ見て、次のどれかに当たれば捨てる
   - URL が過去に載せたもの（`seen_urls`）に入っている
   - タイトルが空
   - すでに残した記事とタイトルが 90% 以上似ている
3. 比べる前に、`normalize_url` と `normalize_title` で「表記ゆれ」をそろえる

## 🔍 ブロックごとの解説

### なぜ「そろえる（正規化）」が必要？

同じ記事でも、URL やタイトルの書き方が少し違うことがよくあります。

| 同じ記事なのに… | 例 |
|---|---|
| URL に追跡用の文字がついている | `https://ex.com/a?utm_source=x` と `https://ex.com/a` |
| 最後の `/` の有無 | `https://ex.com/a/` と `https://ex.com/a` |
| タイトルの後ろに媒体名 | `新作スニーカー発売 - 某メディア` と `新作スニーカー発売` |
| 全角・半角、大文字・小文字 | `ＮＩＫＥ` と `nike` |

そのまま比べると「別の記事」と判定されてしまうので、**比べる前に同じ形に整える** のが正規化です。

### normalize_url：URL を整える

```python
p = urlsplit(url.strip())
query = [(k, v) for k, v in parse_qsl(p.query) if not _TRACKING.match(k)]
path = p.path.rstrip("/") or "/"
return urlunsplit((p.scheme.lower(), p.netloc.lower(), path, urlencode(query), ""))
```

1. `urlsplit`：URL を「https」「ex.com」「/a/」「utm_source=x&id=1」などの部品に分ける
2. `?` 以降の項目（クエリ）から、`utm_`・`fbclid` など **広告の追跡用の項目だけ** 取り除く
3. 最後の `/` を取る（全部取れて空になったら `/` にする）
4. 小文字にそろえて組み立て直す。最後の `""` は `#top` のような **ページ内の位置（フラグメント）を捨てる** という意味

例：`https://EX.com/a/?utm_source=x&id=1#top` → `https://ex.com/a?id=1`

### 正規表現（re）の読み方

```python
_TRACKING = re.compile(r"^(utm_|fbclid|gclid|ref$|ref_)")
```

正規表現は「文字のパターン」を書くための小さな言語です。

| 記号 | 意味 |
|---|---|
| `^` | 先頭から |
| `( A \| B )` | A または B |
| `$` | そこで終わり |

なので「`utm_` で始まる」「`fbclid` で始まる」「ちょうど `ref`」「`ref_` で始まる」のどれかに一致します。

### normalize_title：タイトルを整える

```python
t = unicodedata.normalize("NFKC", title).lower()
t = re.sub(r"\s+[-–|｜]\s+[^-–|｜]+$", "", t)
return re.sub(r"[\W_]+", "", t)
```

1. `NFKC`：全角英数字を半角に、半角カナを全角に…と **文字の種類をそろえる**。そのあと小文字に
2. 1 つ目の `re.sub`：末尾の「` - 媒体名`」を消す。`\s+` は空白、`[-–|｜]` は区切り記号のどれか、`[^-–|｜]+$` は「区切り記号以外の文字が最後まで続く」
3. 2 つ目の `re.sub`：記号・空白（`\W` は「文字でも数字でもないもの」）を全部消す

例：`新作スニーカー発売！ - 某メディア` → `新作スニーカー発売`

### filter_recent：新しい記事だけ残す

```python
cutoff = now - timedelta(hours=hours)
return [a for a in articles if a.published is None or a.published >= cutoff]
```

「今から 36 時間前」を境目にして、それより新しい記事を残します。**日付が無い記事は残す**（あとの重複チェックや掲載済みチェックに任せる）という判断です。
要件では「直近 24 時間」ですが、少し余裕を持って 36 時間にしているようです（掲載済みチェックがあるので、重なっても二重には載りません）。

### dedupe：重複を取り除く本体

```python
if any(nt == t or SequenceMatcher(None, nt, t).ratio() >= similarity for t in kept_titles):
    continue
```

`SequenceMatcher(...).ratio()` は、2 つの文字列が **どれくらい似ているかを 0〜1 で返す** 標準ライブラリの機能です。0.9 以上なら「ほぼ同じ記事」として捨てます。
別のサイトが同じニュースを少し違うタイトルで出していても、まとめられます。

```python
seen_urls = seen_urls | {url}
```

残した記事の URL も「見たもの」に足して、同じ実行の中で同じ URL が 2 回出ても捨てられるようにしています。`|` はセットの合体です。

## 🐍 Python の書き方で見落としやすい点

| 書き方 | ポイント |
|---|---|
| `r"..."` | raw 文字列。`\s` などの `\` をそのまま正規表現に渡すため |
| `re.compile(...)` | 正規表現を前もって準備しておく。何度も使うときに速い |
| `p.path.rstrip("/") or "/"` | 空文字になったら `/` を使う、という `or` の定番の使い方 |
| `seen_urls = seen_urls \| {url}` | 元のセットを変えずに **新しいセットを作る**。呼び出し元の `seen` を書き換えないための書き方 |
| `_TRACKING` の先頭の `_` | 「このファイルの中だけで使う」という慣習 |

## 🔑 キーワード

- **正規化**：比べやすいように表記ゆれをそろえること
- **正規表現**：文字のパターンを表す書き方（`re` モジュール）
- **クエリ**：URL の `?` 以降の部分。`key=value` が `&` でつながる
- **トラッキングパラメータ**：`utm_source` など、どこから来たかを計測するための追跡用の項目
- **NFKC**：全角・半角などの文字の種類をそろえる Unicode の正規化方式
- **類似度（ratio）**：2 つの文字列がどれだけ似ているかを 0〜1 で表した値

## ⚠️ AI のコードとしてのチェックポイント

- ✅ 表記ゆれに丁寧に対処していて、テストもある（10 ページ目）
- ✅ 呼び出し元のデータを書き換えないように作られている
- ⚠️ 記事が増えると遅くなる：残した記事全部とタイトルを比べるので、記事数の 2 乗に比例して時間がかかる。今の規模（数百件）なら問題なし
- ⚠️ 似ているけれど別のニュース（例：「〇〇 春夏コレクション発表」と「〇〇 秋冬コレクション発表」）が 90% 以上似ていると、片方が消える可能性がある
- ⚠️ `seen_urls | {url}` は毎回セットをまるごと作り直すので少し無駄がある（`set.add` を使えば速いが、元のデータを守るために最初に一度コピーする必要がある）

## 🗣️ 30 秒で人に説明するなら

「dedupe.py は同じニュースを二重に載せないための検品担当です。まず 36 時間より古い記事を落とし、URL は追跡用のパラメータや末尾のスラッシュを取って、タイトルは全角半角や記号、末尾の媒体名を取ってそろえます。
そのうえで、過去に載せた URL や、すでに残したタイトルと 90% 以上似ている記事を捨てています。」

## ✅ 理解度チェック

```quiz
? `normalize_url("https://Ex.com/news/?utm_source=x")` の結果は？
- https://Ex.com/news/?utm_source=x
+ https://ex.com/news
- https://ex.com/news/
> ドメインを小文字にし、utm_ の項目と末尾の / を取り除きます。

? 公開日時が分からない（None の）記事は filter_recent でどうなる？
+ 残される
- 捨てられる
- エラーになる
> 「日付のない記事は残す（重複除去に任せる）」と書かれています。

? `SequenceMatcher(None, a, b).ratio()` が返すのは？
- a と b の文字数の差
+ a と b の似ている度合い（0〜1）
- a が b に含まれるかどうか
> 1 に近いほど似ています。このコードでは 0.9 以上を同じ記事とみなします。
```
