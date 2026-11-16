"""Web サーバー本体（FastAPI）。

起動: uvicorn app.main:app --reload
ブラウザで http://localhost:8000 を開く。
"""

from pathlib import Path

from fastapi import FastAPI, HTTPException
from fastapi.responses import FileResponse, StreamingResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, Field

from . import db, llm
from .concepts import CONCEPTS, LANGUAGES

STATIC_DIR = Path(__file__).resolve().parent.parent / "static"
MAX_CODE_CHARS = 60_000

app = FastAPI(title="Code Reading Dojo")
db.init_db()


# ---- 入力の形（リクエストボディ） ------------------------------------------


class ExplainIn(BaseModel):
    code: str = Field(min_length=1, max_length=MAX_CODE_CHARS)
    language: str = "auto"
    level: str = "normal"
    focus: str = ""


class ChatMessage(BaseModel):
    role: str
    content: str


class ChatIn(BaseModel):
    code: str = Field(max_length=MAX_CODE_CHARS)
    explanation: str
    history: list[ChatMessage]


class SaveIn(BaseModel):
    code: str = Field(min_length=1, max_length=MAX_CODE_CHARS)
    explanation: str = Field(min_length=1)


class TeachbackIn(BaseModel):
    code: str
    explanation: str
    user_text: str = Field(min_length=1)
    note_id: int | None = None


# ---- API ----------------------------------------------------------------


def _text_stream(gen):
    return StreamingResponse(gen, media_type="text/plain; charset=utf-8")


@app.get("/api/meta")
def meta():
    return {
        "languages": LANGUAGES,
        "concepts": {k: {"name": n, "desc": d} for k, (n, d) in CONCEPTS.items()},
    }


@app.post("/api/explain")
def explain(body: ExplainIn):
    return _text_stream(llm.explain_stream(body.code, body.language, body.level, body.focus))


@app.post("/api/chat")
def chat(body: ChatIn):
    if not body.history or body.history[-1].role != "user":
        raise HTTPException(400, "最後のメッセージは質問である必要があります")
    history = [m.model_dump() for m in body.history if m.role in ("user", "assistant")]
    return _text_stream(llm.chat_stream(body.code, body.explanation, history))


@app.post("/api/notes")
def save_note(body: SaveIn):
    try:
        meta = llm.analyze(body.code, body.explanation)
    except llm.LLMError as e:
        raise HTTPException(502, str(e)) from e
    note_id = db.add_note(
        title=meta.title,
        language=meta.language,
        code=body.code,
        explanation=body.explanation,
        summary=meta.summary,
        concepts=list(dict.fromkeys(meta.concepts)),  # 重複を除く
        keywords=meta.keywords,
    )
    return db.get_note(note_id)


@app.get("/api/notes")
def notes():
    return db.list_notes()


@app.get("/api/notes/{note_id}")
def note(note_id: int):
    n = db.get_note(note_id)
    if not n:
        raise HTTPException(404, "ノートが見つかりません")
    return n


@app.delete("/api/notes/{note_id}")
def remove_note(note_id: int):
    db.delete_note(note_id)
    return {"ok": True}


@app.post("/api/teachback")
def teachback(body: TeachbackIn):
    try:
        result = llm.grade_teachback(body.code, body.explanation, body.user_text)
    except llm.LLMError as e:
        raise HTTPException(502, str(e)) from e
    if body.note_id is not None:
        db.set_teachback_score(body.note_id, max(0, min(100, result.score)))
    return result


@app.get("/api/progress")
def progress():
    """言語 × 概念 の出現回数をまとめる（学習マップ用）。"""
    by_lang: dict[str, dict] = {}
    concept_total: dict[str, int] = {k: 0 for k in CONCEPTS}
    for n in db.list_notes():
        lang = by_lang.setdefault(n["language"], {"notes": 0, "concepts": {}, "best_scores": []})
        lang["notes"] += 1
        if n["teachback_score"] is not None:
            lang["best_scores"].append(n["teachback_score"])
        for c in n["concepts"]:
            if c in concept_total:
                concept_total[c] += 1
                lang["concepts"][c] = lang["concepts"].get(c, 0) + 1
    return {"by_language": by_lang, "concept_total": concept_total}


# ---- 画面（静的ファイル） --------------------------------------------------


@app.get("/")
def index():
    return FileResponse(STATIC_DIR / "index.html")


app.mount("/static", StaticFiles(directory=STATIC_DIR), name="static")
