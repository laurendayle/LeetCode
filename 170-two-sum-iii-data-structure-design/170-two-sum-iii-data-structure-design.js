
var TwoSum = function() {
  this.ints = []; 
};

/** 
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function(number) {
  this.ints.push(number); 
};

/** 
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function(value) {
  let hash = new Map(); 
  for (var i = 0; i < this.ints.length; i++) {
    let complement = value - this.ints[i]; 
    if (hash.has(complement)) {
      return true; 
    }
    hash.set(this.ints[i], i); 
  }
  return false; 
};

/** 
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */