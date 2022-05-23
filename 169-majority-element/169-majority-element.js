/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var counts = {};
    for (var i = 0; i < nums.length; i++) {
        if (counts[nums[i]] === undefined) {
            counts[nums[i]] = 1;
        } else {
            counts[nums[i]]++;
        }
    }
    
    for (var key in counts) {
        if (counts[key] > (nums.length / 2)) {
            return key;
        }
    }
    
};
