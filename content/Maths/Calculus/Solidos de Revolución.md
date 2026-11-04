---
modified: 2026-11-01T17:32:23Z
title: "Solidos de Revolución"
publish: true
type: zettel
date: "2026-10-23"
status: undone
aliases:
tags:
 - calculus
cssclasses: 
 - romana
---
### Volumen, método de discos

Sea $f:[a,b]\to \mathbb{R}$ continua con gráfica como se muestra. Consideramos la revolución de la gráfica de $f$ alrededor del eje $x$, lo que determina su superficie.

¿Cómo calculamos su volumen?

- La propuesta es, $\displaystyle 2\pi \int_{a}^{b} f(x) \, dx$, ¿será? pues intuitivamente tiene sentido, simplemente rotar la función...

Conociendo el área generada por un cilindro, recordando, $A = \pi r^{2}h$,  donde $h$ es la altura del cilindro y $r$ el radio de su circunferencia. ¿Cómo podemos aproximar el cilindro para que represente el área de nuestra función $f$? Podemos ver el área de un cilindor dentro de la gráfica de la función como



$$
A = \pi f(z)^{2} (x_{2}-x_{1})
$$
Considerando una partición en el intervalo $[a,b]$, una aproximación al volumen de la superficie de revolución es:


$$
\sum_{k=0}^{n-1} \pi f(z_{k})^{2} (x_{k+1} - x_{k})
$$
lo cual es una suma de Riemann para $\pi f^{2}$.

> [!theorem] **Definición.** (Volumen de un Solido de Revolución)
> El volumen de la superficie de revolución generado a partir de $f:[a,b] \to \mathbb{R}^{+}$ es
> $$
> \pi \int_{a}^{b} f^{2}(x) \, dx
> $$

> [!example]+ Ejemplo.
> $\square$ Calcula el volumen de una esfera de radio $r$.
> Recordando la función de una media luna positiva (de cuando sacamos el área del círculo), $f(x)= \sqrt{r^{2} - x^{2}}$. Ent. el volumen es,
> $$
> \begin{align}
>   V_{\theta} &= \pi \int_{-r}^{r} r^{2}-x^{2} \, dx \\[0.5em]
>    &=  \pi \left[ \int_{-r}^{r} r^{2} \, dx - \int_{-r}^{r} x^{2} \, dx  \right] \\[0.5em]
>     &= \pi \left[ 2r^{3} - \frac{2r^{3}}{3}  \right]
> \end{align}
> $$


### Área

> [!example]+ Ejemplo. 
> $\square$ Calcula el área de un cono de altura $h$, directriz $l$ y radio $r$.
>
> El área de un sector es
> $$
> \frac{p^{2} \theta}{2} = \frac{l^{2} \theta}{2}
> $$
> Tenemos la conversión siguiente,
> $$
> \frac{2\pi r}{ \theta} = \frac{ 2\pi l}{ 2\pi} \implies \theta = \frac{2\pi r}{l}
> $$
> Así, el área del cono (de helado) es: $\displaystyle \frac{l^{2} \theta}{2} = \frac{l^{2}\left(\frac{2\pi r}{2}  \right)}{2} = \boxed{\pi  r d}$


