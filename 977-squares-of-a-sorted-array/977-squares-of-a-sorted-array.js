/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const squared = nums.map((n) => {
        return n**2;
    });
    
    const sortedSquared = squared.sort((a, b) => {
        return a - b;
    });
    
    return sortedSquared;
};