---
modified: 2026-09-28T20:23:51Z
title: "Memorial de Integrales y Derivadas"
publish: true
type: zettel
date: 2026-09-18
status: undone
aliases:
tags:
  - calculus
cssclasses:
  - romana
---
Integración directa, dontaremos por $\displaystyle \int f(x) \, dx$ a **la** antiderivada (en su conceptro más general).

## Derivadas

#### Propiedades Básicas

- Linealidad: $\displaystyle \frac{d}{dx}\left[ \alpha f(x) + \beta g(x) \right] = \alpha f'(x) + \beta g'(x)$
- Regla de Leibniz: $\displaystyle \frac{d}{dx}\left[ f(x)g(x)  \right] = f'(x)g(x) + f(x)g'(x)$
- Cociente: $\displaystyle \frac{d}{dx}\left[ \frac{f(x)}{g(x)}  \right] = \frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^{2}}$ para $g(x) \neq  0$
- Inversa: $\displaystyle \frac{d}{dx} \left[ f^{-1}(x)  \right] = \frac{1}{f'(f^{-1}(x))}$
- Derivación Logaritmica: $\frac{d}{dx}[f(x)^{g(x)}] = f(x)^{g(x)} \left[g'(x) \log\left(f(x)\right) +g(x) \frac{f'(x)}{f(x)}\right]$

#### Derivadas Comunes
- Potencia: $\displaystyle \frac{d}{dx}x^{n} = nx^{n-1}$
- Exponencial Natural: $\displaystyle \frac{d}{dx}e^{x} = e^{x}$
- Exponencial General: $\displaystyle \frac{d}{dx}[a^{x}] = a^{x} \log \left(a\right)$ con $a >0, a\neq 1$
- Logaritmo: $\displaystyle \frac{d}{dx}[\log \left( x \right)] = \frac{1}{x}$ con $x > 0$
- Logaritmo General: $\displaystyle \frac{d}{dx} \log_{a} \left(x\right) = \frac{1}{x \log \left(a\right)}$ con $x > 0, a>0, a\neq 1$

#### Derivadas Trigonométricas
- $\displaystyle \frac{d}{dx} \sin(x) = \cos(x)$
- $\displaystyle \frac{d}{dx} \cos(x) = -\sin(x)$
- $\displaystyle \frac{d}{dx} \tan(x) = \sec^{2}(x)$
- $\displaystyle \frac{d}{dx} \cot(x) = -\csc^{2}(x)$
- $\displaystyle \frac{d}{dx} \sec(x) = \sec(x)\tan(x)$
- $\displaystyle \frac{d}{dx} \csc(x) = -\csc(x)\cot(x)$

Inversas:
- $\displaystyle \frac{d}{dx} \sin^{-1}(x) = \frac{1}{\sqrt{1-x^{2}}}$ con $\left| x \right| < 1$
- $\displaystyle \frac{d}{dx}\cos ^{-1}(x) = -\frac{1}{\sqrt{1-x^{2}}}$ con $\left| x \right| < 1$
- $\displaystyle \frac{d}{dx}\tan ^{-1}(x) = \frac{1}{1+x ^{2}}$
- $\displaystyle \frac{d}{dx} \cot ^{-1}(x) = -\frac{1}{1+x^{2}}$
- $\displaystyle \frac{d}{dx} \sec^{-1}(x) = \frac{1}{\left| x \right| \sqrt{x^{2}-1}}$ con $\left| x \right| > 1$
- $\displaystyle \frac{d}{dx} \csc^{-1}(x) = - \frac{1}{\left| x \right|\sqrt{x^{2}-1}}$ con $\left|  x \right| > 1$

Funciones Hiperbólicas:
- $\displaystyle \frac{d}{dx} \sinh(x) = \cosh(x)$
- $\displaystyle \frac{d}{dx} \cosh(x) = \sinh(x)$
- $\displaystyle \frac{d}{dx} \tanh(x) = \operatorname{sech}^{2}(x)$

Inversas:
- $\displaystyle \frac{d}{dx} \sinh^{-1}(x) = \frac{1}{\sqrt{x^{2}-1}}$
- $\displaystyle \frac{d}{dx} \cosh^{-1}(x) = \frac{1}{\sqrt{x^{2}-1}}$ con $x > 1$
- $\displaystyle \frac{d}{dx} \tanh^{-1}(x) = \frac{1}{1-x^{2}}$ con $\left| x \right| < 1$

## Integrales

#### Propiedades Báscias

