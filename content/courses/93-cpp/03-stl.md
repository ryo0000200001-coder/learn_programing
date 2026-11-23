---
title: STL ― vector・map と algorithm
level: 2
minutes: 18
concepts: [collections, higher_order, generics]
summary: 標準の部品の集まり STL。伸び縮みする配列 vector、並んだ辞書 map と速い unordered_map、範囲 for、sort・accumulate・count_if とラムダ。map は「読むだけで追加される」、[] は範囲を確かめない、という 2 つの落とし穴を実際の結果で。
---
## このレッスンのゴール

- `std::vector`・`std::map` の基本の操作と範囲 for を読める
- `std::sort`・`std::accumulate` などの `begin(), end()` の書き方とラムダを読める
- `map[key]` で読むと追加される、`v[i]` は範囲を確かめない、という落とし穴が分かる

## vector：伸び縮みする配列

```cpp
#include <vector>

std::vector<int> prices = {120, 90, 200, 1200, 250, 180};
prices.push_back(80);
std::cout << prices.size() << " " << prices[0] << " " << prices.back() << "\n";   // 7 120 80

for (int p : prices) std::cout << p << " ";
// 120 90 200 1200 250 180 80
```

| C++ | Python | 意味 |
|---|---|---|
| `std::vector<int> v = {1, 2}` | `v = [1, 2]` | int の vector |
| `v.push_back(x)` | `v.append(x)` | 末尾に追加 |
| `v.size()` | `len(v)` | 数 |
| `v[0]` / `v.back()` | `v[0]` / `v[-1]` | 最初／最後 |
| `for (int p : v)` | `for p in v:` | **範囲 for** |
| `for (const auto& p : v)` | `for p in v:` | コピーせずに借りて回す（大きな要素なら、この形） |

`std::vector` は、C 言語コースの「`malloc` と `realloc` で伸ばす配列」を、**RAII（レッスン 2）で包んだもの** です。足りなくなったら自動で広い場所に引っ越し、範囲を抜けたら自動で返します。`<int>` は Java・Rust と同じジェネリクス（ここでは **テンプレート** と呼ぶ。レッスン 5）です。

### ⚠️ [] は範囲を確かめない

```cpp
std::vector<int> v = {1, 2, 3};
try { std::cout << v.at(10); } catch (const std::out_of_range& e) { std::cout << "at(10): out_of_range\n"; }
std::cout << "v[10] = " << v[10] << "（範囲を確かめない）\n";
```

```text
at(10): out_of_range
v[10] = 120（範囲を確かめない）
```

| 書き方 | 範囲外のとき |
|---|---|
| `v.at(10)` | **例外**（`std::out_of_range`）を投げる |
| `v[10]` | **確かめない**。隣のメモリの値（ここでは 120）を読んでしまう |

C の配列と同じ危険が、`[]` には残っています（速さのため）。AddressSanitizer を付けてコンパイルすると、`heap-buffer-overflow ... READ of size 4 ... in main a3.cpp:41` と、その行で止めてくれました。

## algorithm：begin と end

```cpp
#include <algorithm>
#include <numeric>

std::sort(prices.begin(), prices.end());
std::cout << "sort: " << prices.front() << ".." << prices.back() << "\n";   // sort: 80..1200

int total = std::accumulate(prices.begin(), prices.end(), 0);
auto cheap = std::count_if(prices.begin(), prices.end(), [](int p) { return p < 200; });
std::cout << "total=" << total << " cheap=" << cheap << "\n";              // total=2120 cheap=4
```

| C++ | Python |
|---|---|
| `std::sort(v.begin(), v.end())` | `v.sort()` |
| `std::accumulate(v.begin(), v.end(), 0)` | `sum(v)` |
| `std::count_if(..., 条件)` | `sum(1 for p in v if 条件)` |
| `std::find(v.begin(), v.end(), x)` | `x in v` / `v.index(x)` |
| `std::max_element(...)` | `max(v)` |

`v.begin()` と `v.end()` は **イテレータ**（「どこからどこまで」の印）で、STL の関数は「この範囲に対して」処理する、という形をしています。C++20 からは `std::ranges::sort(prices);` のように、範囲そのものを渡す書き方もできます。

### ラムダ式

```cpp
[](int p) { return p < 200; }
```

| 部分 | 意味 |
|---|---|
| `[]` | **キャプチャ**：外の変数のうち、何を中で使うか（レッスン 5） |
| `(int p)` | 引数 |
| `{ return ...; }` | 本体 |

