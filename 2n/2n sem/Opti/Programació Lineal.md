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


#### Solucions **bàsiques**

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


#### **Teorema fonamental** de la programació lineal

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


#### Fase **I**

Es tracta de trobar una solució factible bàsica o demostrar que no n'existeix cap.

Considerem el PL següent:
$$ P_{z} : \begin{cases}
\text{minimitzar}& z=cx+c_{0} \\
\text{subjecte a}& \begin{cases}
Ax &=d \\
x &\geq0
\end{cases}
\end{cases} $$

1. Si la matriu $A$ conté totes les columnes de la identitat $I_{m}$, ja tenim solució factible bàsica i podem començar amb la fase II.
2. Si no, afegirem **variables artificials** $y=(y_{1},y_{2},\dots)$ a cada equació que faci falta per aconseguir la identitat:
	$$ P_{w} : \begin{cases}
\text{minimitzar}& w=y_{1}+y_{2}+\dots \\
\text{subjecte a}& \begin{cases}
Ax+y &=d \\
x,y &\geq0
\end{cases}
\end{cases} $$

```ad-prop
Siguin $P_{z}$ i $P_{w}$ definits anteirorment. Aleshores:
+ $P_{w}$ té solucions factibles.
+ La funció objectiu de $P_{w}$ és acotada inferiorment.
+ $P_{z}$ té alguna solució factible si i només si $P_{w}$ té òptim 0. En aquest cas, eliminant les components artificials de $P_{w}$, obtenim una solució factible bàsica de $P_{z}$ .
```

Quan ja hem solucionat $P_{w}$, doncs, ens podem trobar amb el següent:
1. **L'òptim de $\boldsymbol{P_{w}}$ no és 0.** Aleshores $P_{z}$ no té solucions factibles i és, per tant, impossible.
2. **L'òptim de $\boldsymbol{P_{w}}$ és 0.** Arribem a una solució factible bàsica amb $y_{1}=y_{2}=\dots=0$.
	+ **No hi ha variables artificials a la base.** Ja tenim una base per $P_{z}$; només cal eliminar les columnes de les variables artificials.
	+ **Hi ha variables artificials a la base.** Pivotem per treure-les de la base. Aquestes pivotacions no canviaran el valor de $w$.


#### Fase **II**

Tenim un PL en forma estàndard amb una solució factible bàsica.

1. Actualitzem la funció objectiu a la base ~={faded}(zeros a les columnes de les variables bàsiques)=~.
2. Apliquem els criteris fins que trobem l'optimal o la no acotació:
	+ ~={green}Criteri d'optimalitat.=~ Si $c_{j}\geq0$ per tot $j$, hem trobat la solució bàsica optimal
		$$ x_{B}=d\,,\, x_{N}=0\,, \quad z=c_{0} \,.$$
	
	+ ~={green}Criteri de no acotació.=~ Si per algun $j\in N$ tenim:
		+ $c_{j}<0$,
		+ Tots els coeficients d'$A_{j}$ son $\leq0$,
		
		Aleshores el PL és no acotat.
	
	+ ~={green}Criteri de millora de la solució.=~ Si existeixen $j\in N$ tals que $c_{j}<0$ i per cada $j$ existeix un coeficient d'$A_{j}$ que és $>0$, aleshores es pot millorar la solució.

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

```ad-not
Els **coeficients de la funció objectiu** actualitzats a una base es poden interpretar com el **creixement** que experimenta la funció objectiu quan la **variable no bàsica corresponent s'incrementa** en una unitat.
```


#### Programes **degenerats**

Diem que un sistema d'equacions és ==degenerat== quan té una solució bàsica amb coeficient bàsic nul. Si triem com a pivot l'element amb el coeficient nul, la funció objectiu **no millorarà** i podem entrar en un cicle.

