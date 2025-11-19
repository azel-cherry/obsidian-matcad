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

```ad-def
title: *Matriu del canal*

La matriu d'un canal és:
$$ \Pi = \begin{pmatrix}
p(Y_{1}|X_{1}) & \dots & p(Y_{m}|X_{1}) \\
\vdots & \ddots & \vdots \\
p(Y_{1}|X_{n}) & \dots & p(Y_{m}|X_{n})
\end{pmatrix} $$
```

```ad-ex
title: Exemple: *Canal binari simètric*

Un canal binari simètric (BSC) té:
+ **Origen:** $X = \{x_{0}=0,\,x_{1}=1\}$
+ **Destí:** $Y = \{y_{0}=0,\,y_{1}=1\}$
+ **Probabilitat d'error al bit:** $0\leq p\leq \frac{1}{2}$

A partir d'aquesta informació, específicament les probabilitats condicionades, podem construir la matriu del canal:
$$ \Pi = \begin{pmatrix}
1-p & p \\
p & 1-p
\end{pmatrix} $$
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


---
## Codificació del **canal**

#### **Models** de canals discrets sense memòria

````ad-def
title: Canal *sense pèrdua*

Un canal és sense pèrdua si $\boxed{H(X|Y)=0}$ , és a dir, $I(X,Y)=H(X)$.

```ad-prop
title: Propietats

+ La sortida determina l'entrada de manera única.
+ A cada columna de $\Pi$ hi ha un únic element no nul.
+ $n\leq m$
+ $C\leq\log(n)$
  + Igualtat quan la distribució inicial és equiprobable.
```
````

````ad-def
title: Canal *determinista*

Un canal és determinista si $\boxed{H(Y|X)=0}$ , és a dir, $I(X,Y)=H(Y)$.

```ad-prop
title: Propietats

+ L'entrada determina la sortida de manera única.
+ A cada fila de $\Pi$ hi ha un únic element no nul.
+ $m\leq n$
+ $C\leq\log(m)$
  + Igualtat quan la distribució final és equiprobable, i sempre existeix una distribució inicial que fa que això passi.
```
````

````ad-def
title: Canal *sense soroll*

Un canal és sense soroll si és sense pèrdua i determinista. És a dir, $I(X,Y)=H(X)=H(Y)$.

```ad-prop
title: Propietats

+ Relació biunívoca entre l'entrada i la sortida.
+ A cada columna de $\Pi$ hi ha un únic $1$ i la resta $0$.
+ $n=m$
+ $C=\log(n)=\log(m)$
```
````

````ad-def
title: Canal *amb entrada i sortida independents*

Un canal és amb entrada i sortida independents si $\boxed{H(X|Y)=H(X)}$ i $\boxed{H(Y|X)=H(Y)}$. És a dir, $I(X,Y)=0$.

```ad-prop
title: Propietats

+ L'entrada i la sortida no tenen res a veure.
+ Les files de $\Pi$ son idèntiques.
+ $C=0$
```
````

````ad-def
title: Canal *totalment simètric*

Un canal és totalment simètric si ??????

```ad-prop
title: Propietats

+ Les files i columnes de $\Pi$ son iguals excepte l'ordre.
+ $H(Y|X=x_{i})=H(Y|X=x_{j})=H(Y|X)$
+ $C \leq \log(m) - H(Y|X)$
  + Igualtat quan $y_{j}$ son equiprobables (equivalentment, quan $x_{i}$ son equiprobables).
+ $H(Y)=\log(m)\,$ quan $y_{j}$ son equiprobables.
```
````


#### Regles de **descodificació**

Anomenem funció o ==regla de descodificació== a una aplicació
$$ f: Y \to X \,.$$

```ad-prop
title: Error

Si $x_{i}$ a l'entrada produeix $y_{j}$ a la sortida i $f(y_{j})\neq x_{i}$, direm que s'ha produït un ==error== en la descodificació. La **probabilitat d'error** en la descodificació és:
$$ p_{e}(y_{j}) = \sum_{i|x_{i}\neq f(y_{j})} p(x_{i}|y_{j}) = \boxed{\,1-p(f(y_{j})|y_{j})\,} $$

