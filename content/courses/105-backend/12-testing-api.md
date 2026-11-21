---
title: API のテスト
level: 3
minutes: 18
concepts: [testing, backend, database]
summary: TestClient で API を呼んで確かめる。テスト用のデータベースへの差し替えと、何をテストすべきか。
---
## このレッスンのゴール

- API のテストコード（pytest ＋ TestClient）を読める
- テストのときに本物のデータベースを使わない工夫（差し替え）が分かる
- 「何をテストすべきか」の定番を挙げられる

## API のテスト＝偽物のブラウザで呼んでみる

AI と開発するコース「テストで AI のコードを確かめる」では、関数を直接呼んで `assert` しました。
API の場合は、**サーバーを起動せずに、偽物のクライアントから HTTP リクエストを送って** 確かめます。

```python
from fastapi.testclient import TestClient
from app import app

client = TestClient(app)

def test_create_and_get_task():
    res = client.post("/tasks", json={"title": "会場を探す"})
    assert res.status_code == 201
    task_id = res.json()["id"]

    res = client.get(f"/tasks/{task_id}")
    assert res.status_code == 200
    assert res.json()["title"] == "会場を探す"
```

確かめているのは、**ステータスコード** と **返ってきた JSON の中身** の 2 つです。これはフロントエンドが実際に頼りにしている「約束」そのものです。

## 本物のデータベースを使わない

テストのたびに本物のデータベースにタスクが増えていくのは困ります。そこで、**テストの間だけ、データベースを使い捨てのものに差し替えます**。

アプリ側は、データベースの接続を `Depends(get_db)` で受け取るように作っておきます。

```python
def get_db():
    conn = sqlite3.connect("app.db")
    try:
        yield conn          # ← この接続を API の関数に渡す
    finally:
        conn.close()        # ← リクエストが終わったら閉じる

@app.post("/tasks", status_code=201)
def create_task(body: TaskCreate, db = Depends(get_db)):
    ...
```

テスト側で、`get_db` を **差し替え** ます。

```python
import pytest

@pytest.fixture
def client(tmp_path):
    conn = sqlite3.connect(tmp_path / "test.db", check_same_thread=False)
    conn.execute("CREATE TABLE tasks (id INTEGER PRIMARY KEY, title TEXT NOT NULL)")

    def override_get_db():
        yield conn

    app.dependency_overrides[get_db] = override_get_db    # ← 差し替え
    yield TestClient(app)
    app.dependency_overrides.clear()                       # ← 元に戻す
    conn.close()

def test_create_and_get_task(client):
    ...
```

| 書き方 | 意味 |
|---|---|
| `@pytest.fixture` | テストの **準備と後片付け** をまとめた関数。テストの引数に `client` と書くと自動で渡される |
| `tmp_path` | pytest が用意してくれる、テストごとの使い捨てフォルダ |
| `yield` | ここでテストを実行し、終わったら続き（後片付け）を実行する |
| `app.dependency_overrides[get_db] = ...` | 「`get_db` の代わりにこちらを使って」 |

レッスン 9 の `Depends` は、ログインのチェックだけでなく、**テストで部品を差し替えやすくする** ためにも役立っているのです。

このレッスンのテストは、実際に 4 つとも通ることを確認しました。

```text
$ pytest -q
....                                   [100%]
4 passed in 0.27s
```

## 何をテストすべきか

「うまくいく場合」だけでなく、**断るべきものをちゃんと断るか** が大事です。

| 種類 | 例 | 期待 |
|---|---|---|
| 正常 | 正しいデータでタスクを作る | 201 と中身 |
| 検証 | タイトルが空 | 422 |
| 存在しない | `GET /tasks/999` | 404 |
| 認証 | トークン無しで呼ぶ | 401 |
| **認可** | **他人のタスクを取得・削除** | **403 / 404** |
| 境界 | 100 文字ちょうど・101 文字 | 通る・断る |
| 副作用 | 作成したら通知が送られる | 通知の記録が増えている |

特に **認可のテスト**（他人のデータを触れないこと）は、AI のコードで抜けやすく、抜けると被害が大きいので必ず入れてもらいましょう。

## テストの種類

| 種類 | 何を | 速さ |
|---|---|---|
| 単体テスト | 関数 1 つ（計算・変換） | とても速い |
| **API テスト（結合テスト）** | API を呼んで、データベースまで通して確かめる | 速い |
| E2E テスト | 本物のブラウザで画面を操作する（Playwright など） | 遅い |

バックエンドでは **API テストを中心に** 書くと、少ない量で安心感が大きくなります。

## 自動で毎回実行する（CI）

```yaml
# .github/workflows/test.yml
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with: { python-version: "3.12" }
      - run: pip install -r requirements-dev.txt
      - run: pytest
```

push のたびに GitHub Actions でテストを実行し、失敗したら分かるようにする仕組みを **CI**（継続的インテグレーション）と呼びます。fashion_news の解説で「テストを自動で動かす設定が無い」と書いたのは、これのことです。

## JavaScript では

```javascript
import request from "supertest";
import { app } from "./app.js";

test("タスクを作れる", async () => {
  const res = await request(app).post("/tasks").send({ title: "会場を探す" });
  expect(res.status).toBe(201);
});
```

`supertest` が TestClient にあたり、`expect(...).toBe(...)` が `assert ... == ...` にあたります。

```quiz
? `app.dependency_overrides[get_db] = override_get_db` の目的は？
+ テストの間だけ、データベースを使い捨てのものに差し替える
- 本番のデータベースを速くする
- get_db を削除する
> Depends で受け取る部品は、テストで差し替えられます。

? API のテストで特に入れておきたいのは？
- 正しいデータで作れることだけ
+ 他人のデータを取得・削除できないこと（認可）も
- 画面のデザインの確認
> 断るべきものを断れるかのテストは、セキュリティの守りになります。

? `@pytest.fixture` の中の `yield` の役割は？
+ そこでテストを実行し、終わったら後片付けを続ける
- 値を 2 回返す
- テストを飛ばす
> 準備 → テスト → 後片付け、を 1 つの関数で書けます。
```
