/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = (arr, k) => {
  let n = arr.length;

  const res = [], 
        deque = [];

  for (let i = 0; i < k; i++) {
    while (deque.length && arr[i] >= arr[deque[deque.length - 1]]) {
      deque.pop();
    }
    deque.push(i);
  }

  for (let i = k; i < n; i++) {
    res.push(arr[deque[0]]);

    while (deque.length && arr[i] >= arr[deque[deque.length - 1]]) {
      deque.pop();
    }

    while (deque.length && i - k >= deque[0]) {
      deque.shift();
    }
    deque.push(i);
  }
  res.push(arr[deque[0]]);
  return res;
}