---
modified: 2026-10-14T17:35:39Z
title: "Bases y Dimensión"
publish: true
type: zettel
date: 2026-09-08
status: undone
aliases:
tags:
  - algebra
cssclasses:
  - romana
---
> [!theorem] **Definición.** (Base)
> Sea $V$ un esp. vect. Una **base** $\beta$ de $V$ es un subcjto. l.i. tal que $\langle \beta  \rangle = V$.


> [!observation]- **Observación.**
> - Una base nos genera al espacio sin tener información de más.
>
> - Si $S \subseteq V$, $\langle S \rangle$ es subesp. de $V$. Si $S$ es l.i, ent. $S$ es base de $\langle S \rangle$.
> En general, un subcjto. $S$ l.i. siempre es base de alguien, a saber, $\langle S \rangle$.
> Sin embargo es importante saber si $\langle S \rangle = W$, con $W \leq V$, o $\langle S \rangle = V$.



En instancias, es importante saber cuando un generado realmente es todo el esp. vect.  $V$, o simplemente genera a un subesp. de $V$.

> [!example]- Ejemplo.
> - $\varnothing$ es base, pues por conv. $\langle \varnothing \rangle = \{ \bar{0} \}$ y $\varnothing$ es l.i. En cambio, aunque $\langle \{ \bar{0} \} \rangle = \{  \bar{0} \}$, $\{ \bar{0} \}$ es l.d.
>

> [!note]- 
> El "teorema fundamental de algebra lineal", que todo esp. vect. tiene base. Sorprendentemente, este teorema es equivalente al Axioma de Elección!


> [!theorem] **Teoremon.** (Teorema de Bases)
> Sea $V$ un esp. vect. sobre $\mathbb{F}$. Sea $\beta = \{ u_{1},\dots,u_{n} \} \subseteq V$ tal que si $i \neq j$, ent, $u_{i} \neq  u_{j}$. Ent, $\beta$  es base de $V$ si y sólo si cada $v \in  V$ se puede expresar de única manera como comb. lineal de todos los elementos de $\beta$, es decir, existen únicos escalares $a_{1},\dots,a_{n} \in \mathbb{F}$ tales que $\displaystyle v = \sum_{i=1}^{n} a_{i}u_{i}$.

> [!proof]- **Proof.**
>  Sea $\beta = \{ u_{1},\dots,u_{n} \} \subseteq V$ tal que si $i\neq j$, ent. $u_{i} \neq  u_{j}$.
>  ($\impliedby$) Sup. que para cada $v \in  V$, *existen* **únicos** escalares $a_{1},\dots,a_{n} \in \mathbb{F}$ tq.
>  $\displaystyle  v = \sum_{i=1}^{n} a_{i}u_{i}$. (Nota. Usamos unicidad apra ver que es l.i.)
>  **PD.** $\langle \beta  \rangle = V$.
>  $(\subseteq)$ Como $\beta  \subseteq V$, por el Teo. de subida, como $V$ es espacio vectorial, $\langle \beta  \rangle \subseteq V$.
>  $(\supseteq)$ Dado $v \in  V$, por hip. exísten $a_{1},\dots,a_{n} \in \mathbb{F}$ tq. $\displaystyle  v = \sum_{i=1}^{n} a_{i}u_{i}$. $\quad \therefore v \in  \langle \beta  \rangle$.
>  **PD.** $\beta$ es l.i. Usamos Teo. de linealidad finita:
>  Sean $\displaystyle b_{1},\dots,b_{n} \in \mathbb{F} \ \ \epsilon \ \  \sum_{i=1}^{n} b_{i}u_{i} = \bar{0}$. **PD.** $\forall i \in \{ 1,\dots,n \}(b_{i}= 0)$.
>  Si tomamos $\forall  i \in \{ 1,\dots,n \} ( c_{i} = 0)$, ent. $\displaystyle \sum_{i=1}^{n} c_{i}u_{i} = \bar{0}$. 
>  Como $\bar{0} \in V$ y **todos** los vectores de $V$ se escriben de manera única como comb. lineal de los elementos distintos de $\beta$, $\forall i \in \{ 1,\dots,n \} ( b_{i} = c_{i})$
>  $\therefore \forall i \in \{ 1,\dots,n \}(b_{i} = 0)$
>  $\therefore  \beta$ es l.i. $\quad \therefore \beta$ es base.
>  $(\implies)$ Sup. que $\beta$ es base, ent. $\langle \beta  \rangle = V$,
>  Ent. $\displaystyle \forall v \in  V \ \exists a_{1},\dots,a_{n} \in \mathbb{F} \ \left(v = \sum_{i=1}^{n} a_{i}u_{i}  \right)$.
>  **PD.** Los $a_{i}$'s son únicos para cada $v$.
>  Sea $v \in  V$ tq. hay $a_{1},\dots,a_{n} \in \mathbb{F}$ y hay $b_{1},\dots,b_{n} \in \mathbb{F}$ tq. $\displaystyle v = \sum_{i=1}^{n} a_{i}u_{i}$ y $\displaystyle v = \sum_{i=1}^{n} b_{i}u_{i}$
>  Ent. $\displaystyle \sum_{i=1}^{n} a_{i}u_{i} = \sum_{i=1}^{n} b_{i}u_{i}$, Ent. $\displaystyle \sum_{i=1}^{n} (a_{i}-b_{i}) u_{i} = \bar{0}$, como $\beta$ es l.i. **y** todos los $u_{i}$'s son distintos, $\forall i \in \{ 1,\dots,n \} a_{i}-b_{i} = 0$
>  $$
>  \therefore \forall i \in  \{ 1,\dots,n \} (a_{i}=  b_{i}) \quad \therefore  \text{ Todo vector se expresa de manera única } \tag*{$\blacksquare$}
>  $$
>
> 

