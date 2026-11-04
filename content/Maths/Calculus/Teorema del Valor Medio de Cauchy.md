---
modified: 2026-03-31T01:17:30Z
publish: true
type: zettel
status: 
links: 
tags: []
date: "2026-03-30"
aliases: [ "" ]
cssclasses: romana
materia: 
---
TARGET DECK: Calculo

**Teorema 8.** (Teorema del Valor Medio de Cauchy) #flashcard 
Si $f$ y $g$ son continuas en $[a,b]$ y diferenciables en $(a,b)$, entonces existe un número $x$ en $(a,b)$ tal que
$$
[f(b)-f(a)]g'(x) = [g(b)-g(a)]f'(x).
$$
(Si $g(b) \neq g(a)$ y $g'(x) \neq 0$, esta ecuación puede escribirse como
$$
\frac{f(b)-f(a)}{g(b)-g(a)} = \frac{f'(x)}{g'(x)}.
$$
Observemos que si $g(x) = x$ para todo $x$, entonces $g'(x) = 1$, y se obtiene el Teorema del Valor Medio. Por otra parte, aplicando el Teorema del Valor Medio a $f$ y a $g$ por separado, se deduce que existe un $x$ e $y$ en $(a,b)$ que verifican
$$
\frac{f(b)-f(a)}{g(b)-g(a)} = \frac{f'(x)}{g'(y)};
$$
pero no existe ninguna garantía de que los $x$ e $y$ hallados de esta manera sean iguales.
Estas consideraciones pueden hacer pensar que el Teorema del Valor Medio de Cauchy es muy difícil de demostrar; pero en realidad basta aplicar uno de los artilugios más simples).
<!--ID: 1774919850403-->




Proof.

