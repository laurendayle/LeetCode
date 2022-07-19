/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const res = [];
  
  const generatePermutations = (nums, slate) => {
    if (slate.length === nums.length) {
      res.push(slate.slice());
      return;
    }
    
    for (let i = 0; i < nums.length; i++) {
      if (!slate.includes(nums[i])) {
        slate.push(nums[i]);
        generatePermutations(nums, slate);
        slate.pop();
      }
    }
  }
  
  generatePermutations(nums, []);
  return res;
};