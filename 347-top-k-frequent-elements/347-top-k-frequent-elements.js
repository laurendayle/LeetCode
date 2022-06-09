/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {

  let hash = new Map(); // keeps track of frequencies of each number in nums 
  for (var n of nums) { // loop through to store each item in hash map 
    if (hash.has(n)) {
      hash.set(n, hash.get(n) + 1);
    } else {
      hash.set(n, 1);
    }
  }
  /* Create an array of buckets with length nums.length + 1 since we don't want to track the integers with '0' frequency and it will be easier to 1-index the rest of them

  Fill the array with empty subarrays using Array.from method so JS will pass the subarrays by reference */
  let buckets = Array.from( new Array(nums.length + 1), () => []);

  // for every frequency in hash, push its key (element) into the corresponding bucket 
  for (var [key, value] of hash) {
    if (buckets[value]) {
      buckets[value].push(key);
    } else {
      buckets[value] = [key];
    }
  }

  // create a result array and walk backwards through the buckets, pushing the subarray into the result array 
  const result = [];
  for (var i = buckets.length - 1; i >= 0; i--) {
    const bucket = buckets[i];

    for (let j = 0; j < bucket.length; j++) {
      result.push(bucket[j]);
    }
  }
  // slice the result array from 0 to k elements to return the k most frequent elements 
  return result.slice(0, k);
}