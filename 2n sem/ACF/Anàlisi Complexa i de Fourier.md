## El cos dels **nombres complexos**

Donat $a,b\in \mathbb{R}$ definim ==$a+b\,i\in \mathbb{C}$==.
+ Part real: $\,\mathrm{Re}(a+b\,i)=a$
+ Part imaginària: $\,\mathrm{Im}(a+b\,i)=b$

````ad-met
title: Operacions
Donats ~={green}$z_{1}=a_{1}+b_{1}\,i$=~ i ~={green}$z_{2}=a_{2}+b_{2}\,i$=~ .
+ ~={green}Suma.=~ $z_{1}+z_{2}=(a_{1}+a_{2})+(b_{1}+b_{2})\,i$
+ ~={green}Producte.=~ $z_{1}z_{2}=(a_{1}a_{2}-b_{1}b_{2})+(a_{1}b_{2}+a_{2}b_{1})\,i$
+ ~={green}Mòdul.=~ $|z|=\sqrt{a^{2}+b^{2}}$
+ ~={green}Conjugat.=~ $\overline{z}=a-b\,i$ ~={faded}(simetria respecte eix $x$)=~

```ad-not
title: Observacions
+ $z=\overline{z} \iff b=0 \iff z\in \mathbb{R}$
+ $|\mathrm{Re}(z)|\leq|z|\,,\quad |\mathrm{Im}(z)|\leq|z|$
+ $\overline{z_{1}+z_{2}} = \overline{z_{1}}+\overline{z_{2}}\,,\quad \overline{z_{1}z_{2}}=\overline{z_{1}}\,\overline{z_{2}}$
```
````

```ad-def
title: *Cos*
Un ==cos== $(C,+,\cdot)$ és un objecte que compleix:
+ Per la suma:
	+ Propietat commutativa ~={faded}$z_{1}+z_{2}=z_{2}+z_{1}$=~
	+ Propietat associativa ~={faded}$(z_{1}+z_{2})+z_{3}=z_{1}+(z_{2}+z_{3})$=~
	+ Element neutre ~={faded}$z+0=z$=~
	+ Oposat ~={faded}$z+(-z)=0$=~
+ Pel producte:
	+ Propietat commutativa ~={faded}$z_{1}z_{2}=z_{2}z_{1}$=~
	+ Propietat associativa ~={faded}$(z_{1}z_{2})z_{3}=z_{1}(z_{2}z_{3})$=~
	+ Element neutre ~={faded}$1z=z$=~
	+ Invers ~={faded}$\displaystyle z\left( \frac{\overline{z}}{|z|^{2}} \right)=1$=~
```
Els nombres complexos formen un cos $(\mathbb{C},+,\cdot)$ .

#### L'**exponencial** complexa

```ad-not
title: Recordatori: **Taylor**

+ $\displaystyle e^{x} = 1+x+\frac{x^{2}}{2!}+\dots \sum_{n=0}^{\infty} \frac{x^n}{n!}$
+ $\displaystyle\cos(x)=1-\frac{x^{2}}{2}+\frac{x^{4}}{4!}-\dots=\sum_{n=0}^{\infty}\frac{(ix)^{2n}}{(2n)!}$
+ $\displaystyle\sin(x)=x-\frac{x^{3}}{3!}+\dots=-i\sum^{\infty}_{n=0} \frac{(ix)^{2n+1}}{(2n+1)!}$
```

Definim l'exponencial per nombres complexos de la següent manera:
$$\boxed{\,e^{z}:=\sum_{n=0}^{\infty} \frac{z^n}{n!}\,}$$

