/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = (nums, k) => {

  let counts = new Map();
  let buckets = [];

  for (var i = 0; i <= nums.length; i++) {
    buckets.push([]);
  }

  // count frequencies of the elements
  for (let num of nums) {
    if (counts.has(num)) {
      counts.set(num, counts.get(num) + 1);
    } else {
      counts.set(num, 1);
    }
  }

  // put them into buckets by frequency 
  for (let [key, value] of counts) {
    buckets[value].push(key);
  }

  // get the largest bucket until reaching k
  let result = [];
  for (let i = buckets.length - 1; i > 0 && result.length < k; i--) {
    if (buckets[i] !== null) {
      result.push(...buckets[i]);
    }
  }
  return result; 
}