---
modified: 2026-11-13T23:34:20Z
title: "Distribución Binomial"
publish: true
type: zettel
date: "2026-09-01"
status: seed
aliases:
tags:
 - probability
cssclasses:
 - romana
---
> [!tip|idea]- **Idea Intuitiva.**
>
> Supongamos que realizamos una serie de $n$ ensayos independientes Bernoulli en donde la probabilidad de éxito de cada ensayo es $p$. Denotemos $E = \text{exito}$ y $F = \text{fracaso}$, es claro que el espacio muestral consiste de $OR_{n}^{2} = 2^{n}$ elementos. Definamos $X$ como la v.a. que indica el número de $E$ en cada uno de nuestros resultados, ent. se tiene que $X$ toma valores $0,1,2,\dots,n$. Así, la probabilidad de obtener $x$ éxitos y $n-x$ fracasos en $n$ ensayos Bernoulli es:
> $$
> \underbrace{p\cdots p}_{x\text{-veces}} \underbrace{(1-p)\cdots (1-p)}_{n-x\text{-veces}} = p^{x}(1-p)^{n-x}
> $$
> esto solo corresponde a los $x$ éxitos de los primero ensayos. Las diferentes formas en que los $x$ éxitos pueden distribuirse en los $n$ ensayos está dada por el coef. binomial $\binom{n}{x}$.

> [!theorem] **Definición.** ($\operatorname{Bin} (n,p)$)
>
> Decimos que $X$ tiene una distribución binomial con parámetros $n$ y $p$, i.e. $\operatorname{Bin} (n,p)$.
> $$
> f(x) = \begin{cases}
>   \binom{ n}{ x}p^{x}(1-p)^{n-x} & x \in \{ 0,\dots,n \} \\[0.5em]
>  0 & \text{otro caso }
> \end{cases}
> $$



> [!theorem] **Proposición.**
>
> Sean $X_{1},\dots,X_{n}$ v.a.s independientes cada una con distribución $\operatorname{Ber} (p)$. Entonces,
> $$
> X_{1}+\dots+X_{n} \sim \operatorname{Bin} (n,p)
> $$
> Recíprocamente, toda variable aleatoria con distrib. $\operatorname{Bin} (n,p)$ puede ser expresada como una suma de la forma anterior.

> [!theorem] **Teorema.** (Propiedades)
>
> Sea $X \sim \operatorname{Bin} (n,p)$
> 1. $\operatorname{E} (X) = np$
> 2. $\operatorname{Var} (X) = np(1-p)$
