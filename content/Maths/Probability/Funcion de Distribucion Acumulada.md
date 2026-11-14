---
modified: 2026-11-13T23:34:20Z
title: "Función de masa acumulada"
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
Conocida también como *función de acumulación*, siempre puede definirse para cualqueir v.a. y gracias a ella podemos identificar todas las propiedades de la v.a.

De manera análoga a la *función de densidad*, induce el estudio de un experimento aleatorio y su modelo de proba, al estudio de las funciones reales.

> [!tip|idea]- **Idea Intuitiva.**
>
> La función de distribución evualuada en $x$, es la proba de que la variable aleatoria tome un valor menor o igual a $x$, i.e, que tome un valor en el intervalo $(-\infty, x]$.

> [!theorem] **Definición.** (Función de Distribución)
>
> Sea $X$ v.a. cualquiera. La **función de distribución** de $X$, denotada $F_{X}(x): \mathbb{R} \to \mathbb{R}$, se define como la probabilidad:
> $$
> F(x) = P[(X \leq x)]
> $$

En el caso discreto,

> [!tip|idea]- **Idea Intuitiva.**
>
> $F(x)$ es la suma de todos los valores positivos hasta $x$ de la función de densidad.
> Y $f(x)$ es el tamaño del salto de la función de distribución en el punto $x$.

> [!theorem] **Teorema.** (Función de Distribución Discreta)
>
> Sea $f(x)$ función de probabilidad (densidad) de $X$, la función de distrubución se calcula:
> $$
> F(x) = \sum_{u\leq x} f(u) 
> $$
> y para obtener $f(x)$ a partir de $F(x)$, se tiene
> $$
> f(x) = F(x) - F(x-)
> $$
> Donde $\displaystyle F(x-) = \lim_{h \to 0^{+}} F(x-h)$, i.e, es el límite por la izquierda de $F$ en $x$.
> Igual, $\displaystyle F(x+) = \lim_{h \to 0^{+}} F(x + h)$.

En el caso continuo,

> [!theorem] **Teorema.** (Función de Distrubución Continua)
>
> Sea $f(x)$ función de densidad de $X$, dada la definición, se tiene que
> $$
> F(x) = \int_{-\infty}^{x} f(u) \, du
> $$
> Por el TFC, cuando $F(x)$ es diferenciable,
> $$
> f(x) = F'(x)
> $$

> [!theorem] **Teorema.** (Propiedades)
>
> Toda función de distrubución $F(x)$ satisface:
> 1. $\displaystyle \lim_{x \to \infty} F(x) = 1$
> 2. $\displaystyle \lim_{x \to -\infty} F(x) = 0$
> 3. $\displaystyle x_{1}\leq x_{2} \implies F(x_{1}) \leq  F(x_{2})$, i.e. nunca es decreciente
> 4. $\displaystyle F(x) = F(x+)$, i.e. es continua por la derecha.

> [!proof]- **Proof.**
>

> [!theorem] **Definición.** (Función de Distrubución)
>
> Toda función $F: \mathbb{R}\to \mathbb{R}$ que cumpla  las cuatro propiedades anteriores se le llama **función de distrubución** sin importar si tiene una variable aleatoria que la defina.



