## **Sistemes lineals** d'equacions diferencials

Un ==sistema lineal== d'EDOs és un sistema de la forma
$$ \begin{cases}
\displaystyle\frac{d\,x_{1}}{dt} = a_{11}(t)\,x_{1} + \dots + a_{1n}(t)\,x_{n} + f_{1}(t) \\
\quad \vdots\\
\displaystyle\frac{d\,x_{n}}{dt} = a_{n1}(t)\,x_{1} + \dots + a_{nn}(t)\,x_{n} + f_{n}(t) \\
\end{cases} $$
^ce2cb8

Denotant les següents matrius
$$ \boldsymbol{X} = \begin{pmatrix}
x_{1} \\
\vdots \\
x_{n}
\end{pmatrix} \quad
\boldsymbol{A(t)} = \begin{pmatrix}
a_{11}(t) & \dots & a_{1n}(t) \\
\vdots & \ddots & \vdots \\
a_{n1}(t) & \dots & a_{nn}(t)
\end{pmatrix} \quad
\boldsymbol{F(t)} = \begin{pmatrix}
f_{1}(t) \\
\vdots \\
f_{n}(t)
\end{pmatrix},$$

el sistema es pot escriure com
$$ X'=AX+F .$$

```ad-teor
title: Existència i unicitat

Sigui
$$\begin{cases}
X'=AX+F \\
X(t_{0})=X_{0}
\end{cases}$$
un problema de valor inicial on els elements de les **matrius $A(t)$ i $F(t)$ son funcions contínues** a un interval $I\ni t_{0}$.

Aleshores existeix una ~={green}única solució=~ del PVI.
```

Anàlogament amb les EDOs, la ~={green}solució general=~ d'un sistema és la **solució general del sistema homogeni associat** més una **solució particular**.

#### Sistemes lineals **homogenis**

