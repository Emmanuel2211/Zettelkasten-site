# Contexto del proyecto: zettelkasten-site

Resumen de cómo se armó el sitio y de todo lo decidido. Sirve para seguir en otra computadora, o para pasárselo a Claude al empezar una sesión nueva: *"lee CONTEXTO.md y PUBLISHING.md"*.
Última actualización: 2026-11-05.

---

## 1. Qué es
- **Sitio:** https://zettelkastenciencias.cc
  - También en https://zettelkasten-site.emmanuelcd-2211.workers.dev
- **Fuente:** el vault de Obsidian en `~/Documentos/Zettelkasten`. Son unas 576 notas, en español y con mucha matemática.
- **Generador:** Quartz **v5** (config en YAML, plugins `@quartz-community/*` desde npm). Es la alternativa gratis a Obsidian Publish.
- **Repo:** privado en GitHub, `git@github.com:Tequila-Sunset22/Zettelkasten-site.git`. La rama principal es **`v5`**.
  - `origin` es tu repo.
  - `upstream` es `https://github.com/jackyzha0/quartz.git` (lo usa `npx quartz upgrade`).
  - El usuario de GitHub cambió de `Emmanuel2211` a `Tequila-Sunset22` (2026-11-12). En cada máquina: `git remote set-url origin git@github.com:Tequila-Sunset22/Zettelkasten-site.git`.
- **Hosting:** un **Cloudflare Worker** (Workers Builds) conectado al repo. Cada push a `v5` lo recompila y lo despliega.
- **Fuera de alcance:** Dataview.

## 2. Flujo diario
1. Escribe en Obsidian.
2. Marca con `publish: true` las notas que quieras publicar, a mano o con `scripts/mark-publish.py`.
3. Para ver el sitio en local: `./scripts/publish.sh --preview` → http://localhost:8080
4. Para publicar: `./scripts/publish.sh` (o `./scripts/publish.sh "mensaje"`). Hace sync, luego un build de prueba, luego un chequeo de privacidad, y al final commit y push. Cloudflare despliega en 1–2 minutos.
   - Es un script de **bash**: `./scripts/publish.sh`. No se corre con `python` ni con `uv run`.
   - **SSH:** el script busca el agente del llavero de GNOME (`$XDG_RUNTIME_DIR/gcr/ssh`). Si la llave no está cargada, pide la passphrase **al inicio** (`ssh-add -t 8h`) y luego el push es automático. Si no hay agente, arranca uno temporal.
     - El push corre con `BatchMode=yes`: si falta la llave, falla al instante en lugar de quedarse esperando hasta que GitHub corta la conexión (pasa a los ~2 minutos).
   - **Avisos:** al terminar, con éxito o con error, manda una notificación de escritorio (`notify-send`, se ve con mako) y una campanita en la terminal.

