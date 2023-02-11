/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.com/problems/find-the-duplicate-number/
 */
var findDuplicate = function(arr) {
    let t = arr[0];
    let r = arr[0];
    do {
        t = arr[t];
        r = arr[arr[r]]; // r = arr[r]; r = arr[r];
    } while(t != r);
    t = arr[0];
    while(t != r) {
        t = arr[t];
        r = arr[r];
    }
    return t;
};