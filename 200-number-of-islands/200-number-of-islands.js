/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let counter = 0; 
  
  const dfs = (i, j) => {
    if (
    i >= 0 && 
    j >= 0 && 
    i < grid.length && 
    j < grid[i].length && 
    grid[i][j] === '1') {
      grid[i][j] = '0';
      dfs(i + 1, j); // top
      dfs(i, j + 1); // right
      dfs(i - 1, j); // bottom 
      dfs(i, j - 1); // left 
    }
  }
  
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        counter++;
        dfs(i, j); 
      }
    }
  }
  return counter; 
};