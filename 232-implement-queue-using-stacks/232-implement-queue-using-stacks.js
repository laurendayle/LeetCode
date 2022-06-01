
var MyQueue = function() {
  this.input = [];
  this.output = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.input.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  let popped;
  while (this.input.length) {
    this.output.push(this.input.pop());
  }
  popped = this.output.pop();
  while (this.output.length) {
    this.input.push(this.output.pop());
  }
  return popped;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  return this.input[0];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.input.length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */