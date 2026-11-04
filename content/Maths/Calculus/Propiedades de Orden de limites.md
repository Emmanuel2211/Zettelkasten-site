---
modified: 2026-07-21T16:34:40Z
title: "Order Properties"
publish: true
type: zettel
date: "2026-07-21"
aliases:
tags: 
 - calculus
cssclasses: 
 - romana
---
> [!theorem] **Teorema.** (Conservación de desigualdades)
> Supongamos la existencia de $\lim_{ x \to x_{0} }f(x)$ y $\lim_{ x \to x_{0} }g(x)$ y que $x_{0}$ sea un punto de acumulación de $\text{dom}(f)\cap\text{dom}(g)$. 
> Si $\forall x \in\text{dom}(f)\cap\text{dom}(g)$
> $$
> f(x) \leq g(x)
> $$
> entonces,
> $$
> \lim_{ x \to x_{0} } f(x) \leq \lim_{ x \to x_{0} } g(x)
> $$

> [!proof]- **Proof.** 
> ...

> [!theorem] **Corolario.** 
> Supongamos la existencia de $\lim_{ x \to x_{0} }f(x)$ y que $\alpha\leq f(x)\leq \beta$ para todo $x \in\text{dom}(f)$. Entonces
> $$
> \alpha \leq \lim_{ x \to x_{0} } f(x)\leq \beta
> $$


**Note.** La condición $\alpha< f(x) < \beta$ para todo $x$ implica a lo más
$$
\alpha \leq \lim_{ x \to x_{0} } f(x) \leq \beta
$$
no implicaría
$$
\alpha < \lim_{ x \to x_{0} } f(x) < \beta
$$



> [!theorem] **Teorema.** (del Sandwich) {Squeeze Theorem}
> Sea $f,g,h: E \to \mathbb{R}$ y sea $x_{0}$ un punto de acumulación del dominio commún $E$. Supongamos que existen los limites
> $$
> \lim_{ x \to x_{0} } f(x) = L \quad \text{ y } \quad \lim_{ x \to x_{0} } g(x) = L
> $$
> tal que
> $$
> f(x) \leq h(x) \leq g(x)
> $$
> para todo $x \in E$ excepto tal vez $x = x_{0}$. Entonces
> $$
> \lim_{ x \to x_{0} } h(x) = L
> $$

> [!proof]- **Proof.** 

> [!theorem] **Teorema.** (Limites de Valores Absolutos)
> Supongamos la existencia de
> $$
> \lim_{ x \to x_{0} } f(x) = L
> $$
> entonces
> $$
> \lim_{ x \to x_{0} } \lvert f(x) \rvert = \lvert L \rvert 
> $$

Ya que los máximos y mínimos pueden ser expresados en terminas de valor absoluto, se desarrolla el corolario:

> [!theorem] **Corolario.** (Max/Min de Limites)
> Supongamos la existencia de
> $$
> \lim_{ x \to x_{0} } f(x) = L \quad \text{ y } \quad \lim_{ x \to x_{0} } g(x) = M
> $$
> y $x_{0}$ un punto de acumulación de $\text{dom}(f)\cap\text{dom}(g)$. Entonces
> $$
> \begin{align}
> \lim_{ x \to x_{0} } \max \{ f(x),g(x) \} = \max \{ L,M \} \\[1em]
> \lim_{ x \to x_{0} } \min \{ f(x),g(x) \} = \min \{  L,M \}
> \end{align}
> $$

> [!proof]- **Proof.** 
> A partir de la identidad
> $$
> \max \{ f(x), g(x) \} = \frac{f(x)+g(x)}{2} + \frac{\lvert f(x)- g(x) \rvert }{2}
> $$
> y por los teoremas de limite de sumas y valor absoluto se demuestra. Análogamente con la identidad del mínimo 
> $$
> \min \{ f(x),g(x) \} = \frac{f(x)+g(x)}{2} - \frac{\lvert f(x)-g(x) \rvert }{2} \tag*{$\blacksquare$}
> $$