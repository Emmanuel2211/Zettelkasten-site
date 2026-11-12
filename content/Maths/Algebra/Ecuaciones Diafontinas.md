---
modified: 2026-10-29T01:39:46Z
title: "Ecuaciones Diafontinas"
publish: true
type: zettel
date: "2026-09-01"
status: undone
aliases:
tags:
 - algebra
cssclasses:
 - romana
---
> [!theorem] **Definición.** (Ecuación Diafontina)
>
> A las ecuaciones planteadas con enteros, en las que se buscan soluciones enteras, se conocen como **ecuaciones diafontinas**, son de la forma
> $$
> ax + by = c \quad a,b,c \in \mathbb{Z}
> $$

> [!observation]+ **Observación.**
>
> La ecuación $0x + 0y = c$, con $c \in  \mathbb{Z}$, tiene solución si y sólo si $c= 0$, y en ese caso todo par $x,y \in \mathbb{Z}$ es solución.


> [!theorem] **Teorema.** (Condición necesaria para solución)
>
> Sean $a,b,c \in \mathbb{Z}$, con $a\neq 0$ o $b\neq 0$. La ecuación $ax + by=c$ tiene soluciones enteras si y sólo si $(a,b)\mid c$.


> [!proof]- **Proof.**
>
> Sean $a,b,c \in \mathbb{Z}, a\neq 0$ o $b\neq 0$.
> $(\implies)$ Supongamos que $ax+by = c$ tiene solución entera, entonces existe $s,t \in \mathbb{Z}$ tales que $as + bt =c$. Como $(a,b) \mid a, (a,b) \mid b$, entonces $(a,b)\mid as + bt = c$
> $$
> \therefore (a,b)\mid c
> $$
> $(\impliedby)$ Supongamos que $(a,b)\mid c$. Entonces $c = (a,b)q$ con $q \in \mathbb{Z}$. Sabemos que existen $s,t \in \mathbb{Z}$ tales que $as +bt = (a,b)$. Multiplicando por $q$,
> $$
> a(qs) + b(qt) = q(as + bt) = (a,b)q = c
> $$
> Así, $x = qs$, $y = qt$ es sollución entera de $ax+by = c$
> $$
> \tag*{$\blacksquare$}
> $$

> [!theorem] **Teorema.** (Soluciones en el caso de ser coprimos, e igual a $0$)
>
> Sean $a,b \in \mathbb{Z}$, $a\neq 0$ o $b\neq 0$, $(a,b) = 1$. Las soluciones enteras de $ax + by = 0$ son
> $$
> x = -bt, \quad y = at, \quad \text{ con } t \in \mathbb{Z}
> $$

> [!proof]- **Proof.**
>
> Sean $a,b \in \mathbb{Z}$, $a\neq 0$ o $b\neq 0$, $(a,b) = 1$.
> consideremos $x = -bt$, $y = at$ con $t \in \mathbb{Z}$. Entonces,
> $$
> a(-bt) + b(at) = -abt + abt = 0
> $$
> $x = -bt$, $y = at$ es una solución entera de $ax+by = 0$
> Veamos ahora que toda solución entera es de esa forma.
> Caso 1: $a\neq 0$
> Sean $x = e, y = f \in \mathbb{Z}$ solución de $ax + by = 0$. Ent. $ae +bf = 0$ y así
> $$
> a\mid ae = -bf
> $$
> Como $(a,b) = 1$, por el lema de Euclides $a \mid f$.
> Así, $f = at$ con $t \in \mathbb{Z}$ y entonces
> $$
> ae = -bf = -b(at) = a(-bt) \implies e = -bt
> $$
> Caso 2: $b \neq  0$
> Es análogo
> $$
> \tag*{$\blacksquare$}
> $$

El siguiente Teorema enuncia lo mismo pero de forma conjuntista. Es bueno pensar todo de manera conjuntista, te da mayor perspectiva.

