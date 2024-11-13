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

````ad-ex
title: Recordatori: *Paràmetres*

```ad-ex
title: $X$ quantitativa o numèrica

==**Mitjana** poblacional==:
> 
> $\displaystyle\boldsymbol{\mu} = \text{E}(X) = \int_{-\infty}^{+\infty}x\,f(x)\,dx\,,$
> 
> on $f(x)$ és la funció de densitat de $X$.
> 
> ```ad-prop
> title: Propietats
> + $\text{E}(aX+bY)=a\text{E}(X)+b\text{E}(Y)$
> + $|\text{E}(X)| = \text{E}(|X|)$
> + $\displaystyle \text{E}(X^{2}) = \int_{-\infty}^{+\infty}x^{2}\,f(x)\,dx$ 
> ```

$\,$
==**Variància** poblacional==:
> 
> $\boldsymbol{\sigma^2} = \text{Var}(X) = \text{E}(X^{2})-(\text{E}(X))^{2}$
> 
> ```ad-prop
> title: Propietats
> 
> + $\text{Var}(aX+b) = a^{2}Var(X)$
> + Covariància: $\text{Cov}(X,Y)=E(X,Y)-E(X)E(Y)$
> + $\text{Var}(X\pm Y) = \text{Var}(X)+\text{Var}(Y)\pm \text{Cov}(X,Y)$
> ```

$\,$
==**Desviació típica** poblacional==:
> 
> $\boldsymbol{\sigma} = \sqrt{\text{Var}(X)}$
```

```ad-ex
title: $X$ qualitativa dicotòmica o binària

==**Proporció** poblacional==: $\boldsymbol{p}$
```
````

Una mostra d'una població finita **sense reemplaçament NO** forma una **mostra aleatòria** perquè les variables de la mostra **no són independents**. En canvi sí que ho és si hi ha reposició.

Habitualment es treballa amb mostres amb $n$ molt petita en comparació a la mida de la població. En aquests casos, tot i que el mostreig es faci sense reposició, **es treballarà com si les variables fossin independents**.

```ad-not
title: Recordatori: *Equivalència normal*

Sigui $X$ una variable aleatòria, són equivalents
$$X\sim N(\mu,\sigma^{2}) \,\,\,\,\text{i}\,\,\,\, \frac{X-\mu}{\sigma}\sim N(0,1)\,.$$
````

---
## **Estadístics**

> Donada una mostra aleatòria $X_1,...,X_n$ de $X$, un ==estadístic== és una funció d'aquestes variables i possibles constants.

```ad-ex
title: Estadístics importants

+ ==**Mitjana** mostral==: $$\boldsymbol{\overline{X}} = \frac{1}{n}\sum\limits_{i=1}^{n} X_i$$

+ ==**Variància** mostral (corregida)==: $$\boldsymbol{S^2} = \frac{1}{n-1} \sum\limits_{i=1}^n (X_i-\overline{X})^2$$

