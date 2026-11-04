---
modified: 2026-05-07T13:58:20Z
title: "Parabola"
publish: true
---
> [!theorem] **Definición** 
> $\mathcal{P}$ es una **parábola** si sus elementos equidistan de un punto $F$ y una recta $\mathcal{D}$.
> $$
> \mathcal{P} = \{ P \in \mathbb{R} : d(P,F) = d(P,\mathcal{L}) \}
> $$

> [!theorem] **Teorema** (Ecuación Canónica)
> Sea $\mathcal{P}$ con $V$ *(vértice)* en el **origen** y su eje focal coincide con el eje $X$, entonces su ecuación es:
> $$
> y^{2} = 4px
> $$
> Si el eje focal es $\parallel$ con el eje Y
> $$
> x^{2} = 4py
> $$

> [!proof]- **Proof.** 
> Sea $X$ el eje focal y $V(0,0)$. Por definición, el vértice es el punto medio del segmento desde la  directriz $\mathcal{L}$ al foco $F$. 
> Observamos que si $d(F,V) = p$ escribimos $F(p,0)$.
> Igualmente, $\mathcal{L}$ esta a la distancia $-p$ del origen, por lo que su ecuación es $x = -p$, o bien $x+p=0$
> Sea $P(x,y) \in \mathcal{P}$. Por definición
> $$
> \begin{align}
> d(P,F) = \sqrt{ (x-p)^{2} - y^{2} } &= \lvert x+p \rvert = d(P,\mathcal{L}) \\[1em]
> (x-p)^{2} + y^{2} &= (x+p)^{2} \\[1em]
> y^{2} &= 4px \tag*{$\blacksquare$}
> \end{align} 
> $$

> [!theorem] **Teorema.** (Ecuación Ordinaria)
> Sea $\mathcal{P}$ con $V(h,k)$ y distancia $p$ de $V$ a $F$. Si su eje focal es paralelo al eje $X$.
> $$
> (y-k)^{2} = 4p(x-h)
> $$
> Si su eje focal es paralelo a $Y$
> $$
> (x-h)^{2} = 4p(y-k)
> $$

> [!proof]- **Proof.** 
> Trasladamos los ejes al origen
> $$
> \begin{align}
> x = x' + h \implies x' = x-j \\[0.5em]
> y = y' + k \implies y' = y-k
> \end{align}
> $$
> donde $(x,y)$ son las coordenadas del sistema original y $(x',y')$ en el sistema trasladado.
> En el sistema trasladado, el vértice esta en el origen $V'(0,0)$. Por el teorema anterior se tiene
> $$
> (y')^{2} = 4p(x')
> $$
> Sustituyendo inversamente las ecuaciones de transformación para regresar al sistema original se tiene
> $$
> (y-k)^{2} = 4p(x-h) \tag*{$\blacksquare$}
> $$



> [!theorem] **Teorema.** (Ecuación General)
> Toda parabola cuyo eje focal sea paralelo a alguno de los ejes coordenados es descrita por un caso de la ecuación general de segundo grado, donde $B = 0$ y su discriminante es cero:
> $$
> \begin{align}
> Cy^{2} + Dx + Ey + F = 0 \\[1em]
> Ax^{2} + Dx + Ey + F = 0
> \end{align}
> $$

> [!proof]- **Proof.** 
> Partimos de nuestra ecuación ordinaria
> $$
> \begin{align}
> (y-k)^{2} &= 4p(x-h) \\[1em]
> y^{2} - 2ky + k^{2} &= 4px - 4ph  \\[1em]
> y^{2} - 4px - 2ky + (k^{2}+4ph) &= 0
> \end{align}
> $$
> Tomando los parámetros $C = 1, D = -4p, E = -2k, F=k^{2}+4ph$ tenemos la ecuación general de la forma 
> $$
> Cy^{2} + Dx + Ey + F = 0 \tag*{$\blacksquare$}
> $$

