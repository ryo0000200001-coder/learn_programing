// 画面の動き。data.js（tools/build.py が生成）の SITE_DATA を表示する。
// ページの切り替えは URL の # の後ろ（例 #/lesson/10-python/01-variables-and-types）で行う。

const DATA = window.SITE_DATA;
const app = document.getElementById("app");

// ---------- 進み具合（このブラウザの localStorage に保存） ----------
const STORE_KEY = "crd-progress-v1";

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORE_KEY)) || { done: {} };
  } catch {
    return { done: {} };
  }
}
const progress = loadProgress();

function saveProgress() {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(progress));
  } catch {
    /* 保存できない環境（プライベートモード等）でも表示は続ける */
  }
}
const isDone = (key) => Boolean(progress.done[key]);
function setDone(key, on) {
  if (on) progress.done[key] = new Date().toISOString();
  else delete progress.done[key];
  saveProgress();
}

// ---------- 小道具 ----------
const esc = (s) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const md = (text) => DOMPurify.sanitize(marked.parse(text ?? ""));
const conceptName = (id) => DATA.concepts[id]?.name ?? id;
const LEVEL_LABEL = { 1: "入門", 2: "基礎", 3: "実践", 4: "応用" };

const courseById = (id) => DATA.courses.find((c) => c.id === id);
const lessonKey = (courseId, lessonId) => `lesson:${courseId}/${lessonId}`;
const explKey = (id) => `expl:${id}`;

function allLessons() {
  return DATA.courses.flatMap((c) => c.lessons.map((l) => ({ course: c, lesson: l })));
}

function courseStats(course) {
  const total = course.lessons.length;
  const done = course.lessons.filter((l) => isDone(lessonKey(course.id, l.id))).length;
  return { total, done, pct: total ? Math.round((done / total) * 100) : 0 };
}

function nextLesson() {
  return allLessons().find(({ course, lesson }) => !isDone(lessonKey(course.id, lesson.id)));
}

function bar(pct) {
  return `<div class="bar"><span style="width:${pct}%"></span></div>`;
}

function chips(ids) {
  return ids.map((c) => `<a class="chip" href="#/concepts/${esc(c)}">${esc(conceptName(c))}</a>`).join("");
}

function afterRender() {
  app.querySelectorAll("pre code").forEach((b) => hljs.highlightElement(b));
  window.scrollTo(0, 0);
}

// ---------- クイズ ----------
function mountQuizzes(container, quizzes, onAllCorrect) {
  const total = quizzes.reduce((n, q) => n + q.length, 0);
  let correct = 0;
  container.querySelectorAll(".quiz[data-quiz]").forEach((el) => {
    const questions = quizzes[Number(el.dataset.quiz)] || [];
    el.innerHTML = `<div class="quiz-title">✏️ 確認クイズ</div>` +
      questions.map((q, qi) => `
        <div class="q" data-q="${qi}">
          <div class="q-text">Q${qi + 1}. ${md(q.question)}</div>
          <div class="choices">
            ${q.choices.map((c, ci) => `<button class="choice" data-c="${ci}">${md(c)}</button>`).join("")}
          </div>
          <div class="q-explain hidden"></div>
        </div>`).join("");

    el.querySelectorAll(".q").forEach((qEl) => {
      const q = questions[Number(qEl.dataset.q)];
      qEl.addEventListener("click", (e) => {
        const btn = e.target.closest(".choice");
        if (!btn || qEl.classList.contains("answered")) return;
        const ok = Number(btn.dataset.c) === q.answer;
        qEl.classList.add("answered");
        btn.classList.add(ok ? "right" : "wrong");
        qEl.querySelectorAll(".choice")[q.answer].classList.add("right");
        const ex = qEl.querySelector(".q-explain");
        ex.innerHTML = `<b>${ok ? "⭕ 正解！" : "❌ ざんねん"}</b> ${md(q.explain)}`;
        ex.classList.remove("hidden");
        if (ok && ++correct === total && onAllCorrect) onAllCorrect();
      });
    });
  });
}

