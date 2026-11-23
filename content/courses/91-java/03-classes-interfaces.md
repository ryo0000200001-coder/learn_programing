---
title: クラス・インターフェース・record
level: 2
minutes: 18
concepts: [classes, types, generics]
summary: フィールドとコンストラクタと this、private と getter、@Override、extends と super、interface と default メソッド、データを入れるだけの record（Java 16 から）。Python の dataclass との比較。
---
## このレッスンのゴール

- クラスのフィールド・コンストラクタ・メソッド・`this` を読める
- `private` と getter、`@Override`、`extends`・`implements` の意味が分かる
- `record` が何を自動で用意してくれるか説明できる

## クラスの例

```java
interface HasPrice {
    int price();
    default String label() { return price() + " 円"; }
}

class Product implements HasPrice {
    private final String name;
    private int basePrice;

    Product(String name, int basePrice) {
        this.name = name;
        this.basePrice = basePrice;
    }

    public String getName() { return name; }

    @Override
    public int price() { return basePrice * 110 / 100; }

    void discount(int yen) {
        if (yen > basePrice) throw new IllegalArgumentException("値引きが大きすぎます: " + yen);
        basePrice -= yen;
    }

    @Override
    public String toString() { return name + "（" + price() + " 円）"; }
}
```

```java
Product apple = new Product("りんご", 120);
System.out.println(apple.getName() + " " + apple.price() + " " + apple.label());   // りんご 132 132 円
apple.discount(20);
System.out.println(apple);                                                         // りんご（110 円）
```

| 部分 | 意味 | Python で言うと |
|---|---|---|
| `private final String name;` | **フィールド**（オブジェクトが持つデータ）。private で外から見えず、final で変えられない | `self._name`（ただし本当に見えない） |
| `Product(String name, int basePrice) { ... }` | **コンストラクタ**。クラスと同じ名前で、戻り値の型を書かない | `__init__` |
| `this.name = name;` | 自分のフィールドに、引数の値を入れる | `self.name = name` |
| `new Product(...)` | 作る | `Product(...)` |
| `public String getName()` | **getter**。private のフィールドを読むためのメソッド | `@property` |
| `@Override` | 「親やインターフェースのメソッドを上書きしています」という印。名前を打ち間違えるとコンパイルエラーにしてくれる | — |
| `toString()` | 表示の仕方（`println(apple)` で使われる） | `__str__` |
| `throw new IllegalArgumentException(...)` | 例外を投げる（レッスン 4） | `raise ValueError(...)` |

### private と getter

```java
System.out.println(p.basePrice);
```

```text
Priv.java:2: error: basePrice has private access in Product
```

PHP（PHP コースのレッスン 3）と同じく、private は **コンパイルエラー** になります。Java では、フィールドを private にして、必要なものだけ `getName()` のような getter で読めるようにする（**カプセル化**）のが定番です。AI の Java のコードに `getXxx()` / `setXxx()` がたくさん並んでいるのはこのためです。

## 継承

```java
class Set extends Product {
    Set(String name, int basePrice) { super(name, basePrice); }

    @Override
    public int price() { return super.price() - 50; }
}
```

| 部分 | 意味 | Python で言うと |
|---|---|---|
| `class Set extends Product` | Product を継承 | `class Set(Product):` |
| `super(name, basePrice)` | 親のコンストラクタを呼ぶ | `super().__init__(...)` |
| `super.price()` | 親のメソッドを呼ぶ | `super().price()` |

Java のクラスは、**親を 1 つしか持てません**（多重継承できない）。その代わりに、インターフェースを何個でも実装できます。

## インターフェース

```java
interface HasPrice {
    int price();                                         // 中身の無いメソッド：必ず実装する
    default String label() { return price() + " 円"; }   // default：中身付き。実装しなくてよい
}
```

```java
List<HasPrice> items = new ArrayList<>();
items.add(apple);
items.add(new Set("詰め合わせ", 1000));
for (HasPrice item : items) {
    System.out.println(item + " / " + item.getClass().getSimpleName());
}
// りんご（110 円） / Product
// 詰め合わせ（1050 円） / Set
```

`List<HasPrice>` には、HasPrice を実装したものなら何でも入れられます。Rust のトレイト（Rust コースのレッスン 5）の `Vec<Box<dyn Shape>>` と同じ考え方で、Java は最初からこれが普通にできます。

| 言語 | 「このメソッドを持つ」の約束 | 宣言の仕方 |
|---|---|---|
| Java | `interface` | `implements HasPrice`（明示） |
| Go | `interface` | 書かない（メソッドがあれば自動） |
| Rust | `trait` | `impl Shape for Rect`（明示） |
| Python | `Protocol` / 抽象クラス | 書かなくてもよい（ダックタイピング） |

## record：データを入れるだけのクラス

```java
record Point(int x, int y) {
    double distance() { return Math.sqrt(x * x + y * y); }
}

Point p = new Point(3, 4);
System.out.println(p + " " + p.x() + " " + p.distance() + " " + p.equals(new Point(3, 4)));
// Point[x=3, y=4] 3 5.0 true
```

`record`（Java 16 から）は、1 行書くだけで、**コンストラクタ・getter（`x()`）・`toString`・`equals`・`hashCode` を自動で作ってくれます**。中身は変えられません。

Python の `@dataclass(frozen=True)`、Rust の `#[derive(Debug, Clone, PartialEq)]` とほぼ同じです。前のレッスンの「equals で比べる」も、record なら中身で比べてくれます（`p.equals(new Point(3, 4))` が true）。

昔の Java では、同じことをするのに 30 行くらい（フィールド・コンストラクタ・getter・equals・hashCode・toString）書いていました。AI のコードや古いコードで、**Lombok** の `@Data`・`@Getter` というアノテーションを見たら、それを自動で作るためのライブラリです。

## AI のコードではこう出てくる

| 見かけたら | 読み方 |
|---|---|
| `private final UserRepository repository;` ＋ コンストラクタで受け取る | 必要な部品を外から受け取る（依存性注入。レッスン 6） |
| `getName()` / `setName(...)` が並ぶ | getter・setter。private のフィールドを読み書きする窓口 |
| `@Data` / `@Getter` / `@Builder`（Lombok） | getter などを自動で作る |
| `public record UserDto(String name, String email) {}` | API で受け渡すデータの形（DTO） |
| `abstract class` | 一部のメソッドの中身を子に任せる親クラス（そのままでは new できない） |
| `equals` を上書きしているのに `hashCode` を上書きしていない | ⚠️ HashMap などで正しく動かない。両方そろえる（record なら自動） |

```quiz
? Java のクラスで、コンストラクタの見分け方は？
+ クラスと同じ名前で、戻り値の型が書かれていないメソッド
- `__init__` という名前のメソッド
- `constructor` というキーワードで始まるもの
> `Product(String name, int price) { ... }` のように、クラス名と同じで戻り値の型が無いものがコンストラクタです。

? `@Override` を付ける主な理由は？
- メソッドを速くするため
+ 親やインターフェースのメソッドを上書きしていることを示し、名前の打ち間違いをコンパイルエラーにしてもらうため
- メソッドを private にするため
> `@Override` を付けたのに上書きする元が無ければ、コンパイラが教えてくれます。

? `record Point(int x, int y) {}` が自動で用意してくれないものは？
- `x()` と `y()` で値を読むメソッド
- 中身で比べる `equals`
+ x の値を後から変える `setX` メソッド
> record の中身は変えられません。コンストラクタ・読むメソッド・equals・hashCode・toString は自動で作られます。
```
