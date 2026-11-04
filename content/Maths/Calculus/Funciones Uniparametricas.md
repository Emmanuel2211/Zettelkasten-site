---
modified: 2026-10-29T02:33:20Z
title: "Funciones Uniparamétricas"
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
### Longitud de una curva

Una función uniparamétrica es $f: \mathbb{R}\to \mathbb{R}^{2}$

> [!example]- Ejemplos. 
> 1. Dada $f: [a,b]\to \mathbb{R}$ continua, su gráfica es una curva un paramétrica.
> La gráfica se puede ver mediante: $t \mapsto (t,f(x))$ en $t \in  [a,b]$.
>
>
> Los físicos los conocen como desplazamiento de particulas.
>
> 2. Circuferencia.
> $$
> x^{2}+y^{2} = r^{2} \quad \quad \theta \mapsto (r\cos(\theta), r\sin(\theta)), \  \theta \in  [0,2\pi].
> $$
>
> 3. Elipse centrada en el origen.
> $$
> \frac{x^{2}}{a^{2}} + \frac{y^{2}}{b^{2}} = 1 \quad \quad \theta \mapsto (a\cos(\theta), b\sin(\theta)), \ \theta\in [0,2\pi]
> $$
>
> Veremos la integral elpitica! (una bien fea)



En $\mathbb{R}^{2}$, vamos a trabajar con $f:[a,b]\subseteq \mathbb{R} \to \mathbb{R}^{2}$ continuas, donde $f([a,b]) =\text{curva}$.

- Ejemplos:
$\square$ Dada $F:[a,b]\to \mathbb{R}$ continua, la curva generada por su gráfica, 
$f(x)= (x,F(x))$.
$\square$ $\rho_{r}: [0,2\pi] \to \mathbb{R}^{2}$, $\rho_{r}(\theta) = (r\cos(\theta),r\sin(\theta))$
$\square \ \Gamma:[0,2\pi]\to \mathbb{R}^{2}$, $\Gamma(\theta) = (a\cos(\theta), b\sin(\theta))$

Empezaremos a ver una forma de calcular longitudes.

#### Longitudes de gráficas de funciones.

![[IMG_6980(1).jpeg|center|500]]

Una aproximación a la longitud de la curva será,
$$
\begin{align}
  \sum_{k=0}^{n-1} \sqrt{(x_{k+1}-x_{k})^{2} + (f(x_{k+1})- f(x_{k}))^{2}} &= \sum_{k=0}^{n-1} \sqrt{(x_{k+1}-x_{k})^{2} + \left( 1 + \frac{(f(x_{k+1})- f(x_{k}))^{2}}{x_{k+1}-x_{k}}\right)}\\[0.5em]
   &= \sum_{k=0}^{n-1}(x_{k+1}- x_{k}) \sqrt{1 + \left(\frac{f(x_{k+1}) - f(x_{k})}{x_{k+1}- x_{k}}  \right)^{2}}
\end{align}
$$

Observamos que la ultima expresión dentro de la raiz cuad. es similar a la def. de derivada, pero no sabemos que las funciones lineales sean derivables.

Así pues, supongamos que $f$ es derivable en $[a,b]$. Así, por Teorema del Valor Medio.
$$
= \sum_{k=0}^{n-1} (x_{k+1}-x_{k}) \sqrt{1 + (f'(c_{k}))^{2}}
$$
en donde $c_{k} \in [x_{k}, x_{k+1}]$. Lo anterior es una suma de Reimann para $\sqrt{1 + f'(x)^{2}}$.


> [!theorem] **Definición.** (Longitud de una Gráfica de una función)
> Dada $f:[a,b]\to \mathbb{R}$ derivable, definimos **la longitud de la gráfica de** $f$, denotado también $\ell_{\operatorname{graf}(f) }$, como
> $$
> \operatorname{long}(\operatorname{graf} (f))  = \int_{a}^{b} \sqrt{1+f'(x)^{2}} \, dx
> $$

> [!example]- Ejemplo.
> $\square$ Calcula la longitud de la parábola $y = x^{2}$ en el intervalo $[0,1]$, $f:[0,1] \to \mathbb{R}$,
> $f(x ) = x^{2}$, entonces $\displaystyle \operatorname{long}(\operatorname{graf} (f))  = \int_{0}^{1} \sqrt{1+(2x)^{2}} \, dx$, y ya, resolvemos con sust. trig.

#### Longitud de curvas de la forma $(f(t), g(t))$

(Una funcion poligonal con puntos)


De forma similar, ahora tomamos el intervalo pero en la función misma.
Así, la longitud de la poligonal es
$$
\sum_{k=0}^{n-1} \sqrt{f(t_{k+1}) - f(t_{k}))^{2} + (g(t_{k+1}) - g(t_{k})))} = \sum_{i=1}^{n}
$$


Lo que está dentro de la integral, a medida que la partición sea más pequeña el intervalo $[t_{k},t_{k+1}]$ se aproxima a 0 y $c_{k}, d_{k}$ van a converger

> [!theorem] **Definición.** (Longitud de la gráfica de una curva)
> Sea $\gamma: \mathbb{R} \to \mathbb{R}^{2}$, la longitud de una curva $t \mapsto (f(t), g(t))$ para $t\in [a,b]$ con $f$ y $g$ dervables es
> $$
> \ell_{\gamma}[a,b] := \int_{a}^{b} \sqrt{f'(x)^{2} + g'(t)^{2}} \, dt
> $$


> [!example]+ Ejemplo.
> $\square$ Calcula el perímetro de uan circunferencia de radio $r$,
> $\mathscr{C}_{r} \sim  t \mapsto (r\cos(t), r\sin(t))$, $t \in [0,2\pi]$. Entonces,
> $$
> \ell_{\gamma}[0,2\pi] = \int_{0}^{2\pi} \sqrt{r^{2}\sin^{2}(t) + r^{2}\cos(t)^{2}} \, dt = \int_{0}^{2\pi} r \, dt = r 2\pi
> $$


> [!observation]+ **Observación.**
> Por def. de norma,
> $$
> \left\| (x,y) \right\| = \sqrt{x^{2} + y^{2}}
> $$
> Si $\displaystyle \gamma(t) = (f(t), g(t)) \implies \gamma'(t) = (f'(t), g'(t))$, entonces se tiene:
> $$
>  \ell_{\gamma}[a,b] = \int_{a}^{b} \left\| \gamma'(t) \right\| \, dt
> $$


> [!example]- Ejemplo 2.
> Calcula el perímetro de una elipse con parámetros $a,b$ centrada en el origen.
> $t \mapsto ( a\cos(t) , b\sin(t))$, con $t \in  [0,2\pi]$.
> La integral elíptica es,
> $$
> \ell_{\gamma}[0,2\pi] = \int_{0}^{2\pi} \sqrt{a^{2}\sin(t)^{2} + b^{2}\cos(t)^{2}} \, dt
> $$
> Esta la veremos en el tema de métodos numericos.






