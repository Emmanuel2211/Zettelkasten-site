---
modified: 2026-10-22T21:53:48Z
title: "Combinaciones"
publish: true
type: zettel
date: "2026-07-03"
aliases:
tags: 
 - algebra
cssclasses: 
 - romana
---
> Ahora, interpretemos en lugar de listas, sacos!
> ¿Cuántos "sacos" de $m$ elementos podemos hacer? Sea un conjunto $\left| A \right| = n$.
> $$
> A = \{ a,b,c,d \}
> $$
> y queremos subconjuntos de $2$ elementos. Claramente $\lvert A \rvert = 4$.
> Se tendrá que
> $$
> O^{4}_{2} = \frac{4!}{2!} = \text{ Listas posibles }
> $$
> $$
> \text{ Num. Listas } = (2!)(\text{ Num sacos })
> $$
> $$
> \implies  \text{ Num. sacos } = \frac{\text{ Num listas }}{2!} = \frac{4!}{2! (2!)}
> $$

En general,



> [!theorem] **Definición.** (Combinación)
>
> Sea $A$ un cjnt. sean $n,m \in  \mathbb{N}$ tales que $0\leq m\leq n$. Una $m$**-combinación de** $A$ es cualquier subconjunto de $A$ que tenga exactametne cardinalidad $n$. Denotamos al número de **combinaciones de** $A$ **tomados de** $m$ **en** $m$ como
> $$
> C_{m}^{n} = \begin{pmatrix}
> n \\
> m
> \end{pmatrix} = \frac{n!}{m!(n-m)!}
> $$

En calculadoras: $nCm$, $nPm$, $nOm$

> [!theorem] **Teorema.** (Regla de Pascal)
>
> Sea $m \geq 1$, $1\leq j \leq m$
> $$
> \binom{m}{j} = \binom{m-1}{j} + \binom{m-1}{j-1}
> $$

