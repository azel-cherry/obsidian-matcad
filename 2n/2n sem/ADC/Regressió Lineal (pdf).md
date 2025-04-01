### 1. Models de **regressió lineal**

##### 1.1. Model **general** (mínims quadrats)

$$ y = X\beta + \varepsilon $$

$$ \begin{pmatrix}
y_{1} \\
\vdots \\
y_{n}
\end{pmatrix} = \begin{pmatrix}
x_{11} & \dots & x_{1m} \\
\vdots & \ddots & \vdots \\
x_{n1} & \dots & x_{nm}
\end{pmatrix} \begin{pmatrix}
\alpha \\
\beta_{1} \\
\vdots \\
\beta_{p}
\end{pmatrix} + \begin{pmatrix}
\varepsilon_{1} \\
\vdots \\
\varepsilon_{n}
\end{pmatrix} $$
+ $\boldsymbol y:$ Vector de resposta
+ $\boldsymbol X:$ Matriu de disseny
	+ $x_{ij}\in \{0,1\}$
	+ $x_{i1}=1$ (*intercept*)
+ $\boldsymbol \varepsilon:$ Errors aleatoris (*i.i.d.*)
	+ $\mathbb{E}(\varepsilon)=0$
	+ $\mathbb{V}(\varepsilon)=\sigma^{2}I_{n}$

```ad-prop
title: Incògnites $\boldsymbol\beta$

Si $\text{Rang}(X)=m$:
$$ \textcolor{limegreen}{\widehat{\beta}} = \boxed{\,(X^T\,X)^{-1}\,X^T\,y\,}$$
+ $\mathbb{E}(\widehat{\beta}) = \beta$
+ $\mathbb{V}(\widehat{\beta}) = \sigma^{2}\,(X^TX)^{-1}$
```

```ad-prop
title: Variància de l'error $\boldsymbol{\sigma^{2}}$

$$ \textcolor{limegreen}{\widehat{\sigma}^{2}} = \boxed{\,\frac{RSS}{n-m}\,} $$
```


##### 1.2. Model **clàssic**
^2b1dd4

Tenim $\boxed{\,\varepsilon \sim N(0,\sigma^{2}I)\,}$ .

```ad-prop
title: Incògnites $\boldsymbol\beta$

Si $\text{Rang}(X)=m$ :
$$ l^{T}\textcolor{limegreen}{\widehat{\beta}} \sim  \boxed{\,N(l^T\beta,\,\sigma^{2}\,l^T(X^TX)^{-1}\,l)\,} $$
```

```ad-prop
title: Variància de l'error $\boldsymbol{\sigma^{2}}$

Si $\text{Rang}(X)=m$ :
$$\boxed{\,\frac{RSS}{\textcolor{limegreen}{\sigma^{2}}}\sim \chi_{m}^{2}\,}$$
```

````ad-def
title: Residus estandaritzats

$$ \textcolor{limegreen}{rst_{i}} = \frac{r_{i}}{\widehat{\sigma}\,\sqrt{1-p_{ii}}} \sim N(0,1) $$
+ $r_{i}$ element del residu $r=Y-\widehat{Y}=(1-P)Y$
+ $p_{ii}$ element de $P=X\,(X^TX)^{-1}X^{T}$

```ad-not
title: *Outliers*

$|rst_{i}|>2 \implies$ potencial *outlier*
```
````


##### 1.3. Model amb **errors dependents**

Tenim $\boxed{\,\varepsilon_{i}=\rho\,\varepsilon_{i}+e_{i}\,}$ amb $\rho$ conegut tal que:
+ $\text{E}(e_{i})=0$
+ $\text{Var}(e_{i})=\sigma^{2}$

```ad-met
Construir el nou model (clàssic):
$$ \boxed{\,y_{i}^* = \beta_{0}(1-\rho)+\beta_{1}x_{i}^*+e_{i}\,} $$
amb $\begin{cases} \,y_{i}^* = y_{i}-\rho\,y_{i-1} \\ \,x_{i}^* = x_{i}-\rho\,x_{i-1} \end{cases}$
```


##### 1.4. Model dels **mínims quadrats generalitzat**

Tenim $\boxed{\,\text{Var}(\varepsilon)=\sigma^{2}\Sigma=\sigma^{2}P^{2}\,}$ amb $\Sigma$ conegut.

