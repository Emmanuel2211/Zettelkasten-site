---
modified: 2026-11-09T21:54:18Z
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
Tomemos una partición equidistante con su refinamiento de puntos medios como lo hicimos en la *aproximación de puntos medios* (ver [[Metodos numericos de Integracion]]).
$$
\mathcal{P} = \{ a , a + \frac{b-a}{n} , a + \frac{2(b-a)}{n} ,\dots,b \}
$$
con cada punto denotado de forma correspondiente: $\mathcal{P} = \{ x_{0},x_{2},\dots,x_{2n} \}$, y su refinamiento,
$$
\mathcal{P}' = \{ a, a+ \frac{b-a}{2n} , a + \frac{b-a}{n} , \dots, b \}
$$
denotado correspondientemente, $\mathcal{P}' = \{ x_{0},x_{1},x_{2},\dots,x_{2n} \}$, con $x_{k+1} - x_{k} = \frac{b-a}{2n}$.

El método de Simpson consiste en aproximar a $f$ por *parábolas*.

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

donde $A,B,C$ existen y son únicos, pues como $x_{0},x_{1},x_{2}$ son distintos, el determinante de Vandermonde $(x_{0}-x_{1})(x_{0}-x_{2})(x_{1}-x_{2}) \neq 0$ y la matriz es invertible. Tomemos $x = x- x_{1} + x_{1}$
$$
\begin{align}
  \bar{f}(x) &= A (x- x_{1} + x_{1}) ^{2} + B(x-x_{1}+x_{1}) + C\\[0.5em]
   &= A ((x-x_{1})^{2} + 2 (x-x_{1})x_{1} + x^{2}_{1}) + B(x-x_{1}) + Bx_{1} + C \tag{binomio} \\[0.5em]
    &= \underbrace{A}_{A'}(x -x_{1})^{2} + (x-x_{1})\underbrace{[2Ax_{1} + B]}_{B'} + \underbrace{Ax_{1}^{2} + Bx_{1} + C}_{C'}
\end{align}
$$
Hay que encontrar cuánto valen tales constantes, para ello
1. $\bar{f}(x_{1}) = C'$
2. $\bar{f}(x_{0}) = A'(x_{0}-x_{1})^{2} + B'(x_{0} - x_{1}) + C' = A'(x_{1}-x_{0})^{2} - B'(x_{1}-x_{0}) + C'$
3. $\bar{f}(x_{2}) = A'(x_{2}-x_{1})^{2} +B'(x_{2}-x_{1}) + C'$

Entonces, como $x_{2}-x_{1} = x_{1}-x_{0} = \frac{b-a}{2n}$, los términos con $B'$ se cancelan:
$$
\begin{align}
  \bar{f}(x_{0}) + \bar{f}(x_{2}) &= A'(x_{1}-x_{0})^{2} + A'(x_{2}-x_{1})^{2} + 2C'\\[0.5em]
   &= 2A'\left(\frac{b-a}{2n}  \right)^{2} + 2\underbrace{C'}_{\bar{f}(x_{1})}
\end{align}
$$
Así, $\displaystyle A' = \frac{\bar{f}(x_{0})+ \bar{f}(x_{2}) - 2\bar{f}(x_{1})}{2\left(\frac{b-a}{2n}  \right)^{2}}$.
Por otro lado, 
$$
\displaystyle \int_{x_{0}}^{x_{2}} \bar{f}(x) \, dx = \int_{x_{0}}^{x_{2}} \left( A'(x-x_{1})^{2} + B' (x-x_{1}) + C' \right) dx = \left[\frac{A'(x-x_{1})^{3}}{3} + \frac{B'(x-x_{1})^{2}}{2} + C'x \right]_{x_{0}}^{x_{2}}
$$

Lo cual es igual a
$$
\begin{align}
&= \frac{A'(x_{2}-x_{1})^{3}}{3} + \frac{B'(x_{2}-x_{1})^{2}}{2} + C'x_{2} - \left[ \frac{A'(x_{0}-x_{1})^{3}}{3} + \frac{B'(x_{0}-x_{1})^{2}}{2} + C'x_{0}  \right] && \text{T.F.C.} \\[0.5em]
 &= \frac{A'(x_{2}-x_{1})^{3}}{3} + \frac{B'(x_{2}-x_{1})^{2}}{2} + C'x_{2} + \frac{A'(x_{1}-x_{0})^{3}}{3} - \frac{B'(x_{1}-x_{0})^{2}}{2} - C'x_{0} && (x_{0}-x_{1})^{3} = -(x_{1}-x_{0})^{3} \\[0.5em]
  &= \frac{2A'(x_{2}-x_{1})^{3}}{3} + C'(x_{2}-x_{0}) = \frac{2A'\left(\frac{b-a}{2n}  \right)^{3}}{3} + C'\left(\frac{b-a}{n}  \right) && x_{2}-x_{1} = x_{1}-x_{0} \\[0.5em]
   &= \frac{2}{3}\left[ \frac{\bar{f}(x_{0}) + \bar{f}(x_{2}) - 2\bar{f}(x_{1})}{2 \left(\frac{b-a}{2n}  \right)^{2}}  \right] \left(\frac{b-a}{2n}  \right)^{3} + \bar{f}(x_{1})\left(\frac{b-a}{n}  \right) && \text{sust. } A', C' \\[0.5em]
    &= \left(\frac{b-a}{2n}  \right) \left[ \frac{\bar{f}(x_{0}) + \bar{f}(x_{2}) - 2\bar{f}(x_{1})}{3} + 2\bar{f}(x_{1})  \right] && \text{factor. } \tfrac{b-a}{2n} \\[0.5em]
     &= \left(\frac{b-a}{2n}  \right) \left[ \frac{\bar{f}(x_{0}) + \bar{f}(x_{2}) + 4\bar{f}(x_{1})}{3}  \right] && \text{común denom.} \\[0.5em]
      &= \left(\frac{b-a}{2n}  \right) \left(\frac{1}{3}  \right) \left( f(x_{0}) + 4 f(x_{1}) + f(x_{2})  \right) && \bar{f}(x_{i}) = f(x_{i})
\end{align}
$$

Aplicando lo anterior en cada par de subintervalos $[x_{2k}, x_{2k+2}]$, $k = 0,\dots,n-1$, y sumando, la aproximación de Simpson es:
$$
\int_{a}^{b} f(x) \, dx \approx \boxed{\left( \frac{b-a}{2n}\left(\frac{1}{3}\left[ \Gamma  \right]  \right)  \right)}
$$
donde $\displaystyle \Gamma = (f(x_{0})+ 4 f(x_{1}) + f(x_{2})) + (f(x_{2})+ 4f(x_{3}) + f(x_{4})) + \dots + (f(x_{2(n-1)}) + 4f(x_{2n-1}) + f(x_{2n}))$

> [!observation]+ **Observación.**
>
> Agrupando, los índices impares llevan $4$ y los pares interiores llevan $2$ (aparecen en dos paréntesis):
> $$
> \Gamma = f(x_{0}) + 4\sum_{k=0}^{n-1} f(x_{2k+1}) + 2\sum_{k=1}^{n-1} f(x_{2k}) + f(x_{2n})
> $$



