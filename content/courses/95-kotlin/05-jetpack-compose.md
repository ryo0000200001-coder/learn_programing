---
title: Jetpack Compose を読む ― Android の画面のコード
level: 3
minutes: 20
concepts: [dom_ui, async, reading, ai_coding]
summary: Android の今の画面の作り方 Jetpack Compose。@Composable 関数、Column・Row・Text・Button、Modifier、remember と mutableStateOf（状態が変わると描き直す）、ViewModel と StateFlow、コルーチン（suspend・launch）。React と並べて読む。
---
## このレッスンのゴール

- `@Composable` 関数と、`Column`・`Row`・`Text`・`Button` のつながりを読める
- `remember { mutableStateOf(...) }` が何をしていて、なぜ必要か説明できる
- ViewModel・StateFlow・`suspend`・`launch` が出てくるコードの役割が分かる

このレッスンのコードは、Jetpack Compose の書き方の説明のための抜粋です（Android のアプリをここでは動かしていません）。

## Jetpack Compose とは

**Jetpack Compose** は、Android のアプリの画面を **Kotlin のコードだけで** 作る、今の標準の方法です（以前は XML というファイルで画面を書いていた）。考え方は **React**（TypeScript コースのレッスン 8）にとてもよく似ていて、「**状態から画面を作る関数**」を書きます。iPhone の SwiftUI（Swift コースのレッスン 5）もほぼ同じ考え方です。

## 画面の部品は関数

```kotlin
@Composable
fun Greeting(name: String) {
    Text(text = "こんにちは、$name さん")
}
```

| 部分 | 意味 | React で言うと |
|---|---|---|
| `@Composable` | 「画面の部品を作る関数」という印（アノテーション） | 関数コンポーネント |
| `fun Greeting(name: String)` | 部品の名前（大文字で始める）と引数 | `function Greeting({ name })` |
| `Text(text = "...")` | 文字を表示する部品 | `<p>...</p>` |

**戻り値が無い** のが特徴です。`Text(...)` を呼ぶと、その場に文字が置かれます。

## 並べる：Column と Row

```kotlin
@Composable
fun ProductCard(product: Product, onAdd: () -> Unit) {
    Row(
        modifier = Modifier.fillMaxWidth().padding(16.dp),
        horizontalArrangement = Arrangement.SpaceBetween,
        verticalAlignment = Alignment.CenterVertically,
    ) {
        Column {
            Text(product.name, style = MaterialTheme.typography.titleMedium)
            Text("${product.price} 円", color = Color.Gray)
        }
        Button(onClick = onAdd) {
            Text("カートに入れる")
        }
    }
}
```

| Compose | 意味 | HTML/CSS コースでは |
|---|---|---|
| `Column { ... }` | 中身を **縦に** 並べる | `display: flex; flex-direction: column` |
| `Row { ... }` | 中身を **横に** 並べる | `display: flex` |
| `Arrangement.SpaceBetween` | 主軸の並び方（両端に寄せる） | `justify-content: space-between` |
| `Alignment.CenterVertically` | 交差軸のそろえ（縦の中央） | `align-items: center` |
| `Modifier.fillMaxWidth().padding(16.dp)` | 幅いっぱい、周りに 16dp の余白 | `width: 100%; padding: 16px` |
| `Button(onClick = onAdd) { Text(...) }` | ボタン。押されたら onAdd を呼ぶ | `<button onClick={onAdd}>` |
| `onAdd: () -> Unit` | 「引数無しで何も返さない関数」を受け取る（レッスン 4。`Unit` は void） | `onAdd: () => void` |

`Column { ... }` の `{ }` は、レッスン 4 の **「最後のラムダはかっこの外に」** です。中に書いた部品が、縦に並びます。HTML/CSS コースのレッスン 5 で学んだ Flexbox の考え方が、そのまま当てはまります。

`dp` は、画面の細かさが違うスマホでも **同じくらいの大きさに見える単位** です（CSS の rem に近い役割）。

## 状態：remember と mutableStateOf

```kotlin
@Composable
fun Counter() {
    var count by remember { mutableStateOf(0) }

    Column {
        Text("$count 回押されました")
        Button(onClick = { count++ }) {
            Text("押す")
        }
    }
}
```

| 部分 | 意味 | React で言うと |
|---|---|---|
| `mutableStateOf(0)` | **変わると画面が描き直される** 値（状態）。最初は 0 | `useState(0)` |
| `remember { ... }` | 描き直されても、値を **覚えておく** | （useState が自動でやる） |
| `var count by ...` | count を普通の変数のように読み書きできるようにする | `const [count, setCount] = ...` |
| `count++` | 状態を変える → **Counter が自動で描き直される** | `setCount(count + 1)` |

Compose では、状態が変わると、それを使っている `@Composable` 関数が **もう一度呼ばれて**、画面が作り直されます（**再コンポーズ**）。

⚠️ `remember` を付けずに `var count by mutableStateOf(0)` と書くと、**描き直すたびに 0 に戻ってしまい**、ボタンを押しても数が増えません。ふつうの `var count = 0` だと、そもそも変わっても描き直されません。AI のコードで「押しても画面が変わらない」ときは、まずここを見ます。

## ViewModel と StateFlow：画面の外に状態を置く

大きなアプリでは、データの取得や保存は画面の部品の外（**ViewModel**）に置きます。

