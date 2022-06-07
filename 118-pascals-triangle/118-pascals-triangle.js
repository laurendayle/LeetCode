/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let triangle = [[1]];
  for (var rowIndex = 1; rowIndex < numRows; rowIndex++) {
    let row = [];
    let prevRow = triangle[rowIndex - 1];
    row.push(1);
    for (let j = 1; j < rowIndex; j++) {
      row.push(prevRow[j - 1] + prevRow[j]);
    }
    row.push(1);
    triangle.push(row);
  }
  return triangle;
};