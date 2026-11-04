---
modified: 2026-09-04T18:00:44Z
title: "La Integral"
publish: true
type: zettel
date: "2026-06-30"
aliases:
 - La Integral
 - Integrales
tags: 
 - calculus
cssclasses: 
 - romana
---
^[[[Definiendo la Integral]]]
^[[[Generalizando la Integral]]]




---

> [!Abstract]-
> La integral formaliza un concepto simple e intuitivo: el **área**. ¿Qué tanto se puedo complicar la definición de este "simple" concepto?

#### Sumas y Particiones
Comenzamos nuestro estudio definiendo el área de aquellas regiones denotadas $R(f,a,b)$ con $f(x) \geq 0$ para todo $x \in [a,b]$ limitadas por el eje horizontal. Al área se le conocerá como la **integral** de $f$ en $[a,b]$.

![[Pasted image 20260702092716.png|center]]

Si $f$ no satisface $f(x)\geq 0, \forall x \in [a,b]$, la integral corresponde a la diferencia de las áreas ("*área algebraica de* $R(f,a,b)$").

![[Pasted image 20260702092732.png|center]]

La motivación de la integral subyace de las particiones^[[[Particion]]] del intervalo $[a,b]$. 

![[Pasted image 20260702092754.png|center]]

> [!observation]- **Observación**
> La numeración de los subíndices comienzan en 0 para que el subíndice mayor sea igual al número de subintervalos.

Las sumas de estos rectángulos aproximan el área $A$ de la función. Observamos que, sean $s,S$ dichas áreas^[[[Suma Inferior y Superior]]], $s \leq A$ y $A \leq S$.
Y tal desigualdad debería se cierta independientemente del subintervalo $P$.

Ya revisadas las definiciones comenzamos a formalizar las suposiciones implícitas en esta discusión.
Se debería verificar, dadas dos particiones cualqueira $P_{1}, P_{2}$ de $[a,b]$, entonces
$$
L(f,P_{1}) \leq U(f,P_{2})
$$
ya que $L(f,P_{1}) \leq$ área $R(f,a,b)$, y $U(f,P_{2}) \geq$ área $R(f,a,b)$, pero esto no demuestra nada pues "área de $R(f,a,b)$" no ha sido definida aún, *pero indica que se alberga alguna esperanza de definir tal área*.

Ya demostrado eso, se desarrolla la siguiente desigualdad como consecuencia explicita de dicho teorema
$$
\sup \{ L(f,P) \} \leq \inf \{ U(f,P) \}
$$
Indagamos un poco en la desigualdad... Ya que ahí está nuestro candidato para el área de $R(f,a,b)$. 

> [!question]- Son ambos casos posibles, $<$ ó $=$?
> **Caso $=$:**
> Supongamos $f(x) = c$ para todo $x \in [a,b]$. Sea $P = \{ t_{0},\dots,t_{n} \}$ cualquier partición de $[a,b]$, entonces
> $$
> m_{i} = M_{i} = c
> $$
> por tanto
> $$
> \begin{align}
> L(f,P) = \sum_{i=1}^n c(t_{i}- t_{i-1}) = c(b-a), \\
> U(f,P) = \sum_{i=1}^n c(t_{i} - t_{i-1}) = c(b-a).
> \end{align}
> $$
> En este caso **todas** las sumas inferiores y superiores son iguales y
> $$
> \sup \{ L(f,P) \} = \inf \{ U(f,P) \} = c(b-a)
> $$
> 
> **Caso $<$:**
> Ahora, sea
> $$
> f(x) = \begin{cases}
> 0,  & x \text{ irracional} \\
> 1,  & x \text{ racional}.
> \end{cases}
> $$
> Si $P=\{ t_{0},\dots,t_{n} \}$ es cualquier partición, entonces
> $$
> \begin{align}
> m_{i} = 0 \\
> M_{i} = 1
> \end{align}
> $$
> Ya que existe algún racional y algún irracional en cualquier $[t_{i-1},t_{i}]$. Por tanto,
> $$
> \begin{align}
> L(f,P) = \sum_{i=1}^n 0 \cdot(t_{i}- t_{i-1}) = 0, \\
> U(f,P) = \sum_{i=1}^n 1 \cdot(t_{i} - t_{i-1}) = b-a.
> \end{align}
> $$

#### Integrabilidad

Observamos que para el caso $\neq$, definir el área es "extraño" y no merece la pena. Con $=$ encontramos un **criterio de integrabilidad**.^[[[Integrabilidad]]] Además, desarrollamos una criterio $\varepsilon$ equivalente y lo utilizamos situaciones sencillas para introducir su razonamiento.

A este punto, los resultados obtenidos son los siguientes:

$$
\begin{align}
\int_{a}^{b} f  = c \cdot(b-a) \quad \text{ si } \quad f(x) = c \quad \text{para todo } x, \\[0.5em]
\int_{a}^{b} f  = \frac{b^{2}}{2} - \frac{a^{2}}{2} \quad \text{ si } \quad f(x) = x \quad \text{para todo } x, \\[0.5em]
\int_{a}^{b} f  = \frac{b^{3}}{3} - \frac{a^{3}}{3} \quad \text{ si } \quad f(x) = x^{2} \quad \text{para todo } x. 
\end{align}
$$

 una notación más versátil es la de Leibniz^[[[Leibniz]]]:
$$
\int_{a}^{b} f(x) \, dx  
$$
"$x^{2}dx$" puede considerarse una abreviación de "la función $f$ tal que $f(x) = x^{2}$ para todo $x$". El $dx$ indica sobre que variable se está integrando.
> [!example]- **Ejemplos.** 
> ![[Pasted image 20260710095759.png|center]]

Nuestro resultados apuntan a que evaluar integrales es sumamente difícil o hasta imposible. De hecho, es imposible determinar exactamente el **valor** de las integrales de la mayoría de funciones *(aunque puede calcularse aproximadamente, mediante sumas inferiores y superiores con el grado de exactitud deseado)*. Pero no todo está perdido... existe una forma más sencilla...

Dejando de lado el **valor** de la integral. Al parecer, el *verdadero* criterio de integrabilidad es demasiado complicarlo para abordarlo de frente, por lo que desarrollamos solamente algunos de sus resultados parciales y teoremas útiles.

> [!tip]-
> En ocasiones, los detalles de las demostraciones oscurecen el objetivo de la demostración en sí. Para esto, realizare las demostraciones por mi propia cuenta!