```ad-prop
title: Propietats

+ $e^{z}$ és absolutament convergent en $\mathbb{C}$
+ $\overline{e^{z}}=e^{\overline{z}}$
+ ~={green}Fórmula d'Euler.=~ $\,e^{ix}=\cos(x)+i\,\sin(x) \quad \forall x\in \mathbb{R}$
	+ $e^{i\pi}+1=0$
+ ~={green}Fórmula de de Moivre.=~ $\,e^{in\theta}=\cos(n\theta)+i\,\sin(n\theta)$
	+ $\cos(2\theta)=\cos^{2}(\theta)-\sin^{2}(\theta)$
	+ $\sin(2\theta)=2\sin(\theta)\cos(\theta)$
+ $e^{z_{1}}=e^{z_{2}} \iff z_{1}-z_{2}\in2\pi i\,\mathbb{Z}$
```


#### Representació **polar**

Donat $z=a+bi\in \mathbb{C}\setminus\{0\}$, existeixen
+ ==Radi== : $\boldsymbol r\displaystyle=|z|=\sqrt{a^{2}+b^{2}}$
+ ==Argument principal== : $\boldsymbol\theta=\text{Arg}(z)\in(-\pi,\pi]$ ^007c0f

tals que ~={green}$\boldsymbol{z=re^{i\theta}}$=~. A aquesta expressió li diem ==representació polar== de $z$.

![[complex-plane-polar-rectangular-1.png | 400]]


---
## Funcions de **variable complexa**

Sigui $\Omega \subset \mathbb{C}$ un obert, una ==funció de variable complexa== és
$$ \begin{align}
f: \Omega &\to \mathbb{C} \\
z &\mapsto u+vi
\end{align}$$

```ad-def
title: *Límit*

Diem que el ==límit== de $f$ en $z$ és
$$ l = \lim_{z\to z_{0}} f(z) $$
si per tot $\varepsilon$ existeix $\delta$ tal que
$$ 0<|z-z_{0}|<\delta \implies |f(z)-l|<\varepsilon $$
```

```ad-def
title: Funció *contínua*
Diem que $f$ és ==contínua== en $z_{0}$ si
$$  \lim_{z\to z_{0}} f(z) = f(z_{0}) $$
```

```ad-prop
title: Continuïtat

Una funció de variable complexa **$\boldsymbol f$ és contínua** si i només si **$\boldsymbol u$ i $\boldsymbol v$ son contínues**.
```


#### Funcions **multivaluades**

```ad-def
title: *Branca contínua*

Donada una funció multivaluada $f$ en $A$, diem que una funció $\mathcal{F}:B\to \mathbb{C}$ n'és una ==determinació== o ==branca contínua== en $B\subset A$ si $\mathcal{F}(z)$ és una elecció contínua en $B$.
```

```ad-prop
No hi ha cap branca contínua d'$\text{arg}(z)$ en $\mathbb{S}^{1}$.
```

`````ad-def
title: Logaritmes

El ==logaritme principal== de $z\in \mathbb{C}$ es defineix com
$$ \text{Log}(z) = \ln|z| + i \,\text{Arg}(z) \,.$$

on $\text{Arg}(z)$ és l'[[#^007c0f|argument principal]].

És a dir,
$$ \text{Log} : \mathbb{C}\setminus\{0\} \to \{-\pi<\mathrm{Im}(z)\leq \pi\} \,.$$

---

Un logaritme de $z\in \mathbb{C}$ és $\omega\in \mathbb{C}$ tal que $e^{\omega}=z$ .

Hi ha **infinits logaritmes** per un sol nombre complex; és a dir, és una **funció multivaluada**. Escribim ~={green}$\log(z)$=~ per denotar aquesta.

```ad-prop
title: **Propietats** del logaritme

+ ~={green}$\boldsymbol{e^{\mathcal{L}(z)}=z}$=~ per tot $\mathcal{L}(z)$ branca de $\log(z)$
	+ $\mathcal{L}(e^{z})\neq z$ en general
+ ~={green}$\boldsymbol{\log(z_{1}z_{2})=\log(z_{1})+\log(z_{2})}$=~ per $z_{1},z_{2}\in \mathbb{C}\setminus\{0\}$
	+ Fixada una branca $\mathcal{L}(z)$ pot passar que $\mathcal{L}(z_{1}z_{2})\neq \mathcal{L}(z_{1})+\mathcal{L}(z_{2})$
