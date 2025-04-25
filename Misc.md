Merda que he escrit i al final no he fet servir però em fa pena esborrar per si ho vull més endavant (no ho voldré).

```ad-met
title: Trobar una família de polinomis ortogonals

1. Comencem amb $\psi_{0}=A_{0}$ (lliure)
2. Busquem $\psi_{1}$ de grau 1 tal que $\langle \psi_{1},\psi_{0} \rangle=0$
3. Busquem $\psi_{2}$ de grau 2 tal que $\langle \psi_{2},\psi_{0} \rangle=0$ i $\langle \psi_{2},\psi_{1} \rangle=0$
4. ...
```

````ad-teor
title: Teorema de **Morera**

Sigui $\Omega \subset \mathbb{C}$ un obert i $f\in C(\Omega)$.

Si per tot triangle $T\subset\Omega$ es compleix
$$ \int_{\partial T} f(z)\,dz = 0 \,,$$
llavors $f$ és holomorfa en $\Omega$.

```ad-prop
Sigui $\Omega \subset \mathbb{C}$ un obert i $f\in C(\Omega)\cap H(\Omega\setminus \{p\})$.

Aleshores $f\in H(\Omega)$.
```
````

```ad-teor
title: Principi de **reflexió de Schwarz**

Sigui $\Omega$ un domini simètric respecte l'eix real, i
$$ \begin{align}
\Omega_+ = \Omega \cap \{\mathrm{Im}(z)>0\} \\
\Omega_- = \Omega \cap \{\mathrm{Im}(z)<0\}
\end{align} \,,$$
i sigui $g\in H(\Omega_+)$ tal que per tot $x \in \mathbb{R}$ existeix
$$ g(x) = \lim_{z\to x} g(z)\in \mathbb{R} \quad\text{per }z\in\Omega_{+} \,.$$
Aleshores la funció
$$ f(z) = \begin{cases}
g(z) &\text{si }z\in\Omega_{+} \\[0.3em]
g(x) &\text{si }z\in \mathbb{R}\cap\Omega \\
\overline{g(\overline{z})} &\text{si }z\in\Omega_{-}
\end{cases} $$
compleix $f\in H(\Omega)$.
```

```ad-teor
title: Teorema de **Weierstrass**

Sigui $\Omega \subset \mathbb{C}$ un obert i $\{f_{n}\}$ una successió de funcions $\in H(\Omega)$ tal que $f_{n}\to f$ uniformement sobre els compactes d'$\Omega$.

Aleshores $f\in H(\Omega)$ i $f'_{n}\to f'$ uniformement sobre els compactes d'$\Omega$.
```

````ad-teor
title: Derivació sota el signe d'integració

Siguin $\Omega_{1},\Omega_{2}\subset \mathbb{C}$ oberts, $\gamma:[a,b]\to \Omega_{2}$ un camí, i $F:\Omega_{1}\times\gamma*\to \mathbb{C}$ contínua amb $F(\cdot,z)$ holomorfa en $\Omega_{1}$ per tot $z\in\gamma*$.

Aleshores la funció
$$ f(w) = \int_{\gamma} F(w,z)\,dz \quad\text{per }w\in\Omega_{1} $$
és holomorfa en $\Omega_{1}$, amb
$$ f'(w) = \int_{\gamma} \frac{\partial F}{\partial w}(w,z)\,dz \quad\text{per }w\in\Omega_{1} \,.$$

```ad-prop
title: **FIC per derivades**

Sigui $\Omega \subset \mathbb{C}$ un obert amb $\overline{D_{r}(a)}\subset\Omega$, i $f\in H(\Omega)$.

Lavors per $n\in \mathbb{N}$
$$ f^{(n)}(z_{0}) = \frac{n!}{2\pi i} \int_{r=|z-a|} \frac{f(z)}{(z-z_{0})^{n+1}}\,dz\,, \quad |z_{0}-a|<r \,.$$
```

```ad-prop
Sigui $\Omega\subset \mathbb{C}$ un obert i $F:\Omega\times[a,b]\to \mathbb{C}$ contínua amb $F(w,s)$ holomorfa en $w$ per tot $s \in[a,b]$.

Aleshores la funció
$$ f(w) = \int_{a}^{b} F(w,s)\,ds $$
és holomorfa en $\Omega$, amb
$$ f'(w) = \int_{a}^{b} \frac{\partial F}{\partial w}(w,s)\,ds \quad\text{per }w\in\Omega \,.$$
```
````

