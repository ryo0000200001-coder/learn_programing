---
title: 描画（2）― アイデアの「いいね」とお金の精算計算
language: JavaScript
date: 2026-11-17
level: 3
series: popup2027
part: 6
concepts: [higher_order, collections, operators, dom_ui]
lessons: [20-javascript/05-array-methods, 20-javascript/03-arrays-objects, 10-python/04-lists-and-dicts]
summary: いいねの多い順に並ぶアイデア一覧と、立て替えた支出から「誰がいくら払う・もらうか」を計算するお金の画面。
---
## 📄 解説するコード（251〜291 行目・抜粋）

```javascript
  ideas() {
    const list = [...S.ideas].sort((a, b) => ((b.likes || []).length - (a.likes || []).length) || byNew(a, b));
    return `
    <form class="add" data-form="ideas">
      <textarea class="grow" name="text" placeholder="思いついたこと、なんでも（写真だけでもOK）">${esc(S.ideaDraft || "")}</textarea>
      ${S.ideaPhoto ? `<div class="grow photo-prev"><img src="${S.ideaPhoto}" alt=""><button type="button" class="x" data-act="clearPhoto">×</button></div>` : ""}
      <label class="btn ghost">📷 写真<input type="file" accept="image/*" data-photo hidden></label>
      <button class="btn" ${S.busy ? "disabled" : ""}>${S.busy ? "処理中…" : "投稿"}</button>
    </form>
    <div class="list">${list.map(i => { const likes = i.likes || []; return `
      <div class="item"><div class="body">${i.text ? esc(i.text) : ""}${i.photo ? `<img class="photo" src="${i.photo}" alt="" data-zoom="${i.id}">` : ""}<div class="meta">${esc(i.author)}</div></div>
      <button class="like ${likes.includes(S.me) ? "on" : ""}" data-like="${i.id}" title="${esc(likes.join("、"))}">♥ ${likes.length}</button>
      <button class="x" data-del="ideas:${i.id}">×</button></div>`; }).join("") || `<div class="empty">アイデアはまだありません</div>`}</div>`;
  },

  expenses() {
    const members = S.settings.members;
    const total = S.expenses.reduce((s, e) => s + (+e.amount || 0), 0);
    const share = members.length ? total / members.length : 0;
    const paid = Object.fromEntries(members.map(m => [m, 0]));
    S.expenses.forEach(e => { if (e.paidBy in paid) paid[e.paidBy] += +e.amount || 0; });
    const list = [...S.expenses].sort((a, b) => (b.date || "").localeCompare(a.date || "") || byNew(a, b));
    return `
    <form class="add" data-form="expenses"> ...（何に使った？・金額・立て替えた人・日付）... </form>
    <div class="card"><h2>合計 ${yen(total)}（1人あたり ${yen(share)}）</h2>
      <table><tr><th>名前</th><th class="num">立替</th><th class="num">精算</th></tr>
      ${members.map(m => { const d = paid[m] - share; return `<tr><td>${esc(m)}</td><td class="num">${yen(paid[m])}</td>
        <td class="num" style="color:${d > 0.5 ? "var(--ok)" : d < -0.5 ? "var(--accent)" : "var(--sub)"}">${d > 0.5 ? "+" + yen(d) + " もらう" : d < -0.5 ? yen(-d) + " 払う" : "±0"}</td></tr>`; }).join("")}
      </table></div>
    <div class="list"> ...（支出の一覧：日付の新しい順）... </div>`;
  },
```

## 🧭 ひとことで言うと

**JavaScript** で書かれた、**アイデア** と **お金** の 2 つの画面です。アイデアは「いいね」の多い順に並び、お金は立て替えた支出の記録から **「誰がいくら払えば・もらえば公平になるか」** を自動で計算します。

## 🗺️ 全体の流れ

**アイデア**
1. いいねの多い順、同じなら新しい順に並べる
2. 投稿フォーム（文字・写真）と、投稿の一覧を作る
3. 自分がいいね済みなら ♥ ボタンに色を付ける

**お金**
1. 支出の合計を出す
2. 合計をメンバーの人数で割って、1 人あたりの負担額を出す
3. メンバーごとに、立て替えた金額を集計する
4. 「立て替えた金額 − 1 人あたり」で、もらう人・払う人を決めて表にする

## 🔍 ブロックごとの解説

### いいねの仕組み：名前の配列

```javascript
const likes = i.likes || [];
likes.includes(S.me)   // 自分がいいね済みか
likes.length           // いいねの数
```

いいねは「数」ではなく **いいねした人の名前の配列**（例：`["メンバーA", "メンバーC"]`）で持っています。
そのおかげで、**同じ人が 2 回いいねできない**・**誰がいいねしたか分かる**（ボタンにマウスを乗せると `title` に名前が出る）という 2 つのことが実現できています。

### いいねの多い順に並べる

```javascript
[...S.ideas].sort((a, b) => ((b.likes || []).length - (a.likes || []).length) || byNew(a, b))
```

- `[...S.ideas]`：元の配列を **コピーしてから** 並べ替える（`sort` は元の配列を書き換えてしまうため）
- `b - a` の順なので **多い順**。同じ数なら（0 になって）`byNew` で新しい順

### 写真の下書き

`S.ideaPhoto` に写真が入っていればプレビューを表示し、`S.busy`（写真の縮小中）なら投稿ボタンを押せなくします。写真の縮小は 8 ページ目です。

### お金：精算の計算

例で追ってみます。メンバーは A・B・C の 3 人、A が 9,000 円、B が 3,000 円を立て替えたとします。

