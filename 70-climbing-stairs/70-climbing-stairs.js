/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let memo = new Array(n + 1).fill(0);
  return climb_stairs(0, n, memo);
};

var climb_stairs = function(i, n, memo) {
  if (i > n) {
    return 0;
  }
  if (i === n) {
    return 1;
  }
  if (memo[i] > 0) {
    return memo[i];
  }
  memo[i] = climb_stairs(i + 1, n, memo) + climb_stairs(i + 2, n, memo);
  return memo[i];
}