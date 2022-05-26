/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    
  if (!head) {
    return null;
    
  }
  
  while (head.next) {
    head.next.prev = head;
    head = head.next;
  }
  
  const root = head;
  
  while (head.prev) {
    head.next = head.prev;
    head = head.next;
  }
  
  head.next = null;
  
  return root;
};
