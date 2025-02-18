## **Interpolació**

Donats $m+1$ punts d'interpolació $(x_{i},f_{i})$ amb $i=0,\dots,m$ .

```ad-def
title: *Interval d'interpolació*

Interval més petit que conté $x,x_{0},\dots,x_{m}$.
```

^0ea908

```ad-prop
title: Interpolació de **Lagrange**

Existeix un únic polinomi $p_{m}(x)$ anomenat ==polinomi interpolador de Lagrange== tal que $p_{m}(x_{i})=f_{i}$ per tot $i=0,\dots,m$.

Aquest polinomi és
$$ p_{m}(x)=\sum_{i=0}^{m} f_{i}\,l_{i} \quad \text{amb} \quad l_{i}(x)=\prod_{k=0,\,k\neq i}^{m}\frac{x-x_{k}}{x_{i}-x_{k}} \,.$$

Si $f\in C^{m+1}$, aleshores l'==error d'interpolació== és
$$ f(x)-p_{m}(x)=\frac{f^{(m+1)}(\xi(x))}{(m+1)!}(x-x_{0})\dots(x-x_{m}) $$
on $\xi(x)$ és un punt de l'[[#^0ea908 | interval d'interpolació]].
```

```ad-prop
title: Interpolacio d'**Hermite**

Existeix un únic polinomi $p_{2m+1}(x)$ anomenat ==polinomi interpolador d'Hermite== tal que $p_{2m+1}(x_{i})=f_{i}$ i $p'_{m}(x_{i})=f'_{i}$

Aquest polinomi és
$$ p_{2m+1}(x) = \sum_{i=0}^{m} f_{i}(1-2\,l'_{i}(x_{i})(x-x_{i}))\,l_{i}^{2}(x) + \sum_{i=0}^{m} f'_{i}(x-x_{i})\,l_{i}^{2}(x) \,.$$

Si $f\in C^{2m+2}$, aleshores l'==error d'interpolació== és
$$ f(x)-p_{2m+1}(x) = \frac{f^{(2m+2)}(\xi(x))}{(2m+2)!}(x-x_{0})^{2}\dots(x-x_{m})^{2} $$
on $\xi(x)$ és un punt de l'[[#^0ea908 | interval d'interpolació]].
```

---
## Integració numèrica

Donada $f$ definida sobre $[a,b]$ volem calcular
$$ \boldsymbol{J(f)} = \int_{a}^{b} f(x)\,dx \,,$$
que farem discretitzant $[a,b]$ en una sèrie de ==nodes== $x_{0},\dots,x_{m}$ i aproximant la integral mitjançant
$$ \boldsymbol{J_{m}(f)} = \sum_{i=0}^{m} W_{i}\,f(x_{i}) $$
on $W_{i}$ son els ==pesos d'integració==.

```ad-def
title: *Error d'integració*

Haurem de trobar els nodes i els pesos de manera que l'==error d'integració==
$$ \boldsymbol{E_{m}(f)} = J(f) -J_{m}(f) $$
sigui petit.
```


#### Fórmules d'integració **interpolatòries**

Sigui $p_{m}(x)$ el polinomi interpolador de $f$ sobre els nodes $x_{0}<\dots<x_{m}\in[a,b]$ .

La ==fórmula interpolatòria== sobre aquests nodes consisteix en aproximar $J(f)$ per $J(p_{m})$, és a dir
$$ \begin{gather}
 \int_{a}^b f(x)\,dx \approx \int_{a}^b p_{m}(x)\,dx \approx \boxed{\,\sum_{i=0}^m W_{i}\,f(x_{i})\,} \\
 \text{amb} \quad W_{i} = \int_{a}^b l_{i}(x)\,dx = \int_{a}^b \prod_{k=0,\,k\neq i} \frac{x-x_{k}}{x_{i}-x_{k}}
\end{gather} $$

```ad-def
title: Fórmula *d'ordre $r$*

Es diu que una fórmula interpoladora és d'==ordre $r$== si és exacte per a tots els polinomis de grau menor o igual a $r$.
```

```ad-ex
title: Fórmula dels **trapezis**

Fórmula interpolatòria amb $m=1$ i els nodes $x_{0}=a$ i $x_{1}=b$ .

$$ \int_{a}^b f(x)\,dx \approx \boxed{\, 
\frac{b-a}{2} (f(a)+f(b)) + \frac{h^{3}}{12}f''(\xi) \,} $$
```
^4f1fcc

```ad-ex
title: Fórmula de **Simpson**

$$ \int_{a}^b f(x)\,dx \approx \boxed{\,\frac{b-a}{6}\left( f(a)+4f\left( \frac{a+b}{2} \right) +f(b) \right)} $$
```

