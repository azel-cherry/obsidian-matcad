Un problema de programació lineal (PL) en forma estàndard és
$$ \begin{align}
&\min f(x) \\[0.5em]
&\text{subj. a } \begin{cases}
\quad\quad\quad\,\,\,\,A \quad\quad\quad\quad\quad\,x \quad\,= \quad\,d\geq0 \\[0.5em]
\begin{pmatrix}
a_{11} & \dots & a_{1n} \\
\vdots & \ddots & \vdots \\
a_{m1} & \dots & a_{mn}
\end{pmatrix} \begin{pmatrix}
x_{1} \\
\vdots \\
x_{n}
\end{pmatrix} = \begin{pmatrix}
d_{1} \\
\vdots \\
d_{m}
\end{pmatrix}
\end{cases}
\end{align} $$
amb $n>m$ .

```ad-def
title: Solució *bàsica*

Una solució $(x_{1},\dots,x_{n})$ d'un problema de PL és ==bàsica== si les columnes $A_{i}$ d'$A$ amb $i$ tal que $x_{i}\neq0$ son linealment independents.
```

La solució òptima del problema sempre serà una solució bàsica.

````ad-prop
title: Lema de la **paret**

> Problmema de PL en forma estàndard
> $$ \begin{align}
 & \min z=cx+c_{0} \\
 & \text{subj. a } \begin{cases}
Ax=d \\
x\geq 0,\,d\geq0
\end{cases}
\end{align} $$
> amb $x_{0}$ solució factible no bàsica.

Existeixen $v\in \mathbb{R}^{n}$ i $t\in \mathbb{R}$ tals que el segment $[x_{0}-tv,x_{0}+tv]$ està dins de la regió factible i tal que $x_{0}-tv$ té més components nuls que $x_{0}$.

```ad-met
title: Trobar $\boldsymbol t$

> Solució factible no bàsica $x=(\lambda_{1},\dots,\lambda_{n})$.

Agafarem $\boxed{\,\displaystyle t=\frac{x_{k}}{\lambda_{k}}\,}$ amb $k$ tal que $\displaystyle\frac{x_{k}}{\lambda_{k}}\leq \frac{x_{i}}{\lambda_{i}}$ per tot $i$ tal que $\lambda_{i} \neq 0$.
Això garanteix que $x_{i}\pm t\,\lambda_{i}\geq 0$ .
```
````

```ad-teor
title: Teorema **fonamental** de la **programació lineal**

> Problmema de PL en forma estàndard:
> $$ \begin{align}
 & \min f(x)=cx+c_{0} \\
 & \text{subj. a } \begin{cases}
Ax=d \\
x\geq 0,\,d\geq0
\end{cases}
\end{align} $$

1. Si el problema té alguna solució factible, també en té alguna factible bàsica.
2. Si el problema té solució òptima, aleshores es pot trobar una solució factible bàsica $x^*$ tal que
	$$ f(x^*) \leq f(x) \quad \forall x \in S \,.$$
```