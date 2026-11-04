---
modified: 2026-10-29T18:18:22Z
title: "Centros de Masa (Actuarios)"
publish: true
type: zettel
date: "2026-10-29"
status: undone
aliases:
tags:
 - calculus
cssclasses: 
 - romana
---
Dado un vector de puntos $\{ x_{1},\dots,x_{n} \}$ con vector asociado de masas $\{ m_{1},\dots,m_{n} \}$ se definio el momento de masas (respecto al origen) por: $\displaystyle \sum_{i=1}^{n} m_{i}x_{i}$

> [!observation]+ **Observación.**
> Si $\displaystyle m_{i} = \frac{1}{n}\  \ \forall i, \ \ \sum_{i=1}^{n} m_{i}x_{i} = \frac{1}{n}\sum_{i=1}^{n} x_{i}$
> Esto no es más que un **promedio ponderado**.

También definimos al centroide como $\displaystyle \bar{x} = \frac{\displaystyle \sum_{i=1}^{n} m_{i}x_{i}}{\sum_{i=1}^{n} m_{i}}$

> [!observation]+ **Observación.**
> $$
> \bar{x} = \sum_{i=1}^{n} \frac{m_{i}}{\displaystyle \sum_{k=1}^{n} m_{k}} \equiv \sum_{i=1}^{n} \mu _{i} x_{i}
> $$
> en donde $\displaystyle \sum_{i=1}^{n} \mu_{i} = \sum_{i=1}^{n} \frac{m_{i}}{\displaystyle \sum_{k=1}^{n} m_{k}} = \frac{1}{\displaystyle \sum_{i=1}^{n} m_{k}} \cdot  \sum_{i=1}^{n} m_{i} = 1$
> Esto es como "una normalización de masas".

### Teoría de la Probabilidad
Sea $\mathcal{E}$ un experimento que tiene por posibles resultados $\{ x_{1},x_{2},\dots,x_{n} \}$ cada uno de ellos con probablidad de ocurrencia $\{ p_{1},p_{2},\dots,p_{n} \}$. Si $f: \mathbb{R}\to \mathbb{R}^{+} \cup \{ 0 \}$ es tal que
$\displaystyle f(x) = \begin{cases} p_{i} & x = x_{i} \\ 0  & \text{ o.c. }\end{cases}$ y $\displaystyle \sum_{k=1}^{n} f(x_{k}) = 1$ entonces a $f$ se le conoce como **función de masa de probablidad**.

> [!theorem] **Definición.** (Primero Momento)
> Dado $X = \{ x_{1},\dots,x_{n} \}$ y $P = \{ p_{1},\dots, p_{n} \}$ se define el **primero momento** como
> $$
> \operatorname{E}  = \sum_{i=1}^{n} x_{i}f(x_{i})
> $$
> en proba se le llama **esperanza**.

> [!example]+ Ejemplo.
> Si tenemos un número infinito de resultados, $X = \{ x_{1},x_{2},\dots, \}$ con probablidades correspondientes $\mathbb{P} = \{ p_{1},p_{2},\dots \}$, la función de masa de proba asociada cumple
> $$
> \sum_{x \in \operatorname{supp}(f)} f(x) = 1
> $$
> El concepto de esperanza es $\displaystyle \operatorname{E}  = \sum_{x \in \operatorname{supp}(f)}x f(x)$ donde
> $$
> \operatorname{supp}(f) = \{ x \in \operatorname{Dom} \{f\} \mid f(x)\neq 0 \}
> $$


> [!theorem] **Definición.** (Función de Probabilidad Acumulada)
> La **función de probabilidad acumulada** es
> $$
> F(x) = \sum_{x \in \operatorname{supp}(f)}^{\lfloor x\rfloor } f(x)
> $$
> donde $F: \mathbb{R}\to \mathbb{R}^{+} \cup \{ 0 \}$ y se cumple:
> - No decreciente.
> - $\lim_{x \to \infty} F(x) = 1$
> - $\lim_{x \to -\infty} F(x) = 0$
> - Continua por la derecha, $\displaystyle \lim_{x \to x_{0}^{+}} F(x) = F(x_{0})$


#### Generalizando al caso continuo

Supongamos que tenemos un experimento que mide el tiempo de falla de un producto. La función que generaliza la *función de masa de probabilidad*, se llama **función de densidad** y cumple:
1. $f(x) \geq  0$
2. $\displaystyle \int_{\mathbb{R}} f(x) =1$

Similarmente, se generaliza la función de masa acumulada a **función de dsitribución**, $F: \mathbb{R}\to \mathbb{R}^{+}\cup \{ 0 \}$ que cumple las propiedades de una función de distribución, se define como
$$
F(x) = \int_{-\infty}^{x} f(t) \, dt
$$

> [!observation]+ **Observación.**
> 1. Esta relación es muy importante, pues por TFC, $\displaystyle \frac{d}{dx}F(x) = f(x)$
> 2. Suponiendo que $x > y$, por TFC,
> $$
> F(x) - F(y) = \int_{y}^{x} f(t) \, dt
> $$


> [!example]+ Ejemplo.
> $\square$ Supongamos que mediante pruebas experimentales se ha determinado que el tiempo de falla de un foco está dado por $\displaystyle f(t) = At^{2}(100-t)^{2} \cdot \mathbb{1}_{[0,100]}(x)$.
> - ¿Cuánto vale $A$ para que $f$ sea una densidad? $\displaystyle \int_{\mathbb{R}} f(x) \, dx = 1$
> esto es, $\displaystyle \int_{0}^{100} At^{2}(100-t)^{2} \, dt = 1$, ya, desarrollamos el binomio al cuadrado, multiplicamos por $t^{2}$, sacamos $a$, serparamos la integral y evaluamos en los límites de integración.
>
> Así, encontramos $A$ para que $f$ satisfaga las propiedades de función de densidad.
>
> $\square$ Calcula la proporción de focos que fallan entre $t_{1}$ y $t_{2}$: $\displaystyle \int_{t_{1}}^{t_{2}} f(t) \, dt$
>
> $\square$ Calcula el tiempo esperado de falla del foco. $\displaystyle \operatorname{E} = \int_{\mathbb{R}} xf(x) \, dx$

