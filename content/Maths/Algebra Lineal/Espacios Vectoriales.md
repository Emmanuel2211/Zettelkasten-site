---
modified: 2026-11-11T00:44:47Z
title: "El Espacio Vectorial"
publish: true
type: zettel
date: "2026-07-03"
aliases:
 - Espacio Vectorial
tags: 
 - algebra
cssclasses: 
 - romana
---
Que motivación más importante que el uso de estas estructuras desde la escuela secundaria.<sup><a href="#user-content-fn-inline-1" id="user-content-fnref-inline-1" data-footnote-ref class="internal">1</a></sup> 

Abstraemos! y se hace la luz...

> [!theorem] **Def.** (Vector Space)
> Sea $\mathbb{F}$ un campo. Un **espacio vectorial sobre** $\mathbb{F}$ consiste de un conjunto $V$ y dos operaciones
> $$
> \text{(VS 0)} \ \ + : V \times V \to V \quad \text{(VS 0.5)} \ \ \cdot: \mathbb{F} \times V  \to V
> $$
> llamada **suma vectorial** y **multiplicación vectorial** respectivamente, que cumplen:
> 
> $\text{(VS 1)} \quad \forall x,y \in V, x + y = y + x$
> $\text{(VS 2)}\quad \forall x,y,z \in V, (x + y) + z = x + (y + z)$
> $\text{(VS 3)}\quad \exists \bar{0} \in V \ \forall x \in V ( x + \bar{0} = x)$
> $\text{(VS 4)} \quad \forall x \in V \ \exists y \in V, x + y = \bar{0}$
> $\text{(VS 5)} \quad \text{Si 1 el neutro de } \mathbb{F}, \ \forall x \in V, 1x = x$
> $\text{(VS 6)}\quad \forall a,b \in \mathbb{F} \ \forall x \in V, (ab)x = a(bx)$ 
> $\text{(VS 7)}\quad \forall a \in \mathbb{F} \ \forall x,y \in V (a(x+y) = ax + ay)$
> $\text{(VS 8)}\quad \forall a,b \in \mathbb{F} \ \forall x \in V ((a+b)x = ax + bx)$
> 
> Y están bien definidas.
> Cerradura $+$: $\forall x,y \in V, \ x + y \in V$
> Cerradura $\cdot$ : $\forall a \in \mathbb{F} \ \forall x \in V, \ ax \in V$
> 
> Los elementos de $\mathbb{F}$ son llamados escalares, y los de $V$ vectores.

> [!observation]- **Observación.**
> - La multiplicación escalar es una función que va de $\mathbb{F} \times V$ en $V$, por lo que dado $a \in \mathbb{F}$ y $x \in V$, sólo tiene sentido hablar de $a \cdot x$ o $ax$; 
> - En general, en todo esp. vect. denotamos con $\bar{0}$ a su neutro para diferenciarlo del neutro $0$ del campo.
> - *Ojo!* en nuestros "axiomas" no mencionamos nuestro **neutro** e **inverso** son *únicos*.

Ahora, veamos propiedades que cumplen **todos** los espacios vectoriales.<sup><a href="#user-content-fn-inline-2" id="user-content-fnref-inline-2" data-footnote-ref class="internal">2</a></sup>

Hay algunos $V$ en particular que tienen características muy interesantes y son importantes en la aplicación. Estos 5 ejemplos son los 5 de siempre por antonomacia, cada uno generalizando al anterior.<sup><a href="#user-content-fn-inline-3" id="user-content-fnref-inline-3" data-footnote-ref class="internal">3</a></sup><sup><a href="#user-content-fn-inline-4" id="user-content-fnref-inline-4" data-footnote-ref class="internal">4</a></sup><sup><a href="#user-content-fn-inline-5" id="user-content-fnref-inline-5" data-footnote-ref class="internal">5</a></sup><sup><a href="#user-content-fn-inline-6" id="user-content-fnref-inline-6" data-footnote-ref class="internal">6</a></sup><sup><a href="#user-content-fn-inline-7" id="user-content-fnref-inline-7" data-footnote-ref class="internal">7</a></sup>
$$
\mathbb{F}^{n}\to M_{m\times n}(\mathbb{F}) \to P(\mathbb{F}) \to \mathcal{S}(\mathbb{F}) \to \mathscr{F}(S,\mathbb{F})
$$


