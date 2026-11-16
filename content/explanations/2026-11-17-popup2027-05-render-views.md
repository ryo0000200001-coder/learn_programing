---
title: 描画（1）― render とホーム・タスク・予定・ログの画面
language: JavaScript
date: 2026-11-17
level: 2
series: popup2027
part: 5
concepts: [dom_ui, higher_order, collections, strings, conditionals]
lessons: [20-javascript/05-array-methods, 20-javascript/06-dom-events, 20-javascript/02-control-flow, 20-javascript/04-functions-arrow]
summary: 状態 S から HTML の文字列を組み立てて画面を描き直す render と、4 つの画面の作り方。
---
## 📄 解説するコード（165〜249 行目・抜粋）

```javascript
// ---------- 描画 ----------
function render() {
  document.title = S.settings.title;
  document.getElementById("title").textContent = S.settings.title;
  document.getElementById("meBtn").textContent = S.me ? `👤 ${S.me}` : "名前を選ぶ";
  document.getElementById("nav").innerHTML = TABS.map(([k, i, l]) => `<button data-tab="${k}" class="${S.tab === k ? "on" : ""}"><span>${i}</span>${l}</button>`).join("");
  const banner = S.error ? `<div class="banner">${esc(S.error)}</div>` : store.live ? "" : `<div class="banner">お試しモード：データはこの端末だけに保存されています（Firebase 未接続）</div>`;
  document.getElementById("main").innerHTML = banner + (VIEWS[S.tab] || VIEWS.home)();
}

const VIEWS = {
  home() {
    const days = Math.ceil((new Date(S.settings.date + "T00:00:00") - new Date(today() + "T00:00:00")) / 864e5);
    const total = S.tasks.length, done = S.tasks.filter(t => t.status === "done").length;
    const next = S.milestones.filter(m => !m.done).sort((a, b) => (a.date || "").localeCompare(b.date || "")).slice(0, 3);
    const mine = S.tasks.filter(t => t.assignee === S.me && t.status !== "done").sort((a, b) => (a.due || "9").localeCompare(b.due || "9")).slice(0, 5);
    const logs = [...S.logs].sort(byNew).slice(0, 3);
    return `
    <div class="card"><h2>本番まで（${fmtDate(S.settings.date)}）</h2>
      <div class="count"><b>${days >= 0 ? days : 0}</b><span>日</span></div></div>
    <div class="card"><h2>タスク進捗</h2>
      <div class="row"><span>${done} / ${total} 完了</span><span class="mini">${total ? Math.round(done / total * 100) : 0}%</span></div>
      <div class="bar"><i style="width:${total ? done / total * 100 : 0}%"></i></div></div>
    ...（自分のやること・次の予定・最近のログ・設定ボタン）`;
  },

  tasks() {
    const order = { doing: 0, todo: 1, done: 2 };
    let list = [...S.tasks];
    if (S.filter !== "all") list = list.filter(t => t.assignee === S.filter);
    list.sort((a, b) => (order[a.status] - order[b.status]) || (a.due || "9").localeCompare(b.due || "9"));
    const label = { todo: "未着手", doing: "進行中", done: "完了" };
    return `
    <form class="add" data-form="tasks">
      <input class="grow" name="title" placeholder="やること" required>
      <select name="assignee">${memberOpts(S.me, true)}</select>
      <input type="date" name="due">
      <button class="btn">追加</button>
    </form>
    <div class="list">${list.map(t => `
      <div class="item ${t.status === "done" ? "done" : ""}">
        <button class="chip s-${t.status}" data-cycle="${t.id}">${label[t.status]}</button>
        <div class="body">${esc(t.title)}<div class="meta">...</div></div>
        <button class="x" data-del="tasks:${t.id}">×</button>
      </div>`).join("") || `<div class="empty">タスクはまだありません</div>`}</div>`;
  },

  milestones() { /* 予定：日付順。過ぎた予定に class="past" */ },
  logs() { /* ログ：日付の新しい順 */ },
  // ideas() と expenses() は 6 ページ目
};
```

## 🧭 ひとことで言うと

**JavaScript** で書かれた、**状態 `S` から画面を組み立てる** 部分です。各画面は「HTML の文字列を返す関数」になっていて、`render()` がそれを `#main` の箱に入れます。

## 🗺️ 全体の流れ

1. どこかで `S` が変わると `render()` が呼ばれる
2. `render()` がタイトル・自分の名前・下のタブを書き換える
3. 今のタブ（`S.tab`）に対応する画面の関数（`VIEWS.home` など）を呼び、HTML の文字列をもらう
4. その文字列を `#main` に `innerHTML` で入れる → 画面が丸ごと新しくなる

## 🔍 ブロックごとの解説

### render：画面を丸ごと描き直す

```javascript
document.getElementById("main").innerHTML = banner + (VIEWS[S.tab] || VIEWS.home)();
```

- `VIEWS[S.tab]`：`S.tab` が `"tasks"` なら `VIEWS.tasks`（画面の関数）を取り出す
- `|| VIEWS.home`：知らないタブ名なら、ホームにする
- 最後の `()` で関数を呼び、返ってきた HTML 文字列を箱に入れる

変わった所だけを直すのではなく **毎回全部作り直す** ので、仕組みがとても単純です。小さなアプリならこれで十分速く動きます。

### 下のタブを作る

```javascript
TABS.map(([k, i, l]) => `<button data-tab="${k}" class="${S.tab === k ? "on" : ""}">...`).join("")
```

