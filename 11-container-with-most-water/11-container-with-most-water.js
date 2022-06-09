/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height){
  let result = 0,
      i = 0,
      j = height.length - 1;

  while (i < j) {
    let area = Math.min(height[i], height[j]) * (j - i);
    result = Math.max(result, area);
    height[i] <= height[j] ? i++ : j--;
  }
  return result;
}