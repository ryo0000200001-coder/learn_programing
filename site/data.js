// tools/build.py が自動生成するファイル。直接編集しないでください。
window.SITE_DATA = {
 "concepts": {
  "basics": {
   "name": "プログラムの基本",
   "desc": "実行の順番・入力と出力"
  },
  "reading": {
   "name": "コードの読み方",
   "desc": "どこから読むか・どう推測するか"
  },
  "variables": {
   "name": "変数と代入",
   "desc": "値に名前をつけて覚えておく仕組み"
  },
  "types": {
   "name": "型",
   "desc": "数値・文字列など、値の種類とその扱い方"
  },
  "operators": {
   "name": "演算子と式",
   "desc": "計算・比較・論理演算"
  },
  "conditionals": {
   "name": "条件分岐",
   "desc": "if / switch / match など"
  },
  "loops": {
   "name": "繰り返し",
   "desc": "for / while / イテレータ"
  },
  "collections": {
   "name": "コレクション",
   "desc": "配列・リスト・辞書・セットなど"
  },
  "functions": {
   "name": "関数",
   "desc": "処理をまとめて名前をつけ、再利用する"
  },
  "scope": {
   "name": "スコープ",
   "desc": "変数がどこから見えるか"
  },
  "strings": {
   "name": "文字列処理",
   "desc": "連結・フォーマット・正規表現など"
  },
  "errors": {
   "name": "エラー処理",
   "desc": "例外・エラーメッセージの読み方"
  },
  "modules": {
   "name": "モジュール・import",
   "desc": "ファイルやパッケージの分け方と読み込み"
  },
  "higher_order": {
   "name": "高階関数・ラムダ",
   "desc": "関数を値として渡す・返す"
  },
  "classes": {
   "name": "クラス・オブジェクト",
   "desc": "データと処理をひとまとめにする設計"
  },
  "io": {
   "name": "入出力",
   "desc": "ファイル・標準入出力"
  },
  "data_formats": {
   "name": "データ形式",
   "desc": "JSON・CSV などの読み書き"
  },
  "type_hints": {
   "name": "型注釈",
   "desc": "型ヒント・TypeScript の型"
  },
  "async": {
   "name": "非同期処理",
   "desc": "async/await・Promise"
  },
  "http_api": {
   "name": "HTTP・Web API",
   "desc": "リクエスト・レスポンス"
  },
  "dom_ui": {
   "name": "画面・DOM 操作",
   "desc": "画面の部品やイベントの扱い"
  },
  "tooling": {
   "name": "パッケージ・ツール",
   "desc": "pip・npm・設定ファイル"
  },
  "security": {
   "name": "セキュリティ",
   "desc": "入力検証・秘密情報の扱い"
  },
  "testing": {
   "name": "テスト",
   "desc": "動作を確かめるコード"
  },
  "database": {
   "name": "データベース",
   "desc": "SQL・テーブル・クエリ"
  },
  "memory": {
   "name": "メモリ・参照",
   "desc": "参照・コピー・ポインタ・所有権"
  }
 },
 "courses": [
  {
   "title": "はじめての「コードを読む」",
   "icon": "🧭",
   "order": 0,
   "description": "言語に関係なく使える、プログラムの読み方の土台。まずはここから。",
   "levels": {
    "1": "入門"
   },
   "id": "00-basics",
   "lessons": [
    {
     "title": "プログラムは「上から順番に」動く",
     "level": 1,
     "minutes": 10,
     "concepts": [
      "basics",
      "reading"
     ],
     "summary": "プログラムとは何か、コンピュータがどう実行するのかをつかむ。",
     "body": "## このレッスンのゴール\n\n- プログラムが **上から下へ、1 行ずつ** 実行されることを説明できる\n- どんなプログラムも **入力 → 処理 → 出力** の形で整理できると分かる\n\n## プログラム＝コンピュータへの指示書\n\nプログラムは「料理のレシピ」に似ています。レシピは上から順に読み、書いてある通りに手を動かします。\nコンピュータも同じで、書かれた指示を **上から順番に** 実行していきます。\n\n```python\nname = \"Ryo\"\nprint(\"こんにちは\")\nprint(name)\n```\n\n1. `name` という名前の箱に `\"Ryo\"` を入れる\n2. 「こんにちは」と表示する\n3. 箱 `name` の中身（Ryo）を表示する\n\n順番を入れ替えると結果も変わります。**「この行が実行される時点で、何が決まっているか」** を意識するのが、コードを読む第一歩です。\n\n## 入力 → 処理 → 出力\n\nどんなに大きなプログラムでも、分解するとこの 3 つになります。\n\n| | 例：天気アプリ |\n|---|---|\n| **入力** | 地名、インターネットから取ってきたデータ |\n| **処理** | 気温を℃に変換、明日の分だけ取り出す |\n| **出力** | 画面に「明日は 18℃・晴れ」と表示 |\n\nAI が書いた長いコードを渡されたら、まず **「入力はどこ？ 出力はどこ？」** を探しましょう。\n真ん中の「処理」は、あとから少しずつ読めば大丈夫です。\n\n## 「上から順番」の例外\n\n実は、上から順番に流れない場面がいくつかあります。これから学ぶ内容です。\n\n- **条件分岐（if）**：条件によって実行する行を選ぶ\n- **繰り返し（for / while）**：同じ部分を何度も実行する\n- **関数**：あとで呼ばれたときに実行される「予約」の部分\n\nこの 3 つさえ押さえれば、どの言語でもプログラムの流れを追えるようになります。\n\n## 読んでみよう\n\n```python\nprice = 1000\ntax = price * 0.1\nprint(price + tax)\n```\n\n<details><summary>何が表示される？</summary>\n\n`1100.0` が表示されます。`price * 0.1` で 100.0（小数）ができ、1000 と足して 1100.0 になります。\n入力＝`price`、処理＝税の計算、出力＝`print` です。\n\n</details>\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "プログラムは基本的にどの順番で実行される？",
        "choices": [
         "下から上へ",
         "上から下へ、1 行ずつ",
         "重要な行から順に"
        ],
        "answer": 1,
        "explain": "例外（if・ループ・関数）はあるものの、基本は上から順番です。"
       },
       {
        "question": "長いコードを渡されたとき、最初に探すとよいものは？",
        "choices": [
         "一番難しそうな行",
         "入力と出力がどこか",
         "コメントの誤字"
        ],
        "answer": 1,
        "explain": "入口と出口が分かると、真ん中の処理が「何のためにあるか」が推測しやすくなります。"
       }
      ]
     ],
     "id": "01-what-is-a-program"
    },
    {
     "title": "知らないコードを読む 5 つのコツ",
     "level": 1,
     "minutes": 12,
     "concepts": [
      "reading"
     ],
     "summary": "初めて見るコードをどこから・どう読めばよいかの手順。",
     "body": "## このレッスンのゴール\n\n- 初めて見るコードを、決まった手順で読み始められる\n- 分からない部分を「調べるべきもの」と「気にしなくていいもの」に分けられる\n\n## コツ 1：全体をざっと眺める（細部は読まない）\n\n最初から 1 行ずつ理解しようとすると疲れてしまいます。まずはスクロールして\n\n- 何行くらいあるか\n- `def`（関数）や `class` がいくつあるか\n- 一番下で何が実行されているか\n\nだけを見ます。地図を広げて、全体の形をつかむイメージです。\n\n## コツ 2：上の方の import を見る\n\n```python\nimport requests\nimport csv\nfrom datetime import date\n```\n\n`import` は「外から道具を借りてくる」宣言です。ここを見るだけで\n「ネットに接続する（requests）」「CSV ファイルを扱う」「日付を使う」コードだと予想できます。\n\n## コツ 3：実行の入口を探す\n\nPython なら一番下の\n\n```python\nif __name__ == \"__main__\":\n    main()\n```\n\nJavaScript なら、ボタンのクリックなどの **イベント** や、一番外側で呼ばれている関数が入口です。\n入口から、呼ばれている関数を順にたどっていきます。\n\n## コツ 4：名前から意味を推測する\n\nAI のコードは名前がとても丁寧です。`fetch_weather(city)` なら「都市名を受け取って天気を取ってくる関数」と読めます。\n**中身を読む前に、名前から予想 → 中身で答え合わせ** をすると、速く・深く読めます。\n\n## コツ 5：分からないものを 3 種類に分ける\n\n| 種類 | 例 | どうする？ |\n|---|---|---|\n| 言語の文法 | `lambda`, `=>`, `async` | このサイトのレッスンで学ぶ |\n| ライブラリの機能 | `requests.get`, `pd.read_csv` | 名前から推測。必要なら公式ドキュメント |\n| そのプログラム独自の名前 | `calc_score`, `user_list` | 定義されている場所を探して読む |\n\n全部を一度に理解する必要はありません。**文法を少しずつ増やしていくのが、このサイトの目的** です。\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "初めて見るコードを読むとき、最初にすることとして良いのは？",
        "choices": [
         "1 行目から完全に理解するまで先に進まない",
         "全体をざっと眺めて形をつかむ",
         "分からない単語を全部調べる"
        ],
        "answer": 1,
        "explain": "細部は後回し。まず全体の形（関数の数・入口・import）をつかみます。"
       },
       {
        "question": "import 文を見ると何が分かる？",
        "choices": [
         "そのコードが外部のどんな道具を使っているか",
         "そのコードの実行にかかる時間",
         "コードを書いた人の名前"
        ],
        "answer": 0,
        "explain": "import は使う道具の一覧なので、コードの目的を推測するヒントになります。"
       },
       {
        "question": "`requests.get(url)` の `get` が分からないとき、それはどの種類？",
        "choices": [
         "言語の文法",
         "ライブラリの機能",
         "そのプログラム独自の名前"
        ],
        "answer": 1,
        "explain": "requests というライブラリが持っている機能です。名前から「URL のデータを取ってくる」と推測できます。"
       }
      ]
     ],
     "id": "02-how-to-read-code"
    },
    {
     "title": "エラーメッセージは「ヒントの手紙」",
     "level": 1,
     "minutes": 12,
     "concepts": [
      "errors",
      "reading"
     ],
     "summary": "エラーメッセージのどこを見れば原因が分かるか。",
     "body": "## このレッスンのゴール\n\n- エラーメッセージの **一番下の行** と **行番号** を読める\n- よく出るエラーの意味がざっくり分かる\n\n## エラーは怖くない\n\nAI のコードを動かすと、エラーが出ることはよくあります。エラーメッセージは\n「どこで・何が・なぜ」うまくいかなかったかを教えてくれる **ヒントの手紙** です。\n\n```text\nTraceback (most recent call last):\n  File \"app.py\", line 12, in <module>\n    total = add(price, \"100\")\n  File \"app.py\", line 3, in add\n    return a + b\nTypeError: unsupported operand type(s) for +: 'int' and 'str'\n```\n\n## 読む順番：下から上へ\n\n1. **一番下の行**：エラーの種類と理由\n   `TypeError`（型のエラー）。「int（整数）と str（文字列）は + できない」\n2. **そのすぐ上**：エラーが起きた場所（3 行目の `return a + b`）\n3. **さらに上**：そこに至るまでの呼び出しの流れ（12 行目で `add` を呼んだ）\n\n原因は 12 行目で `\"100\"`（文字列）を渡していることです。`100`（数値）にすれば直ります。\n\n## よく出るエラー早見表（Python）\n\n| エラー | ざっくりした意味 |\n|---|---|\n| `SyntaxError` | 文法の書き間違い（カッコの閉じ忘れなど） |\n| `IndentationError` | 字下げ（インデント）がずれている |\n| `NameError` | その名前の変数・関数が見つからない（タイプミスや定義前） |\n| `TypeError` | 型が合わない（数値と文字列を足したなど） |\n| `KeyError` | 辞書にそのキーが無い |\n| `IndexError` | リストの範囲外を指定した |\n| `ModuleNotFoundError` | ライブラリがインストールされていない |\n\nJavaScript でも `TypeError` や `ReferenceError`（≒ NameError）など、似た名前のものが出てきます。\n\n## AI にエラーを聞くときのコツ\n\nエラーメッセージは **全文そのまま** 貼り付けるのが一番です。一番下の行だけだと、どこで起きたかが伝わりません。\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "Python のエラーメッセージ（Traceback）は、まずどこを見る？",
        "choices": [
         "一番上の行",
         "一番下の行",
         "真ん中の行"
        ],
        "answer": 1,
        "explain": "一番下にエラーの種類と理由が書かれています。"
       },
       {
        "question": "`ModuleNotFoundError: No module named 'requests'` の原因として最も考えられるのは？",
        "choices": [
         "requests という変数のタイプミス",
         "requests ライブラリがインストールされていない",
         "インデントがずれている"
        ],
        "answer": 1,
        "explain": "pip install requests でインストールすると解決することが多いです。"
       },
       {
        "question": "`NameError: name 'totl' is not defined` から分かることは？",
        "choices": [
         "totl という名前が定義されていない（total のタイプミスかも）",
         "totl の型が間違っている",
         "totl がリストの範囲外"
        ],
        "answer": 0,
        "explain": "NameError は「その名前が見つからない」エラーです。"
       }
      ]
     ],
     "id": "03-reading-errors"
    },
    {
     "title": "AI のコードを使う前のチェックリスト",
     "level": 1,
     "minutes": 10,
     "concepts": [
      "reading",
      "security"
     ],
     "summary": "AI が書いたコードを鵜呑みにせず確認するための観点。",
     "body": "## このレッスンのゴール\n\n- AI のコードを使う前に確認すべき点を 5 つ挙げられる\n- 「動いた」と「正しい」は別物だと説明できる\n\n## AI のコードは「よくできた下書き」\n\nAI はとても上手にコードを書きますが、あなたの環境や目的を完全には知りません。\n**最終的に責任を持つのは使う人** です。次の 5 点を習慣にしましょう。\n\n## ✅ チェック 1：目的と合っているか\n\n頼んだことと、コードがしていることは一致していますか？\n「CSV を読み込んで合計を出す」と頼んだのに、ファイルを **書き換える** 処理が混ざっていないか確認します。\n\n## ✅ チェック 2：前提（環境・ライブラリ）は何か\n\n- 必要なライブラリ（`import` の行）はインストール済み？\n- ファイルの場所（パス）は自分の環境に合っている？\n- Python や Node.js のバージョンは？\n\n## ✅ チェック 3：うまくいかない時にどうなるか\n\nファイルが無い、ネットが切れている、入力が空…。\n**エラー処理**（`try` / `except` など）が無いと、そこで止まってしまいます。\n\n## ✅ チェック 4：秘密情報と危ない操作\n\n```python\nAPI_KEY = \"sk-1234567890abcdef\"   # ← コードに直接書くのは危険\n```\n\n- パスワードや API キーがコードに直書きされていないか（環境変数を使うのが基本）\n- `rm -rf`、`DELETE FROM` など **消す系** の操作が無いか\n- ユーザーの入力をそのまま SQL やコマンドに混ぜていないか\n\n## ✅ チェック 5：自分の言葉で説明できるか\n\n最後はこれです。**人に説明できないコードは、壊れたときに直せません。**\n「30 秒で説明するなら？」を自分に問いかけてみましょう。\n\n## まとめ\n\n| チェック | 一言で |\n|---|---|\n| 目的 | 頼んだ通り？ |\n| 前提 | 自分の環境で動く？ |\n| 失敗時 | 壊れたらどうなる？ |\n| 安全 | 秘密・削除・入力は大丈夫？ |\n| 説明 | 自分の言葉で言える？ |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "API キーの扱いとして良いのは？",
        "choices": [
         "コードの先頭に直接書く",
         "環境変数などコードの外に置く",
         "コメントに書いておく"
        ],
        "answer": 1,
        "explain": "コードに書くと、GitHub などに公開したときに漏れてしまいます。"
       },
       {
        "question": "「AI のコードを実行したら動いた」。これで十分と言える？",
        "choices": [
         "はい、動けば正しい",
         "いいえ、目的・失敗時・安全性も確認が必要"
        ],
        "answer": 1,
        "explain": "動くことと、正しく安全であることは別です。"
       }
      ]
     ],
     "id": "04-checking-ai-code"
    }
   ],
   "status": "open"
  },
  {
   "title": "Python",
   "icon": "🐍",
   "order": 10,
   "description": "AI が最もよく書く言語のひとつ。読みやすく、すべての言語の比較の基準になる。",
   "levels": {
    "1": "入門",
    "2": "基礎",
    "3": "実践",
    "4": "応用"
   },
   "id": "10-python",
   "lessons": [
    {
     "title": "変数と型",
     "level": 1,
     "minutes": 12,
     "concepts": [
      "variables",
      "types",
      "operators"
     ],
     "summary": "値に名前をつける「変数」と、値の種類「型」。",
     "body": "## このレッスンのゴール\n\n- `=` が「等しい」ではなく **代入** だと説明できる\n- 4 つの基本の型（int / float / str / bool）を見分けられる\n\n## 変数＝名前のついた箱\n\n```python\nage = 20\nname = \"Ryo\"\nage = age + 1   # 右側を計算してから、左の箱に入れ直す → 21\n```\n\n`=` は数学の「等しい」ではなく、**右の値を左の名前に入れる** という意味です。\nだから `age = age + 1` という、数学ではありえない式が成り立ちます。\n\n## 基本の型\n\n| 型 | 例 | 意味 |\n|---|---|---|\n| `int` | `20`, `-3` | 整数 |\n| `float` | `3.14`, `1.0` | 小数 |\n| `str` | `\"hello\"`, `'あ'` | 文字列（`\"` か `'` で囲む） |\n| `bool` | `True`, `False` | 真偽値（はい / いいえ） |\n| `None` | `None` | 「何もない」を表す特別な値 |\n\n```python\nprint(type(3.14))   # <class 'float'>\nprint(\"1\" + \"2\")    # \"12\"  ← 文字列どうしは連結\nprint(1 + 2)        # 3\n```\n\n**同じ見た目でも型が違えば動きが違う** のがポイントです。\n\n## 型の変換\n\n```python\nint(\"42\")      # 42（文字列 → 整数）\nstr(42)        # \"42\"\nfloat(\"1.5\")   # 1.5\n```\n\n`input()` で受け取った値はいつも文字列なので、計算するときは `int(...)` で変換します。AI のコードでもよく見る形です。\n\n## 演算子\n\n| 記号 | 意味 | 例 |\n|---|---|---|\n| `+ - * /` | 四則演算（`/` は常に小数になる） | `7 / 2` → `3.5` |\n| `//` | 割り算の整数部分 | `7 // 2` → `3` |\n| `%` | 割り算の余り | `7 % 2` → `1` |\n| `**` | べき乗 | `2 ** 3` → `8` |\n| `== !=` | 等しい / 等しくない | `a == 1` |\n| `< > <= >=` | 大小比較 | |\n| `and or not` | かつ / または / ではない | |\n\n## AI のコードではこう出てくる\n\n```python\nMAX_RETRIES = 3          # 全部大文字 = 「変えない値（定数）」という慣習\nuser_count: int = 0      # 「: int」は型ヒント（Lv4 で学びます）\nis_valid = False         # is_ で始まる名前は bool のことが多い\n```\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`x = 5` の次に `x = x * 2` を実行すると x は？",
        "choices": [
         "5",
         "10",
         "エラーになる"
        ],
        "answer": 1,
        "explain": "右側（5 * 2 = 10）を計算してから x に入れ直します。"
       },
       {
        "question": "`\"3\" + \"4\"` の結果は？",
        "choices": [
         "7",
         "\"34\"",
         "エラー"
        ],
        "answer": 1,
        "explain": "文字列どうしの + は連結です。"
       },
       {
        "question": "`10 % 3` の結果は？",
        "choices": [
         "3",
         "3.33",
         "1"
        ],
        "answer": 2,
        "explain": "% は割り算の余りです。"
       }
      ]
     ],
     "id": "01-variables-and-types"
    },
    {
     "title": "条件分岐 if",
     "level": 1,
     "minutes": 10,
     "concepts": [
      "conditionals",
      "operators"
     ],
     "summary": "条件によって実行する処理を変える。",
     "body": "## このレッスンのゴール\n\n- `if / elif / else` の流れを追える\n- Python では **インデント（字下げ）がブロックを表す** と説明できる\n\n## 基本形\n\n```python\nscore = 75\n\nif score >= 80:\n    print(\"よくできました\")\nelif score >= 60:\n    print(\"合格\")\nelse:\n    print(\"もう少し\")\n```\n\n1. 上から条件を順に調べる\n2. **最初に当てはまったブロックだけ** を実行し、残りは飛ばす\n3. どれにも当てはまらなければ `else`\n\nこの例では `score >= 80` は偽、`score >= 60` が真なので「合格」だけ表示されます。\n\n## インデントが大事\n\n```python\nif score >= 60:\n    print(\"合格\")      # if の中\n    print(\"おめでとう\") # if の中\nprint(\"終わり\")         # if の外（必ず実行される）\n```\n\n多くの言語は `{ }` でブロックを囲みますが、Python は **字下げ（スペース 4 つ）** で表します。\n他の言語と比べるときのとても大事な違いです。\n\n## 「真」とみなされる値\n\nPython では `if` に bool 以外も置けます。\n\n```python\nitems = []\nif items:          # 空のリストは「偽」\n    print(\"あり\")\nelse:\n    print(\"空っぽ\")\n```\n\n`0`、`\"\"`（空文字）、`[]`、`{}`、`None` は偽、それ以外は真として扱われます。AI のコードで `if not data:` とあれば「data が空なら」という意味です。\n\n## 1 行で書く形（条件式）\n\n```python\nlabel = \"成人\" if age >= 18 else \"未成年\"\n```\n\n「条件が真なら左、偽なら右」。AI がよく使う短い書き方です。\n\n## 他の言語では\n\n```javascript\n// JavaScript\nif (score >= 80) {\n  console.log(\"よくできました\");\n} else if (score >= 60) {\n  console.log(\"合格\");\n}\n```\n\n`elif` が `else if` に、インデントが `{ }` に変わるだけで、考え方は同じです。\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "score = 85 のとき、上の「基本形」の例で表示されるのは？",
        "choices": [
         "よくできました",
         "よくできました と 合格",
         "合格"
        ],
        "answer": 0,
        "explain": "最初に当てはまったブロックだけが実行されます。"
       },
       {
        "question": "`if not name:` は何を調べている？",
        "choices": [
         "name が \"not\" という文字列か",
         "name が空（または None など偽の値）か",
         "name が定義されていないか"
        ],
        "answer": 1,
        "explain": "not は否定。空文字や None は偽なので、「name が空なら」という意味になります。"
       },
       {
        "question": "`x = \"A\" if ok else \"B\"` で ok が False のとき x は？",
        "choices": [
         "\"A\"",
         "\"B\""
        ],
        "answer": 1,
        "explain": "条件が偽なので else の右側が使われます。"
       }
      ]
     ],
     "id": "02-conditionals"
    },
    {
     "title": "繰り返し for と while",
     "level": 1,
     "minutes": 12,
     "concepts": [
      "loops",
      "collections"
     ],
     "summary": "同じ処理を何度も実行する仕組み。",
     "body": "## このレッスンのゴール\n\n- `for` が「中身を 1 つずつ取り出す」ループだと説明できる\n- `range`、`enumerate`、`break`、`continue` を読める\n\n## for：1 つずつ取り出す\n\n```python\nfruits = [\"りんご\", \"バナナ\", \"みかん\"]\nfor fruit in fruits:\n    print(fruit)\n```\n\n`fruits` から 1 つずつ取り出して `fruit` に入れ、ブロックを実行 —— を最後まで繰り返します。\n\n## range：回数で回す\n\n```python\nfor i in range(3):\n    print(i)    # 0, 1, 2\n```\n\n`range(3)` は 0, 1, 2（**3 は含まない**）。`range(1, 4)` なら 1, 2, 3 です。\n\n## enumerate：番号もほしいとき\n\n```python\nfor i, fruit in enumerate(fruits):\n    print(i, fruit)   # 0 りんご / 1 バナナ / 2 みかん\n```\n\nAI のコードで非常によく見る形です。`i, fruit` のように 2 つ同時に受け取る書き方を **アンパック** と呼びます。\n\n## while：条件が真のあいだ回す\n\n```python\ncount = 0\nwhile count < 3:\n    print(count)\n    count += 1     # count = count + 1 の短縮形\n```\n\n条件がずっと真のままだと **無限ループ** になります。`while True:` は「`break` で抜けるまで回り続ける」という意図的な書き方です。\n\n## break と continue\n\n```python\nfor n in [1, 2, 3, 4, 5]:\n    if n == 2:\n        continue   # 今回だけ飛ばして次へ\n    if n == 4:\n        break      # ループ自体を終了\n    print(n)       # 1, 3\n```\n\n## 他の言語では\n\n```javascript\nfor (const fruit of fruits) { console.log(fruit); }     // JS の for...of ≒ Python の for\nfor (let i = 0; i < 3; i++) { console.log(i); }         // C 言語風：初期化; 条件; 更新\n```\n\nC・Java・JavaScript で見る `for (let i = 0; i < 3; i++)` は、Python の `for i in range(3)` と同じ意味です。\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`range(2, 5)` が作る数は？",
        "choices": [
         "2, 3, 4, 5",
         "2, 3, 4",
         "3, 4, 5"
        ],
        "answer": 1,
        "explain": "終わりの数は含みません。"
       },
       {
        "question": "ループの中で `continue` が実行されると？",
        "choices": [
         "ループ全体が終わる",
         "今回の残りを飛ばして次の回へ進む",
         "プログラムが止まる"
        ],
        "answer": 1,
        "explain": "ループ全体を終えるのは break です。"
       },
       {
        "question": "`for (let i = 0; i < 3; i++)` を Python で書くと？",
        "choices": [
         "for i in range(3):",
         "for i in 3:",
         "while i < 3:"
        ],
        "answer": 0,
        "explain": "どちらも 0, 1, 2 の 3 回まわります。"
       }
      ]
     ],
     "id": "03-loops"
    },
    {
     "title": "リストと辞書",
     "level": 1,
     "minutes": 15,
     "concepts": [
      "collections",
      "memory"
     ],
     "summary": "複数の値をまとめて扱うデータ構造。",
     "body": "## このレッスンのゴール\n\n- リスト（順番で管理）と辞書（名前で管理）を使い分けて説明できる\n- JSON や API のデータが「辞書とリストの組み合わせ」だと分かる\n\n## リスト：順番に並んだデータ\n\n```python\nscores = [80, 65, 92]\nscores[0]        # 80（番号＝インデックスは 0 から）\nscores[-1]       # 92（マイナスは後ろから）\nscores.append(70)  # 末尾に追加 → [80, 65, 92, 70]\nlen(scores)      # 4（要素の数）\nscores[1:3]      # [65, 92]（スライス：1 番目から 3 番目の手前まで）\n```\n\n## 辞書：名前（キー）でデータを取り出す\n\n```python\nuser = {\"name\": \"Ryo\", \"age\": 20}\nuser[\"name\"]           # \"Ryo\"\nuser[\"email\"] = \"a@b\"  # 追加\nuser.get(\"tel\")        # None（無くてもエラーにならない）\nuser[\"tel\"]            # KeyError！（無いキー）\n```\n\nAI のコードで `.get(\"key\", 既定値)` が多いのは、**キーが無い場合でも止まらないようにするため** です。\n\n## 辞書をループする\n\n```python\nfor key, value in user.items():\n    print(key, value)\n```\n\n## 組み合わせ ＝ 現実のデータの形\n\n```python\nusers = [\n    {\"name\": \"Ryo\", \"skills\": [\"Python\", \"SQL\"]},\n    {\"name\": \"Ken\", \"skills\": [\"Go\"]},\n]\nusers[0][\"skills\"][1]   # \"SQL\"\n```\n\nWeb API から返ってくる JSON は、ほぼこの形です。\n**外側から 1 段ずつ「リストなら番号、辞書ならキー」** と読んでいけば、どんなに深くても読めます。\n\n## 注意：コピーではなく「同じものを指す」\n\n```python\na = [1, 2]\nb = a\nb.append(3)\nprint(a)   # [1, 2, 3] ← a も変わる！\n```\n\n`b = a` は箱の中身をコピーするのではなく、**同じリストに 2 つ目の名札をつける** だけです。\n別物にしたいときは `b = a.copy()`。AI のコードにバグが潜みやすいポイントです。\n\n## その他のコレクション\n\n| 名前 | 書き方 | 特徴 |\n|---|---|---|\n| タプル | `(1, 2)` | 変更できないリスト |\n| セット | `{1, 2}` | 重複なし・順番なし |\n\n## 他の言語では\n\n| Python | JavaScript | 多くの言語での呼び名 |\n|---|---|---|\n| リスト `[1, 2]` | 配列 `[1, 2]` | 配列 / Array / Vec |\n| 辞書 `{\"a\": 1}` | オブジェクト `{a: 1}` / Map | マップ / ハッシュ / Dictionary |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`colors = [\"赤\", \"青\", \"緑\"]` のとき `colors[1]` は？",
        "choices": [
         "\"赤\"",
         "\"青\"",
         "\"緑\""
        ],
        "answer": 1,
        "explain": "インデックスは 0 から数えます。"
       },
       {
        "question": "辞書に無いキーを `d[\"x\"]` で取り出すと？",
        "choices": [
         "None が返る",
         "KeyError になる",
         "空文字が返る"
        ],
        "answer": 1,
        "explain": "エラーにしたくないときは d.get(\"x\") を使います。"
       },
       {
        "question": "`data[\"items\"][0][\"price\"]` はどう読む？",
        "choices": [
         "data の \"items\"（リスト）の 0 番目（辞書）の \"price\"",
         "data の 0 番目の \"items\" の \"price\""
        ],
        "answer": 0,
        "explain": "左から 1 段ずつ、辞書ならキー・リストなら番号で取り出します。"
       }
      ]
     ],
     "id": "04-lists-and-dicts"
    },
    {
     "title": "関数",
     "level": 2,
     "minutes": 15,
     "concepts": [
      "functions",
      "scope"
     ],
     "summary": "処理に名前をつけてまとめ、何度も使えるようにする。",
     "body": "## このレッスンのゴール\n\n- 引数・戻り値・呼び出しの関係を説明できる\n- デフォルト引数とキーワード引数を読める\n- 「関数の中の変数は外から見えない（スコープ）」と分かる\n\n## 関数の形\n\n```python\ndef add_tax(price, rate=0.1):\n    \"\"\"税込み価格を返す\"\"\"   # ← docstring（関数の説明書き）\n    return price * (1 + rate)\n\ntotal = add_tax(1000)          # 1100.0\ntotal2 = add_tax(1000, 0.08)   # 1080.0\n```\n\n| 部分 | 意味 |\n|---|---|\n| `def` | 関数を定義する（この時点では **実行されない**） |\n| `price, rate` | 引数（パラメータ）：受け取る値 |\n| `rate=0.1` | デフォルト値：渡されなければ 0.1 |\n| `return` | 戻り値：呼び出し元に返す値 |\n\n`def` は「予約」です。**呼ばれたときに初めて中身が実行されます**。\nコードを読むときは、`def` を見たら「こういう道具がある」とだけ覚えて、呼ばれている場所から追いかけましょう。\n\n## return が無い関数\n\n```python\ndef greet(name):\n    print(f\"こんにちは {name}\")\n\nresult = greet(\"Ryo\")   # 表示はされるが…\nprint(result)           # None\n```\n\n`return` が無いと `None` が返ります。「表示する」と「返す」は別物です。\n\n## キーワード引数\n\n```python\nadd_tax(price=1000, rate=0.08)\nrequests.get(url, timeout=10)\n```\n\n`名前=値` で渡すと、順番を気にせず意味もはっきりします。AI のコードやライブラリの呼び出しで多用されます。\n\n## スコープ：変数が見える範囲\n\n```python\ndef calc():\n    temp = 5      # 関数の中だけで使える（ローカル変数）\n    return temp * 2\n\ncalc()\nprint(temp)       # NameError！ 外からは見えない\n```\n\n関数の中の変数は、その関数が終わると消えます。これのおかげで、関数どうしが変数名でぶつかりません。\n\n## *args と **kwargs\n\n```python\ndef log(*args, **kwargs):\n    print(args)     # 位置引数をタプルで受け取る\n    print(kwargs)   # キーワード引数を辞書で受け取る\n\nlog(1, 2, level=\"info\")   # (1, 2) / {'level': 'info'}\n```\n\n「いくつ渡されてもよい」という意味。ライブラリのコードでよく見ます。\n\n## 他の言語では\n\n```javascript\nfunction addTax(price, rate = 0.1) { return price * (1 + rate); }  // JavaScript\n```\n```go\nfunc addTax(price float64, rate float64) float64 { return price * (1 + rate) }  // Go（型を書く）\n```\n\nキーワードが `def` / `function` / `func` / `fn` と変わっても、**名前・引数・戻り値** という骨組みは共通です。\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`def` で関数を定義した時点で、中身は実行される？",
        "choices": [
         "はい",
         "いいえ、呼び出されたときに実行される"
        ],
        "answer": 1,
        "explain": "def は「予約」です。"
       },
       {
        "question": "return の無い関数の戻り値は？",
        "choices": [
         "0",
         "None",
         "エラーになる"
        ],
        "answer": 1,
        "explain": "何も返さないと None が返ります。"
       },
       {
        "question": "`def f(a, b=2): return a + b` に対して `f(1)` は？",
        "choices": [
         "1",
         "3",
         "エラー"
        ],
        "answer": 1,
        "explain": "b はデフォルト値の 2 が使われます。"
       }
      ]
     ],
     "id": "05-functions"
    },
    {
     "title": "文字列と f-string",
     "level": 2,
     "minutes": 10,
     "concepts": [
      "strings"
     ],
     "summary": "文字列の組み立て・加工でよく使う書き方。",
     "body": "## このレッスンのゴール\n\n- f-string を読める\n- よく使う文字列メソッドが分かる\n\n## f-string：値を埋め込む\n\n```python\nname = \"Ryo\"\nprice = 1234.5\nprint(f\"{name}さんの合計は {price:,.0f} 円\")   # Ryoさんの合計は 1,234 円\n```\n\n先頭の `f` と `{ }` がポイント。`{ }` の中は **Python の式** で、`:` の後ろは表示の書式です。\n\n| 書式 | 意味 | 例 |\n|---|---|---|\n| `{x:.2f}` | 小数 2 桁 | `3.14` |\n| `{x:,}` | 3 桁区切り | `1,234` |\n| `{x:>5}` | 5 文字幅で右寄せ | `   42` |\n| `{x=}` | 「x=値」の形（デバッグ用） | `x=42` |\n\n## よく使うメソッド\n\n```python\ns = \"  Hello, World  \"\ns.strip()          # \"Hello, World\"（前後の空白を除く）\ns.lower()          # \"  hello, world  \"\n\"a,b,c\".split(\",\") # [\"a\", \"b\", \"c\"]（区切って リストに）\n\"-\".join([\"a\",\"b\"])# \"a-b\"（リストをつなげる）\n\"cat\".replace(\"c\", \"h\")  # \"hat\"\n\"Hello\".startswith(\"He\") # True\n\"py\" in \"python\"   # True（含むか）\n```\n\n`split` と `join` は対になっていて、CSV やログの処理で頻出です。\n\n## 文字列は変更できない\n\n```python\ns = \"abc\"\ns.upper()     # \"ABC\" を「新しく作って返す」\nprint(s)      # \"abc\" のまま！\ns = s.upper() # 入れ直す必要がある\n```\n\nメソッドは元の文字列を変えず、**新しい文字列を返します**（イミュータブル＝変更不可）。\n\n## 複数行・特殊文字\n\n```python\ntext = \"\"\"複数行の\n文字列\"\"\"\npath = r\"C:\\new\\folder\"   # r\"...\" は \\ を特別扱いしない（raw 文字列）\n\"改行は\\nこう書く\"\n```\n\n## 他の言語では\n\n| Python | JavaScript | その他 |\n|---|---|---|\n| `f\"{name}さん\"` | `` `${name}さん` ``（バッククォート） | Ruby `\"#{name}\"`、C# `$\"{name}\"` |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`f\"{3.14159:.2f}\"` の結果は？",
        "choices": [
         "\"3.14\"",
         "\"3.14159\"",
         "\"3.1\""
        ],
        "answer": 0,
        "explain": ".2f は小数点以下 2 桁です。"
       },
       {
        "question": "`\"a b c\".split()` の結果は？",
        "choices": [
         "\"abc\"",
         "[\"a\", \"b\", \"c\"]",
         "(\"a\", \"b\", \"c\")"
        ],
        "answer": 1,
        "explain": "split は文字列を区切ってリストにします（引数なしなら空白で区切る）。"
       },
       {
        "question": "`s = \"hi\"; s.upper(); print(s)` で表示されるのは？",
        "choices": [
         "hi",
         "HI"
        ],
        "answer": 0,
        "explain": "文字列は変更できないので、upper() の結果を入れ直さない限り s は変わりません。"
       }
      ]
     ],
     "id": "06-strings"
    },
    {
     "title": "例外処理 try / except",
     "level": 2,
     "minutes": 12,
     "concepts": [
      "errors"
     ],
     "summary": "エラーが起きても止まらないようにする仕組み。",
     "body": "## このレッスンのゴール\n\n- `try / except / else / finally` の流れを追える\n- `raise` の意味が分かる\n- 「何でも except」の危うさを説明できる\n\n## 基本形\n\n```python\ntry:\n    age = int(input(\"年齢: \"))\nexcept ValueError:\n    print(\"数字を入力してください\")\n    age = 0\n```\n\n`try` の中でエラー（**例外**）が起きたら、残りを飛ばして `except` に移ります。\n起きなければ `except` は無視されます。\n\n## 全部入りの形\n\n```python\ntry:\n    f = open(\"data.txt\")\n    text = f.read()\nexcept FileNotFoundError:\n    print(\"ファイルがありません\")\nexcept PermissionError as e:\n    print(\"読めません:\", e)      # e にエラーの詳細が入る\nelse:\n    print(\"読めました\")          # 例外が起きなかったときだけ\nfinally:\n    print(\"後片付け\")            # 必ず実行される\n```\n\n## raise：自分でエラーを起こす\n\n```python\ndef withdraw(balance, amount):\n    if amount > balance:\n        raise ValueError(\"残高不足です\")\n    return balance - amount\n```\n\n「おかしな状態のまま進むより、ここで止める」ための仕組みです。呼び出し元が `try` で受け止めます。\n\n## ⚠️ AI のコードで注意したい書き方\n\n```python\ntry:\n    do_something()\nexcept Exception:\n    pass          # エラーを握りつぶしている！\n```\n\n`except Exception: pass` は **どんなエラーも黙って無視** します。動いているように見えて、実はデータが壊れていても気づけません。\n少なくともログを出す（`print` や `logging`）のが望ましく、レビューで指摘すべきポイントです。\n\n## 他の言語では\n\n| 言語 | 書き方 |\n|---|---|\n| JavaScript / Java / C# | `try { } catch (e) { } finally { }` |\n| Go | 例外がなく、`result, err := f()` と **エラーを値で返す** |\n| Rust | `Result<T, E>` 型と `?` 演算子 |\n\nGo や Rust は「失敗するかもしれない」ことを **戻り値の型** で表します。コースを進めると出てきます。\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "try の中でエラーが起きなかった場合、except ブロックは？",
        "choices": [
         "実行される",
         "実行されない"
        ],
        "answer": 1,
        "explain": "except は例外が起きたときだけ実行されます。"
       },
       {
        "question": "finally ブロックはいつ実行される？",
        "choices": [
         "エラーが起きたときだけ",
         "エラーが起きなかったときだけ",
         "どちらの場合も必ず"
        ],
        "answer": 2,
        "explain": "後片付け（ファイルを閉じる等）に使います。"
       },
       {
        "question": "`except Exception: pass` の問題点は？",
        "choices": [
         "どんなエラーも黙って無視するので、異常に気づけない",
         "文法エラーになる",
         "処理が遅くなる"
        ],
        "answer": 0,
        "explain": "エラーを握りつぶすのは典型的なアンチパターンです。"
       }
      ]
     ],
     "id": "07-exceptions"
    },
    {
     "title": "モジュールと import・pip",
     "level": 2,
     "minutes": 12,
     "concepts": [
      "modules",
      "tooling"
     ],
     "summary": "他のファイルやライブラリの機能を使う仕組み。",
     "body": "## このレッスンのゴール\n\n- `import` の 3 つの書き方を読める\n- 標準ライブラリと外部ライブラリの違い、pip の役割を説明できる\n- `if __name__ == \"__main__\":` の意味が分かる\n\n## import の書き方\n\n```python\nimport math                   # math.sqrt(2) のように使う\nfrom datetime import date     # date.today() と直接使える\nimport pandas as pd           # 別名をつける（pd.read_csv）\n```\n\n`as` の別名には慣習があります：`numpy as np`、`pandas as pd`、`matplotlib.pyplot as plt`。\nAI のコードでこれを見たら「データ分析系だな」と分かります。\n\n## 標準ライブラリ と 外部ライブラリ\n\n| | 例 | インストール |\n|---|---|---|\n| 標準ライブラリ | `os`, `json`, `datetime`, `pathlib`, `csv` | 不要（Python に付属） |\n| 外部ライブラリ | `requests`, `pandas`, `flask` | `pip install requests` |\n\n外部ライブラリの一覧は `requirements.txt` に書くのが慣習です。\n\n```text\nrequests==2.32.3\npandas>=2.0\n```\n\n```bash\npip install -r requirements.txt\n```\n\n**仮想環境（venv）** は、プロジェクトごとにライブラリを分けて入れるための仕組みです。AI が `python -m venv .venv` と言ってきたらこれのことです。\n\n## 自分のファイルも import できる\n\n```text\nmyapp/\n├── main.py\n└── utils.py      ← def format_price(x): ...\n```\n\n```python\n# main.py\nfrom utils import format_price\n```\n\nファイル 1 つ＝モジュール 1 つ。大きなプログラムは、こうして役割ごとにファイルを分けています。\n\n## `if __name__ == \"__main__\":`\n\n```python\ndef main():\n    print(\"実行されました\")\n\nif __name__ == \"__main__\":\n    main()\n```\n\n「このファイルが **直接実行されたときだけ** `main()` を呼ぶ」という意味です。\n他のファイルから import されたときには実行されません。**Python プログラムの入口の目印** として覚えましょう。\n\n## 他の言語では\n\n| 言語 | 読み込み | パッケージ管理 | 一覧ファイル |\n|---|---|---|---|\n| Python | `import x` | pip | requirements.txt / pyproject.toml |\n| JavaScript | `import x from \"x\"` | npm | package.json |\n| Go | `import \"fmt\"` | go mod | go.mod |\n| Rust | `use x;` | cargo | Cargo.toml |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`from pathlib import Path` のあと、Path はどう使う？",
        "choices": [
         "Path(\"a.txt\")",
         "pathlib.Path(\"a.txt\") でしか使えない",
         "import Path が必要"
        ],
        "answer": 0,
        "explain": "from ... import で取り込んだ名前は直接使えます。"
       },
       {
        "question": "`ModuleNotFoundError: No module named 'pandas'` を直すには？",
        "choices": [
         "import pandas as pd に書き換える",
         "pip install pandas",
         "pandas.py を作る"
        ],
        "answer": 1,
        "explain": "外部ライブラリなのでインストールが必要です。"
       },
       {
        "question": "`if __name__ == \"__main__\":` の中身が実行されるのは？",
        "choices": [
         "そのファイルを直接実行したとき",
         "他のファイルから import されたとき",
         "いつでも"
        ],
        "answer": 0,
        "explain": "import されたときは実行されません。"
       }
      ]
     ],
     "id": "08-modules"
    },
    {
     "title": "内包表記とラムダ",
     "level": 3,
     "minutes": 15,
     "concepts": [
      "collections",
      "higher_order",
      "loops"
     ],
     "summary": "AI が好んで書く「短い書き方」を読み解く。",
     "body": "## このレッスンのゴール\n\n- リスト内包表記を「普通の for 文」に戻して読める\n- `lambda` と `sorted(key=...)` を読める\n\n## リスト内包表記\n\n```python\nprices = [100, 250, 80]\nwith_tax = [p * 1.1 for p in prices]\n```\n\nこれは次の for 文と同じです。\n\n```python\nwith_tax = []\nfor p in prices:\n    with_tax.append(p * 1.1)\n```\n\n**読み方のコツ：真ん中の `for` から読み、最後に先頭の式を見る**。\n「prices の各 p について → p * 1.1 を集める」。\n\n## 条件つき\n\n```python\nexpensive = [p for p in prices if p >= 100]          # 絞り込み → [100, 250]\nlabels = [\"高\" if p >= 100 else \"安\" for p in prices] # 変換 → [\"高\", \"高\", \"安\"]\n```\n\n`if` が **後ろ** にあれば「絞り込み」、**前** にあれば「条件で値を変える」です。\n\n## 辞書内包表記・ジェネレータ式\n\n```python\nsquares = {n: n * n for n in range(4)}     # {0: 0, 1: 1, 2: 4, 3: 9}\ntotal = sum(p * 1.1 for p in prices)       # ( ) の中は一度にリストを作らない\n```\n\n## lambda：名前のない小さな関数\n\n```python\ndouble = lambda x: x * 2\n# ↓ と同じ\ndef double(x):\n    return x * 2\n```\n\n`lambda 引数: 戻り値` という形。単独で使うより、**他の関数に渡す** ときに使われます。\n\n## sorted / max の key\n\n```python\nusers = [{\"name\": \"Ken\", \"age\": 30}, {\"name\": \"Ryo\", \"age\": 20}]\nsorted(users, key=lambda u: u[\"age\"])           # 年齢順\nmax(users, key=lambda u: u[\"age\"])[\"name\"]      # \"Ken\"\n```\n\n`key=` は「何を基準に比べるか」を関数で渡します。関数を値として渡すこの考え方を **高階関数** と呼び、JavaScript の `map` / `filter` にもつながります。\n\n## 読みにくいときは for 文に戻す\n\n内包表記が二重・三重になっていたら、無理に 1 行で理解せず、**紙やメモに for 文で書き直す** と確実に読めます。\n\n## 他の言語では\n\n```javascript\nconst withTax = prices.map(p => p * 1.1);              // JS：map とアロー関数\nconst expensive = prices.filter(p => p >= 100);\n```\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`[x * 2 for x in [1, 2, 3] if x != 2]` の結果は？",
        "choices": [
         "[2, 4, 6]",
         "[2, 6]",
         "[1, 3]"
        ],
        "answer": 1,
        "explain": "2 を除いた 1 と 3 をそれぞれ 2 倍します。"
       },
       {
        "question": "`lambda a, b: a + b` と同じ意味の関数は？",
        "choices": [
         "def f(a, b): return a + b",
         "def f(a + b): return",
         "def f(): return a + b"
        ],
        "answer": 0,
        "explain": "lambda は引数と戻り値だけを書いた短い関数です。"
       },
       {
        "question": "`sorted(words, key=len)` は何順に並べる？",
        "choices": [
         "アルファベット順",
         "文字列の長さ順",
         "逆順"
        ],
        "answer": 1,
        "explain": "key に渡した関数（len）の結果で比べます。"
       }
      ]
     ],
     "id": "09-comprehensions-lambda"
    },
    {
     "title": "クラスとオブジェクト",
     "level": 3,
     "minutes": 18,
     "concepts": [
      "classes"
     ],
     "summary": "データと処理をひとまとめにする設計図。",
     "body": "## このレッスンのゴール\n\n- クラス（設計図）とインスタンス（実物）の違いを説明できる\n- `__init__` と `self` の役割が分かる\n- 継承の基本を読める\n\n## クラス＝設計図、インスタンス＝実物\n\n```python\nclass Dog:\n    def __init__(self, name, age):\n        self.name = name     # インスタンスごとのデータ（属性）\n        self.age = age\n\n    def bark(self):          # インスタンスの処理（メソッド）\n        return f\"{self.name}: ワン！\"\n\npochi = Dog(\"ポチ\", 3)       # インスタンスを作る\nprint(pochi.bark())          # ポチ: ワン！\nprint(pochi.age)             # 3\n```\n\n| 用語 | 意味 |\n|---|---|\n| `class Dog:` | 設計図の定義 |\n| `__init__` | 作るときに最初に呼ばれる初期化処理（コンストラクタ） |\n| `self` | 「このインスタンス自身」。`self.name` は「自分の名前」 |\n| `pochi.bark()` | メソッド呼び出し。`self` には自動で `pochi` が入る |\n\n## なぜクラスを使う？\n\n辞書でも同じデータは持てますが、クラスにすると **データと、それを扱う処理をセットで管理** できます。\n「犬のデータ」と「吠える処理」がバラバラにならないのです。\n\n## 継承：設計図を引き継ぐ\n\n```python\nclass Animal:\n    def __init__(self, name):\n        self.name = name\n    def speak(self):\n        return \"...\"\n\nclass Cat(Animal):           # Animal を引き継ぐ\n    def speak(self):         # 上書き（オーバーライド）\n        return f\"{self.name}: ニャー\"\n```\n\n`Cat` は `Animal` の `__init__` をそのまま使い、`speak` だけを自分用に変えています。\n`super().__init__(...)` と書いてあれば「親の初期化も呼ぶ」という意味です。\n\n## AI のコードでよく見る：dataclass\n\n```python\nfrom dataclasses import dataclass\n\n@dataclass\nclass User:\n    name: str\n    age: int = 0\n\nu = User(\"Ryo\", 20)\n```\n\n`@dataclass` を付けると `__init__` などを自動で作ってくれます。データを入れるだけのクラスはこの書き方が主流です。\n\n## 他の言語では\n\n| 言語 | 特徴 |\n|---|---|\n| JavaScript / Java / C# | `class` と `this`（Python の `self` にあたる） |\n| Go | クラスが無く、`struct`（構造体）＋メソッド |\n| Rust | `struct` ＋ `impl` ブロック |\n\n「データ＋処理をまとめる」という考え方は共通で、書き方が違うだけです。\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`__init__` はいつ呼ばれる？",
        "choices": [
         "インスタンスを作るとき（Dog(\"ポチ\", 3) のとき）",
         "メソッドを呼ぶたび",
         "プログラム終了時"
        ],
        "answer": 0,
        "explain": "初期化のための特別なメソッドです。"
       },
       {
        "question": "メソッド内の `self.name` は何を指す？",
        "choices": [
         "クラスの名前",
         "そのインスタンス自身の name 属性",
         "引数の name"
        ],
        "answer": 1,
        "explain": "self はメソッドを呼び出したインスタンス自身です。"
       },
       {
        "question": "`class Cat(Animal):` の意味は？",
        "choices": [
         "Cat は Animal を継承している",
         "Cat の引数は Animal",
         "Animal が Cat を継承している"
        ],
        "answer": 0,
        "explain": "カッコの中が親クラスです。"
       }
      ]
     ],
     "id": "10-classes"
    },
    {
     "title": "ファイルと JSON",
     "level": 3,
     "minutes": 15,
     "concepts": [
      "io",
      "data_formats"
     ],
     "summary": "ファイルの読み書きと、データ交換で定番の JSON・CSV。",
     "body": "## このレッスンのゴール\n\n- `with open(...)` の形と、それが安全な理由を説明できる\n- JSON と Python の辞書・リストの対応が分かる\n\n## with open：ファイルを読み書きする\n\n```python\nwith open(\"memo.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"こんにちは\\n\")\n\nwith open(\"memo.txt\", encoding=\"utf-8\") as f:\n    text = f.read()\n```\n\n| モード | 意味 |\n|---|---|\n| `\"r\"`（省略時） | 読み込み |\n| `\"w\"` | 書き込み（**既存の中身は消える**） |\n| `\"a\"` | 末尾に追記 |\n\n`with` を使うと、ブロックを抜けたとき（エラーでも）**自動でファイルを閉じて** くれます。\n`encoding=\"utf-8\"` は日本語の文字化けを防ぐためのお約束です。\n\n## pathlib：パスを扱う現代的な方法\n\n```python\nfrom pathlib import Path\n\npath = Path(\"data\") / \"users.json\"   # / でパスをつなげる\nif path.exists():\n    text = path.read_text(encoding=\"utf-8\")\n```\n\nAI のコードでは `os.path` より `pathlib` を見ることが増えています。\n\n## JSON\n\nJSON は Web API や設定ファイルで使われる、データの書き方です。Python の辞書・リストとほぼ同じ見た目です。\n\n```python\nimport json\n\ndata = {\"name\": \"Ryo\", \"skills\": [\"Python\"], \"active\": True}\ntext = json.dumps(data, ensure_ascii=False, indent=2)  # Python → JSON 文字列\nback = json.loads(text)                                  # JSON 文字列 → Python\n```\n\n| JSON | Python |\n|---|---|\n| `{}` オブジェクト | `dict` |\n| `[]` 配列 | `list` |\n| `true / false` | `True / False` |\n| `null` | `None` |\n\nファイルなら `json.load(f)` / `json.dump(data, f)`（`s` が付かない方）を使います。\n`ensure_ascii=False` は日本語を `あ` のような形にせずそのまま書くための指定です。\n\n## CSV\n\n```python\nimport csv\n\nwith open(\"scores.csv\", encoding=\"utf-8\", newline=\"\") as f:\n    for row in csv.DictReader(f):   # 1 行目を見出しとして辞書で読む\n        print(row[\"name\"], row[\"score\"])\n```\n\nCSV から読んだ値は **すべて文字列** です。計算するなら `int(row[\"score\"])` が必要です。\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`open(\"a.txt\", \"w\")` で既存のファイルを開くと？",
        "choices": [
         "末尾に追記される",
         "元の中身は消えて上書きされる",
         "エラーになる"
        ],
        "answer": 1,
        "explain": "追記したいときは \"a\" モードを使います。"
       },
       {
        "question": "`with open(...) as f:` を使う一番の利点は？",
        "choices": [
         "使い終わったら自動でファイルを閉じてくれる",
         "読み込みが速くなる",
         "文字化けしなくなる"
        ],
        "answer": 0,
        "explain": "エラーが起きても確実に閉じられます。"
       },
       {
        "question": "JSON の `null` は Python では？",
        "choices": [
         "0",
         "\"\"",
         "None"
        ],
        "answer": 2,
        "explain": "true/false は True/False、null は None に対応します。"
       }
      ]
     ],
     "id": "11-files-and-json"
    },
    {
     "title": "型ヒント",
     "level": 4,
     "minutes": 15,
     "concepts": [
      "type_hints",
      "types"
     ],
     "summary": "AI のコードに必ずと言っていいほど付いている「型の注釈」を読む。",
     "body": "## このレッスンのゴール\n\n- 関数の型ヒントを読んで、何を受け取り何を返すか分かる\n- `list[str]`、`dict[str, int]`、`X | None` などを読める\n\n## 型ヒントとは\n\n```python\ndef greet(name: str, times: int = 1) -> str:\n    return f\"こんにちは {name}\" * times\n```\n\n`name: str` は「name には文字列が来る想定」、`-> str` は「文字列を返す」という **注釈** です。\nPython は実行時にこれをチェックしません（違う型を渡しても動いてしまう）。\nそれでも AI がよく付けるのは、**読む人とエディタにとっての説明書** になるからです。\n\n## よく出る書き方\n\n| 型ヒント | 意味 |\n|---|---|\n| `list[str]` | 文字列のリスト |\n| `dict[str, int]` | キーが文字列・値が整数の辞書 |\n| `tuple[int, int]` | 整数 2 つのタプル |\n| `str \\| None` | 文字列 または None（古い書き方：`Optional[str]`） |\n| `int \\| float` | 整数か小数（古い書き方：`Union[int, float]`） |\n| `Any` | 何でもよい |\n| `Callable[[int], str]` | int を受け取り str を返す関数 |\n\n```python\ndef find_user(users: list[dict[str, str]], name: str) -> dict[str, str] | None:\n    for u in users:\n        if u[\"name\"] == name:\n            return u\n    return None\n```\n\n型ヒントだけで「ユーザーのリストから名前で探し、見つからなければ None」と読めます。\n**`| None` を見たら「呼び出し側で None のチェックが必要」** という合図です。\n\n## 型を確認するツール\n\n`mypy` や `pyright` というツールを使うと、型ヒントと実際の使い方が食い違っていないか検査できます。\nVS Code で赤い波線が出るのはこの仕組みです。\n\n## TypeScript への橋渡し\n\n```typescript\nfunction greet(name: string, times: number = 1): string { ... }\n```\n\nTypeScript の型注釈は Python の型ヒントとそっくりです。違いは、TypeScript では **型が合わないと実行前にエラー** になる点です。\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`def f(x: int) -> bool:` の意味は？",
        "choices": [
         "整数を受け取り真偽値を返す（想定の）関数",
         "bool を受け取り int を返す関数",
         "x が int でないと必ずエラーになる関数"
        ],
        "answer": 0,
        "explain": "Python では型ヒントは注釈で、実行時には強制されません。"
       },
       {
        "question": "`str | None` が戻り値の型なら、呼び出し側で注意することは？",
        "choices": [
         "None が返る場合の処理",
         "必ず空文字が返ること",
         "例外が起きること"
        ],
        "answer": 0,
        "explain": "「見つからない」ときなどに None が返る可能性を示しています。"
       },
       {
        "question": "`dict[str, list[int]]` に合うデータは？",
        "choices": [
         "[\"a\", 1]",
         "{\"a\": [1, 2]}",
         "{1: [\"a\"]}"
        ],
        "answer": 1,
        "explain": "キーが文字列、値が整数のリストです。"
       }
      ]
     ],
     "id": "12-type-hints-dataclass"
    },
    {
     "title": "デコレータと async/await",
     "level": 4,
     "minutes": 20,
     "concepts": [
      "higher_order",
      "async",
      "http_api"
     ],
     "summary": "Web フレームワークや API のコードで必ず出てくる 2 つの書き方。",
     "body": "## このレッスンのゴール\n\n- `@` で始まる行（デコレータ）の意味を説明できる\n- `async` / `await` が「待ち時間を有効に使う」ための書き方だと分かる\n\n## デコレータ：関数に機能をかぶせる\n\n```python\n@app.get(\"/hello\")\ndef hello():\n    return {\"message\": \"こんにちは\"}\n```\n\nFastAPI や Flask で必ず見る形です。`@app.get(\"/hello\")` は\n「この関数を、`/hello` にアクセスされたときに呼ぶよう **登録する**」という意味です。\n\n仕組みは「関数を受け取って、加工した関数を返す関数」です。\n\n```python\ndef log_call(func):\n    def wrapper(*args, **kwargs):\n        print(f\"{func.__name__} を呼びます\")\n        return func(*args, **kwargs)\n    return wrapper\n\n@log_call          # say = log_call(say) と同じ\ndef say():\n    print(\"やあ\")\n```\n\n**読むときは「@ の付いた関数に、何か追加の役割が与えられている」と理解すれば十分** です。\nよく見るもの：`@dataclass`、`@property`、`@staticmethod`、`@app.route`、`@pytest.fixture`。\n\n## async / await：待っている間に別の仕事をする\n\nネットからデータを取る処理は、結果が返るまで「待ち」が発生します。\n普通のコードは待っている間なにもできませんが、`async` を使うと **待ち時間に他の処理を進められます**。\n\n```python\nimport asyncio\n\nasync def fetch(name, seconds):\n    await asyncio.sleep(seconds)     # 待つ（その間、他の処理に譲る）\n    return f\"{name} 完了\"\n\nasync def main():\n    results = await asyncio.gather(  # 3 つを同時に進める\n        fetch(\"A\", 1), fetch(\"B\", 1), fetch(\"C\", 1),\n    )\n    print(results)                    # 約 1 秒で 3 つとも終わる\n\nasyncio.run(main())\n```\n\n| キーワード | 意味 |\n|---|---|\n| `async def` | 「途中で待つかもしれない関数」の定義 |\n| `await` | ここで結果を待つ（その間は他の処理に譲る） |\n| `asyncio.gather` | 複数を同時に進めて、全部終わるのを待つ |\n| `asyncio.run` | 非同期の世界の入口 |\n\n**`await` は `async def` の中でしか使えません。** AI のコードで `await` を見たら、その関数の定義に `async` が付いているはずです。\n\n## JavaScript では\n\n```javascript\nasync function main() {\n  const res = await fetch(\"https://example.com/api\");\n  const data = await res.json();\n}\n```\n\nJavaScript の非同期は **Promise** という仕組みの上にあり、`async/await` の見た目は Python とほぼ同じです。JavaScript コースで詳しく学びます。\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`@app.get(\"/users\")` が付いた関数はいつ呼ばれる？",
        "choices": [
         "ファイルを読み込んだとき",
         "/users にアクセス（GET リクエスト）されたとき",
         "1 秒ごと"
        ],
        "answer": 1,
        "explain": "デコレータでフレームワークに登録されています。"
       },
       {
        "question": "`await` を使える場所は？",
        "choices": [
         "async def で定義した関数の中",
         "どこでも",
         "class の中だけ"
        ],
        "answer": 0,
        "explain": "普通の def の中では使えません。"
       },
       {
        "question": "asyncio.gather で 1 秒かかる処理を 3 つ同時に実行すると、全体はおよそ何秒？",
        "choices": [
         "約 1 秒",
         "約 3 秒",
         "約 0 秒"
        ],
        "answer": 0,
        "explain": "待ち時間が重なるので、ほぼ 1 つ分の時間で終わります。"
       }
      ]
     ],
     "id": "13-decorators-async"
    }
   ],
   "status": "open"
  },
  {
   "title": "JavaScript",
   "icon": "🟨",
   "order": 20,
   "description": "Web ページを動かす言語。Python との違いを意識しながら読めるようになる。",
   "levels": {
    "1": "入門",
    "2": "基礎",
    "3": "実践"
   },
   "id": "20-javascript",
   "lessons": [
    {
     "title": "JavaScript の第一歩と変数",
     "level": 1,
     "minutes": 12,
     "concepts": [
      "variables",
      "types",
      "basics"
     ],
     "summary": "JavaScript がどこで動くか、let / const と基本の型。",
     "body": "## このレッスンのゴール\n\n- JavaScript が「ブラウザ」と「Node.js」で動くと説明できる\n- `const` / `let` / `var` の違いが分かる\n- Python との見た目の違い（`;`、`{}`、キャメルケース）に慣れる\n\n## どこで動く？\n\n| 場所 | 用途 |\n|---|---|\n| ブラウザ | Web ページを動かす（ボタン・画面の書き換え） |\n| Node.js | サーバー・ツール（Python と同じように PC 上で動く） |\n\nブラウザで F12 →「コンソール」を開くと、その場で JavaScript を試せます。\n\n## Python と並べてみる\n\n```javascript\nconst name = \"Ryo\";            // 変えない変数\nlet count = 0;                 // 変える変数\ncount = count + 1;\nconsole.log(`${name}: ${count}`);  // 表示（Python の print + f-string）\n```\n\n```python\nname = \"Ryo\"\ncount = 0\ncount = count + 1\nprint(f\"{name}: {count}\")\n```\n\n| | Python | JavaScript |\n|---|---|---|\n| 表示 | `print()` | `console.log()` |\n| 文の終わり | 改行 | `;`（省略可能だが付けることが多い） |\n| コメント | `#` | `//`（複数行は `/* */`） |\n| 名前の付け方 | `user_name`（スネークケース） | `userName`（キャメルケース） |\n\n## const / let / var\n\n- `const`：再代入できない。**基本はこれ**\n- `let`：再代入したいときだけ\n- `var`：古い書き方。AI の新しいコードではほぼ使われない（見たら古いコードのサイン）\n\n```javascript\nconst items = [1, 2];\nitems.push(3);      // OK！ 中身の変更はできる\nitems = [];         // エラー：箱そのものの入れ替えはできない\n```\n\n`const` は「中身が変わらない」ではなく **「別の値を入れ直せない」** という意味です。\n\n## 基本の型\n\n| 型 | 例 | Python では |\n|---|---|---|\n| number | `42`, `3.14` | int と float が 1 つにまとまっている |\n| string | `\"a\"`, `'a'`, `` `a` `` | str |\n| boolean | `true`, `false`（小文字！） | `True`, `False` |\n| null / undefined | 「値が無い」 | None |\n| object / array | `{a: 1}`, `[1, 2]` | dict / list |\n\n`undefined` は「まだ何も入っていない」、`null` は「意図的に空にした」。Python の `None` が 2 種類あるイメージです。\n\n## ⚠️ == と ===\n\n```javascript\n1 == \"1\"    // true （型を勝手にそろえて比べる）\n1 === \"1\"   // false（型も含めて比べる）\n```\n\n**JavaScript では常に `===` を使う** のが鉄則です。AI のコードで `==` があれば、レビューで確認するポイントです。\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "再代入しない変数を宣言するとき、基本的に使うのは？",
        "choices": [
         "const",
         "let",
         "var"
        ],
        "answer": 0,
        "explain": "迷ったら const、再代入が必要なときだけ let です。"
       },
       {
        "question": "Python の `True` は JavaScript では？",
        "choices": [
         "True",
         "true",
         "TRUE"
        ],
        "answer": 1,
        "explain": "JavaScript の真偽値は小文字です。"
       },
       {
        "question": "`0 === \"0\"` の結果は？",
        "choices": [
         "true",
         "false"
        ],
        "answer": 1,
        "explain": "=== は型も比べるので、数値と文字列は等しくありません。"
       }
      ]
     ],
     "id": "01-js-basics"
    },
    {
     "title": "条件分岐と繰り返し",
     "level": 1,
     "minutes": 12,
     "concepts": [
      "conditionals",
      "loops"
     ],
     "summary": "if / for / while を Python と見比べる。",
     "body": "## このレッスンのゴール\n\n- `{ }` ブロックの if・for を読める\n- `for...of` と `for...in` の違いが分かる\n- 三項演算子 `? :` を読める\n\n## if\n\n```javascript\nif (score >= 80) {\n  console.log(\"よくできました\");\n} else if (score >= 60) {\n  console.log(\"合格\");\n} else {\n  console.log(\"もう少し\");\n}\n```\n\n- 条件は `( )` で囲む\n- ブロックは `{ }`。インデントは見やすさのためで、意味は持たない\n- `elif` → `else if`、`and / or / not` → `&& / || / !`\n\n## 三項演算子\n\n```javascript\nconst label = age >= 18 ? \"成人\" : \"未成年\";\n```\n\nPython の `\"成人\" if age >= 18 else \"未成年\"` と同じ。**`条件 ? 真のとき : 偽のとき`** の順です。\n\n## for の 3 種類\n\n```javascript\nconst fruits = [\"りんご\", \"バナナ\"];\n\nfor (const fruit of fruits) { ... }          // ① 値を 1 つずつ（Python の for と同じ）\nfor (let i = 0; i < fruits.length; i++) { }  // ② 番号で回す（C 言語風）\nfor (const key in user) { ... }              // ③ オブジェクトのキーを回す\n```\n\n`of` は値、`in` はキー。**配列には `of` を使う** と覚えましょう（`in` だと番号の文字列が出てきます）。\n\n② の読み方：`let i = 0`（最初に 1 回）→ `i < fruits.length`（毎回の条件）→ `i++`（毎回の最後に i を 1 増やす）。\n\n## while・break・continue\n\n```javascript\nlet n = 0;\nwhile (n < 3) {\n  n++;\n  if (n === 2) continue;\n  console.log(n);   // 1, 3\n}\n```\n\nPython とまったく同じ意味です。\n\n## switch\n\n```javascript\nswitch (command) {\n  case \"start\":\n    run();\n    break;          // ← 無いと次の case も実行されてしまう\n  default:\n    console.log(\"不明\");\n}\n```\n\nPython の `match` 文や if-elif の連続にあたります。**`break` 忘れ** は典型的なバグです。\n\n## 「真」とみなされる値\n\n`0`、`\"\"`、`null`、`undefined`、`NaN`、`false` が偽。\nPython と違い、**空の配列 `[]` や空のオブジェクト `{}` は真** なので注意！ 空かどうかは `arr.length === 0` で調べます。\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`x > 0 ? \"正\" : \"負か0\"` で x = -1 のときの値は？",
        "choices": [
         "\"正\"",
         "\"負か0\""
        ],
        "answer": 1,
        "explain": "条件が偽なので : の右側です。"
       },
       {
        "question": "配列の値を 1 つずつ取り出すのに適しているのは？",
        "choices": [
         "for (const v of arr)",
         "for (const v in arr)"
        ],
        "answer": 0,
        "explain": "in はキー（配列なら番号）を取り出します。"
       },
       {
        "question": "JavaScript で `if ([])` は？",
        "choices": [
         "真（実行される）",
         "偽（実行されない）"
        ],
        "answer": 0,
        "explain": "Python と違い、空配列は真です。"
       }
      ]
     ],
     "id": "02-control-flow"
    },
    {
     "title": "配列とオブジェクト",
     "level": 1,
     "minutes": 15,
     "concepts": [
      "collections",
      "data_formats"
     ],
     "summary": "JavaScript のデータの入れ物と、分割代入・スプレッド構文。",
     "body": "## このレッスンのゴール\n\n- 配列とオブジェクトの基本操作を読める\n- 分割代入 `const { a } = obj` とスプレッド構文 `...` を読める\n\n## 配列（Python のリスト）\n\n```javascript\nconst nums = [10, 20, 30];\nnums[0];          // 10\nnums.length;      // 3（Python の len(nums)）\nnums.push(40);    // 末尾に追加（append）\nnums.includes(20) // true（Python の 20 in nums）\nnums.at(-1);      // 40（後ろから。nums[-1] は undefined になるので注意）\n```\n\n## オブジェクト（Python の辞書）\n\n```javascript\nconst user = { name: \"Ryo\", age: 20 };\nuser.name;        // \"Ryo\"（ドットでアクセス）\nuser[\"age\"];      // 20（キーが変数のときはこちら）\nuser.email;       // undefined（無いキーでもエラーにならない）\n```\n\nキーに `\" \"` が要らないのが Python との違いです。\nJSON は「JavaScript のオブジェクトの書き方」から生まれたので、見た目がそっくりです。\n\n## ?. と ??（AI のコードで頻出）\n\n```javascript\nconst city = user.address?.city;      // address が無ければ undefined（エラーにしない）\nconst name = user.nickname ?? \"名無し\"; // null / undefined なら右側を使う\n```\n\nPython の `user.get(\"address\", {}).get(\"city\")` と `or` の組み合わせにあたります。\n\n## 分割代入\n\n```javascript\nconst { name, age } = user;         // user.name と user.age を取り出す\nconst [first, second] = nums;       // 配列の先頭 2 つ\nfunction show({ name }) { ... }     // 引数で受け取るときにも使える\n```\n\nPython の `a, b = [1, 2]` を、オブジェクトにも使えるようにしたものです。React のコードで大量に出てきます。\n\n## スプレッド構文 ...\n\n```javascript\nconst more = [...nums, 50];                 // 配列を展開してつなげる\nconst updated = { ...user, age: 21 };       // コピーして age だけ変える\n```\n\n`{ ...user, age: 21 }` は「user のコピーを作り、age を上書き」。元の `user` は変わりません。\n**元を変えずに新しいものを作る** スタイルは、React などで重視されます。\n\n## 参照に注意（Python と同じ）\n\n```javascript\nconst a = [1, 2];\nconst b = a;   // 同じ配列を指す\nb.push(3);     // a も [1, 2, 3]\n```\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`const { age } = { name: \"A\", age: 3 }` のあと age は？",
        "choices": [
         "{ age: 3 }",
         "3",
         "undefined"
        ],
        "answer": 1,
        "explain": "オブジェクトから同じ名前のプロパティを取り出しています。"
       },
       {
        "question": "`user.profile?.bio` で profile が存在しない場合は？",
        "choices": [
         "エラーになる",
         "undefined になる",
         "空文字になる"
        ],
        "answer": 1,
        "explain": "?. は途中が無ければ undefined を返します。"
       },
       {
        "question": "`const c = { ...a, x: 1 }` の効果は？",
        "choices": [
         "a をコピーして x を 1 にした新しいオブジェクトを作る",
         "a の x を 1 に書き換える",
         "a と c が同じオブジェクトになる"
        ],
        "answer": 0,
        "explain": "スプレッドは浅いコピーを作ります。元の a は変わりません。"
       }
      ]
     ],
     "id": "03-arrays-objects"
    },
    {
     "title": "関数とアロー関数",
     "level": 2,
     "minutes": 15,
     "concepts": [
      "functions",
      "higher_order",
      "scope"
     ],
     "summary": "function、=>、コールバック。JavaScript で最も重要な書き方。",
     "body": "## このレッスンのゴール\n\n- `function` とアロー関数 `=>` の両方を読める\n- 「関数を引数として渡す（コールバック）」を説明できる\n\n## 3 つの書き方\n\n```javascript\nfunction add(a, b) {          // ① 関数宣言\n  return a + b;\n}\n\nconst add2 = function (a, b) { // ② 関数式（変数に入れる）\n  return a + b;\n};\n\nconst add3 = (a, b) => a + b;  // ③ アロー関数（AI が最もよく書く）\n```\n\nすべて同じ働きです。\n\n## アロー関数の省略ルール\n\n```javascript\nconst double = (x) => { return x * 2; };  // 基本形\nconst double2 = (x) => x * 2;             // { } と return を省略（1 式だけのとき）\nconst double3 = x => x * 2;               // 引数が 1 つなら ( ) も省略可\nconst makeUser = (name) => ({ name });    // オブジェクトを返すときは ( ) で囲む\n```\n\n`=>` の右側に `{` が **無ければ、その式がそのまま戻り値** です。\nPython の `lambda x: x * 2` と同じ感覚ですが、JavaScript では複数行も書けます。\n\n## 関数は値（コールバック）\n\n```javascript\nbutton.addEventListener(\"click\", () => {\n  console.log(\"押された！\");\n});\n\nsetTimeout(() => console.log(\"1 秒後\"), 1000);\n```\n\n「クリックされたら、この関数を呼んでね」と **関数そのものを渡しています**。\nこれを **コールバック** と呼び、JavaScript では至る所に出てきます。読むときは\n「`=>` 以降は、**今ではなく、何かが起きたときに実行される**」と意識しましょう。\n\n## デフォルト引数・残余引数\n\n```javascript\nfunction greet(name = \"ゲスト\", ...rest) {\n  // rest は残りの引数の配列（Python の *args）\n}\n```\n\n## スコープ\n\n`let` / `const` は **`{ }` の中だけ** で有効です（ブロックスコープ）。Python は関数単位なので、ここは JavaScript の方が細かいです。\n\n```javascript\nif (true) {\n  const msg = \"中\";\n}\nconsole.log(msg);   // ReferenceError\n```\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`const f = (a, b) => a * b;` で `f(2, 3)` は？",
        "choices": [
         "6",
         "undefined",
         "5"
        ],
        "answer": 0,
        "explain": "{ } が無いので a * b がそのまま返ります。"
       },
       {
        "question": "`const f = (x) => { x * 2 };` で `f(3)` は？",
        "choices": [
         "6",
         "undefined"
        ],
        "answer": 1,
        "explain": "{ } があるときは return が必要です。よくあるバグです。"
       },
       {
        "question": "`addEventListener(\"click\", handle)` の handle はいつ実行される？",
        "choices": [
         "この行が実行された瞬間",
         "クリックされたとき"
        ],
        "answer": 1,
        "explain": "関数を渡しておき、イベントが起きたときに呼ばれます（コールバック）。"
       }
      ]
     ],
     "id": "04-functions-arrow"
    },
    {
     "title": "map・filter・reduce",
     "level": 2,
     "minutes": 15,
     "concepts": [
      "higher_order",
      "collections"
     ],
     "summary": "AI のコードで毎回のように出てくる配列メソッドを読み解く。",
     "body": "## このレッスンのゴール\n\n- `map` / `filter` / `find` / `reduce` が何を返すか説明できる\n- メソッドチェーンを 1 段ずつ読める\n\n## 早見表\n\n| メソッド | 何をする？ | 返すもの | Python では |\n|---|---|---|---|\n| `map(f)` | 全要素を変換 | 同じ長さの新しい配列 | `[f(x) for x in arr]` |\n| `filter(f)` | 条件に合うものだけ残す | 短くなった新しい配列 | `[x for x in arr if f(x)]` |\n| `find(f)` | 条件に合う最初の 1 つ | 要素 1 つ（無ければ undefined） | `next((x for x in arr if f(x)), None)` |\n| `some(f)` / `every(f)` | 1 つでも / 全部 合うか | true / false | `any(...)` / `all(...)` |\n| `reduce(f, 初期値)` | 1 つの値にまとめる | 何でも | `functools.reduce` / `sum` |\n| `forEach(f)` | 各要素に処理（返さない） | undefined | 普通の for |\n\n## 例\n\n```javascript\nconst items = [\n  { name: \"ペン\", price: 120, stock: 3 },\n  { name: \"ノート\", price: 200, stock: 0 },\n  { name: \"消しゴム\", price: 80, stock: 5 },\n];\n\nconst names = items.map(item => item.name);           // [\"ペン\", \"ノート\", \"消しゴム\"]\nconst inStock = items.filter(item => item.stock > 0);  // ペンと消しゴム\nconst note = items.find(item => item.name === \"ノート\");\n```\n\n## reduce：たたみ込み\n\n```javascript\nconst total = items.reduce((sum, item) => sum + item.price, 0);  // 400\n```\n\n`(累積値, 今の要素) => 次の累積値` を繰り返します。\n\n| 回 | sum | item.price | 戻り値 |\n|---|---|---|---|\n| 1 | 0（初期値） | 120 | 120 |\n| 2 | 120 | 200 | 320 |\n| 3 | 320 | 80 | 400 |\n\nreduce が読みにくいときは、**この表を書けば必ず読めます**。\n\n## メソッドチェーン\n\n```javascript\nconst label = items\n  .filter(i => i.stock > 0)         // ① 在庫ありだけ\n  .map(i => `${i.name}(${i.price}円)`) // ② 文字列に変換\n  .join(\", \");                       // ③ つなげる\n// \"ペン(120円), 消しゴム(80円)\"\n```\n\n**上から 1 行ずつ「今どんな配列か」をメモしていく** のがコツです。\n\n## 引数の 2 番目\n\n```javascript\nitems.map((item, index) => `${index + 1}. ${item.name}`);\n```\n\nコールバックの 2 番目の引数は番号（Python の `enumerate`）。React でリストを表示するときに頻出です。\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`[1, 2, 3].map(x => x * 10)` の結果は？",
        "choices": [
         "[10, 20, 30]",
         "60",
         "[1, 2, 3]"
        ],
        "answer": 0,
        "explain": "map は全要素を変換した新しい配列を返します。"
       },
       {
        "question": "`[5, 8, 2].filter(x => x > 4)` の結果は？",
        "choices": [
         "[8]",
         "[5, 8]",
         "true"
        ],
        "answer": 1,
        "explain": "条件に合う要素をすべて残します。"
       },
       {
        "question": "`[1, 2, 3].reduce((a, b) => a + b, 10)` の結果は？",
        "choices": [
         "6",
         "16",
         "10"
        ],
        "answer": 1,
        "explain": "初期値 10 に 1, 2, 3 を順に足します。"
       }
      ]
     ],
     "id": "05-array-methods"
    },
    {
     "title": "DOM とイベント",
     "level": 2,
     "minutes": 15,
     "concepts": [
      "dom_ui",
      "higher_order"
     ],
     "summary": "JavaScript で Web ページを動かす仕組み。",
     "body": "## このレッスンのゴール\n\n- DOM が「HTML を JavaScript から操作するための木構造」だと説明できる\n- 要素を探す → 変える → イベントで反応する、の流れを読める\n\n## DOM とは\n\nブラウザは HTML を読み込むと、それを **木の形のデータ（DOM）** に変換します。\nJavaScript はこの DOM を通して、ページの文字や見た目を書き換えます。\n\n```html\n<button id=\"like\">いいね</button>\n<p id=\"count\">0</p>\n```\n\n## 3 ステップ：探す → 変える → 反応する\n\n```javascript\n// ① 探す\nconst button = document.querySelector(\"#like\");   // CSS セレクタで 1 つ探す\nconst countEl = document.getElementById(\"count\");\n\n// ③ 反応する\nlet count = 0;\nbutton.addEventListener(\"click\", () => {\n  count++;\n  // ② 変える\n  countEl.textContent = count;\n  button.classList.add(\"liked\");\n});\n```\n\n| よく使うもの | 意味 |\n|---|---|\n| `querySelector(\".a\")` / `querySelectorAll` | CSS セレクタで要素を探す（1 つ / 全部） |\n| `textContent` | 中の文字 |\n| `innerHTML` | 中の HTML（⚠️ ユーザー入力を入れると危険） |\n| `classList.add / remove / toggle` | CSS クラスの付け外し |\n| `value` | 入力欄の値 |\n| `createElement` / `append` | 要素を作って追加 |\n\n## イベントの種類\n\n`click`、`input`（入力のたび）、`change`、`submit`（フォーム送信）、`keydown`、`DOMContentLoaded`（ページ読み込み完了）など。\n\n```javascript\nform.addEventListener(\"submit\", (event) => {\n  event.preventDefault();   // ページの再読み込み（標準動作）を止める\n  ...\n});\n```\n\n`event.preventDefault()` はフォームの処理でほぼ必ず見る 1 行です。\n\n## ⚠️ セキュリティ：innerHTML\n\n```javascript\nel.innerHTML = userInput;    // 危険：<script> などが実行されうる（XSS）\nel.textContent = userInput;  // 安全：ただの文字として表示\n```\n\nAI のコードでユーザー入力を `innerHTML` に入れていたら要注意です。\n\n## React などのフレームワーク\n\n実際の開発では、DOM を直接操作せず React・Vue などを使うことが多いです。\nそれでも「状態が変わる → 画面が書き換わる」「イベントでコールバックが呼ばれる」という考え方は同じです。\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`document.querySelector(\".item\")` は何を返す？",
        "choices": [
         "class=\"item\" の最初の要素",
         "class=\"item\" の全要素",
         "id=\"item\" の要素"
        ],
        "answer": 0,
        "explain": "全部ほしいときは querySelectorAll です。"
       },
       {
        "question": "ユーザーの入力をページに表示するとき、安全なのは？",
        "choices": [
         "textContent",
         "innerHTML"
        ],
        "answer": 0,
        "explain": "innerHTML は HTML として解釈されるため XSS の危険があります。"
       },
       {
        "question": "フォームの submit イベントで `event.preventDefault()` を呼ぶ理由は？",
        "choices": [
         "ページの再読み込みを止めて、JavaScript で処理するため",
         "フォームを空にするため",
         "二重送信を自動で防ぐため"
        ],
        "answer": 0,
        "explain": "標準ではページが再読み込みされてしまいます。"
       }
      ]
     ],
     "id": "06-dom-events"
    },
    {
     "title": "Promise と async/await・fetch",
     "level": 3,
     "minutes": 20,
     "concepts": [
      "async",
      "http_api",
      "errors"
     ],
     "summary": "API からデータを取ってくるコードを読む。",
     "body": "## このレッスンのゴール\n\n- Promise が「あとで結果が届く約束」だと説明できる\n- `fetch` + `async/await` + `try/catch` の定番パターンを読める\n\n## なぜ非同期？\n\nネットからデータを取るのには時間がかかります。その間ページが固まってしまわないよう、\nJavaScript は **「結果はあとで渡すね」という約束（Promise）** をすぐ返し、処理を先に進めます。\n\n## 定番パターン\n\n```javascript\nasync function loadUsers() {\n  try {\n    const res = await fetch(\"https://api.example.com/users\");\n    if (!res.ok) {\n      throw new Error(`HTTP ${res.status}`);\n    }\n    const users = await res.json();\n    return users;\n  } catch (err) {\n    console.error(\"取得に失敗:\", err);\n    return [];\n  }\n}\n```\n\n1. `fetch(url)` でリクエスト → Promise が返る\n2. `await` で結果（レスポンス）を待つ\n3. `res.ok` で成功か確認（**fetch は 404 や 500 でもエラーにならない** ので、このチェックが必要）\n4. `await res.json()` で本文を JSON として読み込む（これも Promise）\n5. `try / catch` で失敗に備える（Python の try / except）\n\n## then で書く古い形\n\n```javascript\nfetch(url)\n  .then(res => res.json())\n  .then(users => console.log(users))\n  .catch(err => console.error(err));\n```\n\n`await` が登場する前の書き方です。意味は上と同じで、「終わったら（then）次へ」とつないでいます。\n\n## 複数を同時に\n\n```javascript\nconst [user, posts] = await Promise.all([\n  fetch(\"/api/user\").then(r => r.json()),\n  fetch(\"/api/posts\").then(r => r.json()),\n]);\n```\n\nPython の `asyncio.gather` と同じです。\n\n## POST で送る\n\n```javascript\nawait fetch(\"/api/posts\", {\n  method: \"POST\",\n  headers: { \"Content-Type\": \"application/json\" },\n  body: JSON.stringify({ title: \"こんにちは\" }),   // オブジェクト → JSON 文字列\n});\n```\n\n`JSON.stringify` / `JSON.parse` は Python の `json.dumps` / `json.loads` です。\n\n## よくあるミス\n\n```javascript\nconst data = fetch(url);   // await 忘れ → data は Promise（中身ではない）\nconsole.log(data.name);    // undefined\n```\n\nAI のコードでも `await` の付け忘れはときどきあります。**「この値は Promise か、中身か？」** を意識して読みましょう。\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "fetch がサーバーから 404 を受け取ったとき、catch に飛ぶ？",
        "choices": [
         "はい",
         "いいえ。res.ok を自分でチェックする必要がある"
        ],
        "answer": 1,
        "explain": "fetch がエラーになるのはネットワーク自体の失敗のときです。"
       },
       {
        "question": "`await res.json()` の await を付け忘れると？",
        "choices": [
         "中身ではなく Promise が変数に入る",
         "エラーで止まる",
         "同じ結果になる"
        ],
        "answer": 0,
        "explain": "await で待たないと、結果ではなく「約束」が入ります。"
       },
       {
        "question": "`Promise.all([a, b])` の意味は？",
        "choices": [
         "a と b を同時に進め、両方の結果を待つ",
         "a が終わってから b を始める",
         "先に終わった方だけを返す"
        ],
        "answer": 0,
        "explain": "先に終わった方だけなら Promise.race です。"
       }
      ]
     ],
     "id": "07-promise-async"
    },
    {
     "title": "モジュールと npm・package.json",
     "level": 3,
     "minutes": 12,
     "concepts": [
      "modules",
      "tooling"
     ],
     "summary": "import / export と、JavaScript プロジェクトの構成ファイルを読む。",
     "body": "## このレッスンのゴール\n\n- `import` / `export` の書き方を読める\n- `package.json` の主な項目と `npm install` / `npm run` が分かる\n\n## export と import\n\n```javascript\n// math.js\nexport function add(a, b) { return a + b; }   // 名前付き export\nexport const PI = 3.14;\nexport default function main() { ... }         // default export（1 ファイル 1 つ）\n```\n\n```javascript\n// app.js\nimport main, { add, PI } from \"./math.js\";     // default は { } の外\nimport * as math from \"./math.js\";             // まとめて math.add のように使う\nimport React, { useState } from \"react\";       // ライブラリから\n```\n\n| 書き方 | 意味 |\n|---|---|\n| `\"./math.js\"`（./ で始まる） | 自分のファイル |\n| `\"react\"`（名前だけ） | npm でインストールしたライブラリ |\n\n古いコードや Node.js では `const fs = require(\"fs\");` / `module.exports = ...` という書き方（CommonJS）も見ます。意味は同じです。\n\n## package.json：プロジェクトの設計書\n\n```json\n{\n  \"name\": \"my-app\",\n  \"scripts\": {\n    \"dev\": \"vite\",\n    \"build\": \"vite build\",\n    \"test\": \"vitest\"\n  },\n  \"dependencies\": {\n    \"react\": \"^18.3.1\"\n  },\n  \"devDependencies\": {\n    \"vite\": \"^5.4.0\"\n  }\n}\n```\n\n| 項目 | 意味 |\n|---|---|\n| `scripts` | `npm run dev` などで実行できるコマンドの一覧 |\n| `dependencies` | 動かすのに必要なライブラリ |\n| `devDependencies` | 開発中だけ必要なツール（ビルド・テスト） |\n| `^18.3.1` | 「18.x の範囲で新しいものを使ってよい」 |\n\n## よく使うコマンド\n\n```bash\nnpm install          # package.json の内容をインストール（node_modules/ ができる）\nnpm install axios    # ライブラリを追加\nnpm run dev          # scripts の dev を実行\n```\n\n`node_modules/` は巨大なので Git には含めません（`.gitignore` に書く）。\n`package-lock.json` は「実際に入れたバージョンの記録」で、こちらは Git に含めます。\n\n## Python との対応\n\n| Python | JavaScript |\n|---|---|\n| `pip install x` | `npm install x` |\n| requirements.txt / pyproject.toml | package.json |\n| `.venv/` | `node_modules/` |\n| `python main.py` | `node main.js` / `npm run ...` |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`import { useState } from \"react\"` の \"react\" は？",
        "choices": [
         "npm でインストールしたライブラリ",
         "同じフォルダの react.js"
        ],
        "answer": 0,
        "explain": "./ で始まらない名前はライブラリです。"
       },
       {
        "question": "`npm run build` が実行するのは？",
        "choices": [
         "package.json の scripts.build に書かれたコマンド",
         "build という名前のファイル",
         "npm のビルド機能"
        ],
        "answer": 0,
        "explain": "scripts はプロジェクト独自のコマンド集です。"
       },
       {
        "question": "Git に含めないのが普通なのは？",
        "choices": [
         "package.json",
         "package-lock.json",
         "node_modules/"
        ],
        "answer": 2,
        "explain": "npm install で再現できるので含めません。"
       }
      ]
     ],
     "id": "08-modules-npm"
    }
   ],
   "status": "open"
  },
  {
   "title": "TypeScript",
   "icon": "🔷",
   "order": 30,
   "status": "planned",
   "description": "JavaScript に「型」を足した言語。AI が書く Web アプリの多くはこれ。",
   "outline": [
    "型注釈の読み方",
    "interface と type",
    "ユニオン型と絞り込み",
    "ジェネリクス",
    "React コンポーネントを読む"
   ],
   "id": "30-typescript",
   "lessons": []
  },
  {
   "title": "HTML / CSS",
   "icon": "🎨",
   "order": 40,
   "status": "planned",
   "description": "Web ページの骨組みと見た目。",
   "outline": [
    "タグと要素",
    "クラスと ID",
    "セレクタ",
    "Flexbox と Grid",
    "レスポンシブ"
   ],
   "id": "40-html-css",
   "lessons": []
  },
  {
   "title": "SQL",
   "icon": "🗄️",
   "order": 50,
   "status": "planned",
   "description": "データベースに問い合わせる言語。AI がよく書くバックエンドの必需品。",
   "outline": [
    "SELECT と WHERE",
    "並べ替えと集計",
    "JOIN",
    "INSERT / UPDATE / DELETE",
    "インデックスとトランザクション"
   ],
   "id": "50-sql",
   "lessons": []
  },
  {
   "title": "シェル（Bash）",
   "icon": "💻",
   "order": 60,
   "status": "planned",
   "description": "ターミナルのコマンド。AI が「これを実行して」と出してくるもの。",
   "outline": [
    "パスとディレクトリ",
    "よく使うコマンド",
    "パイプとリダイレクト",
    "環境変数",
    "危ないコマンドの見分け方"
   ],
   "id": "60-shell",
   "lessons": []
  },
  {
   "title": "Go",
   "icon": "🐹",
   "order": 70,
   "status": "planned",
   "description": "シンプルで速い、サーバー向けの言語。",
   "outline": [
    "パッケージと main",
    "静的型と := ",
    "構造体とメソッド",
    "エラーを値で返す",
    "goroutine と channel"
   ],
   "id": "70-go",
   "lessons": []
  },
  {
   "title": "Rust",
   "icon": "🦀",
   "order": 80,
   "status": "planned",
   "description": "安全さと速さを両立する言語。所有権という独特の考え方がある。",
   "outline": [
    "let と mut",
    "所有権と借用",
    "enum と match",
    "Result と ? 演算子",
    "トレイト"
   ],
   "id": "80-rust",
   "lessons": []
  }
 ],
 "explanations": [
  {
   "title": "天気予報を取得して CSV に保存するスクリプト",
   "language": "Python",
   "date": "2026-11-16",
   "level": 3,
   "concepts": [
    "http_api",
    "data_formats",
    "io",
    "errors",
    "functions",
    "modules"
   ],
   "lessons": [
    "10-python/05-functions",
    "10-python/07-exceptions",
    "10-python/08-modules",
    "10-python/11-files-and-json",
    "10-python/12-type-hints-dataclass"
   ],
   "summary": "無料の天気 API から 1 週間分の気温を取り、CSV ファイルに書き出す。",
   "body": "> 📝 これはサンプルです。Claude にコードを貼ると、このような解説ページが追加されます。\n\n## 📄 解説するコード\n\n```python\nimport csv\nimport sys\nfrom pathlib import Path\n\nimport requests\n\nAPI_URL = \"https://api.open-meteo.com/v1/forecast\"\n\n\ndef fetch_forecast(lat: float, lon: float) -> dict:\n    params = {\n        \"latitude\": lat,\n        \"longitude\": lon,\n        \"daily\": \"temperature_2m_max,temperature_2m_min\",\n        \"timezone\": \"Asia/Tokyo\",\n    }\n    response = requests.get(API_URL, params=params, timeout=10)\n    response.raise_for_status()\n    return response.json()\n\n\ndef save_csv(data: dict, path: Path) -> int:\n    daily = data[\"daily\"]\n    rows = zip(daily[\"time\"], daily[\"temperature_2m_max\"], daily[\"temperature_2m_min\"])\n    with path.open(\"w\", newline=\"\", encoding=\"utf-8\") as f:\n        writer = csv.writer(f)\n        writer.writerow([\"date\", \"max\", \"min\"])\n        count = 0\n        for row in rows:\n            writer.writerow(row)\n            count += 1\n    return count\n\n\ndef main() -> None:\n    try:\n        data = fetch_forecast(35.68, 139.76)\n    except requests.RequestException as e:\n        print(f\"取得に失敗しました: {e}\", file=sys.stderr)\n        sys.exit(1)\n    n = save_csv(data, Path(\"forecast.csv\"))\n    print(f\"{n} 日分を保存しました\")\n\n\nif __name__ == \"__main__\":\n    main()\n```\n\n## 🧭 ひとことで言うと\n\n**Python** で書かれた、東京の 1 週間の最高・最低気温をインターネットから取得し、`forecast.csv` に保存するスクリプトです。\n\n## 🗺️ 全体の流れ\n\n1. 一番下の `if __name__ == \"__main__\":` から `main()` が呼ばれる（入口）\n2. `fetch_forecast` が天気 API にアクセスし、JSON を辞書として受け取る（**入力**）\n3. `save_csv` が辞書から日付・最高・最低気温を取り出し、CSV に 1 行ずつ書く（**処理**）\n4. 何日分保存したかを表示する（**出力**）。通信に失敗したらメッセージを出して終了\n\n## 🔍 ブロックごとの解説\n\n### import と定数\n\n```python\nimport requests\nAPI_URL = \"https://api.open-meteo.com/v1/forecast\"\n```\n\n`csv`・`sys`・`pathlib` は標準ライブラリ、`requests` は外部ライブラリ（`pip install requests` が必要）。\n`API_URL` が全部大文字なのは「変更しない値（定数）」という慣習です。\n\n### fetch_forecast：API からデータを取る\n\n```python\nresponse = requests.get(API_URL, params=params, timeout=10)\nresponse.raise_for_status()\nreturn response.json()\n```\n\n- `params=` に辞書を渡すと、`?latitude=35.68&longitude=...` のように URL に付け足してくれる\n- `timeout=10`：10 秒応答がなければ諦める。**付けないと永遠に待つ可能性がある** ので、丁寧なコードの証拠\n- `raise_for_status()`：サーバーが 404 や 500 を返したら例外を起こす。JavaScript の `if (!res.ok)` と同じ役割\n- `.json()`：返ってきた JSON 文字列を Python の辞書に変換\n\n型ヒント `-> dict` から「辞書を返す関数」と分かります。\n\n### save_csv：zip で 3 つのリストを束ねる\n\n```python\nrows = zip(daily[\"time\"], daily[\"temperature_2m_max\"], daily[\"temperature_2m_min\"])\n```\n\nAPI は `{\"time\": [日付…], \"temperature_2m_max\": [気温…], ...}` のように **列ごとのリスト** で返します。\n`zip` はそれを `(\"2026-11-16\", 18.2, 9.1)` のように **行ごと** にまとめ直す関数です（ファスナーを閉じるイメージ）。\n\n```python\nwith path.open(\"w\", newline=\"\", encoding=\"utf-8\") as f:\n```\n\n`with` で開くので、書き終わったら自動で閉じます。`newline=\"\"` は CSV で空行が挟まるのを防ぐお約束です。\n\n### main：エラーに備える\n\n```python\nexcept requests.RequestException as e:\n    print(f\"取得に失敗しました: {e}\", file=sys.stderr)\n    sys.exit(1)\n```\n\n`RequestException` は requests のあらゆる通信エラー（タイムアウト・接続失敗・404 など）の親。\n`file=sys.stderr` はエラー用の出力先、`sys.exit(1)` は「失敗して終わった」ことを OS に伝える終わり方です（0 が成功）。\n\n## 🐍 Python の書き方で見落としやすい点\n\n| 書き方 | ポイント |\n|---|---|\n| `zip(a, b, c)` | 複数のリストを並べて 1 つずつ取り出す。長さが違うと **短い方に合わせて黙って切れる** |\n| `Path(\"forecast.csv\")` | 文字列ではなく Path オブジェクト。`path.open()` のようにメソッドが使える |\n| `count = 0 ... count += 1` | 実は `len(...)` を使うか、`enumerate` で書くこともできる |\n\n## 🔑 キーワード\n\n- **Web API**：プログラムからデータをもらうための窓口（URL）\n- **JSON**：API がよく返すデータ形式。Python では辞書とリストになる\n- **タイムアウト**：一定時間応答が無ければ諦める仕組み\n- **例外（RequestException）**：通信の失敗をまとめて受け止めるための型\n- **zip**：複数の並びを「行」に束ねる関数\n- **終了コード**：`sys.exit(1)` の 1。0 なら成功、それ以外は失敗\n\n## ⚠️ AI のコードとしてのチェックポイント\n\n- ✅ `timeout` と `raise_for_status()` があり、通信まわりは丁寧\n- ⚠️ `save_csv` は API の形が変わると `KeyError` で止まる（`data[\"daily\"]` が無い場合）。信頼できる API なので実用上は問題ない\n- ⚠️ 実行するたびに `forecast.csv` を **上書き** する（`\"w\"` モード）。履歴を残したいなら日付をファイル名に入れる\n- ⚠️ 緯度経度が東京に固定。他の地域にしたいなら引数や設定にする\n- 必要な準備：`pip install requests`、インターネット接続\n\n## 🗣️ 30 秒で人に説明するなら\n\n「これは天気予報の API から東京の 1 週間分の最高・最低気温を取ってきて、CSV に保存するスクリプトです。\nrequests で API を呼んで JSON を辞書として受け取り、zip で日付と気温を行の形にまとめて csv モジュールで書き出しています。\n通信はタイムアウトとステータスチェックをしていて、失敗したらエラーを出して終了します。」\n\n## ✅ 理解度チェック\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
   "quizzes": [
    [
     {
      "question": "`response.raise_for_status()` が無かったら、サーバーが 500 エラーを返したときどうなる？",
      "choices": [
       "自動でリトライする",
       "エラーにならず、エラーページの中身を JSON として読もうとして別の場所で失敗しやすい",
       "プログラムが必ず止まる"
      ],
      "answer": 1,
      "explain": "ステータスコードのチェックは自分で行う必要があります（JavaScript の res.ok と同じ）。"
     },
     {
      "question": "`zip([\"a\", \"b\"], [1, 2])` から順に取り出されるのは？",
      "choices": [
       "(\"a\", 1), (\"b\", 2)",
       "(\"a\", \"b\"), (1, 2)",
       "[\"a\", 1, \"b\", 2]"
      ],
      "answer": 0,
      "explain": "同じ位置のものを組にして取り出します。"
     },
     {
      "question": "このスクリプトを他のファイルから `import` したとき、天気の取得は実行される？",
      "choices": [
       "される",
       "されない"
      ],
      "answer": 1,
      "explain": "`if __name__ == \"__main__\":` の中は、直接実行したときだけ動きます。"
     }
    ]
   ],
   "id": "2026-11-16-weather-to-csv"
  }
 ]
};
