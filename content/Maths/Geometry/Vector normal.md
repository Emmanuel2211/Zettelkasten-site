---
modified: 2026-11-09T14:41:45Z
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

### Definición. Vector normal 
Sea $\mathscr{L}$ una recta en $\mathbb{R}^{2}$ con vector director no nulo $\mathbf{a} = (a_{1},a_{2}$). Un vector $\mathbf{n} = (n_{1},n_{2})$ es normal a $\mathscr{L}$ si es ortogonal a $\mathbf{a}$, es decir
$$
\mathbf{n} \cdot \mathbf{a} = 0
$$
Es obvio que $\mathbf{n} = \mathbf{a}_{\perp}$
Porque $\mathbf{n} = (A,B)$?
#### Teorema. 
Dada la ecuación $Ax + By+C = 0$, el vector $\mathbf{n} = (A,B)$ es ortogonal a cualquier vector contenido en la recta.



Proof.
Sean $\mathbf{P_{1}}(x_{1},y_{1})$ y $\mathbf{P_{2}}(x_{2},y_{2})$ dos puntos distintos cualesquiera que pertenecen a $\mathscr{L}$. Entonces ambos satisfacen
$$
\begin{align} Ax_{1} + By_{1} + C &= 0 \tag{1} \\ Ax_{2} + By_{2} + C &= 0 \tag{2} \end{align}
$$
Restamos (1) y (2),
$$
\begin{align}
A(x_{2}​−x_{1}​)+B(y_{2}​−y_{1}​)=0 \\[1em]
(A,B)⋅(x_{2}​−x_{1}​,y_{2}−y_{1}​)=0 \\[1em]
(A,B)\cdot(\mathbf{P_{2}}-\mathbf{P_{1}}) = 0  \\[1em] 
\therefore \mathbf{n} \perp \mathscr{L}
\end{align}
$$











