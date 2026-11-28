---
title: ローカルとリモート ― clone・pull・push と「最新」のずれ
level: 1
minutes: 14
concepts: [version_control, tooling]
summary: 同じリポジトリが、パソコンと GitHub の 2 か所にあることから起きる「ずれ」と、その合わせ方。
---
## このレッスンのゴール

- clone・pull・push・fetch の違いを説明できる
- 「GitHub では更新されているのに、手元が古い」が起きる理由が分かる
- 複数の場所（パソコン 2 台・クラウドの Claude）で作業するときの注意が分かる

## 同じリポジトリが 2 か所にある

```text
GitHub（リモート）   learn_programing   ← 正式な置き場所
      ↑ push   ↓ pull
自分のパソコン（ローカル） learn_programing   ← コピー（完全な履歴つき）
```

| 操作 | 向き | 意味 |
|---|---|---|
| **clone** | GitHub → パソコン | 最初に 1 回だけ、リポジトリを丸ごとコピーしてくる |
| **fetch** | GitHub → パソコン | 「GitHub に新しい変更がある？」を確認して、情報だけ取ってくる（ファイルはまだ変えない） |
| **pull** | GitHub → パソコン | fetch ＋ 手元のファイルに反映（＝最新にする） |
| **push** | パソコン → GitHub | 手元のコミットを GitHub に送る |

GitHub Desktop の「**Fetch origin**」→「**Pull origin**」は、まさにこの fetch と pull のボタンです。`origin` は「clone 元の GitHub のリポジトリ」に付けられた呼び名です。

## 「ずれ」は自動では直らない

GitHub が更新されても、**パソコンのコピーは勝手には変わりません**。pull するまでは古いままです。

このサイトでも実際に、
- Claude が解説を追加して GitHub に送った
- でも手元のサイトを開いても出てこない
- → `git pull` したら出てきた

ということがありました。`open-site.vbs` が「開く前に自動で pull する」ようにしてあるのは、このずれを毎回埋めるためです。

## 逆向きのずれ：push が断られる

自分が古いまま変更して push しようとすると、GitHub に **自分の知らない新しい変更** があるので、断られます。

```text
! [rejected]  main -> main (fetch first)
hint: Updates were rejected because the remote contains work that you do not have locally.
```

「あなたの知らない変更が GitHub にあるので、先に取り込んで（pull して）から送って」という意味です。慌てずに pull → （必要ならコンフリクトを直す）→ push、の順に進めます（ターミナルと Git コース「コンフリクトの直し方」）。

## 作業場所が 3 つ以上になると

| 作業場所 | 例 |
|---|---|
| Windows のパソコン | `OneDrive\ドキュメント\GitHub\learn_programing` |
| Mac | `書類/GitHub/onlineshop` |
| クラウドの Claude | Claude が用意した使い捨ての作業場所（レッスン 3） |

それぞれが **別々のコピー** です。どこかで変えたら、
1. その場所で **コミットして push**
2. 他の場所で **pull**

しないと、ほかの場所には伝わりません。**「始める前に pull、終わったら push」** を合言葉にしましょう。

## ⚠️ クラウド同期フォルダとの組み合わせ

OneDrive・iCloud Drive・Dropbox の中にリポジトリを置くと、**Git の同期とクラウドの同期が二重に動いて**、ファイルが壊れたり「競合したコピー」ができたりすることがあります。
問題が起きていなければそのままでも構いませんが、新しく clone するなら、クラウド同期されない場所（例：`C:\dev\`、Mac なら `~/dev/`）がおすすめです。GitHub 自体がバックアップの役目を果たします。

```quiz
? GitHub Desktop の「Fetch origin」がすることは？
+ GitHub に新しい変更があるかを確認して情報を取ってくる（ファイルはまだ変えない）
- 手元の変更を GitHub に送る
- リポジトリを削除する
> ファイルまで最新にするのは Pull origin です。

? push したら「rejected (fetch first)」と断られた。まずすることは？
- --force を付けて上書きする
+ pull して GitHub の新しい変更を取り込んでから、もう一度 push する
- リポジトリを作り直す
> 強制的に上書きすると、他の人（や別の会話）の変更が消えてしまいます。

? Mac で変更して push した。Windows のパソコンに反映するには？
+ Windows で pull する
- 何もしなくても自動で反映される
- Windows で push する
> それぞれの作業場所は別々のコピー。受け取る側で pull が必要です。
```
