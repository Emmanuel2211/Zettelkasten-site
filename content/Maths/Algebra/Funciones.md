---
modified: 2026-10-20T00:15:55Z
title: "Función"
publish: true
type: zettel
date: "2026-06-19"
aliases:
 - mapeo
 - funcion
 - Definicion de Funcion
tags: 
 - algebra
 - calculus
 - combinatronics
cssclasses: 
 - romana
---
> [!theorem] **Def.** (Function)
> Una función $f$ de $A$ en $B$, $f:A\to B$, es una relación^[[[Relaciones Binarias]]] que satisface (Totalidad)
> $$
> \forall a \in A, \exists b \in B : (a,b) \in f
> $$
> y que a cada elemento de $\operatorname{dom}$ le corresponde uno y sólo uno de $\operatorname{cod}$. (Unicidad)
> $$
> \forall a \in A \ \forall b_{1},b_{2} \in B  \ (((a,b_{1})\in f \land (a,b_{2})\in f) \implies b_{1}=b_{2})
> $$
> En lugar de escribir $(a,b) \in f$, se utiliza $f(a) = b$.

Se derivan tres componentes esenciales
> [!theorem] **Def.** (Dominio, Codominio, Imagen o Rango)
> El conjunto de partida $A$ es el $\operatorname{dom} f$, el conjunto de llegada $B$ el **codominio**. La $\operatorname{im} f$ es el subconjunto de $B$ tal que
> $$
> \operatorname{im} f = \{ b \in B \mid \exists a \in A : f(a) = b  \}
> $$

> [!theorem] **Def.** (Partial function)
> Es simplemente una función que no necesariamente utiliza todos los valores de su dominio.

En la teoría de la computabilidad, la noción intuitiva de un "algoritmo" fue formalizada con 3 definiciones de funciones equivalentes.^[[[Funciones computables y nocomputables]]]

En álgebra se desarrolla la idea de operación binaria^[[[Operacion Binaria]]], una función... En general este tema es muy rico, entonces dedico otra sección a la sola acción de organizar las funciones interesantes que voy encontrando:
- [[Funciones que merecen discutirse]]

Igual creo que es importante tener en mente el comportamiento de funciones básicas:
- [[funciones clasicas]]

