/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  const squared = nums.map((n) => {
    return n**2;
  })
  return squared.sort((a, b) => {
    return a - b; 
  })
};