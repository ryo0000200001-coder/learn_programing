---
title: プロパティ・record・null 許容
level: 1
minutes: 18
concepts: [classes, types, errors]
summary: { get; set; } のプロパティ、読むだけのプロパティと => の計算プロパティ、オブジェクト初期化子、record と with、string? の null 許容の型と警告、?. と ?? と !、例外。
---
## このレッスンのゴール

- `public int Stock { get; set; }` のプロパティと、`=>` の計算プロパティを読める
- `record` と `with` の意味が分かる
- `string?`・`?.`・`??`・`!` と、null の警告（CS8602 など）が読める

## クラスとプロパティ

```csharp
public class Product
{
    private int _basePrice;

    public Product(string name, int basePrice)
    {
        Name = name;
        _basePrice = basePrice;
    }

    public string Name { get; }                      // 読むだけ
    public int Stock { get; set; }                   // 読み書きできる
    public int Price => _basePrice * 110 / 100;      // 計算して返す

    public void Discount(int yen)
    {
        if (yen > _basePrice) throw new ArgumentException($"値引きが大きすぎます: {yen}", nameof(yen));
        _basePrice -= yen;
    }

    public override string ToString() => $"{Name}（{Price} 円）";
}
```

```csharp
var apple = new Product("りんご", 120) { Stock = 5 };
Console.WriteLine($"{apple.Name} {apple.Price} {apple.Stock}");   // りんご 132 5
apple.Stock += 1;
apple.Discount(20);
Console.WriteLine(apple);                                         // りんご（110 円）
```

| 書き方 | 意味 | Python で言うと |
|---|---|---|
| `private int _basePrice;` | **フィールド**（中だけのデータ。`_` で始める習慣） | `self._base_price` |
| `public string Name { get; }` | **読むだけのプロパティ**（コンストラクタでだけ入れられる） | `@property` |
| `public int Stock { get; set; }` | **読み書きできるプロパティ** | 普通の属性 |
| `public int Price => ...;` | **計算プロパティ**：読むたびに計算 | `@property def price(self): return ...` |
| `new Product(...) { Stock = 5 }` | **オブジェクト初期化子**：作ると同時にプロパティを入れる | |
| `public override string ToString()` | 表示の仕方 | `__str__` |

Java では、private のフィールドと `getName()`・`setName()` を書いていました（Java コースのレッスン 3）。C# の **プロパティ** は、それを `{ get; set; }` だけで書けるようにしたものです。使う側は `apple.Stock += 1` と、**普通の変数のように** 読み書きできます（中では get と set のメソッドが呼ばれている）。

### 読むだけのプロパティに書くと

```csharp
var p = new P("x");
p.Name = "y";
```

```text
Program.cs(5,1): error CS0200: Property or indexer 'P.Name' cannot be assigned to -- it is read only
```

`{ get; }` だけのプロパティは、**コンパイルエラー** で書き換えを防ぎます。C# のエラーは `CS0200` のように番号が付いていて、番号で検索するとくわしい説明が見つかります。

## record：データを入れる型

```csharp
public record Item(string Name, int Price);

var milk = new Item("牛乳", 200);
var milk2 = milk with { Price = 180 };
Console.WriteLine($"{milk} {milk2} {milk == new Item("牛乳", 200)}");
// Item { Name = 牛乳, Price = 200 } Item { Name = 牛乳, Price = 180 } True
```

| 機能 | |
|---|---|
| `record Item(string Name, int Price)` | 1 行で、コンストラクタ・プロパティ・表示・比較を自動で作る（Java の record と同じ） |
| `==` | **中身で比べる**（別々に作っても True） |
| `milk with { Price = 180 }` | 一部だけ変えた **コピー** を作る（元の milk は変わらない） |

Python の `dataclasses.replace(milk, price=180)` が `with` に当たります。API で受け渡すデータ（DTO）によく使われます。

## null 許容の型

```csharp
string? maybe = null;
Console.WriteLine($"[{maybe?.Length}] [{maybe ?? "なし"}] [{maybe?.Length ?? 0}]");
// [] [なし] [0]
```

