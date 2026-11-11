---
modified: 2026-10-28T18:51:09Z
title: "Revoluciones sobre el eje Y"
publish: true
---
> [!observation]+ **Observación.**
>
> Cuando rotamos sobre el eje $Y$ podemos resolver de dos formas, expresando todo en terminos de la función inversa, o simplemente tomando $\left| x \right|$ en lugar de $\left| f(x) \right|$ en el formulazo:
> $$
> 2\pi \int_{y_{1}}^{y_{2}} \left| x(y) \right| \sqrt{1 + x'(y)^{2}} \, dy = S = 2\pi \int_{a}^{b} x \sqrt{1  + f'(x)^{2}} \, dx
> $$

> $\square$ 5. Un grupo de ingenieros está construyendo un disco parabólico para un satélite. La forma de este disco estará descrita por $ax^{2}$ rotado alrededor del eje $Y$. Si el disco debe tener 10ft de diámtetro y profundidad de 2 ft. Calcula el valor de $a$ y  el área de su superficie.

> [!example]+ Solución.
>
> Bueno para obterner $a$ simplemente evaluamos.
> Sea $S$ el área de su superficie, dado $f(x) = ax^{2} \implies f'(x) = 2ax$ tenemos
> $$
> S = 2\pi \int_{0}^{5} x \sqrt{1 + (2ax)^{2}} \, dx = 2\pi \int_{0}^{5} x \sqrt{1 + 4a^{2}x^{2}} \, dx
> $$
> Utilizando cambio de variable, y de una ves cambiando los límites de integración con:
> $\displaystyle u = 1 + 4a^{2}x^{2} \implies du = 8a^{2}x \, dx \implies x \, dx = \frac{du}{8a^{2}}$, y con $u_{1} = u(5) = 1 + 4a^{2}(5)^{2}$ y $u_{0} = u(0) = 1$.
> $$
> \implies  S = 2\pi \int_{u_{0}}^{u_{1}} \left(\frac{du}{8a^{2}}  \right)\sqrt{u}  =  \frac{\pi}{4a^{2}} \int_{1}^{1+100a^{2}} \sqrt{u} \, du \dots
> $$

