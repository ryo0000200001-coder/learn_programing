---
title: コレクションと Stream
level: 3
minutes: 20
concepts: [collections, higher_order, generics]
summary: List・Map とジェネリクス <String>、List.of は変更できない、ループの中で消すと起きること、Stream の filter・map・collect、groupingBy での集計、Comparator での並べ替え、メソッド参照 Product::name。SQL や Python と並べて読む。
---
## このレッスンのゴール

- `List<String>`・`Map<String, Integer>` とよく使う操作を読める
- `.stream().filter(...).map(...).collect(...)` を左から順に説明できる
- `Collectors.groupingBy` での集計と、`Product::name` のようなメソッド参照が分かる

## List と Map

```java
List<String> fruits = new ArrayList<>(List.of("りんご", "バナナ"));
fruits.add("みかん");
System.out.println(fruits + " " + fruits.get(0) + " " + fruits.size() + " " + fruits.contains("バナナ"));
// [りんご, バナナ, みかん] りんご 3 true

Map<String, Integer> stock = new HashMap<>();
stock.put("りんご", 10);
stock.merge("りんご", 5, Integer::sum);
stock.merge("バナナ", 3, Integer::sum);
System.out.println(stock.get("りんご") + " " + stock.get("ぶどう") + " " + stock.getOrDefault("ぶどう", 0));
// 15 null 0
```

| Java | Python |
|---|---|
| `List<String> x = new ArrayList<>()` | `x: list[str] = []` |
| `x.add(v)` / `x.get(0)` / `x.size()` | `x.append(v)` / `x[0]` / `len(x)` |
| `Map<String, Integer> m = new HashMap<>()` | `m: dict[str, int] = {}` |
| `m.put(k, v)` / `m.get(k)` | `m[k] = v` / `m.get(k)` |
| `m.getOrDefault(k, 0)` | `m.get(k, 0)` |
| `m.merge(k, 5, Integer::sum)` | `m[k] = m.get(k, 0) + 5`（数える定番。Rust の `entry().or_insert()`） |

`<String>` の部分が **ジェネリクス**（TypeScript・Rust と同じ）で、「String を入れる List」という意味です。`new ArrayList<>()` の `<>` は、左から型を推論してもらう書き方です。

`List`・`Map` はインターフェース（レッスン 3）、`ArrayList`・`HashMap` はその実装です。**左にインターフェース、右に実装** と書くのが定番です。

### List.of は変更できない

```java
List<String> fixed = List.of("a");
fixed.add("b");
// UnsupportedOperationException
```

`List.of(...)`・`Map.of(...)` で作ったものは **中身を変えられません**（イミュータブル）。変えたいなら `new ArrayList<>(List.of(...))` で、変えられる List に入れ直します（上の fruits はこの形）。

### ⚠️ ループの中で消す

```java
List<Integer> x = new ArrayList<>(List.of(1, 2, 3));
for (Integer n : x) { if (n == 1) x.remove(n); }
// ConcurrentModificationException

List<Integer> y = new ArrayList<>(List.of(1, 2, 3));
for (Integer n : y) { if (n == 2) y.remove(n); }
// エラーなし。y は [1, 3]（3 は一度もループで見られていない）
```

for で回している最中に List から消すと、**例外になることもあれば、エラーにならずに要素を飛ばしてしまうこともあります**（どちらも実際に起きた結果です）。消すときは `removeIf` を使います。

```java
nums.removeIf(n -> n == 3);
```

Python でもループ中に `list.remove` すると要素を飛ばすので、同じ注意が必要です。

## Stream：データの流れ作業

このコースの商品のデータで試します（SQL コースと同じ 6 つの商品）。

```java
record Product(String name, String category, int price) {}

List<String> cheap = products.stream()
    .filter(p -> p.price() < 200)
    .map(Product::name)
    .collect(Collectors.toList());
System.out.println(cheap);                         // [りんご, バナナ, クロワッサン]

int total = products.stream().mapToInt(Product::price).sum();
System.out.println(total);                         // 2040
```

| 部分 | 意味 | Python で言うと |
|---|---|---|
| `.stream()` | 流れ作業を始める | — |
| `.filter(p -> p.price() < 200)` | 条件に合うものだけ | `if p.price < 200` |
| `.map(Product::name)` | 1 つずつ変換 | `p.name for ...` |
| `.collect(Collectors.toList())` / `.toList()` | List に集める | `[...]` |
| `.mapToInt(...).sum()` | 数にして合計 | `sum(...)` |
| `p -> p.price() < 200` | **ラムダ式**（その場の関数） | `lambda p: p.price < 200` |
| `Product::name` | **メソッド参照**。`p -> p.name()` の短い書き方 | `attrgetter("name")` |

