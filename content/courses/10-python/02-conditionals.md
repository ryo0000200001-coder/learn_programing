---
title: 条件分岐 if
level: 1
minutes: 10
concepts: [conditionals, operators]
summary: 条件によって実行する処理を変える。
---
## このレッスンのゴール

- `if / elif / else` の流れを追える
- Python では **インデント（字下げ）がブロックを表す** と説明できる

## 基本形

```python
score = 75

if score >= 80:
    print("よくできました")
elif score >= 60:
    print("合格")
else:
    print("もう少し")
```

1. 上から条件を順に調べる
2. **最初に当てはまったブロックだけ** を実行し、残りは飛ばす
3. どれにも当てはまらなければ `else`

この例では `score >= 80` は偽、`score >= 60` が真なので「合格」だけ表示されます。

## インデントが大事

```python
if score >= 60:
    print("合格")      # if の中
    print("おめでとう") # if の中
print("終わり")         # if の外（必ず実行される）
```

多くの言語は `{ }` でブロックを囲みますが、Python は **字下げ（スペース 4 つ）** で表します。
他の言語と比べるときのとても大事な違いです。

## 「真」とみなされる値

Python では `if` に bool 以外も置けます。

```python
items = []
if items:          # 空のリストは「偽」
    print("あり")
else:
    print("空っぽ")
```

`0`、`""`（空文字）、`[]`、`{}`、`None` は偽、それ以外は真として扱われます。AI のコードで `if not data:` とあれば「data が空なら」という意味です。

## 1 行で書く形（条件式）

```python
label = "成人" if age >= 18 else "未成年"
```

「条件が真なら左、偽なら右」。AI がよく使う短い書き方です。

## 他の言語では

```javascript
// JavaScript
if (score >= 80) {
  console.log("よくできました");
} else if (score >= 60) {
  console.log("合格");
}
```

`elif` が `else if` に、インデントが `{ }` に変わるだけで、考え方は同じです。

```quiz
? score = 85 のとき、上の「基本形」の例で表示されるのは？
+ よくできました
- よくできました と 合格
- 合格
> 最初に当てはまったブロックだけが実行されます。

? `if not name:` は何を調べている？
- name が "not" という文字列か
+ name が空（または None など偽の値）か
- name が定義されていないか
> not は否定。空文字や None は偽なので、「name が空なら」という意味になります。

? `x = "A" if ok else "B"` で ok が False のとき x は？
- "A"
+ "B"
> 条件が偽なので else の右側が使われます。
```
