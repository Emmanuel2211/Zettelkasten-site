---
modified: 2026-10-23T00:19:35Z
title: "Polinomios de Taylor"
publish: true
type: zettel
date: 2026-09-23
status: undone
aliases: 
  - "Serie de Taylor"
tags:
  - calculus
cssclasses:
  - romana
---
> [!theorem] **Definición.** (Polinomio de Taylor)
>
> Sea $I \subseteq \mathbb{R}$ un intervalo abierto y $a \in  I$. Sea $f: I\to \mathbb{R}$ función $n$-veces diferenciable en $a$. El **polinomio de Taylor de grado $n$ con centro en** $a$ denotado $P_{n,a}(x)$,
> $$
> P_{n,a}(x) = \sum_{k=0}^{n} \frac{f^{(k)}(a)}{k!} (x-a)^k
> $$
> Desglosado, esto es:
> $$
> P_{n,a}(x) = f(a) + \frac{f'(a)}{1!}(x-a) + \frac{f''(a)}{2!}(x-a)^2 + \dots + \frac{f^{(n)}(a)}{n!}(x-a)^n + R_{n+1}
> $$
> Donde $R_{n+1}$ es el **residuo de Taylor** al paso $n+1$.
> Si $a = 0$, es conocido como **polinomio de Maclaurin**.

> [!theorem] **Definición.** (Residuo de Lagrange)
>
> Definimos $R_{k+1}(x)$ como el residuo al paso $k+1$ de la expansión de Taylor.
> $$
> R_{k+1}(x) = \int_{a}^{x} \frac{(x-t)^{k}}{k!} f^{(k+1)}(t) \, dt
> $$
>



> [!theorem] **Teorema.** (Algunas Expansiones Bonitas)
>
> Algunos polinomios de Maclaurin importantes:
> - Logaritmo:
> $$
> \begin{align}
> \log \left(1 + x\right) &= \sum_{i=1}^{\infty} (-1)^{n+1}\frac{x^{n}}{n}  = x - \frac{x^{2}}{2} + \frac{x^{3}}{3} - \dots + (-1)^{n-1} \frac{x^{n}}{n} + R_{n,0}(x) \\[0.5em]
> \log \left(1 - x\right) &= -\sum_{i=1}^{\infty} \frac{x^{n}}{n} = -x - \frac{x^{2}}{2} - \frac{x^{3}}{3} - \dots
> \end{align}
> $$
> - Exponencial:
> $$
> e^{x} = \sum_{i=0}^{\infty} \frac{x^{n}}{n!} = 1 + x + \frac{x^{2}}{2!}  + \frac{x^{3}}{3!} + \frac{x^{4}}{4!} \dots + \frac{x^{n}}{n!} + R_{n,0}(x)
> $$