// ---------- 各ページ ----------
function viewHome() {
  const lessons = allLessons();
  const doneCount = lessons.filter(({ course, lesson }) => isDone(lessonKey(course.id, lesson.id))).length;
  const next = nextLesson();
  const pct = lessons.length ? Math.round((doneCount / lessons.length) * 100) : 0;

  app.innerHTML = `
    <section class="hero">
      <h1>AI のコードを「人に説明できる」まで。</h1>
      <p>基礎から順番に学ぶ<b>コース</b>と、AI が書いたコードを Claude に解説させてためていく<b>コード解説</b>の 2 本立てです。</p>
      <div class="hero-progress">
        <div>全体の進み具合 <b>${doneCount}</b> / ${lessons.length} レッスン</div>
        ${bar(pct)}
      </div>
      ${next ? `<a class="btn primary" href="#/lesson/${next.course.id}/${next.lesson.id}">
          ${doneCount ? "続きから" : "はじめる"}：${esc(next.course.icon)} ${esc(next.lesson.title)} →</a>`
        : `<p>🎉 公開中のレッスンはすべて完了！ 新しいコースを Claude に頼んでみましょう。</p>`}
    </section>

    ${courseSections()}

    <h2>最近のコード解説 <a class="more" href="#/explanations">すべて見る →</a></h2>
    ${explCards(DATA.explanations.slice(0, 3))}

    <section class="howto">
      <h2>コード解説の増やし方</h2>
      <ol>
        <li>claude.ai/code で、リポジトリ <b>learn_programing</b> を選んで会話を始める</li>
        <li>AI に書いてもらったコードを貼り付けて送る（「解説して」は付けても付けなくても OK）。<br>
          GitHub にあるプログラムなら「◯◯リポジトリの main.py を解説して」でも OK</li>
        <li>Claude が解説ページを作って GitHub に保存する（自動で main に入る）。終わるまで待つだけ</li>
        <li>タスクバーの <b>Code Reading Dojo アイコン（open-site.bat）</b>でサイトを開き直す（自動で最新版を取ってくる）</li>
        <li>「コード解説」の一番上に並ぶ。クイズと関連レッスンで復習する</li>
      </ol>
      <p class="muted">ふつうの質問はチャットで答えるだけでサイトには残りません。残したいときは「サイトに残して」と添えてください。<br>
        新しいコースやレッスンも「SQL コースを作って」のように頼めば同じ流れで追加されます。</p>
    </section>`;
  afterRender();
}

const CATEGORIES = [
  { id: "start", title: "はじめに", desc: "言語に関係なく使える土台。まずはここから。" },
  { id: "language", title: "言語コース", desc: "言語ごとに、入門から少しずつ難しくなっていきます。" },
  { id: "topic", title: "テーマ別コース", desc: "AI との開発、Web の仕組み、セキュリティなど、言語以外の知識。" },
];
const categoryOf = (c) => c.category || "language";

// 開講中のコースを先、準備中を後ろに並べる
function sortedCourses(list) {
  return [...list].sort((a, b) =>
    (a.status === "planned") - (b.status === "planned") || (a.order ?? 999) - (b.order ?? 999));
}

function courseSections(headingTag = "h2") {
  return CATEGORIES.map((cat) => {
    const list = DATA.courses.filter((c) => categoryOf(c) === cat.id);
    if (!list.length) return "";
    return `<${headingTag}>${esc(cat.title)}</${headingTag}>
      <p class="muted small">${esc(cat.desc)}</p>
      ${courseCards(sortedCourses(list))}`;
  }).join("");
}

function courseCards(list = DATA.courses) {
  return `<div class="cards">${list.map((c) => {
    const s = courseStats(c);
    const planned = c.status === "planned";
    return `<a class="card course-card ${planned ? "planned" : ""}" href="#/course/${c.id}">
      <div class="course-icon">${esc(c.icon)}</div>
      <div class="card-body">
        <h3>${esc(c.title)} ${planned ? '<span class="tag">準備中</span>' : ""}</h3>
        <p>${esc(c.description)}</p>
        ${planned ? "" : `<div class="muted small">${s.done} / ${s.total} レッスン</div>${bar(s.pct)}`}
      </div>
    </a>`;
  }).join("")}</div>`;
}

function viewCourses() {
  app.innerHTML = `<h1>コース</h1>
    <p class="muted">おすすめの順番：「はじめての『コードを読む』」→ Python →「AI と一緒に開発する」→ JavaScript → TypeScript → …</p>
    ${courseSections()}`;
  afterRender();
}

