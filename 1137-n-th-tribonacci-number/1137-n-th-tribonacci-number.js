/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  let nums = new Array(38).fill(0);
  nums[1] = 1;
  nums[2] = 1;
  
  for (var i = 3; i < 38; i++) {
    nums[i] = nums[i - 1] + nums[i - 2] + nums[i - 3];
  }
  return nums[n];
};