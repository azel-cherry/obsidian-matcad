## El cos dels **nombres complexos**

Donat $a,b\in \mathbb{R}$ definim ==$a+b\,i\in \mathbb{C}$==.
+ Part real: $\,\mathrm{Re}(a+b\,i)=a$
+ Part imaginària: $\,\mathrm{Im}(a+b\,i)=b$

````ad-prop
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


#### Espai **vectorial**

```ad-def
title: Definicions bàsiques

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


#### L'**exponencial** complexa

```ad-not
title: Recordatori: **Taylor**

+ $\displaystyle e^{x} = 1+x+\frac{x^{2}}{2!}+\dots \sum_{n=0}^{\infty} \frac{x^n}{n!}$
+ $\displaystyle\cos(x)=1-\frac{x^{2}}{2}+\frac{x^{4}}{4!}-\dots=\sum_{n=0}^{\infty}\frac{(ix)^{2n}}{(2n)!}$
+ $\displaystyle\sin(x)=x-\frac{x^{3}}{3!}+\dots=-i\sum^{\infty}_{n=0} \frac{(ix)^{2n+1}}{(2n+1)!}$
```

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
```


#### Representació **polar**

Donat $z=a+bi\in \mathbb{C}\backslash\{0\}$, existeixen
+ ~={green}$r$=~ $\displaystyle=\sqrt{a^{2}+b^{2}}=|z|$
+ ~={green}$\theta$=~ $=\text{Arg}(z)\in(-\pi,\pi]$

tals que ~={green}$z=re^{i\theta}$=~ .

Tenim $\begin{cases} \,a=r\cos(\theta) \\[0.5em] \,b=r\,\sin(\theta)\end{cases}$ .

![[complex-plane-polar-rectangular-1.png | 450]]


###### **Equacions** amb **exponencials**

```ad-prop
Siguin $z_{1},z_{2}\in \mathbb{C}$.
$$ e^{z_{1}}=e^{z_{2}} \iff z_{1}-z_{2}\in2\pi i\,\mathbb{Z} $$
```
^209ac7

```ad-met
1. Passar a polars
2. Aplicar la [[#^209ac7 | proposició anterior]]
```


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

Donada una funció multivaluada $f$ en $A$, diem que una funció $\mathcal{F}:B\to \mathbb{C}$ n'és una ==branca contínua== en $B\subset A$ si $\mathcal{F}(z)$ és una elecció contínua en $B$.
```


###### **Logaritmes** i **arguments**

```ad-def
title: Logaritme principal

El ==logaritme principal== de $z\in \mathbb{C}$ es defineix com
$$ \text{Log}(z) = \ln|z| + i \,\text{Arg}(z) \,.$$

És a dir,
$$ \text{Log} : \mathbb{C}\backslash\{0\} \to \{-\pi<\mathrm{Im}(z)\leq \pi\} \,.$$

Un logaritme de $z\in \mathbb{C}$ és $\omega\in \mathbb{C}$ tal que $e^{\omega}=z$ .

Hi ha **infinits logaritmes** per un sol nombre complex; és a dir, és una **funció multivaluada**. Escribim ~={green}$\log(z)$=~ per denotar aquesta.
```

```ad-prop
Sigui $r$ una semirecta de $\mathbb{C}$ amb extrem en $0$.

Aleshores existeix una branca contínua de $\text{arg}(z)$ en $\mathbb{C}\backslash r$ . 

També existeix una branca contínua de $\log(z)$ en $\mathbb{C}\backslash r$ . 
```

```ad-prop
No hi ha cap branca contínua d'$\text{arg}(z)$ en $\mathbb{S}^{1}$.
```

```ad-prop
title: **Propietats** del logaritme

+ ~={green}$\boldsymbol{e^{\mathcal{L}(z)}=z}$=~ per tot $\mathcal{L}(z)$ branca de $\log(z)$
	+ $\mathcal{L}(e^{z})$ no és cert en general
+ ~={green}$\boldsymbol{\log(z_{1}z_{2})=\log(z_{1})+\log(z_{2})}$=~ per $z_{1},z_{2}\in \mathbb{C}\backslash\{0\}$
	+ Fixada una branca $\mathcal{L}(z)$ pot passar que $\mathcal{L}(z_{1}z_{2})\neq \mathcal{L}(z_{1})+\mathcal{L}(z_{2})$
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
`````

```ad-prop
title: **Propietats** de les potències

Siguin $z,\omega,a,b\in \mathbb{C}$ amb $z,\omega\neq 0$ .

+ ~={green}$\boldsymbol{z^{a+b} \subseteq z^{a}z^{b}}$=~
	+ $z^{a+b} = z^{a}z^{b}$ si $a\in \mathbb{Z}$ o $b\in \mathbb{Z}$
+ ~={green}$\boldsymbol{z^{ab}\subseteq (z^{a})^{b}}$=~
	+ $z^{ab} = (z^{a})^{b}$ si $b\in \mathbb{Z}$
+ ~={green}$\boldsymbol{(z\omega)^{a} = z^a\,\omega^a}$=~
```