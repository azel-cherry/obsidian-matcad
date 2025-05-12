## Preàmbul

````ad-def
title: Sèrie *de Fourier*

Una ==sèrie de Fourier== és
$$ f(z) = \boxed{\,\sum_{n=0}^{\infty} \hat{f}(n)\,z^{n} + \sum_{n=0}^{\infty} \hat{f}(-n)\,\overline{z}^{n}\,} \,,$$
amb $\hat{f}(n)$ el ==coeficient de Fourier== $n$-èssim, que ve donat per
$$ \hat{f}(n) = \boxed{\,\frac{1}{2\pi i} \int_{-\pi}^{\pi} f(\theta)e^{-in\theta}d\theta\,} \,.$$

```ad-not
Particularment, per $z=e^{i\theta}$ tenim:
$$ f(e^{i\theta}) = \sum_{n\in \mathbb{Z}} \hat{f}(n)\,e^{in\theta} \,.$$
```

Expressades en termes de sinus i cosinus, una sèrie de Fourier és
$$ f(\theta) \sim \boxed{\,\frac{a_{0}}{2} + \sum_{n=1}^{\infty}(a_{n}\cos(n\theta)+b_{n}\sin(n\theta))\,} \,,$$
amb
$$ a_{n}(f) = \boxed{\,\frac{1}{\pi} \int_{-\pi}^{\pi} f(\theta)\cos(n\theta)\,d\theta\,}\,,\quad b_{n}(f) = \boxed{\,\frac{1}{\pi} \int_{-\pi}^{\pi} f(\theta)\sin(n\theta)\,d\theta\,} \,.$$
````



````ad-def
title: Funció *$L$-periòdica*

Una funció $f:\mathbb{R}\to \mathbb{C}$ és ==$L$-periòdica== si
$$ f(x+L) = f(x) $$
per tot $x \in \mathbb{R}$.

```ad-def
title: *$L$-sèrie de Fourier*

La ==$L$-sèrie de Fourier== és
$$ f(\theta) \sim \sum_{n\in \mathbb{Z}} \hat{f}^{L}(n)\,e^{\frac{2\pi in\theta}{L}} \,,$$
amb $\hat{f}^{L}$ ==$L$-coeficient de Fourier==:
$$ \hat{f}^L(\theta) = \frac{1}{L} \int_{a}^{b} f(\theta)\,e^{-\frac{2\pi in\theta}{L}}d\theta $$
```
````


---
## **Convergència** puntual

```ad-def
title: Polinomi *trigonomètric*

Un ==polinomi trigonomètric== d'odre $M$ és
$$ f(\theta) = \sum_{n=-M}^{M} c_{n}\,e^{in\theta} $$
amb $c_{n}\in \mathbb{C}$ per $n\in \mathbb{Z}$ .
```

```ad-prop
title: **Suma parcial** de Fourier

L'$N$-èssima suma parcial de Fourier és
$$ S_{N}f(x) = \boxed{\,\sum_{n=-N}^{N} \hat{f}(n)\,e^{in\theta}\,} \,.$$
```


#### **Suavitat** i convergència

Veurem que, si la funció és prou suau, aleshores els coeficients  de Fourier decauen i podem garantir la convergència de la sèrie.

A la vegada, el decaïment dels coeficients implica un cert grau de suavitat.

```ad-not
title: Notació

+ Denotem com $\mathbb{T}$ a la circumferència unitat
$$ \mathbb{T} = \{z\in \mathbb{C}\mid|z|=1\} = \{z=e^{i\theta} \mid -\pi\leq\theta<\pi\} \,.$$
+ $||f||_{L'(\mathbb{T})} := \displaystyle\frac{1}{2\pi} \int_{-\pi}^{\pi}|f|\,d\theta$
+ $Sf := \displaystyle\lim_{N\to\infty}S_{N}f$
+ $a \,^{\longrightarrow}_{\longrightarrow}\,b \implies a$ convergeix uniformement en $b$ 
```

