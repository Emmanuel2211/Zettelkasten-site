---
modified: 2026-05-19T15:40:09Z
title: "Groups"
publish: true
---
El concepto de grupo esta estrechamente ligado con el concepto de *simetría*.
> [!theorem] **Def.** (Grupo)
>
> Un **grupo** es una estructura $(G, \cdot)$ donde $G$ es un conjunto no vacío y
> $$
> \cdot: G \times G \to G
> $$
> es una operación binaria<sup><a href="#user-content-fn-inline-1" id="user-content-fnref-inline-1" data-footnote-ref class="internal">1</a></sup>
> $$
> (u,v) \longmapsto \cdot(u,v)
> $$
> donde, por abuso o conveniencia de notación se escribe
> $$
> \cdot(x,y) = x \cdot y = xy
> $$
> tal que
> 1. $(xy)z = x(yz): x,y,z \in G$, es **asociativa**
> 2. $\exists e \in G$, llamado **identidad** o **neutro**, tal que $ey = y$.
> 3. $\forall v \in G$ existe un elemento llamado **inverso**, denotado $v^{-1}$, tal que $vv^{-1} = e$.
^320468

> [!theorem] **Def.** (Grupo abeliano o conmutativo)
>
> Diremos que el grupo es **abeliano** si además satisface para toda $x,y \in G$:
> $$xy = yx$$
> Es decir, si su operación binaria es conmutativa.
> 
> - Si el grupo es abeliano, se acostumbra denotar su operación binaria con el signo $+$.

^8e3b39

> [!theorem] **Def.** (Magma o grupoide)
>
> Sea $E$ con una operación binaria $\circ$ sin que cumpla alguna condición, decimos que $(E,\circ)$ es un **magma** o **grupoide**.

> [!theorem] **Def.** (Semigrupo) 
>
> Sea $S$ un conjunto con una operación binaria $\cdot$ que cumpla ==1.== *(asociatividad)* diremos que $(S,\cdot)$ es un **semigrupo**.

^25d7d5

> [!theorem] **Def.** (Monoide)
>
> Sea $M$ un conjunto con una operación binaria + que cumpla ==1.== y ==2.== *(asociatividad e identidad)* diremos que $(M,+)$ es un **monoide**.

> [!theorem] **Def.** (Homomorfismo)
>
> Sean $(G,\cdot)$ y $(G',\otimes)$ dos grupos. Un **homomorfismo de grupos** es una función $f: G \to G'$ tal que $f(u\cdot v) = f(u) \otimes f(v)$

> [!theorem] **Def.** (Acción)
>
> Sea $\Omega$ y $A$ dos conjuntos. Una **acción** de $\Omega$ en $A$ es una función de $\Omega \times A$ en el conjunto $A$.

> [!theorem] **Def.** (Grupo con Operadores)
>
> sea $\Omega$ un conjunto. Un grupo $(G,\cdot)$ junto con una acción de $\Omega$ en $(G,\cdot)$
> $$
> \begin{align}
> \circ : \Omega \times G &\longrightarrow G \\
> (\alpha, x) &\longmapsto \circ(\alpha,x) = \alpha \circ x = x^\alpha
> \end{align}
> $$
> que sea distributiva con respecto a la ley de composición de $(G,\cdot)$ se llama **grupo con operadores** en $\Omega$.

> [!example]-
>
> Esta ley distributiva puede expresarse como
> $$
> (xy)^\alpha = x^\alpha y^\alpha
> $$
> i.e.,
> $$
> (\alpha,xy) \longmapsto \circ(\alpha,xy) = \alpha \circ (xy) = (\alpha \circ x)(\alpha \circ y).
> $$

> [!observation] **Observation.**
>
> En un grupo $G$ con operadores $\Omega$, cada elemento de $\Omega$ (llamado **operador**) define un **endomorfismo** (i.e. un homomorfismo de $G \to G$) del grupo G. Consideremos $\Omega = \mathbb{Z}$ y para $x \in G$, $n \in \mathbb{Z}$ definamos
> $$
> \begin{align}
> \circ: \mathbb{Z} \times G &\longrightarrow G \\
> (n,x) &\longmapsto n \circ x = x^n
> \end{align}
> $$
> Si $G$ es *abeliano*, tenemos que
> $$
> n(xy) = (xy)^n = x^n y^n = (nx)(ny)
> $$
> Luego, todo grupo abeliano $G$ puede verse como un grupo con operadores en $\mathbb{Z}$.

<sup><a href="#user-content-fn-inline-2" id="user-content-fnref-inline-2" data-footnote-ref class="internal">2</a></sup>

### Recursos
https://www.matem.unam.mx/~labardini/teaching/Grupos_EMALCA_Chile.pdf

https://www.pesmm.org.mx/Serie%20Textos_archivos/T6.pdf

<section data-footnotes class="footnotes"><h2 class="sr-only" id="footnote-label">Notas</h2>
<ol>
<li id="user-content-fn-inline-1">

[[Operacion Binaria]] <a href="#user-content-fnref-inline-1" data-footnote-backref class="data-footnote-backref internal">↩</a>

</li>
<li id="user-content-fn-inline-2">

[[Anillo]] <a href="#user-content-fnref-inline-2" data-footnote-backref class="data-footnote-backref internal">↩</a>

</li>
</ol>
</section>
