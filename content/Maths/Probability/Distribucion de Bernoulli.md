---
modified: 2026-10-21T00:12:18Z
title: "Distribución de Bernoulli"
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
Es un caso particular de la distribución binomial.

Un **ensayo Bernoulli**, es aquel experimento aleatoria con únicamente dos posibles resultados: *éxito* o *fracaso*.

> [!tip]+ **Idea.**
> Surge en experimentos donde los resultados se clasifican solo como exito o fracaso. Y se define una v.a. de la siguiente forma:
> $$
> X(w) = \begin{cases}
>   1 & \text{ Exito } \\[0.5em]
>   0 & \text{ Fracaso } 
> \end{cases}
> $$
> Sean $p$ y $1-p$ las probabilida de exito y fracaso respectivamente.
> Entonces decimos que $X \sim \operatorname{Ber} (p)$ con parámetro $p \in (0,1)$.

> [!theorem] **Definición.** ($\operatorname{Ber} (p)$)
> Sea $X \sim \operatorname{Ber} (p)$, su función de densidad está dada por
> $$
> f(x) = \begin{cases}
>   1-p & x = 0 \\[0.5em]
>   p & x = 1 \\[0.5em]
>   0 &  \text{otro caso }
> \end{cases}
> $$
> De forma equivalente, $f(x) = p^{x}(1-p)^{1-x}$ si $x \in \{ 0,1 \}$.

> [!theorem] **Teorema.** (Propiedades)
> Sea $X \sim \operatorname{Ber}(p)$
> 1. $\operatorname{E}[X] = p$
> 2. $\operatorname{Var}(X) = p(1-p)$

