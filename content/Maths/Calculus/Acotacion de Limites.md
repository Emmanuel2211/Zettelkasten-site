---
modified: 2026-06-30T18:17:39Z
title: "Acotación de Limites"
publish: true
type: zettel
date: "2026-06-30"
aliases:
 - Boundedness of Limits
tags: 
 - calculus
cssclasses: 
 - romana
---
> [!theorem] **Teorema.** (Acotación de Limites)
> Supóngase
> $$
> \lim_{ x \to x_{0} } f(x) = L
> $$
> Entonces existe un intervalo $(x_{0}-c,x_{0}+c)$ y un numero $M$ tal que
> $$
> \lvert f(x) \rvert \leq M
> $$
> para todo $x$ en el intervalo que está en el dominio de $f$.

> [!proof]- **Proof.** 
> Existe $\delta>0$ tal que $\lvert f(x)-L \rvert<1$ siempre y cuando $x$ es un punto del dominio de $f$ diferente $x_{0}$ el cual satisface $\lvert x-x_{0} \rvert<\delta$. Si $x_{0}$ no pertenece al dominio de $f$, entonces significa
> $$
> \lvert f(x) \rvert = \lvert f(x)-L+L \rvert \leq \lvert f(x)-L \rvert +\lvert L \rvert < \lvert L \rvert +1
> $$
> para todo $x \in (x_{0}-\delta,x_{0}+\delta)$ que pertenecen a $\text{Dom}(f)$. 
> Tomando $M = \lvert L \rvert+1$, si $x_{0} \in\text{dom}(f)$, tenemos
> $$
> M = \lvert L \rvert +1+\lvert f(x_{0}) \rvert 
> $$
> entonces, $\forall x \in (x_{0}-\delta,x_{0}+\delta)$ en el dominio de $f$
> $$
> \lvert f(x) \rvert \leq M \tag*{$\blacksquare$}
> $$

> [!theorem] **Teorema.** (Boundedness Away from Zero)
> Si $\lim_{ x \to x_{0} } f(x)$ existe y es diferente de $0$, entonces existe un intervalo $(x_{0}-c,x_{0}+c)$ y un número $m>0$ tal que
> $$
> \lvert f(x) \rvert \geq m >0
> $$
> para todo $x\neq x_{0}$ en el intervalo y que pertenece al $\text{dom}(f)$.

