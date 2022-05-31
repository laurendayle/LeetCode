/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */



var BSTIterator = function(root) {
  this.node = root; 
  this.stack = [];

  const inOrderTraverse = (node) => {
    if (!node) {
      return null; 
    }
  
    inOrderTraverse(node.right);
    this.stack.push(node);
    inOrderTraverse(node.left);
  }
  inOrderTraverse(root);
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  this.node = this.stack.pop();
  return this.node.val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return this.stack.length; 
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

