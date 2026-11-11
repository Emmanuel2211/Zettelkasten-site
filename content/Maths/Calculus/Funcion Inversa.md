---
modified: 2026-09-09T18:20:07Z
title: "Función Inversa"
publish: true
type: zettel
date: "2026-09-06"
status: undone
aliases:
tags:
 - calulus
cssclasses: 
 - romana
---
> Si $f: I\to \mathbb{R}$ es continua y estrictamente monótona en $I = [a,b]$, entonces la imagen de $J = f(I)$ es un intervalo, $f$ es una biyección de $I$ sobre $J$, y su funcíon inversa $f^{-1}: J \to I$ también es continua y estrictamente monótona (en el mismo sentido que $f$). Es decir,


> [!theorem] **Teorema.** (Existencia de $f^{-1}$)
>
> Sea $f: [a,b] \to \mathbb{R}$ continua y estrictamente mońotona en $[a,b]$, entonces
> 1. La imagen directa, $J = f(I)$ es un intervalo.
> 2. $f$ es una biyección de $I$ sobre $J$.
> 3. $f^{-1}: J\to I$ es continua y estrictamente monótona (en el mismo sentido que $f$.



> [!theorem] **Teorema.** (Derivada de una Función Inversa)
>
> Sea $f:I\to J$ continua y estrictamente monótona (por lo que admite una inversa $f^{-1}:J \to  I$).
> Si $f$ es derivable en un punto $a \in  I$ y $f'(a) \neq 0$, entonces su función inversa $f^{-1}$ es derivable en el punto $b = f(a)$, y su derivada es
> $$
> (f^{-1})'(b) = \frac{1}{f'(a)} = \frac{1}{f'(f^{-1}(b))}
> $$