Python で書くと `[p.name for p in products if p.price < 200]`。JavaScript の `products.filter(...).map(...)`、Rust の `.iter().filter(...).map(...).collect()` と、**どの言語もほぼ同じ形** です。

### groupingBy：グループごとに集計

```java
Map<String, Long> countByCat = products.stream()
    .collect(Collectors.groupingBy(Product::category, TreeMap::new, Collectors.counting()));
System.out.println(countByCat);    // {パン=2, 果物=2, 飲み物=2}

Map<String, Double> avgByCat = products.stream()
    .collect(Collectors.groupingBy(Product::category, TreeMap::new, Collectors.averagingInt(Product::price)));
System.out.println(avgByCat);      // {パン=215.0, 果物=105.0, 飲み物=700.0}
```

SQL コースのレッスン 3 の結果と、まったく同じ数になっています。

```sql
SELECT category, COUNT(*), AVG(price) FROM products GROUP BY category;
```

| groupingBy の引数 | 意味 |
|---|---|
| `Product::category` | 何でグループに分けるか（`GROUP BY category`） |
| `TreeMap::new` | 結果をキーの順に並べた Map にする（無ければ HashMap で順番はばらばら） |
| `Collectors.counting()` / `averagingInt(...)` | グループごとに何を計算するか（`COUNT(*)` / `AVG(price)`） |

### 並べ替え・最大

```java
Optional<Product> top = products.stream().max(Comparator.comparingInt(Product::price));
System.out.println(top.map(Product::name).orElse("なし"));    // コーヒー豆

List<Product> sorted = products.stream()
    .sorted(Comparator.comparing(Product::category)
                      .thenComparing(Product::price, Comparator.reverseOrder()))
    .toList();
// 食パン クロワッサン りんご バナナ コーヒー豆 牛乳
```

`Comparator.comparing(...).thenComparing(..., reverseOrder())` は、SQL の `ORDER BY category, price DESC`（SQL コースのレッスン 2）と同じで、結果の順番も同じでした。`max` は空かもしれないので、レッスン 4 の Optional で返ってきます。

```java
String joined = products.stream().map(Product::name).limit(3).collect(Collectors.joining("、"));
// りんご、バナナ、牛乳
```

`limit(3)` は SQL の `LIMIT 3`、`joining("、")` は Python の `"、".join(...)` です。

## AI のコードではこう出てくる

| 見かけたら | 読み方・チェック |
|---|---|
| `.stream().filter(...).map(...).toList()` | 絞って変換して List に |
| `Collectors.groupingBy(X::getY)` | Y ごとにまとめた Map |
| `.forEach(System.out::println)` | 1 つずつ表示 |
| `.findFirst().orElseThrow()` | 最初の 1 つ。無ければ例外 |
| ループの中で `list.remove(...)` | ⚠️ 例外か、要素の飛ばし。`removeIf` に |
| `List.of(...)` に `add` | ⚠️ UnsupportedOperationException |
| `.parallelStream()` | 複数のスレッドで並行に処理。中で共有の変数を書き換えるとデータ競合（Go コースのレッスン 5） |

```quiz
? `products.stream().filter(p -> p.price() < 200).map(Product::name).toList()` を Python で書くと？
+ `[p.name for p in products if p.price < 200]`
- `[p for p in products if p.name < 200]`
- `sum(p.price for p in products)`
> filter で値段が 200 未満のものに絞り、map で名前に変換して List に集めています。

? `Product::name` は何の短い書き方？
- Product クラスの name というフィールドを直接読む
+ `p -> p.name()`（各要素の name メソッドを呼ぶラムダ式）
- Product の静的な定数 name
> `クラス::メソッド` はメソッド参照で、ラムダ式を短く書いたものです。

? `Collectors.groupingBy(Product::category, Collectors.counting())` に当たる SQL は？
- `SELECT category FROM products ORDER BY category`
+ `SELECT category, COUNT(*) FROM products GROUP BY category`
- `SELECT COUNT(DISTINCT category) FROM products`
> category でグループに分け、グループごとの数を数えています。実際の結果も SQL コースと同じでした。
```
