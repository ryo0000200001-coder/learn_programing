---
title: CSS の基本 ― クラス・ID とボックスモデル
level: 1
minutes: 16
concepts: [dom_ui, reading]
summary: CSS の書き方（セレクタ・プロパティ・値）、class と id の使い分け、すべての要素が「箱」であるボックスモデル。width: 200px が 250px になる理由と box-sizing。
---
## このレッスンのゴール

- CSS の 1 つのルールを「セレクタ・プロパティ・値」に分けて読める
- `class` と `id` の違いと、どちらを使うべきかが分かる
- ボックスモデル（中身・padding・border・margin）を説明でき、`box-sizing: border-box` の意味が分かる

## CSS の形

```css
.note {
  color: blue;
  font-size: 18px;
}
```

| 部分 | 意味 |
|---|---|
| `.note` | **セレクタ**：どの要素に（class が note の要素に） |
| `color` | **プロパティ**：何を（文字の色を） |
| `blue` | **値**：どうする（青に） |
| `{ ... }` | 1 つのルールのまとまり。`;` で区切って複数書ける |

Python で言うと、`{"color": "blue", "font-size": "18px"}` という辞書を、セレクタに合う要素全部に当てはめるイメージです。

### CSS を書く 3 つの場所

| 場所 | 例 | 使いどころ |
|---|---|---|
| 別のファイル | `<link rel="stylesheet" href="style.css">` | **ふつうはこれ**。このサイトも `site/style.css` |
| `<style>` タグ | `<head>` の中に `<style> ... </style>` | 1 ページだけの小さな例 |
| `style` 属性 | `<p style="color: red">` | その要素だけ。増えると直すのが大変 |

## class と id

```html
<p class="note">メモ 1</p>
<p class="note important">メモ 2</p>
<p id="intro">はじめに</p>
```

```css
.note { color: blue; }         /* . で class */
.important { font-weight: bold; }
#intro { font-size: 20px; }     /* # で id */
```

| | class | id |
|---|---|---|
| CSS での書き方 | `.note` | `#intro` |
| ページの中に | **何個あってもよい** | **1 つだけ** |
| 1 つの要素に | スペース区切りで複数付けられる（`note important`） | 1 つ |
| 主な使い道 | **見た目**（CSS） | ページ内リンク（`href="#intro"`）、JavaScript で 1 つを探す（`getElementById`） |

**見た目には class を使う** のが基本です。id は強すぎる（次のレッスン）ので、CSS ではあまり使いません。

## よく使うプロパティ

| プロパティ | 例 | 意味 |
|---|---|---|
| `color` | `#333`、`rgb(51, 51, 51)` | 文字の色（コンピュータの基礎コースの 16 進数） |
| `background` | `#f5f5f5` | 背景 |
| `font-size` | `16px`、`1.2rem` | 文字の大きさ（単位はレッスン 6） |
| `font-weight` | `bold`、`700` | 文字の太さ |
| `text-align` | `center` | 文字の左右のそろえ |
| `width` / `height` | `200px`、`50%` | 幅・高さ |
| `display` | `block`、`inline`、`flex`、`grid`、`none` | 並び方（`none` は非表示） |

### block と inline

| | block | inline |
|---|---|---|
| 例 | `div`・`p`・`h1`・`ul`・`section` | `span`・`a`・`strong`・`img` |
| 並び方 | **縦に積まれる**（横幅いっぱいを使う） | **文の中で横に流れる** |
| width・height | 効く | 効かない（`img` は例外） |

## ボックスモデル：すべての要素は箱

どの要素も、内側から **中身 → padding（内側の余白）→ border（枠線）→ margin（外側の余白）** の 4 層の箱になっています。

```text
┌───────────── margin（外側の余白。隣の箱との距離）────────────┐
│  ┏━━━━━━━━━━━ border（枠線）━━━━━━━━━━━━┓                    │
│  ┃  ┌──────── padding（内側の余白）──┐   ┃                    │
│  ┃  │         中身（width）          │   ┃                    │
│  ┃  └───────────────────────────────┘   ┃                    │
│  ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛                    │
└──────────────────────────────────────────────────────────────┘
```

```css
.box1 {
  width: 200px;
  padding: 20px;
  border: 5px solid;
  margin: 10px;
}
```

ブラウザで実際の幅を測ると、**250px** になりました。

```text
200（中身）＋ 20 × 2（左右の padding）＋ 5 × 2（左右の border）＝ 250px
```

`width` は **中身の幅だけ** を指していて、padding と border は外に足されるからです（margin は箱の外の余白なので、幅には入りません）。

### box-sizing: border-box

```css
.box2 {
  width: 200px;
  padding: 20px;
  border: 5px solid;
  box-sizing: border-box;   /* width に padding と border も含める */
}
```

こちらは測ると **200px** でした。`border-box` にすると、`width: 200px` が「枠線まで含めて 200px」の意味になり、padding を変えても全体の幅が変わりません。
直感に合うので、多くのサイトが最初にこう書いています（Tailwind CSS なども最初からこの設定です）。

```css
*, *::before, *::after { box-sizing: border-box; }
```

### 余白の書き方

```css
padding: 10px;               /* 上下左右すべて 10px */
padding: 10px 20px;          /* 上下 10px、左右 20px */
padding: 10px 20px 5px 0;    /* 上 右 下 左（時計回り） */
margin: 0 auto;              /* 上下 0、左右は自動 → 幅のある block 要素を横の中央に */
padding-top: 10px;           /* 1 方向だけ */
```

## AI のコードではこう出てくる

| 見かけたら | 読み方・チェック |
|---|---|
| `* { margin: 0; padding: 0; box-sizing: border-box; }` | ブラウザの初期の余白を消し、幅の計算を分かりやすくする「リセット」。よくある書き出し |
| `#header { ... }` が CSS にたくさん | ⚠️ id は強すぎて上書きしにくい。class に |
| `style="..."` があちこちに | ⚠️ 直すときに探しにくい。class にまとめる |
| `display: none` | 非表示。画面からも読み上げからも消える |
| `width: 100%` ＋ `padding` で、はみ出して横スクロールが出る | `box-sizing: border-box` が無いと、100% ＋ padding になる |

```quiz
? `.note { color: blue; }` の `.note` は何？
+ class が note の要素を選ぶセレクタ
- id が note の要素を選ぶセレクタ
- note というタグ
> `.` は class、`#` は id です。セレクタは「どの要素に当てはめるか」を決めます。

? `width: 200px; padding: 20px; border: 5px solid;`（box-sizing の指定なし）の要素の、見た目の幅は？
- 200px
- 220px
+ 250px
> 初期設定では width は中身だけの幅なので、左右の padding（40px）と border（10px）が足されて 250px になります。

? ページの中に何個あってもよく、見た目を付けるのに向いているのは？
- id
+ class
- name
> id はページに 1 つだけの名前です。見た目には、いくつでも使い回せる class を使います。
```
