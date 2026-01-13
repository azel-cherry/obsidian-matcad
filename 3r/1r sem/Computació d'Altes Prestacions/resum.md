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

nah i give up


---

## Memòria distribuïda: MPI