```ad-teor
title: Regla de Bland

> Totes les columnes $A_{j}$ amb $c_{j}<0$ tenen alguna component positiva.

Hi ha possibilitat de millora de la funció objectiu. Per tritar quina variable $x_{j}$ surt i quina entra, apliquem les regles següents:

1. **Variable que entra:** Si hi ha diverses columnes sobre les que pivotar, triem la de més a l'esquerra.
2. **Variable que surt:** Pivotem per la fila que té el possible pivot més a l'esquerra.

Seguint aquestes regles, el PL no entrarà en cap cicle.
```


---
## Programació **Entera**

La ==Programació Entera== es refereix a programes lineals que busquen una solució entera.

```ad-not
title: Regió factible

Anomenarem $S$ a la regió factible sobre els nombres reals, és a dir els punts que compleixen totes les restriccions excepte la de variables enteres.

La regió factible de veritat serà el conjunt de punts de coordenades enteres dins d'$S$.
```


#### *Branch & Bound*

```ad-prop
title: Elements
+ **Sistema d'acotació.** Cota superior i/o inferior de cada subregió factible.
+ **Estratègia.** Tria del proper node en explorar.
	1. **Best first.** Node amb millor cota.
	2. **Breath first.** Explorem tot un nivell de l'arbre abans de passar al següent.
	3. **Depth first.** Arribem al final d'una branca abans de passar a les altres.
+ Regla per dividir una regió.
```

Consisteix en anar resolent PLs, bifurcant en dos problemes nous (dividint $S$) quan la solució no sigui entera, i podant les branques de l'arbre que no aportaran res.

És convenient explorar una de les branques de cada bifurcació fins al final abans de passar a la branca germana. Aquesta estratègia ajuda a trobar bones acotacions per estalviar-nos feina.

Per cada node de l'arbre, ens podem trobar amb les següents situacions:

1. **Regió factible buida.** Abandonem la branca.
2. **Solució optimal pitjor o igual a la solució titular.** Abandonem la branca.
3. **Solució optimal millor que la titular.**
	+ **Solució entera.** Agafem aquesta solució com la solució titular.
	+ **Solució no entera.** Utilitzem el valor d'una de les coordenades no enteres de la solució $x_{i}=a$, i bifurquem la branca en dues subregions $x_{i}\leq \lfloor a \rfloor$ i $x_{i}\geq\lfloor a\rfloor +1$ .

^brnbo


###### Variables **binàries**

Afegirem les restriccions $0\leq x_{i}\leq1$ . Tenim dos mètodes.

```ad-met
title: *Branch & Bound* (com abans)

Igual que [[#^brnbo | l'anterior]] però, quan fem una subdivisió utilitzant la variable $x_{i}$, triarem les subregions $x_{i}=0$ i $x_{i}=1$ .
```

```ad-met
title: *Branch & Bound* (*Best First*)

Es tracta d'anar assignant valors un a un, començant pel millor cas possible, i observant com això afecta a les restriccions i a la cota de la funció objectiu.

+ Si alguna de les restriccions es viola, tornem enrere i abandonem la branca.
+ Quan arribem al final d'una branca (totes les variables tenen un valor assignat i no s'ha violat cap restricció), guardem el resultat com a titular.
+ Quan una branca té una cota de la funció objectiu menor/major a la solució titular, abandonem la branca.
Es continua així fins que s'explora tot l'arbre.
```


---
## Modelització

#### **Plantejament** de problemes