> [!theorem] **Corolario**
> Si $S\subseteq V$ es l.i. finito, y $S = \{ u_{1},\dots,u_{k} \}$ con todos distintos, ent. dado $v \in  \langle S \rangle$ existen **únicos** $a_{1},\dots,a_{k} \in  \mathbb{F}$ tal que $\displaystyle v = \sum_{i=1}^{k} a_{i}u_{i}$.

> [!proof]- **Proof.**
> Tarea

En general, si $S$ es l.d, sobra información para generar a $\langle S \rangle$. Es decir, debe existir $S' \subsetneq S$ tal que $\langle S' \rangle = \langle S \rangle$, y quiero seguir buscando subcjts. así hasta dar con uno que sea l.i.


> [!theorem] **Lema.**
> Sea $V$ esp. vect. y $S \subseteq V$. Sea $v \in  S$. Ent. $v \in  \langle S \setminus \{ v \} \rangle \iff \langle S \rangle = \langle S \setminus \{ v \} \rangle$

> [!proof]- **Proof.**
> Sea $V$ un esp. vect. y $S \subseteq V$. Sea $v \in  S$.
> $(\implies)$
> Sup. que $v \in  \langle S\setminus \{ v \} \rangle$, ent. hay $u_{1},\dots,u_{n} \in S\setminus \{ v \}$ y $a_{1},\dots,a_{n}\in \mathbb{F}$ tales que $v = \sum_{i=1}^{n} a_{i}u_{i}$.
> **PD**. $\langle S \rangle = \langle S \setminus \{ v \} \rangle$
> $(\supseteq )$ Dado que $S \setminus \{ v \} \subseteq S$, por un Lema anterior, $\langle S \setminus \{ v \} \rangle \subseteq  \langle S \rangle$.
> $(\subseteq )$ Sea $y \in  \langle S \rangle$, ent. hay $x_{1},\dots,x_{k} \in S$ y $b_{1},\dots,b_{k} \in \mathbb{F}$ tales que $y = \sum_{i=1}^{k} b_{i}x_{i}$. S.P.G. sup. que $x_{1},\dots,x_{k}$ son todos distintos.
> Si $\forall i \in  \{ 1,\dots,k \} \ v \neq x_{i}$, ent. $y \in  \langle S \setminus \{ v \} \rangle$.
> Si $\exists j \in  \{ 1,\dots,k \} \ v = x_{j}$, ent. 
> $$
> y = \sum_{i=1}^{j-1} b_{i}x_{i} + b_{j}\left( \sum_{i=1}^{n} a_{i}u_{i}  \right) + \sum_{i=j+1}^{k} b_{i}x_{i}
> $$
> y en esta comb. lineal sólo aparecen vectores de $S \setminus \{ v \}$, pues $u_{1},\dots,u_{n} \in S \setminus \{ v \}$ y $\forall i \in  \{ 1,\dots,k \}\setminus \{ j \} \ (x_{i}\neq v)$.
> $$
> \therefore y \in  \langle S \setminus \{ v \} \rangle
> $$
> $(\impliedby)$ Tarea.
 

