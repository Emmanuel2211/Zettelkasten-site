---
modified: 2026-09-02T15:17:31Z
title: "Ordenaciones con Repetición"
publish: true
type: zettel
date: "2026-06-28"
aliases:
 - Arrangements
tags: 
 - algebra
cssclasses: 
 - romana
---
Tambien nombradas ordenaciones *con remplazo*. Vamos a interpretarlas.

> Supongase que hay $n$-objetos. ¿Cuántas listas hay?
> $$
> \underset{1}{\overset{n}{\_\_}}, \underset{2}{\overset{n}{\_\_}},\underset{3}{\overset{n}{\_\_}} \dots, \underset{m}{\overset{n}{\_\_}}, 
> $$
> Lo que pasa es que siempre hay $n$ posibilidades en cada lugar!
> Por lo que hay $n^{m}$ posibles listas.




---

> [!theorem] **Def.** (Ordenaciones con repetición)
> Sean $n,m \in \mathbb{N}$ y sea $A$ conjunto finito con $\lvert A \rvert = n$, decimos que **las ordenaciones con repetición de los elementos de $A$ tomados de $m$ en $m$** son todas las funciones $f: I_{m} \to A$, es decir
> $$
> OR_{n}^m = \lvert ^{I_{m}}A \rvert  = n^m
> $$


Este concepto es altamente practico, entonces lo desarrollamos con ejemplos

> [!example]- **Ejemplo 1.** $\{ \bullet, - \}$
> Sea $M$ el abecedario del código Morse, es decir, $M = \{ \bullet, - \}$. Las funciones $f: I_{3}\to M$ son las siguientes:
> 
> ![[Pasted image 20260703154945.png|center]]
> 
> Por lo que $OR_{n}^m = 2^3 = 8$.

> [!example]- **Ejemplo 2.** ¿Cuántas placas distintas de auto pueden ser expedidas en la CDMX?
> Si las placas se forman con 3 dígitos seguidos de 3 letras. Vistos como conjuntos: $\{ 0,1,2,\dots,9 \}$ y $\{ A,B,\dots, Z \}$.
> Podemos separar estos conjuntos y calcular sus ordenaciones, $OR_{10}^3$ y $OR_{26}^{3}$. Usando el principio del producto,
> podemos concluir que hay $OR_{10}^3 \cdot OR_{26}^3 = 10^3 \cdot 26^3$ posibles placas.

> [!example]- **Ejemplo 3.** ¿Cuántas placas distintas pueden expedirse que tengan exactamente una letra $A$?
> ...

> [!example]- **Ejemplo 4.** ¿Cuántas placas distintas pueden expedirse que tengan al menos una ocurrencia de la letra $A$?
> ...

Un caso de las las *ordenaciones con repetición*, son las *ordenaciones*.^[[[Ordenaciones sin Repeticion]]]

