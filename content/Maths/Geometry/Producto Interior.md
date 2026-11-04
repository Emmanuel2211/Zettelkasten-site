---
modified: 2026-09-14T16:44:57Z
publish: true
type: atomic-note
status: done
links:
  - "[[Geometria Euclidiana]]"
tags:
date: 2026-03-15
aliases:
  - a ⋅ b
---
TARGET DECK: Geometria

# Discusión: Producto Interior

De nuestra definición de [[Ortogonalidad|ortogonalidad]] se afirma que:
$$
\lvert \mathbf{a} + \mathbf{b} \rvert ^{2} - \lvert \mathbf{a} - \mathbf{b} \rvert ^{2} = 0. \tag{1.1}
$$
Como
$$
\begin{align}
\lvert \mathbf{a} + \mathbf{b} \rvert ^{2} - \lvert \mathbf{a} - \mathbf{b} \rvert ^{2} &= \sum_{k=1}^n (a_{k}+b_{k})^{2} - \sum_{k=1}^n (a_{k}-b_{k})^{2} \tag{1.2} \\[1em]
&= 4 \sum_{k=1}^n a_{k}b_{k} \tag{1.3}
\end{align}
$$
Por lo que, que $\mathbf{a}$ y $\mathbf{b}$ sean ortogonales es $\equiv$ a que (1.3) $=0$. Dado la importancia de esta expresión la definimos como:

**1. Teorema (Producto Escalar y propiedades)**  #flashcard
Para $x,y \in \mathbb{R}^n$, lease "a punto b", $\mathbf{a} \cdot \mathbf{b}$ está definido por
$$
\mathbf{a} \cdot \mathbf{b} = \sum_{k=1}^n a_{k}b_{k} = a_{1}b_{1} + \dots + a_{n}b_{n}.
$$
donde $\mathbf{a} = (a_{1},\dots,a_{n})$ y $\mathbf{b} = (b_{1},\dots,b_{n})$.
Nótese que no es un vector.
Dicho ésto, ahora podemos enunciar la proposición [[Ortogonalidad|(2.2)]].
**1.1 Teorema.** (Propiedades del producto interior)
$$
\begin{align}
\mathbf{a} \cdot \mathbf{b} &= \mathbf{b} \cdot \mathbf{a} \tag{2.2} \\[1em]
(r\mathbf{a})\cdot \mathbf{b} &= r(\mathbf{a}\cdot \mathbf{b}) \tag{2.3} \\[1em]
\mathbf{a} \cdot (\mathbf{b}_{1}+\mathbf{b}_{2}) &= \mathbf{a} \cdot \mathbf{b}_{1} + \mathbf{a} \cdot \mathbf{b}_{2} \tag{2.4} \\[1em]
\mathbf{a} \cdot \mathbf{a} &\geq 0 \ ; \quad \mathbf{a} \cdot \mathbf{a} = 0 \iff \mathbf{a} = \mathbf{0} \tag{2.5}
\end{align}
$$
Observamos que (2.5) es una reformulación de [[Ortogonalidad|(1.2)]] ya que
$$
\mathbf{a} \cdot \mathbf{a} = \sum_{k=1}^n a_{k}^{2} = \lvert a \rvert ^{2} \tag{2.6}
$$
<!--ID: 1775159208214-->




# Summary
- Producto punto
	- Propiedades
- Otra definición del producto interior