> [!theorem] **Teorema 1.9**
> Sea $V$ esp. vect. tal que hay un subcjto finito $S$ de $V$ con $\langle S \rangle = V$. Ent. algún subjto. de $S$ es base de $V$.

> [!proof]- **Proof.**
> Sea $S \subseteq V$, $S$ finito tal que $\langle S \rangle = V$.
> La demostración se hace por inducción sobre $\left| S \right| = n$.
> Sea $A = \{ n \in  \mathbb{N} \mid \forall S(S \subseteq V \land  \left| S \right| = n \land  \langle S \rangle = V) \implies  \exists \beta \subseteq S (\beta \text{ es base de } V) \}$
> *Paso base*: Si $n = 0$, ent. $S= \varnothing$, como $\langle S \rangle = V$, $V = \{ \bar{0} \}$,
> **PD.** $0 \in  A$
> Además $\varnothing\subseteq \varnothing$ y $\varnothing$ es l.i.
> *Paso Inductivo*: H.I (Sup. $n \in A$): Sup. si $B \subseteq V$, $\left| B \right| = n$ y $\langle B \rangle = V$, ent. hay $B_{1} \subseteq B$ tq $B_{1}$ es base de $V$.
> **PD.**  ($n+1 \in A$)
> Supongamos que $S \subseteq V$, $\left| S \right| = n+1$ y $\langle S \rangle = V$.
> Si $S$ es l.i, $S \subseteq S$ y como $\langle S \rangle = V$, ent. $S$ es base.
> Si $S$ es l.d, ent. sup. $S = \{ u_{1},\dots,u_{n+1} \}$, ent. existen $a_{1},\dots,a_{n+1} \in \mathbb{F}$ no todos cero tq
> $$
> \bar{0} = \sum_{i=1}^{n+1} a_{i}u_{i}
> $$
> Ent. existe $j \in  \{ 1,\dots,n+1 \}$ tq $a_{j} \neq 0$, ent. existe $a_{j}^{-1}$, ent. $\displaystyle  u_{j} = \sum_{\substack{i=1 \\ i\neq j}}^{n+1} - \frac{a_{i}}{a_{j}} u_{i}$. Ent. por el Lemita anterior, como $u_{j} \in  \langle S \setminus \{ u_{j} \} \rangle, \langle S \rangle = \langle S \setminus \{ u_{j} \} \rangle$.
> Y como $\langle S \rangle = V$, $\langle S\setminus \{ u_{j} \} \rangle = V$. Además $\left| S \setminus \{ u_{j} \} \right| = n$ por H.I. hay $\beta \subseteq S \setminus \{ u_{j} \} \subseteq S$ tal que es base de $V$.


> Entonces, en todo generador finito está contenido en una base!


> [!theorem] **Teorema 1.10** (Teorema de Remplazo)
> Sean $n,m \in  \mathbb{N}$. Sea $V$ un esp. vect. Sean $G,I \subseteq V$ tal que $\langle G \rangle = V$ e $I$ es l.i. y $\left| G \right| = n$ y $\left| I \right| = m$. Entonces, $m\leq  n$ y, además, existe $H \subseteq G$ tal que $\left| H \right| = n - m$ y $\langle I\cup H \rangle = V$.

> ¿Porqué se llama de Reemplazo? Se reemplazan $m$ vectores de $G$ con los vectores de $I$ (que son l.i. entre ellos)