> [!example]+ Ejemplo. 
> Calcula el área de un cono truncado con un corte transversal repecto a la altura.
> 
> Claramente, el área esta dada por: $A = A_{C} - A' = \pi r_{1} l - \pi r_{2} l'$, done $A_{C}$ es el área del cono completo, y $A'$ es el área del cono que buscamos cortar.
>
> Por semejanza de triángulos se tiene: $\displaystyle \frac{r_{1}}{r_{2}} = \frac{l}{l'} \implies l' = \frac{lr_{2}}{r_{1}}$.
> Entonces,
> $$
> \begin{align}
> A &= \pi r_{1} l - \pi r_{2} \frac{l r_{2}}{r_{1}} = \pi l \left[ r_{1} - \frac{r_{2}^{2}}{r_{1}}  \right] \\[0.5em]
>  &= \frac{\pi l [ r_{1} + r_{2}] [r_{1} - r_{2}]}{r_{1}}
> \end{align}
> $$
> Por semejanza del mismo triángulo: $\displaystyle \frac{r_{1} - r_{2}}{r_{1}} = \frac{l - l'}{l}$
> Así,
> $$
> \begin{align}
> A &= \pi l (r_{1} + r_{2}) \frac{(l - l')}{l} \\[0.5em]
>  &= \boxed{\pi ( r_{1} + r_{2}) (l - l')}
> \end{align}
> $$
> donde $l-l'$ es él lado del cono truncado.



Supongamos que $f: [a,b] \to  \mathbb{R}^{+}$ continua tal que su gráfica se ve como sigue,

![[Guia para escribir en tiempo real con nvim y obsidian 20261101112625.jpg|center|300]]

Revolucionemos la curva dada por la gráfica de $f$ alrededor del eje $x$.
Dado el ejemplo anterior, tenemos que el área del cono truncado contruido a partir de $(x_{1}, f(x_{1}))$ y $(x_{2}, f(x_{2}))$ es:
$$
\pi (f(x_{1}) + f(x_{2})) \sqrt{(x_{2}-x_{1})^{2} + (f(x_{2}) - f(x_{1}))^{2}}
$$
Tomando una partición $P$ de $[a,b]$ obtenemos una aproximación al área del sólido por medio de
$$
\sum_{k=0}^{n-1} \pi (f(x_{k+1}) + f(x_{k})) \sqrt{(x_{k+1} - x_{k})^{2} + (f(x_{k+1}) - f(x_{k}))^{2}}
$$
$$
= \sum_{k=0}^{n-1} \pi (f(x_{k+1}) -f(x_{k})) (x_{k+1} - x_{k}) \sqrt{ 1 + \frac{(f(x_{k+1}) - f(x_{k}))^{2}}{(x_{k+1} - x_{k})^{2}}}
$$
Suponiendo que $f$ es derivable tenemos, por T.V.M.
$$
\sum_{k=0}^{n-1} \pi (f(x_{k+1})+f_{x_{k}}) (x_{k+1} - x_{k}) \sqrt{1 + f'(c_{k})^{2}}
$$

Además, a consecuencia del Teorema de Valor Intermedio, va a exister un $d_{k}$ tal que $f(x_{k+1}) + f(x_{k}) = 2 f(d_{k})$, ent.
$$
\sum_{k=0}^{n-1} (2f(d_{k})) ( x_{k+1} - x_{k}) \sqrt{1 + f'(c_{k})}
$$
con $c_{k}, d_{k} \in  [x_{k}, x_{k+1}]$, son puntos intermedios del intervalo.

Una área es necesariamente positiva, por lo que añadimos v.a. a $f(x)$.


> [!theorem] **Definicón.** (Área de un S.R. sobre el eje X)
> El área de un sólido de revolución generado por la gráfica de $f:[a,b]\to \mathbb{R}^{+}$ es,
> $$
> 2\pi \int_{a}^{b}  \left| f(x) \right| \sqrt{1 + f'(x)^{2}} \, dx
> $$

> [!observation]+ **Observación.**
> ¿Cuál es el área del cilindro? $A = 2\pi r \cdot h$,
> Sabemos que $\int_{a}^{b} \sqrt{1+f'(x)} \, dx$ es la longitud de la gráfica de $f(x)$.
> Así, observamos qeu la fórmula del área de un sólido de revolución generaliza de alguna manera el concepto de área de un cilindro recto con base circular.


### Métodos de los casquillos


> [!tip]+ **Idea.**
> Ya sabemos como calcular áreas de cilindros no? Bueno, como es habitual, el proceso es aproximar el volumen de otra cosa que no conocemos por medio de áreas que ya conocemos, como un pan de muerto agujerado o una pieadra taladrada, por medio de área de cilindros agujerados.

Sea $f:[a,b]\to \mathbb{R}^{+}$ con $a\geq 0$, cuya gráfica es como sigue.

![[Pasted image 20261029161221.png|center]]

Consideremos los segmentos de recta que van de $(a,0)$ a $(a,f(a))$ y $(b,0)$ a $(b,f(b))$.
El área determinada de ($A$) la revolucionamos alrededor del eje $Y$ para obtener nuestro pan de muerto agujerado.

¿Cómo obtenemos el volúmen $V$ de eso?

Recordando el volumen de un cilindro: $2\pi r h$
Sea $\displaystyle x' = \frac{x_{1}+x_{2}}{2}$ (punto medio). El volumen generado con base $\overline{x_{1}x_{2}}$ y altura $f(x')$ revolucionado alrededor del eje $Y$ tiene por volumen (*de un cilindro agujerado*):
$$
\begin{align}
   \pi x_{2}^{2} \cdot  f(x') - \pi x_{1} ^{2} \cdot f(x') &= \pi f(x ') \left[ x_{2}^{2} - x_{1} ^{2}\right] \\[0.5em]
    &= \pi f(x')  \left(\frac{(x_{2} + x_{1})}{2}\right)(x_{2}-x_{1})\cdot 2\\[0.5em]
    &= 2\pi f(x')\cdot x'(x_{2}-x_{1})
\end{align}
$$
Así, una aproximación al volumen de $V$ será
$$
\sum_{k=0}^{n-1} 2\pi f(x'_{k})x'_{k}(x_{k+1}-x_{k})
$$
dada una partición $\mathcal{P}_{[a,b]}$ la cúal es una suma de Riemann para $2\pi x f(x)$.


> [!theorem] **Definición** (Volumen de SR sobre el eje Y)
> El volumen de $V$ con sus hipotesis es,
> $$
> 2\pi \int_{a}^{b} x f(x) \, dx
> $$

