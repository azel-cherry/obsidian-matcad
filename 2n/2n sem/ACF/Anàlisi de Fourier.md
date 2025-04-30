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