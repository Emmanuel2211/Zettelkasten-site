#!/usr/bin/env python3
"""Copy the public part of the Obsidian vault into Quartz's content/ folder.

A note is copied only if:
  * its frontmatter contains `publish: true`, and
  * it does not match any pattern in scripts/never-publish.txt.

For every copied note, the files it embeds (![[image.png]], ![[draw.excalidraw]],
![](path/to/img.png), PDFs, ...) are copied too, so private attachments never
leave the vault unless a public note uses them.

Usage:
  python3 -I scripts/sync-vault.py                # normal sync
  python3 -I scripts/sync-vault.py --dry-run      # show what would happen
  python3 -I scripts/sync-vault.py --preview Maths/Algebra "Congruencias.md"
      # local preview only: also treat these notes/folders as published
      # (adds publish: true to the COPY, never touches the vault)

Environment: VAULT (default ~/Documentos/Zettelkasten).
"""

from __future__ import annotations

import argparse
import fnmatch
import os
import re
import shutil
import sys
from pathlib import Path, PurePosixPath

REPO = Path(__file__).resolve().parent.parent
CONTENT = REPO / "content"
SITE_PAGES = REPO / "site-pages"  # hand-written pages (index.md, ...) owned by the repo
DENY_FILE = REPO / "scripts" / "never-publish.txt"
VAULT = Path(os.environ.get("VAULT", "~/Documentos/Zettelkasten")).expanduser()

FRONTMATTER_RE = re.compile(r"\A---\r?\n(.*?)\r?\n---\r?\n?", re.S)
PUBLISH_RE = re.compile(r"^publish:\s*(true|yes)\s*$", re.I | re.M)
WIKI_EMBED_RE = re.compile(r"!\[\[([^\]|#^]+)(?:[#^][^\]|]*)?(?:\|[^\]]*)?\]\]")
WIKI_LINK_RE = re.compile(r"(?<!!)\[\[([^\]|#^]+)(?:[#^][^\]|]*)?(?:\|[^\]]*)?\]\]")
MD_EMBED_RE = re.compile(r"!\[[^\]]*\]\((?!https?://)([^)\s]+)(?:\s+\"[^\"]*\")?\)")
CODE_FENCE_RE = re.compile(r"^(```|~~~).*?^\1", re.S | re.M)


def load_deny_patterns() -> list[str]:
    pats = []
    for line in DENY_FILE.read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if line and not line.startswith("#"):
            pats.append(line.lower())
    return pats


def is_denied(rel: PurePosixPath, pats: list[str]) -> bool:
    s = str(rel).lower()
    for p in pats:
        if p.endswith("/"):
            if s.startswith(p) or f"/{p}" in f"/{s}":
                return True
        elif fnmatch.fnmatch(s, p) or fnmatch.fnmatch(rel.name.lower(), p):
            return True
    return False


def frontmatter(text: str) -> str | None:
    m = FRONTMATTER_RE.match(text)
    return m.group(1) if m else None


def is_published(text: str) -> bool:
    fm = frontmatter(text)
    return bool(fm and PUBLISH_RE.search(fm))


def force_publish(text: str) -> str:
    """Add publish: true to a note's frontmatter (used for --preview copies)."""
    fm = frontmatter(text)
    if fm is None:
        return "---\npublish: true\n---\n" + text
    if PUBLISH_RE.search(fm):
        return text
    return text.replace("---", "---\npublish: true", 1)


QUOTE_PREFIX_RE = re.compile(r"^((?:>\s?)+)")

# ---------------------------------------------------------------------------
# ```tikz and ```pseudo blocks are rendered HERE (locally, with your TeX Live /
# Node) so the website serves static SVG/HTML: no client-side JS, works with
# Quartz's SPA navigation, and Cloudflare doesn't need a TeX install.
# ---------------------------------------------------------------------------
CACHE = REPO / ".render-cache"
TIKZ_SCALE = 1.5
FENCE_OPEN_RE = re.compile(r"^(?P<q>(?:>[ \t]?)*)[ \t]*(?P<fence>`{3,}|~{3,})[ \t]*(?P<lang>tikz|pseudo)[ \t]*$")

# Same packages the Obsidian TikZJax plugin preloads.
# No `tikz` class option: that would put every tikzpicture/tikzcd on its own
# page (and only page 1 is converted). Without it the whole block is one image.
TIKZ_PREAMBLE = r"""\documentclass[border=2pt]{standalone}
\def\pgfsysdriver{pgfsys-dvisvgm.def}
\usepackage{tikz}
\usepackage{amsmath,amstext,amsfonts,amssymb,array}
\usepackage{pgfplots}\pgfplotsset{compat=1.18}
\usepackage{tikz-cd,tikz-3dplot,circuitikz,chemfig}
"""


