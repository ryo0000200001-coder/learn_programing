---
title: クラスとオブジェクト
level: 3
minutes: 18
concepts: [classes]
summary: データと処理をひとまとめにする設計図。
---
## このレッスンのゴール

- クラス（設計図）とインスタンス（実物）の違いを説明できる
- `__init__` と `self` の役割が分かる
- 継承の基本を読める

## クラス＝設計図、インスタンス＝実物

```python
class Dog:
    def __init__(self, name, age):
        self.name = name     # インスタンスごとのデータ（属性）
        self.age = age

    def bark(self):          # インスタンスの処理（メソッド）
        return f"{self.name}: ワン！"

pochi = Dog("ポチ", 3)       # インスタンスを作る
print(pochi.bark())          # ポチ: ワン！
print(pochi.age)             # 3
```

| 用語 | 意味 |
|---|---|
| `class Dog:` | 設計図の定義 |
| `__init__` | 作るときに最初に呼ばれる初期化処理（コンストラクタ） |
| `self` | 「このインスタンス自身」。`self.name` は「自分の名前」 |
| `pochi.bark()` | メソッド呼び出し。`self` には自動で `pochi` が入る |

## なぜクラスを使う？

辞書でも同じデータは持てますが、クラスにすると **データと、それを扱う処理をセットで管理** できます。
「犬のデータ」と「吠える処理」がバラバラにならないのです。

## 継承：設計図を引き継ぐ

```python
class Animal:
    def __init__(self, name):
        self.name = name
    def speak(self):
        return "..."

class Cat(Animal):           # Animal を引き継ぐ
    def speak(self):         # 上書き（オーバーライド）
        return f"{self.name}: ニャー"
```

`Cat` は `Animal` の `__init__` をそのまま使い、`speak` だけを自分用に変えています。
`super().__init__(...)` と書いてあれば「親の初期化も呼ぶ」という意味です。

## AI のコードでよく見る：dataclass

```python
from dataclasses import dataclass

@dataclass
class User:
    name: str
    age: int = 0

u = User("Ryo", 20)
```

`@dataclass` を付けると `__init__` などを自動で作ってくれます。データを入れるだけのクラスはこの書き方が主流です。

## 他の言語では

| 言語 | 特徴 |
|---|---|
| JavaScript / Java / C# | `class` と `this`（Python の `self` にあたる） |
| Go | クラスが無く、`struct`（構造体）＋メソッド |
| Rust | `struct` ＋ `impl` ブロック |

「データ＋処理をまとめる」という考え方は共通で、書き方が違うだけです。

```quiz
? `__init__` はいつ呼ばれる？
+ インスタンスを作るとき（Dog("ポチ", 3) のとき）
- メソッドを呼ぶたび
- プログラム終了時
> 初期化のための特別なメソッドです。

? メソッド内の `self.name` は何を指す？
- クラスの名前
+ そのインスタンス自身の name 属性
- 引数の name
> self はメソッドを呼び出したインスタンス自身です。

? `class Cat(Animal):` の意味は？
+ Cat は Animal を継承している
- Cat の引数は Animal
- Animal が Cat を継承している
> カッコの中が親クラスです。
```
