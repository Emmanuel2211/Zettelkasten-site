---
modified: 2026-11-09T21:57:48Z
title: "Toro"
publish: true
type: zettel
date: 2026-10-28
status: undone
aliases:
tags:
  - calculus
cssclasses:
  - romana
---
![[Pasted image 20261028121022.png|center|300]]

> El sólido generado al rotar el disco $(x-a)^{2} + y^{2} \leq r^{2}, 0 < r< a$. alrededor del eje $Y$ es conocido como el **Toro**.

> [!theorem] **Propiedades.**
> 1. Volumen: $\boxed{V = 2\pi^{2} a r^{2}}$
> 2. Área de superficie: $\boxed{A = 4\pi^{2} a r}$


> [!proof]+ **Proof.**
> 1. Por el método de los casquillos (ver [[Solidos de Revolución]]), para cada $x \in [a-r, a+r]$ la altura del disco es $2\sqrt{r^{2} - (x-a)^{2}}$, ent.
> $$
> \begin{align}
> V &= 2\pi \int_{a-r}^{a+r} x \cdot 2\sqrt{r^{2}-(x-a)^{2}} \, dx \\[0.5em]
> &= 4\pi \int_{-r}^{r} (u+a)\sqrt{r^{2}-u^{2}} \, du \tag{sust. $u = x-a$} \\[0.5em]
> &= 4\pi \left[ \underbrace{\int_{-r}^{r} u\sqrt{r^{2}-u^{2}} \, du}_{0 \text{ (impar)}} + a \underbrace{\int_{-r}^{r} \sqrt{r^{2}-u^{2}} \, du}_{\frac{\pi r^{2}}{2} \text{ (medio círculo)}} \right] \\[0.5em]
> &= 4\pi a \frac{\pi r^{2}}{2} = 2\pi^{2} a r^{2}
> \end{align}
> $$
> 2. Por el [[Teorema de Pappus]], la superficie se genera al girar la circunferencia $(x-a)^{2}+y^{2} = r^{2}$ alrededor del eje $Y$. Su centroide es su centro, $\bar{x} = a$ (por simetría), y su longitud es $2\pi r$. Ent.
> $$
> A = 2\pi \bar{x} \ell = 2\pi a (2\pi r) = 4\pi^{2} a r \tag*{$\blacksquare$}
> $$

> [!observation]+ **Observación.**
> Ambas fórmulas son "distancia recorrida por el centro × medida de lo que gira": 
> $V = (2\pi a)(\pi r^{2})$ y $A = (2\pi a)(2\pi r)$.
