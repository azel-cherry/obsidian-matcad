## 0. **Representacions**

Parts fonamentals:
+ ~={green}Lèxica.=~ Vocabulari/símbols permesos.
+ ~={green}Semàntica.=~ Relació entre la representació i el lèxic amb el que vol dir.
+ ~={green}Estructural.=~ Restriccions i regularitats entre els símbols.
+ ~={green}Procedimental.=~ Conjunt de procediments per crear, modificar i accedir a descripcions.

A continuació les representacions que farem servir.


#### 0.1. **Arbre semàntic**
^d864f0

``````col
`````col-md
```ad-prop
title: Lèxica
+ node (pare, fill, arrel, fulla)
+ branca
+ camí
+ nivell
+ profunditat
+ factor de ramificació
+ funció de cost
+ funció heurística
```
`````

`````col-md
```ad-prop
title: Semàntica

Depèn molt del problema. En general:
+ Node: estat del problema
+ Branca: canvi d'estat
```
`````
``````

```ad-prop
title: Estructural

Nodes:
+ cada node fill té un únic pare
+ el seu **factor de ramificació** és el nombre de fills que té
+ un node sense fills és un **node fulla**
+ el **node arrel** és l'únic que no té pare

Branques:
+ uneixen nodes pare amb nodes fill
+ poden tenir un **cost** associat

Camins:
+ seqüència de nodes des de l'arrel fins una fulla
+ la seva **profunditat** és el nombre de branques que conté
+ el seu cost és la suma dels costos de totes les seves branques
+ la **profunditat de l'arbre** és la profunditat màxima dels camins
```

```ad-prop
title: Procedimental

1. Generació dels fills d'un node donat:
	+ ~={green}Expandir.=~ Específica per a cada problema
	+ ~={green}Elimiar cicles.=~ Elimina camins amb cicles ~={faded}(passen dos cops pel mateix node)=~
2. Estratègia o ordre en la generació:
	+ ~={green}Cerca.=~ Construeix l'arbre fins a la solució fent servir una estratègia concreta.
```

En el codi, això ho representarem com una llista amb tots els camins, que seran llistes de nodes.


#### 0.2. **Espai de característiques**

| Lèxic                                                                                                                       | Semàntic                                                                                                                                                                 | Estructural                                                                                                                                                                                                      | Procedimental                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <ul><li>sistema de coordenades<li>eixos<li>punts<li>classes<li>partició de l'espai<li>funció de decisió<li>característiques | <ul><li>els **punts** representen objectes<li>les coordenades dels punts representen les seves **característiques**<li>una part de l'espai representa objectes semblants | <ul><li>els **punts** son vectors de tantes dimensions com l'espai<li>les **característiques** van associades a cada un dels eixos de l'espai<li>una **classe** ve donada per una part de la partició de l'espai | <ul><li>**extreure les característiques** que descriuen un objecte<li>**dividir l'espai** en una partició<li>**decidir a quina classe** pertany un punt | 

^57fa41

![[Screenshot 2025-03-21 110519.png | 250]]


#### 0.3. **Xarxa semàntica**

^82c6b3

```ad-prop
title: Lèxic
+ graf (dirigit, no dirigit)
	+ correspondència
+ node
	+ grau de sortida
	+ grau d'entrada
+ arc
+ etiqueta
+ matriu d'adjacència
```

| ~={green-low}Semàntic=~ | 1                      | 2                    | 3             |
| ------------------------ | ---------------------- | -------------------- | ------------- |
| **Node**                 | objecte                | part                 | estat         |
| **Arc**                  | relació entre objectes | connexió entre parts | canvi d'estat |

```ad-prop
title: Estructural

+ un arc va unit a dos nodes
+ etiquetes associades a nodes i/o arcs
+ grau de sortida/entrada d'un node: número d'arcs que entren/surten del node
+ matriu d'adjacència: xarxa $N\times N$ amb $N$ número de nodes
```

```ad-prop
title: Procedimental

+ construir un graf i manipular-lo
+ correspondència entre grafs
+ mesurar similituds entre grafs
```

###### 0.3.1. Representacions

|                           | ~={green-low}No dirigit=~                                                                                                                                   | ~={green-low}Dirigit=~ sense etiquetes                                                                                                           | ~={green-low}Dirigit=~ amb etiquetes                                                                                                                                                                 |
| ------------------------- |:----------------------------------------------------------------------------------------------------------------------------------------------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------ |:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Representació gràfica** | ![[Pasted image 20250425180254.png]]                                                                                                                        | ![[Pasted image 20250425180313.png]]                                                                                                             | ![[Pasted image 20250425180403.png]]                                                                                                                                                                 |
| **Llista**                | `[[a,b],[a,c],[a,d],[b,e],[b,c],[c,d],[d,e]]`                                                                                                               | `[[a,[b,d]],`<br>` [b,[e]],`<br>` [c,[a,b]],`<br>` [d,[c]],`<br>` [e,[d]]]`                                                                          | `[[a,[[e1,b],[e7,d]]],`<br>` [b,[[e2,e]]],`<br>` [c,[[e5,a],[e6,b]]],`<br>` [d,[[e4,c]]],`<br>` [e,[[e3,d]]]]`                                                                                           |
| **Matriu d'adjacència**   | $\begin{gather}a \quad b \quad c \quad d \quad e\\\begin{pmatrix}0&1&1&1&0\\1&0&1&0&1\\1&1&0&1&0\\1&0&1&0&1\\0&1&0&1&0\end{pmatrix}\end{gather}$ | $\begin{gather}a \quad b \quad c \quad d \quad e\\\begin{pmatrix}0&1&0&1&0\\0&0&0&0&1\\1&1&0&0&0\\0&0&1&0&0\\0&0&0&1&0\end{pmatrix}\end{gather}$ | $\begin{gather}a \quad\,\,\, b \,\,\,\quad c \,\,\,\quad d \,\,\,\quad e\\\begin{pmatrix}0&e_{1}&0&e_{7}&0\\0&0&0&0&e_{2}\\e_{5}&e_{7}&0&0&0\\0&0&e_{4}&0&0\\0&0&0&e_{3}&0\end{pmatrix}\end{gather}$ |