def strip_quote(line: str, depth: int) -> str:
    for _ in range(depth):
        line = re.sub(r"^[ \t]*>[ \t]?", "", line, count=1)
    return line


def find_render_blocks(text: str):
    """Yield (start_line, end_line, lang, source, quote_prefix) for tikz/pseudo fences."""
    lines = text.split("\n")
    i = 0
    while i < len(lines):
        m = FENCE_OPEN_RE.match(lines[i])
        if not m:
            i += 1
            continue
        prefix, fence, lang = m.group("q"), m.group("fence"), m.group("lang")
        depth = prefix.count(">")
        close = re.compile(rf"^[ \t]*{re.escape(fence[0])}{{{len(fence)},}}[ \t]*$")
        body, j = [], i + 1
        while j < len(lines) and not close.match(strip_quote(lines[j], depth)):
            body.append(strip_quote(lines[j], depth))
            j += 1
        if j >= len(lines):  # unclosed fence: leave it alone
            return
        yield i, j, lang, "\n".join(body), prefix
        i = j + 1


def pseudo_options() -> dict:
    """jsSettings of the Obsidian 'Pseudocode' plugin, so the site renders like Obsidian."""
    import json

    f = VAULT / ".obsidian" / "plugins" / "pseudocode-in-obs" / "data.json"
    try:
        return json.loads(f.read_text(encoding="utf-8")).get("jsSettings", {})
    except (OSError, ValueError):
        return {}


def digest(lang: str, src: str) -> str:
    import hashlib

    import json

    extra = TIKZ_PREAMBLE if lang == "tikz" else json.dumps(pseudo_options(), sort_keys=True)
    return hashlib.sha256((lang + extra + src).encode()).hexdigest()[:16]


# Two renders per diagram, one per site theme. tikz-cd paints "crossing over"
# gaps and `description` labels with its background color, so each variant uses
# that theme's page background (keep in sync with quartz.config.yaml colors).
TIKZ_THEMES = {
    "light": r"\definecolor{qzbg}{HTML}{FBFAF9}\tikzcdset{background color=qzbg}",
    "dark": r"\definecolor{qzbg}{HTML}{17151A}\tikzcdset{background color=qzbg}"
            r"\AtBeginDocument{\color{white}}",
}


def render_tikz(src: str, theme: str = "light") -> tuple[Path | None, str]:
    import subprocess
    import tempfile

    h = digest("tikz", src + "\0" + TIKZ_THEMES[theme]) + f"-{theme}"
    out = CACHE / "tikz" / f"{h}.svg"
    if out.exists():
        return out, ""
    # Same clean-up the Obsidian TikZJax plugin does: blank lines are paragraph
    # breaks in real LaTeX and break tikzcd/matrices ("Missing $ inserted").
    src = "\n".join(l.strip() for l in src.replace("&nbsp;", "").split("\n") if l.strip())
    if r"\begin{document}" in src:
        pre, _, rest = src.partition(r"\begin{document}")
        body = rest.split(r"\end{document}")[0]
    else:
        pre, body = "", src
    doc = TIKZ_PREAMBLE + TIKZ_THEMES[theme] + "\n" + pre + "\n\\begin{document}\n" + body + "\n\\end{document}\n"
    with tempfile.TemporaryDirectory() as tmp:
        Path(tmp, "d.tex").write_text(doc, encoding="utf-8")
        try:
            r = subprocess.run(["latex", "-interaction=nonstopmode", "-halt-on-error", "d.tex"],
                               cwd=tmp, capture_output=True, text=True, timeout=120)
            if r.returncode != 0:
                err = [l for l in r.stdout.splitlines() if l.startswith("!")]
                return None, (err[0] if err else r.stdout[-300:])
            r = subprocess.run(["dvisvgm", "--no-fonts", "--exact-bbox", "-o", "d.svg", "d.dvi"],
                               cwd=tmp, capture_output=True, text=True, timeout=120)
            if r.returncode != 0 or not Path(tmp, "d.svg").exists():
                return None, r.stderr[-300:]
        except (OSError, subprocess.TimeoutExpired) as e:
            return None, str(e)
        out.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy(Path(tmp, "d.svg"), out)
    return out, ""


