---
modified: 2026-09-18T18:58:19Z
title: "Integración por Sustitución Trigonométrica"
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
> Integraes con terminos de la forma:
> $$
> \sqrt{a^{2} - x^{2}} \quad \sqrt{x^{2}-a^{2}} \quad \sqrt{x^{2}+a^{2}}
> $$


> [!example]- Ejemplo. Caso $\sqrt{a^{2} - x^{2}}$
>
> ![[Pasted image 20260918112859.png|center|190]]
> $\displaystyle \int \frac{\sqrt{a^{2}-x^{2}}}{x} \, dx$ y observamos que $\displaystyle \sin(\theta )  = \frac{x}{a} \implies  x = a \sin(\theta )$ y con derivada $dx = a\cos(\theta )d\theta$.
> Además, $\displaystyle \cos(\theta ) = \frac{\sqrt{a^{2}-x^{2}}}{a} \implies  \sqrt{a^{2}-x^{2}} = a \cos(\theta )$.
> $\displaystyle \tan(\theta ) = \frac{x}{\sqrt{a^{2}-x^{2}}} = \cot(\theta) = \frac{\sqrt{a^{2}-x^{2}}}{x}$
> Por lo que nos queda en la integral
> $$
> \int \frac{a\cos(\theta )}{a^{2}\sin^{2}(\theta )} \cdot  a \cos(\theta )  \, d\theta  = \int \cot^{2}(\theta) \, d\theta = \int (\csc(\theta)^{2} - 1) \, d\theta  
> $$
> $$
> = \int \csc(\theta)^{2} \, d\theta  - \int d \theta = -\cot(\theta) - \theta + c = \frac{-\sqrt{a^{2}-x^{2}}}{x} - \sin^{-1}(\frac{x}{a})+c
> $$


> [!example]- Ejemplo. Caso $\sqrt{a^{2} + x^{2}}$
>
> ![[Pasted image 20260918120236.png|center|194]]
> $\displaystyle \int x\sqrt{a^{2} + x^{2}} \, dx$
> Observamos que $\sin(\theta ) = \frac{a}{\sqrt{a^{2}+x^{2}}} \implies \sqrt{a^{2}+x^{2}} = \frac{a}{\sin(\theta )} = a \csc(\theta)$.
> Igual, $\displaystyle \tan(\theta ) = \frac{a}{x} \implies  x = \frac{a}{\tan(\theta )} = \cot(\theta)$... derivo y sustituyo $dx$ en la integral:
> $$
> \int a\cot(\theta)a\csc(\theta)a(-\csc(\theta)^{2}) \, d\theta = a^{3}\int \frac{\cos(\theta )}{\sin(\theta )} \cdot  \frac{1}{\sin(\theta )^{2}} \, d\theta 
> $$
> $$
> = -a^{3} \int \frac{\cos(\theta ) \, d\theta }{\sin^{4}(\theta )} = -a^{3} \int \frac{du}{u^{4}} = -a^{3} \left( \frac{u^{-3}}{-3}  \right) = \frac{a^{3}}{3(\sin(\theta )^{3})} 
> $$
> $$
> = \frac{a^{3}}{3\left( \frac{a^{3}}{\sqrt{a^{2}+x^{2}}^{3}}  \right)} = \frac{\sqrt{a^{2}+x^{2}}^{3}}{3} + c
> $$

> [!example]+ Ejemplo. Varias Identidades Trigonométricas
>
> 1. $\displaystyle \int \sin(x) \, dx = -\cos(x) + c$
> 2. $\displaystyle \int \sin(x)^{2} \, dx = \int \frac{1-\cos(2x)}{2} \, dx= \frac{1}{2}\left[ \int  \, dx - \int \cos(2x) \, dx  \right] = \frac{1}{2}\left[ x - \frac{\sin(2x)}{2}  \right] + c$
> 3. $\displaystyle \int \sin(x)^{3} \, dx = \int \sin(x)^{2}\sin(x) \, dx = \int (1-\cos(x)^{2}) \, dx$
> $\displaystyle  = \int \sin(x) \, dx - \int \sin(x)\cos(x)^{2} \, dx = -\cos(x) + \int u^{2} \, du = -\cos(x) + \frac{u^{3}}{3} = -\cos(x) + \frac{\cos(x)^{3}}{3} + c$
> 4. $\displaystyle \int \sin(x)^{4} \, dx =$ Tarea Moral!
> 5. $\displaystyle \int \tan(\theta ) \, d\theta = \dots$ llegamos a una contradicción.
> 6. $\displaystyle \int \sec^{2}(\theta) \, d\theta = \tan(\theta )+c$
> 7. $\displaystyle \int \sec(\theta) \, dx = \int \sec(\theta) \left(\frac{\sec(\theta)+\tan(\theta )}{\sec(\theta)+\tan(\theta )}  \right) \, d\theta =$ Tarea Moral!

Ejercicio! Calcula $\displaystyle \int_{0}^{2\sqrt{3}} \frac{x^{3}}{\sqrt{16 - x^{2}}} \, dx$... algo sobre dominio de $\cos$












---

###### Referencias
- https://blog.nekomath.com/tag/sustitucion-trigonometrica/
