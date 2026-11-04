---
modified: 2026-09-12T20:58:16Z
title: "Teorema de Bayes"
publish: true
type: zettel
date: "2026-09-01"
status: undone
aliases:
tags:
 - probability
cssclasses:
 - romana
---
> Puede verse como el "inverso" de la Proba Total. Calcula la Proba de un evento a partir de nueva información o evidencia que ya ha sucedido!

> [!theorem] **Teorema.** (Teorema de Bayes)
> Dado un evento $A$ con $P[A] > 0$ y una partición $\mathbb{B} = \{ B_{1}B_{2},\dots \}$ con $P[B_{i}] > 0 \ \forall  i$.
> $$
> P[B_{i} \mid A] = \frac{P[A \cap B_{i}]}{P[A]} = \frac{P[A\mid B_{i}]P[B_{i}]}{\displaystyle  \sum_{j=1}^{\infty}P[A \mid B_{j}]P[B_{j}] }
> $$ 
