/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = (m, n) => {
  const result = [[]];

  // add the first row of 1s to the array
  for (let i = 0; i < n; i++) {
    result[0].push(1);
  }

  for (var i = 1; i < m; i++) {
    result.push([1]); // add 1 to the first, leftmost square
    // get the total for the current square
    for (let j = 1; j < n; j++) {
      result[i][j] = result[i][j - 1] + result[i - 1][j];
    }
  }
  // return the bottom right hand value that has the total
  return result[m - 1][n - 1];
}