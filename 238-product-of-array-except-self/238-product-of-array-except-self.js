/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let length = nums.length; 
  let L = [];
  let R = [];
  let answer = [];
  
  L[0] = 1;
  for (var i = 1; i < length; i++) {
    L[i] = nums[i - 1] * L[i - 1];
  }

  R[length - 1] = 1;
  for (var i = length - 2; i >= 0; i--) {
    R[i] = nums[i + 1] * R[i + 1];
  }
  
  for (var i = 0; i < length; i++) {
    answer[i] = L[i] * R[i];
  }
  return answer; 
};