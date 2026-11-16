// 画面の動きを担当するファイル。サーバー（/api/...）とやりとりして表示を更新する。

const $ = (sel) => document.querySelector(sel);

const state = {
  meta: { languages: [], concepts: {} },
  code: "",          // 解説したコード
  explanation: "",   // 解説の Markdown
  chat: [],          // {role, content}
  noteId: null,      // 保存済みならノートの ID
  busy: false,
};

// ---------- Markdown 表示 ----------
marked.setOptions({ gfm: true, breaks: false });

function renderMarkdown(el, text) {
  el.innerHTML = DOMPurify.sanitize(marked.parse(text));
  el.querySelectorAll("pre code").forEach((b) => hljs.highlightElement(b));
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

// ---------- 通信 ----------
// サーバーが少しずつ送ってくる文字列を受け取り、届くたびに onChunk を呼ぶ
async function streamPost(url, body, onChunk) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(await errorText(res));
  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let full = "";
  for (;;) {
    const { value, done } = await reader.read();
    if (done) break;
    full += decoder.decode(value, { stream: true });
    onChunk(full);
  }
  return full;
}

async function postJSON(url, body) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(await errorText(res));
  return res.json();
}

async function errorText(res) {
  try {
    const j = await res.json();
    if (typeof j.detail === "string") return j.detail;
    return JSON.stringify(j.detail ?? j);
  } catch {
    return `${res.status} ${res.statusText}`;
  }
}

// ---------- タブ ----------
document.querySelectorAll(".tab").forEach((btn) =>
  btn.addEventListener("click", () => showView(btn.dataset.view))
);

function showView(name) {
  document.querySelectorAll(".tab").forEach((b) => b.classList.toggle("active", b.dataset.view === name));
  document.querySelectorAll(".view").forEach((v) => v.classList.toggle("active", v.id === `view-${name}`));
  if (name === "notes") loadNotes();
  if (name === "map") loadMap();
}

// ---------- 解説 ----------
function setFollowupsEnabled(on) {
  $("#chat-input").disabled = !on;
  $("#chat-form button").disabled = !on;
  $("#teach-input").disabled = !on;
  $("#btn-teach").disabled = !on;
  $("#btn-save").disabled = !on || state.noteId !== null;
}

function setNoteBadge() {
  const b = $("#note-badge");
  if (state.noteId === null) {
    b.classList.add("hidden");
  } else {
    b.textContent = `ノート #${state.noteId}`;
    b.classList.remove("hidden");
  }
  $("#btn-save").textContent = state.noteId === null ? "ノートに保存" : "保存済み";
}

function resetFollowups() {
  state.chat = [];
  $("#chat-log").innerHTML = "";
  $("#teach-input").value = "";
  $("#teach-result").innerHTML = "";
}

async function explain() {
  const code = $("#code").value;
  if (!code.trim() || state.busy) return;
  state.busy = true;
  state.code = code;
  state.explanation = "";
  state.noteId = null;
  setNoteBadge();
  resetFollowups();
  setFollowupsEnabled(false);
  $("#btn-explain").disabled = true;
  $("#btn-explain").textContent = "解説中…";

  const out = $("#explanation");
  out.classList.remove("empty");
  out.classList.add("streaming");
  out.innerHTML = "<p class='placeholder'>コードを読んでいます…</p>";

  try {
    state.explanation = await streamPost(
      "/api/explain",
      {
        code,
        language: $("#language").value,
        level: $("#level").value,
        focus: $("#focus").value,
      },
      (text) => renderMarkdown(out, text)
    );
    setFollowupsEnabled(true);
  } catch (e) {
    out.innerHTML = `<p>❌ ${escapeHtml(e.message)}</p>`;
  } finally {
    out.classList.remove("streaming");
    state.busy = false;
    $("#btn-explain").disabled = false;
    $("#btn-explain").textContent = "解説してもらう";
  }
}

$("#btn-explain").addEventListener("click", explain);
$("#code").addEventListener("keydown", (e) => {
  if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) explain();
  // Tab キーでインデントを入れられるように
  if (e.key === "Tab") {
    e.preventDefault();
    const t = e.target;
    const s = t.selectionStart;
    t.value = t.value.slice(0, s) + "    " + t.value.slice(t.selectionEnd);
    t.selectionStart = t.selectionEnd = s + 4;
  }
});
$("#btn-clear").addEventListener("click", () => {
  $("#code").value = "";
  $("#focus").value = "";
  $("#code").focus();
});

