---
modified: 2026-11-01T19:48:08Z
publish: true
type: zettel
date: "2026-09-01"
status: undone
aliases:
tags:
 - calculus
cssclasses:
 - romana
---
# Aplicaciones de la Integral $\displaystyle \int$

Dadas dos funciones $f,g: [a,b] \to \mathbb{R}$ como se muestran:

imagen de dos funcioneslol

¿Cómo calcular el área determinada por $f$ y $g$ en $[a,b]$?
Por medio de $\displaystyle A_{f,g} = \int_{a}^{b} (f(x) - g(x)) \, dx$.

¿Y si ocurre que $g > f$? $\displaystyle A_{f,g} = \int_{a}^{b} (g(x) -f(x)) \, dx$

Pero, ¿y si?


En el caso de la imagen 2:

$$
\int_{a}^{b} \left| f(x) - g(x)\right| \, dx = \int_{a}^{w} (f-g)(x) \, dx + \int_{w}^{y} (g-f)(x) \, dx + \int_{y}^{b} (f-g)(x) \, dx = A_{f,g}
$$
donde $w,y$ son los puntos de intersección entre $f$ y $g$.

Veamos un ejemplo

> [!example]- Ejemplo.
> $\square$ Calcula el área comprendida entre $f(x) = \sqrt{1+x^{2}} + 2x - x^{2}$ y $g(x) = \sqrt{1+x^{3}} - 3x + 2$.
>
> Para esto, calculamos los puntos de intersección entre $f$ y $g$.
> Y solo calcularemos el área del intervalo de tales puntos, pues más allá, el área es indefinida (infinita).
> ...
> para quitar un valor absoluto hay que ver que la funcion es positiva en nuestro intervalo! lo cual pasa en esta integral!


> [!example]- Ejemplo. (Área de un Círculo)
> $\square$ Calcular el área del Círculo!
> **PD.** $A_{0} = \pi r^{2}$
>
> $$
> x^{2} + y ^{2} = r^{2} \implies  y = \pm \sqrt{r^{2} - x^{2}}
> $$
> Entonces definimos $f(x) = \sqrt{r^{2} - x^{2}}$ y $g(x) = -\sqrt{r^{2} - x^{2}}$
> y vemos que estan definidas como $f,g: [-r,r] \to \mathbb{R}$.
> Así,
> $$
> \begin{align}
> A_{0} = \int_{-r}^{r} (f(x) - g(x)) \, dx &= \int_{-r}^{r} 2\sqrt{r^{2}-x^{2}} \, dx \\[0.5em]
>  &= \dots
> \end{align}
> $$


> [!example]- Ejemplo. 
> $\square$ Calcular el área encerrada por $f(x) = r\cos(x)$.
>
> Observamos la grafica de $r\cos(x)$ en $x= 0$ y $x = 2\pi$, para terminar con las siguientes integrales.
> $$
> \begin{align}
> &= \int_{0}^{\frac{\pi}{2}} \left| \cos(x) \right| \, dx + \int_{\frac{\pi}{2}}^{\frac{3\pi}{2}} \left| \cos(x) \right| \, dx + \int_{\frac{3\pi}{2}}^{2\pi} \left| \cos(x) \right| \, dx\\[0.5em]
> &= \int_{0}^{\frac{\pi}{2}} \cos(x)  \, dx + \int_{\frac{\pi}{2}}^{\frac{3\pi}{2}} - \cos(x) \, dx + \int_{\frac{3\pi}{2}}^{2\pi}  \cos(x)  \, dx \\[0.5em]
> &= \sin(x)\bigg|_{0}^{\frac{\pi}{2}} + \left( -\sin(x)\bigg|_{\frac{\pi}{2}}^{\frac{3\pi}{2}} \right) + \sin(x)\bigg|_{\frac{3\pi}{2}}^{2\pi} = 4
> \end{align}
> $$

