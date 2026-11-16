---
title: models.py と __main__.py ― 記事 1 件の「伝票の書式」とプログラムの入口
language: Python
date: 2026-11-16
level: 2
series: fashion_news
part: 2
concepts: [classes, type_hints, modules]
lessons: [10-python/10-classes, 10-python/12-type-hints-dataclass, 10-python/08-modules]
summary: 記事データの形を決める dataclass と、python -m で実行したときの入口。
---
## 📄 解説するコード

`src/fashion_news/models.py`

```python
from __future__ import annotations

from dataclasses import dataclass
from datetime import datetime


@dataclass
class Article:
    title: str
    url: str
    source: str
    kind: str  # media / official / sns
    published: datetime | None = None  # UTC。不明なら None
    category: str = ""
```

`src/fashion_news/__main__.py`

```python
from .main import main

main()
```

（`__init__.py` は中身が空のファイルです）

## 🧭 ひとことで言うと

**Python** のファイル 2 つです。`models.py` は「記事 1 件がどんな情報を持つか」という **データの形（Article）** を決め、`__main__.py` は `python -m fashion_news` で実行されたときの **入口** です。

## 🗺️ 全体の流れ

1. `python -m fashion_news` と実行すると、Python は `fashion_news` フォルダの `__main__.py` を探して実行する
2. `__main__.py` は `main.py` の `main()` 関数を呼ぶだけ
3. プログラムのあちこちで、記事は `Article` の形で受け渡しされる

## 🔍 ブロックごとの解説

### @dataclass：データを入れるための箱を簡単に作る

```python
@dataclass
class Article:
    title: str
    url: str
```

`@dataclass` を付けると、`__init__`（作るときの初期化処理）を Python が自動で作ってくれます。
なので、次のように 1 行で記事を作れます。

```python
a = Article("パリコレ開幕", "https://...", "WWDJAPAN", "media")
a.title   # "パリコレ開幕"
```

辞書 `{"title": ..., "url": ...}` でも同じ情報は持てますが、クラスにしておくと
**キーのタイプミスに気づける**、**どんな項目があるか一目で分かる** という利点があります。

### 各項目の意味

| 項目 | 型 | 意味 |
|---|---|---|
| `title` | `str` | 記事のタイトル |
| `url` | `str` | 記事のリンク |
| `source` | `str` | どのサイトから来たか（例：WWDJAPAN） |
| `kind` | `str` | 情報源の種類。`media`（メディア）/ `official`（公式発表）/ `sns`（SNS の話題） |
| `published` | `datetime \| None` | 公開日時。分からなければ `None` |
| `category` | `str` | あとで付けるジャンル名。最初は空文字 |

`= None` や `= ""` のように **初期値があるものは、作るときに省略できます**。
`published` は RSS によっては日付が無いことがあるので、`None`（なし）も許しています。

### from __future__ import annotations

型ヒントの書き方を新しいルールで扱うための 1 行です。`datetime | None` のような新しめの書き方を、古い Python でも使えるようにするためのお守りだと思っておけば十分です。

### __main__.py と __init__.py

| ファイル | 役割 |
|---|---|
| `__init__.py` | 「このフォルダは Python のパッケージです」という目印。中身は空でもよい |
| `__main__.py` | `python -m パッケージ名` で実行されたときに最初に動くファイル |

`from .main import main` の `.` は「同じフォルダの」という意味（相対 import）です。

## 🐍 Python の書き方で見落としやすい点

| 書き方 | ポイント |
|---|---|
| `datetime \| None` | 「datetime か None のどちらか」。使う側は None のときの処理が必要になる（実際 `main.py` で `a.published or oldest` と対処している） |
| `kind: str  # media / official / sns` | 型は `str` なので、実は何の文字列でも入ってしまう。コメントで決まりごとを伝えている |
| `@dataclass` | 自動で `__init__` に加え、表示用の `__repr__`、比較用の `__eq__` も作ってくれる（テストで `==` 比較できるのはこのおかげ） |

## 🔑 キーワード

- **dataclass**：データを入れるためのクラスを簡単に作る仕組み
- **型ヒント**：`title: str` のように、どんな値が入るかを書いた注釈
- **None**：「値が無い」ことを表す特別な値
- **パッケージ**：Python のファイルをまとめたフォルダ
- **相対 import**：`from .main import ...` のように、同じパッケージ内から読み込む書き方

## ⚠️ AI のコードとしてのチェックポイント

- ✅ データの形が 1 か所にまとまっていて、どのファイルからも同じ `Article` を使っている
- ✅ 日付が無い場合を `None` で表し、型ヒントにも明記している
- ⚠️ `kind` は自由な文字列なので、`sources.yaml` で `"medai"` のように打ち間違えてもエラーにならない（`Literal["media", "official", "sns"]` という型にすれば防げる）

## 🗣️ 30 秒で人に説明するなら

「models.py では、記事 1 件が持つ情報を Article という dataclass で決めています。タイトル・URL・出典・種類・公開日時・ジャンルの 6 つです。
公開日時は分からないこともあるので None を許していて、ジャンルは後から入れるので最初は空です。
__main__.py は、python -m fashion_news で起動したときに main 関数を呼ぶだけの入口です。」

## ✅ 理解度チェック

```quiz
? `Article("見出し", "https://x", "WWD", "media")` で作った記事の `published` は？
- 今の日時
+ None
- エラーになる
> 初期値が None なので、省略するとそのまま None になります。

? `@dataclass` を付けると何が楽になる？
+ `__init__` などを自動で作ってくれる
- 自動でデータベースに保存される
- 型が違うと必ずエラーになる
> 型ヒントは注釈なので、dataclass でも型の強制はされません。

? `python -m fashion_news` で最初に実行されるファイルは？
- main.py
+ __main__.py
- __init__.py
> -m でパッケージを実行すると __main__.py が入口になります（その前に __init__.py も読まれます）。
```
