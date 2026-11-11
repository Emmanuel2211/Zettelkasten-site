---
modified: 2026-09-12T15:54:53Z
title: "Límites Infinitos"
publish: true
type: zettel
date: 2026-09-12
status: undone
aliases:
tags:
  - calculus
cssclasses:
  - romana
---
> [!theorem] **Definición.** (Limite $x \to \pm\infty$ es $\infty$)
>
> Diremos que $\displaystyle\lim_{ x \to \infty } f(x) = \infty$ si
> $$
> \forall  M > 0 \ \exists  N \  (x > N \implies f(x ) > M)
> $$
> Además, $\displaystyle \lim_{ x \to -\infty } f(x) = \infty$
> $$
> \forall  M > 0 \ \exists  N \  (x < N \implies f(x ) > M)
> $$



> [!theorem] **Teorema.** (Operaciones con Límites Infinitos)
>
> Sean $f$ y $g$ funciones tales que $\displaystyle  \lim_{x \to a} f(x) = \infty$ y $\displaystyle \lim_{x \to a} g(x) = c$ donde $c \in  \mathbb{R}$, entonces
> 1. Suma con constante:
> $$
> \lim_{x \to a} \left[ f(x) + g(x)  \right] = \infty
> $$
> 2. Producto con constante: 
> Si $c >0$, entonces
> $$
> \lim_{x \to a} \left[f(x)  g(x)\right] = \infty
> $$
> Si $c < 0$, entonces
> $$
> \lim_{x \to a} \left[f(x)  g(x)\right] = -\infty
> $$


> [!observation]+ **Observación.** (Indeterminaciones)
>
> No se pueden utilizar los teoremas del álgebra de límites para las siguientes indetermidaciones, pues no se cumplen las hipotesis:
> - $\frac{0}{0}$ o $\frac{\infty}{\infty}$ : Se utiliza L'Hôpital.
> - $0 \cdot \infty$ : Falla el teorema del producto, se arrregla pasando $1$ al denominador y se pasa a la forma $\frac{0}{0}$.
> - $\infty - \infty$ : Falla el teorema de la suma, se arregla sumando fracciones o multiplicando por el conjugado.
> - $1^{\infty}$, $0^{0}$ y $\infty^{0}$ : Falla el teorema de la potencia continua, se arregla usando "trucos de logaritmos" y se pasa a la forma $0 \cdot \infty$.