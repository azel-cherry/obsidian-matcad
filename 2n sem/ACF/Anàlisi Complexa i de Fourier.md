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

tals que $re^{i\theta}=z$ . Li diem ==representació polar== d'un nombre complex a ~={green}$r_{\theta}$=~ .

Tenim $\begin{cases} \,\mathrm{Re}(z)=r\cos(\theta) \\[0.5em] \,\mathrm{Im}(z)=r\,\sin(\theta)\end{cases}$ .

