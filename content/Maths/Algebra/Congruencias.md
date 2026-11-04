---
modified: 2026-10-28T14:32:17Z
title: "Congruencias"
publish: true
type: zettel
date: "2026-09-22"
status: undone
aliases:
tags:
 - algebra
cssclasses: 
 - romana
---
> [!theorem] **Definición.**
> Sean $a,b \in \mathbb{Z}$, $m \in \mathbb{Z}^{+}$. Decimos que $a$ es congruente con $b$ módulo $m$ si
> $$
> m \mid a - b
> $$
> y lo denotamos $a \equiv b \pmod{m}$, en caso contrario, $a \not \equiv b \pmod{m}$.

> [!example]+ Ejemplo. 
> $7 \equiv 7 \pmod{5}$, ya que $7 - 7 = 0 = 0\cdot 5$
> $18 \equiv 33 \pmod{5}$, ya que $18-33 = - 15 = 5(-3)$
> $-4 \equiv 16 \pmod{5}$, ya que $-4 -16 = -20 = (-4)5$
> $-1 \equiv -56  \pmod{5}$, ya que $-1 - (-56) = 55 = 11 \cdot  5$

> [!observation]+ **Observación.**
> La congruencia módulo $m$ es una relación de equivalencia.
>
> > [!proof]- **Proof.**
> > 1. $a - a = 0 = 0 \cdot m$, así $m \mid a - a$ y $a \equiv a \pmod{m}$
> > 2. Si $a \equiv b \pmod{m}$, $m \mid a - b$. Entonces $a- b = mq$ con $q \in  \mathbb{Z}$, $b-a = -(a-b) = -mq = m(-q)$. Así $m \mid b-a$ y $b \equiv a \pmod{m}$.
> > 3. Si $a \equiv b \pmod{m}$ y $b \equiv c \pmod{m}$, ent. $m \mid a-b$ y $m \mid b - c$. Así, $m \mid  (a-b) + (b-c) = a-c$ y $a \equiv c \pmod{m}$. Q.E.D.
> >

> [!theorem] **Teorema.**
> Sean $a,b \in \mathbb{Z}$, $m \in \mathbb{Z}^{+}$. Tenemos que $a \equiv b \pmod{m}$ si y sólo si $a$ y $b$ tienen el mismo residuo al dividirlos entre $m$.


> [!proof]+ **Proof.**
> Sean $a,b \in \mathbb{Z}$, $m \in \mathbb{Z}^{+}$.
> $(\implies )$ Supongamos que $a \equiv b \pmod{m}$. Por el algoritmo de la división,
> $$
> \begin{align}
>   a &= mq_{1} + r_{1} \quad q_{1},q_{2}, r_{1},r_{2} \in \mathbb{Z}\\[0.5em]
>   b &= mq_{2} + r_{2} \quad 0 \leq r_{1} < m , \ 0 \leq  r_{2} < m
> \end{align}
> $$
> **PD**. $r_{1} = r_{2}$
> Como $a \equiv b \pmod{m}$ sabemos que
> $m \mid a - b = (mq_{1} + r_{1}) - (mq_{2} + r_{2}) = m(q_{1} - q_{2}) + (r_{1} - r_{2})$.
> Así, $m(q_{2}-q_{1})  + (r_{1} - r_{2}) = m k$, con $k \in \mathbb{Z}$.
> Tenemos que $r_{1}- r_{2} = m k - m (q_{2}-q_{1}) = m (k-q_{2}+q_{1})$ y ent.
> $m \mid  r_{1}-r_{2}$.
> Si $r_{1} \neq  r_{2}$, sin pérdida de generalidad supongamos que $r_{1} > r_{2}$.
> Así, como $m \mid r_{1} - r_{2}$ tenemos $m\leq  \left| r_{1} - r_{2} \right| = r_{1} - r_{2} \leq r_{1} \ !$ Contradicción!
> $$
> \therefore r_{1} = r_{2}
> $$
> $(\impliedby )$ Supongamos ahora que,
> $$
> \begin{align}
>   a &= mq_{1} + r \quad q_{1}, q_{2} , r \in \mathbb{Z} \\[0.5em]
>   b &= mq_{2} + r \quad 0 \leq  r < m
> \end{align}
> $$
> **PD**. $a \equiv b \pmod{m}$
> Tenemos que $a - b = (mq_{1} + r) - (mq_{2} + r) = m (q_{1} - q_{2})$
> Así, $m \mid a - b$ y entonces $a \equiv b \pmod{m}$.
> $$
> \tag*{$\blacksquare$}
> $$


