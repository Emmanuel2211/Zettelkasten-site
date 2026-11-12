---
modified: 2026-11-06T19:08:09Z
title: "Algoritmo de Euclides"
publish: true
type: zettel
date: "2026-09-23"
status: undone
aliases:
tags:
 - algebra
cssclasses: 
 - romana
---
Después de definir MCD, ver más teoremas de divisibilidad y definir a los primos. Tenemos lo necesario para desarrollar el Algoritmo de Euclides.

> [!theorem] **Lema.**
>
> Sean $a,b \in  \mathbb{Z}$, $b \neq  0$. Para todo $q \in  \mathbb{Z}$
> $$
> (a,b) = (a-bq, b)
> $$

> [!proof]- **Proof.**
>
> Sean $a,b \in \mathbb{Z}$ con $b\neq 0$. Sea $q \in \mathbb{Z}$.
> $D = \{ d \in  \mathbb{Z} :  d \mid  a \land  d \mid b \}$
> $T = \{ c \in  \mathbb{Z} :  c \mid  a- bq \land  c \mid  b \}$
> Veamos que $D = T$.
> $(\subseteq)$
> Sea $d \in  D$, como $d \in  D$ ent. $d \mid  a$ y $d \mid b$.
> Como $d \mid  a$ y $d \mid  b$, ent. $d \mid a - bq$.
> Así, $d \mid  a - bq$ y $d \mid b$, ent. $d \in  T$.
> $( \supseteq )$
> Sea $c \in  T$, es decir tal que $c \mid  a -bq$ y $c \mid b$.
> Como $c \mid  b$, ent. $c \mid bq$.
> Así, $c \mid a-bq$ y $c \mid  bq$, ent. $c \mid  (a-bq) + bq = a$
> Por lo tanto $c \mid  a$ y $c \mid b$, ent. $c \in D$
> Finalmente, como $D = T$ tenemos
> $$
> (a,b) = \max \left\{D\right\}  = \max \left\{T\right\}  = (a-bq,b)
> $$

> [!example]- Ejemplo.
>
> $(315, 56) = \ ?$
> $(315, 56) = (315 - 5(56), 56) = (35, 56) = (35, 56 - 35) = (35, 21)$
> $= (35-21,21) = (14, 21) = (14 , 21 -14) = (14, 7) = (0, 7) = 7$.

> [!theorem] **Teorema.** (Algortimo de Euclides)
>
> Sean $a,b \in \mathbb{Z}$, $b >0$ 
> Si $b \mid a$, ent. $(a,b) = b$.
> Si $b \not\mid a$ aplicando el algoritmo de la división tenemos
> $$
> \begin{align}
>   a &= bq_{1} + r_{1}  \quad 0<r_{1}< b \\[0.5em]
>   b  &= r_{1}q_{2} + r_{2} \quad 0 < r_{2} < r_{1} \\[0.5em]
>   r_{1} &=  r_{2} q_{3} + r_{3} \quad 0 < r_{3} < r_{2} \\[0.5em]
>    &\vdots \\[0.5em]
>    r_{n-2} &=  r_{n-1} q_{n} + r_{n} \quad 0 < r_{n} < r_{n-1}  \\[0.5em]
>    r_{n-1} &=  r_{n} q_{n+1}
> \end{align}
> $$
> Tenemos que $r_{n}$, el útlimo residuo no nulo de ese proceso, es $(a,b)$.
> Más aún, despejando los residuos obtengo una combinación lineal entera que me da $(a,b)$.


> [!example]- Ejemplo.
>
> $(315, 56)$
> $$
> \begin{align}
>   315 &= 56(5) + 35 \quad 35 < 56 \\[0.5em]
>   56 &= 35(1) + 21 \quad 21 < 35 \\[0.5em]
>   35  &= 21(1) + 14 \quad 14 < 21 \\[0.5em]
>   21 &= 14(1) + 7 \quad 7 < 14 \\[0.5em]
>   14 &= 7(2) + 0
> \end{align}
> $$
> Además,
> $7 = 21-14 = 21-(35-21) = 21(2) - 35 = (56 - 35)(2) - 35 = 56(2) + 35(-3)$
> $= 56(2) + (315 - 56(5))(-3)= 56(17) + 315(-3)$
> Así, $7 = 56(17) + 315(-3)$
> Obtenemos que también,
> $$
> 56(-28) + 315(5) = 7
> $$
> por lo que la comb. lineal entera de $56$ y $315$ que es igual a $7$ no es única.

> [!proof]- **Proof.** 
