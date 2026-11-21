---
title: ORM でテーブルの関係を読む ― relationship と N+1
level: 4
minutes: 20
concepts: [database, classes, performance]
summary: SQLAlchemy の ForeignKey・relationship・back_populates が、外部キーと 1 対多をどう表しているか。user.posts の裏で走る SQL と、N+1 を selectinload で直す方法。Prisma との対応も。
---
## このレッスンのゴール

- ORM のモデル定義を読んで、テーブルと関係（1 対多・多対多）を図にできる
- `user.posts` のような書き方の裏で、いつ SQL が実行されるか説明できる
- N+1 問題を見つけ、`selectinload` などで直す方法が分かる

バックエンドコースのレッスン 8（ORM とマイグレーション）の続きで、**テーブルどうしの関係** に注目します。

## モデルを読む

```python
from sqlalchemy import ForeignKey, String
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, relationship

class Base(DeclarativeBase):
    pass

class User(Base):
    __tablename__ = "users"
    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(50))
    posts: Mapped[list["Post"]] = relationship(back_populates="author", cascade="all, delete-orphan")

class Post(Base):
    __tablename__ = "posts"
    id: Mapped[int] = mapped_column(primary_key=True)
    title: Mapped[str] = mapped_column(String(200))
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id"))
    author: Mapped["User"] = relationship(back_populates="posts")
```

| コード | テーブルでの意味 |
|---|---|
| `__tablename__ = "posts"` | テーブル名 |
| `mapped_column(primary_key=True)` | 主キー（レッスン 1） |
| `ForeignKey("users.id")` | **外部キー**。`posts.user_id` は `users.id` を指す（レッスン 2） |
| `relationship(...)` | **テーブルの列ではない**。Python から相手をたどるための通り道 |
| `Mapped[list["Post"]]` | 相手が **たくさん**（1 対多の「1」の側） |
| `Mapped["User"]` | 相手が **1 つ**（1 対多の「多」の側） |
| `back_populates="author"` | 反対側の relationship の名前。`post.author` と `user.posts` がつながる |
| `cascade="all, delete-orphan"` | ユーザーを消したら投稿も消す（Python 側の `ON DELETE CASCADE`） |

図にすると、レッスン 2 と同じ形です。

```text
User (users)            Post (posts)
id                 ←──  user_id   （ForeignKey：実際の列）
posts ─────────────────→ author   （relationship：たどる道。列ではない）
```

**外部キーの列（`user_id`）は「多」の側にだけある** こと、**relationship は両側にある** ことが読み取れれば OK です。

## 関係をたどる

```python
from sqlalchemy import select
from sqlalchemy.orm import Session

with Session(engine) as s:
    p = s.get(Post, 1)
    print(p.title, "by", p.author.name)          # post1-0 by user1

    posts = s.scalars(
        select(Post).join(Post.author).where(User.name == "user2")
    ).all()                                      # user2 の投稿
```

`p.author` と書くだけで、裏で `SELECT ... FROM users WHERE users.id = ?` が実行されます。SQL を書かなくてよいのが ORM の便利なところですが、**いつ SQL が走っているか見えにくい** のが弱点です。

## N+1：知らないうちに SQL が大量に

ユーザー 5 人（それぞれ投稿 3 件）で試しました。実行された SQL の数を数えています。

```python
with Session(engine) as s:
    for u in s.scalars(select(User)):       # ① ユーザー一覧：SQL 1 回
        print(u.name, len(u.posts))         # ② 1 人ごとに投稿を取る：SQL 1 回 × 5 人
# 実行された SQL：6 回
```

`u.posts` に **初めて触ったときに** 、その人の投稿を取る SQL が走ります（**遅延読み込み**、lazy loading）。
ユーザーが 1000 人なら 1001 回。これが **N+1 問題**（1 回 ＋ N 人分）です。バックエンドコースのレッスン 14 で、速さの問題の代表として見ました。

### 直し方：最初にまとめて取る

```python
from sqlalchemy.orm import selectinload

with Session(engine) as s:
    for u in s.scalars(select(User).options(selectinload(User.posts))):
        len(u.posts)
# 実行された SQL：2 回（ユーザー一覧 1 回 ＋ 全員の投稿をまとめて 1 回）
```

