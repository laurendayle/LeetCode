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
 * @return {number[][]}
 */
var levelOrder = function(root) {

  if (!root) return [];

  let queue = [root],
      result = [];

  while (queue.length) {
    let n = queue.length; 
    let subarr = []; 

    for (var i = 0; i < n; i++) {
      let node = queue.pop();
      subarr.push(node.val);
      if (node.left) queue.unshift(node.left);
      if (node.right) queue.unshift(node.right); 
    }
    result.push(subarr); 
  }
  return result; 
}
