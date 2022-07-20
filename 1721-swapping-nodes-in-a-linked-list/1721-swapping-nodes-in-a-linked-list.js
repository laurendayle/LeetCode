/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const swapNodes = (head, k) => {
  let length = 0,
      firstNode,
      secondNode,
      current = head;

  while (current) {
    length++;
    if (length === k) firstNode = current;
    current = current.next;
  }
  secondNode = head;
  for (let i = 1; i <= length - k; i++) {
    secondNode = secondNode.next;
  }
  swap(firstNode, secondNode);
  return head;
}

const swap = (nodeOne, nodeTwo) => {
  let temp = nodeOne.val;
  nodeOne.val = nodeTwo.val;
  nodeTwo.val = temp; 
}