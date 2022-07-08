/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
const allPathsSourceTarget = graph => {
  const paths = []; 
  if (!graph || !graph.length) return paths;

  dfs(graph, 0, [], paths);
  return paths; 
}

const dfs = (graph, node, currentPath, paths) => {
  currentPath.push(node); 
  if (node === graph.length - 1) {
    paths.push(currentPath.slice());
    return;
  }

  const nextNodes = graph[node];
  for (const neighbor of nextNodes) {
    dfs(graph, neighbor, currentPath, paths);
    currentPath.pop();
  }
}