/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
  // initialize a currentSubarray variable and set to nums[0]
  let currentSub= nums[0];
  // initialize a maxSubarray variable and set to nums[0]
  let maxSub = nums[0];
  // iterate through the array starting with the 2nd element
  for (var i = 1; i < nums.length; i++) {
    let num = nums[i];
    // determine if num is worth keeping and add to currentSubarray 
    currentSub= Math.max(num, currentSub + num);
    // if currentSubarray is greater than maxSubarray, set max to current 
    maxSub = Math.max(maxSub, currentSub);
  }
  return maxSub;
}