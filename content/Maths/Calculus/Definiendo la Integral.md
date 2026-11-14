---
modified: 2026-11-13T23:34:20Z
publish: true
type: zettel
date: "2026-09-01"
status: seed
aliases:
tags:
 - calculus
cssclasses:
 - romana
---
# Definiendo $\int$

A partir de ahora vamos a trabajar con funciones continuas en un intervalo. 

> Definimos la integral simplemente como un número que cumple esas dos propiedades:
> 
> *Aditividad:* Es que el área bajo la curva se puede dividir en pedazos.
> 
> *Acotación:* es el hecho, que el área bajo la curva está acotada entre el rectangulo *más grande* y el *más pequeño* posible del intervalo.


> [!theorem] **Definición.** (Integral)
>
> Dada una función $f : [a,b] \to \mathbb{R}$ en principio, continua.
> Dados $u,v \in [a,b]$ tales que $a \leq u\leq v \leq b$, se entiende a la **integral** de $f$ en $[u,v]$ como el *"número"* $\displaystyle \int_{u}^{v} f(x) \ dx$ que cumple las siguientes propiedades.
> - Aditividad o Acumulatividad: 
> $$
> \int_{a}^{u} f + \int_{u}^{v}f = \int_{a}^{v} f
> $$
> - Acotación o Intercalación:
> $$
> (v-u) \cdot \min \{ f(x) \} \leq \int_{u}^{v} f(x) dx \leq (v-u)\cdot \max \{ f(x) \}
> $$
> 

> La *norma de la partición* es la longitud del subintervalo más grande de la partición.

> [!theorem] **Definición.** (Partición $\mathcal{P}$)
>
> Dado $[a,b] \in \mathbb{R}$. $\mathcal{P}_{[a,b]}$ es una partición se $\mathcal{P}_{[a,b]} = \{ x_{0},x_{1},\dots,x_{n} \}$ tales que $x_{0} = a$ y $x_{n} = b$, además, $x_{i} < x_{j+1}$
> 
> La norma de la partición se define como, para $1\leq j\leq n-1$
> $$
> \Delta \mathcal{P} = \max \{ x_{j+1} - x_{j} \}
> $$

> Sea $P$ partición, se puede corter alguno de sus subintervalos para crear $P'$, así tenemos $P \subseteq P'$.

> [!theorem] **Definición.** (Refinamiento de $\mathcal{P}$)
>
> Dados $[a,b] \in \mathbb{R}$ y $\mathcal{P}_{[a,b]}$ decimos que $\mathcal{P}'_{[a,b]}$ es un **refinamiento** de $\mathcal{P}$ si
> $$
> \mathcal{P}_{[a,b]} \subseteq \mathcal{P}'_{[a,b]}
> $$

> [!observation]+ **Observación.**
>
> $$
> \Delta \mathcal{P}' \leq \Delta \mathcal{P}
> $$
> Esto es obvio porque puede que el refinamiento $\mathcal{P}'$ haya partido a $\Delta \mathcal{P}$. Si la norma de la partición sigue intacta es claro que $\Delta \mathcal{P} = \Delta \mathcal{P'}$