Un [[#^ce2cb8 | sistema lineal]] es diu que és ==homogeni== quan $f_{i}(t)=0$ $\forall i$.

```ad-prop
title: Principi de Superposició

Siguin $X_{1},\dots,X_{n}$ un conjunt de vectors solució d'un sistema lineal homogeni a un interval $I$.

Aleshores la combinació lineal
$$ X = c_{1}X_{1} + \dots + c_{n}X_{n} $$
amb $c_{1},\dots,c_{n}$ constants, **és també solució** en aquest interval.
```

<div style="page-break-after: always;"></div>

```ad-def
title: Solucions *linealment independents*

Siguin $X_{1},\dots,X_{n}$ un conjunt de vectors solució d'un sistema lineal homogeni a un interval $I$.

Es diu que el conjunt és ==linealment independent== si les úniques constants tals que
$$ X = c_{1}X_{1} + \dots + c_{n}X_{n} = 0$$
son $c_{1}=\dots=c_{n}=0$ .
```

```ad-def
title: *Conjunt fonamental de solucions*

Un conjunt $X_{1},\dots ,X_{n}$ de **solucions linealment independents** d'un sistema lineal **homogeni** a un interval $I$ s'anomena ==conjunt fonamental de solucions==.
```

```ad-prop
Donat $t_{0}\in I$, un vector $X_{0}$ i $n$ solucions linealment independents $X_{1},\dots,X_{n}$ d'un sistema lineal homogeni.

Existeixen $n$ únics números $c_{1},\dots,c_{n}$ tals que
$$ c_{1}X_{1}(t_{0}) + \dots + c_{n}X_{n}(t_{0}) = X_{0} \,.$$
```

```ad-def
title: *Wronksià*

Siguin
$$ X_{1} = \begin{pmatrix}
x_{11} \\
\vdots \\
x_{n1}
\end{pmatrix}, \quad \dots, \quad
X_{n} = \begin{pmatrix}
x_{1n} \\
\vdots \\
x_{nn}
\end{pmatrix}$$
un conjunt de solucions d'un sistema lineal homogeni a un interval $I$.

S'anomena ==Wronksià de $X_{1},\dots,X_{n}$== al determinant
$$ W(X_{1},\dots,W_{n}) = \det \begin{pmatrix}
x_{11} & \dots & x_{1n} \\
\vdots & \ddots & \vdots \\
x_{n1} & \dots & x_{nn}
\end{pmatrix} .$$
```

```ad-prop
Siguin $X_{1},\dots,X_{n}$ un conjunt de vectors solució d'un sistema lineal homogeni a un interval $I$.

Aleshores $W(X_{1},\dots,X_{n})$ és o bé $0$ $\forall t$ o bé diferent de $0$ $\forall t$.
```

```ad-prop
Un conjunt $X_{1},\dots,X_{n}$ de solucions d'un sistema homogeni a un interval $I$ és **linealment independent** si i només si el Wronksià d'aquestes solucions no és nul.
```

<div style="page-break-after: always;"></div>

#### Sistemes lineals amb **coeficients constants**

Trobarem la solució general de sistemes lineals de dimensió 2 homogenis amb coeficients constants
$$ \begin{pmatrix}
x' \\
y'
\end{pmatrix} = \begin{pmatrix}
a & b \\
c & d
\end{pmatrix} \begin{pmatrix}
x \\
y
\end{pmatrix}$$
que denotarem $X'=AX$. 

````ad-met

1. Trobar valors propis $\lambda_{i}$ tal que
$$\,\det(A-\lambda I) = 0 \,.$$

```ad-met
title: Dos *vap*s reals **diferents**
Tenim *vap*s $\,\lambda_{1},\,\lambda_{2}$ .

2. Trobar vectors propis $\,\vec{u_{1}},\,\vec{u_{2}}$ tal que
$$ (A - \lambda_{i}\, I) \,\vec{u_{i}} = 0 \,.$$

3. $\boxed{ X = c_{1}\,e^{\lambda_{1}t}\,\vec{u_{1}} + c_{2}\,e^{\lambda_{2}t}\,\vec{u_{2}} }$
```

```ad-met
title: Un *vap* real **doble**
Tenim *vap* $\,\lambda$ .

2. Trobar vector propi $\,\vec{u}$ tal que
$$ (A - \lambda I) \,\vec{u} = 0 \,.$$

3. Trobar ==vector propi generalitzat== $\vec{v}$ tal que
$$ (A - \lambda I) \,\vec{v} = \vec{u} \,.$$

4. $\boxed{ X = e^{\lambda t} \,(\vec{v} + t\,\vec{u}) }$
```

```ad-met
title: Dos *vap*s **complexos**
Tenim *vap*s $\begin{cases} \,\lambda = \alpha+\beta i \\ \,\overline{\lambda} = \alpha-\beta i \end{cases}$ .

2. Trobar vectors propis $\begin{Bmatrix} \,\vec{w} = \vec{u}+\vec{v}\,i \,\,\\ \,\overline{\vec{w}} = \vec{u}-\vec{v}\,i \,\,\end{Bmatrix}$ tal que
$$ (A - \lambda I) \,\vec{w} = 0 \,.$$

3. $\boxed{ X = c_{1}\, e^{at} \left(\,\cos(\beta t)\,\vec{u}-\sin(\beta t)\,\vec{v}\,\right) +  c_{2}\, e^{at} \left(\,\cos(\beta t)\,\vec{v}+\sin(\beta t)\,\vec{u}\,\right) }$
```
````

<div style="page-break-after: always;"></div>

#### Sistemes d'equacions **autònoms**

Els sistemes d'equacions no lineals generalment no es podran resoldre. No obstant, si aquests son **autònoms** i de **dimensió 2**, es poden obtenir les propietats de les solucions a partir de les seves **projeccions al pla $\boldsymbol{xy}$**. 

Considerem el sistema ==autònom==
$$ \begin{cases}
x' = f(x,y) \\
y' = g(x,y)
\end{cases} $$
amb $f,g$ de classe $C^{1}$.

```ad-def
title: *Òrbites*

Per a tot **punt** $(x_{0},y_{0})$ existirà una **única solució** $(x(t),y(t))$ del sistema autònom que satisfà les condicions inicials $x(0)=x_{0}$, $y(0)=y_{0}$.

Cada solució del sistema és doncs un parell de funcions que defineixen una **corba** $[x(t),y(t)]$ al pla $xy$ anomenada ==òrbita== o ==trajectòria==. 
```

```ad-prop
title: Propietats

+ Si $(x(t),y(t))$ és solució del sistema, aleshores $(x(t+c), y(t+c))$ per tot $c\in \mathbb{R}$ també ho és.
+ Dues trajectòries no tenen punts en comú.

	Si dues solucions $(x,y),(\tilde{x},\tilde{y})$ prenen els mateixos valors $(x_{0},y_{0})$ a $t$ diferents, aleshores existeix $c\in \mathbb{R}$ tal que
	$$ (x(t),y(t)) = (\tilde{x}(t+c),\tilde{y}(t+c)) \,.$$
+ Qualsevol trajectòria tancada és periòdica. 

	Si una solució $(x,y)$ pren el mateix valor a dos instants $t_{0}$ i $t_{0}+T$, aleshores
	$$ (x(t),y(t)) = (x(t+T),y(t+T)) $$
	per tot $t$.
```

```ad-def
title: *Camp de direccions*

A cada punt d'una òrbita, el vector $(f(x,y),g(x,y))$ és un vector tangent a l'òrbita. El conjunt d'aquests vectors s'anomena ==camp de direccions== del sistema.
```

```ad-def
title: *Retrat de fase*

El conjunt de totes les òrbites d'un sistema autònom s'anomena ==retrat de fase== del sistema.
```

<div style="page-break-after: always;"></div>

```ad-def
title: *Isoclines*

Les corbes del pla definides per ~={green}$f(x,y)=0$=~ / ~={pink}$g(x,y)=0$=~ s'anomenen ==isoclines ~={green}verticals=~ / ~={pink}horitzontals=~==.

Notem que les isoclines separen les regions del pla on $f$ i $g$ canvien de signe.
```

```ad-def
title: *Punt d'equilibri*

Es diu que $(x*,y*)$ és un ==punt d'equilibri== del sistema si $f(x*,y*)=0$ i $g(x*,y*)=0$.

L'òrbita d'un punt d'equilibri es redueix a un punt.
```


###### Retrats de fase de sistemes **lineals** amb **coeficients constants**

Considerem el sistema
$$ \begin{pmatrix}
x' \\
y'
\end{pmatrix} = \begin{pmatrix}
a & b \\
c & d
\end{pmatrix} \begin{pmatrix}
x \\
y
\end{pmatrix} \,.$$

Aquests sistemes els podem resoldre explícitament, però conèixer els seus retrats de fase ens permetrà deduir com son els dels sistemes no lineals.

El seu **únic punt d'equilibri** és l'origen $(0,0)$.

``````ad-met

1. Trobar valors propis $\lambda_{i}$ tal que
$$\,\det(A-\lambda I) = 0 \,.$$

````ad-met
title: Dos *vap*s reals **diferents**

Tenim *vap*s $\lambda_{1}$ i $\lambda_{2}$.

2. Tenim el ==sistema canònic==
$$ \begin{pmatrix}
x' \\
y'
\end{pmatrix} = \begin{pmatrix}
\lambda_{1} & 0 \\
0 & \lambda_{2}  \\
\end{pmatrix} \begin{pmatrix}
x \\
y
\end{pmatrix} \,.$$

<div style="page-break-after: always;"></div>

```ad-met
title: $\boldsymbol{0<\lambda_{1},\lambda_{2}}$

Es diu que el sistema és un ==node repulsor==. Les òrbites tendeixen a l'origen quan $t\rightarrow -\infty$.

![[20241215201800.png | $0<\lambda_{1}<\lambda_{2}$ | 250]]

![[20241215202335.png | $0<\lambda_2<\lambda_1$ | 250]]
```

```ad-met
title: $\boldsymbol{\lambda_{1},\lambda_{2}<0}$

Es diu que el sistema és un ==node atractor==. 

![[20241215202631.png | $\lambda_{2}<\lambda_{1}<0$ | 250]]

<div style="page-break-after: always;"></div>

![[20241215202757.png | $\lambda_{1}<\lambda_{2}<0$ | 250]]
```

```ad-met
title: $\boldsymbol{\lambda_{2}<0<\lambda_{1}}$

Es diu que l'origen és una ==sella==. 

![[20241215202932.png | 250]]
```

````

`````ad-met
title: Un *vap* real **doble**

Tenim *vap* $\lambda$.

2. Trobar vectors propis $\,\vec{u_{i}}$ tal que
$$ (A - \lambda_{i}\, I) \,\vec{u} = 0 \,.$$

````ad-met
title: Dos *vep*s linealment **independents**

3. Tenim el ==sistema canònic==
$$ \begin{pmatrix}
x' \\
y'
\end{pmatrix} = \begin{pmatrix}
\lambda & 0 \\
0 & \lambda  \\
\end{pmatrix} \begin{pmatrix}
x \\
y
\end{pmatrix} \,.$$

Totes les òrbites, excepte l'origen, seran semirectes.

<div style="page-break-after: always;"></div>

```ad-met
title: $0<\lambda$

L'origen és un ==node degenerat repulsor==.

![[20241215204341.png | 250]]
```

```ad-met
title: $\boldsymbol{\lambda<0}$

L'origen és un ==node degenerat atractor==.

![[20241215204437.png |  | 250]]
```
````

````ad-met
title: Dos *vep*s linealment **dependents**

3. Tenim el ==sistema canònic==
$$ \begin{pmatrix}
x' \\
y'
\end{pmatrix} = \begin{pmatrix}
\lambda & 0 \\
1 & \lambda  \\
\end{pmatrix} \begin{pmatrix}
x \\
y
\end{pmatrix} \,.$$

<div style="page-break-after: always;"></div>

```ad-met
title: $\boldsymbol{0<\lambda}$

L'origen és un ==node impropi repulsor==.

![[20241215204931.png | 250]]
```
````
`````

````ad-met
title: Dos *vap*s **complexos**

Tenim *vap*s $\lambda=\alpha\pm\beta i$ amb *vep*s $\vec{w}=\vec{u}+\vec{v}i$.

3. Tenim el ==sistema canònic==
$$ \begin{pmatrix}
x' \\
y'
\end{pmatrix} = \begin{pmatrix}
\alpha & -\beta \\
\beta & \alpha  \\
\end{pmatrix} \begin{pmatrix}
x \\
y
\end{pmatrix} \,.$$

```ad-met
title: $\boldsymbol{\alpha=0}$

L'origen és un ==centre==. Totes les òrbites son periòdiques de període $\displaystyle T=\frac{2\pi}{\beta}$.

![[20241215205939.png | 250]]
```

<div style="page-break-after: always;"></div>

```ad-met
title: $\boldsymbol{0<\alpha}$

L'origen és un ==focus repulsor==.

![[20241215210230.png | 250]]
```

```ad-met
title: $\boldsymbol{\alpha<0}$

L'origen és un ==focus atractor==.

![[20241215210252.png | 250]]
```
````
``````