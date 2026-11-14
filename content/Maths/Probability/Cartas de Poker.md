---
modified: 2026-11-13T23:34:20Z
title: "Cartas de Poker"
publish: true
type: zettel
date: "2026-09-01"
status: seed
aliases:
tags:
 - probability
cssclasses:
 - romana
---
![[Pasted image 20260904091226.png|center|354]]

#### Probabilidad de cada mano

> Poker: $52$ cartas, $4$ palos, $13$ números. Una mano $= 5$ cartas al azar.

Cual es $\left| \Omega  \right|$?
En total son $52$ y una mano tiene 5 cartas, por lo que
$$
\left| \Omega  \right| = C_{5}^{52} = 2,598,960
$$

1. **Escalera Real**
Tenemos $\left| A \right| = 4$, pues solo hay 4 palos.
$$
P[A]  = \frac{4}{2,598,960}
$$

2. **Escalera de Color**: 5 cartas con num. consecutivos y mismo palo.
Basta conocer la más pequeña, pues son consecutivas.
- Palo: 4 opciones
- Carta baja = 9 ops
Por lo que $\left| A \right| = 4 \cdot 9$
$$
P[A] = \frac{36}{\left| \Omega  \right|}
$$

3. **Poker**: 4 cartas con mismo número y otra.
- Num. del Poker: 13 ops
- Otra carta: 48 ops
Por lo que $\left| A \right| = 13 \cdot 48$

$$
P[A] = \frac{624}{\left| \Omega  \right|}
$$


4. **Full**: 3 cartas del mismo número + 2 cartas con el mismo número.
Se tiene que $\left| A \right| = 13 \cdot C_{3}^{4} \cdot 12 \cdot C_{2}^{4}$.
$$
P[A] = \frac{3,744}{\left| \Omega  \right|}
$$ 

5. **Color**: 5 cartas del mismo color no consecutivas.
- Palo = 4 ops
- Todos los núm.
Tenemos que $\left| A \right| = 4 \cdot C_{5}^{13} - 40$, pues $40$ es el número de las que son consecutivas.
$$
P[A] = \frac{5,108}{\left| \Omega  \right|}
$$

6. **Escalera**: 5 cartas consecutivas
- Carta más baja: 10 opciones
- Los 5 palos.
Tenemos $10 \cdot OR^{4}_{5} - 40 = 10 \cdot 4^{5} - 40$.
$$
P[A] = \frac{10,200}{\left| \Omega  \right|}
$$

7. **Tercia**: 3 cartas mismo número.
- Num: 13 ops
- Los palos
- Las otras 2 cartas
Entonces, $\displaystyle  \left| A \right| = 13 \cdot C_{3}^{4} \cdot  \frac{48 \cdot44}{2!}$. Así garantizamos que no repita el número de la primer ni el de la segunda. Dividimos entre $2!$ para retirar ese orden.
$$
P[A] = \frac{54,912}{\left| \Omega  \right|}
$$

8. **Doble par**: Un par mismo número, otro par mismo número, más otra carta.b
Entonces, $\displaystyle \frac{ \left| A \right| 13 \cdot C_{2}^{4} \cdot 12 \cdot C_{2}^{4} }{2!} \cdot 44$
Se divide entre $2!$ porque las cartas al reves y así cuentan como la misma.
$$
P[A] = \frac{123,532}{\left| \Omega  \right|}
$$

9. **Par**: Dos cartas con mismo número
Se tiene $\displaystyle  \left| A \right| = 13 C_{2}^{4} \cdot \frac{ 48 \cdot 44 \cdot 40 }{3!}$. Así garantizo que no se repite el número.
$$
P[A] = \frac{1,098,240}{\Omega }
$$

10. **Carta alta**: No es ninguno de los demás casos!
Se tiene que $\left| A \right| = \Omega  - (A^{c})$, donde $A^{c}$ son todos los casos anteriores sumados.
$$
P[A] = \frac{1,302,540}{\Omega }
$$



