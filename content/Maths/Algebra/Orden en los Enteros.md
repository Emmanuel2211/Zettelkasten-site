---
modified: 2026-09-08T21:23:30Z
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
#### 3.1 Teorema. 
Para cualesquiera $[(n,m)],[(p,q)] \in \mathbb{Z}$,
$$
[(n,m)]< [(p,q)] \iff n+q < m+p.
$$
Este resultado da una equivalencia muy útil de la definición (3), basada de manera más directa en el orden de los $\mathbb{N}$.
**3.2 Notación.** $b\leq a$ será una abreviatura cuando suceda que $b<a$ o $b =a$.
###### 3.3 Lema. 
$a <b \iff \exists t \in \mathbb{Z}^+ : a + t = b$.
Una característica importantísima es que $<_{\mathbb{Z}}$ ordena linealmente a $\mathbb{Z}$.
#### 3.4 Teorema. 
($\mathbb{Z}, <_{\mathbb{Z}}$) es un orden lineal, a saber, cumple que:
1. $\forall a \in \mathbb{Z}$, $a \not< a,$ es decir, $<$ es ***antirreflexiva***.
2. $\forall a,b,c \in \mathbb{Z}$ tales que $a<b$ y $b<c$, se tiene que $a<c$, es decir, $<$ es ***transitiva***.
3. Dados $a,b \in \mathbb{Z}$ se tiene una y sólo una de las siguientes: $a<b$, $b<a$, $a=b$, es decir, $<$ es ***tricotómica***.
<!--ID: 1775502814377-->


##### 3.5 Proposiciónes. (de $<_{\mathbb{Z}}$) #flashcard
Para cualesquiera $a,b,c \in \mathbb{Z}$:
1. $(c \in \mathbb{Z}^+ \cup \{ 0 \} \land a < b) \implies a < b + c$
2. $a < b \iff a + c < b + c$
3. si $c \in \mathbb{Z}^+, \ a<b \iff a \cdot c < b \cdot c$
4. si $c \in \mathbb{Z}\setminus \mathbb{Z}^+$ y $a<b$, entonces $a\cdot c \geq b \cdot c$
5. si $c \in \mathbb{Z}^-, \ a < b \iff a \cdot c > b \cdot c$
6. si $b,c \in \mathbb{Z}^+$ y $a < b$, entonces $a< b\cdot c$
<!--ID: 1775502814380-->


**4. [[Valor Absoluto]]**
La operación **valor absoluto** es la función $|\ |: \mathbb{Z} \to \mathbb{Z}$ tal que...

**5.** Un entero $a$ tiene **inverso multiplicativo** $\iff$ $\exists b \in \mathbb{Z}$ tal que $ab=1$.
Gracias a esta propiedad se dice que $1$ y $-1$ son las **unidades** de $\mathbb{Z}$. Pero para probar esto se necesita lo siguiente.
###### 5.1 Lema 
Si $a \in \mathbb{Z}^+$, entonces $a = 1$ o $a >1$.
Ahora sí veamos que estas realmente sean las únicas unidades de $\mathbb{Z}$.
#### 5. Teorema. 
Los únicos enteros que tienen inverso multiplicativo son $1$ y $-1$
**5.2** Para cualquier $a \in \mathbb{Z}$, existe $u \in \mathbb{Z}$  tal que $\lvert a \rvert = u \cdot a$. En efecto, como $1$ y $-1$ son unidades y $\lvert a \rvert$ es $a$ o $-a$, podemos concluir que $\lvert a \rvert = 1 \cdot a$ o $\lvert a \rvert = -1 \cdot a$.

---
### Links:
- [[Valor Absoluto]]