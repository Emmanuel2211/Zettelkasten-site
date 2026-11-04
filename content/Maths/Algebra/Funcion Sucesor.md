---
modified: 2026-08-18T14:40:15Z
title: "Función Sucesor"
publish: true
type: zettel
date: 2026-08-18
status: undone
aliases:
tags:
  - algebra
cssclasses:
  - romana
---
La función sucesor es bien definida en el segundo axioma del Peano.^[[[Axiomas del Peano]]]


> *Von Newman:*
> Partimos del conjunto vacío $\varnothing$ y definimos:
> - $0 \in \mathbb{N} := \varnothing$
> - $\mathfrak{s}(n) := n \cup \{ n \}$
> Por lo que si desarrollamos la función sucesor tenemos...
> $\mathfrak{s}(0) = \mathfrak{s}(\varnothing) = \varnothing \cup \{ \varnothing \} = \{ \varnothing \} = 1$.
> $\mathfrak{s}(1) = 1 \cup \{ 1 \} = \{  \varnothing \} \cup \{ \{ \varnothing \} \} = \{ \varnothing,\{ \varnothing \} \} = 2$
> $\mathfrak{s}(2) = 2 \cup \{ 2 \} = \{ \varnothing,\{ \varnothing \} \}\cup \{ \{ \varnothing,\{ \varnothing \} \} \} = \{ \varnothing,\{ \varnothing \},\{ \varnothing,\{ \varnothing \} \} \} = 3$ 
> $\mathfrak{s}(3)\dots$
> De esta forma, $0 \in 1 \in 2 \in 3\dots$
> En general, para todo $n \in \mathbb{N}$, se tiene que: $$n \in n+1$$
> Dicho esto, podemos definir el **orden** para $\mathbb{N}$.