```javascript
const total = S.expenses.reduce((s, e) => s + (+e.amount || 0), 0);   // 12000
const share = members.length ? total / members.length : 0;             // 4000
const paid = Object.fromEntries(members.map(m => [m, 0]));             // {A: 0, B: 0, C: 0}
S.expenses.forEach(e => { if (e.paidBy in paid) paid[e.paidBy] += +e.amount || 0; });
                                                                        // {A: 9000, B: 3000, C: 0}
```

| 名前 | 立替 `paid[m]` | `d = paid[m] - share` | 表示 |
|---|---|---|---|
| A | 9,000 | +5,000 | **+¥5,000 もらう** |
| B | 3,000 | −1,000 | **¥1,000 払う** |
| C | 0 | −4,000 | **¥4,000 払う** |

B と C が払う合計（5,000）と、A がもらう額（5,000）が一致していて、全員の負担がちょうど 4,000 円ずつになります。

### 読み解きのポイント

- `reduce((s, e) => s + ..., 0)`：0 から始めて、支出を 1 件ずつ足していく（JavaScript コースの「map・filter・reduce」）
- `+e.amount || 0`：`+` で文字列を数値にし、数値にできなければ（NaN は偽）0 にする
- `Object.fromEntries([[A, 0], [B, 0]])`：`{A: 0, B: 0}` を作る。Python の `dict(...)` にあたる
- `if (e.paidBy in paid)`：今のメンバーにいない名前（名前を変える前の古い記録など）は集計しない
- `d > 0.5` / `d < -0.5`：割り算の端数（3,333.33… 円など）で「±0」が「1 円払う」にならないよう、**0.5 円の幅を持たせて** 判定している

### 三項演算子の連続

```javascript
d > 0.5 ? "+" + yen(d) + " もらう" : d < -0.5 ? yen(-d) + " 払う" : "±0"
```

`条件1 ? A : 条件2 ? B : C` は、`if 条件1: A elif 条件2: B else: C` と同じです。

## 🐍 Python と比べると

```python
total = sum(int(e["amount"] or 0) for e in expenses)
share = total / len(members) if members else 0
paid = {m: 0 for m in members}
for e in expenses:
    if e["paidBy"] in paid:
        paid[e["paidBy"]] += int(e["amount"] or 0)
for m in members:
    d = paid[m] - share
    label = f"+{d:,.0f} もらう" if d > 0.5 else f"{-d:,.0f} 払う" if d < -0.5 else "±0"
```

| JavaScript | Python |
|---|---|
| `arr.reduce((s, e) => s + x, 0)` | `sum(x for e in arr)` |
| `Object.fromEntries(members.map(m => [m, 0]))` | `{m: 0 for m in members}` |
| `"name" in obj` | `"name" in dict` |
| `[...arr].sort(...)` | `sorted(arr, key=...)`（元を変えない） |

## 🔑 キーワード

- **割り勘の精算**：全員の負担を同じにするための「払う・もらう」の計算
- **reduce**：配列を 1 つの値にまとめるメソッド
- **Object.fromEntries**：`[キー, 値]` の配列からオブジェクトを作る
- **三項演算子**：`条件 ? A : B` の、短い if の書き方
- **非破壊的な並べ替え**：`[...arr]` でコピーしてから並べ、元の配列を変えないこと

## ⚠️ AI のコードとしてのチェックポイント

- ✅ いいねを名前の配列で持つことで、二重いいねを防いでいる
- ✅ 精算の判定に 0.5 円の幅を持たせて、割り切れない金額でも表示がおかしくならない
- ⚠️ 写真（`i.photo`）は `esc()` を通さずに `src="..."` に入れている。アプリが作った画像なら安全だが、データベースに直接おかしな文字列を書き込まれると、そこからプログラムを動かされる余地がある（ログインが無いので、Firestore のルールで書き込みを制限することが大事）
- ⚠️ 支出は「全員で均等に割る」前提。「この支出は A と B だけで割る」はできない
- ⚠️ メンバーの名前を変えると、変更前の名前で記録した支出は `in paid` に当たらず、集計から外れる（表の合計と立替の合計が合わなくなる）

## 🗣️ 30 秒で人に説明するなら

「アイデアの画面は、いいねした人の名前を配列で持っていて、その数が多い順に並べています。名前で持つので同じ人は 2 回いいねできません。
お金の画面は、支出の合計をメンバー数で割って 1 人あたりを出し、各自が立て替えた金額との差がプラスならもらう、マイナスなら払う、と表示しています。端数で変な表示にならないよう 0.5 円の幅を持たせています。」

## ✅ 理解度チェック

```quiz
? 4 人のメンバーで、A が 8,000 円だけ立て替えた。B の表示は？
- ±0
+ ¥2,000 払う
- +¥2,000 もらう
> 1 人あたり 2,000 円。B は 0 円しか払っていないので 2,000 円払います（A は 6,000 円もらう）。

? いいねを「数」ではなく「名前の配列」で持っている理由として正しいのは？
+ 同じ人が 2 回いいねするのを防ぎ、誰がいいねしたかも分かるから
- 数字はデータベースに保存できないから
- 並べ替えができないから
> likes.includes(S.me) で、自分がいいね済みかを判定できます。

? `[...S.ideas].sort(...)` の `[...S.ideas]` は何のため？
- アイデアを 2 倍に増やすため
+ 元の配列を書き換えないよう、コピーしてから並べ替えるため
- 写真だけを取り出すため
> sort は元の配列を並べ替えてしまうので、コピーに対して行っています。
```
