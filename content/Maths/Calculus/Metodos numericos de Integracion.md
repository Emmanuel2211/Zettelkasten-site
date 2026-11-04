---
modified: 2026-10-30T18:13:05Z
title: "Métodos numéricos"
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
Algunas funciones no tinen antiderivada explicita y no se puede aplicar TFC 2.
Poe ejemplo, algunas integrales "feas":
$$
\begin{align}
\int e^{-x^{2}} \, dx, \quad \int \frac{\sin(x)}{x} \, dx, \quad \int \frac{\cos(x)}{x} \, dx, \quad \int \frac{1}{\log \left(x\right)} \, dx, \quad \text{ integrales Elipticas }\dots
\end{align}
$$

Veamos un ejemplo de integrales elípticas.
El perímetro de una Elipse está dado por $\displaystyle \int_{0}^{2\pi} \sqrt{a^{2}\cos^{2}(x) + b^{2}\sin^{2}(x)} \, dx$
Suponiendo que $a>b$,
$$
\begin{align}
  \int_{0}^{2\pi}  \sqrt{a^{2}\cos^{2}(x) + b^{2}- b^{2}\sin^{2}(x)}\, dx &= \int_{0}^{2\pi} \sqrt{b^{2} + (a^{2} - b^{2})\cos^{2}(x)} \, dx
\end{align}
$$
Entonces tenemos que aproximar, podemos hacerlo de la siguientes formas:

- Sumas inferiores, sumas superiores (Sumas de Darboux). Está aproximación no siempre es la mejor.
$$
\sum_{i=1}^{n} \min \left\{f\right\}(x_{i}-x_{i-1}) \quad \text{ y } \quad \sum_{i=1}^{n} \max \left\{f\right\} (x_{i}-x_{i-1})
$$

- Sumas de Riemann, la generalización de las anteriores.
$$
\sum_{i=1}^{n} f(y_{i})(x_{i}-x_{i-1}) \quad y_{i} \in  [x_{i-1}, x_{i}]
$$
    - A partir de suamas de Riemann vemos: Aproximación por puntos medios.


### Aproximación por puntos medios

Considerese una partición equitistante dada por $\mathcal{P} = \{ a,a+\frac{b-a}{n}, a+\frac{2(b-a)}{n}, \dots, b \}$
Para estos puntos vamos a considerar sus puntos medios y esto va llevar a un refinamiento de $\mathcal{P}$ de la siguiente manera:
$$
P' = \left\{ a , a+ \frac{1}{2}\left(\frac{b-a}{n}  \right) , a + \frac{b-a}{n}, \dots, b  \right\}
$$
Podemos nombrar a cada punto de mi partición como $\{ a = x_{0},x_{1},\dots,x_{2n} =b \}$ en donde observamos que los indices pares son los puntos de nuestra partición original $\mathcal{P}$, y los impares, los adicionales de refinamiento $\mathcal{P}'$.
Observamos que $\displaystyle x_{k+1} - x_{k} = \frac{b-a}{2n} \ \  \forall k$.
De esta forma, en la suma de Reimann evaluamos $f(x)$ en el punto medio ($x$ *impares*).
$$
\int_{a}^{b} f(x) \, dx \approx \sum_{k=0}^{n-1} \left(\frac{b-a}{n}  \right) f(x_{2k+1}) = \boxed{\left(\frac{b-a}{n}  \right) \cdot  \sum_{k=0}^{n-1} f(x_{2k+1})
}
$$


> [!Info]+ **Nota!**
> Es "buena" aproximación para funciones monótonas (tomando $n$ "grande").
> En metodos númericos lo que nos interesa es la eficiencia.


