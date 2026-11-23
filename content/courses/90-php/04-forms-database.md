---
title: フォームとデータベース ― $_POST・PDO・htmlspecialchars
level: 2
minutes: 22
concepts: [http_api, database, security, backend]
summary: 1 ファイルで動くメモ帳のアプリを読む。$_GET・$_POST、PDO の prepare と ?、htmlspecialchars でのエスケープ、POST の後のリダイレクト。同じアプリを危ない書き方にしたものに攻撃を送り、パスワードが漏れ、HTML が実行されるのを確かめる。
---
## このレッスンのゴール

- `$_GET`・`$_POST`・`$_SERVER['REQUEST_METHOD']` を読める
- PDO の `prepare` と `?` で SQL インジェクションを防ぐ書き方が分かる
- `htmlspecialchars` で XSS を防ぐ理由を、実際の結果で説明できる

## 1 ファイルのメモ帳

PHP は、**1 つのファイルが 1 つのページ** になる作りが基本です。メモを書いて一覧にするアプリです。

```php
<?php
declare(strict_types=1);

$pdo = new PDO('sqlite:' . __DIR__ . '/memo.db');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$pdo->exec('CREATE TABLE IF NOT EXISTS memos (id INTEGER PRIMARY KEY, body TEXT NOT NULL)');

$error = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $body = trim($_POST['body'] ?? '');
    if ($body === '' || mb_strlen($body) > 200) {
        $error = 'メモは 1〜200 文字で入力してください';
    } else {
        $stmt = $pdo->prepare('INSERT INTO memos (body) VALUES (?)');
        $stmt->execute([$body]);
        header('Location: /');
        exit;
    }
}

$q = $_GET['q'] ?? '';
$stmt = $pdo->prepare('SELECT id, body FROM memos WHERE body LIKE ? ORDER BY id DESC');
$stmt->execute(['%' . $q . '%']);
$memos = $stmt->fetchAll(PDO::FETCH_ASSOC);

function h(string $s): string {
    return htmlspecialchars($s, ENT_QUOTES, 'UTF-8');
}
?>
<!doctype html>
<html lang="ja">
<head><meta charset="utf-8"><title>メモ</title></head>
<body>
  <h1>メモ</h1>
  <?php if ($error): ?>
    <p class="error"><?= h($error) ?></p>
  <?php endif; ?>
  <form method="post">
    <input name="body">
    <button type="submit">追加</button>
  </form>
  <form method="get"><input name="q" value="<?= h($q) ?>"><button>検索</button></form>
  <ul>
    <?php foreach ($memos as $m): ?>
      <li>#<?= $m['id'] ?> <?= h($m['body']) ?></li>
    <?php endforeach; ?>
  </ul>
</body>
</html>
```

PHP には **開発用のサーバー** が入っているので、`php -S 127.0.0.1:8090` だけで動かせます。このレッスンの結果は、そうして起動して `curl` でリクエストを送ったものです。

## 上半分：処理

### リクエストの中身

| 書き方 | 中身 | FastAPI で言うと |
|---|---|---|
| `$_SERVER['REQUEST_METHOD']` | `GET` / `POST` | `request.method` |
| `$_POST['body']` | フォームの `name="body"` の値（HTML/CSS コースのレッスン 2） | `body: str = Form()` |
| `$_GET['q']` | URL の `?q=...` | `q: str = ""`（クエリ） |
| `$_FILES` / `$_COOKIE` / `$_SESSION` | アップロードされたファイル・Cookie・セッション | |

`$_POST` などは **スーパーグローバル** と呼ばれ、どこからでも読める特別な配列です。値は **すべて文字列**（か配列）で、利用者が自由に作れます（セキュリティのコースのレッスン 1）。

### チェックして保存

```php
$body = trim($_POST['body'] ?? '');
if ($body === '' || mb_strlen($body) > 200) {
    $error = 'メモは 1〜200 文字で入力してください';
}
```

`?? ''` で「無ければ空文字」、`trim` で前後の空白を消し、`mb_strlen`（文字数。レッスン 1）で長さを確かめています。`===` を使っているのもポイントです。

```text
$ curl -X POST -d 'body=' http://127.0.0.1:8090/
...<p class="error">メモは 1〜200 文字で入力してください</p>...
```

### PDO の prepare と ?

```php
$stmt = $pdo->prepare('INSERT INTO memos (body) VALUES (?)');
$stmt->execute([$body]);
```

**PDO** は、PHP の標準のデータベースの道具です（SQLite・MySQL・PostgreSQL を同じ書き方で使える）。`prepare` で SQL の形を決め、`execute` で `?` に値をはめ込みます。Python の `conn.execute("... VALUES (?)", (body,))` とまったく同じ考え方で、**SQL インジェクションを防ぎます**（セキュリティのコースのレッスン 3）。

`:body` のように名前を付けて、`execute(['body' => $body])` と書くこともあります。

### POST の後はリダイレクト

```php
header('Location: /');
exit;
```

```text
$ curl -X POST -d 'body=牛乳を買う' http://127.0.0.1:8090/
302 -> http://127.0.0.1:8090/
```

保存に成功したら、**302 で一覧のページに移動させています**（PRG パターン：Post → Redirect → Get）。こうしないと、ブラウザで再読み込みしたときに「フォームを再送信しますか？」と出て、同じメモが 2 回保存されてしまいます。
`exit;` を忘れると、移動の指示を出した後も下の処理が続くので、必ずセットで書きます。

