---
modified: 2026-10-18T23:53:54Z
title: "Distribución Hipergeométrica"
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
> [!tip]+ **Idea.**
>
> Esta distrib. surge cuando tomamos una muestra de un conjunto de objetos de dos tipos. Sup. que tenemos $N$ objetos dentro de una caja, de los caules $K$ son de un primer tipo y $N-K$ de otro. 
> Supongamos que de esta caja tomamos al azar una muestra de tamaño $n$ de tal forma que la selección es sin reemplazo y el orden de los objetos seleccionados no es relevante. Por lo que el espacio muestral tiene cardinalidad $\binom{N}{n}$. Si para cada subcjto. seleccionado se define $X$ v.a. como el núm. de objetos seleccionados que son del primer tipo, ent. $X$ puede tomar valores $0,1,2,\dots,n$. De forma que $X$ toma valor $n$ si todos los objetos seleccionados son del primer tipo, y $X$ toma valor $0$ cuando todos son del segundo. Para que estos últimos casos puedan ocurrir, sup. que $n \leq \min \left\{K , N-K\right\}$.

> [!theorem] **Definición.** ($\operatorname{hipergeo} (N,K,n)$)
>
> $X$ tiene una distrib. hipergeométrica con parámetros $N,K, n$, i.e. $X \sim \operatorname{hipergeo} (N,K, n)$.  Si la proba. de que $X$ tome un valor $x$ está dada por:
> $$
> f(x) = \begin{cases}
>   \displaystyle \frac{\binom{K}{x} \binom{N-K}{n-x}}{\binom{N}{n}} & x = 0,1,\dots,n \\[0.5em]
>   0 & \text{en otro caso } 
> \end{cases}
> $$

> [!theorem] **Teorema.** (Propiedades)
>
> Sea $X \sim \operatorname{Hipergeo(N,K,n)}$
> 1. $\displaystyle \operatorname{E} (X) = n \frac{K}{N}$
> 2. $\displaystyle \operatorname{Var} (X) = n \frac{K}{N}\frac{N-K}{N}\frac{N-n}{N-1}$