// ---------- 保存 ----------
$("#btn-save").addEventListener("click", async () => {
  const btn = $("#btn-save");
  btn.disabled = true;
  btn.textContent = "整理中…";
  try {
    const note = await postJSON("/api/notes", { code: state.code, explanation: state.explanation });
    state.noteId = note.id;
    setNoteBadge();
  } catch (e) {
    alert("保存できませんでした: " + e.message);
    btn.disabled = false;
    btn.textContent = "ノートに保存";
  }
});

// ---------- 質問チャット ----------
function addMsg(role, text) {
  const div = document.createElement("div");
  div.className = `msg ${role}`;
  if (role === "user") div.textContent = text;
  else renderMarkdown(div, text);
  $("#chat-log").appendChild(div);
  $("#chat-log").scrollTop = $("#chat-log").scrollHeight;
  return div;
}

$("#chat-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const input = $("#chat-input");
  const q = input.value.trim();
  if (!q || state.busy) return;
  input.value = "";
  state.busy = true;
  state.chat.push({ role: "user", content: q });
  addMsg("user", q);
  const bubble = addMsg("assistant", "…");
  bubble.classList.add("streaming");
  try {
    const answer = await streamPost(
      "/api/chat",
      { code: state.code, explanation: state.explanation, history: state.chat },
      (text) => {
        renderMarkdown(bubble, text);
        $("#chat-log").scrollTop = $("#chat-log").scrollHeight;
      }
    );
    state.chat.push({ role: "assistant", content: answer });
  } catch (err) {
    state.chat.pop(); // 失敗した質問は履歴から外す
    bubble.textContent = "❌ " + err.message;
  } finally {
    bubble.classList.remove("streaming");
    state.busy = false;
  }
});

// ---------- ティーチバック ----------
function list(items) {
  if (!items.length) return "<p class='empty-msg'>なし</p>";
  return "<ul>" + items.map((i) => `<li>${escapeHtml(i)}</li>`).join("") + "</ul>";
}

$("#btn-teach").addEventListener("click", async () => {
  const text = $("#teach-input").value.trim();
  if (!text) return;
  const btn = $("#btn-teach");
  btn.disabled = true;
  btn.textContent = "採点中…";
  try {
    const r = await postJSON("/api/teachback", {
      code: state.code,
      explanation: state.explanation,
      user_text: text,
      note_id: state.noteId,
    });
    const cls = r.score >= 80 ? "good" : r.score >= 50 ? "mid" : "low";
    $("#teach-result").innerHTML = `
      <div class="teach-block">
        <div class="score ${cls}">${r.score} 点</div>
        ${state.noteId === null ? "<p class='hint'>※ ノートに保存すると点数も記録されます</p>" : ""}
        <h4>👍 できていること</h4>${list(r.good_points)}
        <h4>🧩 足りないこと</h4>${list(r.missing_points)}
        <h4>⚠️ 誤解していそうな所</h4>${list(r.misconceptions)}
        <h4>📝 お手本の説明</h4><p>${escapeHtml(r.model_answer)}</p>
        <h4>➡️ 次のステップ</h4><p>${escapeHtml(r.next_step)}</p>
      </div>`;
  } catch (e) {
    $("#teach-result").innerHTML = `<p>❌ ${escapeHtml(e.message)}</p>`;
  } finally {
    btn.disabled = false;
    btn.textContent = "採点してもらう";
  }
});

// ---------- 学習ノート ----------
let notesCache = [];

async function loadNotes() {
  const res = await fetch("/api/notes");
  notesCache = await res.json();
  const langs = [...new Set(notesCache.map((n) => n.language))];
  const sel = $("#notes-lang");
  const current = sel.value;
  sel.innerHTML = '<option value="">すべての言語</option>' +
    langs.map((l) => `<option ${l === current ? "selected" : ""}>${escapeHtml(l)}</option>`).join("");
  renderNotes();
}

function renderNotes() {
  const q = $("#notes-search").value.trim().toLowerCase();
  const lang = $("#notes-lang").value;
  const items = notesCache.filter((n) => {
    if (lang && n.language !== lang) return false;
    if (!q) return true;
    return [n.title, n.summary, ...n.keywords].join(" ").toLowerCase().includes(q);
  });
  const box = $("#notes-list");
  if (!items.length) {
    box.innerHTML = "<p class='empty-msg'>まだノートがありません。解説したコードを「ノートに保存」するとここに並びます。</p>";
    return;
  }
  box.innerHTML = items.map((n) => `
    <div class="note-card" data-id="${n.id}">
      <button class="del" data-del="${n.id}" title="削除">✕</button>
      <div class="note-meta">
        <span class="chip">${escapeHtml(n.language)}</span>
        <span>${escapeHtml(n.created_at.slice(0, 16))}</span>
        ${n.teachback_score !== null ? `<span>🗣️ ${n.teachback_score} 点</span>` : ""}
      </div>
      <h3>${escapeHtml(n.title)}</h3>
      <p>${escapeHtml(n.summary)}</p>
      <div class="note-meta">${n.concepts.map((c) => `<span class="chip">${escapeHtml(state.meta.concepts[c]?.name ?? c)}</span>`).join("")}</div>
    </div>`).join("");
}

$("#notes-search").addEventListener("input", renderNotes);
$("#notes-lang").addEventListener("change", renderNotes);
$("#notes-list").addEventListener("click", async (e) => {
  const del = e.target.closest("[data-del]");
  if (del) {
    e.stopPropagation();
    if (!confirm("このノートを削除しますか？")) return;
    await fetch(`/api/notes/${del.dataset.del}`, { method: "DELETE" });
    loadNotes();
    return;
  }
  const card = e.target.closest(".note-card");
  if (card) openNote(card.dataset.id);
});

// ノートを開くと「解説する」画面に読み込み、質問やティーチバックを続けられる
async function openNote(id) {
  const res = await fetch(`/api/notes/${id}`);
  if (!res.ok) return;
  const n = await res.json();
  state.code = n.code;
  state.explanation = n.explanation;
  state.noteId = n.id;
  $("#code").value = n.code;
  resetFollowups();
  const out = $("#explanation");
  out.classList.remove("empty");
  renderMarkdown(out, n.explanation);
  setNoteBadge();
  setFollowupsEnabled(true);
  showView("explain");
  window.scrollTo(0, 0);
}

// ---------- 学習マップ ----------
async function loadMap() {
  const res = await fetch("/api/progress");
  const p = await res.json();

  const langs = Object.entries(p.by_language).sort((a, b) => b[1].notes - a[1].notes);
  $("#lang-cards").innerHTML = langs.length
    ? langs.map(([lang, d]) => {
        const best = d.best_scores.length ? Math.round(d.best_scores.reduce((a, b) => a + b, 0) / d.best_scores.length) : null;
        const top = Object.entries(d.concepts).sort((a, b) => b[1] - a[1]).slice(0, 4)
          .map(([c]) => state.meta.concepts[c]?.name ?? c).join("・");
        return `<div class="lang-card">
          <b>${escapeHtml(lang)}</b>
          <div class="num">${d.notes} <small>本</small></div>
          <div class="note-meta">${best !== null ? `説明力 平均 ${best} 点` : "ティーチバック未挑戦"}</div>
          <div class="note-meta">${escapeHtml(top)}</div>
        </div>`;
      }).join("")
    : "<p class='empty-msg'>まだ記録がありません。</p>";

  const max = Math.max(1, ...Object.values(p.concept_total));
  $("#concept-grid").innerHTML = Object.entries(state.meta.concepts).map(([id, c]) => {
    const n = p.concept_total[id] ?? 0;
    const alpha = n === 0 ? 0 : 0.10 + 0.25 * (n / max);
    return `<div class="concept" style="--alpha:${alpha.toFixed(2)}">
      <span class="count">${n}</span>
      <b>${escapeHtml(c.name)}</b>
      <small>${escapeHtml(c.desc)}</small>
    </div>`;
  }).join("");
}

// ---------- 起動時 ----------
(async function init() {
  const res = await fetch("/api/meta");
  state.meta = await res.json();
  $("#language").innerHTML += state.meta.languages
    .map((l) => `<option value="${escapeHtml(l)}">${escapeHtml(l)}</option>`).join("");
})();
