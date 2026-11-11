---
modified: 2026-10-06T21:46:12Z
title: "Funciones de Trigonometricas"
publish: true
type: zettel
date: "2026-09-05"
status: undone
aliases:
tags:
 - calculus
cssclasses: 
 - romana
---
> [!theorem] **Teorema.** (Propiedades Trigonométricas)
>
> $$
> \begin{align}
> \sin ^{2}\theta + \cos ^{2}\theta = 1 \\[1em]
> \tan ^{2}\theta + 1 = \sec ^{2}\theta \\[1em]
> 1+\cot ^{2} \theta = \csc ^{2}\theta
> \end{align}
> $$
> Suma, ángulo doble
>
> $$
> \sin(\alpha\pm\beta)=\sin(\alpha)\cos(\beta)\pm\cos(\alpha)\sin(\beta)
> $$
> $$
> \cos(\alpha\pm\beta)=\cos(\alpha)\cos(\beta)\mp\sin(\alpha)\sin(\beta)
> $$
> $$
> \tan(\alpha\pm\beta)={\frac{\tan(\alpha)\pm\tan(\beta)}{1\mp\tan(\alpha)\tan(\beta)}}
> $$
> $$
> \begin{align}
> \sin(2\theta)&=2\sin(\theta)\cos(\theta) \\[0.5em]
> \cos(2\theta) &= \cos^{2}(\theta)-\sin^{2}(\theta)  \\[0.5em]
> \tan(2\theta)&=\frac{2\tan(\theta)}{1-\tan^{2}(\theta)}
> \end{align}
> $$
> Ángulo mitad y potencias
> $$
> \begin{align}
>   \sin\left(\frac{x}{2}  \right) &= \pm \sqrt{\frac{1 - \cos(x)}{2}} \\[0.5em]
>   \cos\left(\frac{x}{2}  \right)&= \pm \sqrt{\frac{1+\cos(x)}{2}} \\[0.5em]
>   \tan\left(\frac{x}{2}  \right) &= \pm \sqrt{\frac{1 - \cos(x)}{1+\cos(x)}} \\[0.5em]
> \sin^{2}(x) &=  \frac{1-\cos(2x)}{2} \\[0.5em]
> \end{align}
> $$
> Paridad:
> $$
> \begin{align}
>   \sin(-x) &= -\sin(x) \\[0.5em]
>   \cos(-x) &= \cos(x) \\[0.5em]
>   \tan(-x) &= -\tan(x)
> \end{align}
> $$
> Desigualdad fundamenta:
> $$
> 0 < \cos(x) < \frac{\sin(x)}{x} < \frac{1}{\cos(x)}
> $$
> Productos a Sumas:
> $$
> \begin{align}
> \sin(x)\sin(y) &= \frac{\cos(x-y)-\cos(x+y)}{2} \\[0.5em]
> \cos(x)\cos(y) &=  \frac{\cos(x+y)+\cos(x-y)}{2} \\[0.5em]
> \sin(x)\cos(y) &= \frac{\sin(x+y)+\sin(x-y)}{2}
> \end{align}
> $$
> Sustitución de Weierstrass: Sea $\displaystyle z = \tan\left(\frac{x}{2}\right)$
> $$
> \sin(x) = \frac{2z}{1 + z^{2}} \quad \quad \cos(x) = \frac{1-x^{2}}{1+x^{2}} \quad \quad dx = \frac{2dz}{1 + z^{2}}
> $$
> $$
> \tan\left(\frac{x}{2}  \right) = \csc(x) - \cot(x)
> $$


> [!theorem] **Teorema.** (Derivadas)
>
> $$
> \begin{align}
>   \frac{d}{dx}\sin(x) &= \cos(x) \\[0.5em]
>   \frac{d}{dx}\cos(x) &= -\sin(x) \\[0.5em]
>   \frac{d}{dx}\tan(x) &= \sec^{2}(x) \\[0.5em]
>   \frac{d}{dx}\cot(x)&= -\csc^{2}(x)\\[0.5em]
>   \frac{d}{dx}\sec(x) &= \sec(x)\tan(x) \\[0.5em]
>   \frac{d}{dx}\csc(x) &= -\csc(x)\cot(x)
> \end{align}
> $$

![[Pasted image 20261002115559.png|240]]![[Pasted image 20261002115619.png|219]]![[Pasted image 20261002115630.png|225]]

![[Pasted image 20261002115719.png|226]]![[Pasted image 20261002115740.png|238]]![[Pasted image 20261002115754.png|236]]

### Inversas Trigonométricas

