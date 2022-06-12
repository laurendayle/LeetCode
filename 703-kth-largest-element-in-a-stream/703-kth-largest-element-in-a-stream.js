/**
 * @param {number} k
 * @param {number[]} nums
 */
function MinHeap() {
  this.arr = [];
}

MinHeap.prototype.insert = function (item) {
  this.arr.push(item);

  // place item in correct position
  // get indexes: curr and its parent
  let curr = this.arr.length - 1,
    parent = Math.floor((curr - 1) / 2);

  // if the item is smaller than its parent
  while (this.arr[curr] < this.arr[parent]) {
    [this.arr[curr], this.arr[parent]] = [this.arr[parent], this.arr[curr]]; // swap

    // reset parent and curr
    curr = parent;
    parent = Math.floor((curr - 1) / 2);
    if (parent < 0) {
      // if already top element
      break;
    }
  }
};
/**
 * Remove the minimum element from the heap
 * @returns {integer}
 */
MinHeap.prototype.extractMin = function () {
  // swap the first and last element and pop the last element off
  [this.arr[0], this.arr[this.arr.length - 1]] = [
    this.arr[this.arr.length - 1],
    this.arr[0],
  ];
  const minVal = this.arr.pop();

  // find the correct position
  let curr = 0,
    left = curr * 2 + 1,
    right = curr * 2 + 2;

  // calculate min of left and right
  // if arr[right] does not exist, then left is the min
  let min;
  if (right >= this.arr.length) {
    min = left;
  } else if (left >= this.arr.length) {
    // if arr[left] does not exist, set null
    min = null;
  } else {
    min = this.arr[left] < this.arr[right] ? left : right;
  }
  // if the curr is greater than the min of child, swap
  while (this.arr[curr] > this.arr[min] && this.arr[min] !== null) {
    [this.arr[curr], this.arr[min]] = [this.arr[min], this.arr[curr]];
    // reset curr and min
    curr = min;
    left = curr * 2 + 1;
    right = curr * 2 + 2;
    min = this.arr[left] < this.arr[right] ? left : right;
  }
  return minVal;
};

/**
 * Get size of heap
 * @returns {integer}
 */

MinHeap.prototype.size = function () {
  return this.arr.length;
};

/**
 * Return the minimum element from the heap
 * @returns {integer}
 */

MinHeap.prototype.getMin = function () {
  return this.arr[0];
};

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
  this.k = k;

  // create the heap from arr
  this.minHeap = new MinHeap();
  for (const num of nums) {
    this.minHeap.insert(num);
  }

  // min size of k; so that kth largest element in top heap
  while (this.minHeap.size() > this.k) {
    this.minHeap.extractMin();
  }

}

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  this.minHeap.insert(val);
  // if heap is initialized with less than k elements
  if (this.minHeap.size() > this.k) {
    this.minHeap.extractMin(); // maintain the size of the heap
  }
  return this.minHeap.getMin();
}

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */