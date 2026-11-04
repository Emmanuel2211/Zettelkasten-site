---
modified: 2026-08-25T14:27:40Z
publish: true
type: zettel
date: "2026-08-19"
status: undone
aliases:
tags:
 - algebra
cssclasses: 
 - romana
---
# Suma en $\mathbb{Z}$

> [!theorem] **Definición.** ($+_{\mathbb{Z}}$)
> La **suma en los enteros** es la función $+_{\mathbb{Z}}: \mathbb{Z}\times \mathbb{Z} \to \mathbb{Z}$ tal que
> $$
> [(n,m)]+_{\mathbb{Z}} [(p,q)] = [(n+p,m+q)].
> $$

Dada nuestra definición nos surge una pregunta, ¿Qué pasa si cambiamos los representantes de equivalencia, dara mismos resultados? Esta pregunta busca responder si la operación **está bien definida**, es decir si es invariante ante *representantes*.

> [!theorem] **Proposición.** ($+_{\mathbb{Z}}$ Unívoca)
> Para cualquiera $[(n,m)],[(p,q)] \in \mathbb{Z}$, si $(n',m') \in [(n,m)]$ y $(p',q')\in[(p,q)]$, entonces
> $$
> [(n,m)]+_{\mathbb{Z}}[(p,q)]=[(n',m')]+_{\mathbb{Z}}[(p',q')].
> $$
> Es decir, la suma está *bien definida*.

> [!proof]- **Proof.** 
> Sean $(n,m), (p,q) \in \mathbb{N} \times \mathbb{N}$ considero $(n',m'), (p',q') \in \mathbb{N}\times \mathbb{N}$ tales que $(n,m) \sim (n',m')$ y $(p,q)\sim(p',q')$.
> Dado lo anterior, por la definición de $\sim$ tenemos
> $$
> \begin{align}
> n+ m' &= m +n' \\
> p+q' &= q + p'
> \end{align}
> $$
> Sumando estas ecuaciónes tenemos
> $$
> (n+m') + (p+q') = (m+n') + (q+p')
> $$
> Por asociatividad y conmutatividad de la suma en $\mathbb{N}$ concluimos
> $$
> \therefore \overline{(n,m)}+_{\mathbb{Z}} \overline{(p,q)} = \overline{(n',m')}+_{\mathbb{Z}} \overline{(p',q')} \tag*{$\blacksquare$}
> $$



> [!theorem] **Teorema.** (Propiedades de $+_{\mathbb{Z}}$)
> El conjunto $\mathbb{Z}, +$ cumple:
> - Asociatividad: $\forall a,b,c \in \mathbb{Z} \quad (a+b)+c = a+(b+c)$.
> - Conmutatividad: $\forall a, b \in \mathbb{Z} \quad a + b = b + a$
> - Neutro aditivo: $\exists \theta \in \mathbb{Z} \text{ tal que } \forall  a \in \mathbb{Z} \quad a+\theta=a =\theta+a .$
> - Inverso aditivo: $\forall a \in \mathbb{Z} \ \exists \hat{a} \in \mathbb{Z} \text{ tal que } a + \hat{a} = \hat{a} + a = \theta$.

> **Notación.** $\theta = [(0,0)]$ o, en ya generalizado, $0$.

> [!proof]- **Proof.** 
> 1. fjdk
> 2. jfdks
> 3. **P.D.** $\exists \theta \in \mathbb{Z}\text{ tal que } \forall a \in \mathbb{Z} \quad a + \theta = \theta + a = a$
> Pronemos $\theta = \overline{(0,0)}$. Sea $a \in \mathbb{Z}$ digamos $a = \overline{(n,m)}, n,m \in \mathbb{N}$.
> $$
> \begin{align}
> a + \theta = \overline{(n,m)} + \overline{(0,0)} &= \overline{(n+0, m+0)} \\
> &= \overline{(n,m)} = a.
> \end{align}
> $$
> Analogamente, $\theta + a = a$
> $$
> \therefore \theta = \overline{(0,0)} \text{ es neutro aditivo en }\mathbb{Z} \tag*{$\blacksquare$}
> $$
> 4. **P.D.** 
> Sea $a \in \mathbb{Z}$, digamos $a = \overline{(n,m)}$ con $n,m \in \mathbb{N}$. Proponemos como inverso aditivo a $\hat{a} = \overline{(m,n)} \in \mathbb{Z}$. Tenemos
> $$
> a + \hat{a} = \overline{(n,m)} + \overline{(m,n)} = \overline{(n+m,m+n)} = \overline{(0,0)} = \theta
> $$
> ya que $(n+m, m+n) \sim (0,0)$ pues $(n+m) + 0 = (m+n) + 0$ por la conmutatividad de $+_{\mathbb{N}}$.
> Analogamente, $\hat{a} + a = \theta$
> $$
> \therefore \hat{a} \text{ es un inverso aditivo para } a \in \mathbb{Z} \tag*{$\blacksquare$}
> $$


> [!theorem] **Proposicion.** (Unicidad de $\theta$ y $\hat{a}$)
> 1. En $\mathbb{Z},\cdot,+$ el nuetro aditivo es **único**.
> 2. En $\mathbb{Z},\cdot,+$ el inverso aditivo es **único**

> [!proof]- **Proof.** 
> 1. Sean $\theta,\theta' \in \mathbb{Z}$ neutros aditivos en $\mathbb{Z}$. **P.D.** $\theta = \theta'$
> $$
> \begin{align}
> \theta + \theta' = \theta' \quad \text{ y } \quad \theta + \theta' = \theta \\
> \therefore \theta = \theta'
> \end{align}
> $$

Así, podemos definir $\hat{a}$:
> **Notación.** Sea $a \in \mathbb{Z}$. El **inverso aditivo** de $a$, denotado con $-a$, es el único entero tal que $a+(-a)=0$ y $(-a)+a=0$.

> [!theorem] **Teorema.** (Más propiedades)
> Sea $a,b,c \in \mathbb{Z}$.
> 1. $\forall a \in \mathbb{Z}\ (-(-a) = a)$
> 2. Cancelación $+_{\mathbb{Z}}$: 
> $$
> \begin{align}
> a+c = b+c \implies a=b ;  \\[0.5em]
> c+a = c+b \implies a =b.
> \end{align}
> $$


Regresando al argumento de la motivación de $\mathbb{Z}$, veamos que $\mathbb{Z}$ sí cumple lo que $\mathbb{N}$ no cumplía. Es decir, veamos que *todas* las ecuaciones de la forma
$$
a=b+_{\mathbb{Z}}x \ \ \ \ \text{ y } \ \ \ \ a = x +_{\mathbb{Z}} b
$$
Si tienen solución en $\mathbb{Z}$.





