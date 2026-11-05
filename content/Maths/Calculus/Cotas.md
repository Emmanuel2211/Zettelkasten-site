---
modified: 2026-09-10T19:58:17Z
title: "Cotas"
publish: true
type: zettel
tags: calculus
date: 2026-04-09
aliases:
cssclasses: romana
---
> [!theorem] **Definición.** (Cota Sup e Inf)
> Sea $S \subseteq \mathbb{R}$ no vacío.
> - Un $M\in \mathbb{R}$ es una **cota superior de** $S$ si $\forall x \in S \ (M\geq x)$, se dice que el conjunto está **acotado superiormente**.
> - Un $m\in \mathbb{R}$ es una **cota inferior de** $S$ si $\forall x \in S \ (m \leq x)$, se dice que el conjunto está **acotado inferiormente**.
> 
> Si $S$ está acotado de las dos formas, entonces se dice que $S$ está **acotado**, es decir existen $m,M \in \mathbb{R}$ tales que
> $$
> m \leq x \leq M \quad \forall x \in S
> $$
> Alternativamente, por valor absoluto, $S$ está acotado si existe $k > 0$ tal que $\lvert x \rvert \leq k$, para todo $x \in S$.


> [!theorem] **Definición** (Función Acotada)
> Sea $f$ una función real, decimos que $f$ (la función) **está acotada** si $\mathrm{Im}(f)$ es un conjunto acotado.


---



> [!theorem] **Teorema.** (resultados de xupremos)
> fjkdslfjkldafs
> 1. fjdk algo de subconjunto de supremos
> 2. fjkdl ... ni idea
> 3. $A + B := \{  a + b : a \in A , b \in B \} \implies \sup(A+B) = \sup{A} + \sup{B}$
> 4. Sea $c>0 \implies cA := \{ ca : a \in A \} \implies \sup (cA) = c\sup{A}$

> [!proof]- **Proof.** 
> 1. Sea $x \in A$, como $A\subseteq B \implies x \in B \implies \sup B$ por ser cota superior satisface $x \leq \sup B \implies \sup B$ es cota superior de $A$, pero $\sup A$ es la cota superior mínima $\implies \sup A \leq \sup B$. $\forall y \in B, \inf B ,+ y$ y como $A \subseteq B \implies \inf B \leq x$ $\forall x \in A \implies \inff B$ es conta inferior de $A$, pero $\inf A$ es la máxima cota inferior $\implies \inf B ,+ \inf A$...???

---

maximos y minimos<sup><a href="#user-content-fn-inline-1" id="user-content-fnref-inline-1" data-footnote-ref class="internal">1</a></sup>
En especial, la existencia del supremo<sup><a href="#user-content-fn-inline-2" id="user-content-fnref-inline-2" data-footnote-ref class="internal">2</a></sup>

<section data-footnotes class="footnotes"><h2 class="sr-only" id="footnote-label">Notas</h2>
<ol>
<li id="user-content-fn-inline-1">

[[Maximos y minimos]] <a href="#user-content-fnref-inline-1" data-footnote-backref class="data-footnote-backref internal">↩</a>

</li>
<li id="user-content-fn-inline-2">

[[Supremo e Infimo]] <a href="#user-content-fnref-inline-2" data-footnote-backref class="data-footnote-backref internal">↩</a>

</li>
</ol>
</section>
