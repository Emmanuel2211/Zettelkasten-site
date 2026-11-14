---
modified: 2026-11-13T23:34:20Z
title: "Común Divisor"
publish: true
type: zettel
date: 2026-09-11
status: seed
aliases:
  - Maximo Comun Divisor
tags:
  - algebra
cssclasses:
  - romana
---
> [!theorem] **Definción.** (Común Divisor)
>
> Sean $a,b \in  \mathbb{Z}$, decimos que $c \in  \mathbb{Z}$ es un divisor común de $a$ y $b$ si
> $$
> c \mid a \quad \text{ y } \quad c \mid b
> $$
>

> [!observation]+ **Observación.**
>
> - Siempre existen divisores comunes, por ejemplo el 1.
> - Si $a\neq 0$ o $b\neq 0$ existe un divisor común que es mayor o igual que los demás.
> > [!proof]- **Proof.**
> > 
> > $a,b \in \mathbb{Z}$, $a\neq 0$ o $b\neq 0$. Consideramos
> > $D = \{ -c + \left| a \right| +\left| b \right| \mid c \in  \mathbb{Z}, c \mid a \land c \mid b \}$
> > Si $a\neq 0$ y $c\mid a$, ent. $c \leq  \left| c \right| \leq \left| a \right| \leq  \left| a \right|+\left| b \right|$
> > Si $b \neq 0$ y $c \mid b$, ent. $c\leq \left| c \right| \leq \left| b \right|\leq \left| a \right|+\left| b \right|$
> > En cualqueir caso, si $c\mid a$ y $c\mid b$, se tiene que $c\leq \left| a \right|+\left| b \right|$ y así $0 \leq -c + \left| a \right| + \left| b \right|$.
> > Concluimos que $D \subseteq \mathbb{N}$ y como $-1 + \left| a \right|+\left| b \right| \in  D$, $D \neq \varnothing$.
> > Por el PBO, $D$ tiene un elemento mínimo, digamos $-g +\left| a \right|+\left| b \right|$ con $g \mid  a$ y $b \mid b$. Si $c \mid a$ y $c \mid b$ tenemos que $-g + \left| a \right| + \left| b \right| \leq  -c +\left| a \right|+\left| b \right|$. Entonces $c\leq g$ 
> > $$
> > \therefore g \text{ es el mayor divisor común } \tag*{$\blacksquare$}
> > $$


> Recordamos que si $c \mid  a$ y $a \neq  0$, ent. $\left| c \right|\leq \left| a \right|$, ent. $- \left| a \right| \leq  c \leq \left| a \right|$.
> Así, a tiene sólo una cantidad **finita** de divisores.




> [!theorem] **Definición.** (MCD)
>
> Sean $a,b \in  \mathbb{Z}$, con $a\neq 0$ o $b \neq 0$, decimos que $g \in  \mathbb{Z}$ es el **máximo común divisor** de $a$ y $b$ si es el mayor de todos los divisores comunes de $a$ y $b$, se denota $(a,b)$ o $(a \  ; b)$ o $\operatorname{mcd} (a,b)$, es decir,
> $$
> (a,b) = \max \left\{c \in  \mathbb{Z} \mid c \mid a \text{ y } c \mid b\right\} 
> $$


> [!observation]+ **Observaciones.**
>
> $\forall a,b \in  \mathbb{Z}$
> - Si $a \neq 0$ o $b\neq 0$, existe $(a,b)$. (la Obs. anterior)
> - Si $a\neq 0$ o $b\neq 0$, se tiene $1 \leq (a,b)$
> - Sean $a\neq 0$ o $b\neq 0$. Si $u, u'$ son unidades, Ent. $(ua, u'b) = (a,b)$
> - Si solo $a\neq 0$, tenemos $(a,0) = \left| a \right|$

> [!example]- Ejemplo.
>
> Sea $a = 8$ y $b = 12$, y tenemos que $(a,b) = (8,12) = 4$.
> Consideremos las combinaciones lineales enteras de $a$ y $b$, es decir
> $$
> 8s + 12t, \quad s,t \in  \mathbb{Z}
> $$
> Pero, ¿se puede construir todos los $\mathbb{Z}$ de esta combinación lineal?
> NO, dando un contraejemplo:
> $$
> 1 = 8s + 12 t = 4(2s + 3t) \implies  4\mid 1 \quad !!!
> $$
> Pero entonces, que números si podemos crear con esta comb. lineal?
> $$
> \begin{align}
> 4 &= 8(-1) + 12(1) \\[0.5em]
> 16 &= 4(8( -1 ) + 12(1))  = 8(-4) + 12(4)
> \end{align}
> $$
> En general, las combinaciones lineales enteras de $8$ y $12$ son los múltiplos de $4 = (8,12)$. Y la **menor** combinación lineal positiva de $8$ y $12$ es $4 = (8,12)$.

