---
title: Promise と async/await・fetch
level: 3
minutes: 20
concepts: [async, http_api, errors]
summary: API からデータを取ってくるコードを読む。
---
## このレッスンのゴール

- Promise が「あとで結果が届く約束」だと説明できる
- `fetch` + `async/await` + `try/catch` の定番パターンを読める

## なぜ非同期？

ネットからデータを取るのには時間がかかります。その間ページが固まってしまわないよう、
JavaScript は **「結果はあとで渡すね」という約束（Promise）** をすぐ返し、処理を先に進めます。

## 定番パターン

```javascript
async function loadUsers() {
  try {
    const res = await fetch("https://api.example.com/users");
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }
    const users = await res.json();
    return users;
  } catch (err) {
    console.error("取得に失敗:", err);
    return [];
  }
}
```

1. `fetch(url)` でリクエスト → Promise が返る
2. `await` で結果（レスポンス）を待つ
3. `res.ok` で成功か確認（**fetch は 404 や 500 でもエラーにならない** ので、このチェックが必要）
4. `await res.json()` で本文を JSON として読み込む（これも Promise）
5. `try / catch` で失敗に備える（Python の try / except）

## then で書く古い形

```javascript
fetch(url)
  .then(res => res.json())
  .then(users => console.log(users))
  .catch(err => console.error(err));
```

`await` が登場する前の書き方です。意味は上と同じで、「終わったら（then）次へ」とつないでいます。

## 複数を同時に

```javascript
const [user, posts] = await Promise.all([
  fetch("/api/user").then(r => r.json()),
  fetch("/api/posts").then(r => r.json()),
]);
```

Python の `asyncio.gather` と同じです。

## POST で送る

```javascript
await fetch("/api/posts", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ title: "こんにちは" }),   // オブジェクト → JSON 文字列
});
```

`JSON.stringify` / `JSON.parse` は Python の `json.dumps` / `json.loads` です。

## よくあるミス

```javascript
const data = fetch(url);   // await 忘れ → data は Promise（中身ではない）
console.log(data.name);    // undefined
```

AI のコードでも `await` の付け忘れはときどきあります。**「この値は Promise か、中身か？」** を意識して読みましょう。

```quiz
? fetch がサーバーから 404 を受け取ったとき、catch に飛ぶ？
- はい
+ いいえ。res.ok を自分でチェックする必要がある
> fetch がエラーになるのはネットワーク自体の失敗のときです。

? `await res.json()` の await を付け忘れると？
+ 中身ではなく Promise が変数に入る
- エラーで止まる
- 同じ結果になる
> await で待たないと、結果ではなく「約束」が入ります。

? `Promise.all([a, b])` の意味は？
+ a と b を同時に進め、両方の結果を待つ
- a が終わってから b を始める
- 先に終わった方だけを返す
> 先に終わった方だけなら Promise.race です。
```