def render_pseudo_batch(sources: list[str]) -> dict[str, tuple[str | None, str]]:
    """Render all pseudocode sources (cached) with one Node call."""
    import json
    import subprocess

    results: dict[str, tuple[str | None, str]] = {}
    todo = []
    for src in sources:
        f = CACHE / "pseudo" / f"{digest('pseudo', src)}.html"
        if f.exists():
            results[src] = (f.read_text(encoding="utf-8"), "")
        elif src not in todo:
            todo.append(src)
    if todo:
        try:
            r = subprocess.run(["node", str(REPO / "scripts" / "render-pseudocode.mjs")], cwd=REPO,
                               input=json.dumps({"options": pseudo_options(), "sources": todo}), capture_output=True, text=True, timeout=300)
            rendered = json.loads(r.stdout) if r.returncode == 0 else [{"error": r.stderr[-300:]}] * len(todo)
        except (OSError, subprocess.TimeoutExpired, ValueError) as e:
            rendered = [{"error": str(e)}] * len(todo)
        for src, res in zip(todo, rendered):
            if "html" in res:
                f = CACHE / "pseudo" / f"{digest('pseudo', src)}.html"
                f.parent.mkdir(parents=True, exist_ok=True)
                f.write_text(res["html"], encoding="utf-8")
                results[src] = (res["html"], "")
            else:
                results[src] = (None, res.get("error", "unknown error"))
    return results


def render_blocks(notes: dict[PurePosixPath, str]) -> tuple[dict[PurePosixPath, str], set[Path], list[str]]:
    """Replace tikz/pseudo fences with rendered output. Returns new texts,
    SVG files to copy into content/tikz-svg/, and error messages."""
    pseudo_srcs = [src for t in notes.values() for _, _, lang, src, _ in find_render_blocks(t) if lang == "pseudo"]
    pseudo = render_pseudo_batch(pseudo_srcs) if pseudo_srcs else {}
    svgs: set[Path] = set()
    errors: list[str] = []
    out = {}
    for rel, text in notes.items():
        blocks = list(find_render_blocks(text))
        if not blocks:
            out[rel] = text
            continue
        lines = text.split("\n")
        for start, end, lang, src, prefix in reversed(blocks):
            if lang == "tikz":
                svg, err = render_tikz(src, "light")
                dark, err_dark = render_tikz(src, "dark") if svg else (None, "")
                err = err or err_dark
                if svg and dark:
                    svgs |= {svg, dark}
                    # raw <img>: Quartz would turn an .svg embed into <object>.
                    # CSS shows the variant matching the current theme.
                    repl = (f'{prefix}<img class="tikz tikz-light" alt="tikz" src="/tikz-svg/{svg.name}">'
                            f'<img class="tikz tikz-dark" alt="tikz" src="/tikz-svg/{dark.name}">')
            else:
                html, err = pseudo.get(src, (None, "not rendered"))
                if html:
                    repl = f'{prefix}<div class="pseudocode-block">{html}</div>'
            if err:
                errors.append(f"{rel} (line {start + 1}, {lang}): {err.strip()}")
                continue  # keep the original code block
            lines[start:end + 1] = [repl]
        out[rel] = "\n".join(lines)
    return out, svgs, errors


def fix_math_in_callouts(text: str) -> str:
    """Obsidian lets lines inside a $$...$$ block that opened in a callout omit
    the leading '> '. Standard Markdown ends the callout there, which breaks the
    equation. Re-add the prefix to those lines (in the copy only)."""
    out, prefix, in_math = [], "", False
    for line in text.split("\n"):
        if in_math:
            if not line.lstrip().startswith(">"):
                line = prefix + line
            if line.count("$$") % 2 == 1:
                in_math = False
        else:
            m = QUOTE_PREFIX_RE.match(line)
            if m and line.count("$$") % 2 == 1:
                prefix, in_math = m.group(1), True
        out.append(line)
    return "\n".join(out)


def h1_to_title(text: str) -> str:
    """Obsidian hides the inline title, so notes start with their own `# H1`.
    Quartz already prints the page title, so move that H1 into `title:`."""
    fm = frontmatter(text)
    if fm is not None and re.search(r"^title:", fm, re.M):
        return text
    m = FRONTMATTER_RE.match(text)
    head, body = (text[: m.end()], text[m.end():]) if m else ("", text)
    h = re.match(r"\s*# (.+?)\s*#*\s*(?:\n|$)", body)
    if not h or re.search(r"[$\[\]<>`]", h.group(1)):
        return text
    title = h.group(1).replace('"', '\\"')
    body = body[h.end():]
    if head:
        head = head.replace("---", f'---\ntitle: "{title}"', 1)
    else:
        head = f'---\ntitle: "{title}"\n---\n'
    return head + body


