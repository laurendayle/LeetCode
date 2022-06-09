/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(h) {

  let water = 0,
      left = 0,
      right = h.length - 1,
      leftMax = 0,
      rightMax = 0;

  while (left < right) {
    if (h[left] < h[right]) {
      if (h[left] >= leftMax) {
        leftMax = h[left];
      } else {
        water += leftMax - h[left];
      }
      left++;
    } else {
      if (h[right] >= rightMax) {
        rightMax = h[right];
      } else {
        water += rightMax - h[right];
      }
      right--;
    }
  }
  return water;
}