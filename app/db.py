"""学習ノートの保存先（SQLite）。

Python 標準ライブラリの sqlite3 だけを使っている。
data/notebook.db という 1 ファイルに全部入る。
"""

import json
import sqlite3
from contextlib import contextmanager
from pathlib import Path

DB_PATH = Path(__file__).resolve().parent.parent / "data" / "notebook.db"


@contextmanager
def connect():
    DB_PATH.parent.mkdir(parents=True, exist_ok=True)
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row  # 行を dict のように扱えるようにする
    try:
        yield conn
        conn.commit()
    finally:
        conn.close()


def init_db() -> None:
    with connect() as conn:
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS notes (
                id          INTEGER PRIMARY KEY AUTOINCREMENT,
                created_at  TEXT    NOT NULL DEFAULT (datetime('now', 'localtime')),
                title       TEXT    NOT NULL,
                language    TEXT    NOT NULL,
                code        TEXT    NOT NULL,
                explanation TEXT    NOT NULL,
                summary     TEXT    NOT NULL DEFAULT '',
                concepts    TEXT    NOT NULL DEFAULT '[]',  -- JSON 配列
                keywords    TEXT    NOT NULL DEFAULT '[]',  -- JSON 配列
                teachback_score INTEGER                     -- 自分の説明の点数（0〜100）
            )
            """
        )


def _row_to_dict(row: sqlite3.Row) -> dict:
    d = dict(row)
    d["concepts"] = json.loads(d["concepts"])
    d["keywords"] = json.loads(d["keywords"])
    return d


def add_note(*, title, language, code, explanation, summary, concepts, keywords) -> int:
    with connect() as conn:
        cur = conn.execute(
            "INSERT INTO notes (title, language, code, explanation, summary, concepts, keywords)"
            " VALUES (?, ?, ?, ?, ?, ?, ?)",
            (
                title,
                language,
                code,
                explanation,
                summary,
                json.dumps(concepts, ensure_ascii=False),
                json.dumps(keywords, ensure_ascii=False),
            ),
        )
        return cur.lastrowid


def list_notes() -> list[dict]:
    with connect() as conn:
        rows = conn.execute(
            "SELECT id, created_at, title, language, summary, concepts, keywords, teachback_score"
            " FROM notes ORDER BY id DESC"
        ).fetchall()
    out = []
    for r in rows:
        d = dict(r)
        d["concepts"] = json.loads(d["concepts"])
        d["keywords"] = json.loads(d["keywords"])
        out.append(d)
    return out


def get_note(note_id: int) -> dict | None:
    with connect() as conn:
        row = conn.execute("SELECT * FROM notes WHERE id = ?", (note_id,)).fetchone()
    return _row_to_dict(row) if row else None


def delete_note(note_id: int) -> None:
    with connect() as conn:
        conn.execute("DELETE FROM notes WHERE id = ?", (note_id,))


def set_teachback_score(note_id: int, score: int) -> None:
    with connect() as conn:
        # 最高点を残す（何度でも挑戦できるように）
        conn.execute(
            "UPDATE notes SET teachback_score = MAX(COALESCE(teachback_score, 0), ?) WHERE id = ?",
            (score, note_id),
        )