---
## 1. Cerca **no informada**

Per tots els algorismes de cerca ~={faded}(no informada, informada i local)=~ farem servir la representació d'[[#^d864f0 | arbre semàntic]].


#### 1.1. Algorismes

```py title:"Search Algorithm (base)"
def search (root, objective):
	
	paths = [[root]]
	while paths[0][0]!=objective and paths!=[]:
		head = paths[0]
		expanded = expand(head)
		remove_cycles(expanded)
		paths = insert(expanded, paths[:-1])
	
	if paths!=[]:
		return paths[0]
	else:
		return None
```
^e29571

Excepte la ~={green_low}cerca en profunditat limitada=~, les diferents estratègies de cerca difereixen en la manera d'implementar la funció `insert`:

| Cerca en ~={green}profunditat=~                                                      | Cerca en ~={green}profunditat limitada=~                      | Cerca en ~={green}amplada=~                                                      | Cerca de ~={green}cost uniforme=~                                                     |
|:------------------------------------------------------------------------------------ |:------------------------------------------------------------- |:-------------------------------------------------------------------------------- |:------------------------------------------------------------------------------------- |
| ![[Pasted image 20250318173641.png]]                                                 | ![[Pasted image 20250318173744.png]]                          | ![[Pasted image 20250318173821.png]]                                             | ![[Pasted image 20250318173853.png]]                                                  |
| S'insereixen els nous camins `expanded` al **principi** de la llista `paths` (pila). | Es fa servir una versió de l'algorisme de cerca **recursiu**. | S'insereixen els nous camins `expanded` al **final** de la llista `paths` (cua). | S'insereixen els nous camins `expanded` ordenats per cost acumulat $g(n)$, de menor a major. |


###### 1.1.1. **Anàlisi** dels algorismes

Criteris:
+ ~={green}Complexitat en temps.=~ Número de nodes que s'obren en total.
+ ~={green}Complexitat en espai.=~ Número de nodes a memòria alhora.
+ ~={green}Optimalitat.=~ Garanteix que la solució és òptima en algun sentit.
+ ~={green}Completesa.=~ Si existeix solució, sempre es troba.

| Estratègia $\boldsymbol\rightarrow$<br>Criteri $\boldsymbol\downarrow$ | Cerca en ~={green}profunditat=~ | Cerca en ~={green}profunditat limitada=~ | Cerca en ~={green}amplada=~ | Cerca de ~={green}cost uniforme=~ |
| ---------------------------------------------------------------------- | :-----------------------------: | :--------------------------------------: | :-------------------------: | :-------------------------------: |
| **Temps**                                                              |           $O(b^{m})$            |            $O(b^{p\_{max}})$             |        $O(b^{d+1})$         |             $O(b^m)$              |
| **Espai**                                                              |          $O(b\cdot m)$          |           $O(b\cdot p\_{max})$           |        $O(b^{d+1})$         |             $O(b^m)$              |
| **Òptim**                                                              |               no                |                    no                    |   si òptim és el més curt   |                sí                 |
| **Complet**                                                            |               sí                |                    no                    |        si $b$ finit         |  si $b$ finit i costos positius   |

$b \equiv$ factor de ramificació
$d \equiv$ profunditat de la solució menys profunda
$m \equiv$ profunditat de l'arbre


---
## 2. Cerca **informada**

````col
```col-md
S'utilitza **informació heurística** específica per a cada problema per guiar la cerca, **reduint molt** el nombre de **nodes que cal explorar** per trobar una solució.
```
```col-md
~={green}Funció heurística $h(n)$ .=~ Estima el cost d'arribar a solució donat un estat del problema.
```
````

```ad-def
title: *Admissibilitat*

Una heurística és ==admissible== si **no sobreestima el cost real**.
```
^d72e3c


#### 2.1. Algorismes

La base d'aquests algorismes és [[#^e29571 | la mateixa]] que els algorismes de cerca no informada.

+ ~={green}Greedy Best-First Search=~ ~={green-low}(GBFS).=~ S'insereixen els nous camins `expanded` a `paths` ordenats per cost estimat segons $h(n)$.

+ ~={green}Cerca A*.=~ S'insereixen els nous camins `expanded` a `paths` ordenats per cost acumulat i cost estimat segons $f(n)=g(n)+h(n)$. ^d16782


###### 2.1.1. **Anàlisi** dels algorismes

