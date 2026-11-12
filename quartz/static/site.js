// Site-wide behaviour that Quartz plugins don't provide (loaded once from
// Head.tsx with data-persist, so it survives SPA navigation).
//   1. Zen mode (reader mode) on by default, remembering the visitor's choice
//   2. Smooth light/dark switch (View Transitions cross-fade)
//   3. Minimal dot cursor (mouse / trackpad only)
;(() => {
  // -------------------------------------------------------------------------
  // 1. Zen mode by default
  // The reader-mode plugin keeps its on/off state in a private variable that
  // starts "off" and re-applies it on every `nav`. So on the first nav we click
  // its button once (if the visitor hasn't opted out), and we remember every
  // later toggle in localStorage.
  // -------------------------------------------------------------------------
  const ZEN_KEY = "zen-mode"
  const store = {
    get: () => {
      try {
        return localStorage.getItem(ZEN_KEY)
      } catch {
        return null
      }
    },
    set: (v) => {
      try {
        localStorage.setItem(ZEN_KEY, v)
      } catch {}
    },
  }
  let zenApplied = false
  let programmatic = false

  document.addEventListener("nav", () => {
    if (zenApplied) return
    // after every `nav` listener ran (the plugin binds its button in one)
    queueMicrotask(() => {
      if (zenApplied) return
      zenApplied = true
      const want = store.get() !== "off"
      const isOn = document.documentElement.getAttribute("reader-mode") === "on"
      const btn = document.querySelector(".readermode")
      if (want !== isOn && btn) {
        programmatic = true
        btn.click()
        programmatic = false
      }
    })
  })
  document.addEventListener("readermodechange", (e) => {
    if (!programmatic) store.set(e.detail.mode)
  })

  // -------------------------------------------------------------------------
  // 2. Smooth light/dark switch: run the darkmode plugin's own click handler
  // inside document.startViewTransition, so the browser cross-fades a snapshot
  // of the old theme into the new one (duration in custom.scss). Browsers
  // without the API just switch instantly.
  // -------------------------------------------------------------------------
  // Each switch fires `themechange`, and the graph plugin rebuilds its WebGL
  // canvas on it, so clicks during a running switch are ignored (spamming the
  // toggle used to freeze the page).
  let inTransition = false
  let busy = false
  document.addEventListener(
    "click",
    (e) => {
      const btn = e.target instanceof Element ? e.target.closest(".darkmode") : null
      if (!btn || inTransition) return
      if (busy) {
        e.stopImmediatePropagation()
        e.preventDefault()
        return
      }
      if (!document.startViewTransition) return
      if (matchMedia("(prefers-reduced-motion: reduce)").matches) return
      e.stopImmediatePropagation()
      e.preventDefault()
      busy = true
      const vt = document.startViewTransition(() => {
        inTransition = true
        try {
          btn.click()
        } finally {
          inTransition = false
        }
      })
      vt.finished.finally(() => (busy = false))
    },
    true, // capture: before the plugin's listener on the button
  )

  // -------------------------------------------------------------------------
  // 3. Dot cursor (inspired by jzhao.xyz): a small dot in the accent colour
  // that grows over links. It replaces the native cursor everywhere.
  // -------------------------------------------------------------------------
  if (!matchMedia("(hover: hover) and (pointer: fine)").matches) return
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return

  const dot = document.createElement("div")
  dot.className = "dot-cursor"
  dot.setAttribute("aria-hidden", "true")
  // outside <body>: SPA navigation morphs <body> and would remove it
  document.documentElement.appendChild(dot)
  document.documentElement.classList.add("has-dot-cursor")

  const INTERACTIVE =
    "a, button, summary, label, select, [role=button], .callout-title, .folder-button, .clickable-container, input[type=checkbox], article img[src$='.avif'], .zoom-overlay"

  let x = -100,
    y = -100,
    raf = 0
  const render = () => {
    raf = 0
    dot.style.transform = `translate3d(${x}px, ${y}px, 0)`
  }
  addEventListener(
    "pointermove",
    (e) => {
      x = e.clientX
      y = e.clientY
      const t = e.target instanceof Element ? e.target : null
      dot.classList.toggle("is-link", !!t?.closest(INTERACTIVE))
      dot.classList.add("is-visible")
      if (!raf) raf = requestAnimationFrame(render)
    },
    { passive: true },
  )
  document.addEventListener("pointerleave", () => dot.classList.remove("is-visible"))
  addEventListener("blur", () => dot.classList.remove("is-visible"))
  addEventListener("pointerdown", () => dot.classList.add("is-down"))
  addEventListener("pointerup", () => dot.classList.remove("is-down"))
})()

