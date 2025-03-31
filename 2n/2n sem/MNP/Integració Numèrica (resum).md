### 0. **Interpolació**

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


### 1. Fórmules de **Newton-Cotes**

$$ \int_{a}^b f(x)\,dx \approx \boldsymbol{NC_{m}(f,[a,b])} = \boxed{\,h \sum_{i=0}^m \alpha_{i}\,f(x_{i})\,} $$
+ $h = \displaystyle\frac{b-a}{m}$
+ $x_{i} = a+h\,i$
+ $\alpha_{i} = \displaystyle\int_{0}^m\prod_{k=0,\,k\neq i}^m \frac{\frac{x-a}{h}-k}{i-k}$

```ad-ex
title: Error
$$ E_{m}(f,[a,b]) \leq \boxed{\,K_{m} \frac{f^{(p+1)}(\xi)}{(p+1)!}\,h^{p+2}\,} $$
+ $\begin{cases}p=m &\text{si }m\text{ senar}\\p=m+1 &\text{si }m\text{ parell}\end{cases}$
+ $K_{m}$ constant (calcular $E_{m}(x^{p+1})$ on $f^{(p+1)}(\xi)$ és constant).
```

|         |                               Trapezis                               |                                       Simpson                                        |
| ------- |:--------------------------------------------------------------------:|:------------------------------------------------------------------------------------:|
| Fórmula |               $\displaystyle\frac{b-a}{2} (f(a)+f(b))$               | $\displaystyle\frac{b-a}{6}\left( f(a)+4f\left( \frac{a+b}{2} \right) +f(b) \right)$ |
| Error   | $\displaystyle\frac{(b-a)^{3}}{12} \max_{x\in[a,b]} \mid f''(x)\mid$ |       $\displaystyle\frac{(b-a)^{5}}{90} \max_{x\in[a,b]} \mid f^{(4)}(x)\mid$       | 


### 2. Fórmules de Newton-Cotes **compostes**

$$ \int_{a}^b f(x)\,dx \approx \boldsymbol{\text{\textbf{Compo}}_{m}(f,[a,b])} = \boxed{\,\sum_{i=0}^{I-1} NC_{m}(f,[x_{i},x_{i+1}])\,} $$
+ $x_{i}=a+\displaystyle\frac{b-a}{I}\,i\,$ (equiespaiats)

```ad-ex
title: Error
$$ \boldsymbol{EC_{m}(f,[a,b])} \leq \boxed{\,\frac{K_{m}}{(p+1)!} \frac{b-a}{m}  f^{(p+1)}(\xi_{i})\,} $$
+ $\xi\in(a,b)$
+ $K_{m}$ igual que a [[#^a62f30|Newton-Cotes]]
```

|         |                             Trapezis composta                             |                                                  Simpson composta                                                   | 
| ------- |:-------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------------------------------------:|
| Fórmula |   $\displaystyle\frac{h}{2} (f(a)+2\,(f(x_{1})+\dots+f(x_{n-1}))+f(b))$   | $\displaystyle\frac{\,h}{3} \left( f(a)+4\sum_{i=1}^{n-1} f(x_{2i-1}) + 2\sum_{j=2}^{n-2} f(x_{2j}) + f(b) \right)$ |
| Error   | $\displaystyle\frac{(b-a)^{3}}{12n^{2}} \max_{x\in[a,b]} \mid f''(x)\mid$ |                   $\displaystyle\frac{(b-a)^{5}}{180n^{4}} \max_{x\in[a,b]} \mid f^{(4)}(x)\mid$                    |


##### 2.1. Càlcul **automàtic** de l'error

$$ \boldsymbol{Q_{n}}=\text{Compo}_{m}(f,[a,b],2^n) = \sum_{i=0}^{2^n-1} NC_{m}(f,[x_{i},x_{i+1}]) $$
+ $\displaystyle x_{i}=a+\frac{b-a}{2^n}\,i$
+ $Q_{n}\to I(f)$ quan $n\to \infty$

