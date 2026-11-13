---
modified: 2026-11-10T17:26:07Z
title: "Lógica Proposicional"
publish: true
type: zettel
date: 2026-08-20
status: undone
aliases:
tags:
  - algebra
cssclasses:
  - romana
---
> [!theorem] **Definición.** (Tautología)
>
> Una **tautología** o ley lógica es una proposición que es siempre verdadera sin importar los valores de  verdad que tengan las proposiciones que la componen.

> [!theorem] **Teorema.** (Tautologías importantes)
>
> - Doble negación:
> $$
> \neg(\neg p) \equiv p
> $$
> - Tercero excluido: (verdadero o falso, no hay tercera opción)
> $$
> p \lor \neg p
> $$
> - No contradicción: (base de las demostraciones sobre "reducción al absurdo")
> $$
> \neg(p \land \neg p)
> $$
> - Idempotencia:
> $$
> \begin{align}
> (p \land p) &\equiv p \\[0.5em]
> (p \lor p ) &\equiv p
> \end{align}
> $$
> - Conmutatividad:
> $$
> \begin{align}
> (p \land q) &\equiv (q \land p) \\[0.5em]
> (p \lor q ) &\equiv (q \lor p)
> \end{align}
> $$
> - Asociatividad:
> $$
> \begin{align}
> ((p \land q) \land r) &\equiv (p \land (q \land r)) \\[0.5em]
> ((p \lor q ) \lor r) &\equiv (p \lor (q \lor r))
> \end{align}
> $$
> - Distributividad:
> $$
> \begin{align}
> (p \land (q \lor r)) &\equiv ((p \land q) \lor (p \land r)) \\[0.5em]
> (p \lor (q \land r)) &\equiv ((p \lor q) \land (p \lor r))
> \end{align}
> $$
> - Leyes de Morgan<sup><a href="#user-content-fn-inline-1" id="user-content-fnref-inline-1" data-footnote-ref class="internal">1</a></sup>
> $$
> \begin{align}
> \neg(p \land q) &\equiv (\neg p \lor \neg q) \\[0.5em]
> \neg(p \lor q) &\equiv (\neg p \land \neg q)
> \end{align}
> $$
> - Transitividad impl. (silogismo hipotético)
> $$
> ((p \implies q) \land (q \implies r)) \implies (p \implies r)
> $$
> - Implicación material:
> $$
> \begin{align}
> (p \implies q) &\equiv (\neg p \lor q) \\[0.5em]
> \neg(p \implies q) &\equiv (p \land \neg q)
> \end{align}
> $$
> - Contraposición:
> $$
> (p \implies q) \equiv (\neg q \implies \neg p)
> $$
> - Más tautologías importantes:
> $$
> (p \implies (q \lor r)) \equiv ((p \land \neg r) \implies q)
> $$

