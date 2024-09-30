
## Introducció

```ad-def
title: Població

Una ==població== és una *v.a.* $X$.
```

```ad-def
title: Mostra aleatòria

Una ==mostra aleatòria== de mida $n$ de $X$ és un conjunt de $n$ *v.a.*s $X_1,X_2,...,X_n$ tals que:
+ $X_1,...,X_n$ són *v.a.*s independents.
+ Per a tot $A\subset \mathbb{R}$ es compleix que $P(X_{i}\in A) = P(X \in A)$ per a tot $i=1,...,n$.

Distingim entre les variables aleatòries que defineixen la mostra $X_1,...,X_n$ i les realitzacions d'aquestes variables $x_1,...,x_n$ (que son nombres reals).
```

```ad-ex
title: Paràmetres

Per $X$ quantitativa o numèrica:
+ ==Mitjana poblacional==: $\boldsymbol{\mu} = \text{E}(X)$
+ ==Variància poblacional==: $\boldsymbol{\sigma^2} = \text{Var}(X)$
+ ==Desviació típica poblacional==: $\boldsymbol{\sigma} = \sqrt{\text{Var}(X)}$

Per $X$ qualitativa dicotòmica o binària:
+ ==Proporció poblacional==: $\boldsymbol{p}$
```

Una mostra d'una població finita sense reemplaçament NO forma una mostra aleatòria perquè les variables de la mostra no són independents. En canvi sí que ho és si hi ha reposició.

Habitualment es treballa amb mostres amb $n$ molt petita en comparació a la mida de la població. En aquests casos, tot i que el mostreig es faci sense reposició, es treballarà com si les variables fossin independents.

---
## Estadístics més usuals

```ad-def
title: Estadístic

Donada una mostra aleatòria $X_1,...,X_n$ de $X$, un ==estadístic== és una funció d'aquestes variables i possibles constants.
```

```ad-ex
title: Exemples

==**Mitjana** mostral==: $$\boldsymbol{\overline{X}} = \frac{1}{n}\sum\limits_{i=1}^{n} X_i$$

==**Variància** mostral (corregida)==: $$\boldsymbol{S^2} = \frac{1}{n-1} \sum\limits_{i=1}^n (X_i-\overline{X})^2$$

==**Variància** mostral (sense corregir)==: $$\boldsymbol{S'^2} = \frac{1}{n}\sum\limits_{i=1}^n(X_i-\overline{X})^2$$

En rar cas de conèixer la mitjana poblacional $\mu$ de $X$, tenim la ==**quasivariància** mostral==:
$$\boldsymbol{\widetilde{S}^2} = \frac{1}{n}\sum\limits_{i=1}^n (X_i-\mu)^2$$
```

```ad-def
title: Estimador

Un ==estimador== és un **estadístic** que es fa servir per a **estimar** un determinat paràmetre.

Si un estadístic s'usa per a estimar el paràmetre $X$, es denotarà $\widehat{X}$, i una estimació concreta serà $\widehat{x}$.
```

#### Distribucions mostrals d'estadístics usuals

```ad-def
title: Distribució mostral d'un estadístic

Donat un estadístic funció de la mostra $X_1,...,X_n$ variable aleatòria, la seva **distribució** o **llei** s'anomena ==distribució mostral de l'estadístic==.
```

````ad-prop
title: Propietats de la mitjana mostral ($\boldsymbol{\overline{X}}$)

Tenim les següents propietats:
$$ \mu_{\overline{X}} = \text{E}(\overline{X}) = \mu $$
$$ \sigma^{2_{\overline{X}}} = \text{Var}(\overline{X}) = \frac{\sigma^2}{n} $$
I, per tant:
$$ \sigma_{\overline{X}} = \frac{\sigma}{\sqrt(n)} $$

