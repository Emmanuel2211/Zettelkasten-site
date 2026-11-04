---
modified: 2026-10-18T23:51:04Z
title: "Distribución Geométrica"
publish: true
type: zettel
date: "2026-09-01"
status: undone
aliases:
tags:
 - probability
cssclasses:
 - romana
---
> [!tip]+ **Idea.**
> Sup. que tenemos una sucesión infinita de ensayos indep. Bernoulli, y cada uno con proba. de éxito $p$. Para cada una de estas sucesiones definimos la v.a. $X$ como el número de fracasos antes de obtener el primer éxito. Es decir,
> $$
> \begin{align}
>   X(E F F  F E  \dots) &= 0\\[0.5em]
>   X( FE E F F\dots) &= 1 \\[0.5em]
>   X(F F E F E \dots) &= 2 \\[0.5em]
>   X(F F F E E \dots) &= 3\\[0.5em]
>   &\vdots
> \end{align}
> $$
> De forma que $X$ toma valores $0,1,2,\dots$ Es claro que la proba de que $X$ tome el valor $x\geq 0$ es $(1-p)^{x}p$. Dicho esto:

> [!theorem] **Definición.** ($\operatorname{Geo}(p)$)
> Decimos que $X$ tiene una distribución geométrica con parámetro $p$, i.e. $X \sim \operatorname{geo} (p)$ cuando su función de proba. es:
> $$
> f(x) = \begin{cases}
>   p(1-p)^{x} & \text{ si } x = 0,1,2\dots \\[0.5em]
>   0 &   \text{ otro caso }
> \end{cases}
> $$


> [!theorem] **Teorema.** (Propiedades)
> Sea $X \sim \operatorname{Geo} (p)$
> 1. $\displaystyle \operatorname{E} (X) = \frac{1-p}{p}$
> 2. $\displaystyle \operatorname{Var} (X) = \frac{1-p}{p^{2}}$


