---
modified: 2026-10-15T17:08:33Z
title: "Esperanza"
publish: true
type: zettel
date: "2026-09-01"
status: undone
aliases:
tags:
 - probability
cssclasses:
 - romana
---
> [!tip]+ **Idea.**
>
> Uno de los conceptos más importantes, la esperanza $\mu$ es un número que indica el promedio ponderado de los diferentes valores que la variable puede tomar. También se le conoce como *media*, *valor esperado* o *valor ponderado*.

> [!theorem] **Definición.** (Esperanza)
>
> Sea $X$ v.a. **discreta** con función de densidad de probabilidad $f(x)$. La **esperanza** de $X$ se define cómo
> $$
>\operatorname{E} (X) = \sum_{x} xf(x),
> $$
> suponiendo que esta suma es **absolutamente convergente**, i.e, la suma de los valores absolutos es convergente.
>
> Por otro lado, si $X$ es **continua** con función de densidad $f(x)$, entonces la esperanza es
> $$
> \operatorname{E} (X) = \int_{-\infty}^{\infty} xf(x) \, dx,
> $$
> suponiendo que esta integral es absolutamente convergente.
>
> Si para los dos casos, no se cumple la condición de convergencia absoluta, ent. se dice que $\operatorname{E} (X)$ no existe, o que $X$ no tiene esperanza finita.
> Generalmente, suele denotarse $\operatorname{E} (X) = \mu$.

> [!tip]+ **Idea.**
>
> Los siguientes resultados establecen una forma de calcular la esperanza de una función de una v.a, sea $Y = \varphi (X)$, por def. tendríamos $\operatorname{E} (Y) = \sum_{y} \ y  f_{Y}(y)$, para lo cual necesitamos encontrar $f_{Y}(y)$, que en general, no es fácil.
> Ent. usamos lo siguietne para calcular $\operatorname{E} (Y)$ conociendo unicamente $f_{X}(x)$ (func. de densidad de $X$).

> [!theorem] **Proposición.** (Teorema del Estadistico Inconsciente) (Caso Discreto)
>
> Sea $X$ v.a. **discreta** y sea $\varphi$ función tal que $\varphi (X)$ es una v.a. con esperanza finita. Entonces
> $$
> \operatorname{E} [\varphi (X)] = \sum_{x} \varphi (x)P(X = x)
> $$

> [!proof]+ **Proof.**

> [!theorem] **Proposición.** (Teorema del Estadistico Inconsciente) (Caso Continuo)
>
> Sea $X$ una v.a. continua y sea $\varphi$ función tq. $\varphi (X)$ es v.a. con esperanza finita. Entonces
> $$
> \operatorname{E} [\varphi (X)] =  \int_{-\infty}^{\infty} \varphi(x) f_{X}(x) \, dx
> $$

> [!proof]+ **Proof.**

Los resultados anteriores se puede extender para el caso de $2$ o más v.a.s, como se muestra en la siguiente proposición.

> [!theorem] **Proposición.**
>
> Sean $X,Y$ v.a. continuas definidas sobre un mismo esp. de prob. y con función de densidad conjunta $f(x,y)$. Sea $\varphi :\mathbb{R}^{2} \to  \mathbb{R}$ una función tq. $\varphi (X,Y)$ es una v.a. con esperanza finita. Entonces,
> $$
> \operatorname{E} [\varphi (X,Y)] = \int_{-\infty}^{\infty}\int_{-\infty}^{\infty} \varphi (x,y) f(x,y) \, dy \, dx
> $$
>
> Sean $X,Y$ v.a. discretas, el resultado es análogo,
> $$
> \operatorname{E} [\varphi (X,Y)] = \sum _{x} \sum_{y} \varphi (x,y) f(x,y).
> $$

Su dem. es similar al caso con una sola variable. 

Ahora, propiedades generales de la esperanza.

> [!theorem] **Proposición.** (Propiedades Básicas)
>
> Sean $X,Y$ v.a.s con $\mu$ finita y sea $c$ una constante. Entonces
> 1. $\operatorname{E} (c) = c$
> 2. $\operatorname{E} (cX) = c \operatorname{E} (X)$
> 3. $X\geq 0 \implies \operatorname{E} (X)\geq 0$
> 4. $\operatorname{E} (X+Y) = \operatorname{E} (X) + \operatorname{E} (Y)$

> [!observation]- **Observación.**
>
> Observamos dadas estás propiedades que la esperanza el **lineal**, i.e. separa sumas, y, multpl. por constantes.

Otras propiedades se encuentrar en la sección de ejercicios del libro de Luis Rincón!


> [!proof]+ **Proof.**

Veamos ahora una aplicación del concepto de indep. en el cálculo de la esperanza.

> [!theorem] **Proposición.**
>
> Sean $X$ y $Y$ v.a. independientes y ambas con esperanza finita. Ent.
> $$
> \operatorname{E} (XY) = \operatorname{E} (X) \operatorname{E} (Y)
> $$

> [!observation]- **Observación.**
>
> El reciproco no es válido, ej. 232


> [!proof]+ **Proof.**
>

La sig. proposición generaliza el resultado anterior.

> [!theorem] **Proposición.**
>
> Sean $X,Y$ v.a.s indep. y sean $g(x)$ y $h(y)$ funciones tq. $g(X)h(Y)$ es una v.a. con esperanza finita. Entonces,
> $$
> \operatorname{E} [g(X)h(Y)]= \operatorname{E} [g(X)] \cdot \operatorname{E} [h(Y)]
> $$

