/**
 * @param {number[][]} isConnected
 * @return {number}
 */
const getEdges = (idx, edge) => {
  const edges = [];
  for (let i = 0; i < edge.length; i++) {
    if (i === idx) continue; 
    if (edge[i] === 0) continue; 
    edges.push(i);
  }
  return edges;
}


const dfs = (node, adjList, visited) => {
  visited[node] = true; 

  for (let neighbor of adjList[node]) {
    if (!visited[neighbor]) {
      visited[neighbor] = true; 
      dfs(neighbor, adjList, visited);
    }
  }
}

const buildList = (edges, n = edges.length) => {
  const adjList = Array.from({length: n}, () => []);

  for (let i = 0; i < edges.length; i++) {
    adjList[i].push(...getEdges(i, edges[i]));
  }
  return adjList; 
}


var findCircleNum = isConnected => {

  const adjList = buildList(isConnected);
  const visited = {}; 
  let provinces = 0; 

  for (let vertex = 0; vertex < adjList.length; vertex++) {
    if (!visited[vertex]) {
      provinces++;
      dfs(vertex, adjList, visited); 
    }
  }
  return provinces;
}