/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/** https://leetcode.com/problems/reverse-linked-list/
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    /**
     * Time: O(N)
     * Space: O(1)
     */
    if(head == null) {
        // empty list
        return head;
    }
    let prev = null;
    let curr = head;
    let nextAdjacent = curr.next;
    while(curr != null) {
        curr.next = prev;
        prev = curr;
        curr = nextAdjacent;
        if(curr != null) {
            nextAdjacent = curr.next;
        }
    }
    head = prev;
    return head;
};