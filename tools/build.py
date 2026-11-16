"""content/ の Markdown を読み込み、サイトが使う site/data.js を作るスクリプト。

使い方（リポジトリの一番上で）:
    python tools/build.py

標準ライブラリだけで動く。site/index.html はこのあとダブルクリックで開ける。
"""

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CONTENT = ROOT / "content"
OUT = ROOT / "site" / "data.js"

FRONT_MATTER = re.compile(r"\A---\n(.*?)\n---\n", re.S)
QUIZ_BLOCK = re.compile(r"^```quiz\n(.*?)^```\s*$", re.S | re.M)

errors: list[str] = []


def parse_front_matter(text: str, path: Path) -> tuple[dict, str]:
    """先頭の --- で囲まれた部分を dict にする（key: value / key: [a, b] だけ対応）。"""
    m = FRONT_MATTER.match(text)
    if not m:
        errors.append(f"{path}: 先頭に --- で囲んだ情報（front matter）がありません")
        return {}, text
    meta = {}
    for line in m.group(1).splitlines():
        if not line.strip() or line.lstrip().startswith("#"):
            continue
        key, _, value = line.partition(":")
        value = value.strip()
        if value.startswith("[") and value.endswith("]"):
            meta[key.strip()] = [v.strip() for v in value[1:-1].split(",") if v.strip()]
        elif value.isdigit():
            meta[key.strip()] = int(value)
        else:
            meta[key.strip()] = value
    return meta, text[m.end():]


def parse_quiz(block: str, path: Path) -> list[dict]:
    """```quiz ブロックを問題の配列にする。

    ? 問題文
    - まちがいの選択肢
    + 正解の選択肢
    > 解説（複数行可）
    """
    questions = []
    q = None
    for raw in block.splitlines():
        line = raw.rstrip()
        if not line:
            continue
        mark, body = line[0], line[1:].strip()
        if mark == "?":
            q = {"question": body, "choices": [], "answer": None, "explain": ""}
            questions.append(q)
        elif q is None:
            errors.append(f"{path}: quiz は ? で始まる問題文から書いてください")
        elif mark in "-+":
            if mark == "+":
                q["answer"] = len(q["choices"])
            q["choices"].append(body)
        elif mark == ">":
            q["explain"] = (q["explain"] + "\n" + body).strip()
        else:
            q["question"] += "\n" + line
    for q in questions:
        if q["answer"] is None:
            errors.append(f"{path}: 正解（+）のない問題があります: {q['question'][:30]}")
    return questions


def load_markdown(path: Path) -> dict:
    meta, body = parse_front_matter(path.read_text(encoding="utf-8"), path)
    quizzes = []

    def replace(m):
        quizzes.append(parse_quiz(m.group(1), path))
        return f'<div class="quiz" data-quiz="{len(quizzes) - 1}"></div>\n'

    body = QUIZ_BLOCK.sub(replace, body)
    return {**meta, "body": body.strip(), "quizzes": quizzes}


def build() -> dict:
    concepts = json.loads((CONTENT / "concepts.json").read_text(encoding="utf-8"))

    courses = []
    for course_dir in sorted(p for p in (CONTENT / "courses").iterdir() if p.is_dir()):
        course = json.loads((course_dir / "course.json").read_text(encoding="utf-8"))
        course["id"] = course_dir.name
        lessons = []
        for f in sorted(course_dir.glob("*.md")):
            lesson = load_markdown(f)
            lesson["id"] = f.stem
            lesson.setdefault("level", 1)
            lesson.setdefault("concepts", [])
            lessons.append(lesson)
        course["lessons"] = lessons
        course.setdefault("status", "open" if lessons else "planned")
        courses.append(course)
    courses.sort(key=lambda c: c.get("order", 999))

    explanations = []
    for f in sorted((CONTENT / "explanations").glob("*.md"), reverse=True):
        e = load_markdown(f)
        e["id"] = f.stem
        e.setdefault("concepts", [])
        explanations.append(e)

    # 未知の概念 ID をチェック
    for item in [l for c in courses for l in c["lessons"]] + explanations:
        for cid in item["concepts"]:
            if cid not in concepts:
                errors.append(f"{item['id']}: concepts.json に無い概念 ID '{cid}'")

    return {"concepts": concepts, "courses": courses, "explanations": explanations}


def main() -> int:
    data = build()
    if errors:
        print("⚠️  問題が見つかりました:")
        for e in errors:
            print("  -", e)
        return 1
    OUT.write_text(
        "// tools/build.py が自動生成するファイル。直接編集しないでください。\n"
        "window.SITE_DATA = " + json.dumps(data, ensure_ascii=False, indent=1) + ";\n",
        encoding="utf-8",
    )
    n_lessons = sum(len(c["lessons"]) for c in data["courses"])
    print(f"✅ {OUT.relative_to(ROOT)} を作成: コース {len(data['courses'])} / "
          f"レッスン {n_lessons} / コード解説 {len(data['explanations'])}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