Python の `lambda p: p < 200`、JavaScript の `p => p < 200`、Rust の `|p| p < 200` です。並べ替えの順番も、ラムダで決めます。

```cpp
std::sort(products.begin(), products.end(),
          [](const Product& a, const Product& b) { return a.price > b.price; });
// コーヒー豆 食パン 牛乳 クロワッサン りんご バナナ
```

「a を b より前に置くなら true」を返す関数を渡します。`a.price > b.price` なので値段の高い順です。

## map：辞書

```cpp
#include <map>

std::map<std::string, int> stock;
stock["りんご"] = 10;
stock["りんご"] += 5;
stock["バナナ"] += 3;
std::cout << "size=" << stock.size() << "\n";   // size=2

for (const auto& [name, n] : stock) std::cout << name << "=" << n << " ";
```

| C++ | Python |
|---|---|
| `std::map<std::string, int> m` | `m: dict[str, int] = {}` |
| `m["k"] = v` | `m["k"] = v` |
| `m.contains("k")`（C++20）/ `m.count("k")` | `"k" in m` |
| `m.find("k")` → 見つからなければ `m.end()` | `m.get("k")` |
| `for (const auto& [k, v] : m)` | `for k, v in m.items():` |

`std::map` は、**キーの順番に並んでいる** 辞書です（中は木の形）。順番がいらず、速さが欲しいときは `std::unordered_map`（中はハッシュ表。Python の dict に近い）を使います。

### ⚠️ [] で読むと、追加されてしまう

```cpp
std::cout << "ぶどう: " << stock["ぶどう"] << " → size=" << stock.size() << "\n";
// ぶどう: 0 → size=3
```

ぶどうの在庫を **読んだだけ** なのに、size が 2 から 3 に増えました。`map[key]` は、**キーが無ければ、値を 0（ゼロ値）にして追加してから返す** 決まりだからです。一覧に `ぶどう=0` が混ざりました。

```text
ぶどう=0 りんご=15 バナナ=3
```

| やりたいこと | 書き方 |
|---|---|
| あるかどうか | `m.contains("ぶどう")` / `m.count("ぶどう")` |
| 読むだけ（無ければ例外） | `m.at("ぶどう")` |
| 読むだけ（無いことも扱う） | `if (auto it = m.find("ぶどう"); it != m.end()) { it->second ... }` |

Go のマップは「無ければゼロ値を返す（追加はしない）」、Python は `KeyError`、Rust は `Option` でした（それぞれのコースのレッスンを参照）。C++ の `[]` は、**読むだけで中身が変わる** 点が独特です。数を数えるとき（`byCat[p.category]++`）には便利ですが、「あるか確かめる」のに使うとバグになります。

## AI のコードではこう出てくる

| 見かけたら | 読み方・チェック |
|---|---|
| `std::vector<Foo> items; items.push_back(...)` | 伸び縮みする配列 |
| `items.reserve(1000)` | 先に場所を確保しておく（引っ越しを減らして速く） |
| `for (auto& x : items)` / `for (const auto& x : items)` | 書き換えながら／見るだけで回す |
| `if (m[key] == ...)` | ⚠️ 無いキーが追加される。`contains`・`find` に |
| `v[i]` でループの外の番号 | ⚠️ 範囲を確かめない。`at()` か、ループの条件を確認 |
| `std::sort(v.begin(), v.end(), [](auto& a, auto& b) { ... })` | 並べ替えの順番をラムダで |
| `auto it = std::find(...); if (it != v.end())` | 見つかったか（end は「見つからなかった」の印） |

```quiz
? `std::map<std::string, int> m;` が空のとき、`std::cout << m["x"];` の後の `m.size()` は？
- 0
+ 1
- エラーで止まる
> map の [] は、キーが無ければ 0 を入れて追加してから返します。読むだけで中身が増えるので、あるかどうかは contains や find で確かめます。

? `std::vector<int> v = {1, 2, 3};` で、`v.at(10)` と `v[10]` の違いは？
+ at は範囲外なら例外を投げ、[] は確かめずに隣のメモリを読んでしまう
- どちらも例外を投げる
- どちらも 0 を返す
> [] は速さのために範囲を確かめません。実際に、関係ない値（120）が読めてしまいました。

? `std::count_if(v.begin(), v.end(), [](int p) { return p < 200; })` は何を数える？
- v の要素の数
+ v のうち 200 未満の要素の数
- v の 200 番目までの要素の数
> begin から end までの範囲で、ラムダが true を返すものを数えます。Python の `sum(1 for p in v if p < 200)` です。
```
