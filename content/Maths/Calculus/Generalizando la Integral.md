---
modified: 2026-11-13T23:34:20Z
title: "Generalizando la Integral"
publish: true
type: zettel
date: 2026-08-31
status: seed
aliases:
tags:
  - calculus
cssclasses:
  - romana
---
El objetivo ahora es construir una integral para funciones que no sean **necesariamente continuas**. Generalizamos para funciones acotadas.

Sea $f:[a,b] \to \mathbb{R}^{+}$ **acotada** y $P_{[a,b]} = \{ x_{0} = a,x_{1},\dots,x_{n = b} \}$.
Dado que en una funcion acotada no sabemos de la existencia de mínimos y másmios **porquee??**, introducimos nuestras nuevas definiciones con la generalización de $\min$ y $\max$, $\sup$ e $\inf$.
- [ ] TODO: porque?

> [!theorem] **Definición** (Suma Inferior y Superior para funciones acotadas)
>
> $$
> \begin{align}
> L(f,P) &= \sum_{k=0}^{n-1} \underset{[x_{k},x_{k+1}]}{\inf  \{  f \}} \cdot(x_{k+1}- x_{k}) \\
> U(f,P) &= \sum_{k=0}^{n-1} \underset{[x_{k}, x_{k+1}]}{\sup \{ f \}} (x_{k+1}-x_{k})
> \end{align}
> $$

Añadimos $f$ como parámetro por convención, la notación $L(f,P)$ es equivalente $L(P)$, utilizada en muchos libros.

