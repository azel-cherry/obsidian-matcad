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
## **Integració** numèrica

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

`````ad-ex
title: Fórmula dels **trapezis**

Fórmula interpolatòria amb $m=1$ i els nodes $x_{0}=a$ i $x_{1}=b$ .

$$ \int_{a}^b f(x)\,dx \approx \boxed{\, 
\frac{b-a}{2} (f(a)+f(b)) \,} $$

```ad-ex
title: **Error**

$$ |E| \leq \frac{(b-a)^{3}}{12} \max_{x\in[a,b]} |f''(x)| $$
```
`````
^4f1fcc

`````ad-ex
title: Fórmula de **Simpson**

$$ \int_{a}^b f(x)\,dx \approx \boxed{\,\frac{b-a}{6}\left( f(a)+4f\left( \frac{a+b}{2} \right) +f(b) \right)} $$

```ad-ex
title: **Error**

$$ |E| \leq \frac{(b-a)^{5}}{90} \max_{x\in[a,b]} |f^{(4)}(x)| $$
```
`````

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

L'==error== de la fórmula de Newton-Cotes és
$$ \boldsymbol{E_{m}(f,[a,b])} = \boxed{\,K_{m} \frac{f^{(p+1)}(\xi)}{(p+1)!}\,h^{p+2}\,} \,,$$
amb $\xi\in(a,b)$ i


| | $\boldsymbol m$ senar | $\boldsymbol m$ parell |
| ---:|:---:|:---:|
| $\boldsymbol p$ | $m$ | $m+1$ |
| $\boldsymbol{K_m}$ | $\int_{0}^m t(t-1)\dots(t-m)dt$ | $\int_{0}^m t^{2}(t-1)\dots(t-m)dt$

```ad-not
Per trobar les constants $K_{m}$ no cal calcular les integrals, n'hi ha prou en calcular
+ $E_{m}(x^{m+1})$ si $m$ és **senar**,
+ $E_{m}(x^{m+2})$ si $m$ és **parell**,

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

`````ad-ex
title: Fórmula dels **trapezis composta**

$$ \int_{a}^b f(x)\,dx \approx \boxed{\,\frac{h}{2} (f(a)+2\,(y_{1}+\dots+y_{n-1})+f(b))\,} $$

on $y_i=f(x_{i})$ amb $x_{1},\dots,x_{n-1}\in(a,b)$ equiespaiats.

```ad-ex
title: **Error**

$$ |E| \leq \frac{(b-a)^{3}}{12n^{2}} \max_{x\in[a,b]} |f''(x)| \,,$$
on $n$ és el nombre d'iteracions.
```
`````

`````ad-ex
title: Fórmula de **Simpson composta**

$$ \int_{a}^b f(x)\,dx \approx \boxed{\frac{\,h}{3} \left( f(a)+4\sum_{i=1}^{n-1} f(x_{2i-1}) + 2\sum_{j=2}^{n-2} f(x_{2j}) + f(b) \right)\,} $$

```ad-ex
title: **Error**

$$ |E| \leq \frac{(b-a)^{5}}{180n^{4}} \max_{x\in[a,b]} |f^{(4)}(x)| $$
on $n$ és el nombre d'iteracions.
```
`````


###### Càlcul **automàtic** de l'error (per Newton-Cotes)

La idea és desenvolupar un algorisme que calculi una successió d'aproximacions de la integral i les utilitzi per estimar l'error que es comet.

Definint
$$ \boldsymbol{Q_{n}}=\text{Compo}_{m}(f,[a,b],2^n) = \sum_{i=0}^{2^n-1} NC_{m}(f,[x_{i},x_{i+1}]) $$
amb $\displaystyle x_{i}=a+\frac{b-a}{2^n}\,i$ , aleshores tenim que l'error és
$$ \int_{a}^b f(x)\,dx - Q_{n+1} \approx \boxed{\,\frac{Q_{n+1}-Q_{n}}{2^{p+1}-1}\,} \,,$$
amb $p=\begin{cases}\, m &\text{si }m\text{ és senar} \\\, m+1 &\text{si }m\text{ és parell} \end{cases}$ .

`````ad-not
Si s'utilitza la fórmula dels [[#^4f1fcc|trapezis]], podem escriure
$$ Q_{n+1} = \boldsymbol{F(a,b,n,Q_{n})} = \boxed{\,\frac{Q_{n}}{2} + \frac{1}{2^{n+1}} \sum_{i=0}^{2^n-1}f(\overline{x}_{i})\,} \,,$$
on $\quad\begin{cases}\displaystyle\,\overline{x}_{i}=\frac{x_{i}+x_{i+1}}{2}\\[0.5em]\displaystyle\,x_{i}=a+\frac{b-a}{2^n}\,i\end{cases}\quad$ i $\quad\displaystyle Q_{0}=\frac{f(a)+f(b)}{2}(b-a)$ .

