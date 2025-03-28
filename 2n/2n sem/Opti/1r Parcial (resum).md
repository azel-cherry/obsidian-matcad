
## 1. Teoria d'**extrems**

```ad-def
title: Definicions

+ Restricció $g(x)\leq0$ ~={green}activa=~ en $x^*$ si ==$g(x^*)=0$==
+ Restricció $g(x)\leq0$ ~={green}inactiva=~ en $x^*$ si ==$g(x^*)<0$==
+ $x^*$ ~={green}punt regular=~ de les seves restriccions actives $h_{1},\dots,h_{m}$ si ==$\nabla h_{1}(x^*),\dots,\nabla h_{m}(x^*)$ independents==
```

````ad-teor
title: **Condicions** d'un mínim local

> $S:\begin{Bmatrix}h_{1}(x)=0 & g_{1}(x)\leq 0 \\ \vdots & \vdots \\ h_{m}(x)=0 & g_{r}(x)\leq0\end{Bmatrix}$

```ad-teor
title: **Necessàries**

> $x^*$ mínim local, punt regular de les seves restriccions actives

Existeixen ~={green}multiplicadors de Lagrange=~ $\lambda=(\lambda_{1},\dots,\lambda_{m})$ i ~={green}de Karush-Kuhn-Tucker=~ $\mu=(\mu_{1},\dots,\mu_{r})\geq 0$ tals que
1. **Primer ordre (KKT)**:
	$$ \begin{gather}
\nabla f(x^*)+\lambda \cdot \nabla h(x^*)+\mu \cdot\nabla g(x^*) = 0 \\[0.5em]
\mu_{i}\,g_{i}(x^*)=0
\end{gather} $$

2. **Segon ordre**:
	$$ M(x) = \nabla^{2}f(x)+\sum_{i=1}^m \lambda_{i} \cdot \nabla^{2}h_{i}(x) + \sum_{i=1}^r \mu_{i} \cdot \nabla^{2}g_{i}(x) $$
	compleix $\boxed{\,v\cdot M(x^*)\cdot v\geq0\,}$ per tot $v$ de l'espai tangent a les restriccions actives en $x^*$.
```

```ad-teor
title: **Suficients**

> $x*\in S$

Si existeixen ~={green}multiplicadors de Lagrange=~ $\lambda=(\lambda_{1},\dots,\lambda_{m})$ i ~={green}de Karush-Kuhn-Tucker=~ $\mu=(\mu_{1},\dots,\mu_{r})\geq 0$ tals que
1. **Primer ordre (KKT)**:
	$$ \begin{gather}
\nabla f(x^*)+\lambda \cdot \nabla h(x^*)+\mu \cdot\nabla g(x^*) = 0 \\[0.5em]
\mu_{i}\,g_{i}(x^*)=0
\end{gather} $$

2. **Segon ordre**:
	$$ M(x) = \nabla^{2}f(x)+\sum_{i=1}^m \lambda_{i} \cdot \nabla^{2}h_{i}(x) + \sum_{i=1}^r \mu_{i} \cdot \nabla^{2}g_{i}(x) $$
	compleix $\boxed{\,v\cdot M(x)\cdot v>0\,}$ per tot $v\neq0$ tal que
	+ $\nabla h(x)\cdot v=0$
	+ $\nabla g_{i}(x)\cdot v=0$ per tot $i$ tal que $g_{i}(x)=0$ i $\mu_{i}>0$

llavors $x*$ és un mínim local de $f$ en $S$.
```
````


## 2. **Algorismes** d'optimització

```ad-def
title: Ordres de convergència

> $\{x_{k}\}_{k}$ tal que $x_{k}\to x^*$

Per $C<1$:
+ $\boxed{\,\displaystyle\frac{|x_{k+1}-x^*|}{|x_{k}-x^*|}\leq C\,} \implies$ **convergència ~={green}lineal=~** (d'ordre 1)
	+ $\displaystyle\lim_{k\to\infty}\frac{|x_{k+1}-x^*|}{|x_{k}-x^*|}=0 \implies$ **convergència ~={green}superlineal=~**

Per $C\leq1$ :
+ $\boxed{\,\displaystyle\frac{|x_{k+1}-x^*|}{|x_{k}-x^*|^p} \leq C\,} \implies$ **convergència ~={green}d'ordre $\boldsymbol p$=~**
	+ $p=2 \implies$ **convergència ~={green}quadràtica**
```


#### 2.1. En $\mathbb{R}$

```ad-met
title: Mètode de **Newton**

$$ \boxed{\,x_{k+1} = x_{k} - \frac{f'(x_{k})}{f''(x_{k})}\,} $$
```

