---
modified: 2026-11-11T03:36:51Z
title: "Sucesiones Acotadas"
publish: true
type: zettel
date: "2026-09-01"
status: undone
aliases:
tags:
 - calculus
cssclasses:
 - romana
---
> [!theorem] **Definición.** (Sucesión Acotada)
>
> Sea $\{ x_{n} \}$ una sucesión,
> Decimos que $\{ x_{n} \}$ está **acotada superiormente** sii
> $$
> \exists M \in \mathbb{R} \ \forall n \in \mathbb{N}^{+}  \left( \{ x_{n} \} \leq M  \right)
> $$
> En este caso, $M$ es la **cota superior** de la sucesión.
>
> Igualmente, decimos que $\{ x_{n} \}$ está acotada inferiormente sii
> $$
> \exists m \in  \mathbb{R} \ \forall n \in \mathbb{N}^{+}  \left( \{ x_{n} \} \geq m  \right)
> $$
> A $m$ se llama **cota inferior** de la suecesión.
>
> Decimos que $\{ x_{n} \}$ está **acotada**, si lo está superior e inferiormente.



Supongamos que $\{ x_{n} \}$ está acotada, es decir, $m \leq\{x_{n} \}<M \quad \forall n \in \mathbb{N}^{+}$.
Se puede encontrar un número $k$ postivo tal que $-k \leq m$ y $M \leq k$ de manera que
$$
-k \leq \{ x_{n} \} \leq k \quad \forall  n \in \mathbb{N}^{+}
$$
Dicho esto, por propiedades de valor absoluto podemos proponer la siguiente definición alternativa:

> [!theorem] **Definición.** (Sucesión Acotada)
>
> Una sucesión $x_{n}$ está **acotada** si y soló si,
> $$
> \exists k \in  \mathbb{R}^{+} \ \text{ tal que } \ \forall n \in \mathbb{N}^{+} \left| \{ x_{n} \} \right| \leq k
> $$