> [!theorem] **Teorema.** (Derivadas)
>
> $$
> \begin{align}
>   \frac{d}{dx}\sin^{-1}(x) &= \frac{1}{\sqrt{1-x^{2}}} \\[0.5em]
>   \frac{d}{dx}\cos^{-1}(x) &= - \frac{1}{\sqrt{1-x^{2}}} \\[0.5em]
>   \frac{d}{dx}\tan^{-1}(x) &= \frac{1}{1+x^{2}} \\[0.5em]
>   \frac{d}{dx}\cot^{-1}(x) &= -\frac{1}{1+x^{2}} \\[0.5em]
>   \frac{d}{dx}\sec^{-1}(x) &= \frac{1}{x \sqrt{x^{2} - 1}} \\[0.5em]
>   \frac{d}{dx}\csc^{-1}(x) &=  - \frac{1}{x \sqrt{x^{2} - 1}}
> \end{align}
> $$


![[Pasted image 20261002115234.png|167]]![[Pasted image 20261002115246.png|177]]![[Pasted image 20261002115320.png|165]]



![[Pasted image 20261002114843.png|189]] ![[Pasted image 20261002114905.png|187]]![[Pasted image 20261002115030.png|189]]


## Círculo Unitario

![[Pasted image 20261006154553.png|center|383]]

#### Otras Entradas Relacionadas
- [[Funciones Hiperbolicas]]

---



> [!theorem] **Definición.** (Seno y Coseno)
>
> Sea $x \in \mathbb{R}$, definimos las funciones seno y coseno mediante las siguientes series, las cuales son absolutamente convergentes en todo $\mathbb{R}$.
> $$
> \begin{align}
> \sin(x) &= \sum_{n=0}^{\infty} \frac{(-1)^{n}}{(2n+1)!}x^{2n+1} = x - \frac{x^{3}}{3!} + \frac{x^{5}}{5!} -\dots \\[0.5em]
> \cos(x) &=  \sum_{n=0}^{\infty} \frac{(-1)^{n}}{(2n)!}x^{2n} = 1 - \frac{x^{2}}{2!} + \frac{x^{4}}{4!} - \dots
> \end{align}
> $$



> [!theorem] **Teorema.** (Propiedades)
>
> 1. Derivadas: $\displaystyle \frac{d}{dx} \cos(x) = -\sin (x)$ y $\displaystyle \frac{d}{dx} \sin(x) = \cos(x)$.
> 2. $\sin ^{2}(x) + \cos ^{2}(x) = 1$.
> 


> [!theorem] **Definición.** ($\pi$)
>
> El número $\pi$ se define como el doble de la raíz positiva más pequeña de la función coseno. Es decir, $\displaystyle \frac{\pi}{2}$ es el único real en $(0,2)$ que satisface:
> $$
> \cos\left(\frac{\pi}{2}\right) = 0
> $$


> [!theorem] **Teorema.** (Limites de Trigonometricas)
>
> 1. 
> $$
> \lim_{ x \to 0 } \frac{\sin(x)}{x} = 1
> $$



> [!proof]- **Proof.**
>
> Por definición, para todo $x \neq 0$:
> $$
> \sin(x) = \sum_{n=0}^{\infty} \frac{(-1)^n}{(2n+1)!} x^{2n+1} = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \dots
> $$
> Dividimos toda la serie entre $x$:
> $$
> \frac{\sin(x)}{x} = 1 - \frac{x^2}{3!} + \frac{x^4}{5!} - \frac{x^6}{7!} + \dots
> $$
> Queremos acotar el error de aproximación. Analizamos la diferencia:
> $$
> \left\vert{} \frac{\sin(x)}{x} - 1 \right\vert{} = \left\vert{} -\frac{x^2}{3!} + \frac{x^4}{5!} - \frac{x^6}{7!} + \dots \right\vert{}
> $$
> Para valores pequeños de $x$ (por ejemplo, $0 < \vert{}x\vert{} < 1$), esta es una serie alternante convergente donde los términos decrecen en valor absoluto. Por el Teorema de Estimación de Series Alternantes (o el residuo de Taylor), el valor absoluto de la suma completa está acotado por el valor absoluto del primer término:
> $$
> \left\vert{} \frac{\sin(x)}{x} - 1 \right\vert{} \le \left\vert{} -\frac{x^2}{3!} \right\vert{} = \frac{x^2}{6}
> $$
> Ahora, construimos la prueba formal con límites $\varepsilon-\delta$:Sea $\varepsilon > 0$. Elegimos $\delta = \sqrt{6\varepsilon}$ (y exigimos $\delta \le 1$).Si $0 < \vert{}x\vert{} < \delta$, entonces:
> $$
> \left\vert{} \frac{\sin(x)}{x} - 1 \right\vert{} \le \frac{x^2}{6} < \frac{\delta^2}{6} \le \frac{6\varepsilon}{6} = \varepsilon
> $$
> Como para todo $\varepsilon > 0$ existe un $\delta > 0$ que satisface la condición, por definición, el límite es $1$.
> $$
> \tag*{$\blacksquare$}
> $$
