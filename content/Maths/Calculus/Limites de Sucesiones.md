---
modified: 2026-11-11T04:09:56Z
title: "Límites de Sucesiones"
publish: true
type: zettel
date: "2026-11-10"
status: undone
aliases:
tags:
 - calculus
cssclasses:
 - romana
---
En [[Sucesiones Convergentes]] y [[Sucesiones Divergentes]] probamos cada límite con la definición ($\varepsilon$-$N$). Funciona, pero es cansado. Igual que con el [[Limite|límite de funciones]], la idea es usar la definición para **desarrollar una teoría** que calcule los límites por nosotros.

> Probamos pocas cosas con $\varepsilon$, y con ellas armamos todo lo demás.

### Álgebra de límites

> [!theorem] **Teorema.** (Álgebra de Límites de Sucesiones)
>
> Sean $\{ a_{n} \}, \{ b_{n} \}$ sucesiones tales que $a_{n} \to L$ y $b_{n} \to M$, con $L, M \in \mathbb{R}$, y sea $c \in \mathbb{R}$. Ent.
> 1. $(a_{n} + b_{n}) \to L + M$
> 2. $c \, a_{n} \to cL$
> 3. $a_{n} b_{n} \to LM$
> 4. Si $M \neq 0$ y $b_{n} \neq 0 \ \forall n \in \mathbb{N}$, ent. $\displaystyle \frac{a_{n}}{b_{n}} \to \frac{L}{M}$

