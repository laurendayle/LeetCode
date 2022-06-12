/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  transpose(matrix);
  reflect(matrix);

};

var transpose = function(matrix) {
  var n = matrix.length;
  for (var i = 0; i < n; i++) {
    for (var j = i + 1; j < n; j++) {
      var tmp = matrix[j][i];
      matrix[j][i] = matrix[i][j];
      matrix[i][j] = tmp;
    }
  }
}

var reflect = function(matrix) {
  var n = matrix.length; 
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n / 2; j++) {
      let tmp = matrix[i][j];
      matrix[i][j] = matrix[i][n - j - 1];
      matrix[i][n - j - 1] = tmp;
    }
  }
}
