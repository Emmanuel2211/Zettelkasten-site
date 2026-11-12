---
modified: 2026-11-10T19:09:50Z
title: "Resolviendo Congruencias"
publish: true
---
> [!example]- Ejemplo.
>
> $m  =5$, tendrá solución?
> $$
> 2x \equiv 4 \pmod{5} \tag{1}
> $$
> como $(2,5) = 1$, tiene inverso mult. módulo $5$, $2^{-1}_{5} \equiv 3$
> Mult. $(1)$ por $3$ tenemos
> $$
> \begin{align}
>   3(2x) \equiv 3(4) \pmod{5} \\[0.5em]
>   1x \equiv 12 \pmod{5} \\[0.5em]
>   x \equiv 2 \pmod{5}
> \end{align}
> $$
> Ent. $2$ es solución de $(1)$.
> Observamos que $7$ también, más allá, cualquier $x \equiv 2 \pmod{5}$ es solución:
> Además, si $t \in \mathbb{Z}$ es solución, ent. $2t \equiv 4 \pmod{5}$.
> También $2(2) \equiv 4 \pmod{5}$. Entonces, $2t \equiv 2(2) \pmod{5}$, y por tanto,
> $$
> t \equiv 2 \pmod{5} \tag*{$\square$}
> $$
>


Consideremos $m \in \mathbb{Z}^{+}, a,b \in \mathbb{Z}$ con $(a,m) = 1$. Ent. la congruencia
$$
ax \equiv b \pmod{m} \tag{1}
$$
tiene solución. Una solución es $a^{-1}_{m}b$, ya que como $(a,m) = 1$ existe $a_{m}^{-1}$ y mult $(1)$ por $a_{m}^{-1}b$ ...; 

> [!observation]+ **Observación.**
>
> Sean $a,b \in \mathbb{Z}, m \in \mathbb{Z}^{+}$ la congruencia
> $$
> ax \equiv 1 \pmod{m}
> $$
> tiene solución si y sólo si $(a,m) = 1$ y cualesquiera dos soluciones son congruentes módulo $m$.
>
> > [!proof]- **Proof.**
> >
> > Se debe a que $x \in \mathbb{Z}$ es solución si y sólo si $x$ es un inverso de $a$ módulo $m$.

> [!theorem] **Proposición 1.**
>
> Sean $a,b \in \mathbb{Z}, m \in \mathbb{Z}^{+}$. Si $(a,m) =1$, entonces la congruencia
> $$
> ax \equiv b \pmod{m}
> $$
> tiene solución y cualesquiera dos soluciones son congruentes módulo $m$.

> [!proof]- **Proof.**
>
> Sean $a,b \in \mathbb{Z}, m \in \mathbb{Z}^{+}, (a,m) = 1$
> Como $(a,m) = 1$ existe un inverso de $a$ módulo $m$ que denotamos por $a_{m}^{-1}$. Veamos que $a_{m}^{-1}b$ es solución de $ax \equiv b \pmod{m}$.
> Como $a a_{m}^{-1} \equiv 1 \pmod{m}$, multiplicando por $b$
> $$
> \begin{align}
> (aa_{m}^{-1})b \equiv b \pmod{m} \\[0.5em]
> \implies  a(a^{-1}_{m}b) \equiv b \pmod{m}
> \end{align}
> $$
> Así, $a_{m}^{-1}b$ es una solución de $ax \equiv b \pmod{m}$.
> Sean $c,d \in \mathbb{Z}$ soluciones de $ax \equiv b \pmod{m}$. Entonces
> $$
> ac \equiv b \pmod{m} \quad \text{ y } \quad ad \equiv b \pmod{m}
> $$
> Así, $ac \equiv ad \pmod{m}$. Como $(a,m) = 1$ podemos cancelar y obtenemos que $c \equiv d \pmod{m}$. Q.E.D.


