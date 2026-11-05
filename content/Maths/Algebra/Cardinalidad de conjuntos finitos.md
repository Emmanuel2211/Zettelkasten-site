---
modified: 2026-08-31T15:09:18Z
title: "Cardinalidad de conjuntos finitos"
publish: true
type: zettel
date: "2026-06-19"
tags: 
 - algebra
cssclasses: 
 - romana
---
Se define $I_{m}$ como un **conjunto índice**<sup><a href="#user-content-fn-inline-1" id="user-content-fnref-inline-1" data-footnote-ref class="internal">1</a></sup> o **segmento inicial**. Damos multiples propiedades en la definición.

> [!theorem] **Def.** Conjunto Finito y Cardinalidad (aprender a contar)
> Sean $A$ y $B$ conjuntos. Decimos que $A$ y $B$ tienen la misma **cardinalidad** si y sólo si existe una función biyectiva $f: A\to B$.
> 
> Decimos que un conjunto $A$ es **finito** si y sólo si existe $n \in \mathbb{N}$ y existe $f: I_{n} \to A$ tal que $f$ es biyectiva. Un conjunto **infinito** es uno que no es finito. 
> 
> Dados $m,n$ y $m\neq n$, no existe biyección entre $I_{m}$ y $I_{n}$. Dicho esto, observamos que este $n$ es único para cualquier biyección $I_{n} \to A$.
> 
> Formalizando el proceso de contar, se acostumbra denotar a $f(i)$ en $A =\{ f(1), \dots , f(n) \}$ como $a_{i}$, es claro $i\neq j \implies a_{i}\neq a_{j}$.
> 
> En este caso denotamos al **cardinal** de $A$ como $\lvert A \rvert = n$, decimos que $A$ tiene $n$ elementos.

> [!proof]- **Proof.** 

Es claro que cualquier subconjunto de un conjunto finito $A$ con $\lvert A \rvert = n,$ tiene a los más $n$ elementos.

> [!proof]- **Proof.** 

Otra propiedad importante para determinar biyectividad:

> [!theorem] **Corolario.** 
> Si $A$ es conjunto finito, entonces una función de $A$ en $A$ es sobre si y sólo si es inyectiva.

> [!proof]- **Proof.** 

> [!theorem] **Proposición.**
> Existe una función **sobre** $I_{m}$ en $I_{n}$ si y sólo si $m\geq n$.

Se demuestra como corolario del Principio del Palomar<sup><a href="#user-content-fn-inline-2" id="user-content-fnref-inline-2" data-footnote-ref class="internal">2</a></sup> algo relacionado:

<section data-footnotes class="footnotes"><h2 class="sr-only" id="footnote-label">Notas</h2>
<ol>
<li id="user-content-fn-inline-1">

[[Familia Indexada]] <a href="#user-content-fnref-inline-1" data-footnote-backref class="data-footnote-backref internal">↩</a>

</li>
<li id="user-content-fn-inline-2">

[[Principio de la Suma]] <a href="#user-content-fnref-inline-2" data-footnote-backref class="data-footnote-backref internal">↩</a>

</li>
</ol>
</section>
