---
modified: 2026-07-10T15:40:08Z
publish: true
type: zettel
date: "2026-07-09"
aliases:
 - Lema de la cota nula
 - Criterio de aproximacion
 - Criterio Epsilon
tags: 
 - calculus
cssclasses: 
 - romana
---

# Principio de Aproximación por $\varepsilon$

> [!theorem] **Lema.** (Cota nula)
>
> Sea $x \in \mathbb{R}^{+}$. Si para todo número real $\varepsilon >0$ se cumple que $x< \varepsilon$, entonces necesariamente $x = 0$.
> $$\forall x \in \mathbb{R} \ \Big( \big[ x \ge 0 \land \forall \varepsilon \in \mathbb{R}^+ (x < \varepsilon) \big] \implies x = 0 \Big)$$

> [!proof]- **Proof.** 
>
> *Reducción al absurdo.*
> Supongamos $x \in \mathbb{R}$, $x>0$, y $\forall \varepsilon >0$ tenemos que $x < \varepsilon$.
> Supongamos $x \neq 0$. Dado que $x\geq 0$ por hipótesis, solo es posible por tricotomía de los reales que $x > 0$. Puesto que $x< \varepsilon$ para todo $\varepsilon > 0$, sea el caso especial con $\varepsilon_{0} = x / 2$.
> Como $x > 0$, entonces $\varepsilon_{0} > 0$, lo que lo convierte en un candidato válido para nuestra hipótesis.
> Sustituyendo $\varepsilon_{0}$ en la desigualdad $x < \varepsilon$, tenemos
> $$
> \begin{align}
> x < \frac{x}{2} \\
> x \cdot \frac{1}{x} < \frac{x}{2} \cdot \frac{1}{x} \\
> 1 < \frac{1}{2}! \\[0.5em]
> \therefore x = 0 \tag*{$\blacksquare$}
> \end{align}
> $$

Un resultado igual de importante es el siguiente

> [!theorem] **Corolario.** (Igualdad por $\varepsilon$)
>
> Sean $a,b \in \mathbb{R}$. Si $\forall \varepsilon >0$ se cumple que $\lvert a-b \rvert<\varepsilon$, entonces necesariamente $a = b$
> $$\forall a, b \in \mathbb{R} \ \Big( \big[ \forall \varepsilon \in \mathbb{R}^+ \big( |a - b| < \varepsilon \big) \big] \implies a = b \Big)$$

> [!proof]- **Proof.** 
>
> Supongamos que $a,b \in \mathbb{R}$ tales que para cualquier $\varepsilon >0$, se cumple $\lvert a-b \rvert<\varepsilon$.
> Es claro que $\lvert a-b \rvert \geq 0$ por ser valor absoluto. Aplicando el lema anterior $\lvert a -b \rvert = 0$. Por propiedad del valor absoluto $a -b = 0$, por lo tanto $a = b$.
> $$
> \tag*{$\blacksquare$}
> $$