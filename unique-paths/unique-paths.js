/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  const result = [[]];
  
  for (let i = 0; i < n; i++) {
    result[0].push(1);
  }
  
  for (let j = 1; j < m; j++) {
    result.push([1]);
    
    for (let k = 1; k < n; k++) {
      result[j][k] = result[j][k - 1] + result[j - 1][k];
    }
  }
  return result[m - 1][n - 1];
};