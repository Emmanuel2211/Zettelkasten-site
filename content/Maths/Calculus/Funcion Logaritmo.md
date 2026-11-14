---
modified: 2026-11-13T23:34:20Z
title: "Función Logaritmo"
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
> [!Quote]+ Un matemático buscando una definición
>
>  ![[Pasted image 20260819215736.png]]


> [!theorem] **Definición.** (Logaritmo)
>
> Para $x >0$, definimos:
> $$
> \log \left(x\right) = \int_{1}^{x} \frac{1}{t} \, dt  
> $$


![[Pasted image 20260903203037.png|center|411]]


> [!theorem] **Teorema.** (Propiedades de $\log$)
>
> 1. $\log \left(xy\right) = \log \left(x\right) +\log \left(y\right)$
> 2. $\log \left(\frac{x}{y}\right) = \log \left(x\right) - \log \left(y\right)$
> 3. $\log \left(x^{r}\right) = r \log \left(x\right)$
> 4. $\displaystyle \frac{d}{dx}\log(x) = \frac{1}{x}$ para $x>0$.

> [!theorem] **Definición.** (Logaritmo Base General)
>
> Sea $a > 0$ con $a\neq 1$. Para cualquier $x >0$, el logaritmo en base $a$ de $x$ se define mediante el cambio de base al logartimo natural:
> $$
> \log_{a} \left(x\right) = \frac{\log \left(x\right)}{\log \left(a\right)}
> $$

### Derivación Logarítmica

> Esta tecnica de derivación nos ahorra mucho estar aplicando álgebra de derivadas multiples veces, se trata de aplicar la función logaritmo a una ecuación y simplificarla por medio de las propiedades de $\log$, para luego derviarla.



---


pensando en sus caracteristicas sin aun su definicion....
- continuidad
- dervable
- biyectiva
- estricatemnte creciente
- $\log1 = 0$
- Su derivada decrece a medida que $x$ crece.
- log$x$ $\to \infty$ y $\log(x) \overset{x \to -\infty}{\to} -\infty$
- es una función *concava*

> [!theorem] **Proposición.**
>
> La función $f(x) = x - \log(x)$ es creciente para $x>1$: además,
> $$
> \lim_{ x \to \infty } x - \log(x) = \infty
> $$

> [!proof]- **Proof.** 
>
> $f(x) =1 - \frac{1}{x}$. $f(x)= 0 \iff 1 = \frac{1}{x} \iff x = 1$. Para $-x >1$, claramente $f'(x) > 0$. Ahora, $1- \frac{1}{x} = \frac{1}{2} \iff x = 2$.
> Por el crecimiento, $1 - \frac{1}{x} > \frac{1}{2} \iff x > 2$.
> Tomemos $c = 3$ y $x > c$. Por el Teorema del Valor Medio en $[c,x]$ existe $y$ tal que
> $$
> \frac{(x-\log x)-(c-\log c)}{x - c} = 1 - \frac{1}{y}
> $$
> $$
> \implies x - \log x = \left( 1- \frac{1}{y} \right)(x -c) + (c-\log c) ?? \tag*{$\blacksquare$}
> $$

> [!theorem] **Corolario.** 
>
> La función $f(x) = x - m\log x$ para $m \in \mathbb{N}$ es creciente en $x > m;$ además $\displaystyle \lim_{ x \to \infty } x - m \log (x) = \infty$ 

> [!proof]- **Proof.** 
>
> $f(x) = 1 - \frac{m}{x} > 0 \iff x>m$. Ahora $1 -\frac{m}{x} = \frac{1}{m+1} \iff x = m+1$.
> Así $1- \frac{m}{x} > \frac{1}{m+1} \iff x > m+1$.
> Tomemos $c = m+2$ y $x > c$, Por el T.V.M. existe $y \in [c,x]$ tal que 
> $$
> (x-m\log x) - (c-m\log c) = 1 - \frac{m}{y}
> $$
> $$
> \implies x - m \log (x) = \left( 1 - \frac{m}{y} \right)(x-c) + (c - m \log (c)) \quad f(x) \rightarrow \infty \text{ cuando } x \rightarrow \infty \tag*{$\blacksquare$}
> $$
> Reescribiendo $f(x) = x - \log (x ^{m})$

