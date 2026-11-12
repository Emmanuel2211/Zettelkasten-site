---
modified: 2026-09-12T14:29:43Z
title: "Integral de Darboux"
publish: true
type: zettel
date: "2026-09-07"
status: undone
aliases:
 - epsilon particion
tags:
 - calculus
cssclasses: 
 - romana
---
> Es la suma de cada "*área rectangula*" que se forma al multiplicar la longitud del subintervalo $(x_{i+1} - x_{i}) \ \forall  i \in \{ 1,\dots,n \}$ por algún valor de la función $f(x)$ en el mismo subintervalo, como lo es $\min \left\{f\right\}$ y $\max \left\{f\right\}$ para definir los rectangulos más grandes y pequeños de cada subintervalo.

> [!theorem] **Definición.** (Sumas de Darboux Superiores e Inferiores)
>
> Sea $f: [a,b] \implies \mathbb{R}$ continua y $\mathcal{P}$ partición de $[a,b]$ 
> $$
> \begin{align}
> L = \sum_{j=0}^{n-1} \underset{[x_{j},x_{j+1}]}{\min }\{ f(x) \} \cdot(x_{j+1} - x_{j}) \\[1em]
> U = \sum_{j=0}^{n -1} \underset{[x_{j},x_{j+1}]}{\max } \{ f(x) \} \cdot (x_{j+1}-x_{j})
> \end{align}
> $$
> A $L$ se le llama **suma inferior** y a $U$ **suma superior**.

![[Pasted image 20260825114547.png|center]]

> [!observation]+ **Observación.**
>
> Tenemos que
> $$
> L\leq U
> $$
> Además, si $\mathcal{P}'$ es una refinamiento de $\mathcal{P}$
> $$
> L_{\mathcal{P}} \leq L_{\mathcal{P}'} \quad \text{ y } \quad U_{\mathcal{P}} \geq U_{\mathcal{P}'}
> $$
> De ocurrir,
> $$
> L_{\mathcal{P}} \leq L_{\mathcal{P}'} \leq U_{\mathcal{P}'} \leq U_{\mathcal{P}}
> $$
> Bueno, ahora vamos a probarlo

> El refinamiento de una partición, siempre va a tener sumas más proximas, es decir, para cualquier $L(P)$ **refinar** implica aumentar el área, para cualquier $U(P)$, implica disminuir el área.

> [!theorem] **Proposición.** 
>
> Sea $\mathcal{P}$ una partición, y $\mathcal{P}'$ un refinamiento de $\mathcal{P}$ tenemos que
> $$
> L_{\mathcal{P}} \leq L_{\mathcal{P}'} \leq U_{\mathcal{P}'} \leq U_{\mathcal{P}}
> $$

