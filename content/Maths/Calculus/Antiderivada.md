---
modified: 2026-11-13T23:34:20Z
title: "Antiderivada"
publish: true
type: zettel
date: 2026-08-21
status: seed
aliases:
  - primitiva
tags:
  - calculus
cssclasses:
  - romana
---
> [!theorem] **Definición.** (Antiderivada)
>
> Sea $f$ una función, $\exists F(x)$ tq. $F'(x) = f(x)$. Llamada antiderivada o primitiva. Comprendemos a $F(x)$ como la inversa de la derivada?

Sup. que tomamos $f(x)$ y sup. $\exists F(x)$ tq. $F'(x)= f(x)$
1. Dividir el $[a,b]$ en $n$-subintervalos de ancho $\Delta x = x_{i}-x_{i-1}$.
2. Aplicamos TVM apra $[x_{i-1},x_{2}]$
$$
\begin{align}
F'(c_{i}) &= \frac{F(x_{i})-F(x_{i-1})}{x_{i}-x_{i-1}} \\
F(x_{i}) - F(x_{i-1}) &= F'(c_{i})\cdot \Delta x
\end{align}
$$
3. Si consideramos todos los subintervalos
$$
[F(x_{1})-F(a)]+[F(x_{2})-F(x_{1})]+\dots+ [F(b)-F(x_{n-1})] = \sum_{i=1}^{n} F'(c_{i})\Delta x
$$

Una funcioón $f(x) = x$ puede tener muchasa antiderivadas... $\frac{x^{2}}{2}+c$, $\int_{a}^{x}f(z) \, dz$

Sabesmoc que si $f:[a,b]\to \mathbb{R}$, es continua, existe $\displaystyle \int_{a}^{b} f(x) \, dx$.
Ahora $F(x) = \int_{a}^{x} f(z) \, dz$ es una *antiderivada* de la funcón $f(x)$ por T.F.C. $\frac{d}{dx}F(x) = f(x)$.

Pensemos que existe otra *antiderivara* de $f$ denotada $G: [a,b] \to \mathbb{R}$. Ent.
$$
G'(x) = f(x)  = F'(x)
$$
Por cálculo 1, $F'(x)$ y $G'(x)$ difieren por una constante:
$$
\begin{align} \\
& F(x)-G(x) = k \\[0.5em]
&\implies F(b) -G(b) = F(a) - G(a) \\[0.5em]
&\implies F(b) - F(a) = G(b) - G(a)  \\
&\implies \int_{a}^{b} f(x) \, dx = G(b)-G(a)
\end{align}
$$


