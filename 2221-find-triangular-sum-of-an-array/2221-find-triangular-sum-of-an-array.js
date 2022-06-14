/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function(nums) {
  var recurse = function(arr) {
    if (arr.length === 1) {
        return arr; 
    } 
    let newNums = new Array(arr.length - 1).fill(0);
    for (var i = 0; i < newNums.length; i++) {
      newNums[i] = (arr[i] + arr[i + 1]) % 10; 
    }
    return recurse(newNums);
  };
    
    
  let result = recurse(nums);
  return result[0];
};