---
modified: 2026-10-15T16:07:15Z
title: "Independencia de V.A.s"
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
> [!theorem] **Definición.** (Independencia de v.a.s)
>
> Sean $X$ y $Y$ v.a.s, se dice que son **independientes** si los eventos $(X\leq x)$  y 
> $(Y\leq y)$ son independientes para cualesquiera valores $x,y \in \mathbb{R}$, es decir, si se cumple:
> $$
> P[(X\leq x)\cap (Y\leq y)] = P(X\leq x) P(Y\leq y)
> $$
> A $P[(X \leq x) \cap (Y\leq y)]$ se le conoce como **función de distribución conjunta de** $X$ y $Y$ evaluada en $(x,y)$, también se denota como $P(X\leq x,Y\leq y)$ o $F_{X,Y}(x,y)$, es decir, también adquiere la expresión:
> $$
> F_{X,Y}(x,y) = F_{X}(x)F_{Y}(y), \quad -\infty<x,y<\infty
> $$

> [!observation]+ **Observación.**
>
> Como está afirmación es por definición $\forall x,y \in \mathbb{R}$, por lógica, para ver que no es cierta, faltaría encontrar al menos un $(x,y)$ para la cual no se cumpla.

> [!theorem] **Teorema.** (Independencia de V.A.s Discretas)
>
> Sean $X,Y$ discretas, ent. la condición de independencia es:
> $$
> P(X=x,Y=y) = P(X=x)P(Y=y), \quad -\infty<x,y <\infty
> $$
> En donde, por Proba. Total, 
> $$
> \begin{align}
>   P(X=x) &=  \sum_{y} P(X=x,Y=y) \\[0.5em]
>   P(Y=y) &=  \sum_{x} P(X=x,Y=y)
> \end{align}
> $$

> [!proof]- **Proof.**


> [!theorem] **Teorema.** (Independencia de V.A.s Continuas)
>
> Sean $X,Y$ continuas, se puede ver que:
> $$
> F_{X,Y}(x,y) = \int_{-\infty}^{x} \int_{-\infty}^{y} f_{X,Y}(u,v) \, dv \, du
> $$
> donde $f_{X,Y}(x,y)$ se le llama **función de densidad conjunta de** $X$ y $Y$. Entonces, la condición de independencia es la siguiente:
> $$
> f_{X,Y}(x,y) = f_{X}(x)f_{Y}(y), \quad -\infty<x,y < \infty,
> $$
> En donde $\displaystyle f_{X}(x) = \int_{-\infty}^{\infty} f_{X,Y}(x,y) \, dy$ y $\displaystyle f_{Y}(y) = \int_{-\infty}^{\infty} f_{X,Y}(x,y) \, dx$ son 

> [!proof]- **Proof.**
