---
modified: 2026-10-18T23:55:43Z
title: "Distribución de Poisson"
publish: true
type: zettel
date: "2026-09-01"
status: undone
aliases:
tags:
 - probability
cssclasses:
 - romana
---
> [!tip|idea]- **Idea Intuitiva.**
>
> Sup. que queremos saber el núm. de ocurrencias de un evento en cierto lapso de tiempo determinado. Podemos definir $X$ v.a. como el núm. de ocurrencias en el intervalo de tiempo dado. Es claro que $X$ puede tomar valores $0,1,2,\dots$ y en principio, no acotamos estos valores. Además, sup. que la conocemos la tasa media de ocurrencias, denotado $\lambda$. El parámetro $\lambda$ es positivo y se interpreta como el núm. promedio de ocurrencias del evento por unidad de tiempo o espacio. 

> [!theorem] **Definición.** ($\operatorname{Poisson} (\lambda )$)
>
> Decimos que $X$ tiene distrib. de Poisson con parámetro $\lambda >0$, i.e. $\operatorname{Poisson} (\lambda )$, si la probabilida de que $X$ tome un valor entero $x\geq 0$ es:
> $$
> f(x) = \begin{cases}
>   \displaystyle e^{-\lambda }\frac{\lambda ^{x}}{x!} & x = 0,1,2,\dots \\[0.5em]
>   0 & \text{en otro caso } 
> \end{cases}
> $$

> [!theorem] **Teorema.** (Propiedades)
>
> Sea $X \sim \operatorname{Piosson} (\lambda)$
> 1. $\operatorname{E} (X) = \lambda$
> 2. $\operatorname{Var} (X) = \lambda$


La distrib. de Poisson tiene teoremas muy útiles en su práctica.

> [!theorem] **Teorema.** 
>
> Sean $X, Y$ v.a. indep. con distribución $\operatorname{Piosson} (\lambda_{1})$ y $\operatorname{Piosson} (\lambda_{2})$, respectivamente. Ent.
> $$
> X + Y \sim \operatorname{Piosson} (\lambda_{1} + \lambda_{2})
> $$

> [!proof]- **Proof.**
