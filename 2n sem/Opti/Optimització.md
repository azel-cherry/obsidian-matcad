## Teoria d'**extrems** en $\mathbb{R}^{n}$

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
^bf1c46

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
title: Funció *convexa*/*còncava*

Sigui $S\in \mathbb{R}^n$ convex, una funció $f:S\to \mathbb{R}$ és ==convexa== si per tot $x_{1},x_{2}\in S$ i per tot $\lambda\in(0,1)$
$$ f(\lambda\,x_{1}+(1-\lambda)\,x_{2}) \leq \lambda f(x_{1}) + (1-\lambda) f(x_{2}) \,.$$

```ad-def
title: Funció *estrictament* convexa

Una funció $f:S\to \mathbb{R}$ és ==estrictament convexa== si per tot $x_{1},x_{2}\in S$ amb $x_{1}\neq x_{2}$ i per tot $\lambda\in(0,1)$
$$ f(\lambda\,x_{1}+(1-\lambda)\,x_{2}) < \lambda f(x_{1}) + (1-\lambda) f(x_{2}) \,.$$
```

---

Una funció $f:S\to \mathbb{R}$ és ==còncava== si $-f$ és convexa.
```ad-def
title: Funció *estrictament* còncava

Una funció $f:S\to \mathbb{R}$ és ==estrictament còncava== si $-f$ és estrictament convexa.
```
`````

```ad-prop
title: **Convexitat** d'una **funció**

Sigui $S\subset \mathbb{R}^{n}$ convex.

+ Si $f:S\to \mathbb{R}$ de classe $C^{1}$, aleshores $f$ és convexa en $S$ si i només si per tot $x_{1},x_{2}\in S$
$$ f(x_{1}) \geq f(x_{2})+\nabla f(x_{2})\cdot(x_{1}-x_{2}) \,.$$

+ Si $f:S\to \mathbb{R}$ de classe $C^{2}$, aleshores $f$ és convexa en $S$ si i només si per tot $x\in S$ i per tota direcció factible $d$ en $x$
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
`````

```ad-def
title: *Con tangent*

El conjunt format pels vectors tangents a una funció en un punt s'anomena el ==con tangent==.
```

A partir d'ara considerarem que totes les funcions tenen totes les derivades contínues que calguin.

````ad-def
title: Punt *regular*

Sigui $h:\mathbb{R}^n\to \mathbb{R}^m$, un punt $x_{0}$ tal que $h(x_{0})=0$ és un ==punt regular== de l'equació si
$$ \nabla h_{1}(x_{0}),\dots,\nabla h_{m}(x_{0}) $$
son vectors linealment independents.

```ad-prop
Sigui $x_{0}$ un punt regular de $h(x)=0$.

Aleshores el con tangent al conjunt $\{x \mid h(x)=0\}$ en $x_{0}$ és
$$ \{v\in \mathbb{R}^n \mid \nabla h(x_{0})\cdot v=0\} \,.$$
```
````

````ad-teor
title: **Condicions ** d'un **mínim local**

Sigui
$$ S:\begin{Bmatrix}
h_{1}(x)=0 & g_{1}(x)\leq 0 \\
\vdots & \vdots \\
h_{m}(x)=0 & g_{r}(x)\leq0
\end{Bmatrix} \,.$$

Si $x_{0}$ és un mínim local de $f$ en $S$ i és un punt regular de les restriccions actives en $x_{0}$ :

```ad-teor
title: **Necessàries**

Aleshores existeixen $\lambda=(\lambda_{1},\dots,\lambda_{m})$ i $\mu=(\mu_{1},\dots,\mu_{r})\geq 0$ tals que:

1. ~={green}Condicions de Karush-Kuhn-Tucker (KKT):=~ $$ \begin{gather}
\nabla f(x_{0})+\lambda \cdot \nabla h(x_{0})+\mu \cdot\nabla g(x_{0}) = 0 \\
\mu_{i}\,g_{i}(x_{0})=0 \quad \forall i\in \{1,\dots,r\}
\end{gather} $$

1. La matriu
$$ M(x_{0}) = \nabla^{2}f(x_{0})+\sum_{i=1}^m \lambda_{i} \cdot \nabla^{2}h_{i}(x_{0}) + \sum_{i=1}^r \mu_{i} \cdot \nabla^{2}g_{i}(x_{0}) $$
compleix $v\cdot M(x_{0})\cdot v\geq0$ per tot $v$ de l'espai tangent a les restriccions actives en $x_{0}$ .

---

Les constants $\lambda_{1},\dots,\lambda_{m}$ s'anomenen ==multiplicadors de Lagrange== i $\mu_{1},\dots,\mu_{r}$ es diuen ==multiplicadors de Karush-Kuhn-Tucker==.
```

```ad-teor
title: **Suficients**

Donat $x\in S$, si existeixen $\lambda=(\lambda_{1},\dots,\lambda_{m})$ i $\mu=(\mu_{1},\dots,\mu_{r})$ tal que
+ $\begin{cases} \,\nabla f(x)+\lambda \cdot \nabla h(x)+\mu \cdot \nabla g(x) = 0 \\[0.4em] \,\mu_{i}\,g_{i}(x)=0 \quad \forall i\in \{1,\dots,r\} \end{cases}$
+ La matriu
$$ M(x) = \nabla^{2}f(x)+\sum_{i=1}^m \lambda_{i} \cdot \nabla^{2}h_{i}(x) + \sum_{i=1}^r \mu_{i} \cdot \nabla^{2}g_{i}(x) $$
compleix $v\cdot M(x)\cdot v>0$ per tot $v\neq0$ del subespai
$$ \{v \mid \nabla h(x)\cdot v=0 \,;\, \nabla g_{i}(x)\cdot v=0 \,\,\, \forall i \text{ tal que } g_{i}(x)=0 \text{ i } \mu_{i}>0\} \,,$$

aleshores $x$ és mínim local (estricte) de $f$ en $S$.
```
````


#### **Extrems** en $\mathbb{R}$

```ad-prop
Sigui $f:[a,b]\to \mathbb{R}$ de classe $C^{2}$.
$$ f'(a)>0 \,\lor (f'(a)=0 \,\land\, f''(a)>0) \implies a \text{ és mínim local.} $$
```


---
## Algorismes d'**optimització** en $\mathbb{R}$

#### **Ordres** de **convergència**

Sigui $\{x_{k}\}_{k}$ tal que $x_{k}\to x_{0}$ , i $C<1$ constant.
+ $\boxed{\,\displaystyle\frac{|x_{k+1}-x_{0}|}{|x_{k}-x_{0}|}\leq C\,} \implies$ **convergència ~={green}lineal=~** (d'ordre 1)
	+ $\displaystyle\lim_{k\to\infty}\frac{|x_{k+1}-x_{0}|}{|x_{k}-x_{0}|}=0 \implies$ **convergència ~={green}superlineal=~**

Per $C\leq1$ :
+ $\boxed{\,\displaystyle\frac{|x_{k+1}-x_{0}|}{|x_{k}-x_{0}|^p} \leq C\,} \implies$ **convergència ~={green}d'ordre $\boldsymbol p$=~**
	+ $p=2 \implies$ **convergència ~={green}quadràtica=~**


#### Mètode de **Newton**

Consisteix en aproximar el mínim d'una funció $f:\mathbb{R}\to \mathbb{R}$ **iterativament** per 

$$ \boxed{\,x_{k+1} = x_{k} - \frac{f'(x_{k})}{f''(x_{k})}\,} \,.$$
^b8a461

Aquest mètode no assegura torbar solució, però si ho fa és molt ràpid. 

```ad-prop
Sigui $x_{0}$ tal que $f'(x_{0})=0$ i $f''(x_{0})\neq 0$, amb $f\in C^{3}$.

Aleshores existeix $\delta>0$ tal que si $|x_{1}-x_{0}|<\delta$, la [[#^b8a461|successió]] definida anteriorment començant per $x_{1}$ convergeix a $x_{0}$ .
```

```ad-prop
title: **Ordre** de convergència

Sigui $x_{0}$ un mínim trobat pel mètode de Newton amb la successió $\{x_{k}\}_{k}$ . Aleshores
$$ f''(x_{0})\neq 0 \implies x_{k} \text{ té convergència quadràtica.} $$
```


#### Mètode de la **posició falsa**

Consisteix en aproximar el mínim d'una funció $f:\mathbb{R}\to \mathbb{R}$ **iterativament** per

$$ \boxed{\,x_{k+1} = x_{k}-f'(x_{k}) \frac{x_{k}-x_{k-1}}{f'(x_{k})-f'(x_{k-1})}\,} \,.$$
^6a8208

```ad-prop
Sigui $x_{0}$ tal que $f'(x_{0})=0$ i $f''(x_{0})\neq 0$, amb $f\in C^{3}$.

Aleshores existeix $\delta>0$ tal que si $|x_{1}-x_{0}|<\delta$, la [[#^6a8208 | successió]] definida anteriorment començant per $x_{1}$ convergeix a $x_{0}$ .
```

```ad-prop
title: **Ordre** de convergència

Sigui $x_{0}$ un mínim trobat pel mètode de la posició falsa amb la successió $\{x_{k}\}_{k}$ .

Aleshores $\{x_{k}\}_{k}$ té convergència d'ordre
$$ p = \frac{1+\sqrt{5}}{2} \,,$$
conegut com la **raó àuria**.
```


#### Mètode d'**adjust quadràtic** de tres punts

Consisteix en, partint de tres punts $x_{1},x_{2},x_{3}$ en posició convexa
$$ f(x_{1})\geq f(x_{2})\leq f(x_{3}) \,,$$
ajustar-los a una paràbola $P(x)=ax^{2}+bx+c$ per tal de trobar el mínim, que serà
$$ x = \frac{-b}{2a} \,,$$
i agafar una nova terna entre $x,x_{1},x_{2},x_{3}$ en posició convexa, per seguir aplicant aquest mètode iterativament.

Aquest mètode **no assegura la convergència**, i si convergeix, només es pot assegurar una **convergència lineal**.

```ad-prop
Si partim de tres punts $x_{1},x_{2},x_{3}$ prou a prop del mínim $x_{0}$, i $f$ compleix $f'(x_{0})=0,f''(x_{0})\neq 0$ i $f'''(x)$ és [[#^70f39c | de Lipschitz]].

Aleshores la successió $\{x_{k}\}_{k}$ definida pel mètode d'adjust quadràtic convergeix a $x_{0}$ amb un ordre de convergència $p\approx 1.324718$ arrel real de
$$ p^{3}-p-1=0 \,.$$
```


#### Mètodes de **Fibonacci** i de la **raó àuria**

Suposem que sabem que hi ha un mínim en l'interval $[a,b]$ . Aquests mètodes consisteixen en **reduir aquest interval al màxim**.

###### **Fibonacci**

Considerem que, a part dels extrems inicials, podem avaluar $f$ en $N$ punts. Aleshores els punts on hem de dividir l'interval son
$$ \boxed{\,r_{k} = \frac{F_{N-k}}{F_{N-k+1}}\,} \,,$$
on $F_{n}$ és l'$n$-èssim terme de la successió de Fibonacci. 

Amb aquest mètode reduïm l'interval per un factor de $\frac{1}{F_{N}}$ a cada iteració.

```ad-prop
title: **Error**

Si volem una tolerància d'error de $\pm\varepsilon$ haurem d'agafar $N-1$ punts, on $N$ és el natural més petit tal que
$$ F_{N} > \frac{b-a}{\varepsilon} \,.$$
```


###### **Raó àuria**

Consisteix en agafar tots els factors
$$ \boxed{\,r_{k}=\varphi=\frac{-1+\sqrt{5}}{2}\,} \,.$$

Amb aquest mètode reduïm l'interval per un factor de $\varphi$ a cada iteració.

No és el mètode més òptim per reduir l'interval, però és més senzill i no cal saber en quants punts podem avaluar la nostra funció.


---
## Optimització **sense restriccions** en $\mathbb{R}^{n}$

En aquest cas les condicions KKT es redueixen a
$$ \begin{cases}
\displaystyle\frac{\partial f}{\partial x_{1}} (x_{1},\dots,x_{n}) = 0 \\
\quad\vdots \\
\displaystyle\frac{\partial f}{\partial x_{n}} (x_{1},\dots,x_{n}) = 0
\end{cases} $$
i les de segon ordre a que $\nabla^{2}f(x_{0})$ sigui definida positiva.


#### Mètode de **Newton**

Es fa servir la successió
$$ \boxed{\,x_{k+1} = x_{k} - (\nabla^{2}f(x_{k}))^{-1}\,\nabla f(x_{k})\,} \,.$$

````ad-prop
Sigui $f:\mathbb{R}^{n}\to \mathbb{R}$ de classe $C^{3}$, amb $x_{0}$ un punt tal que $\nabla f(x_{0})=0$ i $\nabla^{2}f(x_{0})$ és definida positiva.

Aleshores existeix $\delta>0$ tal que
$$ ||x_{1}-x_{0}||<\delta \implies \{x_{k}\}_{k}\to x_{0} \,.$$

```ad-not
Es dedueix que la convergència és quadràtica
$$ \frac{||x_{k+1}-x_{0}||}{||x_{k}-x_{0}||^{2}} \leq C $$
on $C$ és proporcional al *vap* més gran de $(\nabla^{2}f(x_{0}))^{-1}$. 

Si la matriu $\nabla^{2}f(x_{0})$ no és invertible, la convergència no serà quadràtica si n'hi ha.
```
````

Aquest mètode, però, té un procediment costós i numèricament problematic.


---

Considerem el mètode iteratiu genèric
$$ x_{k+1} = x_{k} - B_{k}^{-1}\,\nabla f(x_{k}) \,.$$

```ad-prop
Sigui $B_{k}$ una matriu definida positiva,
$$ d_{k} := -B_{k}^{-1} \,\nabla f(x_{k}) $$
és una direcció de descens.
```


#### Mètode del **gradient** (*steepest descent*)

Consisteix en agafar $B_{k}=I$, és a dir:
$$ \boxed{\,x_{k+1} = x_{k} -  \alpha_{k}\nabla f(x_{k})\,} \,,$$
on $\alpha_{k}$ és un paràmetre que determina la longitud del pas que fem  a cada iteració, que serà l'$\alpha>0$ que minimitzi
$$ \phi(\alpha) = f(x_{k}+\alpha\,d_{k}) \,.$$

```ad-prop
Cada direcció que s'obté del mètode anterior és ortogonal a l'anterior, és a dir
$$ d_{k+1} \cdot d_{k} = 0 \quad \forall k\in \mathbb{N} \,.$$
```

Aquest mètode sempre convergeix a un punt de gradient nul, però pot fer-ho molt lentament.


###### Cerca **lineal inexacta**

Consisteix en buscar un valor per $\alpha_{k}$ prou bo a cada iteració però sense buscar gaire.

`````ad-def
title: Condicions de Wolfe

Condicions que ha de comlir $\alpha_{k}$ a cada iteració:
1. Agafant $\varepsilon$ petit (per exemple $\varepsilon=10^{-3}$):
	$$\phi(\alpha_{k})\leq \phi(0)+\varepsilon\,\phi'(0)\,\alpha_{k}$$
2. Amb $\varepsilon <\eta <0$ (per exemple $\eta=0.9$):
	$$\phi'(\alpha_{k})\geq \eta\,\phi'(0)$$

````ad-def
title: Condicions de Wolfe **fortes**

A més de les anteriors, afegim:

3. Amb el mateix $\eta$ :
	$$ \phi'(a_{k}) \leq -\eta\,\phi'(0) $$

---

Dit d'altra manera, tenim les següents condicions:
+ Agafant $\varepsilon$ petit (per exemple $\varepsilon=10^{-3}$):
	$$\phi(\alpha_{k})\leq \phi(0)+\varepsilon\,\phi'(0)\,\alpha_{k}$$
+ Amb $\varepsilon <\eta <0$ (per exemple $\eta=0.9$):
	$$ |\phi'(\alpha_{k})| \leq \eta\,|\phi'(0)| $$

```ad-prop
Existeix un inverval de valors $\alpha$ complint les 3 condicions de Wolfe.
```
````
`````

````ad-teor
title: Teorema de **Zoutendijk**

Si a cada iteració d'un algorisme d'optimització la direcció $d_{k}$ és de descens i $\alpha_{k}$ compleix les condicions de Wolfe,
$$ \sum_{k=1}^{\infty} \cos^{2}(\theta_{k}) \cdot ||\nabla f(x_{k})||^{2} < \infty \,,$$
amb $\theta_{k}$ l'angle entre $\nabla f(x_{k})$ i $d_{k}$, és a dir
$$ \cos(\theta_{k}) = \frac{\nabla f(x_{k})\cdot d_{k}}{||\nabla f(x_{k})||\cdot||d_{k}||} \,.$$

```ad-prop
Si a més es compleix $\cos^{2}(\theta_{k})\geq\delta$ per algun $\delta>0$, aleshores
$$ \lim_{k\to\infty} \nabla f(x_{k}) = 0 \,.$$
```
```ad-prop
Si a més es compleix $\cos^{2}(\theta_{k_{n}})\geq\delta$ per algun $\delta>0$ i successió parcial $\{\theta_{k_{n}}\}_{n}$, aleshores
$$ \lim_{n\to\infty} \nabla f(x_{k_{n}}) = 0 \,.$$
```
````

A partir d'aquestes proposicions podem assegurar que aquest algorisme convergeix a un punt estacionari.

```ad-met
title: Trobar $\boldsymbol\alpha$

1. Començem amb l'interval $[\alpha_{\text{min}},\alpha_{\text{max}}]=[0,+\infty)$ .
2. Escollim $\alpha\in[\alpha_{\text{min}},\alpha_{\text{max}}]$ i comprovem si es compleixen les condicions.
	+ Si no es compleix *Wolfe-1*, ens hem passat. Assignem $\boxed{\alpha_{\text{max}}=\alpha}$ .
	+ Si no es compleix *Wolfe-2*, no estem prou a prop. Assignem $\boxed{\alpha_{\text{min}}=\alpha}$ .
3. Assignem un nou $\alpha$, per exemple
	$$ \alpha = \frac{\alpha_{\text{min}}+\alpha_{\text{max}}}{2} \,.$$
4. Repetim els passos (2) i (3) fins que es compleixin totes les condicions.
```


---
## Apèndix

```ad-not
title: Notació

+ ~={green}Vector gradient=~ en $x\in \mathbb{R}^n$ : 
$$ \boldsymbol{\nabla f(x)}=\left( \frac{df}{dx_{1}}(x),\,\dots, \frac{df}{dx_{n}}(x) \right) $$

+ ~={green}Derivada en direcció $\boldsymbol d$=~ de $f$ :
$$ \boldsymbol{\nabla f\cdot d}=\lim_{n\to0} \frac{f(x+hd)-f(x)}{h} $$

+ ~={green}Matriu Jacobiana=~ de $f:\mathbb{R}^n\to \mathbb{R}^m$ en $x$ :
$$ \boldsymbol{\nabla f(x)} = \begin{pmatrix}
\displaystyle\frac{df_{1}}{dx_{1}}(x) & \dots & \displaystyle\frac{df_{1}}{dx_{n}}(x) \\
\vdots & \ddots & \vdots \\
\displaystyle\frac{df_{m}}{dx_{1}}(x) & \dots & \displaystyle\frac{df_{m}}{dx_{n}}(x)
\end{pmatrix} $$

+ ~={green}Matriu Hessiana=~ en $x\in \mathbb{R}$ :
$$ \boldsymbol{\nabla^{2}f(x)} = \begin{pmatrix}
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

```ad-def
title: Funció *de Lipschitz*

Una funció $f$ és ==de Lipschitz== si per tot $y,z \in (c,d)$ existeix $L>0$ tal que
$$ \mid f(x,y)-f(x,z) \mid < L\mid y-z \mid .$$
```

^70f39c