> [!theorem|alt]- **Teorema.**
>
> Sea $a,b \in \mathbb{Z}\setminus \{ 0 \}$, sea $(a,b) = 1$. El conjunto de soluciones de $ax+by = 0$ es
> $$
> \{ (bt, -at) \mid  t \in  \mathbb{Z} \}
> $$

> [!proof]- **Proof.**
>
> Sea $S$ el conjunto de soluciones de $ax + by = 0$.
> **PD.** $S = \{ (bt, -at) \mid  t \in  \mathbb{Z} \}$
> $(\supseteq)$
> la idea es simple $a(bt) + b(-at) = 0$
> $(\subseteq)$
> Sea $(z,w) \in  \mathbb{Z} \times  \mathbb{Z}$ una solución de $ax+by =0$.
> Es decir, $(z,w) \in S$.
> **PD.** $z = bt$ y $w = -at$ p.a $t \in  \mathbb{Z}$
> Sabemo
> $az + bw = 0 \implies az = -bw$
> Tenemos que $a \mid az \implies a\mid -bw$ y como $(a,b) = 1$, ent $a \mid  w$, a partir de aqui podemos demostrarlo de dos formas:
> 
> 1. Podemos considerar entonces el cociente $\displaystyle \frac{w}{a}$ que es un entero $\displaystyle a\left(\frac{w}{a}  \right) = w$.
> Analogamente, $b \mid -bw$, ent. $b\mid az$ y como $(a,b) = 1$, ent $b \mid z$ y podemos considerar el cociente $\displaystyle  \frac{z}{b}$ que es un entero (es el único entero que mult. por $b$ me da $z$ i.e $\displaystyle b \left(\frac{z}{b}  \right) = z$)
> Tenemos, ent.
> $$
> a \left(b \frac{z}{b}  \right) = -b \left(a \frac{w}{a}  \right)
> $$
> Como $a\neq 0$ y $b\neq 0$ puedo cancelarlos, ent $\displaystyle \frac{z}{b} = -\frac{w}{a}$
> Llamemos $t$ a este número. Reescribiendo
> $$
> z = b \left(\frac{z}{b}  \right) = bt, \quad w = a \left( \frac{w}{a}  \right) = a (-t) = -at \tag*{$\blacksquare$}
> $$
>
> 2. Como $a \mid w$, ent. $w = ak \quad k \in \mathbb{Z}$.
> Sust en
> $$
> az = -b(ak)
> $$
> Como $a\neq 0$, la cancelo
> $$
> z = -bk
> $$
> LLamando a $-k = t$ tenemos
> $$
> z = -bk =bt \quad \text{ y } \quad w =ak = a(-t) = -at \tag*{$\blacksquare$}
> $$

> Y ¿cómo encuentro todas las sol. de $ax + by = 0$ si $(a,b) \neq 1$?
> Busco las soluciones de  $25x  + 35 y = 0$, sabemos $(25,35) = 5$.
> Y podemos dividir en $5$, cierto? $5x + 7y = 0$
>
> Pero las soluciones de las dos ecuaciones son las mismas ya que para $z,w \in \mathbb{Z}$
> $$
> 25z + 35w = 0 \iff 5(5z + 7w) = 0 \iff 5z + 7w
> $$
> En general, para $z,w \in \mathbb{Z}$
> $az + bw = 0 \iff (a,b)\left(\frac{a}{(a,b)}z  + \frac{b}{(a,b)}w \right) = 0 \iff \frac{a}{(a,b)}z + \frac{b}{(a,b)}w = 0$
> Hemos probado que las soluciones de $ax + by = 0$ son las mismas que las de
> $$
> \frac{a}{(a,b)}x + \frac{b}{(a,b)}y = 0
> $$
> y como $\displaystyle \left( \frac{a}{(a,b)} , \frac{b}{(a,b)}  \right) = 1$ sus soluciones son
> $$
> \left\{ \left(\frac{b}{(a,b)}t , - \frac{a}{(a,b)}t\right) \mid  t \in \mathbb{Z} \right\}
> $$


