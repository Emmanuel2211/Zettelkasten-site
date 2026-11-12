# Contexto del proyecto: zettelkasten-site

Resumen de cómo se armó el sitio y de todo lo decidido. Sirve para seguir en otra computadora, o para pasárselo a Claude al empezar una sesión nueva: *"lee CONTEXTO.md y PUBLISHING.md"*.
Última actualización: 2026-11-05.

---

## 1. Qué es
- **Sitio:** https://zettelkastenciencias.cc
  - También en https://zettelkasten-site.emmanuelcd-2211.workers.dev
- **Fuente:** el vault de Obsidian en `~/Documentos/Zettelkasten`. Son unas 576 notas, en español y con mucha matemática.
- **Generador:** Quartz **v5** (config en YAML, plugins `@quartz-community/*` desde npm). Es la alternativa gratis a Obsidian Publish.
- **Repo:** privado en GitHub, `git@github.com:Emmanuel2211/Zettelkasten-site.git`. La rama principal es **`v5`**.
  - `origin` es tu repo.
  - `upstream` es `https://github.com/jackyzha0/quartz.git` (lo usa `npx quartz upgrade`).
- **Hosting:** un **Cloudflare Worker** (Workers Builds) conectado al repo. Cada push a `v5` lo recompila y lo despliega.
- **Fuera de alcance:** Dataview.

## 2. Flujo diario
1. Escribe en Obsidian.
2. Marca con `publish: true` las notas que quieras publicar, a mano o con `scripts/mark-publish.py`.
3. Para ver el sitio en local: `./scripts/publish.sh --preview` → http://localhost:8080
4. Para publicar: `./scripts/publish.sh` (o `./scripts/publish.sh "mensaje"`). Hace sync, luego un build de prueba, luego un chequeo de privacidad, y al final commit y push. Cloudflare despliega en 1–2 minutos.
   - Es un script de **bash**: `./scripts/publish.sh`. No se corre con `python` ni con `uv run`.

## 3. Montarlo en otra computadora (Linux)
```bash
# Node con nvm (Quartz v5 necesita Node ≥22 y npm ≥10.9.2; aquí usamos Node 24)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
nvm install 24 && nvm alias default 24
#   ¡Ojo! nvm no arranca si ~/.npmrc tiene una línea `prefix=`. Bórrala.

# TeX Live (para renderizar TikZ) y dvisvgm
sudo apt install texlive-latex-extra texlive-pictures texlive-science dvisvgm

# Repo
git clone git@github.com:Emmanuel2211/Zettelkasten-site.git ~/Documentos/Proyectos/zettelkasten-site
cd ~/Documentos/Proyectos/zettelkasten-site
git remote add upstream https://github.com/jackyzha0/quartz.git
npm ci                       # npm 11 pide aprobar scripts: esbuild y @parcel/watcher
npx quartz plugin install

# Identidad de git (para que GitHub reconozca los commits como tuyos)
git config --global user.name "Emmanuel"
git config --global user.email "emmanuelcruz22@ciencias.unam.mx"
```
- El **vault** también tiene que estar en esa máquina, en `~/Documentos/Zettelkasten`. Si está en otro lado: `VAULT=/ruta ./scripts/publish.sh`.
- Necesitas **Python 3.10 o más reciente**. El script usa solo la librería estándar y se corre con `python3 -I`.
- `.render-cache/` no está en git. En una máquina nueva los TikZ se renderizan de nuevo la primera vez, y para eso necesitas TeX Live.
- Configura tu llave SSH de GitHub en esa máquina para poder hacer push.

