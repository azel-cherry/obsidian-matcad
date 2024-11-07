#### 1. **Estimació** de variables

```mehrmaid
graph LR;

	A("Població **normal**
	de mida $n$
	$X\sim N(\mu,\sigma^{2})$")

	A1("Volem estimar $\mu\,$")
	B1("$\displaystyle\frac{\overline{X}-\mu}{\frac{\sigma}{\sqrt{n}}} \sim N(0,1)$")
	C1("$\displaystyle\frac{\overline{X}-\mu}{\frac{S}{\sqrt{n}}} \sim t_{n-1}$")

	A2("Volem estimar $\sigma\,$")
	B2("$\displaystyle\frac{nS^2}{\sigma^2} = \frac{1}{\sigma^2}\sum_{i=1}^n(X_i - \mu)^2 \sim \chi^2_n$")
	C2("Teorema de Fisher:
	$\displaystyle\frac{(n-1)S^2}{\sigma^2} = \frac{1}{\sigma^2}\sum_{i=1}^n(X_i -\overline{X})^2 \sim \chi^2_{n-1}$")

	A --> A1
	A --> A2

	A1 -- "$\sigma$ coneguda" --> B1
	A1 -- "$\sigma$ desconeguda" --> C1

	A2 -- "$\mu$ coneguda" --> B2
	A2 -- "$\mu$ desconeguda" --> C2

	A02("**Qualsevol** població$\,$ 
	$X$ de mida $n$
	$$\begin{align}
	\text{E}(X)&=\mu \\
	\text{Var}(X)&=\sigma^{2}
	\end{align}$$")
	A12("Volem estimar $\mu\,$")
	A122("Volem estimar $\sigma^{2}\,$")
	D221("$\mu_{\overline{X}_n}=\mu$")
D222("$\displaystyle\sigma_{\overline{X}_n}=\frac{\sigma^2}{n}$")
	A22("distribució asimptòtica $\,$")
	B22("$\displaystyle\frac{\overline{X}_n-\mu}{\frac{\sigma}{\sqrt{n}}} \approx N(0,1)$")
	C22("$\displaystyle\frac{\overline{X}_n-\mu}{\frac{S_n}{\sqrt{n}}} \approx N(0,1)$")

	A02 --> A12
	A02 --> A122
	A12 -- "qualsevol $n$" --> D221
	A122 -- "qualsevol $n$" --> D222
	A12 -- "$n\geq30$" --> A22
	A22 -- "$\sigma$ coneguda" --> B22
	A22 -- "$\sigma$ desconeguda" --> C22

	A03("Població **binària**$\,$
	de mida $n$
	$X\sim B(p)$
	$$\begin{align}
	\text{E}(x)&=p \\[0.2em]
	\text{Var}(X)&=p\,(p-1) \\
	\hat{p}_{n}&=\overline{X}_{n}
	\end{align}$$")
	A3("Volem estimar $p\,$")
	B3("$\displaystyle n\,\hat{p}_n = \sum_{i=1}^nX_i\sim B(n,p)$")
	C3("Teorema de DeMoivre-Laplace:
	$\displaystyle n\,\hat{p}_n = \sum_{i=1}^nX_i \approx N(n\,p,n\,p\,(1-p))$")
	D3("Teorema de Poisson:
	$\displaystyle n\,\hat{p}_n = \sum_{i=1}^nX_i \approx Pois(\lambda)$
	amb $\lambda=n\,p$")
	F3("distribució asimptòtitca $\,$")

	A03 --> A3
	A3 -- "$n$ qualsevol" --> B3
	A3 -- "$n$ gran" --> F3
	F3 -- "$np(1-p)\geq18$" --> C3
	F3 -- "$n\geq10\,$, $\,p<0.05\,$" --> D3
```

---
#### 2. **Intervals de confiança**

