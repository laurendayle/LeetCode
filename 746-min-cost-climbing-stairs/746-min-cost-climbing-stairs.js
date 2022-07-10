/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  let minCost = new Array(cost.length + 1).fill(0);
  
  for (var i = 2; i < minCost.length; i++) {
    let oneStep = minCost[i - 1] + cost[i - 1];
    let twoSteps = minCost[i - 2] + cost[i - 2];
    minCost[i] = Math.min(oneStep, twoSteps);
  }
  return minCost[minCost.length - 1];
};