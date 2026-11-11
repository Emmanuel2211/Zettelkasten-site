---
modified: 2026-08-31T20:54:38Z
title: "Subespacios"
publish: true
type: zettel
date: "2026-07-08"
aliases:
tags: 
 - algebra
cssclasses: 
 - romana
---
> [!theorem] **Def.** (Subespacio vectorial)
>
> Sea $V$ un esp. vect. sobre un campo $\mathbb{F}$. Un subconjunto $W$ de $V$ es **un subespacio vectorial de** $V$ si y sólo si $W$ es un espacio vectorial sobre $\mathbb{F}$ con las operaciones definidas en $V$. Lo denotamos
> $$
> W \leq V
> $$


> [!observation]- **Observación.**
>
> - Los subesp. sólo lo son si son sobre el mismo campo.
> - $V\leq V$, se le llama subesp. **impropio**.
> - $\{ \bar{0} \} \leq V$, se le llama subesp. **trivial**.
> - $\varnothing$ **no** es subespacio. De hecho, todos los esps. vects. y los subesps. en particular, son **no vacíos**. Porque el (VS 3) obliga la existencia de un vector.

> ¿Como podemos verficar si un $W \subseteq V$ es un subesp. de $V$?

La mayoría de las propiedades para $W\leq V$ ya se cumplen!
De hecho, se cumplen (VS 1), (VS 2), (VS 5), (VS 7) y (VS 8).

> [!observation]- **Observación.** ¿Porqué?
>
> Los "para todo bajan (*a los subconjuntos*)", y los "existen suben". Dado $W \subseteq V$, se van a cumplir todas las propiedades con $\forall$. Tenemos que revisar las propiedades con $\exists$, i.e. (VS 0), (VS 0.5), (VS 3), (VS 4).

> [!observation]- **Observación.**
>
> (VS 0) y (VS 0.5) son abrebiaturas respectivamente de:
> $$
> \begin{align}
> \forall x,y \in V \ \exists ! z \in V  \ (x + y = z) \\[1em]
> \forall  x \in V \ \forall  a \in \mathbb{F} \ \exists ! z \in V \ (a \cdot x = z)
> \end{align}
> $$
> Sería demostrar estas propiedades (*cerradura*) para $W\subseteq V$.

Dado las obs. anteriores, es suficiente con revisar (VS 0), (VS 0.5) y (VS 3).

> [!theorem] **Teorema 1.5** (Criterio de subespacio)
>
> Sea $V$ un espacio vectorial y $W\subseteq V$. Entonces, $W$ es un subespacio de $V$ si y sólo si se satisface:
> 1. $\bar{0} \in W$.
> 2. $\forall x,y \in W \ (x + y \in W)$
> 3. $\forall a \in \mathbb{F} \ \forall x \in W \ (a x \in W)$

