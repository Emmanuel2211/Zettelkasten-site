---
modified: 2026-11-13T23:34:20Z
title: "Axiomas del Peano"
publish: true
type: zettel
date: 2026-08-18
aliases:
tags:
  - algebra
cssclasses:
  - romana
status: seed
---
> [!theorem] **Axioma.** (Peano)
>
> Dado un conjunto $0$, otro conjunto $\mathbb{N}$ y una relación $\mathfrak{s}$ tal que $\operatorname{dom} \mathfrak{s} = \mathbb{N}$, tenemos los siguente:
> 1. $0 \in \mathbb{N}$.
> 2. $\forall n \in \mathbb{N} \ \exists! m \in \mathbb{N}((n,m) \in \mathfrak{s})$, es decir, $\mathfrak{s}$ es función, $\mathfrak{s}: \mathbb{N} \to \mathbb{N}$.
> 3. $\forall n \in \mathbb{N}(\mathfrak{s}(n)\neq 0)$.
> 4. $\forall n,m \in \mathbb{N}(\mathfrak{s}(n) = \mathfrak{s}(m) \implies n = m)$.
> 5. Si $A \subseteq \mathbb{N}$ y cumple que: $0 \in A$, y que $\forall n \in \mathbb{N}(n \in A \implies \mathfrak{s}(n) \in A)$, entonces $\mathbb{N} \subseteq A$.

Combinando los axiomas *(ii)*, *(iii)* y *(iv)* obtenemos que $\mathfrak{s}: \mathbb{N} \to \mathbb{N} \setminus \{ 0 \}$ y que es inyectiva.

La relación $\mathfrak{s}$ es definida conjuntistamente por *Von Newman*.<sup><a href="#user-content-fn-inline-1" id="user-content-fnref-inline-1" data-footnote-ref class="internal">1</a></sup>

<section data-footnotes class="footnotes"><h2 class="sr-only" id="footnote-label">Notas</h2>
<ol>
<li id="user-content-fn-inline-1">

[[Funcion Sucesor]] <a href="#user-content-fnref-inline-1" data-footnote-backref class="data-footnote-backref internal">↩</a>

</li>
</ol>
</section>
