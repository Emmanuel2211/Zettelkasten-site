---
modified: 2026-10-02T23:52:47Z
title: "Diferenciación"
publish: true
type: zettel
date: "2026-06-30"
aliases:
 - Derivada
 - Diferenciacion
tags: 
 - calculus
cssclasses: 
 - romana
---
> [!tip|idea]- **Idea Intuitiva.**
>
> Intuitivamente, se representa geometr. como la pendiente de la recta tangente a la curva de la función en el punto $(a,f(a))$.

> [!theorem] **Definición.** (Derivada)
>
> La derivada de $f$ en un punto $a$, denotada $f'(a)$, de existir el limite, se define por
> $$
> f'(a) = \lim_{ h \to 0 } \frac{f(a+h)-f(a)}{h}
> $$
> De forma equivalente, expresada con el **cociente de Fermat**,
> $$
> f'(a) = \lim_{ x \to a } \frac{f(x)-f(a)}{x-a}
> $$
> En el caso de que $f'(a)$ exista en $a$, decimos que $f$ es **diferenciable** en $a$.
> El número $f'(x)$ también se le nombra **tasa de cambio**.

> La condición de que exista la derivada, si y sólo si, su límite existe y da como resultado un real finito.

> [!Info]- **Notación.** 
>
> La notacición de Leibniz $\displaystyle \frac{dy}{dx}$ es super útil para esto, en donde $y$ es nuestra función diferenciable, y $x$ la variable a derivar.


> [!theorem] **Teorema.**
>
> Sea $f: I\to \mathbb{R}$ una función en un intervalo $I$, $f$ es derivable en un punto $a \in  I$, si y sólo si, $f$ es continua en $a$.

> [!proof]- **Proof.**
>
> **P.D.** $\displaystyle \lim_{x \to a} f(x) = f(a)$
> Equivalentemente, esto es que $\displaystyle \lim_{x \to a} (f(x) - f(a)) = 0$.
> Para $x \neq a$, podemos escribir algebraicamente:$$f(x) - f(a) = \frac{f(x) - f(a)}{x - a} \cdot (x - a)$$Tomando el límite cuando $x \to a$ y usando las propiedades de los límites (el límite de un producto es el producto de los límites, siempre que ambos existan):$$\lim_{x \to a} (f(x) - f(a)) = \lim_{x \to a} \left( \frac{f(x) - f(a)}{x - a} \right) \cdot \lim_{x \to a} (x - a)$$Por hipótesis, $f$ es derivable en $a$, así que el primer límite es exactamente $f'(a)$. El segundo límite es trivialmente $0$.$$\lim_{x \to a} (f(x) - f(a)) = f'(a) \cdot 0 = 0$$Por lo tanto, $\displaystyle \lim_{x \to a} f(x) = f(a)$, lo que concluye que $f$ es continua en $a$.
> $$
> \tag*{$\blacksquare$}
> $$



> [!theorem] **Teorema.** (Algebra de Derivadas)
>
> Sean $f,g:I \to \mathbb{R}$ dos funciones derivables en un punto $x \in  I$, se cumple:
> 1. **Linealidad:** Sean $\alpha , \beta \in  \mathbb{R}$,
> $$
> (\alpha f \pm \beta g)' (x) = \alpha f'(x) \pm \beta g'(x)
> $$
> 2. **Regla de Leibniz:** (o del producto)
> $$
> (fg)'(x) = f'(x)g(x) + f(x) g'(x)
> $$
> 3. **Regla del Cociente:** Si $g(x) \neq  0$,
> $$
> \left( \frac{f}{g}  \right)' (x) = \frac{f'(x)g(x)- f(x)g'(x)}{(g(x))^{2}}
> $$



> [!theorem] **Teorema.** (Regla de la Cadena)
>
> Sean $g$ función diferenciable en $x$ y $f$ función diferenciable en $g(x)$. Entonces la función compuesta $h(x) = f(g(x))$ es derivable en $x$, y su derivada está dada por:
> $$
> h'(x) = f'(g(x)) \cdot g'(x)
> $$



