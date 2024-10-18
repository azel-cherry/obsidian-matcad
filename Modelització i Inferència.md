## Introducció

```ad-def
title: *Població*

Una ==població== és una *v.a.* $X$.
```

```ad-def
title: *Mostra aleatòria*

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

```ad-not
title: Recordatori: *Equivalència normal*

Sigui $X$ una variable aleatòria, són equivalents
$$X\sim N(\mu,\sigma^{2}) \,\,\,\,\text{i}\,\,\,\, \frac{X-\mu}{\sigma}\sim N(0,1)\,.$$
```

---
## Estadístics

> Donada una mostra aleatòria $X_1,...,X_n$ de $X$, un ==estadístic== és una funció d'aquestes variables i possibles constants.

```ad-ex
title: Estadístics importants

+ ==**Mitjana** mostral==: $$\boldsymbol{\overline{X}} = \frac{1}{n}\sum\limits_{i=1}^{n} X_i$$

+ ==**Variància** mostral (corregida)==: $$\boldsymbol{S^2} = \frac{1}{n-1} \sum\limits_{i=1}^n (X_i-\overline{X})^2$$

+ ==**Variància** mostral (sense corregir)==: $$\boldsymbol{S'^2} = \frac{1}{n}\sum\limits_{i=1}^n(X_i-\overline{X})^2$$

+ ==**Quasivariància** mostral==. Es fa servir en rar cas de conèixer la mitjana poblacional $\mu$ de $X$:
$$\boldsymbol{\widetilde{S}^2} = \frac{1}{n}\sum\limits_{i=1}^n (X_i-\mu)^2$$
```

```ad-def
title: *Estimador*

Un ==estimador== és un **estadístic** que es fa servir per a **estimar** un determinat paràmetre.

Si un estadístic s'usa per a estimar el paràmetre $X$, es denotarà $\widehat{X}$, i una estimació concreta serà $\widehat{x}$.
```

---
#### Distribucions mostrals d'estadístics usuals

> Donat un estadístic funció de la mostra $X_1,...,X_n$ variable aleatòria, la seva **distribució** o **llei** s'anomena ==distribució mostral de l'estadístic==.

````ad-prop
title: Propietats de la mitjana mostral ($\boldsymbol{\overline{X}}$)

Tenim les següents propietats:
+ $\mu_{\overline{X}} = \text{E}(\overline{X}) = \mu$
+ $\displaystyle \sigma^{2}_{\overline{X}} = \text{Var}(\overline{X}) = \frac{\sigma^2}{n}$

```ad-prop
title: Casos particulars

+ Població **dicotòmica ($\boldsymbol{X \sim B(p)}$)**: $\sigma_{n\,\overline{X}} = \sqrt{n\,p\,(1-p)}$

+ Població **normal ($\boldsymbol{X\sim N(\mu,\sigma^2)}$)**: $\displaystyle\overline{X}\sim N\left(\mu,\frac{\sigma^2}{n}\right)$
```
````

````ad-prop
title: Propietats de les variàncies mostrals ($\boldsymbol{S^2}$, $\boldsymbol{S'^2}$, $\boldsymbol{\widetilde{S}^2}$)

**Esperançes**:
+ $\text{E}(S^2) = \sigma^2$
+ $\text{E}(S'^2) = \frac{n-1}{n}\sigma^2$
+ $\text{E}(\widetilde{S}^2) = \sigma^2$

Cas particular - **població normal**:

```ad-prop

Si $X\sim N(\mu,\sigma^2)$, aleshores
$$\frac{n\widetilde{S}^2}{\sigma^2} = \frac{1}{\sigma^2}\sum\limits_{i=1}^n(X_i-\mu)^2 \sim \chi_n^2$$
on $\chi_n^2$ denota la **distribució khi-quadrat** de grau $n$.
```

```ad-teor
title: Teorema de Fisher

Sigui $X_1,...,X_n$ una mostra aleatòria d'una variable aleatòria $X\sim N(\mu,\sigma^2)$, aleshores:
+ $\overline{X}$ i $S^2$ son independents
+ $\displaystyle\frac{(n-1)S^2}{\sigma^2} = \frac{1}{\sigma^2} \sum\limits_{i=1}^n(X_i-\overline{X})^2 \sim \chi^2_{n-1}$
```

```ad-prop
Sigui $X \sim N(\mu,\sigma^2)$, aleshores:
$$
\frac{\overline{X}-\mu}{\frac{\sqrt{S^{2}}}{\sqrt{n}}} \sim t_{n-1}
$$
on $t_{n-1}$ denota la **distribució $\boldsymbol t$ de Student** amb paràmetre $n-1$.
```

````

`````ad-not
title: Nota: *Distribució $\boldsymbol\chi^2$*

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
title: Nota: *Distribució $\boldsymbol t$ de Student*

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
	A("Volem estimar $\mu\,$")
	B("$\displaystyle\frac{\overline{X}-\mu}{\frac{\sigma}{\sqrt{n}}} \sim N(0,1)$")
	C("$\displaystyle\frac{\overline{X}-\mu}{\frac{\sqrt{S^2}}{\sqrt{n}}} \sim t_{n-1}$")

	A -- "$\sigma$ coneguda" --> B
	A -- "$\sigma$ desconeguda" --> C
```

```mehrmaid
graph LR;
	A("Volem estimar $\sigma\,$")
	B("$\displaystyle\frac{nS^2}{\sigma^2} = \frac{1}{\sigma^2}\sum_{i=1}^n(X_i - \mu)^2 \sim \chi^2_n$")
	C("Teorema de Fisher:
	$\displaystyle\frac{(n-1)S^2}{\sigma^2} = \frac{1}{\sigma^2}\sum_{i=1}^n(X_i -\overline{X})^2 \sim \chi^2_{n-1}$")

	A -- "$\mu$ coneguda" --> B
	A -- "$\mu$ desconeguda" --> C
```

---
####  Distribucions mostrals asimptòtiques

###### Mitjana mostral

Per una mostra de mida $n$ de $\boldsymbol{X}$ amb distribució qualsevol, on:
+ $\text{E}(x)=\mu$
+ $\text{Var}(X)=\sigma^{2}$

````mehrmaid
graph TB;
	A1("Volem estimar $\mu\,$")
	D("$\mu_{\overline{X}_n}=\mu$
	$\displaystyle\sigma_{\overline{X}_n}=\frac{\sigma^2}{n}$")
	A("distribució asimptòtica $\,$")
	B("$\displaystyle\frac{\overline{X}_n-\mu}{\frac{\sigma}{\sqrt{n}}} \approx N(0,1)$")
	C("$\displaystyle\frac{\overline{X}_n-\mu}{\frac{S_n}{\sqrt{n}}} \approx N(0,1)$")
	
	A1 -- "qualsevol $n$" --> D
	A1 -- "$n\geq30$" --> A
	A -- "$\sigma$ coneguda" --> B
	A -- "$\sigma$ desconeguda" --> C
````

###### Proporció mostral

Cas específic de la mitjana mostral amb $\boldsymbol{X\sim B(p)}$, on:
+ $\text{E}(x)=\mu=p$
+ $\text{Var}(X)=\sigma^{2}=p\,(p-1)$
+ $\hat{p}_{n}=\overline{X}_{n}$

```mehrmaid
graph TB;
	A("Volem estimar $p\,$")
	B("$\displaystyle n\,\hat{p}_n = \sum_{i=1}^nX_i\sim B(n,p)$")
	C("Teorema de DeMoivre-Laplace:
	$\displaystyle n\,\hat{p}_n = \sum_{i=1}^nX_i \approx N(n\,p,n\,p\,(1-p))$")
	D("Teorema de Poisson:
	$\displaystyle n\,\hat{p}_n = \sum_{i=1}^nX_i \approx Pois(\lambda)$
	amb $\lambda=n\,p$")
	F("distribució asimptòtitca $\,$")
	
	A -- "$n$ qualsevol" --> B
	A -- "$n$ gran" --> F:::hidden
	F -- "$np(1-p)\geq18$" --> C
	F -- "$n\geq10$, $p<0.05\,$" --> D
```

---
## Estadístics d'ordre

> Donada una mostra de mida $n$ de $X_{1},\dots,X_{n}$, els ==estadístics d'ordre== son les variables aleatòries:
>
> + Mínim: &emsp;&emsp;&emsp;&emsp;&emsp; $\boldsymbol{X_{(1)}} = \text{min}\{X_{1},\dots,X_{n}\}$
> + Segon més petit: &ensp; $\boldsymbol{X_{(2)}} = \text{min}\{\{X_{1},\dots,X_{n}\}\backslash X_{(1)}\}$
> + $\dots$
> + Màxim: &emsp;&emsp;&emsp;&emsp;&emsp;$\boldsymbol{X_{(n)}} = \text{max}\{X_{1},\dots,X_{n}\}$

```ad-ex
title: Estadístics d'ordre importants

+ ==**Mediana**==: Valor que separa la meitat superior de la meitat inferior d'un conjunt de dades ordenades.
$$ Q_{2} = \begin{cases}
X_{\left( \frac{n+1}{2} \right)} &\text{si }n\text{ és senar} \\
\frac{1}{2}\left( X_{\left( \frac{n}{2} \right)} + X_{\left( \frac{n}{2}+1 \right)} \right) &\text{si }n\text{ és parell} \\
\end{cases} $$

+ ==**Quartils**==: Divideixen les dades en quatre parts iguals.
$$\begin{align}
&Q_{1} = X_{\left( \frac{n}{4} \right)} \\
&Q_{2} \text{ (mediana)} \\
&Q_{3} = X_{\left( \frac{3n}{4} \right)}
\end{align}$$

+ ==**Rang interquartífic**==: Ens ajuda a entendre la dispersió de les dades centrals.
$$IQR = Q_{3} - Q_{1}$$
```

```ad-prop
title: Distribució del màxim

Sigui $X$ una v.a. amb funció de distribució $F_{X}$, i $X_{1},\dots,X_{n}$ una mostra de mida $n$, aleshores la **funció de distribució** de la v.a. **màxim** és, per tot $t\in\mathbb{R}$:
$$ F_{X_{(n)}}(t) = (F_{X}(t))^n $$
```

```ad-prop
title: Distribució del mínim

Sigui $X$ una v.a. amb funció de distribució $F_{X}$, i $X_{1},\dots,X_{n}$ una mostra de mida $n$, aleshores la **funció de distribució** de la v.a. **mínim** és, per tot $t\in\mathbb{R}$:
$$ F_{X_{(1)}}(t) = 1-(1-F_{X}(t))^n $$
```

```ad-prop
title: Distribució de l'$r$-èssim estadístic d'ordre

Sigui $X$ una v.a. amb funció de distribució $F_{X}$, i $X_{1},\dots,X_{n}$ una mostra de mida $n$, aleshores la **funció de distribució** de la v.a. **$r$-èssim estadístic d'ordre** és, per tot $t\in\mathbb{R}$:
$$ F_{X_{(r)}}(t) = \sum_{i=r}^n \binom{n}{i} (F_{X}(t))^i \,(1-F_{X}(t))^{n-i} $$
```

---
## Intervals de confiança

Les estimacions puntuals no ens diuen res sobre la **variabilitat** de les dades, ni quina és la nostra **confiança** que aquesta estimació s'acosti al valor real. Per aquest motiu introduïm:

> Sigui $X$ una variable aleatòria i $\theta$  qualsevol paràmetre desconegut de $X$, i fixant un valor $\gamma\in(0,1)$.
> 
> Un ==interval de confiança== (IC) és una parella de nombres reals $t_{1}<t_{2}$ tals que $\theta\in(t_{1},t_{2})$ amb un ==nivell de confiança== $\gamma$. 

```ad-def
title: *Risc*

Tot nivell de confiança $\gamma$ té associat un nivell complementari $\alpha = 1-\gamma$ anomenat ==risc==.
```

```ad-not
title: Interpretació de l'IC

De totes les possibles mostres de mida $n$, un $100\gamma$% donarà un interval que contindrà el veritable valor de $\theta$. 

Generalment només tindrem una mostra i per tant un interval. En aquest cas tindrem una confiança $\gamma$ que el nostre interval contingui el valor real de $\theta$.
```

```ad-ex
title: Trobar l'interval de confiança

Sigui $x_{1},\dots,x_{n}$ una realització de la mostra $X_{1},\dots,X_{n}$ amb $x_{i}=X_{i}(\omega)$, $\omega\in\Omega$.

Es tracta de trobar dos estadístics $T_{1}$ i $T_{2}$ tal que
$$ P(T_{1} \leq \theta \leq T_{2}) \geq \gamma \,,$$
on $t_{1}=T_{1}(\omega)$ i $t_{2}=T_{2}(\omega)$.

En el cas de lleis **contínues** es podrà assolir $\gamma$ **exactament**. Quan siguin **discretes** pot ser que no es pugui; en tot cas hem d'intentar trobar l'**interval més petit** possible.
```

#### Mètode del pivot

```ad-def
title: *Pivot*

Sigui $\theta$ un paràmetre desconegut de la mostra $X_{1},\dots,X_{n}$.

Un ==pivot== és una v.a. $T$ tal que:
+ $T=T(X_{1},\dots,X_{n}\,;\,\theta)$
+ $T$ no depèn de cap altre paràmetre desconegut.
+ La llei de $T$ és coneguda.
+ Es pot aïllar (o pivotar) per tot valor de la mostra.
```

Veurem com s'utilitza aquest mètode per trobar l'interval de confiança de diverses variables aleatòries.

###### Població normal

````ad-def
title: *Quantila*
Una ==quantila== d'ordre $\beta$ ($z_{\beta}$) és el valor d'una distribució normal estàndard que té una probabilitat acumulada de $\beta$, és a dir
$$ P(Z\leq z_{\beta}) = \beta \,.$$
````

````ad-prop
title: Mitjana $\boldsymbol\mu$

**Coneixem $\boldsymbol\sigma$:**
$$ IC_{\gamma}(\mu) = \left[\,\overline{x} - z_{1-\frac{\alpha}{2}} \frac{\sigma}{\sqrt{n}}\,, \,\overline{x} + z_{1-\frac{\alpha}{2}} \frac{\sigma}{\sqrt{n}}\right] $$

```ad-def
title: *Error*

L'==error== de precisió de l'interval de confiança $IC_{\gamma}(\mu)$ és
$$ e = z_{1-\frac{\alpha}{2}} \frac{\sigma}{\sqrt{n}} \,,$$
que satisfà:
+ $P(\,|\overline{X}-\mu|\leq e) = \gamma$
+ És la semi-amplitud de l'interval de confiança.
	Com més gran l'error, menys precís l'IC i menys informació ens proporciona.
+ Depèn de la mida mostral, la desviació típica poblacional, i el nivell de confiança. És una funció:
	+ decreixent de $n$.
	+ creixent de $\sigma$.
	+ decreixent $\gamma$.
```

```ad-ex
title: Mida mínima de la mostra

Fixant un error màxim $\varepsilon$, la mida mínima de la mostra és
$$ n = \left\lceil \left( \frac{z_{1-\frac{\alpha}{2}}\,\sigma}{\varepsilon} \right)^{2} \right\rceil \,.$$
```

---

**No coneixem $\boldsymbol\sigma$:**
$$ IC_{\gamma}(\mu) = \left[\,\overline{x} - t_{n-1,\,1-\frac{\alpha}{2}} \frac{s}{\sqrt{n}}\,, \,\overline{x} + t_{n-1,\,1-\frac{\alpha}{2}} \frac{s}{\sqrt{n}}\right] \,,$$
on $t$ és la llei de Student, i $s$ és la desviació típica mostral.

En aquest cas l'interval sol ser més ampli i per tant menys precís.

```ad-def
title: *Error*

L'==error== de precisió de l'interval de confiança $IC_{\gamma}(\mu)$ és
$$ e = t_{n-1,\,1-\frac{\alpha}{2}} \frac{S}{\sqrt{n}} \,,$$
que satisfà:
+ $P(\,|\overline{X}-\mu|\leq e) = \gamma$
+ És la semi-amplitud de l'interval de confiança.
	Com més gran l'error, menys precís l'IC i menys informació ens proporciona.
+ Depèn de la mida mostral, la desviació típica mostral, i el nivell de confiança. És una funció:
	+ decreixent de $n$.
	+ creixent de $S$.
	+ decreixent $\gamma$.
```

```ad-ex
title: Mida mínima de la mostra

Fixant un error màxim $\varepsilon$, la mida mínima de la mostra és
$$ n = \left\lceil \left( \frac{t_{n-1,\,1-\frac{a}{2}}\,S}{\varepsilon} \right)^{2} \right\rceil \,.$$

Aquesta expressió té dos problemes:
+ **$\boldsymbol S$ és aleatori.**
	Si es coneix una afitació $\sigma<\sigma_{0}$, es pot substituir per $S$.
+ **$\boldsymbol t$ depèn de $\boldsymbol n$.**
	Si esperem que $n$ sigui gran (que sol passar quan volem un error petit), es pot substituir $t_{n-1,\,1-\frac{\alpha}{2}}$ per $z_{1-\frac{\alpha}{2}}$. Si no, s'haurà de resoldre per tempteig mitjançant les taules de $t$ de Student.
```
````

^05fecc

````ad-prop
title: Variància $\sigma^{2}$

**Coneixem $\boldsymbol\mu$:**
$$ IC_{\gamma}(\sigma^{2}) = \left[ \frac{n\,\tilde{s}^{2}}{\chi^{2}_{n,\,1-\frac{\alpha}{2}}},\, \frac{n\,\tilde{s}^{2}}{\chi^{2}_{n,\,\frac{\alpha}{2}}} \right] \,,$$
on $\tilde{s}^{2}$ és la quasivariància mostral.

```ad-ex
title: Aproximació de $\boldsymbol\chi^{2}$ amb $\boldsymbol n$ gran

Quan la mida de la mostra és molt gran, el nombre de graus de llibertat de $\chi^{2}$ és gran i no apareix a les taules.

En aquests casos es poden fer servir les aproximacions següents:
$$\begin{align}
\chi^{2}_{n,\,1-\frac{\alpha}{2}} &\approx \frac{(\sqrt{2n-1}+z_{1-\frac{\alpha}{2}})^2}{2} \\[0.7em]
\chi^{2}_{n,\,\frac{\alpha}{2}} &\approx \frac{(\sqrt{2n-1}-z_{1-\frac{\alpha}{2}})^2}{2}
\end{align}$$
```

---

**No coneixem $\boldsymbol\mu$:**
$$ IC_{\gamma}(\sigma^{2}) = \left[ \frac{(n-1)s^{2}}{\chi^{2}_{n-1,\,1-\frac{\alpha}{2}}},\, \frac{(n-1)s^{2}}{\chi^{2}_{n-1,\,\frac{\alpha}{2}}} \right] \,,$$

on $s^{2}$ és la variància mostral.

```ad-ex
title: Aproximació de $\boldsymbol\chi^{2}$ amb $\boldsymbol n$ gran
Quan la mida de la mostra és molt gran, el nombre de graus de llibertat de $\chi^{2}$ és gran i no apareix a les taules.

En aquests casos es poden fer servir les aproximacions següents:
$$\begin{align}
\chi^{2}_{n-1,\,1-\frac{\alpha}{2}} &\approx \frac{(\sqrt{2n-3}+z_{1-\frac{\alpha}{2}})^2}{2} \\[0.7em]
\chi^{2}_{n-1,\,\frac{\alpha}{2}} &\approx \frac{(\sqrt{2n-3}-z_{1-\frac{\alpha}{2}})^2}{2}
\end{align}$$
```
````

###### Distribucions asimptòtiques

```ad-prop
title: Mitjana $\boldsymbol\mu$

Pel TCL sabem que si amb una v.a. de qualsevol distribució  tenim $n$ prou gran ($n\geq30$), aleshores es comporta similarment a una llei normal.

**Coneixem $\boldsymbol\sigma$:**
$$ IC_{\gamma}(\mu) = \left[\,\overline{x} - z_{1-\frac{\alpha}{2}} \frac{\sigma}{\sqrt{n}}\,, \,\overline{x} + z_{1-\frac{\alpha}{2}} \frac{\sigma}{\sqrt{n}}\right] $$

**No coneixem $\boldsymbol\sigma$:**
$$ IC_{\gamma}(\mu) = \left[\,\overline{x} - z_{1-\frac{\alpha}{2}} \frac{s}{\sqrt{n}}\,, \,\overline{x} + z_{1-\frac{\alpha}{2}} \frac{s}{\sqrt{n}}\right] $$

[[#^05fecc]]

```

```ad-prop
title: Proporció $p$
```

###### Altres distribucions o distribucions desconegudes

```ad-prop
title: Desigualtat de Txebixev

Sigui $Y$ una v.a., per a tot $\rho>0$ es compleix:
$$ P(\,|Y-\text{E}(Y)|>\rho) \leq \frac{\text{Var}(Y)}{\rho^{2}} $$
```

La desigualtat de Txebixev ens permet fer afirmacions sobre la probabilitat de **desviacions grans** d'una variable aleatòria respecte de la seva mitjana, a partir de la seva variància.