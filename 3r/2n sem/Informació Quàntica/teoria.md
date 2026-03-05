# Informació Quàntica

## Notació i Introducció

Prenem un vector $\ket{\psi} \in \mathcal{H}$ (vector columna) amb $\mathcal{H}=\mathbb{C}^{2}$ (==espai de Hilbert==).

```ad-def
title: *Conjunt hermitià (adjunt)*

$$\boxed{\boldsymbol{\ket{\psi}^{\dagger}} = \ket{\psi}^{\star T} = \bra{\psi}}$$

+ $\ket{\psi}^\star$ és el conjugat de $\ket{\psi}$
```

```ad-def
title: Producte escalar (interior)

$$\boxed{\boldsymbol{\braket{ \psi_{1} | \psi_{2} }} = \bra{\psi_{1}}\cdot \ket{\psi_{2}}} \in \mathbb{C}$$

Propietats:
+ $\braket{ \psi |\psi  }\geq0$ ~={faded}($=0 \iff \ket{\psi}=0$)=~
+ $\braket{ \psi | \phi }^{\star} = \braket{ \phi | \psi }$
+ Propietat associativa: $\bra{\psi}\,(\alpha \ket{\phi}+\beta \ket{\psi_{2}})=\alpha \braket{ \psi | \phi_{1} } + \beta \braket{ \psi | \phi_{2} }$
+ $\ket{\psi}$ i $\ket{\phi}$ ortogonals $\iff \braket{ \psi | \phi }=0$
```

```ad-def
title: Norma

$$\boxed{\boldsymbol{||\psi||} = \sqrt{\braket{ \psi | \psi }}}$$

+ **Normalització:** $\ket{\tilde{\psi}} = \displaystyle\frac{\ket{\psi}}{||\psi||}$ ~={faded}($\implies ||\tilde{\psi}||=1$)=~
```

```ad-def
title: Operadors lineals

$$\boxed{A:\mathcal{H}\to\mathcal{H}} \in M_{n\times n}(\mathcal{\mathbb{C}})$$

+ Propietats:
	+ Associativa: $A(\ket{\psi_{1}}+\ket{\psi_{2}})=A\ket{\psi_{1}}+A\ket{\psi_{2}}$
	+ Commutativa: $A\lambda \ket{\psi}=\lambda A\ket{\psi}$
+ Tipus:
	+ ~={green}Autoadjunt (observable):=~ $A=A^{\dagger}$
	  + ~={green}Projector:=~ $P=P^{2}$
	+ ~={green}Unitari:=~ $UU^{\dagger}=U^{\dagger}U=\mathbb{1}$
	+ ~={green}Diagonal:=~ $A_{ij}=0$ si $i\neq j$
+ **Valor d'expectació** donat un estat inicial $\ket{\psi}$: $\braket{A}=\bra{\psi}A\ket{\psi}=\sum_{i}\lambda_{i}\,p_{i}$
	+ $\phi_{i}$ vep d'$A$ amb vap $\lambda_{i}$
```

```ad-def
title: Producte exterior

$$ \boxed{\boldsymbol{\ket{\psi_{1}}\bra{\psi_{2}}}} \in M_{n\times n}(\mathbb{C})$$

+ $P=\ket{\psi}\bra{\psi}$ és la projecció a la recta definida per $\ket{\psi}$, que resulta en una matriu simètrica de rang 1. Si $\ket{\psi}$ està normalitzat, $P$ és un operador projector.
```

```ad-def
title: Bases

$$\boxed{\boldsymbol{\{\ket{\phi_{i}}\}_{i}} \text{ ortogonals}}$$

+ Qualsevol vector $\ket{\psi}=\sum_{i}\alpha_{i}\ket{\phi_{i}}$
+ Si la base és ortonormal: 
	+ $\alpha_{i}=\braket{ \psi |\phi _{i} }$
	+ Tot operador $A:\ket{\phi_{i}}\mapsto \ket{\psi_{i}}$ es pot expressar com una suma de productes exteriors
	$$ A = \sum_{i} \ket{\psi_{i}}\bra{\phi_{i}} \,.$$
	En particular, $\sum_{i}\ket{\phi_{i}}\bra{\phi_{i}}=I$.
+ Per operadors: $\alpha_{ij} = \bra{\phi_{i}} A \ket{\phi_{j}}$
```

