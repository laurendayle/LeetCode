/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = prices => {

  var minPrice = Infinity,  
      maxProfit = 0;

  for (var i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }
  return maxProfit;
}