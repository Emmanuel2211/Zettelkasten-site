---
modified: 2026-09-23T14:46:11Z
title: "Algoritmo de la División"
publish: true
type: zettel
date: 2026-09-07
status: undone
aliases:
tags:
  - algebra
cssclasses:
  - romana
---
> [!theorem] **Teorema.** (Algoritmo de la División)
>
> Sean $a,b \in  \mathbb{Z}$, $b \neq  0$, entonces, existen $q,r \in  \mathbb{Z}$ tales que
> $$
> a = bq + r \quad \text{ con } 0\leq r < \left| b \right|
> $$
> llamados **cociente** y **residuo**, y dichos enteros son **únicos**.


> [!proof]- **Proof.**
>
> Sean $a,b \in  \mathbb{Z}, b \neq  0$.
> *Caso 1.* $b > 0$
> Considero los múltiplos de $b$, ie. los de la forma $bt$ con $t \in  \mathbb{Z}$. Me fijo en su diferencia con $a$, ie. $a - bt, t \in  \mathbb{Z}$ y considero
> $$
> S = \{ a - bt \mid t \in  \mathbb{Z} \} \cap \mathbb{N} 
> $$
> Es claro que $S \subseteq \mathbb{N}$, ¿tiene este conjunto un mínimo elemento?
> Para aplicar PBO, necesitamos ver que $S \neq \varnothing$:
> Si $a \geq 0$, $a-b \cdot 0 = a \geq  0$ y ent. $a - b \cdot 0 \in  S$.
> Si $a < 0$, $a-ba = a (1-b) = -a(b-1) \geq 0$, ent $a-ba \in  S$.
> Ahora, por el PBO $S$ tiene un elemento mínimo, digamos $r$. Sabiemos que $r \in  S$, es decir
> $$
> r = a - bq \ \  \ \text{ p.a. } \ \ q \in  \mathbb{Z} \quad \text{ y } \quad r\geq 0
> $$
> Así, $a = bq + r$ con $0\leq r$
> **PD.** $r < \left| b \right| = b$
> Sup PRAA que $r \geq  b$, ent.
> $$
> \begin{align}
> 0 \leq  r-  b &= (a-bq)  - b \\[0.5em]
>    &= a - bq - b \\[0.5em]
>    &= a - b (q+1)
> \end{align} 
> $$
> Ent. $r-b = a-b(q+1) \in  S$. Pero como $0  < b$, ent
> $$
> \begin{align}
> -b &< 0 \\[0.5em]
> r-b &< r ! 
> \end{align}
> $$
> !$r-b$ sería un elemento de $S$ menor que el número de $S$!
> $$
> \therefore r < b
> $$
>
> *Caso 2.* $b < 0$
> Tenemos $0 < -b$, dividiendo $a$ entre $-b$ por el caso 1, existen $q,r \in  \mathbb{Z}$ tales que
> $$
> a = (-b)q + r \text{ con } 0\leq r < \left| b \right|
> $$
> ent,
> $$
> a = b(-q) + r \text{ con } 0 \leq r < \left| b \right|
> $$
>
> *Unicidad:*
> Supongamos que $q,q',r,'r \in  \mathbb{Z}$ son tales que
> $$
> a = bq + r \ \text{ y } \ a = bq' + r'
> $$
> con $0\leq r< \left| b \right|$ y $0 \leq  r' < \left| b \right|$.
> **PD.** $q = q'$ y $r = r'$
> Tenemos
> $$
> \begin{align}
> bq + r &= bq' + r'\\[0.5em]
> bq - bq' &=  r' - r \\[0.5em]
> b(q - q') &= r' - r\\[0.5em]
> b \mid r' - r 
> \end{align}
> $$
> Si $r' - r \neq 0$, tendríamos
> $$
>  \left| b \right| \leq  \left| r' - r \right| !
> $$
> Pero $0 \leq r,r' < \left| b \right|$, y se tiene que $\left| r' - r \right| < b$!
> Ent, $r' - r = 0$ es decir $r = r'$ y $b(q - q') = 0$ y $b \neq  0$ ent
> $q - q' = 0$, por tanto $q = q'$.
> $$
> \tag*{$\blacksquare$}
> $$

