/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let row = matrix.length - 1;
  let col = 0; 
  
  while (col < matrix[0].length && row >= 0) {
    if (matrix[row][col] > target) {
      row--;
    } else if (matrix[row][col] < target) {
      col++;
    } else {
      return true; 
    }
  }
  return false;
};