Les dues fórmules anteriors son casos particulars de les fórmules tancades de Newton-Cotes. 


#### Fórmules de **Newton-Cotes**

La fórmula general és
$$ \int_{a}^b f(x)\,dx \approx \boldsymbol{NC_{m}(f,[a,b])} = \boxed{\,h \sum_{i=0}^m \alpha_{i}\,f(x_{i})\,}\,,$$
amb $$\begin{align}
x_{i} &= a+\frac{b-a}{m}\,i \,, \\
\alpha_{i} &= \int_{0}^m\prod_{k=0,\,k\neq i}^m \frac{\frac{x-a}{h}-k}{i-k} \,.
\end{align}$$

````ad-prop
title: **Error**

L'==error== de la fórmula de Newton-Cores és
$$ \boldsymbol{E_{m}(f,[a,b])} = \boxed{\,K_{m} \frac{f^{(p+1)}(\xi)}{(p+1)!}\,h^{p+2}\,} \,,$$
amb $\xi\in(a,b)$ i


| | $\boldsymbol m$ senar | $\boldsymbol m$ parell |
| ---:|:---:|:---:|
| $\boldsymbol p$ | $m$ | $m+1$ |
| $\boldsymbol{K_m}$ | $\int_{0}^m t(t-1)\dots(t-m)dt$ | $\int_{0}^m t^{2}(t-1)\dots(t-m)dt$

```ad-not
Per trobar les constants $K_{m}$ no cal calcular les integrals, n'hi ha prou en calcular:
+ $E_{m}(x^{m+1})$ si $m$ és **senar**
+ $E_{m}(x^{m+2})$ si $m$ és **parell**

ja que per a aquestes funcions $f^{(p+1)}(\xi)$ és constant.
```
````

^a62f30


#### Fórmules **compostes**

Dividim l'interval original en $I$ subintervals i apliquem la fórmula d'integració interpolatòria a cada subinterval.

En el cas de Newton-Cotes:
$$ \int_{a}^b f(x)\,dx \approx \boldsymbol{\text{\textbf{Compo}}_{m}(f,[a,b])} = \boxed{\,\sum_{i=0}^{I-1} NC_{m}(f,[x_{i},x_{i+1}])\,} $$
amb $x_{i}=a+\frac{b-a}{I}\,i$ .

```ad-prop
title: **Error**

L'==error== de la fórmula composta de Newton-Cotes és
$$ \boldsymbol{EC_{m}(f,[a,b])} = \boxed{\,\frac{K_{m}}{(p+1)!} \frac{b-a}{m}  f^{(p+1)}(\xi_{i})\,} $$
amb $\xi\in(a,b)$ i $K_{m}$ igual que a [[#^a62f30|Newton-Cotes]].
```

```ad-teor
title: Teorema del **valor mitjà** per integrals

Sigui $\omega:[a,b]\to[0,\infty)$ una funció integrable no negativa.

Aleshores per tota $f:[a,b]\to \mathbb{R}$ tenim
$$ \int_{a}^{b} f(x)\,\omega(x)\,dx = f(\xi) \int_{a}^b \omega(x)\,dx $$
per algun $\xi\in(a,b)$ .
```


#### Càlcul **automàtic** de l'error

La idea és desenvolupar un algorisme que calculi una successió d'aproximacions de la integral i les utilitzi per estimar l'error que es comet.

Definim
$$ Q_{n}=\text{Compo}_{m}(f,[a,b],2^n) = \sum_{i=0}^{2^n-1} NC_{m}(f,[x_{i},x_{i+1}]) $$
amb $x_{i}=a+\frac{b-a}{2^n}\,i$ .

```ad-not
Si s'utilitza la fórmula dels [[#^4f1fcc|trapezis]], podem escriure
$$ Q_{n+1} = \frac{1}{2}\,Q_{n} + \sum_{i=0}^{2^n-1}f(\overline{x}_{i}) \,\frac{1}{2^{n+1}} \,,$$
on $\quad\begin{cases}\displaystyle\,\overline{x}_{i}=\frac{x_{i}+x_{i+1}}{2}\\[0.5em]\displaystyle\,x_{i}=a+\frac{b-a}{2^n}\,i\end{cases}\quad$ i $\quad\displaystyle Q_{0}=\frac{f(a)+f(b)}{2}(b-a)$ .
```

```ad-prop
title: **Error**

$$ \int_{a}^b f(x)\,dx - Q_{n+1} \approx \boxed{\,\frac{Q_{n+1}-Q_{n}}{2^{p+1}-1}\,} $$
```