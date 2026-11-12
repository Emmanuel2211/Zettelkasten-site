---
modified: 2026-10-02T23:02:55Z
title: "Teorema del Bolzano"
publish: true
type: zettel
date: 2026-09-04
status: undone
aliases:
  - Teorema de Bolzano
tags:
  - calculus
cssclasses:
  - romana
---
> [!theorem] **Teorema.** (Teorema Bolzano)
>
> Si $f: [a,b] \to  \mathbb{R}$ es continua y $f(a)$ y $f(b)$ tienen signos opuestos, es decir, $f(a)f(b) < 0$, entonces existe al menos un $c \in  (a,b)$ tal que $f(c) = 0$

> [!proof]- **Proof.** 

Equivalentemente, vamos generalizando para una constante $k$. Los siguientes corolarios representan la misma idea pero con caso diferente en cuanto al orden de $f(a)$ y $f(b)$.

> [!theorem] **Corolario.** (Teorema del Valor Intermedio)
>
> Sea $M \in \mathbb{R}$, si $f(a) < M < f(b)$. Entonces existe $c \in (a,b)$, tal que $f(c) = M$.

> [!proof]- **Proof.** 

### Algunas consecuencias

> Es cierto que se mantiene el signo de la función para algún intervalo suficientemente cercano.

> [!theorem] **Teorema.** (Conservación del Signo)
>
> Sea $f: [a,b]\to \mathbb{R}$ continua en un punto $c \in (a,b)$. Si $f(c) >0$, entonces existe una vecindad $(c-\delta,c+\delta)$ tal que $f(x)>0$ para todo $x$ en la vecindad
