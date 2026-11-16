"""Claude API とのやりとりをまとめたファイル。

- explain_stream : コードの解説を少しずつ（ストリーミングで）返す
- chat_stream    : 解説を読んだあとの追加質問に答える
- analyze        : ノート保存用に、言語・概念・キーワードを JSON で取り出す
- grade_teachback: 自分で書いた説明を採点してもらう
"""

from collections.abc import Iterator
from typing import Literal

import anthropic
from pydantic import BaseModel, Field

from .concepts import CONCEPTS, LANGUAGES

MODEL = "claude-opus-5-5"

# 環境変数 ANTHROPIC_API_KEY を自動で読む
client = anthropic.Anthropic()

NO_KEY_MESSAGE = (
    "API キーが設定されていません。環境変数 ANTHROPIC_API_KEY を設定してから"
    "サーバーを起動し直してください（README 参照）。"
)

# ---------------------------------------------------------------------------
# プロンプト
# ---------------------------------------------------------------------------

TUTOR_SYSTEM = """\
あなたは「AI が書いたコードを、人に説明できるレベルまで理解したい学習者」の専属チューターです。

## 学習者について
- Python は初心者レベルで読める（変数・if・for・関数・リスト・辞書くらい）。
- コードを一から書くことよりも、AI が書いたコードを正しく読み、その意図・仕組み・危ない所を
  自分の言葉で他人に説明できるようになることが目標。
- いろいろな言語を幅広く理解していきたい。

## 説明のしかた
- 日本語で、専門用語は初出のときに短く言い換える（例:「イミュータブル（あとから変更できない）」）。
- Python 以外の言語では、可能な限り「Python で言うと〜」という対応関係を示す。
  対応するものが無い概念（ポインタ、所有権、静的型など）は、無い理由も含めて説明する。
- 「何をしているか」だけでなく「なぜそう書くのか」「書かないと何が困るのか」を説明する。
- コードを引用するときは、該当部分だけを短くコードブロックで示す。
- 推測で断定しない。コードの外側（呼び出し元・設定・ライブラリのバージョン）に依存する部分は
  「ここはコードの外次第」とはっきり書く。
"""

LEVEL_GUIDE = {
    "easy": "やさしく：たとえ話を多めにし、細部は省いてよい。1ブロックの説明は短めに。",
    "normal": "ふつう：仕組みと理由をバランスよく。",
    "deep": "くわしく：内部の動き、計算量、言語仕様、ベストプラクティスや代替案まで踏み込む。",
}

EXPLAIN_FORMAT = """\
次の見出し構成（Markdown）で解説してください。見出しの文言は変えないこと。

## 🧭 ひとことで言うと
このコードが何をするものかを 1〜2 文で。言語名もここで明記する。

## 🗺️ 全体の流れ
入力 → 処理 → 出力 の流れを番号付きの箇条書きで。

## 🔍 ブロックごとの解説
意味のまとまりごとにコード片を引用し、何をしているか・なぜそう書くかを説明する。
1 行ずつではなく、人に説明するときの「区切り」で分ける。

## 🐍 Python と比べると
この言語特有の書き方・考え方を、Python の書き方と並べて説明する（表やコード比較を使ってよい）。
コードが Python の場合は「初心者が見落としやすい Python の書き方」を取り上げる。

## 🔑 キーワード
このコードを理解するのに必要な用語を 3〜8 個、「用語：ひとこと説明」の形で。

## ⚠️ AI のコードとしてのチェックポイント
バグの可能性、エラー処理の抜け、セキュリティ、古い書き方、動かすのに必要な前提（ライブラリ・環境）など、
AI が書いたコードをそのまま使う前に確認すべき点。問題が無ければ「大きな問題は見当たらない」と書く。

## 🗣️ 30 秒で人に説明するなら
このコードを同僚に口頭で説明するときの台本を、話し言葉で 3〜5 文。

## ✅ 理解度チェック
理解できたか確かめる問題を 3 問。各問題の答えは次の形式で折りたたむ：
<details><summary>答え</summary>

（答えと解説）

</details>
"""


def _explain_request(code: str, language: str, level: str, focus: str) -> str:
    lang_line = (
        "言語：自動判定してください。"
        if language in ("", "auto")
        else f"言語：{language}"
    )
    focus_line = f"\n特に知りたいこと：{focus}" if focus.strip() else ""
    return (
        f"{lang_line}\n"
        f"解説の深さ：{LEVEL_GUIDE.get(level, LEVEL_GUIDE['normal'])}"
        f"{focus_line}\n\n"
        f"{EXPLAIN_FORMAT}\n"
        "--- 解説してほしいコード ---\n"
        f"<code>\n{code}\n</code>"
    )


# ---------------------------------------------------------------------------
# ストリーミング共通処理
# ---------------------------------------------------------------------------