> [!observation]+ **Observación.**
>
> Si $P'$ es refinamiento de $P$ se cumple:
> $$
> \begin{align}
> L(P,f)  \leq L(P', f) \\
> U(P,f) \geq U(P',f)
> \end{align}
> $$
> De esta forma, se extienden nuestras propiedades ya demostradas con las nuevas definiciones.


> [!observation]+ **Observación.**
>
> De igual forma, para $P_{1}$ y $P_{2}$ particiones
> $$
> L(P_{1},f) \leq U(P_{2},f)
> $$
> Lo que implica 
> $$
> \begin{align}
> \mathcal{L} = \{ L \mid L(P,f) \} \ \text{ está acotado por arriba} \\[0.5em]
> \mathcal{U} = \{ U \mid U(P,f) \} \ \text{ está actado por abajo}
> \end{align}
> $$

> [!theorem] **Corolario.** 
>
> Existen $\sup\{ \mathcal{L} \}$ e $\inf \{ \mathcal{U} \}$

> [!theorem] **Definición.** (Criterio de Integración funciones acotadas)
>
> Decimos que $f: [a,b] \to \mathbb{R}^{+}$ acotada, es integrable si
> $$
> \underline{I} = \sup \{ L \} = \inf \{ U \} = \overline{I}
> $$
> Donde $\underline{I}$ es la **integral inferior** y $\underline{I}$ es la **integral superior**.

> [!theorem] **Teorema.** (Criterio de Integración PRO)
>
> Sea $f: [a,b] \to \mathbb{R}^{+}$ función acotadad, $f$ es integrable en $[a,b]$ si y sólo si, para toda $\varepsilon >0$ existe una partición $P$ tal que $U(P,f) - L(P,f) < \varepsilon$.

> [!proof]- **Proof.** 
>
> $(\implies)$
> Supongamos que $f$ es integrable, es decir, tenemos que
> $$
> \underline{I} = \overline{I}
> $$
> Sea $\varepsilon > 0$. Dado que $\underline{I} = \sup$ y $\overline{I} = \inf$, existen particiones $P_{1}, P_{2}$ tales que
> $$
> \underline{I} - \frac{\varepsilon}{1} < L(P_{1}) < \underline{I} \quad \text{ y } \quad \overline{I} < U(P_{2}) < \overline{I}+\frac{\varepsilon}{2}
> $$
> Tomamos $P = P_{1} \cup P_{2}$. Con esto:
> $$
> \underline{I} - \frac{\varepsilon}{2} < L(P_{1}) \leq L(P) < \underline{I} = \overline{I}< U(P) \leq U(P_{2}) < \overline{I} + \frac{\varepsilon}{2}
> $$
> De aquí
> $$
> U(P) - L(P)< \varepsilon
> $$
> 
> $(\impliedby)$
> Supongamos que $\forall \varepsilon >0$ existe $P$ partición tal que
> $$
> U(P) - L(P) < \varepsilon
> $$
> **PD.** $\underline{I} = \overline{I}$
> Sea $\varepsilon >0$ y  $P$ partición tal que $U(P) - L (P) < \varepsilon$.
> Observamos que
> $$
> \underline{I} \geq L(P) \quad \text{ y } \quad \overline{I} \leq U(P)
> $$
> Entonces,
> $$
> \overline{I} - \underline{I} \leq U(P) - \underline{I} \leq U(P) - L(P) < \varepsilon \quad \forall \varepsilon > 0
> $$
> En conclusión,
> $$
> \underline{I} = \overline{I} \tag*{$\blacksquare$}
> $$


> [!theorem] **Corolario.** 
>
> Si $f: [a,b] \to \mathbb{R}^{+}$ es continua, entonces es integrable.

> [!proof]- **Proof.** 
>
> Sea $f$ continuida, lo que implica Lema 3 y 4, lo que implica nuetro Teorema anterior. Q.E.D.

> [!theorem] **Teorema.** ()
>
> Sea $f: [a,b] \to \mathbb{R}^{+}$ continua excepto en un punto $c \in (a,b)$. Entonces, $f$ es integrable en $[a,b]$.

> [!proof]- **Proof.** 
>
> La idea de la demostración es aproximar por derecha e izquierda nuestro punto $c$.
> Sean $a<y <c$ y $b>z>c$. Sabemos que $f$ es continua en en $[a,y]$ y $[z,b]$, observamos que estos intervalos son acotados y cerrado, i.e **compacto**. 
> Por lo que es integrable en cada subintervalo:
> Sea $\varepsilon >0$, en $[a,y]$ existe $P_{1}$ partición tal que
> $$
> U(P) - L(P) < \frac{\varepsilon}{3}
> $$
> En $[z,b]$ existe $P_{2}$ partición tal que
> $$
> U(P_{2}) - L(P_{2}) < \frac{\varepsilon}{3}
> $$
> Observamos que $P = P_{1}\cup P_{2}$ es parición de $[a,b]$. Además, se tiene que:
> $$
> \begin{align}
> U(P) &= U(P_{1}) + U(P_{2}) + (z-y) \cdot \underset{[y,z]}{\sup }\{ f(x) \}  \\[0.5em]
> L(P) &= L(P_{1}) + L(P_{2}) + (z-y) \cdot \underset{[y,z]}{\inf  }\{ f(x) \}
> \end{align}
> $$
> De esta manera:
> $$
> \begin{align}
> U(P) - L(P) &= U(P_{1}) - L(P_{2}) + U(P_{2}) - L(P_{2}) + (z-y)\cdot [\sup \{ f \}-\inf \{ f \}] \\[0.5em]
> &\leq \frac{\varepsilon}{3} + \frac{\varepsilon}{3} + (z-y)[\sup \{ f \}-\inf \{ f \}] < \varepsilon
> \end{align}
> $$
> Si tomamos $z$ y $y$ tales que
> $$
> z-y < \frac{\varepsilon}{3[\underset{[a,b]}{\sup } \{ f \}- \underset{[a,b]}{\inf }\{ f \} ]}
> $$
> Como el cociente de $\displaystyle  \frac{\underset{[y,z]}{\sup \left\{f\right\} }- \underset{[y,z]}{\inf \left\{f\right\} }}{\underset{[a,b]}{\sup \left\{f\right\} } - \underset{[a,b]}{\inf \left\{f\right\} }} \leq  1$, se descarta y tenemos $\displaystyle  \frac{\varepsilon}{3}$. Porque se descarta?


> [!theorem] **Corolario.**
>
> Sea $f: [a,b] \to \mathbb{R}^{+}$ acotada y continua en $[a,b]$ excepto en $\{ c_{1,},c_{2},c_{3},\dots,c_{n} \}$. Entonces, $f$ es integrable.

> Sea $f: [a,b] \to \mathbb{R}^{+}$ acotada. Dado que $\underset{[a,b]}{\sup \left\{f\right\}}$ y $\underset{[a,b]}{\inf \left\{f\right\} }$ existen, se define a una suma de Reimann como
> $$
> S(P,f) = \sum_{k=0}^{n-1} f(z_{k})(x_{k+1}-x_{k})
> $$
> donde $P = \{ x_{0} = a, \dots, x_{n} = b \}$ y $z_{i} \in  [x_{i},x_{i+1}]$.

> [!theorem] **Teorema.** (Criterio de Integrabilidad 3)
>
> Sea $f:[a,b]\to\mathbb{R}$; $f$ es integrable si y sólo si existe un número $I$ tal que $\forall \{ P_{n} \}_{n \in \mathbb{N}}$ (sucesión) con $P_{n}$ partición tal que
> $$
> \lim_{n \to \infty} \Delta P_{n} = 0
> $$
> Se cumple que
> $$
> \lim_{n \to \infty} S(P_{n},f) = I
> $$


> [!Info]- **Nota!**
>
> Recordemos el tipico ejemplo de $f(x) = x^{2}$, $f: [0,1]\to \mathbb{R}$. 
> Sea $n \in  \mathbb{N}$ y $P_{n} = \{ 0, \frac{1}{n}, \frac{2}{n},\dots, \frac{n-1}{n}, 1 \}$
> Esta es una sucesión particular de particiones tales que $\displaystyle \lim_{n \to \infty} \Delta P_{n} = 0$. Anteriormente llegamos a que:
> $$
> \int_{1}^{0} x^{2} \, dx  = \dots = \frac{1}{3}
> $$


> [!example]- Ejemplo. $f(x) = e^{x}$
>
> Sea $f(x) = e^{x}$  para $x \in  [a,b]$. Calcula $\displaystyle \int_{a}^{b} e^{x} \, dx$ con sumas de Reimann.
> Sea $P_{n} = \left\{a, \frac{b-a}{n}+ a, a+ \frac{2(b-a)}{n},\dots, b  \right\}$, observamos que
> $$
> \Delta P_{n} = \frac{b-a}{n} \overset{n\to \infty}{\longrightarrow} 0
> $$
> Particularmente, la suma sup./inf. es suma de Reimann.
> $$
> \begin{align}
> L(P_{n},f) &= \sum_{k=0}^{n-1} \underset{[x_{k}, x_{k+1}]}{\inf \left\{f\right\} } (x_{k+1}- x_{k}) \\[0.5em]
>  &=  \sum_{k=0}^{n-1} f(x_{k})\left(\frac{b-a}{n}  \right) \\[0.5em]
>   &= \left(\frac{b-a}{n}  \right)\left[e^{a} + e^{\frac{b-a}{n}+a} + e^{a + \frac{2(b-a)}{n}} + \dots + e^{a + \frac{(n-1)(b - a)}{n}}  \right] \\[0.5em]
>  &= \left(\frac{b-a}{n}  \right) e^{a}\left[1+e^{\frac{b-a}{n}}+ e ^{\frac{2(b-a)}{n}} + \dots + e^{\frac{(n-1)(b-a)}{n}}  \right] \\[0.5em]
>   &= (\frac{b-a}{n})e^{a}\left[\left(e^{\frac{(b-a)}{n}}\right)^{0} + \left(e^{\frac{(b-a)}{n}}  \right)^{1} + \left(e^{\frac{(b-a)}{n}}  \right)^{2} + \dots  \right] \\[0.5em]
>    &= \frac{(b-a)}{n}e^{a} \left[\frac{1-e ^{\frac{n(b-a)}{n}}}{1-e^{\frac{b-a}{n}}}  \right]  = e^{a} \frac{(b-a)}{n} \left[ \frac{1-e^{b-a}}{1- e ^{\frac{b-a}{n}}}  \right] \\[0.5em]
>  &\implies  \frac{(b-a)}{n}\left[\frac{e^{a}-e^{b}}{1 - e^{\frac{b-a}{n}}}  \right] \\[0.5em]
>   &= (\frac{b-a}{n}) \left[ \frac{e^{b} - e^{a}}{e ^{\frac{b-a}{n}}- 1}  \right] \\[0.5em]
>    &= \frac{e^{b} - e^{a}}{\frac{e^{\frac{b-a}{n}} - e^{0}}{\frac{b-a}{n}-0}} \overset{n \to \infty}{\longrightarrow} \frac{e^{b}- e^{a}}{\frac{d}{dx}e^{0}} = \frac{e^{b}-e^{a}}{1} \tag*{$\square$}
> \end{align}
> $$


> [!theorem] **Proposición.**
>
> Sea $f,g: [a,b]\to \mathbb{R}^{+}$ integrables. Entonces
> $$
> \int_{a}^{b} (f+g)(x) \, dx  = \int_{a}^{b} f(x) \, dx + \int_{a}^{b} g(x) \, dx 
> $$

> [!proof]- **Proof.**

Sea $f:[a,b]\to \mathbb{R}^{-}$ acotada. ¿Cúal es su integral?
> [!theorem] **Proposición 2.** 
>
> $$
> \int_{a}^{b} -f(x) \, dx  = - \int_{a}^{b} f(x) \, dx 
> $$


> [!proof]- **Proof.**
>
> Sea $P$ partición de $[a,b]$.
> $$
> \begin{align}
>   L(P,f) &= \sum_{k=0}^{n-1} \underset{[x_{k},x_{k+1}]}{\inf \left\{f\right\} } (x_{k+1}-x_{k}) \\[0.5em]
>    &= \sum_{k=0}^{n -1} - \underset{[x_{k},x_{k+1}]}{\sup \left\{-f\right\} }(x_{k+1}-x_{k}) \\[0.5em]
>     &= -\sum_{k=0}^{n-1} \underset{[x_{k},x_{k+1}]}{\sup \left\{-f\right\} } (x_{k+1}-x_{k}) = -U(P,-f)
> \end{align}
> $$
> En consecuencia,
> $$
>  \sup \left\{L(P,f)\right\} = \sup \left\{-U(P,-f)\right\} = - \inf \left\{U(P,-f)\right\} 
> $$
> Si $-f$ es integrable, $-f: [a,b] \to \mathbb{R}^{+}$  entonces,
> $$
>   -\sup \left\{L(P,-f)\right\}  = -\inf \left\{U(P,-f)\right\} = \sup \left\{L(P,f)\right\} 
> $$
> 
> Lo que implica,
> $$
> -\int_{a}^{b} -f(x) \, dx  = \int_{a}^{b} f(x) \, dx \implies  \int_{a}^{b} -f(x) \, dx  = -\int_{a}^{b} f(x) \, dx \tag*{$\blacksquare$}
> $$

> [!theorem] **Proposición 2.**
>
> Si $f$ es integrable en $[a,b]$ entonces $f$ es integrable en todo $[c,d] \subseteq [a,b]$.

> [!proof]- **Proof.**
>
> Como $f$ es integrable en $[a,b]$. Dado $\varepsilon >0$ existe una $P$ partición de $[a,b]$ tal que $U(P,f)-L(P,f) < \varepsilon$.
>
> Defino $P' = P \cap [c,d] \cup \{ c,d \}$ la cual es partición de $[c,d]$.
> A su vez, $\hat{P} = P \cup \{ c,d \}$ es refinamiento de $P$.
> De aquí,
> $$
> U(P',\left. f \right|_{[c,d]}) - L(P', \left. f \right|_{[c,d]}) \leq  U(\hat{P},f) - L(\hat{P},f) < \varepsilon
> $$
> porque $\hat{P}$ es refinamiento de $P$.
> $$
> \therefore f \text{ es integrable en }[c,d] \tag*{$\blacksquare$}
> $$


> [!theorem] **Proposición**
>
> $$
> \int_{a}^{b} \lambda f(x) \, dx  = \lambda \int_{a}^{b} f(x) \, dx 
> $$

> [!proof]- **Proof.**
>
> Sea $\{ P_{n} \}$ sucesión de particiones tales que $\Delta  P_{n} \overset{n \to  \infty}{\longrightarrow} 0$.
> Sea $\displaystyle S = S(P_{n}, \lambda f) = \sum_{k=0}^{n-1} (\lambda f)(z_{k})(x_{k+1}-x_{k})$, donde $z_{k} \in  [x_{k}, x_{k+1}]$.
> esto es igual a
> $$
> \begin{align}
>    &= \sum_{k=0}^{n-1} \lambda f (z_{k})(x_{k+1} - x_{k})\\[0.5em]
>     &= \lambda  \sum_{k=0}^{n-1} f(z_{k})(x_{k+1} - x_{k}) \\[0.5em]
>      &= \lambda S(P_{n}, f)
> \end{align}
> $$
> De esta forma,
> $$
> \lim_{n \to \infty} S(P_{n}, \lambda f) = \int_{a}^{b} (\lambda f)(x) \, dx = \lambda \int_{a}^{b} f(x) \, dx 
> $$
> y tenemos que 
> $$
> \displaystyle \lambda S(P_{n},f) \overset{n \to  \infty}{\longrightarrow} \lambda  \int_{a}^{b} f(x) \, dx
> $$
>

Al ser $\displaystyle  \int_{a}^{b} () \, dx$ aditiva y homogénea, se dice que $\displaystyle  \int_{a}^{b} () \, dx$ **operador lineal**.



> [!theorem] **Teorema.** (Propiedad Acumulativa)
>
> Sean $f: [a,b] \to  \mathbb{R}$ acotada y $c \in (a,b)$. $f$ es integrable en $[a,b]$ si y sólo si $f$ es integrable en $[a,c]$ y $[c,b]$. En cualquier caso:
> $$
> \int_{a}^{b} f(x) \, dx = \int_{a}^{c} f(x) \, dx + \int_{c}^{b} f(x) \, dx 
> $$

> [!proof]- **Proof.**
>
> $( \implies )$ Por una proposición anterior, se cumple.
> $(\impliedby )$ Supongamos que $f$ es integrable en $[a,c]$ y $[c,b]$. Existen dos particiones $P_{1}$ y $P_{2}$ de $[a,c]$ y $[c,b]$ respectivamente tales que
> $$
> \begin{align}
> U(f_{1}, \left. f \right|_{[a,c]}) - L(P_{1}, \left. f \right|_{[a,c]}) &< \frac{\varepsilon}{2} \\[0.5em]
> U(P_{2}, \left. f \right|_{[c,b]}) - L(P_{2}, \left. f \right|_{[c,b]})&< \frac{\varepsilon}{2}
> \end{align}
> $$
> Si $P:= P_{1} \cup P_{2}$, tenemos que $P$ es partición de $[a,b]$. Además
> $$
> \begin{align}
>   U(P,f) &= U(P_{1}) + U(P_{2})\\[0.5em]
>   L(P,f) &= L(P_{1}) + L(P_{2})
> \end{align}
> $$
> Por esto, $U(P,f) - L(P,f ) < \varepsilon \implies f$ es integrable en $[a,b]$.
>
> - Ahora solo falta probar que se cumple dicha igualdad.
>
> Para esto, usaremos el otro criterio de integrabilidad (*sucesión de particiones*).
> Sean $\{ P^{1}_{n} \}$ y $\{ P^{2}_{n} \}$ sucesiones de particiones de $[a,c]$ y $[c,b]$ respectivamente tales que $\displaystyle \Delta P_{n}^{1}, \Delta P_{n}^{2} \overset{n \to \infty}{\longrightarrow} 0$.
> Definimos $\{ P_{n} \} = \{ P_{n}^{1} \cup P_{n}^{2} \}$ la cual es una sucesión de particiones de $[a,b]$ y cumple que $\displaystyle \Delta P_{i} \overset{n \to  \infty}{\longrightarrow} 0$.
> Ahora consideremos:
> $$
> \begin{align}
>   S(P^{1}_{n}, \left. f \right|_{[a,c]}) &= \sum_{k=0}^{n-1} f(z_{k})(x_{z+1}-x_{k})\\[0.5em]
>   S(P^{2}_{n}, \left. f \right|_{[c,b]}) &= \sum_{k=0}^{m-1} f(w_{k})(y_{k+1}-y_{k})
> \end{align}
> $$
> Sabiendo que $P_{n}^{1} = \{ x_{0} = a,\dots, y_{n} = c \}$ y $P_{n}^{2} = \{ y_{0} = c, \dots y _{m} = b \}$.
> para $z_{k} \in  [x_{k},x_{k+1}]$ y $w_{k} \in  [y_{k},y_{k+1}]$, observamos que $S := S(P_{n}^{1}, \left. f \right|_{[a,c]}) + S(P_{n}^{2}, \left. f \right|_{[c,b]})$, entonces $S$ es una suma Reimann para $f:[a,b]\to  \mathbb{R}$ y dada la partción $P_{n}$. Si $f$ es integrable, 
> $$
> \displaystyle S \overset{n \to  \infty}{\longrightarrow} \int_{a}^{b} f(x) \, dx
> $$
> Como
> $$
> f\text{ integrable } \implies  \left. f \right|_{[a,c]} \text{ y } \left. f \right|_{[c,b]} \text{ integrables }
> $$
> Se tiene, por tanto
> $$
> \begin{align}
>   S(P_{n}^{1}, \left. f \right|_{[a,c]}) \overset{ n \to \infty}{\longrightarrow}  \int_{a}^{c} f(x) \, dx \\[0.5em]
>   S(P_{n}^{2}, \left. f \right|_{[c,b]}) \overset{n \to  \infty}{\longrightarrow} \int_{c}^{b} f(x) \, dx 
> \end{align}
> $$
> De esta manera, como $S = S(P^{1}_{n},) + S(P^{2}_{n},)$, se concluye que
> $$
> \int_{a}^{b} f(x) \, dx = \int_{a}^{c} f(x) \, dx + \int_{c}^{b} f(x) \, dx 
> $$


> [!theorem] **Corolario.**
>
> Dados $f: [a,b] \to  \mathbb{R}$ acotada y $P = \{ c_{0} = a_{1},c_{1},c_{2},\dots, c_{n} = b \}$ partición de $[a,b]$ se tiene que $f$ es integrable en $[a,b]$ si y sólo si $f$ es integrable en $[c_{i}, c_{i+1}] \ \forall i \in  \{ 0,\dots,n-1 \}$.

> [!proof]- **Proof.**
>
> $$
> \int_{a}^{b} f(x) \, dx = \sum_{i=0}^{n-1} \int_{c_{i}}^{c_{i+1}} f(x) \, dx 
> $$



> [!theorem] **Teorema.**
>
> Sean $f,g$ funciones integrables:
> 1. Si $f \geq  0$ entonces, $\displaystyle \int_{a}^{b} f(x) \, dx \geq  0$.
> 2. Si $f \geq  g$ entonces, $\displaystyle \int_{a}^{b} f(x) \, dx \geq \int_{a}^{b} g(x) \, dx$
> 3. $\displaystyle m(b-a) \leq  \int_{a}^{b} f(x) \, dx \leq  M(b-a)$ donde $m$ y $M$ son cotas inferior y superior de $f$ respectivamente.

> [!proof]- **Proof.** 
>
> 1. Cualqueir suma superior de $f$ es positiva, particualtmente, $U(\{ a,b \},f) = \underset{[a,b]}{\sup \left\{f\right\} }(b-a)\geq  0$ pues $f\geq 0 \implies \underset{[a,b]}{\sup \left\{f\right\} }\geq 0$. De esta manera, $\inf \left\{U \mid  U \text{ es suma superior }\right\} = \overline{I} = I \geq 0$ para $\displaystyle  I = \int_{a}^{b} f(x) \, dx$.
> 2. Si $f\geq g$, $f - g \geq  0$ y por $(i)$, $\displaystyle \int_{a}^{b} (f-g)(x) \, dx \geq  0$. Al ser $\displaystyle \int_{a}^{b} () \, dx$ lineal.
> $$
> \begin{align}
>   \int_{a}^{b} (f-g)(x) \, dx  &=  \int_{a}^{b} f(x) \, dx  - \int_{a}^{b} g(x) \,  dx \geq  0 \\[0.5em]
>    &\implies \int_{a}^{b} f(x) \, dx \geq \int_{a}^{b} g(x) \, dx  
> \end{align}
> $$
> 3. Sabemos que
> $$
> \underset{[a,b]}{\inf \left\{f\right\} } = m \leq  f(x) \quad \forall x \in  [a,b]
> $$ 
> Por $(ii)$, $\displaystyle \int_{a}^{b} m \, dx  \leq  \int_{a}^{b} f(x) \, dx$.
> Además,
> $$
> \begin{align}
>   \int_{a}^{b} m \, dx  &=  m \int_{a}^{b} 1 \, dx  = \left. m(x) \right|_{b}^{a} = m(b-a)
> \end{align}
> $$
> Por TFC 2, esto implica $\displaystyle m(b-a) = \int_{a}^{b} f(x) \, dx$.
> Sabemos que
> $$
> f(x) \leq  \underset{[a,b]}{\sup \left\{f\right\} } =: M
> $$
> Por $(ii)$
> $$
> \int_{a}^{b} f(x) \, dx \leq  \int_{a}^{b} M \, dx  = M(b-a) \tag*{$\blacksquare$}
> $$

