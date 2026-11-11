---
modified: 2026-10-08T01:48:27Z
title: "Multiplo Común"
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
> [!theorem] **Definición.** (Múltiplo Común)
>
> Sean $a,b \in \mathbb{Z}$. Decimos que $c \in \mathbb{Z}$ es un múltiplo común de $a$ y $b$ si $a \mid c$ y $b \mid c$.

> [!observation]+ **Observación.**
>
> - Siempre hay múltiplos comunes, al menos $ab$.
> - Si $a\neq 0$ y $b\neq 0$ siempre hay un múltiplo común positivo de $a$ y $b$, al menos $\left| ab \right|$.


> [!theorem] **Definición.** (mcm)
>
> Sean $a,b \in \mathbb{Z} \setminus \{ 0 \}$. Decimos que $m \in \mathbb{Z}$ es el **mínimo común múltiplo de** $a$ **y** $b$ si es el menor múltiplo común positivo de $a$ y $b$. Se denotará por $[a,b]$.


> [!theorem] **Teorema.**
>
> Sean $a,b \in \mathbb{Z}\setminus \{ 0 \}$, $m \in \mathbb{Z}$. Las siguiente afirmaciones son equivalentes:
> 1. $m = [ a,b]$
> 2. $m > 0, a \mid m, b \mid m$ y si $a \mid c$ y $b\mid c$ entonces $m \mid c$

> [!proof]- **Proof.**
>
> Sean $a,b \in \mathbb{Z}\setminus \{ 0 \}$, $m \in \mathbb{Z}$
> $(i \implies  ii)$
> Supongamos uqe $m = [a,b]$. Por definición $m > 0$, $a \mid m$ y $b \mid m$. El conjunto
> $$
> M = \{ c \in \mathbb{Z} : a \mid c , b \mid c \}
> $$
> es cerrado bajo suma y resta. Además $ab \in M$ con $ab \neq 0$, entonces $M \neq \{ 0 \}$.
> El menor elemento positivo de $M$ es $[a,b]$ y sabemos por un lema previo que divide a todo elemento de $M$.
> Así, si $a \mid c$ y $b \mid c$ tenemos que $c \in  M$ y entonces $m \mid c$.
>
> $(ii \implies  i)$
> Supongamos que $m > 0$, $a \mid m, b \mid m$ y si $a \mid c, b \mid c$ entonces $m \mid c$.
> **PD.** $m = [a,b]$
> Por hipótesis sabemos que $m$ es un múltiplo común positivo de $a$ y $b$. Veamos que es el menor de todos. Sea $c$ un múltiplo común positivo de $a$ y $b$, entonces $a\mid c$, $b\mid c$. Por hipótesis $m \mid c$, así
> $$
> \begin{align}
>   m = \left| m \right| &\leq \left| c \right| = c \\[0.5em]
> \therefore m &= [a,b] \tag*{$\blacksquare$}
> \end{align}
> $$


> [!theorem] **Teorema.**
>
> Sean $a,b \in \mathbb{Z} \setminus \{ 0 \}$. Tenemos que
> $$
> [a,b](a,b) = \left| ab \right|
> $$


> [!proof]+ **Proof.**
>
> Sean $a,b \in \mathbb{Z}\setminus \{ 0 \}$
> - Caso 1: $ab > 0$
> Sabemos que $(a,b) \mid ab$
> **PD.** $\displaystyle [a,b] = \frac{ab}{(a,b)}$
> Como $(a,b)\mid a$ y $(a,b) \mid b$ tenemos que
> $$
> \frac{ab}{(a,b)} = a \frac{b}{(a,b)} = b \frac{a}{(a,b)} \quad \text{ con } \quad \frac{b}{(a,b)}, \frac{a}{(a,b)} \in \mathbb{Z}
> $$
> Así, $\frac{ab}{(a,b)}$ es un múltiplo común positivo de $a$ y $b$.
> Veamos ahora que divide a culaquier múltiplo común. Sea $c \in \mathbb{Z}$ tal que $a\mid c$ y $b\mid c$. Tenemos que $c = ak = bq$ con $k,q \in \mathbb{Z}$,
> $$
> (a,b)\frac{a}{(a,b)}k = (a,b) \frac{b}{(a,b)}q
> $$
> Cancelando $(a,b)$ tenemos $\displaystyle \frac{a}{(a,b)}k = \frac{b}{(a,b)}q$. Así $\displaystyle  \left.\frac{b}{(a,b)}  \right| \frac{a}{(a,b)}k$, y como $\displaystyle \left( \frac{b}{(a,b)} , \frac{a}{(a,b)}  \right) = 1$, por el lema de Euclides $\displaystyle \left. \frac{b}{(a,b)} \right| k$. Tenemos entonces que $\displaystyle k = \frac{b}{(a,b)} t$ con $t \in \mathbb{Z}$.
> Así, $\displaystyle c = ak = a \frac{b}{(a,b)}t = \frac{ab}{(a,b)}t$ con $t \in \mathbb{Z}$, y entonces $\displaystyle  \left. \frac{ab}{(a,b)} \right| c$.
> $$
> \therefore \frac{ab}{(a,b)} = [a,b]
> $$
>
> - Caso 2: $ab<0$
> Por las leyes de los signos $(-a)b > 0$. Por el caso 1
> $$
> \frac{\left| ab \right|}{(a,b)} = \frac{(-a)b}{(-a,b)} = [-a,b] = [a,b] \tag*{$\blacksquare$}
> $$
>

> [!theorem] **Corolario.**
>
> Sean $a,b \in \mathbb{Z}\setminus \{ 0 \}$. Si $(a,b) = 1$, entonces $[a,b] = \left| ab \right|$.


