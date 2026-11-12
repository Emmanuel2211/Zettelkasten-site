---
modified: 2026-11-03T15:29:50Z
title: "Varianza"
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
> [!tip|idea]- **Idea Intuitiva.**
>
> La varianza $(\sigma^{2})$ es una medida del grado de dispersión de los diferentes valores tomados por la variable.

> [!theorem] **Definición.** (Varianza)
>
> Sea $X$ v.a. discreta con función de masa de probabilidad $f(x)$. La **varianza** de $X$ se define como el número
> $$
> \operatorname{Var} (X) = \sum_{x} (x-\mu)^{2}f(x),
> $$
> cuando esta suma es convergente y en donde $\mu$ es la esperanza de $X$.
> 
> Para $X$ v.a. continua, se define
> $$
> \operatorname{Var} (X) = \int_{-\infty}^{\infty} (x-\mu)^{2}f(x) \, dx,
> $$
> cuando esta integral es convergente.
>
> En el caso de que la integral o la suma no convergan, ent. se dice que la varianza no existe o no $X$ no tiene varianza finita.
> 
> A la varianza, generalmente, se le denota $\sigma ^{2}$.

> [!observation]+ **Observación.**
>
> También podemos expresar la varianza en una sola expresión como, dodne $\mu$ es $\operatorname{E} (X)$ (bajo la misma v.a.):
> $$
> \operatorname{Var} (X) = E(X - \mu)^{2}
> $$
> Si! La varianza es un caso particular de la esperanza, en donde estamos calculando la esperanza de $g(x)= ( x - \mu )^{2}$ aplicada a una v.a. $X$ con esperanza $\mu$. Entonces, podemos hacer uso de un poco de la teoría que desarrollamos sobre la esperanza<sup><a href="#user-content-fn-inline-1" id="user-content-fnref-inline-1" data-footnote-ref class="internal">1</a></sup>.

> [!theorem] **Definición.** (Desviación Estandar)
>
> A la raíz cuadrada de $\sigma ^{2}$ se le llama **desviación estandar**, denotada $\sigma$.

> [!theorem] **Teorema.** (Propiedades)
>
> Sean $X$ y $Y$ v.a. con varianza finita y $c$ una constante, entonces
> 1. $\displaystyle \operatorname{Var} (X) \geq 0$.
> 2. $\operatorname{Var} (c) = 0$.
> 3. $\operatorname{Var} (cX) = c^{2} \operatorname{Var} (X)$.
> 4. $\operatorname{Var} (X + c) = \operatorname{Var} (X)$.
> 5. $\operatorname{Var} (X) = \operatorname{E} (X^{2}) - \operatorname{E}^{2} (X)$.
> 6. En general, $\operatorname{Var} (X + Y) \neq  \operatorname{Var} (X) + \operatorname{Var} (Y)$.

> [!proof]- **Proof.**

> [!theorem] **Proposición.**
>
> Sean $X$ y $Y$ v.a. **independientes** y con varianza finita, entonces
> $$
> \operatorname{Var} (X + Y) = \operatorname{Var} (X) + \operatorname{Var} (Y)
> $$

<section data-footnotes class="footnotes"><h2 class="sr-only" id="footnote-label">Notas</h2>
<ol>
<li id="user-content-fn-inline-1">

[[Esperanza]] <a href="#user-content-fnref-inline-1" data-footnote-backref class="data-footnote-backref internal">↩</a>

</li>
</ol>
</section>
