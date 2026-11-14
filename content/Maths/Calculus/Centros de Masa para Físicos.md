---
modified: 2026-11-13T23:34:20Z
title: "Centros de masa (Físicos)"
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
> [!tip|idea]+ **Idea Intuitiva.**
>
> Supongamos que tenemos $n$ cuerpos $X = \{ x_{1},\dots,x_{n} \}$ con masas asociadas $M = \{ m_{1},\dots,m_{n} \}$, cuerpos alineados.
> El momento de masa respecto al origen representa, el **torque** o fuerza de rotación de un sistema alrededor de un eje o en este caso, un punto (*el origen*). Al ser justo, de un sistema, donde diferentes fuerzas (*los pesos $m_{i}g$*) son aplicadas, se calcula el "*total*" de la fuerza aplicada al sistema de la siguiente forma; el momento de masa es el torque total dividido entre $g$.
> El centroide representa dónde está el centro de masa, dadas todas las masas, en tal sistema.
> 
> ![[Pasted image 20261029152713.png|center|400]]


> [!theorem] **Definición.** (Momento)
>
> Dado lo anterior, el **momento** o **momento de masa** de $(X, M)$ respecto al origen es:
> $$
> \sum_{i=1}^{n} m_{i}x_{i}
> $$
> El momento respecto a otro punto $z$ diferente del origen es,
> $$
> \sum_{i=1}^{n} m_{i}(x_{i} - z)
> $$


> [!theorem] **Definición.** (Centroide o centro de masa)
>
> El **centroide** de $(X, M)$ denotado $\bar{x}$ es:
> $$
> \bar{x} = \frac{\displaystyle \sum_{i=1}^{n} m_{i}x_{i}}{\displaystyle \sum_{i=1}^{n} m_{i}}
> $$


Es interesante ver que el momento respecto al centroide es nulo; físicamente esto significa que si sostenemos al sistema solo desde el centroide, estará en equilibrio. Calculamos el momento respecto a $\bar{x}$,
$$
\begin{align}
\sum_{i=1}^{n} m_{i} \left( x_{i} - \frac{\displaystyle \sum_{k=1}^{n} m_{k}x_{k}}{\displaystyle \sum_{k=1}^{n} m_{k}}  \right) &= \sum_{i=1}^{n} m_{i} \frac{\displaystyle \left( \left(\sum_{k=1}^{n} m_{k}  \right)x_{i} - \sum_{k=1}^{n} m_{k}x_{k}  \right)}{\displaystyle \sum_{k=1}^{n} m_{k}} \tag{común denom.} \\[0.5em]
 &= \frac{1}{\displaystyle  \sum_{k=1}^{n} m_{k}} \cdot  \sum_{i=1}^{n} m_{i} \left( \left(\sum_{k=1}^{n} m_{k}\right)x_{i} - \sum_{k=1}^{n} m_{k}x_{k}  \right) \tag{factor.} \\[0.5em]
  &= \frac{1}{\displaystyle \sum_{k=1}^{n} m_{k}} \cdot \sum_{i=1}^{n} m_{i} \left( \sum_{k=1}^{n} m_{k} (x_{i} - x_{k})  \right) \tag{$x_{i}$ entra a la suma} \\[0.5em]
  &= \frac{1}{\sum_{k=1}^{n} m_{k}} \cdot \left( \sum_{i=1}^{n} \sum_{k=1}^{n} m_{i}m_{k} (x_{i} - x_{k})   \right) \tag{dist.} \\[0.5em]
   &= \frac{1}{\sum_{k=1}^{n} m_{k}} \cdot  \sum_{i,k=1}^{n} m_{i} m_{k}(x_{i}- x_{k}) = 0 \tag{Obs.}
\end{align}
$$

> [!observation]+ **Observación.**
>
> La suma con doble índice anterior es $= 0$, pues observamos que $\forall i,k \in \{ 1,\dots,n \}$, por ejemplo, si $i = 1, k= 2 \implies m_{1}m_{2}(x_{1}-x_{2})$, y si lo invertimos,
> $i = 2, k =1 \implies  m_{2}m_{1}(x_{2}-x_{1})$, lo cual es lo mismo que el anterior pero con signo opuesto, si lo sumamos se cancela. Y si $i = k$, el término es $m_{i}^{2} \cdot 0 = 0$.
>
> **NOTA**. Los físicos dicen que un sistema está equilibrado si se sostiene justo desde su centroide.

> [!note]- Otra forma (más directa)
>
> Por la definición de $\bar{x}$, $\displaystyle \bar{x} \sum_{i=1}^{n} m_{i} = \sum_{i=1}^{n} m_{i}x_{i}$, ent.
> $$
> \sum_{i=1}^{n} m_{i}(x_{i} - \bar{x}) = \sum_{i=1}^{n} m_{i}x_{i} - \bar{x}\sum_{i=1}^{n} m_{i} = \sum_{i=1}^{n} m_{i}x_{i} - \sum_{i=1}^{n} m_{i}x_{i} = 0
> $$


