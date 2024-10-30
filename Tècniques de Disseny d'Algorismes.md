## Especificació formal

|     |     |
| --- | --- |
| ~={green}Descripció del problema=~           | Descripció **general**                                   |
| ~={green}Especificació del problema=~        | Descripció **detallada**                                 |
| ~={green}Especificació formal del problema=~ | Descripció detallada amb **llenguatge formal matemàtic** |
| ~={green}Algorisme=~                         | **Passos a seguir** per resoldre el problema             |
| ~={green}Implementació del programa=~        | **Programa** que implementa l'algorisme                  |

Un algorisme és ==fiable== si és:
+ ~={green}Correcte.=~ Es comporta d'acord amb l'especificació
+ ~={green}Robust.=~ Reacciona davant de **casos no inclosos** en l'especificació

#### Especificació per contracte

Es basa en: 
+ ~={green}Precondicions.=~ Les han de complir les **dades d'entrada**
+ ~={green}Postcondicions.=~ Les han de complir les **dades de sortida**
+ ~={green}Invariants de bucle.=~ S'han de complir al final de **cada iteració** d'un bucle
+ ~={green}Invariants de classe.=~ Les ha de complir qualsevol **objecte de classe** en qualsevol moment ~={fadedd}(excepte a l'inici o al mig dels constructors, al mig o al final dels destructors, o al mig dels mètodes)=~

Aquestes es poden implementar mitjançant **assercions** i **excepcions**.

````ad-prop
title: Assercions

```cpp
assert(<condició>);
```

```cpp fold title:"Compilació condicional"
#ifdef NDEBUG
#define assert(cond)
#else
#define assert(cond) if (!(cond)) AssertF(#cond, __FILE__, __LINE__)
#endif
```
````

```ad-def
title: Contractes interns

Contractes que ha de complir cada un dels mòduls pels que està format el programa. No es trencaran mai si el **programa és correcte**.

+ En ==debug== : tractament amb `assert` o `except`.
+ En ==release== :
	+ No es tracten perquè **no s'haurien de produir** i **tenen un cost** (de temps i memòria).
	+ En cas que no es pugui assegurar que un programa sigui robust, si és poc costós es pot mantenir el tractament i generar logs pels desenvolupadors.
```

```ad-def
title: Contractes externs

Contractes d'un mòdul que han de complir els programes que l'utilitzen o altres factors externs. Es poden trencar per:
+ ~={green}Mal ús d'una llibreria.=~ En aquest cas es poden:
	+ Distribuir **dues versions** de la llibreria (una versió de depuració i una final) si el **rendiment** del programa és important.
	+ Tenir una **única versió** si no és important el **rendiment** del programa.
+ ~={green}Usuari.=~ S'ha de tractar donant **missatges fàcils d'entendre**.

```

#### Errors d'execució

Aquests es produeixen per elements **externs al programa**.

S'han de controlar en cas que siguin **comuns** i es puguin **resoldre**, per exemple:
+ falta de memòria
+ fitxers no trobats
+ errors de comunicació

I no aquells que no tindrien per què passar, com:
+ errors de hardware
+ falta de llibreries, etc.

---
## Complexitat computacional

L'**eficiència** d'un algorisme es mesura en funció del seu ==temps d'execució== ***T(n)*** donada una mida d'entrada ***n***.

+ ~={green}Millor cas.=~ Cas en què s'executen **menys instruccions**. Informació generalment **no valuable**.
+ ~={green}Pitjor cas.=~ Cas en què s'executen **més instruccions**. Defineix un ==límit== al temps que pot trigar l'execució.
+ ~={green}Cas mitjà.=~ Cas en què s'executen un nombre d'instruccions igual a l'**esperança de la variable aleatòria** definida per totes les possibilitats.

```ad-def
title: Operacions elementals

El temps d'execució es mesura en funció del nombre d'==operacions elementals== (OE) que realitza l'algorisme:
+ operacions aritmètiques
+ assignacions a variables
+ crides a mètodes
+ comparacions lògiques
+ accés a vectors, matrius, etc.
+ . . .
```

````ad-not
title: Exemple

Funció que comprova si `val` és dins d'una taula ordenada `table` de longitud `n`.

```cpp
bool search(int table[], int n, int val)
{
	int i=0;                         // 1 OE
	while (table[i]<val && i<n) {    // 4 OE
		i=i+1;                       // 2 OE
	}

	if (table[i]==val) {             // 2 OE
		return true;                 // 1 OE
	}
	else {
		return false;                // 1 OE
	}
}
```

|     |     |     |
| --- | --- | --- |
| ~={green}Millor cas=~ | `val` és el primer element de `table` | 8 OE |
| ~={green}Pitjor cas=~ | `val` és més gean que tots el valors de `table` | 8+6n OE |
| ~={green}Cas mitjà=~ | `val` es troba a la posició `p` de `table` | 3+3n OE

````

#### Comportament asimptòtic

El nombre d'OE calculat no serà mai exacte ja que **depèn del compilador** i de les **optimitzacions de codi** activades. I encara que tinguéssim el nombre exacte d'operacions elementals, aquest no coincideix exactament amb el temps d'execució, ja que també **depèn del hardware utilitzat**.

Per això l'anàlisi del cost d'un algorisme normalment es fa estudiant el **comportament asimptòtic de *T(n)***. 

```ad-def
title: Funcions d'ordre $\boldsymbol{O(f)}$

Definim el conjunt de ==funcions d'ordre== $O(f)$ tal que $g\in O(f)$ si i només si $g$ està **acotada superiorment** per algun múltiple de $f$.
```

```ad-def
title: Funcions d'ordre $\boldsymbol{\Omega(f)}$

Definim el conjunt de ==funcions d'ordre== $\Omega(f)$ tal que $g\in \Omega(f)$ si i només si $g$ està **acotada inferiorment** per algun múltiple de $f$.
```

Evidentment agafarem la $O(f)$ més petita i la $\Omega(f)$ més gran que apliqui per acotar al màxim. 

Les complexitats més habituals, de menys complexa a més, son les següents:

| $1$ | $log(n)$ | $n$ | $n^{m}$ | $c^n$ | $n!$ | $n^n$ |
| --- | --- | --- | --- | --- | --- | --- |

amb $m\in \mathbb{N}$ i $c>1$.

---
## Algorismes *Greedy*

| Tipus de problema                     | Estratègia                                            |
| ---                                   | ---                                                   |
| La solució serà un conjunt d'elements | Construir la solució afegint sempre l'element adequat |

```ad-prop
title: Comportament

+ Afegir la millor solució en cada moment, **sense tenir en compte conseqüències futures**.
+ Si hi ha un error en un dels passos, no arribarem a la solució.
```

```ad-prop
title: Elements

+ ~={green}Conjunt de candidats.=~ Entrats al problema.
+ ~={green}Funció solució.=~ Comprova en cada pasi si el subconjunt actual de candidats forma una solució.
+ ~={green}Funció de selecció.=~ Escull quin és el candidat restant més prometedor per completar la solució.
+ ~={green}Funció de factibilitat.=~ Comprova si a partir d'un conjunt es pot arribar a una solució. Aplicada en cada pas al conjunt de seleccionats unit amb el candidat més prometedor.
+ ~={green}Funció objectiu.=~ Nucli del problema que volem optimitzar.
```

```ad-prop
title: Ordre de complexitat

+ En el **pitjor** dels casos, el bucle principal es repeteix tantes vegades com elements en el ==conjunt de candidats==.
+ Cal tenir en compte l'ordre de la ==funció de selecció==.
```

---
## Algorismes recursius

| Tipus de problema                     | Estratègia                                   |
| ---                                   | ---                                          |
| S'ha de complir:<br> - Existeix un **cas trivial** per parar el procés recursiu<br> - Es van **reduint el nombre de dades** en cada crida | Funció recursiva que es crida a ella mateixa |

```ad-prop
title: Comportament

Funció recursiva que:
+ Comprova si estem en el cas trivial.
+ Descomposa el problema en casos més simples.
+ S'aplica a ella mateixa en aquests casos.
```

```ad-prop
title: Classificacions

Segons des de quina funció es fa la crida:
+ ~={green}Directa.=~ Es crida a si mateixa.
+ ~={green}Indirecta.=~ La funció A crida a B i B crida a A.

Segons el nombre de crides que es generen en cada iteració:
+ ~={green}Lineal o simple.=~ Una sola crida.
+ ~={green}Múltiple.=~ Dues o més crides.
```

`````ad-prop
title: Ordre de complexitat

```cpp fold title:"Exemple: Fibonacci"
int fib(int n)
{
	if (n < 2) return 1;              // 2 OE
	else return fib(n-1) + fib(n-2);  // 3 OE + T(n-1) + T(n-2)
}
```

```ad-met
title: Expansió de la recurrència

Tenim el següent:
$$ T(n) = \begin{cases}
2 &\text{si } n<2 \\
3+T(n-1)+T(n-2) &\text{si } n\geq2
\end{cases} $$
Expandim $T(n)$.
$$ \begin{align}
T(n) &= 3 + T(n-1) + T(n-2) = \\
&= 3+3+2·3+3\,T(n-3)+2\,T(n-4) = \\
&= \dots = \\
&= 3\,\text{fib}(n)+2
\end{align} $$
on la complexitat de $\text{fib}(n)$ és exponencial, i per tant
$$ T(n) \in O(\varphi^{n}) \,.$$
```

```ad-met
title: Equacions característiques

Tenim $T(n)=T(n-1)+T(n-2)$ amb $T(0)=0$ i $T(1)=1$.

Fem el canvi $x^{2}=T(n)$ i resolem l'equació.
$$ \begin{gather}
x^{2}=x+1 \\[0.2em]
x=\frac{1\pm \sqrt{5}}{2}
\end{gather} $$
Aleshores podem assegurar que
$$ T(n) = C_{1} \left( \frac{1+\sqrt{5}}{2} \right)^{n} + C_{2} \left( \frac{1-\sqrt{5}}{2} \right)^{n} \,,$$
on $C_{1}$ i $C_{2}$ es poden calcular aplicant les condicions inicials si escau, però en aquest cas ja podem afirmar que
$$ T(n) \in O(\varphi^{n}) \,.$$
```
`````

En comparació al cas **iteratiu**:

| Avantatges | Inconvenients |
| --- | --- |
| Solució natural, senzilla, comprensible i elegant | Generalment més ineficients en temps i espai |
| Fàcil de verificar (inducció matemàtica) | Poden repetir càlculs innecessaris |
| Possibilitat de backtracking | Els processadors estan pensats per la iteració |

---
## Algorismes *divide and conquer*

| Tipus de problema                      | Estratègia                                            |
| ---                                    | ---                                                   |
| Es pot dividir en problemes més petits | Dividir el problema, solucionar les parts i tornar a combinar-les |

````ad-prop
title: Comportament

+ Dividir problema pare en $n$ problemes més petits, sovint recursivament.
+ Calcular les solucions dels $n$ problemes.
+ Combinar les solucions per formar la solució del problema pare.
````

````ad-ex
title: Exemple: *merge sort*

Algorisme per ordenar una llista d'$n$ elements.

```mehrmaid
graph TB;
	A("Ordenar `[5,3,7,2]`")
	B1("Ordenar `[5,3]`")
	B2("Ordenar `[7,2]`")
	C1("Ordenar `[5]`")
	C2("Ordenar `[3]`")
	C3("Ordenar `[7]`")
	C4("Ordenar `[2]`")
	D1("Resultat `[3,5]`")
	D2("Resultat `[2,7]`")
	E("Resultat `[2,3,5,7]`")
	
	A --> B1
	A --> B2
	B1 --> C1
	B1 --> C2
	B2 --> C3
	B2 --> C4
	C1 --> D1
	C2 --> D1
	C3 --> D2
	C4 --> D2
	D1 --> E
	D2 --> E
```

En aquest cas, $T(n)\in O(n\,\log_{2}(n))$.
````

```ad-prop
title: Ordre de complexitat

Donat un algorisme de *divide and conquer*:
+ de mida $n$
+ dividit en $l$ subproblemes
	+ de mida $\frac{n}{b}$
	+ resolts en $c\,n^{k}$ operacions,

pel ==teorema mestre==, tenim:
$$ T(n) \in \begin{cases}
O(n^k) &\text{si }\, l<b^k \\
O(n^k\log(n)) &\text{si }\, l=b^{k} \\
O(n^{\log_{b}(l)}) &\text{si }\, l>b^k
\end{cases} $$
```

#### Algorismes *decrease and conquer*

| Tipus de problema                      | Estratègia                                                         |
| ---                                    | ---                                                                |
| Es pot dividir en problemes més petits | Dividir el problema i seleccionar la solució del problema original |

A diferència dels algorismes *divide and conquer*, aquests divideixen el problema pare per **buscar la solució en un dels problemes petits**, no per **solucionar-los tots i combinar-los**.

````ad-ex
title: Exemple: *cerca binària*

Algorisme per trobar un valor en una llista.

```mehrmaid
graph TB;
	A("Buscar `7` en `[5,3,7,2]`")
	B1("Buscar `7` en `[5,3]`")
	B2("Buscar `7` en `[7,2]`")
	C1("Buscar `7` en `[5]`")
	C2("Buscar `7` en `[3]`")
	C3("Buscar `7` en `[7]`")
	C4("Buscar `7` en `[2]`")
	D("Solució")

	A --> B1
	A --> B2
	B1 --> C1
	B1 --> C2
	B2 --> C3
	B2 --> C4
	C3-->D
```

En el pitjor dels casos, $T(n)\in O(\log_{2}(n))$.
````