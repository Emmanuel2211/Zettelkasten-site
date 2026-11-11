---
modified: 2026-11-11T04:38:47Z
title: "Sucesiones Divergentes"
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
> [!theorem] **Definición.** (Sucesión Divergente)
> Decimos que $\{ a_{n} \}$ **diverge** (o que es **divergente**) si no converge, i.e. si no existe $L \in \mathbb{R}$ tq. $a_{n} \to L$.

Para demostrar que algo diverge necesitamos negar la definición de convergencia. Negando los cuantificadores, $\{ a_{n} \}$ **no** converge a $L$ sii
$$
\exists \varepsilon > 0 \ \forall N \in \mathbb{N} \ \exists n \geq N \ \left( \lvert a_{n} - L \rvert \geq \varepsilon \right)
$$
y $\{ a_{n} \}$ diverge sii esto pasa para **todo** $L \in \mathbb{R}$.

> [!tip]- **Idea.**
> No converger a $L$ significa que hay una banda fija alrededor de $L$ de la que la sucesión **se sale una y otra vez**: no importa qué tan lejos vayamos ($\forall N$), más adelante hay un término afuera ($\exists n \geq N$). Es decir, hay una infinidad de términos fuera de la banda (compara con la Observación (2) de arriba).

> [!example]- **Ejemplo 6.** ($\{ (-1)^{n} \}$ diverge)
> **Borrador.** Los términos saltan entre $-1$ y $1$, que están a distancia $2$. Una banda de radio $\varepsilon = 1$ tiene ancho $2$ y es abierta, así que no puede contener a ambos. Usamos un término par y uno impar después de $N$.
>
> **Proof.** Sup. que $(-1)^{n} \to L$ para algún $L \in \mathbb{R}$. Para $\varepsilon = 1$ existe $N$ tq. $\forall n \geq N$ $\lvert (-1)^{n} - L \rvert < 1$. Tomemos $n = 2N$ y $n = 2N + 1$, ambos $\geq N$:
> $$
> \begin{align}
> 2 = \lvert 1 - (-1) \rvert &= \lvert (-1)^{2N} - (-1)^{2N+1} \rvert \\[0.5em]
> &\leq \lvert (-1)^{2N} - L \rvert + \lvert (-1)^{2N+1} - L \rvert \tag{Des. triang.} \\[0.5em]
> &< 1 + 1 = 2
> \end{align}
> $$
> i.e. $2 < 2$, una contradicción!
> $$
> \therefore \ \{ (-1)^{n} \} \text{ diverge} \tag*{$\blacksquare$}
> $$
> Con [[Subsucesiones]] hay un argumento más rápido: los términos pares tienden a $1$ y los impares a $-1$.

> [!example]- **Ejemplo 7.** ($\{ n \}$ diverge)
> Por la Prop. Arquimediana, para todo $k \in \mathbb{R}^{+}$ existe $n \in \mathbb{N}$ con $n > k$, ent. $\{ n \}$ no está acotada y por el Corolario no converge.

### Divergencia a $\pm\infty$

No todas las divergentes son iguales: $\{ (-1)^{n} \}$ diverge porque *oscila*, mientras que $\{ n \}$ diverge porque *crece sin control*. Al segundo comportamiento le damos nombre.

> [!theorem] **Definición.** (Divergencia a $\pm\infty$)
> Decimos que $\{ a_{n} \}$ **diverge a** $\infty$ (o **tiende a** $\infty$), y escribimos $a_{n} \to \infty$ o 
> $\displaystyle \lim_{ n \to \infty } a_{n} = \infty$, sii
> $$
> \forall M \in \mathbb{R} \ \exists N \in \mathbb{N} \text{ tal que } \forall n \geq N \ (a_{n} > M)
> $$
> Análogamente, $\{ a_{n} \}$ **diverge a** $-\infty$ sii
> $$
> \forall M \in \mathbb{R} \ \exists N \in \mathbb{N} \text{ tal que } \forall n \geq N \ (a_{n} < M)
> $$

