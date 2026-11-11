---
modified: 2026-11-11T18:19:03Z
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
> Todo juego **reducido** de residuos módulo $m$ tiene tantos elementos como clases de residuo módulo $m$ formadas por primos relativos con $m$.




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
> 2. Si $\{ r_{1},\dots,r_{\varphi(m)} \}$ es un juego reducido de residuos módulo $m$, entonces $\{ar_{1},\dots,ar_{\varphi(m)}\}$ también es un juego reducido de residuos módulo $m$.

> [!proof]- **Proof.**
>
> $m \in \mathbb{Z}^{+}, a \in \mathbb{Z}$ con $(a, m)=1$.
>
> 1. Sea $\left\{r_1, \ldots, r_m\right\}$ un juego completo de residuoz módulo m.
> **PD**. $\{ar. ,..., ar_{m}\}$ es un jeugo completo de residuoz módulo $m$.
> Basta ver que los elementos de $\left\{a r_1, \ldots, a r_m\right\}$ pertenecen a clases distintos módulo m.
> Sean $i, j \in\{1, \ldots, m\}$ tales que $a r_i \equiv a r_j(\bmod m)$.
> Como $(a, m)=1$, por cancelacion $r_i \equiv r_j(m o ́ d m)$.
> Como $\left\{r_1, \ldots, r_n\right\}$ sí es en juego completo de resideros módelo $m$,
> entonces $i=j$.
> ∴ $\left\{a r_1, \ldots, a r_m\right\}$ er un juego completo do residua módulo $m$
>
> 2. Supongamos que $\left\{r_1, \ldots, r_{\varphi(m)}\right\}$ es un juego reducido de residuos módulo $m$.
> **PD**. $\left\{a r_1, \ldots, a r_{\varphi(m)}\right\}$ es un juego reducido de residuos módulo $m$.
> Análogamente a $(i)$ los elementos de $\left\{a r_1, \ldots, a r_{\varphi(m)}\right\}$ pertenecen a clases distintas módulo $m$.
> Falta ver que cada $a r_i$, con $i \in\{1, \ldots, \varphi(m)\}$ es primo relativo con $m$. Pero $\left(r_i, m\right)=1$ ya que $\left\{r_1, \dots, r_{\varphi(m)} \right\}$ es un juego reducido de sesiduor módulo $m$, y $(a, m)=1$, ent. $(ar_{i},m)=1$.
> ∴ $\left\{a r_1, \dots, a r_{\varphi}(m)\right.$ es un juego reducido de residuor módulo $m$.
> $$
> \tag*{$\blacksquare$}
> $$

> [!example]- Ejemplo. 
>
> $m=15$ y tenemos que $\{0, 1,2,3,4,5,6,7,8,9,10,11,12,13,14\}$ es un juego completo de residures módulo $15$.
> $\{1,2,4,7,8,11,13,14\}$ es un juego reducido de residuos modulo $15$, así $\varphi(15)=8$
> Multiplicando por 2
> $\{2, 4, 8, 14, 16, 22, 26, 28\}$ es un juego reducido de reciduos módulo 15.




> [!theorem] **Teorema** (Teorema de Euler para Congruencias)
>
> Sean $m \in \mathbb{Z}^{+}, a \in \mathbb{Z}$ con $(a,m)= 1$. Tenemos que
> $$
> a^{\varphi(m)} \equiv 1 \pmod{m}
> $$

> [!proof]- **Proof.**
>
> Sean $m \in \mathbb{Z}^+, a \in \mathbb{Z}, (a, m)=1$.
> **PD**. $a^{\varphi(m)} \equiv 1 \pmod{m}$.
> Sea $\left\{r_1, \ldots, r_{\varphi(m)}\right\}$ un juego reducido de residuoz módulo $m$. Por la proposición anterior $\left\{a r_1, \ldots, a r_{\varphi(m)}\right\}$ también es un juego reducido de residuos módulo $m$. Así, los números de ambos conjuntos son iguales módulo $m$ salvo por el orden, entonces
> $$
> \begin{aligned}
> \left(a r_1\right)\left(a r_2\right) \cdots\left(a r_{\varphi(m)}\right) &\equiv r_1 \cdots r_{\varphi(m)} \pmod{m} \\[.5em]
> \implies  \quad a^{\varphi(m)}\left(r_1 \cdots r_{\varphi(m)}\right) &\equiv r_1 \cdots r_{\varphi(m)} \pmod{m}
> \end{aligned}
> $$
> Como $\left(r_i, m\right)=1$ para toda $i \in\{1, \ldots, \varphi(m)\}$, ent. $\left(r_1 \cdots r_{\varphi}(m), m\right)=1$ y por cancelacion se tiene
> $$
> a^{\varphi(m)} \equiv 1 \pmod{m} \tag*{$\blacksquare$}
> $$


> [!example]- Ejemplo.
>
> $m=12$
> $\{0, 1,2,3,4,5,6,7,8,9,10,11\}$ es un juego completo de reciduos módulo $12$.
> $\{ 1,5,7,11\}$ es en juego reducido de residuos módulo $12$. Así $\varphi(12)=4$.
> Consideremos $a=7$ con $(7,12)=1$. Multiplicando el conjunto anterior por $7$:
> \{7, 35, 49, 77\} es también un juego reducido de residua médulo 12 y
>
> $$
> \begin{matrix}
>   35 \equiv 11 \pmod{12} \\
>   49 \equiv 1 \pmod{12} \\
>   77 \equiv 5 \pmod{12}
> \end{matrix} \implies \begin{matrix}
> 7\cdot 35\cdot 49\cdot 77 \equiv 7\cdot 11\cdot 1\cdot 5 \pmod{12} \\
> 7\cdot 7(5) \cdot 7(7) \cdot 7(11) \equiv 7\cdot 11\cdot 1\cdot 5 \pmod{12}\\
> 7^{4}(1\cdot 5\cdot 7\cdot 11) \equiv 7 \cdot 11\cdot 1\cdot 5 \pmod{12}\\
> 7^{4} \equiv 1 \pmod{12}
> \end{matrix}
> $$
>
> Efectivamente $7^4 \equiv 7^2 \cdot 7^2 \equiv 49 \cdot 49 \equiv 1 \cdot 1 \equiv 1 \pmod{12}$. Así
> $$
> 7^{\varphi(12)} \equiv 1 \pmod{12}
> $$


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

> [!proof]- **Proof.**
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

> [!proof]- **Proof.**
>
> Sean $a,b \in \mathbb{Z}^{+}$, $(a,b) =1$.
> Un juego completo de residuos módulo $ab$ consiste de los elementos
> $$
> \begin{matrix}
> 1,2, & \dots & ,k & \dots & ,a \\
> a+1, & \dots & ,a+k & \dots & ,2a \\
> 2a+1, & \dots & ,2a+k & \dots & , 3a \\
> \vdots &  & \vdots &  & \vdots \\
> (b-1)a+1, & \dots & ,(b-a)a+k & \dots & ,ba
> \end{matrix}
> $$
> Observamos que $(t,ab)= 1$ si y sólo si $(t,a) = 1$ y $(t,b) = 1$. Dejaremos entonces sólo los números que son primos relativos con $a$ y con $b$.
> En cada renglón tenemos un juego completo de residuos módulo $a$, con $\varphi(a)$ primos relativos con $a$.
> Sea $k \in  \{ 1,\dots,a \}$. Sabemos que $(k,a) = (at+k,a) \quad \forall  t\in \mathbb{Z}$
> Así, si $(k,a)=  1$ toda su columna consiste de primos relativos con $a$, y si $(k,a)\neq  1$ no hay primos relativos con $a$ en esa columna.
> Si $(k,a)= 1$
> $$
> 0 \cdot a \quad ,1\cdot a \quad ,2\cdot a \quad \dots \quad ,(b-a)\cdot a
> $$
> es un juego completo de residuos módulo $b$.
> $$
> \implies 0 \cdot a+k \quad ,1\cdot a+k \quad ,2\cdot a+k \quad \dots \quad ,(b-a)\cdot a+k
> $$
> también lo es, así $\varphi(b)$ primos relativos con $b$.
> Así, hay $\varphi(a)$ columnas formadas por primos relativos con $a$ y en cada una de ellas hay $\varphi(b)$ números que además son primos relativos con $b$.
> Por lo tanto hay $\varphi(a)\varphi(b)$ primos relativos con $ab$ en el juego completo de residuos módulo $ab$.
> $$
> \therefore \varphi(ab) = \varphi(a)\varphi(b) \tag*{$\blacksquare$}
> $$
>

> [!example]- Ejemplo.
>
> $$
> \varphi(72) = \varphi(8\cdot 9) = \varphi(8)\varphi(9) = \varphi(2^{3})\varphi(3^{2}) = 2^{2}(2-1) 3(3-1) = 24
> $$

> [!theorem] **Corolario.**
>
> Sean $t,m \in \mathbb{Z}^{+}, p_{1},\dots,p_{t} \in \mathbb{Z}^{+}$ primos distintos, $\alpha_{1},\dots,\alpha_{t} \in \mathbb{Z}^{+}$. Si $m = p_{1}^{\alpha_{1}}\cdots p_{t}^{\alpha_{t}}$, entonces,
> $$
> \varphi(m) = \prod_{i=1}^{t} p_{i}^{\alpha_{i-1}} (p_{i}-1) = m \prod_{i=1}^{t} \left(1- \frac{1}{p_{i}}\right)
> $$

> [!proof]- **Proof.**
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

> [!example]- Ejemplos.
>
> 1. $\displaystyle \varphi(100) = 100\left(1-\frac{1}{2}  \right)\left( 1-\frac{1}{5} \right) = 100\left( \frac{1}{2}  \right) \left( \frac{4}{5} \right) = 40$
> 2. $\displaystyle \varphi(147) = 147\left(1 - \frac{1}{3}  \right) \left(1-\frac{1}{7}  \right) = 147\left(\frac{2}{3}  \right) \left(\frac{6}{7}  \right) = 84$

