## Teoria d'**extrems**

#### **Problema general** d'optimització

Anomenem ==problema genera d'optimització== a
$$ \min_{x\in S} f(x) $$
on $S\subset \mathbb{R}^{n}$ i $f$ és una funció a valors en $\mathbb{R}$. 

````ad-def
title: *Mínim global*

Diem que $x_{0}\in S$ és un ==mínim global== (o absolut) de $f$ en $S$ si per tot $x\in S$ 
$$f(x_{0})\leq f(x) \,.$$

```ad-def
title: Mínim global *estricte*

Un mínim global $x_{0}$ s'anomena ==estricte== si per tot $x\in S\backslash x_{0}$
$$f(x_{0})< f(x) \,.$$
```
````

````ad-def
title: *Mínim local*

Diem que $x_{0}\in S$ és un ==mínim local== (o relatiu) de $f$ en $S$ si $\exists\,\varepsilon>0$ tal que $\forall x\in S$ 
$$||x-x_{0}||<\varepsilon \implies f(x_{0})\leq f(x) \,.$$

```ad-def
title: Mínim local *estricte*

Un mínim local $x_{0}$ s'anomena ==estricte== si $\exists\,\varepsilon>0$ tal que $\forall x\in S\backslash x_{0}$
$$||x-x_{0}||<\varepsilon \implies f(x_{0})< f(x) \,.$$
```
````

```ad-not
title: Nota: **Màxims**

El ==màxim== de $f$ és el mínim de $-f$.
```

```ad-teor
title: Teorema de **Weierstrass**

Sigui $f$ contínua i $S\subset \mathbb{R}^{n}$ un [[#^f7df0a|compacte]], aleshores **existeix un mínim global** de $f$ en $S$.
```

````ad-def
title: Conjunt/punt/direcció *factible*

Donat un problema d'optimització $\displaystyle\min_{x\in S}f(x)$ :
+ El conjunt $S$ s'anomena ==conjunt factible==.
+ Els punts $x\in S$ s'anomenen ==punts factibles==.
+ Un vector $d\in \mathbb{R}^n$ s'anomena ==direcció factible== en $x$ si $\exists\,\varepsilon>0$ tal que 
$$ \alpha\in[0,\varepsilon] \implies x+\alpha d\in S \,.$$

![[Pasted image 20250211192905.png | 300]]

```ad-not
Si $x\in\mathring{S}$, aleshores tot $d\in \mathbb{R}^n$ és una direcció factible.
```
````

```ad-teor
title: **Condicions necessàries** d'un mínim local

Sigui $x_{0}\in S$ mínim local de $f\in C^{2}$.

Per tota direcció factible $d$ en $x_{0}$ :
+ $\nabla f(x_{0})\cdot d\geq 0$
+ $\nabla f(x_{0})\cdot d=0 \implies d^{T}\cdot \nabla^{2}f(x_{0})\cdot d\geq 0$

A més, si $x_{0}\in\mathring{S}$:
+ $\nabla f(x_{0})=0$
+ $d^{T}\cdot\nabla^{2}f(x_{0})\cdot d\geq 0$ per tot $d$ (==semidefinida positiva==)
```

```ad-teor
title: **Condicions suficients** d'un mínim local **interior**

Siguin $x_{0}\in\mathring{S}$ i $f\in C^{2}$.

Si es compleix:
+ $\nabla f(x_{0})=0$
+ $d^T\cdot\nabla^{2}f(x_{0})\cdot d>0$

aleshores $x_{0}$ és un **mínim local estricte** de $f$ en $S$.
```


#### **Convexitat**

```ad-def
title: Conjunt *convex*

Un conjunt $S\subset \mathbb{R}^n$ és ==convex== si per tot $x_{1},x_{2}\in S$ i per tot $\lambda\in(0,1)$
$$ \lambda\, x_{1}+(1-\lambda)\,x_{2} \in S \,.$$
```

