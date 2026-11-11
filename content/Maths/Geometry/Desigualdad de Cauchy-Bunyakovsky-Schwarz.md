---
modified: 2026-04-26T05:52:40Z
publish: true
type: zettel
status:
links:
tags: []
date: 2026-03-26
aliases:
  - "|a⋅b| ≤ |a| |b|"
  - ""
cssclasses: romana
materia:
---


> [!theorem] **Teorema.** Desigualdad de Cauchy generalizada
>
> Para sumas o integrales, el producto no supera a la norma
> $$
> \left( \sum_{i=1}^n a_{i}b_{i} \right)^{2} \leq \left( \sum_{i=1}^n a_{i}^{2} \right) \left( \sum_{i=1}^n b_{i}^{2} \right)
> $$

Frecuentemente usada en cálculo multivariable y álgebra lineal

---

 > [!theorem] **Teorema.** Desigualdad de Cauchy Vectorial
 >
> Para cualquier $\mathbf{a,b} \in V_{n}$.
> $$
> \lvert \mathbf{a \cdot b} \rvert \leq \lvert \mathbf{a} \rvert \lvert \mathbf{b} \rvert 
> $$
> donde la igualdad se verifica si y sólo si $\mathbf{a}$ y $\mathbf{b}$ son paralelos.

###### Proof. 
Si $\mathbf{a}$ no es paralela a $\mathbf{b}$, hay un triángulo rectángulo con hipotenusa $\mathbf{a}$ y base $\textbf{Proy}_{\mathbf{b}}\mathbf{a}$. Sea $\mathbf{c} = \mathbf{a} - \textbf{Proy}_{\mathbf{b}}\mathbf{a} \neq 0$ el tercer lado de este triángulo rectángulo. De acuerdo con el [[Teorema de Pitagoras]] tenemos
$$
\lvert \textbf{Proy}_{\mathbf{b}}\mathbf{a}  \rvert ^{2} = \lvert \mathbf{a} \rvert ^{2} - \lvert \mathbf{c} \rvert ^{2} < \lvert \mathbf{a} \rvert ^{2}
$$
o 
$$
\lvert \textbf{Proy}_{\mathbf{b}}\mathbf{a} \rvert < \lvert \mathbf{a} \rvert  
$$
De la ecuación [[Proyección Ortogonal. Componentes|(1.2)]]
$$
\lvert \mathbf{a \cdot b} \rvert = \lvert \mathbf{b} \rvert \lvert \text{Comp}_{\mathbf{b}} \mathbf{a} \rvert = \lvert \mathbf{b} \rvert \lvert \textbf{Proy}_{\mathbf{b}}\mathbf{a} \rvert < \lvert \mathbf{b} \rvert \lvert \mathbf{a} \rvert  
$$
$$
\therefore \mathbf{a} \not\parallel \mathbf{b} \implies \lvert \mathbf{a \cdot b} \rvert < \lvert \mathbf{a} \rvert \lvert \mathbf{b} \rvert 
$$
Si $\mathbf{a}$ es paralelo a $\mathbf{b}$ y $\mathbf{a}$ o $\mathbf{b}$ es nulo, entonces la igualdad se verifica ($0 = 0$).
Si $\mathbf{a} \parallel \mathbf{b}$ y no nulos, entonces $\mathbf{a} = r\mathbf{b}$ para algún $r \in \mathbb{R}$, por tanto, 
$$
\lvert \mathbf{a \cdot b} \rvert = \lvert (r\mathbf{b}) \cdot \mathbf{b} \rvert = \lvert r \rvert \lvert \mathbf{b} \rvert ^{2} = \lvert r\mathbf{b} \rvert \lvert \mathbf{b} \rvert =\lvert \mathbf{a} \rvert \lvert \mathbf{b} \rvert .
$$
Q.E.D.

Otra demostración parte de la expresión, para $\mathbf{a,b}$ no nulos.
$$
\left\lvert  \frac{\mathbf{a}}{\lvert \mathbf{a} \rvert }\pm \frac{\mathbf{b}}{\lvert \mathbf{b} \rvert }  \right\rvert ^{2} 
$$
Proof. 
Dado [[Ortogonalidad|(1.2)]] y [[Producto Interior|(2.6)]],
$$
\left\lvert  \frac{\mathbf{a}}{\lvert \mathbf{a} \rvert }\pm \frac{\mathbf{b}}{\lvert \mathbf{b} \rvert }  \right\rvert ^{2}  = \left(\frac{\mathbf{a}}{\lvert \mathbf{a} \rvert }\pm \frac{\mathbf{b}}{\lvert \mathbf{b} \rvert }\right)\left(\frac{\mathbf{a}}{\lvert \mathbf{a} \rvert }\pm \frac{\mathbf{b}}{\lvert \mathbf{b} \rvert }\right) \geq 0
$$
Podemos tomarlos como los vectores unitarios $\mathbf{v,u}$.
$$
(\mathbf{u}\pm\mathbf{v})(\mathbf{u}\pm\mathbf{v}) = (\mathbf{u\cdot u}) \pm 2(\mathbf{u\cdot v}) + (\mathbf{v\cdot v}) \geq 0
$$
Y tenemos
$$
\begin{align}
1 \pm 2(\mathbf{u\cdot v}) + 1 \geq 0 \\[1em]
1\pm (\mathbf{u\cdot v})\geq 0 \\[1em]
-1 \leq (\mathbf{u\cdot v})\leq 1 \\[1em]
\lvert \mathbf{u\cdot v} \rvert \leq 1
\end{align}
$$
En otros terminos
$$
\left\lvert  \frac{\mathbf{a}}{\lvert \mathbf{a} \rvert } \cdot \frac{\mathbf{b}}{\lvert \mathbf{b} \rvert }  \right\rvert \leq 1
$$
Dado [[Ortogonalidad|(1.3)]]
$$
\begin{align}
\frac{\lvert \mathbf{a\cdot b} \rvert }{\lvert \mathbf{a} \rvert \lvert \mathbf{b} \rvert }\leq1 \\[1em]
\therefore \lvert \mathbf{a\cdot b} \rvert \leq\lvert \mathbf{a} \rvert \lvert \mathbf{b} \rvert 
\end{align}
$$


---

> [!theorem] **2. Corolario** 
>
> Se sigue que $\cos \theta$, de acuerdo [[Proyección Ortogonal. Componentes|(2.1)]], se satisface la desigualdad $-1 \leq \cos \theta \leq 1$.

Ahora podremos demostrar la [[Desigualdad del Triangulo]].


