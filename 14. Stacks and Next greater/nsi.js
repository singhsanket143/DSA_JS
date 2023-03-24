function nge(arr) {
    /**
     * Time: O(n)
     * Space: O(n)
     */
    let n = arr.length;
    let output = Array(n);
    let st = [];
    st.push(0);
    for(let i = 1; i < n; i++) {
        while(st.length > 0 && arr[i] <= arr[st[st.length - 1]]) {
            output[st[st.length - 1]] = i;
            st.pop();
        }
        st.push(i);

    }
    while(st.length > 0) {
        let topOfStack = st[st.length - 1];
        output[topOfStack] = arr.length;
        st.pop();
    }
    return output;
}

let arr = [2,2];
console.log(nge(arr));