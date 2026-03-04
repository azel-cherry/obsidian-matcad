# Informació Quàntica

## Notació i Introducció

Prenem un vector $\ket{\psi} = \begin{pmatrix}z_{1}\\ z_{2}\end{pmatrix}$ de $\mathcal{H}=\mathbb{C}^{2}$ (~={green}espai de Hilbert=~).

```ad-def
title: *Conjunt hermitià (adjunt)*

$$\boxed{\boldsymbol{\ket{\psi}^{\dagger}} = \ket{\psi}^{\star T} = \bra{\psi}}$$

+ $\ket{\psi}^\star$ és el conjugat
```

```ad-def
title: Producte escalar

$$\boxed{\boldsymbol{\braket{ \psi_{1} | \psi_{2} }} = \bra{\psi_{1}}\cdot \ket{\psi_{2}}}$$

Propietats:
+ $\braket{ \psi |\psi  }\geq0$ ~={faded}($=0 \iff \ket{\psi}=0$)=~
+ $\braket{ \psi | \phi }^{\star} = \braket{ \phi | \psi }$
+ Propietat associativa: $\bra{\psi}\,(\alpha \ket{\phi}+\beta \ket{\psi_{2}})=\alpha \braket{ \psi | \phi_{1} } + \beta \braket{ \psi | \phi_{2} }$
+ $\ket{\psi}$ i $\ket{\phi}$ ortogonals $\iff \braket{ \psi | \phi }=0$
```

```ad-def
title: *Projecció*

$$ \boxed{\ket{\psi_{1}}\bra{\psi_{2}}} $$

Deixa invariant els vectors del subespai i anul·la els que son ortogonals.
```

```ad-def
title: Norma

$$\boxed{\boldsymbol{||\psi||} = \sqrt{\braket{ \psi | \psi }}}$$

+ **Normalització:** $\ket{\tilde{\psi}} = \displaystyle\frac{\ket{\psi}}{||\psi||}$ ~={faded}($\implies ||\tilde{\psi}||=1$)=~
```

```ad-def
title: Bases

$$\boxed{\boldsymbol{\{\ket{\phi_{i}}\}_{i=1}^{N}}}$$

+ Qualsevol vector $\ket{\psi}=\sum_{i}\alpha_{i}\ket{\phi_{i}}$
+ Si la base és ortonormal: 
	+ $\alpha_{i}=\braket{ \psi |\phi _{i} }$
	+ $\sum_{i}\ket{\phi_{i}}\bra{\phi_{i}}=\mathbb{1}$
+ Per operadors: $\alpha_{ij} = \bra{\phi_{i}} A \ket{\phi_{j}}$
```

```ad-def
title: Operadors lineals

$$\boxed{A:\mathcal{H}\to\mathcal{H}}$$

+ Propietats:
	+ Associativa: $A(\ket{\psi_{1}}+\ket{\psi_{2}})=A\ket{\psi_{1}}+A\ket{\psi_{2}}$
	+ Commutativa: $A\lambda \ket{\psi}=\lambda A\ket{\psi}$
+ Tipus:
	+ ~={green}Autoadjunt (observable):=~ $A=A^{\dagger}$
	+ ~={green}Unitari:=~ $UU^{\dagger}=U^{\dagger}U=\mathbb{1}$
	+ ~={green}Projector:=~ $P=P^{2}$
	+ ~={green}Diagonal:=~ $A_{ij}=0$ si $i\neq j$
+ **Valor mitjà (esperat)** donat un estat inicial $\ket{\psi}$: $\braket{A}=\bra{\psi}A\ket{\psi}=\sum_{i}\lambda_{i}\,p_{i}$
	+ $\phi_{i}$ vep d'$A$ amb vap $\lambda_{i}$
```

