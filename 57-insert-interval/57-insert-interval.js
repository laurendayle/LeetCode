/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
const insert = (intervals, newInterval) => {

  const res = [];

  for (const interval of intervals) {
    const [startOne, endOne] = newInterval;
    const [startTwo, endTwo] = interval;

    const min = Math.min(startOne, startTwo);
    const max = Math.max(endOne, endTwo);

    if (endOne < startTwo) {
      res.push(newInterval);
      newInterval = interval;
    } else if (endTwo < startOne) {
      res.push(interval);
    } else {
      newInterval = [min, max];
    }
  }
  res.push(newInterval);
  return res;
}