> [!proof]- **Proof.**
>
> 1. **Borrador.** Por Des. triang.,
> $$
> \lvert (a_{n} + b_{n}) - (L + M) \rvert \leq \lvert a_{n} - L \rvert + \lvert b_{n} - M \rvert
> $$
> Si a cada sumando le pedimos ser menor que $\frac{\varepsilon}{2}$, la suma es menor que $\varepsilon$.
>
> **Proof.** Sea $\varepsilon > 0$. Como $a_{n} \to L$, existe $N_{1}$ tq. $\forall n \geq N_{1}$ $\lvert a_{n} - L \rvert < \frac{\varepsilon}{2}$. Como $b_{n} \to M$, existe $N_{2}$ tq. $\forall n \geq N_{2}$ $\lvert b_{n} - M \rvert < \frac{\varepsilon}{2}$. Sea $N = \max \{ N_{1}, N_{2} \}$, ent. $\forall n \geq N$,
> $$
> \lvert (a_{n} + b_{n}) - (L + M) \rvert \leq \lvert a_{n} - L \rvert + \lvert b_{n} - M \rvert < \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon \tag*{$\blacksquare$}
> $$
> 2. Si $c = 0$, ent. $c\,a_{n} = 0$ es constante y tiende a $0 = cL$. Sup. $c \neq 0$. Sea $\varepsilon > 0$, existe $N$ tq. $\forall n \geq N$ $\lvert a_{n} - L \rvert < \frac{\varepsilon}{\lvert c \rvert}$. Ent. $\forall n \geq N$,
> $$
> \lvert c\,a_{n} - cL \rvert = \lvert c \rvert \lvert a_{n} - L \rvert < \lvert c \rvert \cdot \frac{\varepsilon}{\lvert c \rvert} = \varepsilon \tag*{$\blacksquare$}
> $$
> 3. **Borrador.** Sumamos y restamos $a_{n}M$:
> $$
> a_{n}b_{n} - LM = a_{n}b_{n} - a_{n}M + a_{n}M - LM = a_{n}(b_{n} - M) + M(a_{n} - L)
> $$
> El problema es el factor $a_{n}$, que cambia con $n$. Pero $\{ a_{n} \}$ converge, ent. está acotada: $\lvert a_{n} \rvert \leq k$. Así,
> $$
> \lvert a_{n}b_{n} - LM \rvert \leq k \lvert b_{n} - M \rvert + \lvert M \rvert \lvert a_{n} - L \rvert
> $$
> y le pedimos a cada sumando ser menor que $\frac{\varepsilon}{2}$. Usamos $\lvert M \rvert + 1$ en vez de $\lvert M \rvert$ para no dividir entre $0$ si $M = 0$.
>
> **Proof.** Como $\{ a_{n} \}$ converge, está acotada (ver [[Sucesiones Convergentes]]): existe $k > 0$ tq. $\forall n$ $\lvert a_{n} \rvert \leq k$. Sea $\varepsilon > 0$. Existen $N_{1}, N_{2}$ tq.
> $$
> \forall n \geq N_{1} \ \ \lvert b_{n} - M \rvert < \frac{\varepsilon}{2k} \qquad \text{y} \qquad \forall n \geq N_{2} \ \ \lvert a_{n} - L \rvert < \frac{\varepsilon}{2(\lvert M \rvert + 1)}
> $$
> Sea $N = \max \{ N_{1}, N_{2} \}$, ent. $\forall n \geq N$,
> $$
> \begin{align}
> \lvert a_{n}b_{n} - LM \rvert &= \lvert a_{n}(b_{n} - M) + M(a_{n} - L) \rvert \\[0.5em]
> &\leq \lvert a_{n} \rvert \lvert b_{n} - M \rvert + \lvert M \rvert \lvert a_{n} - L \rvert \tag{Des. triang.} \\[0.5em]
> &< k \cdot \frac{\varepsilon}{2k} + \lvert M \rvert \cdot \frac{\varepsilon}{2(\lvert M \rvert + 1)} \\[0.5em]
> &< \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon
> \end{align}
> $$
> $$
> \tag*{$\blacksquare$}
> $$
> 4. Por (3), como $\frac{a_{n}}{b_{n}} = a_{n} \cdot \frac{1}{b_{n}}$, basta probar que $\frac{1}{b_{n}} \to \frac{1}{M}$.
>
> **Borrador.**
> $$
> \left\lvert \frac{1}{b_{n}} - \frac{1}{M} \right\rvert = \frac{\lvert M - b_{n} \rvert}{\lvert b_{n} \rvert \lvert M \rvert}
> $$
> El numerador es chico, pero el $\lvert b_{n} \rvert$ del denominador podría ser muy chico y hacer grande la fracción. El Lema de abajo dice que a partir de cierto $n$, $\lvert b_{n} \rvert > \frac{\lvert M \rvert}{2}$, ent. la fracción es menor que $\frac{2 \lvert b_{n} - M \rvert}{\lvert M \rvert^{2}}$.
>
> **Proof.** Por el Lema, existe $N_{0}$ tq. $\forall n \geq N_{0}$ $\lvert b_{n} \rvert > \frac{\lvert M \rvert}{2}$. Sea $\varepsilon > 0$, existe $N_{1}$ tq. $\forall n \geq N_{1}$ $\lvert b_{n} - M \rvert < \frac{\varepsilon \lvert M \rvert^{2}}{2}$. Sea $N = \max \{ N_{0}, N_{1} \}$, ent. $\forall n \geq N$,
> $$
> \left\lvert \frac{1}{b_{n}} - \frac{1}{M} \right\rvert = \frac{\lvert b_{n} - M \rvert}{\lvert b_{n} \rvert \lvert M \rvert} < \frac{2\lvert b_{n} - M \rvert}{\lvert M \rvert^{2}} < \frac{2}{\lvert M \rvert^{2}} \cdot \frac{\varepsilon \lvert M \rvert^{2}}{2} = \varepsilon \tag*{$\blacksquare$}
> $$

> [!theorem] **Lema.** (Acotación lejos de cero)
>
> Si $b_{n} \to M$ y $M \neq 0$, ent. existe $N_{0} \in \mathbb{N}$ tq. $\forall n \geq N_{0}$
> $$
> \lvert b_{n} \rvert > \frac{\lvert M \rvert}{2}
> $$
> En particular, $b_{n} \neq 0$ para $n \geq N_{0}$.

> [!proof]- **Proof.**
>
> Para $\varepsilon = \frac{\lvert M \rvert}{2} > 0$ existe $N_{0}$ tq. $\forall n \geq N_{0}$ $\lvert b_{n} - M \rvert < \frac{\lvert M \rvert}{2}$. Ent. $\forall n \geq N_{0}$,
> $$
> \lvert M \rvert \leq \lvert M - b_{n} \rvert + \lvert b_{n} \rvert < \frac{\lvert M \rvert}{2} + \lvert b_{n} \rvert \tag{Des. triang.}
> $$
> Restando $\frac{\lvert M \rvert}{2}$ de ambos lados, $\lvert b_{n} \rvert > \frac{\lvert M \rvert}{2}$.
> $$
> \tag*{$\blacksquare$}
> $$

