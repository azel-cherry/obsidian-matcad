## *Backtracking*

| ~={green}Tipus de problema=~                                                                                                                           | ~={green}Estratègia=~                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Problema **combinacional**:<br><ul><li>Format per **conjunts** on cercar la solució, que es pot organitzar en forma d'**arbre**.</li><li>**No** es pot descompondre en **problemes independents**. | Organitzar l'espai de cerca en forma d'arbre i recorre'l buscant els nodes que podran ser solució. |

^25f58a

`````ad-prop
title: Comportament

+ **Organitzar** l'espai de cerca en forma d'**arbre**
+ Recórrer l'arbre en **profunditat prioritària**
	+ Funció **recursiva** on cada crida correspon a un node de l'arbre

```ad-prop
title: Cerca òptima

**No** fer una **cerca exhaustiva** (==força bruta==):
+ **Reduir** l'**espai de cerca**
+ **Podar branques** de l'arbre que sabem que no portaran a una bona solució (==*forward checking*==)
+ Seleccionar la **branca més prometedora**
```

+ **Filtrar nodes** i fulles mentres es recórre l'arbre aplicant la **condició** que ha de complir la **solució**, que tindrà forma de *n*-tupla.
`````

```ad-prop
title: Complexitat

Complexitat exponencial
```


## *Branch & Bound*

| ~={green}Tipus de problema=~                    | ~={green}Estratègia=~                                                                                      |
| ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| Mateix cas que amb [[#^25f58a \| backtracking]]. | Tractar **a la vegada** tots els nodes amb branques no explorades, construint **varies solucions** al mateix temps. |

+ ~={green}Node viu.=~ Node amb possibilitats de ser ramificat.
	+ **Node en curs/expansió.** Node viu més prometedor, del que s'estan generant fills.
+ ~={pink}Node mort.=~ Node del que no es generaran més fills perquè:
	+ No té més fills per explorar
	+ No és completable
	+ No arribarà a una solució millor que la solució en curs

De cada node es guarda tota la informació del camí que ha seguit.

`````ad-prop
title: Comportament

Tindrem una *priority queue* amb tots els nodes vius.

+ ~={green}Selecció=~ d'un node mitjançant la **funció d'estimació**, que sol valorar:
	+ La part construïda de la solució
	+ La part que falta per completar (estimada)

+ ~={green}Ramificació=~ del node seleccionat; creació dels nodes fills.
+ ~={green}Poda.=~ Eliminar nodes fills que sabem que no seran completables.
	+ Els nodes amb una estimació dolenta es podaran sols, ja que torbarem la solució abans de que siguin seleccionats per la *priority queue*.

Acabem al trobar una solució o esgotar els nodes vius.
`````


#### *Branch & Bound* per **optimització**

Partim d'un problema amb una funció de cost $c(x)$, que no estarà definida per solucions parcials.

```ad-prop
title: Poda per **cota inferior**

Definim la funció **cota inferior** $\boldsymbol{L(x)}$ tal que
$$L(x) \leq \text{min}\,\{c(x')\} \,.$$
amb $x'$ descendent de $x$.

+ Aquesta és la que farem servir per ordenar la *priority queue*.
+ Quan a l'hora de ramificar trobem una solució complerta $s$, també podarem tots els nodes $x$ tal que $L(s)<L(x)$.
```

```ad-prop
title: Poda per **cota superior**

Definim la funció **cota superior** $\boldsymbol{L(x)}$ tal que
$$L(x) \leq \text{min}\,\{c(x')\} \,.$$
amb $x'$ descendent de $x$.

+ Quan a l'hora de ramificar una solució (parcial o completa) $s$, podarem tots els nodes $x$ tal que $U(s)<L(x)$.

---
També guardarem el **mínim de $\boldsymbol{U(x)}$** ($U_{m}$) per a tots els nodes que anem explorant.
+ Podarem els nodes $x$ amb $U_{m}<L(x)$.
```

Quan es trobi una solució per la *priority queue*, podem assegurar que serà la òptima.


#### *Backtracking* vs. *Branch & Bound*

| ~={fadedd}(per trobar una solució)=~ | ~={green}Backtracking=~                                             | ~={green}Branch & Bound=~                                 |
| ------------------------------------ | ------------------------------------------------------------------- | --------------------------------------------------------- |
| **Recorregut de l'espai de cerca**   | Profunditat prioritària                                             | Segons l'heurística                                       |
| **Construcció de la solució**        | Una única solució a completar ~={fadedd}(es van afegint i eliminant elements)=~ | Múltiples solucions parcials ~={fadedd}(només s'afegeixen elements)=~ |

| ~={fadedd}(per optimitzar)=~ | ~={green}Backtracking=~                                      | ~={green}Branch & Bound=~                                                           |
| ---------------------------- | ------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| **Poda**                     | Hem de generar totes les solucions                           | La funció d'estimació permet no haver de buscar totes les solucions                 |
| **Memòria**                  | Utilitza poca memòria ~={fadedd}(única solució a completar)=~ | Pot arribar a utilitzar molta memòria ~={fadedd}(moltes solucions al mateix temps)=~ |


## Programació dinàmica

Basada en el **principi d'optimalitat de Bellman**: *“En una seqüència de decisions òptima tota subseqüència ha de ser també òptima"*.

| ~={green}Tipus de problema=~                                                                                                                                                                                      | ~={green}Estratègia=~                                                                                            |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Problema que compleix:<br><ul><li>Es pot dividir en subproblemes amb la mateixa estructura<li>Els subproblemes depenen l'un de l'altre<li>**Bellman.** La solució del problema és la composició dels subproblemes | Guardar ~={fadedd}(en una taula)=~ les solucions dels subproblemes i utilitzar-les quan es detecta una repetició | 

Dos estratègies:

|                | ~={green}Top-down=~                                                                                                | ~={green}Bottom-up=~                                                      |
| -------------- | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------- |
| **Estratègia** | Quan volem resoldre un nou subproblema, comprovar si ja l'hem calculat, i si no calcular-lo i guardar el resultat. | Començar solucionant els problemes més simples, i construir els més grans |
| **Eficiència** | Només es resolen els subproblemes estrictament necessaris                                                          | Millor cost temporal o espacial                                           |

