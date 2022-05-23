/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function( prices ) {

        let maxProfit = 0;
        let currentMin = prices[0];

        prices.forEach((n) => {
            currentMin = Math.min( n, currentMin );
            maxProfit = Math.max( maxProfit, n - currentMin );
        });
    
    return maxProfit;
};