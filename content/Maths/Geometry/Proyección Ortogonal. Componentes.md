---
modified: 2026-11-09T14:42:02Z
publish: true
---

### Teorema. (Proyección Ortogonal y Componente) 
Sea $\mathbf{u}, \mathbf{v} \in V_{n}$ con $\mathbf{v} \neq \mathbf{0}$. La **proyección** de $\mathbf{u}$ sobre $\mathbf{v}$ es el vector
 $$
 \text{Proy}_{\mathbf{v}}\mathbf{u} = \frac{\mathbf{u}\cdot \mathbf{v}}{\lvert \mathbf{v} \rvert ^{2}} \cdot \mathbf{v}
 $$
 La proyección de $\mathbf{u}$ sobre $\mathbf{v}$ puede escribirse en la forma
 $$
 \text{Proy}_{\mathbf{v}}\mathbf{u} = \frac{\mathbf{u}\cdot \mathbf{v}}{\lvert \mathbf{v} \rvert} \cdot \frac{\mathbf{v}}{\lvert \mathbf{v} \rvert }
 $$
Como $\frac{\mathbf{v}}{\lvert \mathbf{v} \rvert}$ es el unitario de $\mathbf{v}$, observamos que la **componente** de $\mathbf{u}$ en la dirección de $\mathbf{v}$ es
$$ 
 \text{Comp}_{\mathbf{v}}\mathbf{u} = \frac{\mathbf{u}\cdot \mathbf{v}}{\lvert \mathbf{v} \rvert} \tag{1.1}
$$
Ésta representa la "magnitud dirigida". Otros autores los distinguen como "componente vectorial" o "componente escalar".
El siguiente desarrollo introduce una interpretación geométrica del producto punto:
$$
\mathbf{u \cdot v} = \lvert \mathbf{v} \rvert \text{Comp}_{\mathbf{v}}\mathbf{u} \tag{1.2}
$$
Además, en el espacio se nota que
$$
\text{Comp}_{\mathbf{v}}\mathbf{u} = \lvert \mathbf{u} \rvert \cos \theta, \tag{1.3}
$$
donde $\theta$ es de $\mathbf{v}$ a $\mathbf{u}$, y por lo tanto,
$$
\begin{align}
\mathbf{u\cdot v} &= \lvert \mathbf{u} \rvert \lvert \mathbf{v} \rvert \cos \theta \tag{2} \\[1em]
\cos \theta &= \frac{\mathbf{u\cdot v}}{\lvert \mathbf{u} \rvert \lvert \mathbf{v} \rvert }. \tag{2.1}
\end{align}
$$



De aquí podemos proceder a alguna demostración para la [[Desigualdad de Cauchy-Bunyakovsky-Schwarz|desigualdad de Cauchy]] y la [[Desigualdad del Triangulo|desigualdad triangular]].