- Linealidad: $\displaystyle \int \left[ \alpha f(x)  + \beta g(x) \right] \, dx = \alpha \int f(x) \, dx + \beta \int g(x) \, dx$
- Integración por Partes: $\displaystyle \int u \, dv = uv - \int v \, du$
- Sustición o Cambio de Variable: $\displaystyle \int f(g(x))g'(x) \, dx = \int f(u) \, du$ con $u = g(x)$
- TFC 1: $\displaystyle \frac{d}{dx}\int_{a}^{x} f(t) \, dt = f(x)$
- TFC 2: $\displaystyle \int_{a}^{b} f(x) \, dx = F(b) - F(a)$ donde $F'(x) = f(x)$
- TVM (integrales): $\exists c \in  (a,b)$ tal que $\displaystyle \int_{a}^{b} f(x) \, dx = f(c)(b-a)$, si $f$ es continua

#### Integrales Comunes

- $\displaystyle \int dx = x + C$
- $\displaystyle \int x^{m} \, dx = \frac{x^{m+1}}{m+1} + C$ con $n \neq -1$
- $\displaystyle \int \frac{1}{x^{m}} \, dx = \frac{1}{(-m + 1)x^{m-1}} + C$ para $m>1$, y $\displaystyle \int \frac{1}{x} \, dx = \log \left(x\right) + C$
- $\displaystyle \int e^{x} \, dx = e^{x} + C$
- $\displaystyle \int a^{x} \, dx = \frac{a^{x}}{\log \left(a\right)} + C$ con $a>0, a\neq 1$
- $\displaystyle \int \log \left(x\right) \, dx = x \log \left(x\right)- x + C$

#### Integrales Trigonométricas Lineales

- $\displaystyle \int \sin(x) \, dx = -\cos(x) + C$
- $\displaystyle \int \cos(x) \, dx = \sin(x) + C$
- $\displaystyle \int \tan(x) \, dx = \log \left|\sec(x)\right| + C = - \log \left(\cos(x)\right) + C$
- $\displaystyle \int \cot(x) \, dx = \log \left|\sin(x)\right| + C$
- $\displaystyle \int \sec(x) \, dx = \log \left|\sec(x) + \tan(x)\right| + C$
- $\displaystyle \int \csc(x) \, dx = \log \left|\csc(x) - \cot(x)\right| + C = - \log \left|\csc(x) + \cot(x)\right| + C$

Funciones Trigonométricas Cuadradas (Reducción de Orden)

- $\displaystyle \int \sin^{2}(x) \, dx = \frac{x}{2} - \frac{\sin(2x)}{4} + C$
- $\displaystyle \int \cos^{2}(x) \, dx = \frac{x}{2} + \frac{\sin(2x)}{4} + C$
- $\displaystyle \int \tan^{2}(x) \, dx = \tan(x) - x + C$
- $\displaystyle \int \cot^{2}(x) \, dx = -\cot(x) - x + C$
- $\displaystyle \int \sec^{2}(x) \, dx = \tan(x) + C$
- $\displaystyle \int \csc^{2}(x) \, dx = -\cot(x) + C$

Funciones Hiperbólicas

- $\displaystyle \int \sinh(x) \, dx = \cosh(x) + C$
- $\displaystyle \int \cosh(x) \, dx = \sinh(x) + C$
- $\displaystyle  \int \tanh(x) \, dx = \log \left(\cosh(x)\right) + C$
- $\displaystyle \int \operatorname{sech} (x) \, dx = \tan^{-1}(\sinh(x)) +C$

#### Formas Racionales e Irracionales Especiales (Generadoras de Inversas)

- $\displaystyle \int \frac{1}{x^{2}+a^{2}} \, dx = \frac{1}{a}\tan^{-1}\left(\frac{x}{a}\right)+C$
- $\displaystyle \int \frac{1}{\sqrt{ 1+x^{2} }} \, dx = \sin^{-1}(x)+C$
- $\displaystyle \int \frac{1}{\sqrt{a^{2} -x^{2}}} \, dx = \sin^{-1}\left(\frac{x}{a}\right)+C$ con $a > 0$
- $\displaystyle \int \frac{1}{x\sqrt{x^{2}-a^{2}}} \, dx  = \frac{1}{a}\sec^{-1}\left(\frac{\left| x \right|}{a}\right) + C$ con $a > 0$
- $\displaystyle \int \frac{1}{a^{2}-x^{2}} \, dx = \frac{1}{2a}\log \left(\left| \frac{a + x}{a-x} \right|\right) + C$
- $\displaystyle \int \frac{1}{x^{2}-a^{2}} \, dx = \frac{1}{2a}\log \left(\left| \frac{x-a}{x+a} \right|\right) + C$
- $\displaystyle \int \frac{1}{\sqrt{x^{2}\pm a^{2}}} \, dx = \log \left|x + \sqrt{x^{2} \pm a^{2}}\right|  + C$


Cual es la integral de $\log \left(x\right)$?
Para concluir una pequeña observación. DAda $f(x) = \log \left(x\right)$ calculamos su seria de Taylor alrededor de $x_{0} = 1$, pues $\log \left(0\right)$ no está definida.
