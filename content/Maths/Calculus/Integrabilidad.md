---
modified: 2026-07-10T19:30:36Z
title: "Integrabilidad"
publish: true
type: zettel
date: "2026-07-03"
aliases:
 - Definicion de Integral
tags: 
 - calculus
cssclasses: 
 - romana
---
> [!theorem] **Def.** (Integral e Integrabilidad)
> Una función $f$ acotada en $[a,b]$ es **integrable** en $[a,b]$ si
> $$
> \sup \{ L(f,P): P \text{ es partición de } [a,b] \} = \inf \{ U(f,P): P \text{ es partición de } [a,b] \}.
> $$
> En este caso, a este número común se le denomina la **integral** de $f$ en $[a,b]$ y se denota
> $$
> \int_{a}^{b} f.
> $$
> La integral $\int_{a}^{b} f$ se denomina también el **área** de $R(f,a,b)$ cuando $f(x)\geq 0$ para todo $x \in [a,b]$.



> [!Info]-
> El símbolo $\int$ originalmente era una $s$ alargada que significaba "suma"; los números $a,b$ se denominan *limites de integración inferior y superior*.

Si $f$ es integrable, de acuerdo a nuestra definición,
$$
L(f,P)\leq \int_{a}^{b} f \leq U(f,P) \quad \text{ para todas las particiones } P \text{ de } [a,b].
$$
Además, el número $\displaystyle \int_{a}^{b} f$ es el único con esta propiedad.

Para discutir a fondo la *integral* es útil disponer del siguiente criterio.

> [!theorem] **Teorema 2.** (Criterio de integrabilidad $\varepsilon$)
> Si $f$ está acotada en $[a,b]$, entonces $f$ es integrable en $[a,b]$ si y solamente si para cada $\varepsilon>0$ existe una partición $P$ de $[a,b]$ tal que
> $$
> U(f,P) - L(f,P) <\varepsilon.
> $$

