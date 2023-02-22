function counting_sort(arr) {
    /**
     * Time: O(n+k)
     * Space: O(k)
     */
    // only non negative integers
    let maxEl = -Infinity;
    let minEl = Infinity;
    for(let i = 0; i < arr.length; i++) {
        maxEl = Math.max(maxEl, arr[i]);
        minEl = Math.min(minEl, arr[i]);
    }
    let freq = Array(maxEl - minEl + 1).fill(0);
    for(let i = 0; i < arr.length; i++) {
        let currElement = arr[i] - minEl;
        freq[currElement]++;
    }
    // prefix sum
    for(let i = 1; i < freq.length; i++) {
        freq[i] = freq[i] + freq[i-1];
    }
    let output = Array(arr.length);
    for(let i = arr.length - 1; i >= 0; i--) {
        let currElement = arr[i] - minEl;
        output[freq[currElement] - 1] = arr[i];
        freq[currElement]--;
    }
    return output;
}

console.log(counting_sort([5, 4, -2, -3, -2, 1, 5, 4, -3]))

// [1, 2,3 , -4]
// [-4, -3, -2, -1, 0, 1, 2, 3] 
// 3 - (-4) + 1