/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */

// bfs approach 
// var validPath = (n, edges, source, dest) => {
//   const graph = buildGraph(edges);

//   const queue = [source],
//         visited = new Set();

//   while (queue.length) {
//     const current = queue.shift();
//     if (visited.has(current)) continue; 
//     visited.add(current); 
//     if (current === dest) return true;
//     for (let neighbor of graph[current]) {
//       queue.push(neighbor);
//     }
//   }
//   return false;
// }

const buildGraph = edges => {
  const graph = {}; 
  for (const edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph; 
}

// dfs approach 
var validPath = (n, edges, source, dest) => {
  const graph = buildGraph(edges);
  const stack = [source];
  const visited = new Set(); 
  
  while (stack.length) {
    const current = stack.pop(); 
    if (visited.has(current)) continue;
    visited.add(current); 
    if (current === dest) return true; 
    for (let neighbor of graph[current]) {
      stack.push(neighbor); 
    }
  }
  return false; 
}