```ad-def
title: Producte tensorial (Kronecker)

Siguin
$$ \ket{a}=\begin{pmatrix}a_{1}\\a_{2}\end{pmatrix} \in \mathcal{H}_{A}\,, \quad \ket{b}=\begin{pmatrix}b_{1}\\ b_{2}\\ b_{3}\end{pmatrix} \in \mathcal{H}_{B}\,, $$
el seu producte tensorial és
$$ \ket{a}\otimes \ket{b} = \begin{pmatrix}
a_{1}b_{1}\\a_{1}b_{2}\\a_{1}b_{3}\\a_{2}b_{1}\\a_{2}b_{2}\\a_{2}b_{3}
\end{pmatrix} \in \mathcal{H}_{A}\otimes \mathcal{H}_{B} \,.$$

+ **Base:** Si $\{\ket{\alpha_{i}}\}_{i}$ és base de $\mathcal{H}_{A}$ i $\{\ket{\beta_{i}}\}_{i}$ és base de $\mathcal{H}_{B}$, la base de $\mathcal{H}_{A}\otimes \mathcal{H}_{B}$ és $\{\ket{\alpha_{i}}\otimes \ket{\beta_{j}}\}_{ij}$.
+ **Operadors:**
  $$ A\otimes B = \begin{pmatrix}
a_{11}\,B & a_{12}\,B \\
a_{21}\,B & a_{22}\,B
\end{pmatrix} = \begin{pmatrix}
a_{11}\,b_{11} & a_{11}\,b_{12} & \dots \\
a_{11}\,b_{21} & a_{11}\,b_{22} & \dots \\
\vdots & \vdots & \ddots
\end{pmatrix} $$
```

````ad-teor
title: Teorema de descomposició espectral

Sigui $A$ auto-adjunt, aleshores:

 + Vaps d'$A$ $\lambda_{i}\in \mathbb{R}$
+ Veps d'$A$ formen base ortonormal $\{\phi_i\}_{i}$
+ $A$ es pot expressar com $\boxed{\,A = \sum_{i}\lambda_{i}\ket{\phi_{i}}\bra{\phi_{i}}\,}$, que en la base $\{\phi_{i}\}_{i}$ és la matriu diagonal
  $$\begin{pmatrix}\lambda_{1} & \dots & 0 \\ \vdots & \ddots  & \vdots \\ 0 & \dots & \lambda_{n}\end{pmatrix}.$$
  
```ad-not
title: Per **projectors**

En particular, si $A$ és un projector, els seus vaps $\lambda_{i}\in \{0,1\}$ i per tant la seva descomposició espectral és $\sum_{i}\ket{\phi_{i}}\bra{\phi_{i}}$, per $i$ tal que $\ket{\phi_{i}}$ és part de l'espai projectat.
```
````


---

## Fonaments de la Mecànica Quàntica

#### Postulats

```ad-prop
title: Postulat I: **Estat**

L'estat d'un sistema quàntic és descrit per un vector normalitzat $\ket{\psi}$. $e^{i\phi}\ket{\psi}$ i $\ket{\psi}$ descriuen el mateix estat físic.
```

```ad-prop
title: Postula II: **Observables**

Les magnituds físiques mesurables d'un sistema son descrites per operadors observables $A$.
```

