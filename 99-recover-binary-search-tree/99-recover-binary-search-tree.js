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
 * @return {void} Do not return anything, modify root in-place instead.
 */
const recoverTree = root => {
  const stack = [];

  let node1 = null,
      node2 = null,
      prev = null,
      next = root;

  while (next || stack.length) {
    while (next) {
      stack.push(next);
      next = next.left;
    }
    next = stack.pop();
    if (node1 === null && prev !== null && prev.val > next.val) {
      node1 = prev;
    }
    if (node1 !== null && prev !== null && prev.val > next.val) {
      node2 = next;
    }
    prev = next;
    next = next.right; 
  }
  [node1.val, node2.val] = [node2.val, node1.val];
}
