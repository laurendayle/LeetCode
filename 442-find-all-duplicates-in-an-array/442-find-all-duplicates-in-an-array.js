/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
   let hash = new Map();
  const res = []; 
  for (let i = 0; i < nums.length; i++) {
    if (!hash.has(nums[i])) {
      hash.set(nums[i], 1);
    } else {
      res.push(nums[i]);
    }
  }
  return res;
};