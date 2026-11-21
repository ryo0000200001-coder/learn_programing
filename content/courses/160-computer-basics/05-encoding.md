---
title: 文字コードと文字化け ― UTF-8 と Shift_JIS
level: 2
minutes: 18
concepts: [encoding, strings, io]
summary: 文字を数（バイト）に変える約束が文字コード。文字化けが起きる仕組みと、Windows・Excel・CSV でよくあるトラブルの直し方。
---
## このレッスンのゴール

- 文字コードとは何か、UTF-8 と Shift_JIS（cp932）の違いを説明できる
- 文字化けを見て、だいたいの原因を推測できる
- `encoding="utf-8"`・`utf-8-sig`・`UnicodeDecodeError` が出てくるコードを読める

## 文字コード ＝ 文字と数の対応表

コンピュータは数しか扱えない（レッスン 2）ので、文字にも番号を付けます。

```python
ord("A")    # 65
chr(65)     # 'A'
ord("あ")   # 12354（16 進数で 0x3042）
```

世界中の文字に 1 つずつ番号を付けた表が **Unicode** です。「あ」は U+3042 番です。
ただし、番号を **ファイルに保存するときのバイトの並べ方** には何種類かあり、これを **文字コード（エンコーディング）** と呼びます。

| 文字コード | 「あ」のバイト | 特徴 |
|---|---|---|
| **UTF-8** | `e3 81 82`（3 バイト） | 世界標準。Web・Mac・Linux・Python・Git の標準 |
| **Shift_JIS**（Windows では **cp932**） | `82 a0`（2 バイト） | 日本の昔からの文字コード。古い Windows アプリや Excel の CSV で今も使われる |
| ASCII | 無し（英数字だけ） | 英数字と記号だけの 128 文字。UTF-8 の英数字部分と同じ |

```python
"abc".encode()             # 3 バイト（英数字は 1 文字 1 バイト）
"あ".encode()              # b'\xe3\x81\x82'（UTF-8 で 3 バイト）
"あ".encode("cp932")       # 2 バイト
"😀".encode()              # 4 バイト（絵文字は 4 バイト）
```

- **encode**（エンコード）：文字列 → バイト。保存・送信するとき
- **decode**（デコード）：バイト → 文字列。読み込むとき

## 文字化けの正体

**書いたときと違う文字コードで読む** と、文字化けします。

```python
"こんにちは".encode("utf-8").decode("cp932")
# '縺薙ｓ縺ｫ縺｡縺ｯ'          ← UTF-8 で書いたものを Shift_JIS で読んだ

"こんにちは".encode("cp932").decode("utf-8")
# UnicodeDecodeError: 'utf-8' codec can't decode byte 0x82 in position 0: invalid start byte

"文字化け".encode("utf-8").decode("latin-1")
# 'æ\x96\x87å\xad\x97...'   ← UTF-8 を西欧の文字コードで読んだ
```

（すべて実行して確認しました）

### 化け方で原因が分かる

| 見え方 | よくある原因 |
|---|---|
| `縺薙ｓ縺ｫ…`（「縺」がたくさん） | **UTF-8** のファイルを **Shift_JIS** で開いた（Windows のメモ帳の古い版・Excel） |
| `�` や `?` だらけ | 読めないバイトを置き換えた（`errors="replace"`）。そもそも文字コードが違う |
| `ã“ã‚“…`・`æ–‡å­—` | UTF-8 を西欧の文字コード（latin-1 など）で読んだ |
| `UnicodeDecodeError: 'utf-8' codec can't decode byte 0x82` | **Shift_JIS** のファイルを UTF-8 で読もうとした（0x82 は Shift_JIS のひらがなによく出るバイト） |

## Windows でよくあるトラブル

### ① `open()` で `encoding` を書かない

```python
open("memo.txt").read()                     # ⚠️ OS によって読み方が変わる
open("memo.txt", encoding="utf-8").read()   # ✅ いつも UTF-8
```