> [!proof]- **Proof.** 
>
> $(\implies)$
> Sup. que $W$ es un subesp. de $V$. Ent. $W$ cumple (VS0), (VS0.5), $\dots$, (VS8) para $W$ con las operaciones $+$ y $\cdot$ para $V$.
> Dado que $+$ y $\cdot$ están definias para $V$, $W\subseteq B$ y $W$ cumple (VS0) y (VS0.5), $W$ cumple los incisos $(ii)$ y $(iii)$.
> Ahora, como se cumple (VS3) en $W$, hay $0' \in W$ tal que
> $$\forall w \in W \ (w+0' = w)$$
> Así, sea $x \in W$. Como $W \subseteq V$, $x \in V$.
> Dado que $x \in W, x+0' = x$. Dado que $x \in V, x + \bar{0} = x$. Ent. $x + 0' = x + \bar{0}$, por cancelación de $+_{V}$, tenemos $0' = \bar{0}$.
> Pero como $0' \in W$, $\bar{0} \in W$ y, como $0' = \bar{0}$, el neutro de $W$ es el mismo que el de $V$.
> $(\impliedby)$
> Sea $W \subseteq V$ tal que, cumple los incisos $(i),(ii), (iii)$.
> Ent., por la discusión anterior al teorema, sabemos que (VS1), (VS2), (VS5), (VS6), (VS7) y (VS8) se cumplen para $W$ pues los elementos de $W$ están en $V$ que es esp. vect. y son propiedades en las sólo aparecen "para todos".
> Dado que $W$ cumple el inciso $(i)$, cumple (VS0) para $W$.
> Dado que $W$ cumple el inciso $(ii)$, cumple (VS0.5) para $W$.
> Dado que $W$ cumple el inciso $(iii)$, cumple (VS3) para $W$.
> 
> **P.D.** $W$ cumple (VS4). **P.D.** $\forall x \in W \ \exists x' \in W \ (x+x' =0)$
> Sea $x \in W$, como $W \subseteq V$, $x \in V$.
> Como $\mathbb{F}$ es un campo, $\exists 1 \in \mathbb{F}$, que es su neutro mult.
> Además, $1$ debe tener un inverso aditivo en $\mathbb{F}$, $-1$.
> Como $-1 \in \mathbb{F}$ y (VS0.5) se cumple para $W$, $(-1)x \in W$. Como $V$ sí es esp. vect., por propiedad $(v)$, cumple que $(-1)x = -x$
> $$
> \therefore \forall  x \in W \ \exists  -x \in W \ (x+(-x) = 0)
> $$
> 

> [!theorem] **Proposición.** (Criterio de subespacio "el bueno")
>
> $W \subseteq V$ es subesp. vect. de $V$ si y sólo si,
> 1. $\bar{0} \in W$
> 2. $\forall a \in \mathbb{F} \ \forall x , y  \in W \ (ax + y \in W)$

> [!proof]- **Proof.** 

> [!Info]+ **Nota!**
>
> Dado cualquier esp. vect. $V$ podemos pensar en un diagrama de ellos, ordenándolos por $\leq$ (*ser subespacio de*):
> 
> ![[Pasted image 20260827140408.png|center]]
> 
> A este tipo de diagramas se les llama **látices**.


> [!theorem] **Proposición.** (Criterio de subespacio 3)
>
> Sea $W \subseteq V$, $W \leq V$ si y sólo si
> 1. $W \neq \varnothing$
> 2. $\forall x,y \in W \ (x+y \in W)$
> 3. $\forall a \in \mathbb{F} \ \forall x \in W \ (ax \in W)$

> [!proof]+ **Proof.** 

Utilizando este criterio encontramos algunos resultados


> [!theorem] **Teorema 1.4** (Intersección de Subespacios)
>
> Cualquier intersección de subespacios de un espacio vectorial $V$, es un subespacio de $V$.

> [!proof]- **Proof.** 
>
> Sea $\mathscr{C}$ un conjunto de subespacios de $V$ y sea $W$ la intersección de todos los subespacios en $\mathscr{C}$. Como cada uno de los subespacios contiene al vector cero, $0 \in W$. Sean $a \in F$ y $x,y \in W$; entonces $x,y$ son elementos de cada subespacio en $\mathscr{C}$. Por lo tanto, $x + y \in W$ y $ax \in W$, y $W$ es un subespacio de acuerdo al criterio 1.3. Q.E.D.

Un hecho no tan trivial de demostrar es la unión.

> [!theorem] **Teorema.** (Unión de subespacios)
>
> Sean $W_{1}$ y $W_{2}$ subespacios de un espacio vectorial $V$. $W_{1} \cup W_{2}$ es un subespacio de $V$ si y sólo si $W_{1} \subseteq W_{2}$ o $W_{2} \subseteq W_{1}$.

> [!proof]- **Proof.** 



---

Resulta que la diagonales son subespacio de las matrices y de las simetricas... de tarea demostrar... y otras cosas igual con la trza y nose que... un lemita de tarea... observamos los tipos de matrices y trazas... y visualizamos un poco el diagrama de subespacios de $M_{n\times n}(\mathbb{F})$.

