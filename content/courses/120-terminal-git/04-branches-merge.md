---
title: ブランチとマージ ― 作業の道を分けて合わせる
level: 2
minutes: 18
concepts: [version_control, tooling]
summary: ブランチの正体（コミットを指す名札）、switch・merge、早送りマージとマージコミット、origin/main と fetch・pull の関係。
---
## このレッスンのゴール

- ブランチが「コミットを指す名札」であることを説明できる
- 早送り（fast-forward）マージとマージコミットの違いを、`git log --graph` で見分けられる
- `origin/main`・`fetch`・`pull`・`push` の関係が分かる

## ブランチ ＝ コミットを指す名札

```text
f60a6eb ← 3509968 ← d978c53 ← 0f626e2
                                  ↑
                                 main   ← HEAD（今ここにいる）
```

コミットは「1 つ前のコミット」を覚えていて、鎖のようにつながっています。**ブランチは、その鎖のどれか 1 つに貼った名札** にすぎません。
新しくコミットすると、今いるブランチの名札が新しいコミットへ動きます。

`HEAD` は「今どの名札を見ているか」の印です。

## ブランチを作って移る

```text
$ git switch -c add-fruit
Switched to a new branch 'add-fruit'
```

| コマンド | 意味 |
|---|---|
| `git switch -c 名前` | 新しいブランチを作って移る |
| `git switch 名前` | 既存のブランチに移る |
| `git branch` | ブランチの一覧（`*` が今いるところ） |
| `git branch -d 名前` | マージ済みのブランチを消す |

古い記事や AI のコードでは `git checkout -b 名前` / `git checkout 名前` と書かれていることもあります。同じ意味です（`checkout` は役割が多すぎたので、`switch` と `restore` に分けられました）。

⚠️ ブランチを移ると、**作業ディレクトリのファイルが、そのブランチの内容に書き換わります**。コミットしていない変更があると、移れないか、変更が一緒についてきます。移る前に `git status` を確認しましょう。

## マージ：2 つの道を合わせる

### ① 早送りマージ（fast-forward）

main がその後進んでいなければ、名札を前に進めるだけで済みます。

```text
$ git switch main
$ git merge add-fruit
Updating 0f626e2..d539851
Fast-forward
 shopping.md | 1 +
 1 file changed, 1 insertion(+)

$ git log --oneline --graph
* d539851 Add banana
* 0f626e2 Ignore .env
* d978c53 Add app
```

`Fast-forward` と出たら、新しいコミットは作られていません。履歴は 1 本のまっすぐな線のままです。

### ② マージコミット

両方のブランチが別々に進んでいたら、**2 つの親を持つ新しいコミット** を作って合わせます。

```text
$ git log --oneline --graph
*   077e971 Merge branch 'price'
|\
| * 2803c21 Low-fat milk           ← price ブランチでの変更
* | 1552dfe Two bottles of milk    ← 同じころの main での変更
|/
* d539851 Add banana
```

| 記号 | 読み方 |
|---|---|
| `*` | コミット |
| `\|\` | ここで道が 2 本に分かれている（上から見て合流） |
| `\|/` | ここから道が分かれた |

この例は、同じ行を両方で変えたので **コンフリクト** になりました（次のレッスン）。違う場所を変えていれば、Git が自動で合わせてくれます。

## リモート：GitHub 側のリポジトリ

```text
自分のパソコン                                 GitHub（origin）
  main  ──── git push ────────────────────→   main
  origin/main ←─── git fetch ───────────────  main
  main  ←─── git merge origin/main ─────
          （fetch + merge = git pull）
```

| 用語 | 意味 |
|---|---|
| **origin** | GitHub など、クローン元のリポジトリにつける標準の名前 |
| **origin/main** | 「最後に確認したときの、GitHub 側の main」の **写し**。自動では更新されない |
| `git fetch` | GitHub の最新を取ってきて、`origin/main` を更新する。自分の main は変わらない |
| `git pull` | `fetch` ＋ 自分のブランチへのマージ |
| `git push` | 自分のコミットを GitHub に送る |

`Your branch is behind 'origin/main' by 3 commits`（3 コミット遅れています）と出たら、`git pull` で追いつきます。

### --ff-only：安全な pull

このリポジトリの `open-site.bat` には、こう書かれています。

```bat
git pull --ff-only
if errorlevel 1 (
  echo Update failed. Opening the current version instead.
)
```

`--ff-only` は「**早送りでできるときだけ** pull する」という指定です。手元で何か変えていて、マージコミットが必要になりそうなら、何もせずに失敗します。勝手にマージして状態をややこしくしないための、安全な書き方です。

## AI のコードではこう出てくる

```bash
git switch -c feature/login
# …作業してコミット…
git push -u origin feature/login
```

`-u`（`--set-upstream`）は「このブランチは、GitHub の `feature/login` とつながっている」と覚えさせる指定です。2 回目からは `git push` だけで送れます。
Claude がこのサイトを更新するときも、`claude/...` というブランチを作って push し、GitHub Actions が main にマージしています（次のレッスンのプルリクエストを省いた形）。

```quiz
? ブランチの正体として正しいのは？
- コミットをまるごとコピーしたもの
+ あるコミットを指す名札（新しくコミットすると前に進む）
- GitHub にしか存在しないもの
> ブランチはコミットを指しているだけなので、作るのも消すのも一瞬です。

? `git merge` で `Fast-forward` と表示された。何が起きた？
+ 合わせる先が進んでいなかったので、名札を前に進めただけ（マージコミットは無し）
- コンフリクトが起きた
- 新しいマージコミットが作られた
> 早送りマージでは履歴は 1 本のまま。両方が進んでいた場合にだけ、マージコミットが作られます。

? `git fetch` を実行した直後の状態として正しいのは？
- 自分の main が GitHub の main と同じになっている
+ `origin/main` は最新になったが、自分の main はまだ変わっていない
- 自分のコミットが GitHub に送られた
> fetch は取ってくるだけ。自分のブランチに取り込むには merge（または最初から pull）が必要です。
```