> [!theorem] **Corolario.** (Soluciones de no ser coprimos, e igual a 0)
>
> Sean $a,b \in \mathbb{Z}$, $a\neq 0 \lor  b\neq 0$. Las soluciones entaras de $ax + by =0$ son
> $$
> x = \frac{-b}{(a,b)}t, \quad y = \frac{a}{(a,b)}t, \quad t \in \mathbb{Z}
> $$

En si, si es homogenea, busco sus primos relativos y divido la ecuación entre su MCD, y encuentro el conjunto de todas sus soluciones. 

Una observacion es que nuestra grafica de soluciones de una ecuación, es solo en terminos de enteros, es decir, los puntos de nuestra grafica solo esta en unidades de nuestra pendiente más pequeña posible (ojo! en $\mathbb{Z}$).


> [!theorem] **Teorema.** (Todas las soluciones a partir de una dada, y más una igual a 0)
>
> Sean $a,b,c \in \mathbb{Z}$, $a \neq 0$ o $b\neq 0$, $(a,b) \mid c$. Sean $e,f \in \mathbb{Z}$ tales que $ae + bf = c$. Las soluciones enteras de $ax + by = c$ son los pares de la forma
> $$
> x = e + u, \quad y = f+v
> $$
> con $u,v \in \mathbb{Z}$ tales que $au + bv = 0$

> [!proof]- **Proof.**
>
> Sean $a,b,c \in \mathbb{Z}$, $a\neq 0$ o $b \neq 0$, $(a,b)\mid c$.
> Sea $x = e$, $y = f$ una solución entera de $ax + by = c$
> Dada $u,v \in \mathbb{Z}$ tales que $au + bv = 0$ tenemos,
> $$
> a ( e+ u) + b ( f+ v) = (ae + bf) + (au + bv) = c + 0 = c
> $$
> Así, $x = e + u$, $y = f+v$ es una solución de $ax + by = c$.
> Veamos que toda solución es de esta forma. Supongamos que $g,h \in \mathbb{Z}$ cumplen que $ag + bh = c$. Tenemos que $g = e + (g-e), h = f+(h-f)$
> Además, $a ( g- e) + b (h- f) = (ag + bh) - (ae + bf) = c - c = 0$
> Así,
> $$
> g = e + (g-e), \quad h = f+ (h-f)
> $$
> con $x = g- e, y = h - f$ una solución entera de $ax + by =0$
> $$
> \tag*{$\blacksquare$}
> $$


> [!theorem] **Corolario.** (Todas las soluciones, dada una sola solución)
>
> Sean $a,b, c\in \mathbb{Z}$, $a\neq 0$ o $b\neq 0$, $(a,b)\mid c$. Sean $e,f \in \mathbb{Z}$ tales que $ae + bf = c$. Las soluciones enteras de $ax+by = c$ son los pares de la forma,
> $$
> x = e + \left( \frac{-b}{(a,b)}t  \right) \quad y = f + \left(\frac{a}{(a,b)}t  \right) \quad \text{  con } t \in \mathbb{Z}
> $$

De nuevo, es importante ver esto de forma conjuntista. Estos teoremas nos responden ¿Cuál es el conjunto de todas las soluciones?

> [!example]- Ejemplo.
>
> Encuentra las soluciones enteras de $56x + 315y = 42$. Mediante el algoritmo de Euclides vimos que $(56, 315 = 7)$ y $7 \mid 42$, por lo que existe una solución entera. Vimos además que
> $$
> 56(17 ) + 315(-3) = 7
> $$
> Multiplicando por $6$
> $$
> 56(102) + 315(-18) = 42
> $$
> Así $x = 102, y = -18$ es una solución particular. Las soluciones de $56x + 315y = 42$ son
> $$
> \begin{align}
> x &= 102 + \left( \frac{-315}{7}  \right)t \quad y = -18 +\frac{56}{7}t, \quad  t \in \mathbb{Z}\\[0.5em]
> x &= 102 - 45t \quad y = -18 + 8t, \quad t \in \mathbb{Z}
>\end{align}
> $$

