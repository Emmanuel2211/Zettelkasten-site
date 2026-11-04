---
modified: 2026-10-18T18:25:25Z
title: "Transformaciones Lineales"
publish: true
type: zettel
status: 
links: 
tags: []
date: "2026-05-21"
aliases: [ "transformacion lineal" ]
cssclasses: romana
materia: 
---
> [!theorem] **Definición.** (Transformacion Lineal)
> Sean $V$ y $W$ esp. vect. sobre $\mathbb{F}$. Una función $T: V \to W$ se llama **transformación lineal** de $V$ en $W$ sii $\forall x,y \in V$ y $c \in  \mathbb{F}$ tenemos que
> 1. $T (x +_{V} y) = T(x) +_{W} T(y)$ 
> 2. $T(c\cdot_{V} x) = c\cdot_{W} T(x)$


> [!theorem] **Proposición.**
> Sean $V$ y $W$ esp. vect. sobre el campo $\mathbb{F}$, y sea $T: V \to W$
> 1. Si $T$ es lineal, ent. $T(\bar{0}_{V}) = \bar{0}_{W}$
> 2. $T$ es lineal si y sólo si $\forall x,y \in  V \ \forall c \in \mathbb{F}$
> $$
> T(cx + y) = cT(x) + T(y)
> $$
> 3. Si $T$ es lineal, ent. $\forall x,y \in V$
> $$
> T(x-y) = T(x) - T(y)
> $$
> 4. $T$ es lineal si y sólo si $\forall k \in  \mathbb{N}^{+} \ \forall x_{1},\dots,x_{k} \in  V$ y $c_{1},\dots,c_{k}\in \mathbb{F}$ tenemos que
> $$
> T\left(\sum_{i=1}^{k} c_{i}x_{i}\right) = \sum_{i=1}^{k} c_{i}T(x_{i})
> $$ 

> [!proof]- **Proof.**
> 1. Sup. que $T$ es lineal, ent.
> $$
> T(\bar{0}_{V}) = T(\bar{0}_{v} + \bar{0}_{V}) = T(\bar{0}_{V}) + T(\bar{0}_{V}) 
> $$
> Además, $T(\bar{0}_{V}) = \bar{0}_{W} + T(\bar{0}_{V})$.
> Entonces, $\bar{0}_{W} + T(\bar{0}_{V}) = T(\bar{0}_{V}) + T(\bar{0}_{V})$, como $W$ es esp. vect. cumple la ley de la cancelación y $\bar{0}_{W} = T(\bar{0}_{V})$.
> 2. Tarea
> 3. Sup. que $T$ es lineal, y sean $x,y \in V$, ent.
> $$
> T(x-y) = T(x+(-y)) = T(x+(-1)y) = T(x) + (-1)T(y)
> $$
> $$
> = T(x) + (-T(y)) = T(x) - T(y)
> $$
> 4. Tarea (es por inducción sobre $k$, haciendo primero el caso $k=2$, que es casi el inciso $(ii)$ de esta proposición.)

Antes de ver ejemplos de transformación lineales, veamos dos definiciones importantisimas!



> [!theorem] **Definición.** (Kernel y Rango)
> Sean $V, W$ esp. vect. sobre $\mathbb{F}$ y sea $T: V \to  W$ lineal. Definimos el **Núcleo de** $T$ o **Kernel**, denotado $N(T)$ como el cjto.
> $$
> N(T) = \{ v \in V \mid T(v) = \bar{0}_{W} \}
> $$
>
> Definimos al **rango** o **imagen de** T como,
> $$
> R(T) = \{ T(v) \mid v \in V\} 
> $$

> [!observation]+ **Observación.**
> - $N(T)$ es un subcjto. del dominio de $T$.
> - $R(T)$ es un subcjto. del codominio de $T$.

