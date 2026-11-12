---
modified: 2026-10-15T20:40:11Z
title: "Variable Aleatoria Discreta"
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
> [!theorem] **Definición.** (V.A. Discreta)
>
> Sea $X$ una v.a. sobre $(\Omega ,\mathcal{F},P)$, diremos que es una **variable aleatoria discreta** si el conjunto de valores que puede tomar $X$, o sea $\operatorname{Im} \{X\}$, es **finito** o **infinito numerable**.
>



> [!theorem] **Definición.** (Función de Masa, Densidad o Probabilidad)
>
> Sea $X$ una v.a. discreta con valores $x_{0},x_{1}, \dots$ La función de proba de $X$, denotada $f_{X}: \mathbb{R} \to \mathbb{R}$ se define como
> $$
> f_{X}(x) = \begin{cases}
>   P(X = x) & x = x_{0},x_{1}\dots \\[0.5em]
>   0 & \text{ en otro caso }
> \end{cases}
> $$
> Otra forma de escribirlo, $f_{X}(x)  = P(X=x)$


> [!observation]+ **Observación.**
>
> De nuestra definción, ahora podemos saber la proba de una evento $A$ por medio de la suma de la función de proba de todos sus elementos $x \in A$, esto es
> $$
> P(X \in A) = \sum_{x \in A} f_{X}(x) 
> $$
> Así, la función de densidad $f_{X}$ muestra la forma en la que la probabilidad $P$ se distribuye sobre el conjutno de puntos $x_{0},x_{1}\dots$, es decir, sobre $\operatorname{Im} \{X\}$.

> [!tip|idea]- **Idea Intuitiva.**
>
> El soporte es el conjunto de valores que se puede tomar con probabilidad distinta de cero.

> [!theorem] **Definición.** (Soporte)
>
> Dada v.a. $X$ sobre $(\Omega ,\mathcal{F}, P)$, su **soporte**, denotado $\operatorname{sop}(X)$ o $\operatorname{supp}(X)$ se define como el menor conjunto cerrado cuya probabilidad sea igual a $1$, es decir,
> $P[X\in\sup\left\{X\right\}] = 1$, y se tiene:
> $$
> \operatorname{supp}(X) = \{ x \in \mathbb{R} \mid P[X = x] > 0 \}
> $$




> [!theorem] **Teorema.** (Propiedades)
>
> Sea $X$ una v.a. discreta sobre $(\Omega ,\mathcal{F},P)$, se cumple que
>
> 1. $\displaystyle f(x) \geq  0 \quad \forall  x \in  \mathbb{R}$
> 2. $\displaystyle \sum_{x} f_{X}(x) =1$

