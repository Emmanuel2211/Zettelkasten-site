---
modified: 2026-09-08T14:17:41Z
title: "Construcción de los Enteros"
publish: true
type: zettel
date: "2026-08-21"
status: undone
aliases:
tags:
 - algebra
cssclasses: 
 - romana
---
Recordando: ![[Motivacion de la relacion ~#^15a338|Relacion ~]]
Al ser $\sim$ una relación de equivalencia (*ya demostrado*), ***parte*** a $\mathbb{N}^{2}$ en *clases de equivalencia* y, en el contexto de la relación, son pensados como *iguales*.

> [!theorem] **Definición.** $\overline{(n,m)}$ 
>
> Denotamos con $[(n,m)]$ o $\overline{(n,m)}$ a la **clase de equivalencia** de $(n,m)$, es decir,
> $$
> [(n,m)]=\{ (p,q) \in \mathbb{N}^{2} \mid  (n,m)\sim(p,q) \}.
> $$

> [!theorem] **Definición.** ($\mathbb{Z}$)
>
> El conjunto de los **número enteros** es
> $$
> \mathbb{Z} = \{ [(n,m)] \mid (n,m) \in \mathbb{N}^{2} \}.
> $$

*Intuitivamente los enteros corresponden a todas las posibles diferencias entre dos naturales.*

> **Notación.** $\overline{(n,0)}$ se denotará $n$. 

Intuitivamente, podemos visualizar $\mathbb{N}$ como $\mathbb{Z}$, "$n-0 = n$"

![[Pasted image 20260822094521.png|center|338]]

> ¿Cuándo $(n,m)$ es equivalente a una pareja en el eje $x$?
> Es decir, ¿Cuándo $\exists p \in \mathbb{N}$ tal que $(n,m) \sim (p,0)$?
> Necesito $n + 0 = m + p$, es decir $n = m + p$ con $p \in \mathbb{N}$, esto es la def. de orden en $\mathbb{N}$, $n \geq m$.

---

> [!theorem] **Proposición.** (Representante de $\overline{(n,m)}$)
>
> Para cualquier entero $[(n,m)]$, se cumple una y sólo una de las siguientes afirmaciones: existe un único $k \in \mathbb{N}$ tal que $(k,0)\in[(n,m)]$, o existe un único $k \in \mathbb{N}^+$ tal que $(0,k)\in [(n,m)]$.
> **2.1** Usando este resultado podemos visualizar a los enteros como
> $$
> \mathbb{Z} = \{ [(k,0)]:k \in \mathbb{N} \} \cup \{ [(0,k)]:k\in \mathbb{N}^+ \}.
> $$
> Además,
> $$
> \{ [(k,0)]:k \in \mathbb{N} \} \cap \{ [(0,k)] : k \in \mathbb{N}^+ \} = \varnothing.
> $$
