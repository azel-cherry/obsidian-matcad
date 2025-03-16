## Regressió **múltiple**

#### Solucions dels **mínims quadrats**

~={green}Problema general:=~
Tenim un sistema d'equacions **sobredeterminat** de forma
$$ A\cdot x=b \,,$$
amb $A\in M_{n,m}[\mathbb{R}]$, $n>m$ i $b\in \mathbb{R}$.

La solució d'aquest sistema és $x\in \mathbb{R}^n$ que compleix
$$ \min_{x}||A\cdot x-b||^2 $$

```ad-teor
Qualsevol solució del sistema d'equacions $n\times m$
$$ A^T\cdot A\cdot x=A^T\cdot b $$
soluciona el problema de minimització.

Aquestes equacions es diuen ==equacions normals==.
```

```ad-ex
title: Exemples

Siguin $\{y_{i},x_{i}\}$ amb $i=1,\dots,n$ observacions de les que volem estimar la recta $y_{i}=\alpha+\beta x_{i}$ que se'ls ajusta millor.

Aleshores 
$$ \widehat{x} = \begin{pmatrix}
\displaystyle\overline{y}-\overline{x}\,\frac{S_{xy}}{S_{x}^2} \\
\displaystyle\frac{S_{xy}}{S_{x}^{2}}
\end{pmatrix} \,.$$

---

En concret, si volem estimar la recta que passa per l'origen $y_{i}=\beta x_{i}$, aleshores
$$ \widehat{x} = \frac{\displaystyle\sum_{i=1}^{n}x_{i}\,y_{i}}{\displaystyle\sum_{i=1}^{n}x_{i}^{2}} \,.$$
```

```ad-prop
Sigui $A\in M_{n,m}[\mathbb{R}]$ amb $n\geq m$.

Aleshores la matriu $A^T\cdot A$ és invertible si i només si $\text{rang}(A)=m$ .
```

```ad-prop
Sigui $A\in M_{n,m}[\mathbb{R}]$ amb $n\geq m$ i 
$\text{rang}(A)=m$ .

Si la primera columna d'$A$ consisteix només d'$1$s, aleshores la solució $\widehat{x}$ satisfà
$$ \widehat{x} = \widehat{x}_{1} + \widehat{x}_{2}\overline{c}_{2}+\dots+\widehat{x}_{m}\overline{c}_{m} = \overline{b} \,,$$
on $\overline{c}_{i}$ i $\overline{b}$ son les mitjanes aritmètiques de la $i$-èssima columna d'$A$ i del vector $b$ respectivament.
```


#### **Model estadístic** general

Considerem el següent model de regressió lineal:
$$ y = X\beta + \varepsilon \,,$$
on: ^bc941d
+ $\boldsymbol y$ : vector de la ==variable dependent== de mida $n$
	+ $\boldsymbol n$ : mida de la mostra
+ $\boldsymbol X$ : ==matriu de disseny== de les ==variables explicatives== de dimensió $n\times (p+1)$
	+ $\boldsymbol p$ : número de ==regressors==, covarietats o variables independents
+ $\boldsymbol \beta$ : vector dels paràmetres que s'han d'estimar a partir de les dades, de mida $p+1$
+ $\boldsymbol\varepsilon$ : vector d'==errors aleatoris== de mida $n$

```ad-prop
title: **Errors**

S'assumeix que cada $\varepsilon_{i}$ son *v.a.*s amb $$ \text{E}(\varepsilon_{i})=0\,, \quad \text{Var}(\varepsilon_{i})=\sigma^{2} \,.$$
Per tant: $$ \text{Cov}(\varepsilon_{i},\varepsilon_{j}) = \begin{pmatrix} \sigma^{2} & 0 & \dots & 0 \\ 0 & \sigma^{2} & \dots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & \sigma^{2} \end{pmatrix} $$
```


###### Estimació de **paràmetres**

