---
modified: 2026-11-11T19:45:17Z
title: "Sucesiones Convergentes"
publish: true
type: zettel
date: "2026-09-01"
status: undone
aliases:
tags:
 - calculus
cssclasses:
 - romana
---
Queremos formalizar la idea de que una sucesión $\{ a_{n} \}$ "se acerca" a un número $L$ conforme $n$ crece. Como en el [[Limite|límite de funciones]], proponemos una distancia $\varepsilon$ alrededor de $L$, pero ahora no buscamos un $\delta$: buscamos un **momento** $N$ a partir del cual todos los términos se quedan a distancia menor que $\varepsilon$ de $L$.

> No importa qué tan cerca de $L$ nos pidan estar, a partir de cierto término la sucesión ya nunca se sale.

> [!theorem] **Definición.** (Sucesión Convergente)
>
> Sea $\{ a_{n} \}$ una sucesión y sea $L \in \mathbb{R}$. Decimos que $\{ a_{n} \}$ **converge** a $L$ sii
> $$
> \forall \varepsilon > 0 \ \exists N \in \mathbb{N} \text{ tal que } \forall n \geq N \ \left( \lvert a_{n} - L \rvert < \varepsilon \right)
> $$
> En este caso decimos que $L$ es el **límite** de $\{ a_{n} \}$ y escribimos $\displaystyle \lim_{ n \to \infty } a_{n} = L$, o simplemente $a_{n} \to L$.
>
> Decimos que $\{ a_{n} \}$ es **convergente** si existe $L \in \mathbb{R}$ tal que $a_{n} \to L$. 
> Si $L = 0$, decimos que $\{ a_{n} \}$ es **nula**.

> [!tip]- **Idea.** (El uso de $\varepsilon$)
>
> Por propiedades de valor absoluto,
> $$
> \lvert a_{n} - L \rvert < \varepsilon \iff L - \varepsilon < a_{n} < L + \varepsilon \iff a_{n} \in (L-\varepsilon, L+\varepsilon)
> $$
> Si dibujamos la sucesión como los puntos $(n, a_{n})$, la franja horizontal de ancho $2\varepsilon$ alrededor de la recta $y = L$ debe **atrapar** a todos los puntos a partir de $n = N$.
>
> ![[banda-epsilon.avif|center|500]]
> *Sucesión: $a_{n} = 1 + \frac{2(-1)^{n}}{n}$, con $L = 1$.*
> 
> Obsérvece que $N$ depende de $\varepsilon$, y a veces se escribe $N = N(\varepsilon)$.
>

> [!observation]+ **Observación.**
>
> 1. Si $N$ funciona para $\varepsilon$, ent. cualquier $N' \geq N$ también funciona, y $N$ también funciona para cualquier $\varepsilon' > \varepsilon$. Por eso basta encontrar **algún** $N$, no el más pequeño.
> 2. $a_{n} \to L$ sii para todo $\varepsilon > 0$, fuera de $(L-\varepsilon,L+\varepsilon)$ hay solo una cantidad **finita** de términos.
> 3. Cambiar, quitar o agregar una cantidad finita de términos no afecta la convergencia ni el límite: solo importa la *cola* de la sucesión (ver [[Subsucesiones]]).
>
> > [!proof]- **Proof.** (2)
> >
> > $(\implies)$ Sea $\varepsilon > 0$, por def. existe $N$ tq. $\forall n \geq N$ $a_{n} \in (L-\varepsilon,L+\varepsilon)$. Ent. los únicos términos que pueden quedar fuera son $a_{1},\dots,a_{N-1}$, que son finitos.
> > $(\impliedby)$ Sea $\varepsilon > 0$ y sea $F = \{ n \in \mathbb{N} \mid a_{n} \notin (L-\varepsilon,L+\varepsilon) \}$, que por hip. es finito. Si $F = \varnothing$ tomamos $N = 1$; si no, tomamos $N = \max F + 1$. En ambos casos, si $n \geq N$, ent. $n \notin F$, i.e. $\lvert a_{n} - L \rvert < \varepsilon$.
> > $$
> > \tag*{$\blacksquare$}
> > $$

La siguiente proposición dice que basta saber trabajar con sucesiones que tienden a $0$:

