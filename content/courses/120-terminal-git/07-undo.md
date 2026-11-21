---
title: 取り消しとやり直し ― restore・revert・reset・stash・reflog
level: 4
minutes: 20
concepts: [version_control, tooling, security]
summary: 「元に戻したい」の場面ごとに使うコマンドが違う。消えるもの・残るものを表で整理し、最後の救命ボート reflog まで。
---
## このレッスンのゴール

- 「どこまで戻したいか」に合わせて、restore・revert・reset を選べる
- `reset --soft`・`--mixed`・`--hard` の違いと、`--hard` で何が消えるかを説明できる
- 作業を一時退避する `stash` と、消したはずのコミットを探す `reflog` が分かる

ここでのコマンドと出力は、すべて買い物メモのリポジトリで実際に試したものです。

## まず全体の地図

| やりたいこと | コマンド | 消えるもの |
|---|---|---|
| ファイルの編集を、最後のコミットの状態に戻す | `git restore ファイル` | **そのファイルのコミットしていない変更** |
| ステージに入れたのを取り消す（編集は残す） | `git restore --staged ファイル` | 無し |
| 直前のコミットのメッセージ・中身を直す | `git commit --amend` | 直前のコミット（作り直される） |
| push 済みのコミットを打ち消す | `git revert コミット` | 無し（打ち消すコミットが **増える**） |
| コミットを無かったことにする | `git reset` | オプション次第（下の表） |
| 作業を一時的にどける | `git stash` | 無し（あとで戻せる） |
| 消えたコミットを探す | `git reflog` | 無し |

## restore：コミットしていない変更を戻す

```bash
echo "- 卵" >> shopping.md     # 編集した
git restore shopping.md        # 最後のコミットの状態に戻る（- 卵 は消える）
```

```bash
git add shopping.md            # ステージに入れてしまった
git restore --staged shopping.md
git status --short
#  M shopping.md               ← ステージからは外れたが、編集は残っている
```

⚠️ `--staged` を付けない `git restore` は、**コミットしていない編集を消します**。Git の記録にない変更なので、戻せません。

## commit --amend：直前のコミットを直す

```bash
git commit -am "Add eggs"
git commit --amend -m "Add eggs to the list"   # メッセージを直した
```

```text
$ git log --oneline -2
2b32853 Add eggs to the list
077e971 Merge branch 'price'
```

`--amend` は、直前のコミットを **作り直します**（ID も変わる）。
⚠️ **push した後に amend すると**、GitHub 側の履歴と食い違い、`git push --force` が必要になります。push 済みなら、次の revert を使います。

## revert：打ち消すコミットを足す

```text
$ git revert --no-edit HEAD
[main 0932c7a] Revert "Add eggs to the list"

$ git log --oneline -3
0932c7a Revert "Add eggs to the list"     ← 「卵を消す」という新しいコミット
2b32853 Add eggs to the list              ← 元のコミットは残っている
077e971 Merge branch 'price'
```

revert は、**指定したコミットと逆の変更をする新しいコミット** を作ります。履歴は消さずに増やすだけなので、**他の人と共有している（push 済みの）ブランチでも安全** です。
「本番で不具合が出たので、昨日の変更を取り消したい」ときの定番です。

## reset：名札を過去に戻す

`git reset` は、ブランチの名札（レッスン 4）を **過去のコミットに動かします**。その後ろのコミットは、ブランチから見えなくなります。
オプションで、作業中のファイルをどうするかが変わります。

| オプション | ブランチの名札 | ステージ | 作業ディレクトリのファイル | 使う場面 |
|---|---|---|---|---|
| `--soft` | 戻る | **変更が残る**（ステージに入った状態） | 残る | コミットをまとめ直したい |
| `--mixed`（省略時） | 戻る | 空になる | **残る** | コミットをやり直したい |
| `--hard` | 戻る | 空になる | **消える（コミット時の状態に戻る）** | 全部捨てて戻りたい |

```text
$ git reset --soft HEAD~1
$ git status --short
M  shopping.md             ← コミットは消えたが、変更はステージに残っている

$ git reset --hard HEAD~1
HEAD is now at 077e971 Merge branch 'price'   ← ファイルもその時点に戻った
```

⚠️ `--hard` は、**コミットしていない変更を完全に消します**。AI と開発するコースで「取り消せない系」として紹介したのはこのためです。
⚠️ push 済みのコミットを reset で消して `git push --force` すると、他の人の手元の履歴と食い違います。共有ブランチでは revert を使います。

## stash：作業を一時的にどける

「作業の途中だけど、急いで main に移って別の修正をしたい」ときに使います。

```text
$ git stash
Saved working directory and index state WIP on main: 077e971 Merge branch 'price'

$ git status --short
                           ← 何も無い（変更がどけられた）

$ git stash list
stash@{0}: WIP on main: 077e971 Merge branch 'price'

$ git stash pop            ← どけた変更を戻す（stash からは消える）
```

⚠️ stash は便利ですが、**溜め込むと何がどこにあるか分からなくなります**。長く置いておくなら、ブランチを作ってコミットしたほうが安全です。

## reflog：最後の救命ボート

reset で消したはずのコミットも、実はしばらく Git の中に残っています。**HEAD が動いた記録** を見るのが `git reflog` です。

```text
$ git reflog -5
077e971 HEAD@{0}: reset: moving to HEAD~1
2b32853 HEAD@{1}: reset: moving to HEAD~1
0932c7a HEAD@{2}: revert: Revert "Add eggs to the list"
2b32853 HEAD@{3}: commit (amend): Add eggs to the list
0735572 HEAD@{4}: commit: Add eggs

$ git reset --hard HEAD@{2}
HEAD is now at 0932c7a Revert "Add eggs to the list"   ← reset する前に戻れた
```

`reset --hard` で「コミットを消してしまった！」と思っても、**コミットしてあったものなら、reflog から戻せます**。
戻せないのは、**一度もコミットしていない変更** だけです。だから「こまめにコミット」が最大の保険になります。

## AI が提案してきたら

| 提案 | 確認すること |
|---|---|
| `git reset --hard` | コミットしていない変更は無いか（`git status`）。必要なら先に commit か stash |
| `git push --force` | そのブランチを他の人も使っていないか。`--force-with-lease`（他人の変更があれば止まる）にできないか |
| `git clean -fd` | Git が管理していないファイル（`.env` など）まで消える。先に `git clean -nd` で消えるものを確認 |
| `git checkout .` / `git restore .` | すべてのファイルのコミットしていない変更が消える |
| `git revert` | ✅ 履歴を壊さない。共有ブランチではこちらが基本 |

```quiz
? GitHub に push 済みの「昨日のコミット」を取り消したい。チームのブランチなので履歴は書き換えたくない。使うのは？
- `git reset --hard HEAD~1` して `git push --force`
+ `git revert コミットID`
- `git commit --amend`
> revert は、打ち消す新しいコミットを足すだけなので、共有している履歴を壊しません。

? `git reset --hard HEAD~1` を実行した。消えて二度と戻せない可能性があるのは？
- 1 つ前のコミット
+ 一度もコミットしていなかった編集
- GitHub 上の main ブランチ
> コミットは reflog から戻せることが多いですが、コミットしていない編集は Git の記録に無いので戻せません。

? `git reset --soft HEAD~1` の後の状態は？
- コミットも変更も全部消える
- 何も変わらない
+ 直前のコミットは取り消されるが、その変更はステージに残っている
> `--soft` は名札を戻すだけで、変更はステージに置いたままにします。コミットをまとめ直したいときに使います。
```
