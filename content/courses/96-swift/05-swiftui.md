---
title: SwiftUI を読む ― iPhone の画面のコード
level: 3
minutes: 20
concepts: [dom_ui, async, reading, ai_coding]
summary: Apple の今の画面の作り方 SwiftUI。struct の View と body、VStack・HStack・Text・Button、modifier の .padding() の連鎖、@State と @Binding、@Observable のモデル、List と ForEach、.task と async/await。Jetpack Compose・React と並べて読む。
---
## このレッスンのゴール

- `struct ContentView: View { var body: some View { ... } }` の形を読める
- `VStack`・`HStack`・`Text`・`Button` と、`.padding()` などの modifier を読める
- `@State`・`@Binding`・`@Observable` が何をしているか説明できる

このレッスンのコードは、SwiftUI の書き方の説明のための抜粋です（iPhone のアプリをここでは動かしていません。SwiftUI は Apple の機械の上でしか動きません）。

## SwiftUI とは

**SwiftUI** は、iPhone・Mac のアプリの画面を **Swift のコードで** 作る、Apple の今の標準の方法です。Android の Jetpack Compose（Kotlin コースのレッスン 5）や React と同じく、「**状態から画面を作る**」考え方です。3 つを並べて見ると、驚くほど似ています。

## 画面は struct

```swift
import SwiftUI

struct GreetingView: View {
    let name: String

    var body: some View {
        Text("こんにちは、\(name) さん")
    }
}
```

| 部分 | 意味 | Compose | React |
|---|---|---|---|
| `struct GreetingView: View` | 画面の部品。**View プロトコル**（レッスン 4）を守る struct（レッスン 3） | `@Composable fun Greeting` | `function Greeting` |
| `let name: String` | 外から受け取る値 | 引数 | props |
| `var body: some View { ... }` | **この部品の見た目**（計算プロパティ） | 関数の中身 | `return (...)` |
| `Text("...")` | 文字 | `Text(...)` | `<p>` |

`some View` は「**何かの View**（具体的な型は Swift が決める）」という意味です。中身が複雑になると型がとても長くなるので、こう書きます。

## 並べる：VStack と HStack

```swift
struct ProductRow: View {
    let product: Product
    let onAdd: () -> Void

    var body: some View {
        HStack {
            VStack(alignment: .leading) {
                Text(product.name)
                    .font(.headline)
                Text("\(product.price) 円")
                    .foregroundStyle(.secondary)
            }
            Spacer()
            Button("カートに入れる", action: onAdd)
                .buttonStyle(.borderedProminent)
        }
        .padding()
    }
}
```

| SwiftUI | 意味 | Compose | CSS |
|---|---|---|---|
| `VStack { }` | 縦に並べる | `Column { }` | `flex-direction: column` |
| `HStack { }` | 横に並べる | `Row { }` | `display: flex` |
| `ZStack { }` | 重ねる | `Box { }` | `position: absolute` |
| `Spacer()` | 残りの場所を埋める（右に押しやる） | `Spacer(Modifier.weight(1f))` | `flex: 1` |
| `VStack(alignment: .leading)` | 左寄せ | `horizontalAlignment = Start` | `align-items: flex-start` |
| `Button("...", action: onAdd)` | ボタン | `Button(onClick = ...)` | `<button onClick>` |
| `let onAdd: () -> Void` | 「引数無しで何も返さない」関数を受け取る（レッスン 4。Void は Kotlin の Unit） | `() -> Unit` | `() => void` |

`HStack { ... }` の `{ }` は、レッスン 4 の **「最後のクロージャはかっこの外に」** です。

## modifier：. でつなげて見た目を変える

```swift
Text(product.name)
    .font(.headline)
    .foregroundStyle(.secondary)
    .padding()
```

`.font(...)`・`.padding()` のように、**部品の後ろに `.` でつなげて** 見た目を変えます（**modifier**）。CSS のプロパティ、Compose の `Modifier`、Tailwind の class（HTML/CSS コースのレッスン 7）に当たります。

⚠️ **順番で結果が変わります**。`.padding().background(.yellow)` は「余白を付けてから背景」（余白にも色が付く）、`.background(.yellow).padding()` は「背景を付けてから余白」（余白は透明）です。

`.font(.headline)` の `.headline` は、レッスン 3 の「型が分かっている場所では `.` から書ける」enum の書き方です。

## 状態：@State

```swift
struct CounterView: View {
    @State private var count = 0

    var body: some View {
        VStack {
            Text("\(count) 回押されました")
            Button("押す") {
                count += 1
            }
        }
    }
}
```

| SwiftUI | Compose | React |
|---|---|---|
| `@State private var count = 0` | `var count by remember { mutableStateOf(0) }` | `const [count, setCount] = useState(0)` |
| `count += 1` → 画面が描き直される | `count++` | `setCount(count + 1)` |

`@State` の `@` は **プロパティラッパー** という Swift の仕組みで、「この値は SwiftUI が覚えておいて、**変わったら body を作り直して**」という印です。View は struct（レッスン 3。値型で、普通は中身を変えられない）なので、`@State` を付けないと `count += 1` はできません。

## 子に渡して変えてもらう：@Binding

