---
modified: 2026-11-01T19:48:08Z
title: "Centros de masa (Físicos)"
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
> [!tip]+ **Idea.**
> Supongamos que tenemos $n$ cuerpos $X = \{ x_{1},\dots,x_{n} \}$ con masas asociadas.
> $M = \{ m_{1},\dots,m_{n} \}$, cuerpos alineados
> El momento de masa respecto al origen representa, el **torque** o fuerza de rotación de un sistema alrededor de un eje o en este caso, un punto (*el origen*). Al ser justo, de un sistema, donde diferentes fuerzas (*masas*) son aplicadas, se calcula el "*total*" de la fuerza aplicada al sistema de la siguiente forma.
> El centriode repesenta donde está el centro de masa, dado todas las masas, en tal sistema.
> 
> ![[Pasted image 20261029152713.png|center|400]]


> [!theorem] **Definición.** (Momento)
> Dado lo anterior, el **momento** o **momento de masa** de $(X, M)$ respecto al origen es:
> $$
> \sum_{i=1}^{n} m_{i}x_{i}
> $$
> El momento respecto a otro punto $z$ diferente del origen es,
> $$
> \sum_{i=1}^{n} m_{i}(x_{i} - z)
> $$


> [!theorem] **Definición.** (Centroide)
> El **centroide** de $(X, M)$ denotado $\bar{x}$ es:
> $$
> \bar{x} = \frac{\displaystyle \sum_{i=1}^{n} m_{i}x_{i}}{\displaystyle \sum_{i=1}^{n} m_{i}}
> $$


Es interesante ver que el momento respecto al centroide es nulo, esto es claro, si sostenemos al sistema solo desde el centroide, el sistema estará en equilibrio. Calculamos el momento respecto a $\bar{x}$,
$$
\begin{align}
\sum_{i=1}^{n} m_{i} \left( x_{i} - \frac{\displaystyle \sum_{i=1}^{n} m_{i}x_{i}}{\displaystyle \sum_{i=1}^{n} m_{i}}  \right) &= \sum_{i=1}^{n} m_{i} \frac{\displaystyle \left( \left(\sum_{k=1}^{n} m_{k}  \right)x_{i} - \sum_{k=1}^{n} m_{k}x_{k}  \right)}{\displaystyle \sum_{k=1}^{n} m_{k}} \\[0.5em]
 &= \frac{1}{\displaystyle  \sum_{k=1}^{n} m_{k}} \cdot  \sum_{i=1}^{n} m_{i} \left( \sum_{k=1}^{n} m_{k}x_{k}  \right) \\[0.5em]
  &= \frac{1}{\displaystyle \sum_{k=1}^{n} m_{k}} \cdot \sum_{i=1}^{n} m_{i} \left( \sum_{k=1}^{n} m_{k} (x_{i} - x_{k})  \right) \\[0.5em]
  &= \frac{1}{\sum_{k=1}^{n} m_{k}} \cdot \left( \sum_{i=1}^{n} \sum_{k=1}^{n} m_{i}m_{k} (x_{i} - x_{k})   \right) \\[0.5em]
   &= \frac{1}{\sum_{k=1}^{n} m_{k}} \cdot  \sum_{i,k=1}^{n} m_{i} m_{k}(x_{i}- x_{k}) = 0
\end{align}
$$

> [!observation]+ **Observación.**
> La suma con doble indice anterior es $= 0$, pues observamos que $\forall i,k \in \{ 1,\dots,n \}$, por ejemplo, si $i = 1, k= 2 \implies m_{1}m_{2}(x_{1}-x_{2})$, y si lo invertimos,
> $i = 2, k =1 \implies  m_{2}m_{1}(x_{2}-x_{1})$, lo caul es lo mismo que el anterior pero con signo opuesto, si lo sumamos se cancela.
>
> **NOTA**. Los físicos dicen que un sistema está equilibrado si su sistema está tomado justo desde su centroide.


