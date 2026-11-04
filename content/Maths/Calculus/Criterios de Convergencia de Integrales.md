---
modified: 2026-10-01T18:52:44Z
title: "Criterios de Convergencia"
publish: true
type: zettel
date: "2026-09-01"
status: undone
aliases:
tags:
 - calculus
cssclasses:
 - romana
---
> $\displaystyle \square \ \int_{1}^{\infty} \frac{\cos(x^{3})}{x^{2}} \, dx$
> ¿Cómo podemos determinar que converge (o no)?

> [!theorem] **Teorema.** (Criterio 1)
> Supongamos que $f$ es no negativa e integrable en todo $[a,b]$, sea $\displaystyle y_{n} := \int_{a}^{n} f(x) \, dx$. Entonces,
> $$
> \int_{a}^{\infty} f(x) \, dx \text{ converge } \iff \{ y_{n} \} \text{ está acotada sup.}
> $$


> [!proof]- **Proof.**
> $(\impliedby)$
> $y_{n}\leq y_{n+1}$ porque $f$ es no negariva $\left( \int_{a}^{b} f \geq  0  \right)$ y $\displaystyle y_{n} = \int_{a}^{n} f(x) \, \leq  \int_{a}^{n} f(x) \, dx + \int_{n}^{n+1} f(x) \, dx = y_{n+1}$
> Así, $\{ y_{n} \}$ es creciente acotada por arriba por lo que converge a su supremo $(\alpha)$.
> Por esto, $\displaystyle \int_{a}^{\infty} f(x) \, dx = \lim_{n \to \infty} y_{n} = \alpha$
> $(\implies )$
> Si $\int_{a}^{\infty} f(x) \, dx$ converge es porque $\displaystyle  \lim_{b \to \infty} \int_{a}^{b} f(x) \, dx = \alpha$. Esto es,
> $$
> \forall \varepsilon > 0 \ \exists N \in  \mathbb{N} \left(n \geq N \implies \left| \int_{a}^{n} f(x) \, dx - \alpha  \right| < \varepsilon \right)
> $$
> Por desigualdad del triang.
> $$
> y_n = \int_{a}^{n} f(x) \, dx \leq 1 + \alpha  \quad \forall  n\geq N
> $$
> Para acotar $\{ y_{1},\dots, y_{N} \}$ tome su maximo ($M$). De esta forma $\{ y_{n} \}$ está acotado por $\max \left\{M, 1+\alpha \right\}$ con lo que se tiene el resultado 
> $$
> \tag*{$\blacksquare$}
> $$

- Es este criterio solo para integrales impriopias de 1ra clase?

> [!theorem] **Corolario.**
> Bajo las mismas hipótesis del Criterio 1,
> $$
> \int_{a}^{\infty} f(x) \, dx \text{ converge } \iff  \int_{a}^{b} f(x) \, dx \leq M \quad \forall  b>a
> $$


> [!theorem] **Teorema.** (Criterio 2)
> Sean $f,g: [a,\infty] \to \mathbb{R}$ no negativas tales que $f\leq g$, entonces,
> 1. Si $\displaystyle \int_{a}^{\infty} g(x) \, dx$ converge, también $\displaystyle \int_{a}^{\infty} f(x) \, dx$ converge.
> 2. Si $\displaystyle \int_{a}^{\infty} f(x) \, dx$ diverge, también $\displaystyle \int_{a}^{\infty} g(x) \, dx$ diverge.


> [!proof]+ **Proof.**
> Basta notar que $\displaystyle \int_{a}^{b} f(x) \, dx \leq  \int_{a}^{b} g(x) \, dx$ para todo $b>a$. 
> 1. Si $\displaystyle \int_{a}^{\infty} g(x) \, dx$ converge, por el corolario, $\displaystyle \int_{a}^{b} g(x) \, dx \leq M \quad \forall  b>a$
> Lo que implica, $\displaystyle \int_{a}^{b} f(x) \, dx \leq  M$, y por el Corolario 1, $\displaystyle \int_{a}^{\infty} f(x) \, dx$ converge. $\blacksquare$
> 2. Si $\displaystyle \int_{a}^{\infty} g(x) \, dx$ converge, por $(i)$ tendramos que $\displaystyle \int_{a}^{\infty} f(x) \, dx$ converge ! Lo cual es una contracción, por tanto diverge.


> [!theorem] **Teorema.** (Criterio 3)
> Si $\displaystyle\int_{a}^{\infty} \left| f(x) \right| \, dx$ converge, entonces $\displaystyle\int_{a}^{\infty} f(x) \, dx$ también converge.

> [!proof]+ **Proof.**
> Notese que $0\leq \left| f(x) \right| - f(x) \leq  2\left| f(x) \right|$. Definamos $F(x) = \left| f(x) \right| - f(x)$ y $G(x) = 2\left| f(x) \right|$
> Por el criterio 2 tenemos, $\int_{a}^{\infty} G(x) \, dx$ converge, ent. $\int_{a}^{\infty} F(x) \, dx$ converge.
> Además, para todo $b>a$ se cumple:
> $$
> \begin{align}
> \int_{a}^{b} f(x) \, dx &= \int_{a}^{b} f(x) -\left| f(x) \right| \, dx + \int_{a}^{b} \left| f(x) \right| \, dx \\[0.5em]
>  &= - \int_{a}^{b} F(x) \, dx + \int_{a}^{b} \left| f(x) \right| \, dx
> \end{align}
> $$
> Entonces al ser $\displaystyle \int_{a}^{\infty} F(x) \, dx$ y $\displaystyle \int_{a}^{\infty} \left| f(x) \right| \, dx$ convergentes, se concluye que $\displaystyle \int_{a}^{\infty} f(x) \, dx$ converge.


> [!example]- Ejemplo.
> $\square$ Pruebese que $\displaystyle \int_{1}^{\infty} \frac{\cos(x^{3})}{x^{2}} \, dx$ converge.
> **Demostración.**
> Observamos que $\displaystyle \left| \frac{\cos(x^{3})}{x^{2}} \right| \leq \frac{1}{x^{2}}$ para $x\geq 1$.
> Entonces, notamos que $\displaystyle \int_{a}^{\infty} \frac{1}{x^{2}} \, dx$ sí converge! (Demostrarlo en Tarea)
> Por el Criterio 2 $\displaystyle \int_{a}^{\infty} \left| \frac{\cos(x^{3})}{x^{2}} \right| \, dx$ existe y converge. Y por el Criterio 3, $\int_{a}^{\infty} \frac{\cos(x^{3})}{x^{2}} \, dx$ converge. $\blacksquare$


> [!theorem] **Teorema.** (Criterio 4)
> Sea $f$ una función no negativa definida en $[a,b]$ excepto quiza en $b$. Supongamos que $f$ es integrable en $[a,c] \quad \forall  c\in  (a,b)$. Sea $\{ x_{n} \}$ sucesión tal que $\displaystyle \lim_{n \to \infty} x_{n} = b$ con $(x_{n}\leq b\text{ monotona})$, y además, $\displaystyle y_{n} = \int_{a}^{x_{n}} f(x) \, dx$. Así, se tiene
> $$
> \int_{a}^{b} f(x) \, dx \text{ existe } \iff  \{ y_{n} \} \text{ están acotadas sup. }
> $$

- Observece que este criterio es para *integrales impropias de 2da clase*.
