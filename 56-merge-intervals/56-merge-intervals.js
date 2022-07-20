/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = intervals => {

  intervals.sort((a, b) => a[0] - b[0]);

  const res = [];

  let buffer = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    let [startOne, endOne] = buffer;
    let [startTwo, endTwo] = intervals[i];

    if (startTwo > endOne) {
      res.push(buffer);
      buffer = intervals[i];
    }

    if (endOne >= startTwo) {
      buffer[1] = Math.max(endOne, endTwo);
    }
  }
  res.push(buffer);
  return res;
}