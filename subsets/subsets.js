/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const res = [];
  
  const generateSubsets = (nums, slate, i) => {
    if (i === nums.length) {
      res.push(slate.slice());
      return;
    }
    
    generateSubsets(nums, slate, i + 1);

    slate.push(nums[i]); 
    generateSubsets(nums, slate, i + 1);
    slate.pop();
  }
  generateSubsets(nums, [], 0);
  return res;
};