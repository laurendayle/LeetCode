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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  return traversal(root, []);
};

var traversal = function(root, order) {
  if (!root) return [];
  
  if (root.left) order = traversal(root.left, order);
  order.push(root.val);
  if (root.right) order = traversal(root.right, order);
  
  return order; 
}

var inorderTraversal = function(root) {
  let result = [],
      stack = [],
      current = root;
  
  while (current !== null || stack.length) {
    while (current !== null) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    result.push(current.val);
    current = current.right;
  }
  return result; 
}