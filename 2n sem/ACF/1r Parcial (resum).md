#### Nombres **complexos**

```ad-def
title: Funcions bàsiques

+ Argument principal: $\,\text{Arg}(z)\in(-\pi,\pi]$
+ Logaritme principal: $\,\text{Log}(z)=\ln|z|+i\,\text{Arg}(z)$
+ $\sqrt[n]{z}=\sqrt[n]{re^{i\theta}} = \sqrt[n]{r}\,e^{i\frac{\theta+2k\pi}{n}} \text{ per } k=1,\dots,n$
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
title: **Multiplicitat** d'un zero

Sigui $z_{0}$ tal que $f(z_{0})=0$.
1. **$\boldsymbol f$ es pot desenvolupar en sèries fàcilment:** Mirar quina potència és factor comú
	$$ \sum_{n\geq0} f(z) = (z-z_{0})^{n}\,(\dots) \,.$$
	La multiplicitat de $z_{0}$ és $n$.
2. **Si no:** Derivar fins que $f^{(n)}(z_{0})=0$. Aleshores la mutliplicitat de $z_{0}$ és $n$.
```


#### **Sèries** de potències

$$ \sum_{n\geq0} a_{n}(z-b)^{n} $$

+ **Criteri del** ~={green}quocient:=~ $\,\displaystyle R = \lim_{n\to\infty} \frac{|a_{n}|}{|a_{n+1}|}$
+ **Teorema de** ~={green}Cauchy-Hadamard:=~ $\,\displaystyle\frac{1}{R} = \limsup_{n\to\infty} \sqrt[n]{|a_{n}|}$

+ La **derivada** d'una sèrie de potències té el **mateix radi de convergència**

```ad-def
title: **Desenvolupaments en sèries** (centrats en 0)

+ $\displaystyle\frac{1}{1-z} = \sum_{n=0}^{\infty}z^{n}$
+ $\displaystyle e^{z}=\sum_{n=0}^{\infty} \frac{z^{n}}{n!}$
+ $\displaystyle\sin(z) = \sum_{n=0}^{\infty} (-1)^{n}\frac{z^{2n+1}}{(2n+1)!}$
+ $\displaystyle\cos(z) = \sum_{n=0}^{\infty} (-1)^{n}\frac{z^{2n}}{(2n)!}$
```


#### **Derivades**

És equivalent:
+ $f$ és holomorfa en $z_{0}$ amb $\boxed{\,f'(z_{0})=\partial_{x} u+i\,\partial_{y}v\,}$ .
+ $f$ compleix les ==equacions de Cauchy-Riemann==:
	$$ \begin{cases}
	\, \partial_{x}u = \partial_{y}v \\
	\, \partial_{y}u = -\partial_{x}v
	\end{cases} $$


#### **Integrals**

Per $f$ contínua amb primitiva $F$ holomorfa i tot camí $\gamma$,
$$\int_{\gamma} f(z)\,dz = F(\gamma(b))-F(\gamma(a))\,.$$

```ad-teor
title: Fórmula **integral de Cauchy** (FIC)

$$ \int_{r=|z-a|} \frac{f(z)}{(z-z_{0})^{n+1}}\,dz = \frac{2\pi i}{n!}f^{(n)}(z_{0}) \,.$$
per $|z_{0}-a|<r$ .
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