---
modified: 2026-10-30T18:12:38Z
title: "Método de Simpson"
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
Tomemos una partición equidistante con su refinamiento de puntos medios como lo hicimos en la *aproximación de puntos medios*.
$$
\mathcal{P} = \{ a , a + \frac{b-a}{n} , a + \frac{2(b-a)}{n} ,\dots,b \}
$$
con cada punto denotado de forma correspondiente: $\mathcal{P} = \{ x_{0},x_{2},\dots,x_{2n} \}$, y su refinamiento,
$$
\mathcal{P}' = \{ a, a+ \frac{b-a}{2n} , a + \frac{b-a}{n} , \dots, b \}
$$
denotado correspondientemente, $P' = \{ x_{0},x_{1},x_{2},\dots,x_{2n} \}$.

El método de Simpson consiste de aproximar a $f$ por *parábolas*.

Sea $\bar{f}(x) = A x^{2} + Bx + C$ (*si es que existe*) de tal forma que, $\bar{f}(x_{0}) = f(x_{0}), \bar{f}(x_{1}) = f(x_{1}), \bar{f}(x_{2})= f(x_{2})$ y
$$
\begin{matrix}
  \bar{f}(x_{0}) &= x_{0}^{2} A + x_{0}B + C\\
  \bar{f}(x_{1}) &= x_{1}^{2} A + x_{1}B +C \\
  \bar{f}(x_{2}) &= x_{2}^{2} A + x_{2}B +C
\end{matrix} = \underset{\text{ Matriz de Vandermonde }}{\begin{bmatrix}
  x_{0}^{2} & x_{0} & 1 \\
  x_{1}^{2} & x_{1} & 1 \\
  x_{2}^{2} & x_{2} & 1
\end{bmatrix} \begin{bmatrix}
  A\\
  B\\
  C
\end{bmatrix}}
$$

donde $A,B,C$ son únicos. Tomemos $x = x- x_{1} + x_{1}$
$$
\begin{align}
  \bar{f}(x) &= A (x- x_{1} + x_{1}) ^{2} + B(x-x_{1}+x_{1}) + C\\[0.5em]
   &= A ((x-x_{1})^{2} + 2 (x-x_{1})x_{1} + x^{2}_{1}) + B(x-x_{1}) + Bx_{1} + C \\[0.5em]
    &= \underbrace{A}_{A'}(x -x_{1})^{2} + (x-x_{1})\underbrace{[2Ax_{1} + B]}_{B'} + \underbrace{Ax_{1}^{2} + Bx_{1} + C}_{C'}
\end{align}
$$
Hay que encontrar cuanto valen tales constantes, para ello
1. $\bar{f}(x_{1}) = c'$
2. $\bar{f}(x_{0}) = A'(x_{0}-x_{1})^{2} + B'(x_{0} - x_{1}) + C' = A'(x_{1}-x_{0})^{2} - B'(x_{1}-x_{0}) + C'$
3. $\bar{f}(x_{2}) = A'(x_{2}-x_{1})^{2} +B'(x_{2}-x_{1}) + C'$

Entonces,
$$
\begin{align}
  \bar{f}(x_{0}) + \bar{f}(x_{2}) &= A'(x_{1}-x_{0})^{2} + A'(x_{2}-x_{1})^{2} + 2C'\\[0.5em]
   &= 2A'\left(\frac{b-a}{2n}  \right)^{2} + 2\underbrace{C'}_{\bar{f}(x_{1})}
\end{align}
$$
Así, $\displaystyle A' = \frac{\bar{f}(x_{0})+ \bar{f}(x_{2}) - \bar{2f}(x_{1})}{2\left(\frac{b-a}{2n}  \right)^{2}}$.
Por otro lado, 
$$
\displaystyle \int_{x_{0}}^{x_{2}} \bar{f}(x) \, dx - \int_{x_{0}}^{x_{2}} A'(x-x_{1})^{2} + B' (x-x_{1}) + C' \, dx = \left[\frac{A'(x-x_{1})^{3}}{3} + \frac{B'(x-x_{1})^{2}}{2} + Cx \right]_{x_{0}}^{x_{2}}
$$

Lo cual es igual a
$$
\begin{align}
&= \frac{A'(x_{2}-x_{1})^{3}}{3} + \frac{B'(x_{2}-x_{1})^{2}}{2} + C'x_{2} - \left[ \frac{A'(x_{0}-x_{1})^{3}}{3} + \frac{B'(x_{0}-x_{1})^{2}}{2} + C'x_{0}  \right]\\[0.5em]
 &= \frac{A'(x_{2}-x_{1})^{3}}{3} + \frac{B'(x_{2}-x_{1})^{2}}{2} + C'x_{2} + \frac{A'(x_{1}-x_{0})^{3}}{3} - \frac{B'(x_{1}-x_{0})^{2}}{2} - C'x_{0}\\[0.5em]
  &= \frac{2A'(x_{2}-x_{1})^{3}}{3} + C'(x_{2}-x_{0}) = \frac{2A'\left(\frac{b-a}{2n}  \right)^{3}}{3} + C'\left(\frac{b-a}{n}  \right) \\[0.5em]
   &= \frac{2}{3}\left[ \frac{\bar{f}(x_{0}) + \bar{f}(x_{2}) - 2\bar{f}(x_{1})}{2 \left(\frac{b-a}{2n}  \right)^{2}}  \right] \left(\frac{b-a}{2n}  \right)^{3} + \bar{f}(x_{1})\left(\frac{b-a}{n}  \right) \\[0.5em]
    &= \left(\frac{b-a}{2n}  \right) \left[ \frac{\bar{f}(x_{0}) + \bar{f}(x_{2}) - \bar{2f}(x_{1})}{3} + 2\bar{f}(x_{1})  \right]\\[0.5em]
     &= \left(\frac{b-a}{2n}  \right) \left[ \frac{\bar{f}(x_{0}) + \bar{f}(x_{2}) + \bar{4f}(x_{1})}{3}  \right] \\[0.5em]
      &= \left(\frac{b-a}{2n}  \right) \left(\frac{1}{3}  \right) \left( f(x_{0}) + 4 f(x_{1}) + f(x_{2})  \right)
\end{align}
$$

De esta manera la aproximación de Simpson es:
$$
\int_{a}^{b} f(x) \, dx = \boxed{\left( \frac{b-a}{2n}\left(\frac{1}{3}\left[ \Gamma  \right]  \right)  \right)}
$$
donde $\displaystyle \Gamma = (f(x_{0})+ 4 f(x_{1}) + f(x_{2})) + (f(x_{2})+ 4f(x_{3})) + f(x_{4})) + \dots + (f(x_{2(n-1)}) + 4f(x_{2n-1}) + f(x_{2n}))$



