---
modified: 2026-05-01T00:35:21Z
publish: true
---
---
---
# La Cisoide de Diocles; La Duplicación del Cubo


![[Cisoide de Diocles; La duplicacion del cubo 2026-04-30 18.22.56.excalidraw]]

Ejercicio 299 Lehman

> [!proof]- **Proof.** 
>
> $$
> r = \lvert OP \rvert  = \lvert AB \rvert = \lvert OB \rvert - \lvert OA \rvert 
> $$ 
> Del $\Delta OBT$
> $$
> \cos \theta = \frac{\lvert OT \rvert }{\lvert OB \rvert } = \frac{2a}{\lvert OB \rvert }
> $$
> $$
> \implies \lvert OB \rvert  = \frac{2a}{\cos \theta} = 2a\sec \theta \tag{1.}
> $$
> Del $\Delta OAT$
> $$
> \cos \theta = \frac{\lvert OA \rvert }{2a} \implies \lvert OA \rvert = 2a\cos \theta \tag{2.}
> $$
> Sustituyendo (1.) y (2.) en
> $$
> \begin{align}
> r &= 2a(\sec \theta - \cos \theta) \\[1em]
> r &= 2a\left( \frac{1}{\cos \theta} - \cos \theta \right) = 2a \left( \frac{1-\cos ^{2}\theta}{\cos \theta} \right) \\
> r &= \frac{2a \sin ^{2} \theta}{\cos \theta} = 2a \tan \theta \sin \theta \tag{3.}
> \end{align}
> $$
> Y (3.) es ecuación polar de $\mathscr{C}$ de donde
> $$
> \begin{align}
> x &= r \cos \theta  \\
> x &= 2a \tan \theta \sin \theta \cos \theta \\
> x &= 2a sen^{2} \theta
> \end{align}
> $$
> Analogamente para $y$
> $$
> y = 2a \sin ^{2} \theta \tan \theta
> $$
> siendo los valores de $x, y$ la parametrización de $\mathscr{C}$
> Además la ecuación cartesiana de $\mathscr{C}$ es:
> Considerando
> $$
> \begin{align}
> y^{2} &= 4a^{2} \sin^{4} \theta \tan ^{2} \theta = \frac{4a^{2} \sin^{6}\theta }{\cos ^{2} \theta} \\[1em]
>&= \frac{4a^{2} \sin^{6} \theta}{1 - \sin^{2}\theta} = \frac{8a^{3} \sin^{6}\theta}{2a-2a \sin ^{2} \theta} = \frac{x^{3}}{2a - x}
> \end{align}
> $$
> Y tenemos
> $$
> y^{2} =\frac{x^{3}}{2a-x} \iff \frac{y^{2}}{x^{3}} = \frac{1}{2a-x}
> $$
> Observando la figura tenemos
> $$
> \begin{align}
> \frac{y}{2a-x}&=\frac{1}{2} \\[1em]
> y\left( \frac{1}{2a-x} \right)&=\frac{1}{2} \\[1em]
> y\left( \frac{y^{2}}{xsb} \right) &=  \frac{1}{2} \\[1em]
> y^{3} &= \frac{1}{2}x^{3} \\[1em]
> \therefore x^{3} &= 2y^{2}
> \end{align}
> $$


![[Cisoide de Diocles; La duplicacion del cubo 2026-04-30 18.35.20.excalidraw]]