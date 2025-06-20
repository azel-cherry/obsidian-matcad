## 1. Anàlisi **complexa**

#### 1.1. Sèries de **Laurent**

```ad-def
title: **Desenvolupaments en sèrie** (centrats en 0)

+ ~={green}$\frac{1}{1-z}$=~ $= \displaystyle\sum_{n=0}^{\infty}z^{n}=1+z+z^{2}+\dots$
+ ~={green}$e^{z}$=~ $=\displaystyle\sum_{n=0}^{\infty} \frac{z^{n}}{n!}=1+z+\frac{z^{2}}{2!}+\dots$
+ ~={green}$\sin(z)$=~ $= \displaystyle\sum_{n=0}^{\infty} (-1)^{n}\frac{z^{2n+1}}{(2n+1)!}=z-\frac{z^{3}}{3!}+\frac{z^{5}}{5!}-\dots$
+ ~={green}$\cos(z)$=~ $= \displaystyle\sum_{n=0}^{\infty} (-1)^{n}\frac{z^{2n}}{(2n)!}=1-\frac{z^{2}}{2!}+\frac{z^{4}}{4!}-\dots$
```

+ La **derivada** d'una sèrie de potències té el **mateix radi de convergència**
+ $f:\Omega\to \mathbb{C}$ es pot desenvolupar en sèrie de potències en $|z-a|<R_{a}$ amb $\boxed{\,R_{a}=\text{dist}(\,a,\mathbb{C}\setminus\Omega)\,}$

#### 1.2. **Singularitats** i teorema dels **Residus**

| Singularitat $\boldsymbol{z_{0}}$       |                 ~={green}Evitable=~                  |          ~={green}Pol d'ordre $\boldsymbol m$=~          |      ~={green}Essencial=~      |
| -------------------------- |:----------------------------------------------------:|:--------------------------------------------------------:|:------------------------------:|
| **Definició**              | $\displaystyle\lim_{z\to z_{0}} (z-z_{0})\,f(z) = 0$ | $\displaystyle\lim_{z\to z_{0}} \mid f(z)\mid\,= \infty$ |           otherwise            |
| **Coeficients de Laurent** |           $c_{-n}=0 \quad\forall\,n\geq1$            |      $c_{-n}=0\,,\,c_{-m}\neq0 \quad \forall\, n>m$      | $c_{-n}\neq0\quad\forall\,n>0$ |
| **A l'infinit**             |              $f(\infty)\in \mathbb{C}$               |                    $f(\infty)=\infty$                    |    $\not\exists\,f(\infty)$    |
| **Residu**                 |                         $0$                          |      $\displaystyle\frac{g^{(m-1)}(z_{0})}{(m-1)!}$ ~={pink}(*)=~      |  :(                              |

~={pink}(*)=~ $f(z)=\displaystyle\frac{1}{(z-z_{0})^{m}}\,g(z)$

+  El residu d'una singularitat $z_{0}$ sempre és el coeficient de Laurent $c_{-1}$.

```ad-teor
title: Teorema dels **Residus**

> Conjunt finit de singularitats $\{a_{1},\dots,a_{n}\}$ dins d'una corba tancada simple $\gamma$

$$ \int_{\gamma} f(z)\,dz = 2\pi i \sum_{i=1}^{n} \mathrm{Res}(f,a_{i}) \,.$$
```


---
## Anàlisi de **Fourier**


|                   |                                                                                    Coeficients de Fourier                                                                                     |                                                Sèrie de Fourier                                                 |
| ----------------- |:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:---------------------------------------------------------------------------------------------------------------:|
| **Original**      |                                                  $\hat{f}(n) \displaystyle=\frac{1}{2\pi} \int_{-\pi}^{\pi} f(\theta)e^{-in\theta}d\theta$                                                  | $f(z) =\displaystyle \sum_{n=0}^{\infty} \hat{f}(n)\,z^{n} + \sum_{n=0}^{\infty} \hat{f}(-n)\,\overline{z}^{n}$ |
| **Sinus/cosinus** | $\begin{align} a_{n}(f) &= \frac{1}{\pi} \int_{-\pi}^{\pi} f(\theta)\cos(n\theta)\,d\theta \\[0.5em] b_{n}(f) &= \frac{1}{\pi} \int_{-\pi}^{\pi} f(\theta)\sin(n\theta)\,d\theta \end{align}$ | $\displaystyle f(\theta) \sim\frac{a_{0}}{2} + \sum_{n=1}^{\infty}(a_{n}\cos(n\theta)+b_{n}\sin(n\theta))$                                                                                                                |

```ad-not
+ **Per** $\boldsymbol{z=e^{i\theta}}:$ $\,\,\displaystyle f(e^{i\theta}) = \sum_{n\in \mathbb{Z}} \hat{f}(n)\,e^{in\theta}$
+ $\begin{cases}a_{n}=0&\text{si }f\text{ senar}\\b_{n}=0&\text{si }f\text{ parell}\end{cases}$
+ $\widehat{f}(n) = \begin{cases}\displaystyle\frac{a_{n}-ib_{n}}{2} &\text{si }n>0 \\\displaystyle \frac{a_{-n}+ib_{-n}}{2} &\text{si }n<0\end{cases}\,\,$ amb $\,\widehat{f}(0) = \displaystyle\frac{a_{0}}{2}$
```

teorema de dirichlet (important)