```ad-prop
title: Casos particulars

+ Població **dicotòmica ($\boldsymbol{X \sim B(p)}$)**: $\sigma_{n\,\overline{X}} = \sqrt{n\,p\,(1-p)}$.

+ Població **normal ($\boldsymbol{X\sim N(\mu,\sigma^2)}$)**: $\displaystyle\overline{X}\sim N\left(\mu,\frac{\sigma^2}{n}\right)$,
	o equivalentment $\displaystyle\frac{\overline{X}-\mu}{\frac{\sigma}{\sqrt{n}}} \sim N(0,1)$
```
````

````ad-prop
title: Propietats de les variàncies mostrals ($\boldsymbol{S^2}$, $\boldsymbol{S'^2}$, $\boldsymbol{\widetilde{S}^2}$)

```ad-prop
title: Esperança
$$\begin{align*}
\text{E}(S^2) &= \sigma^2 \\
\text{E}(S'^2) &= \frac{n-1}{n}\sigma^2 \\
\text{E}(\widetilde{S}^2) &= \sigma^2
\end{align*} $$
```

```ad-prop
title: Població normal

Si $X\sim N(\mu,\sigma^2)$, aleshores
$$\frac{n\widetilde{S}^2}{\sigma^2} = \frac{1}{\sigma^2}\sum\limits_{i=1}^n(X_i-\mu)^2 \sim \chi_n^2$$
on $\chi_n^2$ denota la **distribució khi-quadrat** de grau $n$.
```

```ad-teor
title: Teorema de Fisher

Sigui $X_1,...,X_n$ una mostra aleatòria d'una variable aleatòria $X\sim N(\mu,sigma^2)$, aleshores:
+ $\overline{X}$ i $S^2$ son independents
+ $\displaystyle\frac{(n-1)S^2}{\sigma^2} = \frac{1}{\sigma^2} \sum\limits_{i=1}^n(X_i-\overline{X})^2 \sim \chi^2_{n-1}$
```

```ad-prop
Sigui $X \sim N(\mu,\sigma^2)$, aleshores:
$$
\frac{\overline{X}-\mu}{\frac{\sqrt{S}}{\sqrt{n}}} \sim t_{n-1}
$$
on $t_{n-1}$ denota la **distribució $\boldsymbol t$ de Student** amb paràmetre $n-1$.
```

````

`````ad-not
title: Distribució $\boldsymbol\chi^2$

````ad-def
Sigui $Z_1,...,Z_\nu$ variables aleatòries independents i idènticament distribuïdes amb llei $N(0,1)$.

S'anomena ==khi-quadrat amb $\nu$ graus de llibertat== ($\chi_\nu^2$) a la llei de la variable aleatòria
$$Y= \sum\limits_{i=1}^\nu Z^2_i. $$
````

````ad-prop
title: Propietats
+ **Funció de densitat**:
$$
f_{Y}(X) = \begin{cases}
0 & \text{si } x\leq 0 \\
\displaystyle\frac{1}{2^{\frac{\nu}{ 2}}\,\Gamma\left(\frac{\nu}{2}\right)} x^{\frac{\nu}{2}-1} e^{-\frac{x}{2}} & \text{si } x>0 \\
\end{cases}
$$
on $\Gamma$ és la funció gamma d'Euler.

```ad-not
title: Funció gamma d'Euler

La ==funció gamma d'Euler== és
$$
\Gamma(\alpha) = \int_{0}^{\infty} t^{\alpha-1} e^{-t} dt, 
$$
que compleix el següent:
$$ \begin{align}
\Gamma(\alpha+1) &= \alpha\Gamma(\alpha) \\
\Gamma(n+1) &= n! \\
\Gamma(1)  &= 1 \\
\Gamma\left(1/2\right) &= \sqrt{\pi }
\end{align}
$$
```

+ **Funció de distribució**: Mitjançant taules.

+ **Funció generatriu de moments**: 
$$\varphi_{Y}(t) = (1-2t)^{-\frac{\nu}{2}}$$

+ **Mitjana**: $\,\displaystyle\text{E}(Y)=\nu,$

+ **Variància**: $\,\displaystyle\text{Var}(Y) = 2\nu.$
````

````ad-prop
Amb $\nu>40$, $Y\sim\chi^2$ es pot aproximar fent servir una distribució normal:


$$ \sqrt{ 2\chi^2_{\nu}} \approx N(\sqrt{ 2\nu-1 },1)$$
````

````ad-prop
Siguin $Y_{1} \sim \chi^2_{\nu_{1}},\dots, Y_{n} \sim \chi^2_{\nu_{n}}$ independents, i sigui $Y=Y_{1}+\dots+Y_{n}$, aleshores
$$ Y = \chi^2_{\nu_{1}+\dots+\nu_{n}}. $$
````
`````

````ad-not
title: Distribució $\boldsymbol t$ de Student

```ad-def
Siguin $Z\sim N(0,1)\,$ i $\,Y\sim\chi^2_{\nu}$ v.a.s independents, aleshores la llei de la v.a.
$$
T = \frac{Z}{\sqrt{\frac{Y}{\nu}}}
$$
s'anomena ==$t$ de Student amb $\nu$ graus de llibertat== i s'escriu $T\sim t_{\nu}$.
```

```ad-prop
title: Propietats

+ **Funció de densitat:**
$$
f_{T}(X) = \frac{\Gamma\left(\frac{\nu+1}{2}\right)}{\sqrt{\pi\nu}\,\,\Gamma\left(\frac{\nu}{2}\right)} \left(1+\frac{x^2}{\nu}\right)^{-\frac{\nu+1}{2}}
$$

+ $t_{\nu} \rightarrow N(0,1)\,$ quan $\,\nu\rightarrow\infty$

+ **Funció de distribució:** Mitjançant taules.

+ **Moments:** $\text{E}(T^k)$ només existeix si $k<\nu$.
+ **Esperança:** $\text{E}(T)$ = 0 si $\nu>1$.
+ **Variància:** $\text{Var}(T) = \frac{\nu}{\nu-2}$ si $\nu>2$.
```
````

En resum, per una mostra de mida $n$ amb $X\sim N(\mu,\sigma^2)$:

```mehrmaid
graph LR;
	A1("Volem estimar $\mu\,$")
	A("Coneixem $\sigma$?")
	B("$\displaystyle\frac{\overline{X}-\mu}{\frac{\sigma}{\sqrt{n}}} \sim N(0,1)$")
	C("$\displaystyle\frac{\overline{X}-\mu}{\frac{S}{\sqrt{n}}} \sim t_{n-1}$")

	A1 --> A
	A -- sí --> B
	A -- no --> C
```

```mehrmaid
graph LR;
	A1("Volem estimar $\sigma\,$")
	A("Coneixem $\mu$?")
	B("$\displaystyle\frac{nS^2}{\sigma^2} = \frac{1}{\sigma^2}\sum_{i=1}^n(X_i - \mu)^2 \sim \chi^2_n$")
	C("Teorema de Fisher:
	$\displaystyle\frac{(n-1)S^2}{\sigma^2} = \frac{1}{\sigma^2}\sum_{i=1}^n(X_i -\overline{X})^2 \sim \chi^2_{n-1}$")

	A1 --> A
	A -- sí --> B
	A -- no --> C
```

---
##  Distribucions mostrals asimptòtiques

#### Mitjana mostral

Tenim una mostra de mida $n$ de $X$ amb distribució qualsevol, amb $\text{E}(X)=\mu$ i $\text{Var}(X)=\sigma^{2}$.

```mehrmaid
graph LR;
	A("$n$ qualsevol")
	B("$\mu_{\overline{X}_n} = \mu$")
	C("$\displaystyle\sigma_{\overline{X}_n} = \frac{\sigma}{\sqrt{n}}$")

	A --> B
	A --> C
```

```mehrmaid
graph LR;
	A("$n\geq30$")
	B("$\mu_{\overline{X}_n} = \mu$")
	C("$\displaystyle\sigma_{\overline{X}_n} = \frac{\sigma}{\sqrt{n}}$")

	A --> B
	A --> C
```

![[IMG_0350.jpeg]]

#### Proporció mostral

![[IMG_0351.jpeg]]

![[IMG_0352.jpeg]]