/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  
  for (let i = 1; i < intervals.length; i++) {
    let [startOne, endOne] = intervals[i - 1];
    let [startTwo, endTwo] = intervals[i];
    
    if (endOne > startTwo) return false;
  }
  return true; 
};