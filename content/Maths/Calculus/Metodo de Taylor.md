---
modified: 2026-11-09T21:54:18Z
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
> [!tip|idea]- **Idea Intuitiva.**
>
> Utilizando polinomio de Taylor (ver [[Polinomio de Taylor]]), recordamos:
> $$
> f(x) = f(x_{0}) + f'(x_{0})(x-x_{0}) + f''(x_{0})\frac{(x-x_{0})^{2}}{2!} + \frac{f'''(x_{0})(x-x_{0})^{3}}{3!} + \dots + \frac{f^{(n)}(x_{0})(x-x_{0})^{n}}{n!} + R_{n+1}(x)
> $$
> Esto es $f(x) = P_{n}(x) + R_{n+1}(x)$, donde $P_{n}(x)$ (todo menos el residuo) es el polinomio de Taylor de grado $n$.
> En donde el residuo es $\displaystyle R_{n+1}(x) = \int_{x_{0}}^{x} \frac{(x-t)^{n}}{n!} f^{(n+1)}(t)\, dt$ (con $f$ de clase $C^{n+1}$).

> [!Info]- **Nota!**
>
> Si $f^{(n+1)}$ está acotada, $\left| R_{n+1}(x) \right|$ también lo podemos acotar.

Sea $M$ una cota de $\left| R_{n+1}(x) \right|$ en $[a,b]$, ent.
$$
\implies \left| \int_{a}^{b} f(x) \, dx - \int_{a}^{b} P_{n}(x) \, dx \right| \leq \int_{a}^{b} \left| f(x) - P_{n}(x) \right| \, dx = \int_{a}^{b} \left| R_{n+1}(x) \right| \, dx \leq  M (b-a)
$$

Mientras más chica sea $M$, mejor será la siguiente aproximación. Así,

$$
\int_{a}^{b} f(x) \, dx \approx \boxed{\int_{a}^{b} P_{n}(x) \, dx}
$$

> [!example]- Ejemplo.
>
> $\square$ Aproxima $\displaystyle \int_{0}^{1} e^{-x^{2}} \, dx$
> Hagamos $u = -x^{2}$. De esta manera (Taylor de $e^{u}$ alrededor de $0$)
> $$
> \begin{align}
> e^{u} &= 1 + u + \frac{u^{2}}{2!} +\dots + \frac{u^{n}}{n!} + \int_{0}^{u} \frac{(u-t)^{n}}{n!}e^{t} \, dt \\[0.5em]
>  &= 1  + u + \frac{u^{2}}{2} + \dots + \frac{u^{n}}{n!} - \int_{u}^{0} \frac{(u-t)^{n}}{n!}e^{t} \, dt
> \end{align}
> $$
> Por el T.V.M. de integrales me deshago de la integral: existe $v \in [u,0]$ tal que $\displaystyle \int_{u}^{0} \frac{(u-t)^{n}}{n!}e^{t} \, dt = \frac{(u-v)^{n}}{n!}e^{v} (0 - u)$, ent.
> $$
> \begin{align}
>  &= 1 + u + \frac{u^{2}}{2} + \dots + \frac{u^{n}}{n!} + \left[ \frac{(u-v)^{n}}{n!}e^{v}  \right](u) \quad \text{ para } v \in [u,0] \\[0.5em]
> &= 1 + (-x^{2}) +  \frac{(-x^{2})^{2}}{2!} + \frac{(-x^{2})^{3}}{3!} + \dots + \frac{(-x^{2})^{n}}{n!} + \left[ \frac{(-x^{2} - v)^{n}}{n!} e^{v}  \right](-x^{2}) \tag{sust. $u$} \\[0.5em]
> &= 1 - x^{2} + \frac{x^{4}}{2!} - \frac{x^{6}}{3!} + \dots + (-1)^{n}\frac{x^{2n}}{n!} - \left[ \frac{(-x^{2} - v)^{n}}{n!}e^{v}  \right] x^{2}
> \end{align}
> $$
> Si quisiera que $\left| R_{n+1}(x) \right| < 0.01$ tomo
> $$
> \left|\frac{(-x^{2} - v)^{n}}{n!} e^{v} \, x^{2}\right| \text{ en donde } v \in [-x^{2}, 0]
> $$
> $$
> = \frac{(x^{2}+v)^{n} e^{v} x^{2}}{n!} \leq \frac{(x^{2}+v)^{n} x^{2}}{n!}
> $$
> pues $x^{2} + v \geq 0$ y $e^{v} \leq 1$ (ya que $v \leq 0$).
> Como el intervalo de integración es de $0$ y $1$, y $v \leq 0$, podemos acotar:
> $$
> \frac{(x^{2}+v)^{n} x^{2}}{n!} \leq \frac{x^{2n+2}}{n!} \leq \frac{1}{n!} < 0.01 \iff 100 < n!
> $$
> Y lo último se cumple para  $n = 5$ ($5! = 120$). Así, aproximamos
> $$
> \begin{align}
> \int_{0}^{1} e^{-x^{2}} \, dx &\approx \int_{0}^{1} \left( 1 - x^{2} + \frac{x^{4}}{2!} - \frac{x^{6}}{3!} + \frac{x^{8}}{4!} - \frac{x^{10}}{5!} \right) dx \\[0.5em]
> &= 1 - \frac{1}{3} + \frac{1}{10} - \frac{1}{42} + \frac{1}{216} - \frac{1}{1320} \tag{T.F.C.} \\[0.5em]
> &\approx \boxed{0.7467}
> \end{align}
> $$
> Y bueno, ya lo tenemos. (El valor real es $\approx 0.74682$, el error es $< 0.01$ como queríamos.)
