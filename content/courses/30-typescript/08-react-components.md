---
title: React コンポーネントを読む（TSX）
level: 3
minutes: 20
concepts: [dom_ui, type_hints, functions, generics]
summary: AI が最もよく書く TypeScript の形、React の .tsx ファイルを読み解く。
---
## このレッスンのゴール

- JSX（HTML のような部分）が「画面の設計図を返している」と説明できる
- Props の型、`useState`、`useEffect` の役割を読める

## コンポーネント＝画面の部品を返す関数

```tsx
type GreetingProps = {
  name: string;
  count?: number;
};

export function Greeting({ name, count = 0 }: GreetingProps) {
  return (
    <div className="greeting">
      <h1>こんにちは、{name}さん</h1>
      {count > 0 && <p>{count} 件の通知があります</p>}
    </div>
  );
}
```

| 部分 | 読み方 |
|---|---|
| `GreetingProps` | この部品が受け取るデータ（**Props**）の型 |
| `({ name, count = 0 }: GreetingProps)` | Props を分割代入で受け取る（JS コースの「分割代入」） |
| `return ( <div>...</div> )` | 画面の設計図（**JSX**）を返す |
| `{name}` | JSX の中の `{ }` は JavaScript の式（f-string の `{ }` と同じ感覚） |
| `className` | HTML の `class`（JS の予約語と被るので名前が違う） |
| `{条件 && <p>...</p>}` | 条件が真のときだけ表示する定番の書き方 |

使う側は HTML のタグのように書きます：`<Greeting name="Ryo" count={3} />`

## useState：変化するデータ（状態）

```tsx
import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count} 回押された
    </button>
  );
}
```

- `useState<number>(0)`：初期値 0 の **状態** を作る（`<number>` はジェネリクス）
- `[count, setCount]`：今の値と、値を変える関数（配列の分割代入）
- `setCount(...)` を呼ぶと、**React が自動で画面を描き直す**

DOM を直接書き換えた JavaScript コースとの一番の違いはここです。
**「状態を変える → 画面は React が勝手に更新」** と読みましょう。

## リストを表示する：map

```tsx
type Todo = { id: number; title: string; done: boolean };

function TodoList({ todos }: { todos: Todo[] }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.done ? "✅" : "⬜"} {todo.title}</li>
      ))}
    </ul>
  );
}
```

配列の `map` で `<li>` を量産しています。`key` は React が要素を見分けるための目印です。

## useEffect：表示されたあとに何かする

```tsx
const [users, setUsers] = useState<User[]>([]);

useEffect(() => {
  fetchUsers().then(setUsers);
}, []);   // [] ＝ 最初の 1 回だけ実行
```

「画面が表示されたら API からデータを取ってきて、状態に入れる」という定番の形です。
最後の `[]` は **いつ実行し直すか**（依存配列）。`[userId]` なら userId が変わるたびに実行されます。

## 読む順番のコツ

1. Props の型（何を受け取る部品か）
2. `useState`（どんなデータが変化するか）
3. `return` の JSX（画面の形）
4. イベント（`onClick` など）と `useEffect`（いつ何が起きるか）

```quiz
? `<UserCard user={u} />` と書いたとき、UserCard 関数が受け取るのは？
+ { user: u } という Props
- u そのもの
- 何も受け取らない
> 属性がまとめて Props オブジェクトとして渡されます。

? `setCount(5)` を呼ぶと何が起きる？
+ count が 5 になり、React が画面を描き直す
- count が 5 になるが画面はそのまま
- DOM を自分で書き換える必要がある
> 状態を変えると React が自動で再描画します。

? `useEffect(() => { ... }, [])` の中身はいつ実行される？
+ 部品が最初に表示されたときの 1 回
- 画面が描き直されるたび毎回
- ボタンが押されたとき
> 依存配列が空なので最初の 1 回だけです。

? JSX の `{isAdmin && <AdminMenu />}` の意味は？
+ isAdmin が真のときだけ AdminMenu を表示
- isAdmin と AdminMenu を両方表示
- isAdmin に AdminMenu を代入
> && による条件付き表示の定番パターンです。
```