> [!example]- Ejemplos.
>
> 1. $8m \equiv 1 \pmod{35}$
> Buscamos un inverso de $8$ módulo $35$
> $$
> \begin{align}
>   35 &= 8(4) + 3 \quad 0<3<8 \\[0.5em]
>   8 &= 3(2) + 2 \quad 0 < 2 < 3 \\[0.5em]
>   3 &= 2(1)  + 1 \quad 0 < 1 < 2 \\[0.5em]
>   2 &= 1(2) + 0
> \end{align}
> $$
> Asį $(35,8) = 1$ y existe un inverso de $8$ módulo $35$. Además,
> $$
> 1 = 3-2 = 3-(8-3(2)) = 3(3) - 8 = 3(35 - 8(4))-8 = 35(3) + 8\boxed{(-13)}
> $$
> Ent. $-13$ es un inverso de $8$ mód $35$.
> **Solución:** $x \equiv -13 \pmod{35}$
>
> 2. $9x \equiv 10 \pmod{14}$
> Calculamos $(9,14)$
> $$
> \begin{align}
>   14 &= 9(1) + 5 \quad 0 < 5 < 9\\[0.5em]
>   9 &= 5(1) + 4 \quad 0 < 4 < 5 \\[0.5em]
>   5 &= 4(1) + 1 \quad 0<1<4 \\[0.5em]
>   4 &= 1(4) + 0
> \end{align}
> $$
> Así, $(9,14) = 1$ y además,
> $$
> 1 = 5-4 = 5-(9-5) = 5(2)-9 = (14-9)(2) - 9 = 14(2) + 9\boxed{-3}
> $$
> Ent. $-3$ es un inv. de $9$ mod. $14$. Multiplicando,
> $$
> \begin{align}
>    9x \equiv 10 \pmod{14}\\[0.5em]
>    x \equiv (-3) 10 \pmod{14} \\[0.5em]
>    x \equiv -30 \pmod{14}\\[0.5em]
>    x \equiv -2 \pmod{14}\\[0.5em]
> \end{align}
> $$
> **Solución.** $x \equiv -2 \pmod{14}$


> [!theorem] **Teorema.**
>
> Sean $m \in \mathbb{Z}^{+}, a, b \in \mathbb{Z}.$ La congruencia
> $$
> ax \equiv b \pmod{m}
> $$
> tiene solución si y sólo si $(a,m) \mid b$.

> [!proof]- **Proof.**
>
> Sean $m \in \mathbb{Z}^{+}, a,b \in \mathbb{Z}$
> $(\implies )$ Supongamos que la congruencia $ax \equiv b \pmod{m}$ tiene solución. Existe entonces $s \in \mathbb{Z}$ tal que $as \equiv b \pmod{m}$. Así $m \mid as - b$ o bien existe $t \in \mathbb{Z}$ tal que $as-b = mt$. Tenemos entonces que
> $$
> as - mt = b
> $$
> Como $(a,m)\mid a$ y $(a,m)\mid m$, entonces
> $$
> \begin{align}
> (a,m)\mid as-mt = b \\[0.5em]
> \therefore (a,m)\mid b
> \end{align}
> $$
> $(\impliedby )$ Supongamos que $(a,m)\mid b$. Por el algoritmo de Euclides existen $k,q \in \mathbb{Z}$ tales que
> $$
> ak + mq = (a,m)
> $$
> Como $(a,m)\mid b$, entonces $b = (a,m)t$ con $t \in \mathbb{Z}$.
> Mult. $ak + mq = (a,m)$ por $t$.
> $$
> akt + mqt = (a,m)t = b
> $$
> Así, $m \mid -mqt = akt - b$ y por lo tanto
> $$
> a(kt) \equiv b \pmod{m}
> $$
> Concluimos que $kt$ es una solución de $ax \equiv b \pmod{m}$.
> $$
> \tag*{$\blacksquare$}
> $$


