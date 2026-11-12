---
modified: 2026-10-14T17:44:48Z
publish: true
type: zettel
date: "2026-08-25"
status: undone
aliases:
 - Matriz
 - Espacio Vectorial de las Matrices
tags:
 - algebra
cssclasses: 
 - romana
---
# $V = M_{m\times n}(\mathbb{F})$

> [!theorem] **Definición.** ($M_{m\times n}(\mathbb{F})$)
>
> Sea $\mathbb{F}$ un campo y sean $n,m \in \mathbb{N}^{+}$. Definimos al conjunto
> $$
> M_{m\times n}(\mathbb{F}) = \{  A \mid A  \text{ es una matriz con }m \text{ renglones y } n \text{ columnas con entradas en }\mathbb{F} \}
> $$
> A sus elementos los llamamos **las matrices de** $m\times n$ **con entradas** en $\mathbb{F}$.
> Sus operaciones están definidas de la siguiente forma:
> 
> $$+ : (M_{m\times n}(\mathbb{F}))^{2} \to M_{m\times n}(\mathbb{F})$$
> Definida como: Si $A,B \in M_{m\times n}(\mathbb{F})$,
> $\forall i \in \{ 1,\dots,m \} \ \forall j \in \{ 1,\dots,n \} \ (A+B)_{ij}=A_{ij}+B_{ij}$
> 
> Además,
> $$\cdot: \mathbb{F}\times M_{m\times n}(\mathbb{F})\to M_{m\times n}(\mathbb{F})$$
> Definida como: Si $A \in M_{m\times n}(\mathbb{F})$ y $c \in \mathbb{F}$,
> $\forall  i \in \{ 1,\dots,m \} \ \forall j \in \{ 1,\dots,n \} \ (cA)_{ij} = c(A_{ij})$




> **Notación.** Si $A \in M_{m\times n}(\mathbb{F})$, si $i \in \{ 1,\dots,m \}$ y $j \in \{ 1,\dots,n \}$, denotamos con $A_{ij}$ a la **entrada de** $A$ **que está en el** $i$**-ésimo renglón y la** $j$**-ésima columna**.

Solo podemos comparar a las matrices que tengan la misma cantidad de renglones y de columnas:

> [!theorem] **Definición.** (Igualdad de Matrices)
>
> Sean $A,B \in M_{m\times n}(\mathbb{F})$, decimos que $A = B$ si y solo si para todo $i = \{ 1,\dots,m \}$ y $j = \{ 1,\dots,n \}$ tenemos
> $$
> A_{ij} = B_{ij}
> $$

> [!observation]+ **Observación.**
>
> Es claro que $\mathbb{F}^{n}$ es una generalización de $\mathbb{F}^{n}$, pues $\mathbb{F}^{n}= M_{1\times n}(\mathbb{F})$.
> Además, a veces una $n$-ada de $\mathbb{F}$, la escribimos como una matriz de $n\times 1$, i.e. $(a_{1},\dots,a_{n})\in \mathbb{F}^{n}$. Pero también puede ser escrita como **vector columna**:
> $$
> \begin{pmatrix}
> a_{1} \\
> \vdots \\
> a_{n}
> \end{pmatrix}
> $$

> [!theorem] **Teorema.** 
>
> El conjunto $M_{n\times m}(\mathbb{F})$ es un esp. vect.

> [!proof]- **Proof.** 

---

> [!theorem] **Definición.** (Matriz Cuadrada)
>
> Cuando en una matriz $A \in M_{m\times n}(\mathbb{F})$, $m=n$, la llamamos **matriz cuadrada**.

> [!theorem] **Definición.** ($A^{t}$)
>
> Sea $A \in M_{m\times n}(\mathbb{F})$. La **transpuesta de** $A$, $A^{t}$, es la matriz de $n\times m$ con entradas $\mathbb{F}$ tal que
> $$
> \forall i \in \{ 1,\dots,n \} \ \forall j \in \{ 1,\dots,m \} \ A^{t}_{ij} = A_{ji}
> $$

> [!example]- **Ejemplo.** 
>
> Intuitivamente, la *transpuesta* de una matriz resulta ser el intercambio ordenado de las filas por las columnas, i.e. la **primera** fila pasa a ser la **primera** columna... así, sucesivamente.
> $$
> \begin{pmatrix}
> x & y & z \\
> a & b & c
> \end{pmatrix}^{t} = \begin{pmatrix}
> x  & a \\
> y & b \\
> z & c
> \end{pmatrix}
> $$

> [!theorem] **Lema.** (Propiedad de $A^{t}$)
>
> $$
> \forall a,b \in \mathbb{F} \ \forall A,B \in M_{m\times n}(\mathbb{F}) \ (aA+bB)^{t} = aA^{t} + bB^{t}.
> $$