> [!theorem] **Teorema.** (Derivada de una Función Inversa)
>
> Sea $f:I\to J$ continua y estrictamente monótona (por lo que admite una inversa $f^{-1}:J \to  I$).
> Si $f$ es derivable en un punto $a \in  I$ y $f'(a) \neq 0$, entonces su función inversa $f^{-1}$ es derivable en el punto $b = f(a)$, y su derivada es
> $$
> (f^{-1})'(b) = \frac{1}{f'(a)}
> $$
> Es decir, sea $x \in \operatorname{Dom} \{f^{-1}\}$,
> $$
> (f^{-1})'(x) = \frac{1}{f'(f^{-1}(x))}
> $$


> [!theorem] **Teorema.** (Derivada de la Exponencial General)
>
> Sea $a >0$ una constante real. La función $f(x) = a^{x}$ es derivable en todo $\mathbb{R}$ y su derivada es
> $$
> \frac{d}{dx} (a^{x}) = a^{x} \log \left(a\right)
> $$ 
> De forma más general, sea $g(x)$ derivable en $\mathbb{R}$.
> $$
> \frac{d}{dx} \left[a^{g(x)}\right] = a^{g(x)}g'(x)\log \left(a\right)
> $$

> [!proof]- **Proof.**
>
> Utilizaremos la definición axiomática de la potencia de base general: $a^x = \exp(x \log(a))$, usando regla de la cadena.
> $$
> \frac{d}{dx} \exp(x \log(a)) = \exp(x \log(a)) \cdot \frac{d}{dx}[x \log(a)]
> $$
> Como $\log(a)$ es una constante, la derivada de $x \log(a)$ es simplemente $\log(a)$.$$\frac{d}{dx} (a^x) = \exp(x \log(a)) \cdot \log(a)$$Regresando la expresión a su notación original de base $a$:$$\frac{d}{dx} (a^x) = a^x \log(a)$$
> $$
> \tag*{$\blacksquare$}
> $$
> La forma general es análoga.

> [!theorem] **Teorema.** (Regla de la Potencia Generalizada)
>
> Sea $a \in  \mathbb{R}$. Para todo $x > 0$, la función $f(x) = x^{a}$ es derivable y se tiene
> $$
> \frac{d}{dx} \left(x^{a}  \right) = ax^{a-1}
> $$
> Generalizando esto, sea $g(x)$ derivable en $\mathbb{R}$,
> $$
> \frac{d}{dx}\left[g(x)^{a}  \right] = a g(x)^{a-1} g'(x)
> $$


> [!proof]- **Proof.**
>
> Nuevamente, invocamos la definición formal de la potencia: $x^a = \exp(a \log(x))$.Aplicamos la Regla de la Cadena. La derivada de la función interna es $\frac{d}{dx}[a \log(x)] = a \cdot \frac{1}{x}$.$$\frac{d}{dx} \exp(a \log(x)) = \exp(a \log(x)) \cdot \left( \frac{a}{x} \right)$$Sustituimos $\exp(a \log(x))$ de regreso a su forma original $x^a$:$$\frac{d}{dx} (x^a) = x^a \cdot \frac{a}{x}$$Usando las leyes de los exponentes (que ya demostraste en el Ejercicio 3), $\frac{x^a}{x^1} = x^{a-1}$. Por lo tanto:$$\frac{d}{dx} (x^a) = a x^{a-1}$$
> $$
> \tag*{$\blacksquare$}
> $$

> [!example]- Aplicación: Diferenciación Implicita
>
> Dada la ecuación a resolver $x^{2} + y^{2} = r^{2}$ de la circunferencia. Si queremos resolver $y$ en terminos de $x$, sin despejar. Dado que planteamos que $y$ es función de $x$, podemos asumir que $y'$ existe y diferenciamos los dos lados de la ecuación para obtener
> $$
> 2x + 2yy' = 0 \implies  y' = \frac{-x}{y} \quad y \neq 0
> $$
> De esta forma, definimos $y$ **implicitamente** como la función de $x$.
>


