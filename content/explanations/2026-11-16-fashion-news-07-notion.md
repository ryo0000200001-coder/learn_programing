---
title: notion.py ― Notion にページを作る「配送担当」
language: Python
date: 2026-11-16
level: 3
series: fashion_news
part: 7
concepts: [http_api, classes, data_formats, errors, security]
lessons: [10-python/10-classes, 10-python/04-lists-and-dicts, 10-python/07-exceptions, 100-ai-dev/06-secrets-env]
summary: Notion API を使って、ジャンル見出しと記事リンクの箇条書きでページを作る。失敗時のリトライ付き。
---
## 📄 解説するコード

`src/fashion_news/notion.py`

```python
from __future__ import annotations

import logging
import time

import requests

from .models import Article

log = logging.getLogger(__name__)
API = "https://api.notion.com/v1"
VERSION = "2022-06-28"
MAX_CHILDREN = 100  # 1回のリクエストで送れるブロック数の上限


def build_blocks(grouped: dict[str, list[Article]]) -> list[dict]:
    blocks: list[dict] = []
    for category, items in grouped.items():
        if not items:
            continue
        blocks.append(
            {
                "type": "heading_2",
                "heading_2": {"rich_text": [{"type": "text", "text": {"content": category}}]},
            }
        )
        for a in items:
            blocks.append(
                {
                    "type": "bulleted_list_item",
                    "bulleted_list_item": {
                        "rich_text": [
                            {
                                "type": "text",
                                "text": {"content": a.title[:1900], "link": {"url": a.url}},
                            },
                            {"type": "text", "text": {"content": f" — {a.source}"}},
                        ]
                    },
                }
            )
    return blocks


class NotionClient:
    def __init__(self, token: str):
        self.s = requests.Session()
        self.s.headers.update(
            {
                "Authorization": f"Bearer {token}",
                "Notion-Version": VERSION,
                "Content-Type": "application/json",
            }
        )

    def _request(self, method: str, path: str, **kw) -> dict:
        for attempt in range(4):
            r = self.s.request(method, f"{API}{path}", timeout=30, **kw)
            if r.status_code == 429 or r.status_code >= 500:
                time.sleep(float(r.headers.get("Retry-After", 2 ** attempt)))
                continue
            if not r.ok:
                raise RuntimeError(f"Notion API {r.status_code}: {r.text[:300]}")
            return r.json()
        raise RuntimeError(f"Notion API が繰り返し失敗: {method} {path}")

    def find_child_page(self, parent_id: str, title: str) -> str | None:
        cursor = None
        while True:
            params = {"page_size": 100, **({"start_cursor": cursor} if cursor else {})}
            data = self._request("GET", f"/blocks/{parent_id}/children", params=params)
            for b in data["results"]:
                if b["type"] == "child_page" and b["child_page"]["title"] == title:
                    return b["id"]
            if not data.get("has_more"):
                return None
            cursor = data["next_cursor"]

    def create_daily_page(self, parent_id: str, title: str, blocks: list[dict]) -> str:
        page = self._request(
            "POST",
            "/pages",
            json={
                "parent": {"page_id": parent_id},
                "properties": {"title": {"title": [{"text": {"content": title}}]}},
                "children": blocks[:MAX_CHILDREN],
            },
        )
        for i in range(MAX_CHILDREN, len(blocks), MAX_CHILDREN):
            self._request(
                "PATCH",
                f"/blocks/{page['id']}/children",
                json={"children": blocks[i : i + MAX_CHILDREN]},
            )
        return page["url"]
```

## 🧭 ひとことで言うと

**Python** で書かれた、**Notion API（プログラムから Notion を操作する窓口）を使って、ニュースのページを作る** ファイルです。ページの中身を Notion の形式に組み立てる関数と、Notion とやりとりするクラスの 2 つでできています。

## 🗺️ 全体の流れ

1. `build_blocks`：ジャンル別の記事を、Notion の「ブロック」（見出し・箇条書きなどの部品）のリストに変換する
2. `NotionClient(token)`：トークン（合言葉）を持った通信係を作る
3. `find_child_page`：同じタイトルのページ（例：「2026-11-16 朝刊」）がもう無いか調べる
4. `create_daily_page`：ページを作り、ブロックを 100 個ずつ送り込む
5. 通信が混雑・失敗したら、少し待ってやり直す（`_request`）

## 🔍 ブロックごとの解説

### Notion の「ブロック」は辞書の入れ子

Notion のページは「ブロック」という部品の積み重ねです。API には、それを **辞書（JSON）** で送ります。

```python
{"type": "heading_2", "heading_2": {"rich_text": [{"type": "text", "text": {"content": "ストリート/スニーカー"}}]}}
```

入れ子が深くて読みにくいですが、外側から読むと「種類は見出し 2（`##`）で、文字は『ストリート/スニーカー』」というだけです。
記事は箇条書き（`bulleted_list_item`）で、タイトルにリンクを付け、後ろに「 — 出典名」を付けています。
`a.title[:1900]` は、Notion の 1 つの文字ブロックの上限（2000 文字）を超えないように、念のため切っています。

### NotionClient：通信係のクラス

```python
self.s = requests.Session()
self.s.headers.update({"Authorization": f"Bearer {token}", ...})
```

