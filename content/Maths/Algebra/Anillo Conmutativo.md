---
modified: 2026-11-13T23:34:20Z
title: "Anillo Conmutativo"
publish: true
type: zettel
date: "2026-09-02"
status: seed
aliases:
tags:
 - algebra
cssclasses: 
 - romana
---
Generalizando la estructura que los $\mathbb{Z}$ representan.

> [!theorem] **Definición.** (Anillo Conmt. con Uno)
>
> $(A,+,\cdot)$ es una **anillo conmutativo con uno** si:
> 1. $+:$ Asocia, conmuta, tiene neutro $0_{A}$, hay inversos aditivos.
> 2. $\cdot:$ Asocia, conmuta, tiene neutro $1_{A}$.
> 3. Distribuye $\cdot$ con $+$.
> 
> Es decir, si es un anillo, pero con neutro mult. y conmt. para el producto.

> [!theorem] **Definición** (Dominio Entero)
>
> Dado $(D,+,\cdot)$ un anillo conmutativo con uno, y $D\neq\{ 0_{D} \}$, decimos que es un **dominio entero** si
> $$
> \forall a,b \in D \ (a\neq 0 \land b\neq 0 \implies ab\neq 0)
> $$
> o bien, por contrapuesta
> $$
> \forall a,b \in D \ (ab = 0 \implies a = 0 \lor b = 0)
> $$

> [!observation]+ **Observación.**
>
> En este caso se cumple las leyes de cancelación para el producto.


> [!theorem] **Definición.** (Domonio Entero Ordenado)
>
> Dado $(D,+,\cdot)$un dominio entero, decimos que es un **dominio entero ordenado** si existe $\mathcal{P} \subseteq D$ tal que:
> 5. $\forall a,b \in \mathcal{P} \ (a+b \in  \mathcal{P})$
> 6. $\forall a,b \in  \mathcal{P} \ (ab \in  \mathcal{P})$
> 7. $\forall  a \in  D$ se da una y sólo una de
> $$
> a=0_{D} \quad \lor \quad a \in  \mathcal{P} \quad \lor \quad -a \in  \mathcal{P}
> $$
>
> En este caso podemos definir $a,b \in  D$.
> $$
> a< b \quad \text{ cuando } \quad b-a \in  \mathcal{P}
> $$

> [!theorem] **Definición.** (Asociados)
>
> Dado $(A,+,\cdot)$ un anillo conmutativo con uno. Decimos que $u \in  A$ es una **unidad** si tiene inverso multiplicativo.
> 
> Decimos que $a,b \in  A$ son **asociados** si
> $$
> a = ub \quad \text{ con unidad } u\in A 
> $$

> [!observation]+ **Observación.**
>
> En $\mathbb{Z}$ $a,b$ son **asociados** si y sólo si
> $$
> a = b \quad \lor \quad a = -b
> $$





- Las leyes de cancelacion del producto si y solo si es un dominio entero

A2 : 2,7,9
A1 : la de arriba, 9 , 13