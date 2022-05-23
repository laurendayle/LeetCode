/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    var result = [];
    
    for (var i = 0; i < nums.length; i++) {
        var count = 0; 
        
        for (var j = 0; j < nums.length; j++) {
            if (nums[j] < nums[i]) {
                count++;
            }
        }
        result.push(count);
    }
    return result;
};