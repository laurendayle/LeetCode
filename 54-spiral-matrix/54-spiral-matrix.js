/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {

  var result = [],
      rowStart = 0,
      rowEnd = matrix.length - 1,
      colStart = 0,
      colEnd = matrix[0].length - 1;

  while (rowStart <= rowEnd && colStart <= colEnd) {
    for (var i = colStart; i <= colEnd; i++) {
      result.push(matrix[rowStart][i]);
    }
    rowStart++; 

    for (var j = rowStart; j <= rowEnd; j++) {
      result.push(matrix[j][colEnd]);
    }
    colEnd--;
    if (rowStart <= rowEnd) {
      for (var k = colEnd; k >= colStart; k--) {
        result.push(matrix[rowEnd][k]);
      }
      rowEnd--;
    }

    if (colStart <= colEnd) {
      for (var m = rowEnd; m >= rowStart; m--) {
        result.push(matrix[m][colStart]);
      }
      colStart++;
    }
  }
  return result;
}