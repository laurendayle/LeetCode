/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  const visited = new Set(); 
  let max = 0; 
  
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (grid[r][c] === 1) {
        let size = searchIslands(grid, r, c, visited);
        max = Math.max(size, max);
      }
    }
  }
  return max; 
};

const searchIslands = (grid, row, col, visited) => {
  if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] !== 1) {
    return 0;
  }
  
  const pos = row + ',' + col;
  if (visited.has(pos)) return 0;
  visited.add(pos);

  
  let size = 1;
  
  size += searchIslands(grid, row + 1, col, visited);
  size += searchIslands(grid, row - 1, col, visited);
  size += searchIslands(grid, row, col + 1, visited); 
  size += searchIslands(grid, row, col - 1, visited);
  
  return size; 
  
}