- `([k, i, l]) =>`：`["tasks", "✅", "タスク"]` を 3 つの変数に **分割代入** して受け取る
- 今のタブだけ `class="on"`（色が付く）
- `data-tab="tasks"`：ボタンに付けた **メモ書き**。押されたときに、どのタブか分かる（7 ページ目）
- `map` で作った文字列の配列を、`join("")` で 1 つの文字列につなげる

### ホーム：数字を計算して並べる

```javascript
const days = Math.ceil((new Date(S.settings.date + "T00:00:00") - new Date(today() + "T00:00:00")) / 864e5);
```

日付どうしを引き算すると **ミリ秒（1000 分の 1 秒）** の差が出ます。`864e5` は `86400000`（1 日のミリ秒）なので、割ると日数になります。たとえば今日が 2026-11-17 なら、2027-09-01 まで **288 日** です。

```javascript
const mine = S.tasks.filter(t => t.assignee === S.me && t.status !== "done")
  .sort((a, b) => (a.due || "9").localeCompare(b.due || "9")).slice(0, 5);
```

メソッドチェーンを 1 段ずつ読みます。

1. `filter`：自分が担当 **かつ** 完了していないタスクだけ
2. `sort`：締め切りの早い順。締め切りが無いものは `"9"` として扱い、**一番後ろ** へ（日付の文字列 "2027-..." より "9" の方が後に来る）
3. `slice(0, 5)`：先頭の 5 件だけ

### タスク：並べ替えの 2 段階ルール

```javascript
const order = { doing: 0, todo: 1, done: 2 };
list.sort((a, b) => (order[a.status] - order[b.status]) || (a.due || "9").localeCompare(b.due || "9"));
```

1. まず状態で並べる：**進行中 → 未着手 → 完了**
2. 状態が同じなら（引き算が 0 になると `||` の右に進む）、締め切りの早い順

`sort` の比較関数は「マイナスなら a が先、プラスなら b が先、0 なら同じ」というルールです。

### 一覧が空のときの表示

```javascript
${list.map(t => `...`).join("") || `<div class="empty">タスクはまだありません</div>`}
```

1 件も無ければ `join("")` は空文字になり、空文字は「偽」なので `||` の右側（「まだありません」）が使われます。

### 予定・ログ

- **予定**：日付の早い順。今日より前の予定には `class="past"` を付けて、CSS で枠の色を変える。チェックボックスで完了にできる
- **ログ**：日付の新しい順。同じ日付なら作成日時の新しい順（`byNew`）

## 🐍 Python と比べると

| JavaScript | Python で言うと |
|---|---|
| `VIEWS = { home() {...}, tasks() {...} }` | 関数を値に持つ辞書 `VIEWS = {"home": home, "tasks": tasks}` |
| `VIEWS[S.tab] \|\| VIEWS.home` | `VIEWS.get(S["tab"], home)` |
| `list.map(t => `...`).join("")` | `"".join(f"..." for t in lst)` |
| `a.localeCompare(b)` | 文字列の比較（`sorted(key=...)` で並べる） |
| `arr.slice(0, 5)` | `arr[:5]` |
| `innerHTML = 文字列` | （Python には無い。HTML の箱に文字列を流し込む、ブラウザだけの機能） |

## 🔑 キーワード

- **render（描画）**：状態から画面を作り直す処理
- **テンプレートリテラル**：`` `...${式}...` `` の、値を埋め込める文字列
- **innerHTML**：要素の中身を HTML の文字列で書き換えるプロパティ
- **data 属性**：`data-tab="..."` のように、HTML の要素に付けるメモ書き
- **メソッドチェーン**：`.filter().sort().slice()` のように処理をつなげる書き方
- **比較関数**：`sort` に渡す「どちらを先にするか」を決める関数

## ⚠️ AI のコードとしてのチェックポイント

- ✅ 画面が「S → 文字列 → innerHTML」の一方通行で作られていて、仕組みが単純で追いやすい
- ✅ ユーザーが入力したタイトルやログは `esc()` を通している
- ⚠️ `innerHTML` で毎回全部作り直すので、**入力中のフォームが消えてしまう** 問題がある。8 ページ目の `rerender` でその対策をしている
- ⚠️ `fmtDate(m.date)` や `t.status` などは `esc()` を通していない。普通に使う分には問題ないが、データベースに直接おかしな値が書き込まれると、表示が崩れたり悪用されたりする余地がある
- ⚠️ 日数の計算は端末の時計とタイムゾーンを使う。海外の端末では 1 日ずれることがある（日本で使う分には問題なし）

## 🗣️ 30 秒で人に説明するなら

「render は状態 S をもとに画面を全部作り直す関数で、今のタブに対応する VIEWS の関数が返す HTML の文字列を、main の箱に innerHTML で入れています。
ホームでは本番までの日数を日付の引き算で出したり、自分の未完了タスクを filter・sort・slice で 5 件取り出したりしています。
タスク一覧は、進行中・未着手・完了の順、同じ状態なら締め切りが早い順に並べています。」

## ✅ 理解度チェック

```quiz
? `S.tab` が "ideas" のとき、render() が呼ぶ画面の関数は？
- VIEWS.home
+ VIEWS.ideas
- 何も呼ばない
> VIEWS[S.tab] で、タブ名と同じ名前の関数を取り出します。

? タスク一覧で、締め切りが無いタスクはどこに並ぶ？
+ 同じ状態のタスクの中で一番後ろ
- 一番先頭
- 表示されない
> 締め切りが無いものは "9" として比べるので、日付より後になります。

? `[].map(x => x).join("") || "なし"` の結果は？
- ""
+ "なし"
- []
> 空の配列を join すると空文字になり、空文字は偽なので || の右側が使われます。
```
