/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // time: O(max(n, m))
    let res = null;
    let temp1 = l1;
    let temp2 = l2;
    let resultHead = null;
    let carry = 0;
    while(temp1 != null || temp2 != null) {
        let d1 = (temp1 != null) ? temp1.val : 0;
        let d2 = (temp2 != null) ? temp2.val : 0;
        let sum = d1 + d2 + carry;
        let digit = sum % 10; // the last digit of the sum
        carry = Math.floor(sum/10); 
        let newNode = new ListNode(digit);
        if(resultHead == null) {
            res = newNode;
            resultHead = newNode;
        }
        else {
            res.next = newNode;
            res = newNode;
        }
        if(temp1 != null) temp1 = temp1.next;
        if(temp2 != null) temp2 = temp2.next;
    }
    if(carry != 0) {
        let newNode = new ListNode(carry);
        res.next = newNode;
    }
    return resultHead;
};