Normalmente, en el estudio de cualquier estructura algebraica es interesante examinar subconjuntos que tengan la misma estructura. Así, esta noción de *subestructura* para espacios vectoriales se le conoce como **subespacio**.<sup><a href="#user-content-fn-inline-8" id="user-content-fnref-inline-8" data-footnote-ref class="internal">8</a></sup> 
Desarrollamos un criterio muy simple para determinar subespacios y algunos resultados, damos ejemplos de subespacios.

Como vimos en tales ejemplos, un esp. vect. $V$ puede tener muchos y diversos subespacios, y surge una pregunta natural:
- ¿Cómo pueden combinarse subespacios para generar otros subespacios?
- ¿Quienes son los subespacios que están "arriba" y "abajo" de ellos en el diagrama (*Lattice*)?
Esto abre la discusión de combinaciones de subespacios<sup><a href="#user-content-fn-inline-9" id="user-content-fnref-inline-9" data-footnote-ref class="internal">9</a></sup>
Cuando un vector es combinación lineal de otro?<sup><a href="#user-content-fn-inline-10" id="user-content-fnref-inline-10" data-footnote-ref class="internal">10</a></sup>

<section data-footnotes class="footnotes"><h2 class="sr-only" id="footnote-label">Notas</h2>
<ol>
<li id="user-content-fn-inline-1">

[[Motivación Espacio Vectorial]] <a href="#user-content-fnref-inline-1" data-footnote-backref class="data-footnote-backref internal">↩</a>

</li>
<li id="user-content-fn-inline-2">

[[Propiedades de Espacio Vectorial]] <a href="#user-content-fnref-inline-2" data-footnote-backref class="data-footnote-backref internal">↩</a>

</li>
<li id="user-content-fn-inline-3">

[[Espacio Vectorial de las n-eadas de un Campo]] <a href="#user-content-fnref-inline-3" data-footnote-backref class="data-footnote-backref internal">↩</a>

</li>
<li id="user-content-fn-inline-4">

[[Matrices de un Campo]] <a href="#user-content-fnref-inline-4" data-footnote-backref class="data-footnote-backref internal">↩</a>

</li>
<li id="user-content-fn-inline-5">

[[Espacio Vectorial de Polinomios con Coeficientes en un Campo]] <a href="#user-content-fnref-inline-5" data-footnote-backref class="data-footnote-backref internal">↩</a>

</li>
<li id="user-content-fn-inline-6">

[[Espacio Vectorial de las Sucesiones Finitas]] <a href="#user-content-fnref-inline-6" data-footnote-backref class="data-footnote-backref internal">↩</a>

</li>
<li id="user-content-fn-inline-7">

[[Espacio Vectorial del Conjunto de todas las Funciones]] <a href="#user-content-fnref-inline-7" data-footnote-backref class="data-footnote-backref internal">↩</a>

</li>
<li id="user-content-fn-inline-8">

[[Subespacio]] <a href="#user-content-fnref-inline-8" data-footnote-backref class="data-footnote-backref internal">↩</a>

</li>
<li id="user-content-fn-inline-9">

[[Combinando Subespacios]] <a href="#user-content-fnref-inline-9" data-footnote-backref class="data-footnote-backref internal">↩</a>

</li>
<li id="user-content-fn-inline-10">

[[Combinaciones Lineales y Generados]] <a href="#user-content-fnref-inline-10" data-footnote-backref class="data-footnote-backref internal">↩</a>

</li>
</ol>
</section>