```
`````

```ad-prop
Sigui $r$ una semirecta de $\mathbb{C}$ amb extrem en $0$.

Aleshores existeix una branca contínua de $\text{arg}(z)$ en $\mathbb{C}\setminus r$ . 

També existeix una branca contínua de $\log(z)$ en $\mathbb{C}\setminus r$ . 
```

`````ad-def
title: Potències complexes

Siguin $z,a\in \mathbb{C}$ amb $z\neq 0$ , definim
$$ z^{a} := e^{a\log(z)} \,.$$

Aquesta també és una **funció multivaluada**.

```ad-not
title: Observació

+ $a\in \mathbb{Z} \iff z^{a}$ pren un únic valor
+ $a\in \mathbb{Q} \implies z^{a}$ pren finits valors
	+ Si $a=p/q$ amb $\text{mcd}(p,q)=1$, aleshores $z^{a}$ pren $q$ valors
+ $a\not\in \mathbb{Q} \implies z^{a}$ pren infinits valors 
```

```ad-prop
title: **Propietats** de les potències

Siguin $z,\omega,a,b\in \mathbb{C}$ amb $z,\omega\neq 0$ .

+ ~={green}$\boldsymbol{z^{a+b} \subseteq z^{a}z^{b}}$=~
	+ $z^{a+b} = z^{a}z^{b}$ si $a\in \mathbb{Z}$ o $b\in \mathbb{Z}$
+ ~={green}$\boldsymbol{z^{ab}\subseteq (z^{a})^{b}}$=~
	+ $z^{ab} = (z^{a})^{b}$ si $b\in \mathbb{Z}$
+ ~={green}$\boldsymbol{(z\omega)^{a} = z^a\,\omega^a}$=~
```
`````


###### Determinacions

`````ad-def
title: Determinacions

Sigui $X$ un espai mètric i $f:X\to \mathbb{C}\setminus\{0\}$ contínua.

+ Una ==determinació del logaritme== de $f$ en $X$ és una funció $\mathcal{L}_{f}:X\to \mathbb{C}$ contínua tal que $$ e^{\mathcal{L}_{f}(x)} = f(x) \quad \forall x\in X \,.$$

+ Una ==determinació de l'argument== de $f$ en $X$ és una funció $\mathcal{A}_{f}:X\to \mathbb{C}$ contínua tal que $$ f(x) = |f(x)| \, e^{i\mathcal{A}_{f}(x)} \quad \forall x\in X \,.$$

+ Una ==determinació de l'arrel $n$-èssima== de $f$ en $X$ és una funció $\mathcal{S}_{f}:X\to \mathbb{C}$ contínua tal que $$ \mathcal{S}_{f}(x)^{n} = f(x) \quad \forall x\in X \,.$$

```ad-prop
Donada una funció contínua $f$:
+ Si tenim una determinació $\mathcal{A}_{f}$ de l'argument, llavors tenim una determinació del logaritme: $$ \mathcal{L}_{f}(x) = \ln|f(x)| + i\mathcal{A}_{f}(x) $$
+ Si tenim una determinació $\mathcal{L}_{f}$ del logaritme, llavors:
	+ Tenim una determinació de l'argument: $$ \mathcal{A}_{f}(x) = \mathrm{Im}(\mathcal{L}_{f}) $$
	+ Tenim una determinació de l'arrel $n$-èssima: $$ \mathcal{S}_{f}(x) = e^{\frac{1}{n}\mathcal{L}_{f}(x)} $$
```
`````

```ad-prop
Sigui $X$ un espai mètric i $f:X\to \mathbb{C}\setminus\{0\}$ contínua, amb $\mathcal{L}_{1},\mathcal{L}_{2}$ determinacions del logaritme de $f$ en $X$.

Aleshores
$$ \mathcal{L}_{1}(x) = \mathcal{L}_{2}(x) + 2k\pi i \quad \forall x\in X $$
per un $k\in \mathbb{Z}$ .
```


---
#### **Sèries** de potències

