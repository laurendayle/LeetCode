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
var middleNode = function(head) {
  if (!head) return null; 

  let index = 0,
      seenNodes = new Map(),
      current = head;

  while (current) {
    seenNodes.set(index, current);
    current = current.next;
    index++; 
  }
  index--;
  if (index % 2 !== 0) {
    return seenNodes.get(Math.ceil(index / 2));
  } 
  return seenNodes.get(index / 2); 
}