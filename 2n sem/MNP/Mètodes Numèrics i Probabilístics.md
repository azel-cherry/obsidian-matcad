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
 \int_{a}^b f(x)\,dx \approx \int_{a}^b p_{m}(x)\,dx \approx \sum_{i=0}^m W_{i}\,f(x_{i}) \\
 \text{amb} \quad W_{i} = \int_{a}^b l_{i}(x)\,dx = \int_{a}^b \prod_{k=0,\,k\neq i} \frac{x-x_{k}}{x_{i}-x_{k}}
\end{gather} $$

```ad-def
title: Fórmula *d'ordre $r$*

Es diu que una fórmula interpoladora és d'==ordre $r$== si és exacte per a tots els polinomis de grau menor o igual a $r$.
```

```ad-ex
title: Fórmula dels **trapezis**

Fórmula interpolatòria amb $m=1$ i els nodes $x_{0}=a$ i $x_{1}=b$ .
```

```ad-ex
title: Fórmula de **Simpson**

Es volen trobar els pesos d'integració $\omega_{-1},\omega_{0},\omega_{1}$ tal que
$$ \int_{-1}^{1} f(x)\,dx \approx \omega_{-1}\,f(-1)+\omega_{0}\,f(0)+\omega_{1}\,f(1) $$

sigui exacte per a tots els polinomis de grau $\leq2$ .
```

Les dues fórmules anteriors son casos particulars de les fórmules tancades de Newton-Cotes. 


#### Fórmules de **Newton-Cotes**

Es prenen $m+1$ nodes **equiespaiats** a l'interval $[a,b]$ :
$$ x_{i} = a+ih\,, \quad h=\frac{b-a}{m} $$
amb $i=0,\dots,m$ .

Llavors
$$ \begin{align}
\int_{a}^b f(x)\,dx &= \boxed{\,h \sum_{i=0}^m \alpha_{i}\,f(x_{i})\,} \\
\text{amb} \quad \alpha_{i} &= \int_{0}^m\prod_{k=0,\,k\neq i}^m \frac{\frac{x-a}{h}-k}{i-k}
\end{align} $$

````ad-prop
title: **Error** de la fórmula de Newton-Cotes

L'==error== de la fórmula de Newton-Cores satisfà:
$$ E_{m}(f) = K_{m} \frac{f^{(p+1)}(\xi)}{(p+1)!}\,h^{p+2} $$
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


#### Fórmules **compostes**

```ad-teor
title: Teorema del **valor mitjà** per integrals

Sigui $\omega:[a,b]\to[0,\infty)$ una funció integrable no negativa.

Aleshores per tota $f:[a,b]\to \mathbb{R}$ tenim
$$ \int_{a}^{b} f(x)\,\omega(x)\,dx = f(\xi) \int_{a}^b \omega(x)\,dx $$
per algun $\xi\in(a,b)$ .
```