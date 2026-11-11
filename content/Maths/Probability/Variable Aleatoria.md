---
modified: 2026-11-04T18:23:48Z
title: "Variable Aleatoria"
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
> Es una función que asigna un real a cada resultado de un experimento.

> [!theorem] **Definición.** (Variable Aleatoria)
>
> Una variable aleatoria, denotada $X$, es una función $X: \Omega \to \mathbb{R}$ tal que para cualquier $x \in  \mathbb{R}$,
> $$
> \{ \omega \in \Omega \mid X(\omega ) \leq x \} \in  \mathcal{F}
> $$
>
> Sea $A \in \mathcal{B}(\mathbb{R})$ cjto. boreliano, denotamos $(X \in A)$ como la imagen inversa de $A$
> $$
> (X \in  A) = X^{-1}(A) = \{ \omega  \in  \Omega  \mid  X(\omega ) \in A \}
> $$

La variable aleatoria, no es ni variable, ni aleatoria, es una función determinista, que relaciona resultados $\omega$ con número $\mathbb{R}$. Sin embargo, *su nombre se justifica al considerar que los posibles resultados del experimento son los valores de la funcíon* $X$. Vemos ejemplos para tener esto claro:

Como $(X \in  A) \in  \mathcal{F}$, podemos sacar la medida de proba $P[A]$ para $A \in \mathcal{B}(\mathbb{R})$. Es decir, podemos **inducir** la medida de proba a intervalos de la forma $(-\infty, x]$, y en general, a ciertos números $\mathbb{R}$ pertenecientes a $\mathcal{B}(\mathbb{R})$.


> [!example]- Ejemplo.
>
> Sea $A = (x,y)$, considerando $(X \in  A)$ podemos también escribirlo de la forma $( x < X < y )$, es decir
> $$
> (X \in (x,y)) = \{  \omega  \in  \Omega  \mid  x < X(w) < y \}
> $$
> De misma forma $(X \in (-\infty,x])$ es $(X \leq  x)$, es decir
> $$
> (X \in (-\infty,x]) = \{ \omega \in  \Omega  \mid X(w) \leq x  \}
> $$
> Y este último es una condición muy especial (*condición de medibilidad*), notese que está en nuestra definición de Variable Aleatoria.


> [!Info]- Medida de Probabilidad Inducida
>
> Sea cualquier intervalo de la forma $(-\infty,x]$, por medio de su imagen inversa $X^{-1}((-\infty,x])$ se puede aplicar la medida de probablidad $P$, pues su $X^{-1}$ está en $\mathcal{F}$ (dada nuestra definición). Así, mediante una variable aleatoria $X$ puede tomarse la proba $P$ de $A \in  \mathcal{B}(\mathbb{R})$. En ocaciones se le denota $P_{X}$, llamada **medida de proba inducida por la variable aleatoria** $X$. Así pues, tenemos un nuevo esp. de proba. de interés $(\Omega , \mathcal{B}(\mathbb{R}), P)$.


> [!theorem] **Definición.** (Función Indicadora)
>
> La variable aleatoria en la cual, sea $A$ evento, toma el valor $1$ si $A$ ocurre o es $0$ si $A$ no ocurre, es llamada **función indicadora**, denotada:
> $$
> \mathbb{1}_{A}(w) = \begin{cases}
>   1 & w \in A \\[0.5em]
>   0 & w \not\in A
> \end{cases}
> $$



> [!example]- Ejemplo.
>
> Queremos saber la cantidad de aguilas que salieron en 4 lanzamientos de una moneda. Esto podríamos definirlo como una función $X: \Omega \to \mathbb{R}$ tal que para cada $\omega  \in  \Omega$ se define $X(\omega ) = \# \text{ de ágilas en } \omega$.
> Al ser función, tenemos que su imágen directa es, sea $B \subseteq \mathbb{R}$.
> $$
> X^{-1}[B] = \{ \omega  \in  \Omega \mid X(\omega ) \in B  \}
> $$
> En este experimento tenemos que $B = \{ x \}$, con $x \in  \mathbb{N}$ (el núm. de ágilas), es decir
> $$
> X^{-1}[\{ x \}] = \{ \omega \in \Omega \mid X(\omega ) = x \}
> $$
> Observese que $X^{-1}[\{ 2 \}]$ está en $\mathcal{F}$ (*sigma-álgebra*), por lo que le podemos asignar una proba.
 

---

###### Referencias

- https://blog.nekomath.com/proba1-variables-aleatorias/
