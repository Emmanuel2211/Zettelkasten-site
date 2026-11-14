---
modified: 2026-11-13T23:34:20Z
title: "Dependencia e Independecia Lineal"
publish: true
type: zettel
date: "2026-09-03"
status: seed
aliases:
tags:
 - algebra
cssclasses: 
 - romana
---
> Retomando nuestra motivación, una pregunta super importante es: ¿Cual de los subcjts. $S \subseteq V$ tal que $\langle S \rangle = W$, es el más chico (**con respecto a la contención propia**)? 
>
> Es decir habŕa algún $S' \subsetneq S$ tal que $\langle S' \rangle = \langle S \rangle$?
>
> Para resolverlo, nos planteamos ¿Será que algún vector de $S$ se puede escribir como comb. lineal de los demás?
> 

Antes de pasar a nuestra definiciones, tenemos que tener en mente como se puede describir a $\bar{0}$ como comb. lineal. Puede pasar que, sea $\{ u_{1},u_{2},u_{3} \} \subseteq  V$.
$$
\bar{0} = 2u_{1} + 0u_{2} + 5u_{3} \quad \text{ o que } \quad \bar{0} = 0u_{1} + 0u_{2} + 0u_{3}
$$
A la segunda, le llamamos *comb. lineal trivial* del $\bar{0}$.

> [!observation]+ **Observación.**
>
> Sean $\{ u_{1},\dots, u_{k} \}$, en ocasiones no sabemos que todos sean distinitos, al menos que se especifique que $i \neq j \implies  u_{i} \neq  u_{j}$. **Aguas!** Podemos pensar que encontramos una comb. lineal no trivial del $\bar{0}$ y NO sea así!
> $$
> \text{ Si } \ u_{1} = u_{2}, \implies  \bar{0} = 1u_{1} - 1u_{2} + 0u_{3}  +\dots + 0u_{k}
> $$

> [!theorem] **Definición.** (Comb. Lineal no Trivial del $\bar{0}$)
>
> Sea $V$ un esp. vect. sobre $\mathbb{F}$. Sea $S \subseteq V$ y $S \neq \varnothing$. Decimos que existe una **combinación lineal no trivial del $\bar{0}$ de vectores de** $S$ si y śolo si $\exists k \in  \mathbb{N}^{+} \ \exists u_{1},\dots,u_{k} \in  S \ \exists a_{1},\dots,a_{k} \in  \mathbb{F}$  tales que $\forall i,j \in \{ 1,\dots,k \} (i\neq j \implies  u_{i}\neq u_{j})$ y
> $$
> \exists i \in \{ 1,\dots,k \} (a_{i} \neq  0) \ \text{ y } \ \sum_{i=1}^{k} a_{i}u_{i} = \bar{0}
> $$


> [!theorem] **Lemita**
>
> Sea $V$ esp. vect. sobre $\mathbb{F}$ y $S \subseteq V$. Si $\bar{0} \in  S$, ent. existe una comb. lineal no trivial del $\bar{0}$ de vectores de $S$.



> [!theorem] **Definición.** (Dependencia Lineal)
>
> Sea $V$ esp. vect. sobre $\mathbb{F}$. Sea $S \subseteq V$. $S$ es **linealmente dependiente** (l.d) si y sólo si, hay un número finito no vacío de vectores en $S$, $x_{1},x_{2}, \dots, x_{k}$ distintos por pares y hay $a_{1}, \dots, a_{k} \in  \mathbb{F}$, no todos cero, tal que $\displaystyle \hat{0} = \sum_{i=1}^{k} a_{i}x_{i}$
> 
> Es decir,
> Sea $S \subseteq V$. $S$ es **l.d.** si y sólo si, $\exists k \in  \mathbb{N} ^{+} \ \exists x_{1}, \dots , x_{k} \in  S \ \exists a_{1}, \dots, a_{k} \in  \mathbb{F}$ de forma  que $\forall i,j \in  \{ 1,\dots,k \} (i\neq  j \implies x_{i} \neq  x_{j})$ y $\exists  i \in  \{ 1,\dots,k \} \ a_{i} \neq  0$ y
> $$
> \hat{0} = \sum_{i=1}^{k} a_{i}x_{i}
> $$
> 
> Y en español,
> $S\subseteq V$ es l.d. si y sólo si existe una combinación lineal no trivial de $\bar{0}$ usando vectores distintos por pares de $S$.