+ ==**Variància** mostral (sense corregir)==: $$\boldsymbol{S'^2} = \frac{1}{n}\sum\limits_{i=1}^n(X_i-\overline{X})^2$$

+ ==**Quasivariància** mostral==. Es fa servir en rar cas de conèixer la mitjana poblacional $\mu$ de $X$:
$$\boldsymbol{\widetilde{S}^2} = \frac{1}{n}\sum\limits_{i=1}^n (X_i-\mu)^2$$
```
^00ad27

```ad-def
title: *Estimador*

Un ==estimador== és un **estadístic** que es fa servir per a **estimar** un determinat paràmetre.

Si un estadístic s'usa per a estimar el paràmetre $X$, es denotarà $\widehat{X}$, i una estimació concreta serà $\widehat{x}$.
```
#### **Distribucions mostrals** d'estadístics usuals

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
on $\chi_n^2$ denota la [[#^77adb9 | distribució khi-quadrat]] de grau $n$.
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
on $t_{n-1}$ denota la [[#^4dd1ac| distribució t de Student]] amb paràmetre $n-1$.
```
````

---
## Estadístics **d'ordre**

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
title: Distribució del **màxim**

Sigui $X$ una v.a. amb funció de distribució $F_{X}$, i $X_{1},\dots,X_{n}$ una mostra de mida $n$, aleshores la **funció de distribució** de la v.a. **màxim** és, per tot $t\in\mathbb{R}$:
$$ F_{X_{(n)}}(t) = (F_{X}(t))^n $$
```

```ad-prop
title: Distribució del **mínim**

Sigui $X$ una v.a. amb funció de distribució $F_{X}$, i $X_{1},\dots,X_{n}$ una mostra de mida $n$, aleshores la **funció de distribució** de la v.a. **mínim** és, per tot $t\in\mathbb{R}$:
$$ F_{X_{(1)}}(t) = 1-(1-F_{X}(t))^n $$
```

```ad-prop
title: Distribució de l'**$\boldsymbol r$-èssim estadístic d'ordre**

Sigui $X$ una v.a. amb funció de distribució $F_{X}$, i $X_{1},\dots,X_{n}$ una mostra de mida $n$, aleshores la **funció de distribució** de la v.a. **$r$-èssim estadístic d'ordre** és, per tot $t\in\mathbb{R}$:
$$ F_{X_{(r)}}(t) = \sum_{i=r}^n \binom{n}{i} (F_{X}(t))^i \,(1-F_{X}(t))^{n-i} $$
```

---
## **Intervals de confiança**

Les estimacions puntuals no ens diuen res sobre la **variabilitat** de les dades, ni quina és la nostra **confiança** que aquesta estimació s'acosti al valor real. Per aquest motiu introduïm:

> Sigui $X$ una variable aleatòria i $\theta$  qualsevol paràmetre desconegut de $X$, i fixant un valor $\gamma\in(0,1)$.
> 
> Un ==interval de confiança== (IC) és una parella de nombres reals $t_{1}<t_{2}$ tals que $\theta\in(t_{1},t_{2})$ amb un ==nivell de confiança== $\gamma$. 

```ad-def
title: *Risc*

Tot nivell de confiança $\gamma$ té associat un nivell complementari $\alpha = 1-\gamma$ anomenat ==risc==.
```

```ad-not
title: **Interpretació** de l'IC

De totes les possibles mostres de mida $n$, un $100\gamma$% donarà un interval que contindrà el veritable valor de $\theta$. 

Generalment només tindrem una mostra i per tant un interval. En aquest cas tindrem una **confiança** (i no probabilitat) de $\gamma$ que el nostre interval contingui el valor real de $\theta$.
```

```ad-met
title: Trobar l'interval de confiança

Sigui $x_{1},\dots,x_{n}$ una realització de la mostra $X_{1},\dots,X_{n}$ amb $x_{i}=X_{i}(\omega)$, $\omega\in\Omega$.

Es tracta de trobar dos estadístics $T_{1}$ i $T_{2}$ tal que
$$ P(T_{1} \leq \theta \leq T_{2}) \geq \gamma \,,$$
on $t_{1}=T_{1}(\omega)$ i $t_{2}=T_{2}(\omega)$.

En el cas de lleis **contínues** es podrà assolir $\gamma$ **exactament**. Quan siguin **discretes** pot ser que no es pugui; en tot cas hem d'intentar trobar l'**interval més petit** possible.
```

#### Mètode del **pivot**

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

###### Població **normal**

Considerem $X\sim N(\mu,\sigma)$ de mida $n$.

````ad-def
title: *Quantila*
Una ==quantila== d'ordre $\beta$ ($z_{\beta}$) és el valor d'una distribució normal estàndard que té una probabilitat acumulada de $\beta$, és a dir
$$ P(Z\leq z_{\beta}) = \beta \,.$$
````

^8cd659

````ad-met
title: IC de la **mitjana $\boldsymbol\mu$**

> **Coneixem $\boldsymbol\sigma$ :**
$$ IC_{\gamma}(\mu) = \left[\,\overline{x} - z_{1-\frac{\alpha}{2}} \frac{\sigma}{\sqrt{n}}\,,\quad \overline{x} + z_{1-\frac{\alpha}{2}} \frac{\sigma}{\sqrt{n}}\right] $$

```ad-prop
title: Error

L'==error== de precisió de l'interval de confiança $IC_{\gamma}(\mu)$ és
$$ e = z_{1-\frac{\alpha}{2}} \frac{\sigma}{\sqrt{n}} \,,$$
que satisfà:
+ $P(\,|\overline{X}-\mu|\leq e) = \gamma$
+ És la semi-amplitud de l'interval de confiança. Com més gran l'error, menys precís l'IC i menys informació ens proporciona.
+ Depèn de la mida mostral, la desviació típica poblacional, i el nivell de confiança. És una funció:
	+ decreixent de $n$.
	+ creixent de $\sigma$.
	+ decreixent $\gamma$.
```

```ad-met
title: **Mida mínima** de la mostra

Fixant un error màxim $\varepsilon$, la mida mínima de la mostra és
$$ n = \left\lceil \left( \frac{z_{1-\frac{\alpha}{2}}\,\sigma}{\varepsilon} \right)^{2} \right\rceil \,.$$
```

> **No coneixem $\boldsymbol\sigma$ :**
$$ IC_{\gamma}(\mu) = \left[\,\overline{x} - t_{n-1,\,1-\frac{\alpha}{2}} \frac{s}{\sqrt{n}}\,, \,\overline{x} + t_{n-1,\,1-\frac{\alpha}{2}} \frac{s}{\sqrt{n}}\right] \,,$$
on $t_{n-1,\,1-\frac{\alpha}{2}}$ és la [[#^8cd659 | quantila]] d'ordre $1-\frac{\alpha}{2}$ de la [[#^4dd1ac | llei t de Student]] amb $n-1$ graus de llibertat, i $s$ és la [[#^00ad27 | desviació típica mostral]].

En aquest cas l'interval sol ser més ampli i per tant menys precís.

```ad-prop
title: Error

L'==error== de precisió de l'interval de confiança $IC_{\gamma}(\mu)$ és
$$ e = t_{n-1,\,1-\frac{\alpha}{2}} \frac{S}{\sqrt{n}} \,,$$
que satisfà:
+ $P(\,|\overline{X}-\mu|\leq e) = \gamma$
+ És la semi-amplitud de l'interval de confiança.
	Com més gran l'error, menys precís l'IC i menys informació ens proporciona.
+ Depèn de la mida mostral, la [[#^00ad27 | desviació típica mostral]], i el nivell de confiança. És una funció:
	+ decreixent de $n$.
	+ creixent de $S$.
	+ decreixent $\gamma$.
```

```ad-met
title: **Mida mínima** de la mostra

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

````ad-met
title: IC de la **variància $\boldsymbol\sigma^{2}$**

> **Coneixem $\boldsymbol\mu$ :**
$$ IC_{\gamma}(\sigma^{2}) = \left[ \frac{n\,\tilde{s}^{2}}{\chi^{2}_{n,\,1-\frac{\alpha}{2}}},\quad \frac{n\,\tilde{s}^{2}}{\chi^{2}_{n,\,\frac{\alpha}{2}}} \right] \,,$$
on $\tilde{s}^{2}$ és la [[#^00ad27 | quasivariància mostral]].

```ad-met
title: **Aproximació** de $\boldsymbol\chi^{2}$ amb $\boldsymbol n$ gran

Quan la mida de la mostra és molt gran, el nombre de graus de llibertat de $\chi^{2}$ és gran i no apareix a les taules.

En aquests casos es poden fer servir les aproximacions següents:
$$\begin{align}
\chi^{2}_{n,\,1-\frac{\alpha}{2}} &\approx \frac{(\sqrt{2n-1}+z_{1-\frac{\alpha}{2}})^2}{2} \\[0.7em]
\chi^{2}_{n,\,\frac{\alpha}{2}} &\approx \frac{(\sqrt{2n-1}-z_{1-\frac{\alpha}{2}})^2}{2}
\end{align}$$
```

> **No coneixem $\boldsymbol\mu$ :**
$$ IC_{\gamma}(\sigma^{2}) = \left[ \frac{(n-1)s^{2}}{\chi^{2}_{n-1,\,1-\frac{\alpha}{2}}},\quad \frac{(n-1)s^{2}}{\chi^{2}_{n-1,\,\frac{\alpha}{2}}} \right] \,,$$
on $s^{2}$ és la [[#^00ad27| variància mostral]].

```ad-met
title: **Aproximació** de $\boldsymbol\chi^{2}$ amb $\boldsymbol n$ gran
Quan la mida de la mostra és molt gran, el nombre de graus de llibertat de $\chi^{2}$ és gran i no apareix a les taules.

En aquests casos es poden fer servir les aproximacions següents:
$$\begin{align}
\chi^{2}_{n-1,\,1-\frac{\alpha}{2}} &\approx \frac{(\sqrt{2n-3}+z_{1-\frac{\alpha}{2}})^2}{2} \\[0.7em]
\chi^{2}_{n-1,\,\frac{\alpha}{2}} &\approx \frac{(\sqrt{2n-3}-z_{1-\frac{\alpha}{2}})^2}{2}
\end{align}$$
```
````

###### Distribucions **asimptòtiques**

```ad-met
title: IC de la **mitjana $\boldsymbol\mu$**

Pel TCL sabem que si una v.a. de qualsevol distribució té mida $n$ prou gran $\boxed{\boldsymbol{n\geq30}}$, es comportarà similarment a una llei normal. Considerem, doncs, $X\sim N(\mu,\sigma)$.

Aleshores:

$$ IC_{\gamma}(\mu) = \left[\,\overline{x} - z_{1-\frac{\alpha}{2}} \frac{\sigma}{\sqrt{n}}\,,\quad \overline{x} + z_{1-\frac{\alpha}{2}} \frac{\sigma}{\sqrt{n}}\right] $$

En cas de **no conèixer $\boldsymbol\sigma$**, podem substituir-la per la [[#^00ad27 | desviació típica mostral]] $\boldsymbol s$.

Quant a l'**error** i la **mida mínima** de la població, aquests són anàlegs als del cas de la [[#^05fecc | distribució normal]].
```

^99cbc9

````ad-met
title: IC de la **proporció $\boldsymbol p$**

Considerem $X\sim B(p)$ de mida $n$.
$$ IC_{\gamma}(p) = \left[\, \hat{\hat{p}} - z_{1-\frac{\alpha}{2}} \sqrt{\frac{\hat{\hat{p}}(1-\hat{\hat{p}})}{n}} ,\quad \hat{\hat{p}} + z_{1-\frac{\alpha}{2}} \sqrt{\frac{\hat{\hat{p}}(1-\hat{\hat{p}})}{n}} \,\,\right] \,,$$
on $\hat{\hat{p}}=\overline{x}$ és la realització de $\hat{p}=\overline{X}$.

Això es compleix quan $\,\boxed{\,\boldsymbol{ n\,\hat{\hat{p}} \,(1-\hat{\hat{p}}) \geq 18 \,}}$ .

```ad-prop
title: Error

L'==error== de precisió de l'interval de confiança $IC_{\gamma}(p)$ és
$$ z_{1-\frac{\alpha}{2}} \sqrt{\frac{\hat{\hat{p}}\,(1-\hat{\hat{p}})}{n}} \,.$$
```

```ad-met
title: **Mida mínima** de la mostra

Per determinar la mida mínima de la mostra per tal que l'error no sobrepassi un cert valor $\varepsilon$, **no podem fer servir $\hat{\hat{p}}$** ja que per determinar aquest valor necessitem primer la mida de la mostra. 

No obstant, podem fer servir que $\displaystyle \hat{\hat{p}}\,(1-\hat{\hat{p}})\leq \frac{1}{4}$, d'on resulta que
$$ n = \left\lceil \left( \frac{z_{1-\frac{\alpha}{2}}}{2\varepsilon} \right)^{2} \right\rceil \,.$$

D'aquesta manera s'obté una mida mostral usualment **més gran** de la que és realment necessària.

A posteriori de construir l'interval de confiança serà adient comprovar si l'error està dins dels valors desitjats.
```
````

###### **Altres** distribucions o distribucions **desconegudes**

Quan volem estimar un paràmetre desconegut d'una v.a. $X$ de mida $n$ però aquesta **no és prou gran** per poder aplicar distribucions asimptòtiques, podem trobar un interval (generalment **molt menys precís**) fent servir la desigualtat de Txebixev.

```ad-prop
title: Desigualtat de Txebixev

Sigui $Y$ una v.a., per a tot $\rho>0$ es compleix:
$$ P(\,|Y-\text{E}(Y)|>\rho) \leq \frac{\text{Var}(Y)}{\rho^{2}} $$
```

```ad-met
title: IC de la **mitjana $\boldsymbol\mu$**

$$ IC_{\gamma}(\mu) = \left[\, \overline{x} - \sqrt{\frac{\sigma^{2}}{n\,\alpha}} ,\quad \overline{x} + \sqrt{\frac{\sigma^{2}}{n\,\alpha}} \,\right] $$

En cas de **no conèixer $\boldsymbol\sigma$**, es pot substituir per una **bona aproximació** $\widehat{\text{Var}(X)}$ o en el pitjor dels casos per la [[#^00ad27 | variància mostral]] $\boldsymbol{s^{2}}$.
```

---
## **Comparació** de dues poblacions

Els intervals de confiança també es poden fer servir per comparar dues poblacions $X^{(1)}$ i $X^{(2)}$.

#### Mostres **independents**

En aquest cas les mostres de les dues poblacions no tindran cap relació entre elles, és  a dir que els seus **vectors aleatoris** ($X_{1}^{(1)},\dots,X_{n_{1}}^{(2)}$) i ($X_{1}^{(2)},\dots,X_{n_{2}}^{(2)}$) seran **independents**.

###### Poblacions **normals**

Considerem $X^{(1)} \sim N(\mu_{1},\sigma_{1})$ de mida $n_{1}$ i $X^{(2)} \sim N(\mu_{2},\sigma_{2})$ de mida $n_{2}$.

````ad-met
title: IC de la **diferència** de **mitjanes $\boldsymbol{\mu_{1}-\mu_{2}}$**

**Coneixem $\boldsymbol{\sigma_{1}^{2}}$ i $\boldsymbol{\sigma_{2}^{2}}$ :**
> $$ IC_{\gamma}(\mu_{1}-\mu_{2}) = \left[ (\overline{x_{1}}-\overline{x_{2}}) \,\mp\, z_{1-\frac{\alpha}{2}} \sqrt{\frac{\sigma_{1}^{2}}{n_{1}} + \frac{\sigma_{2}^{2}}{n_{2}}} \,\right] $$

$\,$
**No coneixem $\boldsymbol{\sigma^{2}}$ i $\boldsymbol{\sigma_{2}^{2}}$ però podem suposar $\boldsymbol{\sigma_{1}^{2}=\sigma_{2}^{2}}$ :**
> $$ IC_{\gamma}(\mu_{1}-\mu_{2}) = \left[ (\overline{x_{1}}-\overline{x_{2}}) \,\mp\, t_{n_{1}+n_{2}-2,\,1-\frac{\alpha}{2}}\, s \,\sqrt{\frac{1}{n_{1}} + \frac{1}{n_{2}}} \,\right] $$
on $\boldsymbol{s}$ és la [[#^00ad27 | desviació típica mostral]] de les dues mostres, calculada mitjançant una mitjana ponderada
$$ S^{2} = \frac{(n_{1}-1)\,S_{1}^{2} + (n_{2}-1)\,S_{2}^{2}}{n_{1}+n_{2}-2} \,.$$

$\,$
**No coneixem $\boldsymbol{\sigma_{1}^{2}}$ i $\boldsymbol{\sigma_{2}^{2}}$ i suposem $\boldsymbol{\sigma_{1}^{2}\neq\sigma_{2}^{2}}$ :**
> $$ IC_{\gamma}(\mu_{1}-\mu_{2}) = \left[ (\overline{x_{1}}-\overline{x_{2}}) \,\mp\, t_{\nu,\,1-\frac{\alpha}{2}} \sqrt{\frac{s_{1}^{2}}{n_{1}} + \frac{s_{2}^{2}}{n_{2}}} \,\right] $$
on $\boldsymbol{s_{1}}$ i $\boldsymbol{s_{2}}$ son les [[#^00ad27 | desviacions típiques mostrals]] i
$$\nu = \frac{\left( \frac{S_{1}^{2}}{n_{1}} + \frac{S_{2}^{2}}{n_{2}} \right)^{2}}{\frac{\left( \frac{S_{1}^{2}}{n_{1}} \right)^{2}}{n_{1}-1} + \frac{\left( \frac{S_{2}^{2}}{n_{2}} \right)^{2}}{n_{2}-1} } \,.$$

```ad-not
Observem que $\nu$ pot ser un nombre no enter i per tant s'ha d'**arrodonir** a l'enter més pròxim.
```
````

````ad-met
title: IC del **quocient** de **variàncies $\boldsymbol{\frac{\sigma_{2}}{\sigma_{1}}}$**

$$ IC_{\gamma}\left( \frac{\sigma_{2}^{2}}{\sigma_{1}^{2}} \right) = \left[ F_{n_{1}-1,\,n_{2}-1,\,\frac{\alpha}{2}} \frac{s_{2}^{2}}{s_{1}^{2}} ,\quad F_{n_{1}-1,\,n_{2}-1,\,1-\frac{\alpha}{2}} \frac{s_{2}^{2}}{s_{1}^{2}} \right] $$

```ad-not
+ Aquest interval **no és simètric** en $\frac{s_{2}^{2}}{s_{1}^{2}}$, però sí que el conté.
+ Si les varibales no tenen distribució normal, no es podrà fer servir aquest interval i s'hauran d'utilitzar mètodes no paramètrics.
```
````

###### Distribucions **asimptòtiques**

Considerem $X^{(1)}$ de mida $n_{1}$ i $X^{(2)}$ de mida $n_{2}$ prou grans.

```ad-met
title: IC de la **diferència** de **mitjanes $\boldsymbol{\mu_{1}-\mu_{2}}$**

Si les variables no són normals però $\boxed{\boldsymbol{n_{i}\geq 30}}$ per $i\in\{1,2\}$, es podrà aplicar el TCL i, considerant $X^{(1)} \sim N(\mu_{1},\sigma_{1})$ i $X^{(2)} \sim N(\mu_{2},\sigma_{2})$, tenim:

**Coneixem $\boldsymbol{\sigma_{1}^{2}}$ i $\boldsymbol{\sigma_{2}^{2}}$ :**
> $$ IC_{\gamma}(\mu_{1}-\mu_{2}) = \left[ (\overline{x_{1}}-\overline{x_{2}}) \,\mp\, z_{1-\frac{\alpha}{2}} \sqrt{\frac{\sigma_{1}^{2}}{n_{1}} + \frac{\sigma_{2}^{2}}{n_{2}}} \,\right] $$
que és igual al del cas normal.

$\,$
**No coneixem $\boldsymbol{\sigma^{2}}$ i $\boldsymbol{\sigma_{2}^{2}}$ però podem suposar $\boldsymbol{\sigma_{1}^{2}=\sigma_{2}^{2}}$ :**
> $$ IC_{\gamma}(\mu_{1}-\mu_{2}) = \left[ (\overline{x_{1}}-\overline{x_{2}}) \,\mp\, z_{1-\frac{\alpha}{2}}\, s \,\sqrt{\frac{1}{n_{1}} + \frac{1}{n_{2}}} \,\right] $$
on $\boldsymbol{s}$ és la [[#^00ad27 | desviació típica mostral]] de les dues mostres, calculada mitjançant una mitjana ponderada
$$ S^{2} = \frac{(n_{1}-1)\,S_{1}^{2} + (n_{2}-1)\,S_{2}^{2}}{n_{1}+n_{2}-2} \,.$$

$\,$
**No coneixem $\boldsymbol{\sigma_{1}^{2}}$ i $\boldsymbol{\sigma_{2}^{2}}$ i suposem $\boldsymbol{\sigma_{1}^{2}\neq\sigma_{2}^{2}}$ :**
> $$ IC_{\gamma}(\mu_{1}-\mu_{2}) = \left[ (\overline{x_{1}}-\overline{x_{2}}) \,\mp\, z_{1-\frac{\alpha}{2}} \sqrt{\frac{s_{1}^{2}}{n_{1}} + \frac{s_{2}^{2}}{n_{2}}} \,\right] $$
on $\boldsymbol{s_{1}}$ i $\boldsymbol{s_{2}}$ son les [[#^00ad27 | desviacions típiques mostrals]].
```

```ad-met
title: IC de la **diferència** de **proporcions $\boldsymbol{p_{1}-p_{2}}$**

Considerem $X^{(1)} \sim B(p_{1})$ de mida $n_{1}$ i $X^{(2)} \sim B(p_{2})$ de mida $n_{2}$.

$$ IC_{\gamma}(p_{1}-p_{2}) = \left[ (\hat{\hat{p_{1}}}-\hat{\hat{p_{2}}}) \,\mp\, z_{1-\frac{\alpha}{2}} \sqrt{\bar{\bar{p}}(1-\bar{\bar{p}})\left( \frac{1}{n_{1}} + \frac{1}{n_{2}} \right)} \right] $$
on on $\hat{\hat{p_{i}}}=\overline{x^{(i)}}$ és la realització de $\hat{p_{i}}=\overline{X^{(i)}}$ i
$$\displaystyle \bar{\bar{p}}=\frac{n_{1}\hat{\hat{p_{1}}}+n_{2}\hat{\hat{p_{2}}}}{n_{1}+n_{2}},$$

Això es compleix quan $\,\boxed{\,\boldsymbol{n_{i}\hat{\hat{p_{i}}}\,(1-\hat{\hat{p_{i}}}) \geq 18\,}}$ amb $i \in \{1,2\}\,$.
```

---
#### Mostres **aparellades**

Un cas generalment més interessant és prendre mostres de les dues poblacions que estiguin relacionades.

Prenent $(X_{1}^{(1)},\dots,X_{n}^{(1)})$ i $(X_{1}^{(2)},\dots,X_{n}^{(2)})$, es diu que les dues poblacions estan ==aparellades== si existeix una certa dependència entre $X_{i}^{(1)}$ i $X_{i}^{(2)}$ per tot $i\in\{1,\dots,n\}$.

###### Poblacions **normals**

Considerem $X^{(1)}\sim N(\mu_{1},\sigma_{1})$ i $X^{(2)}\sim N(\mu_{2},\sigma_{2})$.

Les diferències $D_{i} = X_{i}^{(1)}-X_{i}^{(2)}$ formen una v.a.
$$ D \sim N(\mu,\sigma^{2}) $$
on $\boldsymbol{\mu=\mu_{1}-\mu_{2}}$ i $\sigma^{2}$ és la **variància desconeguda**.

```ad-met
title: IC de la **diferència** de **mitjanes $\boldsymbol\mu$**

$$ IC_{\gamma}(\mu) = \left[ \overline{d} \,\mp\, t_{n-1,\,1-\frac{\alpha}{2}} \,\frac{s_{D}}{\sqrt{n}} \right] $$
on $\overline{d}$ és la mitjana mostral i $s_{D}$ la [[#^00ad27 | desviació típica mostral]] de la realització de $D$.
```

---
## Tests d'**hipòtesis**

Una ==hipòtesi estadística== és un **enunciat** sobre la **distribució d'una o més v.a.s**. 

Fer un ==test d'hipòtesis== consisteix en **acceptar o rebutjar** aquesta hipòtesis de manera objectiva a partir de les dades disponibles.
+ Es plantegen **dues hipòtesis estadístiques contradictòries**.
	+ ~={green}Hipòtesis nul·la ($H_{0}$).=~ Hipòtesi afavorida, que no serà rebutjada llevat que hi hagi evidència en contra seva ~={faded}(però tampoc es considerarà certa si  tan sols no és inconsistent amb la mostra)=~. Sovint corresponent a la **opinió actual** que es vol substituir.
	+ ~={green}Hipòtesis alternativa ($H_{1}$)=~ ~={green_low}o "*hipòtesi de l'investigador*".=~ Contrària a la hipòtesi nul·la, sovint corresponent a la **nova teoria** que es vol establir.
+ Es defineix una **regla de decisió** que permet decidir quina hipòtesis és més plausible.

```ad-def
title: Tests d'hipòtesis **paramètrics**

Aquells en que **es suposa** que les variables tenen una **certa distribució** ~={faded}(habitualment la normal)=~ i es fan hipòtesis sobre els valors dels paràmetres de la distribució ~={faded}(com la mitjana o la desviació)=~.
```

```ad-def
title: Tests d'hipòtesis **no paramètrics**

Aquells en què **no es pot suposar** prèviament **cap tipus de distribució** de la variable que estem estudiant.

Sovint ens trobem aquest cas en v.a.s **contínues**.
```

#### **Error**

Com que la decisió sobre quina de les dues hipòtesis considerem certa es basa en una v.a., aquesta decisió pot ser errònia.

| Hipòtesi que ens quedem $\rightarrow$<br>Hipòtesi certa $\downarrow$ |         $H_{0}$          |         $H_{1}$         |
|:--------------------------------------------------------------------:|:------------------------:|:-----------------------:|
| $H_{0}$                                                              |         No error         | ~={pink}Error tipus I=~ |
| $H_{1}$                                                              | ~={pink}Error tipus II=~ |        No error         | 

**No sabem** si cometem un error o no, però sí que es pot controlar la **probabilitat** d'aquests. 

Com que només disposem d'una constant "lliure", això només ens permet imposar **una única restricció**, que per conveni serà controlar l'error considerat **més perillós**, el de ~={pink}tipus I=~. 

D'aquesta manera s'estableix una **asimetria** entre les dues hipòtesis, **afavorint la hipòtesis nul·la**.

```ad-def
title: *Regla de decisió*

Fixant $\alpha\in(0,1)$ petita (anomenada ==nivell de significació==, construim la ==relga de decisió== del test d'hipòtesis de manera que
$$P(\text{error tipus I}) \leq\alpha \,.$$
Intentarem que $P$ sigui el més gran possible.
```

Entre els dos tipus d'error hi ha un **efecte balança**, per això intentarem que la probabilitat de l'~={pink}error I=~ sigui el **més gran** que ens podem permetre, així **reduïnt** la probabilitat de l'~={pink}error II=~

---
## Apèndix


| V.A.                                                    |                                           Densitat                                 |                                                          Distribució                                            |                                  Esperança                         |            Variància                      |
|:-------------------------------------------------------:|:----------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------------------------------- :|:------------------------------------------------------------------:|:-----------------------------------------:|
| ~={green}Uniforme=~<br>$X\sim \boldsymbol{\mathcal{U}(a,b)}$ |                          $$f(x)=\frac{1}{b-a}\,\mathbb{1}_{(a,b)}$$                     | $$F(x)=\begin{cases}0\quad&\text{si }x<a\\ \displaystyle\frac{x-a}{b-a}&\text{si }a\leq x<b\\1 &\text{si }x\leq b\end{cases}$$ |                      $$ \text{E}(X) = \frac{a+b}{2} $$                  | $$ \text{Var}(X)=\frac{(b-a)^{2}}{12} $$      |
| ~={green}Normal=~<br>$X\sim \boldsymbol{N(\mu,\sigma^{2})}$  |          $$ f(x) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{(x-\mu)}{2\sigma^{2}}} $$         |                                        taula amb<br>$$\frac{X-\mu}{\sigma}\sim N(0,1)$$                             |                           $$ \text{E}(X) = \mu $$                     | $$ \text{Var}(X)=\sigma^{2} $$               |
| ~={green}Exponencial=~<br>$X\sim \boldsymbol{Exp(\lambda)}$ |                 $$ f(x) = \lambda e^{-\lambda x}\,\mathbb{1}_{(0,\infty)} $$              |             $$ F(x) = \begin{cases} 0 \quad&\text{si } x<0\\(1-e^{-\lambda x}) &\text{si } 0\leq x \end{cases} $$            |                    $$ \text{E}(X) = \frac{1}{\lambda} $$                | $$ \text{Var}(X) = \frac{1}{\lambda^{2}} $$    |
| ~={green}Weibull=~<br>$X\sim \boldsymbol{W(\nu,\lambda)}$    |  $$ f(x) = \nu \,x^{\nu-1}\lambda^{\nu}e^{-(\lambda x)^{\nu}} \,\mathbb{1}_{(0,\infty)} $$   |         $$ F(x) = \begin{cases} 0 \quad&\text{si } x<0\\ (1-e^{-(\lambda x)^{\nu}}) &\text{si } 0\leq x \end{cases} $$        | $$ \text{E}(X) = \frac{1}{\lambda}\,\Gamma\left(1+\frac{1}{\alpha}\right) $$ |
| ~={green}Erlang=~<br>$X\sim \boldsymbol{E(r,\lambda)}$      | $$ f(x) = \lambda e^{-\lambda x} \frac{(\lambda x)^{r-1}}{(r-1)!} \mathbb{1}_{(0,\infty)} $$  |
| ~={green}Gamma=~<br>$X\sim \boldsymbol{G(r,\lambda)}$       | $$ f(x) = \lambda e^{-\lambda x} \frac{(\lambda x)^{r-1}}{\Gamma(r)} $$                     |


```ad-not
title: Funció *gamma d'Euler*

La ==funció **gamma d'Euler**== és
$$ \Gamma(\alpha) = \int_{0}^{\infty} t^{\alpha-1} e^{-t} dt \,,$$

que compleix:
+ $\Gamma(\alpha+1) = \alpha\Gamma(\alpha)$
+ $\Gamma(n+1) = n!$
+ $\Gamma(1)  = 1$
+ $\Gamma\left(1/2\right) = \sqrt{\pi }$
```
^c891c7

#### Distribució $\boldsymbol{\chi^2}$
^77adb9

````ad-def
Sigui $Z_1,...,Z_\nu$ variables aleatòries independents i idènticament distribuïdes amb llei $N(0,1)$.

S'anomena ==khi-quadrat amb $\nu$ graus de llibertat== ($\chi_\nu^2$) a la llei de la variable aleatòria
$$Y= \sum\limits_{i=1}^\nu Z^2_i. $$
````

````ad-prop
title: Propietats
+ **Funció de densitat**:
$$ f_{Y}(X) = \begin{cases}
0 & \text{si } x\leq 0 \\
\displaystyle\frac{1}{2^{\frac{\nu}{ 2}}\,\Gamma\left(\frac{\nu}{2}\right)} x^{\frac{\nu}{2}-1} e^{-\frac{x}{2}} & \text{si } x>0 \\
\end{cases} $$
on $\Gamma$ és la [[#^c891c7 | funció gamma d'Euler]].

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

---
#### Distribució **$\boldsymbol t$ de Student**
^4dd1ac

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

---
#### Distribució **$\boldsymbol F$ de Fisher-Snedecor**

````ad-def
Siguin $X\sim\chi_{n}^{2}$ i $Y\sim\chi_{m}^{2}$ v.a.s independents, aleshores la llei de la variable aleatòria
$$ F = \frac{\frac{X}{n}}{\frac{Y}{n}} $$
es diu ==$F$ de Fisher-Snedecor== amb $n$ graus de llibertat al numerador i $m$ al denominador i s'escriu $F\sim F_{n,m}$.
````

````ad-prop
title: Propietats

+ **Funció de densitat:**
$$ f_{F}(x) = \begin{cases}
\displaystyle\frac{\Gamma\left(\frac{n+m}{2}\right)}{\Gamma\left( \frac{n}{2} \right) \Gamma\left( \frac{m}{2} \right)} \left( \frac{n}{m} \right)^{\frac{n}{2}} x^{\frac{n}{2}-1} \left( 1+\frac{n}{m}x \right)^{-\frac{n+m}{2}} \quad&\text{si } x\geq 0 \\[0.5em]
0 \quad&\text{si } x<0
\end{cases} $$
on $\Gamma(\alpha)$ és la [[#^c891c7 | funció gamma d'Euler]].

+ **Funció de distribució:** Mitjançant taules.
````
