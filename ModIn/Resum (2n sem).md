## **Tests d'hipòtesis**

| Hipòtesi que ens quedem $\rightarrow$<br>Hipòtesi certa $\downarrow$ |                     $H_{0}$                      |                     $H_{1}$                      |
|:--------------------------------------------------------------------:|:------------------------------------------------:|:------------------------------------------------:|
|                               $H_{0}$                                |                     No error                     | ~={pink}Error tipus I=~ ~={pink_low}($\alpha$)=~ |
|                               $H_{1}$                                | ~={pink}Error tipus II=~ ~={pink_low}($\beta$)=~ |                     No error                     |

#### **Una** població

| Unilateral dret                                                                                         | Unilateral esquerre                                                                                       | Bilateral                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| $\displaystyle RS \begin{cases} H_{0} : \theta = \theta_{0} \\ H_{1} : \theta > \theta_{0} \end{cases}$ | $\,\displaystyle LS \begin{cases} H_{0} : \theta = \theta_{0} \\ H_{1} : \theta < \theta_{0} \end{cases}$ | $\,\displaystyle TS \begin{cases} H_{0} : \theta = \theta_{0} \\ H_{1} : \theta \neq \theta_{0} \end{cases}$ |

```mehrmaid
graph LR;
N("Població **normal**
	de mida $n$
	$X\sim N(\mu,\sigma^{2})$")
NM("Per $\mu\,\,$")

NMD("$\displaystyle Z=\frac{(\overline{X}-\mu_{0})\sqrt{n}}{\sigma}\sim N(0,1)$")
NMDRS("$RR=\{z>z_{1-\alpha}\}$")
NMDLS("$RR=\{z<-z_{1-\alpha}\}$")
NMDOSN("$\displaystyle n=\left\lceil \left( \frac{(z_{1-\alpha}+z_{1-\beta})\,\sigma}{\mu_{1}-\mu_{0}} \right)^{2} \right\rceil$
	on $\mu_1$ és un valor concret de $\mu\,\,$")
NMDTS("$RR=\{|z|>z_{1-\frac{\alpha}{2}}\}$")
NMDTSN("$\displaystyle n=\left\lceil \left( \frac{( z_{1-\frac{\alpha}{2}}+z_{1-\beta} )\,\sigma}{\mu_{1}-\mu_{0}} \right)^{2} \right\rceil$
	on $\mu_1$ és un valor concret de $\mu\,\,$")

N --> NM
NM -- "$\sigma$ coneguda" --> NMD
NMD -- "RS" --> NMDRS
NMDRS --> NMDOSN
NMD -- "LS" --> NMDLS
NMDLS --> NMDOSN
NMD -- "TS" --> NMDTS
NMDTS --> NMDTSN

NMND("$\displaystyle T=\frac{(\overline{X}-\mu_{0})\sqrt{n}}{S}\sim t_{n-1}$")
NMNDRS("$RR=\{t>t_{n-1,1-\alpha}\}$")
NMNDLS("$RR=\{t<-t_{n-1,1-\alpha}\}$")
NMNDTS("$RR=\{|t|>t_{n-1,1-\frac{\alpha}{2}}\}$")

NM -- "$\sigma$ desconeguda" --> NMND
NMND -- "RS" --> NMNDRS
NMND -- "LS" --> NMNDLS
NMND -- "TS" --> NMNDTS

NV("Per $\sigma^2\,$")
NVM("$\displaystyle\Psi=\frac{n \tilde{S}^2}{\sigma_{0}^{2}}\sim\chi^{2}_{n}$")
NVMRS("$RR=\{\phi>\chi^2_{n,1-\alpha}\}$")
NVMLS("$RR=\{\phi<\chi^2_{n,\alpha}\}$")
NVMTS("$RR=\{\phi<\chi^2_{n,\frac{\alpha}{2}}\}\cup\{\phi>\chi^2_{n,1-\frac{\alpha}{2}}\}$")

N --> NV
NV -- "$\mu$ coneguda" --> NVM
NVM -- "RS" --> NVMRS
NVM -- "LS" --> NVMLS
NVM -- "TS" --> NVMTS

NVNM("$\displaystyle\Psi=\frac{(n-1)S^{2}}{\sigma_{0}^{2}}\sim\chi^{2}_{n-1}$")
NVNMRS("$RR=\{\phi>\chi^2_{n-1,1-\alpha}\}$")
NVNMLS("$RR=\{\phi<\chi^2_{n-1,\alpha}\}$")
NVNMTS("$RR=\{\phi<\chi^2_{n-1,\frac{\alpha}{2}}\}\cup\{\phi>\chi^2_{n-1,1-\frac{\alpha}{2}}\}$")

NV -- "$\mu$ desconeguda" --> NVNM
NVNM -- "RS" --> NVNMRS
NVNM -- "LS" --> NVNMLS
NVNM -- "TS" --> NVNMTS

B("Població **binària**$\,$
	de mida $n$
	$X\sim B(p)$")
BP("Per $p\,$")
BPA("$\displaystyle Z=\frac{\hat{p}-p_{0}}{\sqrt{\frac{p_{0}(1-p_{0})}{n}}}\approx N(0,1)$
	on $\hat{p}$ és la mitjana mostral$\,\,$")
BPARS("$RR=\{z>z_{1-\alpha}\}$")
BPALS("$RR=\{z<-z_{1-\alpha}\}$")
BPATS("$RR=\{ |z|>z_{1-\frac{\alpha}{2}}\}$")

B --> BP
BP -- "$\,n\,p_0(1-p_0)>18\,$" --> BPA
BPA -- "RS" --> BPARS
BPA -- "LS" --> BPALS
BPA -- "TS" --> BPATS

Q("**Qualsevol** població$\,$
	$X$ de mida $n$")
QM("Per $\mu\,$")
QMA("$\displaystyle Z=\frac{(\overline{X}-\mu_{0})\sqrt{n}}{\sigma}\approx N(0,1)$")
QMARS("$RR=\{z>z_{1-\alpha}\}$")
QMALS("$RR=\{z<-z_{1-\alpha}\}$")
QMATS("$RR=\{ |z|>z_{1-\frac{\alpha}{2}}\}$")

Q --> QM
QM -- "$\,n>30\,$" --> QMA
QMA -- "RS" --> QMARS
QMA -- "LS" --> QMALS
QMA -- "TS" --> QMATS
```


