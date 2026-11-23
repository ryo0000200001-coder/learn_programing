---
title: 配列と関数 ― リストも辞書も「配列」
level: 1
minutes: 18
concepts: [collections, functions, type_hints]
summary: PHP の配列は、リストと辞書を兼ねる。[] で追加、=> でキー、foreach、isset と ??、array_filter と array_map、json_encode。関数の型と strict_types、関数の中から外の変数が見えないスコープ。
---
## このレッスンのゴール

- PHP の配列（番号の配列・キーの配列）と `foreach` を読める
- `array_filter`・`array_map`・`json_encode` を読める
- 関数の型の書き方と、`declare(strict_types=1)`、スコープの違いが分かる

## 配列：リストと辞書が同じもの

```php
$fruits = ["りんご", "バナナ"];
$fruits[] = "みかん";                         // 末尾に追加
echo count($fruits), " ", $fruits[0], "\n";   // 3 りんご

$prices = ["りんご" => 120, "バナナ" => 90];
$prices["みかん"] = 80;
```

PHP には、Python のリストと辞書の区別がありません。どちらも **配列**（array）です。

| PHP | Python |
|---|---|
| `["りんご", "バナナ"]` | `["りんご", "バナナ"]`（リスト） |
| `["りんご" => 120]` | `{"りんご": 120}`（辞書） |
| `$a[] = "x"` | `a.append("x")` |
| `count($a)` | `len(a)` |
| `$a["りんご"]` | `a["りんご"]` |
| `unset($a["りんご"])` | `del a["りんご"]` |

番号の配列も、実は **0・1・2 というキーを自動で振った** キーの配列です。古いコードでは `array("りんご", "バナナ")` という書き方も見かけます（同じ意味）。

## foreach

```php
foreach ($prices as $name => $price) {
    echo "$name: $price 円\n";
}
```

```text
りんご: 120 円
バナナ: 90 円
みかん: 80 円
```

| PHP | Python |
|---|---|
| `foreach ($a as $v)` | `for v in a:` |
| `foreach ($a as $k => $v)` | `for k, v in a.items():` |

順番は **入れた順** が保たれます（Python 3.7 以降の辞書と同じ）。

## あるかどうか

```php
var_dump(isset($prices["ぶどう"]));            // bool(false)
var_dump($prices["ぶどう"] ?? 0);              // int(0)
var_dump(array_key_exists("りんご", $prices)); // bool(true)
```

| 書き方 | 意味 |
|---|---|
| `isset($a["k"])` | キーがあり、値が null ではない |
| `$a["k"] ?? 0` | 無ければ 0（レッスン 1） |
| `array_key_exists("k", $a)` | キーがある（値が null でも true） |
| `in_array("x", $a)` | 値として入っている（Python の `"x" in a`）。⚠️ ゆるい比較なので、`in_array("x", $a, true)` と第 3 引数を true に |

無いキーを `$prices["ぶどう"]` と直接読むと、`Undefined array key` という警告が出て null になります。

## 配列の関数

```php
$cheap = array_filter($prices, fn($p) => $p < 100);
$withTax = array_map(fn($p) => intdiv($p * 110, 100), $prices);
print_r($cheap);
print_r($withTax);
```

```text
Array
(
    [バナナ] => 90
    [みかん] => 80
)
Array
(
    [りんご] => 132
    [バナナ] => 99
    [みかん] => 88
)
```

| PHP | Python |
|---|---|
| `fn($p) => $p < 100` | `lambda p: p < 100`（アロー関数） |
| `array_filter($a, 条件)` | `{k: v for k, v in a.items() if 条件}` |
| `array_map(変換, $a)` | `{k: 変換(v) for k, v in a.items()}` |
| `array_keys($a)` / `array_values($a)` | `list(a.keys())` / `list(a.values())` |
| `usort($a, fn($x, $y) => $x <=> $y)` | `a.sort()`（`<=>` は大小を -1・0・1 で返す） |
| `implode("、", $a)` / `explode(",", $s)` | `"、".join(a)` / `s.split(",")` |
| `print_r($a)` | `print(a)`（人が読む形で表示） |

⚠️ `array_filter` と `array_map` は **引数の順番が逆**（filter は配列が先、map は関数が先）です。PHP の有名な不揃いなので、AI のコードを読むときは引数をよく見ましょう。

## JSON