`````ad-prop
title: Postulat III: **Mesures**

````ad-prop
title: Mesura **projeciva** (PVM)

En mesurar un observable $A$:
1. Els resultats possibles son els seus vaps $\lambda_{i}$.
2. Sigui $A\ket{\phi_{i}}=\lambda_{i}\ket{\phi_{i}}$, la probabilitat d'obtenir la mesura $\lambda_{i}$ quan el sistema és a l'estat $\ket{\psi}$ és $\boxed{\,p_{i}=|\braket{ \phi_{i} | \psi }|^{2}}$.
3. Després de mesurar $A$ i obtenir $\lambda_{i}$, l'estat del sistema esdevé $\ket{\psi}\to \ket{\phi_{i}}$ ~={faded}(al interactuar amb els instruments de mesura, el sistema ja no és tancat)=~.
   
```ad-not
Un observable $A$ es descomposa en projectors $P_i$ d'una dimensió:
$$A = \sum_{i}\lambda_{i}\,\ket{\phi_{i}}\bra{\phi_{i}}   =\sum_{i}\lambda_{i}\,P_{i}$$
Aquests projectors $\{P_{i}\}_{i}$ defineixen espais ortogonals i compleixen la [[#^condcomp | condició de completitud]]. 
```
````
   
````ad-prop
title: Mesura **generalitzada** (POVM)

Mesures descrites per un conjunt d'operadors $\{M_{i}\}_{i}$, amb $E_{i} = M_{i}^{\dagger}M_{i}\geq0$ i que satisfan la [[#^condcomp | condició de completitud]].

+ Cada possible resultat $i$ ocorre amb probabilitat $\,\boxed{p_{i} = \bra{\psi}\,E_{i}\,\ket{\psi}}$.
+ Després d'observar el resultat $i$, l'estat del sistema esdevé
  $$ \,\boxed{\ket{\psi'} = \frac{M_{i}\ket{\psi}}{\sqrt{p_{i}}}} \,.$$
  
```ad-not
Es pot passar d'un POVM a un PVM, agafant $M_{i}=P_{i}$ .
```
````
`````

```ad-prop
title: Postulat IV: **Evolució**

L'evolució temporal d'un sistema quàntic tancat $\ket{\psi}$ és unitari i preserva la normalització de $\ket{\psi}$.

Aquesta evolució és $\ket{\psi_{t}}=e^{-iHt}\,\ket{\psi_{0}}$, amb $H$ l'operador autoadjunt ==Hamiltonià==, que depèn de la natura del sistema.
```


#### Qubits

Un sistema quàntic de dos nivells és un ==qubit== (*quantum bit*).

````ad-def
title: Base computacional

Base formada pels vectors $\{\ket{0},\ket{1}\}$, amb
$$ \ket{0}=\begin{pmatrix}1\\0\end{pmatrix} \,,\, \ket{1}=\begin{pmatrix}0\\1\end{pmatrix} .$$
````

````ad-prop
title: Operadors de **Pauli**

|                                *Bit-flip*                                 |                                  *Bit-phase-flip*                                   |                                    *Phase-flip*                                    |
|:-------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------:|
|          $\sigma_{x}=\begin{pmatrix}0 & 1 \\ 1 & 0\end{pmatrix}$          |             $\sigma_{y} = \begin{pmatrix}0 & -i \\ i & 0\end{pmatrix}$              |             $\sigma_{z} = \begin{pmatrix}1 & 0 \\ 0 & -1\end{pmatrix}$             |
| $\begin{align}\ket{0}\mapsto \ket{1}\\\ket{1}\mapsto \ket{0} \end{align}$ | $\begin{align}\ket{0}&\longmapsto\,i\ket{1}\\\ket{1}&\mapsto -i\ket{0} \end{align}$ | $\begin{align}\ket{0}&\longmapsto \,\ket{0}\\\ket{1}&\mapsto -\ket{1} \end{align}$ |
|             $\braket{\sigma_{x}}=\sin(\theta) \cos(\varphi)$              |                   $\braket{\sigma_{y}}=\sin(\theta)\sin(\varphi)$                   |                         $\braket{\sigma_{z}}=\cos(\theta)$                         |

```ad-prop
title: Propietats

Siguin $i,j,k\in \{x,y,z\}$, els operadors de Pauli compleixen:
+ Auto-adjunts i unitaris
+ Permutació cíclica: $\sigma_{i}\,\sigma_{j}=i\,\sigma_{k}$
+ Anticommutació: $\sigma_{i}\,\sigma_{j}=-\sigma_{j}\,\sigma_{i}$
+ $\sigma_{i}^{2}=I$
```
````

````ad-def
title: Estat general

L'estat general d'un qubit és
$$\boxed{\ket{\psi}=\alpha_{0}\ket{0}+\alpha_{1}\ket{1}}\,,$$

amb $\alpha_{i}\in \mathbb{C}$ i complint $|\alpha_{0}|^{2}+|\alpha_{1}|^{2}=1$. Això és equivalent a

$$ \boxed{\ket{\psi} = \cos\left( \frac{\theta}{2} \right)\ket{0}  + e^{i\varphi} \sin\left( \frac{\theta}{2} \right)\ket{1}} \,,$$
que podem expressar en coordenades esfèriques polars amb $\theta \in[0,\pi]$ la colatitud i $\varphi \in[0,2\pi]$ la longitud.

```ad-def
title: *Vector de Bloch*

El ==vector de Bloch== associat a $\ket{\psi}$ és el vector normalitzat
$$ \vec{s} = (\braket{\sigma_{x}},\braket{\sigma_{y}},\braket{\sigma_{z}}) .$$
```

```ad-graph
title: Esfera de Bloch

Representació geomètrica d'un qubit.

![[Pasted image 20260304220601.png | 250]]

+ El pla format pels eixos $x$ (amb extrems $\ket{-}$ i $\ket{+}$) i $y$ (amb extrems $\ket{-i}$ i $\ket{i}$) representa el pla complex, corresponent a l'angle $\varphi$ entre les components $\ket{0}$ i $\ket{1}$ de $\ket{\psi}$.
+ L'eix $z$ (amb extrems $\ket{1}$ i $\ket{0}$) representa la probabilitat de mesurar $\ket{0}$ o $\ket{1}$.
```
````


---

## Apèndix

+ ~={green}Traça=~ **de l'operador $A$ ($\text{tr}(A)$):** suma dels elements de la diagonal

```ad-def
title: Condició de **completitud**

Un conjunt d'operadors $\{A_{i}\}_{i}$ compleixen la condició de completitud si
$$ \sum_{i} A_{i} = I .$$
```
^condcomp

```ad-met
title: Trobar vaps i veps


+ **Trobar vaps** $\lambda$: $\boxed{\lambda^{2} - \text{tr}(A)\lambda + \det(A)}$
+ **Trobar veps** $\phi_{i}$: Solucionar
$$ \begin{pmatrix}
a-\lambda_{i} & b \\
c & d-\lambda_{i}
\end{pmatrix} \, \phi_{i} = \begin{pmatrix}
0 \\
0
\end{pmatrix}. $$
```