## 4. Estructura y archivos clave
| Archivo | Qué hace |
|---|---|
| `quartz.config.yaml` | Configuración del sitio: plugins, colores, fuentes, layout. `baseUrl: zettelkastenciencias.cc` |
| `quartz/styles/custom.scss` | Todos los estilos propios (detalle en §6) |
| `quartz/styles/vendor-pseudocode.scss` | CSS de KaTeX 0.16.22 + pseudocode 2.4.1, con las fuentes apuntando a `/static/katex/fonts/` |
| `quartz/static/fonts/lm/` | Latin Modern Roman (.otf), servida desde el propio sitio |
| `site-pages/index.md` | **La página de inicio.** Edítala aquí y **nunca** en `content/`, que se borra en cada sync |
| `content/` | **Lo genera el script.** No se edita a mano |
| `scripts/sync-vault.py` | Copia las notas públicas y las transforma (detalle en §5) |
| `scripts/render-pseudocode.mjs` | Lo llama sync-vault: convierte los bloques ```pseudo a HTML con pseudocode.js |
| `scripts/mark-publish.py` | Agrega o quita `publish: true` en el vault |
| `scripts/publish.sh` | Sync → build → chequeo → push |
| `scripts/never-publish.txt` | Lista negra: estas rutas no se publican nunca, aunque tengan `publish: true` |
| `scripts/examples/render-test.md` | Nota de ejemplo con TikZ y pseudocode |
| `wrangler.jsonc` | Configuración del Worker de Cloudflare (sirve la carpeta `./public`) |
| `PUBLISHING.md` | Guía corta del flujo |

## 5. `scripts/sync-vault.py`
- **Uso:** `python3 -I scripts/sync-vault.py [--dry-run] [--preview PATH…] [-v] [--content-dir DIR]`
- **Funcionamiento general:** borra y reconstruye `content/`. Copia las notas con `publish: true` (salvo las de la lista negra) y los adjuntos que esas notas incrustan: imágenes, PDFs, Excalidraw y `<img>` en HTML. Las copias se transforman; **el vault nunca se modifica**.
- **Transformaciones:**
  - `fix_inline_footnotes`: convierte `^[texto]` y `^[[[Nota]]]` (notas al pie en línea de Obsidian) en un superíndice numerado más una lista al final de la página.
    - Genera el HTML directamente, con el mismo marcado que GFM, porque las referencias GFM dentro de títulos de callout salían todas con el número "1".
  - `fix_folder_note_links`: un *folder note* como `Maths/Algebra/Algebra.md` se publica como `maths/algebra/index`. Por un bug de la resolución "shortest" de Quartz, los `[[Algebra]]` quedaban rotos; esta función los reescribe a `[[Maths/Algebra/index|Algebra]]`.
  - `fix_extra_image_embeds`: convierte `![[x.avif|center|500]]` en `<img src="x.avif" alt="center" width="720">`. El ancho se multiplica por `EXTRA_IMAGE_SCALE = 1.44`; el CSS `article img { max-width: 100% }` evita que se salga de la columna o del callout. El plugin OFM solo reconoce como imagen `.jxl .png .jpg .jpeg .gif .bmp .webp`; con cualquier otra extensión sale "Transclude of …". Los AVIF animados (de manim) se reproducen en loop, igual que en Obsidian. Las animaciones de manim usan fondo negro `#000000` (`FONDO` en `Claude/manim/estilo.py` del vault), igual que el tema oscuro del sitio.
  - Si el `<img>` queda solo en su línea, se agrega una línea vacía después. Sin ella, Markdown trata las líneas siguientes como HTML crudo y el `$…$` de un pie de imagen no se renderiza.
  - `fix_raw_html`: dentro del HTML crudo convierte `<span class="math">` en `math-inline` y `<div class="math">` en `math-display`, que son las únicas clases que MathJax reconoce al compilar. También pone una ruta absoluta en `<img src>`.
  - `fix_math_in_callouts`: agrega el `> ` que falta en las líneas de un `$$…$$` dentro de un callout.
  - `expand_callouts_with_images`: un callout colapsado (`> [!tipo]-`) que contiene una imagen se publica abierto (`+`), aunque sigue siendo plegable. Cuentan como imagen los embeds de imagen, AVIF y Excalidraw, los `<img>`, `![](…)` y los bloques ```tikz.
  - `fix_nested_callout_titles`: agrega una línea `>` vacía después del encabezado de cada callout. El plugin OFM ya lo hace, pero su regex solo reconoce un `>` en la columna 0. Por eso, en callouts anidados (`> > [!proof]`) o con un espacio antes del `>`, el cuerpo se pegaba al título.
  - `h1_to_title`: el `# H1` inicial pasa a ser el `title:` de la página. No lo hace si el H1 lleva `$ [ ] < >` o comillas invertidas.
  - `add_modified_date`: escribe `modified:` con el mtime real del archivo.
  - **TikZ** (```tikz): se compila con `latex` + `dvisvgm --no-fonts --exact-bbox`, usando el driver `pgfsys-dvisvgm.def`.
    - Se genera **dos veces**, una para el tema claro (fondo `#FBFAF9`) y otra para el oscuro (fondo `#000000`, texto blanco).
    - El resultado se escala ×1.5 y se inserta como `<img class="tikz tikz-light|tikz-dark">`. Las imágenes van en `content/tikz-svg/` y la caché en `.render-cache/`.
    - Paquetes: tikz-cd, pgfplots, circuitikz, chemfig, tikz-3dplot.
    - Se usa standalone **sin** la opción `tikz`, porque con ella solo salía el primer diagrama. Las líneas vacías se eliminan, porque rompían tikz-cd.
  - **Pseudocode** (```pseudo): se genera HTML estático. Las opciones se leen de `.obsidian/plugins/pseudocode-in-obs/data.json` (`jsSettings`): números de línea sin delimitador, sin líneas "end" y palabras clave en negrita.

## 6. Personalización (`quartz.config.yaml` + `custom.scss`)
- **General:**
  - Idioma `es-ES`; título `Zettelkasten`.
  - Colores, elegidos en el type lab (2026-11-11). El principal es `--secondary`: enlaces, título y marcadores de listas. El secundario es `--tertiary`: cursor, tags y subrayado de los enlaces.
    - **Claro**, "Carmesí y pizarra": principal `#9b2c42`, secundario `#4c6479`, fondo `#fbfaf9`.
    - **Oscuro**, "Petróleo y ámbar": principal `#6cc7bd`, secundario `#efb54a`, fondo negro puro `#000000` y texto `#eff2ff` (como turntrout.com).
  - **Tema oscuro por defecto:** si el visitante nunca usó el botón de tema, el script inline de `Head.tsx` pone `saved-theme="dark"` aunque su sistema esté en claro. Si lo cambia, el plugin lo guarda en `localStorage["theme"]` y desde entonces se respeta.
  - Fuentes: **TeX Gyre Pagella** (un clon de Palatino) para el texto, servida desde el sitio en `quartz/static/fonts/pagella/` como `.woff2` recortado con pyftsubset. Se eligió en lugar de Latin Modern, que se veía débil en modo claro. El código usa JetBrains Mono. Las ecuaciones siguen en Computer Modern, porque es la fuente de MathJax. El plugin `@quartz-themes/core` está **desactivado** porque sobrescribía las fuentes.
  - Zoom de 120% en pantallas de 800px o más (`html { font-size:120% }`), y `article` a `1.1rem`.
- **Rediseño "zen" (2026-11-11), inspirado en turntrout.com, jzhao.xyz, aarnphm.xyz y ssp.sh/brain:**
  - El tamaño de letra crece con el ancho de la ventana: `html { font-size: clamp(16px, 0.55vw + 12.5px, 22px) }` y `article` a 1.15rem (unos 23px en una laptop de 1366px, como en The Pond). Reemplaza al zoom fijo de 120%.
  - El cambio de tema claro/oscuro es un fundido de 0.45s con la View Transitions API (`site.js` envuelve el clic en `document.startViewTransition`). Mientras dura, se ignoran los clics: cada cambio dispara `themechange` y la gráfica reconstruye su canvas, así que repetir el clic muy rápido congelaba la página. Antes era un `* { transition }`, casi imperceptible y pesado en las páginas con mucho MathJax.
  - Enlaces internos minimalistas: color de acento, mismo grosor que el texto, sin fondo resaltado y con subrayado fino al pasar el mouse.
  - Cursor cuadrado (como el de jzhao.xyz) en todo el sitio, también sobre texto y matemáticas, y solo con mouse. Crece sobre los enlaces.
  - Modo zen (reader mode) activado por defecto. Si el visitante lo apaga, se recuerda en `localStorage["zen-mode"]`.
  - En escritorio, los paneles laterales miden 350px (con padding de 1.5rem, para que "Zettelkasten" quepa en una línea) y la página llega a 1680px. El index no tiene ancho máximo (`body[data-slug="index"]`).
  - **Hero del index: "Constelación de tus notas"** (fase 2, elegido en el hero lab). Va de fondo detrás del texto del index, se desvanece hacia abajo y tiene opacidad 0.55.
    - Usa las notas publicadas y sus enlaces reales, leídos de `static/contentIndex.json`, el mismo archivo que cargan la búsqueda y el grafo. Se actualiza solo al publicar.
    - Solo dibuja la componente conexa más grande, con un layout Fruchterman–Reingold calculado en el navegador. Es determinista y tarda unos milisegundos.
    - Las notas cercanas al cursor se encienden y aparece el título de la más cercana. Sin cursor, como en el celular, se mueve sola.
    - Código en `site.js` §4 y CSS `.constellation-hero`. Es un canvas fuera de `<body>` con `z-index: -1`.
  - El JS propio está en `quartz/static/site.js`. Se carga desde `quartz/components/Head.tsx` (bloque marcado "zettelkasten-site"), que es **un archivo del core de Quartz**: revísalo después de cada `npx quartz upgrade`.
- **Callouts propios:** `theorem` (con borde, en cursiva y sin icono), `proof` (verde menta) y `observation` (oliva).
  - Los callouts colapsados quedan realmente ocultos.
  - La columna del grid es `minmax(0,1fr)`, para que las ecuaciones anchas se desplacen en vez de recortarse.
- **Matemáticas:**
  - Se renderizan con MathJax, igual que en Obsidian.
  - El espacio alrededor de `$$` se controla con `--math-display-gap: 0.5em`.
- **Enlaces a notas no publicadas:** se ven como texto normal. Lo controlan `disableBrokenWikilinks` y el CSS de `a.internal.broken`.
- **Plugins:**
  - Búsqueda (Ctrl+K, texto completo).
  - Grafo local (profundidad 2) y global. No está en el index (`condition: not-index`), porque ahí va la constelación. Los tags ya no aparecen como nodos (`showTags: false`).
    - **Colores por materia:** el grafo es una copia local, `plugins/graph/` (de `@quartz-community/graph` 1.0.0), con dos parches de una línea documentados en `plugins/graph/PATCH.md`.
    - El color de cada nodo lo decide `window.__graphNodeColor` en `site.js` §5: primero el primer tag que corresponda a una materia y, si no hay, la carpeta. Hay 8 materias, cada una con un color para claro y otro para oscuro. Las notas de carpeta (`…/index`) son MOC. La nota actual se dibuja en `--dark`.
    - Debajo del grafo local hay una leyenda. Antes de actualizar el plugin, lee `PATCH.md`.
  - Explorer: al hacer clic en una carpeta se abre su MOC.
  - Excalidraw (`@quartz-community/obsidian-plugin-excalidraw`), backlinks, TOC, modo lectura y breadcrumbs.
- **Fechas:** se toman en el orden frontmatter → filesystem → git.

## 6b. Rendimiento
- **Caché:** `scripts/_headers` define el `Cache-Control` de los archivos estáticos. Los archivos con hash (`component-*`, `index-*`, `static/scripts/*`, `static/resource-*`), las fuentes, KaTeX y `tikz-svg/` se guardan un año como `immutable`. `contentIndex.json`, `site.js`, `videos/` e `images/` usan una caché corta con `stale-while-revalidate`.
  - Antes todo salía con `max-age=0, must-revalidate`, así que cada página volvía a consultar unos 40 archivos.
  - Quartz borra `public/` en cada build, así que el `build.command` de `wrangler.jsonc` copia el archivo a `public/_headers` antes de cada `wrangler deploy`.
- **Fuentes:** Pagella se sirve en `.woff2` recortado, unos 60 KB por estilo. La regular se precarga desde `Head.tsx`. Latin Modern sigue en `static/fonts/lm/`, pero ya no se usa.
- **Pendiente:** las notas con mucha matemática pesan 1–2 MB de HTML, porque MathJax usa `fontCache: "local"` y repite los trazos de cada glifo en cada ecuación.
  - Con `fontCache: global` bajan a un ~37%, pero `rehype-mathjax` no escribe la tabla de glifos y las ecuaciones salen en blanco.
  - Arreglarlo requiere un paso post-build que inyecte los `<defs>`; no está hecho.

## 7. Privacidad (tres capas)
1. sync-vault solo copia las notas con `publish: true`.
2. `scripts/never-publish.txt` bloquea rutas aunque estén marcadas. Incluye `Personal/`, `Passwords.md`, `Despensa y Gastos.md`, `nombres compañeros*`, `Notas Alex & Emma.md`, `Rutina del dia.md`, `Workout.md`, `Untitled*.md`, `Templates/`, entre otros. Además, `publish.sh` revisa `content/` contra esta lista antes de hacer push.
3. El plugin ExplicitPublish de Quartz descarta cualquier archivo sin `publish: true`.

## 8. `scripts/mark-publish.py`
Por defecto solo muestra lo que haría (dry-run). Para modificar el vault hace falta `--apply`.
```bash
python3 -I scripts/mark-publish.py Maths                 # muestra qué notas marcaría
python3 -I scripts/mark-publish.py Maths --apply         # las marca de verdad
python3 -I scripts/mark-publish.py --type zettel --tag algebra --apply
python3 -I scripts/mark-publish.py "Nota.md" --unpublish --apply
python3 -I scripts/mark-publish.py --undo                # deshace el último --apply
```
- Sin PATH, `--apply` **se niega** a tocar todo el vault a menos que pongas `--all`. Ya pasó un accidente así.
- Conserva las fechas de modificación de los archivos.
- `--undo` usa el registro `.render-cache/mark-publish-last.json`. Ese archivo es local de cada máquina.

## 9. Cloudflare (Workers Builds)
- Worker `zettelkasten-site` (el nombre tiene que coincidir con `wrangler.jsonc`).
- Rama de producción `v5`. Variable de entorno `NODE_VERSION=24`.
- Build: `npx quartz plugin install && npx quartz build`
- Deploy: `npx wrangler deploy`. Preview: `npx wrangler versions upload` (los preview builds están desactivados).
- workers.dev activado. Dominio propio `zettelkastenciencias.cc`.
- `wrangler.jsonc` usa `html_handling: auto-trailing-slash` y `not_found_handling: 404-page`.

## 10. Problemas que ya se resolvieron (por si vuelven a aparecer)
- **nvm no activaba:** había una línea `prefix=` en `~/.npmrc`. Se movió a `~/.npmrc.bak`.
- **npm 11 bloqueaba scripts de instalación:** hay que aprobar esbuild y @parcel/watcher.
- **Build fallido con "@import rules must precede":** se quitó el `@import` del CDN del CSS vendor.
- **TikZ en modo oscuro:** invertir los colores dejaba barras negras, así que se renderizan dos versiones.
- **`--serve` dejaba de recargar después de un sync:** hay que reiniciar el servidor (el sync borra `content/`).
- **`pkill` mató su propia shell:** usar `pkill -f "[q]uartz"`.
- **La página de inicio se perdió al editar `content/index.md`:** se edita en `site-pages/index.md`.
- **Commits sin foto en GitHub:** pasaba con el correo viejo `jessepinkman22@ciencias.unam.mx`. Ahora se usa `emmanuelcruz22@ciencias.unam.mx`, que debe estar verificado en GitHub → Settings → Emails. Los commits viejos se dejaron así.

## 11. Ideas o pendientes
- Opcional: otro idioma (inglés). Quartz no tiene i18n multi-sitio; habría que hacer un segundo sitio o una carpeta `/en`.
- Opcional: comentarios con giscus (el plugin `comments` está desactivado) o analytics (`analytics: null`).
- Actualizar Quartz: `npx quartz upgrade` y luego `npx quartz plugin install --latest`.