Algunas observaciones sencillas,

> [!theorem] **Lema.**
>
> Sea $S \subseteq \mathbb{Z}$ no vacío, cerrado bajo suma y bajo resta.
> 1. $0 \in  S$
> 2. $a \in  S \implies  -a \in  S$
> 3. $a \in  S \implies  at \in S \quad \forall  t \in  \mathbb{Z}$
>

> [!proof]- **Proof.**
>
> Sea $S \subseteq \mathbb{Z}$ no vacío, cerrado bajo suma y bajo resta,
> 1. Como $S \neq  \varnothing$ existe $a \in  S$, y como $S$ es cerrado bajo resta, $a -a \in S$.
> 2. Sea $a \in  S$, tenemos $-a = 0 - a \in S$, pues $0 \in  S$ y cerrado bajo resta.
> 3. Sea $a \in  S$, sea $t = 0$, tenemos $a\cdot 0 = 0 \in S$.
> Sea $t > 0$, tenemos $a \cdot t = \underbrace{a+\dots+a}_{t\text{-veces }} \in  S$.
> Sea $t < 0$, tenemos $at =(-a)(-t) = \underbrace{-a + \dots + (-a)}_{t\text{-veces}} \in  S$.


> [!theorem] **Lema.**
>
> Sea $S \subseteq \mathbb{Z}$, $S \neq  \varnothing$ cerrado bajo suma y resta. Entonces $S = \{ 0 \}$ o bien existe un elemento positivo mínimo en $S$, digamos $b$, que divide a todo elemento de $S$, ent
> $$
> S = \{ bt \mid  t \in  \mathbb{Z} \}
> $$

> [!proof]- **Proof.**
>
> Sea $\varnothing \neq  S \subseteq  \mathbb{Z}$ cerrado bajo suma y resta. Por Lema 1, $0 \in  S$. Así, si $S = \{ 0 \}$, se cumple.
> Si $S \supset \{ 0 \}$, existe $a \in  S$ con $a \neq  0$. Por Lema 1, también $-a \in  S$. Alguno de $a$ o $-a$ es positivo, ent. en $S$ hay elementos positivos.
> $$
> \varnothing \neq \{ s \in  S \mid s > 0 \} \subseteq \mathbb{N}
> $$
> Por el PBO $\{ s \in  S \mid s > 0 \}$ tiene un elemento mínimo, digamos $b$.
> Sea $c \in  S$. **PD**. $b \mid c$
> Por el algoritmo de la divición,
> $$
> c = bq + r, \quad q,r \in \mathbb{Z} \ \text{ con } \ 0\leq r < \left| b \right| =b
> $$
> Tenemos que, dado $c \in  S, b \in S$ y Lema 1.
> $$
> r = c - bq \in  S
> $$
> Tenemos $0 \leq r < b$ con $r \in  S$. Como $b$ es el positivo mínimo de $S$ y $r<b$, entonces $r$ no puede ser positivo y así $r = 0$.
> $$
> \therefore b \mid  c
> $$
> En consecuencia, $S \subseteq \{ bt \mid t \in \mathbb{Z} \}$. También $\{ bt \mid  t \in  \mathbb{Z} \} \subseteq S$ pues $b \in  S$ y por Lema 1, $bt \in  S \ \ \forall t \in \mathbb{Z}$.
> $$
> \therefore S = \{ bt \mid t \in \mathbb{Z} \}
> $$

> [!theorem] **Teorema.** (Identidad de Bézout)
>
> Sean $a,b \in \mathbb{Z}$ no nulos. El máximo común divisor de $a$ y $b$ es la comb. lineal positiva mínima de $a$ y $b$, es decir
> $$
> (a,b) = \min \left\{ax + by > 0 \mid  x,y \in  \mathbb{Z}\right\} 
> $$
> En particular existen $s,t \in  \mathbb{Z}$ tales que
> $$
> (a,b) = as + bt
> $$