> [!proof]- **Proof.** 
> $(\impliedby)$
> Supongamos primer que para cada $\varepsilon>0$ existe una partición $P$ con
> $$
> U(f,P) - L(f,P) < \varepsilon.
> $$
> Como
> $$
> \begin{align}
> \inf \{ U(f,P') \} \leq U(f,P), \\[0.4em]
> \sup \{ L(f,P') \} \geq L(f,P)
> \end{align}
> $$
> resulta que
> $$
> \inf \{ U(f,P') \} - \sup \{ L(f,P') \} < \varepsilon
> $$
> Como esto es cierto para todo $\varepsilon>0$, se deduce que
> $$
> \sup \{ L(f,P') \} = \inf \{ U(f,P') \};
> $$
> luego, por definición, $f$ es integrable.
> $(\implies)$
> Similarmente, si $f$ es integrable, entonces
> $$
> I = \sup \{ L(f,P) \} = \inf \{ U(f,P) \}.
> $$
> Esto significa que para cada $\varepsilon > 0$ existe particiones $P', P''$ con
> $$
> U(f,P'')-L(f,P') < \varepsilon.
> $$
> *Razón:* "*truco* $\frac{\varepsilon}{2}$ *y definición del supremo usando $\varepsilon$*".<sup><a href="#user-content-fn-inline-1" id="user-content-fnref-inline-1" data-footnote-ref class="internal">1</a></sup>
> $$
> \begin{align}
> L(f, P') > I - \frac{\varepsilon}{2} \\
> U(f, P'') < I + \frac{\varepsilon}{2}
> \end{align}
> $$
> Ahora bien, sea $P$ una partición que contenga a $P'$ y $P''$. Entonces según el *lema de sumas superiores e inferiores*,
> $$
> \begin{align}
> U(f,P) \leq U(f,P''), \\[0.4em]
> L(f,P) \geq L(f,P');
> \end{align}
> $$
> por consiguiente,
> $$
> U(f,P)-L(f,P)\leq U(f,P'')-L(f,P')< \varepsilon. \tag*{$\blacksquare$}
> $$
> 


Observamos que surgen dificultades ya sea $f$ discontinuo o continuo y desarrollamos más resultados.

> [!example]- **Ejemplo 1:** $f(x) = \begin{cases}0,  & x\neq 1 \\  1,  &x=1.\end{cases}$ 
> Sea $f$ la función definida en $[0,2]$ mediante
> $$
> f(x) = \begin{cases}
> 0, & x\neq 1 \\
> 1,  & x = 1.
> \end{cases}
> $$
> Supongamos que $P = \{ t_{0},\dots,t_{n} \}$ es una partición de $[0,2]$ con
> $$
> t_{j-1} < 1 < t_{j}.
> $$
> Entonces
> $$
> m_{i} = M_{i} = 0 \quad \text{ si } \quad i\neq j,
> $$
> pero $m_{j} = 0$ y $M_{j} =1$.
> Dado
> $$
> \begin{align}
> L(f,P) = \sum_{i=1}^{j-1} m_{i}(t_{i}-t_{i-1}) + m_{j}(t_{j}-t_{j-1}) + \sum_{i=j+1}^{n} m_{i}(t_{i}-t_{i-1}), \\
> U(f,P) = \sum_{i=1}^{j-1} M_{i}(t_{i}-t_{i-1}) + M_{j}(t_{j}-t_{j-1}) + \sum_{i=j+1}^{n} M_{i}(t_{i}-t_{i-1}),
> \end{align}
> $$
> obtenemos
> $$
> U(f,P)- L(f,P) = t_{j}-t_{j-1}
> $$
> Lo cual demuestra que $f$ es integrable: para obtener una partición $P$ respecto de la cual
> $$
> U(f,P) - L(f,P) < \varepsilon,
> $$
> basta tan sólo elegir una partición que verifique
> $$
> t_{j-1}< 1 < t_{j} \quad \text{ y } \quad t_{j}-t_{j-1}<\varepsilon.
> $$
> Además, está claro que
> $$
> L(f,P) \leq 0 \leq U(f,P) \quad\text{para todas las particiones } P.
> $$
> Como $f$ es integrable, existe un único número comprendido entre todas las sumas inferiores y superiores, por lo tanto
> $$
> \int_{0}^{2} f = 0.
> $$
> 

> [!example]- **Ejemplo 2:** $f(x) = x$
> Sea $f(x) = x$, para simplificar consideramos un intervalo $[0,b]$, donde $b>0$. Si $P = \{ t_{0},\dots,t_{n} \}$ es una partición de $[0,b]$, entonces
> 
> ![[Pasted image 20260708131523.png|center]]
> 
> $$
> m_{i} = t_{i-1} \quad \text{ y } \quad M_{i}=t_{i}
> $$
> por tanto
> $$
> \begin{align}
> L(f,P) &= \sum_{i=1}^{n} t_{i-1}(t_{i}-t_{i-1}) \\
> &= t_{0}(t_{1}-t_{0})+ t_{1}(t_{2}-t_{1})+\dots+ t_{n-1}(t_{n}-t_{n-1}) \\[0.4em]
> U(f,P) &= \sum_{i=1}^{n} t_{i}(t_{i}-t_{i-1}) \\
> &= t_{1}(t_{1}-t_{0}) + \dots + t_{n}(t_{n}-t_{n-1})
> \end{align}
> $$
> Ninguna de estas fórmulas es particularmente interesante, pero ambas se simplifican considerablemente en el caso de particiones $P_{n} = \{ t_{0},\dots,t_{n} \}$ con $n$ subintervalos *iguales*.
> En este caso, la longitud $t_{i}-t_{i-1}$ de cada subintervalo es $b / n$, de manera que
> $$
> \begin{align}
> t_{0} = 0, \\
> t_{1} = \frac{b}{n}, \\
> t_{2} = \frac{2b}{n}\dots
> \end{align}
> $$
> en general
> $$
> t_{i} = \frac{ib}{n}
> $$
> Entonces 
> $$
> \begin{align}
> L(f,P_{n}) &= \sum_{i=1}^{n} t_{i-1}(t_{i}-t_{i-1}) \\
> &= \sum_{i=1}^{n} \left\{  \frac{(i-1)b}{n}  \right\}\cdot \frac{b}{n} \\
> &= \left[  \sum_{i=1}^{n} (i-1) \right] \frac{b^{2}}{n^{2}} \\
> &= \left( \sum_{j=0}^{n-1} j \right) \frac{b^{2}}{n^{2}}.
> \end{align}
> $$
> Recordando la suma Gaussiana<sup><a href="#user-content-fn-inline-2" id="user-content-fnref-inline-2" data-footnote-ref class="internal">2</a></sup>
> $$
> 1 + \dots + k = \frac{k(k+1)}{2},
> $$
> $L(f,P_{n})$ puede escribirse como
> $$
> L(f,P_{n}) = \frac{(n-1)n}{2} \cdot \frac{b^{2}}{n^{2}} = \frac{n-1}{n}\cdot \frac{b^{2}}{2}.
> $$
> Analogamente,
> $$
> \begin{align}
> U(f,P_{n}) &= \sum_{i=1}^{n} t_{i}(t_{i}-t_{i-1}) \\
> &= \sum_{i=1}^{n} \frac{ib}{n} \cdot \frac{b}{n} \\
> &= \frac{n(n+1)}{2} \cdot \frac{b^{2}}{n^{2}} \\
> &= \frac{n+1}{n} \cdot \frac{b^{2}}{2}.
> \end{align}
> $$
> Observamos que si $n$ es muy grande, $L(f,P_{n})$ y $U(f,P_{n})$ se aproximan a $\frac{b^{2}}{2}$, esta observación facilita la demostración de que $f$ es integrable:
> $$
> U(f,P_{n}) - L(f,P_{n}) = \frac{2}{n}\cdot \frac{b^{2}}{2}.
> $$
> Esto demuestra que existen particiones $P_{n}$ para las cuales, la diferencia $U(f,P_{n})- L(f,P_{n})$ se puede hacer tan pequeña como se desee. Por el Teorema 2 la función $f$ es integrable. 
> Además, $\displaystyle \int_{0}^{b} f$ puede calcularse ahora tan sólo con un pequeño esfuerzo adicional.
> En primer lugar, está claro que
> $$
> L(f,P_{n}) \leq \frac{b^{2}}{2}\leq U(f,P_{n}) \quad \text{ para todo } n.
> $$
> Esta desigualdad demuestra tan sólo que $b^{2}/2$ se encuentra entre determinadas sumas superiores e inferiores, pero hemos visto que $U(f,P_{n})- L(f,P_{n})$ se puede hacer tan pequeña como se desee, por tanto existe *tan sólo un número con esta propiedad*. Como ciertamente la integral tiene esta propiedad, se deduce
> $$
> \int_{0}^{b} f = \frac{b^{2}}{2}
> $$
> Observamos que justo está es el área de un triangulo rectángulo de base y altura igual a $b$.
> ![[Pasted image 20260709115329.png|center]]
> Utilizando otros cálculos, o el Teorema 4, se puede demostrar que
> $$
> \int_{a}^{b} f  = \frac{b^{2}}{2} - \frac{a^{2}}{2}
> $$

> [!example]- **Ejemplo 3:** $f(x) = x^{2}$
> Si $P = \{ t_{0},\dots,t_{n} \}$ es una partición de $[0,b]$, entonces
> $$
> m_{i} = f(t_{i-1}) = (t_{i-1})^{2} \quad \text{ y } \quad M_{i} = f(t_{i}) = t_{i}^{2}.
> $$
> Eligiendo, una vez más, una partición $P_{n} = \{ t_{0},\dots,t_{n} \}$ en $n$ subintervalos iguales, de manera que
> $$
> t_{i} = \frac{i\cdot b}{n}
> $$
> las sumas inferiores y superior son
> $$
> \begin{align}
> L(f,P_{n}) &= \sum_{i=1}^{n} (t_{i-1})^{2} \cdot(t_{i}-t_{i-1}) \\
> &= \sum_{i=1}^{n} (i-1)^{2} \frac{b^{2}}{n^{2}} \cdot \frac{b}{n} \\
> &= \frac{b^{3}}{n^{3}} \cdot \sum_{j=0}^{n-1} j^{2}, \\[.7em]
> U(f,P_{n}) &= \sum_{i=1}^{n} t_{i}^{2} \cdot(t_{i}-t_{i-1}) \\
> &= \sum_{i=1}^{n} i^{2} \frac{b^{2}}{n^{2}} \cdot \frac{b}{n} \\
> &= \frac{b^{3}}{n^{3}} \sum_{j=1}^{n} j^{2}.
> \end{align}
> $$
> Recordando la fórmula
> $$
> 1^{2}+\dots+k^{2} = \frac{1}{6}k(k+1)(2k+1)
> $$
> tenemos que
> $$
> \begin{align}
> L(f,P_{n}) = \frac{b^{3}}{n^{3}}\cdot \frac{1}{6} (n-1)(n)(2n-1), \\[0.4em]
> U(f,P_{n}) = \frac{b^{3}}{n^{3}}\cdot \frac{1}{6} (n-1)(n)(2n+1).
> \end{align}
> $$
> No es difícil demostrar que
> $$
> L(f,P_{n}) \leq \frac{b^{3}}{3} \leq U(f,P_{n}),
> $$
> y que $U(f,P_{n}) - L(f,P_{n} )$ se puede hacer tan pequeña como se desee, eligiendo un $n$ suficientemente grande. El mismo razonamiento que el ejemplo anterior permite deducir que
> $$
> \int_{0}^{b} f = \frac{b^{3}}{3}.
> $$

Estos cálculos nos permiten ya un resultado no trivial: el área de la región limitada por una parábola! Esto no lo sabíamos en la geometría elemental! Bueno, Arquímedes si sabía y lo dedujo de forma similar :c
De nuevo, la única superioridad está entonces en otra forma más sencilla de llegar a este resultado... 
- [ ] ==link aqui==

En nuestra discusión hablamos de *verdadero* y "complicadisimo" criterio de integrabilidad, el cual, antes de desarrollar, desmoronamos en varios resultados útiles:

> [!theorem] **Teorema 3.** (Criterio de integrabilidad y continuidad)
> Si $f$ es continua en $[a,b]$, entonces $f$ es integrable en $[a,b]$.

> [!proof]- **Proof.** 
> Observemos en primer lugar que $f$ está acotada en $[a,b]$, pues es continau en $[a,b]$. Para demostrar que $f$ es integrable en $[a,b, ]$ utilizamos el Teorema 2, y demostramos que para cada $\varepsilon >0$ existe una partición $P$ de $[a,b]$ tal que
> $$
> U(f,P) - L(f,P) < \varepsilon.
> $$
> El Teorema 1 de Sumas de Reiman<sup><a href="#user-content-fn-inline-3" id="user-content-fnref-inline-3" data-footnote-ref class="internal">3</a></sup>, nos permite afrimar que $f$ es uniformemente continua en $[a,b]$. Por tanto, existe algún $\delta >0$ tal que $\forall x, y \in [a,b]$, 
> $$
> \lvert x-y \rvert <\delta \implies \lvert f(x)-f(y) \rvert < \frac{\varepsilon}{2(b-a)}.
> $$
> Ahora se trata simplemente de elegir $P = \{ t_{0},\dots,t_{n} \}$ tal que cada $\lvert t_{i}-t_{i-1} \rvert< \delta$. Entonces para cada $i$ tenemos
> $$
> \lvert f(x)- f(y) \rvert < \frac{\varepsilon}{2(b-a)} \quad \text{ para todo } x, y \in [t_{i-1},t_{i}].
> $$
> Como $f$ es continua en cada subintervalo, alcanza a sus extremos $m_{i}$ y $M_{i}$, lo cual permite afirmar que 
> $$
> M_{i}-m_{i} < \frac{\varepsilon}{2(b-a)} < \frac{\varepsilon}{b-a}.
> $$
> Como esto se verifica para todo $i$, obtenemos
> $$
> \begin{align}
> U(f,P) - L(f,P) &= \sum_{i=1}^{n} (M_{i}-m_{i})(t_{i}-t_{i-1}) \\
> &< \frac{\varepsilon}{b-a}\sum_{i=1}^{n} t_{i}-t_{i-1} \\
> &= \frac{\varepsilon}{b-a} \cdot b-a \\
> &= \varepsilon \tag*{$\blacksquare$}
> \end{align}
> $$

El teorema anterior aporta "toda la información necesaria" para el uso de las integrales en este nivel. Pero resulta satisfactorio poseer mayor surtido de herramientas, para ello los siguientes tres teoremas.

> [!theorem] **Teorema 4.**
> Sea $a<c<b$. Si $f$ es integrable en $[a,b]$, entonces $f$ es integrable en $[a,c]$ y en $[c,b]$. Recíprocamente, si $f$ es integrable en $[a,c]$ y en $[c,b]$, entonces $f$ es integrable en $[a,b]$. Finalmente, si $f$ es integrable en $[a,b]$, entonces
> $$
> \int_{a}^{b} f = \int_{a}^{c} f+ \int_{c}^{b} f. 
> $$

> [!proof]- **Proof.** 
> $(\implies)$
> Supongamos que $f$ es integrable en $[a,b]$. Si $\varepsilon>0$, existe una partición $P= \{ t_{0},\dots,t_{n} \}$ de $[a,b]$ tal que
> $$
> U(f,P) - L(f,P) < \varepsilon.
> $$
> Podemos suponer que $c = t_{j}$ para algún $j$. (En otro caso, sea $Q$ la partición que contiene a $t_{0},\dots,t_{n}$ y $c$; entonces $Q$ contiene a $P$, de manera que $U(f,Q)- L(f,Q) \leq U(f,P)-L(f,P) < \varepsilon$). Además, $P' = \{ t_{0},\dots,t_{j} \}$ es una partición de $[a,c]$ y $P'' = \{ t_{j},\dots,t_{n} \}$ es una partición de $[c,b]$. Ya que
> $$
> \begin{align}
> L(f,P) = L(f,P') + L(f,P'') \\
> U(f,P) = U(f,P') + U(f,P'')
> \end{align}
> $$
> obtenemos
> $$
> [U(f,P')-L(f,P')] + [U(f,P'')- L(f,P'')] = U(f,P) - L(f,P) <\varepsilon.
> $$
> Como cada uno de los términos entre corchetes es no negativo, cada uno de ellos debe ser menor que $\varepsilon$. Esto demuestra que $f$ es integrable en $[a,c]$ y en $[c,b]$. Observemos también que
> $$
> \begin{align}
> L(f,P') \leq \int_{a}^{c} f \leq U(f,P'), \\
> L(f,P'') \leq \int_{c}^{b} f \leq U(f,P''),
> \end{align}
> $$
> de manera que
> $$
> L(f,P) \leq \int_{a}^{c} f + \int_{c}^{b} f \leq U(f,P).
> $$
> Como esto es cierto para cualquier $P$, se verifica que
> $$
> \int_{a}^{c} f + \int_{c}^{b} f = \int_{a}^{b} f.
> $$
> $(\impliedby)$
> Supongamos ahora que $f$ es integrable en $[a,c]$ y en $[c,b]$. Si $\varepsilon >0$, existe una partición $P'$ de $[a,c]$ y una partición $P''$ de $[c,b]$ tal que
> $$
> \begin{align}
> U(f,P') - L(f,P') < \varepsilon / 2, \\
> U(f,P'') - L(f,P'') < \varepsilon / 2. \\
> \end{align}
> $$
> Si $P$ es una partición de $[a,b]$ que contiene a todos los puntos de $P'$ y $P''$, entonces
> $$
> \begin{align}
> L(f,P) = L(f,P') + L(f,P''), \\
> U(f,P) = U(f,P') + U(f,P'');
> \end{align}
> $$
> por consiguiente,
> $$
> U(f,P) - L(f,P) = [U(f,P')-L(f,P')] + [U(f,P'') - L(f,P'')] < \varepsilon. \tag*{$\blacksquare$}
> $$

El Teorema 4 permite justificar algunas convenciones de notación. Añadiendo las definiciones:
$$
\int_{a}^{a} f = 0 \quad \text{ y } \quad \int_{a}^{b} f = -\int_{b}^{a} f \quad \text{si } a > b.
$$
Con esto el hecho del teorema anterior se verifica para todo $a,c,b$ incluso sin $a<c<b$. (la demostración es por casos y super tediosa).

<section data-footnotes class="footnotes"><h2 class="sr-only" id="footnote-label">Notas</h2>
<ol>
<li id="user-content-fn-inline-1">

[[Supremo e Infimo]] <a href="#user-content-fnref-inline-1" data-footnote-backref class="data-footnote-backref internal">↩</a>

</li>
<li id="user-content-fn-inline-2">

[[Suma Gaussiana]] <a href="#user-content-fnref-inline-2" data-footnote-backref class="data-footnote-backref internal">↩</a>

</li>
<li id="user-content-fn-inline-3">

[[Sumas de Riemann]] <a href="#user-content-fnref-inline-3" data-footnote-backref class="data-footnote-backref internal">↩</a>

</li>
</ol>
</section>
