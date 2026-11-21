---
title: 入力の検証（バリデーション）
level: 2
minutes: 15
concepts: [backend, type_hints, security, errors]
summary: 届いたデータを信用せず、形と中身を確かめてから使う。Pydantic による自動チェックと 422 エラー。
---
## このレッスンのゴール

- 「サーバーは届いたデータを信用しない」理由を説明できる
- Pydantic のモデル（`BaseModel` と `Field`）を読める
- 422 エラーの中身を読める

## 届くデータは何でもあり

フロントエンドの画面からは、決まった形のデータしか送られない…とは限りません。
利用者は開発者ツールや別のプログラムを使って、**どんな JSON でも送れます**。

```json
{"title": "", "due": "来週", "status": "完了したことにしておいて"}
```

これをそのまま保存すると、空のタスク・読めない日付・存在しない状態がデータベースに入り、あとで画面やほかの処理が壊れます。
だからバックエンドは、**使う前に必ず形と中身を確かめます**。これをバリデーション（検証）と呼びます。

## Pydantic：データの「型紙」

```python
from datetime import date
from typing import Literal
from pydantic import BaseModel, Field

class TaskCreate(BaseModel):
    title: str = Field(min_length=1, max_length=100)
    due: date | None = None
    status: Literal["todo", "doing", "done"] = "todo"

@app.post("/tasks", status_code=201)
def create_task(body: TaskCreate):
    new_id = max(tasks) + 1
    task = {"id": new_id, **body.model_dump()}
    tasks[new_id] = task
    return task
```

| 書き方 | 意味 |
|---|---|
| `class TaskCreate(BaseModel)` | 「タスク作成のときに受け付けるデータの形」の定義 |
| `title: str = Field(min_length=1, max_length=100)` | 文字列で、1〜100 文字 |
| `due: date \| None = None` | 日付（`"2027-01-10"` の形）。省略してもよい |
| `status: Literal[...]` | この 3 つのどれかだけ |
| `body: TaskCreate` | 「リクエストのボディを TaskCreate の型紙に当てはめて」 |
| `body.model_dump()` | 検証済みのデータを辞書にする |

関数の中に来た時点で、**`body` は検証に合格したデータだけ** です。だから関数の中で「title は空じゃないか？」と書かなくて済みます。
dataclass（Python コース Lv3）に似ていますが、Pydantic は **実際に中身を確かめて、合わなければ断る** のが違いです。

## 不合格だと 422

```http
POST /tasks
{"title": ""}
```

```json
HTTP/1.1 422 Unprocessable Entity

{
  "detail": [
    {
      "type": "string_too_short",
      "loc": ["body", "title"],
      "msg": "String should have at least 1 character",
      "input": "",
      "ctx": {"min_length": 1}
    }
  ]
}
```

- `loc`：どこがダメか（ボディの title）
- `type` / `msg`：どうダメか（短すぎる）

`"due": "来週"` を送ると、`loc` が `["body", "due"]` のエラーになります（実際に試して確認済み）。
フロントエンドは `loc` を見て、該当する入力欄の下に赤字を出せます。

## 変換もしてくれる

```json
{"title": "看板を発注", "due": "2027-01-10"}
```

文字列の `"2027-01-10"` は、Python の `date(2027, 1, 10)` に **変換されて** `body.due` に入ります。
返すときは、また `"2027-01-10"` という文字列の JSON に戻されます。

## 返す側にも型紙を使う

```python
class UserOut(BaseModel):
    id: int
    name: str

@app.get("/users/{user_id}", response_model=UserOut)
def get_user(user_id: int):
    return users[user_id]      # password_hash などが入っていても…
```

`response_model=UserOut` を付けると、**型紙に無い項目（パスワードのハッシュなど）は自動で取り除かれて** 返ります。
「入ってくるもの」と「出ていくもの」の両方を型紙で決めておくのが、安全な API の基本です。

## 検証の 3 段階

| 段階 | 例 | どこで |
|---|---|---|
| ① 形 | title は文字列、due は日付 | Pydantic |
| ② 範囲 | title は 1〜100 文字、status は 3 つのどれか | Pydantic（`Field`・`Literal`） |
| ③ 業務のルール | 担当者はチームのメンバーか、締め切りは本番の日より前か | 関数の中で自分で書く（データベースを見る必要があることが多い） |

③ で断るときは、`raise HTTPException(status_code=422, detail="...")`（または 400・409）を使います。

## JavaScript / TypeScript では

```typescript
import { z } from "zod";

const TaskCreate = z.object({
  title: z.string().min(1).max(100),
  due: z.string().date().optional(),
  status: z.enum(["todo", "doing", "done"]).default("todo"),
});

const body = TaskCreate.parse(req.body);   // 合わなければ例外
```

TypeScript コースで出てきた **zod** が、Pydantic とほぼ同じ役割です。TypeScript の型は実行時に消えてしまうので、外から届いたデータは zod で確かめます。

```quiz
? フロントエンドで入力チェックをしているのに、サーバーでも検証する理由は？
+ 利用者は画面を通さず、どんなデータでも直接送れるから
- フロントエンドのチェックは遅いから
- 二重にチェックすると速くなるから
> サーバーは届いたデータを信用しない、が鉄則です。

? `status: Literal["todo", "doing", "done"]` に `"完了"` を送ると？
- そのまま保存される
+ 422 エラーで断られる
- "done" に自動で直される
> 決められた 3 つ以外は検証で不合格になります。

? `response_model=UserOut` を付ける主な目的は？
- 処理を速くするため
+ 返してはいけない項目（パスワードのハッシュなど）を自動で取り除くため
- 入力を検証するため
> 出ていくデータの形も型紙で決めておくと、うっかり漏らす事故を防げます。
```