| 書き方 | SQL | 向いている場面 |
|---|---|---|
| 何も指定しない（遅延読み込み） | 1 ＋ N 回 | 相手をたまにしか使わない |
| `selectinload(User.posts)` | 2 回（`WHERE user_id IN (1, 2, …)`） | 1 対多の「たくさん」の側を取る（定番） |
| `joinedload(Post.author)` | 1 回（JOIN） | 1 対多の「1」の側を取る |

（SQLAlchemy 2.1 で、実行した SQL の数を数えて確認しました）

SQL を見たいときは、`create_engine(..., echo=True)` にすると、実行されたすべての SQL が画面に出ます。**「ループの中で relationship に触っていないか」** を探すのが、N+1 を見つけるコツです。

## 多対多の書き方

```python
from sqlalchemy import Column, Table

post_tags = Table(                                   # 中間テーブル（レッスン 2）
    "post_tags", Base.metadata,
    Column("post_id", ForeignKey("posts.id"), primary_key=True),
    Column("tag_id", ForeignKey("tags.id"), primary_key=True),
)

class Tag(Base):
    __tablename__ = "tags"
    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(unique=True)
    posts: Mapped[list["Post"]] = relationship(secondary=post_tags, back_populates="tags")

# Post の側にも：
#   tags: Mapped[list["Tag"]] = relationship(secondary=post_tags, back_populates="posts")
```

`secondary=post_tags` が「中間テーブルを通ってつながる」という意味です。`post.tags.append(tag)` と書くと、ORM が `post_tags` に行を足してくれます。

## 他の ORM では

JavaScript / TypeScript でよく使われる **Prisma** では、同じ関係をこう書きます。

```prisma
model User {
  id    Int    @id @default(autoincrement())
  name  String
  posts Post[]                                  // relationship（たくさん）
}

model Post {
  id     Int    @id @default(autoincrement())
  title  String
  userId Int                                    // 外部キーの列
  author User   @relation(fields: [userId], references: [id])   // relationship（1 つ）
}
```

```typescript
const users = await prisma.user.findMany({ include: { posts: true } });   // まとめて取る（N+1 を防ぐ）
```

| | SQLAlchemy（Python） | Prisma（TypeScript） | Django（Python） |
|---|---|---|---|
| 外部キー | `ForeignKey("users.id")` | `@relation(fields: [userId], ...)` | `models.ForeignKey(User, ...)` |
| たくさんの側 | `Mapped[list["Post"]]` | `Post[]` | `user.post_set`（自動で作られる） |
| まとめて取る | `selectinload` / `joinedload` | `include` | `prefetch_related` / `select_related` |

書き方は違いますが、**外部キーの列・たどる道・まとめて取る指定** の 3 つを探せば、どの ORM でも同じように読めます。

## AI のコードではこう出てくる

| 見かけたら | チェック |
|---|---|
| `for x in ...:` の中で `x.posts`・`x.author` に触っている | ⚠️ N+1。`selectinload` / `joinedload` / `include` があるか |
| `relationship` はあるが `ForeignKey` が無い | ⚠️ ORM がどの列でつなぐか分からずエラーになる |
| `back_populates` の名前が反対側と合っていない | ⚠️ 起動時にエラー。両側の名前を確認 |
| `cascade="all, delete-orphan"` | 親を消すと子も消える。本当にそれでよいか（レッスン 2 の ON DELETE と同じ判断） |
| API で一覧を返すときに、関係するデータも全部入れて返す | ⚠️ データが多いと遅く重くなる。必要な分だけ・ページ分けを |

```quiz
? SQLAlchemy の `relationship(...)` について正しいのは？
- テーブルに新しい列を作る
+ 列ではなく、Python から相手のオブジェクトをたどるための通り道
- 外部キーの代わりなので、ForeignKey は不要になる
> 実際の列は `ForeignKey` を付けた `user_id` だけです。relationship は、`user.posts` のようにたどるための仕組みです。

? ユーザー 100 人の一覧を表示し、ループの中で `len(u.posts)` を表示した。遅延読み込みのままだと、SQL は何回くらい実行される？
- 1 回
- 2 回
+ 101 回
> 一覧の 1 回に加えて、1 人ごとに投稿を取る SQL が 100 回走ります。これが N+1 問題です。

? 上の N+1 を直す方法として適切なのは？
+ `select(User).options(selectinload(User.posts))` で、投稿をまとめて取っておく
- ループを `while` に書き換える
- `len()` の代わりに `count()` を使う
> selectinload を指定すると、全員の投稿を 1 回の SQL（`WHERE user_id IN (...)`）でまとめて取るので、合計 2 回で済みます。
```