> [!proof]- **Proof.**
>
> Sean $a,b \in  \mathbb{Z}$ no ambos nulos. Considero $S = \{  ax + by \mid  x ,y \in  \mathbb{Z} \}$.
> Notamos que $S \neq \varnothing$ pues $0 = a \cdot 0 + b \cdot 0 \in  S$.
> Además $S$ es cerrado bajo suma y bajo resta, ya que si $s_{1},s_{2} \in  S$.
> $$
> \begin{align}
>   s_{1} &= ax_{1} + by_{1} \quad \text{ con } x_{1},x_{2},y_{1},y_{2} \in \mathbb{Z}\\[0.5em]
>   s_{2} &= ax_{2} + by_{2}
> \end{align}
> $$
> Ent.
> $$
> s_{1} \pm s_{2} = (ax_{1} +by_{1}) \pm (ax_{2} + by_{2}) = a(x_{1} \pm x_{2}) + b(y_{1} \pm y_{2}) \in  S
> $$
> También $a = a \cdot 1 + b \cdot 0 \in  S$ y $b = a \cdot 0 + b \cdot 1 \in  S$ y $a \neq  0$ o $b \neq 0$, entonces $S \neq  \{ 0 \}$.
> Por el Lema 2, $S$ tiene un elemento positivo mínimo, digamos $m$, que devide a todo elemento en $S$.
> **PD**. $m  = (a,b)$
> Como $m$ divide a todo elemento en $S$ y $a,b \in  S$, ent $m \mid  a$ y $m \mid b$, ent. $m \leq (a,b)$.
> Por otro lado, sabemos que $(a,b) \mid a \ \ \text{ y } \ \ (a,b) \mid b$,
> $$
> \begin{align}
> &\implies  (a,b) \mid ax + by \ \ \forall x,y \in \mathbb{Z} \\[0.5em]
> &\implies  (a,b) \mid m \\[0.5em]
> &\implies  (a,b) \leq  m \\[0.5em]
> &\therefore (a,b ) = m \tag*{$\blacksquare$}
> \end{align} 
> $$ 



> [!theorem] **Corolario.**
>
> Sean $g,a,b \in  \mathbb{Z}$ no ambos nulos. Las siguientes condiciones son equvialentes:
> 1. $g = (a,b)$
> 2. $g$ es la comb. lineal positiva mínima de $a$ y $b$.
> 3. $g > 0$, $g \mid a$ y $g \mid b$, $g$ es comb. lineal de $a$ y $b$.
> 4. $g>0$, $g \mid a$ y $g \mid b$, si $d \mid  a$ y $d \mid b$, ent. $d \mid  g$.

> $(iv)$ es, los demás divisores dividen al MCD.

> [!proof]- **Proof.**
>
> Sean $g,a,b \in \mathbb{Z}$, $a$ y $b$ no ambos nulos. $(i) \iff  (ii)$ (Teo. anterior).
>
> $( ii \implies  iii )$
> Sea $g$ la comb. lineal positiva mínima de $a$ y $b$, por el resultado previo $g$ divide a toda comb. lineal de $a$ y $b$, en particular $g \mid a$ y $g \mid  b$.
>
> $(iii \implies  iv)$
> Sea $g > 0$, $g \mid a$ y $g \mid  b$, $g$ es comb. lineal de $a$ y $b$.
> Sea $d \in  \mathbb{Z}$ tal que $d \mid a$ y $d \mid  b$.
> **PD**. $d \mid  g$.
> Como $g$ es comb. lineal de $a$ y $b$
> $$
> g = ax + by \quad x,y \in \mathbb{Z}
> $$
> y como $d \mid  a$ y $d \mid  b$, ent.
> $$
> \begin{align}
> d \mid  ax+by = g \\[0.5em]
>  \therefore d \mid g \tag*{$\blacksquare$}
> \end{align}
> $$



> [!Info]- **Nota!** 
>
> Se puede generalizar y definir el máximo común divisor de más de dos números con al menos uno distinto de cero.


> [!theorem] **Teorema.**
>
> Sean $a,b,m \in \mathbb{Z}$, $a\neq 0$ o $b\neq 0$, y $m\neq 0$. Tenemos que $(ma,mb) = \left| m \right|(a,b)$

> [!proof]- **Proof.**
>
> Sean $a,b,m \in \mathbb{Z}$, $a\neq 0$ o $b\neq 0$, y $m\neq 0$
> - Caso 1: $m> 0$
> $$
> \begin{align}
> (ma,mb) &= \min \left\{(ma)x + (mb)y >0 \mid x,y \in \mathbb{Z}\right\} \\[0.5em]
> &= m \cdot \min \left\{ax + by > 0 \mid  x , y \in \mathbb{Z}\right\} \\[0.5em]
> &= m (a,b) = \left| m \right|(a,b)
> \end{align}
> $$
> - Caso 2: $m< 0$
> $$
> (ma,mb) = (-ma, -mb) = -m ( a,b) = \left| m \right|(a,b)  \tag*{$\blacksquare$}
> $$


