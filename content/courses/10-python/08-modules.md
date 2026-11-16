---
title: モジュールと import・pip
level: 2
minutes: 12
concepts: [modules, tooling]
summary: 他のファイルやライブラリの機能を使う仕組み。
---
## このレッスンのゴール

- `import` の 3 つの書き方を読める
- 標準ライブラリと外部ライブラリの違い、pip の役割を説明できる
- `if __name__ == "__main__":` の意味が分かる

## import の書き方

```python
import math                   # math.sqrt(2) のように使う
from datetime import date     # date.today() と直接使える
import pandas as pd           # 別名をつける（pd.read_csv）
```

`as` の別名には慣習があります：`numpy as np`、`pandas as pd`、`matplotlib.pyplot as plt`。
AI のコードでこれを見たら「データ分析系だな」と分かります。

## 標準ライブラリ と 外部ライブラリ

| | 例 | インストール |
|---|---|---|
| 標準ライブラリ | `os`, `json`, `datetime`, `pathlib`, `csv` | 不要（Python に付属） |
| 外部ライブラリ | `requests`, `pandas`, `flask` | `pip install requests` |

外部ライブラリの一覧は `requirements.txt` に書くのが慣習です。

```text
requests==2.32.3
pandas>=2.0
```

```bash
pip install -r requirements.txt
```

**仮想環境（venv）** は、プロジェクトごとにライブラリを分けて入れるための仕組みです。AI が `python -m venv .venv` と言ってきたらこれのことです。

## 自分のファイルも import できる

```text
myapp/
├── main.py
└── utils.py      ← def format_price(x): ...
```

```python
# main.py
from utils import format_price
```

ファイル 1 つ＝モジュール 1 つ。大きなプログラムは、こうして役割ごとにファイルを分けています。

## `if __name__ == "__main__":`

```python
def main():
    print("実行されました")

if __name__ == "__main__":
    main()
```

「このファイルが **直接実行されたときだけ** `main()` を呼ぶ」という意味です。
他のファイルから import されたときには実行されません。**Python プログラムの入口の目印** として覚えましょう。

## 他の言語では

| 言語 | 読み込み | パッケージ管理 | 一覧ファイル |
|---|---|---|---|
| Python | `import x` | pip | requirements.txt / pyproject.toml |
| JavaScript | `import x from "x"` | npm | package.json |
| Go | `import "fmt"` | go mod | go.mod |
| Rust | `use x;` | cargo | Cargo.toml |

```quiz
? `from pathlib import Path` のあと、Path はどう使う？
+ Path("a.txt")
- pathlib.Path("a.txt") でしか使えない
- import Path が必要
> from ... import で取り込んだ名前は直接使えます。

? `ModuleNotFoundError: No module named 'pandas'` を直すには？
- import pandas as pd に書き換える
+ pip install pandas
- pandas.py を作る
> 外部ライブラリなのでインストールが必要です。

? `if __name__ == "__main__":` の中身が実行されるのは？
+ そのファイルを直接実行したとき
- 他のファイルから import されたとき
- いつでも
> import されたときは実行されません。
```