- `requests.Session()`：同じ相手と何度もやりとりするための「通信の窓口」。ヘッダーを一度設定すれば毎回付けてくれる
- `Authorization: Bearer トークン`：「この合言葉を持っている者です」と名乗る。**トークンはコードに書かず、`main.py` が環境変数から受け取って渡している**
- `Notion-Version`：どの版の API の仕様で話すかを指定

### _request：混雑していたら待ってやり直す

```python
for attempt in range(4):
    r = self.s.request(method, f"{API}{path}", timeout=30, **kw)
    if r.status_code == 429 or r.status_code >= 500:
        time.sleep(float(r.headers.get("Retry-After", 2 ** attempt)))
        continue
```

- `429`：「アクセスが多すぎます」、`500` 番台：「サーバー側の不調」。どちらも **時間をおけば成功するかもしれない** エラー
- `Retry-After`（何秒待てばいいか）が返ってくればその秒数、無ければ 1, 2, 4, 8 秒…と **だんだん長く待つ**（指数バックオフ）
- 最大 4 回試してダメならエラーにする
- 400 番台（リクエストの間違い・権限なし）は待っても直らないので、すぐにエラーにする
- 名前の先頭の `_` は「クラスの中だけで使う」という慣習
- `**kw` は「受け取ったキーワード引数を、そのまま次に渡す」（`params=` や `json=` を中継している）

### find_child_page：ページの一覧を少しずつ読む

```python
while True:
    data = self._request("GET", f"/blocks/{parent_id}/children", params=params)
    ...
    if not data.get("has_more"):
        return None
    cursor = data["next_cursor"]
```

Notion は一度に 100 件までしか返さないので、「続きがある（`has_more`）なら、続きの目印（`cursor`）を付けてもう一度聞く」を繰り返します。これを **ページネーション** と呼び、多くの Web API で見る形です。

### create_daily_page：100 個ずつ送る

最初の 100 ブロックはページ作成と同時に送り、残りは `PATCH`（追加）で 100 個ずつ送ります。
`range(100, len(blocks), 100)` は 100, 200, 300… と 100 刻みの数を作り、`blocks[i : i + 100]` でそこから 100 個を切り出します。

## 🐍 Python の書き方で見落としやすい点

| 書き方 | ポイント |
|---|---|
| `**({"start_cursor": cursor} if cursor else {})` | cursor があるときだけ辞書に項目を足す。`**` は辞書を展開して合体させる |
| `**kw` | 受け取ったキーワード引数をまとめて受け取り、そのまま渡す |
| `2 ** attempt` | 2 の attempt 乗（1, 2, 4, 8） |
| `blocks[i : i + 100]` | スライス。範囲外でもエラーにならず、ある分だけ返る |
| `raise RuntimeError(...)` | 自分でエラーを起こす。`main.py` まで伝わってプログラムが失敗として終わる |

## 🔑 キーワード

- **Notion API**：プログラムから Notion を操作する窓口
- **ブロック**：Notion のページを作る部品（見出し・段落・箇条書きなど）
- **トークン（Bearer）**：API を使う権利を示す合言葉。秘密情報
- **セッション**：同じ相手とのやりとりをまとめて管理する仕組み
- **リトライ・指数バックオフ**：失敗したら待ち時間を倍々に増やしてやり直すこと
- **ページネーション**：データを何回かに分けて受け取る仕組み
- **ステータスコード**：200（成功）、429（多すぎ）、500（サーバーの不調）など、結果を表す番号

## ⚠️ AI のコードとしてのチェックポイント

- ✅ トークンをコードに書かず、外から受け取っている
- ✅ 混雑時は待ってやり直し、直らないエラーはすぐ止める、という使い分けができている
- ✅ ブロック数や文字数の上限を考慮している
- ⚠️ ページを作ったあと、残りのブロックの追加に失敗すると、**途中までのページが Notion に残る**。次の回は「作成済み」と判定されて作り直されない（`--force` で作り直せる）
- ⚠️ `Notion-Version: 2022-06-28` は固定。Notion 側で古い版が使えなくなったら更新が必要になる

## 🗣️ 30 秒で人に説明するなら

「notion.py は Notion への配送担当です。ジャンルごとの記事を、Notion の見出しブロックとリンク付きの箇条書きブロックに組み立てて、Notion API でページを作ります。
トークンはヘッダーに付けて送り、混雑やサーバーエラーのときは待ち時間を増やしながら最大 4 回やり直します。
同じタイトルのページが既にあるかを調べる機能もあって、二重に作らないようにしています。」

## ✅ 理解度チェック

```quiz
? Notion API が 429 を返したとき、このコードはどうする？
- すぐにエラーで終了する
+ 少し待ってからやり直す
- 別の API に切り替える
> 429 は「多すぎる」の意味なので、待てば成功する可能性があります。

? Notion API が 401（認証エラー）を返したときは？
+ やり直さずにすぐエラーにする
- 4 回までやり直す
- 無視して次に進む
> 400 番台は待っても直らないので、`raise RuntimeError` ですぐ止めます。

? ブロックが 250 個あるとき、create_daily_page は API を何回呼ぶ？
- 1 回
- 2 回
+ 3 回
> ページ作成で 100 個、そのあと PATCH で 100 個と 50 個を送ります。
```
