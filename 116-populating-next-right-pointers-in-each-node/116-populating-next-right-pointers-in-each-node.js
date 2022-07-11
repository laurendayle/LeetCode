/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if (!root) return root;
  
  let leftNode = root;
  
  while (leftNode.left) {
    let current = leftNode;
    while (current) {
      current.left.next = current.right;
      
      if (current.next) {
        current.right.next = current.next.left;
      }
      current = current.next;
    }
    leftNode = leftNode.left;
  }
  return root;
};