```mehrmaid
graph LR;

	PN("Població **normal**$\,$
	de mida $n$
	$X\sim N(\mu,\sigma^{2})$")
	
	M("IC de $\mu\,$")
	
	MV("$\displaystyle IC_{\gamma}(\mu) = \left[\,\overline{x} \mp z_{1-\frac{\alpha}{2}} \frac{\sigma}{\sqrt{n}}\right]$")
	
	MVe("$\displaystyle e = z_{1-\frac{\alpha}{2}} \frac{\sigma}{\sqrt{n}}$")

	MeP("semi-amplitud de l'IC
	$P(\,|\overline{X}-\mu|\leq e) = \gamma$")
	
	MVn("$\displaystyle n = \left\lceil \left( \frac{z_{1-\frac{\alpha}{2}}\,\sigma}{\varepsilon} \right)^{2} \right\rceil$
	$\varepsilon :=$ error màxim")

	MNV("$\displaystyle IC_{\gamma}(\mu) = \left[\,\overline{x} \mp t_{n-1,\,1-\frac{\alpha}{2}} \frac{s}{\sqrt{n}}\right]$")
	MNVe("$\displaystyle e = t_{n-1,\,1-\frac{\alpha}{2}} \frac{S}{\sqrt{n}}$")
	
	MNVn("$\displaystyle n = \left\lceil \left( \frac{t_{n-1,\,1-\frac{a}{2}}\,S}{\varepsilon} \right)^{2} \right\rceil$
	$\varepsilon :=$ error màxim")

	MNVnS("$S\approx\sigma_0$")

	MNVnZ("$t_{n-1,\,1-\frac{a}{2}}\approx z_{1-\frac{\alpha}{2}}$")

	V("IC de $\sigma^2\,$")
	
	VM("$\displaystyle IC_{\gamma}(\sigma^{2}) = \left[ \frac{n\,\tilde{s}^{2}}{\chi^{2}_{n,\,1-\frac{\alpha}{2}}},\, \frac{n\,\tilde{s}^{2}}{\chi^{2}_{n,\,\frac{\alpha}{2}}} \right]$")

	VMG("$$\begin{align}
\chi^{2}_{n,\,1-\frac{\alpha}{2}} &\approx \frac{(\sqrt{2n-1}+z_{1-\frac{\alpha}{2}})^2}{2} \\[0.7em]
\chi^{2}_{n,\,\frac{\alpha}{2}} &\approx \frac{(\sqrt{2n-1}-z_{1-\frac{\alpha}{2}})^2}{2}
\end{align}$$")
	
	VNM("$\displaystyle IC_{\gamma}(\sigma^{2}) = \left[ \frac{(n-1)s^{2}}{\chi^{2}_{n-1,\,1-\frac{\alpha}{2}}},\, \frac{(n-1)s^{2}}{\chi^{2}_{n-1,\,\frac{\alpha}{2}}} \right]$")

	VNMG("$$\begin{align}
\chi^{2}_{n-1,\,1-\frac{\alpha}{2}} &\approx \frac{(\sqrt{2n-3}+z_{1-\frac{\alpha}{2}})^2}{2} \\[0.7em]
\chi^{2}_{n-1,\,\frac{\alpha}{2}} &\approx \frac{(\sqrt{2n-3}-z_{1-\frac{\alpha}{2}})^2}{2}
\end{align}$$")

	PN --> M
	M -- "$\sigma$ coneguda" --> MV
	MV --> MVe
	MVe --> MeP

	MV --> MVn
	M -- "$\sigma$ desconeguda" --> MNV
	MNV --> MNVe
	MNVe --> MeP
	MNV --> MNVn
	MNVn -- "coneixem<br>afitació $\sigma<\sigma_0\,$" --> MNVnS
	MNVn -- "volem<br>$n\geq 30$" --> MNVnZ
	
	PN --> V
	V -- "$\mu$ coneguda" --> VM
	VM -- "$n$ massa gran<br>per $\chi^2$" --> VMG
	V -- "$\mu$ desconeguda" --> VNM
	VNM -- "$n$ massa gran<br>per $\chi^2$" --> VNMG
```

```mehrmaid
graph LR;

	PB("Població **binària**$\,$
	de mida $n$
	$X\sim B(p)$")

	ASSp("IC de $p\,$")
	ASSpp("$\displaystyle IC_{\gamma}(p) = \left[\, \hat{\hat{p}} \mp z_{1-\frac{\alpha}{2}} \sqrt{\frac{\hat{\hat{p}}(1-\hat{\hat{p}})}{n}}\,\right]$
	on $\hat{\hat{p}} = \overline{x}$")
	
	ASSpe("$\displaystyle e=z_{1-\frac{\alpha}{2}} \sqrt{\frac{\hat{\hat{p}}\,(1-\hat{\hat{p}})}{n}}$")
	
	ASSpn("$\displaystyle n = \left\lceil \left( \frac{z_{1-\frac{\alpha}{2}}}{2\varepsilon} \right)^{2} \right\rceil$
	$\varepsilon :=$ error màxim")
	PBalt("fer servir cas de sota $\,$
	amb $p=\mu$")

	PB --> ASSp
	ASSp -- "$n\,\hat{\hat{p}}\,(1-\hat{\hat{p}}) \geq 18$" --> ASSpp
	ASSpp --> ASSpe
	ASSpp --> ASSpn
	
	ASSp -- "altrament $\,$" --> PBalt
```