```ad-met
title: **Assignació**

> Assignar tasques $T_{1},\dots,T_{n}$ a persones $P_{1},\dots,P_{n}$ amb diferents qualificacions:
> $$ Q = \begin{pmatrix}
q_{11} & \dots & q_{1n} \\
\vdots & \ddots & \vdots \\
q_{n1} & \dots & q_{nn}
\end{pmatrix} $$
> amb $q_{ij}$ qualificació de la persona $P_{i}$ per fer la tasca $T_{j}$.

~={green}Variables.=~ $x_{ij}=\begin{cases}1&\text{si assignem }P_{i}\text{ a }T_{j}\\0&\text{en cas contrari}\end{cases}$

~={green}Restriccions.=~

| $\displaystyle\sum_{j=1}^{n}x_{ij} = 1 \quad \forall j$ | $\displaystyle\sum_{i=1}^{n} x_{ij} = 1 \quad \forall i$ |
|:------------------------------------------:|:-------------------------------------------:|
|      Cada persona ha de fer una tasca      |      Cada tasca s'ha de fer una vegada      |

~={green}Funció objectiu.=~ Maximitzar suma de qualificacions:
	$$ z = \sum_{i=1}^{n} \sum_{j=1}^{n} q_{ij}\,x_{ij} $$
```

```ad-met
title: **Recobriment** mínim

> Decidir quins edificis $E_{1},\dots,E_{m}$ es queden oberts per tal d'abarcar totes les zones necessàries $Z_{1},\dots Z_{n}$, quan cada edifici pot abarcar unes quantes zones:
> $$ A = \begin{pmatrix}
a_{11} & \dots & a_{1m} \\
\vdots & \ddots & \vdots \\
a_{nm} & \dots & a_{nm} \\
\end{pmatrix} $$
> amb $a_{ij}$ binària indicant si l'edifici $E_{j}$ abarca la zona $Z_{i}$.

~={green}Variables.=~ $x_{i}$ binària indicant si es manté $E_{i}$ obert.

~={green}Restriccions.=~ Cada zona necessita com a mínim un edifici obert:
$$ \sum_{j=1}^{m} a_{ij}\,x_{j} \geq1 \quad\forall i $$

~={green}Funció objectiu.=~ Minimitzar els edificis oberts:
$$ z = \sum_{j=1}^{m} x_{j} $$
```

```ad-met
title: **Costos fixos**

> Distribuir el cost total $N$ en diferentes companyies $C_{1},\dots,C_{n}$ amb costos fixos $f_{1},\dots,f_{n}$ i costos variables $v_{1},\dots,v_{n}$.

~={green}Variables.=~
+ $y_{i}$ binària indicant si fem servir mai la companyia $C_{i}$
+ $x_{i}\equiv$ quantitat de la necessitat que cobrim amb la companyia $C_{i}$

~={green}Restriccions.=~

| $x_{1}+\dots+x_{n} = N$ | $x_{i}\leq Ny_{i} \quad \forall i$ |
|:-----------------------:|:------------------:|
|   Necessitat coberta    | $x_{i}=0 \iff y_{i}=0$                  |

~={green}Funció objectiu.=~ Minimitzar el cost total:
	$$ z = f_{1}\,y_{1} + \dots + f_{n}\,y_{n} + v_{1}\,x_{1} + \dots + v_{n}\,x_{n} $$
```

```ad-met
title: **Camins**

> Trobar la ruta més curta per visitar tots els llocs $A_{1},\dots,A_{n}$ tenint la distància entre ells:
> $$ D = \begin{pmatrix}
d_{11} & \dots & d_{1n} \\
\vdots & \ddots & \vdots \\
d_{n1} & \dots & d_{nn} \\
\end{pmatrix} $$
> amb $d_{ij}$ la distància entre $A_{i}$ i $A_{j}$. Evidentment $d_{ii}=0$ per tot $i$.

~={green}Variables.=~ $x_{ij}=\begin{cases}1&\text{si anem d'}A_{i} \text{ a }A_{j}\\0 &\text{en cas contrari}\end{cases}$

~={green}Restriccions.=~

| $\displaystyle\sum_{i=1}^{n}x_{ij}=1 \quad\forall j$ | $\displaystyle\sum_{j=1}^{n}x_{ij}=1 \quad\forall i$ |
|:----------------------------------------------------:|:----------------------------------------------------:|
|       S'ha d'entrar un cop a totes les ciutats       |      S'ha de sortir un cop de totes les ciutats      | 

+ També s'ha de tenir en compte que no apareguin cicles disjunts. Per $n\leq5$ :
	$$ x_{ij} + x_{ji} \leq 1 \quad \forall\,i\neq j$$

~={green}Funció objectiu.=~ Minimitzar la distància total:
	$$ z = \sum_{i=1}^{n}\sum_{j=1}^{n} d_{ij}\,x_{ij} $$
```


