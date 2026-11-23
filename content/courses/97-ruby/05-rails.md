---
title: Rails のコードを読む ― 規約と ActiveRecord
level: 3
minutes: 20
concepts: [backend, database, reading, security]
summary: Ruby on Rails の「規約で決まっている」作り。routes.rb の resources、コントローラーと before_action、ActiveRecord のモデル（has_many・validates・where・find）、Strong Parameters、ERB のビュー、マイグレーション。N+1 と includes、セキュリティの確認ポイント。
---
## このレッスンのゴール

- Rails のフォルダと「規約」（名前で自動でつながる仕組み）が分かる
- ActiveRecord のモデルとクエリ（`where`・`find`・`has_many`・`validates`）を読める
- Strong Parameters・`includes`（N+1）・エスケープなど、確認ポイントが分かる

このレッスンのコードは、Rails の書き方の説明のための抜粋です（Rails のアプリをここでは動かしていません）。書き方は Rails 7〜8 の形です。

## Rails の考え方：設定より規約

**Ruby on Rails** は、「**決まった名前と場所に置けば、設定を書かなくても自動でつながる**」（Convention over Configuration）という考え方のフレームワークです。

```text
app/
├── models/task.rb                 Task モデル    ↔ tasks テーブル（複数形）
├── controllers/tasks_controller.rb TasksController（複数形）
└── views/tasks/index.html.erb      TasksController の index の画面
config/routes.rb                    URL → コントローラー
db/migrate/2026..._create_tasks.rb  テーブルの変更履歴
```

**Task（単数）というモデルは、tasks（複数）というテーブルと自動でつながる**、のように、名前のルールで全部が結びついています。最初は「どこで設定しているのか分からない」と感じますが、**規約を知っていれば、どのファイルを見ればよいかがすぐ分かる** のが Rails の強みです。

## ルート

```ruby
# config/routes.rb
Rails.application.routes.draw do
  resources :tasks, only: [:index, :show, :create, :destroy]
end
```

`resources :tasks` の 1 行で、こんな対応が作られます。

| HTTP | URL | コントローラーのメソッド |
|---|---|---|
| GET | `/tasks` | `index`（一覧） |
| GET | `/tasks/:id` | `show`（1 件） |
| POST | `/tasks` | `create`（作る） |
| DELETE | `/tasks/:id` | `destroy`（消す） |

（`only:` を外すと、new・edit・update も足した 7 つが作られます）バックエンドコースのレッスン 4 の REST の形が、そのまま規約になっています。`:tasks` はレッスン 3 のシンボルです。

## モデル：ActiveRecord

```ruby
# app/models/task.rb
class Task < ApplicationRecord
  belongs_to :user
  validates :title, presence: true, length: { maximum: 200 }
  scope :undone, -> { where(done: false) }
end

# app/models/user.rb
class User < ApplicationRecord
  has_many :tasks, dependent: :destroy
end
```

| 書き方 | 意味 | データベース設計のコースでは |
|---|---|---|
| `class Task < ApplicationRecord` | tasks テーブルのモデル。列は書かなくても、テーブルから自動で読む | |
| `belongs_to :user` | タスクは 1 人のユーザーに属する（`tasks.user_id`） | 1 対多の「多」の側 |
| `has_many :tasks` | ユーザーはたくさんのタスクを持つ | 1 対多の「1」の側 |
| `dependent: :destroy` | ユーザーを消したら、タスクも消す | `ON DELETE CASCADE` |
| `validates :title, presence: true, length: { maximum: 200 }` | 必須・200 文字まで | 制約・バリデーション |
| `scope :undone, -> { where(done: false) }` | よく使う絞り込みに名前を付ける（レッスン 2 のラムダ） | |

`validates :title, presence: true, ...` は、レッスン 1 の「かっこの省略」とレッスン 3 の「シンボルとキーワード引数」で、`validates(:title, presence: true, length: { maximum: 200 })` というメソッドの呼び出しです。英語の文のように読めるのは、この組み合わせのおかげです。

### クエリ

```ruby
Task.where(user_id: current_user.id, done: false).order(created_at: :desc).limit(20)
current_user.tasks.undone
Task.find(params[:id])                   # 見つからなければ例外 → 404
Task.find_by(title: "牛乳")              # 見つからなければ nil
task.update!(done: true)                 # 失敗したら例外（! の意味。レッスン 1）
```

| ActiveRecord | SQL |
|---|---|
| `Task.where(done: false)` | `SELECT * FROM tasks WHERE done = FALSE` |
| `.order(created_at: :desc)` | `ORDER BY created_at DESC` |
| `.limit(20)` | `LIMIT 20` |
| `current_user.tasks` | `WHERE user_id = ?`（has_many から） |
| `Task.find(5)` | `WHERE id = 5 LIMIT 1` |

値はプレースホルダで渡されるので安全です（SQL コース・セキュリティのコース）。⚠️ ただし、文字列で条件を書くと危険です。

```ruby
Task.where("title = '#{params[:q]}'")      # ⚠️ SQL インジェクション
Task.where("title = ?", params[:q])        # ✅ ? で渡す
Task.where(title: params[:q])              # ✅ ハッシュで渡す
```

### N+1 と includes

```ruby
# ⚠️ ユーザー 100 人なら、SQL が 101 回
User.all.each { |u| puts u.tasks.count }

# ✅ まとめて読み込む
User.includes(:tasks).each { |u| puts u.tasks.size }
```

