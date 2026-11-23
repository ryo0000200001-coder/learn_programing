---
title: エラーを値で返す ― if err != nil
level: 2
minutes: 18
concepts: [errors, functions]
summary: Go には try/except が無く、エラーは戻り値の最後で返して if err != nil で確かめる。fmt.Errorf の %w で包む、errors.Is で種類を見分ける、defer で後片付け、panic との違い。err を _ で捨てる危険。
---
## このレッスンのゴール

- `値, err := 関数()` と `if err != nil { ... }` の流れを読める
- `fmt.Errorf("...: %w", err)` と `errors.Is` の意味が分かる
- `defer` の動きと、`panic` との違いを説明できる

## Go には例外が無い

Python では、失敗すると **例外** が飛んで、`try / except` で受け止めました。Go には例外の仕組みがありません。代わりに、**失敗したかどうかを、戻り値で返します**。

```go
n, err := strconv.Atoi("12a")      // 文字列を数に変換
fmt.Println(n, err)
// 0 strconv.Atoi: parsing "12a": invalid syntax
```

| 戻り値 | 成功したとき | 失敗したとき |
|---|---|---|
| 1 つ目（n） | 変換した数 | ゼロ値（0） |
| 2 つ目（err） | **`nil`**（エラー無し） | エラーの内容 |

**最後の戻り値が `error` 型** なのが Go の決まりです。そして、呼んだ側は必ずこう確かめます。

```go
n, err := strconv.Atoi(s)
if err != nil {
	return 0, err        // 失敗したら、呼んだ人にそのまま返す
}
// ここから下は、成功したときだけ
```

Python で書くと、こうです。

```python
try:
    n = int(s)
except ValueError as e:
    raise e
```

Go のコードに `if err != nil` が何十回も出てくるのはこのためです。最初はくどく見えますが、**どこで失敗しうるかが、コードを見れば全部分かる** という良さがあります。

## 自分でエラーを返す

```go
var ErrNotFound = errors.New("商品が見つかりません")

func findPrice(name string) (int, error) {
	prices := map[string]int{"りんご": 120}
	p, ok := prices[name]
	if !ok {
		return 0, ErrNotFound
	}
	return p, nil
}

p, err := findPrice("ぶどう")
if err != nil {
	fmt.Println("エラー:", err, p)    // エラー: 商品が見つかりません 0
}
```

| 書き方 | 意味 |
|---|---|
| `errors.New("...")` | 新しいエラーを作る（Python の `raise ValueError("...")` の中身） |
| `var ErrNotFound = ...` | よく使うエラーに名前を付けておく（**センチネルエラー**）。`Err` で始める習慣 |
| `return 0, ErrNotFound` | 失敗：ゼロ値とエラー |
| `return p, nil` | 成功：値と nil |

## 種類を見分ける：errors.Is

```go
if errors.Is(err, ErrNotFound) {
	fmt.Println("→ 404 を返す")     // → 404 を返す
}
```

`errors.Is(err, 種類)` は「err は、この種類のエラーか？」を調べます。Python の `except NotFoundError:` で種類ごとに分けるのに当たります。Web API なら「見つからない → 404、それ以外 → 500」のように分けるのに使います。

## 包む：fmt.Errorf と %w

```go
func loadConfig(path string) (string, error) {
	data, err := os.ReadFile(path)
	if err != nil {
		return "", fmt.Errorf("設定を読めません（%s）: %w", path, err)
	}
	return string(data), nil
}

_, err = loadConfig("config.toml")
fmt.Println(err)
// 設定を読めません（config.toml）: open config.toml: no such file or directory
fmt.Println(errors.Is(err, os.ErrNotExist))
// true
```

`fmt.Errorf` で、**元のエラーに「何をしようとして失敗したか」を足して** 返しています。表示すると、外側から内側へ `:` でつながって読めます。

