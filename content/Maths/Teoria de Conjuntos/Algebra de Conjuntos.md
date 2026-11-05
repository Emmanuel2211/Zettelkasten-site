---
modified: 2026-09-21T20:49:11Z
title: "Algebra de Conjuntos"
publish: true
type: zettel
date: "2026-08-18"
status: undone
aliases:
 - Operaciones de Conjuntos
 - Propiedades de Conjuntos
tags:
 - algebra
 - sets
cssclasses: 
 - romana
---
Definimos la **unión, intersección, diferencia**, el **complemento** y la **diferencia simétrica**. Denotamos $U$ al conjunto universal.

> [!theorem] **Definición.** 
> Sean $A,B$ conjuntos,
> Recoradando la contención: $A \subseteq B \iff \forall x(x \in A \implies x \in B)$
> $$
> \begin{align}
> A \cup B = \{ x \mid x \in A \lor x \in B \} \\[1em]
> A \cap B = \{  x \mid x \in A \land x \in B \} \\[1em]
> A \setminus B = \{  x \mid x \in A \land x \not\in B \}
> \end{align}
> $$
> Sea $A \subseteq U$, definimos el complemento de $A$ como
> $$
> A^{c} = \{ x \mid x \in U \land x \not\in A \}
> $$
> **Obs.** $A^{c} = U \setminus A$.
> La **diferencia semétrica** o unión disyuntiva se define como
> $$
> A \vartriangle B = (A \setminus B) \cup (B \setminus A)
> $$
> En si, es todo lo que no comparten los conjuntos.
> El **conjunto potencia** es 
> $$
> \mathscr{P}(A) := \{ B \mid B \subseteq A  \}
> $$


A partir de aquí, podemos desarrollar resultados de conjuntos como

> [!theorem] **Teorema.** (Propiedades de Conjuntos)
> Sean $A,B,C, X$ conjuntos tales que $A,B,C \subseteq X$, entones.
> - Idempotencia: $A \cup A = A = A \cap A$
> - Conmutatividad: $A\cup B = B\cup A$ y $A \cap B = B \cap A$
> - Asociatividad:
> $$
> \begin{align}
> A \cup (B \cup C) = (A \cup B) \cup C \\[0.5em]
> A \cap (B \cap C) = (A \cap B) \cap C
> \end{align}
> $$
> - Distributividad:
> $$
> \begin{align}
> A \cup (B \cap C) = (A \cup B) \cap (A \cup C) \\[0.5em]
> A \cap (B \cup C) = (A \cap B) \cup (A \cap C)
> \end{align}
> $$
> - Leyes de identidad de la unión:
> $$
> \begin{align}
> A \cup \varnothing = A \\[0.5em]
> A \cup U = U
> \end{align}
> $$
> - Leyes de identidad de intersección:
> $$
> \begin{align}
> A \cap \varnothing = \varnothing \\[0.5em]
> A \cap U = A
> \end{align}
> $$
> - Unión e intersección de complementos
> $$
> \begin{align}
> A \cup A^{c} = U \\[0.5em]
> A\cap A^{c} = \varnothing
> \end{align}
> $$
> - Leyes de identidad de diferencia:
> $$
> \begin{align}
> A \setminus \varnothing &= A \\[0.5em]
> A \setminus A &= \varnothing
> \end{align}
> $$
> - $(A^{c})^{c} = A$
> - Leyes de Morgan<sup><a href="#user-content-fn-inline-1" id="user-content-fnref-inline-1" data-footnote-ref class="internal">1</a></sup>
> - Propiedades de la diferencia: 
> $$
> \begin{align} \\
> A \setminus B = A\cap B^{c} \\[0.5em]
> A \setminus B = A \setminus (A \cap B) \\[0.5em]
> A \setminus B = A \cap ( X \setminus B) \\[0.5em]
> A \cap (X \setminus A) = \varnothing \\[0.5em]
> A \cup (X \setminus A) = X \\[0.5em]
> X \setminus (X\setminus A) = A
> \end{align}
> $$
> - Distributividad (diferencia)
> $$
> \begin{align}
> C \setminus (A \cap B) = (C \setminus A) \cup (C \setminus B) \\[0.5em]
> C \setminus (A \cup B) = (C \setminus A ) \cap (C \setminus B)
> \end{align}
> $$
> - Si $A \subseteq B$, entonces $A \cap B = A$.
> - Propiedades de la diferencia simétrica:
> $$
> \begin{align}
> A \vartriangle B &= ( A \cap B^{c}) \cup (A^{c} \cap B) \\
> A \vartriangle B &= (A \cup B) \setminus (A \cap B) \\
> \end{align}
> $$
> - Propieadades del conjuntos potencia:
> $$
> \begin{align}
> A \subseteq B &\implies \mathscr{P}(A) \subseteq \mathscr{P}(B) \\[0.5em]
> \mathscr{P}(A \cap B) &= \mathscr{P}(A) \cap \mathscr{P}(B) \\[0.5em]
> \mathscr{P}(A) \cup \mathscr{P}(B) &= \mathscr{P}(A \cup B)
> \end{align}
> $$
> 

> [!proof]- **Proof.** 
> dah 

Con esas propiedades deebería de bastar hasta ahora...

<section data-footnotes class="footnotes"><h2 class="sr-only" id="footnote-label">Notas</h2>
<ol>
<li id="user-content-fn-inline-1">

[[Leyes de DeMorgan]] <a href="#user-content-fnref-inline-1" data-footnote-backref class="data-footnote-backref internal">↩</a>

</li>
</ol>
</section>