#### **Variables** i **funcions** ...rares 

```ad-met
title: **Variables** que prenen **finits valors**

> Variable $x$ que només pot prendre els valors $X_{1},\dots,X_{n}$.

~={green}Variables.=~ Expressem $x$ com a suma de variables binàries $y_{1},\dots,y_{n}$:
$$ x = X_{1}\,y_{1} + \dots + X_{n}\,y_{n} $$

~={green}Restriccions.=~ La variable $x$ només pot prendre un valor:
$$ y_{1}+\dots+y_{n} = 1 $$
```

```ad-met
title: **Funcions** (lineals) **a trossos**

> Funció $g(x)$ definida en $n$ trossos lineals, amb els canvis (incloent extrems) a $(X_{0},Y_{0}),\dots,(X_{n},Y_{n})$:
> $$ g(x) = Y_{i-1} + \frac{Y_{i}-Y_{i-1}}{X_{i}-X_{i-1}}\,(x-X_{i-1}) \quad \text{si }X_{i-1}\leq x\leq X_{i} $$
> per $i=1,\dots,n$.

~={green}Variables.=~ Descomponem $x$ en $n$ variables reals:
$$ x = x_{1} + \dots + x_{n} $$

~={green}Restriccions.=~ Introduim $n+1$ variable binàries $z_{0},\dots,z_{n}$ que indiquen si $x$ ha arribat a $X_{i}$ (observem que els extrems $z_{0}=1$ i $z_{n}=0$ sempre):
$$ (X_{i}-X_{i-1})\,z_{i} \leq x_{i} \leq (X_{i}-X_{i-1})\,z_{i-1}$$

~={green}Funció.=~ Expressem $g$ en funció de les noves variables:
$$ g = \frac{Y_{1}-Y_{0}}{X_{1}-X_{0}}\,x_{1} + \dots +  \frac{Y_{n}-Y_{n-1}}{X_{n}-X_{n-1}}\,x_{n} $$
```

```ad-met
title: **Màxim de funcions** (lineals)

> Funció $g=\max(g_{1},\dots,g_{n})$ amb $g_{i}\geq0$ lineals. 

~={green}Variables.=~ 
+ $y_{i}=\begin{cases}1&\text{si }g_{i}\text{ és la màxima}\\0&\text{en cas contrari}\end{cases}$
+ $z_{i}=\begin{cases}g_{i}&\text{si }g_{i}\text{ és la màxima}\\0&\text{en cas contrari}\end{cases}$
+ $M\equiv$ cota superior de $g_{1},\dots,g_{n}$ a la regió factible

~={green}Restriccions.=~
+ $\begin{cases}\,y_{1}+\dots+y_{n}=1\\[0.4em] \,g_{2}-g_{1}\leq M(1-y_{1}),\,\dots,\,\,\,\,\,\,\,\,g_{n}-g_{1}\leq M(1-y_{1})\\ \,\dots\\ \,g_{1}-g_{n}\leq M(1-y_{n}),\,\dots,\,g_{n-1}-g_{n}\leq M(1-y_{n})\end{cases}$
+ $\begin{cases}z_{i}-g_{i}&\leq\,\,\,\,M(1-y_{i})\\z_{i}-g_{i}&\geq-M(1-y_{i})\\z_{i}&\leq\,\,\,\,My_{i}\end{cases} \quad\forall i$

~={green}Funció objectiu.=~
$$ z = z_{1}+\dots+z_{n} $$
```


