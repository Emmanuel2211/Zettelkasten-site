---
modified: 2026-05-07T18:03:34Z
title: "Continuidad en un Punto Arbitrario"
publish: true
---
Anteriormente hablamos de puntos interiores del dominio. Pero, que pasa si $x_{0}$ no es un punto interior? Esta es la versión generalizada de Análisis

> [!theorem] **Def.** ($\varepsilon-\delta$ Versión)
> Sea $f$ definida en el conjunto $A$ y $x_{0} \in A$. La función $f$ es **continua** en $x_{0}$ siempre que $\forall \varepsilon >0$ $\exists \delta >0$ tal que
> $$
> \lvert f(x)-f(x_{0}) \rvert <\varepsilon
> $$
> para todo $x \in A$, para cual $\lvert x-x_{0} \rvert<\delta$.

> [!theorem] **Def.** (Limit Version Generalized)
> Sea $f$ definida en $A$, $x_{0} \in A$. $f$ es **continua** en $x_{0}$ siempre que $x_{0}$ es aislado en $A$ o si $x_{0}$ es punto de acumulación y
> $$
> \lim_{ x \to x_{0} } f(x) = f(x_{0})
> $$

En análisis, los límites se cumplen em punto aislados, ya que $(\varepsilon-\delta)$ se cumple por vacuidad.

> [!theorem] **Def.** (Neighborhood Version)
> Sea $f$ definida en $A$ y $x_{0} \in A$. $f$ es **continua** en $x_{0}$ siempre que para todo conjunto **abierto** $V$ que contiene a $f(x_{0})$ existe un conjunto **abierto** $U$ que contiene $x_{0}$ tal que $f(U \cap A)\subset V$.

En otras palabras, la versión del vecindario nos dice que existe $U\cap A$ abierto relativo a $A$ que $f$ mapea en $V$... ? we recall that a set B ⊂ A is relatively open relative to A if B is the intersection of some
open set (here U ) with A. NPI

> [!theorem] **Def.** (Sequential Version)
> Sea $f$ definida en $A$, $x_{0} \in A$. $f$ es **continua** en $x_{0}$ si para toda succession $\{ x_{n} \}$ perteneciente a $A$ y convergente a $x_{0}$, se sigue que $f(x_{n})\to f(x_{0})$.

