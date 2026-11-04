---
modified: 2026-08-19T00:52:56Z
title: "Axiomas del Peano"
publish: true
type: zettel
date: 2026-08-18
aliases:
tags:
  - algebra
cssclasses:
  - romana
status: undone
---
> [!theorem] **Axioma.** (Peano)
> Dado un conjunto $0$, otro conjunto $\mathbb{N}$ y una relación $\mathfrak{s}$ tal que $\operatorname{dom} \mathfrak{s} = \mathbb{N}$, tenemos los siguente:
> 1. $0 \in \mathbb{N}$.
> 2. $\forall n \in \mathbb{N} \ \exists! m \in \mathbb{N}((n,m) \in \mathfrak{s})$, es decir, $\mathfrak{s}$ es función, $\mathfrak{s}: \mathbb{N} \to \mathbb{N}$.
> 3. $\forall n \in \mathbb{N}(\mathfrak{s}(n)\neq 0)$.
> 4. $\forall n,m \in \mathbb{N}(\mathfrak{s}(n) = \mathfrak{s}(m) \implies n = m)$.
> 5. Si $A \subseteq \mathbb{N}$ y cumple que: $0 \in A$, y que $\forall n \in \mathbb{N}(n \in A \implies \mathfrak{s}(n) \in A)$, entonces $\mathbb{N} \subseteq A$.

Combinando los axiomas *(ii)*, *(iii)* y *(iv)* obtenemos que $\mathfrak{s}: \mathbb{N} \to \mathbb{N} \setminus \{ 0 \}$ y que es inyectiva.

La relación $\mathfrak{s}$ es definida conjuntistamente por *Von Newman*.^[[[Funcion Sucesor]]]


