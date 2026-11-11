---
modified: 2026-08-27T15:24:18Z
publish: true
type: zettel
date: "2026-08-20"
status: undone
aliases:
tags:
 - algebra
cssclasses: 
 - romana
---
# $V = P(\mathbb{F})$

Como es construmbre denotaremos a los polinomios como $f(x) = a_{n}x^{n} + \dots + a_{1}x + a_{0}$, donde $a_{0},\dots,a_{n} \in \mathbb{F}$, con $n \in \mathbb{N}$.

> [!theorem] **Definición.** ($P(\mathbb{F})$)
>
> Sea $\mathbb{F}$ un campo, definimos
> $$P(\mathbb{F}) = \{ f(x) \mid \text{ los polinomios con coeficientes en } \mathbb{F} \}$$
> Con las siguientes operaciones:
> $$
> +: P(\mathbb{F}) \times P(\mathbb{F}) \to P(\mathbb{F})
> $$
> Dados $f(x)= \sum_{i=0}^{n}a_{i}x^{i}$ y $g(x)= \sum_{j=0}^{m}b_{j}x^{j}$, supongamos s.p.g. que $m\leq n$, definimos para $j\in \{ m+1,\dots,n \}$ que $b_{j} = 0$, y definimos
> $$
> (f+g)(x) = \sum_{i=0}^{n} (a_{i}+b_{i})x^{i}
> $$
> Además,
> $$
> \cdot: F\times P(\mathbb{F})\to P(\mathbb{F})
> $$
> Dados $f(x) = \sum_{i=0}^{n}a_{i}x^{i}$ y $c \in \mathbb{F}$, definimos 
> $$(cf)(x) = \sum_{i=0}^{n}(ca_{i})x^{i}$$