`````ad-def
title: *Estimable*

Siguin $l=(l_{1},\dots,l_{m})$ i $\varphi=(\varphi_{1},\dots,\varphi_{m})$.

La combinació lineal dels paràmetres $l^T\beta$ és ==estimable== si existeix una combinació lineal de $\varphi^{T}y$ tal que
$$ \text{E}(\varphi^{T}y) = l^T y \,.$$


```ad-prop
$l^T\beta$ és estimable si i només si $l$ es pot escriure com a combinació lineal de files de la matriu de disseny $X$.
```

```ad-not
Si $\text{Rang}(X)=m$ , qualsevol combinació lineal de $l^T\beta$ és estimable.
```
`````

```ad-teor
title: Teorema de **Gauss-Markov**

Si $l^T\beta$ és estimable, aleshores d'entre tots els estimadors lineals [[#^e8baeb|no esbiaixats]], $l^T\widehat{\beta}$ és **únic** i té la **mínima variància**.
```

`````ad-met
title: Paràmetres $\boldsymbol\beta$

$$ \widehat{\beta} = \boxed{\,(X^T\,X)^{-1}\,X^T\,y\,} \,,$$
assumint $\text{Rang}(X)=m$ .

```ad-prop
L'estimador $\widehat{\beta}$ és un estimador [[#^e8baeb|no esbiaixat]] de $\beta$.
```

+ $\text{Var}(\widehat{\beta}) = \sigma^{2}\,(X^TX)^{-1}$
`````

````ad-met
title: Variància $\boldsymbol{\sigma^{2}}$

L'estimador de $\sigma^{2}$ és
$$ \widehat{\sigma}^{2} = \boxed{\,\frac{\displaystyle\sum_{i=1}^{n} (y_{i}-\widehat{y}_{i})^{2}}{n}\,} \,,$$
on podem estimar $y$ per $\widehat{y}=X\,\widehat{\beta}$ .

```ad-prop
L'estimador de $\sigma^{2}$
$$ \widehat{\sigma}^{2} = \frac{\sum_{i=1}^n r_{i}^{2}}{n-m} $$
és un estimador [[#^e8baeb|no esbiaixat]] amb $m=\text{Rang}(X)$.
```
````


###### Mètodes de **bondat d'ajustament**

La ==bondat d'ajustament== d'un model es refereix a quant s'acosta aquest a la realitat.

```ad-prop
$$ \sum_{i=1}^{n} (y_{i}-\overline{y})^2 = \sum_{i=1}^n (\widehat{y_{i}}-\overline{y})^2 + \sum_{i=1}^n (y_{i}-\widehat{y_{i}})^2 \,,$$
on:
+ $\displaystyle\sum_{i=1}^{n} (y_{i}-\overline{y})^2$ és la variabilitat de $y$
+ $\displaystyle\sum_{i=1}^n (\widehat{y_{i}}-\overline{y})^2$ és la variablilitat de $y$ explicada pel model
+ $\displaystyle\sum_{i=1}^n (y_{i}-\widehat{y_{i}})^2$ és el residu de la variabilitat de $y$ no explicat pel model
```

```ad-def
title: Coeficient de determinació

El coeficient de determinació del model és
$$ R^{2} = \frac{\displaystyle\sum_{i=1}^n (\widehat{y_{i}}-\overline{y})^2}{\displaystyle\sum_{i=1}^{n} (y_{i}-\overline{y})^2} = 1-\frac{\displaystyle\sum_{i=1}^n (y_{i}-\widehat{y_{i}})^2}{\displaystyle\sum_{i=1}^n (y_{i}-\widehat{y_{i}})^2} \,.$$

---

El coeficient $R^{2}\in(0,1)$ serveix per mesurar la bondat d'ajustament; com més pròxim a $1$, millor és el model.
```

