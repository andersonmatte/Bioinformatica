async function loadPosts() {
  const res = await fetch("./posts.json", { cache: "no-store" });
  if (!res.ok) throw new Error("Falha ao carregar posts.json");
  const data = await res.json();
  return Array.isArray(data.posts) ? data.posts : [];
}

function byDateDesc(a, b) {
  const da = new Date(a.date || 0).getTime();
  const db = new Date(b.date || 0).getTime();
  return db - da;
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderTag(tag) {
  return `<span class="blog-tag">${escapeHtml(tag)}</span>`;
}

function cardTemplate(post) {
  const tags = Array.isArray(post.tags) ? post.tags.slice(0, 6) : [];
  const subtitle = post.subtitle ? `<p class="blog-subtitle">${escapeHtml(post.subtitle)}</p>` : "";
  const metaParts = [
    post.author ? escapeHtml(post.author) : null,
    post.date ? escapeHtml(post.date) : null
  ].filter(Boolean);
  const meta = metaParts.length ? `<div class="blog-meta">${metaParts.join(" • ")}</div>` : "";
  return `
    <article class="blog-card">
      <a class="blog-card-link" href="./post.html?id=${encodeURIComponent(post.id)}">
        <div class="blog-card-body">
          ${meta}
          <h2 class="blog-title">${escapeHtml(post.title || "Sem título")}</h2>
          ${subtitle}
          <div class="blog-tags">${tags.map(renderTag).join("")}</div>
          <div class="blog-readmore">Ler artigo →</div>
        </div>
      </a>
    </article>
  `;
}

async function initBlogIndex() {
  const listEl = document.getElementById("blog-list");
  const statusEl = document.getElementById("blog-status");
  const inputEl = document.getElementById("blog-search");
  if (!listEl || !statusEl) return;

  try {
    const posts = (await loadPosts()).sort(byDateDesc);

    const render = (filter) => {
      const q = (filter || "").trim().toLowerCase();
      const filtered = q
        ? posts.filter(p =>
            String(p.title || "").toLowerCase().includes(q) ||
            String(p.subtitle || "").toLowerCase().includes(q) ||
            (Array.isArray(p.tags) ? p.tags.join(" ").toLowerCase().includes(q) : false)
          )
        : posts;

      statusEl.textContent = filtered.length
        ? `${filtered.length} post(s)`
        : "Nenhum post encontrado";

      listEl.innerHTML = filtered.map(cardTemplate).join("");
    };

    render("");

    if (inputEl) {
      inputEl.addEventListener("input", () => render(inputEl.value));
    }
  } catch (e) {
    statusEl.textContent = "Erro ao carregar o blog.";
  }
}

async function initBlogPost() {
  const el = document.getElementById("blog-post");
  const statusEl = document.getElementById("blog-post-status");
  if (!el || !statusEl) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  if (!id) {
    statusEl.textContent = "Post não informado.";
    return;
  }

  try {
    const posts = await loadPosts();
    const post = posts.find(p => p.id === id);
    if (!post) {
      statusEl.textContent = "Post não encontrado.";
      return;
    }

    document.title = `${post.title || "Post"} — Blog`;

    const tags = Array.isArray(post.tags) ? post.tags : [];
    const metaParts = [
      post.author ? escapeHtml(post.author) : null,
      post.date ? escapeHtml(post.date) : null
    ].filter(Boolean);
    const meta = metaParts.length ? `<div class="blog-meta">${metaParts.join(" • ")}</div>` : "";

    el.innerHTML = `
      <div class="blog-post-shell">
        <a class="blog-back" href="./index.html">← Voltar ao Blog</a>
        ${meta}
        <h1 class="blog-post-title">${escapeHtml(post.title || "Sem título")}</h1>
        ${post.subtitle ? `<p class="blog-post-subtitle">${escapeHtml(post.subtitle)}</p>` : ""}
        <div class="blog-tags">${tags.map(renderTag).join("")}</div>
        <div class="blog-post-content">${post.contentHtml || ""}</div>
      </div>
    `;
    statusEl.textContent = "";
  } catch (e) {
    statusEl.textContent = "Erro ao carregar o post.";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  initBlogIndex();
  initBlogPost();
});

