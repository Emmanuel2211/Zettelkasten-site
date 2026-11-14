---
modified: 2026-11-13T23:34:20Z
title: "Funciones Inyectivas y Sobreyectivas"
publish: true
type: zettel
date: "2026-08-24"
status: seed
aliases:
tags:
 - algebra
cssclasses: 
 - romana
---
> [!theorem] **Definción.** (Inyectividad)
>
> Sea una función $f: A\to B$, se dice que $f$ es **inyectiva** o **uno a uno** si y sólo si
> $$
> \forall x_{1},x_{2} \in A (x_{1} \neq x_{2} \implies f(x_{1}) \neq f(x_{2}))
> $$
> Usando contrapuesta en la implicación, esto es equivalente a
> $$
> \forall  x_{1},x_{2} \in A (f(x_{1})=f(x_{2}) \implies x_{1} = x_{2})
> $$
> En ocasiones, la segunda es más útil. Suele denotarse $f: A \rightarrowtail B$ cuando es inyectiva.

Es útil intepretar la definición de *inyectividad* como se interpreta la segunda condición de la def. de *función*:
> A cada elemento de $\mathrm{Im}$ le corresponde **uno y sólo uno** de $\operatorname{Dom}$.



> [!theorem] **Definción.** (Sobreyectividad)
>
> Sea $f$ una función, se dice que $f$ es **sobre** o **suprayectiva** si y sólo si
> $$
> \forall y \in B \ \exists x \in A \ ( f(x) = y)
> $$
> Suele denotarse $f: A\twoheadrightarrow B$.


