
## Recordatori

```ad-def
title: *Camps*

+ Camp **escalar**: $\quad f:\mathbb{R}^{n}\to \mathbb{R}$
+ Camp **vectorial**: $\quad F:\mathbb{R}^{n}\to \mathbb{R}^{n}$
	+ **$\boldsymbol i$-èssima component** d'F: $\quad F_{i}:\mathbb{R}^{n}\to \mathbb{R}$
```

+ Equacions de **Cauchy-Riemann**: $\quad u_{x}=v_{y}\,, \quad u_{y}=-v_{x}$


````ad-def
title: Integral de *línia*

> Sigui $\Gamma$ una corba en $\mathbb{R}^{n}$ i $f$ un camp escalar.

Una integral de línia és
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

La integral de superfície
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

La divergència d'F és
$$ \text{div }F = \nabla \cdot F = \partial_{1}F_{1} + \dots + \partial_{n}F_{n} \,.$$

Si interpretem $F$ com a flux de partícules, la seva divergència $\text{div }F(x,y)$ indica com varia la densitat de les partícules al punt $(x,y)$ per unitat de temps.
````

```ad-teor
title: Teorema de la **divergència**

> Sigui $\Omega \subset \mathbb{R}^{n}$ un domini acotat amb $\partial\Omega$ la seva frontera, i $F:\mathbb{R}^{n}\to \mathbb{R}^{n}$ un camp vectorial.

Aleshores
$$ \int_{\partial\Omega} F(S)\cdot \vec{n}(S)\,dS = \int_{\Omega} \text{div }F(\vec{x})\,d \vec{x} $$
amb $\vec{n}(S)$ el vector normal exterior de $\partial\Omega$ en $S$.
```


## **Apèndix**

```ad-not
title: Notació

+ $\boldsymbol{u_{x}} := \displaystyle\frac{\partial u}{\partial x} \,,\quad \boldsymbol{u_{xx}} := \displaystyle \frac{\partial^{2}u}{\partial x^{2}}$
+ $\boldsymbol{\Delta u} := u_{xx} + u_{yy} + \dots$
+ $\boldsymbol{\nabla f} := \begin{pmatrix}\partial_{1}f\\ \vdots \\ \partial_{n}f \end{pmatrix}$
```