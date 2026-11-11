---
modified: 2026-09-12T20:42:31Z
publish: true
type: zettel
date: "2026-08-24"
status: undone
aliases:
tags:
 - probability
cssclasses: 
 - romana
---
# Medida de Probabilidad $P$


> [!theorem] **Definición.** (Medida de Probabilidad)
>
> Dado un espacio medible constituido por $(\Omega, \mathcal{F})$, una **medida de probablidades** es una función $P: \mathcal{F} \to \mathbb{R}$, i.e. asigna a cada $A \in \mathcal{F}$ un real, satisfaciendo los **Axiomas de Kolmogórov**:
> 1. $\forall A \in \mathcal{F} \ (P(A) \in [0,1])$
> 2. $P(\Omega) = 1$
> 3. Sea $(A_{n})_{n=1}^{\infty}$ tal que $A_{i}\cap A_{j} = \varnothing\quad \forall i,j \ (i\neq j)$, se tiene:
> $$
> P\left[ \bigcup_{i=1}^{\infty} A_{i} \right] = \sum_{i=1}^{\infty} P[A_{i}]
> $$

> [!Info]- **Nota!**
>
> $(i)$ **No negatividad:** Define donde está acotada $P$.
> $(ii)$ **Nomalización:** La probablidad que ocurra *algún* resultado del espacio muestral es exactamente la unidad.
> $(iii)$ $\sigma$**-aditividad:** La probablidad de la unión de todos estos eventos es exactamente igual a la suma (*serie*) de sus probabilidades individuales. El axioma $(iii)$ de $\mathcal{F}$ es el que permite esto.

> [!theorem] **Teorema.** (Propiedades de $P$)
>
> Sean $A,B \in \mathcal{F}$, 
> 1. $P[\varnothing]  = 0$
> 2. Suma para unión finita:
> Sea $(A_{n})_{n=1}^{\infty}$ tal que $A_{i} \cap A_{j} = \varnothing, \ \forall i,j \in \mathbb{N} (i\neq j)$
> $$P\left[ \bigcup_{i=1}^{n} A_{i} \right] = \sum_{i=1}^{n}P[A_{i}]$$
> 3. $\displaystyle P[A^{c}] = 1 - P[A]$
> De forma equivaliente,
> $$
> P[A] + P[A^{c}] = 1
> $$
> 4. Si $A \subseteq B$, Ent:
> 	- $P[B \setminus A] = P[B] - P[A]$
> Además, su generalización, para $A \not\subseteq B$,
> $$
> P[B \setminus A] = P[B] - P[B \cap A]
> $$
> 	- $P(A) \leq P(B)$

> [!proof]- **Proof.** $(i)$
>
> 6. **P.D.** $P[\varnothing] = 0$
> Sea $A_{1} \neq \varnothing, A_{2} \neq \varnothing\dots \implies A_{1} \cap A_{2} = \varnothing$.
> $$
> \implies P\left( \bigcup_{i=1}^{\infty} = P(\varnothing) \right) = \sum_{i=1}^{\infty} P(\varnothing)
> $$
> Entonces, voy a poder ver esa suma como un *límite*.
> $$
> \begin{align}
> P(\varnothing) &= \lim_{ n \to \infty } \sum_{i=1}^{n} P(\varnothing) \\[0.5em]
> &= \lim_{ n \to \infty } n\cdot P(\varnothing)
> \end{align}
> $$
> Además, supongamos $P(\varnothing) = \varepsilon \in (0,1]$.
> Ent.
> $$
> \begin{align}
> P(\varnothing) &= \lim_{ n \to \infty } n \cdot \varepsilon \\[0.5em]
> &= \varepsilon \lim_{ n \to \infty } n = \infty
> \end{align}
> $$
> Pero $P$ va de $[0,1]$, $!$
> $$
> \therefore P(\varnothing) = 0 \tag*{$\blacksquare$}
> $$
> 

> [!proof]- **Proof.** $(ii)$ y $(iii)$
>
> 7. **P.D.** $A_{n+1}=A_{n+2}=\dots=\varnothing$
> Por hip. tenemos $A_{1},\dots,A_{n}$ eventos ajenos, Ent.
> $$
> \begin{align}
> P\left[ \bigcup_{i=1}^{\infty} A_{i} \right] &= P\left[ \bigcup_{i=1}^{n} A_{i} \cup \varnothing \right] \\[0.5em]
> &= P\left[ \bigcup_{i=1}^{n}  A_{i} \right]  \\[0.5em]
> &= \sum_{i=1}^{\infty} P[A_{i}] \\[0.5em]
> &= \sum_{i=1}^{n} P[A_{i}] \tag*{$\blacksquare$}
> \end{align}
> $$
> 
>
> 8. **P.D.** $P[A^{c}] = 1 - P(A)$ para todo $A \in \mathcal{F}$
> Tenemos que $A \cup A^{c} = \Omega$, en particular $A ^{c} = \Omega -A$. 
> Como $A \cap A^{c} = \varnothing$ Ent.
> $$
> P[A \cup A^{c}] = P[A] + P[A^{c}]
> $$
> Dado $P[A \cup A^{c}] = P[\Omega] = 1$ y $P[A] + P[A^{c}] = 1$
> $$
> \therefore P[A^{c}] = 1 - P[A] \tag*{$\blacksquare$}
> $$