`````ad-def
title: Funció *convexa*

Sigui $S\in \mathbb{R}^n$ convex, una funció $f:S\to \mathbb{R}$ és ==convexa== si per tot $x_{1},x_{2}\in S$ i per tot $\lambda\in(0,1)$
$$ f(\lambda\,x_{1}+(1-\lambda)\,x_{2}) \leq \lambda f(x_{1}) + (1-\lambda) f(x_{2}) \,.$$

```ad-def
title: Funció *estrictament* convexa

Una funció $f:S\to \mathbb{R}$ és ==estrictament convexa== si per tot $x_{1},x_{2}\in S$ amb $x_{1}\neq x_{2}$ i per tot $\lambda\in(0,1)$
$$ f(\lambda\,x_{1}+(1-\lambda)\,x_{2}) < \lambda f(x_{1}) + (1-\lambda) f(x_{2}) \,.$$
```
`````

`````ad-def
title: Funció *còncava*

Una funció $f:S\to \mathbb{R}$ és ==còncava== si $-f$ és convexa.
```ad-def
title: Funció *estrictament* còncava

Una funció $f:S\to \mathbb{R}$ és ==estrictament còncava== si $-f$ és estrictament convexa.
```
`````

```ad-prop
Sigui $S\subset \mathbb{R}^{n}$ convex i $f:S\to \mathbb{R}$ de classe $C^{1}$.

Aleshores $f$ és convexa en $S$ si i només si per tot $x_{1},x_{2}\in S$
$$ f(x_{1}) \geq f(x_{2})+\nabla f(x_{2})\cdot(x_{1}-x_{2}) \,.$$
```

```ad-prop
Sigui $S\subset \mathbb{R}^{n}$ convex i $f:S\to \mathbb{R}$ de classe $C^{2}$.

Aleshores $f$ és convexa en $S$ si i només si per tot $x\in S$ i per tota direcció factible $d$ en $x$
$$ d^{T}\cdot \nabla^{2}f(x)\cdot d \geq 0 $$
```

```ad-teor
title: **Local-global** per a funcions **convexes**

Sigui $S\subset \mathbb{R}^{n}$ convex i $f:S\to \mathbb{R}$ convexa.

Si $x_{0}\in S$ és un mínim local de $f$, aleshores també és un mínim global de $f$.
```

```ad-teor
Sigui $S\subset \mathbb{R}^{n}$ convex i $f:S\to \mathbb{R}$ convexa i de classe $C^{1}$.

Si $x_{0}\in S$ compleix $\nabla f(x_{0})\cdot d\geq 0$ per tota direcció factible $d$, aleshores $x_{0}$ és mínim global de $f$.

En particular,
$$ \nabla f(x_{0})=0 \implies x_{0} \text{ és mínim global}. $$
```


#### **Restriccions** funcionals

Considerem que la regió factible $S$ està definida per igualtats i desigualtats funcionals:
$$ S = \text{punts de } \mathbb{R}^{n} \text{ tal que } \begin{Bmatrix}
h_{1}(x)=0 \\
\vdots \\
h_{m}(x)=0
\end{Bmatrix} \text{ i } \begin{Bmatrix}
g_{1}(x)\leq0 \\
\vdots \\
g_{r}(x)\leq 0
\end{Bmatrix} \,,$$
on $h_{i},g_{i}:\mathbb{R}^{n}\to \mathbb{R}$ .

Si totes les funcions $h_{i},g_{i}$ son afins, es tracta d'un problema de ==Programació Lineal==. 

+ La funció $f$ que volem optimitzar es diu ==funció objectiu==
+ Les igualtats i desigualtats que defineixen $S$ es diuen ==restriccions==

`````ad-def
title: Restricció *activa*

Donat un punt factible $x_{0}\in S$, una restricció $g_{i}(x)\leq0$ es diu que és:
+ ==Activa== en $x_{0}$ si $g_{i}(x_{0})=0$
+ ==Inactiva== en $x_{0}$ si $g_{i}(x_{0})<0$

```ad-not
Les restriccions $h_{i}(x)=0$ son **sempre actives** en tot punt factible.
```
`````

