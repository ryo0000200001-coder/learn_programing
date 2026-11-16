---
title: 天気予報を取得して CSV に保存するスクリプト
language: Python
date: 2026-11-16
level: 3
concepts: [http_api, data_formats, io, errors, functions, modules]
lessons: [10-python/05-functions, 10-python/07-exceptions, 10-python/08-modules, 10-python/11-files-and-json, 10-python/12-type-hints-dataclass]
summary: 無料の天気 API から 1 週間分の気温を取り、CSV ファイルに書き出す。
---
> 📝 これはサンプルです。Claude にコードを貼ると、このような解説ページが追加されます。

## 📄 解説するコード

```python
import csv
import sys
from pathlib import Path

import requests

API_URL = "https://api.open-meteo.com/v1/forecast"


def fetch_forecast(lat: float, lon: float) -> dict:
    params = {
        "latitude": lat,
        "longitude": lon,
        "daily": "temperature_2m_max,temperature_2m_min",
        "timezone": "Asia/Tokyo",
    }
    response = requests.get(API_URL, params=params, timeout=10)
    response.raise_for_status()
    return response.json()


def save_csv(data: dict, path: Path) -> int:
    daily = data["daily"]
    rows = zip(daily["time"], daily["temperature_2m_max"], daily["temperature_2m_min"])
    with path.open("w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        writer.writerow(["date", "max", "min"])
        count = 0
        for row in rows:
            writer.writerow(row)
            count += 1
    return count


def main() -> None:
    try:
        data = fetch_forecast(35.68, 139.76)
    except requests.RequestException as e:
        print(f"取得に失敗しました: {e}", file=sys.stderr)
        sys.exit(1)
    n = save_csv(data, Path("forecast.csv"))
    print(f"{n} 日分を保存しました")


if __name__ == "__main__":
    main()
```

## 🧭 ひとことで言うと

**Python** で書かれた、東京の 1 週間の最高・最低気温をインターネットから取得し、`forecast.csv` に保存するスクリプトです。

## 🗺️ 全体の流れ

1. 一番下の `if __name__ == "__main__":` から `main()` が呼ばれる（入口）
2. `fetch_forecast` が天気 API にアクセスし、JSON を辞書として受け取る（**入力**）
3. `save_csv` が辞書から日付・最高・最低気温を取り出し、CSV に 1 行ずつ書く（**処理**）
4. 何日分保存したかを表示する（**出力**）。通信に失敗したらメッセージを出して終了

## 🔍 ブロックごとの解説

### import と定数

```python
import requests
API_URL = "https://api.open-meteo.com/v1/forecast"
```

`csv`・`sys`・`pathlib` は標準ライブラリ、`requests` は外部ライブラリ（`pip install requests` が必要）。
`API_URL` が全部大文字なのは「変更しない値（定数）」という慣習です。

### fetch_forecast：API からデータを取る

```python
response = requests.get(API_URL, params=params, timeout=10)
response.raise_for_status()
return response.json()
```

- `params=` に辞書を渡すと、`?latitude=35.68&longitude=...` のように URL に付け足してくれる
- `timeout=10`：10 秒応答がなければ諦める。**付けないと永遠に待つ可能性がある** ので、丁寧なコードの証拠
- `raise_for_status()`：サーバーが 404 や 500 を返したら例外を起こす。JavaScript の `if (!res.ok)` と同じ役割
- `.json()`：返ってきた JSON 文字列を Python の辞書に変換

型ヒント `-> dict` から「辞書を返す関数」と分かります。

### save_csv：zip で 3 つのリストを束ねる

```python
rows = zip(daily["time"], daily["temperature_2m_max"], daily["temperature_2m_min"])
```

API は `{"time": [日付…], "temperature_2m_max": [気温…], ...}` のように **列ごとのリスト** で返します。
`zip` はそれを `("2026-11-16", 18.2, 9.1)` のように **行ごと** にまとめ直す関数です（ファスナーを閉じるイメージ）。

```python
with path.open("w", newline="", encoding="utf-8") as f:
```

`with` で開くので、書き終わったら自動で閉じます。`newline=""` は CSV で空行が挟まるのを防ぐお約束です。

### main：エラーに備える

```python
except requests.RequestException as e:
    print(f"取得に失敗しました: {e}", file=sys.stderr)
    sys.exit(1)
```

`RequestException` は requests のあらゆる通信エラー（タイムアウト・接続失敗・404 など）の親。
`file=sys.stderr` はエラー用の出力先、`sys.exit(1)` は「失敗して終わった」ことを OS に伝える終わり方です（0 が成功）。

## 🐍 Python の書き方で見落としやすい点

| 書き方 | ポイント |
|---|---|
| `zip(a, b, c)` | 複数のリストを並べて 1 つずつ取り出す。長さが違うと **短い方に合わせて黙って切れる** |
| `Path("forecast.csv")` | 文字列ではなく Path オブジェクト。`path.open()` のようにメソッドが使える |
| `count = 0 ... count += 1` | 実は `len(...)` を使うか、`enumerate` で書くこともできる |

## 🔑 キーワード

- **Web API**：プログラムからデータをもらうための窓口（URL）
- **JSON**：API がよく返すデータ形式。Python では辞書とリストになる
- **タイムアウト**：一定時間応答が無ければ諦める仕組み
- **例外（RequestException）**：通信の失敗をまとめて受け止めるための型
- **zip**：複数の並びを「行」に束ねる関数
- **終了コード**：`sys.exit(1)` の 1。0 なら成功、それ以外は失敗

## ⚠️ AI のコードとしてのチェックポイント

- ✅ `timeout` と `raise_for_status()` があり、通信まわりは丁寧
- ⚠️ `save_csv` は API の形が変わると `KeyError` で止まる（`data["daily"]` が無い場合）。信頼できる API なので実用上は問題ない
- ⚠️ 実行するたびに `forecast.csv` を **上書き** する（`"w"` モード）。履歴を残したいなら日付をファイル名に入れる
- ⚠️ 緯度経度が東京に固定。他の地域にしたいなら引数や設定にする
- 必要な準備：`pip install requests`、インターネット接続

## 🗣️ 30 秒で人に説明するなら

「これは天気予報の API から東京の 1 週間分の最高・最低気温を取ってきて、CSV に保存するスクリプトです。
requests で API を呼んで JSON を辞書として受け取り、zip で日付と気温を行の形にまとめて csv モジュールで書き出しています。
通信はタイムアウトとステータスチェックをしていて、失敗したらエラーを出して終了します。」

## ✅ 理解度チェック

```quiz
? `response.raise_for_status()` が無かったら、サーバーが 500 エラーを返したときどうなる？
- 自動でリトライする
+ エラーにならず、エラーページの中身を JSON として読もうとして別の場所で失敗しやすい
- プログラムが必ず止まる
> ステータスコードのチェックは自分で行う必要があります（JavaScript の res.ok と同じ）。

? `zip(["a", "b"], [1, 2])` から順に取り出されるのは？
+ ("a", 1), ("b", 2)
- ("a", "b"), (1, 2)
- ["a", 1, "b", 2]
> 同じ位置のものを組にして取り出します。

? このスクリプトを他のファイルから `import` したとき、天気の取得は実行される？
- される
+ されない
> `if __name__ == "__main__":` の中は、直接実行したときだけ動きます。
```