> [!observation]+ **Observación.**
>
> 1. Por el Lema, la hipótesis "$b_{n} \neq 0 \ \forall n$" del inciso (4) solo sirve para que $\left\{ \frac{a_{n}}{b_{n}} \right\}$ esté definida (ver la división en [[Sucesiones]]): si $M \neq 0$, de todos modos $b_{n} \neq 0$ a partir de cierto término.
> 2. Por inducción, (1) y (3) se generalizan a sumas y productos de una cantidad finita de sucesiones. En particular, si $a_{n} \to L$, ent. $a_{n}^{p} \to L^{p}$ para todo $p \in \mathbb{N}^{+}$.
> 3. **Cuidado:** el teorema solo se aplica cuando **cada** sucesión converge. El recíproco es falso: con $a_{n} = (-1)^{n}$ y $b_{n} = -(-1)^{n}$, la suma $a_{n} + b_{n} = 0$ converge y el producto $a_{n}b_{n} = -1$ también, pero ninguna de las dos converge.

> [!theorem] **Corolario.**
>
> Sean $a_{n} \to L$ y $b_{n} \to M$. Ent.
> 1. $(a_{n} - b_{n}) \to L - M$
> 2. Si $\{ a_{n} + b_{n} \}$ y $\{ a_{n} \}$ convergen, ent. $\{ b_{n} \}$ converge.

> [!proof]- **Proof.**
>
> 1. $a_{n} - b_{n} = a_{n} + (-1)b_{n}$, y por (2) y (1) del teorema, tiende a $L + (-1)M = L - M$.
> 2. Aquí solo suponemos que $\{ a_{n} + b_{n} \}$ y $\{ a_{n} \}$ convergen. Como $b_{n} = (a_{n} + b_{n}) - a_{n}$ es diferencia de dos sucesiones convergentes, por (1) converge.
> $$
> \tag*{$\blacksquare$}
> $$

> [!example]- **Ejemplo 1.** (Cociente de polinomios)
>
> Calculemos $\displaystyle \lim_{ n \to \infty } \frac{3n^{2} + n - 1}{n^{2} + 5}$.
> No podemos aplicar (4) directamente: ni el numerador ni el denominador convergen. El truco es **dividir entre la mayor potencia** del denominador:
> $$
> \frac{3n^{2} + n - 1}{n^{2} + 5} = \frac{3 + \frac{1}{n} - \frac{1}{n^{2}}}{1 + \frac{5}{n^{2}}}
> $$
> Como $\frac{1}{n} \to 0$ y $\frac{1}{n^{2}} = \frac{1}{n} \cdot \frac{1}{n} \to 0$, por álgebra de límites el numerador tiende a $3 + 0 - 0 = 3$ y el denominador a $1 + 5 \cdot 0 = 1 \neq 0$, con $1 + \frac{5}{n^{2}} \neq 0 \ \forall n$. Ent.
> $$
> \lim_{ n \to \infty } \frac{3n^{2} + n - 1}{n^{2} + 5} = \frac{3}{1} = 3
> $$
> > [!observation]- **Observación.**
> >
> > El mismo truco muestra que si $p(n)$ y $q(n)$ son polinomios de grados $r$ y $s$, con coeficientes principales $\alpha$ y $\beta$:
> > - si $r = s$, ent. $\frac{p(n)}{q(n)} \to \frac{\alpha}{\beta}$;
> > - si $r < s$, ent. $\frac{p(n)}{q(n)} \to 0$ (al dividir entre $n^{s}$, el numerador tiende a $0$).
> >
> > (Siempre que $q(n) \neq 0$ para todo $n$.)

### Valor absoluto

> [!theorem] **Proposición.** (Límite del Valor Absoluto)
>
> Si $a_{n} \to L$, ent. $\lvert a_{n} \rvert \to \lvert L \rvert$.

