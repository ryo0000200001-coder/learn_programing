---
title: モジュールと npm・package.json
level: 3
minutes: 12
concepts: [modules, tooling]
summary: import / export と、JavaScript プロジェクトの構成ファイルを読む。
---
## このレッスンのゴール

- `import` / `export` の書き方を読める
- `package.json` の主な項目と `npm install` / `npm run` が分かる

## export と import

```javascript
// math.js
export function add(a, b) { return a + b; }   // 名前付き export
export const PI = 3.14;
export default function main() { ... }         // default export（1 ファイル 1 つ）
```

```javascript
// app.js
import main, { add, PI } from "./math.js";     // default は { } の外
import * as math from "./math.js";             // まとめて math.add のように使う
import React, { useState } from "react";       // ライブラリから
```

| 書き方 | 意味 |
|---|---|
| `"./math.js"`（./ で始まる） | 自分のファイル |
| `"react"`（名前だけ） | npm でインストールしたライブラリ |

古いコードや Node.js では `const fs = require("fs");` / `module.exports = ...` という書き方（CommonJS）も見ます。意味は同じです。

## package.json：プロジェクトの設計書

```json
{
  "name": "my-app",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "test": "vitest"
  },
  "dependencies": {
    "react": "^18.3.1"
  },
  "devDependencies": {
    "vite": "^5.4.0"
  }
}
```

| 項目 | 意味 |
|---|---|
| `scripts` | `npm run dev` などで実行できるコマンドの一覧 |
| `dependencies` | 動かすのに必要なライブラリ |
| `devDependencies` | 開発中だけ必要なツール（ビルド・テスト） |
| `^18.3.1` | 「18.x の範囲で新しいものを使ってよい」 |

## よく使うコマンド

```bash
npm install          # package.json の内容をインストール（node_modules/ ができる）
npm install axios    # ライブラリを追加
npm run dev          # scripts の dev を実行
```

`node_modules/` は巨大なので Git には含めません（`.gitignore` に書く）。
`package-lock.json` は「実際に入れたバージョンの記録」で、こちらは Git に含めます。

## Python との対応

| Python | JavaScript |
|---|---|
| `pip install x` | `npm install x` |
| requirements.txt / pyproject.toml | package.json |
| `.venv/` | `node_modules/` |
| `python main.py` | `node main.js` / `npm run ...` |

```quiz
? `import { useState } from "react"` の "react" は？
+ npm でインストールしたライブラリ
- 同じフォルダの react.js
> ./ で始まらない名前はライブラリです。

? `npm run build` が実行するのは？
+ package.json の scripts.build に書かれたコマンド
- build という名前のファイル
- npm のビルド機能
> scripts はプロジェクト独自のコマンド集です。

? Git に含めないのが普通なのは？
- package.json
- package-lock.json
+ node_modules/
> npm install で再現できるので含めません。
```
