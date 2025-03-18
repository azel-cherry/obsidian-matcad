
## **Representacions**

Parts fonamentals:
+ ~={green}Lèxica.=~ Vocabulari, símbols permesos.
+ ~={green}Estructural.=~ Restriccions i regularitats entre els símbols.
+ ~={green}Procedimental.=~ Conjunt de procediments per crear, modificar i accedir a descripcions.
+ ~={green}Semàntica.=~ Relació entre la representació i el que vol dir.

#### **Arbre semàntic**

Representació que farem servir.

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

```ad-prop
title: Estructural

Nodes:
+ cada node fill té un únic pare
+ el seu **factor de ramificació** és el nombre de fills que t
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
2. Estratègia:
	+ ~={green}Cerca.=~ Construeix l'arbre fins a la solució fent servir una estratègia concreta.
```

```ad-prop
title: Semàntica

Depèn molt del problema. En general:
+ Node: estat del problema
+ Branca: canvi d'estat
```

En el codi, això ho representarem com una llista amb tots els camins, que seran llistes de nodes.


---
## Cerca **no informada**

#### Algorismes

```py title:"Base search algorithm"
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


###### **Anàlisi** dels algorismes

Criteris:
+ ~={green}Complexitat en temps.=~ Número de nodes que s'obren en total.
+ ~={green}Complexitat en espai.=~ Número de nodes a memòria alhora.
+ ~={green}Optimalitat.=~ Garanteix que la solució és òptima en algun sentit.
+ ~={green}Completesa.=~ Si existeix solució, sempre es troba.

| Estratègia $\boldsymbol\rightarrow$<br>Criteri $\boldsymbol\downarrow$ | Cerca en ~={green}profunditat=~ | Cerca en ~={green}profunditat limitada=~ | Cerca en ~={green}amplada=~ | Cerca de ~={green}cost uniforme=~ |
| ------------------------------------------------------------------ |:-------------------------------:|:----------------------------------------:|:---------------------------:|:---------------------------------:|
| **Temps**                                                          |           $O(b^{m})$            |            $O(b^{p\_{max}})$             |        $O(b^{d+1})$         |             $O(b^m)$              |
| **Espai**                                                          |          $O(b\cdot m)$          |           $O(b\cdot p\_{max})$           |        $O(b^{d+1})$         |             $O(b^m)$              |
| **Òptim**                                                    |               no                |                    no                    |   si òptim és el més curt   |                sí                 |
| **Complet**                                                     |               sí                |                    no                    |        si $b$ finit         |  si $b$ finit i costos positius   |

$b \equiv$ factor de ramificació
$d \equiv$ profunditat de la solució menys profunda
$m \equiv$ profunditat de l'arbre


---
## Cerca **informada**

S'utilitza **informació heurística** específica per a cada problema per guiar la cerca, **reduint molt** el nombre de **nodes que cal explorar** per trobar una solució.

+ ~={green}Funció heurística $h(n)$ .=~ Estima el cost d'arribar a solució donat un estat del problema.

```ad-def
title: *Admissibilitat*

Una heurística és ==admissible== si **no sobreestima el cost real**.
```
^d72e3c


#### Algorismes

La base d'aquests algorismes és [[#^e29571 | la mateixa]] que els algorismes de cerca no informada.

+ ~={green}Greedy Best-First Search=~ ~={green_low}(GBFS).=~ S'insereixen els nous camins `expanded` a `paths` ordenats per cost estimat segons $h(n)$.

+ ~={green}Cerca A*.=~ S'insereixen els nous camins `expanded` a `paths` ordenats per cost acumulat i cost estimat segons $f(n)=g(n)+h(n)$.


###### **Anàlisi** dels algorismes

| Estratègia $\boldsymbol\rightarrow$<br>Criteri $\boldsymbol\downarrow$ |  ~={green}GBFS=~   |         Cerca ~={green}A*=~         |
| ---------------------------------------------------------------------- |:------------------:|:-----------------------------------:|
| **Temps**                                                              |      $O(b^m)$      |              $O(b^m)$               |
| **Espai**                                                              |      $O(b^m)$      | $O(b^m)$<br>en el pitjor dels casos |
| **Òptim**                                                        |         no         |  si $h$ [[#^d72e3c \| admissible]]  |
| **Complet**                                                         | si eliminem cicles | si costos positius                                    |

$b \equiv$ factor de ramificació
$m \equiv$ profunditat de l'arbre


#### Programació **dinàmica**

```ad-def
title: Camí redundant

Un ==camí redundant== és un camí que conté un camí parcial no òptim, és a dir, camins que han arribat al **mateix estat que un altre**, però amb un **cost major**.
```
^bf06e7

Consisteix en elimilar els [[#^bf06e7 | camins redundants]] mitjançant una ~={green}Taula de Costos Parcials Òptims=~, que es manté actualitzada constantment.

```py title:"Dynamic programming"
def search (root, objective):
	...
	while paths[0][0]!=objective and paths!=[]:
		...
		remove_cycles(expanded)
		remove_redundant_paths(expanded,paths) <--
		paths = insert(expanded,paths[:-1])
	...
```


#### **Propietats** de les **heurístiques**

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

```ad-prop
title: Heurístiques que aprenen

Es poden utilitzar combinacions lineals d'heurístiques $h_{1},\dots,h_{k}$ amb pesos $c_{1},\dots,c_{k}$ que s'ajusten en funció de l'objectiu de l'agent:
$$ h(n) = c_{1}\,h_{1}(n) + \dots + c_{k}\,h_{k}(n) $$
```



---
## Cerca **local**