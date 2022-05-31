/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 
 
 Given an array of integers and an integer target, return the indices of the two elements that add up to target 
 
 I: array of integers
 O: array of two indices 
 C: cannot use same element twice 
 E: empty array, 1 or two elements 
 */
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let index = nums.indexOf(target - nums[i]);
    if (index !== -1 && index !== i) {
      return [i, index];
    }
  }
};