| 書き方 | 意味 | 他の言語では |
|---|---|---|
| `string?` | null **かもしれない** string | Python の `str \| None`、Kotlin の `String?` |
| `string` | null **ではない** string（`Nullable` が enable のとき） | |
| `x?.Length` | x が null なら null、そうでなければ Length | JavaScript・PHP・Ruby の `?.` / `&.` |
| `x ?? "なし"` | x が null なら右 | JavaScript・PHP の `??` |
| `x!` | 「**null ではないと保証します**」とコンパイラに伝える | Kotlin の `!!`、Rust の `unwrap` に近い |

### コンパイラが null を警告する

```csharp
string? FindName(int id) => id == 1 ? "Ryo" : null;
string name = FindName(2);
Console.WriteLine(name.Length);
```

```text
Program.cs(2,15): warning CS8600: Converting null literal or possible null value to non-nullable type.
Program.cs(3,19): warning CS8602: Dereference of a possibly null reference.
```

| 警告 | 意味 |
|---|---|
| CS8600 | null かもしれない値を、null ではない型（`string`）に入れている |
| CS8602 | null かもしれないものの中身を使っている（`.Length`） |

`.csproj` の `<Nullable>enable</Nullable>` があると、コンパイラが **null で落ちそうな場所を警告** してくれます。Rust の Option や Kotlin の `?` ほど厳しくはなく、**警告なので実行はできてしまいます**（C 言語コースの「警告を無視しない」と同じ注意が必要）。

### ! で黙らせると

```csharp
try { Console.WriteLine(maybe!.Length); }
catch (NullReferenceException e) { Console.WriteLine($"{e.GetType().Name}: {e.Message}"); }
// NullReferenceException: Object reference not set to an instance of an object.
```

`maybe!` と書くと警告は消えますが、**本当に null なら NullReferenceException** で止まります（Java の NullPointerException）。AI のコードで `!` がたくさんあったら、「警告を消すためだけに付けていないか」を確かめます。

## 例外

```csharp
try { apple.Discount(9999); }
catch (ArgumentException e) { Console.WriteLine($"ArgumentException: {e.Message}"); }
finally { Console.WriteLine("finally"); }
// ArgumentException: 値引きが大きすぎます: 9999 (Parameter 'yen')
// finally
```

Java とほぼ同じ `try / catch / finally` です。⚠️ ただし、C# には Java の **検査例外が無い** ので、`throws` を書く必要はありません（Python と同じ）。`nameof(yen)` は、変数名を文字列にする書き方で、メッセージに `(Parameter 'yen')` と出ています。

## AI のコードではこう出てくる

| 見かけたら | 読み方・チェック |
|---|---|
| `public string Name { get; set; } = "";` | 初期値付きのプロパティ |
| `public required string Email { get; init; }` | 作るときに必ず入れる（required）、作った後は変えられない（init） |
| `public record UserDto(string Name, string Email);` | API で受け渡すデータの形 |
| `user!.Name` / `= null!;` | ⚠️ null の警告を黙らせている。本当に null にならない？ |
| `if (user is null) return NotFound();` | ✅ null の確認（`is null` は C# でよく使う書き方） |
| `catch (Exception) { }` | ⚠️ 例外を握りつぶしている |

```quiz
? C# の `public int Stock { get; set; }` は何？
+ 読み書きできるプロパティ（使う側は普通の変数のように扱える）
- 読むだけのフィールド
- Stock というメソッド
> プロパティは、Java の getter と setter を短く書いたものです。`apple.Stock += 1` のように使えます。

? `var b = a with { Price = 180 };`（a は record）の結果は？
- a の Price が 180 に変わる
+ Price だけ 180 にした a のコピーが b に入り、a は変わらない
- エラーになる
> with は一部を変えたコピーを作ります。元の record は変わりません。

? `string name = FindName(2);` に CS8600 の警告が出た。意味は？
- FindName が存在しない
+ null かもしれない値を、null ではない型 string に入れようとしている
- 文字列が長すぎる
> FindName は `string?`（null かもしれない）を返します。`string? name = ...` にして null の場合を扱うのが正しい直し方です。
```
