## 1. EDPs **quasilineals**

$\boxed{\, a\,u_{x} + b\,u_{t} = c \,}$ amb $a,b,c$ funcions en $x,t,u$.

 + Mètode de les característiques.


#### 1.1. Equació del **trànsit**

$$\begin{cases}
q'(\rho)\,\rho_{x} + \rho_{t} = 0 \\[0.3em]
\rho(x,0) = \rho_{0}(x)
\end{cases}$$

+ $q(\rho) = \rho\cdot v(\rho)$
+ $v(0)=v_{\text{max}}$ ,  $v(\rho_{\text{max}})=0$ 

1. Dibuixar corbes base característiques.

```ad-prop
title: Solució **forta**

Les corbes no es tallen en cap punt del pla.

2.  Solucionar com una EDP quasilineal normal.
```

```ad-prop
title: Solució dèbil: **ventall**

Les corbes es tallen i s'obren: $q'(\rho⁻) < q'(\rho⁺)$.

2. Afegir zona de ventall on les corbes s'obren, amb $\rho(x,t)$ tal que $q'(\rho)=\frac{x}{t}$.
```

```ad-prop
title: Solució dèbil: **xoc**

Les corbes es tallen i es tanquen: $q'(\rho⁻) > q'(\rho⁺)$.

2. Tenim un xoc amb velocitat $\sigma' =\displaystyle \frac{q(\rho⁻)-q(\rho⁺)}{\rho⁻-\rho⁺}$.
   + Condició d'entropia: $q'(\rho⁻) > \sigma' > q'(\rho⁺)$.
2. Separem les dues regions de corbes per una recta de pendent $\sigma'$.

```


## 2. Equació de les **ones**

$$\begin{cases}
u_{tt} = c^2\,u_{xx} \\[0.3em]
u_{t}(x,0) = v_{0}(x) \\[0.3em]
u(x,0) = u_{0}(x)
\end{cases}$$

```ad-prop
title: Longitud **infinita**

Fórmula d'Alambert:

$$u(x,t) = \displaystyle \boxed{\,\frac{1}{2}(u_{0}(x+ct)+u_{0}(x-ct)) + \frac{1}{2c} \int_{x-ct}^{x+ct} v_{0}(s)\,ds\,}$$
```

```ad-prop
title: Longitud **finita**

Tenim [[#^condfr | condicions de frontera]].
  
+ [[#^sepvar | Separació de variables]].
```


## 3. Equació de la **calor**

$$ \begin{cases}
u_{t} = a^2\,u_{xx} \\
\text{(condicions de frontera)} \\
u(x,0) = u_{0}(x)
\end{cases} $$

+ [[#^sepvar | Separació de variables]].


## 4. Apèndix

```ad-not
title: Condicions de **frontera**

+ *Dirichlet*: $\begin{cases}u(0,t) = f(t)\\u(L,t) = g(t)\end{cases}$
+ *Neumann*: $\begin{cases}u_{x}(0,t) = f(t)\\u_{x}(L,t) = g(t)\end{cases}$
```
^condfr

```ad-met
title: Mètode de **separació de variables**

1. $u(x,t) = X(x)\cdot T(t)$
2. Aplicar la EDP a $u(x,t)$, separar $X$ i $T$ a cada banda i igualar a $\lambda$.
3. Solucionar EDOs de $X(x)$ i $T(t)$. Per segon grau:
	+ $\lambda>0 \implies X(x) = Ae^{\lambda x}+Be^{-\lambda x}$ 
	+ $\lambda=0 \implies X(x) = A + Bx$ 
	+ $\lambda<0 \implies X(x) = A\cos(\sqrt{|\lambda|}x)+B\sin(\sqrt{|\lambda|}x)$
4. Per cada cas imposar les condicions de frontera a $u(x,t)=X(x)\cdot T(t)$. Si $u(x,t)=0$, descartem.
5. $u(x,t) = \displaystyle\sum_{k} C_{k}\,X(x)\,T(t) = \sum_{k\geq0}  A_{k}\,u_{1}(x,t) + B_{k}\,u_{2}(x,t)$. Apliquem les condicions inicials.
	+ **Ones:** dos coeficients i dos condicions inicials.
	+ **Calor:** un coeficient i una condició incial.
6. Multipliquem per $\sin\left( \frac{m\pi}{L}x \right)$ o $\cos\left( \frac{m\pi}{L}x \right)$ i integrem les dues bandes entre $0$ i $L$.
   + $\int_{0}^L \sin\left( \frac{k\pi}{L}x \right)\sin\left( \frac{m\pi}{L}x \right) = \int_{0}^L \cos\left( \frac{k\pi}{L}x \right)\cos\left( \frac{m\pi}{L}x \right)= \begin{cases} \frac{L}{2} &\text{si }k=m\neq0\\ 0 &\text{si }k\neq m\end{cases}$
1. Aïllem $A_{k},B_{k}$ i substituim a $u(x,t)$.
```
^sepvar
