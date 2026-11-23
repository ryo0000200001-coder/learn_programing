---
title: WordPress と Laravel のコードを読む
level: 3
minutes: 20
concepts: [reading, backend, security, ai_coding]
summary: PHP で出会うことが多い 2 つの世界。WordPress のテーマ（ループ・テンプレートタグ・フック・esc_html）と、Laravel（ルーティング・コントローラー・Eloquent・Blade・バリデーション）。どこを見ればよいかと、セキュリティの確認ポイント。
---
## このレッスンのゴール

- WordPress のテーマのファイルを読み、「ループ」「テンプレートタグ」「フック」が分かる
- Laravel のルート・コントローラー・モデル・ビューのつながりを説明できる
- どちらのコードでも、エスケープ・SQL・権限の確認ポイントが分かる

このレッスンのコードは、WordPress と Laravel の書き方の説明のための抜粋です（WordPress 本体や Laravel のアプリをここでは動かしていません）。

## WordPress

**WordPress** は、ブログや会社のサイトを作るための仕組み（CMS）で、世界の Web サイトのとても大きな割合で使われています。管理画面で記事を書き、**テーマ**（見た目）と **プラグイン**（機能）を PHP で作ります。

### テーマのファイル

```text
wp-content/themes/my-theme/
├── style.css          テーマの名前などの情報 ＋ CSS
├── functions.php      テーマの設定・機能の追加（フック）
├── index.php          記事一覧（どれにも当てはまらないときの最後の砦）
├── single.php         記事 1 つのページ
├── page.php           固定ページ
├── header.php         共通の頭の部分
└── footer.php         共通の終わりの部分
```

URL によって、WordPress が **どのファイルを使うかを自動で選びます**（テンプレート階層）。記事のページなら `single.php`、無ければ `index.php`、のような順番です。

### ループ

```php
<?php get_header(); ?>

<main>
  <?php if ( have_posts() ) : ?>
    <?php while ( have_posts() ) : the_post(); ?>
      <article>
        <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
        <p class="date"><?php echo get_the_date(); ?></p>
        <?php the_excerpt(); ?>
      </article>
    <?php endwhile; ?>
  <?php else : ?>
    <p>記事がありません。</p>
  <?php endif; ?>
</main>

<?php get_footer(); ?>
```

| 部分 | 意味 |
|---|---|
| `get_header()` / `get_footer()` | header.php / footer.php を読み込む |
| `have_posts()` | 表示する記事がまだあるか |
| `the_post()` | 次の記事を「今の記事」にする |
| `the_title()` / `the_permalink()` / `the_excerpt()` | 今の記事のタイトル・URL・抜粋を **表示する** |
| `get_the_date()` | 今の記事の日付を **返す**（表示はしない） |

この `while ( have_posts() ) : the_post();` を **ループ** と呼びます。Python で言うと `for post in posts:` で、`the_post()` が「次の 1 件を取り出す」役です。

⚠️ WordPress の関数には、**`the_` で始まるものは表示する（echo する）、`get_` で始まるものは値を返す** という決まりがあります。`echo the_title();` は二重になり、`get_the_title();` だけでは何も表示されません。

### functions.php とフック

```php
<?php
// テーマの機能を有効にする
add_action( 'after_setup_theme', function () {
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
} );

// CSS と JavaScript を読み込む
add_action( 'wp_enqueue_scripts', function () {
    wp_enqueue_style( 'my-theme', get_stylesheet_uri(), [], '1.0' );
} );

// 抜粋の長さを変える
add_filter( 'excerpt_length', fn( $length ) => 40 );
```

| 書き方 | 意味 |
|---|---|
| `add_action( 'きっかけ', 関数 )` | 「このタイミングで、この関数も実行して」（**アクションフック**） |
| `add_filter( 'きっかけ', 関数 )` | 「この値を出す前に、この関数で加工して」（**フィルターフック**）。関数は値を受け取って返す |

