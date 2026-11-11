---
modified: 2026-05-04T19:38:29Z
title: "Traslación de ejes"
publish: true
type: zettel
status: 
links: 
tags: []
date: "2026-04-08"
aliases: [ "" ]
cssclasses: romana
materia: 
---
> [!theorem] **Def.** (Traslación)
>
> Sea $v \in \mathbb{R}^n$. Se define la traslación a lo largo del vector $v$ como la función $T_{v}: \mathbb{R}^n \to \mathbb{R}^n$ dada por:
> $$
> T_{v}(x) = x + v
> $$

> [!theorem] **Teorema.** (Isometría)
>
> Sea $v \in \mathbb{R}^n$, la traslación $T_{v}$ preserva la distancia entre cualquier par de puntos $x,y \in \mathbb{R}^n$.

> [!proof]- **Proof.** 
>
> Sean $x,y \in \mathbb{R}^n$ con $d(x,y) =\lvert x-y \rvert$. 
> $$
> \begin{align}
> x' = x + v \\[0.5em]
> y' = y + v
> \end{align}
> $$
> Ahora vemos que
> $$
> \begin{align}
> d(x', y') &= \lvert x' - y' \rvert  \\[1em]
> &= \lvert (x+v) - (y+v) \rvert = \lvert x-y \rvert  \\[1em]
> \therefore d(x',y') &= d(x,y) \tag*{$\blacksquare$}
> \end{align}
> $$
> 
> 

> [!theorem] **Teorema.** (Las traslaciones forman un grupo abeliano)
>
> El conjunto de todas las traslaciones en $\mathbb{R}^n$ posee uan estructura algebraica de grupo bajo la operación de composición de funciones.








