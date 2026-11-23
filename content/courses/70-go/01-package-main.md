---
title: package と main ― Go のプログラムの形
level: 1
minutes: 14
concepts: [basics, modules, tooling]
summary: Go のプログラムの基本の形（package main・import・func main）、go run と go build、1 つのファイルになる実行ファイル。使っていない import や変数がエラーになる厳しさ。
---
## このレッスンのゴール

- `package main`・`import`・`func main()` の役割を説明できる
- `go run` と `go build` の違いが分かる
- 「使っていない変数・import はエラー」という Go の決まりを知っている

## Go とは

**Go**（Golang とも呼ばれる）は、Google が作った言語です。**シンプルで、速く、1 つのファイルの実行ファイルになる** のが特徴で、Web のサーバー（API）や、ターミナルで使うツール（Docker・GitHub CLI の `gh`・Kubernetes なども Go 製）によく使われます。

## 最初のプログラム

```go
package main

import (
	"fmt"
	"strings"
)

func greet(name string) string {
	return "こんにちは、" + name + " さん"
}

func main() {
	fmt.Println(greet("Ryo"))
	fmt.Printf("%s は %d 歳です\n", "Hana", 30)
	fmt.Println(strings.ToUpper("go"))
}
```

```text
こんにちは、Ryo さん
Hana は 30 歳です
GO
```

（このコースの出力は、すべて Go 1.24 で実際に実行したものです）

Python で書くと、こうなります。

```python
def greet(name: str) -> str:
    return "こんにちは、" + name + " さん"

print(greet("Ryo"))
print(f"{'Hana'} は {30} 歳です")
print("go".upper())
```

| Go | 意味 | Python で言うと |
|---|---|---|
| `package main` | このファイルは「main」という **パッケージ**（まとまり）に属する。**実行するプログラムは必ず main** | （ファイル＝モジュール） |
| `import ("fmt" "strings")` | 標準ライブラリを読み込む | `import ...` |
| `func greet(name string) string` | 関数。引数 `name` は string 型、戻り値も string 型 | `def greet(name: str) -> str:` |
| `func main()` | **プログラムの入口**。ここから実行される | `if __name__ == "__main__":` |
| `{ ... }` | ブロック（インデントではなく波かっこ） | インデント |
| `fmt.Println(...)` | 表示して改行 | `print(...)` |
| `fmt.Printf("%s %d\n", ...)` | 書式を指定して表示（`%s` 文字列、`%d` 整数、`\n` 改行） | `print("%s %d" % (...))` |

関数や変数の **型を後ろに書く** のが Go の特徴です（`name string`）。TypeScript の `name: string` に似ていますが、`:` はありません。

### 大文字で始まる名前は「外から使える」

`fmt.Println` の `Println`、`strings.ToUpper` の `ToUpper` は **大文字で始まって** います。Go では、

- **大文字で始まる名前** は、他のパッケージから使える（公開）
- **小文字で始まる名前** は、そのパッケージの中だけ（非公開）

というルールです。Python の「`_` で始まる名前は内部用」という慣習を、**文法として決めた** ものです。

## 実行する

```bash
go mod init example.com/hello   # 最初に 1 回。go.mod というファイルができる
go run .                        # コンパイルして、すぐ実行
go build -o hello .             # 実行ファイル hello を作る
./hello                         # 作った実行ファイルを実行
```

| コマンド | 意味 |
|---|---|
| `go mod init 名前` | **モジュール**（プロジェクト）を始める。`go.mod` に名前と Go のバージョン、使うライブラリが書かれる（Python の `pyproject.toml`、JavaScript の `package.json`） |
| `go run .` | このディレクトリのプログラムを、その場でコンパイルして実行 |
| `go build` | **実行ファイル** を作る |
| `go get パッケージ` | ライブラリを追加（`pip install` / `npm install`） |
| `go test ./...` | テストを全部実行 |
| `gofmt` / `go fmt` | コードの書き方（字下げなど）を自動でそろえる |

`go build` で作った `hello` は、この環境では約 2.2MB の **1 つのファイル** でした。**Go をインストールしていないパソコンにも、このファイルをコピーするだけで動きます**。Python のように「動かす人も Python とライブラリを入れる」必要がないので、配布やデプロイが楽です（公開とクラウドのコースの Docker のイメージも小さくできる）。

## 使っていないものはエラー

```go
package main

import (
	"fmt"
	"os"
)

func main() {
	x := 1
	fmt.Println("hi")
}
```

```text
./l1b.go:5:2: "os" imported and not used
./l1b.go:9:2: declared and not used: x
```

**使っていない import と、使っていない変数は、コンパイルエラー** になります。Python なら警告すら出ないことです。最初は面倒に感じますが、消し忘れのゴミが残らないので、AI のコードも読みやすくなります。

一時的に使わない値は、`_`（空白の識別子）で受け取ります。

```go
_ = x                 // 「使わない」と明示
for _, v := range items { ... }   // 番号は使わない（レッスン 2）
```

## AI のコードではこう出てくる

| 見かけたら | 読み方 |
|---|---|
| `package main` と `func main()` | 実行するプログラム（コマンド） |
| `package handlers` など main 以外 | 他から使われる部品のパッケージ |
| `cmd/server/main.go` | Go のプロジェクトでよくある形。`cmd/` の下に実行するプログラムを置く |
| `go.mod` / `go.sum` | 使うライブラリの一覧と、その中身の確認用の値（ロックファイル。セキュリティのコースのレッスン 6） |
| `import "github.com/gin-gonic/gin"` | ライブラリは **URL のような名前** で読み込む |
| `func (s *Server) Start()` | メソッド（レッスン 3） |

```quiz
? Go のプログラムが実行されるとき、最初に動くのは？
- ファイルの一番上の行
+ `package main` の中の `func main()`
- `import` の中のパッケージ
> Go は main パッケージの main 関数から実行が始まります。Python の `if __name__ == "__main__":` に当たります。

? Go で `import "os"` と書いたのに、os を一度も使わなかった。どうなる？
- 何も起きない
- 警告が出るが動く
+ コンパイルエラーで、実行できない
> Go は使っていない import と変数をエラーにします。不要なら消すか、`_` で受け取ります。

? `strings.ToUpper` の `ToUpper` が大文字で始まっている意味は？
- 大文字に変換する関数だから
+ 大文字で始まる名前は、他のパッケージから使える（公開）というルールだから
- Go では関数名は必ず大文字で始めるから
> 大文字で始まる名前は公開、小文字は同じパッケージの中だけです。自分のパッケージの中で使う関数は小文字でも書けます。
```
