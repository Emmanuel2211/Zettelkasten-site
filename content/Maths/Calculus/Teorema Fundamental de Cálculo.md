---
modified: 2026-10-29T17:57:20Z
title: "Teorema Fundamental del Cálculo"
publish: true
type: zettel
date: "2026-09-07"
status: undone
aliases:
tags:
 - calculus
cssclasses: 
 - romana
---
> La integración y la derivación son operaciones inversas. La integral es una función de *"acumulación"*, y la derivada *"el ritmo actual"*.

> [!theorem] **Teorema 4.** (Teorema Fundamental del Cálculo)
>
> Sea $f:[a,b] \to \mathbb{R}$ continua, si definimos $G: [a,b] \to \mathbb{R}$ de tal forma que $\displaystyle G(x) = \int_{a}^{x} f(z) \, dz$, entonces $G$ es continua en $[a,b]$ y derivable en $(a,b)$ y su derivada para todo $x \in (a,b)$ es
> $$
> G'(x) = \frac{d}{dx} \int_{a}^{x} f(z) \, dz = f(x)
> $$

> [!proof]- **Proof.** 
>
> Por propiedad 1,
> $$
> \int_{a}^{u} f(x) \, dx + \int_{u}^{v} f(x) \, dx = \int_{a}^{v} f(x) \, dx 
> $$
> Lo que implica,
> $$
> \int_{u}^{v} f(x) \, dx = \int_{a}^{v} f(x) \, dx - \int_{a}^{u} f(x) \, dx 
> $$
> Por propiedad 2, $\forall u,v \in [a,b], \ u\leq v$
> $$
> (v-u)\underset{[u,v]}{\min } \{ f \} \leq \int_{u}^{v} f(x) \, dx \leq (v-u)\underset{[u,v]}{\max } \{ f \}
> $$
> Entonces,
> $$
> (v-u)\min \{ f \} \leq \int_{a}^{v} f(x) \, dx - \int_{a}^{u} f(x) \, dx \leq (v-u)\max \{ f \}
> $$
> Lo que implica,
> $$
> \underset{[u,v]}{\min } \{ f \} \leq \frac{\displaystyle\int_{a}^{v} f(x) \, dx - \int_{a}^{u} f(x) \, dx }{v-u} \leq \underset{[u,v]}{\max } \{ f \}
> $$
> Tomamos $u =x$ y $v = x+h$, de esta forma
> $$
> \underset{[x,x+h]}{\min } \{ f(z) \} \leq \frac{\displaystyle \int_{a}^{x+h} f(z) \, dz - \int_{a}^{x} f(z) \, dz }{h} \leq \underset{[x,x+h]}{\max } \{ f(x) \}
> $$
> Por el Teorema del Sandwich
> $$
> \lim_{ h \to 0 } \frac{\displaystyle\int_{a}^{x+h} f(x) \, dz - \int_{a}^{x} f(z) \, dz }{h} = \frac{d}{dx} \int_{a}^{x} f(z) \, dz = f(x) \tag*{$\blacksquare$}
> $$


> [!observation]+ **Observación.**
>
> Analizando un poco nuestra demostración, vemos que se usa la antiderivada:
> $$
> F(x) = \int_{a}^{x} f(z) \, dz
> $$
> Por lo que tenemos,
> $$
> \underset{[x,x+h]}{\min } \{ f(z) \} \leq \frac{F(x+h) - F(x)}{h} \leq \underset{[x,x+h]}{\max } \{ f(z) \}
> $$
> $$\lim_{h \to 0} \left( \underset{[x,x+h]}{\min } \{ f \} \right) \leq \lim_{h \to 0} \frac{F(x+h) - F(x)}{h} \leq \lim_{h \to 0} \left( \underset{[x,x+h]}{\max } \{ f \} \right)
> $$
> Usando la Def. del Cociente de Newton, y dado que $f$ es continua, el $\min$ y el $\max$ convergen $f(x)$. (*Esto se debería de demostrar formalmente*)
> $$
> f(x) \leq \frac{d}{dx} \int_{a}^{x} f(z) \, dz \leq f(x)
> $$

Despues del teorema fundamental, podemos estudiar... Antiderivadas.<sup><a href="#user-content-fn-inline-1" id="user-content-fnref-inline-1" data-footnote-ref class="internal">1</a></sup> Y llegar al siguiente resultado.

