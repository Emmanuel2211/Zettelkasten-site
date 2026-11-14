---
modified: 2026-11-13T23:34:20Z
publish: true
type: zettel
date: "2026-08-20"
status: seed
aliases:
tags:
 - algebra
cssclasses: 
 - romana
---
# Propiedades de $V$

Al igual que en un campo $\mathbb{F}$<sup><a href="#user-content-fn-inline-1" id="user-content-fnref-inline-1" data-footnote-ref class="internal">1</a></sup>, veremos que propiedades se desprenden a partir de los "axiomas" del esp. vect. Enlistaremos algunas y procederemos con sus demostraciones constructivamente, repetando el orden en como se enuncian.

> [!theorem] **Teorema.** (Propiedades de $V$)
>
> Sea $V$ un esp. vect. sobre un campo $\mathbb{F}$,
> 1. Unicidad del neutro $+$: Si $\bar{0} \in V$ y $0' \in V$ son tales
> $$
> 	\forall  x \in V (((x + \bar{0} = x) \land(x + 0' = x)) \implies \bar{0} = 0')
> $$
> 2. Ley de la cancelacion de $+_{V}$: 
> $$
> \forall x,y,z \in V (x + z = y + z \implies x = y)
> $$
> 3. Unicidad del inverso $+$:
> $$
> \forall  x \in V \ \exists! y \in V \ (x + y =\bar{0})
> $$
> **Obs.** Es una forma equivalente de describir la unicidad $(i)$.
> 
> 4. El nuetro $+_{\mathbb{F}}$ nulifica la mult. escalar:
> $$
> \forall x \in V ( 0 \cdot x = \bar{0})
> $$
> 5. El inverso $+_{\mathbb{F}}$ "se hereda" al de $+_{V}$:
> $$
> \forall x  \in V \ \forall  a \in \mathbb{F} \ ((-a) \cdot x = a \cdot (-x) = -a\cdot x)
> $$
> 6. El neutro $+_{V}$ nulifaca la mult. escalar:
> $$
> \forall  a \in \mathbb{F} \ (a \cdot \bar{0}  = \bar{0})
> $$


> [!proof]- **Proof.** $(i)$
>
> Sean $\bar{0}, 0' \in V$ tal que $\forall x \in V (x+\bar{0}=x)\dots(1)$  y $\forall x \in V(x+0' = x)\dots (2)$
> Como $(1)$ se cumple y $0' \in V$, $0'+\bar{0}=0'$.
> Como $(2)$ se cumple y $\bar{0}\in V$, $\bar{0}+0' = \bar{0}$.
> Por (VS 1) $+$  es conmutativa, $0' + \bar{0} = \bar{0}+0'$
> $$
> \therefore 0'=\bar{0} \tag*{$\blacksquare$}
> $$

> [!proof]- **Proof.** $(ii)$
>
>  Sean $x,y,z \in V$ tales que $x + z = y + z$. Existe un elemento $v \in V$ tal que $z + v = 0$. Luego, 
> $$
> \begin{align}
> x = x + 0 = x + (z+v) &= (x+z) + v \\
> &= (y+z) + v \\
> &= y+(z+v) \\
> & = y + 0 = y \tag*{$\blacksquare$}
> \end{align}
> $$

Que pasa con el reciproco del teorema-propiedad $(ii)$ Sea da por (VS0), que dice que $+$ es función.

> [!proof]- **Proof.** $(iii)$
>
> de dos formas, hagamos las dos cada una usando los dos teoremas anteiores.

Gracias al teorema-propiedad $(iii)$ le damos una notacion única al inverso:
**Definición.** la resta de vectores como la fucnion
$$
- : V \times V \to \text{ donde } x - y = x + (-y)
$$



> [!proof]- **Proof.** $(iv)$
>
> 1. Sea $x \in V$. **P.D.**  $0 \cdot x = \bar{0}$


> [!proof]- **Proof.** $(v)$

> [!proof]- **Proof.** $(vi)$

<section data-footnotes class="footnotes"><h2 class="sr-only" id="footnote-label">Notas</h2>
<ol>
<li id="user-content-fn-inline-1">

[[Propiedades del Campo]] <a href="#user-content-fnref-inline-1" data-footnote-backref class="data-footnote-backref internal">↩</a>

</li>
</ol>
</section>