// ---------------------------------------------------------------------------
// 4. Index hero: "constelación de tus notas" (chosen in the hero lab).
// The published notes and their real links, read from Quartz's own
// contentIndex.json (already cached: search and the graph load it), laid out
// once with Fruchterman–Reingold and drawn behind the index text (fixed to
// the window). Notes near the mouse light up and the nearest one shows its
// title, only over empty space (not over the text). No mouse, no glow.
// Only the largest connected component is drawn (loose notes scatter).
// ---------------------------------------------------------------------------
;(() => {
  const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches
  const TAU = Math.PI * 2
  let graphPromise = null
  let hero = null

  function loadGraph() {
    graphPromise ??= fetch("/static/contentIndex.json")
      .then((r) => r.json())
      .then((idx) => {
        const slugs = Object.keys(idx).filter((s) => !s.startsWith("tags/") && s !== "404")
        const id = new Map(slugs.map((s, i) => [s, i]))
        const adj = slugs.map(() => new Set())
        slugs.forEach((s, i) =>
          (idx[s].links || []).forEach((l) => {
            const j = id.get(l.split("#")[0])
            if (j !== undefined && j !== i) adj[i].add(j), adj[j].add(i)
          }),
        )
        // largest connected component
        const comp = new Array(slugs.length).fill(-1)
        let best = [], c = 0
        for (let i = 0; i < slugs.length; i++) {
          if (comp[i] >= 0) continue
          const stack = [i], members = []
          comp[i] = c
          while (stack.length) {
            const v = stack.pop()
            members.push(v)
            for (const w of adj[v]) if (comp[w] < 0) (comp[w] = c), stack.push(w)
          }
          if (members.length > best.length) best = members
          c++
        }
        const keep = new Map(best.map((v, k) => [v, k]))
        const edges = []
        best.forEach((v) => adj[v].forEach((w) => v < w && keep.has(w) && edges.push([keep.get(v), keep.get(w)])))
        const titles = best.map((v) => idx[slugs[v]].title || slugs[v])
        return { titles, edges, pos: layoutFR(best.length, edges) }
      })
    return graphPromise
  }

  // Fruchterman–Reingold with a cooling cap on each step (stable, deterministic:
  // starts from a phyllotaxis spiral, no randomness). Returns positions in [0,1]².
  function layoutFR(n, edges) {
    const x = new Float64Array(n), y = new Float64Array(n), dx = new Float64Array(n), dy = new Float64Array(n)
    for (let i = 0; i < n; i++) {
      const r = 0.45 * Math.sqrt((i + 0.5) / n), a = i * 2.399963
      x[i] = 0.5 + r * Math.cos(a)
      y[i] = 0.5 + r * Math.sin(a)
    }
    const k = 0.9 * Math.sqrt(1 / n), k2 = k * k, ITER = 320
    for (let it = 0; it < ITER; it++) {
      dx.fill(0), dy.fill(0)
      for (let i = 0; i < n; i++)
        for (let j = i + 1; j < n; j++) {
          const ex = x[i] - x[j], ey = y[i] - y[j], d = Math.max(1e-4, Math.hypot(ex, ey)), f = k2 / d / d
          dx[i] += ex * f, dy[i] += ey * f, dx[j] -= ex * f, dy[j] -= ey * f
        }
      for (const [a, b] of edges) {
        const ex = x[b] - x[a], ey = y[b] - y[a], d = Math.max(1e-4, Math.hypot(ex, ey)), f = d / k
        dx[a] += ex * f, dy[a] += ey * f, dx[b] -= ex * f, dy[b] -= ey * f
      }
      const temp = 0.06 * (1 - it / ITER) + 0.0005
      for (let i = 0; i < n; i++) {
        dx[i] += (0.5 - x[i]) * 0.6 * k, dy[i] += (0.5 - y[i]) * 0.6 * k // weak gravity
        const l = Math.hypot(dx[i], dy[i]) || 1, s = Math.min(l, temp) / l
        x[i] += dx[i] * s, y[i] += dy[i] * s
      }
    }
    let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity
    for (let i = 0; i < n; i++) (x0 = Math.min(x0, x[i])), (x1 = Math.max(x1, x[i])), (y0 = Math.min(y0, y[i])), (y1 = Math.max(y1, y[i]))
    return Array.from({ length: n }, (_, i) => [(x[i] - x0) / (x1 - x0 || 1), (y[i] - y0) / (y1 - y0 || 1)])
  }

  function mount() {
    const canvas = document.createElement("canvas")
    canvas.className = "constellation-hero"
    canvas.setAttribute("aria-hidden", "true")
    // outside <body>: SPA navigation morphs <body> and would remove it
    document.documentElement.appendChild(canvas)
    const ctx = canvas.getContext("2d")
    // The glow only follows the real mouse over empty space. Over the text,
    // menus or a link, or with no mouse at all (phones), there is none. amp
    // fades it in and out; while it is ~0 the glow point jumps to the cursor
    // instead of sweeping across the screen.
    const st = { w: 1, h: 1, p: { x: 0.45, y: 0.4 }, target: { x: 0.45, y: 0.4 }, on: false, amp: 0, raf: 0, alive: true, g: null, dirty: true }
    let col = {}
    const readColors = () => {
      const cs = getComputedStyle(document.documentElement)
      const v = (n) => cs.getPropertyValue(n).trim()
      col = { main: v("--secondary"), second: v("--tertiary"), text: v("--darkgray"), faint: v("--gray"), font: getComputedStyle(document.body).fontFamily }
      // light backgrounds wash out thin translucent strokes: stronger there
      col.k = document.documentElement.getAttribute("saved-theme") === "light" ? 1.8 : 1.25
      st.dirty = true
      kick()
    }
    // restart the loop when it stopped (reduced motion draws only on changes)
    const kick = () => {
      if (st.started && !st.raf) st.raf = requestAnimationFrame(draw)
    }
    const alpha = (c, a) => `color-mix(in srgb, ${c} ${Math.round(a * 100)}%, transparent)`
    const resize = () => {
      const r = canvas.getBoundingClientRect(), dpr = Math.min(2, devicePixelRatio || 1)
      st.w = Math.max(1, r.width), st.h = Math.max(1, r.height)
      canvas.width = Math.round(st.w * dpr), canvas.height = Math.round(st.h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      st.dirty = true
    }
    // over the text, menus or any link the glow goes away completely, so
    // reading and clicking links doesn't light up nodes and labels underneath
    // (`.sidebar > *`, not `.sidebar`: on the index the side columns are empty
    // but still there, and the nodes behind them must react)
    const QUIET = "article, .page-header, .sidebar > *, a, button, input, .search-container"
    const onMove = (e) => {
      if (e.pointerType && e.pointerType !== "mouse") return
      const r = canvas.getBoundingClientRect()
      const quiet = e.target instanceof Element && !!e.target.closest(QUIET)
      st.target = { x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height }
      st.on = !quiet
      st.dirty = true
      kick()
    }
    const onLeave = () => (st.on = false)
    addEventListener("pointermove", onMove, { passive: true })
    document.addEventListener("pointerleave", onLeave)
    addEventListener("resize", resize)
    document.addEventListener("themechange", readColors)
    readColors()
    resize()

    const t0 = performance.now()
    const draw = (now) => {
      st.raf = 0
      if (!st.alive) return
      const t = REDUCED ? 3 : (now - t0) / 1000
      const inView = canvas.getBoundingClientRect().bottom > 0 && !document.hidden
      st.amp += ((st.on ? 1 : 0) - st.amp) * (REDUCED ? 1 : 0.08)
      if (st.amp < 0.03) st.p = { ...st.target } // hidden: jump, don't sweep
      st.p.x += (st.target.x - st.p.x) * 0.06
      st.p.y += (st.target.y - st.p.y) * 0.06
      if (st.g && inView && (!REDUCED || st.dirty)) paint(t)
      st.dirty = false
      if (!REDUCED) st.raf = requestAnimationFrame(draw)
    }
    const paint = (t) => {
      const { w, h, p, g } = st
      ctx.clearRect(0, 0, w, h)
      const padX = Math.max(24, w * 0.04), padY = 28
      const pos = g.pos.map(([x, y], i) => [
        padX + (x + 0.01 * Math.sin(t * 0.25 + i)) * (w - 2 * padX),
        padY + (y + 0.01 * Math.cos(t * 0.21 + i * 1.7)) * (h - 2 * padY),
      ])
      const px = p.x * w, py = p.y * h, R = Math.min(w, h) * 0.22
      const hot = pos.map(([x, y]) => st.amp * Math.max(0, 1 - Math.hypot(x - px, y - py) / R))
      ctx.lineWidth = col.k > 1.5 ? 0.8 : 0.7
      for (const [a, b] of g.edges) {
        const k = Math.max(hot[a], hot[b])
        ctx.strokeStyle = k > 0.05 ? alpha(col.second, Math.min(1, (0.15 + 0.6 * k) * col.k)) : alpha(col.faint, Math.min(1, 0.22 * col.k))
        ctx.beginPath(), ctx.moveTo(pos[a][0], pos[a][1]), ctx.lineTo(pos[b][0], pos[b][1]), ctx.stroke()
      }
      let best = -1, bd = Infinity
      pos.forEach(([x, y], i) => {
        const k = hot[i], r = 1.2 + Math.sqrt(g.deg[i]) * 0.8
        ctx.fillStyle = k > 0.05 ? alpha(col.main, 0.45 + 0.55 * k) : alpha(col.text, Math.min(1, 0.35 * col.k))
        ctx.beginPath(), ctx.arc(x, y, r + k * 1.5, 0, TAU), ctx.fill()
        const d = Math.hypot(x - px, y - py)
        if (d < bd) (bd = d), (best = i)
      })
      // title of the nearest note under the cursor
      if (st.amp > 0.05 && best >= 0 && bd < R * 0.6) {
        const [x, y] = pos[best], title = g.titles[best]
        ctx.font = `15px ${col.font}`
        ctx.fillStyle = col.text
        ctx.globalAlpha = st.amp
        const tw = ctx.measureText(title).width
        ctx.fillText(title, Math.min(Math.max(8, x + 8), w - tw - 8), Math.max(16, y - 8))
        ctx.globalAlpha = 1
      }
    }
    loadGraph().then((g) => {
      if (!st.alive) return
      const deg = new Array(g.titles.length).fill(0)
      g.edges.forEach(([a, b]) => (deg[a]++, deg[b]++))
      st.g = { ...g, deg }
      st.dirty = true
      canvas.classList.add("is-ready")
      kick()
    })
    st.started = true
    st.raf = requestAnimationFrame(draw)
    return {
      destroy() {
        st.alive = false
        cancelAnimationFrame(st.raf)
        removeEventListener("pointermove", onMove)
        document.removeEventListener("pointerleave", onLeave)
        removeEventListener("resize", resize)
        document.removeEventListener("themechange", readColors)
        canvas.remove()
      },
    }
  }

  document.addEventListener("nav", () => {
    const onIndex = document.body?.dataset.slug === "index"
    if (onIndex && !hero) hero = mount()
    else if (!onIndex && hero) hero.destroy(), (hero = null)
  })
})()

// ---------------------------------------------------------------------------
// 5. Subjects and their colours, shared by the graph view and the MOC index.
// The graph plugin is a local fork (plugins/graph, see PATCH.md) that asks
// window.__graphNodeColor for each node's colour. A note's subject is its
// folder (maths/<folder>/); notes outside the subject folders use their first
// tag that maps to a subject (tags alone were unreliable: many notes have
// none, some have typos like "calulus", linear algebra is tagged "algebra").
// MOCs (tag `moc`, or a folder note with content) take their subject's colour,
// a shade lighter in dark mode and darker in light mode. The current note is
// drawn in --dark so it stands out from every subject colour.
// ---------------------------------------------------------------------------
;(() => {
  // [key, label, tags, folder, dark colour, light colour]
  const SUBJECTS = [
    ["calculo", "Cálculo", ["calculus", "calulus", "analysis", "monotonia"], "calculus", "#6cc7bd", "#9b2c42"],
    ["algebra", "Álgebra", ["algebra", "combinatronics"], "algebra", "#efb54a", "#4c6479"],
    ["lineal", "Álgebra Lineal", ["linear-algebra"], "algebra-lineal", "#c4d36b", "#6b7a2f"],
    ["proba", "Probabilidad", ["probability"], "probability", "#a99cf0", "#6a4c9c"],
    ["geo", "Geometría",
      ["geometry", "recta", "plano", "norma", "vector-unitario", "cosenos-directores", "numeros-directores", "ecuacion-simetrica", "ecuacion-parametrica-vectorial"],
      "geometry", "#7fb4e8", "#2b6cb0"],
    ["conj", "Teoría de Conjuntos", ["sets"], "teoria-de-conjuntos", "#e88fb5", "#b4537a"],
    ["graf", "Teoría de Gráficas", ["graphs"], "teoria-de-graficas", "#9cc79a", "#2f6b4a"],
  ]
  const byTag = new Map(), byFolder = new Map()
  for (const s of SUBJECTS) {
    s[2].forEach((t) => byTag.set(t, s))
    byFolder.set(s[3], s)
  }
  const isDark = () => document.documentElement.getAttribute("saved-theme") === "dark"

  // folder first: it is the real subject in this vault (e.g. most linear
  // algebra notes are tagged "algebra"); tags only for notes outside the
  // subject folders (maths/Georg Cantor, …)
  function subjectOf(node) {
    const parts = (node.id || "").split("/")
    const f = byFolder.get(parts[0] === "maths" ? parts[1] : parts[0])
    if (f) return f
    for (const t of node.tags || []) if (byTag.has(t)) return byTag.get(t)
    return null
  }
  // folder notes count as MOCs only when they have content (links): the
  // automatic folder pages (e.g. maths/calculus/index) have none
  const isMoc = (node) =>
    (node.tags || []).includes("moc") || ((node.id || "").endsWith("/index") && (node.links?.length ?? 1) > 0)

  // mix a hex colour with white (amount > 0) or black (amount < 0)
  function shade(hex, amount) {
    const n = parseInt(hex.slice(1), 16), t = amount > 0 ? 255 : 0, a = Math.abs(amount)
    const c = [n >> 16, (n >> 8) & 255, n & 255].map((v) => Math.round(v + (t - v) * a))
    return "#" + c.map((v) => v.toString(16).padStart(2, "0")).join("")
  }
  function colorFor(node) {
    const s = subjectOf(node)
    if (!s) return null
    const base = isDark() ? s[4] : s[5]
    return isMoc(node) ? shade(base, isDark() ? 0.35 : -0.35) : base
  }
  window.__zk = { SUBJECTS, subjectOf, isMoc, colorFor, shade }

  window.__graphNodeColor = (node, { current }) => {
    if (current) return getComputedStyle(document.documentElement).getPropertyValue("--dark").trim() || null
    return colorFor(node) // null: plugin default (grey)
  }
})()

// ---------------------------------------------------------------------------
// 6. Safari/iPhone fix: close the mobile explorer menu after navigating.
// The explorer plugin closes it on `nav` only if
//   button.classList.remove("hide-until-loaded"); button.checkVisibility()
// is true. Safari answers checkVisibility() with the stale style (the button
// still display:none) and iOS < 17.4 has no checkVisibility at all, so on
// iPhones the full-screen menu stayed open over the newly loaded note, with
// the scroll lock on: "only the loading bar and a black page". One frame
// later the style is current; if the mobile menu button is shown (phone
// layout), do what the plugin meant to do.
// ---------------------------------------------------------------------------
document.addEventListener("nav", () => {
  requestAnimationFrame(() => {
    for (const ex of document.getElementsByClassName("explorer")) {
      const btn = ex.querySelector(".mobile-explorer")
      if (!btn || getComputedStyle(btn).display === "none") continue // desktop layout
      ex.classList.add("collapsed")
      ex.setAttribute("aria-expanded", "false")
      document.documentElement.classList.remove("mobile-no-scroll")
    }
  })
})

// ---------------------------------------------------------------------------
// 7. Side menus.
//  a) Left, desktop: a MOC index instead of the file explorer (the explorer
//     stays on phones, in the ☰ menu: config `display: mobile-only`). Built
//     from contentIndex.json, so new MOCs appear by themselves. One entry per
//     subject, with Spanish names and the subject's MOC colour from the graph
//     (§5); extra MOCs of a subject are listed under it. The subject of the
//     page being read is marked.
//  b) Right: the table of contents follows the reading: the section in view
//     is highlighted and a thin bar shows how far into the note you are.
//  c) Backlinks are titled "Más Enlaces:".
// ---------------------------------------------------------------------------
;(() => {
  let idxPromise = null
  const getIndex = () => (idxPromise ??= fetch("/static/contentIndex.json").then((r) => r.json()))
  const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c])

  // a) MOC index ------------------------------------------------------------
  function buildMocs(idx) {
    const zk = window.__zk
    const groups = new Map()
    for (const [slug, v] of Object.entries(idx)) {
      if (slug.startsWith("tags/")) continue
      const node = { id: slug, tags: v.tags || [], links: v.links || [] }
      if (!zk.isMoc(node)) continue
      const s = zk.subjectOf(node)
      if (!s) continue
      if (!groups.has(s[0])) groups.set(s[0], { s, items: [] })
      groups.get(s[0]).items.push({ slug, title: v.title || slug, n: node.links.length })
    }
    const order = zk.SUBJECTS.map((s) => s[0])
    return [...groups.values()]
      .sort((a, b) => order.indexOf(a.s[0]) - order.indexOf(b.s[0]))
      .map((g) => ({ ...g, items: g.items.sort((a, b) => b.n - a.n) })) // main MOC = most links
  }
  function renderMocs(groups) {
    const zk = window.__zk
    const li = (g) => {
      const [main, ...rest] = g.items
      const style = `--c-d:${zk.shade(g.s[4], 0.35)};--c-l:${zk.shade(g.s[5], -0.35)}`
      const sub = rest.length
        ? `<ul>${rest.map((r) => `<li><a href="/${esc(r.slug)}">${esc(r.title)}</a></li>`).join("")}</ul>`
        : ""
      return `<li data-subj="${g.s[0]}" style="${style}"><a href="/${esc(main.slug)}"><span class="dot" aria-hidden="true"></span>${esc(g.s[1])}</a>${sub}</li>`
    }
    return `<h3>Índice</h3><ul>${groups.map(li).join("")}</ul>`
  }
  let mocHtml = null
  function placeMocs(idx) {
    const left = document.querySelector(".sidebar.left")
    if (!left || left.querySelector(".moc-index")) return markCurrent(idx)
    mocHtml ??= renderMocs(buildMocs(idx))
    const nav = document.createElement("nav")
    nav.className = "moc-index"
    nav.setAttribute("aria-label", "Índice de materias")
    nav.innerHTML = mocHtml
    // right after the title + search/toolbar block
    const anchor = [...left.children].find((c) => c.querySelector?.(".search")) || left.firstElementChild
    anchor ? anchor.after(nav) : left.prepend(nav)
    markCurrent(idx)
  }
  function markCurrent(idx) {
    const slug = document.body.dataset.slug || ""
    const v = idx[slug]
    const s = v ? window.__zk.subjectOf({ id: slug, tags: v.tags || [] }) : null
    document.querySelectorAll(".moc-index li[data-subj]").forEach((li) => {
      li.classList.toggle("is-current", !!s && li.dataset.subj === s[0])
    })
  }

  // b) table of contents following the reading ------------------------------
  let tocItems = []
  let ticking = false
  function collectToc() {
    tocItems = [...document.querySelectorAll(".toc a[data-for]")]
      .map((a) => ({ a, h: document.getElementById(a.dataset.for) }))
      .filter((x) => x.h)
    updateToc()
  }
  function updateToc() {
    ticking = false
    const toc = document.querySelector(".toc")
    if (!toc || !tocItems.length) return
    const line = innerHeight * 0.3 // a heading counts as "current" once above 30% of the screen
    let cur = -1 // nothing highlighted before the first heading
    tocItems.forEach((x, i) => {
      if (x.h.getBoundingClientRect().top <= line) cur = i
    })
    tocItems.forEach((x, i) => x.a.classList.toggle("is-current", i === cur))
    const art = document.querySelector("article")
    if (art) {
      const r = art.getBoundingClientRect()
      const p = Math.min(1, Math.max(0, (innerHeight * 0.3 - r.top) / Math.max(1, r.height - innerHeight * 0.4)))
      toc.style.setProperty("--toc-progress", p.toFixed(3))
    }
  }
  addEventListener("scroll", () => {
    if (!ticking) (ticking = true), requestAnimationFrame(updateToc)
  }, { passive: true })
  addEventListener("resize", () => requestAnimationFrame(updateToc))

  document.addEventListener("nav", () => {
    // c) backlinks title
    document.querySelectorAll(".backlinks > h3").forEach((h) => (h.textContent = "Más Enlaces:"))
    collectToc()
    getIndex().then(placeMocs).catch(() => {})
  })
})()

