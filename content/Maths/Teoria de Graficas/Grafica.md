---
modified: 2026-08-17T19:16:45Z
title: "Gráfica"
publish: true
---
> [!theorem] **Definición.** (Gráfica)
>
> Un **gráfica** $G$ es una terna ordenada $(V, E, \psi)$, consiste del conjunto $V \neq \varnothing$ de **vértices o nodos**, $E$ (disjunto de $V$) **bordes o aristas**, y una función de **incidencia** $\psi$ que asocia cada borde de $G$ un par no ordenado de vértices de $G$ (no necesariamente distintos).
> 
> Si $e \in E$ y $u,v \in V$ tales que $\psi(e) = uv$, entonces se dice que $e$ **une** $u$ y $v$; los vértices $u,v$ son llamados **extremos** de $e$.

> [!example]- **Ejemplo** 
>
> $$
> G = (V(G), E(G), \psi_{G})
> $$
> donde
> $$
> \begin{align}
> V(G) &= \{ v_{1},v_{2},v_{3},v_{4},v_{5} \} \\[0.5em]
> E(G) &= \{ e_{1}, e_{2},e_{3},e_{4},e_{5},e_{6},e_{7},e_{8} \}
> \end{align}
> $$
> y $\psi_{G}$ se define por
> $$
> \begin{array}{c}{{\psi_{\scriptscriptstyle G}(e_{1})=v_{1}v_{2},\,\psi_{\scriptscriptstyle G}(e_{2})=v_{2}v_{3},\,\psi_{\scriptscriptstyle G}(e_{3})=v_{3}v_{3},\,\psi_{\scriptscriptstyle G}(e_{4})=v_{3}v_{4}}}\\ {{\psi_{\scriptscriptstyle G}(e_{s})=v_{2}v_{4},\,\psi_{\scriptscriptstyle G}(e_{6})=v_{4}v_{5},\,\psi_{\scriptscriptstyle G}(e_{7})=v_{2}v_{5},\,\psi_{\scriptscriptstyle G}(e_{8})=v_{2}v_{5}}}\end{array}
> $$
> Posibles **diagramas** de la gráfica $G$:
> 
> ![[Pasted image 20260526155416.png|center]]
>
> ![[Pasted image 20260526160208.png|center]] 


> [!theorem] **Def.** (Gráfica Simple, Completa, Vacía)
>
> Una gráfica es **simple** si no tiene bucles y no más de una arista une un par de vértices (inyectiva).
> 
> Una gráfica simple, la cual cada par de vertices distintos incide una arista, es llamada **gráfica completa**. Tal gráfica con $n$ vértices; es denotada $K_{n}$.
> 
> La **gráfica vacía** es la que no tiene aristas.


> [!example]- **Ejemplo** 
>
> ![[Pasted image 20260526162638.png|center]]
> 
> Observamos además que $(a)$ es *planar*. 

#### Definiciones Básicas
- Una gráfica **planar** tiene algún diagrama cuyas aristas se intersectan únicamente por sus extremos.
- Los extremos de algún $e$ son **incidentes** con la arista, y viceversa.
- Dos vértices que son incidentes a una arista común, son **adyacentes**, y viceversa.
- Una arista con extremos iguales, es un **loop (bucle) o lazo**. ej. $e_{3} \in G$
- Una arista con extremos diferentes, es un **link o enlace**. ej. todos menos $e_{3}$.
- Una **mutligráfica** es una grafica con lazos y aristas paralelas.
- La gráfica con un solo vértice es la *trivial*, todas las demás son *no-triviales*.
- $v(G)$ y $\varepsilon(G)$ denotan el *número* de vértices y aristas de $G$.
- En ocasiones se omite $G$ ej. $V,E,v,\varepsilon$

## Resultados

> [!theorem] **Teorema**
>
> Si $G$ es simple, entonces $\varepsilon \leq \begin{pmatrix}v \\  2\end{pmatrix}$.