```ad-met
title: Mètode de la **posició falsa**

$$ \boxed{\,x_{k+1} = x_{k}-f'(x_{k}) \frac{x_{k}-x_{k-1}}{f'(x_{k})-f'(x_{k-1})}\,} $$
```

```ad-met
title: Mètode d'**adjust quadràtic** (tres punts)

Partim de tres punts $x_{1},x_{2},x_{3}$ en posició convexa
$$ f(x_{1})\geq f(x_{2})\leq f(x_{3}) \,.$$

1. Els ajustem a una paràbola $P(x)=ax^{2}+bx+c$.
2. Calculem el mínim $x = \frac{-b}{2a}$.
3. Agafem una nova terna entre $x,x_{1},x_{2},x_{3}$ en posició convexa, i iterem des del principi.
```

| Mètode                    |                           ~={green}Newton=~                            |                        ~={green}Posició falsa=~                        | ~={green}Adjust quadràtic=~ |
| ------------------------- |:----------------------------------------------------------------------:|:----------------------------------------------------------------------:|:---------------------------:|
| **Assegura convergència** | <ul><li>$f'(x^*)=0$<li>$f''(x^*)\neq0$<li>$x_{1}$ prou a prop de $x^*$ | <ul><li>$f'(x^*)=0$<li>$f''(x^*)\neq0$<li>$x_{1}$ prou a prop de $x^*$ |             no              |
| **Ordre**                 |                      quadràtic si $f''(x^*)\neq0$                      |                 $\displaystyle p=\frac{1+\sqrt{5}}{2}$                 |           lineal            |

```ad-met
title: Mètodes per **reducció de l'interval**

> Podem avaluar $f$ en $N$ punts, a part d'$a$ i $b$

| Mètode                                                      |               ~={green}Fibonacci=~                |                ~={green}Raó àuria=~                 |
|:----------------------------------------------------------- |:-------------------------------------------------:|:---------------------------------------------------:|
| **Punts de divisió**                                        | $\displaystyle r_{k} = \frac{F_{N-k}}{F_{N-k+1}}$ | $\displaystyle r_{k}=\varphi=\frac{-1+\sqrt{5}}{2}$ |
| **Factor de reducció**                                      |          $\displaystyle \frac{1}{F_{N}}$          |                      $\varphi$                      |

+ Amb Fibonacci, per **tolerància** $\varepsilon$ agafem $N$ tal que $\displaystyle F_{N+1}> \frac{b-a}{\varepsilon}$.
```


#### 2.2. En $\mathbb{R}^{n}$

```ad-met
title: Mètode de **Newton**

$$ \boxed{\,x_{k+1} = x_{k} - (\nabla^{2}f(x_{k}))^{-1}\,\nabla f(x_{k})\,} $$
```

```ad-met
title: Mètode del **gradient** (*steepest descent*)

$$ \boxed{\,x_{k+1} = x_{k} -  \alpha_{k}\nabla f(x_{k})\,} $$
```

```ad-met
title: Mètode de **BFGS**

$$ \boxed{\, x_{k+1} = x_{k} + \alpha_{k}\,(-B_{k}^{-1})\,\nabla f(x_{k}) \,} $$

$$ \text{amb}\quad B_{k+1}^{-1} = \left(I-\frac{s_{k}\,y_{k}^{T}}{y_{k}^{T}s_{k}}\right) B_{k}^{-1} \left(I-\frac{y_{k}\,s_{k}^{T}}{y_{k}^{T}s_{k}}\right) + \frac{s_{k}\,s_{k}^{T}}{y_{k}^{T}s_{k}} \quad\text{on}\quad \begin{cases}
\,\,s_{k} = x_{k+1} - x_{k} \\
\,\,y_{k} = \nabla f(x_{k+1}) - \nabla f(x_{k})
\end{cases} $$
```

````ad-met
title: Mètode de **Nelder-Mead** (o del **símplex**)

```ad-def
title: Símplex
Conjunt de $\mathbb{R}^{n}$ de $n+1$ punts no continguts en un hiperplà.
```

Partim del símplex $\{x_{0},\dots,x_{n}\}\subset\mathbb{R}^n$, amb $x_{\min}$ i $x_{\max}$ el màxim i el mínim del símplex respectivament.

1. Calculem el ~={green-low}centre de masses=~
	$$ \widehat{x} = \frac{1}{n} \left( -x_{\max} + \sum_{i=0}^{n} x_{i} \right) \,.$$

2. Calculem el ~={green-low}punt reflectit=~ de $x_{\max}$
	$$ x_{\text{ref}} = 2\widehat{x} - x_{\max} \,.$$

