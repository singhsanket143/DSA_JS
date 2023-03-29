/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(head == null) return head;
    if(head.next == null && n==1) return null;
    let lo = head, hi = head;
    let count = 1;
    let n_plus_1 = n + 1;
    while(count < n_plus_1 && hi != null) {
        hi = hi.next;
        count++;
    }
    if(hi == null) {
        let newHead = head.next;
        head.next = null;
        return newHead;
    }
    while(hi.next != null) {
        hi = hi.next;
        lo = lo.next;
    }
    
    // lo -> (n+1)th node from last
    let nextOfToBeRemoved = lo.next.next;
    let toBeRemoved = lo.next;
    lo.next = nextOfToBeRemoved;
    toBeRemoved.next = null;
    return head;
};s