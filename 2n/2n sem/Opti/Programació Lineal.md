## Introducció

Un problema de ==programació lineal== o **programa lineal (PL)** és
$$ \begin{align}
\text{minimitzar }& f(x) = \sum_{i=1}^{n} c_{i}x_{i}+c_{0} \\
\text{subjecte a: }& \begin{cases}
h_{j}(x) = \displaystyle\sum_{j=1}^{n} a_{ij}x_{j} = d_{i}\,, \quad i=1,\dots,p \\
g_{j}(x) = \displaystyle\sum_{j=1}^{n} b_{ij}x_{j} \leq d_{i}\,, \quad i=p+1,\dots,p+m
\end{cases}
\end{align} $$
amb $x \in \mathbb{R}^{n}$,  $f(x)$ la ==funció objectiu== i $h_{i},g_{j}:\mathbb{R}^{n}\to \mathbb{R}$ les ==restriccions==, i totes son **lineals**.

```ad-def
title: Definicions bàsiques

+ $x \in \mathbb{R}^{n}$ ==punt factible== si compleix les restriccions.
	+ ==Regió factible==: Conjunt $S$ de tots els punts factibles
+ $x^* \in S$ ==punt optimal== del PL si $f(x^*)=\min\{f(x)\mid x \in S\}$.
```


#### PL en **forma estàndard**

Un PL en forma estàndard és
$$ \begin{align}
\text{minimitzar }& f(x)=cx+c_{0} \\
\text{subjecte a: }& \begin{cases}
Ax=d \\
x\geq0
\end{cases}
\end{align} $$
$$ \text{amb } A=\begin{pmatrix}
a_{11} & \dots & a_{1n} \\
\vdots & \ddots & \vdots \\
a_{m1} & \dots & a_{mn}
\end{pmatrix}, \quad x=\begin{pmatrix}
x_{1} \\
\vdots \\
x_{n}
\end{pmatrix}, \quad d=\begin{pmatrix}
d_{1} \\
\vdots \\
d_{m}
\end{pmatrix},$$
$c_{0} \in \mathbb{R}$, $c \in \mathbb{R}^{n}$ i $n>m$ .

```ad-def
title: Programa lineal en forma estàndard

La matriu $A$ s'anomena ==programa lineal en forma estàndard== si:
+ $d\geq 0$
+ $\text{Rang}(A)=m$
```

```ad-prop
Tot PL en amb punts factibles es pot transformar en un PL en forma estàndard equivalent.
```


###### Solucions **bàsiques**

```ad-not
title: Notació
Denotem $A_{j}$ la columna $j$-èssima d'$A$.
```

````ad-def
title: Conjunt *bàsic*

Un conjunt $B\subset \{1,\dots,n\}$ és ==bàsic== o ==una base== si les columnes $A_{j}$ amb $j\in B$ formen una base de $\mathbb{R}^{n}$.

```ad-def
title: Variables *bàsiques*
Donat un conjunt bàsic $B$, les ==variables bàsiques== del sistema son $x_{j}$ amb $j\in B$.
```
````

Diem que una solució $x$ del sistema és una ==solució bàsica== si existeix una base $B$ tal que $x_{j}=0$ per tot $j \not\in B$.

```ad-not
title: Observacions

+ Cada bàse té una **única** solució bàsica associada.
+ Dues bases diferents poden donar lloc a la mateixa solució bàsica.
+ El nombre de solucions bàsiques és finit; concretament $\leq\binom{n}{m}$.
+ Donada una solució del sistema $x$, si el conjunt de les columnes $A_{j}$ tal que $x_{j}\neq0$ és linealment independent, aleshores $x$ és solució bàsica.
```

```ad-met
title: Trobar solucions bàsiques

1. Seleccionar una base $B$ de les columnes d'$A$.
2. Aïllar les variables bàsiques $x_{j}$ amb $j\in B$.
3. Donar valor 0 a les variables no bàsiques $x_{j}$ amb $j\not\in B$
```

```ad-not
title: Notació

Considerant el sistema $Ax=d$, el podem escriure com a combinació lineal de les columnes d'$A$:
$$ \sum_{j\in B} A_{j}x_{j} + \sum_{k\in N} A_{k}x_{k} = d $$
amb $B$ una base i $N=\{1,\dots,n\}\setminus B$ .

Denotem:
+ ~={green}$A_{B}$=~ : columnes $A_{j}$ amb $j\in B$
+ ~={green}$x_{B}$=~ : variables $x_{j}$ amb $j\in B$
+ ~={green}$A_{N}$=~ : columnes $A_{k}$ amb $j\in N$
+ ~={green}$x_{N}$=~ : variables $x_{k}$ amb $j\in N$

i per tant podem escriure
$$ A_{B}\,x_{B} + A_{N}\,x_{N} = d \,.$$
```

```ad-def
title: Solució *factible bàsica*

Una ==solució factible bàsica== d'un PL és una solució bàsica que a més té totes les components $\geq 0$.
```


###### **Teorema fonamental** de la programació lineal

````ad-prop
title: Lema de la **paret**

> En un PL en forma estàndard, sigui $S$ el conjunt dels seus punts facitibles i $x \in \mathbb{R}^{n}$ una solució factible no bàsica.

Aleshores existeixen $v\in \mathbb{R}^{n}$ i $t\in \mathbb{R}$ amb $v,t\neq 0$ tals que:
+ $x-tv\,,\,x+tv\in S$
+ $x-tv$ té més components nul·les que $x$

```ad-met
title: Trobar $\boldsymbol t$

> Solució factible no bàsica $x=(\lambda_{1},\dots,\lambda_{n})$.

Agafarem $\boxed{\,\displaystyle t=\frac{x_{k}}{\lambda_{k}}\,}$ amb $k$ tal que $\displaystyle\frac{x_{k}}{\lambda_{k}}\leq \frac{x_{i}}{\lambda_{i}}$ per tot $i$ tal que $\lambda_{i} \neq 0$.
Això garanteix que $x_{i}\pm t\,\lambda_{i}\geq 0$ .
```
````

````ad-teor
title: Teorema **fonamental** de la **programació lineal**

> Considerem un PL en forma estàndard.

1. Si existeix una solució factible, aleshores n'existeix una de factible bàsica.
2. Si existeix una solució factible optimal, aleshores n'existeix una de bàsica optimal.

```ad-met
title: Resoldre un PL
1. Trobar les solucions factibles bàsiques $x_{0}$.
2. Avaluar $f$ en $x_{0}$. El valor òptim és el més baix.
```
````