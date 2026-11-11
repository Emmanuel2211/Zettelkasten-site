---
modified: 2026-05-05T14:04:18Z
title: "Elipse"
publish: true
---
> [!theorem] **Definición**  
>
> Una **elipse** es el lugar geométrico de todos los puntos $P(x,y)$ en un plano tales que la **suma** de sus distancias a dos puntos fijos (llamados focos, $F_{1}$​ y $F_{2}$​) es constante.
> $$
> \mathscr{E} = \{ P \in \mathbb{R}^{2} : d(P,F_{1}) + d(P,F_{2}) = 2a \}
> $$

> [!theorem] **Teorema.** (Ecuación canónica)
>
> La ecuación con centro en el origen esta dada por
> $$
> \frac{x^{2}}{a^{2}} + \frac{y^{2}}{b^{2}} = 1
> $$

> [!proof]- **Proof.** 
>
> $$
> \begin{align}
> \sqrt{ (x+c)^{2} + y^{2} } + \sqrt{ (x-c)^{2} + y^{2} } &= 2a \\[0.5em]
> (x+c)^{2} + y^{2} &= 4a^{2} - 4a\sqrt{ (x-c)^{2} + y^{2} }  + (x-c)^{2} + y^{2} \\[0.5em]
> x^{2}+2xc+c^{2} &= 4a^{2} - 4a\sqrt{ (x-c)^{2} + y^{2} } + x^{2} - 2xc + c^{2} \\[0.5em]
> 4xc - 4a^{2} &= -4a \sqrt{ (x-c)^{2} + y^{2} } \\[0.5em]
> (a^{2} - cx)^{2} &= a^{2} ((x-c)^{2} + y^{2}) \\[0.5em]
> a^{4} - 2a^{2}cx + c^{2}x^{2} &= a^{2}(x^{2} - 2xc +c^{2} + y^{2}) \\[0.5em]
> a^{4} + c^{2}x^{2} &= a^{2}x^{2} + a^{2}c^{2} + a^{2}y^{2} \\[0.5em]
> (a^{2}-c^{2})x^{2} + a^{2}y^{2} &= a^{2}(a^{2}-c^{2})
> \end{align}
> $$
> Como sabemos que $a>c>0$, entonces $a^{2}-c^{2} >0$ y podemos definir $b^{2} = a^{2} -c^{2}$, sustituyendo
> $$
> \begin{align}
> b^{2}x^{2}+a^{2}y^{2} &= a^{2}b^{2} \\[1em]
> \frac{x^{2}}{a^{2}} + \frac{y^{2}}{b^{2}} &= 1
> \end{align}
> $$

> [!theorem] **Teorema.** (Ecuación ordinaria)
>
> Sea una elipse con semiejes de longitud $a$ y $b$, y centro $C(h,k) \in \mathbb{R}^{2}$, cuyos ejes de simetría son paralelos a los ejes coordenados. Su ecuación es dada por
> $$
> \frac{(x-h)^{2}}{a^{2}} + \frac{(y-k)^{2}}{b^{2}} = 1
> $$
> Si $a>b$, el eje focal es horizontal.
> Si $b>a$, es vertical

> [!theorem] **Teorema.** (Ecuación general)
>
> Su ecuación general desarrollada a partir de la ordinaria es
> $$
> Ax^{2} + Cy^{2} + Dx + Ey+F = 0
> $$
> con los parámetros
> $$
> \begin{align}
> &A = b^{2} \\
> &C = a^{2} \\
> &D = -2b^{2}h = -2Ah \\
> &E = -2a^{2}k = -2Ck \\
> &F = b^{2}h^{2} + a^{2}k^{2} - a^{2}b^{2} = Ah^{2} + Ck^{2} -AC
> \end{align}
> $$