````ad-met
Construir el nou model (clàssic):
$$ \boxed{\,\begin{gather}
P^{-1}Y = P^{-1}X\beta+P^{-1}\varepsilon \\
y^* = X^*\beta+\varepsilon^*
\end{gather}\,} $$
+ $\,\textcolor{limegreen}{\widehat{\beta}} = \boxed{\,(X^T\,\Sigma^{-1}X)^{-1}X^{T}\,\Sigma^{-1}y\,}$
````


### 2. Bondat d'**ajustament**

````ad-def
title: Coeficient de **determinació**

$$ \textcolor{limegreen}{R^{2}} = \frac{ESS}{TSS} = 1-\frac{RSS}{TSS} \in(0,1) $$
````

````ad-def
title: Coeficient de **correlació**

> *V.A.*s $A,B$ amb mitjanes $\mu_{A},\mu_{B}$ i variàncies $\sigma^{2}_{A},\sigma^{2}_{B}$

$$\textcolor{limegreen}{\rho_{AB}} = \boxed{\,\displaystyle\frac{\mathbb{E}((A-\mu_{A})(B-\mu_{B}))}{\sigma_{A}\,\,\sigma_{B}}\,}\in(-1,1)$$

---

~={dark-green}**Coeficient de correlació** mostral=~

> Observacions $a_{1},\dots,a_{n}$ i $b_{1},\dots,b_{n}$ amb mitjanes mostrals $\overline{a},\overline{b}$ , i variàncies mostrals $s^{2}_{a},s^{2}_{b}$

$$\textcolor{limegreen}{r_{AB}} = \boxed{\,\displaystyle\frac{\sum_{i=1}^{n}(a_{i}-\overline{a})(b_{i}-\overline{b})}{s_{a}\,s_{b}}\,}\in(-1,1)$$
````


### 3. **Tests** d'hipòtesis

````ad-prop
title: **Test t generalitzat** (1 coeficient)

+ Hipòtesis nul·la $\boldsymbol{H_{0}}: l^T\beta = 0$
+ Estadístic de contrast $\,\boxed{\,\boldsymbol T = \displaystyle\frac{\varphi^{T}y}{\widehat{\sigma}\sqrt{\varphi^{T}\varphi}} \sim t_{n-m}\,}$ amb $\,\boldsymbol{\varphi^{T}}=l^{T}(X^{T}X)^{-1}X^{T}$
+ Rebutjem $H_{0}$ si ==$\,|T| > t_{1-\frac{\alpha}{2},\,n-m}\,$==

```ad-prop
title: Interval de confiança
$$ \textcolor{limegreen}{IC_{\alpha}(l^{T}\beta)} = \left( l^{T}\widehat{\beta} \,\pm\, t_{1-\frac{\alpha}{2},\,n-m}\, \widehat{\sigma} \,\sqrt{l^{T}\,(X^{T}X)^{-1}\,l} \right) $$
```
````

```ad-prop
title: **Test F generalitzat** (múltiples coeficients)

+ Hipòtesis nul·la $H_{0}: L\beta = 0\,$
+ Estadístic de contrast
$$\,F = \boxed{\,\frac{(L\widehat{\beta})^{T}\,(L(X^{T}X)^{-1}\,L^{T})^{-1}\,(L\widehat{\beta})\,(n-m)}{q\cdot RSS}\,} \sim F_{q,\,n-m}$$
	amb $q$ nombre de files de $L$
+ Rebutjem $H_{0}$ si ==$\,F > F_{1-\alpha,\,q,\,n-m}\,$==
```


### 4. Observacions **influents**

````ad-prop
title: **Mesura** de la influència

Influència de l'element $i$-èssim en el model:
$$ \textcolor{limegreen}{D_{i}} = \boxed{\,\frac{(\widehat{\beta}-\widehat{\beta}_{\overline{i}})^{T} X^{T}X\,(\widehat{\beta}-\widehat{\beta}_{\overline{i}})}{(p+1)\,\widehat{\sigma}^{2}}\,} $$
+ $\widehat{\beta}_{\overline{i}}:$ estimador de $\beta$ sense la $i$-èssima observació

```ad-not
title: Interpretació de $D$

Observació influent si:
+ $D_{i}>1$
+ $D_{i} > \frac{4}{n}$
```
````

