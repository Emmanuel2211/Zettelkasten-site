---
modified: 2026-09-03T15:54:18Z
title: "Ejercicios Proba"
publish: true
---
1. 9 llaves y solo 1 abre la puerta, si prueba las llaves de manera aleatoria descartando las que no abren... Cual es la proba de que abra la puerta en el $k$-esimo intento
	- $9!$

2. Tiene 287 canciones y solo escucha 25 en su trayecto, y no se repiten:
	- ¿Cuál es la probabilidad de que si se escuchan 15 canciones, sean exactamente las 15 de la lista original en el orden exacto?
$$
\lvert \Omega \rvert = O_{25}^{287} = \frac{287!}{(287-25)!}  = \frac{287!}{262!}
$$
Algo sobre que las primeras 15 estan fijas... y usamos principio del producto.
$$
\lvert A \rvert  = 1 \cdot O_{10}^{272} = \frac{272!}{262!}
$$
$$
\implies P[A] = \frac{\lvert A \rvert }{\lvert \Omega \rvert }
$$
	- Si su cancion facorita es la no. 21, cual es la proba que aparezca en las 25 canciones.
Otra vez, "fijamos" las 25, y luego solo fijamos una, y utilizamois principio del producto.
$$
\lvert A \rvert  = 25 \cdot O_{24}^{186}
$$

3. Una casa tiene una cerradura de 4 cifras. que admite numeros del 0 al 9.
	- ¿Cuántas combinaciones de bo de hacer para cerciorarme de abrir la casa?
4. Cosidera un juego de loteria donde se escoge 6 num de 49 posibles.

12 bolas rojas, 16 azules y 18 bolas verdes . tiene que sacar de una urna 7 bolas.
- Calcule 3rojas, 2azules, 2 verdes
- calcule la prob de que almenos saque 2 rojas. lo hicmos por medio de complemento.
- todas las 7 del mismo color.... sumamos probabilidades...