---
modified: 2026-11-13T23:34:20Z
publish: true
type: zettel
date: "2026-08-19"
status: seed
aliases:
 - Producto Enteros
tags:
 - algebra
cssclasses: 
 - romana
---


# Producto en $\mathbb{Z}$

> [!theorem] **Definición.** ($\cdot_{\mathbb{Z}}$)
>
> El **producto** en $\mathbb{Z}$ es la función $\cdot_{\mathbb{Z}}: \mathbb{Z}\times \mathbb{Z}\to \mathbb{Z}$ tal que
> $$
> [(n,m)] \cdot_{\mathbb{Z}} [(p,q)] = [(n\cdot p + m \cdot q, n \cdot q + m \cdot p)].
> $$


Verifiquemos que este *bien definida*.

> [!theorem] **Proposición.** ($\cdot_{\mathbb{Z}}$ Unívoca)
>
> Para cualesquiera $[(n,m)], [(p,q)] \in \mathbb{Z}$, si $(n',m') \in [(n,m)]$ y $(p',q') \in [(p,q)]$, entonces
> $$
> [(n,m)] \cdot_{\mathbb{Z}}[(p,q)] = [(n',m')]\cdot_{\mathbb{Z}} [(p',q')].
> $$

> [!proof]- **Proof tarea moral.** 
>
> Sean 


> [!theorem] **Teorema.** (Propiedades de $\cdot_{\mathbb{Z}}$)
>
> 1. Asociatividad: $\forall a,b,c \in \mathbb{Z}\text{ tal que } (a \cdot b) \cdot c = a \cdot (b \cdot c)$
> 2. Conmutatividad: $\forall a,b \in \mathbb{Z}\text{ tal que } a \cdot b = b \cdot a$
> 3. Neutro: $\exists \gamma \in \mathbb{Z} \text{ tal que } \forall a \in \mathbb{Z}, \ \gamma \cdot a = a \cdot \gamma = a$
> 
> 4. Distributividad: $\forall a,b,c \in \mathbb{Z} \quad a\cdot (b+c) = (a\cdot b) + (a \cdot c)$

Con estas 8 propiedades (incluidas $+_{\mathbb{Z}}$) a $\mathbb{Z}$ se le llama entonces un **anillo conmutativo** por $(ii)$ **con uno** $(iii)$.

> [!proof]- **Proof.** 
>
> 1. fjdks
> 2. Sean $a,b \in \mathbb{Z}$ digamos, sean $n,m,p,q \in \mathbb{N}$
> $$
> \begin{align}
> a &= \overline{(n,m)} \\
> b &= \overline{(p,q)}
> \end{align}
> $$
> **P.D.** $a \cdot b = b \cdot a$
> $$
> \begin{align}
> a \cdot b &= \overline{(n,m)} \cdot \overline{(p,q)} \\
> &= \overline{(np+mq, nq+mp)}
> \end{align}
> $$
> Por otro lado,
> $$
> \begin{align}
> b \cdot a &= \overline{ (p,q)} \cdot \overline{(n,m)} \\
> &= \overline{(pn+qm, pm + qn)}
> \end{align}
> $$
> Por *conmutatividad*  de $\cdot_{\mathbb{N}}$ y $+_{\mathbb{N}}$
> $$
> (n,p + mq, nq + mp) = (pn + qm, pm+ qn)
> $$
> entonces,
> $$
> \overline{(np + mq , nq + mp)} = \overline{(pn + qm, pm +qn)}
> $$
> y así 
> $$a \cdot b = b \cdot a \tag*{$\blacksquare$}$$

> Bueno, replicamos la únicidad para el neutro multiplicativo $\gamma$, y lo denotamos $1$.

> [!theorem] **Proposición.** (Más propiedades)
>
> 1. Para todo $a \in \mathbb{Z}$, $a \cdot 0 = 0 \cdot a = 0$
> 2. Para todo $A \in \mathbb{Z}$, tenemos $a(-1) = (-1) a = -a$

> [!proof]- **Proof.** 
>
> 3. **P.D.** $a \cdot 0 = 0$
> Sea $a \in \mathbb{Z}$, tenemos
> $$
> a\cdot 0 + 0 = a \cdot 0 = a (0 \cdot 0) = a \cdot 0 + a \cdot 0
> $$
> por cancelación $+_{\mathbb{Z}}$
> $$0 = a \cdot 0 \tag*{$\blacksquare$}$$
> 4. Sea $a \in \mathbb{Z}$ **P.D.** $(-1)a = -a$.
> $$
> \begin{align}
> (-1)a + a &= (-1)a + 1\cdot a \tag{neutro mult}\\[0.5em]
> &= ((-1)+ 1)a \tag{dist.} \\[0.5em]
> &= 0\cdot a = 0 \tag{inv. adit. de 1}
> \end{align}
> $$
> Así, $(-1)a + a = 0$, por conmut. $+_{\mathbb{Z}}$
> $$
> (-1)a + a = a + (-1)a = 0
> $$
> Ent. $(-1)a$ es el inv. adit. de $a$, i.e.
> $$
> (-1)a = -a \tag*{$\blacksquare$}
> $$

> [!theorem] **Proposición.** (Leyes de los signos)
>
> Sean $a,b \in \mathbb{Z}$
> 1. $a(-b) = (-a)b = -ab$
> 2. $-(-a) = a$
> 3. $(-a)(-b) = ab$

> [!proof]- **Proof.** 
>
> Sean $a,b \in \mathbb{Z}$
> 1. **P.D.** $a(-b) = -ab$
> Sabemos que
> $$
> a \cdot 0 = 0 \tag{Prop. 1.1}
> $$
> y como $(-b) + b = 0$, Ent.
> $$
> \begin{align}
> a((-b)+b) &= 0  \\[0.5em]
> a(-b) + ab &= 0 \tag{Dist.}  \\[0.5em]
> (a(-b) + ab) + (-ab) &= 0 + (-ab) \tag{Sumando} \\[0.5em]
> a(-b)  + (ab+ (-ab)) &= 0 + (-ab) \tag{Asoc.} \\[0.5em]
> \implies a(-b) + 0 &= -ab
> \end{align}
> $$
> Como $0$ es neutro adit.
> $$
> a(-b) = -ab \tag*{$\blacksquare$}
> $$
> 2. **P.D.** $-(-a) = a$
> Como $a+ (-a) = 0$, y también $-(-a) + (-a) = 0$
> Ent.
> $$
> \begin{align}
> a+(-a) &= -(-a) + (-a) \\[0.5em]
> a &= -(-a) \tag*{$\blacksquare$}
> \end{align}
> $$
> 3. **P.D.** $(-a)(-b) = ab$
> $$
> \begin{align}
> (-a)(-b) &= -(-a)b \tag{i} \\[.5em]
> &= -(-ab) \tag{i} \\[.5em]
> &= ab \tag{ii} \\[1em]
> \therefore (-a)(-b) &= ab \tag*{$\blacksquare$}
> \end{align}
> $$

> [!theorem] **Definición.** (Potencia)
>
> Sea $a \in \mathbb{Z}$ y $n \in \mathbb{N}$ definimos la **potencia**
> $$
> \begin{align}
>   a^{0} &= 1\\[0.5em]
>   a^{n+1} &= a^{n}\cdot a
> \end{align}
> $$
> **Obs.** Si $n \in \mathbb{N}, n \geq 1$
> $$
> a^{n} = \underbrace{a \cdots a}_{n\text{-veces}}
> $$
>

