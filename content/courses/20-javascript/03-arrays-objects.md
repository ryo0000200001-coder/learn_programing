---
title: 配列とオブジェクト
level: 1
minutes: 15
concepts: [collections, data_formats]
summary: JavaScript のデータの入れ物と、分割代入・スプレッド構文。
---
## このレッスンのゴール

- 配列とオブジェクトの基本操作を読める
- 分割代入 `const { a } = obj` とスプレッド構文 `...` を読める

## 配列（Python のリスト）

```javascript
const nums = [10, 20, 30];
nums[0];          // 10
nums.length;      // 3（Python の len(nums)）
nums.push(40);    // 末尾に追加（append）
nums.includes(20) // true（Python の 20 in nums）
nums.at(-1);      // 40（後ろから。nums[-1] は undefined になるので注意）
```

## オブジェクト（Python の辞書）

```javascript
const user = { name: "Ryo", age: 20 };
user.name;        // "Ryo"（ドットでアクセス）
user["age"];      // 20（キーが変数のときはこちら）
user.email;       // undefined（無いキーでもエラーにならない）
```

キーに `" "` が要らないのが Python との違いです。
JSON は「JavaScript のオブジェクトの書き方」から生まれたので、見た目がそっくりです。

## ?. と ??（AI のコードで頻出）

```javascript
const city = user.address?.city;      // address が無ければ undefined（エラーにしない）
const name = user.nickname ?? "名無し"; // null / undefined なら右側を使う
```

Python の `user.get("address", {}).get("city")` と `or` の組み合わせにあたります。

## 分割代入

```javascript
const { name, age } = user;         // user.name と user.age を取り出す
const [first, second] = nums;       // 配列の先頭 2 つ
function show({ name }) { ... }     // 引数で受け取るときにも使える
```

Python の `a, b = [1, 2]` を、オブジェクトにも使えるようにしたものです。React のコードで大量に出てきます。

## スプレッド構文 ...

```javascript
const more = [...nums, 50];                 // 配列を展開してつなげる
const updated = { ...user, age: 21 };       // コピーして age だけ変える
```

`{ ...user, age: 21 }` は「user のコピーを作り、age を上書き」。元の `user` は変わりません。
**元を変えずに新しいものを作る** スタイルは、React などで重視されます。

## 参照に注意（Python と同じ）

```javascript
const a = [1, 2];
const b = a;   // 同じ配列を指す
b.push(3);     // a も [1, 2, 3]
```

```quiz
? `const { age } = { name: "A", age: 3 }` のあと age は？
- { age: 3 }
+ 3
- undefined
> オブジェクトから同じ名前のプロパティを取り出しています。

? `user.profile?.bio` で profile が存在しない場合は？
- エラーになる
+ undefined になる
- 空文字になる
> ?. は途中が無ければ undefined を返します。

? `const c = { ...a, x: 1 }` の効果は？
+ a をコピーして x を 1 にした新しいオブジェクトを作る
- a の x を 1 に書き換える
- a と c が同じオブジェクトになる
> スプレッドは浅いコピーを作ります。元の a は変わりません。
```