> [!tip]- **Idea.**
> Ahora el papel de $\varepsilon$ lo juega $M$: alguien nos propone un "techo" $M$ tan alto como quiera, y a partir de cierto término toda la sucesión queda por encima de él. La banda $(L-\varepsilon, L+\varepsilon)$ se cambia por la semirrecta $(M, \infty)$.

> [!observation]+ **Observación.**
> 1. $\infty$ **no** es un número real: si $a_{n} \to \infty$, ent. $\{ a_{n} \}$ **diverge**. "$\lim a_{n} = \infty$" es solo notación para un tipo particular de divergencia.
> 2. $a_{n} \to -\infty \iff -a_{n} \to \infty$, pues $a_{n} < M \iff -a_{n} > -M$. Así, basta estudiar el caso $\infty$.
> 3. No acotada **no** implica tender a $\pm\infty$: $\{ (-1)^{n}n \} = -1, 2, -3, 4, \dots$ no está acotada, pero no tiende ni a $\infty$ ni a $-\infty$.
>
> > [!proof]- **Proof.** (1) y (3)
> > (1) Sup. $a_{n} \to \infty$. Si estuviera acotada por $k$, tomando $M = k$ existiría $N$ con $a_{N} > k \geq \lvert a_{N} \rvert$, una contradicción. Ent. no está acotada y por el Corolario diverge.
> > (3) Para $M = 0$ y cualquier $N$, el impar $n = 2N+1 \geq N$ cumple $(-1)^{n}n = -n < 0$, ent. no tiende a $\infty$. Análogamente, con $n = 2N$ par se ve que no tiende a $-\infty$.
> > $$
> > \tag*{$\blacksquare$}
> > $$

Con esto, toda sucesión cae en **exactamente uno** de los siguientes casos:

| Comportamiento | Ejemplo |
|---|---|
| Converge a algún $L \in \mathbb{R}$ | $\frac{1}{n} \to 0$ |
| Diverge a $\infty$ | $n \to \infty$ |
| Diverge a $-\infty$ | $-n \to -\infty$ |
| Diverge oscilando (ni converge ni tiende a $\pm\infty$) | $(-1)^{n}$, $\ (-1)^{n}n$ |

> [!example]- **Ejemplo 8.** ($n \to \infty$)
> **Proof.** Sea $M \in \mathbb{R}$. Por la Prop. Arquimediana existe $N \in \mathbb{N}$ tq. $N > M$. Ent. $\forall n \geq N$, $n \geq N > M$.
> $$
> \tag*{$\blacksquare$}
> $$

> [!example]- **Ejemplo 9.** ($\sqrt{ n } \to \infty$)
> **Borrador.** Si $M < 0$ no hay nada que hacer, pues $\sqrt{ n } \geq 0 > M$. Si $M \geq 0$, ent. $\sqrt{ n } > M \iff n > M^{2}$.
>
> **Proof.** Sea $M \in \mathbb{R}$. Por la Prop. Arquimediana existe $N \in \mathbb{N}$ tq. $N > M^{2}$. Sea $n \geq N$.
> - Si $M < 0$, ent. $\sqrt{ n } \geq 0 > M$.
> - Si $M \geq 0$, como la raíz cuadrada es estrictamente creciente, $\sqrt{ n } \geq \sqrt{ N } > \sqrt{ M^{2} } = M$.
> $$
> \therefore \ \sqrt{ n } \to \infty \tag*{$\blacksquare$}
> $$

> [!example]- **Ejemplo 10.** ($n^{2} \to \infty$)
> Para todo $n \in \mathbb{N}$, como $n \geq 1$, ent. $n^{2} = n \cdot n \geq n \cdot 1 = n$. Dado $M \in \mathbb{R}$, tomando el $N$ del Ejemplo 8, $\forall n \geq N$ $n^{2} \geq n > M$.
> $$
> \tag*{$\blacksquare$}
> $$
> Este truco de comparar con una sucesión que ya sabemos que tiende a $\infty$ se generaliza en [[Limites de Sucesiones]].

---

Las propiedades de los límites (álgebra de límites, sándwich, valor absoluto, $r^{n}$, y las propiedades de $\pm\infty$) están en [[Limites de Sucesiones]].
