/**
 * @param {number[][]} intervals
 * @return {number}
 */
const minMeetingRooms = intervals => {
  if (!intervals.length) return 0;

  let rooms = 0,
      end = 0,
      starts = intervals.map(a => a[0]).sort((a, b) => a - b),
      ends = intervals.map(a => a[1]).sort((a, b) => a - b);

  for (let i = 0; i < intervals.length; i++) {
    if (starts[i] < ends[end]) {
      rooms++;
    } else {
      end++;
    }
  }
  return rooms;
}