```mehrmaid
graph LR;

	ASS("**Qualsevol** població$\,$
	$X$ de mida $n$")
	
	ASSMass("$X\sim N(\mu,\sigma^2)$")
	
	ASSM("IC de $\mu\,$")
	
	ASSMV("$\displaystyle IC_{\gamma}(\mu) = \left[\,\overline{x} \mp z_{1-\frac{\alpha}{2}} \frac{\sigma}{\sqrt{n}}\right]$")
	
	ASSMNV("$\displaystyle IC_{\gamma}(\mu) = \left[\,\overline{x} \mp z_{1-\frac{\alpha}{2}} \frac{s}{\sqrt{n}}\right]$")
	
	ASSMVe("$\displaystyle e = z_{1-\frac{\alpha}{2}} \frac{\sigma}{\sqrt{n}}$")

	MeP("semi-amplitud de l'IC
	$P(\,|\overline{X}-\mu|\leq e) = \gamma$")
	
	ASSMVn("$\displaystyle n = \left\lceil \left( \frac{z_{1-\frac{\alpha}{2}}\,\sigma}{\varepsilon} \right)^{2} \right\rceil$
	$\varepsilon :=$ error màxim")
	
	ASSMNVe("$\displaystyle e = t_{n-1,\,1-\frac{\alpha}{2}} \frac{S}{\sqrt{n}}$")
	
	ASSMNVn("$\displaystyle n = \left\lceil \left( \frac{t_{n-1,\,1-\frac{a}{2}}\,S}{\varepsilon} \right)^{2} \right\rceil$
	$\varepsilon :=$ error màxim")

	ASSMidk("Txebixev $\,$")
	ASSMVV("$\displaystyle IC_{\gamma}(\mu) = \left[\, \overline{x} \mp \sqrt{\frac{\sigma^{2}}{n\,\alpha}}\,\right]$")
	
	ASSMAP("$\displaystyle IC_{\gamma}(\mu) = \left[\, \overline{x} \mp \sqrt{\frac{\widehat{\text{Var}(X)}^{2}}{n\,\alpha}} \,\right]$")
	
	ASSMS("$\displaystyle IC_{\gamma}(\mu) = \left[\, \overline{x} \mp \sqrt{\frac{s^{2}}{n\,\alpha}}\,\right]$")

	ASS --> ASSM
	ASSM -- "$n\geq 30$" --> ASSMass
	ASSMass -- "$\sigma$ coneguda" --> ASSMV
	ASSMV --> ASSMVe
	ASSMVe --> MeP
	ASSMV --> ASSMVn
	ASSMass -- "$\sigma$ desconeguda" --> ASSMNV
	ASSMNV --> ASSMNVe
	ASSMNVe --> MeP
	ASSMNV --> ASSMNVn

	ASSM -- "altrament $\,$" --> ASSMidk
	ASSMidk -- "$\sigma$ coneguda" --> ASSMVV
	ASSMidk -- "$\sigma \approx\widehat{\text{Var}(X)}$" --> ASSMAP
	ASSMidk -- "$\sigma$ desconeguda" --> ASSMS
```

---
###### 2.1. **Comparació** de poblacions

