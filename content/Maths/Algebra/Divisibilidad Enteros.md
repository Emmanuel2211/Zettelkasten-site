---
modified: 2026-11-13T23:34:20Z
publish: true
type: zettel
date: "2026-09-02"
status: seed
aliases:
tags:
 - algebra
cssclasses: 
 - romana
---
# Divisivilidad $\mathbb{Z}$

> [!theorem] **Definición.** (Criterio Divisibilidad)
>
> Sean $a,b \in  \mathbb{Z}$, decimos que $b$ **divide a** $a$, o que $b$ **es factor de** $a$, o que $a$ **es multiplo de** $b$, o que $a$ es **divisible entre** $b$, si para algun $q \in  \mathbb{Z}$
> $$
> a = bq
> $$
> **Notación.** $b \mid  a$, o $b \not\mid  a$ si $b$ no divide $a$.

> [!observation]+ **Observación.**
>
> Si $a = 0$ tenemos que $b \mid  0$, es decir, $0 = b\cdot q , \quad  q \in  \mathbb{Z}$.
> Además, $b$ podría ser cualquier entero, Ent. $b\mid 0 , \quad \forall  b \in  \mathbb{Z}$
> 


> [!theorem] **Proposición.** 
>
> Sean $a,b \in  \mathbb{Z}$, $u,v \in \mathbb{Z}$ unidades.
> $$
> b \mid a \iff ub \mid va
> $$
>

Lo probamos de forma generalizada para que funcione para Dominios Enteros en general.

 > [!proof]- **Proof.**
 >
 > Sean $a,b \in  \mathbb{Z}$, $u,v \in \mathbb{Z}$ unidades
 > $(\implies )$ Supongamos $b \mid  a$.
 > **P.D.** $ub \mid va$
 > Como $b \mid  a$, ent
 > $$
 > a = bq, \quad q \in \mathbb{Z}
 > $$
 > Mult. por $v$
 > $$
 > \begin{align}
 >   va &= vbq \\[0.5em]
 >   va &= v(u u^{-1})bq \\[0.5em]
 >   va &= ub(vu^{-1}q) \quad \text{ con  }vu^{-1}q \in  \mathbb{Z}\\[0.5em]
 >   \therefore ub &\mid va 
 > \end{align}
 > $$
 > $(\impliedby )$ Sup. $ub \mid  va$
 > **P.D.** $b \mid a$
 > Como $ub \mid  va$,
 > $$
 > va = (ub)q , \quad q \in \mathbb{Z}
 > $$
 > Mult. por $v^{-1}$
 > $$
 > \begin{align}
 > v^{-1}(va) &= v ^{-1}[(ub)q] \\[0.5em]
 > a &= b(v^{-1}uq) \quad \text{ con } v^{-1}uq \in  \mathbb{Z}\\[0.5em]
 > \therefore b &\mid a 
 > \end{align}
 > $$


> [!theorem] **Corolario.** 
>
> $$
> b\mid a \iff \left| b \right|\mid  \left| a \right|
> $$


> [!theorem] **Proposición.**
>
> Sean $a,b \in  \mathbb{Z}$. Si $b\mid  a$ y $a \mid  b$, entonces $a$ y $b$ son asociados, es decir $a = ub$ con $u \in  \mathbb{Z}$ unidad.

> [!proof]- **Proof.**
>
> Sea $a,b \in  \mathbb{Z}$. Sup. $b \mid  a$ y $a \mid b$.
> **P.D.** $a$ y $b$ son asociados.
> $(1)$ Como $b \mid a$, ent. $a = bq, \ q \in  \mathbb{Z}$.
> $(2)$ Como $a \mid  b$, ent. $b = a\hat{q}, \ \hat{q} \in  \mathbb{Z}$.
> Sust.
> $$
> a = bq = (a \hat{q})q = a (\hat{q}q) = a \cdot 1 \tag{3}
> $$
> Si $a = 0$, por $(2)$, $b = 0 \cdot \hat{q} = 0$
> Así, $a=b =0$ y tendriamos
> $$
> a = 0  = 1 \cdot 0 = 1 \cdot b \quad \text{ con unidad } 1 \in  \mathbb{Z}
> $$
> Si $a\neq 0$, cancelando $a$ en $(3)$ tenemos
> $$
> 1 = \hat{q} q
> $$
> entonces $\hat{q}$ y $q$ son unidades de $\mathbb{Z}$.
> Así, por $(1)$
> $$
> a = bq, \quad \text{ con unidad } q \in  \mathbb{Z}
> $$

---

> [!theorem] **Proposición.**
>
> Sean $a,b \in  \mathbb{Z}$ con $a\neq 0$, si $b \mid a$, ent $\left| b \right| \leq \left| a \right|$


