---
modified: 2026-08-20T14:52:28Z
publish: true
---
---
---
# Producto en $\mathbb{N}$

> [!theorem] **Definición.** (Producto $\cdot_{\mathbb{N}}$)
>
> $$
> \cdot_{\mathbb{N}}: \mathbb{N} \times \mathbb{N} \to \mathbb{N}
> $$
> operación bianria tal que
> 1. $0\cdot n = 0 \quad \forall n \in \mathbb{N}$
> 2. $s(m) \cdot n = (m \cdot n)+n \quad \forall m,n \in \mathbb{N}$


> [!theorem] **Teorema.** (Propiedades de $\cdot_{\mathbb{N}}$)
>
> Para cualesquiera $m,n,p \in \mathbb{N}$ se cumple:
> - $m \cdot (n \cdot p) = (m \cdot n) \cdot p$
> - $m \cdot n =n \cdot m$
> - Si $p \neq 0, \quad m \cdot p = n \cdot p \iff m = n$
> - $s(0) \cdot n = n$
> - Si $p \neq 0, \quad m \leq n \iff m+p \leq n+p$
> - $m \cdot n = 0 \iff m =0 \lor n = 0$
> 
> Ya definida $+_{\mathbb{N}}$:
> - $m \cdot (n + p) = (m \cdot n) + (m \cdot p)$

> [!proof]- **Proof.** 
>
> 4. $$
> \begin{align}
> s(0) \cdot n &= (0 \cdot n) + n \tag{2}\\
> &= 0 + n \tag{1}\\
> &= n \tag{Def. suma}
> \end{align}
> $$