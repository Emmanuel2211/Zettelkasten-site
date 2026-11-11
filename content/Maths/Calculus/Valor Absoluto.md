---
modified: 2026-10-08T00:49:06Z
publish: true
type: zettel
date: 2026-08-31
status: undone
aliases:
tags:
  - algebra
cssclasses:
  - romana
---
# Valor Absoluto $\mathbb{Z}$
 
La función valor absoluto describe la *estructura metrica* de $\mathbb{R}$


> [!theorem] **Def.** Valor absoluto $\mathbb{Z}$
>
> El **valor absoluto** de $a \in \mathbb{R}$, denotado por $|a|$, se define por la regla
> $$
> \lvert a \rvert = \begin{cases}
> a,  & a\geq 0 \\
> -a,  & a < 0
> \end{cases}
> $$


> [!observation]+ **Observación.**
>
> Sea $a \in \mathbb{Z}$,
> 1. $\lvert a \rvert = \lvert -a \rvert$
> 2. $a \leq \lvert a \rvert$ y $-a \leq \left| a \right|$
> > [!proof]- **Proof.** 

Se desarrollan propiedades a partir de las propiedades de *orden* en $\mathbb{Z}$

> [!theorem] **Teorema.**  (Más propiedades del Valor Absoluto)
>
> Sean $a,b \in \mathbb{Z}$.
> 1. $\lvert a \rvert\geq 0$, más aún, $\lvert  a \rvert = 0 \iff a =0$.
> 2. $\lvert ab \rvert = \lvert a \rvert\lvert b \rvert$
> 3. $\lvert a + b \rvert \leq \lvert a \rvert + \lvert  b \rvert$
> 4. $\left| \left| a \right| - \left| b \right| \right| \leq \left| a-b \right|$

> [!proof]- **Proof.** 
>
> Sean $a,b \in \mathbb{Z}$
> 1. **PD.** $\lvert a \rvert \geq 0$, por def.
> **PD.** $\lvert a \rvert = 0 \iff a = 0$.
> $(\impliedby)$ Si $a = 0, ent. $a \geq 0$ y por def. $\lvert a \rvert = a = 0$ (hip.)
> $$
> \therefore \lvert a  \rvert = 0 
> $$
> $(\implies)$ Sup $\lvert a \rvert = 0$
> **PD.** $a = 0$.
> Como $\lvert a \rvert = a$ o $\lvert a \rvert = -a$, ent. $0 = a$ o $0 = -a$ y en cualquier caso concluimos que $a =0$.
> $$
> \tag*{$\blacksquare$}
> $$
> 2. Veamos, si $a = 0$ o $b =0$,
> $$
> \lvert ab \rvert  = 0= \lvert a \rvert  \lvert  b \rvert 
> $$
> Sup ent. $a \neq 0$ y $b \neq 0$.
> 
> *Caso 1:* $a > 0$ y $b > 0$ (i.e $a,b \in \mathbb{N} \setminus \{ 0 \}$)
> Por propiedades en $\mathbb{N} \setminus \{  0 \}$, tenemos que $ab \in \mathbb{N}\setminus \{ 0 \}$ (el producto es cerrado), así,
> $$
> \lvert ab \rvert  = ab = \lvert a \rvert \lvert b \rvert 
> $$
> *Caso 2:* $a>0$, $b < 0$
> $$
> \lvert a \rvert \lvert b \rvert = a(-b)
> $$
> Por otro lado,
> $$
> \begin{align}
> \lvert ab \rvert  &= \lvert -ab \rvert  \\
> &= \lvert a(-b) \rvert  \\
> &= \lvert a \rvert \lvert -b \rvert  \\
> &=\lvert a \rvert \lvert b \rvert \tag{Caso 1}
> \end{align}
> $$
> *Caso 3:* Análogo al caso 2.
> *Caso 4:* $a < 0$, $b < 0$
> $$
> \begin{align}
> \lvert ab \rvert &= \lvert (-a)(-b) \rvert  \tag{Ley Signos}\\
> &= \lvert -a \rvert \lvert -b \rvert  \tag{Caso 1}\\
> &= \lvert a \rvert \lvert b \rvert \tag*{$\blacksquare$}
> \end{align}
> $$
> 3. Desmotraremos $(1) \ a + b \leq \lvert a \rvert+\lvert b \rvert$ y que $(2) \ -(a+b) \leq \lvert a \rvert + \lvert b \rvert$. 
> Tenemos que $a \leq \lvert a \rvert$ y $b \leq \lvert b \rvert$, ent. $a + b \leq \lvert a \rvert + \lvert b \rvert$, por propiedad en $<_{\mathbb{Z}}$.
> También, $-a \leq \lvert -a \rvert$ y $-b \leq \lvert -b \rvert$, es decir, $-a \leq \lvert  a \rvert$ y $-b \leq \lvert b \rvert$, por propiedad en $<_{\mathbb{Z}}$.
> Pero 
> $$
> \begin{align}
> (-a)+(-b) &= (-1)(a) + (-1)(b) \\
> &= (-a)(a+b) \\
> &= -(a+b)
> \end{align}
> $$
> Así,
> $$
> -(a+b) \leq \lvert a \rvert +\lvert b \rvert 
> $$
> Tenemos entonces $(1)$ y $(2)$, pero $\lvert a+b \rvert=a+b$ o $\lvert a+b \rvert = -(a+b)$
> $$
> \therefore \lvert a+b \rvert \leq \lvert a \rvert +\lvert b \rvert \tag*{$\blacksquare$}
> $$

Podemos utilizar todo lo demostrado para desarrollar propiedades de forma más sencilla



---






... faltas propiedades



$$
|a|^{2} = a^{2} \quad \text{ or } \quad |a| = \sqrt{ a^{2} }
$$

> [!proof]- **Proof.** 





$$
|a| \geq b \iff b \leq -a \ \ \text{ o } \ \ b \geq a
$$

$$
- \lvert x \rvert \leq x\leq \lvert x \rvert 
$$

> [!proof]- **Proof.** 


And this are proven
$$
|a| = b \quad \iff
\begin{cases}
b \ge 0 \\
\text{y} \\
-a = b \quad \text{o} \quad a = b
\end{cases}
$$

$$
\begin{alignat*}{2}
& |a| < b \quad &&\iff -a < b \quad \text{y} \quad a < b \\
                   &               &&\iff a > -b \quad \text{y} \quad a < b \\
                   &               &&\iff -b < a < b\\
\end{alignat*}
$$

