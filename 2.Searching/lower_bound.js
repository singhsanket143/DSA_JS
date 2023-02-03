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

console.log(lower_bound([1,2,2,3,3,3,5,5,8], -2))