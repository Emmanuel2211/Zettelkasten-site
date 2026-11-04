---
modified: 2026-09-18T18:55:31Z
publish: true
type: zettel
status: 
links: 
tags: []
date: "2026-04-08"
aliases: [ "" ]
cssclasses: romana
materia: 
---


#### Teorema. Rotación
Ocurre cuando $\text{det}(M) = 1$. En $\mathbb{R}^{2}$, esto equivale a multiplicar el vector posición por la matriz de rotación:
$$
M = \begin{pmatrix}
\cos \theta & -\sin \theta  \\
\sin \theta & \cos \theta
\end{pmatrix}
$$


#### Rotación Activa (Rotar el punto)
Los ejes $X,Y$ están fijos, anclados al universo. Sea un puntos $P(x,y)$, $r$ su magnitud y lo giras $\theta$ grados más en sentido antihorario alrededor del origen tenemos que
$$
x_{1} = r\cos (\phi +\theta) \ \ \text{ y } \ \ y_{1} = r \sin(\phi + \theta)
$$
Aplicando las [[Identidades Trigonometricas|identidades de la suma de ángulos]] 
$$
\begin{align}
x_{1} = x \cos \theta - y \sin \theta \\[1em] \\
y_{1} = x \sin \theta + y \cos \theta
\end{align}
$$



#### Rotación Pasiva (Rotar Ejes)
El punto $(x,y)$ esta fijo en el espacio. Lo que se hace es girar todo el sistema $X$, $Y$ un ángulo $\theta$ en sentido antihorario. Entonces para saber las nuevas coordenadas de este punto fijo en mi nuevo sistema $X',Y'$ tenemos
##### Directa (del sistema original al rotado)
$$
\begin{align}
x' &= x \cos \theta + y \sin \theta \\[1em]
y' &= -x \sin \theta + y \cos \theta
\end{align}
$$


Otra forma de describirlo:
> [!theorem] **Teorema**
> Sea $U: \mathbb{R}^{2} \to \mathbb{R}^{2}$, $\mathbf{P}(x,y)$ y sea $\mathbf{u} \in \mathbb{R}^{2}$ tal que $\lvert \mathbf{u} \rvert = 1$
> $$
> U(\mathbf{P}) = x\mathbf{u} + y\mathbf{u^\perp}
> $$

##### Inversa (del sistema rotado al original)
$$
\begin{align}
x = x'\cos \theta - y'\sin \theta \\[1em]
y = x' \sin \theta + y' \cos \theta
\end{align}
$$

^24fa11


#### Eliminación del térmico cruzado
Para una ecuación de segundo grado de la forma
$$
Ax^{2} + Bxy + Cy^{2} +Dx +Ey +F = 0
$$
El ángulo $\theta$ para rotar los ejes y eliminar el término $Bxy$ se obtiene mediante
$$
\cot (2\theta) = \frac{A-C}{B}
$$
O si $A \neq C$
$$
\tan (2\theta) = \frac{B}{A-C}
$$

A partir de aquí, se obtenemos info sobre la hipotenusa, $c^{2} = B^{2} + (A-C)^{2}$
$$
\cos (2\theta) = \frac{A-C}{c}
$$
y dado las identidades ![[Identidades Trigonometricas#^aa196b]] y ![[Identidades Trigonometricas#^6fb78e]]
Resolvemos las formulas ![[Rotacion#^24fa11]]


## Links
- [[Ecuacion de segundo grado]]