Una ==sèrie de potències== de nombres complexos és
$$ \sum_{n\geq0} a_{n}(z-b)^n $$
on $\{a_{n}\}$ és una successió de nombres complexos i $b\in \mathbb{C}$ .

`````ad-def
title: Convergència *uniforme*

Diem que una successió de funcions $\{f_{n}\}$ tendeix a $f$ en $A$ ==uniformement== si
$$ \sup_{z\in A} |f_{n}(z)-f(z)| \to 0 \,.$$

```ad-prop
Una sèrie de funcions $\sum_{n\geq 0}f_{n}$ convergeix uniformement en $A$ si la successió $\sum_{i=0}^n f_{i}$ convergeix uniformement en $A$.
```

```ad-prop
Una successió $\{f_{n}\}$ és uiformement convergent si i només si és uniformement de Cauchy.
```
`````

```ad-teor
title: Criteri **M de Weierstrass**

Sigui $\sum_{n}f_{n}$ una sèrie de funcions amb $f_{n}:A\to \mathbb{C}$.

Si $|f_{n}(z)|\leq M_{n}$ per tot $z\in A$ amb $\sum_{n}M_{n}<\infty$ , aleshores $\sum_{n}f_{n}$ convergeix absoluta i uniformement en $A$.
```

```ad-teor
title: Teorema de **Cauchy-Hadamard**

Sigui
$$\sum_{n\geq0}a_{n}(z-b)^n$$
una sèrie de potències de nombres complexos.

Llavors existeix un únic $R\in[0,+\infty]$ anomenat ==radi de convergència== tal que:
+ $|z-b|<R \implies$ la sèrie ~={green}convergeix absolutament=~
	+ $|z-b|\leq r \quad \forall\, r\in[0,R) \implies$ la sèrie també ~={green}convergeix uniformement=~
+ $|z-b|>R \implies$ la sèrie és ~={green}divergent=~

A més,
$$ R^{-1} = \limsup_{n\to\infty} \sqrt[n]{a_{n}} \,.$$
```
^3fc2ca

```ad-prop
title: Criteri del **quocient**

Sigui
$$\sum_{n\geq0}a_{n}(z-b)^n$$
una sèrie de potències de nombres complexos.

Aleshores el seu [[#^3fc2ca | radi de convergència]] és
$$ R = \boxed{\,\lim_{n\to\infty} \frac{|a_{n}|}{|a_{n+1}|}\,} \,.$$
```


###### Comportament a la **frontera** del disc de convergència

Sabem que una sèrie de nombres complexos
$$\sum_{n\geq0}a_{n}(z-b)^n$$
convergeix dins del disc de convergència i divergeix fora d'aquest. A la frontera, però, pot convergir o no.

Per determinar-ho estudiarem la sèrie a la frontera
$$ \sum_{n\geq 0} a_{n} R^n e^{in\theta} .$$

Per $\theta$ fixat:
+ $\displaystyle\lim_{n\to\infty}|a_{n}|\,R^{n} \neq 0 \implies$ la sèrie és divergent

```ad-prop
title: Fórmula de **sumació per parts**

Siguin $\{a_{n}\},\{b_{n}\}$ dues successions de nombres complexos. Aleshores
$$ \sum_{i=1}^n a_{i}b_{i} = (a_{1}+\dots+a_{n})\,b_{n+1} - \sum_{i=1}^n (a_{0}+\dots+a_{i})(b_{i+1}-b_{i}) \,.$$
```

```ad-teor
title: Criteri de **Dirichlet uniforme**

Siguin $\{a_{n}\}_{n\geq1}, \{b_{n}\}_{n\geq1}$ dues successions de funcions $a_{n}:X\to \mathbb{C}$ i $b_{n}:Y\to \mathbb{R}$ .

Si existeix $M>0$ tal que
$$\left|\sum_{i=1}^N a_{i}(x) \right| \leq M $$
per tot $x\in X$ i $N\geq1$, i $\{b_{n}\}_{n\geq1}$ és no negativa i uniformement decreixent cap a 0 en $Y$.

Aleshores la sèrie funcional
$$ \sum_{n=1}^{\infty} a_{n}(x)\,b_{n}(y) $$
convergeix uniformement en $X\times Y$.
```

