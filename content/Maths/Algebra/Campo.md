---
modified: 2026-10-23T03:36:36Z
title: "Campo"
publish: true
type: zettel
date: "2026-07-03"
aliases:
 - Fields
tags: 
 - calculus
 - algebra
cssclasses: 
 - romana
---
> [!theorem] **Definición.** (Campo)
> Un **campo** $\mathbb{F}:= (\mathbb{F},+,\cdot)$ es un conjunto $\mathbb{F}$ con dos operaciones $+: \mathbb{F}\times \mathbb{F} \to \mathbb{F}$ y $\cdot: \mathbb{F}\times \mathbb{F} \to \mathbb{F}$, que cumplen:
> 
> $\text{(F1)} \quad \forall a, b \in \mathbb{F} \ (a+b=b+a)$
> $\quad  \quad \quad \forall a,b \in \mathbb{F} \ (a\cdot b=b\cdot a)$
> $\text{(F2)} \quad \forall a,b,c \in \mathbb{F} \ ((a+b)+c = a+(b+c))$
> $\quad \quad \quad \forall a,b,c \in \mathbb{F} \ ((a \cdot b)\cdot c = a \cdot (b\cdot c))$
> $\text{(F3)} \quad \exists 0 \in \mathbb{F} \ \forall a \in \mathbb{F} \ (a + 0 = a)$
> $\quad \quad \quad \exists 1 \in \mathbb{F} \ \forall a \in \mathbb{F} \ (a \cdot 1 = a)$
> **Obs.** Los nuetros son distintos, $0\neq 1$.
> $\text{(F4)} \quad \forall a \in \mathbb{F} \ \exists (-a) \in \mathbb{F} \ (a+(-a)=0)$
> $\quad \quad \quad \forall a \in \mathbb{F} \ (a\neq 0 \implies \exists a^{-1}\in \mathbb{F} \ (a\cdot(a^{-1})= 1)$
> $\text{(F5)} \ \forall a,b,c \in \mathbb{F} \ (a\cdot(b+c) = (a \cdot b ) + (a \cdot c))$
> 

> [!example]- **Ejemplos.** 
> - $\mathbb{Q}[\sqrt{ 2 }]$
> - $\mathbb{Q}$
> - $\mathbb{C}$
> - $\mathbb{R}$
> - $\mathbb{Z}_{2}$ es el campo formado por solo dos elementos $\{\overline{0}, \overline{1}\}$. En general, todos los $\mathbb{Z}_{p}$ son campos finitos... la **caracteristica 0**

Es muy importante tomar la caraterística de los campos.

> [!theorem] **Definición** (Característica de $\mathbb{F}$)
> Dado un campo $(\mathbb{F},+,\cdot)$, la **carecterística de** $\mathbb{F}$ es el mínimo número natural positivo $n$ tal que $\underbrace{1+\dots+1 = 0}_{n\text{ veces}}$.
> Si dicho $n$ no existe, por convención, se dice que el campo tiene **característica** $0$.

> [!example]- **Ejemplos.** 
> - $\mathbb{Z}_{2}$ tiene característica $2$.
> - Si $p$ es primo, $\mathbb{Z}_{p}$ tiene característica $p$.
> 

<sup><a href="#user-content-fn-inline-1" id="user-content-fnref-inline-1" data-footnote-ref class="internal">1</a></sup>


A partir de aquí, demostramos propiedades fundamentales.<sup><a href="#user-content-fn-inline-2" id="user-content-fnref-inline-2" data-footnote-ref class="internal">2</a></sup>

<section data-footnotes class="footnotes"><h2 class="sr-only" id="footnote-label">Notas</h2>
<ol>
<li id="user-content-fn-inline-1">

[[Congruencias]] <a href="#user-content-fnref-inline-1" data-footnote-backref class="data-footnote-backref internal">↩</a>

</li>
<li id="user-content-fn-inline-2">

[[Propiedades del Campo]] <a href="#user-content-fnref-inline-2" data-footnote-backref class="data-footnote-backref internal">↩</a>

</li>
</ol>
</section>
