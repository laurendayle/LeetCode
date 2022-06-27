/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = prices => {

  let minPrice = +Infinity,
      maxProfit = 0;
    
  for (var i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    maxProfit = Math.max(prices[i] - minPrice, maxProfit);
  }
  return maxProfit;
}