```ad-teor
title: Teorema d'**Abel**

Si una sèrie de potències
$$ \sum_{n=0}^{\infty} a_{n}(z-b)^n $$
convergeix uniformement en $A\subset \mathbb{C}$ , aleshores també convergeix uniformemen en el conjunt
$$ C(A,b) = b + \bigcup_{t\in[0,1]} t\,(A-b) \,.$$

En particular, si la sèrie convergeix en $z_{0}$ amb $|z_{0}-b|=R$, aleshores
$$ \lim_{r\to1^-} \sum_{n\geq0} a_{n} r^n (z_{0}-b)^n = \sum_{n\geq0} a_{n} (z_{0}-b)^n \,.$$
```


## **Derivació** complexa

#### Funcions **holomorfes**

Sigui $\Omega \subset \mathbb{C}$ un [[#^c33d2a|obert]], $f:\Omega\to \mathbb{C}$ i $z_{0}\in\Omega$ .

Diem que $f$ és ==holomorfa== (o $\mathbb{C}$-derivable) en $z_{0}$ si existeix
$$ \boldsymbol{f'(z)} := \lim_{z\to z_{0}} \frac{f(z)-f(z_{0})}{z-z_{0}} = \lim_{h\to0} \frac{f(z_{0}+h)-f(z_{0})}{h} \,.$$

```ad-def
title: Funció *entera*

Si $f$ és holomorfa en tot $z_{0}\in\Omega$, diem que $f$ és una ==funció entera== i escrivim $f\in H(\Omega)$ .
```

```ad-not
title: Notació

+ $\displaystyle g(z) = o(z) \,\,\iff \lim_{z\to0} \frac{g(z)}{z}=0$
+ $\displaystyle g(z) = \mathcal{O}(z) \iff \limsup_{z\to0} \frac{g(z)}{z}<+\infty$
```

````ad-prop
title: **Propietats** de les funcions holomorfes

+ $f$ holomorfa en $z_{0} \implies f$ contínua en $z_{0}$
+ $f$ i $g$ holomorfes en $z_{0} \implies f+g$ i $f\cdot g$ holomorfes en $z_{0}$ amb
$$ \begin{align}
(f+g)'(z_{0}) &= f'(z_{0}) + g'(z_{0}) \\[0.5em]
(f\cdot g)'(z_{0}) &= f'(z_{0})\,g(z_{0}) + f(z_{0})\,g'(z_{0})
\end{align} $$
+ $f$ holomorfa en $z_{0}$ amb $f'(z_{0})\neq 0 \implies f^{-1}$ holomorfa en $z_{0}$ amb 
$$ (f^{-1})'(z_{0}) = \frac{-f'(z_{0})}{(f(z_{0}))^{2}} $$
+ Siguin $\Omega,G\subset \mathbb{C}$ oberts, i $f:G\to \mathbb{C}$ i $g:\Omega\to \mathbb{C}$ amb $f(G)\subset\Omega$ :
	+ ~={green}Regla de la cadena.=~ Si $f$ és holomorfa en $z_{0}$ i $g$ és holomorfa en $f(z_{0})$, aleshores $g\circ f$ és  holomorfa en $z_{0}$ amb $$ (g\circ f)'(z_{0}) = g'(f(z_{0}))\cdot f'(z_{0}) \,.$$
	+ ~={green}Derivada de la inversa.=~ Si es compleix $$ g(f(z))=z $$ i $g$ és holomorfa en $\Omega$ i $g'(f(z))\neq 0$ per tot $z\in\Omega$, aleshors $f$ és holomorfa en $G$ amb $$ f'(z) = \frac{1}{g'(f(z))} \,.$$
+ ~={green}Derivada del logaritme.=~ Qualsevol branca contínua del logaritme és holomorfa, amb $$ \mathcal{L}'(z) = \frac{1}{z} $$

```ad-not
Si, donat $\alpha\in \mathbb{R}$, considerem la banda horitzontal oberta
$$ B_{\alpha} = \{ z\in \mathbb{C} \mid \mathrm{Im}(z)\in(\alpha-\pi,\,\alpha+\pi) \} \,,$$
aleshores la funció exponencial complexa és biholomorfa entre $B_{\alpha}$ i $\mathbb{C}\setminus e^{i\alpha}(-\infty,0]$ .
```
````


#### Equacions de **Cauchy-Riemann**

Una funció de variable complexa $f:\Omega \subset \mathbb{C}\to \mathbb{C}$ la podem interpretar com una funció:
$$ \begin{align}
f: \Omega \subset \mathbb{R}^{2} &\to \mathbb{R}^{2} \\
(x,y) &\mapsto (u(x,y),v(x,y))
\end{align} $$

````ad-def
title: Derivades de *Wirtinger*

Sigui $z=x+iy$, les ==derivades de Wirtinger== son els operadors diferencials:
1. $\displaystyle\frac{\partial}{\partial z}=\frac{1}{2}\left( \frac{\partial}{\partial x}-i \frac{\partial}{\partial y} \right)$
2. $\displaystyle\frac{\partial}{\partial z}=\frac{1}{2}\left( \frac{\partial}{\partial x}+i \frac{\partial}{\partial y} \right)$

```ad-not
title: Notació
+ $\displaystyle\partial f = \partial_{z}f = \frac{\partial f}{\partial z}$ 
+ $\displaystyle\overline{\partial} f = \partial_{\overline{z}}f = \frac{\partial f}{\partial \overline{z}}$ 
```
````

```ad-teor
Siguin $f:\Omega \subset \mathbb{C}\to\mathbb{C}$ i $z_{0}=x_{0}+iy_{0}$ tal que
$$ f(x+iy) = u(x+yi) + iv(x+iy) \,.$$
Son equivalents:
+ $f$ és holomorfa en $z_{0}$ amb $f'(z_{0})=a+ic$
+ $f$ interpretada com a funció $\mathbb{R}^{2}\to \mathbb{R}^{2}$ és $\mathbb{R}$-diferenciable en $(x_{0},y_{0})$ amb
$$ Df(x_{0},y_{0}) = \begin{pmatrix}
a & -c \\
c & a
\end{pmatrix} \,,$$
és a dir, $f$ compleix les ==equacions de Cauchy-Riemann==:
$$ \begin{cases}
\, \partial u_{x} = \partial v_{y} \\
\, \partial u_{y} = -\partial v_{x}
\end{cases} $$
o, equivalentment, $\overline{\partial}f(z_{0})=0$ .
```


---
## Apèndix

```ad-def
title: Topologia

+ ~={green}Disc (obert).=~ $\,D_{r}(a)=\{z\in \mathbb{C} | |z-a|<r\}$
	+ ~={green}Disc unitat.=~ $\,D_{1}(0)$
	+ ~={green}Disc tancat.=~ $\,\overline{D_{r}(a)}$
+ **Conjunts**.
	+ ~={green}Obert.=~$\quad\forall z\in A \quad\exists r>0\,$ tal que $\,D_{r}(z)\subset U$
	+ ~={green}Tancat.=~$\quad A^C$ és obert
	+ ~={green}Fitat.=~$\quad \exists \,r>0\,$ tal que $\,U\subset D_{r}(0)$
	+ ~={green}Connex.=~$\quad A\neq(A\cap U)\cup(A\cap V)$ amb $U,V$ oberts intersecant $A$
	+ ~={green}Arcconnex.=~$\quad\forall x,y\in A\quad \exists\,\gamma:[0,1]\to A\,$ tal que:
		+ $\gamma\in \mathbb{C}([0,1])$
		+ $\gamma(0)=x$
		+ $\gamma(1)=y$
	+ ~={green}Domini.=~ $A$ obert i connex
```

^c33d2a

