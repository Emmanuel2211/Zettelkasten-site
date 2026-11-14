---
modified: 2026-11-13T23:34:20Z
publish: true
type: zettel
date: 2026-08-19
status: seed
aliases:
tags:
  - algebra
cssclasses:
  - romana
---
# Más propiedades de $\mathbb{Z}$

> [!theorem] **Teorema.** (pseudotricotomía)
>
> Sea $a \in \mathbb{Z}$, se cumple una y sólo una de las siguietes condiciones:
> 1. $a = 0$
> 2. $a \in \mathbb{N} \setminus \{ 0 \}$
> 3. $-a \in \mathbb{N} \setminus \{  0 \}$

En el fondo, esto es la *tricotomía*.

> [!proof]- **Proof.** 
>
> Sea $a \in \mathbb{Z}$, digamos $a = \overline{(n,m)}$ con $n,m \in \mathbb{N}$. 
> Sabemos que se cumple una y sólo una de las siguientes condiciones:
> $$
> n = m \quad \lor \quad n>m \quad \lor \quad n<m
> $$
> Si $n = m$ **P.D.** $(i)$
> $$
> a = \overline{(n,m)} = \overline{(n,n)} = \overline{(0,0)} = 0
> $$
> A la inversa, si $a = 0$
> $$
> \overline{(n,m)} = \overline{(0,0)}
> $$
> Ent. $(n,m) \sim (0,0)$, i.e.$n = m$.
> 
> Ahora, si $n > m$ **P.D.** $(ii)$.
> Existe $x \in \mathbb{N} \setminus \{  0 \}$ tal que $m + x = n$.
> Ent.
> $$
> a = \overline{(n,m)} = \overline{(m+x, m)} = \overline{(x,0)} = x \in \mathbb{N} \setminus \{ 0 \}
> $$
> A la inversa, si $a \in \mathbb{N} \setminus \{  0 \}$.
> $$
> a = \overline{(x,0)} \quad \text{p.a } \ x \in \mathbb{N} \setminus \{ 0 \}
> $$
> Tenemos ent
> $$
> \overline{(n,m)} = \overline{(x,0)}
> $$
> Ent. $(n,m) \sim (x,0)$
> Ent. $n+0 = m + x$
> Así, $n = m + x$ con $x \in \mathbb{N} \setminus \{ 0 \}$, i.e. $n > m$ 
> 
> Finalmente, si $n < m$ **P.D.** $(iii)$
> Si y sólo si
> $$
> -a = -\overline{(n,m)} = \overline{(m,n)} \in \mathbb{N} \setminus \{ 0 \}
> $$

> [!observation]+ **Observación.**
>
> La doble implicación en la demostración anterior, es estrictamente formal. Pues si demostramos solamente $\implies$ no verficamos el "una y sólo una" de $(i), (ii)$ e $(iii)$.

Desarrollamos más propiedades para describir algunas características importantes de $\mathbb{Z}$.

> [!observation]+ **Observación.**
>
> Sean $n,m \in \mathbb{N}$ y $a \in \mathbb{Z}$
> $a = 0 \iff -a = 0$

> [!theorem] **Teorema.** (Dominio Entero $\mathbb{Z}$ )
>
> Sean $a,b \in \mathbb{Z}$. Si $a\neq 0$ y $b\neq 0$, Ent. $a\cdot b\neq 0$. De modo equivalente, si $a\cdot b = 0$, Ent. $a = 0 \lor b =0$.
> 
> Y decimos entonces que $\mathbb{Z},+,\cdot$ es un **dominio entero**.


Es más sencillo demostrar el $\neq$.

> [!proof]- **Proof.** 
>
> Sean $a,b \in \mathbb{Z}$ tales que $a\neq 0$ y $b\neq0$.
> Para $a$ se tiene que $a \in \mathbb{N}\setminus \{ 0 \}$ ó $-a \in \mathbb{N}\setminus \{  0 \}$. Para $b$ también $b \in \mathbb{N} \setminus \{  0 \}$ ó $-b \in \mathbb{N} \setminus \{  0 \}$.
> 
> **Caso 1:** $a,b \in \mathbb{N} \setminus \{  0 \}$.
> Por propiedades en $\mathbb{N}$ sabemos que $ab \in \mathbb{N} \setminus \{  0 \}$.
> 
> **Caso 2:** $-a \in \mathbb{N} \setminus \{  0 \}$ y $b \in \mathbb{N} \setminus \{  0 \}$
> Por prop. en $\mathbb{N}$, $(-a)b \in \mathbb{N} \setminus \{  0 \}$, Ent. $(-a)b \neq 0$.
> Por las leyes de los signos, $-ab \neq 0$, por Prop. 1.2, $ab \neq 0$.
> 
> **Caso 3:** $a \in \mathbb{N}\setminus \{  0 \}$, $-b \in \mathbb{N} \setminus \{  0 \}$.
> Análogo al caso 2.
> 
> **Caso 4:** $-a \in \mathbb{N} \setminus \{  0 \}$ y $-b \in \mathbb{N} \setminus \{ 0 \}$.
> Por prop. en $\mathbb{N}$ tenemos $ab = (-a)(-b) \in \mathbb{N} \setminus \{  0 \}$, Ent. $ab \neq 0 \quad \blacksquare$ 


> [!theorem] **Teorema.** 
>
> Sean $a,b,c \in \mathbb{Z}$ con $a \neq 0$.
> 2. Si $ab = ac$, Ent. $b =c$
> 3. Si $ba = ca$, Ent. $b = c$

> [!proof]- **Proof.** 
>
> Sean $a,b,c \in \mathbb{Z}$, $a\neq 0$
> 4. Sup. $ab = ac$, **P.D.** $b=c$
> Sumando $-ac$ de ambos lados,
> $$
> \begin{align}
> ab + (-ac) &= ac + (-ac) \\[0.5em]
> \implies ab + (-ac) &= 0 \\[0.5em]
> \implies ab + a(-c) &= 0 \tag{Ley Signos} \\[0.5em]
> \implies a(b+(-c)) &= 0 \tag{Dist.}
> \end{align}
> $$
> Por el Teo. anterior $a = 0$ ó $b + (-c) = 0$, pero por hip. $a\neq 0$, Ent.
> $$
> b +(-c) = 0
> $$
> Sumando $c$ de ambos lados
> $$
> \begin{align}
> &(b+(-c)) + c = 0+c \\[.5em]
> &\implies b+((-c)+c) = 0 \tag{Asoc. y Neutro} \\[.5em]
> &\implies b+0 = c \tag{Inv.} \\[0.5em]
> &\implies b = c \tag*{$\blacksquare$}
> \end{align}
> $$