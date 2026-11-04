---
modified: 2026-03-29T00:02:58Z
publish: true
type: zettel
status: 
links: 
tags: []
date: "2026-03-28"
aliases: [ "" ]
cssclasses: romana
materia: 
---
TARGET DECK: Combinatoria

**Teorema.** (del binomio) #flashcard 
Si $n \in \mathbb{N}^+$ y $a,b \in \mathbb{R}$, entonces
$$
\begin{align}
(a+b)^n &= \begin{pmatrix}
n \\
0
\end{pmatrix}a^n + \begin{pmatrix}
n \\
1
\end{pmatrix}a^{n-1}b + \begin{pmatrix}
n \\
2
\end{pmatrix}a^{n-2}b_{2}+\dots+\begin{pmatrix}
n \\
n
\end{pmatrix}b^n \\[1em]
&= \sum_{k=0}^n \begin{pmatrix}
n \\
k
\end{pmatrix}a^{n-k}b^k.
\end{align}
$$
<!--ID: 1774742578264-->


Proof.
