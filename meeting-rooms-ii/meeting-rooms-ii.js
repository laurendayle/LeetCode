/**
 * @param {number[][]} intervals
 * @return {number}
 */
const minMeetingRooms = intervals => {


  let start = intervals.sort((a, b) => a[0] - b[0]);
  let end = [...intervals].sort((a, b) => a[1] - b[1]);

  let rooms = 0, j = 0;

  for (let i = 0; i < intervals.length; i++) {
    if (start[i][0] < end[j][1]) {
      rooms++;
    } else {
      j++;
    }
  }
  return rooms;
}