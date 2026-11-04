---
modified: 2026-10-30T18:14:34Z
title: "Método de los Trapecios"
publish: true
type: zettel
date: "2026-10-30"
status: undone
aliases:
tags:
 - calculus
cssclasses:
 - romana
---
Recordatorio: Área del trapcio es $\displaystyle \frac{(B+b)h}{2}$, donde $B$ es la base mayor y $b$, la base menor.

Sea $\mathcal{P}$ una partición de $[a,b]$ equidistante,
$$
\mathcal{P} = \left\{ a, a+ \frac{b-a}{n} , a+  \frac{2(b-a)}{n},  \dots, b \right\}
$$
Nuevamente, pordemos verlo simplemente como $\mathcal{P} = \{ x_{0},x_{1},\dots,x_{n} \}$.

El área de los trapecios es

$$
\begin{align}
A_{T_{1}} &: \frac{[f(x_{1}) + f(x_{2})] (x_{2}-x_{1})}{2} = \frac{(f(x_{2}) - f(x_{1}))(b-a)}{2n}\\[0.5em]
A_{T_{2}} &: \frac{(f(x_{2})+f(x_{3}))(b-a)}{2n}
\end{align}
$$

Observamos que siempre se repite la imagen de uno de los puntos implicados en el área de cada trapecio. De esta manera,
$$
\begin{align}
\int_{a}^{b} f(x) \, dx &\approx \boxed{\sum_{k=0}^{n-1} \left(\frac{b-a}{2n}  \right) (f(x_{k}) + f(x_{k+1}))}\\[0.5em]
 &= \left(\frac{b-a}{2n} \left[ f(a) + 2 f(x_{1}) + 2f(x_{2}) + \dots + 2f(x_{n-1}) + f(b) \right]  \right)
\end{align}
$$

> [!Info]+ **Nota!**
> Util para funciones que no se vean monotnoas con muchos chipotes en la gráfica de la función.
