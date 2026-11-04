---
modified: 2026-10-29T01:29:36Z
title: "Números Primos"
publish: true
---
> [!theorem] **Definición.** (Primos)
> Sea $p \in \mathbb{Z}\setminus \{ 0,1,-1 \}$. Decimos que $p$ es un **número primo** si tiene exactamente dos divisores positivos, $1$ y $\left| p \right|$. En caso contrario decimos que $p$ es un **número compuesto**.

> [!observation]+ **Observación.**
> Si $a \in \mathbb{Z}$ es compuesto, entonces $a=bc$ con $b,c \in \mathbb{Z}$,
> $$
>  1 < \left| b \right| < \left| a \right| \quad \text{ y } \quad 1 < \left| c \right| < \left| a \right| 
> $$

> [!theorem] **Lema.**
> Sean $n \in \mathbb{N}$, $n \geq 2$, $a_{1},\dots,a_{n}, p \in \mathbb{Z}$ con $p$ primo.
> Si $p \mid a_{1}a_{2}\cdots a_{n}$, entonces $p \mid a_{i}$ para algún $i \in \{ 1,\dots,n \}$.


> [!proof]- **Proof.**
> Sea $n \in \mathbb{N}$, $n\geq 2$, $p$ primo. Por inducción sobre $n$, $n =2$. Sean $a_{1},a_{2} \in \mathbb{Z}$ tales que $p \mid a_{1}a_{2}$.
> Si $p \not\mid a_{1}$, ent. $(p,a_{1}) = 1$ y por el lema de Euclides $p \mid  a_{2}$.
> Sea $n \in \mathbb{N}$, $n \geq 2$.
> Supongamos que si $p$ divide a un producto de $n$ factores, entonces divide a algún factor  (HI)
> Sean $a_{1},\dots,a_{n+1} \in \mathbb{Z}$ tales que $p\mid a_{1}a_{2}\cdots a_{n+1}$.
> Si $p \not\mid a_{1}$, entonces $(p,a_{1}) =1$ y por el lema de Euclides $p\mid a_{2}\cdots a_{n+1}$.
> Por HI tenemos que $p\mid a_{i}$ para algún $i \in \{ 2,\dots,n+1 \}$

> [!theorem] **Teorema.** (Teorema Fundamental de la Aritmética)
> Todo entero $a$ no nulo es unidad, o de la forma
> $$
> a = up_{1}\cdots p_{t} 
> $$
> con $u \in \mathbb{Z}$ unidad, $t \in \mathbb{N}^{+}$, $p_{1},\dots,p_{t}\in \mathbb{Z}^{+}$ primos, y esta expresión es única salvo por el orden de los factores.


> [!proof]- **Proof.**
> Sea $a \in \mathbb{Z}\setminus \{ 0 \}$.
>
> **Existencia** por inducción sobre $\left| a \right|$!
> Sea $\left| a \right| = 1$, entonces $a = 1$ o $a = -1$ y $a$ es unidad.
> Sea $\left| a \right| >1$.
> Supongamos que si $c \in \mathbb{Z}\setminus \{ 0 \}$ es tal que $\left| c \right|<\left| a \right|$, ent. $c$ es unidad o se descompone del teorema. (HI)
> Si $a$ es un número primo hemos terminado.
> Si $a$ es un compuesto, por la observación $a = bc$ con $b,c \in \mathbb{Z}$, $1<\left| b \right|<\left| a \right|$,
> $1 < \left| c \right|<\left| a \right|$.
> Como $1 < \left| b \right|$ y $1 < \left| c \right|$, $b$ y $c$ no son unidades y por HI,
> $$
> b = u p_{1} \cdots p_{t} \quad \text{ y } \quad c = vq_{1}\cdots q_{r}
> $$
> para $u,v \in \mathbb{Z}$ unidades, $t,r \in \mathbb{N}^{+}$, $p_{1},\dots,p_{t}, q_{1},\dots,q_{r} \in \mathbb{Z}^{+}$ primos.
> Así, $a = (uv)p_{1}\cdots p_{t} q_{1} \cdots q_{r}$, con $uv \in \mathbb{Z}$ unidad, $t+r \in \mathbb{N}^{+}$, y $p_{1},\dots,p_{t},q_{1},\dots,q_{r} \in \mathbb{Z}^{+}$ primos. Por lo tanto existe!
>
> **Unicidad**.
> Sup. que existe $a \in \mathbb{Z} \setminus \{ 0 \}$ con $a = up_{1}\cdots p_{t} = v q_{1} \cdots q_{r}$ con $u,v \in \mathbb{Z}$ unidades, $t,r \in \mathbb{N}^{+}$, $p_{1},\dots,p_{t},q_{1},\dots,q_{r}\in \mathbb{Z}^{+}$ primos.
> Dado que $u$ y $v$ determinan el signo de $a$, $u = v$ y así
> $$
> p_{1}\cdots p_{t}  = q_{1} \cdots q_{r}
> $$
> Tenemos que $p_{1} \mid  q_{1} \cdots q_{r}$. Por el lema previo $p_{1} \mid q_{i}$ para algún $i \in \{ 1,\dots,r \}$. Sin pérdida de generalidad $p_{1}\mid q_{1}$ y como ambos son primos positivos $p_{1} = q_{1}$. Así,
> $$
> p_{2} \cdots p_{t} = q_{2} \cdots q_{r}
> $$
> si $t < r$, al continuar de este modo, $1 = q_{t+1}\cdots q_{r}$ y entonces $q_{r}$ es unidad $!$ Contradicción!
> Análogamente si $t > r$
> $$
> \therefore \text{ la descomposición es única }
> $$