```swift
struct SettingsView: View {
    @State private var notificationsOn = true

    var body: some View {
        ToggleRow(title: "通知", isOn: $notificationsOn)
    }
}

struct ToggleRow: View {
    let title: String
    @Binding var isOn: Bool

    var body: some View {
        Toggle(title, isOn: $isOn)
    }
}
```

| 書き方 | 意味 |
|---|---|
| `$notificationsOn` | `@State` の値への **つながり**（Binding）を渡す |
| `@Binding var isOn: Bool` | 親の値につながった変数。子で変えると **親の値が変わる** |

React で「`value` と `onChange` を両方子に渡す」のを、`$` 1 文字で書けるようにしたものです。レッスン 3 の「struct はコピー」の例外を、SwiftUI の仕組みで作っています。

## モデル：@Observable

アプリのデータは、画面の外のクラスに置きます。

```swift
@Observable
final class ProductStore {
    var products: [Product] = []
    var isLoading = false
    var errorMessage: String?

    func load() async {
        isLoading = true
        defer { isLoading = false }
        do {
            products = try await api.fetchProducts()
        } catch {
            errorMessage = "読み込めませんでした"
        }
    }
}

struct ProductListView: View {
    @State private var store = ProductStore()

    var body: some View {
        List(store.products) { product in
            ProductRow(product: product, onAdd: { })
        }
        .overlay {
            if store.isLoading { ProgressView() }
        }
        .task {
            await store.load()
        }
    }
}
```

| 部分 | 意味 |
|---|---|
| `@Observable final class ProductStore` | **プロパティが変わると、それを使っている画面が描き直される** クラス（Compose の ViewModel ＋ StateFlow に当たる）。共有するので class（レッスン 3） |
| `func load() async` | 非同期の関数（C# コースのレッスン 4 と同じ async/await） |
| `try await api.fetchProducts()` | 待って、失敗しうる（レッスン 4 の try） |
| `defer { isLoading = false }` | 関数を抜けるときに必ず実行（Go の defer と同じ） |
| `List(store.products) { product in ... }` | 一覧。`Identifiable`（id を持つ）なデータを並べる |
| `.task { await store.load() }` | 画面が表示されたら実行。画面が消えたら **自動で取り消し**（Compose の `LaunchedEffect`・`viewModelScope`） |
| `.overlay { if ... { ProgressView() } }` | 読み込み中なら、上にくるくるを重ねる |

古いコードでは、`class ProductStore: ObservableObject` ＋ `@Published var products` ＋ 画面の側で `@StateObject` / `@ObservedObject` という書き方でした（iOS 17 から `@Observable` が使える）。AI のコードでどちらも見るので、**同じ役割の古い書き方と新しい書き方** として覚えておきます。

## 3 つの画面の書き方を並べると

| | SwiftUI（iPhone） | Jetpack Compose（Android） | React（Web） |
|---|---|---|---|
| 部品 | `struct X: View { var body }` | `@Composable fun X()` | `function X()` |
| 縦・横 | `VStack` / `HStack` | `Column` / `Row` | `flex-direction` |
| 見た目 | `.padding()` などの modifier | `Modifier.padding()` | CSS / Tailwind |
| 状態 | `@State` | `remember { mutableStateOf() }` | `useState` |
| 共有のデータ | `@Observable` クラス | ViewModel ＋ StateFlow | Context / ストア |
| 表示されたら非同期の処理 | `.task { }` | `LaunchedEffect { }` | `useEffect` |

**「状態が変わると、それを使う部品が作り直される」** という考え方は、3 つとも同じです。どれか 1 つが読めれば、他も読めるようになります。

## AI のコードではこう出てくる

| 見かけたら | チェック |
|---|---|
| `@State var` が `private` でない | 外から渡すものなら `let` か `@Binding`。@State はその部品が持つもの |
| `body` の中で重い計算・通信 | ⚠️ 描き直しのたびに呼ばれる。`.task` やモデルに |
| `DispatchQueue.main.async { ... }` | 画面の更新を画面のスレッドでする、古い書き方。今は `@MainActor` と async/await |
| `.onAppear { Task { await load() } }` | 動くが、画面が消えても取り消されない。`.task` が推奨 |
| `ForEach(items, id: \.self)` | 同じ値が 2 つあると表示がおかしくなる。`Identifiable` な id を使う |
| `@ObservedObject var store = Store()` | ⚠️ 描き直すたびに作り直される。作る側は `@StateObject`（新しい書き方なら `@State`） |

```quiz
? SwiftUI の `var body: some View { ... }` は何？
+ その部品の見た目を返す計算プロパティ
- 画面のデータを保存する場所
- 画面の名前
> body は View プロトコルが必要とするもので、その部品の中身（見た目）を返します。

? `@State private var count = 0` の `@State` を付ける理由は？
- count を定数にするため
+ SwiftUI に値を覚えてもらい、変わったら画面を描き直してもらうため
- count を他の画面と共有するため
> View は struct なので、普通は中身を変えられません。@State は SwiftUI が管理する状態で、変わると body が作り直されます。Compose の remember { mutableStateOf } に当たります。

? `ToggleRow(isOn: $notificationsOn)` の `$` の意味は？
- 値をドルに変換する
+ 子が値を変えると親の値も変わるように、つながり（Binding）を渡す
- 値をコピーして渡す
> `$` を付けると Binding が渡され、子の `@Binding var isOn` を変えると親の @State が変わります。
```
