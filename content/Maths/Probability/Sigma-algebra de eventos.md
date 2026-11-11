---
modified: 2026-08-26T14:01:41Z
publish: true
type: zettel
date: "2026-08-24"
status: undone
aliases:
tags:
 - probability
cssclasses: 
 - romana
---
# $\sigma$-álgebra de Eventos

$\mathcal{F}$ es una colección de subconjuntos de $\Omega$ que agrupa a todos los eventos que pueden ser medidos lógicamente.

> **Notación.** Denotamos $(A_{n})_{n=1}^{\infty}$ ó $A_{1},A_{2},A_{3},\dots$ a cualquier sucesión infinita *numerable* de *eventos*.

> [!theorem] **Definición.** ($\sigma$-álgebra de Eventos)
>
> Sea $\Omega$ un conjunto arbitrario no vacío (*espacio muestral*). Un conjunto $\mathcal{F}$ de subconjuntos de $\Omega$ (i.e. una familia $\mathcal{F} \subseteq \mathcal{P}(\Omega)$), se denomica $\sigma$**-álgebra** sobre $\Omega$ si satisface axiomáticamente las siguientes codiciones:
> 1. $\Omega \in \mathcal{F}$
> 2. $\forall A (A \in \mathcal{F} \implies A^{c} \in \mathcal{F})$
> 3. Cerradura bajo uniones numerables:
> Sea $(A_{i})_{i=1}^{\infty}$ una suceción de eventos tal que $A_{i} \in \mathcal{F}$ para todo $i \in \mathbb{N}$ Ent.
> $$
> 	\bigcup_{i=1}^{\infty} A_{i} \in \mathcal{F}
> $$


> [!Info]- **Nota!**
>
> Podemos interpretar a $\mathcal{F}$ como una "lista de eventos válidos" que se define con los axiomas:
> - $(i) \ \ \Omega \in \mathcal{F}$ representa la pregunta fundamental: ¿Cuál es la probabilidad de que ocurra cualquier cosa dentro de todas las posiblidades?
> - $(ii)$ Si se puede saber la probabilidad de que suceda $A$, por coherencia lógica, debe ser capaz de medir lo que falta ("que **no** suceda $A$").
> - $(iii)$ Si mi "lista" me permite hacer una secuenica infinita pero **numerable** (*indexada*) de preguntas válidas, agrupar todas esas preguntas en una sola también debe ser válido. *Esto es lo que permite usar límites, convergencia, cálculo...*


> [!theorem] **Teorema.** (Propiedades)
>
> 1. $\varnothing \in \mathcal{F}$
> 2. Cerradura bajo uniones finitas: Sea $k \in \mathbb{N}$,
> $$
> A_{1},A_{2},\dots,A_{k} \in \mathcal{F} \implies \bigcup_{i=1}^{k} A_{i} \in \mathcal{F}
> $$
> 3. Cerradura bajo intersecciones numerables (infinitas):
> $$
> A_{1},A_{2},\dots,A_{n} \in \mathcal{F} \implies\bigcap_{i=1}^{\infty}A_{i} \in \mathcal{F}
> $$
> 4. Cerrado bajo intersecciones finitas:
> $$
> A_{1},A_{2},\dots,A_{n} \in \mathcal{F} \implies \bigcap_{i=1}^{n} A_{i} \in \mathcal{F}
> $$
> 1. Cerradura bajo diferencia
> $$
> A,B \in \mathcal{F} \implies A\setminus B \in \mathcal{F}
> $$

Generalmente estas propiedades se prueban hasta cursos Análisis Real.

> [!proof]- **Proof.** 
>
> 1. **P.D.** $\varnothing \in \mathcal{F}$
> Por axioma $(i)$ tenemos que $\Omega \in \mathcal{F}$. Aplicando axioma $(ii)$, $\Omega^{c} \in \mathcal{F}$. Pero $\Omega^{c} = \varnothing \ !$ Por lo que $\varnothing \in \mathcal{F} \quad \blacksquare$
> 2. **P.D.** $\displaystyle (A_{n})_{n=1}^{k} \in \mathcal{F} \implies \bigcup_{n=1}^{k} A_{n}$
> Sea $\{ A_{i} \}_{i=1}^{n}$ una colección finita de conjuntos en $\mathcal{F}$. Definimos constructivamente una sucesión infinita $(A_{n})_{n=1}^{\infty}$ de la siguiente manera:
> $$
> (A_{n})_{n=1}^{\infty} = \begin{cases}
> A_{n} = A_{n}  &  1\leq n\leq k \\
> A_{n} = \varnothing & n>k
> \end{cases}
> $$
> Dado $\varnothing \in \mathcal{F}$. Por lo tanto, $\forall n \in \mathbb{N}$, se cumple que $A_{n} \in \mathcal{F}$. Utilizando el axioma $(iii)$, tenemos
> $$
> \bigcup_{n=1}^{k} A_{n} = \left( \bigcup_{n=1}^{k} A_{n}\right) \cup \varnothing = \left( \bigcup_{n=1}^{k} A_{n} \right) \cup \left( \bigcup_{n=k+1}^{\infty} \varnothing  \right) = \bigcup_{n=1}^{\infty} A_{n} \in \mathcal{F} \tag*{$\blacksquare$}
> $$
> 3. **P.D.** $\displaystyle (A_{n})_{n=1}^{\infty} \in \mathcal{F} \implies \bigcap_{n=1}^{\infty}A_{i} \in \mathcal{F}$
> Sea $(A_{n})_{n=1}^{\infty} \in \mathcal{F}$. Por axioma $(ii)$, los complementos cumplen que $A_{n}^{c} \in \mathcal{F}$ para todo $n \in \mathbb{N}$. Por axioma $(iii)$ obtenemos
> $$
> \bigcup_{n=1}^{\infty} A_{n}^{c} \in \mathcal{F}
> $$
> Aplicando axioma $(ii)$ nuevamente
> $$
> \left( \bigcup_{n=1}^{\infty} A_{n}^{c} \right)^{c} \in \mathcal{F}
> $$
> por la Ley de DeMorgan para unión tenemos
> $$
> \left( \bigcup_{n=1}^{\infty} A_{n}^{c} \right)^{c} = \bigcap_{n=1}^{\infty} (A^{c}_{n})^{c} = \bigcap_{n=1}^{\infty} A_{n} \tag*{$\blacksquare$}
> $$
> 4. **P.D.** $\displaystyle (A_{n})_{n=1}^{k} \in \mathcal{F} \implies \bigcap_{n=1}^{k}A_{n} \in \mathcal{F}$
> La demo. es análoga a la de la propiedad $(ii)$ pero con $\Omega$ en lugar de $\varnothing$.
> 
> 5. **P.D.** $A,B \in \mathcal{F} \implies A\setminus B \in \mathcal{F}$
> Por def. $A \setminus B = A \cap B^{c}$. Por hip. $B \in \mathcal{F}$. Mediante axioma $(ii)$, se deduce que $B^{c} \in \mathcal{F}$. Dado que tenemos $A,B^{c} \in \mathcal{F}$, y considerando que $\mathcal{F}$ es cerrada bajo intersecciones finitas (corolario de propiedad $(iii)$), la intersección de ambos eventos pertenece $\mathcal{F}$. Por lo tanto, $A\cap B^{c} \in \mathcal{F}\quad \blacksquare$
> 


Tarea:
Demo que $\mathcal{P}(\Omega)$ es una $\sigma$-álgebra.