def _stream_text(*, system, messages, effort: str) -> Iterator[str]:
    """Claude の返答を文字列の断片として順に yield する。"""
    try:
        with client.beta.messages.stream(
            model=MODEL,
            max_tokens=64000,
            system=system,
            messages=messages,
            output_config={"effort": effort},
            # 安全フィルタで断られた場合、サーバー側で別モデルに自動で引き継ぐ
            betas=["server-side-fallback-2026-07-01"],
            fallbacks="default",
        ) as stream:
            for text in stream.text_stream:
                yield text
            final = stream.get_final_message()
        if final.stop_reason == "refusal":
            yield "\n\n> ⚠️ このリクエストには回答できませんでした。内容を変えて試してください。"
        elif final.stop_reason == "max_tokens":
            yield "\n\n> ⚠️ 長すぎて途中で切れました。コードを分けて貼り付けてみてください。"
    except anthropic.AuthenticationError:
        yield "\n\n> ❌ API キーが正しくありません。`ANTHROPIC_API_KEY` を確認してください。"
    except anthropic.RateLimitError:
        yield "\n\n> ⏳ 利用上限に達しました。少し待ってからもう一度試してください。"
    except anthropic.APIConnectionError:
        yield "\n\n> 🌐 API に接続できませんでした。ネットワークを確認してください。"
    except anthropic.APIStatusError as e:
        yield f"\n\n> ❌ API エラー（{e.status_code}）：{e.message}"
    except anthropic.AnthropicError as e:
        yield f"\n\n> ❌ {e}"
    except TypeError as e:
        if "authentication" not in str(e):
            raise
        yield f"\n\n> ❌ {NO_KEY_MESSAGE}"


def explain_stream(code: str, language: str, level: str, focus: str) -> Iterator[str]:
    effort = "high" if level == "deep" else "medium"
    return _stream_text(
        system=TUTOR_SYSTEM,
        messages=[{"role": "user", "content": _explain_request(code, language, level, focus)}],
        effort=effort,
    )


def chat_stream(code: str, explanation: str, history: list[dict]) -> Iterator[str]:
    """history は [{"role": "user"|"assistant", "content": "..."}] の配列（最後は user）。"""
    system = [
        {"type": "text", "text": TUTOR_SYSTEM},
        {
            "type": "text",
            "text": (
                "学習者は次のコードとその解説を読んだうえで質問しています。"
                "質問に的を絞って、短めに答えてください。必要なら小さなコード例を添えてください。\n\n"
                f"<code>\n{code}\n</code>\n\n<explanation>\n{explanation}\n</explanation>"
            ),
            # 同じコードについて何度も質問するので、ここまでをキャッシュして安く・速くする
            "cache_control": {"type": "ephemeral"},
        },
    ]
    return _stream_text(system=system, messages=history, effort="medium")


# ---------------------------------------------------------------------------
# 構造化出力（JSON）
# ---------------------------------------------------------------------------

ConceptId = Literal[tuple(CONCEPTS.keys())]  # type: ignore[valid-type]
LanguageName = Literal[tuple(LANGUAGES)]  # type: ignore[valid-type]


class NoteMeta(BaseModel):
    title: str = Field(description="ノートのタイトル。20 文字前後の日本語")
    language: LanguageName = Field(description="コードの言語")
    summary: str = Field(description="このコードが何をするかの 1 文要約")
    concepts: list[ConceptId] = Field(description="このコードに登場する主要な概念（1〜6 個）")
    keywords: list[str] = Field(description="重要な用語（3〜8 個）")


class TeachbackResult(BaseModel):
    score: int = Field(description="0〜100 の点数。他人に正しく説明できるレベルなら 80 以上")
    good_points: list[str] = Field(description="説明できている点")
    missing_points: list[str] = Field(description="説明から抜けている重要な点")
    misconceptions: list[str] = Field(description="誤解・不正確な点（無ければ空）")
    model_answer: str = Field(description="お手本の説明（話し言葉で 3〜6 文）")
    next_step: str = Field(description="次に理解を深めるためのおすすめ 1 つ")


class LLMError(Exception):
    pass


def _parse(model_cls, *, system: str, content: str):
    try:
        response = client.messages.parse(
            model=MODEL,
            max_tokens=16000,
            system=system,
            messages=[{"role": "user", "content": content}],
            output_config={"effort": "low"},
            output_format=model_cls,
        )
    except anthropic.APIStatusError as e:
        raise LLMError(f"API エラー（{e.status_code}）：{e.message}") from e
    except anthropic.APIConnectionError as e:
        raise LLMError("API に接続できませんでした") from e
    except anthropic.AnthropicError as e:
        raise LLMError(str(e)) from e
    except TypeError as e:
        if "authentication" not in str(e):
            raise
        raise LLMError(NO_KEY_MESSAGE) from e
    if response.stop_reason == "refusal" or response.parsed_output is None:
        raise LLMError("回答を取得できませんでした")
    return response.parsed_output


def analyze(code: str, explanation: str) -> NoteMeta:
    concept_list = "\n".join(f"- {k}: {name}（{desc}）" for k, (name, desc) in CONCEPTS.items())
    return _parse(
        NoteMeta,
        system="コードと解説を読み、学習ノート用のメタデータを作ります。",
        content=(
            f"概念 ID の一覧:\n{concept_list}\n\n"
            f"<code>\n{code}\n</code>\n\n<explanation>\n{explanation}\n</explanation>"
        ),
    )


def grade_teachback(code: str, explanation: str, user_text: str) -> TeachbackResult:
    return _parse(
        TeachbackResult,
        system=TUTOR_SYSTEM
        + "\n\n今回は、学習者が自分の言葉で書いた「このコードの説明」を採点します。"
        "他人に説明して通じるか、誤りが無いか、重要な点を押さえているかを基準に、"
        "励ましつつも甘くしすぎずに評価してください。",
        content=(
            f"<code>\n{code}\n</code>\n\n"
            f"<reference_explanation>\n{explanation}\n</reference_explanation>\n\n"
            f"<learner_explanation>\n{user_text}\n</learner_explanation>"
        ),
    )
