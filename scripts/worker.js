// Cloudflare Worker in front of the static site (wrangler.jsonc "main").
//
// Why it exists: scripts/_headers gives the hashed files (index-*.css,
// component-*.css, static/scripts/*…) "Cache-Control: immutable, 1 year".
// Cloudflare applies those headers by URL, also when the file is MISSING, so a
// 404 for /index-<hash>.css (e.g. a page loaded in the middle of a deploy,
// when the HTML and the CSS come from different versions) was cached for a
// year, in the browser and at Cloudflare's edge, as that stylesheet: the
// visitor kept seeing the page without any styles (black page, plain blue
// links) until they cleared their cache. Seen on an iPhone (Chrome), 2026-11-12.
//
// Existing files are served straight from the assets (this Worker doesn't
// even run for them). It only runs for URLs without a file, and makes those
// responses never cacheable, so a miss heals itself on the next load.
export default {
  async fetch(request, env) {
    const res = await env.ASSETS.fetch(request)
    if (res.ok || (res.status >= 300 && res.status < 400)) return res
    const out = new Response(res.body, res)
    out.headers.set("Cache-Control", "no-store")
    return out
  },
}