> [!proof]- **Proof.**
> Por inducción sobre $m$.
> Sea $A = \{ m \in \mathbb{N} \mid \forall n \in  \mathbb{N} \  \forall  I, G \subseteq V \left( \left( \left| I \right| = m \land  \left| G \right| = n \land  I \text{ es l.i. } \land  \langle G \rangle = V  \right) \implies \left( m \leq n \land \exists H\subseteq G (\left| H \right| = n-m \land \langle I \cup H  \rangle = V)  \right)  \right) \}$
> *Paso base:*
> Si $m = 0$, $\left| I \right| = 0$, ent. $I = \varnothing$ (el cual es l.i.), como $n \in  \mathbb{N}$, $m\leq n$. Haciendo $H = G, H \subseteq G$, tiene $n - m$ vectores, $\langle I \cup H \rangle = \langle G \rangle = V$.
> *Paso inductivo:* 
> *H.I:* Supongamos que el Teorema es verdader para $m$ (esto es $m \in A$)
> **PD.** Si $I \subseteq V$ l.i. con $\left| I \right| = m+1$ y $G \subseteq V$ tal que $\langle G \rangle = V$ y $\left| G \right| = n$, ent. $m + 1 \leq n$ y existe $H \subseteq G$ tal que $\left| H \right| = n - (m+1)$ y $\langle H \cup  I  \rangle = V$.
> Sea $I = \{ v_{1},\dots,v_{m},v_{m+1} \}$ todos distintos, que es l.i. Sea $G \subseteq V$ tal que $\langle G \rangle = V$ y $\left| G \right| = n$.
> Ent. $\{ v_{1},\dots,v_{m} \}$ es l.i., pues los l.i.s bajan.
> Por H.I, $m \leq  n$ y existe un subcjto $\{ u_{1},\dots,u_{n-m} \}$ de $G$ tq tiene $n - m$ vectores tales que
> $\langle \{ v_{1},\dots,v_{m} \} \cup \{ u_{1},\dots,u_{n-m} \} \rangle = V$.
> Como $v_{m+1} \in V$, hay $a_{1},\dots,a_{m},b_{1},\dots,b_{n-m} \in \mathbb{F}$ tales que
> $$
> v_{m+1} = \sum_{i=1}^{m} a_{i}v_{i} + \sum_{i=1}^{n-m} b_{i}u_{i} \tag{1}
> $$
> Sabemos que $m\leq n$. Para llegar a una contracción, sup. que $n = m$, ent. $n-m = 0$, ent. por $(1)$ $v_{m+1} = \sum_{i=1}^{m} a_{i}v_{i}$, donde $\forall  i,j \in  \{ 1,\dots,m+1 \} \ (i\neq j \implies  v_{i} \neq v_{j})$,
> $$
> \bar{0} = \sum_{i=1}^{m} a_{i}v_{i} + (-1)v_{m+1} !
> $$
> Lo cual es una contracción ya que $I$ es l.i.
> $$
> \therefore m+1 \leq n
> $$
> Por el mismo razonamiento, hay $i \in  \{ 1,\dots,n-m \}$ tq $b_{i} \neq 0$, S.P.G. sup. $b_{1} \neq  0$. Despejando $u_{1}$ de $(1)$, pues $b_{1}^{-1}$ existe,
> $$
> u_{1} = \sum_{i=1}^{m} (-b_{1}^{-1})a_{i}v_{i} + (-b_{1}^{-1})v_{m+1} + \sum_{i=2}^{n-m} (-b_{1}^{-1})b_{i}u_{i}
> $$
> Sea $H = \{ u_{2},\dots,u_{n-m} \}$, ent. $\left| H \right| = n-(m+1)$.
> Además, $u_{1} \in  \langle H \cup  I \rangle$, y $u_{2},\dots u_{n-m},v_{1},\dots,v_{m+1} \in  \langle H\cup I \rangle$, por lo que $\{ u_{1},\dots,u_{n-m},v_{1},\dots,v_{m+1} \} \subseteq \langle H \cup  I \rangle$.
> Por el Teo. de Subida, $\langle \{ u_{1},\dots,u_{n-m},v_{1},\dots,v_{m+1} \} \rangle \subseteq \langle H\cup I \rangle$.
> Como ya teníamos que $\langle \{ v_{1},\dots,v_{i} \} \cup \{ u_{1},\dots,u_{m+1} \} \rangle = V$ y $\langle \{ v_{1},\dots,v_{m} \} \cup \{ u_{1},\dots, u_{n-m} \} \rangle \subseteq \langle \{ u_{1},\dots,u_{n-m}, v_{1},\dots,v_{m+1} \} \rangle$, se tiene que
> $$
> V = \langle \{ v_{1},\dots,v_{i} \} \cup  \{ u_{1},\dots,u_{n-m} \} \rangle \subseteq \langle \{ u_{1},\dots,u_{n-m},v_{1},\dots,v_{m+1} \} \rangle \subseteq \langle H \cup  I \rangle
> $$
> y $V = \langle H \cup  I \rangle$ y $\left| H \right| = n-(m+1)$
> $$
> \therefore m+1 \in A \text{ y } A = \mathbb{N} \tag*{$\blacksquare$}
> $$

