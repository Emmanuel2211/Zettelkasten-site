---
modified: 2026-07-08T17:39:20Z
title: "Suma Inferior y Superior"
publish: true
type: zettel
date: "2026-07-02"
aliases:
tags: 
 - calculus
cssclasses: 
 - romana
---
> [!theorem] **Def.** (Suma Inferior y Superior)
>
> Supongamos que $f$ está acotada en $[a,b]$ y que $P = \{ t_{0},\dots, t_{n} \}$ es una partición de $[a,b]$. Sea
> $$
> \begin{align}
> m_{i} &= \text{inf}\{ f(x) : t_{i-1}\leq x\leq t_{i} \}, \\[1em]
> M_{i} &= \text{sup} \{ f(x) : t_{i-1} \leq x \leq t_{i} \}.
> \end{align}
> $$
> La **suma inferior** de $f$ respecto a $P$, representada mediante $L(f,P)$ se define como
> $$
> L(f,P) = \sum_{i=1}^n m_{i}(t_{i}-t_{i-1}).
> $$
> La **suma superior** de $f$ respecto a $P$, representada mediante $U(f,P)$, se define como
> $$
> U(f,P) = \sum_{i=1}^n M_{i}(t_{i}-t_{i-1}).
> $$

> [!observation]- **Observación**
>
> A pesar de la motivación geométrica, estas sumas se han definido de manera precisa, sin invocar ningún concepto de "área".
> 
> Además, como comentario, el requisito que $f$ esté acotada en $[a,b]$ es esencial para que los $m_{i}$ y $M_{i}$ estén bien definidos. También, es necesario definir a $m_{i}$ y $M_{i}$ como ínfimos y supremos y no como máximos y mínimos, ya que no se supone que $f$ sea continua.

- Un resultado evidente es que $L(f,P) \leq U(f,P)$, ya que para cada $i$ se verifica $m_{i}(t_{i}-t_{i-1})\leq M_{i}(t_{i}-t_{i-1})$.

Ahora, recordamos que queremos llegar a $L(f,P_{1})\leq L(f,P_{2})$, dadas $P_{1},P_{2}$. Es útil el siguiente lema referente al comportamiento de $L(f,P)$ y $U(f,P)$, a medida que van introduciéndose más puntos en la partición.

![[Pasted image 20260702093231.png|center]]

En la figura, $Q$ representa la partición con *puntos blancos y negros*. Es claro que contiene a $P$, *solo los puntos negros*. Ésto señala que los rectángulos de $Q$ aproximan mejor que la partición $P$.

> [!theorem]- **Lema.** 
>
> Si $Q$ contiene a $P$, entonces
> $$
> \begin{align}
> L(f,P) &\leq L(f,Q) \\
> U(f,P) &\geq U(f,Q)
> \end{align} 
> $$

> [!proof]+ **Proof.** 
>
> Consideremos primero el caso especial (figura) en donde $Q$ contenga solamente un punto más que $P$:
> 
> ![[Pasted image 20260702093950.png|center]]
> $$
> \begin{align}
> P &= \{ t_{0},\dots,t_{n} \}, \\
> Q &= \{ t_{0}, \dots, t_{k-1}, u, t_{k}, \dots,t_{n} \} 
> \end{align}
> $$
> donde
> $$
> a = t_{0} < t_{1} < \dots < t_{k-1} < u < t_{k} < \dots < t_{n} = b.
> $$
> Sea
> $$
> \begin{align}
> m' &= \inf \{ f(x) : t_{k-1}\leq x \leq u \}, \\[0.4em]
> m'' &= \inf \{ f(x): u \leq x \leq t_{k} \}.
> \end{align}
> $$
> Entonces
> $$
> \begin{align}
> L(f,P) &= \sum_{i=1}^n m_{i}(t_{i} - t_{i-1}), \\
> L(f, Q) &= \sum_{i=1}^{k-1} m_{i}(t_{i}-t_{i-1}) + m'(u-t_{k-1}) + m''(t_{k}-u) + \sum_{i=k+1}^n m_{i}(t_{i}-t_{i-1}).
> \end{align}
> $$
> Para demostrar que $L(f,P)\leq L(f,Q)$ es suficiente, por lo tanto, comprobar que
> $$
> m_{k}(t_{k}-t_{k-1})\leq m'(u-t_{k-1}) + m''(t_{k}-u)
> $$
> En efecto, el conjunto $\{ f(x): t_{k-1}\leq x \leq t_{k} \}$ contiene a todos los número de $\{ f(x): t_{k-1}\leq x \leq u \}$ y posiblemente a otros más pequeños, de manera que la cota inferior máxima del primer conjunto ha de ser *menor o igual* que la cota inferior máxima del segundo; por lo tanto
> $$
> m_{k} \leq m'
> $$
> Análogamente,
> $$
> m_{k}\leq m''
> $$
> Por lo tanto,
> $$
> m_{k}(t_{k}-t_{k-1}) = m_{k}(u-t_{k-1}) + m_{k}(t_{k}-u) \leq m'(u-t_{k-1}) + m''(t_{k}-u).
> $$
> Esto demuestra en particular que $L(f,P)\leq L(f,Q)$ en este caso particular. La demostración de que $U(f,P) \geq L(f,Q)$ es similar, un ejercicio muy útil.
> Ahora puede deducirse fácilmente el caso general. La partición $Q$ puede obtenerse a partir de $P$ añadiendo un punto cada vez; en otras palabras, existe una sucesión de particiones
> $$
> P = P_{1}, P_{2},\dots, P_{\alpha} = Q
> $$
> tales que $P_{j+1}$ contiene exactamente un punto más que $P_{j}$. Luego
> $$
> L(f,P) = L(f, P_{1}) \leq L(f,P_{2}) \leq \dots \leq L(f,P_{\alpha}) = L(f,Q),
> $$
> y
> $$
> U(f,P) = U(f,P_{1}) \geq U(f,P_{2})\geq \dots \geq U(f,P_{\alpha}) = U(f,Q). \tag*{$\blacksquare$}
> $$

> [!theorem] **Teorema 1.** 
>
> Sean $P_{1}$ y $P_{2}$ particiones de $[a,b]$, y sea $f$ una función acotada en $[a,b]$.
> Entonces
> $$
> L(f,P_{1}) \leq U(f,P_{2})
> $$

> [!proof]- **Proof.** 
>
> Existe una partición $P$ que contiene tanto a $P_{1}$ como a $P_{2}$ (considérese la partición $P$ formada por $P_{1} \cup P_{2}$). Según el lema anterior, 
> $$
> L(f,P_{1}) \leq L(f,P) \leq U(f,P) \leq U(f,P_{2}). \tag*{$\blacksquare$}
> $$

De este teorema, dado que cualquier suma $U(f,P')$ es una cota superior del *conjunto de todas las sumas inferiores* $L(f,P)$, se deduce:
$$
\sup \{ L(f,P) : P \text{ una partición de } [a,b] \} \leq U(f,P'),
$$
para toda partición $P'$. Esto a su vez significa que $\sup \{ L(f,P) \}$ es una cota inferior del *conjunto de todas las sumas superiores* de $f$. Por consiguiente,
$$
\sup \{ L(f,P) \} \leq \inf \{ U(f,P) \}.
$$
Y es evidente que para *todas* las particiones $P'$
$$
\begin{align}
L(f,P') \leq \sup \{ L(f,P) \} \leq U(f,P'), \\
L(f,P') \leq \inf \{ U(f,P) \} \leq U(f,P').
\end{align}
$$
