/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * https://leetcode.com/problems/subarray-sum-equals-k/
 */
var subarraySum = function(nums, k) {
    let mp = {};
    let prefixSum = nums[0];
    mp[nums[0]] = 1;
    let ans = 0;
    if(prefixSum == k) ans++;
    for(let i = 1; i < nums.length; i++) {
        prefixSum += nums[i];
        if(mp[prefixSum - k]) {
            ans += mp[prefixSum - k]
        } 
        if(prefixSum == k) {
            ans += 1;
        }
        if(mp[prefixSum]) {
            mp[prefixSum]++;
        } else {
            mp[prefixSum] = 1; // create an entry
        }
        
    }
    return ans;
};