de esta forma nos damos cuenta que el logaritmo tiene un crecimiento lentisismo, mayor que cualquier potencia

> [!theorem] **Corolario 2.** 
>
> $$
> \lim_{ x \to \infty } \frac{e^{x}}{x^{m}} = \infty \quad \forall  m \in \mathbb{N}
> $$

> [!proof]- **Proof.** 
>
> $$
> \begin{align}
> \lim_{ x \to \infty } \frac{e^{x}}{x^{m}} &= \lim \frac{e^{x}}{e^{\log(x^{m})}} - \lim e ^{x - \log(x^{m})} \\
> &= e ^{ \lim x - \log(x^{m})}  = \infty \tag*{$\blacksquare$}
> \end{align}
> $$

> [!theorem] **Proposición.** 
>
> $$
> \lim_{ t \to \infty } \left(  1 + \frac{1}{t} \right)^{t} = e
> $$

> [!proof]- **Proof.** 
>
> Sea $f(t) = (1 + \frac{1}{t}) ^{ t}$ y $\log (f(t))$.
> Probando que $\underset{t \to \infty}{\log(f(t))} \to 1$. ya acabé, Trucaso!
> $$
> \begin{align}
> \log(f(t)) = \log\left( 1+\frac{1}{t} \right)^{t} &= \frac{t}{\log\left( 1+\frac{1}{t} \right)} \\
> &= \frac{\log\left( 1+\frac{1}{t} \right)}{\frac{1}{t}} \\
> &= \frac{\log\left( 1+\frac{1}{t} \right) - \log(1)}{\left( 1+\frac{1}{t} \right)- 1}
> \end{align}
> $$
> Así $\displaystyle\lim_{ n \to \infty } \log(f(t)) = \lim_{ t \to \infty }\frac{\log\left( 1+\frac{1}{t} - \log(1) \right)}{\left( 1+\frac{1}{t} \right) - 1} = \log'(1) = \frac{1}{1} = 1$
> Por eso $\displaystyle \lim_{ n \to \infty }\left( 1+\frac{1}{t} \right)^{t} = e^{\lim_{ t \to \infty }\dots}$
> Q.E.D.

ver cociente de fermat  vs cociente de newton
$$
\frac{f(b) - f(a)}{b-a}
$$

> [!theorem] **Definición.** (Logaritmo)
>
> Se define a $\log x$ como el área bajo la curva $f(x)= \frac{1}{x}, f: (0,\infty) \to (0,\infty)$.

![[Pasted image 20260818115742.png|center|574]]

> [!theorem] **Teorema.** (Propiedades de Logaritmo)
>
> 1. $\log'x = \frac{1}{x}$, $\log: (0,\infty) \to \mathbb{R}$
> 2. $\log 1 = 0$
> 3. $\log (xy) = \log (x) + \log (y)$
> 4. $\log (\frac{1}{y}) = -\log y$
> 5. $\log (\frac{x}{y}) = \log x - \log y$
> 6. Si $n \in \mathbb{Z}$ entonces $\log(x^{n}) = n\log x$
> 7. $\log$ es estrictamente creciente.

> [!proof]- **Proof.** 
>
> 1.
> 2.
> 3.
> 4.
> 5.
> 6.
> 7. Por el criterio de la primera derivada:
> $$
> \log' x = \frac{1}{x} >0 \implies \log \text{ es creciente}
> $$

> [!theorem] **Teorema 1.1** (lolazo)
>
> $$
> \lim_{ x \to \infty } \log x = \infty
> $$

