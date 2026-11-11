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
