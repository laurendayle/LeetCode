/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
  let result = [];
  
  for (var i = 0; i < temperatures.length; i++) {
    let inserted = false; 
    let current = temperatures[i];
    let count = 0; 
    for (var j = i + 1; j < temperatures.length; j++) {
      let future = temperatures[j];

      if (future > current) {
        result.push(j - i);
        inserted = true; 
        break;
      } 
    }
    if (!inserted) {
      result.push(0);
    }
  }
  return result;
};