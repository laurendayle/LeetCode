/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = prices => {
  let max = -Infinity,
      min = Infinity;
  
  for (let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    max = Math.max(max, prices[i] - min);
  }
  return max; 
}