> [!proof]- **Proof.**
>
> Sean $a,b \in  \mathbb{Z}$, con $a \neq 0$. Supongamos $b \mid  a$.
> **PD.** $\left| b \right|\leq  \left| a \right|$
> Como $b \mid  a$, ent. $a = bq, \quad q \in  \mathbb{Z} \ \ (1)$ .
> Considero
> $$
> \begin{align}
> \left| a \right| - \left| b \right| &= \left| bq \right| - \left| b \right| \tag{por 1} \\[0.5em]
>  &= \left| b \right|\left| q \right| - \left| b \right| = \left| b \right|(\left| q \right|-1)
> \end{align}
> $$
> **PD.** $\left| a \right| - \left| b \right|\geq 0$. Notemos que $q \neq 0$ ya que si $q = 0$, ent $a= 0$!
> Así, $\left| q \right|\neq 0$ y $\left| q \right|\geq  0$, como no hay enteros entre $0$ y $1$, ent $\left| q \right|\geq  1$ y por def.
> $$
> \left| q \right|-1 \geq  0
> $$
> También $\left| b \right| \geq  0$.
> Así, $\left| a \right| - \left| b \right| = \left| b \right|(\left| q \right|-1) \geq  0$
> $$
> \therefore \left| b\right| \leq \left| a \right|
> $$


> [!theorem] **Teorema.** (Propiedades Básicas)
>
> Sean $a,b,c \in  \mathbb{Z}$. 
> 1. $a \mid  a$.
> 2. Si $a \mid b$ y $b \mid c$, ent. $a \mid  c$.
> 3. Si $b \mid a$ y $b \mid c$, ent. $b \mid a+c$.
> 4. Si $b\mid a$, ent. $b \mid ac$.
> 5. Si $b \mid a$ y $b \mid  c \iff  b \mid  ar+cs \quad \forall r,s \in  \mathbb{Z}$.
> 6.  Si $b\mid a + c, \ b \mid  a$, ent. $b \mid c$.

> [!proof]- **Proof.**
>
> 1. $a = 1\cdot a$ con $1 \in  \mathbb{Z}$
> 2. Sup $a \mid  b$ y $b \mid  c$, es decir $b = aq$ y $c = b \hat{q}$ con $q, \hat{q} \in  \mathbb{Z}$.
> ent. $c  = (aq) \hat{q} = a (q \hat{q})$ con $q \hat{q} \in  \mathbb{Z}$
> Así, $a \mid c$
> 3. Sup $b \mid a$ y $b \mid  c$, es decir $a = b {q}$ y $c = b \hat{q}$ con $q, \hat{q} \in  \mathbb{Z}$.
> Así, $a + c = bq + b \hat{q} = b(q + \hat{q})$, por lo que $b \mid  a +c$.
> 4. Sup $b\mid a$, ie. $a = bq$ con $q \in  \mathbb{Z}$. Mult. por c, $ac =(bq)c = b(qc)$ con $qc \in  \mathbb{Z}$. Así $b \mid  ac$.
> 5. $(\implies )$ Sup $b \mid a$ y $b \mid  c$. Sean $s,t \in  \mathbb{Z}$.
> **PD.** $b \mid as+ct$
> Como $b\mid a$, ent. por $(iv)$, $b \mid as$, de misma forma, $b \mid ct$.
> Por $(iii)$, $b \mid as + ct$.
> $(\impliedby )$ Sup $b \mid  as + ct \quad \forall s,t \in  \mathbb{Z}$
> **PD.** $b \mid a, b \mid  c$.
> Como $b \mid  as + ct \quad \forall  s,t \in  \mathbb{Z}$, en particular.
> $$
> \begin{align}
> b \mid a \cdot 1 + c \cdot 0 &= a \quad \text{ y } \\[0.5em]
> b \mid a \cdot 0 + c \cdot 1 &= a
> \end{align}
> $$
> Por tanto, $b \mid a$ y $b \mid  c$
> 6. Sup la hipotesis, esto es, $a + c = bq$ y $a = bk$, con $q,k \in  \mathbb{Z}$. Sust.
> $$
> \begin{align}
>   bk + c &= bq \quad q,k \in  \mathbb{Z}\\[0.5em]
>   c &= bq - bk \\[0.5em]
>    &= b(q-k) \quad q-k \in  \mathbb{Z} \\[0.5em]
>   &\therefore b \mid c \tag*{$\blacksquare$}
> \end{align}
> $$



> [!observation]+ **Observación.**
>
> Es interesante ver que en $(\impliedby)$ de $(v)$, la hipotesis es muy fuerte. En esa demostración podemos ver que hay algún tipo de demostraciones más simples de lo que parecen, que guardan en su *hip.* la demostración en sí.

> [!observation]+ **Observación.**
>
> Vemos que $(vi)$ es el "reciproco" de $(ii)$ pero con la condición necesaria que $b\mid a$, sino, no se cumple.
> Y si nos preguntamos en $(v)$, que es $ar + cs$ y si se pueden describir todos los $\mathbb{Z}$ a partir de esa expresión? 
>


> [!theorem] **Definición.** (Combinación Lineal Entera)
>
> Sean $a,c \in  \mathbb{Z}$. Una combinación lineal entera de $a$ y $c$ es un elemento de la forma
> $$
> as + ct \quad \text{ con } \quad s,t \in \mathbb{Z}
> $$

> De aquí podemos desarrollar una observación más general:
>
> Si $a,c \in \mathbb{Z}$ tales que $as + ct = 1$ para algún $s,t \in \mathbb{Z}$, ent. $\forall  b \in \mathbb{Z} \ \exists q,t \in  \mathbb{Z} (b = aq + ck)$
>




