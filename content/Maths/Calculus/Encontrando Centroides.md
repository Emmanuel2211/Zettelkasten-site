---
modified: 2026-11-13T23:34:20Z
title: "Aplicaciones realcionadas a Centroides"
publish: true
type: zettel
date: "2026-10-28"
status: seed
aliases:
tags:
 - calculus
cssclasses:
 - romana
---
> $\square$ 8. Un rectángulo $R$ con lados de longitud $a$ y $b$ es dividido en dos partes, $R_{1}$ y $R_{2}$, por un arco de parábola que tiene vértice en una esquina de $R$ y pasa por la esquina opuesta. Encuentra los centroides de $R_{1}$ y $R_{2}$.

La función de la parábola que separa nuestro cuadrado está dada por $y = px^{2}$. Ent. $b= p(a)^{2} \implies  p = \frac{b}{a^{2}}$. Usamos las siguientes formulasas,
$$
\begin{align}
  \bar{x} &= \int_{0}^{a} [f(x) - g(x)] \, dx \\[0.5em]
  \bar{y} &= \frac{\displaystyle\int_{0}^{a} [f^{2}(x) - g^{2}(x)] \, dx}{2A}
\end{align}
$$
donde $f$ y $g$ acotan la región de interés.
