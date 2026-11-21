---
title: 非同期処理と、裏で動く仕事（ジョブ）
level: 3
minutes: 18
concepts: [async, backend, deploy]
summary: 待ち時間を有効に使う async と、レスポンスのあとで動かす処理・定時に動かす処理・キュー。
---
## このレッスンのゴール

- バックエンドで async が役立つ場面を説明できる
- 「すぐ返して、重い仕事は裏で」という考え方が分かる
- バックグラウンドタスク・ジョブキュー・定時実行（cron）を見分けられる

## バックエンドは「待ち時間」だらけ

1 つのリクエストの中で、サーバーは意外と **待って** ばかりいます。

```text
リクエストが来る
 → データベースに聞く        （待つ 5ms）
 → 外部の API に聞く         （待つ 300ms）
 → 計算する                  （0.1ms）
 → 返す
```

待っている間、何もしないのはもったいないので、**待っている間に別のリクエストの処理を進める** のが async です（Python コース Lv4「デコレータと async/await」）。

```python
import httpx

@app.get("/weather")
async def weather():
    async with httpx.AsyncClient() as client:
        res = await client.get("https://api.example.com/forecast", timeout=10)
    return res.json()
```

- `async def`：途中で待つかもしれない関数
- `await`：ここで待つ。待っている間、サーバーは他のリクエストを処理できる
- `httpx` の `AsyncClient`：`requests` の async 版

### ⚠️ async の落とし穴

```python
@app.get("/slow")
async def slow():
    time.sleep(3)             # ❌ async の中で「待たせない書き方」の待ち → サーバー全体が 3 秒止まる
    requests.get(url)         # ❌ これも同じ
```

`async def` の中で、`time.sleep` や `requests` のような **普通の（同期の）待ち** を使うと、他のリクエストまで止まってしまいます。

FastAPI では、

- `async` 対応のライブラリ（httpx の AsyncClient など）を使うなら → `async def`
- 普通のライブラリ（requests・sqlite3 など）を使うなら → **普通の `def`**（FastAPI が別のスレッドで動かしてくれる）

と使い分けるのが安全です。AI のコードで `async def` の中に `requests.get` を見つけたら、確認ポイントです。

## すぐ返して、重い仕事は裏で

「タスクを作ったら、メンバー全員にメールで知らせる」場合、メールを 10 通送り終わるまで利用者を待たせるのはよくありません。

```python
from fastapi import BackgroundTasks

def send_notification(title: str):
    ...  # メールを送る（数秒かかる）

@app.post("/tasks", status_code=201)
def create_task(body: TaskCreate, background: BackgroundTasks, db = Depends(get_db)):
    task_id = save_task(db, body)
    background.add_task(send_notification, body.title)   # ← レスポンスのあとで実行
    return {"id": task_id, "title": body.title}
```

`BackgroundTasks` は、**レスポンスを返したあとに** 仕事を実行します（レッスン 12 のテストで、通知が実行されることも確認しました）。利用者はすぐに「作成しました」を受け取れます。

ただし、サーバーが再起動すると消えてしまうので、**数秒で終わる・失敗しても困らない仕事** 向けです。

## 大事な仕事はジョブキューへ

「動画の変換」「1 万人へのメール」「決済の後処理」のように、**時間がかかる・絶対に失敗させたくない** 仕事は、**ジョブキュー** を使います。

```text
API サーバー ──「この仕事をお願い」──▶ キュー（行列）──▶ ワーカー（仕事専用のプログラム）
     │                                   （Redis など）          失敗したらやり直す
     └─ すぐに「受け付けました」と返す
```

| 道具 | 言語・環境 |
|---|---|
| Celery、RQ、arq | Python |
| BullMQ | Node.js |
| Cloud Tasks、SQS | クラウドのサービス |

キューを使うと、仕事が多いときは **ワーカーを増やす**、失敗したら **自動でやり直す**、ができます。

## 定時に動かす（cron）

「毎朝 6:30 に」「毎晩 0 時に集計」のように、**時刻を決めて動かす** 仕事もバックエンドの大事な役割です。
fashion_news がまさにこれで、GitHub Actions の `cron: "30 21 * * *"` で動いていました。

| 方法 | 例 |
|---|---|
| サーバーの cron | Linux の `crontab` |
| GitHub Actions の schedule | fashion_news |
| クラウドのスケジューラ | Cloud Scheduler、EventBridge |

## やり直しに強くする（べき等）

裏の仕事は失敗してやり直すことがあるので、**2 回実行されても困らない** ように作るのが大事です（レッスン 3 の「べき等」）。

- fashion_news は「同じタイトルのページが既にあれば作らない」「掲載済み URL を記録する」ことで、2 回動いても二重にならないようにしていました
- 決済などでは、リクエストに **一意の ID（べき等キー）** を付け、「この ID はもう処理済み」なら何もしない、という作りにします

```quiz
? `async def` の API の中で `time.sleep(3)` を呼ぶと？
- その API だけが 3 秒待つ
+ サーバー全体が 3 秒止まり、他のリクエストも待たされる
- エラーになる
> async の中では await asyncio.sleep(3) のように「譲る」待ち方をする必要があります。

? 「タスクを作ったら通知メールを送る」。利用者を待たせない方法は？
+ BackgroundTasks やジョブキューで、レスポンスのあとに送る
- メールを送り終えてからレスポンスを返す
- メールを送らない
> すぐ返して、重い仕事は裏で、が定番です。

? 裏で動く仕事を「2 回実行されても困らない」ように作る理由は？
- 2 回実行すると速くなるから
+ 失敗してやり直すことがあり、二重に処理されると困るから
- 1 回では動かないから
> 二重のメール・二重の決済を防ぐための考え方（べき等）です。
```
