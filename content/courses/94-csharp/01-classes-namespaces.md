---
title: クラスと名前空間 ― C# のプログラムの形
level: 1
minutes: 15
concepts: [basics, classes, modules, tooling]
summary: namespace・using・class・static void Main、$"..." の文字列、dotnet new と dotnet run、.csproj。Java とそっくりだが違うところ（文字列の == は中身で比べる、decimal 型、メソッド名は大文字）。
---
## このレッスンのゴール

- `namespace`・`using`・`class`・`Main` の役割を説明できる
- `dotnet new console` と `dotnet run` で動かす流れが分かる
- Java との違い（`==` の意味、`decimal`、名前の付け方）が分かる

## C# とは

**C#**（シーシャープ）は Microsoft が作った言語で、Windows のアプリ、Web のサーバー（**ASP.NET Core**）、そして **Unity**（スマホや PC のゲームを作る道具。レッスン 5）で使われます。**.NET**（ドットネット）という実行の仕組みの上で動き、今は Windows・Mac・Linux のどれでも動きます。

見た目は **Java にとてもよく似ています**（Java コースを読んでいれば、すぐ読めます）。そのうえで、プロパティ・LINQ・async/await など、後から多くの言語が真似した便利な機能を早くから取り入れてきました。

## 最初のプログラム

```csharp
using Shop.Models;

namespace Shop
{
    public static class Program
    {
        static string Greet(string name) => $"こんにちは、{name} さん";

        public static void Main(string[] args)
        {
            Console.WriteLine(Greet("Ryo"));
            int price = 120;
            var count = 3;
            Console.WriteLine($"合計 {price * count} 円");
            Console.WriteLine($"{7 / 2} {7 / 2.0} {7 % 2}");
        }
    }
}
```

```text
こんにちは、Ryo さん
合計 360 円
3 3.5 1
```

（このコースの出力とエラーは、すべて .NET 8 で実際にビルド・実行したものです）

| C# | 意味 | Java で言うと | Python で言うと |
|---|---|---|---|
| `using Shop.Models;` | 別の名前空間のクラスを使う | `import ...` | `from shop.models import ...` |
| `namespace Shop { ... }` | このクラスの住所 | `package shop;` | パッケージ |
| `public static void Main(string[] args)` | 入口 | `public static void main(String[] args)` | `if __name__ == ...` |
| `Console.WriteLine(x)` | 表示 | `System.out.println(x)` | `print(x)` |
| `$"合計 {x} 円"` | 埋め込み（**`$` を付ける**） | `"合計 " + x + " 円"` | `f"合計 {x} 円"` |
| `=> 式` | 1 行で書くメソッド（式形式） | | `lambda` / `return 式` |
| `var count = 3` | 型を推論 | `var` | — |

### 名前の付け方が違う

C# では、**メソッドもプロパティも大文字で始めます**（`Greet`・`WriteLine`・`Length`）。Java の `greet`・`println`・`length()` と見比べると、すぐ C# と分かります。

### 短い書き方：トップレベルステートメント

```csharp
Console.WriteLine("Hello, World!");
```

`dotnet new console` で作った最初のファイルは、この 1 行だけです。C# 9 から、**namespace も class も Main も省略できる** ようになりました（コンパイラが裏で Main を作る）。小さなプログラムや例は、この形でよく書かれます。

## 動かす

```bash
dotnet new console -n Shop -o shop    # プロジェクトを作る
cd shop
dotnet run                            # ビルドして実行
dotnet build                          # ビルドだけ
dotnet add package Newtonsoft.Json    # ライブラリ（NuGet パッケージ）を追加
dotnet test                           # テスト
```

```xml
<!-- Shop.csproj -->
<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <TargetFramework>net8.0</TargetFramework>
    <ImplicitUsings>enable</ImplicitUsings>
    <Nullable>enable</Nullable>
  </PropertyGroup>
</Project>
```

`.csproj` がプロジェクトの設定（Python の `pyproject.toml`、Java の `pom.xml`）です。`Nullable` が `enable` なのは、レッスン 2 の **null の確認を強くする** 設定です。`ImplicitUsings` は、よく使う `using System;` などを書かなくてよくする設定です。

## Java と違うところ

### 文字列の == は中身で比べる

```csharp
string a = "りんご", b = new string("りんご".ToCharArray());
Console.WriteLine($"{a == b} {a.Length}");     // True 3
```

**別々に作った文字列でも、`==` で True になりました**。Java では `==` は場所を比べるので false でしたね（Java コースのレッスン 2）。C# の string は、`==` で **中身を比べる** ように作られています。

`Length` が 3 なのは、C# の文字列が **文字の数**（正確には UTF-16 という形式の単位）で数えるからです（C や PHP の `strlen` の 9 とは違う）。

### お金には decimal

```csharp
decimal yen = 0.1m + 0.2m;
Console.WriteLine($"double: {0.1 + 0.2}  decimal: {yen}");
// double: 0.30000000000000004  decimal: 0.3
```

コンピュータの基礎コースの「0.1 + 0.2 問題」です。C# には、10 進数で正確に計算する **`decimal`** 型が最初から入っています（数の後ろに `m` を付ける）。Python の `Decimal` に当たり、**お金の計算は decimal** が C# の定番です。

## AI のコードではこう出てくる

| 見かけたら | 読み方 |
|---|---|
| `namespace MyApp.Services;`（`;` で終わる） | ファイル全体がこの名前空間（C# 10 からの短い書き方） |
| `Program.cs` に `var builder = WebApplication.CreateBuilder(args);` | ASP.NET Core の Web アプリの入口 |
| `public class Foo : MonoBehaviour` | Unity のスクリプト（レッスン 5） |
| `*.sln` | 複数のプロジェクトをまとめるファイル（Visual Studio が使う） |
| `bin/` と `obj/` | ビルドでできるファイル。Git には入れない |
| `NuGet` / `PackageReference` | C# のライブラリの仕組み（pip・npm に当たる） |

```quiz
? C# の `$"合計 {total} 円"` は Python で言うと？
+ `f"合計 {total} 円"`
- `"合計 {total} 円"`
- `"合計 " + total + " 円"`（エラーになる）
> `$` を付けた文字列の中で、`{}` に変数や式を埋め込めます。

? C# で `string a = ...; string b = ...;`（中身は同じ、別々に作った）の `a == b` は？
+ True（C# の string の == は中身で比べる）
- False（場所を比べる）
- コンパイルエラー
> Java と違い、C# の string は == で中身を比べます。実際に別々に作った文字列で True になりました。

? C# でお金を計算するのに向いている型は？
- double
- float
+ decimal
> double では 0.1 + 0.2 が 0.30000000000000004 になりましたが、decimal では 0.3 になりました。
```
