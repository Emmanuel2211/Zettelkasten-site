---
modified: 2026-10-28T21:20:03Z
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
# Función $\varphi$ de Euler

> [!tip]+ **Idea.**
>
> También conocida como función totiente, cuenta la cantidad de números enteros positivos menores o iguales a un número $n$ que son coprimos con él. Recordemos que dos núms. son coprimos si su MCD es igual a $1$.

> [!theorem] **Definición.** (Función Phi de Euler)
>
> La funcíon phi de euler es $\varphi : \mathbb{Z}^{+} \to  \mathbb{Z}^{+}$ tal que $\varphi ( m)$ es la cantidad de elementos en un juego reducido de residuos módulo $m$.


> [!example]+ Ejemplo. 
>
> $m = 8$
> Sabemos que $\{ 0,1,2,\dots, 7 \}$ es un juego completo de residuos módulo $8$.
> Quitando a los elementos que no son primos relativos con $8$ tenemos,
> $$
> \{ 1,3,5,7 \}
> $$
> Así, $\{ 1,3,5,7 \}$ es un juego reducido de residuos módulo $8$.
> Tenemos entonces que $\varphi(8) = 4$
> Como
> $$
> \begin{align}
>  33 \equiv 1 \pmod{8}  \quad 45 \equiv 5 \pmod{8} \\[0.5em]
>  -5 \equiv 3 \pmod{8}  \quad -73 \equiv 7 \pmod{8}
> \end{align}
> $$
> entonces $\{ 33,-5,45, -73 \}$ es otro juego reducido de residuos módulo $8$.


> [!theorem] **Proposición.**
>
> Sean $m \in \mathbb{Z}^{+}$, $a \in \mathbb{Z}$ con $(a,m) = 1$.
> 1. Si $\{ r_{1},\dots,r_{m} \}$ es un juego completo de residuos módulo $m$, entonces $\{ ar_{1}, \dots, ar_{m} \}$ también es un juego completo de residuos módulo $m$.
> 2. Si $\{ r_{1},\dots,r_{\varphi(m)} \}$ es un juego reducido de residuos módulo $m$, entonces $ar_{1},\dots,ar_{\varphi(m)}$ también es un juego reducido de residuos módulo $m$.

> [!proof]+ **Proof.**

> [!example]+ Ejemplo.


### Teorema de Euler.

> [!theorem] **Teorema** (Teorema de Euler para Congruencias)
>
> Sean $m \in \mathbb{Z}^{+}, a \in \mathbb{Z}$ con $(a,m)= 1$. Tenemos que
> $$
> a^{\varphi(m)} \equiv 1 \pmod{m}
> $$

> [!proof]+ **Proof.**

> [!example]+ Ejemplo.

> [!theorem] **Proposición 1.**
>
> Sea $p \in \mathbb{Z}^{+}$ un número primo. Tenemos que
> $$
> \varphi(p) = p -1
> $$

> [!proof]+ **Proof.**
>
> Sea $p \in \mathbb{Z}^{+}$ primo.
> $\{ 0,1,\dots,p-1 \}$ es un juego completo de residúos módulo $p$. Sabemos que $(0,p)=  p$ y $(a,p) = 1 \ \ \forall a \in  \{ 1,\dots,p-1 \}$  ya que $p$ es primo.
> Así, $\{ 1,\dots,p-1 \}$ es un juego reducido de residuo módulo $p$. Por lo tanto,
> $$
> \varphi(p) = p - 1 \tag*{$\blacksquare$}
> $$


> [!theorem] **Proposición 2.**
>
> Sea $p \in  \mathbb{Z}^{+}$ un número primo, $k \in  \mathbb{Z}^{+}$. Tenemos que,
> $$
> \varphi (p^{k}) = p^{k-1}(p-1)
> $$

> [!proof]+ **Proof.**
>
> Sea $p \in \mathbb{Z}^{+}$ primo, $k \in \mathbb{Z}^{+}$
> $\{ 1, \dots, p , p + 1, \dots, 2p , \dots, (p^{k-1})p,\dots p^{k} \}$ es un juego completo de residuos módulo $p^{k}$, pues observece que $p^{k} = p^{k-1}p$. De estos $p^{k}$ números quitamos $p^{k-1}$ que no son primos relativos con $p^{k}$ para obtener un juego reducido de residuos.
> $$
> \therefore \varphi(p^{k}) = p^{k} - p^{k-1} = p^{k-1}(p-1) \tag*{$\blacksquare$}
> $$

> [!theorem] **Proposición 3.**
>
> Sean $a,b \in \mathbb{Z}^{+}$ con $(a,b) = 1$, tenemos que,
> $$
> \varphi ( ab)  = \varphi(a) \varphi(b)
> $$

> [!proof]+ **Proof.**
>
> ... esta larga

> [!example]+ Ejemplo.

> [!theorem] **Corolario.**
>
> Sean $t,m \in \mathbb{Z}^{+}, p_{1},\dots,p_{t} \in \mathbb{Z}^{+}$ primos distintos, $\alpha_{1},\dots,\alpha_{t} \in \mathbb{Z}^{+}$. Si $m = p_{1}^{\alpha_{1}}\cdots p_{t}^{\alpha_{t}}$, entonces,
> $$
> \varphi(m) = \prod_{i=1}^{t} p_{i}^{\alpha_{i-1}} (p_{i}-1) = m \prod_{i=1}^{t} \left(1- \frac{1}{p_{i}}\right)
> $$

> [!proof]+ **Proof.**
>
> Sean $t,m \in \mathbb{Z}^{+}, p_{1},\dots,p_{t}\in \mathbb{Z}^{+}$ primos distintos, $\alpha_{1},\dots,a_{t} \in \mathbb{Z}^{t}$ con $m = p_{1}^{\alpha_{1}}\cdots p_{t}^{\alpha_{t}}$.
> $$
> \begin{align}
>   \varphi(m) &= \varphi(p_{1}^{\alpha_{1}}\cdots p_{t}^{\alpha_{t}}) = \varphi(p_{1}^{\alpha_{1}})\cdots \varphi(p_{t}^{\alpha_{t}}) \\[0.5em]
>    &= p_{1}^{\alpha_{1} - 1} (p_{1}-1) \cdots p_{t}^{\alpha_{t}-1}\left(1 - \frac{1}{p_{t}}\right) \\[0.5em]
>     &= p_{1}^{\alpha_{1}}\left( 1 - \frac{1}{p_{1}}  \right) \cdots p_{t}^{\alpha_{t}}\left(1 - \frac{1}{p_{t}}  \right) \\[0.5em]
>      &= m \left( 1 - \frac{1}{p_{1}}  \right) \cdots \left(1 - \frac{1}{p_{t}}  \right) \tag*{$\blacksquare$}
> \end{align}
> $$

> [!example]+ Ejemplos.

