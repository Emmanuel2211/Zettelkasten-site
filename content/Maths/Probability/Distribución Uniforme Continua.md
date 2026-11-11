---
modified: 2026-10-30T15:33:02Z
title: "Distribución Uniforme Continua"
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
> [!theorem] **Definición.** ($\operatorname{Unif} (a,b)$ continua)
>
> Sea $X$ v.a. decimos que $X$ tiene distrib. uniforme continua en el intervalo $(a,b)$, i.e. $\operatorname{unif} (a,b)$, cuando su función de densidad es:
> $$
> f(x) =\begin{cases}
>   \displaystyle \frac{1}{b-a} & a < x < b \\[0.5em]
>   0 &  \text{otro caso }
> \end{cases}
> $$
> Esta distrib. tiene como parámetros $a$ y $b$

> [!observation]- **Observación.**
>
> Solo para tenerlo en claro, se puede ver en $f(x)$ que $\operatorname{supp}(X) = [a,b]$.
> También, recuerdese que la $f(x)$ puede verse de forma equivalente con la función indicadora de la sig. manera:
> $$
> f(x) = \frac{1}{b-a} \mathbb{1}_{[a,b]}(x)
> $$
>
> - Otra observación es que en las v.a. continuas, es claro que usar $P[X<x]$ o $P[X\leq x]$ es, generalmente, lo mismo.

![[Pasted image 20261028091746.png|center|300]]


Sea $X \sim \operatorname{Unif} (a,b)$. Veamos sus resultados básicos, primero, su función de distribución.
$$
\begin{align}
F_{X} (x) &= P[X \leq x]\\[0.5em]
 &= \int_{-\infty}^{x} f_{X}(u) \, du \\[0.5em]
 &= \int_{a}^{x} \frac{1}{b-a} \, du \\[0.5em]
 &= \frac{1}{b-a} u\bigg|_{a}^{x} = \frac{x-a}{b-a}
\end{align}
$$

![[Pasted image 20261028092818.png|center|250]]


> [!example]- Ejemplo.
>
> Cierta inversión tiene una tasas de rendimientos $X$ efectiva anual, y se sabe que dicha tasa es una v.a. uniforme, entre el 25% y el 50%. Si tenemos una iversión inicial de \$100. ¿Cuál es la probablidad de que en un año se haya acumulado más de \$130?
> Comencemos llamando $\operatorname{Acum} = Y$, es la inversión acumulada.
> $\implies Y = 100(1+ X)$
> Y queremos saber $P[ Y \geq  130] = P[ 100(1+X) \geq  130]$
> $$
> \begin{align}
>    &= P\left[ (1+X)  \geq  \frac{130}{100}\right] = P\left[ X \geq \frac{130}{100}-1  \right] \\[0.5em]
>     &= P[X \geq  0.3] = \int_{0.3}^{\infty} F_{X}(x) \, dx \\[0.5em]
>  &= \int_{0.3}^{\infty} \frac{1}{0.3 - 0.25}  \mathbb{1}_{[0.25, 0.5]}(x) \, dx \\[0.5em]
> &= \int_{0.3}^{0.5} \frac{1}{0.25} \, dx = \frac{0.2}{0.25} = 0.8 = 80\% \tag*{$\square$}
> \end{align}
> $$



> [!theorem] **Teorema.** (Propiedades)
>
> 1. Función de Distribución.
> $$
> F_{X}(x) = \begin{cases}
>   0 & \text{ si } x<a \\
>   \displaystyle \frac{x - a}{b-a} & \text{ si } a\leq x \leq  b \\
>   1 & \text{ si } x >  b
> \end{cases}
> $$