データベース設計のコースのレッスン 6 の **N+1** は、Rails でもそのまま起きます。`includes(:tasks)` は、SQLAlchemy の `selectinload`、Prisma の `include` に当たります。

## コントローラー

```ruby
# app/controllers/tasks_controller.rb
class TasksController < ApplicationController
  before_action :authenticate_user!
  before_action :set_task, only: [:show, :destroy]

  def index
    @tasks = current_user.tasks.order(created_at: :desc)
  end

  def show
  end

  def create
    @task = current_user.tasks.build(task_params)
    if @task.save
      redirect_to @task, notice: "追加しました"
    else
      render :new, status: :unprocessable_entity
    end
  end

  def destroy
    @task.destroy
    redirect_to tasks_path
  end

  private

  def set_task
    @task = current_user.tasks.find(params[:id])
  end

  def task_params
    params.require(:task).permit(:title)
  end
end
```

| 部分 | 意味 |
|---|---|
| `before_action :authenticate_user!` | どのメソッドの前にも、ログインしているか確かめる（Devise というライブラリ） |
| `before_action :set_task, only: [...]` | show と destroy の前に set_task を呼ぶ |
| `@tasks = ...` | **`@` の変数は、そのままビュー（画面）で使える**（規約） |
| `def show` が空 | 何も書かなくても、`views/tasks/show.html.erb` が自動で表示される（規約） |
| `current_user.tasks.find(params[:id])` | ✅ **自分のタスクの中から** 探す。他人の id なら見つからず 404（IDOR 対策） |
| `params.require(:task).permit(:title)` | **Strong Parameters**：受け取ってよいのは title だけ |
| `redirect_to` / `render` | PRG パターン（PHP コースのレッスン 4）／失敗したらフォームをもう一度 |

### Strong Parameters

`params.require(:task).permit(:title)` は、**「送られてきたパラメータのうち、task の title だけを通す」** という許可リストです。`user_id` や `admin` を勝手に送られても無視されます。セキュリティのコースの **マスアサインメント** の対策が、フレームワークの決まりになっています（Laravel の `$fillable`、Spring の DTO と同じ役目）。

## ビュー：ERB

```erb
<%# app/views/tasks/index.html.erb %>
<h1>タスク</h1>
<ul>
  <% @tasks.each do |task| %>
    <li><%= link_to task.title, task %></li>
  <% end %>
</ul>
```

| 書き方 | 意味 |
|---|---|
| `<% ... %>` | Ruby を実行する（表示しない） |
| `<%= ... %>` | 実行して **表示する**（**自動でエスケープ** される） |
| `<%== ... %>` / `raw(...)` / `.html_safe` | ⚠️ エスケープ **しない** |
| `link_to task.title, task` | `<a href="/tasks/5">タイトル</a>` を作る（規約で URL が決まる） |

Rails は、`<%= %>` で表示するものを **自動でエスケープ** します（XSS 対策。Laravel の `{{ }}` と同じ）。危ないのは `raw` や `html_safe` を使ったところです。フォームを作る `form_with` は、CSRF のトークンも自動で入れてくれます。

## マイグレーション

```ruby
# db/migrate/20261123000000_create_tasks.rb
class CreateTasks < ActiveRecord::Migration[8.0]
  def change
    create_table :tasks do |t|
      t.references :user, null: false, foreign_key: true
      t.string :title, null: false, limit: 200
      t.boolean :done, null: false, default: false
      t.timestamps
    end
  end
end
```

`create_table :tasks do |t| ... end` は、レッスン 2 の **ブロック** です。`t.references :user` は `user_id` の列と外部キーとインデックスを、`t.timestamps` は `created_at`・`updated_at` を作ります。`bin/rails db:migrate` で実行します（バックエンドコースのレッスン 8）。

## AI のコードではこう出てくる

| 見かけたら | チェック |
|---|---|
| `Task.find(params[:id])`（current_user を通していない） | ⚠️ IDOR。`current_user.tasks.find(...)` か、権限の確認（Pundit などのライブラリ） |
| `params.permit!` / `Task.create(params[:task])` | ⚠️ 何でも通す。マスアサインメント |
| `where("... #{params[:x]} ...")` | ⚠️ SQL インジェクション |
| `<%= raw @comment.body %>` / `.html_safe` | ⚠️ XSS。中身が外から来るなら `sanitize` |
| ループの中で `task.user.name` | ⚠️ N+1。`includes(:user)` |
| `skip_before_action :verify_authenticity_token` | ⚠️ CSRF の確認を外している（API なら別の認証があるか） |
| `bin/rails db:migrate` / `bin/rails console` | マイグレーションの実行／アプリの中で Ruby を試す画面 |

```quiz
? Rails で `class Task < ApplicationRecord` と書くと、どのテーブルとつながる？
- task
+ tasks（モデル名の複数形）
- Task
> Rails は規約で、単数のモデル名と複数のテーブル名を自動で結びつけます。

? `params.require(:task).permit(:title)` の目的は？
+ 送られてきたパラメータのうち、title だけを受け取るようにする（マスアサインメント対策）
- title を必須にする
- title を JSON に変換する
> Strong Parameters は受け取ってよい項目の許可リストです。user_id などを勝手に送られても無視されます。

? `current_user.tasks.find(params[:id])` と `Task.find(params[:id])` の違いは？
- 同じ
+ 前者は自分のタスクの中からだけ探すので、他人のタスクの id を指定されても見つからない
- 前者のほうが SQL インジェクションに弱い
> 自分のタスクの中から探すことで、URL の id を変えて他人のデータを見られる IDOR を防いでいます。
```