> [!observation]+ **Observación.**
>
> Consideremos $ax \equiv b \pmod{m}$ con $(a,m) \mid  b$, $s \in \mathbb{Z}$ es solución de $ax \equiv b \pmod{m}$ si y sólo si $s$ es solución de $\displaystyle \frac{a}{(a,m)}x \equiv \frac{b}{(a,m)} \pmod{\frac{m}{(a,m)}}$
>
> > [!proof]- **Proof.**
> >
> > $(\implies )$ Sup. que $s$ es solución de $ax \equiv b \pmod{m}$.
> > Entonces $as \equiv b \pmod{m}$ y así $as - b = mq$ con $q \in \mathbb{Z}$.
> > Dividiendo entre $(a,m)$ tenemos
> > $$
> > \frac{a}{(a,m)}s - \frac{b}{(a,m)} = \frac{m}{(a,m)}q
> > $$
> > Así,
> > $$
> > \frac{a}{(a,m)}s \equiv \frac{b}{(a,b)} \pmod{\frac{m}{(a,m)}}
> > $$
> >
> > $(\impliedby )$ Supongamos ahora que $s$ es solución de
> > $$
> > \frac{a}{(a,m)}x \equiv \frac{b}{(a,m)} \pmod{\frac{m}{(a,m)}}
> > $$
> > entonces.
> > $$
> > \frac{a}{(a,m)}s \equiv \frac{b}{(a,m)} \pmod{\frac{m}{(a,m)}}
> > $$
> > Tenemos entonces que $\displaystyle \frac{a}{(a,m)}s - \frac{b}{(a,m)} = \frac{m}{(a,m)}q$ con $q \in \mathbb{Z}$. Multiplicando por $(a,m)$, $as-b = mq$ y así $as \equiv b \pmod{m}$
> > $$
> > \tag*{$\blacksquare$}
> > $$
>
> > [!example]- Ejemplo.
> >
> > $6x \equiv 4 \pmod{8}$, $(6,8)=2$ y $2\mid 4$ tiene solución.
> > Por la obs. de las soluciones de $6x \equiv 4 \pmod{8}$ son las mismas que las de $3x \equiv 2 \pmod{4}$.
> > Tenemos que $3(2)\equiv 2 \pmod{4}$
> > **Solución** de $3x \equiv 2 \pmod{4} : x \equiv 2 \pmod{4}$ o bien
> > $$
> > \{ \dots,-2,2,6,10,\dots \}
> > $$
> > Pero módulo $8,2$ y $6$ son soluciones distintas.
> > **Solución** de $6x \equiv 4 \pmod{8} : x \equiv a \pmod{8}$ con $a \in \{ 2,6 \}$.


> [!theorem] **Teorema.**
>
> Sean $m \in \mathbb{Z}^{+}, a, b \in \mathbb{Z}$ con $(a,m)\mid b$. La congruencia $ax \equiv b \pmod{m}$ tiene $(a,m)$ soluciones distintas módulo $m$, que son
> $$
> s, s+ \frac{m}{(a,m)} , s + \frac{2m}{(a,m)} , \dots , s + \frac{((a,m) - 1)m}{(a,m)}
> $$
> con $s \in \mathbb{Z}$ una solución particular de $\frac{a}{(a,m)}x \equiv \frac{b}{(a,m)} \pmod{\frac{m}{(a,m)}}$