```mehrmaid
graph LR;

	MI("Mostres **independents**")
	
	PN("Poblacions **normals**
	de mides $n_1$ i $n_2$
	$X^{(1)}\sim N(\mu_1,\sigma_1^2)$
	$X^{(2)}\sim N(\mu_2,\sigma_2^2)$")
	
	PNM("IC de $\mu_1-\mu_2$")
	
	PNMV("$IC_{\gamma}(\mu_{1}-\mu_{2}) =$
	$\displaystyle = \left[ (\overline{x_{1}}-\overline{x_{2}}) \,\mp\, z_{1-\frac{\alpha}{2}} \sqrt{\frac{\sigma_{1}^{2}}{n_{1}} + \frac{\sigma_{2}^{2}}{n_{2}}} \,\right]$")
	
	PNMI("$IC_{\gamma}(\mu_{1}-\mu_{2}) =$
	$\displaystyle = \left[ (\overline{x_{1}}-\overline{x_{2}}) \,\mp\, t_{n_{1}+n_{2}-2,\,1-\frac{\alpha}{2}}\, s \,\sqrt{\frac{1}{n_{1}} + \frac{1}{n_{2}}} \,\right]$")
	
	PNMIS("$\displaystyle s^2 = \frac{(n_{1}-1)\,s_{1}^{2} + (n_{2}-1)\,s_{2}^{2}}{n_{1}+n_{2}-2}$")
	
	PNMNV("$IC_{\gamma}(\mu_{1}-\mu_{2}) =$
	$\displaystyle = \left[ (\overline{x_{1}}-\overline{x_{2}}) \,\mp\, t_{\nu,\,1-\frac{\alpha}{2}} \sqrt{\frac{s_{1}^{2}}{n_{1}} + \frac{s_{2}^{2}}{n_{2}}} \,\right]$")
	
	PNMNVN("$\displaystyle \nu = \frac{\left( \frac{S_{1}^{2}}{n_{1}} + \frac{S_{2}^{2}}{n_{2}} \right)^{2}}{\frac{\left( \frac{S_{1}^{2}}{n_{1}} \right)^{2}}{n_{1}-1} + \frac{\left( \frac{S_{2}^{2}}{n_{2}} \right)^{2}}{n_{2}-1} }$
	(arrodonir)")

	MI --> PN
	PN --> PNM
	PNM -- "$\sigma_1$ i $\sigma_2$<br>conegudes$\,$" --> PNMV
	PNM -- "podem suposar<br>$\sigma_1=\sigma_2$" --> PNMI
	PNMI -- "on" --> PNMIS
	PNM -- "$\sigma_1$ i $\sigma_2$<br>desconegudes$\,$" --> PNMNV
	PNMNV -- "on" --> PNMNVN

	PNV("IC de $\frac{\sigma_2}{\sigma_1}$")
	
	PNVV("$IC_{\gamma}\left( \frac{\sigma_{2}^{2}}{\sigma_{1}^{2}} \right) =$
	$\displaystyle = \left[ F_{n_{1}-1,\,n_{2}-1,\,\frac{\alpha}{2}} \frac{s_{2}^{2}}{s_{1}^{2}} ,\quad F_{n_{1}-1,\,n_{2}-1,\,1-\frac{\alpha}{2}} \frac{s_{2}^{2}}{s_{1}^{2}} \right]$")

	PNVVV("IC no simètric en $\frac{s_{2}^{2}}{s_{1}^{2}}$
	però sí que el conté")

	PN --> PNV
	PNV --> PNVV
	PNVV --> PNVVV

	PB("Poblacions binàries
	de mida $n_1$ i $n_2$
	$X^{(1)}\sim B(p_1)$
	$X^{(2)}\sim B(p_2)$")

	PBp("IC de $p_1-p_2$")

	PBpp("$IC_{\gamma}(p_{1}-p_{2}) =$
	$\displaystyle = \left[ (\hat{\hat{p_{1}}}-\hat{\hat{p_{2}}}) \,\mp\, z_{1-\frac{\alpha}{2}} \sqrt{\bar{\bar{p}}(1-\bar{\bar{p}})\left( \frac{1}{n_{1}} + \frac{1}{n_{2}} \right)} \right]$")

	PBppp("$\displaystyle\bar{\bar{p}}=\frac{n_{1}\hat{\hat{p_{1}}}+n_{2}\hat{\hat{p_{2}}}}{n_{1}+n_{2}}$")

	MI --> PB
	PB --> PBp
	PBp -- "$n_{i}\hat{\hat{p_{i}}}\,(1-\hat{\hat{p_{i}}}) \geq 18$" --> PBpp
	PBpp -- "on" --> PBppp

	ALT("**Altres** poblacions
	$X^{(1)}$ de mida $n_1$
	$X^{(2)}$ de mida $n_2$")

	ALTM("IC de $\mu_1-\mu_2$")
	ALTMass("$X\sim N(0,1)$")
	
	ALTMassV("$IC_{\gamma}(\mu_{1}-\mu_{2}) =$
	$\displaystyle = \left[ (\overline{x_{1}}-\overline{x_{2}}) \,\mp\, z_{1-\frac{\alpha}{2}} \sqrt{\frac{\sigma_{1}^{2}}{n_{1}} + \frac{\sigma_{2}^{2}}{n_{2}}} \,\right]$")
	
	ALTMassI("$IC_{\gamma}(\mu_{1}-\mu_{2}) =$
	$\displaystyle = \left[ (\overline{x_{1}}-\overline{x_{2}}) \,\mp\, z_{1-\frac{\alpha}{2}}\, s \,\sqrt{\frac{1}{n_{1}} + \frac{1}{n_{2}}} \,\right]$")

	ALTMassIS("$s^2 = \frac{(n_{1}-1)\,S_{1}^{2} + (n_{2}-1)\,S_{2}^{2}}{n_{1}+n_{2}-2}$")
	
	ALTMassNV("$IC_{\gamma}(\mu_{1}-\mu_{2}) =$
	$\displaystyle = \left[ (\overline{x_{1}}-\overline{x_{2}}) \,\mp\, z_{1-\frac{\alpha}{2}} \sqrt{\frac{s_{1}^{2}}{n_{1}} + \frac{s_{2}^{2}}{n_{2}}} \,\right]$")

	MI --> ALT
	ALT --> ALTM
	ALTM -- "$n_i\geq 30$" --> ALTMass
	ALTMass -- "$\sigma_1$ i $\sigma_2$<br>conegudes$\,$" --> ALTMassV
	ALTMass -- "podem suposar<br>$\sigma_1=\sigma_2$" --> ALTMassI
	ALTMassI -- "on" --> ALTMassIS
	ALTMass -- "$\sigma_1$ i $\sigma_2$<br>desconegudes$\,$" --> ALTMassNV

	MA("Mostres **aparellades**")

	APN("Poblacions **normals**
	de mida $n$
	$X^{(1)}\sim N(\mu_1,\sigma_1^2)$
	$X^{(2)}\sim N(\mu_2,\sigma_2^2)$
	$D_i = X_i^{(1)} - X_i^{(2)}$
	$D \sim N(\mu,\sigma^2)$")

	APNM("IC de $\mu=\mu_1-\mu_2$")

	APNMM("$\displaystyle IC_{\gamma}(\mu) = \left[ \overline{d} \,\mp\, t_{n-1,\,1-\frac{\alpha}{2}} \,\frac{s_{D}}{\sqrt{n}} \right]$")

	MA --> APN
	APN --> APNM
	APNM --> APNMM
```

