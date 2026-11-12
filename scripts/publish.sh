#!/usr/bin/env bash
# Publish the Zettelkasten: sync public notes -> test build -> commit & push.
# Cloudflare rebuilds the site automatically after the push.
#
#   ./scripts/publish.sh                 # sync, build check, push
#   ./scripts/publish.sh "mensaje"       # custom commit message
#   ./scripts/publish.sh --preview       # sync + local server at http://localhost:8080 (no push)
#
# SSH: the key is unlocked at the START (only if the agent doesn't have it
# yet), never in the middle of the push. GitHub drops an SSH connection that
# doesn't authenticate within ~2 minutes, so typing the passphrase late made
# the push fail. A desktop notification (+ terminal bell) says when it's done.
set -euo pipefail
cd "$(dirname "$0")/.."

# ---------------------------------------------------------------- notifications
notify() { # notify <urgency> <title> <body>
  printf '\a'
  command -v notify-send >/dev/null 2>&1 &&
    notify-send -a "Zettelkasten" -u "$1" "$2" "${3:-}" 2>/dev/null || true
}
fail() {
  echo "✗ $1"
  notify critical "✗ Publicación fallida" "$1"
  exit 1
}
# any unexpected error (set -e) also notifies
trap 'notify critical "✗ Publicación fallida" "Error en la línea $LINENO de publish.sh. Revisa la terminal."' ERR

# ---------------------------------------------------------------- ssh agent
ensure_ssh_key() {
  local runtime="${XDG_RUNTIME_DIR:-/run/user/$(id -u)}"
  # GNOME keyring's agent (gcr-ssh-agent) if the shell isn't using any agent
  if [ -z "${SSH_AUTH_SOCK:-}" ] && [ -S "$runtime/gcr/ssh" ]; then
    export SSH_AUTH_SOCK="$runtime/gcr/ssh"
  fi
  local rc=0
  ssh-add -l >/dev/null 2>&1 || rc=$?
  if [ "$rc" -eq 2 ]; then # no agent at all: start one just for this run
    eval "$(ssh-agent -s)" >/dev/null
    trap 'ssh-agent -k >/dev/null 2>&1 || true' EXIT
    rc=1
  fi
  if [ "$rc" -eq 1 ]; then # agent without keys: unlock now, keep it 8 h
    echo "→ Desbloquea tu llave SSH (se recuerda 8 horas; el push será automático):"
    notify normal "Zettelkasten" "Escribe la passphrase de tu llave SSH en la terminal."
    ssh-add -t 8h || fail "No se pudo desbloquear la llave SSH."
  fi
}

export NVM_DIR="$HOME/.nvm"
# shellcheck disable=SC1091
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" >/dev/null && nvm use --silent default >/dev/null

if [ "${1:-}" != "--preview" ]; then
  ensure_ssh_key
fi

echo "→ Syncing public notes from the vault…"
python3 -I scripts/sync-vault.py

if [ "${1:-}" = "--preview" ]; then
  trap - ERR
  exec npx quartz build --serve
fi

echo "→ Test build…"
npx quartz build >/tmp/quartz-build.log 2>&1 || { tail -30 /tmp/quartz-build.log; fail "El build falló; no se subió nada."; }
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
then :; else fail "Hay archivos bloqueados en content/; se canceló."; fi

echo "→ Commit & push…"
# BatchMode: never ask for a password here; if the key isn't available, fail
# right away (instead of waiting at a prompt until GitHub times out).
GIT_SSH_COMMAND="ssh -o BatchMode=yes" npx quartz sync --no-pull -m "${1:-update notes $(date +%F)}" ||
  fail "El push falló (¿llave SSH o red?). Los cambios quedaron en el commit local; vuelve a correr el script."
echo "✓ Pushed. Cloudflare will deploy in ~1–2 minutes."
notify normal "✓ Zettelkasten publicado" "Cloudflare lo despliega en 1–2 minutos."
