---
modified: 2026-06-18T20:30:58Z
title: "Axiom of Paring"
publish: true
type: zettel
status: 
links: 
tags: []
date: "2026-05-07"
aliases: 
- [ "axiom of paring" ]
- [ "axioma del par" ]
cssclasses: romana
materia: 
---
> [!theorem] **Axioma.** (del Par) 
> Para cualquier $a$ y $b$, existe un conjunto $\{ a,b \}$ que contiene exactamente $a$ y $b$:
> $$
> \forall a \forall b \exists c \forall x(x \in c \iff x = a \lor x = b)
> $$

Por *Extensionalidad*, el conjunto $c$ es único, y podemos definir el **par**
$$
\{ a,b \} = \text{el unico }c \text{ tal que } \forall x(x \in c \iff x = a \lor x = b)
$$

El **conjunto unitario** (*singleton*) $\{ a \}$ es el conjunto
$$
\{  a \} = \{  a,a \}
$$
Ya que $\{ a,b \} = \{  b,a \}$, definimos el par ordenado^[[[Par Ordenado]]]