> [!proof]- **Proof.**
>
> Por la propiedad $\big\lvert \lvert a \rvert - \lvert b \rvert \big\rvert \leq \lvert a - b \rvert$ (ver [[Valor Absoluto]]),
> $$
> \big\lvert \lvert a_{n} \rvert - \lvert L \rvert \big\rvert \leq \lvert a_{n} - L \rvert
> $$
> Ent. el mismo $N$ que funciona para $a_{n} \to L$ funciona para $\lvert a_{n} \rvert \to \lvert L \rvert$.
> $$
> \tag*{$\blacksquare$}
> $$

> [!observation]+ **Observación.**
>
> El recíproco es falso: $\lvert (-1)^{n} \rvert = 1 \to 1$, pero $\{ (-1)^{n} \}$ diverge. Sin embargo, **sí** vale cuando $L = 0$: $\lvert a_{n} \rvert \to 0 \iff a_{n} \to 0$ (es la Proposición de [[Sucesiones Convergentes]] con $L = 0$).

### Propiedades de orden

> [!theorem] **Teorema.** (Conservación del Signo)
>
> Si $a_{n} \geq 0$ para todo $n$ y $a_{n} \to L$, ent. $L \geq 0$.

> [!proof]- **Proof.**
>
> **Borrador.** Si $L < 0$, una banda alrededor de $L$ que no llegue al $0$ dejaría fuera a todos los términos, que son $\geq 0$. La banda de radio $-L$ justo no llega al $0$.
>
> **Proof.** Sup. que $L < 0$ y sea $\varepsilon = -L > 0$. Existe $N$ tq. $\forall n \geq N$ $\lvert a_{n} - L \rvert < -L$. En particular, $a_{N} - L < -L$, i.e. $a_{N} < 0$, lo que contradice que $a_{N} \geq 0$.
> $$
> \therefore \ L \geq 0 \tag*{$\blacksquare$}
> $$

> [!theorem] **Corolario.** (Conservación de Desigualdades)
>
> Sean $a_{n} \to L$ y $b_{n} \to M$.
> 1. Si $a_{n} \leq b_{n}$ para todo $n$, ent. $L \leq M$.
> 2. Si $\alpha \leq a_{n} \leq \beta$ para todo $n$, ent. $\alpha \leq L \leq \beta$.

> [!proof]- **Proof.**
>
> 1. Sea $c_{n} = b_{n} - a_{n} \geq 0$. Por el Corolario de álgebra de límites $c_{n} \to M - L$, y por Conservación del Signo $M - L \geq 0$.
> 2. Aplicamos (1) con las sucesiones constantes $\alpha$ y $\beta$.
> $$
> \tag*{$\blacksquare$}
> $$

> [!observation]+ **Observación.**
>
> 1. Las desigualdades **estrictas** no se conservan: $\frac{1}{n} > 0$ para todo $n$, pero $\lim \frac{1}{n} = 0$. Lo más que se obtiene de $a_{n} < b_{n}$ es $L \leq M$.
> 2. Basta que las hipótesis valgan a partir de cierto $N_{0}$ (solo importa la cola).

El corolario supone que **ambas** sucesiones convergen. El siguiente teorema es más fuerte: si la sucesión de en medio está "apretada", su convergencia es parte de la conclusión.

> [!theorem] **Teorema.** (Sándwich)
>
> Sean $\{ a_{n} \}, \{ b_{n} \}, \{ c_{n} \}$ sucesiones tq. $a_{n} \leq b_{n} \leq c_{n}$ para todo $n \geq N_{0}$. Si $a_{n} \to L$ y $c_{n} \to L$, ent. $b_{n} \to L$.

> [!proof]- **Proof.**
>
> **Borrador.** A partir de cierto $n$, $a_{n}$ y $c_{n}$ están en la banda $(L-\varepsilon, L+\varepsilon)$, y $b_{n}$ está entre ellas.
>
> **Proof.** Sea $\varepsilon > 0$. Existen $N_{1}, N_{2}$ tq. $\forall n \geq N_{1}$ $L - \varepsilon < a_{n}$ y $\forall n \geq N_{2}$ $c_{n} < L + \varepsilon$. Sea $N = \max \{ N_{0}, N_{1}, N_{2} \}$, ent. $\forall n \geq N$,
> $$
> L - \varepsilon < a_{n} \leq b_{n} \leq c_{n} < L + \varepsilon
> $$
> i.e. $\lvert b_{n} - L \rvert < \varepsilon$.
> $$
> \therefore \ b_{n} \to L \tag*{$\blacksquare$}
> $$

