---
modified: 2026-10-02T23:02:37Z
title: "Continuidad"
publish: true
type: zettel
date: "2026-06-30"
aliases:
tags: 
 - calculus
cssclasses: 
 - romana
---
> [!theorem] **Definición.** (Continuidad)
> $f:[a,b] \to \mathbb{R}$ es continuo en $x_{0}$ si
> $$
> \lim_{ x \to x_{0} } f(x) = f(x_{0})
> $$
> Es decir,
> $$
> \forall  \varepsilon>0 \ \exists \delta > 0 \ \text{ tal que } \ \lvert x-x_{0} \rvert \leq \delta \implies \lvert f(x)-f(x_{0}) \rvert <\varepsilon
> $$

> La continuidad se preserva al algebra de limites:

> [!theorem] **Teorema.**
> Sean $f,g$ continuas en $p$. Entonces $f+g$, $f-g$, $f\cdot g$, $\frac{f}{g}$, con $g(p) \neq 0$ para el cociente, son continuas en $p$.

>Aunque el intervalo sea abierto, la función no puede "explotar" al infinito *cerca* de un punto donde es continua. A diferencia del Teo. Weierstrass, que da acotación *global* para todo un intervalo cerrado.

> [!theorem] **Teorema.** (Acotación Local)
> Sea $f:[a,b]\to \mathbb{R}$ continua en $c\in(a,b)$, entonces existe $\delta>0$ y $M>0$ tales que
> $$
> \lvert f(x) \rvert  \leq M \quad \forall x \in (c-\delta,c+\delta)
> $$






----



Ahora bien, veamos la definición de *función continua* de Cauchy.
## Continuidad en un punto interior
del $\text{dom} (f)$, donde $f$ esta definida en el vecindario de $x_{0}$: $(x_{0}-c,x_{0}+c)$.

> [!theorem] **Def.** (Continuous)
> Let $f$ be defined in a neighborhood of $x_{0}$. The function $f$ is continuous at $x_{0}$ provided $\lim_{ x \to x_{0} }f(x) = f(x_{0})$.

> [!note]
> Esto significa por cada vecindario $V$ de $f(x_{0})$, existe un vecindario $U$ de $x_{0}$ tal que $f(U) \subset V$, es decir, $x \in U \implies f(x) \in V$. O equivalentemente, claro está por $\varepsilon-\delta$. Por lo que podemos desarrollar demostraciones de las dos formas.

> [!observation]- **Observación**
> Es claro que $f$ puede no ser continua en $x_{0}$ si:
> 1. $f$ no esta definida en $x_{0}$.
> 2. $\lim_{ x \to x_{0} }f(x)$ no existe.
> 3. $f$ está definida en $x_{0}$ y $\lim_{ n \to x_{0} } f(x)$ existe, pero 
> $$
> f(x_{0}) \neq \lim_{ x \to x_{0} } f(x)
> $$

**Continuidad en extremos:** Claro es ta que se define por limites laterales.

> [!example]- **Ejemplo 1.** ("neighbourhood method" proof)
> Sea $f: (0,\infty) \to \mathbb{R}$, definido por $f(x) = 1/ x$, Se demostrará que si $x_{0} \in (0,\infty)$, entonces $f$ es continua en $x_{0}$.
> *Proof.*
> Sea $V$ un vecindario de $f(x_{0})$, $V = (A,B)$. Por lo que $A < f(x_{0}) < B$. Tenemos que encontrar un vecindario $U = (a,b)$ de $x_{0}$ tal que $f(U) \subset V$. 
> Sea $A>0$, $a = 1 / B$, $b = 1 / A$. Entonces, como $A < f(x_{0}) < B$, tenemos
> $$
> b = \frac{1}{A} > x_{0} = \frac{1}{f(x_{0})} > \frac{1}{B} = a,
> $$
> entonces $x_{0} \in (a,b) = U$. Además, si $c \in U$, entonces $a<c<b$ y
> $$
> B > \frac{1}{c} = f(c) >A,
> $$
> entonces $f(c)\in V$. 
> $$
> \therefore f(U) \subset V \tag*{$\blacksquare$}
> $$
> 
> ![[Pasted image 20260506132641.png|center]]

