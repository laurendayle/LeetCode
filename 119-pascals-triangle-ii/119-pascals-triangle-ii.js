/**
 * @param {number} rowIndex
 * @return {number[]}
 */

var getRow = function(rowIndex) {
  const result = [[1]];

  for (let i = 1; i <= rowIndex; i++) {
    const row = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        row.push(1);
      } else {
        row.push(result[i - 1][j - 1] + result[i - 1][j]);
      }
    }
    result.push(row);
  }
  return result[rowIndex];
}
