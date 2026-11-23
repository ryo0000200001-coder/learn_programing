---
title: Unity のスクリプトを読む ― MonoBehaviour と Update
level: 3
minutes: 18
concepts: [classes, reading, performance, ai_coding]
summary: Unity のゲームの部品を動かす C# のスクリプト。MonoBehaviour、Start と Update（毎フレーム）、Time.deltaTime、[SerializeField] でインスペクターに出す、GetComponent、OnTriggerEnter、Coroutine。AI のゲームのコードで見るべきところ。
---
## このレッスンのゴール

- `MonoBehaviour`・`Start`・`Update` が、いつ呼ばれるか説明できる
- `Time.deltaTime`・`[SerializeField]`・`GetComponent` の意味が分かる
- Unity のスクリプトの、よくある間違い（Update の中の重い処理など）に気づける

このレッスンのコードは、Unity の書き方の説明のための抜粋です（Unity のエディターをここでは動かしていません）。

## Unity とは

**Unity** は、スマホ・PC・ゲーム機のゲームや、3D・VR のアプリを作る道具（ゲームエンジン）です。画面の中の物体（**ゲームオブジェクト**：キャラクター・敵・アイテム）に、**C# のスクリプトを部品（コンポーネント）として付けて** 動かします。

```text
ゲームオブジェクト「Player」
 ├─ Transform（位置・回転・大きさ）    ← どのオブジェクトにも必ずある
 ├─ Rigidbody（重力・ぶつかったときの動き）
 ├─ Collider（当たり判定の形）
 └─ PlayerController（自分で書いた C# のスクリプト）
```

## 基本のスクリプト

```csharp
using UnityEngine;

public class PlayerController : MonoBehaviour
{
    [SerializeField] private float speed = 5f;
    [SerializeField] private int maxHp = 3;

    private int hp;
    private Rigidbody rb;

    void Start()
    {
        hp = maxHp;
        rb = GetComponent<Rigidbody>();
    }

    void Update()
    {
        float x = Input.GetAxis("Horizontal");
        float z = Input.GetAxis("Vertical");
        transform.Translate(new Vector3(x, 0, z) * speed * Time.deltaTime);
    }

    void OnTriggerEnter(Collider other)
    {
        if (other.CompareTag("Enemy"))
        {
            hp--;
            Debug.Log($"ダメージ！ 残り {hp}");
            if (hp <= 0) Destroy(gameObject);
        }
    }
}
```

| 部分 | 意味 |
|---|---|
| `: MonoBehaviour` | Unity のスクリプトの親クラス（継承。Java の `extends`）。これを継承すると、ゲームオブジェクトに付けられる |
| `Start()` | 最初の 1 回だけ呼ばれる（準備） |
| `Update()` | **毎フレーム**（1 秒に 60 回など）呼ばれる |
| `OnTriggerEnter(Collider other)` | 何かと **ぶつかったとき** に呼ばれる |
| `transform` | このオブジェクトの位置・向き（Transform コンポーネント） |
| `gameObject` | このスクリプトが付いているオブジェクト自身 |
| `Debug.Log(...)` | Unity のコンソールに表示（`Console.WriteLine` の代わり） |

**自分で `Start` や `Update` を呼んでいない** のがポイントです。Unity が、決まったタイミングで **名前を見て自動で呼びます**。WordPress のフック（PHP コースのレッスン 5）や、JavaScript のイベント（`addEventListener`）と同じ「呼んでもらう」仕組みです。

## Update と Time.deltaTime

```csharp
transform.Translate(new Vector3(x, 0, z) * speed * Time.deltaTime);
```

Update は毎フレーム呼ばれますが、**1 秒に何回呼ばれるかは、パソコンの速さで変わります**（速い PC は 144 回、遅いスマホは 30 回）。毎回 `speed` だけ動かすと、**速い PC ほどキャラクターが速く動いて** しまいます。

`Time.deltaTime` は「**前のフレームから何秒たったか**」（1/60 秒なら約 0.0167）です。これを掛けると、「**1 秒あたり speed だけ動く**」ことになり、どの PC でも同じ速さになります。

⚠️ AI のゲームのコードで、Update の中の動き・タイマーに `Time.deltaTime` が掛かっていなかったら、要注意です。

## [SerializeField]：インスペクターに出す

```csharp
[SerializeField] private float speed = 5f;
```