3. Tenim 4 casos:
	+ $\boxed{\boldsymbol{f(x_{\text{\textbf{ref}}})}<f(x_{\min})}$
		
		Fem una ~={green-low}expansió=~:
		$$ x_{\text{exp}} = 2x_{\text{ref}}-\widehat{x} $$
		Si $f(x_{\text{exp}})<f(x_{\text{ref}})$, canviem $x_{\max}$ per $x_{\text{exp}}$.
		Si $f(x_{\text{exp}})>f(x_{\text{ref}})$, canviem $x_{\max}$ per $x_{\text{ref}}$.
	
	+ $\boxed{f(x_{\min})<\boldsymbol{f(x_{\text{\textbf{ref}}})}<\max\{f(x_{i}) \mid x_{i}\neq x_{\max}\}}$
		
		Canviem $x_{\max}$ per $x_{\text{ref}}$.
	
	+ $\boxed{\max\{f(x_{i}) \mid x_{i}\neq x_{\max}\}<\boldsymbol{f(x_{\text{\textbf{ref}}})}<f(x_{\max})}$
		
		Calculem
		$$ x_{\text{ce}} = \frac{1}{2} (x_{\text{ref}}+\widehat{x}) \,.$$
		Si $f(x_{\text{ce}})<f(x_{\text{ref}})$, canviem $x_{\max}$ per $x_{\text{ce}}$ (~={green-low}contracció exterior=~).
		
		Si no, canviem cada $x_{i}$ per $\frac{1}{2}(x_{\min}+x_{i})$.
	
	+ $\boxed{f(x_{\max})<\boldsymbol{f(x_{\text{\textbf{ref}}})}}$
		
		Calculem
		$$ x_{\text{ci}} = \frac{1}{2} (x_{\max}+\widehat{x}) \,.$$
		Si $f(x_{\text{ci}})<f(x_{\max})$, canviem $x_{\max}$ per $x_{\text{ci}}$ (~={green-low}contracció interior=~).
		
		Si no, canviem cada $x_{i}$ per $\frac{1}{2}(x_{\min}+x_{i})$.

4. Tornem a començar amb el nou símplex.
````

| Mètode                    |                                         ~={green}Newton=~                                         | ~={green}Gradient=~ |                                            ~={green}BFGS=~                                             | ~={green}Nelder-Mead=~ |
| ------------------------- |:-------------------------------------------------------------------------------------------------:|:-------------------:|:------------------------------------------------------------------------------------------------------:|:----------------------:|
| **Assegura convergència** | <ul><li>$\nabla f(x^*)=0$<li>$\nabla^{2}f(x^*)$ definida positiva<li>$x_{1}$ prou a prop de $x^*$ |         sí          | si $\cos$ de l'angle entre $-\nabla f(x_{k})$ i $(-B_{k}^{-1})\nabla f(x_{k})$ eventualment lluny de 0 |           no           | 
| **Ordre**                 |                            quadràtic si $\nabla^{2}f(x^*)$ invertible                             |     "molt lent"     |                          superlineal si $\nabla^{2}f(x^*)$ definida positiva                           |  -                      |


````ad-prop
title: Trobar $\boldsymbol\alpha$

```ad-def
title: Condicions de Wolfe
> $\phi(\alpha) = f(x_{k}+\alpha\,d_{k})$, generalment amb $d_{k}=\nabla f(x_{k})$

1. $\boxed{\,\phi(\alpha_{k})\leq \phi(0)+\varepsilon\,\phi'(0)\,\alpha_{k}\,}$ amb $\varepsilon \in(0,1)$ petita ~={faded}($\varepsilon=10^{-3}$)=~
2. $\boxed{\,\phi'(\alpha_{k})\geq \eta\,\phi'(0)\,}$ amb $\eta \in(\varepsilon,1)$ gran ~={faded}($\eta=0.9$)=~
```

Començem amb l'interval $[\alpha_{\text{min}},\alpha_{\text{max}}]=[0,+\infty)$ .
1. Escollim $\alpha\in[\alpha_{\text{min}},\alpha_{\text{max}}]$ i comprovem si es compleixen les condicions.
	+ Si no es compleix *Wolfe-1*, ens hem passat. Assignem $\boxed{\alpha_{\text{max}}=\alpha}$ .
	+ Si no es compleix *Wolfe-2*, no estem prou a prop. Assignem $\boxed{\alpha_{\text{min}}=\alpha}$ .

2. Assignem un nou $\alpha$, per exemple
	$$ \alpha = \frac{\alpha_{\text{min}}+\alpha_{\text{max}}}{2} \,.$$
3. Repetim fins que es compleixin totes les condicions.
````