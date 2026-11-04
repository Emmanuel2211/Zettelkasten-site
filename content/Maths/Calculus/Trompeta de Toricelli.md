---
modified: 2026-11-03T18:16:50Z
title: "Trompeta de Torricelli"
publish: true
type: zettel
date: "2026-10-28"
status: undone
aliases:
tags:
 - calculus
cssclasses:
 - romana
---
![[Pasted image 20261028112246.png|center|300]]

> Considera la región $R = \{ (x,y) \mid x \geq 1 , 0 \leq y \leq  \frac{1}{x} \}$. Al rotar está región alrededor del eje $X$, justo obtenemos la Trompeta de Torricelli. Observamos estas propiedades:

> [!theorem] **Proposición.** (Volume y Área)
> 1. El volumen de la Trompeta de Torricelli es finito, y es igual a $\pi$.
> 2. Su área o superficie es infinita.
>

> [!proof]+ **Proof.**
> 1. $\displaystyle V = \pi \int_{a}^{b} f(x)^{2} \, dx  = \pi \int_{1}^{\infty} \left(\frac{1}{x}\right)^{2} \, dx = \pi \lim_{b \to \infty} \left(\frac{x^{-1}}{-1}  \right)\bigg|_{1}^{b} = -\pi \lim_{b \to \infty} \left[ \frac{1}{b} - 1  \right] = \pi$
> Por lo tanto, $V = \pi$.
>
> 2. $\displaystyle A = 2\pi \int_{a}^{b} \left| f(x) \right| \sqrt{1+f'(x)^{2}} \, dx = 2\pi\int_{1}^{\infty} \left(\frac{1}{x}  \right) \sqrt{1_{\left(- \frac{1}{x^{2}}  \right)^{2}}} \, dx = 2\pi \int_{1}^{\infty} \frac{1}{x} \frac{\sqrt{x^{4} + 1}}{\sqrt{x^{4}}} \, dx = 2\pi \int_{1}^{\infty} \frac{\sqrt{x^{4}+1}}{x^{3}} \, dx$
> Recordando las porpiedades de monotonía de la integral, y un criterio de divergencia de integrales.
> Notese que $\sqrt{x^{4} + 1} > \sqrt{x^{4}} = x^{2}$.
> $$
> \implies \frac{\sqrt{x^{4}+1}}{x^{3}} > \frac{x^{2}}{x^{3}} = \frac{1}{x}
> $$
> Ent. $\displaystyle \int \frac{\sqrt{x^{4}+1}}{x^{3}} \, dx > \int \frac{1}{x} \, dx$.
> Y sabemos que $\displaystyle \int_{1}^{\infty} \frac{1}{x} \, dx = \log \left(x\right) \bigg|_{1}^{\infty} \longrightarrow \infty$.
> $$
> \therefore S > \int_{1}^{\infty} \frac{1}{x} \, dx \longrightarrow \infty \tag*{$\blacksquare$}
> $$


