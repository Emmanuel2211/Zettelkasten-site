---
modified: 2026-10-01T20:29:16Z
title: "Subconjuntos Maximales Linealmente Independientes"
publish: true
type: zettel
date: 2026-09-23
status: undone
aliases:
tags:
  - algebra
cssclasses:
  - romana
---
Subcojuntos maximales linealmente independientes, maximal $l.i.$!

Hay una problematica en el querer demostrar que todod espacio vectorial tiene una base.

> [!example]- Ejemplo.
>
> ¿Cómo será una vase para $\mathscr{F}(\mathbb{R},\mathbb{R})$?
>

Spoiler alert: (triste :c) No vamos a saber quien es $\beta $

No hemos demostrado, en general, que podemos encontrar una base en cualqueir subcjto. $S$ que genere.

Hasta ahora, solo hemos demostrado para $S$ finito (usando inducción)!

> ¿Qué pasa si tenemos un generador infinito?

Trucaso para uno de la tarea
En la tarea dice que no usen que $S$ es finito.

Si tenenmos un esp vect infinito, con dimension finita, entonces podemos 
La induccion no es para demostrar los infinitos, sino para TODOS LOS FINITOS (que son infinitos).

> Para demostrar que todod espacio tiene una base necesitaresmo Axioma de Elección (Lema de Zorn)

> El **maximal** es el conjunto máximo con respecto a la contención en una colección de conjuntos.

> [!theorem] **Definición** (Maximal)
>
> Sea $\mathscr{F}$ una familia de cjts. ($\mathscr{F}$ es un conjunto). Un elemento $M$ de $\mathscr{F}$ se llama **maximal** (con respecto a la contención) si y sólo si ningún elemento de $\mathscr{F}$ contiene propieamente a $M$
> $$
> \begin{align}
> \iff  \neg \exists F \in  \mathscr{F} (M \subsetneq F)
> \iff  \forall F \in  \mathscr{F} (M \subseteq F \implies  M = F)
> \end{align}
> $$
>


vemos que es una cadena ordenes no se que...
cadena dentro de ucadena dentro de un orden parcial (orden lineal)?

Zorn... cota en una cadena de un orden parcial? a partir de ahi se toma lo de que los reales son bien ordenados.



los computologos no creen en el axioma de eleccion.

> [!theorem] **Definición.**
>
> $A$ es una cota superior de $\zeta$ con respecto a la contención sii  $\ \forall C \in \zeta \ ( C \subseteq A)$

> [!theorem] **Lema de Zorn.** (Principio de Maximalidad)
>
> Sea $\mathscr{F}$ una familia no vacía de cjtos. Si para toda cadena $\zeta \subseteq \mathscr{F}$, existe una cota superior de $\zeta$ en $\mathscr{F}$ con respecto a la contención, entonces, $\mathscr{F}$ tiene un elemento maximal.
>
> Esto es, sea $\mathscr{F}$ no vacía, si para toda cadena $\zeta \subseteq \mathscr{F}$, se tiene que $\exists A \in  \mathscr{F} \ \ \epsilon \ \ \forall C \in \zeta \ (C \subseteq A)$, entonces,
> $$
> \exists M \in \mathscr{F} \ \forall F \in  \mathscr{F} (M\subseteq F \implies M =F)
> $$


> [!theorem] **Definición.** (Maximal L.I.)
>
> Sea $V$ un esp. vect. Sea $S \subseteq V$. (Ojo, $V\subseteq V$ (caso particular) )
> $B$ **es un subcjto. maximal l.i. de** $S$ si y sólo si
> 1. $B \subseteq S$ y $B$ es l.i.
> 2. $\forall  A \subseteq S \ (B \subsetneq A \implies  A \text{ es l.d. })$

> [!observation]+ **Observación.**
>
> Se pone esta definición lo más general posible, observe que no estamos pidiendo que $\langle S \rangle = V$.
> Sin embargo, si lográramos encontrar un $B$ maximal l.i. de $S$, parece que $B$ sería base de $\langle S \rangle$.
> Y en el caso aprticualr en que $\langle S \rangle =V$, si logramos encontrar un $B$ maxiaml l.i. de $S$, parece que $B$ sería base de $V$.
>

> **Meollo del asunto:** En general, dado $S \subseteq V$, no sabemos cuál es su cardinalidad. Si supiéramos que $S$ es finito, podríamos encontrar a $B$ usando inducción (Teo. de Reemplazo y sus derivados).
>

Si $S \subseteq  V$ finito o infinito y $V$ es dimensión finita y $\langle S \rangle = V$, ent. se puede demostrar sin usar Lema de Zorn que hay una base de $V$ contenida en $S$. OJO, no es necesaria tampoco la Inducción!


> [!theorem] **Teorema.**
>
> Sea $V$ un esp. vect. Sea $S \subseteq V \ \ \epsilon \ \  \langle S \rangle = V$. Sea $\beta$ un subcjto. maximal l.i. de $S$. Entonces $\beta$ es base de $V$.

> [!proof]- **Proof.**
>

> [!theorem] **Corolario.** (Caso particual en que $\langle S \rangle \lneq V$)
>
> Sea $S \subseteq V$ y $S'$ un maximal l.i. de $S$, ent. $S'$ es base de $\langle S \rangle$.

> [!proof]- **Proof.**

> [!theorem] **Corolario.**
>
> Un subcjto. de $V$ es base de $V$ si y sólo si es un subcjto. maximal l.i. de $V$

> [!proof]- **Proof.**
>


> [!observation]+ **Observación.**
>
> Es equivalente demostrar que en todo esp. vectorial hay un subcjto. maximal l.i, a demostrar que todo esp. vectorial tiene una base!

> [!theorem] **Lema.**
>
> $\bigcup A$ es cota superior de $A$ con respecto a la contención.

> [!proof]- **Proof.**
>

> [!theorem] **Teorema.**
>
> Sea $S$ un subcjto. l.i. de un esp. vecto. $V$, entonces, existe un subcjto. maximal l.i. de $V$ que contiene a $S$.

> [!proof]- **Proof.**


> [!observation]+ **Observación.**
>
> Obtuvimos una base para $V$ que extendió a un subcjto. l.i. de $V$.

> [!theorem] **El Corolario.**
>
> Todo espacio vectorial tiene una base.

> [!proof]- **Proof.**
>
> Sea $V$ un espacio vectorial. Entonces, $\varnothing \subseteq  V$ y $\varnothing$ es l.i. Haciendo $S = \varnothing$ en el Teo. anterior, obteniendo una base para $V$.

> [!observation]+ **Observaciones.**
>
> - La dems. del Teorema se hace así para poder extender un l.i. ya dado, si se necesita.
> - **Consecuencias:** $\mathscr{F}(\mathbb{R},\mathbb{R})$ hay una $\beta  \subseteq \mathscr{F}(\mathbb{R},\mathbb{R})$ tq cualquier función de $\mathbb{R}$ en $\mathbb{R}$, se puede escribir como comb. lineal (de un número finto) de vectores en $\beta$, y es l.i.
> - **Aritmetica transfinita:** Hay manera de demostrar que la noción de dimensión sí se puede extender a dimensión infinita: $\operatorname{dim}(P(\mathbb{R})) = \left| \mathbb{N} \right|$.


