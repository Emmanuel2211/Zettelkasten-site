---
modified: 2026-11-11T18:24:30Z
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
> Sean $m \in \mathbb{Z}^{+}, a \in \mathbb{Z}$. El número $a$ tiene un inverso módulo $m$, es decir, existe $x \in \mathbb{Z}$ tal que
> $ax \equiv 1 \pmod{m}$, si y sólo si $(a,m) = 1$.

> [!proof]- **Proof.**
>
> Sean $m \in \mathbb{Z}^{+}, a \in \mathbb{Z}$.
> $(\implies )$ Supongamos que $a$ tiene un inverso módulo $m$. Entonces existe $b \in \mathbb{Z}$ tal que,
> $$
> ab \equiv 1 \pmod{m}
> $$
> Así, $m\mid ab - 1$, entonces $ab - 1 = m k$ con $k \in \mathbb{Z}$ y por lo tanto $ab + m (-k) = 1$ con $b, - k \in \mathbb{Z}$. Tenemos así una combinación lineal de $a$ y $m$ igual a $1$, que debe ser entonces la comb. lineal positiva mínima
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
> > [!proof]- **Proof.**
> >
> > Si $b,c \in \mathbb{Z}$ son tales que $ab \equiv 1 \pmod{m}$ y $ac \equiv 1 \pmod{m}$, entonces por transitividad, $ab \equiv ac \pmod{m}$ y como $(a,m) = 1$ (son primos relativos) por cancelación $b \equiv c \pmod{m}$.

> [!example]- Ejemplo.
>
> 1. $m = 11$. Buscamos un inverso de $3$ módulo $11$:
> $$
> \begin{aligned}
> & 3(1) \equiv 3 \pmod{11}, \quad 3(2) \equiv 6 \pmod{11}, \quad 3(3) \equiv 9 \pmod{11}, \\[0.5em]
> & 3(4) \equiv 1 \pmod{11}
> \end{aligned}
> $$
> Así, $4$ es un inverso de $3$ módulo $11$.
> 2. $m = 16$. Buscamos un inverso de $9$ módulo $16$. Por el algoritmo de Euclides:
> $$
> \begin{aligned}
> 16 &= 9(1) + 7 && 0 < 7 < 9 \\[0.5em]
> 9 &= 7(1) + 2 && 0 < 2 < 7 \\[0.5em]
> 7 &= 2(3) + 1 && 0 < 1 < 2 \\[0.5em]
> 2 &= 1(2) + 0
> \end{aligned}
> $$
> Así, $(9,16) = 1$ y, despejando los residuos de abajo hacia arriba ($1 = 7 - 2(3)$, $2 = 9 - 7$, $7 = 16 - 9$),
> $$
> \begin{aligned}
> 1 &= 7 - 2(3) = 7 - (9 - 7)(3) = 7(4) + 9(-3) \\[0.5em]
> &= (16 - 9)(4) + 9(-3) = 16(4) + 9\boxed{(-7)}
> \end{aligned}
> $$
> Entonces $9(-7) - 1 = 16(-4)$ y por lo tanto
> $$
> 9(-7) \equiv 1 \pmod{16}
> $$
> Concluimos que $-7$ es un inverso de $9$ módulo $16$ (es la Observación (1) con $s = -7$). Como $-7 \equiv 9 \pmod{16}$, entonces $9$ también es inverso de $9$ módulo $16$. Podemos verificarlo:
> $$
> 9(9) - 1 = 81 - 1 = 80 = 16(5)
> $$
> así,
> $$
> 9(9) \equiv 1 \pmod{16}
> $$
> 

> [!theorem] **Definición.** (Inverso Multiplicativo Modular)
>
> Sean $m \in  \mathbb{Z}^{+}, a \in \mathbb{Z}$, con $(a,m) = 1$. Decimos que $b \in \mathbb{Z}$ es un **inverso de $a$ módulo** $m$ si
> $$
> ab \equiv 1 \pmod{m}
> $$
> y lo denotamos $a_{m}^{-1}$, esto es un abuso de notación pero es válido.

> [!example]- Ejemplo.
>
> $3,-2,8$ son inversos de $2$ mod. $5$, por abuso de notación, trabajando mod. 5:
> $$
> \begin{align}
>   2_{5}^{-1} &\equiv 3 \\
>   2_{5}^{-1} &\equiv -2 \\
>   2_{5}^{-1} &\equiv 8
> \end{align}
> $$





