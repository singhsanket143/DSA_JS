/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.com/problems/single-element-in-a-sorted-array/
 */
var singleNonDuplicate = function(nums) {
    if(nums.length == 1) return nums[0];
    let n = nums.length;
    let lo = 0, hi = n-1;
    while(lo <= hi) {
        let mid = lo + Math.floor((hi - lo) / 2);
        if(mid + 1 >= n && nums[mid-1] != nums[mid] ) {
            return nums[mid];
        }
        if(mid - 1 < 0 && nums[mid+1] != nums[mid]) {
            return nums[mid];
        }
        if(nums[mid-1] != nums[mid] && nums[mid+1] != nums[mid]) {
            return nums[mid];
        }
        
        if(nums[mid] == nums[mid-1]) { // mid-> 2nd occ
            if(mid % 2 == 0) {
                hi = mid - 2;
            } else {
                lo = mid + 1;
            }
        } else { // mid -> 1st occ
            if(mid % 2 == 0) {
                lo = mid + 2;
            } else {
                hi = mid - 1;
            }
        }
    }
    return -1;
};