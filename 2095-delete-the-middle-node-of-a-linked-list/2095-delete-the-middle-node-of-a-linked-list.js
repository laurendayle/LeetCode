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
var deleteMiddle = function(head) {
  if (!head) return null; 

  let curr = head,
      index = 0; 

  while (curr) {
    curr = curr.next;
    index++;
  }
  
  index = Math.floor(index / 2); 
  curr = head;

  if (index === 0) return null; 
  
  let idx = 0,
      prev = null; 
  
  while (curr && idx !== index) {
    idx++; 
    prev = curr; 
    curr = curr.next; 
  }
  curr = curr.next;
  prev.next = curr; 

  
  return head; 
}