/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  const counts = Array(amount + 1).fill(Infinity);
  counts[0] = 0;
  
  for (let i = 1; i <= amount; i++) {
    for (let j = 0;  j < coins.length; j++) {
      if (coins[j] <= i) {
        counts[i] = Math.min(counts[i], counts[i - coins[j]] + 1);
      }
    }
  }
  return counts[amount] > amount ? -1 : counts[amount];
};