---
title: main.py ― すべての部品を順番に動かす「工場長」
language: Python
date: 2026-11-16
level: 3
series: fashion_news
part: 8
concepts: [functions, io, data_formats, errors, collections, security]
lessons: [10-python/05-functions, 10-python/08-modules, 10-python/11-files-and-json, 100-ai-dev/06-secrets-env]
summary: 設定と履歴を読み込み、集める → ふるう → 仕分ける → Notion に作る → 履歴を保存する、を順に指示する司令塔。
---
## 📄 解説するコード

`src/fashion_news/main.py`

```python
from __future__ import annotations

import argparse
import json
import logging
import os
from datetime import datetime, timedelta, timezone
from pathlib import Path

import yaml

from .classify import apply_source_filters, category_order, classify
from .dedupe import dedupe, filter_recent, normalize_url
from .fetch import fetch_all
from .models import Article
from .notion import NotionClient, build_blocks

log = logging.getLogger("fashion_news")
JST = timezone(timedelta(hours=9))
ROOT = Path(__file__).resolve().parents[2]
SEEN_KEEP_DAYS = 30


def load_seen(path: Path) -> dict[str, str]:
    if not path.exists():
        return {}
    return json.loads(path.read_text(encoding="utf-8") or "{}")


def prune_seen(seen: dict[str, str], today: str) -> dict[str, str]:
    limit = (datetime.fromisoformat(today) - timedelta(days=SEEN_KEEP_DAYS)).date().isoformat()
    return {u: d for u, d in seen.items() if d >= limit}


def group_articles(articles: list[Article], config: dict) -> dict[str, list[Article]]:
    grouped = {name: [] for name in category_order(config)}
    for a in articles:
        a.category = classify(a, config)
        grouped[a.category].append(a)
    limit = config.get("max_per_category")
    oldest = datetime.min.replace(tzinfo=timezone.utc)
    for name, items in grouped.items():
        items.sort(key=lambda a: a.published or oldest, reverse=True)  # 新しい順
        if limit:
            grouped[name] = items[:limit]
    return grouped


def render_text(title: str, grouped: dict[str, list[Article]]) -> str:
    lines = [f"# {title}"]
    for cat, items in grouped.items():
        if items:
            lines.append(f"\n## {cat}")
            lines += [f"- {a.title} ({a.source}) {a.url}" for a in items]
    return "\n".join(lines)


def page_title(now: datetime) -> str:
    """JST の正午より前なら朝刊、それ以降は夕刊。"""
    jst = now.astimezone(JST)
    return f"{jst.date().isoformat()} {'朝刊' if jst.hour < 12 else '夕刊'}"


def run(dry_run: bool, force: bool, now: datetime | None = None) -> int:
    now = now or datetime.now(timezone.utc)
    today = now.astimezone(JST).date().isoformat()
    title = page_title(now)

    sources = yaml.safe_load((ROOT / "config/sources.yaml").read_text(encoding="utf-8"))["sources"]
    config = yaml.safe_load((ROOT / "config/categories.yaml").read_text(encoding="utf-8"))
    seen_path = ROOT / "data/seen_urls.json"
    seen = load_seen(seen_path)

    client = parent_id = None
    if not dry_run:
        token = (os.environ.get("NOTION_TOKEN") or "").strip()
        parent_id = (os.environ.get("NOTION_PARENT_PAGE_ID") or "").strip()
        if not token or not parent_id:
            log.error("NOTION_TOKEN と NOTION_PARENT_PAGE_ID が必要です")
            return 1
        if not token.isascii() or not token.isprintable() or " " in token:
            log.error(
                "NOTION_TOKEN に半角英数字以外の文字（日本語・記号・空白・改行など）が含まれています。"
                "Notion のインテグレーション画面のコピーアイコンでトークンをコピーし直して登録してください"
            )
            return 1
        client = NotionClient(token)
        if not force and client.find_child_page(parent_id, title):
            log.info("%s は作成済みのため終了します（--force で再作成）", title)
            return 0

    fetched = fetch_all(sources)
    if not fetched:
        log.error("全ての情報源の取得に失敗しました")
        return 1
    candidates = apply_source_filters(filter_recent(fetched, now), sources, config)
    grouped = group_articles(dedupe(candidates, set(seen)), config)
    articles = [a for items in grouped.values() for a in items]  # 上限で落とした記事は履歴に入れない
    log.info("取得 %d件 → 掲載 %d件", len(fetched), len(articles))

    if dry_run:
        print(render_text(title, grouped))
        return 0

    blocks = build_blocks(grouped) or [
        {
            "type": "paragraph",
            "paragraph": {"rich_text": [{"type": "text", "text": {"content": "本日の新着記事はありませんでした。"}}]},
        }
    ]
    url = client.create_daily_page(parent_id, title, blocks)
    log.info("Notion に作成しました: %s", url)

    seen.update({normalize_url(a.url): today for a in articles})
    seen_path.write_text(
        json.dumps(prune_seen(seen, today), ensure_ascii=False, indent=0, sort_keys=True) + "\n",
        encoding="utf-8",
    )
    return 0


def main() -> None:
    ap = argparse.ArgumentParser(description="毎朝のファッションニュースを Notion に作成する")
    ap.add_argument("--dry-run", action="store_true", help="Notion に書かず標準出力に表示")
    ap.add_argument("--force", action="store_true", help="同じ日のページがあっても作成する")
    args = ap.parse_args()
    logging.basicConfig(level=logging.INFO, format="%(levelname)s %(message)s")
    raise SystemExit(run(args.dry_run, args.force))


if __name__ == "__main__":
    main()
```