> [!theorem] **Corolario.**
> Sea $m \in \mathbb{Z}^{+}$. Existen exactamente $m$ clases de equivalencia módulo $m$, que son $\bar{0}, \bar{1}, \dots, \overline{m-1}$.

> [!proof]+ **Proof.**
> Sea $m \in \mathbb{Z}^{+}$.
> Veamos que $\bar{0},\bar{1}, \dots, \bar{m-1}$ son distintos. Si $\bar{i} = \bar{j}$ con $i \neq  j$, $i,j \in \{ 0,\dots,m-1 \}$,entonces $i \equiv j \pmod{m}$ y así $m \mid  i-j$.
> Como $i\neq j$, entonces $m = \left| m \right| \leq  \left| i-j \right|$ pero por otro lado $0 \leq  i <m, 0 \leq  j < m$ y así $0 \leq  \left| i- j\right| < m !$ Contradicción! $\therefore i = j$
>
> Veamos que no hay más clases.
> Sea $a \in  \mathbb{Z}$. Por el algoritmo de la división $a = mq + r$ con $q,r \in \mathbb{Z}$, $0 \leq  r < m$. Así, $m \mid  mq = a-r$ y entonces $\bar{a} = \bar{r}$ con $r \in  \{ 0,1,\dots,m-1 \}$.
> $$
> \tag*{$\blacksquare$}
> $$


> [!theorem] **Definición.** (Enteros Módulo $m$)
> Sea $m \in \mathbb{Z}^{+}$. El conjunto de los **enteros módulo** $m$ es la colección de clases módulo $m$, es decir,
> $$
> \{ \bar{0}, \bar{1}, \dots, \overline{m-1} \}
> $$
> y se denota por $\mathbb{Z}_{m}$

> [!example]+ Ejemplo.
> 1. $m = 6$,
> Las clases módulo $6$ son,
> $$
> \begin{align}
>   \bar{0} &=  \{ b \in \mathbb{Z} \mid  b \equiv 0 \pmod{6} \} =  \{ b \in \mathbb{Z} \mid  b- 0 = 6k, k \in \mathbb{Z} \}\\[0.5em]
>   &= \{ b \in \mathbb{Z} \mid  b = 6k, k \in \mathbb{Z} \} = \{ 6k \mid  k \in \mathbb{Z} \}\\[0.5em]
>   \bar{1} &=  \{ b \in \mathbb{Z} \mid  b \equiv 1 \pmod{6} \} =  \{ b \in \mathbb{Z} \mid  b- 1 = 6k, k \in \mathbb{Z} \}\\[0.5em]
>   &= \{ b \in \mathbb{Z} \mid  b = 6k+1, k \in \mathbb{Z} \} = \{ 6k+1 \mid  k \in \mathbb{Z} \}
> \end{align}
> $$
> Realizando esto sucesivamente, de manera análoga,
> $$
> \begin{align}
>   \bar{2} &= \{ 6k + 2 \mid k \in \mathbb{Z} \} \\[0.5em]
>   \bar{3} &= \{  6k + 3 \mid k \in \mathbb{Z} \} \\[0.5em]
>   \bar{4} &= \{ 6k + 4 \mid k \in \mathbb{Z} \}\\[0.5em]
>   \bar{5} &= \{ 6k + 5 \mid k \in \mathbb{Z} \}
> \end{align}
> $$
> Los enteros módulo $6$ son:
> $$
> \mathbb{Z}_{6} = \{ \bar{0},\bar{1},\bar{2}, \bar{3}, \bar{4},\bar{5} \}
> $$
>


> [!theorem] **Teorema.** (Propiedades Básicas)
> Sean $a,b,c,d \in \mathbb{Z}$, $m,n \in \mathbb{Z}^{+}$.
> 1. $a \equiv b \pmod{m} \implies  a + c \equiv b +c \pmod{m}$
> 2. $a \equiv b \pmod{m} \land  c \equiv d \pmod{m} \implies  a + c \equiv b + d \pmod{m}$
> 3. $a \equiv b \pmod{m} \implies  ac \equiv bc \pmod{m}$
> 4. $a \equiv b \pmod{m} \land  c \equiv d \pmod{m} \implies  ac \equiv bd \pmod{m}$
> 5. $a \equiv b \pmod{m} \land  n \mid m \implies  a \equiv b \pmod{n}$
> 6. $a\equiv b \pmod{m} \implies  an \equiv bn \pmod{mn}$


