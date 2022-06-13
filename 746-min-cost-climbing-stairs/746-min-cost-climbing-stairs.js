/**
 * @param {number[]} cost
 * @return {number}
 */
// top-down approach -> O(n) space + time 
var minCostClimbingStairs = function(cost) {
  let minCost = new Array(cost.length + 1).fill(0);
  // start iteration from step 2, since the min cost of reaching 0 and 1 is 0
  for (var i = 2; i < minCost.length; i++) {
    let oneStep = minCost[i - 1] + cost[i - 1];
    let twoSteps = minCost[i - 2] + cost[i - 2];
    minCost[i] = Math.min(oneStep, twoSteps);
  }
  return minCost[minCost.length - 1];
};

// bottom-up approach -> O(n) space + time 
var minCostClimbingStairs = function(cost) {
  let hash = new Map();
  
  var minCost = function(i, cost) {
    // base case 
    if (i <= 1) {
      return 0; 
    }
    if (hash.has(i)) {
      return hash.get(i);
    }
    let oneStep = cost[i - 1] + minCost(i - 1, cost);
    let twoSteps = cost[i - 2] + minCost(i - 2, cost);
    hash.set(i, Math.min(oneStep, twoSteps));
    return hash.get(i);
  }
  return minCost(cost.length, cost);
}; 