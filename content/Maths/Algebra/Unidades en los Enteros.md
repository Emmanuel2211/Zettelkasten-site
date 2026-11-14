---
modified: 2026-11-13T23:34:20Z
publish: true
type: zettel
date: "2026-08-31"
status: seed
aliases:
tags:
 - algebra
cssclasses: 
 - romana
---
# Aún más propiedades en $\mathbb{Z}$

> [!theorem] **Teorema.** (Se cumple el *PBO*)
>
> **No** existe $a \in \mathbb{Z}$ tal que
> $$
> 0 <a < 1
> $$

> [!proof]- **Proof.** 
>
> Supogamos *PRAA* (por reducción al absurdo) que existe $a \in \mathbb{Z}$ tal que $0<a <1$.
> Consideramos
> $$
> A = \{ x \in \mathbb{Z} \mid 0 <x < 1 \}
> $$
> Como $a \in A$ (*estoy considerando una colección con almenos un elementos*) tenemos que $A \neq \varnothing$. De hecho, observamos que $A \subseteq \mathbb{N}$. Por *PBO* (*principio del buen orden*).
> $$
> \exists m \in A \ \forall x \in A (m\leq x)
> $$
> Como $m \in A$ tenemos
> $$
> 0 < m < 1
> $$
> Consideramos $m^{2} =  \mathcal{m \cdot m}$
> Como $m <1$ y $m >0$, tenemos
> $$
> m^{2} = m \cdot m < 1 \cdot m = m
> $$
> Ent.
> $$
> m^{2} < m
> $$
> Además, como $m>0$ sabemos que $m^{2}= m \cdot m > 0$
> Así,
> $$
> 0 < m^{2} < m < 1
> $$
> Por lo que $m^{2} \in A$ pero con $m^{2} < m \ !$. Esto contradice el *PBO*!
> $$
> \tag*{$\blacksquare$}
> $$
> 

> [!theorem] **Definición.** (Unidad)
>
> Decimos que $u \in \mathbb{Z}$ es una **unidad** en $\mathbb{Z}$ si tiene inverso multiplicativo. Es decir,
> $$
> \exists  v \in \mathbb{Z} \ (u \cdot v= 1) 
> $$

> [!theorem] **Teorema.** (Unidades en $\mathbb{Z}$)
>
> Las **únicas unidades** en $\mathbb{Z}$ son $1$ y $-1$.

> [!proof]- **Proof.** 
>
> $1$ es unidade en $\mathbb{Z}$ ya que $(1)(1) = 1$.
> $-1$ es unidad en $\mathbb{Z}$ ya que $(-1)(-1) = 1$
> Veamos que son las únicas.
> Sea $a \in \mathbb{Z}$ unidad
> **P.D.** $a=1$ o $a=-1$
> Como $a$ es unidad tiene inv. mult. Digamos $b \in \mathbb{Z}$, ent.
> $$
> ab = 1
> $$
> Tenemos, por propiedades de valor absoluto
> $$
> 1 = \left| 1 \right| = \left| ab \right|  = \left| a \right|\left| b \right|
> $$
> Así, $\left| a \right|\left| b \right|= 1$
> Notamos que $a\neq 0$ y $b\neq 0$, ent.
> $$
> \left| a \right| >0 \quad \text{ y } \quad \left| b \right|>0
> $$
> Como no hay enteros entre $0$ y $1$, tenemos
> $$
> \left| a \right|\geq 1 \quad \text{ y } \quad \left| b \right|\geq 1
> $$
> Si multiplico, $\left| b \right|\geq 1$ por $\left| a \right|$ entonces
> $$
> \left| a \right|\left| b \right| \geq \left| a \right|\cdot 1 = \left| a \right| \geq 1
> $$
> Ent. $\left| a \right| = 1$, ent. $a=1$ o $-a =1$
> $$
> \therefore a = 1 \lor a =-1 \tag*{$\blacksquare$}
> $$



