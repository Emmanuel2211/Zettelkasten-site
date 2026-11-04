---
modified: 2026-11-03T15:19:19Z
title: "Función Generadora de Momentos"
publish: true
type: zettel
date: "2026-09-01"
status: undone
aliases:
tags:
 - probability
cssclasses:
 - romana
---
> [!tip]+ **Idea.**

> [!theorem] **Definición.** (f.g.m.)
> Sea $X$ v.a. (discreta o continua), la **función generadora de momentos** $M(t)$ definida
> $$
> M(t) = \operatorname{E} (e^{tX})
> $$
> para valores reales de $t$ en donde esta esperanza existe.
>
> Por el Lema del Estadístico Incociente (LOTUS) se calcula,
> $$
> M(t) = \sum_{x} e^{tx}f_{X}(x)
> $$
> Y en el caso continuo,
> $$
> M(t) = \int_{-\infty}^{\infty} e^{tx} f(x) \, dx
> $$



