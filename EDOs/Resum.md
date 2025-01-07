## EDOs de **primer** ordre

```ad-met
title: EDOs **lineals**

> $y'(x)+a(x)y(x)=b(x)$

$$y(x) = \left( \int e^{\int a(x)\,dx}\, b(x)\, dx \right) e^{-\int a(x)dx}$$
```

```ad-met
title: EDOs **homogènies**

> $\displaystyle y'=f\left(\frac{y}{x}\right)$

1. Canvi de variable $\displaystyle u(x)=\frac{y}{x}$
2. Queda la EDO $\displaystyle u'(x) = \frac{f(u(x))-u(x)}{x}$
3. Resoldre per variables separades
```

```ad-graph
title: **Esquema de fase** (EDOs autònomes)

> $y' = f(y)$

1. Buscar **equilibris** tal que $f(y)=0$
2. Calcular $f(y)$ amb $y$ entre els equilibris per deduir el seu creixement
3. Dibuixar
```

```ad-prop
title: Transformada de **Laplace**

$$ F(s) := \boldsymbol{\mathcal{L}[f](s)} = \int_{0}^{\infty} e^{-st} f(t)\, dt $$

+ $\mathcal{L}[\alpha f + \beta g](s) = \alpha\mathcal{L}[f](s) + \beta\mathcal{L}[g](s)$
+ $\mathcal{L}[f'](s) = -f(0) + s \mathcal{L}[f](s)$
+ És injectiva, i $\mathcal{L}^{-1}$ també és lineal.
+ $\displaystyle\mathcal{L}[t\,f(t)](s) = -\frac{d\,\mathcal{L}[f(t)]}{ds}$

```

<div style="page-break-after: always;"></div>

## EDOs d'**ordre superior**

```ad-prop
title: Determinant **Wronksià**

> EDO lineal homogènia
$$y''+a(x)y'(x)+b(x)y(x)=0$$
> amb solucions $y_{1}(x)$ i $y_{2}(x)$

$$ \boldsymbol{W(y_{1},y_{2})(x)} = \det \begin{pmatrix}
y_{1}(x) & y_{2}(x) \\
y_{1}'(x) & y_{2}'(x)
\end{pmatrix} $$

+ $W(y_{1},y_{2})$ és o bé $0$ o bé $\neq 0$ per tot $x$
+ $W(y_{1},y_{2})\neq 0$ $\iff$ $y_{1},y_{2}$ és un ==conjunt fonamenal de solucions==
```

```ad-met
title: EDOs de **coeficients constants**

>  $y''(x) + by'(x) + cy = q(x)$

1. Calcular arrels del **polinomi característic** $\lambda^{2}+b\lambda+c$
2. Conjunt fonamental de solucions:

	| Arrels reals diferents | Arrel real doble | Arrels complexes |
	|:---:|:---:|:---:|
	| $\lambda_{1},\lambda_{2}$ | $\lambda$ | $\lambda=\alpha\pm\beta i$ |
	| $y_{1}(x) = C_{1} e^{\lambda_{1}x}$ | $y_{1}(x) = C_{1}e^{\lambda x}$ | $y_{h}(x) = C_{1}e^{\alpha x}\cos(\beta x)$ |
	| $y_{2}(x) = C_{2} e^{\lambda_{2}x}$ | $y_{2}(x) = C_{2}xe^{\lambda x}$ | $y_{2}(x) = C_{2}e^{\alpha x}\sin(\beta x)$ |

3. $y_{h}(x) = y_{1}(x) + y_{2}(x)$
4. Buscar $y_{p}(x)$ de la mateixa forma que $q(x)$ amb coeficients arbitraris
	+ Si $y_{p}$ és solució de $y_{h}$, multiplicar-la per $x$
5. Substituir $y_{p}$ a l'equació original i determinar coeficients
6. $y(x) = y_{h}(x) + y_{p}(x)$
```
