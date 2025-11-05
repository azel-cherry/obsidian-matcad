
+ ~={green}Entropia:=~ $\boldsymbol{H(X)} =\displaystyle -\sum_{i=1}^{n} p_{i}\log(p_{i})$
+ ~={green}Informació mútua:=~ $\boldsymbol{I(X,Y)} = H(X) - H(X|Y) = H(Y) - H(Y|X)$
+ ~={green}Capacitat=~ del canal: $\boldsymbol{C}=\max_{p_{i}}I(p_{1},\dots,p_{n})$

---
## Canals
#### **Models** de canals

| Sense pèrdua                                                | Determinista                                                | Sense soroll                                | Independent                     | Simètric                                                                                        |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ------------------------------------------- | ------------------------------- | ----------------------------------------------------------------------------------------------- |
| $I(X,Y)=H(X)$                                               | $I(X,Y)=H(Y)$                                               | $I(X,Y)=H(X)=H(Y)$                          | $I(X,Y)=0$                      |                                                                                                 |
| La sortida determina l'entrada                              | L'entrada determina la sortida                              | Relació biunívoca entre entrada i sortida   | Entrada i sortida sense relació |                                                                                                 |
| Únic element no nul a cada **columna** de $\Pi$             | Únic element no nul a cada **fila** de $\Pi$                | Únic 1 a cada columna de $\Pi$ i la resta 0 | Files de $\Pi$ idèntiques       | Files i columnes de $\Pi$ iguals excepte permutació                                             |
| $n\leq m$                                                   | $m\leq m$                                                   | $n=m$                                       |                                 |                                                                                                 |
| $C\leq \log(n)$ amb igualtat quan $x_{i}$ son equiprobables | $C\leq \log(m)$ amb igualtat quan $y_{i}$ son equiprobables | $C=\log(n)=\log(m)$                         | $C=0$                           | $C\leq \log(m)-H(Y\mid X)$ amb igualtat quan $x_{i}$ (equivalentment $y_{i}$) son equiprobables |

#### Regles de **descodificació**

+ ~={green}Probabilitat d'error:=~ $\boldsymbol{p_{e}(y)}=1-p(f(y)|y)$
+ ~={green}Probabilitat mitjana d'error:=~ $\boldsymbol{\overline{p}_{e}}=1-\displaystyle\sum_{j=1}^{m}p(f(y_{j}),y_{j})$

| Mínima probabilitat d'error (MPE) | Màxima versemblança (MV) |
| --------------------------------- | ------------------------ |
| $p(x\mid y)$ màxima               | $p(y\mid x)$ mínima      |
+ $x_{i}$ equiprobables $\implies$ MPE i MV coincideixen

---
## Fonts
#### Tipus de **codis**

+ ~={green}Codi de longitud fixa:=~ $L \geq \displaystyle\frac{m\log(n)}{\log(D)}$
+ ~={green}Codi de longitud variable:=~ $\overline{L} = \displaystyle\sum_{i=1}^{n} p_{i}L_{i}$
```ad-prop
title: Propietats

+ ~={green}Desigualtat de Kraft:=~ Existeix un codi instantani si i només si $\displaystyle\sum_{i=1}^{n} D^{-L_{i}} \leq 1$

+ ~={green}Primer teorema de Shannon:=~ Tot codi de descodificació única verifica $\displaystyle\overline{L} \geq \frac{H(X)}{\log(D)}$
+ Sempre podem construir un codi instantani tal que $\displaystyle\overline{L}\leq \frac{H(X)}{\log(D)}+1$
```

#### **Optimització** de codis

+ ~={green}Eficiència:=~ $\boldsymbol{\eta}=\displaystyle\frac{H(X)}{\overline{L}\,\log(D)}$
+ ~={green}Redundància:=~ $1-\eta$
+ Codi $D$-ari per conjunt $X$ ~={green}òptim=~ si tot altre codi $D$-ari per $X$ té igual o superior longitud mitjana