`%w`（wrap）で包むと、元のエラー（ファイルが無い `os.ErrNotExist`）が中に残るので、`errors.Is` で **包んだ後でも種類を見分けられます**。`%v` で包むと、ただの文字になってしまい、`errors.Is` が false になります。

Python の `raise ConfigError("...") from e` に当たります。

## defer：関数を抜けるときに実行

```go
f, err := os.Create("out.txt")
if err != nil {
	panic(err)
}
defer f.Close()                               // 関数を抜けるときに閉じる
defer fmt.Println("defer 1（後に登録したものが先）")
defer fmt.Println("defer 2")
fmt.Fprintln(f, "hello")
fmt.Println("main の終わり")
```

```text
main の終わり
defer 2
defer 1（後に登録したものが先）
```

`defer` を付けた処理は、**その関数が終わるときに** 実行されます。途中で `return` しても実行されるので、ファイルを閉じる・ロックを外す（レッスン 5）などの **後片付け** に使います。シェルコースの `trap ... EXIT`、Python の `with open(...)` や `finally` に当たります。複数あると、**後に書いたものから** 実行されます。

## panic：本当に続けられないとき

```go
panic(err)
```

`panic` は、プログラムを **止めて** しまいます（Python の、受け止められなかった例外のようなもの）。nil のポインタを読んだとき（レッスン 3）、スライスの範囲外を読んだとき（`items[10]`）も panic になります。

| | `return err` | `panic(err)` |
|---|---|---|
| 使う場面 | **ふつうの失敗**（ファイルが無い、入力がおかしい） | 起きるはずのないこと、起動時の致命的な設定ミス |
| 呼んだ側 | `if err != nil` で対応できる | 止まる（`recover` で受け止める特殊な方法はある） |

Web サーバーのリクエストの処理の中で panic を使うのは避けます。

## ⚠️ err を捨てる

```go
data, _ := os.ReadFile("config.toml")      // ⚠️ 失敗しても気づけない
```

`_` で err を受け取ると、**失敗を黙って無視** することになります。data は空のまま、何事も無かったように先へ進みます。シェルコースの「`set -e` が無いスクリプト」と同じ危険です。

## AI のコードではこう出てくる

| 見かけたら | 読み方・チェック |
|---|---|
| `if err != nil { return nil, err }` | 失敗をそのまま呼んだ人に返す（定番） |
| `if err != nil { return fmt.Errorf("ユーザー取得: %w", err) }` | ✅ 何をしていたかを足して返す |
| `x, _ := ...` | ⚠️ エラーを捨てている。本当に失敗しない？ |
| `if err != nil { log.Println(err) }` だけで先に進む | ⚠️ ログに出すだけで処理を続けている。続けて大丈夫か |
| `errors.Is(err, sql.ErrNoRows)` | データベースで行が見つからなかった（→ 404 にすることが多い） |
| `log.Fatal(err)` | ログに出して **プログラムを終了**。main の起動時以外で使っていたら要注意 |
| `defer rows.Close()` / `defer mu.Unlock()` | 後片付け。付け忘れると、接続やロックが残り続ける |

```quiz
? Go の関数 `func Load() (Config, error)` が成功したとき、2 つ目の戻り値は？
+ nil
- true
- 空の文字列
> 成功したときの error は nil です。呼んだ側は `if err != nil` で失敗かどうかを確かめます。

? `fmt.Errorf("設定を読めません: %w", err)` で `%w` を使う利点は？
- エラーメッセージが短くなる
+ 元のエラーが中に残り、包んだ後でも `errors.Is` で種類を見分けられる
- エラーが自動で直る
> `%w` で包むと元のエラーをたどれます。`%v` だと文字になってしまい、種類を見分けられません。

? `defer f.Close()` はいつ実行される？
- すぐに
- プログラム全体が終わるときに
+ その関数が終わるとき（途中で return しても）
> defer はその関数を抜けるときに実行されます。後片付けを書き忘れないための仕組みです。
```