> [!theorem] **Proposición.**
>
> Sea $\{ a_{n} \}$ una sucesión y $L \in \mathbb{R}$. Son equivalentes:
> 1. $a_{n} \to L$
> 2. $(a_{n} - L) \to 0$
> 3. $\lvert a_{n} - L \rvert \to 0$

> [!proof]- **Proof.**
>
> Para todo $n \in \mathbb{N}$,
> $$
> \lvert a_{n} - L \rvert = \lvert (a_{n} - L) - 0 \rvert = \big\lvert \lvert a_{n} - L \rvert - 0 \big\rvert
> $$
> Ent. para cada $\varepsilon > 0$, un mismo $N$ hace que las tres desigualdades $\lvert a_{n} - L \rvert < \varepsilon$, $\lvert (a_{n}-L) - 0 \rvert < \varepsilon$ y $\big\lvert \lvert a_{n} - L \rvert - 0 \big\rvert < \varepsilon$ se cumplan para todo $n \geq N$, pues son la misma desigualdad.
> $$
> \tag*{$\blacksquare$}
> $$

### Ejemplos de convergencia

Para probar que $a_{n} \to L$ con la definición, el trabajo casi siempre es el mismo: **acotar** $\lvert a_{n} - L \rvert$ por algo sencillo que dependa de $n$ (como $\frac{c}{n}$), y luego hacerlo menor que $\varepsilon$ con la Propiedad Arquimediana<sup><a href="#user-content-fn-inline-1" id="user-content-fnref-inline-1" data-footnote-ref class="internal">1</a></sup>. El *borrador* es donde encontramos $N$; la *prueba* lo presenta limpio.

> [!example]- **Ejemplo 1.** (Sucesión constante)
>
> Sea $c \in \mathbb{R}$ y $a_{n} = c$ para todo $n$. Ent. $a_{n} \to c$.
>
> **Proof.** Sea $\varepsilon > 0$. Tomamos $N = 1$. Ent. $\forall n \geq 1$, $\lvert a_{n} - c \rvert = \lvert c - c \rvert = 0 < \varepsilon$.
> $$
> \tag*{$\blacksquare$}
> $$

> [!example]- **Ejemplo 2.** ($\frac{1}{n} \to 0$)
>
> **Borrador.** Queremos $\left\lvert \frac{1}{n} - 0 \right\rvert = \frac{1}{n} < \varepsilon$, i.e. $n > \frac{1}{\varepsilon}$. La Prop. Arquimediana nos da un $N$ con $\frac{1}{N} < \varepsilon$, y si $n \geq N$, ent. $\frac{1}{n} \leq \frac{1}{N}$.
>
> **Proof.** Sea $\varepsilon > 0$. Por la Prop. Arquimediana existe $N \in \mathbb{N}$ tq. $\frac{1}{N} < \varepsilon$. Ent. $\forall n \geq N$,
> $$
> \left\lvert \frac{1}{n} - 0 \right\rvert = \frac{1}{n} \leq \frac{1}{N} < \varepsilon
> $$
> $$
> \therefore \ \lim_{ n \to \infty } \frac{1}{n} = 0 \tag*{$\blacksquare$}
> $$
> > [!observation]- **Observación.**
> >
> > Con el mismo $N$ se tiene $\frac{1}{n^{p}} \to 0$ para todo $p \in \mathbb{N}^{+}$ y $\frac{(-1)^{n}}{n} \to 0$, pues $\frac{1}{n^{p}} \leq \frac{1}{n}$ y $\left\lvert \frac{(-1)^{n}}{n} \right\rvert = \frac{1}{n}$.

> [!example]- **Ejemplo 3.** ($\frac{2n+1}{n+3} \to 2$)
>
> **Borrador.** Simplificamos la distancia:
> $$
> \left\lvert \frac{2n+1}{n+3} - 2 \right\rvert = \left\lvert \frac{2n+1-2n-6}{n+3} \right\rvert = \frac{5}{n+3} < \frac{5}{n}
> $$
> Basta que $\frac{5}{n} < \varepsilon$, i.e. $n > \frac{5}{\varepsilon}$.
>
> **Proof.** Sea $\varepsilon > 0$. Por la Prop. Arquimediana existe $N \in \mathbb{N}$ tq. $N > \frac{5}{\varepsilon}$, i.e. $\frac{5}{N} < \varepsilon$. Ent. $\forall n \geq N$,
> $$
> \begin{align}
> \left\lvert \frac{2n+1}{n+3} - 2 \right\rvert &= \frac{5}{n+3} \\[0.5em]
> &< \frac{5}{n} \tag{$n+3 > n$} \\[0.5em]
> &\leq \frac{5}{N} \tag{$n \geq N$} \\[0.5em]
> &< \varepsilon
> \end{align}
> $$
> $$
> \therefore \ \lim_{ n \to \infty } \frac{2n+1}{n+3} = 2 \tag*{$\blacksquare$}
> $$

