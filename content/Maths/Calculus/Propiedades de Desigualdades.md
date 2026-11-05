---
modified: 2026-08-18T17:26:52Z
title: "Resultados de los Axiomas de Orden"
publish: true
type: zettel
date: "2026-06-17"
aliases:
tags: 
 - calculus
cssclasses: 
 - romana
---
Observamos inmediatamente de los axiomas de orden<sup><a href="#user-content-fn-inline-1" id="user-content-fnref-inline-1" data-footnote-ref class="internal">1</a></sup>, si $a,b \in \mathbb{R}$ y $P = \mathbb{R}^+$ entonces se verifica una sola de las siguientes propiedades:
$$
\begin{align}
a-b = 0 \\
a-b \in P \\
-(a-b)= b-a \in P
\end{align}
$$
Es decir, se demuestra la *tricotomía*.

---

#### Propiedades de Desigualdades
Sean $a,b,c,d \in \mathbb{R}$ 
*(Tricotomía)*
$$
a = b \quad \lor \quad a<b \quad \lor \quad b>a
$$
*(Conservación de la desigualdad para la suma)*
$$
a < b \implies a+c < b+c
$$

> [!proof]- **Proof.** 
> 

*(Transitividad)*
$$
a < b \land b<c \implies a <c
$$

> [!proof]- **Proof.** 

*(Leyes de los signos)*
$$
a < 0 \land b < 0 \implies ab >0
$$
$$
a < 0 \land b > 0 \implies ab < 0
$$
$$
a^{2} > 0 , \text{ si } a \neq 0
$$
y $1 >0$ pues $1 = 1^{2}$.

> [!proof]- **Proofs.** 

*(Suma de desigualdades)*
$$
a < b \land c < d \implies a + c < b + d
$$
*(Resta de desigualdades cruzadas)*
$$
 a< b \land c > d \implies a - c < b -d
$$

> [!proof]- **Proof.** 

*(Cambio de signo)*
$$
a < b \implies - b < -a
$$

> [!proof]- **Proof.** 

*(Conservación de la desigualdad para el producto)*
$$
a < b \land c >0 \implies ac < bc
$$
caso especial,
*(Conservación y cambio signo del cuadrado)*
$$
a >1 \implies a^{2} > a
$$
$$
0 < a < 1 \implies a^{2} < a
$$

*(Cambio de signo del producto)*
$$
a < b \land c < 0 \implies ac > bc
$$


> [!proof]- **Proofs.** 

*(Producto de dos desigualdades)*

$$
0\leq a < b \land 0 \leq c < d \implies ac<bd
$$

> [!proof]- **Proof.** 

*(Conservación de desigualdades para potencias)*
Sean $a,b \geq 0$
$$
a < b \iff a^{2} < b^{2}
$$
En general,
$$
0\leq x < y \implies x^n < y ^n
$$
> [!proof]- **Proofs.** 

*(Cambio de signo para potencias)*
$$
(x < y) \land n \text{ es impar} \implies x ^n < y ^n
$$

$$
(x^n = y ^n) \land n \text{ es impar }  \implies x = y
$$

$$
(x^n = y^n) \land \text{ n es par } \implies x = y \lor x = -y
$$

> [!proof]- **Proof.** 





$$
\begin{align}
\mathbf{1.} \quad &  \ a < b \ \ \text{ y } \ \  c < d \implies a + c < b + d \\[1em]
\mathbf{2.} \quad &  \ a < b \ \ \text{ y } \ \ c < 0 \implies ac > bc \\[1em]
\mathbf{2.1} \quad &  \ a < b \ \ \text{ y } \ \ c>0 \implies ac < bc \\[1em]
\mathbf{3.} \quad & a < b \iff a + c < b + c \\[1em]
\mathbf{4.} \quad & \text{Si } \ a,b   \ \text{ tienen mismo signo:}  \ \  a < b \iff \frac{1}{b} < \frac{1}{a} \\[1em]
\mathbf{5.} \quad & \text{Si } 0 \leq a < b,  \text{ n > 0} \implies a^n<b^n \land \sqrt[n]{ a }<\sqrt[n]{ b } \\[1em]
\mathbf{6.} \quad & n^{2} \geq n. \\[1em]
\end{align}
$$

Después de la discusión del valor absoluto, nos vamos con desigualdades de forma amplia<sup><a href="#user-content-fn-inline-2" id="user-content-fnref-inline-2" data-footnote-ref class="internal">2</a></sup>

<section data-footnotes class="footnotes"><h2 class="sr-only" id="footnote-label">Notas</h2>
<ol>
<li id="user-content-fn-inline-1">

[[Estructura de Orden]] <a href="#user-content-fnref-inline-1" data-footnote-backref class="data-footnote-backref internal">↩</a>

</li>
<li id="user-content-fn-inline-2">

[[Desigualdades]] <a href="#user-content-fnref-inline-2" data-footnote-backref class="data-footnote-backref internal">↩</a>

</li>
</ol>
</section>
