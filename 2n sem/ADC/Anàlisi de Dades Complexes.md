
## Regressió **múltiple**

#### Solucions dels **mínims quadrats**

~={green}Problema general:=~
Tenim un sistema d'equacions **sobredeterminat** de forma
$$ A\cdot x=b \,,$$
amb $A\in M_{n,m}[\mathbb{R}]$, $n>m$ i $b\in \mathbb{R}$.

La solució d'aquest sistema és $x\in \mathbb{R}^n$ que compleix
$$ \min_{x}||A\cdot x-b||^2 $$

```ad-teor
Qualsevol solució del sistema d'equacions $n\times m$
$$ A^T\cdot A\cdot x=A^T\cdot b $$
soluciona el problema de minimització.

Aquestes equacions es diuen ==equacions normals==.
```

```ad-ex
title: Exemples

Siguin $\{y_{i},x_{i}\}$ amb $i=1,\dots,n$ observacions de les que volem estimar la recta $y_{i}=\alpha+\beta x_{i}$ que se'ls ajusta millor.

Aleshores 
$$ \hat{x} = \begin{pmatrix}
\displaystyle\overline{y}-\overline{x}\,\frac{S_{xy}}{S_{x}^2} \\
\displaystyle\frac{S_{xy}}{S_{x}^{2}}
\end{pmatrix} \,.$$

---

En concret, si volem estimar la recta que passa per l'origen $y_{i}=\beta x_{i}$, aleshores
$$ \hat{x} = \frac{\displaystyle\sum_{i=1}^{n}x_{i}\,y_{i}}{\displaystyle\sum_{i=1}^{n}x_{i}^{2}} \,.$$
```

```ad-prop
Sigui $A\in M_{n,m}[\mathbb{R}]$ amb $n\geq m$.

Aleshores la matriu $A^T\cdot A$ és invertible si i només si $\text{rang}(A)=m$ .
```