triagulares superiores???

> [!example]- **Ejemplo 1.** Subespacio de las matrices simétricas
>
> Una *matriz simétrica* es una matriz $M$ tal que $M^{t}=M$, es necesariamente cuadrada. Así, el conjunto $W$ de todas las matrices simétricas en $M_{n\times n} (\mathbb{F})$ es un subespacio de $M_{n\times n}(\mathbb{F})$ ya que satisfacen las 3 condiciones:
> 1. La matriz cero es igual a su transpuesta y, por lo tanto, pertenece a $W$.
> 2. Si $A \in W$ y $B \in W$, entonces $A = A^{t}$ y $B = B^{t}$. Ahora bien, $(A + B)^{t} = A^{t}+B ^{t} = A + B$, de manera que $A + B \in W$.
> 3. Si $A \in W$, entonces $A^{t} = A$. Luego, para toda $a \in \mathbb{F}$, $(aA)^{t} = aA^{t} = aA$. Y así $aA \in W$.

Solo que para el ejemplo anterior se necesita probar el hecho $(aA+bB)^{t} = aA^{t}+bB^{t}$, utilizado para los puntos $ii, iii$.

> [!proof]- **Proof.** 

> [!example]- **Ejemplo 2.** Las matrices diagonales en $M_{n\times n}(\mathbb{F})$
>
> Sea una matriz de $n \times n$. La *diagonal (principal)* de $M$ consta de los términos $M_{11},M_{22},\dots,M_{nn}$. Una matriz $D$ de $n \times n$ se llama *matriz diagonal* si todos los valores que no se encuentren sobre la diagonal de $D$ son nulos, esto es, si $D_{ij} = 0$ para toda $i\neq j$. El conjunto de todas las matrices diagonales en $M_{n\times n}(\mathbb{F})$ es un subespacio de $M_{n\times n}(\mathbb{F})$.



> [!example]- **Ejemplo 3.** Los polinomios de grado menor o igual a $n$
>
> Sea $n \in \mathbb{N}$ y sea $P_{n}(\mathbb{F})$ un conjunto que consta de todos los polinomios en $P(\mathbb{F})$ que tengan grado menor o igual a $n$. (Nótese que el polinomio nulo es elemento de $P_{n}(\mathbb{F}))$ pues su grado es $-1$.) Entonces, $P_{n}(\mathbb{F})$ es un subespacio de $P(\mathbb{F})$.

> [!example]- **Ejemplo 4.** Las funciones continuas de valores reales definidas en el eje de los $\mathbb{R}$
>
> El conjunto $\mathcal{C}(\mathbb{R})$ formado por todas las funciones continuas de valor real definidas en $\mathbb{R}$ es un subespacio de $^\mathbb{R}\mathbb{R}$, donde $^\mathbb{R} \mathbb{R}$ es el espacio vectorial del conjunto de todas las funciones $f:\mathbb{R} \to \mathbb{R}$.

> [!example]- **Ejemplo 5.** La *traza* de una matriz...
>
> Sea $M$ matriz $n\times n$, su **traza** denotada $tr(M)$, es la suma de los valores de $M$ ubicados en la diagonal; esto es, $tr(M) = M_{11}+\dots+ M_{nn}$. El conjunto de todas las matrices de $n \times n$ que tienen una traza igual a cero es un subespacio de $M_{n\times n}(\mathbb{F})$.

Para la demostración del Ejemplo 5, es necesario el revisar que: $tr(aA + bB) = a \cdot tr(A) + b \cdot tr(B)$ para toda $A, B \in M_{n \times n}(\mathbb{F})$.

> [!example]- **Contraejemplo 6.**
>
> El conjunto de matrices en $M_{m\times n}(\mathbb{F})$ que únicamente tengan elementos no negativos no es un subespacio de $M_{m \times n}(\mathbb{F})$ ya que no su cumple la condición *iii*.