> [!example]- **Ejemplo 2.** ($\frac{n}{n^{2}+1} \to 0$)
>
> Para todo $n$, $0 \leq \frac{n}{n^{2}+1} \leq \frac{n}{n^{2}} = \frac{1}{n}$. Como $0 \to 0$ y $\frac{1}{n} \to 0$, por Sándwich $\frac{n}{n^{2}+1} \to 0$.

> [!theorem] **Corolario.** (Acotada por Nula)
>
> Si $\{ a_{n} \}$ está acotada y $b_{n} \to 0$, ent. $a_{n}b_{n} \to 0$.

> [!proof]- **Proof.**
>
> Sea $k > 0$ tq. $\lvert a_{n} \rvert \leq k$ para todo $n$. Ent.
> $$
> 0 \leq \lvert a_{n} b_{n} \rvert \leq k \lvert b_{n} \rvert
> $$
> Como $b_{n} \to 0$, por Valor Absoluto y álgebra de límites $k\lvert b_{n} \rvert \to k \cdot 0 = 0$. Por Sándwich $\lvert a_{n}b_{n} \rvert \to 0$, ent. $a_{n}b_{n} \to 0$.
> $$
> \tag*{$\blacksquare$}
> $$

Este corolario **no** es álgebra de límites: $\{ a_{n} \}$ puede no converger.

> [!example]- **Ejemplo 3.** ($\frac{\sin(n)}{n} \to 0$ y $\frac{(-1)^{n}}{n} \to 0$)
>
> $\{ \sin(n) \}$ y $\{ (-1)^{n} \}$ no convergen, pero están acotadas por $1$, y $\frac{1}{n} \to 0$. Por el corolario, ambos productos tienden a $0$.

### Dos límites importantes

> [!theorem] **Proposición.** (Potencias)
>
> Si $\lvert r \rvert < 1$, ent. $r^{n} \to 0$.

> [!proof]- **Proof.**
>
> **Borrador.** Si $0 < \lvert r \rvert < 1$, ent. $\frac{1}{\lvert r \rvert} > 1$ y lo escribimos como $1 + b$ con $b > 0$. La [[Desigualdad de Bernoulli]] dice que $(1+b)^{n} \geq 1 + nb > nb$, ent.
> $$
> \lvert r^{n} \rvert = \frac{1}{(1+b)^{n}} < \frac{1}{nb}
> $$
> y esto es menor que $\varepsilon$ si $n > \frac{1}{b\varepsilon}$.
>
> **Proof.** Si $r = 0$, $r^{n} = 0 \to 0$. Sup. $0 < \lvert r \rvert < 1$ y sea $b = \frac{1}{\lvert r \rvert} - 1 > 0$. Sea $\varepsilon > 0$. Por la Prop. Arquimediana existe $N$ tq. $N > \frac{1}{b\varepsilon}$. Ent. $\forall n \geq N$,
> $$
> \begin{align}
> \lvert r^{n} - 0 \rvert = \frac{1}{(1+b)^{n}} &\leq \frac{1}{1 + nb} \tag{Bernoulli} \\[0.5em]
> &< \frac{1}{nb} \leq \frac{1}{Nb} < \varepsilon
> \end{align}
> $$
> $$
> \tag*{$\blacksquare$}
> $$

> [!observation]+ **Observación.**
>
> Completando los casos de $\{ r^{n} \}$:
> - $r = 1$: constante, converge a $1$.
> - $r = -1$: diverge oscilando (Ejemplo 6 de [[Sucesiones Convergentes]]).
> - $r > 1$: $r^{n} \to \infty$ (Ejemplo 5 abajo).
> - $r < -1$: diverge oscilando, pues $\lvert r^{n} \rvert = \lvert r \rvert^{n} \to \infty$ y el signo alterna.

