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


---
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
	| $y_{1}(x) = C_{1} e^{\lambda_{1}x}$ | $y_{1}(x) = C_{1}e^{\lambda x}$ | $y_{1}(x) = C_{1}e^{\alpha x}\cos(\beta x)$ |
	| $y_{2}(x) = C_{2} e^{\lambda_{2}x}$ | $y_{2}(x) = C_{2}xe^{\lambda x}$ | $y_{2}(x) = C_{2}e^{\alpha x}\sin(\beta x)$ |

3. $y_{h}(x) = y_{1}(x) + y_{2}(x)$
4. Buscar $y_{p}(x)$ de la següent forma:
	
	| $\boldsymbol{q(x)}$                                     | $\boldsymbol{p_{c}(x)}$          | $\boldsymbol{y_{p}(x)}$                                                    |
	| ------------------------------------------------------- | -------------------------------- | -------------------------------------------------------------------------- |
	| $p(x)\,e^{\alpha x}$                                    | $\alpha$ no és arrel             | $\tilde{p}(x)e^{\alpha x}$                                                 |
	| $p(x)\,e^{\alpha x}$                                    | $\alpha$ és arrel simple         | $x\,\tilde{p}(x)\,e^{\alpha x}$                                            |
	| $p(x)\,e^{\alpha x}$                                    | $\alpha$ es arrel doble          | $x^{2}\,\tilde{p}(x)\,e^{\alpha x}$                                        |
	| $e^{\alpha x}(c_{1}\cos\beta x+c_{2}\sin\beta x)$       | $\alpha\pm i\beta$ no son arrels | $e^{\alpha x}(A\cos\beta x+B\sin\beta x)$                                  |
	| $e^{\alpha x}(c_{1}\cos\beta x+c_{2}\sin\beta x)$       | $\alpha\pm i\beta$ son arrels    | $x\,e^{\alpha x}(A\cos\beta x+B\sin\beta x)$                               |
	| $e^{\alpha x}(p_{1}(x)\cos\beta x+p_{2}(x)\sin\beta x)$ | $\alpha\pm i\beta$ no son arrels | $e^{\alpha x}(\tilde{p}_{1}(x)\cos\beta x+\tilde{p}_{2}(x)\sin\beta x)$    |
	| $e^{\alpha x}(p_{1}(x)\cos\beta x+p_{2}(x)\sin\beta x)$ | $\alpha\pm i\beta$ son arrels    | $x\,e^{\alpha x}(\tilde{p}_{1}(x)\cos\beta x+\tilde{p}_{2}(x)\sin\beta x)$ |

1. Substituir $y_{p}$ a l'equació original i determinar coeficients
2. $y(x) = y_{h}(x) + y_{p}(x)$
```


---
## **Sistemes** d'EDOs

#### Mètodes quantitatius

```ad-met
title: Sistemes **lineals** amb coeficients **constants**

> $\begin{align} \begin{pmatrix} x' \\ y' \end{pmatrix} &= \begin{pmatrix} a & b \\ c & d \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} \\[0.5em] X' &= AX \end{align}$

1. Trobar valors propis $\lambda_{i}$ tal que $\,\det(A-\lambda I) = 0$ .
2. Per cada $\lambda_{i}$ trobar vector propi $\vec{u_{i}}$ tal que $\,(A - \lambda_{i}\, I) \,\vec{u_{i}} = 0$ .
3. Trobar conjunt fonamental de solucions:
	
	| Arrels reals diferents                                             | Arrel real doble                                               | Arrels complexes                                                                                                                                                     |
	| ------------------------------------------------------------------ | -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
	| *vap*s $\lambda_{1},\lambda_{2}$, *vep*s $\vec{u}_{1},\vec{u}_{2}$ | *vap* $\lambda$, *vep* $\vec{u}$, *vep* generalitzat $\vec{v}$ ~={green_low}$(*)$=~ | *vap*s $\lambda=\alpha\pm\beta i$, *vep*s $\vec{w}=\vec{u}\pm\vec{v}i$                                                                                                                                                              |
	| $X_{1} = c_{1}\,e^{\lambda_{1}t}\,\vec{u_{1}}$                     | $X_{1} = c_{1}\,e^{\lambda t}\,\vec{v}$                               | $X_{1} = c_{1}\, e^{at} \left(\,\cos\beta t\,\vec{u}-\sin\beta t\,\vec{v}\,\right)$ |
	| $X_{2}=c_{2}\,e^{\lambda_{2}t}\,\vec{u_{2}}$                       | $X_{2} = c_{2}\,e^{\lambda t}\,t\,\vec{u}$                            | $X_{2}=c_{2}\, e^{at} \left(\,\cos\beta t\,\vec{v}+\sin\beta t\,\vec{u}\,\right)$                                                                                                                                                                     |

	~={green_low}$(*)$=~ tal que $\,(A - \lambda I) \,\vec{v} = \vec{u}$ .