## 下半分：HTML

```php
<?php foreach ($memos as $m): ?>
  <li>#<?= $m['id'] ?> <?= h($m['body']) ?></li>
<?php endforeach; ?>
```

`foreach (...):` と `endforeach;` は、HTML の中で使いやすい書き方です（`if ...:` と `endif;` も同じ）。`<?= ... ?>` は echo の短い書き方です。

### htmlspecialchars

```php
function h(string $s): string {
    return htmlspecialchars($s, ENT_QUOTES, 'UTF-8');
}
```

`<`・`>`・`&`・`"`・`'` を、文字参照（`&lt;` など）に変えるエスケープです（セキュリティのコースのレッスン 4）。毎回書くと長いので、`h()` という短い名前の関数にするのが PHP の昔からの定番です。

メモに HTML を書いて保存してみました。

```text
$ curl -X POST --data-urlencode 'body=<img src=x onerror=alert(1)>' http://127.0.0.1:8090/
$ curl http://127.0.0.1:8090/
<li>#2 &lt;img src=x onerror=alert(1)&gt;</li>
<li>#1 牛乳を買う</li>
```

`<img ...>` が **文字として** 表示され、実行されません。

## 危ない書き方と比べる

同じアプリを、AI が書きがちな **危ない形** にしてみました（説明のため、ユーザーとパスワードの表も同じデータベースに置いています）。

```php
<?php
$pdo = new PDO('sqlite:' . __DIR__ . '/memo.db');
...
if (isset($_POST['body'])) {
    $pdo->exec("INSERT INTO memos (body) VALUES ('" . $_POST['body'] . "')");   // ⚠️ 文字列をつなげて SQL
}
$q = $_GET['q'] ?? '';
$rows = $pdo->query("SELECT id, body FROM memos WHERE body LIKE '%$q%'")->fetchAll();   // ⚠️
foreach ($rows as $m) { echo "<li>#{$m['id']} {$m['body']}</li>\n"; }                 // ⚠️ エスケープ無し
```

### XSS

```text
<li>#1 牛乳を買う</li>
<li>#2 <img src=x onerror=alert(1)></li>      ← HTML のまま出ている。ブラウザで開くと実行される
```

### SQL インジェクション

検索の欄に `' UNION SELECT name, password FROM users --` を入れました。

```text
<li>#1 牛乳を買う</li>
<li>#2 <img src=x onerror=alert(1)></li>
<li>#admin s3cret</li>                          ← ユーザー名とパスワードが表示された
```

安全な方に同じ検索を送ると、**0 件** でした（「`' UNION ...` という文字を含むメモ」を探しただけなので）。

| | 安全な書き方 | 危ない書き方 |
|---|---|---|
| SQL | `prepare('... ?')` ＋ `execute([$v])` | `"... '" . $v . "'"` / `"... '%$q%'"` |
| 表示 | `htmlspecialchars` | そのまま `echo` |
| 結果 | 攻撃は文字として扱われる | パスワードが漏れ、HTML が実行される |

PHP は歴史が長いので、**ネット上の古いサンプルや、それを学んだ AI のコードに、危ない書き方がまだ多く残っています**。古い `mysql_query()`（PHP 7 で削除済み）を見かけたら、かなり古いコードです。

## AI のコードではこう出てくる

| 見かけたら | 判定 |
|---|---|
| `$pdo->query("... $var ...")` / `"..." . $_GET[...] . "..."` を SQL に | ⚠️ SQL インジェクション。`prepare` ＋ `?` に |
| `echo $_GET['name'];` / `<?= $row['body'] ?>` | ⚠️ XSS。`htmlspecialchars` を通す |
| `header('Location: ...');` の後に `exit;` が無い | ⚠️ 下の処理が続く |
| `$_POST['price']` をそのまま金額に | ⚠️ 書き換えられる（HTML/CSS コースの hidden の話） |
| パスワードを `md5()` で保存 | ⚠️ `password_hash()` と `password_verify()` を使う（PHP の標準。中は bcrypt） |
| `PDO::ERRMODE_EXCEPTION` | ✅ データベースのエラーを例外にする（無いと失敗に気づけない） |

```quiz
? PHP で、フォームの `<input name="title">` の値を受け取るのは？（method="post"）
+ `$_POST['title']`
- `$_GET['title']`
- `$title`
> POST で送られたフォームの値は `$_POST` に、URL の `?title=...` は `$_GET` に入ります。無いこともあるので `$_POST['title'] ?? ''` と書くのが定番です。

? `$pdo->prepare('SELECT * FROM memos WHERE id = ?')` の後、`execute([$id])` で値を渡す理由は？
- 速くするため
+ SQL の形と値を別々に渡し、値が SQL の命令として解釈されないようにするため
- id を数に変換するため
> プレースホルダで渡すと、`' UNION ...` のような入力もただの文字として扱われます。実際に、危ない書き方ではパスワードが漏れました。

? 保存に成功した後に `header('Location: /'); exit;` とする理由は？
- 保存を確定させるため
+ 一覧のページに移動させ、再読み込みで同じ内容が 2 回送信されるのを防ぐため
- エラーを隠すため
> POST の後にリダイレクトしておけば、再読み込みしても GET の一覧が読み直されるだけです（PRG パターン）。
```
