---
modified: 2026-10-14T03:45:29Z
title: "Transformaciones Ortonormales"
publish: true
---
Una transformación lineal $T: V \to V$ es una **Transformación Ortogonal** si preserva el producto interno del espacio. Es decir, para todo par de vectores $u,v \in V$:
$$
\langle T(u), T(v) \rangle  =\langle u,v \rangle 
$$

## Links
- [[Ortonormal]]
- [[Cambio de Base (ortonormales)]]
- [[Maths/Geometry/Matrices]]
- [[Vectores ortonormales]]


---

### TRansformaciones lineales?


> [!theorem] **Teorema.** (Representación Matricial)
> Una transformación **lineal** $T : \mathbb{R}^n \to \mathbb{R}^m$ admite una representación mediante la matriz $A_{T} \in M_{m\times n}$, en el sentido de que $\forall \mathbf{x} \in \mathbb{R}^n : T (\mathbf{x}) = A_{T}\cdot \mathbf{x}$
> Donde $A_{T}$ se llama **matriz estándar** de $T$, y se define como
> $$
> A_{T} = \begin{pmatrix}
> T(\mathbf{e_{1}}) &  \dots & T(\mathbf{e_{n}})
> \end{pmatrix}_{m\times n}
> $$
> Claro, $\mathbf{e}_{k}$ son los canónicos

> [!theorem] **Teorema.** (Recíproco del teorema anterior)
> Toda matriz $A \in M_{m\times n}$ genera una transformación lineal
> $$
> T_{A} : \mathbb{R}^n \to \mathbb{R}^m
> $$
> tal que $A \cdot \mathbf{x} = T_{A}(\mathbf{x})$


**Prop.** La composición de transformaciones lineales, es de nuevo una transformación lineal.

**Prop.** Si $T_{1},T_{2}: \mathbb{R}^n \to \mathbb{R}^n$ son transformaciones lineales y $A_{1},A_{2} \in M_{n\times n}(\mathbb{R})$ son sus respectivas matrices estándar, entonces
$$
\begin{align}
A_{T_{2} \circ T_{1}} = A_{T_{2}} \cdot A_{T_{1}} \\[0.5em]
A_{T_{1} \circ T_{2}} = A_{T_{1}} \cdot A_{T_{2}}
\end{align}
$$



---
#### Algunas transformaciones lineales útiles
Sobre transformaciones lineales **elementales.**

**Rotaciones:** 
$$
T_{\varphi} \begin{pmatrix}
x \\
y 
\end{pmatrix} = \begin{pmatrix}
\cos \varphi & -\sin \varphi \\
\sin \varphi & \cos \varphi
\end{pmatrix} \begin{pmatrix}
x \\
y
\end{pmatrix}
$$

**Reflexiones:**
$$
T_{m} \begin{pmatrix}
x \\
y
\end{pmatrix} = \frac{1}{1+m ^{2}} \begin{pmatrix}
1-m^{2} & 2m \\
2m & m^{2}-1
\end{pmatrix} \begin{pmatrix}
x  \\
y
\end{pmatrix}
$$
Contra el eje $X$:
$$
T_{X} \begin{pmatrix}
x \\
y
\end{pmatrix} = \begin{pmatrix}
1 & 0 \\
0 & -1
\end{pmatrix} \begin{pmatrix}
x \\
y
\end{pmatrix}
$$

Contra el eje $Y$:

$$
T_{Y} \begin{pmatrix}
x \\
y
\end{pmatrix} = \begin{pmatrix}
-1 & 0 \\
0 & 1
\end{pmatrix} \begin{pmatrix}
x \\
y
\end{pmatrix}
$$
Contra $y = x$:
$$
T_{y = x} \begin{pmatrix}
x \\
y
\end{pmatrix} = \begin{pmatrix}
0 & 1 \\
1 & 0
\end{pmatrix} \begin{pmatrix}
x \\
y
\end{pmatrix}
$$

**Compresión-Dilataciones:** Por un factor $r$ a lo largo de un eje coordenado.
$$
T \begin{pmatrix}
x \\
y
\end{pmatrix} = \begin{pmatrix}
rx \\
y
\end{pmatrix} = \begin{pmatrix}
r & 0 \\
0 & 1
\end{pmatrix} \begin{pmatrix}
x \\
y
\end{pmatrix}
$$
$$
T \begin{pmatrix}
x \\
y
\end{pmatrix} = \begin{pmatrix}
x \\
ry
\end{pmatrix} = \begin{pmatrix}
 1 & 0 \\
 0 & r
\end{pmatrix} \begin{pmatrix}
x \\
y
\end{pmatrix}
$$

**Deslizamientos Relativos:** Por un factor $r$ a lo largo de un eje coordenado.
$$
T \begin{pmatrix}
x \\
y
\end{pmatrix} = \begin{pmatrix}
 x + ry \\
 y
\end{pmatrix} = \begin{pmatrix}
1 & r \\
0 & 1
\end{pmatrix} \begin{pmatrix}
x \\
y
\end{pmatrix}
$$
$$
T \begin{pmatrix}
x \\
y
\end{pmatrix} = \begin{pmatrix}
x \\
rx + y
\end{pmatrix} = \begin{pmatrix}
1 & 0 \\
r & 1
\end{pmatrix} \begin{pmatrix}
x \\
y
\end{pmatrix}
$$

Continuamos con el criterio de diagonalización<sup><a href="#user-content-fn-inline-1" id="user-content-fnref-inline-1" data-footnote-ref class="internal">1</a></sup>

<section data-footnotes class="footnotes"><h2 class="sr-only" id="footnote-label">Notas</h2>
<ol>
<li id="user-content-fn-inline-1">

[[Diagonalizacion]] <a href="#user-content-fnref-inline-1" data-footnote-backref class="data-footnote-backref internal">↩</a>

</li>
</ol>
</section>