> [!theorem] **Definición.** (Independencia Lineal)
>
> Sea $S \subseteq V$. Decimos que $S$ es **linealmente independiente** (l.i.) si y sólo si **no** es l.d... AAAAHHH!


> Ya en serio, ¿Qué es realmente l.i.? Está gacho sólo decir que no es l.d.
 

> [!theorem] **Definición.** (Independencia Lineal)
>
> Sea $S \subseteq V$. $S$ es **l.i.** sii $\forall k \in  \mathbb{N}^{+} \ \forall x_{1},\dots,x_{k} \in  S \ \forall a_{1},\dots,a_{k} \in  \mathbb{F}$
> $$
> \forall i,j \in \{ 1,\dots k \} \left( (i\neq j \implies  x_{i} \neq x_{j}) \land \sum_{i=1}^{k} a_{i}x_{i} = \bar{0} \right)
> $$
> $$
>  \implies \forall i\in \{ 1,\dots k \} (a_{i} = 0)
> $$
>
> En español,
> $S\subseteq V$ es **l.i.** si y sólo si no hay una combinación lineal no trivial del $\hat{0}$ utilizando vectores de $S$ distintos.


> [!example]- **Ejemplos.** 
>
> - $\varnothing$ es l.i. por vacuidad.
> - Si $S \subseteq V$ tal que $\bar{0} \in S$, ent. es l.d.
> - Si $S = \{ x \}$ con $x \neq \bar{0}$, $S$ es l.i.

> [!theorem] **Lema.** *Bonito*
>
> Sean $S_{1}, S_{2} \subseteq  V$, con $S_{1}\subseteq S_{2}$.
> 1. Si $S_{1}$ es l.d, ent. $S_{2}$ es l.d. (los l.d.s suben)
> 2. Si $S_{2}$ es l.i, ent. $S_{1}$ es l.i. (los l.i.s bajan)

> [!proof]- **Proof.** Tarea


Formalizando un resultado muy importante,

> [!theorem] **Teorema.** (Teorema de la Linealidad Finita)
>
> Sea $V$ un esp. vect. y sea $S \subseteq V$ **finito** no vacío. Sea $n \in  \mathbb{N}^{+}$ tal que $\left| S \right| = n$ y sea $S = \{ v_{1},\dots,v_{n} \}$
> Ent. $S$ es **l.i.** si y sólo si
> $$
> \forall a_{1}, \dots, a_{n} \in  \mathbb{F} \ \left(\sum_{i=1}^{n} a_{i} v_{i} = \hat{0} \implies  \forall i \in  \{ 1,\dots,n \} (a_{i} = 0)\right)
> $$

> [!observation]+ **Observación.**
>
> Gracias a que $P \iff Q \equiv  \neg P \iff  \neg Q$, el teorema anterior también aplica para l.d.'s finitos!

