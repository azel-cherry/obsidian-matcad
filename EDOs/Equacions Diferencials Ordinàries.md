## Introducció

#### Equacions diferencials ordinàries de **primer ordre**

Una ==equació diferencial ordinària de primer ordre== (EDO de primer ordre) per a una funció $y(x)$ és una equació
$$ F(x,y,y')=0 .$$

```ad-def
title: *Forma explícita*

La ==forma explícita== d'una EDO de 1r ordre és
$$ y'(x)=f(x,y(x)) .$$
```

```ad-def
title: *EDO autònoma*

Una EDO es diu ==autònoma== si $f$ no depèn explícitament de $x$, és a dir, és de la forma
$$ y'=f(y) .$$
```

```ad-def
title: *Solució general*

La ==solució== d'una EDO és una funció $y(x)$ diferenciable definida en un interval $I$ tal que $\forall x\in I$, $y'(x)=f(x,y(x))$. 

En general, les solucions d'una EDO de 1r ordre formen una família uniparamètrica de funcions, depenent d'un paràmetre constant. Aquesta expressió s'anomena ==solució general==.
```

#### Problemes de valor inicial

Una EDO de 1r ordre amb una condició inicial s'anomena ==problema de valor inicial== (PVI), i és de la següent forma:
$$\begin{cases*}
y' = f(x,y) \\
y(x_0) = y_0
\end{cases*}$$

```ad-def
title: *Solució particular*

La solució d'un PVI s'anomena ==solució particular==.
```

```ad-def
title: *Solució d'equilibri*

Un cas particular  de solucons d'un PVI son les ==solucions d'equilibri==, les quals no depenen de la variable independent. És una solució de la forma $y(x)=k$.
+ $y(x)=k$ és solució d'equilibri de $y'=f(x,y)$ si i només si $f(x,k)=0$ per a tot $x$ per al qual $f(x,y)$ estigui ben definit.
+ Si l'equació és autònoma ($y'=f(y)$), les solucions d'equilibri $y(x)=k$ estan donades pels zeros de $f$ i estan definidesd $\forall x \in \mathbb{R}$.
```

---
## **Existència**, **unicitat** i **continuitat** de solucions

```ad-teor
title: Teorema de **Picard-Lindelöf**

Sigui $R$ una regió rectangular del pla $xy$ definida per $R = \{ (x,y) \mid a \leq x \leq b, c \leq y \leq d \}$ que conté el punt $(x_0,y_0)$. Suposem que $f$ i $\frac{df}{dx}$ son contínues a $\mathbb{R}$.

Aleshores ==existeix una **única** solució== $y(x)$ definida a un interval $I_{o}=(x_o-h,x_o+h)$ amb $h>0$ contingut a $[a,b]$ del PVI
$$\begin{cases}
y'=f(x,y) \\
y(x_o)=y_0 \\
\end{cases}$$

A més, es compleix que la solució $y(x;x_o,y_o)$ és una ==funció **contínua**== respecte $x_o,y_o$.

```

```ad-teor
title: Teorema de **Peano**

Sigui $f$ una funció **contínua** i $y'(x) = f(x,y(x))$ una EDO de primer ordre.

Aleshores ==**existèix** solució== per tot PVI d'aquesta EDO.
```

```ad-def
title: Funció *de Lipschitz*

Una funció $f$ és ==de Lipschitz== si per tot $y,z \in (c,d)$ existeix $L>0$ tal que
$$ \mid f(x,y)-f(x,z) \mid < L\mid y-z \mid .$$
```

Per assegurar ==unicitat==, és suficient amb que $f$ sigui de Lipschitz respecte la variable $y$.

```ad-teor
Siguin $f$ i $\frac{df}{dy}$ contínues a $\mathbb{R}$.

Aleshores dues corbes solució de $y'=f(x,y)$ diferents no es poden tallar a $\mathbb{R}$.
```

Si $f$ no és diferenciable, el PVI pot tenir més d'una solució.

---
## Mètodes **analítics** de resolució

#### Equacions **separables**

Una ==EDO de variables separades== (o separable) és una equació del tipus 
$$ y'(x) = g(x)h(y) .$$

```ad-met
title: Mètode per equacions **separables**

+ Reescribim l'equació: $\displaystyle\frac{dy}{dx} = g(x)h(y)$
+ Separem $y$s i $x$s: $\displaystyle\frac{dy}{h(y)} = g(x)dx$
+ Integrem: $\displaystyle \int \frac{1}{h(y)}dy = \int g(x)dx$
```

#### Equacions diferencials **lineals**

Sigui $y(x)$ la incògnita, una ==EDO lineal== és una equació de la forma
$$ y'(x)+a(x)y(x)=b(x) ,$$
on $a(x)$ i $b(x)$ son funcions aribitràries.

```ad-def
title: Equació *homogènia associada*

Se li diu ==equació homogènia associada== a una EDO lineal amb $b(x)\equiv 0$. És a dir,
$$ y'(x)+a(x)y(x)=0 \,,$$
que és una EDO de variables separades.

La **solució general** de l'equació homogènia associada és
$$\boxed{\, y_{h}(x)=Ce^{-\int a(x)dx} \,}\,.$$
```

```ad-prop
Siguin $y_1(x)$ i $y_2(x)$ dues solucions de l'equació lineal $y'(x)+a(x)y(x)=b(x)$.

Aleshores $y_1(x)-y_2(x)$ és solució de l'equació homogènia associada $y'(x)+a(x)y(x)=0$.
```

````ad-prop
Sigui $y'(x)+a(x)y(x)=b(x)$ una EDO lineal amb
+ $y(x)$ la solució general,
+ $y_p(x)$ una solució particular, i
+ $y_h(x)$ la solució general de la seva equació homogènia associada.

Aleshores $\boxed{\,y(x)=y_h(x)+y_p(x)\,}$ .

```ad-met
title: Mètode de **variació de les constants**

Per trobar $y_p(x)$ farem servir el ==*mètode de variació de les constants*==, que consisteix en buscar una solució particular de la forma
$$ \boxed{y_p(x)=C(x)e^{-\int a(x)dx}} \,.$$
```
````

```ad-met
title: Mètode per **equacions lineals**

Tenim una EDO lineal de la forma $y'(x)+a(x)y(x)=b(x)$.

1. Trobem la solució de ==$\int a(x)dx := A$==.
2. Resolem l'equació homogènia associada $y'(x)+a(x)y(x)=0$ fent servir que ==$y_{h}(x)=Ce^{-A}$==.
3. Busquem una solució particular ==$y_p(x)=C(x)e^{-A}$==.
4. Substituïm $y_p(x)$ a l'EDO inicial. Aïllem i calculem $C(x)$, i la substituïm a $y_p(x)$.
5. Calculem ==$y(x)=y_h(x)+y_p(x)$==, que quedarà en funció $C$.
6. Apliquem condició inicial per calcular $C$.

Alternativament:
$$y(x) = \left( \int e^{\int a(x)\,dx}\, b(x)\, dx \right) e^{-\int a(x)dx}$$
```

#### Equacions **homogènies**

Una ==EDO homogènia== és una EDO de la forma
$$ y' = f\left( \frac{y}{x} \right) .$$

```ad-met
title: Mètode per **equacions homogènies**

Tenim una EDO de la forma $\displaystyle y'=f\left(\frac{y}{x}\right)$.

1. Fem el canvi de variable $\displaystyle u(x)=\frac{y(x)}{x}$, arribant a que

$$ u'(x)=\frac{du}{dx}=\frac{f(u(x))-u(x)}{x} .$$

2. Resolem com a equació de variables separades.
```

---
## Mètodes **qualitatius** de resolució

#### Camps direccionals

Moltes vegades no és possible aplicar els mètodes anteriors. En aquests casos representarem geomètricament les solucions per obtenir informació sobre les seves propietats.

```ad-met
title: Mètode dels *camps direccionals*

Considerem l'EDO $y'(x)=f(x,y)$.

Al ser $f$ la derivada de la solució $y$, el pendent de la recta tangent a la gràfica de $y(x)$ a qualsevol punt $x$ vindrà donat per $f(x,y(x))$.

A cada punt del pla $(x,y)$ dibuixarem una fletxa indicant la pendent $f(x,y)$, obtenint el ==camp direccional== de la solució de l'EDO inicial.
```

```ad-def
title: *Isocline*

Sigui $y'(x)=f(x,y)$ una EDO de primer ordre, i donada $m\in\mathbb{R}$, les corbes al pla $(x,y)$ definides per $f(x,y)=m$ es diuen ==isoclines==.

És a dir, són corves en què la pendent de la recta tangent a la gràfica de la solució és la mateixa.
```

---
## Equacions diferencials **exactes**

Una EDO de primer ordre
$$ M(x,y) + N(x,y)\,y' = 0 $$
es diu que és ==exacta== si:
+ $M$ i $N$ son funcions de classe $C^{1}$ en $\mathbb{R}$
+ $N(x,y)\neq 0$ per tot $(x,y)\in \mathbb{R}$
+ Existeix una funció $V(x,y)$ tal que
$$ \frac{dV}{dx}=M\,, \quad \frac{dV}{dy}=N\,, \quad \forall (x,y)\in \mathbb{R}\,.$$

La funció $V(x,y)$ s'anomena ==funció potencial==.

```ad-def
title: *Factors integrants*

Sigui $M(x,y) + N(x,y)\,y'=0$ una equació **no exacta**.

Direm que una funció $\mu(x,y)$ és un ==factor integrant== de l'equació si
$$ \boldsymbol{\mu(x,y)}\,M(x,y) + \boldsymbol{\mu(x,y)}\,N(x,y)\,y' = 0 \,.$$
```

---
## Equacions diferencials **autònomes**

Les equacions autònomes
$$ y' = f(y) $$
+ són de **variables separades**, i
+ els seus **equilibris** són els **zeros** de la funció $f$.

```ad-def
title: *Esquema de fase*

Donada una EDO autònoma $y'=f(y)$ amb $f(y)$ ben definida i contínua, el comportament de les solucions de l'equació es pot determinar tan sols amb els pendents al llarg de l'eix de les $y$s, els quals donen lloc a l'==esquema de fase unidimensional== de l'EDO.
```

```ad-teor
Donada una EDO autònoma $y'=f(y)$:
+ Si $y(x)$ és solució, també ho son $y_{c}(x):=y(x+c)$ $\forall c\in \mathbb{R}$.

	+ Si $y(x)$ no és un equilibri, aleshores és estrictament creixent o decreixent.

+ Si una solució $y(x)$ és acotada, aleshores tendeix a una solució d'equilibri quan $x\rightarrow\pm\infty$.

+ Si $f(a)=f(b)=0$ i $y(x_{0})\in(a,b)$:
	+ Si $f(y)$ ~={green}$>$=~ $0$ per a $y\in(a,b)$, $\displaystyle \lim_{x\to-\infty}y(x)=$ ~={green}$a$=~ i $\displaystyle \lim_{x\to\infty}y(x)=$ ~={green}$b$=~.
	+ Si $f(y)$ ~={green}$<$=~ $0$ per a $y\in(a,b)$ $\displaystyle \lim_{x\to-\infty}y(x)=$ ~={green}$b$=~ i $\displaystyle \lim_{x\to\infty}y(x)=$ ~={green}$a$=~.
```

---
## EDOs d'**ordre superior**

Una ==EDO d'ordre $n$== per a una funció $y(x)$ és una equació del tipus
$$ F(x,y,y',\dots,y^{(n)}) = 0 \,,$$

que de forma estàndard s'escriu com a
$$ y^{(n)} = f(x,y,y',\dots,y^{(n-1)}) \,,$$

i és equivalent a un sistema d'EDOs de primer ordre:
$$ \vec{z}' = f(x, \vec{z}) \,,$$
$$\text{on}\quad
\vec{z} = \begin{pmatrix}
y \\
\vdots \\
y^{n-1}
\end{pmatrix} \,.$$

La ==solució== d'una EDO d'ordre $n$ és una funció real $y(x)$ definida en un interval $I$, $n$ vegades diferenciable.

```ad-def
title: EDO lineal *d'ordre $\boldsymbol n$*

Una ==EDO lineal d'ordre $n$== és una EDO de la forma
$$ a_{0}(x)\,y + a_{1}(x)\,y' \dots + a_{n-1}(x)\,y^{(n-1)} + y^{n} = f(x) .$$
```

```ad-def
title: EDO *homogènia* d'ordre $\boldsymbol n$

Sigui $a_{0}(x)\,y + \dots + y^{n} = f(x)$ una EDO lineal, direm que és ==homogènia== quan $f(x)=0$.
```

#### EDOs de **segon ordre lineals**

Una EDO ==lineal de segon ordre== és una EDO de la forma
$$ y''(x) + a(x)y'(x) + b(x)y(x) = f(x) .$$

````ad-def
title: Equació *homogènia associada de segon ordre*

Sigui $y''(x) + a(x)y'(x) + b(x)y(x) = f(x)$ una EDO lineal de segon ordre, la seva ==equació homogènia associada== és 
$$ y''(x) + a(x)y'(x) + b(x)y(x) = 0 .$$

```ad-prop
Siguin $y_{1}(x)$ i $y_{2}(x)$ dues solucions de l'equació homogènia associada.
Aleshores també és solució 
$$ Ay_{1}(x) + By_{2}(x) $$ 
per constants $A$ i $B$ qualsevols.
```
````

Igual que amb les EDOs de primer ordre, la **solució general** d'una EDO de segon ordre es pot escriure com la suma de la **solució general de la homogènia** associada més una **solució particular**.

```ad-teor
title: Existència, unicitat i continuitat

Donat el PVI
$$ \begin{align}
y'(x) + a(x)y'(x) + b(x)y(x) &= f(x) \\
y(x_{0}) &= y_{0} \\
y'(x_{0}) &= y_{0}'
\end{align} $$
si les funcions $a(x)$ i $b(x)$ son contínues a un interval $(x_{1},x_{2})$ que conté $x_{0}$, aleshores **existeix** una solució **única** $y(x)$ que és **contínua** en $(x_{1},x_{2})$.

---

D'aquest teorema veiem que el sistema sistema d'equacions lineals
$$ \begin{align}
y(x_{0}) &= Ay_{1}(x) + By_{2}(x) = y_{0} \\
y'(x_{0}) &= Ay_{1}'(x_{0}) + By_{2}'(x_{0}) = y_{0}'
\end{align} $$
tindrà una única solució $A, B$ si i només si el determinant de la matriu de coeficients de $A$ i $B$ no és nul·la.
```

```ad-def
title: *Determinant Wronksià*

Siguin $y_{1}(x)$ i $y_{2}(x)$ solucions de l'EDO lineal homogènia $y''+a(x)y'(x)+b(x)y(x)=0$.

Aleshores el determinant
$$ W(y_{1},y_{2})(x) = \det \begin{pmatrix}
y_{1}(x) & y_{2}(x) \\
y_{1}'(x) & y_{2}'(x)
\end{pmatrix} = y_{1}(x)y_{2}'(x) - y_{1}'(x)y_{2}(x) $$
s'anomena el ==Wronksià== de les funcions $y_{1}$ i $y_{2}$.
```

```ad-teor
title: Solució general

Siguin $y_{1}$ i $y_{2}$ dues solucions de l'equació $y''(x) + a(x)y'(x) + b(x)y(x) = 0$ amb Wronksià no nul $\forall x$. 

Aleshores
$$ \boxed{y(x) = Ay_{1}(x) + By_{2}(x)} $$
és la solució general de l'equació.
```

```ad-prop
Siguin $y_{1}$ i $y_{2}$ dues solucions de l'equació $y''(x) + a(x)y'(x) + b(x)y(x) = 0$.

Aleshores $W(y_{1},y_{2})$ és una funció exponencial i és o bé $0$ $\forall x$ o bé diferent de $0$ $\forall x$.
```

```ad-def
title: Conjunt fonamental de solucions

Siguin $y_{1}$ i $y_{2}$ dues solucions de l'equació $y''(x) + a(x)y'(x) + b(x)y(x) = 0$ que satisfan $W(y_{1},y_{2})\neq 0$ per tot $x$ a un interval on $a(x)$ i $b(x)$ son contínues.

Aleshores $y_{1},y_{2}$ s'anomena ==conjunt fonamental de solucions== de l'equació en aquell interval.
```

###### EDOs de segon ordre lineals amb **coeficients constants**

Una EDO lineal de coeficients constants serà de la forma
$$ y''(x) + by'(x) + cy = q(x) \,,$$
on $b$ i $c$ son constants.

````ad-met
title: Solució de la **homogènia associada**

```ad-def
title: *Polinomi característic*

Sigui $y''(x)+by'(x)+cy=0$ una EDO lineal homogènia amb coeficiens $b$ i $c$ constants, el polinomi
$$ \lambda^{2} + b\lambda + c $$
s'anomena ==polinomi característic== de l'equació.
```

```ad-met
title: Mètode

La **solució general** d'una EDO amb coeficients constants dependrà de les **arrels** del seu **polinomi característic**.

+ Dos arrels **reals diferents** $\lambda_{1}$ i $\lambda_{2}$ :
$$ \boxed{y_{h}(x) = C_{1} e^{\lambda_{1}x} + C_{2} e^{\lambda_{2}x}} $$

+ Una arrel **real doble** $\lambda$ :
$$ \boxed{y_{h}(x) = C_{1}e^{\lambda x} + C_{2}xe^{\lambda x}} $$

+ Dos arrels **complexes** $\lambda=\alpha\pm\beta i$ :
$$ \boxed{y_{h}(x) = e^{\alpha x} (C_{1}\cos(\beta x) + C_{2}\sin(\beta x))} $$
```
````

````ad-met
title: Solució **particular**

```ad-met
title: Mètode dels **coeficients indeterminats**

Aquest mètode només funciona si la funció $q(x)$ és una combinació algebraica de
+ exponencials,
+ sinus i cosinus, i
+ polinomis.

Consisteix en:

1. Buscar una solució particular $y_{p}$ de la mateixa forma que $q(x)$ amb coeficients arbitraris.
	+ Si $y_{p}$ és solució de la homogènia associada, multiplicar-la per $x$ fins que ja no ho sigui.
2. Substituir $y_{p}$ a l'equació i determinar els valors dels coeficients arbitraris resolent un sistema d'equacions.
```
````

###### Transformada de **Laplace**

```ad-def
title: *Transformada de Laplace*

Sigui $f(t)$ una funció definida per a $t\geq0$.

Aleshores es defineix la seva ==transformada de Laplace== com la funció

$$ F(s) := \mathcal{L}[f](s) = \int_{0}^{\infty} e^{-st} f(t)\, dt \,.$$
```

La transformada de Laplace permet **reduir una EDO lineal** per $f(t)$ a una equació algebraica per la seva transformada.

```ad-prop
title: Propietats

+ La transformada de Laplace és **lineal**.
$$ \begin{align}
\mathcal{L}[\alpha f + \beta g](s) =& \int_{0}^{\infty} e^{-st} (\alpha f(t)+\beta g(t))\,dt \\
=& \,\,\alpha\mathcal{L}[f](s) + \beta\mathcal{L}[g](s)
\end{align} $$

+ La transformada de Laplace per **derivades** de $f$ és:
$$ \begin{align}
\mathcal{L}[f'](s) &= -f(0) + s \mathcal{L}[f](s) \\
\mathcal{L}[f''](s) &= -f'(0) + s \mathcal{L}[f'](s) \\
\dots
\end{align} $$

+ **Traslació**:
$$ \mathcal{L}[e^{at}f](s) = F(s-a) $$

+ La transformació de Laplace és **injectiva**. Donanda una transformada $F(s)$ es pot obtenir una única funció $f(t)$ tal que $F(s)=\mathcal{L}[f](s)$.
	+ La **inversa** de Laplace $\mathcal{L}^{-1}$ també és **lineal**.

+ Es compleix:
$$ \begin{align}
\mathcal{L}[t\,f(t)](s) &= -\frac{d}{ds}\mathcal{L}[f(t)] \\[0.5em]
\mathcal{L}[t^{2}\,f(t)] &= \frac{d^{2}}{ds^{2}}\mathcal{L}[f(t)] \\
\dots
\end{align} $$
```

```ad-def
title: Funció *contínua a trossos*

Una funció $f(t)$ es diu ==contínua  a trossos a un interval $I$==$=[a,b]$ si $f$ és contínua per tot $t$ excepte per a un nombre finit de punts de $I$.

Es diu que $f$ és contínua a trossos a $[0,\infty)$ si ho és a tot interval $[0,n]$ amb $n>0$.
```

```ad-teor
title: Existència

Sigui $f(t)$ d'ordre exponencial $\alpha>0$ i contínua a trossos a $[0,\infty)$.

Aleshores $\mathcal{L}[f](s)$ existeix per a $s>\alpha$.
```


---
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

## Sistemes d'equacions **autònoms**

Els sistemes d'equacions no lineals generalment no es podran resoldre. No obstant, si aquests son **autònoms** i de **dimensió 2**, es poden obtenir les propietats de les solucions a partir de les seves **projeccions al pla $\boldsymbol{xy}$**.

Considerem el sistema ==autònom==
$$ \begin{cases}
x' = f(x,y) \\
y' = g(x,y)
\end{cases} $$ 
^b311ef

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

```ad-def
title: *Isoclines*

Les corbes del pla definides per ~={green}$f(x,y)=0$=~ / ~={pink}$g(x,y)=0$=~ s'anomenen ==isoclines ~={green}verticals=~ / ~={pink}horitzontals=~==.

Notem que les isoclines separen les regions del pla on $f$ i $g$ canvien de signe.
```
^8cc979

```ad-def
title: *Punt d'equilibri*

Es diu que $(x*,y*)$ és un ==punt d'equilibri== del sistema si $f(x*,y*)=0$ i $g(x*,y*)=0$.

L'òrbita d'un punt d'equilibri es redueix a un punt.
```


#### Sistemes autònoms **lineals** amb **coeficients constants**

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

```ad-met
title: $\boldsymbol{0<\lambda_{1},\lambda_{2}}$

Es diu que el sistema és un ==node repulsor==. Les òrbites tendeixen a l'origen quan $t\rightarrow -\infty$.

| ![[20241215201800.png \| 250]] | ![[20241215202335.png \| 252]] |
|:---:|:---:|
| $0<\lambda_{1}<\lambda_{2}$ | $0<\lambda_2<\lambda_1$ |
```

```ad-met
title: $\boldsymbol{\lambda_{1},\lambda_{2}<0}$

Es diu que el sistema és un ==node atractor==. 

| ![[20241215202631.png \| 262]] | ![[20241215202757.png \| 250]] |
|:---:|:---:|
| $\lambda_{2}<\lambda_{1}<0$ | $\lambda_{1}<\lambda_{2}<0$ |
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
$$ (A - \lambda\, I) \,\vec{u} = 0 \,.$$

````ad-met
title: **Dos** *vep*s linealment **independents**

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

| ![[20241215204341.png \| 251]] | ![[20241215204437.png \| 250]] |
|:---:|:---:|
| $0<\lambda$<br>==node degenerat repulsor== | $\lambda<0$<br>==node degenerat atractor== |
````

````ad-met
title: **Un** *vep* linealment **independent**

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

| ![[20241215204819.png \| 255]] | ![[20241215204931.png \| 250]] |
|:---:|:---:|
| $\lambda<0$<br>==node impropi atractor== | $0<\lambda$<br>==node impropi repulsor== |
`````

````ad-met
title: Dos *vap*s **complexos**

Tenim *vap*s $\lambda=\alpha\pm\beta i$.

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

| ![[20241215210230.png \| 234]] | ![[20241215205939.png \| 250]] | ![[20241215210252.png \| 241]] |
|:---:|:---:|:---:|
| $\alpha<0$<br>==focus atractor== | $\alpha=0$<br>==centre== | $0<\alpha$<br>==focus repulsor== |

En el cas del **centre**, totes les òrbites son periòdiques amb període $\displaystyle T=\frac{2\pi}{\beta}$.
````
``````


#### Sistemes autònoms **no lineals**

Considerem un sistema autònom
$$ \begin{cases}
x' = f(x,y) \\
y' = g(x,y)
\end{cases} $$
^6f5d73

amb $f$ i $g$ de classe $C^{1}$.

````ad-def
title: Punt *estable*

Es diu que un **punt d'equilibri** $\boldsymbol z\text{*}$ d'un [[#^6f5d73 | sistema no lineal]] és ==estable== si per tot $\varepsilon>0$ existeix $\delta>0$ tal que per tot $z_{0}=(x_{0},y_{0})$ amb $||z \text{*}-z_{0}||<\delta$ es compleix
$$ ||\, z\,(t;z_{0})-z\text{*} || < \varepsilon $$
per tot $t>0$.

```ad-def
title: Punt *asimptòticament* estable

Es diu que un **punt d'equilibri** $\boldsymbol z\text{*}$ d'un [[#^6f5d73 | sistema no lineal]] és ==asimptòticament estable== si és estable i a més es compleix que
$$ ||\ z(t,z_{0})-z\text{*} || \rightarrow \infty$$
quan $t\rightarrow \infty$.
```
````

```ad-def
title: Punt *inestable*

Es diu que un **punt d'equilibri** $\boldsymbol z\text{*}$ d'un [[#^6f5d73 | sistema no lineal]] és ==inestable== si **no és estable**.

És a dir, per a algun $\varepsilon>0$ existeixen punts $z_{0}$ arbitràriament a prop de $z\text{*}$ tal que
$$ ||\, z\,(t;z_{0})-z\text{*} || > \varepsilon $$
per a algun $t>0$.
```

````ad-def
title: Conjunt *invariant*

Suposem [[#^6f5d73 | sistema no lineal]] amb solucions definides per tot $t\in \mathbb{R}$.

Diem que un conjunt $D \subset \mathbb{R}^{2}$ és un ==conjunt invariant== pel sistema si per a tot $z_{0}\in D$ l'òrbita que passa per $z_{0}$ està continguda en $D$.

És a dir, si $z(t;z_{0})\in D$ per tot $t\in D$.

```ad-def
title: Conjunt *positivament*/*negativament* invariant

Un conjunt $D\in \mathbb{R}$ és un conjunt ==~={green}positivament=~ / ~={pink}negativament=~ invariant== per un [[#^6f5d73 | sistema]] si per tot $z_{0}\in D$ es compleix $z(t;z_{0})\in D$ per a tot ~={green}$t\geq 0$=~ / ~={pink}$t\leq 0$=~ .
```
````

###### Sistemes **integrables**

Donat un [[#^6f5d73 | sistema no lineal]], es diu que la funció $H(x,y)$ és una ==integral primera== del sistema si és **constant sobre les trajectòries**. És a dir,
$$ H(x(t),y(t)) = C $$
on $C\in \mathbb{R}$ és una constant. 

Un sistema al pla es diu que és ==integrable== si té una integral primera $H$.

```ad-prop
title: Sistema integrable

Si el vector gradient d'$H$ és **ortogonal al camp vectorial** $(f,g)$, aleshores el sistema és integrable.
```

```ad-prop
title: Retrat de fase d'un sistema integrable

Les òrbites del sistema estan contingudes als conjunts de nivell de la funció $H$ (en general de dimensió 1).

Per tant el retrat de fase del sistema es pot obtenir a partir de la **representació gràfica dels conjunts de nivell**
	$$ H_{c} = \{ (x,y) \,|\, H(x,y)=c \} \,.$$
```


###### Sistemes **no necessàriament integrables**

A partir de l'estudi dels retrats de fase dels sistemes lineals, podem descriure el comportament dels sistemes no lineals al voltant dels seus equilibris.

Considerem el sistema
$$ z'=h(z) \quad \text{on} \begin{cases}
z = (x,y) \\
h(z) = (f(x,y),g(x,y))
\end{cases} $$
^6f5d74

amb $z_{0}$ un equilibri.

```ad-def
title: Matriu *jacobiana*

La ==matriu jacobiana== d'un sistema no lineal és
$$ Dh = \begin{pmatrix}
f_{x} & f_{y} \\
g_{x} & g_{y}
\end{pmatrix} \,.$$
```

```ad-teor
title: Principi de **linealització**

+ Suposem que **tots** els *vap*s de la matriu jacobiana $Dh(z_{0})$ tenen **part real negativa**. Aleshores l'equilibri $z_{0}$ és **asimptòticament estable**.
+ Suposem que $Dh(z_{0})$ té **algun** *vap* amb **part real positiva**. Aleshores l'equilibri $z_{0}$ és **inestable**.
```

````ad-def
title: Equilibri *hiperbòlic*

Diem que un punt d'equilibri $z_{0}$ és ==hiperbòlic== si tots els *vap*s de $Dh(z_{0})$ tene part real diferent de 0.

```ad-teor
title: Teorema de la **funció inversa**

En particular, quan cap dels *vap*s de $Dh(z_{0})$ no és 0, l'origen és l'únic equilibri del sistema linealitzat.

En aquest cas podem dir que la funció $h$ és **injectiva** en un entorn de $z_{0}$ i per tant l'equilibri és aïllat.
```
````

```ad-teor
title: Teorema de **Hartman-Grobman**

Suposem que l'equilibri $z_{0}$ és hiperbòlic.

Llavors, el retrat de fase d'un [[^6f5d74 | sistema no lineal]] en un entorn de $z_{0}$ és topològicament equivalent al retrat de fase del sistema lineal
$$ y'(t) = Dh(z_{0})y(t) $$
en un entorn de l'origen.
```


###### Funcions de **Lyapunov**

Sigui $z_{0}$ un equilibri d'un [[#^b311ef | sistema autònom]], $D$ un entorn seu, i $V:D\to \mathbb{R}$ diferenciable.

Es diu que $V$ és una ==Funció de Lyapunov== per $z_{0}$ a $D$ si:
+ $V(z_{0})=0$
+ $V(z)>0$ per tot $z\in D\setminus\{z_{0}\}$
+ $V'(z)\leq 0$ per tot $z\in D$

Es diu que $V$ és ==estricta== si a més compleix:
+ $V'(z)<0$ per tot $z\in D\setminus\{z_{0}\}$

```ad-teor
Si existeix una funció de Lyapunov $V$ per a $z_{0}$, aleshores $z_{0}$ és **estable**.

A més si $V$ és estricta, $z_{0}$ és **asimptòticament** estable.
```

```ad-teor
title: Principi d'invariància de *Lasalle*

Si $D$ és un conjunt tancat, acotat i positivament invariant per al nostre sistema, i si $V$ és una funció diferenciable definida a $D$ amb valors reals, amb 
$V'(z)\leq 0$.

Sigui $E=\{z\in D \mid V'(z)=0 \}$ i $\tilde{E}\subseteq E$ format per les trajectòries de condicions inicials en $E$ invariants.

Si $z(t)$ és una solució del sistema autònom amb condició inicial $z(t_{0})\in D$, aleshores $z(t)\to\tilde{E}$ quan $t\to \infty$.
```


###### **Cicles límit**

A les òrbites periòdiques aïllades en un retrat de fase se'ls anomena ==cicles límit==.

```ad-def
title: *Polígon d'òrbites*

A un conjunt de trajectòries que connecten equilibris de manera consecutiva se'ls anomena ==polígon d'òrbites==.
```


###### Retrats de fase al pla: **isoclines**

[[#^8cc979 | isoclines]]

S'anomena ==isoclina de l'eix ~={green}horitzontal=~ / ~={pink}vertical=~== al conjunt de punts del pla on s'anul·la la ~={green}segona=~ / ~={pink}primera=~ component del camp vectorial.

Sovint aquestes isoclines divideixen el pla en regions on el camp vectorial apunta en una direcció.

Notem que la intersecció d'una isoclina de l'eix horitzontal i una de l'eix vertical serà un punt d'equilibri.

```ad-teor
title: Teorema de *Poincaré-Bendixson*

Una trajectòria acotada d'un sistema autònom tendeix a un equilibri, a una òrbita tancada o a un polígon d'òrbites.
```

