---
title: Tailwind CSS を読む ― class だらけの HTML の正体
level: 3
minutes: 18
concepts: [dom_ui, reading, ai_coding, tooling]
summary: AI が書く画面のコードによく出てくる Tailwind CSS。`px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 md:px-6` を、実際に生成された CSS と見比べて 1 つずつ読む。数字の意味、hover:・md:・dark: の前置き、よくある組み合わせ。
---
## このレッスンのゴール

- Tailwind CSS の class 名が、どんな CSS になるのかを読める
- 数字（`p-4`・`gap-6`）の大きさと、`hover:`・`md:`・`dark:` の意味が分かる
- AI の画面のコードを見て、レイアウト（Flexbox・Grid・レスポンシブ）を説明できる

## AI の画面のコードは、だいたいこうなっている

React などで AI に画面を作ってもらうと、こんなコードがよく出てきます。

```html
<button class="px-4 py-2 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 md:px-6 disabled:opacity-50">
  保存
</button>
```

CSS のファイルはほとんど無く、**class にたくさんの短い名前が並んでいる** のが特徴です。これが **Tailwind CSS** です。
1 つの class が 1 つの小さな CSS に対応していて、それを組み合わせて見た目を作ります（「ユーティリティファースト」と呼びます）。React では `class` の代わりに `className="..."` と書きます。

## 実際に生成された CSS と見比べる

Tailwind は、HTML に出てくる class 名を探して、**使われているものだけの CSS を自動で作ります**。上のボタンの HTML から、実際に Tailwind（v4.3）で CSS を生成してみました。

| class | 生成された CSS | 読み方 |
|---|---|---|
| `px-4` | `padding-inline: calc(var(--spacing) * 4);` | 左右（x）の padding を 4 単位 |
| `py-2` | `padding-block: calc(var(--spacing) * 2);` | 上下（y）の padding を 2 単位 |
| `rounded-lg` | `border-radius: var(--radius-lg);` | 角を丸く（lg ＝ 大きめ） |
| `bg-blue-600` | `background-color: var(--color-blue-600);` | 背景を青の 600 番 |
| `text-white` | `color: var(--color-white);` | 文字を白 |
| `font-bold` | `font-weight: var(--font-weight-bold);` | 太字 |

`var(--spacing)` は CSS の **変数** で、生成された CSS の中で `--spacing: 0.25rem;` と決められていました。

### 数字の読み方

```text
1 単位 = 0.25rem = 4px（ページの基準の文字が 16px のとき）
```

| class | 大きさ |
|---|---|
| `p-1` | 4px |
| `p-2` | 8px |
| `p-4` | 16px |
| `p-6` | 24px |
| `p-8` | 32px |

**数字 × 4px** と覚えれば、だいたい読めます。`gap-4`・`mt-2`・`w-64` なども同じです（`w-64` は 256px）。

| 前の文字 | 意味 | 例 |
|---|---|---|
| `p` / `m` | padding / margin（レッスン 3） | `p-4`、`m-2` |
| `x` / `y` | 左右 / 上下 | `px-4`、`my-8` |
| `t` `r` `b` `l` | 上・右・下・左 | `mt-2`（上の margin）、`pl-4`（左の padding） |
| `w` / `h` | 幅 / 高さ | `w-full`（100%）、`h-screen`（画面の高さ） |

### 色の読み方

`bg-blue-600` の `600` は **色の濃さ** です。`50`（とても薄い）から `950`（とても濃い）まであり、500 前後がふつうの濃さです。

```text
bg-blue-600     → 背景を少し濃い青に
hover:bg-blue-700 → マウスを乗せたら、もう一段濃い青に
text-gray-500   → 文字を中くらいの灰色に（補足の文など）
```

## 前置き（バリアント）：条件付きの指定

`hover:` や `md:` のように、`:` の前に付くものは「**この条件のときだけ**」という意味です。生成された CSS を見ると、よく分かります。

```css
@media (hover: hover) {
  .hover\:bg-blue-700:hover {             /* マウスが乗ったとき */
    background-color: var(--color-blue-700);
  }
}
.disabled\:opacity-50:disabled {          /* ボタンが使えない状態のとき */
  opacity: 50%;
}
@media (width >= 48rem) {                 /* 画面の幅が 768px 以上のとき */
  .md\:px-6 {
    padding-inline: calc(var(--spacing) * 6);
  }
}
@media (prefers-color-scheme: dark) {     /* ダークモードのとき */
  .dark\:text-gray-400 { color: var(--color-gray-400); }
}
```

| 前置き | 条件 | 対応する CSS |
|---|---|---|
| `hover:` | マウスが乗ったとき | `:hover`（レッスン 4 の疑似クラス） |
| `focus:` / `focus-visible:` | 選ばれているとき | `:focus` / `:focus-visible` |
| `disabled:` | 使えない状態のとき | `:disabled` |
| `sm:` `md:` `lg:` `xl:` | 画面の幅が 640・768・1024・1280px **以上** のとき | `@media (min-width: ...)`（レッスン 6） |
| `dark:` | ダークモードのとき | `@media (prefers-color-scheme: dark)`（設定で切り替え方式にもできる） |