> [!proof]- **Proof.** $(iv)$
>
> Sea $A \subseteq B$,
> **P.D.** $P(B-A) = P(B) -P(A)$
> Tenemos que $A \cup B = B = (B \setminus A) \cup A$, Ent.
> $$
> \begin{align}
> P[A \cup B] &= P[(B\setminus A)\cup A] \\[0.5em]
> &= P[B \setminus A] + P[A] \\[0.5em]
> &= P[B] = P[B\setminus A] + P[A] \tag*{$\blacksquare$}
> \end{align}
> $$
> **P.D.** $P(A) \leq P(B)$
> Ahora, notese que $P[B \setminus A] \geq 0$, por lo que
> $$
> \begin{align}
> P[B] - P[A] &= P[B\setminus A] \geq0 \\[0.5em]
> \therefore P[B] &\geq P[A] \tag*{$\blacksquare$}
> \end{align}
> $$


> [!theorem] **Teorema.** (Más Propiedades)
>  
> $$
> P(A \cup B) = P(A) + P(B) - P(A \cap B)
> $$
>
> Generalización esto,
>
> $$
> P[A\cup B\cup C] = P[A] + P[B] +P[C] - P[A \cap B] -P[A\cap C] - P[B\cap C] + P[A\cap B\cap C]
> $$
>
> $$
> P[A\cup B\cup C\cup D] =P[A] + P[B] + P[C] + P[D] -P[A\cap B] -P[A\cap C] - P[A\cap D] - P[B\cap C]- P[C\cap D] + P[A\cap B\cap C] + P[A\cap B\cap D] + P[A\cap C\cap D] + P[B\cap C\cap D] -P[A\cap B\cap C\cap D]
> $$
> Ahora si, generalización para $n$ es con induccion cuyo salto ya esta hecho en $v.$
> $$
> P\left[ \bigcup_{i=1}^{n} A_{i} \right] 
> $$


> [!proof]- **Proof.**
>
> Sean $A,B \in \mathcal{F}$,
> **P.D.** $P[A \cup B] = P[A] + P[B] - P[A\cap B]$
> $$
> \begin{align}
> A\cup B &= (A\setminus B) \cup (A\cap B) \cup (B\setminus A) \\[0.5em]
> &= (A\setminus(A \cap B)) \cup (A\cap B) \cup (B \setminus (A \cap B)) \\[0.5em]
> &= P[A] - P[A \cap B] +P[A \cap B] + P[B] - P[A \cap B] \\[0.5em]
> &= P[A] + P[B] - P[A\cap B] \tag*{$\blacksquare$}
> \end{align}
> $$
> 

vimos mas propiedades


> [!theorem] **Teorema.** (Desigualdad de Boole)
>
> Para $(A_{n})_{n=1}^{\infty}$ eventos tales que $A_{i} \in \mathcal{F}$, se tiene que
> $$
> P\left[ \bigcup_{i=1}^{\infty} A_{i} \right] \leq \sum_{i=1}^{\infty} P[A_{i}]
> $$


> [!proof]- **Proof.** 
>
> Vamos a usar a los eventos:
> $$
> \begin{align}
> D_{1} &= A_{1} \\
> D_{2} &= A_{2} \setminus D_{1} \\
> D_{3} &= A_{3} \setminus (A_{2}\cup A_{1}) \\
> D_{4} &= A_{4} \setminus (A_{3}\cup A_{2}\cup A_{1}) \\
> D_{5} &= A_{5} \setminus (A_{4} \cup A_{3} \cup A_{2} \cup A_{1}) \\
> \vdots  \\
> D_{k} &= A_{k} \setminus \bigcup_{i=1}^{k-1} A_{i}
> \end{align}
> $$
> ¿Qué cumplen los $D_{i}$?
> 1. $\displaystyle \left( \bigcup_{i=1}^{\infty} D_{i} \right) = \left( \bigcup_{i=1}^{\infty} A_{i} \right)$
> 2. Son ajenos: $\displaystyle D_{i} \cap D_{j} \neq \varnothing, \quad \forall i\neq j$
> 3. $\forall i  \ (\displaystyle D_{i} \subseteq A_{i}) \implies P[D_{i}]\leq P[A_{i}]$
> 
> Con esto:
> $$
> \begin{align}
> P\left[ \bigcup_{i=1}^{\infty} A_{i} \right] &= P\left[  \bigcup_{i=1}^{\infty} D_{i} \right] \\[.5em]
> &= \sum_{i=1}^{\infty} P[D_{i}] \\[.5em]
> &\leq \sum_{i=1}^{\infty} P[A_{i}]
> \end{align}
> $$
> 
> 

**Nota.** La desigualdad de Boole funciona igual para $n$ eventos,
$$
P\left[ \bigcup_{i=1}^{n} A_{i} \right] \leq \sum_{i=1}^{n} P[A_{i}]
$$
