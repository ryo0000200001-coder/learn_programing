---
title: 型ヒント
level: 4
minutes: 15
concepts: [type_hints, types]
summary: AI のコードに必ずと言っていいほど付いている「型の注釈」を読む。
---
## このレッスンのゴール

- 関数の型ヒントを読んで、何を受け取り何を返すか分かる
- `list[str]`、`dict[str, int]`、`X | None` などを読める

## 型ヒントとは

```python
def greet(name: str, times: int = 1) -> str:
    return f"こんにちは {name}" * times
```

`name: str` は「name には文字列が来る想定」、`-> str` は「文字列を返す」という **注釈** です。
Python は実行時にこれをチェックしません（違う型を渡しても動いてしまう）。
それでも AI がよく付けるのは、**読む人とエディタにとっての説明書** になるからです。

## よく出る書き方

| 型ヒント | 意味 |
|---|---|
| `list[str]` | 文字列のリスト |
| `dict[str, int]` | キーが文字列・値が整数の辞書 |
| `tuple[int, int]` | 整数 2 つのタプル |
| `str \| None` | 文字列 または None（古い書き方：`Optional[str]`） |
| `int \| float` | 整数か小数（古い書き方：`Union[int, float]`） |
| `Any` | 何でもよい |
| `Callable[[int], str]` | int を受け取り str を返す関数 |

```python
def find_user(users: list[dict[str, str]], name: str) -> dict[str, str] | None:
    for u in users:
        if u["name"] == name:
            return u
    return None
```

型ヒントだけで「ユーザーのリストから名前で探し、見つからなければ None」と読めます。
**`| None` を見たら「呼び出し側で None のチェックが必要」** という合図です。

## 型を確認するツール

`mypy` や `pyright` というツールを使うと、型ヒントと実際の使い方が食い違っていないか検査できます。
VS Code で赤い波線が出るのはこの仕組みです。

## TypeScript への橋渡し

```typescript
function greet(name: string, times: number = 1): string { ... }
```

TypeScript の型注釈は Python の型ヒントとそっくりです。違いは、TypeScript では **型が合わないと実行前にエラー** になる点です。

```quiz
? `def f(x: int) -> bool:` の意味は？
+ 整数を受け取り真偽値を返す（想定の）関数
- bool を受け取り int を返す関数
- x が int でないと必ずエラーになる関数
> Python では型ヒントは注釈で、実行時には強制されません。

? `str | None` が戻り値の型なら、呼び出し側で注意することは？
+ None が返る場合の処理
- 必ず空文字が返ること
- 例外が起きること
> 「見つからない」ときなどに None が返る可能性を示しています。

? `dict[str, list[int]]` に合うデータは？
- ["a", 1]
+ {"a": [1, 2]}
- {1: ["a"]}
> キーが文字列、値が整数のリストです。
```
