/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {

  let map = new Map();
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }
  return splitTree(preorder, map, 0, 0, inorder.length - 1);

}

var splitTree = function(preorder, map, preIndex, inLeft, inRight) {
  let rootVal = preorder[preIndex],
      root = new TreeNode(rootVal),
      mid = map.get(rootVal);
  if (mid > inLeft) {
    root.left = splitTree(preorder, map, preIndex + 1, inLeft, mid - 1);
  } 
  if (mid < inRight) {
    root.right = splitTree(preorder, map, preIndex + mid - inLeft + 1, mid + 1, inRight);
  }
  return root;
}