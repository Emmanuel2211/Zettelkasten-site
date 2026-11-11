---
modified: 2026-06-10T04:59:11Z
title: "Teorema de Pitágoras"
publish: true
type: zettel
date: "2026-06-09"
aliases:
 - 
tags: 
 - 
cssclasses: 
 - romana
---
> [!theorem] **Proposición 47, Libro I.** (Teorema de Pitágoras)
>
> Sea $\triangle ABC$, el cuadrado de su hipotenusa es igual a la suma de los cuadrados de sus catetos.

> [!proof]- **Proof.** 

> [!theorem] **Proposición 48, Libro I** (Reciproco de Pitágoras)
>
> Sea $\triangle ABC$, si cuadrado de uno de sus lados es igual a la suma de los cuadrados de los otros dos lados, entonces el ángulo entre estos dos lados es $\perp$.

> [!proof]- **Proof.** 



---

Diferentes Demostraciones.
**1. Vectorial**
Por [[Producto Interior|(2.6)]]
$$
\begin{align}
\lvert \mathbf{a} + \mathbf{b} \rvert ^{2} &= (\mathbf{a}+\mathbf{b})\cdot(\mathbf{a}+\mathbf{b}) \\[1em]
&= \mathbf{a} \cdot(\mathbf{a}+\mathbf{b})+\mathbf{b}(\mathbf{a}+\mathbf{b}) \\[1em]
&=\mathbf{a\cdot a} + \mathbf{a} \cdot \mathbf{b}+ \mathbf{b\cdot a} + \mathbf{b\cdot b} \\
&= \lvert \mathbf{a} \rvert ^{2} +2\mathbf{a\cdot b} + \lvert \mathbf{b} \rvert ^{2}
\end{align}
$$
Dado que es un triangulo rectángulo, $\mathbf{a}\cdot \mathbf{b}=0$ 
$$
\therefore \ \lvert \mathbf{a} + \mathbf{b} \rvert ^{2} = \lvert \mathbf{a} \rvert ^{2} + \lvert \mathbf{b} \rvert ^{2}
$$

