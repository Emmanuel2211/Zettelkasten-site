---
modified: 2026-11-13T23:34:20Z
title: "Monotonía de Funciones"
publish: true
type: zettel
date: "2026-09-05"
status: seed
aliases:
tags:
 - Monotonia
cssclasses: 
 - romana
---
> [!theorem] **Definición.** (Monotonía)
>
> Sea $f: I \to  \mathbb{R}$, y sean $x,y \in  I$,
> - $f$ es **creciente** si $x < y \implies  f(x) \leq  f(y)$
> - $f$ es **decreciente** si $x < y \implies  f(x) \geq f(y)$
>
> $f$ es **monótona** si es creciente o decreciente en $I$.


> [!theorem] **Definición.** (Monotonía Estricta)
>
> Sea $f: I\to \mathbb{R}$ una funcion definida en un intervalo $I \subseteq \mathbb{R}$. Decimos que $f$ **es estrictamente creciente en** $I$ si para todo $x,y \in I$ se cumple que
> $$
> x < y \implies f(x) < f(y)
> $$
> De manera análoga, $f$ es **estrictamente decreciente** si
> $$
> x < y \implies f(x) > f(y)
> $$
> Se dice que $f$ es **estrictamente monótona** si se cumple alguna de estas dos.

> [!proof]- **Proof.** 

La primera derivada nos habla de la tasa de cambio y la dirección de la curva.

> [!theorem] **Teorema.** (Criterio de Monotonia)
>
> Sea $f: I\to \mathbb{R}$ una función continua en el intervalo cerrado $I = [a,b]$ y derivable en el intervalo abierto $(a,b)$.
> - Si $f'(x) > 0$ para todo $x \in (a,b)$, entonces $f$ es estrictamente creciente en $I$.
> Analogamente, 
> - Si $f'(x) < 0$ para todo $x \in (a,b)$, entonces $f$ es estrictamente decreciente en $I$.

El recíproco es falso.

> [!proof]- **Proof.** 


> [!theorem] **Teorema.** (Teorema de Fermat) (Condición para extremos relativos)
>
> Si $f$ tiene un extremo local ($\max$ o $\min$) en un punto $c$ de su dominio, y $f$ es derivable en $c$, entonces obligatoriamente $f'(c) = 0$. 
> Y a $c$ se le llama **punto crítico**.


