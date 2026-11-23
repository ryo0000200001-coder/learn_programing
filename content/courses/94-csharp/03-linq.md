---
title: LINQ ― データの問い合わせを C# の中で
level: 2
minutes: 18
concepts: [collections, higher_order, database]
summary: Where・Select・OrderBy・GroupBy・First・Any をつなげる LINQ。SQL によく似た from ... where ... select の書き方、FirstOrDefault と ?.、そして「数えるまで何もしない」遅延実行を実際に確かめる。Dictionary の TryGetValue。
---
## このレッスンのゴール

- `.Where(...).Select(...).ToList()` の LINQ を、左から順に説明できる
- `GroupBy`・`OrderBy`・`ThenBy`・`First`・`Any` を読める
- LINQ の遅延実行（`ToList()` や `Count()` まで動かない）が分かる

## LINQ とは

**LINQ**（リンク。Language Integrated Query）は、**リストなどのデータに、SQL のような問い合わせを C# の中で書ける** 仕組みです。2007 年に C# に入り、Java の Stream・Kotlin のコレクション操作などに大きな影響を与えました。

SQL コースと同じ 6 つの商品で試します。

```csharp
var products = new List<Product>
{
    new("りんご", "果物", 120), new("バナナ", "果物", 90),
    new("牛乳", "飲み物", 200), new("コーヒー豆", "飲み物", 1200),
    new("食パン", "パン", 250), new("クロワッサン", "パン", 180),
};

record Product(string Name, string Category, int Price);
```

## 絞って、変換して、集める

```csharp
var cheap = products.Where(p => p.Price < 200).Select(p => p.Name).ToList();
Console.WriteLine(string.Join(", ", cheap));   // りんご, バナナ, クロワッサン
Console.WriteLine(products.Sum(p => p.Price)); // 2040
```

| LINQ | 意味 | SQL | Python |
|---|---|---|---|
| `Where(p => 条件)` | 絞り込む | `WHERE` | `if 条件` |
| `Select(p => 式)` | 変換する | `SELECT 式` | `式 for p in ...` |
| `ToList()` | List に集める | （結果を取る） | `[...]` |
| `Sum(p => p.Price)` | 合計 | `SUM(price)` | `sum(...)` |
| `p => p.Price < 200` | ラムダ式 | | `lambda p: p.price < 200` |

LINQ の名前は、**SQL と同じ言葉** が多いのが特徴です（Java は `filter`・`map`、LINQ は `Where`・`Select`）。

## グループ・並べ替え・1 件

```csharp
foreach (var g in products.GroupBy(p => p.Category).OrderBy(g => g.Key))
    Console.WriteLine($"{g.Key}: {g.Count()} 個 平均 {g.Average(p => p.Price)}");
// パン: 2 個 平均 215
// 果物: 2 個 平均 105
// 飲み物: 2 個 平均 700
```

SQL コースのレッスン 3 の `GROUP BY category` と、同じ数になっています。`g.Key` がグループの値（カテゴリ）、`g` 自体がそのグループの商品の集まりです。

```csharp
var top = products.OrderByDescending(p => p.Price).First();
Console.WriteLine(top.Name);     // コーヒー豆

var sorted = products.OrderBy(p => p.Category).ThenByDescending(p => p.Price).Select(p => p.Name);
// 食パン クロワッサン りんご バナナ コーヒー豆 牛乳
```

| LINQ | SQL |
|---|---|
| `OrderBy(p => p.Category)` | `ORDER BY category` |
| `.ThenByDescending(p => p.Price)` | `, price DESC` |
| `First()` | `LIMIT 1`（無ければ例外） |
| `FirstOrDefault(...)` | `LIMIT 1`（無ければ null） |
| `Take(3)` / `Skip(3)` | `LIMIT 3` / `OFFSET 3` |
| `Any(...)` / `All(...)` | `EXISTS` / すべて |
| `Count()` | `COUNT(*)` |

```csharp
Console.WriteLine(products.FirstOrDefault(p => p.Price > 5000)?.Name ?? "なし");   // なし
Console.WriteLine(products.Any(p => p.Category == "肉") + " " + products.All(p => p.Price > 0));   // False True
```

`FirstOrDefault` は、見つからなければ **null** を返すので、レッスン 2 の `?.` と `??` を組み合わせて使います。

## SQL のような書き方（クエリ構文）

```csharp
var q = from p in products
        where p.Category == "パン"
        orderby p.Price
        select new { p.Name, WithTax = p.Price * 110 / 100 };

foreach (var x in q) Console.WriteLine($"{x.Name} {x.WithTax}");
// クロワッサン 198
// 食パン 275
```