`[...]` は C# の **属性**（Java のアノテーション、Python のデコレーターに近い印）です。`[SerializeField]` を付けると、private のままで、**Unity のエディターの画面（インスペクター）に表示され、そこで値を変えられる** ようになります。プログラムを書き直さずに、「速さを 5 から 7 にしたら遊びやすいか」を試せます。

⚠️ インスペクターで値を変えると、**コードに書いた初期値（`= 5f`）より、画面で入れた値が優先されます**。「コードを直したのに速さが変わらない」ときは、インスペクターの値を確かめます。

## GetComponent：他の部品を取り出す

```csharp
rb = GetComponent<Rigidbody>();
```

同じゲームオブジェクトに付いている **別のコンポーネント** を取り出します。`<Rigidbody>` はジェネリクス（どの型の部品か）です。

⚠️ `GetComponent` は少し重い処理なので、**Update の中で毎フレーム呼ばず、Start で一度だけ取り出して変数に入れておく** のが定番です（上のコードはその形）。付いていなければ null が返り、使うと NullReferenceException（レッスン 2）になります。

## コルーチン：時間をかけた処理

```csharp
IEnumerator Blink()
{
    for (int i = 0; i < 3; i++)
    {
        GetComponent<Renderer>().enabled = false;
        yield return new WaitForSeconds(0.1f);
        GetComponent<Renderer>().enabled = true;
        yield return new WaitForSeconds(0.1f);
    }
}

// 呼ぶとき
StartCoroutine(Blink());
```

「0.1 秒消えて、0.1 秒表示して、を 3 回」のような **時間のかかる演出** を、**コルーチン** で書きます。`yield return new WaitForSeconds(0.1f)` は「ここで 0.1 秒待って、次のフレーム以降に続きから再開」という意味です。

Python のジェネレーター（`yield`）を使って時間を止めているようなもので、レッスン 4 の async/await に近い考え方です。今の Unity では、`async` を使う書き方（Awaitable）もできます。

## Unity でよく見る型

| 型 | 意味 |
|---|---|
| `Vector3` | 3D の位置・向き・速さ（x, y, z）。`Vector3.up` は上向き |
| `Quaternion` | 回転 |
| `Transform` | 位置・回転・大きさ・親子関係 |
| `GameObject` | 画面の中の物体 |
| `Rigidbody` | 物理（重力・力） |
| `Collider` / `Collision` | 当たり判定／ぶつかった情報 |
| `float`（`5f`） | 小数。Unity は double ではなく float を使う（`f` を付ける） |

## AI のコードではこう出てくる

| 見かけたら | チェック |
|---|---|
| Update の中で `GetComponent` / `GameObject.Find` / `FindObjectOfType` | ⚠️ 毎フレームは重い。Start で取っておく |
| Update の中の移動に `Time.deltaTime` が無い | ⚠️ PC の速さで動きが変わる |
| 物理の動き（Rigidbody）を Update で | 物理は `FixedUpdate`（決まった間隔で呼ばれる）で書くのが基本 |
| `public float speed;` | インスペクターに出すために public にしている。`[SerializeField] private` のほうが安全 |
| Update の中で `new` や文字列の連結をたくさん | ゴミ（GC の仕事）が増えて、ゲームがときどきカクつく |
| `Destroy(gameObject)` の後もそのオブジェクトを使う | 次のフレームで消える。使い続けると `MissingReferenceException` |
| `CompareTag("Enemy")` | ✅ タグの比較の推奨の書き方（`tag == "Enemy"` より速い） |

```quiz
? Unity の `Update()` はいつ呼ばれる？
- スクリプトが付けられたときに 1 回
+ 毎フレーム（1 秒に何十回も）
- ぶつかったとき
> Update は毎フレーム呼ばれます。最初の 1 回は Start、ぶつかったときは OnTriggerEnter などです。

? 移動の計算に `Time.deltaTime` を掛ける理由は？
+ フレームの数はパソコンの速さで変わるので、1 秒あたりの動きをそろえるため
- 動きを遅くするため
- 時刻を表示するため
> deltaTime は前のフレームからの秒数です。掛けると「1 秒あたり speed だけ動く」になり、どの PC でも同じ速さになります。

? `[SerializeField] private float speed = 5f;` の `[SerializeField]` の役割は？
- speed を定数にする
+ private のまま、Unity のインスペクターに表示して値を変えられるようにする
- speed をファイルに保存する
> 属性（[...]）で Unity に「エディターに出して」と伝えています。画面で変えた値は、コードの初期値より優先されます。
```
