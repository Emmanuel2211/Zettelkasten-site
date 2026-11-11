---
modified: 2026-09-02T17:48:30Z
title: "Ordenaciones"
publish: true
type: zettel
date: "2026-07-03"
aliases:
 - Ordenaciones
tags: 
 - algebra
cssclasses: 
 - romana
---
Igualmente nombradas *Ordenaciones sin Repetición*. Vamos a interpretarlas:

> Vemos que es similar a las *permutaciones*. Tenemos $n$ objetos, hagamos listas de tamaño $m$ tal que $m \leq n$:
> $$
> \underset{1}{\_\_}, \underset{2}{\_\_},\underset{3}{\_\_}, \dots, \underset{m}{\_\_}, 
> $$
> Para $1$, hay $n$ objetos posibles.
> Para 2, hay $n-1$.
> $\vdots$
> Para $m$, hay $n-(m-1)= (n-m+1)$
> 
> Es decir,
> $$
>  \begin{align}
>  \text{Total de listas posibles} &= n(n-1)(n-2)\cdots (n -(m-1)) \\[0.5em]
>  &= n(n-1)(n-2) \cdots (n-m+1) \frac{(n-m)(n-m-1)\cdots 1}{(n-m)(n-m-1) \cdots 1} \\[0.5em]
>  &= n! \frac{1}{(n-m)!} \\[1em]
>  O_{m}^{n} &= \frac{n!}{(n-m)!} = \frac{P_{n}}{P_{n-m}}
>  \end{align}
> $$
	
---


> [!theorem] **Def.** (Ordenaciones)
>
> Sea $A$ un conjunto finito con $\lvert A \rvert=n$. Las **ordenaciones de los elementos de** $A$ **tomados de** $m$ **en** $m$ son las funciones $f: I_{m}\to A$ tales que $f$ es inyectiva. Denotamos al número de ordenaciones,
> $$
> O_{m}^{n}
> $$

> [!observation]- **Observación.**
>
> ¿Si $n = m$? Se tiene $(n- m) = 0$. Y por convicción $!0 = 1$, por lo que $O_{n}^{n} =   n!$.

De esta forma, las *ordenaciones* son casos especiales de las *ordenaciones con repetición*<sup><a href="#user-content-fn-inline-1" id="user-content-fnref-inline-1" data-footnote-ref class="internal">1</a></sup>. Importante, consideramos un ejemplo para ilustrar el resultado general.

> [!example]- **Ejemplo 1.** 
>
> Las "palabras" de dos letras distintas que pueden formar con las letras $a,b$ y $c$ son:
> $$
> \begin{matrix}
> ab, & ac, \\
> ba, & bc, \\
> ca, & cb.
> \end{matrix}
> $$
> Podemos ver a estas palabras como funciones de $I_{2}$ en $\{ a,b,c \}$:
> $$
> \begin{align}
> \begin{pmatrix}
> 1 & 2 \\
> a & b
> \end{pmatrix} \quad \begin{pmatrix}
> 1 & 2 \\
> a & c
> \end{pmatrix} \quad \begin{pmatrix}
> 1 & 2 \\
> b & a
> \end{pmatrix} \\[1em]
> \begin{pmatrix}
> 1 & 2 \\
> b & c 
> \end{pmatrix} \quad \begin{pmatrix}
> 1 & 2 \\
> c & a
> \end{pmatrix} \quad \begin{pmatrix}
> 1 & 2 \\
> c & b
> \end{pmatrix}
> \end{align}
> $$
> Observe que como formamos palabras con letras distintas, estas funciones son *inyectivas.*