La **probabilitat mitjana d'error** en la descodificació és:
$$ \overline{p}_{e} = \sum_{j=1}^{m} p(y_{j})\,p_{e}(y_{j}) = 1- \sum_{j=1}^{m} p(f(y_{j}),y_{j}) $$
```

````ad-def
title: *MPE*

Una regla $f$ és a ==mínima probabilitat d'error (MPE)== si per cada $y_{j}$ assignem $f(y_{j})=x_{i}$ tal que $p(x_{i}|y_{j})$ sigui màxima.

```ad-prop
La regla MPE minimitza la probabilitat mitjana d'error.
```
````

````ad-def
title: *MV*

Una relga $f$ és a ==màxima versemblança (MV)== si per a cada $y_{j}$ assignem $f(y_{j})=x_{i}$ tal que $p(y_{j}|x_{i})$ sigui màxima.
````

```ad-prop
En un canal amb distribució inicial equiprobable, regles MPE i MV coincideixen.
```

````ad-teor
title: Segon teorema de Shannon

> Considerem un BSC$(p)$ amb igual probabilitat per a les dues entrades, i de capacitat $C$. Denotem per $C_{n}$ el conjunt de tots els codis amb $M_{n}$ paraules-codi de longitud $n$ i taxa de transmissió de la informació fixada $R_{T}$. Sigui $p^*(M_{n},n,p)$ el valor minimal de la probabilitat mitjana d'error per a tots els codis de $C_{n}$.

Si $0<R_{T}<C$, aleshores $\displaystyle\lim_{n\to\infty}p^*(M_{n},n,p)=0$.

```ad-not

Generalitzt a altres canals, aquest teorema ens diu que podem trobar un sisdema de codificació per a un canal tal que la probabilitat mitjana d'error sigui tan petita com vulguem.

Aquest sistema s'aconsegueix incrementant la longitud de les paraules-codi (augmentant per tant el temps necessari per processar i transmetre la informació).
```
````


---
## Codificació de la **font**

Considerem la font $S=\{a_{1},\dots,a_{n}\}$ amb probabilitats $\{p_{1},\dots,p_{n}\}$.

```ad-def
title: Definicions

+ Un element o seqüencia d'elements d'$S$ s'anomena ==missatge==.
+ Un conjunt de símbols $\mathfrak{A}=\{\sigma_{1},\dots,\sigma_{D}\}$ és l'==alfabet $D$-ari== del codi.
+ La codificació assigna a cada element $a_{i}$ un $c_{i}$, anomenat ==paraula-codi==, que consisteix en una seqüència de símbols de $\mathfrak{A}$. El nombre de símbols de $c_i$ és la seva ==longitud==.
+ El ==codi== és $C=\{c_{1},\dots,c_{n}\}$.
```

L'objectiu és que la **longitud total** de la seqüència de símbols a transmetre sigui la **menor possible**, per tant:
+ Assignem paraules-codi més curtes als missatges més probables.
+ Si les probabilitats son desconegudes o iguals, poden ser útils codis de longitud constant.


#### **Tipus** de codis

````ad-def
title: Codi *de descodificació única*

Un codi és de ==descodificació única== si no existeix cap seqüència de paraules-codi ambigua.
````

Només treballarem amb codis de descodificació única.

````ad-def
title: Codi *instantani*

Un codi és ==instantani== si cap paraula-codi és prefix d'una altra.

```ad-prop
Tot codi instantani és de descodificació única.
```

```ad-teor
title: Desigualtat de **Kraft**

Existeix un codi instantani $D$-ari en què les paraules-codi tenen longituds $L_{1},\dots,L_{n}$ si i només si
$$ \boxed{\,\sum_{i=1}^{n} D^{-L_{i}} \leq 1\,} \,.$$
```
````

```ad-prop
title: Codi de longitud **fixa**

> Tenim una font amb $n$ missatges equiprobables, i volem codificar-ne $m$-tuples amb paraules-codi de longitud $L$ formades per $D$ símbols.

Aleshores $\,\boxed{\,D^{L}\geq n^{m} \iff L \geq \displaystyle\frac{m\log(n)}{\log(D)}\,}$ .
```

```ad-prop
title: Codi de longitud **variable**

> Tenim $S=\{a_{1},\dots,a_{n}\}$ amb probabilitats $\{p_{1},\dots,p_{n}\}$. Sigui $L_i$ la longitud de la paraula-codi $c_i$.

Aleshores la longitudi del codi és:
$$ \boxed{\,\overline{L} = \sum_{i=1}^{n} p_{i}L_{i}\,} $$
```


#### **Existència** de codis **òptims**

```ad-teor
title: Primer teorema de **Shannon**

Tot codi $D$-ari de desocdificació única per a un conjunt de missatges $S=\{a_{1},\dots,a_{n}\}$ amb longitud mitjana $\overline{L}$ verifica
$$ \boxed{\,\overline{L} \geq \frac{H(S)}{\log(D)}\,} \,,$$
amb igualtat si i només si $p_{i}=D^{-L_{i}}$ per tot $i$.
```

```ad-prop
Sempre podem construir un codi instantani tal que:
$$\overline{L}\leq \frac{H(S)}{\log(D)}+1$$
```

```ad-def
title: Definicions

+ L'==eficiència== d'un codi $D$-ari de longitud mitjana $\overline{L}$ per a un conjunt de missatges $S$ és
$$ \eta = \boxed{\,\frac{H(S)}{\overline{L}\log(D)}\,} \,.$$

