---
title: 状態（S）と小道具 ― アプリの「今」をまとめた箱と便利な関数
language: JavaScript
date: 2026-11-17
level: 2
series: popup2027
part: 4
concepts: [variables, functions, strings, security, collections]
lessons: [20-javascript/01-js-basics, 20-javascript/04-functions-arrow, 20-javascript/03-arrays-objects, 20-javascript/06-dom-events]
summary: アプリの今の状態をまとめたオブジェクト S と、無害化・日付・金額の表示などに使う小さな関数たち。
---
## 📄 解説するコード（145〜163 行目）

```javascript
// ---------- 状態 ----------
const S = { settings: DEFAULT_SETTINGS, tab: "home", filter: "all" };
COLS.forEach(c => S[c] = []);
const lsGet = k => { try { return localStorage.getItem(k) } catch { return null } };
const lsSet = (k, v) => { try { localStorage.setItem(k, v) } catch {} };
S.me = lsGet("pu-me");
S.tab = lsGet("pu-tab") || "home";

const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const today = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`; };
const fmtDate = s => s ? s.replace(/^(\d{4})-(\d{2})-(\d{2})$/, (_, y, m, d) => `${y}/${+m}/${+d}`) : "";
const yen = n => "¥" + Math.round(n).toLocaleString("ja-JP");
const byNew = (a, b) => (b.createdAt || 0) - (a.createdAt || 0);
const memberOpts = (sel, withNone) => (withNone ? `<option value="">担当なし</option>` : "") + S.settings.members.map(m => `<option ${m === sel ? "selected" : ""}>${esc(m)}</option>`).join("");

const TABS = [
  ["home", "🏠", "ホーム"], ["tasks", "✅", "タスク"], ["milestones", "📅", "予定"],
  ["logs", "📝", "ログ"], ["ideas", "💡", "アイデア"], ["expenses", "💰", "お金"],
];
```

## 🧭 ひとことで言うと

**JavaScript** で書かれた、**アプリの「今」を全部まとめた箱 `S`（State ＝状態）** と、あちこちで使う **小さな便利関数** の定義です。どれも 1 行関数（アロー関数）なので、1 つずつ分解して読めば怖くありません。

## 🗺️ 全体の流れ

1. `S` を作る：設定・今のタブ・絞り込みと、5 種類のデータ用の空の配列
2. この端末に覚えてある「自分の名前」と「最後に開いていたタブ」を localStorage から読む
3. 画面を作るときに使う便利関数（無害化・日付・金額・並べ替え・選択肢）を用意する
4. 下のタブの一覧 `TABS` を定義する

## 🔍 ブロックごとの解説

### S：アプリの状態を 1 か所に

```javascript
const S = { settings: DEFAULT_SETTINGS, tab: "home", filter: "all" };
COLS.forEach(c => S[c] = []);
```

最終的に `S` はこんな形になります。

```javascript
{
  settings: { title: "POP UP 2027", date: "2027-09-01", members: [...] },
  tab: "home",        // 今開いているタブ
  filter: "all",      // タスクの絞り込み（全員 / メンバー名）
  me: "メンバーA",     // 自分の名前
  tasks: [], milestones: [], logs: [], ideas: [], expenses: [],  // データ
  // 後から error・ideaPhoto・ideaDraft・busy なども入る
}
```

**画面は S の中身だけを見て描かれます**。「画面を変えたいときは S を変えて render() を呼ぶ」のがこのアプリのルールです。
`S[c] = []` の `[c]` は、変数 `c` の中身（"tasks" など）をキー名として使う書き方です。

### lsGet / lsSet：失敗しても止まらない保存

ブラウザのプライベートモードなどでは localStorage が使えずエラーになることがあるので、`try / catch` で包んで「失敗したら何もしない」ようにしています。

### esc：画面に出す前の無害化（とても大事）

```javascript
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", ... }[c]));
```

`<` や `"` などの記号を `&lt;` のような **ただの文字として表示される形** に置き換えます。
これをしないと、誰かがタスク名に `<img src=x onerror=...>` のような文字を入れたとき、**他のメンバーの画面でそのプログラムが動いてしまう**（XSS という攻撃）ことがあります。
このアプリは HTML を文字列で組み立てる作りなので、ユーザーが入力した文字には必ず `esc()` を通しています。

- `s ?? ""`：s が null か undefined なら空文字
- `/[&<>"']/g`：正規表現。「この 5 つの記号のどれか」を、`g`（全部）探す
- `{...}[c]`：見つかった記号 `c` を、その場で作った対応表から引いて置き換える

### today / fmtDate：日付の形を整える

```javascript
today()                 // "2026-11-17"（今日を「年-月-日」の形で）
fmtDate("2027-09-01")   // "2027/9/1"（表示用に）
```

- `padStart(2, "0")`：1 桁の月日を `09` のように 2 桁にする
- `getMonth() + 1`：JavaScript の月は **0 から始まる**（1 月が 0）ので 1 を足している。よくある落とし穴
- `+m`：文字列 `"09"` の前に `+` を付けると数値 `9` になる（先頭の 0 が消える）

### yen：金額の表示

```javascript
yen(1234.5)   // "¥1,235"
```

四捨五入して、`toLocaleString("ja-JP")` で 3 桁ごとにカンマを入れています。

### byNew / memberOpts：並べ替えと選択肢

- `byNew`：`sort` に渡す比べ方の関数。作成日時の **新しい順**（`b - a` で大きい方が先）
- `memberOpts`：メンバー名から `<option>` の HTML を作る。今の自分（`sel`）を最初から選ばれた状態にする

### TABS：タブの一覧

`[キー, アイコン, 表示名]` の配列の配列です。ここに 1 行足せばタブが増える（画面の関数も必要）ように、データとして持っています。

## 🐍 Python と比べると

| JavaScript | Python で言うと |
|---|---|
| `const S = {...}` | 辞書 `S = {...}`（中身は後から変えられる） |
| `s ?? ""` | `s if s is not None else ""` |
| `s.replace(/[&<>"']/g, ...)` | `html.escape(s)`（Python の標準ライブラリにある） |
| `` `${y}/${m}` `` | `f"{y}/{m}"` |
| `String(n).padStart(2, "0")` | `str(n).zfill(2)` または `f"{n:02d}"` |
| `Math.round(n).toLocaleString("ja-JP")` | `f"{round(n):,}"` |
| `getMonth()` が 0 始まり | Python の `date.month` は 1 始まり（JavaScript だけの注意点） |

## 🔑 キーワード

- **状態（state）**：アプリの「今」を表すデータ。画面はここから作られる
- **エスケープ（無害化）**：記号を、ただの文字として表示される形に置き換えること
- **XSS（クロスサイトスクリプティング）**：入力に紛れ込ませたプログラムを、他の人の画面で動かす攻撃
- **アロー関数**：`x => ...` の短い関数の書き方
- **null 合体演算子（??）**：左が null / undefined のときだけ右を使う
- **比較関数**：`sort` に渡す「どちらを先にするか」を決める関数

## ⚠️ AI のコードとしてのチェックポイント

- ✅ ユーザーの入力を画面に出すときに `esc()` を通している
- ✅ localStorage が使えない環境でも止まらない
- ⚠️ 1 行に詰め込んだ関数が多く、読みにくい。理解するときは、例を入れて結果を書き出してみるとよい
- ⚠️ `fmtDate` は「年-月-日」の形でない文字列が来ると、**そのまま返す**。返した値を `esc()` せずに画面に出している場所があり、データベースに変な値が入ると表示が崩れる（悪用される）可能性がある（6・7 ページ目の写真の扱いと合わせて注意点）

## 🗣️ 30 秒で人に説明するなら

「S はアプリの状態をまとめたオブジェクトで、設定・今のタブ・自分の名前と、5 種類のデータの配列が入っています。画面は S だけを見て描くルールです。
そのほか、記号を無害化して XSS を防ぐ esc、日付を整える today と fmtDate、金額を ¥ とカンマ付きにする yen などの小さな関数を用意しています。」

## ✅ 理解度チェック

```quiz
? `esc('<b>')` の結果は？
- <b>
+ &lt;b&gt;
- b
> < と > を、ただの文字として表示される形に置き換えます。

? JavaScript で 2026 年 11 月の日付に対して `d.getMonth()` を呼ぶと？
- 11
+ 10
- 12
> 月は 0 から数えるので、1 を足して使う必要があります。

? `fmtDate("2027-09-01")` の結果は？
+ "2027/9/1"
- "2027/09/01"
- "9/1"
> +m で "09" が数値の 9 になり、先頭の 0 が消えます。
```
