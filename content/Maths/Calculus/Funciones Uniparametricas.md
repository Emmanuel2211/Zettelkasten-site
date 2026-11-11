---
modified: 2026-11-09T22:21:11Z
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

Una función uniparamétrica es $f: I \subseteq \mathbb{R}\to \mathbb{R}^{2}$ (con $I$ un intervalo)

> [!example]- Ejemplos. 
>
> 1. Dada $f: [a,b]\to \mathbb{R}$ continua, su gráfica es una curva uniparamétrica.
> La gráfica se puede ver mediante: $t \mapsto (t,f(t))$ en $t \in  [a,b]$.
>
>
> Los físicos los conocen como desplazamiento de partículas.
>
> 2. Circunferencia.
> $$
> x^{2}+y^{2} = r^{2} \quad \quad \theta \mapsto (r\cos(\theta), r\sin(\theta)), \  \theta \in  [0,2\pi].
> $$
>
> 3. Elipse centrada en el origen.
> $$
> \frac{x^{2}}{a^{2}} + \frac{y^{2}}{b^{2}} = 1 \quad \quad \theta \mapsto (a\cos(\theta), b\sin(\theta)), \ \theta\in [0,2\pi]
> $$
>
> Veremos la integral elíptica! (una bien fea)



En $\mathbb{R}^{2}$, vamos a trabajar con $f:[a,b]\subseteq \mathbb{R} \to \mathbb{R}^{2}$ continuas, donde $f([a,b]) =\text{curva}$.

- Ejemplos:
$\square$ Dada $F:[a,b]\to \mathbb{R}$ continua, la curva generada por su gráfica, 
$f(x)= (x,F(x))$.
$\square$ $\rho_{r}: [0,2\pi] \to \mathbb{R}^{2}$, $\rho_{r}(\theta) = (r\cos(\theta),r\sin(\theta))$
$\square \ \Gamma:[0,2\pi]\to \mathbb{R}^{2}$, $\Gamma(\theta) = (a\cos(\theta), b\sin(\theta))$

Empezaremos a ver una forma de calcular longitudes.

#### Longitudes de gráficas de funciones.

![[IMG_6980(1).jpeg|center|500]]

Una aproximación a la longitud de la curva será (factorizando $(x_{k+1}-x_{k})^{2}$ dentro de la raíz),
$$
\begin{align}
  & \sum_{k=0}^{n-1} \sqrt{(x_{k+1}-x_{k})^{2} + (f(x_{k+1})- f(x_{k}))^{2}} \\[0.5em]
   &= \sum_{k=0}^{n-1} \sqrt{(x_{k+1}-x_{k})^{2} \left( 1 + \frac{(f(x_{k+1})- f(x_{k}))^{2}}{(x_{k+1}-x_{k})^{2}}\right)} \tag{factor.} \\[0.5em]
   &= \sum_{k=0}^{n-1}(x_{k+1}- x_{k}) \sqrt{1 + \left(\frac{f(x_{k+1}) - f(x_{k})}{x_{k+1}- x_{k}}  \right)^{2}} \tag{$x_{k+1} > x_{k}$}
\end{align}
$$

Observamos que la última expresión dentro de la raíz cuad. es similar a la def. de derivada (es un cociente de diferencias), pero no sabemos si $f$ es derivable.

