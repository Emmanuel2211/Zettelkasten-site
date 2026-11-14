---
modified: 2026-11-13T23:34:20Z
title: "Discusión - El Grafo"
publish: true
type: zettel
date: "2026-08-17"
status: seed
aliases:
tags: 
 - graphs
cssclasses: 
 - romana
---
La estructura de nuestro universo discreto parte de un conjunto finito $V = \{ x_{1},\dots,x_{n} \}$ cuyos elementos (*vértices*) pueden estar relacionados entre sí, esto es una **gráfica**.<sup><a href="#user-content-fn-inline-1" id="user-content-fnref-inline-1" data-footnote-ref class="internal">1</a></sup> 
Más alla del dibujo... Podemos describir una gráfica con el número de veces que un vértice esta relacionado con otro, conocido como **valencia** := $d(v_{0})$... Surge la pregunta: ¿En cualquier grafo, cuanto vale la suma de las valencias de cada árista? Esto es, $\displaystyle \sum_{v_{i} \in V} d(v_{i}) = 2 \lvert E \rvert$.
Con este tipo de preguntas podemos concluir una barbarildad de cosas y conclusiones...

En nuestro estudio nos interesa un tipo específico, la **gráfica simple**<sup><a href="#user-content-fn-inline-2" id="user-content-fnref-inline-2" data-footnote-ref class="internal">2</a></sup>, la cual descarta los *bucles* y su función de *incidencia* es *inyectiva*.

Es muy interesante ver que podemos describir gráficas en una matriz... aplicar operaciones de matrices y descibrir cosas!



> OJO!
> grupos de simetria

<section data-footnotes class="footnotes"><h2 class="sr-only" id="footnote-label">Notas</h2>
<ol>
<li id="user-content-fn-inline-1">

[[Grafica]] <a href="#user-content-fnref-inline-1" data-footnote-backref class="data-footnote-backref internal">↩</a>

</li>
<li id="user-content-fn-inline-2">

[[Grafica]] <a href="#user-content-fnref-inline-2" data-footnote-backref class="data-footnote-backref internal">↩</a>

</li>
</ol>
</section>