Aunque, lo verdaderamente importante son sus corolarios:


> [!theorem] **Corolario 1.**
> Sea $V$ esp. vect. que tiene una base finita. Ent. toda base de $V$ tiene el mismo número de vectores.


> [!proof]- **Proof.**
> Sea $\beta$ una base para $V$ que tiene exactamente $n$ vectores. Sea $\gamma$ una base para $V$. (no se especifica si finita o infinita, entonces puede ser cualquiera)
> Sup. que hay $S \subseteq \gamma$ tq $\left| S \right| = n+1$. Como $\gamma$ es l.i, $S$ es l.i, por el Teo. de Reemplazo, usando que $S$ es l.i. y $\left| \beta  \right| = V$, $\left| S \right| \leq \left| \beta  \right|$
> $$
> \therefore n+1 \leq n \quad !
> $$
> Lo cual es una contracción!
> $$
> \begin{align}
> \therefore \gamma \ \text{ no tiene más de } n \text{ vectores } \\[0.5em]
> \therefore \gamma \ \text{ es finita y tiene a lo más } n \text{ vectores, }
> \end{align}
> $$
> Como $\beta$ es l.i. y $\left| \gamma  \right| = V$, otra vez por el Teo. de Reemplazo, $\left| \beta  \right| \leq  \left| \gamma  \right|$, ent. $n \leq  \left| \gamma  \right|$, y como arriba vimos que $\left| \gamma  \right| \geq n$
> $$
> \therefore \left| \gamma  \right| = n \tag*{$\blacksquare$}
> $$

La siguiente definición es clave!

> [!theorem] **Definición.** (Dimensión)
> Sea $V$ un esp. vect.
> 1. $V$ tiene **dimensión finita** si y sólo si tiene una base con un número finito de vectores.
> 2. Si $V$ tiene dimensíon finita, llamamos **dimensión de** $V$, denotado $\operatorname{dim}(V)$, al número de elementos de cualqeuir base de $V$.
> 3. $V$ tiene **dimensión infinita** si y sólo si no tiene dimensión finita.

> [!example]- Resultados.
> 1. $\operatorname{dim}(\{ 0 \}) = 0$
> 2. $\operatorname{dim}(\mathbb{F}^{n}) = n$
> 3. $\operatorname{dim}(M_{m\times n}(\mathbb{F})) = m\cdot n$
> 4. $\operatorname{dim}(P_{n}(\mathbb{F})) = n+1$
> 5. $\operatorname{dim}(P(\mathbb{F})) = \infty$ 
>
> En $(v)$, ya vimos que cualqueiro cjto. finito de polinomios de $P(\mathbb{F})$ no lo genera.
>
> 6. La dimensión depende del campo!

> [!observation]+ **Observación.**
> Cuando digamos que un esp. vect. $V$ tiene dimensión $n \in \mathbb{N}$, $\operatorname{dim}(V) = n$, estamos diciendo: "Existe una base para $V$ y caulqueir de sus bases tiene cardinalidad $n$"

> [!theorem] **Corolario 2.**
> Sea $n \in  \mathbb{N}$. Sea $V$ esp. vect. de $\operatorname{dim}(V)= n$.
> 1. Cualquier cjto. finito que **genere** a $V$ tiene al menos $n$ vectores. T cualquiera que *genere* a $V$ y tenga exactamente $n$ vectores **es base**.
> 2. Cualquier subcjto. **l.i.** de $V$ que tenga exactamente $n$ vectores **es base** de $V$.
> 3. Cualquier subcjto. (finito o infinito) de $V$ que tenga más de $n$ vectores es l.d.
> 4. Todo subcjto. **l.i.** de $V$ se puede **extender** a una base para $V$, por lo que todo subcjto. **l.i.** de $V$ tiene menor o igual que $n$ vectores.



Una aplicación muy útil del Corolario $2$ del Teo. de Reemplazo es la *Fórmula de Interpolación de Lagrange*.