---
#### **Comparació** de poblacions

| Unilateral dret                                                                                         | Unilateral esquerre                                                                                       | Bilateral                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| $\displaystyle RS \begin{cases} H_{0} : \theta_{1} = \theta_{2} \\ H_{1} : \theta_{1} > \theta_{2} \end{cases}$ | $\,\displaystyle LS \begin{cases} H_{0} : \theta_{1} = \theta_{2} \\ H_{1} : \theta_{1} < \theta_{2} \end{cases}$ | $\,\displaystyle TS \begin{cases} H_{0} : \theta_{1} = \theta_{2} \\ H_{1} : \theta_{1} \neq \theta_{2} \end{cases}$ |


###### Mostres **independents**

```mehrmaid
graph LR;

N("Poblacions **normals**
	de mides $n_1$ i $n_2$
	$X^{(1)}\sim N(\mu_1,\sigma_1^2)$
	$X^{(2)}\sim N(\mu_2,\sigma_2^2)$")
NM("Per $\mu\,$")
NMV("$\displaystyle Z=\frac{\overline{X_{1}}-\overline{X_{2}}}{\sqrt{\frac{\sigma_{1}^{2}}{n_{1}}+\frac{\sigma_{2}^{2}}{n_{2}}}}\sim N(0,1)$")
NMVRS("$RR = \{ z>z_{1-\alpha} \}$")
NMVLS("$RR = \{ z<-z_{1-\alpha} \}$")
NMVTS("$RR = \{ |z|>z_{1-\frac{\alpha}{2}} \}$")

N --> NM
NM -- "$\sigma_1,\sigma_2$ conegudes" --> NMV
NMV -- "RS" --> NMVRS
NMV -- "LS" --> NMVLS
NMV -- "TS" --> NMVTS

NMiV("$\displaystyle T=\frac{\overline{X_{1}}-\overline{X_{2}}}{S\sqrt{\frac{1}{n_{1}}+\frac{1}{n_{2}}}}\sim t_{n_{1}+n_{2}-2}$")
NMiVRS("$RR = \{ t>t_{n_{1}+n_{2}-2,1-\alpha} \}$")
NMiVLS("$RR = \{ t<-t_{n_{1}+n_{2}-2,1-\alpha} \}$")
NMiVTS("$RR = \{ |t|>t_{n_{1}+n_{2}-2,1-\frac{\alpha}{2}} \}$")

NM -- "considerem $\sigma_1=\sigma_2$" --> NMiV
NMiV -- "RS" --> NMiVRS
NMiV -- "LS" --> NMiVLS
NMiV -- "TS" --> NMiVTS

NMnV("$\displaystyle T=\frac{\overline{X_{1}}-\overline{X_{2}}}{\sqrt{\frac{S_{1}^{2}}{n_{1}}+\frac{S_{2}^{2}}{n_{2}}}}\approx t_{\nu}$
	
	on $\displaystyle\nu = \left\lceil \frac{\left( \frac{S_{1}^{2}}{n_{1}}+\frac{S_{2}^{2}}{n_{2}} \right)^{2}}{\frac{\left( \frac{S_{1}^{2}}{n_{1}} \right)^{2}}{n_{1}-1}+\frac{\left( \frac{S_{2}^{2}}{n_{2}} \right)^{2}}{n_{2}-1}} \right\rceil$")
NMnVRS("$RR = \{ t>t_{\nu,1-\alpha} \}$")
NMnVLS("$RR = \{ t<-t_{\nu,1-\alpha} \}$")
NMnVTS("$RR = \{ |t|>t_{\nu,1-\frac{\alpha}{2}} \}$")

NM -- "considerem $\sigma_1\neq\sigma_2$" --> NMnV
NMnV -- "RS" --> NMnVRS
NMnV -- "LS" --> NMnVLS
NMnV -- "TS" --> NMnVTS

NV("Per $\sigma\,$")
NVV("$\displaystyle F=\frac{S_{1}^{2}}{S_{2}^{2}}\sim F_{n_{1}-1,n_{2}-1}$")
NVRS("$RR = \{ f>F_{n_{1}-1,n_{2}-1,1-\alpha} \}$")
NVLS("$RR = \{ f<F_{n_{1}-1,n_{2}-1,\alpha} \}$")
NVTS("$RR = \{ f<F_{n_{1}-1,n_{2}-1,\frac{\alpha}{2}} \} \cup \{ f>F_{n_{1}-1,n_{2}-1,1-\frac{\alpha}{2}} \}$")

N --> NV
NV --> NVV
NVV -- "RS" --> NVRS
NVV -- "LS" --> NVLS
NVV -- "TS" --> NVTS

B("Poblacions binàries
	de mida $n_1$ i $n_2$
	$X^{(1)}\sim B(p_1)$
	$X^{(2)}\sim B(p_2)$")
BP("Per $p\,$")
BPP("$\displaystyle Z=\frac{\hat{p_{1}}-\hat{p_{2}}}{\sqrt{\hat{p}(1-\hat{p})\left( \frac{1}{n_{1}}+\frac{1}{n_{2}} \right)}}\approx N(0,1)$
	
	on $\displaystyle\hat{p} = \frac{n_{1}\hat{p_{1}}+n_{2}\hat{p_{2}}}{n_{1}+n_{2}}$")
BPRS("$RR = \{ z>z_{1-\alpha} \}$")
BPLS("$RR = \{ z<-z_{1-\alpha} \}$")
BPTS("$RR = \{ |z|>z_{1-\frac{\alpha}{2}} \}$")

B --> BP
BP -- "$\,n_{i}\hat{\hat{p_{i}}}(1-\hat{\hat{p_{i}}})\geq18\,$" --> BPP
BPP -- "RS" --> BPRS
BPP -- "LS" --> BPLS
BPP -- "TS" --> BPTS

A("**Altres** poblacions
	$X^{(1)}$ de mida $n_1$
	$X^{(2)}$ de mida $n_2$")
AM("Per $\mu\,\,$")
AMV("$\displaystyle Z=\frac{\overline{X_{1}}-\overline{X_{2}}}{\sqrt{\frac{\sigma_{1}^{2}}{n_{1}}+\frac{\sigma_{2}^{2}}{n_{2}}}}\approx N(0,1)$")
AMnV("$\displaystyle Z=\frac{\overline{X_{1}}-\overline{X_{2}}}{\sqrt{\frac{S_{1}^{2}}{n_{1}}+\frac{S_{2}^{2}}{n_{2}}}}\approx N(0,1)$")
AMRS("$RR = \{ z>z_{1-\alpha} \}$")
AMLS("$RR = \{ z<-z_{1-\alpha} \}$")
AMTS("$RR = \{ |z|>z_{1-\frac{\alpha}{2}} \}$")
AMnRS("$RR = \{ z>z_{1-\alpha} \}$")
AMnLS("$RR = \{ z<-z_{1-\alpha} \}$")
AMnTS("$RR = \{ |z|>z_{1-\frac{\alpha}{2}} \}$")

A --> AM
AM -- "$n_i\geq30$
	$\sigma$ coneguda" --> AMV
AMV -- "RS" --> AMRS
AMV -- "LS" --> AMLS
AMV -- "TS" --> AMTS
AM -- "$n_i\geq30$
	$\sigma$ desconeguda" --> AMnV
AMnV -- "RS" --> AMnRS
AMnV -- "LS" --> AMnLS
AMnV -- "TS" --> AMnTS
```


