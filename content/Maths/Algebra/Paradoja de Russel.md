---
modified: 2026-04-29T02:17:13Z
title: "Russel's Paradox"
publish: true
type: zettel
status: 
links: 
tags: []
date: "2026-03-26"
aliases: [ "" ]
cssclasses: romana
materia: 
---
Let's define a false axiom.
**Axiom Schema of Comprehension.** *If $P$ is a property, then there exists a set $Y = \{  x:P(x) \}$.*

Consider the set $S$ whose elements are all those (and only those) sets that are not members of themselves: $S = \{ X:X \not\in X \}$. 
- **Does $S$ belong to $S$?** 
If $S$ belongs to $S$, then $S$ is not a member of itself, and so $S \not\in S$. On the other hand, if $S \not\in S$, then $S$ belongs to $S$. In either case, we have contradiction.

Thus we must conclude that $\{ X : X \not\in X \}$ is not a set, and we must revise the intuitive notion of a set.

To solve this parados we abandon the Schema of Comprehension and keep its weak version, the Schema of Separation.![[Axiomas Zermelo-Fraenkel#^28a139|Schema of Separation]]
This results provides: **The set of all sets does not exists**, its paradoxical.