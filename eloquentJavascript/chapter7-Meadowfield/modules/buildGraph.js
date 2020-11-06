module.exports = function buildGraph(edges) {
	let graph = Object.create(null);
	
	function addEdg(from, to) {
		if(graph[from] == null) {
			graph[from] = [to];
		} else {
			graph[from].push(to);
		}							
	}
	
	for(let [from, to] of edges.map(r => r.split("-"))) {
		addEdg(from, to);
		addEdg(to, from);
	}	
	
	return graph;
	
}

