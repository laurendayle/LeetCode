/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = nums => {

  let hash = new Map();
  for (var i = 0; i < nums.length; i++) {
    if (!hash.has(nums[i])) {
      hash.set(nums[i], 1);
    } else {
      hash.set(nums[i], hash.get(nums[i]) + 1);
    }
  }
  let result = [];
  for (var [k, v] of hash) {
    if (v === 1) {
      result.push(k);
    }
  }
  return result; 
}