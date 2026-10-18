(() => {
  const apps = Array.isArray(window.PORTAL_APPS) ? window.PORTAL_APPS : [];
  const grid = document.querySelector("#apps-grid");
  const search = document.querySelector("#search");
  const filters = document.querySelector("#filters");
  const empty = document.querySelector("#empty-state");
  const count = document.querySelector("#app-count");
  const allCount = document.querySelector("#all-count");
  const resultsCount = document.querySelector("#results-count");
  const reset = document.querySelector("#reset-search");
  let category = "Toutes";

  const icons = {
    trophy: '<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4Z"/><path d="M7 6H4v2a4 4 0 0 0 4 4M17 6h3v2a4 4 0 0 1-4 4"/><path d="m9 9 2 2 4-4"/>',
    calculator: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8v3H8zM8 14h1M12 14h1M16 14h.01M8 17h1M12 17h1M16 17h.01"/>',
    qr: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3h-3zM20 14v2M17 20h4M20 18v3"/>',
    seats: '<rect x="5" y="4" width="14" height="5" rx="1"/><rect x="5" y="11" width="14" height="5" rx="1"/><path d="M8 9v2M16 9v2M8 16v4M16 16v4"/>',
    default: '<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 9h8M8 13h5"/>'
  };
  const escapeHtml = (value) => String(value ?? "").replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));
  const safeUrl = (value) => {
    try {
      const url = new URL(value);
      return url.protocol === "https:" ? url.href : "";
    } catch { return ""; }
  };
  const pad = (n) => String(n).padStart(2, "0");

  function render() {
    const q = search.value.trim().toLocaleLowerCase("fr");
    const visible = apps.filter(app => {
      const matchesCategory = category === "Toutes" || app.category === category;
      const haystack = `${app.name} ${app.description} ${app.category}`.toLocaleLowerCase("fr");
      return matchesCategory && haystack.includes(q);
    });
    count.textContent = apps.length;
    allCount.textContent = apps.length;
    resultsCount.textContent = pad(visible.length);
    grid.innerHTML = visible.map(app => {
      const url = safeUrl(app.url);
      const icon = icons[app.icon] || icons.default;
      const accent = /^#[0-9a-f]{6}$/i.test(app.accent || "") ? app.accent : "#9586ff";
      return `<article class="app-card" style="--card-accent:${accent}">
        <div class="card-top">
          <div class="app-icon" aria-hidden="true"><svg viewBox="0 0 24 24">${icon}</svg></div>
          <span class="card-status">DISPONIBLE</span>
        </div>
        <h3>${escapeHtml(app.name)}</h3>
        <p>${escapeHtml(app.description)}</p>
        <div class="card-bottom">
          <span class="category">${escapeHtml(app.category)}</span>
          ${url ? `<a class="launch" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">Ouvrir <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10"/></svg></a>` : `<span class="category">Lien à configurer</span>`}
        </div>
      </article>`;
    }).join("");
    empty.hidden = visible.length > 0;
    grid.hidden = visible.length === 0;
  }

  filters.addEventListener("click", event => {
    const button = event.target.closest("button[data-category]");
    if (!button) return;
    category = button.dataset.category;
    filters.querySelectorAll(".filter").forEach(el => el.classList.toggle("active", el === button));
    render();
  });
  search.addEventListener("input", render);
  reset.addEventListener("click", () => {
    search.value = "";
    category = "Toutes";
    filters.querySelectorAll(".filter").forEach(el => el.classList.toggle("active", el.dataset.category === category));
    render();
    search.focus();
  });
  document.addEventListener("keydown", event => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      search.focus();
    }
    if (event.key === "Escape" && document.activeElement === search) {
      search.value = "";
      render();
      search.blur();
    }
  });
  render();
})();