`````ad-def
title: Coeficient de correlació

Donades dues *v.a.*s $A, B$ amb mitjanes $\mu_{A}=\text{E}(A)$, $\mu_{B}=\text{E}(B)$ i variàncies $\sigma_{A}^2=\text{Var}(A)$, $\sigma_{B}^2=\text{Var}(B)$, i que compleixen $\sigma_{AB}=\text{E}((A-\mu_{A})(B-\mu_{B}))$.

Aleshores el ==coeficient de correlació==  entre $A$ i $B$ és
$$ \rho_{AB} = \frac{\sigma_{AB}}{\sigma_{A}\,\sigma_{B}} \,.$$

```ad-prop
title: Propietats

+ $\rho_{AB}\in(-1,1)$
+ $\rho_{AB}=0 \implies$ $A$ i $B$ no estan correlacionats linealment
	+ $A,B$ independents $\implies$ $A,B$ no correlacionats (el contrari no és sempre cert)
	+ $A,B$ amb distribució normal conjunta $\implies$ $A,B$ no correlacionats i independents
```

```ad-def
title: Coeficient de correlació **mostral**

Siguin $a_{1},\dots,a_{n}$ i $b_{1},\dots,b_{n}$ mostres de les *v.a.*s $A,B$ respectivament, amb mitjanes mostrals $\overline{a}, \overline{b}$ i variàncies mostrals $s_{a}^2, s_{b}^2$ .

Aleshores el ==coeficient de correlació mostral== és
$$ r_{AB} = \frac{\displaystyle\sum_{i=1}^n (a_{i}-\overline{a})^2(b_{i}-\overline{b}^2)}{s_{a}\,s_{b}} $$
```
`````


#### Model de regressió lineal **clàssic**