```ad-prop
title: ***Leverage***

*Leverage* de la observació $i$-èssima del model:
$$\text{element } p_{ii} \text{ de } P=X\,(X^{T}X)^{-1}X^{T}$$

+ $p_{ii} > \frac{2m}{n} \implies$ possible influència excessiva
```


### 5. **Estabilització** de la variància

Tenim *V.A.* $X$ amb:
+ $\text{E}(X)=\mu$
+ $\text{Var}(X)=k\,h(\mu)$

```ad-met
title: **Transformacions** estabilitzants de variància
Construir una nova *V.A.*:
	$$\boxed{\,Y=g(X)\,}$$
+ $\text{Var}(Y)\sim k\,h(\mu)\,g'(\mu)^{2}$ ~={faded}(constant)=~
+ $g(\mu) = \displaystyle\int\frac{C}{\sqrt{h(\mu)}}\,d\mu$

| Distribució             |       Variància        |                                                                           Transformació                                                                           | 
| ----------------------- |:----------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Poisson                 |     $\propto \mu$      |                                                                     $g(X)=\sqrt{X}$ ~={green}(*)=~                                                                      |
| Binomial                | $\propto \mu\,(1-\mu)$ |                                                                        $g(X)=\arcsin(\sqrt{X})$                                                                        |
| Exponencial             |   $\propto \mu^{2}$    |                                                                             $g(X)=\ln(X)$                                                                              |
| desconeguda<br>(*Box-Cox*) |      desconeguda       | $g_{\lambda}(x_{i})=\begin{cases}\,\displaystyle\frac{x_{i}^{\lambda}-1}{\lambda} &\text{si }\lambda\neq0\\[0.3em] \,\log(x_{i}) &\text{si }\lambda=0\end{cases}$ |

~={green}(*)=~ Per $n$ petita, podem fer servir $g(X)=\sqrt{X+\frac{3}{8}}$ .
```


### Apèndix

+ Estimador $\widehat{\alpha}$ ~={green}no esbiaixat=~ si ==$\,\text{E}(\widehat{\alpha})=\alpha\,$==
+ ~={green}Covariància=~ $\text{Cov}(a,b)=\boxed{\,\text{E}(ab)-\text{E}(a)\,\text{E}(b)\,}$
+ $\widehat{y}=X\widehat{\beta}$
+ $TSS = ESS + RSS$

```ad-def
title: Sum of Squares

+ *==Total Sum of Squares==* (variabilitat de $y$)
	$$\boldsymbol{TSS} = \sum_{i=1}^n (y_{i}-\overline{y})^2$$

+ *==Explained Sum of Squares==* (variabilitat de $y$ explicada pel model)
	$$\boldsymbol{ESS} = \sum_{i=1}^n (\widehat{y_{i}}-\overline{y})^2$$

+ *==Residual Sum of Squares==* (variabilitat de $y$ **no** explicada pel model):
	$$\boldsymbol{RSS} = \sum_{i=1}^{n} (y_{i}-\widehat{y}_{i})^{2}$$
```

```ad-prop
title: Propietats de **vectors aleatoris**

> $\boldsymbol{y=(y_{1},\dots,y_{n})}$ vector aleatori
> $\boldsymbol b$  vector de constants
> $\boldsymbol A,\boldsymbol B$  matrius de constants

|  Vector |  Esperança ($\mathbb{E}$)  | Variància ($\mathbb{V}$) |
|:--:|:--:|:--:|
| $y$ | $\begin{pmatrix}\text{E}(y_1) \\\vdots \\\text{E}(y_n)\end{pmatrix}$ | $\begin{pmatrix}\text{Var}(y_{1}) & \text{Cov}(y_{1},y_{2}) & \dots & \text{Cov}(y_{1},y_{n}) \\\text{Cov}(y_{2},y_{1}) & \text{Var}(y_{2}) & \dots & \text{Cov}(y_{2},y_{n}) \\\vdots & \vdots & \ddots & \vdots \\\text{Cov}(y_{n},y_{1}) & \text{Cov}(y_{n},y_{2}) & \dots & \text{Var}(y_{n})\end{pmatrix}$ |
| $A\,y+b$ | $A \cdot \mathbb{E}(y) + b$ | $A\cdot \mathbb{V}(y)\cdot A^T$ |

+ $\text{Cov}(Ay,By)=A\cdot \mathbb{V}(y)\cdot B^{T}$
```