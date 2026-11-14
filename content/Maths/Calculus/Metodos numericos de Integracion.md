---
modified: 2026-11-13T23:34:20Z
title: "Métodos numéricos"
publish: true
type: zettel
date: "2026-09-01"
status: seed
aliases:
tags:
 - calculus
cssclasses:
 - romana
---
Algunas funciones no tienen antiderivada explícita (en términos de funciones elementales) y no se puede aplicar T.F.C. 2.
Por ejemplo, algunas integrales "feas":
$$
\begin{align}
\int e^{-x^{2}} \, dx, \quad \int \frac{\sin(x)}{x} \, dx, \quad \int \frac{\cos(x)}{x} \, dx, \quad \int \frac{1}{\log \left(x\right)} \, dx, \quad \text{ integrales Elípticas }\dots
\end{align}
$$

Veamos un ejemplo de integrales elípticas.
El perímetro de una Elipse está dado por $\displaystyle \int_{0}^{2\pi} \sqrt{a^{2}\cos^{2}(x) + b^{2}\sin^{2}(x)} \, dx$ (ver [[Funciones Uniparametricas]])
Suponiendo que $a>b$,
$$
\begin{align}
  \int_{0}^{2\pi}  \sqrt{a^{2}\cos^{2}(x) + b^{2}- b^{2}\cos^{2}(x)}\, dx &= \int_{0}^{2\pi} \sqrt{b^{2} + (a^{2} - b^{2})\cos^{2}(x)} \, dx \tag{$\sin^{2} = 1 - \cos^{2}$}
\end{align}
$$
Entonces tenemos que aproximar, podemos hacerlo de las siguientes formas:

- Sumas inferiores, sumas superiores (Sumas de Darboux). Esta aproximación no siempre es la mejor.
$$
\sum_{i=1}^{n} \min_{[x_{i-1},x_{i}]} f \cdot (x_{i}-x_{i-1}) \quad \text{ y } \quad \sum_{i=1}^{n} \max_{[x_{i-1},x_{i}]} f \cdot (x_{i}-x_{i-1})
$$
(con $f$ continua; en general se usan $\inf$ y $\sup$, ver [[Suma Inferior y Superior]]).

- [[Sumas de Riemann]], la generalización de las anteriores.
$$
\sum_{i=1}^{n} f(y_{i})(x_{i}-x_{i-1}) \quad y_{i} \in  [x_{i-1}, x_{i}]
$$
    - A partir de sumas de Riemann vemos: Aproximación por puntos medios.


### Aproximación por puntos medios

Considérese una partición equidistante dada por $\mathcal{P} = \{ a,a+\frac{b-a}{n}, a+\frac{2(b-a)}{n}, \dots, b \}$
Para estos puntos vamos a considerar sus puntos medios y esto va llevar a un refinamiento de $\mathcal{P}$ de la siguiente manera:
$$
\mathcal{P}' = \left\{ a , a+ \frac{1}{2}\left(\frac{b-a}{n}  \right) , a + \frac{b-a}{n}, \dots, b  \right\}
$$
Podemos nombrar a cada punto de mi partición como $\{ a = x_{0},x_{1},\dots,x_{2n} =b \}$ en donde observamos que los índices pares son los puntos de nuestra partición original $\mathcal{P}$, y los impares, los adicionales de refinamiento $\mathcal{P}'$.
Observamos que $\displaystyle x_{k+1} - x_{k} = \frac{b-a}{2n} \ \  \forall k$.
De esta forma, en la suma de Riemann evaluamos $f(x)$ en el punto medio ($x$ *impares*), y cada subintervalo de $\mathcal{P}$ mide $\frac{b-a}{n}$.
$$
\int_{a}^{b} f(x) \, dx \approx \sum_{k=0}^{n-1} \left(\frac{b-a}{n}  \right) f(x_{2k+1}) = \boxed{\left(\frac{b-a}{n}  \right) \cdot  \sum_{k=0}^{n-1} f(x_{2k+1})
}
$$


> [!Info]- **Nota!**
>
> Es "buena" aproximación para funciones monótonas (tomando $n$ "grande").
> En métodos numéricos lo que nos interesa es la eficiencia.

Otros métodos: [[Metodo de los Trapecios]], [[Metodo de Simpson]], [[Metodo de Taylor]].

