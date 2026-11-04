---
modified: 2026-10-02T23:27:54Z
title: "Teorema de Lagrange"
publish: true
type: zettel
date: "2026-08-21"
status: undone
aliases:
tags:
 - calculus
cssclasses: 
 - romana
---
> El *Teorema de Lagrange* o *Teorema de Valor Medio* establece que, bajo ciertas condiciones de continuidad y derivabilidad, existe un punto en el intervalo donde la derivada coincide con la tasa de cambio promedio.

> [!theorem] **Teorema.** (T.V.M.)
> Sea $f$ una funcíon continua en $[a,b]$ y derivable en $(a,b)$, Ent. $\exists c \in (a,b)$ tq.
> $$
> f'(c) = \frac{f(b)-f(a)}{b-a}
> $$


> [!theorem] **Teorema.** (Teorema de Rolle)
> Sea $f$ una función continua en $[a,b]$ y derivable en $(a,b)$ y supóngase que $f(a) = f(b)$. Ent. $\exists c \in (a,b)$ tq. $f'(c)=0$.






> [!tip]- **Idea.**
> En algún punto $c$, el area bajo la curva es igual al area del rectangulo que se forma con $f(c)$ y $b-a$


> [!theorem] **Teorema.** (Teorema del Valor Medio para Integrales)
> Sea $f: [a,b] \to  \mathbb{R}$ continua. Entonces existe $c \in  [a,b]$ tal que
> $$
> f(c) (b-a ) = \int_{a}^{b} f(x) \, dx 
> $$

Tambíen conocido como el *Teorema del Valor Promedio*.

> [!proof]- **Proof.**
> Por $(iii)$ del Teorema anterior, $\displaystyle m(b-a) \leq  \int_{a}^{b} f(x) \, dx \leq  M(b-a)$ donde $m = \underset{[a,b]}{\inf \left\{f\right\} }= \underset{[a,b]}{\min \left\{f\right\} } = f(x_{0})$ para algún $x_{0} \in  [a,b]$,
> $M = \underset{[a,b]}{\sup \left\{f\right\} }= \underset{[a,b]}{\max \left\{f\right\} } = f(y_{0})$ para algún $y_{0} \in  [a,b]$,
> Así, 
> $$
> \displaystyle  f(x_{0}) \leq  \frac{1}{(b-a)}\int_{a}^{b} f(x) \, dx \leq  f(y_{0})
> $$
> Así, por el *Teo del Valor Intermedio* existe $c \in  [a,b]$ tal que
> $$
> \begin{align}
> f(c) = \frac{1}{b-a}\int_{a}^{b} f(x) \, dx .\\[0.5em]
> \to  f(c) (b-a) = \int_{a}^{b} f(x) \, dx \tag*{$\blacksquare$}
> \end{align}
> $$


> [!tip]- **Idea.**
> Representa un promedio ponderado. La función $g(x)$ le asigna mayor "importancia" a ciertas zonas del intervalo


> [!theorem] **Teorema** (Teorema del Valor Medio Ponderado)
> Sean $f,g$ continuas en $[a,b]$ . Si $g$ nunca cambia de signo en $[a,b]$ entonces, $\exists c \in [a,b]$ tal que
> $$
> \int_{a}^{b} f(x)g(x) \, dx = f(c) \int_{a}^{b} g(x) \, dx
> $$
