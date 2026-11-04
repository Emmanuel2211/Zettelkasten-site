---
modified: 2026-10-30T14:39:43Z
title: "Teorema de Wilson"
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
> [!theorem] **Lema.**
> Sea $p \in \mathbb{Z}^{+}$ un número primo, $a \in  \mathbb{Z}$. Tenemos que $a^{2} \equiv 1 \pmod{p}$ si y sólo si 
> $a \equiv 1 \pmod{p}$ o $a \equiv -1 \pmod{p}$.

> [!proof]- **Proof.**
> Sea $p \in \mathbb{Z}^{+}$ primo, $a \in \mathbb{Z}$.
> $(\impliedby )$ Supongamos que $a \equiv 1 \pmod{p}$ o $a \equiv -1 \pmod{p}$. Ent. $a^{2} \equiv 1^{2} \pmod{p}$ o $a^{2} \equiv (-1)^{2} \pmod{p}$.
> $(\implies )$ Supogamos que $a^{2} \equiv 1 \pmod{p}$. Entonces $p \mid  a^{2} -1 = (a-1)(a+1)$. Como $p$ es primo se tiene que $p \mid a - 1$ o $p\mid a + 1 = a-(-1)$. Así, $a \equiv 1 \pmod{p}$ o $a \equiv -1 \pmod{p}$.


Una caraterización importante de los números primos:

> [!theorem] **Teorema.** (Teorema de Wilson)
> Sea $p \in \mathbb{Z}^{+}$ un número primo. Tenemos que,
> $$
> (p-1)! \equiv -1 \pmod{p}
> $$

> [!proof]- **Proof.**
> Sea $p \in \mathbb{Z}^{+}$ primo.
> Como $p$ es primo, $1,2,\dots,p-1$ son primos relativos con $p$ y entonces tienen un inverso módulo $p$ por el Teorema de Inversos.
> Además, por el lema anterior, sólo $1$ y $-1$ (o $1$ y $p-1$) son su propio inverso.
> Así $2,3,\dots,p-2$ tienen como inverso otro número de esta misma lista y asoiciando cada uno con su inverso obtenemos productos que son $1$ módulo $p$.
> Entonces, el producto de todos $1 \cdot 2 \cdot 3 \cdots (p-2) \cdot (p-1)$ con 
> $2\cdot \cdots (p-2) \equiv 1 \pmod{p}$, se simplifica módulo $p$ a
> $$
> 1\cdot 2\cdots (p-2)(p-1) \equiv 1(p-1) \pmod{p}
> $$
> pero $1(p-1)\equiv -1 \pmod{p}$ y por transitividad
> $$
> 1\cdot 2 \cdots (p-2)(p-1) \equiv -1 \pmod{p} \tag*{$\blacksquare$}
> $$
>  creo que en lo anteriore se termina el teorema pero esta es otra redaccion.....
> Así,
> $$
> (p-1)! \equiv 1\cdot (2\cdots (p-2))(p-1) \equiv 1(1)(p-1)  \pmod{p}
> $$
>
> $$
> \implies (p-1)! \equiv p-1 \equiv -1 \pmod{p}
> $$
>
> $$
> \therefore (p-1)! \equiv -1 \pmod{p} \tag*{$\blacksquare$}
> $$


> [!theorem] **Teorema.**
> Sea $m \in \mathbb{Z}^{+} \quad (m-1)! \equiv -1 \iff m \text{ es primo }$


> [!proof]- **Proof.**
> $(\impliedby )$ Por Teo. de Wilson
> $(\implies )$ Sup, $(m-1)! \equiv -1 \pmod{m}$, ent. $m \mid (m-1)! - (-1) = (m-1)! +1$
> Ent. $(m-1)! + 1 = mq$ con $q \in \mathbb{Z}$, y así
> $$
> (m-1)! - mq = 1
> $$
> esto es una comb. lineal de enteros igual a uno, ent. $((m-1)!, m) 1$, es decir,
> $$
> 1\cdot 2 \cdots (m-1) \text{ y } m \text{ son primos relativos }
> $$
> Ent. $2,\dots,m-1$ no dividen a $m$,
> $$
> \therefore m \text{ es primo } \tag*{$\blacksquare$}
> $$
