---
modified: 2026-10-16T15:45:11Z
title: "Teorema de Cambio de Variable Aleatoria"
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
Para el caso discreto,

> [!theorem] **Teorema.** (Cambio de V.A. discreta)
>
> Sea $X$ una v.a. discreta y sea $Y = \varphi  (X)$ en donde $\varphi$ es cualquier función definida por lo menos en el conjunto de valores $X$. Para cualquier $y \in Y$,
> $$
> f_{Y}(y) = P(Y= y) = P(X \in \varphi ^{-1} (y))
> $$
> donde $\varphi ^{-1}(y) = \{ x : \varphi (x) = y \}$, i.e, es la imagen inversa de $y$ bajo $\varphi$, y es evidente,
> $$
> P(X \in \varphi ^{-1} (y)) = \sum_{x \in \varphi ^{-1}(y)} P(X= x)
> $$

> [!theorem] **Teorema.** (Cambio de V.A continua)
>
> Sea $X$ v.a. continua con función de densidad $f_{X}(x)$. Sea $\varphi : \mathbb{R} \to \mathbb{R}$ función continua, estrictamente monótona y con inversa $\varphi ^{-1}$ diferenciable. Entonces la función de densidad $Y = \varphi (X)$ está dada por
> $$
> f_{Y}(y) = \begin{cases}
>   f_{X}(\varphi ^{-1}(y)) \left| \displaystyle \frac{d}{dy} \varphi ^{-1}(y) \right| & \text{ si } y \in \operatorname{Sop} \{Y\} \\[0.5em]
>   0 & \text{ otro caso }
> \end{cases}
> $$