## 3. Montarlo en otra computadora (Linux)
```bash
# Node con nvm (Quartz v5 necesita Node ≥22 y npm ≥10.9.2; aquí usamos Node 24)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
nvm install 24 && nvm alias default 24
#   ¡Ojo! nvm no arranca si ~/.npmrc tiene una línea `prefix=`. Bórrala.

# TeX Live (para renderizar TikZ) y dvisvgm
sudo apt install texlive-latex-extra texlive-pictures texlive-science dvisvgm

# Repo
git clone git@github.com:Tequila-Sunset22/Zettelkasten-site.git ~/Documentos/Proyectos/zettelkasten-site
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
  - `rename_idea_callouts` (corre antes que `fold_callouts`): `> [!tip]± **Idea Intuitiva.**` se publica como `> [!tip|idea]± **Idea Intuitiva.**`. Desde 2026-11-12 el vault ya dice "Idea Intuitiva." (31 callouts en 26 notas, renombrados conservando el mtime), igual que el snippet `intuitivo` de nvim (`~/.dotfiles/nvim/.config/nvim/lua/luasnip/markdown.lua`) y la skill `revisar-apuntes`. Un `**Idea.**` viejo también se acepta y se renombra. El `|idea` es metadata de callout: Quartz lo renderiza como `data-callout-metadata="idea"`, y `custom.scss` lo usa para quitarles el fondo en modo oscuro, igual que a los callouts con AVIF. Los `[!tip]` que no empiezan con `**Idea.**` no se tocan.
  - `fold_callouts` (regla desde 2026-11-12, reemplaza a `expand_callouts_with_images`): todos los callouts plegables (`> [!tipo]+` o `-`) se publican **colapsados** (`-`), salvo las **observaciones** (`ALWAYS_OPEN_CALLOUTS`) y los que contienen una imagen, que se publican **abiertos** (`+`). Cuentan como imagen los embeds de imagen, AVIF o Excalidraw, los `<img>`, las imágenes Markdown y los bloques ```tikz (`CALLOUT_IMAGE_RE`). Un callout que contiene otro con imagen también se abre. Los callouts sin `+`/`-` no se tocan, y el vault conserva sus propios `+`/`-`. **Los `[!theorem]`** (definiciones, lemas, teoremas, corolarios…) pierden el `+`/`-` y **no se pueden plegar** (`NEVER_FOLD_CALLOUTS`). La excepción es `> [!theorem|alt]-`: otra forma de enunciar un teorema que ya está en la misma nota, que se queda plegable y colapsado. Por ahora solo hay uno, en `Maths/Algebra/Ecuaciones Diafontinas.md`, marcado en el vault el 2026-11-12.
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
  - Idioma `es-ES`; título del sitio **`Zettelkasten`**, también en la pestaña (`pageTitleSuffix`). Va centrado en el menú izquierdo. (Entre el 11 y el 12 de nov. de 2026 se llamó `Whirling-in-Rags`; se regresó a `Zettelkasten`.)
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
  - **Hero del index: "Constelación de tus notas"** (fase 2, elegido en el hero lab). Va de fondo detrás del texto del index, se desvanece hacia abajo y tiene opacidad 0.68 en oscuro y 0.92 en claro. En claro, las líneas y los nodos en reposo también son más opacos (`col.k` en `site.js`).
    - Usa las notas publicadas y sus enlaces reales, leídos de `static/contentIndex.json`, el mismo archivo que cargan la búsqueda y el grafo. Se actualiza solo al publicar.
    - Solo dibuja la componente conexa más grande, con un layout Fruchterman–Reingold calculado en el navegador (~50 ms). Es determinista y se guarda en `localStorage["zk-constellation-v1"]`, con una firma del grafo: solo se recalcula cuando cambian las notas o los enlaces.
    - Las notas cercanas al cursor se encienden y aparece el título de la más cercana (solo fuera del texto; ver abajo). Sin mouse, como en el celular, no hay brillo.
    - **Clic en un nodo abre su nota** (navegación SPA; Ctrl/Cmd/Shift+clic en otra pestaña). Cuenta si el mouse está a ≤14 px del nodo (`HIT`): el nodo se marca con un anillo, su título sale en el color de acento y el cursor se vuelve de enlace. Solo con mouse.
    - **Rendimiento (2026-11-12):** antes redibujaba todo el grafo en cada cuadro, sin parar (60–144 por segundo), con un `color-mix()` por arista; en algunas PCs causaba lag y subía los ventiladores. Ahora el grafo en reposo se dibuja **una vez** en un canvas oculto (al cargar, al cambiar el tamaño o el tema); cada cuadro solo lo copia y pinta encima los nodos encendidos. El bucle se detiene cuando el brillo termina de seguir al mouse: en reposo son 0 cuadros. Se quitó el vaivén de los nodos (obligaba a redibujar siempre) y el canvas se limita a ~4 Mpx.
    - **Vaivén solo cuando hay alguien:** los nodos se mecen desde cada movimiento del mouse, scroll, toque o tecla, durante 8 s (`IDLE_MS`). Luego frenan en ~2 s y no se gasta nada. Mientras se mecen se redibuja todo a 30 cuadros/s (`FPS`) y a resolución 1x: lo caro eran los píxeles (canvas al doble de resolución), no los nodos. Medido con render por software: 112% de un núcleo antes; ahora ~15–20% meciéndose y ~1–2% quieta.
    - **Respaldo:** `const DRIFT = !REDUCED` en `site.js` §4. Con `DRIFT = false` queda la versión quieta (sin vaivén, resolución completa, 0 cuadros en reposo).
    - Código en `site.js` §4 y CSS `.constellation-hero`. Es un canvas fuera de `<body>` con `z-index: -1`.
    - Desde la página de inicio estilo aarnphm es `position: fixed` y ocupa toda la ventana: se queda en su sitio (sigue girando) mientras el texto pasa encima.
    - Opacidad 0.45 en oscuro y 0.5 en claro (en claro, además, el texto del index usa `--dark`). El brillo **solo sigue al mouse real sobre espacio vacío** (§4, `st.on` y `st.amp`). Sobre el texto, los menús o un enlace (selector `QUIET`) se apaga por completo, y mientras está apagado salta al cursor en vez de barrer la pantalla. Sin mouse (celular) no hay brillo. Se probó un recorrido automático tras 4 s de inactividad y se quitó (2026-11-12). Antes: sobre el texto ignoraba el cursor y solo muestra títulos de nodos con el cursor real sobre espacio vacío. El selector usa `.sidebar > *` y no `.sidebar`, porque en el index las columnas laterales están vacías pero ocupan su lugar, y los nodos detrás de ellas no reaccionaban: antes, al ir a pulsar un enlace se encendían nodos y nombres debajo y estorbaban la lectura.
  - **Menús laterales** (`site.js` §7):
    - **Izquierdo, en escritorio:** un "Índice" de MOC en lugar del explorador. Se arma desde `contentIndex.json`, así que los MOC nuevos aparecen solos. Hay una entrada por materia con su nombre en español y un punto del color del MOC en el grafo; los MOC extra van debajo, y se resalta la materia de la página actual.
    - **Izquierdo, en el celular:** el explorador completo sigue en el menú ☰ (`display: mobile-only`).
    - **Derecho:** primero la Tabla de Contenidos, que sigue la lectura (sección actual resaltada y barra de progreso con `--toc-progress`); luego "Más Enlaces:" (los retroenlaces, renombrados por JS) y al final el grafo.
    - En modo zen, los menús aparecen y desaparecen con un fundido de 0.8 s.
  - El JS propio está en `quartz/static/site.js`. Se carga desde `quartz/components/Head.tsx` (bloque marcado "zettelkasten-site"), que es **un archivo del core de Quartz**: revísalo después de cada `npx quartz upgrade`.