Ahora, supongamos que el sistema "vive" en $\mathbb{R}^{2}$ y que no está necesariamente alineado. En este caso se definen dos momentos de masa,

![[IMG_7010.jpeg|center|250]]

$$
\underset{\text{ Respecto al eje X }}{M_{x} = \sum_{i=1}^{n} m_{i}y_{i}} \quad , \quad \underset{\text{ Respecto al eje Y }}{M_{y} = \sum_{i=1}^{n} m_{i}x_{i}}
$$

### Momento Continuo
Supongamos que tenemos una varilla, podemos discretizar la varilla. El problema, es que si pensamos la varilla puntualmente, los pesos de cada punto van a ser nulos, como lo es el área de una recta o longitud de un punto, esa medida está en otra dimensión.


![[IMG_7012.jpeg|center|300]]

Entonces, introducimos el consepto de **densidad**, en este caso denotada con $\rho$, ent. la densidad de la varilla es masa sobre longitud: $\displaystyle \frac{m}{\ell} = \rho \implies m = \rho \cdot \ell$
Supongamos que por cada tramo de la varilla existe un punto, llamemosle $\xi_{i} \in [x_{i}, x_{i+1}]$ en el cual se concentra toda la masa del tramo. La masa aproximada es,
$$
m_{i} = \rho (\xi_{i})(x_{i+1}- x_{i})
$$
Entonces, para el problema de $n$ cuerpos (en la varilla) tenemos por aproximación del momento (respecto al origen) a:
$$
\sum_{i=1}^{n} m_{i}x_{i} = \sum_{i=1}^{n} \rho (\xi_{i})(x_{i+1}-x_{i})x_{i}
$$
Obs. que el lado derecho de la ecuación es una suma de Riemann para $\rho(x)\cdot x$.

> [!theorem] **Definición.** (Momento respecto al origen)
> El momento de una varilla es:
> $$
> \int_{a}^{b} x \rho(x) \, dx
> $$
> de esta forma, el momento depende de la densidad.

> [!theorem] **Definición.** (Centroide caso Continuo)
> El centroide de una varilla es,
> $$
> \bar{x} = \frac{\displaystyle \int_{a}^{b} x \rho(x) \, dx}{ \displaystyle \int_{a}^{b} \rho(x) \, dx}
> $$

> [!observation]+ **Observación.**
> Si $\rho = k$, i.e. es constante, $\displaystyle \bar{x} = \frac{\displaystyle \rho \int_{a}^{b} x \, dx}{\displaystyle  \rho \int_{a}^{b}  \, dx} = \frac{\displaystyle \rho \left(\frac{b^{2}-a^{2}}{2}  \right)}{\rho (b-a)} = \frac{b+a}{2}$
> Lo cual tiene sentido, el centroide de una varilla con densidad constante, es el punto medio.

#### Momento de funciones paramétricas

<div style="display: flex; gap: 20px;">
  <div style="flex: 1;">
    Pensemos ahora que la varilla está curveada.
    Procediendo similarmente al caso anterior con la existencia de 
    <span class="math-display">
      \{ \xi_{i} \}
    </span>
    <div style="text-align: center; width: 100%; margin: 15px 0;">
      <span class="math-display">
        m_{i} = \rho(\xi_{i}) \displaystyle \int_{t_{i}}^{t_{i+1}} \sqrt{(\gamma_{1}(t)')^{2} + (\gamma_{2}(t)')^{2}} \, dt
      </span>
    </div>
    Suponiendo que
    <span class="math-display">
      \gamma
    </span>
    es derivable, tenemos
    tenemos, usando el T.V.M. de integrales:
  </div>
  <div style="flex: 1; padding: 10px; border-radius: 5px;">
     <img src="/images/IMG_7013.jpeg" width="270">
  </div>
</div>