> [!example]- **Ejemplo 4.** ($\sqrt{ n+1 } - \sqrt{ n } \to 0$)
>
> Aunque $\sqrt{ n+1 }$ y $\sqrt{ n }$ crecen sin cota, su diferencia se va a $0$.
>
> **Borrador.** Racionalizamos:
> $$
> \sqrt{ n+1 } - \sqrt{ n } = \frac{(\sqrt{ n+1 } - \sqrt{ n })(\sqrt{ n+1 } + \sqrt{ n })}{\sqrt{ n+1 } + \sqrt{ n }} = \frac{1}{\sqrt{ n+1 } + \sqrt{ n }} < \frac{1}{\sqrt{ n }}
> $$
> Basta que $\frac{1}{\sqrt{ n }} < \varepsilon$, i.e. $n > \frac{1}{\varepsilon^{2}}$.
>
> **Proof.** Sea $\varepsilon > 0$. Por la Prop. Arquimediana existe $N \in \mathbb{N}$ tq. $N > \frac{1}{\varepsilon^{2}}$, ent. $\sqrt{ N } > \frac{1}{\varepsilon}$. Ent. $\forall n \geq N$,
> $$
> \begin{align}
> \left\lvert \sqrt{ n+1 } - \sqrt{ n } - 0 \right\rvert &= \frac{1}{\sqrt{ n+1 } + \sqrt{ n }} \tag{racionalizando} \\[0.5em]
> &< \frac{1}{\sqrt{ n }} \leq \frac{1}{\sqrt{ N }} < \varepsilon
> \end{align}
> $$
> $$
> \tag*{$\blacksquare$}
> $$

> [!example]- **Ejemplo 5.** ($\frac{n^{2}+1}{2n^{2}-3} \to \frac{1}{2}$, cuando la cota solo vale para $n$ grande)
>
> **Borrador.**
> $$
> \left\lvert \frac{n^{2}+1}{2n^{2}-3} - \frac{1}{2} \right\rvert = \left\lvert \frac{2n^{2}+2 - 2n^{2} + 3}{2(2n^{2}-3)} \right\rvert = \frac{5}{2(2n^{2}-3)}
> $$
> El denominador es positivo si $n \geq 2$. Además, si $n \geq 2$, ent. $n^{2} \geq 4 \geq 3$, ent. $2n^{2} - 3 \geq n^{2} \geq n$. Así, para $n \geq 2$,
> $$
> \frac{5}{2(2n^{2}-3)} \leq \frac{5}{2n}
> $$
> Pedimos **dos** cosas: $n \geq 2$ (para que la cota valga) y $n > \frac{5}{2\varepsilon}$. Por eso tomamos el máximo.
>
> **Proof.** Sea $\varepsilon > 0$. Por la Prop. Arquimediana existe $N_{1} \in \mathbb{N}$ tq. $N_{1} > \frac{5}{2\varepsilon}$. Sea $N = \max \{ 2, N_{1} \}$. Ent. $\forall n \geq N$,
> $$
> \begin{align}
> \left\lvert \frac{n^{2}+1}{2n^{2}-3} - \frac{1}{2} \right\rvert &= \frac{5}{2(2n^{2}-3)} \\[0.5em]
> &\leq \frac{5}{2n} \tag{$n \geq 2$} \\[0.5em]
> &\leq \frac{5}{2N_{1}} < \varepsilon \tag{$n \geq N_{1}$}
> \end{align}
> $$
> $$
> \tag*{$\blacksquare$}
> $$

### Unicidad del límite

La definición dice "**el** límite", pero eso hay que demostrarlo: una sucesión no puede acercarse a dos números a la vez.

> [!theorem] **Teorema.** (Unicidad del Límite)
>
> Sea $\{ a_{n} \}$ una sucesión. Si $a_{n} \to L$ y $a_{n} \to M$, ent. $L = M$.

