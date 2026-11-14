---
modified: 2026-11-13T23:34:20Z
title: "Límite al infinito"
publish: true
type: zettel
date: 2026-08-18
status: seed
aliases:
tags:
  - calculus
cssclasses:
  - romana
---
> [!theorem] **Definición.** (Límite $x \to \pm \infty$)
>
> Sea $f: (a, \infty) \to  \mathbb{R}$. Decimos que $\displaystyle \lim_{x \to \infty} f(x) = L$ si
> $$
> \forall  \varepsilon  > 0 \ \exists N > 0 \ (x > N \implies  \left| f(x) - L \right| < \varepsilon )
> $$
> Igualmente, decimo que $\displaystyle \lim_{x \to -\infty} f(x) = L$ si
> $$
> \forall  \varepsilon  > 0 \ \exists N < 0 \ (x < N \implies  \left| f(x) - L \right| < \varepsilon )
> $$

Esto es, *"Si me das un margen de error diminuto $\varepsilon$ alrededor de la recta $y=L$, siempre puedo encontrar un punto $N$ en el eje $X$ a partir del cual toda la gráfica queda atrapada dentro de ese tubo horizontal para siempre"*.



> [!theorem] **Definición.** (Limite $x \to \infty$ es infinito)
>
> Diremos que $\displaystyle\lim_{ x \to \infty } f(x) = \infty$ si
> $$
> \forall  M > 0 \ \exists  N \ \text{ tal que } \ (x > N \implies f(x ) > M)
> $$



> [!theorem] **Definición.** (Limite infinito por la derecha e izq.)
>
> Diremos que $\displaystyle \lim_{ x \to a^{+} } f(x) = -\infty$
> $$
> \forall  M >0 \ \exists \delta >0 \text{ tal que } x -a < \delta \implies f(x) > M
> $$
> Diremos que $\displaystyle \lim_{ x \to a^{-} } f(x) = -\infty$
> $$
> \forall  M >0 \ \exists \delta >0 \text{ tal que } x -a < \delta \implies f(x) > M
> $$