---
## 3. Apèndix

#### 3.1. **Paràmetres**

```ad-not
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

```ad-not
title: $X$ qualitativa dicotòmica o binària

==**Proporció** poblacional==:
> $\boldsymbol{p} = \mu = \text{E}(X)$
```

---
#### 3.2. **Estadístics**

````ad-not
title: **Mitjana** mostral

$$\boldsymbol{\overline{X}} = \frac{1}{n}\sum\limits_{i=1}^{n} X_i$$

```ad-prop
title: Propietats

**En general:**
+ $\mu_{\overline{X}} = \text{E}(\overline{X}) = \mu$
+ $\displaystyle \sigma^{2}_{\overline{X}} = \text{Var}(\overline{X}) = \frac{\sigma^2}{n}$

**Per $\boldsymbol{X\sim B(p)}$:**
+ $\sigma_{n\,\overline{X}} = \sqrt{n\,p\,(1-p)}$

**Per $\boldsymbol{X\sim N(\mu,\sigma^{2})}$:**
+ $\displaystyle\overline{X}\sim N\left(\mu,\frac{\sigma^2}{n}\right)$
```
````

````ad-not
title: **Variància** mostral (corregida)

$$\boldsymbol{S^2} = \frac{1}{n-1} \sum\limits_{i=1}^n (X_i-\overline{X})^2$$

```ad-prop
title: Propietats
+ $\text{E}(S^2) = \sigma^2$
```
````

````ad-not
title: **Variància** mostral (sense corregir)

$$\boldsymbol{S'^2} = \frac{1}{n}\sum\limits_{i=1}^n(X_i-\overline{X})^2$$

```ad-prop
title: Propietats
+ $\text{E}(S'^2) = \frac{n-1}{n}\sigma^2$
```
````

````ad-not
title: **Quasivariància** mostral

Es fa servir en el rar cas de conèixer la mitjana poblacional $\mu$ de $X$:
$$\boldsymbol{\widetilde{S}^2} = \frac{1}{n}\sum\limits_{i=1}^n (X_i-\mu)^2$$

```ad-prop
title: Propietats
+ $\text{E}(\widetilde{S}^2) = \sigma^2$
```
````