function viewCourse(id) {
  const c = courseById(id);
  if (!c) return viewNotFound();
  const s = courseStats(c);

  if (c.status === "planned") {
    app.innerHTML = `
      <nav class="crumbs"><a href="#/courses">コース</a> / ${esc(c.title)}</nav>
      <h1>${esc(c.icon)} ${esc(c.title)} <span class="tag">準備中</span></h1>
      <p>${esc(c.description)}</p>
      <h2>予定している内容</h2>
      <ol class="outline">${(c.outline || []).map((o) => `<li>${esc(o)}</li>`).join("")}</ol>
      <div class="callout">このコースはまだありません。Claude に「<b>${esc(c.title)} のコースを作って</b>」と頼むと追加されます。</div>`;
    return afterRender();
  }

  const levels = {};
  c.lessons.forEach((l) => (levels[l.level] ||= []).push(l));
  app.innerHTML = `
    <nav class="crumbs"><a href="#/courses">コース</a> / ${esc(c.title)}</nav>
    <h1>${esc(c.icon)} ${esc(c.title)}</h1>
    <p>${esc(c.description)}</p>
    <div class="muted small">${s.done} / ${s.total} レッスン完了</div>${bar(s.pct)}
    ${Object.keys(levels).sort().map((lv) => `
      <h2><span class="lv">Lv${lv}</span> ${esc(c.levels?.[lv] ?? LEVEL_LABEL[lv] ?? "")}</h2>
      <div class="lesson-list">
        ${levels[lv].map((l) => {
          const done = isDone(lessonKey(c.id, l.id));
          return `<a class="lesson-row ${done ? "done" : ""}" href="#/lesson/${c.id}/${l.id}">
            <span class="check">${done ? "✓" : ""}</span>
            <span class="lesson-title">${esc(l.title)}<small>${esc(l.summary ?? "")}</small></span>
            <span class="muted small">${l.minutes ? `${l.minutes} 分` : ""}</span>
          </a>`;
        }).join("")}
      </div>`).join("")}`;
  afterRender();
}

function viewLesson(courseId, lessonId) {
  const c = courseById(courseId);
  const idx = c ? c.lessons.findIndex((l) => l.id === lessonId) : -1;
  if (idx < 0) return viewNotFound();
  const l = c.lessons[idx];
  const prev = c.lessons[idx - 1];
  const next = c.lessons[idx + 1];
  const key = lessonKey(c.id, l.id);
  const related = DATA.explanations.filter((e) =>
    (e.lessons || []).includes(`${c.id}/${l.id}`));

  app.innerHTML = `
    <nav class="crumbs"><a href="#/courses">コース</a> / <a href="#/course/${c.id}">${esc(c.title)}</a> / Lv${l.level}</nav>
    <article class="lesson">
      <header class="lesson-head">
        <div class="muted small">${esc(c.icon)} ${esc(c.title)} ・ Lv${l.level} ${esc(LEVEL_LABEL[l.level] ?? "")} ・ ${l.minutes ?? "?"} 分</div>
        <h1>${esc(l.title)}</h1>
        <div class="chips">${chips(l.concepts)}</div>
      </header>
      <div class="markdown">${md(l.body)}</div>
      ${related.length ? `<h2>このレッスンが出てくるコード解説</h2>${explCards(related)}` : ""}
      <div class="lesson-foot">
        <button id="done-btn" class="btn ${isDone(key) ? "" : "primary"}">${isDone(key) ? "✓ 完了済み（取り消す）" : "このレッスンを完了にする"}</button>
        <div class="pager">
          ${prev ? `<a class="btn" href="#/lesson/${c.id}/${prev.id}">← ${esc(prev.title)}</a>` : "<span></span>"}
          ${next ? `<a class="btn" href="#/lesson/${c.id}/${next.id}">${esc(next.title)} →</a>` : `<a class="btn" href="#/course/${c.id}">コース一覧へ</a>`}
        </div>
      </div>
    </article>`;

  const btn = document.getElementById("done-btn");
  const refreshBtn = () => {
    btn.textContent = isDone(key) ? "✓ 完了済み（取り消す）" : "このレッスンを完了にする";
    btn.classList.toggle("primary", !isDone(key));
  };
  btn.addEventListener("click", () => { setDone(key, !isDone(key)); refreshBtn(); });
  mountQuizzes(app, l.quizzes, () => { setDone(key, true); refreshBtn(); });
  afterRender();
}