- **Página de inicio y páginas del sitio (2026-11-11, estilo aarnphm.xyz):** viven en `site-pages/` y se copian a `content/` siempre, aunque no tengan `publish: true`.
  - `index.md`: sin título (`article-title` con `condition: not-index`) y sin fecha (`content-meta` también con `condition: not-index`). Columna angosta centrada de 34rem, en tipografía monoespaciada (`--codeFont`, 0.8rem, como la ruta `~/`; prueba, 2026-11-12), y todo el bloque (texto y escudo) centrado verticalmente en la ventana (`.center` en flex con `min-height: 100dvh`). Lleva el texto de bienvenida; `ctrl + k` es un `<button class="open-search">` (un `<a href="#">` no servía: el router SPA lo atrapaba y cerraba la búsqueda). El correo es un `.mail-link` con la dirección al revés en `data-m`, que `site.js` §8 convierte en `mailto:` para que los bots no la lean del HTML. Al final hay una fila de enlaces estilo terminal (`.landing-links`, con `./` delante) y el colofón (`.colophon`): el escudo de la Facultad (2.6rem de ancho; `quartz/static/escudo-fc.svg`, minificado con svgo y usado como `mask`, así toma el gris del tema) y el año.
  - **Sin menú izquierdo en el index** (escritorio y celular): un CSS al final de `custom.scss` oculta todo el menú menos la caja de búsqueda, que debe seguir en el DOM para que `ctrl + k` y el botón del index abran la búsqueda. Fuerza `opacity: 1`, porque el modo zen desvanece los menús y escondía también la búsqueda. La rejilla conserva las dos columnas de 350px, así que el texto sigue centrado. No hay botones visibles: **el escudo es el interruptor de tema** (`<button class="escudo theme-toggle">`; `site.js` §8 pulsa el botón `.darkmode` oculto, así se conserva el fundido de §2).
  - `content.md`: lista automática de materias, sus MOC y el número de notas (`.moc-list`, armada en `site.js` §8c desde `contentIndex.json` con las mismas materias que §5).
  - `user_manual.md` (manual con humor) y `cool_resources.md`.
  - "Estructura de Datos" aparece sin enlace en el index: todavía no hay notas de computación. Cuando las haya, agregar la materia a `SUBJECTS` en `site.js` §5 (carpeta, tags y colores).
