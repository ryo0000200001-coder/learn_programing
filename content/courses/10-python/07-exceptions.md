---
title: 例外処理 try / except
level: 2
minutes: 12
concepts: [errors]
summary: エラーが起きても止まらないようにする仕組み。
---
## このレッスンのゴール

- `try / except / else / finally` の流れを追える
- `raise` の意味が分かる
- 「何でも except」の危うさを説明できる

## 基本形

```python
try:
    age = int(input("年齢: "))
except ValueError:
    print("数字を入力してください")
    age = 0
```

`try` の中でエラー（**例外**）が起きたら、残りを飛ばして `except` に移ります。
起きなければ `except` は無視されます。

## 全部入りの形

```python
try:
    f = open("data.txt")
    text = f.read()
except FileNotFoundError:
    print("ファイルがありません")
except PermissionError as e:
    print("読めません:", e)      # e にエラーの詳細が入る
else:
    print("読めました")          # 例外が起きなかったときだけ
finally:
    print("後片付け")            # 必ず実行される
```

## raise：自分でエラーを起こす

```python
def withdraw(balance, amount):
    if amount > balance:
        raise ValueError("残高不足です")
    return balance - amount
```

「おかしな状態のまま進むより、ここで止める」ための仕組みです。呼び出し元が `try` で受け止めます。

## ⚠️ AI のコードで注意したい書き方

```python
try:
    do_something()
except Exception:
    pass          # エラーを握りつぶしている！
```

`except Exception: pass` は **どんなエラーも黙って無視** します。動いているように見えて、実はデータが壊れていても気づけません。
少なくともログを出す（`print` や `logging`）のが望ましく、レビューで指摘すべきポイントです。

## 他の言語では

| 言語 | 書き方 |
|---|---|
| JavaScript / Java / C# | `try { } catch (e) { } finally { }` |
| Go | 例外がなく、`result, err := f()` と **エラーを値で返す** |
| Rust | `Result<T, E>` 型と `?` 演算子 |

Go や Rust は「失敗するかもしれない」ことを **戻り値の型** で表します。コースを進めると出てきます。

```quiz
? try の中でエラーが起きなかった場合、except ブロックは？
- 実行される
+ 実行されない
> except は例外が起きたときだけ実行されます。

? finally ブロックはいつ実行される？
- エラーが起きたときだけ
- エラーが起きなかったときだけ
+ どちらの場合も必ず
> 後片付け（ファイルを閉じる等）に使います。

? `except Exception: pass` の問題点は？
+ どんなエラーも黙って無視するので、異常に気づけない
- 文法エラーになる
- 処理が遅くなる
> エラーを握りつぶすのは典型的なアンチパターンです。
```
