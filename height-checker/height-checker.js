/**
 * @param {number[]} heights
 * @return {number}
 */
const heightChecker = heights => {

  const sorted = heights.slice().sort((a, b) => a - b);

  let count = 0; 
  for (let i = 0; i < heights.length; i++) {
    console.log(heights[i], sorted[i]);
    if (heights[i] !== sorted[i]) {

      count++; 
    }
  }
  return count;
}