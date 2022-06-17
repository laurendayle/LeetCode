/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var topKFrequent = function(nums, k) {
    let counts = new Map();
    let buckets = [];
    for (let i = 0; i <= nums.length; i++)
        buckets.push([]);
    
    // count frequent of the elements
    for (let num of nums) {
        if (counts.has(num)) {
            counts.set(num, counts.get(num) + 1);
        } else {
            counts.set(num, 1);
        }
    } 
    // put them into buckets by frequent
    for (let [key, value] of counts) {
        buckets[value].push(key);
    }
    // fetch the larget frequest bucket first, until reach k
    let ans = [];
    for (let i = buckets.length - 1; i > 0 && ans.length < k; i--) {
        if (buckets[i] !== null) ans.push(...buckets[i]);
    }
    return ans;
};