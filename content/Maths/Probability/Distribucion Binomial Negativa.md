---
modified: 2026-11-13T23:34:20Z
title: "Distribución Binomial Negativa"
publish: true
type: zettel
date: "2026-09-01"
status: seed
aliases:
tags:
 - probability
cssclasses:
 - romana
---
> [!tip|idea]- **Idea Intuitiva.**
>
> Sup. que tenemos una sucesión infinita de ensayos indep. Bernoulli, en cada uno de los caules la proba. de éxito es $p$. Sea $r\geq 1$ núm entero, definamos $X$ v.a. como el número de fracasos antes de obtener el $r$-ésimo éxito.
> Es claro que $X$ puede tomar valores $0,1,2,\dots$

> [!theorem] **Definición.** ($\operatorname{Bin \ neg}(r,p)$)
>
> Decimos que $X$ tiene una distrib. binomial negativa con parámetros $r$ y $p$, i.e. 
> $X \sim \operatorname{Bin \ neg} (r,p)$ si su función de probabilidad es:
> $$
> f(x) = \begin{cases}
> \binom{r+x-1}{x} p^{r} (1-p)^{x} & x = 0,1,2\dots\\[0.5em]
> 0 & \text{en otro caso } 
> \end{cases}
> $$
> También, cuando es interpretada como el núm. total de ensayos necesarios para obtener $r$-exitos, su def. cambia,
> $$
> f(x) = \binom{x-1}{r-1} p^{r} (1-p)^{x-r}
> $$
> con $\operatorname{supp}(X) = \{ r,r+1,r+2 \dots\}$


> [!theorem] **Teorema.** (Propiedades)
>
> Sea $X \sim \operatorname{Bin \ Neg}(r,p)$
> 1. $F_{X}(x)=$
> 2. $\displaystyle \operatorname{E} (X) = r \left( \frac{1-p}{p}  \right)$
> 3. $\displaystyle \operatorname{Var} (X) = r \left( \frac{1-p}{p^{2}}  \right)$




> [!theorem] **Proposición.**
>
> Sea $r \in \mathbb{N}, r\geq 1$ y sean $X_{1},\dots,X_{n}$, v.a.s independientes, cada una con distrib. $\operatorname{geo} (p)$. Entonces,
> $$
> X_{1}+\dots+X_{r} \sim \operatorname{bin \ neg} (r,p) .
> $$
> Recíprocamente, toda v.a. con distrib. $\operatorname{bin \ neg} (r,p)$ puede expresarse como una suma de la forma anterior.

> [!proof]- **Proof.**