> La Regla de Barrow (TFC2) nos permite concetar integrales definidas con antiderivadas, permitiendo calcular la función de acumulación (*integral*).

> [!theorem] **Teorema.** (Teorema Fundamental del Cálculo 2)
>
> Sea $f: [a,b] \to \mathbb{R}$ continua, y sea $F(x)$ la antiderivada de $f(x)$ entonces,
> $$
> \int_{a}^{b} f(x) \, dx = F(b)-F(a) = \left. F(x) \right|_{a}^{b}
> $$

> [!observation]+ **Observación.**
>
> - De otra forma,
> $$
> \int_{a}^{b} f(x) \, dx = \int_{a}^{b} \frac{d \ F(x)}{dx} \, dx = F(b) - F(a)
> $$
> 
> - Cuidado! $\displaystyle \frac{d}{dx} \int_{a}^{b} f(z) \, dz = 0$ pues no hay variable de derivación $x$, solo estamos derivando una constante.
>
> - Dada $f$ integrable en $[a,b]$ se define
> $$
> \int_{a}^{b} f(x) \, dx = - \int_{b}^{a} f(x) \, dx 
> $$
> pues $\int_{a}^{b} f(x) \, dx + \int_{b}^{a} f(x) \, d = 0$




Con esto, podemos desarrollar más resultados.

> [!theorem] **Teorema 6.** (Unicidad de la Integral)
>
> Si $f$ tiene una integral, entonces ésta es única.

> [!proof]- **Proof.** 
>
> Por el T.F.C. 2, $F(x) = G(x) + k$. Ahora, $0 = F(a)= G(a) + k$
> Esto implica, $k = -G(a)$. Como la constante está determinada de manera única por $G$, sólo existe una integral 
> $$\int_{a}^{b} f(x) \, dx  \tag*{$\blacksquare$}$$

> [!example]- **Ejemplo.** 
>
> $$
> f(x) = x^{2}, \quad x \in [0,1]
> $$
> Consideramos la partición, $P = \left\{  0, \frac{1}{n}, \frac{2}{n}, \dots , \frac{n}{n}  = 1 \right\}$
> tenemos que
> $$
> \begin{align}
> L_{P} &= \sum_{k=0}^{n-1} (x_{k+1}-x_{k}) \cdot \underset{x_{k},x_{k+1}}{\min } \{ f(x) \} \\[0.5em]
> &= \sum_{k=0}^{n-1} \frac{1}{n}f(x_{k}) = \frac{1}{n}\left[ 0^{2} +\left( \frac{1}{n}^{2} \right)+\dots+ \left( \frac{n-1}{n}^{2} \right) \right] \\[0.5em]
> &=\frac{1}{n} \cdot \frac{1}{n^{2}} [1^{2}+2^{2}+\dots+(n-1)^{2}] \\[0.5em]
> &=\frac{1}{n}\cdot \frac{1}{n^{2}} \left[ \frac{n(n+1)(2n+1)}{6} \right] = \frac{(2n+1)(n+1)}{6n^{2}} \\[0.5em]
> &=\frac{2n^{2}+2n+n+1}{6n^{2}} = \frac{2n^{2}+3n+1}{6n^{2}} \overset{n \to \infty}{\longrightarrow} \frac{1}{3}
> \end{align}
> $$
> Dada $f(x)=x^{2}$, $\displaystyle F(x) = \frac{x^{3}}{3}$ es antiderivada
> Por TFC 2,
> $$
> \int_{0}^{1} f(x) \, dx  = F(1)- F(0) = \frac{1}{3}
> $$
> Si tomamos $\displaystyle G(x) = \frac{x^{3}}{3} + 1$, $G'(x) = x^{2}$
> Por TFC 2,
> $$
> \int_{0}^{1} f(x) \, dx  = G(1)-G(0) = \left( \frac{1}{3}+1 \right)-(1) = \frac{1}{3}
> $$

<section data-footnotes class="footnotes"><h2 class="sr-only" id="footnote-label">Notas</h2>
<ol>
<li id="user-content-fn-inline-1">

[[Antiderivada]] <a href="#user-content-fnref-inline-1" data-footnote-backref class="data-footnote-backref internal">↩</a>

</li>
</ol>
</section>
