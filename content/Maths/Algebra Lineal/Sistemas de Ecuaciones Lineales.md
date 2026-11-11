---
modified: 2026-07-30T17:51:16Z
title: "Sistemas de Ecuaciones Lineales"
publish: true
type: zettel
date: "2026-07-30"
aliases:
tags: 
 - linear algebra
cssclasses: 
 - romana
---
> [!theorem] **Definición** (Sistema de Ecuaciones Lineales)
>
> Dado un campo $\mathbb{F}$ y un **sistema de $m$ ecuaciones lineales en $n$ incógnitas** de la siguiente forma:
> 
> $$
> \begin{align}
> a_{11}x_{1} + a_{12}x_{2}+\dots+ a_{1n}x_{n} &= b_{1} \\
> a_{21}x_{1} + a_{22}x_{2} + \dots + a_{2n}x_{n} &= b_{2} \\
> &\vdots \\
> a_{m1}x_{1} + a_{m2}x_{2} + \dots + a_{mn}x_{n} &= b_{m}
> \end{align}
> $$
> donde los **coeficientes** $a_{ij}$ y los **términos idependientes** $b_{i}$ son elementos de $\mathbb{F}$.
> 
> Denotamos $S$ al conjunto de **soluciones** del sistema $(x_{1},\dots,x_{n}) \in \mathbb{F}^{n}$, este conjunto es una de $n$-adas ordenadas, y se requiere que las soluciones lo sean de todas las ecuaciones dadas. Observamos que $S \subseteq \mathbb{F}^{n}$.

Pero... ¿cómo podemos asegurar que el sistema tiene solución? Es conveniente, para comenzar, considerar sistemas los cuales siempre tengan solución.

> [!theorem] **Definición.** (Sistema de Ecuaciones Homogéneo)
>
> Llamaremos **homogéneos** a los sistemas de ecuaciones, si todos sus términos independientes son $b_{i} = 0$. Observamos que siempre tienen al menos una solución pues, $(0,\dots,0) \in \mathbb{F}^{n}$. Por lo que el conjunto $S_{h}$ de soluciones de un sistema homogéneo es no vacío.