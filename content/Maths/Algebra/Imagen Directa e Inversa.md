---
modified: 2026-09-30T15:47:15Z
title: "Imagen Directa e Inversa"
publish: true
type: zettel
date: "2026-09-18"
status: undone
aliases:
tags:
 - algebra
cssclasses: 
 - romana
---
> [!Info]- **Notese!**
>
> La imagen directa e inversa son funciones conjuntistas $f: \mathcal{P}(A) \to \mathcal{P}(B)$, y no puntuales $g:A \to B$. Pues tomamos conjuntos $f(A)$ en lugar de solo puntos $f(x)$.

> [!theorem] **Definición.** (Imagen Directa)
>
> Sea $f: A\to B$, dado $C \subseteq A$, la **imagen directa de** $C$ **bajo** $f$ es
> $$
> f[C] = \{ f(x) \mid x \in C \}
> $$

> [!theorem] **Teorema.** (Propiedades)


> [!theorem] **Definición.** (Imagen Inversa)
>
> Sea $f: A\to B$ y sea $C \subseteq B$, la **imagen inversa de** $C$ **bajo** $f$ es el conjunto
> $$
> f^{-1}[C] = \{ x \in A \mid f(x) \in C \}
> $$




> [!observation]+ **Observación.**
>
> Sea $C \subseteq A$ y $C' \subseteq B$
> Es claro que, $f[C] \subseteq  B$  y que $f^{-1}[C'] \subseteq A$, además $f[A] = \operatorname{Im}\{ f \}$



> [!theorem] **Teorema.** (Propiedades)
>
> 1. $f^{-1}[A^{c}] = (f^{-1}[A])^{c}$
> 2. $f^{-1}[A \cup B] = f^{-1}[A] \cup  f^{-1}[B]$
> 3. $f^{-1}[A \cap B] = f^{-1}[A] \cap  f^{-1}[B]$
> 4. $f^{-1}[A \vartriangle  B] = f^{-1}[A] \vartriangle  f^{-1}[B]$