```py title:Algorisme
h = 0
Q0 = (f(a)+f(b)) / 2 (b-a)
Q1 = F(a,b,n,Q0)

while 1/3 * abs(Q1-Q0) > e && n<n_max:
	n++
	Q0 = Q1
	Q1 = F(a,b,n,Q1)

return Q1
```
`````

`````ad-met
title: **Refinament adaptiu**

Consisteix en adaptar les mides dels intervals en funció de `f`, establint també una mida mínima dels intervals `d_min`.

```py title:Algorisme
sol = 0
refine(a,b,(a+b)/2,f,e,(f(a)+f(b))/2*(b-a))


def refine(a,b,c,f,e,Q0):

	Q1_left = (f(a) + f(c))/2 * (c-a) 
	Q1_right = (f(c) + f(b))/2 * (b-c) 
	Q1 = Q1_left + Q1_right

	if 1/3*abs(Q1-Q0)<e || abs(b-a)<d_min:
		sol = sol + Q1
	
	else:
		refine(a,c,(a+c)/2,f,e/2,Q1_left)
		refine(c,b,(c+b)/2,f,e/2,Q1_right)

	return sol
```
`````


#### Fórmula d'integració **Gaussiana**

`````ad-def
title: *Família de polinomis ortogonals*

Un conjunt $\{ \psi_{0},\psi_{1},\dots \}$ es diu ==família de polinomis ortogonals== sobre l'interval $[a,b]$ i per una funció pes $\omega:[a,b]\to \mathbb{R}_{+}$ si:
+ $\text{gr}(\psi_{i})=i \quad \forall i\in \{ 0,1,\dots \}$ 
+ $\displaystyle\int_{a}^b \psi_{i}(x)\,\psi_{\rho}(x)\,\omega(x)\,dx \begin{cases}\, =0 &\text{si }i\neq\rho \\\, \neq0 &\text{si }i=\rho \end{cases}$

```ad-prop
title: Propietats

+ $\{ \psi_{0},\dots,\psi_{k} \}$ formen una base dels polinomis de grau $\leq k$
+ $\text{gr}(p(x))<k \implies \langle p,\psi_{k}\rangle=0$
+ $\psi_{k}$ té $k$ zeros diferents
```

```ad-met
title: Trobar una família de polinomis ortogonals

1. Comencem amb $\psi_{0}=A_{0}$ (lliure).
2. Busquem $\psi_{1}$ de grau 1 tal que $\langle \psi_{1},\psi_{0} \rangle=0$
3. Busquem $\psi_{2}$ de grau 2 tal que $\langle \psi_{2},\psi_{0} \rangle=0$ i $\langle \psi_{2},\psi_{1} \rangle=0$
4. ...
```
`````

Una ==fórmula d'integració Gaussiana== d'$m+1$ punts sobre l'interval $[a,b]$ associat a una família de polinomis ortogonals $\{ \psi_{0},\dots,\psi_{k} \}$ i respecte una funció $\omega:[a,b]\to \mathbb{R}_{+}$ és l'aproximació
$$ \int_{a}^b f(x)\,\omega(x)\,dx \approx \int_{a}^b P(x,x_{0},\dots,x_{m},f)\,\omega(x)\,dx \,,$$
on $P(x,x_{0},\dots,x_{m},f)$ és el polinomi interpolador de $f$ sobre els zeros simples $x_{0},\dots,x_{m}$ de $\psi_{m+1}$ .

```ad-prop
title: Propietat

Una fórmula d'interpolació Gaussiana és exacta per tot polinomi de grau $\leq 2m+1$ .
```

```ad-prop
title: **Error**

$$ |E_{m}| \leq \frac{f^{(2m+2)}(\xi)}{(2m+2)!} \int_{a}^{b} \omega(x)(x-x_{0})^{2}\dots(x-x_{m})^2\,dx $$
```


---
## Apèndix

```ad-not
title: Notació

+ ~={green}$\langle f,g\rangle$=~ $\displaystyle= \int_{a}^b \psi_{i}(x)\,\psi_{\rho}(x)\,\omega(x)\,dx$
```