// ---------------------------------------------------------------------------
// 8. Site pages (site-pages/*.md).
//  a) `.open-search` ("ctrl + k para buscar" on the index) opens the search.
//  b) `.mail-link`: the address is stored reversed in data-m and assembled
//     here, so it isn't in the HTML as plain text for spam crawlers.
//  c) `.moc-list` (content.md): every subject with its MOCs and how many
//     notes it has, built from contentIndex.json like the left index (§7),
//     so new subjects and notes appear by themselves.
// ---------------------------------------------------------------------------
;(() => {
  document.addEventListener("click", (e) => {
    // the coat of arms on the index is the theme switch: it presses the
    // (hidden) darkmode button, so §2's cross-fade applies too
    if (e.target instanceof Element && e.target.closest(".theme-toggle")) {
      document.querySelector(".darkmode")?.click()
      return
    }
    const t = e.target instanceof Element ? e.target.closest(".open-search") : null
    if (!t) return
    e.preventDefault()
    // next tick: opened during this click, the search closes itself again
    // (it treats the same click as a click outside its box)
    setTimeout(() => document.querySelector(".search-button")?.click())
  })

  const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c])
  let idxPromise = null
  const getIndex = () => (idxPromise ??= fetch("/static/contentIndex.json").then((r) => r.json()))

  function renderMocList(idx) {
    const zk = window.__zk
    const groups = new Map(zk.SUBJECTS.map((s) => [s[0], { s, mocs: [], n: 0 }]))
    for (const [slug, v] of Object.entries(idx)) {
      if (slug.startsWith("tags/") || !slug.includes("/")) continue // site pages live at the root
      const node = { id: slug, tags: v.tags || [], links: v.links || [] }
      const s = zk.subjectOf(node)
      if (!s) continue
      const g = groups.get(s[0])
      if (zk.isMoc(node)) g.mocs.push({ slug, title: v.title || slug, links: node.links.length })
      else g.n++
    }
    const items = [...groups.values()]
      .filter((g) => g.mocs.length || g.n)
      .map((g) => {
        const [main, ...rest] = g.mocs.sort((a, b) => b.links - a.links)
        const style = `--c-d:${zk.shade(g.s[4], 0.35)};--c-l:${zk.shade(g.s[5], -0.35)}`
        const name = main ? `<a href="/${esc(main.slug)}" class="internal">${esc(g.s[1])}</a>` : esc(g.s[1])
        const sub = rest.length
          ? `<ul>${rest.map((r) => `<li><a href="/${esc(r.slug)}" class="internal">${esc(r.title)}</a></li>`).join("")}</ul>`
          : ""
        return `<li style="${style}"><span class="dot" aria-hidden="true"></span>${name} <span class="count">${g.n}</span>${sub}</li>`
      })
    return `<ul>${items.join("")}</ul>`
  }

  document.addEventListener("nav", () => {
    for (const a of document.querySelectorAll(".mail-link[data-m]")) {
      a.href = "mailto:" + [...a.dataset.m].reverse().join("")
    }
    const list = document.querySelector(".moc-list")
    if (list) getIndex().then((idx) => (list.innerHTML = renderMocList(idx))).catch(() => {})
  })
})()

