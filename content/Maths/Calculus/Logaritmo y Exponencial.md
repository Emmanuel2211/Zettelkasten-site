---
modified: 2026-08-21T02:04:25Z
title: "Logaritmo y Exponencial"
publish: true
type: zettel
date: 2026-08-17
status: undone
aliases:
tags:
  - calculus
cssclasses:
  - romana
---
De chiquito se nos introduce una definición del $\log$, generalmente esta:
$$
u = \log_{b} x \quad \text{ significa } \quad x =b^{u}
$$
No obstante, está definición tiene sus agujeros argumentales inesperados... Pues la estamos construyendo a partir de la definición de $b^{u}$, que claro, es sencillo definir cuando $u\in$ $\mathbb{Z}$ ó $\mathbb{Q}$. ¿Pero qué pasa si $u$ es irracional? ... Bueno, imaginemos que encontramos una definición satisfactoria para $b^{u}$, las dificultades siguen siendo muchas... demostrar $\forall x >0 \ \exists u \in \mathbb{R}$ tal que $x = b^{u}$... Es posible, si! Tedioso y largo, también!

Afortunadamente, el estudio de $\log$ puede ser abordado de una forma sencilla y elegante gracias a los métodos del cálculo! La idea es introducir primero $\log$, y luego usar $\log$ para definir $b^{u}$.

Pero, en primer lugar, ¿cómo llegamos a la definición de $\log$?^[[[Funcion Logaritmo]]]
Definimos exponencia^[[[Funcion Exponencial]]]

una definicion chida^[[[definicion chida logaritmo yexp]]]

nose que completen el formalismo???
PD. $\displaystyle\lim_{ x \to -\infty }e^{x} = 0$


Un tema desarrollado son las funciónes hiperbólicas^[[[Funciones Hiperbolicas]]]

---

> [!theorem] **Proposición.** (Propiedades de $\log$)
> 1. 
> 2.
> 3.
> 4.
> 5.
> 6.
> 2. $\log(x^{n}) = n \log x$ para $n \in \mathbb{N}$

> [!proof]- **Proof.** 
> 3. Si $n \in \mathbb{N}$, $\log (x^{n}) = \log (\underbrace{x \cdot x \cdot x \cdots x}_{n\text{ veces}}) = \log x + \dots + \log x = n\log x$  
> Analogamente, $\log(x^{-n}) = \log \left( \frac{1}{x^{-n}} \right) = \log\left( \frac{1}{x}\dots \frac{1}{x} \right) = -n \log x$

La función inversa del $\log$ la bautizamos como $\log ^{-1} (x) = e^{x}$  ^[[[Exponencial]]]

# Exponencial

> [!theorem] **Proposición.** (Propiedades de $e^{x}$)
> 1. $e^{0} = 1$
> 2. $\overset{\text{exp}}{e} :\mathbb{R} \to (0, \infty)$
> 3. $\frac{d}{dx} e^{x} = e^{x}$
> 4. $e^{x+y} = e^{x}e^{y}$
> 5. $e^{-x} = \frac{1}{e^{x}}$
> 6. $e^{x-y} = \frac{e^{x}}{e^{y}}$

> [!theorem] **Definición.** 
> $a^{x} = e^{x \log (a)}$ donde $a > 0$ y $x \in \mathbb{R}$.

> [!theorem] **Proposición.** 
> $a ^{x}$ es derivable y $(a^{x})^{x} = a^{x}\log (a)$ 

> [!proof]- **Proof.** 
> Sea $u(x) = x\log (a)$. $u'(x) = \log (a)$. Así $\frac{d}{dx}a^{x} = \frac{d}{dx}e^{u(x)} = e^{u(x)}\cdot \log (a) = a^{x}\log(a)$.
