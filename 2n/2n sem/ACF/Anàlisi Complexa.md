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
$$\boxed{\,e^{z}:=\sum_{n=0}^{\infty} \frac{z^n}{n!}\,}$$ ^098cbf

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


#### **Arrels** $n$-èssimes

$$ \sqrt[n]{re^{i\theta}} \in \left\{ \sqrt[n]{r}\,e^{i\frac{\theta+2k\pi}{n}} \mid k=1,\dots,n \right\} $$


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
$$ \boxed{\, \frac{1}{R} = \limsup_{n\to\infty} \sqrt[n]{|a_{n}|} \,} \,.$$
```
^3fc2ca

```ad-prop
title: Criteri del **quocient**

Sigui
$$\sum_{n\geq0}a_{n}(z-b)^n$$
una sèrie de potències de nombres complexos.

Aleshores el seu [[#^3fc2ca | radi de convergència]] és
$$ \boxed{\, R = \lim_{n\to\infty} \frac{|a_{n}|}{|a_{n+1}|}\,} \,,$$
si el límit existeix.
```


###### **Frontera** del disc de convergència

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


---
## **Derivació** complexa

#### Funcions **holomorfes**

Sigui $\Omega \subset \mathbb{C}$ un [[#^c33d2a|obert]], $f:\Omega\to \mathbb{C}$ i $z_{0}\in\Omega$ .

Diem que $f$ és ==holomorfa== (o $\mathbb{C}$-derivable) en $z_{0}$ si existeix
$$ \boldsymbol{f'(z)} := \lim_{z\to z_{0}} \frac{f(z)-f(z_{0})}{z-z_{0}} = \lim_{h\to0} \frac{f(z_{0}+h)-f(z_{0})}{h} \,.$$
Si $f$ és holomorfa en tot $z\in\Omega$, escrivim $f\in H(\Omega)$ .

```ad-def
title: Funció *entera*

Si $f$ és holomorfa en tot $z_{0}\in \mathbb{C}$, diem que $f$ és una ==funció entera==.
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


#### **Derivació** complexa

Una funció de variable complexa $f:\Omega \subset \mathbb{C}\to \mathbb{C}$ la podem interpretar com una funció:
$$ \begin{align}
f: \Omega \subset \mathbb{R}^{2} &\to \mathbb{R}^{2} \\
(x,y) &\mapsto (u(x,y),v(x,y))
\end{align} $$

````ad-def
title: Derivades de *Wirtinger*

Sigui $z=x+iy$, les ==derivades de Wirtinger== son els operadors diferencials:
1. $\displaystyle\frac{\partial}{\partial z}=\frac{1}{2}\left( \frac{\partial}{\partial x}-i \frac{\partial}{\partial y} \right)$
2. $\displaystyle\frac{\partial}{\partial \overline{z}}=\frac{1}{2}\left( \frac{\partial}{\partial x}+i \frac{\partial}{\partial y} \right)$

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
+ $f$ és holomorfa en $z_{0}$ amb
	$$ \boxed{\,f'(z_{0})=\partial_{x} u+i\,\partial_{y}v\,} \,.$$
+ $f$ interpretada com a funció $\mathbb{R}^{2}\to \mathbb{R}^{2}$ és $\mathbb{R}$-diferenciable en $(x_{0},y_{0})$ amb
$$ Df(x_{0},y_{0}) = \begin{pmatrix}
a & -c \\
c & a
\end{pmatrix} \,,$$
és a dir, $f$ compleix les ==equacions de Cauchy-Riemann==:
$$ \begin{cases}
\, \partial_{x}u = \partial_{y}v \\
\, \partial_{y}u = -\partial_{x}v
\end{cases} $$
o, equivalentment, $\overline{\partial}f(z_{0})=0$ .
```

```ad-prop

Sigui $\Omega \subset \mathbb{C}$ un obert connex, amb $f\in H(\Omega)$ i $f'(z)=0$ per tot $z\in\Omega$ .

Aleshores $f$ és **constant**.
```

```ad-not
title: Efecte de la derivada

Sigui $f$ holomorfa en $z_{0}$ amb $f'(z_{0})\neq 0$.

+ Les corbes de nivell de $u$ i $v$ son ortogonals.
+ En un entorn infinitessimal de $z_{0}$, $f(z)$ dilata les distàncies en un factor de $|f'(z_{0})|$: $$ |f(z)-f(z_{0})| \approx |f'(z_{0})|\cdot|z-z_{0}| \,,$$
i gira els vectors que surten de $z_{0}$ en un angle $\text{Arg}(f'(z_{0}))$: $$ \text{Arg}(f(z)-f(z_{0})) \approx \text{Arg}(f'(z_{0}))+\text{Arg}(z-z_{0}) \,.$$
```

```ad-def
title: Funció *conforme*

Una funció $f$ és ==conforme== si l'angle entre dues corbes $\gamma_{1},\gamma_{2}$ que s'intersequen en el punt $z$ es preserva, incloent l'orientació.
```


#### **Càlcul** de derivades

```ad-prop
Siguin
$$ \begin{align}
P(z) &= \sum_{\substack{n,m\in \mathbb{N}\\ n+m\leq N}} a_{n,m}\,z^{n}\,\overline{z}^{m}, \\[0.5em]
Q(z) &= \sum_{\substack{n,m\in \mathbb{N}\\ n+m\leq N}} b_{n,m}\,z^{n}\,\overline{z}^{m}
\end{align} $$
dos polinomis en variables $z,\overline{z}$.

Aleshores
$$ P=Q \iff a_{n,m}=b_{n,m} \quad \forall\,n,m \,.$$
```

````ad-prop
Sigui
$$ A = \begin{pmatrix}
a & b \\
c & d
\end{pmatrix} $$
una matriu de coeficients reals, i $f_{A}:\mathbb{R}^{2}\to \mathbb{R}^{2}$ definida per
$$ f_{A}(z) = f_{A}(x,y) = A \cdot \begin{pmatrix}
x \\
y
\end{pmatrix} $$
amb $z=x+iy$ . Aleshores per tot $(x,y)\in \mathbb{R}^{2}$
$$ f_{A}(x,y) = \frac{1}{2} ((\alpha-i\beta)z + (\alpha+i\beta)\overline{z}) \,,$$
amb $\alpha=a+ic$ i $\beta=b+id$ .

```ad-not
title: Observació

Donada una funció $f:\mathbb{C}\to \mathbb{C}$ diferenciable, aleshores en tot punt del domini $z_{0}$ i per tot vector $z\in \mathbb{C}$ tenim
$$ Df_{z_{0}}(z) = \partial f(z_{0}) \cdot z + \overline{\partial}f(z_{0})\cdot \overline{z} \,.$$
```
````

`````ad-prop
title: **Regla de la cadena**

Siguin $f$ i $g$ diferenciables en un obert, aleshores:
+ $\partial(f\circ g) = \partial f\,\partial g+\overline{\partial}f\,\overline{\overline{\partial}g}$
+ $\overline{\partial}(f\circ g) = \partial f\,\overline{\partial}g + \overline{\partial}f\,\overline{\partial g}$

```ad-not
+ $\partial \overline{g}=\overline{\overline{\partial}g}$
+ $\overline{\partial}\overline{g} = \overline{\partial g}$
```
`````

```ad-prop
Siguin
$$\begin{align}
g = (g_{1},g_{2})&:\mathbb{C}\to \mathbb{C}\times \mathbb{C} \\
f &:\mathbb{C}\times\mathbb{C}\to \mathbb{C}
\end{align}$$
funcions diferenciables, i siguin $(z,w)=(x_{1}+ix_{2},\,x_{2}+ix_{4})\sim(x_{1},x_{2},x_{3},x_{4})$ amb
$$ \begin{align}
\partial_{z}f = \frac{1}{2} \left( \frac{\partial f}{\partial x_{1}} - i \frac{\partial f}{\partial x_{2}} \right), \quad \partial_{\overline{z}}f = \frac{1}{2} \left( \frac{\partial f}{\partial x_{1}} + i \frac{\partial f}{\partial x_{2}} \right), \\
\partial_{w}f = \frac{1}{2} \left( \frac{\partial f}{\partial x_{3}} - i \frac{\partial f}{\partial x_{4}} \right), \quad \partial_{\overline{w}}f = \frac{1}{2} \left( \frac{\partial f}{\partial x_{3}} + i \frac{\partial f}{\partial x_{4}} \right),
\end{align} $$
aleshores:
+ $\partial(f\circ g)=\partial_{z}f\,\partial g_{1}+\partial_{w}f\,\partial g_{2}+\partial_{\overline{z}}f\,\overline{\overline{\partial}g_{1}}+\partial_{\overline{w}}f\,\overline{\overline{\partial}g_{2}}$
+ $\overline{\partial}(f\circ g)=\partial_{z}f\,\overline{\partial} g_{1}+\partial_{w}f\,\overline{\partial} g_{2}+\partial_{\overline{z}}f\,\overline{\partial g_{1}}+\partial_{\overline{w}}f\,\overline{\partial g_{2}}$
```

```ad-prop
Si $F:\mathbb{C}\to \mathbb{C}$ es pot expressar com $F(z)=f(z,\overline{z})$, amb
$$ \begin{align}
f : \mathbb{C}\times \mathbb{C} &\to \mathbb{C} \\
(z,w) &\mapsto f(z,w)
\end{align} $$
holomorfa respecte $z$ i $w$, i $\partial_{\overline{z}}f=\partial_{\overline{w}}f=0$ .

Aleshores
$$ \partial F(z) = \frac{\partial f}{\partial z}(z,\overline{z}) \quad \text{i} \quad \overline{\partial}F(z)=\frac{\partial f}{\partial w}(z,\overline{z}) $$
i les derivades $\partial_{z}f$ i $\partial_{w}f$ es poden calcular pels mètodes habituals.
```


#### Funcions **analítiques**

Sigui $\Omega$ un obert, una funció $f:\Omega\to \mathbb{C}$ és una funció ==analítica== en $\Omega$ si per cada punt $a\in\Omega$ existeix un disc $D_{r}(a)\subset\Omega$ tal que $f$ és la suma d'una sèrie de potències
$$\sum_{n=0}^{\infty}a_{n}(z-a)^{n}$$
en $D_{r}(a)$.

`````ad-teor
title: **Derivació** d'una **sèrie** de **potències**

Sigui
$$ S(z) = \sum_{n\geq 0} a_{n}(z-b)^{n} $$
una sèrie de potències amb radi de convergència $R> 0$ .

Aleshores la sèrie derivada
$$ S'(z) = \sum_{n\geq 0} n\,a_{n}(z-b)^{n-1} $$
té el mateix radi de convergència $R$ .

A més, $S$ és holomorfa en $|z-b|<R$ .

```ad-not
Iterant el resultat del teorema, tenim que tota sèrie de potències és infinitament derivable en $|z-b|<R$ i totes les serves derivades son holomorfes en $|z-b|<R$ .
```
`````

^ca0883

````ad-teor
Siguin $f$ i $g$ les sumes de les sèries de potències
$$ \sum_{n\geq 0} a_{n}(z-a)^{n}, \quad \sum_{n\geq 0} b_{n}(z-a)^{n} $$
en $D_{r}(a)$ respectivament, amb $r$ menor que ambdós radis de convergència.

Aleshores la sèrie producte de Cauchy
$$ \sum_{n=0}^{\infty}\left( \sum_{k=0} a_{k}\,b_{n-k} \right) (z-a)^{n} $$
convergeix absolutament en $D_{r}(a)$ i la seva suma és $f\cdot g$.

```ad-not
En particular, el producte de dues funcions analítiques en un obert $\Omega \subset \mathbb{C}$ és analítica en $\Omega$ .
```
````


#### Algunes **funcions holomorfes** importants

 + [[#^098cbf | Exponencial complexa]]

````ad-def
title: Funcions **trigonomètriques**

Sigui $z\in \mathbb{C}$, definim
$$ \cos(z) = \frac{e^{iz}+e^{-iz}}{2}\,, \quad \sin(z) = \frac{e^{iz}-e^{-iz}}{2i} $$

```ad-not
Aquestes funcions ja no son fitades.
```
````


---
## **Integrals de línia** i teoria local del **Cauchy**

#### **Corbes**

Sigui $\Omega \subset \mathbb{C}$ un obert.

Una ==corba== en $\Omega$ és una aplicació
$$\gamma:[a,b]\to\Omega$$
contínua.

`````ad-def
title: Definicions bàsiques

+ Una corba és ==tancada== si $\gamma(a)=\gamma(b)$.
+ Una corba és ==simple== si $\gamma$ és injectiva.
+ Una corba $\gamma:[a,b]\to \mathbb{C}$ és de ==classe $C^{1}$== si $\gamma(t)=\gamma_{1}(t)+i\gamma_{2}(t)$ amb $\gamma_{1},\gamma_{2}\in C^{1}$.
+ Una corba és de ==classe $C^{1}$ a trossos== o un ==camí== si existeixen $a=t_{0}<t_{1}<\dots<t_{n}=b$ tal que $\gamma|_{[t_{k-1},t_{k}]}\in C^{1}$.
+ La corba ==inversa== de $\gamma$ és $\gamma^{-}:[a,b]\to\Omega$ amb $$\gamma^{-}(t)=\gamma(a+b-t)\,.$$

```ad-not
title: Notació

+ La ~={green}imatge=~ o recorregut de $\gamma$ és 
	$$ \boldsymbol{\gamma*}=\gamma([a,b])\subset\Omega \,.$$
+ La ~={green}suma dels camins=~ $\gamma$ i $\eta$ és $\boldsymbol{\gamma \lor \eta}$ , i representa recórrer primer $\gamma$ i després $\eta$ .
```
`````

`````ad-def
title: *Reparametrització*

Una ==reparametrització== d'una corba $\gamma:[a,b]\to\Omega$ és una corba $\eta:[c,d]\to\Omega$ tal que $\eta=\gamma \circ\varphi$, amb $\varphi:[a,b]\to[b,c]$ bijectiva.

```ad-not
En el cas dels camins, les reparametritzacions son de classe $C^{1}$ a trossos.
```

Els recorreguts de $\gamma$ i $\eta$ son iguals, és a dir, $\gamma*=\eta*$. Només canvia la velocitat en què es recorre.
`````

`````ad-def
title: *Longitud* d'una corba

La ==longitud== d'una corba $C^1$ és
$$ L(\gamma) = \int_{a}^{b}|\gamma'(t)|\,dt \,.$$

```ad-def
title: *Longitud* d'un camí

Si $\gamma$ és $C^{1}$ a trossos, la seva ==longitud== és
$$ L(\gamma) = \sum_{k=1}^{n} \int_{t_{k-1}}^{t_{k}}|\gamma'(t)|\,dt \,.$$
```
`````

`````ad-def
title: Integral complexa

Sigui $f:[a,b]\to \mathbb{C}$ integrable. Definim
$$ \int_{a}^{b} f(t)\,dt = \int_{a}^{b}\mathrm{Re}(f(t))\,dt + i \int_{a}^{b}\mathrm{Im}(f(t))\,dt \,.$$

```ad-prop
title: Propietats

1. La integral complexa és $\mathbb{C}$-lineal. Per tot $\alpha,\beta\in \mathbb{C}$,
	$$ \int_{a}^{b} (\alpha\,f(t)+\beta\,g(t))\,dt = \alpha \int_{a}^{b}f(t)\,dt + \beta \int_{a}^{b} g(t)\,dt \,.$$
2. Desigualtat triangular:
	$$\left\lvert  \int_{a}^{b}f(t)\,dt  \right\rvert \leq \int_{a}^{b}|f(t)|\,dt$$
```
`````

###### **Integració** sobre **corbes**

Sigui $\Omega \subset \mathbb{C}$ un obert, $f:\Omega\to \mathbb{C}$ contínua i $\gamma:[a,b]\to \Omega$ de classe $C^{1}$. 

La integral sobre la corba $\gamma$ és
$$ \begin{align}
\int_{\gamma} f(z)\,dz &= \int_{a}^{b} f(\gamma(t))\,\gamma'(t)\,dt \,,\\
\int_{\gamma} f(z)\,|dz| &= \int_{a}^{b} f(\gamma(t))\,|\gamma'(t)|\,dt \,.
\end{align} $$

```ad-not
title: Integral sobre un **camí**

La integral sobre el camí $\gamma$ és
$$ \begin{align}
\int_{\gamma} f(z)\,dz &= \sum_{k=1}^{n} \int_{t_{k-1}}^{t_{k}} f(\gamma(t))\,\gamma'(t)\,dt \,,\\[0.5em]
\int_{\gamma} f(z)\,|dz| &= \sum_{k=1}^{n} \int_{t_{k-1}}^{t_{k}} f(\gamma(t))\,|\gamma'(t)|\,dt\,.
\end{align} $$
```

```ad-prop
title: Propietats

+ Linealitat. Per tot $\lambda,\mu\in \mathbb{C}$
	$$ \int_{\gamma}(\lambda f(z) + \mu g(z))\,dz = \lambda \int_{\gamma} f(z)\,dz + \mu \int_{\gamma}g(z)\,dz \,.$$
+ $\displaystyle\int_{\gamma^{-}}f(z)\,dz = -\int_{\gamma}f(z)\,dz$
+ Si $\gamma$ és un camí, aleshores
	$$ \left\lvert  \int_{\gamma}f(z)\,dz \right\rvert \leq \int_{\gamma} |f(z)|\,|dz| = \sum_{k=1}^{n}\int_{t_{k-1}}^{t_{k}} |f(\gamma(t))|\,|\gamma'(t)|\,dt \,.$$
	+ En particular, si $|f(z)|\leq M$ per tot $z\in \mathbb{C}$, aleshores $|\int_{\gamma}f(z)\,dz|\leq ML(\gamma)$.
+ Sigui $\eta$ una reparametrització de $\gamma$, aleshores
	$$ \int_{\gamma} f(z)\,dz = \pm \int_{\eta}f(z)\,dz \,.$$
```

```ad-teor
Sigui $\Omega \subset \mathbb{C}$ un obert i $f:\Omega\to \mathbb{C}$ contínua. Suposem que existeix $F$ primitiva holomorfa de $f$.

Aleshores per tot camí $\gamma$ en $\Omega$
$$ \int_{\gamma} f(z)\,dz = F(\gamma(b))-F(\gamma(a)) \,.$$
```

````ad-teor
title: Teorema de **Cauchy-Goursat**

Sigui $\Omega \subset \mathbb{C}$ un obert amb $p\in\Omega$ i $f\in C(\Omega)\cap H(\Omega\setminus \{p\})$ . Aleshores
$$ \int_{\partial T} f(z)\,dz = 0 $$
per tot triangle $T\subset\Omega$ .

```ad-prop
Sigui $\Omega \subset \mathbb{C}$ un obert i $f\in H(\Omega)$ . Aleshores
$$ \int_{\partial T} f(z)\,dz = 0 $$
per tot triangle $T\subset\Omega$ .
```

```ad-teor
title: Teorema de Cauchy **per un disc**

Sigui $D$ un disc obert i $f\in C(D)$ amb $f\in H(D\setminus \{p\})$, llavors
$$ \int_{\gamma}f(z)\,dz = 0 $$
per tot camí tancat $\gamma$ en $D$.
```

```ad-teor
title: Teorema de Cauchy **per un obert convex**

Sigui $\Omega \subset \mathbb{C}$ un obert convex i $f\in C(\Omega)\cap H(\Omega\setminus \{p\})$.

Aleshores $f$ te primitiva holomorfa en $\Omega$ i
$$ \int_{\gamma}f(z)\,dz = 0 $$
per tot camí tancat $\gamma$ en $\Omega$ .
```
````


#### **Integració** complexa

`````ad-teor
title: **Fórmula integral de Cauchy** (FIC)

Sigui $\Omega \subset \mathbb{C}$ un obert amb $\overline{D_{r}(a)}\subset\Omega$, i $f\in H(\Omega)$. Aleshores
$$ f(z_{0}) = \frac{1}{2\pi i} \int_{\gamma_{r}} \frac{f(z)}{z-z_{0}}\,dz \,, \quad |z_{0}-a|<r\,, $$
on $\gamma_{r}(t)=a+re^{it}$ per $0\leq t\leq 2\pi$ .

```ad-prop
Sigui $\Omega \subset \mathbb{C}$ un obert convex, $\gamma$ un camí tancat d'$\Omega$ i $f\in H(\Omega)$. Aleshores
$$ \frac{1}{2\pi i} \int_{\gamma} \frac{f(z)}{z-z_{0}}\,dz = f_{0}\,\text{Ind}(\gamma,z_{0}) \,,$$
on
$$ \text{Ind}(\gamma,z_{0}) = \frac{1}{2\pi i} \int_{\gamma} \frac{1}{z-z_{0}}\,dz $$
és l'índex de $\gamma$ respecte $z_{0}$.
```

```ad-prop
title: **Propietat** de la **mitjana**

Sigui $\Omega \subset \mathbb{C}$ un obert amb $\overline{D_{r}(a)}\subset\Omega$, i $f\in H(\Omega)$. Aleshores
$$ f(a) = \frac{1}{2\pi} \int_{0}^{2\pi} f(a+re^{it})\,dt \,.$$
```

````ad-teor
title: FIC **centrada per derivades**

Sigui $\Omega \subset \mathbb{C}$ un obert amb $a\in\Omega$ i $r>0$ tal que $\overline{D_{r}(a)}\subset\Omega$, i $f\in H(\Omega)$. Aleshores
$$ f^{(n)}(a) = \frac{n!}{2\pi i} \int_{r=|w-a|} \frac{f(w)}{(w-a)^{n+1}}\,dw \,.$$

```ad-prop
title: **Desigualtats** de Cauchy

Suposant el mateix,
$$ |f^{(n)}(a)| \leq \frac{n!\,M_{r}}{r^{n}} \,,$$
amb $n\geq 0$ i $M_{r}=\sup_{r=|z-a|}|f(z)|$ .
```
````
`````

````ad-teor
title: **Desenvolupament local** en **sèrie de potències**

Sigui $\Omega \subset \mathbb{C}$, tota funció $f\in H(\Omega)$ és localment una sèrie de potències.

Concretament, sigui $R_{a}=\text{dist}(a,\mathbb{C}\setminus\Omega)$, aleshores
$$ f(z) = \sum_{n=0}^{\infty} a_{n}(z-a)^{n} \quad \forall\,|z-a|<R_{a} \,,$$
on
$$ a_{n} = \frac{1}{2\pi i} \int_{r=|w-a|} \frac{f(w)}{(w-a)^{n+1}}\,dw \quad \forall\,r<R_{a} \,,$$
i el radi de convergència de la sèrie és $\geq R_{a}$ .

```ad-prop
Junt amb la [[#^ca0883 | derivació d'una sèrie de potències]], veiem:
$$ f \text{ holomorfa en }\Omega \iff f \text{ analítica en }\Omega $$
```
````

```ad-prop
Sigui $\Omega \subset \mathbb{C}$ un obert i $f\in H(\Omega)$.

Aleshores $f\in C^{\infty}(\Omega)$ i totes les seves derivades son holomorfes.
```


#### **Zeros** de funcions analítiques

Sigui $\Omega \subset \mathbb{C}$ un obert i $f\in H(\Omega)$, el ==conjunt de zeros== de $f$ és
$$ Z(f) = \{z\in f \mid f(z)=0\} \,.$$

```ad-prop
Sigui $\Omega \subset \mathbb{C}$ un obert connex i $f\in H(\Omega)$. 

Si existeix $a\in \Omega$ tal que $f^{(n)}(a)=0$ per tot $n\in \mathbb{N}\cup \{0\}$, llavors $f\equiv 0$.
```

````ad-teor
Sigui $\Omega \subset \mathbb{C}$ un obert connex i $f\in H(\Omega)$ amb $f\neq0$.

Per tot $z_{0}\in Z(f)$ existeix un únic $m\in \mathbb{N}$ anomenat ==multiplicitat del zero== tal que
$$ f(z) = (z-z_{0})^{m}g(z) \quad\text{per }z\in\Omega $$
on $g\in H(\Omega)$ amb $g(z_{0})\neq 0$.

```ad-prop
Sigui $\Omega \subset \mathbb{C}$ un obert connex i $f\in H(\Omega)$ amb $f\not\equiv0$.

Llavors els zeros de $f$ son aïllats.
```
````

`````ad-teor
title: Principi de **prolongació analítica** (1)

Sigui $\Omega \subset \mathbb{C}$ un obert connex i $f\in H(\Omega)$.

Si $Z(f)$ té un [[#^puntac | punt d'acumulació]] en $\Omega$, llavors $f\equiv 0$ en $\Omega$.

````ad-prop
Sigui $\Omega \subset \mathbb{C}$ un obert connex i $f\in H(\Omega)$ amb $f\neq0$.

Llavors $Z(f)$ és finit o numerable.

```ad-not
Si $f$ té un nombre infinit de zeros, aquests s'acumularan a la frontera d'$\Omega$. Si $f$ és entera, llavors s'acumulen a $\{\infty\}$.
```
````

````ad-prop
title: Principi de **prolongació analítica** (2)

Sigui $\Omega \subset \mathbb{C}$ un obert connex i $f,g\in H(\Omega)$.

Si $\{z\in\Omega \mid f(z)=g(z)\}$ té un [[#^puntac | punt d'acumulació]] en $\Omega$, llavors $f\equiv g$ en $\Omega$.

```ad-not
En particular, si $f$ i $g$ coincideixen en un obert, un arc, una recta, etc., llavors $f\equiv g$ .
```
````
`````


#### Altres **teoremes** i **principis** importants

`````ad-teor
title: Teorema de **Liouville**

Tota funció entera i fitada és constant.

```ad-prop
Si $f$ és entera i $\mathrm{Re}(f)\geq 0$, llavors $f$ és constant.
```
`````

`````ad-teor
title: Teorema **fonamental de l'àlgebra**

Sigui $P$ un polinomi no constant, hi ha $z_{0}\in \mathbb{C}$ tal que $P(z_{0})=0$ .

```ad-prop
Tot polinomi de grau $n$ té exactament $n$ arrels complexes (incloent multiplicitats).
```
`````

`````ad-teor
title: Principi del **mòdul màxim**

Sigui $\Omega \subset \mathbb{C}$ un obert connex i $f\in H(\Omega)$.

Si $f$ té màxim absolut en $\Omega$, llavors $f$ és constant.

```ad-prop
Sigui $\Omega \subset \mathbb{C}$ fitat i $f\in H(\Omega)\cap C(\overline{\Omega})$.

Aleshores el màxim de $f$ s'assoleix a la frontera $\partial\Omega$.
```

```ad-prop
Sigui $\Omega \subset \mathbb{C}$ un obert connex i $f\in H(\Omega)$.

Aleshores el màxim de $f$ s'assoleix a la frontera $\partial\Omega$.

Si $|f|$ té un màxim local en $\Omega$, llavors $f$ és constant.
```

```ad-prop
title: Lema de **Schwarz**

Sigui $\mathbb{D}\to \mathbb{\overline{D}}$ holomorfa tal que $f(0)=0$. Aleshores:
+ $|f(z)|\leq|z|$ per tot $z\in \mathbb{D}$
+ $|f'(0)|\leq1$

Si es compleix $|f(z_{0})|=|z_{0}|$ per algun $z_{0}\in \mathbb{D}$ o $|f'(0)|=1$, aleshores $f(z)=\lambda z$ per algun $\lambda \in \partial \mathbb{D}$.
```
`````

```ad-teor
title: Teorema de l'**aplicació oberta**

Siguin $\Omega \subset \mathbb{C}$ un obert connex i $f\in H(\Omega)$ no constant.

Aleshores $f(U)$ és obert per $U\subset\Omega$ obert.
```


---
## Sèries de **Laurent**

Una ==sèrie de Laurent== al voltant d'$a\in \mathbb{C}$ és una sèrie de la forma
$$ \sum_{n=-\infty}^{\infty} c_{n}\,(z-a)^{n} = \sum_{n=1}^{\infty} \frac{c_{-n}}{(z-a)^{n}} + \sum_{n=0}^{\infty} c_{n}\,(z-a)^{n} \,,$$
on la part d'exponents negatius s'anomena ==part singular== de la sèrie.

```ad-prop

> Sigui $f(z) = f_{1}(z) + f_{2}(z)$ una sèrie de Laurent amb
> $$\begin{align}
\,f_{1}(z) &= \sum_{n=1}^{\infty} \frac{c_{-n}}{(z-a)^{n}} \,,\\
\,f_{2}(z) &= \sum_{n=0}^{\infty} c_{n}\,(z-a)^{n} \,,
\end{align}$$
i $R_{1},R_{2}$ els radis de convergència de $f_{1}(z)$ i $f_{2}(z)$ respectivament.

Aleshores $f(z)$ és holomorfa en l'anell $\left\{ \frac{1}{R_{1}}<|z-a|<R_{2} \right\}$.
```

```ad-teor
> Sigui $\Omega=\{z\in \mathbb{C}\mid r<|z-a|<R\}$ amb $0\leq r<R\leq \infty$ i sigui $f\in H(\Omega)$.

Aleshores hi ha una única sèrie de Laurent amb
$$ f(z) = \sum_{n\in \mathbb{Z}} c_{n}\,(z-a)^{n}\,, \quad z\in\Omega\,. $$

A més, la sèrie és absoluta i uniformement convergent en els compactes d'$\Omega$ amb
$$ c_{n} = \frac{1}{2\pi i} \int_{|z-a|=\rho} \frac{f(z)}{(z-a)^{n+1}}\,dz \,.$$
```


#### **Singularitats aïllades** de funcions holomorfes


> Sigui $f\in H(\Omega\setminus E)$.

Les ==singularitats== de $f$ son els punts d'$z_{0}\in E$, que es diuen ==aïllades== si existeix $r>0$ tal que
$$ f\in H(D_{r}(z_{0})\setminus \{z_{0}\}) \,.$$

````ad-def
title: Singularitat *evitable*

> Sigui $z_{0}$ una singularitat aïllada d'una funció holomorfa $f$.

 La singularitat $z_{0}$ es diu ==evitable== si existeix $\varepsilon>0$ i $g\in H(D_{\varepsilon}(z_{0}))$ tal que $f(z)=g(z)$ per tot $z\in D_{\varepsilon}(z_{0})\setminus z_{0}$ .

```ad-prop
> Sigui $z_{0}$ una singularitat aïllada d'una funció holomorfa $f$.

Aleshores $z_{0}$ és evitable si i només si
$$ \lim_{z\to z_{0}} (z-z_{0})\,f(z) = 0 \,.$$
```
````

````ad-def
title: *Pol*

> Sigui $z_{0}$ una singularitat aïllada d'una funció holomorfa $f$.

La singularitat $z_{0}$ és un ==pol== si $\displaystyle\lim_{z\to z_{0}} |f(z)| = +\infty$ .

```ad-def
title: *Ordre* d'un pol

> Sigui $z_{0}$ un pol de la funció $f$.

L'==ordre== del pol $z_{0}$ és $m$ tal que
$$ f(z) = \sum_{n=-m}^{+\infty} c_{n}\,(z-z_{0})^{n} $$
amb $c_{-m}\neq 0$ .
```
````

````ad-def
title: Singularitat *essencial*

Una singularitat aïllada d'una funció holomorfa que **no és evitable ni és un pol** es diu singularitat ==essencial==.

```ad-teor
title: Teorema de **Casorati-Weierstrass**

> Sigui $f$ holomorfa en $D_{r}(z_{0})\setminus \{z_{0}\}$ amb $z_{0}$ singularitat essencial.
```

Aleshores per tot $0<\varepsilon\leq r$ el conjunt $f(D_{\varepsilon}(z_{0})\setminus \{z_{0}\})$ és dens en $\mathbb{C}$ .
````

```ad-prop
title: **Classificació** de singularitats aïllades

> Sigui $f$ holomorfa en $\{0<|z-z_{0}|<r\}$ amb $f(z)=\displaystyle\sum_{n\in \mathbb{Z}}c_{n}\,(z-z_{0})^{n}$.

Aleshores $z_{0}$ és:
1. ~={green}Evitable=~ si $c_{-n}=0$ per per tot $n\geq1$ .
2. Un ~={green}pol d'ordre $\boldsymbol m$=~ si $c_{-n}=0$ per tot $n>m$ amb $c_{-m}\neq0$ .
3. ~={green}Essencial=~ si existeixen infinits $c_{-n}\neq0$ per $n>0$ .
```


#### Teorema dels **residus**

> Sigui $f$ holomorfa amb una singularitat aïllada en $a$ amb $f(z)=\sum_{n\in \mathbb{Z}}c_{n}\,(z-z_{0})$ el seu desenvolupament en sèrie de Laurent.

El ==residu== de $f$ en $a$ és
$$ \mathrm{Res}(f,a) = c_{-1} \,.$$

```ad-prop
> Sigui $r>0$ i $f\in H(D_{r}(a)\setminus \{a\})$.

Aleshores
$$ \int_{|z-a|=\varepsilon} f(z)\,dz = 2\pi i \,\mathrm{Res}(f,a) $$
per tot $0<\varepsilon<r$ .
```

```ad-met
title: Càlcul de residus

+ Si $z=a$ és una singularitat **evitable** de $f$, aleshores
	$$ \mathrm{Res}(f,a)=0 \,.$$
+ Si $z=a$ és un **pol d'ordre $\boldsymbol m$** de $f$, aleshores
	$$ \mathrm{Res}(f,a) = \frac{1}{(m-1)!}\,\partial^{(m-1)}[(z-a)^{m}f(z)]_{z=a} \,.$$
	+ Si $z=a$ és un **pol simple** de $f$, aleshores
		$$ \mathrm{Res}(f,a) = \lim_{z\to a}\,(z-a)\,f(z) $$
```

````ad-teor
title: Teorema dels **residus**

> Sigui $\Omega \subset \mathbb{C}$ un obert i $f\in H(\Omega\setminus A)$ amb $A\subset\Omega$ sense punts d'acumulació en $\Omega$, i $\Gamma$ un cicle en $\Omega \setminus A$ homògeg a 0 en $\Omega$.

Aleshores
$$ \int_{\Gamma} f(z)\,dz = 2\pi i \sum_{a\in A} \text{Ind}(\Gamma,a)\,\mathrm{Res}(f,a) \,.$$

```ad-not
Generalment farem servir aquest teorema per funcions holomorfes amb un conjunt finit de singularitats $\{a_{1},\dots,a_{n}\}$ dins d'una corba tancada simple $\gamma$. 

En aquest cas, tenim que
$$ \int_{\gamma} f(z)\,dz = 2\pi i \sum_{i=1}^{n} \mathrm{Res}(f,a_{i}) \,.$$
```
````


#### Residu a l'**infinit**

```ad-prop
title: **Classificació** de singularitats a l'**infinit**

> Sigui $f$ holomorfa en un domini que conté un entorn de l'infinit, i sigui
> $$ f(\infty) := \lim_{z\to\infty}f(z) \,.$$

+ $f(\infty)=\infty \implies$ pol
+ $f(\infty)\in \mathbb{C} \implies$ singularitat evitable
+ $\not\exists\,f(\infty) \implies$ singularitat essencial
```

```ad-def
title: Residu a l'infinit

> Sigui $f\in H(\mathbb{C}\setminus E)$ amb un conjunt finit de singularitats aïllades $E$, i $\Gamma$ una corba simple orientada positivament que conté $E$.

El ==residu a l'infinit== de $f$ és
$$ \mathrm{Res}(f,\infty) = -\frac{1}{2\pi i} \int_{\Gamma} f(z)\,dz \,.$$
```

Pel teorema dels residus, tenim:
$$ \mathrm{Res}(f,\infty) = \boxed{\,-\sum_{a\in A} \text{Ind}(\Gamma,a)\,\mathrm{Res}(f,a)\,} \,,$$
amb $A$ conjunt de pols de $f$.

```ad-prop
> Sigui $f\in H(\mathbb{C}\setminus E)$ amb un conjunt finit de singularitats $E$.

Aleshores el residu a l'infinit és
$$ \mathrm{Res}(f,\infty) = \boxed{\, -\mathrm{Res}\left( \frac{1}{w^{2}}f\left( \frac{1}{w} \right),0 \right) \,} \,.$$
```


#### Càlcul d'**integrals** (exemples)

~={green}$\displaystyle\int_{0}^{2\pi} f(\sin t,\cos t)\,dt$=~ $= \displaystyle\frac{1}{i}\int_{|z|=1}f\left( \frac{z-\frac{1}{z}}{2i} ,\frac{z+\frac{1}{z}}{2}\right) \frac{dz}{z}$
amb $f$ racional sense singularitats en $|z|=1$.

```ad-met
1. $z=e^{it}$
2. $\displaystyle dz=ie^{it}dt \implies dt = \frac{dz}{iz}$
3. $\displaystyle \sin t=\frac{e^{it}-e^{-it}}{2i}=\frac{z-\frac{1}{z}}{2i}, \quad\cos t=\frac{e^{it}+e^{-it}}{2}=\frac{z+\frac{1}{z}}{2}$
```


#### Principi de l'argument

```ad-def
title: Funció *meroforma*

> Sigui $\Omega \subset \mathbb{C}$ un obert i $f:\Omega \to \mathbb{C}$.

Diem que $f$ és ==meroforma== i escrivim $f\in M(\Omega)$ si $f\in H(\Omega\setminus E)$ amb $E\subset\Omega$ format de punts aïllats singularitats de pol.
```

`````ad-teor
title: Principi de l'**argument**

> Sigui $\Omega \subset \mathbb{C}$ un obert amb $f\in M(\Omega)$, $Z$ el conjunt de zeros de $f$ i $E$ el conjunt de pols de $f$. Sigui $\gamma$ un camí tancat en $\Omega\setminus(Z\cup E)$ homòleg a 0 en $\Omega$.

Aleshores
$$ \frac{1}{2\pi i} \int_{\gamma} \frac{f'(z)}{f(z)}dz = \boxed{\,\sum_{z\in Z} \text{Ind}(\gamma,z)\,m(f,z) - \sum_{p\in E}\text{Ind}(\gamma,p)\,m(f,p)\,} \,,$$
amb $m(f,z)$ la multiplicitat del zero i $m(f,p)$ l'ordre del pol.

```ad-not

S'anomena *principi del'argument* ja que
$$ \frac{1}{2\pi i} \int_{\gamma} \frac{f'(z)}{f(z)}dz = \text{Ind}(f(\gamma),0) \,.$$
```
`````


---
## Apèndix

```ad-def
title: Topologia

+ ~={green}Disc (obert).=~ $\,D_{r}(a)=\{z\in \mathbb{C} \mid |z-a|<r\}$
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

```ad-prop
title: **Successions** importants

+ ~={green}Successió geomètrica:=~ $\,\displaystyle a_{n+1}=r\,a_{n}$
	+ $\displaystyle \sum_{i=m}^{n}a_{i} = \frac{a_{m}-a_{n+1}}{1-r}$
	+ $\displaystyle\sum_{i=m}^{\infty}a_{i} = \frac{a_{m}}{1-r}$
```

```ad-prop
title: **Sèries en $\mathbb{C}$** importants

Centrat en 0:
+ $\displaystyle e^{z}=\sum_{n=0}^{\infty} \frac{z^{n}}{n!}$
+ $\displaystyle\sin(z) = \sum_{n=0}^{\infty} (-1)^{n}\frac{z^{2n+1}}{(2n+1)!}$
+ $\displaystyle\cos(z) = \sum_{n=0}^{\infty} (-1)^{n}\frac{z^{2n}}{(2n)!}$
```

```ad-prop
title: Identitats

+ $\overline{e^{z}}=e^{\overline{z}}$~={faded}$\quad\forall z\in \mathbb{C}$=~
+ $|e^{i\theta}|=1$~={faded}$\quad\forall \theta\in \mathbb{R}$=~
+ $|z|=1\implies\overline{z}=\frac{1}{z}$

Si $z=x+iy$, aleshores:
+ $\displaystyle x = \frac{z+\overline{z}}{2}$
+ $\displaystyle y = \frac{z-\overline{z}}{2i}$
```

```ad-def
title: Punt d'acumulació

Un punt $z_{0}$ és un ==punt d'acumulació== del conjunt $A$ si hi ha una successió $\{z_{n}\}_{n}\subset A\setminus \{z_{0}\}$ amb $z_{n}\to z$ .
```
^puntac