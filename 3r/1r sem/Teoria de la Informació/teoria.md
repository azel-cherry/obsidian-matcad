# Teoria de la Informació

## **Mesura** de la informació

Al fer un experiment, obtindrem més informació al haver-hi més **incertesa**, més **opcions** o quan el resultat és més **improbable**.

````ad-def
title: *Funció d'incertesa*

Diem a $I(n)$ a la funció d'incertesa sobre $n$ resultats possibles. Aquesta funció compleix:

1. $I(1)=0$
2. $I(n)<I(n+1)$
3. $I(nm) = I(n) + I(m)$
	+ D'això deduïm que $I(n^{k})=k\cdot I(n)$.

```ad-prop
title: Mesures

+ ~={green}Mesura de Hartley:=~ $\boxed{I(n)=\log(n)}$
+ ~={green}Mesura de Shannon:=~ $\boxed{I(A)=-\log(p(A))}$ amb $p(A)$ probabilitat de l'esdeveniment $A$
  
La mesura de Shannon té en compte que els esdeveniments menys probables donguin menys informació.
```
````

```ad-def
title: *Informació d'una font*

Si una font d'informació produeix els resultats $a_{1},\dots,a_{n}$ amb probabilitats $p(a_{1}),\dots,p(a_{n})$, definirem la ==informació de la font== com la mitjana ponderada de la informació de tots els resultats:

$$ \boxed{\,\sum_{i=1}^{n} p(a_{i})\,I(a_{i})\,} $$
```

````ad-def
title: Unitats de mesura

+ ~={green}Bit:=~ Unitat d'informació més petita, associada a la informació d'una font amb dos esdeveniments equiprobables. Es fa servir $\log_{2}()$.

+ ~={green}Dit (o Hartley):=~ Unitat de mesura equivalent a 10 esdeveniments equiprobables. Es fa servir $\log_{10}()$.
  
+ ~={green}Nat:=~ Unitat en base $e$. Es fa servir $\ln()$.
  
```ad-not
Farem servir **bits** i assumirem $\log(a):=\log_{2}(a)$.
```
````


---
## Model de **Shannon**

Podem pensar en una ~={green}font discreta sense memòria=~ com un **espai mostral** i una **variable aleatòria discreta** que assigna a cada missatge la seva informació:

$$ \begin{align}
X:\, & S \to R \\
& a_{i} \mapsto I(a_{i})
\end{align}$$

````ad-def
title: *Entropia*

Sigui $X$ una v.a. discreta amb distribució de probabilitats $\{p_{1},\dots p_{n}\}$, aleshores l'==entropia== de $X$ és:
$$ H(X) = \boxed{\, -\sum_{i=1}^{n} p_{i}\log(p_{i}) \,} $$

```ad-prop
Una v.a. discreta $X$ amb probabilitats $\{p_{1},\dots,p_{n}\}$ compleix:
+ $H(X)\geq0$
+ $H(X)=0 \iff$ existeix $i$ tal que $p_{i}=1$ 
```

```ad-teor
title: Teorema fonamental de l'entropia

Sigui $X$ una v.a. discreta amb probabilitats $\{p_{1},\dots,p_{n}\}$, aleshores:
1. $H(X) \leq \log(n)$
2. $H(X)=\log(n) \iff p_{i}=\frac{1}{n}\,\forall i\,$ (equiprobabilitat) 
```
````

```ad-not
+ Considerem la indeterminació $0\cdot \log(0) = 0$.
+ Notació: $H(X)=H(p_{1},\dots,p_{n})$
```


---
## Informació **mútua**