- **Ruta tipo terminal** en todas las páginas: breadcrumbs con `rootName: "~"` y `spacerSymbol: "/"`, en `--codeFont` pequeña (`~/Maths/Calculus/Antiderivada`); en el index se ve `~/`. Va en la esquina superior izquierda de la página, como en aarnphm (`position: absolute` sobre `.page`): en escritorio en todas las páginas y en el celular solo en el index, porque en las notas ahí está la barra del menú ☰. Muestra los nombres reales de las carpetas.
- **Metadatos y pie:** solo la fecha (`content-meta` con `showReadingTime: false`). El plugin `footer` está desactivado (ya no dice "Creado con Quartz"); el índice termina con su colofón.
- **Animaciones manim (AVIF), 2026-11-12:**
  - **Zoom al hacer clic** (`site.js` §9): una capa a pantalla completa en la que la animación crece desde su lugar en la nota (técnica FLIP: solo se animan `transform` y la opacidad) hasta el 72% del ancho (96% en el celular) o el 75% del alto, sin quedar nunca más chica que en la nota. En la nota, el AVIF ocupa todo el ancho de la columna o del callout, respetando sus márgenes (`width: 100%`, ignora el `|500` del embed). Los AVIF son de 720p (calidad `m` de `render.sh`, CRF 30): ampliados en pantallas de alta densidad se ven algo pixelados, y para evitarlo hay que renderizarlos a 1080p. Se cierra con un clic, con Esc o al navegar. El clic no pliega el callout que la contiene. Lleva cursor `zoom-in`, y el cursor cuadrado crece encima.
  - **Callouts con AVIF sin fondo en modo oscuro:** `.callout:has(img[src$=".avif"])` con `--bg: transparent`, para que el negro del video (`FONDO = "#000000"` en `Claude/manim/estilo.py`) se funda con la página. Conserva el borde. En modo claro se mantiene el fondo. Si un callout tiene otro callout anidado con un AVIF, el exterior también pierde el fondo.
- **Callouts propios:** `theorem` (con borde, en cursiva y sin icono), `proof` (verde menta) y `observation` (oliva).
  - Los callouts colapsados quedan realmente ocultos.
  - La columna del grid es `minmax(0,1fr)`, para que las ecuaciones anchas se desplacen en vez de recortarse.
- **Matemáticas:**
  - Se renderizan con MathJax, igual que en Obsidian.
  - El espacio alrededor de `$$` se controla con `--math-display-gap: 0.5em`.
- **Sin vista previa al pasar el mouse sobre un enlace:** `enablePopovers: false` (2026-11-11).
- **Subrayado de enlaces estilo aarnphm:** siempre visible, delgado (1px, offset 0.18em) y del color del enlace al 40%; al pasar el mouse se vuelve `--tertiary`. Es `text-decoration` puro, sin costo de rendimiento. Las filas `./content …` no lo llevan.
- **Enlaces `./content ./user_manual ./cool_resources` del index:** en `--secondary` y subrayados como los demás enlaces (en gris no se notaba que eran enlaces). El `./` queda gris y sin subrayado.
- **`content`, `user_manual` y `cool_resources` sin título ni fecha** (CSS por `data-slug`; la ruta `~/content` ya las nombra).
- **Enlaces a notas no publicadas:** se ven como texto normal. Lo controlan `disableBrokenWikilinks` y el CSS de `a.internal.broken`.
- **Plugins:**
  - Búsqueda (Ctrl+K, texto completo).
  - Grafo local (profundidad 2) y global. No está en el index (`condition: not-index`), porque ahí va la constelación. Los tags ya no aparecen como nodos (`showTags: false`).
    - **Colores por materia:** el grafo es una copia local, `plugins/graph/` (de `@quartz-community/graph` 1.0.0), con tres parches pequeños documentados en `plugins/graph/PATCH.md`.
    - El color de cada nodo lo decide `window.__graphNodeColor` en `site.js` §5. La materia sale **primero de la carpeta**, que es la materia real. Los tags solo cuentan para notas fuera de las carpetas de materia, porque eran poco fiables (muchas notas sin tag, `calulus`, notas de lineal con tag `algebra`).
    - Hay 7 materias, cada una con un color para claro y otro para oscuro.
    - Los **MOC** (tag `moc`, o nota de carpeta con contenido) llevan el color de su materia: un 35% más claro en oscuro y un 35% más oscuro en claro.
    - La nota actual se dibuja en `--dark`. No hay leyenda. Antes de actualizar el plugin, lee `PATCH.md`.
    - **Arrastrar rápido un nodo ya no abre su nota.** El plugin navegaba si el arrastre duraba < 500 ms, aunque el nodo se hubiera movido. Ahora solo navega si además se movió ≤ 5 px (tercer parche de `PATCH.md`).
  - Explorer: al hacer clic en una carpeta se abre su MOC.
    - Es una copia local, `plugins/explorer/` (de `@quartz-community/explorer` 1.0.0), con un parche en `plugins/explorer/PATCH.md`. El plugin leía `contentIndex.json` como `e.content || e`, y la página `content` del sitio le daba ese `e.content`: fallaba (`Error building file trie … e.slug is undefined`) y el menú ☰ del celular salía **vacío**.
  - Excalidraw (`@quartz-community/obsidian-plugin-excalidraw`), backlinks, TOC, modo lectura y breadcrumbs.
