---
title: パスワードとハッシュ ― なぜ「遅い」ハッシュを使うのか
level: 2
minutes: 18
concepts: [security, auth]
summary: SHA-256 では 1 秒に 100 万回以上試せてしまう。ソルト・bcrypt・Argon2 の役割を実際に測って確かめ、トークンの作り方や比べ方の落とし穴まで。
---
## このレッスンのゴール

- パスワードを SHA-256 や MD5 だけで保存してはいけない理由を、数字で説明できる
- ソルトと「わざと遅いハッシュ」（bcrypt・Argon2）の役割が分かる
- パスワードリセットのトークンなど、ランダムな値を安全に作る方法が分かる

バックエンドコースのレッスン 9 で「bcrypt でハッシュ化する」ことを学びました。ここでは **なぜそれでなければいけないのか** を、実際に攻撃する側の立場で確かめます。

## 前提：データベースは盗まれるかもしれない

パスワードを守る仕組みは、「データベースの中身が盗まれた後」を想定しています。盗んだ人は、**手元のパソコンで好きなだけ試せます**。どれだけ時間を稼げるかが勝負です。

## SHA-256 はなぜダメか

```python
import hashlib
hashlib.sha256("password".encode()).hexdigest()
# '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8'
```

ハッシュは元に戻せない変換なので、一見安全そうです。でも、問題が 2 つあります。

### ① 同じパスワードは、いつも同じハッシュ

`password` の SHA-256 は、誰が計算しても上と同じ値です。よく使われるパスワードのハッシュを並べた **早見表（レインボーテーブル）** がネットに出回っているので、**検索するだけで元のパスワードが分かります**。
MD5（`5f4dcc3b5aa765d61d8327deb882cf99` が `password`）はさらに有名です。

### ② 速すぎる

```python
for i in range(1_000_000):
    hashlib.sha256(str(i).encode()).digest()
# この環境（普通の Python・1 コア）で 1 秒に約 130 万回
```

SHA-256 は **速く計算できるように作られた** ハッシュです。ファイルが壊れていないかの確認には便利ですが、パスワードにとっては、攻撃者が **速く総当たりできる** ということです。

```python
target = hashlib.sha256(b"4821").hexdigest()      # 4 桁の暗証番号のハッシュが盗まれた
for i in range(10000):
    if hashlib.sha256(f"{i:04d}".encode()).hexdigest() == target:
        print("found", f"{i:04d}")                # found 4821 … 約 3 ミリ秒
```

専用の機械（GPU）を使えば、1 秒に **何十億回** も試せます。8 文字の英小文字（約 2000 億通り）なら数分です。

## 対策 1：ソルト

**ユーザーごとに違うランダムな値（ソルト）を混ぜてから** ハッシュにします。

```text
password + 「x7Kp...」→ ハッシュ A
password + 「Qm2v...」→ ハッシュ B   ← 同じパスワードでも違う値
```

- 早見表が使えなくなる（ソルトごとに作り直しになる）
- 同じパスワードの人がいても、データベースを見ただけでは分からない

## 対策 2：わざと遅いハッシュ

```python
import bcrypt, time

start = time.perf_counter()
hashed = bcrypt.hashpw("hana-2027".encode(), bcrypt.gensalt())     # 初期設定のコスト 12
print(time.perf_counter() - start)       # 約 0.32 秒

bcrypt.hashpw(b"password", bcrypt.gensalt())
# b'$2b$12$5FSqAz1NnR26p6ckisKaEOVHfi4M4HUoozeb2Gei7cAuYAP8mKI9O'
bcrypt.hashpw(b"password", bcrypt.gensalt())
# b'$2b$12$eFQcohm2C.k24vmpTx4r5.xXUtRuWEgxmQpc30YW1VAXNWTlXvNC6'   ← 同じパスワードでも毎回違う
```

| | SHA-256 | bcrypt（コスト 12） |
|---|---|---|
| 1 回の計算 | 約 0.0000008 秒 | 約 0.32 秒 |
| 1 秒に試せる数（この環境） | 約 130 万回 | 約 3 回 |

**約 40 万倍遅い** ので、総当たりにかかる時間も 40 万倍になります。ログインする本人にとっては 0.3 秒の待ち時間ですが、何億回も試したい攻撃者にとっては致命的です。

bcrypt の結果の文字列には、必要なものが全部入っています。

```text
$2b$12$5FSqAz1NnR26p6ckisKaEO VHfi4M4HUoozeb2Gei7cAuYAP8mKI9O
 │   │  └ ソルト（22 文字）     └ ハッシュ本体
 │   └ コスト（2 の 12 乗回くり返す。1 増やすと 2 倍遅くなる）
 └ 方式（bcrypt）
```

