---
modified: 2026-11-13T23:34:20Z
title: "Método de los Trapecios"
publish: true
type: zettel
date: "2026-10-30"
status: seed
aliases:
tags:
 - calculus
cssclasses:
 - romana
---
Recordatorio: Área del trapecio es $\displaystyle \frac{(B+b)h}{2}$, donde $B$ es la base mayor y $b$, la base menor.

Sea $f:[a,b]\to \mathbb{R}$ continua y sea $\mathcal{P}$ una partición de $[a,b]$ equidistante,
$$
\mathcal{P} = \left\{ a, a+ \frac{b-a}{n} , a+  \frac{2(b-a)}{n},  \dots, b \right\}
$$
Nuevamente, podemos verlo simplemente como $\mathcal{P} = \{ x_{0},x_{1},\dots,x_{n} \}$, con $x_{k+1} - x_{k} = \frac{b-a}{n}$.

El área de los trapecios es (las "bases" son $f(x_{k})$ y $f(x_{k+1})$, y la "altura" es $x_{k+1}-x_{k}$)

$$
\begin{align}
A_{T_{1}} &: \frac{[f(x_{0}) + f(x_{1})] (x_{1}-x_{0})}{2} = \frac{(f(x_{0}) + f(x_{1}))(b-a)}{2n}\\[0.5em]
A_{T_{2}} &: \frac{(f(x_{1})+f(x_{2}))(b-a)}{2n}
\end{align}
$$

Observamos que siempre se repite la imagen de uno de los puntos implicados en el área de cada trapecio: cada punto interior $x_{1},\dots,x_{n-1}$ aparece en dos trapecios. De esta manera,
$$
\begin{align}
\int_{a}^{b} f(x) \, dx &\approx \boxed{\sum_{k=0}^{n-1} \left(\frac{b-a}{2n}  \right) (f(x_{k}) + f(x_{k+1}))}\\[0.5em]
 &= \left(\frac{b-a}{2n} \left[ f(a) + 2 f(x_{1}) + 2f(x_{2}) + \dots + 2f(x_{n-1}) + f(b) \right]  \right)
\end{align}
$$

> [!observation]+ **Observación.**
>
> La regla de los trapecios es el promedio de las [[Sumas de Riemann|sumas de Riemann]] por la izquierda y por la derecha:
> $$
> \sum_{k=0}^{n-1} \frac{f(x_{k}) + f(x_{k+1})}{2} \cdot \frac{b-a}{n}
> $$

> [!Info]- **Nota!**
>
> Útil para funciones que no se vean monótonas con muchos chipotes en la gráfica de la función.

Ver también [[Metodos numericos de Integracion]].