> [!proof]- **Proof.**
>
> ($\implies$) Sup. que $S$ es l.i, ent. para todo $k \in \mathbb{N}^{+}$, cualesquiera $u_{1},\dots,u_{k}\in S$ todos distintos, se tiene que
> $$
> \forall b_{1},\dots,b_{k} \in \mathbb{F} \left(\sum_{i=1}^{k} b_{i}u_{i} = \bar{0} \implies  \forall i \in \{ 1,\dots,k \} (b_{i}=0)  \right)
> $$
> Como es para todo $k \in \mathbb{N}^{+}$, se cumple en particualr para $n$. Es decir, para cualesquiera $u_{1},\dots,u_{n} \in S$ distintos por pares, se tiene que
> $$
> \forall b_{1},\dots,b_{n} \in \mathbb{F} \left( \sum_{i=1}^{n} b_{i}u_{i} = \bar{0} \implies \forall i \in  \{ 1,\dots,k \} (b_{i} = 0)  \right)
> $$
> Como $\left| s \right| = n$ y $S = \{ v_{1},\dots,v_{n} \}$ y los $u_{i}$'s son todos distintos, cada $u_{i}$ es un $v_{j}$ y como $\displaystyle \sum_{i=1}^{n} b_{i}u_{i}$ es una comb. lineal del cero en la que aparece cada $v_{j}$ (una sola vez), por hipotesis, $\forall i \in \{ 1,\dots,n \} (b_{i}= 0)$.
> ($\impliedby$) Sea $S' \subseteq S$ finito.
> Sea $S' = \{ u_{1},u_{2},\dots,u_{k} \}$ con $\left| S' \right| = k$ y sean $\displaystyle b_{1},\dots,b_{k} \in \mathbb{F} \ \ \epsilon \ \ \sum_{i=1}^{k} b_{i}u_{i} = \bar{0}$.
> Como $S' \subseteq S$, $k \leq n$ y cada $u_{i}$ es un $v_{j}$, es decir:
> $$
> \forall i \in \{ 1,\dots, k \} \exists! j_{i} \in \{ 1,\dots,n \} (u_{i} = b_{j_{i}})
> $$
> (Aqui tengo duda de porque se utiliza un doble índice)
> Sea $I = \{ j_{1},\dots,j_{k} \}$. Ent. $\displaystyle \sum_{i=1}^{k} b_{i}u_{i} = \sum_{i=1}^{k} b_{i}v_{j_{i}}$, ent. $\displaystyle \bar{0} = \sum_{i=1}^{k} b_{i}u_{i} = \sum_{i=1}^{k} b_{i}v_{j_{i}} = \sum_{i=1}^{k} b_{i}v_{j_{i}} + \sum_{t \in \{  1,\dots,n \}\setminus I}0\cdot v_{t}$
> Entonces, tenemos una comb. lineal de todos los vectores de $S$ (sin repetir) igualada a $\bar{0}$, por hipótesis, todos los escalares deben ser $0$.
> Ent. $\forall i \in \{ 1,\dots,k \} \ b_{i} = 0$. y $S$ es l.i.
> $$
> \tag*{$\blacksquare$}
> $$

> [!Info]- **Nota!**
>
> Explicando el uso del doble índice en la Dem. anterior:
> Se utiliza el índice $j_i$ porque necesitas una función (un mapeo) que conecte el subconjunto $S'$ con el conjunto original $S$. Tienes vectores $u_i$ en tu subconjunto y sabes que cada uno de ellos es idéntico a algún vector $v$ del conjunto grande. No puedes escribir simplemente $u_i = v_j$, porque el índice $j$ **depende** de qué $i$ estés evaluando. Al escribir $j_i$, estás diciendo formalmente: "Sea $j_i$ la posición exacta en $S$ que le corresponde al vector $i$-ésimo de $S'$". Por ejemplo, si $u_1$ resulta ser el tercer vector del conjunto original, entonces $j_1 = 3$ (luego $u_1 = v_3$); si $u_2$ es el séptimo, entonces $j_2 = 7$ (luego $u_2 = v_7$). El doble índice es solo una manera rigurosa de indexar subconjuntos sin perder la referencia de dónde venían.
> 


El siguiente resultado debería de ser un Teorema por su importancia:

> [!theorem] **Lema.** (Lema de Dependencia)
>
> Sea $S$ un subcjto. l.i. de un esp. vect. $V$. Sea $v \in  V$ tal que $v \not\in S$. Ent. $v \in  \langle S \rangle$ si y sólo si $S \cup \{ v \}$ es l.d.
>

