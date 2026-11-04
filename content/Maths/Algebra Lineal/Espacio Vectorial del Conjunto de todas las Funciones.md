---
modified: 2026-08-27T15:35:38Z
publish: true
type: zettel
date: "2026-08-21"
status: undone
aliases:
tags:
 - algebra
cssclasses: 
 - romana
---
# $V = \mathscr{F}(S,\mathbb{F})$

> [!theorem] **Definición.**
> Sea $\mathbb{F}$ un campo. Sea $S$ un conjunto no vacío cualquiera, defnimos 
> $$\mathscr{F}(S,\mathbb{F}) = \{  f \mid f: S\to \mathbb{F} \}$$
> Con las siguientes operaciones,
> $$+: \mathscr{F}(S,\mathbb{F})\times \mathscr{F}(S,\mathbb{F}) \to \mathscr{F}(S,\mathbb{F})$$
> Definida como, dadas $f,g \in \mathscr{F}(S,\mathbb{F})$ y dado $x \in S$
> $$
> (f+g)(x) = f(x) + g(x)
> $$
> Además,
> $$\cdot : \mathbb{F} \times \mathscr{F}(S,\mathbb{F})$$
> Definida como, dada $f \in \mathscr{F}(S,\mathbb{F})$, dado $a \in \mathbb{F}$ y dada $x \in S$
> $$
> (af)(x) = af(x)
> $$

> [!observation]- **Observación**
> El codominio de las funciones debe ser el cmapo sobre el que está definido el espacio.
> También observer que $S$ puede no ser campo, no se le pide más que sea un conjunto no vacío.

> [!example]+ **Ejemplos particulares.** 
> $\mathscr{F}(\mathbb{R},\mathbb{R})$
> $\mathscr{F}(\mathbb{R}^{n}, \mathbb{R})$
> hablamos de generalizaciones mas generales! o tambien... mas simples
> $\mathscr{F}(\mathbb{R}, \mathbb{C})$
> Dado $\mathbb{F}$ un campo, $\mathscr{F}(\mathbb{N}^{+}, \mathbb{F})$, este siendo una generalización del anterior.
> $\mathscr{F}(\mathbb{Z},\mathbb{Z}_{2})$
> $\mathscr{F}(\mathbb{Z}^{3}_{2},\mathbb{Z}_{2})$
> muchos ejemplos.... hechar *ojo!*


para que $\cdot$ este bien definida se necesita que el codominio de las funciones se $\mathbb{F}$.

Demostrare que es espacio vectorial
y quien es el $\bar{0}$?
Si $f \in \mathscr{F}(S,\mathbb{F})$, ¿quien es $-f$? $\forall x \in S \ (-f)(x) = -(f(x))$ (inverso de $f(x)$ en $\mathbb{F}$)

