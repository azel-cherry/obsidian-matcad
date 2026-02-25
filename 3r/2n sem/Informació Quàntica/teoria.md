# Informació Quàntica

## Notació i introducció

Prenem un vector $\ket{\psi} = \begin{pmatrix}z_{1}\\ z_{2}\end{pmatrix}$ de $\mathcal{H}=\mathbb{C}^{2}$ (~={green}espai de Hilbert=~).

+ **Conjunt hermitià (adjunt):** $\ket{\psi}^{\dagger} = \ket{\psi}^{\star T} = \bra{\psi}$
	+ $\ket{\psi}^\star$ és el conjugat
+ **Producte escalar:** $\braket{ \psi_{1} | \psi_{2} } = \bra{\psi_{1}}\cdot \ket{\psi_{2}}$
	+ $\braket{ \psi |\psi  }\geq0$ ~={faded}($=0 \iff \ket{\psi}=0$)=~
	+ $\braket{ \psi | \phi }^{\star} = \braket{ \phi | \psi }$
	+ Propietat associativa: $\bra{\psi}\,(\alpha \ket{\phi}+\beta \ket{\psi_{2}})=\alpha \braket{ \psi | \phi_{1} } + \beta \braket{ \psi | \phi_{2} }$
	+ $\ket{\psi}$ i $\ket{\phi}$ ortogonals $\iff \braket{ \psi | \phi }=0$
+ **Norma:** $||\psi|| = \sqrt{\braket{ \psi | \psi }}$
	+ Normalització: $\ket{\tilde{\psi}} = \displaystyle\frac{\ket{\psi}}{||\psi||}$ ~={faded}($\implies ||\tilde{\psi}||=1$)=~
+ **Bases:** $\{\ket{\phi_{i}}\}_{i=1}^{N}$
	+ Qualsevol vector $\ket{\psi}=\sum_{i}\alpha_{i}\ket{\phi_{i}}$
	+ Si la base és ortonormal: 
		+ $\alpha_{i}=\braket{ \psi |\phi _{i} }$
		+ $\sum_{i}\ket{\phi_{i}}\bra{\phi_{i}}=\mathbb{1}$
	+ Per operadors: $\alpha_{ij} = \bra{\phi_{i}} A \ket{\phi_{j}}$
+ **Operadors lineals:** $A:\mathcal{H}\to\mathcal{H}$
	+ Propietats:
		+ Associativa: $A(\ket{\psi_{1}}+\ket{\psi_{2}})=A\ket{\psi_{1}}+A\ket{\psi_{2}}$
		+ Commutativa: $A\lambda \ket{\psi}=\lambda A\ket{\psi}$
	+ Tipus:
		+ Operador hermitià (auto-adjunt): $A=A^{\dagger}$
		+ Operador unitari: $UU^{\dagger}=U^{\dagger}U=\mathbb{1}$
		+ Operador projector: $P=P^{2}$
		+ Operador diagonal: $A_{ij}=0$ si $i\neq j$

```ad-teor
title: Teorema de descomposició espectral

Sigui $A$ auto-adjunt i $\lambda_{i}\in \mathbb{R}$ vaps d'$A$.

+ Veps d'$A$ formen base ortonormal $\{\phi_i\}_{i}$
+ $A$ expressada en la base $\{\phi_{i}\}_{i}$ és
  $$[A]_{\{\phi_{i}\}_{i}} = \sum_{i}\lambda_{i}\ket{\phi_{i}}\bra{\phi_{i}}=\begin{pmatrix}\lambda_{1} & \dots & 0 \\ \vdots & \ddots  & \vdots \\ 0 & \dots & \lambda_{n}\end{pmatrix}.$$
```


---

## Apèndix

+ **Trobar vaps** $\lambda$: $\boxed{\lambda^{2} - \text{tr}(A)\lambda + \det(A)}$, amb $\text{tr}$ la traça de la matriu $A$ (suma dels elements de la diagonal).
+ **Trobar veps** $(x,y)$: Solucionar
$$ \begin{pmatrix}
a-\lambda_{1} & b \\
c & d-\lambda_{2}
\end{pmatrix} \cdot \begin{pmatrix}
x \\
y
\end{pmatrix} = \begin{pmatrix}
0 \\
0
\end{pmatrix}. $$

