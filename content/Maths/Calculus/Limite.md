---
modified: 2026-10-20T23:23:34Z
title: "Limite"
publish: true
type: zettel
date: "2026-07-10"
aliases:
 - Limites
tags: 
 - calculus
cssclasses: 
 - romana
---
Lo siguiente es el desarrollo de una noción intuitiva de la definición de límite, la **proximidad**: 

> Se dice que la función $f$ se aproxima al límite $l$ cerca de $a$, si $f(x)$ se aproxima tanto como se quiera a $l$ si $x$ se aproxima suficientemente a $a$ pero es distinto de $a$.

![[Screenshot_20260819-205555.png|center|249]]

Entonces proponemos un $\varepsilon$, una distancia próxima a $l$, y para ese $\varepsilon$ deberíamos encontrar una distancia $\delta$ en el eje $X$ que la valide.

> [!theorem] **Def.** (Limite $\varepsilon - \delta$)
>
> La función $f$ **tiene hacia el límite** $l$ en $a$, si para todo $\varepsilon >0$ existe algún $\delta >0$ tal que, para todo $x$, si $0<\lvert x-a \rvert< \delta$, entonces $\lvert f(x)-l \rvert<\varepsilon$.
> 
> O de forma más directa:
>$$
> \forall \varepsilon > 0 \ \exists \delta > 0 \ \ \text{ tal que } \ \ \forall x (0 < \lvert x - a \rvert < \delta \implies \lvert f(x) - l \rvert < \varepsilon).
> $$

Además, este límite es **único**.

> [!note]-
>
> We would rarely use the definition to compute a limit, and we hope seldom to use the definition to verify one; we will use the definition to develop a theory that will verify limits for us.

> [!example]- **Example 1.**
>
> Any function $f(x) = ax + b$ will have the easily predicted limit
> $$
> \lim_{ x \to x_{0} }  f(x) = \lim_{ x \to x_{0} } (ax+b) = ax_{0} + b
> $$
> Let us do this for the linear function $f(x) = 10x - 11$. We expect that
> $$
> \lim_{ x \to 5 } (10x -11) = 10(5) -11 = 39
> $$
> Let us *prove* this. We need a condition ensuring that the expression
> $$
> \lvert (10x-11)-39 \rvert 
> $$
> is smaller than $\varepsilon$. Some arithmetic converts this to
> $$
> \lvert (10x-11)-39 \rvert = \lvert 10x -50 \rvert  = \lvert 10 \rvert \lvert x-5 \rvert 
> $$
> Now it is clear that, if we insist that $\lvert x-5 \rvert< \varepsilon / 10$, we will have
> $$
> \lvert (10x -11)-39 \rvert < \varepsilon \tag*{$\blacksquare$}
> $$
> Better, though, would be to write it in a more straightforward manner that obscures how we did it but gets to the point of the proof more simply:
> 
> **Proof.**
> Let $\varepsilon>0$. Let $\delta = \varepsilon / 10$. Then for all $x$ with $\lvert x-5 \rvert<\delta$ we have
> $$
> \lvert (10x -11)-39 \rvert = \lvert 10 \rvert \lvert x-5 \rvert < 10\delta = \varepsilon
> $$
> By definition, $\displaystyle\lim_{ x \to 5 }(10x-11)=39$ as required. **Q.E.D.**

> [!theorem] **Teorema** (Álgebra de Limites)
>
> Sean $f, g$ funciones tales que $\displaystyle\lim_{ x \to a }f(x) = L$ y $\displaystyle\lim_{ x \to a }g(x) = M$ donde $L, M \in \mathbb{R}$
> 1. 
> $$
> \lim_{x \to a} k = k
> $$
> 1.
> $$
> \lim_{x \to a} c \cdot f(x) = cL
> $$
> 2. 
> $$
> \lim_{x \to a} \left[ f(x) \pm g(x) \right]  =  L \pm M
> $$
> 3.
> $$
> \lim_{x \to a} (f(x)g(x)) = L \cdot M
> $$
> 4. Si $M \neq 0$, entonces
> $$
> \lim_{ x \to a } \frac{f(x)}{g(x)} = \frac{L}{M}
> $$


> [!observation]+ **Observación.**
>
> Podemos generalizar los puntos $(ii)$ y $(iii)$, de tal forma que si $f_{1},\dots,f_{n}$ son funciones de $I\to \mathbb{R}$ cada una con límite $L_{1},\dots,L_{n}$ en $x_{0}$, entonces
> $$
> \begin{align}
>   \lim_{x \to x_{0}} (f_{1}+\dots+f_{n})(x) &= L_{1}+\dots+L_{n}\\[0.5em]
>   \lim_{x \to x_{0}} (f_{1}\cdot \dots \cdot f_{n})(x) &= L_{1} \cdot \dots \cdot L_{n}
> \end{align}
> $$

> [!theorem] **Teorema.** (Sandwich de Límites)
>
> Sean $f,g,h: A\to \mathbb{R}$ y sea $x_{0} \in A$. Si $f(x) \leq g(x) \leq  h(x)$, para todo $x \in  A, x\neq  x_{0}$, y si $\displaystyle \lim_{x \to x_{0}} f(x)= L$ y $\displaystyle \lim_{x \to x_{0}} h(x) = L$, entonces
> $$
> \lim_{x \to x_{0}} g(x) = L
> $$

> [!proof]- **Proof.**
>


> [!theorem] **Teorema.** (Límite de V.A.)
>
> Sea $f: A \to  \mathbb{R}$ y sea $\displaystyle \lim_{x \to x_{0}} f(x)=L$, entonces
> $$
> \lim_{x \to x_{0}} \left| f(x) \right| = \left| L \right|
> $$
>

> [!proof]- **Proof.**


> [!theorem] **Teorema.** (Límite de la Composición) (Continudad)
>
> Si $\displaystyle  \lim_{x \to a} g(x) = L$ y sea $f$ función continua en $L$, entonces
> $$
> \lim_{x \to a} f(g(x)) = f(\lim_{x \to a} g(x)) = f(L)
> $$

> [!proof]- **Proof.**

> [!theorem] Teorema. (Conservación de Desigualdades en el Límite)
>
> Sean $f$ y $g$ dos funciones tales que sus límites cuando $x \to a$ existen.
> Si existe vecindad alrededor de $a$ donde se cumple que $f(x) \leq g(x)$ (para todo $x \neq a$), entonces sus límites heredan la desigualdad. 
> $$
> \displaystyle \lim_{x \to a} f(x) \leq  \lim_{x \to a} g(x)
> $$

> [!proof]- **Proof.**
