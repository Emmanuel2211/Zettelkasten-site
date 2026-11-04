---
modified: 2026-09-12T15:50:29Z
title: "Límites Laterales"
publish: true
type: zettel
date: "2026-09-01"
status: undone
aliases:
tags:
 - calculus
cssclasses:
 - romana
---
> [!theorem] **Definición** (Límite por la Derecha e Izquierda)
> Sea $A \subseteq \mathbb{R}$ y $f: A \to \mathbb{R}$. Se dice que $L \in  \mathbb{R}$ es **límite por la derecha de** $f$ **en** $x_{0}$ si,
> $$
> \forall \varepsilon >0 \ \exists \delta  >0   \left(  0 < x- x_{0} < \delta  \implies  \left| f(x)  - L\right| < \varepsilon \right)
> $$
> y lo denotamos $\displaystyle \lim_{x \to x_{0}^{+}} f(x) =L$
> Se dice que $L$ es **limite por la izquierda de** $f$ **en** $x_{0}$ si,
> $$
> \forall \varepsilon >0 \ \exists \delta  >0 \left( 0 < x_{0} - x < \delta  \implies  \left| f(x) - L \right| < \varepsilon   \right)
> $$
> y lo denotamos $\displaystyle \lim_{x \to x_{0}^{-}} f(x) = L$


> Relación del límite con sus límites laterales


> [!theorem] **Teorema.**
> $$
> \lim_{x \to x_{0}} f(x) = L \iff  \lim_{x \to x_{0}^{+}} f(x) = L = \lim_{x \to x_{0}^{-}} f(x)
> $$


> [!proof]+ **Proof.**


