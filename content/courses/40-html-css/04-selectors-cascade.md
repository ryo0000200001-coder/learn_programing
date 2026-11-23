---
title: セレクタとカスケード ― どの指定が勝つのか
level: 2
minutes: 18
concepts: [dom_ui, reading]
summary: 子孫・子・疑似クラスなどのセレクタと、同じ要素に複数のルールが当たったときの勝ち負け（詳細度・後勝ち・!important・インライン）、継承。「CSS が効かない」の原因を順番に探せるようになる。
---
## このレッスンのゴール

- よく使うセレクタ（子孫・子・複数・疑似クラス）を読める
- 同じ要素に複数のルールが当たったとき、どれが勝つかを「詳細度」で説明できる
- 「CSS が効かない」ときに、疑う順番が分かる

## よく使うセレクタ

| セレクタ | 例 | 選ぶもの |
|---|---|---|
| タグ | `p` | すべての `<p>` |
| class | `.note` | class に note を含む要素 |
| id | `#intro` | id が intro の要素 |
| 組み合わせ（スペース無し） | `p.note` | `<p>` で、かつ class が note |
| **子孫**（スペース） | `.card p` | `.card` の **中のどこか** にある `<p>` |
| **子**（`>`） | `.menu > li` | `.menu` の **すぐ下** の `<li>`（孫は含まない） |
| 複数（`,`） | `h1, h2` | `h1` と `h2` の両方 |
| 属性 | `input[type="email"]` | type が email の input |
| すべて | `*` | すべての要素 |

### 疑似クラス：状態で選ぶ

| セレクタ | 選ぶもの |
|---|---|
| `a:hover` | マウスが乗っているリンク |
| `button:focus-visible` | キーボードで選ばれているボタン |
| `input:disabled` | 使えない状態の入力欄 |
| `li:first-child` / `li:last-child` | 最初／最後の `<li>` |
| `li:nth-child(2n)` | 偶数番目の `<li>`（表のしま模様など） |
| `p:not(.note)` | class が note **ではない** `<p>` |

`::before` / `::after`（コロン 2 つ）は **疑似要素** と呼び、要素の前後に飾りを足します（`content: "★"` など）。

JavaScript の `document.querySelector(".card p")` も、**同じセレクタの書き方** です。CSS のセレクタが読めれば、JavaScript で要素を探すコードも読めます。

## カスケード：ルールがぶつかったら

1 つの要素に、色を指定するルールが何個も当たることがあります。

```css
p        { color: black; }
.note    { color: blue; }
p.note   { color: purple; }
#first   { color: red; }
.card p  { color: green; }
```

```html
<p id="a">a</p>
<p class="note" id="b">b</p>
<p class="note" id="first">c</p>
<div class="card"><p class="note" id="d">d</p></div>
```

ブラウザで実際の色を調べた結果です。

| 要素 | 当たるルール | 結果 |
|---|---|---|
| a | `p` だけ | 黒 |
| b | `p`・`.note`・`p.note` | **紫**（`p.note`） |
| c | `p`・`.note`・`p.note`・`#first` | **赤**（`#first`） |
| d | `p`・`.note`・`p.note`・`.card p` | **紫**（`p.note`。`.card p` と同点で、後に書かれた方） |

この勝ち負けを決める仕組みを **カスケード** と呼びます。

### 詳細度：セレクタの強さ

セレクタの強さ（**詳細度**）は、次の 3 つの数を数えて、**左の桁から** 比べます。

| 数えるもの | 例 |
|---|---|
| ① id の数 | `#first` |
| ② class・属性・疑似クラスの数 | `.note`、`[type="email"]`、`:hover` |
| ③ タグ・疑似要素の数 | `p`、`::before` |

| セレクタ | 詳細度（①, ②, ③） |
|---|---|
| `p` | 0, 0, 1 |
| `.note` | 0, 1, 0 |
| `p.note` | 0, 1, 1 |
| `.card p` | 0, 1, 1 |
| `#first` | 1, 0, 0 |

