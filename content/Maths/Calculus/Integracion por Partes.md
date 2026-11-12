---
modified: 2026-09-17T18:58:44Z
title: "Integración por Partes"
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
Es una consecuencia que surge a partir de la regla de Leibniz:

$$
\begin{align}
  (uv)' (x) &=   u'(x)v(x )  +u(x) v'(x) \\[0.5em]
  \implies  u(x) v'(x) &=  (u(x)v(x))' - u'(x)v(x) \\[0.5em]
  \implies  \int_{a}^{b} u(x)v'(x) \, dx  &=  \int_{a}^{b} (u(x)v(x))' \, dx  - \int_{a}^{b} u'(x)v(x) \, dx \\[0.5em]
  \implies \int_{a}^{b} u(x)v(x) \, dx  &=   u(x)v(x ) \bigg|_{a}^{b} - \int_{a}^{b} u'(x)v(x) \, dx  
\end{align}
$$

Así, brevemente, 
$$
\int u \, dv = uv - \int v \, du
$$

> [!Quote]- Profe Rodri
>
> De aquí la famosa mnemotecnia: "Un día vi una vaca sin cola vestida de uniforme!"
> - "*Si un día vuelvo seré un villano sin sentimientos viviendo del ultraje*"

> [!example]- Ejemplo.
>
> 1. $\displaystyle \int \sin(x)\cos(x) \, dx =  \sin(x)\sin(x) - \int \sin(x)\cos(x) \, dx \implies  \int \sin(x)\cos(x) \, dx = \frac{\sin^{2}(x)}{2} + c$
>
> 2. $\displaystyle \int x\sin(x) \, dx = -x\cos(x) - \int (-\cos(x)) \, dx = -x \cos(x) + \int \cos(x) \, dx = -x\cos(x) + \sin(x) + c$
>
> **Obs.** $\displaystyle  \int x\sin(x) \, dx = \frac{x^{2}}{2}\sin(x) - \int \frac{x^{2}}{2}\cos(x) \, dx$ es más díficil que la integral original.
>
> 3. $\displaystyle \int x^{2} \cos(x) \, dx = x^{2}\sin(x) - \int 2x\sin(x) \, dx = x^{2}\sin(x) - 2 \int x\sin(x) \, dx = x^{2}\sin(x) - 2 \left[-x\cos(x) + \sin(x)  \right] = x^{2}\sin(x) + 2x\cos(x) - 2\sin(x) + c$
> 
> Igualmente, podemos aplicar varias veces la integración por partes.
>
> 4. $\displaystyle \int \log \left(x\right) \, dx = x\log \left(x\right) - \int x \left(\frac{1}{x}  \right) \, dx= x \log \left(x\right) - x + c$
> 
> La siguiente integral es un tipo espcial llamada **Integral Cíclica**.
>
> 5. $\displaystyle \int e^{x}\cos(x) \, dx = e^{x} \cos(x) + \int e^{x}\sin(x) \, dx = e^{x}\cos(x) + \left[e^{x} \sin(x) - \int e^{x}\cos(x) \, dx  \right]$
> De esta forma
> $$
> \begin{align}
> \int e^{x}\cos(x) \, dx &= e^{x} \cos(x) + e^{x}\sin(x) - \int e^{x}\cos(x) \, dx \\[0.5em]
> \implies  2 \int e^{x}\cos(x) \, dx &= e^{x}\cos(x) + e^{x}\sin(x) + c
> \end{align}
> $$
