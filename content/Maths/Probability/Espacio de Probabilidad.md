---
modified: 2026-09-21T19:18:54Z
title: "Espacio de Probabilidad"
publish: true
type: zettel
date: "2026-08-19"
status: undone
aliases:
tags:
 - probability
cssclasses: 
 - romana
---
> [!theorem] **Definición.** (Espacio de Probabildad)
> Un **espacio de probablidad** es un espacio de medida finita cuya medida total es estrictamente igual a la unidad. Se define como la terna $(\Omega,\mathcal{F},P)$:
> - **Espacio Muestal:** $\Omega \neq \varnothing$
> - $\sigma$**-álgebra de Eventos:** $\mathcal{F}$
> - **Medida de Probabilidad:** $P(A)$

> [!theorem] **Definición.** (Espacio Muestral) [Samplig Space]
> El espacio muestral de un experimento aleatorio es el conjunto de todos los posibles resultados del experimento, denotado $\Omega$. A un resultado particular del experimento se le denota $\omega$.

La $\sigma$*-álgebra de eventos*^[[[Sigma-algebra de eventos]]] es una familia de subconjuntos de $\Omega$ que cumple con tres propiedades. Funciona como ***aduana*** para restrigir $\operatorname{dom}P$ a solo conjuntos tratables, como en el caso de conjuntos discretos o de infinitos pequeños.

La *medida de probablidad*^[[[Medida de Probabilidad]]] es una funcíon $P: \mathcal{F\to \mathbb{R}}$ que asigna cada *evento* en $\mathcal{F}$ un número real, y tiene que cumplir con tres axiomas. 

> [!Info]- **Nota!**
> - Un **experimento aleatorio** $\mathcal{E}$ aunque no lo parezca, también tiene su definición formal fenomenológica:
> 	- *Replicabilidad:* $\mathcal{E}$ puede ser repetido infinitamente bajo condiciones iniciales identicas.
> 	- *Indeterminismo:* El resultado $\omega$ de una ejecución individual de $\mathcal{E}$ es impredecible *a priori*. Ningun modelo determinista puede asegurar cuál será el resultado de la siguiente iteración.
> 	- *Exhaustividad:* Se conoce el conjunto de todos los resultados posbiles de experimento, esto es $\Omega$.
> 	- *Estabilidad de Frecuencias:* Si $\mathcal{E}$ se repite $n$-veces con $n\to \infty$, la frecuencia relativa con la que ocurre un evento $A \in \mathcal{F}$ tiende a estabilizarse alrededor de un límite constante, lo que designa a $P(A)$.
> - Un **resultado** o **resultado elemental** $\omega$ es el desenlace más básico, indivisible y específico de un *experimento aleatorio*. Es claro que $\omega \in \Omega$. Los resultados elementales son mutuamente excluyentes (*si ocurre uno, es imposible que ocurra otra simultáneamente en la misma iteración del experimento*).
> - Un **evento** $A$ es una agrupación de resultados, denotados $A_{1},A_{2},A_{3},\dots$ Por definición, $A \subseteq \Omega$ y $A \in \mathcal{F}$.
> 	- **Ej.** Sea $\Omega = \{ \omega_{1},w_{2},\dots,w_{n} \}$ y sea $A = \{ w_{2},w_{4},w_{8} \}$.
> 	Es a los *eventos* a los que la función $P$ les asigna un número, $P(A)$. $P(\omega)$ es incorrecto.
> - El par $(\Omega,\mathcal{F})$ contituye de manera independiente un **espacio medible**.

Muyyy en sintesis,
- $\Omega:=$ Conjunto de posibles resultados
- $\mathcal{F}:=$ Conjunto de posibles eventos
- $P :=$ Función que da probabilidades

> [!observation]- **Observación**
> - El complemento es respecto a $\Omega$
> $$
> A^{c} = \Omega \setminus A
> $$
> - Como $\Omega \in \mathcal{F}$
> $$
> \begin{align}
> &\implies \Omega^{c} \in \mathcal{F} \\
> &\implies \varnothing \in \mathcal{F}
> \end{align}
> $$
> - Cualquier $\sigma$-álgebra, $\mathcal{F}$ es subconjunto del potencia
> $$
> \mathcal{F} \subseteq \mathcal{P}(\Omega)
> $$
> - $\mathcal{F}_{0} = \{ \Omega, \varnothing \}.$ Conocida como $\sigma$-álgebra cero o trivial


> [!example]- **Ejemplo 1.** (Medida clásica)^[[[Medida de Probabilidad Clasica]]]
> Para la Medida de probabilidad clasica, se necesita que $\Omega$ sea finito.
> > [!theorem] **Definición.** (Medida clásica)
> > $$
> > P[A] = \frac{\lvert A \rvert }{\lvert \Omega \rvert }
> > $$
> 
> También se suele escribir
> $$
> P[A] = \frac{\# \text{Casos favorables}}{\# \text{Casos totales}}
> $$
> ¿Cuándo usar la medida clásica?
> - $\Omega$ es finito
> - Suponemos que cada elemento de $\Omega$ tiene la misma probabilidad

> [!example]- **Ejemplo 2.** (Medida Frecuentista)
> Necesitamos que se realice el experimento algunas veces 
> > [!theorem] **Definición.** (Medida Frecuentista)
> > $$
> > P[A] = \frac{\# \text{obs. de A}}{\# \text{experimentos}}
> > $$
> Ejemplo. Lanzar una moneda:
> - Experimentos $= \{ S, S, S, S, S ,A, S, A , A, A\}$ 
> $P[S] = 6/10$ y $P[A] = 4/10$

> [!example]- **Ejemplo 3.** (Medida Geométrica)
> Útil cuando se tienen demasiados eventos en consideración. Supongamos que $\Omega$ es **no-numerable**. Definimos
> $$
> P[A] = \frac{\text{Área } (A) }{\text{Área }(\Omega)}
> $$
> Donde $\text{Área }(\Omega) < \infty$
> En está medida, la probablidad depende del tamaño $\lvert A \rvert$, de hecho, termina de ser una generalización de la *medida clásica*.
> Tiene una consecuencia interesante, para todo punto $x$ su probabilidad es $0$
> 
