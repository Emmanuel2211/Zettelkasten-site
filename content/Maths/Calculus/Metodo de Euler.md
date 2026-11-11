---
modified: 2026-10-01T19:30:44Z
title: "Método de Euler"
publish: true
type: zettel
date: "2026-09-29"
status: undone
aliases:
tags:
 - calculus
cssclasses: 
 - romana
---
Realizemos una aproximación: $\sqrt{ax^{2} + bx + c}$ estaría bueno que $\sqrt{ax^{2}+bx + c} = \sqrt{a}x + t$. ¿Cómo nos deshacemos de los demás terminos del polinómio?
$$
\begin{align}
\sqrt{ax^{2}+bx + c} &= \sqrt{a}x + t \\[0.5em]
ax^{2}+ bx + c &= ax^{2} + 2\sqrt{a}xt + t^{2}
\end{align}
$$

> Útil para resolver integrales que contienen una función racional de $x$ y una raíz cuadrada de un trinomio de segundo grado.

> [!example]- Ejemplo.
>
> - $\displaystyle \int \frac{dx}{\sqrt{x^{3} + 3}} \, dx$. Llamemos $\sqrt{x^{3}+3} = \sqrt{1}x + t$
> Ent. $x^{2} + 3 = x^{2} + 2xt + t^{2}$
> $$
> \begin{align}
>   \implies 3 &= 2xt + t^{2} \\[0.5em]
>   \implies x &= \frac{3-t^{2}}{2t} \\[0.5em]
>   \implies \frac{dx}{dt} &= \frac{-2t(2t)- 2(3-t^{2})}{(2t)^{2}} \\[0.5em]
>    &= \frac{-4t^{2} - 6 + 2t^{2}}{4t^{4}} = \frac{-4t^{2} - 6t^{2}}{(2t)^{2}} = \frac{-10t^{2}}{4t^{2}} = \frac{-10}{4}
> \end{align}
> $$
> ...

> [!example]- Ejemplo.
>
> - $\displaystyle \int \frac{dx}{\sqrt{x^{2} - 3x + 2}}$
> Lo aproximamos con $\sqrt{x^{2} - 3x + 2} = \sqrt{1}x  +t \implies  x(-3 - 2t) = t^{2}-2$
> Y encontramos $\displaystyle x = \frac{t^{2} -2}{-3-2t} \implies  \frac{dx}{dt} = \frac{2t(-3-2t)-(-2)(t^{2}-2)}{(-3-2t)^{2}}$
> $$
> \begin{align}
>   \frac{dx}{dt} &= \frac{-6t - 4t^{2} + 2t^{2} -4}{(2t+3)^{2}} = \frac{-2t^{2} - 6t -4}{(2t+3)^{2}}
> \end{align}
> $$
> Sustituyendo en la integral,
> $$
> \begin{align}
>   \int \frac{dx}{\sqrt{x^{2}-3x + 2}} &=  \int \frac{\frac{-2t^{2} -6t-4}{(2t+3)^{2}}}{\frac{t^{2}-2}{-3-2t} +t} \, dt = \int \frac{\frac{-2t^{2}-6t -4}{(2t+3)^{2}}}{\frac{t^{2}-2-3t-2t^{2}}{-3-2t}} \, dt \\[0.5em]
>    &= \int \frac{(-2t^{2}-6t-4)(-3-2t)}{(2t+3)^{2}(-t^{2}-3t -2)} \, dt \\[0.5em]
>     &=  \int \frac{-2}{2t+3} \, dt = -2 \frac{\log \left(2t+3\right)}{2} + C \\[0.5em]
>  &=-\log \left(2t+3\right) =-\log \left(m.k\lambda nkjkkllljmnm.mll.\right)
> \end{align}
> $$
