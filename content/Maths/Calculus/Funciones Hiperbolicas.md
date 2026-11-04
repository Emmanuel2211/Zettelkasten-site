---
modified: 2026-10-06T01:31:19Z
title: "Trigonométricas Hiperbólicas"
publish: true
type: zettel
date: "2026-08-19"
status: undone
aliases:
 - 
tags:
 - calculus
cssclasses: 
 - romana
---
Después de construir $\exp \left(x\right)$, definimos sus partes: par e impar. 
> Recordamos que toda función real puede escribirse como la suma de una función par y una impar, las hiperbólicas son justo esto para $e^{x}$ .

> [!theorem] **Definición.** (Funciones Hiperbólicas)
> Sea $x \in  \mathbb{R}$, definimos:
> - $\displaystyle \sinh(x) = \frac{e^{x}- e^{-x}}{2}$
> - $\displaystyle \cosh(x) = \frac{e^{x}+ e^{-x}}{2}$
> - $\displaystyle \tanh(x ) =  \frac{e^{x}-e^{-x}}{e^{x}+e^{-x}}$
>
> Al igual que las trig. normales:
> - $\displaystyle \coth(x) = \frac{e^{x} + e^{-x}}{e^{x} - e^{x}}$
> - $\displaystyle \operatorname{sech}(x) = \frac{2}{e^{x}+ e^{-x}}$
> - $\displaystyle \operatorname{csch} (x) = \frac{2}{e^{x}- e^{-x}}$

A partir de las propiedades de $\exp \left(x\right)$ (*leyes de exponentes*), demostramos el casi análogo del Teorema de Pitágoras.



##### Graficas

> [!observation]+ **Observación.**
> Dado $e^{2}x > 0$, $\cosh(x) > 0$ para todo $x$, lo que significa que por el teorema anterior
> $(\cosh(x), \sinh(x))\in \{ x^{2} - y^{2} = 1, x > 0 \}$, esto representa a la "rama positiva de la hipérbola $x^{2} - y^{2} = 1$".

para graficar, necesitamos sacar la derivada, evaluar decreimentos y crecimientos.
concavidades, convexidades... ver si es simetrica, ejes de simetria y punto de simetrica, si es par o impar,
veremos que es una funcion catenaria


![[Pasted image 20261002115947.png|center]]



> [!theorem] **Teorema.** (Propiedades de Funciones Hiperbólicas)
> - Identidades Fundamentales:
> $$
> \begin{align}
> \cosh^{2}(x) - \sinh^{2}(x) &= 1 \\[0.5em]
> \tanh^{2}(x) + \operatorname{sech}^{2} (x) &= 1 \\[0.5em]
> \coth^{2}(x) - \operatorname{csch}^{2}(x) &=  1 \\[0.5em]
> \end{align}
> $$
> - Paridad
>  $$
> \begin{align}
> \sinh(-x) &= -\sinh(x) \\[0.5em]
> \cosh(-x) &= \cosh(x) \\[0.5em]
> \tanh(-x) &= -\tanh(x)
> \end{align}
> $$
> - Suma y Doble ángulo
> $$
> \begin{align}
> \sinh(x\pm y) = \sinh(x)\cosh(x) \pm \cosh(x)\sinh(y) \\[0.5em]
> \cosh(x\pm y) = \cosh(x)\cosh(y) \pm \sinh(x)\sinh(y)
> \end{align}
> $$
> $$
> \begin{align}
> \sinh(2x) &= 2 \sinh(x) \cosh(x) \\[0.5em]
> \cosh(2x) &= 2 \sinh^{2}(x)  + 1
> \end{align}
> $$







> [!theorem] **Teorema.** (Derivadas)
> $$
> \begin{align}
> \sinh' (x) &= \cosh(x) \\[0.5em]
> \cosh' (x) &= \sinh(x) \\[0.5em]
> \tanh'(x) &= \operatorname{sech}^{2}(x) \\[.5em]
> \coth'(x) &= -\operatorname{csch}^{2}(x)\\[0.5em]
> \operatorname{sech}' (x) &= - \operatorname{sech} (x)\tanh (x) \\[0.5em]
> \operatorname{csch}' (x) &= -\operatorname{csch}(x)\coth(x) 
> \end{align}
> $$

### Funciones Inversas Hiperbólica

![[Pasted image 20261002120356.png|center|607]]

> [!theorem] **Teorema.** (Funciones Inversas)
> Sea $x \in \mathbb{R}$,
> - $\displaystyle \sinh^{-1}(x) = \log \left(x+ \sqrt{x^{2}+1}\right)$
> - $\displaystyle \cosh^{-1}(x) = \log \left(x + \sqrt{x^{2} -1}\right)$
> - $\displaystyle  \tanh^{-1}(x) = \frac{1}{2}\log \left(\frac{1+x}{1-x}\right) \quad \left| x \right| < 1$ 
> - $\displaystyle  \operatorname{ctgh}^{-1}(x) = \frac{1}{2}\log \left(\frac{1+x}{x-1}\right) \quad \left| x \right| >1$
> - $\displaystyle \operatorname{sech}^{-1}(x) = \log \left(\frac{1+ \sqrt{1 - x^{2}}}{x}\right) \quad 0 < x \leq 1$
> - $\displaystyle \operatorname{csch}^{-1}(x) = \log \left(\frac{1 + \sqrt{1 + x^{2}}}{\left| x \right|}\right) \quad x \neq 0$


> [!theorem] **Teorema.** (Derivadas)
> $$
> \begin{align}
> \frac{d}{dx}\sinh^{-1}(x) &= \frac{1}{\sqrt{x^{2} + 1}}\\[0.5em]
> \frac{d}{dx}\cosh^{-1}(x) &= \frac{1}{\sqrt{x^{2}- 1}}\\[0.5em]
> \frac{d}{dx}\tanh^{-1}(x) &=  \frac{1}{1-x^{2}} \quad \left| u \right| < 1 \\[0.5em]
> \frac{d}{dx}\coth^{-1}(x) &= \frac{1}{1-x^{2}} \quad \left| u \right|>1 \\[0.5em]
> \frac{d}{dx}\operatorname{sech}^{-1}(x) &= - \frac{1}{x\sqrt{1-x^{2}}} \quad 0 < x < 1 \\[0.5em]
> \frac{d}{dx}\operatorname{csch}^{-1}(x) &= - \frac{1}{\left| x \right|\sqrt{1+x^{2}}} \quad x\neq 0
> \end{align}
> $$
