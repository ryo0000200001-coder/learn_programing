---
title: フォームとボタン ― 入力を受け取る
level: 1
minutes: 15
concepts: [dom_ui, http_api, security]
summary: form・input・label・button の読み方。name 属性がサーバーに届く名前になること、button の初期値は「送信」であること、ブラウザのチェックだけでは守れないこと。
---
## このレッスンのゴール

- フォームの部品（`form`・`input`・`label`・`button`）を読み、送信したときに何が届くか説明できる
- `name` 属性と `id` 属性の違いが分かる
- `<button>` が初期設定で「送信ボタン」になる落とし穴と、`required` などのチェックの限界が分かる

## フォームの基本

```html
<form action="/signup" method="post">
  <label for="email">メールアドレス</label>
  <input id="email" name="email" type="email" required>

  <label for="age">年齢</label>
  <input id="age" name="age" type="number" min="0" max="120">

  <label>
    <input name="news" type="checkbox" value="yes"> お知らせを受け取る
  </label>

  <button type="submit">登録</button>
</form>
```

| 部分 | 意味 |
|---|---|
| `<form action="/signup" method="post">` | 送信ボタンを押すと、`/signup` に POST で送る（バックエンドコースの「HTTP」） |
| `name="email"` | **サーバーに届くときの名前**。`email=ryo@example.com` の形で送られる |
| `id="email"` | ページの中での名前。`<label for="email">` と結び付けるのに使う |
| `type="email"` | 入力の種類。スマホではメール用のキーボードが出る |
| `required` | 空のままでは送信させない |
| `min` / `max` | 数値の範囲 |

送信すると、サーバーにはこんな内容が届きます（バックエンドコースの「HTTP」のボディ）。

```text
email=ryo%40example.com&age=30&news=yes
```

`@` が `%40` になっているのは、URL の中で特別な意味を持つ記号を、別の書き方にしているためです。チェックを外したチェックボックスは、**何も送られません**。

FastAPI で受け取るなら、`name` と同じ名前の引数で受け取ります。

```python
@app.post("/signup")
def signup(email: str = Form(), age: int | None = Form(None), news: str | None = Form(None)):
    ...
```

⚠️ `name` を付け忘れると、その入力は **送信されません**。画面には出ているのにサーバーに届かない、というよくある原因です。

## input の種類

| `type` | 見た目・動き |
|---|---|
| `text` | 1 行の文字（初期値） |
| `email` / `url` / `tel` | 形のチェック・スマホのキーボードが変わる |
| `password` | 入力が `●●●` で隠れる |
| `number` | 数値。上下の矢印 |
| `date` / `time` | カレンダーなどで選べる |
| `checkbox` | 複数選べる四角 |
| `radio` | 1 つだけ選べる丸（同じ `name` のものから 1 つ） |
| `file` | ファイルを選ぶ（`<form enctype="multipart/form-data">` が必要） |
| `hidden` | 画面に出ないが送信される値 |

複数行の文字は `<textarea>`、選択肢は `<select>` と `<option>` を使います。

## label：何の入力欄かを結び付ける

```html
<label for="email">メールアドレス</label>
<input id="email" ...>
```

`for` と `id` が同じだと、**文字をクリックしても入力欄が選ばれ**、読み上げソフトが「メールアドレス、入力欄」と読んでくれます。入力欄の中に薄く出る `placeholder="例: ryo@example.com"` は、入力を始めると消えるので、**ラベルの代わりにはなりません**。

## button の落とし穴

```html
<form>
  <input name="q">
  <button>検索</button>             <!-- type を書かないと submit（送信）になる -->
  <button type="button">クリア</button>   <!-- 送信しない、ただのボタン -->
</form>
```

**フォームの中の `<button>` は、`type` を書かないと送信ボタン** になります。「クリア」のつもりのボタンを押したらページが再読み込みされた、というのはよくあるバグです。

JavaScript で送信を自分で処理するときは、こう書きます。

```javascript
form.addEventListener("submit", (event) => {
  event.preventDefault();          // ブラウザの普通の送信（ページの移動）を止める
  const data = new FormData(form); // name ごとの値を取り出す
  fetch("/api/signup", { method: "POST", body: data });
});
```

React などの AI のコードで `e.preventDefault()` をよく見るのは、このためです。

### クリックできるものは button か a に

```html
<div onclick="save()">保存</div>              <!-- ⚠️ -->
<button type="button" onclick="save()">保存</button>  <!-- ✅ -->
```

`<div>` は、マウスではクリックできても、**キーボード（Tab キーと Enter）では操作できません**。「押すと何かが起きる」ものは `<button>`、「別のページへ移る」ものは `<a href>` にします。

## ブラウザのチェックは「親切」であって「守り」ではない

`required`・`type="email"`・`min`・`maxlength` は、利用者がうっかり間違えるのを防ぐ **親切** です。
でも、ブラウザの開発者ツールで HTML を書き換えたり、フォームを使わずに直接リクエストを送ったりすれば、**簡単に飛ばせます**（セキュリティのコースのレッスン 1）。

```text
ブラウザのチェック（required・type）  → 使いやすさのため
サーバーのチェック（バリデーション）   → 守るため。必ず必要
```

`type="hidden"` の値も、利用者が自由に書き換えられます。`<input type="hidden" name="price" value="1980">` のように、**値段などをフォームから受け取ってはいけません**。

## AI のコードではこう出てくる

| 見かけたら | チェック |
|---|---|
| `<input>` に `name` が無い | ⚠️ 普通のフォーム送信では届かない（JavaScript で値を集めているなら別） |
| `<input>` に `<label>` が無く、`placeholder` だけ | ⚠️ 入力を始めると何の欄か分からなくなる |
| フォームの中の `<button>` に `type` が無い | クリアなどのボタンなら `type="button"` が必要 |
| `<div onclick>` / `<span onclick>` | ⚠️ キーボードで押せない。`<button>` に |
| `type="hidden" name="price"` / `name="is_admin"` | ⚠️ 書き換えられる。サーバー側で決める |
| `method="get"` でパスワードを送る | ⚠️ URL に入って履歴やログに残る。`post` に |

```quiz
? `<input id="mail" name="email">` を送信したとき、サーバーに届く名前は？
- `mail`
+ `email`
- `input`
> サーバーに届くのは `name` の値です。`id` はページの中で label と結び付けたり、CSS や JavaScript から探したりするための名前です。

? フォームの中に `<button>リセット</button>` と書いたら、押すたびにページが再読み込みされた。原因は？
+ type を書かない button は送信ボタンになるから
- button はフォームの中に書けないから
- リセットという文字が特別な意味を持つから
> 送信しないボタンには `type="button"` を書きます。

? `<input type="number" min="1" max="10" required>` があるので、サーバーでの数値チェックは不要？
- 不要。ブラウザが 1〜10 以外を送らせない
+ 必要。ブラウザのチェックは開発者ツールや直接のリクエストで飛ばせる
- required があるときだけ不要
> ブラウザのチェックは使いやすさのためのものです。守るためのチェックはサーバーで行います。
```
