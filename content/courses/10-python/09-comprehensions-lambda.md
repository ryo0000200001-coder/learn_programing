---
title: 内包表記とラムダ
level: 3
minutes: 15
concepts: [collections, higher_order, loops]
summary: AI が好んで書く「短い書き方」を読み解く。
---
## このレッスンのゴール

- リスト内包表記を「普通の for 文」に戻して読める
- `lambda` と `sorted(key=...)` を読める

## リスト内包表記

```python
prices = [100, 250, 80]
with_tax = [p * 1.1 for p in prices]
```

これは次の for 文と同じです。

```python
with_tax = []
for p in prices:
    with_tax.append(p * 1.1)
```

**読み方のコツ：真ん中の `for` から読み、最後に先頭の式を見る**。
「prices の各 p について → p * 1.1 を集める」。

## 条件つき

```python
expensive = [p for p in prices if p >= 100]          # 絞り込み → [100, 250]
labels = ["高" if p >= 100 else "安" for p in prices] # 変換 → ["高", "高", "安"]
```

`if` が **後ろ** にあれば「絞り込み」、**前** にあれば「条件で値を変える」です。

## 辞書内包表記・ジェネレータ式

```python
squares = {n: n * n for n in range(4)}     # {0: 0, 1: 1, 2: 4, 3: 9}
total = sum(p * 1.1 for p in prices)       # ( ) の中は一度にリストを作らない
```

## lambda：名前のない小さな関数

```python
double = lambda x: x * 2
# ↓ と同じ
def double(x):
    return x * 2
```

`lambda 引数: 戻り値` という形。単独で使うより、**他の関数に渡す** ときに使われます。

## sorted / max の key

```python
users = [{"name": "Ken", "age": 30}, {"name": "Ryo", "age": 20}]
sorted(users, key=lambda u: u["age"])           # 年齢順
max(users, key=lambda u: u["age"])["name"]      # "Ken"
```

`key=` は「何を基準に比べるか」を関数で渡します。関数を値として渡すこの考え方を **高階関数** と呼び、JavaScript の `map` / `filter` にもつながります。

## 読みにくいときは for 文に戻す

内包表記が二重・三重になっていたら、無理に 1 行で理解せず、**紙やメモに for 文で書き直す** と確実に読めます。

## 他の言語では

```javascript
const withTax = prices.map(p => p * 1.1);              // JS：map とアロー関数
const expensive = prices.filter(p => p >= 100);
```

```quiz
? `[x * 2 for x in [1, 2, 3] if x != 2]` の結果は？
- [2, 4, 6]
+ [2, 6]
- [1, 3]
> 2 を除いた 1 と 3 をそれぞれ 2 倍します。

? `lambda a, b: a + b` と同じ意味の関数は？
+ def f(a, b): return a + b
- def f(a + b): return
- def f(): return a + b
> lambda は引数と戻り値だけを書いた短い関数です。

? `sorted(words, key=len)` は何順に並べる？
- アルファベット順
+ 文字列の長さ順
- 逆順
> key に渡した関数（len）の結果で比べます。
```
