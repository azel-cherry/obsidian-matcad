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


---
## Mètode del **Símplex**

`````ad-def
title: PL *actualitzat*

> Sigui un PL en forma estàndard i un conjunt bàsic $B$.

+ **Per un sistema:** Diem que el sistema $Ax=d$ està ==actualitzat== a la base $B$ si per cada variable $x_{j}$ de $B$, la columna $A_{j}$ és igual a una columna de la identitat $I_{m}$ ~={faded}(l'$i$-èssim índex $j$ de $B$ és igual a la columna $i$-èssima de $I_{m}$)=~.

+ **Per una funció objectiu:** Si la funció objectiu $z=cx+c_{0}$ té coeficients bàsics nuls ~={faded}($c_{j}=0$ per tot $j\in B$)=~, direm que està ==actualitzada== a la base $B$.

Direm que el PL està ==actualitzat== a la base $B$ si tant el sistema com la funció objectiu estan actualitzats a la base $B$.

L'escriurem com:
$$ \begin{align}
\text{minimitzar }& z=c_{N}z_{N}+c_{0} \\
\text{subjecte a }& \begin{cases}
\,X_{B}+A_{N}\,x_{N}&=d \\
\,x\geq0
\end{cases}
\end{align} $$
amb $A\in M_{m,\,n-m}(\mathbb{R})$.

```ad-prop
title: Conseqüències

+ **Parametrització de les solucions factibles** posant com a paràmetres les solucions no bàsiques:
	$$ x_{B} = d-A_{N}\,x_{N} \,,$$
	amb $x_{N},x_{B}\geq0$ .

+ **Solució factible bàsica** associada a $B$ directa:
	$$ x_{N}=0\,, \quad x_{B}=d \,.$$

+ **Valor de la funció objectiu** en la solució bàsica associada a $B$:
	$$ z = c_{0} \,.$$
```

```ad-met
title: Actualitzar un sistema (**matricial**)

> Tenim un sistema $A_{B}\,x_{B}+A_{N}\,x_{N} = d$ amb una base $B$.

1. Actualitzar el sistema:
	$$ x_{B}+A_{B}^{-1}A_{N}\,x_{N}=A_{B}^{-1}d $$
2. Actualitzar la funció objectiu:
	$$ z=c_{N}'\,x_{N}+c_{0}' \text{ amb } \begin{cases}
	c'_{N} = c_{N} - c_{B}\,A_{N} \\
	c_{0}' = c_{0} + c_{B}\,d
	\end{cases} $$
```

```ad-met
title: Actualitzar un sistema (**pràctica**)

Partim de la **taula del símplex**:
$$\begin{array}{|c c c c|c|}
\hline
x_{1} & x_{2} & \dots & x_{n} &  \\ \hline
a_{11} & a_{12} & \dots & a_{1n} & d_{1} \\
a_{21} & a_{22} & \dots & a_{2n} & d_{2} \\
\vdots & \vdots & \ddots & \vdots &  \vdots \\
a_{m1} & a_{m2} & \dots & a_{mn} & d_{m} \\ \hline
c_{1} & c_{2} & \dots & c_{n} & -c_{0} \\
\hline
\end{array}$$

Actualitzada a una base $B$ factible, i suposant que les variables bàsiques son $x_{1},\dots,x_{m}$, tindrem:
$$ \begin{array}{|c c c c c c c|c|}
\hline x_{1} & x_{2} & \dots & x_{m} & x_{m+1} & \dots & x_{n} &  \\ \hline
1 & 0 & \dots & 0 & a_{1,m+1} & \dots & a_{1,n} & d_{1} \\
0 & 1 & \dots & 0 & a_{2,m+1} & \dots & a_{2,n} & d_{2} \\
\vdots & \vdots & \ddots & \vdots & \vdots & \ddots & \vdots & \vdots \\
0 & 0 & \dots & 1 & a_{m,m+1} & \dots & a_{m,n} & d_{m} \\ \hline
c_{1} & c_{2} & \dots & c_{m} & c_{m+1} & \dots & c_{n} & -c_{0} \\ \hline
\end{array} $$

Per actualitzar la funció objectiu, restem a la última fila la fila $i\in \{1,\dots,m\}$ multiplicada per $c_{i}$.
```
`````

El ==mètode del Símplex== consisteix en passar d'una base a una altra, actualitzant en cada pas el sistema i la funció objectiu.


#### **Criteris** d'optimalitat, no acotació i millora

Suposem que tenim un PL actualitzat a la base $B$.

1. ~={green}Criteri d'optimalitat.=~ Si $c_{j}\geq0$ per tot $j$, hem trobat la solució bàsica optimal
	$$ x_{B}=d\,,\, x_{N}=0\,, \quad z=c_{0} \,.$$

2. ~={green}Criteri de no acotació.=~ Si per algun $j\in N$ tenim:
	+ $c_{j}<0$,
	+ Tots els coeficients d'$A_{j}$ son $\leq0$,
	
	Aleshores el PL és no acotat.

3. ~={green}Criteri de millora de la solució.=~ Si existeixen $j\in N$ tals que $c_{j}<0$ i per cada $j$ existeix un coeficient d'$A_{j}$ que és $>0$, aleshores es pot millorar la solució.

```ad-met
title: Millora de la solució

Si ens trobem en el 3r cas, farem el següent:

1. Triem una columna $j$ tal que $c_{j}<0$ i una fila $k$ tal que
	$$ \frac{d_{k}}{d_{j}} = \min\left\{ \frac{d_{i}}{a_{ij}} \mid a_{ij}>0 \right\} \,.$$

2. Pivotem sobre $a_{kj}$ .
3. Substituïm la variable bàsica que tenia un 1 a la fila $k$ per $x_{j}$ .
4. El valor de la nova solució és
	$$ z = c_{j}\,\frac{d_{k}}{a_{kj}} + c_{0} \leq c_{0} \,.$$
	La desigualtat serà una igualtat només si $d_{k}=0$. En aquest cas es diu que hem fet una ==iteració degenerada==.
```
