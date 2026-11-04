---
modified: 2026-10-20T00:35:06Z
title: "Relación Binaria"
publish: true
type: zettel
tags:
- algebra
- sets
date: "2026-05-29"
aliases:
- Relations
cssclasses: romana
---
> [!theorem] **Definición.** (Relación Binaria)
> Una **relación binaria** entre $A$ y $B$ es un subconjunto $R$ de  $A \times B$. 
> $(a,b) \in R$ suele denotarse $a R b$.
> En el caso de $A = B$, decimos que $R$ es relación binaria sobre $A$.

A la relación $\varnothing$, dado $\varnothing \subseteq A \times B$, se le conoce como *relación vacía*.
A la relación $A \times B$, se le conoce como *relación total*.

> [!theorem] **Def.** (Dominio)
> El **dominio** de una relación $R \subseteq A \times B$, es:
> $$
> \operatorname{dom} R = \{ x \in A : \exists y ( y \in B \land (x,y) \in R) \}.
> $$


> [!theorem] **Def.** (Imagen)
> La **imagen** o **rango** de una relación $R \subseteq A \times B$, es:
> $$
> \operatorname{im} R = \{ y \in B : \exists  x (x \in A \land (x,y) \in R) \}.
> $$

Es claro que, $\operatorname{dom} R \subseteq A$ e $\operatorname{im} R \subseteq B$.

> [!observation]- **Observación**
> Muchas veces no se especifica de que producto cartesiano deriva una relación $R$, esto no es problema pues $R \subseteq \operatorname{dom} R \times \operatorname{im} R$.

### Tipos de Relaciones

> [!theorem] **Definición.** (Reflexividad)
> Sea $A$ cjto. Una relación binaria $R$ es **reflexiva sobre** $A$ si y sólo si
> $$
> \forall x \in A \ (x\in A \implies  (x,x)\in A)
> $$
> Esto tambien se escribe, $xRx$.

En este caso, al conjunto de $(x,x)$'s (*primera y segunda coordenadas iguales*) le damos un nombre especial:

> [!theorem] **Definición.** (Diagonal)
> Sea $A$ cjto. Llamamos la **diagonal** de $A^{2}$, denotada $\Delta_{A}$, al conjunto
> $\{ (x,x) \mid x \in A \}$.

> [!theorem] **Proposición.**
> Sea $A$ cjto, sea $R$ relación binaria, $R$ es reflexiva sobre $A$ si y sólo si la diagonal de $A^{2}$ está contenida en $R$.


> [!theorem] **Definición.** (Antirreflexividad)
> Sea $A$ cjto. Una relación $R$ es antireflexiva sobre $A$ si y sólo si
> $$
>  \forall x (x \in A \implies  (x,x)\not\in R)
> $$


> [!theorem] **Definición.** (Simetría)
> Una relación binaria $R$ es **simétrica** si y sólo si
> $$
> \forall x \forall  y ((x,y)\in R \implies  (y,x) \in R)
> $$

> [!observation]+ **Observación.**
> Entonces $R$ no es simétrica sii existe $(x,y) \in  R$ tal que $(y,x)\not\in R$.

> [!theorem] **Definición.** (Antisimétrica)
> Una relación binaria $R$ es **antisimétrica** si y sólo si 
> $$
> \forall x \forall y  \left( \left( (x,y) \in R \land  (y,x) \in R  \right) \implies x = y \right)
> $$

La propiedad de ser antisimétrica no  tiene que ver con la negación de ser simétrica. De hecho, es posible que una relación sea simétrica y antisimétrica

> [!example]+ Ejemplo.
> - La relación antisimétrica más famos es $\leq$.
> Por ejemplo, sea $\leq$ definida sobre $\mathbb{N}$, es antisimétrica, pues 
> $n\leq m \land m\leq n \implies n = m$.
> Además $\leq$ no es simétrica pues $2 \leq 3$ y $3 \not\leq 2$. 
> Observese que esta relación como la definimos en este ejemplo es un subcjto. de $\mathbb{N}^{2}$, y $n\leq m$ en realidad significa que $(n,m)\in  \, \leq$.
> - Otro ejemplo es la relación de contención $\subseteq$ definida sobre $\mathcal{P}(A)$.
> Es antisimetrica, pues por axioma de extensionalidad, $b \subseteq c$ y $c \subseteq b \implies b = c$.
> Igualmente, esta relación no es simétrica.

> [!theorem] **Definición.** (Transitividad)
> Una relación binaria $R$ es **transitiva** si y sólo si
> $$
> \forall x \forall y \forall z \left( \left( (x,y) \in R \land  (y,z) \in R  \right) \implies  (x,z)  \in R \right)
> $$

> [!observation]+ **Observación.**
> Una relación binaria $R$ no es transitiva si y sólo si existen $x,y,z$ tales que $(x,y), (y,z) \in R$ y $(x,z)\not\in R$.



Se continua con las relaciones de equivalencia^[[[Relaciones de Equivalencia]]]

