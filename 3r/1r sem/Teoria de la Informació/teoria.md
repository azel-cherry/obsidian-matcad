# Teoria de la Informació

## Conceptes fonamentals
#### **Mesura** de la informació

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


#### **Entropia**

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


#### **Canal** discret sense memòria

```mehrmaid
graph LR;
A("Font")
B("Emissor")
C("Canal")
D("Receptor")
E("Destí")

A --> B --> C --> D --> E
```

Degut al possible **soroll** del canal, el missatge de sortida no sempre coincidirà amb el missatge d'entrada.

Siguin $X,Y$ dues v.a.s discretes que representen l'entrada i la sortida d'un canal, que poden prendre valors $S=\{x_{1},\dots,x_{n}\}$ i $R=\{y_{1},\dots,y_{m}\}$ respectivament, $(X,Y)$ és una v.a. bidimensional que pot prendre valors a
$$ S\times R = \{ (x_{i},y_{i}) \mid i=1,\dots,n\,;\, j=1,\dots,m \} \,,$$
amb distribució de probabilitats
$$ p(x_{i},y_{i}) = p((X=x_{i})\cap(Y=y_{j})) \,.$$

```ad-ex
title: Exemple: *Canal binari simètric*

Un canal binari simètric (BSC) té:
+ **Origen:** $X = \{x_{0}=0,\,x_{1}=1\}$
+ **Destí:** $Y = \{y_{0}=0,\,y_{1}=1\}$
+ **Probabilitat d'error al bit:** $0\leq p\leq \frac{1}{2}$

A partir d'aquesta informació, específicament les probabilitats condicionades, podem construir la matriu del canal:

| $\boldsymbol{p(y_{j}\mid x_i)}$ | $\boldsymbol{y_{0}}$ | $\boldsymbol{y_{1}}$ |
| ------------------:|:-------:|:-------:|
|               $\boldsymbol{x_{0}}$ |  $1-p$  |   $p$   |
|            $\boldsymbol{x_{1}}$ |   $p$   |  $1-p$  | 
```

```ad-def
title: *Entropia conjunta*

L'entropia d'una v.a. bidimensional és:

$$ H(X,Y) = \boxed{\,-\sum_{i=1}^{n} \sum_{j=1}^{m} p(x_{i},y_{j})\log(p(x_{i},y_{i}))\,} $$
```

`````ad-def
title: *Entropia condicionada*

+ Fixant un valor $y$ de la v.a. $Y$, aleshores la seva entropia és:
$$ H(X\mid Y=y) = \boxed{\,-\sum _{i=1}^{n} p(x_{i}| y) \log(p(x_{i}|y))\,} $$
Això es pot interpretar com l'entropia de l'element enviat a través del canal si l'element rebut ha estat $y$.

+ L'entropia condicionada d'$X$ donat $Y$ és:
$$ H(X|Y) = \boxed{\,\sum_{j=1}^{m} p(y_{j})\,H(X\,|\,Y=y_{j})\,} = -\sum_{i=1}^{n}\sum_{j=1}^{n}p(x_{i},y_{i})\log(p(x_{i}|y_{j})) $$
Que es pot interpretar com la incertesa respecte l'entrada sabent la sortida.

```ad-prop
title: Propietats

1. $H(X,Y) = H(X) + H(Y|X) = H(Y) + H(X|Y)$
2. $H(X|Y)\leq H(X)\,,\quad H(Y|X)\leq H(Y)$
	+ igualtat $\iff X$ i $Y$ son independents 
3. $H(X,Y) \leq H(X) + H(Y)$
	+ igualtat $\iff X$ i $Y$ son independents 
4. $H(X) - H(X|Y) = H(Y) - H(Y|X)$
```
`````

`````ad-def
title: *Informació mútua*

La informació mútua entre dues v.a.s discretes és
$$ I(X,Y) = H(X) - H(X|Y) = H(Y) - H(Y|X) $$

```ad-prop
+ $I(X,Y)\geq0$
+ $I(X,Y)=0 \iff X$ i $Y$ independents
```

```ad-not
title: Notació

Diem $I(p_{1},\dots,p_{n})=I(X,Y)$ amb $p_{i}=p(x_{i})$.
```
`````

```ad-def
title: *Capacitat*

La capacitat del canal és $\,C = \max_{p_{i}}I(p_{1},\dots,p_{n})$.

Es pot interpretar com la quantitat màxima d'informació que pot passar per símbol d'entrada. Les unitats seran bits/símbol.
```