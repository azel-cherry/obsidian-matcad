# Equacions en Derivades Parcials

## Preliminars

```ad-def
title: *Camps*

+ Camp ==escalar==: $\quad f:\mathbb{R}^{n}\to \mathbb{R}$
+ Camp ==vectorial==: $\quad F:\mathbb{R}^{n}\to \mathbb{R}^{n}$
	**$\boldsymbol i$-èssima component** d'$F$: $\quad F_{i}:\mathbb{R}^{n}\to \mathbb{R}$
```

[[Anàlisi Complexa#^eqcrm | Equacions de Cauchy-Riemann]]: $\quad u_{x}=v_{y}\,, \quad u_{y}=-v_{x}$


````ad-def
title: Integral de *línia*

> Sigui $\Gamma$ una corba en $\mathbb{R}^{n}$ i $f$ un camp escalar.

Una ==integral de línia== és
	$$ \int_{\Gamma} f(S)\,dS $$
	i representa l'àrea sota la gràfica de d'$f$ dins la corba $T'$.


```ad-met
title: Càlcul

$$ \int_{\Gamma}f(S)\,dS = \boxed{\,\int_{0}^{1} f(\gamma(s))\,||\gamma'(s)||\,ds\,} $$
amb $\gamma:[0,1]\to\Gamma \subset \mathbb{R}^{n}$ una parametrització de $\Gamma$.
```
````


````ad-def
title: Integrals de *superfície*

> Sigui $\Gamma$ una superfície d'$\mathbb{R}^{n}$.

La ==integral de superfície==
$$ \int_{\Gamma} f(S)\,dS $$
representa el volum sota la gràfica d'$f$ restringida a $\Gamma$.


```ad-met
title: Càlcul

$$ \int_{\Gamma}f(S)\,dS = \boxed{\,\int_{0}^{1} \int_{0}^{1} f(\gamma(s,t))\,||\partial_{1}\gamma(s,t) \times \partial_{2}\gamma(s,t)||\,ds\,dt\,} $$
amb $\gamma:[0,1]\times[0,1]\to\Gamma \subset \mathbb{R}^{n}$ la parametrització de $\Gamma$.
```
````


````ad-def
title: *Divergència*

> Sigui F un camp vectorial.

La ==divergència== d'F és
$$ \text{div }F = \boxed{\,\nabla \cdot F = \partial_{1}F_{1} + \dots + \partial_{n}F_{n}\,} \,.$$

Si interpretem $F$ com a flux de partícules, la seva divergència $\text{div }F(x,y)$ indica com varia la densitat de les partícules al punt $(x,y)$ per unitat de temps.
````

```ad-teor
title: Teorema de la **divergència**

> Sigui $\Omega \subset \mathbb{R}^{n}$ un domini acotat amb $\partial\Omega$ la seva frontera, i $F:\mathbb{R}^{n}\to \mathbb{R}^{n}$ un camp vectorial.

Aleshores
$$ \int_{\partial\Omega} F(S)\cdot \vec{n}(S)\,dS = \int_{\Omega} \text{div }F(\vec{x})\,d \vec{x} $$
amb $\vec{n}(S)$ el vector normal exterior de $\partial\Omega$ en $S$.
```


---
## EDPs de **primer ordre quasilineals**

Denotarem una **EDP genèrica** com a $\boxed{\,F(\vec{x},u,\nabla u)=0\,}$.

````ad-def
title: *Linealitat*

+ Una EDP es diu ==lineal== si és una expressió lineal en $u$ i les seves derivades:
$$ \boxed{\,a(x,y)\,u_x + b(x,y)\,u_{y} = c(x,y)\,u\,} $$

+ Una EDP es diu ==semilineal== si és de la forma:
  $$ \boxed{\,a(x,y)\,u_{x} + b(x,y)\,u_{y} = c(x,y,u)\,} $$
  
+ Una EDP es diu ==quasilineal== si és de la forma:
  $$ \boxed{\,a(x,y,u)\,u_{x} + b(x,y,u)\,u_{y} = c(x,y,u)\,} $$

Si una EDP no és quasilineal, aleshores és ==no lineal==.
````
  
```ad-def
title: *Camp vectorial característic*

Expressant una EDP quasilineal **vectorialment**,
$$ (a(x,y,u),b(x,y,u),c(x,y,u)) = \begin{pmatrix}u_{x} \\ u_{y} \\ -1 \end{pmatrix} ,$$
podem associar a la EDP un camp vectorial d'eixos $(x,y,u)$ en què cada punt és tangent a la gràfica d'una solució, anomenat ==camp vectorial característic==.
```

```ad-def
title: *Sistema característic*

El ==sistema característic== d'una EDP quasilineal és:
$$\begin{cases}
x' = a(x,y,u) \\
y' = b(x,y,u) \\
u' = c(x,y,u)
\end{cases}$$

Les solucions del sistema característic es diuen ==línies/corbes característiques== o simplement característiques.
```

```ad-teor
title: Teorema (**unicitat**)

> Considerem un PVI d'una EDP quasilineal
> $$ \begin{cases}
a(x,y,u) + b(x,y,u) = c(x,y,u) \\
u(x_{0},y_{0}) = u_{0}
\end{cases} $$
> amb $a,b,c,x_{0},y_{0},u_{0}\in C^{1}$, $(x_{0},y_{0})$ és una corba simple, i que és no característic per $t=t_{0}$ (compleix la [[#^0aa46a | condició de transversalitat]]).

Aleshores existeix una **única solució** entorn del punt $(x_{0},y_{0})$:
$$ U(x,y) = u(\tau(x,y),t(x,y)) \,,$$
amb $(\tau(x,y),t(x,y))$ [[#^7c31fc | transformació inversa]] de $T:=(\tau,t)\to(x(\tau,t),y(\tau,t))$, i $(x(\tau,t),y(\tau,t),u(\tau,t))$ solució de la família de PVIs del sistema característic:
$$ \begin{cases}
x'(\tau) = a(x(\tau),y(\tau),u(\tau)) \\
y'(\tau) = b(x(\tau),y(\tau),u(\tau)) \\
u'(\tau) = c(x(\tau),y(\tau),u(\tau)) \\
(x(0),y(0),u(0)) = (x_{0}(t),y_{0}(t),u_{0}(t))
\end{cases} $$
```


---
## Lleis de **conservació**

Considerem un cos o sistema que depèn de l'espai i del temps, amb **densitat** $\rho(x,t)$ i **flux** $Q(x,t)$.
+ $\int_{a}^{b}\rho(x,t)\,dx\,$ indica la **massa** a l'interval $[a,b]$ en el temps $t$.
+ $\int_{t_{1}}^{t_{2}}Q(x,t)\,dt\,$ indica la **massa que travessa el punt** $x$ entre $t_{1}$ i $t_{2}$.


---
## **Apèndix**

```ad-not
title: Notació

+ $\boldsymbol{u_{x}} := \displaystyle\frac{\partial u}{\partial x} \,,\quad \boldsymbol{u_{xx}} := \displaystyle \frac{\partial^{2}u}{\partial x^{2}}$
+ $\boldsymbol{\Delta u} := u_{xx} + u_{yy} + \dots$
+ $\boldsymbol{\nabla f} := \begin{pmatrix}\partial_{1}f\\ \vdots \\ \partial_{n}f \end{pmatrix}$
```

```ad-def
title: *Condició de transversalitat*

$$ \begin{vmatrix}
a(x_{0},y_{0},u_{0}) & x_{0}' \\
b(x_{0},y_{0},u_{0}) & y_{0}'
\end{vmatrix} \neq 0 $$
```
^0aa46a

```ad-teor
title: Teorema de la **funció inversa**

$S$ té inversa en un entorn de $(\tau,t)=(0,t_{0})$ si és no singular:
$$ DS(0,t_{0}) = \begin{pmatrix}
x_{\tau} & x_{t} \\
y_{\tau} & y_{t}
\end{pmatrix} = \begin{pmatrix}
a & x_{0}'(t_{0}) \\
b & y_{0}'(t_{0})
\end{pmatrix} $$
```
^7c31fc
