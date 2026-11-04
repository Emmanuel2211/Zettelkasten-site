---
modified: 2026-10-18T23:48:32Z
title: "Distribución Uniforme"
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
> Esta distribución surge en espacios de probabilidad equiprobables. En experimentos con $n$ resultados diferentes y todos tiene la misma probabilidad de ocurrir, $P[X = x] = \frac{1}{n} \quad \forall  x \in  \operatorname{sop}(X)$.

> [!theorem] **Definición.** ($\operatorname{Unif}(n)$ discreta)
> $$
>  f(x) = \begin{cases} 
>  \displaystyle  \frac{1}{n} & x \in \{ x_{1},\dots,x_{n} \} \\[0.5em]
>   0 & \text{ otro caso }
> \end{cases}
> $$


> [!theorem] **Teorema.** (Propiedades)
> Sea $X \sim \operatorname{Unif} (n)$
> 1. $\displaystyle \operatorname{E} (X) = \frac{(n+1)}{2}$
> 2. $\displaystyle \operatorname{E} (X^{2}) = \frac{(n+1)(2n+1)}{6}$
> 3. $\displaystyle \operatorname{Var} (X) = \frac{n^{2}-1}{12}$


