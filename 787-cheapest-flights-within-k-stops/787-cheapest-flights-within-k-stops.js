/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
  let prices = Array.from(({length: n + 1}), () => Infinity);
  prices[src] = 0;
  
  for (let i = 0; i < k + 1; i++) {
    const temp = [...prices];
    
    for (const [x, y, price] of flights) {
      if (prices[x] === Infinity) continue;
      temp[y] = Math.min(temp[y], prices[x] + price);
    }
    prices = temp;
  }
  return prices[dst] === Infinity ? -1 : prices[dst];
};