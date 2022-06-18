/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

var hasCycle = function(head) {
  if (!head) return false; 

  let hash = new Map(),
      current = head;
  
  while (current.next) {
    if (!hash.has(current)) {
      hash.set(current);
      current = current.next;
    } else {
      return true; 
    }
  }
  return false; 
}