WordPress の本体には「ここでフックを呼ぶ」場所がたくさん用意されていて、テーマやプラグインは **本体を書き換えずに、フックで動きを足したり変えたり** します。JavaScript の `addEventListener`（JavaScript コースのレッスン 6）と似た考え方です。

### WordPress のエスケープ

```php
<h2><?php echo esc_html( $title ); ?></h2>
<a href="<?php echo esc_url( $link ); ?>">リンク</a>
<input value="<?php echo esc_attr( $value ); ?>">
```

| 関数 | 使う場所 |
|---|---|
| `esc_html()` | HTML の中の文字 |
| `esc_attr()` | 属性の値（`value="..."` など） |
| `esc_url()` | URL（`javascript:` で始まる危ない URL も取り除く） |
| `wp_kses_post()` | 記事の本文のように、一部の HTML を許したいとき（サニタイズ） |

レッスン 4 の `htmlspecialchars` の、**場所ごとの WordPress 版** です。`the_title()` などのテンプレートタグは中で処理してくれますが、自分で `get_` した値や、`$_GET` などを表示するときは、必ずこれらを通します。

### データベースと権限

```php
global $wpdb;
$rows = $wpdb->get_results(
    $wpdb->prepare( "SELECT * FROM {$wpdb->prefix}orders WHERE user_id = %d", $user_id )
);

if ( ! current_user_can( 'edit_posts' ) ) {
    wp_die( '権限がありません' );
}
check_admin_referer( 'my_action' );   // フォームの CSRF トークン（nonce）を確かめる
```

| 書き方 | 意味 |
|---|---|
| `$wpdb->prepare( "... %d", $v )` | WordPress 版のプレースホルダ（`%d` 数、`%s` 文字列） |
| `current_user_can( '権限' )` | ログイン中の人に、その権限があるか（認可） |
| `wp_nonce_field()` / `check_admin_referer()` | **nonce**（使い捨てのトークン）で CSRF を防ぐ（セキュリティのコースのレッスン 5） |

WordPress のプラグインの脆弱性の多くは、**このどれかを忘れたもの** です。

## Laravel

**Laravel** は、PHP でいちばん人気の Web アプリのフレームワークです。Python の Django や、FastAPI ＋ SQLAlchemy に近い位置づけです。

### つながり

```text
routes/web.php            URL → どのコントローラーのどのメソッドか
app/Http/Controllers/     リクエストを受けて、処理して、返す
app/Models/               データベースのテーブル（Eloquent ORM）
resources/views/          HTML のテンプレート（Blade）
database/migrations/      テーブルの変更履歴（マイグレーション）
```

### ルート

```php
// routes/web.php
use App\Http\Controllers\TaskController;

Route::get('/tasks', [TaskController::class, 'index']);
Route::post('/tasks', [TaskController::class, 'store'])->middleware('auth');
```

「GET /tasks に来たら TaskController の index」。`->middleware('auth')` は **ログインしている人だけ**（FastAPI の `Depends(get_current_user)`）。

### コントローラー

```php
// app/Http/Controllers/TaskController.php
namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function index()
    {
        $tasks = Task::where('user_id', auth()->id())->orderBy('created_at', 'desc')->get();
        return view('tasks.index', ['tasks' => $tasks]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:200',
        ]);
        $request->user()->tasks()->create($validated);
        return redirect('/tasks');
    }
}
```

| 部分 | 意味 | Python で言うと |
|---|---|---|
| `Task::where('user_id', auth()->id())` | ログイン中の人のタスクだけ（**認可**。IDOR を防ぐ） | `select(Task).where(Task.user_id == user.id)` |
| `->orderBy(...)->get()` | 並べ替えて取得（Eloquent。中ではプレースホルダの SQL） | SQLAlchemy |
| `$request->validate([...])` | **バリデーション**。失敗したら自動でフォームに戻り、エラーを表示 | Pydantic |
| `'required\|string\|max:200'` | 必須・文字列・200 文字まで | `title: str = Field(max_length=200)` |
| `->create($validated)` | **チェック済みの値だけ** で作る（マスアサインメント対策） | |
| `return redirect('/tasks')` | レッスン 4 の PRG パターン | |