```kotlin
class ProductViewModel(private val repo: ProductRepository) : ViewModel() {
    private val _uiState = MutableStateFlow<UiState>(UiState.Loading)
    val uiState: StateFlow<UiState> = _uiState.asStateFlow()

    init { load() }

    fun load() {
        viewModelScope.launch {
            _uiState.value = UiState.Loading
            _uiState.value = try {
                UiState.Success(repo.fetchProducts())
            } catch (e: IOException) {
                UiState.Error("読み込めませんでした")
            }
        }
    }
}

@Composable
fun ProductScreen(viewModel: ProductViewModel) {
    val state by viewModel.uiState.collectAsStateWithLifecycle()

    when (val s = state) {
        is UiState.Loading -> CircularProgressIndicator()
        is UiState.Success -> LazyColumn {
            items(s.items) { item -> ProductCard(item, onAdd = { }) }
        }
        is UiState.Error -> Text(s.message)
    }
}
```

| 部分 | 意味 |
|---|---|
| `class ... : ViewModel()` | 画面の状態とロジックを持つ部品。画面を回転させても消えない |
| `MutableStateFlow` / `StateFlow` | **変わる値を、見ている人に知らせる** 入れ物。`_uiState` は中で変える用、`uiState` は外に見せる読むだけの用 |
| `UiState.Loading / Success / Error` | レッスン 3 の **sealed interface** |
| `viewModelScope.launch { ... }` | **コルーチン**（下）を起動する |
| `repo.fetchProducts()` | ネットワークから取得（`suspend` 関数。下） |
| `collectAsStateWithLifecycle()` | StateFlow の変化を、Compose の状態として受け取る |
| `when (val s = state)` | 状態ごとに画面を出し分け。sealed なので書き忘れはコンパイルエラー |
| `LazyColumn { items(...) { ... } }` | 見えている分だけ作る、長いリスト（React の仮想スクロールに近い） |

**「状態（データ）が決まれば、画面が決まる」**。読み込み中・成功・失敗の 3 つを sealed で表し、`when` で全部書く、という形は、AI の Android のコードでいちばんよく見る形です。

## コルーチン：Kotlin の非同期

```kotlin
interface ProductRepository {
    suspend fun fetchProducts(): List<Product>
}
```

| 書き方 | 意味 | 他の言語では |
|---|---|---|
| `suspend fun` | 途中で **待てる**（中断できる）関数 | Python・C#・JavaScript の `async` |
| `suspend` 関数を呼ぶ | 終わるまで待つ（`await` を書かない） | `await` |
| `scope.launch { ... }` | コルーチンを起動する（終わりを待たずに次へ） | Go の `go`、C# の `Task.Run` |
| `async { ... }.await()` | 結果を後で受け取る起動 | `Task` / Promise |
| `Dispatchers.IO` | ファイル・ネットワーク用のスレッドで動かす | |

Kotlin の **コルーチン** は、C# の async/await（C# コースのレッスン 4）や Python の asyncio と同じ考え方ですが、**`suspend` 関数を呼ぶときに `await` を書かない** のが特徴です。`viewModelScope` は、画面が閉じられたら中のコルーチンを **自動で取り消して** くれます（C# の CancellationToken の役目）。

⚠️ Android では、**画面の担当のスレッドでネットワークや重い処理をすると、アプリが固まります**（数秒続くと「アプリが応答しません」のダイアログ）。だから、通信は必ずコルーチンで、`Dispatchers.IO` などで行います。

## AI のコードではこう出てくる

| 見かけたら | チェック |
|---|---|
| `var x by mutableStateOf(...)` に `remember` が無い | ⚠️ 描き直すたびに初期値に戻る |
| `@Composable` 関数の中で、直接ネットワークを呼んでいる | ⚠️ 描き直しのたびに呼ばれる。ViewModel か `LaunchedEffect` に |
| `GlobalScope.launch` | ⚠️ 画面が閉じても止まらない。`viewModelScope` / `lifecycleScope` に |
| `runBlocking { }` を画面の処理で | ⚠️ 終わるまで画面が固まる |
| `when (state) { ... else -> {} }` | sealed なら else は不要。新しい状態の書き忘れに気づけなくなる |
| `Modifier.clickable { }` | 何にでもクリックを付けられる。押せることが分かる見た目か、読み上げに対応しているか |

```quiz
? Compose の `Column { Text("A"); Text("B") }` はどう表示される？
+ A と B が縦に並ぶ
- A と B が横に並ぶ
- B だけが表示される
> Column は縦、Row は横に並べます。CSS の Flexbox の flex-direction: column と row に当たります。

? `var count by remember { mutableStateOf(0) }` の `remember` が無いと、何が起きる？
- 何も変わらない
+ 描き直されるたびに 0 に戻り、ボタンを押しても数が増えないように見える
- コンパイルエラーになる
> 状態が変わると関数がもう一度呼ばれます。remember が無いと、そのたびに mutableStateOf(0) が新しく作られます。

? ViewModel で `viewModelScope.launch { ... }` を使う理由として正しいのは？
- 画面を速く描くため
+ ネットワークなどの待ち時間のある処理を、画面を固めずに行い、画面が閉じたら自動で取り消すため
- 処理を必ず 1 回だけにするため
> viewModelScope は ViewModel と一緒に終わるコルーチンの範囲です。画面のスレッドを止めずに非同期の処理ができます。
```
