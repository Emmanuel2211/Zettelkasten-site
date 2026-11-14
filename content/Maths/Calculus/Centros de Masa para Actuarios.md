---
modified: 2026-11-13T23:34:20Z
title: "Centros de Masa (Actuarios)"
publish: true
type: zettel
date: "2026-10-29"
status: seed
aliases:
tags:
 - calculus
cssclasses: 
 - romana
---
Dado un vector de puntos $\{ x_{1},\dots,x_{n} \}$ con vector asociado de masas $\{ m_{1},\dots,m_{n} \}$ se definió el momento de masas (respecto al origen) por: $\displaystyle \sum_{i=1}^{n} m_{i}x_{i}$

> [!observation]+ **Observación.**
>
> Si $\displaystyle m_{i} = \frac{1}{n}\  \ \forall i, \ \ \sum_{i=1}^{n} m_{i}x_{i} = \frac{1}{n}\sum_{i=1}^{n} x_{i}$
> Esto no es más que un **promedio** (aritmético); en general, $\bar{x}$ (abajo) es un **promedio ponderado**.
> Notemos que en este caso $\sum_{i=1}^{n} m_{i} = 1$, por lo que el momento y el centro de masa coinciden.

También definimos al centro de masa (o centroide, si las masas son iguales) como $\displaystyle \bar{x} = \frac{\displaystyle \sum_{i=1}^{n} m_{i}x_{i}}{\sum_{i=1}^{n} m_{i}}$

> [!observation]+ **Observación.**
>
> $$
> \bar{x} = \sum_{i=1}^{n} \frac{m_{i}}{\displaystyle \sum_{k=1}^{n} m_{k}}\, x_{i} = \sum_{i=1}^{n} \mu _{i} x_{i}, \qquad \mu_{i} := \frac{m_{i}}{\displaystyle \sum_{k=1}^{n} m_{k}}
> $$
> en donde $\displaystyle \sum_{i=1}^{n} \mu_{i} = \sum_{i=1}^{n} \frac{m_{i}}{\displaystyle \sum_{k=1}^{n} m_{k}} = \frac{1}{\displaystyle \sum_{k=1}^{n} m_{k}} \cdot  \sum_{i=1}^{n} m_{i} = 1$
> Esto es como "una normalización de masas".

### Teoría de la Probabilidad
Sea $\mathcal{E}$ un experimento que tiene por posibles resultados $\{ x_{1},x_{2},\dots,x_{n} \}$ cada uno de ellos con probabilidad de ocurrencia $\{ p_{1},p_{2},\dots,p_{n} \}$. Si $f: \mathbb{R}\to \mathbb{R}^{+} \cup \{ 0 \}$ es tal que
$\displaystyle f(x) = \begin{cases} p_{i} & x = x_{i} \\ 0  & \text{ o.c. }\end{cases}$ y $\displaystyle \sum_{k=1}^{n} f(x_{k}) = 1$ entonces a $f$ se le conoce como **función de masa de probabilidad**.

> [!theorem] **Definición.** (Primer Momento)
>
> Dado $X = \{ x_{1},\dots,x_{n} \}$ y $P = \{ p_{1},\dots, p_{n} \}$ se define el **primer momento** como
> $$
> \operatorname{E}[X]  = \sum_{i=1}^{n} x_{i}f(x_{i})
> $$
> en proba se le llama **esperanza**.

> [!observation]+ **Observación.**
>
> Como $\sum p_{i} = 1$, las probabilidades son "masas normalizadas" ($\mu_{i} = p_{i}$), así que la esperanza **es** el centro de masa: $\operatorname{E}[X] = \bar{x}$. En el caso continuo, $f$ hace el papel de una densidad de masa y $\operatorname{E}[X] = \int x f(x)\,dx$ es el centro de masa de una varilla con esa densidad.

