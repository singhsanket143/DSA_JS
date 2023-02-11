/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.com/problems/find-peak-element/
 */
var findPeakElement = function(nums) {
    if(nums.length == 1) return 0;
    let n = nums.length;
    let lo = 0, hi = n-1;
    while(lo <= hi) {
        let mid = lo + Math.floor((hi - lo) / 2);
        if(mid+1 >= n && nums[mid] > nums[mid - 1]) {
            // rightmost element
            return mid;
        }
        if(mid - 1 < 0 && nums[mid] > nums[mid+1]) {
            return mid;
        }
        if(nums[mid] > nums[mid + 1] && nums[mid] > nums[mid - 1]) {
            return mid;
        }
        if(nums[mid] < nums[mid+1]) { // inc curve
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    return -1;
};