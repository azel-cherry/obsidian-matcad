## Graph structure

```mehrmaid
graph LR;

N1("node")
N2("node")

N1 --"$\,$relationship$\,\,$"--> N2
```

+ Each node and relationship can have **multiple labels** (or none).
+ Nodes and relationships can have **attributes**.

Graph traversal types:
+ **Walk.** Any ordered sequence of nodes and relationships.
+ **Trail.** No relationships are repeated.
+ **Path**. No nodes are repeated.

```ad-prop
title: Useful Commands

+ `{cypher}call db.propertyKeys()` show all node attributes
+ `{cypher}call db.schema.visualization()` view graph structure
```


## Queries

`{cypher}(x:NLABEL) -[r:RLABEL]-> (y:NLABEL) <- ...`

+ **Relationships:**
	+ `{cypher}-->`, `{cypher}<--` directed
	+ `{cypher}--` any direction
	+ `{cypher}-[*]-` path of variable length
		+ `{cypher}*` any length (inefficient)
		+ `{cypher}*<num>` length `num`
		+ `{cypher}*<n1>..<n2>` length between `n1` (can be 0) and `n2` (inclusive)
+ **Attributes:**
	+ `{cypher}(n:TYPE {attr: val})` access node attribute
	+ `{cypher}[r:TYPE {attr: val}]` access relationship attribute
+ **Labels:**
	+ `{cypher}labels(n)` access labels
	+ `{cypher}(:L1|L2)` disjunction

```ad-prop
title: Creation

+ `{cypher}create ...`
	+ `{cypher}(:L {...})` create node
	+ `{cypher}(n1) -[:L {...}]-> (n2)` create relationship
+ `{cypher}merge ...` like create, but without duplicating
+ `{cypher}set ...`
	+ `{cypher}x:L1:L2` set labels
	+ `{cypher}x.<attr> = val` set attribute
```

```ad-prop
title: Deletion

+ `{cypher}detach <n>` detach nodes `n` from all relationships (deletes relationships)
+ `{cypher}delete <x>` delete nodes or relationships `x` (fails if node has any relationship atached)
+ `{cypher}remove x.attr` delete attribute
```

````ad-prop
title: Match

Returns only paths that strictly follow the specified pattern.

```cypher
match <path>
return ...
```

+ `{cypher}match paths = (<path>) return paths` assign name to whole path
+ `{cypher}return ...`
	+ `{cypher}x, y, z` return as graph
	+ ``{cypher}x.attr as `col-name` `` return as table
	+ `{cypher}x {.attr, name:var}` return as map (JSON)

+ `{cypher}where ...`
	+ `{cypher}<q1> <and|or|xor> <q2>`
	+ `{cypher}<exists|not exists> <path>`
+ `{cypher}with x as <name>, func(x) as ...` save previous or new variables for the rest of the query (when using `with`, only these variables will be saved)
+ `{cypher}optional match ...` returns paths that follow specified pattern, and will assign `{cypher}null` if a part is missing
+ `{cypher}limit <n>` show only `n` entries
+ `{cypher}order by attr [desc]` order results (ascendent by default)
+ `{cypher}distinct x` keep only distinct nodes, attributes, etc
  
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
	+ `{cypher}<array>[n]` index `n`
	+ `{cypher}size(<array>)` number of elements	
	+ `{cypher}unwind <array> as <name>` array elements as separate rows
```
````

````ad-prop
title: Aggregate

`{cypher}return x, ...` implicitly groups output by `x` (rows of table output).

+ `{cypher}count(x)`
+ `{cypher}collect(x)` return array of outputs
````

```ad-prop
title: Date and time

+ `{cypher}date().<day|month|year>`
+ `{cypher}datetime().<minute|hour|...>`
  
Return integers.
```

````ad-prop
title: Subqueries

```cypher
call {
	<query1>
	return x
}
<query2>
```
can use `x` in second query
````

````ad-prop
title: Case
```cypher
x = case <var>
	when <val1> then ...
	when <val2> then ...
end
```
````

````ad-prop
title: Costraints

```cypher
create constraint <name> for <(x:L) | ()-[x:L]-()>
require (x.attr1, x.attr2) ...
```
+ **Uniqueness.** `{cypher}is unique`
+ **Existance.** `{cypher}is not null`
  
`{cypher}drop constraint <name>`
````

````ad-prop
title: Indexes

```cypher
create index <name> for <(x:L) | ()-[x:L]-()>
on (x.attr1, x.attr2) ...
```

`{cypher}drop index <name>`
````

```ad-prop
title: Analyzing queries

+ `{cypher}profile match ...` estimate without executing query
+ `{cypher}explain match ...` real profiling information; query is executed
```


#### Efficiency Hierarchy

1. Anchor node label or indexed properties
2. Relationship label
3. Anchor node non-indexed properties
4. Downstream node labels
5. Relationship properties and downstream node properties


## Graph Analytics