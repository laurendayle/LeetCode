/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  
  // initialize a result array 
  // iterate with a for loop from 0 to nums.length 
    // initialize a product variable 
    // iterate with a for loop from 0 to nums.length 
      // if i does not equal j, multiply product by nums[j] 
    // push product to result array 
  // return result 
  
  let result = [];
  for (var i = 0; i < nums.length; i++) {
    let product = 1;
    for (var j = 0; j < nums.length; j++) {
      if (j !== i) {
        product *= nums[j];
      }
    }
    result.push(product);
  }
  return result;
};