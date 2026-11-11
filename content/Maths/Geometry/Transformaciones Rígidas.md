---
modified: 2026-04-23T20:46:02Z
publish: true
---

> [!theorem] **Definición** (Transformación Rígida)
>
> Una función $T$ es una con dominio $R^{2}$ y rango $R^{2}$ se llama **transformación del plano euclidiano**.
> $T$ es rígida o *isométrica* si preserva la distancia:
> $$
> \lvert T(P) - T(Q) \rvert  = \lvert P-Q \rvert \ \ \text{ para todo } \ \ P,Q \in \mathbb{R^{2}}.
> $$
Un *corolario* de esto es que las isometrías preservan los ángulos, áreas y volúmenes.

#### Teorema. Estructura de una Isometría.
Toda transformación rígida en $\mathbb{R}^n$ puede expresarse algebraicamente como la composición de una transformación lineal ortogonal y una traslación:
$$
T(\mathbf{x}) = M\mathbf{x} + \mathbf{v}
$$
Donde $M$ es una matriz ortogonal (es decir, $M^T M = I$, lo que implica que $\text{det}(M)= \pm 1$) y $\mathbf{v}$ es un vector de traslación.
<!--ID: 1775701227542-->


[[Traslacion]]
[[Rotacion]]
[[Reflexion]]