> [!proof]+ **Proof.**
> Sean $a,b,c,d \in \mathbb{Z}$ y $m,n \in \mathbb{Z}^{+}$.
> 1. Supongamos que $a\equiv b \pmod{m}$.
> **PD**. $a + c \equiv b + c \pmod{m}$
> $(a+c) - (b+c) = a-b + c - c = a-b$
> Como $a \equiv b \pmod{m}$, tenemos que $m \mid  a-b$ y ási
> $m \mid  (a+c) - (b+c)$. Por lo tanto $a + c \equiv b+c \pmod{m}$
> 2. Supongamos que $a \equiv b \pmod{m}$ y $c \equiv d \pmod{m}$.
> **PD**. $a + c \equiv b +c \pmod{m}$ y $b + c \equiv b + d \pmod{m}$.
> Por transitividad $a + c \equiv b+ d \pmod{m}$.
> 3. Sup. $a \equiv b \pmod{m}$.
> **PD**. $ac \equiv bc \pmod{m}$. Tenemos que $ac - bc = (a-b)c$. Como $a \equiv b \pmod{m}$ sabemos que $a-b =mq$ con $q \in \mathbb{Z}$. Ási,
> $$
> ac - bc = (a-b)c = mqc \quad \text{ con } qc \in \mathbb{Z}
> $$
> ent. $m \mid ac - bc$. Por lo tanto, $a c \equiv bc \pmod{m}$.
> 4. Sup. $a\equiv b \pmod{m}$ y $c \equiv d \pmod{m}$.
> **PD**. $ac\equiv bd \pmod{m}$
> Por $(iii)$, $ac \equiv bc \pmod{m}$ y $bc \equiv bd \pmod{m}$. Por transitividad, 
> $ac \equiv bd \pmod{m}$.
> 5. Sup.  $a\equiv b \pmod{m}$ y $n\mid m$. Tenemos que $m \mid a-b$. Así, $n \mid m$ y $m\mid a-b$ y por transitividad $n \mid a-b$. Por lo tanto $a\equiv b \pmod{n}$
> 6. Sup. $a \equiv b \pmod{m}$.
> **PD**. $an \equiv bn \pmod{m}$
> Tenemos que $an - bn = (a-b)n$. Como $a\equiv b \pmod{m}$, $a-b = mq$ con $q \in \mathbb{Z}$. Así,
> $$
> an - bn = (a-b)n = mqn = (mn)q \quad \text{ con } q \in \mathbb{Z}
> $$
> entonces $mn \mid  an - bn$
> $$
> \therefore an \equiv bn \pmod{mn} \tag*{$\blacksquare$}
> $$


> [!theorem] **Definición.** (Suma y Producto de Congruencias)
> Sean $a,c \in \mathbb{Z}, m \in \mathbb{Z}^{+}$. La **suma** de $\bar{a}$ y $\bar{c}$ es
> $$
> \bar{a} + \bar{c} = \overline{a + c}
> $$
> El **producto** es,
> $$
> \bar{a} \cdot \bar{c} = \overline{a\cdot c}
> $$

> [!observation]+ **Observación.**
> Las operaaciones anteriores están bien definidas.
> > [!proof]+ **Proof.**
> > $a,b,c,d \in \mathbb{Z}$, $m \in \mathbb{Z}^{+}$
> > Sup. que $\bar{a} = \bar{b}$ y $\bar{c} = \bar{d}$. Entonces,
> > $a \equiv b \pmod{m}$ y $c \equiv d \pmod{m}$.
> > por las prop. anteriores tenemos que,
> > $a + c \equiv  b +d \pmod{m}$ y $ac \equiv bd \pmod{m}$
> > Así, $\overline{a+c} = \overline{b+d}$ y $\overline{ac} = \overline{bd}$.

> [!example]+ Ejemplo.
> $m = q$. Consideremos $\bar{4}, \bar{7} \in \mathbb{Z}_{q}$
> $\bar{4} + \bar{7} = \overline{4 + 7} = \bar{11} = \bar{2}$
> $\bar{4} \cdot  \bar{7} = \overline{4\cdot 7} = \bar{28} = \bar{1}$


> [!theorem] **Teorema.**
> Sea $m \in \mathbb{Z}^{+}$. El conjunto $\mathbb{Z}_{m}$ con las operaciones $+$ y $\cdot$ definidas es un anillo conmutativo con uno.

> [!proof]+ **Proof.**

> [!example]+ Ejemplos.


