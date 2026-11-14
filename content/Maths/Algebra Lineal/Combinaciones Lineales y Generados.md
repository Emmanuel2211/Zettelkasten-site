---
modified: 2026-11-13T23:34:20Z
title: "Combinaciones Lineales y Generados"
publish: true
type: zettel
date: 2026-08-28
status: seed
aliases:
tags:
  - algebra
cssclasses:
  - romana
---
> [!theorem] **Definición.** (Combinación Lineal)
>
> Sea $V$ un esp. vect. sobre un campo $\mathbb{F}$. Sea $S \subseteq V$ tal que $S \neq \varnothing$. Un vector $v \in V$ es una **combinación lineal de vectores en** $S$ si y sólo existen un ńumero **finito** no vacío de vectores $y_{1},\dots,y_{k} \in S$ y existen $a_{1},\dots,a_{k}\in \mathbb{F}$ tales que,
> $$
> v = \sum_{i=1}^{k} a_{i}y_{i}.
> $$
> Además, decimos que $v$ **es una combinación lineal de** $y_{1},\dots,y_{k}$; y que $a_{1},\dots,a_{k}$ son los **coeficientes** de la comb. lineal.

> [!observation]+ **Observación.**
>
> - En la definición **no** pedimos que $S$ sea subespacio, pues es útil que esa para subcjts. en general.
>- Si $S\neq \varnothing$, ent. $\bar{0}$ es comb. lineal de $S$, pues como $S\neq \varnothing$, hay $x \in S$ $0\in \mathbb{F}$, ent. $0x = \bar{0}$.

Es **muy importante** observar dónde aparece la palabra *"finito"* en la definición, *"la suma para cada vector debe ser finita"*. Sin embargo, no hay restricción en la cardinalidad de $S$, puede ser finito no vacío, o infinito! Entonces, inclusive si $S$ es infinito, la comb. lineal involucra un num. finito de $v\in S$.

> [!observation]+ **Observación.**
>
> En el caso de que $S\subseteq V$ sea finito, lo podemos escribir como $S = \{ x_{1},\dots,x_{m} \}$. De esta froma, si $v$ es una comb. lineal de $S$, se puede describir con todos los vectores de $S$ y cancelar con su coeficiente $0 \in \mathbb{F}$ los vectores que no juegar papel en escribir a $v$. Es decir,
> $$
> v = \sum_{i=1}^{m} a_{i}x_{i} \quad \text{ con } \quad a_{j} = 0, \text{ si }  x_{j} \text{ no describe a } v
> $$

> [!example]- **Ejemplo.** (Requisito de $S$ infinito en Polinomios)
>
> Si buscamos $S \subseteq P(F)$ tal que todo polinomio en $P(F)$ se pueda escribir como comb. lineal de vectores (*polinomios*) en $S$, necesitamos que $S$ **no** sea finito.
> 
> En efecto, si $S = \{ f_{1},\dots f_{k} \}$, ent. hay $m \in \mathbb{N} \cup \{ -1 \}$ que es el grado máximo de los polinomios en $S$, y ent. cualquier polinomio con grado mayor que $m$ **no** se podrá escribir como comb. lineal de $S$.

Por todas estas obs. anteriores nos dejan claro porqué la *inducción* es tan importante en Lineal.

> [!observation]+ **Observación.** ¿Cuando un vector es combinación lineal de otros?
>
> Notaremos al desarrollar sistemas de ecuaciones para encontrar $a_{1},\dots,a_{n}$ que a veces $v$ puede ser descrito por **muchas** comb. lineales, y en ocasiones solo por una **única**! Igual, puede ser que $v$ **no pueda ser descrito**, pues encontraremos en su sistema de ecuaciones una contradicción! Y en otros casos, habrá que recurrir a otras área de las matemáticas para ver si es posible la comb. lineal!

Dada la última *observación*, nos preguntamos, dado $S$ cjto. de vectores **¿Qué vectores puedo ver como comb. lineal de** $x \in S$? Es decir, ¿Qué vectores puedo **generar** o crear a partir de los $x \in S$?

> [!example]- **Ejemplo.** 
>
> Respondiendo a lo anterior, consideremos $(1,0), (0,1) \in \mathbb{R}^{2}$. Tomamos $S = \{ (1,0),(0,1) \}$, Si $(x,y) \in \mathbb{R}^{2}$, ent.
> $$
> \begin{align}
> (x,y) &= (x,0) + (0,y) \\[0.5em]
> &= x(1,0) + y(0,1)
> \end{align}
> $$
> Por lo que podemos generar todos los vectores de $\mathbb{R}^{2}$ con $S$.
>
> ¿Y si $S = \{ (1,0) \}$?
> Sea $(x,y) \in  \mathbb{R}^{2}$ tal que existe $a \in  \mathbb{R}$ tal que
> $$
> (x,y) = a(1,0) = (a,0)
> $$
> Ent. $x = a$ y $y = 0$. Solo podemos generar a los vectores de la forma $\{ (x,0) \mid  x \in  \mathbb{R} \}$!