###### Mostres **aparellades**

```mehrmaid
graph LR;

N("Poblacions **normals**
	de mida $n$
	$X^{(1)}\sim N(\mu_1,\sigma_1^2)$
	$X^{(2)}\sim N(\mu_2,\sigma_2^2)$
	$D_i = X_i^{(1)} - X_i^{(2)}$
	$D \sim N(\mu,\sigma^2)$")
NM("Per $\mu\,$")
NMM("$\displaystyle T=\frac{\overline{d}\sqrt{n}}{S_{d}}\sim t_{n-1}$")
NMRS("$RR = \{ t>t_{n-1,1-\alpha} \}$")
NMLS("$RR = \{ t<-t_{n-1,1-\alpha} \}$")
NMTS("$RR = \{ |t|>t_{n-1,1-\frac{\alpha}{2}} \}$")

N --> NM
NM --> NMM
NMM -- "RS" --> NMRS
NMM -- "LS" --> NMLS
NMM -- "TS" --> NMTS

A("**Altres** poblacions
	de mida $n$
	$X^{(1)},X^{(2)}$
	$D_i = X_i^{(1)} - X_i^{(2)}$")
AM("Per $\mu\,$")
AMM("$\displaystyle T=\frac{\overline{d}\sqrt{n}}{S_{d}}\approx N(0,1)$")
AMRS("$RR = \{ t>t_{n-1,1-\alpha} \}$")
AMLS("$RR = \{ t<-t_{n-1,1-\alpha} \}$")
AMTS("$RR = \{ |t|>t_{n-1,1-\frac{\alpha}{2}} \}$")

A --> AM
AM -- "$\,n\geq30\,$" --> AMM
AMM -- "RS" --> AMRS
AMM -- "LS" --> AMLS
AMM -- "TS" --> AMTS
```


