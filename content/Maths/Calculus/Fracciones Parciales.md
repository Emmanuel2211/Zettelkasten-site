---
modified: 2026-10-03T02:41:58Z
title: "Fracciones Parciales"
publish: true
type: zettel
date: "2026-09-29"
status: undone
aliases:
tags:
 - calculus
cssclasses: 
 - romana
---
A veces encontramos integrales con cocientes de polinomios, es decir, $\int \frac{x^{2} + 2x + 1}{x^{3} + 3x^{2} -5x  +3} \, dx$, para estos casos, a veces puede que encontremos polinomios irreducibles en el denominador, para ello tendremos que hacer uso de las siguientes técnicas de integración.

Sean $f,g \in \mathbb{R}[x]$ polinomios. Denotamos $\operatorname{gr}(f)$ al grado del polinomio $f$. Los casos de aquí en adelante son para cocientes $\displaystyle \frac{f(x)}{g(x)}$ en donde $\operatorname{gr}(g) > \operatorname{gr}(f)$.

> [!theorem] **Caso 1.**
> Sean el denominador $g(x) \in  \mathbb{R}[x]$ con $\operatorname{gr}(g(x)) = n$ de forma que puede expresarse como el producto de factores lineales, i.e, $g(x) = (x - x_{1}) (x-x_{2}) \cdots(x-x_{n})$, entonces podemos encontrar $A_{1},\dots,A_{n}$ tales que
> $$
> \frac{A_{1}}{x-x_{1}} + \frac{A_{2}}{x-x_{2}} + \dots+ \frac{A_{n}}{x-x_{n}}
> $$
> sea una comb. lineal igual a nuestro cociente $\displaystyle \frac{f(x)}{g(x)}$.

> [!tip]- **Idea.** (Caso 1)
> De esta forma, al rescribir $\displaystyle \frac{f(x)}{g(x)}$ como tal comb. lineal, podemos integrar de manera muy sencilla funciones de la forma $A\displaystyle \int  \frac{1}{x-x_{0}} \, dx$, los cuales son igual a $\displaystyle \sum_{i=1}^{n} A_{i}\log \left(x-x_{i}\right)$

> [!theorem] **Caso 2.**
> Sea $g(x) \in \mathbb{R}[x]$ con $\operatorname{gr}(g) = n$, de forma que $g(x)$ es el producto de factores lineales que puede que se repitan, i.e. $g(x) = (x-x_{1})(x-x_{2})^{k}\cdots$, ent. podemos encontrar $A_{1},\dots, A_{n}$ tales que
> $$
> \frac{f(x)}{g(x)} = \frac{A_{1}}{x-x_{1}} + \sum_{i=1}^{k} \frac{A_{i+1}}{(x-x_{2})^{i}} + \cdots
> $$
> En donde, para los terminos de la forma $(x-x_{0})^{k}$ se extiendan como sumas.

> [!tip]- **Idea.** (Caso 2)
> Similar al caso anterior, solo que ya no solo tendremos denominadores lineales en nuestra comb. lineal. Así que tendremos que usar otros metodos de integración mas allá de $\log \left(x\right)$.

> [!theorem] **Caso 3.**
> Sea $g(x) \in  \mathbb{R}[x]$, y $g(x)$ denominador con terminos cuadraticos irreducibles, con ninguno repetido, es decir, $(x-x_{0})(ax^{2}+bx + c)\cdots$ donde $ax^{2}+bx+c$ es irreducible $(b^{2}-4c < 0)$, ent. encontramos $A_{1},A_{2},\dots$ y $B,C$ tales que
> $$
> \frac{f(x)}{g(x)} = \frac{A_{1}}{x-x_{1}} + \frac{Bx + C}{ax^{2}+bx + c} + \cdots
> $$



> [!theorem] **Caso 4.**
> Sea $g \in  \mathbb{R}[x]$, y $g(x)$ denominador con terminos cuadraticos irreducibles que puede haber alguno repetido, es decir, $(x-x_{0})(ax^{2}+bx+c)^{k}\cdots$ donde $ax^{2}+bx+c$ es irreducible, ent. encontramos $A_{1},A_{2},\dots$ y $B_{1},\dots B_{k}, C_{1},\dots,C_{k}$ tales que
> $$
> \frac{f(x)}{g(x)} = \frac{A_{1}}{x-x_{1}} + \sum_{i=1}^{k} \frac{B_{i}x + C_{i}}{(ax^{2} + bx + c)^{i}} + \cdots
> $$