> [!example]- Ejemplo 1.
> Sea $T:\mathbb{R}^{3}\to \mathbb{R}^{2}$ definida como $T(a,b,c) = (a+b,c)$.
> Veamos que es lineal usando el inciso $(ii)$ anterior:
> Sean $x = (x_{1},x_{2},x_{3}), y = (y_{1},y_{2},y_{3}) \in \mathbb{R}^{3}$  y $c \in \mathbb{R}$, ent.
> $$
> \begin{align}
>   T(cx+y) &= T(c(x_{1},x_{2},x_{3}) + (y_{1},y_{2},y_{3}))\\[0.5em]
>    &= T((cx_{1}+y_{1},cx_{2}+y_{2},cx_{3}+y_{3}))\\[0.5em]
>     &= (cx_{1}+y_{1}+cx_{2}+y_{2},cx_{3}+y_{3})\\[0.5em]
>  &= (c(x_{1}+x_{2}) + (y_{1}+y_{2}), cx_{3}+y_{3}) \\[0.5em]
>  &= c(x_{1}+x_{2},x_{3}) + (y_{1}+y_{2},y_{3})\\[0.5em]
> &= cT(x) + T(y).\\[0.5em]
>  &\therefore  \ T \text{ es transf. lineal de } \mathbb{R}^{3} \text{ en } \mathbb{R}^{2}
> \end{align}
> $$
> Además, $N(T) = \{ (a,-a,0) \mid a \in \mathbb{R} \}$
> $(\subseteq )$ Sea $(a,b,c) \in  N(T)$, ent.
> $T(a,b,c) = (0,0),$ ent. $(a+b,c)= (0,0)$.
> Y tenemos el sistema:
> $$
> \begin{align}
>   a+b &=  0 \implies b= -a \\[0.5em]
>   c &= 0
> \end{align}
> $$
> $( \supseteq )$ Sea $a \in  \mathbb{R}$, $T(a,-a,0) = (a-a,0) = (0,0)$
> Así, $R(T) = \mathbb{R}^{2}$, pues $(\subseteq)$ se cumple y $(\supseteq)$ Sea $(a,b) \in \mathbb{R}^{2}$, ent. $(a,0,b)\in \mathbb{R}^{3}$ y $T(a,0,b) = (a,b)$.
>
> > [!observation]- **Observación.**
> > - $T$ **no** es inyectiva.
> > - $3 = 1+2$, $\operatorname{dim}(\operatorname{Dom} \{T\}) = \operatorname{dim}(N(T))+\operatorname{dim}(R(T))$.


