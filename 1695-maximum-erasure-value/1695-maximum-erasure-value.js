/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function(nums) {
  let start = 0,
      set = new Set(),
      result = 0,
      currentSum = 0;
  
  for (var end = 0; end < nums.length; end++) {
    // increment start until subarray has unique elements
    while (set.has(nums[end])) {
      set.delete(nums[start]);
      currentSum -= nums[start];
      start++;
    }
    currentSum += nums[end];
    set.add(nums[end]);
    // update result with max sum thus far
    result = Math.max(result, currentSum);
  }
  return result; 
};