> [!proof]- **Proof.**
>
> Usamos que $A \equiv B$ si y sólo si $A$ y $B$ tienen siempre el mismo valor de verdad.
>
> 1. **Doble negación.** Si $p$ es V, ent. $\neg p$ es F y $\neg(\neg p)$ es V; si $p$ es F, ent. $\neg p$ es V y $\neg(\neg p)$ es F. En ambos casos $\neg(\neg p)$ y $p$ tienen el mismo valor de verdad.
> 2. **Tercero excluido.** Si $p$ es V, $p \lor \neg p$ es V. Si $p$ es F, ent. $\neg p$ es V y $p \lor \neg p$ es V. Así, siempre es V.
> 3. **No contradicción.** (ver [[Leyes de DeMorgan]])
> $$
> \begin{align}
> \neg(p \land \neg p) &\equiv \neg p \lor \neg(\neg p) \tag{Morgan} \\[0.5em]
> &\equiv \neg p \lor p \tag{Doble neg.} \\[0.5em]
> &\equiv p \lor \neg p \tag{Conm.}
> \end{align}
> $$
> que es siempre V por el tercero excluido.
> 4. **Idempotencia.** $p \land p$ es V sii $p$ y $p$ son V, i.e. sii $p$ es V. Análogamente, $p \lor p$ es F sii $p$ es F.
> 5. **Conmutatividad.** $p \land q$ es V sii ambas son V, lo cual no depende del orden, ent. $(p \land q) \equiv (q \land p)$. Análogamente, $p \lor q$ es F sii ambas son F.
> 6. **Asociatividad.** $((p \land q) \land r)$ es V sii $p \land q$ y $r$ son V, sii $p$, $q$ y $r$ son V, sii $p$ y $q \land r$ son V, sii $(p \land (q \land r))$ es V. Para $\lor$ es lo mismo cambiando "V" por "F".
> 7. **Distributividad.** Por casos sobre $p$:
>     - Si $p$ es F: $p \land (q \lor r)$ es F, y $p \land q$, $p \land r$ son F, ent. $(p \land q) \lor (p \land r)$ es F.
>     - Si $p$ es V: $p \land (q \lor r)$ tiene el valor de $q \lor r$, y $(p \land q) \lor (p \land r)$ también tiene el valor de $q \lor r$.
>
>     La segunda es análoga: si $p$ es V, ambos lados son V; si $p$ es F, ambos lados tienen el valor de $q \land r$.
> 8. **Transitividad impl.** P.D. que no puede pasar que el antecedente sea V y el consecuente F. Sup. que $(p \implies q) \land (q \implies r)$ es V y que $p \implies r$ es F, i.e. $p$ es V y $r$ es F. Como $p$ es V y $p \implies q$ es V, ent. $q$ es V. Como $q \implies r$ es V, ent. $r$ es V, lo cual contradice que $r$ es F.
> 9. **Implicación material.** $p \implies q$ es F sólo cuando $p$ es V y $q$ es F; $\neg p \lor q$ es F sólo cuando $\neg p$ y $q$ son F, i.e. cuando $p$ es V y $q$ es F. Coinciden, ent. $(p \implies q) \equiv (\neg p \lor q)$. Para la negación:
> $$
> \begin{align}
> \neg(p \implies q) &\equiv \neg(\neg p \lor q) \tag{Impl. mat.} \\[0.5em]
> &\equiv \neg(\neg p) \land \neg q \tag{Morgan} \\[0.5em]
> &\equiv p \land \neg q \tag{Doble neg.}
> \end{align}
> $$
> 10. **Contraposición.**
> $$
> \begin{align}
> (p \implies q) &\equiv (\neg p \lor q) \tag{Impl. mat.} \\[0.5em]
> &\equiv (q \lor \neg p) \tag{Conm.} \\[0.5em]
> &\equiv (\neg(\neg q) \lor \neg p) \tag{Doble neg.} \\[0.5em]
> &\equiv (\neg q \implies \neg p) \tag{Impl. mat.}
> \end{align}
> $$
> 11. **Más tautologías.**
> $$
> \begin{align}
> (p \implies (q \lor r)) &\equiv \neg p \lor (q \lor r) \tag{Impl. mat.} \\[0.5em]
> &\equiv \neg p \lor (r \lor q) \tag{Conm.} \\[0.5em]
> &\equiv (\neg p \lor r) \lor q \tag{Asoc.} \\[0.5em]
> &\equiv (\neg p \lor \neg(\neg r)) \lor q \tag{Doble neg.} \\[0.5em]
> &\equiv \neg(p \land \neg r) \lor q \tag{Morgan} \\[0.5em]
> &\equiv ((p \land \neg r) \implies q) \tag{Impl. mat.}
> \end{align}
> $$
> $\blacksquare$

> [!observation]+ **Observación.**
>
> $A \equiv B$ significa que $A \iff B$ es una tautología. Es decir, $\iff$ es un conectivo (forma una nueva proposición), mientras que $\equiv$ es una relación entre proposiciones (dice que siempre tienen el mismo valor de verdad).

<section data-footnotes class="footnotes"><h2 class="sr-only" id="footnote-label">Notas</h2>
<ol>
<li id="user-content-fn-inline-1">

[[Leyes de DeMorgan]] <a href="#user-content-fnref-inline-1" data-footnote-backref class="data-footnote-backref internal">↩</a>

</li>
</ol>
</section>