> [!proof]- **Proof.**
>
> Sean $m \in \mathbb{Z}^{+}, a,b \in \mathbb{Z}, (a,m)\mid b$
> Denotemos $ax \equiv b \pmod{m}$ por $\#$ y  $\displaystyle \frac{a}{(a,m)}x \equiv \frac{b}{(a,m)} \pmod{\frac{m}{(a,m)}}$ por $\#\#$.
> Veamos que los números de la lista son solución de $\#$.
> Sea $s \in \mathbb{Z}$ una solución de $\#\#$ y por la observaición de $\#$.
> Veamos ahora que los números de la lista son distintos módulo $m$.
> Sea $r,t \in \mathbb{Z}$ con $0\leq  r<(a,m), 0\leq t < (a,m)$. Supongamos que
> $$
> s + r\frac{m}{(a,m)} \equiv s + t\frac{m}{(a,m)} \pmod{m}
> $$
> entonces $\displaystyle m \mid  \left(s + r \frac{m}{(a,m)}\right) - \left( s + t \frac{m}{(a,m)} \right) = (r-t)\frac{m}{(a,m)}$
> y así $\displaystyle (r-t) \frac{m}{(a,m)} = ml$ con $l \in \mathbb{Z}$. Entonces
> $r-t = (a,m)l$ y por tanto $(a,m)\mid r-t$. Pero como $0\leq r,t <(a,m)$ sabemos que $0\leq  \left| r-t \right| < (a,m)$. Así $r-t = 0$ y entonces $r = t$.
> Veamos ahora que toda soluci'on de $\#$ es de esa forma.
> Sea $c \in \mathbb{Z}$ una solución de $\#$. Por la observación, $c$ también es solución de $\#\#$ y entonces $c \equiv s \pmod{\frac{m}{(a,m)}}$
> Así,
> $$
> c = s + k \frac{m}{(a,m)} \quad \text{ para alguna } k \in \mathbb{Z}
> $$
> Por el algritmo de la división.
> $$
> k = (a,m)q + r \quad q,r \in \mathbb{Z} \quad 0\leq r < (a,m)
> $$
> Así, $\displaystyle c = s + ((a,m)q + r)\frac{m}{(a,m)} = s + qm + r \frac{m}{(a,m)}$
> $$
> \begin{align}
> \implies m \mid qm = c - (s + r \frac{m}{(a,m)})\\[0.5em]
> \therefore c \equiv s + r \frac{m}{(a,m)} \pmod{m} \tag*{$\blacksquare$}
> \end{align}
> $$

> [!example]-

> [!theorem] **Teorema.** (Teorema Chino de Residuo)
>
> Sean $r_{1},r_{2} \in \mathbb{Z}, m_{1},m_{2} \in \mathbb{Z}^{+}$ con $(m_{1},m_{2}) = 1$. Las congruencias
> $$
> \begin{align}
> x \equiv r_{1} \pmod{m_{1}}\\[0.5em]
> x \equiv r_{2} \pmod{m_{2}}
> \end{align}
> $$
> tienen una solución común y ésta es única módulo $m_{1}m_{2}$.

> [!proof]- **Proof.**

> [!observation]+ **Observación.**
>
> Una solución común de $x \equiv r_{1} \pmod{m_{1}}$ y $x \equiv r_{1} \pmod{m_{2}}$, $(m_{1},m_{2}) = 1$, es
> $$
> m_{2}m^{-1}_{2m_{1}}r_{1} + m_{1}m_{1m_{2}}^{-1} r_{2}
> $$
>
> > [!proof]- **Proof.**
> >
> > De la prueba anterior sabemos que

> [!Info]- **Nota!**
>
> Generalizando, sean $m_{1},\dots,m_{t} \in \mathbb{Z}^{+}$ tales que $(m_{i}, m_{j}) = 1 \ \forall  i\neq j, \ r_{1},\dots,r_{t} \in \mathbb{Z}$. Una solución común de
> $$
> \begin{align}
> x &\equiv r_{1} \pmod{m_{1}} \\[0.5em]
> &\vdots \\[0.5em]
> x &\equiv r_{t} \pmod{m_{t}} \\[0.5em]
> \end{align}
> $$
> es
> $$
> N = M_{1}\left( M^{-1}_{1_{m_{1}}}  \right)r_{1} + \dots + M_{t}\left(M_{t_{m_{t}}}^{-1}  \right)r_{t}
> $$
> con $M = m_{1}\cdots m_{t}$ y $M_{i} = \frac{M}{m_{i}} \ \forall i \in \{ 1,\dots,t \}$
> La solución es única módulo $M$.


> [!example]- **Ejemplo.** 