---
modified: 2026-10-28T14:44:07Z
title: "Juego Completo de Residuos"
publish: true
type: zettel
date: "2026-09-01"
status: undone
aliases:
tags:
 - algebra
cssclasses:
 - romana
---
> [!theorem] **Definición.** (Juego Completo de Residuos)
>
> Sea $m \in \mathbb{Z}^{+}$. Un **juego completo de residuos módulo** $m$ es un conjunto formado por exactamente un representante de cada calse de equivalencia módulo $m$.

> [!observation]+ **Observación.**
>
> Todo juego completo de residuos módulo $m$ tiene exactamente $m$ elementos.

> [!example]+ Ejemplo.
>
> $m = 8$
> Un juego completo de residuos módulo $8$ es
> $$
> \{ 0,1,2,3,4,5,6,7 \}
> $$
> Como,
> $$
> \begin{align}
>   8 \equiv 0 \pmod{8} \quad \quad -36 \equiv 4 \pmod{8}  \\[0.5em]
>   17 \equiv 1 \pmod{8} \quad \quad -3 \equiv 5 \pmod{8}  \\[0.5em]
>   -6 \equiv 2 \pmod{8} \quad \quad 86 \equiv 6 \pmod{8}  \\[0.5em]
>   36 \equiv 3 \pmod{8} \quad \quad 31 \equiv 7 \pmod{8}  \\[0.5em]
> \end{align}
> $$
> tenemos que
> $$
> \{ 8, 17, -6, 35, -36, -3, 86, 31 \}
> $$
> es otro juego completo de residuos módulo $8$.


> [!theorem] **Lema.**
>
> Sea $m \in \mathbb{Z}^{+}$, $a \in \mathbb{Z}$. Tenemos que $(a,m) = 1$ si y sólo si $(b,m) = 1$ para toda $b \in \bar{a}$.

> [!proof]+ **Proof.**
>
> $m \in \mathbb{Z}^{+}$, $a \in \mathbb{Z}$, $b \in \bar{a}$
> Como $b \in \bar{a}$ tenemso que $b \equiv a \pmod{m}$ y así $b - a = mq$ con $q \in \mathbb{Z}$. Entonces $b = a + mq$. Por un lema previo al algoritmo de Euclides,
> $$
> (b,m) = (a+mq, m) = (a,m)
> $$
> Asíi, $(a,m) =1$ si y sólo si $(b,m) =1$ Q.E.D.

> [!theorem] **Definición.** (Juego Reducido de Reciduos)
>
> Sea $m \in \mathbb{Z}^{+}$. Un **juego reducido de residuos módulo** $m$ es una conjunto formado por exactamente un representante de cada clase de equivalencia módulo $m$ formada por primos relativos por $m$.

> [!observation]+ **Observación.**
>
> Todo juego **reducido** de residuos módulo $m$ tiene tantos elementos como clases de residuo módulo $Mates$ formadas por primos relativos con $m$.


