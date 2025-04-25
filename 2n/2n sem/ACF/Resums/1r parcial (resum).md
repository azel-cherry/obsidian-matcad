#### Nombres **complexos**

```ad-def
title: Funcions bàsiques

+ **Argument** principal: $\,\text{Arg}(z)\in(-\pi,\pi]$
+ **Logaritme** principal: $\,\text{Log}(z)=\ln|z|+i\,\text{Arg}(z)$
+ **Exponencial**: $z^{w}=e^{w\cdot \log(z)}$ ~={faded}(multivaluada)=~
+ $\sqrt[n]{z}=\sqrt[n]{re^{i\theta}} = \sqrt[n]{r}\,e^{i\frac{\theta+2k\pi}{n}} \text{ per } k=1,\dots,n$ ~={faded}(multivaluada)=~
+ $\displaystyle\cos(z) = \frac{e^{iz}+e^{-iz}}{2}$
+ $\displaystyle\sin(z) = \frac{e^{iz}-e^{-iz}}{2i}$
```

```ad-graph
title: Representació al pla

Sigui $f(z):\Omega\to \mathbb{C}$ .
+ Punts **blancs** son $z_{0}$ tal que $f(z_{0})\to \infty$ (singularitat)
+ Punts **negres** son $z_{0}$ tal que $f(z_{0})=0$

Si $f$ holomorfa:
+ Corbes de nivell de $\mathrm{Re}(z)$ i $\mathrm{Im}(z)$ son ortogonals
+ No hi ha singularitats
```

```ad-met
title: Calcular la **multiplicitat** d'un zero

Sigui $z_{0}$ tal que $f(z_{0})=0$.
1. **$\boldsymbol f$ es pot desenvolupar en sèries fàcilment:**
	Mirar quina potència és factor comú
	$$ f(z)=\sum_{n\geq0}a_{n}(z-z_{0})^{n} = (z-z_{0})^{k}\,(\dots) \,.$$
	La multiplicitat de $z_{0}$ és $k$.
2. **Otherwise:**
	Derivar fins que $f^{(k)}(z_{0})\neq0$. Aleshores la mutliplicitat de $z_{0}$ és $k$.
```


#### **Sèries** de potències

$$ \sum_{n\geq0} a_{n}(z-b)^{n} $$

+ Radi de convergència:
	+ **Criteri del** ~={green}quocient:=~ $\,\displaystyle R = \lim_{n\to\infty} \frac{|a_{n}|}{|a_{n+1}|}$ ~={faded}(si existeix)=~
	+ **Teorema de** ~={green}Cauchy-Hadamard:=~ $\,\displaystyle\frac{1}{R} = \limsup_{n\to\infty} \sqrt[n]{|a_{n}|}$
	+ **Frontera** del disc: $\displaystyle\lim_{n\to\infty}a_{n}\,R^n\neq0\implies$ divergeix
+ La **derivada** d'una sèrie de potències té el **mateix radi de convergència**
+ $f:\Omega\to \mathbb{C}$ es pot desenvolupar en sèrie de potències en $|z-a|<R_{a}$ amb $\boxed{\,R_{a}=\text{dist}(\,a,\mathbb{C}\setminus\Omega)\,}$
```ad-def
title: **Desenvolupaments en sèries** (centrats en 0)

+ ~={green}$\frac{1}{1-z}$=~ $= \displaystyle\sum_{n=0}^{\infty}z^{n}=1+z+z^{2}+\dots$
+ ~={green}$e^{z}$=~ $=\displaystyle\sum_{n=0}^{\infty} \frac{z^{n}}{n!}=1+z+\frac{z^{2}}{2!}+\dots$
+ ~={green}$\sin(z)$=~ $= \displaystyle\sum_{n=0}^{\infty} (-1)^{n}\frac{z^{2n+1}}{(2n+1)!}=z-\frac{z^{3}}{3!}+\frac{z^{5}}{5!}-\dots$
+ ~={green}$\cos(z)$=~ $= \displaystyle\sum_{n=0}^{\infty} (-1)^{n}\frac{z^{2n}}{(2n)!}=1-\frac{z^{2}}{2!}+\frac{z^{4}}{4!}-\dots$
```


#### **Derivades**

+ $f$ ~={green}holomorfa=~ en $z_{0}$ si existeix
	$$ \boldsymbol{f'(z_{0})} = \lim_{z\to z_{0}} \frac{f(z)-f(z_{0})}{z-z_{0}} = \lim_{h\to0} \frac{f(z_{0}+h)-f(z_{0})}{h} \,.$$

```ad-teor
title: Equacions de **Cauchy-Riemann**

És equivalent:
+ $f$ és holomorfa en $z_{0}$ amb $\boxed{\,f'(z_{0})=\partial_{x} u+i\,\partial_{x}v\,}$ .
+ $f$ compleix les ==equacions de Cauchy-Riemann==:
	$$ \begin{cases}
	\, \partial_{x}u = \partial_{y}v \\
	\, \partial_{y}u = -\partial_{x}v
	\end{cases} $$
```

#### **Integrals**

Per $f$ contínua amb primitiva $F$ holomorfa i tot camí $\gamma$ :
$$\int_{\gamma} f(z)\,dz = F(\gamma(b))-F(\gamma(a))$$

```ad-teor
title: Fórmula **integral de Cauchy** (FIC)

$$ \int_{|z-a|=r} \frac{f(z)}{(z-z_{0})^{n+1}}\,dz = \frac{2\pi i}{n!}f^{(n)}(z_{0}) \quad\text{per } |z_{0}-a|<r $$
```


#### Altres **teoremes** importants

```ad-teor
title: Teorema de **Liouville**

$f$ entera i fitada $\implies f$ constant
```

```ad-teor
title: Principi de **prolongació analítica** (2)

> $\Omega \subset \mathbb{C}$ obert connex i $f,g\in H(\Omega)$

Si $\{z\in\Omega \mid f(z)=g(z)\}$ té un punt d'acumulació en $\Omega$, llavors $f\equiv g$ en $\Omega$.
```