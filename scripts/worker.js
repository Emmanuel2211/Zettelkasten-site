// Cloudflare Worker in front of the static site (wrangler.jsonc "main").
// Existing files are served straight from the assets (this Worker doesn't even
// run for them). It only runs for URLs without a file:
//
// 1. 404s are made uncacheable. scripts/_headers gives the hashed files
//    (index-*.css, component-*.css, static/scripts/*…) "immutable, 1 year", and
//    Cloudflare applies those headers by URL, also when the file is MISSING, so
//    a 404 for /index-<hash>.css (a page loaded in the middle of a deploy) was
//    cached for a year as that stylesheet: the visitor kept seeing the page
//    without styles. Seen on an iPhone (Chrome), 2026-11-12.
//
// 2. /__presence: live presence (quartz/static/site.js §11). One Durable
//    Object (`Presence`, a single instance for the whole site) holds every
//    visitor's WebSocket. Each visitor gets a random mathematician's name; the
//    index shows who is here and on which note (arrivals) and who left
//    recently (departures), and visitors on the same page see each other's
//    cursors. Nothing personal is stored or sent: no IP, no location; only the
//    page being read and the cursor position, while connected. The recent
//    departures (name + time) are the only thing kept, in the object's storage.

const PRESENCE_PATH = "/__presence"

export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    if (url.pathname === PRESENCE_PATH) {
      if (request.headers.get("Upgrade") !== "websocket") return new Response("expected websocket", { status: 426 })
      return env.PRESENCE.get(env.PRESENCE.idFromName("site")).fetch(request)
    }
    const res = await env.ASSETS.fetch(request)
    if (res.ok || (res.status >= 300 && res.status < 400)) return res
    const out = new Response(res.body, res)
    out.headers.set("Cache-Control", "no-store")
    return out
  },
}

// ---------------------------------------------------------------------------
// Presence
// Messages (JSON), client → server:
//   {t:"hi", page, away}       first message: join (page = slug)
//   {t:"page", page}           SPA navigation
//   {t:"away", away}           tab hidden / visible again
//   {t:"c", x, y}              cursor, relative to the note column (site.js)
//   {t:"cx"}                   cursor left the window
// server → client:
//   {t:"state", me, here, gone}   on join: you, everyone here, recent departures
//   {t:"join", u} {t:"upd", u}    someone arrived / changed page or away state
//   {t:"leave", id, g}            someone left (g = their departure entry)
//   {t:"c", id, x, y} {t:"cx", id}  cursors, only between visitors on the same page
// ---------------------------------------------------------------------------
const MATHEMATICIANS = [
  "euler", "gauss", "noether", "riemann", "cantor", "hilbert", "ramanujan", "galois",
  "kovalévskaya", "lovelace", "germain", "fermat", "cauchy", "weierstrass", "bolzano",
  "dedekind", "lagrange", "laplace", "fourier", "abel", "jacobi", "poincaré", "turing",
  "gödel", "erdős", "hipatia", "euclides", "arquímedes", "pitágoras", "leibniz", "newton",
  "descartes", "pascal", "bernoulli", "hardy", "banach", "lebesgue", "borel", "kolmogórov",
  "márkov", "chebyshov", "grothendieck", "mirzakhani", "conway", "nash", "zermelo",
  "frege", "boole", "jordan", "cayley", "sylvester", "hamilton", "möbius", "klein",
  "lie", "minkowski", "von neumann", "shannon", "wiles", "perelmán", "fibonacci",
  "al-juarismi", "brahmagupta", "omar jayam", "napier", "wallis", "taylor", "maclaurin",
  "stirling", "legendre", "monge", "darboux", "dirichlet", "liouville", "hermite",
  "chern", "atiyah", "serre", "weil", "artin", "hausdorff", "cartan", "lefschetz",
]
const MAX_CURSOR_RATE = 30 // messages per second per visitor; more are dropped
const GONE_KEEP = 8 // recent departures kept
const GONE_TTL = 6 * 60 * 60 * 1000 // and only from the last 6 hours
const MAX_PAGE = 300