> [!theorem] **Proposición.**
> Sean $a,b,c \in \mathbb{Z}$, $m \in \mathbb{Z}^{+}$.
> 1. $ac \equiv bc \pmod{m} \iff a\equiv b \pmod{\frac{m}{(c,m)}}$
> 2. Si $(c,m) = 1$ se tiene que
> $$
> a c \equiv bc \pmod{m} \iff  a \equiv b \pmod{m}
> $$


> [!proof]+ **Proof.**
> Sean $a,b,c \in \mathbb{Z}$, $m \in \mathbb{Z}^{+}$.
> 1. $(\implies )$ Sup $ac \equiv bc \pmod{m}$
> **PD**. $a \equiv b \pmod{\frac{m}{(c,m)}}$
> Como $ac \equiv bc \pmod{m}$, ent. $ac - bc = mq$ con $q \in \mathbb{Z}$. Así, $(a-b)c  = mq$ y ent.
> $$
> (a-b)\frac{c}{(c,m)} = \frac{m}{(c,m)}q \quad \text{ con } q \in \mathbb{Z}
> $$
> Tenemos entonces que $\frac{m}{(c,m)} \mid  (a-b) \frac{c}{(c,m)}$, pero como
> $\left(\frac{m}{(c,m)}, \frac{c}{(c,m)}  \right) = 1$, por el elema de Euclides,
> $\frac{m}{(c,m)} \mid  a-b$
> $$
> \therefore a \equiv b \pmod{\frac{m}{(c,m)}}
> $$
> $(\impliedby )$ Sup $a \equiv b \pmod{\frac{m}{(c,m)}}$. Entonces
> $a- b = \frac{m}{(c,m)}q$ con $q \in \mathbb{Z}$, mult. por $c$
> $$
> a c - bc = (a-b)c = \frac{m}{(c,m)}qc = mq \frac{c}{(c,m)} \quad \text{ con } q \frac{c}{(c,m)} \in \mathbb{Z}
> $$
> Así, $ac \equiv bc \pmod{m}$ Q.E.D.
> 2. Es consecuencia directa de $(i)$.

> [!theorem] **Corolario.**
> Sea $m \in \mathbb{Z}^{+}, m > 1$. El anillo $\mathbb{Z}_{m}$ es un dominio entero si y sólo si $m$ es un número primo.


> [!proof]+ **Proof.**
> $(\implies )$ Por contrapuesta.
> Sup. que $m$ no es primo
> **PD**. $\mathbb{Z}_{m}$ no es un dominio entero.
> Sabemos que $m$ es compuesto. 
> Por una observación previa,
> $$
> m = ab \quad \text{ con } 1< a < m, 1< b < m
> $$
> Entonces, $\bar{a} \bar{b} = \overline{ab} = \bar{m} = \bar{0}$
> Como $1< a < m$, entonces $m \not\mid a$ y así,
> $$
> a \not\equiv 0 \pmod{m}
> $$
> es decir $\bar{a} \neq \bar{0}$. Análogamente $\bar{b} \neq  \bar{0}$.
> Así, $\bar{a} \bar{b} = \bar{0}$ con $\bar{a} \neq  \bar{0}, \bar{b} \neq  \bar{0}$.
> $$
> \therefore \mathbb{Z}_{m} \text{ no es un dom. entero }
> $$
> $(\impliedby )$ Sea $m$ un número primo, $\bar{a},\bar{b} \in \mathbb{Z}_{m}$ tales que $\bar{a} \bar{b} = \bar{0}$.
> **PD**. $\bar{a} = \bar{0} \lor  \bar{b} = \bar{0}$
> Como $\bar{a} \bar{b} = \bar{0}$ se tiene que $\overline{ab} =\bar{0}$ y entonces
> $$
> ab\equiv 0 \pmod{m} \dots \tag{1}
> $$
> Si $\bar{a} \neq  \bar{0}$ se tiene que $a \not\equiv 0 \pmod{m}$ y así $m \not\mid a - 0  = a$. Como $m$ es primo tenemos que $(a,m) = 1$.
> De $(1)$ sabemos que
> $$
> ab \equiv a \cdot  0 \pmod{m} \quad \text{ con } (a,m) = 1
> $$
> Por el inciso $2$ del Teorema anterior,
> $$
> b \equiv 0 \pmod{m}
> $$
> y así $\bar{b} = \bar{0}$
> $$
> \therefore \mathbb{Z}_{m} \text{ es un dom. entero } \tag*{$\blacksquare$}
> $$
>
