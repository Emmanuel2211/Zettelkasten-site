---
modified: 2026-09-17T18:19:35Z
title: "Cambio de Variable"
publish: true
type: zettel
date: "2026-09-01"
status: undone
aliases:
tags:
 - calculus
cssclasses:
 - romana
---
> [!theorem] **Teorema.** (Cambio de Variable)
>
> Sea $g: A \subseteq \mathbb{R} \to  \mathbb{R}$ continua con derivada continua. Si $f: B \subseteq \mathbb{R} \to  \mathbb{R}$ es una función tal que $C := g(A) \cap B \neq  \varnothing$ y $\left. f \right|_{C}$ es continua entonces
> $$
> \int_{a}^{b} f(g(x))g'(x) \, dx  = \int_{g(a)}^{g(b)} f(u) \, du 
> $$
> para todo $[a,b] \subseteq C$.


> [!proof]- **Proof.**
>
> Sea $[a,b] \subseteq C$, $\left. f \right|_{[a,b]}$ es una función continua lo que implica que existe su antiderivada $F$ de tal forma que $\displaystyle \int_{g(a)}^{g(b)} f(u) \, du = F(g(b)) - F(g(a))$
> Observamos ahora que: $\displaystyle \frac{d}{dx}F(g(x)) = F'(g(x))\cdot g'(x) = f(g(x)) \cdot g'(x)$
> Por esto, $F \circ g$ es una antiderivada de $f(g(x))\cdot g'(x)$, lo que nos lleva a
> $$
> \int_{a}^{b} f(g(x)) \cdot g'(x) \, dx  = (F \circ g)(b) - (F \circ g)(a)
> $$
> Así,
> $$
> \int_{a}^{b} f(g(x))g'(x) \, dx  = \int_{g(a)}^{g(b)} f(u) \, du \tag*{$\blacksquare$}
> $$


> [!observation]+ **Observación.**
>
> Si $f(x) = x$, ent. $\displaystyle \int_{a}^{b} g(x)g'(x) \, dx =\int_{g(a)}^{g(b)} u \, du =  \left. \frac{u^{2}}{2} \right|_{g(a)}^{g(b)}$

> [!example]- Ejemplo.
>
> 1. $\displaystyle \int_{a}^{b} \sin(x)\cos(x) \, dx = \int u(x) \, du =  \left.  \frac{u^{2}}{2}\right| = \left. \frac{\sin^{2}(x)}{2} \right|_{a}^{b} = \frac{\sin^{2}(b)}{2} - \frac{\sin^{2}(a)}{2}$
>
> Si cambiamos los extremos de integración desde antes, podemos evaluarla desde $u \, du$, el siguiente evaluamos en los dos extremos para comparar que es el mismo resultado:
>
> 2. $\displaystyle \int_{0}^{2} \frac{x^{2} \, dx}{(x^{3} + 2)^{2}} = \int_{2}^{10}  \frac{du}{3(u)^{2}} = 1/3 \int_{2}^{10} \frac{du}{u^{2}} = \frac{1}{3} \left. \left(-\frac{1}{u}\right)  \right|_{2}^{10} = \frac{1}{3}\left( \left. - \frac{1}{x^{3} + 2} \right|_{0}^{2}  \right) = \frac{1}{3} \left[ \frac{-1}{10} + \frac{1}{2}  \right] = \frac{1}{3} \left[ \frac{4}{10}  \right] = \frac{2}{15}$ 
> 
> Desde que se integra, con el concepto general de antiderivada (integral indefinida) se tiene que poner la constante $+c$:
>
> 3. $\displaystyle \int \frac{x^{3}}{\sqrt{1 + x^{2}}} \, dx  = \int \frac{(u-1) \, du}{2\sqrt{u}} = \frac{1}{2}\left[ \int \frac{u \, du}{\sqrt{u}} - \int \frac{du}{\sqrt{u}} \right] = \frac{1}{2} \left[ \int u ^{\frac{1}{2}} \, du - \int u ^{- \frac{1}{2}} \, du  \right] = \frac{1}{2}\left[ \frac{2}{3} u^{\frac{3}{2}} - 2u^{\frac{1}{2}}  \right] = \frac{1}{2} \left[ \frac{2}{3} (1 + x^{2})^{\frac{3}{2}} - 2 (1 + x^{2})^{\frac{1}{2}}  \right]\dots + c$
>
> Pueden haber multiples cambios de variables!
>
> 4. $\displaystyle \int \frac{\sqrt{x}- 1 \, dx}{\sqrt{x}(x - 2 \sqrt{x} + 2)^{2}} = \int \frac{ (u-1) 2u \, du}{u (u^{2} - 2u + 2)^{2}} = \int \frac{2 ( u-1) \, du}{(u^{2} - 2u + 2)^{2}} = \int \frac{dv}{v^{2}} = (- \frac{1}{v}) = \dots$
>
