/**
 * https://leetcode.com/problems/array-partition/
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    let result = 0;
    nums.sort((a, b) => a-b);
    for(let i = nums.length - 2; i >= 0; i -= 2) {
        result += nums[i];
    }
    return result;
};