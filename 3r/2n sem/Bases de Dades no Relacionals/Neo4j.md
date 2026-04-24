## Graph structure

```mehrmaid
graph LR;

N1("node")
N2("node")

N1 --"$\,$relationship$\,\,$"--> N2
```

+ Each node and relationship has **one single label**.
+ Nodes and relationships can have **attributes**.

Graph traversal types:
+ **Walk.** Any ordered sequence of nodes and relationships.
+ **Trail.** No relationships are repeated.
+ **Path**. No nodes are repeated.

```ad-prop
title: Useful Commands

+ `{cypher}call db.propertyKeys()`: show all node attributes
+ `{cypher}call db.schema.visualization()`: view graph structure
```


## Queries

`{cypher}(x:NLABEL) -[r:RLABEL]-> (y:NLABEL) <- ...`

+ **Relationships:**
	+ `{cypher}-->`, `{cypher}<--`
	+ `{cypher}--`: any direction
	+ `{cypher}-[*]-`: path of variable length
		+ `{cypher}*`: any length (inefficient)
		+ `{cypher}*<num>`: length `num`
		+ `{cypher}*<n1>..<n2>` length between `n1` and `n2` (inclusive)
+ **Access attribute:** `{cypher}(n:TYPE {attr: val})`, `{cypher}[r:TYPE {attr: val}]`
+ **Disjunction:** `{cypher}(:L1|L2)` (node/relationship has any of the labels)
	+ not possible with conjunction; nodes and relationships have one single label 

```ad-prop
title: Deletion

+ `{cypher}detach <n>`: detach nodes `n` from all relationships (deletes relationships)
+ `{cypher}delete <x>`: delete nodes or relationships `x` (fails if node has any relationship atached)
```

````ad-prop
title: Match

Returns only paths that strictly follow the specified pattern.

```cypher
match <path>
with ...
where ...
optional match ...
return ...
```

+ `{cypher}return x, y, z`: return as graph (must return relationships to include them in graph)
+ ``{cypher}return x.attr as `col-name` ``: return as table
+ `{cypher}return x {.attr1, attr2}`: return as map (JSON)
+ `{cypher}match paths = (<path>) return paths`
+ `{cypher}with x as <name>, func(x) as ...`: save previous or new variables for the rest of the query (when using `with`, only these variables will be saved)


---
`{cypher}where ...`

+ `{cypher}<q1> <and|or|xor> <q2>`
+ `{cypher}<exists | not exists> <path>`
  
```ad-prop
title: Attributes

`n.attr`

+ `{cypher}<attr> = <val>`, `{cypher}<attr> <> <val>`
+ `{cypher} n1 <= <attr> <= n2`
+ `{cypher}<attr> <is | is not> null`
+ `{cypher}toLower(<attr>)`, `{cypher}toUpper(<attr>)`
+ `{cypher}toString(<attr>)`, `{cypher}toInteger(<attr>)`
+ **Strings:**
	+ `{cypher}<attr> contains "..."`
	+ `{cypher}<attr> starts with "..."`
	+ `{cypher}<attr> =~ "<regex>"`
+ **Arrays:**
	+ `{cypher}<attr> in <array>`
	+ `{cypher}<array>[n]`: index `n`
	+ `{cypher}size(<array>)`: number of elements
```

---

`{cypher}optional match ...`: returns paths that follow specified pattern, and will assign `{cypher}null` if a part is missing
````

````ad-prop
title: Aggregate

`{cypher}return x, ...` implicitly groups output by `x` (rows of table output).

+ `{cypher}count(x)`
+ `{cypher}collect(x)`: return array of outputs
````

```ad-prop
title: Date and time

+ `{cypher}date().<day|month|year>`
+ `{cypher}datetime().<minute|hour|...>`
  
Return integers.
```

```ad-prop
title: Maps

`{cypher}return x{.attr, name:var}`

Returns output in .json format.
```