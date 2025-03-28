### Model **general**

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
\beta_{1} \\
\vdots \\
\beta_{m}
\end{pmatrix} + \begin{pmatrix}
\varepsilon_{1} \\
\vdots \\
\varepsilon_{n}
\end{pmatrix} $$
+ $\boldsymbol y:$ Vector de resposta
+ $\boldsymbol X:$ Matriu de disseny
+ $\boldsymbol \varepsilon:$ Errors aleatoris ([[#^iidid|i.i.d.]])
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


### Model **clàssic**

Assumim $\boxed{\,\varepsilon \sim N(0,\sigma^{2}I)\,}$ .

```ad-prop
title: Estimadors

+ $\textcolor{limegreen}{\widehat{\beta}}\sim N(\beta,\sigma^{2}(X^TX)^{-1})$
+ $\displaystyle\frac{(n-m)\,\widehat{\sigma}^{2}}{\sigma^{2}}\sim \chi_{n-m}^{2}$
```


### Bondat d'ajustament

```ad-def
title: Coeficient de determinació

$$ \textcolor{limegreen}{R^{2}} = \frac{ESS}{TSS} = 1-\frac{RSS}{TSS} \in(0,1) $$

Com més pròxim a $1$, millor és el model.
```


### Tests d'hipòtesis

````ad-prop
title: **Test t generalitzat** (1 coeficient)

+ Hipòtesis nul·la $H_{0}: l^T\beta = 0$ .
+ Estadístic de contrast $\,T = \displaystyle\frac{\varphi^{T}y}{\widehat{\sigma}\sqrt{\varphi^{T}\varphi}} \sim t_{n-m}$
	amb $\,\varphi^{T}=l^{T}(X^{T}X)^{-1}X^{T}$.

Rebutjarem $H_{0}$ si $\boxed{\,|T| > t_{1-\frac{\alpha}{2},\,n-m}\,}$ .

```ad-prop
title: Interval de confiança
$$ IC_{\alpha}(l^{T}\beta) = \left( l^{T}\widehat{\beta} \,\pm\, t_{1-\frac{\alpha}{2},\,n-m}\, \widehat{\sigma} \,\sqrt{l^{T}\,(X^{T}X)^{-1}\,l} \right) $$
```
````

```ad-prop
title: **Test F generalitzat** (múltiples coeficients)

+ Hipòtesis nul·la $H_{0}: L\beta = 0\,$
+ Estadístic de contrast:
$$\,F = \frac{(L\widehat{\beta})^{T}\,(L(X^{T}X)^{-1}\,L^{T})^{-1}\,(L\widehat{\beta})\,(n-m)}{q\cdot RSS} \sim F_{q,\,n-m}$$
	amb $q$ nombre de files de $L$ .

Rebutjarem $H_{0}$ si $\boxed{\,F > F_{1-\alpha,\,q,\,n-m}\,}$ .
```


### **R**

`````ad-prop
title: Comanda `lm`

```r title:"Output"
Coefficients:  Estimate   Std. Error   t value   PR(>|t|)
(Intercept)    [...]      [...]        [...]     [...]
x1             [...]      [...]        [...]     [...]
[...]          [...]      [...]        [...]     [...]
---
Residual standard error: [...] on [...] degrees of freedom
Multiple R-squared: [...], Adjusted R-squared: [...]
F-statistic: [...] on [...] and [...] DF, p-value: [...]
```

+ `Estimate` $=$ `Std. Error` $\cdot$ `t value`
+ `PR(>|t|)` és el ~={green-low}*p-value* (bilateral)=~: Probabilitat amb distribució t de Student d'observar un valor més alt que `p-value`
	+ `PR(>|t|)` $=2\,\,\cdot$ `pt(t-value)`
+ `Residual standard error` és la desviació típica de $\varepsilon$
+ IC amb confiança `1-a`:
	$[$`Estimate`$\pm$`qt(1-a/2)`$\cdot$`Std. Error`$]$
+ Variable significativa quan `PR(<|t|)`$<\alpha$
`````

## Apèndix

+ ==**i.i.d.**== - *independent and identically distributed*
^iidid

````ad-def
title: Sum of Squares

+ *==Total Sum of Squares==*: variabilitat de $y$
	$$\boldsymbol{TSS} = \sum_{i=1}^n (y_{i}-\overline{y})^2$$

+ *==Explained Sum of Squares==* (variabilitat de $y$ explicada pel model)
	$$\boldsymbol{ESS} = \sum_{i=1}^n (\widehat{y_{i}}-\overline{y})^2$$

+ *==Residual Sum of Squares==* (variabilitat de $y$ **no** explicada pel model):
	$$\boldsymbol{RSS} = \sum_{i=1}^{n} (y_{i}-\widehat{y}_{i})^{2}$$

```ad-not
title: Estimador de $\boldsymbol y$
$$\widehat{y}=X\widehat{\beta}$$
```
````
