---
modified: 2026-11-13T23:34:20Z
title: "Teorema de Pappus"
publish: true
type: zettel
date: "2026-10-28"
status: seed
aliases:
tags:
 - calculus
cssclasses: 
 - romana
---
> [!theorem] **Teorema.** (Teorema de Pappus)
>
> Sea $\mathscr{C}$ la gráfica de una función $f:[a,b]\to \mathbb{R}^{+}$ con derivada continua y $a>0$, ó, $b<0$ (esta última condición es para 2., para que la curva no cruce el eje $Y$).
> 1. El área de la superficie de revolución al hacer girar $\mathscr{C}$ alrededor del eje $x$ es $\boxed{2\pi \bar{y} \ell (\mathscr{C})}$ donde $\bar{y}$ es la ordenada del centroide de $\mathscr{C}$.
> 2. Similarmente, el área de la superficie de rev. al hacer girar $\mathscr{C}$ alrededor del eje $Y$ es $\boxed{2\pi \left| \bar{x} \right| \ell(\mathscr{C})}$ donde $\bar{x}$ es la abscisa del centroide de $\mathscr{C}$ (si $a > 0$, simplemente $2\pi \bar{x} \ell(\mathscr{C})$).

> [!proof]- **Proof.**
>
> 1. Por [[Centros de Masa para Físicos]] (con densidad constante), $\displaystyle \bar{y} = \frac{\int_{a}^{b} f(x) \sqrt{1 + f'(x)^{2}}\, dx}{\ell_{\operatorname{graf} (f)}}$, ent.
> $$
> 2\pi \bar{y} \ell (\mathscr{C}) = 2\pi \frac{\displaystyle\int_{a}^{b} f(x) \sqrt{1 + { f'(x)^{2}}}\, dx}{\ell_{\operatorname{graf} (f)}} \cdot  \ell_{\operatorname{graf} (f)} = 2\pi \int_{a}^{b} f(x) \sqrt{1 + f'(x)^{2}}\, dx
> $$
> que es el área de la superficie (ver [[Solidos de Revolución]]).
> 2. Es análogo, con $\displaystyle \bar{x} = \frac{\int_{a}^{b} x \sqrt{1 + f'(x)^{2}}\, dx}{\ell_{\operatorname{graf} (f)}}$ y el área $\displaystyle 2\pi \int_{a}^{b} \left| x \right| \sqrt{1 + f'(x)^{2}}\, dx$.

> [!example]- Ejemplo.
>
> $\square$ Calcula el centroide del segmento de recta que genera un cono al hacerlo girar alrededor del eje $X$.
> Por el Teo. de Pappus y el área del cono $\pi r \ell$ (ver [[Solidos de Revolución]]), $2\pi \bar{y} \ell = \pi r \ell \implies  \bar{y} = \frac{r}{2}$
> Por semejanza de triángulos,
> $$
> \frac{\bar{x}}{\sqrt{\ell^{2} - r^{2}}} = \frac{\frac{r}{2}}{r} \implies  \bar{x} = \frac{\sqrt{\ell^{2} - r^{2}}}{2}
> $$
> Lo cual tiene sentido: el centroide de un segmento (con densidad constante) es su punto medio.
