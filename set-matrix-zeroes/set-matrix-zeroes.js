/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  if (matrix.length === 0) return; 
  
  const rowSet = new Set();
  const colSet = new Set();
  
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      if (matrix[r][c] === 0) {
        rowSet.add(r);
        colSet.add(c);
      }
    }
  }
  
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      if (rowSet.has(r) || colSet.has(c)) {
        matrix[r][c] = 0;
      }
    }
  }
  console.log(matrix);
};