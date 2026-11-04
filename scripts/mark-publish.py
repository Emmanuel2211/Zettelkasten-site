#!/usr/bin/env python3
"""Add (or remove) `publish: true` in the frontmatter of vault notes.

DRY RUN by default: it only lists what would change. Add --apply to write.
Notes matching scripts/never-publish.txt are always skipped.

Select notes by any combination of (a note must match ALL given filters):
  PATH...          vault-relative files or folders (default: whole vault)
  --type zettel    frontmatter `type:` value (repeatable)
  --tag algebra    frontmatter tag (repeatable, any of them)

Examples:
  python3 -I scripts/mark-publish.py Maths                       # preview
  python3 -I scripts/mark-publish.py Maths --apply
  python3 -I scripts/mark-publish.py --type zettel --tag algebra --tag calculus --apply
  python3 -I scripts/mark-publish.py "Congruencias.md" --unpublish --apply
  python3 -I scripts/mark-publish.py --undo        # reverse the last --apply run
"""

from __future__ import annotations

import argparse
import json
import importlib.util
import os
import re
import sys
from pathlib import Path, PurePosixPath

HERE = Path(__file__).resolve().parent
spec = importlib.util.spec_from_file_location("sync_vault", HERE / "sync-vault.py")
sv = importlib.util.module_from_spec(spec)
spec.loader.exec_module(sv)  # reuse VAULT, deny list and frontmatter helpers

TYPE_RE = re.compile(r"^type:\s*['\"]?([^'\"\n]+?)['\"]?\s*$", re.M)


def tags_of(fm: str) -> set[str]:
    tags: set[str] = set()
    m = re.search(r"^tags:[ \t]*(.*)$", fm, re.M)
    if not m:
        return tags
    inline = m.group(1).strip()
    if inline:
        tags |= {t.strip(" '\"#") for t in inline.strip("[]").split(",") if t.strip(" '\"")}
    for line in fm[m.end():].split("\n")[1:]:
        lm = re.match(r"^\s*-\s*(.+)$", line)
        if not lm:
            break
        tags.add(lm.group(1).strip(" '\"#"))
    return {t.lower() for t in tags}


LOG = HERE.parent / ".render-cache" / "mark-publish-last.json"


def undo_last() -> int:
    """Reverse exactly the files changed by the last --apply run."""
    if not LOG.exists():
        print("Nothing to undo (no previous --apply run recorded).")
        return 1
    last = json.loads(LOG.read_text(encoding="utf-8"))
    action, files = last["action"], last["files"]
    done = 0
    for rel in files:
        f = sv.VAULT / rel
        if not f.exists():
            continue
        text = f.read_text(encoding="utf-8")
        if action == "publish":       # undo = remove the line the script inserted
            if not text.startswith("---\npublish: true\n"):
                continue
            new = "---\n" + text[len("---\npublish: true\n"):]
        else:                          # undo an --unpublish = add it back
            if sv.is_published(text):
                continue
            new = sv.force_publish(text)
        st = f.stat()
        f.write_text(new, encoding="utf-8")
        os.utime(f, (st.st_atime, st.st_mtime))
        done += 1
    LOG.unlink()
    what = "removed publish: true from" if action == "publish" else "re-added publish: true to"
    print(f"Undo: {what} {done} of {len(files)} note(s) from the last run.")
    return 0


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("paths", nargs="*")
    ap.add_argument("--type", action="append", default=[])
    ap.add_argument("--tag", action="append", default=[])
    ap.add_argument("--unpublish", action="store_true", help="remove publish: true instead")
    ap.add_argument("--apply", action="store_true", help="actually modify the vault files")
    ap.add_argument("--all", action="store_true",
                    help="allow --apply on the WHOLE vault when no PATH is given (safety switch)")
    ap.add_argument("--undo", action="store_true",
                    help="reverse the last --apply run (uses .render-cache/mark-publish-last.json)")
    args = ap.parse_args()
    if args.undo:
        return undo_last()
    if args.apply and not args.paths and not args.all:
        print("Refusing to --apply to the whole vault: no PATH given.\n"
              "Pass a folder/file (e.g. Maths), or add --all if you really mean every note.",
              file=sys.stderr)
        return 2

    vault = sv.VAULT
    deny = sv.load_deny_patterns()
    roots = [vault / p for p in args.paths] or [vault]
    want_types = {t.lower() for t in args.type}
    want_tags = {t.lower() for t in args.tag}

    files: list[Path] = []
    for r in roots:
        if r.is_file():
            files.append(r)
        elif r.is_dir():
            for dp, dns, fns in os.walk(r):
                dns[:] = [d for d in dns if not d.startswith(".")]
                files += [Path(dp, f) for f in fns if f.endswith(".md") and not f.endswith(".excalidraw.md")]
        else:
            print(f"not found: {r}", file=sys.stderr)

    changed = skipped = 0
    touched: list[str] = []
    for f in sorted(files):
        rel = PurePosixPath(f.relative_to(vault).as_posix())
        if sv.is_denied(rel, deny):
            skipped += 1
            continue
        text = f.read_text(encoding="utf-8")
        fm = sv.frontmatter(text) or ""
        if want_types:
            m = TYPE_RE.search(fm)
            if not m or m.group(1).strip().lower() not in want_types:
                continue
        if want_tags and not (tags_of(fm) & want_tags):
            continue
        published = sv.is_published(text)
        if args.unpublish:
            if not published:
                continue
            new = re.sub(r"^publish:\s*(true|yes)\s*\n", "", text, count=1, flags=re.I | re.M)
        else:
            if published:
                continue
            new = sv.force_publish(text)
        changed += 1
        print(("  - " if args.unpublish else "  + ") + str(rel))
        if args.apply:
            st = f.stat()
            f.write_text(new, encoding="utf-8")
            os.utime(f, (st.st_atime, st.st_mtime))  # keep the note's real modified date
            touched.append(str(rel))

    if args.apply and touched:
        LOG.parent.mkdir(parents=True, exist_ok=True)
        LOG.write_text(json.dumps({"action": "unpublish" if args.unpublish else "publish",
                                   "files": touched}, ensure_ascii=False, indent=1), encoding="utf-8")
    verb = "unpublished" if args.unpublish else "marked publish: true"
    print(f"\n{changed} note(s) {'' if args.apply else 'would be '}{verb}; {skipped} blocked by never-publish.txt")
    if not args.apply and changed:
        print("Dry run — re-run with --apply to write the changes.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