`````ad-def
title: Vector *tangent*

Un vector $v$ és ==tangent== al conjunt $S\subset \mathbb{R}^n$ en un punt $x_{0}\in S$ si:
1. Existeix una successió $\{x_{k}\}_{k}\subset S$ tal que $$ \lim_{k\to\infty}x_{k} =x_{0} $$ 
2. Existeix una successió $\{t_{k}\}_{k}\subset S$ amb $t_{k}>0$, dexcreixent amb límit 0, tal que $$ \lim_{k\to\infty} \frac{x_{k}-x_{0}}{t_{k}}=v $$

```ad-not
title: Definició equivalent

Un vector $v$ és ==tangent== al conjunt $S\subset \mathbb{R}^n$ en un punt $x_{0}\in S$ si (o bé $v=0$) o bé existeix una successió $\{x_{k}\}_{k}\subset S$ amb $x_{k}\neq x_{0} \,\forall k\,$ tal que
$$ \lim_{k\to\infty}x_{k}=x_{0} \quad\text{i}\quad \lim_{k\to\infty} \frac{x_{k}-x_{0}}{||x_{k}-x_{0}||} = \frac{v}{||v||} $$
```

```ad-def
title: *Con tangent*

El conjunt format pels vectors tangents a una funció en un punt s'anomena el ==con tangent==.
```
`````



---
## Algorismes d'**optimització**

#### Mètode de **Newton**

Consisteix en aproximar el mínim de la funció $f:\mathbb{R}\to \mathbb{R}$ **iterativament** per 

$$ x_{k+1} = x_{k} \frac{f'(x_{k})}{f''(x_{k})} \,.$$
^b8a461

Aquest mètode no assegura torbar solució, però si ho fa és molt ràpid. 

```ad-prop
Sigui $x_{0}$ tal que $f'(x_{0})=0$ i $f''(x_{0})\neq 0$, amb $f\in C^{3}$.

Aleshores existeix $\delta>0$ tal que si $|x_{1}-x_{0}|<\delta$, la [[#^b8a461|successió]] definida anteriorment començant per $x_{1}$ convergeix a $x_{0}$ .
```


---
## Apèndix

```ad-not
title: Notació

+ ==Vector gradient== en $x\in \mathbb{R}^n$ : 
$$ \boldsymbol{\nabla f(x)}=\left( \frac{df}{dx_{1}}(x),\,\dots, \frac{df}{dx_{n}}(x) \right) $$

+ ==Derivada en direcció $d$== de $f$ :
$$ \boldsymbol{\nabla f\cdot d}=\lim_{n\to0} \frac{f(x+hd)-f(x)}{h} $$

+ ==Matriu Hessiana== en $x\in \mathbb{R}$ :
$$ \boldsymbol H=\boldsymbol{\nabla^{2}f(x)} = \begin{pmatrix}
\displaystyle\frac{d^{2}f}{dx_{1}dx_{1}}(x) & \dots & \displaystyle\frac{d^{2}f}{dx_{1}dx_{n}}(x) \\
\vdots & \ddots & \vdots \\
\displaystyle\frac{d^{2}f}{dx_{n}dx_{1}} & \dots & \displaystyle\frac{d^{2}f}{dx_{n}dx_{n}}
\end{pmatrix} $$
```

```ad-def
title: Topologia

+ ~={green}Disc (obert).=~ $\,D_{r}(a)=\{z\in \mathbb{C} | |z-a|<r\}$
	+ ~={green}Disc unitat.=~ $\,D_{1}(0)$
	+ ~={green}Disc tancat.=~ $\,\overline{D_{r}(a)}$
+ **Conjunts**.
	+ ~={green}Obert.=~$\quad\forall z\in A \quad\exists r>0\,$ tal que $\,D_{r}(z)\subset U$
	+ ~={green}Tancat.=~$\quad A^C$ és obert
	+ ~={green}Acotat.=~$\quad \exists \,r>0\,$ tal que $\,U\subset D_{r}(0)$
	+ ~={green}Compacte.=~ **Tancat** i **acotat**.
```
^f7df0a
