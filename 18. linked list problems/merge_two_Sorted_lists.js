/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let dummyHead = new ListNode(-1);
    let temp = dummyHead;
    let i = list1, j = list2;
    while(i != null && j != null) {
        if(i.val < j.val) {
            temp.next = i;
            temp = temp.next;
            i = i.next;
            temp.next = null;
        } else {
            temp.next = j;
            temp = temp.next;
            j = j.next;
            temp.next = null;
        }
    }
    if(i == null) temp.next = j;
    if(j == null) temp.next = i;
    return dummyHead.next;
};