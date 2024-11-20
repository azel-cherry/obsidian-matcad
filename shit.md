```graph
bounds: [-2,2,2,-2]
elements: [
	{type: slider, def: [[1,1],[2,1],[-10,0,10]], att: {name: "z"}},
	{type: slider, def: [[1,0.5],[2,0.5],[0,10,50]], att: {name: "n"}},
	{type: slider, def: [[1,-0.5],[2,-0.5],[0,10,50]], att: {name: "sigma"}},
	{type: slider, def: [[1,-1],[2,-1],[0,10,50]], att: {name: "mu_0"}},
	{type: functiongraph, def: ["f:(1/sqrt(2*PI))*E**(-(1/2)*(-e0+(e3-x/(e2/sqrt(e1))))**2)"]}
]
```