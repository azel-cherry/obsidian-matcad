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

```ad-prop
title: **Error**

$$ |E| \leq \frac{(b-a)^{3}}{12} \max_{x\in[a,b]} |f''(x)| $$
```
`````
^4f1fcc

`````ad-ex
title: Fórmula de **Simpson**

$$ \int_{a}^b f(x)\,dx \approx \boxed{\,\frac{b-a}{6}\left( f(a)+4f\left( \frac{a+b}{2} \right) +f(b) \right)} $$

```ad-prop
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

```ad-prop
title: **Error**

$$ |E| \leq \frac{(b-a)^{3}}{12n^{2}} \max_{x\in[a,b]} |f''(x)| \,,$$
on $n$ és el nombre d'iteracions.
```
`````

`````ad-ex
title: Fórmula de **Simpson composta**

$$ \int_{a}^b f(x)\,dx \approx \boxed{\frac{\,h}{3} \left( f(a)+4\sum_{i=1}^{n-1} f(x_{2i-1}) + 2\sum_{j=2}^{n-2} f(x_{2j}) + f(b) \right)\,} $$

```ad-prop
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

```ad-def
title: Família de polinomis **estandaritzada**

La ==família de polinomis ortogonals estandaritzada== es defineix com la família de polinomis ortogonals
+ respecte l'interval $[-1,1]$ ,
+ respecte la funció pes $w(x)=1$ ,
+ i que satisfan $\psi_{k}(1)=1 \quad \forall k\geq 0$ .
```

````ad-met
title: **Recurrència** dels polinomis ortogonals

Podem calcular una família de polinomis ortogonals amb la fórmula
$$ \psi_{k+1} = \frac{A_{k+1}}{A_{k}} ((x-\alpha_{k})\,\psi_{k}(x)-\alpha_{k-1}\,\psi_{k-1}(x)) \,,$$
amb
$$ \alpha_{k} = \frac{\langle\psi_{k},x\,\psi_{k}\rangle }{\langle \psi_{k},\psi_{k} \rangle } \quad\text{i}\quad \alpha_{k-1}=\frac{\langle \psi_{k},x\,\psi_{k-1} \rangle }{\langle \psi_{k-1},\psi_{k-1} \rangle }\,, $$
i on els primers termes son
$$ \psi_{0}=A_{0} \quad\text{i}\quad \psi_{1}=A_{1}\left( x-\frac{\langle \psi_{0},x\,\psi_{0} \rangle }{\langle \psi_{0},\psi_{0} \rangle } \right) \,.$$

```ad-not
Pels polinomis estandaritzats, es pot simplificar la fórmula:
$$ \psi_{k+1}(x) = \frac{2k+1}{k+1}\,x\,\psi_{k}(x) - \frac{k}{k+1}\,\psi_{k-1}(x) \,,$$
amb $\psi_{0}(x)=1$ i $\psi_{1}(x)=x$ .
```
````
`````
^0d3814

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

```ad-prop
title: Càlcul dels **pesos**

