---
modified: 2026-09-18T02:33:08Z
title: "Probabilidad Condicional e Independiente"
publish: true
type: zettel
date: "2026-09-07"
status: undone
aliases:
tags:
 - probability
cssclasses: 
 - romana
---
Hasta ahora hemos medido eventos estaticos dentro de un universo $\Omega$ congelado. Las siguientes dos definiciones introducen el concepto de **flujo de información**.

> La intuición de la **proba. condicional** es geométrica, al saber que ha sucedido un evento $B$, nuestro universo de posibilidades se *"encoge"*. Todo lo que está fuera de $B$ pasa a tener probabilidad cero! $B$ se *"convierte"* en $\Omega$.



> [!theorem] **Definición.** (Probabilidad Condicional)
>
> Sea $(\Omega ,\mathcal{F}, P)$ un esp. de prob. y sea $B \in  \mathcal{F}$ un evento tal que $P[B] > 0$. Para cualquier evento $A \in  \mathcal{F}$, la **probablidad condicional de** $A$ **dado** $B$ se define como,
> $$
> P[A \mid B] = \frac{P[ A \cap B ]}{P[B]}
> $$



> [!observation]+ **Observación.**
>
> Sea $(\Omega , \mathcal{F}, P)$ espacio de probabilidad, y $B \in  \mathcal{F}$.
> $$
> P^{*}[A] = P[A \mid B] \text{ es medida de probabilidad }
> $$

> ¿Cuál es la probabilidad de que ocurra una cosa y ocurra otra al mismo tiempo?

> [!observation]+ **Observación.**
>
> Si $P[B]>0$
> $$
> P[A\cap B ]= P[A \mid B] P[B]
> $$
> Analogamente,
> $$
> P[A \cap  (B \cap  C)] = P[A \mid B \cap C]P[B \cap C] = P[A \mid   B \cap C]P[B \mid  C] P[C]
> $$
> Generalizando esto tenemos el siguiente Teorema que surge directamente de la Def. Proba Condicional.

> [!theorem] **Teorema.** (Regla de la Multiplicación)
>
> Para $\{ A_{n} \}$ entonces:
> $$
> P\left[\bigcap_{i=1}^{n} A_{i}\right] = P\left[A_{1} \mid  \bigcap_{i=2}^{n} A_{i}\right] P\left[A_{2}\mid \bigcap_{i=3}^{n} A_{i}\right]\cdots P\left[A_{n-1}\mid A_{n}\right]P\left[A_{n}\right]
> $$


##### Ortogonalidad de la Información
> la probabilidad independiente significa que **lo que pasa en un evento no cambia ni afecta las probabilidades de que ocurra el otro**

La intuición nos diría que dos eventos son independientes "no tienen nada que ver el uno con el otro", es decir, saber que $B$ ocurrío aporta cero información sobre $P[A]$. Usando esta intuición, tendríamos
$$
P[A \mid B] = P[A]
$$
El tema es cuando $P[B] = 0$, por ello construimos como sigue la siguiente def.


> [!observation]+ **Observación.**
>
> Sean $A,B \in  \mathcal{F}$ tal que $A \perp\!\!\!\perp B$ ,
> $$
> P [A \mid  B] = \frac{P[A \cap B]}{P[B]}
> $$
> como $A \perp\!\!\!\perp B$, ent.
> $$
> P[A \mid B] = P[A] = \frac{P[A \cap B]}{P[B]} \implies P[A \cap B] = P[A]P[B]
> $$


> [!theorem] **Definición.** (Proba Independiente)
>
> Sean $A, B \in  \mathcal{F}$, decimos que $A$ **es independiente de** $B$, denotado $A \perp\!\!\!\perp B,$ si y sólo si
> $$
> P[A \cap B] = P[A] \cdot P[B]
> $$

> [!observation]+ **Observación.**
>
> Vemos que $\perp\!\!\!\perp$ es una relación con las siguientes propiedades:
> 1. Simetría: $A \perp\!\!\!\perp B \iff  B \perp\!\!\!\perp  A$
> 2. Ajenos:  