| Estratègia $\boldsymbol\rightarrow$<br>Criteri $\boldsymbol\downarrow$ |  ~={green}GBFS=~   |         Cerca ~={green}A*=~         |
| ---------------------------------------------------------------------- | :----------------: | :---------------------------------: |
| **Temps**                                                              |      $O(b^m)$      |              $O(b^m)$               |
| **Espai**                                                              |      $O(b^m)$      | $O(b^m)$<br>en el pitjor dels casos |
| **Òptim**                                                              |         no         |  si $h$ [[#^d72e3c \| admissible]]  |
| **Complet**                                                            | si eliminem cicles |         si costos positius          |

$b \equiv$ factor de ramificació
$m \equiv$ profunditat de l'arbre


#### 2.2. Programació **dinàmica**

```ad-def
title: Camí redundant

Un ==camí redundant== és un camí que conté un camí parcial no òptim, és a dir, camins que han arribat al **mateix estat que un altre**, però amb un **cost major**.
```
^bf06e7

Consisteix en elimilar els [[#^bf06e7 | camins redundants]] mitjançant una ~={green}Taula de Costos Parcials Òptims=~, que es manté actualitzada constantment.
^taucos

```py title:"Dynamic programming"
def search (root, objective):
	...
	while paths[0][0] != objective and paths != []:
		...
		remove_cycles(expanded)
		remove_redundant_paths(expanded,paths)  <---
		paths = insert(expanded,paths[:-1])
	...
```


#### 2.3. **Propietats** de les **heurístiques**

`````col
````col-md
```ad-def
title: *Factor de ramificació efectiu*

Considerem un problema en què, mitjançant un algorisme de cerca informada, la solució està en profunditat $d$ i hem d'expandir en mitjana $N$ nodes.

Aleshores el ==factor de ramificació efectiu== $b*$ és
$$ \boxed{\,N = 1 + (b*) + (b*)^{2} + \dots + (b*)^{d}\,} \,,$$
és a dir, el factor de ramificació que hauria de tenir un arbre balancejat de prfunditat $d$ amb $N$ nodes.

---

Aquest factor mesura la qualitat de la heurística. Idealment, volem
$$ b* \to 1 \,,$$
és a dir, l'heurística porta directament a la solució.
```
````
````col-md
````ad-def
title: *Dominància*

Donades dues heurístiques **admissibles** $h_{1}$ i $h_{2}$, diem que $h_{1}$ ==domina== $h_{2}$ si
$$ h_{1}(n) \geq h_{2}(n) \quad \forall n \,.$$

---

En general una heurística dominant és millor perquè redueix el nombre de nodes expandits.

```ad-prop
title: Construcció d'heurístiques dominants

Donat un conjunt d'heurístiques $h_{1},\dots,h_{k}$ tals que cap heurística domina sobre les altres, podem construir una heurística dominant com:
$$ h(n) = \max_{i}(h_{i}(n)) $$
```
````
`````

```ad-prop
title: Heurístiques que aprenen

Es poden utilitzar combinacions lineals d'heurístiques $h_{1},\dots,h_{k}$ amb pesos $c_{1},\dots,c_{k}$ que s'ajusten en funció de l'objectiu de l'agent:
$$ h(n) = c_{1}\,h_{1}(n) + \dots + c_{k}\,h_{k}(n) $$
```



---
## 3. Cerca **local**

^9ffa51

Aquesta cerca no explora tot l'espai per trobar una solució, sinó que es **mou localment** per **millorar l'estat actual**. Això és útil en problemes on
+ **no coneixem l'estat objectiu**,
+ només es vol **optimitzar un criteri**, o
+ l'entorn és **dinàmic**, **continu** (no discret) o **no totalment observable**.

|                                        Avantatges                                        |                                  Desavantatges                                  |
|:----------------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------:|
| <ul><li>**complexitat en memòria baixa** (si no es busquen camins, només estats solució) | <ul><li>no es pot garantir **completesa**<li>no es pot garantir **optimalitat** |


###### **Problemes** de la cerca local

````col
```col-md
~={green}Màxims locals.=~
L'estat actual és millor que els seus fills, però no és la solució.

![[Pasted image 20250319115917.png]]
```
```col-md
~={green}Planures.=~
L'estat actual és idèntic als seus fills; prendre una decisió es dificulta.

![[Pasted image 20250319120113.png]]
```
```col-md
~={green}Crestes.=~
L'estat actual sembla un màxim local, existeix un únic fill que porta a la solució, i pot ser que no sigui generat.

![[Pasted image 20250319120148.png]]
```
````




#### 3.1. Algorismes

~={green}Cerca local:=~ Cerca del màxim en el paisatge definit per la funció heurística.

```ad-prop
title: Funció **EXPAND**

En aquests algorismes, el que farà `expand` és generar punts propers al punt actual per després avaluar-los en funció de $h(n)$.

+ Si només expandim en una direcció per cada dimensió de $n$, en els dos sentits, el factor de ramificació serà
	$$ b = 2\,d_{n} \,.$$
+ Si expandim totes les combinacions de totes les direccions anteriors (les "diagonals"), tindrem un factor de ramificació de
	$$ b = 3^{d_{n}}-1 \,.$$

on $d_{n}$ és el número de dimensions dels nodes.
```

###### 3.1.1. **Coneixem** l'estat objectiu

`````ad-prop
title: ***Hill-climbing***

Expandeix **només el node** que estima que és **més proper a la solució** segons la funció heurísrica.

1. Si no volem guardar el camí:
	```py title:"Hill-climbing Search"
	def hill_climbing_search(initial,objective):
		
		current = initial
		while current != objective:
			expanded = expand(current)
			best = max_h(expanded,h)
			current = best
		
		return current
	```
	on `max_h()` retorna l'element que maximitza $h(n)$.

2. Si volem guardar el camí, fem servir l'[[#^e29571 | algorisme base]] de la cerca no informada, on:
	+ Després de `remove_cycles` farem `order_h(expanded,h)` que ordena els elements d'`expanded` segons `h` de més gran a més petit.
	+ A `insert`, inserim `expanded` al davant de `paths`.
`````


###### 3.1.2. **No coneixem** l'estat objectiu

````ad-prop
title: ***Steepest Ascent***

Similar a *hill-climbing*, però sense haver de coneixer l'estat objectiu.

```py title:"Steepest Ascent Search (bàsic)"
def steepest_ascent_search(initial)
	
	successor = initial
	while True:
		current = successor
		expanded = expand(current)
		successor = max_h(expanded)
		if h(current) >= h(successor): break
	
	return current
```
+ ~={green_low}(7)=~ `max_h()` retorna l'element que maximitza $h(n)$


```py title:"Steepest Ascent Search (amb control de màxims locals)"
def steepest_ascent_search(initial, max_iter, best_case)
	
	num_iter = 0
	current = initial
	while True:
		
		while True:                        |
			expanded = expand(current)     |
			successor = max_h(expanded)    | Steepest
		if h(current) < h(successor):      | Ascent
			current = successor            |
		else:                              |
			break                          |
		
		if h(current) > best_case:         | save best
			best_case = h(current)         | local maxima
			solution = current             | and go to
		current = random_state()           | random state
		
		num_iter += 1
		if num_iter == max_iter: break
		
	return brest_case, solution
```

+ ~={green_low}(9)=~ `max_h()` retorna l'element que maximitza $h(n)$
+ ~={green_low}(1)=~ `best_case` estableix una cota inferior per la solució que volem trobar
````
^5bc1a1

````ad-prop
title: Cerca **tabú**

La idea és **evitar cicles** guardant una llista amb els `k` nodes més recentment expandits.

Es tracta del mateix algorisme que [[#^5bc1a1 | Steepest Ascent amb control de màxims]] amb 3 modificacions:

```py title:"Taboo Search"
def taboo_search(initial, max_iter, best_case, k):
	
	num_iter = 0
	current = initial
	taboo_list = []  <---
	while True:
		
		while True:
			expanded = expand(current)
			successor = max_h(expanded)
			if (
				h(successor) > h(current) and
				successor not in taboo_list  <---
			):
				current = successor
			else:
				break
		
		if h(current) > best_case:
			best_case = h(current)
		current = random_state()
		
		insert_taboo(current, taboo_list, k)  <---
		
		num_iter += 1
		if num_iter == max_iter: break
		
	return brest_case
```

+ ~={green_low}(23)=~ `insert_taboo` insereix `current` a `taboo_list` i elimina l'element més antic si la llargada de la llista és més gran que `k`.
````

````ad-prop
title: Cerca ***Beam***

Aquest algorisme **pararel·litza** l'expansió de diversos camins ascendents.

```py title:"Beam Search"
def beam_search(initial, max_iter, best_case, k)
	
	num_iter = 0
	beam_list = [initial]
	while True:
		
		while True:
			successors = []
			for state in beam_list:
				expanded = expand(state)
				for child in expanded:
					if h(child) > h(state):
						successors = insert_h(child, successors)
			
			beam_list = successors[:k]
			
			if h(beam_list[0]) > h(best_case):
				best_case = beam_list[0]
			
			if beam_list = []:
				break
		
		current = random_state()
		
		num_iter += 1
		if num_iter == max_iter: break
	
	return best_case 
```

+ ~={green_low}(13)=~ `insert_h()` insereix `child` a `successors` en ordre descendent segons $h(n)$ i eliminant repeticions
````

````ad-prop
title: ***Simulated Annealing***

Millora [[#^5bc1a1 | Steepest Ascent amb tractament de màxims locals]] basant-se en un procés de metal·lúrgia (*annealing*) que consisteix en escalfar i refredar lentament els materials per canviar les seves propietats físiques.
1. Selecciona l'estat següent aleatòriament
2. Mira si l'estat seleccionat millora l'heurística
	+ Si la millora, continua per aquest estat
	+ Si no, decideix continuar o no segons una probabilitat

```ad-met
title: Probabilitat de continuar

Es tracta d'una funció exponencial que depèn de la **mida del pas enrere** i la **temperatura**, que va disminuïnt a mesura que avança l'algorisme.

És a dir, la probabilitat de continuar va baixant a mesura que progressa l'algorisme.
```

```py title:"Simulated Annealing Search"
def simulated_annealing_search(initial, max_iter, best_case):
	
	current = initial
	for t in range(max_iter):     |
	                              | annealing
		temp = func(t)            | simulation
		if temp == 0:             |
			return best_case      |
		
		succesor = random_state(expand(current))
		delta = h(successor) - h(current)
		if delta > 0:
			current = successor
		elif random_num() < e^(delta/temp):
			current = successor
		
		if h(current) > h(best_case):
			best_case = current
```
+ `func()` és una funció decreixent tal que `temp` disminueix a mesura que creix `t`
+ `random_num()` retorna un número aleatori entre 0 i 1
````


###### 3.1.3. **Anàlisi** dels algorismes

| Estratègia $\boldsymbol\rightarrow$<br>Criteri $\boldsymbol\downarrow$ |  HC (bàsic)   | HC (guardant camins) | StAs (bàsic)  | StAs (màxims locals) |        CTabú         |            CBeam            |        SimAnn        |     |     |
| ---------------------------------------------------------------------- | :-----------: | :------------------: | :-----------: | :------------------: | :------------------: | :-------------------------: | :------------------: | --- | --- |
| **Temps**                                                              | $O(b\cdot m)$ |       $O(b^m)$       | $O(b\cdot m)$ | $O(i\cdot b\cdot m)$ | $O(i\cdot b\cdot m)$ | $O(i\cdot b\cdot m\cdot k)$ | $O(i\cdot b\cdot m)$ |     |     |
| **Espai**                                                              |    $O(b)$     |    $O(b\cdot m)$     |    $O(b)$     |        $O(b)$        |        $O(b)$        |        $O(b\cdot k)$        |        $O(b)$        |     |     |
| **Òptim**                                                              |      no       |          no          |      no       |          no          |          no          |             no              |          no          |     |     |
| **Complet**                                                            |      no       |          sí          |      no       |          no          |          no          |             no              |          no          |     |     |

$b\equiv$ factor de ramificació
$m\equiv$ profunditat de l'arbre
$i\equiv$ `max_iter`


---
## 4. Reconeixement de **patrons**

Donats diversos objectes, es tracta de cassificar-los segons les seves característiques.


### 4.1. Reconeixement **estadístic**



Per aquests algorismes farem servir la representació d'[[#^57fa41 | espai de característiques]].

```ad-def
title: Conjunt d'**aprenentatge**

El conjunt d'aprenentatge és la **mostra ja classificada** que necessitem per solucionar el problema, a partir del qual l'algorisme aprendrà.

Aquesta mostra vindrà donada per la matriu
$$ X = \begin{pmatrix}
x_{1,1} & \dots & x_{1,d} \\
\vdots & \ddots & \vdots \\
x_{n,1} & \dots & x_{n,d}
\end{pmatrix} \,,$$
on $n$ és el **nombre de punts** que té la mostra i $d$ és el **nombre de característiques** (o la dimensió de l'espai).
```
^c6f4f9

##### 4.1.1. **Definició** de l'**espai de característiques**

1. Seleccionar les característiques ~={faded}(dependrà del problema)=~.
2. Definir el [[#^c6f4f9 | conjunt d'aprenentatge]].
3. Reduir la dimensió de l'espai a una observable (1D, 2D o 3D) mitjançant un [[#^a82854 | anàlisi de components principals]].

```ad-met
title: Anàlisi de components principals (PCA)

A partir del conjunt d'aprenentatge $X$ de dimensió $n\times d_{1}$, retorna $E$ de dimensió $n\times d_{2}<d_{1}$, que serà el nou conjunt d'aprenentatge de menor dimensió.

Passos a seguir:

1. Construim la matriu de covariància
	$$ R = \frac{1}{n-1} X^{T}X \,.$$
2. Calculem els *vap*s $\lambda_{1}\geq\dots\geq\lambda_{d_{1}}$ i *vep*s $\vec{e_{1}},\dots,\vec{e_{d_{1}}}$ de $R$.
3. La nova base serà $\vec{e_{1}},\dots,\vec{e_{d_{2}}}$. Apliquem el canvi de base
	$$ E = \begin{pmatrix}
\vec{e_{1}} \\
\vdots \\
\vec{e_{d_{2}}}
\end{pmatrix} X \,.$$
```
^a82854


##### 4.1.2. **Categorització** i **classificació**

+ ~={green}Categorització.=~ Es divideix l'espai de característiques en regions que corresponen a diferents classes.
+ ~={green}Classificació.=~ Mitjançant una **funció de decisió** es classifiquen tots els punts.


###### Aprenentatge **supervisat**

Es fa a partir del [[#^c6f4f9 | conjunt d'aprenentatge]].

````ad-prop
title: Classificadors **lineals** i **no-lineals**

Es tracta d'ajustar els paràmetres d'una equació mitjançant una [[#^9ffa51 | cerca local]] en què:
+ **Node:** Configuració concreta dels paràmetres.
+ **Heurística:** Nombre de punts ben classificats.

|                Lineal                |              No-lineal               |
|:------------------------------------:|:------------------------------------:|
| ![[Pasted image 20250321204730.png \| 200]] | ![[Pasted image 20250321204817.png \| 200]] |
| $d(\vec{x})=a\,x_{1}+b\,x_{2}+c$                                     | $d(\vec{x}) = r^{2}-x_{1}^{2}-x_{2}^{2}$                                     |

```py title:"Funció de decisió"
def classify(y, d, classes):
	if d(y) < 0:
		return classes[0]
	else:
		return classes[1]
```
````

````ad-prop
title: Classificador **probabilístic**

Assumim que les configuracions de punts de cada classe segueixen una distribució normal, és a dir
$$ P(C_{i}\mid\vec{x}) = N(\mu_{i},\sigma_{i}) \,.$$

Per cada classe, estimarem els seus paràmetres fent servir:

| Dimensions $\rightarrow$ |                                  1D                                   |                              >1D                              | 
| ------------------------:|:---------------------------------------------------------------------:|:-------------------------------------------------------------:|
|              **Mitjana** |           $\mu=\displaystyle\frac{1}{n}\sum_{i=1}^{n}x_{i}$           | $\vec{\mu}=\displaystyle\frac{1}{n}\sum_{i=1}^{n}\vec{x_{i}}$ |
|            **Desviació** | $\sigma=\displaystyle\sqrt{\frac{1}{n}\sum_{i=1}^{n}(x_{i}-\mu)^{2}}$ |       $\displaystyle\Sigma \approx \frac{1}{n-1}X^{T}X$       |

```py title:"Funció de decisió"
def classify(y, classes):
	i = argmax([prob(y,c) for c in classes])
	return classes[i]
```
+ `prob(y,c)` retorna la probabilitat que `y` estigui a la classe `c`.
````

````ad-prop
title: Classificador ***K-Nearest Neighbors*** (KNN)

Es basa la decisió en la classe a la que pertanyen els `k` veïns més propers d'un objecte donat.

```py title:"Funció de decisió"
def classify(y, X, k):

	all_neighbors = []
	for x in X:
		all_neighbors.insert([d(y,x), class(x)])
	k_neighbors = dist_sort(all_neighbors)[:k]
	
	if count(k_neighbors, c1) > count(k_neighbors, c2):
		return c1
	else:
		return c2
```
+ `d()` retorna la distància entre els dos arguments
+ `class(x)` retorna la classe de `x`
+ `dist_sort()` retorna la llista amb els elements en ordre en funció de la distància
+ `count(l,c)` retorna el nombre d'elements d'`l` que pertanyen a `c`

```ad-not
title: Funció **distància**
Es poden fer servir diferents distàncies depenent del problema:
+ **Euclideana.** $\,\displaystyle d(\vec{x},\vec{y})=\sqrt{\sum_{i=1}^{n}(x_{i}-y_{i})^{2}}$
+ **Manhattan.** $\,\displaystyle d(\vec{x},\vec{y})=\sum_{i=1}^{n}\mid x_{i}-y_{i}\mid$
+ **Minkowski.** $\,\displaystyle d(\vec{x},\vec{y})=\left( \sum_{i=1}^{n}(\mid x_{i}-y_{i}\mid)^{q} \right)^{\frac{1}{q}}$
```

Tot i que es pot aplicar a qualsevol conjunt d'aprenentatge, té una **funció de decisió costosa** i requereix **triar una bona `k`**.
````

```ad-not
title: **Tipus** de classificadors

| Tipus $\rightarrow$ | Discriminatius                                | Generatius        |
| ------------------- | --------------------------------------------- | ----------------- |
| **Descripció**      | modelen la frontera                           | modelen la classe |
| **Classificadors**                    | <li>lineal<li>no lieal<li>k-nearest neighbors | <li>probabilístic |

```


###### Aprenentatge **no supervisat**

Per quan no existeix un conjunt d'aprenentatge. Els objectes es classificaran per *clustering*.

`````ad-prop
title: **K-*means***

````ad-met
title: Algorisme

```ad-ex
title: Definicions

Tenim:
+ $X = \{\vec{x_{i}}\mid \vec{x_{i}}=(x_{i,1},\dots,x_{i,d})\}$ : conjunt de punts
	+ $n$ : nombre de punts
+ $k$ : nombre de classes en què es vol dividir l'espai
+ $C_{i}$ : conjunt de punts de la classe $i$
	+ $n_{C_{i}}$ : nombre de punts a la classe $i$
	+ $CI_{i}^{t}$ : centre d'inèrcia de la classe $i$ a l'instant $t$
+ $d(x,y)$ : distància entre dos punts
```

1. Inicialització:
	+ Inicialitzar els centres d'inèrcia amb $\vec{x} \in X$ aleatori:
		$CI_{i}^{0} = \text{random}(X) \quad \text{per } i=0,\dots,k$
	+ $t=0$
2. Fins que $CI_{i}^{t}=CI_{i}^{t+1}$ per tot $i=1,\dots,k$, repetir:
	+ Per cada classe $C_{i}$ amb $i=1,\dots,k$ :
		1. Omplir la classe: 
			$C_{i}=\{x\in X\mid d(x,CI_{i}^{t})\leq d(x,CI_{j}^{t}) \text{ per tot } j\neq i\}$
		2. Calcular el nou centre d'inèrcia:
			$$ CI_{i}^{t+1} = \left( \frac{\sum_{j=1}^{n_{C_{i}}}x_{j,1}}{n_{C_{i}}},\dots,\frac{\sum_{j=1}^{n_{C_{i}}}x_{j,d}}{n_{C_{i}}} \right) $$
	
	+ $t++$
3. Retornar $\{CI_{i}^{t}\mid i=1,\dots,k\}$
````
Algunes propietats:
+ Complexitat $O(t\cdot n\cdot k)$
+ Sempre convergeix ~={faded}(no sempre amb la configuració desitjada)=~
+ Molt sensible a la selecció incial aleatòria

````ad-prop
title: **Qualitat** de la classificació

Un cop aplicat *k-means*, es pot estimar una mesura sobre la qualitat de la classificació resultant.

+ ~={green}Distància *intra-class*.=~ Per cada classe:
	$$ D(C) = \frac{2}{m(m-1)} \sum_{i=1}^{m}\sum_{j=i+1}^{m} d(\vec{x_{i}},\vec{x_{j}}) $$
	per $\vec{x} \in C$ i $m$ nombre de punts de la classe.
	Volem que sigui **petita**.

+ ~={green}Distància *inter-class*.=~ Per cada parella de classes:
	$$ D(C_{1},C_{2}) = \frac{1}{m_{1}m_{2}} \sum_{i=1}^{m_{1}}\sum_{j=1}^{m_{2}} d(\vec{x_{i}},\vec{x_{j}}) $$
	per $\vec{x_{i}}\in C_{1}$, $\vec{x_{j}}\in C_{2}$ i $m_{i}$ nombre de punts  a la classe $i$.
	Volem que sigui **gran**.

+ ~={green}Discriminant de Fisher.=~ Combina les dues mesures anteriors. Globalment:
	$$ D = \frac{\displaystyle\sum_{i=1}^{k}D(C_{i})}{\displaystyle\sum_{i=1}^{k}\sum_{j=i+1}^{k} D(C_{i},C_{j})} $$
	amb $k$ nombre de classes.
	Volem que sigui **petit**.

```ad-met
title: **Estimació automàtica** del nombre de classes

Es pot estudiar com varia la ~={green-low}qualitat de classificació=~ per diverses $k$ per trobar la ideal.
```
````
`````


##### 4.1.3. **Avaluació** d'un classificador

```ad-def
title: *Ground-truth* (GT)

Es refereix al resultat ideal que s'espera de la resolució del problema; la **veritat**.
```

1. **GT dona la classificació correcta.**
	$$ \text{Accuracy} = \frac{\#\text{mostres ben classificades}}{\#\text{mostres totals}} $$
2. **GT dona un conjunt d'etiquetes.** Sigui $A$ el conjunt d'etiquetes trobades pel classificador i $B$ les etiquetes del GT:
	$$ \text{Similitud}(A,B) = \frac{\text{Card}(A\cap B)}{\text{Card}(A)} $$


---
### 4.2. Reconeixement **estructural**

Consisteix en, mitjançant la representació de [[#^82c6b3 | xarxa semàntica]], identificar si dos grafs son iguals o semblants.

````ad-def
title: *Correspondència* de grafs

Trobar la ==correspondència== entre dos grafs $G_{1}$ i $G_{2}$ és trobar una substitució dels nodes de $G_{1}$ pels nodes de $G_{2}$ que faci que siguin iguals.

```ad-ex
|            $\boldsymbol{G_{1}}$             |      $\boldsymbol{G_{2}}$                                       |     |
|:-------------------------------------------:|:-------------------------------------------:|
| ![[Pasted image 20250426113045.png \| 200]] | ![[Pasted image 20250426113126.png \| 200]] |

> **Correspondència:** $a=5$ , $b=2$ , $c=1$ , $d=4$ , $e=3$
```
````


##### 4.2.1. ***Graph-matching*** exacte

Es tracta de trobar la correspondència entre dos grafs.

````ad-prop
title: *Generate and Test*

Genera **totes les possibles susbtitucions** i les comprova.

```py title:"Generate and Test algorithm"
def graph_matching(G1, G2):

	permutations = permute(G1)
	for p in permutations:
		M1 = permute_matrix(p, MA(G1))
		
		if M1 = MA(G2):
			return p

	return None
```
+ `permute(G)` retorna la llista de totes les permutacions de `G`
+ `MA(G)` retorna la matriu d'adjacència de `G`
+ `permute_matrix(p,M)` retorna la matriu `M` amb la permutació `p`

---

Versió recursiva de l'alogrisme anterior.

```py title:"Generate and Test algorithm (recursive)"
def permute(L):
	if L = []: return L
	else:
		for e1 in L:
			L = permute(L.remove(e1))
			for e2 in L:
				L.insert(e2)
			L_out =+ L
```

> ~={green}Complexitat:=~ $O(n!)$ amb $n$ nombre de nodes
````

````ad-prop
title: ***Constraint Satisfaction*** *Problems* (CSP)

Consisteix a assignar valors a un conjunt de variables a partir d'un domini que verifiquin un conjunt de restriccions.

Es fa servir un algorisme de *backtracking* de **cerca en profunditat** que **poda** les branques que no compleixen les restriccions.

```py title:"Backtracking algorithm"
def backtracking(variables, domain, restrictions):
	
	initial = initialize(variables)
	L = [[initial]]
	
	while !solution(L[0]) and L != []:
		head = L[0]
		expanded = expand(head, domain)
		expanded = apply_restrictions(expanded, restrictions)
		L = [expanded] + L[1:]
	
	if L != []: return L
	else: return None
```
+ `initialize()` retorna una llista de totes les variables `[a,b,c,...]` inicialitzades sense valor `[[a,None], [b,None], [c,None], ...]`
+ `solution(e)` retorna `True` si `e` és solució
+ `expand()` retorna la llista de possibles assignacions de les `variables` amb valors de `domain`
+ `apply_restrictions(e,r)` retorna la llista `e` després d'eliminar els camins que no compleixen les restriccions `r`

> ~={green}Complexitat:=~ $O(n!)$ and $n$ nombre de nodes
````
^backtr

````ad-prop
title: ***Arc-Consistency*** (AC)

Millora l'[[#^backtr | algorisme anterior]] amb un pas incial **comprovant la consistència** entre els diferents dominis de les variables i **eliminant substitucions inconsistents**.

Per fer això s'utilitza una certa propietat que dependrà del problema, com ara ~={faded}(nombre d'enllaços de sortida, tipus d'etiquetes dels nodes, etc)=~.

```py title:"Arc-Consistency algorithm"
def AC_backtracking(variables, domain, restrictions)
	
	[var, dom] = AC(variables, domain, restrictions)  <---
	initial = initialize(variables)
	L = [[initial]]
	
	while !solution(L[0]) and L != []:
		head = L[0]
		expanded = expand(head, [var, dom])  <---
		expanded = apply_restrictions(expanded, restrictions)
		L = [expanded] + L[1:]
	
	if L != []: return L
	else: return None
```
+ `AC(v,d,r)` retorna per a cada variable el domini que verifica les restriccions
+ `expand(h,[v,d])` retorna la llista de possibles assignacions de `h` considerant el domini especificat

> ~={green}Complexitat:=~ $O(n_{1}!\,n_{2}!\dots n_{p}!)$ amb $n_{1},n_{2},\dots,n_{p}$ subconjunts dels nodes que comparteixen la propietat estructural triada.
````


##### 4.2.2. *Graph-matching* **no-exacte**

En comptes de buscar la correspondència que fa que dos grafs siguin iguals, busquem que siguin **el més semblants possible**.

```ad-met
title: Mesures de **semblança entre grafs**

1. ~={green}Elements comuns i no comuns:=~
	$$ \begin{align}
	\text{Similutud}(G_{1},G_{2}) &= \alpha\,\text{Card}(S_{G_{1}}\cap S_{G_{2}}) \\
	&+\, \beta\,\text{Card}(S_{G_{1}}\setminus S_{G_{2}}) \\
	&+\, \gamma\,\text{Card}(S_{G_{2}}\setminus S_{G_{1}})
	\end{align} $$
	amb $S_{G}$ conjunt d'elements de $G$ com ara:
	+ nodes amb tipus
	+ enllaços amb etiquetes
	+ nodes amb enllaços

2. ~={green}Distàncies=~ de cada node d'un graf amb els altres nodes:
	$$ \text{Distància}(G_{1},G_{2}) = \sum_{n_{1}\in G_{1}} \min_{n_{1}\in G_{2}}\{d(n_{1},n_{2})\} $$
	amb $d(n_{1},n_{2})$ distància entre els dos nodes, que pot estar basada en diferents aspectes, per exemple:
	+ tipus de node ~={faded}($+1$ si son de tipus diferent)=~
	+ diferència d'arcs de sortida
	+ diferència d'etiquetes dels arcs de sortida

3. ~={green}Distància d'edició:=~ Mínim cost de totes les operacions d'edició necessàries perque $G_{1}$ es converteixi en $G_{2}$:
	+ substitució d'un node o un arc
	+ eliminació d'un node o un arc
	+ inserció d'un node o un arc

Generalment farem servir ~={green-low}distància d'edició=~.
```
^messem

Farem servir una [[#^d16782 | cerca A*]] on:
+ $g(n) =$ suma dels costos de totes les operacions d'edició
+ $h(n) =$ estimació del mínim nombre d'edicions que s'hauran de der


###### 4.2.2.1. ***String-matching***

Cas particular de la cerca inexacta amb grafs d'**una dimensió**, on cada node és una lletra del *string*.

```ad-teor
title: Principi de **programació dinàmica**

> *Qualsevol solució òptima està formada per solucions parcials òptimes.*

La simplicitat dels grafs unidimensionals ens permeten aplicar aquest principi.
```

````ad-prop
title: ***String-matching***

Calcula la [[#^messem | distància d'edició]] entre dues paraules mitjançant una [[#^taucos | taula de costos parcials]].

**Costos habituals:**
+ Inserció: 2
+ Eliminació: 3
+ Substitució: 1 ~={faded}(per un caràcter diferent)=~

```py title:"String-matching algorithm"
```
````


---
## 5. **Anàlisi** de **tots** els algorismes

| Criteri $\boldsymbol\rightarrow$<br>Estratègia $\boldsymbol\downarrow$ |          **Temps**          |              **Espai**              |           **Òptim**            |               **Complet**               |
| ---------------------------------------------------------------------- | :-------------------------: | :---------------------------------: | :----------------------------: | :-------------------------------------: |
| **CProfunditat**                                                       |         $O(b^{m})$          |            $O(b\cdot m)$            |          ~={pink}no=~          |              ~={green}sí=~              |
| **CPLimitada**                                                         |      $O(b^{p\_{max}})$      |        $O(b\cdot p\_{max})$         |          ~={pink}no=~          |              ~={pink}no=~               |
| **CAmplada**                                                           |        $O(b^{d+1})$         |            $O(b^{d+1})$             | ~={ylw}si "òptim" = més curt=~ |          ~={ylw}si $b$ finit=~          |
| **CCU**                                                                |          $O(b^m)$           |              $O(b^m)$               |         ~={green}sí=~          | ~={ylw}si $b$ finit i costos positius=~ |
| **GBFS**                                                               |          $O(b^m)$           |              $O(b^m)$               |          ~={pink}no=~          |       ~={ylw}si eliminem cicles=~       |
| **A***                                                                 |          $O(b^m)$           | $O(b^m)$<br>~={faded}(pitjor cas)=~ |   ~={ylw}si $h$ admissible=~   |       ~={ylw}si costos positius=~       |
| **HC** (bàsic)                                                         |        $O(b\cdot m)$        |               $O(b)$                |          ~={pink}no=~          |              ~={pink}no=~               |
| **HC** (guardant camins)                                               |          $O(b^m)$           |            $O(b\cdot m)$            |          ~={pink}no=~          |              ~={green}sí=~              |
| **SA** (bàsic)                                                         |        $O(b\cdot m)$        |               $O(b)$                |          ~={pink}no=~          |              ~={pink}no=~               |
| **SA** (màxims locals)                                                 |    $O(i\cdot b\cdot m)$     |               $O(b)$                |          ~={pink}no=~          |              ~={pink}no=~               |
| **CTabú**                                                              |    $O(i\cdot b\cdot m)$     |               $O(b)$                |          ~={pink}no=~          |              ~={pink}no=~               |
| **CBeam**                                                              | $O(i\cdot b\cdot m\cdot k)$ |            $O(b\cdot k)$            |          ~={pink}no=~          |              ~={pink}no=~               |
| **SimAnnealing**                                                       |    $O(i\cdot b\cdot m)$     |               $O(b)$                |          ~={pink}no=~          |              ~={pink}no=~               |
| **KMeans**                                                             |    $O(t\cdot n\cdot k)$     |                 ??                  |          ~={pink}no=~          |              ~={green}sí=~              |

$b\equiv$ factor de ramificació
$d \equiv$ profunditat de la solució menys profunda
$m\equiv$ profunditat de l'arbre
$i\equiv$ `max_iter`