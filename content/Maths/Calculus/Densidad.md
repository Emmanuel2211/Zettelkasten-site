---
modified: 2026-09-08T01:47:20Z
title: "Densidad"
publish: true
type: zettel
date: "2026-07-09"
aliases:
tags: 
 - calculus
cssclasses: 
 - romana
---
> [!theorem] **Teorema** (Densidad de $\mathbb{R}$)
> Dados $x,y \in \mathbb{R}$ con $x < y$, se cumple
> 1. Existe $q \in \mathbb{Q}$ tal que $x<q<y$.
> 2. Existe un irracional $p \not \in  \mathbb{Q}$ tal que $x < p < y$.

Esto nos dice que no importa que tan pequeño sea un intervalo, simple hay infinitos racionales e irracionales.

---

> [!theorem] **Def.** Densidad de un conjunto
Un conjunto $E$ de $\mathbb{R}$ es **denso** en $\mathbb{R}$ si cada intervalo $(a,b)$ contiene un punto de $E$.

Por ejemplo, es claro que $\mathbb{Q}$ es denso.

De forma más concreta, el siguiente enunciado es muy util. *"Entre cualquier para de números reales distintos, sin importar qué tan cerca estén, siempre hay un número racional."*

> [!theorem] **Teorema.** (Densidad $\mathbb{Q}$ en $\mathbb{R}$)
> Si $x, y \in \mathbb{R}$ tales que $x < y$, entonces existe al menos un $q \in \mathbb{Q}$ tal que $x < q < y$. Es decir
> $$\forall x, y \in \mathbb{R} \ \Big( x < y \implies \exists q \in \mathbb{Q} \ (x < q < y) \Big)$$

> [!proof]- **Proof.** 
> Supongamos que $x, y \in \mathbb{R}$ con $x<y$. Dadto $x<y$, tenemos $y - x > 0$. Por $(i)$ del corolario de P.A.<sup><a href="#user-content-fn-inline-1" id="user-content-fnref-inline-1" data-footnote-ref class="internal">1</a></sup> sabemos que existe $n \in \mathbb{N}$ lo suficientemente grande como para que $n$ supere a $1$, es decir
> $$
> \begin{align}
> n(y-x)> 1 \\
> ny - nx > 1 \\
> ny > nx + 1
> \end{align}
> $$
> Ahora, consideremos el conjunto de todos los enteros que son mayores a $nx$. Este conjunto tiene un elemento mínimo por el Principio del Buen Orden, $m \in \mathbb{Z}$ tal que $m > nx$ y además 
> $$
> \begin{align}
> m-1 \leq nx \\
> m \leq nx + 1
> \end{align}
> $$
> y tenemos
> $$
> \begin{align}
> m \leq nx + 1 < ny \\
> nx < m < ny
> \end{align}
> $$
> Dado que $n \in \mathbb{N}$, podemos obtener
> $$
> \begin{align}
> \frac{nx}{n}< \frac{m}{n}< \frac{ny}{n} \\
> x < \frac{m}{n} < y
> \end{align}
> $$
> Definimos a nuestro número racional $q = \frac{m}{n}$. Por lo tanto, existe un $q \in \mathbb{Q}$ tal que $x < q < y$.
> $$
> \tag*{$\blacksquare$}
> $$
> 

<section data-footnotes class="footnotes"><h2 class="sr-only" id="footnote-label">Notas</h2>
<ol>
<li id="user-content-fn-inline-1">

[[Propiedad Arquimediana]] <a href="#user-content-fnref-inline-1" data-footnote-backref class="data-footnote-backref internal">↩</a>

</li>
</ol>
</section>
