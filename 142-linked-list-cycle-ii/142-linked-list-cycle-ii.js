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
var detectCycle = function(head) {
  if (head === null) {
    return null; 
  }
  let intersection = getIntersection(head);
  if (!intersection) {
    return null; 
  }
  
  let p1 = head;
  let p2 = intersection;
  while (p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;
  }
  return p1;
};

var getIntersection = function(head) {
  let fast = head;
  let slow = head;
  
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    
    if (slow === fast) {
      return slow;
    }
  }
  return null; 
}