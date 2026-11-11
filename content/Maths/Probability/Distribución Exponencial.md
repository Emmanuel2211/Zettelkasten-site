---
modified: 2026-11-03T17:17:52Z
title: "V.A. Exponencial"
publish: true
type: zettel
date: "2026-09-01"
status: undone
aliases:
 - Variable Aleatoria Exponencial
tags:
 - probability
cssclasses:
 - romana
---
> [!theorem] **Definición.**
>
> Sea $X \sim \operatorname{exp} (\lambda)$ con $\lambda>0$, con función de distribución,
> $$
> f_{X}(x) = \lambda e^{-\lambda x} \cdot \mathbb{1}(x)_{[0,\infty)}
> $$
> donde observamos que el soporte es $\operatorname{supp}(X) = [0,\infty)$.

> [!proof]- **Proof.**
>
> Claramente es función de distribución, pues es claro que
> $$
> \forall x \in \mathbb{Z} \ \ f_{X}(x) = \lambda e ^{-\lambda x} \mathbb{1}_{[0,\infty)}(x) \geq 0
> $$
> Además,
> $$
> \begin{align}
> \int_{\mathbb{R}} f_{X}(x) \, dx &= \int_{-\infty}^{0} 0 \, dx + \int_{0}^{\infty} \lambda e^{-\lambda x} \, dx \\[0.5em]
>  &= - e ^{-\lambda x} \bigg|_{0}^{\infty} = - (0 - 1) = 1
> \end{align}
> $$

![[Pasted image 20261030092032.png|center|350]]


> [!example]+ Ejemplos.
>
> 1. Un estudiante debe llegar a un examen a las 9:00 am y sabe que el tiempo que le toma llegar a la facultad de un v.a. $X \sim \exp \left(\lambda\right)$ de parámetro $\lambda = 1$ en horas.
> Si sale a las 8 am de su casa, cuál es la proba de que llegue a tiempo a su examen.
> Queremos encontrar $P[X \leq 1] = P[X \in (-\infty, 1]]$, esto es
> $$
> \int_{0}^{1} 1e^{-x} \, dx = -e ^{-x} \bigg|_{0}^{1} = -(e^{-1} - e^{0}) = 0.6321
> $$
> 2. El tienmpo de llegada de un auto de una una ciudad $A$ a la ciudad $B$ se modela con una v.a.c. $X \sim  \operatorname{Exp} (\frac{1}{3})$ en horas, calcule la proba de que llegue entre $1$ y $4$ horas.
> $$
> P[X \in [1,4]] = \frac{1}{3} \int_{1}^{4}  e^{-(\frac{1}{3}) x} \, dx
> $$
> Pero conveince seprarla $P[X\in [1,4]] = P[X \leq  4] - P[X\leq 1]$ si es que ya conocemos la función de distribución $F_{X}(x)$, así, solo evaluamos y restamos jaja.

> [!theorem] **Teorema.** (Propiedades)
>
> Sea $X \sim \operatorname{Exp} (\lambda)$,
> 1. $\displaystyle \operatorname{E} (X) = \frac{1}{\lambda}$
> 2. $\displaystyle \operatorname{Var} (X) = \frac{1}{\lambda^{2}}$

> [!proof]+ **Proof.**
>
> 1. $\displaystyle \operatorname{E} (x) = \int_{-\infty}^{\infty} x\lambda e^{-\lambda x} \, dx = \lambda \int_{0}^{\infty} xe^{-\lambda x} \, dx$ usando $u = x \implies du = dx$
> y $dv = e^{-\lambda x} \implies  v = \frac{-1}{\lambda}e^{-\lambda x}$. Así
> $$
> \begin{align}
>    &= \lambda \left[ -x \frac{1}{\lambda} e ^{-\lambda x} \bigg|_{0}^{\infty}   - \int_{0}^{\infty} - \frac{1}{\lambda} e ^{-\lambda x} \, dx\right] \\[0.5em]
>    &= \lambda \left[ 0 + \int_{0}^{\infty} \frac{1}{\lambda}e^{-\lambda x} \, dx  \right] = \int_{0}^{\infty} e^{-\lambda x} \, dx \\[0.5em]
>  &= \frac{-1}{\lambda} e^{-\lambda x} \bigg|_{0}^{\infty} = -\left[ 0 - \frac{1}{\lambda}  \right] = \frac{1}{\lambda} \tag*{$\blacksquare$}
> \end{align}
> $$
> 2. $\displaystyle \operatorname{Var} (X) = \operatorname{E} (X^{2}) - \operatorname{E}^{2} (X)$ y tenemos que el segundo momento es,
> $$
>   E(X^{2}) = \int_{-\infty}^{\infty} x^{2}e^{-\lambda x} \, dx = \lambda \int_{0}^{\infty} x^{2} e^{-\lambda x} \, dx
> $$
> integrando por partes con $u = x^{2} \implies  du = 2x \, dx$ y $dv = e^{-\lambda x} \implies v = \frac{1}{\lambda}e^{-\lambda x}$ Así,
> $$
> \begin{align}
> &= \lambda \left[ -x^{2} \frac{1}{\lambda} e^{-\lambda x} \bigg|_{0}^{\infty}   - \int_{0}^{\infty} - \frac{1}{\lambda} e^{-\lambda x} 2x \, dx\right] \\[0.5em]
> &= 0 + \frac{2}{\lambda} \int_{0}^{\infty} x \lambda e^{-\lambda x} \, dx = E(X) = \frac{2}{\lambda} \cdot \frac{1}{\lambda} = \frac{1}{\lambda^{2}} \tag*{$\blacksquare$}
> \end{align}
> $$


