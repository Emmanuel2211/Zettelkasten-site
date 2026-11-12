---
modified: 2026-09-12T02:30:43Z
title: "\"Combinando\" Subespacios"
publish: true
type: zettel
date: "2026-08-26"
status: undone
aliases:
tags:
 - algebra
cssclasses: 
 - romana
---
¿Será que la intersección y la unión de subespacios es un subespacio?

> [!theorem] **Teorema 1.4** (Intersección de Subespacios)
>
> Sea $\mathbb{F}$ un campo. Sea $V$ un esp. vect. sobre $\mathbb{F}$. Sea $\{ W_{i} \mid i \in I \}$ un cjto. no vacío se subesp. de $V$. Ent. $\displaystyle \bigcap_{i=I} W_{i}$ es un subespacio vectorial de $V$

> [!proof]- **Proof.** 



> [!example]- **Contraejemplo.** ($\mathbb{R}^{3}$) 
> 

Tarea justificar bien!

> [!example]- **Contraejemplo.** ($M_{2\times 2}(\mathbb{R})$)

De hecho, casi cualquiera dos subespacios distintos de un esp. vect. $V$, son contraejemplos!
**A menos que:**

> [!example]- **Ejemplo.** ($\bar{0}$)
>
> ¿Qué tal si en $\mathbb{R}^{3}$ pensamos en un subespacio que sea una recta y otro que sea un plano?
> 	- ¿$W_{1} \cup W_{2}$ es subespacio?
> Depende...

Hay un resultado que dice exactamente cuándo es que la unión de dos subesp. es un subespacio.

> [!theorem] **Teorema.** (Unión de Subespacios)
>
> Sea $V$ un esp. vect. sobre un campo $\mathbb{F}$.
> Si $W_{1},W_{2} \leq V$, ent.
> $$
> (W_{1} \cup W_{2} \leq V \iff (W_{1} \subseteq W_{2} \lor W_{2}\subseteq W_{1})) 
> $$

> [!proof]- **Proof.**  Tarea
>
> una cosa de logica!!! $P \iff (R \lor Q)$

Esto motiva una manera de combinar subespacios que mantenga la suma vectorial cerrada:

> El conjunto formado por todos los vectores que se puede escribir como la suma de cada elemento en $S_{1},\dots,S_{n}$.

> [!theorem] **Definición.** (Suma de $S$)
>
> Sea $n \in \mathbb{N}^{+}$. Sea $V$ un espacio vectorial. Sean $S_{1},\dots,S_{n} \subseteq V$. Definimos **la suma de** $S_{1},\dots,S_{n}$ como 
> $$S_{1}+\dots+S_{n} = \{ v \in V \mid v = x_{1}+\dots+x_{n} \ \forall i \in \{ 1,\dots ,n \} \ (x_{i} \in S_{i}) \}$$

Este conjunto describe a los elementos de $V$ que pueden ser expresados como la suma de algun elemento de un número de subcojuntos.


> [!theorem] **Teorema.** (La suma es un Subesp.)
>
> Sea $V$ un esp. vect. Sean $W_{1},W_{2}$ subesp. de $V$. Ent. $W_{1}+W_{2}$ es un subespacio de $V$.

> [!proof]- **Proof.** 

> [!theorem] **Corolario.** (Generalización Suma de Subesp.)
>
> Sea $V$ un esp. vect. Sea $n \in \mathbb{N}^{+}$. Si $W_{1},\dots W_{n}\leq V$, ent. $W_{1}+\dots+W_{n}\leq V$.

> [!proof]- **Proof.** Tarea

> [!theorem] **Proposición.** 
>
> Sea $V$ un esp. vect. Sea $n \in \mathbb{N}^{+}$.
> Si $W_{1},\dots,W_{n}\leq V$, ent $\forall i\in \{ 1,\dots,n \} W_{i} \leq W_{1}+\dots+W_{n}$

> [!proof]- **Proof.** 


Para motivar lo siguiente, veamos un par de ejemplos de suma de subespacios

vemos un ejemplo en el cual se crea $\mathbb{R}^{3}$ a partir de la suma de dos subespacios... y que entre las sumas para crear $\mathbb{R}^{3}$ hay una forma "mas eficiente" de crearlo... entre subespacios donde la interseccion es solo $\bar{0}$ observamos que solo se pueden crear elementos de $\mathbb{R}^{3}$ a partir de la suma de los subespacios, pero esta suma solo se puede hacer de unica manera! Consegimos esta *unicidad*!

> [!theorem] **Definición.** (Suma Directa)
>
> Sea $V$ un esp. vect. Se dice que $V$ es **la suma directa de** $W_{1}$ **y** $W_{2}$ si y sólo si
> 1. $W_{1}, W_{2} \leq V$
> 2. $W_{1}+W_{2} = V$
> 3. $W_{1} \cap W_{2} = \{ \bar{0} \}$
> 
> La denotamos $V = W_{1} \oplus W_{2}$

> [!example]- **Ejemplo.** 
>
> Sea

> [!theorem] **Teorema.** 
>
> Sea $V$ un esp. vect. Sean $W_{1},W_{2} \leq V$. Ent. $V = W_{1} \oplus W_{2}$ si y sólo si $V = W_{1} + W_{2}$ y para todo $x \in V$, los vectores $x_{1} \in W_{1}$ y $x_{2} \in W_{2}$ tales que $x = x_{1} + x_{2}$ son únicos.

> [!proof]- **Proof.** 
> 
