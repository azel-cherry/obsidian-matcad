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

$\,$

#### Sistema lineal **homogeni**

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

Trobarem la solució general de **sistemes lineals de dimensió 2 homogenis** amb coeficients constants
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

2. Trobar vectors propis $\begin{Bmatrix} \,\vec{w} = \vec{u}+\vec{v}\,i \\ \,\overline{\vec{w}} = \vec{u}-\vec{v}\,i \end{Bmatrix}$ tal que

$$ (A - \lambda I) \,\vec{w} = 0 \,.$$

3. $\boxed{ X = c_{1}\, e^{at} \left(\,\cos(\beta t)\,\vec{u}-\sin(\beta t)\,\vec{v}\,\right) +  c_{2}\, e^{at} \left(\,\cos(\beta t)\,\vec{v}+\sin(\beta t)\,\vec{u}\,\right) }$
```
````