Ahora, supongamos que el sistema "vive" en $\mathbb{R}^{2}$ y que no está necesariamente alineado. En este caso se definen dos momentos de masa,

![[IMG_7010.jpeg|center|250]]

$$
\underset{\text{ Respecto al eje X }}{M_{x} = \sum_{i=1}^{n} m_{i}y_{i}} \quad , \quad \underset{\text{ Respecto al eje Y }}{M_{y} = \sum_{i=1}^{n} m_{i}x_{i}}
$$
y el centroide es $\displaystyle (\bar{x}, \bar{y}) = \left( \frac{M_{y}}{\sum_{i=1}^{n} m_{i}}, \frac{M_{x}}{\sum_{i=1}^{n} m_{i}} \right)$.

### Momento Continuo
Supongamos que tenemos una varilla, podemos discretizar la varilla. El problema, es que si pensamos la varilla puntualmente, los pesos de cada punto van a ser nulos, como lo es el área de una recta o longitud de un punto, esa medida está en otra dimensión.


![[IMG_7012.jpeg|center|300]]

Entonces, introducimos el concepto de **densidad** (lineal), en este caso denotada con $\rho$, ent. la densidad de la varilla es masa sobre longitud: $\displaystyle \frac{m}{\ell} = \rho \implies m = \rho \cdot \ell$ (si $\rho$ es constante; por eso aproximamos tramo por tramo).
Supongamos que por cada tramo de la varilla existe un punto, llamémosle $\xi_{i} \in [x_{i}, x_{i+1}]$ en el cual se concentra toda la masa del tramo. La masa aproximada es,
$$
m_{i} = \rho (\xi_{i})(x_{i+1}- x_{i})
$$
Entonces, para el problema de $n$ cuerpos (en la varilla) tenemos por aproximación del momento (respecto al origen) a:
$$
\sum_{i=0}^{n-1} m_{i}\xi_{i} = \sum_{i=0}^{n-1} \rho (\xi_{i})(x_{i+1}-x_{i})\xi_{i}
$$
pues toda la masa del tramo está en $\xi_{i}$.
Obs. que el lado derecho de la ecuación es una [[Sumas de Riemann|suma de Riemann]] para $\rho(x)\cdot x$.

> [!theorem] **Definición.** (Momento respecto al origen)
>
> El momento de una varilla sobre $[a,b]$ con densidad $\rho$ continua es:
> $$
> \int_{a}^{b} x \rho(x) \, dx
> $$
> de esta forma, el momento depende de la densidad.

> [!theorem] **Definición.** (Centroide caso Continuo)
>
> El centroide de una varilla es,
> $$
> \bar{x} = \frac{\displaystyle \int_{a}^{b} x \rho(x) \, dx}{ \displaystyle \int_{a}^{b} \rho(x) \, dx}
> $$

> [!observation]+ **Observación.**
>
> Si $\rho = k$, i.e. es constante, $\displaystyle \bar{x} = \frac{\displaystyle \rho \int_{a}^{b} x \, dx}{\displaystyle  \rho \int_{a}^{b}  \, dx} = \frac{\displaystyle \rho \left(\frac{b^{2}-a^{2}}{2}  \right)}{\rho (b-a)} = \frac{b+a}{2}$ (dif. de cuadrados)
> Lo cual tiene sentido, el centroide de una varilla con densidad constante, es el punto medio.

#### Momento de funciones paramétricas

<div style="display: flex; gap: 20px;">
  <div style="flex: 1;">
    Pensemos ahora que la varilla está curveada.
    Procediendo similarmente al caso anterior con la existencia de 
    <span class="math-inline">
      \{ \xi_{i} \}
    </span>
    <div style="text-align: center; width: 100%; margin: 15px 0;">
      <span class="math-inline">
        m_{i} = \rho(\xi_{i}) \displaystyle \int_{t_{i}}^{t_{i+1}} \sqrt{(\gamma_{1}'(t))^{2} + (\gamma_{2}'(t))^{2}} \, dt
      </span>
    </div>
    Suponiendo que
    <span class="math-inline">
      \gamma
    </span>
    es de clase C¹ (derivable con derivada continua),
    tenemos, usando el T.V.M. de integrales:
  </div>
  <div style="flex: 1; padding: 10px; border-radius: 5px;">
     <img src="/images/IMG_7013.jpeg" width="270">

  </div>
</div>