> [!proof]- **Proof.** (tarea)


---

Sea $\mathbb{F}$ un campo. Sea $n \in \mathbb{N}^{+}$. Sabemos que $M_{n\times n}(\mathbb{F})$ (matr. cuadr.) es un esp. vect.

> [!theorem] **Definición.** (Matriz simétrica)
>
> Las **matrices simétricas** de $n \times n$ con entradas en $\mathbb{F}$ son:
> $$
> \operatorname{Sim}_{n}(\mathbb{F}) = \{  A \in M_{n\times n}(\mathbb{F}): A^{t} = A \}
> $$
> **Obs.** $A \in \operatorname{Sim}_{n}(\mathbb{F}) \iff (A_{ij}=A_{ji})$

> [!example]- **Ejemplo.** 
>
> $\begin{pmatrix} 1 & 2 \\  2 & 1 \end{pmatrix} \in \operatorname{Sim} _{2}(\mathbb{R})$, $\begin{pmatrix}1 & 3 \\  2 & 1 \end{pmatrix} \not\in \operatorname{Sim}_{2}(\mathbb{R})$.

> [!theorem] **Definición** (Matriz Antisimentrica)
>
> Una matriz es antisimetrica si y sólo si $A^{t}= -A$.
> **Obs.** $A$ es antisimetrica $\iff (A_{ji} = -A_{ij})$ y para que esto se cumpla $\forall i \in \{1,\dots,n\}\ A_{ii} = 0$.

> [!example]- **Ejemplo.** 
>
> $$
> \begin{pmatrix}
> 0  &  1  &  2  \\
> -1 & 0 & 3 \\
> -2 & -3 & 0
> \end{pmatrix}
> $$



---

> [!theorem] **Definición.** (Matrices diagonales)
>
> Las **matrices diagonales** de $n\times n$ con entradas en $\mathbb{F}$ son:
> $$
> \mathscr{D}_{n} (\mathbb{F}) = \{ A \in M_{n\times n}(\mathbb{F}) : \forall i,j \in \{ 1,\dots,n \} (i\neq j \implies A_{ij} = 0) \}
> $$


> [!example]- **Ejemplo.** 
>
> $\begin{pmatrix}0 & 0 \\  0 & 0\end{pmatrix} \in \mathscr{D}_{2}(\mathbb{F})$, $\begin{pmatrix}1 & 0 \\  0 & 0\end{pmatrix} \in \mathscr{D}_{2}(\mathbb{F})$.

> [!theorem] **Teorema.**
>
> Resulta que
> $$\mathscr{D}_{n}(\mathbb{F}) \lneqq \operatorname{Sim}_{n}(\mathbb{F}) \lneqq M_{n\times n}(\mathbb{F})$$
> La notación $\lneqq$, denota que son subespacios **propios**, i.e. estrictamente no iguales.

> [!proof]- **Proof.** 

---

> [!theorem] **Definición.** (Traza de una Matriz)
>
> La **traza** de $A \in M_{n\times n}(\mathbb{F})$, $\operatorname{tr}(A)$, es la suma de sus entradas en la diagonal, es decir:
> $$
> \operatorname{tr} (A) = \sum_{i=1}^{n} A_{ii}
> $$
> Podemos verla como una función $\operatorname{tr}: M_{n\times n}(\mathbb{F}) \to \mathbb{F}$.

> [!theorem] **Lema.** 
>
> $$
> \forall  a,b \in \mathbb{F} \ \forall  A,B \in M_{n\times n}(\mathbb{F}) \ (\operatorname{tr} (aA+bB) = a \operatorname{tr} (A) + b\operatorname{tr} (B))
> $$

> [!proof]- **Proof.** 


> [!theorem] **Definición.** (Matriz de Traza 0)
>
> Las **matrices de traza cero** de $n\times n$ con entradas en $\mathbb{F}$ son:
> $$
> \operatorname{Tr}_{n}(\mathbb{F}) : \{ A \in M_{n\times n}(\mathbb{F}) \mid \operatorname{tr} (A) = 0 \}.
> $$

Además, es de esperarse que $\operatorname{Tr}_{n}(\mathbb{F})\lneqq M_{n\times n}(\mathbb{F})$. Demostración en tarea.

Así, podemos imaginarnos y comenzar a visualizar nuestro diagrama látice para $M_{n\times n}(\mathbb{F})$.

> [!example]- **No Ejemplo.** 
>
> ¿Será que $N = \{ A\in M_{m\times n}(\mathbb{R})\mid \forall i \in \{ 1,\dots,m \}, j \in \{ 1,\dots,n \}  \ (A_{ij}\leq {0}) \}$ es un subesp. de $M_{m\times n}(\mathbb{R})$?



