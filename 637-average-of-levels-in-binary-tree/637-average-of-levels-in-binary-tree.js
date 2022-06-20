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
var averageOfLevels = function(root) {

  if (!root) return null; 

  let queue = [root],
      visited = [];

  while (queue.length) {
    let n = queue.length,
        subarr = [];

    for (var i = 0; i < n; i++) {
      let node = queue.pop();
      subarr.push(node.val);

      if (node.left) queue.unshift(node.left);
      if (node.right) queue.unshift(node.right);
    }
    let sum = subarr.reduce((sum, value) => {
      return sum += value; 
    }, 0)
    visited.push(sum / subarr.length); 
  }
  return visited; 
}