---
## Apèndix

#### **Paràmetres**


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

$\,$
==**Proporció** poblacional==:
> $\boldsymbol{p} = \mu = \text{E}(X)$

---
#### **Estadístics**

==**Mitjana** mostral==: 
>
> $\displaystyle\boldsymbol{\overline{X}} = \frac{1}{n}\sum\limits_{i=1}^{n} X_i$
> 
> **Propietats:**
>
|                                                                  Qualsevol $\boldsymbol X$                                                                   |            $\boldsymbol{X\sim B(p)}$            |                $\boldsymbol{X\sim N(\mu,\sigma^{2})}$                |
|:------------------------------------------------------------------------------------------------------------------------------------------------------------:|:-----------------------------------------------:|:--------------------------------------------------------------------:|
| $\begin{align} \mu_{\overline{X}} &= \text{E}(\overline{X}) = \mu \\ \sigma^{2}_{\overline{X}} &= \text{Var}(\overline{X}) = \frac{\sigma^2}{n} \end{align}$ | $\sigma_{n\,\overline{X}} = \sqrt{n\,p\,(1-p)}$ | $\displaystyle\overline{X}\sim N\left(\mu,\frac{\sigma^2}{n}\right)$ |

$\,$
==**Variàncies** mostrals==:
>
|                | ~={green}Corregida=~ | ~={green}Sense corregir=~ | ~={green}Quasivariància=~ |
| -------------- |:---------:|:--------------:|:--------------:|
| **Estadístic** | $\displaystyle S^2 = \frac{1}{n-1} \sum\limits_{i=1}^n (X_i-\overline{X})^2 =$ | $\displaystyle S'^2 = \frac{1}{n}\sum\limits_{i=1}^n(X_i-\overline{X})^2$ | $\displaystyle\widetilde{S}^2 = \frac{1}{n}\sum\limits_{i=1}^n (X_i-\mu)^2$ |
| **Esperança**  | $\text{E}(S^2) = \sigma^2$ | $\displaystyle\text{E}(S'^2) = \frac{n-1}{n}\sigma^2$ | $\text{E}(\widetilde{S}^2) = \sigma^2$ |
> Nota: $\,\displaystyle\sum\limits_{i=1}^n (X_i-\overline{X})^2 = \sum_{i=1}^{n}Xi^{2}-\frac{n}{n-1}\overline{X}^{2}$

