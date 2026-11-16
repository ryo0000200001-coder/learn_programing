---
title: テストで AI のコードを確かめる
level: 3
minutes: 15
concepts: [testing, ai_coding]
summary: テストコードの読み方と、AI にテストを書かせる意味。
---
## このレッスンのゴール

- テストコード（pytest など）を読んで、何を確かめているか説明できる
- 「テストが通った」の意味と限界が分かる

## テスト＝期待どおりか確かめるコード

```python
# calc.py
def add_tax(price: int, rate: float = 0.1) -> int:
    return round(price * (1 + rate))
```

```python
# test_calc.py
from calc import add_tax

def test_default_rate():
    assert add_tax(1000) == 1100

def test_custom_rate():
    assert add_tax(1000, 0.08) == 1080

def test_zero():
    assert add_tax(0) == 0
```

`assert 条件` は「この条件が真のはず。違ったら失敗として知らせて」という意味です。
`pytest` を実行すると、`test_` で始まる関数が全部実行されます。

```text
$ pytest
...                                   [100%]
3 passed in 0.01s
```

## テストは「仕様書」として読める

テストの名前と `assert` を読むだけで、**その関数が何をするはずか** が分かります。
AI が書いた知らないコードを理解するときも、テストから読むのは良い近道です。

## JavaScript / TypeScript では

```typescript
import { describe, it, expect } from "vitest";
import { addTax } from "./calc";

describe("addTax", () => {
  it("デフォルトは 10%", () => {
    expect(addTax(1000)).toBe(1100);
  });
});
```

`expect(実際の値).toBe(期待する値)` が Python の `assert 実際 == 期待` にあたります。

## AI にテストを書かせる意味

- AI が「できました」と言ったことを、**自動で確かめられる**
- あとで AI に別の変更を頼んだとき、**前の機能を壊していないか** すぐ分かる
- 頼み方の「完成の条件」を「このテストが通ること」と書ける

## ⚠️ テストの落とし穴

- **テストが通る ≠ 正しい**：テスト自体が間違っていることもある。`assert` の期待値が本当に正しいか読む
- **AI がテストの方を書き換えて通す** ことがある：コードを直すべきなのに、期待値を変えていないか diff で確認
- **境界の値** が抜けがち：0、空、マイナス、とても大きい数、日本語などを試しているか

```quiz
? `assert add(2, 3) == 5` が意味するのは？
+ add(2, 3) の結果は 5 のはずで、違えば失敗とする
- add(2, 3) に 5 を代入する
- add 関数を定義する
> assert は「この条件が成り立つはず」という確認です。

? テストが全部通った。言えることは？
- コードに一切バグがない
+ テストで確かめた範囲では期待どおり動いている
> テストしていない場面のバグは見つけられません。

? 失敗していたテストが、AI の修正後に通るようになった。diff で特に確認したいのは？
+ コードではなくテストの期待値を書き換えていないか
- テストの関数名が英語か
- 空行の数
> 期待値を変えれば、どんなコードでもテストは通ってしまいます。
```
