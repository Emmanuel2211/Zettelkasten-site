---
modified: 2026-11-13T23:34:20Z
title: "Integrales Impropias"
publish: true
type: zettel
date: "2026-10-01"
status: seed
aliases:
tags:
 - calculus
cssclasses: 
 - romana
---
> [!theorem] **Definición 1.** (Integral Impropia de 1ra Clase)
>
> Sea $f: [a,\infty] \to \mathbb{R}$ tal que $f$ es integrable en $[a,b]$ para toda $b>a$. Definimos como
> $$
> \int_{a}^{\infty} f(x) \, dx = \lim_{b\to \infty } \int_{a}^{b} f(x) \, dx
> $$
> En caso de existir decimos que $\int_{a}^{\infty} f(x) \, dx$ es una **integral impropia de primera clase**.
>

> [!example]- Ejemplo.
>
> Calculamos: $\displaystyle \int_{a}^{\infty} \frac{1}{1+x^{2}} \, dx = ?$
> $$
> \int_{a}^{b} \frac{1}{1+x^{2}} \, dx  = \tan^{-1}(x) \bigg|_{0}^{b} = \tan^{-1}(b) - \tan^{-1}(0) = \tan^{-1}(b)
> $$
> Con esto. $\displaystyle \int_{0}^{\infty} \frac{dx}{1+x^{2}} = \lim_{b \to \infty} \tan^{-1}(b) = \frac{\pi}{2}$


> [!Info]- **Notese!** 
>
> Dado lo anterior, el valor de $\displaystyle \pi = 2 \int_{a}^{\infty} \frac{1}{1+x^{2}} \, dx$


> [!theorem] **Definición 2.** (Integral Impropia de 2da Clase)
>
> Sea $f: [a,b] \to \mathbb{R}$ excepto quizá en $b$. Supongamos que $f$ es integrable en $[a,c]$ para toda $c \in  (a,b)$. Entonces definimos
> $$
> \int_{a}^{b} f(x) \, dx = \lim_{c \to b^{-}} \int_{a}^{c} f(x) \, dx
> $$
> De existir, decimos que $\int_{a}^{b} f(x) \, dx$ es una **integral impropia de segunda clase**.
>

> [!observation]+ **Observación.**
>
> Analogamente, sea $f:[a,b] \to \mathbb{R}$ excepto quizá en $a$. Sup. $f$ integrable en $[c,b] \quad \forall c \in  (a,b)$. Entonces $\displaystyle \int_{a}^{b} f(x) \, dx = \lim_{c \to a^{+}} \int_{a}^{b} f(x) \, dx$.
>



> [!example]- Ejemplo.
>
> $\displaystyle \square \int_{0}^{1} \frac{1}{\sqrt{x}} \, dx = \lim_{c \to 0^{+}} \int_{c}^{1} \frac{1}{\sqrt{x}} \, dx = \lim_{c \to 0^{+}} 2\sqrt{x} \ \bigg|_{c}^{1}$. Así, $\displaystyle \lim_{c \to 0^{+}} (2\sqrt{1} - 2\sqrt{c}) = 2$


> [!theorem] **Definición 3.**
>
> Supongamos que $f: \mathbb{R} \to \mathbb{R}$ es tal que $f$ es integrable para todo intervalo cerrado y acotado $[a,b] \subseteq \mathbb{R}$, sea $c \in \mathbb{R}$, definimos
> $$
> \int_{-\infty}^{\infty} f(x) \, dx = \int_{-\infty}^{c} f(x) \, dx + \int_{c}^{\infty} f(x) \, dx
> $$
> Si estás dos últimas integrales existen para $c \in  (a,b)$

Observece que la *Def. 3* es una *integral impropia de 1ra clase*.

> [!theorem] **Definición 4.** (Valor Principal de Cauchy)
>
> Sea $f:\mathbb{R}\to \mathbb{R}$ integrable en todo $[a,b] \subseteq \mathbb{R}$. Definimos el **valor principal de Cauchy** como
> $$
> \lim_{c \to \infty} \int_{-c}^{c} f(x) \, dx
> $$

> [!observation]+ **Observación.**
>
> 1. La definción 3 y 4 pueden confundirse.
> $$
> \int_{-\infty}^{\infty} f(x) \, dx \neq  \lim_{c \to \infty} \int_{-c}^{c} f(x) \, dx
> $$
>
> 2. Puede existir el valor principal de Cauchy pero no existir la integral impropia $\int_{-\infty}^{\infty} f(x) \, dx$.
>
> > [!example]- Ejemplo. (Obs. $ii$)
> >
> > $f(x) = x$, $f: \mathbb{R}\to \mathbb{R}$
> > Def 4: $\displaystyle \int_{-c}^{c} x \, dx = \frac{x^{2}}{2}\bigg|_{-c}^{c} = \frac{c^{2}}{2} - \frac{c^{2}}{2} = 0 \overset{c \to  \infty}{\longrightarrow} 0$
> > Def 3: $\displaystyle \int_{0}^{c} x \, dx = \frac{x^{2}}{2} \ \bigg|_{0}^{c} = \frac{c^{2}}{2} \overset{c\to \infty}{\longrightarrow} \infty$
>
> 3. El valor principal de Cauchy es simetrica!


> [!theorem] **Definición 5.**
>
> Sea $f: [a,b] \to  \mathbb{R}$ excepto quizá en $c \in  (a,b)$. Definimos
> $$
> \int_{a}^{b} f(x) \, dx = \int_{a}^{c} f(x) \, dx + \int_{c}^{b} f(x) \, dx
> $$
> Si estás dos últimas integrales existe. En este caso $\int_{a}^{b} f(x) \, dx$ **también es una integral impropia de 2da clase**.