`encoding` を省略すると、**OS の標準の文字コード** で読みます。Mac・Linux は UTF-8 ですが、日本語の Windows では cp932 になることがあり、Mac で動いたコードが Windows で `UnicodeDecodeError` になります（Python 3.15 で標準を UTF-8 にする変更が入りますが、それより古い Python もまだ多く使われています）。
**テキストファイルを開くときは、`encoding="utf-8"` を必ず書く** のが安全です。

### ② Excel で CSV を開くと文字化けする

Excel は、目印の無い CSV を Shift_JIS だと思って開きます。そこで、ファイルの先頭に **BOM**（「これは UTF-8 です」という 3 バイトの目印 `ef bb bf`）を付けます。

```python
import csv
with open("out.csv", "w", encoding="utf-8-sig", newline="") as f:   # utf-8-sig = BOM 付き UTF-8
    csv.writer(f).writerows([["名前", "金額"], ["りんご", 120]])
```

逆に、BOM 付きのファイルを普通の `utf-8` で読むと、最初の列名の前に見えない文字 `﻿` が付いて、`row["id"]` が見つからない（`KeyError`）といったことが起きます。読むときも `utf-8-sig` にすると、BOM があってもなくても読めます。

### ③ Shift_JIS のファイルを読む

```python
open("old.csv", encoding="cp932").read()
```

`shift_jis` より `cp932` のほうが安全です。cp932 は Windows 独自の文字（`①`・`髙` など）も読めますが、`shift_jis` だと `UnicodeEncodeError` などになります（`"①髙".encode("shift_jis")` がエラーになることを確認しました）。

## 文字数とバイト数は違う

```python
len("あ")            # 1（文字数）
len("あ".encode())   # 3（バイト数）
len("😀")            # 1
```

```javascript
"あ".length          // 1
"😀".length          // 2   ← JavaScript は 1 になるとは限らない
[..."😀"].length     // 1
```

JavaScript の `.length` は、絵文字などを 2 と数えることがあります。「20 文字まで」の入力チェックや、データベースの「100 バイトまで」の列で、思ったより早く上限に届くのはこのためです。

## AI のコードではこう出てくる

| 書き方 | チェック |
|---|---|
| `open(path)`（`encoding` 無し） | ⚠️ Windows で化ける可能性。`encoding="utf-8"` を |
| `encoding="utf-8-sig"` | ✅ Excel 向けの CSV、または BOM 付きでも読めるように |
| `encoding="cp932"` | 古い Windows のファイルや、日本の銀行・役所の CSV を読んでいる |
| `errors="ignore"` / `errors="replace"` | ⚠️ 読めない文字を **黙って消す／置き換える**。データが欠けても気づけない |
| `requests` の `resp.text` が化ける | `resp.encoding = "utf-8"` を設定するか、`resp.content.decode(...)` |
| HTML の `<meta charset="utf-8">` | ✅ ブラウザに文字コードを伝えている |

```quiz
? 画面に「縺薙ｓ縺ｫ縺｡縺ｯ」と表示された。いちばん考えられる原因は？
+ UTF-8 で保存されたものを Shift_JIS として読んだ
- Shift_JIS で保存されたものを UTF-8 として読んだ
- ファイルが壊れている
> 「縺」が並ぶのは、UTF-8 の日本語を Shift_JIS（cp932）で読んだときの典型的な化け方です。

? Python で作った CSV を Excel で開くと文字化けする。直し方として適切なのは？
- `encoding="ascii"` で書く
+ `encoding="utf-8-sig"`（BOM 付き UTF-8）で書く
- `errors="ignore"` を付ける
> Excel は BOM という目印があると UTF-8 として開きます。`utf-8-sig` で書くと BOM が付きます。

? `open("data.txt").read()` が Mac では動いたのに、Windows で `UnicodeDecodeError` になった。理由は？
- Windows では `open` が使えない
- ファイルが大きすぎる
+ `encoding` を省略すると OS の標準の文字コードで読むため、Windows では UTF-8 以外で読もうとした
> 省略時の文字コードは OS によって違います。`encoding="utf-8"` を明示すれば、どこでも同じように読めます。
```
