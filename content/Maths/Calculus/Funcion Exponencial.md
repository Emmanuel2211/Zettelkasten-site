---
modified: 2026-11-13T23:34:20Z
title: "Función Exponencial"
publish: true
type: zettel
date: 2026-08-18
status: seed
aliases:
tags:
  - calculus
cssclasses:
  - romana
---
Dado que $\log \left(x\right): (0, \infty) \to \mathbb{R}$ es una función estrictamente creciente y suprayectiva, garantizamos que tiene una función inversa única.

> [!theorem] **Definición.** (Exponencial)
>
> La **función exponencial**, denotada como $\exp : \mathbb{R} \to (0,\infty)$, se define como la función inversa del logaritmo natural, $\log^{-1} \left(x\right)$. Es decir, para todo $x \in \mathbb{R}$ y todo $y > 0$,
> $$
> y = \exp \left(x\right) \iff \log \left(y\right) = x
> $$

![[Pasted image 20260903202925.png|center]]
> [!observation]+ **Observación.**
>
> Dado que es una función inversa, se heredan inmediatamente dos identidades fundamentales de cancelación:
> 1. $\log \left(\exp \left(x\right) \right) = x$ para todo $x \in \mathbb{R}$
> 2. $\exp \left(\log \left(y\right)\right) = y$ para todo $y >0$.

En general, las propiedades de $\exp \left(x\right)$ son las de $\log \left(x\right)$ pero al reves!

> [!theorem] **Teorema.** (Propiedades de $\exp$)
>
> Para cualesquiera $x,y \in \mathbb{R}$,
> 1. $\exp \left(x+y\right) = \exp \left(x\right)\exp \left(y\right)$
> 2. $\exp \left(x-y\right) = \frac{\exp \left(x\right)}{\exp \left(y\right)}$
> 3. $\frac{d}{dx}\exp(x) = \exp(x)$

> [!proof]- **Proof.**
>
> 4. Sean $x,y \in \mathbb{R}$. Definimos dos variables auxiliares para usar la def. de función inversa:
> Sea $u = \exp \left(x\right)$ y sea $v = \exp \left(y\right)$
> Por definición de inversa, tenemos
> $$
> \begin{align}
>   \log \left(u\right) &= x\\[0.5em]
>   \log \left(v\right) &= y
> \end{align}
> $$
> Ahora, sumando esto y aplicando propiedades de $\log$
> $$
> \begin{align}
>   x+y &= \log \left(u\right)+\log \left(v\right)\\[0.5em]
>   x+y &= \log \left(uv\right)\\[0.5em]
>   \exp \left(x+y\right) &= \exp \left(\log \left(uv\right)\right) \\[0.5em]
>   \exp \left(x+y\right) &= uv\\[0.5em]
>   \exp \left(x+y\right) &= \exp \left(x\right)\exp \left(y\right)  \tag*{$\blacksquare$}
> \end{align}
> $$


> [!theorem] **Definición.** (Potencia de Base General)
>
> Sea $a>0$ y $x \in \mathbb{R}$. Definimos $a^{x}$ como:
> $$
> a^{x} = \exp \left(x \log \left(a\right)\right) \quad \text{ o } \quad a^{x} = e^{x \log \left(a\right)}
> $$

---

> [!theorem] **Definición.** (Número de Euler)
>
> Se denota por
> $$
> e := \exp(1)
> $$
> y se le conoce como el número de **Euler**.

> [!theorem] **Teorema.** (Propiedades)
>
> 2. $\frac{d}{dx} \exp x = \frac{d}{dx} \log (x)^{-1} = \frac{1}{\log'(\exp x)} = \exp x$  Por criterion de la primera derivada $\exp' x >0 \implies \exp x$ creciente
> 3. $\exp0 = 1$
> 4. $\exp (x + y) = \exp (x) \exp(y)$
> 5. $\exp(-y) = \frac{1}{\exp(y)}$
> 6. $\exp(x-y) = \frac{\exp(x)}{\exp(y)}$ (ejercicio dem.)

> [!theorem] **Teorema.** otra propiedad
>
> 7. 
> Sea $n \in \mathbb{N}$;
> $$
> \begin{align}
> \exp(n)  = \exp(\underbrace{1+\dots+1}_{n \text{ veces}}) = \underbrace{\exp(1)\cdots \exp(1)}_{n \text{ veces}}  \\
> = \exp(1)^{n} = e^{n}
> \end{align}
> $$
> Algo similar pero con racionales
> Si $p>0$ y $p \in \mathbb{N}$, $\exp\left( \frac{p}{q} \right) = \exp\left( \underbrace{\frac{1}{q}+\dots+\frac{1}{q}}_{p} \right)$
> $$
> \begin{align}
>  = \underbrace{\exp\left( \frac{1}{q} \right) \cdots \exp\left( \frac{1}{q} \right)}_{p} = \exp\left( \frac{1}{q} \right)^{p} = \left( e^{ \frac{1}{q} }  \right)^{p} = e^{\frac{p}{q}}
> \end{align}
> $$
> Si $p<0$, existe $p_{0} = -p > 0$
> $$
> \begin{align}
> \exp\left( \frac{p}{q} \right) = \exp
> \end{align}
> $$
> 



> [!proof]- **Proof.** 
>
> 8. fd
> 9. fjdk
> 10. Notemos que $\log(\exp(x+y)) = x +y$. Por otro lado, $\log(\exp(x)\exp(y)) = \log(\exp(x))+ \log(\exp(y)) = x+y$. Así $\log(\exp(x+y)) - \log(\exp(x)\exp(y))$. Por inyectividad, $\exp(x+y) = \exp(x)\exp(y)$ Q.E.D.
> 11. $1 = \exp(0) = \exp(y-y)= \exp(y)\exp(-y)\implies \exp(-y) = \frac{1}{\exp(y)}$ Q.E.D.
> 12. Ejercicio