// ---------------------------------------------------------------------------
// 9. Manim animations (AVIF) open bigger on click: a full-window overlay that
// grows the image out of its place in the note (FLIP: only transform and
// opacity animate, so it stays smooth). Click anywhere, Esc or navigating
// closes it.
// ---------------------------------------------------------------------------
;(() => {
  const SEL = "article img[src$='.avif']"
  let open = null

  function close() {
    if (!open) return
    const { overlay, img, from } = open
    open = null
    overlay.classList.remove("is-open")
    img.style.transform = from
    const done = () => overlay.remove()
    img.addEventListener("transitionend", done, { once: true })
    setTimeout(done, 400) // reduced motion / no transition
  }

  function zoom(src) {
    const r = src.getBoundingClientRect()
    const ar = (src.naturalWidth || r.width) / (src.naturalHeight || r.height || 1)
    // as large as fits: 94% of the width or 90% of the height
    const w = Math.min(innerWidth * 0.94, innerHeight * 0.9 * ar)
    const h = w / ar
    const overlay = document.createElement("div")
    overlay.className = "zoom-overlay"
    overlay.setAttribute("role", "dialog")
    overlay.setAttribute("aria-label", "animación ampliada")
    const img = document.createElement("img")
    img.src = src.currentSrc || src.src
    img.alt = src.alt || ""
    img.style.width = `${w}px`
    img.style.height = `${h}px`
    img.style.left = `${(innerWidth - w) / 2}px`
    img.style.top = `${(innerHeight - h) / 2}px`
    // start exactly over the original, then grow to the centre
    const s = r.width / w
    const from = `translate(${r.left - (innerWidth - w) / 2}px, ${r.top - (innerHeight - h) / 2}px) scale(${s})`
    img.style.transform = from
    overlay.appendChild(img)
    document.body.appendChild(overlay)
    open = { overlay, img, from }
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        overlay.classList.add("is-open")
        img.style.transform = "none"
      }),
    )
  }

  document.addEventListener("click", (e) => {
    if (!(e.target instanceof Element)) return
    if (open) {
      e.preventDefault()
      close()
      return
    }
    const img = e.target.closest(SEL)
    if (!img) return
    e.preventDefault()
    e.stopPropagation() // don't also fold/unfold the callout around it
    zoom(img)
  }, true)
  document.addEventListener("keydown", (e) => e.key === "Escape" && close())
  addEventListener("resize", close)
  document.addEventListener("nav", () => {
    if (open) open.overlay.remove(), (open = null)
  })
})()