$$
m_{i} = \rho (\xi_{i}) \cdot (t_{i+1}-t_{i}) \sqrt{(\gamma_{1}'(c_{i}))^{2} + (\gamma_{2}'(c_{2}))^{2}}
$$
Así, una aproximación del momento respecto a, Eje $X$:
$$
\sum_{i=1}^{n} \gamma_{2}(\xi_{i}) \cdot  \rho (\xi_{i})(t_{i+1}-t_{i})\sqrt{(\gamma_{1}'(c_{i}))^{2} + (\gamma_{2}'(c_{2}))^{2}}
$$
y respecto al eje $Y$,
$$
\sum_{i=1}^{n} \gamma_{1}(\xi_{i}) \cdot  \rho (\xi_{i})(t_{i+1}-t_{i})\sqrt{(\gamma_{1}'(c_{i}))^{2} + (\gamma_{2}'(c_{2}))^{2}}
$$

> [!theorem] **Definición.** (Momento de función paramétrica)
> Los momentos de una varilla dado por $\gamma(t) = \left( \gamma_{1}(t), \gamma_{2}(t)  \right)$ derivable son:
> $$
> \begin{align}
> M_{X} &= \int_{a}^{b} \gamma_{2}(x)\rho(x) \sqrt{(\gamma_{1}'(c_{i}))^{2} + (\gamma_{2}'(c_{2}))^{2}} \, dx \\[0.5em]
> M_{Y} &= \int_{a}^{b} \gamma_{1}(x)\rho(x) \sqrt{(\gamma_{1}'(c_{i}))^{2} + (\gamma_{2}'(c_{2}))^{2}} \, dx
> \end{align}
> $$

> [!theorem] **Definición.** (Centroide paramétrico)
> Las coordenadas del centroide de una curva dada por $\rho(t) = (\gamma_{1}(t), \gamma_{2}(t))$ son, donde $M_{T}$ es la masa total
> $$
> \begin{align}
> \bar{y} &= \frac{M_{x}}{M_{T}} = \frac{\displaystyle \int_{a}^{b} \gamma_{2}(x) \rho(x)  \sqrt{(\gamma_{1}'(c_{i}))^{2} + (\gamma_{2}'(c_{2}))^{2}}\, dx}{\displaystyle\int_{a}^{b} \rho(x)\sqrt{(\gamma_{1}'(c_{i}))^{2} + (\gamma_{2}'(c_{2}))^{2}} \, dx} \\[0.5em]
> \bar{x} &= \frac{M_{y}}{M_{T}} = \frac{\displaystyle \int_{a}^{b} \gamma_{1}(x) \rho(x) \sqrt{(\gamma_{1}'(c_{i}))^{2} + (\gamma_{2}'(c_{2}))^{2}} \, dx}{\sqrt{(\gamma_{1}'(c_{i}))^{2} + (\gamma_{2}'(c_{2}))^{2}} \, dx}
> \end{align}
> $$

De aquí, el caso más sencillo por estudiar será cuando
$\rho = k$ y $\gamma(t) = (\gamma_{1}(t), \gamma_{2}(t)) \equiv  (x,f(x))$ (la gráfica de una función). En este caso,
$$
\bar{y} =  \frac{\displaystyle\int_{a}^{b} f(x)\sqrt{1 + (f'(x))^{2}} \, dx}{\ell_{\operatorname{graf}(f)}}
$$

$$
\bar{x} =  \frac{\displaystyle\int_{a}^{b} x\sqrt{1 + (f'(x))^{2}} \, dx}{\ell_{\operatorname{graf}(f)}}
$$
y continuamos declarando el [[Teorema de Pappus]].

mas notas....
El centroide de una región (figura) está dada por:
$$
\bar{x} = \frac{\displaystyle \int_{a}^{b} xf(x) \, dx }{A}
$$
donde $A$ es el área de la figura, y
$$
\bar{y} = \frac{\displaystyle \int_{a}^{b} [f^{2}(x)] \, dx}{2A}
$$

