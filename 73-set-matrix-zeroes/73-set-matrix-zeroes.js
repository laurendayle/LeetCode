/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = matrix => {
  if (!matrix.length || !matrix) return; 

  let rowSet = new Set();
  let colSet = new Set();

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === 0) {
        rowSet.add(row);
        colSet.add(col);
      }
    }
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (rowSet.has(row) || colSet.has(col)) {
        matrix[row][col] = 0;
      }
    }
  }
}