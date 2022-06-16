/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

  let max = 0,
      right = height.length - 1,
      left = 0;

  for (var i = 0; i < height.length; i++) {
    let width = right - left; 
    max = Math.max(max, Math.min(height[left], height[right]) * width);
    if (height[right] > height[left]) {
      left++;
    } else {
      right--;
    }
  }
  return max; 
}