+ La ==redundància== d'un codi és el valor complementari de l'eficiència $\boxed{1-\eta\,}$ .

+ Un codi $D$-ari per a un conjunt de missatges $S$ és ==òptim== si tot altre codi $D$-ari per a $S$ té igual o superior longitud mitjana.
	+ Si $\eta=1$, aleshores el codi és òptim. La inversa no és certa generalment.
```


#### **Construcció** de codis **òptims**

```ad-prop
> Sigui $C=\{c_{1},\dots,c_{n}\}$ un codi òptim per a $S=\{a_{1},\dots,a_{n}\}$ amb probabilitats $\{p_{1},\dots,p_{n}\}$.

Aleshores es compleix:

1. $p_{i}>p_{j}\implies L_{i}\leq L_{j}$
2. Si $C$ és instantani, aleshores per a cada paraula-codi de longitud màxima n'hi ha una altra que concideix en tots els símbols excepte en l'últim.
```

```ad-teor
> Sigui $S=\{a_{1},\dots,a_{n}\}$ amb probabilitats $\{p_{1},\dots,p_{n}\}$ en ordre decreixent. Considerem $S'=\{a_{1},\dots,a_{n-1}\cup a_{n}\}$ amb probabilitats $\{p_{1},\dots,p_{n-1}+p_{n}\}$.

Si $C'=\{c_{1},\dots,c_{n-1}\}$ és un codi binari instantani per a $S'$, aleshores el codi
$$ C = \{c_{1},\dots,c_{n-1}1,c_{n-1}0\} $$
és un codi instantani per a $S$.

A més, si $C'$ és òptim, $C$ també és òptim.
```

````ad-met

1. Ordenar els missatges d'$S$ per ordre decreixent de probabilitats.
2. Assignar 1 i 0 com a últims símbols de les paraules-codi dels dos missatges menys probables $a_{n-1}$ i $a_{n}$. 
3. Reagrupar els dos últims missatges com a un sol missatge amb probabilitat $p_{n-1}p_{n}$.
4. Repetir fins tenir tot en codi binari.

```ad-ex
> $S=\{a_{1},\dots,a_{6}\}$ amb probabilitats $\{0.3,0.25,0.2,0.1,0.1,0.05\}$.

![[Pasted image 20251103200029.png | 400]]

~={pink}Resultat:=~ $C=\{11,10,00,010,0111,0110\}$.
```
````


---
## **Compressió** de dades

```mehrmaid
graph LR;
I("Input $I$")
M("Model $M$")
C("Compressor $C$")
O("Output<br>$O = C(I)$")
D("Decompressor $D$")
I2("Missatge descomprimit<br>$\widehat{I}=D(O)$")


I --> M --> C
I --> C --> O --> D --> I2
```

| Objectiu                                                                    | Mitjà                            | Límit |
| --------------------------------------------------------------------------- | -------------------------------- | ----- |
| <ul><li>Estalviar espai d'emmagatzematge<li>Estailviar temps de transmissió | Reduir la redundància de la font | $\overline{L}\geq \displaystyle\frac{H(S)}{\log(D)}$      |

```ad-def
title: Mesures de compressió

> Tenim un fitxer $M$ comprimit a un fitxer $C$.

+ ==Taxa de compressió:== $R=\frac{|C|}{|M|}$ bits per bit (bpb).
+ ==Percentatge de compressió:== $(1-R)\cdot 100\%$.
+ ==*Bitrate*:== $BR=\frac{|C|}{|M|}$ bits per símbol.
	+ En imatges, bits per píxel (bpp).
	+ En text, bits per caràcter (bpc).
```

```ad-prop
title: **Tipus** de mètodes de compressió

Depenent de la **taxa de compressió**:
+ ~={green}Sense pèrdua (lossless).=~ Totalment reversible: $I=\widehat{I}$. Limitada per l'entropia de la font. ~={faded}(Huffman, RLE, aritmètic,...)=~
+ ~={green}Amb pèrdua (lossy).=~ No reversible: $I\neq \widehat{I}$. Millors taxes de compressió. ~={faded}(JPEG, MP3, MPEG,...)=~

---
Depenent del **model d'estimació**:
+ ~={green}Estàtic (no adaptiu).=~ El model és fix durant el procés de compressió.
+ ~={green}Dinàmic (adaptiu).=~ El model canvia durant el procés.
  
  ---
Depenent de les **tècniques**:
+ ~={green}Basats en repeticions.=~ Elimina redundància quan hi ha moltes repeticions a la font.
+ ~={green}Basats en mètodes estadístics.=~ Estima probabilitats dels missatges.
+ ~={green}Basats en diccionari.=~ Crea un diccionari de missatges més freqüents.
+ ~={green}Basats en transformades.=~ 
```