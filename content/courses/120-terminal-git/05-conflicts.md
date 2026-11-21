---
title: コンフリクトの直し方 ― <<<<<<< を怖がらない
level: 3
minutes: 16
concepts: [version_control, reading]
summary: 同じ場所を両方で変えると起きるコンフリクト。マーカーの読み方、直してからコミットするまでの手順、やめたいときの戻り方。
---
## このレッスンのゴール

- コンフリクトが起きる理由を説明できる
- `<<<<<<<`・`=======`・`>>>>>>>` のマーカーを読み、正しく直せる
- 直し終わるまでの手順と、やめたいときの `--abort` が分かる

## コンフリクトとは

2 つのブランチが **同じファイルの同じ場所** を、それぞれ違う内容に変えていると、Git はどちらを残せばよいか決められません。これが **コンフリクト（衝突）** です。
違う場所の変更なら、Git が自動で合わせます。コンフリクトはエラーではなく、**「ここは人間が決めて」という相談** です。

前のレッスンの続きで、実際に起こしてみます。

```text
main  ブランチ：「- 牛乳」を「- 牛乳 2 本」に変えてコミット
price ブランチ：「- 牛乳」を「- 牛乳（低脂肪）」に変えてコミット
```

```text
$ git merge price
Auto-merging shopping.md
CONFLICT (content): Merge conflict in shopping.md
Automatic merge failed; fix conflicts and then commit the result.
```

「shopping.md の中身でコンフリクト。自動のマージに失敗したので、直してからコミットして」と言っています。

## 状態を確認する

```text
$ git status
On branch main
You have unmerged paths.
  (fix conflicts and run "git commit")
  (use "git merge --abort" to abort the merge)

Unmerged paths:
  (use "git add <file>..." to mark resolution)
	both modified:   shopping.md
```

| 表示 | 意味 |
|---|---|
| `You have unmerged paths` | マージの途中で止まっている |
| `both modified: shopping.md` | 両方のブランチが変えたファイル。ここを直す |
| `git merge --abort` | マージをやめて、始める前に戻る |

## マーカーを読む

```text
# 買い物メモ

- りんご
- バナナ
<<<<<<< HEAD
- 牛乳 2 本
=======
- 牛乳（低脂肪）
>>>>>>> price
- パン
```

| 部分 | 意味 |
|---|---|
| `<<<<<<< HEAD` から `=======` まで | **今いるブランチ**（main）の内容 |
| `=======` から `>>>>>>> price` まで | **取り込もうとしたブランチ**（price）の内容 |
| マーカーの外 | 自動で合わせられた部分（そのままでよい） |

## 直す

選択肢は 3 つです。

| 方針 | 結果 |
|---|---|
| 自分（HEAD）の方を残す | `- 牛乳 2 本` |
| 相手（price）の方を残す | `- 牛乳（低脂肪）` |
| **両方の意図を合わせる** | `- 牛乳（低脂肪）2 本` |

今回は「2 本」も「低脂肪」もどちらも必要なので、合わせます。**マーカーの 3 行（`<<<<<<<`・`=======`・`>>>>>>>`）も必ず消します**。

```text
# 買い物メモ

- りんご
- バナナ
- 牛乳（低脂肪）2 本
- パン
```

## 仕上げ：add して commit

```bash
git add shopping.md      # 「直しました」という印
git commit --no-edit     # マージコミットを作る（メッセージは自動の Merge branch 'price'）
```

```text
$ git log --oneline --graph
*   077e971 Merge branch 'price'
|\
| * 2803c21 Low-fat milk
* | 1552dfe Two bottles of milk
|/
* d539851 Add banana
```

ここまで、実際に実行して確認した流れです。

## 直すときのコツ

- **どちらが正しいかは、コードの意味で決める**。片方を機械的に選ぶと、相手の修正が消えます
- 直した後に **テストを実行する**、またはアプリを動かして確かめる。文字としては合っていても、動きが壊れていることがあります
- 消し忘れたマーカーがないか探す：`grep -rn "<<<<<<<" .`
- VS Code では、コンフリクトの上に「Accept Current Change（今の方）」「Accept Incoming Change（来た方）」「Accept Both Changes（両方）」のボタンが出ます。**Both は単に並べるだけ** なので、今回のように 1 行にまとめたいときは手で直します
- 分からなくなったら `git merge --abort` で、マージ前に戻ってやり直せます

## よくある場面

| 場面 | 起きること |
|---|---|
| `git pull` したら CONFLICT | 自分の変更と、GitHub 側の他人（や別のパソコン）の変更がぶつかった。直し方は同じ |
| GitHub のプルリクエストに「This branch has conflicts」 | main が先に進んで、同じ場所が変わった。手元で main をマージして直し、push する |
| `package-lock.json` などの自動生成ファイルでコンフリクト | 手で直さず、片方を採用してから `npm install` で作り直すのが定番 |
| `git rebase` の途中で CONFLICT | 直して `git add` した後、`git rebase --continue`。やめるなら `git rebase --abort` |

このリポジトリでは、Claude が push したブランチを GitHub Actions が自動で main にマージしています。もしここでコンフリクトが起きると自動マージは失敗するので、Claude に知らせて相談してもらう約束になっています。

## AI に直してもらうとき

コンフリクトの解消は AI に任せることもできますが、**「両方のブランチで何をしようとしていたか」** を伝えないと、片方の変更を黙って消すことがあります。
直してもらった後は、`git diff HEAD~1` などで **マージ前と比べて、両方の変更が残っているか** を確認しましょう。

```quiz
? `<<<<<<< HEAD` と `=======` の間に書かれているのは？
+ 今いるブランチ（マージを実行した側）の内容
- 取り込もうとしたブランチの内容
- Git が自動で作った正解
> HEAD は今いるブランチです。`=======` から `>>>>>>>` までが、取り込もうとしたブランチの内容です。

? コンフリクトを直した後、マージを完了させる手順は？
- そのまま `git push` する
+ マーカーを消して内容を直し、`git add` してから `git commit` する
- `git merge --abort` を実行する
> `git add` で「このファイルは直した」と Git に伝え、`git commit` でマージコミットを作ります。`--abort` はマージをやめるコマンドです。

? 「どう直せばよいか分からなくなった。マージを始める前に戻りたい」ときは？
- ファイルを全部削除する
- `git push --force` する
+ `git merge --abort` を実行する
> マージの途中なら、`--abort` でマージを始める前の状態に戻れます。
```
