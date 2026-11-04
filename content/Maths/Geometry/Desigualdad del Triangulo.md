---
modified: 2026-06-10T04:49:35Z
title: "Desigualdad del Triángulo"
publish: true
type: zettel
date: "2026-06-09"
aliases:
 - desigualdad triangular
tags: 
 - geometry
 - calculus
cssclasses: 
 - romana
---
> [!theorem] **Proposición 20. Libro I.** (Desigualdad del Triangulo)
> En un triángulo, la suma de dos lados es mayor al tercero.

> [!proof]- **Proof.** 

---

> [!theorem] **Teorema** (Desigualdad del Triángulo Vectorial)
> Sean $\mathbf{a,b} \in V_{n}$ se tiene que
> $$
> \lvert \mathbf{a}+\mathbf{b} \rvert  \leq \lvert \mathbf{a} \rvert +\lvert \mathbf{b} \rvert 
> $$
> Esto es, la suma de las magnitudes de los lados de un triángulo es mayor que la magnitud de su hipotenusa.
> De forma generalizada:
> $$
> \left\lvert  \sum_{i=1}^n x_{i}  \right\rvert \leq \sum_{i=1}^n \lvert x_{i} \rvert 
> $$

> [!proof]- **Proof.** 
> Como $\mathbf{a \cdot b}\leq \lvert \mathbf{a \cdot b} \rvert$, de la [[Desigualdad de Cauchy-Bunyakovsky-Schwarz|desigualdad de Cauchy]] tenemos
> $$
> \mathbf{a \cdot b} \leq \lvert \mathbf{a \cdot b}   \rvert \leq \lvert \mathbf{a} \rvert \lvert \mathbf{b} \rvert .
> $$
> De donde
> $$
> \begin{align}
> \lvert \mathbf{a+b} \rvert ^{2} &= (\mathbf{a+b})\cdot(\mathbf{a+b}) = \lvert \mathbf{a} \rvert^{2} +2\mathbf{a \cdot b}+ \lvert \mathbf{b} \rvert ^{2} \\[1em]
> &\leq \lvert \mathbf{a} \rvert ^{2} +2\lvert \mathbf{a} \rvert \lvert \mathbf{b} \rvert  + \lvert \mathbf{b} \rvert ^{2} = (\lvert \mathbf{a} \rvert +\lvert \mathbf{b} \rvert )^{2}
> \end{align}
> $$
> Lo que implica
> $$
> \lvert \mathbf{a+b} \rvert \leq \lvert \mathbf{a} \rvert +\lvert \mathbf{b} \rvert .
> $$
> Q.E.D.



