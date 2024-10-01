## Introducció

#### Equacions diferencials ordinàries de primer ordre

Una ==equació diferencial ordinària de primer ordre== (EDO de primer ordre) per a una funció $y(x)$ és una equació
$$F(x,y,y')=0.$$

```ad-def
title: *Forma explícita*

La ==forma explícita== d'una EDO de 1r ordre és
$$y'(x)=f(x,y(x)).$$
```

```ad-def
title: *EDO autònoma*

Una EDO es diu ==autònoma== si $f$ no depèn explícitament de $x$, és a dir, és de la forma
$$y'=f(y).$$
```

```ad-def
title: *Solució (general) d'una EDO*

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
## Existència, unicitat i continuitat de solucions

```ad-teor
title: Teorema de Picard-Lindelöf

Sigui $R$ una regió rectangular del pla $xy$ definida per $R = \{ (x,y) \mid a \leq x \leq b, c \leq y \leq d \}$ que conté el punt $(x_0,y_0)$. Suposem que $f$ i $\frac{df}{dx}$ son contínues a $\mathbb{R}$.

Aleshores ==existeix una **única** solució== $y(x)$ definida a un interval $I_{o}=(x_o-h,x_o+h)$ amb $h>0$ contingut a $[a,b]$ del PVI
$$\begin{cases}
y'=f(x,y) \\
y(x_o)=y_0 \\
\end{cases}
$$

A més, es compleix que la solució $y(x;x_o,y_o)$ és una ==funció **contínua**== respecte $x_o,y_o$.

```

```ad-teor
title: Teorema de Peano

Sigui $f$ una funció **contínua** i $y'(x) = f(x,y(x))$ una EDO de primer ordre.

Aleshores ==**existèix** solució== per tot PVI d'aquesta EDO.
```

```ad-def
title: Funció *de Lipschitz*

Una funció $f$ és ==de Lipschitz== si per tot $y,z \in (c,d)$ existeix $L>0$ tal que $$\mid f(x,y)-f(x,z) \mid < L\mid y-z \mid.$$
```

Per assegurar ==unicitat==, és suficient amb que $f$ sigui de Lipschitz respecte la variable $y$.

```ad-teor
Siguin $f$ i $\frac{df}{dy}$ contínues a $\mathbb{R}$.

Aleshores dues corbes solució de $y'=f(x,y)$ diferents no es poden tallar a $\mathbb{R}$.
```

Si $f$ no és diferenciable, el PVI pot tenir més d'una solució.

---
## Mètodes analítics de resolució

#### Equacions separables

Una ==EDO de variables separades== (o separable) és una equació del tipus 
$$y'(x) = g(x)h(y).$$

```ad-ex
title: Mètode

+ Reescribim l'equació: $\displaystyle\frac{dy}{dx} = g(x)h(y)$
+ Separem $y$s i $x$s: $\displaystyle\frac{dy}{h(y)} = g(x)dx$
+ Integrem: $\displaystyle \int \frac{1}{h(y)}dy = \int g(x)dx$

```

#### Equacions diferencials lineals

Sigui $y(x)$ la incògnita, una ==EDO lineal== és una equació de la forma
$$y'(x)+a(x)y(x)=b(x)$$
on $a(x)$ i $b(x)$ son funcions aribitràries.

```ad-def
title: *Equació homogènia associada*

Se li diu ==equació homogènia associada== a una EDO lineal amb $b(x)\equiv 0$. És a dir,
$$y'(x)+a(x)y(x)=0\,,$$
que és una EDO de variables separades.

La **solució general** de l'equació homogènia associada és
$$\boxed{\,y(x)=Ce^{-\int a(x)dx}\,}\,.$$
```

```ad-prop
Siguin $y_1(x)$ i $y_2(x)$ dues solucions de l'equació lineal $y'(x)+a(x)y(x)=b(x)$.

Aleshores $y_1(x)-y_2(x)$ és solució de l'equació homogènia associada $y'(x)+a(x)y(x)=0$.
```

````ad-coro
Sigui $y'(x)+a(x)y(x)=b(x)$ una EDO lineal amb
+ $y(x)$ la solució general,
+ $y_p(x)$ una solució particular, i
+ $y_h(x)$ la solució general de la seva equació homogènia associada.

Aleshores $\boxed{\,y(x)=y_h(x)+y_p(x)\,}$ .

```ad-ex
title: Mètode de variació de les constants

Per trobar $y_p(x)$ farem servir el ==*mètode de variació de les constants*==, que consisteix en buscar una solució particular de la forma
$$y_p(x)=C(x)e^{-\int a(x)dx}.$$
```
````

```ad-ex
title: Mètode

Tenim una EDO lineal de la forma $y'(x)+a(x)y(x)=b(x)$.

1. Trobem la solució de ==$\int a(x)dx := A$==.
2. Resolem l'equació homogènia associada $y'(x)+a(x)y(x)=0$ fent servir que ==$y_{h}(x)=Ce^{-A}$==.
3. Busquem una solució particular ==$y_p(x)=C(x)e^{-A}$==, i la substituïm a l'EDO inicial. 
4. Aïllem i calculem $C(x)$.
5. 

```
