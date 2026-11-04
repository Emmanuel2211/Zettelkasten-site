---
modified: 2026-11-04T19:51:28Z
title: "Conjunto Potencia"
publish: true
alias: 
- [ "power set" ]
- [ "axioma potencia" ]
- [ "power axiom" ]
---
> [!theorem] **Axiom.** (Power Set)
> For any $X$ exists $Y = \mathscr{P}(X)$:
> $$
> \forall X \ \exists Y  \ \forall u ( u \in Y \iff u \subset X)
> $$


> [!theorem] **Def.** (Subconjunto)
> Un conjunto $U$ es un **subconjunto** de $X$, denotado $U \subset X$ si
> $$
> \forall z ( z \in U \implies z \in X)
> $$
> Si $U \subset X$ y $U \neq X$, entonces $U$ es un **subconjunto propio** de $X$.

El conjunto de todos los subconjuntos de $X$,
$$
P(X) = \{  u : u \subset X \},
$$
es llamado **conjunto potencia**.

De este axioma se desarrolla otras nociones básicas de la teoría de conjuntos.

> [!theorem] **Def.** (Producto)
> El **producto** de $X$ y $Y$ es el conjunto de pares $(x,y)$ tales que $x \in X$ y $y \in Y$:
> $$
> X \times Y = \{  (x,y): x \in X \land y \in Y \}
> $$


La notación $\{  (x,y): \dots \}$ se justifica ya que
$$
\{ (x,y) : \varphi(x,y) \} = \{  u : \exists x \ \exists y \ (y = (x,y) \land \varphi (x,y)) \}
$$
El producto $X \times Y$ es un conjunto pues
$$
X \times Y \subset PP(X\cup Y)
$$
Se define
$$
X \times Y \times Z = (X \times Y)\times Z,
$$
en general
$$
X_{1} \times \dots \times X_{n+1} = (X_{1}\times \dots \times X_{n}) \times X_{n+1}
$$
Por lo tanto
$$
X_{1} \times \dots \times X_{n} = \{ (x_{1},\dots,x_{n}): x_{1} \in X_{1} \land \dots \land x_{n}\in X_{n} \}
$$
Y definimos
$$
X^n = X \times \dots \times X
$$
q