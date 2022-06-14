/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  var result = 0;


  for (let rowIndex in grid) {
    for (let colIndex in grid[rowIndex]) {
      if (grid[rowIndex][colIndex] === '1') {
        result++;
        teraform(parseInt(rowIndex), parseInt(colIndex), grid);
      }
    }
  }
  return result;
}
// convert stuff around us to water
var teraform = function(rowIndex, colIndex, grid) {
  if (grid[rowIndex] === undefined || grid[rowIndex][colIndex] === undefined || grid[rowIndex][colIndex] === '0') return;
  grid[rowIndex][colIndex] = '0';
  teraform(rowIndex + 1, colIndex, grid);
  teraform(rowIndex - 1, colIndex, grid);
  teraform(rowIndex, colIndex + 1, grid);
  teraform(rowIndex, colIndex - 1, grid);
}