Considerem el mateix model que el [[#^bc941d | general]]
$$ y = X\beta+\varepsilon \,,$$
però assumint ara que
$$ \varepsilon \sim N_{n}(\vec{0},\sigma^{2}I) $$
on $\vec{0}=(0,\dots,0)^T$, i $\text{Cov}(\varepsilon_{i},\varepsilon_{j})=0$ quan $i\neq j$, és a dir, independents.

```ad-teor
Considerem una funció lineal dels paràmetres $l^T\beta$ .
1. $l^T\widehat{\beta}\sim N(l^T\beta,\,\sigma^{2}\,l^T(X^TX)^{-1}\,l)$
2. L'estimador $l^T\widehat{\beta}$ i la suma de quadrats residual $RSS=(y-X\widehat{\beta})^T(y-X\widehat{\beta})$ son estocàsticament independents
3. $\displaystyle\frac{RSS}{\sigma^{2}}\sim \chi_{m}^{2}$ on $m=\text{Rang}(X)$
```


#### **Test $\boldsymbol t$** generalitzat

Considerem la hipòtesis
$$ H_{0}:\, l^T\beta = 0 \,,$$ 
amb $\varphi^{T}y$ el millor estimador de $l^{T}\beta$ , és a dir $\varphi^{T}=l^{T}(X^{T}X)^{-1}X^{T}$.

Sigui
$$ T = \frac{\varphi^{T}y}{\widehat{\sigma}\sqrt{\varphi^{T}\varphi}} \sim t_{n-m} \,,$$
rebutjarem $H_{0}$ si
$$ \boxed{\,\lvert T \rvert  > t_{1-\frac{\alpha}{2},\,n-m}\,} \,.$$

```ad-prop
title: Interval de **confiança**


$$ IC_{\alpha}(l^{T}\beta) = \left( l^{T}\widehat{\beta} \,\pm\, t_{1-\frac{\alpha}{2},\,n-m}\, \widehat{\sigma} \,\sqrt{l^{T}\,(X^{T}X)^{-1}\,l} \right) $$
```


#### **Test** $\boldsymbol F$ generalitzat

Considerem la hipòtesis
$$ H_{0}:\, L\beta = 0 \,,$$ 
amb $\text{Rang}(L)=q$ i assumint que cada fila d'$L$ és una funció lineal estimable.

```ad-teor
Sigui
$$ U = (L\widehat{\beta}-L\beta)^{T}\,(\sigma^{2}L(X^{T}X)^{-1}\,L^{T})^{-1}\,(L\widehat{\beta}-L\beta): $$
+ $U$ té distribució $\chi_{q}^{2}$ .
+ Si $L\beta=0$, l'estadístic
	$$ F = \frac{(L\widehat{\beta})^{T}\,(L(X^{T}X)^{-1}\,L^{T})^{-1}\,(L\widehat{\beta})\,(n-m)}{q\cdot RSS} $$
	té distribució $F_{1,\,n-m}$ .
+ En general,
	$$ \text{E}\left( \frac{(L\widehat{\beta})^{T}B\,(L\widehat{\beta})}{q} \right) = \sigma^{2} + \frac{(L\beta)^{T}B\,(L\beta)}{q} $$
	amb $B=(L(X^{T}X)^{-1}\,L^{T})^{-1}$.
	
```


---
## Apèndix

```ad-def
title: Estimador *no esbiaixat*

Un estimador $\widehat{\alpha}$ d'una variable $\alpha$ ==no és esbiaixat== si $$ \text{E}(\widehat{\alpha})=\alpha \,.$$
```
^e8baeb

```ad-prop
title: Propietats de **vectors aleatoris**

Considerem:
+ $y=(y_{1},\dots,y_{n})\in \mathbb{R}^n$ vector aleatori
+ $b$  vector de constants
+ $A$  matriu de constants

Aleshores:

|  Vector  |                                                               Esperança                                                               |                                                                                                                                                    Variància                                                                                                                                                    |
|:--------:|:-------------------------------------------------------------------------------------------------------------------------------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
|   $y$    |                                 $\begin{pmatrix}\text{E}(y_1) \\\vdots \\\text{E}(y_n)\end{pmatrix}$                                  | $\begin{pmatrix}\text{Var}(y_{1}) & \text{Cov}(y_{1},y_{2}) & \dots & \text{Cov}(y_{1},y_{n}) \\\text{Cov}(y_{2},y_{1}) & \text{Var}(y_{2}) & \dots & \text{Cov}(y_{2},y_{n}) \\\vdots & \vdots & \ddots & \vdots \\\text{Cov}(y_{n},y_{1}) & \text{Cov}(y_{n},y_{1}) & \dots & \text{Var}(y_{n})\end{pmatrix}$ |
| $A\,y+b$ | $A \cdot \begin{pmatrix}\text{E}(y_{1}) \\\vdots \\\text{E}(y_{n})\end{pmatrix} + \begin{pmatrix}b_{1} \\\vdots \\b_{n}\end{pmatrix}$ |                                                                                                                                         $A\cdot \text{Var}(y)\cdot A^T$                                                                                                                                         |

on $\,\text{Cov}(y_{i},y_{j}) = \text{E}(y_{i}\,y_{j})-\text{E}(y_{i})\,\text{E}(y_{j})$ .

Si $B$ és una altra matriu de constants:
$$ \text{Cov}(Ay,By) = A \cdot \text{Var}(y) \cdot B^T $$
```

````ad-prop
title: Distribució **normal multivariada**

Considerem $Y\sim N_{n}(\mu,\sigma)$ .

```ad-prop
title: Funció de **densitat**

$$ f_{Y}(y) = \boxed{\,\frac{1}{(2\pi)^{\frac{n}{2}}\,|\sigma|^{\frac{1}{2}}} \,\exp\left( -\frac{1}{2} (y-\mu)^T\,\sigma^{-1}(y-\mu) \right)\,} $$
quan $\text{Rang}(\sigma)=n$ .
```

```ad-prop
title: Propietats

+ Per $C\in M_{k\times n}[\mathbb{R}]$ constant, $CY\sim N_{n}(C\mu,\,C^{T}\sigma C)$
+ Sigui $Z\sim N_{n}(\vec{0},I)$ , aleshores $Y=\mu_{Y}+AZ$ amb $A^TA=\sigma_{Y}$
+ $(y-\mu)^T\,\sigma^{-1}(y-\mu) \sim \chi_{n}^{2}$
+ $Y_{1},Y_{2}$ independents $\iff \text{Cov}(Y_{1},Y_{2})=0$
```
`````