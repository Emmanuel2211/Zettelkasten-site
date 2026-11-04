# Publicar el Zettelkasten

Vault: `~/Documentos/Zettelkasten` → this repo (`content/` is generated, never edit it by hand).

## Daily workflow

1. Write in Obsidian as usual.
2. Mark the notes you want online with `publish: true` in their frontmatter, or use the helper:
   ```bash
   python3 -I scripts/mark-publish.py Maths                         # dry run
   python3 -I scripts/mark-publish.py --type zettel --tag algebra --apply
   python3 -I scripts/mark-publish.py "Nota.md" --unpublish --apply
   python3 -I scripts/mark-publish.py --undo                       # reverse the last --apply
   ```
3. Preview locally: `./scripts/publish.sh --preview` → http://localhost:8080
4. Publish: `./scripts/publish.sh` (sync → test build → commit & push → Cloudflare deploys).

## Privacy: three layers
1. `scripts/sync-vault.py` copies only `publish: true` notes plus the images/PDFs/drawings they embed.
2. `scripts/never-publish.txt` blocks paths even if they're marked (Personal/, Passwords.md, …). Edit it freely.
3. Quartz's ExplicitPublish filter drops anything without `publish: true` at build time.

Links to unpublished notes render as plain text (their *title* is still visible in the sentence).

## What the sync does to the copies (never to the vault)
- `# H1` at the top becomes the page `title:` (Obsidian hides the inline title, Quartz doesn't).
- Writes `modified:` from the file's real mtime (accurate dates on Cloudflare).
- Fixes `$$…$$` blocks inside callouts whose lines lack the `> ` prefix.
- Renders ```` ```tikz ```` with your local TeX Live → SVG (cached in `.render-cache/`).
  Same packages as Obsidian TikZJax: tikz-cd, pgfplots, circuitikz, chemfig, tikz-3dplot.
- Renders ```` ```pseudo ```` (pseudocode-in-obs syntax) to static HTML with pseudocode.js.
- Example of both: `scripts/examples/render-test.md` (copy it into `site-pages/` to see it).

## Where things live
| What | File |
|---|---|
| Site config, plugins, colors, fonts | `quartz.config.yaml` |
| Callouts theorem/proof/observation, lists, TikZ/pseudocode CSS | `quartz/styles/custom.scss` |
| Home page | `site-pages/index.md` |
| Latin Modern fonts | `quartz/static/fonts/lm/` |

## Cloudflare Pages settings
- Build command: `git fetch --unshallow || true; npx quartz plugin install && npx quartz build`
- Output directory: `public` · Production branch: `v5` · Env var: `NODE_VERSION=24`

## Upgrading Quartz
`npx quartz upgrade` (pulls from the `upstream` remote), then `npx quartz plugin install --latest`.
