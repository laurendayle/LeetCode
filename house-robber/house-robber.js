/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let hash = new Map();
  
  const dp = function(i) {
    if (i === 0) {
      return nums[0];
    }
    if (i === 1) {
      return Math.max(nums[0], nums[1]);
    }
    if (!hash.has(i)) {
      hash.set(i, Math.max(dp(i - 1), dp(i - 2) + nums[i]));
    }
    return hash.get(i);
  }
  return dp(nums.length - 1);
};