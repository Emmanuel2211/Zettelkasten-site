---
modified: 2026-11-13T23:34:20Z
title: "Axioma de Supremo"
publish: true
type: zettel
date: "2026-08-18"
status: seed
aliases:
 - Axioma del infimo
tags:
 - calculus
cssclasses: 
 - romana
---
> [!theorem] **Def.** Supremo/Ínfimo (minima cota superior y máxima cota inferior)
>
> Sea $E\subseteq \mathbb{R}, E\neq\varnothing$, y acotado.
> 
> - Si $M$ es la menor de de todas las cotas superiores, $M$ es llamado **supremo** de $E$, denotamos $M = \sup E$.
> 
> - Si $m$ es la mayor de las cotas inferiores, lo llamamos **ínfimo** y lo denotamos $m = \inf E$.

Es conveniente completar la definición
1. $\sup \varnothing = \infty$ y $\inf \varnothing = -\infty$.
2. Si $E$ **no** está acotado superiormente, $\sup E = \infty$.
3. Si $E$ **no** está acotado inferiormente, $\inf E = -\infty$.

- Se demuestra que el supremo y el ínfimo son únicos.

- En práctica, demostrar $m = \inf S$ para $S \neq \varnothing$, es equivalente a mostrar que $m$ es un cota inferior y que $$\forall \varepsilon >0  \ \exists b \in S : m\leq b < m+\varepsilon.$$

> [!theorem] **Teorema.** (Propiedades)
> 
> 1. $\inf \{ -A \} = -\sup \{ A \}$ y $\sup\{ -A \} = -\inf\{ A \}$
> 

---

> [!theorem] **Axioma del supremo (completitud)**
>
> Todo conjunto no vacío de números reales que esta acotado superiormente, tiene un cota superior mínima. 
> 

> [!theorem] **Teorema.** (Axioma del Ínfimo)
>
> Si $S \neq \varnothing$ y está acotado inferiormente, tiene ínfimo.

> [!proof]- **Proof.** 
>
> Sea $T = \{ \beta \in \mathbb{R}:  \forall a \in S (\beta\leq a) \}$ Dado que $S$ está acotado inferiormente, $T \neq \varnothing$, y dado $S \neq \varnothing$, $T$ está acotado superiormente. Entonces $T$ tiene supremo. Sea $m := \sup T$. Si $a \in S$, entonces $a$ es una cota superior de $T$ y $m \leq a$. Esto prueba que $m$ es una cota inferior de $S$. Además, si $\beta \in \mathbb{R}$ es una cota inferior de $S$, entonces $\beta \in T$, y de aquí $\beta \leq m$. Por lo tanto, $m = \inf S$. Q.E.D.
> 

Con este último axioma, tenemos que $\mathbb{R}$ es un campo completo ordenado.

--- 

[[Teorema 7.1 despues de los fuertes]]
[[Teorema 1 de cotas]]
[[Teorema 7.2 despues de los fuertes]]
[[Teorema 7.3 despues de los fuertes]]
[[Teorema 2 de cotas]]
[[Teorema 3 de cotas]]