`from ... where ... orderby ... select` と、**SQL に近い順番** で書く書き方もあります。中身は上の `Where(...).OrderBy(...).Select(...)` と同じです。`new { p.Name, WithTax = ... }` は、名前の無い型（匿名型）を その場で作っています。

## 遅延実行：数えるまで何もしない

```csharp
var lazy = products.Where(p => { Console.Write($"[{p.Name}を確認]"); return p.Price > 1000; });
Console.WriteLine("まだ何も確認していない");
Console.WriteLine(lazy.Count());
```

```text
まだ何も確認していない
[りんごを確認][バナナを確認][牛乳を確認][コーヒー豆を確認][食パンを確認][クロワッサンを確認]1
```

`Where(...)` を書いた時点では、**まだ 1 つも確認していません**。`Count()` を呼んで、初めて実行されました。これを **遅延実行** と呼びます（Rust のイテレータ、Java の Stream、Python のジェネレーター式も同じ）。

⚠️ そのため、**同じ `lazy` を 2 回使うと、2 回とも最初から実行されます**。データベースへの問い合わせ（下の EF Core）だと、2 回 SQL が走ります。何度も使うなら `ToList()` で一度だけ集めておきます。

## Dictionary

```csharp
var stock = new Dictionary<string, int> { ["りんご"] = 10 };
stock["バナナ"] = 3;
Console.WriteLine(stock.TryGetValue("ぶどう", out var n) ? n : -1);   // -1
stock["ぶどう"];   // KeyNotFoundException
```

| 書き方 | 無いキーのとき | Python |
|---|---|---|
| `d["k"]` | **KeyNotFoundException** | `d["k"]`（KeyError） |
| `d.TryGetValue("k", out var v)` | false を返す（v は 0） | `d.get("k")` |
| `d.GetValueOrDefault("k", 0)` | 0 | `d.get("k", 0)` |
| `d.ContainsKey("k")` | false | `"k" in d` |

`out var n` は、「**結果を n に書いて返して**」という書き方です（C 言語コースの「番地を渡して結果を書いてもらう」と同じ考え方）。

## データベースでも LINQ

C# の ORM の **Entity Framework Core**（EF Core）では、**同じ LINQ が SQL に変換されます**。

```csharp
var tasks = await db.Tasks
    .Where(t => t.UserId == userId && !t.Done)
    .OrderByDescending(t => t.CreatedAt)
    .Take(20)
    .ToListAsync();
// → SELECT ... FROM Tasks WHERE UserId = @p0 AND Done = 0 ORDER BY CreatedAt DESC LIMIT 20
```

値は `@p0` のようなパラメータで渡されるので、SQL インジェクションの心配はありません。⚠️ `.Include(t => t.User)` を忘れてループの中で `t.User.Name` を使うと、N+1（データベース設計のコースのレッスン 6）になります。

## AI のコードではこう出てくる

| 見かけたら | 読み方・チェック |
|---|---|
| `.Where(...).Select(...).ToList()` | 絞って変換して List に |
| `.First()` | ⚠️ 無ければ例外。無いことがあるなら `FirstOrDefault` |
| `.Count() > 0` | `.Any()` のほうが速い（1 つ見つかれば終わる） |
| 同じ LINQ の変数を何度も `foreach` | 毎回実行される。`ToList()` しておく |
| `.Include(x => x.Items)` | EF Core で関係するデータもまとめて読む（N+1 を防ぐ） |
| `FromSqlRaw($"... {input} ...")` | ⚠️ SQL インジェクション。`FromSqlInterpolated` かパラメータに |

```quiz
? `products.Where(p => p.Price < 200).Select(p => p.Name).ToList()` に当たる SQL は？
+ `SELECT name FROM products WHERE price < 200`
- `SELECT * FROM products ORDER BY price`
- `SELECT COUNT(*) FROM products WHERE price < 200`
> Where が WHERE、Select が SELECT の列に当たります。LINQ は SQL と同じ言葉を多く使います。

? `var q = products.Where(p => ...);` と書いた時点で、条件の確認は行われている？
- はい、すべての商品で確認済み
+ いいえ、Count() や ToList() などで結果が必要になったときに初めて実行される
- 最初の 1 つだけ確認されている
> LINQ は遅延実行です。実際に、Count() を呼ぶまで 1 つも確認されませんでした。

? 見つからないかもしれないときに使うのは？
- `First()`
+ `FirstOrDefault()`
- `Single()`
> First は見つからないと例外です。FirstOrDefault は null を返すので、`?.` や `??` と組み合わせます。
```
