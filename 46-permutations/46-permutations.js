/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const result = []; 
  
  const generatePermutations = (nums, idx, slate) => {
    if (slate.length === nums.length) {
      result.push([...slate]);
      return;
    }
    
    for (let i = 0; i < nums.length; i++) {
      if (!slate.includes(nums[i])) {
        slate.push(nums[i]);
        generatePermutations(nums, idx + 1, slate); 
        slate.pop(); 
      }
    }
  }
  
  generatePermutations(nums, 0, []);
  return result; 
};