## 🧭 ひとことで言うと

**Python** で書かれた、このプログラムの **司令塔** です。自分ではあまり細かい作業をせず、ここまでに読んだ部品（fetch・classify・dedupe・notion）を **正しい順番で呼び出す** ことが主な仕事です。130 行ほどありますが、一番大事なのは `run` 関数です。

## 🗺️ 全体の流れ

`main()` → `run()` の順に動きます。`run` の中身はこうです。

1. **準備**：今の日時から「2026-11-16 朝刊」のようなタイトルを決め、設定ファイル 2 つと掲載履歴を読む
2. **確認**：Notion のトークンがあるか・おかしな文字が混ざっていないかを確かめ、同じタイトルのページが既にあれば終わる
3. **集める**：`fetch_all` で全サイトの記事を取る（全滅ならエラー終了）
4. **ふるう**：古い記事・ファッションと関係ない記事・重複・掲載済みを除く
5. **仕分ける**：`group_articles` でジャンル分けし、新しい順に各 20 件まで
6. **届ける**：Notion にページを作る（記事 0 件なら「新着はありませんでした」と書く）
7. **記録する**：載せた記事の URL を履歴に追加し、30 日より古い履歴を消して保存

## 🔍 ブロックごとの解説

### 定数：プログラム全体で使う決まった値

```python
JST = timezone(timedelta(hours=9))
ROOT = Path(__file__).resolve().parents[2]
```

- `JST`：日本時間（UTC＋9 時間）
- `ROOT`：このファイル（`src/fashion_news/main.py`）から 2 つ上のフォルダ＝リポジトリの一番上。ここを基準に `config/` や `data/` を探すので、どこから実行しても同じファイルを読める

### page_title：朝刊か夕刊か

```python
jst = now.astimezone(JST)
return f"{jst.date().isoformat()} {'朝刊' if jst.hour < 12 else '夕刊'}"
```

サーバーの時計は UTC なので、**日本時間に直してから** 日付と時刻を判断しています。日本時間 6:30 は UTC では前日の 21:30 なので、直さないと日付が 1 日ずれます。

### 安全チェック：トークンのコピーミスを見つける

```python
if not token.isascii() or not token.isprintable() or " " in token:
```

トークンに日本語や空白・改行が混ざっていないか確かめています。GitHub の Secrets に貼り付けるときのコピーミスを、分かりやすいメッセージで知らせるための工夫です。

### パイプラインの本体（3 行）

```python
candidates = apply_source_filters(filter_recent(fetched, now), sources, config)
grouped = group_articles(dedupe(candidates, set(seen)), config)
articles = [a for items in grouped.values() for a in items]
```

関数の中に関数を入れているので、**内側から読む** のがコツです。

1. `filter_recent(fetched, now)`：新しい記事だけ
2. `apply_source_filters(...)`：ファッションと関係ない記事を除く
3. `dedupe(candidates, set(seen))`：重複・掲載済みを除く
4. `group_articles(...)`：ジャンル分けして各 20 件まで
5. 最後の行：ジャンル別に分かれた記事を 1 本のリストに戻す（二重の内包表記）

### group_articles：仕分けと並べ替え

```python
items.sort(key=lambda a: a.published or oldest, reverse=True)
```

公開日時の新しい順に並べます。日時が無い記事は「一番古い日時」として扱い、一番後ろへ。そのあと `items[:limit]` で上位 20 件だけ残します。

