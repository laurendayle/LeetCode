/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let start = 0,
      end = height.length - 1,
      max = -Infinity;
  
  while (start < end) {
    let currHeight = Math.min(height[start], height[end]),
        width = end - start; 
    max = Math.max(currHeight * width, max);
    if (height[start] > height[end]) {
      end--;
    } else {
      start++;
    }
  }
  return max; 
};