> [!example]- Ejemplo.
>
> Si tenemos un número infinito numerable de resultados, $X = \{ x_{1},x_{2},\dots, \}$ con probabilidades correspondientes $P = \{ p_{1},p_{2},\dots \}$, la función de masa de proba asociada cumple
> $$
> \sum_{x \in \operatorname{supp}(f)} f(x) = 1
> $$
> El concepto de esperanza es $\displaystyle \operatorname{E}[X]  = \sum_{x \in \operatorname{supp}(f)}x f(x)$, siempre que $\displaystyle \sum_{x \in \operatorname{supp}(f)} |x| f(x) < \infty$, donde
> $$
> \operatorname{supp}(f) = \{ x \in \operatorname{Dom}(f) \mid f(x)\neq 0 \}
> $$


> [!theorem] **Definición.** (Función de Probabilidad Acumulada)
>
> La **función de probabilidad acumulada** es
> $$
> F(x) = \sum_{\substack{t \in \operatorname{supp}(f) \\ t \leq x}} f(t)
> $$
> donde $F: \mathbb{R}\to [0,1]$ y se cumple:
> - No decreciente.
> - $\lim_{x \to \infty} F(x) = 1$
> - $\lim_{x \to -\infty} F(x) = 0$
> - Continua por la derecha, $\displaystyle \lim_{x \to x_{0}^{+}} F(x) = F(x_{0})$


#### Generalizando al caso continuo

Supongamos que tenemos un experimento que mide el tiempo de falla de un producto. La función que generaliza la *función de masa de probabilidad*, se llama **función de densidad** y cumple:
1. $f(x) \geq  0$
2. $\displaystyle \int_{\mathbb{R}} f(x) \, dx =1$

Similarmente, se generaliza la función de probabilidad acumulada a **función de distribución**, $F: \mathbb{R}\to [0,1]$ que cumple las propiedades de una función de distribución, se define como
$$
F(x) = \int_{-\infty}^{x} f(t) \, dt
$$

> [!observation]+ **Observación.**
>
> 1. Esta relación es muy importante, pues por T.F.C., $\displaystyle \frac{d}{dx}F(x) = f(x)$ (en los puntos de continuidad de $f$)
> 2. Suponiendo que $x > y$, por aditividad de la integral,
> $$
> F(x) - F(y) = \int_{-\infty}^{x} f(t) \, dt - \int_{-\infty}^{y} f(t) \, dt = \int_{y}^{x} f(t) \, dt
> $$
> es decir, $F(x) - F(y) = \mathbb{P}(y < X \leq x)$.


> [!example]- Ejemplo.
>
> $\square$ Supongamos que mediante pruebas experimentales se ha determinado que el tiempo de falla de un foco está dado por $\displaystyle f(t) = At^{2}(100-t)^{2} \cdot \mathbb{1}_{[0,100]}(t)$.
> - ¿Cuánto vale $A$ para que $f$ sea una densidad? $\displaystyle \int_{\mathbb{R}} f(x) \, dx = 1$
> esto es, $\displaystyle \int_{0}^{100} At^{2}(100-t)^{2} \, dt = 1$, ya, desarrollamos el binomio al cuadrado, multiplicamos por $t^{2}$, sacamos $A$, separamos la integral y evaluamos en los límites de integración.
> $$
> \begin{align}
> \int_{0}^{100} At^{2}(100-t)^{2} \, dt &= A \int_{0}^{100} (10000t^{2} - 200t^{3} + t^{4}) \, dt \tag{binomio} \\[0.5em]
> &= A \left[ \frac{10000t^{3}}{3} - 50t^{4} + \frac{t^{5}}{5} \right]_{0}^{100} \tag{T.F.C.} \\[0.5em]
> &= A \cdot \frac{10^{9}}{3} = 1 \implies \boxed{A = 3 \times 10^{-9}}
> \end{align}
> $$
>
> Así, encontramos $A$ para que $f$ satisfaga las propiedades de función de densidad.
>
> $\square$ Calcula la proporción de focos que fallan entre $t_{1}$ y $t_{2}$: $\displaystyle \int_{t_{1}}^{t_{2}} f(t) \, dt = F(t_{2}) - F(t_{1})$ (por la Observación 2).
>
> $\square$ Calcula el tiempo esperado de falla del foco. $\displaystyle \operatorname{E}[X] = \int_{\mathbb{R}} xf(x) \, dx$
> Como $f$ es simétrica respecto a $t = 50$, $\boxed{\operatorname{E}[X] = 50}$.
