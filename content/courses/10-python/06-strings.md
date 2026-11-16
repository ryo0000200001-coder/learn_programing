---
title: 文字列と f-string
level: 2
minutes: 10
concepts: [strings]
summary: 文字列の組み立て・加工でよく使う書き方。
---
## このレッスンのゴール

- f-string を読める
- よく使う文字列メソッドが分かる

## f-string：値を埋め込む

```python
name = "Ryo"
price = 1234.5
print(f"{name}さんの合計は {price:,.0f} 円")   # Ryoさんの合計は 1,234 円
```

先頭の `f` と `{ }` がポイント。`{ }` の中は **Python の式** で、`:` の後ろは表示の書式です。

| 書式 | 意味 | 例 |
|---|---|---|
| `{x:.2f}` | 小数 2 桁 | `3.14` |
| `{x:,}` | 3 桁区切り | `1,234` |
| `{x:>5}` | 5 文字幅で右寄せ | `   42` |
| `{x=}` | 「x=値」の形（デバッグ用） | `x=42` |

## よく使うメソッド

```python
s = "  Hello, World  "
s.strip()          # "Hello, World"（前後の空白を除く）
s.lower()          # "  hello, world  "
"a,b,c".split(",") # ["a", "b", "c"]（区切って リストに）
"-".join(["a","b"])# "a-b"（リストをつなげる）
"cat".replace("c", "h")  # "hat"
"Hello".startswith("He") # True
"py" in "python"   # True（含むか）
```

`split` と `join` は対になっていて、CSV やログの処理で頻出です。

## 文字列は変更できない

```python
s = "abc"
s.upper()     # "ABC" を「新しく作って返す」
print(s)      # "abc" のまま！
s = s.upper() # 入れ直す必要がある
```

メソッドは元の文字列を変えず、**新しい文字列を返します**（イミュータブル＝変更不可）。

## 複数行・特殊文字

```python
text = """複数行の
文字列"""
path = r"C:\new\folder"   # r"..." は \ を特別扱いしない（raw 文字列）
"改行は\nこう書く"
```

## 他の言語では

| Python | JavaScript | その他 |
|---|---|---|
| `f"{name}さん"` | `` `${name}さん` ``（バッククォート） | Ruby `"#{name}"`、C# `$"{name}"` |

```quiz
? `f"{3.14159:.2f}"` の結果は？
+ "3.14"
- "3.14159"
- "3.1"
> .2f は小数点以下 2 桁です。

? `"a b c".split()` の結果は？
- "abc"
+ ["a", "b", "c"]
- ("a", "b", "c")
> split は文字列を区切ってリストにします（引数なしなら空白で区切る）。

? `s = "hi"; s.upper(); print(s)` で表示されるのは？
+ hi
- HI
> 文字列は変更できないので、upper() の結果を入れ直さない限り s は変わりません。
```
