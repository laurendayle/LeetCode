/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = height => {

  let left = 0,
      right = height.length - 1,
      res = 0; 

  while (left < right) {
    let area = Math.min(height[left], height[right]) * (right - left);
    res = Math.max(res, area);
    height[left] <= height[right] ? left++ : right--;
  }
  return res;
}