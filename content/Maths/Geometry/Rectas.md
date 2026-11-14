---
modified: 2026-11-13T23:34:20Z
publish: true
type: zettel
status: evergreen
links:
tags:
  - vector unitario
  - cosenos directores
  - numeros directores
  - ecuacion simetrica
date: 2026-04-08
aliases:
  - ""
cssclasses: romana
materia:
---


### Discusión Rectas; paralelismo de rectas en $\mathbb{R}^{2}$ y $\mathbb{R}^{3}$.
**1. Teorema.** Para cada par de puntos hay una y sólo una recta que pasa por ellos.
**2. Teorema.** Dos rectas
$$
\mathscr{L}_{1} = {\mathbf{P_{1}}+s\mathbf{a}} \quad \text{ y } \quad \mathscr{L}_{2} = {\mathbf{P_{2}}+t\mathbf{b}}
$$
son **paralelas** si los vectores $\mathbf{a}$ y $\mathbf{b}$ lo son.
**2.1 Corolario.**  $\forall P_{1} \in \mathbb{R}^{3}$ y toda recta $\mathscr{L}$, hay una y solamente una recta que pasa por $P_{1}$ paralela a $\mathscr{L}$.
**2.2 Corolario.**  $\mathscr{L}_{1}$ y $\mathscr{L}_{2}$ son paralelas si y sólo si $\mathscr{L_{1}} = \mathscr{L}_{2}$ o $\mathscr{L}_{1} \cap \mathscr{L}_{2} = \varnothing$.
Este corolario solo es verdad para $\mathbb{R}^{2}$, ya que para $\mathbb{R}^{3}$ puede que no se intersecten y no sean paralelas.
**2.3 Definición.** Dos rectas $\mathscr{L_{1}}$ y $\mathscr{L}_{2}$​ se denominan **cruzadas** o **alabeadas** si no son paralelas y su intersección es vacía ($\mathscr{L_{1}} \cap \mathscr{L_{2}} = \varnothing$). Es decir, no existe ningún plano que contenga a ambas simultáneamente.


### Discusión Rectas; ángulo, 
**3. Definición.** $\theta$ es un **ángulo** entre las rectas $\mathscr{L}_{1}$ y $\mathscr{L}_{2}$ si para ciertos vectores no nulos $\mathbf{a}$ y $\mathbf{b}$, $\mathscr{L}_{1} = {\mathbf{P_{1}}+t\mathbf{a}}, \mathscr{L}_{2} = {\mathbf{P_{2}}+t\mathbf{b}}$, y $\theta$ es el ángulo entre $\mathbf{a}$ y $\mathbf{b}$.
**4.** Es conveniente expresar los vectores de $V_{3}$ en términos de los vectores unitarios:
$$
\mathbf{i} = (1,0,0), \quad \mathbf{j} = (0,1,0), \quad \mathbf{k} = (0,0,1) \tag{4.1}
$$
$$
\begin{align}
\mathbf{a} &= (a_{1},a_{2},a_{3}) = (a_{1},0,0)+ (0,a_{2},0) + (0,0,a_{3})  \\[1em]
&= a_{1}\mathbf{i} + a_{2}\mathbf{j} + a_{3}\mathbf{k}. \tag{4.2}
\end{align}
$$
Sea $\mathbf{a} = (l,m,n)$. Los números l,m,n son los llamados **números directores** de alguna $\mathscr{L} \parallel \mathbf{a}$ . Sea $\alpha,\beta,\gamma$ **los ángulos directores**; $\cos \alpha,\cos \beta, \cos \gamma$ son los **cosenos directores** de $\mathscr{L}$. Si $\mathbf{u}$ es un *vector unitario* en dirección de $\mathbf{a}$
$$
\mathbf{u} = \frac{\mathbf{a}}{\lvert \mathbf{a} \rvert } = \frac{(l,m,n)}{\sqrt{ l^{2}+m ^{2} +n^{2} }} \tag{4.3}
$$
de donde se demuestra fácilmente que
$$
\begin{align}
\cos \alpha = \mathbf{i\cdot u}, \quad \cos \beta = \mathbf{j\cdot u}, \quad \cos \gamma = \mathbf{k\cdot u} \tag{4.4} \\[1em] 
\mathbf{u} = (\cos \alpha,\cos \beta,\cos \gamma) \tag{4.5} \\[1em]
\cos ^{2}\alpha +\cos ^{2}\beta + \cos ^{2} \gamma = 1 \tag{4.6}
\end{align}
$$

### Discusión Recta: forma simétrica
**5.** La relación vectorial y algebraica nos permite describir a la recta de varias formas puramente analíticas. De acuerdo con las [[Espacio Euclidiano Tridimensional|ecuaciones paramétricas]] de la recta tenemos
$$
\begin{align}
\mathbf{P} = \mathbf{P_{0}} + t\mathbf{a} \\[1em]
\frac{x-x_{0}}{a_{1}}=\frac{y-y_{0}}{a_{2}} = \frac{z-z_{0}}{a_{3}} \tag{5.1}
\end{align}
$$
con $a_{1},a_{2},a_{3} \neq 0$, esta es la llamada **ecuación simétrica**.




[[Distancia de un punto a una recta]]
[[Distancia entre dos rectas cruzadas]]