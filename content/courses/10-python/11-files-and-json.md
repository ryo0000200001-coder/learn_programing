---
title: ファイルと JSON
level: 3
minutes: 15
concepts: [io, data_formats]
summary: ファイルの読み書きと、データ交換で定番の JSON・CSV。
---
## このレッスンのゴール

- `with open(...)` の形と、それが安全な理由を説明できる
- JSON と Python の辞書・リストの対応が分かる

## with open：ファイルを読み書きする

```python
with open("memo.txt", "w", encoding="utf-8") as f:
    f.write("こんにちは\n")

with open("memo.txt", encoding="utf-8") as f:
    text = f.read()
```

| モード | 意味 |
|---|---|
| `"r"`（省略時） | 読み込み |
| `"w"` | 書き込み（**既存の中身は消える**） |
| `"a"` | 末尾に追記 |

`with` を使うと、ブロックを抜けたとき（エラーでも）**自動でファイルを閉じて** くれます。
`encoding="utf-8"` は日本語の文字化けを防ぐためのお約束です。

## pathlib：パスを扱う現代的な方法

```python
from pathlib import Path

path = Path("data") / "users.json"   # / でパスをつなげる
if path.exists():
    text = path.read_text(encoding="utf-8")
```

AI のコードでは `os.path` より `pathlib` を見ることが増えています。

## JSON

JSON は Web API や設定ファイルで使われる、データの書き方です。Python の辞書・リストとほぼ同じ見た目です。

```python
import json

data = {"name": "Ryo", "skills": ["Python"], "active": True}
text = json.dumps(data, ensure_ascii=False, indent=2)  # Python → JSON 文字列
back = json.loads(text)                                  # JSON 文字列 → Python
```

| JSON | Python |
|---|---|
| `{}` オブジェクト | `dict` |
| `[]` 配列 | `list` |
| `true / false` | `True / False` |
| `null` | `None` |

ファイルなら `json.load(f)` / `json.dump(data, f)`（`s` が付かない方）を使います。
`ensure_ascii=False` は日本語を `あ` のような形にせずそのまま書くための指定です。

## CSV

```python
import csv

with open("scores.csv", encoding="utf-8", newline="") as f:
    for row in csv.DictReader(f):   # 1 行目を見出しとして辞書で読む
        print(row["name"], row["score"])
```

CSV から読んだ値は **すべて文字列** です。計算するなら `int(row["score"])` が必要です。

```quiz
? `open("a.txt", "w")` で既存のファイルを開くと？
- 末尾に追記される
+ 元の中身は消えて上書きされる
- エラーになる
> 追記したいときは "a" モードを使います。

? `with open(...) as f:` を使う一番の利点は？
+ 使い終わったら自動でファイルを閉じてくれる
- 読み込みが速くなる
- 文字化けしなくなる
> エラーが起きても確実に閉じられます。

? JSON の `null` は Python では？
- 0
- ""
+ None
> true/false は True/False、null は None に対応します。
```
