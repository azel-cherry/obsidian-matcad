## 0. **Interpolació**

````ad-prop
title: Polinomi interpolador de **Lagrange**

$$ p_{m}(x)=\sum_{i=0}^{m} f_{i}\,l_{i} \quad \text{amb} \quad l_{i}(x)=\prod_{k=0,\,k\neq i}^{m}\frac{x-x_{k}}{x_{i}-x_{k}} $$

```ad-ex
title: Error

$$ f(x)-p_{m}(x)\leq\frac{f^{(m+1)}(\xi(x))}{(m+1)!}(x-x_{0})\dots(x-x_{m}) $$
```
````

````ad-prop
title: Polinomi interpolador d'**Hermite**

$$ p_{2m+1}(x) = \sum_{i=0}^{m} f_{i}(1-2\,l'_{i}(x_{i})(x-x_{i}))\,l_{i}^{2}(x) + \sum_{i=0}^{m} f'_{i}(x-x_{i})\,l_{i}^{2}(x) $$

```ad-ex
title: Error
$$ f(x)-p_{2m+1}(x) \leq \frac{f^{(2m+2)}(\xi(x))}{(2m+2)!}(x-x_{0})^{2}\dots(x-x_{m})^{2} $$
```
````


## 1. **Integració** numèrica

#### 1.1. Fórmules de **Newton-Cotes**

$$ \int_{a}^b f(x)\,dx \approx \boldsymbol{NC_{m}(f,[a,b])} = \boxed{\,h \sum_{i=0}^m \alpha_{i}\,f(x_{i})\,} $$
$$ \text{amb} \quad h = \displaystyle\frac{b-a}{m}\,, \quad x_{i} = a+h\,i\,, \quad \alpha_{i} = \displaystyle\int_{0}^m\prod_{k=0,\,k\neq i}^m \frac{\frac{x-a}{h}-k}{i-k} $$

```ad-ex
title: Error
$$ E_{m}(f,[a,b]) \leq \boxed{\,K_{m} \frac{f^{(p+1)}(\xi)}{(p+1)!}\,h^{p+2}\,} $$
+ $\begin{cases}p=m &\text{si }m\text{ senar}\\p=m+1 &\text{si }m\text{ parell}\end{cases}$
+ $K_{m}$ constant (calcular $E_{m}(x^{p+1})$ on $f^{(p+1)}(\xi)$ és constant)
```

|                               Trapezis                               |                                       Simpson                                        |
|:--------------------------------------------------------------------:|:------------------------------------------------------------------------------------:|
|               $\displaystyle\frac{b-a}{2} (f(a)+f(b))$               | $\displaystyle\frac{b-a}{6}\left( f(a)+4f\left( \frac{a+b}{2} \right) +f(b) \right)$ |
| $E\leq\displaystyle\frac{(b-a)^{3}}{12} \max_{x\in[a,b]} \mid f''(x)\mid$ |       $E\leq\displaystyle\frac{(b-a)^{5}}{90} \max_{x\in[a,b]} \mid f^{(4)}(x)\mid$       |


#### 1.2. Fórmules de Newton-Cotes **compostes**

$$ \int_{a}^b f(x)\,dx \approx \boldsymbol{\text{\textbf{Compo}}_{m}(f,[a,b])} = \boxed{\,\sum_{i=0}^{I-1} NC_{m}(f,[x_{i},x_{i+1}])\,} $$
$$ \text{amb} \quad x_{i}=a+\displaystyle\frac{b-a}{I}\,i \quad\text{equiespaiats}$$

```ad-ex
title: Error
$$ \boldsymbol{EC_{m}(f,[a,b])} \leq \boxed{\,\frac{K_{m}}{(p+1)!} \frac{b-a}{m}  f^{(p+1)}(\xi_{i})\,} $$
+ $\xi\in(a,b)$
+ $K_{m}$ constant (calcular $E_{m}(x^{p+1})$ on $f^{(p+1)}(\xi)$ és constant)
```

|                             Trapezis composta                             |                                                  Simpson composta                                                   |
|:-------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------------------------------------:|
|   $\displaystyle\frac{h}{2} (f(a)+2\,(f(x_{1})+\dots+f(x_{n-1}))+f(b))$   | $\displaystyle\frac{\,h}{3} \left( f(a)+4\sum_{i=1}^{n-1} f(x_{2i-1}) + 2\sum_{j=2}^{n-2} f(x_{2j}) + f(b) \right)$ |
| $E\leq\displaystyle\frac{(b-a)^{3}}{12n^{2}} \max_{x\in[a,b]} \mid f''(x)\mid$ |                   $E\leq\displaystyle\frac{(b-a)^{5}}{180n^{4}} \max_{x\in[a,b]} \mid f^{(4)}(x)\mid$                    |


###### 1.2.1. Càlcul **automàtic** de l'error

$$ \boldsymbol{Q_{n}}=\text{Compo}_{m}(f,[a,b],2^n) = \sum_{i=0}^{2^n-1} NC_{m}(f,[x_{i},x_{i+1}]) $$
$$\text{amb} \quad x_{i}=a+\frac{b-a}{2^n}\,i $$
+ $Q_{n}\to I(f)$ quan $n\to \infty$

```ad-ex
title: Error
$$ \int_{a}^b f(x)\,dx - Q_{n+1} \approx \boxed{\,\frac{Q_{n+1}-Q_{n}}{2^{p+1}-1}\,} $$

+ $p=\begin{cases}\, m &\text{si }m\text{ és senar} \\\, m+1 &\text{si }m\text{ és parell} \end{cases}$
```

```ad-prop
title: $\boldsymbol Q_{n}$ per **Trapezis**

$$ Q_{n+1} = \boldsymbol{F(a,b,n,Q_{n})} = \boxed{\,\frac{Q_{n}}{2} + \frac{1}{2^{n+1}} \sum_{i=0}^{2^n-1}f(\overline{x}_{i})\,} $$
$$\text{amb}\quad\displaystyle Q_{0}=\frac{f(a)+f(b)}{2}(b-a) \quad\text{i}\quad\begin{cases}\displaystyle\,x_{i}=a+\frac{b-a}{2^n}\,i\\[0.5em]\displaystyle\,\overline{x}_{i}=\frac{x_{i}+x_{i+1}}{2}\end{cases}$$
```


#### 1.3. Integració **Gaussiana**

$$ \int_{a}^b f(x)\,\omega(x)\,dx \approx \sum_{k=0}^{m}W_{k}\,f(x_{k}) $$
$$ \text{amb}\quad W_{k} = \displaystyle\frac{A_{m+1}}{A_{m}} \, \frac{\langle \psi_{m},\psi_{m} \rangle }{\psi'_{m+1}(x_{k})\,\psi_{m}(x_{k})} $$
+  $x_{k}$ zeros simples de $\psi_{m+1}$
+ $A_{m}$ coeficient de grau màxim de $\psi_{m}(x)$

````ad-ex
title: Error
$$ |E_{m}| \leq \frac{f^{(2m+2)}(\xi)}{(2m+2)!} \frac{1}{A_{m+1}^{2}}\int_{a}^{b} \psi_{m+1}^{2}(x)\,\omega(x)\,dx $$

```ad-not
Calcular $\displaystyle\frac{1}{A_{m+1}^{2}}\int_{a}^{b} \psi_{m+1}^{2}(x)\,\omega(x)\,dx$ fent $f(x)=x^{2m+2}$, tal que $\displaystyle\frac{f^{(2m+1)}(\xi)}{(2m+1)!}=1$ .
```
````

|               |                                  Gauss-Legendre                                  |                        Gauss-Txebyshew                        |
| ------------- |:--------------------------------------------------------------------------------:|:-------------------------------------------------------------:|
| Interval      |                                     $[-1,1]$                                     |                           $[-1,1]$                            |
| $w(x)$        |                                        1                                         |            $\displaystyle\frac{1}{\sqrt{1-x^{2}}}$            |
| Punts $x_{k}$ |   zeros simples de $\psi_{m+1}(x)$<br>([[#^1d74cc \| polinomis de Legendre]])    |   $\cos\left( \displaystyle\frac{\pi(1+2k)}{2m+2} \right)$    |
| Pesos $W_{k}$ |          $\displaystyle\frac{2}{(1-x_{k}^{2})\,\psi'_{m+1}(x_{k})^{2}}$          |                $\displaystyle\frac{\pi}{m+1}$                 | 
| Error         | $\displaystyle\frac{2^{2m+3}((m+1)!)^{4}}{(2m+3)((2m+2)!)^{3}}\,f^{(2m+2)}(\xi)$ | $\displaystyle\frac{\pi}{2^{2m+1}\,(2m+2)!}\,f^{(2m+2)}(\xi)$ |


#### 1.4. Integrals **singulars**

```ad-met
title: Discontinuïtat **de salt**

> $f$ amb una discontinuïtat de salt $c\in(a,b)$

Treballar els dos intervals $[a,c]$ i $[c,b]$ per separat:
$$ I_{1}=\int_{a}^{c}f(x)\,dx\,, \quad I_{2}=\int_{c}^{b}f(x)\,dx $$
```

```ad-met
title: Discontinuïtat **asimptòtica** en un extrem

> $f$ de la forma $\displaystyle\frac{\phi(x)}{(x-a)^{\mu}}$, amb  $\mu\in[0,1)$ i $\phi(x)\in C^{1}$

Separar la integral:
$$ \int_{a}^{b} \frac{\phi(x)}{(x-a)^{\mu}}\,dx = \int_{a}^{b} \frac{\phi(x)-\phi(a)}{(x-a)^{\mu}}\,dx + \int_{a}^{b} \frac{\phi(a)}{(x-a)^{\mu}}\,dx $$
+ Primera integral exacta
+ Segona integral contínua:
	$$ \frac{\phi(x)-\phi(a)}{(x-a)^{\mu}} = \phi'(\xi(x))(x-a)^{1-\mu} $$
```

```ad-met
title: Interval **no acotat**

> $\displaystyle\int_{a}^{\infty}f(x)\,dx \neq \infty$ .

1. Donat un error $\delta$, trobar $c>a$ tal que $\displaystyle\int_{c}^{\infty}f(x)\,dx < \frac{\delta}{2}$ .
2. Calcular numèricament $I = \displaystyle\int_{a}^{c} f(x)\,dx\,$ amb un error menor a $\delta/2$ .
```


---
## 2. Mètodes de **Monte Carlo**

$$ \boxed{\,\int_{a}^{b}g(x)\,dx \approx (b-a)\,\mathbb{E}(g(X))\,} \text{ amb } X\sim U(a,b) $$

+ **Error** $\sim\frac{\sigma}{\sqrt{n}}$ per $n$ prou gran

```ad-prop
title: **IC** per $\boldsymbol{\mu}$ amb confiança $1-\alpha$

> $z(\alpha)>0$ tal que $P(-z(\alpha)<Z<z(\alpha))=1-\alpha$

$$ \boxed{\,\mu \in \left( \widehat{\mu}_{n} \pm \frac{\widehat{\sigma}_{n}\,z(\alpha)}{\sqrt{n}} \right)\,} $$
$$ \text{amb}\quad \widehat{\mu}_{n}=\frac{1}{n}\sum_{i=1}^{n}x_{i}\,,\quad \widehat{\sigma}_{n}^{2} = \frac{1}{n-1} \sum_{i=1}^{n}(x_{i}-\mu_{n})^{2} $$
```

#### 2.1. Mostreig d'**importància**

Reducció de la variància $\implies$ Reducció de l'error

```ad-met
> $X$ amb densitat nominal $f_{X}$

1. Trobar $\tilde{X}$ amb densitat d'importància $f_{\tilde{X}}$
2. Prendre $\displaystyle \tilde{Y} = \frac{g(\tilde{X})\,f_{X}(\tilde{X})}{f_{\tilde{X}}(\tilde{X})} \implies \mathbb{E}(\tilde{Y})=\mathbb{E}(X),\,\mathbb{V}(\tilde{Y})\leq \mathbb{V}(X)$
```


#### 2.2. **Generació** de V.A.s

Volem generar realitzacions de $X$.

```ad-met
title: Mètode de la **inversa** (coneixem $F_{X}$)

1. Inversa generalitzada: $F_{X}^{-1}(u) = \text{inf}\{x \in \mathbb{R} \mid F_{X}(x)\geq u\}$
2. $X\sim F_{X}^{-1}(U)$ amb $U\sim \text{Unif}(0,1)$.
```

```ad-met
title: Mètode d'**acceptació rebuig** (no coneixem $F_{X}$)

> $Y$ amb $f_{X}\leq m\,f_{Y}$ per un $m>0$

1. Generem realització $x$ de $Y$
2. Generem realització $u$ de $U\sim\text{Unif}(0,1)$
3. $u < \displaystyle\frac{f_{X}(x)}{m\,f_{Y}(x)} \implies$ acceptem $x$ com a realització de $X$
```


---
## 3. Mètodes numèrics per **EDOs**

#### 3.1. **Convergència**

+ Esquema ==convergeix== a la solució del PVI si per tot $x_{f}$ del domini d'$y$:
$$ \lim_{n\to0} Y_{n}(h_{n}) = y(x_{f}) \quad\text{amb}\quad h_{n}=\frac{x_{f}-x_{0}}{n} $$

+ ==Error de truncament local== $\displaystyle\tau(h,x) = \frac{y(x+h) - y(x) - h\,\phi(x,y(x),h;f)}{h}$

+ Esquema d'==ordre de consistència $p$== amb $p$ natural més gran tal que:
$$ \lim_{h\to0} \frac{\tau(h,x)}{h^{p}} < \infty $$


#### 3.2. Esquemes **monopàs**

$$ \boxed{\,Y_{i+1} = Y_{i} + h\,\phi(x_{i},Y_{i},h;f)\,} $$

| Euler explícit       | $\begin{cases}Y_{n+1} &= Y_{n} + h\,f(Y_{n},t_{n}) \\Y_{0} &= t_{0} \end{cases}$                                                                                            |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Taylor d'ordre 2** | $\begin{cases}Y_{n+1} &= Y_{n} + h\,f(Y_{n},t_{n}) + \frac{h^{2}}{2}(\partial_{1}f(Y_{n},t_{n})\,f(Y_{n},t_{n}) + \partial_{2}f(Y_{n},t_{n})) \\Y_{0} &= t_{0} \end{cases}$ |
| **Runge-Kutta 2**      | $\begin{cases}Y_{n+1} &= Y_{n} + \frac{h}{2} (f(Y_{n},t_{n})+f(Y_{n}+hf(Y_{n},t_{n}),t_{n+1})) \\Y_{0} &= y_{0}\end{cases}$                                                 | 


#### 3.3. Esquemes **multipàs**

**Adams** $\,\,\begin{cases}Y_{n+1} &= Y_{n} + \displaystyle \frac{3f(Y_{n},t_{n})-f(Y_{n-1},t_{n-1})}{2}h \\Y_{0} &= t_{0}\end{cases}\,\,$ (calcular $Y_{1}$ fent servir mètode d'un pas)


#### 3.4. Esquemes **implícits**

$$ \boxed{\,Y_{i+1} = Y_{i} + h\,\phi(x_{i},Y_{i},Y_{i+1},h;f)\,} $$

+ **Euler implícit** $\,\,\begin{cases}Y_{n+1} &= Y_{n} + hf(Y_{n+1},t_{n+1}) \\Y_{0} &= y_{0}\end{cases}$

```ad-met
title: Pas a **implícit**

$$\boxed{\,Y_{i+1} = Y_{i} + h\,\overline{\phi}(x_{i},Y_{i},Y_{i}+h\,K(Y_{i},x_{i}),h;f)\,}$$
+ $K(Y_{i},x_{i})\,$ solució de $\,K(Y_{i},x_{i}) = \overline{\phi}(x_{i},Y_{i},Y_{i}+h\,K(Y_{i},x_{i}),h;f)$
```


#### 3.5. **Runge-Kutta**

$$ Y_{i+1} = Y_{i} + h\,\phi(x_{i},Y_{i},h;f) \quad\text{amb}\,\, \begin{cases}
\,\phi(x_{i},Y_{i},h;f) = \displaystyle\sum_{r=1}^{m} c_{r}K_{r}(x_{i},Y_{i},h;f) \\
\,K_{r} =\displaystyle f\left( Y_{i}+h\sum_{s=1}^{m} b_{r,s}\,K_{s},x_{i}+ha_{r} \right)
\end{cases} $$
+ Paràmetres $c_{r},a_{r},b_{r,s}$ per $r,s \in \{1,\dots,m\}$ seleccionats tal que l'esquema sigui d'ordre més gran possible
+ **Runge-Kutta de 4 etapes:** $Y_{i+1} = Y_{i} + \frac{h}{6}(K_{1}+2K_{2}+2K_{3}+K_{4}) \quad\text{amb } \begin{cases}\,K_{1} = f(Y_{i},x_{i}) \\[0.4em]\,K_{2} =\displaystyle f\left( Y_{i}+\frac{h}{2} K_{1},x_{i}+\frac{h}{2} \right) \\[0.4em]\,K_{3} =\displaystyle f\left( Y_{i}+\frac{h}{2} K_{2}, x_{i}+\frac{h}{2} \right) \\[0.4em]\,K_{4} = f(Y_{i}+hK_{3},x_{i}+h)\end{cases}$

```ad-met
title: Calcular $K_{r}$

+ Si $b_{r,s}=0$ per tot $s\geq r$ :
$$ \begin{align}
K_{1} &= f(Y_{i},x_{i}+ha_{1}) \\
K_{2} &= f(Y_{i}+h\,b_{2,1}\,K_{1},x_{i}+ha_{2}) \\
&\,\,\,\vdots \\
K_{m} &= f(Y_{i} + h(b_{m,1}\,K_{1}+h\,b_{m,2}\,K_{2}+\dots+b_{m,m-1}K_{m-1}),x_{i}+ha_{m})
\end{align} $$
+ Si no, sistema d'equacions
```


```ad-teor
title: Ordre màxim $p$ donat $m$

| $\boldsymbol m$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ | $8$ | $9$ |   $>=10$   |
|:---------------:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:----------:|
| $\boldsymbol p$ | $1$ | $2$ | $3$ | $4$ | $4$ | $5$ | $6$ | $6$ | $7$ | $\leq m-2$ |

```


---
## 4. Apèndix

```ad-teor
title: Teorema del **valor mitjà** per integrals

> $\omega:[a,b]\to[0,\infty)$ funció integrable no negativa

Per tot $f:[a,b]\to \mathbb{R}$ tenim
$$ \int_{a}^{b} f(x)\,\omega(x)\,dx = f(\xi) \int_{a}^b \omega(x)\,dx $$
per algun $\xi\in(a,b)$ .
```

```ad-prop
title: Identitats **trigonomètriques**

+ $\sin^{2}(x)+\cos^{2}(x)=1$
+ $\sin(2x)=2\sin(x)\cos(x)$
+ $\cos(2x)=\cos^{2}(x)-\sin^{2}(x)$
+ $\cos(a\pm b)=\cos(a)\cos(b)\mp \sin(a)\sin(b)$
+ $\sin(a\pm b)=\sin(a)\cos(b)\pm \cos(a)\sin(b)$
```

```ad-prop
title: Desenvolupament de **Taylor**

$$ y(x+h) = y(x) + h\,y'(x) + \frac{h^{2}}{2}\,y''(x) + \dots + \frac{h^{n}}{n!}\,y^{(n)}(x) + O(h^{n+1}) $$
```


##### 4.1. Polinomis **ortogonals**

`````ad-def
title: Polinomis **ortogonals**

Polinomis $\psi_{i}(x)$ i $\psi_{j}(x)$ ==ortogonals== sobre $[a,b]$ i per $w(x):[a,b]\to \mathbb{R}_+$ si
$$ \langle\psi_{i},\psi_{j}\rangle = \int_{a}^{b} \psi_{i}(x)\,\psi_{j}(x)\,w(x)\,dx \begin{cases}\, =0 &\text{si }i\neq j \\\, \neq0 &\text{si }i=j \end{cases} $$

```ad-met
title: Recurrència 

$$ \psi_{k+1} = \boxed{\,\frac{A_{k+1}}{A_{k}} ((x-\alpha_{k})\,\psi_{k}(x)-\alpha_{k-1}\,\psi_{k-1}(x))\,} $$
+ $\alpha_{k} = \displaystyle \frac{\langle\psi_{k},x\,\psi_{k}\rangle }{\langle \psi_{k},\psi_{k} \rangle }\,,\quad\alpha_{k-1}=\displaystyle\frac{\langle \psi_{k},x\,\psi_{k-1} \rangle }{\langle \psi_{k-1},\psi_{k-1} \rangle }$
+ $\psi_{0}=A_{0}\,,\quad\psi_{1}=\displaystyle A_{1}\left( x-\frac{\langle \psi_{0},x\,\psi_{0} \rangle }{\langle \psi_{0},\psi_{0} \rangle } \right)$
```
`````

````ad-prop
title: Polinomis de **Legendre**
+ $[a,b]=[-1,1]$
+ $w(x)=1$
+ $\psi_{k}(1)=1 \quad \forall k\geq 0$

```ad-met
title: Recurrència
$$ \psi_{k+1}(x) = \frac{2k+1}{k+1}\,x\,\psi_{k}(x) - \frac{k}{k+1}\,\psi_{k-1}(x) $$
+ $\psi_{0}(x)=1\,,\quad\psi_{1}(x)=x$
```
````
^1d74cc

````ad-prop
title: Polinomis de **Txebyshew**
$$T_{k}(x) = \cos(k \arccos(x))$$
+ $[a,b]=[-1,1]$
+ $w(x) = \displaystyle\frac{1}{\sqrt{1-x^{2}}}$

```ad-met
title: Recurrència 

$$ T_{k+1}(x) = 2x\,T_{k}(x) - T_{k-1} $$
+ $T_{0}(x)=1\,,\quad T_{1}(x)=x$
```
````