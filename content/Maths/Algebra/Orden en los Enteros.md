---
modified: 2026-11-09T14:43:28Z
publish: true
type: zettel
date: "2026-08-25"
status: undone
aliases:
tags:
 - algebra
cssclasses: 
 - romana
---
# Orden en $\mathbb{Z}$

> [!theorem] **Definición.** (Orden en $\mathbb{Z}$)
> Sean $a,b \in \mathbb{Z}$ decimos que $b$ **es mayor que** $a$ si
> $$
> b -a \in \mathbb{N} \setminus \{ 0 \}
> $$
> **Notación.** $a<b$
> Decimos que $b$ **es mayor o igual que** $a$ si
> $$
> b-a \in \mathbb{N}
> $$

> [!observation]- **Observación.**
> 1. Sea $a \in \mathbb{Z}$, $a>0 \iff a \in \mathbb{N}\setminus \{ 0 \}$
> 2. Sea $a \in \mathbb{Z}$, $a \geq 0 \iff a \in \mathbb{N}$

Definido el orden, damos paso a otra propiedade importante de $\mathbb{Z}$

> [!theorem] **Teorema.** (Dominio Entero Ordenado $\mathbb{Z}$)
> En $\mathbb{Z}$ el subconjunto de $\mathbb{N} \setminus \{  0 \}$ cumple lo siguiente:
> 1. $\forall a , b \in \mathbb{N} \setminus \{  0 \} \quad a + b \in \mathbb{N} \setminus \{  0 \}$
> 2. $\forall a,b \in \mathbb{N} \setminus \{  0 \}, \quad  ab \in \mathbb{N} \setminus \{  0 \}$
> 3. Para todo $a \in \mathbb{Z}$ se tiene una y sólo una de las siguientes condiciones
> $$
> a = 0 \quad \lor \quad  a \in \mathbb{N} \setminus \{  0 \} \quad \lor \quad -a \in \mathbb{N}\setminus \{  0 \}
> $$
> Decimos entonces que $\mathbb{Z},+,\cdot$ son un **dominio entero ordenado**.


> [!proof]- **Proof.** 
> $(i)$ y $(ii)$ se dan por las propiedades de $\mathbb{N}$.
> $(iii)$ ya se probo!

> [!theorem] **Teorema.** (Propiedades $<  \ \mathbb{Z}$)
> Sean $a,b,c,d \in \mathbb{Z}$
> 1. Tenemos que $a^{2} \geq 0$.
> 2. Transitividad:
> $$
> a < b \land b <c \implies a < c
> $$
> 3. Conservación $<$ para la suma:
> $$
> a<b \iff a + c < b + c
> $$
> 4. Si $c >0$ tenemos
> $$
> a < b \iff ac < bc
> $$
> 5. Si $c< 0$ tenemos
> $$
> a< b \iff a c > bc
> $$
> 6. Tricotomía: Dados $a,b \in \mathbb{Z}$ se da una y sólo una de las siguientes condiciones
> $$
> a = b \quad \lor \quad a < b \quad \lor \quad b < a
> $$
> 7. 
> 8. $$a<b \land c<d \implies a+c < b + d$$

Muchas de estas demostraciones, en especial de orden, pueden ser descritas geometricamente. Eso ayuda mucho para el desarrollo geometrico-algebraico de justificaciones.

> [!proof]- **Proof.** 
> Sean $a,b,c \in \mathbb{Z}$
> 1. Supongamos $a < b \land b < c$ **P.D.** $a < c$
> Como $a<b$, ent. $b-a \in \mathbb{N} \setminus \{ 0 \}$
> Como $b < c$, ent. $c -b \in \mathbb{N} \setminus \{  0 \}$
> Por prop. en $\mathbb{N}$
> $$
> (c-b) + ( b -a ) \in \mathbb{N} \setminus \{ 0 \}
> $$
> Pero
> $$
> \begin{align}
> (c-b)+ ( b-a) &= (c+ (-b)) + (b + (-a)) \\[0.5em]
> &= (c + ((-b) + b)) + (-a)  \\[0.5em]
> &= (c+0) + (-a) \\[0.5em]
> &= c+(-a) = c-a
> \end{align}
> $$
> Así, $c-a \in \mathbb{N}\setminus \{  0 \}$.
> $$
> \therefore a < c \tag*{$\blacksquare$}
> $$



---
### Links:
- [[Valor Absoluto]]