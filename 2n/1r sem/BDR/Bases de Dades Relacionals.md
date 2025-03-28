## Introducció

#### Bases de dades **depenent dels requisits**

``````ad-prop
title: Sistemes **antics**

```ad-prop
title: Sistemes de gestió d'arxius **plans**

Dades emmagatzemades en blocs **seqüencials** en **cintes magnètiques**.

Amb aquest tipus d'emmagatzematge és **difícil**:

+ **accedir** a les dades
+ afegir dades en **diferents formats**
+ **classificar** dades
+ **ocultar** informació confidencial
```

`````ad-prop
title: Sistemes **jeràrquics**

Dades organitzades en un conjunt de relacions entre **pares i fills**.

````ad-graph
```mehrmaid
graph TB;
	A("Node arrel")
	B1("Registre")
	B2("Registre")
	C1("Registre
		secundari")
	C2("Registre
		secundari")
	C3("Registre
		secundari")
	D1("... $\,$")
	D2("... $\,$")
	D3("... $\,$")

	A --> B1
	A --> B2
	B1 --> C1
	B1 --> C2
	B2 --> C3
	C2 --> D1
	C3 --> D2
	C3 --> D3
```
````

Desavantatges:
+ Difícil relacionar dos nodes superior amb un d'inferior (s'han de **duplicar** les dades)
`````

`````ad-prop
title: Sistemes de gestió de **xarxa**

Registres de dades enllaçats. Amb aquest sistema sí que es poden enllaçar dos pares amb un fill.
````ad-graph
```mehrmaid
graph TB;
	A("node")
	B1("node")
	B2("node")
	C1("node")
	C2("node")
	C3("node")
	D1("node")
	D2("node")
	D3("node")

	A -- "edge" --> B1
	A -- "edge" --> B2
	B1 -- "edge" --> C1
	B1 -- "edge" --> C2
	B2 -- "edge" --> C2
	B2 -- "edge" --> C3
	C2 -- "edge" --> D1
	C3 -- "edge" --> D2
	C3 -- "edge" --> D3
```
````

Desavantatges:
+ No es poden tenir **cicles**
+ **Restriccions** en relacions entre nodes
`````

En tots els sistemes anteriors, **no hi ha independència entre l'organització lògica i la física**; quan la base de dades canvia, també ho ha de fer el programa.
``````

``````ad-prop
title: Sistemes **actuals**

`````ad-prop
title: Bases de dades **relacionals** (SQL)

Característiques:
+ Basades en **àlgebra relacional** 
+ **Separen** l'organització lògica de la física
+ Regles que eliminen algunes anomalies
+ S'utilitza el llenguatge **SQL** (molt comú en manipulació de dades)

Desavantatges:
+ Problemes d'**escala**
+ Amb **grans volums** d'operacions:
	+ **Alt temps de resposta**
	+ **Baixa disponibilitat**

Per soluncionar aquests poroblemes es poden utilitzar **molts servidors** amb una mateixa base de dades, però és molt **complex**.
`````

````ad-prop
title: Bases de dades **no relacionals** (NoSQL)

Origina degut al creixement del **comerç electrònic** i les **xarxes socials**.

Característiques:
+ ~={green}Escalabilitat.=~ Permet l'**addició de recursos** segons sigui necessari.
+ ~={green}Flexibilitat.=~ No tenen una estructura fixa. Es poden **afegir nous atributs** dinàmicament.
+ ~={green}Cost.=~ La majoria de bases de dades NoSQL són ***open source***.
+ ~={green}Disponibilitat.=~ Quan un servidor falla, els altres poden assumir la seva feina.
````

Diferències:

| Relacionals | No relacionals |
| --- | --- |
| Dades homogènies (guarda sempre el mateix tipus d'informació) | Dades heterogènies (permet flexibilitat) |
| Garanteixen propietats ACID | No garanteixen propietats ACID

``````


---
#### **Conceptes** clau

+ ~={green}Integritat.=~ 
	+ ~={green}Coherència.=~ Evitar valors **incorrectes** o **impossibles**.
	+ ~={green}Consistència.=~ Que el **resultat no variï** segons com s'hi accedeixi.
+ ~={green}Eficiència.=~ Augmentar la **velocitat**.
	+ **Operacions** habituals ràpides.
	+ **Accés ràpid** de dades al disc (indexació, *hashing*).
	+ **Compressió** de la informació al disc.
+ ~={green}Independència=~ entre el programari i les dades.
	+ Accés a dades per **contingut** (fitxer) en comptes de per **adreça** (*pointer*).
+ ~={green}Abstracció.=~ Amagar la complexitat del sistema sota diversos **nivells d'abstracció** que **simplifiquen** el seu us.
+ ~={green}Control.=~ Protecció contra **canvis concurrents**.
+ ~={green}Seguretat.=~ Definir controls de seguretat per a cada tipus d'accés.


---
#### **Cicle de vida** d'una base de dades

+ ~={green}Anàlisis de requeriments=~
	+ **Entrevista** als usuaris
	+ **Especificació formal**
+ ~={green}Disseny conceptual=~
	+ Diagrama **entitat-relació**
+ ~={green}Disseny lògic=~
	+ Pas del disseny conceptual a **taules**
	+ **Normalització** de taules
+ ~={green}Disseny físic=~. Optimització del rendiment:
	+ **Indexació** (selecció d'índexs)
	+ ***Clustering*** (partició i agrupació de dades)
	+ ***Hashing*** (millora de l'accés als registres)
+ ~={green}Implementació=~ mitjançant els llenguatges específics del 
[[#^29ec86 | Sistema Gestor de Bases de Dades]].


---
#### **Sistema Gestor de Bases de Dades** (SGBD)
^29ec86

Col·lecció de programes que permet:
+ definir les dades
+ construir la base de dades
+ manipular les dades

Es fan servir diferents llenguatges:
+ ~={green_low}Llenguatge de=~ ~={green}definició=~ ~={green_low}de dades=~ ~={green}(DDL)=~
	+ descriure entitats, atributs i relacions
	+ aplicar restriccions de seguretat
+ ~={green_low}Llenguatge de=~ ~={green}manipulació=~ ~={green_low}de dades=~ ~={green}(DML)=~ o ~={green}sub-llenguatge=~ ~={green_low}de dades=~ ~={green}(DSL)=~
	+ operacions bàsiques de manipulació de dades
+ ~={green_low}Llenguatge de=~ ~={green}control=~ ~={green_low}de dades=~ ~={green} (DCL)=~
	+ controlar l'accés a les dades
+ ~={green_low}Llenguatge de=~ ~={green}control de transacció (TCL)=~
	+ controlar el processament de transaccions
	+ sintaxi similar a un llenguatge de programació

```ad-prop
title: **Funcions** importants

+ **Còpies de seguretat**. Bloca periòdicament la BD en un sistema secundari.
+ **Rendiment del sistema**. Organitza i ajusta el sistema si canvien requeriments d'accés.
```

```ad-war
title: Quan **no** utilitzar un **SGBD**

+ ~={pink}Raons de cost=~
	+ Forta inversió inicial
	+ Cost que implica oferir funcions de seguretat, control de concurrència, etc.
+ ~={pink}Simplicitat del problema=~
	+ Base de dades **simple**, **ben definida** i que **no s'espera que canviï**
	+ No requereix **molt de temps d'accés** a dades
	+ No requereix accés **multiusuari**
```


---
## Arquitectura

#### Sistema **centralitzat tradicional**

+ **Únic sistema** que **no interactua** amb altres sistemes
+ Ordinador d'**ús general**
+ Sistema operatiu tant d'**un sol usuari** (equip personal) o **multiusuari** (sistemes de servidor)


#### Sistema **client-servidor**

+ Satisfan solicituds generades per diversos sistemes
+ Els **ordinadors personals** assumeixen el rol d'**interfície** d'usuari
+ **Funcionalitat *back-end*/*front-end***: Processament distribuït en diverses màquines

```ad-prop
title: *BACK-END* (servidor)

Correspon a la màquina que executa el **SGBD**.
+ Gestió d'estructures d'accés
+ Evaluació i optimització de consultes
+ Control de **concurrència** i **recuperació**
```

```ad-prop
title: *FRONT-END* (client)

Correspon a la màquina que executa l'**aplicació**.
+ Eines com formularis i reports
+ Interfície gràfica d'usuari
```


| Avantatges tècnics | Avantatges pràctics | Desavantatges |
| --- | --- | --- |
| ~={green}Paral·lelització=~ de *back-end* i *front-end* | Relació **funcionalitat-cost**    | ~={green}Risc:=~ totes les dades estan en el **mateix servidor** |
| ~={green}Independència=~ entre dades i màquines | **Flexibilitat** a l'hora de localitzar recursos o ampliar les instal·lacions | ~={green}Baix rendiment=~ en cas que hi hagi **molts usuaris** connectats en un **mateix moment**.
| ~={green}Centralització:=~ una sola base de dades | Millors **interfícies** d'usuari
| |  **Manteniment** més senzill

###### **Transacció** de dades

```ad-prop
title: Servidors **de transaccions** (*query servers*, *SQL server systems*)

+ Clients **envien solicituds** (en SQL) al servidor
+ **Operacions** realitzades en el **servidor**
---
+ ~={green}Open Database Connectivity (ODBC)=~: Estàndard d'interfície de programació d'aplicacions (en **C**).
+ ~={green}Java Database Connectivity (JDBC)=~: Estàndard d'interfície de programació d'aplicacions (en **Java**).
```

```ad-prop
title: Servidors **de dades**

+ Les dades s'envien als **clients**, on es **processen**, i es retornen cap al servidor
+ Clients **comparables en potència** amb el servidor
+ Funcionalitat de ***back-end*** als **clients**
+ Utilitzat en SBDs **orientades a objectes**
```


###### **Paral·lelització**

Alguns sistemes client-servidor disposen de **múltiples processadors** i discs.

+ ~={green}Gra gruixut.=~ Pocs processadors potents.
+ ~={green}Gra fi (*massively parallel*).=~ Fins a milers de processadors més petits.

Mesures de rendiment:
+ ~={green}*Throughput.*=~ Nombre de tasques completades en un temps donat.
+ ~={green}*Response time.*=~ Temps que triga en completar una tasca donada.


###### Sistemes **distribuïts**

+ **Distribució de les dades** en vàries màquines.
+ Molts sistemes client-servidor (nodes) que es comuniquen entre ells.
+ **Cada màquina** funciona com a **servidor** per a alguns usuaris i com a **client** per a altres.
+  Si **falla un servidor**, es poden fer servir els **altres**.
+ Comunicació en **SQL**. 
	+ ~={green}Accés seqüencial.=~ L'aplicació *front-end* accedeix a **una sola màquina** a la vegada.
	
	+ ~={green}Accés simultani.=~ L'aplicació *front-end* accedeix a **totes les màquines** simultàniament.
 + Poden ser ~={green}heterogenis=~. Es pot treballar amb SBDs amb **diferents sistemes operatius i SGBDs**. Els SGBDs es comuniquen entre si amb **SQL**.

---

#### Arquitectura **ANSI/SPARC**

```ad-def
title: *Vistes*

**Col·leccions de dades** relacionades d'una o més taules, o **valors calculats** amb aquestes.

Es poden utilitzar per **restringir** les dades que veu un usuari.
```

###### **Nivells d'abstracció**

+ ~={green}Nivell extern (alt)=~
	+ **Presentació** de dades als **usuaris**
	+ **Aplicacions** que **accedeixen** a les dades
	+ Accés amb llenguatge d'**alt nivell** (C++, Python, Java, etc.)
+ ~={green}Nivell conceptual (medi)=~
	+ Descripció de les dades en **taules i relacions**
	+ **Administradors** de la BD
	+ Accés amb Oracle Data Modeler, SQL Developer, etc.
+ ~={green}Nivell intern (baix)=~
	+ Organització i **emmagatzematge** en fitxers
	+ **Alta complexitat** (apuntadors, índexs, etc.)
	+ Accés de **baix nivell** (depèn del SO)

````ad-graph
<br>

```mehrmaid
graph TB;
	V1 --> C
	V2 --> C
	V3 --> C
	C --> D

	subgraph V ["Nivell extern $\,$"]
	V1("Vista 1")
	V2("Vista 2")
	V3("$\quad$... $\quad$")
	end
	C("Nivell conceptual $\,$")
	D("Nivell intern $\,$")
```
````

###### **Independència**

+ ~={green}Independència lògica.=~ Es pot modificar el nivell **conceptual** sense necessitat de modificar els nivells **externs**.
+ ~={green}Independència física.=~ Es pot modificar el nivell **intern** sense necessitat de modificar el nivell **conceptual**.

###### **Correspondències**

Procés de **transformar** sol·licituds i resultats **d'un nivell a un altre**.

+ ~={green}extern/extern=~: diverses vistes externes es combinen en una nova vista
+ ~={green}extern/conceptual=~: diversos camps conceptuals es transformen en un sol camp extern
+ ~={green}conceptual/intern=~: especifica com s'estructuren els registres a nivell intern

---
## **Rols** en un SBD

+ ~={green}Dissenyador.=~ **Dissenya** les estructures de dades i la seva lògica.
+ ~={green}Administrador.=~ **Control** a nivell tècnic.
	+ permisos d'accés a les dades
	+ actualització de la informació
	+ còpies de seguretat
	+ etc.
+ ~={green}Usuaris finals.=~ 
	+ ~={green_low}Programador.=~ Dissenya **aplicacions** que realitzen consultes al SBD.
	+ ~={green_low}Usuari.=~ **Accedeix** al SBD mitjançant les aplicacions.