> [!example]- **Ejemplo para el lema.** 
>
> Sea $A = \{ a,b,c,d,e \}$. Las funciones inyectivas de $I_{1}$ en $A$ son
> $$
> \begin{pmatrix}
> 1 \\
> a
> \end{pmatrix} \quad \begin{pmatrix}
> 1  \\
> b
> \end{pmatrix} \quad \begin{pmatrix}
> 1 \\
> c
> \end{pmatrix} \quad \begin{pmatrix}
> 1 \\
> d
> \end{pmatrix} \quad \begin{pmatrix}
> 1 \\
> e
> \end{pmatrix}.
> $$
> Entonces $O_{5}^{1} = 5$. Ahora, tomemos una en particular $f = \begin{pmatrix}1 \\  b\end{pmatrix}$, ¿cuántas funciones inyectivas hay de $I_{2}$ en $A$ que extiendan a $f$? Esta extensión tiene la forma $\begin{pmatrix}1 & 2 \\  b & x\end{pmatrix}$, donde x es cualquier elemento de $A$ que **no** sea $b$ para que esta extensión siga siendo inyectiva. Hay $5-1=4$ posibles elementos de $A$ que pueden ser $x$, por lo que por cada función inyectiva $I_{1}$ en $A$, hay $4$ funciones inyectivas que la extienden de $I_{2}$ en $A$. Así, hay $5(4)$ funciones inyectivas de $I_{2}$ en $A$.

Ahora sí, veamos el siguiente lema.

> [!theorem]- **Lema.** 
>
> Sean $m,n \in \mathbb{N}^{+}$ tales que $m \leq n$. Entonces
> $$
> O_{n}^{m+1} = (n-m)O_{n}^{m}
> $$

> [!proof]- **Proof.** 
>
> pag. 245 Algebra Sup. I

> [!theorem] **Teorema.** 
>
> Si $m,n \in \mathbb{N}^{+}$ y $m \leq n$, entonces
> $$
> O_{m}^{n} = n(n-1)\dots(n-m +1)
> $$
> Otra manera es
> $$
> O_{m}^{n} = \frac{n!}{n-m}!
> $$

> [!proof]- **Proof.** 
>
> Por inducción sobre $m$.
> *Paso Base:* Si $m = 1$, entonces $n\geq 1$. Dado que hay $n$ funciones inyectivas distintas de $I_{1}$ en un conjunto $\lvert A \rvert = n$, $O_{n}^{1} = n$. Por otro lado, como $m = 1, n(n- 1)\dots(n-m+1) = n$. Así, en este caso, efectivamente, $O_{n}^{m} = n(n-1)\dots(n-m+1)$.
> 
> *Hip. de Inducción:* Supongamos que $O_{n}^{m}=n(n-1)\dots(n-m+1)$.
> Entonces por el lema anterior, $O_{m}^{n+1} = (n-m)O_{n}^{m} = O_{n}^{m}(n-m)$. Usando la Hip. de Inducción, tenemos que
> $$
> O_{n}^{m}(n-m) = n(n-1)\dots(n-m+1)(n-m).
> $$
> Entonces
> $$
> \begin{align}
> O_{n}^{m+1} &= n(n-1)\dots(n-m+1)(n-m) \\
> &= n(n-1)\dots(n-m+1)(n-(m+1)+1).
> \end{align}
> $$
> Por lo tanto, $O_{n}^{m}= n(n-1)\dots(n-m+1)$ siempre que $m,n \in \mathbb{N}^{+}$ y $m\leq n$. $$
> \tag*{$\blacksquare$}
> $$

Un caso especial de las ordenaciones son las permutaciones.<sup><a href="#user-content-fn-inline-2" id="user-content-fnref-inline-2" data-footnote-ref class="internal">2</a></sup>

<section data-footnotes class="footnotes"><h2 class="sr-only" id="footnote-label">Notas</h2>
<ol>
<li id="user-content-fn-inline-1">

[[Ordenaciones con Repeticion]] <a href="#user-content-fnref-inline-1" data-footnote-backref class="data-footnote-backref internal">↩</a>

</li>
<li id="user-content-fn-inline-2">

[[Permutaciones]] <a href="#user-content-fnref-inline-2" data-footnote-backref class="data-footnote-backref internal">↩</a>

</li>
</ol>
</section>