> [!proof]- **Proof.**
>
> **Borrador.** Si $L \neq M$, tomamos bandas de radio $\varepsilon = \frac{\lvert L-M \rvert}{2}$ alrededor de $L$ y de $M$; estas bandas no se tocan. Pero a partir de cierto $n$ la sucesión tendría que estar en **ambas** a la vez.
>
> **Proof.** Sup. que $L \neq M$ y sea $\varepsilon = \frac{\lvert L-M \rvert}{2} > 0$.
> Como $a_{n} \to L$, existe $N_{1}$ tq. $\forall n \geq N_{1}$ $\lvert a_{n} - L \rvert < \varepsilon$.
> Como $a_{n} \to M$, existe $N_{2}$ tq. $\forall n \geq N_{2}$ $\lvert a_{n} - M \rvert < \varepsilon$.
> Sea $N = \max \{ N_{1}, N_{2} \}$, ent. $a_{N}$ cumple ambas desigualdades y
> $$
> \begin{align}
> \lvert L - M \rvert &= \lvert (L - a_{N}) + (a_{N} - M) \rvert \\[0.5em]
> &\leq \lvert a_{N} - L \rvert + \lvert a_{N} - M \rvert \tag{Des. triang.} \\[0.5em]
> &< \varepsilon + \varepsilon = \lvert L - M \rvert
> \end{align}
> $$
> i.e. $\lvert L-M \rvert < \lvert L-M \rvert$, una contradicción!
> $$
> \therefore \ L = M \tag*{$\blacksquare$}
> $$

### Convergente implica acotada

Recordemos que $\{ a_{n} \}$ está **acotada** sii $\exists k \in \mathbb{R}^{+}$ tq. $\forall n \in \mathbb{N} \ \lvert a_{n} \rvert \leq k$ (ver [[Sucesiones Acotadas]]).

> [!theorem] **Proposición.**
>
> Toda sucesión convergente está acotada.

> [!proof]- **Proof.**
>
> **Borrador.** Con $\varepsilon = 1$, a partir de $N$ todos los términos están en $(L-1,L+1)$, ent. $\lvert a_{n} \rvert < \lvert L \rvert + 1$. Antes de $N$ solo hay una cantidad finita de términos, y un cjto. finito siempre tiene máximo.
>
> **Proof.** Sup. que $a_{n} \to L$. Para $\varepsilon = 1$ existe $N \in \mathbb{N}$ tq. $\forall n \geq N$ $\lvert a_{n} - L \rvert < 1$. Ent. $\forall n \geq N$,
> $$
> \lvert a_{n} \rvert = \lvert (a_{n} - L) + L \rvert \leq \lvert a_{n} - L \rvert + \lvert L \rvert < 1 + \lvert L \rvert \tag{Des. triang.}
> $$
> Sea
> $$
> k = \max \{ \lvert a_{1} \rvert, \dots, \lvert a_{N-1} \rvert, 1 + \lvert L \rvert \}
> $$
> que existe por ser un cjto. finito, y $k \geq 1 + \lvert L \rvert > 0$.
> - Si $n < N$, ent. $\lvert a_{n} \rvert \leq k$ por def. de máximo.
> - Si $n \geq N$, ent. $\lvert a_{n} \rvert < 1 + \lvert L \rvert \leq k$.
> $$
> \therefore \ \forall n \in \mathbb{N} \ \lvert a_{n} \rvert \leq k \tag*{$\blacksquare$}
> $$

> [!theorem] **Corolario.**
>
> Si $\{ a_{n} \}$ **no** está acotada, ent. $\{ a_{n} \}$ no converge.

El recíproco de la proposición es falso: estar acotada es **necesario** pero **no suficiente** para converger. El contraejemplo clásico es $\{ (-1)^{n} \}$, que está acotada ($k = 1$) pero no converge, como veremos abajo. Sin embargo, si además pedimos que sea monótona, sí converge (ver [[Criterios de Convergencia de Sucesiones]] y [[Sucesiones Monotonas]]).

<section data-footnotes class="footnotes"><h2 class="sr-only" id="footnote-label">Notas</h2>
<ol>
<li id="user-content-fn-inline-1">

[[Propiedad Arquimediana]] <a href="#user-content-fnref-inline-1" data-footnote-backref class="data-footnote-backref internal">↩</a>

</li>
</ol>
</section>
