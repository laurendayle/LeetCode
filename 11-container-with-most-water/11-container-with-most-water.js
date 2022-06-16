/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

  let max = 0,
      current = 0,
      left = 0,
      right = height.length - 1;
  while (right > left) {
    let width = right - left; 
    max = Math.max(max, Math.min(height[left], height[right]) * width); 
    if (height[left] <= height[right]) {
      left++; 
    } else {
      right--; 
    }
  }
  return max; 
}