> [!example]+ Ejemplo. (Área de un sector del círculo)
> Area de triangulo + inegral del intervalo de $r\cos(\theta )$ a $r$
> Después de visualizar una gráfica para identificar las áreas a calcular, determinamos que necesitamos al suma de, un triángulo una parte del área de la circunferencia:
> $$
> \begin{align}
>   A_{1} &= \frac{r\cos(\theta)r\sin(\theta)}{2}\\[0.5em]
>   A_{2} &= \int_{r\cos(\theta)}^{r} \sqrt{r^{2}-x^{2}} \, dx
> \end{align}
> $$
> Resolvemos la integral, sust. trig.
> $$
> A_{2} = -r^{2}\int_{\theta}^{0} \sin(\alpha) \, d\alpha = \frac{r^{2}}{2}\cdot \left( \theta - \frac{\sin(2\theta)}{2}  \right)
> $$
> Así, el área del sector es: $\displaystyle A_{\mathcal{S}} = A_{1} + A_{2}$
> $$
> \boxed{A_{\mathcal{S}} = \frac{r^{2}\theta}{2}}
> $$

# Cambio de Coordenadas
Los cambios de coordenadas son transformaciones $T: \mathbb{R}^{2} \to  \mathbb{R}^{2}$ continuas y diferenciables ("*bonitas*").



## Coordenadas polares
Intuitivamente sabemos que una coordenada polar, es algo de la forma:
$$
x = r\cos(\theta)
$$

Voy a tomar la transformación,
$$
T(\theta,\rho) = (\rho \cos(\theta), \rho \sin(\theta))
$$

Nos estamos moviendo, ahora, con radios $\rho$ y ángulos $\theta$, sobre un **radar**.


![[IMG_6971.jpeg|416|center|432]]
El objetivo ahora es calcular el área de funciones que tengan como parámetro un ángulo $\theta$ (*coordenadas polares*).

![[IMG_6972.jpeg|center|627]]

El área de $f(\theta)$ se encuentra entre la pizza amarilla y la roja, lo que nos lleva a:
$$
\min \left\{f\right\}^{2} \frac{(\theta_{2} - \theta_{1})}{2} \leq A_{f(\theta)}\leq  \max \left\{f\right\}^{2} \frac{(\theta_{2}-\theta_{1})}{2}
$$
Ent.
$$
L\left(\frac{f^{2}(\theta)}{2}\right) = \frac{\min \left\{f(\theta)\right\}^{2} }{2}(\theta_{2}-\theta_{1}) \leq A_{f(\theta)} \leq  \frac{\min \left\{f(\theta)\right\}^{2} }{2}(\theta_{2}-\theta_{1}) = U\left( \frac{f^{2}(\theta)}{2}  \right)
$$



<div style="display: flex; gap: 20px; align-items: center;">
  <div style="flex: 1;">
    Si retomamos nuestra pizza, entonces tenemos que considerar una partición de tal intervalo.
    Al ser
    <span class="math display">
        A_{f(x)}
    </span>
    acotada por sumas de Riemman asociadas a la función
    <span class="math display">
        \displaystyle \frac{f^{2}(\theta)}{2}
    </span>
     definimos el área de una como en coordenadas polares en
    <span class="math display">
        [\theta_{1},\theta_{2}]
    </span>
     por:
    <div style="text-align: center; width: 100%; margin: 15px 0;">
      <span class="math display">
          \boxed{\int_{\theta_{1}}^{\theta_{2}} \frac{f^{2}(\theta)}{2} \, d\theta}
      </span>
    </div>
  </div>
  <div style="flex: 1; text-align: center;"> <!-- 💡 Opcional: Centrar también la imagen en su columna -->
      <img src="images/IMG_6973.jpeg" width="160">
  </div>
</div>

> [!example]- Ejemplo.
> $\square$ Dibuja la curva generada por $\rho = 2 \cos(2\theta)$ y determina el área que encierra.
>
> Así, el área encerrado por la curva es $\displaystyle A = \left( \frac{\pi}{4} + \frac{1}{2}  \right)$




Es el tema de métodos de integralción pero con otros formulasos.




