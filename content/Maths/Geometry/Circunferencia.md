---
modified: 2026-04-30T18:13:14Z
title: "Circunferencia"
publish: true
---
> [!theorem] **Definición.** (Circunferencia)
> $\mathscr{C}$ es una **circunferencia** si todos sus elementos equidistan de un punto $S$.
> $$
> \mathcal{C} = \{ P \in \mathbb{R}^{2} \mid d(P,C) = r \}
> $$

> [!theorem] **Theorem.** (Ecuación Ordinaria o Canónica)
> Un punto $P(x,y)$ pertence a la circurferencia $\mathcal{C}$ con centro en $C(h,k)$ y radio $r >0$ si y sólo si sus coordenadas satisfacen
> $$
> (x-h)^{2} + (y-k)^{2} = r^{2}
> $$

> [!proof]- **Proof.** 
> Directamente de la definición, con $C(h,k)$.

> [!theorem] **Theorem.** (Ecuación General)
> Toda circunferencia en $\mathbb{R}^{2}$ puede expresarse mediante una ecuación polinomial de segundo grado de la forma:
> $$
> x^{2} + y^{2} + Dx + Ey + F = 0
> $$
> Donde $D,E,F \in \mathbb{R}$.

> [!theorem] **Proposición.** (Condición de Existencia)
> Dada la ecuación general $x^{2} + y ^{2} + Dx + Ey + F = 0$, esta representa una circunferencia **real** si y sólo si el **discriminante** es positivo
> $$
> D^{2} + E^{2} - 4F > 0
> $$
> No demostraremos ahora:
> - Si discriminante $<0$, es una circunferencia **imaginaria**.
> - Si discriminante $= 0$, la ecuación degenera en un único punto $C\left( - \frac{D}{2}, - \frac{E}{2} \right)$, *(circunferencia puntual o radio nulo)*

> [!proof]- **Proof.** 
> Completando cuadrados en la general obtenemos
> $$
> \left( x+ \frac{D}{2} \right)^{2} + \left( y + \frac{E}{2} \right)^{2} = \frac{D^{2}+ E^{2} - 4F}{4}
> $$
> Observamos su centro en $C\left( - \frac{D}{2}, -\frac{E}{2}\right)$ y radio $r = \frac{1}{2}\sqrt{ D^{2} + E^{2} - 4F }$.

