## Teoria d'extrems

#### Problema general d'optimització

Anomenem ==problema genera d'optimització== a
$$ \min_{x\in S} f(x) $$
on $S\subset \mathbb{R}^{n}$ i $f$ és una funció a valors en $\mathbb{R}$. 

````ad-def
title: *Mínim global*

Diem que $x_{0}\in S$ és un ==mínim global== (o absolut) de $f$ en $S$ si per tot $x\in S$ 
$$f(x_{0})\leq f(x) \,.$$

```ad-def
title: Mínim global *estricte*

Un mínim global $x_{0}$ s'anomena ==estricte== si per tot $x\in S\backslash x_{0}$
$$f(x_{0})< f(x) \,.$$
```
````

````ad-def
title: *Mínim local*

Diem que $x_{0}\in S$ és un ==mínim local== (o relatiu) de $f$ en $S$ si $\exists\,\varepsilon>0$ tal que $\forall x\in S$ 
$$||x-x_{0}||<\varepsilon \implies f(x_{0})\leq f(x) \,.$$

```ad-def
title: Mínim local *estricte*

Un mínim local $x_{0}$ s'anomena ==estricte== si $\exists\,\varepsilon>0$ tal que $\forall x\in S\backslash x_{0}$
$$||x-x_{0}||<\varepsilon \implies f(x_{0})< f(x) \,.$$
```
````

```ad-not
title: Nota: **Màxims**

El ==màxim== de $f$ és el mínim de $-f$.
```

```ad-teor
title: Teorema de **Weierstrass**

Sigui $f$ contínua i $S\subset \mathbb{R}^{n}$ un [[#^f7df0a|compacte]], aleshores **existeix un mínim global** de $f$ en $S$.
```

````ad-def
title: ... *factible*

Donat un problema d'optimització $\displaystyle\min_{x\in S}f(x)$ :
+ El conjunt $S$ s'anomena ==conjunt factible==.
+ Els punts $x\in S$ s'anomenen ==punts factibles==.
+ Un vector $d\in \mathbb{R}^n$ s'anomena ==direcció factible== en $x$ si $\exists\,\varepsilon>0$ tal que 
$$ \alpha\in[0,\varepsilon] \implies x+\alpha d\in S \,.$$

![[Pasted image 20250211192905.png|300]]

```ad-not
Si $x\in\mathring{S}$, aleshores tot $d\in \mathbb{R}^n$ és una direcció factible.
```
````

```ad-teor
title: **Condicions necessàries** d'un mínim local

Sigui $x_{0}\in S$ mínim local de $f\in C^{2}$.

Per tot $d$ direcció factible en $x_{0}$ :
+ $\nabla f(x_{0})\cdot d\geq 0$
+ $\nabla f(x_{0})\cdot d=0 \implies d^{T}\cdot \nabla^{2}f(x_{0})\cdot d\geq 0$

A més, si $x_{0}\in\mathring{S}$:
+ $\nabla f(x_{0})=0$
+ $d^{T}\cdot\nabla^{2}f(x_{0})\cdot d\geq 0$ per tot $d$ (==semidefinida positiva==)
```

```ad-teor
title: Condicions suficients d'un mínim local interior

Siguin $x_{0}\in\mathring{S}$ i $f\in C^{2}$.

Si es compleix:
+ $\nabla f(x_{0})=0$
+ $d^T\cdot\nabla^{2}f(x_{0})\cdot d>0$

aleshores $x_{0}$ és un **mínim local estricte** de $f$ en $S$.
```



## Apèndix

```ad-not
title: **Notació**

+ ==Vector gradient== en $x\in \mathbb{R}^n$ : 
$$ \boldsymbol{\nabla f(x)}=\left( \frac{df}{dx_{1}}(x),\,\dots, \frac{df}{dx_{n}}(x) \right) $$

+ ==Derivada en direcció $d$== de $f$ :
$$ \boldsymbol{\nabla f\cdot d}=\lim_{n\to0} \frac{f(x+hd)-f(x)}{h} $$

+ ==Matriu Hessiana== en $x\in \mathbb{R}$ :
$$ \boldsymbol H=\boldsymbol{\nabla^{2}f(x)} = \begin{pmatrix}
\displaystyle\frac{d^{2}f}{dx_{1}dx_{1}}(x) & \dots & \displaystyle\frac{d^{2}f}{dx_{1}dx_{n}}(x) \\
\vdots & \ddots & \vdots \\
\displaystyle\frac{d^{2}f}{dx_{n}dx_{1}} & \dots & \displaystyle\frac{d^{2}f}{dx_{n}dx_{n}}
\end{pmatrix} $$
```

```ad-def
title: Compacte

Un conjunt ==compacte== és un conjunt **tancat** i **acotat**.
```
^f7df0a