function explCards(list) {
  if (!list.length) return `<p class="muted">まだありません。Claude にコードを貼って「解説して」と頼むと、ここに追加されます。</p>`;
  return `<div class="cards">${list.map((e) => `
    <a class="card expl-card ${isDone(explKey(e.id)) ? "done" : ""}" href="#/explanation/${e.id}">
      <div class="card-body">
        <div class="muted small"><span class="tag">${esc(e.language)}</span>${e.series ? ` <span class="tag">📚 ${esc(e.series)} ${e.part ?? ""}</span>` : ""} ${esc(e.date ?? "")} ${e.level ? `・ Lv${e.level}` : ""} ${isDone(explKey(e.id)) ? "・ ✓ 理解した" : ""}</div>
        <h3>${esc(e.title)}</h3>
        <p>${esc(e.summary ?? "")}</p>
      </div>
    </a>`).join("")}</div>`;
}

// シリーズ（1 つのプロジェクトを複数ページで解説したもの）
function seriesOf(e) {
  if (!e.series) return [];
  return DATA.explanations.filter((x) => x.series === e.series)
    .sort((a, b) => (a.part ?? 999) - (b.part ?? 999));
}

function seriesNav(e) {
  const list = seriesOf(e);
  if (list.length < 2) return "";
  return `<details class="series" ${e.part === 1 ? "open" : ""}>
    <summary>📚 シリーズ「${esc(e.series)}」（全 ${list.length} ページ）・ ${list.indexOf(e) + 1} ページ目</summary>
    <ol>${list.map((x) => `<li>${x.id === e.id ? `<b>${esc(x.title)}</b>` :
      `<a href="#/explanation/${x.id}">${esc(x.title)}</a>`}${isDone(explKey(x.id)) ? " ✓" : ""}</li>`).join("")}</ol>
  </details>`;
}

function seriesPager(e) {
  const list = seriesOf(e);
  const i = list.indexOf(e);
  if (i < 0 || list.length < 2) return "";
  const prev = list[i - 1], next = list[i + 1];
  return `<div class="pager">
    ${prev ? `<a class="btn" href="#/explanation/${prev.id}">← ${esc(prev.title)}</a>` : "<span></span>"}
    ${next ? `<a class="btn" href="#/explanation/${next.id}">${esc(next.title)} →</a>` : "<span></span>"}
  </div>`;
}

function viewExplanations() {
  const langs = [...new Set(DATA.explanations.map((e) => e.language))];
  app.innerHTML = `
    <h1>コード解説</h1>
    <p class="muted">AI が書いたコードを Claude が解説したページです。コードを貼って頼むたびに増えていきます。</p>
    <div class="filters">
      <input id="q" type="search" placeholder="タイトル・説明で検索">
      <select id="lang"><option value="">すべての言語</option>${langs.map((l) => `<option>${esc(l)}</option>`).join("")}</select>
    </div>
    <div id="list"></div>`;
  const render = () => {
    const q = document.getElementById("q").value.trim().toLowerCase();
    const lang = document.getElementById("lang").value;
    const items = DATA.explanations.filter((e) =>
      (!lang || e.language === lang) &&
      (!q || `${e.title} ${e.summary}`.toLowerCase().includes(q)));
    document.getElementById("list").innerHTML = explCards(items);
  };
  document.getElementById("q").addEventListener("input", render);
  document.getElementById("lang").addEventListener("change", render);
  render();
  afterRender();
}

function viewExplanation(id) {
  const e = DATA.explanations.find((x) => x.id === id);
  if (!e) return viewNotFound();
  const key = explKey(e.id);
  const lessons = (e.lessons || []).map((ref) => {
    const [cid, lid] = ref.split("/");
    const c = courseById(cid);
    const l = c?.lessons.find((x) => x.id === lid);
    return l ? { c, l } : null;
  }).filter(Boolean);

  app.innerHTML = `
    <nav class="crumbs"><a href="#/explanations">コード解説</a> / ${esc(e.title)}</nav>
    <article class="lesson">
      <header class="lesson-head">
        <div class="muted small"><span class="tag">${esc(e.language)}</span>${e.series ? ` <span class="tag">📚 ${esc(e.series)} ${e.part ?? ""}</span>` : ""} ${esc(e.date ?? "")} ${e.level ? `・ Lv${e.level}` : ""}</div>
        <h1>${esc(e.title)}</h1>
        <div class="chips">${chips(e.concepts)}</div>
      </header>
      ${seriesNav(e)}
      ${lessons.length ? `<div class="callout"><b>📖 先に読むと理解しやすいレッスン：</b>
        ${lessons.map(({ c, l }) => `<a href="#/lesson/${c.id}/${l.id}">${esc(c.icon)} ${esc(l.title)}${isDone(lessonKey(c.id, l.id)) ? " ✓" : ""}</a>`).join("　")}</div>` : ""}
      <div class="markdown">${md(e.body)}</div>
      <div class="lesson-foot">
        <button id="done-btn" class="btn ${isDone(key) ? "" : "primary"}">${isDone(key) ? "✓ 理解した（取り消す）" : "人に説明できる！"}</button>
        ${seriesPager(e)}
      </div>
    </article>`;
  const btn = document.getElementById("done-btn");
  btn.addEventListener("click", () => {
    setDone(key, !isDone(key));
    btn.textContent = isDone(key) ? "✓ 理解した（取り消す）" : "人に説明できる！";
    btn.classList.toggle("primary", !isDone(key));
  });
  mountQuizzes(app, e.quizzes);
  afterRender();
}