$$
m_{i} = \rho (\xi_{i}) \cdot (t_{i+1}-t_{i}) \sqrt{(\gamma_{1}'(c_{i}))^{2} + (\gamma_{2}'(c_{i}))^{2}}
$$
Así, una aproximación del momento respecto a, Eje $X$:
$$
\sum_{i=0}^{n-1} \gamma_{2}(\xi_{i}) \cdot  \rho (\xi_{i})(t_{i+1}-t_{i})\sqrt{(\gamma_{1}'(c_{i}))^{2} + (\gamma_{2}'(c_{i}))^{2}}
$$
y respecto al eje $Y$,
$$
\sum_{i=0}^{n-1} \gamma_{1}(\xi_{i}) \cdot  \rho (\xi_{i})(t_{i+1}-t_{i})\sqrt{(\gamma_{1}'(c_{i}))^{2} + (\gamma_{2}'(c_{i}))^{2}}
$$
Como $\xi_{i}$ y $c_{i}$ no son necesariamente el mismo punto, estas no son exactamente sumas de Riemann; sin embargo, por [[Continuidad Uniforme|continuidad uniforme]] convergen a las integrales siguientes.

> [!theorem] **Definición.** (Momento de función paramétrica)
>
> Los momentos de una varilla dada por $\gamma(t) = \left( \gamma_{1}(t), \gamma_{2}(t)  \right)$, $t \in [a,b]$, de clase $C^{1}$ son:
> $$
> \begin{align}
> M_{X} &= \int_{a}^{b} \gamma_{2}(t)\rho(t) \sqrt{(\gamma_{1}'(t))^{2} + (\gamma_{2}'(t))^{2}} \, dt \\[0.5em]
> M_{Y} &= \int_{a}^{b} \gamma_{1}(t)\rho(t) \sqrt{(\gamma_{1}'(t))^{2} + (\gamma_{2}'(t))^{2}} \, dt
> \end{align}
> $$

> [!theorem] **Definición.** (Centroide paramétrico)
>
> Las coordenadas del centroide de una curva dada por $\gamma(t) = (\gamma_{1}(t), \gamma_{2}(t))$ son, donde $\displaystyle M_{T} = \int_{a}^{b} \rho(t)\sqrt{(\gamma_{1}'(t))^{2} + (\gamma_{2}'(t))^{2}} \, dt$ es la masa total
> $$
> \begin{align}
> \bar{y} &= \frac{M_{x}}{M_{T}} = \frac{\displaystyle \int_{a}^{b} \gamma_{2}(t) \rho(t)  \sqrt{(\gamma_{1}'(t))^{2} + (\gamma_{2}'(t))^{2}}\, dt}{\displaystyle\int_{a}^{b} \rho(t)\sqrt{(\gamma_{1}'(t))^{2} + (\gamma_{2}'(t))^{2}} \, dt} \\[0.5em]
> \bar{x} &= \frac{M_{y}}{M_{T}} = \frac{\displaystyle \int_{a}^{b} \gamma_{1}(t) \rho(t) \sqrt{(\gamma_{1}'(t))^{2} + (\gamma_{2}'(t))^{2}} \, dt}{\displaystyle\int_{a}^{b} \rho(t)\sqrt{(\gamma_{1}'(t))^{2} + (\gamma_{2}'(t))^{2}} \, dt}
> \end{align}
> $$

De aquí, el caso más sencillo por estudiar será cuando
$\rho = k$ y $\gamma(t) = (\gamma_{1}(t), \gamma_{2}(t)) \equiv  (x,f(x))$ (la gráfica de una función). En este caso, con $\gamma(t) = (t, f(t))$ se tiene $\gamma'(t) = (1, f'(t))$, y la constante $k$ se cancela,
$$
\bar{y} =  \frac{\displaystyle\int_{a}^{b} f(x)\sqrt{1 + (f'(x))^{2}} \, dx}{\ell_{\operatorname{graf}(f)}}
$$

$$
\bar{x} =  \frac{\displaystyle\int_{a}^{b} x\sqrt{1 + (f'(x))^{2}} \, dx}{\ell_{\operatorname{graf}(f)}}
$$
y continuamos declarando el [[Teorema de Pappus]].

Más notas....
El centroide de una región (figura) bajo la gráfica de $f \geq 0$ en $[a,b]$, con densidad constante, está dado por (ver [[Encontrando Centroides]]):
$$
\bar{x} = \frac{\displaystyle \int_{a}^{b} xf(x) \, dx }{A}
$$
donde $\displaystyle A = \int_{a}^{b} f(x) \, dx$ es el área de la figura, y
$$
\bar{y} = \frac{\displaystyle \int_{a}^{b} [f^{2}(x)] \, dx}{2A}
$$

> [!note]- Justificación
>
> Cada franja vertical de ancho $dx$ tiene masa $\propto f(x)\,dx$ y su centroide está a la altura $\frac{f(x)}{2}$. Ent. $\displaystyle M_{x} = \int_{a}^{b} \frac{f(x)}{2} f(x)\,dx$, y dividiendo entre $A$ se obtiene $\bar{y}$.

Ver también [[Centros de Masa para Actuarios]], donde se observa que $\operatorname{E}[X] = \bar{x}$.