> [!theorem] **Definición.** (Generado)
>
> Sea $S$ un subcjto. no vacío de un espacio vectorial $V$. El **generado** por S, denotado $\langle S \rangle$, $L(S)$, $\operatorname{span} (S)$, es el cjto. de todas las combinaciones lineales de vectores en $S$.
 

> **Convención.** $\operatorname{span}(\varnothing) = \{ \bar{0} \}$ 


> [!observation]+ **Observación.**
>
> - $\langle \{ \bar{0} \} \rangle = \{  \bar{0} \}$
> - $S$ puede ser finito o infinito
> - Si $S \subseteq V$, describimos a los vectores en el generado y al generado como
> $$
> \begin{align}
> v \in  \langle S \rangle \iff  \exists k \in  \mathbb{N}^{+} \ \exists a_{1},\dots,a_{k} \in  \mathbb{F} \ \exists x_{1},\dots,x_{k} \in S \mid  v = \sum_{i=1}^{k} a_{i}x_{i} \\[0.5em]
> \langle S \rangle = \{ v \in  V \mid \exists k\in \mathbb{N}^{+} \ \exists  a_{1},\dots a_{k} \in  \mathbb{F} \ \exists x_{1},\dots,x_{k} \in  S \ \left(v = \sum_{i=1}^{k} a_{i}x_{i}  \right) \}
> \end{align}
> $$


> [!theorem] **Lema 1.**
>
> Sea $S$ un subcjto. de un esp. vect. $V$. Ent. $\langle S \rangle \leq V$ y $S \subseteq \langle S \rangle$
>

> [!proof]- **Proof.** 

> [!theorem] **Lema 2.**
>
> Si $W\leq V$, ent. $W$ es cerrado bajo combinaciones lineales.
>

> [!proof]- **Proof.** 

> [!observation]+ **Observación!**
>
> Si $W \leq V$, por el Lema 1, $W \subseteq \langle W \rangle$. Y por el Lema 2 se tiene que la cualquier comb. lineal de elementos de $W$ también esta en $W$, $\langle W \rangle \subseteq W$. Así $W = \langle W \rangle$.
> El regreso también es válido por el Lema 1! 
> $$
> \therefore W \leq V \iff   W = \langle W \rangle
> $$

 Thus, nuestro corolario:
 
> [!theorem] **Corolario 1.**
>
> Sea $W \subseteq V. \quad W \leq V \iff W = \langle  W \rangle$

> [!theorem] **Corolario 2.**
>
> Sean $S, S' \subseteq V$ y $S \subseteq S'$, ent. $\langle S \rangle \subseteq \langle S' \rangle$.

> [!proof]- **Proof.** 

Ya vimos que $\langle S \rangle$ es subespacio, lo siguiente es ver que es el más chico que contiene a $S$.

> [!theorem] **Teorema 1.5** (de Subida / SU VIDA)
>
> Sea $V$ un esp. vectorial sobre $\mathbb{F}$. Para cualqueir $S \subseteq V$, $\langle S \rangle$ es un subespacio de $V$ tal que $S \subseteq \langle S \rangle$ y $\langle S \rangle$ es el (subespacio) más chico (con respecto a  la contención) con la propiedad de conterner a $S$. Es decir,
> $$
> \forall  S \subseteq V ( \langle S \rangle \leq   V \land S \subseteq  \langle S \rangle) \quad \text{ y }
> $$
> $$
> \forall W \subseteq  V ((W \leq  V \land S \subseteq W)\implies \langle S \rangle \subseteq W)
> $$

> [!proof]- **Proof.** 
>
> Se demuestra con los Lemas y Corolarios.


De esta forma, $\langle S \rangle$ es el mínimo con respecto a la contención del cjto. el mínimo de: $\{ W \subseteq  V \mid  W \leq  V \land S \subseteq  W \}$.



> [!theorem] **Definición.** (Genera a)
>
> Sea $V$ esp. vect. Sea $W \leq V$. Decimos que un subcjto. $S \subseteq  W$ **genera a** $W$ si y sólo si $\langle S \rangle = W$.

> [!observation]+ **Observación.**
>
> Hay una diferencia sutil entre decir *el generado de* $S$ y decir que $S$ *genera a* un subesp. $W$
> $$
> \langle S \rangle \quad \text{ vs. } \quad \langle S \rangle = W
> $$
> Cuando nos referimos a $\langle S \rangle = W$, vemos a $W$ y nos preguntamos. ¿Cúal es un conjunto de vectores $S$ que genera a $W$? En cambio, $\langle S \rangle$, solamente estamos tomando un conjunto $S$ y viendo quien es $\langle S \rangle$.


> Una pregunta super importante es: ¿Cual de los subcjts. $S \subseteq V$ que $\langle S \rangle = W$, es el más chico (**con respecto a la contención propia**)?
> $$
> S_{1} \subsetneq S_{2} \subsetneq  S_{3} \dots
> $$
> Ojo! Esto del "más chico" no tiene que ver con el *tamaño*. Ej.
> $$
> \{ 2n \mid n \in  \mathbb{N} \} \subsetneq  \mathbb{N}
> $$