> [!theorem] **Definición.** (Cociente)
>
> Sean $a,b \in \mathbb{Z}$, $b\neq 0$. Si $b \mid a$, sabemos que existe $c \in \mathbb{Z}$ tal que $a = bc$. A $c$ se le llama el **cociente de** $a$ **entre** $b$ y se denota por $\displaystyle \frac{a}{b}$.

> [!observation]+ **Observación.**
>
> - Dicha $c$ es única
> - $\displaystyle b \left( \frac{a}{b}\right) = a$


> [!theorem] **Teorema.**
>
> Sean $a,b,c \in \mathbb{Z}$, $a\neq 0$ o $b\neq 0$, y $c \neq 0$. Si $c\mid a$ y $c \mid b$ entonces,
> $$
> \left| c \right| \mid (a,b) \quad \text{ y } \quad \left( \frac{a}{c} , \frac{b}{c}  \right) = \frac{(a,b)}{\left| c \right|}
> $$

> [!proof]- **Proof.**
>
> Sean $a,b,c \in \mathbb{Z}$, $a\neq 0$ o $b\neq 0$, $c\neq 0$.
> Supongamos que $c\mid a$ y $c \mid b$. Por propiedades del máximo común divisor tenemos que $c \mid (a,b)$ y entonces también $\left| c \right|\mid (a,b)$.
> Ahora, por Obs. 2 y teorema anterior,
> $$
> (a,b) = \left( c \frac{a}{c} , c \frac{b}{c}  \right) = \left| c \right| \left( \frac{a}{c} , \frac{b}{c}  \right)
> $$
> Y por def. $\displaystyle \left( \frac{a}{c}, \frac{b}{c}  \right) = \frac{(a,b)}{\left| c \right|}$
> $$
> \tag*{$\blacksquare$}
> $$


> [!theorem] **Corolario.**
>
> Sean $a,b \in \mathbb{Z}$, $a\neq 0$ o $b\neq 0$. Entonces,
> $$
> \left( \frac{a}{(a,b)} , \frac{b}{(a,b)}  \right) = 1
> $$

> [!proof]- **Proof.**
>
> Usando el teorema anterior con $c = (a,b)$


> [!theorem] **Definición** (Primos Relativos)
>
> Sean $a,b \in \mathbb{Z}$, $a\neq 0$ o $b\neq 0$. Decimos que $a$ y $b$ son **primos relativos** o **coprimos** si  $(a,b) = 1$.

> [!example]- **Ejemplo.** 
>
> 28 y 55 son primos relativos ya que $(28,55) = 1$.

> [!theorem] **Teorema.**
>
> Sean $a,b,c \in \mathbb{Z}$ con $a\neq 0$ y $b\neq 0$, o bien $c\neq 0$. Si $(a,c) = (b,c) = 1$, entonces $(ab,c) = 1$


> [!proof]- **Proof.**
>
> Sean $a,b,c \in \mathbb{Z}$, $a\neq 0$ y $b\neq 0$, o bien $c\neq 0$.
> Supongamos que $(a,c) = (b,c) = 1$. Sabemos que existen $s,t,r,q \in \mathbb{Z}$ tales que
> $$
> as + ct = 1 \quad \text{ y } \quad br + cq = 1
> $$
> Lo que implica, $1 = (as + ct)(br+cq)= (ab)s r + c ( t b r + a s q + c  t q)$ que es una combinación lineal entera de $ab$ y $c$. 
> Dado que $(ab,c)$ es la comb lineal entera positiva mínma de $ab$ y $c$, concluimos que $(ab,c) = 1$
> $$
> \tag*{$\blacksquare$}
> $$


> [!theorem] **Lema.** (Lema de Euclides)
>
> Sean $a,b,c \in \mathbb{Z} \setminus \{ 0 \}$. Si $c \mid ab$ y $(c,a) = 1$, entonces $c \mid b$

> [!proof]- **Proof.**
>
> Sean $a,b,c \in \mathbb{Z}$, $c$ y $a$ no ambos nulos. Supongamos $c \mid ab$ y $(c,a) =1$. Como $(c,a) = 1$ existen $s,t \in \mathbb{Z}$ tales
> $$
> 1 = as + ct,
> $$
> Mult. por $b$
> $$
> b = b(as+ct) = abs + bct
> $$
> Como $c \mid ab$ ent. $c \mid abs$. Además, $c \mid bct$, ent. $c \mid  abs + bct = b$
> $$
> \therefore c \mid b \tag*{$\blacksquare$}
> $$


