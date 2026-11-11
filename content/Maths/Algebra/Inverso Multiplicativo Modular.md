---
modified: 2026-10-30T14:22:30Z
title: "Congruencia Inversa"
publish: true
type: zettel
date: "2026-09-01"
status: undone
aliases:
tags:
 - algebra
cssclasses:
 - romana
---
> [!theorem] **Teorema.**
>
> Sean $m \in \mathbb{Z}^{+}, a \in \mathbb{Z}$. El número $a$ tiene un inverso módulo $m$, es decir
> $ax \equiv 1 \pmod{m}$ si y sólo si $(a,m) = 1$.

> [!proof]- **Proof.**
>
> Sean $m \in \mathbb{Z}^{+}, a \in \mathbb{Z}$.
> $(\implies )$ Supongamos que $a$ tiene un inverso módulo $m$. Entonces existe $b \in \mathbb{Z}$ tal que,
> $$
> ab \equiv 1 \pmod{m}
> $$
> Así, $m\mid ab - 1$, entonces $ab - 1 = m k$ con $k \in \mathbb{Z}$ y por lo tanto $ab + m (-k) = 1$ con $b, - k \in \mathbb{Z}$. Tenemos así una combinación lineal de $a$ y $m$ igual a $1$, que deber ser entonces la comb. lineal positivoa mínima
> $$
> \therefore (a,m) = 1
> $$
> $(\impliedby )$ Sup. que $(a,m) = 1$. Ent. existe $s,t \in \mathbb{Z}$ tales que
> $$
> as + mt = 1
> $$
> Así, $as - 1 = mt$ con $t \in \mathbb{Z}$ y por lo tanto
> $$
> m\mid  as - 1
> $$
> Tenemos entonces que $as \equiv 1 \pmod{m}$ y por def. $s$ es un inverso de $a$ módulo $m$.
> $$
> \tag*{$\blacksquare$}
> $$


> [!observation]+ **Observación.**
>
> 1. Si $as + mt = 1$, entonces $s$ es un inv. de $a$ mod $m$.
> 2. Si $(a,m) = 1$, cualesquiera dos inversos de $a$ son congruentes mód. $m$. 
> En otras palabras, si $(a,m) = 1$  la solución de $ax \equiv 1 \pmod{m}$ es única módulo $m$, es decir, si $s,t \in \mathbb{Z}$ son soluciones de $ax \equiv 1 \pmod{m}$, ent.
> $$
> s \equiv t \pmod{m}
> $$
> > [!proof]+ **Proof.**
> >
> > Si $b,c \in \mathbb{Z}$ son tales que $ab \equiv 1 \pmod{m}$ y $ac \equiv 1 \pmod{m}$, entonces por transitividad, $ab \equiv ac \pmod{m}$ y como $(a,m) = 1$ (son primos relativos) por cancelación $b \equiv c \pmod{m}$.


> [!theorem] **Definición.** (Inverso Multiplicativo Modular)
>
> Sean $m \in  \mathbb{Z}^{+}, a \in \mathbb{Z}$, con $(a,m) = 1$. Decimos que $b \in \mathbb{Z}$ es un **inverso de $a$ módulo** $m$ si
> $$
> ab \equiv 1 \pmod{m}
> $$
> y lo denotamos $a_{m}^{-1}$, esto es un abuso de notación pero es valido.

> [!example]+ Ejemplo.
>
> $3,-2,8$ son inversos de $2$ mod. $5$, por abuso de notación, trabajando mod. 5:
> $$
> \begin{align}
>   2_{5}^{-1} &\equiv 3 \\
>   2_{5}^{-1} &\equiv -2 \\
>   2_{5}^{-1} &\equiv 8
> \end{align}
> $$




