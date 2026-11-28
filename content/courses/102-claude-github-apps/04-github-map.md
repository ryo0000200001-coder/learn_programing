---
title: GitHub の機能地図
level: 2
minutes: 14
concepts: [version_control, tooling, deploy]
summary: リポジトリ画面のタブ（Code・Issues・Pull requests・Actions・Settings）が、それぞれ何のためにあるか。
---
## このレッスンのゴール

- GitHub のリポジトリ画面の主なタブの役割を説明できる
- 「これはどこで見ればいい？」に答えられる
- 公開（Public）と非公開（Private）の違いが分かる

## リポジトリ画面のタブ

GitHub でリポジトリを開くと、上にタブが並んでいます。

| タブ | 役割 | たとえ |
|---|---|---|
| **Code** | ファイルと履歴（コミット）・ブランチ | 書類棚 |
| **Issues** | やること・バグ・アイデアのリスト | 付箋ボード |
| **Pull requests** | 「この変更を入れていい？」という提案と、そのレビュー | 稟議書 |
| **Actions** | push などをきっかけに自動で動く仕事（テスト・公開・定時実行） | 自動で働くロボット |
| **Projects** | Issue をカンバン（未着手・進行中・完了）で並べる | 進行表 |
| **Security / Insights** | 脆弱性の警告・利用状況のグラフ | 監査・統計 |
| **Settings** | 名前・公開範囲・Pages・Secrets・ブランチのルール | 管理室 |

## 「これはどこで見る？」

| 知りたいこと | 見る場所 |
|---|---|
| 今のコードの中身 | Code（ブランチを選んでから） |
| 誰が・いつ・何を変えたか | Code → コミット履歴（時計のアイコン） |
| Claude が作った変更の中身 | Pull requests → Files changed、またはコミットの画面 |
| 自動の処理が成功したか・失敗した理由 | **Actions** → 該当の実行 → 失敗したジョブのログ |
| スマホ用のページの設定 | Settings → **Pages** |
| API キーなどの秘密の保存場所 | Settings → **Secrets and variables** → Actions |
| 基本のブランチ（main など） | Settings → General → Default branch |

このサイトの「名前を変えたのにスマホで変わらない」を調べたときも、**Actions** の画面で「Deploy site #18 が Failure」と分かり、そのログから原因（GitHub 側の一時的な失敗）を突き止めました（レッスン 12）。

## Issue と PR の番号

Issue と PR は **同じ番号の列** を共有しています。`#1` が Issue なら、次に作った PR は `#2` です。
コミットメッセージや PR の説明に `#3` と書くと、自動でリンクになります。

## ブランチの見方

Code タブの左上で **ブランチを切り替え** られます。

- `main`：本線。公開されているもの・正式なもの
- `claude/...`：Claude が作業したブランチ（このサイトでは自動で main に取り込まれる）
- そのほか、機能ごとのブランチ

「GitHub で見たら古い」と思ったら、**見ているブランチが main か** を確認しましょう。

## Public と Private

| | Public（公開） | Private（非公開） |
|---|---|---|
| 見られる人 | 世界中の誰でも | 自分と、招待した人だけ |
| 無料で使える範囲 | GitHub Pages・Actions を広く使える | Pages は有料プランが必要なことがある |
| 気をつけること | **秘密情報・個人情報を入れない**。履歴も全部見える | 招待する人を選ぶ |

公開リポジトリに API キーを入れてしまうと、自動で収集されて悪用されることがあります（AI と開発するコース「秘密情報と環境変数」）。

```quiz
? GitHub Actions の自動処理が失敗した。原因を調べる場所は？
- Issues
+ Actions → 失敗した実行 → ジョブのログ
- Settings → General
> 失敗したステップのログに、エラーの内容が出ています。

? API キーを GitHub Actions で使いたい。保存する場所は？
- リポジトリの README
+ Settings → Secrets and variables → Actions
- Issue のコメント
> Secrets に保存した値は、ログでも *** と伏せられます。

? Issue が #5 まであるリポジトリで、次に PR を作ると番号は？
+ #6
- #1
- PR は番号を持たない
> Issue と PR は同じ番号の列を使います。
```
