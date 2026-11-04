---
modified: 2026-10-03T03:37:30Z
title: "Limites en el Infinito"
publish: true
type: zettel
date: 2026-08-18
status: undone
aliases:
tags:
  - calculus
cssclasses:
  - romana
---
#### Convergencia

>*"Si me das un margen de error diminuto $\varepsilon$ alrededor de la recta $y=L$, siempre puedo encontrar un punto $N$ en el eje $X$ a partir del cual toda la gráfica queda atrapada dentro de ese tubo horizontal para siempre"*

> [!theorem] **Definición.** (Límite $x \to \pm \infty$ es $L$)
> Sea $f: (a, \infty) \to  \mathbb{R}$. Decimos que $\displaystyle \lim_{x \to \infty} f(x) = L$ si
> $$
> \forall  \varepsilon  > 0 \ \exists N > 0 \ (x > N \implies  \left| f(x) - L \right| < \varepsilon )
> $$
> Igualmente, decimo que $\displaystyle \lim_{x \to -\infty} f(x) = L$ si
> $$
> \forall  \varepsilon  > 0 \ \exists N < 0 \ (x < N \implies  \left| f(x) - L \right| < \varepsilon )
> $$

Además, este límite al infinito es **único**.

