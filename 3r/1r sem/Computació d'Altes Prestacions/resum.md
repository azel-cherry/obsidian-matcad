# Computació d'Altes Prestacions

```ad-prop
title: Metodolgia de **Foster**

1. Partició
2. Comunicació
3. Agrupació
```

```ad-met
title: **Mètriques**

$n\equiv$ nombre de processadors
$f\equiv$ fracció no paral·lelitzable

+ **Speed-up:** $\,S(n)=\displaystyle\frac{T(1)}{T(n)}$
+ **Eficiència:** $\,E(n)=\displaystyle\frac{S(n)}{n}$
+ **Llei d'Amdahl:** $\,T(n) = f\,\,T(1) + (1-f) \displaystyle\,\frac{T(1)}{n}$
+ **Llei de Gustafson:** $\,S(n)=f+n\,(1-f)$
```

---

## Acceleració GPU

+ Unitat bàsica: ***thread*** (*vector*)
+ 32 *threads* s'agrupen en un ***warp*** (*worker*) i estan sincronitzats
+ Els *wraps* s'agrupen en ***blocks*** (*gang*) de mida variable
+ Els *blocks* s'agrupen en ***grids***


#### OpenACC

inicialització: `#include<openacc.h>`

````ad-prop
title: Directives

`#pragma acc`...
+ `parallel`: crea la regió paral·lela però tots els gangs executen el codi seqüencialment
+ `loop`: es paral·lelitza el bucle que segueix la directiva (necessita estar dins d'una regió paral·lela)
+ `kernel`: paral·lelitza automàticament una regió de codi amb els millors paràmetres detectats pel compilador
	  
```ad-prop
title: **Clàusules**
+ `if(<condition>)`
+ `default(<none|present>)`: assumeix que totes les dades dins de la regió paral·lela es troben a la GPU
+ `async(<id>)`: la regió paral·lela s'executa asíncronament amb la CPU
+ `wait(<id>)`:  la regió paral·lela s'espera a que la regió asíncrona corresponent hagi acabat (`wait` s'espera a totes)
+ `collapse(n)`
+ `gang`, `worker`, `vector`
+ `num_gangs()`, `num_workers()`, `vector_length()`
+ `reduction(<op:list>)`
+ `private(list)`, `firstprivate(list)`
+ `self(<condition>)`: la regió s'executa paral·lelament a la CPU
+ `seq`, `auto`
+ `independent`: indica que les iteracions son independents de les dades i per tant anul·la l'anàlisi de dependència del compilador
```
````

````ad-prop
title: Transferències de **dades**

| Host | Device |
| ---- | ------ |
| CPU  | GPU    | 

`#pragma acc data`...

+ `copy(<var-list>)`: copia les dades de la CPU a la GPU al entrar a la regió i viceversa al sortir
+ `copyin(<var-list>)`: copia les dades CPU-GPU al entrar a la regió
+ `copyout(<var-list>)`: copia les dades GPU-CPU al sortir de la regió
+ `create(<var-list>)`: assigna memòria a la GPU
+  `delete(<var-list>)`
````


#### CUDA

nah


---

## Memòria distribuïda: MPI

```c title:"Inicialització i finalització"
#include<mpi.h>

int err;
err = MPI_Init(&argc, &argv);
...
err = MPI_Finalize();
```

Les funcions `MPI_...` retornen la variable `MPI_SUCCESS` de tipus *int* que indica si s'ha executat amb èxit.

```ad-prop
title: **Comunicadors**

Defineixen quins processos poden comunicar-se entre ells. El per defecte, que inclou tots els processos, és `MPI_COMM_WORLD`.

+ `MPI_Comm_size(COMM, &size)`: comunica el total `size` de processos que conté el comunicador `COMM`
+ `MPI_Comm_rank(COMM, &rank)`: comunica el rang `rank` de cada procés dins del comunicador `COMM`
```

````ad-met
title: Comunicació ***point-to-point***

Comunicació entre dos processos.

```ad-prop
title: *Blocking*

+ `MPI_Send(&data, data-size, MPI_TYPE, dest-rank, tag, COMM)`
+ `MPI_Recv(&data, data-size, MPI_TYPE, org-rank, tag, COMM, &status)`
  
| Funció            | Crida       | Condició de finalització                                   |
| ----------------- | ----------- | ---------------------------------------------------------- |
| ***Standard***    | `MPI_Send`  | Desconegut                                                 |
| ***Synchronous*** | `MPI_Ssend` | Missatge rebut                                             |
| ***Buffered***    | `MPI_Bsend` | Missatge copiat a memòria intermèdia                       |
| ***Ready***       | `MPI_Rsend` | Missatge rebut (només si el receptor ja s'estava esperant) |
| ***Receive***     | `MPI_Recv`  | Missatge rebut                                             |
```

```ad-prop
title: *Non-blocking*: Immediate

+ `MPI_Isend(&data, data-size, MPI_TYPE, dest-rank, tag, COMM, &request)`
+ `MPI_Irecv(&data, data-size, MPI_TYPE, org-rank, tag, COMM, &request)`
  
`request` identifica la operació i es fa servir per gestionar el seu estat, pot ser de tipus *MPI_Request* o *int*
```

+ `MPI_Get_count(&status, MPI_TYPE, &count)`: nombre d'elements realment rebuts
+ `MPI_Wait(&request, &status)`
+ `MPI_Test(&request, &flag, &status)`: retorna l'estat de l'operació `request` a la variable `flag` (*True* o *False*)
````

```ad-met
title: Comunicació **col·lectiva**

Comunicació entre un conjunt de processos.

+ `MPI_Barrier(COMM)`: espera que tots els processos arribin i es sincronitzin
+ `MPI_Bcast(&data, data-size, MPI_TYPE, root, COMM)`: *broadcast* de `data` des del procés `root` a tots els altres processos
+ `MPI_Scatter(&send-data, send-size, MPI_sendTYPE, &recv-data, recv-size, MPI_recvTYPE, root, COMM)`: procés `root` envia un tros de `send-data` de mida `send-size` a cada procés, que el guarda a `recv-data` i aquest pot tenir una mida màxima de `recv-size`
  + `MPI_Alltoall`: crida igual que *Scatter* però sense `root`; tots els processos fan un *Scatter* de `send-data` incloent a ells mateixos
+ `MPI_Gather(&send-data, send-size, MPI_sendTYPE, &recv-data, recv-size, MPI-recvTYPE, root, COMM)`: les dades de `send-data` de diversos processos s'envien a `recv-data` del procés `root` 
  + `MPI_Allgather`: crida igual que *Gather* però sense `root`; el resultat es distribueix a tots els processos
```