> [!example]- **Ejemplo 2.** ($\varepsilon-\delta$ proof)
> Sea $f: (0,\infty) \to \mathbb{R}$, y $f(x) = 1 / x$. 
> PD. $x_{0} \in (0,\infty) \implies f$ es continua en $x_{0}$.
> Sea $x_{0} \in (0, \infty)$, $x>0$ y $\varepsilon > 0$. PD.
> $$
> \forall \varepsilon>0 \exists \delta >0 : \forall x(0 < \lvert x - x_{0} \rvert < \delta)  \implies \lvert 1 / x - 1 / x_{0}  \rvert <\varepsilon
> $$
> Reescribiendo la desigualdad
> $$
> \lvert x - x_{0} \rvert  < \varepsilon x x_{0} \tag{1}
> $$
> Propone $\delta = \varepsilon x x_{0}$, pero no es claro el $\delta>0$ para el $\lvert x-x_{0} \rvert<\delta \implies \lvert x-x_{0} \rvert< \varepsilon xx_{0}$ para todo $x \in (0,\infty)$. Podemos resolver esto requiriendo a $x$ lejos de $0$.
> Por ejemplo
> $$
> \lvert x-x_{0} \rvert < \frac{1}{2} x_{0} \tag{2}
> $$
> Entonces
> $$
> \begin{align}
> \frac{1}{2}x_{0} &< x \\[0.5em]
> \frac{1}{2}\varepsilon x_{0}^2 &< \varepsilon xx_{0}. \tag{3}
> \end{align}
> $$
> Las desigualdades (1), (2) y (3) sugieren tomar
> $$
> \delta = \min\left( \frac{1}{2}x_{0}, \frac{1}{2}x_{0}^{2}\varepsilon \right).
> $$
> Para este $\delta$, fácilmente se tiene, si $\lvert x - x_{0} \rvert< \delta$ entonces
> $$
> \left\lvert  \frac{1}{x}-\frac{1}{x_{0}}  \right\rvert = \frac{\lvert x-x_{0} \rvert }{\lvert x x_{0} \rvert } < \frac{\frac{1}{2}x_{0}^{2} \varepsilon}{\frac{1}{2}x_{0}^{2}} = \varepsilon \tag*{$\blacksquare$}
> $$

# Summary
Después de definir el límite y la continuidad en un punto, abrimos multiples discusiones diversas: continuidad en un punto arbitrario<sup><a href="#user-content-fn-inline-1" id="user-content-fnref-inline-1" data-footnote-ref class="internal">1</a></sup>, en un conjunto<sup><a href="#user-content-fn-inline-2" id="user-content-fnref-inline-2" data-footnote-ref class="internal">2</a></sup>, varias propiedades importantes de funciones continuas<sup><a href="#user-content-fn-inline-3" id="user-content-fnref-inline-3" data-footnote-ref class="internal">3</a></sup>, continuidad uniforma<sup><a href="#user-content-fn-inline-4" id="user-content-fnref-inline-4" data-footnote-ref class="internal">4</a></sup>, propiedades con extremos<sup><a href="#user-content-fn-inline-5" id="user-content-fnref-inline-5" data-footnote-ref class="internal">5</a></sup>, y revisitar la propiedad de Darboux<sup><a href="#user-content-fn-inline-6" id="user-content-fnref-inline-6" data-footnote-ref class="internal">6</a></sup> con nuestros conceptos de continuidad ya establecidos, además entramos en terrenos de discontinuidad<sup><a href="#user-content-fn-inline-7" id="user-content-fnref-inline-7" data-footnote-ref class="internal">7</a></sup> y las funciones monótonas<sup><a href="#user-content-fn-inline-8" id="user-content-fnref-inline-8" data-footnote-ref class="internal">8</a></sup>... y más

<section data-footnotes class="footnotes"><h2 class="sr-only" id="footnote-label">Notas</h2>
<ol>
<li id="user-content-fn-inline-1">

[[Continuidad en un punto arbitrario]] <a href="#user-content-fnref-inline-1" data-footnote-backref class="data-footnote-backref internal">↩</a>

</li>
<li id="user-content-fn-inline-2">

[[continuidad en un conjunto]] <a href="#user-content-fnref-inline-2" data-footnote-backref class="data-footnote-backref internal">↩</a>

</li>
<li id="user-content-fn-inline-3">

[[propiedades de funciones continuas]] <a href="#user-content-fnref-inline-3" data-footnote-backref class="data-footnote-backref internal">↩</a>

</li>
<li id="user-content-fn-inline-4">

[[Continuidad Uniforme]] <a href="#user-content-fnref-inline-4" data-footnote-backref class="data-footnote-backref internal">↩</a>

</li>
<li id="user-content-fn-inline-5">

[[continuidad y extremos]] <a href="#user-content-fnref-inline-5" data-footnote-backref class="data-footnote-backref internal">↩</a>

</li>
<li id="user-content-fn-inline-6">

[[Propiedad de Darboux]] <a href="#user-content-fnref-inline-6" data-footnote-backref class="data-footnote-backref internal">↩</a>

</li>
<li id="user-content-fn-inline-7">

[[Discontinuidad de funciones]] <a href="#user-content-fnref-inline-7" data-footnote-backref class="data-footnote-backref internal">↩</a>

</li>
<li id="user-content-fn-inline-8">

[[Funciones Monotonas]] <a href="#user-content-fnref-inline-8" data-footnote-backref class="data-footnote-backref internal">↩</a>

</li>
</ol>
</section>
