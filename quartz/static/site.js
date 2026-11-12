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
    "a, button, summary, label, select, [role=button], .callout-title, .folder-button, .clickable-container, input[type=checkbox]"

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
// once with Fruchterman–Reingold and drawn behind the index text, fading
// downward. Notes near the cursor light up and the nearest one shows its
// title. Without a cursor (phones) the "cursor" wanders slowly on its own.
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
    const st = { w: 1, h: 1, p: { x: 0.45, y: 0.4 }, target: { x: 0.45, y: 0.4 }, active: false, raf: 0, alive: true, g: null, dirty: true }
    let col = {}
    const readColors = () => {
      const cs = getComputedStyle(document.documentElement)
      const v = (n) => cs.getPropertyValue(n).trim()
      col = { main: v("--secondary"), second: v("--tertiary"), text: v("--darkgray"), faint: v("--gray"), font: getComputedStyle(document.body).fontFamily }
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
    const onMove = (e) => {
      if (e.pointerType && e.pointerType !== "mouse") return
      const r = canvas.getBoundingClientRect()
      st.target = { x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height }
      st.active = st.target.y >= 0 && st.target.y <= 1
      st.dirty = true
      kick()
    }
    const onLeave = () => (st.active = false)
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
      if (!st.active) st.target = { x: 0.5 + 0.36 * Math.sin(t * 0.07), y: 0.4 + 0.25 * Math.sin(t * 0.09 + 1.3) }
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
      const hot = pos.map(([x, y]) => Math.max(0, 1 - Math.hypot(x - px, y - py) / R))
      ctx.lineWidth = 0.6
      for (const [a, b] of g.edges) {
        const k = Math.max(hot[a], hot[b])
        ctx.strokeStyle = k > 0.05 ? alpha(col.second, 0.15 + 0.6 * k) : alpha(col.faint, 0.22)
        ctx.beginPath(), ctx.moveTo(pos[a][0], pos[a][1]), ctx.lineTo(pos[b][0], pos[b][1]), ctx.stroke()
      }
      let best = -1, bd = Infinity
      pos.forEach(([x, y], i) => {
        const k = hot[i], r = 1.2 + Math.sqrt(g.deg[i]) * 0.8
        ctx.fillStyle = k > 0.05 ? alpha(col.main, 0.45 + 0.55 * k) : alpha(col.text, 0.35)
        ctx.beginPath(), ctx.arc(x, y, r + k * 1.5, 0, TAU), ctx.fill()
        const d = Math.hypot(x - px, y - py)
        if (d < bd) (bd = d), (best = i)
      })
      if (best >= 0 && bd < R * 0.6) {
        const [x, y] = pos[best], title = g.titles[best]
        ctx.font = `15px ${col.font}`
        ctx.fillStyle = col.text
        const tw = ctx.measureText(title).width
        ctx.fillText(title, Math.min(Math.max(8, x + 8), w - tw - 8), Math.max(16, y - 8))
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
// 5. Graph view coloured by subject. The graph plugin is a local fork
// (plugins/graph, see PATCH.md) that asks window.__graphNodeColor for each
// node's colour. A note's subject comes from its first tag that maps to one;
// notes without such a tag (73 have none, some have typos like "calulus") fall
// back to their folder (maths/<folder>/…). The current note is drawn in
// --dark so it stands out from every subject colour. A small legend goes under
// the local graph.
// ---------------------------------------------------------------------------
;(() => {
  // [key, label, tags, folder, dark colour, light colour]
  const SUBJECTS = [
    ["calculo", "Cálculo", ["calculus", "calulus", "analysis", "monotonia"], "calculus", "#6cc7bd", "#9b2c42"],
    ["algebra", "Álgebra", ["algebra", "combinatronics"], "algebra", "#efb54a", "#4c6479"],
    ["lineal", "Álgebra lineal", ["linear-algebra"], "algebra-lineal", "#c4d36b", "#6b7a2f"],
    ["proba", "Probabilidad", ["probability"], "probability", "#a99cf0", "#6a4c9c"],
    ["geo", "Geometría",
      ["geometry", "recta", "plano", "norma", "vector-unitario", "cosenos-directores", "numeros-directores", "ecuacion-simetrica", "ecuacion-parametrica-vectorial"],
      "geometry", "#7fb4e8", "#2b6cb0"],
    ["conj", "Conjuntos", ["sets"], "teoria-de-conjuntos", "#e88fb5", "#b4537a"],
    ["graf", "Gráficas", ["graphs"], "teoria-de-graficas", "#9cc79a", "#2f6b4a"],
    ["moc", "Índices (MOC)", ["moc"], null, "#f08f78", "#c0612b"],
  ]
  const byTag = new Map(), byFolder = new Map()
  for (const s of SUBJECTS) {
    s[2].forEach((t) => byTag.set(t, s))
    if (s[3]) byFolder.set(s[3], s)
  }
  const isDark = () => document.documentElement.getAttribute("saved-theme") === "dark"

  function subjectOf(node) {
    for (const t of node.tags || []) if (byTag.has(t)) return byTag.get(t)
    const id = node.id || ""
    if (id === "index" || id.endsWith("/index")) return byTag.get("moc") // folder notes = MOCs
    const parts = id.split("/")
    return byFolder.get(parts[0] === "maths" ? parts[1] : parts[0]) || null
  }

  window.__graphNodeColor = (node, { current }) => {
    if (current) return getComputedStyle(document.documentElement).getPropertyValue("--dark").trim() || null
    const s = subjectOf(node)
    return s ? (isDark() ? s[4] : s[5]) : null // null: plugin default (grey)
  }

  // legend under the local graph (both themes: colours come from CSS vars)
  const css = SUBJECTS.map((s) => `--subj-${s[0]}-d:${s[4]};--subj-${s[0]}-l:${s[5]}`).join(";")
  document.addEventListener("nav", () => {
    for (const g of document.querySelectorAll(".graph")) {
      if (g.querySelector(".graph-legend")) continue
      const ul = document.createElement("ul")
      ul.className = "graph-legend"
      ul.setAttribute("style", css)
      ul.innerHTML = SUBJECTS.map((s) => `<li><span class="sw" data-subj="${s[0]}"></span>${s[1]}</li>`).join("")
      g.querySelector(".graph-outer")?.after(ul)
    }
  })
})()
