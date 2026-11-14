---
modified: 2026-11-13T23:34:20Z
title: "Subsucesiones"
publish: true
type: zettel
date: "2026-09-01"
status: seed
aliases:
tags:
 - calculus
cssclasses:
 - romana
---
> [!example]- Ejemplos.
>
> $\displaystyle \{ x_{n} \} = \{ n \} = 1,2,3,\dots \text{ y } \{ y_{n} \} = 1,3,5,\dots$ Y observamos que $y_{1} = x_{1}; \ y_{2} = x_{3}; \ y_{3} = x_{5}\dots$ Así, $y_{n}$ es una subsucesión de $x_{n}$.
>
> $\displaystyle \{ x_{n} \} = \{ n \} \text{ y } \{ y_{n} \} = \{ x_{n} \}_{4}^{\infty} = 4,5,6,\dots$ Y observamos que $y_{1} = x_{4}; \ y_{2} = x_{5}; \ y_{3} = x_{6}\dots$ Así, $y_{n}$ es subsucesión de $x_{n}$.
>
> $\displaystyle \{ y_{k} \} = 1,3,5,7,\dots$ es subsucesión de $\{ x_{n} \} = \{ n \}$
>
> $\displaystyle \{ y_{k} \}_{1}^{\infty} = 16,64,144,\dots$ es subsucesión de $\{ n^{2} \} = \{ x_{n} \}$ en donde 
> $y_{1} = x_{4} \quad y_{2} = x_{8} \ \ \dots \ \  y_{k} = x_{4k}$.
>
> $\displaystyle \{ x_{n+n_{0}} \}_{n=1}^{\infty} = \{ x_{n} \}_{n=n_{0}+1}^{\infty}$ es subsucesión de $\{ x_{n} \}$ (quitarle los primeros $n_{0}$ términos), con $n_{k} = k + n_{0}$.
>
> $\displaystyle \{ y_{k} \} = (1,8,6,2,3)$ no es subsucesión de $\{ n \} = \{ x_{n} \}$: es finita y sus términos no respetan el orden de $\{ x_{n} \}$ ($8$ va antes que $6$).


> [!tip|idea]- **Idea Intuitiva.**
>
> Una subsucesión se obtiene **tachando términos** de $\{ x_{n} \}$, pero:
> 1. Nos quedamos con una infinidad de términos.
> 2. No cambiamos el orden: no repetimos ni regresamos a un término anterior.
>
> Las posiciones que conservamos son $n_{1}<n_{2}<n_{3}<\dots$, y el $k$-ésimo término de la subsucesión es el que estaba en la posición $n_{k}$, i.e. $y_{k} = x_{n_{k}}$.

> [!theorem] **Definición.** (Subsucesión)
>
> Una sucesión $\{ y_{k} \}$ es una **subsucesión** de $\{ x_{n} \}$ si existe una sucesión $\{ n_{k} \}_{k=1}^{\infty}$ de números naturales tales que $n_{1}<n_{2}<n_{3}<\dots$ y tal que $\forall k \in \mathbb{N} \ (y_{k} = x_{n_{k}})$

> [!example]- Ejemplo.
>
> En el ejemplo $\{ y_{k} \} = 16,64, 144,\dots$ Si es subsucesión de $\{ 4n \} = ( 4,8,12,16,\dots )$ ya que $4<8<12<16<\dots$ y se tiene $y_{1} = x_{4} \quad y_{2} = x_{16} \quad y_{3} = x_{64},\dots$. En este caso nuestra sucesión $\{ n_{k} \} = \{ 4^{k} \} = (4,16,64,\dots)$

> [!observation]+ **Observación.**
>
> $$
> \forall k \in \mathbb{N} \ (n_{k} \geq k)
> $$
>
> > [!proof]- **Proof.**
> >
> > Por inducción sobre $k$. Para $k = 1$: $n_{1} \in \mathbb{N}$, ent. $n_{1} \geq 1$.
> > Sup. $n_{k} \geq k$ (H.I.). Como $n_{k+1} > n_{k}$ y ambos son naturales, $n_{k+1} \geq n_{k} + 1 \geq k + 1$.
> > $$
> > \tag*{$\blacksquare$}
> > $$


