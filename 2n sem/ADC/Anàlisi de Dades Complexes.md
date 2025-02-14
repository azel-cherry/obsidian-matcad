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


#### Model estadístic general

Considerem el següent model de regressió lineal:
$$ y = X\beta + \varepsilon \,,$$
on:
+ $\boldsymbol y$ : vector de la ==variable dependent== de mida $n$
	+ $\boldsymbol n$ : mida de la mostra
+ $\boldsymbol X$ : ==matriu de disseny== de dimensió $n\times (p+1)$
	+ $\boldsymbol p$ : número de ==regressors==, covarietats o variables independents
+ $\boldsymbol \beta$ : vector dels paràmetres que s'han d'estimar a partir de les dades, de mida $p+1$
+ $\boldsymbol\varepsilon$ : vector d'==errors aleatoris== de mida $n$
	+ S'assumeix que cada $\varepsilon_{i}$ son *v.a.*s amb $\text{E}(\varepsilon_{i})=0$ i $\text{Var}(\varepsilon_{i})=\sigma^{2}$. En altres paraules: $$ \text{Cov}(\varepsilon_{i},\varepsilon_{j}) = \begin{pmatrix} \sigma^{2} & 0 & \dots & 0 \\ 0 & \sigma^{2} & \dots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & \sigma^{2} \end{pmatrix} $$
