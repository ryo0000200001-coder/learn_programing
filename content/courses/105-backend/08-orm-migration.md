---
title: ORM とマイグレーション
level: 2
minutes: 18
concepts: [database, classes, tooling]
summary: SQL をクラスとメソッドで書ける ORM（SQLAlchemy）と、テーブルの変更を履歴として管理するマイグレーション。
---
## このレッスンのゴール

- ORM が何をしてくれるか、メリットと注意点を説明できる
- SQLAlchemy のモデル定義と `select(...)` を読める
- マイグレーションとは何か、なぜ必要か説明できる

## ORM：表をクラスとして扱う

**ORM**（Object-Relational Mapping）は、データベースの **テーブルをクラス、行をオブジェクト** として扱えるようにする道具です。SQL を直接書く代わりに、Python のコードで操作できます。

| データベース | ORM（Python） |
|---|---|
| テーブル `tasks` | クラス `Task` |
| 1 行 | `Task` のインスタンス |
| 列 `title` | 属性 `task.title` |
| 別のテーブルとのつながり | `task.assignee.name` のようにたどれる |

## モデルの定義（SQLAlchemy 2.0）

```python
from sqlalchemy import String, ForeignKey, select
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, relationship, Session

class Base(DeclarativeBase):
    pass

class User(Base):
    __tablename__ = "users"
    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(50))
    tasks: Mapped[list["Task"]] = relationship(back_populates="assignee")

class Task(Base):
    __tablename__ = "tasks"
    id: Mapped[int] = mapped_column(primary_key=True)
    title: Mapped[str] = mapped_column(String(100))
    status: Mapped[str] = mapped_column(String(10), default="todo")
    assignee_id: Mapped[int | None] = mapped_column(ForeignKey("users.id"))
    assignee: Mapped["User | None"] = relationship(back_populates="tasks")
```

| 書き方 | 意味 |
|---|---|
| `__tablename__ = "tasks"` | このクラスは tasks テーブル |
| `Mapped[int]` | この属性は int（型ヒント） |
| `mapped_column(primary_key=True)` | 主キーの列 |
| `ForeignKey("users.id")` | **外部キー**：users テーブルの id を指す。「このタスクの担当者」 |
| `relationship(...)` | つながった相手を属性としてたどれるようにする |

`User` と `Task` は **1 対多**（1 人のユーザーが、たくさんのタスクを持つ）の関係です。

## 使ってみる

```python
with Session(engine) as session:
    ryo = User(name="Ryo")
    session.add(ryo)
    session.add(Task(title="会場を探す", assignee=ryo))
    session.add(Task(title="チラシを作る", assignee=ryo, status="done"))
    session.commit()

    stmt = select(Task).where(Task.assignee_id == ryo.id, Task.status == "todo")
    for task in session.scalars(stmt):
        print(task.title, task.assignee.name)   # 会場を探す Ryo

    print([t.title for t in ryo.tasks])         # ['会場を探す', 'チラシを作る']
```

裏では SQLAlchemy が SQL を作っています。`print(stmt)` で見ると、こうなっていました。

```sql
SELECT tasks.id, tasks.title, tasks.status, tasks.assignee_id
FROM tasks
WHERE tasks.assignee_id = :assignee_id_1 AND tasks.status = :status_1
```

`:assignee_id_1` はプレースホルダ（レッスン 7 の `?` と同じ）なので、**ORM を使うと SQL インジェクションも自然に防げます**。
`Session` は「データベースとの 1 回分のやりとり」で、`commit()` で確定します（トランザクション）。

## ORM のメリットと注意点

| メリット | 注意点 |
|---|---|
| Python のクラスとして書ける。型ヒントでエディタが補完してくれる | 裏でどんな SQL が出ているか見えにくい |
| PostgreSQL・SQLite などの違いを吸収してくれる | `task.assignee` を何百回もたどると、そのたびに SQL が飛んで遅くなる（**N+1 問題**、レッスン 14） |
| プレースホルダが自動で使われる | 複雑な集計は SQL を直接書いた方が分かりやすいこともある |

**ORM を使っていても、SQL の基本（レッスン 7）を知っていると、遅い・おかしいときに原因が分かります。**

## マイグレーション：テーブルの変更履歴

アプリを作っていると、「タスクに締め切り（due）の列を足したい」のように、**テーブルの形を変えたくなります**。
でも本番のデータベースにはすでにデータが入っているので、作り直すわけにはいきません。

そこで、**テーブルの変更を、順番付きの小さなスクリプトとして残しておく** のがマイグレーションです。Git の「コミット」のデータベース版だと考えると分かりやすいです。

```text
migrations/
├── 0001_create_users_and_tasks.py
├── 0002_add_due_to_tasks.py        ← 新しく足した変更
```

SQLAlchemy では **Alembic** という道具を使います。

```bash
alembic revision --autogenerate -m "add due to tasks"   # モデルとの差分から変更ファイルを作る
alembic upgrade head                                     # まだ当てていない変更を全部当てる
alembic downgrade -1                                     # 1 つ戻す
```

作られるファイルの中身はこんな形です。

```python
def upgrade():
    op.add_column("tasks", sa.Column("due", sa.Date(), nullable=True))

def downgrade():
    op.drop_column("tasks", "due")
```

`upgrade`（進める）と `downgrade`（戻す）がセットになっています。

⚠️ AI に「列を消して」「型を変えて」と頼んだときは、**マイグレーションでデータが消えないか**（`drop_column` など）を必ず確認しましょう。本番で実行する前にバックアップを取るのが鉄則です。

## 他の言語では

| 言語 | ORM | マイグレーション |
|---|---|---|
| Python | SQLAlchemy、Django ORM | Alembic、Django の `makemigrations` |
| TypeScript | Prisma、Drizzle、TypeORM | `prisma migrate` など |
| Ruby | Active Record（Rails） | `rails db:migrate` |
| PHP | Eloquent（Laravel） | `php artisan migrate` |

```quiz
? ORM で `Task` クラスのインスタンス 1 つは、データベースの何にあたる？
- テーブル全体
+ tasks テーブルの 1 行
- 1 つの列
> クラスがテーブル、インスタンスが行、属性が列です。

? `ForeignKey("users.id")` の意味は？
+ この列は users テーブルの id を指している（どのユーザーのものか）
- users テーブルを削除する
- id を自動で振る
> 外部キーで、別のテーブルとのつながりを表します。

? マイグレーションを使う一番の理由は？
- SQL を書かなくて済むから
+ データを残したまま、テーブルの形の変更を順番に・やり直せる形で当てるため
- データベースを速くするため
> テーブルの形の変更履歴を、Git のように管理する仕組みです。
```
