---
modified: 2026-09-10T17:06:38Z
title: "Integral de Reimann"
publish: true
type: zettel
date: "2026-09-01"
status: undone
aliases:
tags:
 - calculus
cssclasses:
 - romana
---
> [!theorem] **Definición.** (Suma de Reimann)
> Dada $f:[a,b] \to \mathbb{R}^{+}$ y $P$ partición de $[a,b]$ una **suma de Reimann** es una expresión.
> $$
> R = \sum_{i=0}^{n-1} f(z_{i})(x_{i+1}-x_{i})
> $$
> en donde $P$ es una partición de $[a,b]$. y $z_{i} \in [x_{i},x_{i+1}]$, para todo $i$.

> [!theorem] **Definición.** (Integral de Reimann)
> Dada $f:[a,b]\to \mathbb{R}^{+}$ decimos que $S$ **es la integral de** $f$ si para todo $\varepsilon >0$ existe $\delta > 0$ tal que para toda $P_{[a,b]}$ con $\Delta P < \delta$ se cumple que $\lvert S- R \rvert < \varepsilon$ para toda $R$ (*suma de Reimann*) con partición $P$.
> $$
> \forall \varepsilon > 0 \ \exists  \delta > 0 \ (\forall P_{[a,b]}(\Delta P < \delta) \implies \forall R_{P} \lvert  S- R \rvert <\varepsilon)
> $$
> De exister $S$, la llamamos **integral de Reimann**.

> [!theorem] **Teorema.** (Integral de Darboux es equivalente a la Integral de Reimann)
> Dada $f:[a,b]\to \mathbb{R}^{+}$ continua, se tiene que
> $$
> \int_{a}^{b} f(x) \, dx  = S
> $$

> [!proof]- **Proof.** 
> Veamos que la integral de Darboux implica la integral de Reimann.
> Sea $\varepsilon>0$. Probaremos que $\displaystyle \left\lvert  \int_{a}^{b} f(x) \, dx - S  \right\rvert<\varepsilon$.
> Sabemos que $\displaystyle \int_{a}^{b} f(x) \, dx = \sup\{ \mathcal{L} \}$.
> Entonces existe una partición $\hat{P}$ y una suma inferior $\hat{L}$ tal que
> $$
> \int_{a}^{b} f(x) \, dx -\frac{\varepsilon}{2} < \hat{L} < \int_{a}^{b} f(x) \, dx 
> $$
> Así,
> $$
> \int_{a}^{b} f(x) \, dx - \hat{L} < \frac{\varepsilon}{2}
> $$
> Como $S$ es la integral de Reimann, cumple la definición. Para la $\varepsilon$ tomada existe $\delta>0$ con la propiedad de "$S$". Para esto, tomemos $P$ refinamiento de $\hat{P}$ tal que $\Delta P < \delta$. Por ser refinamiento,
> $$
> L(\hat{P}) \leq L(P)
> $$
> Por lo que,
> $$
> \int_{a}^{b} f(x) \, dx - L(P) < \frac{\varepsilon}{2}
> $$
> Además, por ser $L(P)$ una suma de Reimann, respecto a $\Delta P < \varepsilon$, se cumple que $\displaystyle \lvert S-L(P) \rvert< \frac{\varepsilon}{2}$ por Def. Int. Reimann.
> Así,
> $$
> \left\lvert  \int_{a}^{b} f(x) \, dx - S  \right\rvert \leq \left\lvert  \int_{a}^{b} f(x) \, dx -L(P)  \right\rvert + \lvert L(P) - S \rvert  < \varepsilon
> $$
> para toda $\varepsilon > 0$.
> $$
> \therefore S = \int_{a}^{b} f(x) \, dx  \tag*{$\blacksquare$}
> $$
