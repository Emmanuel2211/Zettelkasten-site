---
modified: 2026-09-22T17:39:40Z
title: "Teorema de Recursión"
publish: true
type: zettel
date: 2026-09-22
status: undone
aliases:
tags:
  - algebra
cssclasses:
  - romana
---
Teniendo en cuenta nuestra *función sucesor* $\mathfrak{s}: \mathbb{N} \to \mathbb{N}$.

> [!theorem] **Teorema.** (Recursión)
>
> Sea $X$ un conjunto, sea $x_{0} \in X$ y sea $f: X\to X$. Entonces existe una única función $g:\mathbb{N}\to X$ tal que
> 1. $g(0) = x_{0}$;
> 2. $g(\mathfrak{s}(n)) = f(g(n))$