- **Índice izquierdo en árbol (2026-11-12):** estilo terminal (`~/`, ramas `├─ └─` dibujadas con bordes): materia → secciones del MOC → notas. Sale de los encabezados y enlaces de cada MOC: `scripts/sync-vault.py` (`build_moc_tree`) escribe `content/moc-tree.json`, con rutas del vault que `site.js` §7 traduce a slugs con `contentIndex.json` (`filePath`).
  - Un `# Título` al principio del MOC no cuenta como sección. Los encabezados anidan por nivel, y las listas con sangría se ven anidadas.
  - Clic en el nombre: abre la página (la nota del encabezado si es un enlace, o el MOC en ese `#ancla`) y despliega. La flecha ▸ solo pliega/despliega. Las carpetas abiertas se guardan en `localStorage["zk-tree-open"]`; la nota actual se resalta y sus carpetas se abren solas.
  - En el celular, el mismo árbol reemplaza la lista de archivos del explorador en el menú ☰.
- **Páginas de carpeta con menú derecho:** `Algebra.md`, `Algebra Lineal.md`, etc. (notas con el nombre de su carpeta) se publican como página de carpeta, y esas tenían `right: []`. Ahora tienen grafo, contenido y enlaces como cualquier nota (`byPageType.folder` en `quartz.config.yaml`).
- **Layout en monitores (`Head.tsx` + `site.js` §10 + "Layout on monitors" en `custom.scss`):** con el ancho de la **pantalla** (no de la ventana) se calcula el ancho que tiene la nota con la ventana maximizada (`--zk-note`, máx. 44rem) y el tamaño de letra (`--zk-sw`). Así, a media pantalla la nota se ve igual.
  - `html.zk-wide`: menú · nota · menú. `html.zk-narrow` (no caben los menús): la nota conserva su ancho y los menús son cajones que se abren con ☰ (izquierda) y ≡ (derecha); se cierran con Esc, clic fuera o al navegar.
  - Pantallas < 1024px (celulares, tablets chicas): el layout normal de Quartz.
  - Ancho de menús, separación y alineación (`side`, `gap`, `align` en el script de `Head.tsx`): se eligen con el lab `lab-layout.html` (copiarlo a `public/` después del build; no se publica).
- **Fechas:** se toman en el orden frontmatter → filesystem → git.

## 6b. Rendimiento
- **Caché:** `scripts/_headers` define el `Cache-Control` de los archivos estáticos. Los archivos con hash (`component-*`, `index-*`, `static/scripts/*`, `static/resource-*`), las fuentes, KaTeX y `tikz-svg/` se guardan un año como `immutable`. `contentIndex.json`, `site.js`, `videos/` e `images/` usan una caché corta con `stale-while-revalidate`.
  - Antes todo salía con `max-age=0, must-revalidate`, así que cada página volvía a consultar unos 40 archivos.
  - `site.js` se carga como `/static/site.js?v=<hash>`. `Head.tsx` calcula el hash del contenido en cada build, así que cualquier cambio cambia el URL y se puede guardar en caché un año.
    - Antes tenía 1 hora más `stale-while-revalidate`, y un navegador podía seguir usando la versión vieja; así no apareció la constelación del index después de publicarla.
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
- **Worker propio (`scripts/worker.js`, `"main"` en `wrangler.jsonc`, binding `ASSETS`), 2026-11-12:** los archivos que existen se sirven directo de los assets (el Worker ni corre). Solo corre para URLs sin archivo y les pone `Cache-Control: no-store`. Se probó en local con `wrangler dev` (wrangler 4.20.0).