const clean = (page) => String(page ?? "").slice(0, MAX_PAGE)
const num = (v) => (Number.isFinite(v) ? Math.round(v * 10000) / 10000 : null)

export class Presence {
  constructor(ctx, env) {
    this.ctx = ctx
    this.rate = new Map() // ws -> {t, n}: cursor rate limit (memory only)
  }

  users() {
    return this.ctx.getWebSockets().map((ws) => ws.deserializeAttachment()).filter((u) => u && !u.left)
  }
  send(ws, msg) {
    try {
      ws.send(typeof msg === "string" ? msg : JSON.stringify(msg))
    } catch {}
  }
  broadcast(msg, { except, page } = {}) {
    const data = JSON.stringify(msg)
    for (const ws of this.ctx.getWebSockets()) {
      if (ws === except) continue
      if (page !== undefined && ws.deserializeAttachment()?.page !== page) continue
      this.send(ws, data)
    }
  }
  async gone() {
    const list = (await this.ctx.storage.get("gone")) || []
    const now = Date.now()
    return list.filter((g) => now - g.at < GONE_TTL)
  }

  async fetch(request) {
    const pair = new WebSocketPair()
    const [client, server] = Object.values(pair)
    this.ctx.acceptWebSocket(server)
    return new Response(null, { status: 101, webSocket: client })
  }

  async webSocketMessage(ws, raw) {
    if (typeof raw !== "string" || raw.length > 1000) return
    let m
    try {
      m = JSON.parse(raw)
    } catch {
      return
    }
    const me = ws.deserializeAttachment()

    if (m.t === "hi" && !me) {
      const taken = new Set(this.users().map((u) => u.name))
      const free = MATHEMATICIANS.filter((n) => !taken.has(n))
      const pool = free.length ? free : MATHEMATICIANS
      const name = pool[Math.floor(Math.random() * pool.length)]
      const u = {
        id: crypto.randomUUID().slice(0, 8),
        name,
        hue: Math.floor(Math.random() * 360),
        page: clean(m.page),
        away: !!m.away,
        at: Date.now(),
      }
      ws.serializeAttachment(u)
      const here = this.users()
      this.send(ws, { t: "state", me: u, here, gone: await this.gone() })
      this.broadcast({ t: "join", u }, { except: ws })
      return
    }
    if (!me) return

    if (m.t === "c") {
      const r = this.rate.get(ws) || { t: 0, n: 0 }
      const now = Date.now()
      if (now - r.t > 1000) (r.t = now), (r.n = 0)
      if (++r.n > MAX_CURSOR_RATE) return
      this.rate.set(ws, r)
      const x = num(m.x), y = num(m.y)
      if (x === null || y === null) return
      this.broadcast({ t: "c", id: me.id, x, y }, { except: ws, page: me.page })
      return
    }
    if (m.t === "cx") {
      this.broadcast({ t: "cx", id: me.id }, { except: ws, page: me.page })
      return
    }
    if (m.t === "page" || m.t === "away") {
      // leaving a page: its readers stop seeing this cursor
      if (m.t === "page") this.broadcast({ t: "cx", id: me.id }, { except: ws, page: me.page })
      const u = { ...me, ...(m.t === "page" ? { page: clean(m.page) } : { away: !!m.away }) }
      ws.serializeAttachment(u)
      this.broadcast({ t: "upd", u }, { except: ws })
    }
  }

  async webSocketClose(ws) {
    await this.leave(ws)
  }
  async webSocketError(ws) {
    await this.leave(ws)
  }
  async leave(ws) {
    const me = ws.deserializeAttachment()
    this.rate.delete(ws)
    try {
      ws.close()
    } catch {}
    if (!me || me.left) return
    ws.serializeAttachment({ ...me, left: true })
    const g = { name: me.name, hue: me.hue, at: Date.now() }
    const list = [g, ...(await this.gone())].slice(0, GONE_KEEP)
    await this.ctx.storage.put("gone", list)
    this.broadcast({ t: "leave", id: me.id, g }, { except: ws })
  }
}