4. $X = X_{1}+X_{2}$
```


#### Mètodes qualitatius

````ad-graph
title: Sistemes **lineals autònoms** de **coeficients constants**

```mehrmaid
graph LR;

R("Arrels reals diferents $\lambda_1,\lambda_2\,\,\,$")
RP("Node repulsor")
RP1("![[20241215201800.png|150]]")
RP2("![[20241215202335.png|150]]")
RN("Node atractor")
RN1("![[20241215202631.png|150]]")
RN2("![[20241215202757.png|150]]")
RM("Sella")
RM1("![[20241215202932.png|150]]")

R --"$0<\lambda_1,\lambda_2$"--> RP
RP --"$0<\lambda_{1}<\lambda_{2}$"--> RP1
RP --"$0<\lambda_{2}<\lambda_{1}$"--> RP2
R --"$\lambda_{1},\lambda_{2}<0$"--> RN
RN --"$\lambda_{2}<\lambda_{1}<0$"--> RN1
RN --"$\lambda_{1}<\lambda_{2}<0$"--> RN2
R --"$\lambda_{2}<0<\lambda_{1}$"--> RM
RM --> RM1

RD("Arrel real doble $\lambda\,\,$")
RDI("Node degenerat")
RDI1("![[20241215204341.png|150]]
	repulsor")
RDI2("![[20241215204437.png|150]]
	atractor")
RDD("Node impropi")
RDD1("![[20241215204931.png|150]]
	repulsor")
RDD2("![[20241215204819.png|150]]
	atractor")

RD --"veps independents"--> RDI
RDI --"$0<\lambda$"--> RDI1
RDI --"$\lambda<0$"--> RDI2
RD --"veps dependents"--> RDD
RDD --"$0<\lambda$"--> RDD1
RDD --"$\lambda<0$"--> RDD2

C("Arrels complexes $\lambda=\alpha\pm\beta i\,$")
C1("![[20241215210230.png|150]]
	Focus repulsor")
C2("![[20241215205939.png|150]]
	Centre")
C3("![[20241215210252.png|150]]
	Focus atractor")

C --"$0<\alpha$"--> C1
C --"$\alpha=0$"--> C2
C --"$\alpha<0$"--> C3
```
````

^f9f878

`````ad-met
title: Sistemes autònoms **no lineals**

> $\begin{cases} x' = f(x,y) \\ y' = g(x,y) \end{cases}$

1. Trobar ==equilibris== $(x_{0},y_{0})$ tal que $f(x_{0},y_{0})=0$ i $g(x_{0},y_{0})=0$ .

2. Per cada equilibri, calcular *vaps* de la ==matriu jacobiana==
$$ Dh(z) = \begin{pmatrix}
f'_{x}(z) & f'_{y}(z) \\
g'_{x}(z) & g'_{y}(z)
\end{pmatrix} \,.$$

3. Tots els *vap*s de $Dh(z_{0})$ tenen **part real diferent de 0** (son ==hiperbòlics==)?
	+ Sí. ~={green}Teorema de Hartman-Grobman.=~ El retrat de fase d'un sistema no lineal en un entorn de $z_{0}$ hiperbòlic és **topològicament equivalent** al retrat de fase del [[#^f9f878 | sistema lineal]] $$X' = Dh(z_{0})X$$ en un entorn de l'origen.

	+ No. El sistema és ==integrable==?

		4. Calcular integral primera $H(x,y)$ per parts tal que $$\frac{x'}{y'}=\frac{f(x,y)}{g(x,y)}\,.$$
		5. Estudiar conjunts de nivell $$ H_{c} = \{ (x,y) \,|\, H(x,y)=c \} \,.$$

```ad-prop
title: Isoclines

S'anomena ==isoclina de l'eix ~={green}horitzontal=~ / ~={pink}vertical=~== al conjunt de punts tal que compleixen ~={green}$g(x,y)=0$=~ / ~={pink}$f(x,y)=0$=~ .

+ Sovint **divideixen el pla** en regions on el camp vectorial apunta en "una direcció".
+ La **intersecció** d'una isoclina de l'eix horitzontal i una de l'eix vertical serà un **punt d'equilibri**.
```

`````