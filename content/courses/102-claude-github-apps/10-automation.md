---
title: 自動化 ― GitHub Actions と Claude を組み合わせる
level: 3
minutes: 15
concepts: [deploy, tooling, version_control]
summary: このサイトで実際に動いている 3 つの自動化（main への取り込み・公開・定時実行）を読み、人・Claude・Actions の役割分担を考える。
---
## このレッスンのゴール

- 「Claude にやってもらうこと」と「Actions に任せること」の違いを説明できる
- このサイトで動いている自動化の流れを、図で説明できる
- 自動化の注意点（失敗に気づく仕組み・権限）が分かる

GitHub Actions の書き方の基本は「公開とクラウド」コースの「CI/CD と GitHub Actions」にあります。ここでは、**Claude と組み合わせたときの使い方** に絞ります。

## 3 者の役割分担

| 担当 | 得意なこと | 苦手なこと |
|---|---|---|
| **あなた** | 何を作るか決める・確かめる・判断する | 同じ作業のくり返し |
| **Claude** | 考えて書く・調べる・直す（毎回少しずつ違う仕事） | 決まった時刻に、毎回まったく同じことをする |
| **GitHub Actions** | 決まったきっかけで、決まった手順を、毎回同じように | 考える・判断する |

**「毎回同じ手順で、必ずやってほしいこと」は Actions に**、**「毎回違う、考える仕事」は Claude に** 任せるのが基本です。

## このサイトで動いている自動化

```text
Claude（クラウド）
  │ ① claude/... ブランチに push
  ▼
GitHub Actions「Auto merge Claude branches into main」
  │ ② main に自動で取り込む
  ▼
GitHub Actions「Deploy site」
  │ ③ サイトを作り直して GitHub Pages に公開
  ▼
スマホ（URL）・パソコン（open-site.vbs が pull してから開く）
```

| ファイル | きっかけ（on:） | すること |
|---|---|---|
| `.github/workflows/auto-merge-claude.yml` | `claude/` で始まるブランチへの push | main に取り込んで push |
| `.github/workflows/pages.yml` | main への push・自動取り込みの完了・手動 | `python tools/build.py` → Pages に公開 |

もともとは毎回「main に反映して」と頼んでいましたが、**毎回同じ手順なので Actions に任せた** わけです。

### 気づきにくい落とし穴

Actions 自身（`GITHUB_TOKEN`）が main に push しても、**次の Actions は自動では始まりません**（無限ループを防ぐための GitHub の仕組み）。
そのため `pages.yml` には、「push されたとき」だけでなく「**自動取り込みのワークフローが終わったとき**（`workflow_run`）」というきっかけも書いてあります。

## fashion_news の定時実行

```yaml
on:
  schedule:
    - cron: "30 21 * * *"   # 毎日 6:30（日本時間）
```

fashion_news は、Claude が作った Python のプログラムを、**Actions が毎日決まった時刻に動かす** 形でした。作るのは Claude、動かし続けるのは Actions、という分担の典型です。

## 自動化の注意点

| 注意点 | 対策 |
|---|---|
| **失敗に気づけない** | Actions は失敗するとメールで知らせてくれる。届いたら Actions の画面でログを見る（レッスン 12） |
| **権限を広げすぎる** | `permissions:` に必要な分だけ書く（レッスン 5）。main を自動で書き換える仕組みは、入れる前によく考える |
| **秘密情報** | Secrets に入れる。ログに出さない |
| **確認の機会が減る** | 自動で main に入る＝人が見る前に入る。テストを自動で動かしておくと安心 |

このサイトでも、main への自動取り込みを入れるときは、Claude が「確認なしで main を書き換える仕組みなので、本当によいか」とあなたに確認してから入れました。**便利さと引き換えに、何を確認しなくなるのか** を意識しておきましょう。

## Claude 自身を Actions から呼ぶこともできる

Issue や PR にコメントすると、Actions の中で Claude が動いて返事をしたりコードを直したりする、という使い方もあります（Claude Code の GitHub Actions 連携）。
「毎日決まった時刻に、Claude に◯◯を調べさせる」のような **定期的な Claude の仕事** を作ることもできます。まずは今の仕組みに慣れてから、試してみるとよいでしょう。

```quiz
? 「毎回 main に取り込む」のような作業を Actions に任せる理由は？
+ 毎回同じ手順を、決まったきっかけで確実に実行してくれるから
- Claude より賢いから
- お金がかからないから
> 判断の要らない、くり返しの作業は Actions が得意です。

? このサイトで、claude/ ブランチに push してから公開されるまでの順番は？
- 公開 → main に取り込み → push
+ push → main に自動で取り込み → サイトを作り直して公開
- push → すぐに公開（main は変わらない）
> 2 つのワークフローがつながって動いています。

? main を自動で書き換える仕組みを入れるときに考えておくべきことは？
- 何も考えなくてよい
+ 人が確認する前に main に入ることになる点と、失敗に気づく方法
- Actions の画面の色
> 便利さと引き換えに、確認の機会が減ることを意識します。
```