## 10. Problemas que ya se resolvieron (por si vuelven a aparecer)
- **nvm no activaba:** había una línea `prefix=` en `~/.npmrc`. Se movió a `~/.npmrc.bak`.
- **npm 11 bloqueaba scripts de instalación:** hay que aprobar esbuild y @parcel/watcher.
- **Build fallido con "@import rules must precede":** se quitó el `@import` del CDN del CSS vendor.
- **TikZ en modo oscuro:** invertir los colores dejaba barras negras, así que se renderizan dos versiones.
- **`--serve` dejaba de recargar después de un sync:** hay que reiniciar el servidor (el sync borra `content/`).
- **`pkill` mató su propia shell:** usar `pkill -f "[q]uartz"`.
- **La página de inicio se perdió al editar `content/index.md`:** se edita en `site-pages/index.md`.
- **Commits sin foto en GitHub:** pasaba con el correo viejo `jessepinkman22@ciencias.unam.mx`. Ahora se usa `emmanuelcruz22@ciencias.unam.mx`, que debe estar verificado en GitHub → Settings → Emails. Los commits viejos se dejaron así.

- **La carpeta `excalidraw` del explorador llevaba a un 404:** la carpeta no tiene página propia, y en modo oscuro el 404 se ve casi como una página negra. Se ocultó del explorador con CSS; los dibujos siguen dentro de las notas que los usan.
- **Google Fonts devolvía HTTP 400 en cada página:** el plugin `quartz-fonts` con `fontOrigin: googleFonts` pedía una familia llamada literalmente `"TeX Gyre Pagella", Palatino, serif`. Ahora usa `fontOrigin: local`; JetBrains Mono la sigue cargando `configuration.theme`.
- **iPhone/Safari: al abrir una nota desde el menú, se quedaba la barra de carga y una pantalla negra.** La nota sí cargaba, pero el menú de pantalla completa nunca se cerraba y el scroll seguía bloqueado (`mobile-no-scroll`).
  - Causa: el plugin del explorador solo cierra el menú si `boton.checkVisibility()` es verdadero, justo después de quitarle `display:none`. Safari responde con el estilo viejo, y en iOS < 17.4 esa función no existe.
  - Arreglo: `site.js` §6. En el siguiente cuadro de animación después de cada `nav`, si el botón del menú móvil se ve, cierra el menú. Se probó con WebKit emulando un iPhone 13.
- **Una visitante en iPhone (Chrome, iOS 17.3.1) veía el sitio sin estilos: fondo negro, enlaces azules, solo el HTML. aarnphm.xyz sí le cargaba (2026-11-12).**
  - Causa: `_headers` pone `immutable, max-age=1 año` según la URL (`/index-*`, `/component-*`, `/static/scripts/*`…), y Cloudflare lo aplica **también a los 404**. Un 404 de `/index-<hash>.css` se guardaba un año en el navegador (y en la caché del edge: `cf-cache-status: HIT`) como si fuera la hoja de estilos. Puede pasar si una página se carga a media publicación, con el HTML de una versión y el CSS de otra.
  - Descartado: `@layer` (iOS 17.3 lo soporta, y aarnphm también lo usa), las variantes de URL con o sin `/` final y la página 404 (las rutas son absolutas), y `checkVisibility` (ya lo cubre §6; probado quitándola en WebKit).
  - Arreglo: `scripts/worker.js` (ver §9). Para quien ya lo tenga guardado: al publicar con CSS nuevo cambian los hashes y se arregla solo. Si no, se borra la caché del navegador o se abre en una pestaña de incógnito.
- **Aviso en consola de `static.cloudflareinsights.com/beacon.min.js` (CORS / integrity):** es el script de Cloudflare Web Analytics, que Cloudflare inyecta solo (no está en el repo). Lo bloquean los bloqueadores de anuncios y la protección antirrastreo del navegador. No afecta al sitio; si no se usan las estadísticas, se apaga en Cloudflare → Analytics & Logs → Web Analytics.
- **Pruebas con navegadores (Playwright):** `uv run --with playwright python -m playwright install chromium firefox webkit`. WebKit (el motor de Safari) necesita además `sudo apt install libmanette-0.2-0 libenchant-2-2`.

## 11. Ideas o pendientes
- Opcional: otro idioma (inglés). Quartz no tiene i18n multi-sitio; habría que hacer un segundo sitio o una carpeta `/en`.
- Opcional: comentarios con giscus (el plugin `comments` está desactivado) o analytics (`analytics: null`).
- Actualizar Quartz: `npx quartz upgrade` y luego `npx quartz plugin install --latest`.
