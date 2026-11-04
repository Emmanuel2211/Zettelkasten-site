---
modified: 2026-10-30T18:11:51Z
title: "Método de Taylor"
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
> [!tip]+ **Idea.**
> Utilizando polinomio de Taylor, recordamos:
> $$
> f(x) = f(x_{0}) + f'(x_{0})(x-x_{0}) + f''(x_{0})\frac{(x-x_{0})^{2}}{2!} + \frac{f''(x_{0})(x-x_{0})^{3}}{3!} + \dots + \frac{f^{(n)}(x_{0})(x-x_{0})^{n}}{n!} + R_{n+1}(x)
> $$
> Este es el polinomio de Taylor de grado $n$, también denotado $f(x) = P_{n}(x)$.
> En donde el residuo es $\displaystyle R_{n+1} = \int_{x_{0}}^{x} \frac{(x-t)^{n}}{x!} f^{(n)}(t)\, dt$

> [!Info]+ **Nota!**
> Si $f$ está acotada, $\left| R_{n}(x) \right|$ también lo podemos acotar.

$$
\implies \int_{a}^{b} \left| f(x) - P_{n}(x) \right| \, dx = \int_{a}^{b} \left| r_{n+1}(x) \right| \, dx \leq  M (b-a)
$$

Mientras más chica sea $M$, mejor será la siguiente aproximación. Así,

$$
\int_{a}^{b} f(x) \, dx \approx \boxed{\int_{a}^{b} P_{n}(x) \, dx}
$$

> [!example]+ Ejemplo.
> $\square$ Aproxima $\displaystyle \int_{0}^{1} e^{-x^{2}} \, dx$
> Hagamos $u = -x^{2}$. De esta manera
> $$
> \begin{align}
> e^{u} &= 1 + u + \frac{u^{2}}{2!} +\dots + \frac{u^{n}}{n!} + \int_{0}^{u} \frac{(u-t)^{n}}{n!}e^{u} \, du \\[0.5em]
>  &= 1  + u + \frac{u^{2}}{2} + \dots + \frac{u^{n}}{n!} - \int_{u}^{0} \frac{(u-t)^{n}}{n!}e^{u} \, du
> \end{align}
> $$
> Por el T.V.M. me deshago de la integral:
> $$
> \begin{align}
>  &= 1 + u + \frac{u^{2}}{2} + \dots + \frac{u^{n}}{n!} - \left[ \frac{(u-v)^{n}}{n!}e^{v}  \right](u) \quad \text{ para } v \in [u,0] \\[0.5em]
> &= 1 + (-x^{2}) +  \frac{(-x^{2})^{2}}{2!} + \frac{(-x^{2})^{3}}{3!} + \dots + \frac{(-x^{2})^{n}}{n!} - \left[ \frac{(-x^{2} - v)^{n}}{n!} e^{v}  \right] \\[0.5em]
>  &= 1 - x^{2} + \frac{x^{4}}{2!} - \frac{x^{6}}{3!} + \dots + (-1)^{n}\frac{x^{2n}}{n!} - \left[ \frac{(-x^{2} - v)^{n}}{n!}e^{v}  \right]
> \end{align}
> $$
> Si quisiera que $\left| R_{n}(x) \right| < 0.01$ tomo
> $$
> \left|\frac{(-x^{2} - v)^{n}}{n!} e^{v}\right| \text{ en donde } v \in [-x^{2}, 0]
> $$
> $$
> = \frac{\left| (x^{2}+v)^{n} \right| e^{v}}{n!} - \frac{(x^{2} + v)^{n}e^{v}}{n!} < \frac{(x^{2}+v)^{n}}{n!}
> $$
> Como el intervalo de integración es de $0$ y $1$, podemos acotar:
> $$
> \frac{(x^{2}+v)^{n}}{n!} < \frac{x^{2n}}{n!} < \frac{1}{n!} < 0.01 \iff 100 < n!
> $$
> Y lo último se cumple para  $n = 5$. Así, aproximamos
> $$
> \int_{0}^{1} e^{-x} \, dx \approx \int_{0}^{1} 1 - x^{2} + \frac{x^{4}}{2!} - \dots \, dx
> $$
> Y bueno, ya lo tenemos.