> [!theorem] **Proposición.** (Raíz Cuadrada)
>
> Si $a_{n} \geq 0$ para todo $n$ y $a_{n} \to L$, ent. $\sqrt{ a_{n} } \to \sqrt{ L }$.

> [!proof]- **Proof.**
>
> Por Conservación del Signo $L \geq 0$, así que $\sqrt{ L }$ tiene sentido. Sea $\varepsilon > 0$.
>
> *Caso 1:* $L > 0$. Racionalizando,
> $$
> \lvert \sqrt{ a_{n} } - \sqrt{ L } \rvert = \frac{\lvert a_{n} - L \rvert}{\sqrt{ a_{n} } + \sqrt{ L }} \leq \frac{\lvert a_{n} - L \rvert}{\sqrt{ L }}
> $$
> Existe $N$ tq. $\forall n \geq N$ $\lvert a_{n} - L \rvert < \varepsilon \sqrt{ L }$, y ent. $\lvert \sqrt{ a_{n} } - \sqrt{ L } \rvert < \varepsilon$.
>
> *Caso 2:* $L = 0$. Existe $N$ tq. $\forall n \geq N$ $a_{n} = \lvert a_{n} - 0 \rvert < \varepsilon^{2}$, ent. $\sqrt{ a_{n} } < \varepsilon$.
> $$
> \tag*{$\blacksquare$}
> $$

> [!example]- **Ejemplo 4.** ($\sqrt{ 12 + \frac{1}{n} } \to \sqrt{ 12 }$)
>
> $12 + \frac{1}{n} \geq 0$ y por álgebra de límites $12 + \frac{1}{n} \to 12$. Por la proposición, $\sqrt{ 12 + \frac{1}{n} } \to \sqrt{ 12 }$.

### Propiedades de $\pm\infty$

Recordemos que $a_{n} \to \infty$ sii $\forall M \in \mathbb{R} \ \exists N \ \forall n \geq N \ (a_{n} > M)$ (ver [[Sucesiones Convergentes]]).

> [!theorem] **Teorema.** (Álgebra con $\infty$)
>
> Sean $a_{n} \to \infty$ y $b_{n} \to \infty$.
> 1. $(a_{n} + b_{n}) \to \infty$
> 2. $a_{n}b_{n} \to \infty$
> 3. Si $c > 0$, ent. $c\,a_{n} \to \infty$. Si $c < 0$, ent. $c\,a_{n} \to -\infty$.
> 4. Si $\{ f_{n} \}$ está acotada inferiormente (p. ej. si converge), ent. $(a_{n} + f_{n}) \to \infty$.
> 5. (Comparación) Si $a_{n} \leq d_{n}$ para todo $n \geq N_{0}$, ent. $d_{n} \to \infty$.

> [!proof]- **Proof.**
>
> Sea $M \in \mathbb{R}$.
> 1. Existen $N_{1}, N_{2}$ tq. $\forall n \geq N_{1}$ $a_{n} > \frac{M}{2}$ y $\forall n \geq N_{2}$ $b_{n} > \frac{M}{2}$. Para $n \geq \max \{ N_{1}, N_{2} \}$, $a_{n} + b_{n} > M$.
> 2. Sea $M' = \max \{ M, 1 \}$. Existen $N_{1}, N_{2}$ tq. $\forall n \geq N_{1}$ $a_{n} > M'$ y $\forall n \geq N_{2}$ $b_{n} > 1$. Para $n \geq \max \{ N_{1}, N_{2} \}$, como $a_{n} > M' \geq 1 > 0$ y $b_{n} > 1$,
> $$
> a_{n}b_{n} > a_{n} \cdot 1 > M' \geq M
> $$
> 3. Si $c > 0$, existe $N$ tq. $\forall n \geq N$ $a_{n} > \frac{M}{c}$, ent. $c\,a_{n} > M$. Si $c < 0$, ent. $-c > 0$ y $(-c)a_{n} \to \infty$, que equivale a $c\,a_{n} \to -\infty$.
> 4. Sea $m$ tq. $f_{n} \geq m$ para todo $n$. Existe $N$ tq. $\forall n \geq N$ $a_{n} > M - m$, ent. $a_{n} + f_{n} > (M - m) + m = M$.
> 5. Existe $N_{1}$ tq. $\forall n \geq N_{1}$ $a_{n} > M$. Para $n \geq \max \{ N_{0}, N_{1} \}$, $d_{n} \geq a_{n} > M$.
> $$
> \tag*{$\blacksquare$}
> $$