def add_modified_date(text: str, src: Path) -> str:
    """Store the vault file's mtime in the copy so the site shows real dates
    (git dates on Cloudflare would just be the sync time)."""
    fm = frontmatter(text)
    if fm is not None and re.search(r"^(modified|updated|lastmod):", fm, re.M):
        return text
    from datetime import datetime, timezone

    stamp = datetime.fromtimestamp(src.stat().st_mtime, timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
    if fm is None:
        return f"---\nmodified: {stamp}\n---\n" + text
    return text.replace("---", f"---\nmodified: {stamp}", 1)


class VaultIndex:
    """Obsidian-style 'shortest path' resolution of link targets."""

    def __init__(self, root: Path):
        self.root = root
        self.by_name: dict[str, list[PurePosixPath]] = {}
        self.all: set[PurePosixPath] = set()
        for dirpath, dirnames, filenames in os.walk(root):
            dirnames[:] = [d for d in dirnames if not d.startswith(".")]
            for fn in filenames:
                rel = PurePosixPath(Path(dirpath, fn).relative_to(root).as_posix())
                self.all.add(rel)
                self.by_name.setdefault(fn.lower(), []).append(rel)

    def resolve(self, target: str, from_note: PurePosixPath) -> PurePosixPath | None:
        target = target.strip().replace("%20", " ")
        if not target:
            return None
        candidates = [target]
        if not PurePosixPath(target).suffix or target.endswith(".excalidraw"):
            candidates = [target + ".md", target]
        for cand in candidates:
            # relative to the note, then relative to the vault root
            for base in (from_note.parent, PurePosixPath(".")):
                p = PurePosixPath(os.path.normpath(str(base / cand)))
                if p in self.all:
                    return p
            # shortest path: match by file name (and path suffix if given)
            name = PurePosixPath(cand).name.lower()
            hits = self.by_name.get(name, [])
            if "/" in cand:
                hits = [h for h in hits if str(h).lower().endswith(cand.lower())]
            if hits:
                return sorted(hits, key=lambda h: (len(h.parts), str(h)))[0]
        return None


def strip_code(text: str) -> str:
    return CODE_FENCE_RE.sub("", text)


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--dry-run", action="store_true", help="report only, write nothing")
    ap.add_argument("--preview", nargs="*", default=[], metavar="PATH",
                    help="vault notes/folders to treat as published for a local preview")
    ap.add_argument("-v", "--verbose", action="store_true")
    ap.add_argument("--content-dir", metavar="DIR",
                    help="write here instead of content/ (e.g. for previews; build with `quartz build -d DIR`)")
    args = ap.parse_args()
    global CONTENT
    if args.content_dir:
        CONTENT = Path(args.content_dir).expanduser().resolve()

    if not VAULT.is_dir():
        print(f"Vault not found: {VAULT}", file=sys.stderr)
        return 1

    deny = load_deny_patterns()
    index = VaultIndex(VAULT)
    preview = [PurePosixPath(p.rstrip("/")) for p in args.preview]

    def in_preview(rel: PurePosixPath) -> bool:
        return any(rel == p or p in rel.parents for p in preview)

    notes: dict[PurePosixPath, str] = {}
    denied_but_marked: list[PurePosixPath] = []
    for rel in sorted(index.all):
        if rel.suffix != ".md" or rel.name.endswith(".excalidraw.md"):
            continue
        text = (VAULT / rel).read_text(encoding="utf-8", errors="replace")
        wanted = is_published(text) or in_preview(rel)
        if not wanted:
            continue
        if is_denied(rel, deny):
            denied_but_marked.append(rel)
            continue
        notes[rel] = force_publish(text) if in_preview(rel) else text

    assets: dict[PurePosixPath, PurePosixPath] = {}  # rel path -> note that embeds it
    missing: list[tuple[PurePosixPath, str]] = []
    private_embeds: list[tuple[PurePosixPath, PurePosixPath]] = []
    private_links = 0
    for rel, text in notes.items():
        body = strip_code(text)
        for target in WIKI_EMBED_RE.findall(body) + MD_EMBED_RE.findall(body):
            hit = index.resolve(target, rel)
            if hit is None:
                missing.append((rel, target))
            elif hit.suffix == ".md" and not hit.name.endswith(".excalidraw.md"):
                if hit not in notes:
                    private_embeds.append((rel, hit))
            elif is_denied(hit, deny):
                private_embeds.append((rel, hit))
            else:
                assets.setdefault(hit, rel)
        for target in WIKI_LINK_RE.findall(body):
            hit = index.resolve(target, rel)
            if hit is not None and hit.suffix == ".md" and hit not in notes:
                private_links += 1

    print(f"Vault:  {VAULT}")
    print(f"Notes to publish:  {len(notes)}" + (f"  (incl. preview of {len(preview)} path(s))" if preview else ""))
    print(f"Assets to copy:    {len(assets)}")
    print(f"Links to unpublished notes (rendered as plain text): {private_links}")
    if denied_but_marked:
        print("\n⚠ Marked for publishing but blocked by never-publish.txt:")
        for r in denied_but_marked:
            print(f"   - {r}")
    if private_embeds:
        print(f"\n⚠ {len(private_embeds)} embed(s) of unpublished notes/blocked files (will show as broken):")
        for note, hit in private_embeds[: 40 if args.verbose else 10]:
            print(f"   - {note}  ->  {hit}")
    if missing:
        print(f"\n⚠ {len(missing)} embed(s) not found in the vault:")
        for note, t in missing[: 40 if args.verbose else 10]:
            print(f"   - {note}  ->  {t}")

    if args.dry_run:
        if args.verbose:
            print("\nNotes:")
            for r in notes:
                print(f"   {r}")
        print("\n(dry run, nothing written)")
        return 0

    # Hand-written repo pages (index.md, ...) go through the same rendering.
    site_pages: dict[PurePosixPath, str] = {}
    if SITE_PAGES.is_dir():
        for p in SITE_PAGES.rglob("*.md"):
            site_pages[PurePosixPath(p.relative_to(SITE_PAGES).as_posix())] = p.read_text(encoding="utf-8")
    site_pages, site_svgs, site_errors = render_blocks(site_pages)

    notes, svgs, render_errors = render_blocks(notes)
    svgs |= site_svgs
    render_errors += site_errors
    if render_errors:
        print(f"\n⚠ {len(render_errors)} tikz/pseudo block(s) failed to render (left as code):")
        for e in render_errors:
            print(f"   - {e}")

    # Rebuild content/ from scratch so unpublished notes disappear from the site.
    if CONTENT.exists():
        shutil.rmtree(CONTENT)
    CONTENT.mkdir()
    if svgs:
        (CONTENT / "tikz-svg").mkdir()
        for svg in svgs:
            # 1pt = 1px in browsers, which looks tiny; scale like TikZJax does.
            data = svg.read_text(encoding="utf-8")
            data = re.sub(r"(<svg[^>]*?\bwidth=')([\d.]+)pt'",
                          lambda m: f"{m.group(1)}{float(m.group(2)) * TIKZ_SCALE:.3f}pt'", data, count=1)
            data = re.sub(r"(<svg[^>]*?\bheight=')([\d.]+)pt'",
                          lambda m: f"{m.group(1)}{float(m.group(2)) * TIKZ_SCALE:.3f}pt'", data, count=1)
            (CONTENT / "tikz-svg" / svg.name).write_text(data, encoding="utf-8")
    for rel, text in notes.items():
        dst = CONTENT / rel
        dst.parent.mkdir(parents=True, exist_ok=True)
        text = add_modified_date(h1_to_title(fix_math_in_callouts(text)), VAULT / rel)
        dst.write_text(text, encoding="utf-8")
        shutil.copystat(VAULT / rel, dst)  # keep modified dates
    for rel in assets:
        dst = CONTENT / rel
        dst.parent.mkdir(parents=True, exist_ok=True)
        src = VAULT / rel
        if rel.name.endswith(".excalidraw.md"):
            # Excalidraw drawings are pages too; mark them so ExplicitPublish keeps them.
            dst.write_text(force_publish(src.read_text(encoding="utf-8")), encoding="utf-8")
            shutil.copystat(src, dst)
        else:
            shutil.copy2(src, dst)
    if SITE_PAGES.is_dir():
        shutil.copytree(SITE_PAGES, CONTENT, dirs_exist_ok=True,
                        ignore=shutil.ignore_patterns("*.md"))
    for rel, text in site_pages.items():
        (CONTENT / rel).parent.mkdir(parents=True, exist_ok=True)
        (CONTENT / rel).write_text(text, encoding="utf-8")

    print(f"\n✓ Wrote {len(notes)} notes, {len(assets)} assets and {len(svgs)} TikZ diagrams to {CONTENT}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
