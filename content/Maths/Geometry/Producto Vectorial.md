---
modified: 2026-04-09T02:22:34Z
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

TARGET DECK: Geometria

### Definición. Producto Vectorial o Cruz #flashcard
El **producto vectorial** de dos vectores $\mathbf{a,b}$ de $V_{3}$, denotado por $\mathbf{a \times b}$ es un **nuevo vector** definido por
$$
\mathbf{u} \times \mathbf{v} = \begin{vmatrix}
\mathbf{i} & \mathbf{j } & \mathbf{k} \\
u_{1}  & u_{2} & u_{3} \\
v_{1} & v_{2} & v_{3}
\end{vmatrix} = (u_{2}v_{3}-u_{3}v_{2})\mathbf{i}-(u_{1}v_{3}-u_{3}v_{1})\mathbf{j}+(u_{1}v_{2}-u_{2}v_{1})\mathbf{k}
$$
El vector $\mathbf{u\times v}$ tiene las propiedades:
- Es ortogonal tanto a $\mathbf{u}$ como a $\mathbf{v}$
- Su magnitud es igual al **área del paralelogramo** que forman $\mathbf{u}$ y $\mathbf{v}$ $$\lvert \mathbf{u\times v} \rvert = \lvert \mathbf{u} \rvert\lvert \mathbf{v} \rvert \sin \theta$$
- $\mathbf{u\times v}= \mathbf{0} \iff \mathbf{u}\parallel \mathbf{v}$ ($\sin 0^\circ = 0$)
#### Teorema.
Para cualquier par de vectores en $\mathbb{R}^{3}$
$$
\mathbf{u}\cdot(\mathbf{u\times v}) = \mathbf{0} \ \ \ \text{ y } \ \ \ \mathbf{v}\cdot(\mathbf{u\times v})=\mathbf{0}
$$
<!--ID: 1775701227558-->



[[Volumen del paralelepípedo]]
[[Identidad de Lagrange]]

