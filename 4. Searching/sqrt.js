/**
 * @param {number} x
 * @return {number}
 * https://leetcode.com/problems/sqrtx/
 */
var mySqrt = function(x) {
    if(x == 0) return 0;
    let lo = 1, hi = x - 1;
    let ans = 1;
    while(lo <= hi) {
        let mid = lo + Math.floor((hi - lo) / 2);
        if(mid*mid > x) {
            hi = mid - 1;
        } else {
            ans = mid;
            lo = mid + 1;
        }
    }
    return ans;
};