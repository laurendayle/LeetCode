/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = head => {
  if (!head) return null; 

  let curr = head,
      seen = new Map(),
      index = 0;

  while (curr) {
    if (seen.has(curr)) return curr; 
    seen.set(curr); 
    index++; 
    curr = curr.next;
  }
  return null;
}