```ad-teor
title: Teorema de descomposició espectral

Sigui $A$ auto-adjunt, aleshores:

 + Vaps d'$A$ $\lambda_{i}\in \mathbb{R}$
+ Veps d'$A$ formen base ortonormal $\{\phi_i\}_{i}$
+ $A$ es pot expressar com $\boxed{\,A = \sum_{i}\lambda_{i}\ket{\phi_{i}}\bra{\phi_{i}}\,}$, que en la base $\{\phi_{i}\}_{i}$ és la matriu diagonal
  $$\begin{pmatrix}\lambda_{1} & \dots & 0 \\ \vdots & \ddots  & \vdots \\ 0 & \dots & \lambda_{n}\end{pmatrix}.$$
```


---

## Fonaments de la Mecànica Quàntica

#### Postulats

```ad-prop
title: Postulat I: **estat**

L'estat d'un sistema quàntic és descrit per un vector normalitzat $\ket{\psi}$ ~={faded}(tal que $\braket{ \psi | \psi }=1$)=~.

~={pink}(*)=~ $e^{i\phi}\ket{\psi}$ i $\ket{\psi}$ descriuen el mateix estat físic.
```

```ad-prop
title: Postula II: **observables**

Les magnituds físiques mesurables d'un sistema son descrites per operadors observables $A$ ~={faded}(tal que $A=A^{\dagger}$)=~.
```

````ad-prop
title: Postulat III: **Mesura projectiva** (PVM)

En mesurar un observable $A$:
1. Els resultats possibles son els seus vaps $\alpha_{i}$.
2. Sigui $A\ket{\phi_{i}}=\alpha_{i}\ket{\phi_{i}}$, la probabilitat d'obtenir la mesura $\alpha_{i}$ quan el sistema és a l'estat $\ket{\psi}$ és $\boxed{\,p_{i}=|\braket{ \phi_{i} | \psi }|^{2}}$.
3. Després de mesurar $A$ i obtenir $\alpha_{i}$, l'estat del sistema esdevé $\ket{\psi}\to \ket{\phi_{i}}$ ~={faded}(al interactuar amb els instruments de mesura, el sistema ja no és tancat)=~.
   
```ad-prop
title: Extensió: **Mesura generalitzada** (POVM)

Mesures descrites per un conjunt d'operadors $\{M_{i}\}$, amb $M_{i}\geq0$ i que satisfan la condició de complitud:
$$ \sum_{i} M_{i}^{\dagger}M_{i} = I $$

+ Cada possible resultat $i$ ocorre amb probabilitat $\,\boxed{p_{i} = \bra{\psi}\,M_{i}^{\dagger}M_{i}\,\ket{\psi}}$.
+ Després d'observar el resultat $i$, l'estat del sistema esdevé
  $$ \,\boxed{\ket{\psi'} = \frac{M_{i}\ket{\psi}}{\sqrt{p_{i}}}} $$
```
````

```ad-prop
title: Postulat IV: **evolució**

L'evolució temporal d'un sistema quàntic tancat $\ket{\psi}$ és unitari i preserva la normalització de $\ket{\psi}$.

Aquesta evolució és $\ket{\psi_{t}}=e^{-iHt}\,\ket{\psi_{0}}$, amb $H$ l'operador autoadjunt ==Hamiltonià==, que depèn de la natura del sistema.
```


#### *Qubits*

qubits :)


---

## Apèndix

+ **Trobar vaps** $\lambda$: $\boxed{\lambda^{2} - \text{tr}(A)\lambda + \det(A)}$, amb $\text{tr}$ la traça de la matriu $A$ (suma dels elements de la diagonal).
+ **Trobar veps** $\phi_{i}=(x,y)$: Solucionar
$$ \begin{pmatrix}
a-\lambda_{i} & b \\
c & d-\lambda_{i}
\end{pmatrix} \cdot \begin{pmatrix}
x \\
y
\end{pmatrix} = \begin{pmatrix}
0 \\
0
\end{pmatrix}. $$

