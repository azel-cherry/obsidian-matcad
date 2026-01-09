# Pràctica 3


###### 1. *Factor d'amplificació de l'esquema.*

Utilitzant $\mu=\frac{\Delta t}{\Delta a}$, podem escriure l'esquema en diferències de la següent manera:

$$ \begin{align}
U^{n+1}_{m} &= -\mu\,(U_{m}^{n}-U_{m-1}^{n}) - \Delta t\,C\,U_{m}^{n}+U_{m}^{n} = \\[0.4em]
&= (-\mu-C\Delta t+1)\,U_{m}^{n} + \mu\,U_{m-1}^{n}\,.
\end{align} $$

Anomenant $x:=-\mu-C\Delta t+1$ , escrivim l'esquema anterior matricialment. 

$$ \begin{pmatrix}
U_{1}^{n+1} \\
\vdots \\
U_{M}^{n+1}
\end{pmatrix} = \begin{pmatrix}
x & 0 & 0 & \dots & \mu \\
\mu & x & 0 & \dots & 0 \\
0 & \mu & x & \dots & 0 \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
0 & 0 & 0 & \dots & x
\end{pmatrix} \begin{pmatrix}
U_{1}^{n} \\
\vdots \\
U_{M}^{n}
\end{pmatrix} $$

Com que es tracta d'una matriu circulant de dimensió $M$, sabem que els seus vectors propis seran
$$ v_{k} = (e^{\xi_{k}i}, e^{2\xi_{k}i}, \dots, e^{(M-1)\xi_{k}i}, 1)^{T}\,, $$
per $k\in \{1,2,\dots,M\}$ i amb $\xi_{k}:=2k\pi/M$. Llavors el valor propi associat a $v_{k}$ és

$$ \begin{align}
g(\xi,\Delta t) &= \mu\,e^{-\xi i} + x = \mu\,e^{-\xi i}-\mu-C\Delta t+1 = \\
&= \boxed{\,1-\mu(1-e^{-\xi i})-\Delta t\,C\,} \,.
\end{align}\ $$


---
###### 2. *Estabilitat de l'esquema.*

Comencem amb el valor absolut del factor d'amplificació calculat anteriorment, que per la desigualtat triangular podem acotar de la següent manera:

$$ |g(\xi,\Delta t)| = |1-\mu\,(1-e^{-\xi i})-\Delta t\,C| \leq |1-\mu\,(1-e^{-\xi i})| + \Delta t\,|C| \,.$$

Ens trobem amb dos casos:

1. $\boxed{\mu\leq 1}\,$ Com que els valors de $e^{-\xi i}$ es troben dins de l'interval $[-1,1]$, llavors $|1-\mu(1-e^{-\xi i})|\leq 1$ i per tant $|g(\xi,\Delta t)|\leq 1+\Delta t\,|C|$.

2. $\boxed{\mu> 1}\,$ Acotem $|1-\mu\,(1-e^{-\xi i})|^{2}$.
	$$ \begin{align}
	|1-\mu+\mu e^{-\xi_{k}i}|^{2} &= (1-\mu+\mu e^{-\xi i})(1-\mu+\mu e^{\xi i}) = \\
	&= (1-\mu)^{2} + \mu\,(1-\mu)(e^{\xi i}+e^{-\xi i})+\mu^{2}e^{\xi i}e^{-\xi i}\,.
	\end{align} $$
	Fent servir que $\displaystyle\frac{e^{\xi i}+e^{-\xi i}}{2}=\cos(\xi)$:
	$$ \begin{gather}
	(1-\mu)^{2} + \mu\,(1-\mu)(e^{\xi i}+e^{-\xi i})+\mu^{2}e^{\xi i}e^{-\xi i} = \\
    = (1-\mu)^{2}+2\mu\,(1-\mu)\cos(\xi)+\mu^{2}
    = 1-2\mu(1-\mu)(1-\cos(\xi))\,.
	\end{gather} $$
	Apliquem la relació $1-\cos(\xi)=2\sin^{2}(\frac{\xi}{2})$:
	$$ 1-2\mu(1-\mu)(1-\cos(\xi)) = 1-4\mu(1-\mu)\sin^{2}\left(\frac{\xi}{2}\right)\,. $$
	Finalment podem deduir que 
	$$ |1-\mu\,(1-e^{-\xi i})| = \sqrt{1-4\mu(1-\mu)\sin^{2}\left(\frac{\xi}{2}\right)} \leq \sqrt{1-4\mu(1-\mu)} \,,$$
	i per tant $|g(\xi,\Delta t)|\leq \sqrt{1-4\mu(1-\mu)} + \Delta t\,|C|$.

Pel Teorema del document d'*Estabilitat d'esquemes en diferències finites*, hem trobat la constant $K=|C|$ tal que el factor d'amplificació satisfà $|g(\xi,\Delta t)|\leq1+K\Delta t$ per tot $\xi$.


---
###### 3. *Estabilitat d'un nou esquema.*

Utilitzant $\mu=\frac{\Delta t}{\Delta a}$, podem escriure l'esquema en diferències de la següent manera:

$$ \begin{align}
U^{n+1}_{m} &= -\mu V\,(U_{m}^{n}-U_{m-1}^{n}) - \Delta t\,C\,U_{m}^{n}+U_{m}^{n} = \\[0.4em]
&= (-\mu V-C\Delta t+1)\,U_{m}^{n} + \mu V\,U_{m-1}^{n}\,.
\end{align} $$

Anomenant $x:=-\mu V-C\Delta t+1$ , escrivim l'esquema anterior matricialment. 

$$ \begin{pmatrix}
U_{1}^{n+1} \\
\vdots \\
U_{M}^{n+1}
\end{pmatrix} = \begin{pmatrix}
x & 0 & 0 & \dots & \mu V \\
\mu V & x & 0 & \dots & 0 \\
0 & \mu V & x & \dots & 0 \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
0 & 0 & 0 & \dots & x
\end{pmatrix} \begin{pmatrix}
U_{1}^{n} \\
\vdots \\
U_{M}^{n}
\end{pmatrix} $$

Com que es tracta d'una matriu circulant de dimensió $M$, sabem que els seus vectors propis seran
$$ v_{k} = (e^{\xi_{k}i}, e^{2\xi_{k}i}, \dots, e^{(M-1)\xi_{k}i}, 1)^{T}\,, $$
per $k\in \{1,2,\dots,M\}$ i amb $\xi_{k}:=2k\pi/M$. Llavors el valor propi associat a $v_{k}$ és

$$ \begin{align}
g(\xi,\Delta t) &= \mu V\,e^{-\xi i} + x = \mu V\,e^{-\xi i}-\mu V-C\Delta t+1 = \\
&= \boxed{\,1-\mu V(1-e^{-\xi i})-\Delta t\,C\,} \,.
\end{align}\ $$

Aquest és el factor d'amplificació de l'esquema, que per la desigualtat triangular podem acotar de la següent manera:

$$ |g(\xi,\Delta t)| = |1-\mu V\,(1-e^{-\xi i})-\Delta t\,C| \leq |1-\mu V\,(1-e^{-\xi i})| + \Delta t\,|C| \,.$$

Com que els valors de $e^{-\xi i}$ es troben dins de l'interval $[-1,1]$, llavors els valors de $1-e^{-\xi i}$ es troben dins l'interval $[0,2]$ i necessitem que $\mu V\leq 1$ per tal que $|1-\mu V\,(1-e^{-\xi i})|\leq1$. És a dir,
$$|g(\xi,\Delta t)|\leq1+C\Delta t \iff \boxed{\,\mu\leq \frac{1}{V}\,}\,,$$
i per tant l'esquema és estable per aquests valors de $\mu$.


---
###### 4. *Proposta d'un nou esquema i la seva estabilitat.*

Proposem el següent esquema alternatiu:
$$ \frac{U^{n+1}_{m}-U^{n}_{m}}{\Delta t} = -V \frac{U^{n}_{m+1}-U^{n}_{m-1}}{2\Delta a} -CU^{n}_{m} $$

Utilitzant $\mu=\frac{\Delta t}{\Delta a}$, i considerant $V=1$ i $C=0$, podem escriure l'esquema de la següent manera:

$$ 
U^{n+1}_{m} = U^n_{m} + \frac{\mu}{2}\,(U^{n}_{m-1}-U^n_{m-1})=\frac{\mu}{2}\,U^n_{m+1} + U^n_{m} - \frac{\mu}{2}\,U^n_{m-1} $$

Escrivim l'esquema anterior matricialment. 

$$ \begin{pmatrix}
U_{1}^{n+1} \\
\vdots \\
U_{M}^{n+1}
\end{pmatrix} = \begin{pmatrix}
1 & -\frac{\mu}{2} & 0 & \dots & \frac{\mu}{2} \\
\frac{\mu}{2} & 1 & -\frac{\mu}{2} & \dots & 0 \\
0 & \frac{\mu}{2} & 1 & \dots & 0 \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
-\frac{\mu}{2} & 0 & 0 & \dots & 1
\end{pmatrix} \begin{pmatrix}
U_{1}^{n} \\
\vdots \\
U_{M}^{n}
\end{pmatrix} $$

Com que es tracta d'una matriu circulant de dimensió $M$, sabem que els seus vectors propis seran
$$ v_{k} = (e^{\xi_{k}i}, e^{2\xi_{k}i}, \dots, e^{(M-1)\xi_{k}i}, 1)^{T}\,, $$
per $k\in \{1,2,\dots,M\}$ i amb $\xi_{k}:=2k\pi/M$. Llavors el valor propi associat a $v_{k}$ és

$$ g(\xi) = \frac{\mu}{2} e^{-\xi i} -\frac{\mu}{2} e^{\xi i} + 1 = 1 - \mu i\left( \frac{e^{\xi i}-e^{-\xi i}}{2i} \right) = \boxed{\,1-\mu i\sin(\xi)\,} \,.$$

Aquest és el factor d'amplificació de l'esquema, que podem acotar de la següent manera:

$$ |g(\xi)|^{2} = (1-\mu i\sin(\xi))(1+\mu i\sin(\xi)) = 1+\mu^{2}\sin^{2}(\xi) $$

Per tant $|g(\xi)|=\sqrt{1+\mu^2\sin^{2}(\xi)}$, que sempre és major a $1$ perquè $\mu\neq0$. Aleshores l'esquema proposat és inestable per tot $\mu$.