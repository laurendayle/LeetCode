/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    var count = 0;
    
    nums.forEach((n) => {
        var length = n.toString().length;
        if (length % 2 === 0) {
            count++;
        }
    })
    return count;
};