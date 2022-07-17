/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let currentMax = nums[0],
      currentMin = nums[0],
      finalMax = nums[0];
      
  for (let i = 1; i < nums.length; i++) {
    let tmp = currentMax;
    currentMax = Math.max(Math.max(currentMax * nums[i], currentMin * nums[i]), nums[i]);
    currentMin = Math.min(Math.min(tmp * nums[i], currentMin * nums[i]), nums[i]);
    finalMax = Math.max(currentMax, finalMax);
  }
  return finalMax;
};