---
## **Fluxos** lineals sobre **xarxes**

````ad-def
title: *Xarxa*

Un ==graf dirigit== o ==xarxa== és un graf $(V,A)$ en què $V$ és un conjunt i $A\subseteq(V\times V)$. En aquest cas, les arestes s'anomenen ==arcs==.

```ad-def
title: *Matriu d'incidència*

La ==matriu d'incidència== d'una xarxa $(V,A)$ és la matriu amb tantes files com vèrtexs $V$ i tantes columnes com arcs $A$ té la xarxa, i els seus elements son
$$ a_{ij} = \begin{cases}
1 & \text{si el vèrtex }i\text{ és origen de l'arc }j \\
-1 & \text{si el vèrtex }i\text{ és destí de l'arc }j \\
0 & \text{si el vèrtex }i\text{ no és incident amb l'arc }j
\end{cases} $$
```

+ Un ==camí== és una seqüència d'arestes consecutives.
+ Un ==cicle== és un camí que comença i acaba al mateix vèrtex.
+ Un graf és ==connex== si per cada parella de vèrtexs hi ha un camí que els uneix.
````

````ad-def
title: *Arbre*

Un ==arbre== és un graf connex sense cicles.

```ad-prop
title: Propietats dels arbres

+ No té cicles a menys que li afegim una aresta. Llavors aparex un sol cicle.
+ És connex fins que li traiem una sola aresta.
+ Entre cada parella de vèrtexs hi ha només un camí.
```

```ad-prop
Donat un graf connex qualsevol, es pot aconseguir un arbre que conté tots els seus vèrtexs eliminant-li arestes.
```

```ad-def
title: Arbre *generador*

Un arbre format per tots els vèrtexs d'un graf i algunes de les seves arestes s'anomena ==arbre generador== del graf.
```

```ad-prop
Donat un arbre amb $m$ vèrtexs, aleshores té $m-1$ arestes i la seva matriu d'incidència és de rang $m-1$.
```
````


#### Capacitat **ilimitada**

Tenim una xarxa amb $m$ nodes $v_{1},\dots,v_{m}$ i $n$ arcs $e_{ij}$ (que van de $v_{i}$ a $v_{j}$).

Els vèrtexs poden ser:
+ **Productors.** Vèrtexs $v_{i}$ que subministren un flux $d_{i}>0$.
+ **Consumidors.** Vèrtexs $v_{i}$ que demanden un flux $d_{i}<0$.
+ **De pas.** Vèrtexs $v_{i}$ ni productors ni consumidors amb $d_{i}=0$.

Per altra banda:
+ Cada arc $e_{ij}$ té un **cost per unitat** transportada $c_{ij}$.
+ La suma total de requeriments ha de ser nul·la: $\sum d_{i}=0$

Finalment suposem que no hi ha arcs $e_{ij},e_{pq}$ amb $i=p$ i $j=q$.

````ad-met
title: Model matemàtic

~={green}Variables.=~ $x_{ij}$ per cada $e_{ij}$ igual al flux que circula per l'arc

~={green}Restriccions.=~
+ $\displaystyle\sum_{j} x_{ij} - \sum_{j}x_{ji} = d_{i} \quad\forall\,i=1,\dots,m$
+ Matriu d'incidència de la xarxa

~={green}Funció objectiu.=~ Minimitzar el cost total:
$$ z = \sum_{ij} c_{ij}\,x_{ij} $$

```ad-not
+ El sistema que obtenim está quasi en forma estàndard; només cal multiplicar per $-1$ les files amb $d_{i}<0$.
+ El rang d'$A$ serà $m-1$, per tant haurem d'eliminar una fila.
```
````


###### **Arbres generadors** i solucions factibles bàsiques

```ad-def
title: Solució associada a un arbre generador

Direm que una solució d'un problema de fluxos lineals està ==associada== a un arbre generador si tots els arcs de fora de l'arbre tenen flux $0$.
```

````ad-teor
Donat un problema de fluxos lineals sense limitació una solució és bàsica si i només si està associada a un arbre generador.

```ad-prop
Si un problema de fluxos lineals té òptim, aleshores hi ha una solució optimal amb flux enter a tots els arcs.
```
````


###### Mètode del **Símplex**

````ad-met
title: Fase **I**

Partim de no tenir una solució factible bàsica evident. Consisteix en resoldre un problema auxiliar de la xarxa amb les modificacions següents:

1. Afegir un node.
2. Afegir un arc amb cost $1$ des de cada node productor al node afegit, i des del node adegit a cada node consumidor.
3. Posar cost $0$ a tots els arcs de la xarxa original.

```ad-not
Si en la xarxa original hi ha algun node de pas, es pot fer servir en comptes del nou node.
```

Aquest nou problema té solució evident.
+ **Òptim $\boldsymbol{=0}$.** El flux passa pels arcs de cost $0$ (de la xarxa original).
+ **Òptim $\boldsymbol{\neq0}$.** No hi ha solució.
````

```ad-met
title: Fase **II**

Partim d'una solució factible bàsica associada a un arbre generador.

1. Per cada arc no bàsic, actualitzem el seu coeficient de la funció objectiu.
	+ **Tots els coeficients de la funció objectiu son positius o nuls:** Hem arribat a l'optimal.
	+ **Si no:** Continuem.
2. Introduïm a la base un dels arcs de coeficient negatiu assignant-li el flux màxim possible.
3. Traiem de la base l'arc bàsic que hagi passat a tenir flux $0$ i tornem a començar.
```


#### Capacitat **limitada**


|              Arcs $e_{ij}$              | Nodes $v_{i}$ |
|:---------------------------------------:|:-------------:|
| <ul><li>cost $c_{ij}$<li>capacitat $k_{ij}$ | <ul><li>requeriment $b_{i}$              |

El PL serà el següent:
$$ \begin{align}
\text{minimitzar}& \quad z=\sum_{ij}c_{ij}\,x_{ij} \\
\text{subjecte a:}& \quad \begin{cases}
\,\displaystyle\sum_{j}x_{ij}-\sum_{j}x_{ji} = d_{i} \quad &\forall i \\[0.5em]
\,0\leq x_{ij}\leq k_{ij} \quad &\forall e_{ij}
\end{cases}
\end{align} $$

En aquests problemes, a part dels arcs bàsics i no bàsics, tindrem els **arcs saturats**. Quan tenim una solució factible, dividirem els arcs en tres conjunts:
+ $\mathcal{E}\equiv$ arcs buits (flux $0$)
+ $\mathcal{S}\equiv$ arcs saturats (flux amb capacitat de l'arc)
+ $\mathcal{B}\equiv$ resta d'arcs

```ad-teor
Per a una solució factible és bàsica si i només si els arcs de $\mathcal{B}$ formen un graf sense cicles (no necessàriament arbre).
```


###### Mètode del **Símplex**

```ad-met
title: Fase **II**

A l'hora de provar d'introduir un arc $e_{ij}$ a $\mathcal{B}$:
+ $\boldsymbol{e_{ij}\in \mathcal{E}:}$ Similar a les xarxes amb capacitat ilimitada, li assignem el flux màxim possible.
+ $\boldsymbol{e_{ij}\in \mathcal{S}:}$ Cal dessaturar-lo. Li restem el $t$ màxim possible al seu flux i compensem els fluxos dels arcs $\in \mathcal{B}$ que formin un cicle amb $e_{ij}$.

Si la suma dels costos de les arestes del cicle que es forma (recorregut en sentit de $e_{ij}$ si s'afexeig flux, i en sentit contrari si se'n treu) és $\geq0$, afegir $e_{ij}$ a $\mathcal{B}$ no millorarà la funció objectiu, i per tant triem una altra aresta.
```