/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 */
function lower_bound(arr, x) { // >= x
    /**
     * Time: O(logn)
     * Space: O(1)
     */
    let lo = 0, hi = arr.length - 1;
    let ans = arr.length;
    while(lo <= hi) {
        let mid = lo + Math.floor((hi - lo) / 2);
        if(arr[mid] < x) {
            lo = mid + 1;
        } else {
            ans = mid;
            hi = mid - 1;
        }
    }
    return ans;
}

function upper_bound(arr, x) { // > x
    /**
     * Time: O(logn)
     * Space: O(1)
     */
    let lo = 0, hi = arr.length - 1;
    let ans = arr.length;
    while(lo <= hi) {
        let mid = lo + Math.floor((hi - lo) / 2);
        if(arr[mid] <= x) {
            lo = mid + 1;
        } else {
            ans = mid;
            hi = mid - 1;
        }
    }
    return ans;
}
var searchRange = function(nums, target) {
    let lb = lower_bound(nums, target);
    if(lb >= nums.length || nums[lb] != target) {
        // target is missing
        return [-1, -1];
    }
    let ub = upper_bound(nums, target);
    return [lb, ub - 1];
};













