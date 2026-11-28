---
title: GitHub へのログインと権限 ― gh auth・トークン・SSH
level: 2
minutes: 15
concepts: [auth, security, tooling]
summary: 「git は動くのに Issue が読めない」はなぜ起きるのか。GitHub への 3 つのログイン方法と、権限（スコープ）の考え方。
---
## このレッスンのゴール

- git と gh が別々に GitHub へログインしていることを説明できる
- `gh auth login` で何が起きているか分かる
- トークンの「権限（スコープ）」と「期限」の考え方が分かる

## GitHub は「あなたは誰？」を毎回確かめる

非公開リポジトリを読む、push する、Issue を作る…。GitHub は、そのたびに **あなたが誰で、それをしてよいか**（バックエンドコース「認証と認可」）を確かめます。

そのための「身分証」の渡し方が、いくつかあります。

| 方法 | 使われる場面 | 中身 |
|---|---|---|
| **ブラウザでログイン** | GitHub のサイト・GitHub Desktop | ユーザー名・パスワード・2 段階認証 |
| **HTTPS ＋ トークン** | `git push`（https の URL）・gh・API | 長いランダムな文字列（パスワードの代わり） |
| **SSH 鍵** | `git push`（`git@github.com:...` の URL） | 自分のパソコンにある秘密の鍵と、GitHub に登録した公開鍵のペア |

## gh auth login：gh に身分証を渡す

`gh`（GitHub CLI）は、ターミナルから GitHub の機能（Issue・PR・Actions）を使う道具です。

```bash
gh auth login        # ログイン（ブラウザが開き、表示されたコードを入力する）
gh auth status       # 今ログインしているか、どのアカウントか確認
```

`gh auth login` をすると、GitHub が **gh 専用のトークン** を発行し、パソコンに保存します。
これで Claude（自分のパソコンで動く版）も gh を通して Issue を読んだり PR を作ったりできるようになります。冒頭のスクリーンショットの「gh のログインで Issue を見られるようになりました」は、これのことです。

**git と gh は別の道具** なので、

- GitHub Desktop でログイン済み → git の push はできる
- でも gh にはログインしていない → Issue が読めない

ということが起きます。そのときは `gh auth status` で確かめて、`gh auth login` をします。

## トークンの「権限」と「期限」

トークンには、**何をしてよいか（スコープ・権限）** と **いつまで有効か（期限）** が付いています。

| 権限の例 | できること |
|---|---|
| `repo` / Contents: read | コードを読む |
| Contents: write | push する |
| Issues: write | Issue を作る・閉じる |
| Workflows | `.github/workflows/` のファイル（Actions の設定）を変える |

- **必要な分だけ渡す**（最小権限）：読むだけの用途に、書き込みや削除の権限まで渡さない
- **期限を付ける**：漏れても、しばらくすれば使えなくなる
- **漏らさない**：トークンはパスワードと同じ。チャットに貼らない、コードに書かない

Actions の中で使われる `GITHUB_TOKEN` も同じ考え方で、`permissions:` に「このワークフローは contents に write してよい」のように書きます（このサイトの `auto-merge-claude.yml` を見てみてください）。

## クラウドの Claude の場合

クラウドで動く Claude（レッスン 3）は、あなたが **claude.ai で GitHub をつないだときの許可** を使って、リポジトリを読んだり push したりしています。

- どのリポジトリを使えるかは、GitHub 側の「Claude のアプリ」の設定で決まる
- 権限が無い操作は断られる（そのときは設定を見直すよう案内が出る）

## うまくいかないときの切り分け

| 症状 | まず疑うこと |
|---|---|
| `git push` で `Authentication failed` / `Permission denied` | git の身分証（トークン・SSH 鍵）が無い・期限切れ・権限不足 |
| `gh: To get started with GitHub CLI, please run: gh auth login` | gh にログインしていない |
| `HTTP 404` で非公開リポジトリが見つからない | 見つからないのではなく、**権限が無くて見えない** ことが多い（存在を隠すための 404） |
| Actions の中で `Permission denied` | ワークフローの `permissions:` が足りない |

```quiz
? GitHub Desktop で push はできるのに、gh で Issue が読めない。考えられる原因は？
+ gh にログインしていない（gh auth login が必要）
- リポジトリが壊れている
- Issue が 1 つも無い
> git（Desktop）と gh は別々に身分証を持っています。

? 読むだけの自動処理に渡すトークンとして良いのは？
- すべての権限を持つ、期限なしのトークン
+ 読み取りだけの権限で、期限付きのトークン
- 自分のパスワード
> 必要な分だけの権限（最小権限）と期限が基本です。

? 非公開リポジトリにアクセスして 404 が返ってきた。よくある原因は？
- リポジトリが削除された
+ 見る権限が無いので、存在自体が隠されている
- GitHub が止まっている
> 権限の無い人には、存在しないかのように 404 を返します。
```
