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

