/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if (!grid || grid.length === 0) return 0;
  
  let numIslands = 0; 
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        numIslands += dfs(grid, i, j);
      }
    }
  }
  return numIslands;
};

var dfs = (grid, i, j) => {
  
  if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] !== '1') {
    return 0; 
  }
  
  grid[i][j] = '0';
  dfs(grid, i + 1, j);
  dfs(grid, i - 1, j);
  dfs(grid, i, j - 1);
  dfs(grid, i, j + 1);
  
  return 1; 
}