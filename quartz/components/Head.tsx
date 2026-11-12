import { i18n } from "../i18n"
import { FullSlug, getFileExtension, joinSegments, pathToRoot } from "../util/path"
import { CSSResourceToStyleElement, JSResourceToScriptElement } from "../util/resources"
import { googleFontHref, googleFontSubsetHref } from "../util/theme"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { unescapeHTML } from "../util/escape"
import { createHash } from "node:crypto"
import { readFileSync } from "node:fs"
import { join } from "node:path"

// zettelkasten-site: cache-busting version for quartz/static/site.js. It is
// served with a long cache (scripts/_headers), so the URL changes whenever the
// file does (`?v=<hash of its content>`); the HTML is always revalidated.
let siteJsVersion = "0"
try {
  siteJsVersion = createHash("sha256")
    .update(readFileSync(join(process.cwd(), "quartz", "static", "site.js")))
    .digest("hex")
    .slice(0, 10)
} catch {}

const ZK_LAYOUT = '(function(){var d=document.documentElement;window.__zkLayout=function(){var o=window.__zkLayoutOpts||{},sw=o.sw||screen.width||innerWidth,vw=o.vw||innerWidth;d.style.setProperty("--zk-sw",sw+"px");if(sw<1024){d.classList.remove("zk-wide","zk-narrow");return}var rem=Math.min(22,Math.max(16,sw*.0055+12.5)),min=o.min||220,max=o.max||380,gap=o.gap==null?24:o.gap,pad=32,note=Math.round(Math.min(44*rem,sw-2*min-2*gap-pad)),room=Math.floor((vw-note-2*gap-pad)/2),wide=room>=min,side=Math.max(min,Math.min(max,room));d.style.setProperty("--zk-note",note+"px");d.style.setProperty("--zk-side",side+"px");d.style.setProperty("--zk-gap",gap+"px");d.dataset.zkAlign=o.align||"edge";d.classList.toggle("zk-wide",wide);d.classList.toggle("zk-narrow",!wide)};__zkLayout()})()'

export default (() => {
  const Head: QuartzComponent = ({
    cfg,
    fileData,
    externalResources,
    ctx,
  }: QuartzComponentProps) => {
    const titleSuffix = cfg.pageTitleSuffix ?? ""
    const title =
      (fileData.frontmatter?.title ?? i18n(cfg.locale).propertyDefaults.title) + titleSuffix
    const description =
      fileData.frontmatter?.socialDescription ??
      fileData.frontmatter?.description ??
      unescapeHTML(fileData.description?.trim() ?? i18n(cfg.locale).propertyDefaults.description)

    const { css, js, additionalHead } = externalResources

    const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
    const path = url.pathname as FullSlug
    const baseDir = fileData.slug === "404" ? path : pathToRoot(fileData.slug!)
    const iconPath = joinSegments(baseDir, "static/icon.png")

    // Url of current page
    const socialUrl =
      fileData.slug === "404" ? url.toString() : joinSegments(url.toString(), fileData.slug!)

    const usesCustomOgImage = ctx.cfg.plugins.emitters.some((e) => e.name === "CustomOgImages")
    const ogImageDefaultPath = `https://${cfg.baseUrl}/static/og-image.png`

    const coreStylesheet = css[0]?.content
    const coreScript = js.find(
      (r) => r.loadTime === "beforeDOMReady" && r.contentType === "external",
    )

    return (
      <head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        {coreStylesheet && <link rel="preload" href={coreStylesheet} as="style" />}
        {coreScript && coreScript.contentType === "external" && (
          <link rel="preload" href={coreScript.src} as="script" />
        )}
        {cfg.theme.cdnCaching && cfg.theme.fontOrigin === "googleFonts" && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link rel="stylesheet" href={googleFontHref(cfg.theme)} />
            {cfg.theme.typography.title && (
              <link rel="stylesheet" href={googleFontSubsetHref(cfg.theme, cfg.pageTitle)} />
            )}
          </>
        )}
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* zettelkasten-site: layout from the SCREEN width, before the first
            paint (quartz/static/site.js §10). On a monitor (screen ≥ 1024px)
            the note ALWAYS has its full size: 44rem (968px with the 22px base
            of big screens, like in Obsidian), narrower only on screens where
            even 220px menus don't fit (1366px: 830px). The menus take what is
            left, 220–380px, against the screen edges, 24px from the note; with
            less than 220px per side (e.g. half a screen) they become drawers
            (html.zk-narrow). Chosen in the layout lab, 2026-11-12. */}
        <script dangerouslySetInnerHTML={{ __html: ZK_LAYOUT }} />

        <meta name="og:site_name" content={cfg.pageTitle}></meta>
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:image:alt" content={description} />

        {!usesCustomOgImage && (
          <>
            <meta property="og:image" content={ogImageDefaultPath} />
            <meta property="og:image:url" content={ogImageDefaultPath} />
            <meta name="twitter:image" content={ogImageDefaultPath} />
            <meta
              property="og:image:type"
              content={`image/${getFileExtension(ogImageDefaultPath) ?? "png"}`}
            />
          </>
        )}

        {cfg.baseUrl && (
          <>
            <meta property="twitter:domain" content={cfg.baseUrl}></meta>
            <meta property="og:url" content={socialUrl}></meta>
            <meta property="twitter:url" content={socialUrl}></meta>
          </>
        )}

        <link rel="icon" href={iconPath} />
        <meta name="description" content={description} />
        <meta name="generator" content="Quartz" />

        {css.map((resource) => CSSResourceToStyleElement(resource, true))}
        {js
          .filter((resource) => resource.loadTime === "beforeDOMReady")
          .map((res) => JSResourceToScriptElement(res, true))}
        {/* zettelkasten-site: before first paint, (1) dark theme for visitors who
            never picked one (the darkmode plugin's prescript.js, which runs just
            before, follows the OS; a choice made with the toggle is saved in
            localStorage["theme"] and wins), (2) zen mode by default. Then
            site.js (cursor, zen default, theme fade). See CONTEXTO.md §6. */}
        <script
          data-persist
          dangerouslySetInnerHTML={{
            __html: `try{var d=document.documentElement;if(!localStorage.getItem("theme"))d.setAttribute("saved-theme","dark");if(localStorage.getItem("zen-mode")!=="off")d.setAttribute("reader-mode","on")}catch(e){}`,
          }}
        />
        <script src={`/static/site.js?v=${siteJsVersion}`} defer data-persist />
        <link
          rel="preload"
          href="/static/fonts/pagella/texgyrepagella-regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {additionalHead.map((resource) => {
          if (typeof resource === "function") {
            return resource(fileData)
          } else {
            return resource
          }
        })}
      </head>
    )
  }

  return Head
}) satisfies QuartzComponentConstructor