### モデルとマスアサインメント

```php
class Task extends Model
{
    protected $fillable = ['title'];   // create() で入れてよい項目
}
```

`$fillable` は **「外から一括で入れてよい項目の許可リスト」** です。`Task::create($request->all())` と書いても、`user_id` や `is_admin` は入りません（セキュリティのコースのレッスン 5 のマスアサインメント対策が、フレームワークに組み込まれている）。⚠️ `protected $guarded = [];`（何でも入れてよい）と書かれていたら要注意です。

### Blade のテンプレート

```blade
{{-- resources/views/tasks/index.blade.php --}}
<ul>
  @foreach ($tasks as $task)
    <li>{{ $task->title }}</li>
  @endforeach
</ul>

<form method="POST" action="/tasks">
  @csrf
  <input name="title" value="{{ old('title') }}">
  @error('title') <p>{{ $message }}</p> @enderror
  <button>追加</button>
</form>
```

| 書き方 | 意味 |
|---|---|
| `{{ $x }}` | **自動でエスケープして** 表示（`htmlspecialchars` を自動で） |
| `{!! $x !!}` | ⚠️ エスケープ **しない**（React の `dangerouslySetInnerHTML` と同じ危険） |
| `@foreach` / `@if` | 繰り返し・条件 |
| `@csrf` | CSRF のトークンをフォームに入れる（無いと 419 エラー） |
| `old('title')` | バリデーションで戻ってきたとき、入力した値を残す |

## AI のコードではこう出てくる

| 見かけたら | チェック |
|---|---|
| WordPress で `echo $_GET['s'];` / `echo get_the_title();` をそのまま | ⚠️ `esc_html()` を通す |
| `$wpdb->query( "... $id ..." )` | ⚠️ `$wpdb->prepare()` に |
| WordPress の管理画面の処理に `current_user_can` や nonce の確認が無い | ⚠️ 権限・CSRF |
| Laravel の `{!! ... !!}` | ⚠️ 中身が外から来るならエスケープかサニタイズ |
| `Task::find($id)` だけで、持ち主を確かめていない | ⚠️ IDOR。`where('user_id', ...)` か Policy（Laravel の認可の仕組み） |
| `$guarded = []` / `$request->all()` をそのまま `create` | ⚠️ マスアサインメント |
| `DB::raw("... $var ...")` / `whereRaw("... $var")` | ⚠️ 生の SQL。`?` と配列で値を渡す |

```quiz
? WordPress で `the_title()` と `get_the_title()` の違いは？
+ `the_title()` は表示し、`get_the_title()` は値を返す
- 同じもの
- `get_the_title()` は管理画面でしか使えない
> WordPress では、the_ で始まる関数は表示、get_ で始まる関数は値を返す、という決まりがあります。

? WordPress の `add_filter( 'excerpt_length', fn( $length ) => 40 );` は何をしている？
- 抜粋を 40 個表示する
+ 抜粋の長さを決める値を、本体を書き換えずに 40 に変える
- 40 文字以上の記事を消す
> フィルターフックは「値を出す前に加工する」仕組みです。本体を直接書き換えずに動きを変えられます。

? Laravel の Blade で `{{ $title }}` と `{!! $title !!}` の違いは？
- 同じ
+ `{{ }}` は自動でエスケープし、`{!! !!}` はエスケープしない（外からの値なら XSS の危険）
- `{!! !!}` のほうが安全
> `{{ }}` は htmlspecialchars を自動で通します。`{!! !!}` は HTML をそのまま出すので、中身が信頼できるときだけ使います。
```