> [!example]- Ejemplo 2.
> Sea $\theta \in [0,2\pi)$. Definimos $T_{\theta } : \mathbb{R}^{2} \to \mathbb{R}^{2}$ como para cada vector no nulo $(a_{1},a_{2}) \in \mathbb{R}^{2}$, $T_{\theta }(a_{1},a_{2})$ es el vector que se obtiene al rotar $(a_{1},a_{2})$ por $\theta$ en contra de las manecillas del reloj y $T_{\theta }(0,0) = (0,0)$. 
> Para encontrar una fórmula explícita para $T_{\theta }$:
> Sea $(a_{1},a_{2}) \in \mathbb{R}^{2} \ \ \epsilon \ \ (a_{1},a_{2})\neq (0,0)$. Sea $\alpha$ el ángulo que hace el vector $(a_{1},a_{2})$ con el eje $x$. Sea $r= \sqrt{a_{1}^{2}+a_{2}^{2}}$. Entonces, $a_{1} = r\cos(\alpha )$ y $a_{2} = r\sin(\alpha )$.
> Por otro lado, $T_{\theta }(a_{1},a_{2})$ también está a distancia $r$ del origen y el ángulo que hace con el eje $x$ es $\alpha +\theta$. Ent. 
> $$
> \begin{align}
> T_{\theta }(a_{1},a_{2}) &= (r\cos(\alpha +\theta ), r\sin(\alpha +\theta )) \\[0.5em]
>  &= (r\cos(\alpha )\cos(\theta ) - r\sin(\alpha )\sin(\theta ), r\cos(\alpha)\sin(\theta ) + r\sin(\alpha )\cos(\theta ) \\[0.5em]
>  &= (a_{1}\cos(\theta )-a_{2}\sin(\theta ),a_{1}\sin(\theta )+a_{2}\cos(\theta ))
> \end{align}
> $$
> Observe que cuando $(a_{1},a_{2}) = (0,0)$, la fórmula de arriba también sirve.
> Con esta fórmula está más fácil ver que $T_{\theta }$ es lineal (Tarea)
> $N(T_{\theta }) = \{ \bar{0} \}$ (Tarea)
> $R(T_{\theta }) = \mathbb{R}^{2}$ (Tarea)
>
> > [!observation]- **Observación.**
> > - $T_{\theta }$ es inyectiva
> > - $2 = 0 + 2$, $\operatorname{dim}(\operatorname{Dom} \{T\}) = \operatorname{dim}(N(T)) + \operatorname{dim}(R(T))$

Hay más ejemplos en la tarea a verificar si son lineales, nucleos y rangos!

> [!example]- Ejemplo. (Importante)
> Para $V$ esp. vect. sobre $\mathbb{F}$, **la transf. identidad**
> $I_{V}: V\to V \ \ \epsilon \ \ \forall x \in  V \ I_{V}(x) = x$ es lineal.
> 
> Y dado un esp. vect. $W$ sobre $\mathbb{F}$, **la transf. nula** 
> $T_{0}: V\to W \ \ \epsilon \ \ \forall x \in  V \ T_{0} = \bar{0}_{W}$ es lineal.
>
> Además, se tiene,
> $N(I_{V}) = \{ \bar{0} \}$ y $R(I_{V}) = V$
> $N(T_{0}) = V$ y $R(T_{0}) = \{ \bar{0}_{W} \}$
> $I_{V}$ es inyectiva, $T_{0}$ casi nunca lo es.


> [!theorem] **Teorema.**
> Sean $V$ y $W$ esp. vect. sobre $\mathbb{F}$. Sea $T:V\to W$ lineal, ent.
> $$
> N(T) \leq V \quad \text{ y } \quad R(T) \leq W
> $$

> [!proof]- **Proof.**
> **PD.** $N(T) \leq V$
> Por el inciso $(i)$ de la Proposición anterior, $T(\bar{0}_{V}) = \bar{0}_{W}$, por lo que $\bar{0}_{V} \in  N(T)$.
> Sean $a \in  \mathbb{F}$ y $u,v \in N(T)$, ent. $T(u) = \bar{0}_{W}$ y $T(v) = \bar{0}_{W}$.
> $$
> \begin{align}
>   T(au+v) &= aT(u) + T(v) = a \bar{0}_{W} + \bar{0}_{W} = \bar{0}_{W}\\[0.5em]
>    &\therefore au+ v \in N(T) \\[0.5em]
>     &\therefore N(T) \leq V
> \end{align}
> $$
> **PD.** $R(T) \leq  W$.
> Por el inciso $(i)$ de la Prop. anterior, $T(\bar{0}_{V}) = \bar{0}_{W}$, por lo que $\bar{0}_{W}\in R(T)$.
> Sea $a \in \mathbb{F}$ y $w,z \in R(T)$, ent. hay $u,v \in V \ \ \epsilon \ \ T(v) = w$ y $T(u) =z$. Entonces,
> $T(av+u) = aT(v)+T(u) = aw+z$, por lo que $a w + z \in R(T)$
> $$
> \therefore R(T) \leq W \tag*{$\blacksquare$}
> $$



> [!theorem] **Definición** (Proyección)
> Sea $V$ un esp. vect. y sean $W_{1},W_{2} \leq V$ tales que $V=W_{1}\oplus W_{2}$. Una función
> $T: V\to V$ es una **proyección sobre $W_{1}$ a lo largo de** $W_{2}$ si y sólo si
> para cada $x \in  V, T(x) = x_{1}$ donde $x = x_{1} + x_{2}$ con $x_{1} \in  W_{1}$ y $x_{2} \in  W_{2}$.


> [!theorem] **Proposición.**
> Sea $V$ esp. vect. y sean $W_{1},W_{2} \leq V$ tales que $V = W_{1} \oplus W_{2}$. Si $T:V\to V$ es una proyección sobre $W_{1}$ a lo largo de $W_{2}$, ent. $T$ es una transf. lineal y, además,
> $$
> W_{1} = R(T) \quad \text{ y } \quad W_{2} = N(T)
> $$

> [!proof]- **Proof.**
> Tarea


> [!theorem] **Proposición.**
> Sea $V$ esp. vect. Si $V$ es de dim. finita y $W \leq V$, ent. existe $W' \leq V$ y $T: V\to V$ tal que $T$ es una proyección sobre $W$ a lo largo de $W'$.
>


> [!proof]- **Proof.**
> Tarea, creo.
> Idea: Como $W\leq V$ y $V$ es de dim. finita, $W$ también y $m = \operatorname{dim}(W)\leq \operatorname{dim}(V) = n$. Ent. existe $\alpha = \{ w_{1},\dots, w_{m} \}$ base de $W$. Como $\alpha$ es l.i. y es un subcjto. de $V$, se puede extender a una base de $\beta$ de $V$.
> Sea $\gamma = \beta \setminus \alpha$. Proponemos $W' = \langle \gamma  \rangle$. Hay que ver que $\langle \gamma  \rangle \oplus \langle \alpha  \rangle = V$. Y ent. $T: V\to V$ será $\forall x \in  V (T(x) = x_{1})$, donde $x = x_{1}+x_{2}$ con $x_{1} \in  W$ y $x_{2} \in W'$, ent. es la proy. buscada.

> [!observation]- **Observación.**
> Obsérvese que hay tantos $W'$ como extensiones de $\alpha$ hay, es decir $W'$ **no** es único.
>
> > [!example]- Ejemplo sencillo:
> > En $\mathbb{R}^{2}$, sea $W = \{ (a,a) \mid  a \in \mathbb{R} \}$. Sean $W_{1} = \{ (a,0) \mid  a \in \mathbb{R} \}$ y $W_{2} = \{ (0,a)\mid a \in \mathbb{R} \}$, ent. $\mathbb{R}^{2} = W \oplus W_{1}$ y $\mathbb{R}^{2} = W \oplus W_{2}$, esto porque dada la base $\{ (1,1) \}$ de $W$, tanto $\{ (1,1), (1,0) \}$ como $\{ (1,1), (0,1) \}$ son bases de $\mathbb{R}^{2}$ y ent. definiendo $T_{1}$ usando $W_{1}$ y definiendo $T_{2}$ usando $W_{2}$ son proyecciones distintas y tiene que ver con que dado $x \in V$, no es lo mismo verlo como suma de vectores de $W$ y $W_{1}$ que $W$ y $W_{2}$.


Ahora, combianamos el concepto de transf. lineales con el de generadores, base y dimensión!

> [!Info]+ **Notación.** 
> Sean $V$ y $W$ esp. vect. sobre $\mathbb{F}$. Sea $T : V\to W$ una transf. lineal. Dado $S\subseteq V$, escribimos $T[S]$ o $T(S)$ para la imagen de $S$ bajo $T: T[S] = \{ T(v) \mid v\in S \}$.


> [!theorem] **Teorema 2.3**
> Sean $V$ y $W$ esp. vect. sobre $\mathbb{F}$, sea $T:V \to W$ lineal. Si $\beta = \{ v_{1},\dots,v_{n} \}$ es base de $V$, ent $R(T) = \langle T[\beta ] \rangle$.

De tarea esta la versión general, en la que $\beta$ no es forzosamente finita.


> [!proof]+ **Proof.**
> Sea $\beta = \{ v_{1},\dots,v_{n} \}$ base de $V$, ent. $T[\beta ]\subseteq R(T)$. Por Teo. de Subida, como $R(T)$ es esp. vect, $\langle T[\beta ] \rangle \subseteq R(T)$.
> **PD.** $R(T) \subseteq  \langle T[\beta ] \rangle$
> Sea $x \in R(T)$, ent. hay $v \in  V \ \ \epsilon \ \  T(v) = x$.
> Como $\beta$ es base de $V$, hay $\displaystyle a_{1},\dots,a_{n}\in \mathbb{F} \ \ \epsilon \ \ v = \sum_{i=1}^{n} a_{i}v_{i}$. 
> Entonces, $\displaystyle x = T(v) = T\left(\sum_{i=1}^{n} a_{i}v_{i}  \right) = \sum_{i=1}^{n} a_{i}T(v_{i})$
> $$
> \therefore x \in  \langle T[\beta ] \rangle \tag*{$\blacksquare$}
> $$

> [!observation]+ **Observación importante!**
> ¿Porqué será que Teo. 2.3 **no** dice que $T[\beta ]$ es base de $R(T)$?
> - Puede que $\{ T(v_{1}), T(v_{2}),\dots,T(v_{n}) \}$ no sea l.i, puede que $T$ no sea inyectiva. Esta es una trampa que podemos caer en la tarea!
> Observe que en la prueba anterior no pasa nada si para algunos $i,j \ \ v_{i} \neq  v_{j}$ y $T(v_{i}) = T(v_{j})$.


> [!theorem] **Teorema 2.4** (Teorema de la Dimensión)
> Sean $V$ y $W$ esp. vect. sobre $\mathbb{F}$ y sea $T:V\to W$ lineal. Si $V$ tiene dim. finita, Ent. 
> $$
> \operatorname{dim} (V) = \operatorname{dim} (N(T)) + \operatorname{dim} (R(T))
> $$

> [!proof]- **Proof.**
> Sup. que $\operatorname{dim} (V) = n$. Por el Teo. de dim. de subespacios, $\operatorname{dim} (N(T)) \leq n$. Llamemos $k = \operatorname{dim} (N(T))$, $k\leq n$.
> Sea $\beta_{0} = \{ v_{1},\dots,v_{k} \}$ una base de $N(T)$. Por un Cor. del Teo. de Reemplazo, podemos extender $\beta_{0}$ a una base de $V$, digamos $\beta = \{ v_{1},\dots,v_{k},v_{k+1},\dots,v_{n} \}$
> **PD.** $\langle T[\{ v_{k+1},\dots,v_{n} \}] \rangle = R(T)$
> Sabemos que, por el Teo. anterior,
> $$
> R(T) = \langle T[\beta ] \rangle = \langle \{ T(v_{i}) : 1\leq i \leq n \} \rangle
> $$
> Como $\forall i \in  \{ 1,\dots,k \} \ (v_{i} \in  N(T))$, tenemos que $R(T) = \langle \{ T(v_{i}) : 1 \leq i \leq n \} \rangle = \langle \{ \bar{0} \cup \{ T(v_{i} : k+1 \leq i \leq  n) \} \} \rangle$
> $$
> = \langle \{ T(v_{i}) : k+1 \leq  i \leq n \} \rangle
> $$
> **PD.** $\{ T(v_{i}) : k + 1 \leq  i \leq  n \}$ es l.i.
> Sean $a_{k+1} , \dots , a_{n} \in  \mathbb{F}$ tq $\displaystyle \sum_{i=1}^{n} a_{i} T(v_{i}) = \bar{0}_{W}$.
> **PD.** $\forall  i \in  \{ k+1, \dots, n \} ( a _{i} = 0_{\mathbb{F}})$
> $$
> \bar{0}_{W} = \sum_{i=k+1}^{n} a_{i}T(V_{i}) = T(\sum_{i=k+1}^{n} a_{i}v_{i})
> $$
> Así, $\displaystyle \sum_{i=k+1}^{n} a_{i}v_{i} \in N(T)$
> Luago existen $b_{1},\dots,b_{k} \in  \mathbb{F}$ tq
> $$
> \sum_{i=1}^{k} b_{i}v_{i} = \sum_{i=k+1}^{n}  a_{i}v_{i}
> $$
> Ent.
> $$
> \bar{0}_{V} = \sum_{i=1}^{k} -b_{i}v_{i} + \sum_{i=k+1}^{n} a_{i}v_{i}
> $$
> Como $\beta = \{ v_{1},\dots,v_{k}, v_{k+1}, \dots,v_{n} \}$ es base de $V$, 
> $\forall i \in  \{ k+1,\dots,n \}\ (a_{i} = 0)$.
> $$
> \therefore \text{ el cjto. es l.i. }
> $$
> **PD.** $\forall  i , j \in  \{ k+1,\dots,n \} \ (i\neq j \implies T(v_{i}) \neq T(v_{j}))$
> Sean $i,j \in \{ k+1,\dots,n \}$. Sup. $i\neq j$, ent. $v_{i} \neq  v_{j}$.
> Sup. $T(v_{i}) = T(v_{j})$, ent. 
> $$
> \bar{0}_{W} = T(v_{i}) - T(v_{j}) = T(v_{i}-v_{j})
> $$
> Luego $v_{i}-v_{j} \in  N(T)$. 
> Entonces existen $a_{1},\dots,a_{k} \in  \mathbb{F}$ tq
> $$
> \begin{align}
> v_{i}-v_{j} &= \sum_{\ell=1}^{k} a_{\ell}v_{\ell} \\[0.5em]
> \bar{0}_{V} &= \sum_{\ell=1}^{k} a_{\ell}v_{\ell} + (-1)v_{i} + 1v_{j}
> \end{align}
> $$
> Esto es una comb. lineal no trivial del $0$ con elementos de la base $\beta$!
> Contradicción!
> $$
> \therefore T(v_{i}) \neq  T(v_{j}) \tag*{$\blacksquare$}
> $$

> [!observation]+ **Observación.**
> $T$ se comportó de manera *inyectiva* en el cacho de la base que generó a $R(T)$.


> [!theorem] **Teorema 2.5**
> Sean $V, W$ esp. vect. sobre $\mathbb{F}$ y sea $T: V \to W$ lineal. Ent. $T$ es inyectiva si y sólo si $N(T) = \{ \bar{0}_{V} \}$

> [!proof]- **Proof.**
> $(\implies )$
> Sup. que $T$ es inyectiva.
> **PD.** $N(T) = \{ \bar{0} \}$
> $(\supseteq)$ Porque $T$ es lineal.
> $(\subseteq)$ Sea $x \in N(T)$, ent. $T(x) = \bar{0}_{W}$, como $T(\bar{0}_{V}) = \bar{0}_{W}$ y $T$ es inyectiva, $x = \bar{0}_{V} \quad \therefore x \in \{ \bar{0}_{V} \}$.
> $(\impliedby)$
> Sup. $N(T) = \{ \bar{0}_{V} \}$. Sup. $x,y \in T \ \ \epsilon \ \  T(x) = T(y)$,
> $T(x) - T(y) = \bar{0}_{W}$, ent. $T(x-y) = \bar{0}_{W}$. 
> Como $N(T) = \{ \bar{0}_{V} \}$, $x-y = \bar{0}_{V} \quad \therefore x= y$
> $$
> \therefore T \text{ es inyectiva } \tag*{$\blacksquare$}
> $$


> [!theorem] **Definición.** (Nulidad y Rango)
> A la dimensión de $N(T)$ se le llama **la nulidad de** $T$, y se denota $\operatorname{null} (T)$ o $\operatorname{dim}(N(T))$.
>
> A la dimensión de $R(T)$ se le llama el **rango de** $T$ y se denota $\operatorname{rang} (T)$ o $\operatorname{dim}(R(T))$.
>

Con estás definiciones podemos rescribir el Teo. 2.4 y 2.4, ya es a su preferencia.

> [!example]+ Ejemplo.
> Sea $\mathbb{F}$ campo. Sea $T: P_{3}(\mathbb{F}) \to \mathbb{F}^{4}$ definida como $T(a+bx+cx^{2}+dx^{3}) = (a,b,c,d)$. $T$ es lineal. (Tarea)
> Se verá que sólo el polinomio nula va a dar al $\bar{0} = (0,0,0,0)$, por lo que $T$ es inyectiva.
> Además, $T$ es sobre, pues $(a,b,c,d) \in \mathbb{F}^{4}$, hay un polinomio, a saber, $a+bx+cx^{2}+dx^{3}$ que va a dar a $(a,b,c,d)$ bajo $T$.
>
> > [!observation]- **Observación.**
> > $$
> > \operatorname{dim}(P_{3}(\mathbb{F})) = \operatorname{dim}(\mathbb{F}^{4})
> > $$



> [!theorem] **Teorema.**
> Sean $V$ y $W$ esp. vect. sobre un campo $\mathbb{F}$ y tales que tienen dimensión finita **igual**. Sea $T: V\to W$ lineal. Las siguientes afirmaciones son equivalentes:
> 1. $T$ es inyectiva
> 2. $T$ es sobre
> 3. $\operatorname{rang} (T) = \operatorname{dim}(V)$

> [!proof]- **Proof.**
> Del Teo. de la dimensión, $\operatorname{dim}(V) = \operatorname{dim}(N(T)) + \operatorname{rang} (V)$
> Por hip, $\operatorname{dim}(V) = \operatorname{dim}(W)$
> $$
> \operatorname{dim}(W) = \operatorname{dim}(N(T)) + \operatorname{rang} (T)
> $$
> Ent. $T$ es inyectiva $\iff  N(T) = \{ \bar{0}_{V} \}$
> $$
> \begin{align}
>   &\iff \operatorname{dim}((N(T))) = 0 \\[0.5em]
>   &\iff \operatorname{dim}(V) = \operatorname{rang} (T)  \\[0.5em]
>   &\iff  \operatorname{dim}(W) = \operatorname{rang} (T) \\[0.5em]
>   &\iff  \operatorname{dim}(W) = \operatorname{dim}(R(T)) \\[0.5em]
>   &\iff  W = R(T) \\[0.5em]
>   &\iff T \text{ es sobre } \tag*{$\blacksquare$}
> \end{align}
> $$

> [!observation]+ **Observación.**
> Si $V$ es de dim. finita, y $T:V \to V$ lineal, ent. es inyectiva si y sólo si es sobre.
> 
> Obviamente ser lineal es un hipótesis clave, por cálculo sabemos de muchas funciones $f:\mathbb{R}\to \mathbb{R}$ que son inyectivas y **no** son sobre, o viceversa.
>
> Resulta que si $V$ es dim. infinita, no siempre inyectiva es equivalente a sobre, es decir, la hipótesis en nuestro Teo. anterior, de que la dimensión finita, también es clave.


> [!theorem] **Teorema.**
> Sean $V$ y $W$ esp. sobre $\mathbb{F}$. Sea $T: V\to W$ lineal. Ent. $T$ es inyectiva si y sólo si lleva subcjts. l.i. de $V$ en subcjts. l.i. de $W$.


> [!proof]- **Proof.**
> Tarea! Clave!



> [!theorem] **Corolario.** (Es casi la ida del Teo. anterior)
> Sean $V$ y $W$ esp. sobre $\mathbb{F}$. Sea $T : V \to W$ lineal e **inyectiva**. Sea $S \subseteq V$, entonces
> $$
> S \text{ es l.i. } \iff  T[S] \text{ es l.i. }
> $$


> [!proof]- **Proof.**
> La ida usa el teo anterior. el regreso esta bueno! (Si no estan usando que  es inyectiva se estan autochoreando!)
> Sup. que $T[S]$ es l.i, sea $\{ v_{1},\dots.,v_{k} \}\subseteq S$ con todos distintos y sean $\displaystyle a_{1},\dots,a_{k} \in \mathbb{F} \ \ \epsilon \ \ \sum_{i=1}^{k} a_{i}v_{i} = \bar{0}$, ent. $\displaystyle T\left(\sum_{i=1}^{k} a_{i}v_{i}  \right) = T(\bar{0})$, ent. $\displaystyle \sum_{i=1}^{k} a_{i}T(v_{i}) = \bar{0}$, **ent.** como $T[S]$ es l.i, $\forall i \in \{ 1,\dots,k \}a_{i} = 0$
> Aguas en ese **ent.** esta el autochoro!!!! se necesita usar que es inyectiva!
> Aguas con los para todos y existe, La idea de una trasf. lineal, para todod existe, pero si es inyectiva, el existe y el para todo conmutaron!!!

> [!Info]- **Nota!** 
> Justo ver a $T[S]$ como conjunto
> $$
> T[S] = \{ T(v_{1}), \dots,T(v_{k}) \}
> $$
> Esto es lo que hace complicada la def. de l.i. y l.d. por que lo vemos como conjutnos
> $$
> \{ (1,0), (1,0) \} = \{ (1,0) \}
> $$
> Necesitas saber que es inyectiva para que justo sean distintos.

Las transformaciones lineales quedan completamente determinadas por su acción en una base.

> [!theorem] **Teorema 2.8** (De existencia y unicidad)
> Sean $V$ y $W$ sobre $\mathbb{F}$ y supongase que $V$ tiene dim. finita $n$ y que $\beta = \{ x_{1},\dots,x_{n} \}$ es base de $V$. Para cualquier subcjto. $\{ y_{1},\dots,y_{n} \}$ de $W$ existe exactamente una transformación lineal $T: V\to W$ tal que $\forall i \in  \{ 1,\dots,n \} \quad T(x_{i}) = y_{i}$.

- *Ojo! en este teorema los $y_{i}'s$ no tiene que ser todos distintos.*

En la tarea esta la versión infinita de éste.

> [!proof]- **Proof.**
> Sean $V$ y $W$ sobre $\mathbb{F}$, $V$ de dim. $n \in \mathbb{N}$ y sea $\beta = \{ x_{1},\dots,x_{n} \}$ base de $V$. Sean $y_{1},\dots,y_{n}$ vectores de $W$ (no necesariamente distintos). Para cada $x \in V$, por el Teo. de bases, existen únicos $a_{1},\dots,a_{n} \in \mathbb{F}$ tales que $\displaystyle  x = \sum_{i=1}^{n} a_{i}x_{i}$. Definimos $T: V \to W$ como $\displaystyle T(x) = \sum_{i=1}^{n} a_{i}y_{i}$. (Nota. Esto es, a cada $x$ lo relacionas con su única manera de ser escrito con $\beta$, se puede pensar como la $n$-ada $(a_{1},\dots,a_{n})$ y esos escalares los vas a multiplicar por cada $y_{i}$ y luego los sumas ahí mandas a $T(x)$.)
> **PD.** $T$ es lineal.
> Sean $u,v \in V$ y $\lambda \in \mathbb{F}$ **PD.** $T(\lambda u+v) = \lambda T(u) + T(v)$.
> Sean $\displaystyle b_{1},\dots,b_{n}, c_{1},\dots,c_{n} \in \mathbb{F} \ \ \epsilon \ \  u = \sum_{i=1}^{n} b_{i}x_{i}$ y $\displaystyle \sum_{i=1}^{n} c_{i}x_{i}$.
> $$
> \begin{align}
>   T (\lambda u + v) &= T\left(\lambda \sum_{i=1}^{n} b_{i}x_{i} + \sum_{i=1}^{n} c_{i}x_{i}\right) \\[0.5em]
>    &= T\left(\sum_{i=1}^{n} (\lambda b_{i}+c_{i})x_{i}  \right) \\[0.5em]
>     &= \sum_{i=1}^{n} (\lambda b_{i}+c_{i})y_{i} \tag{Def. $T$} \\[0.5em]
> &= \lambda \sum_{i=1}^{n} b_{i}y_{i} + \sum_{i=1}^{n} c_{i}y_{i} \\[0.5em]
>  &= \lambda T(u) + T(v) \tag{Def. $T$}\\[0.5em]
> &\therefore T \text{ es lineal } 
> \end{align}
> $$
> Por otro lado, como $\forall i \in \{ 1,\dots,n \}$ la manera de escribir cada $x_{i}$ como comb. lineal de $\beta$ es
> $$
> x_{i} = \sum_{j=1}^{i-1} 0x_{j} + 1x_{i} + \sum_{j=i+1}^{n} 0x_{j}, \quad T(x_{i}) = 1\cdot y_{i} = y_{i}
> $$
> Para ver que $T$ es única,
> Supongase que $U: V\to W$ lineal tq. $\forall i \in \{ 1,\dots,n \} \ \ U(x_{i}) = y_{i}$.
> **PD.** $U = T$.
> Sean $x \in  V$, y sean $\displaystyle a_{1},\dots,a_{n}  \in \mathbb{F} \ \ \epsilon \ \ x = \sum_{i=1}^{n} a_{i}x_{i}$. Entonces,
> $$
> u(x) = u\left(\sum_{i=1}^{n} a_{i}x_{i}  \right) \underset{U \text{ es lineal }}{=} \sum_{i=1}^{n} a_{i}u(x_{i}) = \sum_{i=1}^{n} a_{i}y_{i} = T(x)
> $$
> $$
> \therefore U = T \text{ y } T \text{ es la única transf. lineal que manda a cada } x_{i} \text{ en } y_{i} \tag*{$\blacksquare$}
> $$

El siguiente corolario es importantisimo.

> [!theorem] **Corolaio.**
> Sean $V$ y $W$ esp. vect. sobre $\mathbb{F}$, con $V$ de dim. finita y $\{ x_{1},\dots,x_{n} \}$ una base con todos distintos de $V$. Si $U,T:V\to W \ \ \epsilon \ \ \forall i \in \{ 1,\dots,n \} \ U(x_{i}) = T(x_{i})$, entonces, $U = T$.

> [!proof]- **Proof.**
> ...
