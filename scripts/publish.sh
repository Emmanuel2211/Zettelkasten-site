#!/usr/bin/env bash
# Publish the Zettelkasten: sync public notes -> test build -> commit & push.
# Cloudflare Pages rebuilds the site automatically after the push.
#
#   ./scripts/publish.sh                 # sync, build check, push
#   ./scripts/publish.sh "mensaje"       # custom commit message
#   ./scripts/publish.sh --preview       # sync + local server at http://localhost:8080 (no push)
set -euo pipefail
cd "$(dirname "$0")/.."

export NVM_DIR="$HOME/.nvm"
# shellcheck disable=SC1091
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" >/dev/null && nvm use --silent default >/dev/null

echo "→ Syncing public notes from the vault…"
python3 -I scripts/sync-vault.py

if [ "${1:-}" = "--preview" ]; then
  exec npx quartz build --serve
fi

echo "→ Test build…"
npx quartz build >/tmp/quartz-build.log 2>&1 || { tail -30 /tmp/quartz-build.log; echo "✗ Build failed, nothing pushed."; exit 1; }
grep -E "Emitted|Done processing" /tmp/quartz-build.log || true

# Last safety check: no blocked file may be in the site.
if python3 -I - <<'EOF'
import fnmatch, pathlib, sys
pats = [l.strip().lower() for l in open("scripts/never-publish.txt", encoding="utf-8") if l.strip() and not l.startswith("#")]
bad = []
for p in pathlib.Path("content").rglob("*"):
    rel = p.relative_to("content").as_posix().lower()
    for pat in pats:
        if (pat.endswith("/") and (rel + "/").startswith(pat)) or fnmatch.fnmatch(rel, pat) or fnmatch.fnmatch(p.name.lower(), pat):
            bad.append(rel)
print("\n".join(bad)); sys.exit(1 if bad else 0)
EOF
then :; else echo "✗ Blocked files found in content/ — aborting."; exit 1; fi

echo "→ Commit & push…"
npx quartz sync --no-pull -m "${1:-update notes $(date +%F)}"
echo "✓ Pushed. Cloudflare will deploy in ~1–2 minutes."
