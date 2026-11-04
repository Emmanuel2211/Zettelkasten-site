---
modified: 2026-10-02T23:15:44Z
title: "Continuidad Uniforme"
publish: true
type: zettel
status: 
links: 
tags: []
date: "2026-03-26"
aliases: [ "uniform continuity" ]
cssclasses: romana
materia: 
---
> [!theorem] **Definición.** (Alcance de una Función)
> Sea $f: [a,b] \to \mathbb{R}$, llamamos el **alcance** u **ocilación** de $f$ a
> $$
> \max \left\{f\right\} - \min \left\{f\right\} 
> $$



A diferencia de la continuidad, la continuidad uniforme no tiene punto fijo $x_{0}$, su radio $\delta$ no depende del punto $x$.

> En la continuidad uniforme, existe un solo $\delta$ universal que funciona para toda la función al mismo tiempo.

> [!theorem] **Definición.** (Continuidad Uniforme)
> $f$ es **uniformemente continua** en $[a,b]$ si
> $$
> \forall  \varepsilon>0 \ \exists \delta >0 \ \text{ tal que } \ \lvert x-y \rvert <\delta \implies \lvert f(x)-f(y) \rvert < \varepsilon
> $$

> Veremos que si una función $f$ es continua $\implies$ es unif. continua. Pero el reciproco no es verdad, veamos un ejemplo.

> [!example]- **Ejemplo** ($f(x) = x^{2}$)
> Tomemos $f(x) = x^{2}$, $f:\mathbb{R}\to \mathbb{R}$. Probamos que $f$ es continua en $x_{0}$:
> 
> Sea $\varepsilon>0$. Observamos que $\lvert f(x)-f(x_{0}) \rvert  = \lvert x^{2} - x_{0}^{2} \rvert = \lvert x+x_{0} \rvert\lvert x-x_{0} \rvert$.
> 
> Si inicialmente tomamos $\lvert x-x_{0} \rvert<1$ por desigualdad del triangulo
> $$
> \lvert x \rvert \leq 1 + \lvert x_{0} \rvert 
> $$
> De esta forma,
> $$
> \begin{align}
> \lvert f(x)-f(x_{0}) \rvert  = \lvert x+x_{0} \rvert \lvert x-x_{0} \rvert &\leq (\lvert x \rvert +\lvert x_{0} \rvert )(\lvert x-x_{0} \rvert ) \\[.5em]
> &\leq (1 + \lvert x_{0} \rvert +\lvert x_{0} \rvert )(\lvert x-x_{0} \rvert ) \\[.5em]
> &= (1+2\lvert x_{0} \rvert )(\lvert x-x_{0} \rvert )
> \end{align}
> $$
> Si tomamos $\lvert x-x_{0} \rvert< \frac{\varepsilon}{1 + 2\lvert x_{0} \rvert}$
> $$
> \begin{align}
> \implies \lvert f(x)-f(x_{0}) \rvert &\leq (1+2\lvert x_{0} \rvert )(\lvert x-x_{0} \rvert ) \\[.5em]
> &\leq (1+2\lvert x_{0} \rvert ) \cdot \frac{\varepsilon}{(1+2\lvert x_{0} \rvert )} = \varepsilon
> \end{align}
> $$
> El valor que srive es $\displaystyle \delta = \min\left\{  1, \frac{\varepsilon}{1+2\lvert x_{0} \rvert}  \right\}$.
> Dado que existe una dependencia clara, $\delta = \delta(x_{0})$, por def. **no** es uniformemente continua.

> [!theorem] **Teorema.** 
> Si $f$ es uniformemente continua, entonces es continua.

El reciproco no siempre implica continuidad uniforme, ¿o sí? Hay un caso en el cual se cumple: si el $\operatorname{dom}f$ es un conjunto compacto (*cerrado y acotado*), como $[a,b]$.

> [!theorem] **Teorema.** (Heine-Cantor)
> Si $f:[a,b]\to \mathbb{R}$ es continua, Ent. es **uniformemente continua**.

