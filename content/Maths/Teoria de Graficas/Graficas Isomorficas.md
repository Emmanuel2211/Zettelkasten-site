---
modified: 2026-08-17T19:55:34Z
title: "Isomorfismo entre Gráficas"
publish: true
type: zettel
date: "2026-06-28"
aliases:
tags: 
 - graphs
cssclasses: 
 - romana
---
> [!theorem] **Def.** (Isomorphism)
>
> Dos gráficas $G$ y $H$ son **isomorphicas**, $G \cong H$, si existen biyecciones $\theta: V(G) \to V(H)$ y $\phi: E(G)\to E(H)$ tales que
> $$\psi_{G}(e)=uv \iff \psi_{H}(\phi(e)) = \theta(u)\theta(v)$$
> Tal par $(\theta, \phi)$ de funciones es llamado **isomorfismo** entre $G$ y $H$.

> [!observation]- **Observación**
>
> En un isomorfismo claramente $G$ y $H$ tienen la misma estructura, lo único que difiere es en el nombre de sus vértices y aristas. Un grafo sin *labels* puede pensarse como un representante de una *clase de equivalencia* de grafos isomórficos.

