---
modified: 2026-11-13T23:34:20Z
title: "Variable Aleatoria Continua"
publish: true
type: zettel
date: 2026-09-30
status: seed
aliases:
tags:
  - probability
cssclasses:
  - romana
---
> Decimos que una variable aleatoria es **continua** cuando toma todos los valores dentro de un intervalo $(a,b) \subseteq  \mathbb{R}$. Para formalizar esto, necesitamos ver la definición de [[Funcion de Distribucion Acumulada]].

> [!theorem] **Definición.** (V.A. Continua)
>
> Se dice que una v.a. $X$ es continua si su función de distrubución $F(x)$ es una función continua.


> [!theorem] **Definición.** (Función de Densidad)
>
> Sea $X$ una v.a. **continua**. Decimos que la función integrable y no negativa 
> $f(x): \mathbb{R}\to \mathbb{R}$ es la **función de densidad de** X si para cualquier intervalo
> $[a,b] \in \mathbb{R}$ se cumple
> $$
> P(X \in [a,b]) = \int_{a}^{b} f(x) \, dx
> $$




> [!tip|idea]- **Idea Intuitiva.**
>
> Es el conjunto de puntos del recorrido de $X$ donde la función de probabilidad (o densidad) es no nula.

> [!theorem] **Definición.** (Soporte)
>
> Dada $X$ v.a. sobre $(\Omega ,\mathcal{F}, P)$, su soporte es, sea $f_{X}$ función de densidad sobre $X$, 
> $$
> \operatorname{sop}(X) = \{ x \in \mathbb{R} \mid f_{X}(x) > 0 \}
> $$


> [!theorem] **Teorema.** (Propiedades)
>
> Toda función de densidad  $f(x)$ de una v.a. continua cumple, ánalogo a las propiedades discritas:
> 1. $f(x) \geq  0 \quad \forall  x \in \mathbb{R}$
> 2. $\displaystyle \int_{-\infty}^{\infty} f(x) \, dx = 1$
