---
modified: 2026-11-13T23:34:20Z
title: "Principio de Inducción"
publish: true
type: zettel
date: 2026-08-19
status: seed
aliases:
  - Induccion Fuerte
tags:
  - algebra
cssclasses:
  - romana
---
Recordando, podemos demostrar inducción de dos formas (**débil** y **fuerte**).

> [!theorem] **Axioma.** (Primer Principio de Inducción)
>
> Sea $A$ un conjunto. Si $A \subseteq \mathbb{N}$ tal que:
> 1. $0 \in A,$
> 2. $\forall n \in \mathbb{N} (n\in A \implies \mathfrak{s}(n) \in A),$
> 
> entonces, $\mathbb{N} \subseteq A$.

> [!theorem] **Axioma.** (Segundo Principio de Inducción)
>
> Sea $S$ un conjunto. Si $S \subseteq \mathbb{N}$ tal que
> $$
> \forall n \in \mathbb{N}\ (\forall m \in \mathbb{N}\ (m<n \implies m \in S) \implies n \in S),
> $$
> entonces, $S \subseteq \mathbb{N}$.
> 
> De forma más sencilla, utilizando la definición de $n^{<}$:
> 
> Si $S \subseteq \mathbb{N}$ tal que $\forall n \in \mathbb{N} (n^{<}\subseteq S\implies n \in S)$, entonces $S =\mathbb{N}$

En la misma definición se observa que $n^{<}$ es el conjunto de los naturales menores a $n \in \mathbb{N}$, es decir, $n^{<} := \{ m \in \mathbb{N} \mid m < n \}$
