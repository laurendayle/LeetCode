/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
  this.values = nums.sort((a, b) => a - b);
  this.k = k;
}

KthLargest.prototype.add = function(val) {
  // search for a place to put val using binary search 
  let left = 0, right = this.values.length - 1;
  while (left < right) {
    let mid = left + Math.floor((right + 1 - left) / 2);
    if (val < this.values[mid]) {
      right = mid - 1; 
    } else {
      left = mid; 
    }
  }

  // push val into nums 
  let idx = this.values[left] < val ? 1 : 0; 
  this.values.splice(left + idx, 0, val); 
  return this.values[this.values.length - this.k];
}

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */