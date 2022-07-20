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
const swapPairs = head => {
  if ((head === null) || (head.next === null)) return head;

  let firstNode = head,
      secondNode = head.next;

  firstNode.next = swapPairs(secondNode.next);
  secondNode.next = firstNode;

  return secondNode;
}