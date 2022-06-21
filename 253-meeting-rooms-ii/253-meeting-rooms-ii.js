/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = intervals => {
  if (intervals.length < 2) return intervals.length;

  intervals.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);

  let roomTime = [intervals[0][1]];

  for (var i = 1; i < intervals.length; i++) {
    // let [start, end] = [...intervals[i]];
    let [start, end] = [...intervals[i]];
    let earliest = Math.min(...roomTime);

    if (start < earliest) {
      roomTime.push(end);
    } else {
      roomTime[roomTime.indexOf(earliest)] = end;
    }
  }
  return roomTime.length;
}