`````ad-prop
title: Preliminars

```ad-prop
title: Proposicions
Sigui $f\in C^{k}(\mathbb{T})$:
+ Si $k\geq1$, aleshores $$\widehat{f^{(k)}}(n) = (in)^{k}\hat{f}(n)\,.$$
+ Per $n\neq0$ :
	$$ |\hat{f}(n)| \leq \frac{|\widehat{f^{(k)}}(n)|}{|n|^{k}} \leq \frac{||f^{(k)}||_{L'(\mathbb{T})}}{|n|^{k}}  \,.$$
```

```ad-teor
> Sigui $f\in L^{1}(\mathbb{T})$ tal que $\sum |\hat{f}(n)|<\infty$.

Aleshores $S_{N}f\,^{\longrightarrow}_{\longrightarrow}\,Sf \in C(\mathbb{T})$.
```

```ad-prop
> Sigui $\{a_{n}\}_{n=1}^{\infty}$ una successió de nombres reals convergent.

Aleshres la successió de les seves mitjanes
$$ \lim_{n\to\infty} \frac{a_{1}+\dots+a_{n}}{n} = \lim_{n\to\infty}a_{n} \,.$$
```
`````

```ad-teor
> Sigui $f\in C(\mathbb{T})$ amb $\sum|\hat{f}(n)|<\infty$.

Aleshores
$$ \lim_{N\to\infty} S_{N}f(\theta)=f(\theta) $$
i la convergència és uniforme en $\mathbb{T}$.
```

```ad-teor
> Sigui $f\in C^{1}(\mathbb{T})$.

Aleshores la sèrie de Fourier de $f$ convergeix uniformement a $f$ en $\mathbb{T}$.
```


#### Suavitat i **decaïment dels coeficients**

````ad-prop
title: Lemes de **Riemann-Lebesgue**

+ **Per funcions contínues:** Sigui $f\in C(\mathbb{T})$, aleshores
	$$\{\hat{f}(n)\}_{n\in Z}\in C_{0}(\mathbb{Z})\,.$$
+ **Per funcions integrables:** Sigui $f\in L^{1}(\mathbb{T})$, aleshores
	$$\{\hat{f}(n)\}_{n\in \mathbb{Z}}\in C_{0}(\mathbb{Z})\,.$$
````


#### **Teoremes** importants

`````ad-teor
title: Teorema de **Jordan**

```ad-def
title: Funció de *variació fitada*

Una funció $f$ és de ==variació fitada== si
$$ V(f) := \sup_{P} \sum_{n=1}^{N} |f(\theta_{n})-f(\theta_{n-1})| < \infty $$
amb $P=\{\theta_{n}\}_{n=0}^{N}$ tal que
$$ -\pi = \theta_{0} < \theta_{1} < \dots < \theta_{N} = \pi \,.$$
```

> Sigui $f$ una funció de variació fitada.

Aleshores la sèrie de Fourier convergeix a
$$ \lim_{N\to\infty} S_{N}f(\theta) = \frac{1}{2}\,[f(\theta^+) + f(\theta^-)] $$
a tot arreu. La convergència és uniforme en intervals tancats continus.

```ad-not
Això implica que la sèrie de Fourier convergeix a $f(\theta)$ als punts de continuïtat $\theta$ si $f$ és de variació acotada.
```
`````


---
## Apèndix

```ad-prop
title: Identitats **trigonomètriques**

+ $\sin(\alpha\pm\beta) = \sin(\alpha)\cos(\beta)\pm\cos(\alpha)\sin(\beta)$
	+ $\sin(2\alpha)=2\sin(\alpha)\cos(\alpha)$
+ $\cos(\alpha\pm\beta)=\cos(\alpha)\cos(\beta)\mp\sin(\alpha)\sin(\beta)$
	+ $\cos(2\alpha) = \cos^{2}(\alpha)-\sin^{2}(\alpha)$
```