function viewConcepts(focus) {
  const lessons = allLessons();
  const rows = Object.entries(DATA.concepts).map(([id, c]) => {
    const ls = lessons.filter(({ lesson }) => lesson.concepts.includes(id));
    const es = DATA.explanations.filter((e) => e.concepts.includes(id));
    const done = ls.filter(({ course, lesson }) => isDone(lessonKey(course.id, lesson.id))).length +
      es.filter((e) => isDone(explKey(e.id))).length;
    const total = ls.length + es.length;
    return { id, c, ls, es, done, total };
  });

  app.innerHTML = `
    <h1>概念マップ</h1>
    <p class="muted">どの言語にも出てくる考え方の一覧です。色が濃いほど学習済み。クリックすると、その概念が出てくるレッスンとコード解説が見られます。</p>
    <div class="concept-grid">
      ${rows.map((r) => {
        const ratio = r.total ? r.done / r.total : 0;
        return `<a class="concept ${r.id === focus ? "focus" : ""}" href="#/concepts/${r.id}" style="--alpha:${(r.done ? 0.1 + 0.3 * ratio : 0).toFixed(2)}">
          <span class="count">${r.done}/${r.total}</span>
          <b>${esc(r.c.name)}</b><small>${esc(r.c.desc)}</small></a>`;
      }).join("")}
    </div>
    <div id="concept-detail"></div>`;

  const r = rows.find((x) => x.id === focus);
  if (r) {
    document.getElementById("concept-detail").innerHTML = `
      <h2>「${esc(r.c.name)}」が出てくるところ</h2>
      <div class="lesson-list">
        ${r.ls.map(({ course, lesson }) => `<a class="lesson-row ${isDone(lessonKey(course.id, lesson.id)) ? "done" : ""}" href="#/lesson/${course.id}/${lesson.id}">
          <span class="check">${isDone(lessonKey(course.id, lesson.id)) ? "✓" : ""}</span>
          <span class="lesson-title">${esc(course.icon)} ${esc(lesson.title)}<small>${esc(course.title)} ・ Lv${lesson.level}</small></span></a>`).join("")}
        ${r.es.map((e) => `<a class="lesson-row ${isDone(explKey(e.id)) ? "done" : ""}" href="#/explanation/${e.id}">
          <span class="check">${isDone(explKey(e.id)) ? "✓" : ""}</span>
          <span class="lesson-title">🧩 ${esc(e.title)}<small>コード解説 ・ ${esc(e.language)}</small></span></a>`).join("")}
        ${r.total ? "" : `<p class="muted">まだありません。</p>`}
      </div>`;
    afterRender();
    document.getElementById("concept-detail").scrollIntoView({ behavior: "smooth" });
    return;
  }
  afterRender();
}

function viewNotFound() {
  app.innerHTML = `<h1>ページが見つかりません</h1><p><a href="#/">ホームへ戻る</a></p>`;
}

// ---------- ルーター ----------
function route() {
  const parts = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean).map(decodeURIComponent);
  const [page, a, b] = parts;
  const nav = { course: "courses", lesson: "courses", explanation: "explanations" }[page] ?? (page || "home");
  document.querySelectorAll("[data-nav]").forEach((el) => el.classList.toggle("active", el.dataset.nav === nav));

  if (!page) return viewHome();
  if (page === "courses") return viewCourses();
  if (page === "course") return viewCourse(a);
  if (page === "lesson") return viewLesson(a, b);
  if (page === "explanations") return viewExplanations();
  if (page === "explanation") return viewExplanation(a);
  if (page === "concepts") return viewConcepts(a);
  return viewNotFound();
}

marked.setOptions({ gfm: true });
if (!hljs.getLanguage("tsx")) hljs.registerAliases(["tsx"], { languageName: "typescript" });
window.addEventListener("hashchange", route);
route();
