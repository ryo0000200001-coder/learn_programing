---
title: Docker の基本 ― 動く環境ごと箱に詰める
level: 3
minutes: 22
concepts: [deploy, tooling, hardware]
summary: イメージとコンテナの違い、Dockerfile の各行とキャッシュ、ポートの対応づけ、環境変数、.dockerignore、docker compose でアプリとデータベースを一緒に動かすまで。すべて実際に動かした出力つき。
---
## このレッスンのゴール

- イメージとコンテナの違い、`docker build`・`docker run` の役割を説明できる
- Dockerfile を読んで、キャッシュが効く順番になっているか判断できる
- `compose.yaml` を読んで、どのサービスがどうつながっているか説明できる

バックエンドコースのレッスン 15 で Dockerfile の各行の意味を見ました。ここでは、**実際にビルドして動かしたときに何が起きるか** を見ます。この環境で、小さな FastAPI のアプリを実際にビルド・実行しました。

## イメージとコンテナ

| | たとえ | 説明 | 作るコマンド |
|---|---|---|---|
| **Dockerfile** | レシピ | どう作るかの手順書 | 自分で書く |
| **イメージ** | 冷凍食品 | 手順どおりに作った、**動かす前の完成品**。変わらない | `docker build` |
| **コンテナ** | 温めて皿に出した料理 | イメージを **実行している最中のもの**。いくつでも作れる | `docker run` |

コンピュータの基礎コースの「プログラムとプロセス」の関係に似ています。イメージがプログラム、コンテナがプロセスです。

## アプリと Dockerfile

```python
# main.py
import os
from fastapi import FastAPI
app = FastAPI()

@app.get("/")
def root():
    return {"message": "hello", "env": os.environ.get("APP_ENV", "development")}
```

```dockerfile
FROM python:3.12-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```

（この環境では、ネットワークの事情で証明書の設定を 2 行足してビルドしました。普通のパソコンでは上のままで動きます。下の出力の `[3/6]` などの番号は、その 2 行を足した版のものです）

## ビルドする

```text
$ docker build -t hello-api .
#5 [1/6] FROM docker.io/library/python:3.12-slim
#7 [3/6] WORKDIR /app
#8 [4/6] COPY requirements.txt .
#9 [5/6] RUN pip install --no-cache-dir -r requirements.txt
#9 DONE 7.7s
#10 [6/6] COPY . .
#11 naming to docker.io/library/hello-api:latest done
```

| 部分 | 意味 |
|---|---|
| `-t hello-api` | できたイメージに `hello-api` という名前（タグ）を付ける |
| `.` | 今のディレクトリのファイルを材料（ビルドコンテキスト）として使う |
| `[5/6] RUN pip install ...` `DONE 7.7s` | ライブラリのインストールに 7.7 秒かかった |

### キャッシュ：変わったところから下だけ作り直す

`main.py` を 1 行変えて、もう一度ビルドしました。

```text
#6 [3/6] WORKDIR /app
#6 CACHED
#8 [4/6] COPY requirements.txt .
#8 CACHED
#9 [5/6] RUN pip install --no-cache-dir -r requirements.txt
#9 CACHED                     ← インストールはやり直していない
#10 [6/6] COPY . .
#10 DONE 0.0s                 ← 変わったのはここから
```

Docker は **1 行ごとの結果を覚えておき**、材料が変わっていない行は `CACHED`（使い回し）にします。ある行が変わると、**そこから下は全部作り直し** です。

だから、**変わりにくいもの（ライブラリの一覧）を先に、変わりやすいもの（コード）を後に** コピーします。もし最初に `COPY . .` してから `pip install` すると、コードを 1 文字変えるたびに毎回インストールし直すことになります。

### .dockerignore

```text
# .dockerignore
.venv/
__pycache__/
.env
.git/
```

`COPY . .` で **入れたくないもの** を書きます。`.gitignore` と同じ書き方です。

- `.env` を入れると、**秘密がイメージの中に残ります**。イメージを共有・公開すると漏れます
- `.venv/` や `node_modules/` を入れると、イメージが大きくなり、手元の OS 用のファイルが混ざって動かないこともあります

## 動かす

```text
$ docker run -d --name hello -p 8080:8000 -e APP_ENV=production hello-api
$ curl localhost:8080/
{"message":"hello","env":"production"}

$ docker ps
hello 0.0.0.0:8080->8000/tcp Up 4 seconds

$ docker logs hello
INFO:     Uvicorn running on http://0.0.0.0:8000 (Press CTRL+C to quit)
INFO:     172.17.0.1:52822 - "GET / HTTP/1.1" 200 OK
```

| オプション | 意味 |
|---|---|
| `-d` | 後ろで動かす（ターミナルを占領しない） |
| `--name hello` | コンテナに名前を付ける |
| `-p 8080:8000` | **パソコンの 8080 番** に来たものを、**コンテナの 8000 番** に渡す（左が外、右が中） |
| `-e APP_ENV=production` | 環境変数を渡す（レッスン 4）。アプリの返事が `production` になった |