> [!proof]- **Proof.**
>
> Dado que $\frac{1}{2} < \log 2$, observamos que $1< 2 \log 2 \implies 1 < \log 4$. Así dado $n \in \mathbb{N}, n < n \log 4 = \log (4^{n}$
> Sea $M > 0$, por P.A. existe $n \in \mathbb{N}$ tal que $n > M$. Además $\forall n \in \mathbb{N}, 4^{n} > n$. Definamos $N = 4^{n}$. Si $x > N \implies x > 4^{n}$. Dado que $\log$ es creciente $\log x > \log (4^{n}) = n \log 4 > n > M$  
> $$
> \therefore \lim_{ x \to \infty } \log x = \infty \tag*{$\blacksquare$}
> $$



> [!theorem] **Teorema 1.2** 
>
> $$
> \lim_{  x \to 0^+ } \log x = -\infty
> $$

> [!proof]- **Proof.** 
>
> Si $y = \frac{1}{x}$ entonces $x \to 0^{+} \implies y \to \infty$. Así
> $$
> \lim_{ x \to 0^{+} } \log x = \lim_{  y  \to \infty }  \log \left( \frac{1}{y} \right) = -\lim_{  y \to \infty } \log y = -\infty
> $$
> Usando el Teorema 1.1


> [!theorem] **Corolario.** 
>
> $$
> \lim_{ x \to \infty } \frac{x}{\log(x)} = \infty
> $$

Aproximacion del valor de $e$:

> [!proof]- **Proof.** 
>
> Sea $x = e^{x}$. Así $\log(x) = y$
> $$
> \implies \lim_{ x \to \infty } \frac{x}{\log(x)} = \lim_{ y \to \infty } \frac{e^{y}}{y} =\infty
> $$
> Si sabemos que $\frac{1}{2}< \log(2 \lor e?)$
> $$
> \implies 1 < \log(4) \implies e < 4
> $$
> Recordando que $\displaystyle \lim_{ t \to \infty }\left( 1+\frac{1}{t} \right)^{t} = e$
> Claramente,
> $$
> \lim_{ n \to \infty } \left( 1+\frac{1}{n} \right)^{n} = e, \quad n \in \mathbb{N}
> $$
> Estudiaremos $\left\{  \left( 1+\frac{1}{n} \right)^{n}  \right\}_{n\in \mathbb{N}}$ para aproximar el número $e$.
> Por *Binomio de Newton*:
> $$
> \left( 1+\frac{1}{n} \right)^{n} = \sum_{k=0}^{n} \binom{a}{t}1^{n-k}\binom{1}{n}^{k}
> $$
> Recordando $\dbinom{n}{k} = \dfrac{n!}{k!(n-k)!}$
> Entonces:
> $$
> \begin{align}
> \left( 1+ \frac{1}{n} \right) ^{ n} = \binom{a}{0}2^{n} \binom{1}{n}^{0} = 1 \cdot 1 \cdot 1 \\
> \dots wtf
> \end{align}
> $$
> "Sabemos" que $\log\left( 1+\frac{1}{n} \right) < \frac{1}{n}$. Lo que si probamos fue que $x-\log(x)$ es creciente para $x>1$ pues
> $$
> (x-\log(x))' = 1 - \frac{1}{x} > 0 \iff x > 1
> $$
> Además, $x-\log(x)$. Así $\forall x > 1, \ (x - \log(x)> 0 \iff x > \log(x))$
> /?????
> Fignese que la funcíon $f(x) = x - \log(x) -1$ cumple que $f'(x) = 1-\frac{1}{x}>0 \iff x > 1$  y $f(1)=0$. Por esta razón
> $$
> x-\log(x)-1>0 \quad \forall x > 1
> $$
> lo que implica que
> $$
> \begin{align}
> \forall n \in \mathbb{N}, 1+\frac{1}{n}-\log\left( 1+\frac{1}{n} \right)-1 > 0 \\
> \implies \log\left( 1+\frac{1}{n} \right)< \frac{1}{n}
> \end{align}
> $$
> nooooooooo ya no se

Por el Teorema de Taylor, si $f$ es una función $k$-diferenciable  alrededor de $x-x_{0}$, entonces
$$
f(x)= f(x_{0}) + f'(x_{0})(x-x_{0}) + \dots + \frac{f^{k}(x_{0})(x-x_{0})^{k}}{k!} + c
$$
siendo $c$ el residio.

Dado que $f(x)=e^{x}$ es $C^{\infty}$ (es infinitamente diferenciable), tomando $x_{0} = 0$
$$
\begin{align}
e^{x} &= e^{0} + e^{0}x + \frac{e^{0}x^{2}}{2!}+\frac{e^{0}x^{3}}{3!}+\dots \\
&= 1 + x + \frac{x^{2}}{2!} + \frac{x^{3}}{3!} +\dots + \frac{x^{n}}{n!} + c
\end{align}
$$
tomando $x =1$
$$
e = 1 + 1 + \frac{1}{2!} + \frac{1}{3!} + \dots+\frac{1}{n!} + c
$$