⚠️ `md:` は「md **以上**」です。**前置きの無い class がスマホ用、`md:` が広い画面用** という、モバイルファースト（レッスン 6）の読み方をします。

```html
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
```

「ふだん（スマホ）は 1 列、768px 以上なら 3 列、隙間は 24px」と読みます。`md:grid-cols-3` は、生成された CSS では `grid-template-columns: repeat(3, minmax(0, 1fr));` でした（レッスン 5 の `repeat(3, 1fr)` とほぼ同じ）。

## よくある組み合わせ

| class の並び | 読み方 |
|---|---|
| `flex items-center justify-between` | 横に並べて、縦は中央、両端に寄せる（ヘッダーの定番） |
| `flex flex-col gap-4` | 縦に並べて、隙間 16px |
| `grid grid-cols-1 md:grid-cols-3 gap-6` | スマホ 1 列 → 広い画面で 3 列 |
| `max-w-3xl mx-auto p-4` | 最大の幅 48rem（768px）で中央寄せ、周りに 16px の余白 |
| `w-full` | 幅 100% |
| `hidden md:block` | スマホでは非表示、広い画面で表示 |
| `text-sm text-gray-500` | 小さめの灰色の文字（補足・日付など） |
| `rounded-lg shadow-md border` | 角丸・影・枠線（カード） |
| `fixed inset-0 bg-black/50` | 画面全体を覆う半透明の黒（モーダルの背景）。`/50` は透明度 50% |

## よいところと注意点

| よいところ | 注意点 |
|---|---|
| CSS のファイルと HTML を行き来しなくてよい | class が長くなり、HTML が読みにくい |
| 名前を考えなくてよい（`.card-header-title` など） | 同じ組み合わせをコピーすると、直すとき全部直す必要がある（React なら部品にまとめる） |
| 使った分だけの小さな CSS になる | class 名を文字列でつなげて作ると、Tailwind が見つけられない（下） |
| 余白や色の値がそろう（4px 単位など） | Tailwind の書き方を知らないと読めない |

### ⚠️ class 名を組み立てると効かない

```javascript
// ⚠️ Tailwind は「bg-red-600」という文字をソースから探せない
const cls = `bg-${color}-600`;

// ✅ 完全な名前を書いておく
const cls = color === "red" ? "bg-red-600" : "bg-blue-600";
```

Tailwind は、**ソースコードに完全な形で書かれた class 名** を探して CSS を作ります。文字列をつなげて作った名前は見つけられないので、その CSS が生成されず、見た目が付きません。AI のコードで「色が付かない」ときの定番の原因です。

## Python で言うと

Tailwind そのものは Python と関係ありませんが、Python で Web アプリを作るときも、テンプレート（Jinja2・Django）の HTML に同じように Tailwind の class を書きます。

```html
<!-- Jinja2 のテンプレート -->
{% for item in items %}
  <li class="flex justify-between py-2 border-b">
    <span>{{ item.name }}</span><span class="text-gray-500">{{ item.price }} 円</span>
  </li>
{% endfor %}
```

## AI のコードではこう出てくる

| 見かけたら | チェック |
|---|---|
| `className="..."` に 10 個以上の class | 前置きの無いもの（スマホ）→ `md:`（広い画面）→ `hover:` などの状態、と分けて読む |
| `` `text-${size}` `` のような組み立て | ⚠️ 生成されない。完全な名前に |
| `focus:outline-none` だけ | ⚠️ キーボードで選んだ場所が見えなくなる。`focus-visible:ring-2` などの代わりがあるか |
| `!p-4`（先頭に `!`） | `!important` 付き（レッスン 4）。v4 では末尾に `p-4!` と書く |
| `tailwind.config.js` | Tailwind v3 までの設定ファイル。v4 は CSS の中（`@theme`）で設定する |

```quiz
? Tailwind の `px-4` が表すのは？（基準の文字の大きさは 16px）
+ 左右の padding を 16px
- 上下の padding を 4px
- 幅を 4px
> x は左右、数字は × 4px なので 16px です。生成された CSS も `padding-inline: calc(var(--spacing) * 4)`（--spacing は 0.25rem）でした。

? `<div class="grid grid-cols-1 md:grid-cols-3">` の、画面の幅 375px（スマホ）での見た目は？
- 3 列
+ 1 列
- 何も表示されない
> 前置きの無い class がスマホを含むすべての幅、`md:` は 768px 以上のときだけです。375px では 1 列になります。

? React で `` className={`bg-${color}-500`} `` と書いたら、色が付かなかった。理由は？
- React では Tailwind が使えないから
+ Tailwind はソースに完全な形で書かれた class 名だけを探して CSS を作るので、組み立てた名前の CSS が生成されないから
- `bg-` は背景ではないから
> `bg-red-500` のように、完全な名前がソースのどこかに書かれている必要があります。条件で完全な名前を選ぶように書き換えます。
```