```ad-ex
title: Error
$$ \int_{a}^b f(x)\,dx - Q_{n+1} \approx \boxed{\,\frac{Q_{n+1}-Q_{n}}{2^{p+1}-1}\,} $$

+ $p=\begin{cases}\, m &\text{si }m\text{ és senar} \\\, m+1 &\text{si }m\text{ és parell} \end{cases}$
```

```ad-prop
title: $\boldsymbol Q_{n}$ per **Trapezis**

$$ Q_{n+1} = \boldsymbol{F(a,b,n,Q_{n})} = \boxed{\,\frac{Q_{n}}{2} + \frac{1}{2^{n+1}} \sum_{i=0}^{2^n-1}f(\overline{x}_{i})\,} $$
+ $\quad\begin{cases}\displaystyle\,\overline{x}_{i}=\frac{x_{i}+x_{i+1}}{2}\\[0.5em]\displaystyle\,x_{i}=a+\frac{b-a}{2^n}\,i\end{cases}\quad$
+ $\quad\displaystyle Q_{0}=\frac{f(a)+f(b)}{2}(b-a)$
```


### 3. Integració **Gaussiana**

$$ \int_{a}^b f(x)\,\omega(x)\,dx \approx \sum_{k=0}^{m}W_{k}\,f(x_{k}) $$
+  $x_{k}$ zeros simples de $\psi_{m+1}$
+ $W_{k} = \displaystyle\frac{A_{m+1}}{A_{m}} \, \frac{\langle \psi_{m},\psi_{m} \rangle }{\psi'_{m+1}(x_{k})\,\psi_{m}(x_{k})}$
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


### 4. Integrals **singulars**

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
$$ \int_{a}^{b} \frac{\phi(x)}{(x-a)^{\mu}} = \int_{a}^{b} \frac{\phi(x)-\phi(a)}{(x-a)^{\mu}}\,dx + \int_{a}^{b} \frac{\phi(a)}{(x-a)^{\mu}}\,dx $$
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


### 5. Apèndix

```ad-teor
title: Teorema del **valor mitjà** per integrals

> $\omega:[a,b]\to[0,\infty)$ funció integrable no negativa

Per tot $f:[a,b]\to \mathbb{R}$ tenim
$$ \int_{a}^{b} f(x)\,\omega(x)\,dx = f(\xi) \int_{a}^b \omega(x)\,dx $$
per algun $\xi\in(a,b)$ .
```


##### 5.1. Polinomis **ortogonals**

`````ad-def
title: Polinomis **ortogonals**

Polinomis $\psi_{i}(x)$ i $\psi_{j}(x)$ ==ortogonals== sobre $[a,b]$ i per $w(x):[a,b]\to \mathbb{R}_+$ si
$$ \int_{a}^{b} \psi_{i}(x)\,\psi_{j}(x)\,w(x)\,dx \begin{cases}\, =0 &\text{si }i\neq j \\\, \neq0 &\text{si }i=j \end{cases} $$

```ad-met
title: Recurrència 

$$ \psi_{k+1} = \boxed{\,\frac{A_{k+1}}{A_{k}} ((x-\alpha_{k})\,\psi_{k}(x)-\alpha_{k-1}\,\psi_{k-1}(x))\,} $$
+ $\alpha_{k} = \displaystyle \frac{\langle\psi_{k},x\,\psi_{k}\rangle }{\langle \psi_{k},\psi_{k} \rangle }\,,\quad\alpha_{k-1}=\displaystyle\frac{\langle \psi_{k},x\,\psi_{k-1} \rangle }{\langle \psi_{k-1},\psi_{k-1} \rangle }$
+ $\psi_{0}=A_{0}\,,\quad\psi_{1}=A_{1}\left( x-\frac{\langle \psi_{0},x\,\psi_{0} \rangle }{\langle \psi_{0},\psi_{0} \rangle } \right)$
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