> [!theorem] **Proposición.** (Recíprocos)
>
> 1. Si $a_{n} \to \infty$ y $a_{n} \neq 0$ para todo $n$, ent. $\frac{1}{a_{n}} \to 0$.
> 2. Si $e_{n} > 0$ para todo $n$ y $e_{n} \to 0$, ent. $\frac{1}{e_{n}} \to \infty$.

> [!proof]- **Proof.**
>
> 1. Sea $\varepsilon > 0$. Existe $N$ tq. $\forall n \geq N$ $a_{n} > \frac{1}{\varepsilon} > 0$, ent. $0 < \frac{1}{a_{n}} < \varepsilon$.
> 2. Sea $M \in \mathbb{R}$. Si $M \leq 0$, ent. $\frac{1}{e_{n}} > 0 \geq M$ para todo $n$. Si $M > 0$, existe $N$ tq. $\forall n \geq N$ $e_{n} = \lvert e_{n} - 0 \rvert < \frac{1}{M}$, ent. $\frac{1}{e_{n}} > M$.
> $$
> \tag*{$\blacksquare$}
> $$

En (2) es indispensable que $e_{n} > 0$: con $e_{n} = \frac{(-1)^{n}}{n} \to 0$, $\frac{1}{e_{n}} = (-1)^{n}n$ oscila.

> [!example]- **Ejemplo 5.** ($c^{n} \to \infty$ si $c > 1$)
>
> Por la [[Desigualdad de Bernoulli]], con $c = 1 + (c-1)$ y $c - 1 > 0$,
> $$
> c^{n} = (1 + (c-1))^{n} \geq 1 + n(c-1) > n(c-1)
> $$
> Como $n \to \infty$ y $c - 1 > 0$, por (3) $n(c-1) \to \infty$, y por Comparación $c^{n} \to \infty$.

> [!example]- **Ejemplo 6.** ($\frac{n^{2}+1}{n+1} \to \infty$)
>
> Dividiendo polinomios, $\frac{n^{2}+1}{n+1} = n - 1 + \frac{2}{n+1}$, pues $(n-1)(n+1) + 2 = n^{2} + 1$. Ent.
> $$
> \frac{n^{2}+1}{n+1} \geq n - 1
> $$
> y $n - 1 \to \infty$ por (4) (con $f_{n} = -1$). Por Comparación, $\frac{n^{2}+1}{n+1} \to \infty$.

### Formas indeterminadas

El teorema de "álgebra con $\infty$" **no** dice nada de $\infty - \infty$, $0 \cdot \infty$, $\frac{\infty}{\infty}$ o $\frac{0}{0}$. No es un olvido: en esos casos el resultado depende de las sucesiones concretas.

> [!example]- **Ejemplo 7.** (Todo puede pasar)
>
> **$\infty - \infty$.** En los tres casos $a_{n} \to \infty$ y $b_{n} \to \infty$:
> - $a_{n} = n + c$, $b_{n} = n$: $a_{n} - b_{n} = c \to c$, cualquier real.
> - $a_{n} = n^{2}$, $b_{n} = n$: $a_{n} - b_{n} = n(n-1) \geq n - 1 \to \infty$.
> - $a_{n} = n + (-1)^{n}$, $b_{n} = n$: $a_{n} - b_{n} = (-1)^{n}$ oscila.
>
> **$0 \cdot \infty$.** Con $\frac{c}{n} \to 0$ y $n \to \infty$, $\frac{c}{n} \cdot n = c$; pero con $\frac{1}{n} \to 0$ y $n^{2} \to \infty$, $\frac{1}{n} \cdot n^{2} = n \to \infty$.
>
> Por eso, ante una forma indeterminada hay que **reescribir** la sucesión (racionalizar, factorizar, dividir entre la mayor potencia) antes de aplicar los teoremas, como en el Ejemplo 4 de [[Sucesiones Convergentes]] ($\sqrt{ n+1 } - \sqrt{ n } \to 0$) o el Ejemplo 1 de esta nota.
