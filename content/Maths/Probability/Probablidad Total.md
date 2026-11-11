---
modified: 2026-09-12T20:56:31Z
title: "Probabilidad Total"
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
Hay multiples definiciones, dependiendo de la materia. Para Proba 1:

> [!theorem] **Definición** (Partición de $\Omega$)
>
> Se cumple la definición de toda la vida de una partición.
> 1. $\displaystyle \bigcup_{i=1}^{\infty} B_{i} = \Omega$
> 2. $B_{i} \cap B_{j} = \varnothing \ \forall i \neq j$


> La **probabilidad total** es, de forma intuitiva, una manera de **calcular la probabilidad de un evento dividiéndolo en varios escenarios posibles** que no pueden ocurrir al mismo tiempo.

> [!theorem] **Teorema.** (Probablidad Total)
>
> Sea $A$ un evento y una partición $\mathbb{B}= \{ B_{1},B_{2},\dots \}$ de $\Omega$ con $P[B_{i}] > 0 \ \forall i$.
>
> $$
> P[A] = \sum_{i=1}^{\infty} P[A \mid B_{i}] P [B_{i}]
> $$

> [!proof]- **Proof.**
>
> $$
> \begin{align}
> \sum_{i=1}^{\infty} P[A \mid  B_{i}]P[B_{i}] &= \sum_{i=1}^{\infty} \frac{P[A \cap B_{i}]}{P[B_{i}]} P[B_{i}]\\[0.5em]
>  &= \sum_{i=1}^{\infty} P[A\cap B_{i}] \\[0.5em]
>   &= P \left[\bigcup_{i=1}^{\infty} \{A \cap B_{i}\}\right]\\[0.5em]
>    &= P\left[ A \cap \left( \bigcup_{i=1}^{\infty} B_{i}  \right)  \right] \\[0.5em]
>     &= P [ A \cap \Omega ] \\[0.5em]
>      &= P[A] \tag*{$\blacksquare$}
> \end{align}
> $$ 



> [!example]- Ejemplo.
>
> En cierto curso hay 3 ayudantes, y se sabe que $P[\text{ dar buena calse }] = 1$.
> El ayudante 2: $P[\text{ B.C. }] = 0.5$, el ayudante $3$: $P[\text{ B.C. }] = 0.2$
> Cada martes puede llegar un ayudante al azar (con Probablidad Clásica). 
> Un estudiante falta a la clase del martes y su amigo le dice que la clase fue buena.
> ¿Cuál es la probablidad que la clase la haya dado el segundo ayudante?
> **Solución.**
> Tenemos $P[A_{2}] = \frac{1}{3}$, buscamos $\displaystyle P[A_{2} \mid B] = \frac{P[A_{2} \cap B]}{P[B]}$
> ¿Qué sabemos?
> $\displaystyle P[A_{i}] = \frac{1}{3}, i = \{ 1,2,3 \}$
> $P[B \mid A_{1} ] = 1$, $P[B \mid A_{2}] = 0.5$, $P[B \mid A_{3}] = 0.2$
> Utilizando el Teorema de Proba Total,
> $$
> \begin{align}
> P[B] &= P[B\mid A_{1}]P[A_{1}] + P[B \mid A_{2}]P[A_{2}] + P[B \mid A_{3}]P[A_{3}] \\[0.5em]
>  &= 0.5666
> \end{align}
> $$
> Y $\displaystyle P[B \cap A_{2}]  = P[B \mid A_{2}] P[A_{2}] = (0.5)\left(\frac{1}{3}\right) = 0.1666$
> $$
> \therefore P[A_{2}\mid B] = \frac{0.1666}{0.5666} = 0.2941
> $$



