---
modified: 2026-08-26T16:17:45Z
title: "Set Theory"
publish: true
type: moc
tags: 
- moc
- sets
date: "2026-03-31"
aliases: 
- Set Theory
cssclasses: romana
---
> [!summary]- **Motivación**
> Un conjunto es algo simple, una colección, un grupo, un conjunto de cosas. Los conjuntos no son algo real, una bolsa de papas no es un conjunto de papas, la idea de *conjunto* es meramente *abstracta*. **Es una capacidad de la mente la de crear conjuntos**, la de agrupar cosas por una propiedad en concreto.

> [!quote]- **Definición.** (Un conjunto según Cantor)
> Un **conjunto** es una colección de objetos definidos y distintos que forman parte de nuestra intuición o de nuestro pensamiento. A estos objetos se les denomina elementos (miembros) del conjunto.

### Lenguaje de Teoría de Conjuntos y Formulas

El Axioma de Separación usa la noción vaga de *propiedad*. El desarrollo de axiomática de conjuntos va con el *framework* de la *lógica de primer orden* (*cálculo de predicados*). 

Las *formulas atómicas* son
$$
x \in y, \quad x = y
$$

los *conectivos*
$$
\varphi \land \psi, \quad \varphi \lor \psi, \quad \neg\varphi, \quad \varphi\implies \psi, \quad \varphi \iff \psi
$$
y los *cuantificadores*
$$
\forall x \varphi, \quad \exists x\varphi.
$$

#### Teoría de Conjuntos

- [[Axiomas Zermelo-Fraenkel]]
	- Clases y Paradoja de Russel
	- Extensionalidad
	- Axioma del Par
	- Esquema de Separación
	- Unión
	- Potencia
- [[Algebra de Conjuntos]]
- [[Cardinalidad de conjuntos finitos]]

- [[Particion]]

$$
\bigcap_{i=1}^{n} A_{i} = \{ x \mid \forall i \in \{  1,\dots,n \}\ (x \in A_{i}) \}
$$

> En realidad $\forall$ es una generalización de $\land$!

$$
\bigcup_{i=1}^{n} \{ x \mid \exists i \in \{ 1,\dots,n \}\ (x \in A_{i}) \}
$$
> Y $\exists$ es una generalización del $\lor$!

