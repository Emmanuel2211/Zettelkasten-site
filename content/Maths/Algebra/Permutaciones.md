---
modified: 2026-08-31T15:34:35Z
title: "Permutaciones"
publish: true
type: zettel
date: "2026-07-03"
aliases:
 - Permutations
tags: 
 - algebra
cssclasses: 
 - romana
---
> ¿Cuántas listas de $n$ objetos podemos hacer?
> Sean { :luc_square:, :luc_circle:, :luc_triangle: }, $n = 3$, vemos que podemos hacer $6$ listas diferentes.
> 
> ¿Para $n$ objetos? Podemos pensarlo en cuanto a los objetos que vamos a poner en cada lugar de la lista.
> $$
> \underset{1}{\_\_} , \underset{2}{\_\_},\underset{3}{\_\_},\dots,\underset{n-1}{\_\_},\underset{n}{\_\_}
> $$
> Para $1$, hay $n$ posibles objetos para colocar.
> Para $2$, hay $n-1$ objetos posibles
> $\vdots$
> Para $n-1$, hay $2$ objetos posibles
> Para $n$, queda solo $1$ objetos posible.
> Es decir,
> $$
> \begin{align}
> \text{Total de listas posibles}  &= n (n-1) (n-1)\cdots 2 \cdot 1 \\[1em]
> P_{n}&= n!
> \end{align}
> $$
> 



---

> [!theorem] **Definición.** (Permutaciones)
> A las ordenaciones de un conjunto con $n$ elementos tomados de $n$ en $n$ se les llama **permutaciones de** $n$ **elementos**. Se denota
> $$
> P_{n} = O_{n}^{n} = n!
> $$

> **Convicción.** $0! = 1$



Es claro de donde viene la notación $n!$, un caso especial de las ordenaciones.^[[[Ordenaciones sin Repeticion]]] Es decir, las **ordenaciones** *generalizan* a las *permutaciones*.

Vemos ejemplos:

> [!example]- **Ejemplo 1.** 
> Supongamos que hay cuatro personas que van a sentarse en cuatro lugares. Sean las iniciales de sus nombres $\{ A,B,C,D \}$. Entonces existe $4! =24$ maneras distintas de sentar a la mesa a las cuatro personas. 

> [!example]- **Ejemplo 2.** 
> Se quiere colocar 11 libros en un estante, de los cuales 4 son novelas, 3 son ensayos, 3 son poemas y 1 es de cuentos. ¿De cuántas maneras puede hacerse esto si se quiere que los libros del mismo tipo queden juntos?
> 
> Por el Principio General del Producto, hay $P_{4}P_{3}P_{3}P_{1}$ arreglos de los libros de manera que las novelas queden primero, los ensayos segundo, los poemas tercer y el de cuentos al final. Similarmente para cada posible arreglo de los tipos de libros, hay $P_{4}P_{3}P_{3}P_{1}$ arreglos. Entonces, como hay $P_{4}$ posibles órdenes de los tipos de libros, por el Principio del Producto hay $(P_{4})P_{4}P_{3}P_{3}P_{1} = 4!\cdot 4! \cdot 3! \cdot 3! \cdot 1! = 20736$ maneras de acomodar los libros en el estante de forma que los libros de un mismo tipo queden juntos.




Una definición alternativa es

> [!theorem] **Definición 2.** (Permutaciones)
> Sea $A$ un conjunto finito. Las **permutaciones del conjunto** $A$ son las funciones biyectivas de $A$ en $A$.