> [!proof]- **Proof.** 
>
> Tomemos
> $$
> \begin{align}
> \mathcal{P} = \{  x_{0},\dots,x_{j},x_{j+1},\dots,x_{n} \} \\[0.5em]
> \mathcal{P'} = \{ x_{0},\dots,x_{j},y,x_{j+1},\dots,x_{n} \}
> \end{align}
> $$ 
> tenemos que sus sumas son
> $$
> L_{\mathcal{P}} = \underset{[x_{0},x_{1}]}{\min } \{ f \} (x_{1}-x_{0}) + \underset{[x_{1},x_{2}]}{\min }\{ f \}(x_{2}-x_{1}) + \dots + \underset{[x_{j},x_{j+1}]}{\min }\{ f \} (x_{j+1}-x_{j}) + \dots + \underset{[x_{n-1},x_{n}]}{\min } \{ f \} (x_{n}-x_{n-1}) \\[0.5em]
> $$
> y en especial, observamos
> $$
> \underset{[x_{j},x_{j+1}]}{\min } \{ f \} (x_{j+1}-y +y -x_{j}) = \underset{[x,x+1]}{\min } \{ f(x) \}(x_{j+1}-y) +\underset{[x_{j},x_{j+1}]}{\min }\{ f(x) \}(y-x_{j}) \tag{1}
> $$
> Además, si $[x_{j},y] \subseteq [x_{j},x_{j+1}]$ Ent. 
> $$
> \underset{[x_{j},y]}{\min \{ f \}} \geq \underset{[x_{j},x_{j+1}]}{\min\{ f \}}
> $$
> Igualmente, si $[y,x_{j+1}] \subseteq [x_{j},x_{j+1}]$ Ent.
> $$
> \underset{[y,x_{j+1}]}{\min \{ f \}}  \geq \underset{[x_{j},x_{j+1}]}{\min \{ f \}} 
> $$
> De esta manera,
> $$
> L_{\mathcal{P}} = \sum_{k\neq j}^{n-1} \underset{[x_{k},x_{k+1}]}{\min \{ f \}}(x_{k+1}-x_{k}) + \underset{[x_{j},x_{j+1}]}{\min \{ f \}} (x_{j+1}-x_{j}) 
> $$
> Por lo que en $(1)$
> $$
> (1) \leq \sum_{k\neq j}^{n-1} \underset{[x_{k},x_{j+1}]}{\min \{ f \}}(x_{k+1?}-x_{k}) \dots continuar = L_{\mathcal{P'}}
> $$
 

> De hecho, siempre se cumple que $L \leq U$, no importa que partición.

> [!theorem] **Proposición 2.** 
>
> Sean $P_{1}$ y $P_{2}$ cualesquiera particiones,
> $$
> L(P_{1}) \leq U(P_{2})
> $$

> [!proof]- **Proof.** 
>
> $P= P_{1} \cup P_{2}$. Observemos que $P$ es un refinamiento de $P_{1}$  y de $P_{2}$. Así, $L_{P_{1}}\leq L_{P}\leq U_{P}\leq U_{P_{2}}$

Ahora vamos a definir la integral de Darboux.
Después de un repaso a continuidad y continuidad uniforme...

Generalizamos la *Proposición 2* con este *Lema*:
> Cualqueir $U$ es una cota superior de conjunto de sumas inferiores, y cualqueir $L$ es una cota inferior del conjunto de sumas superiores. Y es como son reales acotados, es claro que tenemos $\inf$ y $\sup$.

> [!theorem] **Lema 1.** (Acotación de las Sumas de Darboux)
>
> Dada $f:[a,b] \to \mathbb{R}$ continua. Definimos los conjuntos de todas las sumas inferiores y superiores como:
> $$
> \mathcal{L} = \{ L(P, f) \mid P \text{ es partición de } [a,b] \}
> $$
> $$\mathcal{U} = \{ U(P, f) \mid P \text{ es partición de } [a,b] \}
> $$
> Entonces, para cualquier partición $P_2$ fija, el número real $U(P_2, f)$ es una cota superior para el conjunto $\mathcal{L}$. Es decir:
> $$
> \forall L \in \mathcal{L}, \quad L \leq U(P_2, f)
> $$
> Análogamente, para cualquier partición $P_1$ fija, el número real $L(P_1, f)$ es una cota inferior para el conjunto $\mathcal{U}$. Es decir:
> $$
> \forall U \in \mathcal{U}, \quad L(P_1, f) \leq U
> $$



> [!theorem] **Lema 2.** (Existencia de la Integral Inferior y Superior)
>
> Dada $f:[a,b] \to \mathbb{R}$ continua, existen $\sup \left\{\mathcal{L}\right\}$ e $\inf \left\{\mathcal{U}\right\}$.


> [!proof]- **Proof.**
>
> Como el conjunto $\mathcal{L}$ es no vacío y está acotado superiormente (por cualquier suma superior, según el *Lema 1*), por el Axioma del Supremo, $\sup \mathcal{L}$ existe en $\mathbb{R}$.
> Como el conjunto $\mathcal{U}$ es no vacío y está acotado inferiormente (por cualquier suma inferior, según el *Lema 1*), por el Axioma del Ínfimo, $\inf \mathcal{U}$ existe en $\mathbb{R}$.


> Una $\varepsilon$-partición es una cuadrícula tan fina que garantiza que la oscilación (*variación máxima*) de la función dentro de cada subintervalo sea estrictamente menor a $\varepsilon$.

> Es decir, una $\varepsilon$-partición garantiza que la función no "brinque" ni varíe más de $\varepsilon$ de altura dentro de ningún subintervalo.


> [!theorem] **Definición.** ($\varepsilon$-partición)
>
> Dada $f:[a,b]\to \mathbb{R}$ continua y postiva, sea $P = \{ a =x_{0},\dots,x_{n} =b \}$.
> Decimos que $P_{[a,b]}$ es una $\varepsilon$**-partición**,  si para todo $j \in  \{ 0,\dots,n-1 \}$, para cualesquiera $p,q \in [x_{j},x_{j+1}]$ se tiene que
> $$
> \lvert f(p)-f(q) \rvert <\varepsilon
> $$

Recuerda que "para cualquier" es lo mismo que "para todo", evita confusiones!

> Por el Teorema (Heine-Cantor), nuestra función $f:[a,b]\to \mathbb{R}$ continua, es unif. continua. Este hecho garantiza la existencia de las $\varepsilon$-particiones.


> [!theorem] **Lema 3.** 
>
> Para $f:[a,b]\to \mathbb{R}$ continua y positiva, existe las $\varepsilon$-particiones.

> [!proof]- **Proof.** 
>
> Como $f: [a,b] \to \mathbb{R}$ es continua, ent. es unif. continua.
> Fijando $\varepsilon$ tendremos una $\delta$ "fija" que cumple la definición. Así, consideramos, $N \in \mathbb{N}$ tal que $\frac{1}{N}< \delta$ por prop. arquimediana, y sea la partición
> $$
> P = \left\{  x_{0}= a , x_{1} = a + \frac{b-a}{N} , x_{2} = a+ \frac{2(b-a)}{N}, \dots, x_{n} =b \right\}
> $$
> Por **ejemplo.** $\displaystyle x_{1}-x_{0} = \frac{b-a}{N}< \delta$.
> Así, para cualesquiera $x,y \in [x_{0},x_{1}]$ se cumple que $\lvert x-y \rvert<\delta$ y; por continuidad uniforme, $\lvert f(x)-f(y) \rvert<\varepsilon$.
> Lo mismo pasa para cualquier subintervalo $[x_{j},x_{j+1}]. \quad \blacksquare$

> [!observation]+ **Observación.**
>
> Podemos pensar al Lema 3 como una máquina, le metes un número de tolerancia (cualquier número positivo) y la máquina te fabrica y te entrega una partición $P$ de $[a,b]$ garantizada. La garantía de esa partición es que, en cualquiera de sus subintervalos, la diferencia entre el punto más alto de la función y el punto más bajo será estrictamente menor que ese número de tolerancia que le metiste.


El Lema 3, implica el Lema 4:

> Puedes acercar $U$ y a $L$ tanto como quieras!

> [!theorem] **Lema 4.** 
>
> Si $f: [a,b] \to \mathbb{R}$ continua y postiva, ent. existen una suma inferior y una suma superior tales que
> $$
> \lvert U - L \rvert < \varepsilon, \quad \forall \varepsilon > 0
> $$

> [!proof]- **Proof.** 
>
> Sea $\displaystyle \varepsilon>0 \ \exists \delta > 0 \mid \lvert x-y \rvert<\delta \implies \lvert f(x)-f(y) \rvert< \frac{\varepsilon}{b-a}$ para cuales quiera $x,y$, por continuidad unifrome.
> Sea $P$ una partición tal que $\Delta P < \delta$ (**Recordatorio:** dado $P=\{ x_{0}=1,\dots,x_{n}=b \}$ se define $\Delta P = \underset{j}{\max}\{ x_{j+1}-x_{j} \}$).
> Con esto,
> $$
> \begin{align}
> L_{P} &= \sum_{k=0}^{n-1} \underset{[x_{k},x_{k+1}]}{\min \{ f \}} \cdot (x_{k+1}- x_{k}) \\
> U_{P}  &= \sum_{k=0}^{n-1} \underset{[x_{k},x_{k+1}]}{\max \{ f \}} (x_{k+1}-x_{k}).
> \end{align}
> $$
> Entonces, $\displaystyle U-L = \sum_{k=0}^{n-1}(x_{k+1}-x_{k})(M_{k}-m_{k})$
> donde $\displaystyle M_{k} = \underset{[x_{k},x_{k+1}]}{\max\{ f \}}$ y $\displaystyle m_{k} = \underset{[x_{k},x_{k+1}]}{\min\{ f \}}$.
> Si $P$ es una $\displaystyle \left( \frac{\varepsilon}{b-a} \right)$-partición, (la cual existe por **Lema 3**), Ent.
> $$
> \begin{align}
> U - L &\leq \sum_{k=0}^{n-1} (x_{k+1}-x_{k})\left(  \frac{\varepsilon}{b-a} \right) \\
> &= \left( \frac{\varepsilon}{b-a} \right)\left( \sum_{k=0}^{n-1} x_{k+1}-x_{k} \right) \\
> &=\frac{\varepsilon}{b-a}(b-a) = \varepsilon \tag*{$\blacksquare$}
> \end{align}
> $$
> 

**OJO!** Observamos que estos Lemas dependen por hip. que una función sea continua. 


> [!theorem] **Definición.** (Integral de Darboux)
>
> Sea $f:[a,b] \to \mathbb{R}$ continua, se define a la Integral de Darboux como el supremo del conjunto de todas las sumas inferiores $\mathcal{L}$, es decir, es decir,
> $$
> \int_{a}^{b} f(x) \, dx  = \sup_{P} \{ L(P,f) \mid P \text{ es partición de } [a,b] \}
> $$


> Para que sea una integral tiene que cumplir las propiedades: *Aditividad* e *Intercalación*. Esto hay que demostrarlo:

> [!Info]- **Nota!**
>
> **Nota.** Si $f$ es continua en $[a,b]$, también lo es en $[u,v] \quad \forall u,v \in [a,b]$.


> [!proof]- **Proof.** 
>
> **Propiedad 2. Intercalación:**
> Observamos que, $f\mid [u,v]$ (*restringido*), $P=\{ u,v \}$ es una partición de $[u,v]$. Además,
> $$
> L_{P} = (v-u)\cdot \underset{[u,v]}{\min \{ f \}} \leq \sup \{ L \} \leq U_{P}
> $$
> y tenemos
> $$
> U_{P} = (v-u)\underset{[u,v]}{\max } \{ f \}
> $$
> En conclusión, para toda $u,v \in [a,b]$ tal que $u\leq v$:
> $$
> (v-u)\min \{ f \} \leq \int_{u}^{v} f(x) \, dx \leq (v-u)\underset{[u,v]}{\max } \{ f \} \tag*{$\blacksquare$}
> $$
> 
> **Propiedad 1. Aditividad:**
> Sea $P_{1}$ una partición $[a,u]$, sea $P_{2}$ una partción $[u,v]$. Tomamos
> $$
> P = P_{1} \cup P_{2}
> $$
> la cual es partición de $[a,v]$.
> Consideramos $\displaystyle \int_{a}^{u} f(x) \, dx, \int_{u}^{v} f(x) \, dx$ o $\displaystyle \int_{a}^{v} f(x) \, dx$.
> 
> **P.D.** $\displaystyle \int_{a}^{u} f(x) \, d + \int_{u}^{v} f(x) \, dx = \int_{a}^{v} f(x) \, dx$
> Sea $\varepsilon > 0$. Por el Lema 4, sabemos que como $f$ es continua en $[a,u]$ y en $[u,v]$, existen particiones $P_1$ (de $[a,u]$) y $P_2$ (de $[u,v]$) tales que sus sumas cumplen:
> $$
> U_1 - L_1 < \frac{\varepsilon}{2} \quad \text{y} \quad U_2 - L_2 < \frac{\varepsilon}{2}
> $$
> Tomamos $P = P_1 \cup P_2$, la cual es partición de $[a,v]$.
>
> **Nota.** $L = L_{1} + L_{2}$ es suma inf de $P$. $U =U_{1}+U_{2}$ es sum sup. de $P$
> 
> Notamos que:
> $$
> \begin{align}
> L_{1} \leq \int_{a}^{u} f(x) \, dx  \tag{1} \\
> L_{2} \leq \int_{u}^{v} f(x) \, dx \tag{2}
> \end{align}
> $$
> Entonces,
> $$
> L \leq \int_{a}^{u} f(x) \, dx  + \int_{u}^{v} f(x)  \, dx \leq U
> $$
> Además, $\displaystyle L \leq \int_{a}^{v}  f(x) \, dx \leq U$
> Con esto, hacemos lo siguiente:
> $$
> \begin{align}
> L-U \leq \int_{a}^{u} f(x) \, dx +\int_{u}^{v} f(x) \, dx - \int_{a}^{v} f(x) \, dx \leq U -L
> \end{align}
> $$
> Esto quiere decir,
> $$
> \left\lvert  \int_{a}^{u} f(x) \, dx +\int_{u}^{v} f(x) \, dx - \int_{a}^{v} f(x) \, dx   \right\rvert \leq U - L 
> $$
> y tenemos
> $$
> U- L= U_{1} - L_{1} + U_{2} - L_{2} < \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon \tag{Lema 4}
> $$
> $$
> \therefore \int_{a}^{u} f(x) \, dx + \int_{u}^{v} f(x) \, dx = \int_{a}^{v} f(x) \, dx \tag*{$\blacksquare$}
> $$

> [!theorem] **Proposición.** (Propiedad 3)
>
> $$
> \int_{a}^{a} f(x) \, dx  = 0
> $$

> [!proof]- **Proof.** 
>
> Por Propiedad 1.
> $$
> \int_{a}^{a} f(x) \, dx + \int_{a}^{a} f(x) \, dx = \int_{a}^{a} f(x) \, dx 
> $$
> Esto implica,
> $$
> \int_{a}^{a} f(x) \, dx = 0 \tag*{$\blacksquare$}
> $$

