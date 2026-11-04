---
modified: 2026-06-05T23:09:52Z
title: "Esquema de Separación"
publish: true
type: zettel
status: 
links: 
tags: []
date: "2026-06-05"
aliases: 
- [ "Axioma de Compresion" ]
- [ "Esquema de Compresion" ]
cssclasses: romana
materia: 
---
> [!theorem] **Axioma.** 
> Sea $\varphi(u,p)$ una fórmula. Para cada $X$ y $p$, existe un conjunto $Y = \{  u \in X : \varphi(u,p) \}$:
> $$
> \forall X \forall p \exists Y \forall u (u \in Y \iff u \in X \land \varphi (u,p))
> $$




> [!observation]- **Observación**
> Esto nos permite, no crear conjuntos desde cero, sino crear conjuntos de acuerdo a sus propiedades de un conjunto ya existente. This solves the *Russel's Paradox*^[[[Paradoja de Russel]]]


El conjunto $Y$ es único por Extensionalidad.

Una versión general del axioma es demostrada usando $n$**-tuplas**: Sea $\psi(u,p_{1},\dots,p_{n})$ una fórmula. Entonces
$$
\forall X \forall p_{1}\dots \forall p_{n} \exists Y \forall u (u \in Y \iff u \in X \land \psi(u,p_{1},\dots,p_{n}))
$$

La siguiente forma es equivalente:
Sea la clase $C = \{ u:\psi(u,p_{1},\dots, p_{n}) \}$, por lo anterior tenemos
$$
\forall X \exists Y ( C \cap X = Y)
$$
Por lo tanto, la intersección de una clase $C$ con cualquier conjunto, es un conjunto; o informalmente,
$$
a \ subclass\ of \ a \ set  \ is \ a \ set.
$$
Una consecuencia de este axioma es
$$
X \cap Y = \{  u \in X : u \in Y \} \quad \text{ and } \quad X \setminus Y = \{  u \in X : u \not\in Y \}.
$$

Similarmente,
> [!theorem] **Def.** (Empty Set)
> $$
> \varnothing = \{  u : u \not\in u \}
> $$
> is the empty set, only under the assumption that at least one set $X$ existes, (because $\varnothing \subset X$):

> [!warning]-
> No se incluye el axioma de existencia (o vacío) en ZF porque surge del Axioma del Infinito.

> [!theorem] **Def.** 
> - $X, Y$ son **disjuntos** si $X \cap Y =\varnothing$
> - Si $C$ es una clase no vacía de conjuntos, tenemos
> $$
> \bigcap C = \bigcap \{  X : X \in C \} = \{  u : u \in X \text{ para todo } X \in C \}
> $$
> Notese que $\bigcap C$ es un conjunto (subconjunto de cualquier $X \in C$). Y $X \cap C = \bigcap \{ X,Y \}$.

Otra consecuencia de este axioma es que la clase universo $V$ es una clase propia, sino
$$
S = \{  x \in V: x \not\in x \}
$$
sería un conjunto.