だから、ソルトを別の列に保存する必要はありません。`bcrypt.checkpw(入力, 保存した値)` が、中のソルトとコストを使って同じ計算をして比べてくれます。

### Argon2：今のおすすめ

```python
from argon2 import PasswordHasher
ph = PasswordHasher()
h = ph.hash("hana-2027")
# '$argon2id$v=19$m=65536,t=3,p=4$...'   m=65536 は 64MB のメモリを使う、という意味
ph.verify(h, "hana-2027")      # True
ph.verify(h, "wrong")          # VerifyMismatchError（例外）
```

Argon2 は **計算時間に加えて、メモリもたくさん使う** ので、GPU でまとめて試すのがさらに難しくなります。新しく作るなら Argon2（argon2id）、既存のものは bcrypt でも十分です。

⚠️ bcrypt は **72 バイトまで** しか見ません。この環境の bcrypt 5 では、72 バイトを超えるパスワードを渡すと `ValueError: password cannot be longer than 72 bytes` になりました（古い版は黙って切り捨てます）。日本語は 1 文字 3 バイトなので、24 文字で上限です。

## ランダムな値は `secrets` で作る

パスワードリセットの URL、メール確認のコード、API キーなどは、**推測されない** ことがすべてです。

```python
import random
random.seed(42); [random.randint(0, 9) for _ in range(6)]   # [1, 0, 4, 3, 3, 2]
random.seed(42); [random.randint(0, 9) for _ in range(6)]   # [1, 0, 4, 3, 3, 2]   ← 同じ並び

import secrets
secrets.token_urlsafe(32)        # 'q3J0...'（毎回違う、推測できない 43 文字）
f"{secrets.randbelow(1_000_000):06d}"   # 6 桁の確認コード
```

`random` は、**種（シード）が分かれば次の値が予想できる** 作りです（ゲームやシミュレーション用）。セキュリティに関わる値は、必ず `secrets` を使います。JavaScript では `crypto.randomUUID()` や `crypto.getRandomValues()` を使い、`Math.random()` は使いません。

## 比べ方にも注意

```python
if token == saved_token:                       # ⚠️ 先頭から 1 文字ずつ比べ、違った時点で終わる
import hmac
if hmac.compare_digest(token, saved_token):    # ✅ いつも同じ時間で比べる
```

`==` は、違う文字が見つかった時点で終わるので、**何文字目まで合っていたかが、かかった時間からわずかに分かる** ことがあります（タイミング攻撃）。トークンや署名を比べるときは `hmac.compare_digest` を使います。bcrypt・Argon2 の確認関数は、中でこれを使っています。

## AI のコードではこう出てくる

| 見かけたら | 判定 |
|---|---|
| `hashlib.md5(password...)` / `hashlib.sha256(password...)` | ⚠️ パスワードには使わない。bcrypt か Argon2 に |
| `bcrypt.hashpw(...)` / `PasswordHasher().hash(...)` / `passlib` / `pwdlib` | ✅ |
| パスワードを暗号化（`Fernet` など）して保存し、復号して比べる | ⚠️ 鍵が漏れたら全員分が戻せる。ハッシュにする |
| `random.choice(...)` でトークン・パスワードを作る | ⚠️ `secrets` に |
| `token == request.args["token"]` | ⚠️ `hmac.compare_digest` に |
| パスワードを `print` やログに出している | ⚠️ ログから漏れる |
| 「パスワードを忘れた」で今のパスワードをメールで送る | ⚠️ 元に戻せるということは、ハッシュにしていない |

```quiz
? パスワードを SHA-256 だけでハッシュにして保存するのが危ない理由として、正しいものは？
- SHA-256 は元に戻せるから
+ 計算が速いので、盗まれたときに総当たりで大量に試されてしまうから
- SHA-256 は長すぎて保存できないから
> SHA-256 は戻せませんが、速すぎます。この環境でも 1 秒に約 130 万回試せました。bcrypt なら約 3 回です。

? bcrypt で同じパスワードを 2 回ハッシュにすると、結果が毎回違う理由は？
- bcrypt が壊れているから
+ ハッシュにするたびに、違うソルト（ランダムな値）を混ぜているから
- 時刻を混ぜているから
> ソルトのおかげで、早見表が使えず、同じパスワードの人がいても分かりません。ソルトは結果の文字列の中に入っているので、確認もできます。

? パスワードリセット用の URL に入れるトークンを作る方法として適切なのは？
- `random.randint(100000, 999999)`
- ユーザー ID と日時をつなげた文字列
+ `secrets.token_urlsafe(32)`
> `random` はシードが分かると予想できます。ID と日時も推測できます。`secrets` は推測できない値を作るためのモジュールです。
```