Así pues, supongamos que $f$ es continua en $[a,b]$ y derivable en $(a,b)$. Así, por [[Teorema del Valor Medio]], existe $c_{k}$ tal que $\displaystyle f'(c_{k}) = \frac{f(x_{k+1})-f(x_{k})}{x_{k+1}-x_{k}}$, ent.
$$
= \sum_{k=0}^{n-1} (x_{k+1}-x_{k}) \sqrt{1 + (f'(c_{k}))^{2}}
$$
en donde $c_{k} \in [x_{k}, x_{k+1}]$. Lo anterior es una [[Sumas de Riemann|suma de Riemann]] para $\sqrt{1 + f'(x)^{2}}$ (que es integrable si $f'$ es continua).


> [!theorem] **Definición.** (Longitud de una Gráfica de una función)
>
> Dada $f:[a,b]\to \mathbb{R}$ con derivada continua, definimos **la longitud de la gráfica de** $f$, denotada también $\ell_{\operatorname{graf}(f) }$, como
> $$
> \operatorname{long}(\operatorname{graf} (f))  = \int_{a}^{b} \sqrt{1+f'(x)^{2}} \, dx
> $$

> [!example]- Ejemplo.
>
> $\square$ Calcula la longitud de la parábola $y = x^{2}$ en el intervalo $[0,1]$, $f:[0,1] \to \mathbb{R}$,
> $f(x ) = x^{2}$, entonces $\displaystyle \operatorname{long}(\operatorname{graf} (f))  = \int_{0}^{1} \sqrt{1+(2x)^{2}} \, dx$, y ya, resolvemos con sust. trig. ($2x = \tan(\theta)$):
> $$
> \int_{0}^{1} \sqrt{1+4x^{2}} \, dx = \boxed{\frac{\sqrt{5}}{2} + \frac{1}{4}\ln\left(2+\sqrt{5}\right)} \approx 1.4789
> $$

#### Longitud de curvas de la forma $(f(t), g(t))$

(Una función poligonal con puntos)


De forma similar, ahora tomamos una partición $\{ a = t_{0} < t_{1} < \dots < t_{n} = b \}$ del intervalo del parámetro, y los puntos $(f(t_{k}), g(t_{k}))$ sobre la curva.
Así, la longitud de la poligonal es
$$
\begin{align}
& \sum_{k=0}^{n-1} \sqrt{(f(t_{k+1}) - f(t_{k}))^{2} + (g(t_{k+1}) - g(t_{k}))^{2}} \\[0.5em]
&= \sum_{k=0}^{n-1} (t_{k+1}-t_{k}) \sqrt{\left(\frac{f(t_{k+1}) - f(t_{k})}{t_{k+1}-t_{k}}\right)^{2} + \left(\frac{g(t_{k+1}) - g(t_{k})}{t_{k+1}-t_{k}}\right)^{2}} \tag{factor.} \\[0.5em]
&= \sum_{k=0}^{n-1} (t_{k+1}-t_{k}) \sqrt{f'(c_{k})^{2} + g'(d_{k})^{2}} \tag{T.V.M.}
\end{align}
$$
con $c_{k}, d_{k} \in [t_{k}, t_{k+1}]$ (aplicamos el T.V.M. a $f$ y a $g$ por separado, por eso los puntos pueden ser distintos).

Lo que está dentro de la suma: a medida que la partición sea más pequeña el intervalo $[t_{k},t_{k+1}]$ se aproxima a 0 y $c_{k}, d_{k}$ van a converger al mismo punto; si $f'$ y $g'$ son continuas, por [[Continuidad Uniforme|continuidad uniforme]] la suma converge a la integral siguiente (aunque no sea exactamente una suma de Riemann).

> [!theorem] **Definición.** (Longitud de una curva)
>
> Sea $\gamma: [a,b] \to \mathbb{R}^{2}$, la longitud de una curva $t \mapsto (f(t), g(t))$ para $t\in [a,b]$ con $f$ y $g$ de derivada continua es
> $$
> \ell_{\gamma}[a,b] := \int_{a}^{b} \sqrt{f'(t)^{2} + g'(t)^{2}} \, dt
> $$


> [!example]+ Ejemplo.
>
> $\square$ Calcula el perímetro de una circunferencia de radio $r$,
> $\mathscr{C}_{r} \sim  t \mapsto (r\cos(t), r\sin(t))$, $t \in [0,2\pi]$. Entonces,
> $$
> \ell_{\gamma}[0,2\pi] = \int_{0}^{2\pi} \sqrt{r^{2}\sin^{2}(t) + r^{2}\cos^{2}(t)} \, dt = \int_{0}^{2\pi} r \, dt = 2\pi r
> $$
> pues $\sin^{2}(t) + \cos^{2}(t) = 1$.


> [!observation]+ **Observación.**
>
> Por def. de norma,
> $$
> \left\| (x,y) \right\| = \sqrt{x^{2} + y^{2}}
> $$
> Si $\displaystyle \gamma(t) = (f(t), g(t)) \implies \gamma'(t) = (f'(t), g'(t))$, entonces se tiene:
> $$
>  \ell_{\gamma}[a,b] = \int_{a}^{b} \left\| \gamma'(t) \right\| \, dt
> $$


> [!example]- Ejemplo 2.
>
> Calcula el perímetro de una elipse con parámetros $a,b$ centrada en el origen.
> $t \mapsto ( a\cos(t) , b\sin(t))$, con $t \in  [0,2\pi]$.
> La integral elíptica es,
> $$
> \ell_{\gamma}[0,2\pi] = \int_{0}^{2\pi} \sqrt{a^{2}\sin(t)^{2} + b^{2}\cos(t)^{2}} \, dt
> $$
> Esta la veremos en el tema de [[Metodos numericos de Integracion|métodos numéricos]].






