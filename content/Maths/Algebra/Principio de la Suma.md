---
modified: 2026-08-31T15:09:27Z
title: "Principio de la Suma y del Palomar"
publish: true
type: zettel
date: "2026-06-19"
aliases:
 - Principio General de la Suma
 - Principio del Palomar
tags: 
 - algebra
cssclasses: 
 - romana
---
> [!theorem] **Teorema.** (Principio General de la Suma)
>
> Sea $k \in \mathbb{N}$ y $k \geq 2$, Supongamos que $A_{1},\dots ,A_{k}$ son conjuntos finitos ajenos por pares, es decir, tales que si $i\neq j, A_{i}\cap A_{j} = \varnothing$. Entonces
> $$
> \lvert A_{1} \cup \dots \cup A_{k} \rvert = \lvert A_{1} \rvert +\dots + \lvert A_{k} \rvert 
> $$

> [!proof]- **Proof.** 
>
> Por inducción sobre $k = 2$.
> **Paso base:** Si $k = 2$, tenemos dos conjuntos ajenos $A_{1}$ y $A_{2}$. Entonces existen números naturales $m$ y $n$ y funciones biyectivas $f$ y $g$ tales que $f: I_{m} \to A_{1}$ y $g: I_{n}\to B_{1}$. Así, $\lvert A_{1} \rvert= m$ y $\lvert A_{2} \rvert = n$. Dado el lema, $I_{m+n}=I_{m}\cup \{ m+1,\dots,m+n \}$ e $I_{m}\cap \{ m+1,\dots,m+n \} = \varnothing$. Definimos $h: I_{m+n} \to A_{1}\cup A_{2}$ como:
> $$
> h(j) = \begin{cases}
> f(j) & j\leq m, \\
> g(j-m) & j>m
> \end{cases}
> $$
> La función $h$ está bien definida, pues $\forall j \in I_{m+n}$, tenemos que $j \in I_{m}$ o $j \in \{ m+1,\dots ,m+n \}$ y se da sólo uno de estos casos, es decir, o $j\leq m$ o $m<j\leq m+n$; además, si $m<j\leq m+n$, entonces $0 < j-m \leq n$, por lo que en este caso $j - m \in I_{n}$ y $g(j-m)$ está bien definido. **Y si tambien se demuestra que** $h$ **es biyectiva**.
> $$
> \therefore \lvert A_{1} \cup A_{2} \rvert = m+ n = \lvert A_{1} \rvert + \lvert A_{2} \rvert 
> $$
> **Paso Inductivo...**

> [!theorem] **Corolario.** 
>
> 1. Si $f: A\to B$ es inyectiva, entonces $\lvert A \rvert\leq \lvert B \rvert$.
> 2. Si $g:A\to B$ es sobre, entonces $\lvert A \rvert \geq \lvert B \rvert$

> [!proof]- **Proof.** 
>
> ...

> [!theorem] **Corolario.** (Principio del Palomar)
>
> Sea $A$ un conjunto finito tal que $\lvert A \rvert = m$ y sea $\{ A_{i} : i \in I \}$ una partición de forma que si $i\neq j, A_{i}$ y $A_{j}$ son ajenos.
> $$
> m>n \implies \exists i \in I_{n}, \lvert A_{i} \rvert > 1
> $$