### 履歴の保存

```python
seen.update({normalize_url(a.url): today for a in articles})
seen_path.write_text(json.dumps(prune_seen(seen, today), ensure_ascii=False, ...))
```

- 載せた記事の URL と今日の日付を、辞書に追加する
- `prune_seen`：30 日より前の記録を消す（ファイルが大きくなりすぎないように）
- JSON にしてファイルに書き戻す。このあと GitHub Actions がコミットして保存する（9 ページ目）
- **上限の 20 件からあふれた記事は履歴に入れない**ので、次の回に載るチャンスが残る

### main：コマンドの受け付け口

```python
ap.add_argument("--dry-run", action="store_true", ...)
raise SystemExit(run(args.dry_run, args.force))
```

- `argparse`：`python -m fashion_news --dry-run` のような **コマンドのオプション** を読み取る標準ライブラリ
- `--dry-run`：Notion に書かず、結果を画面に表示するだけ（試し運転）
- `--force`：同じタイトルのページがあっても作る
- `run` は成功なら `0`、失敗なら `1` を返し、`SystemExit` でそれを **終了コード** として外に伝える。GitHub Actions は 1 を見て「失敗」と判断し、メールで知らせてくれる

## 🐍 Python の書き方で見落としやすい点

| 書き方 | ポイント |
|---|---|
| `now = now or datetime.now(...)` | 引数で日時が渡されなければ今の日時。**テストで日時を固定できる** ようにする工夫 |
| `client = parent_id = None` | 2 つの変数をまとめて None にする |
| `build_blocks(grouped) or [...]` | 空のリストなら代わりに「新着なし」のブロックを使う |
| `[a for items in ... for a in items]` | 二重のループの内包表記。左の for が外側 |
| `return 1` / `return 0` | 終了コード。0 が成功、それ以外が失敗という OS の慣習 |

## 🔑 キーワード

- **司令塔（オーケストレーション）**：部品を順番に呼び出して全体を動かす役
- **argparse**：コマンドラインのオプションを読み取る標準ライブラリ
- **環境変数**：プログラムの外から渡す設定値（ここではトークン）
- **タイムゾーン**：UTC と JST（日本時間）のような時差の扱い
- **終了コード**：プログラムが成功（0）か失敗（1 など）かを外に伝える番号
- **ドライラン**：本番の書き込みをしない試し運転

## ⚠️ AI のコードとしてのチェックポイント

- ✅ 部品の呼び出し順が `run` にまとまっていて、全体の流れが追いやすい
- ✅ トークンが無い・壊れている場合に、分かりやすいメッセージで止まる
- ✅ 時刻を引数で渡せるので、テストで「朝刊／夕刊」の切り替えを確かめられる
- ✅ 記事が 0 件でもページを作る（要件どおり）
- ⚠️ `run` が「設定の読み込み」から「保存」まで多くの役割を持っていて長め。今は読める長さだが、機能を足すなら分けたい
- ⚠️ 設定ファイルの書き間違い（`sources` キーが無いなど）は、分かりにくいエラー（KeyError）で止まる

## 🗣️ 30 秒で人に説明するなら

「main.py は全体の司令塔です。日本時間でページのタイトルを決めて、設定と掲載履歴を読み、Notion のトークンを確認してから、記事を集める、古いものと重複を除く、ジャンル分けして 20 件ずつにする、Notion にページを作る、という順に部品を呼びます。
最後に載せた URL を履歴ファイルに保存して、次の回に同じ記事が出ないようにしています。--dry-run を付ければ Notion に書かずに試せます。」

## ✅ 理解度チェック

```quiz
? 日本時間 2026-11-14 の 6:30 に実行したとき、ページのタイトルは？
- 2026-11-13 夕刊
+ 2026-11-14 朝刊
- 2026-11-13 朝刊
> UTC では 11/13 21:30 ですが、日本時間に直してから判断するので 11/14 の朝刊です。

? `--dry-run` を付けて実行すると？
+ Notion には書かず、結果を画面に表示する
- Notion のページを削除する
- 履歴ファイルだけ更新する
> dry_run のときは表示して return 0 で終わり、履歴も書き換えません。

? ジャンルの上限 20 件からあふれた記事はどうなる？
- 履歴に入り、二度と載らない
+ 履歴に入らないので、次の回に載る可能性がある
- 「その他」に移される
> コメントの「上限で落とした記事は履歴に入れない」がその意図です。
```