```php
echo json_encode(["name" => "Ryo", "tags" => ["a", "b"]], JSON_UNESCAPED_UNICODE);
// {"name":"Ryo","tags":["a","b"]}

var_dump(json_decode('{"id": 1, "title": "牛乳"}', true));
// array(2) { ["id"]=> int(1)  ["title"]=> string(6) "牛乳" }
```

キーの配列は JSON のオブジェクトに、番号の配列は JSON の配列になります。`JSON_UNESCAPED_UNICODE` を付けないと、日本語が `牛乳` のように変換されます。`json_decode(..., true)` の `true` は「配列で返して」（付けないとオブジェクトになる）。

## 関数

```php
function withTax(int $price, float $rate = 0.1): int {
    return (int) round($price * (1 + $rate));
}

echo withTax(120), " ", withTax(120, 0.08), " ", withTax(rate: 0.08, price: 200);
// 132 130 216
```

| PHP | Python |
|---|---|
| `function withTax(int $price, float $rate = 0.1): int` | `def with_tax(price: int, rate: float = 0.1) -> int:` |
| `withTax(rate: 0.08, price: 200)` | `with_tax(rate=0.08, price=200)`（名前付き引数。PHP 8 から） |

### 型のチェックと strict_types

```php
function withTax(int $price): int { return intdiv($price * 110, 100); }
echo withTax("120");     // 132   ← 文字列 "120" が int に変換されて動いた
echo withTax("abc");     // TypeError: withTax(): Argument #1 ($price) must be of type int, string given
```

初期設定では、`"120"` のような **数っぽい文字列は自動で int に変換** されます。ファイルの先頭に `declare(strict_types=1);` を書くと、**変換せずに TypeError** にします。

```php
<?php
declare(strict_types=1);
...
withTax("120");   // TypeError: ... must be of type int, string given
```

Laravel などの今の PHP のコードには、たいてい書かれています。Python の型ヒントと違い、PHP の型は **実行したときに本当にチェックされます**。

### ⚠️ 関数の中から外の変数は見えない

```php
$total = 0;
function addBad($n) { $total += $n; return $total; }
echo addBad(5), " / total=", $total;
```

```text
PHP Warning:  Undefined variable $total in .../p2c.php on line 6
5 / total=0
```

PHP の関数の中からは、**外の変数が見えません**（Python なら読むことはできる）。関数の中の `$total` は別の（未定義の）変数として扱われ、外の `$total` は 0 のままでした。外の値は **引数で渡す** のが基本です（`global $total;` と書けば使えますが、古いコードの書き方です）。

アロー関数 `fn($p) => ...` だけは、外の変数を自動で使えます。`function () use ($rate) { ... }` の `use` は、無名関数に外の変数を持ち込む書き方です。

## AI のコードではこう出てくる

| 見かけたら | 読み方・チェック |
|---|---|
| `$data = json_decode($body, true);` | JSON を配列に。`$data['title'] ?? ''` で取り出す |
| `array_filter($a)`（条件なし） | 「空っぽ・0・"0"・null」を全部取り除く。⚠️ 0 も消える |
| `in_array($x, $list)` | ⚠️ ゆるい比較。第 3 引数 `true` があるか |
| `foreach ($items as &$item)` | `&` で **元の配列を書き換える**。ループの後に `unset($item)` が無いと、次のループで不思議なバグが起きる |
| `compact('a', 'b')` / `extract($arr)` | 変数と配列の変換。`extract` は外からの配列に使うと、変数を上書きされて危険 |

```quiz
? PHP の `$prices = ["りんご" => 120];` は、Python で言うと何？
- リスト `[120]`
+ 辞書 `{"りんご": 120}`
- タプル
> PHP の配列は、`=>` でキーを付けると辞書のように使えます。リストも辞書も、PHP では同じ「配列」です。

? `$total = 0; function add($n) { $total += $n; }` を呼んでも、外の `$total` が変わらない理由は？
+ PHP の関数の中からは外の変数が見えず、中の `$total` は別の変数だから
- `+=` が使えないから
- 関数が呼ばれていないから
> PHP の関数は外の変数を自動では使いません。引数で受け取り、戻り値で返すのが基本です。

? `declare(strict_types=1);` があるファイルで、`int` の引数に `"120"` を渡すと？
- 120 に変換されて動く
+ TypeError になる
- 0 になる
> strict_types=1 では、数っぽい文字列も自動で変換されません。無い場合は "120" が 120 に変換されて動きます。
```
