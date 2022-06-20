/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = nums => {
  // base cases 
  if (nums.length === 1) return new TreeNode(nums[0]);
  if (nums.length === 0) return null; 

  // get index of root node 
  let mid = Math.floor(nums.length / 2);
  let root = new TreeNode(nums[mid]); 

  // recursively create left subtree from left subarr 
  let leftSubtree = nums.slice(0, mid); 
  root.left = sortedArrayToBST(leftSubtree);

  // recursively create right subtree from right subarr 
  let rightSubtree = nums.slice(mid + 1); 
  root.right = sortedArrayToBST(rightSubtree);

  return root; 
}