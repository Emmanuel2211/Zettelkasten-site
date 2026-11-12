---
modified: 2026-08-23T00:53:43Z
publish: true
type: zettel
date: "2026-08-22"
status: undone
aliases:
tags:
 - algebra
cssclasses: 
 - romana
---
# Motivación de $\mathbb{Z}$

Ya conocemos a los $\mathbb{N}$, pero observamos que en ellos hay ecuaciones que no tienen solución:
$$
9 + x = 7
$$
> Claro esta que intuitivamente la solución sería $x = 7 - 9 = -2$

**¿Quién es** $7-9$**?** ¿Podríamos pensar en definir a $\mathbb{Z}$ como todas las posibles diferencias en $\mathbb{N}$?
- Formalmente, esto no es correcto, pues $-_{\mathbb{N}}$ no esta definida. Para evitar este problema formal, pensamos (*codificamos*) la diferencia como par ordenado de $\mathbb{N}$.
$$
7-9 \longleftrightarrow (7,9) \in \mathbb{N} \times \mathbb{N}
$$

> **Notación.** Por ahora, escribamos **$(n,m)$** para la solución de la ecuación $n = m+x$.

- Otro problema es observar que existen diferentes ecuaciones con misma solución, como
$$
3-5 \longleftrightarrow (3,5)
$$
Dado que representan la misma solución, debemos identificarlas entre si.

De modo mas general, si $m,n \in \mathbb{N}$, la solución de
$$
n + x = n \quad \longrightarrow \quad n-m \ \ \ (\text{intuitivamente}) \quad \longleftrightarrow \quad (n,m) \in \mathbb{N} \times \mathbb{N}
$$
Dados $(n,m),(p,q) \in \mathbb{N}\times \mathbb{N}$, *¿cómo podemos identificar estas parejas entre si?*
- Pensando intuitivamente $(1)$ las parejas representan la misma solución, pero al transformarlos en $(2)$, estamos trabajando ya con elementos en $\mathbb{N}$ **bien definidos**.
$$
(1) \ \ \ n - m = p-q \quad \iff \quad n + q = m + p \ \ \ (2)
$$

Ent. definimos lo siguiente:

> [!theorem] **Definición.** (Relación ~)
>
> Dados $n,m,p,q \in \mathbb{N}$, diremos que los pares ordenados $(n,m)$ y $(p,q)$ están relacionados según $\sim$ si y sólo si $n+q = m+p$, es decir.
> $$
> (n,m) \sim (p,q) \iff n+q=m+p
> $$
^15a338


> [!theorem] **Teorema.**
>
> La relación $\sim$ es de equivalencia.

> [!proof]- **Proof.** 
>
> **Reflexividad:**
> Si $(n,m) \in \mathbb{N} \times \mathbb{N}$ tenemos que (*por conmutatividad* $+_{\mathbb{N}}$)
> $$
> n+ m = m + n 
> $$
> Así $(n,m) \sim (n,m)$
> 
> **Simetría:**
> Ahora, si $(n,m),(p,q) \in \mathbb{N} \times \mathbb{N}$ y $(n,m)\sim (p,q)$ tenemos que $n+q = m + p$. Por *conmutatividad* $+_{\mathbb{N}}$ $q + n = p + m$, en donde $$(p,q) \sim (n,m).$$
> 
> **Transitividad:**
> Finalmente, si $(n,m),(p,q),(r,s) \in \mathbb{N} \times \mathbb{N}$ y $(n,m) \sim (p,q), (p,q) \sim (r,s)$ tenemos que
> $$
> n+q = m + p, p+s = q+r
> $$
> Sumando ambas igualdades
> $$
> n + q + p + s = m + p + q + r
> $$
> y por cancelación de $+_{\mathbb{N}}$
> $$
> n + s = m + r
> $$
> Así, $(n,m) \sim (r,s)$
> $$
> \therefore \ \sim \text{ es de equivalencia} \tag*{$\blacksquare$}
> $$
> 

> [!observation]+ **Observación**
>
> Veremos que nuestros $\mathbb{N}$ son una **subestructura** de $\mathbb{Z}$, pero no un subconjunto en el sentido conjuntista estricto. $\mathbb{Z}$ serán individuos nuevos que representen a los viejos.