Els pesos $W_{k}$ satisfan
$$ W_{k} = \frac{A_{m+1}}{A_{m}} \, \frac{\langle \psi_{m},\psi_{m} \rangle }{\psi'_{m+1}(x_{k})\,\psi_{m}(x_{k})} $$
per $k=0,\dots,m$ .
```


###### Fórmula de **Gauss-Legendre**

És la fórmula d'integració Gaussiana associada als [[#^0d3814 | polinomis ortogonals estàndards de Legendre]], és a dir, aplicada a l'interval $[-1,1]$ i amb la funció pes $w(x)=1$ :
$$ \int_{-1}^{1} f(x)\,dx = \sum_{k=0}^{m} W_{k}\,f(x_{k}) \quad\text{amb}\quad W_{k}=\frac{2}{(1-x_{k}^{2})\,\psi'_{m+1}(x_{k})^{2}} \,.$$

```ad-prop
title: **Error**

$$ |E_{m}| \leq \frac{2^{2m+3}((m+1)!)^{4}}{(2m+3)((2m+2)!)^{3}}\,f^{(2m+2)}(\xi) $$
amb $\xi\in(-1,1)$.
```


###### Fórmula de **Gauss-Txebyshew**

````ad-def
title: Polinomis de Txebyshew

Els ==polinomis de Txebyshew== estan definits per
$$ T_{k}(x) = \cos(k \arccos(x)) \,,$$
que venen determinats per la recurrència
$$ T_{k+1}(x) = 2x\,T_{k}(x) - T_{k-1} \quad\text{amb}\quad T_{0}(x)=1\,,\,T_{1}(x)=x \,.$$

```ad-prop
Es pot veure que aquests polinomis son una **família de polinomis ortogonals** respecte l'interval $[-1,1]$ i la funció pes
$$ w(x) = \frac{1}{\sqrt{1-x^{2}}} \,,$$
dels quals n'és molt fàcil calcular els zeros.
```
````

La fórmula de Gauss-Txebyshew és 
$$ \int_{-1}^{1} f(x)\,\frac{1}{\sqrt{1-x^{2}}}\,dx \approx \sum_{k=0}^{m} W_{k}\,f(x_{k}) $$
amb
$$ x_{k} = \frac{\pi(1+2k)}{2m+2} \quad\text{i}\quad W_{k}=\frac{\pi}{m+1} \,.$$

```ad-prop
title: **Error**

$$ |E_{m}| = \frac{\pi}{2^{2m+1}\,(2m+2)!}\,f^{(2m+2)}(\xi) $$
amb $\xi\in(-1,1)$.
```


#### Integrals **singulars**

Les fórmules d'integració interpolatòria son per funcions contínues en intervals tancats. Quan la funció que volem integrar presenta singularitats, s'han de tractar prèviament.

```ad-met
title: Discontinuïtat **de salt**

> Considerem $f$ amb una discontinuïtat de salt $c\in(a,b)$.

Caldrà treballar els dos intervals $[a,c]$ i $[c,b]$ per separat:
$$ I_{1}=\int_{a}^{c}f(x)\,dx\,, \quad I_{2}=\int_{c}^{b}f(x)\,dx $$
```

```ad-met
title: Discontinuïtat **asimptòtica** en un extrem

> Considerem $f$ de la forma $\displaystyle\frac{\phi(x)}{(x-a)^{\mu}}$, amb  $\mu\in[0,1)$ i $\phi(x)\in C^{1}$.

Caldrà separar la integral:
$$ \int_{a}^{b} \frac{\phi(x)}{(x-a)^{\mu}} = \int_{a}^{b} \frac{\phi(x)-\phi(a)}{(x-a)^{\mu}}\,dx + \int_{a}^{b} \frac{\phi(a)}{(x-a)^{\mu}}\,dx \,,$$
on la segona integral es pot calcular de forma exacta, i la primera és contínua i per tant es pot calcular numèricament:
$$ \frac{\phi(x)-\phi(a)}{(x-a)^{\mu}} = \phi'(\xi(x))(x-a)^{1-\mu} \,.$$
```

```ad-met
title: Interval **no acotat**

> Considerem la integral $\displaystyle\int_{a}^{\infty}f(x)\,dx \neq \infty$ .

Donat un error $\delta$, caldrà trobar $c>a$ tal que
$$ \int_{c}^{\infty}f(x)\,dx < \frac{\delta}{2} $$
i calcular numèricament
$$ I = \int_{a}^{c} f(x)\,dx $$
amb un error menor a $\delta/2$ .
```


---
## Mètodes de **Monte Carlo**

Els mètodes de Monte Carlo permeten calcular certes quantitats de manera **probabilística**, i es basen en el següent enunciat:

> *Si una quantitat $\mu$ es pot expressar com l'esperança d'una variable aleatòria $X$, aleshores podem aproximar $\mu$ si sabem generar realitzacions d'$X$.*

`````ad-teor
title: Llei dels **grans nombres**

Siguin $X_{1},X_{2},\dots$ variables aleatòries idènticament distribuïdes tal que $\text{E}(X_{i})=\mu$ per tot $i\in \mathbb{N}$.

Aleshores per tot $\varepsilon>0$
$$ \lim_{n\to\infty} P\left( \left\lvert \frac{1}{n} \sum_{i=1}^{n} X_{i}-\mu \right\rvert \geq\varepsilon \right) = 0 \,.$$

```ad-prop
En general, sigui $\mu_{n}$ la *v.a.*
$$ \mu_{n}=\frac{1}{n}\sum_{i=1}^{n}X_{i} \,,$$
i $\widehat{\mu}_{n}$ una realització de $\mu_{n}$ , si volem que
$$ \mu\in(\widehat{\mu}_{n}-\varepsilon \,,\, \widehat{\mu}_{n}+\varepsilon) $$
amb un grau de confiança d'$1-\alpha$, aleshores cal prendre $n$ prou gran tal que
$$ P\left( \left\lvert \frac{1}{n} \sum_{i=1}^{n} X_{i}-\mu \right\rvert \geq\varepsilon \right) < \alpha \,.$$
```
`````

````ad-teor
title: Teorema **central del límit**

Siguin $X_{1},X_{2},\dots$ variables aleatòries idènticament distribuides tal que $\text{E}(X_{i})=\mu$ i $\text{Var}(X_{i})=\sigma ^2$ per tot $i\in \mathbb{N}$, i sigui $\mu_{n}$ la *v.a.*
$$ \mu_{n}=\frac{1}{n}\sum_{i=1}^{n}X_{i} \,.$$

Aleshores
$$ Z_{n} = \frac{\sqrt{n}}{\sigma}\,(\mu_{n}-\mu) $$
convergeix a $Z\sim N(0,1)$. És a dir,
$$ \lim_{n\to\infty}P(Z_{n}<z) = P(Z<z) = \int_{-\infty}^{z} \frac{1}{\sqrt{2\pi}}\,e^{- \frac{x^{2}}{2}}\,dx \,.$$

```ad-not
Això també es compleix refefinint
$$ Z_{n} = \frac{\sqrt{n}}{\sigma_{n}}\,(\mu_{n}-\mu) \quad\text{amb}\quad \sigma_{n} = \frac{1}{n-1} \sum_{i=1}^{n}(X_{i}-\mu_{n})^{2} \,.$$
```
````

````ad-prop
title: **IC per $\boldsymbol\mu$**

Sigui $z(\alpha)>0$ tal que $P(-z(\alpha)<Z<z(\alpha))=1-\alpha$, tenim
$$ \mu \in \left( \widehat{\mu}_{n} \pm \frac{\widehat{\sigma}_{n}\,z(\alpha)}{\sqrt{n}} \right) $$
amb un grau de confiança $1-\alpha$, on
$$ \widehat{\mu}_{n}=\frac{1}{n}\sum_{i=1}^{n}x_{i} \quad\text{i}\quad \widehat{\sigma}_{n} = \frac{1}{n-1} \sum_{i=1}^{n}(x_{i}-\mu_{n})^{2} $$

```ad-not
Aquest IC és aproximat. Si $n$ no és prou gran, pot passar que es conclogui que $\mu=\mu_{n}$ amb una confiança del 100%.
```

```ad-met
title: Calcular $n$

Fixant $\varepsilon$ i $\alpha$, trobem el valor de $n$ per tal que l'IC de grau $1-\alpha$ sigui $\varepsilon$.

1. Prenem $n_{0}$ arbitrari, i calculem $n_{0}$ realitzacions d'$X$ $x_{1},\dots,x_{n_{0}}$.

2. Calculem
	$$ \widehat{\mu}_{n_{0}}=\frac{1}{n_{0}}\sum_{i=1}^{n_{0}}x_{i} \quad\text{i}\quad \widehat{\sigma}_{n_{0}} = \frac{1}{n_{0}-1} \sum_{i=1}^{n_{0}}(x_{i}-\mu_{n_{0}})^{2} \,.$$

3. Comprovem si
	$$ \frac{\widehat{\sigma}_{n_{0}}\,z(\alpha)}{\sqrt{n_{0}}} < \varepsilon \,.$$
	Si es compleix, hem acabat. Si no, continuem:

4. Agafem un nou $n$
	$$ n_{1} = \left\lceil  \left( \frac{\widehat{\sigma}_{n_{0}}\,z(\alpha)}{\varepsilon} \right)^{2} \right\rceil $$
	i tornem al pas 2.
```
````


#### **Reducció** de la **variància**

L'**error** en el mètode de Monte Carlo es comporta com $\boldsymbol{\frac{\sigma}{\sqrt{n}}}$ per $n$ prou gran, per tant es pot reduir l'error **reduint la variància**.

Això comporta **treballar amb altres *v.a.*s** que tinguin una variància menor.

A partir d'ara ens centrarem en el problema de calcular la integral
$$ \int_{0}^1 g(x)\,dx $$
o, equivalentment, trobar l'esperança $\text{E}(Y)$ amb $Y=g(X)$, i $X\sim U(0,1)$. 


###### **Mostreig d'importància**

La idea és reescriure la mitjana de $g(X)$, on la densitat de $X$ s'anomena ==densitat nominal== $f_{X}$ , en termes d'una altra *v.a.* $\tilde{X}$, on la seva densitat $f_{\tilde{X}}$ s'anomena ==densitat d'importància==.

Concretament, sigui $Y=g(X)$, prendrem
$$ \tilde{Y} = \frac{g(\tilde{X})\,f_{X}(\tilde{X})}{f_{\tilde{X}}(\tilde{X})} \,,$$
que compleix
+ $\text{E}(\tilde{Y})=\text{E}(Y):=\mu$
+ $\displaystyle\text{Var}(\tilde{Y})=\int_{-\infty}^{\infty}\left( \frac{g(x)f_{X}(x)-\mu f_{\tilde{X}}(x)}{f_{\tilde{X}}(x)} \right)^{2}f_{\tilde{X}}(x)\,dx$

````ad-prop
title: Densitat d'importància

Si $g(x)$ ~={green}és positiva=~, aleshores la densitat d'importància òptima és
$$ f_{\tilde{X}}(x) = \frac{g(x)f_{X}(x)}{\mu} \,,$$
que té variància nul·la.

---

Si $g(x)$ ~={pink}no és positiva=~, aleshores la densitat òptima és
$$ f_{\tilde{X}}(x) = \frac{|g(x)|f_{X}(x)}{\mu} \,,$$
que no té variància nul·la.

```ad-not
No podem conèixer aquesta densitat òptima ja que no coneixem $\mu$.

No obstant, ens ajuda a determinar que hem d'aconseguir que
$$ \begin{cases}
\displaystyle\frac{g(x)f_{X}(x)}{f_{\tilde{X}}(x)} &\text{si }g(x)\text{ positiva} \\[0.6em]
\displaystyle\frac{|g(x)|f_{X}(x)}{f_{\tilde{X}}(x)} &\text{si }g(x)\text{ no positiva}
\end{cases} $$
sigui tan constant com es pugui.
```
````


#### **Generació** de *v.a.*s

Per generar realitzacions de *v.a.*s arbitràries **es parteix de realitzacions d'una *v.a.* $\boldsymbol{U(0,1)}$**, generades per mètodes deterministes que retornen una seqüència de números distribuïts de manera molt similar a una uniforme (com que no son pròpiament aleatoris, es diuen nombres **pseudo-aleatoris**).

###### Mètode de la **inversa**

Aquest mètode permet generar realitzacions d'una *v.a.* $X$ si coneixem la seva funció de distribució $F_{X}(x)=P(X<x)$ .

```ad-def
title: *Inversa generalitzada* de $\boldsymbol{F_{X}}$

$$ F_{X}^{-1}(u) = \text{inf}\{x \in \mathbb{R} \mid F_{X}(x)\geq u\} $$
```

```ad-teor
Sigui $F_X$ la funció de distribució de la *v.a.* $X$, $F_{X}^{-1}$ la seva inversa generalitzada i $U\sim U(0,1)$.

Aleshores la *v.a.* $F_{X}^{-1}(U)$ té la mateixa distribució que $X$.
```


###### Mètode d'**acceptació rebuig**

Quan no es pot trobar la inversa $F_{X}^{-1}$ fàcilment, aquest mètode permet generar realitzacions de $X$ solament avaluant la seva funció de densitat $f_{X}(x)$.

S'haurà de saber generar realitzacions d'una *v.a.* $Y$ amb funció de densitat $f_{Y}$ que compleix $f_{X}\leq m\,f_{Y}$ per un $m>0$ .

```ad-met

1. Generem una realització $x$ de $Y$.
2. Generem una realització $u$ de $U\sim\text{Unif}(0,1)$.
3. Si es compleix
	$$ u < \frac{f_{X}(x)}{m\,f_{Y}(x)} \,,$$
	acceptem $x$ com a realització de $X$.
```


---
## Apèndix

```ad-not
title: Notació

+ ~={green}$\langle f,g\rangle$=~ $\displaystyle= \int_{a}^b \psi_{i}(x)\,\psi_{\rho}(x)\,\omega(x)\,dx$
```