> [!proof]- **Proof.** 
> Supongamos que $f$ no es unif. cont. Esto es,
> $$
> \neg(\forall \varepsilon > 0 \ \exists  \delta >0 \text{ tal que } \lvert x-y \rvert < \delta \implies \lvert f(x)-f(y) \rvert < \varepsilon)
> $$
> Es decir,
> $$
> \exists  \hat{\varepsilon} > 0 \text{ tal que } \forall \delta > 0 \ \exists  x,y \text{ tales que } \lvert x-y \rvert <\delta \implies \lvert f(x)-f(y) \rvert \geq \varepsilon
> $$
> Para $\delta_{1} = 1 \ \exists x_{1},y_{1} \mid \lvert x_{1}-y_{1} \rvert< \delta_{1} \implies \lvert f(x_{1})-f(y_{1}) \rvert > \hat{\varepsilon}$
> Para $\delta_{2} = \frac{1}{2} \ \exists x_{2},y_{2} \mid \lvert x_{2}-y_{2}  \rvert< \delta_{2} \implies \lvert f(x_{2})-f(y_{2}) \rvert> \hat{\varepsilon}$ 
> Para $\delta_{n} = \frac{1}{n} \ \exists x_{n},y_{n} \mid \lvert x_{n}-y_{n} \rvert< \frac{1}{n} \implies \lvert f(x_{n})-f(y_{n})  \rvert  > \hat{\varepsilon}$
> 
> Tenga dos sucesiones $\{ x_{n} \}, \{ y_{n} \}$, dado que $\{ x_{n} \}\subseteq [a,b]$, por el **Teorema de Bolzano**, $\exists \{ x_{n_{k}} \}$ subsucesión de $\{ x_{n} \}$ convergente $x_{n_{k}} \overset{n_{k}\to \infty}{\longrightarrow} x_{0}$.
> 
> Tomemos la subsucesión respectiva $\{ y_{n_{k}} \}$. Probemos que $y_{n_{k}}\overset{n_{k}\to \infty}{\longrightarrow} x_{0}$..
> $$
> \begin{align}
> \lvert y_{n_{k}}-x_{0} \rvert &\leq \lvert y_{n_{k}}-x_{n_{k}} \rvert +\lvert x_{n_{k}}-x_{0} \rvert  \\
> &\leq \frac{1}{n_{k}}+\varepsilon' \tag{por Def. delta} \\
> \end{align}
> $$
> Así, tenemos que $\displaystyle \begin{cases}x_{n_{k}}\longrightarrow x_{0} \\  y_{n_{k}}\longrightarrow x_{0}\end{cases}$
> Como $f$ es continua (hip.), se tiene que 
> $$
> \lim_{ n_{k} \to \infty } f(x_{n_{k}}) = f(x_{0}) = \lim_{ n_{k} \to \infty } f(y_{n_{k}})
> $$
> Utilizando esto, observamos que
> $$
> \lvert f(x_{n_{k}})- f(y_{n_{k}}) \rvert \leq \lvert f(x_{n_{k}})-f(x_{0}) \rvert + \lvert f(x_{0})-f(y_{n_{k}}) \rvert 
> $$
> Para $n_{k}$ suficientemente grande, $\displaystyle \begin{cases} \lvert f(n_{k}) - f(x_{0}) \rvert \\  \lvert f(y_{n_{k}})-f(x_{0}) \rvert \end{cases}$ $\displaystyle < \frac{\hat{\varepsilon}}{2}$
> Pero esto nos lleva a una contradicción!
> $$
> \therefore f \text{ es unif. continua} \tag*{$\blacksquare$}
> $$



---

---

---


---

La diferencia con la definición de continuidad, es que $\delta= \delta(f,\varepsilon,x_{0})$, ya no depende de $x_{0}$. Es decir, solo $\delta(f,\varepsilon)$.

> [!theorem] **Def.** (Uniformly Continuous)
> Sea $f$ definida en $A \subset \mathbb{R}$. Decimos que $f$ es **uniformemente continua** (en $A$) si $\forall \varepsilon>0$ $\exists \delta >0$ tal que si $x,y \in A$ y $\lvert x-y \rvert<\delta$, entonces $\lvert f(x)-f(y) \rvert<\varepsilon$.
> 

Evalúa globalmente, en todo el dominio, y no solo en un punto como la continuidad. Esto resulta en proponer un $\delta$ que función para toda la función por igual.
![[Pasted image 20260507154753.png|center]]
**Intuitivamente:** Imagina un cuadro que se desliza por toda la función.

> [!theorem] **Teorema.** 
> Si $f$ es uniformemente continua en un intervalo acotado $I$, entonces $f$ esta acotado en $I$.

> [!proof]- **Proof.** 
> Suponemos que $I$ es alguno de $(a,b),[a,b],(a,b],[a,b)$. Para revisar si $f$ está acotada, elegimos $\delta$ tal que $\lvert f(x)-f(y) \rvert<1$ siempre que $x,y \in I$ y $\lvert x-y \rvert<\delta$. Existe un conjunto finito $a = x_{0}<x_{1}<\dots<x_{n} = b$ tal que $\lvert  x_{i}-x_{i-1} \rvert<\delta$ para $i = 1,\dots,n$. Nuestra definición de $\delta$ implica que $f$ está acotada en cada uno de los intervalos $[x_{i-1},x_{i}]\cap I$. Sea
> $$
> \begin{align}
> m_{i} &= \inf \{ f(x):x_{i-1}\leq x\leq x_{i}, x \in I \} \\[0.5em]
> M_{i} &= \sup \{ f(x):x_{i-1}\leq x\leq x_{i}, x \in I \} \\[0.5em]
> m &= \min \{ m_{1},\dots,m_{n} \} \\[0.5em]
> M &= \max \{ M_{1},\dots ,M_{n} \}
> \end{align}
> $$
> Entonces, para todo $x \in I$, $m\leq f(x) \leq M$, y $f$ esta acotada en $I$.
> $$
> \tag*{$\blacksquare$}
> $$

---

Este resultado es importante para un criterio de integrabilidad.

> [!theorem] **Teorema.** 
> Sea $f$ continua en $[a,b]$. Entonces $f$ es uniformemente continua (en $[a,b]$).

> [!proof]- **Proof.** 
> Our proof invokes a compactness argument. (topoligia elemental)
