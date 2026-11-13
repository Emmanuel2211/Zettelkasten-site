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
// Clicking a node (within a few px of it) opens its note.
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
        const keySlugs = best.map((v) => slugs[v])
        return { slugs: keySlugs, titles, edges, pos: cachedLayout(keySlugs, edges) }
      })
    return graphPromise
  }

  // The layout costs ~50 ms (more on slow PCs) of main thread: keep the last
  // one in localStorage, keyed by the graph itself (it changes only when notes
  // or links do).
  function cachedLayout(slugs, edges) {
    const key = "zk-constellation-v1"
    const sig = slugs.length + ":" + edges.length + ":" + hash(slugs.join("|") + edges.join("|"))
    try {
      const c = JSON.parse(localStorage.getItem(key) || "null")
      if (c && c.sig === sig) return c.pos
    } catch {}
    const pos = layoutFR(slugs.length, edges)
    try {
      localStorage.setItem(key, JSON.stringify({ sig, pos: pos.map(([x, y]) => [+x.toFixed(4), +y.toFixed(4)]) }))
    } catch {}
    return pos
  }
  function hash(str) {
    let h = 2166136261
    for (let i = 0; i < str.length; i++) h = Math.imul(h ^ str.charCodeAt(i), 16777619)
    return (h >>> 0).toString(36)
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
          const ex = x[i] - x[j], ey = y[i] - y[j], d = Math.max(1e-4, Math.sqrt(ex * ex + ey * ey)), f = k2 / d / d
          dx[i] += ex * f, dy[i] += ey * f, dx[j] -= ex * f, dy[j] -= ey * f
        }
      for (const [a, b] of edges) {
        const ex = x[b] - x[a], ey = y[b] - y[a], d = Math.max(1e-4, Math.sqrt(ex * ex + ey * ey)), f = d / k
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
    // Performance (it made some PCs lag and spin their fans when it redrew
    // the whole graph 60–144 times a second, forever):
    // - the resting graph is drawn ONCE into an offscreen canvas (`base`) on
    //   load, resize and theme change; a frame only copies it and draws the
    //   few lit nodes near the mouse on top;
    // - frames are drawn only while something changes, then the loop stops;
    // - colours are resolved once (no color-mix() string per edge per frame);
    // - the backing store is capped at ~4 Mpx (big 4K screens at dpr 2).
    // The nodes sway (DRIFT) only while someone is there: from each mouse
    // move, scroll, tap or key, for IDLE_MS; then the swaying brakes to a stop
    // and the page costs nothing. While swaying the whole graph is redrawn at
    // FPS frames/s, at 1x resolution: pixels, not nodes, were the real cost
    // (measured, software rendering: 112% of a core before; 1x/30 fps ~19%;
    // at 2x even 30 fps stayed ~117%).
    // DRIFT = false is the still version (static graph, glow only), the
    // fallback if the swaying is still too heavy somewhere.
    const DRIFT = !REDUCED, IDLE_MS = 8000, FPS = 30
    const base = document.createElement("canvas"), bctx = base.getContext("2d")
    // The glow only follows the real mouse over empty space. Over the text,
    // menus or a link, or with no mouse at all (phones), there is none. amp
    // fades it in and out; while it is ~0 the glow point jumps to the cursor
    // instead of sweeping across the screen. A node within HIT px of the
    // mouse is "picked": ringed, its title in the accent colour, and a click
    // opens its note.
    const HIT = 14
    const st = { w: 1, h: 1, dpr: 1, p: { x: -1e4, y: -1e4 }, target: { x: -1e4, y: -1e4 }, on: false, amp: 0, raf: 0, alive: true, g: null, pos: null, cur: null, span: [0, 0], hit: -1, active: performance.now(), motion: 0, last: 0 }
    let col = {}
    const solid = (c) => ((bctx.fillStyle = "#000"), (bctx.fillStyle = c || "#888"), bctx.fillStyle)
    const readColors = () => {
      const cs = getComputedStyle(document.documentElement)
      const v = (n) => solid(cs.getPropertyValue(n).trim())
      col = { main: v("--secondary"), second: v("--tertiary"), text: v("--darkgray"), faint: v("--gray"), font: getComputedStyle(document.body).fontFamily }
      // light backgrounds wash out thin translucent strokes: stronger there
      col.k = document.documentElement.getAttribute("saved-theme") === "light" ? 1.8 : 1.25
      renderBase()
      kick()
    }
    const kick = () => {
      if (st.alive && !st.raf) st.raf = requestAnimationFrame(frame)
    }
    const radius = (i) => 1.2 + Math.sqrt(st.g.deg[i]) * 0.8
    // node positions in CSS px for the current window size
    const place = () => {
      if (!st.g) return
      const { w, h } = st, padX = Math.max(24, w * 0.04), padY = 28, n = st.g.pos.length
      st.pos = new Float32Array(2 * n)
      st.g.pos.forEach(([x, y], i) => {
        st.pos[2 * i] = padX + x * (w - 2 * padX)
        st.pos[2 * i + 1] = padY + y * (h - 2 * padY)
      })
      st.cur = st.pos.slice()
      st.span = [w - 2 * padX, h - 2 * padY]
    }
    // swaying positions: the resting ones plus a small drift scaled by
    // st.motion (0 = exactly the resting graph, so start and stop are seamless)
    const sway = (t) => {
      const { pos, cur, motion } = st, ax = 0.01 * st.span[0] * motion, ay = 0.01 * st.span[1] * motion
      if (motion <= 0) return cur.set(pos)
      for (let i = 0, n = pos.length / 2; i < n; i++) {
        cur[2 * i] = pos[2 * i] + ax * Math.sin(t * 0.25 + i)
        cur[2 * i + 1] = pos[2 * i + 1] + ay * Math.cos(t * 0.21 + i * 1.7)
      }
    }
    // the resting look: all edges in one path, all nodes in another
    const drawGraph = (c, pts) => {
      c.lineWidth = col.k > 1.5 ? 0.8 : 0.7
      c.strokeStyle = col.faint
      c.globalAlpha = Math.min(1, 0.22 * col.k)
      c.beginPath()
      for (const [a, b] of st.g.edges) c.moveTo(pts[2 * a], pts[2 * a + 1]), c.lineTo(pts[2 * b], pts[2 * b + 1])
      c.stroke()
      c.fillStyle = col.text
      c.globalAlpha = Math.min(1, 0.35 * col.k)
      c.beginPath()
      for (let i = 0; i < st.g.titles.length; i++) {
        const x = pts[2 * i], y = pts[2 * i + 1], r = radius(i)
        c.moveTo(x + r, y), c.arc(x, y, r, 0, TAU)
      }
      c.fill()
      c.globalAlpha = 1
    }
    // the resting graph, drawn once: all edges in one path, all nodes in another
    const renderBase = () => {
      bctx.setTransform(1, 0, 0, 1, 0, 0)
      bctx.clearRect(0, 0, base.width, base.height)
      if (!st.pos) return
      bctx.setTransform(st.dpr, 0, 0, st.dpr, 0, 0)
      drawGraph(bctx, st.pos)
    }
    const resize = () => {
      const w = Math.max(1, innerWidth), h = Math.max(1, innerHeight)
      let dpr = DRIFT ? 1 : Math.min(2, devicePixelRatio || 1)
      if (w * h * dpr * dpr > 4e6) dpr = Math.max(1, Math.sqrt(4e6 / (w * h)))
      Object.assign(st, { w, h, dpr })
      canvas.width = base.width = Math.round(w * dpr)
      canvas.height = base.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      place()
      renderBase()
      kick()
    }
    const nearest = (x, y) => {
      let best = -1, bd = Infinity
      const pts = st.cur
      if (!pts) return [best, bd]
      for (let i = 0, n = pts.length / 2; i < n; i++) {
        const dx = pts[2 * i] - x, dy = pts[2 * i + 1] - y, d = dx * dx + dy * dy
        if (d < bd) (bd = d), (best = i)
      }
      return [best, Math.sqrt(bd)]
    }
    const pickAt = (x, y) => {
      const [i, d] = nearest(x, y)
      return i >= 0 && d < HIT + radius(i) ? i : -1
    }
    // over the text, menus or any link the glow goes away completely, so
    // reading and clicking links doesn't light up nodes and labels underneath
    // (`.sidebar > *`, not `.sidebar`: on the index the side columns are empty
    // but still there, and the nodes behind them must react)
    const QUIET = "article, .page-header, .sidebar > *, a, button, input, .search-container"
    const isQuiet = (t) => t instanceof Element && !!t.closest(QUIET)
    const dot = () => document.querySelector(".dot-cursor")
    const setHit = (i) => {
      if (i === st.hit) return
      st.hit = i
      document.documentElement.classList.toggle("on-constellation-node", i >= 0)
    }
    // someone is there: (re)start the swaying for IDLE_MS
    const wake = () => {
      st.active = performance.now()
      if (DRIFT) kick()
    }
    const sleep = () => ((st.active = -Infinity), kick())
    const onMove = (e) => {
      wake()
      if (e.pointerType && e.pointerType !== "mouse") return
      st.target = { x: e.clientX, y: e.clientY }
      st.on = !isQuiet(e.target)
      setHit(st.on ? pickAt(e.clientX, e.clientY) : -1)
      // the dot cursor (§3) sets is-link from the element under the mouse;
      // this listener runs after it, so a picked node can turn it on
      if (st.hit >= 0) dot()?.classList.add("is-link")
      if (st.on || st.amp > 0) kick()
    }
    const onLeave = () => {
      st.on = false
      setHit(-1)
      kick()
    }
    const onClick = (e) => {
      if (e.button !== 0 || !st.g || isQuiet(e.target)) return
      const i = st.hit >= 0 ? st.hit : pickAt(e.clientX, e.clientY)
      if (i < 0 || !st.on) return
      const s = st.g.slugs[i]
      const url = new URL("/" + (s === "index" ? "" : s.replace(/(^|\/)index$/, "$1")), location.origin)
      e.preventDefault()
      if (e.ctrlKey || e.metaKey || e.shiftKey) open(url, "_blank", "noopener")
      else if (window.spaNavigate) window.spaNavigate(url)
      else location.assign(url)
    }
    addEventListener("pointermove", onMove, { passive: true })
    document.addEventListener("pointerleave", onLeave)
    document.addEventListener("click", onClick)
    addEventListener("resize", resize)
    document.addEventListener("themechange", readColors)
    document.addEventListener("zk-readers", kick)
    addEventListener("scroll", wake, { passive: true })
    addEventListener("pointerdown", wake, { passive: true })
    addEventListener("keydown", wake)
    addEventListener("focus", wake)
    addEventListener("blur", sleep)

    const frame = (now) => {
      st.raf = 0
      if (!st.alive || !st.pos) return
      const swaying = DRIFT && now - st.active < IDLE_MS
      // ~1.5 s to start swaying, ~3 s to brake
      st.motion += ((swaying ? 1 : 0) - st.motion) * (swaying ? 0.03 : 0.025)
      if (st.motion < 0.004) st.motion = 0
      if (st.motion > 0.996) st.motion = 1
      const goal = st.on ? 1 : 0
      st.amp += (goal - st.amp) * (REDUCED ? 1 : 0.12)
      if (Math.abs(goal - st.amp) < 0.01) st.amp = goal
      if (st.amp < 0.03) st.p = { ...st.target } // hidden: jump, don't sweep
      const ease = REDUCED ? 1 : 0.18
      st.p.x += (st.target.x - st.p.x) * ease
      st.p.y += (st.target.y - st.p.y) * ease
      if (Math.abs(st.target.x - st.p.x) + Math.abs(st.target.y - st.p.y) < 0.5) st.p = { ...st.target }
      // while swaying, at most FPS frames/s (the drift is slow; 60 adds nothing)
      const live = st.motion > 0
      if (!live || now - st.last >= 1000 / FPS - 2) (st.last = now), paint(now / 1000)
      // keep going only while swaying, or the glow is still fading or catching up
      const settled = !swaying && !live && st.amp === goal && st.p.x === st.target.x && st.p.y === st.target.y
      if (!settled) st.raf = requestAnimationFrame(frame)
    }
    const paint = (t) => {
      const { w, h, p, g, amp } = st
      ctx.clearRect(0, 0, w, h)
      sway(t)
      const pos = st.cur
      // still: copy the resting graph; swaying: draw it at its new positions
      if (st.motion > 0) drawGraph(ctx, pos)
      else ctx.drawImage(base, 0, 0, w, h)
      // notes someone is reading right now (live presence, §11): a ring in
      // that visitor's colour
      const readers = window.__zkReaders
      if (readers?.size && g.index) {
        ctx.lineWidth = 1.4
        for (const [s, hue] of readers) {
          const i = g.index.get(s)
          if (i === undefined) continue
          ctx.strokeStyle = ctx.fillStyle = window.__zkPresenceColor?.(hue) || col.main
          ctx.beginPath(), ctx.arc(pos[2 * i], pos[2 * i + 1], radius(i) + 4.5, 0, TAU), ctx.stroke()
          ctx.beginPath(), ctx.arc(pos[2 * i], pos[2 * i + 1], radius(i) + 0.5, 0, TAU), ctx.fill()
        }
      }
      if (amp <= 0) return
      const R = Math.min(w, h) * 0.22, n = g.titles.length
      const hot = new Float32Array(n)
      for (let i = 0; i < n; i++) {
        const d = Math.hypot(pos[2 * i] - p.x, pos[2 * i + 1] - p.y)
        if (d < R) hot[i] = amp * (1 - d / R)
      }
      // lit edges and nodes on top of the resting copy
      ctx.lineWidth = col.k > 1.5 ? 0.8 : 0.7
      ctx.strokeStyle = col.second
      for (const [a, b] of g.edges) {
        const k = Math.max(hot[a], hot[b])
        if (k <= 0.05) continue
        ctx.globalAlpha = Math.min(1, (0.15 + 0.6 * k) * col.k)
        ctx.beginPath(), ctx.moveTo(pos[2 * a], pos[2 * a + 1]), ctx.lineTo(pos[2 * b], pos[2 * b + 1]), ctx.stroke()
      }
      ctx.fillStyle = col.main
      for (let i = 0; i < n; i++) {
        const k = hot[i]
        if (k <= 0.05) continue
        ctx.globalAlpha = 0.45 + 0.55 * k
        ctx.beginPath(), ctx.arc(pos[2 * i], pos[2 * i + 1], radius(i) + k * 1.5, 0, TAU), ctx.fill()
      }
      ctx.globalAlpha = 1
      // title: the picked node, or else the nearest note to the glow
      let [best, bd] = nearest(p.x, p.y)
      const picked = st.hit >= 0
      if (picked) best = st.hit
      if (best < 0 || amp <= 0.05 || (!picked && bd >= R * 0.6)) return
      const x = pos[2 * best], y = pos[2 * best + 1], title = g.titles[best]
      if (picked) {
        ctx.strokeStyle = col.main
        ctx.lineWidth = 1.2
        ctx.beginPath(), ctx.arc(x, y, radius(best) + 5, 0, TAU), ctx.stroke()
      }
      ctx.font = `15px ${col.font}`
      ctx.fillStyle = picked ? col.main : col.text
      ctx.globalAlpha = amp
      const tw = ctx.measureText(title).width
      ctx.fillText(title, Math.min(Math.max(8, x + 10), w - tw - 8), Math.max(16, y - 10))
      ctx.globalAlpha = 1
    }
    readColors()
    resize()
    loadGraph().then((g) => {
      if (!st.alive) return
      const deg = new Array(g.titles.length).fill(0)
      g.edges.forEach(([a, b]) => (deg[a]++, deg[b]++))
      st.g = { ...g, deg, index: new Map(g.slugs.map((s, i) => [s, i])) }
      place()
      renderBase()
      canvas.classList.add("is-ready")
      kick()
    })
    return {
      destroy() {
        st.alive = false
        cancelAnimationFrame(st.raf)
        removeEventListener("pointermove", onMove)
        document.removeEventListener("pointerleave", onLeave)
        document.removeEventListener("click", onClick)
        removeEventListener("resize", resize)
        document.removeEventListener("themechange", readColors)
        removeEventListener("scroll", wake)
        removeEventListener("pointerdown", wake)
        removeEventListener("keydown", wake)
        removeEventListener("focus", wake)
        removeEventListener("blur", sleep)
        document.removeEventListener("zk-readers", kick)
        document.documentElement.classList.remove("on-constellation-node")
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
//  a) Left: a terminal-style tree (~/, ├─, └─) of subjects → MOC sections →
//     notes, built from each MOC's headings and links (moc-tree.json, written
//     by scripts/sync-vault.py), so it follows the MOCs by itself.
//  b) Right: the table of contents follows the reading: the section in view
//     is highlighted and a thin bar shows how far into the note you are.
//  c) Backlinks are titled "Más Enlaces:".
// ---------------------------------------------------------------------------
;(() => {
  let idxPromise = null
  const getIndex = () => (idxPromise ??= fetch("/static/contentIndex.json").then((r) => r.json()))
  const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c])

  // a) MOC tree ---------------------------------------------------------------
  // moc-tree.json (scripts/sync-vault.py) has, per MOC, its headings as
  // folders and the notes linked under each heading, as vault paths; the
  // contentIndex maps those to slugs and titles. One folder per subject (its
  // main MOC = the one with most links; other MOCs of the subject become
  // folders inside it). Clicking a name opens its page and unfolds it; the
  // arrow only folds/unfolds. Open folders are remembered (localStorage).
  const OPEN_KEY = "zk-tree-open"
  const openSet = (() => {
    try {
      return new Set(JSON.parse(localStorage.getItem(OPEN_KEY) || "[]"))
    } catch {
      return new Set()
    }
  })()
  const saveOpen = () => {
    try {
      localStorage.setItem(OPEN_KEY, JSON.stringify([...openSet]))
    } catch {}
  }
  let treePromise = null
  const getTree = () => (treePromise ??= fetch("/moc-tree.json").then((r) => (r.ok ? r.json() : [])))
  const href = (slug) => "/" + slug.replace(/(^|\/)index$/, "$1")

  function buildTree(idx, mocs) {
    const zk = window.__zk
    const bySrc = new Map(Object.entries(idx).map(([slug, v]) => [v.filePath, { slug, title: v.title || slug }]))
    const note = (path) => bySrc.get(path)
    // flat list items with list depth -> nested
    const nestItems = (items = []) => {
      const out = [], stack = [{ depth: -1, kids: out }]
      for (const it of items) {
        const n = note(it.path)
        if (!n) continue
        const leaf = { ...n, kids: [] }
        while (stack.length > 1 && stack[stack.length - 1].depth >= it.depth) stack.pop()
        stack[stack.length - 1].kids.push(leaf)
        stack.push({ depth: it.depth, kids: leaf.kids })
      }
      return out
    }
    const folder = (n, id, mocSlug) => {
      const target = n.path ? note(n.path) : null
      return {
        dir: true,
        id,
        title: target && !n.title ? target.title : n.title,
        href: target ? href(target.slug) : mocSlug ? href(mocSlug) + (n.anchor ? "#" + n.anchor : "") : null,
        slug: target?.slug,
        kids: [
          ...(n.children || []).map((c, i) => folder(c, id + "/" + i, mocSlug)),
          ...nestItems(n.items),
        ],
      }
    }
    const groups = new Map()
    for (const m of mocs) {
      const n = note(m.path)
      if (!n) continue
      const v = idx[n.slug]
      const s = zk.subjectOf({ id: n.slug, tags: v.tags || [] })
      if (!s) continue
      if (!groups.has(s[0])) groups.set(s[0], { s, mocs: [] })
      groups.get(s[0]).mocs.push({ ...m, slug: n.slug, title: n.title, n: (v.links || []).length })
    }
    const order = zk.SUBJECTS.map((s) => s[0])
    return [...groups.values()]
      .sort((a, b) => order.indexOf(a.s[0]) - order.indexOf(b.s[0]))
      .map(({ s, mocs }) => {
        const [main, ...rest] = mocs.sort((a, b) => b.n - a.n)
        const root = folder({ ...main, title: s[1], path: undefined }, s[0], main.slug)
        root.href = href(main.slug)
        root.slug = main.slug
        root.kids.push(
          ...rest.map((m, i) => {
            const f = folder({ ...m, title: m.title, path: undefined }, s[0] + "/moc" + i, m.slug)
            f.href = href(m.slug)
            f.slug = m.slug
            return f
          }),
        )
        return root
      })
  }
  function renderTree(nodes) {
    const li = (n) => {
      if (!n.dir) {
        const sub = n.kids.length ? `<ul>${n.kids.map(li).join("")}</ul>` : ""
        return `<li class="t-file"><a href="${esc(href(n.slug))}" data-slug="${esc(n.slug)}">${esc(n.title)}</a>${sub}</li>`
      }
      const name = n.href
        ? `<a href="${esc(n.href)}"${n.slug ? ` data-slug="${esc(n.slug)}"` : ""}>${esc(n.title)}/</a>`
        : `<span>${esc(n.title)}/</span>`
      const open = openSet.has(n.id)
      return `<li class="t-dir${open ? " is-open" : ""}" data-id="${esc(n.id)}"><div class="t-row"><button class="t-tog" aria-expanded="${open}" aria-label="Desplegar ${esc(n.title)}"></button>${name}</div><ul>${n.kids.map(li).join("")}</ul></li>`
    }
    return `<a class="t-root" href="/">~/</a><ul class="t-tree">${nodes.map(li).join("")}</ul>`
  }
  const setOpen = (dir, open) => {
    dir.classList.toggle("is-open", open)
    dir.querySelector(":scope > .t-row > .t-tog")?.setAttribute("aria-expanded", String(open))
    open ? openSet.add(dir.dataset.id) : openSet.delete(dir.dataset.id)
  }
  document.addEventListener("click", (e) => {
    const t = e.target instanceof Element ? e.target : null
    const tog = t?.closest(".moc-index .t-tog")
    if (tog) {
      const dir = tog.closest(".t-dir")
      setOpen(dir, !dir.classList.contains("is-open"))
      saveOpen()
      return
    }
    const name = t?.closest(".moc-index .t-row > a")
    if (name) setOpen(name.closest(".t-dir"), true), saveOpen()
  })
  let treeHtml = null
  function placeTree([idx, mocs]) {
    treeHtml ??= renderTree(buildTree(idx, mocs))
    // desktop: left column / drawer; phones: inside the ☰ explorer panel,
    // in place of the file list (hidden in custom.scss)
    for (const host of document.querySelectorAll(".sidebar.left, .explorer .explorer-content")) {
      if (host.querySelector(".moc-index")) continue
      if (host.classList.contains("explorer-content")) {
        const nav = document.createElement("nav")
        nav.className = "moc-index"
        nav.setAttribute("aria-label", "Índice de materias")
        nav.innerHTML = treeHtml
        host.prepend(nav)
        continue
      }
      const nav = document.createElement("nav")
      nav.className = "moc-index"
      nav.setAttribute("aria-label", "Índice de materias")
      nav.innerHTML = treeHtml
      // right after the title + search/toolbar block
      const anchor = [...host.children].find((c) => c.querySelector?.(".search")) || host.firstElementChild
      anchor ? anchor.after(nav) : host.prepend(nav)
    }
    markCurrent()
  }
  // the page being read: highlighted, and its folders unfolded (all places
  // where it appears)
  function markCurrent() {
    const slug = document.body.dataset.slug || ""
    document.querySelectorAll(".moc-index a.is-current").forEach((a) => a.classList.remove("is-current"))
    document.querySelectorAll(".moc-index a[data-slug]").forEach((a) => {
      if (a.dataset.slug !== slug) return
      a.classList.add("is-current")
      for (let d = a.closest(".t-dir"); d; d = d.parentElement?.closest(".t-dir")) setOpen(d, true)
    })
    saveOpen()
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
    Promise.all([getIndex(), getTree()]).then(placeTree).catch((e) => console.error("moc tree:", e))
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
    // bigger than in the note, but not the whole screen: up to 72% of the
    // width (96% on phones, where the note is already narrow) or 75% of the
    // height, and never smaller than it already was
    const fw = innerWidth < 800 ? 0.96 : 0.72
    const w = Math.max(r.width, Math.min(innerWidth * fw, innerHeight * 0.75 * ar))
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

// ---------------------------------------------------------------------------
// 10. Layout on monitors: the note keeps its full-screen size (Head.tsx sets
// html.zk-wide / html.zk-narrow from the screen width before the first
// paint; here it is recomputed on resize). In zk-narrow the side menus are
// drawers: ☰ opens the left one (search, tree), ≡ the right one (graph,
// contents, links). They close with Esc, a click outside, or on navigation.
// ---------------------------------------------------------------------------
;(() => {
  const d = document.documentElement
  const mk = (cls, label, text) => {
    const b = document.createElement("button")
    b.className = "zk-drawer-btn " + cls
    b.setAttribute("aria-label", label)
    b.setAttribute("aria-expanded", "false")
    b.textContent = text
    // outside <body>: SPA navigation morphs <body> and would remove them
    d.appendChild(b)
    return b
  }
  const left = mk("is-left", "Abrir índice", "☰")
  const right = mk("is-right", "Abrir contenido y grafo", "≡")
  const scrim = document.createElement("div")
  scrim.className = "zk-scrim"
  d.appendChild(scrim)
  const set = (side, open) => {
    d.classList.toggle("zk-open-" + side, open)
    ;(side === "left" ? left : right).setAttribute("aria-expanded", String(open))
  }
  const close = () => (set("left", false), set("right", false))
  left.addEventListener("click", () => {
    const open = !d.classList.contains("zk-open-left")
    close()
    set("left", open)
  })
  right.addEventListener("click", () => {
    const open = !d.classList.contains("zk-open-right")
    close()
    set("right", open)
  })
  scrim.addEventListener("click", close)
  document.addEventListener("keydown", (e) => e.key === "Escape" && close())
  document.addEventListener("nav", close)
  let raf = 0
  addEventListener("resize", () => {
    cancelAnimationFrame(raf)
    raf = requestAnimationFrame(() => {
      const was = d.classList.contains("zk-narrow")
      window.__zkLayout?.()
      if (was && !d.classList.contains("zk-narrow")) close()
    })
  })
})()

// ---------------------------------------------------------------------------
// 11. Live presence (server: the Durable Object in scripts/worker.js).
// Every visitor gets a random mathematician's name. The index shows a
// terminal-style board: who is here and which note they are reading
// (arrivals) and who left recently (departures). On every page, the mouse
// cursors of the other visitors on that same page are drawn live.
// Smoothness (like jzhao.xyz, unlike aarnphm.xyz's jumps): positions are sent
// ~20 times a second, and each remote cursor glides towards its last known
// position with an exponential ease measured in real time (frame-rate
// independent), so it moves continuously between messages instead of
// teleporting. Positions are relative to the note column (left edge, and its
// width as the unit), so a cursor lands on the same paragraph on any screen.
// Cursors are squares like the visitor's own, in the site's subject colours;
// a name only shows when your mouse comes near that cursor.
// "Modo invisible" (remembered) doesn't connect at all.
// Nothing runs without a connection; alone on a page nothing is sent.
// ---------------------------------------------------------------------------
;(() => {
  if (!("WebSocket" in window)) return
  const KEY = "zk-invisible"
  const ls = {
    get: () => {
      try {
        return localStorage.getItem(KEY) === "1"
      } catch {
        return false
      }
    },
    set: (v) => {
      try {
        v ? localStorage.setItem(KEY, "1") : localStorage.removeItem(KEY)
      } catch {}
    },
  }
  const FINE = matchMedia("(hover: hover) and (pointer: fine)").matches
  const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches
  // visitors' colours: the site's own subject colours (§5), [dark, light];
  // the amber one is left out (it is the visitor's own cursor colour)
  const PALETTE = [
    ["#6cc7bd", "#9b2c42"],
    ["#a99cf0", "#6a4c9c"],
    ["#e88fb5", "#b4537a"],
    ["#7fb4e8", "#2b6cb0"],
    ["#c4d36b", "#6b7a2f"],
    ["#9cc79a", "#2f6b4a"],
  ]
  const pal = (hue) => PALETTE[Math.abs(hue | 0) % PALETTE.length]
  const colorVars = (hue) => `--c-d:${pal(hue)[0]};--c-l:${pal(hue)[1]}`
  window.__zkPresenceColor = (hue) => pal(hue)[document.documentElement.getAttribute("saved-theme") === "light" ? 1 : 0]
  const NEAR = 90 // px: a visitor's name shows when your mouse is this close to their cursor
  const SEND_MS = 50 // ~20 cursor updates per second
  const EASE_S = 0.085 // time constant of the glide (seconds)
  const IDLE_MS = 12000 // a still cursor fades after this
  const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c])
  const slug = () => document.body?.dataset.slug || ""
  const hhmm = (t) => new Date(t).toLocaleTimeString("es-MX", { hour: "2-digit", minute: "2-digit", hour12: false })

  let ws = null
  let me = null
  let state = ls.get() ? "invisible" : "connecting" // connecting | live | lost | invisible
  const here = new Map() // id -> user
  let gone = []
  let retry = 1000
  let retryTimer = 0

  // ---- titles of the notes (for the board) ----
  let titles = null
  fetch("/static/contentIndex.json")
    .then((r) => r.json())
    .then((idx) => {
      titles = new Map(Object.entries(idx).map(([s, v]) => [s, v.title || s]))
      renderBoard()
    })
    .catch(() => {})
  const pageTitle = (s) => (s === "index" ? "~/" : titles?.get(s) || s.split("/").pop())
  const pageHref = (s) => "/" + (s === "index" ? "" : s.replace(/(^|\/)index$/, "$1"))

  // ---- connection ----
  function connect() {
    if (state === "invisible") return
    clearTimeout(retryTimer)
    let sock
    try {
      sock = new WebSocket((location.protocol === "https:" ? "wss://" : "ws://") + location.host + "/__presence")
    } catch {
      return lost()
    }
    ws = sock
    sock.onopen = () => {
      retry = 1000
      sock.send(JSON.stringify({ t: "hi", page: slug(), away: document.hidden }))
    }
    sock.onmessage = (e) => {
      let m
      try {
        m = JSON.parse(e.data)
      } catch {
        return
      }
      onMessage(m)
    }
    sock.onclose = () => ws === sock && lost()
    sock.onerror = () => {}
  }
  function lost() {
    ws = null
    me = null
    here.clear()
    clearCursors()
    if (state === "invisible") return renderBoard()
    state = "lost"
    renderBoard()
    retryTimer = setTimeout(connect, retry)
    retry = Math.min(retry * 2, 60000)
  }
  const send = (m) => ws?.readyState === 1 && me && ws.send(JSON.stringify(m))

  function onMessage(m) {
    if (m.t === "state") {
      me = m.me
      here.clear()
      for (const u of m.here) here.set(u.id, u)
      gone = m.gone || []
      state = "live"
    } else if (m.t === "join" || m.t === "upd") {
      here.set(m.u.id, m.u)
      if (m.u.page !== slug()) dropCursor(m.u.id)
    } else if (m.t === "leave") {
      here.delete(m.id)
      dropCursor(m.id)
      gone = [m.g, ...gone].slice(0, 8)
    } else if (m.t === "c") {
      const u = here.get(m.id)
      if (u && u.page === slug()) moveCursor(u, m.x, m.y)
      return
    } else if (m.t === "cx") {
      dropCursor(m.id)
      return
    }
    renderBoard()
    publishReaders()
  }

  // readers per page, for the index constellation (§4 lights those notes)
  function publishReaders() {
    const r = new Map()
    for (const u of here.values()) if (!u.away && u.page !== "index") r.set(u.page, u.hue)
    window.__zkReaders = r
    document.dispatchEvent(new CustomEvent("zk-readers"))
  }

  // ---- my cursor ----
  const col = () => document.querySelector(".center") || document.body
  let last = null
  let sendTimer = 0
  let lastSent = 0
  function queueSend() {
    if (sendTimer || !last) return
    const wait = Math.max(0, SEND_MS - (performance.now() - lastSent))
    sendTimer = setTimeout(() => {
      sendTimer = 0
      lastSent = performance.now()
      if (!last || ![...here.values()].some((u) => u.id !== me?.id && u.page === slug())) return // alone here
      const r = col().getBoundingClientRect()
      if (!r.width) return
      send({ t: "c", x: (last.x - r.left) / r.width, y: (last.y - r.top) / r.width })
    }, wait)
  }
  if (FINE) {
    addEventListener(
      "pointermove",
      (e) => {
        if (e.pointerType !== "mouse") return
        last = { x: e.clientX, y: e.clientY }
        queueSend()
        if (cursors.size) kick() // names show as you get near
      },
      { passive: true },
    )
    // scrolling moves the page under a still mouse
    addEventListener("scroll", queueSend, { passive: true })
    document.addEventListener("pointerleave", () => ((last = null), send({ t: "cx" })))
    addEventListener("blur", () => ((last = null), send({ t: "cx" })))
  }

  // ---- others' cursors ----
  const layer = document.createElement("div")
  layer.className = "zk-cursors"
  layer.setAttribute("aria-hidden", "true")
  // outside <body>: SPA navigation morphs <body> and would remove it
  document.documentElement.appendChild(layer)
  const cursors = new Map() // id -> {el, x, y, tx, ty, seen}
  function moveCursor(u, x, y) {
    let c = cursors.get(u.id)
    if (!c) {
      const el = document.createElement("div")
      el.className = "zk-cursor"
      el.setAttribute("style", colorVars(u.hue))
      el.innerHTML = `<i></i><span>${esc(u.name)}</span>`
      layer.appendChild(el)
      c = { el, x, y, tx: x, ty: y }
      cursors.set(u.id, c)
    }
    c.tx = x
    c.ty = y
    c.seen = performance.now()
    c.el.classList.remove("is-idle")
    if (REDUCED) (c.x = x), (c.y = y)
    kick()
  }
  function dropCursor(id) {
    const c = cursors.get(id)
    if (!c) return
    c.el.remove()
    cursors.delete(id)
  }
  function clearCursors() {
    for (const id of [...cursors.keys()]) dropCursor(id)
  }
  let raf = 0
  let prev = 0
  const kick = () => {
    if (!raf) (prev = performance.now()), (raf = requestAnimationFrame(frame))
  }
  function frame(now) {
    raf = 0
    const dt = Math.min(0.1, (now - prev) / 1000)
    prev = now
    const k = 1 - Math.exp(-dt / EASE_S)
    const r = col().getBoundingClientRect()
    const ox = r.left + scrollX, oy = r.top + scrollY, w = r.width || 1
    let moving = false
    for (const c of cursors.values()) {
      c.x += (c.tx - c.x) * k
      c.y += (c.ty - c.y) * k
      if (Math.abs(c.tx - c.x) * w > 0.3 || Math.abs(c.ty - c.y) * w > 0.3) moving = true
      else (c.x = c.tx), (c.y = c.ty)
      const px = ox + c.x * w, py = oy + c.y * w
      c.el.style.transform = `translate3d(${px.toFixed(1)}px, ${py.toFixed(1)}px, 0)`
      c.el.classList.toggle("show-name", !!last && Math.hypot(px - scrollX - last.x, py - scrollY - last.y) < NEAR)
      if (now - c.seen > IDLE_MS) c.el.classList.add("is-idle")
    }
    if (moving) raf = requestAnimationFrame(frame)
  }
  // keep cursors glued to the note when the layout moves
  addEventListener("resize", kick)
  addEventListener("scroll", kick, { passive: true })
  setInterval(() => cursors.size && kick(), 4000) // idle fading

  // ---- the board (index only) ----
  // Airport departure board (like jzhao.xyz's): uppercase, dotted leaders,
  // square bullets, square corners. Fixed in the top-right corner; when the
  // window is too narrow for it beside the text (< 1500px) it starts
  // minimised to its header bar (like aarnphm.xyz), and a click unfolds it
  // over the page. The visitor's own choice (open/minimised) is remembered.
  const MIN_KEY = "zk-board-min"
  const SHOW_GONE = 3
  const roomy = () => innerWidth >= 1500
  const minPref = () => {
    try {
      return localStorage.getItem(MIN_KEY) // "1" | "0" | null
    } catch {
      return null
    }
  }
  const isMin = () => (minPref() === null ? !roomy() : minPref() === "1")
  let clock = 0
  const now = () => new Date().toLocaleTimeString("es-MX", { hour12: false })
  function renderBoard() {
    const host = document.querySelector('body[data-slug="index"] article')
    clearInterval(clock)
    if (!host) return
    let b = host.querySelector(".zk-board")
    if (!b) {
      b = document.createElement("section")
      b.className = "zk-board"
      b.setAttribute("aria-label", "Quién está en el sitio")
      host.appendChild(b)
    }
    const min = isMin()
    b.classList.toggle("is-min", min)
    const others = me ? [...here.values()].filter((u) => u.id !== me.id).sort((a, b) => b.at - a.at) : []
    const count = state === "live" ? others.length + 1 : 0
    const row = (u, isMe) => {
      const page = u.away ? "ausente" : pageTitle(u.page)
      const where = u.away ? `<span class="zb-val">${esc(page)}</span>` : `<a class="zb-val" href="${pageHref(u.page)}" title="${esc(page)} · llegó ${hhmm(u.at)}">${esc(page)}</a>`
      return `<li class="${isMe ? "is-me" : ""}" style="${colorVars(u.hue)}"><span class="zb-name">${isMe ? "tú" : esc(u.name)}</span><span class="zb-dots"></span>${where}</li>`
    }
    let body = ""
    if (state === "invisible") body = `<p class="zb-msg">modo invisible</p>`
    else if (state !== "live") body = `<p class="zb-msg">${state === "lost" ? "sin conexión…" : "conectando…"}</p>`
    else {
      const mine = here.get(me.id) || me
      const shown = gone.slice(0, SHOW_GONE)
      body =
        `<div class="zb-sec">llegadas<span class="zb-dots"></span></div><ul>${row(mine, true)}${others.map((u) => row(u)).join("")}</ul>` +
        `<div class="zb-sec">salidas<span class="zb-dots"></span></div>` +
        (shown.length
          ? `<ul class="zb-gone">${shown.map((g) => `<li style="${colorVars(g.hue)}"><span class="zb-name">${esc(g.name)}</span><span class="zb-dots"></span><span class="zb-val">sal ${hhmm(g.at)}</span></li>`).join("")}</ul>` +
            (gone.length > SHOW_GONE ? `<p class="zb-more">+${gone.length - SHOW_GONE} más</p>` : "")
          : `<p class="zb-msg">sin salidas</p>`)
    }
    const status = state === "live" ? `${count} en el sitio` : state === "invisible" ? "invisible" : state === "lost" ? "sin conexión" : "conectando"
    b.innerHTML =
      `<button class="zb-head" type="button" aria-expanded="${!min}" title="${min ? "desplegar" : "minimizar"}">` +
      `<span class="zb-site">zettelkasten</span>` +
      (min ? `<span class="zb-count" title="${esc(status)}">■ ${state === "live" ? count : "–"}</span>` : `<span class="zb-clock">${now()}</span>`) +
      `</button>` +
      `<div class="zb-body">${body}<div class="zb-foot"><span>■ ${esc(status)}</span><button class="zb-ghost" type="button">${state === "invisible" ? "aparecer" : "invisible"}</button></div></div>`
    if (!min) {
      const c = b.querySelector(".zb-clock")
      clock = setInterval(() => (c.textContent = now()), 1000)
    }
  }
  addEventListener("resize", () => minPref() === null && document.querySelector(".zk-board") && renderBoard())
  document.addEventListener("click", (e) => {
    if (!(e.target instanceof Element)) return
    if (e.target.closest(".zk-board .zb-head")) {
      try {
        localStorage.setItem(MIN_KEY, isMin() ? "0" : "1")
      } catch {}
      return renderBoard()
    }
    if (!e.target.closest(".zb-ghost")) return
    if (state === "invisible") {
      ls.set(false)
      state = "connecting"
      renderBoard()
      connect()
    } else {
      ls.set(true)
      state = "invisible"
      const s = ws
      ws = null
      try {
        s?.close()
      } catch {}
      lost()
    }
  })

  // ---- navigation / visibility ----
  let firstNav = true
  document.addEventListener("nav", () => {
    if (firstNav) {
      firstNav = false
      connect()
    } else {
      clearCursors()
      if (me) {
        here.set(me.id, { ...(here.get(me.id) || me), page: slug() })
        send({ t: "page", page: slug() })
        publishReaders()
      }
    }
    renderBoard()
  })
  document.addEventListener("visibilitychange", () => {
    if (!me) return
    here.set(me.id, { ...(here.get(me.id) || me), away: document.hidden })
    send({ t: "away", away: document.hidden })
    if (document.hidden) send({ t: "cx" })
  })
})()