| よく使うコマンド | 意味 |
|---|---|
| `docker ps` / `docker ps -a` | 動いているコンテナ／止まったものも含めて一覧 |
| `docker logs 名前` | コンテナの出力（ログ） |
| `docker stop 名前` / `docker rm 名前` | 止める／消す |
| `docker exec -it 名前 bash` | 動いているコンテナの中に入って、コマンドを打つ |
| `docker images` | イメージの一覧（今回の hello-api は 215MB でした） |

⚠️ `--host 0.0.0.0` を付けずに `127.0.0.1` で起動すると、コンテナの **中からしか** 届かず、`-p` を付けてもつながりません。「コンテナは動いているのにブラウザで開けない」ときの定番の原因です。

## docker compose：複数のコンテナをまとめて動かす

アプリとデータベースのように、**複数のコンテナを一緒に** 動かすときは、`compose.yaml`（古い名前は `docker-compose.yml`）に書きます。

```yaml
services:
  api:                                   # 1 つ目：自分のアプリ
    build: .                             # この場所の Dockerfile でビルド
    ports:
      - "8080:8000"
    environment:
      APP_ENV: production
      DATABASE_URL: postgresql://app:app-password@db:5432/app   # ← 相手の名前「db」で届く
    depends_on:
      - db                               # db を先に起動する
  db:                                    # 2 つ目：PostgreSQL
    image: postgres:17                   # ビルドせず、公開されているイメージを使う
    environment:
      POSTGRES_USER: app
      POSTGRES_PASSWORD: app-password
      POSTGRES_DB: app
    volumes:
      - db-data:/var/lib/postgresql/data # データをコンテナの外に保存
volumes:
  db-data:
```

```text
$ docker compose up -d
 Container dk-db-1 Started
 Container dk-api-1 Started

$ docker compose ps
api running 0.0.0.0:8080->8000/tcp
db  running 5432/tcp

$ docker compose exec db psql -U app -d app -c "select 1 as ok"
 ok
----
  1
```

| 読みどころ | 意味 |
|---|---|
| `@db:5432` | compose の中では、**サービスの名前（`db`）がそのまま住所** になる。api のコンテナから `db` を引くと `172.18.0.2` が返ってきた |
| `db` に `ports` が無い | パソコンの外からは、データベースに直接つなげない（api からだけ届く）。安全 |
| `volumes` | コンテナを消してもデータが残る場所。`docker compose down` の後も `db-data` が残っていた |
| `depends_on` | 起動の順番だけ。⚠️ データベースが「使える状態」になるまで待つわけではない（`healthcheck` を足す） |

⚠️ `POSTGRES_PASSWORD: app-password` のように compose に直接書いてよいのは、**手元の開発用** だけです。本番の秘密は、レッスン 4 の方法で渡します。

## AI のコードではこう出てくる

| 見かけたら | チェック |
|---|---|
| `COPY . .` の後に `RUN pip install` / `RUN npm install` | ⚠️ 毎回インストールし直しになる。一覧のファイルを先にコピー |
| `.dockerignore` が無い | ⚠️ `.env` や `node_modules` がイメージに入る |
| `FROM python:latest` | ⚠️ ビルドするたびにバージョンが変わる。`3.12-slim` のように固定 |
| `ENV API_KEY=sk-...` を Dockerfile に | ⚠️ イメージに秘密が残る。`docker run -e` や本番の設定で渡す |
| `CMD ["uvicorn", "main:app", "--reload"]` | ⚠️ 開発用。本番では外す |
| `ports: - "5432:5432"`（db に） | 手元で直接つなぎたいなら便利だが、本番のサーバーでは外から届いてしまう |
| `-slim` / `-alpine` の付いたイメージ | ✅ 小さいイメージ。`alpine` は一部の Python ライブラリでビルドに困ることがある |

```quiz
? `docker build` と `docker run` の関係として正しいのは？
+ build でイメージ（動かす前の完成品）を作り、run でそれを実行したコンテナを作る
- build でコンテナを作り、run でイメージを作る
- どちらも同じ意味
> イメージはレシピから作った完成品、コンテナはそれを動かしている最中のものです。1 つのイメージから何個でもコンテナを作れます。

? Dockerfile で `COPY requirements.txt .` → `RUN pip install` → `COPY . .` の順にする理由は？
- そうしないとエラーになるから
+ コードだけを変えたとき、ライブラリのインストールをキャッシュで飛ばせるから
- イメージが小さくなるから
> Docker は変わった行から下を作り直します。変わりにくいライブラリの一覧を先にすれば、コードを変えてもインストールは CACHED になります（実際に確認しました）。

? compose の `api` から `db` の PostgreSQL につなぐとき、`DATABASE_URL` の住所の部分に書くのは？
- `localhost`
+ `db`（サービスの名前）
- パソコンの IP アドレス
> compose の中では、サービスの名前が住所になります。api のコンテナの中の `localhost` は、api 自身のことです。
```
