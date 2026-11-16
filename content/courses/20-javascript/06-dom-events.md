---
title: DOM とイベント
level: 2
minutes: 15
concepts: [dom_ui, higher_order]
summary: JavaScript で Web ページを動かす仕組み。
---
## このレッスンのゴール

- DOM が「HTML を JavaScript から操作するための木構造」だと説明できる
- 要素を探す → 変える → イベントで反応する、の流れを読める

## DOM とは

ブラウザは HTML を読み込むと、それを **木の形のデータ（DOM）** に変換します。
JavaScript はこの DOM を通して、ページの文字や見た目を書き換えます。

```html
<button id="like">いいね</button>
<p id="count">0</p>
```

## 3 ステップ：探す → 変える → 反応する

```javascript
// ① 探す
const button = document.querySelector("#like");   // CSS セレクタで 1 つ探す
const countEl = document.getElementById("count");

// ③ 反応する
let count = 0;
button.addEventListener("click", () => {
  count++;
  // ② 変える
  countEl.textContent = count;
  button.classList.add("liked");
});
```

| よく使うもの | 意味 |
|---|---|
| `querySelector(".a")` / `querySelectorAll` | CSS セレクタで要素を探す（1 つ / 全部） |
| `textContent` | 中の文字 |
| `innerHTML` | 中の HTML（⚠️ ユーザー入力を入れると危険） |
| `classList.add / remove / toggle` | CSS クラスの付け外し |
| `value` | 入力欄の値 |
| `createElement` / `append` | 要素を作って追加 |

## イベントの種類

`click`、`input`（入力のたび）、`change`、`submit`（フォーム送信）、`keydown`、`DOMContentLoaded`（ページ読み込み完了）など。

```javascript
form.addEventListener("submit", (event) => {
  event.preventDefault();   // ページの再読み込み（標準動作）を止める
  ...
});
```

`event.preventDefault()` はフォームの処理でほぼ必ず見る 1 行です。

## ⚠️ セキュリティ：innerHTML

```javascript
el.innerHTML = userInput;    // 危険：<script> などが実行されうる（XSS）
el.textContent = userInput;  // 安全：ただの文字として表示
```

AI のコードでユーザー入力を `innerHTML` に入れていたら要注意です。

## React などのフレームワーク

実際の開発では、DOM を直接操作せず React・Vue などを使うことが多いです。
それでも「状態が変わる → 画面が書き換わる」「イベントでコールバックが呼ばれる」という考え方は同じです。

```quiz
? `document.querySelector(".item")` は何を返す？
+ class="item" の最初の要素
- class="item" の全要素
- id="item" の要素
> 全部ほしいときは querySelectorAll です。

? ユーザーの入力をページに表示するとき、安全なのは？
+ textContent
- innerHTML
> innerHTML は HTML として解釈されるため XSS の危険があります。

? フォームの submit イベントで `event.preventDefault()` を呼ぶ理由は？
+ ページの再読み込みを止めて、JavaScript で処理するため
- フォームを空にするため
- 二重送信を自動で防ぐため
> 標準ではページが再読み込みされてしまいます。
```
