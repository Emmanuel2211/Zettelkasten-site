---
modified: 2026-11-03T18:42:59Z
title: "Tarea III"
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
> [!example]+ Ejemplo. 

5. Un producto de tejas metálicas quiere producri paneles de 28 pulgadas de largo a partir de placas metálicas planas. Las tejas tamarán una forma siniodal descrita por
$y = \sin\left( \frac{\pi}{7}x \right)$. Encuentra el largo de una placa necesaria para hacer la teja especificada.


![[Tarea III Calculo II 20261103113002.jpg|center|400]]

Y aplicamos el formulazo de la longitud de la grafica de $y$,
$$
\begin{align}
  \int_{a}^{b} \sqrt{1 + f'(x)^{2}} \, dx &= \int_{0}^{28} \sqrt{1 + \left( \frac{\pi}{7}\cos\left( \frac{\pi}{7}x \right)  \right)^{2}} \, dx
\end{align}
$$
Y dada la propiedad de la gráfica del sino, y un cambio de variable $u = \frac{\pi}{7}x \implies  du = \frac{\pi}{7} \,dx$
$$
\begin{align}
   &= 4 \int_{0}^{7} \sqrt{1 + \left(\frac{\pi}{7}\cos\left( \frac{\pi}{7}x \right)^{2}  \right)} \, dx = \int_{0}^{\pi} \sqrt{1 + \left( \frac{\pi}{7}\cos(x)  \right)}\cdot \frac{7}{\pi} \, du\\[0.5em]
    &= \int_{0}^{\pi} \sqrt{\left(\frac{7}{\pi}^{2} \left[ 1 + \left(\frac{\pi}{7}\cos(u)  \right)^{2}  \right]  \right)} \, du = \int_{0}^{\pi} \sqrt{\frac{49}{\pi^{2}} + \cos(u)^{2}} \, du \\[0.5em]
     &= \underbrace{\int_{0}^{\pi} \sqrt{k^{2} + \cos(u)^{2}} \, du}_{\text{Integral Elíptica}}
\end{align}
$$

> [!Info]+ **Nota!**
> nvim falta configurar ubrace para que funciones con el replazo de Tab

Como observamos, es una integral eliptica, entonces hay que aproximarla por medio de métodos numéricos. Aproximaremos por Polinomio de Taylor.
Consideramos la función $f(t) = \sqrt{k^{2} + t}$, donde en este problema $t = \cos(u)^{2}$ y su polinomio de taylor alrededor de $t= 0$. Para ello, necestiamos las derivadas:
$$
f(0) = k, \quad f'(t) = \frac{1}{2}(k^{2}+t)^{-\frac{1}{2}}, f''(t) = \frac{-1}{2^{2}}(k^{2} + t)^{-\frac{3}{2}}, \quad f'''(t) = \frac{3}{2^{3}} (k^{2} + t)^{-\frac{5}{2}}\dots
$$
Y tenemos nuetro polinomio de Taylor evaluado $t = 0$, y luego regresando el cambio de variable $t = \cos(u)^{2}$ de la forma,
$$
\begin{align}
f(t) &= k + \frac{k^{-1}}{2}t + \frac{\left(-\frac{k^{-3}}{2^{2}}t^{2}  \right)}{2} + \frac{\frac{3k^{-5}}{2^{3}}t^{3}}{3!} + \dots \\[0.5em]
 f(\cos(u)^{2}) &= k + \frac{k^{-1}}{2}\cos(u)^{2} + \frac{\left(-\frac{k^{-3}}{2^{2}}  \right)\cos(u)^{4}}{2} + \frac{\frac{3k^{-5}}{2^{3}}\cos(u)^{6}}{3!} + \dots
\end{align}
$$
Así, ya solamente utilizamos el método de Taylor
$$
\int_{0}^{\pi} \sqrt{k^{2} + \cos(u)^{2}} \, du \approx \int_{0}^{\pi} f(\cos(u)^{2}) \, du
$$


> [!example]+ **Ejercicio.**
6. Una curva con ecuación $\rho = f(\theta)$ se puede expresar paramétricamente por $(f(\theta)\cos(\theta), f(\theta)\sin(\theta))$. Encuentra una fórmula para la longitud de $\mathscr{C}$ en $[\theta_{1},\theta_{2}]$.
La fórmula de longitud de curva para $\gamma = (\gamma_{1},\gamma_{2})$ es
$$
\int_{a}^{b} \left\| \gamma'(t) \right\| \, dt = \int_{a}^{b} \sqrt{\gamma'_{1}(t)^{2} + \gamma_{2}'(t)^{2}} \, dt
$$
Así, $\gamma_{1}'(t) = f'(t)\cos(t) - f(t)\sin(t)$ y $\gamma_{2}'(t) = f'(t)\sin(t) + f(t)\cos(t)$. Entonces,
$$
\int_{t_{1}}^{t_{2}} \sqrt{f'(t)^{2}\cos(t)^{2} - 2f(t)f'(t)\cos(t)\sin(t) + f(t)^{2}\sin(t)^{2} + f'(t)^{2}\sin(t)^{2} + 2f(t)f'(t)\cos(t)\sin(t) + f(t)^{2}\cos(t)^{2}} \, dt
$$
$$
= \boxed{\int_{t_{1}}^{t_{2}} \sqrt{f'(t)^{2} + f(t)^{2}} \, dt}
$$

Este formulazo es, el caso particular de funciones uniparametricas polares.

> [!example]+ Ejemplo.

Un subejercicio del anterior, sea $\rho = e^{-\theta}$ con $\theta \in [0,2\pi]$, calcula la longitud de su curva.
Usamos el formulazo, para ello necesitamos la derivada, $\rho' = -e^{-\theta}$.
$$
\ell_{\mathscr{C}} = \int_{0}^{2\pi} \sqrt{(e^{-\theta})^{2} + (-e^{-\theta})^{2}} \, d\theta = \int_{0}^{2\pi} \sqrt{2e^{-2\theta}} \, d\theta = \sqrt{2}\left(-e^{-2\pi} + 1  \right)
$$

> [!example]+ Ejemplo.
¿Que curva respresenta $\varphi = \theta$? (en coodenadas cartecianas)
un espiral!

