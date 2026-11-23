---
title: Flexbox と Grid ― 並べ方のレイアウト
level: 2
minutes: 20
concepts: [dom_ui, collections]
summary: 1 列に並べる Flexbox と、縦横のマス目に並べる Grid。flex: 1・justify-content・align-items・gap・fr・repeat(auto-fill, minmax()) を、ブラウザで測った幅で読む。
---
## このレッスンのゴール

- Flexbox の「主軸と交差軸」を説明し、`justify-content`・`align-items`・`flex: 1` を読める
- Grid の `grid-template-columns`・`fr`・`gap` を読める
- Flexbox と Grid のどちらを使う場面かを判断できる

## Flexbox：1 列に並べる

```css
.row {
  display: flex;      /* 子どもを横に並べる */
  gap: 10px;          /* 子どものあいだの隙間 */
  width: 600px;
}
.grow { flex: 1; }    /* 残りの幅を全部もらう */
```

```html
<div class="row">
  <div style="width: 100px">1</div>
  <div class="grow">2</div>
  <div style="width: 100px">3</div>
</div>
```

ブラウザで測った幅は、**100px・380px・100px** でした。

```text
600（全体）− 100 − 100（固定の 2 つ）− 10 × 2（隙間 2 か所）＝ 380px ← flex: 1 の要素がもらった
```

`display: flex` を付けるのは **親** で、並べられるのは **すぐ下の子ども** です。

### 主軸と交差軸

| | 意味 | 初期値 | そろえるプロパティ |
|---|---|---|---|
| **主軸** | 並ぶ方向 | 横（左 → 右） | `justify-content` |
| **交差軸** | 主軸と直角の方向 | 縦 | `align-items` |

`flex-direction: column` にすると、主軸が縦になり、`justify-content` が縦方向、`align-items` が横方向のそろえになります（ここで混乱しやすい）。

| `justify-content` | 並び方 |
|---|---|
| `flex-start`（初期値） | 先頭に詰める |
| `center` | 中央に集める |
| `flex-end` | 末尾に詰める |
| `space-between` | 両端に寄せて、残りを均等に間に |

| `align-items` | 交差軸のそろえ |
|---|---|
| `stretch`（初期値） | 高さいっぱいに伸ばす |
| `center` | 中央 |
| `flex-start` / `flex-end` | 上／下 |

### 定番：上下左右の中央

```css
.center {
  display: flex;
  justify-content: center;   /* 横の中央 */
  align-items: center;       /* 縦の中央 */
  height: 100px;
}
```

幅 300px・高さ 100px の箱で測ると、中の文字の **左右の余白が同じ（134px ずつ）、上下も同じ（40px ずつ）** で、ちょうど真ん中になっていました。昔の CSS では難しかった「縦の中央」が、2 行で書けます。

### よく使うその他の指定

| プロパティ | 意味 |
|---|---|
| `flex-wrap: wrap` | 入りきらないと次の行へ折り返す |
| `flex: 1` | 残りの場所を分け合う（`flex: 2` の要素は 2 倍もらう） |
| `flex-shrink: 0` | 縮ませない（アイコンなどがつぶれないように） |
| `gap` | 子どものあいだの隙間（margin を個別に付けるより簡単） |

## Grid：縦横のマス目に並べる

```css
.grid {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;   /* 3 列。真ん中だけ 2 倍 */
  gap: 10px;
  width: 420px;
}
```

測った幅は **100px・200px・100px** でした。

```text
420 − 10 × 2（隙間）＝ 400px を、1 : 2 : 1 に分ける → 100・200・100
```

`fr` は「残りの場所の **取り分**（fraction）」という単位です。

| 書き方 | 意味 |
|---|---|
| `grid-template-columns: 200px 1fr` | 左は 200px 固定、右は残り全部（サイドバーと本文） |
| `repeat(3, 1fr)` | `1fr 1fr 1fr` と同じ |
| `grid-template-rows` | 行の高さ |
| `grid-column: span 2` | 子どもの側で「2 列分使う」 |

### 定番：画面の幅に合わせて列の数が変わるカード

```css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
}
```

| 部分 | 意味 |
|---|---|
| `minmax(150px, 1fr)` | 1 列は **最低 150px**、余ったら均等に広げる |
| `repeat(auto-fill, ...)` | 入るだけの数の列を作る |

カード 5 枚で試すと、**画面の幅 800px では 1 行に 4 枚、375px（スマホ）では 2 枚** になりました。メディアクエリ（次のレッスン）を書かなくても、列の数が自動で変わります。

このサイトの `site/style.css` にも、まったく同じ形があります。コースやレッスンのカードの一覧です。

```css
.cards { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 12px; }
```

## どちらを使う？

| | Flexbox | Grid |
|---|---|---|
| 得意 | **1 方向**（横 1 列・縦 1 列）に並べる | **縦と横の両方** をそろえる |
| 例 | ナビゲーションのメニュー、ボタンを横に並べる、中央寄せ、カードの中身 | ページ全体の枠組み、カードの一覧、表のようなレイアウト |
| 決め方 | 中身の大きさに合わせて並べたい | 先にマス目を決めて、そこにはめたい |

迷ったら、**1 列なら Flexbox、マス目なら Grid**。1 つのページの中で両方を組み合わせるのが普通です（ページの枠は Grid、ヘッダーの中は Flexbox など）。

## 他の言語・フレームワークでは

Python で画面を作る道具や、スマホアプリの画面の作り方にも、同じ考え方が出てきます。

| | 横に並べる | 縦に並べる |
|---|---|---|
| CSS | `display: flex` | `flex-direction: column` |
| Tailwind CSS（レッスン 7） | `flex` | `flex flex-col` |
| SwiftUI（iPhone） | `HStack` | `VStack` |
| Jetpack Compose（Android） | `Row` | `Column` |
| Flutter | `Row` | `Column` |

## AI のコードではこう出てくる

| 見かけたら | 読み方 |
|---|---|
| `display: flex; justify-content: space-between; align-items: center;` | ヘッダーの定番。左にロゴ、右にメニュー、縦は中央 |
| `display: flex; flex-direction: column; gap: 1rem;` | 縦に並べて隙間をそろえる（フォームなど） |
| `grid-template-columns: repeat(auto-fill, minmax(250px, 1fr))` | 幅に合わせて列の数が変わるカード一覧 |
| `min-height: 100vh; display: flex; flex-direction: column;` ＋ `main { flex: 1 }` | 中身が少なくてもフッターを画面の下に置く |
| `float: left` / `clearfix` | 古いレイアウトの方法。今は Flexbox か Grid |

```quiz
? 幅 600px の `display: flex; gap: 10px;` の中に、100px・`flex: 1`・100px の 3 つがある。`flex: 1` の要素の幅は？
- 400px
+ 380px
- 200px
> 600 から固定の 200 と、隙間 2 か所の 20 を引いた 380px が残り、flex: 1 の要素がそれをもらいます（ブラウザで測った値）。

? Flexbox で、横に並んだ子どもを **縦方向に** 中央にそろえるのは？（flex-direction は初期値）
- `justify-content: center`
+ `align-items: center`
- `text-align: center`
> 初期値では主軸が横なので、justify-content は横、align-items は縦（交差軸）のそろえです。

? `grid-template-columns: 1fr 2fr 1fr; gap: 10px; width: 420px;` の真ん中の列の幅は？
- 210px
+ 200px
- 140px
> 隙間 20px を引いた 400px を 1:2:1 に分けるので、真ん中は 200px です。
```