> [!observation]+ **Observación.**
>
> Las hipótesis no ponen ninguna restricción a la cardinalidad de $S$, por lo que puede ser finito y infinito, es decir, *en la demostración no debemos de usar que sea finito*.

> [!proof]- **Proof.**
>
> Sea $S \subseteq V$ l.i. y $v \in V \ \ \epsilon \ \ v \not\in S$.
> ($\implies$) Sup. $v \in \langle S \rangle$, ent. hay $n \in \mathbb{N}^{+}$ y hay $x_{1},\dots,x_{n} \in S$ y hay $a_{1},\dots,a_{n} \in F$ tales que $\displaystyle  v = \sum_{i=1}^{n} a_{i}x_{i}$ y s.p.g. supongase que $\forall i,j \in \{ 1,\dots,n \} (i\neq j \implies x_{i}\neq x_{j})$.
> Ent. $\displaystyle \bar{0} = \sum_{i=1}^{n} a_{i}x_{i} + (-1)v$.
> Como $v \not\in S$, $\forall  i \in \{ 1,\dots,n \} \ v \neq x_{i}$ y como $\forall i,j \in  \{ 1,..,n \} \ (i\neq j \implies  x_{i}\neq x_{j})$, todos los $v,x_{1},\dots,x_{n}$ son distintos por pares y $-1 \neq 0$ en cualquier $\mathbb{F}$, por lo que hemos encontrado una comb. lineal no trivial del $\bar{0}$ con vectores de $S \cup \{ v \}$
> $$
> \therefore S \cup \{ v \} \text{ es l.d. }
> $$
> ($\impliedby$) Sup. que $S \cup \{ v \}$ es l.d, **PD.** $v \in \langle S \rangle$.
> Como $S \cup \{ v \}$ es l.d, hay $k \in  \mathbb{N}^{+}$, hay $x_{1},\dots,x_{k} \in S\cup \{ v \}$ todos distintos, hay $a_{1},\dots,a_{k}\in \mathbb{F}$ no todos cero tales que $\displaystyle \sum_{i=1}^{k} a_{i}x_{i} = \bar{0}$. 
> Como $S$ es l.i, $\exists j \in \{ 1,\dots,k \} \ \ \epsilon \ \ x_{j} = v$.
> **PD.** $a_{j} \neq  0$.
> Si $a_{j} = 0$, ent. $\displaystyle \sum_{i=1}^{j-1} a_{i}x_{i} + \sum_{i=j+1}^{k} a_{i}x_{i} = \bar{0}$, y como $x_{1},\dots,x_{k}$ son distintos por pares y $x_{j}= v$, $\forall  i \in \{ 1,\dots,k \} \setminus \{ j \} (x_{i} \neq v)$, $\{ x_{1},\dots,x_{k} \} \setminus \{ x_{j} \} \subseteq S$ y para algún(os) $i \in  \{ 1,\dots,k \}\setminus \{ j \} \ a_{i} \neq  0$, por lo que significaría que $S$ sería l.d! **Contracción!**
> Por lo tanto, $a_{j} \neq 0$, y entonces,
> $$
> \sum_{i=1}^{j-1} a_{i}x_{i} + a_{j}v+ \sum_{i=j+1}^{k} a_{i}x_{i} = \bar{0}
> $$
> Como $a_{j} \neq  0$, $a_{j}^{-1}$ existe en $\mathbb{F}$, ent.
> $$
> \begin{align}
>   v &=  \sum_{\substack{i=1 \\ i\neq j}}^{k}  (-a_{j})^{-1} a_{i}x_{i} \quad \text{ con } x_{i} \in S. \ \forall i \ (x_{i}\neq v)\\[0.5em]
>    &\therefore v \in  \langle S \rangle  \tag*{$\blacksquare$}
> \end{align}
> $$
