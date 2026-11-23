---
title: クラス ― -> と :: と $this
level: 2
minutes: 16
concepts: [classes, types]
summary: PHP のクラスの読み方。new と ->、$this、コンストラクタでのプロパティの宣言（PHP 8）、public・private・readonly、static と ::、継承と parent::、インターフェース。
---
## このレッスンのゴール

- `new`・`->`・`$this`・`::` を読める
- `public function __construct(public readonly string $name, ...)` の短い書き方が分かる
- `private`・`readonly`・`static`・`extends`・`implements` の意味が分かる

## クラスの例

```php
<?php
declare(strict_types=1);

interface HasPrice {
    public function price(): int;
}

class Product implements HasPrice {
    public function __construct(
        public readonly string $name,
        private int $basePrice,
    ) {}

    public function price(): int {
        return intdiv($this->basePrice * 110, 100);
    }

    public function discount(int $yen): void {
        $this->basePrice -= $yen;
    }

    public static function free(string $name): self {
        return new self($name, 0);
    }
}

$apple = new Product("りんご", 120);
echo $apple->name, " ", $apple->price(), "\n";   // りんご 132
$apple->discount(20);
echo $apple->price(), "\n";                      // 110
echo Product::free("試供品")->price(), "\n";      // 0
```

Python で書くと、こうです。

```python
class Product:
    def __init__(self, name: str, base_price: int):
        self.name = name
        self._base_price = base_price

    def price(self) -> int:
        return self._base_price * 110 // 100

    def discount(self, yen: int) -> None:
        self._base_price -= yen

    @staticmethod
    def free(name: str) -> "Product":
        return Product(name, 0)

apple = Product("りんご", 120)
```

| PHP | 意味 | Python で言うと |
|---|---|---|
| `new Product(...)` | 作る | `Product(...)` |
| `$apple->name` / `$apple->price()` | **`->`** でプロパティ・メソッド | `apple.name` / `apple.price()` |
| `$this` | 自分自身 | `self` |
| `__construct(...)` | コンストラクタ | `__init__` |
| `Product::free(...)` | **`::`** で static（インスタンスを作らずに呼ぶ）メソッド | `Product.free(...)` |
| `self` | 自分のクラス | クラス名 |
| `: void` | 何も返さない | `-> None` |

PHP では `.` が文字列をつなぐ演算子（レッスン 1）なので、メソッドを呼ぶのは **`->`** です。

## コンストラクタでのプロパティの宣言

```php
public function __construct(
    public readonly string $name,
    private int $basePrice,
) {}
```

PHP 8 からの短い書き方で、**引数に `public` や `private` を付けると、同じ名前のプロパティを作って、そこに入れてくれます**。昔の書き方だと、こうなります。

```php
private string $name;
private int $basePrice;
public function __construct(string $name, int $basePrice) {
    $this->name = $name;
    $this->basePrice = $basePrice;
}
```

## public・private・readonly

```php
$apple->name = "みかん";
// Error: Cannot modify readonly property Product::$name

echo $apple->basePrice;
// Error: Cannot access private property Product::$basePrice
```

| 書き方 | 意味 |
|---|---|
| `public` | どこからでも使える |
| `private` | **このクラスの中だけ**（外から読むとエラー） |
| `protected` | このクラスと、継承したクラスの中だけ |
| `readonly` | 最初に入れた後は **変えられない** |

Python の `_name` は「さわらないでね」というお願いでしたが、PHP の `private` は **本当にエラーになります**。

## 継承とインターフェース

```php
class Set extends Product {
    public function price(): int {
        return parent::price() - 50;
    }
}

$set = new Set("詰め合わせ", 1000);
echo $set->price();                                 // 1050
echo $set instanceof HasPrice ? "HasPrice" : "";    // HasPrice
```

| 書き方 | 意味 | Python で言うと |
|---|---|---|
| `class Set extends Product` | Product を **継承** | `class Set(Product):` |
| `parent::price()` | 親のメソッドを呼ぶ | `super().price()` |
| `interface HasPrice { ... }` | 「このメソッドを持つ」という約束 | `typing.Protocol` / 抽象クラス |
| `class Product implements HasPrice` | 約束を守ると宣言（Rust の `impl ... for`、Go と違い明示的） | |
| `$x instanceof HasPrice` | その型か | `isinstance(x, HasPrice)` |

## 並べ替え

```php
$items = [new Product("牛乳", 200), $apple];
usort($items, fn($a, $b) => $a->price() <=> $b->price());
foreach ($items as $i) echo $i->name, "=", $i->price(), " ";
// りんご=110 牛乳=220
```

`<=>`（宇宙船演算子）は、左が小さければ -1、同じなら 0、大きければ 1 を返します。Python の `sorted(items, key=lambda i: i.price())` です。

## 名前空間と use

AI の PHP のコード（特に Laravel）は、ファイルの先頭がこうなっていることが多いです。

```php
<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    ...
}
```

| 書き方 | 意味 | Python で言うと |
|---|---|---|
| `namespace App\Http\Controllers;` | このクラスの「住所」 | パッケージ（フォルダ） |
| `use App\Models\Task;` | 別の住所のクラスを、短い名前で使う | `from app.models import Task` |
| `\`（バックスラッシュ） | 住所の区切り | `.` |

Composer（PHP のパッケージ管理。`composer.json` が `package.json` に当たる）が、この住所とファイルの場所を対応させて、自動で読み込んでくれます。

## AI のコードではこう出てくる

| 見かけたら | 読み方 |
|---|---|
| `$this->taskService->create($data)` | 自分の持っている taskService の create を呼ぶ |
| `Task::where('done', false)->get()` | static のメソッドから始まる、Laravel のデータベースの書き方（レッスン 5） |
| `public function __construct(private TaskRepository $repo) {}` | 必要な部品を受け取る（依存性注入。FastAPI の Depends に近い） |
| `self::` / `static::` | 自分のクラスの定数や static メソッド |
| `?string $name` | string か null（Python の `str \| None`） |
| `$obj?->name` | obj が null なら null（JavaScript の `?.`） |

```quiz
? PHP で、オブジェクト `$apple` の `price` メソッドを呼ぶ書き方は？
- `$apple.price()`
+ `$apple->price()`
- `$apple::price()`
> PHP では `->` でメソッドやプロパティを使います。`.` は文字列をつなぐ演算子で、`::` は static メソッドやクラスの定数に使います。

? `public function __construct(private int $basePrice) {}` は何をしている？
+ basePrice という private のプロパティを作り、渡された値を入れている
- basePrice を返す関数を作っている
- basePrice を外から変えられるようにしている
> PHP 8 の書き方で、引数に public や private を付けると、プロパティの宣言と代入をまとめて行います。

? `private` のプロパティを、クラスの外から `$apple->basePrice` で読むと？
- 読める（private はお願いなだけ）
+ エラーになる
- null が返る
> PHP の private は本当にアクセスできません。Python の `_` で始まる名前とは違います。
```
