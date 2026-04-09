+ `{js}"<array>.<num>"`: element en posició `num` de la llista
+ Dates: `{js}new Date("<yyyy-mm-dd>T<hh:mm:ss.sss>")`
+ Field exists: `{js}<field>: {$exists: <true/false>}`

```ad-prop
title: Arrays

+ Contains element: `{js}<array: <val>`
+ Exact match: `{js}<array>: [...]`
+ Contains all elements: `{js}<array>: {$all: [...]}`
+ One element matches query: `{js}<array>: {$elemMatch: {<query>}}`
+ Concatenate arrays: `{js}<new-array>: {$concatArrays: [<array1>, <array2>]}`
  
During update, if array has been queried: 
`{js}"<array>.$": <val>`: update first array match
```

delete etc

````ad-prop
title: Update


```js
db.<coll>.update?(
	{<query>},
	{$set: {<field>: <val>}},
	{$inc: {<field>: <val>}},
	{$push: {<array>: <val>}},
	{$unset: {<field>: ""}}
)
```

+ `{js}updateOne()`
+ `{js}updateMany()`
````

````ad-prop
title: Indices

`{js}db.<coll>.createIndex({<field>: <type>, ...})`
+ `<1/-1>`: ascending/descending numerically or alphabetically
+ `{js}<"2d"/"2dsphere">`: supports geospatial queries

	```js title:"geospatial"
	// Definition	
	<field>: {
		type: <"Point"/...>,
		coordinates: [...]
	}
	
	// Query
	<field>: {
		$near: {
			$geometry: {
				type: ...,
				coordinates: [...]	
			},
			$minDistance: <val>,
			$maxDistance: <val>	
		}
	}
	```

+ `{js}"text"`: supports `$text` queries:

	```js title:"textual query"
	<field>: $text: {
		$search: <str>,
		$caseSensitive: <bool>
	}
	```

+ `{js}"hashed"`: assigns specific number to each entry for very efficient match searches
````

```ad-prop
title: Execution Plans

`{js}db.<coll>.[...].explain(<mode>)`
+ `{js}"queryPlanner"`: returns best plan
+ `{js}"executionStats"`: runs query in best plan and returns stats
+ `{js}"allPlansExecution"`: returns best plan, runs query in plan, returns stats and partial stats of other plans
```

`````ad-prop
title: Aggregation

`{js}db.<coll>.aggregate([...])`

+ `{js}{$match: {<field>: <val>, ...}}`: like find
+ `{js}{$addFields: {<new-field>: <val>}}`
+ `{js}{$count: "<name>"}`: returns single attribute with number of outputs of pipeline
+ `{js}{$out: "<coll>"}`: adds aggregate result to specificed collection (last in pipeline)


```js title:"lookup"
{$lookup: {
	from: "<coll>",
	localField: "<field>",
	foreignField: "<field>",
	let: {<name>: "$<field>", ...}  // 
	pipeline: ...,
	as: "<field-name>"
}}
```
+ `{js}let: {<name>: "$<field>", ...}`: use aggregate fields in pipeline
	+ access fields with `$$`
	+ use `$expr` inside `$match` in pipeline

```js title:"facet"
// returns multiple pipeline outputs as document array
{$facet: {
	<field1>: [<pipeline>],
	...
}}
```

````ad-prop
title: Grouping

**Accumulators:** Operations on a set of input documents:
+ `{js}<array>: {$push: {<field>: <val>, ...}}`: Push document(s) into array
  
```js title:"group"
{$group: {
	_id: "$<field>",
	<attr>: {$<acc>: ...},
	...
}}
```

```js title:"bucket"
{$bucket: {
	groupBy: "$<filed>",
	boundaries: [<lowerbound1>,..., <upperbound>],
	default: <id-if-not-in-boundaries>,
	output: {<document>}
}}
```
````

`````

````ad-prop
title: Views

Sub-collection created from existing collection that updates alongside it.

```js title:"creation"
db.createView(
	"<name>",
	"<source-coll>",
	[<pipeline>]
)
```


````