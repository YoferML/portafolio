(function () {
  const d = DATA;
  const app = document.getElementById("app");

  function el(tag, props, ...kids) {
    const n = document.createElement(tag);
    Object.entries(props || {}).forEach(([k, v]) => {
      if (k === "class") n.className = v;
      else n.setAttribute(k, v);
    });
    kids.flat().forEach((k) => {
      if (k == null || k === "") return;
      n.append(k.nodeType ? k : document.createTextNode(k));
    });
    return n;
  }

  // Iconos de interfaz (SVG estilo Lucide, sin dependencias)
  const ICONS = {
    mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    "map-pin": '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>',
    github: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>',
    file: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/>',
    "external-link": '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
    code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
    moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>'
  };

  // Iconos de tecnologías (Devicon). Las que no estén aquí se muestran solo con texto.
  const TECH_ICONS = {
    "Python": "devicon-python-plain",
    "JavaScript": "devicon-javascript-plain",
    "NumPy": "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/numpy/numpy-original.svg",
    "SciPy": "https://cdn.simpleicons.org/scipy",
    "Pandas": "devicon-pandas-original",
    "Scikit-Learn": "devicon-scikitlearn-plain",
    "PyTorch": "devicon-pytorch-original",
    "TensorFlow": "devicon-tensorflow-original",
    "Jupyter": "devicon-jupyter-plain",
    "FastAPI": "devicon-fastapi-plain",
    "Flask": "devicon-flask-original",
    "Docker": "devicon-docker-plain",
    "Git y GitHub": "devicon-github-original"
  };

  function icon(name) {
    const s = el("span", { class: "icon", "aria-hidden": "true" });
    s.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + (ICONS[name] || "") + "</svg>";
    return s;
  }

  function link(label, url, iconName) {
    const external = /^https?:/.test(url);
    const attrs = { href: url };
    if (external) { attrs.target = "_blank"; attrs.rel = "noopener noreferrer"; }
    return el("a", attrs, iconName ? icon(iconName) : null, label);
  }

  function section(title, ...content) {
    return el("section", { class: "block" }, el("h2", {}, title), ...content);
  }

  function chips(items) {
    return el("ul", { class: "chips" }, items.map((t) => {
      const ic = TECH_ICONS[t];
      let node = null;
      if (ic && ic.startsWith("http")) {
        node = el("img", { class: "tech-img", src: ic, alt: "", width: "16", height: "16" });
      } else if (ic) {
        node = el("i", { class: ic, "aria-hidden": "true" });
      }
      return el("li", {}, node, t);
    }));
  }

  function entry(item) {
    return el("div", { class: "entry" },
      el("div", { class: "entry-head" },
        el("h3", {}, item.title),
        item.date ? el("span", { class: "meta" }, item.date) : null),
      item.place ? el("p", { class: "meta" }, item.place) : null,
      item.description ? el("p", {}, item.description) : null,
      item.technologies ? chips(item.technologies) : null);
  }

  document.title = d.name + " | Portafolio";

  // Cabecera
  const avatar = d.avatar
    ? el("img", { class: "avatar", src: d.avatar, alt: "Foto de " + d.name })
    : el("div", { class: "avatar", "aria-hidden": "true" }, d.initials);
  app.append(el("header", { class: "hero" },
    avatar,
    el("div", {},
      el("h1", {}, d.name),
      el("p", { class: "role" }, d.role),
      el("p", { class: "meta loc" }, icon("map-pin"), d.location),
      el("ul", { class: "links" }, d.links.map((l) => el("li", {}, link(l.label, l.url, l.icon)))))));

  if (d.about.length) {
    app.append(section("Sobre mí", d.about.map((t) => el("p", {}, t))));
  }

  if (d.technologies.length) {
    app.append(section("Habilidades Técnicas", d.technologies.map((g) =>
      el("div", { class: "tech-group" }, el("h3", {}, g.group), chips(g.items)))));
  }

  if (d.experience.length) {
    app.append(section("Experiencia", d.experience.map(entry)));
  }

  if (d.projects.length) {
    app.append(section("Proyectos", d.projects.map((p) =>
      el("article", { class: "project" },
        el("div", { class: "entry-head" },
          el("h3", {}, p.title),
          p.date ? el("span", { class: "meta" }, p.date) : null),
        el("p", {}, p.description),
        p.details ? el("ul", { class: "details" }, p.details.map((x) =>
          el("li", {}, el("strong", {}, x.label + ": "), x.text))) : null,
        p.technologies ? chips(p.technologies) : null,
        el("p", { class: "project-links" },
          p.url ? link("Ver demo", p.url, "external-link") : null,
          p.github ? link("Ver código", p.github, "code") : null)))));
  }

  if (d.training.length) {
    app.append(section("Formación", d.training.map(entry)));
  }

  if (d.extra.length) {
  app.append(section("Extra", d.extra.map((x) => 
    el("div", { class: "entry" }, 
      el("h3", {}, x.title), 
      el("p", {}, x.text),
      x.url ? el("p", { class: "project-links" }, link("Ver CONTENIDO", x.url, "file")) : null
    )
  )));
}

  app.append(el("footer", { class: "footer" }, "© " + new Date().getFullYear() + " " + d.name));

 
  // Tema claro/oscuro: el botón muestra solo un icono (luna o sol)
  const root = document.documentElement;
  const btn = document.getElementById("theme-toggle");
  function currentTheme() {
    return root.dataset.theme ||
      (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  }
  function paintToggle() {
    const dark = currentTheme() === "dark";
    const label = dark ? "Cambiar a modo claro" : "Cambiar a modo oscuro";
    btn.replaceChildren(icon(dark ? "sun" : "moon"));
    btn.setAttribute("aria-label", label);
    btn.title = label;
  }
  try {
    const saved = localStorage.getItem("theme");
    if (saved) root.dataset.theme = saved;
  } catch (e) {}
  paintToggle();
  btn.addEventListener("click", () => {
    const next = currentTheme() === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
    paintToggle();
  });
})();

