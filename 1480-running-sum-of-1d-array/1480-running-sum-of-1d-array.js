/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sum = 0;
    let result = []
    nums.forEach(num => {
        result.push(sum += num); 
    })
    return result;
};