- `.note`（0,1,0）は `p`（0,0,1）より強い：② の桁で勝つ
- `#first`（1,0,0）は、class をいくつ重ねても勝てない：① の桁で勝つ
- `p.note` と `.card p` は同点（0,1,1）→ **後に書いた方が勝つ**（上の例では `.card p` が先、`p.note` が後なので紫）

### もっと強いもの

```html
<p class="note imp" style="color: pink">e</p>
```

```css
.imp { color: orange !important; }
```

結果は **オレンジ** でした。

| 強さ（弱い → 強い） | |
|---|---|
| ふつうのルール（詳細度 → 後勝ち） | |
| `style="..."`（インラインスタイル） | どのセレクタより強い |
| `!important` | インラインスタイルよりも強い |

⚠️ `!important` は「とにかく勝たせる」ための非常手段です。使うと、あとでそれを上書きするためにまた `!important` が必要になり、**どんどん直しにくく** なります。AI が「効かないので `!important` を付けました」と言ってきたら、本当の原因（詳細度か順番）を探しましょう。

## 継承：親から引き継ぐもの

```css
.parent { color: teal; font-size: 20px; border: 1px solid; }
```

```html
<div class="parent">
  <span>子の span</span>
  <a href="#">リンク</a>
</div>
```

ブラウザで調べると、`span` は **teal（青緑）** になりましたが、`border` は付きませんでした。`a` はブラウザの初期のリンクの色（青）のままでした。

| 引き継がれる（継承する） | 引き継がれない |
|---|---|
| `color`・`font-size`・`font-family`・`line-height`・`text-align` など、**文字に関するもの** | `border`・`margin`・`padding`・`width`・`background` など、**箱に関するもの** |

リンクの色が変わらなかったのは、ブラウザが `a` に最初から色を指定しているからです（継承より、要素に直接当たるルールが優先）。リンクの色を変えたいときは `a { color: inherit; }` や `.parent a { ... }` と書きます。

## 「CSS が効かない」ときの探し方

ブラウザで右クリック →「検証」（開発者ツール）を開き、要素を選ぶと、**当たっているルールと、負けて線で消されたルール** が一覧で見えます。

| 順番 | 疑うこと |
|---|---|
| ① | セレクタが合っているか（class 名の打ち間違い、`.` の付け忘れ） |
| ② | CSS のファイルが読み込まれているか（`<link>` のパス） |
| ③ | もっと強いルール（詳細度・後勝ち・インライン・`!important`）に負けていないか |
| ④ | そのプロパティが効く要素か（inline 要素の `width` など。レッスン 3） |
| ⑤ | 書き方の間違い（`;` 忘れで、次の行まで無効になっている） |

## AI のコードではこう出てくる

| 見かけたら | チェック |
|---|---|
| `!important` がたくさん | ⚠️ 詳細度の争いが起きている。class を整理する |
| `#main .content div ul li a span` のような長いセレクタ | ⚠️ 強すぎて上書きしにくく、HTML を少し変えると効かなくなる |
| `.btn-primary:hover` | ✅ class ＋ 状態。よくある形 |
| `:focus { outline: none; }` | ⚠️ キーボードで操作している人が、今どこを選んでいるか分からなくなる。消すなら代わりの見た目を |
| React の `className="note"` | HTML の `class` と同じ（JavaScript では `class` が予約語なので `className`） |

```quiz
? `.card p` が選ぶのは？
- class が card の `<p>`
+ class が card の要素の中のどこかにある `<p>`
- class が card の要素のすぐ下の `<p>` だけ
> スペースは「子孫」で、中のどこにあっても選びます。すぐ下だけなら `.card > p` です。

? `.note { color: blue; }` と `#first { color: red; }` が両方当たる要素の色は？（`#first` が先に書かれていても）
+ 赤。id のセレクタは class より詳細度が高い
- 青。後に書かれた方が勝つ
- 紫。2 つの色が混ざる
> 後勝ちは詳細度が同じときだけです。id（1,0,0）は class（0,1,0）より常に強いです。

? 親に `color` と `border` を指定したとき、子に引き継がれるのは？
- 両方
+ `color` だけ
- `border` だけ
> 文字に関するもの（color・font-size など）は継承されますが、箱に関するもの（border・margin など）は継承されません。
```
